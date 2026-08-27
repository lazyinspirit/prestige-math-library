---
id: lem-finite-dimensional-separation-of-a-compact-convex-set-and-a-point
kind: lemma
title: "A compact convex set and an exterior point admit a complex-linear separator"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-strict-separation-of-a-point-from-a-closed-convex-set]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Jiří Lebl, Tasty Bits of Several Complex Variables, Exercise 2.1.7"
      url: "https://www.jirka.org/scv/scv.pdf"
    - title: "Harold P. Boas, Lecture Notes on Several Complex Variables, Example 12"
      url: "https://haroldpboas.gitlab.io/courses/650-2007c/notes.pdf"
pipeline_run: null
---

## Statement

Let $K\subseteq\mathbb C^m$ be a nonempty compact convex set, and let
$p\in\mathbb C^m\setminus K$. Then there is a complex-linear functional

$$L(z)=a_1z_1+\cdots+a_mz_m$$

and a real number $\beta$ such that

$$\operatorname{Re}L(z)\le\beta<\operatorname{Re}L(p)\qquad(z\in K).$$

## Facts & Assumptions

**Given:** A nonempty compact convex set $K\subseteq\mathbb C^m$ and a point
$p\notin K$.

[L1] A point outside a nonempty closed convex subset of Euclidean space admits
a strict real-linear separating hyperplane
([[thm-strict-separation-of-a-point-from-a-closed-convex-set]]).

## Proof

**Proof technique:** direct.

1.1 View $\mathbb C^m$ as $\mathbb R^{2m}$ by writing $z_j=x_j+iy_j$. Since $K$ is compact, it is closed, so [L1] gives real numbers $\alpha_1,\dots,\alpha_m,\beta_1,\dots,\beta_m$ and a real number $\beta$ such that $$\sum_{j=1}^m \alpha_j x_j+\sum_{j=1}^m \beta_j y_j\le\beta<\sum_{j=1}^m \alpha_j \operatorname{Re}p_j+\sum_{j=1}^m \beta_j \operatorname{Im}p_j$$ for every $z=(z_1,\dots,z_m)\in K$. [L1, given]

2.1 Define $a_j:=\alpha_j-i\beta_j$ and $L(z):=\sum_{j=1}^m a_jz_j$. Then $L$ is complex-linear and $$\operatorname{Re}L(z)=\sum_{j=1}^m \alpha_j \operatorname{Re}z_j+\sum_{j=1}^m \beta_j \operatorname{Im}z_j.$$ Substituting this identity into step 1.1 gives the stated strict separation. [step 1.1, algebra] ∎
