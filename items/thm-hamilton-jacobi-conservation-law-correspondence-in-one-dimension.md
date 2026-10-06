---
id: thm-hamilton-jacobi-conservation-law-correspondence-in-one-dimension
kind: theorem
title: The Hamilton--Jacobi correspondence in one dimension
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 7
justified_by: []
aliases: []
proof_strategy: direct
deps: [def-kruzhkov-entropy-solution, def-distributional-weak-solution-of-a-scalar-conservation-law, thm-kruzhkov-local-l1-contraction, cor-uniqueness-comparison-and-order-preservation-for-entropy-solutions, cor-finite-propagation-for-scalar-conservation-laws, def-hamilton-jacobi-cauchy-problem, def-discontinuous-viscosity-solution, thm-hopf-lax-formula-solves-the-hamilton-jacobi-equation, cor-hopf-lax-is-a-contraction-in-the-supremum-norm, def-hopf-lax-operator, def-legendre-transform-of-a-hamiltonian, lem-hopf-lax-infima-localise, thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions, def-l-one-approximate-identity-on-rn, prop-mollifier-families-are-l-one-approximate-identities, thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign, thm-existence-of-bounded-kruzhkov-entropy-solutions, def-countable-choice, def-dependent-choice, thm-riesz-fischer-completeness-of-l-p, thm-viscous-scalar-cauchy-problem-with-smooth-data-has-a-global-classical-solution, lem-viscous-approximations-obey-uniform-linfinity-and-energy-bounds, lem-vanishing-viscosity-families-are-locally-precompact-in-lone, cor-global-lone-contraction-from-the-local-kruzhkov-estimate, def-heat-evolution-of-initial-data, lem-heat-kernel-normalisation-scaling-and-derivatives, thm-dominated-convergence, thm-ftc-second-part, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces, lem-schwartz-cutoffs-from-the-standard-smooth-step, def-viscosity-subsolution-and-supersolution, thm-first-fundamental-theorem-of-calculus-for-l-one, cor-the-indefinite-integral-of-an-l-one-function-is-absolutely-continuous, thm-l-one-approximate-identities-converge-in-l-p]
sources:
  references:
    - title: "C. De Lellis, F. Otto and M. Westdickenberg, “Minimal entropy conditions for Burgers equation,” complete article"
      url: "http://www.instmath.rwth-aachen.de/~mwest/files/Burgers.pdf"
      locator: "Introduction, printed p. 2 (context: strictly convex viscosity/entropy equivalence). No equivalence is imported in the present proof; viscous primitives and localization establish it locally."
    - title: "Hung Vinh Tran, Hamilton--Jacobi Equations: Theory and Applications, 2020 preliminary author manuscript of AMS Graduate Studies in Mathematics 213 (complete text)"
      url: "https://people.math.wisc.edu/~htran24/HJ-equations-Tran-AMS.pdf"
      locator: "Chapter 2 §5.4, Hopf–Lax representation, printed pp. 67–68"
    - title: "S. N. Kruzhkov, “First order quasilinear equations in several independent variables,” Mat. USSR-Sbornik 10 (1970), 217–243, complete English translation"
      url: "https://www.mathnet.ru/links/c11e6b0d0e3edba28696e58d4e1fd4db/sm3372_eng.pdf"
      locator: "§3, Theorem 1 and proof, pp. 222–228 (local $L^1$ contraction)"
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
---

## Statement

Assume Countable Choice and Dependent Choice ([[def-countable-choice]],
[[def-dependent-choice]]) for the heat-kernel, $L^1$ completeness and
vanishing-viscosity extraction interfaces used below. Let $f\in C^2(\mathbb R)$
be strictly convex and superlinear, with $f(p)/|p|\to\infty$ as
$|p|\to\infty$.

(i) Let $U_0\in C^{0,1}(\mathbb R)\cap L^\infty(\mathbb R)$ and let
$u_0=U_0'$ be its a.e. derivative. The Hopf--Lax function
$$V(t,x)=Q_tU_0(x)=\inf_{y\in\mathbb R}\left\{U_0(y)+tL\!\left(\frac{x-y}{t}\right)\right\},\qquad t>0,\quad V(0,x)=U_0(x),$$
where $L=f^*$, is the unique viscosity solution
of $V_t+f(V_x)=0$ with initial datum $U_0$ among functions bounded and
uniformly continuous on $[0,S]\times\mathbb R$ for every finite $S>0$
([[def-hamilton-jacobi-cauchy-problem]],
[[def-discontinuous-viscosity-solution]]). Its a.e. spatial derivative
$v=V_x$ is the bounded Kruzhkov entropy solution of
$v_t+\partial_xf(v)=0$ with initial datum $u_0$.

