---
id: lem-neumann-compatibility-from-the-divergence-theorem
kind: lemma
title: Necessary compatibility for the classical Neumann Poisson problem
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  references:
    - title: "John K. Hunter, Notes on Partial Differential Equations (2014)"
      url: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf
      locator: §1.12, Theorem 1.46, printed pp. 17–18; §2.5, Theorem 2.23, printed p. 32
status: published
origin: pipeline
proof_strategy: direct
deps: ["thm-divergence-theorem-for-bounded-c-one-euclidean-domains", "def-classical-normal-derivative", "def-countable-choice", "def-laplacian-of-a-c2-function", "def-bounded-c-one-domain-boundary-charts-and-outward-normal"]
---

## Statement

Assume $\Omega$ is bounded with $C^1$ boundary, $u\in C^2(\overline\Omega)$, $f=-\Delta u$, and outward normal derivative $g=\partial_\nu u$. Then $\int_\Omega f=-\int_{\partial\Omega}g$.

## Facts & Assumptions

**Given:** Assume $\mathrm{AC}_\omega$. Let $\Omega$ be a bounded $C^1$ domain in the published Euclidean surface convention, let $n\ge2$, and let real $u\in C^2(\overline\Omega)$ with $f=-\Delta u$ and $g=\partial_\nu u$. Complex-valued data are handled by real and imaginary parts.

[A1] Countable Choice, written $\mathrm{AC}_\omega$, says every sequence of nonempty sets has a choice function. ([[def-countable-choice]]).

[F1] For $n\ge2$, a bounded $C^1$ domain and $F\in C^1(\overline\Omega;\mathbb R^n)$ satisfy $\int_\Omega\operatorname{div}F\,dx=\int_{\partial\Omega}F\cdot\nu\,dS$. ([[thm-divergence-theorem-for-bounded-c-one-euclidean-domains]]).

[F2] The Laplacian is $\Delta u=\operatorname{div}\nabla u$. ([[def-laplacian-of-a-c2-function]]).

[F3] The classical normal derivative is $\partial_\nu u=Du\cdot\nu$ for the outward unit normal. ([[def-classical-normal-derivative]]).

[F4] In this surface-integration convention a bounded $C^1$ domain is nonempty and has dimension $n\ge2$. ([[def-bounded-c-one-domain-boundary-charts-and-outward-normal]]).

## Proof

**Proof technique:** direct.

1.1 For real $u$, the gradient field $F=\nabla u$ belongs to $C^1(\overline\Omega;\mathbb R^n)$ by the stated $C^2$ closure convention. By [F2], $\operatorname{div}F=\Delta u$, and by [F3], $F\cdot\nu=g$ at each boundary point. [given, F2, F3, F4, algebra]

2.1 Apply the divergence theorem [F1] to the field in step 1.1. It gives $\int_\Omega\Delta u\,dx=\int_{\partial\Omega}g\,dS$. This use of [F1] requires exactly the Countable Choice assumption [A1]. [step 1.1, A1, F1]

3.1 Since $f=-\Delta u$, negating the identity in step 2.1 yields $\int_\Omega f\,dx=-\int_{\partial\Omega}g\,dS$. For complex-valued $u,f,g$, apply this real calculation separately to real and imaginary parts. [step 2.1, given, algebra]

4.1 If $f=0$, the identity says the total outward Neumann flux is zero; if also $g=0$, both sides vanish. The theorem applies on every boundary component with the outward orientation specified in [F3]. The domain class in [F4] excludes the empty set and dimensions zero or one. No converse or sufficiency for existence is asserted. [step 3.1, F3, F4, cases] ∎

## Source notes

Hunter §1.12, Theorem 1.46, printed pp. 17–18, gives the divergence formula; Hunter §2.5, Theorem 2.23, printed p. 32, gives the same flux identity as the first Green formula with the constant test function. The negative sign comes only from $f=-\Delta u$.
