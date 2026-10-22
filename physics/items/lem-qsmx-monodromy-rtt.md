---
id: lem-qsmx-monodromy-rtt
kind: lemma
title: The rational Yang–Baxter equation lifts to RTT
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 1
deps:
  - def-qsmx-rational-monodromy
  - lem-hh-rational-spectral-r-matrix-satisfies-yang-baxter
dependency_roles:
  def-qsmx-rational-monodromy: mathematical-premise
  lem-hh-rational-spectral-r-matrix-satisfies-yang-baxter: mathematical-premise
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "L. D. Faddeev, How Algebraic Bethe Ansatz Works for Integrable Model"
      url: "https://arxiv.org/pdf/hep-th/9605187"
      locator: "Section 3, PDF pp. 7–8, equations (36)–(44): local FCR and its induction along the chain."
    - title: "Classical and Quantum Integrable Systems, Lecture 14: The quantum inverse scattering method, and its classical limit"
      url: "https://vu-ff.github.io/integrability/en/lectures/14/"
      locator: "Section 14.4, Theorem 14.2 and its induction proof: local RLL implies the monodromy RTT identity."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
---

## Statement

For the ordered periodic monodromies
$$T_a(u):=R_{aN}(u)\cdots R_{a1}(u),\qquad T_b(v):=R_{bN}(v)\cdots R_{b1}(v),$$
the finite-dimensional operator identity
$$R_{ab}(u-v)T_a(u)T_b(v)=T_b(v)T_a(u)R_{ab}(u-v)$$
holds on $V_a\otimes V_b\otimes V_N$ for every $u,v\in\mathbb C$.

## Statement references

[[def-qsmx-rational-monodromy]]

[[lem-hh-rational-spectral-r-matrix-satisfies-yang-baxter]]

[Faddeev, §3, equations (36)–(44)](https://arxiv.org/pdf/hep-th/9605187)

[Classical and Quantum Integrable Systems, Lecture 14, §14.4](https://vu-ff.github.io/integrability/en/lectures/14/)

## Facts & Assumptions

**Given:** $N\ge3$, $u,v\in\mathbb C$, the spaces and ordered monodromies
defined above, and the parameterized Yang–Baxter identity on three copies of
$V=\mathbb C^2$.

[F1] [[def-qsmx-rational-monodromy]]: each $R_{aj}(u)$ acts only on the
auxiliary factor and site $j$, and $T_a(u)=R_{aN}(u)\cdots R_{a1}(u)$.

[F2] [[lem-hh-rational-spectral-r-matrix-satisfies-yang-baxter]]: with
$x,y,z\in\mathbb C$, $R_{12}(x-y)R_{13}(x-z)R_{23}(y-z)$ equals
$R_{23}(y-z)R_{13}(x-z)R_{12}(x-y)$ on $V^{\otimes3}$.

## Proof

1.1 In [F2] take $x=u$, $y=v$, $z=0$ and label the three factors
$1=a$, $2=b$, $3=n$. For each site $n$ this gives
$$R_{ab}(u-v)R_{an}(u)R_{bn}(v) =R_{bn}(v)R_{an}(u)R_{ab}(u-v).$$
This identity acts on $V_a\otimes V_b\otimes V_n$ and as the identity on
every other site. [given, F2, algebra]

2.1 Write $R_{ab}=R_{ab}(u-v)$, $R_{an}=R_{an}(u)$ and
$R_{bn}=R_{bn}(v)$. For $1\le n\le N$ set
$T_a^{(n)}(u):=R_{an}(u)\cdots R_{a1}(u)$ and
$T_b^{(n)}(v):=R_{bn}(v)\cdots R_{b1}(v)$. The case $n=1$ of the desired
identity is step 1.1. Suppose it holds for $n-1$. Operators
$T_a^{(n-1)}$ commute with $R_{bn}(v)$, and $R_{an}(u)$ commutes with
$T_b^{(n-1)}$, because their auxiliary and physical tensor factors are
disjoint. Therefore
$$\begin{aligned} R_{ab}T_a^{(n)}T_b^{(n)} &=R_{ab}R_{an}R_{bn}T_a^{(n-1)}T_b^{(n-1)}\\ &=R_{bn}R_{an}R_{ab}T_a^{(n-1)}T_b^{(n-1)}\\ &=R_{bn}R_{an}T_b^{(n-1)}T_a^{(n-1)}R_{ab}\\ &=T_b^{(n)}T_a^{(n)}R_{ab}, \end{aligned}$$
where the second equality is step 1.1 at site $n$, the third is the induction
hypothesis, and the final equality uses the other disjoint-site commutation.
The argument holds for each $n$ up to $N$, proving the claimed RTT identity.
[given, F1, step 1.1, algebra]

3.1 Taking $n=N$ in step 2.1 gives the stated monodromy relation with
$T_a^{(N)}=T_a$ and $T_b^{(N)}=T_b$. No invertibility assumption on
$R_{ab}(u-v)$ is used, so the identity also holds at its singular spectral
differences. [step 2.1, algebra] ∎

