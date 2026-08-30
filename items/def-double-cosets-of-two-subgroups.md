---
id: def-double-cosets-of-two-subgroups
kind: definition
title: "Double cosets $K\\backslash G/H$ of two subgroups"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-coset, def-subgroup]
justified_by: []
aliases: []
sources:
  scraped: []
  references:
    - title: "Peter Webb, A Course in Finite Group Representation Theory, Section 5.1"
      url: "https://www-users.math.umn.edu/~webb/RepBook/RepBookLatex.pdf"
    - title: "Anupam Singh, Representation Theory of Finite Groups, Section 20.1"
      url: "https://arxiv.org/pdf/1001.0462.pdf"
verification:
  audited: 2026-08-30
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
---

## Definition

Let $G$ be a group and let $K,H\le G$ be subgroups ([[def-subgroup]]). For
$g\in G$, the **$(K,H)$-double coset** of $g$ is

$$
KgH:=\{kgh:k\in K,\ h\in H\}.
$$

The set of all such double cosets is written

$$
K\backslash G/H.
$$

## Remarks

- A double coset is a union of left cosets of $H$ and also a union of right
  cosets of $K$.

- The left cosets and right cosets of [[def-coset]] are the special cases
  $1\backslash G/H$ and $K\backslash G/1$.
