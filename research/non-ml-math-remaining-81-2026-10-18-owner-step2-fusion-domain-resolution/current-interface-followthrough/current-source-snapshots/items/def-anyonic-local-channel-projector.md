---
id: def-anyonic-local-channel-projector
kind: definition
title: "Local anyonic channel projector"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 6
deps: [ def-anyonic-fusion-path-space, def-monoidal-category, def-fusion-and-multifusion-category, def-absolutely-simple-object, def-qc-tqc-unitary-fusion-category, def-qc-tqc-f-symbol, thm-anyonic-path-space-is-hilbert-under-unitarity ]
justified_by: []
proof_strategy: direct
axiom_use: None; only finite decompositions and finite basis selections are used.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "David Penneys, Unitary Fusion Categories, Math 8800 lecture notes"
      url: "https://people.math.osu.edu/penneys.2/UQSL/ArchivedNotes/TPM/FusionCats.pdf"
      locator: "§3.5, PDF pp. 14–16: orthonormal F-moves between fusion trees."
    - title: "Shu-Heng Shao, What’s Done Cannot Be Undone: TASI Lectures on Non-Invertible Symmetries"
      url: "https://arxiv.org/pdf/2308.00747"
      locator: "§3.4.1, PDF pp. 34–35, equation (3.68): local recoupling and channel projection."
---

## Definition

Fix a fusion-path space with repeated simple site charge $a$, a position $i$ with two adjacent $a$-labels, and a simple output $s$ of $a\otimes a$, chosen from the fixed internal representative set of [[def-anyonic-fusion-path-space]]. Choose bases in the split spaces $\operatorname{Hom}(z,x\otimes y)$ at every vertex of the trees used below, retaining the fixed path vertex bases on the fixed tree. In the tree basis where this adjacent pair is fused first, let $\Pi_s$ be the projection onto the direct summand with pair output $s$, acting as the identity on every multiplicity index inside that channel and as zero on all other pair outputs. Let $A_i:T_{\mathrm{fixed}}\to T_{\mathrm{pair}}$ be a typed composite of associators and their inverses carrying the fixed path tree to this pair-first tree, without permuting the ordered inputs (including the boundary charge). In the split-tree bases of $\operatorname{Hom}(c,T)$, let $F_i$ be the matrix of $h\mapsto A_i\circ h$, with target coordinates as rows and source coordinates as columns. The proof below constructs these bases and proves invertibility in any complex fusion category. Define the **local channel projector** in the fixed path basis by

$$P_{i,s}:=F_i^{-1}\Pi_sF_i.$$

This is an idempotent for any fusion category because $F_i$ is invertible. In a unitary fusion category with orthonormal tree bases, $F_i$ is unitary and $P_{i,s}$ is an orthogonal projection. The channel projection includes every multiplicity coordinate; the definition has no multiplicity-free restriction. The split Hom convention here is $\operatorname{Hom}(c,T)$, as in [[def-anyonic-fusion-path-space]]. In the unitary case with adjoint vertex bases, each local left-to-right split recoupling matrix is the entrywise conjugate of the QC25 inverse-precomposition F matrix, as proved below; they agree for the displayed real Fibonacci and Ising blocks.

## Facts & Assumptions

**Given:** The complex fusion category, simple external objects, internal representative labels, finite trees, vertex bases, and channel projection in the Definition. Unitarity is assumed only for the unitary clauses.

[F1] [[def-fusion-and-multifusion-category]]: every object is a finite direct sum of simple objects, and tensor product is bilinear.

[F2] [[def-absolutely-simple-object]]: simple endomorphisms are scalar, and Hom spaces between distinct simple representatives vanish.

[F3] [[def-monoidal-category]]: the associator is an isomorphism; tensor product is a bifunctor.

[F4] [[def-qc-tqc-unitary-fusion-category]]: in the unitary case orthogonal decompositions exist, tensor product preserves dagger, and associators are unitary. The split path inner product is specified in [[thm-anyonic-path-space-is-hilbert-under-unitarity]].

[F5] [[def-qc-tqc-f-symbol]]: in the unitary fusion Hom convention the local associator matrix satisfies $f_j\circ\alpha^{-1}=\sum_kF_{kj}g_k$.

## Proof

**Given:** The Definition's split-tree coordinate data, with no dagger or positivity assumed in steps 1.1–2.1.

