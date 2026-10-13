---
id: lem-gr-galerkin-limit-is-classical-solution
kind: lemma
title: "A limit of Galerkin solutions is a Sobolev and then a classical solution of the symmetric hyperbolic system"
status: published
origin: session
domain: mathematics
dependency_level: 9
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-periodic-torus-and-sobolev-spaces, lem-gr-periodic-fourier-differentiation-and-norm-equivalence, lem-gr-periodic-sobolev-completeness, lem-gr-periodic-sobolev-embedding, def-gr-periodic-symmetric-hyperbolic-system, def-gr-galerkin-fourier-projection, lem-gr-galerkin-projection-properties, lem-gr-positive-definite-symmetric-matrix-bounds, lem-gr-smooth-composition-and-commutator-estimates, lem-gr-galerkin-ode-local-solution, lem-gr-galerkin-time-derivative-bound, lem-gr-galerkin-second-time-derivative-bound, lem-gr-galerkin-compactness, lem-gr-rational-diagonal-extraction, lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves, def-countable-choice, def-ck-and-multi-index-notation-in-several-variables]
dependency_roles:
  def-gr-periodic-torus-and-sobolev-spaces: mathematical-premise
  lem-gr-periodic-fourier-differentiation-and-norm-equivalence: mathematical-premise
  lem-gr-periodic-sobolev-completeness: mathematical-premise
  lem-gr-periodic-sobolev-embedding: mathematical-premise
  def-gr-periodic-symmetric-hyperbolic-system: mathematical-premise
  def-gr-galerkin-fourier-projection: mathematical-premise
  lem-gr-galerkin-projection-properties: mathematical-premise
  lem-gr-positive-definite-symmetric-matrix-bounds: mathematical-premise
  lem-gr-smooth-composition-and-commutator-estimates: mathematical-premise
  lem-gr-galerkin-ode-local-solution: mathematical-premise
  lem-gr-galerkin-time-derivative-bound: mathematical-premise
  lem-gr-galerkin-second-time-derivative-bound: mathematical-premise
  lem-gr-galerkin-compactness: mathematical-premise
  lem-gr-rational-diagonal-extraction: mathematical-premise
  lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves: mathematical-premise
  def-countable-choice: mathematical-premise
  def-ck-and-multi-index-notation-in-several-variables: mathematical-premise
sources:
  references:
    - title: "H. Friedrich and A. D. Rendall, The Cauchy Problem for the Einstein Equations, Living Reviews in Relativity 3 (2000), article 1 (arXiv:gr-qc/0002074), Section 3.1 (Symmetric Hyperbolic Systems): the definition of a quasilinear symmetric hyperbolic system, the finite-dimensional mollifier approximation (3.1) solved by ODE theory, the energy and Moser product/composition estimates, the higher-order energy inequality, uniqueness, the Rellich/Ascoli compactness step and the passage to a classical solution, with Remarks 1-6 on smooth persistence, the continuation criterion, Cauchy stability and the non-identity time matrix"
      url: "https://arxiv.org/pdf/gr-qc/0002074"
verification:
  precheck: pending
---

## Statement

Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$
([[def-countable-choice]]). Let $s\ge5$ be an integer, let $A^\mu,B$ be a periodic symmetric
hyperbolic coefficient family on the open set $O\subseteq\mathbb R^m$, let
$K\subseteq K_1\subseteq O$ be compact, let $R\ge0$, and let
$u_0\in H^s(\mathbb T^3_{2\pi};\mathbb R^m)$ take values in $K$ with
$\|u_0\|_{H^s}\le R$. Let $T>0$ with $[-T,T]$ contained in the coefficient time domain, let $N_j\to\infty$ be strictly
increasing, and let $u_{N_j}:(-T,T)\to X_{N_j}$ be Galerkin solutions with
$u_{N_j}(0)=P_{N_j}u_0$, values in $K_1$ and $\|u_{N_j}(t)\|_{H^s}\le R_1$ for
all $t$, such that $u_{N_j}\to u$ uniformly on every compact subinterval of
$(-T,T)$ in $H^{s-1}$ (as provided by [[lem-gr-galerkin-compactness]] clauses
(b) and (c)). Then:

**(a)** $u(t)\in H^s$ for every $t$ and $\|u(t)\|_{H^s}\le C_{R_1}$ with
$C_{R_1}$ independent of $t$; $u$ takes values in $K_1$; and
$u\in C^0((-T,T);H^{s-1})\cap L^\infty((-T,T);H^s)$;

**(b)** the distributional time derivative $\partial_tu$ is represented by a
function in $L^\infty((-T,T);H^{s-1})$ and
$\|\partial_tu\|_{L^\infty H^{s-1}}\le C(C_{R_1})$;

