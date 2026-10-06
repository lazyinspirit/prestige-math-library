---
id: thm-de-giorgi-local-boundedness-for-homogeneous-subsolutions
kind: theorem
title: "De Giorgi local boundedness of homogeneous subsolutions"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 8
deps: [def-weak-subsolution-and-supersolution-of-a-divergence-form-equation, lem-positive-part-is-an-admissible-weak-test-by-truncation, thm-sobolev-chain-rule-for-globally-lipschitz-scalar-functions, lem-weak-leibniz-rule-with-a-smooth-factor, lem-caccioppoli-inequality-for-truncated-subsolutions, lem-sobolev-level-set-iteration-step, lem-nonlinear-geometric-iteration-sequence-converges-to-zero, def-ball-average-operator-on-r-n, thm-chebyshev-markov-inequality-for-the-integral, prop-essential-supremum-is-attained-as-the-least-essential-bound, thm-l-p-norms-converge-to-the-essential-supremum-for-essentially-bounded-l-r-functions, thm-holder-inequality-for-integrals, thm-young-inequality-real-exponents, def-essential-supremum-with-respect-to-a-measure, def-l-p-space-as-a-quotient-by-null-functions, thm-dominated-convergence, thm-monotone-convergence-for-the-integral, def-countable-choice, def-axiom-of-choice]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Bozhidar Velichkov, Elliptic PDEs: Teorema di De Giorgi (Universita di Pisa; complete 7-page note, in Italian)"
      url: "https://people.dm.unipi.it/velichkov/PDE-capitolo-3-parte-3-teorema-di-De-Giorgi-v3.pdf"
      locator: "Lemma 6 and the De Giorgi iteration it closes, printed pp. 1-7 (read in full)"
    - title: "Leon Simon, Lectures on Partial Differential Equations (Stanford University; complete author scan, 118 sheets reproducing the 223 printed pages of the manuscript, two logical pages per sheet)"
      url: "https://math.stanford.edu/~lms/lecs-on-pde.pdf"
      locator: "Lecture 17, Theorem 1 and the argument after display (6), printed pp. 199-210 (read in full)"
    - title: "Brian Krummel, DeGiorgi-Nash lecture notes (15 March 2016; complete 9-page notes)"
      url: "https://www2.math.upenn.edu/~qze/notes/ELLIPTIC%20PDE/weakHarnack.pdf"
      locator: "Theorem 1 (the p > 1 supremum bound), printed pp. 1-9 (read in full)"
verification:
  precheck: pass
---

## Statement

Assume Countable Choice and the Axiom of Choice. Let $n\ge2$, let $\Omega\subseteq\mathbb R^n$ be open, let $0<\theta\le M_a^2$, let $A=(a^{ij})$ be measurable symmetric with $\theta|\xi|^2\le\sum a^{ij}(x)\xi_i\xi_j\le M_a^2|\xi|^2$ for a.e. $x$ and all $\xi$, and let $L_0u=-D_i(a^{ij}D_ju)$. Let $u\in H^1(\Omega;\mathbb R)$ satisfy $u\ge0$ a.e. and
$$a_0(u,v)\le0\qquad\text{for every }v\in H^1_0(\Omega),\ v\ge0\ a.e.,$$
i.e. $u$ is a nonnegative weak subsolution of $L_0u=0$ ([[def-weak-subsolution-and-supersolution-of-a-divergence-form-equation]]).
Then $u$ is locally bounded, and for every ball $B_R(x_0)\Subset\Omega$, every $0<\rho<1$ and every $p>0$,
$$\operatorname{ess\,sup}_{B_{\rho R}(x_0)}u\le C\Bigl(\frac{1}{|B_R(x_0)|}\int_{B_R(x_0)}u^p\,dx\Bigr)^{1/p},\qquad C=C(n,\theta,M_a,\rho,p).$$
For $n=2$ the same statement holds with the critical Sobolev embedding in place of the $2^*$ embedding. The constant is scale invariant: it does not depend on $R$ or $x_0$.

## Facts & Assumptions

**Given:** Countable Choice and the Axiom of Choice; an open $\Omega\subseteq\mathbb R^n$, $n\ge2$; constants $0<\theta\le M_a^2$; a measurable symmetric coefficient field $A$ with $\theta|\xi|^2\le\langle A\xi,\xi\rangle\le M_a^2|\xi|^2$ a.e.; a nonnegative class $u\in H^1(\Omega;\mathbb R)$ with $a_0(u,v)\le0$ for every nonnegative $v\in H^1_0(\Omega)$; a ball $B_R(x_0)\Subset\Omega$.