1.1 A semisimple decomposition of an object $X$ has inclusions $i_{z,\mu}:z\to X$ and retractions $p_{z,\mu}:X\to z$, with $p_{z,\mu}i_{z,\nu}=\delta_{\mu\nu}\operatorname{id}_z$, zero cross-composites for distinct representatives, and $\sum_{z,\mu}i_{z,\mu}p_{z,\mu}=\operatorname{id}_X$. By [F2], its inclusions for each $z$ form a basis of $\operatorname{Hom}(z,X)$. Any other basis is obtained by an invertible column change; multiplying the retractions by the inverse matrix retains both identities. Thus any specified split basis can be the inclusion basis of such a decomposition. A simple leaf itself has the one-term decomposition with identity inclusion, even when it is an external object different from its representative. [F1, F2, given, construct, algebra]

1.2 Build up a finite binary tree from its leaves. Suppose its child objects $T_L,T_R$ have decompositions with inclusion bases $(i_{x,\mu})$ and $(j_{y,\nu})$ as in step 1.1. Tensoring their decompositions gives inclusions $i_{x,\mu}\otimes j_{y,\nu}$ of $x\otimes y$ into $T_L\otimes T_R$, with tensor retractions whose composites and sum satisfy the same identities by bifunctoriality. Therefore, for any simple output $z$, composition gives the isomorphism $\bigoplus_{x,y,\mu,\nu}\operatorname{Hom}(z,x\otimes y)\to\operatorname{Hom}(z,T_L\otimes T_R)$; its inverse applies those tensor retractions. Inserting the specified vertex basis in each summand produces exactly all split-tree composites for output $z$, and proves they are a basis. For a nonroot subtree take $z$ once over the internal representative set and apply step 1.1 to obtain its decomposition. At the root use the actual external output $c$ and its specified vertex bases directly. This finite recursion proves the basis assertion for arbitrary external simple objects, without requiring arbitrary endpoint bases to be transported copies of representative bases. Every internal simple label and every multiplicity index is retained. [F1, F2, F3, step 1.1, construct, algebra]

2.1 Postcomposition by $A_i$ is linear and invertible, with inverse postcomposition by $A_i^{-1}$. Step 1.2 supplies bases on both sides, hence its matrix $F_i$ is invertible. The pair-first basis is partitioned by the pair output $s$, retaining every coordinate within that channel, so $\Pi_s^2=\Pi_s$. Consequently $P_{i,s}^2=F_i^{-1}\Pi_s^2F_i=P_{i,s}$, proving the general algebraic assertion without unitarity. [F3, step 1.2, given, algebra]

3.1 In the unitary case choose orthonormal split vertex bases. Start step 1.1 with an orthogonal decomposition; any orthonormal change of its inclusion basis is unitary and retains $p_{z,\mu}=i_{z,\mu}^\dagger$. Tensor compatibility and composition make the decompositions in step 1.2 orthogonal. Thus its tree inclusions are orthonormal for $g^\dagger h=\langle h,g\rangle\operatorname{id}_c$. For unitary $A_i$ one has $(A_i g)^\dagger(A_i h)=g^\dagger A_i^\dagger A_i h=g^\dagger h$. Its matrix $F_i$ is therefore unitary. The coordinate projection $\Pi_s$ is self-adjoint in the orthonormal pair-first basis, so $P_{i,s}=F_i^\dagger\Pi_sF_i$ is self-adjoint as well as idempotent. [F2, F4, step 1.1, step 1.2, step 2.1, algebra]

3.2 To compare Hom conventions, take daggers in [F5]. Unitarity of the associator gives $\alpha\circ f_j^\dagger=\sum_k\overline{F_{kj}}g_k^\dagger$. The maps $f_j^\dagger,g_k^\dagger$ are exactly the corresponding adjoint split-tree bases. Hence the split postcomposition matrix for this local move is $\overline F$, while the QC25 fusion Hom matrix is $F$. This proves the claimed convention conversion and completes the well-definedness and unitary assertions, including zero-dimensional spaces with their unique empty coordinate maps. [F4, F5, step 2.1, step 3.1, algebra] ∎

## Coordinate convention

The coordinate convention is illustrated below: vectors move from the fixed tree to the pair-first tree by $F_i$, the channel projection acts there, and $F_i^{-1}$ returns to the fixed tree. The curved arrow denotes the defined composite, not an additional morphism.

```tikzcd
\mathcal H_{\mathrm{fixed}} \arrow[r,"F_i"] \arrow[rrr,bend right=35,"P_{i,s}"'] & \mathcal H_{\mathrm{pair}} \arrow[r,"\Pi_s"] & \mathcal H_{\mathrm{pair}} \arrow[r,"F_i^{-1}"] & \mathcal H_{\mathrm{fixed}}
```