**(c)** $u$ satisfies the system $(\star)$ of
[[def-gr-periodic-symmetric-hyperbolic-system]] in the sense of Sobolev
solutions, and in fact $u\in C^1((-T,T)\times\mathbb T^3_{2\pi})$ and solves
$(\star)$ classically with $u(0)=u_0$.

## Facts & Assumptions
**Given:** Countable Choice, integer $s\ge5$, the coefficient family on $O$, the compact sets $K\subseteq K_1\subseteq O$, the bounds $R,R_1,T$, and the Galerkin sequence $u_{N_j}\to u$ converging uniformly on compact subintervals in $H^{s-1}$.

[L1] Uniform convergence in $H^{s-1}$ on compact subintervals controls coefficients and values: $H^{s-1}\subseteq C^{s-3}$ and $s-2\ge3>3/2$, so on every compact subinterval $J'\subseteq(-T,T)$ the sequences $u_{N_j}\to u$ and $\partial_iu_{N_j}\to\partial_iu$ converge uniformly on $J'\times\mathbb T^3_{2\pi}$, and the evaluation maps are continuous; since $K_1$ is closed, the limit takes values in $K_1$; moreover $u\in C^0((-T,T);H^{s-1})$, being a locally uniform limit of the continuous curves $u_{N_j}$ ([[lem-gr-periodic-sobolev-embedding]], [[def-gr-periodic-torus-and-sobolev-spaces]]).

[L2] The Galerkin equations hold: $P_{N_j}[A^0(t,\cdot,u_{N_j})\partial_tu_{N_j}+A^i(t,\cdot,u_{N_j})\partial_iu_{N_j}+B(t,\cdot,u_{N_j})]=0$ in $L^2$ for every $t$, with $u_{N_j}(0)=P_{N_j}u_0$ ([[lem-gr-galerkin-ode-local-solution]]), and $P_N\psi\to\psi$ in $L^2$ for every $\psi\in L^2$ ([[lem-gr-galerkin-projection-properties]] clause (d)).

[L3] Coercivity and inverse bounds: $A^0(t,x,u)^{-1}$ is defined and smoothly dependent on $(t,x,u)$, with operator norm at most $a^{-1}$ on $[-T,T]\times\mathbb T^3_{2\pi}\times K_1$ for some $a>0$; moreover $\|F(t,\cdot,u_{N_j})w\|_{H^j}\le C_{R_1}\|w\|_{H^j}$ for the matrix coefficient maps $F=A^0,A^i,(A^0)^{-1}$ ([[lem-gr-positive-definite-symmetric-matrix-bounds]], [[lem-gr-smooth-composition-and-commutator-estimates]] clauses (a),(d)).

