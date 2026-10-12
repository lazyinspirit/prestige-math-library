---
id: thm-nrqm-magnetic-and-detection-smooth-local-continuity-calculation
aliases: [nrqm-magnetic-and-detection-smooth-local-continuity-calculation]
kind: theorem
domain: mathematics
title: "Smooth local continuity equation and its integrated forms"
status: draft
origin: pipeline
dependency_level: 0
deps: [thm-differentiation-under-the-integral-sign, thm-divergence-theorem-for-bounded-c-one-euclidean-domains, thm-dominated-convergence, thm-algebra-of-derivatives, thm-chain-rule-for-total-derivatives, def-directional-and-partial-derivatives, def-laplacian-of-a-c2-function, lem-divergence-and-curl-are-linear-and-obey-the-scalar-product-rules, lem-self-adjoint-operator-generates-a-strongly-continuous-unitary-group, def-unbounded-integral-against-a-pvm, def-complex-lp-and-euclidean-test-function-conventions, def-l-p-space-as-a-quotient-by-null-functions, def-countable-choice]
dependency_roles:
  thm-differentiation-under-the-integral-sign: mathematical-premise
  thm-divergence-theorem-for-bounded-c-one-euclidean-domains: mathematical-premise
  thm-dominated-convergence: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  def-laplacian-of-a-c2-function: mathematical-premise
  lem-divergence-and-curl-are-linear-and-obey-the-scalar-product-rules: mathematical-premise
  lem-self-adjoint-operator-generates-a-strongly-continuous-unitary-group: mathematical-premise
  def-unbounded-integral-against-a-pvm: mathematical-premise
  def-complex-lp-and-euclidean-test-function-conventions: mathematical-premise
  def-l-p-space-as-a-quotient-by-null-functions: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 3.3 pp. 41-44 (probability current and local conservation)"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Section 2.1 pp. 55-57 and Section 7.1 pp. 155-158 (unitary dynamics and norm conservation)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Fix
$\hbar>0$, $m>0$, let $\Omega\subseteq\mathbb R^3$ and
$I\subseteq\mathbb R$ be nonempty open sets, let $V:\Omega\to\mathbb R$ be
continuous and let $\psi:\Omega\times I\to\mathbb C$ be such that $\psi$,
$\partial_t\psi$ and all spatial partial derivatives $\partial_j\psi$,
$\partial_k\partial_j\psi$ ($j,k\in\{1,2,3\}$) exist and are continuous on
$\Omega\times I$, and
$$i\hbar\,\partial_t\psi(x,t)=-\frac{\hbar^2}{2m}\Delta\psi(x,t)+V(x)\psi(x,t) \qquad\text{for every }(x,t)\in\Omega\times I,$$
where $\Delta$ is the Laplacian ([[def-laplacian-of-a-c2-function]],
[[def-directional-and-partial-derivatives]]). Define the **current**
$$j(x,t):=\frac{\hbar}{m}\operatorname{Im}\bigl(\overline{\psi(x,t)}\,\nabla\psi(x,t)\bigr)\in\mathbb R^3 .$$
Then:

(a) *pointwise continuity equation.* For every $(x,t)\in\Omega\times I$,
$$\partial_t|\psi|^2(x,t)+\operatorname{div}j(x,t)=0,$$
where the divergence is the classical one of the $C^1$ field
$x\mapsto j(x,t)$ ([[lem-divergence-and-curl-are-linear-and-obey-the-scalar-product-rules]]);

(b) *integrated balance.* If $D\subseteq\Omega$ is a bounded open set with
$C^1$ boundary and $\overline D\subseteq\Omega$
([[thm-divergence-theorem-for-bounded-c-one-euclidean-domains]]), then
$t\mapsto\int_D|\psi(x,t)|^2dx$ is differentiable on $I$ with
$$\frac{d}{dt}\int_D|\psi(x,t)|^2dx=-\int_{\partial D}j(x,t)\cdot n(x)\,dS ,$$
$n$ the outward unit normal;

(c) *global conservation under domination.* If $\Omega=\mathbb R^3$, if there
is $g\in L^1(\mathbb R^3)$ with $|\psi(x,t)|^2\le g(x)$ for almost every $x$
and every $t\in I$, and if
$$\lim_{R\to\infty}\ \sup_{t\in I}\ \int_{\{|x|=R\}}|j(x,t)|\,dS=0,$$
then $t\mapsto\|\psi(\cdot,t)\|_{L^2(\mathbb R^3)}^2$ is constant on $I$;

(d) *norm conservation from unitary dynamics.* If $K$ is a self-adjoint
operator on a complex Hilbert space $\mathcal H$ and
$\psi(t):=e^{-itK/\hbar}\psi_0$ for some $\psi_0\in\mathcal H$, then
$\|\psi(t)\|=\|\psi_0\|$ for every $t\in\mathbb R$
([[lem-self-adjoint-operator-generates-a-strongly-continuous-unitary-group]],
[[def-unbounded-integral-against-a-pvm]]).

Assertion (d) is independent of the smooth local model of (a)-(c); no
interpretation of $|\psi|^2$ as a measured counting rate is asserted.

## Facts & Assumptions

**Given:** $\hbar,m>0$, open $\Omega\subseteq\mathbb R^3$, open interval $I$, continuous real $V$, a $C^2$ solution $\psi$ of the displayed equation with continuous $\partial_t\psi$, and the current $j$.

