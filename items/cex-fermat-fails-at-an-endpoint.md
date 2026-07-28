---
id: cex-fermat-fails-at-an-endpoint
kind: counterexample
title: "The identity on $[0,1]$ attains its maximum at $1$ and its minimum at $0$ with derivative $1$ at both, so Fermat's theorem genuinely needs the extremum to be at an interior point"
status: published
origin: session
deps: [thm-fermat-interior-extremum, def-local-extremum, def-derivative, def-interior-closure-boundary-r, def-max-min, def-interval, def-neighbourhood-r, def-function-limit, cor-of-one-positive, def-limit-point-r]
justified_by: []
aliases: []
landmark: false
short: "Fermat needs an interior point"
proof_strategy: direct
verification:
  audited: 2026-07-28
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Fermat's theorem (stationary points) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Fermat%27s_theorem_(stationary_points)"
    - title: "Maximum and minimum (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Maximum_and_minimum"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** let $A \subseteq \mathbb{R}$, let $f : A \to \mathbb{R}$ and
let $c \in A$ be a limit point of $A$ at which $f$ has a local extremum
([[def-local-extremum]]) and is differentiable ([[def-derivative]]). Then
$f'(c) = 0$.

That is [[thm-fermat-interior-extremum]] with the hypothesis "$c$ is interior to
$A$" deleted and replaced by the weaker one needed for $f'(c)$ to be a defined
symbol at all. It is false: the identity on $[0,1]$ attains a greatest and a
least value, both at points of the domain that are not interior to it, and its
derivative is $1$ everywhere.

## Facts & Assumptions

**Given:** The set $A := [0,1]$ ([[def-interval]]) and the function $f : A \to \mathbb{R}$, $f(x) := x$.

[L1] Derivative of the identity ([[def-derivative]], [[def-function-limit]]): every point of the order-convex set $[0,1]$, which has at least two elements, is a limit point of it ([[def-limit-point-r]]); and the difference quotient of $f$ at any $c \in [0,1]$ is $(x-c)/(x-c) = 1$ at every $x \in [0,1]$ with $x \ne c$, a constant function whose limit at $c$ is $1$. So $f$ is differentiable at every $c \in [0,1]$ with $f'(c) = 1$.

[L2] Local extrema ([[def-local-extremum]]): $f$ has a local maximum at $c \in A$ when $f(x) \le f(c)$ for every $x \in A \cap N_{\varepsilon}(c)$ for some real $\varepsilon > 0$, and a local minimum with the inequality reversed; a value that is a greatest value of $f$ over the whole of $A$ is a local maximum, and a least value is a local minimum (claim 4 of its body); and $c$ is interior to $A$ exactly when $N_{\varepsilon}(c) \subseteq A$ for some real $\varepsilon > 0$ ([[def-interior-closure-boundary-r]], [[def-neighbourhood-r]]).

[L3] Maximum and minimum of a set ([[def-max-min]]): $m$ is a maximum of $S$ when $m \in S$ and $s \le m$ for every $s \in S$, and a minimum when $m \in S$ and $m \le s$ for every $s \in S$.

[L4] Fermat's interior extremum theorem ([[thm-fermat-interior-extremum]]) additionally requires $c$ to be interior to $A$.

[L5] $0 \ne 1$, since $0 < 1$ ([[cor-of-one-positive]]).

## Counterexample

**Proof technique:** direct.

1.1 By [L1] the function $f$ is differentiable at every $c \in [0,1]$, and $f'(c) = 1$; in particular $f'(0) = f'(1) = 1$, and every point of $[0,1]$ is a limit point of $[0,1]$. [L1]

1.2 Every $x \in A$ satisfies $0 \le x \le 1$, so $f(x) = x \le 1 = f(1)$ and $f(x) = x \ge 0 = f(0)$; and $0, 1 \in A$. So $f(1)$ is a maximum of $f[A]$ and $f(0)$ is a minimum of $f[A]$ by [L3], and by [L2] the function $f$ has a local maximum at $1$ and a local minimum at $0$, hence a local extremum at each. [L2, L3]

1.3 Neither $1$ nor $0$ is interior to $A$: for every real $\varepsilon > 0$ the point $1 + \varepsilon/2$ lies in $N_{\varepsilon}(1)$ and not in $[0,1]$, and the point $-\varepsilon/2$ lies in $N_{\varepsilon}(0)$ and not in $[0,1]$. So no $N_{\varepsilon}$ around either point is contained in $A$. [L2]

2.1 The refuted claim therefore fails at $c := 1$: the point $1$ lies in $A$ and is a limit point of $A$ by step 1.1, $f$ has a local extremum there by step 1.2 and is differentiable there by step 1.1, and yet $f'(1) = 1 \ne 0$ by [L5]. The same holds at $c := 0$. [step 1.1, step 1.2, L5]

3.1 Nothing in [L4] is contradicted. By step 1.3 neither $0$ nor $1$ is interior to $A$, so the hypothesis of that theorem is not met at either point, and the deleted hypothesis is exactly the one that fails. Indeed no point of $A$ at all carries a vanishing derivative, and consistently with [L4] no interior point of $A$ carries a local extremum: by step 1.2 the only extrema of $f$ over $A$ sit at the two endpoints. [step 1.3, step 2.1, L4] ∎

## Remarks

- **What the endpoint case would need instead.** At $1$ the domain supplies points on the left only, and the difference quotient there is positive, so the most one can conclude is $f'(1) \ge 0$. That one-sided refinement is not stated at this point in the reading order, since nothing here uses it; the point of the witness is only that the two-sided conclusion $f'(c) = 0$ is unavailable.

- **The witness is not delicate.** Any function increasing on $[0,1]$ and differentiable there whose derivative vanishes at neither endpoint does the same job, and the identity is chosen for having a derivative that can be computed from [[def-derivative]] in one line. The nonvanishing clause has to be said and is not automatic: $x \mapsto x^{3}$ is increasing on $[0,1]$ and differentiable there, and attains its least value at $0$, yet $f'(0) = 0$, so it refutes nothing at the left endpoint. What removing interiority destroys is the *guarantee* that the derivative vanishes, not the possibility. So the failure at an endpoint is the generic situation and not an artefact.

- **Why this matters for Rolle's theorem.** [[thm-rolle]] produces an interior point precisely by ruling this case out: when both extrema sit at the endpoints, the hypothesis $f(a) = f(b)$ forces the function to be constant, and any interior point then serves. Without that hypothesis the endpoint case is exactly the one that survives, and the identity on $[0,1]$ is it.
