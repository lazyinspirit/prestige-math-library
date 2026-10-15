---
id: thm-finite-horizon-moments-for-lipschitz-ito-sdes
kind: theorem
title: Finite-horizon moments for Lipschitz Itô SDEs
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 3
axiom_base: Full AC
deps:
  - def-ito-sde-and-strong-solution
  - thm-global-strong-well-posedness-for-lipschitz-ito-sdes
  - def-continuous-brownian-ito-process
  - thm-multidimensional-ito-formula-for-brownian-driven-processes
  - thm-stopping-an-ito-integral
  - thm-ito-integral-process-has-a-continuous-martingale-version
  - thm-ito-isometry-and-linearity-in-predictable-l2
  - def-continuous-time-stopping-time
  - lem-adapted-continuous-processes-are-progressively-measurable
  - def-progressively-measurable-and-predictable-process
  - lem-rat-embeds-dense
  - thm-fatou-lemma
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Ramon van Handel, Stochastic Calculus, Filtering, and Stochastic Control: Lecture Notes (ACM 217, Spring 2007), Chapter 5.1"
      url: "https://web.math.princeton.edu/~rvan/acm217/ACM217.pdf"
    - title: "A.W. van der Vaart, Martingales, Diffusions and Financial Mathematics (preliminary notes), Section 7.1"
      url: "https://diamhomes.ewi.tudelft.nl/~avandervaart/books/stochint.pdf"
---

## Statement

Assume the SDE data of [[def-ito-sde-and-strong-solution]] and the
global strong solution supplied by
[[thm-global-strong-well-posedness-for-lipschitz-ito-sdes]]. For every real
$p\ge2$ with $E|X_0|^p<\infty$, the unique solution satisfies
$$\sup_{0\le t\le T}E|X_t|^p\le 2^{p/2}(1+E|X_0|^p)e^{C_pT},\qquad C_p:=\sqrt2\,pK+p(p-1)K^2.$$
The supremum is over the individual-time moments; for $p>2$ this statement
does not assert an $E\sup_{t\le T}|X_t|^p$ bound. In particular, if $X_0$
has every finite moment of order $p\ge2$, then the solution has uniform
finite-horizon moments of every such order.

## Facts & Assumptions

**Given:** the usual filtered-space SDE data, $T\ge0$, $d,m\ge1$, global
Lipschitz and linear-growth coefficients with constant $K$, $X_0\in L^p$
for a fixed real $p\ge2$, and the unique strong solution $X$.

[F1] The unique solution has continuous adapted paths and
$E\sup_{t\le T}|X_t|^2<\infty$. [[thm-global-strong-well-posedness-for-lipschitz-ito-sdes]]

[F2] An adapted continuous process is predictable and progressive. Once its
finite-coordinate drift and diffusion coefficients have the local
integrability required by the continuous Brownian Itô-process definition, the
multidimensional $C^{1,2}$ Itô formula holds up to indistinguishability.
Tonelli's theorem justifies the expected time-integral interchanges below for
the nonnegative coefficient and stopped-energy integrands.
[[lem-adapted-continuous-processes-are-progressively-measurable]] [[def-progressively-measurable-and-predictable-process]] [[def-continuous-brownian-ito-process]] [[thm-multidimensional-ito-formula-for-brownian-driven-processes]] [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]

[F3] For a stopping time $\tau$, the stopped integral satisfies
$(H\cdot W)_{t\wedge\tau}=\int_0^t1_{[0,\tau]}H\,dW$; a finite-energy
Itô integral is a square-integrable mean-zero martingale and obeys its
isometry. [[thm-stopping-an-ito-integral]] [[thm-ito-integral-process-has-a-continuous-martingale-version]] [[thm-ito-isometry-and-linearity-in-predictable-l2]]

[F4] A stopping time is characterized by
$\{\tau\le t\}\in\mathcal F_t$; for a continuous adapted path its supremum
on $[0,t]$ equals the supremum on rational times together with the endpoint.
[[def-continuous-time-stopping-time]] [[lem-rat-embeds-dense]]

[F5] Fatou's lemma passes a pointwise almost-sure limit of nonnegative
variables to the lower bound on their expectations. [[thm-fatou-lemma]]

[F6] The scalar Itô integral and multidimensional Itô formula carry the
Axiom of Choice; no additional choice is made here. [[def-axiom-of-choice]]

## Proof

1.1 If $T=0$, then $|X_0|^p\le2^{p/2}(1+|X_0|^p)$ and the result follows. For $T>0$, put $V(x)=(1+|x|^2)^{p/2}$. It is $C^2$ and $\partial_iV=p x_i(1+|x|^2)^{p/2-1},\quad \partial_{ij}V=p\delta_{ij}(1+|x|^2)^{p/2-1}+p(p-2)x_ix_j(1+|x|^2)^{p/2-2}.$ The gradient bound follows from $|x|\le(1+|x|^2)^{1/2}$. The Hessian is a nonnegative multiple of $I$ plus a nonnegative multiple of $xx^{\mathsf T}$, so it is positive semidefinite. Its eigenvalues orthogonal to $x$ are $p(1+|x|^2)^{p/2-1}$, and the eigenvalue in the $x$ direction is $p(1+|x|^2)^{p/2-2}(1+(p-1)|x|^2)$; each is at most $p(p-1)(1+|x|^2)^{p/2-1}$ because $p\ge2$. At $x=0$ all eigenvalues equal $p$, which obeys the same bound. [given, algebra]

