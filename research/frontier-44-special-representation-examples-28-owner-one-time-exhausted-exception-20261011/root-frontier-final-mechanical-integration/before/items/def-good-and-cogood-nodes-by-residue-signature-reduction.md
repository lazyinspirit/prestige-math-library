---
id: def-good-and-cogood-nodes-by-residue-signature-reduction
kind: definition
title: "Good and cogood nodes by residue-signature reduction"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 16
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
corresponding operator is $0$ on $|\lambda\rangle$. Equivalently, reading the
signature in decreasing content with the reversed symbols, one cancels $+-$
and takes the good node as the last surviving $-$ and the cogood node as the
first surviving $+$.

## Facts & Assumptions

**Given:** A residue $i$, a partition $\lambda$, its addable and removable $i$-nodes in content order, and the cube lemma for the fixed residue.

[F1] The fixed-residue orbit is a Boolean cube of two-vertex strings, the actual operators act by the survivor rule, and both content orders give the same selection ([[lem-fixed-residue-node-cubes-realize-fock-i-strings-and-crystal-lattices]]).

[F2] The node formulas and the content order are those of [[def-the-node-order-and-n-i-exponents-for-fock-space]].

## Verification

**Proof technique:** show the reduction is confluent, identify the survivors with the combinatorial deletion/addition rules, and record two calibration examples.

1.1 The reduction is well defined. The word reduction $-+\to$ empty is the stack matching familiar from bracket sequences: any two adjacent cancellable pairs are either disjoint or share a letter, and the survivors of the stack algorithm do not depend on the order of deletions; equivalently, the unmatched letters are those that are matched by a stack scan, and reversing the word and exchanging $+$ and $-$ exchanges first/last and minus/plus. Hence the good and cogood nodes are well defined by the word alone. [given, algebra]

2.1 The operator interpretation. By the cube lemma [F1] the actual normalized operators select exactly the survivors: $e_i$ removes the good (first surviving minus) node and $f_i$ adds the cogood (last surviving plus) node, with value $0$ when the respective sign is absent; the equivalent decreasing-content description cancels $+-$ and takes the last surviving $-$ and the first surviving $+$, which is the usual Fayers good-deletion/cogood-addition convention. [step 1.1, F1, F2, algebra]

3.1 Calibrations and the minimiser warning. At $e=3$, $\lambda=(2,1)$ and $i=2$: the addable $2$-nodes are $(1,3)$ and $(2,2)$ in increasing content order, the signature is $++$, so the cogood node is the last plus, the top-right cell $(1,3)$; it is not the leftmost opening $(2,1)$ of a naive minimiser. At $\lambda=(2,1)$ with $i=2$ the word is $++$; for $\lambda=(2,1)$, $i=0$ the signature contains a $-+$ pair at contents $0$ and $1$ which cancels, so $F_0|2,1\rangle$ may be nonzero as an ordinary Chevalley operator while the normalized $f_0$ is $0$; this shows that ordinary exponents do not define the crystal arrows. [step 1.1, step 2.1, F2, algebra]

4.1 Conclusion. The good and cogood nodes are defined by the confluent survivor reduction of the residue signature, they agree with the actual normalized operators by the cube lemma, and they are not a selection by minimum ordinary Chevalley exponent. [step 1.1, step 2.1, step 3.1] ∎
