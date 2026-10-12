---
id: thm-nrqm-controlled-dynamics-free-gaussian-dispersive-kernel
aliases: [nrqm-controlled-dynamics-free-gaussian-dispersive-kernel]
kind: theorem
domain: mathematics
title: "Free Gaussian dispersive kernel"
status: draft
origin: pipeline
dependency_level: 1
deps: [thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators, lem-nrqm-composites-complex-gaussian-continuation, lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization, thm-plancherel, def-fourier-transform-on-l-one-of-rn, thm-dominated-convergence, lem-schwartz-space-is-dense-in-l-two, def-schwartz-space-and-its-seminorms, def-hilbert-space, def-countable-choice, def-complex-logarithms-principal-logarithm-and-complex-powers]
dependency_roles:
  thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators: mathematical-premise
  lem-nrqm-composites-complex-gaussian-continuation: mathematical-premise
  lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization: mathematical-premise
  thm-plancherel: mathematical-premise
  def-fourier-transform-on-l-one-of-rn: mathematical-premise
  thm-dominated-convergence: mathematical-premise
  lem-schwartz-space-is-dense-in-l-two: mathematical-premise
  def-schwartz-space-and-its-seminorms: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-countable-choice: mathematical-premise
  def-complex-logarithms-principal-logarithm-and-complex-powers: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Section 7.2 pp. 167-171 (the free Schrodinger operator, its propagator kernel and the resolvent)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "R. Fitzpatrick, Quantum Mechanics (University of Texas at Austin, author-hosted course text), Evolution of Wave Packets pp. 29-32 (the spreading Gaussian free packet)"
      url: "https://farside.ph.utexas.edu/teaching/qmech/qmech.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let
$H_0=-\Delta$ on $L^2(\mathbb R^3;\mathbb C)$ with $D(H_0)=W^{2,2}(\mathbb R^3;\mathbb C)$
([[thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators]]),
let $\mathcal F_2$ be the Plancherel transform with
$\widehat f(\xi)=\int f(x)e^{-2\pi ix\cdot\xi}dx$ on $L^1$
([[def-fourier-transform-on-l-one-of-rn]], [[thm-plancherel]]), so that
$H_0=\mathcal F_2^*M_{4\pi^2|\xi|^2}\mathcal F_2$, and let $t\ne0$. Define, for
$\psi\in L^1\cap L^2(\mathbb R^3)$ and a.e. $x$,
$$(K_t\psi)(x):=(4\pi it)^{-3/2}\int_{\mathbb R^3}e^{i|x-y|^2/(4t)}\psi(y)\,dy,$$
where $(4\pi it)^{-3/2}:=\exp\bigl(-\tfrac32\operatorname{Log}(4\pi it)\bigr)$
is the principal branch ([[def-complex-logarithms-principal-logarithm-and-complex-powers]]).
Then:

(a) $K_t\psi\in L^2$ and $\|K_t\psi\|_2=\|\psi\|_2$; consequently $K_t$ extends
uniquely to a unitary operator $\widehat U_t$ on $L^2$, and
$\widehat U_t=e^{-itH_0}$ in the sense of the functional calculus of the free
operator.

(b) For every $\psi\in L^1\cap L^2$ the representative $K_t\psi$ is
everywhere defined and bounded with
$$\|K_t\psi\|_\infty\le(4\pi|t|)^{-3/2}\|\psi\|_1.$$

(c) For every $\psi\in D(H_0)$ one has $e^{-itH_0}\psi\in D(H_0)$ and
$\|H_0e^{-itH_0}\psi\|_2=\|H_0\psi\|_2$.

No physical interpretation and no point-particle trajectory is asserted.

## Facts & Assumptions

**Given:** the free operator $H_0=-\Delta$, the time $t\ne0$, $\psi\in L^1\cap L^2$,
and the branch normalization of the display.

[F1] $H_0=\mathcal F_2^*M_{4\pi^2|\xi|^2}\mathcal F_2$ is self-adjoint with domain $W^{2,2}$; for bounded Borel $g$ the operator $g(H_0)=\mathcal F_2^*M_{g(4\pi^2|\xi|^2)}\mathcal F_2$ is bounded with norm $\sup|g|$, and $e^{-itH_0}=\mathcal F_2^*M_{e^{-4\pi^2it|\xi|^2}}\mathcal F_2$ ([[thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators]], [[thm-plancherel]]).

[F2] Complex Gaussian integral: for $\operatorname{Re}z>0$ and $d\ge1$, $\int_{\mathbb R^d}e^{-z|x|^2}dx=(\pi/z)^{d/2}$ with the principal branch, and $z\mapsto(\pi/z)^{d/2}$ is holomorphic on the right half-plane ([[lem-nrqm-composites-complex-gaussian-continuation]]).

