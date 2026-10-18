---
id: lem-anyonic-general-split-tree-recoupling
kind: lemma
title: "Split-tree recoupling in a complex fusion category"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps: [def-fusion-and-multifusion-category, def-absolutely-simple-object, def-qc-tqc-unitary-fusion-category, def-qc-tqc-f-symbol]
justified_by: []
proof_strategy: direct
axiom_use: None; only finite decompositions and finite basis selections are used.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
      locator: "§§2.1, 4.1: associators and finite semisimple tensor categories."
    - title: "David Penneys, Unitary Fusion Categories, Math 8800 lecture notes"
      url: "https://people.math.osu.edu/penneys.2/UQSL/ArchivedNotes/TPM/FusionCats.pdf"
      locator: "§3.5: multiplicity bases and recoupling matrices."
---

## Statement

Let $\mathcal C$ be a complex fusion category. Fix representatives for internal simple labels,
a finite ordered list of simple inputs, a simple total charge $c$, and
bases of every split multiplicity space $\operatorname{Hom}(z,x\otimes y)$
used in its binary trees. External simple objects may be arbitrary; fix
isomorphisms to their representatives whenever an endpoint identification
is needed. Composing these split vertices along any fixed
tree $T$ gives a basis of $\operatorname{Hom}(c,T)$. If
$A:T\to T'$ is a composite of associators and their inverses, its
**split-tree recoupling matrix** is the matrix of
$h\mapsto A\circ h$ in those bases; it is invertible and retains all
simple labels and multiplicity indices.

In a unitary fusion category with orthonormal split vertex bases, these
tree bases are orthonormal and the recoupling matrices are unitary. For a
local left-to-right associator, if the split bases are the adjoints of the
fusion bases in [[def-qc-tqc-f-symbol]], its split matrix is
$\overline{F_c^{xyz}}$, the entrywise conjugate of that item's
inverse-precomposition matrix. These are two explicitly different Hom
conventions; neither positivity nor a dagger is needed for the general
invertibility assertion.

## Facts & Assumptions

**Given:** The category, fixed representative labels, finite trees and vertex bases in the Statement.

[F1] [[def-fusion-and-multifusion-category]]: every object is a finite direct sum of simple objects, and tensor product is bilinear.

[F2] [[def-absolutely-simple-object]]: the endomorphisms of a simple charge are scalar, and Hom spaces between distinct simple representatives vanish.

[F3] [[def-qc-tqc-unitary-fusion-category]]: in the unitary case orthogonal decompositions exist, tensor product preserves dagger, and the associator is unitary.

[F4] [[def-qc-tqc-f-symbol]]: in fusion bases the local associator matrix is defined by $f_j\circ\alpha^{-1}=\sum_kF_{kj}g_k$.

## Proof

**Given:** The data of the Statement, with unitarity assumed only for the last two steps.

1.1 For an object $X$, a semisimple decomposition into representative simples supplies inclusions $i_{s,\mu}:s\to X$ and retractions $p_{s,\mu}:X\to s$ with $p_{s,\mu}i_{t,\nu}=\delta_{st}\delta_{\mu\nu}\operatorname{id}_s$ (zero when the types differ) and $\sum_{s,\mu}i_{s,\mu}p_{s,\mu}=\operatorname{id}_X$. By [F2], the inclusions for a fixed $s$ form a basis of $\operatorname{Hom}(s,X)$. Replacing them by any other basis multiplies their columns by an invertible matrix; multiplying the retractions by its inverse retains both identities. Thus any chosen split basis can be used as the inclusions of a decomposition. [F1, F2, given, construct, algebra]

1.2 Apply step 1.1 recursively up the finite binary tree. A leaf is its input simple object, with its chosen isomorphism from the representative as inclusion (the identity for a representative input). At a vertex, tensor the already constructed decompositions of its two child objects, and then decompose each tensor product $x\otimes y$ using its chosen split basis. The inclusions and retractions of the resulting decomposition are the composites of the child maps and the chosen vertex maps; bilinearity preserves their two identities. This constructs a decomposition at each vertex, hence at the root, after finitely many operations. Applying $\operatorname{Hom}(c,-)$ to the root decomposition selects precisely the copies of the representative isomorphic to $c$ by [F2]; compose their inclusions with the fixed isomorphism from $c$ to that representative. Their inclusion composites are exactly the asserted split-tree basis, with every multiplicity index retained. [F1, F2, step 1.1, construct, algebra]

2.1 Each associator and its inverse is an isomorphism. Hence $h\mapsto A\circ h$ is linear and bijective, with inverse $h'\mapsto A^{-1}\circ h'$. Step 1.2 supplies bases on both sides, so its matrix is invertible. Matrix multiplication sums over the full intermediate tree bases, including every simple and multiplicity label; no multiplicity-free assumption has entered. This proves the general assertion. [F1, step 1.2, given, construct, algebra]

3.1 In the unitary case, start with orthogonal decompositions in step 1.1. An orthonormal change of inclusion basis is unitary and retains $p_{s,\mu}=i_{s,\mu}^\dagger$. Tensor compatibility and composition therefore make the decompositions in step 1.2 orthogonal. Their tree inclusions are orthonormal for the pairing $g^\dagger h=\langle h,g\rangle\operatorname{id}_c$. For unitary $A$ one has $(A g)^\dagger(A h)=g^\dagger A^\dagger A h=g^\dagger h$. Thus the bijection of step 2.1 is unitary in these orthonormal bases. [F2, F3, step 1.1, step 1.2, step 2.1, algebra]

3.2 Taking daggers in [F4] gives $\alpha\circ f_j^\dagger=\sum_k\overline{F_{kj}}g_k^\dagger$, since $\alpha$ is unitary. The maps $f_j^\dagger,g_k^\dagger$ are exactly the adjoint split-tree bases. Thus the local split recoupling matrix is $\overline F$. Together with steps 2.1 and 3.1 this proves the general and unitary claims, including zero-dimensional spaces, whose matrices are the unique empty invertible maps. [F3, F4, step 2.1, step 3.1, algebra] ∎
