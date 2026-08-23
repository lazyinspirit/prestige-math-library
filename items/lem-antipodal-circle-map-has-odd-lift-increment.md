---
id: lem-antipodal-circle-map-has-odd-lift-increment
kind: lemma
title: "An antipodal circle map has odd lift increment and is not nullhomotopic"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-circle-as-real-line-mod-integers, thm-real-line-covers-real-line-mod-integers, thm-path-lifting-for-covering-maps, cor-lifted-path-endpoints-depend-only-on-path-homotopy]
justified_by: []
aliases: []
landmark: true
short: "antipodal circle maps have odd degree"
proof_strategy: contradiction
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: "Allen Hatcher, Algebraic Topology, proof of Theorem 1.10"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT%2B.pdf"
pipeline_run: null
---

## Statement

On $S^1=\mathbb R/\mathbb Z$, define the antipodal involution by $a([u])=[u+1/2]$. If a continuous map $h:S^1\to S^1$ satisfies $h\circ a=a\circ h$, then every lift $\widetilde h:[0,1]\to\mathbb R$ of $t\mapsto h([t])$ has

$$\widetilde h(1)-\widetilde h(0)=2k+1$$

for some integer $k$. Thus the lift increment is odd, possibly negative, and the loop $t\mapsto h([t])$ is not nullhomotopic.

## Facts & Assumptions

**Given:** A continuous map $h:S^1\to S^1$ with $h\circ a=a\circ h$.

[F1] For the quotient map $p:\mathbb R\to\mathbb R/\mathbb Z$, one has $p(x)=p(y)$ exactly when $x-y\in\mathbb Z$, and $p(x+m)=p(x)$ for every integer $m$ ([[def-circle-as-real-line-mod-integers]]).

[L1] The quotient map $p:\mathbb R\to\mathbb R/\mathbb Z$ is a covering map ([[thm-real-line-covers-real-line-mod-integers]]).

[L2] A path in the base of a covering has a unique lift after its initial lift point is fixed ([[thm-path-lifting-for-covering-maps]]).

[L3] Endpoint-fixed homotopic paths have lifts with the same endpoint whenever their lifts begin at the same point ([[cor-lifted-path-endpoints-depend-only-on-path-homotopy]]).

## Proof

**Proof technique:** contradiction.

1.1 If $[u]=[v]$, then $(u+1/2)-(v+1/2)=u-v\in\mathbb Z$, so $a([u])=[u+1/2]$ is well defined by [F1]; moreover $a(a([u]))=[u+1]=[u]$, so $a$ is an involution. [F1, algebra]

1.2 Suppose the loop $t\mapsto h([t])$ were endpoint-fixed homotopic to the constant loop at $h([0])$. [assume-contra]

2.1 Let $y\in\mathbb R$ be arbitrary subject to $p(y)=h([0])$. By [L1] and [L2], the loop $t\mapsto h([t])$ has a unique lift $\widetilde h$ with $\widetilde h(0)=y$. Antipodality gives $p(\widetilde h(1/2))=h([1/2])=p(y+1/2)$, so [F1] gives a unique integer $k$ with $\widetilde h(1/2)=y+k+1/2$. [step 1.1, given, F1, L1, L2]

3.1 For $0\le t\le1/2$, the paths $t\mapsto\widetilde h(t+1/2)$ and $t\mapsto\widetilde h(t)+k+1/2$ project to the same path because $h([t+1/2])=a(h([t]))$, and they agree at $t=0$ by step 2.1. Lift uniqueness gives $\widetilde h(t+1/2)=\widetilde h(t)+k+1/2$, so at $t=1/2$ one obtains $\widetilde h(1)=y+2k+1$. [step 2.1, F1, L2, algebra]

4.1 The constant loop at $h([0])$ has the constant lift beginning at $y$, so [L3] and step 1.2 would force $\widetilde h(1)=y$. Step 3.1 instead gives $\widetilde h(1)=y+2k+1\ne y$ for every integer $k$, including negative $k$. This contradiction shows that the loop is not nullhomotopic and completes the odd-increment claim. [step 3.1, step 1.2, L3, algebra, discharge-contradiction] ∎
