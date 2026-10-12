---
id: thm-gr-limit-curve-two-endpoints
kind: theorem
title: "Two-endpoint limit curve theorem: bounded lengths give joining limits, unbounded lengths give two inextendible tails with the closure relation"
status: draft
origin: session
domain: mathematics
dependency_level: 21
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: case-analysis
deps: [lem-gr-basic-limit-curve, lem-gr-strong-causality-compact-length-bound, lem-gr-causal-curve-conventions, thm-gr-auxiliary-complete-riemannian-metric, def-gr-causal-curves-and-reachability, lem-gr-causal-curve-calculus, def-gr-causal-conditions-and-global-hyperbolicity, def-riemannian-distance-on-a-connected-manifold, thm-the-riemannian-distance-topology-is-the-manifold-topology, def-metric-ball, def-countable-choice, def-dependent-choice, def-continuity-real, def-interval, def-c-r-and-smooth-maps-between-smooth-manifolds, thm-riemannian-distance-is-a-metric]
dependency_roles:
  lem-gr-basic-limit-curve: mathematical-premise
  lem-gr-strong-causality-compact-length-bound: mathematical-premise
  lem-gr-causal-curve-conventions: mathematical-premise
  thm-gr-auxiliary-complete-riemannian-metric: mathematical-premise
  def-gr-causal-curves-and-reachability: mathematical-premise
  lem-gr-causal-curve-calculus: mathematical-premise
  def-gr-causal-conditions-and-global-hyperbolicity: mathematical-premise
  def-riemannian-distance-on-a-connected-manifold: mathematical-premise
  thm-the-riemannian-distance-topology-is-the-manifold-topology: mathematical-premise
  def-metric-ball: mathematical-premise
  def-countable-choice: mathematical-premise
  def-dependent-choice: mathematical-premise
  def-continuity-real: mathematical-premise
  def-interval: mathematical-premise
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
  thm-riemannian-distance-is-a-metric: mathematical-premise
sources:
  references:
    - title: "E. Minguzzi, Limit curve theorems in Lorentzian geometry, arXiv:0712.3942v2: Theorem 3.1(2) with full proof, statements printed pp. 11-13 and proof pp. 14-17, and Lemmas 2.5-2.7 printed pp. 6-8"
      url: "https://arxiv.org/abs/0712.3942"
    - title: "E. Minguzzi, Lorentzian causality theory, Living Reviews in Relativity 22 (2019), article 3: limit curves, section 2.11 printed pp. 45-49; non-total imprisonment, Theorem 2.80 printed p. 58"
      url: "https://inspirehep.net/files/7a575d682fd15aaad8463a778fac1609"
verification:
  precheck: pass
---

## Statement

Assume the Axioms of Countable Choice and Dependent Choice
([[def-countable-choice]], [[def-dependent-choice]]). Let $(M,g,N)$ be a
time-oriented smooth Lorentzian four-manifold and let $h$ be the auxiliary
metric of [[thm-gr-auxiliary-complete-riemannian-metric]], so that
$(M,d_h)$ is complete and closed $d_h$-bounded sets are compact. Let
$$\alpha_k:[0,b_k]\to M,\qquad 0<b_k<\infty,$$
be future causal curves ([[def-gr-causal-curves-and-reachability]])
parametrized by $h$-arclength, $\ell_h(\alpha_k|_{[s,t]})=t-s$ for
$0\le s\le t\le b_k$, with $\alpha_k(0)\to x\in M$ and
$\alpha_k(b_k)\to z\in M$. Passing to a subsequence, let
$b:=\lim_kb_k\in[0,\infty]$. Then:

**(i) Bounded case.** If $b<\infty$, there is a subsequence and a future causal
curve $\alpha:[0,b]\to M$ with $\alpha(0)=x$, $\alpha(b)=z$ and
$d_h(\alpha(s),\alpha(t))\le t-s$ for $s\le t$, such that the subsequence
converges to $\alpha$ uniformly in $d_h$ on $[0,b]$. If $b=0$ then $x=z$ and
$\alpha$ is the constant curve at $x$.

