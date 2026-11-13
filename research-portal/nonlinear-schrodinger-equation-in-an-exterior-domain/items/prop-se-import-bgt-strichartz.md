---
id: prop-se-import-bgt-strichartz
kind: proposition
domain: mathematics
title: Exterior Strichartz estimates with precise loss
status: published
deps:
  - def-se-geometry
  - def-se-nontrapping
  - def-se-dirichlet-scale
  - lem-se-positive-spectral-scale-contract
  - lem-se-interpolation-sobolev-model
  - lem-se-exterior-dirichlet-realization
  - math:def-axiom-of-choice
  - math:def-sobolev-space-wkp-and-its-norm
  - math:lem-weak-leibniz-rule-with-a-smooth-factor
  - def-se-foundation-time-function-spaces
  - lem-se-author-ccbb64dfef2c-strip-model-well-defined
  - math:thm-sobolev-spaces-are-banach-spaces
  - math:thm-pe12-bochner-lp-completeness
  - math:lem-complex-norm-realification-is-a-real-norm
dependency_roles:
  def-se-geometry: mathematical-premise
  def-se-nontrapping: mathematical-premise
  def-se-dirichlet-scale: mathematical-premise
  lem-se-positive-spectral-scale-contract: mathematical-premise
  lem-se-interpolation-sobolev-model: mathematical-premise
  lem-se-exterior-dirichlet-realization: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  math:def-sobolev-space-wkp-and-its-norm: mathematical-premise
  math:lem-weak-leibniz-rule-with-a-smooth-factor: mathematical-premise
  def-se-foundation-time-function-spaces: mathematical-premise
  lem-se-author-ccbb64dfef2c-strip-model-well-defined: mathematical-premise
  math:thm-sobolev-spaces-are-banach-spaces: mathematical-premise
  math:thm-pe12-bochner-lp-completeness: mathematical-premise
  math:lem-complex-norm-realification-is-a-real-norm: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: On nonlinear Schrödinger equations in exterior domains
      url: https://www.numdam.org/article/AIHPC_2004__21_3_295_0.pdf
      locator: Section 2.4, Propositions 2.10 and 2.11, equations (2.17), (2.18),
        (2.22), printed pages 304–306, PDF pages 10–12
      statement: For the stated exterior problem and admissible exponents with p>2,
        Proposition 2.10 gives the cutoff-away estimate and Proposition 2.11
        gives the whole-domain estimate with loss 1/p. Their integer endpoints
        s=0 and s=1 are the inputs used here.
      hypotheses: Dimension n at least 2; a nonempty compact smooth non-trapping
        obstacle; Dirichlet Laplacian; finite T>0; smooth compactly supported
        cutoff equal to one near the obstacle; 2/p+n/q=n/2 with p>2.
      reading_limits: "This adjudication read the independent BGT web-extracted PDF
        text: the geometric hypotheses in the introduction (printed pp.295–297),
        time-space and spectral conventions (printed pp.298–299), and Section
        2.4, Propositions 2.10 and 2.11 including their integer-endpoint
        passages (printed pp.304–306, PDF pp.10–12). Only the finite-p integer
        estimates are imported. Their proofs and cited inputs are not
        reconstructed. Fractional target interpolation and p=infinity are local
        deductions. No p=2 endpoint or loss-free whole-domain estimate is
        claimed."
dependency_level: 7
formulation_deps:
  - def-se-geometry
  - def-se-nontrapping
  - def-se-dirichlet-scale
  - lem-se-interpolation-sobolev-model
  - math:def-axiom-of-choice
  - math:def-sobolev-space-wkp-and-its-norm
  - def-se-foundation-time-function-spaces
argument_deps:
  - def-se-geometry
  - def-se-nontrapping
  - def-se-dirichlet-scale
  - lem-se-positive-spectral-scale-contract
  - lem-se-interpolation-sobolev-model
  - lem-se-exterior-dirichlet-realization
  - math:def-axiom-of-choice
  - math:def-sobolev-space-wkp-and-its-norm
  - math:lem-weak-leibniz-rule-with-a-smooth-factor
  - def-se-foundation-time-function-spaces
  - lem-se-author-ccbb64dfef2c-strip-model-well-defined
  - math:thm-sobolev-spaces-are-banach-spaces
  - math:thm-pe12-bochner-lp-completeness
  - math:lem-complex-norm-realification-is-a-real-norm
---

## Statement

