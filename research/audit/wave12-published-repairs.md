# Wave 12 published-page repairs — A6

Audit-Alpha applied only the following owner-authorized major/source repairs.
No id, status, kind, reading-order assignment, or Wave 13/14 content changed.
The required touch baseline is `pre-A6` in `wave12-touches.json`.

## 1. `rem-rn-conventions-and-scope` — major stale scope claim

- **Old error:** “There is no definition of a linear map anywhere in this
  library at this point … [the earlier page] is not yet built.”
- **Replacement:** the remark now links the already-published
  `def-linear-map`, distinguishes the still-absent operator-norm/Lipschitz
  development, and records that the later concrete Euclidean use needs an
  explicit agreement argument.
- **Validation:** direct current-disk comparison with the published definition
  `items/def-linear-map.md`; the new `deps` edge is exact and backward.
- **Class:** major public-scope/dependency correction.
- **Provenance:** statement remains `ai-generated`, proof remains
  `not-applicable`; an already generated statement is not laundered by repair.

## 2. `def-norm-and-normed-space` — major stale scope claim

- **Old error:** the closing Remark grouped linear maps among earlier planned
  pages “not yet built.”
- **Replacement:** the Remark links the published `def-linear-map` and narrows
  its negative scope to operator norms, dual spaces, and abstract inner product
  spaces.
- **Validation:** direct current-disk comparison with
  `items/def-linear-map.md`; the added dependency exports exactly the linked
  definition.
- **Class:** major public-scope/dependency correction.
- **Provenance:** statement remains `ai-altered`/`semantic-source`, proof remains
  `not-applicable`.

## 3. Redundant failed J. Lebl draft URL — source corrections

The URL `https://www.jirka.org/ra/realanal2-draft-v2.0.pdf` returned 404 in the
orchestrator liveness sweep. It was removed from the following 28 items and
from their provenance rows. Each item retains at least one live source; the
vector-valued group retains Lebl's live HTML section and the uniform-convergence
group retains the live Trench text. No title, statement, proof, dependency, or
provenance classification changed.

- `def-vector-valued-functions-limits-and-continuity`
- `thm-componentwise-limits-and-continuity`
- `def-vector-valued-derivative-and-integral`
- `thm-norm-inequality-for-the-vector-valued-integral`
- `thm-mean-value-inequality`
- `cor-vector-valued-ftc-and-lipschitz-bound`
- `cex-mean-value-equality-fails-for-a-vector-valued-function`
- `cex-the-mean-value-inequality-is-attained`
- `ex-componentwise-convergence-and-a-vector-valued-integral-computed`
- `def-pointwise-uniform-and-uniformly-cauchy-convergence`
- `lem-uniform-convergence-implies-pointwise-convergence-real-functions`
- `thm-uniform-cauchy-criterion-real-functions`
- `def-series-of-real-functions`
- `cor-uniform-cauchy-criterion-function-series`
- `lem-uniform-limits-linear-combinations`
- `lem-uniform-product-limit-under-boundedness`
- `thm-uniform-limit-continuous-real-functions`
- `cor-uniform-limit-uniformly-continuous`
- `def-continuous-real-functions-on-a-compact-metric-space`
- `thm-c-k-complete-in-the-sup-metric`
- `lem-uniform-integral-error-bound`
- `thm-uniform-limit-interchanges-riemann-integration`
- `thm-uniform-derivative-limit-on-a-closed-interval`
- `rem-uniform-convergence-agrees-with-the-later-uniform-topology`
- `cex-powers-on-the-unit-interval-converge-pointwise-not-uniformly`
- `cex-shrinking-rectangles-have-integral-one`
- `cex-m-over-m-plus-n-has-noncommuting-iterated-limits`
- `cex-uniform-convergence-does-not-control-derivatives`

## 4. Redundant failed KTH URL — source corrections

