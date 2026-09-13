# Step 3b helper c-1 checkpoint and final handoff

- Run: `phase-2-next-21`
- Group: `c`
- Pair: `banach-alaoglu-goldstine-and-krein-milman`
- Authorized pages: `library/functional-analysis/banach-alaoglu-goldstine-and-krein-milman.md` and `library/functional-analysis/banach-alaoglu-goldstine-and-krein-milman-examples.md`
- Result: all 24 manifest items are present, ordered on the A/B pages as specified, and mathematically complete. I audited the existing provisional drafts, repaired seven owned items, and added no local item.

## Conventions and source audit

Throughout, scalar fields are $\mathbb R$ or $\mathbb C$; convex coefficients are real; weak-star convergence/topology means pointwise convergence/evaluation on the predual; compactness means open-cover compactness. The absolute polar uses $|f(u)|\leq 1$, not the one-sided real convention. The choice ledger is explicit: Banach–Alaoglu and its direct compactness applications assume the ultrafilter lemma; Goldstine assumes HB; Banach–Dieudonné assumes the ultrafilter lemma, DC, and HB; Krein–Milman/Bauer and the dual-ball extreme-point corollaries assume AC. The metric argument and Milman's converse use no infinite choice beyond their stated suppliers.

I read the complete relevant arguments, not only search snippets, at these locators:

- Bühler–Salamon, *Functional Analysis*: §3.1, Corollary 3.29, pp. 131–132; §3.2.1, Theorem 3.30 and Example 3.31, p. 132; §3.2.2, pp. 133–134; §3.2.3, Theorem 3.33, pp. 134–135; §3.3, Theorem 3.40 and Corollary 3.41 with the complete proof, pp. 138–141; §3.5, Definition 3.45 and Theorem 3.46 with proof, pp. 148–151. URL: https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf
- Gerald Teschl, *Topics in Real and Functional Analysis*: Problem 5.3, p. 141; §5.2, pp. 142–146; §5.3, Theorems 5.10 and 5.13, pp. 146–149. URL: https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf
- Harald Hanche-Olsen, *Topological vector spaces*: Theorems 21–22 and their complete proofs, pp. 13–14. URL: https://hanche.folk.ntnu.no/notes/topvec/topvec-a4.pdf
- Ian Ball, *Bauer's Maximum Principle for Quasiconvex Functions*: standard convex-objective proof, pp. 1–2. URL: https://arxiv.org/pdf/2305.04893
- D. H. Fremlin, *Measure Theory*, Volume 4, Chapter 43: §437S, Proposition and proof, p. 73. URL: https://www1.essex.ac.uk/maths/people/fremlin/chap43.pdf

I also read the exact Statement or Definition of every direct external supplier used by this pair, and the full load-bearing proofs of the compact-metric sequential-compactness implication, finite compact convex hull lemma, locally convex strict separation, point separation, the local-compactness bridge, and the real/complex Riesz representation suppliers. The external IDs inspected were:

`cor-relative-hahn-banach-bidual-isometry`, `def-axiom-of-choice`, `def-c-zero-and-ell-infinity`, `def-compact-space`, `def-compact-support-c-c-and-c-zero-on-an-lch-space`, `def-dependent-choice`, `def-dual-space-of-a-normed-space`, `def-hahn-banach-extension-principle-relative`, `def-hausdorff-space`, `def-locally-compact-space`, `def-locally-convex-topological-vector-space`, `def-product-topology`, `def-regular-borel-measure-on-an-lch-space`, `def-separable-space`, `def-topological-space`, `def-weak-star-convergence`, `def-weak-star-topology`, `lem-basic-weak-star-neighborhoods`, `lem-finite-choice`, `lem-locally-convex-closures-and-finite-compact-convex-hulls`, `lem-positive-c-zero-functionals-have-finite-regular-representing-measures`, `prop-dirac-measure-is-a-probability-measure`, `prop-restriction-is-a-measure`, `thm-banach-series-criterion`, `thm-bounded-c-zero-functionals-are-regular-complex-measure-integrals`, `thm-closed-subspace-of-a-compact-space-is-compact`, `thm-compact-hausdorff-tychonoff-from-the-ultrafilter-lemma`, `thm-compact-iff-fip`, `thm-compact-implies-the-other-compactness-forms`, `thm-compact-subset-of-a-hausdorff-space-is-closed`, `thm-compactness-under-continuous-maps`, `thm-dual-of-c0-is-ell-one`, `thm-hahn-banach-dominated-extension`, `thm-heine-borel-rn`, `thm-locally-convex-continuous-dual-separates-points`, `thm-locally-convex-strict-separation`, `thm-rmk-positive-functional-is-integration-against-its-representing-measure`, `thm-semicontinuity-level-set-characterisation`, `thm-strict-separation-of-a-point-from-a-closed-convex-set`, `thm-ultrafilter-lemma`, and `thm-zorn`.

