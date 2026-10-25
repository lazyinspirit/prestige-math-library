---
id: thm-aqft-truncated-coupled-rge-wellposedness
kind: theorem
title: Local well-posedness of a supplied truncated coupled RG system
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 4
deps:
  - def-aqft-scheme-and-wilson-coefficients
  - def-first-order-ode-initial-value-problem-and-solution
  - def-locally-lipschitz-in-the-state-variable
  - prop-first-order-ivp-is-equivalent-to-a-volterra-integral-equation
  - thm-picard-lindelof-local-existence-and-uniqueness
justified_by: []
forward_refs: []
dependency_roles:
  def-aqft-scheme-and-wilson-coefficients: mathematical-premise
  def-first-order-ode-initial-value-problem-and-solution: mathematical-premise
  def-locally-lipschitz-in-the-state-variable: mathematical-premise
  prop-first-order-ivp-is-equivalent-to-a-volterra-integral-equation: mathematical-premise
  thm-picard-lindelof-local-existence-and-uniqueness: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Gerald Teschl, Ordinary Differential Equations and Dynamical Systems (author-hosted complete PDF)
      url: https://www.mat.univie.ac.at/~gerald/ftp/book-ode/ode.pdf
      locator: Chapter 2 §2.2, equations (2.10)–(2.20), Theorem 2.2 and its complete proof; compact-cylinder bounds and local Picard contraction.
    - title: Yannick Viossat, notes revisited by Daniela Tonon, Differential Equations (January 2019; Bouin-hosted full lecture notes)
      url: https://www.ceremade.dauphine.fr/~bouin/ens1819/EquaDiff_CoursL3_2018-2019.pdf
      locator: §1.5, Theorem 1.5.4 and Lemma 1.5.5, PDF pp. 12–15; local contraction, first-exit uniqueness, and uniqueness on the common interval.
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
---

## Statement

Let a scheme datum have complex coefficient dimension $N\ge1$ and open
logarithmic-scale interval $I$. Let its open RG domain be
$\Omega\subset I\times\mathbb R^{2N}$ and its supplied vector field be
$\beta:\Omega\to\mathbb R^{2N}$, continuous and locally Lipschitz in the
coefficient coordinates, locally uniformly in logarithmic scale. For every
$(t_0,x_0)\in\Omega$, there are $r,h>0$ and a finite constant $L\ge0$ such
that, for every $y,z\in B(x_0,r)$, the initial value problems
$$x_y'(t)=\beta(t,x_y(t)),\qquad x_y(t_0)=y,$$
and
$$x_z'(t)=\beta(t,x_z(t)),\qquad x_z(t_0)=z,$$
have unique solutions on $[t_0-h,t_0+h]\subset I$, with their graphs in
$\Omega$, and
$$\|x_y(t)-x_z(t)\|_2\le e^{L|t-t_0|}\|y-z\|_2\qquad (t\in[t_0-h,t_0+h]).$$
Any two solutions through the same initial data agree on every common interval
containing $t_0$. Here local well-posedness means local existence, uniqueness,
and this uniform continuous dependence on initial coefficient data. Under
$C=\rho_N^{-1}(x)$, realified solutions give complex coefficient trajectories.
The theorem asserts no global solution, no bound on omitted terms, and no
calculation of a QFT beta function.

## Statement references

[[def-aqft-scheme-and-wilson-coefficients]]

[[def-first-order-ode-initial-value-problem-and-solution]]

[[def-locally-lipschitz-in-the-state-variable]]

[[thm-picard-lindelof-local-existence-and-uniqueness]]

[[prop-first-order-ivp-is-equivalent-to-a-volterra-integral-equation]]

