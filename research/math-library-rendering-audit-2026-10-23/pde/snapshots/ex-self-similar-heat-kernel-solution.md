---
id: ex-self-similar-heat-kernel-solution
kind: example
title: "The heat kernel is a self-similar solution with conserved unit mass"
status: published
origin: pipeline
deps:
  - def-countable-choice
  - def-heat-evolution-of-initial-data
  - def-heat-kernel
  - lem-heat-kernel-normalisation-scaling-and-derivatives
  - lem-heat-kernel-semigroup-identity
landmark: false
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    delegated_by: "owner via frontier-38-owner-30 build dispatch"
    scope: "Historical completed Step 5 full authored item reading, followed by recorded Step 7 current repair argument acceptance. The repair receipt records local author review; no independent repair audit is claimed. Direct prerequisite interfaces checked; no recursive audit of supplier proofs."
    evidence:
      - "research/frontier-38-owner-30-reader-3.md"
      - "research/frontier-38-owner-30-alpha-batch-3-5a.md"
      - "research/frontier-38-owner-30-step7-v2/step7-v2-repeat-r1-u3.json"
    content_sha256: "f90faee002406a8bc58d253d9e2029653ece1e6292b85d11372731535bd17e24"
  precheck: pass
sources:
  references:
    - title: "Victor Ivrii, Partial Differential Equations (University of Toronto, 2018, CC BY-SA)"
      url: "https://www.math.toronto.edu/courses/apm346h1/20181/PDE-textbook/PDE-textbook.pdf"
      locator: "§3.1.2, printed pp. 99–101, formulas (3.1.4)–(3.1.6) (the similarity transformation and the mass normalisation)"
    - title: "Jared Speck, MIT 18.152 Introduction to Partial Differential Equations, Class Meeting #5: The Fundamental Solution for the Heat Equation (Fall 2011)"
      url: "https://ocw.mit.edu/courses/18-152-introduction-to-partial-differential-equations-fall-2011/9acdeff6449529106ac254f7ada967da_MIT18_152F11_lec_05.pdf"
      locator: "Lemma 2.0.2, printed pp. 7–8 (invariance of the heat equation under parabolic dilations)"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript, AMS Graduate Studies in Mathematics)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "printed p. 152, formula (6.36)"
---

## Example

Assume Countable Choice. Let $n\ge1$ and $u(x,t):=\Gamma(x,t)$ on
$\mathbb R^n\times(0,\infty)$. Then $u$ solves the heat equation and is
invariant under parabolic dilations with amplitude $\lambda^n$:
$$u(\lambda x,\lambda^2t)=\lambda^{-n}u(x,t),\quad\text{equivalently}\quad\lambda^nu(\lambda x,\lambda^2t)=u(x,t),\qquad\lambda>0,$$
and its total mass is conserved: $\int_{\mathbb R^n}u(x,t)\,dx=1$ for every
$t>0$.

## Facts & Assumptions

**Given:** Countable Choice, $n\ge1$, $t>0$, $\lambda>0$ and $x\in\mathbb R^n$.

[A1] Countable Choice is the standing hypothesis of the kernel facts cited in [F1] and [F2] ([[def-countable-choice]]).

[F1] For every $t>0$ the kernel satisfies the unit-mass identity $\int_{\mathbb R^n}\Gamma(x,t)\,dx=1$, the parabolic scaling identity $\Gamma(\lambda x,\lambda^2t)=\lambda^{-n}\Gamma(x,t)$ for every $\lambda>0$, is $C^\infty$ on $\mathbb R^n\times(0,\infty)$, and solves $\partial_t\Gamma=\Delta_x\Gamma$ there ([[lem-heat-kernel-normalisation-scaling-and-derivatives]], [[def-heat-kernel]]).

[F2] For all $s,t>0$, $\Gamma_t*\Gamma_s=\Gamma_{t+s}$ ([[lem-heat-kernel-semigroup-identity]]), and the evolution $H_t$ of [[def-heat-evolution-of-initial-data]] acts by convolution with $\Gamma_t$.



## Verification

**Proof technique:** direct.

1.1 Solving the heat equation: by the smoothness and heat-equation clauses of [F1], the function $u(x,t)=\Gamma(x,t)$ is $C^\infty$ on $\mathbb R^n\times(0,\infty)$ and satisfies $\partial_tu(x,t)=\partial_t\Gamma(x,t)=\Delta_x\Gamma(x,t)=\Delta_xu(x,t)$ at every point. [A1, F1, given]

2.1 Parabolic self-similarity: the scaling clause of [F1] reads $\Gamma(\lambda x,\lambda^2t)=\lambda^{-n}\Gamma(x,t)$ for every $\lambda>0$; multiplying both sides by $\lambda^n$ gives the equivalent form $\lambda^nu(\lambda x,\lambda^2t)=u(x,t)$, equivalently $u(x,\lambda^2t)=\lambda^{-n}u(x/\lambda,t)$, so the profile at time $\lambda^2t$ has spatial scale multiplied by $\lambda$ and amplitude multiplied by $\lambda^{-n}$. [step 1.1, F1, given, algebra]

2.2 Conserved mass: the unit-mass clause of [F1] gives $\int_{\mathbb R^n}u(x,t)\,dx=\int_{\mathbb R^n}\Gamma(x,t)\,dx=1$ for every $t>0$, independently of $t$. [step 1.1, F1, given]

3.1 Steps 1.1, 2.1 and 2.2 show that $u=\Gamma$ solves the heat equation, satisfies the stated parabolic dilation law with amplitude $\lambda^n$, and has unit total mass at every positive time; the semigroup identity [F2] records the equivalent convolution form of the same one-parameter family. [step 1.1, step 2.1, step 2.2, F2, given] ∎