Assume the Axiom of Choice. Let $\Omega$ be the connected smooth exterior of a nonempty compact non-trapping obstacle in $\mathbb R^n$, $n\ge2$, as in [[def-se-geometry]] and [[def-se-nontrapping]]. Let $\Delta_D$ and $H_D^r$ be the Dirichlet Laplacian and spectral scale of [[def-se-dirichlet-scale]]. Fix $T>0$, $\chi\in C_c^\infty(\mathbb R^n)$ equal to one near the obstacle, and $2<p\le\infty$, $2\le q<\infty$ with $2/p+n/q=n/2$, taking $1/\infty=0$. For $0<s<1$ write $\mathcal W^{s,q}=[L^q(\Omega),W^{1,q}(\Omega)]_s$ in the complex strip convention of [[lem-se-interpolation-sobolev-model]], and set $\mathcal W^{0,q}=L^q(\Omega)$ and $\mathcal W^{1,q}=W^{1,q}(\Omega)$. The time norms are Bochner norms on $(0,T)$.

For each $0\le s\le1$ there are constants depending on the fixed data such that
$$\|(1-\chi)e^{it\Delta_D}u_0\|_{L^p(0,T;\mathcal W^{s,q})}\le C\|u_0\|_{H_D^s},$$
and
$$\|e^{it\Delta_D}u_0\|_{L^p(0,T;\mathcal W^{s,q})}\le C\|u_0\|_{H_D^{s+1/p}}.$$

## External input

For finite $p>2$ and the hypotheses above, the integer cases $s=0,1$ of the two estimates are imported from reference 0, Propositions 2.10 and 2.11. Their input spaces are respectively $H_D^s$ and $H_D^{s+1/p}$, and their target spaces are respectively $L^p_tL^q_x$ and $L^p_tW^{1,q}_x$ at $s=0$ and $s=1$. This item does not reconstruct the source proofs of those estimates.

## Facts & Assumptions

**Given:** The hypotheses and notation of the Statement.

[F1] [[def-se-geometry]] and [[def-se-nontrapping]] specify the exterior and generalized-ray non-trapping hypothesis required by the independent endpoint input.

[F2] [[def-se-dirichlet-scale]] defines $H_D^r$ and the unitary Dirichlet group; [[lem-se-exterior-dirichlet-realization]] identifies $H_D^1$ with $H^1_0$ and its form norm.

[F3] [[lem-se-positive-spectral-scale-contract]] gives $[H_D^a,H_D^b]_s=H_D^{(1-s)a+sb}$ for $0<s<1$, in the stated complex strip convention.

[F4] [[lem-se-author-ccbb64dfef2c-strip-model-well-defined]] gives the exact operator bound $M_0^{1-s}M_1^s$ for a single complex-linear map between the sums of compatible complex Banach couples with endpoint bounds $M_0,M_1$. Separately, [[lem-se-interpolation-sobolev-model]] gives, for finite $p$ and $1<q<\infty$, the identity $[L^p_tL^q_x,L^p_tW^{1,q}_x]_s=L^p_t\mathcal W^{s,q}_x$. For every $1\le p\le\infty$, the time spaces use strongly measurable almost-everywhere classes and the Bochner norms of [[def-se-foundation-time-function-spaces]], with essential supremum when $p=\infty$.

[F5] Reference 0 supplies the two finite-$p$ integer endpoint estimates described in External input.

[F6] [[math:def-axiom-of-choice]] records the Choice assumption required by the stated spectral and interpolation suppliers.

[F7] [[math:def-sobolev-space-wkp-and-its-norm]] defines $W^{j,q}(\Omega;\mathbb C)$ and its weak-derivative norm for $j=0,1$; in particular $W^{0,q}=L^q$. Its Countable Choice hypothesis follows from the assumed AC.

[F8] Under Countable Choice, [[math:lem-weak-leibniz-rule-with-a-smooth-factor]] gives the weak product formula on any open set for a smooth multiplier, and preserves $W^{k,q}$ when its classical derivatives through order $k$ are bounded. Here apply it on $\Omega$ with $k=1$, $q=2$ and multiplier $1-\chi$; compact support of the multiplier itself is not required.

[F9] [[math:thm-sobolev-spaces-are-banach-spaces]] applies under AC on the open set $\Omega$, with complex scalars, $k=0,1$ and exponent $q$, and gives the complex Banach endpoints $L^q$ and $W^{1,q}$. Their weak-derivative norm in [F7] gives $\|v\|_q\le\|v\|_{W^{1,q}}$.

