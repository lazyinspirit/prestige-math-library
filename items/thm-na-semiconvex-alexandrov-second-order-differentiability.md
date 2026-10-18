---
id: thm-na-semiconvex-alexandrov-second-order-differentiability
kind: theorem
title: "Alexandrov second differentiability of locally semiconvex functions"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
axiom_base: "Full Axiom of Choice; uses identified in the proof."
deps:
  - def-axiom-of-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - def-countable-choice
  - def-convex-and-strictly-convex-functions-on-euclidean-sets
  - def-metric-ball
  - def-null-and-content-zero-in-rn
  - lem-null-sets-in-rn-closed-under-subsets-and-countable-unions
  - thm-na-rademacher-euclidean
  - lem-na-lipschitz-critical-image-null
  - lem-na-convex-support-localization-and-lipschitz-dual-gradient
  - cor-bolzano-weierstrass-in-rn
  - thm-lipschitz-images-of-null-sets-in-rn-are-null
  - thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions
  - thm-c1-lipschitz-ac-bv-hierarchy
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Juha Kinnunen, Sobolev Spaces, complete 168-page notes; Sections 2.6 and
        3.3-3.4"
      url: "https://math.aalto.fi/~jkkinnun/files/sobolev_spaces.pdf"
    - title: "Crandall, Ishii and Lions, User's guide to viscosity solutions, Appendix
        A, Theorem A.2 and pp. 58-60, notes pp. 62-63"
      url: "https://arxiv.org/pdf/math/9207212"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Assume the Axiom of Choice. Let $U\subseteq\mathbb R^n$ be open, $n\ge1$, and let $u:U\to\mathbb R$ be locally semiconvex: around each point there is a Euclidean ball ([[def-metric-ball]]) and $c\ge0$ such that $x\mapsto u(x)+c|x|^2/2$ is convex in the sense of [[def-convex-and-strictly-convex-functions-on-euclidean-sets]]. Outside a set null in the cube-cover sense of [[def-null-and-content-zero-in-rn]], there are $p\in\mathbb R^n$ and a symmetric matrix $A$ with
$$u(x+h)=u(x)+p\cdot h+\tfrac12h^{\mathsf T}Ah+o(|h|^2)\quad(h\to0).$$
The remainder is uniform in direction. In particular $u$ is twice differentiable in the Peano sense almost everywhere.

## Facts & Assumptions

**Given:** The Axiom of Choice, an open set $U\subseteq\mathbb R^n$, $n\ge1$, and a locally semiconvex real function $u$ on $U$.

[A1] Every family of nonempty sets has a choice function ([[def-axiom-of-choice]]); the implication AC $\Rightarrow$ DC $\Rightarrow$ Countable Choice is supplied by [[thm-choice-implies-dependent-implies-countable-choice]], discharging both choice hypotheses of the absolutely-continuous FTC in [F7].

[F1] A locally Lipschitz map between finite-dimensional Euclidean spaces is Frechet differentiable outside a cube-cover-null set ([[thm-na-rademacher-euclidean]]).

[F2] A Lipschitz map $\mathbb R^n\to\mathbb R^n$ sends null sets to null sets ([[thm-lipschitz-images-of-null-sets-in-rn-are-null]]).

[F3] The image of the differentiability points with singular derivative under a Lipschitz self-map of $\mathbb R^n$ is null ([[lem-na-lipschitz-critical-image-null]]).

[F4] For a finite convex function on an open convex set, the subdifferential is nonempty, locally bounded, has locally closed graph, and its singleton points are exactly its differentiability points; the localized convex extension and dual-gradient inverse also hold ([[lem-na-convex-support-localization-and-lipschitz-dual-gradient]]).

[F5] Every bounded sequence in $\mathbb R^n$ has a convergent subsequence ([[cor-bolzano-weierstrass-in-rn]]).

