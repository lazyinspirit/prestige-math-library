---
id: lem-se-author-ccbb64dfef2c-sobolev-quotient-bochner-retraction
kind: lemma
domain: mathematics
title: Restriction quotient and Bochner interpolation for the exterior extension
status: draft
deps:
  - math:def-axiom-of-choice
  - math:thm-sobolev-spaces-are-banach-spaces
  - lem-se-author-ccbb64dfef2c-single-exterior-extension
  - lem-se-author-ccbb64dfef2c-strip-model-well-defined
  - math:thm-quotient-of-banach-by-closed-subspace-is-banach
  - math:def-strongly-measurable-banach-valued-function
  - math:thm-pe12-bochner-lp-completeness
  - math:lem-complex-norm-realification-is-a-real-norm
dependency_roles:
  math:def-axiom-of-choice: mathematical-premise
  math:thm-sobolev-spaces-are-banach-spaces: mathematical-premise
  lem-se-author-ccbb64dfef2c-single-exterior-extension: mathematical-premise
  lem-se-author-ccbb64dfef2c-strip-model-well-defined: mathematical-premise
  math:thm-quotient-of-banach-by-closed-subspace-is-banach: mathematical-premise
  math:def-strongly-measurable-banach-valued-function: mathematical-premise
  math:thm-pe12-bochner-lp-completeness: mathematical-premise
  math:lem-complex-norm-realification-is-a-real-norm: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: "J. C. Bellido and G. García-Sáez, Bessel Potential Spaces and Complex
        Interpolation: Continuous embeddings, arXiv:2503.04310v6"
      url: https://arxiv.org/pdf/2503.04310v6
      locator: "Compatible couples and sums: PDF pp.4–6; §2.2, PDF pp.9–10 (strip
        definition, Banach property and exact operator bound); Example 2.7(i),
        PDF p.11 (Bochner interpolation); Definition 3.1 and Remark 3.2, PDF
        pp.15–16 (tempered-distribution multiplier and well-definedness);
        Definitions 3.3, 3.6 and Theorem 3.7, PDF pp.16–17 (Bessel space and
        identity)."
      statement: "For compatible complex Banach couples the strip class F with the
        maximum boundary norm is Banach, evaluation at an interior strip point
        is continuous into the sum, and complex interpolation is exact of
        exponent theta. Definition 3.1 and Remark 3.2 define the Bessel
        multiplier as a well-defined linear operator on tempered distributions.
        For 1<q<infinity and 0<s<1, [Lq(Rn),W1q(Rn)]_s is the Bessel-potential
        space {f in S prime: F inverse((1+4 pi squared |xi| squared)^(s/2) Ff)
        in Lq}, with equivalent norms. Example 2.7(i) states
        [Lp0(E0),Lp1(E1)]_theta=Lp(theta)([E0,E1]_theta) for 1<=p0,p1<infinity."
      hypotheses: Complex Banach spaces continuously embedded into a common Hausdorff
        topological vector space; common bounded endpoint operator on their sum;
        0<theta<1. The whole-space Sobolev assertion requires 1<q<infinity.
        Bochner identity uses the same Lebesgue measure space at both endpoints
        and finite 1<=p0,p1<infinity; here use (0,T) and p0=p1=p.
      reading_limits: Checked the cited compatible-couple and strip-theorem passages
        in v6 PDF pp.4–6,9–11, and the definitions and Theorem 3.7 statement on
        pp.15–17, including Remark 3.2 on pp.15–16. Example 2.7(i), p.11, is the
        Bochner contract. Theorem 3.7's proof, Mihlin's theorem and the original
        interpolation books were not reconstructed. No exterior extension
        theorem is imported; the exterior operator is supplied locally.
dependency_level: 3
---

## Statement

