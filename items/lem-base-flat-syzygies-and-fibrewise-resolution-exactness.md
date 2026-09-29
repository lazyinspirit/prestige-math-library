---
id: lem-base-flat-syzygies-and-fibrewise-resolution-exactness
kind: lemma
title: Syzygies of a base-flat module over a flat algebra stay base-flat and fibrewise exact
status: draft
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - thm-flat-quotients-preserve-short-exact-tensor-sequences
  - thm-flatness-criteria-by-injections-and-ideals
  - thm-localisation-of-modules-is-exact
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  references:
    - title: "The Stacks Project, Algebra, Theorem 10.129.4 (tag 00RC), flat syzygy and fibre reduction step"
      url: https://stacks.math.columbia.edu/tag/00RC
    - title: "The Stacks Project, Algebra, Lemma 10.39.13 (tag 00HM), flatness in exact sequences"
      url: https://stacks.math.columbia.edu/tag/00HM
---

## Statement

Let $R\to P$ be a flat ring map, let $M$ be a
$P$-module flat over $R$, and let
$$0\to K_n\to F_{n-1}\to\cdots\to F_0\to M\to0$$
be an exact sequence of $P$-modules with $n\ge1$ and each $F_j$
free over $P$. Then every intermediate syzygy, including
$K_n$, is flat over $R$. For every ring map $R\to R'$, the
sequence obtained by tensoring every term with $R'$ over
$R$ is still exact. In particular this holds for a residue
field $R'=\kappa(\mathfrak p)$ and after localizing the
result at a prime of $P\otimes_RR'$.

## Facts & Assumptions

**Given:** The flat algebra, base-flat module, and exact free partial resolution.

[F1] In a short exact sequence $0\to A\to B\to C\to0$, if $C$ is flat over $R$, tensoring with any $R$-module preserves the short exact sequence ([[thm-flat-quotients-preserve-short-exact-tensor-sequences]]).

[F2] A module is flat when tensoring preserves injections; free $P$-modules are $R$-flat because $P$ is $R$-flat ([[thm-flatness-criteria-by-injections-and-ideals]]).

[F3] Localization preserves exact sequences of modules ([[thm-localisation-of-modules-is-exact]]).

## Proof

**Proof technique:** move from the quotient $M$ upward through the free resolution, using a tensor diagram to show that each new kernel is flat.

1.1 Put $K_0=M$ and, for $j\ge1$, write the resolution as short exact sequences $$0\to K_j\to F_{j-1}\to K_{j-1}\to0.$$ The base $K_0=M$ is $R$-flat by hypothesis, and each $F_{j-1}$ is $R$-flat by [F2]. [F2]

2.1 Suppose $K_{j-1}$ is $R$-flat. By [F1], the sequence in step 1.1 stays short exact after tensoring with any $R$-module $N$. To show $K_j$ is flat, take any injection $N'\hookrightarrow N$ and compare the two tensored short exact rows. The vertical map $F_{j-1}\otimes_RN'\to F_{j-1}\otimes_RN$ is injective by [F2]. Since $K_j\otimes_RN'$ injects into the first free-module tensor, an element killed by $K_j\otimes_RN'\to K_j\otimes_RN$ must already be zero. Thus this latter map is injective, and [F2] makes $K_j$ $R$-flat. Repeat for $j=1,\ldots,n$. [F1, F2, step 1.1]

3.1 Each short exact sequence of step 1.1 remains exact after tensoring with $R'$ by [F1], because its quotient $K_{j-1}$ is now known to be $R$-flat. Splicing these tensored sequences yields exactness of the full base-changed resolution. Localization preserves exactness by [F3], so the same is true at every prime of its base-changed algebra. No choice principle is used: the free resolution is part of the given data. [F1, F3, step 1.1, step 2.1] ∎
