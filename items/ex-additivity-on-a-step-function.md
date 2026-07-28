---
id: ex-additivity-on-a-step-function
kind: example
title: "A step function integrated by additivity over subintervals, and the same value from the definition"
status: published
origin: session
deps: [thm-additivity-over-subintervals, lem-changing-a-function-at-finitely-many-points, lem-integral-elementary-bounds, thm-monotone-implies-integrable, def-monotone-function, def-darboux-sums, def-partition-and-refinement, def-oriented-integral, def-darboux-integral, def-finite-sum, lem-finite-sum-laws, def-interval, def-infimum, def-max-min, def-ordered-field, def-complete-ordered-field]
justified_by: []
aliases: []
landmark: false
short: "step function: $\\int_0^2 f = 4$"
proof_strategy: direct
verification:
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  precheck: pass
  audited: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Step function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Step_function"
    - title: "Riemann integral (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Riemann_integral"
pipeline_run: null
---

## Example

Let $f : [0,2] \to \mathbb{R}$ be

$$f(x) \;:=\; \begin{cases} 1 & 0 \le x < 1, \\ 3 & 1 \le x \le 2. \end{cases}$$

Then $f$ is integrable on $[0,2]$ and

$$\int_0^2 f \;=\; 1 + 3 \;=\; 4 .$$

Two routes are carried out below. The first splits at the jump with
[[thm-additivity-over-subintervals]] and evaluates each piece with
[[lem-changing-a-function-at-finitely-many-points]] and the constant case of
[[lem-integral-elementary-bounds]]. The second computes lower and upper Darboux
sums directly on a three-point partition and squeezes.

**Why this is the smallest interesting example.** The jump sits at the interior
point $1$, which is a partition point of both routes, and a partition point lies
in **two** subintervals ([[def-partition-and-refinement]]). That is exactly the
case singled out in the proof of
[[lem-changing-a-function-at-finitely-many-points]], and it is why the value of
$f$ at the single point $1$ is irrelevant to both the integrability and the value
while the *upper* sums still see it.

## Facts & Assumptions

**Given:** The function $f$ above on $[0,2]$, and a real $\eta$ with $0 < \eta < 1$.

[L1] A monotone function on a closed bounded interval with distinct endpoints is bounded and integrable there ([[thm-monotone-implies-integrable]], [[def-monotone-function]], [[def-darboux-integral]]).

[L2] For $0 < c < 2$: $f$ is integrable on $[0,2]$ if and only if it is integrable on $[0,c]$ and on $[c,2]$, and then $\int_0^2 f = \int_0^c f + \int_c^2 f$ ([[thm-additivity-over-subintervals]], [[def-oriented-integral]]).

[L3] Changing an integrable function at finitely many points changes neither its integrability nor its integral ([[lem-changing-a-function-at-finitely-many-points]]).

[L4] $\int_p^q c = c(q-p)$ for a constant $c$, and the five-term chain $L(u,P) \le \underline{\int} u \le \overline{\int} u \le U(u,P)$ holds for every partition ([[lem-integral-elementary-bounds]], [[def-darboux-integral]]).

[L5] For a partition $P = (n,t)$ and bounded $u$: $L(u,P) = \sum_{i<n}m_i\Delta_i$ and $U(u,P) = \sum_{i<n}M_i\Delta_i$ with $m_i = \inf u[I_i]$, $M_i = \sup u[I_i]$, and a set with a least element has it as its infimum ([[def-darboux-sums]], [[def-finite-sum]], [[lem-finite-sum-laws]], [[def-infimum]], [[def-max-min]], [[def-partition-and-refinement]]).

[L6] Ordered-field arithmetic: the order is total and transitive, and a real that is $\le 4 + 2\eta$ for every $\eta$ in $(0,1)$ is $\le 4$ ([[def-ordered-field]], [[def-complete-ordered-field]], [[def-interval]]).

## Verification

