---
id: thm-segre-line-bundle-external-tensor
kind: theorem
title: "Segre embedding and its line bundle"
status: draft
origin: pipeline
deps:
  - thm-line-bundle-sections-define-projective-map
  - thm-affine-fibre-product-tensor-ring
  - thm-closed-subschemes-projective-space-homogeneous-ideals
  - def-axiom-of-choice
  - def-relative-projective-space-standard-charts
  - def-very-ample-invertible-sheaf-relative
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "The Stacks Project, Constructions of Schemes, Sections 27.8-27.21"
      url: https://stacks.math.columbia.edu/download/constructions.pdf
    - title: "Ravi Vakil, The Rising Sea, 29 August 2022, Sections 4.5, 7.4, 9.3, 10.6, 17.4, 17.6, 18.2"
      url: https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf
---

## Statement

Assume the Axiom of Choice as inherited from the projective-space and sheaf
constructions ([[def-axiom-of-choice]]). Let $S$ be a scheme, $m,n\ge0$, and
put $N=(m+1)(n+1)-1$. Let
$$P=\mathbb P^m_S\times_S\mathbb P^n_S$$
with projections $\mathrm{pr}_1,\mathrm{pr}_2$ and structure sections
$x_0,\dots,x_m$ of $\mathcal O_{\mathbb P^m_S}(1)$ and
$y_0,\dots,y_n$ of $\mathcal O_{\mathbb P^n_S}(1)$. Then:

1. The $N+1=(m+1)(n+1)$ sections
   $$z_{ij}=\mathrm{pr}_1^*x_i\otimes\mathrm{pr}_2^*y_j\;\in\;\Gamma\bigl(P,\ \mathrm{pr}_1^*\mathcal O(1)\otimes\mathrm{pr}_2^*\mathcal O(1)\bigr)$$
   generate the invertible sheaf
   $L=\mathrm{pr}_1^*\mathcal O(1)\otimes\mathrm{pr}_2^*\mathcal O(1)$.
2. There is a closed immersion, the **Segre embedding**,
   $$\sigma:P\longrightarrow\mathbb P^{N}_S$$
   with $\sigma^*\mathcal O(1)\cong L$, namely the morphism determined by the
   generating sections $z_{ij}$
   ([[thm-line-bundle-sections-define-projective-map]]).
3. The scheme-theoretic image of $\sigma$ is cut out by the rank-one
   $2\times2$ minors
   $$z_{ab}z_{cd}-z_{ad}z_{cb}=0,\qquad 0\le a,c\le m,\ 0\le b,d\le n,$$
   in the homogeneous coordinate ring of $\mathbb P^N_S$; that is, on each
   chart these minors generate the ideal of the image.

## Facts & Assumptions

**Given:** A scheme $S$, integers $m,n\ge0$, the projections $\mathrm{pr}_1,\mathrm{pr}_2$ of $P=\mathbb P^m_S\times_S\mathbb P^n_S$, and the Axiom of Choice as inherited.

[A1] The Axiom of Choice states that every family of nonempty sets has a choice function. ([[def-axiom-of-choice]])

[F1] The projective spaces $\mathbb P^m_S,\mathbb P^n_S,\mathbb P^N_S$ have standard charts $U_i,V_j,W_{ij}$ with frames $x_i$ and $y_j$ of the twists $\mathcal O(1)$ glued by the transition formulas; the products $U_i\times_SV_j$ form an open cover of $P$. Over every affine open $T=\operatorname{Spec}A\subseteq S$, their restrictions satisfy $U_i^T\times_TV_j^T=\operatorname{Spec}A[u_a:a\ne i,v_b:b\ne j]$, where $u_a=x_a/x_i$, $v_b=y_b/y_j$, and $u_i=v_j=1$. The target chart is $W_{ij}^T=\operatorname{Spec}A[w_{ab}:(a,b)\ne(i,j)]$ with $w_{ab}=z_{ab}/z_{ij}$ and $w_{ij}=1$. ([[def-relative-projective-space-standard-charts]], [[def-very-ample-invertible-sheaf-relative]], [[thm-affine-fibre-product-tensor-ring]])

[F2] Pullback and tensor product of invertible sheaves are invertible: $\mathrm{pr}_1^*\mathcal O(1)$, $\mathrm{pr}_2^*\mathcal O(1)$ and their tensor product $L$ are invertible, and the products of the frames $x_i$ and $y_j$ are frames of $L$ on $U_i\times_SV_j$. ([[def-very-ample-invertible-sheaf-relative]])

[F3] (Universal property.) Generating sections $z_0,\dots,z_N$ of an invertible sheaf $M$ on an $S$-scheme $P$ determine a unique $S$-morphism $\sigma:P\to\mathbb P^N_S$ with $\sigma^*\mathcal O(1)\cong M$, compatible with the coordinate sections. ([[thm-line-bundle-sections-define-projective-map]])

