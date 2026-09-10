---
id: "ex-euclidean-triangle-has-positive-linear-minsize"
kind: "example"
title: "A Euclidean right triangle has minsize proportional to its scale"
status: published
origin: "pipeline"
deps: ["def-real-tree-tripods-and-geodesic-triangle-minsize", "lem-metrics-on-rn", "thm-of-square-roots"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  scraped: []
  references:
    - title: "Drutu–Kapovich, Geometric Group Theory — §11.21, Definition 11.175 and Proposition 11.176, comparison with the Euclidean-plane example; explicit computation here"
      url: "https://www.math.ucdavis.edu/~kapovich/EPR/ggt.pdf"
pipeline_run: "phase-2-hg-prerequisite"
proof_strategy: direct
---

## Example

In $(\mathbb R^2,d_2)$ consider the triangle with vertices $(0,0),(s,0),(0,s)$, where $s>0$. Its perimeter is $(2+\sqrt2)s$ and its minsize $\mu(s)$ satisfies
$$s/2\leq\mu(s)\leq s,\qquad \mu(s)=s\mu(1).$$
In particular its minsize is a positive linear function of its scale; no optimal coefficient is asserted.

## Facts & Assumptions

**Given:** Fix $s>0$ and the three indicated straight sides in the Euclidean metric.

[F1] Minsize is the infimum of the diameters of triples, with one point on each chosen side. ([[def-real-tree-tripods-and-geodesic-triangle-minsize]]).

[F2] On $\mathbb R^2$, $d_2((x,y),(x',y'))=\sqrt{(x-x')^2+(y-y')^2}$ is a metric. ([[lem-metrics-on-rn]]).

[F3] The nonnegative square root exists and is unique; in particular $(\sqrt2)^2=2$ and $\sqrt2>0$. ([[thm-of-square-roots]]).

## Verification

**Proof technique:** direct.

1.1 Parameterize the two axis sides by $\gamma_1(u)=(u,0)$ and $\gamma_2(u)=(0,u)$ for $0\leq u\leq s$. Their pairwise parameter distances are $\sqrt{(u-v)^2}=|u-v|$. Parameterize the third side by $\gamma_3(u)=(u/\sqrt2,s-u/\sqrt2)$ for $0\leq u\leq s\sqrt2$. Its squared distance between parameters $u,v$ is $2((u-v)/\sqrt2)^2=(u-v)^2$, so it too has distance $|u-v|$. These are isometric segments with exactly the displayed endpoints. Their lengths sum to $(2+\sqrt2)s$. [F2, F3]

2.1 Write an arbitrary side triple as $p=(u,0)$, $q=(0,v)$, $r=(t,s-t)$ with $u,v,t\in[0,s]$. Then $d_2(p,r)\geq s-t$ and $d_2(q,r)\geq t$, since their squared distances include respectively $(s-t)^2$ and $t^2$ and all other summands are nonnegative. Therefore its diameter is at least $\max(t,s-t)\geq s/2$. This holds for every triple, so $\mu(s)\geq s/2$. [F1, F2, F3, step 1.1]

2.2 Take $p=q=(0,0)$ and $r=(s,0)$, which belong respectively to the two axis sides and the third side. Their three pair distances are $0,s,s$, so the diameter is $s$ and $\mu(s)\leq s$. In particular at $s=1$ the computed bounds are $1/2\leq\mu(1)\leq1$. [F1, F2, step 1.1]

3.1 Multiplication of both coordinates by $s$ bijects all triples for scale one with all triples for scale $s$, with inverse division by $s$. The distance formula gives $d_2(sx,sy)=s d_2(x,y)$ because $s>0$. Hence the set of admissible diameters is exactly $s$ times the scale-one set. Multiplication by a positive scalar commutes with its infimum: all scaled values are at least $s\mu(1)$, and a value less than $\mu(1)+\varepsilon/s$ scales to less than $s\mu(1)+\varepsilon$. Thus $\mu(s)=s\mu(1)$, with a positive coefficient by step 2.2. [F1, F2, F3, step 2.2] ∎
