---
id: lem-compositions-with-a-compact-operator-are-compact
kind: lemma
title: Compositions with a compact operator are compact
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-compact-linear-operator, def-bounded-linear-operator, lem-composition-operator-norm-inequality, thm-compactness-under-continuous-maps, thm-bounded-linear-operator-equivalences, lem-vector-operations-are-continuous-in-a-normed-space, thm-compact-subset-is-closed-and-bounded, def-metric-bounded-diameter]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Gerald Teschl, Topics in Real and Functional Analysis, version November 17, 2017 — §3.1 pp.69–70, Theorem 3.1"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis — §4.2 p.185, Theorem 4.28(i)"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
---

## Statement

Let $W$, $X$, $Y$ and $Z$ be normed spaces over the same scalar field. If
$T:X\to Y$ is compact ([[def-compact-linear-operator]]) and $A:W\to X$ and
$B:Y\to Z$ are bounded linear operators ([[def-bounded-linear-operator]]), then
the composites $TA:W\to Y$ and $BT:X\to Z$ are compact.

## Facts & Assumptions

[A1] A bounded linear operator is continuous and satisfies $\|Sw\|\le\|S\|\,\|w\|$ for all $w$ ([[thm-bounded-linear-operator-equivalences]], [[lem-composition-operator-norm-inequality]]); $T$ is compact exactly when $\overline{T(E)}$ is compact for every bounded $E\subseteq X$, in particular for $E=\overline B_X=\{x:\|x\|\le1\}$ ([[def-compact-linear-operator]]).

[A2] A subset $E$ of a metric space is bounded when $E=\varnothing$ or $E\subseteq B(x_0,r)$ for some point $x_0$ and real $r>0$; a subset of a bounded set is bounded ([[def-metric-bounded-diameter]]).

[A3] A continuous image of a compact subset is compact ([[thm-compactness-under-continuous-maps]]); scalar multiplication by a fixed scalar is continuous ([[lem-vector-operations-are-continuous-in-a-normed-space]]); a compact subset of a metric space is closed, and a closed subset of a compact set is compact ([[thm-compact-subset-is-closed-and-bounded]]).

## Proof

**Proof technique:** direct.

**Given:** Normed spaces $W,X,Y,Z$ over one scalar field, a compact $T:X\to Y$, and bounded linear $A:W\to X$, $B:Y\to Z$.

1.1 If $E\subseteq W$ is bounded and nonempty, say $E\subseteq B(w_0,r)$, then $\|Aw\|\le\|A\|(\|w_0\|+r)$ for every $w\in E$ by [A1], so $A(E)$ is bounded; and $A(\varnothing)=\varnothing$ is bounded, so $A$ carries bounded sets to bounded sets. [A1, A2, algebra]

1.2 If $E$ is a bounded subset of $X$ with $E\ne\varnothing$ and $E\subseteq B(x_0,R_0)$, then $\|x\|\le\|x_0\|+R_0=:R$ for every $x\in E$ by [A2] and the triangle inequality, so $E\subseteq R\,\overline B_X$; the same holds in any normed space. [A2, algebra]

1.3 The set $B(\overline{T(\overline B_X)})$ is compact: $\overline{T(\overline B_X)}$ is compact by [A1], and $B$ is continuous by [A1], so the image under $B$ is compact by [A3]. [A1, A3]

2.1 For every bounded $E\subseteq W$ the image $A(E)$ is bounded by [step 1.1], so $\overline{T(A(E))}$ is compact by [A1]; hence $TA$ is compact. [step 1.1, A1]

2.2 For every bounded $E\subseteq X$, [step 1.2] gives $E\subseteq R\,\overline B_X$ for some real $R\ge0$, so $T(E)\subseteq R\,\overline{T(\overline B_X)}$ and hence $B(T(E))\subseteq R\,B(\overline{T(\overline B_X)})$, which is compact by [step 1.3] and [A3] and therefore closed; thus $\overline{B(T(E))}\subseteq R\,B(\overline{T(\overline B_X)})$ is a closed subset of a compact set, hence compact, and $BT$ is compact. [step 1.2, step 1.3, A1, A3]

3.1 Both composites $TA$ and $BT$ are therefore compact. [step 2.1, step 2.2] ∎
