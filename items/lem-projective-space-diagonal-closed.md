---
id: lem-projective-space-diagonal-closed
kind: lemma
title: The relative projective-space diagonal is closed
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-relative-projective-space-standard-charts, thm-separatedness-gluing-overlap-criterion, lem-separated-local-on-base, thm-affine-fibre-product-tensor-ring, def-separated-morphism-schemes, def-diagonal-morphism-scheme]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Schemes, Lemma 26.21.8, printed p.41"
      url: "https://stacks.math.columbia.edu/download/schemes.pdf"
    - title: "Vakil, The Rising Sea, Section 11.3.8, printed pp.309-310"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf"
verification:
  precheck: pass
---

## Statement

For every scheme $S$ and every $n\ge0$ the diagonal
$\Delta_{\mathbb P^n_S/S}$ is a closed immersion; hence
$\mathbb P^n_S\to S$ is separated. On the product of standard charts
$U_i\times_SU_j$ the restriction of the diagonal is the closed subscheme given
by the surjective coordinate map
$$A\bigl[x^{(i)}_\ell,\ y^{(j)}_m\bigr]\longrightarrow A\bigl[x^{(i)}_\ell\bigr]_{(x^{(i)}_j)}\quad(i\ne j), \qquad A\bigl[x^{(i)}_\ell,\ y^{(i)}_m\bigr]\longrightarrow A\bigl[x^{(i)}_\ell\bigr]\quad(i=j)$$
over an affine base $S=\operatorname{Spec}A$. For $i\ne j$ its kernel is
generated in the source ring by $x^{(i)}_j y^{(j)}_i-1$ and
$y^{(j)}_m-x^{(i)}_m y^{(j)}_i$ for $m\ne i,j$; for $i=j$ the kernel is generated
by $y^{(i)}_m-x^{(i)}_m$ for $m\ne i$. These are chart forms of the homogeneous
relations $x_a y_b-x_b y_a$.

## Facts & Assumptions

**Given:** A scheme $S$, an integer $n\ge0$, the standard charts $U_i$ of $\mathbb P^n_S$ with coordinates $x^{(i)}_\ell$ and the diagonal $\Delta$ of $\mathbb P^n_S\to S$.

[F1] The standard charts $U_i$ are affine over $S$ and form an open cover of $\mathbb P^n_S$; when $S=\operatorname{Spec}A$ is affine, each chart is affine and for $i\ne j$ the overlap $U_i\cap U_j$ is the distinguished open $D(x^{(i)}_j)\cong\operatorname{Spec}\bigl(A[x^{(i)}_\ell]_{(x^{(i)}_j)}\bigr)$. All constructions commute with base change. ([[def-relative-projective-space-standard-charts]])

[F2] For $f:X\to S$, separatedness is local on the base: $f$ is separated if and only if $X\times_SS_i\to S_i$ is separated for an open cover $S=\bigcup_iS_i$. ([[lem-separated-local-on-base]])

[F3] Separatedness of $f:X\to S$ over an affine base $S=\operatorname{Spec}A$ may be checked on any affine open cover of $X$: $f$ is separated if and only if for each pair $U=\operatorname{Spec}B$, $V=\operatorname{Spec}C$ of that cover lying over $A$, the intersection $U\cap V$ is affine and $B\otimes_AC\to\Gamma(U\cap V,\mathcal O_X)$ is surjective. ([[thm-separatedness-gluing-overlap-criterion]])

[F4] For ring maps $A\to B$, $A\to C$, allowing the zero ring, $\operatorname{Spec}B\times_{\operatorname{Spec}A}\operatorname{Spec}C\cong\operatorname{Spec}(B\otimes_AC)$. ([[thm-affine-fibre-product-tensor-ring]])

[F5] A morphism is **separated** when its diagonal is a closed immersion. ([[def-separated-morphism-schemes]])

[F6] The diagonal satisfies $\operatorname{pr}_1\Delta=\operatorname{id}=\operatorname{pr}_2\Delta$. ([[def-diagonal-morphism-scheme]])

## Proof

**Proof technique:** direct.

