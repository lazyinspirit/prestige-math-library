---
id: thm-qft-finite-scaling-degree-extension
kind: theorem
title: Every finite-scaling-degree punctured distribution has an exact-degree extension
status: draft
origin: pipeline
domain: mathematics
deps:
  - def-axiom-of-choice
  - def-dirac-delta-and-its-derivatives
  - def-qft-distribution-scaling-degree
  - def-test-function-space-d-of-an-open-set
  - def-test-function-topology
  - lem-qft-test-frechet-uniform-scaling-order
  - lem-test-function-cutoffs-and-euclidean-localization
  - thm-multivariable-taylor-formula-with-lagrange-remainder
  - thm-test-function-operations-are-continuous
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-dirac-delta-and-its-derivatives: mathematical-premise
  def-qft-distribution-scaling-degree: mathematical-premise
  def-test-function-space-d-of-an-open-set: mathematical-premise
  def-test-function-topology: mathematical-premise
  lem-qft-test-frechet-uniform-scaling-order: mathematical-premise
  lem-test-function-cutoffs-and-euclidean-localization: mathematical-premise
  thm-multivariable-taylor-formula-with-lagrange-remainder: mathematical-premise
  thm-test-function-operations-are-continuous: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "R. Brunetti and K. Fredenhagen, Microlocal Analysis and Interacting Quantum Field Theories: Renormalization on Physical Backgrounds, Theorem 5.2–5.3"
      url: "https://arxiv.org/pdf/math-ph/9903028"
    - title: "Klaus Fredenhagen and Katarzyna Rejzner, “Perturbative Algebraic Quantum Field Theory,” in Mathematical Aspects of Quantum Field Theories, ed. Damien Calaque and Thomas Strobl, Springer (2015), Section 7"
      url: "https://ndl.ethernet.edu.et/bitstream/123456789/73875/1/95.pdf.pdf"
    - title: "K. J. Keller, Dimensional Regularization in Position Space and a Forest Formula for Regularized Epstein-Glaser Renormalization, dissertation, Theorem I.6"
      url: "https://arxiv.org/pdf/1006.2148"
dependency_level: 2
---

## Statement

Assume the Axiom of Choice. Let $n\ge1$, $U=\mathbb R^n\setminus\{0\}$, and let $t\in\mathcal D'(U)$ have finite real scaling degree $\delta=\operatorname{sd}_0(t)$. Then there exists $T\in\mathcal D'(\mathbb R^n)$ such that $T|_U=t$ and $\operatorname{sd}_0(T)=\delta$. The result applies to arbitrary distributions with finite real scaling degree; it assumes no smooth kernel or pointwise product representation.

## Facts & Assumptions

**Given:** $n\ge1$, $t\in\mathcal D'(\mathbb R^n\setminus\{0\})$ with finite real scaling degree $\delta$, and the Axiom of Choice.

[F1] [[def-qft-distribution-scaling-degree]]: $t_\rho(\varphi)=\rho^{-n}t(\varphi(\cdot/\rho))$; convergence and scaling degree are tested on each fixed test function.

[F2] [[lem-qft-test-frechet-uniform-scaling-order]]: under AC, every fixed compact annular test support has a finite derivative order and uniform bound for the family $\rho^\omega t_\rho$, for each $\omega>\delta$.

[F3] [[lem-test-function-cutoffs-and-euclidean-localization]]: a smooth compactly supported cutoff equal to one near the origin exists in ZF.

[F4] [[thm-multivariable-taylor-formula-with-lagrange-remainder]]: for smooth tests, subtracting the Taylor polynomial through order $k$ leaves a remainder of order $|x|^{k+1}$ locally; applying the theorem to derivatives gives the corresponding differentiated estimates.

[F5] [[def-test-function-space-d-of-an-open-set]]: $\mathcal D(V)=C_c^\infty(V;\mathbb C)$, with actual smooth compactly supported functions as tests.

[F6] [[def-test-function-topology]]: $\mathcal D(V)$ has the locally convex LF topology determined by its fixed-support test spaces; continuity of a linear functional is checked on each fixed-support stage.

