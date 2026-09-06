# FA terminal evidence: lem-cook-levin-can-be-made-parsimonious

Disposition: repaired. Queue frontier-32, group a, position 2; position 1
was successfully recorded before this review began.

Inspected the whole current lemma, all five direct dependencies (including
the proofs of the tableau iff and polynomial construction lemmas), the
counting A/B pages and the paired two-path example, batch-1 manifest,
coverage entry and notes, batch and merged proof contracts including the
risk review and boundaries, group convention digest, refute-1 findings,
Alpha's exact adjudication/report and both Terra rejections.

The first rejection required a one-tape simulator and a clock bounding both
input length and visited cells. Alpha supplied this correctly in principle.
The final rejection is valid under the actual NumberSAT interface: its input
is a formula together with an ordered declared-variable list, not a bare
formula. Unused declared variables also count. The preexisting risk review
asserted that transition tags were explicit; the text did not actually say
where those tags occurred in a tableau row. That gap matters for two choices
with the same resulting configuration.

The repaired output is the pair (formula, V), where V lists every one-hot
cell variable once, ordered by time, cell and a fixed alphabet order. No
auxiliary variables are introduced. Every name in the formula is in V and
all declared bits are fixed by the selected tableau. A transition-specific
intermediate simulator state records each original nondeterministic choice
before executing it deterministically. These finite states are ordinary
state-tagged tableau symbols. Deterministic sweeps create no new choices;
erasing them and reading the intermediate tags recovers exactly the original
path, even when distinct transitions later merge. Unique repeated-row
padding creates no extra paths or assignments. T is at least n+1 and bounds
the simulator's time and visited cells. Thus the cited one-tape tableau
interface applies, with polynomial dimensions. One-hot assignments and
accepting tagged tableaux are inverse maps; zero, one and multiple accepting
paths have the corresponding exact counts, including on empty input.

Source verification: opened the original MIT 18.404J Lecture 16 PDF,
https://ocw.mit.edu/courses/18-404j-theory-of-computation-fall-2020/8212b19fc5a34f500ca6acf03a3a7d74_MIT18_404f20_lec16.pdf .
Slides 3--4 and 7--8 support the computation-history interpretation,
local-transition constraints, and polynomial tableau size/construction.
Their text was available at the underlying PDF. The unextracted slide-5
image could not be retrieved by screenshot and is not used as evidence.
The one-hot uniqueness argument is verified directly from the fully read
local dependency proof; the transition-tag refinement and ordered-list
construction above are explicit independent arguments, not claims imported
from a decision-only Cook--Levin theorem.

Changed only this item, its manifest strategy, and its own entries in the
batch and merged contracts. Added the precise NumberSAT fact and citation,
synchronized derivations and risk review, and replaced generic zero/empty/
one/degenerate boundary dismissals with concrete checks. No prerequisite
edit or prerequisite licence was needed. No judge verdict or stamp was added.

Validation: focused precheck passed 1/1; real renderer passed 1/1;
strict proof-contract checks passed 1/1 in both batch and merged files,
zero errors or warnings. The initial contract-input omission was corrected
before these final passing checks. No unresolved mathematical obligation.
Next action: record position 2; then open position 3.