[F6] Countable Choice is the choice function principle for countable families ([[def-countable-choice]]); under it, countable unions of null subsets of $\mathbb R^n$ are null ([[lem-null-sets-in-rn-closed-under-subsets-and-countable-unions]]).

[F7] Lipschitz functions on intervals are absolutely continuous, and absolutely continuous functions are integrals of their almost-everywhere derivatives ([[thm-c1-lipschitz-ac-bv-hierarchy]], [[thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions]]).

[F8] Nullity in $\mathbb R^n$ is defined by arbitrarily small total volumes of closed-cube covers ([[def-null-and-content-zero-in-rn]]).

## Proof

1.1 First consider a finite convex function $f$ on an open ball. Localize on a smaller closed ball $K$ and use [F4] to obtain a finite globally Lipschitz convex $H=f$ on $K$, then set $F=H+|\cdot|^2/2$ and $g=DF^*$, which is globally one-Lipschitz and satisfies $g(q)=x$ exactly when $q\in\partial F(x)$. By [F1], the nondifferentiability set $N$ of $g$ is null; [F2] makes $g(N)$ null, and [F3] makes $g(C)$ null for the differentiable singular-derivative set $C$ of $g$. The locally Lipschitz function $F$ is differentiable outside another null set $M$ by [F1]. The union $M\cup g(N)\cup g(C)$ is null by [F6]. For $x$ in the interior of $K$ outside that union, set $p=DF(x)$. Then $g(p)=x$, $g$ is differentiable at $p$, and $B=Dg(p)$ is invertible. Full AC is used by the stated suppliers and to choose the localizations simultaneously. [A1, F1, F2, F3, F4, F6, F8, construct]

2.1 As $y\to x$, every $q\in\partial F(y)$ tends to $p$, uniformly over all such subgradients: otherwise, by [A1], choose $y_k\to x$ and $q_k\in\partial F(y_k)$ staying a fixed distance from $p$; local boundedness in [F4] and [F5] give a convergent subsequence, and the locally closed graph in [F4] puts its limit in $\partial F(x)=\{p\}$, a contradiction. Since $g(q)=y$, differentiability of $g$ at $p$ gives $y-x=B(q-p)+o(|q-p|)$. Invertibility absorbs the remainder to give $|q-p|\le2\|B^{-1}\||y-x|$ for nearby $y$, hence $q=p+B^{-1}(y-x)+o(|y-x|)$ uniformly for every $q\in\partial F(y)$. [A1, F4, F5, step 1.1, algebra]

3.1 Fix a small $h$. The section $t\mapsto F(x+th)$ is Lipschitz on $[0,1]$, hence absolutely continuous by [F7]. Wherever its derivative exists, the two support inequalities in directions $h$ and $-h$ show that it equals $q\cdot h$ for every $q\in\partial F(x+th)$. By step 2.1, for every $\epsilon>0$ and sufficiently small $|h|$, $$|q-p-B^{-1}(th)|\le\epsilon t|h|$$ for every $0<t\le1$ and every such $q$. Integrating the measurable scalar derivative using [F7] gives $$|F(x+h)-F(x)-p\cdot h-\tfrac12h^{\mathsf T}B^{-1}h|\le\epsilon|h|^2/2.$$ No measurable subgradient selection is used. Replace $B^{-1}$ by its symmetric part, which has the same quadratic form. [F7, step 2.1, algebra]

4.1 Subtract $|x|^2/2$ to obtain the quadratic expansion for $f$ in the interior of $K$. Exhaust the original ball by countably many smaller closed balls and discard their null exceptional sets using [F6, F8]. The family of rational balls whose closures lie inside a local semiconvexity ball is countable and covers $U$; by [A1] choose a corresponding finite convexity constant for each. Apply the convex conclusion to $u+c|\cdot|^2/2$ on each ball and subtract that quadratic. Countable unions remain null by [F6, F8], and the remainder is direction-uniform by step 3.1. Full AC is retained; no reduction to Countable Choice is asserted. [A1, F6, F8, step 3.1, construct] ∎
