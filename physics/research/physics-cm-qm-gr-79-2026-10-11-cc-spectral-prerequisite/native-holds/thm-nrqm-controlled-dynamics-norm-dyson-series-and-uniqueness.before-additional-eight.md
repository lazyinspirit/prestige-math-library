---
id: thm-nrqm-controlled-dynamics-norm-dyson-series-and-uniqueness
aliases: [nrqm-controlled-dynamics-norm-dyson-series-and-uniqueness]
kind: theorem
domain: mathematics
title: "Norm Dyson series and uniqueness"
status: draft
origin: pipeline
dependency_level: 0
deps: [def-hilbert-space, def-bounded-linear-operator, def-operator-norm, def-symmetric-self-adjoint-and-essentially-self-adjoint, lem-self-adjoint-operator-generates-a-strongly-continuous-unitary-group, lem-bochner-integral-norm-inequality, thm-bochner-integrability-criterion, def-countable-choice]
dependency_roles:
  def-hilbert-space: mathematical-premise
  def-bounded-linear-operator: mathematical-premise
  def-operator-norm: mathematical-premise
  def-symmetric-self-adjoint-and-essentially-self-adjoint: mathematical-premise
  lem-self-adjoint-operator-generates-a-strongly-continuous-unitary-group: mathematical-premise
  lem-bochner-integral-norm-inequality: mathematical-premise
  thm-bochner-integrability-criterion: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Chapter 5 pp. 123-131 (quantum dynamics, Stone's theorem) and Chapter 12 pp. 245-256 (scattering theory, Cook's Lemma 12.3)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "R. Fitzpatrick, Quantum Mechanics (University of Texas at Austin, author-hosted course text), Time-Dependent Perturbation Theory pp. 175-182 (perturbation expansion and the two-state system)"
      url: "https://farside.ph.utexas.edu/teaching/qmech/qmech.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $H$ be a
complex Hilbert space ([[def-hilbert-space]]), let $I\subseteq\mathbb R$ be a
nonempty compact interval with $\inf I=a$ and $\sup I=b$, let $\hbar>0$, and
let $t\mapsto\mathcal H(t)$ be a map from $I$ to the self-adjoint elements of
$\mathcal B(H)$ ([[def-bounded-linear-operator]],
[[def-symmetric-self-adjoint-and-essentially-self-adjoint]]) such that
$t\mapsto\mathcal H(t)$ is norm-continuous on $I$. Put
$$K:=\frac1\hbar\sup_{t\in I}\|\mathcal H(t)\|<\infty$$
([[def-operator-norm]]). For $s\le t$ in $I$ and $n\ge0$ define the ordered
integral $U_n(t,s)\in\mathcal B(H)$ by
$$U_n(t,s):=\Bigl(\frac{-i}{\hbar}\Bigr)^{\!n}\int_{s<t_1<\cdots<t_n<t}\mathcal H(t_1)\cdots\mathcal H(t_n)\,dt_1\cdots dt_n,$$
where the integral over the simplex is the iterated Bochner integral of the
norm-continuous $\mathcal B(H)$-valued integrand
$(t_1,\dots,t_n)\mapsto\mathcal H(t_1)\cdots\mathcal H(t_n)$ and $U_0(t,s):=I$
([[thm-bochner-integrability-criterion]], [[lem-bochner-integral-norm-inequality]]).
Then:

(a) *Finite-order bound.* $\|U_n(t,s)\|\le\dfrac{(K(t-s))^n}{n!}$ for all
$n\ge0$ and all $s\le t$ in $I$.

(b) *Convergence and continuity.* The series
$U(t,s):=\sum_{n\ge0}U_n(t,s)$ converges in operator norm, uniformly on
$\{(s,t)\in I\times I:s\le t\}$; the map $(s,t)\mapsto U(t,s)$ so defined is
norm-continuous on that set, and $U(s,s)=I$ for every $s\in I$.

