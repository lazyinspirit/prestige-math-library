---
id: thm-bem-hypersingular-ellipticity-and-stabilized-formulation
kind: theorem
title: The hypersingular operator is elliptic modulo constants
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 8
deps:
  - def-bem-calderon-boundary-operators
  - thm-bem-double-layer-transmission-jumps-and-bounds
  - thm-bem-calderon-mapping-and-jump-identities
  - lem-bem-exterior-energy-trace-bound
  - lem-bem-lipschitz-trace-and-lifting
  - thm-poincare-wirtinger-on-bounded-connected-extension-domains
  - thm-lax-milgram
  - def-axiom-of-choice
  - def-countable-choice
  - def-bem-lipschitz-polyhedral-boundary-and-trace-spaces
justified_by: []
proof_strategy: direct
axiom_use: The Axiom of Choice is inherited from Poincare–Wirtinger; Countable Choice is used by Lax–Milgram.
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Martin Costabel, Boundary Integral Operators on Lipschitz Domains: Elementary Results (1988)"
      url: https://costabel.perso.math.cnrs.fr/publis/Co88_Lip.pdf
      locator: "§4, printed pp. 620–622: the hypersingular operator, energy identity, and ellipticity modulo constants."
    - title: "Francisco-Javier Sayas, First Steps in the Boundary Element Method (2015 lecture notes)"
      url: https://team-pancho.github.io/teaching/math838/BEM.pdf
      locator: "Chapter 2 §2.1, printed pp. 24–25, and Chapter 3 §§3.1–3.3, printed pp. 40–46: the hypersingular sign convention and energy formulation."
---

## Statement

Assume the Axiom of Choice and Countable Choice. Let $W:H^{1/2}(\Gamma)\to H^{-1/2}(\Gamma)$ be the hypersingular operator of [[def-bem-calderon-boundary-operators]]. It is symmetric and nonnegative, its kernel is exactly the constants, and there is $c>0$ such that
$$\langle W\phi,\phi\rangle_\Gamma\ge c\inf_{a\in\mathbb R}\|\phi-a\|_{H^{1/2}(\Gamma)}^2.$$
The real scalar $m_\Gamma(\phi):=\int_\Gamma\phi\,dS$ is the $L^2$ integral, not a pairing of two elements of $H^{1/2}$. The continuous embeddings $H^{1/2}\subset L^2\subset H^{-1/2}$ use the fixed Hilbert chart convention; the second map sends $f$ to the functional $g\mapsto\int_\Gamma fg\,dS$. Thus $m_\Gamma(\phi)$ can equivalently be evaluated by pairing this realized negative-order functional with $1$. The stabilized form
$$b(\phi,\psi)=\langle W\phi,\psi\rangle_\Gamma+m_\Gamma(\phi)m_\Gamma(\psi)$$
is bounded and coercive on $H^{1/2}(\Gamma)$. Consequently, for each $f\in H^{-1/2}(\Gamma)$ there is a unique $\phi\in H^{1/2}(\Gamma)$ such that $b(\phi,\psi)=\langle f,\psi\rangle_\Gamma$ for every $\psi\in H^{1/2}(\Gamma)$.

## Facts & Assumptions

**Given:** The Axiom of Choice, Countable Choice, the bounded connected Lipschitz domain with connected boundary and connected exterior, and the weak layer and trace conventions.

[F1] The double-layer minimizer is unique, stationary on matching-trace pairs, has jump $\gamma^-D\phi-\gamma^+D\phi=-\phi$, and has a common weak conormal with finite energy ([[thm-bem-double-layer-transmission-jumps-and-bounds]]).

[F2] $W=-\partial_n^-D=-\partial_n^+D$ is bounded into $H^{-1/2}$ and the average trace and signed jumps are well defined ([[def-bem-calderon-boundary-operators]], [[thm-bem-calderon-mapping-and-jump-identities]]).

[F3] Interior Poincare–Wirtinger and the trace estimate control $\|\gamma^-u-u_{\Omega^-}\|_{H^{1/2}}$ by $\|\nabla u\|_{L^2(\Omega^-)}$ ([[thm-poincare-wirtinger-on-bounded-connected-extension-domains]], [[lem-bem-lipschitz-trace-and-lifting]]).

