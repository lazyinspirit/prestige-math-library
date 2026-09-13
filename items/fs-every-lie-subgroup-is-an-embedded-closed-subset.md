---
id: fs-every-lie-subgroup-is-an-embedded-closed-subset
kind: false-statement
title: Not every Lie subgroup is embedded and closed
status: draft
origin: pipeline
deps: [def-immersed-embedded-and-closed-lie-subgroup, lem-irrational-torus-flow-is-free-with-dense-orbits]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: John M. Lee, Introduction to Smooth Manifolds, 2nd ed.
      url: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf
      locator: Example 21.3, printed page 542; immersed subgroup convention in Section 19.4
    - title: Pavel Etingof, MIT 18.745 Lie Groups and Lie Algebras I
      url: https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf
      locator: Definition 4.5 and Proposition 4.7, printed page 30
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Statement

**False claim:** every Lie subgroup is an embedded closed subset of its ambient
Lie group.

## Facts & Assumptions

**Given:** An irrational real number $\alpha$ and the homomorphism
$i:\mathbb R\to\mathbb T^2$ defined below.

[F1] A Lie subgroup in the standing convention is an injectively immersed
subgroup with its intrinsic manifold structure; embeddedness and closedness
are additional properties.
[[def-immersed-embedded-and-closed-lie-subgroup]].

[F2] The irrational flow on $\mathbb T^2$ is free and every one of its orbits
is dense; its identity orbit map is an injective immersion and a homomorphism.
[[lem-irrational-torus-flow-is-free-with-dense-orbits]].

## Refutation

**Proof technique:** direct.

1.1 Define $$i(t)=\left(e^{2\pi i t},e^{2\pi i\alpha t}\right).$$ It is a smooth homomorphism from $(\mathbb R,+)$ to $\mathbb T^2$. If $i(t)=(1,1)$, then $t$ and $\alpha t$ are integers, so irrationality forces $t=0$; hence $i$ is injective. Its derivative is the nonzero tangent vector $2\pi i(1,\alpha)$ at every point after translation, so it is an immersion. By [F1], its image with the transported intrinsic structure is a Lie subgroup. [given, F1, algebra]

2.1 This subgroup is dense by [F2], since it is the orbit through $(1,1)$ for the irrational flow. It is proper: points of the image whose first coordinate is $1$ have second coordinate in the countable set $\{e^{2\pi i\alpha n}:n\in\mathbb Z\}$, not all of $S^1$. Therefore the image is not closed. [F2, step 1.1]

2.2 It is not embedded. Fix $j\ge1$. Irrationality makes $d_j=\min\{\lVert q\alpha\rVert:1\le q\le j\}$ positive. Choose $N$ with $1/N<\min(d_j,1/j)$; placing the $N+1$ fractional parts of $0,\alpha,\ldots,N\alpha$ in $N$ equal subintervals gives, by the finite pigeonhole principle, a nonzero $q\le N$ with $\lVert q\alpha\rVert<1/N$. Necessarily $q>j$. Define $q_j$ to be the least positive integer with these two properties, which makes no countable choice. Then $i(q_j)=(1,e^{2\pi i\alpha q_j})\to(1,1)$ in the ambient subspace topology, but $q_j\to+\infty$ in the intrinsic copy of $\mathbb R$. If $i$ were an embedding, its inverse from the image to $\mathbb R$ would be continuous, contradicting this convergent sequence. [F1, step 1.1, algebra]

3.1 Thus the irrational winding is an immersed Lie subgroup that is neither closed nor embedded, refuting the claim. The intrinsic and ambient topologies, rather than the abstract subgroup law, are exactly where the failure occurs. [F1, step 2.1, step 2.2] ∎
