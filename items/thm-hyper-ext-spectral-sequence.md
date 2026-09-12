---
id: "thm-hyper-ext-spectral-sequence"
kind: "theorem"
title: "Hyper-Ext spectral sequence"
deps: ["def-derived-hom-in-the-bounded-setting", "prop-cohomology-of-derived-hom-is-ext", "lem-finite-diagonal-cohomological-double-complex-spectral-sequences", "thm-second-hypercohomology-spectral-sequence", "lem-a-cartan-eilenberg-resolution-totalizes-to-an-injective-resolution-in-the-required-derived-sense", "thm-injective-comparison-map-exists", "thm-injective-comparison-maps-are-unique-up-to-cochain-homotopy", "def-injective-object", "def-dependent-choice"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: "Weibel, Section 5.7"
      url: "https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf"
    - title: "Stacks Project, Tag 07AA (bounded-above first-variable Ext spectral sequence)"
      url: "https://stacks.math.columbia.edu/download/sites-cohomology.pdf"
    - title: "Stacks Project, Tag 0AVG (bounded-below second-variable Ext spectral sequence)"
      url: "https://stacks.math.columbia.edu/download/more-algebra.pdf"
status: published
origin: "pipeline"
pipeline_run: "phase-2-next-17"
proof_strategy: "direct"
---

## Statement

For a bounded-above cochain complex $K$ of left $R$-modules and a module $M$, a supplied injective resolution of $M$ gives
$$E_2^{p,q}=\operatorname{Ext}_R^p(H^{-q}K,M)\Longrightarrow\operatorname{Ext}_R^{p+q}(K,M).$$
For a module $M$ and bounded-below cochain $K$, supplied injective Cartan–Eilenberg data for $K$ give
$$E_2^{p,q}=\operatorname{Ext}_R^p(M,H^qK)\Longrightarrow\operatorname{Ext}_R^{p+q}(M,K).$$
Both are strongly convergent, with $d_r$ of degree $(r,1-r)$ and finite decreasing resolution-degree filtrations. The first has $p\ge0,q\ge-b$ when $K^i=0$ for $i>b$; the second has $p\ge0,q\ge a$ when $K^i=0$ for $i<a$. Translating these bounds gives first quadrants without changing original total degrees. Naturality and resolution independence use DC or supplied comparison and homotopy data, including the total K-injectivity data where required. Ext of complexes means cohomology of derived Hom.

## Facts & Assumptions

**Given:** The bounded complexes and supplied replacements just specified.

[F1] Bounded mixed derived Hom uses an injective target model, and its cohomology is derived-category Ext ([[def-derived-hom-in-the-bounded-setting]], [[prop-cohomology-of-derived-hom-is-ext]]).

[F2] Finite-diagonal cochain double complexes have the horizontal-first sequence and finite image filtration ([[lem-finite-diagonal-cohomological-double-complex-spectral-sequences]]).

[F3] The second hypercohomology sequence computes derived functors of cohomology; its total is an injective derived model with the stated choice/data qualifications ([[thm-second-hypercohomology-spectral-sequence]], [[lem-a-cartan-eilenberg-resolution-totalizes-to-an-injective-resolution-in-the-required-derived-sense]]).

[F4] Injectivity extends a map from a submodule ([[def-injective-object]]).

[F5] Supplied injective resolutions have comparison maps unique up to homotopy under DC or supplied lifts ([[thm-injective-comparison-map-exists]], [[thm-injective-comparison-maps-are-unique-up-to-cochain-homotopy]]).

## Proof

1.1 In the first branch write $M\to I^\bullet$ for the resolution and set $C^{q,p}=\operatorname{Hom}_R(K^{-q},I^p)$. Put $h(f)=(-1)^{q+1}f d_K$ and $v(f)=d_I f$. They commute and square to zero. Its total differential is $h+(-1)^qv$. Multiplication by $(-1)^{pq}$ in bidegree $(q,p)$ changes this into $d_I f-(-1)^{p+q}f d_K$, the derived Hom differential. Each diagonal is finite, and F1 identifies total cohomology with $\operatorname{Ext}^{p+q}(K,M)$. [F1, algebra]

1.2 For fixed $p$, a horizontal cocycle is a map on $K^{-q}/B^{-q}K$ to $I^p$. Restriction to $H^{-q}K\subset K^{-q}/B^{-q}K$ is surjective by injectivity. Its kernel consists of maps factoring through $K^{-q}/Z^{-q}K\cong B^{-q+1}K$; each such map extends to $K^{-q+1}$ by injectivity, and therefore is a horizontal boundary. This proves the canonical identity $H_h^q(C^{\bullet,p})=\operatorname{Hom}_R(H^{-q}K,I^p)$. Taking vertical cohomology gives $\operatorname{Ext}_R^p(H^{-q}K,M)$; the constant vertical sign $(-1)^q$ does not change kernels or images. [F2, F4]

1.3 In the second branch apply F3 to the additive left-exact functor $\operatorname{Hom}_R(M,-)$. Left exactness follows because maps into a kernel are exactly maps annihilated by the next arrow. Its derived functors are Ext computed by an injective resolution. A Cartan–Eilenberg total $T$ of $K$ is a bounded-below injective model under the declared data convention. Additivity identifies $\operatorname{Tot}\operatorname{Hom}(M,I)$ with $\operatorname{Hom}(M,T)$, since its diagonals are finite. F1 therefore identifies the target with $\operatorname{Ext}^n(M,K)$. [F1, F3]

2.1 F2 now gives the first sequence. In degree $n\ge-b$, the resolution filtration has $F^0H^n=H^n$ and $F^{n+b+1}H^n=0$, and its quotients are $E_\infty^{p,n-p}$. Thus convergence is strong and finite. Maps of $K$ and comparison maps of $I$ induce the asserted maps on the double complex. A comparison homotopy in $I$ becomes a vertical homotopy on each horizontal-cohomology column, so gives identical $E_2$ maps; identical subsequent maps follow by taking page homology. F5 and the total Hom homotopy give independence and naturality, with precisely its choice qualification. [F1, F2, F5, step 1.1, step 1.2]

3.1 F3 gives the second displayed $E_2$, bidegree and naturality. Its filtration endpoints in degree $n\ge a$ are $F^0=H^n$ and $F^{n-a+1}=0$. Below the respective lower bounds both targets vanish; at the bound there is one possible graded quotient. Zero inputs with zero replacements give zero sequences. No splitting of a multi-piece filtration is asserted, and no additional choice is used in the finite-diagonal or injective-extension calculations. [F3, step 1.3] ∎