[F3] Euclidean Gaussian Fourier transform: $\int_{\mathbb R^d}e^{-a|\xi|^2}e^{2\pi ix\cdot\xi}d\xi=(a/\pi)^{-d/2}e^{-\pi^2|x|^2/a}$ for $a>0$, and the transform extends holomorphically in $a$ to the right half-plane ([[lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization]], [[lem-nrqm-composites-complex-gaussian-continuation]]).

[F4] Dominated convergence and the fact that Schwartz functions are dense in $L^2$, with $\mathcal F_2$ unitary ([[thm-dominated-convergence]], [[lem-schwartz-space-is-dense-in-l-two]], [[thm-plancherel]], [[def-schwartz-space-and-its-seminorms]]).

## Proof

1.1 [Damped kernel] Fix $\varepsilon>0$, put $z_\varepsilon=\varepsilon+it$, and consider the multiplier $g_\varepsilon(\xi):=e^{-4\pi^2z_\varepsilon|\xi|^2}$, i.e. the operator $T_\varepsilon:=\mathcal F_2^*M_{g_\varepsilon}\mathcal F_2$. By [F3] with $a=4\pi^2z_\varepsilon$, applied fiberwise in the three coordinates through the product structure and [F2], its integral kernel is $(4\pi z_\varepsilon)^{-3/2}e^{-|x-y|^2/(4z_\varepsilon)}$, where the power is the principal branch of [F2]; hence for Schwartz $\psi$ one has $(T_\varepsilon\psi)(x)=(4\pi z_\varepsilon)^{-3/2}\int e^{-|x-y|^2/(4z_\varepsilon)}\psi(y)dy$. [F2, F3, F4, algebra]

2.1 [Removing the damping] Let $\psi$ be Schwartz and $x\in\mathbb R^3$. As $\varepsilon\downarrow0$ one has $z_\varepsilon\to it$, $(4\pi z_\varepsilon)^{-3/2}\to(4\pi it)^{-3/2}$ by continuity of the principal branch on the closed right half-plane away from $0$, and $e^{-|x-y|^2/(4z_\varepsilon)}\to e^{-|x-y|^2/(4it)}$ pointwise in $y$; the uniform domination $|(4\pi z_\varepsilon)^{-3/2}e^{-|x-y|^2/(4z_\varepsilon)}|\le(4\pi|z_\varepsilon|)^{-3/2}\le(4\pi|t|)^{-3/2}$ holds for all $y$ and $0<\varepsilon<1$ because $|z_\varepsilon|\ge|t|$ and the exponential factor has modulus at most $1$. Since $\psi\in L^1$, dominated convergence [F4] gives $(T_\varepsilon\psi)(x)\to(K_t\psi)(x)$ for every $x$, and $|(T_\varepsilon\psi)(x)|\le(4\pi|t|)^{-3/2}\|\psi\|_1$ for all $x,\varepsilon$. [step 1.1, F2, F4, algebra]

3.1 [Isometry and identification with free evolution] For Schwartz $\psi$, $\mathcal F_2(T_\varepsilon\psi)=g_\varepsilon\mathcal F_2\psi$; as $\varepsilon\downarrow0$, $g_\varepsilon\to g_0(\xi):=e^{-4\pi^2it|\xi|^2}$ pointwise with $|g_\varepsilon|\le1$ and $|\mathcal F_2\psi|\in L^1\cap L^2$, so dominated convergence in $L^2$ gives $\mathcal F_2(T_\varepsilon\psi)\to g_0\mathcal F_2\psi=\mathcal F_2(e^{-itH_0}\psi)$ by [F1]; since $\mathcal F_2$ is unitary and $T_\varepsilon\psi\to K_t\psi$ pointwise with a uniform bound (step 2.1), while $\|T_\varepsilon\psi\|_2=\|\psi\|_2$ for all $\varepsilon$, Fatou and the uniform bound give $\|K_t\psi\|_2\le\|\psi\|_2$, and the a.e.-convergence together with $L^2$-convergence of $T_\varepsilon\psi$ to $e^{-itH_0}\psi$ shows $K_t\psi=e^{-itH_0}\psi$ for Schwartz $\psi$. Both sides are isometric on the dense Schwartz class [F4], so $K_t$ extends uniquely to a unitary $\widehat U_t$ agreeing with $e^{-itH_0}$ on $L^2$. [step 2.1, F1, F4, algebra]

4.1 [The sup-norm bound] For every $\psi\in L^1\cap L^2$ and a.e. $x$, $|(K_t\psi)(x)|\le|4\pi it|^{-3/2}\int|\psi(y)|dy=(4\pi|t|)^{-3/2}\|\psi\|_1$ by step 2.1, which is (b); for (c), $e^{-itH_0}$ commutes with $H_0$ because both are functions of $H_0$ in the functional calculus [F1], so $H_0e^{-itH_0}\psi=e^{-itH_0}H_0\psi$ and the norms agree by unitarity. [step 3.1, F1, algebra] ∎