Assume AC, $1<q<\infty$, $0<s<1$, $0<T<\infty$ and $1\le p<\infty$. Let $X_0=L^q(\Omega)$ and $X_1=W^{1,q}(\Omega)$ for a smooth exterior domain, and let $E$ be the single extension in [[lem-se-author-ccbb64dfef2c-single-exterior-extension]]. Put $X_s=[X_0,X_1]_s$ and
$$H^{s,q}(\mathbb R^n)=\{f\in\mathcal S':\mathcal F^{-1}((1+4\pi^2|\xi|^2)^{s/2}\widehat f)\in L^q\}.$$
Then $X_s$ equals the restriction quotient $P H^{s,q}(\mathbb R^n)$ with equivalent norms. Its quotient kernel is closed and the quotient is Banach. Moreover
$$[L^p(0,T;X_0),L^p(0,T;X_1)]_s=L^p(0,T;X_s)$$
with the Bochner convention of strongly measurable almost-everywhere classes. The pointwise maps $E$ and $P$ are well-defined bounded maps on the corresponding Bochner endpoint and interpolated spaces, and $PE=I$ there.

## External input

Reference 0, Definition 3.1 (PDF p.15), defines $\Lambda^z=\mathcal F^{-1}(1+4\pi^2|\xi|^2)^{-z/2}\mathcal F$. Remark 3.2 (PDF pp.15–16) states that this is a well-defined linear map on tempered distributions: the multiplier is smooth with polynomially bounded derivatives, and the Fourier transform and its inverse act on $\mathcal S\prime$. Definition 3.3 and Theorem 3.7 (PDF pp.16–17) give $H^{s,q}(\mathbb R^n)=\{f:\Lambda^{-s}f\in L^q\}=[L^q,W^{1,q}]_s$ with equivalent norms when $1<q<\infty$, $0<s<1$. Example 2.7(i), PDF p.11, gives $[L^{p_0}(X_0),L^{p_1}(X_1)]_s=L^p([X_0,X_1]_s)$ for finite endpoint exponents with $1/p=(1-s)/p_0+s/p_1$. Only the equal exponent case $p_0=p_1=p$ is used below.

## Facts & Assumptions

**Given:** The hypotheses of the Statement and the independently cited external contracts.

[F1] Assume the Axiom of Choice [[math:def-axiom-of-choice]]; in particular its countable and dependent instances are available.

[F2] [[math:thm-sobolev-spaces-are-banach-spaces]] gives the complex Banach endpoints and weak-derivative norms on any open set. Since $W^{1,q}\hookrightarrow L^q$ continuously, both form a compatible couple in $L^q$.

[F3] [[lem-se-author-ccbb64dfef2c-single-exterior-extension]] gives one $E$ on the endpoint sum with $PE=I$ and bounds at both endpoints. Restriction $P$ is contractive on both weak-derivative endpoints.

[F4] [[lem-se-author-ccbb64dfef2c-strip-model-well-defined]] interpolates these same maps, and [[math:thm-quotient-of-banach-by-closed-subspace-is-banach]] makes a quotient by a closed kernel Banach.

[F5] Reference 0, Definition 3.1 (PDF p.15), defines $\Lambda^z=\mathcal F^{-1}(1+4\pi^2|\xi|^2)^{-z/2}\mathcal F$. Remark 3.2 (PDF pp.15–16) states that this is a well-defined linear map on tempered distributions: the multiplier is smooth with polynomially bounded derivatives, and the Fourier transform and its inverse act on $\mathcal S\prime$. Definition 3.3 and Theorem 3.7 (PDF pp.16–17) give $H^{s,q}(\mathbb R^n)=\{f:\Lambda^{-s}f\in L^q\}=[L^q,W^{1,q}]_s$ with equivalent norms when $1<q<\infty$, $0<s<1$. Example 2.7(i), PDF p.11, gives $[L^{p_0}(X_0),L^{p_1}(X_1)]_s=L^p([X_0,X_1]_s)$ for finite endpoint exponents with $1/p=(1-s)/p_0+s/p_1$. Only the equal exponent case $p_0=p_1=p$ is used below.

[F6] [[math:def-strongly-measurable-banach-valued-function]] defines strong measurability for real or complex Banach values by almost-everywhere norm limits of measurable simple functions, unchanged by modifying a representative on a null set.

[F7] [[math:thm-pe12-bochner-lp-completeness]] defines the Bochner $L^p$ norm on strongly measurable almost-everywhere classes and proves completeness on $(0,T)$ for real Banach values, $0<T<\infty$, $1\le p<\infty$, under Countable Choice. [[math:lem-complex-norm-realification-is-a-real-norm]] preserves the norm and metric upon forgetting complex scalars; thus the realification of a complex Banach space is real Banach. AC supplies the Countable Choice used by this completeness theorem.

## Proof

**Given:** The hypotheses and data in the Statement.

**Goal:** Prove the conclusions in the statement under its stated hypotheses.

1.1 Let $Y_j$ be the whole-space endpoints $L^q(\mathbb R^n),W^{1,q}(\mathbb R^n)$. Apply the strip operator theorem to $P:Y_j\to X_j$ and the same $E:X_j\to Y_j$. The whole-space Bessel input identifies $Y_s=[Y_0,Y_1]_s$ with $H^{s,q}$, so $P:Y_s\to X_s$ and $E:X_s\to Y_s$ are bounded, $PE=I$, and $P Y_s=X_s$. This proves the set equality with restriction classes rather than choosing an independent fractional extension. [F2, F3, F4, F5, given]

1.2 For a bounded linear spatial map $A:Z\to Z\prime$ between the Banach spaces in question and a strongly measurable $f$, F6 supplies measurable simple approximants converging almost everywhere in norm. Their images under $A$ are measurable simple functions converging to $Af$. Thus $Af$ is strongly measurable, independent of null-set representatives, and $\|Af\|_{L^p(Z\prime)}\le\|A\|\|f\|_{L^p(Z)}$. This applies to the common endpoint maps $E,P$ and to the spatial inclusions $X_1\hookrightarrow X_0$, $Y_1\hookrightarrow Y_0$. [F2, F3, F6, algebra]

1.3 Apply F7 to the realification of each $X_j,Y_j$. Its simple functions, null-set classes, norm and metric are unchanged by realification, so its strong measurability and Bochner $L^p$ space are the same sets with the same norm as for complex values. The real completeness theorem therefore proves metric completeness of the complex Bochner spaces. Complex scalar multiplication on classes obeys $\|\lambda f\|_{L^p}=|\lambda|\|f\|_{L^p}$, directly from the spatial norm and integral, so these are complex Banach spaces. AC supplies the theorem's Countable Choice hypothesis. [F1, F2, F6, F7, algebra]

2.1 In the interpolation norm let $C_P,C_E$ be these bounds, including the Bessel norm equivalences. If $Pf=u$, then $\|u\|_{X_s}\le C_P\|f\|_{H^{s,q}}$. Conversely $E u$ extends $u$ and $\|Eu\|_{H^{s,q}}\le C_E\|u\|_{X_s}$. Taking the infimum over extensions gives $C_P^{-1}\|u\|_{X_s}\le\|u\|_{\mathrm{quot}}\le C_E\|u\|_{X_s}$. Since $X_s$ continuously injects into $X_0=L^q(\Omega)$, $P:H^{s,q}\to L^q(\Omega)$ is continuous. Its kernel is closed. The quotient theorem makes the quotient norm definite and complete, proving its well-definedness. [F2, F4, F5, step 1.1, algebra]

3.1 The spatial inequalities $\|u\|_{X_0}\le\|u\|_{X_1}$ and $\|v\|_{Y_0}\le\|v\|_{Y_1}$ integrate to continuous injective embeddings $L^p(0,T;X_1)\hookrightarrow L^p(0,T;X_0)$ and $L^p(0,T;Y_1)\hookrightarrow L^p(0,T;Y_0)$. Injectivity follows because zero in the larger spatial space is zero in the smaller one at each time outside a null set. Each pair is consequently a compatible complex Banach couple in its zeroth endpoint, a Hausdorff normed space. The time-valued $E,P$ are single complex-linear maps on these endpoint sums, with the endpoint bounds from step 1.2 and $PE=I$ inherited almost everywhere from the spatial identity. The strip theorem therefore applies. Example 2.7(i), with the same finite exponent $p$ at both endpoints on $(0,T)$, identifies the two interpolated time spaces with $L^p(0,T;X_s)$ and $L^p(0,T;Y_s)$. Together with step 1.1 this gives the displayed Bochner identity and the claimed bounded retraction maps, including $PE=I$, on the interpolated time spaces. [F2, F3, F4, F5, step 1.1, step 1.2, step 1.3, algebra] ∎

## Source notes

All Bochner assertions use Example2.7(i), PDF p.11, not the later occurrence in a different proof on p.23. There is no identification with Slobodeckij spaces for q unequal to2 and no p=∞ time assertion.
