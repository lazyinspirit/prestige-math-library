---
id: lem-blowup-isomorphism-off-center
kind: lemma
title: "The blowup is an isomorphism off the center"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - def-blowup-scheme-along-ideal
  - thm-affine-blowup-standard-charts
  - lem-affine-blowup-algebra-properties
  - thm-blowup-universal-property
  - lem-blowup-local-on-base-scheme
  - def-exceptional-divisor-blowup
  - def-effective-cartier-divisor
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, Divisors, Sections 31.33-31.36 (Blowing up; Strict transform; Admissible blowups; Blowing up and flatness)"
      url: "https://stacks.math.columbia.edu/tag/01OF"
      locator: "Lemma 31.33.4(1) (tag 02OS): blowing up is an isomorphism over the complement of V(I)"
    - title: "Ravi Vakil, Foundations of Algebraic Geometry, June 27, 2011 draft (author-hosted 'Early (out-of-date) version of The Rising Sea')"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGjun2711publicnoindex.pdf"
      locator: "Exercise 19.3.B and 19.3.5, pp. 385-388"
verification:
  precheck: pass
---

## Statement

Let $\mathcal I$ be a quasi-coherent ideal sheaf of finite type with zero scheme $Z$ and let $\pi\colon\operatorname{Bl}_{\mathcal I}X\to X$ be the blowup. Then the restriction $\pi\colon\pi^{-1}(X\smallsetminus Z)\to X\smallsetminus Z$ is an isomorphism of schemes, with inverse characterized by the universal property applied to the identity of $X\smallsetminus Z$ (where the inverse image of $Z$ is empty) and to the open immersion $\pi^{-1}(X\smallsetminus Z)\hookrightarrow X$. Consequently $E=\pi^{-1}(Z)$ is the complement of this open subscheme.

## Facts & Assumptions

**Given:** A quasi-coherent ideal sheaf $\mathcal I$ of finite type with zero scheme $Z$, and the blowup $\pi\colon\operatorname{Bl}_{\mathcal I}X\to X$.

[A1] **Choice.** The Axiom of Choice is assumed as inherited from the blowup and Proj constructions used by the cited items.

[F1] [[thm-affine-blowup-standard-charts]]: For $I=(f_0,\dots,f_r)\subseteq A$, the standard opens $\operatorname{Spec}A[I/f_i]$ cover $\operatorname{Bl}_I\operatorname{Spec}A$, with transition functions $u_{ij}\mapsto u_{ji}^{-1}$.

[F2] [[lem-affine-blowup-algebra-properties]]: For $a\in I$ the affine blowup algebra satisfies $I\,A[I/a]=a\,A[I/a]$ and $(A[I/a])_a=A_a$, the latter being the ordinary localization of $A$ at $a$.

[F3] [[def-blowup-scheme-along-ideal]]: $\operatorname{Bl}_{\mathcal I}X=\operatorname{Proj}_X\mathcal R(\mathcal I)$ with its structural morphism to $X$; the affine chart cover is supplied by [F1].

[F4] [[thm-blowup-universal-property]]: For every $X$-scheme $f\colon Y\to X$ whose inverse image of $Z$ is an effective Cartier divisor there is a unique $X$-morphism $Y\to\operatorname{Bl}_{\mathcal I}X$.

[F5] [[def-effective-cartier-divisor]]: A unit equation represents the zero Cartier divisor, the empty effective divisor, and the empty scheme has only this effective divisor.

[F6] [[def-exceptional-divisor-blowup]]: $E=\pi^{-1}(Z)=Z\times_X\operatorname{Bl}_{\mathcal I}X$ with ideal sheaf $\mathcal I\mathcal O_{\operatorname{Bl}}$, and $E$ is set-theoretically the preimage of $Z$.

## Proof

1.1 Cover $X$ by affine opens $U=\operatorname{Spec}A$ with $\mathcal I|_U=(f_0,\dots,f_r)$; by [F1] and [F3] the preimage $\pi^{-1}(U)$ is covered by the charts $\operatorname{Spec}A[I/f_i]$, and by [F2] the chart ring localizes to $A_{f_i}$ after inverting $f_i$, and this chart contains the entire inverse image of $D(f_i)$. Indeed, in every chart $j$ one has $f_i=f_j(f_i/f_j)$; wherever $f_i$ is invertible, both $f_j$ and the ratio $f_i/f_j$ are invertible. The ratio-overlap formula of [F1] puts this open of chart $j$ in chart $i$. Thus the restriction of $\pi$ over the principal open $D(f_i)$ is an isomorphism $D(f_i)\to D(f_i)$: it is the structural map $\operatorname{Spec}A[I/f_i]\to\operatorname{Spec}A$ followed by localization, and $(A[I/f_i])_{f_i}=A_{f_i}$. [F1, F2, F3]

2.1 These local inverses glue. Let $O$ and $O\prime$ be any two base opens of the form $D(f_i)$ in step 1.1, possibly in different affine base neighborhoods. The structural map on the whole inverse image $\pi^{-1}(O)$ is an isomorphism onto $O$. Restricting it to $O\cap O\prime$ gives an isomorphism $\pi^{-1}(O\cap O\prime)\to O\cap O\prime$. Both local inverse maps restricted to this intersection land in that inverse image and are inverses of this same isomorphism, so they agree. Thus they glue to $\sigma:X\smallsetminus Z\to W:=\pi^{-1}(X\smallsetminus Z)$ with $\pi\circ\sigma=\operatorname{id}$. For two charts in one affine base, only the restriction of their chart overlap over $D(f_if_j)$ is identified with $D(f_if_j)$; the whole ratio overlap can also contain points over $Z$. [step 1.1]

3.1 The morphism $\sigma$ is an inverse for $\pi|_W$. Since $X\smallsetminus Z$ is covered by the opens $D(f_i)$ of step 1.1, and over each such open the restriction of $\sigma$ is the inverse of the restriction of $\pi$ (step 1.1), the composite $\sigma\circ\pi|_W$ agrees with $\operatorname{id}_W$ after restriction to the cover of $W$ by the opens $\pi^{-1}(D(f_i))\cap\operatorname{Spec}A[I/f_i]$, on each of which $\pi$ is an isomorphism; hence $\sigma\circ\pi|_W=\operatorname{id}_W$ and $\pi|_W\circ\sigma=\operatorname{id}_{X\smallsetminus Z}$, so $\pi|_W$ is an isomorphism. [step 2.1, algebra]

4.1 The inverse is characterized by the universal property: the inverse image of $Z$ under the identity $X\smallsetminus Z\to X$ is empty, hence the zero Cartier divisor, which is effective by [F5]; so [F4] gives a unique $X$-morphism $\tau\colon X\smallsetminus Z\to\operatorname{Bl}_{\mathcal I}X$ lifting the identity, and $\tau$ is an inverse of $\pi$ over $X\smallsetminus Z$; by uniqueness of the inverse of the isomorphism $\pi|_W$ of step 3.1, $\tau=\sigma$. In particular $\sigma$ is the unique morphism over $X$ from $X\smallsetminus Z$ into the blowup. [F4, F5, step 3.1]

5.1 Finally $E$ is the complement of $W$: by [F6], $E=\pi^{-1}(Z)$ is set-theoretically the preimage of $Z$, so its underlying set is the complement of the underlying set of $\pi^{-1}(X\smallsetminus Z)=W$, i.e. $E$ is the complement of the open subscheme $W$ in the blowup. [F6, step 3.1] ∎
