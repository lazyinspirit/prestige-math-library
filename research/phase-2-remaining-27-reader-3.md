# Step 5a reader report — batch 3, run phase-2-remaining-27

- role: reader (Step 5a), label `reader-3`, covers batch `3`
- report path: `research/phase-2-remaining-27-reader-3.md`
- findings path: `research/phase-2-remaining-27-reader-findings-3.json`
- reading date: 2026-09-17 (Australia/Sydney)

Judged the current authored files, not the Step 3 scaffolds; the batch manifest
`research/phase-2-remaining-27-batch-3.pages.json` was used only as an index and
as a claim checklist. Every page and every item listed by the batch was opened
and read in full, and every dependency opened below was read at least at
statement level (several in full) before being relied on.

## 1. Opened inventory

### Pages (all four opened in full)

| page | kind | category | items listed |
|---|---|---|---|
| `banach-space-differential-calculus-and-banach-manifolds` | A | functional-analysis | 18 |
| `banach-space-differential-calculus-and-banach-manifolds-examples` | B | functional-analysis | 5 examples |
| `compact-self-adjoint-hilbert-schmidt-and-trace-class-operators` | A | functional-analysis | 21 |
| `compact-self-adjoint-hilbert-schmidt-and-trace-class-operators-examples` | B | functional-analysis | 8 examples |

Frontmatter cross-check: each page's `items:`/`examples:` list is exactly the
batch list for that page (checked mechanically); all 52 items are `status:
draft` and none carries a `verification.judge` record, so no stale judge record
had to be removed after the repairs below.

### Items (all 52 opened in full)

Page `banach-space-differential-calculus-and-banach-manifolds` (18):
`def-frechet-derivative-between-banach-spaces`,
`lem-the-frechet-derivative-is-unique`,
`thm-chain-sum-product-and-composition-rules-for-banach-derivatives`,
`def-c-k-map-between-banach-spaces`,
`lem-banach-mean-value-estimate-on-a-convex-set`,
`thm-inverse-function-theorem-for-banach-spaces`,
`thm-implicit-function-theorem-for-banach-spaces`,
`def-countable-base-banach-manifold-and-smooth-map`,
`def-tangent-space-and-differential-on-a-banach-manifold`,
`lem-banach-manifold-differentials-are-chart-independent`,
`def-split-banach-submanifold`,
`thm-regular-value-theorem-for-banach-manifolds`,
`def-smooth-banach-vector-bundle-and-section`,
`thm-a-transverse-banach-bundle-section-has-a-split-zero-submanifold`,
`def-fredholm-map-between-banach-manifolds`,
`lem-local-finite-dimensional-reduction-for-a-fredholm-map`,
`prop-the-index-of-a-fredholm-map-is-locally-constant`,
`rem-surjectivity-alone-does-not-give-a-banach-submanifold-without-a-split-kernel`.

Page `banach-space-differential-calculus-and-banach-manifolds-examples` (5):
`ex-the-derivative-of-a-bounded-bilinear-map`,
`ex-the-banach-inverse-theorem-for-a-small-lipschitz-perturbation-of-the-identity`,
`ex-a-regular-level-set-in-a-banach-space`,
`ex-a-projection-with-finite-dimensional-kernel-is-fredholm`,
`cex-a-closed-uncomplemented-subspace-is-not-a-split-banach-submanifold`.

