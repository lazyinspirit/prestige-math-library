---
title: Restriction-quotient interpolation from a common endpoint retraction
status: draft
research_item: lem-se-author-891dd21c27d6-quotient-interpolation-retraction
dependency_level: 7
---

## Prerequisites

- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [lem-se-author-891dd21c27d6-whole-space-er-interpolation](item-lem-se-author-891dd21c27d6-whole-space-er-interpolation)
- [lem-se-author-ccbb64dfef2c-strip-model-well-defined](item-lem-se-author-ccbb64dfef2c-strip-model-well-defined)
- [math:thm-sobolev-spaces-are-banach-spaces](https://alphabetamath.cc/item/thm-sobolev-spaces-are-banach-spaces)
- [math:thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces](https://alphabetamath.cc/item/thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces)
- [lem-se-positive-spectral-scale-contract](item-lem-se-positive-spectral-scale-contract)
- [math:ex-unbounded-multiplication-operator-and-its-domain](https://alphabetamath.cc/item/ex-unbounded-multiplication-operator-and-its-domain)
- [math:thm-plancherel](https://alphabetamath.cc/item/thm-plancherel)
- [math:thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces](https://alphabetamath.cc/item/thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces)
- [math:thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms](https://alphabetamath.cc/item/thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms)
- [math:lem-bounded-restriction-and-cutoff-localisation-in-sobolev-spaces](https://alphabetamath.cc/item/lem-bounded-restriction-and-cutoff-localisation-in-sobolev-spaces)


## Statement

Assume AC and let $D,E$ satisfy [lem-se-author-891dd21c27d6-whole-space-er-interpolation](item-lem-se-author-891dd21c27d6-whole-space-er-interpolation). Then $W^{2,2}(D)=H^2(D)$, the restriction-quotient space, with equivalent norms, and for $0<s<2$,
$$[L^2(D),H^2(D)]_{s/2}=H^s(D)$$
canonically with equivalent norms. Restriction $r_D$ and this one $E$ are bounded endpoint and interpolated maps and satisfy $r_DE=I$ throughout. The same assertion holds if the second domain endpoint is equipped with its equivalent weak $W^{2,2}$ norm. Both conventions include $s=0,2$ by the specified endpoints, without adding boundary conditions.

## Facts & Assumptions

**Given:** The hypotheses and conventions of the Statement.

[F1] Assume the Axiom of Choice [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice); in particular its countable and dependent instances are available.

[F2] [lem-se-author-891dd21c27d6-whole-space-er-interpolation](item-lem-se-author-891dd21c27d6-whole-space-er-interpolation) supplies the common endpoint extension hypotheses, the bounded restriction-quotient extension, its independence of representatives and quotient completeness.

[F3] [lem-se-author-ccbb64dfef2c-strip-model-well-defined](item-lem-se-author-ccbb64dfef2c-strip-model-well-defined) defines the decaying compatible-couple strip class, proves its Banach norm and the action of a common bounded endpoint operator. Only its already-authored strip/retraction interface is used; no new external source is imported here.

[F4] [math:thm-sobolev-spaces-are-banach-spaces](https://alphabetamath.cc/item/thm-sobolev-spaces-are-banach-spaces) supplies the complex weak endpoint Banach spaces on $D$, and [math:thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces](https://alphabetamath.cc/item/thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces) identifies the whole-space $H^2$ endpoint with weak derivatives, retaining equivalence of norms.

[F5] [lem-se-positive-spectral-scale-contract](item-lem-se-positive-spectral-scale-contract) gives isometric complex interpolation of the scales of a positive self-adjoint operator on a nonzero complex Hilbert space, under AC and with the same decaying strip convention as [F3].

[F6] [math:ex-unbounded-multiplication-operator-and-its-domain](https://alphabetamath.cc/item/ex-unbounded-multiplication-operator-and-its-domain) gives self-adjointness and the exact multiplier calculus for a real measurable multiplier on a sigma-finite measure space. [math:thm-plancherel](https://alphabetamath.cc/item/thm-plancherel) gives the surjective complex-linear Fourier isometry on complex Euclidean $L^2$ under Countable Choice.

[F7] [math:thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces](https://alphabetamath.cc/item/thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces) identifies the real-order Bessel-potential space with weighted Fourier distributions and its exact bracket norm. [math:thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms](https://alphabetamath.cc/item/thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms) identifies the distributional Fourier transform of an $L^2$ class with its Plancherel transform, in the same negative-sign $2\pi$ normalization. Their Countable Choice hypotheses follow from AC.

[F8] [math:lem-bounded-restriction-and-cutoff-localisation-in-sobolev-spaces](https://alphabetamath.cc/item/lem-bounded-restriction-and-cutoff-localisation-in-sobolev-spaces) gives contractive weak Sobolev restriction under AC. Apply it with $\Omega=\mathbb R^n$, $U=D$, $k=2$, $p=2$ and $\mathbb K=\mathbb C$: $r_D:W^{2,2}(\mathbb R^n;\mathbb C)\to W^{2,2}(D;\mathbb C)$ is a contraction, including $D=\varnothing$. The open-set and scalar hypotheses are those of [F2], and AC is [F1].

## Proof

**Goal:** Establish every assertion of the Statement under the stated hypotheses.

**Given:** The hypotheses and data in the Statement.

1.1 For a whole-space $H^2$ extension $F$ of $u$, [F4] identifies $F$ with its complex weak $W^{2,2}(\mathbb R^n)$ class. The contraction in [F8] then gives $\|u\|_{W^{2,2}(D)}\le\|F\|_{W^{2,2}(\mathbb R^n)}\le C\|F\|_{H^2}$. Conversely the assumed endpoint extension sends every weak $u\in W^{2,2}(D)$ to $Eu\in H^2(\mathbb R^n)$ with norm at most $C\|u\|_{W^{2,2}(D)}$. Taking infima proves $W^{2,2}(D)=H^2(D)$ and the norm equivalence. The order-zero quotient is exactly $L^2(D)$ by zero extension. Both domain endpoints inject continuously into $L^2(D)$, so form a compatible Banach couple. [F1, F2, F4, F8, given]

1.2 On the nonzero complex Hilbert space $K=L^2(\mathbb R^n_\xi)$, let $M=M_{1+|\xi|^2}$. Lebesgue measure is sigma-finite and this real multiplier is finite and at least one, so [F6] gives a self-adjoint $M\ge I$ with $D(M^{t/2})=\{g\in K:\langle\xi\rangle^t g\in K\}$ and norm $\|\langle\xi\rangle^t g\|_2$ for $t\ge0$. The Fourier identifications in [F6] and [F7] make $\mathcal F_2$ an onto isometry from $H^t(\mathbb R^n)$ to this domain for $0\le t\le2$, using actual $L^2$ representatives at these nonnegative orders. At $t=0,2$ these Fourier maps and their inverse are single consistent maps on the endpoint sums. Thus [F3] transports them to inverse contractions on the interpolation spaces. Apply [F5] to $M$ with scale indices $0,2$: its interpolation space is $D(M^\theta)$ with exactly the weighted norm of order $2\theta$. Transporting back by the same Fourier maps yields $[L^2(\mathbb R^n),H^2(\mathbb R^n)]_\theta=H^{2\theta}(\mathbb R^n)$ isometrically in the bracket norms for $0<\theta<1$. This is an application of the spectral supplier's stated interpolation contract, rather than an extra conclusion attributed to [F2]. [F1, F3, F5, F6, F7, given]

2.1 Put $X_\theta=[L^2(D),H^2(D)]_\theta$ and $Y_\theta=[L^2(\mathbb R^n),H^2(\mathbb R^n)]_\theta=H^{2\theta}(\mathbb R^n)$. The whole-space identity is supplied by step 1.2. At the two endpoints $r_D$ and $E$ are bounded common maps and $r_DE=I$. Applying them to a strip function preserves bounded sum-continuity, norm-holomorphy, endpoint continuity and decay by boundedness and linearity; hence the strip-map theorem gives bounded $r_D:Y_\theta\to X_\theta$ and $E:X_\theta\to Y_\theta$ with the same identity. In particular $X_\theta=r_DY_\theta$ as sets. This conclusion uses actual common maps, not unrelated endpoint extensions. [F2, F3, step 1.1, step 1.2]

3.1 If $u=r_DF$ with $F\in Y_\theta$, the interpolated restriction bound gives $\|u\|_{X_\theta}\le C\|F\|_{H^{2\theta}}$, so $\|u\|_{X_\theta}\le C\|u\|_{H^{2\theta}(D)}$ after infimizing. In the other direction, $Eu$ is an extension with $\|Eu\|_{H^{2\theta}}\le C\|u\|_{X_\theta}$; therefore $\|u\|_{H^{2\theta}(D)}\le C\|u\|_{X_\theta}$. This proves equality with equivalent norms and the retraction at every intermediate order. Changing the second endpoint to its equivalent weak norm changes the strip norm only by bounded identity maps in both directions, so gives the same space with equivalent norms. At $s=0,2$ these are the specified endpoint statements. No zero trace is present in either endpoint or quotient construction. [F2, F3, F4, step 2.1, algebra] ∎
