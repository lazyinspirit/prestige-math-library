---
id: thm-completely-metrizable-subspaces-of-metric-spaces-are-g-delta
kind: theorem
title: "Under Dependent Choice, every completely metrizable subspace of a metric space is $G_\\delta$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-complete-remetrisation, def-g-delta-and-f-sigma-in-a-topological-space, def-dependent-choice, thm-metric-hausdorff-separation, cor-archimedean-reciprocal]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-6-astra
    verdict: certify
    date: 2026-09-09
    scope: owner-authorized-local-ambient-closure-repair
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "David Marker, Descriptive Set Theory, §§1–2"
      url: "https://www.math.uic.edu/~marker/math512/dst.pdf"
    - title: "Michael Kunzinger, General Topology, §§11.3–11.4"
      url: "https://www.mat.univie.ac.at/~mike/teaching/ss16/general_topology.pdf"
    - title: "MFF General Topology course summary, §4.3"
      url: "https://www.karlin.mff.cuni.cz/~cuth/doc/MFF/OT/ot_ENG.pdf"
    - title: "Jesse Peterson, Real Analysis, §§3.6–3.7"
      url: "https://math.vanderbilt.edu/peters10/teaching/fall2016/RealAnalysis.pdf"
pipeline_run: null
---

## Statement

Assume Dependent Choice. If $Y$ is a completely metrizable subspace of a metric space $X$, then $Y$ is a $G_\delta$ subset of $X$.

## Facts & Assumptions

**Given:** The objects, hypotheses, and choice principles stated above.

[F1] Complete metrizability means that $Y$ has a complete metric $\rho$
inducing its given subspace topology. ([[lem-complete-remetrisation]])

[F2] A $G_\delta$ set is a countable intersection of open sets.
([[def-g-delta-and-f-sigma-in-a-topological-space]])

[F3] Dependent Choice gives a sequence of successive extensions whenever
every finite admissible history has an extension. Apply its entire-relation
form to the set of those histories, beginning with the empty history.
([[def-dependent-choice]])

[F4] A metric space is Hausdorff. ([[thm-metric-hausdorff-separation]])

[F5] For each real $r>0$ there is an integer $n\ge1$ with $1/n<r$.
([[cor-archimedean-reciprocal]])

## Proof

**Proof technique:** direct.

1.1 The empty subspace is the constant countable intersection of the ambient open set $\varnothing$. [given, F4, F1, F2]

2.1 Let $\rho$ be a compatible complete metric on the nonempty subspace $Y$ and let $d$ be the ambient metric. For $n\ge1$ call an ambient open $V$ **$n$-small** when $V\cap Y\ne\varnothing$, $\operatorname{diam}_d(V)<1/n$, **and** $\operatorname{diam}_\rho(V\cap Y)<1/n$. Both conditions are imposed, and neither may be dropped: $\rho$-smallness alone controls distances measured in $\rho$ but says nothing about ambient distances, so it cannot force a point of $Y$ to be near a prescribed ambient point, while ambient smallness alone gives no $\rho$-control and so cannot invoke completeness of $\rho$. Every $y\in Y$ lies in some $n$-small $V$, because $\rho$ induces the subspace topology, so a $\rho$-ball of radius below $1/2n$ about $y$ contains $B_d(y,r)\cap Y$ for some $r>0$, and $r$ may be shrunk below $1/2n$. Let $G_n$ be the union of all $n$-small ambient open sets, an ambient open set containing $Y$. [step 1.1, F1, F4]

3.1 Every $x\in\bigcap_{n\ge1}G_n$ lies in $\overline Y$. [step 2.1, F5]
Indeed, given $r>0$, choose $n\ge1$ with $1/n<r$. There is an $n$-small
open $V$ containing $x$, and some $y\in V\cap Y$. Then
$d(x,y)<1/n<r$. Thus every ambient ball about $x$ meets $Y$. This uses
only finitely many choices for each fixed $r$, not a selected sequence.

3.2 Let $x\in\overline Y\cap\bigcap_{n\ge1}G_n$. For each $n$ pick an $n$-small $V_n$ with $x\in V_n$ and put $W_n:=V_1\cap\dots\cap V_n$, an ambient open neighbourhood of $x$ with $W_n\subseteq V_n$, so $\operatorname{diam}_d(W_n)<1/n$ and $\operatorname{diam}_\rho(W_n\cap Y)<1/n$; the $W_n$ decrease. Then pick $y_n\in W_n\cap Y$, which is nonempty because $x\in\overline Y$ and $W_n$ is an ambient neighbourhood of $x$. The selection over $n$ is a recursion whose $n$th admissible set depends on the previous choices, so it is licensed by the Dependent Choice of [F3]. Since $x,y_n\in W_n$ and $\operatorname{diam}_d(W_n)<1/n$, the points $y_n$ converge to $x$ in $d$. For $m,n\ge N$ both $y_m$ and $y_n$ lie in $W_N\cap Y$, so $\rho(y_m,y_n)<1/N$ and the sequence is $\rho$-Cauchy; completeness of $\rho$ gives it a $\rho$-limit in $Y$. [step 2.1, F1, F4, F3]

4.1 Let $y\in Y$ be the $\rho$-limit from step 3.2. [step 3.2, F4, F1]
The compatible topologies make $y_n$ converge to $y$ in the subspace
$d$-metric, hence in $X$. It also converges to $x$. If $x\ne y$, disjoint
open neighbourhoods from [F4] would both contain every sufficiently late
$y_n$, a contradiction. Hence $x=y\in Y$.

5.1 Therefore $Y=\bigcap_{n\ge1}G_n$. [step 2.1, step 3.1, step 4.1, F2]
Reindexing by $n+1$ gives a sequence indexed from zero as in [F2], so $Y$
is $G_\delta$ in $X$. The only countable selection is the stated DC use
in step 3.2; the empty case was handled in step 1.1. ∎
