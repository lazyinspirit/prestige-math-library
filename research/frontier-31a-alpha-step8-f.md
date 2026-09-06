# Frontier 31a Step 8 — group f

Group f owns batches 3, 16, and 17. I read all six owned pages, all 115 owned
items, the Step-7 context, every cited dependency implicated by a rejection,
and the full current rejection rows. There were 41 judge rejections and one
independent Step-7 reader warning.

## Outcome summary

- 32 rejections are `confirmed_fatal`; each licensed one minimal repair to the
  rejected item and each repaired item is a rejudge target.
- 5 rejections are `confirmed_nonfatal`; no content, contract, impact, or judge
  record was changed for those items.
- 4 rejections are `false_positive`; no content, contract, impact, or judge
  record was changed for those items.
- The Step-7 warning is independently `confirmed_fatal`. Its coefficient-domain
  defect is distinct from the judge rejection on the same definition, and the
  single repair resolves both defects.
- No cross-group defect was found, so group f added no cross-group alert.

## Rejection adjudications and repairs

| Item | Outcome | Finding and disposition |
|---|---|---|
| `cex-two-closed-convex-sets-need-not-be-strongly-separated` | `confirmed_nonfatal` | The elementary limit $e^{-n}\to0$ immediately closes the displayed distance computation. No edit. |
| `cor-pullback-carries-closed-forms-to-closed-forms-and-exact-forms-to-exact-forms` | `confirmed_fatal` | The statement did not quantify the smooth map or locate the forms on its target. Quantified both and aligned the proof with the pullback theorem. |
| `def-absorbing-balanced-and-absolutely-convex-set` | `confirmed_fatal` | The claim that balancedness and convexity are independent was false. Removed it. |
| `def-c-zero-and-ell-infinity` | `confirmed_fatal` | The coordinates began at 1 although this library's naturals include 0. Indexed over all $n\in\mathbb N$. |
| `def-continuous-annihilator-of-a-subspace` | `confirmed_fatal` | The continuous dual was used without a topology or norm on $X$. Added the normed-space hypothesis. |
| `def-exterior-derivative-by-the-invariant-vector-field-formula` | `confirmed_fatal` | The proof used the coordinate Lie-bracket formula without a supplying dependency. Added the exact published dependency. |
| `def-fully-nonlinear-first-order-pde-and-complete-integral` | `confirmed_fatal` | “Complete integral” lacked domains and the nondegeneracy condition. Typed $S:U\times A\to\mathbb R$ and required the mixed Hessian to be nonsingular. |
| `def-graded-derivation-of-the-algebra-of-differential-forms` | `confirmed_fatal` | Negative shifted degrees were undefined. Took the degree in $\mathbb Z$ and set negative-degree form spaces to zero. |
| `def-lie-derivative-of-a-differential-form` | `confirmed_fatal` | The defining vector field was not quantified. Quantified a smooth vector field. |
| `def-linear-hyperplane` | `confirmed_fatal` | The dimension formula omitted the scalar field. Added $\dim_{\mathbb F}$. |
| `def-semilinear-and-quasilinear-first-order-cauchy-problems` | `confirmed_fatal` | The local solution and initial trace scopes were ambiguous. Introduced explicit local neighborhoods and required their graphs to remain in the coefficient domain. |
| `ex-curl-and-divergence-encoded-by-the-exterior-derivative` | `confirmed_fatal` | Only one of three coefficient functions was required smooth. Required $A,B,C\in C^\infty$. |
| `ex-distance-to-a-subspace-via-annihilating-functionals` | `confirmed_fatal` | The cited geometric theorem did not state the claimed norm-preserving extension. Replaced it by the exact analytic Hahn–Banach dependency and supplied the construction. |
| `ex-exterior-derivatives-of-coordinate-one-forms` | `false_positive` | $d1=0$ is immediate from the cited coordinate formula. No edit. |
| `ex-semilinear-characteristics-with-logistic-growth` | `confirmed_fatal` | The projected map was written with only its spatial component, so its Jacobian claim was ill-typed. Defined the full map $(t,\xi)\mapsto(t,\xi+t)$. |
| `lem-burgers-slope-obeys-a-riccati-law-along-characteristics` | `confirmed_fatal` | The declared chain rule covered only scalar real maps. Replaced it with the exact total-derivative chain rule. |
| `lem-c-zero-is-a-closed-subspace-of-ell-infinity` | `confirmed_nonfatal` | Sequential closure is the standard metric characterization of closedness and the displayed estimate proves it. No edit. |
| `lem-characteristic-solution-satisfies-the-quasilinear-pde` | `confirmed_fatal` | Replaced the insufficient real-variable chain-rule citation with the total-derivative chain rule. |
| `lem-characteristic-strip-compatibility` | `confirmed_fatal` | Replaced the insufficient real-variable chain-rule citation with the total-derivative chain rule. |
| `lem-characteristic-strip-jacobian-at-the-initial-surface` | `confirmed_fatal` | The statement incorrectly made local invertibility equivalent to derivative rank. Restricted the equivalence to derivative invertibility; the inverse function theorem supplies the forward local consequence. |
| `lem-charpit-flow-preserves-the-pde-constraint` | `confirmed_fatal` | Replaced the insufficient real-variable chain-rule citation with the total-derivative chain rule. |
| `lem-envelope-stationarity-implies-the-hamilton-jacobi-equation` | `confirmed_fatal` | Replaced the insufficient real-variable chain-rule citation with the total-derivative chain rule. |
| `lem-local-solvability-of-the-augmented-characteristic-ode` | `confirmed_fatal` | The title promised smooth parameter dependence from only $C^1$ coefficients. Narrowed the title to $C^1$ dependence. |
| `lem-quasilinear-solution-lifts-to-characteristics` | `confirmed_fatal` | Replaced the insufficient real-variable chain-rule citation with the total-derivative chain rule. |
| `lem-the-flow-definition-of-tensor-lie-derivative-is-local-and-well-defined` | `false_positive` | The direct local-flow dependency supplies exactly the uniqueness invoked in the proof. No edit. |
| `lem-uncountable-almost-disjoint-family-on-natural-numbers` | `confirmed_fatal` | The rational enumeration began at 1 while recursive indices ranged over naturals including 0. Reindexed the enumeration over all naturals. |
| `prop-a-tensor-field-is-invariant-under-a-flow-if-and-only-if-its-lie-derivative-vanishes` | `confirmed_nonfatal` | Differentiating the local flow-group relation at an arbitrary time gives the omitted identity immediately. No edit. |
| `prop-cartan-commutator-identities` | `confirmed_nonfatal` | The cited Cartan formula, bracket characterization, and antiderivation rules close the standard graded-commutator expansion. No edit. |
| `prop-coordinate-formula-for-the-lie-derivative-of-a-contravariant-tensor` | `confirmed_fatal` | Added and cited the exact coordinate Lie-bracket formula used in the computation. |
| `prop-lie-derivative-agrees-with-x-on-functions-and-bracket-on-vector-fields` | `false_positive` | The exact identification with the Lie bracket is already a direct dependency. No edit. |
| `prop-lie-derivative-of-forms-is-a-degree-zero-graded-derivation` | `confirmed_nonfatal` | Alternation commutes with slot permutations, so the cited tensor-product derivation law restricts immediately to forms. No edit. |
| `prop-the-exterior-derivative-commutes-with-restriction` | `confirmed_fatal` | Locality alone did not compare derivatives on two manifolds. Added and cited the invariant formula that makes the computations identical. |
| `thm-cartans-magic-formula` | `confirmed_fatal` | The one-form computation used the invariant exterior-derivative formula without declaring it. Added and cited that dependency. |
| `thm-existence-and-uniqueness-of-the-exterior-derivative` | `false_positive` | The full derivation and square-zero theorems are direct dependencies even though the compact Facts block quotes only the function case. No edit. |
| `thm-local-coordinate-formula-for-the-exterior-derivative` | `confirmed_fatal` | Added and cited the invariant exterior-derivative formula evaluated by the proof. |
| `thm-local-fully-nonlinear-cauchy-problem-by-charpit` | `confirmed_fatal` | The statement used undeclared domains, maps, and base point. Introduced and typed all of them and required the initial data to lie in the PDE domain. |
| `thm-local-quasilinear-cauchy-problem-by-characteristics` | `confirmed_fatal` | The title claimed the whole local Cauchy problem although this item intentionally stopped at constructing a graph. Narrowed the title to the characteristic graph construction. |
| `thm-separation-of-an-open-convex-set-and-a-point` | `confirmed_fatal` | Hahn–Banach was applied to the gauge without a result proving sublinearity. Added and invoked the exact gauge lemma. |
| `thm-the-exterior-derivative-commutes-with-pullback` | `confirmed_fatal` | The proof falsely said the degree-one operators preserve wedges. Replaced that step with the direct local coordinate pullback calculation. |
| `thm-the-exterior-derivative-is-a-graded-derivation` | `confirmed_fatal` | The sign explanation moved the wrong factor. Corrected the coefficient calculation by moving $db_J$ across the $p$ coordinate one-forms. |
| `thm-the-exterior-derivative-squares-to-zero` | `confirmed_fatal` | The proof did not compute $d^2$ of a general $k$-form. Added the full indexed computation, paired mixed-partial terms, and cited the exact Schwarz theorem. |

