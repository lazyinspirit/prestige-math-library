---
id: lem-fixed-residue-node-cubes-realize-fock-i-strings-and-crystal-lattices
kind: lemma
title: "Fixed-residue node cubes realize the actual Fock strings"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 15
deps: [def-the-node-order-and-n-i-exponents-for-fock-space, lem-semi-infinite-wedges-are-indexed-by-partitions-and-give-node-action-formulas, thm-crystal-basis-tensor-product-rule,
       thm-quantized-sl-two-string-formulas, def-kashiwara-crystal-operators, def-crystal-lattice-and-crystal-basis,
       def-removable-and-addable-nodes-of-a-partition]
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
    - title: "Bernard Leclerc, Fock space representations (author-hosted complete 38-page treatment)"
      url: "https://leclercb.users.lmno.cnrs.fr/lectnotes_final.pdf"
      locator: "sec. 3.10, printed pp. 23-24: the node formulas (38)-(39) interpreted as finite fundamental-string cubes."
    - title: "Kashiwara-Miwa-Petersen-Yung, Perfect crystals and q-deformed Fock spaces"
      url: "https://arxiv.org/pdf/q-alg/9603025"
      locator: "sec. 3.3, printed pp. 14-21: Theorem 3.3.12 and Prop. 3.3.14 (independence and crystal base of the wedge space)."
    - title: "Matthew Fayers, Partition models for the crystal of the basic $U_q(\\mathfrak{sl}_n)$-module, arXiv:0906.4129"
      url: "https://arxiv.org/pdf/0906.4129"
      locator: "sec. 4, printed pp. 10-12: the signed-word reduction, order and the endpoints of $i$-strings; the local module proof is supplied by the cube computation."
---

## Statement

For the declared charge-$0$ node operators and a fixed residue $i$ and partition
$\lambda$, the orbit obtained by toggling the addable/removable $i$-cells of
$\lambda$ is a finite Boolean cube: the availability of one such cell is
unchanged by every other $i$-toggle, including $e=2$. Order the $i$-slots by
decreasing content, call a vertex state $+$ when the slot is occupied (addable)
and $-$ when it is empty (removable), so that the state word records the
configuration. Then the node operators on this cube are exactly the tensor
power $V(1)^{\otimes k}$ of the two-vertex rank-one string with the fixed
coproduct and $K$-exponent $q^{\#+-\#-}$; in particular the raw $A_0$-partition
span is stable under the actual normalized string operators, $f$ applies to the
first surviving $+$ and $e$ to the last surviving $-$ in decreasing-content
order, equivalently $f$ to the last $+$ and $e$ to the first $-$ in
increasing-content order, with $\varepsilon,\varphi$ the surviving minus/plus
counts. The standard partition form is the normalized rank-one polarization,
and all divided $E$- and $F$-powers have Laurent-integral matrices.

## Facts & Assumptions

**Given:** The partition Fock space with node formulas and content order, the fixed residue $i$, and the rank-one tensor crystal of the vector module.

[F1] A corner's addability/removability is determined by its horizontal and vertical neighbours, whose residues are $i\pm1$ and never $i$ for $e\ge2$; toggling another $i$-cell does not change any such neighbour ([[def-the-node-order-and-n-i-exponents-for-fock-space]], [[def-removable-and-addable-nodes-of-a-partition]]).

[F2] On the two-vertex rank-one string the operators have coefficients $1$, $E^{(2)}=F^{(2)}=0$, and the tensor rule is the fixed-coproduct rule with the strict $f$/non-strict $e$ comparison ([[thm-quantized-sl-two-string-formulas]], [[thm-crystal-basis-tensor-product-rule]]).

[F3] The node operators are the stable prefix operators; their coefficients are $q^{N_i^r}$ and $q^{-N_i^l}$ and the exponents agree with the tensor cube weights ([[lem-semi-infinite-wedges-are-indexed-by-partitions-and-give-node-action-formulas]], [[def-the-node-order-and-n-i-exponents-for-fock-space]]).

## Proof

**Proof technique:** show the $i$-slots are independent, identify the node action with the tensor cube, and apply the rank-one tensor rule.

1.1 Independence of the $i$-slots. If two $i$-cells are toggled, the neighbours determining each corner's availability are of residues $i\pm1$, and the toggled cell has residue $i$, so it is not a neighbour of any other $i$-cell; hence toggling one $i$-cell never changes the availability of another, every subset of the finitely many slots is realizable, and the orbit is a Boolean cube with $2^k$ distinct partition diagrams. [F1, given, algebra]

2.1 The cube is the rank-one tensor power. In decreasing-content order, the $j$-th slot's toggling multiplies by $q^{+1}$ or $q^{-1}$ according to occupancy and the iterated coproduct coefficient at slot $j$ is $q^{\sum_{\text{slots before }j}\text{weight}}$ for $f$ and $q^{-\sum_{\text{slots after }j}\text{weight}}$ for $e$; these are exactly $N_i^r$ and $-N_i^l$ by [F3], so the map from tensor bit vectors to partitions is a rank-one module isomorphism onto the cube. [step 1.1, F3, given, algebra]

3.1 The string rule and lattice stability. Applying the rank-one tensor rule [F2] to the cube and unrolling the strict/non-strict comparison gives: cancel $+-\,$ in decreasing order, then $f$ acts on the first surviving $+$ and $e$ on the last surviving $-$, with zero endpoints when no such sign survives; in increasing order the mirrored statement cancels $-+$ and takes the last $+$ / first $-$. Since all divided powers of order $\ge2$ vanish on each two-vertex factor, every divided $E$- and $F$-power has a Laurent-integral matrix on the cube, so the raw $A_0$-span of partitions is stable under the actual normalized string operators; the standard partition form is the normalized rank-one polarization because it satisfies $(F_i\lambda,\lambda+\gamma)=q^{N_i^r}$ and the adjoint relation transports to the same exponent. [step 2.1, F2, given, algebra]

4.1 Conclusion. Each fixed-residue orbit is a finite Boolean tensor cube of highest-weight-$1$ strings, the actual normalized string rule is the survivor rule in either content order, including $e=2$, and lattice stability of the raw partition span follows before any congruence is transported. [step 1.1, step 2.1, step 3.1] ∎

## Remarks

- The suppliers [[thm-crystal-basis-tensor-product-rule]], [[def-kashiwara-crystal-operators]]
  and [[def-crystal-lattice-and-crystal-basis]] are batch-5/6 items still under
  construction at authoring time; the exact uses are the tensor rule of step 3.1
  and the lattice formalism of step 3.1, and the decision stays escalated until
  they are completed and rechecked.
