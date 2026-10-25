---
id: thm-generic-height-functions-on-an-embedded-compact-manifold-are-morse
kind: theorem
title: "For a compact manifold embedded in Euclidean space, the restricted linear height is Morse for generic directions"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-morse-functions-are-transverse-differentials, prop-the-zero-section-is-a-smooth-embedding, thm-transverse-preimage-theorem, thm-morse-sard-for-euclidean-maps, def-null-subset-of-a-smooth-manifold]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Marco Gualtieri, Topology I: Smooth Manifolds, Part 10"
      url: "https://www.math.toronto.edu/mgualt/courses/17-1300/docs/17-1300-notes-10.pdf"
    - title: "Shintaro Fushida-Hardy, Morse theory"
      url: "https://www.scribd.com/document/488533132/morse"
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-02-maintenance-receipts.jsonl (thm-generic-height-functions-on-an-embedded-compact-manifold-are-morse). No independent judge or whole-closure certification.
    delegated_by: owner
---

## Statement

Let $M\subseteq\mathbb R^N$ be a compact embedded smooth manifold.

- If $N=1$, then every nonzero linear functional on $\mathbb R$ restricts to a
  Morse function on $M$.
- If $N\ge2$, then there is a subset $E\subseteq S^{N-1}$ that is
  $\mathcal A$-null for every smooth atlas $\mathcal A$ of $S^{N-1}$
  ([[def-null-subset-of-a-smooth-manifold]]), such that for
  every $u\in S^{N-1}\setminus E$, the height function
  $$h_u:M\to\mathbb R,\qquad h_u(x)=u\cdot x$$
  is Morse.

Thus restricted linear heights are Morse for generic directions.

## Facts & Assumptions

**Given:** A compact embedded smooth manifold $M\subseteq\mathbb R^N$.

[F1] A smooth function is Morse exactly when its differential section is transverse to the zero section ([[lem-morse-functions-are-transverse-differentials]]).

[L1] The critical values of a smooth Euclidean map are null ([[thm-morse-sard-for-euclidean-maps]]); transverse preimages are embedded submanifolds ([[thm-transverse-preimage-theorem]]).

[L2] The zero section of the cotangent bundle is an embedded submanifold ([[prop-the-zero-section-is-a-smooth-embedding]]). Manifold nullity is chartwise Euclidean nullity ([[def-null-subset-of-a-smooth-manifold]]).

[A1] For $u\in S^{N-1}$ and $x\in M$, the differential of $h_u$ at $x$ is the cotangent vector $v\mapsto u\cdot v$ on $T_xM$. If $d(h_u)_x=0$, then $T_xM\subseteq u^\perp=T_uS^{N-1}$, so varying the parameter $u$ in tangent directions to the sphere produces every cotangent vector on $T_xM$.

## Proof

**Proof technique:** direct.

1.1 If $N=1$, then every embedded compact submanifold of $\mathbb R$ is zero-dimensional, hence finite. The restriction of a nonzero linear functional to a finite manifold has all points critical and nondegenerate in the zero-dimensional Morse convention, so it is Morse. [given, algebra]

1.2 Assume now that $N\ge2$. Define a smooth family of cotangent sections by $$\mathcal D:M\times S^{N-1}\to T^*M,\qquad \mathcal D(x,u)=d(h_u)_x.$$ By [L2], its target zero section is an embedded submanifold. At any zero $(x,u)$, [A1] says that the parameter derivative in tangent directions to $S^{N-1}$ spans the whole fibre $T_x^*M$, so $\mathcal D$ is transverse to the zero section. [L2, A1, given, construct]

2.1 Let $W=\mathcal D^{-1}(0_{T^*M})$. Since the total family is transverse to the zero section, [L1] makes $W$ an embedded submanifold of dimension $N-1$. It is closed in the compact space $M\times S^{N-1}$, hence compact. Write $\pi:W\to S^{N-1}$ for the parameter projection. In local coordinates near $(x,u)\in W$, the zero condition is $H(x,u)=0$ for a map to $\mathbb R^{\dim M}$ whose full derivative is surjective. The tangent space of $W$ is $\ker dH$. The derivative $d\pi$ is surjective exactly when for each parameter tangent $w$ there is a source tangent $v$ with $dH(v,w)=0$. Because the full $dH$ is surjective, this is equivalent to surjectivity of $d_xH$, which is precisely transversality of the slice $d(h_u)$ to the zero section. Thus bad directions are exactly the critical values of $\pi$. [F1, L1, L2, step 1.2]

3.1 Cover the compact $W$ by finitely many source charts. Fix any smooth target chart $\psi:V\to\mathbb R^{N-1}$ on the sphere, and restrict each source chart to the open preimage of $V$. In those finitely many Euclidean coordinates, $\psi\circ\pi$ is smooth and [L1] makes each critical-value image null. Their finite union equals $\psi(E\cap V)$ and is null. Since this holds for every target chart, $E$ is null in every smooth atlas directly; no countable atlas or general manifold Sard theorem is needed. Outside $E$, [F1] makes $h_u$ Morse. [F1, L1, L2, step 2.1] ∎