[F7] [[thm-test-function-operations-are-continuous]]: differentiation, multiplication by a fixed smooth function, and pullback by a fixed smooth diffeomorphism act continuously on the corresponding test-function spaces.

[F8] [[def-dirac-delta-and-its-derivatives]]: $\langle\partial^\alpha\delta_0,\varphi\rangle=(-1)^{|\alpha|}\partial^\alpha\varphi(0)$; the jet evaluations used below are continuous.

[A1] Assume AC; it is used through the Baire estimate [F2], whose proof invokes DC.

## Proof

**Given:** The hypotheses in the statement.

1.1 Choose $\chi\in\mathcal D(\mathbb R^n)$ equal to one near $0$ by [F3], and put $f(x)=\chi(x)-\chi(2x)$. Its support $K$ is compact and avoids $0$, so choose $0<a<b<\infty$ with $K\subset\{x:a\le|x|\le b\}$. If $\delta<n$, set $k=-1$ and $W\varphi=\varphi$. If $\delta\ge n$, let $k$ be the integer with $k\le\delta-n<k+1$, put $P_k\varphi(x)=\sum_{|\alpha|\le k}x^\alpha\partial^\alpha\varphi(0)/\alpha!$, and define $W\varphi=\varphi-\chi P_k\varphi$. [given, F3, F4, F5, A1]

2.1 For $\varphi\in\mathcal D(\mathbb R^n)$ define $$T(\varphi):=\langle t,(1-\chi)W\varphi\rangle+\sum_{j=0}^{\infty}\langle t,f(2^j\cdot)W\varphi\rangle.$$ Each pairing is with a test supported in $U$: the first factor vanishes near $0$, and $f(2^j\cdot)$ is supported in $2^{-j}K$. [F1, F3, step 1.1, construct]

3.1 Choose $\omega$ with $\delta<\omega<n+k+1$; this interval is nonempty by the choice of $k$. Put $\lambda=2^{-j}$. By the dilation convention [F1], $$\langle t,f(\cdot/\lambda)W\varphi\rangle=\lambda^n\langle t_\lambda,f\,W\varphi(\lambda\cdot)\rangle.$$ The uniform estimate [F2] bounds this by $C\lambda^{n-\omega}p_m(f\,W\varphi(\lambda\cdot))$ for fixed $m,C$. When $k\ge0$ and $\lambda$ is small enough that $\chi=1$ on $\lambda K$, [F4] gives $p_m(f\,W\varphi(\lambda\cdot))\le C_\varphi\lambda^{k+1}$. Indeed, after each derivative of order $q\le m$, the Taylor remainder contributes order $\lambda^{k+1-q}$ if $q\le k$, and the chain-rule factor contributes $\lambda^q$; if $q>k$, the factor $\lambda^q$ is already at most $\lambda^{k+1}$ for $\lambda\le1$. The product rule with the fixed smooth $f$ preserves this bound. When $k=-1$, the same seminorm is bounded by $C_\varphi$. Thus the tail is bounded by a convergent geometric series with exponent $n+k+1-\omega>0$ (or $n-\omega>0$ when $k=-1$). The series in step 2.1 is absolutely convergent. [F1, F2, F4, F5, step 1.1, step 2.1, algebra]

4.1 For tests supported in any fixed compact $C\subset\mathbb R^n$, the first term of step 2.1 is a continuous functional: its input is supported in a fixed compact subset of $U$, and the cutoff, multiplication, and finite jet maps are continuous by [F5]–[F8]. The geometric bound of step 3.1 controls the small-scale annular tail by one finite derivative seminorm on a compact containing $C$ and $0$; the finitely many larger scales are continuous by [F1] and [F7]. Hence $T$ is continuous on every fixed-support test space and is a distribution by [F6]. [F1, F5, F6, F7, F8, step 2.1, step 3.1]

5.1 If $\varphi$ is supported away from $0$, all its jets at $0$ vanish, so $W\varphi=\varphi$. The partial sums telescope: $$\sum_{j=0}^{N}f(2^j x)=\chi(x)-\chi(2^{N+1}x).$$ For sufficiently large $N$, $\chi(2^{N+1}x)=0$ on the support of $\varphi$. Adding the first term of step 2.1 then gives $T(\varphi)=\langle t,\varphi\rangle$. Thus $T|_U=t$. [F5, step 1.1, step 2.1, step 4.1, algebra]