**(ii) Unbounded case.** If $b=\infty$, there are a future-inextendible future
causal curve $\alpha^+:[0,\infty)\to M$ with $\alpha^+(0)=x$ and a
past-inextendible future causal curve $\alpha^-:(-\infty,0]\to M$ with
$\alpha^-(0)=z$, such that a subsequence converges to $\alpha^+$ uniformly on
every compact subinterval of $[0,\infty)$ and to $\alpha^-$ uniformly on every
compact subinterval of $(-\infty,0]$ (where $\alpha^-$ is the limit of the
curves $s\mapsto\alpha_k(b_k+s)$, $s\le0$, for large $k$). Moreover for all
$t_+\ge0$ and $t_-\le0$ there are parameters $u_k\le v_k$ with
$u_k\to\alpha^+(t_+)$ and $v_k\to\alpha^-(t_-)$; in particular
$(\alpha^+(t_+),\alpha^-(t_-))$ lies in the closure of the causal relation in
the strong sense of [[def-gr-causal-curves-and-reachability]] clause (c):
there exist sequences $u_j\le v_j$ with $u_j\to\alpha^+(t_+)$ and
$v_j\to\alpha^-(t_-)$.

**(iii) Coincident endpoints.** If $x=z$, then in case (i) with $b>0$ the
curve $\alpha$ is a nonconstant closed future causal curve through $x$
($\alpha(0)=\alpha(b)=x$), and in case (ii) the concatenation $\gamma$ of
$\alpha^-$ and $\alpha^+$ is an inextendible future causal curve
$\gamma:\mathbb R\to M$ with $\gamma(0)=x$.

**(iv) Imprisonment.** Let $(M,g,N)$ be strongly causal
([[def-gr-causal-conditions-and-global-hyperbolicity]] clause (b)) and
suppose all images $\alpha_k([0,b_k])$ are contained in one compact set $K$.
Then $b\le L(K)<\infty$ where $L(K)$ is the length bound of
[[lem-gr-strong-causality-compact-length-bound]]; in particular the case
$b=\infty$ is excluded.

## Facts & Assumptions

**Given:** Countable and dependent choice, the Lorentzian manifold, the auxiliary metric $h$, and the arclength-parametrized sequence $\alpha_k$ with its endpoint limits $x,z$ and the value $b=\lim_kb_k$.

[L1] The basic limit curve lemma: for a sequence of future causal $h$-arclength-parametrized curves defined on intervals containing $[0,T]$ with initial points converging, a subsequence converges uniformly in $d_h$ on $[0,T]$ to a future causal curve satisfying (a1)-(a4) there; for intervals eventually containing $[0,n]$ for every $n$, a diagonal subsequence converges on every compact subinterval of $[0,\infty)$ and the limit is future-inextendible; the same holds in the time-reversed orientation for the past side ([[lem-gr-basic-limit-curve]] clauses (a) and (b)).

[L2] For $s<t$ inside the domain of a future causal curve $\beta$, the restriction $\beta|_{[s,t]}$ is a future causal curve from $\beta(s)$ to $\beta(t)$; hence $\beta(s)\le\beta(t)$ ([[lem-gr-causal-curve-calculus]] clause (a), [[def-gr-causal-curves-and-reachability]] clause (c)).

[L3] Concatenation of two future causal curves at a common endpoint is a future causal curve; a curve that is both future- and past-inextendible is inextendible ([[lem-gr-causal-curve-calculus]] clause (d), [[def-gr-causal-curves-and-reachability]] clause (d), [[lem-gr-causal-curve-conventions]] clause (d)).

[L4] $d_h$ is a metric inducing the manifold topology; $d_h(\beta(s),\beta(t))\le\ell_h(\beta|_{[s,t]})$ for locally absolutely continuous $\beta$, with equality for $h$-arclength parametrizations ([[def-riemannian-distance-on-a-connected-manifold]], [[thm-riemannian-distance-is-a-metric]], [[thm-the-riemannian-distance-topology-is-the-manifold-topology]]).

