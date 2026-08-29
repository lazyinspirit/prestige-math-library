---
id: fs-every-hausdorff-locally-euclidean-space-is-a-manifold
kind: false-statement
title: "Hausdorff and locally Euclidean do not by themselves make a manifold"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-topological-manifold-without-boundary, def-the-long-line,
       thm-the-long-line-is-a-connected-linear-continuum, thm-second-countable-implies-separable]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-29
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  scraped: []
  references:
    - title: "Rob van der Vorst, Introduction to differentiable manifolds, §1"
      url: "https://www.few.vu.nl/~vdvorst/notes-2012.pdf"
    - title: "Nigel Hitchin, Differentiable Manifolds, §2.2"
      url: "https://web.archive.org/web/20201111215108id_/https://people.maths.ox.ac.uk/hitchin/files/LectureNotes/Differentiable_manifolds/manifolds2014.pdf"
pipeline_run: null
---

## Statement

**False claim (assuming $\mathrm{AC}_\omega$):** every Hausdorff locally
Euclidean space is a manifold.

## Facts & Assumptions

**Given:** The library convention for manifolds, the long line $\mathbb L$,
and the Axiom of Countable Choice $\mathrm{AC}_\omega$.

[F1] A topological manifold must be Hausdorff, second countable, and locally Euclidean ([[def-topological-manifold-without-boundary]]).

[F2] The closed long ray $R=\omega_1\times[0,1)$ is built from blocks
$\{\alpha\}\times[0,1)$ ordered like intervals and has no greatest element.
The long line $\mathbb L$ is a reversed open copy of $R$ followed by a closed
copy, with the order topology ([[def-the-long-line]]).

[L1] Assuming $\mathrm{AC}_\omega$, every second-countable space is separable ([[thm-second-countable-implies-separable]]).

[L2] Assuming $\mathrm{AC}_\omega$, every at most countable subset of $R$ is bounded above ([[thm-the-long-line-is-a-connected-linear-continuum]]).

## Refutation

**Proof technique:** direct.

1.1 The long line $\mathbb L$ is Hausdorff and locally Euclidean of dimension $1$. It is linearly ordered with the order topology, and its order is dense, so two distinct points are separated by disjoint open rays cut at an intermediate point. Every point lies inside a block, at a block boundary, or at the centre where the two copies meet; the block description in [F2] gives in each case an order interval homeomorphic to an open interval of $\mathbb R$. Unlike the closed long ray, $\mathbb L$ has no endpoint. [F2]

1.2 Suppose $\mathbb L$ were second countable. Then [L1] would make it separable, so there would be an at most countable dense subset $D\subseteq\mathbb L$. Let $D_+:=\{x\in R:(1,x)\in D\}$ be the coordinates of the points of $D$ in the right-hand copy. This is at most countable, so [L2] gives an upper bound $b\in R$. Choose $b<c<d$ in $R$, using the absence of a greatest element and the interval-like blocks in [F2]. The nonempty open interval $((1,b),(1,d))$ contains $(1,c)$, contains no point from the left-hand copy, and contains no point of $D_+$ because $b$ bounds it. It is therefore disjoint from $D$, contradicting density. Thus $\mathbb L$ is not second countable. [F2, L1, L2, assume-hyp]

2.1 Step 1.1 gives a Hausdorff locally Euclidean space, while step 1.2 shows that it fails the second-countability clause of [F1]. Therefore the claim is false. [F1, step 1.1, step 1.2] ∎
