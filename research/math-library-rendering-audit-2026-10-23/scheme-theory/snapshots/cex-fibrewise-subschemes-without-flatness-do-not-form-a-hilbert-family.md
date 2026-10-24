---
id: cex-fibrewise-subschemes-without-flatness-do-not-form-a-hilbert-family
kind: counterexample
title: "Constant fibre polynomial does not give flatness over a nonreduced base"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - def-hilbert-functor-of-flat-projective-subschemes
  - lem-hilbert-universal-scheme-theoretic-flattening
  - def-axiom-of-choice
  - def-dependent-choice
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
proof_strategy: direct
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    delegated_by: "owner via frontier-38-owner-30 build dispatch"
    scope: "Historical completed Step 5 full authored item reading and mathematical acceptance; exact historical raw bytes differ from current only by publication status and verification metadata. Direct prerequisite interfaces checked; no recursive audit of supplier proofs."
    evidence:
      - "research/frontier-38-owner-30-reader-29.md"
      - "research/frontier-38-owner-30-alpha-batch-29-5a.md"
      - "research/frontier-38-owner-30-step5-hash-29-post-5a.json"
    content_sha256: "5f6b9262f0ca16651b97d37349154cf68bd36f8e333791c75cab0dbb09477293"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
---

## Statement refuted

Every closed subscheme of finite presentation in a projective family whose geometric fibres have one fixed Hilbert polynomial defines a member of that fixed-polynomial Hilbert functor.

## Facts & Assumptions

**Given:** AC and DC, a field $k$, $A=k[\epsilon]/(\epsilon^2)$, $T=\operatorname{Spec}A$, and $Z\subseteq\mathbb P^1_T$ defined by the homogeneous ideal $(X,\epsilon)$ in coordinates $[X:Y]$.

[F1] Hilbert families require base-flatness as well as finite presentation ([[def-hilbert-functor-of-flat-projective-subschemes]]). Universal flattening uses scheme structure, not merely a partition of the points ([[lem-hilbert-universal-scheme-theoretic-flattening]]).

## Counterexample

1.1 The scheme $Z$ is supported in $Y\ne0$ and there has algebra $A[x]/(x,\epsilon)=k$. Its inclusion has finite presentation. The base has one geometric fibre, and after any extension of its residue field that fibre is one reduced point. Its Hilbert polynomial is therefore the constant polynomial $1$. [algebra]

2.1 Nevertheless $k$ is not flat over $A$: tensoring the inclusion $(\epsilon)\hookrightarrow A$ with $k$ gives the zero map from the nonzero module $(\epsilon)\otimes_Ak\cong k$ to $k$. Tensoring has destroyed injectivity. Thus $Z$ is excluded from the Hilbert functor by [F1]. Its flattening locus for polynomial $1$ is the closed subscheme $\epsilon=0$, since after a map $A\to B$ the quotient $B/\epsilon B$ is locally free of rank one exactly when $\epsilon$ maps to zero; a surjection $B\to B/\epsilon B$ of locally free rank-one modules must be an isomorphism. The stratum and the base have the same underlying point but different scheme structures. [F1, step 1.1, algebra] ∎
