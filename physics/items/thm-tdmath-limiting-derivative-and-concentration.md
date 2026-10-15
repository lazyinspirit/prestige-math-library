---
id: thm-tdmath-limiting-derivative-and-concentration
kind: theorem
title: "Limiting derivative and concentration"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 2
deps: ["cor-mean-value-theorem","def-expectation-on-a-finite-probability-space","def-finite-probability-space-and-event","def-natural-logarithm","def-real-exponential-function-and-e","def-variance-and-covariance","thm-derivative-of-exponential","thm-logarithm-derivative-and-integral","thm-tdmath-finite-range-lattice-pressure-limit","thm-exponential-addition-formula","thm-natural-logarithm-laws","thm-chain-rule","thm-algebra-of-derivatives"]
justified_by: []
dependency_roles: {"cor-mean-value-theorem":"mathematical-premise","def-expectation-on-a-finite-probability-space":"mathematical-premise","def-finite-probability-space-and-event":"mathematical-premise","def-natural-logarithm":"mathematical-premise","def-real-exponential-function-and-e":"mathematical-premise","def-variance-and-covariance":"mathematical-premise","thm-derivative-of-exponential":"mathematical-premise","thm-logarithm-derivative-and-integral":"mathematical-premise","thm-tdmath-finite-range-lattice-pressure-limit":"mathematical-premise","thm-exponential-addition-formula":"mathematical-premise","thm-natural-logarithm-laws":"mathematical-premise","thm-chain-rule":"mathematical-premise","thm-algebra-of-derivatives":"mathematical-premise"}
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "David Tong, Statistical Physics, author-hosted complete HTML chapter text"
      url: "https://davidtong.org/teaching/statistical-physics/statmechhtml/S1"
      locator: "Full author-hosted HTML chapter text read; canonical/grand-canonical ensembles §§1.3–1.4 pp.17–30; two-state model §1.2.3 pp.11–14; 1D Ising §5.3.1 pp.156–157."
    - title: "Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics (work in progress, dated 12 October 2026)"
      url: "https://courses.physics.ucsd.edu/2025/Spring/physics210a/LECTURES/STATMECH.pdf"
      locator: "Complete 635-page PDF retrieved; ensembles and traces §§4.2–4.6 pp.192–217; Bose/Fermi models §§5.6–5.7 pp.277–303; 1D Ising §6.2.2 pp.330–333."
---

## Statement

For the lattice models of [[thm-tdmath-finite-range-lattice-pressure-limit]], write $p_L(\gamma)=L^{-d}\log Z_L(\gamma)$ and let $p(\gamma)=\lim_Lp_L(\gamma)$ on an open interval $J\subseteq(0,\infty)$. At finite $L$, use the canonical law $\mathbb P_{\gamma,L}(s):=e^{-\gamma H_L(s)}/Z_L(\gamma)$ and its finite expectation $\mathbb E_{\gamma,L}$. If $p$ is differentiable at $\beta\in J$, then $\mathbb E_{\beta,L}[H_L]/L^d\to e:=-p'(\beta)$. For every $\varepsilon>0$ there are $c>0$ and $L_0$ such that for $L\ge L_0$, $\mathbb P_{\beta,L}(|H_L/L^d-e|\ge\varepsilon)\le2e^{-cL^d}$. No energy-density limit is asserted at a nondifferentiability point.

## Facts & Assumptions

**Given:** As stated in the item.

[A1] $J\subseteq(0,\infty)$ is open; the finite-volume canonical laws use $\mathbb P_{\gamma,L}(s)=e^{-\gamma H_L(s)}/Z_L(\gamma)$; $p_L(\gamma)\to p(\gamma)$ for each $\gamma\in J$; and $p$ is differentiable at the specified $\beta\in J$.

[F1] [[thm-tdmath-finite-range-lattice-pressure-limit]]: $p_L(\gamma)$ converges to finite $p(\gamma)$ for every $\gamma\in J$.

[F2] [[def-finite-probability-space-and-event]] and [[def-expectation-on-a-finite-probability-space]]: the finite-volume canonical weights define probabilities and expectations as finite sums.

[F3] [[def-variance-and-covariance]]: variance is a nonnegative centered second moment.

[F4] [[def-real-exponential-function-and-e]], [[thm-derivative-of-exponential]], [[def-natural-logarithm]], and [[thm-logarithm-derivative-and-integral]]: the exponential is smooth, its derivative is itself, its values are positive by the logarithm inverse convention, and $\log$ differentiates as $1/x$ on positive values. The series definition gives $\exp(0)=1$.

