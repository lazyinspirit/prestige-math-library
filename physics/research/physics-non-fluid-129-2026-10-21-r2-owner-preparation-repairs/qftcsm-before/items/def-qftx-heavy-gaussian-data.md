---
id: def-qftx-heavy-gaussian-data
kind: definition
domain: mathematics
library: mathematics
title: Positive heavy-mode Gaussian matching data
status: draft
origin: pipeline
dependency_level: 1
deps:
  - def-natural-logarithm
  - def-hilbert-space
  - def-real-and-complex-inner-product-space
  - def-axiom-of-choice
  - lem-ac-supplies-sequential-choices-for-probability-constructions
  - lem-unbounded-adjoint-is-well-defined-and-closed
  - thm-cauchy-schwarz-in-an-inner-product-space
  - thm-qftx-positive-unbounded-spectral-calculus
  - lem-qftx-finite-heavy-gaussian-square
justified_by: []
forward_refs: []
dependency_roles:
  def-natural-logarithm: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-real-and-complex-inner-product-space: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  lem-ac-supplies-sequential-choices-for-probability-constructions: mathematical-premise
  lem-unbounded-adjoint-is-well-defined-and-closed: mathematical-premise
  thm-cauchy-schwarz-in-an-inner-product-space: mathematical-premise
  thm-qftx-positive-unbounded-spectral-calculus: mathematical-premise
  lem-qftx-finite-heavy-gaussian-square: mathematical-premise
physical_scope: Pure mathematics; no physical premises or physical claim.
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "David Skinner, Advanced Quantum Field Theory, Chapter 2: QFT in Zero Dimensions"
      url: "https://www.damtp.cam.ac.uk/user/dbs26/AQFT/chap2.pdf"
      locator: "§§2.1–2.2, printed pp.13–16: normalized finite Gaussian weights and the source shift."
    - title: "Matthias Neubert, Effective Field Theory and Heavy Quark Physics"
      url: "https://arxiv.org/pdf/hep-ph/0512222"
      locator: "§2, printed pp.3–5, equations (2)–(10): split modes and integrate high-frequency degrees of freedom into the Wilsonian action."
    - title: "C. P. Burgess, Introduction to Effective Field Theory"
      url: "https://arxiv.org/pdf/hep-th/0701053"
      locator: "§§1.1, 2.2.1, 2.2.4, printed pp.20–24: scale separation, local expansion, and power counting."
verification:
  precheck: pending
---

## Definition

Assume AC. Let $H$ be a nonzero complex Hilbert space ([[def-hilbert-space]]), let $A:D(A)\subseteq H\to H$ be densely defined, self-adjoint and nonnegative, and let $M>0$. Set $K=M^2I+A$ on $D(A)$ and let $E_A$ be the spectral measure supplied by [[thm-qftx-positive-unbounded-spectral-calculus]]. Define $f_M(a)=(M^2+a)^{-1}$ for $a\ge0$. The bounded spectral operator $f_M(A)$ is the inverse $K^{-1}$ and satisfies $\|K^{-1}\|\le M^{-2}$. For $J\in H$ define the matched quadratic effective-action contribution
$$\Delta S_{\mathrm{eff}}(J):=-\tfrac12\langle J,K^{-1}J\rangle.$$
The inner product is the complex Hilbert pairing of [[def-real-and-complex-inner-product-space]], linear in its first variable; the displayed quadratic form is real and nonpositive. In natural units $\hbar=c=1$, $A$ and $K$ have mass-squared units; normalize the source/pairing so $\langle J,K^{-1}J\rangle$ is dimensionless, hence $\|J\|^2$ has mass-squared units. In a finite real regulator, integration of $\exp[-\tfrac12\chi^TK\chi+j^T\chi]$ divided by the zero-source Gaussian integral yields $\exp[\tfrac12j^TK^{-1}j]$ by [[lem-qftx-finite-heavy-gaussian-square]], so the corresponding effective action changes by $-\tfrac12j^TK^{-1}j$. Taking $-\log$ of that normalized integral uses [[def-natural-logarithm]]. Determinants and Lebesgue integration are finite-regulator quantities only; this definition supplies no infinite-dimensional Gaussian measure or determinant.

