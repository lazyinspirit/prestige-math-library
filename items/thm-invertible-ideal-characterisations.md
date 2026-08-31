---
id: thm-invertible-ideal-characterisations
kind: theorem
title: "Equivalent characterizations of invertible fractional ideals"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-invertible-fractional-ideal, lem-fractional-ideal-operations-well-defined, thm-localisation-of-modules-is-exact, thm-local-criterion-for-zero-modules-and-maps, thm-projective-module-characterizations]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. P. May, Notes on Dedekind Rings"
      url: "https://www.math.uchicago.edu/~may/MISC/Dedekind.pdf"
    - title: "Mircea Mustata, Introduction to Commutative Algebra, §8.5"
      url: "https://websites.umich.edu/~mmustata/CAnotes.pdf"
    - title: "The Stacks Project, Section 10.78: Finite projective modules"
      url: "https://stacks.math.columbia.edu/tag/00NV"
pipeline_run: null
---

## Statement

Assume the Axiom of Choice. Let $I$ be a nonzero fractional ideal of a domain $R$. The following are equivalent:

1. $I$ is invertible.
2. As an $R$-module, $I$ is finite projective and $I_{\mathfrak m}\cong R_{\mathfrak m}$ for every maximal ideal $\mathfrak m$.
3. The module $I$ is finitely generated, and for every maximal ideal $\mathfrak m$, the localisation $I_{\mathfrak m}$ is a principal fractional ideal of $R_{\mathfrak m}$.

## Facts & Assumptions

**Given:** A nonzero fractional ideal $I$ of a domain $R$.

[F1] Invertibility means $I(R:I)=R$ ([[def-invertible-fractional-ideal]]).

[L1] Product, colon, and localisation of fractional ideals are well defined ([[lem-fractional-ideal-operations-well-defined]]).

[L2] Localisation of modules preserves short exactness ([[thm-localisation-of-modules-is-exact]]).

[L3] Assuming Choice, a module map is an isomorphism exactly when all maximal localisations are isomorphisms ([[thm-local-criterion-for-zero-modules-and-maps]]).

[L4] A projective module is exactly one that splits off a free cover ([[thm-projective-module-characterizations]]).

## Proof

**Proof technique:** direct.

1.1 Assume (1). Choose a finite relation $1=\sum_{i=1}^n x_i y_i$ with $x_i\in I$ and $y_i\in(R:I)$. For any $x\in I$ one has $x=\sum_i(xy_i)x_i$, so $x_1,\ldots,x_n$ generate $I$. Define $\phi:R^n\to I$ by $e_i\mapsto x_i$ and $\psi:I\to R^n$ by $x\mapsto(xy_1,\ldots,xy_n)$. Then $\phi\psi=\operatorname{id}_I$, so $I$ is a direct summand of a finite free module and hence finite projective by [L4]. [F1, L4, given, construct]

1.2 Assume (3), and choose generators $x_1,\ldots,x_n$ of $I$. For a maximal ideal $\mathfrak m$, write $I_{\mathfrak m}=aR_{\mathfrak m}$ with $a\in K^\times$. For each $i$ there is $u_i\in R_{\mathfrak m}$ such that $x_i/1=au_i$, and we may choose $s_i\notin\mathfrak m$ with $s_iu_i\in R$. Putting $t:=s_1\cdots s_n$, we get $(ta^{-1})x_i\in R$ for every $i$, so $ta^{-1}\in(R:I)$ and $a^{-1}/1=(ta^{-1})/t\in(R:I)_{\mathfrak m}$. Hence $1=(a/1)(a^{-1}/1)\in I_{\mathfrak m}(R:I)_{\mathfrak m}\subseteq R_{\mathfrak m}$, so in fact $I_{\mathfrak m}(R:I)_{\mathfrak m}=R_{\mathfrak m}$. By [L1], localising the quotient $R/I(R:I)$ and using [L2] gives $(R/I(R:I))_{\mathfrak m}=0$ for every maximal ideal $\mathfrak m$. Therefore [L3] gives $I(R:I)=R$, so $I$ is invertible. [L1, L2, L3, given, choose, algebra]

2.1 Still under (1), localise at a maximal ideal $\mathfrak m$. From $1=\sum x_i y_i$, one summand $x_jy_j$ is a unit in the local ring $R_{\mathfrak m}$, so $x_j$ generates $I_{\mathfrak m}$. Thus (1) implies (3), and also yields the local rank-one part of (2). [F1, step 1.1, algebra]

3.1 Condition (2) implies (3) because finite projective modules are finitely generated, and a free rank-one module over $R_{\mathfrak m}$ is principal. Steps 1.1 and 2.1 prove $(1)\Rightarrow(2)$ and $(1)\Rightarrow(3)$, step 1.2 proves $(3)\Rightarrow(1)$, and the present step proves $(2)\Rightarrow(3)$. Therefore the three conditions are equivalent. [step 1.1, step 1.2, step 2.1] ∎
