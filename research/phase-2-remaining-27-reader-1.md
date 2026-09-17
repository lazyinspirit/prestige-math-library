# Step 5a reader report — batch `1`, run `phase-2-remaining-27`

Reader label: `reader-1` (covers 1). Scope: the four pages of
`research/phase-2-remaining-27-batch-1.pages.json` and all 63 items listed
there, plus every dependency opened to verify a specific claim. All 63 items
and all four pages carry `status: draft`, so they are in-flight and 5a repair is
in scope for items and for A-page prose. I authored none of this content and
did not stamp, certify or judge anything.

| order | page | kind | items |
|---|---|---|---|
| 288.071 | `hilbert-space-geometry-and-riesz-representation` | A | 26 |
| 288.072 | `hilbert-space-geometry-and-riesz-representation-examples` | B | 8 |
| 288.073 | `orthonormal-bases-parseval-and-fourier-series` | A | 24 |
| 288.074 | `orthonormal-bases-parseval-and-fourier-series-examples` | B | 5 |

Page frontmatter `items:`/`examples:` lists, the manifest, and each item's file
`deps:` were cross-checked: no item is missing, extra or listed twice; every
manifest item id equals its filename stem and kind prefix. One file-level
deviation from the scaffold manifest was examined and accepted:
`def-fourier-coefficients-and-trigonometric-polynomials` declares
`thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces` in `deps:` (used in
its body) although the scaffold manifest omits it; `depcheck` resolves the dep
and reports no undeclared citation, so the file is the correct record.

## Opened inventory

Read in full (statement, facts, proof or verification, contract, sources) — all
63 items:

A `hilbert-space-geometry-and-riesz-representation`:
`def-real-and-complex-inner-product-space`,
`thm-cauchy-schwarz-in-an-inner-product-space`,
`cor-inner-product-induces-a-norm`, `thm-parallelogram-law`,
`thm-jordan-von-neumann-polarization`, `def-hilbert-space`,
`lem-inner-product-is-jointly-continuous`,
`thm-completion-of-an-inner-product-space-is-hilbert`,
`def-orthogonality-and-orthogonal-complement`,
`lem-pythagorean-theorem-and-finite-orthogonal-sums`,
`lem-orthogonal-complement-is-closed`,
`lem-minimizing-sequence-in-a-closed-convex-set-is-cauchy`,
`thm-projection-onto-a-nonempty-closed-convex-set`,
`thm-hilbert-projection-variational-characterization`,
`thm-orthogonal-decomposition-by-a-closed-subspace`,
`def-hilbert-orthogonal-projection`,
`lem-orthogonal-projection-is-linear-self-adjoint-contractive`,
`thm-double-orthogonal-complement-is-closure`,
`thm-riesz-representation-for-hilbert-space`,
`cor-hilbert-spaces-are-reflexive`, `def-hilbert-space-adjoint`,
`thm-hilbert-adjoint-properties`,
`def-self-adjoint-positive-unitary-and-normal-operator`,
`lem-kernel-range-orthogonality-for-hilbert-adjoints`,
`rem-l2-projection-agreement`, `rem-lax-milgram-owned-by-pde`.

B `hilbert-space-geometry-and-riesz-representation-examples`:
`ex-standard-inner-products-on-kn-ell-two-and-l-two`,
`ex-projection-onto-a-finite-dimensional-subspace-by-a-gram-matrix`,
`ex-projection-onto-constants-is-the-mean`, `ex-distance-to-a-closed-subspace`,
`cex-an-inner-product-space-need-not-be-complete`,
`cex-a-norm-need-not-satisfy-the-parallelogram-law`,
`cex-nearest-point-map-to-a-convex-set-need-not-be-linear`,
`ex-adjoints-of-shifts-multiplication-and-integral-operators`.

