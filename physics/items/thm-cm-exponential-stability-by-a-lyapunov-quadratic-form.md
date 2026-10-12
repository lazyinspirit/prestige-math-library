---
id: thm-cm-exponential-stability-by-a-lyapunov-quadratic-form
kind: theorem
title: "An equilibrium whose linearisation has all eigenvalues in the open left half-plane is locally exponentially stable"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 1
deps: [thm-cm-exponential-dichotomy-for-a-hyperbolic-endomorphism, lem-exponential-series-of-a-bounded-operator, thm-cm-compact-continuation-for-locally-lipschitz-odes, def-cm-equilibrium-and-lyapunov-stability, def-eigenvalue-eigenvector-eigenspace-and-spectrum, def-total-derivative-in-euclidean-space, def-jacobian-matrix-and-gradient, def-euclidean-inner-product, def-metric-ball, thm-chain-rule-for-total-derivatives, thm-ftc-second-part, def-improper-integral-at-infinity, cor-limit-comparison-test-for-improper-integrals, thm-extreme-value-metric, def-ck-euclidean-maps-and-diffeomorphisms]
dependency_roles:
  thm-cm-exponential-dichotomy-for-a-hyperbolic-endomorphism: mathematical-premise
  lem-exponential-series-of-a-bounded-operator: mathematical-premise
  thm-cm-compact-continuation-for-locally-lipschitz-odes: mathematical-premise
  def-cm-equilibrium-and-lyapunov-stability: mathematical-premise
  def-eigenvalue-eigenvector-eigenspace-and-spectrum: mathematical-premise
  def-total-derivative-in-euclidean-space: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-metric-ball: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-ftc-second-part: mathematical-premise
  def-improper-integral-at-infinity: mathematical-premise
  cor-limit-comparison-test-for-improper-integrals: mathematical-premise
  thm-extreme-value-metric: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "F. Ramponi, Notes on Lyapunov's theorem, Sections 2-4: the Lyapunov function V = x^T P x with P = integral of e^{A^T t} Q e^{A t}, and stability via linearisation"
      url: "https://federico-ramponi.unibs.it/docs/lyapunov.pdf"
    - title: "G. Teschl, Ordinary Differential Equations and Dynamical Systems (AMS Graduate Studies in Mathematics 140, online edition), Section 6.6 (Liapunov's method) and Section 9.1, Theorem 9.1, printed pages 205-209 and 253-254"
      url: "https://schecter.math.ncsu.edu/ma_732_sp13/teschl_ode.pdf"
verification:
  precheck: pass
---

## Statement

Let $n\ge1$, let $U\subseteq\mathbb R^n$ be open with $0\in U$, and let $F:U\to\mathbb R^n$ be of class $C^1$ ([[def-ck-euclidean-maps-and-diffeomorphisms]]) with $F(0)=0$. Put $A:=DF(0)$ ([[def-total-derivative-in-euclidean-space]], [[def-jacobian-matrix-and-gradient]]) and suppose that every complex eigenvalue of $A$ ([[def-eigenvalue-eigenvector-eigenspace-and-spectrum]]) has negative real part.

Then $0$ is a locally exponentially stable equilibrium of $z'=F(z)$ ([[def-cm-equilibrium-and-lyapunov-stability]]): there are real numbers $\delta>0$, $\beta\ge1$ and $\gamma>0$ such that every maximal solution $z$ of $z'=F(z)$ with $\|z(0)\|_2<\delta$ is defined for all $t\ge0$ and satisfies

$$\|z(t)\|_2\le\beta e^{-\gamma t}\|z(0)\|_2\qquad(t\ge0).$$

In particular $0$ is Lyapunov stable and asymptotically stable in the sense of [[def-cm-equilibrium-and-lyapunov-stability]].

## Facts & Assumptions

**Given:** The open set $U$ with $0\in U$, the $C^1$ field $F$ with $F(0)=0$, and the matrix $A=DF(0)$ all of whose eigenvalues have negative real part.

[F1] The exponential series defines the differentiable family $t\mapsto e^{tA}$ with $\frac{d}{dt}e^{tA}=Ae^{tA}=e^{tA}A$ and $e^{0}=I_n$, and exponential dichotomy gives, since no eigenvalue of $A$ has real part $0$ and all eigenvalues have negative real part, constants $C\ge1$, $c>0$ with $\|e^{tA}v\|_2\le Ce^{-ct}\|v\|_2$ for all $v\in\mathbb R^n$ and $t\ge0$, with no unstable part. To justify this last deduction explicitly, use the complexified subspaces constructed in the cited dichotomy proof, steps 1.1 and 2.1-2.2: $(E_u)_{\mathbb C}$ is the direct sum of the generalised eigenspaces with $\operatorname{Re}\lambda>0$. Under the present hypothesis this is the empty direct sum $\{0\}$ (equivalently the polynomial $p_u$ is $1$, so $E_u=\ker I=\{0\}$). Hence $E_s=\mathbb R^n$, and clause 1 of the dichotomy gives the stated estimate on every real vector ([[lem-exponential-series-of-a-bounded-operator]], [[thm-cm-exponential-dichotomy-for-a-hyperbolic-endomorphism]]).