[F4] Closed subschemes of $\mathbb P^N_S$ are described by homogeneous ideals of the polynomial ring on the charts, and the scheme-theoretic image of a morphism into $\mathbb P^N_S$ is the smallest closed subscheme through which it factors; on an affine base it is computed by the saturated homogeneous ideal of the image. ([[thm-closed-subschemes-projective-space-homogeneous-ideals]])

## Proof

**Proof technique:** direct: show that the products of coordinate sections generate the external tensor product, apply the universal property, and identify the image on each product of charts with the subscheme cut out by the rank-one minors.

1.1 The generating sections. On the affine product of charts $U_i\times_SV_j$ the pullbacks $\mathrm{pr}_1^*x_i$ and $\mathrm{pr}_2^*y_j$ are frames of $\mathrm{pr}_1^*\mathcal O(1)$ and $\mathrm{pr}_2^*\mathcal O(1)$, so their tensor product $z_{ij}$ is a frame of $L$ on $U_i\times_SV_j$ by [F2]. Since the products $U_i\times_SV_j$ cover $P$ by [F1], the sections $z_{ij}$ generate $L$, and $L$ is invertible; this is claim (1). [F1, F2]
1.2 The chartwise map. Fix $i,j$ and an affine open $T=\operatorname{Spec}A\subseteq S$. By [F1] the source over $T$ has chart $U_i^T\times_TV_j^T=\operatorname{Spec}A[u_a,v_b]$ and the target has chart $W_{ij}^T=\operatorname{Spec}A[w_{ab}]$, with $u_i=v_j=w_{ij}=1$. The section $z_{ij}$ is a frame of $L$ exactly on $U_i\times_SV_j$, so [F3] gives $\sigma^{-1}(W_{ij}^T)=U_i^T\times_TV_j^T$ and the induced $A$-algebra map is
$$A[w_{ab}:(a,b)\ne(i,j)]\longrightarrow A[u_a:a\ne i,v_b:b\ne j],\qquad w_{ab}\longmapsto u_av_b.$$
It is surjective because $w_{aj}\mapsto u_a$ and $w_{ib}\mapsto v_b$. Every dehomogenised $2\times2$ minor $w_{ab}w_{cd}-w_{ad}w_{cb}$ maps to zero. Conversely, in the quotient $Q_{ij}$ by those minors, the relation involving rows $a,i$ and columns $b,j$ gives $w_{ab}=w_{aj}w_{ib}$; hence $u_a\mapsto w_{aj}$ and $v_b\mapsto w_{ib}$ define an inverse $A$-algebra map $A[u_a,v_b]\to Q_{ij}$. Thus the kernel is generated by the dehomogenised minors and the source chart is isomorphic to their closed subscheme in $W_{ij}^T$. This calculation holds for every commutative base ring $A$. [F1, F3, algebra]
2.1 The morphism. By [F3] applied to the invertible sheaf $L$ and its generating sections $z_{ij}$ there is a unique $S$-morphism $\sigma:P\to\mathbb P^N_S$ with $\sigma^*\mathcal O(1)\cong L$, the index set being $((i,j))$ with $N+1=(m+1)(n+1)$ elements; this is the Segre embedding and gives claim (2), including the pullback identity. [F3, step 1.1]
2.2 The image is the minors subscheme. On every affine base open $T=\operatorname{Spec}A\subseteq S$, the homogeneous minors define a closed subscheme of $\mathbb P^N_T$ by [F4]. Their chart ideals are exactly the kernels calculated in step 1.2. The minors have integral coefficients, so these local closed subschemes agree under restriction to overlaps of base opens and glue to a closed subscheme $Z\hookrightarrow\mathbb P^N_S$. The chart isomorphisms of step 1.2 are compatible because each is induced by the same morphism $\sigma$ and the same minor equations; they show that $P\to Z$ is an isomorphism on the open cover $\{U_i^T\times_TV_j^T\}$, hence globally. Therefore $\sigma$ is a closed immersion and its scheme-theoretic image is exactly $Z$, the subscheme defined by the rank-one $2\times2$ minors. [F4, step 1.2, cases: chart and base overlaps]
3.1 Conclusion. Step 1.1 establishes the generation of $L$ by the products $z_{ij}$, step 2.1 produces the morphism with $\sigma^*\mathcal O(1)\cong L$, and steps 1.2 and 2.2 identify the image with the minors subscheme, so $\sigma$ is the Segre embedding. The construction is uniform in $m,n\ge0$, including $m=0$ or $n=0$: then one family of coordinates is empty, the products are just the other coordinates, and the same chart computation gives an isomorphism onto a linear subspace. The equalities use no field hypothesis and no choice beyond [A1], inherited from the projective-space constructions. [A1, step 1.1, step 1.2, step 2.1, step 2.2, cases: m=0 or n=0]
\qed