[F1] Assume Countable Choice and the Axiom of Choice. $a_0(w,v)=\int_\Omega a^{ij}D_jwD_iv\,dx$ is defined for $w,v\in H^1(\Omega;\mathbb R)$, and the subsolution inequality is the one of [[def-weak-subsolution-and-supersolution-of-a-divergence-form-equation]] with $f=0$; for $\eta\in C_c^\infty(\Omega)$ and $k\in\mathbb R$ the class $\eta^2(u-k)^+$ is an admissible nonnegative test ([[lem-positive-part-is-an-admissible-weak-test-by-truncation]]).

[F2] Assume Countable Choice and the Axiom of Choice. Truncated Caccioppoli estimate: for $k\in\mathbb R$, $f=0$ and concentric balls $B_r\Subset B_R$, $\int_{B_r}|D(u-k)^+|^2\le C_0(R-r)^{-2}\int_{B_R}(u-k)^{+2}$ with $C_0=C_0(\theta,M_a)$ ([[lem-caccioppoli-inequality-for-truncated-subsolutions]]).

[F3] Assume Countable Choice and the Axiom of Choice. Level-set step: if $u\in H^1(B_R)$ and $\int_{B_\rho}|D(u-k)^+|^2\le C_0(R-\rho)^{-2}\int_{B_R}(u-k)^{+2}$ holds for all $0<\rho<R$ and all levels $k$, then for $n\ge3$, $\int_{B_r}(u-k)^{+2}\le C(n,C_0)(R-r)^{-2}(k-h)^{-4/n}\bigl(\int_{B_R}(u-h)^{+2}\bigr)^{1+2/n}$. For $n=2$ and each $0<\delta<1$, the power and integral exponent use $2\delta$ and $1+\delta$, and the radius factor is $R^{2-2\delta}(R-r)^{-2}$; the constant may depend on $\delta$ ([[lem-sobolev-level-set-iteration-step]]).

[F4] Nonlinear iteration: if $\delta>0$, $C\ge1$, $B\ge1$ and $Y_{j+1}\le CB^{j}Y_j^{1+\delta}$ with $Y_0\le C^{-1/\delta}(2B)^{-1/\delta^2}$, then $Y_j\le Y_0\lambda^j\to0$ with $\lambda=(2B)^{-1/\delta}$ ([[lem-nonlinear-geometric-iteration-sequence-converges-to-zero]]).

[F5] Essential supremum and $L^p$ means: a class $w$ satisfies $w\le T$ a.e. if and only if $\operatorname{ess\,sup}w\le T$. For every $0<p<q$, Hölder applied to $|w|^p$ and $1$ with exponents $q/p$ and $q/(q-p)$ gives $\int_E|w|^p\le|E|^{1-p/q}\bigl(\int_E|w|^q\bigr)^{p/q}$ ([[prop-essential-supremum-is-attained-as-the-least-essential-bound]], [[def-essential-supremum-with-respect-to-a-measure]], [[thm-holder-inequality-for-integrals]], [[def-l-p-space-as-a-quotient-by-null-functions]], [[def-ball-average-operator-on-r-n]]).

[F6] Assume the Axiom of Choice. The globally Lipschitz chain rule and weak product rule justify the compositions and cutoff tests. For a convex Lipschitz truncation $P_N$, scalar convolution followed by subtracting the value at zero gives smooth convex nondecreasing approximants; their compositions converge in $H^1_{\mathrm{loc}}$ by the chain rule and dominated convergence. Monotone convergence applies to $P_N(u)\uparrow u^\beta$ as $N\to\infty$ ([[thm-sobolev-chain-rule-for-globally-lipschitz-scalar-functions]], [[lem-weak-leibniz-rule-with-a-smooth-factor]], [[thm-dominated-convergence]], [[thm-monotone-convergence-for-the-integral]]).

[F7] Weighted Young inequality: if $0<p<2$, then for $X,Y\ge0$ and every $\epsilon>0$, $XY\le\epsilon X^{2/(2-p)}+C_p\epsilon^{-(2-p)/p}Y^{2/p}$, with $C_p$ depending only on $p$ ([[thm-young-inequality-real-exponents]]).

## Proof

