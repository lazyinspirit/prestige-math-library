---
id: prop-infinitesimal-generator-of-a-symplectic-action-is-symplectic
kind: proposition
title: The infinitesimal generator of a symplectic action is symplectic
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-symplectic-and-hamiltonian-lie-group-action, def-fundamental-vector-field-of-a-left-action, def-smooth-left-action-of-a-lie-group, def-lie-derivative-of-a-tensor-field, prop-a-tensor-field-is-invariant-under-a-flow-if-and-only-if-its-lie-derivative-vanishes, thm-unique-maximal-integral-curve-through-each-point, def-countable-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Ana Cannas da Silva, Lectures on Symplectic Geometry
      url: https://www.math.ist.utl.pt/~acannas/Books/symplectic.pdf
      locator: Lecture 22, §22.1, printed pages 133--134
    - title: Eckhard Meinrenken, Symplectic Geometry
      url: https://www.math.utoronto.ca/mein/teaching/LectureNotes/symplectic.pdf
      locator: §7.3, definition of the generating vector fields, printed page 82
proof_strategy: direct
---

## Statement

Assume $\mathrm{AC}_\omega$. Let a smooth left action of $G$ on a symplectic
manifold $(M,\omega)$ be symplectic. Then every fundamental vector field
$\xi_M$ of the action has vanishing Lie derivative on $\omega$:

$$\mathcal L_{\xi_M}\omega=0 .$$

Consequently each $\xi_M$ is a symplectic vector field, and the flow of
$\xi_M$ consists of symplectomorphisms.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, a symplectic action of $G$ on $(M,\omega)$ and $\xi\in\mathfrak g$.

[A1] $\mathrm{AC}_\omega$ is [[def-countable-choice|countable choice]]; it is used only through [F1].

[F1] $\xi_M(p)=\left.\frac d{dt}\right|_0\exp_G(-t\xi)\mathbin{\cdot}p$, and $\xi_M$ is a smooth vector field. [[def-fundamental-vector-field-of-a-left-action]].

[F2] The action law is $g\mathbin{\cdot}(h\mathbin{\cdot}p)=(gh)\mathbin{\cdot}p$ and $e\mathbin{\cdot}p=p$, and each $a_g(p)=g\mathbin{\cdot}p$ is a diffeomorphism with $(a_g)^*\omega=\omega$. [[def-smooth-left-action-of-a-lie-group]], [[def-symplectic-and-hamiltonian-lie-group-action]].

[F3] For the local flow $\Phi_t$ of $X$, $\mathcal L_XT=\left.\frac d{dt}\right|_0\Phi_t^*T$; equivalently, on every common flow domain, $\Phi_t^*T=T$ for all defined $t$ if and only if $\mathcal L_XT=0$. [[def-lie-derivative-of-a-tensor-field]], [[prop-a-tensor-field-is-invariant-under-a-flow-if-and-only-if-its-lie-derivative-vanishes]].

[F4] Through each point there is a unique maximal integral curve of a smooth vector field. [[thm-unique-maximal-integral-curve-through-each-point]].

## Proof

**Proof technique:** direct.

1.1 For fixed $p\in M$ put $\theta(t)=\exp_G(-t\xi)\mathbin{\cdot}p$. The action law and [F1] give, for every $t$, $$\theta'(t)=\left.\frac d{ds}\right|_0\exp_G(-(t+s)\xi)\mathbin{\cdot}p=\left.\frac d{ds}\right|_0\exp_G(-s\xi)\mathbin{\cdot}(\exp_G(-t\xi)\mathbin{\cdot}p)=\xi_M(\theta(t)),$$ so $\theta$ is an integral curve of $\xi_M$ with $\theta(0)=p$. Its domain is all of $\mathbb R$, because the action and the exponential are defined for all real parameters and all group elements. [F1, F2, given]

2.1 By [F4] the maximal integral curve of $\xi_M$ through $p$ is unique, so $\theta$ is it; hence the flow of $\xi_M$ is the global map $\Phi_t(p)=\exp_G(-t\xi)\mathbin{\cdot}p$ on $\mathbb R\times M$. [F4, step 1.1]

3.1 For each real $t$ the map $\Phi_t=a_{\exp_G(-t\xi)}$ is the diffeomorphism induced by the group element $\exp_G(-t\xi)$, so [F2] gives $\Phi_t^*\omega=\omega$; therefore the curve $t\mapsto\Phi_t^*\omega$ is the constant two-form $\omega$ on its flow domain. [F2, step 2.1]

4.1 Differentiating this constant curve at $t=0$ and applying the flow characterization [F3] with $X=\xi_M$ and $T=\omega$ yields $\mathcal L_{\xi_M}\omega=0$. [A1, F3, step 3.1] ∎
