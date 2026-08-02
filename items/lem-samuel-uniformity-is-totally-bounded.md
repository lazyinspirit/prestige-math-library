---
id: lem-samuel-uniformity-is-totally-bounded
kind: lemma
title: "The Samuel uniformity is totally bounded"
status: published
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-samuel-uniformity, lem-samuel-function-pseudometrics-and-coarsening, def-totally-bounded-uniform-space, lem-compact-uniform-spaces-are-totally-bounded, thm-heine-borel-r, thm-compact-hausdorff-space-has-a-unique-compatible-uniformity, lem-metric-uniformity-dictionary, def-finite-cardinality, lem-finite-choice, thm-product-rule, thm-subset-of-a-finite-set]
justified_by: []
aliases: []
landmark: true
proof_strategy: constructive
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "Encyclopedia of Mathematics, Uniform space"
      url: "https://encyclopediaofmath.org/wiki/Uniform_space"
    - title: "J. Wodzicki, Uniform Structure"
      url: "https://math.berkeley.edu/~wodzicki/H104.F13/UniformStructure-alt.pdf"
pipeline_run: null
---

## Statement

For every uniform space $(X,\mathcal U)$, its Samuel uniformity $\mathcal U_S$ is totally bounded.

## Facts & Assumptions

**Given:** A basic Samuel entourage $E(F,\varepsilon)$, where $F$ is finite and $\varepsilon>0$.

[L1] A uniform space is totally bounded when every entourage has a finite set of centres whose entourage balls cover it ([[def-totally-bounded-uniform-space]]).

[L2] The usual metric uniformity on $[0,1]$ induces its compact metric topology; by uniqueness of the compatible uniformity it is totally bounded ([[lem-metric-uniformity-dictionary]], [[thm-heine-borel-r]], [[thm-compact-hausdorff-space-has-a-unique-compatible-uniformity]], [[lem-compact-uniform-spaces-are-totally-bounded]]).

[L3] A finite set is equinumerous with a natural number; finite choice applies to a family explicitly indexed by such a natural number; finite products and subsets of finite sets are finite ([[def-finite-cardinality]], [[lem-finite-choice]], [[thm-product-rule]], [[thm-subset-of-a-finite-set]]).

[L4] The basic sets $E(F,\varepsilon)$ form a base for the Samuel uniformity ([[def-samuel-uniformity]]).

## Proof

**Proof technique:** constructive.

1.1 For each $f\in F$, [L2] supplies a finite set $A_f\subseteq[0,1]$ such that every value of $f$ is within $\varepsilon/3$ of some member of $A_f$. [L2, construct]

1.2 The product $A:=\prod_{f\in F}A_f$ is finite, and for $a\in A$ let $C_a$ be the set of $x\in X$ with $|f(x)-a_f|<\varepsilon/3$ for every $f\in F$. [L3]

2.1 The index set $A':=\{a\in A:C_a\ne\varnothing\}$ of nonempty cells is a finite subset of $A$. Choose a natural $n$ and a bijection $e:n\to A'$, form the explicitly $n$-indexed family $i\mapsto C_{e(i)}$, and use [L3] to choose $c_{e(i)}\in C_{e(i)}$; let $C$ be the set of chosen points. [L3, step 1.2]

3.1 If $x\in X$, choose $a\in A$ with $x\in C_a$ using step 1.1; then $a\in A'$ and $|f(x)-f(c_a)|<2\varepsilon/3<\varepsilon$ for every $f\in F$, so $x\in E(F,\varepsilon)[c_a]$. [step 1.1, step 1.2, step 2.1]

4.1 Thus $C$ is a finite net for each basic Samuel entourage. Every Samuel entourage contains one of these basic entourages, so the same finite centres cover it; when $F=\varnothing$, use the empty centre set if $X=\varnothing$ and any singleton centre otherwise. Hence $\mathcal U_S$ is totally bounded. [L1, L4, step 3.1, discharge-construct] ∎
