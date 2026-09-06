# FA terminal evidence: lem-universal-martin-lof-test-exists

Disposition: accepted-after-review. Queue frontier-32, group a, position 5;
position 4 was successfully recorded before this review began.

Inspected the entire current lemma, both direct prerequisites, and the
underlying numbering and finite-sequence-coding definitions. Also read the
effectively-open definition, the randomness A/B pages, batch-2 manifest,
coverage and relevant notes, group-a conventions and concerns, Alpha's
report/exact adjudication and both Terra rejections. This item is absent
from the current batch and merged proof-contract scope: no local contract
or risk_review existed to inspect. The substantive risks are enumerating
all candidates effectively, safely enforcing their measure bounds, and
preserving every genuine test; they are independently discharged below.
No content or contract modification is necessary to resolve this rejection.

Terra's final objection overlooks the opening hypothesis of
`items/def-universal-and-acceptable-numbering.md`: the indexed family is a
numbering of the partial computable functions. Its direct prerequisite
`items/def-numbering-of-partial-computable-functions.md`, Definition,
explicitly requires every partial computable unary function to occur.
Surjectivity is therefore inherited before universality and hard-wiring are
imposed. A subfamily omitting computable functions would not satisfy the
opening hypothesis. No prerequisite defect or repair licence is involved.

For clarity, the complete algorithm implicit in step 1.1 is to dovetail
U(e,t) over t and output each well-formed decoded pair when it halts. This is
uniform in e because universality makes U partial computable. Conversely a
c.e. relation of pairs has a partial computable unary enumerator: on t wait
for its t-th printed pair and output its code, diverging if there is none.
The empty relation uses the nowhere-defined function; repetitions and finite
ranges cause no problem. That enumerator has an index by the library's
numbering definition. Thus every uniformly effectively open candidate
sequence occurs, without requiring a computable enumeration of only valid
tests. The earlier rejection's unary-function-to-pair-enumerator gap is
properly closed by Alpha's current pair-decoding construction.

At each component and finite stage, delete extensions of shorter retained
strings and duplicates to calculate the union measure as a finite sum of
dyadic cylinder measures. Comparing with 2^(-k) is decidable, including
exact equality. Retained finite unions only increase, so continuity from
below bounds the full retained component by 2^(-k). For a genuine test every
candidate finite union is a subset of its final component and already
satisfies the bound. Inductively none is discarded. Dovetailing the trimmed
components at k=n+e+1 is uniform and the geometric series sums to 2^(-n).
The whole e-th genuine component U^e_(n+e+1) is included in V_n, with shift
e+1. This is the stated strong componentwise containment; it does not need
nested test levels or merely almost-everywhere reasoning. The n=0 component,
empty candidates and duplicate cylinders all obey the same argument.

Source verification: https://sgslogic.net/t20/notes/cur.pdf, Simpson,
Theorem 8.4.8 and its complete proof, numbered pages 113--114 (zero-based PDF
112--113; the batch locator calls these pp. 112--113). Opened the original
source through the end of the proof. It supports effective measure truncation,
retention of genuine bounded opens, and the same n+e+1 diagonal union.
Surjectivity for the exact library interface was checked in the local
numbering definition rather than inferred from the external source.

Focused precheck passed 1/1 and the real KaTeX/YAML renderer passed 1/1.
The item and all dependencies remain unchanged; no pass stamp or judge
verdict was created. No unresolved mathematical obligation for this item.
Next action: record position 5 and verify the five terminal receipts.

Final queue checkpoint: all five decisions were recorded in order; positions
1--4 are repaired and position 5 accepted-after-review. Position 3 received
an exact-context refresh after position 4 changed their shared page interface.
The final batch strict contracts pass for all three changed proof contracts;
content policy passes all 83 items of batches 1 and 2 with no errors/warnings.
Dependency validation passes with 475 pre-existing repository-wide warnings.
The Step-8 guard, including the run's owner-prerequisite-repair ledger,
passes: 193 changed items, all 193 licensed, zero errors or warnings.
The initial guard invocation omitted that ledger and is superseded by the
correct complete invocation. This FA made no prerequisite edit.

The whole-run terminal checker reports no stale item/context for any of these
five queue items. It cannot yet verify the engine-owned completed FA dispatch
result file, which is written after this dispatch returns; other groups also
have in-flight missing-result or stale-context reports. These are not new
mathematical obligations or licence failures for this queue. Do not fabricate
a dispatch result or alter another group's receipts. The next action belongs
to the build driver: persist this dispatch result and re-run closure checks.
