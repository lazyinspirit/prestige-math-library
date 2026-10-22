---
id: lem-gr-fx-scalar-dominant-energy
kind: lemma
title: "Dominant energy inequality for the real scalar test tensor"
status: published
origin: pipeline
domain: mathematics
library: physics
dependency_level: 1
physical_scope: "A pointwise algebraic inequality for the mathematical test-scalar tensor on a Lorentzian tangent space; it does not assert that the tensor is coupled matter."
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
deps:
  - def-countable-choice
  - def-causal-classification-of-lorentz-vectors
  - lem-gr-future-causal-classification-by-a-timelike-field
  - def-gr-fx-scalar-wave-stress
  - def-gr-observer-and-rest-space
  - lem-gr-observer-projection-decomposition
  - thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces
dependency_roles:
  def-countable-choice: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  lem-gr-future-causal-classification-by-a-timelike-field: mathematical-premise
  def-gr-fx-scalar-wave-stress: mathematical-premise
  def-gr-observer-and-rest-space: mathematical-premise
  lem-gr-observer-projection-decomposition: mathematical-premise
  thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces: mathematical-premise
sources:
  references:
    - title: "M. Dafermos and I. Rodnianski, Lectures on black holes and linear waves, arXiv:0811.0354v1 (2008), §3.2.2 and Appendix D references, PDF pp. 29–30"
      url: "https://arxiv.org/pdf/0811.0354"
    - title: "H. S. Reall, Black Holes (Part III lecture notes, 15 March 2024), §9.1, PDF pp. 113–114"
      url: "https://www.damtp.cam.ac.uk/user/hsr1000/black_holes_lectures_2024.pdf"
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
---

## Statement

Assume $\mathrm{AC}_\omega$. At a point $p$ of a time-oriented Lorentzian
four-manifold, let $n$ be a future-directed unit timelike vector, let
$X\in T_pM$ be future causal, and let $\psi$ be a smooth real scalar. Put
$\ell:=\sharp_g(d\psi)$, $a:=d\psi(n)$,
$b:=h_n(\ell)\in n^\perp$, and $|b|^2:=g(b,b)$, where $h_n$ is the spatial
projection relative to $n$. Then

$$Q(n,n)=\frac12\bigl(a^2+|b|^2\bigr),\qquad Q(n,X)\geq0.$$

## Statement references

[[def-gr-fx-scalar-wave-stress]]

[[def-gr-observer-and-rest-space]]

[[lem-gr-observer-projection-decomposition]]

## Facts & Assumptions

**Given:** A time-oriented Lorentzian tangent space of signature $(-,+,+,+)$,
a future unit timelike vector $n$, a future causal vector $X$, and $d\psi$.

[F1] [[def-gr-fx-scalar-wave-stress]]: $Q(u,v)=d\psi(u)d\psi(v)-\tfrac12g(u,v)g^{-1}(d\psi,d\psi)$.

[F2] [[def-gr-observer-and-rest-space]]: $g(n,n)=-1$, $n^\perp$ is the rest space, and $h_n(v)=v+g(n,v)n$.

[F3] [[lem-gr-observer-projection-decomposition]]: $n^\perp$ is positive definite and $h_n$ is the orthogonal projection onto it.

[F4] [[def-causal-classification-of-lorentz-vectors]]: causal vectors are nonzero and satisfy $g(X,X)\leq0$. By [[lem-gr-future-causal-classification-by-a-timelike-field]], future timelike vectors form the connected component $C_p^+$ containing $N_p$, and future causal vectors are exactly $\operatorname{cl}(C_p^+)\setminus\{0\}$. In particular $n\in C_p^+$ and $X\in\operatorname{cl}(C_p^+)$.

[F5] [[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]]: in the positive-definite real inner product space $n^\perp$, $|g(b,Y)|\leq |b|\,|Y|$.

[A1] $\mathrm{AC}_\omega$ is the only choice principle assumed in the smooth tangent-bundle conventions used by [F2] and [F3] ([[def-countable-choice]]).

## Proof

1.1 Set $\ell=\sharp_g(d\psi)$ and $a=g(\ell,n)$. Then
$b=h_n(\ell)=\ell+a n$, so $\ell=b-a n$ and $g(b,n)=0$ by [F2]–[F3]. It follows that $g^{-1}(d\psi,d\psi)=g(\ell,\ell)=-a^2+|b|^2$. Substitution into [F1], using $g(n,n)=-1$, gives $Q(n,n)=a^2+\tfrac12(-a^2+|b|^2)=\tfrac12(a^2+|b|^2)$. [given, A1, F1, F2, F3, algebra]

1.2 Let $\alpha:=-g(n,X)$ and $Y:=X-\alpha n$. The continuous linear function $v\mapsto g(n,v)$ never vanishes on the timelike component $C_p^+$: a timelike vector in $n^\perp$ would contradict its positive definiteness in [F3]. Since $C_p^+$ is connected and contains $n$, where this function is $-1$, it is negative throughout $C_p^+$. Continuity makes it nonpositive on its closure, so [F4] gives $\alpha\geq0$. By [F2], $Y=h_n(X)\in n^\perp$. Since $g(X,X)=-\alpha^2+|Y|^2\leq0$, one has $|Y|\leq\alpha$. [given, F2, F3, F4, algebra]

2.1 By [F1] and step 1.1,
$Q(n,X)=\alpha a^2+a\,g(b,Y)+\tfrac{\alpha}{2}(-a^2+|b|^2)=\tfrac{\alpha}{2}(a^2+|b|^2)+a\,g(b,Y)$. [F1, step 1.1, step 1.2, algebra]

3.1 Apply [F5] and $|Y|\leq\alpha$ from step 1.2:
$Q(n,X)\geq\tfrac{\alpha}{2}(a^2+|b|^2)-\alpha|a||b|=\tfrac{\alpha}{2}(|a|-|b|)^2\geq0$. If $\alpha=0$, step 1.2 gives $Y=0$ and hence $X=0$, for which $Q(n,X)=0$ as well. This proves the causal flux inequality, including the null case. [F5, step 1.2, step 2.1, algebra] ∎
