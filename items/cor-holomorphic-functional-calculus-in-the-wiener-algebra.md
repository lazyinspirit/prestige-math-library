---
id: cor-holomorphic-functional-calculus-in-the-wiener-algebra
kind: corollary
title: "Holomorphic functional calculus in the Wiener algebra"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-wiener-algebra-is-a-banach-algebra, thm-wiener-lemma-for-absolutely-convergent-fourier-series, lem-compact-set-has-a-jordan-neighborhood-inside-an-open-set, def-complex-chain-and-cycle, def-integration-and-index-of-complex-chain, def-null-homologous-and-homologous-complex-cycles, cor-index-of-a-cycle-is-locally-constant-and-vanishes-far-from-its-trace]
forward_refs: [thm-global-cauchy-integral-formula-homology]
proof_strategy: direct
verification:
  audited: 2026-09-06
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Richard S. Laugesen, Harmonic Analysis Lecture Notes, Theorem 4.3"
      url: "https://arxiv.org/pdf/0903.3845"
---

## Statement

Assume the Axiom of Choice. Let $f\in A(\mathbb T)$ and let $\Phi$ be holomorphic on an open neighbourhood of $f(\mathbb T)$. Then $\Phi\circ f\in A(\mathbb T)$.

## Facts & Assumptions

**Given:** The Axiom of Choice, $f\in A(\mathbb T)$, and $\Phi$ holomorphic near the compact set $f(\mathbb T)$.

[L1] A nowhere-zero member of $A(\mathbb T)$ has its reciprocal in $A(\mathbb T)$ ([[thm-wiener-lemma-for-absolutely-convergent-fourier-series]]).

[L2] $A(\mathbb T)$ is complete and closed under multiplication ([[thm-wiener-algebra-is-a-banach-algebra]]).

[L3] Cauchy's formula holds for null-homologous complex cycles ([[thm-global-cauchy-integral-formula-homology]]).

## Proof

**Proof technique:** direct.

1.1 Let $\Omega$ be an open set on which $\Phi$ is holomorphic and which contains $f(\mathbb T)$. The compact-neighbourhood lemma [[lem-compact-set-has-a-jordan-neighborhood-inside-an-open-set]] gives a finite union $J$ of closed grid rectangles with $f(\mathbb T)\subseteq\operatorname{int}J\subseteq J\subseteq\Omega$. Orient the frontier edges of the constituent grid cells positively and cancel each internal edge against its reverse. The resulting polygonal chain $\Gamma$ is a cycle in $\Omega\setminus f(\mathbb T)$, with $n(\Gamma,w)=1$ for $w\in f(\mathbb T)$ and $n(\Gamma,w)=0$ for $w\notin\Omega$: summing the cell indices first proves this away from the grid lines, and local constancy of the cycle index extends it to every point off the frontier. Thus $\Gamma$ is null-homologous in $\Omega$. For $z\in\Gamma^*$, $z-f$ has no zero on $\mathbb T$, so $(z-f)^{-1}\in A(\mathbb T)$ by [L1]. [L1, given, choose, algebra]

2.1 The map $z\mapsto\Phi(z)(z-f)^{-1}$ is continuous into $A(\mathbb T)$ (the inverse identity follows from $(z-f)^{-1}-(w-f)^{-1}=(w-z)(z-f)^{-1}(w-f)^{-1}$). Hence its normalized chain integral $$F:=\frac{1}{2\pi i}\int_\Gamma\Phi(z)(z-f)^{-1}\,dz$$ is an $A(\mathbb T)$ element, as the finite sum of norm-limits of edgewise Riemann sums by [L2]. [L2, step 1.1, algebra]

3.1 Evaluation at $x$ commutes with those norm-limits. Since step 1.1 gives $n(\Gamma,f(x))=1$ and makes $\Gamma$ null-homologous in $\Omega$, [L3] applied to $\Phi$ gives $F(x)=\Phi(f(x))$. Thus $F=\Phi\circ f$ and belongs to $A(\mathbb T)$. [L3, step 1.1, step 2.1] ∎