## A-page item checkpoints

### `lem-dual-ball-as-a-closed-subset-of-a-product`

- Claim/conventions: evaluation identifies $B_{X^*}$ homeomorphically with the closed subset of $\prod_{x\in X}\{z:|z|\leq\|x\|\}$ cut out by the linearity equations; this includes $X=0$ and both scalar fields.
- Sources: Bühler–Salamon §3.2.3, Theorem 3.33, pp. 134–135; Teschl §5.3, proof of Theorem 5.10, pp. 146–147.
- Dependencies: `def-weak-star-topology`, `def-product-topology`, `def-dual-space-of-a-normed-space`.
- Proof: establish the initial-topology homeomorphism, show the additivity/homogeneity equations are closed coordinate conditions, recover a bounded linear functional from every solution, and check the zero-space product. No choice is used.
- Boundary/check/open/next: empty index/zero space and real/complex scalar equations are explicit. Precheck and rendercheck pass. No open mathematical obligation. Next: `thm-banach-alaoglu`.

### `thm-banach-alaoglu`

- Claim/conventions: under the ultrafilter lemma, $B_{X^*}$ is weak-star compact for every normed, not necessarily complete, real or complex $X$.
- Sources: Bühler–Salamon §3.2.3, Theorem 3.33, pp. 134–135; Teschl §5.3, Theorem 5.10, p. 147.
- Dependencies: `lem-dual-ball-as-a-closed-subset-of-a-product`, `thm-compact-hausdorff-tychonoff-from-the-ultrafilter-lemma`, `thm-heine-borel-rn`, `thm-closed-subspace-of-a-compact-space-is-compact`.
- Proof: each real interval/complex disk is compact Hausdorff; Tychonoff compactifies the full product; the preceding closed-image lemma and closed-subset compactness transfer compactness to the ball. The ultrafilter lemma is used only by Tychonoff.
- Boundary/check/open/next: $X=0$, zero-radius factor, and complex disks are handled. Precheck and rendercheck pass. No open obligation. Next: `def-absolute-polar-in-a-normed-dual-pair`.

### `def-absolute-polar-in-a-normed-dual-pair`

- Claim/conventions: $U^\circ=\{f\in X^*:|f(u)|\leq1\ \forall u\in U\}$, with explicit distinction from a one-sided real polar; $\varnothing^\circ=\{0\}^\circ=X^*$.
- Source: Teschl, Problem 5.3, p. 141. The prior Bühler–Salamon locator did not contain this convention and was removed.
- Dependency: `def-dual-space-of-a-normed-space`.
- Proof/boundary/check: definitional item; empty and zero subsets are explicit; no choice. Rendercheck passes; precheck correctly skips it.
- Open/next: the lead must remove the unsupported Bühler–Salamon source from the shared row/coverage and record the exact Teschl locator. Next: `thm-weak-star-compactness-of-polar-sets`.

### `thm-weak-star-compactness-of-polar-sets`

- Claim/conventions: under the ultrafilter lemma, the absolute polar of any norm-neighborhood of zero is weak-star compact; convexity and balancedness of the neighborhood are not assumed.
- Sources: Bühler–Salamon §3.2.3, Theorem 3.33, pp. 134–135; Teschl Problem 5.3, p. 141, and §5.3, Theorem 5.10, p. 147.
- Dependencies: `thm-banach-alaoglu`, `lem-basic-weak-star-neighborhoods`, `def-absolute-polar-in-a-normed-dual-pair`.
- Proof: a smaller norm ball inside $U$ gives a uniform norm bound on $U^\circ$; a one-evaluation neighborhood shows the polar is weak-star closed; scalar dilation gives a compact containing ball; closed-subset compactness finishes.
- Boundary/check: $U$ is nonempty because it is a zero-neighborhood, and $X=0$ yields a singleton. The scaffold's phrase “closed subspace” was ambiguous and misleading because a polar is not generally a linear subspace; it is repaired to the unambiguous “closed subset.” Precheck and rendercheck pass.
- Open/next: shared proof-contract derivation `closed-polar-compact` must likewise say “closed subset,” not “closed subspace”; shared source locators need the corrections above. Next: `thm-dual-ball-weak-star-metrizable-for-separable-predual`.

### `thm-dual-ball-weak-star-metrizable-for-separable-predual`

