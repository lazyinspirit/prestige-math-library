---
id: lem-na-sup-convolution-semiconvexity-and-jet-transfer
kind: lemma
title: Quadratic sup convolution and transfer of upper jets
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps: ["def-na-second-order-elliptic-semijets-and-closure", "def-convex-and-strictly-convex-functions-on-euclidean-sets", "thm-convex-functions-on-open-convex-sets-are-locally-lipschitz", "thm-euclidean-semicontinuous-extreme-value-theorem"]
justified_by: []
aliases: []
proof_strategy: direct
axiom_base: No choice principle is used.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Crandall, Ishii and Lions, User's guide to viscosity solutions of second order partial differential equations"
      url: https://arxiv.org/pdf/math/9207212
      locator: "Sections 2–3 and Appendix A, printed pp. 9–18 and 56–63."
---

## Statement

Let $m\ge1$ and let $K\subseteq\mathbb R^m$ be nonempty compact, let $v:K\to\mathbb R$ be upper semicontinuous (so $\limsup_{y\to x}v(y)\le v(x)$ for each $x\in K$), and extend $v$ by $-\infty$ off $K$. For $\lambda>0$ define
$$\widehat v(\xi)=\max_{x\in K}\{v(x)-\tfrac\lambda2|x-\xi|^2\}.$$
This is finite, continuous and $\lambda$-semiconvex on $\mathbb R^m$, meaning that $\widehat v(\xi)+\lambda|\xi|^2/2$ is convex ([[def-convex-and-strictly-convex-functions-on-euclidean-sets]]). If $(q,Y)\in J^{2,+}\widehat v(\eta)$, every maximizing point equals $y=\eta+q/\lambda$, and
$$(q,Y)\in J^{2,+}v(y),\qquad v(y)=\widehat v(\eta)+\frac{|q|^2}{2\lambda}.$$
The jets of $v$ are understood for its extended function, or for its original local domain if $y$ is interior to $K$. These conclusions use no choice principle.

## Facts & Assumptions

**Given:** $K,v,\lambda$ as stated.

[F1] Upper semicontinuous functions on compact Euclidean sets attain their maxima and are bounded above ([[thm-euclidean-semicontinuous-extreme-value-theorem]]).

[F2] Finite convex functions on open convex domains are locally Lipschitz ([[thm-convex-functions-on-open-convex-sets-are-locally-lipschitz]]).

[F3] Upper jets have the quadratic one-sided expansion in [[def-na-second-order-elliptic-semijets-and-closure]].

## Proof

1.1 The maximum exists by [F1], is finite above by $\max_K v$, and is finite below by evaluating at any fixed point of nonempty $K$. Expanding the square gives $\widehat v(\xi)+\lambda|\xi|^2/2=\sup_{x\in K}\{v(x)-\lambda|x|^2/2+\lambda x\cdot\xi\}$. Every expression in the supremum is affine in $\xi$, so the supremum is convex; finiteness and [F2] give continuity and the asserted semiconvexity. [F1, F2, algebra]

2.1 Fix a maximizer $y$ at $\eta$. Evaluation at $y$ and the upper-jet inequality [F3] give, for small $h$, $\lambda(y-\eta)\cdot h-\lambda|h|^2/2\le\widehat v(\eta+h)-\widehat v(\eta)\le q\cdot h+h^{\mathsf T}Yh/2+o(|h|^2)$. Put $h=te$ for every unit $e$ and both signs of $t$, divide by $|t|$, and let $t\to0$; then $\lambda(y-\eta)=q$, so the maximizer is unique and the value identity follows. For $x$ near $y$, set $\xi=\eta+x-y$, so the penalty is unchanged; the same jet inequality gives $v(x)-v(y)\le\widehat v(\eta+x-y)-\widehat v(\eta)\le q\cdot(x-y)+(x-y)^{\mathsf T}Y(x-y)/2+o(|x-y|^2)$. This is the transferred upper jet, and for an interior $y$ the extension and original function agree locally. [step 1.1, F3, algebra] ∎