[F1] Classical calculus rules: $\partial_t|\psi|^2=2\operatorname{Re}(\overline\psi\,\partial_t\psi)$ and $\partial_j|\psi|^2=2\operatorname{Re}(\overline\psi\,\partial_j\psi)$, and $\operatorname{div}j=\frac\hbar m\operatorname{Im}\bigl(|\nabla\psi|^2+\overline\psi\,\Delta\psi\bigr)=\frac\hbar m\operatorname{Im}(\overline\psi\Delta\psi)$ because $|\nabla\psi|^2$ is real ([[thm-algebra-of-derivatives]], [[thm-chain-rule-for-total-derivatives]], [[lem-divergence-and-curl-are-linear-and-obey-the-scalar-product-rules]]).

[F2] The conjugated equation: $\partial_t\psi=\frac i\hbar\bigl(\frac{\hbar^2}{2m}\Delta\psi-V\psi\bigr)$, since $V$ is real-valued.

[F3] Divergence theorem: for a bounded $C^1$ domain $D$ and $F\in C^1(\overline D;\mathbb R^3)$, $\int_D\operatorname{div}F\,dx=\int_{\partial D}F\cdot n\,dS$ ([[thm-divergence-theorem-for-bounded-c-one-euclidean-domains]]).

[F4] Differentiation under the integral sign: for $f:D\times I\to\mathbb C$ with $x\mapsto f(x,t)$ integrable for each $t$, $t\mapsto f(x,t)$ differentiable for a.e. $x$, and $|\partial_tf(x,t)|\le G(x)$ for an integrable $G$, the function $t\mapsto\int_Df(x,t)dx$ is differentiable with derivative $\int_D\partial_tf(x,t)dx$ ([[thm-differentiation-under-the-integral-sign]]).

[F5] Dominated convergence, and the fact that an integral over $B_R$ of an $L^1$ class converges to the integral over $\mathbb R^3$ as $R\to\infty$ ([[thm-dominated-convergence]]).

[F6] A self-adjoint $K$ with spectral PVM $E$ has $e^{-itK/\hbar}=\int e^{-it\lambda/\hbar}dE(\lambda)$, a strongly continuous unitary group: each $e^{-itK/\hbar}$ is unitary, hence norm preserving ([[lem-self-adjoint-operator-generates-a-strongly-continuous-unitary-group]], [[def-unbounded-integral-against-a-pvm]]).

## Proof

1.1 [The pointwise identity] At a point $(x,t)\in\Omega\times I$, [F2] gives $\partial_t\psi=\frac i\hbar\bigl(\frac{\hbar^2}{2m}\Delta\psi-V\psi\bigr)$ and hence, by [F1], $\partial_t|\psi|^2=2\operatorname{Re}\bigl(\overline\psi\,\partial_t\psi\bigr)=2\operatorname{Re}\Bigl[\frac i\hbar\Bigl(\frac{\hbar^2}{2m}\overline\psi\Delta\psi-V|\psi|^2\Bigr)\Bigr]=\frac{\hbar}{m}\operatorname{Re}\bigl(i\,\overline\psi\Delta\psi\bigr)=-\frac\hbar m\operatorname{Im}\bigl(\overline\psi\Delta\psi\bigr)$, because the term $-\frac i\hbar V|\psi|^2$ is purely imaginary and $V$ is real. Comparing with [F1]'s expression for $\operatorname{div}j$ gives $\partial_t|\psi|^2+\operatorname{div}j=0$, which is (a). [given, F1, F2, algebra]

2.1 [The integrated balance] Let $D$ be as in (b). Since $\partial_t|\psi|^2=-\operatorname{div}j$ is continuous on the compact set $\overline D\times[s,t]$ for every compact $[s,t]\subseteq I$, [F4] applies on the bounded domain $D$ with the constant majorant $\max_{\overline D\times[s,t]}|\operatorname{div}j|$: $t\mapsto\int_D|\psi|^2$ is differentiable on $I$ with derivative $-\int_D\operatorname{div}j(\cdot,t)$. By [F3] applied to the $C^1$ field $j(\cdot,t)$ on the bounded $C^1$ domain $D$, this equals $-\int_{\partial D}j(\cdot,t)\cdot n\,dS$. This is (b). [given, step 1.1, F3, F4, algebra]

3.1 [Global conservation] Assume (c), and let $s,t\in I$ with $s<t$. For $R>0$ with $K_R:=\{x:|x|<R\}$ we have by step 2.1 applied to $D=K_R$ (for $R$ so large that $\overline{K_R}\subseteq\mathbb R^3$, which always holds) $\frac d{d\tau}\int_{K_R}|\psi|^2=-\int_{\partial K_R}j\cdot n\,dS$, so $\bigl|\int_{K_R}|\psi(x,t)|^2dx-\int_{K_R}|\psi(x,s)|^2dx\bigr|\le(t-s)\sup_{\tau\in[s,t]}\int_{\partial K_R}|j|\,dS$, and the right side tends to $0$ as $R\to\infty$ by the hypothesis on the flux. By [F5], $\int_{K_R}|\psi(\cdot,\tau)|^2\to\|\psi(\cdot,\tau)\|^2$ for $\tau=t$ and $\tau=s$, using $|\psi|^2\le g\in L^1$. Letting $R\to\infty$ in the inequality gives $\bigl|\|\psi(\cdot,t)\|^2-\|\psi(\cdot,s)\|^2\bigr|=0$; since $s<t$ were arbitrary, the norm is constant on $I$. This is (c). [given, step 2.1, F5, algebra]

4.1 [Unitary dynamics] By [F6], $\psi(t)=e^{-itK/\hbar}\psi_0$ with $e^{-itK/\hbar}$ unitary, so $\|\psi(t)\|=\|\psi_0\|$ for every $t$. This is (d) and completes the proof. [given, F6, algebra] ∎