The URL `https://people.kth.se/~dogge/files/analysis.pdf` returned 404 and was
removed from `cex-dini-needs-a-compact-domain` and
`cex-dini-needs-monotonicity`. Both retain the live Dini reference and Trench
text already used by the provenance determination. Their ledger rows already
omitted the failed KTH endpoint, so no ledger classification or rationale
changed.

## Verification disposition

Every repaired item's stale legacy `verification.judge` and
`verification.audited` evidence was removed. Exact-final GPT 5.6 Terra
certification is required before `verification.verified` may be written. The 30
source corrections are A7 targets under the explicit source-correction rule,
even though their mathematical bodies are byte-identical.

## 5. `cor-bolzano-weierstrass-in-rn` — exact-final citation repair

- **Old error:** a closing Remark cited
  `thm-componentwise-convergence-and-completeness` for the converse “bounded
  coordinate sequences imply bounded range,” but that theorem exports only
  componentwise convergence, Cauchyness, and completeness.
- **Replacement:** the Remark now derives the converse from the already-declared
  comparison $\lVert y\rVert_2\le\iota(n)\lVert y\rVert_\infty$ in
  `lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric` clause 3 and the
  maximum of the finitely many coordinate bounds. The former
  `thm-componentwise-convergence-and-completeness` dependency was then removed,
  because its sole body citation was the erroneous sentence being replaced.
- **Validation:** direct elementary finite-maximum derivation plus the exact
  published comparison inequality. The public theorem and proof are unchanged.
- **Class:** major citation repair confirmed by exact-final Terra refusal.
- **Provenance:** statement remains `ai-altered`/`semantic-source`, proof remains
  `ai-generated`.

## 6. `cex-the-one-norm-comes-from-no-inner-product` — load-bearing norm citation

- **Old error:** L1 called $\lVert\cdot\rVert_1$ a norm while citing only its
  formula/definition and the abstract norm definition; neither proves that this
  concrete function satisfies the norm axioms.
- **Replacement:** L1 and `deps` now cite
  `lem-p-norms-are-norms-and-induce-the-published-metrics`, which proves exactly
  that $\lVert\cdot\rVert_1$ is a norm on $\mathbb{R}^2$.
- **Validation:** exact published theorem statement plus the unchanged direct
  parallelogram-law refutation.
- **Class:** fatal load-bearing citation/dependency repair confirmed by
  exact-final Terra refusal.
- **Provenance:** statement remains `ai-altered`/`semantic-source`, proof remains
  `ai-generated`.

## 7. `thm-componentwise-limits-and-continuity` — semantic-source correction

- **Old error:** the retained Lebl Section 8.4 route concerns vector-valued
  derivatives and mean-value results, not this theorem's componentwise
  limit/continuity statement, so its provenance attribution was unsupported.
- **Replacement:** the item and provenance row now cite the University of
  Toronto MAT237 notes for componentwise continuity and addition, and APEX
  Calculus for componentwise vector limits and continuity.
- **Recorded delta:** those sources state the standard finite-dimensional
  Euclidean-domain results; this item generalizes the domain to a subset of an
  arbitrary metric space, treats arbitrary finite $m \ge 1$, and proves the
  additional scalar, inner-product, and every-norm continuity clauses locally.
- **Class:** major source/provenance correction confirmed by an exact-final
  Terra refusal. No statement, proof, or dependency changed.
- **Provenance:** statement remains `ai-altered`/`semantic-source`, proof remains
  `ai-generated`; the correction does not alter authorship classification.

## 8. `cex-m-over-m-plus-n-has-noncommuting-iterated-limits` — semantic-source correction

- **Old error:** Trench Section 4.4 treats pointwise and uniform convergence,
  not double sequences or the unequal-iterated-limit witness.
