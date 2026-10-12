---
id: thm-graded-specht-classes-realize-standard-fock-vectors
kind: theorem
title: "Graded Specht classes realize the standard Fock vectors"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 39
deps: [prop-qg8-categorification-transports-across-the-hecke-klr-bridge,
       def-graded-specht-module-by-homogeneous-standard-tableaux,
       thm-graded-specht-restriction-has-the-removable-node-filtration,
       def-cyclotomic-klr-induction-and-restriction-functors,
       thm-cyclotomic-klr-functors-define-an-integrable-quantum-action-on-k-zero-and-g-zero,
       def-level-one-partition-fock-space-and-node-residues,
       def-symmetric-group-level-one-residue-and-partition-label-convention,
       lem-semi-infinite-wedges-are-indexed-by-partitions-and-give-node-action-formulas,
       thm-the-fock-space-node-formulas-satisfy-the-quantum-affine-relations,
       thm-integrable-quantum-highest-weight-module-exists-and-is-unique,
       def-nondegenerate-root-of-unity-level-one-hecke-regime,
       lem-standard-fock-vectors-expand-in-the-upper-global-basis,
       def-axiom-of-choice,
       lem-degree-and-codegree-of-standard-tableaux]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Jonathan Brundan and Alexander Kleshchev, Graded decomposition numbers for cyclotomic Hecke algebras, arXiv:0901.4450v3, Adv. Math. 222 (2009) 1883-1942 (complete 57-page article)"
      url: "https://arxiv.org/pdf/0901.4450"
      locator: "Section 5.1-5.4, printed pp. 45-52: Theorems 5.1, 5.3, 5.6 and 5.9, the identification of Specht classes with standard Fock vectors and the canonical-basis transport. Complete passages read."
    - title: "Alexander Kleshchev, Representation theory of symmetric groups and related Hecke algebras, arXiv:0909.4844v1, Bull. Amer. Math. Soc. 47 (2010) 419-481 (complete 66-page survey)"
      url: "https://arxiv.org/pdf/0909.4844"
      locator: "Section 8.1-8.5, printed pp. 33-39: Fock space and standard monomials; Section 9.1-9.5, printed pp. 39-46: Theorem 9.5 and Corollary 9.7, branching and the monomial-Specht identification. Complete passages read."
    - title: "Jonathan Brundan, Alexander Kleshchev and Weiqiang Wang, Graded Specht modules, arXiv:0901.0218v3, J. reine angew. Math. 655 (2011) 61-87 (complete 23-page article)"
      url: "https://arxiv.org/pdf/0901.0218"
      locator: "Section 4.4, printed p. 22: the removable-node restriction filtration of Theorem 4.11. Complete passage read."
verification:
  precheck: pass
---

## Statement

In the regime of
[[def-nondegenerate-root-of-unity-level-one-hecke-regime]], let
$\Psi_{\rm can}^{\rm Hecke}:G_0^{\rm gr}(H^{\Lambda})\to V_A(\Lambda_0)^\vee$ be
the transported identification of
[[prop-qg8-categorification-transports-across-the-hecke-klr-bridge]], and let
$S_\mu:=\pi(M_\mu)$ be the standard monomial image of the standard Fock vector
$M_\mu$ of
[[def-symmetric-group-level-one-residue-and-partition-label-convention]] under
the projection to the basic module. Then for every partition $\mu$ with content
$\alpha$,
$$\Psi_{\rm can}^{\rm Hecke}\bigl([S(\mu)]\bigr)=S_\mu .$$
In other words, the class of the graded Specht module of
[[def-graded-specht-module-by-homogeneous-standard-tableaux]] is the standard
Fock vector in the fixed level-one convention. This holds in both branches (C0)
and (CP). No choice beyond the inherited suppliers is used.

## Facts & Assumptions

**Given:** The nondegenerate level-one regime, the transported identification
$\Psi_{\rm can}^{\rm Hecke}$, the graded Specht modules $S(\mu)$ with their
removable-node restriction filtrations, and the symmetric level-one Fock model
with its standard vectors $M_\mu$ and projection $\pi$.

[F1] The removable-node filtration computes the basic restriction
$E_i^{\rm basic}[S(\mu)]=\sum_Aq^{d_A(\mu)}[S(\mu\setminus A)]$ over the
removable $i$-nodes $A$ of $\mu$, with the grading shifts of
[[thm-graded-specht-restriction-has-the-removable-node-filtration]]; the
canonical normalization is obtained from the basic functor by the factor
$q^{-1-h_i(\beta)}$ with $h_i(\beta)=\langle h_i,\Lambda_0-\beta\rangle$
([[def-cyclotomic-klr-induction-and-restriction-functors]]).

