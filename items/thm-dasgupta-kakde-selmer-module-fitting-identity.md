---
id: thm-dasgupta-kakde-selmer-module-fitting-identity
kind: theorem
title: "Dasgupta–Kakde Selmer-module Fitting identity"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 25
deps:
  - def-smoothed-stickelberger-element-for-abelian-cm-extension
  - def-burns-kurihara-sano-selmer-module
  - def-minus-pontryagin-dual-class-group
  - def-fitting-ideal-of-a-finitely-presented-module
  - thm-deligne-ribet-integrality-congruences-for-special-values
  - thm-global-artin-reciprocity-and-norm-index
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
proof_strategy: direct
axiom_use: >-
  AC, Countable Choice, and Dependent Choice are inherited from the current
  Deligne–Ribet and global Artin interfaces in the Selmer/Galois construction.
  Their detailed uses in the unconstructed proof remain unresolved.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Samit Dasgupta and Mahesh Kakde, On the Brumer–Stark Conjecture"
      url: "https://math.iisc.ac.in/~maheshkakde/brumerstark.pdf"
      locator: "Theorem 3.3, printed p. 20; the proof is developed in §§4–9."
---

## Statement

Assume AC, Countable Choice, and Dependent Choice. Let $H/F$ be a finite abelian extension of number fields such that $F$ is totally real and $H$ is a totally imaginary quadratic extension of $F$, and let $G=\operatorname{Gal}(H/F)$. Let $S_\infty$ be the infinite places of $F$, and let $S_{\mathrm{ram}}$ be the finite primes ramified in $H$. Let $T$ be a finite set of unramified finite primes such that the only root of unity in $H$ congruent to $1$ at every prime above $T$ is $1$. For an odd prime $p$, set

$$\Sigma=S_\infty\cup\{v\in S_{\mathrm{ram}}:v\mid p\},\qquad \Sigma'=T\cup\{v\in S_{\mathrm{ram}}:v\nmid p\}.$$

The $\mathbb Z_p[G]^{-}$-module $\operatorname{Sel}_{\Sigma'}^{\Sigma}(H)^{-}_p:=\bigl(\operatorname{Sel}_{\Sigma'}^{\Sigma}(H)\otimes_{\mathbb Z}\mathbb Z_p\bigr)^{-}$ has a finite presentation with equal numbers of generators and relations, and

$$\operatorname{Fitt}_{\mathbb Z_p[G]^{-}}\!\left(\operatorname{Sel}_{\Sigma'}^{\Sigma}(H)^{-}_p\right)=\left(\Theta_{\Sigma,\Sigma'}^{H/F\,\#}\right).$$

Here $\mathbb Z_p[G]^{-}=\mathbb Z_p[G]/(1+j)$, and a quadratic presentation means a finite presentation with the same number of generators and relations.

## Statement references

[[def-smoothed-stickelberger-element-for-abelian-cm-extension]]

[[def-burns-kurihara-sano-selmer-module]]

[[def-minus-pontryagin-dual-class-group]]

[[def-fitting-ideal-of-a-finitely-presented-module]]

[Dasgupta and Kakde — Theorem 3.3, printed p. 20](https://math.iisc.ac.in/~maheshkakde/brumerstark.pdf)

## Facts & Assumptions

**Given:** AC, Countable Choice, Dependent Choice, $H/F$, $T$, an odd prime $p$, and the sets $\Sigma,\Sigma'$ in the Statement.

[F1] The Selmer module is the quotient of $\operatorname{Hom}_{\mathbb Z}(H^\times_{\Sigma'},\mathbb Z)$ by the diagonal valuation image, with the contragredient action. [[def-burns-kurihara-sano-selmer-module]]

[F2] $\Theta_{\Sigma,\Sigma'}$ is interpolated from $L_{\Sigma,\Sigma'}(\chi^{-1},0)$ with the stated # involution convention. [[def-smoothed-stickelberger-element-for-abelian-cm-extension]]

[F3] The Fitting ideal is the zeroth Fitting ideal of a finitely presented module over the commutative minus component. [[def-fitting-ideal-of-a-finitely-presented-module]] [[def-minus-pontryagin-dual-class-group]]

[A1] The current Deligne–Ribet proof does not complete the finite-level congruence-to-measure argument needed for the integrality input. [[thm-deligne-ribet-integrality-congruences-for-special-values]]

[A2] The current global Artin proof leaves principal-idèle triviality conditional on the missing local cyclic-algebra/Artin compatibility and incomplete global Brauer–Hasse–Noether input. [[thm-global-artin-reciprocity-and-norm-index]]

[A3] The proof of this keystone identity from group-ring Hilbert modular forms, Eisenstein congruences, Galois representations, local ordinarity, and Fitting comparisons in §§4–9 is not reconstructed locally.

## Proof

**Given:** The Statement data and [F1]–[F3].

1.1 The source identifies the equality in the Statement as its keystone Selmer-module result. The present local definitions fix the module, the minus convention, and the Fitting-ideal target, but do not establish the required quadratic presentation or its generator. [F1, F2, F3, given]

2.1 Establishing the Statement requires the local argument in [A3] and the integrality and class-field prerequisites in [A1]–[A2]. These arguments are not present here, so the keystone theorem remains escalated. [A1, A2, A3]

## Escalation

Reconstruct the §4–§9 group-ring modular-form and Galois-cohomology proof on this A page, with the exact ordinary local hypotheses and Fitting calculations, before using this theorem as a supplier.