5.2 Fix $\Omega>\delta$ and choose $\omega$ with $\delta<\omega<\min(\Omega,n+k+1)$. Write $\varphi_\rho(x)=\rho^{-n}\varphi(x/\rho)$, so $T_\rho(\varphi)=T(\varphi_\rho)$. Choose $R$ with $\operatorname{supp}\varphi\subset B(0,R)$ and $C>R/a$, where $a$ is from step 1.1. Choose $\lambda_0>0$ so $\chi=1$ on $\lambda K$ for $0<\lambda\le\lambda_0$, and take $\rho$ small enough that $C\rho\le\lambda_0$ and $\operatorname{supp}\varphi_\rho$ lies where $\chi=1$. For a shell $\lambda K$ with $\lambda>C\rho$, its inner radius is at least $a\lambda>R\rho$, so $\varphi_\rho$ vanishes there. If $k=-1$, the first term in step 2.1 and all such coarse-shell terms are therefore zero. On the remaining shells $\lambda\le C\rho$, the chain rule and boundedness of $\lambda/\rho$ give $p_m(f\varphi_\rho(\lambda\cdot))\le C_\varphi\rho^{-n}$; their dyadic sum is $O(\rho^{-\omega})$ because $n-\omega>0$. If $k\ge0$, on each fine shell $\lambda\le C\rho$ the cutoff is one. For every derivative order $q\le m$, Taylor's formula for $\varphi-P_k\varphi$ when $q\le k$, and the chain-rule factor $(\lambda/\rho)^q$ when $q>k$, give $p_m(f\,W\varphi_\rho(\lambda\cdot))\le C_\varphi\rho^{-n-k-1}\lambda^{k+1}$; the fixed upper bound $\lambda/\rho\le C$ absorbs the finitely many higher derivative orders. Hence these shells contribute at most $$C_\varphi\rho^{-n-k-1}\sum_{\substack{\lambda=2^{-j},\ j\ge0\\\lambda\le C\rho}}\lambda^{n+k+1-\omega}=O(\rho^{-\omega}),$$ because $n+k+1-\omega>0$ and the dyadic sum is bounded by a constant times $\rho^{n+k+1-\omega}$. On the intermediate coarse shells $C\rho<\lambda\le\lambda_0$, only the subtracted Taylor polynomial remains. Its degree-$j$ term, $0\le j\le k$, contributes at most $C_\varphi\rho^{-n-j}\lambda^{n+j-\omega}$. Since $\omega>\delta\ge n+k\ge n+j$, the exponent $n+j-\omega$ is negative; summing dyadically from the smallest such $\lambda\asymp\rho$ up to $\lambda_0$ gives $O(\rho^{-\omega})$. For the finitely many outer shells $\lambda_0<\lambda\le1$ and the first term of step 2.1, continuity of $t$ on their fixed compact supports bounds the jet contributions by $O(\rho^{-n-k})=O(\rho^{-\omega})$, since $\omega>\delta\ge n+k$. Thus in both the fine and coarse regions $|T_\rho(\varphi)|\le C_\varphi\rho^{-\omega}$ for small $\rho$. Therefore $|T_\rho(\varphi)|\le C_\varphi\rho^{-\omega}$ for small $\rho$ in both cases, so $\rho^\Omega T_\rho(\varphi)\to0$. This proves $\operatorname{sd}_0(T)\le\delta$. [F1, F2, F4, step 1.1, step 2.1, step 4.1, algebra]

6.1 If an exponent $\Omega<\delta$ made $\rho^\Omega T_\rho\to0$, restricting to tests supported in $U$ and using step 5.1 would give $\rho^\Omega t_\rho\to0$, contrary to $\operatorname{sd}_0(t)=\delta$. Hence $\operatorname{sd}_0(T)\ge\delta$. Together with step 5.2, $\operatorname{sd}_0(T)=\delta$. [F1, step 5.1, step 5.2] ∎