- **Replacement:** Abbott, *Understanding Analysis*, 2nd ed.,
  Exercise 2.3.13 gives $a_{m,n}=m/(m+n)$ and asks for the same unequal
  iterated limits. The final recorded route is Springer’s official DOI chapter
  page for the same audited edition and chapter; the Colby PDF mirror returned
  HTTP 403 in the closing sweep and was replaced without changing the cited
  source. The exercise content was verified from the previously inspected
  edition; the Springer landing is recorded as the stable official
  bibliographic endpoint, not as a content-visible quote page.
- **Recorded delta:** the item shifts both positive indices to the library's
  zero-based convention, keeps every denominator nonzero, and supplies the
  complete epsilon proof through its canonical-natural interfaces.
- **Class:** major source/provenance correction confirmed by exact-final Terra
  refusal. No statement, proof, or dependency changed.
- **Provenance:** statement remains `ai-altered`/`semantic-source`, proof remains
  `ai-generated`.

## 9. `cex-shrinking-rectangles-have-integral-one` — semantic-source correction

- **Old error:** Trench supports the convergence/interchange framework but not
  the shrinking-rectangle counterexample claimed by the provenance row.
- **Replacement:** Faris, *Real Analysis: Part I*, Section 13.2 gives the
  standard $f_n=n\,1_{(0,1/n)}$ witness, pointwise limit zero, and constant
  integral one.
- **Recorded delta:** the item restricts to $[0,1]$, reindexes at zero, fixes
  the endpoint value, and proves the witness directly for the Riemann/Darboux
  integral with the library's endpoint conventions.
- **Class:** major source/provenance correction confirmed by exact-final Terra
  refusal. No statement, proof, or dependency changed.
- **Provenance:** statement remains `ai-altered`/`semantic-source`, proof remains
  `ai-generated`.

## 10. `cex-uniform-convergence-does-not-control-derivatives` — semantic-source correction

- **Old error:** the surviving MIT/Trench routes state definitions or
  sufficient differentiation-interchange hypotheses, but neither gives this
  rational counterexample.
- **Replacement:** Trinity College Dublin MA2223 Homework 3 solutions use
  $f_n(x)=x/(1+n^2x^2)$ and compute the exact supremum $1/(2n)$; the King Saud
  University model solution computes $f_n'(0)=1$ while the zero limit has
  derivative zero.
- **Recorded delta:** the item extends the elementary bound to all of
  $\mathbb R$, reindexes at zero, and supplies the complete quotient-rule proof
  through the library's named dependencies.
- **Class:** major source/provenance correction confirmed by exact-final Terra
  refusal. No statement, proof, or dependency changed.
- **Provenance:** statement remains `ai-altered`/`semantic-source`, proof remains
  `ai-generated`.

## 11. `thm-norm-inequality-for-the-vector-valued-integral` — semantic-source correction

- **Old error:** Lebl Section 8.4 proves a derivative/mean-value bound but does
  not state the norm inequality for a vector-valued Riemann integral, so it was
  off-topic as this theorem's sole provenance-ledger route.
- **Replacement:** the item and provenance row now cite Robert Gressman’s
  *Advanced Analysis* supplement and Stephen Semmes, *Some Basic Topics in
  Analysis*, Sections 8.1.2–8.1.3. Gressman explicitly treats
  finite-dimensional Riemann-integrable vector functions, proves that a
  Lipschitz scalar function such as the norm remains Riemann integrable, and
  states the integral triangle inequality. Semmes independently gives the
  componentwise vector Riemann–Stieltjes setup, identifies the ordinary Riemann
  case, and states the corresponding norm inequality.
- **Recorded delta:** this item specializes to the Euclidean norm, exposes the
  $a \le b$ oriented-integral boundary, and supplies a local proof through the
  library's componentwise Darboux-integral and scalar theorem interfaces.
- **Class:** major source/provenance correction found by Alpha's no-sampling
  source review. No statement, proof, or dependency changed.
- **Provenance:** statement remains `ai-altered`/`semantic-source`, proof remains
  `ai-generated`; the correction does not alter authorship classification.

