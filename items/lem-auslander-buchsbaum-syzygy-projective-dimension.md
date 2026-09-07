---
id: "lem-auslander-buchsbaum-syzygy-projective-dimension"
kind: "lemma"
title: "auslander buchsbaum syzygy projective dimension"
deps: ["lem-projective-dimension-from-last-nonzero-betti-number"]
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Theorem 12.31 proof, Case 3, p.122"
      url: "https://websites.umich.edu/~mmustata/CAnotes.pdf"
provenance:
  statement: literature-derived
  proof: ai-altered
status: published
origin: "pipeline"
proof_strategy: "Explicit algebraic derivation"
---

## Statement

Let $0\to K\to F_0\to M\to0$ be the initial minimal presentation of a nonzero finite module over a nonzero Noetherian local ring. If $0<n=\operatorname{pd}M<\infty$, then $K\ne0$ and $\operatorname{pd}K=n-1$.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement. We work with the Axiom of Choice; cited dependent-choice and resolution-existence hypotheses are retained.

[F1] [[lem-projective-dimension-from-last-nonzero-betti-number]]: For a nonzero finite module $M$ over a nonzero Noetherian local ring, $\operatorname{pd}_RM=\sup\{i\ge0:\beta_i^R(M)\ne0\}$, allowing infinity. For each integer $q\ge0$, $\operatorname{pd}_RM\le q$ if and only if $\operatorname{Tor}_{q+1}^R(k,M)=0$.

## Proof

1.1 The minimal resolution of $M$ has last nonzero term $F_n$ by the Betti criterion. Truncating it gives a minimal resolution $\cdots\to F_2\to F_1\to K\to0$. If $K=0$, the initial presentation would make $M$ free, contrary to $n>0$. [F1]

2.1 The truncated resolution has last nonzero term $F_n$ in degree $n-1$, so the same criterion gives $\operatorname{pd}K=n-1$. For $n=1$ this says that $K$ is a nonzero finite free module. [F1, step 1.1] ∎