[L4] For $g_j=\partial_tu_{N_j}$ there are uniform bounds $\|g_j(t)\|_{H^{s-1}}\le C_{R_1}$ and $\|g_j(t)-g_j(t')\|_{H^{s-2}}\le C_{R_1}|t-t'|$ on the compact time slab and compact value set $K_1$ ([[lem-gr-galerkin-time-derivative-bound]], [[lem-gr-galerkin-second-time-derivative-bound]]). No convex hull condition is used.

[L5] Compactness and extraction: the compact-embedding clause of [[lem-gr-galerkin-compactness]] with $r=s-1$ gives, for every bounded sequence in $H^{s-1}$, a subsequence convergent in $H^{s-2}$; $H^{s-2}$ is complete ([[lem-gr-periodic-sobolev-completeness]]); hence [[lem-gr-rational-diagonal-extraction]] with $X_1:=H^{s-1}$, $X_0:=H^{s-2}$ extracts from $(g_j)$, which is bounded in $H^{s-1}$ and Lipschitz in $H^{s-2}$ by [L4], a further strictly increasing subsequence converging uniformly on every compact subinterval of $(-T,T)$ in $H^{s-2}$ to a continuous limit.

[L6] The fundamental theorem of calculus for continuous normed-space-valued curves: for the $C^1$ curve $u_{N_j}:(-T,T)\to X_{N_j}\subseteq H^{s-2}$, $\int_{t'}^t\partial_tu_{N_j}(s)\,ds=u_{N_j}(t)-u_{N_j}(t')$ in $H^{s-2}$ ([[lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves]]).

[L7] Fourier control at each integer order $r\ge0$ (in particular $r=s$ and $r=s-1$): for $f\in H^r$ one has $|\widehat f(k)|\le\|f\|_2$ and $c_rN_r(f)^2\le\|f\|_{H^r}^2\le C_rN_r(f)^2$ with $N_r(f)^2=\sum_k(1+|k|^2)^r|\widehat f(k)|^2$; conversely every class $f\in L^2$ with $N_r(f)<\infty$ lies in $H^r$. Convergence in $H^{s-2}$ or $H^{s-1}$ implies convergence of Fourier coefficients. For $f\in H^r$, $P_Mf\to f$ in $H^r$ by the tails of its convergent weighted Fourier sum ([[lem-gr-periodic-fourier-differentiation-and-norm-equivalence]], [[lem-gr-galerkin-projection-properties]], [[def-gr-periodic-torus-and-sobolev-spaces]]).


## Proof

**Proof technique:** direct.

1.1 (The limit is in $H^s$ with the uniform bound (a).) Fix $t$. For every finite $F\subseteq\mathbb Z^3$, [L7] gives $\sum_{k\in F}(1+|k|^2)^s|\widehat u(t)(k)|^2=\lim_j\sum_{k\in F}(1+|k|^2)^s|\widehat{u_{N_j}(t)}(k)|^2\le 4^sR_1^2$; taking the supremum over finite $F$ gives $N_s(u(t))^2\le 4^sR_1^2$, so $u(t)\in H^s$ and $\|u(t)\|_{H^s}\le C_sR_1$ by the norm equivalence, the bound being uniform in $t$. Values in $K_1$ and continuity into $H^{s-1}$ follow from [L1]. To establish strong measurability into $H^s$, for each $M$ the finite Fourier sum $t\mapsto P_Mu(t)$ is continuous into $H^s$, since its finitely many coefficients are continuous by the $H^{s-1}$ continuity. Moreover $P_Mu(t)\to u(t)$ in $H^s$ for every $t$, by the now finite weighted Fourier sum. Explicitly choose compact intervals $J_M$ increasing to $(-T,T)$. On each $J_M$, uniform continuity of $P_Mu$ permits a finite partition into Borel intervals and a finite-valued simple function $h_M$ whose values are sampled from $P_Mu$ and whose $H^s$ error is at most $1/M$; put $h_M=0$ off $J_M$. For every fixed $t$, eventually $t\in J_M$ and $\|h_M(t)-u(t)\|_{H^s}\le1/M+\|P_Mu(t)-u(t)\|_{H^s}\to0$. Thus $u$ is a pointwise limit of measurable simple functions into $H^s$, hence strongly measurable, and its uniform norm bound gives the claimed $L^\infty H^s$ membership. This is (a). [L1, L7, algebra]

1.2 (A convergent subsequence of the time derivatives.) Put $g_j:=\partial_tu_{N_j}$. By [L4] the family is bounded in $H^{s-1}$ and Lipschitz in $H^{s-2}$; by [L5] there is a strictly increasing $j_n$ with $g_{j_n}\to g$ uniformly on every compact subinterval of $(-T,T)$ in $H^{s-2}$, for some $g\in C^0((-T,T);H^{s-2})$. Discarding the complementary terms, rename the subsequence by $N_j$: still $u_{N_j}\to u$ on compact subintervals in $H^{s-1}$ and now $g_j\to g$ on compact subintervals in $H^{s-2}$. [L4, L5]

2.1 (The time derivative (b).) (i) Let $\psi\in C_c^\infty((-T,T))$ and $v\in H^{s-2}$; put $J':=\operatorname{supp}\psi$. By [L6], $\int_{J'}\psi'(t)\langle u_{N_j}(t),v\rangle dt=-\int_{J'}\psi(t)\langle g_j(t),v\rangle dt$ for every $j$; by step 1.2 the limits $\int_{J'}\psi'\langle u,v\rangle dt$ and $\int_{J'}\psi\langle g,v\rangle dt$ are attained uniformly on $J'$, so $\int\psi'\langle u,v\rangle dt=-\int\psi\langle g,v\rangle dt$. Hence the $H^{s-2}$-valued distributional derivative $\partial_tu$ equals the class of $g$. (ii) Fix $t$; by step 1.2, $\widehat{g_j(t)}(k)\to\widehat g(t)(k)$ for every $k$ [L7], so for every finite $K\subseteq\mathbb Z^3$ the finite sums $\sum_{k\in K}(1+|k|^2)^{s-1}|\widehat{g_j(t)}(k)|^2$ are at most $c_{s-1}^{-1}\|g_j(t)\|_{H^{s-1}}^2\le c_{s-1}^{-1}C_{R_1}^2$ by [L4]; passing to the limit and taking the supremum over finite $K$ gives $N_{s-1}(g(t))^2\le c_{s-1}^{-1}C_{R_1}^2$, so $g(t)\in H^{s-1}$ with $\|g(t)\|_{H^{s-1}}\le C_{s-1}^{1/2}c_{s-1}^{-1/2}C_{R_1}$ by [L7]. For each $M$, $t\mapsto P_Mg(t)$ is continuous into $H^{s-1}$ because $g\in C^0H^{s-2}$ and the projection has finite rank, and $P_Mg(t)\to g(t)$ in $H^{s-1}$ for each $t$. Applying the compact-interval simple-function construction of step 1.1 at order $s-1$ proves strong measurability of $g$ into $H^{s-1}$. Thus $\partial_tu$ is represented by the function $g\in L^\infty((-T,T);H^{s-1})$, uniformly bounded as asserted. This is (b). [step 1.1, step 1.2, L4, L6, L7, algebra]

3.1 (The limit solves the equation distributionally (c), first part.) Let $\psi\in C^\infty((-T,T)\times\mathbb T^3_{2\pi};\mathbb R^m)$ have compact support in $t$. Testing the Galerkin equation [L2] with $\psi$ and using self-adjointness of $P_{N_j}$ gives $\int\!\!\int\psi^{\mathsf T}[A^0(u_{N_j})\partial_tu_{N_j}+A^i(u_{N_j})\partial_iu_{N_j}+B(u_{N_j})]=\int\!\!\int(\psi-P_{N_j}\psi)^{\mathsf T}[\cdots]$, and the right-hand side tends to $0$ because $\psi-P_{N_j}\psi\to0$ in $L^2$ [L2] while the bracket is bounded in $L^\infty L^2$ by [L3] and [L4]. On the left, all factors converge on the compact $t$-support of $\psi$: $A^0(u_{N_j})\to A^0(u)$, $A^i(u_{N_j})\to A^i(u)$ and $B(u_{N_j})\to B(u)$ uniformly by [L1]; $\partial_iu_{N_j}\to\partial_iu$ uniformly by [L1]; and $\partial_tu_{N_j}=g_j\to g=\partial_tu$ uniformly in $H^{s-2}\subseteq L^2$ by step 1.2 and step 2.1; hence the limit is $\int\!\!\int\psi^{\mathsf T}[A^0(u)\partial_tu+A^i(u)\partial_iu+B(u)]=0$ for every test $\psi$, which is the distributional form of $(\star)$. [step 1.2, step 2.1, L1, L2, L3, L4, algebra]

4.1 (Classical regularity and initial value.) From the distributional equation of step 3.1, $\partial_tu=-(A^0(t,\cdot,u))^{-1}[A^i(t,\cdot,u)\partial_iu+B(t,\cdot,u)]$ as $H^{s-2}$-valued distributions; the right-hand side agrees with the continuous function $g=\partial_tu\in C^0((-T,T);H^{s-2})$ as a distribution, so the classical identity $\partial_tu(t)=-(A^0(t,\cdot,u(t)))^{-1}[A^i(t,\cdot,u(t))\partial_iu(t)+B(t,\cdot,u(t))]$ holds for every $t$, both sides being continuous in $t$. The right-hand side is continuous in $(t,x)$: indeed $u\in C^0H^{s-1}$ gives $\partial_iu\in C^0H^{s-2}\subseteq C^0$ with $s-2>3/2$; the inverse coefficient is continuous by [L3]; hence $\partial_tu$ has a continuous representative in $(t,x)$. Passing to the limit in $u_{N_j}(t)-u_{N_j}(t')=\int_{t'}^t g_j(\tau)\,d\tau$ using the uniform $H^{s-2}$ convergence on the segment gives $u(t)-u(t')=\int_{t'}^t g(\tau)\,d\tau$; the continuous-curve fundamental theorem [L6] therefore makes $t\mapsto u(t)$ $C^1$ into $H^{s-2}$ with continuous derivative and the first spatial derivatives are continuous, so $u\in C^1((-T,T)\times\mathbb T^3_{2\pi})$ and $(\star)$ holds pointwise. Finally $u_{N_j}(0)=P_{N_j}u_0\to u_0$ in $H^{s-1}$ and $u_{N_j}(0)\to u(0)$ by the convergence of step 1.2, so $u(0)=u_0$. [step 1.1, step 2.1, step 3.1, L1, L3] ∎

## Remarks

- **Role.** This closes the existence half of E0: it produces the Sobolev solution and upgrades it to the classical $C^1$ solution with the stated time-derivative regularity.
- **Route of (b).** The time derivative is not obtained from an abstract weak-* compactness of $L^\infty H^{s-1}$: a further subsequence of $(\partial_tu_{N_j})$ is extracted in $H^{s-2}$ by the locally uniform extraction of [[lem-gr-rational-diagonal-extraction]] applied to the $H^{s-2}$-Lipschitz family of [[lem-gr-galerkin-second-time-derivative-bound]], and Fatou's inequality for the weighted Fourier sums upgrades the limit bound to $H^{s-1}$.
