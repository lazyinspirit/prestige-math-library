---
id: def-local-gch-for-arbitrary-sets
kind: definition
title: "Local GCH for arbitrary sets"
status: draft
origin: pipeline
deps: ["def-equinumerous", "thm-cantor-powerset"]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Carneiro, GCH implies AC, §§1–2, pp.1–2"
      url: https://arxiv.org/pdf/1506.03533
    - title: "Caicedo, Some choiceless results (5), opening Specker theorem"
      url: https://caicedoteaching.wordpress.com/2009/02/02/580-some-choiceless-results-5/
---

## Definition

Write $X\preceq Y$ for an injection and $X\approx Y$ for a bijection; $X\prec Y$ means $X\preceq Y$ and $X\not\approx Y$. For an infinite set $X$, **local GCH at $X$**, denoted $\mathrm{CH}(X)$, means

$$\forall Y\ (X\preceq Y\preceq\mathcal P(X)\ \Longrightarrow\ Y\approx X\text{ or }Y\approx\mathcal P(X)).$$

**Arbitrary-set GCH** asserts this for every infinite set. No well-order of $X$ is implicit. We write $\operatorname{Seq}(X)=\bigcup_{n<\omega}{}^nX$ for finite sequences, including the empty sequence, and $h(X)$ for the Hartogs number. Disjoint union is denoted $\sqcup$.