[F2] Differentiability at $0$: for every $\eta>0$ there is $\rho>0$ such that $\|F(z)-Az\|_2\le\eta\|z\|_2$ whenever $\|z\|_2<\rho$ ([[def-total-derivative-in-euclidean-space]]).

[F3] Improper integrals: if a continuous $f:[0,\infty)\to\mathbb R$ satisfies $|f(t)|\le Me^{-\lambda t}$ for constants $M,\lambda>0$, then $\int_0^\infty f(t)\,dt$ converges absolutely and $\lim_{T\to\infty}\int_0^Tf(t)\,dt=\int_0^\infty f(t)\,dt$ ([[def-improper-integral-at-infinity]], [[cor-limit-comparison-test-for-improper-integrals]]); the fundamental theorem applies on compact intervals ([[thm-ftc-second-part]]).

[F4] Compact continuation: an autonomous solution that is trapped in a compact subset of its open state domain near a finite endpoint extends past that endpoint ([[thm-cm-compact-continuation-for-locally-lipschitz-odes]]); $F$ is locally Lipschitz because it is $C^1$.

[F5] Euclidean structure: $\|\cdot\|_2$ comes from the inner product $\langle\cdot,\cdot\rangle_2$, balls are as in [[def-metric-ball]], a real symmetric positive definite matrix $Q$ defines $z^TQz=\langle Qz,z\rangle_2\ge\lambda_{\min}(Q)\|z\|_2^2$ and $z^TQz\le\lambda_{\max}(Q)\|z\|_2^2$, and the chain rule computes the derivative of a quadratic form along a curve ([[def-euclidean-inner-product]], [[thm-chain-rule-for-total-derivatives]]).

## Proof

**Proof technique:** direct; build the quadratic Lyapunov function from the exponential dichotomy and compare its decay with the norm.

1.1 Define the symmetric matrix $Q$ entrywise by $$Q_{ij}:=\int_0^\infty\bigl(e^{tA^{\mathsf T}}e^{tA}\bigr)_{ij}dt .$$ Each integrand is continuous and, by [F1] and submultiplicativity of the operator norm, bounded in absolute value by $C^2e^{-2ct}$; hence every entry integral converges absolutely by [F3]. The resulting matrix is symmetric because $e^{tA^{\mathsf T}}e^{tA}$ is symmetric for every $t$. [F1, F3, algebra]

2.1 The matrix $Q$ is positive definite and satisfies the Lyapunov equation $A^{\mathsf T}Q+QA=-I_n$. Positivity: for $z\ne0$, $z^{\mathsf T}Qz=\int_0^\infty\|e^{tA}z\|_2^2\,dt$, the integrand is continuous, nonnegative, and strictly positive on a neighbourhood of $t=0$, so the integral is $>0$; for $z=0$ it is $0$. Lyapunov equation: put $Q_T:=\int_0^T e^{tA^{\mathsf T}}e^{tA}dt$. By [F3] and linearity of the integral on compact intervals, $A^{\mathsf T}Q_T+Q_TA=\int_0^T\frac{d}{dt}\bigl(e^{tA^{\mathsf T}}e^{tA}\bigr)dt=e^{TA^{\mathsf T}}e^{TA}-I_n$, by the product rule and $\frac{d}{dt}e^{tA}=Ae^{tA}=e^{tA}A$ from [F1]. Letting $T\to\infty$, the left side tends to $A^{\mathsf T}Q+QA$ by [F3], while $\|e^{TA^{\mathsf T}}e^{TA}\|_2\le C^2e^{-2cT}\to0$; hence $A^{\mathsf T}Q+QA=-I_n$. [step 1.1, F1, F3, algebra]

3.1 Fix $\eta>0$ with $2\|Q\|_2\eta\le\tfrac12$ and let $\rho>0$ be a radius as in [F2] for this $\eta$; since $U$ is open and $0\in U$, shrink $\rho$ if necessary so that $\overline B(0,\rho)\subseteq U$ (the implication of [F2] persists under shrinking $\rho$; balls as in [[def-metric-ball]]). Define $V(z):=z^{\mathsf T}Qz$; since $Q$ is positive definite with smallest eigenvalue $\lambda_{\min}(Q)>0$, choose $0<\alpha<\lambda_{\min}(Q)\rho^2$. Then $\mathcal S:=\{z\in U:V(z)\le\alpha\}$ satisfies $\mathcal S\subseteq B(0,\rho)\subseteq\overline B(0,\rho)\subseteq U$, so $\mathcal S=\{z\in\overline B(0,\rho):V(z)\le\alpha\}$ is closed and bounded, hence compact. [step 2.1, F2, F5, algebra]

