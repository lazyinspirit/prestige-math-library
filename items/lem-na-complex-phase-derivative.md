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
axiom_use: "No choice axiom is used; the argument uses explicit finite formulas
  and the cited calculus results."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "NIST Digital Library of Mathematical Functions, §2.3"
      url: "https://dlmf.nist.gov/2.3"
    - title: "A. Iserles, S. P. Nørsett, and S. Olver, Highly oscillatory quadrature:
        The story so far, §3.3"
      url: "https://www.cs.ox.ac.uk/sheehan.olver/papers/storysofar.pdf"
verification:
  precheck: pass
---

## Statement

If $a<b$, $g\in C^1[a,b]$ is real-valued and $\omega\in\mathbb R$, then $x\mapsto e^{i\omega g(x)}$ is continuously differentiable and
$$\frac{d}{dx}e^{i\omega g(x)}=i\omega g'(x)e^{i\omega g(x)}.$$

## Facts & Assumptions

**Given:** $a<b$, a real $C^1$ function $g$ on $[a,b]$, and a real number $\omega$.

[F1] [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]: for real $y$, $e^{iy}=\cos y+i\sin y$.

[F2] [[thm-sine-and-cosine-derivatives]]: $(\sin y)'=\cos y$ and $(\cos y)'=-\sin y$.

[F3] [[thm-chain-rule]]: if $v:A\to B\subseteq\mathbb R$ is differentiable at a limit point $x\in A$ of $A$, and $u:B\to\mathbb R$ is differentiable at the limit point $v(x)$ of $B$, then $(u\circ v)'(x)=u'(v(x))v'(x)$.

## Proof

1.1 Set $\theta(x)=\omega g(x)$. By [F1], $e^{i\theta(x)}=\cos(\theta(x))+i\sin(\theta(x))$. [given, F1, construct]

2.1 The scalar difference quotient gives $\theta'(x)=\omega g'(x)$. Apply [F3] with $A=[a,b]$, $B=\mathbb R$, $v=\theta$, and $u=\sin$ or $\cos$: every $x\in[a,b]$ is a limit point of $[a,b]$ since $a<b$, and $\theta(x)$ is a limit point of $\mathbb R$, where both outer functions are differentiable by [F2]. Thus [F2] and step 1.1 give the componentwise derivative $-\omega g'(x)\sin(\theta(x))+i\omega g'(x)\cos(\theta(x))=i\omega g'(x)e^{i\theta(x)}$, including the one-sided endpoint derivatives. Continuity follows from continuity of $g'$, $g$, and the trigonometric functions. [given, F2, F3, step 1.1, algebra] ∎
