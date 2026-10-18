---
id: thm-na-semiconvex-alexandrov-second-order-differentiability
kind: theorem
title: "Alexandrov second differentiability of locally semiconvex functions"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
axiom_base: "Full Axiom of Choice; uses identified in the proof."
deps:
  - def-axiom-of-choice
  - thm-na-rademacher-euclidean
  - lem-na-lipschitz-critical-image-null
  - lem-na-convex-support-localization-and-lipschitz-dual-gradient
  - thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions
  - thm-countable-union-of-null-is-null
  - thm-c1-lipschitz-ac-bv-hierarchy
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Juha Kinnunen, Sobolev Spaces, complete 168-page notes; Sections 2.6 and 3.3-3.4"
      url: "https://math.aalto.fi/~jkkinnun/files/sobolev_spaces.pdf"
    - title: "Crandall, Ishii and Lions, User's guide to viscosity solutions, Appendix A, Theorem A.2 and pp. 58-60, notes pp. 62-63"
      url: "https://arxiv.org/pdf/math/9207212"
---

## Statement

Assume the Axiom of Choice. Let $U\subseteq\mathbb R^n$ be open, $n\ge1$, and let $u:U\to\mathbb R$ be locally semiconvex: around each point there is a ball and $c\ge0$ such that $f(x)=u(x)+c|x|^2/2$ is convex. Outside a Lebesgue null subset of $U$, there are $p\in\mathbb R^n$ and a symmetric matrix $A$ with $u(x+h)=u(x)+p\cdot h+\tfrac12 h^TAh+o(|h|^2)$ as $h\to0$. The remainder is uniform in direction. In particular $u$ is twice differentiable in the Peano sense almost everywhere.

## Facts & Assumptions

**Given:** The hypotheses in the Statement.

[F1] [[thm-na-rademacher-euclidean]].

[F2] [[lem-na-lipschitz-critical-image-null]].

[F3] [[lem-na-convex-support-localization-and-lipschitz-dual-gradient]].

[F4] [[thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions]].

[F5] [[thm-countable-union-of-null-is-null]].

[F6] [[thm-c1-lipschitz-ac-bv-hierarchy]].

## Proof

1.1 First prove the result for finite convex $f$ on an open ball. Localize on a smaller closed ball $K$ and use [F3] to obtain $H=f$ on $K$, $F=H+|\cdot|^2/2$, and $g=DF^*$ globally one-Lipschitz. By [F1], the nondifferentiability set $N$ of $g$ is null; [F2] makes $g(N)$ null and also makes the image $g(C)$ of its differentiable singular-derivative set null. Finally $F$ is locally Lipschitz and hence differentiable outside another null set $M$. For $x$ in the interior of $K$ outside $M\cup g(N)\cup g(C)$ set $p=DF(x)$. Then $g(p)=x$ and $B=Dg(p)$ exists and is invertible. [F1, F2, F3, construct]

1.2 For $y\to x$ and any $q\in\partial F(y)$, the local boundedness, closed graph and singleton assertion in [F3] imply $q\to p$, uniformly over all these choices. Since $g(q)=y$, differentiability at $p$ gives $y-x=B(q-p)+o(|q-p|)$. Invertibility implies $|q-p|\le 2\|B^{-1}\||y-x|$ for sufficiently near $y$ (absorb the small remainder). Consequently $q=p+B^{-1}(y-x)+o(|y-x|)$ uniformly over all $q\in\partial F(y)$. This requires no inverse function theorem and no differentiability of $g$ away from $p$. [F3, step 1.1, algebra]

2.1 Fix a small $h$. The section $t\mapsto F(x+th)$ is Lipschitz on $[0,1]$, hence absolutely continuous. At every $t\in(0,1)$ where its one-dimensional derivative exists, the support inequalities in the two line directions show that this derivative equals $q\cdot h$ for every $q\in\partial F(x+th)$. For any $\varepsilon>0$, step 1.2 gives, when $|h|$ is sufficiently small, $|q-p-B^{-1}(th)|\le\varepsilon t|h|$ for every $0<t\le1$ and every such $q$. The one-dimensional FTC therefore yields $|F(x+h)-F(x)-p\cdot h-\tfrac12h^TB^{-1}h|\le\varepsilon|h|^2/2$. No measurable choice of subgradients is needed: the bound applies to the already measurable scalar line derivative. Replace $B^{-1}$ by its symmetric part, which has the same quadratic form. [F4, F6, step 1.2, algebra]

2.2 Subtract $|x|^2/2$ to obtain the quadratic expansion for $f$ on the interior of $K$. Exhaust the original ball by countably many smaller closed balls and discard their null exceptional sets. For locally semiconvex $u$, use a countable cover of semiconvexity balls (choose rational subballs of the given neighborhoods), apply the convex conclusion to $f=u+c|\cdot|^2/2$, and subtract that quadratic. The countable union of exceptional sets is null, and step 2.1 gives the direction-uniform remainder. Full AC is inherited from all three foundational suppliers; this proof asserts no reduction to Countable Choice. [F5, step 2.1, construct] ∎
