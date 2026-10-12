---
id: lem-gr-null-position-vector-forces-null-velocity
kind: lemma
title: "A causal curve in a convex normal ball whose position vector is null at
  one time has null velocity almost everywhere up to that time"
status: draft
origin: session
domain: mathematics
dependency_level: 17
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps:
  - thm-gr-normal-neighborhood-causal-cone
  - lem-gr-position-vector-differential
  - lem-gr-observer-pairing-with-future-causal-vectors
  - def-gr-normal-neighborhoods-and-position-vectors
  - def-gr-causal-curves-and-reachability
  - def-gr-timelike-worldline-and-proper-time
  - thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions
  - thm-a-lipschitz-function-after-an-absolutely-continuous-function-is-absolutely-continuous
  - thm-chain-rule-for-total-derivatives
  - def-gr-smooth-lorentzian-objects
  - def-interval
  - lem-gr-normal-neighborhood-length-monotonicity
  - lem-gr-temporal-functions-and-time-functions
  - lem-q-and-irrationals-dense-r
  - thm-rationals-countable
  - def-absolutely-continuous-function
  - thm-absolutely-continuous-functions-have-integrable-derivatives
dependency_roles:
  thm-gr-normal-neighborhood-causal-cone: mathematical-premise
  lem-gr-position-vector-differential: mathematical-premise
  lem-gr-observer-pairing-with-future-causal-vectors: mathematical-premise
  def-gr-normal-neighborhoods-and-position-vectors: mathematical-premise
  def-gr-causal-curves-and-reachability: mathematical-premise
  def-gr-timelike-worldline-and-proper-time: mathematical-premise
  thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions: mathematical-premise
  thm-a-lipschitz-function-after-an-absolutely-continuous-function-is-absolutely-continuous: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-interval: mathematical-premise
  lem-gr-normal-neighborhood-length-monotonicity: mathematical-premise
  lem-gr-temporal-functions-and-time-functions: mathematical-premise
  lem-q-and-irrationals-dense-r: mathematical-premise
  thm-rationals-countable: mathematical-premise
  def-absolutely-continuous-function: mathematical-premise
  thm-absolutely-continuous-functions-have-integrable-derivatives: mathematical-premise
sources:
  references:
    - title: "E. Minguzzi, Lorentzian causality theory, Living Reviews in Relativity
        22 (2019), article 3: the equality analysis in the proof of Theorem 2.9,
        printed pp. 29-30"
      url: "https://inspirehep.net/files/7a575d682fd15aaad8463a778fac1609"
    - title: "P. T. Chrusciel, Elements of causality theory, arXiv:1110.6706 (2011):
        the identity (2.4.13) and its equality case, Corollary 2.4.10 printed
        pp. 23-24"
      url: "https://arxiv.org/pdf/1110.6706"
verification:
  precheck: pass
---

## Statement

Let $(M,g,N)$ be a time-oriented smooth Lorentzian four-manifold, let
$p\in M$ and let $C$ be a strictly convex normal ball around $p$ satisfying
the hypotheses of [[thm-gr-normal-neighborhood-causal-cone]], with the
exponential chart $u$, the position vector $P(p,q)$ and
$D_p^2(q)=g_p(\exp_p^{-1}q,\exp_p^{-1}q)$. Let $\sigma:[0,1]\to C$ be a
future causal curve with $\sigma(0)=p$ and suppose that
$D_p^2(\sigma(t_0))=0$ for some $t_0\in(0,1]$. Then:

**(a)** $D_p^2(\sigma(t))=0$ for every $t\in[0,t_0]$, and
$u^0(\sigma(t))\ge0$;

**(b)** the velocity $\sigma'(t)$ is null (or does not exist) for almost
every $t\in[0,t_0]$, and consequently $L_g(\sigma|_{[0,t_0]})=0$.

## Facts & Assumptions

**Given:** A convex normal ball $C$ as in [[thm-gr-normal-neighborhood-causal-cone]], a future causal curve $\sigma:[0,1]\to C$ from $p$, and $t_0\in(0,1]$ with $D_p^2(\sigma(t_0))=0$.

[L1] $D_p^2\circ\sigma\le0$ on $[0,1]$ by [[thm-gr-normal-neighborhood-causal-cone]] clause (a). The additional coordinate hypothesis in the Statement makes $u^0$ temporal on $C$; hence $u^0\circ\sigma$ is nondecreasing and starts at zero, so $u^0\circ\sigma\ge0$ ([[lem-gr-temporal-functions-and-time-functions]] clauses (a)-(b)).