A `orthonormal-bases-parseval-and-fourier-series`:
`def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis`,
`lem-finite-bessel-inequality`,
`def-square-summable-family-on-an-arbitrary-index-set`,
`thm-bessel-inequality-for-an-arbitrary-orthonormal-family`,
`lem-only-countably-many-fourier-coefficients-are-nonzero`,
`lem-square-summable-orthogonal-families-have-norm-convergent-finite-sums`,
`thm-parseval-equivalences-for-a-complete-orthonormal-family`,
`thm-hilbert-space-fourier-expansion`,
`thm-existence-of-a-maximal-orthonormal-family`,
`thm-hilbert-space-with-a-given-orthonormal-basis-is-ell-two-of-the-index-set`,
`thm-separable-hilbert-space-has-a-countable-orthonormal-basis`,
`cor-separable-infinite-dimensional-hilbert-space-is-ell-two`,
`lem-l-two-with-the-integral-pairing-is-a-hilbert-space`,
`def-the-one-dimensional-torus-and-normalized-haar-integral`,
`lem-finite-tori-are-compact-hausdorff-character-spaces`,
`def-fourier-coefficients-and-trigonometric-polynomials`,
`lem-trigonometric-characters-are-orthonormal`,
`cor-trigonometric-polynomials-are-dense-in-continuous-periodic-functions`,
`lem-continuous-periodic-functions-are-dense-in-l-p-of-finite-tori`,
`thm-trigonometric-system-is-complete-in-l-two-of-the-torus`,
`thm-l-two-fourier-series-converges-in-mean-square`,
`thm-parseval-identity-for-fourier-series`,
`thm-riesz-fischer-for-fourier-coefficients`,
`thm-fourier-basis-and-parseval-on-the-n-torus`.

B `orthonormal-bases-parseval-and-fourier-series-examples`:
`ex-standard-basis-of-ell-two`,
`ex-legendre-polynomials-from-gram-schmidt`,
`ex-haar-orthonormal-basis-of-l-two-zero-one`,
`ex-fourier-series-of-a-sawtooth`, `ex-fourier-series-of-a-square-wave`.

Also opened: the batch notes, the coverage record, the batch and level proof
contracts, and — to check the load-bearing clauses actually quoted — the on-disk
statements of the published dependencies
`def-inner-product-space`, `def-inner-product-norm`, `thm-nth-roots-exist`,
`lem-complex-conjugation-and-modulus-laws`, `lem-of-square-monotone`,
`lem-of-abs-value`, `def-linear-independence`, `def-norm-and-normed-space`,
`rem-real-and-complex-normed-space-convention`, `def-complete-metric-space`,
`def-banach-space`, `thm-metric-closure-characterisation`,
`def-metric-topology`, `def-metric-ball`, `def-product-topology`,
`def-metric-convergence`, `def-directed-set-and-net`,
`def-net-convergence-and-cluster-point`,
`thm-hausdorff-iff-net-limits-are-unique`, `def-extended-reals`,
`lem-extended-reals-complete`, `def-finite-sum`, `def-complete-ordered-field`,
`lem-sup-epsilon`, `lem-rat-embeds-dense`, `cor-archimedean-reciprocal`,
`thm-of-square-roots`, `def-countable-choice`, `def-axiom-of-choice`,
`def-dense-top`, `def-separable-space`, `def-countable`,
`lem-countable-iff-surjection-from-n`, `thm-recursion`,
`def-relative-normed-convexity-and-separation`, `thm-infimum-property`,
`lem-inf-epsilon`, `def-infimum`, `def-real-limit`, `thm-monotone-convergence`,
`lem-finite-set-has-max`, `thm-zorn`,
`lem-ac-supplies-countable-and-dependent-choice-for-banach-integration`,
`thm-countable-union-of-countable`, `lem-subset-of-countable`,
`thm-gram-determinant-detects-linear-independence`,
`def-gram-matrix-and-gram-determinant`,
`lem-closed-l-two-subspaces-have-orthogonal-projections`,
`def-orthogonal-projection`, `thm-finite-dimensional-orthogonal-decomposition`,
`def-dual-space-of-a-normed-space`, `def-transpose-of-a-bounded-operator`,
`def-space-of-bounded-linear-operators`, `def-bounded-linear-operator`,
`def-operator-norm`, `lem-composition-operator-norm-inequality`,
`def-canonical-map-into-the-bidual`, `def-reflexive-banach-space`,
`thm-riesz-fischer-completeness-of-l-p`,
`lem-complex-lp-completeness-density-and-inner-product`,
`thm-complex-finite-simple-and-smooth-compact-support-density-for-finite-p`,
`thm-complex-holder-minkowski-and-the-quotient-norm`,
`thm-the-l-p-norm-descends-to-the-quotient-and-makes-l-p-a-normed-space`,
`def-l-p-space-as-a-quotient-by-null-functions`,
`def-complex-lp-and-euclidean-test-function-conventions`,
`thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz`,
`cor-cauchy-schwarz-inequality-for-l-two`, `rem-ell-p-is-l-p-of-counting-measure`,
`thm-finite-measure-l-r-includes-into-l-p-for-p-less-r`,
`thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces`,
`thm-compactness-under-continuous-maps`, `thm-heine-borel-r`,
`thm-heine-cantor-metric`, `thm-finite-products-of-compact-spaces`,
`lem-products-preserve-t0-t1-and-hausdorff`,
`thm-quotient-universal-property`, `def-quotient-topology`,
`thm-complex-stone-weierstrass-self-adjoint`,
`cor-weierstrass-approximation-on-a-closed-interval`,
`thm-sine-and-cosine-parametrize-the-unit-circle`,
`thm-sine-cosine-zero-sets-and-fundamental-period`,
`cor-complex-exponential-cartesian-form-modulus-and-eulers-identity`,
`thm-absolute-continuity-of-the-integral`,
`thm-lebesgue-measure-of-a-box-of-every-kind`,
`def-non-negative-and-positive-operator`,
`prop-operator-positivity-agrees-with-form-positivity-over-the-reals`.