[Teschl, full author-hosted ODE book](https://www.mat.univie.ac.at/~gerald/ftp/book-ode/ode.pdf)

[Viossat–Tonon, full differential-equations lecture notes (Bouin-hosted)](https://www.ceremade.dauphine.fr/~bouin/ens1819/EquaDiff_CoursL3_2018-2019.pdf)

## Facts & Assumptions

**Given:** A scheme datum as in the Statement, $(t_0,x_0)\in\Omega$, and the stated continuity and locally uniform state-Lipschitz hypotheses.

[F1] [[def-aqft-scheme-and-wilson-coefficients]]: the coefficient space is $\mathbb C^N$; $\rho_N$ is an isometry to $\mathbb R^{2N}$; the supplied RG domain is open in $I\times\mathbb R^{2N}$ and $\beta$ maps it continuously to $\mathbb R^{2N}$.

[F2] [[def-first-order-ode-initial-value-problem-and-solution]]: a solution is a differentiable curve in the open domain, through the initial value, whose derivative equals the vector field; a local solution is defined on an interval containing a nondegenerate neighborhood of the initial time.

[F3] [[def-locally-lipschitz-in-the-state-variable]] supplies the same-time state-Lipschitz inequality. Here a **compact time-state cylinder** means $[a,b]\times\overline B(c,R)\subset\Omega$, where $a,b\in\mathbb R$, $a\le b$, $c\in\mathbb R^{2N}$, $R>0$, and $\overline B(c,R)=\{x:\|x-c\|_2\le R\}$. The locally uniform hypothesis is understood with this product-cylinder convention: on each such product one finite $L\ge0$ bounds $\|\beta(t,x)-\beta(t,y)\|_2$ by $L\|x-y\|_2$ for all pairs at the same time. This specifies the cylinder family left unstated by the supplier; it does not assert a repair of that published definition.

[F4] [[thm-picard-lindelof-local-existence-and-uniqueness]]: for a continuous vector field on an open finite-dimensional domain that is locally Lipschitz in the state variable uniformly in time, a unique local solution exists; on a compact cylinder of radius $r$ where $\|\beta\|_2\le M$ and the state-Lipschitz constant is $L$, any $h>0$ with $hM\le r$ and $Lh<1$ gives a unique solution on the corresponding time interval whose graph stays in that cylinder. Any two solutions with the same initial data agree on every common interval containing that time.

[F5] [[prop-first-order-ivp-is-equivalent-to-a-volterra-integral-equation]]: a continuous curve solves the IVP exactly when it satisfies $x(t)=x(t_0)+\int_{t_0}^{t}\beta(s,x(s))\,ds$, with the integral oriented on either side of $t_0$.

## Proof

**Proof technique:** apply the quantitative Picard–Lindelöf theorem on compact cylinders, then prove continuous dependence by iterating the Volterra integral inequality.

**Given:** [F1]–[F5].

1.1 Since $\Omega$ is open and $(t_0,x_0)\in\Omega$, choose $r,h_0>0$ so the compact cylinder $K=[t_0-h_0,t_0+h_0]\times\overline B(x_0,2r)$ lies in $\Omega$. Continuity of $\beta$ on $K$ gives a finite bound $M$, and [F3] gives a single state-Lipschitz constant $L$ there. Choose $0<h\le h_0$ with $h(M+1)\le r$ and $h(L+1)<1$; then $hM\le r$ and $Lh<1$. [given, F1, F3, construct]

2.1 For every $y\in B(x_0,r)$, the cylinder $[t_0-h,t_0+h]\times\overline B(y,r)$ lies in $K$. Its vector-field and Lipschitz bounds are at most $M$ and $L$. Applying [F4] with these bounds and the inequalities from step 1.1 gives a unique solution $x_y$ on this same interval, with graph in that cylinder. The common-interval uniqueness clause of [F4] gives agreement on every larger common interval containing $t_0$. The same reasoning applies to every $z\in B(x_0,r)$. [given, F4, step 1.1, algebra]

3.1 Take $y,z\in B(x_0,r)$ and put $a=\|y-z\|_2$ and $u(t)=\|x_y(t)-x_z(t)\|_2$. By [F2] and [F5], $x_y(t)-x_z(t)=y-z+\int_{t_0}^{t}g(s)\,ds$, where $g(s):=\beta(s,x_y(s))-\beta(s,x_z(s))$ is continuous on the closed interval between $t_0$ and $t$. For continuous $g:[a_0,b_0]\to\mathbb R^{2N}$ with $a_0\le b_0$, define its vector integral componentwise by $\int_{a_0}^{b_0}g=(\int_{a_0}^{b_0}g_1,\ldots,\int_{a_0}^{b_0}g_{2N})$, with each coordinate integral the Riemann integral. If $v=\int_{a_0}^{b_0}g\ne0$, set $e=v/\|v\|_2$; using the Euclidean inner product $\langle p,q\rangle=\sum_{j=1}^{2N}p_jq_j$ and linearity of the scalar Riemann integral gives $\|v\|_2=\int_{a_0}^{b_0}\langle e,g(s)\rangle\,ds$. Since $\|e\|_2=1$ and $0\le\|g(s)-\langle e,g(s)\rangle e\|_2^2=\|g(s)\|_2^2-\langle e,g(s)\rangle^2$, we have $\langle e,g(s)\rangle\le\|g(s)\|_2$, so $\|v\|_2\le\int_{a_0}^{b_0}\|g(s)\|_2\,ds$; the same inequality is immediate if $v=0$. Reversing orientation changes the vector integral only by a sign. Since both graphs lie in $K$, [F3] gives $\|g(s)\|_2\le L u(s)$ for each $s$ between $t$ and $t_0$; the triangle inequality and the preceding estimate, applied on $[\min(t,t_0),\max(t,t_0)]$, yield
$$u(t)\le a+L\int_{\min(t,t_0)}^{\max(t,t_0)}u(s)\,ds.$$
Moreover, each curve remains within radius $r$ of its own initial value; because $y,z\in B(x_0,r)$, this gives $u(t)\le4r$. [F2, F3, F5, step 2.1, algebra]

4.1 If $t\ne t_0$, set $d=|t-t_0|$, $\varepsilon=\operatorname{sgn}(t-t_0)$, and $v(q)=u(t_0+\varepsilon q)$ for $0\le q\le d$. Step 3.1 gives $v(q)\le a+L\int_0^qv(s)\,ds$ and $v\le U:=4r$. Repeated substitution, by induction on $m\ge1$, yields
$$v(d)\le a\sum_{j=0}^{m-1}\frac{(Ld)^j}{j!}+U\frac{(Ld)^m}{m!}.$$
For $m=1$, use $v\le U$ in the integral remainder. The induction step integrates each power $s^j$ and uses $\int_0^d s^j\,ds=d^{j+1}/(j+1)$. [step 3.1, induction, algebra]

5.1 For fixed $Ld$, the remainder $(Ld)^m/m!$ tends to zero since the ratio of successive terms is $Ld/(m+1)\to0$, and the partial sums converge to $e^{Ld}$. Letting $m\to\infty$ in step 4.1 gives $u(t)\le a e^{L|t-t_0|}$. At $t=t_0$ the same estimate is equality. This is the required continuous-dependence bound. [step 4.1, algebra] ∎

## Remarks

This is a local theorem for the supplied vector field. Its operator input is the current fixed-weight batch-16 quotient interface; no claim is made that the declared relation space is physically exhaustive. No perturbative coefficient, matching relation, global flow, or omitted-term estimate follows from this ODE theorem.