- **Exact-final escalation:** Terra’s first exact-final retry read Semmes as
  proving only the continuous-function case and refused the broader rationale.
  Alpha retained Semmes with narrower wording and added Gressman’s explicit
  Riemann-integrable proposition and corollary. The theorem and local proof did
  not change.

## 12. `ex-componentwise-convergence-and-a-vector-valued-integral-computed` — semantic-source correction

- **Old error:** Lebl Section 8.4 treats vector-valued differentiation and
  mean-value results, not the example's componentwise sequence convergence or
  componentwise definite integral, so it did not support the recorded
  provenance route.
- **Replacement:** Lebl Section 7.3.2, Proposition 7.3.9 states the
  coordinatewise criterion for convergence in Euclidean space; APEX Calculus
  Theorem 12.2.32 defines the definite integral of a vector-valued function
  componentwise.
- **Recorded delta:** the item combines those two standard interfaces in a
  zero-indexed $\mathbb R^3$ example, computes the polynomial Riemann integral
  through the library's scalar FTC interfaces, and proves the strict
  Euclidean-norm estimate locally.
- **Class:** major source/provenance correction found by Alpha's no-sampling
  source review. No statement, proof, or dependency changed.
- **Provenance:** statement remains `ai-altered`/`semantic-source`, proof remains
  `ai-generated`; the correction does not alter authorship classification.

## 13. `thm-norm-inequality-for-the-vector-valued-integral` — proof-order repair

- **Old error:** step 1.3 constructed the square-root map on $[0,K]$ and used
  $\sqrt K$, but the bound $K:=\sum_{i<m}B_i^2$ was not introduced until step
  3.1. The proof therefore used an undefined quantity and its recorded
  derivation order was backwards.
- **Replacement:** the unchanged square-root argument is now step 4.1, after
  step 3.1 defines $K$ and proves that $g$ takes values in $[0,K]$; step 5.1
  cites step 4.1. The remaining steps were canonically renumbered.
- **Class:** major proof-order repair found by the orchestrator's required
  personal full read. No public claim, dependency, or source changed.
- **Provenance:** statement remains `ai-altered`/`semantic-source`, proof remains
  `ai-generated`.

## 14. `ex-componentwise-convergence-and-a-vector-valued-integral-computed` — convergence-quantifier repair

- **Old error:** step 1.1 began with a positive rational $\varepsilon$, although
  metric convergence quantifies over every positive real and the proof stated
  no rational-density reduction.
- **Replacement:** step 1.1 now takes an arbitrary positive real
  $\varepsilon$, exactly as its existing L2 licence already provides.
- **Class:** major quantifier-scope repair found by the orchestrator's required
  personal full read. No public claim, dependency, or source changed.
- **Provenance:** statement remains `ai-altered`/`semantic-source`, proof remains
  `ai-generated`.

# Wave 12 A8 fatal-only repairs

The following three changes are licensed by exact `confirmed_fatal`
adjudications in `wave12-judge-adjudications.jsonl` against the canonical
`pre-a8` item states. No confirmed-nonfatal or false-positive finding caused a
mutation. Stale `verification.verified` blocks were removed before editing;
fresh certification is recorded separately before any replacement stamp.

## 15. `def-vector-valued-derivative-and-integral` — nondegenerate restriction scope

- **Old error:** the restriction clause said an integrable vector-valued
  function on `[a,b]`, with `a<b`, is integrable on “every closed subinterval.”
  The vector integrability definition and cited scalar restriction theorem are
  stated only for nondegenerate intervals, so the unqualified phrase included
  an undefined singleton-integrability assertion.
- **Replacement:** the clause now says “every nondegenerate closed subinterval
  `[c,d]` with `a <= c < d <= b`.” The existing oriented equal-limit integral
  value remains available but is not called singleton Darboux integrability.
- **Validation:** complete reads of `def-darboux-integral`,
  `lem-integrability-on-a-subinterval`, and `def-oriented-integral`, plus the
  complete current consumer cone. Every integral consumer already uses a
  nondegenerate interval; derivative consumers use the unchanged derivative
  half.
