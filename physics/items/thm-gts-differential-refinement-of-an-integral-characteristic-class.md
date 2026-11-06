---
id: thm-gts-differential-refinement-of-an-integral-characteristic-class
kind: theorem
title: Natural differential refinement of stable complex characteristic forms
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
category: string-theory
dependency_level: 5
proof_strategy: direct
axiom_strength: ZF + full AC
deps:
  - def-gts-cheegersimons-differential-character
  - thm-gts-exact-sequences-for-ordinary-differential-cohomology
  - thm-chern-weil-homomorphism-is-independent-of-connection-and-natural
  - thm-chern-weil-forms-represent-the-at-characteristic-classes-over-the-reals
  - lem-gts-differential-character-homotopy-formula
  - def-gts-finite-classifying-approximation-input
  - lem-transgression-between-two-connections-is-exact
  - def-axiom-of-choice
  - thm-schubert-cells-give-the-stable-grassmannian-cw-structure
  - thm-cellular-cochains-compute-cohomology-with-local-coefficients
  - thm-de-rham-theorem
  - thm-weak-whitney-proper-embedding-theorem
dependency_roles:
  def-gts-cheegersimons-differential-character: mathematical-premise
  thm-gts-exact-sequences-for-ordinary-differential-cohomology: mathematical-premise
  thm-chern-weil-homomorphism-is-independent-of-connection-and-natural: mathematical-premise
  thm-chern-weil-forms-represent-the-at-characteristic-classes-over-the-reals: mathematical-premise
  lem-gts-differential-character-homotopy-formula: mathematical-premise
  def-gts-finite-classifying-approximation-input: mathematical-premise
  lem-transgression-between-two-connections-is-exact: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  thm-schubert-cells-give-the-stable-grassmannian-cw-structure: mathematical-premise
  thm-cellular-cochains-compute-cohomology-with-local-coefficients: mathematical-premise
  thm-de-rham-theorem: mathematical-premise
  thm-weak-whitney-proper-embedding-theorem: mathematical-premise
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Ulrich Bunke, Differential Cohomology, arXiv:1208.3961v6
      url: https://arxiv.org/pdf/1208.3961v6
      locator: Section 2.3, Lemma 2.51, equations (5)–(6), PDF p. 13, for transgression additivity modulo exact forms; Section 3.3, Lemma 3.40 and Theorem 3.42 with proof, PDF pp. 42–44, for the refinement argument and its finite classifying approximations.
verification:
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Let $BU=\varinjlim_r BU(r)$ be the stable unitary classifying space, let $m\ge1$, and let $c\in H^{2m}(BU;\mathbb Z)$ be a stable integral class. Let $M$ be a finite-dimensional Hausdorff second-countable smooth manifold without boundary, and let $E\to M$ be a rank-$r$ Hermitian complex vector bundle with unitary connection $\nabla$. Write $c_r$ for the restriction of $c$ to $BU(r)$ and let $p_c\in(S^m\mathfrak u(r)^*)^{U(r)}$ be the real-normalized invariant polynomial, including the required $2\pi i$ factors, with $[p_c(F_\nabla)]=c_r(E)_{\mathbb R}$. Assume full AC and that an input of [[def-gts-finite-classifying-approximation-input]] is supplied for $(M,E,\nabla)$ and for every smooth map $g:M_0\to M$ from a finite-dimensional Hausdorff second-countable smooth manifold $M_0$ without boundary and every unitary connection on $g^*E$; this includes the pullback connection $g^*\nabla$ and the path connections on $\operatorname{pr}_M^*E$ over $M\times J$ used below. Then there is a unique pullback-natural differential character $\widehat c(E,\nabla)\in\widehat H^{2m}(M;\mathbb Z)$ with $I(\widehat c)=c_r(E)$ and $R(\widehat c)=p_c(F_\nabla)$. Along a path of unitary connections,
$$\widehat c(E,\nabla_1)-\widehat c(E,\nabla_0)=a\bigl(\mathrm{CS}_{p_c}(\nabla_0,\nabla_1)\bigr),\qquad d\mathrm{CS}_{p_c}=p_c(F_{\nabla_1})-p_c(F_{\nabla_0}).$$
Uniqueness is among assignments satisfying the stated naturality and homotopy formula; it is not pointwise uniqueness from $(I,R)$.

