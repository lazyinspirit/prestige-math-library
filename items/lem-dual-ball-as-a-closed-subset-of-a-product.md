---
id: lem-dual-ball-as-a-closed-subset-of-a-product
kind: lemma
title: Dual ball as a closed subset of a product
status: published
origin: pipeline
deps: ["def-weak-star-topology", "def-product-topology", "def-dual-space-of-a-normed-space"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Bühler–Salamon, Functional Analysis"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
      locator: "§3.2.3, Theorem 3.33, pp. 134–135"
    - title: "Gerald Teschl, Topics in Real and Functional Analysis"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
      locator: "§5.3, proof of Theorem 5.10, pp. 146–147"
proof_strategy: "Use the evaluation map, identify its initial topology coordinatewise, and characterize its image by closed linearity equations and coordinate bounds."
---

## Statement

Let $X$ be a normed space over $\mathbb K\in\{\mathbb R,\mathbb C\}$ and let
$B_{X^*}=\{f\in X^*: \lVert f\rVert\leq 1\}$.  For each $x\in X$ put

$$
D_x=\{z\in\mathbb K:|z|\leq \lVert x\rVert\}.
$$

The evaluation map

$$E:B_{X^*}\longrightarrow\prod_{x\in X}D_x,\qquad E(f)=(f(x))_{x\in X}.$$

is a homeomorphism onto a closed subspace of the product.  This includes
$X=\{0\}$.

## Facts & Assumptions

**Given:** A normed space $X$ over $\mathbb R$ or $\mathbb C$.

[F1] The weak-star topology on $X^*$ is the initial topology of the evaluations $f\mapsto f(x)$ ([[def-weak-star-topology]]).

[F2] The product topology is the initial topology of the coordinate projections, and an empty product is a one-point space ([[def-product-topology]]).

[F3] Elements of $X^*$ are bounded linear functionals and $\lVert f\rVert=\sup_{\lVert x\rVert\leq1}|f(x)|$ ([[def-dual-space-of-a-normed-space]]).

## Proof

**Proof technique:** direct.

1.1 If $f\in B_{X^*}$, then $|f(x)|\leq\lVert x\rVert$, so $E(f)$ belongs to the displayed product; evaluations separate functionals, so $E$ is injective.  By the two initial-topology descriptions, the subspace topology pulled back by $E$ is exactly $\sigma(X^*,X)$ on the ball. [F1, F2, F3]

1.2 Inside the product let $C$ be the set of all $z=(z_x)_{x\in X}$ satisfying

$$z_{x+y}=z_x+z_y,\qquad z_{\lambda x}=\lambda z_x\quad(x,y\in X,\ \lambda\in\mathbb K).$$

Each equality defines a closed set: it is the inverse image of $\{0\}$ under a continuous finite linear combination of coordinate projections.  Hence $C$, their intersection, is closed. [F2]

2.1 Every $E(f)$ lies in $C$.  Conversely, if $z\in C$, then $f_z(x)=z_x$ is linear and its coordinate bound gives $|f_z(x)|\leq\lVert x\rVert$ for every $x$.  Thus $f_z$ is bounded with $\lVert f_z\rVert\leq1$, so $z=E(f_z)$.  Consequently $E[B_{X^*}]=C$. [F3, step 1.2]

3.1 Steps 1.1 and 2.1 show that $E$ is a homeomorphism onto the closed subspace $C$.  When $X=\{0\}$, both the ball and the product are one-point spaces and the same argument applies. [F2, step 1.1, step 2.1] ∎
