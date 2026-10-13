---
id: lem-volume-form-is-independent-of-the-oriented-frame
kind: lemma
title: "The oriented volume form is independent of the positively oriented inertial frame"
status: published
origin: session
domain: mathematics
dependency_level: 6
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
deps: [def-oriented-minkowski-volume-form, thm-determinant-multiplicative, cor-determinant-of-an-inverse, thm-determinant-is-the-unique-normalized-alternating-multilinear-function, thm-determinant-sign-detects-orientation-change, def-lorentz-form-and-inertia, def-inertial-frame-and-inertial-chart, lem-lorentz-form-has-orthonormal-basis, def-orientation-of-a-finite-dimensional-real-vector-space, def-alternating-k-linear-map, def-determinant-of-a-square-matrix]
dependency_roles:
  def-oriented-minkowski-volume-form: mathematical-premise
  thm-determinant-multiplicative: mathematical-premise
  cor-determinant-of-an-inverse: mathematical-premise
  thm-determinant-is-the-unique-normalized-alternating-multilinear-function: mathematical-premise
  thm-determinant-sign-detects-orientation-change: mathematical-premise
  def-lorentz-form-and-inertia: mathematical-premise
  def-inertial-frame-and-inertial-chart: mathematical-premise
  lem-lorentz-form-has-orthonormal-basis: mathematical-premise
  def-orientation-of-a-finite-dimensional-real-vector-space: mathematical-premise
  def-alternating-k-linear-map: mathematical-premise
  def-determinant-of-a-square-matrix: mathematical-premise
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 1 pp. 2-7 (PDF pp. 9-14)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), sections 2.1-2.2 pp. 25-28 (PDF pp. 26-29); Internet Archive copy of the original https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
---

## Statement

The alternating $4$-linear form $\epsilon$ of
[[def-oriented-minkowski-volume-form]] does not depend on the inertial frame
used to define it. Explicitly, if $(e_0,e_1,e_2,e_3)$ and
$(e'_0,e'_1,e'_2,e'_3)$ are inertial frames with
$e'_a=\sum_bM^b_ae_b$ for the change-of-basis matrix $M$, then $\det M=+1$
(both ordered bases are positively oriented), and the coordinate matrices $X$,
$X'$ of any tuple $(v_0,v_1,v_2,v_3)$ in the two frames satisfy $X'=M^{-1}X$,
so that $\det X'=\det(M^{-1})\det X=\det X$. Consequently
$\epsilon(e_0,e_1,e_2,e_3)=1$ for every inertial frame, $\epsilon$ is the unique
alternating $4$-linear form on $V$ taking the value $1$ on every positively
oriented $\eta$-orthonormal ordered basis, and in every inertial frame the
raised component $\epsilon^{0123}$ equals $-1$.

## Facts & Assumptions

**Given:** Inertial frames $(e_0,e_1,e_2,e_3)$ and $(e'_0,e'_1,e'_2,e'_3)$ of $V$ with $e'_a=\sum_bM^b_ae_b$, and the form $\epsilon$ of [[def-oriented-minkowski-volume-form]].

[L1] $\epsilon(v_0,v_1,v_2,v_3)$ is the determinant of the matrix whose $j$-th column lists the coordinates of $v_j$ in an inertial frame; its components are the permutation symbols with $\epsilon_{0123}=+1$ and $\epsilon^{0123}=\eta^{00}\eta^{11}\eta^{22}\eta^{33}\epsilon_{0123}=-1$, and the inverse metric is $\operatorname{diag}(-1,1,1,1)$ in an inertial frame ([[def-oriented-minkowski-volume-form]]).

