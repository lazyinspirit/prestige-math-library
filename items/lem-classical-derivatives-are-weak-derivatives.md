---
id: lem-classical-derivatives-are-weak-derivatives
kind: lemma
title: Classical derivatives agree with weak derivatives
status: published
origin: pipeline
deps: [def-weak-derivative-of-a-locally-integrable-function, lem-weak-derivatives-are-unique-almost-everywhere, thm-distributional-differentiation-is-continuous-and-commutes, def-countable-choice]
landmark: false
proof_strategy: direct
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
  scraped: []
  references:
    - title: Juha Kinnunen, Sobolev Spaces (2026), Chapter 1 §1.1
      url: https://math.aalto.fi/~jkkinnun/files/sobolev_spaces.pdf
    - title: John K. Hunter, Notes on Partial Differential Equations (2014), Chapter 3 §3.1
      url: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf
---

## Statement

Assume Countable Choice. Let $\Omega\subseteq\mathbb R^n$ be open,
$n\ge1$, let $k\in\mathbb N_0$, and let $u:\Omega\to\mathbb C$ have real
and imaginary parts of class $C^k$. For each multi-index
$\alpha\in\mathbb N_0^n$ with $|\alpha|\le k$, the componentwise classical
derivative $\partial^\alpha u$ is locally integrable and is the weak
derivative $D^\alpha u$. By the uniqueness lemma, it represents the unique
locally integrable weak-derivative class. For $\alpha=0$, this says
$D^0u=u$.

If $\Omega=\varnothing$, the assertion is vacuous: there is only the zero
class and every displayed test identity is zero.

## Facts & Assumptions

**Given:** Countable Choice, an open set $\Omega\subseteq\mathbb R^n$, $u\in C^k(\Omega;\mathbb C)$, $k\in\mathbb N_0$, and a multi-index $\alpha$ with $|\alpha|\le k$.

[F1] By the regular-distribution pairing and signed-transpose convention, the weak test identity is equivalent to $\partial^\alpha T_f=T_g$ as distributions ([[def-weak-derivative-of-a-locally-integrable-function]]).

[F2] Under Countable Choice, classical derivatives of $C^k$ functions are compatible with distributional derivatives: [[thm-distributional-differentiation-is-continuous-and-commutes]].

[F3] Under Countable Choice, a locally integrable weak derivative is unique almost everywhere ([[lem-weak-derivatives-are-unique-almost-everywhere]]).

## Proof

**Proof technique:** direct.

1.1 Apply [F2] to $u$ and $\alpha$. The regular distributions of $u$ and $\partial^\alpha u$ are defined, so in particular both functions are locally integrable, and $$\partial^\alpha T_u=T_{\partial^\alpha u}.$$ The Countable Choice use is exactly the comparison of the compactly supported Riemann integrals with the corresponding Lebesgue integrals in [F2]. [F2, given]

2.1 By [F1], this distributional equality is equivalent to the weak test identity. Explicitly, evaluation on any $\varphi\in C_c^\infty(\Omega)$ gives $$(-1)^{|\alpha|}\int_\Omega u\,D^\alpha\varphi\,dx =\int_\Omega (\partial^\alpha u)\varphi\,dx.$$ Multiplying by $(-1)^{|\alpha|}$ gives the defining weak identity for $\partial^\alpha u$; the sign is its own inverse. Since the test was arbitrary, $\partial^\alpha u$ is a weak derivative. [F1, step 1.1, given]

3.1 The weak derivative class is unique by [F3], so the locally integrable class represented by $\partial^\alpha u$ is the class denoted $D^\alpha u$. When $\alpha=0$, the identity reduces to $u=u$. [F3, step 2.1, given] ∎

## Sources

- Juha Kinnunen, *Sobolev Spaces*, Chapter 1 §1.1, printed pp. 2–3: compact-support integration by parts has no boundary term, successive integrations give the multi-index identity, and Remarks 1.3(1) state that classical derivatives through order $k$ are weak derivatives.
- John K. Hunter, *Notes on Partial Differential Equations*, Chapter 3 §3.1, printed pp. 47–48, for the weak-derivative integration-by-parts convention.