[F10] [[math:thm-pe12-bochner-lp-completeness]] proves completeness on $(0,T)$ for real Banach values, finite $1\le p<\infty$ and Countable Choice. [[math:lem-complex-norm-realification-is-a-real-norm]] preserves the norm and metric on restricting complex scalars to real scalars. Thus the same completeness theorem applies to the unchanged norm and simple-function classes of a complex Banach value space; complex homogeneity is inherited pointwise and under the integral. AC supplies Countable Choice.

## Proof

**Given:** The hypotheses and notation of the Statement.

[F1] [[def-se-geometry]] and [[def-se-nontrapping]] specify the exterior and generalized-ray non-trapping hypothesis required by the independent endpoint input.

[F2] [[def-se-dirichlet-scale]] defines $H_D^r$ and the unitary Dirichlet group; [[lem-se-exterior-dirichlet-realization]] identifies $H_D^1$ with $H^1_0$ and its form norm.

[F3] [[lem-se-positive-spectral-scale-contract]] gives $[H_D^a,H_D^b]_s=H_D^{(1-s)a+sb}$ for $0<s<1$, in the stated complex strip convention.

[F4] [[lem-se-author-ccbb64dfef2c-strip-model-well-defined]] gives the exact operator bound $M_0^{1-s}M_1^s$ for a single complex-linear map between the sums of compatible complex Banach couples with endpoint bounds $M_0,M_1$. Separately, [[lem-se-interpolation-sobolev-model]] gives, for finite $p$ and $1<q<\infty$, the identity $[L^p_tL^q_x,L^p_tW^{1,q}_x]_s=L^p_t\mathcal W^{s,q}_x$. For every $1\le p\le\infty$, the time spaces use strongly measurable almost-everywhere classes and the Bochner norms of [[def-se-foundation-time-function-spaces]], with essential supremum when $p=\infty$.

[F5] Reference 0 supplies the two finite-$p$ integer endpoint estimates described in External input.

[F6] [[math:def-axiom-of-choice]] records the Choice assumption required by the stated spectral and interpolation suppliers.

[F7] [[math:def-sobolev-space-wkp-and-its-norm]] defines $W^{j,q}(\Omega;\mathbb C)$ and its weak-derivative norm for $j=0,1$; in particular $W^{0,q}=L^q$. Its Countable Choice hypothesis follows from the assumed AC.

[F8] Under Countable Choice, [[math:lem-weak-leibniz-rule-with-a-smooth-factor]] gives the weak product formula on any open set for a smooth multiplier, and preserves $W^{k,q}$ when its classical derivatives through order $k$ are bounded. Here apply it on $\Omega$ with $k=1$, $q=2$ and multiplier $1-\chi$; compact support of the multiplier itself is not required.

[F9] [[math:thm-sobolev-spaces-are-banach-spaces]] applies under AC on the open set $\Omega$, with complex scalars, $k=0,1$ and exponent $q$, and gives the complex Banach endpoints $L^q$ and $W^{1,q}$. Their weak-derivative norm in [F7] gives $\|v\|_q\le\|v\|_{W^{1,q}}$.

[F10] [[math:thm-pe12-bochner-lp-completeness]] proves completeness on $(0,T)$ for real Banach values, finite $1\le p<\infty$ and Countable Choice. [[math:lem-complex-norm-realification-is-a-real-norm]] preserves the norm and metric on restricting complex scalars to real scalars. Thus the same completeness theorem applies to the unchanged norm and simple-function classes of a complex Banach value space; complex homogeneity is inherited pointwise and under the integral. AC supplies Countable Choice.



**Given:** The data and hypotheses in the Statement.

**Goal:** Prove both displayed estimates for every stated $p,q,s$.

1.1 Suppose first $p<\infty$. The admissibility relation and $p>2$ imply $2\le q<\infty$, including in dimension two. Define the consistent linear maps $S_0u(t)=(1-\chi)e^{it\Delta_D}u$ and $S_1u(t)=e^{it\Delta_D}u$. The independent input bounds $S_0$ from $H_D^j$ and $S_1$ from $H_D^{j+1/p}$ to $L^p(0,T;W^{j,q})$ for $j=0,1$, where $W^{0,q}=L^q$. The operators agree on their nested endpoint domains because both are given by the same spectral evolution and multiplication. [F1, F2, F5, F7, given]