Page `compact-self-adjoint-hilbert-schmidt-and-trace-class-operators` (21):
`lem-norm-of-a-self-adjoint-operator-from-its-quadratic-form`,
`lem-norm-point-of-a-compact-self-adjoint-operator-is-an-eigenvalue-up-to-sign`,
`lem-eigenspaces-of-a-self-adjoint-operator-are-orthogonal`,
`lem-orthogonal-complement-of-an-eigenspace-is-invariant`,
`thm-spectral-theorem-for-compact-self-adjoint-operators`,
`cor-orthonormal-eigenbasis-for-a-compact-self-adjoint-operator`,
`lem-positive-square-root-of-a-compact-positive-operator`,
`def-absolute-value-and-singular-values-of-a-compact-operator`,
`thm-singular-value-decomposition-for-compact-operators`,
`lem-singular-values-equal-approximation-numbers`,
`cor-compact-operator-iff-approximation-numbers-tend-to-zero`,
`cor-finite-rank-operators-are-norm-dense-in-compact-hilbert-space-operators`,
`thm-hilbert-schmidt-operators-form-a-two-sided-ideal`,
`def-trace-class-operator`,
`thm-trace-class-iff-product-of-two-hilbert-schmidt-operators`,
`lem-nuclear-series-characterizes-trace-norm`,
`thm-trace-class-is-a-two-sided-banach-operator-ideal`,
`def-trace-of-a-trace-class-operator`,
`thm-trace-is-absolutely-convergent-and-basis-independent`,
`thm-cyclicity-of-the-trace`,
`thm-trace-of-a-positive-operator-is-the-sum-of-its-eigenvalues`.

Page `compact-self-adjoint-hilbert-schmidt-and-trace-class-operators-examples` (8):
`ex-diagonal-schatten-class-criteria-on-ell-two`,
`ex-volterra-operator-is-hilbert-schmidt-and-quasinilpotent`,
`ex-rank-one-operator-adjoint-norm-and-trace`,
`ex-integral-operator-trace-under-a-valid-diagonal-hypothesis`,
`cex-compact-does-not-imply-hilbert-schmidt`,
`cex-hilbert-schmidt-does-not-imply-trace-class`,
`cex-trace-of-products-is-not-cyclic-without-summability`,
`rem-schatten-p-classes`.

### Dependencies opened to test load-bearing claims

Fréchet/manifold half: `def-banach-space`, `def-bounded-linear-operator`,
`def-operator-norm`, `def-space-of-bounded-linear-operators`,
`def-metric-topology`, `def-metric-continuity`, `def-norm-and-normed-space`,
`def-bounded-bilinear-map`, `thm-bounded-bilinear-map-equivalences`,
`lem-composition-operator-norm-inequality`, `thm-dual-norms-every-vector`,
`cor-mean-value-theorem`, `def-axiom-of-choice`, `def-dependent-choice`,
`def-countable-choice`, `def-relative-normed-convexity-and-separation`,
`def-dual-space-of-a-normed-space`, `thm-banach-fixed-point`,
`lem-neumann-series-and-small-perturbations-of-bounded-inverses`,
`thm-bounded-operator-space-is-banach`, `def-metric-ball`,
`thm-complete-subspace-iff-closed`, `thm-bounded-inverse-theorem`,
`def-product-norms-on-finitely-many-normed-spaces`, `def-topological-space`,
`def-hausdorff-space`, `def-second-countable-space`,
`def-homeomorphism-and-open-maps`, `def-complemented-subspace`,
`def-linear-subspace`, `def-subspace-topology-top`,
`cor-finite-dimensional-subspaces-are-complemented`,
`cor-finite-codimensional-subspaces-are-complemented`,
`thm-complemented-subspace-iff-range-of-a-bounded-projection`,
`thm-bounded-right-inverse-iff-kernel-is-complemented`,
`lem-fredholm-splitting-and-parametrix`, `thm-fredholm-index-is-additive`,
`thm-fredholm-index-is-locally-constant`,
`def-fredholm-operator-cokernel-and-index`, `def-connected-space`,
`def-c-zero-and-ell-infinity`,
`lem-c-zero-is-a-closed-subspace-of-ell-infinity`,
`lem-closed-subspace-of-a-banach-space-is-banach`,
`def-quotient-vector-space-coset-notation`, `def-quotient-seminorm`,
`thm-quotient-seminorm-is-a-norm-iff-subspace-is-closed`,
`lem-q-and-irrationals-dense-r`, `cor-irrationals-uncountable`,
`thm-well-ordering-principle`, `thm-countable-union-of-countable`,
`def-lipschitz-holder-contraction`.

