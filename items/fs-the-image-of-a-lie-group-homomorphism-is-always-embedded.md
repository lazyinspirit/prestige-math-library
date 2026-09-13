---
id: fs-the-image-of-a-lie-group-homomorphism-is-always-embedded
kind: false-statement
title: A homomorphism image need not be embedded
status: draft
origin: pipeline
pipeline_run: phase-2-next-21
deps: [thm-image-of-a-lie-group-homomorphism-is-an-immersed-lie-subgroup, lem-irrational-torus-flow-is-free-with-dense-orbits, def-immersed-embedded-and-closed-lie-subgroup]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: John M. Lee, Introduction to Smooth Manifolds, 2nd ed.
      url: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf
      locator: Example 21.3, printed page 542
    - title: Pavel Etingof, MIT 18.745 Lie Groups and Lie Algebras I
      url: https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf
      locator: Irrational winding Examples 3.14(2) and 4.6(1), printed pages 26 and 29
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Statement

**False claim:** the image of every smooth Lie-group homomorphism is an
embedded Lie subgroup.

## Facts & Assumptions

**Given:** An irrational $\alpha\in\mathbb R$ and the winding homomorphism
$i:\mathbb R\to\mathbb T^2$ below.

[F1] The irrational winding is an injective immersion and homomorphism with
dense image. [[lem-irrational-torus-flow-is-free-with-dense-orbits]].

[F2] An immersed subgroup carries an intrinsic topology; an embedded subgroup
has the ambient subspace topology.
[[def-immersed-embedded-and-closed-lie-subgroup]].

[F3] Under $\mathrm{AC}_\omega$, every homomorphism image has its canonical
immersed structure. [[thm-image-of-a-lie-group-homomorphism-is-an-immersed-lie-subgroup]].

## Refutation

**Proof technique:** exhibit ambient convergence with no intrinsic convergence.

1.1 Let $$i(t)=(e^{2\pi it},e^{2\pi i\alpha t}).$$ By [F1], it is an injective smooth homomorphism and immersion, and its image is dense in $\mathbb T^2$. Thus it is an immersed one-dimensional subgroup with intrinsic parameter $t\in\mathbb R$. [F1, F2]

1.2 For each $j\ge1$, the finite set $\{\lVert q\alpha\rVert:1\le q\le j\}$ has a positive minimum $d_j$. Choose an integer $N$ with $1/N<\min(d_j,1/j)$. Applying the finite pigeonhole principle to the $N+1$ fractional parts of $0,\alpha,\ldots,N\alpha$ gives $1\le q\le N$ with $\lVert q\alpha\rVert<1/N$. Such a $q$ must exceed $j$. Let $q_j$ be the least positive integer with $q_j>j$ and $\lVert q_j\alpha\rVert<1/j$; taking the least witness avoids countable choice. [given, algebra]

2.1 Then $q_j\to+\infty$ in the intrinsic source $\mathbb R$, while $$i(q_j)=(1,e^{2\pi i\alpha q_j})\longrightarrow(1,1)$$ in the ambient torus and hence in the subspace topology on the image. If the image were embedded, the inverse $i^{-1}:i(\mathbb R)\to\mathbb R$ would be continuous, forcing $q_j=i^{-1}(i(q_j))\to0$, a contradiction. [F2, step 1.2, contradiction]

3.1 Therefore a homomorphism image can be immersed but nonembedded. The failure is topological, not algebraic; compactness of the ambient torus alone would not prove it. The counterexample and sequence use no choice. Under countable choice, [F3] identifies the intrinsic structure just used with the canonical image structure. [F1, F2, F3, step 2.1] ∎
