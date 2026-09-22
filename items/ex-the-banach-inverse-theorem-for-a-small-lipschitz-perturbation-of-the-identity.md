---
id: ex-the-banach-inverse-theorem-for-a-small-lipschitz-perturbation-of-the-identity
kind: example
title: The Banach inverse theorem for a small Lipschitz perturbation of the identity
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-banach-fixed-point, thm-inverse-function-theorem-for-banach-spaces, lem-neumann-series-and-small-perturbations-of-bounded-inverses, def-axiom-of-choice, def-lipschitz-holder-contraction, def-c-k-map-between-banach-spaces, def-banach-space, def-frechet-derivative-between-banach-spaces, def-operator-norm, thm-chain-sum-product-and-composition-rules-for-banach-derivatives]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-22
sources:
  references:
    - title: "Zuoqin Wang, Lecture 6 — §§3.1–3.2"
      url: "https://www.math.ntu.edu.tw/~dragon/Lecture%20Notes/Banach%20Calculus%202012.pdf"
---

## Example

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $X$ be a real Banach
space ([[def-banach-space]]) and let $g : X \to X$ be Lipschitz with constant
$q$ and $0 \le q < 1$ ([[def-lipschitz-holder-contraction]]). Then
$F := I_X + g$ is bijective and its inverse is Lipschitz with constant at most
$(1-q)^{-1}$. If in addition $g$ is of class $C^k$ for some $k \ge 1$
([[def-c-k-map-between-banach-spaces]]), then $F$ is a global $C^k$
diffeomorphism of $X$ onto $X$.

## Facts & Assumptions

**Given:** AC, a real Banach space $X$, a Lipschitz map $g : X \to X$ with constant $q \in [0,1)$, and $F := I_X+g$.

[L1] Lipschitz with constant $q$: $\|g(u)-g(v)\| \le q\|u-v\|$ for all $u,v$ ([[def-lipschitz-holder-contraction]]).

[L2] A contraction of a nonempty complete metric space has a unique fixed point; a Banach space is a nonempty complete metric space ([[thm-banach-fixed-point]], [[def-banach-space]]).

[L3] Neumann: $\|R\| < 1$ implies $I-R$ invertible with $\|(I-R)^{-1}\| \le (1-\|R\|)^{-1}$ ([[lem-neumann-series-and-small-perturbations-of-bounded-inverses]]).

[L4] A derivative is a norm limit of difference quotients, so a global Lipschitz constant $q$ bounds the derivative by $q$ wherever it exists ([[def-frechet-derivative-between-banach-spaces]], [[def-operator-norm]]).

[L5] Sum rule $D(I_X+g)(x) = I_X + Dg(x)$, $C^k$-ness of $I_X+g$ for a $C^k$ map $g$, and the inverse function theorem for $C^k$ maps between Banach spaces, $k\ge1$ ([[thm-chain-sum-product-and-composition-rules-for-banach-derivatives]], [[def-c-k-map-between-banach-spaces]], [[thm-inverse-function-theorem-for-banach-spaces]]).



## Verification

**Proof technique:** direct.

1.1 Fix $y \in X$ and put $T_y(x) := y - g(x)$. Then $\|T_y(x)-T_y(x')\| = \|g(x')-g(x)\| \le q\|x-x'\|$ by [L1], so $T_y$ is a contraction of the nonempty complete metric space $X$; by [L2] it has exactly one fixed point, and $x = T_y(x)$ is equivalent to $F(x) = y$. [L1, L2]

2.1 Consequently $F$ is bijective with $F^{-1}(y)$ the unique fixed point of $T_y$ for each $y$. If $x_i := F^{-1}(y_i)$ for $i=1,2$, then $\|x_1-x_2\| = \|(y_1-y_2) - (g(x_1)-g(x_2))\| \le \|y_1-y_2\| + q\|x_1-x_2\|$, hence $\|F^{-1}(y_1)-F^{-1}(y_2)\| \le (1-q)^{-1}\|y_1-y_2\|$ because $1-q>0$. [step 1.1, L1, algebra]

2.2 Now assume $g$ is of class $C^k$ with $k \ge 1$; then $F$ is of class $C^k$ and $DF(x) = I_X + Dg(x)$ by [L5]. The derivative of $g$ satisfies $\|Dg(x)\| \le q$ by [L4], so $\|{-Dg(x)}\| \le q < 1$ and [L3] makes $DF(x) = I_X - (-Dg(x))$ invertible with $\|DF(x)^{-1}\| \le (1-q)^{-1}$ at every $x$. [step 1.1, L3, L4, L5, algebra]

3.1 By the inverse function theorem [L5] applied at each $x$, and using that $F$ is a bijection by [step 2.1], the global inverse $F^{-1}$ agrees near each $y$ with the $C^k$ local inverse of $F$; being locally of class $C^k$, $F^{-1}$ is of class $C^k$. Hence $F$ is a global $C^k$ diffeomorphism. [step 2.1, step 2.2, L5, algebra]

4.1 Steps 2.1, 2.2 and 3.1 prove all the assertions of the example. [step 2.1, step 2.2, step 3.1] ∎
