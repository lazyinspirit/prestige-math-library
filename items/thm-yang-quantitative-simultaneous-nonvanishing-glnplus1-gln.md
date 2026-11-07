---
id: thm-yang-quantitative-simultaneous-nonvanishing-glnplus1-gln
kind: theorem
title: "Yang Quantitative Simultaneous Nonvanishing for GL(n+1) × GL(n)"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 11
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: ai-altered
  proof: not-supplied
deps:
  - lem-gln-last-row-congruence-subgroup-index
  - def-countable-choice
  - def-adjoint-l-function-for-gln
  - def-adelic-gln-automorphic-representation
  - def-analytic-conductor-of-gln-representation
  - def-standard-and-rankin-selberg-l-functions-on-gln
  - def-unitary-cuspidal-generic-gln-representation
  - def-yang-2026-amplified-test-function-data
  - def-yang-microlocalized-archimedean-whittaker-vector
  - lem-yang-simultaneous-family-weighted-lower-bound
  - lem-weighted-average-forces-many-nonzero-products
  - thm-cogdell-global-adjacent-rank-analytic-continuation-and-functional-equation
  - thm-cogdell-global-same-rank-rankin-selberg-analytic-continuation-and-functional-equation
  - thm-jacquet-shalika-rankin-selberg-nonvanishing-at-one-for-distinct-cuspidals
  - thm-cogdell-adjoint-l-value-positive-for-cuspidal-gln
  - thm-cuspidal-automorphic-gln-is-globally-generic
  - thm-yang-2026-amplified-spectral-lower-bound
  - thm-yang-2026-archimedean-microlocal-test-vector-estimates
  - thm-yang-2026-ramified-local-period-estimates
  - thm-yang-2026-regular-orbital-integral-bound
  - prop-yang-simultaneous-nonvanishing-geometric-lower-bound
  - thm-yang-relative-trace-formula-glnplus1-gln
  - thm-yang-t-aspect-subconvexity-glnplus1-gln
sources:
  scraped: []
  references:
    - title: "Liyang Yang, Relative Trace Formula, Subconvexity and Quantitative Nonvanishing of Rankin–Selberg L-Functions for GL(n+1) × GL(n), Theorem C, §1.3, and the proof in §11"
      url: "https://arxiv.org/pdf/2309.07534v2"
    - title: "Liyang Yang, Relative Trace Formula and L-functions for GL(n+1) × GL(n), §§8.3–8.4"
      url: "https://arxiv.org/pdf/2303.02225v1"
    - title: "James W. Cogdell, L-functions and Converse Theorems for GL(n), Lectures 2–4"
      url: "https://people.math.osu.edu/cogdell.1/pcmi-www.pdf"
    - title: "Freydoon Shahidi, On nonvanishing of L-functions, Bulletin of the American Mathematical Society (N.S.) 2 (1980), no. 3, pp. 462–464"
      url: "https://www.math.purdue.edu/~fshahidi/articles/Shahidi%20%5B1980%2C%203pp%5D---On%20nonvanishing%20of%20L-functions.pdf"
---

## Statement

Let $n\geq2$. For $j=1,2$, let $\pi'_j=\bigotimes_{p\leq\infty}\pi'_{j,p}$ be a unitary cuspidal automorphic representation of $\mathrm{GL}_n(\mathbb A_{\mathbb Q})$ with arithmetic conductor $M'_j$. Assume $M'_1M'_2>1$, $\gcd(M'_1,M'_2)=1$, and $\pi'_{1,\infty}\simeq\pi'_{2,\infty}$. Let $p^*$ be a prime not dividing $M'_1M'_2$, and let $T\geq1$ and $M\geq1$ be real and positive integer parameters, respectively, with $\gcd(M,M'_1M'_2p^*)=1$. Fix a unitary Hecke character $\omega:\mathbb Q^\times\backslash\mathbb A_{\mathbb Q}^\times\to S^1$ that is trivial at infinity, a unitary irreducible admissible representation $\pi_\infty$ of $\mathrm{PGL}_{n+1}(\mathbb R)$, and a supercuspidal representation $\pi_{p^*}$ of $\mathrm{GL}_{n+1}(\mathbb Q_{p^*})$ (an irreducible admissible smooth representation that is not a subquotient of parabolic induction from a proper parabolic subgroup) whose central character is $\omega_{p^*}$. Assume the Axiom of Countable Choice.