## Method

* Every numbered proof or verification step of every in-scope item was read
  against the fact, earlier step, given hypothesis or elementary derivation that
  licenses it, with special attention to direction of use, domains,
  quantifiers, the first-variable-linear convention, and the complex case.
* All 408 fact-to-source citation edges in the 63 batch contracts (137 distinct
  source items, 239 numbered derivation steps) were checked mechanically
  against the on-disk text of the cited item's cited section (normalised
  whitespace, exact substring): **0 mismatches**, so every quoted dependency
  clause does occur verbatim in the item it names.
* `tools/precheck.mts` was run on all 63 items before and after my edits: 63/63
  clean. `tools/proof-contract.mjs` on the batch contract: 63/63 items, 0
  errors, 0 warnings. `tools/depcheck.mjs`: 0 errors.
* Computations were re-derived independently rather than read off: the
  polarization identities (real and complex), the parallelogram minimisation
  estimates, the Gram-system `G^{T}c=b` and its basis independence, the mean and
  distance formulas, the three Legendre members with `e_{2}` normalisation
  `8/45`, the Haar orthonormality and level spans, the incomplete-space witness,
  the `ell^p`/`ell^infinity` parallelogram failure, and both Fourier examples
  (coefficients, `||f||_2^2`, Basel and Leibniz sums).
* The choice-strength claims were checked against the cited paper
  (Blackadar–Farah–Karagila, *Hilbert spaces without the Countable Axiom of
  Choice*, fetched and read: Definitions 1.0.1 and 2.0.1, Theorem 1.0.2,
  Lemma 2.0.3, Theorem 2.0.4, Corollary 2.0.5, Theorem 2.0.6, §3
  Definition 3.0.1–3.0.2/Proposition 3.0.4, §4.1). The `def-hilbert-space` note
  (σ-completeness stronger than Cauchy completeness, equivalent under CC; the
  closest-point theorem in ZF from σ-completeness; Riesz and reflexivity as
  2.0.6) is accurate, and the Riesz/reflexivity/projection citations name the
  correct numbered results.
* The two Fourier examples were checked against the cited Duke notes
  (H. P. Gavin, §4.1 p. 6 and §4.2 p. 7, fetched): `b_q=-(2/(qπ))((-1)^q-1)` for
  the square wave and `b_q=-(2/q)(-1)^q` for the sawtooth agree, after the
  period/`2i` conversion, with the items' `\widehat s(k)=(1-(-1)^k)/(\pi ik)`
  and `\widehat f(k)=(-1)^{k+1}/(2\pi ik)`.
* Source-locator rows (book page numbers, lecture numbers) were not re-verified
  against the books' own pagination; the on-disk items are the library's
  transcripts of those passages and their quotes were checked there (see the
  coverage note).

## Edits (3)

All three are in in-flight items of this batch (one A item, one A item, one
example item homed on a B page; no B-page prose, no other batch, no
`plan-spec.json`, no published content was touched). No changed item carried a
`verification.judge` record, so none had to be removed. Each changed item was
reflowed (`node tools/tsx-run.mjs tools/reflow.mts items/<id>.md` → "unchanged")
and prechecked (`... tools/precheck.mts items/<id>.md` → clean); the affected
contract claims were updated in
`research/phase-2-remaining-27-batch-1.proof-contracts.json` and in the merged
`research/phase-2-remaining-27-proof-contracts.json`, and the contract gate
still reports 63/63 clean.

### E1 · `lem-trigonometric-characters-are-orthonormal` — corrupted clause in step 2.1 (repaired)

Step 2.1 read "... for $m=0$ the integrand is $1$ and the integral is
$1=2\pi m$'s analogue, ...". The printed equation `1=2\pi m` is false for
$m=0$ and for every other integer, and the sentence asserts nothing usable; the
step's actual computation (integrand $1$ on $[0,1]$) gives $1$. Repair: the
clause now reads "the integrand is $1$ and the integral is $1$". The rest of the
step, and its conclusion $\langle e_k,e_l\rangle=\delta_{kl}$, already agreed
with the corrected clause, so no mathematical content changed.

