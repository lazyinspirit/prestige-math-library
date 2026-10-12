---
id: lem-gr-observer-projection-decomposition
kind: lemma
title: "The observer rest-space decomposition and the spatial projection"
status: draft
origin: session
domain: mathematics
dependency_level: 3
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-observer-and-rest-space, def-gr-smooth-lorentzian-objects, lem-lorentz-form-has-orthonormal-basis, lem-timelike-cone-has-two-convex-components, lem-gr-future-causal-classification-by-a-timelike-field, def-time-orientation-and-future-causal-sets, def-lorentz-orthogonality-and-orthogonal-complement, def-causal-classification-of-lorentz-vectors, thm-unique-coordinates-with-respect-to-an-ordered-basis, def-euclidean-inner-product, thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]
dependency_roles:
  def-gr-observer-and-rest-space: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  lem-lorentz-form-has-orthonormal-basis: mathematical-premise
  lem-timelike-cone-has-two-convex-components: mathematical-premise
  lem-gr-future-causal-classification-by-a-timelike-field: mathematical-premise
  def-time-orientation-and-future-causal-sets: mathematical-premise
  def-lorentz-orthogonality-and-orthogonal-complement: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  thm-unique-coordinates-with-respect-to-an-ordered-basis: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces: mathematical-premise
sources:
  references:
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), section 2.2 Lorentzian signature: orthonormal bases at a point, the causal classification and the two disconnected sets of causal vectors, with the exercise that a vector orthogonal to a timelike one is spacelike, printed pp. 26-28 (PDF pp. 27-29)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 2 'the metric again' and 'canonical form of the metric' on orthogonal complements and canonical forms, printed pp. 47-50 (PDF pp. 54-57)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), sections 3.1.2-3.1.3: Lorentzian manifolds with timelike, null and spacelike vectors and the light cone, printed pp. 93-95 (PDF pp. 100-102)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
    - title: "E. Gourgoulhon, 3+1 Formalism and Bases of Numerical Relativity, arXiv:gr-qc/0703035 (2007), Ch. 2, section 2.4.1: the orthogonal decomposition T_pM = T_p(Sigma) + Vect(n) and the orthogonal projector gamma(v) = v + (n.v)n, printed pp. 29-31"
      url: "https://arxiv.org/pdf/gr-qc/0703035"
verification:
  precheck: pass
---

## Statement

Let $(M,g,N)$ be a time-oriented smooth Lorentzian four-manifold, let
$p\in M$, and let $n$ be an observer at $p$
([[def-gr-observer-and-rest-space]]). Write $h:=h_n$,
$n^{\perp}=\{v\in T_pM:g_p(v,n)=0\}$
([[def-lorentz-orthogonality-and-orthogonal-complement]]) and
$\mathbb Rn=\{\lambda n:\lambda\in\mathbb R\}$. Then:

1. $h:T_pM\to T_pM$ is linear, $h(n)=0$, $h(v)=v$ for every $v\in n^{\perp}$
   and $h\circ h=h$; its kernel is $\ker h=\mathbb Rn$, its image is
   $\operatorname{im}h=n^{\perp}$, and
   $T_pM=\mathbb Rn\oplus n^{\perp}$ is an orthogonal direct sum: every
   $v\in T_pM$ has the unique decomposition

   $$v=-g_p(v,n)\,n+h(v),$$

   in which $-g_p(v,n)n\in\mathbb Rn$ and $h(v)\in n^{\perp}$.
2. For all $v,w\in T_pM$ the **projection identity**

   $$g_p(h(v),h(w))=g_p(v,w)+g_p(v,n)g_p(n,w)$$

   holds; in particular $g_p(h(v),h(v))=g_p(v,v)+g_p(v,n)^2$.
3. $\dim n^{\perp}=3$ and the restriction of $g_p$ to $n^{\perp}$ is positive
   definite.

## Facts & Assumptions

**Given:** A time-oriented smooth Lorentzian four-manifold $(M,g,N)$, a point $p\in M$ and an observer $n$ at $p$.

[L1] An observer at $p$ is a vector $n\in T_pM$ with $g_p(n,n)=-1$ and $g_p(n,N_p)<0$, and the spatial projection of an observer is $h_n(v)=v+g_p(n,v)n$ ([[def-gr-observer-and-rest-space]]).

[L2] There are ordered $g_p$-orthonormal bases of $T_pM$, i.e. ordered bases $(f_0,f_1,f_2,f_3)$ with $g_p(f_a,f_b)=\operatorname{diag}(-1,1,1,1)_{ab}$ ([[lem-lorentz-form-has-orthonormal-basis]]).