**Proof technique:** derive the $L^2$ mean-to-supremum estimate by the dyadic De Giorgi level recurrence, obtain any smaller-ball ratio by a finite cover with an explicit radius-gap constant, then use convex power truncations for $p\ge2$ and a two-scale interpolation iteration for $0<p<2$.

1.1 Convex power truncations. Fix $\beta\ge1$ and $N\ge1$, and define the convex nondecreasing Lipschitz function $$P_N(s):=\begin{cases}0,&s\le0,\\s^\beta,&0<s\le N,\\N^\beta+\beta N^{\beta-1}(s-N),&s>N.\end{cases}$$ It satisfies $P_N(0)=0$ and $P_N(u)\ge0$ since $u\ge0$. Let $G_\epsilon$ be a smooth convolution of $P_N$ minus its value at zero. Then $G_\epsilon(0)=0$, $G_\epsilon'\ge0$, $G_\epsilon''\ge0$, and the Lipschitz constants are uniformly bounded for this fixed $N$. For a nonnegative $\phi\in C_c^\infty(\Omega)$, the test $G_\epsilon'(u)\phi$ is nonnegative and belongs to $H^1_0$ on a bounded neighborhood of its support. Since the equation is homogeneous, density extends the subsolution inequality to this test. The chain and product rules give $$a_0(G_\epsilon(u),\phi)=a_0(u,G_\epsilon'(u)\phi)-\int_\Omega G_\epsilon''(u)\,a^{ij}D_juD_iu\,\phi\,dx\le0.$$ As $\epsilon\downarrow0$, the compositions converge to $P_N(u)$ in $H^1_{\mathrm{loc}}$ by [F6], so the displayed inequality passes to $P_N(u)$ against each smooth nonnegative test. Thus $P_N(u)$ is a nonnegative local weak subsolution. No subsolution property of the smooth approximants is required. [given, F1, F6, algebra]

1.2 The dyadic recurrence. Assume $\int_{B_R}u^2>0$ (otherwise $u=0$ a.e. on $B_R$), fix $B_R=B_R(x_0)\Subset\Omega$ and $T>0$, and put $k_j:=T(1-2^{-j})$, $r_j:=R(1/2+2^{-j-1})$, $Y_j:=\int_{B_{r_j}}(u-k_j)^{+2}dx$ for $j\ge0$. Set $\delta:=2/n$ if $n\ge3$, and $\delta:=1/2$ if $n=2$ (so the latter uses the finite exponent $\kappa=4$). Applying [F3] with outer radius $r_j$ and inner radius $r_{j+1}$, and using $r_j-r_{j+1}=R2^{-j-2}$ and $k_{j+1}-k_j=T2^{-j-1}$, gives $$Y_{j+1}\le C_1B_0^jR^{-n\delta}T^{-2\delta}Y_j^{1+\delta},\qquad B_0:=2^{2+2\delta},$$ where $C_1=C_1(n,\theta,M_a)\ge1$. For $n=2$, the scaled radius factor in [F3] contributes $r_j^{2-2\delta}(r_j-r_{j+1})^{-2}\le C R^{-2\delta}2^{2j}$; for $n\ge3$, $n\delta=2$ and the same displayed scale follows directly. [given, F2, F3, algebra]

2.1 The iteration closes. Write $Z_j:=R^{-n}T^{-2}Y_j$. Then the recurrence of step 1.2 reads $Z_{j+1}\le C_1B_0^{j}Z_j^{1+\delta}$, with $\delta=2/n$ for $n\ge3$ and $\delta=1/2$ for $n=2$, and $Z_0=R^{-n}T^{-2}\int_{B_R}u^2$. By [F4], if $R^{-n}T^{-2}\int_{B_R}u^2\le C_1^{-1/\delta}(2B_0)^{-1/\delta^2}$ then $Z_j\to0$; choosing $T:=c_0\bigl(R^{-n}\int_{B_R}u^2\bigr)^{1/2}$ with $c_0:=C_1^{1/(2\delta)}(2B_0)^{1/(2\delta^2)}$ meets this condition. Then $\int_{B_{R/2}}(u-T)^{+2}\le Y_j\to0$, so $u\le T$ a.e. on $B_{R/2}(x_0)$ and hence, by [F5], $\operatorname{ess\,sup}_{B_{R/2}(x_0)}u\le c_0\bigl(R^{-n}\int_{B_R(x_0)}u^2\bigr)^{1/2}=C_2\bigl(\frac{1}{|B_R(x_0)|}\int_{B_R(x_0)}u^2\bigr)^{1/2}$ with $C_2=C_2(n,\theta,M_a)$. [step 1.2, F4, F5]

3.1 Every smaller-ball ratio with a gap bound. Fix $0<\sigma<1$ and set $d:=(1-\sigma)R/2$. A finite collection of balls $B_{d/2}(x_\ell)$ with centers in $B_{\sigma R}(x_0)$ covers $B_{\sigma R}(x_0)$, and each outer ball $B_d(x_\ell)$ is compactly contained in $B_R(x_0)$. Applying the half-ball $L^2$ estimate of step 2.1 to each outer ball yields $$\operatorname{ess\,sup}_{B_{d/2}(x_\ell)}u\le C_2\left(\frac{1}{|B_d|}\int_{B_d(x_\ell)}u^2\right)^{1/2}\le C_2\left(\frac{2}{1-\sigma}\right)^{n/2}\left(\frac{1}{|B_R|}\int_{B_R}u^2\right)^{1/2}.$$ Taking the finite union gives the same bound on $B_{\sigma R}$. This quantitative gap dependence controls the radius losses in the subsequent small-exponent argument. In particular, $u$ is essentially bounded on each strictly smaller ball. [step 2.1, algebra]

4.1 The case $p\ge2$. If $\int_{B_R}u^p=\infty$ the estimate is automatic. Fix $p\ge2$ and put $\beta:=p/2$. For each $N\ge1$, $w_N:=P_N(u)$ is a nonnegative local weak subsolution by step 1.1 and lies in $H^1(\Omega)$ because $P_N$ is globally Lipschitz with $P_N(0)=0$. The zero-source inequality extends to all nonnegative $H^1_0(\Omega)$ tests, so the local boundedness theorem applies. The arbitrary-ratio $p=2$ estimate of step 3.1 gives $\operatorname{ess\,sup}_{B_{\rho R}}w_N\le C_2(\rho)(\frac{1}{|B_R|}\int_{B_R}w_N^2)^{1/2}$. As $N\to\infty$, $w_N\uparrow u^\beta$ and $w_N^2\uparrow u^{2\beta}$, so monotone convergence [F6] and monotonicity of essential supremum give $\operatorname{ess\,sup}_{B_{\rho R}}u^\beta\le C_2(\rho)(\frac{1}{|B_R|}\int_{B_R}u^p)^{1/2}$. Taking the $\beta$-th root proves the estimate, with constant $C_2(\rho)^{1/\beta}$. [step 1.1, step 3.1, F6]

4.2 The case $0<p<2$. Put $A:=(\frac{1}{|B_R|}\int_{B_R}u^p)^{1/p}$. If $A=0$, then $u=0$ a.e. on $B_R$; otherwise $0<A<\infty$. Let $s_*:=(1+\rho)/2$, $r_j:=\rho R+(s_*R-\rho R)(1-2^{-j})$, and $M_j:=\operatorname{ess\,sup}_{B_{r_j}}u$. By step 3.1, $M_j\le C_*(1-r_j/R)^{-n/2}(\frac{1}{|B_R|}\int_{B_R}u^2)^{1/2}<\infty$. Apply the $p=2$ estimate of step 3.1 to $u$ on the outer ball $B_{r_{j+1}}$ with inner ratio $r_j/r_{j+1}$. Its explicit gap bound gives a constant $C_j\le C_4b^j$ (because $r_{j+1}-r_j$ is a fixed multiple of $2^{-j}R$), and Holder gives $$M_j\le C_jM_{j+1}^{1-p/2}A^{p/2}.$$ For any $\epsilon>0$, [F7] yields $M_j\le\epsilon M_{j+1}+C_5\epsilon^{-(2-p)/p}C_j^{2/p}A$. Choose $\epsilon$ with $\epsilon b^{2/p}<1$ and iterate. The geometric series $\sum_{j\ge0}\epsilon^jC_j^{2/p}$ converges, while $M_j\le M_*<\infty$ by step 3.1 on the fixed ball $B_{s_*R}$, so $\epsilon^jM_j\to0$. Hence $M_0\le C_6A$, proving the desired estimate on $B_{\rho R}$. This proves every $0<p<2$ directly and requires no limit as the radius approaches $R$. [step 3.1, F5, F7, algebra]

5.1 Conclusion. Steps 4.1 and 4.2 prove the estimate for every $p>0$; the constants depend only on $n,\theta,M_a,\rho,p$, and scaling shows independence of $R$ and $x_0$. [step 4.1, step 4.2] ∎

