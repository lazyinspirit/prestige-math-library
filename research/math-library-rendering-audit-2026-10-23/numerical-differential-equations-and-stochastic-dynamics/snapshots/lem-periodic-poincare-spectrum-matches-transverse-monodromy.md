---
id: lem-periodic-poincare-spectrum-matches-transverse-monodromy
kind: lemma
title: "The Poincare derivative has precisely the non-phase monodromy multipliers"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-phase-bordered-periodic-orbit-bvp
  - def-local-periodic-orbit-poincare-and-floquet-data
  - lem-autonomous-periodic-orbit-has-neutral-floquet-multiplier
  - thm-parametrized-implicit-function-theorem-with-higher-regularity
  - thm-chain-rule-for-total-derivatives
  - def-total-derivative-in-euclidean-space
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Y. A. Kuznetsov, Elements of Applied Bifurcation Theory, 2nd ed., Chapter 1, §1.5"
      url: "https://www.ma.imperial.ac.uk/~dturaev/kuznetsov.pdf"
      locator: "Complete 614-page second-edition PDF retrieved; inspected printed pp. 26–30 on transverse sections, return maps, variational equation, monodromy, and phase multiplier."
    - title: "E. J. Doedel and B. E. Oldeman, AUTO-07P full manual (2021)"
      url: "https://raw.githubusercontent.com/auto-07p/auto-07p/master/doc/auto.tex"
      locator: "Full 12,856-line manual retrieved; inspected periodic families/Floquet source lines 587–645, ISP warning lines 4926–4950, and phase-shifting demo ph1 lines 6822–6863."
---

## Statement

Let $\gamma$ be a nonconstant periodic orbit of least period $T$, let $x_*=\gamma(0)$, and let $M=D_x\phi_T(x_*)$. Suppose the phase multiplier $1$ is algebraically simple and $\psi(x_*)=0$ with $c^\top f(x_*)\ne0$, where $c=D\psi(x_*)$. Then the eigenvalues of the derivative of the local Poincare return map on the section $\Sigma=\{x:\psi(x)=0\}$, counted with algebraic multiplicity, are exactly the Floquet multipliers of $M$ other than the single phase multiplier $1$.

## Facts & Assumptions

**Given:** A $C^2$ autonomous field, a periodic solution, its flow and monodromy, and a transverse affine phase section.

[F1] The section is a codimension-one surface transverse to $f(x_*)$, and its local return map is the Poincare map ([[def-local-periodic-orbit-poincare-and-floquet-data]]).

[F2] The phase-bordered residual is $G(x,T)=(\phi_T(x)-x,\psi(x))$ ([[def-phase-bordered-periodic-orbit-bvp]]).

[F3] The derivative of the flow at time $T$ sends $f(x_*)$ to itself ([[lem-autonomous-periodic-orbit-has-neutral-floquet-multiplier]]).

[F4] The parametrized implicit function theorem solves a $C^1$ scalar equation locally when its derivative in the solved variable is nonzero ([[thm-parametrized-implicit-function-theorem-with-higher-regularity]]).

[F5] The derivative of a composition is the composition of derivatives, with the total derivative convention of [[def-total-derivative-in-euclidean-space]] ([[thm-chain-rule-for-total-derivatives]]).

## Proof
1.1 Define $\Psi(t,x)=\psi(\phi_t(x))$. At $(T,x_*)$, $\Psi(T,x_*)=0$ and $\partial_t\Psi(T,x_*)=c^\top f(x_*)\ne0$. By [F4], there is a local return-time function $\tau(x)$ on the section with $\tau(x_*)=T$ and $\Psi(\tau(x),x)=0$. Differentiating this identity at $x_*$ in a tangent direction $v\in S:=\ker c^\top$ gives $D\tau(x_*)v=-c^\top Mv/(c^\top f(x_*))$. [F1, F2, F4, F5, given, construct]

2.1 The local return map is $P(x)=\phi_{\tau(x)}(x)$. The chain rule and step 1.1 give, for $v\in S$, $ DP(x_*)v=Mv-\frac{f(x_*)c^\top Mv}{c^\top f(x_*)}=\Pi Mv,\qquad \Pi=I-\frac{f(x_*)c^\top}{c^\top f(x_*)}. $ The map $\Pi$ identifies the quotient $\mathbb C^d/\operatorname{span}\{f(x_*)\}$ with $S$: it kills the phase direction and is the identity on $S$. Since $M f(x_*)=f(x_*)$ by [F3], it induces a linear map on this quotient, and $DP(x_*)$ is its conjugate under that identification. [F1, F3, F5, step 1.1, given, algebra]

3.1 In a basis whose first vector is $f(x_*)$, the matrix of $M$ is block upper triangular with first diagonal block $1$ and remaining block the induced quotient map. Its characteristic polynomial is therefore $(\lambda-1)$ times that of the quotient map. The eigenvalue $1$ is simple by hypothesis, so the quotient eigenvalues, with multiplicity, are exactly all the remaining eigenvalues of $M$. Step 2.1 identifies these with the Poincare derivative eigenvalues. [F3, step 2.1, given, algebra] ∎
