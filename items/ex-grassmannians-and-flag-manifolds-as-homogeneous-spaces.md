---
id: ex-grassmannians-and-flag-manifolds-as-homogeneous-spaces
kind: example
title: Grassmannians and flag manifolds as homogeneous spaces
status: draft
origin: pipeline
pipeline_run: phase-2-next-21
deps: [def-countable-choice, cor-transitive-smooth-actions-identify-m-with-g-mod-h]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: John M. Lee, Introduction to Smooth Manifolds, 2nd ed.
      url: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf
      locator: Examples 21.21–21.22 and complete homogeneous-space calculations, printed pages 554–555
    - title: Pavel Etingof, MIT 18.745 Lie Groups and Lie Algebras I
      url: https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf
      locator: Flag-manifold discussion in Section 4, printed pages 31–32
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Example

Assume $\mathrm{AC}_\omega$. For $0\le k\le n$,

$$\operatorname{Gr}_k(\mathbb R^n)\cong O(n)/(O(k)\times O(n-k)),$$

$$\operatorname{Gr}_k(\mathbb C^n)\cong U(n)/(U(k)\times U(n-k)).$$

More generally, if positive block sizes $n_1,\ldots,n_s$ sum to $n$, the
corresponding complete or partial real and complex flag manifolds are

$$O(n)/(O(n_1)\times\cdots\times O(n_s)),$$

$$U(n)/(U(n_1)\times\cdots\times U(n_s)),$$

as smooth homogeneous spaces.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, the standard inner products on
$\mathbb R^n$ and $\mathbb C^n$, and the indicated Grassmannians and flag
manifolds with their standard smooth structures.

[A1] A smooth transitive action of a Lie group identifies the manifold with
the quotient by the stabilizer. [[def-countable-choice]],
[[cor-transitive-smooth-actions-identify-m-with-g-mod-h]].

## Verification

**Proof technique:** choose adapted orthonormal bases and read off block stabilizers.

1.1 Given two $k$-planes, choose orthonormal bases for each and extend them to orthonormal bases of the ambient space. The orthogonal or unitary map between the adapted bases carries one plane to the other, proving transitivity. The stabilizer of the coordinate $k$-plane preserves it and its orthogonal complement, hence is exactly the block diagonal subgroup $O(k)\times O(n-k)$ or $U(k)\times U(n-k)$. Conversely every such block matrix stabilizes the plane. [given, algebra]

1.2 For a flag with successive quotient dimensions $n_1,\ldots,n_s$, choose an orthonormal basis adapted to all members of the flag. Mapping one adapted basis to another proves transitivity. A unitary or orthogonal transformation fixes the coordinate flag exactly when it preserves each successive orthogonal block, which gives the stated product block subgroup. These actions are smooth in the usual graph-coordinate charts for subspaces. [given, algebra]

2.1 Apply [A1] to steps 1.1 and 1.2. This gives all displayed equivariant diffeomorphisms. The cases $k=0$ or $k=n$ have stabilizer the whole group and quotient a point. Repeated or zero flag blocks are omitted because they do not change a flag; partial flags correspond to any positive composition of $n$. Countable choice is used through [A1]. [A1, step 1.1, step 1.2] ∎