[L5] In a strongly causal spacetime, causal curves with image in the compact set $K$ have $h$-length at most $L(K)$, and $h$-arclength-parametrized curves with image in $K$ have domain length at most $L(K)$ ([[lem-gr-strong-causality-compact-length-bound]]).

## Proof

**Proof technique:** case-analysis.

1.1 (Preparation.) Since $b_k\to b\in(0,\infty]$ in the cases below, for every fixed $T<b$ the interval $[0,T]$ is contained in $[0,b_k]$ for all large $k$, and for the past side $[-T,0]\subseteq[-b_k,0]$ for all large $k$. We work with subsequences obtained by the diagonal procedure of [L1] and do not relabel beyond that. [L1, given, choose]

1.2 (Imprisonment.) Assume $(M,g,N)$ strongly causal and $\alpha_k([0,b_k])\subseteq K$ with $K$ compact. By [L5], $\ell_h(\alpha_k)\le L(K)$ for every $k$; since the curves are $h$-arclength-parametrized, $b_k=\ell_h(\alpha_k)\le L(K)$, so $b=\lim_kb_k\le L(K)<\infty$. [L5, given, algebra]

2.1 (Limit on compact subintervals of $[0,b)$.) Apply [L1] clause (a) successively on $[0,b-1/n]$ for $n$ with $b-1/n>0$ and diagonalize over $n$: there is a subsequence, still written $\alpha_k$, and a future causal curve $\alpha:[0,b)\to M$ with $\alpha(0)=x$, $d_h(\alpha(s),\alpha(t))\le t-s$, such that $\alpha_k\to\alpha$ uniformly in $d_h$ on every compact subinterval of $[0,b)$. [step 1.1, L1, given, choose]

2.2 (The future tail.) By step 1.1 and [L1] clause (b) applied to the curves $\alpha_k$ restricted to $[0,n]$ and diagonalized over $n$, there are a subsequence and a future-inextendible future causal curve $\alpha^+:[0,\infty)\to M$ with $\alpha^+(0)=x$ such that $\alpha_k\to\alpha^+$ uniformly in $d_h$ on every compact subinterval of $[0,\infty)$. [step 1.1, L1, given, choose]

2.3 (The past tail.) Define $\delta_k(s):=\alpha_k(b_k+s)$ for $s\in[-b_k,0]$; then $\delta_k$ is a future causal curve parametrized by $h$-arclength with $\delta_k(0)=\alpha_k(b_k)\to z$ and $[-n,0]\subseteq[-b_k,0]$ for all large $k$. Applying the dual of [L1] clause (b) (in the time-reversed orientation) and diagonalizing over $n$, we obtain a subsequence and a future causal curve $\alpha^-:(-\infty,0]\to M$ with $\alpha^-(0)=z$, past-inextendible, such that $\delta_k\to\alpha^-$ uniformly on compact subintervals of $(-\infty,0]$. Choosing the subsequence simultaneously for $\alpha^+$ and $\alpha^-$ (a nested subsequence) gives (ii) up to the closure relation. [step 1.1, L1, given, choose]

3.1 (Extension to the endpoint $b$.) Define $\alpha(b):=z$. For $s<b$ and $t\in(s,b)$, $d_h(\alpha(s),\alpha(t))\le t-s$ by step 2.1; letting $t\uparrow b$ and using $d_h(\alpha(t),z)\to0$ (which follows from $d_h(\alpha(t),z)\le d_h(\alpha(t),\alpha_k(t))+d_h(\alpha_k(t),\alpha_k(b_k))+d_h(\alpha_k(b_k),z)$ with uniform convergence on $[s,b-1/n]$ and $b_k\to b$) gives $d_h(\alpha(s),z)\le b-s$. Hence the extended $\alpha:[0,b]\to M$ is $1$-Lipschitz for $d_h$, in particular locally Lipschitz in charts, locally absolutely continuous, and a future causal curve on $[0,b]$: on $[0,b)$ it has the almost-everywhere future causal derivative of step 2.1, and the single endpoint contributes a null set. [step 2.1, L4, given, algebra]

