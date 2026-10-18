---
id: lem-na-sup-convolution-semiconvexity-and-jet-transfer
kind: lemma
title: Quadratic sup convolution and transfer of upper jets
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
deps: ["def-na-second-order-elliptic-semijets-and-closure", "thm-convex-functions-on-open-convex-sets-are-locally-lipschitz", "thm-euclidean-semicontinuous-extreme-value-theorem"]
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

Let $K\subseteq\mathbb R^m$ be nonempty compact, let $v:K\to\mathbb R$ be upper semicontinuous, and extend $v$ by $-\infty$ off $K$. For $\lambda>0$ define
$$\widehat v(\xi)=\max_{x\in K}\{v(x)-\tfrac\lambda2|x-\xi|^2\}.$$
This is finite, continuous and $\lambda$-semiconvex on $\mathbb R^m$, meaning that $\widehat v(\xi)+\lambda|\xi|^2/2$ is convex. If $(q,Y)\in J^{2,+}\widehat v(\eta)$, every maximizing point equals $y=\eta+q/\lambda$, and
$$(q,Y)\in J^{2,+}v(y),\qquad v(y)=\widehat v(\eta)+\frac{|q|^2}{2\lambda}.$$
The jets of $v$ are understood for its extended function, or for its original local domain if $y$ is interior to $K$. These conclusions use no choice principle.

## Facts & Assumptions

**Given:** $K,v,\lambda$ as stated.

[F1] Upper semicontinuous functions on compact Euclidean sets attain their maxima and are bounded above ([[thm-euclidean-semicontinuous-extreme-value-theorem]]).

[F2] Finite convex functions on open convex domains are locally Lipschitz ([[thm-convex-functions-on-open-convex-sets-are-locally-lipschitz]]).

[F3] Upper jets have the quadratic one-sided expansion in [[def-na-second-order-elliptic-semijets-and-closure]].

## Proof

1.1 The maximum exists by [F1]; it is finite above by $\max_K v$ and finite below by evaluating at any fixed point of $K$. Expanding the square gives
$$\widehat v(\xi)+\tfrac\lambda2|\xi|^2=\sup_{x\in K}\{v(x)-\tfrac\lambda2|x|^2+\lambda x\cdot\xi\}.$$
Each expression is affine in $\xi$, and its supremum is convex by the convexity inequality term by term. Finiteness and [F2] give continuity and the asserted semiconvexity. [F1, F2, algebra]

1.2 Fix a maximizer $y$ at $\eta$. For small $h$, evaluation of the supremum at $y$ and the superjet inequality imply
$$\lambda(y-\eta)\cdot h-\tfrac\lambda2|h|^2\le\widehat v(\eta+h)-\widehat v(\eta)\le q\cdot h+\tfrac12h^{\mathsf T}Yh+o(|h|^2).$$
Substitute $h=te$ for arbitrary unit $e$ and both signs of $t$, divide by $|t|$ and let $t\to0$; then $\lambda(y-\eta)=q$, proving uniqueness and the value identity. For any $x$ near $y$, choose $\xi=\eta+x-y$. The penalty $|x-\xi|^2=|y-\eta|^2$ is fixed, whence
$$v(x)-v(y)\le\widehat v(\eta+x-y)-\widehat v(\eta)\le q\cdot(x-y)+\tfrac12(x-y)^{\mathsf T}Y(x-y)+o(|x-y|^2).$$
This is precisely the transferred upper jet. If $y$ is interior to $K$, the extended and original local functions coincide near $y$. [step 1.1, F3, algebra] ∎
