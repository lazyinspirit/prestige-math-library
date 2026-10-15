---
id: lem-emg-observer-field-decomposition
kind: lemma
title: "Observer electric/magnetic reconstruction and invariants"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 2
deps: [def-countable-choice, def-emg-lorentzian-forms, def-gr-inverse-metric-and-musical-isomorphisms, def-gr-observer-and-rest-space, lem-emg-lorentz-hodge-calculus, lem-gr-observer-projection-decomposition, prop-differential-forms-form-a-graded-commutative-algebra]
dependency_roles:
  def-countable-choice: mathematical-premise
  def-emg-lorentzian-forms: mathematical-premise
  def-gr-inverse-metric-and-musical-isomorphisms: mathematical-premise
  def-gr-observer-and-rest-space: mathematical-premise
  lem-emg-lorentz-hodge-calculus: mathematical-premise
  lem-gr-observer-projection-decomposition: mathematical-premise
  prop-differential-forms-form-a-graded-commutative-algebra: mathematical-premise
proof_strategy: direct
sources:
  references:
    - title: "David Tong, General Relativity, Cambridge Part III lecture notes, section 2.4.2, The Electromagnetic Field, equation (2.87), and section 3.1.3, The Hodge Dual"
      url: "https://www.damtp.cam.ac.uk/user/tong/gr/grhtml/S2.html"
      locator: "Section 2.4.2, equation (2.87): field-strength components in a Minkowski frame. The curved observer decomposition and its invariants are proved locally."
    - title: "H. S. Reall, Part III General Relativity, Cambridge, October 12 2022 revision, sections 2.2 and 8.5, equations (2.9)-(2.10) and (8.55)-(8.56)"
      url: "https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
      locator: "Section 2.2, equations (2.9)-(2.10): Lorentzian orthonormal bases; section 8.5, equations (8.55)-(8.56): oriented Hodge star and its Lorentzian square."
provenance:
  statement: ai-altered
  proof: ai-altered
---

## Statement

Let $U\subseteq M$ be an open set with smooth observer congruence $n$, let $F$ be a smooth real two-form on $U$, and let $c>0$ be the coordinate conversion parameter of [[def-emg-lorentzian-forms]]. Define covectors

$$E_a:=cF_{ab}n^b,\qquad B_a:=-({\star_gF})_{ab}n^b.$$

Here $c$ is the positive coordinate-conversion parameter of [[def-emg-lorentzian-forms]], with SI unit $\mathrm m\,\mathrm s^{-1}$ in its length-coordinate convention. The names electric and magnetic distinguish these two covectors; for arbitrary mathematical $F$ no physical field unit or measurement is assigned.

They annihilate $n$. On the rest covector space, use the positive inner product induced by $g^{-1}$ and write $\langle E,B\rangle_n:=g^{-1}(E,B)$. Then

$$F=n^\flat\wedge E/c+\star_g(n^\flat\wedge B),$$

$$F_{ab}F^{ab}=2\bigl(\langle B,B\rangle_n-\langle E,E\rangle_n/c^2\bigr),\qquad F\wedge F=-\frac{2}{c}\langle E,B\rangle_n\,\mathrm{vol}_g.$$

Equivalently, in any positively oriented future tetrad with $E_0=n$, and with $\epsilon_{123}=+1$ in its oriented spatial triad, the components satisfy $F_{0i}=-E_i/c$ and $F_{ij}=\epsilon_{ijk}B_k$. These are pointwise mathematical decompositions of an arbitrary two-form; no Maxwell equation or physical observation is assumed.

## Facts & Assumptions

**Given:** An oriented, time-oriented Lorentzian four-manifold, a smooth observer congruence $n$, a smooth two-form $F$, and a positive scalar $c$.

[F1] Every point in the domain of $n$ has a neighborhood with a positively oriented $n$-adapted orthonormal tetrad. The local assertion does not give a global tetrad or an orthogonal foliation. ([[def-emg-lorentzian-forms]], [[def-gr-observer-and-rest-space]], [[lem-gr-observer-projection-decomposition]])

[F2] In a positively oriented orthonormal coframe with timelike member first, $\star_ge^{01}=-e^{23}$ and $\star_ge^{23}=e^{01}$; for two-forms $({\star_gF})_{ab}=\frac12(\mathrm{vol}_g)_{abcd}F^{cd}$ and $\star_g^2=-\operatorname{id}$. ([[lem-emg-lorentz-hodge-calculus]])

[F3] The musical isomorphisms identify vectors and covectors by the nondegenerate metric, and the inverse metric raises the indices in $F^{ab}$. ([[def-gr-inverse-metric-and-musical-isomorphisms]])

[F4] Wedges of two-forms commute, and the wedge product is associative and graded-commutative. ([[prop-differential-forms-form-a-graded-commutative-algebra]])

[A1] The smooth geometric background inherits $\mathrm{AC}_\omega$ from [[def-countable-choice]]. The finite component argument uses no full Axiom of Choice.

## Proof

1.1 Antisymmetry of $F$ gives $E_an^a=cF_{ab}n^an^b=0$. The Hodge dual is also a two-form, so $B_an^a=-({\star_gF})_{ab}n^an^b=0$. Thus both covectors restrict to the positive rest covector space. [given, F2, algebra]

2.1 Fix a point and use [F1], on the inherited background [A1], to choose a positively oriented orthonormal coframe $(e^0,e^1,e^2,e^3)$ with $n^\flat=-e^0$. The definition gives $F_{0i}=-E_i/c$. For $i=1,2,3$, the component formula in [F2] gives $({\star_gF})_{10}=-F_{23}$, $({\star_gF})_{20}=-F_{31}$, and $({\star_gF})_{30}=-F_{12}$; therefore $B_1=F_{23}$, $B_2=F_{31}$, and $B_3=F_{12}$, equivalently $F_{ij}=\epsilon_{ijk}B_k$. The basis formula in [F2] gives $\star_g(-e^0\wedge B)=B_1e^2\wedge e^3+B_2e^3\wedge e^1+B_3e^1\wedge e^2$. Together with $n^\flat\wedge E/c=-\sum_i(E_i/c)e^0\wedge e^i$, this matches all six independent components of $F$ and proves $F=n^\flat\wedge E/c+\star_g(n^\flat\wedge B)$. [step 1.1, F1, F2, F3, A1, algebra]

3.1 In this coframe, $F^{0i}=-F_{0i}=E_i/c$ and $F^{ij}=F_{ij}$. Antisymmetry counts each independent pair twice, so $F_{ab}F^{ab}=2\sum_{i<j}F_{ij}^2+2\sum_iF_{0i}F^{0i}=2\sum_iB_i^2-\frac{2}{c^2}\sum_iE_i^2$. The spatial sums are precisely the squared norms on the positive rest space, proving the first invariant. [step 2.1, F3, algebra]

4.1 Write $F=-\sum_i(E_i/c)e^0\wedge e^i+B_1e^{23}+B_2e^{31}+B_3e^{12}$. The pure electric and pure magnetic terms wedge to zero. By [F4], each matching electric/magnetic pair occurs twice and contributes $-2E_iB_i\,\mathrm{vol}_g/c$. Therefore $F\wedge F=-(2/c)\langle E,B\rangle_n\mathrm{vol}_g$. Both invariant identities are tensorial, so the local calculation holds at every point of $U$. [step 2.1, F1, F4, algebra] ∎