(c) *Integral equation and derivatives.* $U$ satisfies the Volterra identity
$$U(t,s)=I-\frac{i}{\hbar}\int_s^t\mathcal H(r)U(r,s)\,dr\qquad(s\le t),$$
and for fixed $s$ the map $t\mapsto U(t,s)$ is the unique $\mathcal B(H)$-valued
solution of that identity on $\{t\in I:t\ge s\}$. Its operator-norm
derivatives are
$$\partial_tU(t,s)=-\frac{i}{\hbar}\mathcal H(t)U(t,s),\qquad \partial_sU(t,s)=+\frac{i}{\hbar}U(t,s)\mathcal H(s).$$

(d) *Unitarity and cocycle.* If every $\mathcal H(t)$ is self-adjoint, then each
$U(t,s)$ ($s\le t$) is unitary, $U(t,s)^*=U(s,t)$ for the reverse-order
propagator defined by $U(s,t):=U(t,s)^{-1}$, and
$U(t,s)U(s,r)=U(t,r)$ for all $r\le s\le t$ in $I$.

No invariant domain of an unbounded operator, no differentiability of
$\mathcal H(\cdot)$ and no physical interpretation are asserted.

## Facts & Assumptions

**Given:** the Hilbert space $H$, the compact interval $I=[a,b]$, the number
$\hbar>0$, the norm-continuous self-adjoint-valued map $\mathcal H:I\to\mathcal B(H)$,
the finite constant $K$, and reals $s\le t$ in $I$.

[F1] The finite-dimensional (operator-norm) structure of $\mathcal B(H)$: $\|AB\|\le\|A\|\|B\|$, the triangle inequality, and completeness of $\mathcal B(H)$ in operator norm ([[def-bounded-linear-operator]], [[def-operator-norm]]).

[F2] Bochner integrals of continuous Banach-space-valued functions on compact intervals exist, and $\bigl\|\int_Xf\,d\mu\bigr\|\le\int_X\|f\|\,d\mu$ ([[thm-bochner-integrability-criterion]], [[lem-bochner-integral-norm-inequality]]).

[F3] If $X$ is a Banach space and $f:X\to X$ is linear and continuous with $\|f\|\le1$ then $f$ is nonexpansive; a composition of contractions in the operator norm bounds iterated integrals as used in the proof ([[def-operator-norm]], [[def-bounded-linear-operator]]).

[F4] The edge case $t=s$ gives the empty simplex: $\int_{\varnothing}\cdots=0$, so $U_n(s,s)=0$ for $n\ge1$ ([[thm-bochner-integrability-criterion]]).

## Proof

1.1 [Existence and the finite-order bound] By [F2], the integrand $(t_1,\dots,t_n)\mapsto\mathcal H(t_1)\cdots\mathcal H(t_n)$ is norm-continuous on the closed simplex $\Delta_n(s,t)=\{s\le t_n\le\cdots\le t_1\le t\}$ and therefore Bochner-integrable, so $U_n(t,s)$ is a well-defined element of $\mathcal B(H)$. We prove (a) by induction on $n$; the case $n=0$ is $\|I\|=1=(K(t-s))^0/0!$. Assume the bound for $n$ and use the recursion $U_{n+1}(t,s)=\frac{-i}{\hbar}\int_s^t\mathcal H(t_1)U_n(t_1,s)\,dt_1$, a Fubini re-expression of the simplex integral justified by [F2] on the product of the two compact factors; then $\|U_{n+1}(t,s)\|\le\frac1\hbar\int_s^t\|\mathcal H(t_1)\|\,\|U_n(t_1,s)\|\,dt_1\le\frac{K^{n+1}}{n!}\int_s^t(t_1-s)^n\,dt_1=\frac{(K(t-s))^{n+1}}{(n+1)!}$, using the induction hypothesis $\|U_n(t_1,s)\|\le(K(t_1-s))^n/n!$. [F1, F2, algebra, induction, F3]

2.1 [Convergence and norm continuity] By step 1.1, $\|U_n(t,s)\|\le(K(t-s))^n/n!$ for all $s\le t$, so the tail of the series is dominated by the tail $\sum_{n>N}(K(b-a))^n/n!$ of the exponential series, uniformly on $I\times I$. Hence $U(t,s)$ exists in operator norm, the convergence is uniform, and $\|U(t,s)-I\|\le e^{K(t-s)}-1$. Norm continuity on $\{s\le t\}$ follows because each partial sum is a continuous function of $(s,t)$ (dominated convergence of the Bochner integrals on the simplexes, [F2]) and the convergence is uniform; $U(s,s)=I$ is [F4]. [step 1.1, F1, F2, algebra]