[L2] An inertial frame's ordered basis is $\eta$-orthonormal, future and positively oriented, and its chart satisfies the transition law $x'=M^{-1}(x-x(o'))$ for the change-of-basis matrix $M$ ([[def-inertial-frame-and-inertial-chart]]).

[L3] In an $\eta$-orthonormal ordered basis the matrix of $\eta$ is $\operatorname{diag}(-1,1,1,1)$ ([[lem-lorentz-form-has-orthonormal-basis]]).

[L4] Two ordered bases are equivalent, and in the same positive class, when the change-of-basis linear isomorphism $P$ has $\det P>0$; an orientation is one equivalence class and a basis in the chosen class is positively oriented ([[def-orientation-of-a-finite-dimensional-real-vector-space]]).

[L5] An alternating $k$-linear map vanishes whenever two arguments coincide and is linear in each argument separately ([[def-alternating-k-linear-map]]).

[L6] $\det(AB)=\det A\det B$ for square matrices over a commutative ring ([[thm-determinant-multiplicative]]).

[L7] $\det(A^{-1})=(\det A)^{-1}$ for an invertible square matrix ([[cor-determinant-of-an-inverse]]).

[L8] The determinant is the unique column-multilinear, alternating, normalized function on $n\times n$ matrices ([[thm-determinant-is-the-unique-normalized-alternating-multilinear-function]]).

## Proof

1.1 From $e'_a=\sum_bM^b_ae_b$ and the $\eta$-orthonormality of both frames [L2, L3], $\eta_{ab}=\eta(e'_a,e'_b)=\sum_{c,d}M^c_aM^d_b\eta(e_c,e_d)=(M^{\mathsf T}\eta M)_{ab}$, that is, $M^{\mathsf T}\eta M=\eta$ with $\eta=\operatorname{diag}(-1,1,1,1)$; the Leibniz formula of [[def-determinant-of-a-square-matrix]] gives $\det(M^{\mathsf T})=\det M$ by replacing each permutation by its inverse (which has the same sign) and reindexing its finite product. Taking determinants and using [L6] therefore gives $(\det M)^2\det\eta=\det\eta$, and $\det\eta=-1$, so $(\det M)^2=1$. [L2, L3, L6, algebra]

2.1 Both ordered bases lie in the positive class selected by the fixed orientation of $V$ [L2], so the change of basis between them has determinant $>0$ by [L4]; together with $(\det M)^2=1$ from step 1.1 this gives $\det M=+1$. [step 1.1, L2, L4, algebra]

3.1 Let $X=(X^b_j)$ and $X'=(X'^b_j)$ be the coordinate matrices of a tuple $(v_0,v_1,v_2,v_3)$ in the two frames. Substituting $e'_a=\sum_bM^b_ae_b$ into $v_j=\sum_aX'^a_je'_a=\sum_aX^a_je_a$ gives $X^b_j=\sum_aM^b_aX'^a_j$, that is, $X=MX'$, hence $X'=M^{-1}X$ and, by [L6] and [L7], $\det X'=\det(M^{-1})\det X=(\det M)^{-1}\det X=\det X$ because $\det M=1$ by step 2.1. [step 2.1, L6, L7, algebra]

4.1 By step 3.1 the two determinants that [L1] uses to define $\epsilon(v_0,v_1,v_2,v_3)$ in the two frames agree, so $\epsilon$ does not depend on the inertial frame; in particular the coordinate matrix of the frame $(e_0,e_1,e_2,e_3)$ in the frame $(e'_0,e'_1,e'_2,e'_3)$ is $M^{-1}$, so $\epsilon(e_0,e_1,e_2,e_3)=\det(M^{-1})=1$ by [L7] and step 2.1. The same determinant argument applies to any positively oriented $\eta$-orthonormal ordered basis, including one with past time axis: steps 1.1 through 3.1 use orthonormality and positive orientation, but not the future condition. Hence $\epsilon$ has the asserted normalization on every such basis. [step 2.1, step 3.1, L1, L7, algebra]

5.1 The raised component: in an inertial frame [L3] gives $\eta^{aa}=\operatorname{diag}(-1,1,1,1)$ and $\epsilon_{0123}=1$ by [L1] and step 4.1, so $\epsilon^{0123}=(-1)(+1)(+1)(+1)\cdot1=-1$; since $\epsilon$ is frame independent by step 4.1, this value is the same in every inertial frame. [step 4.1, L1, L3, algebra]

6.1 For uniqueness, let $\epsilon'$ be any alternating $4$-linear form on $V$ with $\epsilon'(f_0,f_1,f_2,f_3)=1$ for every positively oriented $\eta$-orthonormal ordered basis. Fix an inertial frame $(e_a)$ and a tuple $(v_0,v_1,v_2,v_3)$ with coordinate matrix $X$. Expanding each $v_j=\sum_aX^a_je_a$ and using multilinearity and alternation [L5] together with the normalization and [L8], $\epsilon'(v_0,v_1,v_2,v_3)=\det(X)\epsilon'(e_0,e_1,e_2,e_3)=\det X$, which equals $\epsilon(v_0,v_1,v_2,v_3)$ by [L1]. Hence $\epsilon$ is the unique alternating $4$-linear form normalized to $1$ on every positively oriented $\eta$-orthonormal ordered basis, which completes the proof of all the displayed claims. [step 4.1, step 5.1, L1, L2, L5, L8, algebra] ∎
