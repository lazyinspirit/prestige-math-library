---
id: thm-kato-iwasawa-torsion-of-ordinary-greenberg-selmer-group
kind: theorem
title: "Kato Torsion of the Ordinary Greenberg Selmer Module"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 17
deps:
  - def-greenberg-selmer-group-of-an-ordinary-newform
  - def-normalized-cuspidal-eigenform-over-gl2
  - def-newform-subspace-of-congruence-forms
  - thm-deligne-attaches-l-adic-representation-to-a-cuspidal-eigenform
  - def-axiom-of-choice
justified_by: []
provenance:
  statement: literature-derived
  proof: not-supplied
proof_strategy: not-supplied
sources:
  references:
    - title: "Christopher Skinner and Eric Urban, The Iwasawa Main Conjectures for GL2"
      url: "https://www.math.columbia.edu/~urban/eurp/MC.pdf"
      locator: "§§3.3–3.6, especially Definitions 3.3.6, 3.4.4 and Theorem 3.6.4."
    - title: "Kazuya Kato, p-adic Hodge theory and values of zeta functions of modular forms"
      url: "https://www.numdam.org/item/AST_2004__295__117_0.pdf"
      locator: "Theorem 17.4(1) and its proof in §17.13; Skinner–Urban Theorem 3.3.7 explicitly identifies this Kato result."
---

## Statement

Let $f$ be an ordinary normalized eigenform of weight $k\ge2$ and level $N$ with $p\nmid N$, with attached two-dimensional $p$-adic representation and a chosen stable lattice. Put $\Gamma=\operatorname{Gal}(\mathbb Q_\infty/\mathbb Q)$ and $\Lambda=\varprojlim_{r\ge1}\mathcal O_L[\Gamma/\Gamma^{p^r}]$, the cyclotomic Iwasawa algebra. Then the Pontryagin dual of the Greenberg Selmer group of $f$ over the cyclotomic $\mathbb Z_p$-extension of $\mathbb Q$ is a torsion $\Lambda$-module.

## Statement references

[Christopher Skinner and Eric Urban, The Iwasawa Main Conjectures for GL2](https://www.math.columbia.edu/~urban/eurp/MC.pdf)

[Kazuya Kato, p-adic Hodge theory and values of zeta functions of modular forms](https://www.numdam.org/item/AST_2004__295__117_0.pdf)

## Facts & Assumptions

**Given:** The ordinary form, attached Galois representation, and Greenberg Selmer module.

[F1] [[def-greenberg-selmer-group-of-an-ordinary-newform]]: the dual Selmer module is the Pontryagin dual over the cyclotomic Iwasawa algebra.

[F2] [[def-normalized-cuspidal-eigenform-over-gl2]]: the form has its weight, level, and normalized eigenvalues.

[F3] [[thm-deligne-attaches-l-adic-representation-to-a-cuspidal-eigenform]]: the p-adic Galois representation is attached to the form.

[F4] [[def-newform-subspace-of-congruence-forms]]: $f$ lies in the new subspace of its congruence-level cusp space.

[A1] [[def-axiom-of-choice]]: the attached cohomological eigenspace supplier declares AC.

## Escalation

This is Skinner–Urban Theorem 3.3.7, attributed there to Kato Theorem 17.4(1). Its Euler-system proof is not locally reconstructed. It is an explicit unresolved supplier for the characteristic-ideal theorem below.