- **Class:** confirmed-fatal missing-hypothesis/type-boundary correction.
- **Pre-A8 normalized hash:**
  `62d256c385181ea557c7e2ecd1e8ae7b1fac493beb34256737ee56b21f970d0d`.
- **Exact-final normalized hash:**
  `41ce0e22244d94c3f826b55ab7a5da07eb104dd2132f7809633a4d59599bd908`.
- **Provenance:** statement remains `ai-altered`/`semantic-source`; proof
  remains `not-applicable`.

## 16. `rem-rn-conventions-and-scope` — rational-power zero-base boundary

- **Old error:** Section 2 said `def-rational-power` supplies powers for a
  “nonnegative base and rational exponent,” which incorrectly includes `0^r`
  for negative rational `r`.
- **Replacement:** Section 2 now states the exact domain: a positive base and
  any rational exponent, together with `0^r` for rational `r>0`.
- **Validation:** complete read of `def-rational-power`, including its explicit
  zero-base and negative-exponent clauses, and the complete direct/logical
  consumer cone. No consumer uses the former broader phrase.
- **Class:** confirmed-fatal false public-scope statement.
- **Pre-A8 normalized hash:**
  `e97e0c742250a73d84462738598a4f7664242c3f6afa744403f1d36a1e36cf0d`.
- **Exact-final normalized hash:**
  `c4a6f3fa43646cfff182b59ba8ccc3d93af468b77e361b86f2270648bfa4d95d`.
- **Provenance:** statement remains `ai-generated`; proof remains
  `not-applicable`.

## 17. `thm-norm-inequality-for-the-vector-valued-integral` — degenerate interval typing

- **Old error:** the theorem allowed `a=b` while assuming that `f` was
  integrable, but vector-valued integrability is defined only when `a<b`.
  Assigning `integral_a^a f=0` by orientation does not define Darboux
  integrability on a singleton.
- **Replacement:** `f` is now an arbitrary function for `a<=b`, with the
  integrability assumption conditional on `a<b`; L1 carries the same
  qualification. The existing equal-limit proof remains the oriented identity
  `0<=0`, and every nondegenerate proof step is unchanged.
- **Validation:** complete reads of the vector-integral definition, oriented
  integral, Darboux integral, exact proof contract, and all consumers. The only
  load-bearing consumers instantiate `a<b`.
- **Class:** confirmed-fatal missing-hypothesis/type-boundary correction.
- **Pre-A8 normalized hash:**
  `cbece0eafcc9eb83e288001b8f9744b3d93d1222488c0d0cc974e8e396b11d49`.
- **Exact-final normalized hash:**
  `49b54b1bc91e3bdaf73ee7d5fe7ffd0e00f9d3175cf222d2c5423812123c7710`.
- **Contract refresh:** seven `full-source-section` quotations made stale by
  the two interface edits were refreshed mechanically in the namespaced and
  merged Wave 12 contracts; strict validation passes 48/48.
- **Provenance:** statement remains `ai-altered`/`semantic-source`; proof
  remains `ai-generated`.

# Wave 12 A9 scope-denial and public-interface decay repairs

The orchestrator reread all 39 A6 repair/source targets, all four Wave 12 page
files, every denial-language match in those files, and all 144 consumers of the
eight changed item interfaces. The eight item edits below are the complete A9
item set; the only page edit is recorded last. No consumer was edited.

## 18. `def-vector-valued-derivative-and-integral` — title scope

- **Old error:** the title described both derivative and integral as operations
  on a function `[a,b] -> R^m`, even though the definition's derivative half is
  intrinsically stated for functions on arbitrary subsets of the real line.
- **Replacement:** the title now distinguishes an intrinsic vector derivative
  from a componentwise vector Riemann integral without imposing the integral's
  interval domain on the derivative.
