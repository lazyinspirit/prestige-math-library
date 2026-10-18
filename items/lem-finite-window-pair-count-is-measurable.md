---
id: lem-finite-window-pair-count-is-measurable
kind: lemma
title: "Finite-window pair counts are measurable"
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 2
deps:
  - def-finite-window-spatial-observation
  - lem-borel-product-of-second-countable-spaces
  - thm-rational-points-and-boxes-in-rn
  - thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique
  - thm-dynkin-pi-lambda
  - thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable
  - prop-closure-properties-of-measurable-functions-used-by-the-integral
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
axiom_use: "Countable Choice is inherited through the finite-window Lebesgue measure; the pair-count measurability proof itself uses no choice."
sources:
  references:
    - title: "Adrian Baddeley, Spatial Point Processes and their Applications, complete lecture notes"
      url: "https://leman.stat.vt.edu/VTCourses/BaddeleyPointProcesses.pdf"
      locator: "Lecture 4, §4.6, PDF pp. 67–69: Strauss pair interactions and finite Gibbs weights."
    - title: "Günter Last and Mathew Penrose, Lectures on the Poisson Process, author-hosted 2017 version"
      url: "https://stoch.math.kit.edu/img/Last/lastpenrose2017.pdf"
      locator: "Chapter 2, counting-measure evaluation sigma-algebra, PDF pp. 21–30; product-measure and generating-class methods are completed locally."
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
---

## Statement

Let $W$ and $\mathcal C(W)$ be as in
[[def-finite-window-spatial-observation]]. For $R\ge0$, put
$$D_R:=\{(x,y)\in W\times W:\|x-y\|_2\le R\}.$$
For a finite configuration $\eta$, define
$$S_R(\eta):=\frac12\big((\eta\otimes\eta)(D_R)-\eta(W)\big).$$
Here $\eta\otimes\eta$ is the product measure and the subtraction removes
the $n$ ordered self-pairs from a representation with $n=\eta(W)$ occurrences.
Thus $S_R$ counts unordered pairs of distinct occurrences at distance at most
$R$, including co-located distinct occurrences when multiplicity is present.
Then $S_R:\mathcal C(W)\to[0,\infty)$ is measurable.

## Facts & Assumptions

**Given:** $W$, its finite-configuration space, and $R\ge0$.

[F1] The evaluation maps generate the sigma-algebra on $\mathcal C(W)$ and
each $\eta$ is a finite measure. ([[def-finite-window-spatial-observation]])

[F2] For a finite measure $\eta$, the product measure $\eta\otimes\eta$
exists and satisfies $(\eta\otimes\eta)(B\times C)=\eta(B)\eta(C)$ on
measurable rectangles. ([[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]])

[F3] A lambda-system containing a pi-system contains its generated
sigma-algebra. ([[thm-dynkin-pi-lambda]])

[F4] Sums, real scalar multiples, and hence differences of finite-valued
measurable functions are measurable.
([[prop-closure-properties-of-measurable-functions-used-by-the-integral]])

[F5] Countable suprema and pointwise limits of measurable functions are
measurable. ([[thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable]])

[F6] Rational open boxes form a countable basis for $\mathbb R^d$; their
intersections with $W$ form a countable basis for its subspace topology.
([[thm-rational-points-and-boxes-in-rn]])

[F7] For second-countable spaces, the Borel sigma-algebra of the product
equals the product of the Borel sigma-algebras.
([[lem-borel-product-of-second-countable-spaces]])

## Proof

**Given:** The finite configuration $\eta$ and the radius $R$.

1.1 For a measurable rectangle $B\times C$, the map $\eta\mapsto(\eta\otimes\eta)(B\times C)=\eta(B)\eta(C)$ is measurable by [F1]. Let $$\mathcal D:=\{A\in\mathcal B_W^{\otimes2}:\eta\mapsto(\eta\otimes\eta)(A)\text{ is measurable}\}.$$ The whole space belongs to $\mathcal D$ because its value is $\eta(W)^2$: for each integer $k\ge0$, the level set $\{\eta(W)^2\ge k\}$ is a countable union of evaluation level sets $\{\eta(W)=n\}$. The total product mass is finite. For $A\in\mathcal D$, finite additivity gives $(\eta\otimes\eta)((W\times W)\setminus A)=\eta(W)^2-(\eta\otimes\eta)(A)$; this finite-valued measurable difference is measurable by [F4], so complements belong. Countable disjoint unions belong by countable additivity, since the partial sums are measurable by [F4] and their pointwise limit is measurable by [F5]. Thus $\mathcal D$ is a lambda-system containing the rectangles. [given, F1, F2, F4, F5, construct]

2.1 Rectangles form a pi-system and generate the product Borel sigma-algebra by [F6] and [F7]. Dynkin's theorem [F3] applied to step 1.1 therefore gives that $\eta\mapsto(\eta\otimes\eta)(A)$ is measurable for every Borel $A\subseteq W\times W$. The set $D_R$ is closed, so its product-measure evaluation is measurable. [step 1.1, F3, F6, F7]

3.1 If $\eta=\sum_{i=1}^n\delta_{x_i}$, then $(\eta\otimes\eta)(D_R)=\sum_{i,j=1}^n1_{\{\|x_i-x_j\|_2\le R\}}$. The $n$ terms with $i=j$ all occur since $R\ge0$; every remaining unordered pair of distinct occurrences contributes exactly two terms. Hence the displayed formula for $S_R$ is a finite nonnegative integer and is measurable by step 2.1 and [F1]. [given, step 2.1, F1, algebra] ∎