[F2] The Fock model has nodes with residues $c-r$, standard vectors $M_\mu$ for
all partitions, and node action formulas satisfying the quantum affine
relations ([[def-symmetric-group-level-one-residue-and-partition-label-convention]],
[[def-level-one-partition-fock-space-and-node-residues]],
[[lem-semi-infinite-wedges-are-indexed-by-partitions-and-give-node-action-formulas]],
[[thm-the-fock-space-node-formulas-satisfy-the-quantum-affine-relations]]); the
projection $\pi$ onto the basic module commutes with the field quantum action
and satisfies $E_i\pi(M_\mu)=\sum_Aq^{-d^A(\mu)}\pi(M_{\mu\setminus A})$, where
$d^A$ is the number of addable $i$-nodes strictly above $A$ minus the number of
removable $i$-nodes strictly above $A$
([[lem-standard-fock-vectors-expand-in-the-upper-global-basis]]).

[F3] The integral highest weight module $V_A(\Lambda_0)$ and its dual are
irreducible over $\mathbb Q(q)$, with generated highest-weight submodules
determined by the highest vector
([[thm-integrable-quantum-highest-weight-module-exists-and-is-unique]]); the
transported identification $\Psi_{\rm can}^{\rm Hecke}$ intertwines the
canonical $E_i$ with the Fock node action
([[prop-qg8-categorification-transports-across-the-hecke-klr-bridge]],
[[thm-cyclotomic-klr-functors-define-an-integrable-quantum-action-on-k-zero-and-g-zero]]).

[F4] The degree identities $d_A(\mu)+d^A(\mu)=h_i(\beta)+1$ and
$d_i(\mu)=(\Lambda_0-\beta,\alpha_i)$ are the content of
[[lem-degree-and-codegree-of-standard-tableaux]] in the level-one convention.

[C1] Choice is inherited only through the declared global-basis interfaces
used to identify the integral dual lattice
([[def-axiom-of-choice]],
[[prop-qg8-categorification-transports-across-the-hecke-klr-bridge]]).

## Proof

**Proof technique:** direct.

1.1 **The canonical restriction recursion.** By [F1] the basic restriction of the Specht class is $E_i^{\rm basic}[S(\mu)]=\sum_Aq^{d_A(\mu)}[S(\mu\setminus A)]$. The canonical normalization multiplies the basic functor by $q^{-1-h_i(\beta)}$, and for a removable $i$-node $A$ the degree identity $d_A(\mu)+d^A(\mu)=h_i(\beta)+1$ of [F4] gives $q^{-1-h_i(\beta)}q^{d_A(\mu)}=q^{-d^A(\mu)}$; hence $E_i^{\rm can}[S(\mu)]=\sum_Aq^{-d^A(\mu)}[S(\mu\setminus A)]$, with $d^A$ the above-count of [F2] [F1, F4]. [F1, F4]

1.2 **The matching Fock recursion.** The projection $\pi$ commutes with the field quantum action and the Fock node formulas give $E_i\pi(M_\mu)=\sum_Aq^{-d^A(\mu)}\pi(M_{\mu\setminus A})$ over the same removable nodes [F2]; the transported identification $\Psi_{\rm can}^{\rm Hecke}$ intertwines the canonical $E_i$ with this action by [F3]. [F2, F3]

2.1 **Induction from the vacuum.** Both families agree at $\mu=\varnothing$, where the class is the vacuum and the Fock vector is the highest vector [F2, F3]. Suppose the two sides differ at some partition $\mu$ of minimal content height; applying any $E_i$ to the difference and using steps 1.1 and 1.2 expresses it as a combination of differences at strictly smaller height, which vanish by minimality, so the difference is killed by every $E_i$ [F1, F2]. [F1, F2, step 1.1, step 1.2]

3.1 **Conclusion by irreducibility.** The difference is an element of the irreducible highest-weight module $V(\Lambda_0)$ over $\mathbb Q(q)$ killed by every lowering operator $E_i$; the submodule it generates is a proper submodule unless the difference is zero, because it is concentrated at a strictly lower weight and hence cannot contain the highest vector [F3]. Thus the difference vanishes over $\mathbb Q(q)$, and since both sides lie in the torsion-free restricted integral dual the equality holds over $A$ as well [F3]. This proves the claim in both branches, and no new choice is made: [C1] is inherited. [C1, F3, given] ∎