Hilbert/operator half: `def-hilbert-space`,
`def-real-and-complex-inner-product-space`, `def-hilbert-space-adjoint`,
`thm-hilbert-adjoint-properties`,
`def-self-adjoint-positive-unitary-and-normal-operator`,
`def-eigenvalue-eigenvector-eigenspace-and-spectrum`,
`def-orthogonality-and-orthogonal-complement`,
`thm-cauchy-schwarz-in-an-inner-product-space`,
`prop-pythagorean-parallelogram-and-polarisation-identities`,
`cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases`,
`cor-real-spectral-theorem-for-self-adjoint-endomorphisms`,
`thm-complex-spectral-theorem-for-normal-endomorphisms`,
`def-compact-linear-operator`, `lem-finite-rank-operators-are-compact`,
`lem-compositions-with-a-compact-operator-are-compact`,
`thm-norm-limit-of-compact-operators-is-compact`,
`thm-compact-implies-the-other-compactness-forms`,
`thm-compact-implies-complete-and-totally-bounded`,
`thm-closed-unit-ball-compact-iff-finite-dimensional`,
`thm-closed-subspace-of-a-compact-space-is-compact`,
`thm-compactness-under-continuous-maps`,
`thm-orthogonal-decomposition-by-a-closed-subspace`,
`thm-double-orthogonal-complement-is-closure`,
`lem-orthogonal-complement-is-closed`,
`thm-hilbert-space-fourier-expansion`,
`thm-parseval-equivalences-for-a-complete-orthonormal-family`,
`lem-finite-bessel-inequality`,
`lem-square-summable-orthogonal-families-have-norm-convergent-finite-sums`,
`def-square-summable-family-on-an-arbitrary-index-set`,
`def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis`,
`def-dimension`, `def-infimum`, `def-countable`, `lem-subset-of-countable`,
`cor-archimedean-reciprocal`, `thm-zorn`, `def-maximal-element`,
`def-partial-order`, `def-chain`, `def-upper-bound`,
`thm-separable-hilbert-space-has-a-countable-orthonormal-basis`,
`def-hilbert-schmidt-operator`, `thm-hilbert-schmidt-norm-is-basis-independent`,
`thm-hilbert-schmidt-operators-are-compact`,
`thm-riesz-schauder-spectrum-of-a-compact-operator`,
`def-spectrum-and-resolvent-of-a-bounded-operator`,
`def-series-and-absolute-convergence-in-a-normed-space`,
`thm-completion-of-an-inner-product-space-is-hilbert`,
`lem-l-two-with-the-integral-pairing-is-a-hilbert-space`,
`thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz`,
`thm-l-two-kernels-give-hilbert-schmidt-operators`,
`def-completed-product-measure`,
`def-lebesgue-measure-and-the-lebesgue-sigma-algebra`,
`def-finite-sigma-finite-and-semifinite-measures`,
`thm-tonelli-theorem-for-sigma-finite-product-spaces`,
`thm-tonelli-and-fubini-for-completed-product-measures`,
`thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral`,
`cor-newton-leibniz-with-finitely-many-exceptional-points`,
`lem-derivative-of-a-power`, `thm-p-series-rational`, `def-metric-space`,
`def-metric-convergence`, `lem-metric-limits-unique`, `def-metric-compactness`,
`def-dense-top`, `def-counting-measure`,
`lem-ac-supplies-countable-and-dependent-choice-for-banach-integration`.

The exact statement of each of these was read; where an item's argument turned
on a dependency clause (the `X_1`/`Y_0` splitting with bounded coordinate
projections in `lem-fredholm-splitting-and-parametrix`; the openness-plus-index
statement of `thm-fredholm-index-is-locally-constant`; the ZF clause 2 of
`thm-complete-subspace-iff-closed`; the DC hypothesis of
`thm-bounded-inverse-theorem`; the basis-independence and adjoint-stability
clauses of `thm-hilbert-schmidt-norm-is-basis-independent`), the dependency was
read in full and its hypotheses were checked against the use.

