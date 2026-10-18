---
id: lem-double-exponential-truncated-tail-bound
kind: lemma
title: A double-exponential envelope bounds the omitted trapezoid tails
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps: [def-real-exponential-function-and-e, thm-derivative-of-exponential, thm-chain-rule, thm-substitution, thm-exponential-limits-and-range]
proof_strategy: direct
axiom_use: None. The comparison, substitution, and tail limit use no choice.
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: Lloyd N. Trefethen and J. A. C. Weideman, The Exponentially Convergent Trapezoidal Rule, SIAM Review 56(3), 2014
      url: https://people.maths.ox.ac.uk/trefethen/publication/PDF/2014_149.pdf
      locator: §6, separation of infinite-trapezoid discretization error from omitted tails.
---

## Statement

Let $A,B,\kappa>0$, $T\ge0$, and let $\Phi:\mathbb R\to\mathbb C$ be continuous with
$$|\Phi(t)|\le A\exp(-B\exp(\kappa|t|))\qquad(|t|\ge T).$$
For $h>0$ and nonnegative integers $N_-,N_+$ with $N_-h,N_+h\ge T$, one has
$$\int_{|t|>N_-h\text{ on the left, }N_+h\text{ on the right}}|\Phi(t)|\,dt \le \frac{A}{\kappa B}\left(e^{-B e^{\kappa N_-h}}+e^{-B e^{\kappa N_+h}}\right),$$
where the left and right integral means $\int_{-\infty}^{-N_-h}+\int_{N_+h}^{\infty}$. The omitted trapezoid samples obey the same bound:
$$h\sum_{k<-N_-\text{ or }k>N_+}|\Phi(kh)| \le \frac{A}{\kappa B}\left(e^{-B e^{\kappa N_-h}}+e^{-B e^{\kappa N_+h}}\right).$$

## Facts & Assumptions

**Given:** $A,B,\kappa>0$, $T\ge0$, a continuous $\Phi$ satisfying the stated envelope, $h>0$, and $N_\pm h\ge T$.

[F1] [[def-real-exponential-function-and-e]] and [[thm-derivative-of-exponential]]: $u\mapsto e^u$ is positive and has derivative $e^u$.

[F2] [[thm-chain-rule]]: derivatives of the displayed exponential compositions are obtained by the chain rule.

[F3] [[thm-substitution]]: on finite intervals, the differentiable increasing substitution $u=B e^{\kappa t}$ changes the integral by its derivative factor.

[F4] [[thm-exponential-limits-and-range]]: $e^{-u}\to0$ as $u\to+\infty$.

## Proof

1.1 For $u_0=B e^{\kappa S}$, finite-interval substitution from [F3] gives $$\int_S^R e^{-B e^{\kappa t}}dt=\frac1\kappa\int_{u_0}^{B e^{\kappa R}}\frac{e^{-u}}u\,du.$$ For $u\ge u_0>0$, $1/u\le1/u_0$, so the right side is at most $e^{-u_0}/(\kappa u_0)$ after taking $R\to\infty$; the endpoint limit follows from [F4]. Since $S\ge0$, $e^{\kappa S}\ge1$, and each continuous one-sided tail is bounded by $e^{-B e^{\kappa S}}/(\kappa B e^{\kappa S})\le e^{-B e^{\kappa S}}/(\kappa B)$. [given, F1, F3, F4, algebra]

1.2 Apply step 1.1 with $S=N_-h$ to $t\mapsto|\Phi(-t)|$ and with $S=N_+h$ to $t\mapsto|\Phi(t)|$, using the envelope. Adding proves the asserted integral bound and absolute integrability of both tails. [given, step 1.1, algebra]

2.1 The function $g(t)=A e^{-B e^{\kappa t}}$ is nonincreasing for $t\ge0$, since its derivative is $-A B\kappa e^{\kappa t}e^{-B e^{\kappa t}}<0$ by [F1]–[F2]. For every integer $k>N_+$, $h g(kh)\le\int_{(k-1)h}^{kh}g(t)dt$; summing finite partial tails and taking their increasing limit bounds the right omitted samples by $\int_{N_+h}^{\infty}g(t)dt$. The same comparison for $g(-t)$ bounds the left tail, and step 1.1 gives the stated sum bound. [given, F1, F2, step 1.1, algebra]

2.2 The two bounds in steps 1.2 and 2.1 are finite and have the displayed right-hand side, proving both claims. [step 1.2, step 2.1] ∎

