---
id: lem-value-of-a-state-at-a-self-adjoint-element-lies-between-the-spectral-bounds
kind: lemma
title: State values at self-adjoint elements lie in the spectral interval
deps:
  - def-state-on-a-c-star-algebra
  - def-c-star-algebra
  - lem-c-star-positive-calculus-and-order-estimates
  - lem-c-star-algebras-and-closed-ideals-have-positive-contractive-approximate-units
  - thm-minimal-c-star-unitization
  - def-axiom-of-choice
dependency_level: 2
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
axiom_audit: "Assume AC, inherited from the approximate-unit, calculus and unitization suppliers; the positivity and spectral-interval computations add no further choice."
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Bachir Bekka and Pierre de la Harpe, Unitary Representations of Groups, Duals, and Characters (arXiv:1912.07262v1, 16 December 2019)"
      url: "https://arxiv.org/pdf/1912.07262"
      locator: "Chapter 8, §8.A (states and spectra); Chapter 1, §1.B for the group case"
    - title: "Bachir Bekka, Pierre de la Harpe and Alain Valette, Kazhdan's Property (T) (Cambridge University Press 2008; author-hosted complete text)"
      url: "https://perso.univ-rennes1.fr/bachir.bekka/KazhdanTotal.pdf"
      locator: "Appendix C, §C.5: proof of Theorem C.5.2"
status: draft
origin: pipeline
---
## Statement

Assume the Axiom of Choice. Let $A$ be a C\*-algebra, let $a=a^*\in A$ and let
$\omega$ be a state of $A$ ([[def-state-on-a-c-star-algebra]]). Then
$$\min\sigma(a)\le\omega(a)\le\max\sigma(a),$$
where the spectrum is computed in $A$ if $A$ is unital and in its minimal
unitization otherwise ([[thm-minimal-c-star-unitization]]).

## Facts & Assumptions

**Given:** AC; a C\*-algebra $A$ with ambient unital C\*-algebra $B$ ($B=A$ if $A$ is unital, $B=A^+$ otherwise); a self-adjoint $a\in A$; a state $\omega$ of $A$.

[F1] Positive functionals satisfy Cauchy–Schwarz: $|\omega(b^*c)|^2\le\omega(c^*c)\omega(b^*b)$; states have norm $1$, so $|\omega(x)|\le\|x\|$ and $\omega(x^*x)\ge0$ ([[def-state-on-a-c-star-algebra]]).

[F2] $A$ has a two-sided approximate unit $(u_\lambda)$ of positive contractions, so $u_\lambda x\to x$ and $\|u_\lambda\|\le1$ ([[lem-c-star-algebras-and-closed-ideals-have-positive-contractive-approximate-units]]).

[F3] Positivity/order and calculus: for self-adjoint $x$, $\sigma(x)\subseteq\mathbb R$ and $\|x\|=\max|\sigma(x)|$; $a\ge0$ iff $\sigma(a)\subseteq[0,\infty)$; the positive elements form a cone; $0\le x\le y$ implies $\|x\|\le\|y\|$; the continuous calculus makes $a-m1$ and $M1-a$ positive for $m=\min\sigma(a)$, $M=\max\sigma(a)$; the unitization is a unital C\*-algebra containing $A$ ([[lem-c-star-positive-calculus-and-order-estimates]], [[thm-minimal-c-star-unitization]], [[def-c-star-algebra]]).

## Proof

**Proof technique:** direct.

**Given:** AC, a C\*-algebra $A$, a self-adjoint $a\in A$ and a state $\omega$.