## 2. Method

For each item: statement against its hypotheses (domains, quantifiers,
direction, finite/countable/infinite and degenerate cases); each numbered step
against the fact labels it cites; each citation against the cited item opened on
disk; computations (norms, series, integrals, factorials, diagonal `ℓ²`
examples) recomputed independently; page summaries checked claim-by-claim
against the authored items; witness claims checked to satisfy the stated
hypotheses. Unfamiliar points were checked against authoritative sources
(recorded in §5). No claim was accepted on the authority of the manifest, the
proof contract, or a prior report.

## 3. Repairs made (in-flight items of this batch)

All edits are in assigned in-flight items (no B-page prose, no other batch, no
`research/plan-spec.json`, no published content). Each repair is a byte-level
edit in the named file; the before/after text below is quoted from `git diff`.

1. `items/def-absolute-value-and-singular-values-of-a-compact-operator.md`,
   paragraph "Rank and the finiteness of the list" (ill-formed sentence).
   Before: "…so the positive singular values with multiplicity form a finite
   multiset in the finite-rank case, and in no other case, whenever $T$ has
   finite rank, and then their number with multiplicity is
   $\dim\operatorname{ran}T$, the rank of $T$; in that case…".
   After: "…and the positive singular values with multiplicity number exactly
   $\dim\operatorname{ran}T$: whenever $T$ has finite rank, their number with
   multiplicity is $\dim\operatorname{ran}T$, the rank of $T$, and then…".
   Evidence: the surrounding argument proves
   $\dim\operatorname{ran}T=\dim\operatorname{ran}|T|$ and the multiset of
   positive eigenvalues of $|T|$ has cardinality
   $\dim\operatorname{ran}|T|$; the old sentence asserted two contradictory
   things in one clause and was not parseable.

2. `items/thm-singular-value-decomposition-for-compact-operators.md`, fact
   [A1] (same phrase defect, copied). Before: "…with multiplicity, they are
   finite in number in the finite-rank case, and in no other case, that is when
   $r<+\infty$, and the index set $J$ is at most countable;…". After: "…with
   multiplicity; they are finite in number exactly when $r<+\infty$, that is in
   the finite-rank case, and the index set $J$ is at most countable;…".
   Evidence: the cited definition supplies both directions (finite rank
   $\Leftrightarrow$ finitely many positive singular values).

3. `items/thm-trace-class-is-a-two-sided-banach-operator-ideal.md`, fact [A1].
   Before: "…$s_n(T)$ is zero-padded and $\|T\|=\sum_ns_n(T)\cdot\ldots$ is
   bounded by $\|T\|_1$, because $\|T\|=s_1(T)\le\sum_ns_n(T)=\|T\|_1$".
   After: "…$s_n(T)$ is zero-padded and $\|T\|=s_1(T)$ is bounded by
   $\|T\|_1$, because …". Evidence: the displayed justification itself uses
   $\|T\|=s_1(T)$; the removed fragment was not a well-formed expression.

4. `items/thm-inverse-function-theorem-for-banach-spaces.md`, step 9.1 (and the
   reference to it in step 10.1). Before: "$U_0 := a+W$, an open neighbourhood
   of $a$ in $U$, and $V_0 := f[U_0] = A[B(b,r/4)]$ … inverse $F(y) :=
   a+g(A^{-1}y)$". After: "$U_0 := W$ … $V_0 := f[U_0] = A[\Phi[W]] =
   A[B(b,r/4)]$ … inverse $F(y) := g(A^{-1}y)$", source tag extended by
   `step 5.1`, and step 10.1 now names the statement's inverse explicitly.
   Evidence: step 5.1 defines $W=B(a,r)\cap\Phi^{-1}(B(b,r/4))$ as a
   neighbourhood of $a$ with $\Phi|_W:W\to B(b,r/4)$ a bijection with inverse
   $g$; the old $U_0=a+W$ is a neighbourhood of $2a$, not of $a$, and the
   claimed identity $f[U_0]=A[B(b,r/4)]$ fails for it. With $U_0=W$, both the
   bijectivity onto $V_0$ and step 10.1's identity $F\circ f=\mathrm{id}$ hold
   (verified directly: $f[W]=A\Phi[W]=A[B(b,r/4)]$).

