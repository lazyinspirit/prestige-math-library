---
id: "lem-hg-toolkit-infinite-hyperbolic-groups-have-infinite-order-elements"
kind: "lemma"
title: "Hg toolkit infinite hyperbolic groups have infinite order elements"
deps: ["lem-hg-toolkit-finitely-many-cayley-cone-types", "prop-word-metric-balls-are-finite-exactly-when-the-generating-set-is-finite"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "Hamann Proposition 5.2.2 and Theorem 5.2.4 pp.85–87; complete proofs"
      url: "https://www.math.uni-hamburg.de/home/hamann/Lehre/GeoGrTh/GeoGrThEn.pdf"
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

Every infinite finitely generated hyperbolic group contains an element of infinite order. More generally this holds for any infinite finitely generated group with finitely many geodesic cone types.

## Facts & Assumptions

**Given:** An infinite group with a specified finite generating set; use its word length $|\cdot|$.

[F1] Its cone is $\mathcal C(g)=\{h:|gh|=|g|+|h|\}$. Hyperbolicity gives finitely many such cones by [[lem-hg-toolkit-finitely-many-cayley-cone-types]].

[F2] Finite generating sets have finite metric balls by [[prop-word-metric-balls-are-finite-exactly-when-the-generating-set-is-finite]].

## Proof

1.1 Let $k$ be the positive finite number of cone types. The group is not contained in its finite closed radius-$k$ set, by F2 and infinitude. Choose $g$ with $|g|=m>k$ and a shortest word path $e=g_0,g_1,\ldots,g_m=g$. Prefixes of a shortest word are shortest, so $|g_i|=i$ and $|g_i^{-1}g_j|=j-i$ for $i<j$; shortening either prefix or intervening subword would shorten the whole word. Among the $m+1$ cone types of these vertices, two are equal. Fix $i<j$ with $\mathcal C(g_i)=\mathcal C(g_j)$, and put $h=g_i^{-1}g_j$, $l=j-i>0$. Then $|h|=l$ and $|g_i h|=i+l$. [F1, F2, given]

2.1 We prove by induction that $|h^n|=nl$ and $|g_i h^n|=i+nl$ for every integer $n\ge0$. For $n=0$ this is the identity, and for $n=1$ it is step 1.1. Suppose the assertion holds for $n$. Then $h^n\in\mathcal C(g_i)=\mathcal C(g_i h)$, so $$|g_i h^{n+1}|=|g_i h|+|h^n|=i+(n+1)l.$$ The inequalities $|g_i h^{n+1}|\le i+|h^{n+1}|\le i+(n+1)l$ force $|h^{n+1}|=(n+1)l$. This completes the induction. [step 1.1, F1, algebra]

3.1 For every $n>0$, step 2.1 gives $|h^n|=nl>0$, hence $h^n\ne e$. Thus $h$ has infinite order. In the hyperbolic case F1 supplies the required finite cone hypothesis, proving the first assertion. The proof uses only a single long word and finitely many cone comparisons, not an infinite ray selection or AC. [step 2.1, F1, given] ∎