**Proof technique:** direct.

1.1 $f$ is nondecreasing on $[0,2]$: for $x \le y$ the only possibility not giving $f(x) = f(y)$ is $x < 1 \le y$, where $f(x) = 1 < 3 = f(y)$. Hence $f$ is bounded and integrable on $[0,2]$, and likewise on $[0,1]$ and on $[1,2]$, by [L1]. [given, L1]

1.2 **Second route.** Let $P_{\eta}$ be the partition of $[0,2]$ with point set $\{0,\ 1-\eta,\ 1,\ 2\}$, so $n = 3$ with $\Delta_0 = 1-\eta$, $\Delta_1 = \eta$ and $\Delta_2 = 1$. [given, L5, construct]

2.1 **First route, the piece $[0,1]$.** The constant function $1$ on $[0,1]$ agrees with $f$ at every point of $[0,1]$ except $x = 1$, a single point; so by [L3] and [L4], $\int_0^1 f = \int_0^1 1 = 1\cdot(1-0) = 1$. [step 1.1, L3, L4]

2.2 **The piece $[1,2]$.** There $f$ is the constant $3$, so $\int_1^2 f = 3\cdot(2-1) = 3$ by [L4]. [step 1.1, L4]

2.3 On $I_0 = [0,1-\eta]$, $f$ is constantly $1$, so $m_0 = M_0 = 1$. On $I_1 = [1-\eta,1]$, $f$ takes the value $1$ at every point below $1$ and $3$ at $1$, so $m_1 = 1$ and $M_1 = 3$ by [L5]. On $I_2 = [1,2]$, $f$ is constantly $3$, so $m_2 = M_2 = 3$. [step 1.2, given, L5]

3.1 By [L2] with $c := 1$, $\int_0^2 f = \int_0^1 f + \int_1^2 f = 1 + 3 = 4$. [step 1.1, step 2.1, step 2.2, L2]

3.2 Hence $L(f,P_{\eta}) = 1(1-\eta) + 1\cdot\eta + 3\cdot 1 = 4$ and $U(f,P_{\eta}) = 1(1-\eta) + 3\eta + 3\cdot1 = 4 + 2\eta$, by [L5]. [step 2.3, L5]

4.1 By [L4] the number $\int_0^2 f$ lies between $L(f,P_\eta) = 4$ and $U(f,P_\eta) = 4+2\eta$ for every $\eta \in (0,1)$, so $4 \le \int_0^2 f \le 4$ by [L6]; the second route agrees with step 3.1. [step 1.1, step 3.1, step 3.2, L4, L6] ∎

## Remarks

- **The two sums of $P_{\eta}$ are not symmetric, and that is a statement about these partitions.** For each $\eta \in (0,1)$ the lower sum $L(f,P_{\eta})$ is exactly $4$ while the upper sum is $4 + 2\eta > 4$, so this family already locates the integral exactly from below while its upper sums only approach it. Nothing is claimed here about an arbitrary partition: a partition whose points do not include $1$ has a subinterval on which $f$ takes both values, and its lower sum is then strictly below $4$.

- **The value at the jump is irrelevant to the integral, but not to the sums.** Replacing $f(1) = 3$ by any real leaves $f$ integrable with the same integral, by [[lem-changing-a-function-at-finitely-many-points]]. What it changes is which partitions realise the extremes: with $f(1) := 1$ the subinterval $[1-\eta,1]$ carries $m_1 = M_1 = 1$, while $[1,2]$ now carries $m_2 = 1$ and $M_2 = 3$, so $L(f,P_{\eta}) = 2$ and $U(f,P_{\eta}) = 4$ and the asymmetry moves to the other side. The integral is $4$ either way.

- **Additivity is what makes the first route short.** Without [[thm-additivity-over-subintervals]] the only route is the second one, which needs the Darboux sums of a function that is not constant on any partition containing the jump in the interior of a subinterval.
