---
id: "lem-affineness-from-unit-generating-global-sections"
kind: "lemma"
title: "Affineness from a finite principal cover"
status: "draft"
origin: "pipeline"
deps: ["thm-morphisms-into-affine-scheme-global-sections", "thm-sections-basic-open-affine-scheme", "thm-localisation-of-modules-is-exact", "thm-sheaf-equalizer-condition"]
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Stacks 28.28.3, with elementary finite-equalizer proof"
      url: "https://stacks.math.columbia.edu/tag/01QF"
proof_strategy: direct
---

## Statement

Let $X$ be a scheme, $R=\Gamma(X,\mathcal O_X)$, and $f_1,\ldots,f_n\in R$. Write $X_f$ for the open locus where the germ of $f$ is a unit. If $(f_1,\ldots,f_n)=R$ and each $U_i=X_{f_i}$ is affine, then $X$ is affine. In fact the canonical morphism $X\to\operatorname{Spec}R$ is an isomorphism. Empty $X$ and $n=0$ are allowed.

## Facts & Assumptions

**Given:** The objects, hypotheses and conventions in the statement above.

[F1] For a scheme $X$ and a ring $A$, taking global sections induces a natural bijection $$\operatorname{Hom}(X,\operatorname{Spec}A)\cong\operatorname{Hom}_{\mathrm{CRing}}(A,\Gamma(X,\mathcal O_X)).$$ ([[thm-morphisms-into-affine-scheme-global-sections]])

[F2] For $f\in A$, $\Gamma(D(f),\mathcal O)=A_f$. If $D(g)\subseteq D(f)$, the restriction is the canonical localization map $A_f\to A_g$. ([[thm-sections-basic-open-affine-scheme]])

[F3] If $$ 0 \longrightarrow M' \xrightarrow{f} M \xrightarrow{g} M'' \longrightarrow 0 $$ is a short exact sequence of $R$-modules, then $$ 0 \longrightarrow S^{-1}M' \xrightarrow{S^{-1}f} S^{-1}M \xrightarrow{S^{-1}g} S^{-1}M'' \longrightarrow 0 $$ is a short exact sequence of $S^{-1}R$-modules. ([[thm-localisation-of-modules-is-exact]])

[F4] Let $\mathcal F$ be a presheaf of sets on a topological space $X$. Then $\mathcal F$ is a sheaf if and only if, for every open set $U \subseteq X$ and every open cover $U=\bigcup_{i\in I}U_i$, the restriction map $$e:\mathcal F(U)\longrightarrow\prod_{i\in I}\mathcal F(U_i),\qquad e(s)=(s|_{U_i})_{i\in I},$$ is an equalizer of the two maps $$d_0,d_1:\prod_{i\in I}\mathcal F(U_i)\rightrightarrows \prod_{(i,j)\in I\times I}\mathcal F(U_i\cap U_j),$$ defined by $$d_0((s_i))=(s_i|_{U_i\cap U_j})_{i,j},\qquad d_1((s_i))=(s_j|_{U_i\cap U_j})_{i,j}.$$ ([[thm-sheaf-equalizer-condition]])

## Proof

1.1 Write $1=\sum_i g_if_i$. At every point some $f_i$ is a unit, so the $U_i$ cover $X$. Set $B_i=\Gamma(U_i,\mathcal O_X)$. The intersection $U_i\cap U_j$ is the principal open defined by $f_j|_{U_i}$ in $U_i$, hence affine, and F2 gives its ring by localization. [given, F2]

2.1 F4 identifies $R$ as the kernel of the difference of restriction maps $\prod_iB_i\to\prod_{i,j}\Gamma(U_i\cap U_j,\mathcal O_X)$, a homomorphism of $R$-modules. Fix $k$ and localize this kernel at $f_k$. Localization preserves kernels by F3: apply exactness to the kernel-image short exact sequence and to the inclusion of the image in the target. It commutes with these finite products, because a common denominator exists for every finite tuple. [F3, F4, step 1.1]

3.1 By F2 each localized factor is the ring of sections on its intersection with $U_k$. By F4 their kernel is $\Gamma(U_k,\mathcal O_X)$, since the opens $U_i\cap U_k$ cover $U_k$. Thus restriction induces $R_{f_k}\cong B_k$ as rings; multiplicativity follows from restriction and fraction multiplication, not merely module exactness. [F2, F4, step 2.1]

4.1 F1 supplies the canonical map $j:X\to\operatorname{Spec}R$ induced by the identity of $R$. Its inverse image of $D(f_k)$ is $X_{f_k}$, and on this open it is the isomorphism from step 3.1. The $D(f_k)$ cover $\operatorname{Spec}R$ because the $f_k$ generate 1; local inverse maps agree and glue to the inverse of $j$. If $n=0$ then $R=0$, which forces $X=\varnothing$ since each point has a nonzero local ring. For $n=1$, $f_1$ is a unit and $U_1=X$. Zero sections merely contribute empty charts. [F1, step 1.1, step 3.1] ∎