1.1 For every $x\in A$ one has $\omega(x^*)=\overline{\omega(x)}$. Indeed, for $z\in\mathbb C$ the element $(u_\lambda+zx)^*(u_\lambda+zx)=u_\lambda^2+zu_\lambda x+\overline z\,x^*u_\lambda+|z|^2x^*x$ is positive, so $P(z):=\omega(u_\lambda^2)+z\omega(u_\lambda x)+\overline z\,\omega(x^*u_\lambda)+|z|^2\omega(x^*x)\ge0$ for all $z$; taking $z=1$ and $z=i$ shows $\omega(u_\lambda x)+\omega(x^*u_\lambda)\in\mathbb R$ and $\omega(u_\lambda x)-\omega(x^*u_\lambda)\in i\mathbb R$, hence $\omega(x^*u_\lambda)=\overline{\omega(u_\lambda x)}$. Since $x^*u_\lambda=(u_\lambda x)^*$ and both $u_\lambda x\to x$ and $x^*u_\lambda\to x^*$ in norm by [F2], boundedness of $\omega$ gives the claim in the limit. [F1, F2]

1.2 For every $x\in A$ one has $|\omega(x)|^2\le\omega(x^*x)$. Indeed, Cauchy–Schwarz [F1] applied to $(b,c)=(u_\lambda,x)$ gives $|\omega(u_\lambda x)|^2\le\omega(x^*x)\,\omega(u_\lambda^2)$; now $\omega(u_\lambda^2)\le\|u_\lambda^2\|\le1$ by [F1] and [F2], and $\omega(u_\lambda x)\to\omega(x)$. [F1, F2]

2.1 The canonical extension $\omega^+(x+z1):=\omega(x)+z$ is a positive linear functional on $B=A^+$ with $\omega^+(1)=1$. Linearity and unitality are immediate. Every element of $A^+$ is $x+z1$, and $(x+z1)^*(x+z1)=x^*x+\overline z\,x+z\,x^*+|z|^2 1$, so steps 1.1 and 1.2 give $\omega^+((x+z1)^*(x+z1))=\omega(x^*x)+2\operatorname{Re}(z\overline{\omega(x)})+|z|^2\ge|\omega(x)|^2-2|z|\,|\omega(x)|+|z|^2=(|\omega(x)|-|z|)^2\ge0$; positivity extends to sums of such squares by linearity. When $A$ is unital, the order estimate $x^*x\le\|x\|^2 1$ and Cauchy--Schwarz give $|\omega(x)|^2\le\omega(1)\omega(x^*x)\le\omega(1)^2\|x\|^2$. Therefore $1=\|\omega\|\le\omega(1)\le\|\omega\|\|1\|=1$, so $\omega(1)=1$. In this case take $B=A$ and $\omega^+=\omega$. [F1, F3, step 1.1, step 1.2]

3.1 The unital positive functional $\omega^+$ satisfies $|\omega^+(x)|^2\le\|x\|^2$ for every $x\in B$: by [F3], $x^*x\le\|x^*x\|1=\|x\|^21$ and positivity of $\omega^+$ gives $\omega^+(x^*x)\le\|x\|^2\omega^+(1)=\|x\|^2$; Cauchy–Schwarz [F1] with the unit gives $|\omega^+(x)|^2\le\omega^+(1)\omega^+(x^*x)\le\|x\|^2$. In particular $\omega^+$ is bounded with norm $1$. [F1, F3, step 2.1]

3.2 Write $m:=\min\sigma(a)$ and $M:=\max\sigma(a)$, finite real numbers by [F3]. The calculus makes $a-m1$ and $M1-a$ positive elements of $B$, hence algebraically positive by [F3]; positivity of $\omega^+$ from step 2.1 therefore gives $\omega^+(a-m1)=\omega(a)-m\ge0$ and $\omega^+(M1-a)=M-\omega(a)\ge0$. Thus $m\le\omega(a)\le M$, and in particular $\omega(a)$ is real. [F3, step 2.1]

4.1 The Axiom of Choice is inherited from the approximate-unit, calculus and unitization suppliers of [F1]–[F3]; the extension and spectral arguments add no further choice ([[def-axiom-of-choice]]). [given, F2, F3] ∎