- Claim/conventions: a supplied dense sequence $(x_n)$ induces the displayed summable metric on every norm-bounded $A\subseteq X^*$, and that metric gives exactly the relative weak-star topology; no metric on all of $X^*$ is asserted.
- Sources: Bühler–Salamon §3.2.1, proof of Theorem 3.30, p. 132; Teschl §5.3, formula (5.12), pp. 146–147.
- Dependency: `lem-basic-weak-star-neighborhoods`.
- Proof: verify the metric; approximate finitely many arbitrary test vectors by dense-sequence entries using the common norm bound; conversely control a finite series head and geometric tail. No compactness or choice principle is used once the dense sequence is supplied.
- Boundary/check/open/next: $A=\varnothing$, $A$ singleton/$M=0$, $X=0$, empty finite tests, and truncation endpoints are covered. Precheck/rendercheck pass. Shared contract has a duplicated `3.1`: `weak-star-refines-metric.step` must be `2.2` with inputs `F1`, `step 1.1`; `topologies-agree` remains step `3.1`. Next: `cor-separable-banach-dual-ball-is-weak-star-sequentially-compact`.

### `cor-separable-banach-dual-ball-is-weak-star-sequentially-compact`

- Claim/conventions: under the ultrafilter lemma, a separable normed predual has weak-star sequentially compact dual ball; completeness is not assumed.
- Sources: Bühler–Salamon §3.2.1, Theorem 3.30, p. 132; Teschl §5.3, formula (5.12) and Theorem 5.10, pp. 146–147.
- Dependencies: `thm-banach-alaoglu`, `thm-dual-ball-weak-star-metrizable-for-separable-predual`, `thm-compact-implies-the-other-compactness-forms`, `def-separable-space`.
- Proof: enumerate/repeat an at-most-countable dense set to get a dense sequence, combine the explicit metric with Alaoglu compactness, then apply the already proved ZF compact-metric sequential-compactness implication.
- Boundary/check/open/next: finite dense sets, zero space, and the absence of a new DC use are explicit. Precheck/rendercheck pass. No open mathematical obligation. Next: `thm-goldstine`.

### `thm-goldstine`

- Claim/conventions: under HB, $J_X(B_X)$ is weak-star dense in $B_{X^{**}}$ for every normed real or complex $X$; no compactness/completeness enters.
- Sources: Bühler–Salamon §3.1, Corollary 3.29, pp. 131–132; Teschl §5.3, Theorem 5.13, pp. 148–149. The old Bühler–Salamon citation to “§3.4, Theorem 3.44, pp. 146–147” was wrong: 3.44 is Helly's lemma, not Goldstine.
- Dependencies: `lem-basic-weak-star-neighborhoods`, `cor-relative-hahn-banach-bidual-isometry`, `thm-strict-separation-of-a-point-from-a-closed-convex-set`, `def-hahn-banach-extension-principle-relative`.
- Proof: reduce finite weak-star data to the closure of $T(B_X)$ in a finite-dimensional real space; strict separation gives $\operatorname{Re}x^{**}(f)>\sup_{B_X}\operatorname{Re}f=\|f\|$, contradicting $\|x^{**}\|\leq1$. The complex real-linear separator is written as a real part of a complex-linear combination.
- Boundary/check/open/next: empty test list and $X=0$ are explicit; HB is used for the isometric bidual map. Precheck/rendercheck pass. The lead must correct the shared locator. Next: `cor-goldstine-finite-data-approximation`.

### `cor-goldstine-finite-data-approximation`

- Claim/conventions: under HB, any finite list of dual tests on $x^{**}\in B_{X^{**}}$ is approximated within positive $\varepsilon$ by one $x\in B_X$; the list may be empty.
- Sources: Bühler–Salamon §3.1, Corollary 3.29, pp. 131–132; Teschl §5.3, Theorem 5.13, pp. 148–149.
- Dependencies: `thm-goldstine`, `lem-basic-weak-star-neighborhoods`, `def-hahn-banach-extension-principle-relative`.
- Proof: form the corresponding basic weak-star neighborhood and apply Goldstine once. This is one finite-data witness, not simultaneous choice over all data.
- Boundary/check/open/next: $m=0$, $\varepsilon>0$, and both fields are explicit. Precheck/rendercheck pass. The lead must mirror the Goldstine locator correction. Next: `thm-banach-dieudonne-linear-subspace-criterion`.

### `thm-banach-dieudonne-linear-subspace-criterion`

