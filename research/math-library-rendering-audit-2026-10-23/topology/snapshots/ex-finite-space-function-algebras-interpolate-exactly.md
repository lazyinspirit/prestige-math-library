---
id: ex-finite-space-function-algebras-interpolate-exactly
kind: example
title: "On a finite compact Hausdorff space a unital separating algebra contains every scalar-valued function"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-unital-separating-real-function-algebra-general, def-self-adjoint-complex-function-algebra, def-compact-space, def-hausdorff-space, lem-finite-choice]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-15
  audited: 2026-08-16
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Example

Let $X$ be a finite compact Hausdorff space and let $F$ be either $\mathbb R$ or $\mathbb C$. If $A\subseteq C(X,F)$ is a unital point-separating $F$-function algebra, then
$$A=C(X,F)=F^X.$$
Thus on a finite Hausdorff space uniform approximation strengthens to exact interpolation. In the complex case no self-adjointness hypothesis is needed.

## Facts & Assumptions

**Given:** A finite compact Hausdorff space $X$, a scalar field $F\in\{\mathbb R,\mathbb C\}$, and a unital point-separating $F$-function algebra $A\subseteq C(X,F)$.

[L1] A real function algebra is a real vector subspace closed under pointwise multiplication; unitality supplies all constants and point separation supplies a member distinguishing each distinct pair ([[def-unital-separating-real-function-algebra-general]]).

[L2] A complex function algebra is a complex vector subspace closed under pointwise multiplication, with the same literal unitality and point-separation clauses; self-adjointness is a separate condition ([[def-self-adjoint-complex-function-algebra]]).

[L3] Every natural-number-indexed list of nonempty sets has a choice function on its family of values, and this finite choice uses no form of the Axiom of Choice ([[lem-finite-choice]]).

[L4] In this library, a finite family is empty or has an explicit finite listing; in particular, a finite space is listable ([[def-compact-space]], finiteness convention).

[L5] In a Hausdorff space, any two distinct points have disjoint open neighbourhoods ([[def-hausdorff-space]]).

## Verification

**Proof technique:** direct.

1.1 If $X=\varnothing$, then $F^X$ has only the empty function, which is the zero element of $A$. If $X=\{x\}$, every function is constant, so unitality gives $A=F^X$. [L1, L2]

1.2 Assume $X$ has at least two points and use [L4] to list its points. For a fixed $x\in X$, [L5] supplies, for each listed $y\ne x$, a nonempty set of open neighbourhoods of $x$ missing $y$; [L3] chooses one from each member of this finite list. Their intersection is the open singleton $\{x\}$. Hence every singleton is open and every function $X\to F$ is continuous. [L3, L4, L5, choose]

1.3 For every ordered pair $x\ne y$, point separation in [L1] or [L2] gives $f_{xy}\in A$ with $f_{xy}(x)\ne f_{xy}(y)$; by [L3] and the finite listing in [L4], choose these over the finite list of ordered pairs and define $h_{xy}:=(f_{xy}-f_{xy}(y))/(f_{xy}(x)-f_{xy}(y))\in A$. Then $h_{xy}(x)=1$ and $h_{xy}(y)=0$. [L1, L2, L3, L4, choose, algebra]

2.1 For each $x\in X$, the finite product $e_x:=\prod_{y\ne x}h_{xy}$ belongs to $A$, equals $1$ at $x$, and equals $0$ at every other point because the factor indexed by that point vanishes. [step 1.3, L1, L2, L4, algebra]

3.1 For any function $\varphi:X\to F$, the finite sum $\sum_{x\in X}\varphi(x)e_x$ belongs to $A$ and agrees with $\varphi$ at every point. By step 1.2 every such $\varphi$ is continuous, so $A=C(X,F)=F^X$. [step 1.2, step 2.1, L1, L2, L4, algebra] ∎
