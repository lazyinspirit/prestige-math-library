# Step-8 local example repairs

2026-09-22, owner/operator intervention at the owner-held judgment gate.

The bounded refresh of eight stale contexts produced six passes and two
rejections. Historical verdicts remain intact. No automatic repair wave ran.

## Confirmed defects and bounded repairs

- `ex-the-derivative-of-a-bounded-bilinear-map`: L4 incorrectly attributed
  differentiability of the diagonal linear map to a supplier whose statement
  only supplies the chain rule. L4 now proves the zero remainder directly.
  The Example statement, dependencies and consumers are unchanged.
- `ex-integral-operator-trace-under-a-valid-diagonal-hypothesis`: the universal
  diagonal ambiguity claim was false on atomic spaces. Claim 4 now says
  "not in general" and identifies the nonzero nonatomic case. Step 2.1 proves
  this using Tonelli and records the singleton unit-mass exception. The prior
  argument also did not prove the asserted continuous non-trace-class example:
  absence of a positive factorization is not a counterexample. A complete
  Walsh-block construction now establishes that retained claim locally.

For block n, there are 2^(4n) atoms, each of mass 2^(-5n), and kernel amplitude
2^(-n). The normalized atomic matrix is 2^(-6n) H_n, with H_n squared equal
to 2^(4n) I. Its singular values are 2^(-4n), with multiplicity 2^(4n).
Each block contributes 1 to the singular-value sum, and 2^(-4n) to its squared
sum. The finite clusters accumulate only at zero; decaying block amplitudes
give continuity. Odd-parity diagonal entries disprove positivity. The operator
is Hilbert–Schmidt and compact but not trace class. This is a locally proved
construction, not an external theorem attributed to the cited source.

The original Astra determinant investigator independently checked the
construction and identified both boundary problems without editing files.
The owner/operator checked the argument and the existing trace-class definition.

## Consumer scope and checks

Direct item/page reference search found only the integral example itself and
its companion page. The page's repeated universal claim received the same
necessary qualification; no other consumer was edited. No published item was
changed by these two repairs. The main positive-kernel formula is unchanged.
The owning batch-3 contract was reconciled under the shared-write lock.

After all repairs finished: both focused prechecks and the three-file renderer
check passed; the complete batch-3 contract check passed for all 58 items.
Global forward-reference and dependency checks passed (the latter retains 274
warnings). Exact finite checks of Walsh blocks of sizes 16 and 256 verified
the square identity and scaling; these checks supplement, not replace, the
general proof. The Step-8 change index now has eight created and seven modified
items. Fresh Terra judgments were requested only for the two repaired examples.
The bilinear example passed at 11:07:52 UTC. At 11:09:04 Terra rejected the
integral example because A2 attributed compactness to the kernel theorem,
whose statement only gives boundedness and Hilbert–Schmidt membership.
The existing `thm-hilbert-schmidt-operators-are-compact` was read in full:
its countable-choice and supplied-basis hypotheses follow from the example's
AC and the kernel theorem's basis clause. Added that dependency and explicit
A2 citation, plus its exact contract quotation. Focused precheck, render and
contract checks passed again. The final real Terra judgment passed at
11:13:15 UTC, accepting the RKHS factorization, Parseval–Tonelli trace argument
and both boundary examples. Current item hash:
e040c76f5cf6478471fe79453d366baffe892230c48754b378539ed290671fe4.
The seven other accepted refresh items were not rejudged. Retry was armed
only after all repairs and their fresh judgments finished.
The two calls' cost evidence is in the run's `-cost.jsonl` rather than the
usual `-judge-cost.jsonl`; their verdicts use the canonical `-judge.jsonl`.