- Claim/conventions: assuming the ultrafilter lemma, DC, and HB, for a Banach space $X$ and linear $E\subseteq X^*$, $E$ is weak-star closed iff $E\cap B_{X^*}$ is weak-star closed.
- Source: Bühler–Salamon §3.3, Theorem 3.40 and Corollary 3.41, complete proof, pp. 138–141.
- Dependencies: `thm-banach-alaoglu`, `thm-compact-hausdorff-tychonoff-from-the-ultrafilter-lemma`, `def-dependent-choice`, `def-hahn-banach-extension-principle-relative`, `thm-dual-of-c0-is-ell-one`, `thm-banach-series-criterion`, `lem-basic-weak-star-neighborhoods`.
- Proof: the easy direction is closed-intersection. For the reverse direction, norm-close $E$, construct finite separating tests recursively using weak-star compactness, invoke DC for the sequence, concatenate scaled tests into $(x_i)$, map $X^*$ to $c_0$, separate $T(f_0)$ from $T(E)$ by HB, represent the separator in $\ell^1$, use Banach completeness to form $x_0=\sum\alpha_i x_i$, and obtain a weak-star neighborhood of $f_0$ disjoint from $E$. Realification transfers the proof to complex scalars.
- Boundary/check/open/next: empty finite tests, zero padding, zero coefficients, convergence estimates, and both iff directions are explicit. Every choice use is named. Precheck/rendercheck pass; no open obligation. Next: `def-extreme-point-and-face`.

### `def-extreme-point-and-face`

- Claim/conventions: intrinsic real-convex definitions of extreme point and nonempty face, with singleton equivalence; topology/exposedness is not built in.
- Sources: Bühler–Salamon §3.5, Definition 3.45, p. 148; Hanche-Olsen p. 13, paragraph beginning “Let $K$ be a convex set.” The section number was repaired from the erroneous §3.4 to §3.5.
- Dependency: `def-locally-convex-topological-vector-space` for the real-coefficient convention in the complex case.
- Boundary/check/open/next: empty $K$ has neither faces nor extreme points; singleton and strict $0<t<1$ endpoints are explicit. Rendercheck passes; precheck skips the definition. The lead must correct the shared source locator. Next: `lem-minimizer-face-of-a-continuous-affine-functional`.

### `lem-minimizer-face-of-a-continuous-affine-functional`

- Claim/conventions: a continuous real-affine function on nonempty compact convex $K$ has a nonempty compact minimizer face; a face of that face is a face of $K$.
- Sources: Bühler–Salamon §3.5, proof of Theorem 3.46, Step 2, pp. 149–150; Hanche-Olsen p. 13, exposed-face paragraph before Theorem 21.
- Dependencies: `def-extreme-point-and-face`, `thm-compactness-under-continuous-maps`, `thm-closed-subspace-of-a-compact-space-is-compact`.
- Proof: compactness gives a minimum; the level set is closed/compact and convex; positive coefficients force both endpoints to attain the minimum; face transitivity is checked directly.
- Boundary/check/open/next: nonemptiness is assumed, constant functions give $F=K$, and strict coefficients are used. Precheck/rendercheck pass. No open obligation. Next: `thm-krein-milman-existence-of-extreme-points`.

### `thm-krein-milman-existence-of-extreme-points`

- Claim/conventions: under AC, every nonempty compact convex subset of a locally convex Hausdorff real/complex TVS has an extreme point.
- Sources: Bühler–Salamon §3.5, Theorem 3.46, Steps 1–4, pp. 149–151; Hanche-Olsen Theorem 21 and proof, pp. 13–14.
- Dependencies: `lem-minimizer-face-of-a-continuous-affine-functional`, `thm-locally-convex-continuous-dual-separates-points`, `thm-compact-iff-fip`, `thm-zorn`, `def-axiom-of-choice`, `thm-hahn-banach-dominated-extension`.
- Proof: order nonempty closed faces by reverse inclusion; chain intersections are nonempty compact faces by FIP; Zorn yields a minimal face; point separation and a proper minimizer face show it is a singleton.
- Boundary/check/open/next: empty chains get $K$ as upper bound, nonempty chains use no selected family of points, and AC supplies both Zorn and HB. Precheck/rendercheck pass. No open obligation. Next: `thm-krein-milman-closed-convex-hull-form`.

### `thm-krein-milman-closed-convex-hull-form`

- Claim/conventions: under AC, compact convex $K$ equals the closed convex hull of its extreme points; $K=\varnothing$ is included with empty closed convex hull.
- Sources: Bühler–Salamon §3.5, Theorem 3.46, Step 5, pp. 150–151; Hanche-Olsen Theorem 21, p. 14.
- Dependencies: `thm-krein-milman-existence-of-extreme-points`, `thm-locally-convex-strict-separation`, `lem-minimizer-face-of-a-continuous-affine-functional`, `thm-hahn-banach-dominated-extension`, `thm-compact-subset-of-a-hausdorff-space-is-closed`, `lem-locally-convex-closures-and-finite-compact-convex-hulls`.
- Proof: the extreme-point hull lies in closed convex $K$; if $x\in K$ lies outside it, strict separation produces a real affine functional; its compact minimizer face has an extreme point of $K$, simultaneously in the hull and strictly below its infimum, a contradiction.
- Boundary/check/open/next: empty/singleton sets and both inclusions are explicit; AC enters through extreme-point existence and HB-backed separation. Precheck/rendercheck pass. Shared contract citation `F1.uses` must be `["1.1", "4.1"]`, not `["1.1", "7.1"]`; there is no step 7.1. Next: `def-upper-semicontinuous-real-map-on-a-topological-space`.

