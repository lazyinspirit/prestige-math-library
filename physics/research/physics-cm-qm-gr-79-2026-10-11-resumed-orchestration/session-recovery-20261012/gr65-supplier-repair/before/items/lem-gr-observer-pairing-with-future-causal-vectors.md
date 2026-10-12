---
id: lem-gr-observer-pairing-with-future-causal-vectors
kind: lemma
title: "Pairing of an observer with future causal vectors"
status: draft
origin: session
domain: mathematics
dependency_level: 4
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-observer-and-rest-space, lem-gr-observer-projection-decomposition, def-gr-smooth-lorentzian-objects, lem-lorentz-form-has-orthonormal-basis, lem-timelike-cone-has-two-convex-components, lem-gr-future-causal-classification-by-a-timelike-field, def-time-orientation-and-future-causal-sets, def-causal-classification-of-lorentz-vectors, def-euclidean-inner-product, thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]
dependency_roles:
  def-gr-observer-and-rest-space: mathematical-premise
  lem-gr-observer-projection-decomposition: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  lem-lorentz-form-has-orthonormal-basis: mathematical-premise
  lem-timelike-cone-has-two-convex-components: mathematical-premise
  lem-gr-future-causal-classification-by-a-timelike-field: mathematical-premise
  def-time-orientation-and-future-causal-sets: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces: mathematical-premise
sources:
  references:
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), section 2.2 Lorentzian signature: causal vectors at a point fall into two disconnected sets (the light cone), printed pp. 26-28 (PDF pp. 27-29)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 1 'the light cone' (printed p. 7; PDF p. 14) and the classification of vectors as timelike, lightlike or spacelike (printed pp. 15-16; PDF pp. 22-23)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
verification:
  precheck: pass
---

## Statement

Let $(M,g,N)$ be a time-oriented smooth Lorentzian four-manifold, let
$p\in M$, and let $n$ be an observer at $p$
([[def-gr-observer-and-rest-space]]). For $w\in T_pM$ write
$h=h_n$ and $\gamma(w):=-g_p(n,w)$.

1. If $w$ is nonzero future causal, then $\gamma(w)>0$.
2. If $w$ is future unit timelike, then $\gamma(w)\ge1$, with
   $\gamma(w)=1$ if and only if $w=n$, and
   $g_p(h(w),h(w))=\gamma(w)^2-1$.
3. If $w$ is unit timelike, then $w$ is future-directed if and only if
   $g_p(n,w)<0$, and past-directed if and only if $g_p(n,w)>0$; in particular
   $g_p(n,w)\neq0$ for such $w$.

## Facts & Assumptions

**Given:** A time-oriented smooth Lorentzian four-manifold $(M,g,N)$, a point $p\in M$, an observer $n$ at $p$, and a vector $w\in T_pM$.

[L1] An observer at $p$ is a vector $n$ with $g_p(n,n)=-1$ and $g_p(n,N_p)<0$; units mean $g_p(n,n)=-1$, so a future unit timelike vector $w$ is exactly a future-directed vector with $g_p(w,w)=-1$ ([[def-gr-observer-and-rest-space]], [[def-causal-classification-of-lorentz-vectors]]).

