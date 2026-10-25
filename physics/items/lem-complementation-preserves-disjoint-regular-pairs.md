---
id: lem-complementation-preserves-disjoint-regular-pairs
kind: lemma
title: "Complementation sends a disjoint $\\epsilon$-regular pair of density $d$ to one of density $1-d$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-epsilon-regular-pair, def-graph-isomorphism-and-complement]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "D. Conlon and J. Fox, Graph removal lemmas, sec. 3.1"
      url: "https://arxiv.org/pdf/1211.3487"
pipeline_run: null
---

## Statement

Let $X,Y$ be disjoint nonempty vertex sets. If $(X,Y)$ is $\epsilon$-regular of density $d$ in $G$, then it is $\epsilon$-regular of density $1-d$ in $\overline G$.

## Facts & Assumptions

**Given:** Disjoint nonempty sets $X,Y$ forming an $\epsilon$-regular pair of density $d$ in $G$.

[L1] Regularity means that every sufficiently large subpair $(A,B)$ has density within $\epsilon$ of $d(X,Y)$ ([[def-epsilon-regular-pair]]).

[L2] In the complement, exactly the missing pairs of distinct vertices are edges ([[def-graph-isomorphism-and-complement]]).

## Proof

**Proof technique:** direct.

1.1 Because $X$ and $Y$ are disjoint, every ordered pair in $A\times B$ consists of distinct vertices and is an edge in exactly one of $G,\overline G$; hence $d_{\overline G}(A,B)=1-d_G(A,B)$ for every nonempty $A\subseteq X$, $B\subseteq Y$. [given, L2]

2.1 Taking $A=X,B=Y$ gives $d_{\overline G}(X,Y)=1-d$. [step 1.1]

3.1 For every subpair meeting the thresholds in [L1], $|d_{\overline G}(A,B)-(1-d)|=|d_G(A,B)-d|\le\epsilon$, so the complemented pair is $\epsilon$-regular. [step 1.1, step 2.1, L1] ∎



Disjointness is essential for the exact density formula. When $X$ and $Y$ overlap, diagonal pairs are edges in neither graph and contribute a correction of $|X\cap Y|/(|X||Y|)$.
