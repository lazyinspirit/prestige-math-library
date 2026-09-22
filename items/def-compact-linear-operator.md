---
id: def-compact-linear-operator
kind: definition
title: Compact linear operator
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-bounded-linear-operator, def-metric-compactness, def-metric-bounded-diameter, def-metric-ball, def-norm-and-normed-space, rem-real-and-complex-normed-space-convention, def-linear-map, thm-compactness-under-continuous-maps, thm-compact-subset-is-closed-and-bounded, lem-vector-operations-are-continuous-in-a-normed-space]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-22
sources:
  references:
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis — §4.2 p.183, Definition 4.20"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
---

## Definition

Let $X$ and $Y$ be normed spaces over the same scalar field $\mathbb K$, read in
the real case from [[def-norm-and-normed-space]] and in the complex case from
[[rem-real-and-complex-normed-space-convention]]. A linear map $T:X\to Y$
([[def-linear-map]]) is a **compact operator** when the image of every bounded
subset of $X$ ([[def-metric-bounded-diameter]]) has compact closure in $Y$
([[def-metric-compactness]]); explicitly, for every bounded $A\subseteq X$ the
closure $\overline{T(A)}$ in $Y$ is a compact subset of $Y$. The set of compact
operators $X\to Y$ is written $\mathcal K(X,Y)$.

**The closed unit ball suffices.** Put
$\overline B_X:=\{x\in X:\|x\|\le 1\}$
([[def-metric-ball]]). Then $T$ is compact if and only if
$\overline{T(\overline B_X)}$ is a compact subset of $Y$.

Indeed, if $T$ is compact then $\overline B_X$ is bounded, because
$\overline B_X\subseteq B(0,2)$ while $B(0,2)$ is bounded and a subset of a
bounded set is bounded, so $T(\overline B_X)$ has compact closure. Conversely
assume $\overline{T(\overline B_X)}$ compact and let $A\subseteq X$ be bounded.
If $A=\varnothing$ then $T(A)=\varnothing$, whose closure is empty and hence
compact. Otherwise $A\subseteq B(x_0,r)$ for some $x_0\in X$ and real $r>0$, so
every $x\in A$ satisfies $\|x\|\le\|x_0\|+r=:R$; if $R>0$ then
$A\subseteq R\,\overline B_X$ and if $R=0$ then $A\subseteq\{0\}$, so in either
case $T(A)\subseteq R\,\overline{T(\overline B_X)}$. Scalar multiplication by
$R$ is continuous ([[lem-vector-operations-are-continuous-in-a-normed-space]]),
so $R\,\overline{T(\overline B_X)}$ is a compact subset of $Y$
([[thm-compactness-under-continuous-maps]]), hence closed
([[thm-compact-subset-is-closed-and-bounded]]); therefore
$\overline{T(A)}\subseteq R\,\overline{T(\overline B_X)}$ is a closed subset of a
compact set, hence compact, and $T$ is compact.

**A compact operator is bounded.** If $T$ is compact then the compact set
$\overline{T(\overline B_X)}$ is bounded
([[thm-compact-subset-is-closed-and-bounded]]), so there is a real $C\ge0$ with
$\|Tx\|\le C$ for every $x\in\overline B_X$ and hence $\|Tx\|\le C\|x\|$ for
every $x\in X$; thus $T$ is a bounded linear operator
([[def-bounded-linear-operator]]). This is a consequence of compactness, not a
hypothesis of the definition.