4.1 Let $z$ be a solution of $z'=F(z)$. On the interval where $\|z(t)\|_2<\rho$, $$\frac{d}{dt}V(z(t))=2z(t)^{\mathsf T}Qz'(t)=z^{\mathsf T}(A^{\mathsf T}Q+QA)z+2z^{\mathsf T}Q(F(z)-Az)\le-\|z\|_2^2+2\eta\|Q\|_2\|z\|_2^2\le-\tfrac12\|z\|_2^2,$$ by step 2.1, [F2] and the choice of $\eta$; the derivative exists by the chain rule ([[thm-chain-rule-for-total-derivatives]], [F5]). Since $V(z)\le\lambda_{\max}(Q)\|z\|_2^2$, this gives $\frac{d}{dt}V(z(t))\le-\frac{1}{2\lambda_{\max}(Q)}V(z(t))$ while the solution stays in $B(0,\rho)$. [step 3.1, F2, F5, algebra]

5.1 A maximal solution with $z(0)\in\mathcal S$ stays in $\mathcal S$ and is defined for all $t\ge0$. Indeed, while it stays in $\mathcal S\subseteq B(0,\rho)$, step 4.1 shows that $t\mapsto V(z(t))$ is nonincreasing, so it cannot leave $\mathcal S$ through the level $V=\alpha$; it cannot leave $\mathcal S$ through $\partial U$ either, because $\mathcal S$ is compact in $U$. If its maximal forward interval were $[0,b)$ with $b<\infty$, the solution would be trapped in the compact set $\mathcal S\subseteq U$ near $b$, so [F4] would extend it, a contradiction. Hence it is defined for all $t\ge0$ and stays in $\mathcal S$; this positive invariance of $\mathcal S$ is the property used to verify the stability definition of [[def-cm-equilibrium-and-lyapunov-stability]]. [step 3.1, 4.1, F4]

6.1 Exponential decay: by step 4.1, $\frac{d}{dt}V(z(t))\le-\gamma_V V(z(t))$ for all $t\ge0$ whenever the solution stays in $\mathcal S\subseteq B(0,\rho)$, with $\gamma_V:=\frac{1}{2\lambda_{\max}(Q)}>0$. A function with nonpositive derivative of $t\mapsto e^{\gamma_V t}V(z(t))$ is nonincreasing, so $V(z(t))\le e^{-\gamma_V t}V(z(0))$. Combining with $\lambda_{\min}(Q)\|z\|_2^2\le V(z)\le\lambda_{\max}(Q)\|z\|_2^2$ gives $$\|z(t)\|_2\le\beta e^{-\gamma_V t/2}\|z(0)\|_2,\qquad \beta:=\sqrt{\lambda_{\max}(Q)/\lambda_{\min}(Q)}\ge1 ,$$ for solutions with $z(0)\in\mathcal S$. Choose $\delta>0$ with $B(0,\delta)\subseteq\mathcal S$; then every maximal solution with $\|z(0)\|_2<\delta$ satisfies the displayed estimate. With $\gamma:=\gamma_V/2>0$ this proves the exponential bound, and it implies Lyapunov stability and asymptotic stability directly: given $\varepsilon>0$ small, choosing initial data with $\|z(0)\|_2<\delta'$ where $\delta'\le\delta$ and $\beta\delta'<\varepsilon$ keeps $\|z(t)\|_2<\varepsilon$ for all $t\ge0$, and the bound gives convergence to $0$. [step 4.1, 5.1, algebra] ∎

## Remarks

- The quadratic form $Q$ is the classical Lyapunov matrix $\int_0^\infty e^{tA^{\mathsf T}}e^{tA}\,dt$, positive definite exactly because all eigenvalues of $A$ lie in the open left half-plane. The proof uses the exponential dichotomy only through the estimate of [F1]; hyperbolicity with a nonempty unstable part would require the indefinite quadratic form of [[thm-cm-instability-of-a-hyperbolic-saddle]] instead.

- The conclusion is local: the constants $\delta,\beta,\gamma$ depend on the field $F$ and are not uniform over an arbitrary family of systems. The theorem does not assert a global domain of attraction, an optimal rate, or any nonlinear analogue of the eigenvalue criterion when eigenvalues lie on the imaginary axis.
