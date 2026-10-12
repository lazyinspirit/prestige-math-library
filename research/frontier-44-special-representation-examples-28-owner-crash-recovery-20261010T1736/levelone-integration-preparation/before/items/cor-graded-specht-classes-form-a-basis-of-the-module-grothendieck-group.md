---
id: cor-graded-specht-classes-form-a-basis-of-the-module-grothendieck-group
kind: corollary
title: "The restricted graded Specht classes form a basis of the module Grothendieck group"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 40
deps: [thm-graded-specht-classes-realize-standard-fock-vectors,
       prop-qg8-categorification-transports-across-the-hecke-klr-bridge,
       def-level-one-global-basis-transition-polynomials-in-the-symmetric-group-convention,
       thm-the-basic-representation-global-basis-is-unitriangular-in-the-partition-basis,
       def-graded-module-and-projective-grothendieck-groups-for-klr-towers,
       def-nondegenerate-root-of-unity-level-one-hecke-regime,
       lem-standard-fock-vectors-expand-in-the-upper-global-basis,
       def-axiom-of-choice]
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
      locator: "Section 5.1-5.4, printed pp. 45-52: Theorems 5.1, 5.3 and 5.6; the restricted basis statement for graded Specht classes. Complete passages read."
    - title: "Alexander Kleshchev, Representation theory of symmetric groups and related Hecke algebras, arXiv:0909.4844v1, Bull. Amer. Math. Soc. 47 (2010) 419-481 (complete 66-page survey)"
      url: "https://arxiv.org/pdf/0909.4844"
      locator: "Section 9.1-9.5, printed pp. 39-46: Theorem 9.5 and Corollary 9.7; the restricted standard monomials and the module Grothendieck basis. Complete passages read."
verification:
  precheck: pass
---

## Statement

In the stated nondegenerate level-one regime and each residue content $\alpha$,
the classes $[S(\lambda)]$ indexed by RESTRICTED shapes $\lambda$ form an
$A$-basis of $G_0^{\rm gr}(H_\alpha)$. Under $\Psi_{\rm can}$ they correspond to
the restricted standard coordinate functionals
$\operatorname{Std}_\lambda=\pi(M_\lambda)$, which form an $A$-basis of the
UPPER integral dual lattice. Separately, all raw standard $M_\mu$ of that
content form an $A$-basis of the ambient Fock standard lattice; their full
projected family is generally redundant. No claim that
$\operatorname{Std}_\lambda$ is a basis of the lower lattice or that the field
Gram denominator is an $A$-unit is made. Choice only as inherited.

## Facts & Assumptions

**Given:** The nondegenerate level-one regime, a residue content $\alpha$, the
graded Specht modules $S(\lambda)$ for restricted shapes, and the transported
identification $\Psi_{\rm can}^{\rm Hecke}$.

[F1] The transported identification sends $[S(\mu)]$ to the standard monomial
image $S_\mu=\pi(M_\mu)$ for every partition $\mu$
([[thm-graded-specht-classes-realize-standard-fock-vectors]]); at restricted
shapes these are the restricted standard coordinate functionals
$\operatorname{Std}_\lambda$ of
[[lem-standard-fock-vectors-expand-in-the-upper-global-basis]].

[F2] The restricted coordinate functionals form an $A$-basis of the upper dual
lattice, by the dominance-unitriangular restricted coefficient minor, while the
raw standard vectors form the ambient standard lattice basis and the projected
family is generally redundant
([[lem-standard-fock-vectors-expand-in-the-upper-global-basis]]).

[F3] The map $\Psi_{\rm can}^{\rm Hecke}:G_0^{\rm gr}(H^\Lambda)\to
V_A(\Lambda_0)^\vee$ is an $A$-module isomorphism onto the
restricted integral weight dual, carrying normalized simple classes to the
form-dual projective basis
([[prop-qg8-categorification-transports-across-the-hecke-klr-bridge]]); the
graded module group is the restricted direct sum of the blockwise groups
([[def-graded-module-and-projective-grothendieck-groups-for-klr-towers]]).

[F4] The restricted labels are the $e$-restricted partitions of the content,
with the dominance-unitriangular transition polynomials of
[[def-level-one-global-basis-transition-polynomials-in-the-symmetric-group-convention]]
and [[thm-the-basic-representation-global-basis-is-unitriangular-in-the-partition-basis]];
the regime is the one of
[[def-nondegenerate-root-of-unity-level-one-hecke-regime]].

[C1] Choice is inherited only through the declared global-basis suppliers;
the finite unitriangular matrix inversion introduces none
([[def-axiom-of-choice]],
[[prop-qg8-categorification-transports-across-the-hecke-klr-bridge]]).

## Proof

**Proof technique:** direct.

1.1 **The image of the restricted classes.** By [F1] the isomorphism $\Psi_{\rm can}^{\rm Hecke}$ sends each class $[S(\lambda)]$ with $\lambda$ restricted to the coordinate functional $\operatorname{Std}_\lambda=\pi(M_\lambda)$; this is exactly the restricted family of [F2]. [F1, F2]

1.2 **The ambient family and the boundaries of the claim.** The raw standard vectors $M_\mu$ are the ambient standard basis by [F2], and the full projected family $\{\operatorname{Std}_\mu\}$ is generally redundant; in particular the corollary does not assert that $\operatorname{Std}_\lambda$ lies in or spans the lower lattice, nor that the Gram denominator $1+q^2$ of the $e=2$ example is an $A$-unit [F2, F4]. All content weight spaces are finite, so the basis statements are componentwise finite [F3]. [F2, F3, F4]

2.1 **Basis of the upper dual.** The restricted family $\{\operatorname{Std}_\lambda\}$ is an $A$-basis of the upper dual lattice by [F2], and $\Psi_{\rm can}^{\rm Hecke}$ is an isomorphism onto that lattice by [F3]; pulling this basis back gives that the classes $[S(\lambda)]$ with $\lambda$ restricted form an $A$-basis of $G_0^{\rm gr}(H_\alpha)$ [F3]. [F2, F3, step 1.1]

3.1 **Choice.** The argument uses the inherited global-basis interfaces and one finite unitriangular matrix inversion per content; no family of nonempty sets is selected, so choice is inherited only as in [C1]. [C1, F2, given] ∎
