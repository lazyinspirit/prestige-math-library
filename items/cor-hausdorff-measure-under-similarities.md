---
id: "cor-hausdorff-measure-under-similarities"
kind: "corollary"
title: "Similarities scale Hausdorff measure exactly"
deps: ["thm-hausdorff-measure-under-lipschitz-maps"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: Fremlin 264G,264Yf(i),264Yj(i)
      url: https://www1.essex.ac.uk/maths/people/fremlin/chap26.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
status: "draft"
origin: "pipeline"
---

## Statement

Assume the Axiom of Countable Choice. If $f:D\subseteq X\to Y$ satisfies $d_Y(f(x),f(y))=c\,d_X(x,y)$ for a finite constant $c>0$, then for every $A\subseteq D$ and finite $s\ge0$,

$$\mathcal H^s(f(A))=c^s\mathcal H^s(A).$$

This includes isometries and Euclidean translations and dilations. The Hausdorff outer value of a subset of a metric subspace equals its value computed in the ambient metric space.

## Facts & Assumptions

**Given:** The objects, conventions, and hypotheses in the statement above.

[F1] Under the standing Countable Choice hypothesis, for a positive Lipschitz constant $L$, $\mathcal H^s(f(A))\le L^s\mathcal H^s(A)$, including $s=0$. [[thm-hausdorff-measure-under-lipschitz-maps]]

## Proof

1.1 Since $c>0$, equality of images implies distance zero in $D$, so $f$ is injective. Its inverse on $f(D)$ is $1/c$-Lipschitz. Apply the inequality to $f$ and its inverse to obtain both bounds and hence equality; all scalar multipliers are positive, so infinite values cause no indeterminate product. [F1]

2.1 An ambient cover can be intersected with the subspace and its empty members discarded, without increasing cost or diameter. Conversely every subspace cover is an ambient cover. Infima at each scale, and then their suprema, agree. The empty set and $s=0$ obey the same comparison. Taking $c=1$ gives isometries and translations; a Euclidean dilation by $c>0$ scales distances by $c$. [given, step 1.1] ∎
