---
id: def-qftx-heavy-gaussian-data
kind: definition
domain: mathematics
library: mathematics
title: Positive heavy-mode Gaussian matching data
status: published
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
  - thm-pvm-integral-is-a-star-homomorphism
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
  thm-pvm-integral-is-a-star-homomorphism: mathematical-premise
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
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
---

## Definition

Assume AC. Let $H$ be a nonzero complex Hilbert space, let $A:D(A)\subseteq H\to H$ be densely defined, self-adjoint and nonnegative, and let $M>0$. Set $K=M^2I+A$ on $D(A)$ and let $E_A$ be the spectral measure of $A$. Define $f_M(a)=(M^2+a)^{-1}$ for $a\ge0$. The bounded spectral operator $f_M(A)$ is the inverse $K^{-1}$ and satisfies $\|K^{-1}\|\le M^{-2}$. For $J\in H$ define the matched quadratic effective-action contribution
$$\Delta S_{\mathrm{eff}}(J):=-\tfrac12\langle J,K^{-1}J\rangle.$$
The inner product is the complex Hilbert pairing, linear in its first variable; the displayed quadratic form is real and nonpositive. In natural units $\hbar=c=1$, $A$ and $K$ have mass-squared units; normalize the source/pairing so $\langle J,K^{-1}J\rangle$ is dimensionless, hence $\|J\|^2$ has mass-squared units. In a finite real regulator, integration of $\exp[-\tfrac12\chi^TK\chi+j^T\chi]$ divided by the zero-source Gaussian integral yields $\exp[\tfrac12j^TK^{-1}j]$, so the corresponding effective action changes by $-\tfrac12j^TK^{-1}j$. Since $\log$ is the inverse of $\exp$ on positive reals, taking $-\log$ of that normalized integral gives this effective-action contribution. Determinants and Lebesgue integration are finite-regulator quantities only; this definition supplies no infinite-dimensional Gaussian measure or determinant.

## Definition references

[[def-hilbert-space]]

[[def-real-and-complex-inner-product-space]]

[[thm-qftx-positive-unbounded-spectral-calculus]]

[[lem-qftx-finite-heavy-gaussian-square]]

[[def-natural-logarithm]]

## Facts & Assumptions

**Given:** AC; a nonzero complex Hilbert space; a densely defined nonnegative self-adjoint $A$; $M>0$; and $J\in H$.

[A1] [[def-axiom-of-choice]]: every family of nonempty sets has a choice function.

[A2] [[lem-ac-supplies-sequential-choices-for-probability-constructions]]: AC implies countable choice.

[F1] [[thm-qftx-positive-unbounded-spectral-calculus]]: the spectral PVM $E_A$ is supported on $[0,\infty)$, $A=\int_{[0,\infty)}a\,dE_A(a)$ with domain $D(A)=\{u\in H:\int_{[0,\infty)}a^2\,d\mu_u(a)<\infty\}$, where $\mu_u(S)=\langle E_A(S)u,u\rangle$, and every bounded Borel $h$ defines $h(A)=\int h\,dE_A$ with $\|h(A)\|\le\sup_{a\ge0}|h(a)|$.

[F2] [[thm-cauchy-schwarz-in-an-inner-product-space]]: $|\langle x,y\rangle|\le\|x\|\|y\|$.

[F3] [[lem-unbounded-adjoint-is-well-defined-and-closed]]: under countable choice the adjoint of a densely defined operator is closed; hence a self-adjoint $A$ is closed.

[F4] [[lem-qftx-finite-heavy-gaussian-square]]: the normalized finite Gaussian source-shift ratio is $\exp(\tfrac12j^TK^{-1}j)$ for symmetric positive-definite $K$.

[F5] [[thm-pvm-integral-is-a-star-homomorphism]]: for bounded Borel functions $h,k$ and the same PVM $E_A$, $\bigl(\int h\,dE_A\bigr)\bigl(\int k\,dE_A\bigr)=\int hk\,dE_A$; the bounded PVM integral is multiplicative, unital, and adjoint preserving. Its Countable Choice hypothesis is supplied by [A1]–[A2].

[A3] [[def-hilbert-space]]: a complex Hilbert space is a complete complex inner-product space.

[A4] [[def-real-and-complex-inner-product-space]]: the complex inner product is linear in the first variable and conjugate-linear in the second.

[F6] [[def-natural-logarithm]]: $\log$ is defined on $(0,\infty)$ as the inverse of $\exp$.

## Proof

**Proof technique:** direct spectral calculus with a finite-regulator Gaussian identity.

**Given:** The objects and hypotheses in the Definition.

1.1 The actual proof of [F1] uses Cauchy–Schwarz for its resolvent lower bound and closedness of $A$ for its resolvent graph argument. [F2] supplies the former. By [A1]–[A2] countable choice is available, so [F3] applies and self-adjointness gives $A=A^*$, hence $A$ is closed. This records the actual inputs of [F1]'s proof; the carrier's complete conditional proof was inspected. [A1, A2, F1, F2, F3]

2.1 Set $g_M(a)=(M^2+a)^{-1}$ and $\mu_u(S)=\langle E_A(S)u,u\rangle$. By [F1], $g_M(A)$ is bounded with norm at most $M^{-2}$. Since $0\le ag_M(a)\le1$, $\int a^2g_M(a)^2\,d\mu_u(a)\le\mu_u([0,\infty))=\|u\|^2$ for every $u\in H$, so the domain formula in [F1] gives $g_M(A)u\in D(A)$. To see the left-inverse identity, let $x=g_M(A)u$ and $x_n=E_A([0,n])x$. The domain formula gives $x_n\to x$ and $Ax_n\to Ax$ in $H$. The spectral representation in [F1] and the multiplicativity in [F5] applied to bounded truncations give $(M^2I+A)x_n=\int_{[0,n]}(M^2+a)g_M(a)\,dE_A(a)u=E_A([0,n])u$; hence $(M^2I+A)g_M(A)u=u$. For the right-inverse identity, if $v\in D(A)$, set $v_n=E_A([0,n])v$. Then $v_n\to v$ and $(M^2I+A)v_n\to(M^2I+A)v$ in $H$. The same spectral representation and multiplicativity give $g_M(A)(M^2I+A)v_n=\int_{[0,n]}g_M(a)(M^2+a)\,dE_A(a)v=v_n$, and boundedness of $g_M(A)$ gives $g_M(A)(M^2I+A)v=v$. Thus $K^{-1}=g_M(A)$ and $\|K^{-1}\|\le M^{-2}$. Finally, the positive scalar multiplier gives $\langle J,K^{-1}J\rangle=\int g_M(a)\,d\mu_J(a)\ge0$, so the quadratic form is real. [A3, A4, F1, F5, step 1.1, algebra]

3.1 In a finite real regulator with symmetric positive-definite matrix $K$, [F4] gives the normalized source integral $\exp(\tfrac12j^TK^{-1}j)$. Taking its negative logarithm using [F6] gives the effective-action shift $-\tfrac12j^TK^{-1}j$. No determinant or Lebesgue integral beyond that finite regulator enters the definition. [F4, F6, given, algebra] ∎
