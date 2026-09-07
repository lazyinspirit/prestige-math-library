---
id: "thm-auslander-buchsbaum-formula"
kind: "theorem"
title: "auslander buchsbaum formula"
deps: ["lem-auslander-buchsbaum-base-case-free-module", "lem-auslander-buchsbaum-projective-dimension-one", "lem-auslander-buchsbaum-syzygy-projective-dimension", "lem-auslander-buchsbaum-first-syzygy-depth"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Theorem 1.53, pp.24–25; Mustata 12.31"
      url: "https://jack-jeffries.github.io/UM/LCnotes.pdf"
provenance:
  statement: literature-derived
  proof: ai-altered
status: "draft"
origin: "pipeline"
proof_strategy: "Explicit algebraic derivation"
---

## Statement

For a nonzero finite module $M$ of finite projective dimension over a nonzero Noetherian local ring $R$, $\operatorname{pd}_RM+\operatorname{depth}_RM=\operatorname{depth}R$. Consequently such an $M$ with $\operatorname{depth}M=\operatorname{depth}R$ is free.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement. We work with the Axiom of Choice; cited dependent-choice and resolution-existence hypotheses are retained.

[F1] [[lem-auslander-buchsbaum-base-case-free-module]]: If a nonzero finite module $M$ over a nonzero Noetherian local ring $R$ has projective dimension zero, then it is finite free of positive rank and $\operatorname{depth}_RM=\operatorname{depth}R$.

[F2] [[lem-auslander-buchsbaum-projective-dimension-one]]: If $M$ is a nonzero finite module of projective dimension one over a nonzero Noetherian local ring $R$, then $\operatorname{depth}R\ge1$ and $\operatorname{depth}M=\operatorname{depth}R-1$.

[F3] [[lem-auslander-buchsbaum-syzygy-projective-dimension]]: Let $0\to K\to F_0\to M\to0$ be the initial minimal presentation of a nonzero finite module over a nonzero Noetherian local ring. If $0<n=\operatorname{pd}M<\infty$, then $K\ne0$ and $\operatorname{pd}K=n-1$.

[F4] [[lem-auslander-buchsbaum-first-syzygy-depth]]: In a minimal presentation $0\to K\to F\to M\to0$ of a nonzero finite module over a nonzero Noetherian local ring, let $n=\operatorname{pd}M\ge2$ be finite. If $\operatorname{depth}K=\operatorname{depth}R-(n-1)$, then $\operatorname{depth}M=\operatorname{depth}K-1$.

## Proof

1.1 Induct on $n=\operatorname{pd}M$. For $n=0$ the module is nonzero finite free and has the ring depth. For $n=1$ the separate minimal-matrix argument proves the formula. [F1, F2]

2.1 For $n\ge2$, take the first syzygy $K$ in a minimal presentation. It is nonzero finite with projective dimension $n-1$, so the inductive assertion gives $\operatorname{depth}K=\operatorname{depth}R-(n-1)$. The conditional syzygy-depth lemma then gives $\operatorname{depth}M=\operatorname{depth}R-n$. This completes the induction. [F3, F4, step 1.1]

3.1 If $\operatorname{depth}M=\operatorname{depth}R$, the formula forces projective dimension zero, and the base-case theorem gives freeness. The nonzero and finite-projective-dimension hypotheses are retained throughout. [F1, step 2.1, algebra] ∎
