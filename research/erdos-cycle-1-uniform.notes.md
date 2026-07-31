# ERDOS shortest-path cycle 1: focused uniform-convergence scaffold notes

Scope: Steps 1-2 only for `uniform-convergence-of-functions` and
`uniform-convergence-of-functions-examples`. The focused page objects are in
`research/erdos-cycle-1-uniform.pages.json`. The combined primary batch was
already spliced when this audit finished, so the recommendations below are
discrete amendments for the orchestrator to verify and adopt.

## Web research ledger

All URLs below were opened successfully during this audit.

- Jiří Lebl, *Basic Analysis I*, [Pointwise and uniform
  convergence](https://www.jirka.org/ra/html/sec_puconv.html). This gives the
  quantified pointwise and uniform definitions, explains the quantifier-order
  distinction, proves uniform implies pointwise, identifies uniform convergence
  of bounded functions with convergence in the supremum norm, and supplies the
  powers example. Its notation starts sequences at 1; this library starts at 0.
- Stanford Math 63CM, [Additional lecture
  notes](https://math.stanford.edu/~ryzhik/STANFORD/STANF63CM-20/lecture-notes-63cm-20-prelim.pdf),
  Theorems 1.12, 1.16-1.18. These give the uniformly Cauchy criterion, the
  epsilon-thirds proof of continuity of uniform limits, and completeness of
  `C(K;Y)` in the supremum metric. The proof of the Cauchy criterion constructs
  the limit pointwise and then returns to the same uniform tail bound.
- MIT OpenCourseWare 18.100B, Spring 2025, [full lecture
  notes](https://live.ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/mit18_100b_s25_lec_full.pdf),
  Lectures 20-21. These support the M-test, the uniform limit theorem,
  completeness in the supremum metric, interchange with the Riemann integral,
  and the derivative-limit theorem. The derivative proof defines the limit from
  the integral of the uniform derivative limit and uses the base-point values.
- University of Alberta Math 317, [Infinite Series of
  Functions](https://www.math.ualberta.ca/~xinweiyu/317.Q1.14w/LecNote317-02%20Infinite%20Series%20of%20Functions.pdf).
  The notes state the M-test, uniform Dirichlet test, uniform Abel test, the
  summation-by-parts estimate, interchange with integration, and a compact-cover
  proof of Dini's theorem. Their Dirichlet hypotheses confirm that the multiplier
  must decrease pointwise to zero uniformly while the other partial sums have
  one bound valid at every point.
- Dag Lundholm, KTH, [Real Analysis lecture
  notes](https://people.kth.se/~dogge/files/analysis.pdf), Sections 6.3.2-6.3.4.
  These independently support completeness of bounded continuous functions,
  Dini's finite-subcover and maximum-index proof, the triangular-spike failure
  without monotonicity, the escaping-ramp failure without compactness, and the
  uniform derivative-limit theorem.
- Mathematics LibreTexts, Zakon, [Sequences and Series of
  Functions](https://math.libretexts.org/Bookshelves/Analysis/Mathematical_Analysis_%28Zakon%29/04%253A_Function_Limits_and_Continuity/4.12%253A_Sequences_and_Series_of_Functions).
  This independently gives the uniformly Cauchy criterion and its function-series
  tail form for complete targets.

The sources differ in three conventions. Some index sequences from 1, while the
library uses 0. Some define the supremum norm only on bounded functions, while
later library material uses a bounded remetrisation on every function. Some
state Dini for nonincreasing sequences and others for nondecreasing sequences or
both. The focused scaffold shifts every index to 0, uses the earlier untruncated
supremum metric only on bounded real-valued functions, and states both monotone
directions in the closed-interval theorem.

## Published dependencies opened and checked

Every published item below was opened from disk. Its `status: published`,
Definition or Statement, hypotheses, conclusion, and direction were checked.
Every home page has order below 169.

- Function and sequence language: `def-function-space` (pointwise operations on
  `F^X`), `def-real-limit` (real convergence and Cauchyness),
  `thm-cauchy-criterion-via-lub` (every real Cauchy sequence converges),
  `def-series` (0-indexed partial sums and general starting indices), and
  `thm-series-cauchy-criterion` (small scalar tails iff convergence).
- Ordered-field estimates: `lem-of-abs-value`, `lem-of-triangle-inequality`,
  `lem-of-square-positive`, `cor-archimedean-reciprocal`,
  `thm-of-archimedean`, `def-canonical-natural`, `def-integer-power`,
  `lem-geometric-sequence-null`, `thm-algebra-of-limits`, and
  `def-bounded-set`.
- Metric material: `def-metric-continuity`, `def-metric-convergence`,
  `def-cauchy-in-metric`, `def-metric-compactness`,
  `def-complete-metric-space`, `lem-real-line-is-a-metric-space`,
  `lem-sup-metric-is-a-metric`, `lem-compactness-is-intrinsic`,
  `thm-metric-continuity-characterisations`,
  `thm-continuous-image-of-a-compact-space-is-compact`, and
  `thm-compact-subset-is-closed-and-bounded`.
- Real continuity and compact intervals: `def-continuity-real`,
  `thm-algebra-of-function-limits`, `thm-heine-borel-r`,
  `lem-finite-set-has-max`, and `def-max-min`.
- Integration and differentiation: `def-darboux-integral`,
  `thm-riemann-criterion`, `thm-linearity-of-the-integral`,
  `thm-monotonicity-of-the-integral`, `lem-integral-elementary-bounds`,
  `thm-additivity-over-subintervals`, `def-derivative`,
  `thm-ftc-first-part`, and `thm-ftc-second-part`.
- Function-series estimates: `def-finite-sum`, `lem-finite-sum-laws`,
  `lem-abel-summation-by-parts`, `thm-direct-comparison-test`,
  `thm-geometric-series`, and `thm-p-series-rational`.

No load-bearing dependency is homed on a B page. In particular, the scaffold
does not use the published harmonic-series example on a companion page.

Several earlier published dependencies carry their own orientation-only
`forward_refs`, notably `def-derivative`, the two FTC theorems,
`def-continuity-real`, and `thm-heine-borel-r`. The scaffold uses only their
proved Definition or Statement clauses. The completeness proof deliberately
does not cite `thm-extreme-value-metric`, whose forward reference is avoidable:
continuous image of compact plus compact implies bounded proves the needed
boundedness without it.

## Convention and dictionary decision

The page must define real-valued pointwise convergence, uniform convergence, and
uniform Cauchyness natively by quantifiers. Pointwise convergence refers to
`def-real-limit`; uniform convergence uses one index serving every point. The
new proposition
`prop-sup-metric-characterises-uniform-convergence-real-functions` proves the
load-bearing dictionary with the already published untruncated supremum metric
on bounded real-valued functions.

The only references to the order-283 function-space treatment belong in
`rem-uniform-convergence-agrees-with-the-later-uniform-topology`. At authoring,
that remark declares exactly these orientation-only `forward_refs`:
`def-topology-of-uniform-convergence`,
`lem-uniform-convergence-in-the-uniform-metric`,
`thm-uniform-limit-theorem`, and `thm-dini`. None may occur in a Statement,
Facts and Assumptions block, proof, dependency list, or consequence. The remark
records that the quantified definition agrees with both the earlier supremum
metric on bounded real-valued functions and the later bounded-remetrisation
formulation.

## Discrete corrections for the spliced primary batch

1. **Change Dini's strategy to `direct`.** `compactness` is not in the closed
   `proof_strategy` vocabulary. Keeping it makes the scaffold fail before
   authoring.
2. **Add `lem-of-triangle-inequality` where the proof uses epsilon halves or
   thirds.** It is required by the uniform Cauchy criterion, linear-combination
   lemma, product lemma, uniform-limit theorem, and Dini continuity estimates.
   `lem-of-abs-value` does not state the triangle inequality.
3. **Add the supremum-metric dictionary proposition.** The prose promises the
   sup metric, but the primary item list otherwise never proves that its metric
   convergence and Cauchy conditions are the quantified uniform notions.
4. **Decompose the `C(K,R)` proof.** Insert
   `lem-continuous-real-function-on-compact-is-bounded` and prove it from
   `thm-continuous-image-of-a-compact-space-is-compact` plus
   `thm-compact-subset-is-closed-and-bounded`. Then use the native uniform
   Cauchy criterion and native uniform-limit theorem for completeness. This
   avoids the unnecessary inherited forward marker from
   `thm-extreme-value-metric`.
5. **Strengthen the M-test dependencies.** Absolute pointwise convergence uses
   `thm-direct-comparison-test`; the scalar Cauchy criterion alone establishes
   the uniform tail estimate but not the separately claimed absolute
   convergence.
6. **State the uniform Dirichlet hypotheses exactly.** The multiplier is
   nonnegative and pointwise nonincreasing in the index, and its convergence to
   zero is uniform. The other factor's partial sums have one bound valid for
   every point and index.
7. **Repair the double-sequence witness.** `m/(m+n)` is undefined at the
   library's first index `(0,0)`. Use `(m+1)/(m+n+2)`. Its two iterated limits
   are 0 and 1.
8. **Repair the discontinuous Dini witness.** Use indicators of the open
   intervals `(0,1/\iota(k+1))`, with value zero at both endpoints. Indicators
   of closed shrinking intervals do not converge to zero at 0.
9. **Make natural-to-real coercions explicit.** The noncompact Dini witness,
   shrinking rectangles, rational derivative witness, and double sequence use
   `\iota(k+1)` or `\iota(k+2)`, because natural numbers here are sets rather
   than real numbers.
10. **Add the two cheap hypothesis witnesses.** Uniform factor convergence does
    not control products on an unbounded domain, and uniform convergence of
    derivatives does not control additive constants without convergence at one
    base point. These directly justify hypotheses of substantial A-page
    results.

Each recommendation is independently adoptable. Declining 1, 2, 5, 7, or 8
leaves a mechanical or mathematical defect. Declining 3, 4, 9, or 10 loses
clarity, dependency quality, or a useful sharpness witness.

## Proof decomposition and corollary pass

The uniform Cauchy criterion is separated from its function-series tail
corollary. The supremum-metric dictionary is separated from completeness of
`C(K,R)`. Compact boundedness is a focused lemma before completeness. The
integral error estimate is separated from preservation of integrability and
integrals. The derivative theorem reuses the integral theorem and both FTC
directions. The M-test, uniform Dirichlet test, and uniform Abel test remain
separate because their hypotheses and tail estimates are genuinely different.

The cheap consequences retained are uniform implies pointwise, the function
series tail criterion, algebra of uniform limits, and the metric convergence
and Cauchy dictionary. The uniformly-continuous-limit corollary from the primary
batch is omitted from the focused replacement: its natural published definition
declares a forward reference, so citing it would give this page an avoidable
inherited orientation marker. It can be restored after that older item's
orientation marker is closed or deliberately accepted by the orchestrator.

The A page has 20 proposed items, below the 100-item review ceiling. The list is
not padded.

## Deferred and dropped material

- Drop the cosine double-limit example. It needs the unbuilt trigonometric
  functions and the definition of pi. It is licensed only after
  `sine-cosine-and-the-definition-of-pi` is published.
- Drop the requested sequence converging pointwise on all of `R` but uniformly
  on no interval. The available elementary candidates either require unbuilt
  oscillatory machinery or duplicate later function-space examples. It can
  return when a dependency-closed witness is available.
- Drop improper-integral interchange counterexamples. The proper Riemann
  integral developed here does not license claims about improper integrals.
- Do not import the later general metric-target uniform limit theorem, the later
  bounded uniform metric, or the later compact-metric Dini theorem into a proof.
  They remain orientation only.

## Orchestrator recommendations

- **U1, must adopt:** change `thm-dini-on-a-closed-interval.strategy` from
  `compactness` to `direct`.
- **U2, must adopt:** add the missing triangle-inequality dependencies and the
  direct-comparison dependency for the M-test.
- **U3, must adopt:** replace `m/(m+n)` by `(m+1)/(m+n+2)` and repair the Dini
  interval-indicator witness.
- **U4, recommended:** add the supremum-metric dictionary proposition and the
  compact-boundedness decomposition lemma.
- **U5, recommended:** avoid `thm-extreme-value-metric` in completeness and use
  the two compact-image/boundedness results instead.
- **U6, recommended:** add the product-boundedness and derivative-basepoint
  counterexamples.
- **U7, recommended:** omit the uniformly-continuous-limit corollary to avoid an
  inherited orientation marker from `def-metric-uniform-continuity`.

## Dependency-closure certification

Every external `deps` target in the focused JSON is a published item on a page
of order below 169. Every new A-page dependency points to an earlier A-page
item. Every B-page dependency points to published earlier material, the A page,
or an earlier item on the same B page. No A item depends on a B item, and no
item depends on any other B page. No load-bearing dependency is a
recorded-but-unproved result or a later item. The only later links are the four
declared orientation-only `forward_refs` on the final reconciliation remark.
The B-page `forwardRefs` array is empty.

Certification applies to this Step-2 scaffold and to the exact statements,
hypotheses, item order, and dependency directions recorded here.
