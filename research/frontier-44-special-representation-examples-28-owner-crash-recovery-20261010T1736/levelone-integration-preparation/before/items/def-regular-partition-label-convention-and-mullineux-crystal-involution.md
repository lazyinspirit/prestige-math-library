---
id: def-regular-partition-label-convention-and-mullineux-crystal-involution
kind: definition
title: "The regular-partition label convention and the Mullineux crystal involution"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 19
deps: [thm-the-empty-component-is-the-highest-weight-crystal-b-lambda-zero, def-partition-young-diagram-and-conjugate-partition, def-dominance-order-on-partitions,
       def-axiom-of-choice, def-cyclic-affine-type-a-cartan-datum, thm-integrable-quantum-highest-weight-module-exists-and-is-unique,
       def-kashiwara-crystal-operators, thm-the-highest-weight-crystal-b-lambda-exists, def-good-and-cogood-nodes-by-residue-signature-reduction, thm-the-crystal-of-level-one-fock-space-is-the-good-node-partition-graph]
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
      locator: "sec. 2, printed pp. 2-4: $n$-regular and $n$-restricted models and the Mullineux involution."
    - title: "Kailash C. Misra and Tetsuji Miwa, Crystal base for the basic representation of $U_q(\\mathfrak{sl}(n))$, Comm. Math. Phys. 134 (1990), 79-88"
      url: "https://projecteuclid.org/journals/communications-in-mathematical-physics/volume-134/issue-1/Crystal-base-for-the-basic-representation-of-U_qgerm-sgerm-ln/cmp/1104201614.pdf"
      locator: "sec. 4, printed pp. 85-88: Theorem 4.7 and the crystal-base statement for the regular labels."
    - title: "Bernard Leclerc, Fock space representations (author-hosted complete 38-page treatment)"
      url: "https://leclercb.users.lmno.cnrs.fr/lectnotes_final.pdf"
      locator: "sec. 3.13-3.14, printed pp. 25-26: the regular labels and the global basis statement."
---

## Definition

A partition is **regular** if each positive part occurs with multiplicity $<e$,
and **restricted** if $\lambda_r-\lambda_{r+1}<e$ for every $r$. Conjugation
$C:\lambda\mapsto\lambda'$ is the comparison map between the regular and the
restricted models; it sends the residue $i$ to $-i$. It is **not** the
same-model sign involution.

On the regular basic crystal of
[[thm-the-empty-component-is-the-highest-weight-crystal-b-lambda-zero]] define
$M$ by negating all colors of a lowering path from the empty partition:
$M(f_ib)=f_{-i}M(b)$ for every edge, $M(\varnothing)=\varnothing$. The
restricted sign involution is the conjugate $CMC^{-1}$.

## Facts & Assumptions

**Given:** The regular basic crystal with its lowering edges $f_i$, the reflection $\tau$ of the Cartan datum with $\tau(\alpha_i)=\alpha_{-i}$, and the simple integrable module $V(\Lambda_0)$.

[F1] The regular labels form exactly the empty component of the Fock crystal, connected and generated from the vacuum by the lowering edges $f_i$ ([[thm-the-empty-component-is-the-highest-weight-crystal-b-lambda-zero]], [[thm-the-crystal-of-level-one-fock-space-is-the-good-node-partition-graph]]).

[F2] The datum reflection $\tau$ fixes $\Lambda_0$ and $\delta$ and sends $\alpha_i$ to $\alpha_{-i}$; it preserves all defining relations, and twisting the normalized simple integrable highest weight module by $\tau$ again gives the same normalized highest weight module ([[def-cyclic-affine-type-a-cartan-datum]], [[thm-integrable-quantum-highest-weight-module-exists-and-is-unique]]).

[F3] The conjugation $C$ reverses the content $c-r\mapsto-(c-r)$ and preserves addable/removable polarity, so it mirrors the signature with all residues negated ([[def-partition-young-diagram-and-conjugate-partition]], [[def-good-and-cogood-nodes-by-residue-signature-reduction]]).

## Verification

**Proof technique:** build the involution from the datum reflection, prove path independence and weight compatibility, and distinguish it from conjugation.

1.1 Well-definedness and involution. Let $v_0$ be the normalized highest vector. Twist $V(\Lambda_0)$ by the diagram automorphism $\tau$; the defining relations are preserved and the twisted highest weight is again $\Lambda_0$, so the uniqueness in [F2] gives a $\mathbb Q(q)$-linear map $J_\tau$ with $J_\tau v_0=v_0$ and $J_\tau(xv)=\tau(x)J_\tau(v)$. Its square is a module map fixing the cyclic generator, hence is the identity. The unique $i$-string decomposition is carried to the $-i$-string decomposition, so $J_\tau\tilde f_i=\tilde f_{-i}J_\tau$ and likewise for $\tilde e_i$. The canonical $A_0$-lattice is the span of the iterated Kashiwara lowering words on $v_0$, not the span of ordinary divided-generator words ([[thm-the-highest-weight-crystal-b-lambda-exists]]); therefore $J_\tau$ preserves that lattice and its crystal residue set. Its induced involution is $M$. Applying this fixed residue map to any lowering path proves path independence. [F1, F2, given, algebra]

2.1 Weight compatibility. Since $\tau(\Lambda_0)=\Lambda_0$, $\tau(\delta)=\delta$ and $\tau(\alpha_i)=\alpha_{-i}$, the involution satisfies $\mathrm{wt}\,M=\tau(\mathrm{wt})$, and it is an involution of the regular label set; no affine longest element formula is used. [step 1.1, F2, algebra]

3.1 Conjugation versus Mullineux. By [F3] conjugation sends residue $i$ to $-i$ and compares the regular and restricted models, so it is a model dictionary rather than a self-map of the regular set: for $e\ge3$ the conjugate of a regular partition is generally restricted and not regular, and for $e=2$ the reflection acts trivially while conjugation changes partitions visibly, so the two maps are distinct. The restricted sign involution $CMC^{-1}$ is the transport of $M$, and dominance on equal-size partitions is the published prefix-sum order, reversed by conjugation; horizontal-strip inclusion is not dominance. [step 1.1, step 2.1, F3, given, algebra]

4.1 Conclusion. Regular means part multiplicities $<e$, restricted means adjacent differences $<e$, conjugation is the regular/restricted comparison sending $i$ to $-i$, and the Mullineux involution $M$ is the well-defined same-model involution obtained from the datum reflection with weight action $\tau$, distinct from both conjugation and the adjoint transpose. [step 1.1, step 2.1, step 3.1] ∎