Write $\lambda_{\pi_\infty,1},\ldots,\lambda_{\pi_\infty,n+1}$ for the Langlands parameters in the archimedean standard factor. Assume that for fixed constants $0<c_\infty<C_\infty$, the uniform parameter growth condition

$$c_\infty T\leq |\lambda_{\pi_\infty,j}|\leq C_\infty T\qquad(1\leq j\leq n+1)$$

holds. Let $U_\infty(\pi_\infty)$ be the fixed-width spectral neighborhood of $\pi_\infty$ selected by the archimedean microlocal test function.

For a prime $p$ and a positive integer $a$, put $e_p(a)=v_p(a)$ and define

$$K_p(a)=\{g\in\mathrm{GL}_{n+1}(\mathbb Z_p):g_{n+1,j}\in p^{e_p(a)}\mathbb Z_p\ (1\leq j\leq n)\},$$

$$I_p(a)=\{g\in\mathrm{GL}_{n+1}(\mathbb Z_p):g_{ij}\in p^{e_p(a)}\mathbb Z_p\ (1\leq j<i\leq n+1)\}.$$

For each finite $p\ne p^*$, put $e_p=v_p(MM'_1)$ if $p\nmid M'_2$ and $e_p=v_p(M'_2)$ otherwise. Let $a_p(\omega)$ be the conductor exponent of $\omega_p$ and assume $a_p(\omega)\leq e_p$ at every such place. For $e_p>0$ define $\kappa_p(k)=\omega_p(k_{n+1,n+1})$ on the indicated subgroup $K_p(MM'_1)$ or $I_p(M'_2)$. At $e_p=0$ put $\kappa_p=1$ on the maximal compact subgroup; the compatibility condition then says $\omega_p$ is unramified. A $\kappa_p$-type vector means a nonzero vector $v$ with $\sigma_p(k)v=\kappa_p(k)v$ for every element of that subgroup.

Let $\mathcal A_0(T,M;\pi_\infty,\pi_{p^*},\pi'_1,\pi'_2)$ be the set of isomorphism classes of unitary cuspidal automorphic representations $\sigma=\bigotimes_{p\leq\infty}\sigma_p$ of $\mathrm{GL}_{n+1}(\mathbb A_{\mathbb Q})$ with central character $\omega$ such that $\sigma_\infty\in U_\infty(\pi_\infty)$, $\sigma_{p^*}\simeq\pi_{p^*}$, $\sigma_p$ has a nonzero $\kappa_p$-type vector for $K_p(MM'_1)$ for every finite $p\nmid p^*M'_2$, and $\sigma_p$ has a nonzero $\kappa_p$-type vector for $I_p(M'_2)$ for every $p\mid M'_2$.

For every $\varepsilon>0$,

$$\#\{\sigma\in\mathcal A_0(T,M;\pi_\infty,\pi_{p^*},\pi'_1,\pi'_2):L(1/2,\sigma\times\pi'_1)L(1/2,\sigma\times\pi'_2)\ne0\}\gg_{\varepsilon,c_\infty,C_\infty,\omega,\pi'_1,\pi'_2,\pi_{p^*}}(TM)^{-\varepsilon}\begin{cases}M^{\frac{n}{3n^2+n-1}}T^{\frac{1}{2(3n^2+n-1)}},&M\leq T^{\frac{n+1}{n^2-n-1}},\\[4pt]M^{\frac{1}{n^2+n+1}}T^{\frac{1}{2(n^2+n+1)}},&M>T^{\frac{n+1}{n^2-n-1}}.\end{cases}$$

## Statement references

[Liyang Yang, *Relative Trace Formula, Subconvexity and Quantitative Nonvanishing of Rankin–Selberg L-Functions for GL(n+1) × GL(n)*, Theorem C and §11](https://arxiv.org/pdf/2309.07534v2)

## Facts & Assumptions

**Given:** The data and hypotheses in the Statement, including Countable Choice. Prove the stated piecewise lower bound for the number of simultaneous nonzero products.

[F1] [[def-standard-and-rankin-selberg-l-functions-on-gln]]: the Rankin–Selberg $L$-function is the Euler product of the local tensor-parameter factors, initially in a half-plane of absolute convergence.

[F2] [[thm-yang-relative-trace-formula-glnplus1-gln]]: for Yang's regularized distributions, the corrected spectral and geometric functions are equal on the corrected parameter region $R^*$, and the corrected spectral side has the generic-spectrum expression stated there. Its current proof still has the expressly unresolved contour-shift and residue input recorded below.

[F3] [[thm-cogdell-global-adjacent-rank-analytic-continuation-and-functional-equation]]: the adjacent-rank global Rankin–Selberg Euler product has meromorphic continuation and the stated functional equation. Its current carrier has no local proof.

[F4] [[thm-cogdell-global-same-rank-rankin-selberg-analytic-continuation-and-functional-equation]]: the same-rank Euler product has meromorphic continuation and the stated functional equation. This statement alone supplies neither the pole criterion nor nonvanishing at $s=1$ needed below, and its proof is not supplied locally.

[F5] [[lem-weighted-average-forces-many-nonzero-products]]: a weighted lower bound and two pointwise hybrid upper bounds imply the stated lower bound for the support of the products.

[F6] [[def-adjoint-l-function-for-gln]]: this item defines the local and global adjoint $L$-function notation; it explicitly does not assert global continuation, pole order, or nonvanishing at $s=1$.

[F7] [[def-adelic-gln-automorphic-representation]]: $\mathbb A_F$ is the restricted product of local fields, and automorphic representations are realized as restricted tensor products of local representations with a central character.

[F8] [[def-unitary-cuspidal-generic-gln-representation]]: unitary means an invariant positive-definite Hermitian structure, cuspidal means vanishing of all proper-parabolic constant terms, and global genericity means a nonzero Whittaker functional.

[F9] [[def-analytic-conductor-of-gln-representation]]: the finite conductor exponent is the least $a\geq0$ with a nonzero $K_1(p^a)$-fixed vector; its finite product is the finite conductor convention used for $M'_j$.

[F10] [[def-yang-microlocalized-archimedean-whittaker-vector]]: the archimedean test data are built from a microlocal Fourier bump with tangent displacement $O(T^{1/2+\varepsilon})$ and normal displacement $O(T^\varepsilon)$; this construction does not itself prove norm or period estimates.

[A1] [[def-countable-choice]]: every sequence of nonempty sets has a choice function. The planned subconvexity supplier declares this axiom in its dependency list; the current carrier needed to check its exact use is not yet present.

[A2] The item `thm-yang-t-aspect-subconvexity-glnplus1-gln` must provide the uniform-parameter, level-dependent bound of Yang's Theorem F (equation (10.4)), including its factor $\langle\phi',\phi'\rangle\sqrt{L(1,\sigma,\mathrm{Ad})}$ and the specialization $M^\dagger=M$, $R=1$. Its current Statement is Yang's variable-$t$ Theorem A, with no level parameter, vector norm, adjoint normalizer, or free amplifier length, and its proof status is escalated; it does not supply this interface.

[A3] The geometric small-cell lower bound requires $0<|L^{(S)}(1,\pi'_1\times\widetilde{\pi'_2})|<\infty$. The conductor assumptions imply $\pi'_1\not\simeq\pi'_2$, but the current same-rank Cogdell item supplies continuation and functional equation only. No local pole-criterion plus line-nonvanishing supplier is present; the proposed supplier is `thm-jacquet-shalika-rankin-selberg-nonvanishing-at-one-for-distinct-cuspidals`.

[A4] The weighted family lower bound in Yang's Lemma 11.2 and the geometric lower bound in Proposition 11.4 must establish, for this exact family and test, $\sum_{\sigma\in\mathcal A_0}|L(1/2,\sigma\times\pi'_1)L(1/2,\sigma\times\pi'_2)|/L(1,\sigma,\mathrm{Ad})\gg_\eta T^{n(n+1)/2-\eta}M^{n-\eta}$ after normalizing the common archimedean vector to norm $1$. The current Batch 64 item `thm-yang-2026-amplified-spectral-lower-bound` states a different amplified spectral estimate (Yang's Theorem 5.1), not Lemma 11.2; `thm-yang-2026-regular-orbital-integral-bound` has no current carrier. The current archimedean and ramified local items state estimates/identities but mark their proofs not supplied. Proposed missing suppliers are `lem-yang-simultaneous-family-weighted-lower-bound` and `prop-yang-simultaneous-nonvanishing-geometric-lower-bound`, placed on the owner-designated GL(n+1) × GL(n) relative-trace-formula and level-moments page or another earlier owner-designated page.

[A5] To apply the weighted lemma, each $w_\sigma=L(1,\sigma,\mathrm{Ad})$ must be finite and strictly positive. The adjoint definition [F6] does not prove this, and the current same-rank continuation carrier supplies no pole-residue or positivity result. Proposed missing supplier: `thm-cogdell-adjoint-l-value-positive-for-cuspidal-gln`, placed on the GL(n) Rankin–Selberg analytic-foundation page or another owner-designated earlier page.

[A6] Yang's source proof uses global Whittaker vectors for the cuspidal inputs $\pi'_j$. The current genericity definition [F8] defines that condition, and the current localization theorem assumes it; no current local item proves that every cuspidal automorphic representation of $\mathrm{GL}_n$ is globally generic. Proposed missing supplier: `thm-cuspidal-automorphic-gln-is-globally-generic`, placed on the GL(n) automorphic-foundations page or another owner-designated earlier page.

[A7] The batch49 trace interface is stated for test functions finite under the left and right archimedean maximal compact actions. The smooth microlocal data F10 are not asserted to satisfy that condition. Applying F2 here requires a locally proved approximation theorem with uniform convergence of every regularized spectral, geometric and residue term, in the exact central-character normalization. No such extension is supplied.

[F11] The last-entry nebentypus is a character at positive congruence exponent when the central conductor is no larger than that exponent. [[lem-gln-last-row-congruence-subgroup-index]] For $I_p(M'_2)$, all entries below the diagonal vanish modulo $p^{e_p}$; the diagonal entries are units and the last diagonal entry of a product is the product modulo $p^{e_p}$. The same character argument therefore applies to this subgroup. On scalar units it equals $\omega_p$, as required by the central character.

[A8] The Statement now spells the compatible isotypic family. Its analytic local-weight and exact source-matching chain remains required in A4; correcting the family does not prove that lower bound. Yang v2 printed63 Definition11.1 itself says literal fixed vectors while printed5 permits general finite $\omega$. Literal fixed vectors under these subgroups require triviality on scalar units, which fails for ramified $\omega_p$. The discrepancy is therefore a contradiction for those original data, not merely an omitted analytic proof. The original full source wording and preimages are preserved in the research record; no claimed published equivalence with the corrected family is asserted.

## Proof

1.1 The conductor convention [F9] and the assumptions $\gcd(M'_1,M'_2)=1$, $M'_1M'_2>1$ imply that $\pi'_1\simeq\pi'_2$ is impossible: isomorphic representations have equal conductors, so coprimality would force both conductors to be $1$. Since their archimedean components are isomorphic unitary representations, identify them by a unitary intertwiner and choose the common nonzero Whittaker test vector supplied by the local test-data interface [F10, A4]. Its finite positive $L^2$ norm can be rescaled to $\|W'_{\infty}\|_2^2=1$. The conditions $\gcd(M,M'_1M'_2p^*)=1$ put the variable level outside the fixed bad conductors, so the uniform-bound specialization is $M^\dagger=M$ and $R=1$, subject to its exact conductor-to-level hypothesis in [A2] and [A4]. [given, F7, F9, F10, F11, A2, A4, A8, algebra]

2.1 Apply [F2] at $s=0$ to the test function from §11.1. The cuspidal inputs require the global genericity supplied by [A6], as used in the Whittaker definitions [F8]. The microlocal test data are those in [F10]. If [A3] and [A4] hold, Yang's Lemma 11.2 lower-bounds the spectral contribution and Proposition 11.4 lower-bounds the small-cell geometric term; the dual and noncuspidal terms vanish for this test. Using the normalization in step 1.1 gives $\sum_{\sigma\in\mathcal A_0}|L(1/2,\sigma\times\pi'_1)L(1/2,\sigma\times\pi'_2)|/L(1,\sigma,\mathrm{Ad})\gg_\eta T^{n(n+1)/2-\eta}M^{n-\eta}$. Finiteness and nonvanishing of the small-cell factor require [A3], while the exact family and test estimates are [A4]. [F2, F3, F4, F8, F10, A3, A4, A6, step 1.1]

2.2 For each $\sigma\in\mathcal A_0$ and $j=1,2$, apply the uniform-parameter bound required in [A2] with $\pi=\sigma$ and $\pi'=\pi'_j$. Theorem F's $\langle\phi'_j,\phi'_j\rangle$ factor is comparable to $\|W'_{\infty}\|_2^2=1$ by the local norm comparison required in [A4]. Thus $|L(1/2,\sigma\times\pi'_j)|/\sqrt{L(1,\sigma,\mathrm{Ad})}\ll_\eta T^{n(n+1)/4+\eta}M^{n/2+\eta}\mathcal L^{-1}$ for $j=1,2$, where $\mathcal L=M^{n/[2(3n^2+n-1)]}T^{1/[4(3n^2+n-1)]}$ if $M^{n^2-n-1}\leq T^{n+1}$ and $\mathcal L=M^{1/[2(n^2+n+1)]}T^{1/[4(n^2+n+1)]}$ otherwise. This use of [A2] is conditional on its missing uniform-parameter statement and proof. [F1, A1, A2, A4, step 1.1]

3.1 By [A5], the weights $w_\sigma=L(1,\sigma,\mathrm{Ad})$ are positive and finite under the convention of [F6]. Apply [F5] with these weights, the two central values, lower-sum scale $H=1$, and pointwise scales $A=B=1$. Step 2.1 supplies the weighted lower sum; step 2.2 supplies the two pointwise bounds. Taking the source exponents sufficiently small relative to $\varepsilon$ and using $T,M\geq1$ gives $\#\{\sigma\in\mathcal A_0:L(1/2,\sigma\times\pi'_1)L(1/2,\sigma\times\pi'_2)\ne0\}\gg_\varepsilon (TM)^{-\varepsilon}\mathcal L^2$. This reduction itself uses no choice principle. [F5, F6, A2, A4, A5, step 2.1, step 2.2]

4.1 The first condition defining $\mathcal L$ is equivalent to $M\leq T^{(n+1)/(n^2-n-1)}$, since $D:=n^2-n-1>0$ for $n\geq2$. Squaring the first branch gives $M^{n/(3n^2+n-1)}T^{1/[2(3n^2+n-1)]}$, while squaring the second gives $M^{1/(n^2+n+1)}T^{1/[2(n^2+n+1)]}$. At $M=T^{(n+1)/D}$, the first branch has $T$-exponent $n(n+1)/(D(3n^2+n-1))+1/[2(3n^2+n-1)]=[2n(n+1)+D]/[2D(3n^2+n-1)]=1/(2D)$, and the second has exponent $(n+1)/[D(n^2+n+1)]+1/[2(n^2+n+1)]=[2(n+1)+D]/[2D(n^2+n+1)]=1/(2D)$. The branches agree at the boundary, which belongs to the first case. Substitution into step 3.1 gives the stated conclusion. [given, step 3.1, algebra] ∎

## Proof references

[Liyang Yang, *Relative Trace Formula, Subconvexity and Quantitative Nonvanishing of Rankin–Selberg L-Functions for GL(n+1) × GL(n)*, §10.4 and §§11.1–11.3](https://arxiv.org/pdf/2309.07534v2)

[Freydoon Shahidi, *On nonvanishing of L-functions*, pp. 462–464](https://www.math.purdue.edu/~fshahidi/articles/Shahidi%20%5B1980%2C%203pp%5D---On%20nonvanishing%20of%20L-functions.pdf)

## Current proof boundary

The four numbered phases give the source's reduction conditional on [A2]–[A8]; those inputs are not locally supplied, so this theorem is escalated. The current relative-trace item also has an unresolved contour-shift/residue input, and its transitive spectral-expansion and regularization suppliers are draft items with `proof: not-supplied`. The current t-aspect item states a different variable-$t$ estimate; no uniform-parameter Theorem F excerpt or proof completion is claimed for it. No statement excerpt or proof completion is claimed for any missing supplier.


## Source discrepancy and remaining arbitrary-character scope

At a finite place outside $p^*M M'_1M'_2$, the original source family demands a maximal-compact-fixed vector. That compact subgroup contains every scalar unit $zI_{n+1}$, on which a representation with central character $\omega_p$ acts by $\omega_p(z)$. Choosing a unit with $\omega_p(z)\ne1$ forces every such fixed vector to be zero. Thus a ramified character at such a place makes the literal source family empty, contrary to its asserted positive quantitative lower bound. The same scalar obstruction applies to literal $K_p$- or $I_p$-fixed vectors at a ramified level place.

The corrected family uses the explicitly compatible nebentypus types above and retains every quantitative exponent, both parameter regimes and the boundary. Its full analytic proof, local period weights, source matching and smooth-test extension remain held. Retaining arbitrary finite $\omega$ without these conductor/level restrictions would require a separately proved theorem with additional fixed $\omega$-dependent local levels or other matching test data. That richer extension is a separate held research obligation; neither a citation nor this defining correction establishes it.