5. `items/lem-local-finite-dimensional-reduction-for-a-fredholm-map.md`, step
   5.1. Before: "$T_0 := \{(w,u)\in\hat K\times E_1 : (w,\rho(w+u))\in A\}$
   … injective with inverse … by the uniqueness in [step 4.1]". After: "$T_0 :=
   \{(w,u)\in\hat K\times B : (w,\rho(w+u))\in A\}$", with both directions of
   the bijection written out. Evidence: the uniqueness produced by the implicit
   function theorem in step 4.1 is uniqueness *within $B$*, so injectivity of
   $T$ fails on the old domain (two points with the same $w$ and with
   $u\notin B$ can share $\rho(w+u)$); restricting the $u$-coordinate to $B$
   makes $T$ injective by that uniqueness, keeps $T_0$ open, and preserves
   surjectivity onto $A$ because $\phi$ takes values in $B$.

6. `items/cex-trace-of-products-is-not-cyclic-without-summability.md`, step 1.1.
   Before: "…hence $SS^*=\langle\cdot,u_0\rangle u_0^{\perp}$-part, that is …".
   After: "…hence $SS^*$ fixes each $u_n$ with $n\ge1$ and annihilates $u_0$,
   that is …". Evidence: the displayed computation gives
   $\langle SS^*x,u_n\rangle=\langle x,u_n\rangle$ for $n\ge1$ and
   $\langle SS^*x,u_0\rangle=0$, i.e. $SS^*=I-P_0$; the removed phrase was not
   grammatical and named no operator.

7. `items/thm-trace-class-iff-product-of-two-hilbert-schmidt-operators.md`,
   step 1.1: "Hilber–Schmidt" to "Hilbert–Schmidt" (typographical).

8. `items/ex-a-projection-with-finite-dimensional-kernel-is-fredholm.md`,
   statement: "in suitable coordinates it is the projection $(u,v)\mapsto(u,0)$
   onto the complement of the range" replaced by "…onto the range factor of the
   splitting $\operatorname{ran}p\oplus C$, with the complement coordinate set
   to zero". Evidence: in the normal form of
   `lem-local-finite-dimensional-reduction-for-a-fredholm-map` the pair is
   (range coordinate, complement coordinate) and the value's second coordinate
   lies in the complement $C$; for $C=\{0\}$ the map is $(u,v)\mapsto(u,0)$,
   whose image is $\operatorname{ran}p$, not its complement.

9. `items/lem-nuclear-series-characterizes-trace-norm.md`: added the missing
   frontmatter line `pipeline_run: phase-2-remaining-27` (the only one of the
   52 items without it).

### Proof-contract update

`research/phase-2-remaining-27-batch-3.proof-contracts.json` was updated so that
the three edited proof steps match the items: the `step-9-1` and `step-10-1`
derivations of `thm-inverse-function-theorem-for-banach-spaces` (claim text and
inputs, now including `step 5.1`) and the `step-5-1` derivation of
`lem-local-finite-dimensional-reduction-for-a-fredholm-map`. No `verification`
field existed on any of the 52 items, so no stale `verification.judge` record
existed to remove.

### Checks run after the repairs

- `node tools/tsx-run.mjs tools/reflow.mts items/<id>.md` for each of the nine
  changed items: "unchanged" for all nine.
- `node tools/tsx-run.mjs tools/precheck.mts` on each changed item, then on all
  52 batch items: `40 checked, 0 failing — all clean`.
