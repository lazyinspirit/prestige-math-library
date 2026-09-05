---
id: thm-generic-height-functions-on-an-embedded-compact-manifold-are-morse
kind: theorem
title: "For a compact manifold embedded in Euclidean space, the restricted linear height is Morse for generic directions"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-morse-functions-are-transverse-differentials, thm-parametric-transversality, prop-the-zero-section-is-a-smooth-embedding]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-05
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Marco Gualtieri, Topology I: Smooth Manifolds, Part 10"
      url: "https://www.math.toronto.edu/mgualt/courses/17-1300/docs/17-1300-notes-10.pdf"
    - title: "Shintaro Fushida-Hardy, Morse theory"
      url: "https://www.scribd.com/document/488533132/morse"
---

## Statement

Let $M\subseteq\mathbb R^N$ be a compact embedded smooth manifold.

- If $N=1$, then every nonzero linear functional on $\mathbb R$ restricts to a
  Morse function on $M$.
- If $N\ge2$, then there is a null subset $E\subseteq S^{N-1}$ such that for
  every $u\in S^{N-1}\setminus E$, the height function
  $$h_u:M\to\mathbb R,\qquad h_u(x)=u\cdot x$$
  is Morse.

Thus restricted linear heights are Morse for generic directions.

## Facts & Assumptions

**Given:** A compact embedded smooth manifold $M\subseteq\mathbb R^N$.

[F1] A smooth function is Morse exactly when its differential section is transverse to the zero section ([[lem-morse-functions-are-transverse-differentials]]).

[L1] Parametric transversality makes the bad parameter set null when the total family is transverse to the target submanifold ([[thm-parametric-transversality]]).

[L2] The zero section of the cotangent bundle is an embedded submanifold ([[prop-the-zero-section-is-a-smooth-embedding]]).

[A1] For $u\in S^{N-1}$ and $x\in M$, the differential of $h_u$ at $x$ is the cotangent vector $v\mapsto u\cdot v$ on $T_xM$. If $d(h_u)_x=0$, then $T_xM\subseteq u^\perp=T_uS^{N-1}$, so varying the parameter $u$ in tangent directions to the sphere produces every cotangent vector on $T_xM$.

## Proof

**Proof technique:** direct.

1.1 If $N=1$, then every embedded compact submanifold of $\mathbb R$ is zero-dimensional, hence finite. The restriction of a nonzero linear functional to a finite manifold has all points critical and nondegenerate in the zero-dimensional Morse convention, so it is Morse. [given, algebra]

1.2 Assume now that $N\ge2$. Define a smooth family of cotangent sections by $$\mathcal D:M\times S^{N-1}\to T^*M,\qquad \mathcal D(x,u)=d(h_u)_x.$$ By [L2], its target zero section is an embedded submanifold. At any zero $(x,u)$, [A1] says that the parameter derivative in tangent directions to $S^{N-1}$ spans the whole fibre $T_x^*M$, so $\mathcal D$ is transverse to the zero section. [L2, A1, given, construct]

2.1 Applying [L1] to the family $\mathcal D$ shows that the set $E\subseteq S^{N-1}$ of directions for which $d(h_u)$ fails to be transverse to the zero section is null. For every $u\notin E$, [F1] makes $h_u$ a Morse function on $M$. [F1, L1, step 1.2]

3.1 Step 1.1 handles $N=1$, and step 2.1 handles $N\ge2$. Therefore restricted linear heights are Morse for generic directions. [step 1.1, step 2.1] ∎