## Facts & Assumptions

**Given:** AC; a nonzero complex Hilbert space; a densely defined nonnegative self-adjoint $A$; $M>0$; and $J\in H$.

[A1] [[def-axiom-of-choice]]: every family of nonempty sets has a choice function.

[A2] [[lem-ac-supplies-sequential-choices-for-probability-constructions]]: AC implies countable choice.

[F1] [[thm-qftx-positive-unbounded-spectral-calculus]]: for nonnegative self-adjoint $A$, the spectral measure is supported on $[0,\infty)$ and bounded Borel functions define bounded operators with norm at most their supremum.

[F2] [[thm-cauchy-schwarz-in-an-inner-product-space]]: $|\langle x,y\rangle|\le\|x\|\|y\|$.

[F3] [[lem-unbounded-adjoint-is-well-defined-and-closed]]: under countable choice the adjoint of a densely defined operator is closed; hence a self-adjoint $A$ is closed.

[F4] [[lem-qftx-finite-heavy-gaussian-square]]: the normalized finite Gaussian source-shift ratio is $\exp(\tfrac12j^TK^{-1}j)$ for symmetric positive-definite $K$.

[A3] [[def-hilbert-space]]: a complex Hilbert space is a complete complex inner-product space.

[A4] [[def-real-and-complex-inner-product-space]]: the complex inner product is linear in the first variable and conjugate-linear in the second.

[F5] [[def-natural-logarithm]]: $\log$ is defined on $(0,\infty)$ as the inverse of $\exp$.

## Proof

**Proof technique:** direct spectral calculus with a finite-regulator Gaussian identity.

**Given:** The objects and hypotheses in the Definition.

1.1 The actual proof of [F1] uses Cauchy–Schwarz for its resolvent lower bound and closedness of $A$ for its resolvent graph argument. [F2] supplies the former. By [A1]–[A2] countable choice is available, so [F3] applies and self-adjointness gives $A=A^*$, hence $A$ is closed. This records the actual inputs of [F1]'s proof; the carrier's complete conditional proof was inspected. [A1, A2, F1, F2, F3]

1.2 Let $g_M(a)=(M^2+a)^{-1}$. By [F1], $g_M(A)$ is bounded with norm at most $M^{-2}$. Moreover, $\int a^2g_M(a)^2\,d\langle E_A(a)u,u\rangle\le\|u\|^2$ for every $u\in H$, so the domain formula for $A$ puts $g_M(A)u$ in $D(A)$. For any $u\in H$, truncate the spectral integrals to $[0,n]$; on each truncation the bounded Borel calculus is multiplicative, and the domain criterion just verified gives the graph limit $A g_M(A)u=\int a g_M(a)\,dE_A(a)u$. Hence $(M^2I+A)g_M(A)u=\int(M^2+a)g_M(a)\,dE_A(a)u=u$. For $v\in D(A)$, the same truncation and scalar multiplication give $g_M(A)(M^2I+A)v=\int g_M(a)(M^2+a)\,dE_A(a)v=v$. Thus $K^{-1}=g_M(A)$ and $\|K^{-1}\|\le M^{-2}$. Finally, the positive scalar multiplier gives $\langle J,K^{-1}J\rangle=\int g_M(a)\,d\langle E_A(a)J,J\rangle\ge0$, so the quadratic form is real. [A3, A4, F1, step 1.1, algebra]

2.1 In a finite real regulator with symmetric positive-definite matrix $K$, [F4] gives the normalized source integral $\exp(\tfrac12j^TK^{-1}j)$. Taking its negative logarithm using [F5] gives the effective-action shift $-\tfrac12j^TK^{-1}j$. No determinant or Lebesgue integral beyond that finite regulator enters the definition. [F4, F5, given, algebra] ∎
