---
id: lem-na-discrete-gradient-lift-gap-estimate
kind: lemma
title: Discrete gradient gap from a relative commuting projection
status: draft
origin: session
pipeline_run: numerical-analysis-remaining-71-2026-10-17
deps: [thm-na-uniformly-bounded-commuting-cochain-projection, thm-poincare-inequality-for-w-one-p-zero, thm-sobolev-spaces-are-banach-spaces, lem-l-two-with-the-integral-pairing-is-a-hilbert-space, lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set, thm-projection-onto-a-nonempty-closed-convex-set, thm-hilbert-projection-variational-characterization, def-countable-choice, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Douglas N. Arnold, Richard S. Falk, and Ragnar Winther, Finite element exterior calculus: from Hodge theory to numerical stability"
      url: https://sites.math.rutgers.edu/~falk/papers/bulletin-orig.pdf
---

## Statement

Assume AC. Let $\Omega\subset\mathbb R^3$ be bounded and open. Write $H=L^2(\Omega;\mathbb R^3)$, $B=\nabla H_0^1(\Omega)$, and let $P_B$ denote the $H$-orthogonal projection onto $B$. Let $S_h\subset H_0^1(\Omega)$ and $V_h\subset H_0(\operatorname{curl};\Omega)$ be finite-dimensional subspaces with $B_h=\nabla S_h\subset V_h$. Suppose linear projections $\Pi_h^0:H_0^1\to S_h$ and $\Pi_h^1:H_0(\operatorname{curl})\to V_h$ satisfy $\Pi_h^1\nabla=\nabla\Pi_h^0$. For $v_h\in V_h\cap B_h^\perp$, put $w_h=(I-P_B)v_h$. Then $w_h\in H_0(\operatorname{curl})\cap B^\perp$, $\operatorname{curl}w_h=\operatorname{curl}v_h$, and
$$\|v_h-w_h\|_2\le\|\Pi_h^1w_h-w_h\|_2.$$
If moreover $\sup_h\|\Pi_h^1\|_{H\to H}\le M$ and $\Pi_h^1f\to f$ in $H$ for each fixed $f\in H_0(\operatorname{curl})$, every $H$-convergent sequence of lifts $w_h$ has $\|v_h-w_h\|_2\to0$. Here the $H$ operator norm means that the graph-space operators possess bounded extensions to $H$.

## Facts & Assumptions

**Given:** AC, the spaces and relative commuting projections in the Statement. These are the stronger relative-degree-zero and $L^2$ interfaces required from [[thm-na-uniformly-bounded-commuting-cochain-projection]], not consequences of its present graph-bound-only carrier.

[F1] On bounded open sets, the scalar zero-boundary Poincare inequality holds under CC. ([[thm-poincare-inequality-for-w-one-p-zero]], [[def-countable-choice]])

[F2] A nonempty closed convex subset of a real Hilbert space has a unique nearest point under CC, characterized by the variational inequality. ([[thm-projection-onto-a-nonempty-closed-convex-set]], [[thm-hilbert-projection-variational-characterization]])

[F3] Sobolev spaces are complete under AC; $H_0^1$ is a closed subspace by its closure definition. Real $L^2$ is Hilbert under CC, and compactly supported smooth functions are dense in $L^2$ on every open set under CC, applied in each of three components. ([[thm-sobolev-spaces-are-banach-spaces]], [[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]], [[lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set]])

[A1] AC implies the CC used in [F1] and [F2]. ([[def-axiom-of-choice]])

## Proof

1.1 If $\nabla p_n$ is Cauchy in $H$, [F1] makes $p_n$ Cauchy in $H_0^1$, so its limit $p\in H_0^1$ has $\nabla p_n\to\nabla p$. Thus $B$ is closed. Apply [F2] to $B$. For its nearest point $P_Bv$, testing the variational inequality with $P_Bv\pm b$, $b\in B$, gives $v-P_Bv\perp B$. Uniqueness of this decomposition proves linearity, and its Pythagorean identity proves that $P_B$ and $I-P_B$ are contractions. Finally, if $p\in H_0^1$, smooth compactly supported approximation shows $\nabla p\in H_0(\operatorname{curl})$ with curl zero: convergence of the gradients is convergence in the curl graph norm. Therefore $w_h=v_h-P_Bv_h$ has the stated membership and curl. [F1, F2, F3, A1, given, construct]

1.2 Write $v_h-w_h=\nabla p_h$ with $p_h\in H_0^1$, and put $e_h=v_h-\Pi_h^1w_h$. Identity on $V_h$ and commutation give $e_h=\Pi_h^1(v_h-w_h)=\nabla\Pi_h^0p_h\in B_h$. Both $v_h$ and $w_h$ are orthogonal to $B_h$, hence $(v_h-w_h,e_h)=0$. Since $v_h-w_h=e_h+(\Pi_h^1w_h-w_h)$, Cauchy–Schwarz yields $\|v_h-w_h\|_2^2=(v_h-w_h,\Pi_h^1w_h-w_h)\le\|v_h-w_h\|_2\|\Pi_h^1w_h-w_h\|_2$. Division if the left factor is nonzero proves the inequality; the zero case is immediate. This is the missing discrete-gradient estimate. [step 1.1, given, algebra]

2.1 Suppose $w_h\to w$ in $H$. The $L^2$ extensions of the projections converge strongly to identity on all $H$: first approximate an arbitrary $f\in H$ by a smooth compactly supported vector field $g$, then use $\|(I-\Pi_h^1)f\|_2\le(1+M)\|f-g\|_2+\|(I-\Pi_h^1)g\|_2$. Consequently $\|\Pi_h^1w_h-w_h\|_2\le(1+M)\|w_h-w\|_2+\|\Pi_h^1w-w\|_2\to0$. Step 1.2 gives the last assertion. [F3, step 1.2, given, algebra] ∎
