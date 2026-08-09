---
id: lem-entourage-and-uniform-cover-dictionary
kind: lemma
title: "On a nonempty set, entourage uniformities and uniform-cover structures determine one another"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-uniform-space-by-entourages, def-uniform-cover-space, lem-symmetric-entourages-form-a-base]
aliases: []
landmark: true
proof_strategy: constructive
verification:
  precheck: pass
  verified:
    model: gpt-5.6-terra-codex-subscription
    verdict: certify
    date: 2026-08-09
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references: [{title: "J. Wodzicki, Uniform Structure", url: "https://math.berkeley.edu/~wodzicki/H104.F13/UniformStructure-alt.pdf"}, {title: "Encyclopedia of Mathematics, Uniform space", url: "https://encyclopediaofmath.org/wiki/Uniform_space"}]
pipeline_run: null
---

## Statement

In ZF, on a nonempty set $X$, an entourage uniformity determines a uniform-cover structure by the covers $\{E[x]:x\in X\}$, and a uniform-cover structure determines an entourage uniformity by the sets $\bigcup_{V\in\mathcal V}V\times V$. These constructions recover the same uniform structure.

## Facts & Assumptions

**Given:** A nonempty set $X$ carrying either an entourage uniformity or a uniform-cover structure.

[L1] Symmetric entourages form a base and have symmetric square roots ([[lem-symmetric-entourages-form-a-base]], [[def-uniform-space-by-entourages]]).

[L2] Uniform covers are upward closed under coarsening, have common refinements, and have star-refinements ([[def-uniform-cover-space]]).

## Proof

**Proof technique:** constructive.

1.1 From an entourage $E$, form $\mathcal C_E=\{E[x]:x\in X\}$. Choose a symmetric entourage $D$ with $D^{\circ3}\subseteq E$. If $D[y]\cap D[x]\ne\varnothing$ and $z\in D[y]$, symmetry and a point in the intersection give $(x,z)\in D^{\circ3}\subseteq E$. Hence the star of $D[x]$ in $\mathcal C_D$ lies in $E[x]$, so $\mathcal C_D$ star-refines $\mathcal C_E$. [L1, construct]

1.2 From a uniform cover $\mathcal V$, form $E_{\mathcal V}=\bigcup_{V\in\mathcal V}V\times V$. It contains the nonempty diagonal, so it is nonempty. A star-refinement $\mathcal W$ has $E_{\mathcal W}\circ E_{\mathcal W}\subseteq E_{\mathcal V}$, while common refinements and coarsenings give the remaining filter axioms. [L2, construct]

2.1 Declare a cover uniform when it is coarser than some $\mathcal C_E$. Intersections of entourages give common refinements, enlargement of an entourage gives coarsening, and step 1.1 gives star-refinements. Hence these covers satisfy the uniform-cover axioms. [step 1.1, L1, L2]

2.2 Start with an entourage uniformity. For symmetric $D$, $$ D\subseteq E_{\mathcal C_D}\subseteq D^{-1}\circ D=D^{\circ2}. $$ The first inclusion uses the diagonal, and the second follows because two points in one $D$-ball are $D^{-1}\circ D$-related. Taking a symmetric square root inside any prescribed entourage shows that the recovered entourage filter is exactly the original one. [L1, step 1.1, step 1.2]

2.3 Start instead with a uniform-cover structure. The $E_{\mathcal V}$-ball at $x$ is $$ E_{\mathcal V}[x]=\operatorname{St}(x,\mathcal V), $$ the union of the members of $\mathcal V$ containing $x$. Thus $\mathcal V$ refines $\mathcal C_{E_{\mathcal V}}$, so the latter is uniform by coarsening. Conversely, if $\mathcal W$ star-refines $\mathcal V$, then for any $x$ and any $W_0\in\mathcal W$ containing $x$, $\operatorname{St}(x,\mathcal W)\subseteq\operatorname{St}(W_0,\mathcal W)$, which lies in some member of $\mathcal V$. Therefore $\mathcal C_{E_{\mathcal W}}$ refines $\mathcal V$. The recovered cover structure is exactly the original one. [L2, step 1.2]

3.1 Steps 2.2 and 2.3 prove that the two constructions are mutually inverse at the level of generated structures. [step 2.2, step 2.3, discharge-construct] ∎