### `def-upper-semicontinuous-real-map-on-a-topological-space`

- Claim/conventions: upper semicontinuity on any topological space means all strict sublevels are open, equivalently all non-strict superlevels are closed; the definition is reconciled with the existing pointwise real-domain convention.
- Sources: Ball p. 1, theorem hypothesis/standard proof Step 1; the exact equivalence supplier is `thm-semicontinuity-level-set-characterisation`.
- Dependencies: `def-topological-space`, `thm-semicontinuity-level-set-characterisation`.
- Boundary/check/open/next: constant maps and endpoint distinction `<a` versus `\geq a` are explicit; no choice. Rendercheck passes; precheck skips the definition. No open obligation. Next: `cor-bauer-maximum-principle`.

### `cor-bauer-maximum-principle`

- Claim/conventions: under AC, every upper-semicontinuous convex real function on nonempty compact convex $K$ attains its maximum at an extreme point.
- Sources: Ball pp. 1–2, standard convex-objective proof, Steps 1–3; Bühler–Salamon §3.5, minimal-face method in Theorem 3.46, pp. 149–151.
- Dependencies: `def-extreme-point-and-face`, `thm-locally-convex-continuous-dual-separates-points`, `thm-compact-iff-fip`, `thm-zorn`, `def-axiom-of-choice`, `thm-hahn-banach-dominated-extension`, `def-upper-semicontinuous-real-map-on-a-topological-space`.
- Proof: closed superlevels plus FIP produce a maximizer; the maximizer set is $K$-extremal by convexity; Zorn gives a minimal nonempty closed extremal subset; point separation and a linear superlevel face make any nonsingleton minimal set smaller; its singleton is an extreme maximizer.
- Boundary/check/open/next: finite maximum choice is explicit and choice-free, empty chains are covered, constant $f$ is allowed, and AC/HB uses are named. Precheck/rendercheck pass. No open obligation. Next: `thm-milman-converse-for-compact-generating-sets`.

### `thm-milman-converse-for-compact-generating-sets`

- Claim/conventions: if compact convex $K=\overline{\operatorname{co}}(A)$, then $\operatorname{ext}K\subseteq\overline A$; compact $A$ gives containment in $A$ itself.
- Source: Hanche-Olsen Theorem 22 and proof, pp. 13–14, including the overlap warning handled in the local proof.
- Dependencies: `def-extreme-point-and-face`, `def-locally-convex-topological-vector-space`, `thm-compact-subset-of-a-hausdorff-space-is-closed`, `thm-closed-subspace-of-a-compact-space-is-compact`, `lem-locally-convex-closures-and-finite-compact-convex-hulls`, `lem-finite-choice`.
- Proof: for an extreme $w\notin\overline A$, choose a convex zero-neighborhood whose difference translate avoids $\overline A$; compactness gives finitely many local pieces; their closed convex hulls are compact and avoid $w$; the finite convex hull equals $K$; a representation of $w$ either has one positive coefficient or yields a strict two-term decomposition, and extremality forces $w$ into an avoiding piece.
- Boundary/check/open/next: $K=\varnothing$, $A\ne\varnothing$ in the remaining case, zero/one coefficients, overlapping pieces, and finite choice are explicit; no AC is assumed. Precheck/rendercheck pass. Shared contract citation `F4.uses` must be `["1.1", "4.1"]`, not `["1.1", "3.1", "7.1"]`. Next: `cor-dual-unit-ball-has-extreme-points`.

### `cor-dual-unit-ball-has-extreme-points`

- Claim/conventions: under AC, the dual unit ball of every nonzero real/complex normed space has an extreme point; the proof records that the zero-space singleton also works.
- Sources: Bühler–Salamon §3.5, Theorem 3.46, pp. 149–151, after §3.2.3, Theorem 3.33, pp. 134–135; Teschl §5.2, pp. 144–146, and §5.3, Theorem 5.10, p. 147.
- Dependencies: `thm-banach-alaoglu`, `thm-krein-milman-existence-of-extreme-points`, `lem-basic-weak-star-neighborhoods`, `def-axiom-of-choice`, `thm-ultrafilter-lemma`, `thm-hahn-banach-dominated-extension`.
- Proof: AC supplies the ultrafilter lemma for Alaoglu and HB for Krein–Milman; the weak-star dual is locally convex Hausdorff and its ball is nonempty convex compact, so extreme-point existence applies.
- Boundary/check/open/next: zero space/singleton and all choice costs are explicit. Precheck/rendercheck pass. No open obligation. Next: the B-page probability-measure example.

