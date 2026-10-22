---
id: def-nrqmx-finite-jump-trajectories
kind: definition
title: Finite GKSL jump-trajectory branches
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 0
deps:
  - def-qsm-dt-gksl-definition
  - lem-qsm-matrix-state-calculus
  - cor-finite-dimensional-normed-spaces-are-banach
  - lem-exponential-series-of-a-bounded-operator
  - def-darboux-integral
  - thm-continuous-implies-integrable
dependency_roles:
  def-qsm-dt-gksl-definition: mathematical-premise
  lem-qsm-matrix-state-calculus: mathematical-premise
  cor-finite-dimensional-normed-spaces-are-banach: mathematical-premise
  lem-exponential-series-of-a-bounded-operator: mathematical-premise
  def-darboux-integral: mathematical-premise
  thm-continuous-implies-integrable: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Lin Lin and Nathan Wiebe, Quantum Algorithms for Scientific Computation, Chapter 21, §21.1"
      url: "https://math.berkeley.edu/~linlin/qasc/live_notes_0315.pdf"
      locator: "Equation (21.1), printed p. 307: the finite GKSL generator and its jump-operator terms; the ordered branch construction here is defined locally."
---

## Definition

Let $d\geq1$, let $r\geq0$ be an integer, let $H=H^*\in M_d(\mathbb C)$ have units joules, let $\hbar>0$ have units joule-seconds, and let $L_1,\ldots,L_r\in M_d(\mathbb C)$ have units $\mathrm{s}^{-1/2}$, with the finite GKSL convention of [[def-qsm-dt-gksl-definition]]. Put $K=-iH/\hbar-\frac12\sum_{a=1}^rL_a^*L_a$ and $R(u)=e^{uK}$ for $u\geq0$, with the exponential defined by its norm-convergent power series. For a density matrix $\rho\in M_d(\mathbb C)$, meaning $\rho=\rho^*\geq0$ and $\operatorname{Tr}\rho=1$, define the no-jump branch at time $t\geq0$ by $W_{\varnothing,\varnothing}(t)=R(t)$ and its branch state by $W_{\varnothing,\varnothing}(t)\rho W_{\varnothing,\varnothing}(t)^*$.

All time variables $u,t,s_1,\ldots,s_n$ are measured in seconds. For $n\geq1$, a jump-history label is $\mathbf a=(a_1,\ldots,a_n)\in\{1,\ldots,r\}^n$ and its jump times are seconds $0<s_1<\cdots<s_n<t$. Define the corresponding branch operator by $W_{\mathbf a,\mathbf s}(t)=R(t-s_n)L_{a_n}R(s_n-s_{n-1})\cdots L_{a_2}R(s_2-s_1)L_{a_1}R(s_1)$ and the unnormalized branch state by $W_{\mathbf a,\mathbf s}(t)\rho W_{\mathbf a,\mathbf s}(t)^*$. Its branch-weight density is $w_{\mathbf a,\mathbf s}(t)=\operatorname{Tr}(W_{\mathbf a,\mathbf s}(t)\rho W_{\mathbf a,\mathbf s}(t)^*)$. The ordered-simplex integral of this density means the repeated Riemann integral $\int_0^t ds_n\int_0^{s_n}ds_{n-1}\cdots\int_0^{s_2}ds_1$, applied componentwise to matrices; each continuous real component is integrable on the compact integration interval. For $n\geq1$, $W_{\mathbf a,\mathbf s}$ has units $\mathrm{s}^{-n/2}$ and $w_{\mathbf a,\mathbf s}$ has units $\mathrm{s}^{-n}$; integrating over the $n$ time variables gives a dimensionless weight. If $r=0$, there are no branches with $n\geq1$. This definition alone does not assert that the branch weights sum to one.

## Definition references

[[def-qsm-dt-gksl-definition]]

[[lem-qsm-matrix-state-calculus]]

[[cor-finite-dimensional-normed-spaces-are-banach]]

[[lem-exponential-series-of-a-bounded-operator]]

[[def-darboux-integral]]

[[thm-continuous-implies-integrable]]

## Remarks

The definition supplies formal finite jump labels, times, branch operators, and branch weights. The ensemble identity and normalization are proved separately; a branch is not asserted to be a detector record.
