---
id: ex-cover-small-chains-for-the-two-arc-cover-of-a-circle
kind: example
title: "Cover-small chains for the two-arc cover of a circle"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-cover-small-singular-chain-subcomplex, lem-every-finite-singular-chain-becomes-cover-small-after-enough-subdivision, def-mayer-vietoris-connecting-class]
proof_strategy: direct
verification:
  audited: 2026-09-06
  precheck: pass
sources:
  references:
    - title: "Allen Hatcher, Algebraic Topology, §2.2"
      url: "https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf"
pipeline_run: frontier-31a
---

## Example

Fix an abelian group $G$ and an element $g\in G$. Let $U,V$ be proper overlapping open arcs covering $S^1$, so $U\cap V$ has two components. Choose one point $a_i$ in each overlap component. Parameterize the closed subarc from $a_0$ to $a_1$ carried by $U$ as a singular path $u$, and the complementary closed subarc from $a_1$ to $a_0$ carried by $V$ as $v$. Thus $z_{\mathbb Z}=u+v$ traverses the circle once with the indicated orientation. With coefficients in $G$, put
$$z_g=u\otimes g+v\otimes g\in C_1^{\{U,V\}}(S^1;G).$$
This is the oriented two-edge circle cycle with coefficient $g$; no distinguished element of $G$ is assumed.

## Facts & Assumptions

**Given:** The two-arc cover, overlap points, paths, abelian group $G$, and supplied coefficient $g$ above.

## Verification

**Proof technique:** direct.

1.1 Each proper open arc is an interval in the cyclic order. The interval inside $U$ joining the overlap points is one of the two closed subarcs between them, and the complementary subarc lies in $V$ because the omitted parts of $U$ must be covered by $V$. Both endpoints are in both open sets. Thus the entire images of $u$ and $v$, including their endpoints, lie in their respective cover members. Also $\partial(u\otimes g)=([a_1]-[a_0])\otimes g$ and $\partial(v\otimes g)=([a_0]-[a_1])\otimes g$, so $z_g$ is cover-small and is a cycle. [given, construct]

2.1 By [[def-mayer-vietoris-connecting-class]], $\delta[z_g]=[([a_1]-[a_0])\otimes g]\in H_0(U\cap V;G)$. Identifying the two components in the order containing $a_0,a_1$ gives the coefficient pair $(-g,g)$. Indeed, paths within each arc component identify its point classes, and no path crosses the components. Replacing the oriented integral cycle by its negative negates this class. If $g=0$ (including $G=0$), both chain and connecting class are zero. [step 1.1, algebra] ∎
