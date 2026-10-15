---
id: ex-shared-brownian-euler-level-coupling-rates
kind: example
title: "Shared-increment Euler coupling and payoff rates"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 6
deps:
  - thm-shared-brownian-euler-level-correction-rates
  - def-euler-maruyama-step-process-and-continuous-interpolation
  - thm-ito-formula-one-dimensional
  - thm-doob-maximal-bound-for-the-ito-integral
  - def-d-dimensional-brownian-motion
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
---

## Example

Work on a complete filtered probability space whose filtration is
right-continuous and contains all $P$-null subsets of $\mathcal F$ in
$\mathcal F_0$. Let $W$ be an adapted standard one-dimensional Brownian motion
whose increments after time $s$ are independent of $\mathcal F_s$. For
$dX_t=-X_t\,dt+dW_t$, $X_0=0$, and $T=1$, couple the Euler paths with
fine step $h=1/(2n)$ and coarse step $2h=1/n$ by summing each pair of fine
Brownian increments for the coarse update. For $\varphi(x)=\cos x$, the
shared-Brownian theorem gives correction variance $O(h)$, strong bias
$O(h^{1/2})$, and coupled path work $O(h^{-1})$.

## Facts & Assumptions

**Given:** AC; the complete usual filtered Brownian setup above on $[0,1]$; the $\mathcal F_0$-measurable initial value $X_0=0$; $h=1/(2n)$ for $n\ge1$; the fine/coarse coupling described in the Example; and $\varphi(x)=\cos x$.

[F1] Under the stated nested-grid coupling and a globally Lipschitz payoff, the Euler correction has second moment $O(h)$, its variance is $O(h)$, the strong-route bias is $O(h^{1/2})$, and fixed-refinement path work is $O(h^{-1})$. [[thm-shared-brownian-euler-level-correction-rates]]

[F2] For a real continuous Brownian Itô process $X_t=X_0+\int_0^tb_sds+\int_0^t\sigma_sdW_s$, applying Itô's formula to $e^tX_t$ is valid and gives the displayed drift and diffusion terms. [[thm-ito-formula-one-dimensional]]

[F3] For a square-integrable Brownian Itô integral $M_t=\int_0^tH_s\,dW_s$, $\mathbb E\sup_{t\le T}|M_t|^2\le4\mathbb E\int_0^TH_s^2ds$. [[thm-doob-maximal-bound-for-the-ito-integral]]

[F4] A standard Brownian motion has independent normal increments of variance equal to the elapsed time. [[def-d-dimensional-brownian-motion]]

[A1] The refinement factor is $M=2$; each coarse increment is the sum of its two fine increments, and both paths start from the same $X_0$ and use the same Brownian path.

[A2] The payoff is globally Lipschitz with constant $1$, since $|\cos x-\cos y|=|\int_y^x-\sin s\,ds|\le|x-y|$.

[A3] AC is inherited through the Brownian and Itô interfaces in [F2]–[F4]. [[def-axiom-of-choice]]

## Verification


1.1 The coefficients are $b(x)=-x$ and $\sigma(x)=1$. They are globally Lipschitz with constant $1$, satisfy $|b(x)|^2+|\sigma(x)|^2=x^2+1$, and are time independent, so the shared coefficient and time-modulus conditions hold. Applying [F2] to $e^tX_t$ gives $X_t=e^{-t}\int_0^t e^s dW_s$. Applying [F2] to $e^tW_t$ then gives $X_t=\int_0^t e^{-(t-s)}dW_s =W_t-\int_0^t e^{-(t-s)}W_sds.$ Hence $\sup_{t\le1}|X_t|\le2\sup_{t\le1}|W_t|$, and [F3] gives $\mathbb E\sup_{t\le1}|X_t|^2\le16<\infty$. [A3, F2, F3, given, algebra]

1.2 The payoff satisfies [A2]. The fine and coarse meshes obey $h\le1/2$, $1/h=2n\in\mathbb N$, and $1/(2h)=n\in\mathbb N$; [A1] makes every coarse increment the corresponding Brownian increment over its full interval, [F4] gives its centered normal law with variance $2h$, and the given filtration-relative Brownian hypothesis supplies independence from the sigma-algebra at the start of that coarse interval. Thus the shared-rate theorem hypotheses hold. [A1, A2, F4, given]

2.1 Applying [F1] yields $\operatorname{Var}(\cos(Y_1^h)-\cos(Y_1^{2h}))\le Ch, \qquad |\mathbb E\cos(X_1)-\mathbb E\cos(Y_1^h)|\le C\sqrt h,$ and work $O(h^{-1})$ per coupled path pair. These rates correspond to $(\alpha,\beta)=(1/2,1)$ for this payoff. [F1, step 1.2] ∎