## Statement references

[[def-gts-cheegersimons-differential-character]]

[[thm-gts-exact-sequences-for-ordinary-differential-cohomology]]

[[thm-chern-weil-forms-represent-the-at-characteristic-classes-over-the-reals]]

## Facts & Assumptions

**Given:** Full AC, the pullback-stable family of finite classifying-approximation inputs stated above for every smooth pullback bundle and unitary connection, their common-refinement and path-coherence data, the unitary connection, and the real compatibility $[p_c(F_\nabla)]=c_r(E)_{\mathbb R}$.

[F1] [[thm-gts-exact-sequences-for-ordinary-differential-cohomology]] makes $I$ surjective, identifies the common kernel of $I$ and $R$ with $H^{2m-1}_{\mathrm{dR}}/\operatorname{im}H^{2m-1}(\mathbb Z)$, gives $R(a(\eta))=d\eta$, and implies $[R(h)]_{\mathrm{dR}}=I(h)_{\mathbb R}$.

[F2] [[thm-chern-weil-homomorphism-is-independent-of-connection-and-natural]] and [[thm-chern-weil-forms-represent-the-at-characteristic-classes-over-the-reals]] give pullback naturality and the required real class identity for the classical Chern forms in their stated scope.

[F3] [[def-gts-finite-classifying-approximation-input]] supplies finite smooth classifying manifolds, continuous $(d+1)$-connected maps to the topological classifying space $BU(r)$, smooth bundle presentations, common approximations, and a typed smooth homotopy/path datum. For presentations of the same bundle, it supplies the exact identity $-T_h+\mathrm{CS}_{p_c}(\nabla_0^E,\nabla)-\mathrm{CS}_{p_c}(\nabla_1^E,\nabla)=d\lambda$. The approximation has $H^{2m-1}(N;\mathbb R)=0$ only when $2m-1\le d$; no such claim on $N$ is made in higher degree.

[F4] [[lem-transgression-between-two-connections-is-exact]] gives the normalized path transgression identity for the invariant polynomial.

[F5] [[lem-gts-differential-character-homotopy-formula]] identifies the endpoint difference of a character on $M\times J$ with the form action of the interval integral of its curvature.

[F6] [[thm-weak-whitney-proper-embedding-theorem]] supplies a proper smooth embedding of every finite-dimensional smooth manifold into a finite-dimensional Euclidean space under countable choice. [[thm-schubert-cells-give-the-stable-grassmannian-cw-structure]] supplies the finite complex Grassmannian's Schubert CW structure, whose cells have even real dimensions. [[thm-cellular-cochains-compute-cohomology-with-local-coefficients]], with constant real coefficients, and [[thm-de-rham-theorem]] therefore identify its odd de Rham cohomology as zero in every degree. Full AC supplies all their choice assumptions. These are published local suppliers, not new external imports.

## Proof

1.1 Fix an approximation $(N,F,\nabla_F)$ in [F3]. By surjectivity of $I$ in [F1], choose $h_0$ with $I(h_0)=c_r(F)$. The compatibility of the normalized characteristic form gives $[p_c(F_{\nabla_F})]=c_r(F)_{\mathbb R}$, and [F1] gives $[R(h_0)]=c_r(F)_{\mathbb R}$. Hence their difference is exact; choose $\eta$ with $d\eta=p_c(F_{\nabla_F})-R(h_0)$ and set $\widehat c_F=h_0+a(\eta)$. Then $I(\widehat c_F)=c_r(F)$ and $R(\widehat c_F)=p_c(F_{\nabla_F})$. [F1, F2, F3, given, choose]

2.1 Let $\widehat c_F$ and $\widehat c'_F$ be any two choices on an approximation $N$. Their difference has zero characteristic class and curvature by [F1]. If $2m-1\le d$, the common kernel on $N$ vanishes by [F3], so the choices agree on $N$. If $2m-1>d$, compare their pullbacks to the presenting base $M$: the difference has zero characteristic class and curvature there, and the common kernel in [F1] is zero because $\Omega^{2m-1}(M)=0$ by dimension. Thus in either degree range the pullbacks used to define the character on $M$ are independent of the choice on $N$; no uniqueness on $N$ is asserted in the higher-degree case. [F1, F3, step 1.1]

