---
id: "thm-norm-closed-convex-iff-weakly-closed"
kind: "theorem"
title: "Norm closed convex iff weakly closed"
deps: ["def-weak-topology-on-a-normed-space", "thm-relative-hahn-banach-geometric-separation", "def-hahn-banach-extension-principle-relative"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: "Bühler–Salamon, Functional Analysis (2017); exact harvest in batch coverage"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
    - title: "Teschl, Topics in Real and Functional Analysis (2017); exact harvest in batch coverage"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

Assume HB ([[def-hahn-banach-extension-principle-relative]]). In a real or complex normed space, a convex set is norm closed if and only if it is weakly closed. More generally, its norm and weak closures coincide. Convexity here uses real coefficients.

## Facts & Assumptions

[F1] The weak topology is the initial topology of bounded scalar-linear functionals and is contained in the norm topology ([[def-weak-topology-on-a-normed-space]]).

[F2] Under HB, a point outside a nonempty norm-closed convex set is uniformly strictly separated by the real part of a bounded scalar-linear functional ([[thm-relative-hahn-banach-geometric-separation]]).

## Proof

**Given:** HB and a convex subset $C$ of a real or complex normed space $X$.

1.1 Since weak-open sets are norm open, weak-closed sets are norm closed, and $\overline C^{\|\cdot\|}\subseteq\overline C^w$. If $C=\varnothing$, both closures are empty. [given, F1]

2.1 For nonempty $C$, put $K=\overline C^{\|\cdot\|}$. It is convex: for $u,v\in K$ and $0<t<1$, approximate $u,v$ by points $a,b\in C$ within any positive $\delta$; then $ta+(1-t)b\in C$ and its distance from $tu+(1-t)v$ is less than $\delta$. The cases $t=0,1$ are just $v,u\in K$. Thus $K$ is nonempty, closed and convex. For each $x\notin K$, separation gives $f\in X^*$ and a real level $a$ with $\operatorname{Re}f(z)<a<\operatorname{Re}f(x)$ for all $z\in K$. [step 1.1, F2, algebra]

3.1 The set $\{y:\operatorname{Re}f(y)>a\}$ is weakly open, contains $x$ and misses $C$. Therefore $x\notin\overline C^w$, giving $\overline C^w\subseteq K$ and equality of closures. If $C$ is norm closed this equality makes it weakly closed; the reverse implication was step 1.1. $\square$ [step 2.1, step 1.1, F1]