[F5] [[cor-mean-value-theorem]]: if $f$ is continuous on $[a,b]$ and differentiable on $(a,b)$, with $a<b$, then $f(b)-f(a)=f'(c)(b-a)$ for some $c\in(a,b)$.

[F6] [[thm-chain-rule]] and [[thm-algebra-of-derivatives]]: derivatives of compositions, finite sums, products and quotients obey the stated rules; quotients require a nonzero denominator.

[F7] [[thm-exponential-addition-formula]] and [[thm-natural-logarithm-laws]]: $\exp(u+v)=\exp(u)\exp(v)$ for real $u,v$, and logarithms convert positive products and quotients to sums and differences.

## Proof

**Given:** The finite-volume lattice models, their canonical probabilities, pointwise convergence $p_L\to p$ on $J$, and differentiability of $p$ at $\beta$.

1.1 At every $\gamma\in J$, finite differentiation gives $p_L'(\gamma)=-L^{-d}\mathbb E_{\gamma,L}H_L$ and $p_L''(\gamma)=L^{-d}\operatorname{Var}_{\gamma,L}(H_L)\ge0$; these derivatives are continuous since the finite partition sum is smooth and positive. Apply [F5] to $p_L'$ on $[a,b]\subset J$: $p_L'(b)-p_L'(a)=p_L''(c)(b-a)\ge0$, so $p_L'$ is nondecreasing. For $a<b<c$ in $J$, apply [F5] to $p_L$ on $[a,b]$ and $[b,c]$. Their secant slopes are derivative values respectively below and above $b$, hence the left slope is no greater than the right. Rearrangement gives $p_L(b)\le[(c-b)p_L(a)+(b-a)p_L(c)]/(c-a)$, the convexity inequality. Passing this inequality to the pointwise limit proves convexity of $p$. [A1, F2, F3, F4, F5, F6]

1.2 Fix $t>0$ small enough that $\beta\pm t\in J$. Since $\exp'=\exp>0$ and $\exp(0)=1$, [F5] gives $\exp(u)\ge1$ for $u\ge0$. For the upper tail, the pointwise inequality $\mathbf1_{\{H_L\ge L^d(e+\varepsilon)\}}\le e^{t(H_L-L^d(e+\varepsilon))}$ and finite summation give $\mathbb P(H_L/L^d\ge e+\varepsilon)\le\exp\{L^d[p_L(\beta-t)-p_L(\beta)-t(e+\varepsilon)]\}$. Differentiability of $p$ and $e=-p'(\beta)$ imply $p(\beta-t)=p(\beta)+te+o(t)$; choose $t$ so $|p(\beta-t)-p(\beta)-te|\le t\varepsilon/4$ and $|p(\beta+t)-p(\beta)+te|\le t\varepsilon/4$. Thus the upper bracket's limit is at most $-3t\varepsilon/4$. Pointwise convergence at $\beta-t$ and $\beta$ then makes the bracket at most $-t\varepsilon/2$ for all sufficiently large $L$. [A1, F1, F2, F4, F5, F7]

2.1 For any small $h>0$ with $\beta\pm h\in J$, apply [F5] to $p_L$ on $[\beta-h,\beta]$ and $[\beta,\beta+h]$. Each secant slope is a value of $p_L'$ on its respective open interval, so the monotonicity in step 1.1 gives $[p_L(\beta)-p_L(\beta-h)]/h\le p_L'(\beta)\le[p_L(\beta+h)-p_L(\beta)]/h$. Take lower and upper limits in $L$, use [F1], then let $h\downarrow0$; differentiability of $p$ forces $p_L'(\beta)\to p'(\beta)$. The identity in step 1.1 yields the claimed mean limit. [A1, F1, F5, step 1.1]

2.2 For the lower tail use $\mathbf1_{\{H_L\le L^d(e-\varepsilon)\}}\le e^{-t(H_L-L^d(e-\varepsilon))}$; its expectation is $\exp\{L^d[p_L(\beta+t)-p_L(\beta)+t(e-\varepsilon)]\}$. For the same $t$ chosen in step 1.2, the bracket has limit at most $-3t\varepsilon/4$; increasing $L_0$ therefore makes this at most $e^{-L^dt\varepsilon/2}$. Adding both tail bounds yields the result with $c=t\varepsilon/2$. [A1, F1, F2, F4, F7, step 1.2]

3.1 Steps 1.2–2.2 bound the two tails whose union is $\{|H_L/L^d-e|\ge\varepsilon\}$; the theorem is conditional on differentiability of $p$ and does not assert convergence of second derivatives or equivalence for arbitrary observables. [A1, step 1.2, step 2.2] ∎