## Step-7 reader warning

`s8a-f3bbac48ab5d393d545f858b` is independently `confirmed_fatal`.
The definition allowed initial data outside the coefficient domain, making
$a(\gamma(y),\phi(y))$, $b(\gamma(y),\phi(y))$, and the initial characteristic
system undefined. The repair types the open coefficient domain and requires
the initial graph to lie in it. This is separate from the judge's local
trace-scope rejection on the same item, so it has its own alert decision and
defect-ledger row.

## External source check

- Johns Hopkins Math 427 course notes, Definition 5.11:
  <https://math.jhu.edu/~js/Math427/coursenotes.pdf>. This supports the exact
  claim that a complete integral is an $n$-parameter Hamilton–Jacobi family
  with nonsingular mixed derivative matrix.
- Peter J. Olver's University of Minnesota notes:
  <https://www-users.cse.umn.edu/~olver/ln_/qm.pdf>. The complete-integral
  discussion independently supports using $n$ essential parameters; it was
  used only to corroborate the repaired definition.

## Validation and rejudge targets

Focused precheck covered all 32 repaired items: 23 proof-bearing items checked,
0 failures. Focused rendercheck covered all 32 repaired items: 0 errors and 0
warnings. A group-f reproduction of the Step-8 guard, retaining the exact
`pre-step8` hashes for all group-f items and masking changes outside the group,
reported 32 changes, 32 licensed, 0 errors, and 0 warnings. A separate direct
hash audit found all 41 exact adjudications, the expected 32/5/4 outcome split,
one reader decision, 33 defect rows, and no group-f discrepancy. The
defect-ledger closure check passed with 0 errors.

The required repository-wide Step-8 guard was also run. It currently reports
101 unlicensed edits, all outside group f: 64 in group b, 22 in group c, and 15
in group h, whose shared adjudication rows are absent. The required scope check
currently reports eight undisposed reader alerts, likewise all owned by groups
b, c, and h. Group f contributes no error to either check. This is an external
stage blocker; group f did not synthesize or repair the missing owners' records.

The rejudge targets are exactly the 32 items marked `confirmed_fatal` in the
table. The five `confirmed_nonfatal` and four `false_positive` items are not
rejudge targets.