1.2 If $p=\infty$, admissibility gives $q=2$ and $1/p=0$. Spectral unitarity bounds $e^{it\Delta_D}$ on both $H_D^0=L^2$ and $H_D^1=H^1_0$, uniformly in $t$. The inclusion $H^1_0\hookrightarrow W^{1,2}$ is continuous by the form norm. Put $a=(1-\chi)|_\Omega$. Smoothness and compact support of $\chi$ imply that $a$ and each classical first derivative $\partial_ja=-\partial_j\chi$ are bounded on $\Omega$. Apply [F8] on this open set to every $v\in W^{1,2}(\Omega;\mathbb C)$: $D_j(av)=aD_jv-(\partial_j\chi)v$ in $L^2(\Omega)$. The bounds $\|av\|_2\le\|a\|_\infty\|v\|_2$ and $\|D_j(av)\|_2\le\|a\|_\infty\|D_jv\|_2+\|\partial_j\chi\|_\infty\|v\|_2$, summed over the finitely many derivatives in [F7], show bounded multiplication on $W^{1,2}$. The value bound also gives bounded multiplication on $L^2$. Thus both spatial maps have uniform bounds from $H_D^j$ to $W^{j,2}$ for $j=0,1$. [F2, F6, F7, F8, given]

2.1 For finite $p$, the source couples $(H_D^0,H_D^1)$ and $(H_D^{1/p},H_D^{1+1/p})$ are compatible complex Hilbert couples in their respective lower endpoints, by the scale inclusions and norms in [F2, F3]. By [F9, F10], the target endpoints $Y_0=L^p(0,T;L^q)$ and $Y_1=L^p(0,T;W^{1,q})$ are complex Banach spaces. The inequality in [F9] integrates to a continuous injective inclusion $Y_1\hookrightarrow Y_0$, so they are a compatible couple in the Hausdorff space $Y_0$. The inclusion respects strongly measurable classes: applying it to their simple approximants proves strong measurability in $L^q$, and vanishing as an $L^q$ class implies vanishing as a $W^{1,q}$ class. Each source sum is its lower endpoint; step 1.1 defines a single complex-linear map on that sum with values in $Y_0=Y_0+Y_1$ and the two required endpoint bounds. The exact operator theorem in [F4] therefore applies to each map. By [F3] the sources interpolate to $H_D^s$ and $H_D^{s+1/p}$, and by [F4] the target interpolates to $L^p(0,T;\mathcal W^{s,q})$. This proves both bounds for $0<s<1$; $s=0,1$ are the imported endpoints. [F2, F3, F4, F5, F6, F7, F9, F10, step 1.1]

2.2 Now let $p=\infty$, so $q=2$, and write $U(t)=e^{it\Delta_D}$. Apply the exact operator theorem in [F4] to the fixed identity inclusion and the fixed multiplier $M_a:v\mapsto(1-\chi)v$, using their $H_D^j\to W^{j,2}$ bounds from step 1.2 at $t=0$, $j=0,1$. The source couple is $(H_D^0,H_D^1)$ in $L^2$; the target couple is $(L^2,W^{1,2})$ in $L^2$. Both are compatible complex Banach couples by [F2, F3, F7, F9], with continuous endpoint inclusions, and each map is defined consistently on the source sum $L^2$. Thus for every $0<s<1$ these fixed maps restrict to bounded maps $B_s^0:H_D^s\to\mathcal W^{s,2}$ and $B_s^a:H_D^s\to\mathcal W^{s,2}$, respectively. The same notation at $s=0,1$ denotes their endpoint restrictions. Unitarity on $H_D^s$ gives $\|B_s^\nu U(t)u\|_{\mathcal W^{s,2}}\le\|B_s^\nu\|\|u\|_{H_D^s}$ for $\nu=0,a$, uniformly in $t$. [F2, F3, F4, F7, F9, step 1.2]

3.1 Strong continuity of the spectral group on $H_D^s$ and boundedness of the fixed maps $B_s^0,B_s^a$ give the required measurable representatives of $t\mapsto B_s^\nu U(t)u_0$, so their essential time suprema obey the uniform bounds in step 2.2. These are the whole-domain and cutoff paths. Since $1/p=0$, both estimates follow for $p=\infty$; together with step 2.1 this completes the proof. [F2, F3, F4, step 2.1, step 2.2] ∎

## Source notes

The finite-time integer estimates are independent external premises. The fractional conclusion uses the explicitly stated complex interpolation model; it does not assert that the source uniquely specified that model. The $p=\infty$ case is derived from spectral unitarity and spatial interpolation, without an infinite-exponent Bochner interpolation identity.
