---
dependency_level: 11
id: ex-yang-qualitative-nonvanishing-prescribed-family
kind: example
title: "A Prescribed GL(3) Family over Q with Two Nonvanishing Central Values"
status: draft
origin: pipeline
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
deps:
  - thm-yang-qualitative-simultaneous-nonvanishing-glnplus1-gln
  - def-simple-supercuspidal-representation-of-gln
  - thm-generic-local-gln-representation-has-congruence-newvectors
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Liyang Yang, Relative Trace Formula and L-functions for GL(n+1) × GL(n), Theorem C and Theorems 9.8–9.9, §§9.2.1–9.2.4"
      url: "https://arxiv.org/pdf/2303.02225v1"
pipeline_run: number-theory-all-141-2026-10-25
---

## Example

Use the source’s normalization that the specified central characters are trivial on the positive real split center.

Let $F=\mathbb Q$, $n=2$, $\mathfrak N'_1=(2)$, $\mathfrak N'_2=(3)$, and $v_*=(5)$. Suppose $\pi'_1,\pi'_2$ are unitary cuspidal generic representations of $\mathrm{GL}_2(\mathbb A_\mathbb Q)$ with these arithmetic conductors, with $(\pi'_1)_{5}\simeq(\pi'_2)_{5}$, and with isomorphic archimedean components. Fix the central character $\omega$, a simple supercuspidal $\sigma_5$ of $\mathrm{GL}_3(\mathbb Q_5)$ of the cyclic-normalizer type with central character $\omega_5$, a sufficiently large proper level ideal $\mathfrak N$, and $\epsilon>0$, with the conductor exponents of $\omega$ no larger than the corresponding last-row congruence exponents of $K^\dagger$, as in the typed level setup. Then Yang's finite-family assertion gives a representation $\pi$ in the finite family

$$\mathcal A_0\bigl(\mathfrak N;(2),(3),\sigma_5,\omega,\epsilon\bigr)$$

for which

$$L(1/2,\pi\times\pi'_1)L(1/2,\pi\times\pi'_2)\ne0.$$

The family consists of cuspidal $\mathrm{GL}_3(\mathbb A_\mathbb Q)$-representations with central character $\omega$, the nebentypus level type specified by $K^\dagger=K_0(\mathfrak N(2)(5)^4)\cap I((3))$, local component $\pi_5\simeq\sigma_5$, and $\|\lambda_{\pi_\infty}\|\leq|\mathfrak N|^\epsilon$.

## Example references

[Liyang Yang, *Relative Trace Formula and L-functions for GL(n+1) × GL(n)*, Theorem C and Theorems 9.8–9.9, §§9.2.1–9.2.4](https://arxiv.org/pdf/2303.02225v1)

## Facts & Assumptions

**Given:** The representations, ideals, linked local component, matching archimedean components, and prescribed local representation in the Example.

[F1] [[thm-yang-qualitative-simultaneous-nonvanishing-glnplus1-gln]]: for coprime nontrivial conductors, a fixed split place outside their product with linked local components, and matching archimedean components, the finite-family conclusion supplies a cuspidal $\pi$ with the prescribed simple-supercuspidal local component and both central $L$-values nonzero.

[F2] [[def-simple-supercuspidal-representation-of-gln]]: the prescribed local type is a simple supercuspidal compact-induction representation arising from an extension of an affine-generic character to its cyclic normalizer.

[F3] [[thm-generic-local-gln-representation-has-congruence-newvectors]]: every nonzero smooth generic local representation of $\mathrm{GL}_n$ has a nonzero vector fixed by some $K_1(\mathfrak p^e)$, so the least conductor exponent in the Statement exists.

## Verification

**Proof technique:** direct.

1.1 The ideals $(2)$ and $(3)$ are nontrivial and proper, and their sum is $(1)$, so they are coprime. Their product is $(6)\ne(1)$, and the prime $5$ does not divide $6$; hence the chosen place is outside both conductors. [given, algebra]

2.1 The hypotheses in the Example give linked local components at $v_*=5$ and matching archimedean components. By [F3], the local conductor exponents used to specify $(2)$ and $(3)$ exist; the fixed $\sigma_5$ has the prescribed simple-supercuspidal type described in [F2]. The central-character compatibility and sufficiently large level hypotheses are also required as stated in the Example. Thus the hypotheses of the finite-family assertion [F1] hold for the stated $\mathfrak N$ and $\epsilon$. [given, F1, F2, F3, step 1.1]

3.1 Applying [F1] yields a cuspidal representation $\pi$ in the displayed finite family with $L(1/2,\pi\times\pi'_1)L(1/2,\pi\times\pi'_2)\ne0$, as claimed. [F1, step 2.1] ∎

The source’s normalized central-character convention and every remaining analytic/local-period hold are inherited from the main theorem; this conditional example does not prove those inputs.

The level space is interpreted with its specified nebentypus character, not literal compact-subgroup invariance for a ramified central character; matching that convention to the held global theorem remains required.
