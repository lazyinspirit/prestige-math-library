---
id: def-good-and-cogood-nodes-by-residue-signature-reduction
kind: definition
title: "Good and cogood nodes by residue-signature reduction"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 17
deps: [def-the-node-order-and-n-i-exponents-for-fock-space,
       def-level-one-partition-fock-space-and-node-residues,
       lem-fixed-residue-node-cubes-realize-fock-i-strings-and-crystal-lattices]
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
    - title: "Matthew Fayers, Partition models for the crystal of the basic $U_q(\\mathfrak{sl}_n)$-module, arXiv:0906.4129"
      url: "https://arxiv.org/pdf/0906.4129"
      locator: "sec. 2, printed pp. 2-4: good and cogood positions in the residue signature and the comparison with the usual deletion/addition rules."
    - title: "Kailash C. Misra and Tetsuji Miwa, Crystal base for the basic representation of $U_q(\\mathfrak{sl}(n))$, Comm. Math. Phys. 134 (1990), 79-88"
      url: "https://projecteuclid.org/journals/communications-in-mathematical-physics/volume-134/issue-1/Crystal-base-for-the-basic-representation-of-U_qgerm-sgerm-ln/cmp/1104201614.pdf"
      locator: "sec. 3, printed pp. 82-85: Theorem 3.1 and the signature data for the Fock crystal."
    - title: "Bernard Leclerc, Fock space representations (author-hosted complete 38-page treatment)"
      url: "https://leclercb.users.lmno.cnrs.fr/lectnotes_final.pdf"
      locator: "sec. 3.10, printed pp. 23-24: node formulas and the warning that a Chevalley coefficient is not a crystal arrow."
---

## Definition

Fix a residue $i$ and a partition $\lambda$, and write the **signature** of
$\lambda$ at $i$ as the word in the symbols $+$ (addable $i$-node) and $-$
(removable $i$-node) whose letters are the addable and removable $i$-nodes of
$\lambda$ read in the fixed increasing-content order of
[[def-the-node-order-and-n-i-exponents-for-fock-space]]. Reduce the word by
cancelling adjacent pairs $-+$ as long as such a pair remains. The surviving
minus letters are called **normal removable** $i$-nodes, and the first surviving
minus is the **good node** of $\lambda$ for $e_i$; the surviving plus letters
are called **conormal addable** $i$-nodes, and the last surviving plus is the
**cogood node** for $f_i$. If no sign of the required type survives, the
corresponding crystal operator is $0$ on $b_\lambda:=|\lambda\rangle+qF_0$,
where $F_0$ is the raw $A_0$-partition lattice. Throughout, $e_i,f_i$ act on
these residue classes; the normalized operators on field vectors need not
send $|\lambda\rangle$ to a single standard vector or to zero. Equivalently, reading the
signature in decreasing content with the same addable/removable symbols, one cancels $+-$
and takes the good node as the last surviving $-$ and the cogood node as the
first surviving $+$.

## Facts & Assumptions

**Given:** A residue $i$, a partition $\lambda$, its addable and removable $i$-nodes in content order, and the cube lemma for the fixed residue.

[F1] The fixed-residue orbit is a Boolean cube of two-vertex strings, the actual normalized operators preserve $F_0$ and induce the survivor rule on $F_0/qF_0$, and both content orders give the same selection ([[lem-fixed-residue-node-cubes-realize-fock-i-strings-and-crystal-lattices]]).

[F2] The node formulas and the content order are those of [[def-the-node-order-and-n-i-exponents-for-fock-space]].

## Verification

**Proof technique:** show the reduction is confluent, identify the survivors with the combinatorial deletion/addition rules, and record two calibration examples.

1.1 The reduction is well defined. Each deletion $-+\to\varnothing$ decreases the word length by two. Two distinct adjacent cancellable pairs cannot overlap, since an overlapping letter would have to be both $+$ and $-$; disjoint deletions commute. Induction on word length therefore gives the same surviving labelled letters for every deletion order. Equivalently a left-to-right stack pairs each plus with the latest unmatched preceding minus. Reversing the order of letters without exchanging their meanings turns $-+$ cancellation into $+-$ cancellation and exchanges first and last positions. [given, algebra]

2.1 The operator interpretation. By the cube lemma [F1] the induced crystal operators on $b_\lambda\in F_0/qF_0$ select exactly the survivors: $e_i$ removes the good (first surviving minus) node and $f_i$ adds the cogood (last surviving plus) node, with value $0$ when the respective sign is absent; the equivalent decreasing-content description cancels $+-$ and takes the last surviving $-$ and the first surviving $+$, which is the usual Fayers good-deletion/cogood-addition convention. [step 1.1, F1, F2, algebra]

3.1 Calibrations and the minimiser warning. At $e=3$, $\lambda=(2)$ and $i=2$, the addable nodes $(2,1)$ and $(1,3)$ have contents $-1,2$, giving the increasing-content signature $++$. Its last plus selects $(1,3)$, so $f_2(2)=(3)$. At $\lambda=(2,1)$ and $i=2$, the removable node $(2,1)$ has content $-1$ and the addable node $(1,3)$ has content $2$, giving $-+$ and hence $f_2(2,1)=0$. Nevertheless the ordinary node formula gives $F_2|2,1\rangle=|3,1\rangle$. The normalized value is $\tilde f_2|2,1\rangle=q(1+q^2)^{-1}|3,1\rangle$, whose residue is zero by the two-slot calculation of [F1]. Thus even a unique nonzero Chevalley term need not be a crystal arrow. [step 1.1, step 2.1, F1, F2, algebra]

4.1 Conclusion. The good and cogood nodes are defined by the confluent survivor reduction of the residue signature, they give the residue actions of the actual normalized operators by the cube lemma, and they are not a selection by minimum ordinary Chevalley exponent. [step 1.1, step 2.1, step 3.1] ∎