[L2] The projection identity $g_p(h(v),h(v'))=g_p(v,v')+g_p(v,n)g_p(n,v')$ holds for all $v,v'$, $\ker h=\mathbb Rn$, and $g_p$ is positive definite on $n^{\perp}=\operatorname{im}h$ ([[lem-gr-observer-projection-decomposition]]).

[L3] There are ordered $g_p$-orthonormal bases of $T_pM$ ([[lem-lorentz-form-has-orthonormal-basis]]).

[L4] In an orthonormal ordered basis the timelike set is $T=T_+\cup T_-$ with $T_+=\{v:v^0>\lvert v_{\mathrm{vec}}\rvert\}$ and $T_-=\{v:v^0<-\lvert v_{\mathrm{vec}}\rvert\}$ the two components, in some order in every orthonormal basis ([[lem-timelike-cone-has-two-convex-components]]).

[L5] In the time-oriented manifold, $C_p^+=\{v:g_p(v,v)<0,g_p(v,N_p)<0\}$ and $C_p^-=\{v:g_p(v,v)<0,g_p(v,N_p)>0\}$ are the two components of the timelike set; a nonzero causal vector is future-directed exactly when it lies in $\operatorname{cl}(C_p^+)$, and $g_p(v,N_p)\neq0$ for every nonzero causal $v$ ([[lem-gr-future-causal-classification-by-a-timelike-field]], [[def-time-orientation-and-future-causal-sets]]).

[L6] The Euclidean inner product of $x,y\in\mathbb R^3$ satisfies $\lvert\langle x,y\rangle\rvert\le\lVert x\rVert_2\lVert y\rVert_2$ ([[def-euclidean-inner-product]], [[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]]).

## Proof

**Proof technique:** direct.

1.1 By [L3] choose an ordered orthonormal basis $(f_0,f_1,f_2,f_3)$; replacing $f_0$ by $-f_0$ if necessary we may assume $g_p(f_0,N_p)<0$, so $f_0$ is future-directed and, by [L4] and [L5] as in the rest-space lemma, the future timelike component is $C_p^+=T_+=\{v:v^0>\lvert v_{\mathrm{vec}}\rvert\}$ and the future causal vectors are the nonzero points of $\operatorname{cl}(T_+)=\{v:v^0\ge\lvert v_{\mathrm{vec}}\rvert\}$. Write $n=n^0f_0+n_{\mathrm{vec}}$ and $w=w^0f_0+w_{\mathrm{vec}}$; then $n^0>\lvert n_{\mathrm{vec}}\rvert\ge0$, $(n^0)^2-\lvert n_{\mathrm{vec}}\rvert^2=1$, and for nonzero future causal $w$ we have $w^0\ge\lvert w_{\mathrm{vec}}\rvert$ with $w^0>0$ (because $w\neq0$ forces either $\lvert w_{\mathrm{vec}}\rvert>0$ or $w^0>0\ge\lvert w_{\mathrm{vec}}\rvert$). [L3, L4, L5, given, algebra]

2.1 With the coordinates of step 1.1, $g_p(n,w)=-n^0w^0+n_{\mathrm{vec}}\cdot w_{\mathrm{vec}}$, so by [L6] $\gamma(w)=n^0w^0-n_{\mathrm{vec}}\cdot w_{\mathrm{vec}}\ge n^0w^0-\lvert n_{\mathrm{vec}}\rvert\lvert w_{\mathrm{vec}}\rvert\ge w^0\bigl(n^0-\lvert n_{\mathrm{vec}}\rvert\bigr)$. Since $n^0-\lvert n_{\mathrm{vec}}\rvert=(n^0+\lvert n_{\mathrm{vec}}\rvert)^{-1}>0$ and $w^0>0$, we get $\gamma(w)>0$; this proves claim 1. [step 1.1, L6, algebra]

3.1 Let $w$ be future unit timelike. By claim 1, $\gamma(w)>0$; by [L2], $g_p(h(w),h(w))=g_p(w,w)+\gamma(w)^2=-1+\gamma(w)^2$, and the left side is $\ge0$ because $h(w)\in n^{\perp}$ and $g_p$ is positive definite there, so $\gamma(w)^2\ge1$ and hence $\gamma(w)\ge1$. Equality holds exactly when $h(w)=0$, i.e. $w\in\ker h=\mathbb Rn$ by [L2]; a future unit timelike vector proportional to $n$ must equal $n$. This proves claim 2. [step 2.1, L2, given, algebra]

3.2 Let $w$ be unit timelike. It is timelike and nonzero, so by [L5] it is future-directed or past-directed according to membership in $C_p^+$ or $C_p^-$, and $g_p(w,N_p)\neq0$. If $w$ is future-directed, step 2.1 applied to $w$ gives $-g_p(n,w)>0$, i.e. $g_p(n,w)<0$. If $w$ is past-directed, then $-w$ is future unit timelike, so step 2.1 gives $-g_p(n,-w)=g_p(n,w)>0$. Conversely, if $g_p(n,w)<0$ and $w$ were past-directed, the previous case would give $g_p(n,w)>0$, a contradiction; and if $g_p(n,w)>0$ and $w$ were future-directed, the first case would give $g_p(n,w)<0$, a contradiction. Hence $w$ is future-directed exactly when $g_p(n,w)<0$, and past-directed exactly when $g_p(n,w)>0$; in particular $g_p(n,w)\neq0$. This proves claim 3. [step 2.1, L1, L5, algebra]

4.1 Claims 1, 2 and 3 are steps 2.1, 3.1 and 3.2 respectively. [step 2.1, step 3.1, step 3.2] ∎