2.2 [The integral equation] Summing the recursion $U_{n+1}(t,s)=\frac{-i}{\hbar}\int_s^t\mathcal H(r)U_n(r,s)dr$ of step 1.1 over $n\ge0$ and interchanging the sum with the Bochner integral (justified by uniform convergence of $\sum_n\mathcal H(r)U_n(r,s)$ on the compact interval, [F2]) gives $U(t,s)=I-\frac{i}{\hbar}\int_s^t\mathcal H(r)U(r,s)\,dr$. [step 1.1, F1, F2, algebra]

3.1 [The $t$-derivative] Since $r\mapsto\mathcal H(r)U(r,s)$ is norm-continuous by [F1] and step 2.1, the fundamental theorem of calculus for the Bochner integral applied to step 2.2 gives $\partial_tU(t,s)=-\frac{i}{\hbar}\mathcal H(t)U(t,s)$, the derivative being the operator-norm limit of difference quotients. [step 2.2, F1, F2, algebra]

3.2 [Uniqueness] Let $C\in\mathcal B(H)$ and let $W$ be a $\mathcal B(H)$-valued continuous solution of $W(t)=C-\frac{i}{\hbar}\int_s^t\mathcal H(r)W(r)\,dr$ on $[s,t]$. Then $M:=\|W-U(\cdot,s)C\|\le\frac1\hbar\int_s^t\|\mathcal H(r)\|\,\|W(r)-U(r,s)C\|\,dr$, because $U(\cdot,s)C$ solves the same identity by step 2.2. Iterating this inequality $N$ times and using nonnegativity of the integrand yields $M\le(K(t-s))^N/N!\cdot M_\infty$ for every $N$, where $M_\infty:=\sup_{r\in[s,t]}\|W(r)-U(r,s)C\|<\infty$; since $(K(t-s))^N/N!\to0$, $M=0$, so $W=U(\cdot,s)C$. Applying this with $C=I$ gives uniqueness of $U$ as a solution of the identity of step 2.2. [step 2.2, F1, F2, algebra]

4.1 [Unitarity] Suppose every $\mathcal H(t)$ is self-adjoint and put $G(t):=U(t,s)^*U(t,s)$. By step 3.1, $G'(t)=\bigl(\partial_tU(t,s)\bigr)^*U(t,s)+U(t,s)^*\partial_tU(t,s)=\frac{i}{\hbar}U(t,s)^*\mathcal H(t)U(t,s)-\frac{i}{\hbar}U(t,s)^*\mathcal H(t)U(t,s)=0$, where self-adjointness of $\mathcal H(t)$ was used; since $G(s)=I$, $U(t,s)^*U(t,s)=I$. Applying the same computation to $U(t,s)U(t,s)^*$ gives $U(t,s)U(t,s)^*=I$, so $U(t,s)$ is unitary. [step 3.1, F1, given, algebra]

5.1 [The $s$-derivative and the cocycle] For $s\le t$ define $U(s,t):=U(t,s)^*=U(t,s)^{-1}$, the last equality by step 4.1. Taking adjoints in step 3.1 at the pair $(r,u)$ with $r\le u$ gives $\partial_uU(r,u)=\frac{i}{\hbar}U(r,u)\mathcal H(u)$; renaming $(r,u)$ as $(t,s)$, this is $\partial_sU(t,s)=+\frac{i}{\hbar}U(t,s)\mathcal H(s)$. For the cocycle, fix $r\le s\le t$; the maps $u\mapsto U(u,r)$ and $u\mapsto U(u,s)U(s,r)$ both solve $X(u)=X(s)-\frac{i}{\hbar}\int_s^u\mathcal H(v)X(v)\,dv$ on $[s,t]$ with the same initial value $X(s)=U(s,r)$ (for the second map this follows by inserting the identity of step 2.2 for $U(u,s)$ and right-factoring $U(s,r)$), so step 3.2 gives $U(t,r)=U(t,s)U(s,r)$. [step 3.1, step 3.2, step 4.1, F1, algebra] ∎
