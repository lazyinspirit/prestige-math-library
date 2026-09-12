---
id: lem-block-idempotents-are-fixed-by-normal-p-subgroup-brauer-projection
kind: lemma
title: Normal p-subgroups fix block idempotents under Brauer projection
deps: ["thm-modular-block-central-characters-correspond-to-blocks", "prop-normal-p-subgroups-act-trivially-on-simple-modules", "def-brauer-homomorphism-for-a-p-subgroup", "thm-brauer-homomorphism-is-multiplicative"]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Martínez, Theorem4.5 proof, normal-p orbit localization; local central-idempotent
        consequence
      url: https://www.uv.es/jomimar8/pdfs/course%20notes.pdf
status: draft
origin: pipeline
proof_strategy: direct
---

## Statement

If $D\trianglelefteq H$ is a normal $p$-subgroup of a finite group and $k$ is its splitting residue field, then every central idempotent $e\in kH$ satisfies $\operatorname{Br}_D(e)=e$. In particular every block idempotent of $kH$ belongs to $kC_H(D)$.

## Facts & Assumptions

**Given:** The stated normal subgroup and splitting field.

[F1] [[thm-modular-block-central-characters-correspond-to-blocks]] supplies all central characters and detects the primitive block idempotents.

[F2] [[prop-normal-p-subgroups-act-trivially-on-simple-modules]] makes $D$ act trivially on every simple $kH$-module.

[F3] The coefficient projection is [[def-brauer-homomorphism-for-a-p-subgroup]].

[F4] [[thm-brauer-homomorphism-is-multiplicative]] proves its multiplicativity on the fixed algebra.

## Proof

1.1 For $z\in Z(kH)$, normality of $D$ makes $C_H(D)$ stable under $H$, so $\operatorname{Br}_D(z)$ is central in $kH$. On a simple module, each $D$-conjugation orbit outside $C_H(D)$ consists of elements with the same action operator by F2. Its coefficients in $z$ are equal, and its length is a positive power of $p$ greater than one. Its sum therefore acts as zero. Removing all these orbits leaves F3's projection. Hence every block character satisfies $\lambda_b(z)=\lambda_b(\operatorname{Br}_D(z))$, by its simple-module construction in F1. [F1, F2, F3, algebra]

2.1 If $e$ is central idempotent, its image is a central idempotent by F4 and step 1.1. A central idempotent is the sum of a subset of primitive block idempotents: multiply it by each primitive block and use primitivity to obtain either that block idempotent or zero. F1's characters read exactly the indicator of this subset. Step 1.1 says the two indicators for $e$ and its image agree, so the idempotents themselves agree. This includes $e=0,1$, $D=1$, and an empty set of removed orbits. All arguments involve finite sums and require no AC. [F1, F4, step 1.1, algebra] ∎
