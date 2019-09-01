import test from '@interactjs/_dev/test/test';
import drag from '@interactjs/actions/drag';
import * as helpers from '@interactjs/core/tests/_helpers';
import autoStart from './base';
test('autoStart', t => {
    const rect = { top: 100, left: 200, bottom: 300, right: 400 };
    const { interaction, interactable, event, coords, target: element, } = helpers.testEnv({
        plugins: [autoStart, drag],
        rect,
    });
    interactable.draggable(true);
    interaction.pointerType = coords.pointerType = 'mouse';
    coords.buttons = 1;
    interaction.pointerDown(event, event, element);
    t.deepEqual(interaction.prepared, { name: 'drag', axis: 'xy', edges: undefined }, 'prepares action');
    t.deepEqual(interaction.rect, rect, 'set interaction.rect');
    t.equal(element.style.cursor, 'move', 'sets drag cursor');
    let checkerArgs;
    interactable.draggable({
        cursorChecker(...args) {
            checkerArgs = args;
            return 'custom-cursor';
        },
    });
    interaction.pointerDown(event, event, element);
    t.deepEqual(checkerArgs, [{ name: 'drag', axis: 'xy', edges: undefined }, interactable, element, false], 'calls cursorChecker with expected args');
    interaction.pointerDown(event, event, element);
    t.equal(element.style.cursor, 'custom-cursor', 'uses cursorChecker value');
    coords.page.x += 10;
    coords.client.x += 10;
    interaction.pointerMove(event, event, element);
    t.ok(interaction._interacting, 'down -> move starts action');
    t.deepEqual(checkerArgs, [{ name: 'drag', axis: 'xy', edges: undefined }, interactable, element, true], 'calls cursorChecker with true for interacting arg');
    t.end();
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b1N0YXJ0LnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhdXRvU3RhcnQuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLElBQUksTUFBTSw0QkFBNEIsQ0FBQTtBQUM3QyxPQUFPLElBQUksTUFBTSwwQkFBMEIsQ0FBQTtBQUMzQyxPQUFPLEtBQUssT0FBTyxNQUFNLGlDQUFpQyxDQUFBO0FBQzFELE9BQU8sU0FBUyxNQUFNLFFBQVEsQ0FBQTtBQUU5QixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxFQUFFO0lBQ3BCLE1BQU0sSUFBSSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxDQUFBO0lBQzdELE1BQU0sRUFDSixXQUFXLEVBQ1gsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBQ04sTUFBTSxFQUFFLE9BQU8sR0FDaEIsR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDO1FBQ2xCLE9BQU8sRUFBRSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUM7UUFDMUIsSUFBSTtLQUNMLENBQUMsQ0FBQTtJQUVGLFlBQVksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDNUIsV0FBVyxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQTtJQUN0RCxNQUFNLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQTtJQUVsQixXQUFXLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUE7SUFFOUMsQ0FBQyxDQUFDLFNBQVMsQ0FDVCxXQUFXLENBQUMsUUFBUSxFQUNwQixFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLEVBQzlDLGlCQUFpQixDQUNsQixDQUFBO0lBRUQsQ0FBQyxDQUFDLFNBQVMsQ0FDVCxXQUFXLENBQUMsSUFBSSxFQUNoQixJQUFXLEVBQ1gsc0JBQXNCLENBQ3ZCLENBQUE7SUFFRCxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxrQkFBa0IsQ0FBQyxDQUFBO0lBRXpELElBQUksV0FBVyxDQUFBO0lBRWYsWUFBWSxDQUFDLFNBQVMsQ0FBQztRQUNyQixhQUFhLENBQUUsR0FBRyxJQUFJO1lBQ3BCLFdBQVcsR0FBRyxJQUFJLENBQUE7WUFFbEIsT0FBTyxlQUFlLENBQUE7UUFDeEIsQ0FBQztLQUNGLENBQUMsQ0FBQTtJQUVGLFdBQVcsQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQTtJQUU5QyxDQUFDLENBQUMsU0FBUyxDQUNULFdBQVcsRUFDWCxDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsRUFBRSxZQUFZLEVBQUUsT0FBTyxFQUFFLEtBQUssQ0FBQyxFQUM5RSx3Q0FBd0MsQ0FDekMsQ0FBQTtJQUVELFdBQVcsQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQTtJQUM5QyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLGVBQWUsRUFBRSwwQkFBMEIsQ0FBQyxDQUFBO0lBRTFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtJQUNuQixNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUE7SUFDckIsV0FBVyxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFBO0lBQzlDLENBQUMsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRSw0QkFBNEIsQ0FBQyxDQUFBO0lBRTVELENBQUMsQ0FBQyxTQUFTLENBQ1QsV0FBVyxFQUNYLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxFQUFFLFlBQVksRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLEVBQzdFLG1EQUFtRCxDQUNwRCxDQUFBO0lBRUQsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFBO0FBQ1QsQ0FBQyxDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdGVzdCBmcm9tICdAaW50ZXJhY3Rqcy9fZGV2L3Rlc3QvdGVzdCdcbmltcG9ydCBkcmFnIGZyb20gJ0BpbnRlcmFjdGpzL2FjdGlvbnMvZHJhZydcbmltcG9ydCAqIGFzIGhlbHBlcnMgZnJvbSAnQGludGVyYWN0anMvY29yZS90ZXN0cy9faGVscGVycydcbmltcG9ydCBhdXRvU3RhcnQgZnJvbSAnLi9iYXNlJ1xuXG50ZXN0KCdhdXRvU3RhcnQnLCB0ID0+IHtcbiAgY29uc3QgcmVjdCA9IHsgdG9wOiAxMDAsIGxlZnQ6IDIwMCwgYm90dG9tOiAzMDAsIHJpZ2h0OiA0MDAgfVxuICBjb25zdCB7XG4gICAgaW50ZXJhY3Rpb24sXG4gICAgaW50ZXJhY3RhYmxlLFxuICAgIGV2ZW50LFxuICAgIGNvb3JkcyxcbiAgICB0YXJnZXQ6IGVsZW1lbnQsXG4gIH0gPSBoZWxwZXJzLnRlc3RFbnYoe1xuICAgIHBsdWdpbnM6IFthdXRvU3RhcnQsIGRyYWddLFxuICAgIHJlY3QsXG4gIH0pXG5cbiAgaW50ZXJhY3RhYmxlLmRyYWdnYWJsZSh0cnVlKVxuICBpbnRlcmFjdGlvbi5wb2ludGVyVHlwZSA9IGNvb3Jkcy5wb2ludGVyVHlwZSA9ICdtb3VzZSdcbiAgY29vcmRzLmJ1dHRvbnMgPSAxXG5cbiAgaW50ZXJhY3Rpb24ucG9pbnRlckRvd24oZXZlbnQsIGV2ZW50LCBlbGVtZW50KVxuXG4gIHQuZGVlcEVxdWFsKFxuICAgIGludGVyYWN0aW9uLnByZXBhcmVkLFxuICAgIHsgbmFtZTogJ2RyYWcnLCBheGlzOiAneHknLCBlZGdlczogdW5kZWZpbmVkIH0sXG4gICAgJ3ByZXBhcmVzIGFjdGlvbidcbiAgKVxuXG4gIHQuZGVlcEVxdWFsKFxuICAgIGludGVyYWN0aW9uLnJlY3QsXG4gICAgcmVjdCBhcyBhbnksXG4gICAgJ3NldCBpbnRlcmFjdGlvbi5yZWN0J1xuICApXG5cbiAgdC5lcXVhbChlbGVtZW50LnN0eWxlLmN1cnNvciwgJ21vdmUnLCAnc2V0cyBkcmFnIGN1cnNvcicpXG5cbiAgbGV0IGNoZWNrZXJBcmdzXG5cbiAgaW50ZXJhY3RhYmxlLmRyYWdnYWJsZSh7XG4gICAgY3Vyc29yQ2hlY2tlciAoLi4uYXJncykge1xuICAgICAgY2hlY2tlckFyZ3MgPSBhcmdzXG5cbiAgICAgIHJldHVybiAnY3VzdG9tLWN1cnNvcidcbiAgICB9LFxuICB9KVxuXG4gIGludGVyYWN0aW9uLnBvaW50ZXJEb3duKGV2ZW50LCBldmVudCwgZWxlbWVudClcblxuICB0LmRlZXBFcXVhbChcbiAgICBjaGVja2VyQXJncyxcbiAgICBbeyBuYW1lOiAnZHJhZycsIGF4aXM6ICd4eScsIGVkZ2VzOiB1bmRlZmluZWQgfSwgaW50ZXJhY3RhYmxlLCBlbGVtZW50LCBmYWxzZV0sXG4gICAgJ2NhbGxzIGN1cnNvckNoZWNrZXIgd2l0aCBleHBlY3RlZCBhcmdzJ1xuICApXG5cbiAgaW50ZXJhY3Rpb24ucG9pbnRlckRvd24oZXZlbnQsIGV2ZW50LCBlbGVtZW50KVxuICB0LmVxdWFsKGVsZW1lbnQuc3R5bGUuY3Vyc29yLCAnY3VzdG9tLWN1cnNvcicsICd1c2VzIGN1cnNvckNoZWNrZXIgdmFsdWUnKVxuXG4gIGNvb3Jkcy5wYWdlLnggKz0gMTBcbiAgY29vcmRzLmNsaWVudC54ICs9IDEwXG4gIGludGVyYWN0aW9uLnBvaW50ZXJNb3ZlKGV2ZW50LCBldmVudCwgZWxlbWVudClcbiAgdC5vayhpbnRlcmFjdGlvbi5faW50ZXJhY3RpbmcsICdkb3duIC0+IG1vdmUgc3RhcnRzIGFjdGlvbicpXG5cbiAgdC5kZWVwRXF1YWwoXG4gICAgY2hlY2tlckFyZ3MsXG4gICAgW3sgbmFtZTogJ2RyYWcnLCBheGlzOiAneHknLCBlZGdlczogdW5kZWZpbmVkIH0sIGludGVyYWN0YWJsZSwgZWxlbWVudCwgdHJ1ZV0sXG4gICAgJ2NhbGxzIGN1cnNvckNoZWNrZXIgd2l0aCB0cnVlIGZvciBpbnRlcmFjdGluZyBhcmcnXG4gIClcblxuICB0LmVuZCgpXG59KVxuIl19