## B-page item checkpoints

### `ex-weak-star-compactness-of-probability-measures`

- Claim/conventions: under the ultrafilter lemma, regular Borel probabilities on compact Hausdorff $K$ are compact for convergence against all continuous real- or complex-valued functions, using the matching scalar dual of $C(K)$.
- Sources: Bühler–Salamon §3.2.2, invariant-probability application, pp. 133–134, and §3.2.3, Theorem 3.33, pp. 134–135; Teschl §5.3, Theorem 5.10, p. 147.
- Dependencies after repair: `thm-banach-alaoglu`, `lem-positive-c-zero-functionals-have-finite-regular-representing-measures`, `thm-bounded-c-zero-functionals-are-regular-complex-measure-integrals`, `def-regular-borel-measure-on-an-lch-space`, `def-locally-compact-space`, `def-compact-support-c-c-and-c-zero-on-an-lch-space`, `thm-closed-subspace-of-a-compact-space-is-compact`. The unused direct dependency `thm-rmk-positive-functional-is-integration-against-its-representing-measure` was removed; it remains a transitive supplier of the positive $C_0$ representation lemma.
- Proof: treat empty $K$ separately; use the exact fact that compact implies locally compact, so the LCH representation suppliers apply; identify $C_c(K)=C_0(K)=C(K)$; identify probabilities with the positive normalized slice of the dual ball in both scalar fields; show the slice weak-star closed by evaluation conditions; apply Alaoglu and closed-subset compactness.
- Boundary/check: empty $K$, singleton $K$, mass/norm one, closed positivity endpoint, and both scalar fields are explicit. The ultrafilter lemma enters only through Alaoglu. Precheck/rendercheck pass.
- Open/next: the shared manifest must remove the unused RMK theorem and add `def-locally-compact-space`; its source locator must be corrected. The contract must add the new F5 and shift its old F5/F6 to F6/F7 as detailed below. Next: the Dirac extreme-point example.

### `ex-extreme-points-of-the-probability-measures-are-dirac-masses`

- Claim/conventions: for compact Hausdorff $K$, $\operatorname{ext}P(K)=\{\delta_x:x\in K\}$ for regular Borel probabilities. This theorem is choice-free and does not require compactness of $P(K)$.
- Source: Fremlin, Volume 4, Chapter 43, §437S, Proposition and proof, p. 73. The former Bühler–Salamon/Teschl locators supplied only general extreme-point context, not this measure theorem, and were replaced.
- Dependencies after repair: `def-extreme-point-and-face`, `prop-dirac-measure-is-a-probability-measure`, `prop-restriction-is-a-measure`, `def-regular-borel-measure-on-an-lch-space`, `def-locally-compact-space`, `def-compact-space`, `def-hausdorff-space`, `thm-compact-iff-fip`, `thm-compact-subset-of-a-hausdorff-space-is-closed`. The unused and assumption-heavy `ex-weak-star-compactness-of-probability-measures` dependency was removed.
- Proof: compactness first makes $K$ locally compact, licensing the LCH regularity convention; Borel restrictions remain regular by inner compact approximation; intermediate mass gives a nontrivial normalized-restriction decomposition; a zero-one probability has a common point in all full closed sets by FIP; every neighborhood of that point has full mass; point/compact-set separation plus inner regularity makes its complement null; conversely each Dirac mass has only trivial convex decompositions. Step 4.1 was rewritten to state this logic without the scaffold's circular wording.
- Boundary/check: empty and singleton $K$, strict intermediate masses, zero-one endpoints, regularity of restrictions, and the reverse implication are explicit; no choice principle is used. Precheck/rendercheck pass.
- Open/next: the shared manifest must remove the preceding example from `deps` and replace its generic sources with Fremlin §437S. The proof contract must be renumbered/rebuilt as detailed below. Next: `ex-extreme-points-of-the-ell-infinity-unit-ball`.

### `ex-extreme-points-of-the-ell-infinity-unit-ball`

- Claim/conventions: over $\mathbb R$ or $\mathbb C$, the extreme points of $B_{\ell^\infty}$ are exactly sequences with every coordinate of modulus one.
- Source: Teschl §5.2, sequence-space extreme-point examples, pp. 144–145.
- Dependencies: `def-extreme-point-and-face`, `def-c-zero-and-ell-infinity`.
- Proof: perturb one interior coordinate in a field-appropriate direction; for the reverse direction, the scalar disk equality (expanded by a nonnegative square term) forces both endpoints to equal the boundary coordinate, hence equality coordinatewise.
- Boundary/check/open/next: the zero coordinate, complex direction, strict coefficients, and closed-ball boundary are explicit. Precheck/rendercheck pass. No open obligation. Next: `cex-the-c0-unit-ball-has-no-extreme-points`.