2.2 **Finite smooth Grassmannian bridge.** Every smooth Hermitian rank-$r$ bundle $F$ on a finite-dimensional smooth manifold $N$ has a smooth isometric complex-linear embedding into a finite trivial bundle, also when $N$ is noncompact. Indeed its total space is a smooth manifold of dimension $\dim N+2r$. Apply [F6] to choose a smooth embedding $\iota:F\to\mathbb R^K$ for finite $K$. The canonical vertical tangent at the zero vector identifies $F_x$ with the tangent vectors $\left.\frac{d}{dt}\right|_{t=0}tv$. Restriction of $d\iota_{0_x}$ to these vectors gives a smooth injective real-linear bundle map $A_x:F_x\to\mathbb R^K$. Define
$$b_x(v)=A_x(v)-iA_x(iv)\in\mathbb C^K.$$
It satisfies $b_x(iv)=i b_x(v)$, and is injective because its real part is the injective map $A_x$. The positive Hermitian endomorphism $b_x^*b_x$ has a smooth inverse square root: locally choose a positive scalar and a common strict spectral bound, and apply the convergent binomial series for the inverse square root after scalar rescaling. Thus $j_x=b_x(b_x^*b_x)^{-1/2}$ is a smooth isometric complex-linear embedding. Its image-plane map $a:N\to G=\operatorname{Gr}_r(\mathbb C^K)$ is smooth: in a local orthonormal frame the orthogonal projection is the smooth matrix $j j^*$. It identifies $F$ isometrically with $a^*\gamma$. For two bundles on two finite-dimensional manifolds, perform these constructions separately and put the embeddings into orthogonal blocks of one finite $\mathbb C^K$. On this common $G$, let $\nabla^\gamma=P\,d$ be the tautological unitary connection. Its odd de Rham cohomology vanishes in every degree by [F6]. The construction in step 1.1, applied to $(G,\gamma,\nabla^\gamma)$, consequently supplies a unique character $h_G$ with the required $I,R$ pair. Existence uses only the surjectivity and curvature compatibility in [F1, F2]; uniqueness uses the just established odd cohomology vanishing. No base-dimension admissibility condition on either original approximation has been changed. [F1, F2, F6, step 1.1, construct]

3.1 For a classifying map $f:M\to N$ and bundle isomorphism $E\cong f^*F$, define $\widehat c(E,\nabla)=f^*\widehat c_F+a(\mathrm{CS}_{p_c}(f^*\nabla_F,\nabla))$. By [F4] its curvature is $f^*p_c(F_{\nabla_F})+p_c(F_\nabla)-f^*p_c(F_{\nabla_F})=p_c(F_\nabla)$. Since the form action maps to zero under $I$, its characteristic class is $f^*c_r(F)=c_r(E)$. [F1, F2, F4, step 2.1, given]

