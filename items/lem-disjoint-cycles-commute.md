---
id: lem-disjoint-cycles-commute
kind: lemma
title: 'Cycles with disjoint supports commute'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-permutation-support-disjoint-cycles-and-cycle-type, def-symmetric-group]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'T. W. Judson, Abstract Algebra: Theory and Applications, §5.1, Proposition 5.2'
      url: 'https://judsonbooks.org/aata-files/aata-20140815.pdf'
pipeline_run: null
---

## Statement

Cycles with disjoint supports commute. More precisely, if $X$ is finite and
$\alpha$ and $\beta$ are cycles in $\operatorname{Sym}(X)$ and
$\operatorname{supp}(\alpha)\cap\operatorname{supp}(\beta)=\varnothing$, then
$\alpha\beta=\beta\alpha$.

## Facts & Assumptions

**Given:** A finite set $X$ and two cycles $\alpha,\beta\in\operatorname{Sym}(X)$ with disjoint supports.

[L1] A cycle fixes every point outside its support, and two cycles are disjoint exactly when their supports are disjoint ([[def-permutation-support-disjoint-cycles-and-cycle-type]]).

## Proof

**Proof technique:** direct.

1.1 Every $x\in X$ lies in $\operatorname{supp}(\alpha)$, in $\operatorname{supp}(\beta)$, or in neither support, and the first two alternatives cannot both hold. [given, L1]

2.1 If $x\in\operatorname{supp}(\alpha)$, then $\beta$ fixes both $x$ and $\alpha(x)$, so $\alpha\beta(x)=\beta\alpha(x)=\alpha(x)$; the symmetric argument applies on $\operatorname{supp}(\beta)$, while outside both supports both cycles fix $x$. Thus the two composites agree at every point. [step 1.1, L1] ∎