### `cex-the-c0-unit-ball-has-no-extreme-points`

- Claim/conventions: the closed unit ball of $c_0$ has no extreme points over either field.
- Source: Teschl §5.2, sequence-space extreme-point examples, pp. 144–145.
- Dependencies: `def-extreme-point-and-face`, `def-c-zero-and-ell-infinity`.
- Proof: every null sequence has a coordinate strictly inside the unit disk; explicit opposite finite-coordinate perturbations remain distinct in the $c_0$ unit ball and have midpoint $x$.
- Boundary/check/open/next: the least admissible coordinate can be used, so there is no choice issue; $x=0$ and complex scalars are included. Precheck/rendercheck pass. No open obligation. Next: `cor-c0-is-not-isometrically-a-dual-space`.

### `cor-c0-is-not-isometrically-a-dual-space`

- Claim/conventions: under AC, $c_0$ is not linearly isometric onto the dual of any normed space; no merely isomorphic claim is made.
- Source: Teschl §5.2, $c_0$ and dual-ball extreme-point discussion, pp. 144–145.
- Dependencies: `cex-the-c0-unit-ball-has-no-extreme-points`, `cor-dual-unit-ball-has-extreme-points`.
- Proof: a surjective linear isometry bijects unit balls and preserves extreme points; the predual cannot be zero; the dual ball has an extreme point under AC, contradicting the $c_0$ counterexample.
- Boundary/check/open/next: zero predual, one extreme point, and exact isometry are explicit. Precheck/rendercheck pass. No open obligation. Next: the nonsequential compactness counterexample.

### `cex-weak-star-compact-does-not-imply-weak-star-sequentially-compact`

- Claim/conventions: under the ultrafilter lemma, the weak-star compact unit ball of $(\ell^\infty)^*$ is not weak-star sequentially compact.
- Source: Bühler–Salamon §3.2.1, Example 3.31, p. 132, and §3.2.3, Exercise 3.37, p. 137.
- Dependencies: `thm-banach-alaoglu`, `def-weak-star-convergence`, `def-c-zero-and-ell-infinity`.
- Proof: coordinate evaluations are norm-one dual elements; for any supplied subsequence, a single bounded sequence with alternating values on its range makes the evaluations alternate, so that subsequence cannot converge weak-star; Alaoglu supplies compactness of the same ball.
- Boundary/check/open/next: off-range coordinates are zero, strict increase makes the witness well-defined, and both fields work. The witness is defined from one supplied subsequence, so no family choice is hidden. Precheck/rendercheck pass. No open obligation. Next: the comparison remark.

### `rem-banach-alaoglu-versus-sequential-alaoglu`

- Claim/conventions: distinguishes arbitrary-predual weak-star compactness, separable-predual sequential compactness through an explicit bounded-ball metric, and dual-ball extreme-point existence; records their different choice costs and does not assert an unresolved converse.
- Sources: Bühler–Salamon §3.2.1, Theorem 3.30 and Example 3.31, p. 132, and §3.2.3, Theorem 3.33, pp. 134–135; Teschl §5.3, Theorem 5.10 and formula (5.12), pp. 146–147.
- Dependencies: `thm-banach-alaoglu`, `cor-separable-banach-dual-ball-is-weak-star-sequentially-compact`, `cor-dual-unit-ball-has-extreme-points`.
- Boundary/check/open/next: the zero-predual singleton and the separation of ultrafilter-lemma, compact-metric, and AC/HB costs are explicit. Rendercheck passes; precheck skips the remark. No open obligation. Next: lead integration and contract validation.

## Required lead-only shared updates

I did not edit the shared manifest, coverage, proof contracts, decisions, plan/prose, or group report.

### Manifest and coverage

1. `def-absolute-polar-in-a-normed-dual-pair`: remove the unsupported Bühler–Salamon polar attribution; use Teschl, Problem 5.3, p. 141.
2. `thm-weak-star-compactness-of-polar-sets`: use Bühler–Salamon §3.2.3, Theorem 3.33, pp. 134–135, plus Teschl Problem 5.3, p. 141 and Theorem 5.10, p. 147; do not describe the polar as a subspace.
3. `thm-goldstine` and `cor-goldstine-finite-data-approximation`: change Bühler–Salamon to §3.1, Corollary 3.29, pp. 131–132. The old Theorem 3.44 locator is not Goldstine.
4. `def-extreme-point-and-face`: change Bühler–Salamon §3.4 to §3.5, Definition 3.45, p. 148.
5. `ex-weak-star-compactness-of-probability-measures`: remove direct dep `thm-rmk-positive-functional-is-integration-against-its-representing-measure`; add direct dep `def-locally-compact-space`; use the corrected Bühler–Salamon §3.2.2/§3.2.3 locators recorded above.
6. `ex-extreme-points-of-the-probability-measures-are-dirac-masses`: remove dep `ex-weak-star-compactness-of-probability-measures`, add `def-locally-compact-space`, and replace generic source context with Fremlin §437S, Proposition, p. 73.

