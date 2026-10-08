---
id: def-szego-kernel-smooth-bounded-domain
kind: definition
title: The Hardy boundary space, Szegő projection and Szegő kernel on a smoothly bounded domain
status: draft
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
dependency_level: 0
proof_strategy: direct
deps:
  - def-bounded-c-one-domain-boundary-charts-and-outward-normal
  - def-surface-integral-on-a-compact-c-one-hypersurface
  - def-holomorphic-function-in-several-complex-variables
  - def-hilbert-orthogonal-projection
  - thm-orthogonal-decomposition-by-a-closed-subspace
  - def-complex-l-two-inner-product
  - lem-l-two-with-the-integral-pairing-is-a-hilbert-space
  - thm-riesz-representation-for-hilbert-space
  - def-countable-choice
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
    - title: Jiří Lebl, Tasty Bits of Several Complex Variables
      url: https://www.jirka.org/scv/scv.pdf
      locator: "§5.3, printed pp. 165–166 (PDF pp. 164–165): closure of the boundary traces of holomorphic functions continuous on the closure, the Hardy space, evaluation through the Poisson integral, and the Szegő kernel. The text explicitly presents an overview without proving the details; the authoring definition states the bounded-evaluation and holomorphic-extension conditions it needs."
---

## Facts & Assumptions

[F1] Under [[def-countable-choice]], complex $L^2(\mu)$ with the pairing $\langle f,g\rangle=\int f\overline g\,d\mu$ is a Hilbert space, with the pairing linear in its first variable and conjugate symmetric ([[def-complex-l-two-inner-product]], [[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]]).

[F2] Under [[def-countable-choice]], every closed linear subspace of a Hilbert space has an orthogonal projection, determined by the unique orthogonal decomposition ([[thm-orthogonal-decomposition-by-a-closed-subspace]], [[def-hilbert-orthogonal-projection]]).

[F3] Under [[def-countable-choice]], every bounded linear functional on a Hilbert space has a unique Riesz representer, with $f(x)=\langle x,y\rangle$ in the first-variable-linear convention ([[thm-riesz-representation-for-hilbert-space]]).

## Definition

Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$ ([[def-countable-choice]]). Let $m\ge1$, let $\Omega\subset\mathbb C^m$ be a nonempty bounded connected open set with $C^1$ boundary ([[def-bounded-c-one-domain-boundary-charts-and-outward-normal]]), let $dS$ be its boundary surface measure ([[def-surface-integral-on-a-compact-c-one-hypersurface]]), and fix a normalization $\sigma=c\,dS$ with $c>0$. Give $L^2(\partial\Omega,\sigma;\mathbb C)$ the first-variable-linear pairing from [[def-complex-l-two-inner-product]]. For $f\in\mathcal O(\Omega)\cap C(\overline\Omega)$, its boundary trace $\operatorname{tr}_\sigma f:=[f|_{\partial\Omega}]$ is an $L^2$ class because $\partial\Omega$ is compact and $\sigma$ is finite. Set

$$\mathcal T(\Omega,\sigma):=\{\operatorname{tr}_\sigma f:f\in\mathcal O(\Omega)\cap C(\overline\Omega)\},\qquad H^2(\partial\Omega,\sigma):=\overline{\mathcal T(\Omega,\sigma)}^{\,L^2(\sigma)}.$$

The space $\mathcal T(\Omega,\sigma)$ is linear, and $H^2(\partial\Omega,\sigma)$ is a closed linear subspace of the Hilbert space $L^2(\partial\Omega,\sigma;\mathbb C)$ by [F1]. The **Szegő projection** is the orthogonal projection

$$P_\sigma:L^2(\partial\Omega,\sigma;\mathbb C)\longrightarrow H^2(\partial\Omega,\sigma),$$

which exists by [F2].

Call $(\Omega,\sigma)$ **Szegő-regular** if, for every $w\in\Omega$, the rule $\operatorname{tr}_\sigma f\mapsto f(w)$ is well-defined and bounded on $\mathcal T(\Omega,\sigma)$ in the $L^2$ norm, and its unique continuous extension $E_w:H^2(\partial\Omega,\sigma)\to\mathbb C$ has the property that $z\mapsto E_z(h)$ is holomorphic on $\Omega$ for every $h\in H^2(\partial\Omega,\sigma)$. Boundedness and density make each $E_w$ unique. By [F3], there is a unique $S_w\in H^2(\partial\Omega,\sigma)$ such that

$$E_w(h)=\langle h,S_w\rangle_{L^2(\sigma)}\qquad(h\in H^2(\partial\Omega,\sigma)).$$

For a Szegő-regular pair define its **Szegő kernel** by $S_\sigma(z,w):=E_z(S_w)$. Then $E_w(h)=\langle h,S_w\rangle$ is the reproducing identity, $S_\sigma(z,w)=\langle S_w,S_z\rangle$, and conjugate symmetry of the inner product gives $S_\sigma(w,z)=\overline{S_\sigma(z,w)}$. The regularity condition makes the kernel holomorphic in $z$; conjugate symmetry makes it antiholomorphic in $w$. The $\mathrm{AC}_\omega$ assumption is used through the Hilbert-space, projection and Riesz suppliers in [F1]–[F3]; no stronger choice principle is asserted. No Szegő construction is claimed for boundaries that are not $C^1$ hypersurfaces, including the polydisc when $m\ge2$.

## Proof

**Proof technique:** direct.

**Given:** $\mathrm{AC}_\omega$, the bounded $C^1$ domain $\Omega$, the finite measure $\sigma$, and the spaces $\mathcal T(\Omega,\sigma)$ and $H^2(\partial\Omega,\sigma)$ just defined.

1.1 The space $\mathcal T(\Omega,\sigma)$ is linear, so its closure $H^2(\partial\Omega,\sigma)$ is a closed linear subspace of $L^2(\partial\Omega,\sigma;\mathbb C)$. By [F1] the ambient space is a Hilbert space with the stated pairing; therefore the closed subspace is itself a Hilbert space. [F1]

2.1 The orthogonal-decomposition theorem in [F2] gives each $g\in L^2(\partial\Omega,\sigma;\mathbb C)$ a unique $H^2$ component, and [[def-hilbert-orthogonal-projection]] defines $P_\sigma$ to be that component. [step 1.1, F2]

2.2 For a Szegő-regular pair each $E_w$ is a bounded linear functional on the Hilbert space $H^2$ from step 1.1, so [F3] gives its unique representing vector $S_w$ and the stated reproducing identity. [step 1.1, F3, given]

3.1 The definition gives $S_\sigma(z,w)=E_z(S_w)=\langle S_w,S_z\rangle$; conjugate symmetry of the pairing in [F1] gives $S_\sigma(w,z)=\overline{S_\sigma(z,w)}$. The regularity condition makes $z\mapsto S_\sigma(z,w)$ holomorphic, and this symmetry makes $w\mapsto S_\sigma(z,w)$ antiholomorphic. [step 2.2, F1, algebra] ∎
