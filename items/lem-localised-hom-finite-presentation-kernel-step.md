---
id: lem-localised-hom-finite-presentation-kernel-step
kind: lemma
title: "A finite presentation reduces localised Hom to the finite free case"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-localisation-of-hom-natural-map, thm-localisation-of-modules-is-exact, def-finitely-presented-module-and-algebra]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., Proposition 12.25"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
pipeline_run: null
---

## Statement

Let
$$
R^m \xrightarrow{\alpha} R^n \xrightarrow{\beta} M \longrightarrow 0
$$
be a finite presentation of an $R$-module $M$, and let $N$ be an $R$-module. If the natural localisation maps for $R^n$ and $R^m$ are isomorphisms, then the natural localisation map
$$
S^{-1}\!\operatorname{Hom}_R(M,N) \longrightarrow \operatorname{Hom}_{S^{-1}R}(S^{-1}M,S^{-1}N)
$$
is an isomorphism as well.

## Facts & Assumptions

**Given:** A commutative ring $R$, a multiplicative subset $S \subseteq R$, an $R$-module $N$, and a finite presentation $R^m \xrightarrow{\alpha} R^n \xrightarrow{\beta} M \to 0$.

[L1] A finite presentation is an exact sequence $R^m \xrightarrow{\alpha} R^n \xrightarrow{\beta} M \to 0$, and equivalently $M \cong R^n/\operatorname{im}\alpha$ ([[def-finitely-presented-module-and-algebra]]).

[L2] Localisation sends short exact sequences to short exact sequences ([[thm-localisation-of-modules-is-exact]]).

[L3] The localisation map on Hom is natural in the source, with formula $\theta_{X,N}(f/s)(x/u)=f(x)/(su)$ ([[lem-localisation-of-hom-natural-map]]).

## Proof

**Proof technique:** direct.

1.1 Because $\beta$ is surjective in [L1], a homomorphism $h:R^n \to N$ factors through $M$ exactly when $h$ kills $\operatorname{im}\alpha$, equivalently when $h \circ \alpha=0$. Thus $\operatorname{Hom}_R(M,N)$ is the kernel of $\alpha^*:\operatorname{Hom}_R(R^n,N) \to \operatorname{Hom}_R(R^m,N)$, $h \mapsto h \circ \alpha$. [L1, algebra]

1.2 By [L2], localising the presentation of [L1] gives an exact sequence $S^{-1}R^m \xrightarrow{S^{-1}\alpha} S^{-1}R^n \xrightarrow{S^{-1}\beta} S^{-1}M \to 0$, so the same argument identifies $\operatorname{Hom}_{S^{-1}R}(S^{-1}M,S^{-1}N)$ with the kernel of $(S^{-1}\alpha)^*$. [L1, L2, algebra]

1.3 Naturality from [L3] makes the square between $\alpha^*$ and $(S^{-1}\alpha)^*$ commute. [L3, algebra]

2.1 If the two vertical maps in step 1.3 are isomorphisms, then they identify the kernel in step 1.1 with the kernel in step 1.2. Therefore the induced map on those kernels, namely $S^{-1}\!\operatorname{Hom}_R(M,N) \to \operatorname{Hom}_{S^{-1}R}(S^{-1}M,S^{-1}N)$, is an isomorphism. [step 1.1, step 1.2, step 1.3, algebra]

3.1 Step 2.1 is exactly the reduction from a finite presentation to the finite free case. [step 2.1] ∎
