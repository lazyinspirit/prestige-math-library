---
id: thm-the-fock-space-node-formulas-satisfy-the-quantum-affine-relations
kind: theorem
title: "The Fock space node formulas satisfy the quantum affine relations"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 16
deps: [def-the-node-order-and-n-i-exponents-for-fock-space,
       lem-the-node-count-is-the-level-one-cartan-pairing,
       def-level-one-partition-fock-space-and-node-residues,
       def-cyclic-affine-type-a-cartan-datum,
       def-quantum-integers-factorials-and-divided-powers-at-q-i,
       lem-fixed-residue-node-cubes-realize-fock-i-strings-and-crystal-lattices,
       lem-integrable-rank-one-actions-force-the-quantum-serre-relations]
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
      locator: "sec. 3.10, printed pp. 23-24: the action of $U_q(\\widehat{\\mathfrak{sl}}_n)$ on the Fock space and the node formulas (38)-(39)."
    - title: "Bernard Leclerc and Jean-Yves Thibon, Canonical bases of q-deformed Fock spaces, arXiv:q-alg/9602025"
      url: "https://arxiv.org/pdf/q-alg/9602025"
      locator: "sec. 2, printed pp. 2-3: the action of the generators on the Fock space."
    - title: "Kashiwara-Miwa-Petersen-Yung, Perfect crystals and q-deformed Fock spaces"
      url: "https://arxiv.org/pdf/q-alg/9603025"
      locator: "sec. 4.3, printed pp. 24-30: Props. 4.3.1-4.3.9 establishing that the Fock space is an integrable module; Appendix B, printed pp. 68-69: the rank-one Serre engine."
---

## Statement

The constructed node operators on **all** partition vectors make the charge-$0$
partition Fock space $F$ into a $P$-graded integrable module for
$U_q(\widehat{\mathfrak{sl}}_e)$ with the fixed coproduct and the cyclic Cartan
datum: all toral commutation rules and mixed commutators
$[E_i,F_j]=\delta_{ij}(K_i-K_i^{-1})/(q-q^{-1})$ hold, and both quantum Serre
sums vanish, including the cubic $e=2$ case with
$a_{01}=a_{10}=-2$ and $[3]=q^2+1+q^{-2}$. Each color acts on finite Boolean
cubes, and $F_i,E_i$ change the $P$-weight by $\mp\alpha_i$. Ordinary standard
coefficients may have $q^{-1}$ poles; normalized Kashiwara lattice stability is
a separate statement.

## Facts & Assumptions

**Given:** The partition Fock space with node operators, its weights, the cube decomposition and the rank-one Serre engine.

[F1] $K_i$ acts by $q^{N_i(\lambda)}$ with $N_i(\lambda)=\delta_{i0}-\sum_ja_{ij}m_j(\lambda)$, and $K_d$ by $q^{-m_0}$; $F_i,E_i$ add/remove a residue-$i$ node, so they change the weight by $\mp\alpha_i$ ([[lem-the-node-count-is-the-level-one-cartan-pairing]], [[def-level-one-partition-fock-space-and-node-residues]]).

[F2] Each color's orbit is a finite Boolean tensor cube of two-vertex strings, so each single-color action is integrable and satisfies the rank-one commutator $[E_i,F_i]=(K_i-K_i^{-1})/(q-q^{-1})$ ([[lem-fixed-residue-node-cubes-realize-fock-i-strings-and-crystal-lattices]]).

[F3] Integrable rank-one actions together with the toral and mixed relations imply both Serre sums for every pair $i\ne j$, with no Serre relation assumed ([[lem-integrable-rank-one-actions-force-the-quantum-serre-relations]]).

[F4] $\sum_iN_i=1$, and the central product $K_0\cdots K_{e-1}=q$ ([[lem-the-node-count-is-the-level-one-cartan-pairing]]).

## Proof

**Proof technique:** check the toral rules and mixed commutators locally on overlapping cubes, then invoke the rank-one Serre engine.

1.1 The toral rules. By [F1] the $K_i$ are diagonal in the partition basis and $F_j,E_j$ shift the weight by $\mp\alpha_j$; hence $K_iE_jK_i^{-1}=q^{\langle\alpha_j,h_i\rangle}E_j=q^{a_{ij}}E_j$ and $K_iF_jK_i^{-1}=q^{-a_{ij}}F_j$, the $K$'s commute, and the central product acts by $q$ by [F4]. [F1, F4, given, algebra]

2.1 The mixed commutators. Fix $i\ne j$ and a partition $\lambda$. The two colors act on their own corner sets; restricting to the union of the $i$-cube and the $j$-cube through $\lambda$, the two operators move different corners or the same corner in different directions. If the moves commute (different corners) both orders give the same partition and the same product of exponents; if they obstruct each other (adjacent moves sharing a corner) both orders vanish, because the intermediate collision is a repeated-entry wedge; and no configuration produces a nonzero remainder, since the only corners whose availability can change are the two touched cells, whose residues $i\ne j$ differ. Hence $[E_i,F_j]=0$ for $i\ne j$ on every vector, while $[E_i,F_i]=(K_i-K_i^{-1})/(q-q^{-1})$ is the rank-one commutator of [F2]. [step 1.1, F1, F2, given, algebra]

3.1 The Serre sums. By steps 1.1 and 2.1 the node operators satisfy every toral rule and every mixed commutator, and by [F2] each single-color action is integrable; the rank-one Serre engine [F3] then forces both quantum Serre sums for every pair $i\ne j$, the $e=2$ cubic case included. No Serre relation was used before this point. [step 2.1, F2, F3, given, algebra]

4.1 Conclusion. The node operators satisfy all defining relations of the affine algebra with the fixed coproduct, each color acts on finite cubes (integrability), the weight shifts are $\mp\alpha_i$, and ordinary coefficients with negative powers of $q$ are kept separate from the normalized lattice statement. [step 1.1, step 2.1, step 3.1] ∎
