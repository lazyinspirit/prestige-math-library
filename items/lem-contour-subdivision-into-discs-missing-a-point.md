---
id: lem-contour-subdivision-into-discs-missing-a-point
kind: lemma
title: "A contour missing a point subdivides into arcs lying in discs that miss it"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-complex-contours-reversal-concatenation-and-closedness, thm-continuous-image-of-a-compact-space-is-compact, thm-compact-subset-is-closed-and-bounded, thm-heine-cantor-metric, thm-heine-borel-rn, def-metric-ball, def-metric-topology, def-partition-and-refinement, cor-archimedean-reciprocal, thm-infimum-property, def-infimum, rem-complex-plane-euclidean-dictionary]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "L. V. Ahlfors, Complex Analysis, 3rd ed., Ch. 4 §2.1, Exercise 1"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
pipeline_run: null
---

## Statement

Let $\gamma:[a,b]\to\mathbb C$ be a complex contour with trace $\gamma^\ast$ and
let $p\in\mathbb C$ with $p\notin\gamma^\ast$. Then

$$d:=\inf\{\,|w-p|\ :\ w\in\gamma^\ast\,\}$$

exists and satisfies $d>0$, and there is $\delta>0$ with the following property:
whenever $a<b$ and $a=t_0<t_1<\dots<t_r=b$ is a partition of $[a,b]$ of mesh
smaller than $\delta$,

$$\gamma([t_i,t_{i+1}])\subseteq D(\gamma(t_i),d)\quad\text{and}\quad p\notin D(\gamma(t_i),d)\qquad\text{for every }i<r,$$

where $D(u,d)$ is the open disc of centre $u$ and radius $d$. At least one such
partition exists. If instead $a=b$ the trace is the single point $\gamma(a)$,
which lies in $D(\gamma(a),d)$, and $p\notin D(\gamma(a),d)$; no partition is
involved in that case.

## Facts & Assumptions

**Given:** A complex contour $\gamma:[a,b]\to\mathbb C$ and a point $p\notin\gamma^\ast$; the plane carries the Euclidean metric of [[rem-complex-plane-euclidean-dictionary]].

[L1] A complex contour is a rectifiable path $\gamma:[a,b]\to\mathbb C$, in particular a continuous map on a compact interval ([[def-complex-contours-reversal-concatenation-and-closedness]]).

[L2] The continuous image of a compact subset is a compact subset ([[thm-continuous-image-of-a-compact-space-is-compact]]).

[L3] A compact subset of a metric space is closed and bounded ([[thm-compact-subset-is-closed-and-bounded]]).

[L4] A continuous map from a compact metric space to a metric space is uniformly continuous ([[thm-heine-cantor-metric]]).

[L5] A subset of $\mathbb R^n$ is compact exactly when it is closed and bounded, and closed boxes are compact ([[thm-heine-borel-rn]]).

[L6] $B(x,r)=\{y:d(x,y)<r\}$, and a set is open exactly when each of its points admits a ball around it inside the set, a set being closed when its complement is open ([[def-metric-ball]], [[def-metric-topology]]).

[L7] A partition of $[a,b]$ with $a<b$ consists of $a=t_0<\dots<t_r=b$ with $r\ge1$; its mesh is the largest of the lengths $t_{i+1}-t_i$, and the uniform partition into $N$ parts has mesh $(b-a)/N$ ([[def-partition-and-refinement]]).

[L8] For every real $\varepsilon>0$ there is a natural $n\ge1$ with $1/n<\varepsilon$ ([[cor-archimedean-reciprocal]]).

[L9] A nonempty subset of $\mathbb R$ bounded below has a greatest lower bound ([[thm-infimum-property]], [[def-infimum]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] and [L5] the parameter interval is compact and $\gamma$ is continuous, so $\gamma^\ast$ is a nonempty compact subset of $\mathbb C$ by [L2], and it is closed by [L3]. [given, L1, L2, L3, L5]

1.2 By [L1] and [L5] again, $\gamma$ is uniformly continuous on $[a,b]$ by [L4]. [given, L1, L4, L5]

2.1 The set $\{|w-p|:w\in\gamma^\ast\}$ is nonempty and bounded below by $0$, so $d$ exists by [L9]. Since $p\notin\gamma^\ast$ and $\gamma^\ast$ is closed by step 1.1, its complement is open, so [L6] gives $\varepsilon>0$ with $B(p,\varepsilon)\cap\gamma^\ast=\varnothing$, that is $|w-p|\ge\varepsilon$ for every $w\in\gamma^\ast$; hence $d\ge\varepsilon>0$. [step 1.1, L6, L9]

3.1 Apply the uniform continuity of step 1.2 with the positive number $d$ of step 2.1: there is $\delta>0$ such that $|\gamma(t)-\gamma(s)|<d$ whenever $s,t\in[a,b]$ satisfy $|t-s|<\delta$. [step 1.2, step 2.1, choose]

4.1 Let $a<b$ and let $a=t_0<\dots<t_r=b$ have mesh below $\delta$. For $i<r$ and $t\in[t_i,t_{i+1}]$ one has $|t-t_i|\le t_{i+1}-t_i<\delta$, so $|\gamma(t)-\gamma(t_i)|<d$ by step 3.1 and hence $\gamma(t)\in D(\gamma(t_i),d)$ by [L6]; and $|p-\gamma(t_i)|\ge d$ by step 2.1, since $\gamma(t_i)\in\gamma^\ast$, so $p\notin D(\gamma(t_i),d)$. [step 2.1, step 3.1, L6, L7]

5.1 Such a partition exists when $a<b$: by [L8] applied to $\delta/(b-a)$ there is a natural $N\ge1$ with $(b-a)/N<\delta$, and the uniform partition into $N$ parts has mesh $(b-a)/N<\delta$ by [L7]. If $a=b$ then $\gamma^\ast=\{\gamma(a)\}$, which lies in $D(\gamma(a),d)$ because $d>0$, while $|p-\gamma(a)|\ge d$ keeps $p$ out of that disc. [step 2.1, step 4.1, L6, L7, L8] ∎
