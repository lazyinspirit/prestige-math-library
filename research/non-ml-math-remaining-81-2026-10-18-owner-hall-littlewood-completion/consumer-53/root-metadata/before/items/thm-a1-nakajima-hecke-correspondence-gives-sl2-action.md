---
id: thm-a1-nakajima-hecke-correspondence-gives-sl2-action
kind: theorem
title: "The A1 Nakajima Hecke correspondence gives the fundamental sl2 action"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps:
  - def-a1-nakajima-framed-quiver-data
  - lem-a1-nakajima-varieties-and-hecke-correspondence-are-points
  - def-singular-chain-complex-and-singular-homology
  - thm-singular-homology-satisfies-dimension-and-arbitrary-additivity
proof_strategy: direct
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Hiraku Nakajima, Introduction to quiver varieties—for ring and representation theorists, §§4.2, 4.4–4.5"
      url: "https://arxiv.org/pdf/1611.10000"
---

## Statement

Use [[def-a1-nakajima-framed-quiver-data]] and
[[lem-a1-nakajima-varieties-and-hecke-correspondence-are-points]]. Let
$e_v$ be the fundamental class of $\mathcal L(v,1)$ in
$H_0(\mathcal L(v,1);\mathbb C)$, for $v=0,1$. Define $F$ by the
$P_{0,1}$ correspondence only from the $v=0$ summand to the $v=1$ summand,
and extend it by zero on $v=1$. Define $E$ by the reverse correspondence,
with Nakajima's sign $(-1)^{(d(0,1)-d(1,1))/2}$, only from $v=1$ to $v=0$,
and extend it by zero on $v=0$, where $d(v,1)=\dim_{\mathbb C}\mathfrak M(v,1)$.
The preceding lemma says both dimensions are zero, so this coefficient is
$1$. Let $H$ act on the $v$-summand by $1-2v$. Then
$$E e_0=0,\quad E e_1=e_0,\quad F e_0=e_1,\quad F e_1=0,\quad H e_0=e_0,\quad H e_1=-e_1.$$
These operators define the standard two-dimensional representation of
$\mathfrak{sl}_2(\mathbb C)$, the trace-zero $2\times2$ matrices with
commutator bracket.

## Facts & Assumptions

**Given:** The framed $A_1$ data, its correspondence, and the point classes
specified in the Statement.

[F1] [[def-a1-nakajima-framed-quiver-data]]: when $P_{0,1}$ and both spaces are points and the projections are identities, its fundamental-class correspondence map sends the source point class to the target point class; the reverse map uses the same rule.

[F2] [[lem-a1-nakajima-varieties-and-hecke-correspondence-are-points]]:
$\mathcal L(0,1)$, $\mathcal L(1,1)$ and $P_{0,1}$ are points, and each
projection of $P_{0,1}$ is the identity map.

[F4] [[thm-singular-homology-satisfies-dimension-and-arbitrary-additivity]]:
$H_0(\{*\};\mathbb C)\cong\mathbb C$.

## Proof

1.1 By [F2] and [F4], each summand is one-dimensional with its point class as basis, and each point has complex dimension zero. The projections of $P_{0,1}$ are identities; hence [F1]'s point correspondence rule sends $e_0$ to $e_1$ and its reverse sends $e_1$ to $e_0$. The reverse sign is $(-1)^{(0-0)/2}=1$; extending the maps by zero on the other summands gives the stated actions. [given, F1, F2, F4, algebra]

2.1 On $e_0$, $EF e_0=e_0$ and $FE e_0=0$; on $e_1$, $EF e_1=0$ and $FE e_1=e_1$. Thus $[E,F]$ has eigenvalues $1,-1$ on $e_0,e_1$, respectively, which are the specified $H$-weights, so $[E,F]=H$. [F1, step 1.1, algebra]

2.2 On $e_0$, $[H,E]e_0=H(0)-E(e_0)=0=2Ee_0$; on $e_1$, $[H,E]e_1=H(e_0)-E(-e_1)=2e_0=2Ee_1$. Hence $[H,E]=2E$. [F1, step 1.1, algebra]

3.1 On $e_1$, $[H,F]e_1=H(0)-F(-e_1)=0=-2Fe_1$; on $e_0$, $[H,F]e_0=H(e_1)-F(e_0)=-2e_1=-2Fe_0$. Hence $[H,F]=-2F$. In the ordered basis $(e_0,e_1)$ these actions are $E=\left(\begin{smallmatrix}0&1\\0&0\end{smallmatrix}\right)$, $F=\left(\begin{smallmatrix}0&0\\1&0\end{smallmatrix}\right)$, and $H=\left(\begin{smallmatrix}1&0\\0&-1\end{smallmatrix}\right)$; their brackets just verified are the defining brackets of the trace-zero matrix Lie algebra, so the action is its standard representation. [F1, step 1.1, algebra] ∎

