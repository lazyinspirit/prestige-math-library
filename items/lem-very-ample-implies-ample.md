---
id: lem-very-ample-implies-ample
kind: lemma
title: "Relative very ampleness implies relative ampleness"
status: draft
origin: pipeline
deps:
  - def-very-ample-invertible-sheaf-relative
  - def-relatively-ample-invertible-sheaf
  - thm-projective-space-as-proj
  - lem-section-nonvanishing-affine-intersection
  - def-axiom-of-choice
  - def-ample-invertible-sheaf
  - def-standard-open-proj
  - def-quasi-compact-and-quasi-separated-morphism
  - lem-base-change-quasi-compact-morphisms
  - lem-base-change-open-closed-immersions
  - def-base-change-morphism-schemes
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "The Stacks Project, Properties of Schemes, Sections 28.18, 28.27"
      url: https://stacks.math.columbia.edu/download/properties.pdf
    - title: "The Stacks Project, Morphisms of Schemes, Sections 29.38, 29.40"
      url: https://stacks.math.columbia.edu/download/morphisms.pdf
    - title: "Ravi Vakil, The Rising Sea, 29 August 2022, Sections 4.5, 7.4, 9.3, 10.6, 17.4, 17.6, 18.2"
      url: https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf
---

## Statement

Assume the Axiom of Choice as inherited from the Proj and associated-sheaf
constructions ([[def-axiom-of-choice]]). Let $f:X\to S$ be a quasi-compact
morphism of schemes ([[def-quasi-compact-and-quasi-separated-morphism]]) and
let $L$ be an invertible $\mathcal O_X$-module which is H-very ample relative
to $S$ ([[def-very-ample-invertible-sheaf-relative]]), witnessed by an
$S$-immersion $i:X\to\mathbb P^n_S$ with $L\cong i^*\mathcal O(1)$
([[def-relative-projective-space-standard-charts]]).

Then $L$ is $f$-ample ([[def-relatively-ample-invertible-sheaf]]). If
$S=\operatorname{Spec}R$ is affine, $L$ is ample in the absolute sense
([[def-ample-invertible-sheaf]]); if in addition $i$ is a closed immersion,
the same conclusion follows directly from the affine charts of
$\mathbb P^n_S$. The empty cases are included: if $X=\varnothing$, or if
$S=\varnothing$, the ampleness conditions are vacuous.

## Facts & Assumptions

**Given:** A quasi-compact morphism $f:X\to S$, an invertible sheaf $L$ with $L\cong i^*\mathcal O(1)$ for an $S$-immersion $i:X\to\mathbb P^n_S$, and the Axiom of Choice as inherited from the Proj constructions.

[A1] The Axiom of Choice states that every family of nonempty sets has a choice function. ([[def-axiom-of-choice]])

[F1] H-very ampleness of $L$ relative to $S$ means that there is $n\ge0$ and a quasi-compact $S$-immersion $i:X\to\mathbb P^n_S$ with $L\cong i^*\mathcal O_{\mathbb P^n_S}(1)$; the sheaf $\mathcal O(1)$ is glued from frames $e_i$ on the standard charts $U_i$ with transitions $e_j=x^{(i)}_je_i$ on overlaps, equivalently $e_i\mapsto x^{(j)}_ie_j$, and $\mathcal O(d)=\mathcal O(1)^{\otimes d}$ for $d\ge0$. ([[def-very-ample-invertible-sheaf-relative]])

[F2] A morphism is quasi-compact precisely when the inverse image of every affine open is quasi-compact, and quasi-compactness is stable under arbitrary base change; immersions are stable under arbitrary base change. ([[def-quasi-compact-and-quasi-separated-morphism]], [[lem-base-change-quasi-compact-morphisms]], [[lem-base-change-open-closed-immersions]], [[def-base-change-morphism-schemes]])

[F3] For an affine base $U=\operatorname{Spec}A$ one has $\mathbb P^n_U=\operatorname{Proj}A[x_0,\dots,x_n]$, the standard charts $U_i=D_+(x_i)$ are affine, and the standard opens $D_+(F)$ with $F$ homogeneous of positive degree form a basis of the topology. ([[thm-projective-space-as-proj]], [[def-standard-open-proj]])

[F4] For an affine open subscheme $W$ of a scheme $X$, an invertible sheaf $M$ on $X$ and a global section $t\in\Gamma(X,M)$ the intersection $W\cap X_t$ is an affine open subscheme of $X$, where $X_t$ is the nonvanishing locus of $t$. ([[lem-section-nonvanishing-affine-intersection]])

[F5] An invertible sheaf $N$ on a quasi-compact scheme $Y$ is ample if for every $y\in Y$ there are $d\ge1$ and $s\in\Gamma(Y,N^d)$ with $y\in Y_s$ and $Y_s$ affine. ([[def-ample-invertible-sheaf]])

## Proof

**Proof technique:** direct: restrict to an affine base open, convert homogeneous forms on the projective space into global sections of powers of $L$ whose affine nonvanishing loci shrink to any prescribed affine neighbourhood, and conclude ampleness point by point.

