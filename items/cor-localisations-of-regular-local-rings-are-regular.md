---
id: "cor-localisations-of-regular-local-rings-are-regular"
kind: "corollary"
title: "localisations of regular local rings are regular"
deps: ["thm-auslander-buchsbaum-serre-regularity-criterion", "thm-localisation-of-modules-is-exact", "lem-height-equals-local-dimension"]
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Corollary 12.34, p.123"
      url: "https://websites.umich.edu/~mmustata/CAnotes.pdf"
provenance:
  statement: literature-derived
  proof: ai-altered
status: published
origin: "pipeline"
proof_strategy: "Explicit algebraic derivation"
---

## Statement

Every prime localization $R_{\mathfrak p}$ of a regular local ring $R$ is regular, and $\operatorname{edim}R_{\mathfrak p}=\operatorname{ht}\mathfrak p$.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement. We work with the Axiom of Choice; cited dependent-choice and resolution-existence hypotheses are retained.

[F1] [[thm-auslander-buchsbaum-serre-regularity-criterion]]: For a nonzero Noetherian local ring $(R,\mathfrak m,k)$ the following are equivalent: $R$ is regular; $\operatorname{pd}_Rk<\infty$; $\operatorname{gldim}R<\infty$; and every finite $R$-module has finite projective dimension. When these hold, $\operatorname{gldim}R=\operatorname{pd}_Rk=\dim R$. A nonzero finite module over regular local $R$ is maximal Cohen–Macaulay (depth $\dim R$) if and only if it is free.

[F2] [[thm-localisation-of-modules-is-exact]]: If $$ 0 \longrightarrow M' \xrightarrow{f} M \xrightarrow{g} M'' \longrightarrow 0 $$ is a short exact sequence of $R$-modules, then $$ 0 \longrightarrow S^{-1}M' \xrightarrow{S^{-1}f} S^{-1}M \xrightarrow{S^{-1}g} S^{-1}M'' \longrightarrow 0 $$ is a short exact sequence of $S^{-1}R$-modules.

[F3] [[lem-height-equals-local-dimension]]: Let $R$ be a commutative ring and let $\mathfrak p\in\operatorname{Spec}(R)$. Then $\operatorname{ht}(\mathfrak p)=\sup\{n\ge 0:\mathfrak p_0\subsetneq\cdots\subsetneq\mathfrak p_n=\mathfrak p\text{ is a strict chain of prime ideals in }R\}$. The supremum is allowed to be infinite.

## Proof

1.1 The finite module $R/\mathfrak p$ has a finite projective resolution by the homological regularity criterion. Localizing preserves exactness; projective modules remain projective because their splittings as summands of free modules localize. The resulting resolution resolves $(R/\mathfrak p)_{\mathfrak p}=k(\mathfrak p)$. [F1, F2]

2.1 The residue field of $R_{\mathfrak p}$ thus has finite projective dimension, and the same criterion makes this local ring regular. Prime chains in the localization correspond exactly to prime chains below $\mathfrak p$, so its dimension is $\operatorname{ht}\mathfrak p$; regularity gives its embedding dimension. At height zero the localization is a field. [F1, F3, step 1.1] ∎