- `node tools/proof-contract.mjs research/phase-2-remaining-27-batch-3.proof-contracts.json --strict`:
  `0 error(s), 0 warning(s), 52/52 item(s) checked`.
- `node tools/citation-fidelity.mjs research/phase-2-remaining-27-batch-3.proof-contracts.json`:
  545 citations, no quote-not-found, no widening candidates.
- `node tools/tsx-run.mjs tools/rendercheck.mjs` on the nine changed items: OK
  (parses; no wikilink inside math; no unbalanced delimiters).

## 4. Nonfatal observations (read, not repaired, no defect left)

Short proof-step compressions or wording loose ends that a competent reader
closes at once; none changes a claim, definition, witness or computation.

- `thm-spectral-theorem-for-compact-self-adjoint-operators`, step 2.2: "the
  previous inclusion reverses after taking complements" is loose; the displayed
  inclusion $(\ker T)^\perp\subseteq\overline{\operatorname{ran}T}$ follows at
  once from $(\operatorname{ran}T)^\perp=\ker T$, which the same paragraph
  proves.
- `cex-a-closed-uncomplemented-subspace-is-not-a-split-banach-submanifold`, step
  3.2: the velocity/curve comparison is compressed; the identity
  $T_0j(T_0c_0)=D\varphi(0)[c_0]$ follows because $T_0j$ computed in the charts
  $(\mathrm{id}_{c_0},\varphi)$ has chart representative $\varphi|_{U\cap c_0}$
  with derivative $D\varphi(0)|_{c_0}$, and closedness of $c_0$ gives the other
  inclusion. Step 1.2's "$\varphi(0)=0$" is arranged by translating the chart
  by $\varphi(0)\in E_0$.
- `ex-volterra-operator-is-hilbert-schmidt-and-quasinilpotent`, step 1.2: the
  phrase "by applying the $L^2$-norm bound of [A3] to the function
  $s\mapsto(x-s)^n$" describes loosely how the displayed sharp constant
  $\tfrac{1}{n!\sqrt{(2n+1)(2n+2)}}$ is obtained; the constant itself is
  correct and matches the statement.
- `thm-trace-of-a-positive-operator-is-the-sum-of-its-eigenvalues`, step 3.1:
  "the SVD of $T$ has $e_j=g_j$" is a slight abuse — the SVD supplies *some*
  orthonormal eigenbasis of $|T|=T$, and taking the constructed $g_j$ is
  legitimate because the SVD statement quantifies existentially over such
  bases.
- `ex-diagonal-schatten-class-criteria-on-ell-two`, step 1.1: a stray blank line
  after the step (cosmetic).

## 5. External-source checks that resolved two uncertainties

Unfamiliar or unsourced points were resolved against the sources below; the
exact statement and location are recorded in each case. No defect remains after
these checks, so the findings array is empty.