3.2 (The closure relation.) Fix $t_+\ge0$ and $t_-\le0$. Since $b_k\to\infty$, for all $k\ge k_0$ we have $t_+\le b_k+t_-$, so both parameter values lie in the domain $[0,b_k]$ with $t_+\le b_k+t_-$. By [L2], $\alpha_k(t_+)\le\alpha_k(b_k+t_-)=\delta_k(t_-)$. Passing to the limit along the chosen subsequence, $u_k:=\alpha_k(t_+)\to\alpha^+(t_+)$ (step 2.2) and $v_k:=\delta_k(t_-)\to\alpha^-(t_-)$ (step 2.3), with $u_k\le v_k$ for all large $k$. This is the closure statement of (ii). [step 2.2, step 2.3, L2, given]

4.1 (Uniform convergence on $[0,b]$.) Let $\varepsilon>0$ and choose $T<b$ with $b-T<\varepsilon/4$. On $[0,T]$ we have uniform convergence by step 2.1. For $t\in[T,b]$ and large $k$: $$d_h(\alpha_k(t),\alpha(t))\le d_h(\alpha_k(t),\alpha_k(b_k))+d_h(\alpha_k(b_k),z)+d_h(z,\alpha(t))\le (b_k-t)+(b_k-t)+o(1)<\varepsilon,$$ using the Lipschitz bounds $d_h(\alpha_k(t),\alpha_k(b_k))\le b_k-t$ and $d_h(\alpha(t),z)\le b-t$, and $b_k\to b$. Hence $\alpha_k\to\alpha$ uniformly on $[0,b]$. This proves (i) for $b>0$. [step 3.1, L4, given, algebra]

5.1 (The case $b=0$.) If $b=0$, then for each $k$, $$d_h(x,z)\le d_h(x,\alpha_k(0))+d_h(\alpha_k(0),\alpha_k(b_k))+d_h(\alpha_k(b_k),z)\le o(1)+b_k+o(1)\to0,$$ so $x=z$; and $\sup_{t\in[0,b_k]}d_h(\alpha_k(t),x)\le d_h(\alpha_k(0),x)+b_k\to0$, so the curves converge uniformly to the constant curve at $x$ on the (shrinking) domains, giving (i) with $b=0$ and the constant curve. [step 4.1, L4, given, algebra]

5.2 (Coincident endpoints in the unbounded case.) If $x=z$, the concatenation $\gamma:\mathbb R\to M$, $\gamma(t):=\alpha^-(t)$ for $t\le0$ and $\gamma(t):=\alpha^+(t)$ for $t\ge0$, is a future causal curve by [L3] (both pieces are future causal and meet at $x=z$); it is past-inextendible because $\alpha^-$ is, and future-inextendible because $\alpha^+$ is, hence inextendible. This is the second half of (iii); the first half follows from (i) with $b>0$: $\alpha(0)=\alpha(b)=x$ and $\alpha$ is nonconstant on $[0,b]$ by [L1] (a4), so it is a nonconstant closed future causal curve. [step 4.1, step 2.3, L1, L3, given]

6.1 (Conclusion.) Clause (i) is steps 2.1, 3.1, 4.1 and 5.1; clause (ii) is steps 2.2, 2.3 and 3.2; clause (iii) is step 5.2 together with step 4.1 in case (i); and clause (iv) is step 1.2. [step 2.1, step 3.1, step 4.1, step 5.1, step 2.2, step 2.3, step 3.2, step 5.2, step 1.2] ∎

## Remarks

- **The two alternatives are exclusive in the applications.** The bounded alternative produces a joining curve between the limiting endpoints; the unbounded alternative produces two one-sided curves related through the limit of the sequence, not a joining curve. The closure relation is recorded in the weak sequential form actually used downstream.

- **Role of the choice assumptions.** Countable choice is used for the diagonal subsequence selections, dependent choice is inherited from the manifold and curve calculus suppliers; no arbitrary family of curves is selected.

- **No length semicontinuity.** The theorem does not compare Lorentzian lengths; that is [[thm-gr-length-upper-semicontinuity]].