1.1 Forms give sections with the same nonvanishing locus. Let $U=\operatorname{Spec}A$ be an affine open of $S$ and let $F\in A[x_0,\dots,x_n]$ be homogeneous of degree $d>0$. On the chart $U_j=D_+(x_j)$ put $F^{(j)}=F(x^{(j)}_0,\dots,1,\dots,x^{(j)}_n)=F/x_j^d$, and define $s_F|_{U_j}=F^{(j)}e_j^{d}\in\Gamma(U_j,\mathcal O(d))$. On an overlap the coordinates satisfy $x^{(j)}_\ell=x^{(i)}_\ell/x^{(i)}_j$, so $F^{(j)}=F^{(i)}/(x^{(i)}_j)^d$, and the frame transition $e_j^d=(x^{(i)}_j)^d e_i^d$ gives $F^{(j)}e_j^d=F^{(i)}e_i^d$; hence the local sections glue to a global section $s_F\in\Gamma(\mathbb P^n_U,\mathcal O(d))$. Since each $e_j$ is a frame, the nonvanishing locus is computed on charts as $X_{s_F}\cap U_j=\{F^{(j)}\ne0\}$, so $X_{s_F}=D_+(F)$. [F1, F3, algebra]
1.2 The restricted situation. Put $X_U=f^{-1}(U)$ with structure morphism $f_U:X_U\to U$ and $L_U=L|_{X_U}$. By [F2] the morphism $f$ is quasi-compact, so $X_U$ is quasi-compact, and the base change $i_U:X_U\to\mathbb P^n_U$ of $i$ along $U\hookrightarrow S$ is a quasi-compact immersion with $L_U\cong i_U^*\mathcal O_{\mathbb P^n_U}(1)$; this is the situation of [F1] over the affine base $U$. [F1, F2]
1.3 Shrinking a neighbourhood to a standard open. Let $x\in X_U$ and let $W\subseteq X_U$ be an affine open subscheme containing $x$; write $y=i_U(x)$. Since $i_U$ is an immersion, it is a homeomorphism onto the locally closed subset $i_U(X_U)\subseteq\mathbb P^n_U$, so $i_U(W)$ is open in $i_U(X_U)$ and there is an open $V\subseteq\mathbb P^n_U$ with $i_U^{-1}(V)\subseteq W$ and $y\in V$. By [F3] the standard opens $D_+(F)$ with $F$ homogeneous of positive degree form a basis of the topology, so choose such an $F$ with $y\in D_+(F)\subseteq V$. Then $x\in i_U^{-1}(D_+(F))\subseteq i_U^{-1}(V)\subseteq W$. [F2, F3, construct]
2.1 Pulling back the sections. For $F$ homogeneous of positive degree $d$, the pullback $i_U^*s_F$ is a global section of $i_U^*\mathcal O(d)\cong L_U^{d}$, and its nonvanishing locus is $X_{i_U^*s_F}=i_U^{-1}(X_{s_F})=i_U^{-1}(D_+(F))$: the pullback of a section of an invertible sheaf has nonvanishing locus the preimage of the original nonvanishing locus, because a local trivialisation of $\mathcal O(d)$ pulls back to one of $L_U^{d}$ and the corresponding function is the pullback function. [F1, step 1.1, algebra]
3.1 Ampleness at a point. With $F$ as in step 1.3 and $d=\deg F>0$, let $s=i_U^*s_F\in\Gamma(X_U,L_U^{d})$, a section of a positive power of the invertible sheaf $L_U$. Then $x\in X_s=i_U^{-1}(D_+(F))\subseteq W$ by step 2.1, and since $W$ is an affine open subscheme of $X_U$, [F4] gives that $X_s=W\cap X_s$ is an affine open subscheme of $X_U$. So every point of $X_U$ admits a positive power of $L_U$ with a global section whose nonvanishing locus is affine and contains the point. [F4, step 2.1, step 1.3]
4.1 Ampleness over an affine base open. The scheme $X_U$ is quasi-compact by step 1.2, so the criterion [F5] applies to the invertible sheaf $L_U$ on $X_U$ with the sections produced in step 3.1: $L_U$ is ample on $X_U$. [F5, step 1.2, step 3.1]
5.1 Conclusion. Every affine open $U\subseteq S$ has $L|_{f^{-1}(U)}$ ample on $f^{-1}(U)$, so $L$ is $f$-ample by definition; if $S=\operatorname{Spec}R$ is affine this is absolute ampleness of $L$ on $X$. If in addition the immersion $i$ is a closed immersion, the same argument applies verbatim; the only simplification in that case is that the image is closed, so the shrinking step 1.3 may be replaced by choosing a chart $U_i$ containing $i(x)$, whose preimage $X\cap U_i$ is affine as a closed subscheme of the affine scheme $U_i$. If $X=\varnothing$ or $S=\varnothing$ there is no point to test and the conditions of [F5] and of $f$-ampleness are vacuous, so the conclusion holds. The Axiom of Choice [A1] is inherited from the Proj and associated-sheaf constructions; no choice is made here. [A1, F1, F5, step 4.1, cases: empty and affine base]
\qed