(ii) Conversely, let $u_0\in L^1(\mathbb R)\cap L^\infty(\mathbb R)$ have
compact support and let $u$ be its bounded Kruzhkov entropy solution, using the
strong local $L^1$ initial trace. With
$$U_0(x)=\int_{-\infty}^xu_0(y)\,dy,\qquad U(t,x)=\int_{-\infty}^xu(t,y)\,dy-tf(0),$$
the function $U$ is the unique viscosity solution
of $U_t+f(U_x)=0$ with datum $U_0$ in the same finite-slab class as in (i),
and $U_x=u$ almost everywhere. In the
compactly supported datum class of (ii), differentiation and the normalized
primitive are inverse correspondences
([[def-kruzhkov-entropy-solution]],
[[thm-existence-of-bounded-kruzhkov-entropy-solutions]]).

## Facts & Assumptions

**Given:** Countable and Dependent Choice, a strictly convex superlinear $C^2$ flux $f$, its conjugate $L$, and the two datum classes in the statement.

[F1] Hopf--Lax is a viscosity solution bounded and uniformly continuous on each finite time slab for bounded uniformly continuous data, unique in that finite-slab class; its minimisers exist, it has the semigroup property, and it contracts the supremum norm ([[def-hopf-lax-operator]], [[lem-hopf-lax-infima-localise]], [[thm-hopf-lax-formula-solves-the-hamilton-jacobi-equation]], [[cor-hopf-lax-is-a-contraction-in-the-supremum-norm]], [[def-legendre-transform-of-a-hamiltonian]], [[def-hamilton-jacobi-cauchy-problem]], [[def-discontinuous-viscosity-solution]], [[def-viscosity-subsolution-and-supersolution]]).

[F2] The normalized flux $g=f-f(0)$ gives the same conservation law. For smooth compactly supported data its viscous solutions are mild classical solutions, obey the range and $L^1$ bounds, and are locally precompact in space--time $L^1$, with limits continuous into local $L^1$. The existence proof passes their weak and entropy identities to the unique entropy solution ([[thm-viscous-scalar-cauchy-problem-with-smooth-data-has-a-global-classical-solution]], [[lem-viscous-approximations-obey-uniform-linfinity-and-energy-bounds]], [[lem-vanishing-viscosity-families-are-locally-precompact-in-lone]], [[thm-existence-of-bounded-kruzhkov-entropy-solutions]], [[def-kruzhkov-entropy-solution]], [[def-distributional-weak-solution-of-a-scalar-conservation-law]]).

[F3] The heat kernels have unit mass, solve the heat equation, have Gaussian derivative estimates, and give the heat evolution; smooth cutoffs have derivatives $O(R^{-1})$ and $O(R^{-2})$ ([[def-heat-evolution-of-initial-data]], [[lem-heat-kernel-normalisation-scaling-and-derivatives]], [[lem-schwartz-cutoffs-from-the-standard-smooth-step]]). Fubini, dominated convergence and FTC justify the kernel calculations ([[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]], [[thm-dominated-convergence]], [[thm-ftc-second-part]]).

[F4] Entropy solutions contract in global $L^1$ at every time for their continuous representatives, and locally on shrinking balls; they are unique in the bounded class. Compactly supported data stay supported in a common bounded interval on every finite horizon ([[cor-global-lone-contraction-from-the-local-kruzhkov-estimate]], [[thm-kruzhkov-local-l1-contraction]], [[cor-uniqueness-comparison-and-order-preservation-for-entropy-solutions]], [[cor-finite-propagation-for-scalar-conservation-laws]]).

[F5] Under the declared choice assumptions, indefinite integrals of $L^1$ functions are absolutely continuous and differentiate to their integrands almost everywhere ([[cor-the-indefinite-integral-of-an-l-one-function-is-absolutely-continuous]], [[thm-first-fundamental-theorem-of-calculus-for-l-one]]). Lipschitz functions are absolutely continuous on compact intervals, so their a.e. derivatives recover their increments by [[thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions]]. $L^1$ is complete. Mollification gives smooth compactly supported approximations to compactly supported bounded data in $L^1$, with the same bound, with norm convergence supplied by [[thm-l-one-approximate-identities-converge-in-l-p]] ([[thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions]], [[thm-riesz-fischer-completeness-of-l-p]], [[def-l-one-approximate-identity-on-rn]], [[prop-mollifier-families-are-l-one-approximate-identities]], [[thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign]], [[def-countable-choice]], [[def-dependent-choice]]).

## Proof

**Proof technique:** direct.

