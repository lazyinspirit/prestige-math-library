---
id: thm-poisson-representation-for-disc-harmonic-functions
kind: theorem
title: "A harmonic function is recovered from its values on any containing circle by the Poisson formula"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-poisson-integral-solves-the-disc-dirichlet-problem, cor-uniqueness-for-the-bounded-plane-dirichlet-problem]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "Sigurdur Helgason, MIT 18.112 Lecture 16: Harmonic Functions"
      url: "https://ocw.mit.edu/courses/18-112-functions-of-a-complex-variable-fall-2008/414780e0991d20cd338320d3784fae4d_lecture16.pdf"
pipeline_run: null
---

## Statement

Let $u$ be harmonic on an open set containing the closed disc
$\overline{D(a,R)}$, and let $z=a+\rho e^{i\phi}$ with $0\le\rho<R$. Then

$$u(z)=\frac{1}{2\pi}\int_0^{2\pi}\frac{R^2-\rho^2}{R^2-2R\rho\cos(\phi-t)+\rho^2}\,u(a+Re^{it})\,dt.$$

So a harmonic function on a disc is recovered from its boundary values on any
larger concentric circle lying inside its domain.

## Facts & Assumptions

**Given:** A harmonic function $u$ on a neighbourhood of $\overline{D(a,R)}$.

[L1] The Poisson integral gives the unique continuous harmonic extension from the unit-circle boundary to the closed unit disc ([[thm-poisson-integral-solves-the-disc-dirichlet-problem]]).

[L2] Two continuous harmonic functions on the same bounded domain with the same boundary values agree ([[cor-uniqueness-for-the-bounded-plane-dirichlet-problem]]).

## Proof

**Proof technique:** direct.

1.1 Define $v(w):=u(a+Rw)$ on $\overline{\mathbb D}$. Then $v$ is continuous on $\overline{\mathbb D}$, harmonic on $\mathbb D$, and has boundary values $v(e^{it})=u(a+Re^{it})$. [given, algebra]

2.1 By [L1], the Poisson integral of the boundary function $t\mapsto u(a+Re^{it})$ is a continuous harmonic function on $\overline{\mathbb D}$ with the same boundary values as $v$; [L2] therefore makes it equal to $v$ throughout $\overline{\mathbb D}$. [step 1.1, L1, L2]

3.1 Evaluating step 2.1 at $w=(z-a)/R=(\rho/R)e^{i\phi}$ gives exactly the displayed formula, because the unit-disc kernel there is $$\frac{1-(\rho/R)^2}{1-2(\rho/R)\cos(\phi-t)+(\rho/R)^2}=\frac{R^2-\rho^2}{R^2-2R\rho\cos(\phi-t)+\rho^2}.$$ [step 2.1, algebra] ∎
