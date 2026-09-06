---
id: thm-the-integers-have-global-dimension-one
kind: theorem
title: "The integers have global dimension one"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-left-and-right-global-dimension-of-a-ring, lem-subgroups-of-free-abelian-groups-are-free, thm-projective-dimension-at-most-n-iff-higher-ext-vanishes, lem-ext-one-of-z-mod-n-by-z-is-z-mod-n]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapters 3–4"
      url: https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
pipeline_run: frontier-31a
---
## Statement

Assume the Axiom of Choice.
Both left and right global dimension of $\mathbb Z$ equal $1$.

## Facts & Assumptions

**Given:** An arbitrary abelian group $A$ and an integer $n>1$, under Choice.

## Proof

**Proof technique:** direct.

1.1 A free presentation $F\twoheadrightarrow A$ has kernel $K\subseteq F$. By [[lem-subgroups-of-free-abelian-groups-are-free]], using the stated Choice hypothesis, $K$ is free. Thus $0\to K\to F\to A\to0$ is a projective resolution of length one. [given, construct]

2.1 Hence every $A$ has projective dimension at most one, so both global dimensions are at most one.  The nonzero group $\operatorname{Ext}^1_{\mathbb Z}(\mathbb Z/n,\mathbb Z)$ gives the reverse inequality. [step 1.1, algebra] ∎