1.1 **Conjugate calculus and localization.** Strict convexity makes $f'$ strictly increasing: convex secant inequalities give monotonicity, and equality at two distinct points would make $f$ affine between them. Superlinearity makes its limits $\pm\infty$ (a finite derivative bound at either end would bound $f$ linearly there). Thus $p(q):=(f')^{-1}(q)$ is continuous, and is the unique maximiser of $pq-f(p)$. The inequalities $p(q)h\le L(q+h)-L(q)\le p(q+h)h$ for $h>0$, and their reversed versions for $h<0$, show that $L'(q)=p(q)$. If $W$ is $M$-Lipschitz and $y$ minimises $W(y)+tL((x-y)/t)$, perturb $y$ in each direction and use the Lipschitz bound to obtain $|L'((x-y)/t)|\le M$. Hence $|x-y|\le Ct$, where $C=\max_{|p|\le M}|f'(p)|$. Translating competitors shows that $Q_tW$ is $M$-Lipschitz in $x$. Moreover $L(v)-M|v|\ge-C_0$, where $C_0=\max\{f(M),f(-M)\}$ by the conjugate definition, and the competitor $y=x$ gives $Q_hW-W\le hL(0)$. These bounds and the semigroup law give a uniform time Lipschitz bound on finite horizons. Also $L(q)\ge-f(0)$ for all $q$, with equality at $q=f'(0)$, so $Q_t0=-tf(0)$. Sup contraction therefore gives $\|Q_tU_0+tf(0)\|_\infty\le\|U_0\|_\infty$, proving boundedness on each finite slab, with no time-uniform bound asserted. [F1]

1.2 **Viscous primitives for a smooth compact datum.** Let $a\in C_c^\infty$, $P_0(x)=\int_{-\infty}^xa$, and let $u^\varepsilon$ be [F2]'s viscous solution for $g=f-f(0)$. Define $$W^\varepsilon(t)=H_{\varepsilon t}P_0-\int_0^tH_{\varepsilon(t-s)}f(u^\varepsilon(s))\,ds.$$ Differentiating in $x$ gives exactly the mild identity for $u^\varepsilon$, so $W_x^\varepsilon=u^\varepsilon$. Heat-potential cancellation as in the viscous construction makes $W^\varepsilon$ classical at positive times, and its equation is $W_t^\varepsilon+f(W_x^\varepsilon)=\varepsilon W_{xx}^\varepsilon$. At $x\to-\infty$ its initial heat term tends to zero, while the integral tends to $tf(0)$: $g(u^\varepsilon(s))\in L^1$, and convolution of an $L^1$ function with a bounded Gaussian tends to zero at spatial infinity; boundedness dominates the finite time integral. Thus $W^\varepsilon(t,x)=\int_{-\infty}^xu^\varepsilon(t,y)dy-tf(0)$. Testing the smoothed $|u^\varepsilon|$ balance with an exterior cutoff, then removing a second outer cutoff, gives $$\int |u^\varepsilon(t)|(1-\chi_R)\le\int|a|(1-\chi_R)+C T(R^{-1}+R^{-2})\|a\|_1\quad(0\le t\le T,\ 0<\varepsilon\le1).$$ This is the cutoff calculation of the $L^1$ bound in [F2], with $|g(u)|\le C|u|$ and [F3]'s derivative bounds. It supplies uniform tails. [F2, F3]

2.1 **A time modulus for the viscous primitives.** The Gaussian convolution identity $H_rH_s=H_{r+s}$ follows by completing the square in the kernel product and using unit mass and Fubini. Applying it to the definition in step 1.2 gives $W^\varepsilon(t+h)=H_{\varepsilon h}W^\varepsilon(t)-\int_t^{t+h}H_{\varepsilon(t+h-s)}f(u^\varepsilon(s))\,ds$. Put $M=\|a\|_\infty$ and $B=\max_{|z|\le M}|f(z)|$. Since $W_x^\varepsilon=u^\varepsilon$, these primitives are $M$-Lipschitz in $x$, including at $t=0$. Gaussian scaling gives $\int |z|\Gamma(z,r)\,dz=C\sqrt r$, with $C<\infty$ by the Gaussian bound. Hence unit mass gives $\|H_rW^\varepsilon(t)-W^\varepsilon(t)\|_\infty\le CM\sqrt r$, and heat contraction bounds the time integral by $Bh$. Thus $\|W^\varepsilon(t+h)-W^\varepsilon(t)\|_\infty\le CM\sqrt h+Bh$ for $0\le t<t+h\le T$, uniformly in $0<\varepsilon\le1$. [F2, F3, step 1.2]