**(a) The Hermitian boundary clause** —
`items/ex-integral-operator-trace-under-a-valid-diagonal-hypothesis.md`,
claim 4, second clause: "a continuous Hermitian kernel that is not positive
semidefinite may fail to be trace class". The item's own citations (Teschl
§10.5, Lemma 10.26 and Theorem 10.27) cover only the positive case, so I looked
for outside support. B. Jefferies, "A maximal function approach to operator
traces" (Australian National University,
`maths.anu.edu.au/files/5_A%20MAXIMAL%20FUNCTION%20APPROACH%20TO%20OPERATOR%20TRACES_1.pdf`),
§3, states: "There exists a continuous periodic function $\varphi$ … with
$\sum_{n\in\mathbb Z}|\hat\varphi(n)|^p=\infty$ for all $p<2$ [Carleman,
1918]. If $k(x,y)=\varphi(x-y)$, then $k$ is a continuous kernel … although the
Hilbert–Schmidt operator $T_k$ is not a trace class operator" — a witness that
is not itself Hermitian. The clause is nevertheless **true**, by that same
classical theorem plus an elementary parity argument: split a continuous
periodic $f$ with non-summable coefficients (Carleman) into even and odd parts
$f=f_e+f_o$; then $\sum_n|\hat f_e(n)|+\sum_n|\hat f_o(n)|\ge\sum_n|\hat
f(n)|=\infty$ while both parts have $\ell^2$ coefficients. If $f_e$ has
non-summable coefficients, the kernel $k(x,y)=f_e(x-y)$ on the circle with
normalized Lebesgue measure is continuous and Hermitian ($f_e$ is real and
even, so $\hat f_e$ is real), and its convolution operator is Hilbert–Schmidt
($\sum|\hat f_e(n)|^2<\infty$) but not trace class
($\sum|\hat f_e(n)|=\infty$); if instead $f_o$ has non-summable coefficients,
the same holds for the Hermitian kernel $i\,f_o(x-y)$ ($f_o$ real and odd).
Finally, a continuous positive semidefinite kernel over this base would be
trace class by the item's own claims 1–3 (Mercer), so the witness is
automatically not positive semidefinite. Claim 4 as authored is therefore
verified; the only reservation is that the supporting theorem is external to
the item's cited sources, which is recorded here rather than edited, since the
idle boundary remark builds nothing on it.

**(b) The non-positive, non-Hermitian side** was also confirmed for
completeness: J. C. Ferreira and S. A. Carvalho, "Nuclearity and trace formulas
of integral operators", Ann. Funct. Anal. 9 (2018) 500–513, final section,
record the Volterra operator as Hilbert–Schmidt but not trace class with
$\int_0^1G(x,x)\,dx=1$ and note that positivity cannot be omitted; this is
consistent with the page's own treatment of the Volterra example.

## 6. Page verdicts

| page | verdict |
|---|---|
| `banach-space-differential-calculus-and-banach-manifolds` | sound after the step 9.1 repair of the inverse function theorem; the Fréchet calculus, mean value estimate, inverse/implicit theorems, chart-independence lemma, split-submanifold definition, regular value theorem, bundle/transversality theorem, Fredholm normal form and index local-constancy all check out against their hypotheses; summary prose matches the items |
| `banach-space-differential-calculus-and-banach-manifolds-examples` | sound; all five witnesses verified (bilinear derivative computation, global Lipschitz inverse, complemented-summand level sets, finite-kernel projection's Fredholm reduction, and the $c_0\subset\ell^\infty$ non-split counterexample, whose quotient/non-separation argument I rechecked step by step) |
| `compact-self-adjoint-hilbert-schmidt-and-trace-class-operators` | sound after the three wording/metadata repairs (A1 of the absolute-value definition and of the SVD theorem, A1 of the trace ideal theorem, `pipeline_run`); the spectral theorem, square root, SVD, approximation numbers, HS ideal, trace-class chain, nuclear characterisation, basis independence of the trace, cyclicity and positive-trace/eigenvalue-sum all check out |
| `compact-self-adjoint-hilbert-schmidt-and-trace-class-operators-examples` | sound; diagonal Schatten criteria, Volterra, rank-one, the RKHS trace formula (verified: $T_k=JJ^*$ and $\sum_n\|Je_n\|^2=\int k(x,x)\,d\mu$ by Parseval plus Tonelli), the two Schatten-separation counterexamples, the shift cyclicity failure and the claim-4 boundary clauses (verified in §5) all check out |

## 7. Blockers and coverage limitation

No blocker: all mathematics in the batch was either verified locally or
repaired, and no item was left unresolved.

Limitation (honest coverage statement): I read all 52 items and all four pages
in full and verified every numbered step against the fact labels it cites, but
for the large transitive dependency set I opened statements and, where a claim
turned on a specific clause, the relevant proof sections; I did not re-prove
end-to-end every upstream dependency (for example the full contraction
iteration inside `thm-banach-fixed-point`, or the full Tonelli and $L^2$-kernel
developments cited by the integral-operator example), and I did not consult
sources outside the repository except the two recorded in §5.
