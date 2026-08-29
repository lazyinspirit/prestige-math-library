---
id: thm-character-of-the-regular-representation
kind: theorem
title: "The regular character is $|G|$ at $1$ and $0$ away from $1$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-trivial-regular-and-permutation-representations, thm-character-of-a-permutation-representation-counts-fixed-points]
justified_by: []
aliases: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  scraped: []
  references:
    - title: "Peter Webb, A Course in Finite Group Representation Theory, Lemma 3.3.6"
      url: "https://www-users.math.umn.edu/~webb/RepBook/RepBookLatex.pdf"
---

## Statement

Let $G$ be a finite group and let $\chi_{\mathrm{reg}}$ be the character of
the regular representation $\mathbb C[G]$ over $\mathbb C$. Then

$$\chi_{\mathrm{reg}}(g)=\begin{cases}|G|,&g=1,\\0,&g\ne1.\end{cases}$$

## Facts & Assumptions

**Given:** A finite group $G$, an element $g\in G$, and the regular representation $\mathbb C[G]$.

[F1] The regular representation acts on the basis $([h])_{h\in G}$ by $g\cdot[h]=[gh]$ ([[def-trivial-regular-and-permutation-representations]]).

[F2] The character of a permutation representation counts fixed points ([[thm-character-of-a-permutation-representation-counts-fixed-points]]).

[A1] In a group, $gx=x$ holds if and only if $g=1$, by cancellation.

## Proof

**Proof technique:** direct.

1.1 By [F1], the regular action is the permutation representation of the left $G$-set $G$ with basis indexed by the group elements. By [F2], $\chi_{\mathrm{reg}}(g)$ is the number of $h\in G$ with $g\cdot h=h$. [F1, F2, given]

2.1 By [A1], $gh=h$ has a solution in $G$ only when $g=1$, in which case every $h$ is fixed. Hence the count of step 1.1 is $|G|$ for $g=1$ and $0$ for $g\ne1$. [A1, step 1.1, algebra] ∎
