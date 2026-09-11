---
id: "lem-hg-toolkit-halfspace-separation-for-local-geodesic-mesh"
kind: "lemma"
title: "Halfspace separation for the local-geodesic mesh"
deps: ["def-hg-toolkit-slim-triangles-products-and-four-point-constants"]
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
    - title: "Drutu–Kapovich, revised Lemma 11.46, printed pp.375–377 (PDF indices 395–397)"
      url: "https://www.math.ucdavis.edu/~kapovich/EPR/ggt.pdf"
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

In a geodesic space with $\delta$-slim triangles, $\delta>0$, let $x_0,x_1,x_2$ occur in this order on a geodesic, with $d(x_0,x_1)=d(x_1,x_2)=3\delta$. Put $D(a,b)=\{z:d(z,a)\le d(z,b)\}$. Then
$$ \operatorname{dist}(D(x_0,x_1),D(x_2,x_1))\ge\delta,\qquad D(x_2,x_1)\subseteq\{z:d(z,x_0)>d(z,x_1)\}. $$
Furthermore $\operatorname{dist}(x_0,D(x_1,x_0))\ge3\delta/2$ and $\operatorname{dist}(x_2,D(x_1,x_2))\ge3\delta/2$. Distances between nonempty sets mean infima of pairwise distances.

## Facts & Assumptions

**Given:** The space and three collinear points as in the statement.

[F1] Slimness and point-to-set distances use the infimum convention in [[def-hg-toolkit-slim-triangles-products-and-four-point-constants]].

## Proof

1.1 Fix $y_i\in D(x_i,x_1)$ for $i=0,2$, and write $E_i=d(x_i,y_i)$, $\eta=d(y_0,y_2)$. Let $u$ be the midpoint of a chosen segment from $y_0$ to $y_2$. Triangle inequalities and the halfspace assumptions give $d(u,x_i)\le E_i+\eta/2$ and $d(u,x_1)\ge E_i-\eta/2$ for each $i=0,2$. [given, algebra]

2.1 For every $h>0$, slimness of triangle $(x_0,u,x_2)$ at $x_1$ supplies $v$ on $[x_0,u]$ or $[x_2,u]$ with $d(v,x_1)<\delta+h$. Suppose it is on $[x_i,u]$. Then $d(u,v)>E_i-\eta/2-\delta-h$, while $d(x_i,u)\le E_i+\eta/2$, so $d(x_i,v)<\eta+\delta+h$. Therefore $3\delta=d(x_i,x_1)<\eta+2\delta+2h$. Since this holds for every $h>0$, $\eta\ge\delta$. [step 1.1, F1, algebra]

3.1 Taking the infimum over $y_0,y_2$ gives the first bound; both sets are nonempty since they contain $x_0,x_2$, respectively. They are disjoint because $\delta>0$. Thus any $z\in D(x_2,x_1)$ does not belong to $D(x_0,x_1)$, which is precisely the asserted strict inequality. [step 2.1, given]

4.1 If $y\in D(x_1,x_0)$, then $3\delta\le d(x_0,y)+d(y,x_1)\le2d(x_0,y)$, proving the endpoint bound by taking an infimum. Interchanging $x_0,x_2$ gives the other bound. No closest point to a halfspace or bisector has been selected, and all segment selections are finite. [given, algebra] ∎
