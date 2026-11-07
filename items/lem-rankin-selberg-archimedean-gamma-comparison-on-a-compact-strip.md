---
dependency_level: 0
id: lem-rankin-selberg-archimedean-gamma-comparison-on-a-compact-strip
kind: lemma
title: "Compact comparison of archimedean Gamma products at a fixed point"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [thm-euler-gamma-function-is-holomorphic, cor-gamma-function-has-no-zeros, thm-extreme-value-metric]
justified_by: []
sources:
  references:
    - title: "Yang, Corollary 9.4 proof; explicit pole-free compact-window comparison"
      url: https://arxiv.org/pdf/2303.02225v1
---

## Statement

Put $\Gamma_{\mathbb R}(z)=\pi^{-z/2}\Gamma(z/2)$ and $\Gamma_{\mathbb C}(z)=2(2\pi)^{-z}\Gamma(z)$. Let $D$ be a compact subset of a finite-dimensional complex parameter space. Fix finitely many continuous maps $a_i,b_j:D\to\mathbb C$, choices $\epsilon_i,\delta_j\in\{\mathbb R,\mathbb C\}$ and $\eta>0$ such that $\operatorname{Re}a_i(x),\operatorname{Re}b_j(x)\geq\eta$ on $D$. Then

$$P(x)=\frac{\prod_i\Gamma_{\epsilon_i}(a_i(x))}{\prod_j\Gamma_{\delta_j}(b_j(x))}$$

has constants $0<c\leq C<\infty$ with $c\leq|P(x)|\leq C$ on $D$. Empty products are one. In particular, at the same fixed spectral point $s_0$, completed and uncompleted finite products differing by such archimedean factors have comparable absolute values.

For example at $s_0=1$, parameters in compact sets satisfying $|\operatorname{Re}\mu_i|,|\operatorname{Re}\nu_j|\leq1/2-\theta$, $\theta>0$, give pole-free compact comparisons for finite products with arguments $1+\mu_i+\nu_j$ and $1+\mu_i-\mu_j$, and their reciprocal factors. For other spectral points the actual arguments must separately satisfy the stated positive-real-part condition. No comparison between values at $s_0=1/2$ and $s_0=1$ is asserted.

## Statement references

[[thm-euler-gamma-function-is-holomorphic]]

[[cor-gamma-function-has-no-zeros]]

[[thm-extreme-value-metric]]

[Yang, Corollary 9.4 proof](https://arxiv.org/pdf/2303.02225v1)

## Facts & Assumptions

[F1] Gamma is holomorphic on the right half-plane. [[thm-euler-gamma-function-is-holomorphic]]

[F2] Gamma has no zeros. [[cor-gamma-function-has-no-zeros]]

[F3] A continuous real-valued function on a compact metric space attains its extrema. [[thm-extreme-value-metric]]

## Proof

**Given:** The compact parameter set and finite argument maps in the Statement.

1.1 By F1 the functions $\Gamma(z/2)$ and $\Gamma(z)$ are continuous on $\operatorname{Re}z>0$. Their elementary exponential multipliers in $\Gamma_{\mathbb R}$ and $\Gamma_{\mathbb C}$ are nonzero. By F2 both Gamma factors are nonzero there. Each composed factor in $P$ is therefore continuous and nonzero on $D$, so their finite product and quotient are continuous and nonzero. [F1, F2, given, algebra]

2.1 If $D$ is empty, any positive constants suffice. Otherwise $|P|$ and $1/|P|$ are continuous real-valued functions on $D$. F3 bounds both above by finite positive constants. Inverting the latter bound gives the required positive lower bound. A factorization $\Lambda(s_0,x)=P(x)L(s_0,x)$ at this same $s_0$ therefore yields the asserted comparison, also when the finite part vanishes. [F3, step 1.1, algebra]

3.1 Under the example's inequalities, $\operatorname{Re}(1+\mu_i+\nu_j)\geq2\theta$ and $\operatorname{Re}(1+\mu_i-\mu_j)\geq2\theta$. Their images are compact because the parameter sets are compact and the maps are continuous. Steps 1.1–2.1 apply with $\eta=2\theta$. A replacement of $1$ by $1/2$ changes these inequalities, so it requires a new margin hypothesis; neither this proof nor multiplication by nonzero Gamma factors changes the spectral argument. This proves every assertion. [step 1.1, step 2.1, algebra] ∎

## Source limits

The proof supplies a finite Gamma-product comparison with explicit hypotheses. It does not prove an automorphic bound towards Ramanujan, a local Langlands Gamma-factor identity, or a level moment. The displayed $s=1$ in Yang's Corollary 9.4 differs from the central argument $1/2$ of Theorem 9.1; a completion comparison alone cannot bridge that difference.
