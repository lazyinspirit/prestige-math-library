---
id: lem-p-adic-period-ring-comparison-embedding-is-injective
kind: lemma
title: The semistable-to-de Rham period-ring embedding is injective
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 14
deps:
  - def-p-adic-period-rings
  - lem-cyclotomic-tilt-valuation-and-fontaine-principal-kernel
  - lem-perfect-base-witt-teichmuller-expansions-and-units
  - lem-choice-free-crystalline-logarithm-and-abstract-semistable-period-ring
  - lem-choice-free-normalized-semistable-comparison-homomorphism
  - lem-choice-free-scaled-fontaine-logarithm-is-transcendental
  - lem-choice-free-ramified-crystalline-comparison-injection
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Olivier Brinon and Brian Conrad, CMI Summer School Notes on p-adic Hodge Theory, Part II, Chapter 9, Theorem 9.2.10
      url: https://math.stanford.edu/~conrad/papers/notes.pdf
    - title: Laurent Berger, An Introduction to the Theory of p-adic Representations, Section II.3.3
      url: https://perso.ens-lyon.fr/laurent.berger/articles/article05.pdf
proof_strategy: direct
axiom_use: The given valued closure and primitive cyclotomic system are used; no Choice, finite-Galois lifting or de Rham invariant identity is assumed.
verification: {}
---

## Statement

Let $K/\mathbb Q_p$ be finite, let $K_0$ be the fraction field of the Witt ring of its residue field, and choose the branch $\log_K(p)=0$ used to embed $B_{\mathrm{st}}$ into $B_{\mathrm{dR}}$. The natural $K$-algebra homomorphism
$$K\otimes_{K_0}B_{\mathrm{st}}\longrightarrow B_{\mathrm{dR}}$$
is injective.

## Statement references

[Olivier Brinon and Brian Conrad, *CMI Summer School Notes on p-adic Hodge Theory*, Theorem 9.2.10](https://math.stanford.edu/~conrad/papers/notes.pdf)

[Laurent Berger, *An Introduction to the Theory of p-adic Representations*, Section II.3.3](https://perso.ens-lyon.fr/laurent.berger/articles/article05.pdf)

## Facts & Assumptions

**Given:** The finite extension, valued closure, cyclotomic system, period rings and branch convention in the Statement and their definition.

[F1] The period-ring definition supplies the given cyclotomic system and the normalized branch. [[def-p-adic-period-rings]]

[F2] Its cyclotomic Fontaine-kernel generator $\xi$ has nonzero reduction $y=\xi\bmod p$ of tilt valuation one. [[lem-cyclotomic-tilt-valuation-and-fontaine-principal-kernel]]

[F3] The first Witt coordinate is reduction modulo $p$, Teichmüller lifts are multiplicative, and a Witt vector is a unit exactly when its first coordinate is a unit. [[lem-perfect-base-witt-teichmuller-expansions-and-units]]

[F4] For nonzero-valuation $y$, the semistable ring is $B_{\mathrm{cris}}[\lambda_{\mathrm{st}}(y)]$, and the crystalline logarithm of any tilt unit lies in $B_{\mathrm{cris}}$. [[lem-choice-free-crystalline-logarithm-and-abstract-semistable-period-ring]]

[F5] The normalized comparison map sends the semistable coordinate to the normalized de Rham logarithm, extends the crystalline map, agrees with the logarithmic series on $1+\ker\theta$, and sends $p$ to logarithm zero. [[lem-choice-free-normalized-semistable-comparison-homomorphism]]

[F6] For any given Witt unit $b$, $\log(1+\xi/(pb))$ is transcendental over $\operatorname{Frac}(B_{\mathrm{cris}})$ without Choice. [[lem-choice-free-scaled-fontaine-logarithm-is-transcendental]]

[F7] The multiplication map $K\otimes_{K_0}B_{\mathrm{cris}}\to B_{\mathrm{dR}}$ is injective without Choice. [[lem-choice-free-ramified-crystalline-comparison-injection]]

## Proof

1.1 Let $W=W(\mathcal O_C^\flat)$ and $y=\xi\bmod p$. By [F2] it has tilt valuation one. The vectors $[y]$ and $p+\xi$ have the same reduction modulo $p$, so $[y]=p+\xi+pa$ for a unique $a\in W$. Put $b=1+a$. The equality $\theta(b)=y^\sharp/p$ has valuation zero, and [F3] makes $b$ a Witt unit. [F2, F3, given, construct, algebra]

2.1 Let $x=b\bmod p$, a tilt unit. By [F3], $b=[x](1+pd)$ for some $d\in W$. The ordinary logarithm $\log(1+pd)=\sum_{n\ge1}(-1)^{n+1}p^nd^n/n$ converges $p$-adically in $W[1/p]$, including at $p=2$, because $n-v_p(n)\to\infty$. The normalized logarithm of $[x]$ lies in $B_{\mathrm{cris}}$ by [F4]–[F5], so the normalized logarithm $L(b)$ lies in $B_{\mathrm{cris}}$. The identity $[y]/(pb)=1+\xi/(pb)$, the normalization $L(p)=0$ and [F5] now give $$L([y])=L(b)+\log(1+\xi/(pb)).$$ By [F6] the second summand is transcendental over $E=\operatorname{Frac}(B_{\mathrm{cris}})$, and so is $L([y])$. [F3, F4, F5, F6, step 1.1, construct, algebra]

3.1 By [F7], $K\otimes_{K_0}B_{\mathrm{cris}}$ embeds into $B_{\mathrm{dR}}$. Localizing gives an injection $K\otimes_{K_0}E\hookrightarrow B_{\mathrm{dR}}$; this is a finite-dimensional $E$-algebra and a domain, hence a finite extension field of $E$. A transcendental element over $E$ remains transcendental over this finite extension: an algebraic relation over the extension would make the element algebraic over $E$ by transitivity. By [F4], $K\otimes_{K_0}B_{\mathrm{st}}$ is the polynomial algebra over $K\otimes_{K_0}B_{\mathrm{cris}}$ in $\lambda_{\mathrm{st}}(y)$; by [F5] its image is $L([y])$. The injection of the coefficient ring and this transcendence therefore make the displayed comparison map injective. No Galois fixed-field identity or Choice is used. [F4, F5, F7, step 1.1, step 2.1, algebra] ∎

## Source notes

The cyclotomic coordinate calculation is reconstructed from the recorded choice-free semistable reduction; the direct scaled-logarithm transcendence replaces its prior conditional invariant-field argument. The public Statement and its branch convention are unchanged.
