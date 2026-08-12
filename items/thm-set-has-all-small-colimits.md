---
id: thm-set-has-all-small-colimits
kind: theorem
title: "Set has all small colimits, realized as a quotient of a set-indexed disjoint union"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-small-finite-and-large-limits-completeness-and-cocompleteness, prop-sets-and-functions-form-category-set, def-equivalence-relation, thm-universal-property-of-the-quotient, def-limit-and-colimit-of-a-diagram]
justified_by: []
aliases: []
landmark: true
proof_strategy: construction
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, Proposition 3.6.1"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: frontier-12
---

## Statement

Every small diagram $D:\mathcal J\to\mathbf{Set}$ has a colimit. It is the
quotient of the tagged union $S=\{(j,x):x\in D(j)\}$ by the least equivalence
relation containing

$$(j,x)\sim(k,D(u)(x))\qquad(u:j\to k).$$

## Facts & Assumptions

**Given:** A small diagram $D:\mathcal J\to\mathbf{Set}$.

[F1] Smallness makes the object and morphism collections sets, and
cocompleteness means existence of all small colimits
([[def-small-finite-and-large-limits-completeness-and-cocompleteness]]).

[F2] Sets and functions form $\mathbf{Set}$
([[prop-sets-and-functions-form-category-set]]).

[F3] An equivalence relation is reflexive, symmetric, and transitive
([[def-equivalence-relation]]).

[L1] A function on a set factors uniquely through its quotient precisely when
it is constant on equivalence classes
([[thm-universal-property-of-the-quotient]]).

[F4] A colimit has a unique mediating morphism to every cocone
([[def-limit-and-colimit-of-a-diagram]]).

## Proof

**Proof technique:** construction.

1.1 By [F1], $S$ is a set. Intersecting all equivalence relations on $S$ that contain the displayed pairs gives the least such relation $\sim$; let $Q=S/{\sim}$. [F1, F3]

2.1 Define $\rho_j:D(j)\to Q$ by $\rho_j(x)=[j,x]$. Each generating relation gives $\rho_kD(u)=\rho_j$, so $\rho$ is a cocone. [step 1.1]

2.2 For a cocone $\xi_j:D(j)\to X$, define $h:S\to X$ by $h(j,x)=\xi_j(x)$. The cocone equations make $h$ equal on every generating pair, hence on the equivalence relation they generate. [given, step 1.1]

2.3 If $\mathcal J$ is empty, then $S=Q=\varnothing$; the empty set has one function to every set, so the same construction is the initial-set colimit. [F2, step 1.1]

3.1 By [L1], there is a unique $\bar h:Q\to X$ with $\bar h[j,x]=\xi_j(x)$, equivalently $\bar h\rho_j=\xi_j$ for every $j$. Any map with these equations has the same composite with the quotient map and therefore equals $\bar h$. [L1, step 2.2]

4.1 By [F4], the cocone is colimiting. Since $D$ was arbitrary, $\mathbf{Set}$ is cocomplete. [F1, F4, step 2.1, step 3.1, step 2.3] ∎