- **Class:** fatal public-title/type-scope decay found by the exact-current A8
  targeted rejudge.

## 19. `thm-norm-inequality-for-the-vector-valued-integral` — title boundary

- **Old error:** after the A8 body repair, the title still asserted that
  `||f||_2` is integrable at the degenerate boundary `a=b`, where the published
  Darboux-integrability predicate is not defined.
- **Replacement:** the title conditions both the hypothesis that `f` is
  integrable and the conclusion that `||f||_2` is integrable on `a<b`, while
  retaining the oriented inequality for `a<=b`.
- **Class:** fatal public-title/type-boundary decay found by the exact-current
  A8 targeted rejudge.

## 20. `rem-rn-conventions-and-scope` — mean-value witness description

- **Old error:** section 4 called `thm-mean-value-inequality` the theorem whose
  equality form the polynomial curve refutes, although that theorem explicitly
  asserts only the surviving inequality.
- **Replacement:** the text now says that the witness refutes the
  vector-valued equality generalisation of the scalar mean value theorem
  `cor-mean-value-theorem`, and separately identifies
  `thm-mean-value-inequality` as the surviving result.
- **Class:** scope/citation correction required by the targeted A8 rejudge.

## 21. `ex-componentwise-convergence-and-a-vector-valued-integral-computed` — opening and closing scope

- **Old error:** the prose claimed that the sequence and integral computations
  exercise the two halves of `def-vector-valued-derivative-and-integral`, but
  the first computation is sequence convergence, not differentiation.
- **Replacement:** both prose locations now accurately describe the two tools
  exercised: componentwise sequence convergence and componentwise integration.
- **Class:** A9 public-description decay correction; the computations and proof
  are unchanged.

## 22. `def-the-space-of-summing-directions` — stale absent-linear-map claim

- **Old error:** the definition said that the library had no definition of a
  linear map and that its earlier page was unbuilt, although `def-linear-map`
  is published.
- **Replacement:** `def-linear-map` is now a declared and direct dependency.
  The prose accurately says that abstract linear maps exist, while the dual
  space and the Euclidean representation theorem needed to identify all
  functionals with inner products remain unpublished.
- **Class:** A9 scope-denial decay correction; the mathematical definition of
  `Gamma` and `Gamma^perp` is unchanged.

## 23. `fs-heine-borel-holds-in-every-normed-space` — theory-scope wording

- **Old error:** the Remark broadly said that nothing was asserted about
  normed spaces in general because the theory was unbuilt, despite current
  published definitions and results about general normed spaces.
- **Replacement:** the Remark now makes only the precise denial it needs: this
  item provides no general classification of normed spaces and does not prove
  the compact-unit-ball converse.
- **Class:** A9 scope-denial decay correction; the counterexample is unchanged.

## 24. `thm-all-norms-on-rn-are-equivalent` — theory-scope wording

- **Old error:** the final Remark broadly denied any claim about normed spaces
  in general on the ground that the theory was unbuilt.
- **Replacement:** the sentence now says exactly that the proof and witnesses
  make no broader classification claim about normed spaces.
- **Class:** A9 scope-denial decay correction; theorem and proof unchanged.

## 25. `fs-all-norms-on-any-real-vector-space-are-equivalent` — theory-scope wording

- **Old error:** the Remark broadly said that nothing was claimed about general
  infinite-dimensional normed spaces because the library had not built that
  theory.
- **Replacement:** it now denies only a classification of
  infinite-dimensional normed spaces and retains the exact purpose of the
  displayed witness: one real vector space carrying two inequivalent norms.
- **Class:** A9 scope-denial decay correction; the counterexample is unchanged.

## A-page summary — `library/real-analysis/rn-as-a-normed-space.md`

The summary of `thm-norm-inequality-for-the-vector-valued-integral` now says
that `||f||_2` is integrable when `a<b`, while the oriented inequality remains
stated for `a<=b`. This mirrors the corrected theorem boundary and makes no
independent claim.