[L3] In an $\eta$-orthonormal ordered basis of a Lorentz vector space, the coordinate expression is $\eta(v,v)=-(v^0)^2+\lvert v_{\mathrm{vec}}\rvert^2$ with $v=v^0e_0+v^1e_1+v^2e_2+v^3e_3$, the timelike set is $T=T_+\cup T_-$ with $T_+=\{v:v^0>\lvert v_{\mathrm{vec}}\rvert\}$ and $T_-=\{v:v^0<-\lvert v_{\mathrm{vec}}\rvert\}$ the two connected components, and these descriptions coincide with the two components in some order in every orthonormal basis ([[lem-timelike-cone-has-two-convex-components]]).

[L4] In the time-oriented manifold, $C_p^+=\{v\in T_pM:g_p(v,v)<0\text{ and }g_p(v,N_p)<0\}$ and $C_p^-=\{v\in T_pM:g_p(v,v)<0\text{ and }g_p(v,N_p)>0\}$; a nonzero causal vector is future-directed exactly when it lies in $\operatorname{cl}(C_p^+)$, and $g_p(v,N_p)\neq0$ for every nonzero causal $v$ ([[lem-gr-future-causal-classification-by-a-timelike-field]]).

[L5] A vector is timelike when $g_p(v,v)<0$, null when $v\neq0$ and $g_p(v,v)=0$, spacelike when $g_p(v,v)>0$, and causal when it is timelike or null ([[def-causal-classification-of-lorentz-vectors]]).

[L6] Every vector of a finite-dimensional space has a unique coordinate list in an ordered basis ([[thm-unique-coordinates-with-respect-to-an-ordered-basis]]).

[L7] The Euclidean inner product of $x,y\in\mathbb R^3$ is $\langle x,y\rangle=\sum_{i=1}^3x_iy_i$ with norm $\lVert x\rVert_2$, and $\lvert\langle x,y\rangle\rvert\le\lVert x\rVert_2\lVert y\rVert_2$ ([[def-euclidean-inner-product]], [[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]]).

## Proof

**Proof technique:** direct.

1.1 The map $h$ is linear because $v\mapsto g_p(n,v)$ is linear and $n$ is fixed. Moreover $h(n)=n+g_p(n,n)n=n-n=0$, and if $v\in n^{\perp}$ then $g_p(n,v)=0$ and $h(v)=v$; hence for every $v$ one has $g_p(h(v),n)=g_p(v,n)+g_p(v,n)g_p(n,n)=g_p(v,n)-g_p(v,n)=0$, so $h(v)\in n^{\perp}$, and then $h(h(v))=h(v)+g_p(h(v),n)n=h(v)$, that is, $h\circ h=h$. [L1, algebra]

1.2 By [L2] choose an ordered $g_p$-orthonormal basis $(f_0,f_1,f_2,f_3)$. The vector $f_0$ is timelike, and [L4] gives $g_p(f_0,N_p)\neq0$; replacing $f_0$ by $-f_0$ if necessary, which preserves orthonormality, we may assume $g_p(f_0,N_p)<0$, so that $f_0\in C_p^+$ and $f_0$ is future-directed. By [L3] the two components of the timelike set are $T_+=\{v:v^0>\lvert v_{\mathrm{vec}}\rvert\}$ and $T_-=\{v:v^0<-\lvert v_{\mathrm{vec}}\rvert\}$ in this basis, in some order; since $f_0$ has coordinates $(1,0,0,0)\in T_+$ and lies in $C_p^+$, the identification is $C_p^+=T_+$. Writing $n=n^0f_0+n^1f_1+n^2f_2+n^3f_3$ by [L6] and using that $n$ is future unit timelike, we get $n^0>\lvert n_{\mathrm{vec}}\rvert\ge0$ and $(n^0)^2-\lvert n_{\mathrm{vec}}\rvert^2=1$. [L2, L3, L4, L5, L6, given]

2.1 From $h(v)=0$ we get $v=-g_p(v,n)n\in\mathbb Rn$, and conversely $h(n)=0$, so $\ker h=\mathbb Rn$; since $h$ fixes every vector of $n^{\perp}$ pointwise and its image lies in $n^{\perp}$, its image is exactly $\operatorname{im}h=n^{\perp}$. [step 1.1, L1, algebra]

