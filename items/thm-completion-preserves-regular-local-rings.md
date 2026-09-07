---
id: "thm-completion-preserves-regular-local-rings"
kind: "theorem"
title: "completion preserves regular local rings"
deps: ["lem-completion-preserves-embedding-dimension", "thm-completion-preserves-dimension-and-hilbert-samuel-data"]
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Lecture 25, property (6), p.69"
      url: "https://www.math.columbia.edu/~wenqili/commalg_notes.pdf"
provenance:
  statement: literature-derived
  proof: ai-altered
status: published
origin: "pipeline"
proof_strategy: "Explicit algebraic derivation"
---

## Statement

A nonzero Noetherian local ring $R$ is regular if and only if its maximal-adic completion $\widehat R$ is regular.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement. We work with the Axiom of Choice; cited dependent-choice and resolution-existence hypotheses are retained.

[F1] [[lem-completion-preserves-embedding-dimension]]: For a nonzero Noetherian local ring $(R,\mathfrak m,k)$, its maximal-adic completion $\widehat R$ has maximal ideal $\widehat{\mathfrak m}=\mathfrak m\widehat R$, residue field $k$, and a canonical isomorphism $\mathfrak m/\mathfrak m^2\cong\widehat{\mathfrak m}/\widehat{\mathfrak m}^2$. In particular their embedding dimensions agree.

[F2] [[thm-completion-preserves-dimension-and-hilbert-samuel-data]]: Assume the Axiom of Choice. Let $(R,\mathfrak m)$ be a Noetherian local ring, let $M \neq 0$ be a finitely generated $R$-module, and let $\widehat R$, $\widehat M$ denote the $\mathfrak m$-adic completions. 1. For every $n \ge 0$, $$ \widehat M/\mathfrak m^{n+1}\widehat M \cong M/\mathfrak m^{n+1}M. $$ In particular the Hilbert-Samuel functions of $M$ and $\widehat M$ agree. 2. The Hilbert-Samuel multiplicity of $M$ equals that of $\widehat M$. 3. The support dimensions of $M$ and $\widehat M$ are equal.

## Proof

1.1 Completion preserves the embedding dimension. Applied to the nonzero finite module $R$, the completion dimension theorem also gives $\dim\widehat R=\dim R$, because the support of a ring over itself is its entire spectrum. [F1, F2]

2.1 Thus $\operatorname{edim}R=\dim R$ holds exactly when $\operatorname{edim}\widehat R=\dim\widehat R$. These are the two regularity conditions. The argument also applies when the common dimension or embedding dimension is zero. [step 1.1, algebra] ∎
