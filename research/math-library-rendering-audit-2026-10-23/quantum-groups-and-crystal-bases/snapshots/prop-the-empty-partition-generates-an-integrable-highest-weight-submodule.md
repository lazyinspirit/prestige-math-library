---
id: prop-the-empty-partition-generates-an-integrable-highest-weight-submodule
kind: proposition
title: "The empty partition generates an integrable highest weight submodule of highest weight $\\Lambda_0$"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 18
deps: [thm-the-fock-space-node-formulas-satisfy-the-quantum-affine-relations, def-level-one-partition-fock-space-and-node-residues, lem-semi-infinite-wedges-are-indexed-by-partitions-and-give-node-action-formulas,
       thm-integrable-quantum-highest-weight-module-exists-and-is-unique, def-quantum-weight-module-and-integrability, lem-the-node-count-is-the-level-one-cartan-pairing,
       lem-fixed-residue-node-cubes-realize-fock-i-strings-and-crystal-lattices,
       thm-the-highest-weight-crystal-b-lambda-exists,
       def-kashiwara-lattices-lambda-and-infinity, def-kashiwara-crystal-operators]
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
    - title: "Masaki Kashiwara, On crystal bases of the q-analogue of universal enveloping algebras"
      url: "https://webpages.math.luc.edu/~ptingley/oldseminars/QuantumGroupsSpring2011/Kashiwara91.pdf"
      locator: "Section 2.6, printed p. 478, Lemmas 2.6.1-2.6.2 and their complete proofs: the no-common-kernel descent criterion and equality of a normalized stable lattice with the canonical lower lattice."
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

[F4] The normalized operators preserve the raw partition lattice $F_0$ and its partition residues form the fixed-residue tensor crystals; the divided node matrices are Laurent-integral ([[lem-fixed-residue-node-cubes-realize-fock-i-strings-and-crystal-lattices]]).

[F5] The canonical lower lattice $\mathcal L(\Lambda_0)$ is the $A_0$-span of Kashiwara lowering words on the normalized highest vector and is a crystal lattice generating $V(\Lambda_0)$. Its residue basis is connected and lowering-generated, and at every weight other than $\Lambda_0$ the common kernel of all induced $\tilde e_i$ on the residue space is zero ([[def-kashiwara-lattices-lambda-and-infinity]], [[thm-the-highest-weight-crystal-b-lambda-exists]]).

[F6] Kashiwara operators are linear, shift weights and commute with weight-module homomorphisms ([[def-kashiwara-crystal-operators]]).

## Proof

**Proof technique:** identify the vacuum as a highest weight vector and use the universal property of the simple integrable module.

1.1 The vacuum data. By [F1] the vacuum is killed by all $E_i$, is a $K_i$-eigenvector with eigenvalue $q^{\delta_{i0}}$ and a $K_d$-eigenvector with eigenvalue $1$, so $\mathrm{wt}(\varnothing)=\Lambda_0$ by the node-count pairing; in particular the vacuum is a highest weight vector of weight $\Lambda_0$. [F1, given, algebra]

2.1 Integrability and the highest-vector relations. The nonzero cyclic submodule $M=U_q|\varnothing\rangle$ inherits integrability and the label grading from $F$ by [F2]. Its generator has the highest-vector data of step 1.1, so it meets the integrable highest-vector hypothesis of [F3]. No assertion about the weight of a highest vector in an arbitrary submodule is needed. [step 1.1, F2, F3, given, algebra]

3.1 Identification and the integral lattice. By [F3] the normalized assignment $v_0\mapsto|\varnothing\rangle$ extends to a homomorphism $V(\Lambda_0)\to M$. It is surjective since the image contains the cyclic generator, and injective since its kernel is a submodule of the simple source and the map is nonzero. Thus $M\cong V(\Lambda_0)$, which proves simplicity as well as the highest weight identification. The divided node operators preserve the partition Laurent lattice by [F4]; hence $U_A^-|\varnothing\rangle$ is an $A$-submodule of that lattice, and it spans $M$ over $\mathbb Q(q)$ because ordinary lower words are scalar multiples of divided lower words. This is the claimed integral lattice. [step 2.1, F2, F3, F4, given, algebra]

4.1 The lower lattice inside $M$. Transport $\mathcal L(\Lambda_0)$ to $M$ by step 3.1 and call its image $L_M$. By [F4]-[F6], its lowering-word generators lie in $F_0$, so $L_M\subseteq M\cap F_0$. Both lattices have top part $A_0|\varnothing\rangle$. For the reverse inclusion, induct on $\operatorname{ht}(\Lambda_0-\mu)$. If $u\in(M\cap F_0)_\mu$ and $\mu\ne\Lambda_0$, every $\tilde e_i u$ lies in $L_M$ by lattice stability, naturality and the induction hypothesis. Since $L_M$ generates $M$ over $\mathbb Q(q)$, choose the least $n\ge0$ with $q^n u\in L_M$. If $n>0$, its nonzero residue in $(L_M/qL_M)_\mu$ is killed by every $\tilde e_i$, because $q^n\tilde e_i u\in qL_M$. This contradicts [F5]. Hence $n=0$ and $L_M=M\cap F_0$. All inductions concern finite root height and require no choice principle. [step 3.1, F4, F5, F6, algebra]

5.1 The crystal component. The equality in step 4.1 implies $L_M\cap qF_0=qL_M$: if $u=qv\in L_M$ with $v\in F_0$, then $v=q^{-1}u\in M\cap F_0=L_M$. Thus $L_M/qL_M$ injects into $F_0/qF_0$. By naturality and the lowering-word descriptions of [F4]-[F5], the canonical residue basis maps into the partition residue basis, its highest element maps to the empty partition, and every other image is reached by lowering arrows. The image is closed under both crystal operators, since the canonical basis is a crystal basis and the inclusion commutes with them. It is therefore exactly the connected component containing the empty partition. This proves the crystal assertion without identifying its graph vertices with standard field vectors. [step 4.1, F4, F5, F6, algebra]

6.1 Conclusion. The vacuum is a highest weight vector of weight $\Lambda_0$, its cyclic submodule is the simple integrable $V(\Lambda_0)$ with integral lattice $U_A^-|\varnothing\rangle$, and its canonical lower lattice is $M\cap F_0$, whose residue crystal is the empty graph component. [step 1.1, step 3.1, step 4.1, step 5.1] ∎