### E2 · `thm-fourier-basis-and-parseval-on-the-n-torus` — undefined symbol in step 1.1 (repaired)

Step 1.1 read "... $=\prod_{j<n}\int_{\mathbb T}e_{k_j-m_j}\overline{e_{l_j}}
\,dm_{\mathbb T}$", where $m_j$ occurs nowhere in the item or its facts. Since
$\overline{e_{l_j}}=e_{-l_j}$ and $e_{k_j}e_{-l_j}=e_{k_j-l_j}$, the intended
factor is $\int_{\mathbb T}e_{k_j}\overline{e_{l_j}}\,dm_{\mathbb T}=\delta_{k_jl_j}$
— exactly the value the step claims ("each factor is $\delta_{k_jl_j}$ by
orthonormality of the one-dimensional characters"). Repair: the stray
`$-m_j$` was deleted; no other text, tag or conclusion changed.

### E3 · `ex-fourier-series-of-a-square-wave` — pointwise assertion in the claim section (repaired)

The Example section read "The example deliberately claims **norm** convergence
and nothing else: the series does not converge pointwise at the jump, and no
endpoint statement is made." The clause "the series does not converge pointwise
at the jump" is an unproved pointwise assertion that is false under the standard
reading of pointwise convergence of a Fourier series (the symmetric partial sums
at the jump are $0$ for every $N$, since $\widehat s(k)$ and $\widehat s(-k)$
cancel, so they converge to the mean $0$, not to the representative's value
$1$); it is true only under the library's finite-subset-net reading, where the
coefficient family is not absolutely summable at the jump and the net diverges.
The item states no convention for the phrase, the item's own closing step 4.1
says "no pointwise or endpoint convergence is asserted", and the page summary
claims only $L^2$ statements. Repair: the clause now reads "it asserts no
pointwise convergence of the series to the values of this representative at the
jump, and no endpoint statement is made", which is true under both readings and
preserves the author's disclaimer. Coefficients, the $L^2$ convergence claim, the
Parseval computation $\sum_{k\ \text{odd}}k^{-2}=\pi^2/8$ and the title were
verified and left unchanged.

## Nonfatal observations recorded, not repaired

These are gaps a competent reader closes at once in the sense of the brief
("short proof-step omission ... nonfatal only when a competent reader closes it
at once"); none is a defective claim, definition, title, witness, computation or
citation, so none was edited, and none is reported as a finding.

* `thm-orthogonal-decomposition-by-a-closed-subspace` step 2.1: the variational
  inequality at $w=p+itu$ gives $\operatorname{Im}\langle x-p,u\rangle\le0$ with
  the library's conjugate-linear second slot, so the imaginary part is killed by
  the same $u\mapsto-u$ substitution used one clause earlier (the step mentions
  the substitution only for the real part). Conclusion unchanged.
* `ex-adjoints-of-shifts-multiplication-and-integral-operators` step 1.3: the
  displayed chain bounds $\int\!\!\int|kf|$, while the sentence drawn from it also
  asserts $Kf\in L^2$ with $\|Kf\|_2\le\|k\|_2\|f\|_2$; squaring the
  $y$-Cauchy–Schwarz bound already displayed and integrating (Tonelli) gives
  exactly that bound.
* `ex-standard-basis-of-ell-two` step 1.2 uses completeness of the scalar field
  $\mathbb F$ ("the scalars form a Cauchy sequence in $\mathbb F$ ... hence
  converge") without naming the published completeness theorem; the fact row [A3]
  supplies the remaining tail argument exactly. Nonfatal, no dependency change
  made by me.
* `thm-double-orthogonal-complement-is-closure` [A2]/step 1.2 and
  `thm-orthogonal-decomposition-by-a-closed-subspace` [A4] cite
  `thm-metric-closure-characterisation` for "a closed set contains the limits of
  its convergent sequences" and for extracting sequences in a closure. That item
  states the closure as the smallest closed superset and
  $\overline A=\{x:d(x,A)=0\}$; the sequential form follows from the latter with
  the Archimedean reciprocal and the item's declared $\mathrm{AC}_\omega$, so the
  use is licensed in substance by claim 1 of the cited statement.
* `def-the-one-dimensional-torus-and-normalized-haar-integral` asserts that
  $\mathbb T$ is compact Hausdorff and homeomorphic to the Euclidean circle
  without a local citation; the companion lemma
  `lem-finite-tori-are-compact-hausdorff-character-spaces` on the same page
  proves exactly this from the locally cited quotient/circle facts, so no
  unproved load-bearing statement remains.
* `def-self-adjoint-positive-unitary-and-normal-operator` says a positive
  operator on a complex Hilbert space is self-adjoint "proved later"; later
  in-flight operator pages of this run (`def-non-negative-and-positive-operator`,
  `lem-spectrum-of-a-positive-operator-is-nonnegative` and companions) carry that
  line, so I read the clause as orientation and did not treat it as a claim of
  this batch.

## Page verdicts

* `hilbert-space-geometry-and-riesz-representation` (A, 288.071) — **sound; no
  defect found.** All 26 items, their statements, facts, proofs and the page
  summary were read; the summary's claims about the choice-free elementary
  geometry, the $\mathrm{AC}_\omega$ spent on approximate minimisers, the
  projection/decomposition chain, Riesz representation, reflexivity, the adjoint
  dictionary and the Lax–Milgram ownership boundary match the items.
* `hilbert-space-geometry-and-riesz-representation-examples` (B, 288.072) —
  **sound; no defect found.** Standard pairings on $\mathbb K^n$, $\ell^2$ and
  quotient $L^2$; the Gram-matrix projection with the transpose equation; the
  mean; the distance formula; the three boundary counterexamples (incomplete
  $c_{00}$, $\ell^p$/$\ell^\infty$ parallelogram failure, non-linear
  nearest-point map); and the shift, multiplication and kernel adjoints were all
  re-derived. The page prose is not editable and was not edited; its summary
  agrees with the items.
* `orthonormal-bases-parseval-and-fourier-series` (A, 288.073) — **sound after
  two repaired ill-formed clauses (E1, E2); no remaining defect found.** The
  finite-subset-supremum convention, the choice-free absolute-summability
  argument, the tail-control use of $\mathrm{AC}_\omega$, Bessel, countable
  support, synthesis, the four-way Parseval equivalence, Fourier expansion,
  Zorn/maximality, the coefficient isometry, the ZF separable classification,
  the torus measure and its translation invariance, character orthonormality,
  trigonometric density, completeness of the trigonometric system, mean-square
  convergence, Parseval, Riesz–Fischer and the finite-torus theorem were all
  verified, including the BFK source checks for the choice claims.
* `orthonormal-bases-parseval-and-fourier-series-examples` (B, 288.074) —
  **sound after one repaired claim (E3); no remaining defect found.** The
  coordinate basis of $\ell^2(\mathbb N)$ (with its direct completeness proof),
  the Legendre family with `e_0,e_1,e_2` and the `2/(2n+1)` normalisation, the
  Haar family, and both Fourier computations (including the endpoint
  conventions and the $L^2$-only scope) were verified. The page prose is not
  editable and was not edited; its summary "Both examples claim only $L^2$
  convergence and assign no meaning to the endpoint values" now matches both
  items.

## Defects I could not edit

None. No defect was found in a published dependency of this batch (every
published clause quoted by an in-flight item was opened and matched, and the
load-bearing ones — Gram determinant, the published $L^2$ projection lemma,
metric-closure characterisation, real/complex $L^p$ completeness and density,
complex Stone–Weierstrass, $\mathrm{AC}\Rightarrow\mathrm{AC}_\omega$, the Zorn
schema, and the BFK numbered results — were read in the cited clause or in full).
Nothing was added, deleted or withdrawn; no proposed withdrawal is pending for
the 5b lead.

## Blocker

None. No unresolved mathematics, no unavailable source, and no cross-batch
dependency issue for this batch (`...-batch-1.cross-batch-dependencies.json` is
`[]`).

## Coverage note (limitations, stated honestly)

I read all 63 in-scope items in full and verified every numbered step of every
proof, but I did not open every one of the roughly one hundred published
dependency items in full: for dependencies whose cited clause is a short
definition or a single statement I read that clause (and, where a computation
was used, the surrounding proof text), and I did not re-prove the published
$L^p$/measure-theory/Stokes-adjacent analytic suppliers from their own
hypotheses; where an inference needed one of those suppliers' clauses I checked
the clause itself. I verified citation quotes against the library's on-disk
transcript of each source, not against the books' own pagination, so
"§/page/lecture" locators in `sources.references` were not independently
re-verified (the coverage record asserts their fetch verification). I did not
adjudicate the optimality (necessity) of the declared choice principles, only
their use; in particular I did not determine whether the tail-control selection
in `lem-square-summable-orthogonal-families-have-norm-convergent-finite-sums`
could be avoided under a $\sigma$-complete rather than Cauchy-complete ambient
space, since the item's own hypothesis is $\mathrm{AC}_\omega$ and its proof
spends it exactly where stated. No claim in this report is based on a source,
proof or computation I did not actually read or perform.
