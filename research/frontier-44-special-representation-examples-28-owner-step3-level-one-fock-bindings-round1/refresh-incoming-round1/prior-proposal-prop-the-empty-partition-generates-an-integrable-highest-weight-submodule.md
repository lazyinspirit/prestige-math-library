---
id: prop-the-empty-partition-generates-an-integrable-highest-weight-submodule
kind: proposition
title: "The empty partition generates an integrable highest weight submodule of highest weight $\\Lambda_0$"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 17
deps: [thm-the-fock-space-node-formulas-satisfy-the-quantum-affine-relations, def-level-one-partition-fock-space-and-node-residues, lem-semi-infinite-wedges-are-indexed-by-partitions-and-give-node-action-formulas,
       thm-integrable-quantum-highest-weight-module-exists-and-is-unique, def-quantum-weight-module-and-integrability, lem-the-node-count-is-the-level-one-cartan-pairing]
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
      locator: "sec. 3.9-3.11, printed pp. 23-25: the vacuum vector, the submodule it generates and the decomposition of the Fock space."
    - title: "Masaki Kashiwara, Tetsuji Miwa and Eugene Stern, Decomposition of q-deformed Fock spaces, arXiv:q-alg/9508006"
      url: "https://arxiv.org/pdf/q-alg/9508006"
      locator: "sec. 1.4 and sec. 2.1-2.3, printed pp. 8-16: Prop. 1.4 and the decomposition $F(m)\\simeq V_{\\Lambda_m}\\otimes\\mathbb C[H^-]$."
    - title: "Kailash C. Misra and Tetsuji Miwa, Crystal base for the basic representation of $U_q(\\mathfrak{sl}(n))$, Comm. Math. Phys. 134 (1990), 79-88"
      url: "https://projecteuclid.org/journals/communications-in-mathematical-physics/volume-134/issue-1/Crystal-base-for-the-basic-representation-of-U_qgerm-sgerm-ln/cmp/1104201614.pdf"
      locator: "sec. 2 and 4, printed pp. 80-88: the vacuum, its weight and the basic representation inside the Fock space."
---

## Statement

In the charge-$0$ partition Fock space the vacuum $\varnothing$ has
$E_i\varnothing=0$, $K_i\varnothing=q^{\delta_{i0}}\varnothing$ and
$K_d\varnothing=\varnothing$, so its weight is $\Lambda_0$. The nonzero cyclic
submodule $M:=U_q(\mathfrak g)|\varnothing\rangle$ is the simple integrable
highest weight module $V(\Lambda_0)$; its integral lattice is
$U_A^-|\varnothing\rangle$ for $A=\mathbb Z[q,q^{-1}]$, and its crystal is the
empty graph component, identified in
[[thm-the-crystal-of-level-one-fock-space-is-the-good-node-partition-graph]]
rather than equated with the module.

## Facts & Assumptions

**Given:** The charge-$0$ partition Fock space with the node operators, the vacuum and the universal integrable highest weight module of weight $\Lambda_0$.

[F1] The empty partition has one addable node, of residue $0$, and no removable nodes; hence $F_i\varnothing=|\Box\rangle$ for $i=0$ and $0$ otherwise, $E_i\varnothing=0$ and $K_i\varnothing=q^{\delta_{i0}}\varnothing$ ([[lem-the-node-count-is-the-level-one-cartan-pairing]], [[def-level-one-partition-fock-space-and-node-residues]]).

[F2] $F$ satisfies all defining relations of the affine algebra and is integrable ([[thm-the-fock-space-node-formulas-satisfy-the-quantum-affine-relations]]).

[F3] For dominant integral $\Lambda_0$, $V(\Lambda_0)$ is the simple universal integrable highest weight module with normalized highest vector $v_0$. If $m$ is a nonzero highest vector of this weight in an integrable module, then the assignment $v_0\mapsto m$ extends to a homomorphism $V(\Lambda_0)\to U_qm$; the map is unique after normalizing that vector ([[thm-integrable-quantum-highest-weight-module-exists-and-is-unique]], [[def-quantum-weight-module-and-integrability]]).

## Proof

**Proof technique:** identify the vacuum as a highest weight vector and use the universal property of the simple integrable module.

1.1 The vacuum data. By [F1] the vacuum is killed by all $E_i$, is a $K_i$-eigenvector with eigenvalue $q^{\delta_{i0}}$ and a $K_d$-eigenvector with eigenvalue $1$, so $\mathrm{wt}(\varnothing)=\Lambda_0$ by the node-count pairing; in particular the vacuum is a highest weight vector of weight $\Lambda_0$. [F1, given, algebra]

2.1 Integrability and the highest-vector relations. The nonzero cyclic submodule $M=U_q|\varnothing\rangle$ inherits integrability and the label grading from $F$ by [F2]. Its generator has the highest-vector data of step 1.1, so it meets the integrable highest-vector hypothesis of [F3]. No assertion about the weight of a highest vector in an arbitrary submodule is needed. [step 1.1, F2, F3, given, algebra]

3.1 Identification and the integral lattice. By [F3] the normalized assignment $v_0\mapsto|\varnothing\rangle$ extends to a homomorphism $V(\Lambda_0)\to M$. It is surjective since the image contains the cyclic generator, and injective since its kernel is a submodule of the simple source and the map is nonzero. Thus $M\cong V(\Lambda_0)$, which proves simplicity as well as the highest weight identification. The divided node operators preserve the partition Laurent lattice: on each finite two-vertex tensor cube this follows from the divided-power coproduct, whose tensor-factor divided powers are integral; hence $U_A^-|\varnothing\rangle$ is an $A$-submodule of that lattice, and it spans $M$ over $\mathbb Q(q)$ because ordinary lower words are scalar multiples of divided lower words. This is the claimed integral lattice. [step 2.1, F2, F3, given, algebra]

4.1 Conclusion. The vacuum is a highest weight vector of weight $\Lambda_0$, its cyclic submodule is the simple integrable $V(\Lambda_0)$, and the crystal identification with the empty component of the good-node graph is postponed to the crystal theorem rather than asserted here. [step 1.1, step 2.1, step 3.1] ∎

## Remarks

- The suppliers [[thm-integrable-quantum-highest-weight-module-exists-and-is-unique]]
  and [[def-quantum-weight-module-and-integrability]] are batch-5 items still
  under construction at authoring time; their uses are the universal property in
  step 3.1 and the integrability language in step 2.1, and the decision stays
  escalated until they are completed and rechecked.