2.2 Using bilinearity and symmetry of $g_p$, $g_p(h(v),h(w))=g_p(v+g_p(n,v)n,\,w+g_p(n,w)n)=g_p(v,w)+g_p(n,w)g_p(v,n)+g_p(v,n)g_p(n,w)+g_p(v,n)g_p(n,w)g_p(n,n)$, and the last term is $-g_p(v,n)g_p(n,w)$ because $g_p(n,n)=-1$; hence $g_p(h(v),h(w))=g_p(v,w)+g_p(v,n)g_p(n,w)$. Taking $w=v$ gives the stated special case. [step 1.1, L1, algebra]

2.3 Let $v\in n^{\perp}$, with coordinates $v=v^0f_0+v_{\mathrm{vec}}$ as in step 1.2. Since $0=g_p(v,n)=-v^0n^0+v_{\mathrm{vec}}\cdot n_{\mathrm{vec}}$ and $n^0\ge1>0$ by step 1.2, we have $v^0=(v_{\mathrm{vec}}\cdot n_{\mathrm{vec}})/n^0$, and by [L7] $\lvert v_{\mathrm{vec}}\cdot n_{\mathrm{vec}}\rvert\le\lvert v_{\mathrm{vec}}\rvert\,\lvert n_{\mathrm{vec}}\rvert$; therefore $g_p(v,v)=-(v^0)^2+\lvert v_{\mathrm{vec}}\rvert^2\ge\lvert v_{\mathrm{vec}}\rvert^2(1-\lvert n_{\mathrm{vec}}\rvert^2/(n^0)^2)=\lvert v_{\mathrm{vec}}\rvert^2\bigl((n^0)^2-\lvert n_{\mathrm{vec}}\rvert^2\bigr)/(n^0)^2=\lvert v_{\mathrm{vec}}\rvert^2/(n^0)^2\ge0$. Equality forces $\lvert v_{\mathrm{vec}}\rvert=0$ and then $v^0=0$, that is, $v=0$. Hence $g_p$ is positive definite on $n^{\perp}$. [step 1.2, L7, algebra]

3.1 The displayed formula $v=-g_p(v,n)n+h(v)$ is a rearrangement of the definition of $h$, and the two summands lie in $\mathbb Rn$ and $n^{\perp}$. If $v=\lambda n+w$ with $\lambda\in\mathbb R$ and $w\in n^{\perp}$, then applying $g_p(\cdot,n)$ gives $g_p(v,n)=-\lambda$, so $\lambda=-g_p(v,n)$ and $w=v+g_p(v,n)n=h(v)$; hence the decomposition is unique and $T_pM=\mathbb Rn\oplus n^{\perp}$. It is orthogonal because $g_p(\lambda n,w)=\lambda g_p(n,w)=0$ for $w\in n^{\perp}$, and $\mathbb Rn\cap n^{\perp}=\{0\}$ since $g_p(\lambda n,n)=-\lambda$ vanishes only for $\lambda=0$. [step 2.1, L1, algebra]

3.2 The vectors $h(f_1),h(f_2),h(f_3)$ lie in $n^{\perp}$ by step 1.1, and they span it: if $v\in n^{\perp}$, writing $v=\sum_av^af_a$ and using $h(v)=v$ and $h(f_0)=0$ gives $v=v^1h(f_1)+v^2h(f_2)+v^3h(f_3)$. They are linearly independent: if $\sum_ic^ih(f_i)=0$, then $h\bigl(\sum_ic^if_i\bigr)=0$, so $\sum_ic^if_i\in\ker h=\mathbb Rn$ by step 2.1; but $\sum_ic^if_i$ lies in $\operatorname{span}(f_1,f_2,f_3)$, which meets $\mathbb Rn$ only at $0$ because in the coordinates of step 1.2 a vector of $\mathbb Rn$ has first coordinate $\lambda n^0$ and $\lambda n^0=0$ forces $\lambda=0$ as $n^0\neq0$. Hence $\sum_ic^if_i=0$, so all $c^i=0$ by uniqueness of coordinates [L6]. Therefore $(h(f_1),h(f_2),h(f_3))$ is a basis of $n^{\perp}$ and $\dim n^{\perp}=3$, which together with step 2.3 proves claim 3. [step 1.1, step 2.1, step 1.2, L6, algebra]

4.1 Claims 1 and 2 are steps 1.1, 2.1, 3.1 and 2.2, and claim 3 is steps 2.3 and 3.2. [step 1.1, step 2.1, step 3.1, step 2.2, step 2.3, step 3.2] ∎
