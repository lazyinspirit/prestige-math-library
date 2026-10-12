---
id: thm-the-crystal-of-level-one-fock-space-is-the-good-node-partition-graph
kind: theorem
title: "The crystal of the level-one Fock space is the good-node partition graph"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 18
deps: [def-good-and-cogood-nodes-by-residue-signature-reduction, lem-fixed-residue-node-cubes-realize-fock-i-strings-and-crystal-lattices, thm-the-fock-space-node-formulas-satisfy-the-quantum-affine-relations,
       lem-semi-infinite-wedges-are-indexed-by-partitions-and-give-node-action-formulas, def-crystal-lattice-and-crystal-basis, def-crystal-graph-epsilon-phi-and-weight,
       lem-the-node-count-is-the-level-one-cartan-pairing]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Kailash C. Misra and Tetsuji Miwa, Crystal base for the basic representation of $U_q(\\mathfrak{sl}(n))$, Comm. Math. Phys. 134 (1990), 79-88"
      url: "https://projecteuclid.org/journals/communications-in-mathematical-physics/volume-134/issue-1/Crystal-base-for-the-basic-representation-of-U_qgerm-sgerm-ln/cmp/1104201614.pdf"
      locator: "sec. 3, printed pp. 82-85: Theorem 3.2 (crystal base of the Fock space), Prop. 3.3 (graph condition)."
    - title: "Matthew Fayers, Partition models for the crystal of the basic $U_q(\\mathfrak{sl}_n)$-module, arXiv:0906.4129"
      url: "https://arxiv.org/pdf/0906.4129"
      locator: "sec. 2, printed p. 3: Theorem 2.1 and the $n$-regular counterpart."
    - title: "Bernard Leclerc, Fock space representations (author-hosted complete 38-page treatment)"
      url: "https://leclercb.users.lmno.cnrs.fr/lectnotes_final.pdf"
      locator: "sec. 3.13-3.14, printed pp. 25-26: the crystal of the Fock space and Prop. 14."
---

## Statement

The whole level-one Fock module has the crystal basis $(F_0,B_F)$ with
$F_0=\bigoplus_{\lambda}\mathbb Z[q]|\lambda\rangle$ and
$B_F=\{|\lambda\rangle+qF_0:\lambda\text{ a partition}\}$. The normalized
Kashiwara operators remove the good normal $i$-node and add the cogood conormal
$i$-node of the corrected signature of
[[def-good-and-cogood-nodes-by-residue-signature-reduction]], and
$\varepsilon_i,\varphi_i$ are the surviving minus/plus counts. The graph is a
graph on all partitions, not only regular ones; its empty connected component
is precisely the set of $e$-regular partitions, while the $e$-restricted labels
belong to the transposed model. A pole or a unique Chevalley term does not
determine a crystal arrow.

## Facts & Assumptions

**Given:** The Fock module with its node operators, its partition basis and the fixed-residue cubes; the signature reduction; the lattice formalism.

[F1] Each fixed-residue block is a finite tensor bit module, the raw $A_0$-span of partitions is stable under the normalized string operators, and the residue rule including both endpoints is the survivor rule ([[lem-fixed-residue-node-cubes-realize-fock-i-strings-and-crystal-lattices]]).

[F2] $F$ is generated over the fraction field by the weight-graded lattice and satisfies the quantum affine relations; the node-count lemma gives the weight formula ([[thm-the-fock-space-node-formulas-satisfy-the-quantum-affine-relations]], [[lem-the-node-count-is-the-level-one-cartan-pairing]]).

[F3] A crystal lattice is an $A_0$-lattice stable under the divided operators whose mod-$q$ images give a crystal with $\varepsilon,\varphi$ determined by string lengths ([[def-crystal-lattice-and-crystal-basis]], [[def-crystal-graph-epsilon-phi-and-weight]]).

## Proof

**Proof technique:** verify the crystal axioms blockwise on the finite cubes and then identify the empty component by the regular-block argument.

1.1 The crystal basis. By [F1] the $A_0$-span $F_0$ is stable under the normalized string operators, and the mod-$q$ residues of the partition basis are the crystal elements; the string lengths give $\varepsilon_i,\varphi_i$ as the surviving minus/plus counts, and the weight formula is [F2]. Since each fixed-residue block is a finite tensor cube of two-vertex strings, all crystal axioms (the intertwining of $\varepsilon,\varphi$ with the weight, the partial-inverse property of $e_i,f_i$, and the finiteness of the strings) hold blockwise, hence on the whole graph; the graph has all partitions as vertices because every partition lies in the raw $A_0$-span. [F1, F2, F3, algebra]

2.1 The empty component consists of regular partitions. Use decreasing-content order and the survivor rule. If removing the selected last surviving minus creates $e$ equal rows of length $L-1$, then below its removable row there is a block of $e-1$ rows of length $L-1$ whose last corner is a consecutive same-residue minus: if the upper minus survives, so does this lower one, so the upper one cannot have been selected; hence good deletion preserves regularity. Dually, if adding the selected first surviving plus creates $e$ equal rows of the new length, then a block of $e-1$ rows of that length lies immediately above it and its first addable corner is a consecutive same-residue plus which survives whenever the lower plus does, so the lower plus is not selected; hence cogood addition preserves regularity. Both operators therefore stay inside the regular labels. [step 1.1, F3, algebra]

3.1 Reachability of all regular partitions and the component. Every nonempty regular partition has a top block of $a<e$ equal rows; its first removable corner has residue $L-a$, while the only earlier addable corner has residue $L$, so the minus has no matching same-residue plus and survives: a good deletion exists, it remains regular and lowers the size. Induction on the size together with the inverse axiom reaches every regular partition from the empty one, and since the empty partition is regular and all edges of the component preserve regularity, the empty component is exactly the set of $e$-regular partitions. The transposed ($e$-restricted) model arises by conjugation and is not the same vertex set. [step 2.1, F1, F3, algebra]

4.1 Conclusion. The crystal basis of the whole Fock space is the good-node partition graph on all partitions with the survivor $\varepsilon,\varphi$, and its empty connected component is exactly the $e$-regular partition set, proved by the block argument without an imported path count or an abstract rank-one recognition. [step 1.1, step 2.1, step 3.1] ∎

## Remarks

- The crystal axioms [[def-crystal-lattice-and-crystal-basis]] and
  [[def-crystal-graph-epsilon-phi-and-weight]] are batch-6 items still under
  construction at authoring time; their exact uses are the lattice and
  $\varepsilon,\varphi$ formalism of step 1.1, and the decision stays escalated
  until they are completed and rechecked.