### Proof contracts

1. `thm-weak-star-compactness-of-polar-sets`: change derivation `closed-polar-compact.claim` from “closed subspace” to “closed subset.”
2. `thm-dual-ball-weak-star-metrizable-for-separable-predual`: set `weak-star-refines-metric.step` to `2.2` (inputs `F1`, `step 1.1`); keep `topologies-agree.step` as `3.1` with inputs `step 2.1`, `step 2.2`.
3. `thm-krein-milman-closed-convex-hull-form`: set citation `F1.uses` to `1.1`, `4.1`; remove nonexistent `7.1`.
4. `thm-milman-converse-for-compact-generating-sets`: set citation `F4.uses` to `1.1`, `4.1`; remove `3.1`, `7.1`.
5. `ex-weak-star-compactness-of-probability-measures`:
   - retain F1–F4;
   - F5: source `def-locally-compact-space`, Definition quote “Every compact space is locally compact,” use `1.1`;
   - F6: source `def-compact-support-c-c-and-c-zero-on-an-lch-space`, current exact quote, use `1.1`;
   - F7: source `thm-closed-subspace-of-a-compact-space-is-compact`, current exact quote, use `4.1`;
   - derivation `empty-and-function-spaces` inputs become `F5`, `F6`, `given`, and its claim should include the locally compact bridge;
   - derivation `compactness` uses `F1`, `F7`, `step 2.1`, `step 2.2`, `step 3.1`.
6. `ex-extreme-points-of-the-probability-measures-are-dirac-masses`:
   - F1 `def-extreme-point-and-face`, uses `1.4`, `2.1`;
   - F2 `prop-dirac-measure-is-a-probability-measure`, use `1.4`;
   - F3 `prop-restriction-is-a-measure`, use `1.2`;
   - F4 `def-regular-borel-measure-on-an-lch-space`, uses `1.1`, `1.2`, `3.1`;
   - F5 `thm-compact-iff-fip`, use `1.3`;
   - F6 `thm-compact-subset-of-a-hausdorff-space-is-closed`, use `3.1`;
   - F7 `def-locally-compact-space`, Definition quote “Every compact space is locally compact,” use `1.1`;
   - `empty-case` inputs: `F4`, `F7`, `given`, and its claim should include the locally compact bridge;
   - `regular-restrictions`: `F3`, `F4`, `given`;
   - `full-closed-intersection`: `F5`, `given`;
   - `dirac-extreme`: `F1`, `F2`, `given`;
   - `intermediate-mass-split`: `F1`, `step 1.2`;
   - `neighborhood-full`: `step 1.3`;
   - `zero-one-is-dirac`: `F4`, `F6`, `step 2.2`;
   - `characterization`: `step 1.1`, `step 1.3`, `step 1.4`, `step 2.1`, `step 2.2`, `step 3.1`.

## Validation and open obligations

- Page/manifest comparison: A has 17/17 entries and B has 7/7 entries, each in exact manifest order.
- Explicit-path precheck: 20 proof-bearing items checked, 20 pass, 0 fail. The three definitions and one remark are correctly skipped.
- Explicit-path rendercheck: both pages and all 24 items checked; 26 pass with valid YAML, balanced delimiters, successful KaTeX parsing, and no wikilink inside math.
- Repository-wide depcheck: currently 68 hard errors and 270 warnings caused by other incomplete/live work. A path-filtered rerun emitted no finding for either owned page or any of the 24 owned items. Thus there is no pair-local unresolved dependency, link, cycle, or page-item error in that gate.
- Strict shared proof-contract check before lead integration: 24/24 selected entries checked, 57 errors, 0 warnings. All errors are explained by the six exact shared-contract repairs above; four are pre-existing stale mappings (`thm-dual-ball-weak-star-metrizable-for-separable-predual`, `thm-krein-milman-closed-convex-hull-form`, and `thm-milman-converse-for-compact-generating-sets`) and two follow the necessary owned dependency/fact renumbering. The lead must update the read-only contract and rerun strict validation.
- No mathematical proof obligation remains in the owned A/B pages or item files. No potential published defect was found in the exact prerequisite statements/proofs inspected, so there is no published-defect-ledger report from this helper.

Final next action: group lead c should inspect the seven repaired items, apply the manifest/coverage/contract updates above, rerun the explicit gates, and integrate/certify the pair.
