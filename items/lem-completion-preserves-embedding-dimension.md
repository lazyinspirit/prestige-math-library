---
id: "lem-completion-preserves-embedding-dimension"
kind: "lemma"
title: "completion preserves embedding dimension"
deps: ["def-embedding-dimension-and-regular-local-ring", "thm-completion-of-a-noetherian-local-ring", "cor-completion-commutes-with-finite-quotients-and-submodules"]
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Lecture 25, completion properties (1), (5), (6), pp.68–69"
      url: "https://www.math.columbia.edu/~wenqili/commalg_notes.pdf"
provenance:
  statement: literature-derived
  proof: ai-altered
status: published
origin: "pipeline"
proof_strategy: "Explicit algebraic derivation"
---

## Statement

For a nonzero Noetherian local ring $(R,\mathfrak m,k)$, its maximal-adic completion $\widehat R$ has maximal ideal $\widehat{\mathfrak m}=\mathfrak m\widehat R$, residue field $k$, and a canonical isomorphism $\mathfrak m/\mathfrak m^2\cong\widehat{\mathfrak m}/\widehat{\mathfrak m}^2$. In particular their embedding dimensions agree.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement. We work with the Axiom of Choice; cited dependent-choice and resolution-existence hypotheses are retained.

[F1] [[def-embedding-dimension-and-regular-local-ring]]: For a nonzero commutative Noetherian local ring $(R,\mathfrak m,k)$, define $\operatorname{edim}R=\dim_k(\mathfrak m/\mathfrak m^2)$. The ring is **regular local** when $\operatorname{edim}R=\dim R$. The cotangent space is intrinsic, and is finite-dimensional because $\mathfrak m$ is finitely generated.

[F2] [[thm-completion-of-a-noetherian-local-ring]]: Assume the Axiom of Choice. Let $(R,\mathfrak m)$ be a Noetherian local ring, and let $\widehat R$ be its $\mathfrak m$-adic completion. 1. $\widehat R$ is a Noetherian local ring with maximal ideal $\mathfrak m\widehat R$. 2. The residue field is unchanged: $$ \widehat R/\mathfrak m\widehat R \cong R/\mathfrak m. $$ 3. The completion map $R \to \widehat R$ is faithfully flat.

[F3] [[cor-completion-commutes-with-finite-quotients-and-submodules]]: Assume the Axiom of Choice. Let $R$ be a Noetherian commutative ring, let $I \subseteq R$ be an ideal, and let $N \subseteq M$ be finitely generated $R$-modules. 1. The natural map $$ \widehat M/\widehat N \longrightarrow \widehat{M/N} $$ is an isomorphism. 2. Under the natural map $\widehat N \to \widehat M$, the image of $\widehat N$ is the $\widehat R$-submodule $N\widehat R \subseteq \widehat M$. In particular, for every ideal $J \subseteq R$, $$ \widehat{JM}\cong J\widehat M. $$ 3. For every $n \ge 0$, $$ \widehat M/I^n\widehat M \cong M/I^nM. $$

## Proof

1.1 The completion theorem makes $\widehat R$ Noetherian local with maximal ideal $\mathfrak m\widehat R$ and residue field $k$. Finite-quotient compatibility identifies $R/\mathfrak m^2$ with $\widehat R/\mathfrak m^2\widehat R$ compatibly with their maps to $k$. [F2, F3]

2.1 The kernels of those maps to $k$ are the two cotangent spaces, since $(\mathfrak m\widehat R)^2=\mathfrak m^2\widehat R$. The induced isomorphism is $k$-linear and canonical, so their dimensions agree by the embedding-dimension definition. For $\mathfrak m=0$ both spaces are zero. [F1, step 1.1, algebra] ∎
