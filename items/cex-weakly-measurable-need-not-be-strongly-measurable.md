---
id: cex-weakly-measurable-need-not-be-strongly-measurable
kind: counterexample
title: "Weakly measurable need not be strongly measurable"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [def-axiom-of-choice, lem-ac-supplies-countable-and-dependent-choice-for-banach-integration, def-banach-space, def-separable-space, thm-countable-union-of-countable, def-lebesgue-measure-and-the-lebesgue-sigma-algebra, thm-lebesgue-measure-is-a-complete-measure, thm-lebesgue-measure-of-a-box-of-every-kind, prop-countable-subsets-of-rn-are-lebesgue-null, thm-pettis-measurability-criterion-for-strong-measurability]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  scraped: []
  references:
    - title: "Gerald Teschl, Topics in Real and Functional Analysis"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-fa/fa.pdf"
      locator: "Section 11.6, range-separability discussion and Theorem 11.34, printed pp. 333--336"
pipeline_run: phase-2-next-18
---

## Statement refuted

Assume the Axiom of Choice. Put $I=[0,1]$, give it the trace of the Lebesgue
sigma-algebra and restricted Lebesgue measure, and define

$$H=\ell^2(I)=\left\{y:I\to\mathbb K:\sup_{F\subseteq I\ \text{finite}}\sum_{t\in F}|y(t)|^2<\infty\right\},$$

where $\mathbb K$ is either $\mathbb R$ or $\mathbb C$ and the norm is the
square root of the displayed supremum. For $t\in I$, let $e_t$ be the
coordinate unit vector. Then the map

$$f:I\longrightarrow H,\qquad f(t)=e_t,$$

is weakly measurable but is not strongly measurable.

## Facts & Assumptions

[A1] The Axiom of Choice holds, hence so does Countable Choice ([[def-axiom-of-choice]], [[lem-ac-supplies-countable-and-dependent-choice-for-banach-integration]]).

[L1] Under Countable Choice, the Lebesgue sigma-algebra is complete, the unit interval has measure one, countable subsets of the line are null, and a countable union of countable sets is countable ([[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]], [[thm-lebesgue-measure-is-a-complete-measure]], [[thm-lebesgue-measure-of-a-box-of-every-kind]], [[prop-countable-subsets-of-rn-are-lebesgue-null]], [[thm-countable-union-of-countable]]).

[L2] On a complete measure space and under AC, strong measurability is equivalent to weak measurability plus an essentially separable range ([[thm-pettis-measurability-criterion-for-strong-measurability]], [[def-separable-space]]).

[L3] A complete normed space is a Banach space ([[def-banach-space]]).

## Counterexample

**Proof technique:** direct.

**Given:** AC and the displayed scalar field, interval, normed function space, and map.

1.1 Verify that the target is a Banach space. Finite-dimensional Cauchy--Schwarz gives the triangle inequality after taking the supremum over finite $F$; homogeneity and definiteness are immediate, so the displayed formula is a norm. If $(y_n)$ is Cauchy in this norm, then every coordinate sequence $(y_n(t))$ is Cauchy. Let $y(t)=\lim_ny_n(t)$. Given $\varepsilon>0$, choose $N$ such that $\lVert y_m-y_N\rVert<\varepsilon$ for $m\geq N$. For every finite $F$, passage to the scalar limit gives $\sum_{t\in F}|y(t)-y_N(t)|^2\leq\varepsilon^2$. Taking the supremum shows $y-y_N\in H$ with norm at most $\varepsilon$. Hence $y\in H$ and $y_n\to y$, so [L3] makes $H$ Banach. This also proves directly that $\lVert e_s-e_t\rVert=\sqrt2$ whenever $s\ne t$. [given, L3]

2.1 Every scalar evaluation of the range has countable support. Fix $\varphi\in H^*$ and put $a_t=\varphi(e_t)$. For a finite $F\subseteq I$, apply $\varphi$ to $\sum_{t\in F}\overline{a_t}e_t$ (with conjugation trivial over $\mathbb R$) to obtain [A1, L1, step 1.1]

$$\sum_{t\in F}|a_t|^2\leq\lVert\varphi\rVert\left(\sum_{t\in F}|a_t|^2\right)^{1/2},$$

and therefore $\sum_{t\in F}|a_t|^2\leq\lVert\varphi\rVert^2$. For each $m\geq1$, the set $C_m=\{t:|a_t|\geq1/m\}$ is finite, since arbitrarily large finite subsets would violate this bound. The support of $(a_t)$ is $\bigcup_mC_m$, which is countable by [L1].

3.1 Prove weak measurability. The trace measure space on $I$ is complete: any subset of a trace-null set is an ambient subset of a Lebesgue-null set and hence is Lebesgue measurable by [L1]. For the fixed $\varphi$, the scalar function $\varphi\circ f:t\mapsto a_t$ vanishes off the countable null support from step 2.1. The inverse image of an open scalar set is either a subset of that support or the complement of such a subset, according as the open set omits or contains zero. Completeness makes every such inverse image measurable. Since $\varphi$ was arbitrary, $f$ is weakly measurable. [L1, step 2.1]

4.1 Rule out an essentially separable range. Suppose there were a null $N\subseteq I$ and a separable closed subspace $Y\subseteq H$ containing every $e_t$ for $t\in I\setminus N$. The set $I\setminus N$ is uncountable: if it were countable, [L1] would make both it and $N$ null, contrary to $\mu(I)=1$. Let $D$ be an at most countable dense subset of $Y$. For each $t\in I\setminus N$, assign the first member of a fixed enumeration of $D$ lying within $\sqrt2/3$ of $e_t$. The assignment is injective, because one point of $D$ cannot lie within that radius of two vectors at distance $\sqrt2$. This would make $I\setminus N$ countable, a contradiction. Thus the range is not essentially separably valued. [A1, L1, L2, step 1.1, step 3.1, discharge-contradiction]

5.1 Conclude failure of strong measurability and audit boundaries. [A1, L2, step 1.1, step 3.1, step 4.1] The trace measure is complete, $H$ is Banach, and step 3.1 proves weak measurability, but step 4.1 disproves the other necessary condition in [L2]. Hence $f$ is not strongly measurable. Every coordinate vector has norm one; the zero functional has empty support and gives the constant zero scalar map; the real and complex cases are both covered by the finite coefficient calculation. The positive-measure interval, rather than a singleton or a null domain, is essential to the failed conclusion. AC is used through [L1], [L2], and the displayed simultaneous countability arguments only. [given, A1, L1, L2, step 1.1, step 3.1, step 4.1] ∎