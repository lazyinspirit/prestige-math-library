---
id: thm-graded-specht-classes-realize-standard-fock-vectors
kind: theorem
title: "Graded Specht classes realize the standard Fock vectors"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 38
deps: [prop-qg8-categorification-transports-across-the-hecke-klr-bridge,
       def-graded-specht-module-by-homogeneous-standard-tableaux,
       thm-graded-specht-module-has-homogeneous-tableau-basis,
       thm-cyclotomic-klr-projective-k-zero-is-the-integral-highest-weight-module,
       thm-cyclotomic-klr-module-g-zero-is-the-dual-integral-highest-weight-module,
       def-contravariant-form-on-an-integrable-quantum-highest-weight-module,
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
homogeneous standard-tableau bases, and the symmetric level-one Fock model
with its standard vectors $M_\mu$ and projection $\pi$.

[F1] The homogeneous basis theorem gives
$\operatorname{gdim}e(\mathbf i)S(\mu)=\sum_{T:i_T=\mathbf i}q^{\deg T}$
([[thm-graded-specht-module-has-homogeneous-tableau-basis]]). The transported
projective map sends $P(\mathbf i):=R^\Lambda_\alpha e(\mathbf i)$ to
$F_{i_d}\cdots F_{i_1}v_{\Lambda_0}$, since successive basic inductions append
strands, and the canonical restricted-dual map is defined by the bilinear
tensor pairing $\Psi_{\rm can}(M)(\phi(P))=T(P,M)$
([[prop-qg8-categorification-transports-across-the-hecke-klr-bridge]],
[[thm-cyclotomic-klr-projective-k-zero-is-the-integral-highest-weight-module]],
[[thm-cyclotomic-klr-module-g-zero-is-the-dual-integral-highest-weight-module]]).

[F2] The Fock model has nodes with residues $c-r$, standard vectors $M_\mu$ for
all partitions, and node action formulas satisfying the quantum affine
relations ([[def-symmetric-group-level-one-residue-and-partition-label-convention]],
[[def-level-one-partition-fock-space-and-node-residues]],
[[lem-semi-infinite-wedges-are-indexed-by-partitions-and-give-node-action-formulas]],
[[thm-the-fock-space-node-formulas-satisfy-the-quantum-affine-relations]]); the
projection $\pi$ onto the basic module commutes with the field quantum action
and satisfies $E_iM_\mu=\sum_Aq^{-d^A(\mu\setminus A)}M_{\mu\setminus A}$, where
$d^A$ is the number of addable $i$-nodes strictly above $A$ minus the number of
removable $i$-nodes strictly above $A$, computed in $\mu\setminus A$
([[lem-standard-fock-vectors-expand-in-the-upper-global-basis]]).

[F3] The integral highest weight module $V_A(\Lambda_0)$ and its dual are
irreducible over $\mathbb Q(q)$, with generated highest-weight submodules
determined by the highest vector
([[thm-integrable-quantum-highest-weight-module-exists-and-is-unique]]); the normalized contravariant form satisfies
$B(F_ix,y)=B(x,q^{-1}K_iE_iy)$
([[def-contravariant-form-on-an-integrable-quantum-highest-weight-module]]); the
transported identification $\Psi_{\rm can}^{\rm Hecke}$ intertwines the
canonical $E_i$ with the Fock node action
([[prop-qg8-categorification-transports-across-the-hecke-klr-bridge]],
[[thm-cyclotomic-klr-functors-define-an-integrable-quantum-action-on-k-zero-and-g-zero]]).

[F4] The degree identities $d_A(\mu)+d^A(\mu\setminus A)=h_i(\alpha)+1$ and
$d_i(\mu)=(\Lambda_0-\alpha,\alpha_i)$ are the content of
[[lem-degree-and-codegree-of-standard-tableaux]] in the level-one convention.

[C1] Choice is inherited only through the declared global-basis interfaces
used to identify the integral dual lattice
([[def-axiom-of-choice]],
[[prop-qg8-categorification-transports-across-the-hecke-klr-bridge]]).

## Proof

**Proof technique:** direct.

1.1 **Evaluate on projective words.** For a residue word $\mathbf i=(i_1,\ldots,i_d)$ of content $\alpha$, put $P(\mathbf i)=R^\Lambda_\alpha e(\mathbf i)$ and transport it to the Hecke block. Appending the strands successively realizes it as $F_{i_d}^{\rm basic}\cdots F_{i_1}^{\rm basic}$ of the vacuum projective, so [F1] sends its class to $F_{i_d}\cdots F_{i_1}v_{\Lambda_0}$. The generator-fixing anti-involution identifies $P(\mathbf i)^\psi$ with the right ideal $e(\mathbf i)R^\Lambda_\alpha$, and multiplication gives $e(\mathbf i)R^\Lambda_\alpha\otimes_{R^\Lambda_\alpha}S(\mu)\cong e(\mathbf i)S(\mu)$. Thus the defining bilinear tensor pairing, without any Hom-pairing bar on a shifted first argument, gives $\Psi_{\rm can}^{\rm Hecke}([S(\mu)])(F_{i_d}\cdots F_{i_1}v_{\Lambda_0})=\sum_{T:i_T=\mathbf i}q^{\deg T}$. [F1, F3, algebra]

2.1 **The identical standard-coordinate evaluation.** If $A$ is a removable $i$-node of $\mu$ and $\alpha=\operatorname{cont}(\mu)$, the Fock formula [F2] gives its removal coefficient $q^{-d^A(\mu\setminus A)}$. The operator $K_i$ on the resulting weight $\Lambda_0-\alpha+\alpha_i$ multiplies by $q^{h_i(\alpha)+2}$. Contravariance of [F3] therefore gives the coefficient of $M_\mu$ in $F_iM_{\mu\setminus A}$ as $q^{h_i(\alpha)+1-d^A(\mu\setminus A)}=q^{d_A(\mu)}$, by [F4]. Iterating additions from the vacuum enumerates precisely the standard tableaux of shape $\mu$ with successive residues $\mathbf i$: at each stage the occupied nodes form a partition, and conversely its increasing filling records the addition path. The product of the node factors is $q^{\sum_A d_A}=q^{\deg T}$ by the degree recursion. Hence the coordinate functional $\operatorname{Std}_\mu(x)=B(x,M_\mu)$ satisfies $\operatorname{Std}_\mu(F_{i_d}\cdots F_{i_1}v_{\Lambda_0})=\sum_{T:i_T=\mathbf i}q^{\deg T}$, exactly step 1.1. [F1, F2, F3, F4, algebra]

3.1 **Equality in the restricted integral dual.** The basic highest-weight module over $\mathbb Q(q)$ is generated from the vacuum by the negative generators, so its vectors $F_{i_d}\cdots F_{i_1}v_{\Lambda_0}$ span every weight space; no assertion that ordinary words alone span the divided-power lattice over $A$ is needed. Steps 1.1–2.1 make the two functionals equal on this field spanning family. Both lie in the restricted integral weight dual by [F1] and the coordinate-functional construction of [F2]; their field equality therefore is equality in that lattice. Under the nondegenerate contravariant form, $\operatorname{Std}_\mu$ is represented by $S_\mu=\pi(M_\mu)$, giving the stated equation. It holds in both field-characteristic branches because the homogeneous basis and integral categorical pairing do, and uses no cellular head classification or characteristic-zero based theorem. Choice is precisely the inherited [C1]. [C1, F1, F2, F3, step 1.1, step 2.1, algebra] ∎
