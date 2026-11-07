---
id: def-burns-kurihara-sano-selmer-module
kind: definition
title: "Burns–Kurihara–Sano Selmer module for a CM extension"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-number-field
  - def-ring-of-integers-of-a-number-field
  - def-fractional-ideal
  - def-prime-ideal-valuations-on-fractional-ideals
  - thm-number-field-integral-ideal-factorisation-in-zf
  - def-group
  - def-group-homomorphism
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
sources:
  references:
    - title: "Samit Dasgupta and Mahesh Kakde, On the Brumer–Stark Conjecture"
      url: "https://math.iisc.ac.in/~maheshkakde/brumerstark.pdf"
      locator: "§3.1, printed pp. 19–20, equation (29): the Burns–Kurihara–Sano Selmer module."
---

## Definition

Let $H/F$ be a finite Galois extension of number fields with group $G$. Let $\Sigma$ be a finite set of places of $F$ containing all infinite places, and let $\Sigma'$ be a finite set of finite primes disjoint from $\Sigma$. Write $\Sigma_H$ and $\Sigma'_H$ for the finite primes of $H$ above the finite primes in these sets. Define

$$H^\times_{\Sigma'}:=\{a\in H^\times:v_w(a-1)>0\text{ for every }w\in\Sigma'_H\}.$$

For a finite prime $w$ of $H$, let $\operatorname{ord}_w(a)$ be the exponent of $w$ in the factorization of the principal fractional ideal $(a)$. Define the diagonal valuation homomorphism

$$\Delta_{\Sigma,\Sigma'}:\prod_{w\notin\Sigma_H\cup\Sigma'_H}\mathbb Z\longrightarrow\operatorname{Hom}_{\mathbb Z}(H^\times_{\Sigma'},\mathbb Z),\qquad (n_w)_w\longmapsto\left(a\longmapsto\sum_{w\notin\Sigma_H\cup\Sigma'_H}n_w\operatorname{ord}_w(a)\right).$$

For each $a\in H^\times$, the sum is finite because its principal fractional ideal has finite prime support. The **Selmer module** is the quotient

$$\operatorname{Sel}_{\Sigma'}^{\Sigma}(H):=\operatorname{Hom}_{\mathbb Z}(H^\times_{\Sigma'},\mathbb Z)/\operatorname{im}(\Delta_{\Sigma,\Sigma'}).$$

It has the contragredient $G$-action $(g\cdot\varphi)(a)=\varphi(g^{-1}a)$. If $v_w(a-1)>0$, then $v_w(a)=0$; for two such elements, $ab-1=(a-1)b+(b-1)$ still has positive valuation, and $a^{-1}-1=-(a-1)/a$ does too. Thus $H^\times_{\Sigma'}$ is a subgroup. The image of $\Delta_{\Sigma,\Sigma'}$ is a subgroup because $\Delta_{\Sigma,\Sigma'}$ is a homomorphism.

## Definition references

[[def-number-field]]

[[def-ring-of-integers-of-a-number-field]]

[[def-fractional-ideal]]

[[def-prime-ideal-valuations-on-fractional-ideals]]

[[thm-number-field-integral-ideal-factorisation-in-zf]]

[[def-group]]

[[def-group-homomorphism]]

[Dasgupta and Kakde — §3.1, printed pp. 19–20](https://math.iisc.ac.in/~maheshkakde/brumerstark.pdf)

## Facts & Assumptions

**Given:** The finite extension $H/F$, the finite sets $\Sigma,\Sigma'$, and the indicated primes of $H$.

[F1] Each principal fractional ideal has finite prime support, so the valuation sum defining $\Delta_{\Sigma,\Sigma'}$ is finite at every $a\in H^\times_{\Sigma'}$. [[def-fractional-ideal]] [[thm-number-field-integral-ideal-factorisation-in-zf]]

[F2] The group $G$ acts on $H^\times_{\Sigma'}$ and permutes the primes outside $\Sigma_H\cup\Sigma'_H$, so the diagonal image is stable under the contragredient action. [[def-group]] [[def-prime-ideal-valuations-on-fractional-ideals]]

## Proof

**Given:** The extension and sets in the Definition.

1.1 For each $a\in H^\times_{\Sigma'}$, only finitely many $\operatorname{ord}_w(a)$ are nonzero by [F1]. Hence the displayed sum is finite. Additivity of valuations gives $\operatorname{ord}_w(ab)=\operatorname{ord}_w(a)+\operatorname{ord}_w(b)$, so each tuple $(n_w)_w$ defines a homomorphism to $\mathbb Z$ and $\Delta_{\Sigma,\Sigma'}$ is a homomorphism. [F1, given, algebra]

2.1 The congruence condition defines a subgroup: $1$ satisfies it, $ab-1=(a-1)b+(b-1)$ has positive valuation at every selected prime, and $a^{-1}-1=-(a-1)/a$ does as well because $v_w(a)=0$. The $G$-action preserves this subgroup and permutes the remaining prime valuations by [F2]; reindexing the finite sums shows that it preserves $\operatorname{im}(\Delta_{\Sigma,\Sigma'})$. Therefore the quotient is a well-defined $G$-module with the stated contragredient action. [F2, step 1.1, given, algebra] ∎