[F4] An exterior finite-energy trace is controlled by the exterior gradient ([[lem-bem-exterior-energy-trace-bound]]).

[F5] A bounded coercive real bilinear form on a real Hilbert space has a unique variational solution under Countable Choice ([[thm-lax-milgram]], [[def-countable-choice]]).

## Proof

1.1 If $u=D\phi$ and $v=D\psi$, their sum belongs to $\mathcal A_{\phi+\psi}$ and satisfies the stationarity equation because each summand does; uniqueness of the minimizer gives $D(\phi+\psi)=D\phi+D\psi$, and scalar homogeneity follows in the same way. The interior weak Green formula and the exterior finite-energy Green identity justified in the weak layer definition give $\int_{\Omega^-}\nabla u^-\cdot\nabla v^-+\int_{\Omega^+}\nabla u^+\cdot\nabla v^+=\langle\partial_n^-u,\gamma^-v\rangle-\langle\partial_n^+u,\gamma^+v\rangle.$ Since $u$ has common conormal $q_\phi$ and $\gamma^-v-\gamma^+v=-\psi$, the right side is $-\langle q_\phi,\psi\rangle=\langle W\phi,\psi\rangle$. The left side is symmetric in $u,v$, so $W$ is symmetric. Setting $\psi=\phi$ gives $\langle W\phi,\phi\rangle=\mathcal E(D\phi)\ge0$. [F1, F2, given, algebra]

2.1 Let $u=D\phi$ and set $a=u^-_{\Omega^-}$. By [F3], $\|\gamma^-u^- -a\|_{H^{1/2}}\le C\|\nabla u^-\|_2$. By [F4], $\|\gamma^+u^+\|_{H^{1/2}}\le C\|\nabla u^+\|_2$. The jump condition gives $\phi+a=-(\gamma^-u^- -a)+\gamma^+u^+$, so $\inf_{c\in\mathbb R}\|\phi-c\|_{H^{1/2}}\le\|\phi+a\|_{H^{1/2}}\le C\mathcal E(D\phi)^{1/2}.$ Together with step 1.1 this proves the quotient ellipticity inequality. If $\phi$ is constant, the pair $(-\phi,0)$ belongs to $\mathcal A_\phi$ and has zero energy, so it is the unique minimizer and step 1.1 gives $W\phi=0$. Conversely, if $W\phi=0$, the ellipticity inequality makes $\phi$ a limit in $H^{1/2}$ of constants; the constant subspace is closed because it is finite dimensional, so $\phi$ is constant. [F1, F3, F4, step 1.1, algebra]

3.1 Put $\bar\phi=|\Gamma|^{-1}m_\Gamma(\phi)$ and $\phi_0=\phi-\bar\phi$. The quotient norm controls $\|\phi_0\|_{H^{1/2}}$: for any constant $a$, the $L^2$ bound gives $|\bar\phi-a|\le |\Gamma|^{-1/2}\|\phi-a\|_{L^2}$, hence $\|\phi_0\|_{H^{1/2}}\le C\|\phi-a\|_{H^{1/2}}$, and take the infimum. Also $|\bar\phi|=|m_\Gamma(\phi)|/|\Gamma|$. Thus $\|\phi\|_{H^{1/2}}^2\le C(\inf_a\|\phi-a\|_{H^{1/2}}^2+|m_\Gamma(\phi)|^2)$. By [F2], $W$ is bounded; the rank-one term is bounded because $|m_\Gamma(\phi)|\le|\Gamma|^{1/2}\|\phi\|_{L^2}\le C\|\phi\|_{H^{1/2}}$, so $b$ is bounded. Its coercivity follows from step 2.1 and the last decomposition. [F2, step 2.1, given, algebra]

4.1 The space $H^{1/2}(\Gamma)$ is a real Hilbert space under the square-sum chart norm fixed in [[def-bem-lipschitz-polyhedral-boundary-and-trace-spaces]]. Apply [F5] to the bounded coercive form $b$ and the bounded functional $\psi\mapsto\langle f,\psi\rangle$; it yields a unique solution for every $f\in H^{-1/2}(\Gamma)$. [F5, step 3.1, given, construct] ∎