[L2] The function $t\mapsto D_p^2(\sigma(t))$ is AC with derivative $2g_{\sigma(t)}(P(p,\sigma(t)),\sigma'(t))$ at almost every $t$ ([[lem-gr-position-vector-differential]] clause (a), [[thm-a-lipschitz-function-after-an-absolutely-continuous-function-is-absolutely-continuous]], [[thm-chain-rule-for-total-derivatives]]).

[L3] Reverse Cauchy–Schwarz: if $T,z$ are future causal and nonzero with $g(T,z)=0$, then both are null and positive multiples of one another ([[lem-gr-observer-pairing-with-future-causal-vectors]]).

[L4] If an AC function is identically zero on an interval, then its derivative vanishes almost everywhere on that interval ([[thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions]]).

[L5] The length of the restriction is $L_g(\sigma|_{[0,t_0]})=\int_0^{t_0}\sqrt{-g(\sigma',\sigma')}$ ([[def-gr-timelike-worldline-and-proper-time]]).

[L6] If $f$ is absolutely continuous on an interval and $c\in\mathbb R$, then $f'=0$ almost everywhere on $f^{-1}(c)$. At a differentiability point $s$ of that level set with $f'(s)\ne0$, the definition of derivative implies that $f(u)\ne c$ for every sufficiently close $u\ne s$, so $s$ is isolated in the level set. The isolated points are countable: assign to each one the first rational-endpoint open interval in a fixed enumeration that contains it and no other level-set point; distinct isolated points receive distinct intervals. The nondifferentiability set of an absolutely continuous function and this countable set are null, proving the claim. Applying this coordinatewise on a countable cover of the preimage of a point gives $\sigma'=0$ almost everywhere on $\{s:\sigma(s)=p\}$ ([[def-absolutely-continuous-function]], [[thm-absolutely-continuous-functions-have-integrable-derivatives]], [[lem-q-and-irrationals-dense-r]], [[thm-rationals-countable]]).

## Proof

**Proof technique:** direct.

1.1 (Propagation of nullity.) Suppose $D_p^2(\sigma(s_0))<0$ for some $s_0\in(0,t_0)$. Applying [[thm-gr-normal-neighborhood-causal-cone]] clause (a) and the monotonicity argument of its proof to the sub-curve $\sigma|_{[s_0,t_0]}$ (or directly [[lem-gr-normal-neighborhood-length-monotonicity]] clause (a), whose hypothesis is exactly that the position vector at $s_0$ is future timelike) gives $D_p^2(\sigma(t_0))<0$, contradicting the hypothesis. Hence $D_p^2(\sigma(t))\ge0$ fails nowhere: by [L1], $D_p^2(\sigma(t))=0$ for all $t\in(0,t_0)$; with $D_p^2(p)=0$ this gives (a). [L1, given, algebra]

2.1 (Derivative vanishes and the velocity is null.) By step 1.1 the AC function $t\mapsto D_p^2(\sigma(t))$ is identically zero on $[0,t_0]$; by [L2] and [L4] its derivative vanishes almost everywhere, so $g_{\sigma(t)}(P(p,\sigma(t)),\sigma'(t))=0$ almost everywhere. At almost every parameter where $\sigma(t)\ne p$, the vector $P(p,\sigma(t))$ is nonzero future null by [L1], the cone theorem and radial character preservation; the curve velocity is future causal nonzero almost everywhere. Reverse Cauchy-Schwarz [L3] then implies that $\sigma'(t)$ is null at almost every such parameter. On the remaining level set $\{t:\sigma(t)=p\}$, [L6] gives $\sigma'(t)=0$ almost everywhere. Thus the velocity is null or does not exist almost everywhere on $[0,t_0]$. [step 1.1, L1, L2, L3, L4, L6, given]

3.1 (Zero length.) By step 2.1 the integrand $\sqrt{-g(\sigma',\sigma')}$ in [L5] vanishes almost everywhere on $[0,t_0]$; hence $L_g(\sigma|_{[0,t_0]})=0$. This proves (b). [step 2.1, L5, algebra]

4.1 Steps 1.1, 2.1 and 3.1 prove (a) and (b). [step 1.1, step 2.1, step 3.1] ∎

## Remarks

- **The non-vanishing hypothesis is not needed here.** The lemma uses the propagation argument to establish that the displacement is identically zero, and then differentiates that constant function; it does not need the rigidity statement of
  [[thm-gr-normal-neighborhood-causal-cone]] clause (c).

- **Use.** The lemma is used in [[lem-gr-convex-normal-causality]] to rule
  out null endpoints for causal curves containing a genuinely timelike
  piece.