1.1 Since separatedness is local on the base by [F2], it suffices to treat $S=\operatorname{Spec}A$ affine, the general case following by base change along an affine open cover of $S$ using the compatibility in [F1]; for $S=\varnothing$ the scheme $\mathbb P^n_S$ is empty and the claim is automatic. [F1, F2, given]

2.1 Over $S=\operatorname{Spec}A$, fix charts $U_i=\operatorname{Spec}B_i$, $U_j=\operatorname{Spec}B_j$ of [F1]. Then $U_i\times_SU_j\cong\operatorname{Spec}(B_i\otimes_AB_j)$ by [F4], with $B_i\otimes_AB_j\cong A[x^{(i)}_\ell,y^{(j)}_m]$ for $\ell\ne i$, $m\ne j$. [F1, F4, step 1.1]

3.1 By [F6] the inverse image $\Delta^{-1}(U_i\times_SU_j)$ inside $\mathbb P^n_S$ is $U_i\cap U_j$, and the restriction of $\Delta$ to $U_i\times_SU_j$ is the morphism $U_i\cap U_j\to U_i\times_SU_j$ whose two composites with the projections are the inclusions. [F6, step 2.1]

4.1 Suppose $i\ne j$. By [F1] the intersection $U_i\cap U_j$ is $D(x^{(i)}_j)=\operatorname{Spec}A[x^{(i)}_\ell]_{(x^{(i)}_j)}$, which is affine. On that overlap the transition coordinates satisfy $y^{(j)}_i=(x^{(i)}_j)^{-1}$ and $y^{(j)}_m=x^{(i)}_m(x^{(i)}_j)^{-1}$ for $m\ne i,j$. Thus the morphism of step 3.1 corresponds to the ring map $A[x^{(i)}_\ell,y^{(j)}_m]\to A[x^{(i)}_\ell]_{(x^{(i)}_j)}$ with those images and $x^{(i)}_\ell\mapsto x^{(i)}_\ell$. This map is surjective because $y^{(j)}_i$ maps to $(x^{(i)}_j)^{-1}$. [F1, step 2.1, step 3.1]

4.2 Suppose $i=j$. Then $U_i\cap U_i=U_i$ is affine and the ring map is $A[x^{(i)}_\ell,y^{(i)}_m]\to A[x^{(i)}_\ell]$ with $y^{(i)}_m\mapsto x^{(i)}_m$, again surjective. [F1, step 3.1]

5.1 For $i\ne j$ put $J=(x^{(i)}_j y^{(j)}_i-1,\ y^{(j)}_m-x^{(i)}_m y^{(j)}_i\ (m\ne i,j))$ in the source ring of step 4.1. Every generator of $J$ maps to zero under that step's coordinate map. Conversely, quotienting by $J$ makes $x^{(i)}_j$ invertible with inverse $y^{(j)}_i$ and expresses every other $y$-generator as $x^{(i)}_m y^{(j)}_i$, so the quotient is precisely $A[x^{(i)}_\ell]_{(x^{(i)}_j)}$; hence $J$ is the kernel. For $i=j$ the kernel of step 4.2 is $(y^{(i)}_m-x^{(i)}_m\ (m\ne i))$. The mixed-chart generators are, up to sign, $x_i y_j-x_j y_i$ and $x_i y_m-x_m y_i$ after $x_i=y_j=1$; the same-chart generators are $x_i y_m-x_m y_i$ after $x_i=y_i=1$. Thus these are exactly the ideals of the diagonal on the chart products. [step 4.1, step 4.2]

6.1 By [F3] applied to the affine base $S=\operatorname{Spec}A$ and the affine open cover $\{U_i\}$ of $\mathbb P^n_S$, steps 4.1, 4.2 and 5.1 show that $\Delta$ is a closed immersion; the empty base and the case $n=0$, where $\mathbb P^0_S=S$ and $\Delta$ is an isomorphism, are included. [F3, step 1.1, step 4.1, step 4.2, step 5.1]

7.1 By [F5] the morphism $\mathbb P^n_S\to S$ is separated, which completes the proof. [F5, step 6.1] ∎
