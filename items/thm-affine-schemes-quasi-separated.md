---
id: thm-affine-schemes-quasi-separated
kind: theorem
title: "Affine schemes are quasi-separated"
status: published
verification:
  audited: 2026-09-07
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-quasi-compact-and-quasi-separated-scheme, cor-affine-scheme-quasi-compact, lem-basic-opens-quasi-compact, lem-intersection-affine-opens-covered-principal-opens]
proof_strategy: direct
sources:
  references:
    - title: "Ravi Vakil, Foundations of Algebraic Geometry, Section 6.1.1"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGmar3111public.pdf"
---
## Statement

Every affine scheme is quasi-separated.

## Facts & Assumptions

**Given:** An affine scheme $X$ and affine open subschemes $U,V\subseteq X$.

## Proof

**Proof technique:** direct.

1.1 Write $X=\operatorname{Spec}A$. Since $U$ and $V$ are quasi-compact open subsets of $X$, each is a finite union of distinguished opens, say $U=\bigcup_iD(f_i)$ and $V=\bigcup_jD(g_j)$. [given]

2.1 Hence $U\cap V=\bigcup_{i,j}D(f_ig_j)$ is a finite union of quasi-compact distinguished opens, and is therefore quasi-compact. [step 1.1]

3.1 This is exactly the affine-intersection criterion in the definition of quasi-separatedness. [step 2.1] ∎
