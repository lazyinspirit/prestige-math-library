---
id: thm-qsmx-transfer-commutativity
kind: theorem
title: RTT gives commuting periodic transfer matrices
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 2
deps:
  - def-qsmx-rational-monodromy
  - lem-qsmx-transfer-regular-point
  - lem-qsmx-monodromy-rtt
dependency_roles:
  def-qsmx-rational-monodromy: mathematical-premise
  lem-qsmx-transfer-regular-point: mathematical-premise
  lem-qsmx-monodromy-rtt: mathematical-premise
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
      locator: "Section 3, PDF pp. 7–9, equations (36)–(47): local and monodromy fundamental commutation relations and transfer traces."
    - title: "Classical and Quantum Integrable Systems, Lecture 14: The quantum inverse scattering method, and its classical limit"
      url: "https://vu-ff.github.io/integrability/en/lectures/14/"
      locator: "Sections 14.3–14.5, Theorems 14.1–14.3, equations (14.4)–(14.9): RLL, RTT, and transfer-matrix commutativity with polynomial continuation."
verification:
  precheck: pass
---

## Statement

For every $u,v\in\mathbb C$, the transfer matrices $t(u),t(v)$ of the ordered
periodic monodromy on $V_N=(\mathbb C^2)^{\otimes N}$ satisfy
$$[t(u),t(v)]=0.$$
Near $u=0$, $M(u):=t(0)^{-1}t(u)$ has the analytic matrix logarithm with
$\log M(0)=0$. Its Taylor-coefficient matrices commute pairwise and commute
with every $t(v)$.

## Statement references

[Faddeev, §3, equations (36)–(48)](https://arxiv.org/pdf/hep-th/9605187)

[Classical and Quantum Integrable Systems, Lecture 14, §§14.3–14.5](https://vu-ff.github.io/integrability/en/lectures/14/)

## Facts & Assumptions

**Given:** $N\ge3$, $u,v\in\mathbb C$, and the operators of
[[def-qsmx-rational-monodromy]]. Write $[A,B]=AB-BA$.

[F1] [[def-qsmx-rational-monodromy]]: on $V=\mathbb C^2$,
$R_{aj}(z)=zI+iP_{aj}$, $T_a(z)=R_{aN}(z)\cdots R_{a1}(z)$, and
$t(z)=\operatorname{tr}_aT_a(z)$.

[F2] [[lem-qsmx-transfer-regular-point]]: $t(0)=i^NU$ is invertible.

[F3] [[lem-qsmx-monodromy-rtt]]:
$R_{ab}(u-v)T_a(u)T_b(v)=T_b(v)T_a(u)R_{ab}(u-v)$ on
$V_a\otimes V_b\otimes V_N$ for every $u,v\in\mathbb C$.

## Proof

1.1 Put $s=u-v$. Since $P_{ab}^2=I$ and the mixed terms cancel,
$R_{ab}(s)R_{ab}(-s)=-(s^2+1)I$; hence $R_{ab}(s)$ is invertible for
$s\ne i,-i$. By [F3],
$T_b(v)T_a(u)=R_{ab}(s)T_a(u)T_b(v)R_{ab}(s)^{-1}$. The factor $R_{ab}$
acts only on the finite auxiliary space $V_a\otimes V_b$, so the ordinary
finite trace over that space is cyclic even with operator-valued coefficients
on $V_N$. Also $\operatorname{tr}_{ab}(T_a(u)T_b(v))=t(u)t(v)$ and
$\operatorname{tr}_{ab}(T_b(v)T_a(u))=t(v)t(u)$, by expanding each auxiliary
matrix in matrix units. Taking $\operatorname{tr}_{ab}$ therefore proves
$[t(u),t(v)]=0$ whenever $u-v\ne\pm i$. [given, F1, F3, algebra]

2.1 Each entry of $t(u)$ is a polynomial in $u$, because it is the trace of a
finite product of matrices whose entries are linear polynomials. Thus every
entry of $[t(u),t(v)]$ is a polynomial in $(u,v)$. For each fixed $v$, it
vanishes for every $u$ except at most $v+i$ and $v-i$; a one-variable
polynomial with infinitely many zeros is zero. This holds for every $v$, so
$[t(u),t(v)]=0$ for all complex $u,v$, including the two singular
differences. [step 1.1, algebra]

3.1 By [F2], $t(0)$ is invertible; hence $M(u)=t(0)^{-1}t(u)$ is analytic near
$0$ and $M(0)=I$. Choose a submultiplicative matrix norm. Continuity of $M$
gives a neighborhood of $0$ where $\|M(u)-I\|<1$, and there define
$\log M(u)=\sum_{n\ge1}(-1)^{n+1}(M(u)-I)^n/n$, a convergent matrix power
series. Step 2.1 implies $t(u)$ commutes with $t(w)$ and every $t(v)$; since
$t(0)$ is invertible, $t(0)^{-1}$ commutes with them as well. Thus $M(u)$,
$M(w)$, and each $t(v)$ commute. Their logarithmic power series preserve
these commutations. Comparing the convergent two-variable Taylor coefficients
proves the coefficient matrices commute pairwise and with every $t(v)$.
[given, F2, step 2.1, algebra] ∎

## Diagram

The domain and codomain are $V_a\otimes V_b\otimes V_N$. The two arrows label
the endomorphisms in the RTT supplier [[lem-qsmx-monodromy-rtt]]; composition
is right-to-left. The diagram records that operator identity and adds no
premise to the proof.

```tikzcd
\begin{tikzcd}[column sep=huge]
V_a\otimes V_b\otimes V_N
  \arrow[r, bend left=35, "R_{ab}(u-v)T_a(u)T_b(v)"]
  \arrow[r, bend right=35, "T_b(v)T_a(u)R_{ab}(u-v)"']
& V_a\otimes V_b\otimes V_N
\end{tikzcd}
```
