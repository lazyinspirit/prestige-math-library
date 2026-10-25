---
id: thm-qftx-yang-mills-selfdual-action-bound
kind: theorem
title: Euclidean Yang–Mills self-dual action bound
status: "published"
origin: session
dependency_level: 3
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
axiom_base: "ZF + full AC, inherited through the instanton-number definition and its Chern–Weil comparison."
deps:
  - def-qftx-instanton-number-and-asd-sector
  - lem-qftx-principal-curvature-cartan-bianchi
  - def-axiom-of-choice
  - lem-qftx-hodge-star-decomposition-four-dimensions
dependency_roles:
  def-qftx-instanton-number-and-asd-sector: mathematical-premise
  lem-qftx-principal-curvature-cartan-bianchi: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  lem-qftx-hodge-star-decomposition-four-dimensions: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "A. A. Belavin, A. M. Polyakov, A. S. Schwartz, and Yu. S. Tyupkin, Pseudoparticle Solutions of the Yang–Mills Equations"
      url: https://strings.itp.ac.ru/Papers/belavin1975.pdf
      locator: "Printed pp. 85–86, equations (3)–(10): the charge identity and action lower bound in the authors' trace convention."
    - title: "David Tong, TASI Lectures on Solitons: Instantons, Monopoles, Vortices and Kinks"
      url: https://www.damtp.cam.ac.uk/user/tong/tasi/instanton.pdf
      locator: "Lecture 1, §1.1.1, printed pp. 8–9, equations (1.6)–(1.8): square completion, equality signs, and the Bianchi implication."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
---

## Statement

Assume full Axiom of Choice. Let $X$ be a nonempty, connected, compact, oriented, finite-dimensional Hausdorff second-countable smooth four-manifold without boundary, with Riemannian metric $g_X$. Let $G\subseteq U(V,h)$ be a compact non-Abelian matrix Lie group in its specified global form, let $P\to X$ be a smooth right principal $G$-bundle, and let $\omega$ be a supplied smooth principal connection. Let $B$ be a positive-definite, symmetric, $\operatorname{Ad}(G)$-invariant bilinear form on $\mathfrak g$. For any local section $s_i$, set $A_i=s_i^*\omega$ and $F_i=dA_i+\tfrac12[A_i\wedge A_i]$. Invariance of $B$ makes the local four-forms $\beta_B|_{U_i}=\frac{1}{8\pi^2}B(F_i\wedge F_i)$ and $\gamma_B|_{U_i}=B(F_i\wedge *_{g_X}F_i)$ restrictions of global forms. Define $q_B=\int_X\beta_B$. For a real scalar $g>0$, define the Euclidean Yang–Mills functional by

$$
S_B(P,\omega):=\frac{1}{g^2}\int_X\gamma_B,
$$

where the Hodge operator is characterized by $\alpha\wedge *_{g_X}\beta=\langle\alpha,\beta\rangle_{g_X}\,d\operatorname{vol}_{g_X}$ and acts componentwise on $\mathfrak g$-valued forms. Then

$$
S_B(P,\omega)\geq \frac{8\pi^2}{g^2}\,|q_B(P,\omega)|.
$$

Equality holds exactly in these cases: if $q_B>0$, then $F_i=*_{g_X}F_i$; if $q_B<0$, then $F_i=-*_{g_X}F_i$; if $q_B=0$, then $F_i=0$. Every self-dual or anti-self-dual supplied connection satisfies the source-free Euclidean Yang–Mills equation $D_{A_i}(*_{g_X}F_i)=0$, where $D_{A_i}\eta=d\eta+[A_i\wedge\eta]$. The statement asserts neither existence nor uniqueness of a connection in any charge sector.

## Statement references

[Belavin–Polyakov–Schwartz–Tyupkin, printed pp. 85–86](https://strings.itp.ac.ru/Papers/belavin1975.pdf)

[Tong, Lecture 1 §1.1.1](https://www.damtp.cam.ac.uk/user/tong/tasi/instanton.pdf)

[[def-qftx-instanton-number-and-asd-sector|Charge, orientation, Hodge star, and invariant-form conventions]]

[[lem-qftx-principal-curvature-cartan-bianchi|Curvature Bianchi identity and covariant exterior derivative]]

[[def-axiom-of-choice|Full Axiom of Choice used by the topological charge interface]]

## Facts & Assumptions

**Given:** Full AC, the nonempty compact oriented Riemannian four-manifold and bundle of the instanton-number definition, a supplied connection, invariant positive-definite $B$, and a real $g>0$.

[A1] Full AC means every family of nonempty sets has a choice function. [[def-axiom-of-choice]]

[F1] The global charge form is $\beta_B=\frac{1}{8\pi^2}B(F\wedge F)$, and $q_B=\int_X\beta_B$; the Hodge star and the self-dual/ASD decomposition are those fixed by the orientation and metric. [[def-qftx-instanton-number-and-asd-sector]]

[F2] The bilinear form $B$ is positive definite. [[def-qftx-instanton-number-and-asd-sector]]

[F3] The Hodge star on two-forms is an orthogonal involution whose $+1$ and $-1$ eigenspaces are orthogonal for the inner product induced by $B$. [[lem-qftx-hodge-star-decomposition-four-dimensions]]

[F4] The local curvature satisfies $D_{A_i}F_i=dF_i+[A_i\wedge F_i]=0$. [[lem-qftx-principal-curvature-cartan-bianchi]]


## Proof

1.1 Write $F_i=F_i^++F_i^-$ with $*_{g_X}F_i^+=F_i^+$ and $*_{g_X}F_i^-=-F_i^-$. Let $a=\int_X B(F_i^+\wedge *_{g_X}F_i^+)$ and $b=\int_X B(F_i^-\wedge *_{g_X}F_i^-)$. Orthogonality of the two Hodge eigenspaces [F3] makes the cross terms vanish; positivity of $B$ [F2] gives $a,b\geq0$. Consequently $\int_XB(F_i\wedge *_{g_X}F_i)=a+b$, while $\int_XB(F_i\wedge F_i)=a-b$. By [F1], $S_B=(a+b)/g^2$ and $q_B=(a-b)/(8\pi^2)$. [given, A1, F1, F2, F3, algebra]

2.1 For nonnegative $a,b$, $a+b\geq|a-b|$, so the claimed bound follows after division by $g^2>0$. If $q_B>0$, then $a>b$ and equality is equivalent to $b=0$. Its integrand is the continuous nonnegative squared norm of $F_i^-$; if $F_i^-$ were nonzero at a point, it would be bounded away from zero on a neighborhood of positive Riemannian volume, contradicting $b=0$. Thus $F_i^-=0$. If $q_B<0$, equality in $a+b\geq b-a$ is equivalent to $a=0$; the same continuity and positivity argument gives $F_i^+=0$. If $q_B=0$, equality forces $a+b=0$, so nonnegativity gives $a=b=0$ and both components vanish, hence $F_i=0$. Conversely each of the three stated conditions makes its corresponding norm vanish and gives equality. [F1, F2, step 1.1, algebra]

3.1 By [F4], $D_{A_i}F_i=0$. For a self-dual connection, $D_{A_i}(*_{g_X}F_i)=D_{A_i}F_i=0$; for an anti-self-dual connection, $D_{A_i}(*_{g_X}F_i)=-D_{A_i}F_i=0$. This is the stated source-free Euclidean Yang–Mills equation. No boundary term or variational argument is used. [given, F4] ∎
