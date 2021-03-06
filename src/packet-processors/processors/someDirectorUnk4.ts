import { BufferReader } from "../../BufferReader";
import { SomeDirectorUnk4 } from "../../definitions";

export function someDirectorUnk4(reader: BufferReader): SomeDirectorUnk4 {
	return {
		eventId: reader.nextUInt32(),
		param1: reader.nextUInt32(),
		// Links to ActionTimeline entry
		actionTimeline: reader.nextUInt32(),
		param3: reader.nextUInt32(),
	};
}