3.1 **Uniform convergence of primitives.** By [F2], choose a subsequence $u^\varepsilon\to u$ locally in space--time $L^1$, where $u$ is the entropy solution of datum $a$, continuous into local $L^1$. A further subsequence converges on almost every time slice locally in $L^1$. The uniform tails of step 1.2 pass to these slices by monotone exhaustion, and to every time by local continuity on bounded annuli followed by exhaustion. They imply $u(t)\in L^1$ with uniformly small tails; local continuity then gives global $L^1$ continuity on $[0,T]$. Moreover $\int_0^T\|u^\varepsilon(t)-u(t)\|_1dt\to0$: the tails are uniformly small outside large intervals, the compact space--time convergence handles times away from $0,T$, and the bound $|u^\varepsilon|,|u|\le M$ controls the remaining small time intervals on the fixed spatial interval. For $P(t,x)=\int_{-\infty}^xu(t,y)\,dy-tf(0)$, the primitive formula of step 1.2 gives $\|W^\varepsilon(t)-P(t)\|_\infty\le\|u^\varepsilon(t)-u(t)\|_1$, so the integral in time of the left side tends to zero. The function $P$ is continuous in time in the supremum norm by global $L^1$ continuity. Together with the common modulus of step 2.1, this implies uniform convergence on $[0,T]\times\mathbb R$: a discrepancy of size $d>0$ at any time would persist with size at least $d/2$ on a one-sided interval of length bounded below independently of $\varepsilon$, contradicting that vanishing time integral. [F2, F3, step 1.2, step 2.1]

4.1 **The viscosity limit.** At a strict local maximum of $P-\phi$, with smooth $\phi$, step 3.1 gives nearby local maxima of $W^\varepsilon-\phi$. The classical equation in step 1.2 gives $\phi_t+f(\phi_x)\le\varepsilon\phi_{xx}$ there; passing to the limit proves the subsolution inequality. Local minima give the supersolution inequality. Adding a fourth-power distance term makes a contact strict without changing its first derivatives; approximation in $C^1$ on a compact contact neighbourhood reduces $C^1$ tests to smooth tests. Thus $P$ is a viscosity solution with initial datum $P_0$. It is bounded by $\|a\|_1+T|f(0)|$, spatially $M$-Lipschitz, and uniformly continuous in time on $[0,T]$ by step 3.1. Uniqueness in [F1] gives $P=Q_tP_0$. [F1, F2, F3, step 1.2, step 3.1]

5.1 **Compactly supported bounded data.** For compactly supported $a\in L^1\cap L^\infty$, choose smooth compactly supported $a_j\to a$ in $L^1$ with $\|a_j\|_\infty\le\|a\|_\infty$, using [F5]. Their primitives converge uniformly since $\sup_x|\int_{-\infty}^x(a_j-a)|\le\|a_j-a\|_1$. By [F4], their entropy solutions converge uniformly in time in $L^1$ to the solution of datum $a$; their normalized primitives therefore converge uniformly as well. The Hopf--Lax sup contraction in [F1] passes the identity of step 4.1 to $P(t)=Q_tP_0$. In particular $P_x=u$ a.e. by [F5]. This proves (ii), including the normalization $-tf(0)$. [F1, F4, F5, step 4.1]

6.1 **A bounded Lipschitz primitive with nonintegrable derivative.** Let $U_0$ be as in (i), and set $U_0^R(x)=U_0(\max\{-R,\min\{x,R\}\})$. It has the same sup and Lipschitz bounds, and derivative $u_0^R=u_0\mathbf1_{(-R,R)}$ a.e. The difference between $U_0^R$ and the normalized primitive of $u_0^R$ is its constant value $U_0(-R)$; adding this constant commutes with Hopf--Lax. Thus step 5.1 shows that $(Q_tU_0^R)_x$ is an entropy solution with datum $u_0^R$. Step 1.1 places every minimiser for both $U_0$ and $U_0^R$ within $Ct$ of $x$. Consequently $Q_tU_0^R(x)=Q_tU_0(x)$ whenever $|x|+Ct<R$, since all those competitors see identical data. Every compact positive-time cylinder is contained in such a region for large $R$, so the a.e. derivative $v=(Q_tU_0)_x$ is bounded by $M$ and obeys the weak equation and every entropy inequality locally, hence globally. For a compact spatial set, fix $R$ large enough that this equality holds throughout $0\le t\le T$ on that set; the strong local trace of the compact-data solution supplies the trace of $v$ equal to $u_0$. This proves (i), with entropy uniqueness from [F4]. [F1, F4, F5, step 1.1, step 5.1]

7.1 **Conclusion.** Step 6.1 proves the derivative correspondence for the entire bounded Lipschitz primitive class, including nonintegrable derivatives, while step 5.1 proves the normalized primitive correspondence for compactly supported integrable data. In that latter class, a.e. differentiation returns $u$, and integration from $-\infty$ with the time shift $-tf(0)$ returns the prescribed viscosity potential. All arguments hold on an arbitrary finite horizon; [F1] gives viscosity uniqueness on each such slab, while [F4] gives compatibility of the entropy solutions on overlapping horizons. These are the global solutions and inverse correspondences asserted. [step 5.1, step 6.1] ∎