4.1 Given two classifying presentations of $(E,\nabla)$, [F3] supplies a common approximation, comparison maps, and a smooth homotopy $h$ with the specified endpoint connections $\nabla_i^E=(a_i\circ f_i)^*\nabla'$ on $E$. Write $A_i=f_i^*\nabla_{F_i}$ and $B_i=\nabla_i^E$, using the presentation isomorphisms. On $N_i$, the characters $\widehat c_{F_i}+a(\mathrm{CS}_{p_c}(\nabla_{F_i},a_i^*\nabla'))$ and $a_i^*\widehat c_{F'}$ have the same characteristic class and curvature: the bundle isomorphism identifies the classes, while the transgression identity [F4] identifies the curvatures. Their difference is therefore in $\ker I\cap\ker R$. If $2m-1\le d$, this common kernel vanishes on $N_i$ by [F3]; if $2m-1>d$, its pullback to $M$ vanishes because forms of degree $2m-1$ on $M$ are zero. Pulling to $M$ in either case gives
$$f_i^*\widehat c_{F_i}=(a_i\circ f_i)^*\widehat c_{F'}-a(\mathrm{CS}_{p_c}(A_i,B_i)).$$
For any three connections $A,B,C$ on one bundle, the transgression forms satisfy $\mathrm{CS}_{p_c}(A,C)-\mathrm{CS}_{p_c}(A,B)-\mathrm{CS}_{p_c}(B,C)=-d\Xi(A,B,C)$. Extend the affine family $\nabla_{s,t}=(1-s-t)A+sB+tC$ to an open neighborhood of $\Delta^2$ and use it, with ordinary differentiation in the parameter directions, as a connection $\widetilde\nabla$ on $\operatorname{pr}_M^*E$ over $M$ times that neighborhood. Since its Chern–Weil form is closed, Stokes on the parameter simplex oriented by $(A,B,C)$, whose boundary is $[B,C]-[A,C]+[A,B]$, gives $d\Xi=\mathrm{CS}_{p_c}(A,B)+\mathrm{CS}_{p_c}(B,C)-\mathrm{CS}_{p_c}(A,C)$ for $\Xi=-\int_{\Delta^2}p_c(F_{\widetilde\nabla})$, using parameter directions before base directions. This is the exactness relation of Bunke's Lemma 2.51, equation (6), in this orientation convention. Hence the candidate from presentation $i$ in step 3.1 equals $(a_i\circ f_i)^*\widehat c_{F'}+a(\mathrm{CS}_{p_c}(B_i,\nabla))$, since $a(d\Xi)=0$ by Stokes on cycles. Pullback along $h$ and the homotopy formula [F5] now give the difference of the two candidates as
$$a\bigl(T_h+\mathrm{CS}_{p_c}(B_1,\nabla)-\mathrm{CS}_{p_c}(B_0,\nabla)\bigr)=a(-d\lambda)=0,$$
using the coherence equation of [F3]. Thus the class in step 3.1 is independent of every presentation. [F1, F2, F3, F4, F5, step 2.1, step 3.1]

5.1 **Comparison after pullback to the original base.** Let $(N_i,F_i,\nabla_{F_i},f_i)$ be a presentation over a base $M_i$ of dimension $d_i$, and let $a_i:N_i\to G$ be one of the embeddings from step 2.2. Put $B_i=a_i^*\nabla^\gamma$. On $N_i$, the characters $\widehat c_{F_i}+a(\operatorname{CS}_{p_c}(\nabla_{F_i},B_i))$ and $a_i^*h_G$ have identical $I,R$ pairs. Their difference pulls back to zero on $M_i$: when $2m-1\le d_i$, the odd cohomology of this ORIGINAL admissible $N_i$ vanishes by [F3]; when $2m-1>d_i$, the common kernel on $M_i$ vanishes by dimension. The transgression triangle proved in step 4.1 then rewrites the value of step 3.1, on this original base, as
$$\widehat c(E_i,\nabla_i)=(a_i f_i)^*h_G+a\bigl(\operatorname{CS}_{p_c}(f_i^*B_i,\nabla_i)\bigr).$$
This equation is on $M_i$, so it can subsequently be pulled back along any smooth map, irrespective of its source dimension. It does not compare the two characters directly on an inadmissible $N_i$. [F1, F2, F3, F4, step 3.1, step 4.1, step 2.2]

5.2 **Exact comparison on a new base.** Suppose $j_0,j_1:E\to\underline{\mathbb C}^{K}$ are the two isometric embeddings obtained by pulling back the orthogonal-block embeddings of step 2.2 to a common base $Q$. Define
$$J_t=\cos(\pi t/2)j_0+\sin(\pi t/2)j_1.$$
Orthogonality of the blocks gives $J_t^*J_t=1$ and $J_t^*\partial_tJ_t=0$. Thus $J_t$ is an isometric embedding and gives a smooth homotopy $H:Q\times[0,1]\to G$ with a specified identification $H^*\gamma\cong\operatorname{pr}_Q^*E$. In that identification its connection has zero parameter component and restricts to a path from $A_0=j_0^*d$ to $A_1=j_1^*d$. Write $T_H$ for its characteristic-form transgression. Interpolate this path affinely, with endpoints fixed, to the affine path from $A_0$ to $A_1$; use ordinary differentiation in the two parameter directions. Stokes on the parameter square, applied to the closed characteristic form, gives $T_H-\operatorname{CS}_{p_c}(A_0,A_1)$ exact, since its two constant endpoint edges contribute zero. The homotopy formula [F5] and the triangle identity in step 4.1 therefore give
$$H_1^*h_G+a(\operatorname{CS}_{p_c}(A_1,\nabla))=H_0^*h_G+a(\operatorname{CS}_{p_c}(A_0,\nabla))$$
for any unitary connection $\nabla$ on $E$. This argument proves the required comparison on $Q$ itself in every dimension; it does not require $N_0$ or $N_1$ to be admissible for $Q$. [F1, F2, F4, F5, step 4.1, step 2.2, construct]

6.1 For a smooth map $g:M_0\to M$, choose the original admissible presentation over $M$ and an independently admissible one over $M_0$ for $g^*E$. Apply step 2.2 to their two approximation bundles. Apply step 5.1 first on $M$ and only then pull that equality back along $g$; apply it separately on $M_0$ for the other presentation. The resulting embeddings of $g^*E$ have orthogonal images, so step 5.2 with $Q=M_0$ identifies the two right sides. Naturality of transgression yields
$$g^*\widehat c(E,\nabla)=\widehat c(g^*E,g^*\nabla).$$
No relation between $\dim M$ and $\dim M_0$ is required. The same finite bridge applies when one of these bases is $M\times J$ for an open interval $J$ containing $[0,1]$, so the next step uses a character whose restrictions have already been compared with the construction on $M$. [given, F2, F4, step 2.2, step 5.1, step 5.2]

7.1 To obtain the path formula, regard a smooth path $\nabla_t$ as a connection $\widetilde\nabla$ on $\operatorname{pr}_M^*E\to M\times J$ with $\widetilde\nabla_{\partial_t}=\partial_t$. Its curvature is $F_{\widetilde\nabla}=F_{\nabla_t}+dt\wedge\dot\nabla_t$. Expanding the single $dt$ factor gives the path transgression $T=m\int_0^1p_c(\dot\nabla_t,F_{\nabla_t}^{m-1})dt$. For an affine path this is exactly the convention in [F4]. For any other path with the same endpoints, interpolate affinely between it and the affine path, keeping endpoints fixed, and use the connection with ordinary differentiation in both parameter directions. Stokes on the parameter square applied to its closed characteristic form shows that the two transgressions differ by an exact form: the two constant-endpoint edges contribute zero and the remaining two edges have opposite orientations. Thus $a(T)=a(\mathrm{CS}_{p_c}(\nabla_0,\nabla_1))$, because exact forms integrate to zero on cycles. Apply [F5] to the natural refinement on $M\times J$ and restrict to the endpoints to get the claimed character equation. [given, F2, F3, F4, F5, step 6.1, algebra]

8.1 If another natural assignment satisfies the same path formula, its value on a classifying approximation has the same $I,R$ pair. When $2m-1\le d$, the common kernel vanishes on $N$ by [F3], so it agrees with $\widehat c_F$ there. When $2m-1>d$, the two values agree after pullback to $M$ because the common kernel on $M$ vanishes by dimension. Naturality identifies the assignment on the pullback classifying connection, and the path formula from that connection to $\nabla$ forces the same value as in step 3.1. This proves conditional uniqueness without asserting uniqueness on a higher-degree approximation $N$. [F1, F3, step 2.1, step 3.1, step 4.1, step 6.1, step 7.1] ∎

## Remarks

The source proof uses finite-dimensional classifying approximations and a comparison of different choices. Steps 2.2 and 5.1–6.1 give a local finite-Grassmannian bridge for cross-dimension naturality without changing the input definition or declaring a lower-connectivity approximation admissible on a larger base. The input definition states those conditions, but this batch does not prove their existence or the required coherence for every smooth bundle. This item is escalated until that supplier is proved and has a current readiness record.