1.2 By [F1], $E\sup_{t\le T}|X_t|^2<\infty$, so [F2] makes $b(\cdot,X_\cdot)$ progressive and $\sigma(\cdot,X_\cdot)$ predictable. The growth bound gives $E\int_0^T\bigl(|b(s,X_s)|^2+\|\sigma(s,X_s)\|_F^2\bigr)ds\le2K^2T(1+E\sup_{s\le T}|X_s|^2)<\infty.$ Thus the drift-square integral and diffusion energy are finite almost surely; pathwise Cauchy–Schwarz gives $\int_0^T|b(s,X_s)|ds\le\sqrt T(\int_0^T|b(s,X_s)|^2ds)^{1/2}<\infty$. Hence $X$ satisfies the continuous Brownian Itô-process hypotheses in [F2]. [F1, F2, given]

1.3 For $R>0$ define $\tau_R:=\inf\{s\in[0,T]:|X_s|\ge R\}\wedge T$, with $\inf\emptyset=+\infty$. For $t<T$, $\{\tau_R\le t\}=\{\sup_{s\le t}|X_s|\ge R\}$; by continuity and [F4] that supremum is measurable using the countable rational times in $[0,t]$ and $t$, all of which are $\mathcal F_t$-measurable. For $t\ge T$ the event is all of $\Omega$, so $\tau_R$ is a stopping time. On $[0,\tau_R]$ the process is bounded by $R$ unless $|X_0|\ge R$, in which case $\tau_R=0$. Hence $1_{[0,\tau_R]}\nabla V(X_s)^{\mathsf T}\sigma(s,X_s)$ is predictable and has finite energy on $[0,T]$. [F1, F2, F4, given]

2.1 Let $\mathcal L_sV(x)=b(s,x)\cdot\nabla V(x)+\tfrac12\operatorname{tr}(\sigma\sigma^{\mathsf T}(s,x)D^2V(x))$. The inequality $1+|x|\le\sqrt{2(1+|x|^2)}$ follows by squaring and using $(|x|-1)^2\ge0$, so the drift term has absolute value at most $\sqrt2\,pK V(x)$. For each diffusion column $\sigma_{\cdot k}$, positive semidefiniteness and the operator-norm bound give $0\le\sigma_{\cdot k}^{\mathsf T}D^2V\,\sigma_{\cdot k}\le\|D^2V\|_{op}|\sigma_{\cdot k}|^2$. Summing over the finite $m$ columns yields $0\le\tfrac12\operatorname{tr}(\sigma\sigma^{\mathsf T}D^2V)\le p(p-1)K^2V(x)$. Thus $\mathcal L_sV(x)\le C_pV(x)$. [given, step 1.1, algebra]

3.1 Apply the multidimensional Itô formula [F2] to $V(X)$ and evaluate the common continuous identity at $t\wedge\tau_R$. By the stopping identity and mean-zero finite-energy martingale facts in [F3], the stopped stochastic integral has expectation zero. With $g_R(t):=EV(X_{t\wedge\tau_R})$, nonnegativity of $V$ and step 2.1 therefore give $g_R(t)=EV(X_0)+E\int_0^t1_{[0,\tau_R]}(s)\mathcal L_sV(X_s)ds\le EV(X_0)+C_p\int_0^tg_R(s)ds.$ The right side is finite: before stopping $X$ is bounded, and on paths stopped at zero the value is $X_0$ with finite $p$th moment. [F2, F3, step 2.1, step 1.2, step 1.3]

4.1 Set $H_R(t)=EV(X_0)+C_p\int_0^tg_R(s)ds$. By step 3.1, $g_R\le H_R$; also $H_R$ is absolutely continuous and $H_R'(t)=C_pg_R(t)\le C_pH_R(t)$ almost everywhere. Thus $(e^{-C_pt}H_R(t))'\le0$ almost everywhere, giving $g_R(t)\le EV(X_0)e^{C_pt}$. [step 3.1, algebra]

5.1 Take $R=n\in\mathbb N$ and let $n\to\infty$. Every continuous path on $[0,T]$ is bounded, so for each fixed $t$ one has $X_{t\wedge\tau_n}\to X_t$ almost surely. Fatou's lemma [F5] and step 4.1 give $EV(X_t)\le EV(X_0)e^{C_pT}$. Also $V(X_0)=(1+|X_0|^2)^{p/2}\le2^{p/2}(1+|X_0|^p)$ and $|X_t|^p\le V(X_t)$. Taking the supremum over $0\le t\le T$ proves the stated moment bound. AC is only the inherited interface assumption [F6]. [F5, F6, step 4.1, given] ∎

## Remarks

The proof establishes $\sup_{t\le T}E|X_t|^p$ for each $p$ separately.
For $p=2$, the preceding strong well-posedness theorem gives the stronger
path-sup bound. No density, ellipticity, forward Kolmogorov, or reversal
claim is used.

## Sources

Van Handel, Chapter 5.1, Theorems 5.1.3 and 5.1.5, and van der Vaart,
Section 7.1, Theorem 7.8, provide independent stopped second-moment and
strong-solution contexts. Neither is used to assert the all-real-$p$ result:
the Lyapunov calculation, stopping, martingale expectation, Gronwall bound,
and Fatou passage are proved here.
