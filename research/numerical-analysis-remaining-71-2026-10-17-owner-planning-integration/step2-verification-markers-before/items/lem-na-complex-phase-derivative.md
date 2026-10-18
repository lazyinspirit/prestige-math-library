---
id: lem-na-complex-phase-derivative
kind: lemma
title: Derivative of a complex oscillatory phase
status: draft
origin: pipeline
dependency_level: 1
deps:
  - def-na-finite-interval-oscillatory-integral
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
  - thm-sine-and-cosine-derivatives
  - thm-chain-rule
proof_strategy: direct
axiom_use: "No choice axiom is used; the argument uses explicit finite formulas and the cited calculus results."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "NIST Digital Library of Mathematical Functions, §2.3"
      url: "https://dlmf.nist.gov/2.3"
    - title: "A. Iserles, S. P. Nørsett, and S. Olver, Highly oscillatory quadrature: The story so far, §3.3"
      url: "https://www.cs.ox.ac.uk/sheehan.olver/papers/storysofar.pdf"
---

## Statement

If $a<b$, $g\in C^1[a,b]$ is real-valued and $\omega\in\mathbb R$, then $x\mapsto e^{i\omega g(x)}$ is continuously differentiable and
$$\frac{d}{dx}e^{i\omega g(x)}=i\omega g'(x)e^{i\omega g(x)}.$$

## Facts & Assumptions

**Given:** $a<b$, a real $C^1$ function $g$ on $[a,b]$, and a real number $\omega$.

[F1] [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]: for real $y$, $e^{iy}=\cos y+i\sin y$.

[F2] [[thm-sine-and-cosine-derivatives]]: $(\sin y)'=\cos y$ and $(\cos y)'=-\sin y$.

[F3] [[thm-chain-rule]]: for differentiable real functions $u,v$, $(u\circ v)'=(u'\circ v)v'$.

## Proof

1.1 Set $\theta(x)=\omega g(x)$. By [F1], $e^{i\theta(x)}=\cos(\theta(x))+i\sin(\theta(x))$. [given, F1, construct]

2.1 By [F2] and [F3], the derivative is $-\omega g'(x)\sin(\theta(x))+i\omega g'(x)\cos(\theta(x))=i\omega g'(x)e^{i\theta(x)}$, using step 1.1. Continuity of this derivative follows from continuity of $g'$ and the trigonometric functions. [F2, F3, step 1.1, algebra] ∎
