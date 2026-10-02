---
id: cor-dolbeault-vanishing-pseudoconvex-domain
kind: corollary
title: Positive-degree Dolbeault vanishing on pseudoconvex domains
status: draft
origin: pipeline
deps:
  - thm-hormander-l2-dbar-existence
  - thm-pseudoconvex-domain-smooth-psh-exhaustion
  - def-dolbeault-cohomology-domain
  - def-weighted-l2-spaces-dbar-forms
  - def-bigraded-complex-differential-forms
  - def-levi-form-and-strict-plurisubharmonicity
  - def-plurisubharmonic-exhaustion-and-hartogs-pseudoconvexity
  - thm-c-two-levi-criterion-for-plurisubharmonicity
  - thm-stability-operations-for-plurisubharmonic-functions
  - thm-complex-spectral-theorem-for-normal-endomorphisms
  - prop-self-adjoint-and-normal-matrix-criteria-in-orthonormal-bases
  - def-self-adjoint-and-normal-endomorphism
  - thm-determinant-is-product-of-eigenvalues
  - thm-trace-is-sum-of-eigenvalues
  - thm-euclidean-heine-borel-pseudocompactness-and-extreme-values
  - rem-complex-euclidean-space-dictionary
  - prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets
  - cor-continuous-functions-are-borel-measurable
  - prop-order-and-scalar-rules-for-the-nonnegative-integral
  - def-integral-of-a-nonnegative-simple-function
  - cor-beppo-levi-theorem
  - thm-ratio-test
  - thm-exponential-is-strictly-increasing
  - cor-second-derivative-characterises-convexity
  - thm-ck-euclidean-maps-closed-under-algebra-and-composition
  - prop-smoothness-is-local-on-the-source
  - thm-chain-rule-for-total-derivatives
  - lem-clairaut-for-c2-potentials-by-rectangular-differences
  - def-the-standard-smooth-step-function
  - def-the-standard-flat-function
  - thm-the-standard-flat-function-is-smooth-and-flat-at-zero
  - cor-primitives-of-a-continuous-function
  - thm-additivity-over-subintervals
  - def-darboux-sums
  - def-darboux-integral
  - thm-choice-implies-dependent-implies-countable-choice
  - def-countable-choice
  - def-axiom-of-choice
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jean-Pierre Demailly, Complex Analytic and Differential Geometry"
      url: "https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf"
      locator: "Ch. VIII §6, Theorem 6.5 with (6.4), printed pp. 377-379: the weighted L2 existence theorem on a weakly pseudoconvex Kahler manifold and its L2loc (resp. C-infinity) solvability branches"
    - title: "Mohammad Jabbari, Several Complex Variables course notes"
      url: "https://www.cimat.mx/~mohammad.jabbari/course-SCV.pdf"
      locator: "§4.3, PDF pp. 79-83: weighted L2 spaces, the energy estimate and the vanishing statement for pseudoconvex domains"
    - title: "Jiří Lebl, Tasty Bits of Several Complex Variables"
      url: "https://www.jirka.org/scv/scv.pdf"
      locator: "Ch. 4 §4.6, cohomology and the Cousin-I interface"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Statement

Assume the Axiom of Choice (AC). Let $n\ge1$, let $\Omega\subseteq\mathbb C^n$
be a domain, and suppose that $\Omega$ is Hartogs pseudoconvex
([[def-plurisubharmonic-exhaustion-and-hartogs-pseudoconvexity]]). Let
$1\le q\le n$.

1. **(Smooth vanishing.)** Every smooth $\bar\partial$-closed $(0,q)$-form
   $\eta\in\Omega^{0,q}(\Omega)$ ([[def-bigraded-complex-differential-forms]])
   is exact in the Dolbeault complex: there is
   $\zeta\in\Omega^{0,q-1}(\Omega)$ with $\bar\partial\zeta=\eta$.
   Consequently $H^{0,q}_{\bar\partial}(\Omega)=0$
   ([[def-dolbeault-cohomology-domain]]).

2. **(Weighted $L^2$ exactness under finite energy.)** Let
   $\varphi\in C^2(\Omega;\mathbb R)$ be strictly plurisubharmonic on $\Omega$
   ([[def-levi-form-and-strict-plurisubharmonicity]]); for $a\in\Omega$ let
   $\lambda_1(a)\le\cdots\le\lambda_n(a)$ be the eigenvalues of the Hermitian
   matrix $(\varphi_{j\bar k}(a))$ and put
   $w(a):=\lambda_1(a)+\cdots+\lambda_q(a)>0$. If
   $f\in\operatorname{Dom}\bar\partial_q$ satisfies $\bar\partial_qf=0$ and
   $$E(f):=\int_\Omega|f|^2w^{-1}e^{-\varphi}\,dV<+\infty,$$
   then there is $u\in\operatorname{Dom}\bar\partial_{q-1}$ with
   $\bar\partial_{q-1}u=f$ and $\|u\|_\varphi^2\le E(f)$.

No boundary regularity of the primitives is claimed, and the statement is
asserted for $1\le q\le n$ only.

## Facts & Assumptions

**Given:** The Axiom of Choice; an integer $n\ge1$; a Hartogs pseudoconvex domain $\Omega\subseteq\mathbb C^n$; an integer $1\le q\le n$; a smooth $\bar\partial$-closed $(0,q)$-form $\eta\in\Omega^{0,q}(\Omega)$; and a triple $(\varphi,f,w)$ consisting of a strictly plurisubharmonic $\varphi\in C^2(\Omega;\mathbb R)$, its eigenvalue functions $\lambda_1\le\cdots\le\lambda_n$ and $w=\lambda_1+\cdots+\lambda_q$, and a form $f\in\operatorname{Dom}\bar\partial_q$ with $\bar\partial_qf=0$ and $E(f)<+\infty$.

[F1] A domain $\Omega$ is Hartogs pseudoconvex when $-\log\delta_\Omega$ is plurisubharmonic on $\Omega$, where $\delta_\Omega$ is the equal-radius polydisc boundary function ([[def-plurisubharmonic-exhaustion-and-hartogs-pseudoconvexity]]).

[F2] If $\Omega\subseteq\mathbb C^n$ is Hartogs pseudoconvex, then there are $S\in C^\infty(\Omega)$ strictly plurisubharmonic and a strictly increasing sequence $c_k\to+\infty$ such that, with $\Omega_k:=\{z\in\Omega:S(z)<c_k\}$: every $c_k$ is a regular value of $S$, every $\partial\Omega_k=\{z\in\Omega:S(z)=c_k\}$ is a nonempty $C^\infty$ hypersurface of $\Omega$, $\overline{\Omega_k}\subseteq\Omega_{k+1}$ and $\bigcup_k\Omega_k=\Omega$, so every $\overline{\Omega_k}$ is a compact subset of $\Omega$ ([[thm-pseudoconvex-domain-smooth-psh-exhaustion]]).

[F3] For $u\in C^2(\Omega,\mathbb R)$ the Levi form is $\mathcal L_u(a;v)=\sum_{j,k}\frac{\partial^2u}{\partial z_j\partial\bar z_k}(a)v_j\overline{v_k}$, and $u$ is strictly plurisubharmonic when $\mathcal L_u(a;v)>0$ for every $a\in\Omega$ and every $v\ne0$; a strictly plurisubharmonic function is plurisubharmonic ([[def-levi-form-and-strict-plurisubharmonicity]]).

[F4] A $C^2$ function $u$ on an open set is plurisubharmonic if and only if $\mathcal L_u(a;v)\ge0$ for every $a$ and every $v$ ([[thm-c-two-levi-criterion-for-plurisubharmonicity]]).

[F5] If $u:\Omega\to\mathbb R$ is plurisubharmonic and $\phi:\mathbb R\to\mathbb R$ is convex and nondecreasing, then $\phi\circ u$ is plurisubharmonic on $\Omega$ ([[thm-stability-operations-for-plurisubharmonic-functions]]).

[F6] With $\Omega^{p,q}(U)$ the smooth complex-valued forms of bidegree $(p,q)$ on open $U$, $Z_{\bar\partial}^{p,q}(U)=\ker(\bar\partial:\Omega^{p,q}(U)\to\Omega^{p,q+1}(U))$, $B_{\bar\partial}^{p,q}(U)=\operatorname{im}(\bar\partial:\Omega^{p,q-1}(U)\to\Omega^{p,q}(U))$ and $H_{\bar\partial}^{p,q}(U)=Z_{\bar\partial}^{p,q}(U)/B_{\bar\partial}^{p,q}(U)$ ([[def-dolbeault-cohomology-domain]]).

[F7] Hörmander's weighted $L^2$ existence theorem ([[thm-hormander-l2-dbar-existence]]): under AC, with $\Omega$ Hartogs pseudoconvex, $\varphi\in C^2(\Omega;\mathbb R)$ strictly plurisubharmonic, $1\le q\le n$, eigenvalues $\lambda_1\le\cdots\le\lambda_n$ and $w=\lambda_1+\cdots+\lambda_q$: (claim 1) every $f\in\operatorname{Dom}\bar\partial_q$ with $\bar\partial_qf=0$ and finite energy $E(f)=\int_\Omega|f|^2w^{-1}e^{-\varphi}dV$ has a solution $u\in\operatorname{Dom}\bar\partial_{q-1}$ with $\bar\partial_{q-1}u=f$ and $\|u\|_\varphi^2\le E(f)$; (claim 2) if in addition $\varphi\in C^\infty(\Omega;\mathbb R)$ and $f\in C^\infty(\Omega;\Lambda^{0,q})$ is $\bar\partial$-closed with $E(f)<+\infty$, then there is $u\in C^\infty(\Omega;\Lambda^{0,q-1})\cap L^2_{0,q-1}(\Omega,e^{-\varphi})$ with $\bar\partial u=f$ and $\|u\|_\varphi^2\le E(f)$.

[F8] With the conventions of [[def-weighted-l2-spaces-dbar-forms]]: $L^2_{0,k}(\Omega,e^{-\varphi})$ is the space of coefficient tuples with the inner product $\langle u,v\rangle_\varphi=\int_\Omega\sum_{|J|=k}u_J\overline{v_J}e^{-\varphi}dV$, and $\operatorname{Dom}\bar\partial_k$ consists of those $u$ for which the distributional $\bar\partial u$ is represented by an element of $L^2_{0,k+1}$, which is then $\bar\partial_ku$.

[F10] The standard smooth step function is $\sigma(t)=\beta(t)/(\beta(t)+\beta(1-t))$ with $\beta$ the standard flat function; it satisfies $\sigma\in C^\infty(\mathbb R)$, $\sigma(t)=0$ for $t\le0$ and $\sigma(t)=1$ for $t\ge1$, and takes values in $[0,1]$ ([[def-the-standard-smooth-step-function]]).

[F11] The standard flat function $\beta(t)=\exp(-1/t)$ for $t>0$ and $\beta(t)=0$ for $t\le0$ satisfies $\beta\in C^\infty(\mathbb R)$ and $\beta(t)>0$ for $t>0$ ([[def-the-standard-flat-function]], [[thm-the-standard-flat-function-is-smooth-and-flat-at-zero]]).

[F12] Every continuous function $f:I\to\mathbb R$ on an order-convex interval $I$ with at least two elements has a primitive $G$ on $I$; the function $F(x)=\int_{c_0}^xf$ is one, and for $a<b$ in $I$ and any primitive $G$, $\int_a^bf=G(b)-G(a)$ ([[cor-primitives-of-a-continuous-function]]).

[F13] For $\alpha<\beta$ and integrable $f:[\alpha,\beta]\to\mathbb R$ and arbitrary $u,v,w\in[\alpha,\beta]$ one has $\int_u^vf+\int_v^wf=\int_u^wf$ ([[thm-additivity-over-subintervals]]).

[F14] For a bounded $f:[a,b]\to\mathbb R$ the Darboux sums over a partition $P$ are the lower and upper sums $L(f,P)\le U(f,P)$, and $f$ is integrable with $\int_a^bf$ defined through these sums ([[def-darboux-sums]], [[def-darboux-integral]]).

[F15] For a nonempty $A\subseteq\mathbb R^n$ the following are equivalent: $A$ is compact; $A$ is closed and bounded; every continuous $f:A\to\mathbb R$ attains a maximum and a minimum on $A$ ([[thm-euclidean-heine-borel-pseudocompactness-and-extreme-values]]).

[F16] Under the identification of $\mathbb C^m$ with $\mathbb R^{2m}$, the metric of $\mathbb C^m$, its balls, its open sets, its convergent sequences, its Cauchy sequences and its continuous maps are verbatim those of $\mathbb R^{2m}$ ([[rem-complex-euclidean-space-dictionary]]).

[F17] Under the Axiom of Countable Choice, every bounded subset $E\subseteq\mathbb R^n$ has finite outer measure, a bounded Lebesgue measurable set has finite measure, and every compact subset of $\mathbb R^n$ is Lebesgue measurable of finite measure ([[prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets]]).

[F18] Under the Axiom of Countable Choice, every continuous map $\mathbb R^n\to\mathbb R^m$ is Borel measurable ([[cor-continuous-functions-are-borel-measurable]]).

[F19] If $f,g:X\to[0,+\infty]$ are measurable and $c\ge0$: $f\le g$ implies $\int f\le\int g$, and $\int cf=c\int f$ for $c>0$ ([[prop-order-and-scalar-rules-for-the-nonnegative-integral]]).

[F20] For a nonnegative simple measurable function $s=\sum_jc_j\chi_{E_j}$ with pairwise disjoint measurable $E_j$ and $c_j\ge0$, the simple integral is $\int s\,d\mu=\sum_jc_j\mu(E_j)$ ([[def-integral-of-a-nonnegative-simple-function]]).

[F21] For nonnegative measurable functions $f_k$ with $S=\sum_{k=0}^\infty f_k$ one has $\int S\,d\mu=\sum_{k=0}^\infty\int f_k\,d\mu$ ([[cor-beppo-levi-theorem]]).

[F22] If a real sequence $(a_k)$ has no vanishing term and $\limsup_k|a_{k+1}/a_k|<1$, then $\sum|a_k|$ converges ([[thm-ratio-test]]).

[F23] The exponential function is strictly increasing ([[thm-exponential-is-strictly-increasing]]).

[F24] A finite-dimensional complex inner product space has an orthonormal basis of eigenvectors of every normal endomorphism, and an endomorphism is self-adjoint exactly when its matrix in an orthonormal basis is Hermitian, self-adjoint endomorphisms being normal ([[thm-complex-spectral-theorem-for-normal-endomorphisms]], [[prop-self-adjoint-and-normal-matrix-criteria-in-orthonormal-bases]], [[def-self-adjoint-and-normal-endomorphism]]); the eigenvalues of a self-adjoint endomorphism are real, since from $Tv=\lambda v$, $v\ne0$, one gets $\lambda\langle v,v\rangle=\langle Tv,v\rangle=\langle v,Tv\rangle =\overline\lambda\langle v,v\rangle$ with $\langle v,v\rangle>0$.

[F25] The determinant of a matrix is the product of its eigenvalues, counted with algebraic multiplicity ([[thm-determinant-is-product-of-eigenvalues]]).

[F26] The trace of a matrix is the sum of its eigenvalues, counted with algebraic multiplicity ([[thm-trace-is-sum-of-eigenvalues]]).

[F27] A twice differentiable $f:I\to\mathbb R$ on an open interval is convex if and only if $f''(x)\ge0$ for every $x\in I$ ([[cor-second-derivative-characterises-convexity]]).

[F28] Finite componentwise sums and products of $C^k$ Euclidean maps are $C^k$, and a composite of composable $C^k$ Euclidean maps is $C^k$ ([[thm-ck-euclidean-maps-closed-under-algebra-and-composition]]).

[F29] A continuous map of smooth manifolds is smooth if and only if its restrictions to the members of an open cover are smooth ([[prop-smoothness-is-local-on-the-source]]).

[F30] If $f:U\to V$ and $g:V\to\mathbb R^p$ are totally differentiable at $a$ and $f(a)$, then $g\circ f$ is totally differentiable at $a$ with $D(g\circ f)(a)=Dg(f(a))\circ Df(a)$ ([[thm-chain-rule-for-total-derivatives]]).

[F31] For functions with continuous second partial derivatives the mixed second partials commute ([[lem-clairaut-for-c2-potentials-by-rectangular-differences]]).

[F32] AC is the assertion that every family of nonempty sets has a choice function ([[def-axiom-of-choice]]); AC$_\omega$ selects from every at most countable family of nonempty sets ([[def-countable-choice]]); and in ZF, AC implies AC$_\omega$ ([[thm-choice-implies-dependent-implies-countable-choice]]).

**Choice use.** AC is the ambient hypothesis recorded in the Statement and cited as [F32]; the countable instance AC$_\omega$ is consumed through the measure-theoretic suppliers [F17] and [F18] and is obtained from the ambient AC by the implication [F32]. The Hörmander theorem [F7] is applied under its own AC hypothesis, which is the Given. Apart from these interfaces no family of nonempty sets is selected: the shells $A_j$, the numbers $\theta_j$, the sequence $d_i$, the coefficients $a_i$ and the function $F$ are all defined by explicit formulas.

## Proof

**Proof technique:** direct.

1.1 By [F2] and the definition [F1] of Hartogs pseudoconvexity there are $S\in C^\infty(\Omega)$ strictly plurisubharmonic and regular values $c_k\uparrow+\infty$ such that, with $\Omega_k:=\{S<c_k\}$, every $\partial\Omega_k$ is a nonempty $C^\infty$ hypersurface of $\Omega$, $\overline{\Omega_k}\subseteq\Omega_{k+1}$ and $\bigcup_k\Omega_k=\Omega$, so every $\overline{\Omega_k}$ is a compact subset of $\Omega$; by the dictionary [F16] the extreme-value criterion [F15] applies to the nonempty compact set $\overline{\Omega_1}$ and the continuous function $S$, so $\mu:=\min_{\overline{\Omega_1}}S$ is attained and finite; if $z\in\Omega\setminus\overline{\Omega_1}$ then $S(z)<c_1$ would give $z\in\Omega_1\subseteq\overline{\Omega_1}$, so $S(z)\ge c_1$, while $\mu\le c_1$ because $\partial\Omega_1\subseteq\overline{\Omega_1}$ is nonempty with $S=c_1$ there; hence $S\ge\mu$ on $\Omega$. [F1, F2, F15, F16]

1.2 For $a\in\Omega$ put $H(a):=(\partial^2S/\partial z_j\partial\bar z_k(a))$; since $S$ is real-valued with commuting mixed second partials [F31], $H(a)$ is Hermitian, hence self-adjoint, so by [F24] it has an orthonormal eigenbasis with real eigenvalues $\lambda_1(a)\le\cdots\le\lambda_n(a)$, and expansion in that basis gives $\lambda_1(a)=\min_{\|v\|=1}\langle H(a)v,v\rangle=\min_{\|v\|=1}\mathcal L_S(a;v)$; strict plurisubharmonicity makes $\lambda_1(a)>0$ [F3], so $\det H(a)=\lambda_1(a)\cdots\lambda_n(a)>0$ and $\operatorname{tr}H(a)=\lambda_1(a)+\cdots+\lambda_n(a)\ge\lambda_1(a)$ by [F25] and [F26], and since $0<\lambda_j(a)\le\operatorname{tr}H(a)$ for every $j$, one has $\lambda_1(a)\ge\det H(a)/(\operatorname{tr}H(a))^{n-1}$; the functions $\det H$ and $\operatorname{tr}H$ are continuous on $\Omega$ because the entries $S_{j\bar k}$ are, so $g:=\det H/(\operatorname{tr}H)^{n-1}$ is a continuous positive function on $\Omega$ with $\lambda_1(a)\ge g(a)>0$ for all $a\in\Omega$. [F3, F24, F25, F26, F31, algebra]

1.3 Let $\chi$ be the standard smooth step function [F10]; its defining formula is $\chi(t)=\beta(t)/(\beta(t)+\beta(1-t))$ with $\beta$ the standard flat function, and the flat function vanishes on $(-\infty,0]$ and is positive on $(0,\infty)$ [F11], so $\chi\in C^\infty(\mathbb R)$ with $0\le\chi\le1$ on all of $\mathbb R$, $\chi=0$ on $(-\infty,0]$ and $\chi=1$ on $[1,\infty)$. [F10, F11]

1.4 Claim 2 is the instance of [F7] claim 1 with the given strictly plurisubharmonic $\varphi\in C^2$, the given $f\in\operatorname{Dom}\bar\partial_q$ with $\bar\partial_qf=0$ and $E(f)<+\infty$: it yields $u\in\operatorname{Dom}\bar\partial_{q-1}$ with $\bar\partial_{q-1}u=f$ and $\|u\|_\varphi^2\le E(f)$, which is exactly the assertion of claim 2. [F7, F8, given]

2.1 Put $S_1:=S+(1-\mu)$. Then $S_1\in C^\infty(\Omega)$, $S_1\ge1$ on $\Omega$, the complex Hessian of $S_1$ equals that of $S$, and adding the constant changes neither the Levi form nor strict plurisubharmonicity [F3], so $S_1$ is strictly plurisubharmonic; every sublevel set $\{S_1\le t\}=\{S\le t-1+\mu\}$ is closed in $\Omega$ and contained in $\{S<c_k\}$ for every $k$ with $c_k>t-1+\mu$, hence is compactly contained in $\Omega$ by [F2]. [F2, F3, step 1.1, algebra]

2.2 Define $\kappa(t):=\int_0^t\chi(s)\,ds$ for $t\in\mathbb R$. By [F12] the function $\kappa$ is a primitive of the continuous function $\chi$ on $\mathbb R$, hence is differentiable with $\kappa'=\chi$; since $\chi\in C^\infty$ (step 1.3), $\kappa\in C^\infty$ as well. [F10, F12, step 1.3]

3.1 For every integer $j\ge2$ put $A_j:=\{j-1\le S_1<j\}$. Each $A_j$ is a Borel subset of $\Omega$, being the preimage under the continuous $S_1$ of a Borel subset of $\mathbb R$ [F18]; the $A_j$ are pairwise disjoint and $\bigcup_{j\ge2}A_j=\Omega$ because $S_1\ge1$ on $\Omega$ by step 2.1, so the indicator functions $\mathbf 1_{A_j}$ sum pointwise to $\mathbf 1_\Omega$. [F18, step 2.1]

3.2 One has $\kappa(0)=0$ and $\kappa=0$ on $(-\infty,0]$ because $\chi$ vanishes there (step 1.3); $\kappa\ge0$ on $[0,\infty)$ because $\chi\ge0$: for every partition of $[0,t]$ all lower and upper Darboux sums of $\chi$ are $\ge$ those of the zero function, so the integral is $\ge0$ by the definition of the Darboux integral [F13, F14]; and for $t\ge1$ additivity over subintervals gives $\kappa(t)=\int_0^1\chi+\int_1^t\chi\ge\int_1^t\chi=\int_1^t1=t-1$, the last equality because $u\mapsto u$ is a primitive of the constant function $1$ and $\int_1^t1=[u]_1^t=t-1$ by the evaluation clause of [F12], while the first summand is $\ge0$. [F12, F13, F14, step 1.3, step 2.2]

4.1 The function $\widetilde H:=|\eta|^2/g$ is continuous and nonnegative on $\Omega$ by step 1.2, and for every $j\ge2$ one has $\int_{A_j}\widetilde H\,dV\le\theta_j$ for a finite number $\theta_j\ge0$: if $A_j=\varnothing$ take $\theta_j:=0$; otherwise $\overline{A_j}\subseteq\{S_1\le j\}$ is a nonempty compact subset of $\Omega$ by step 2.1, so by [F16] and [F15] the continuous function $1+\widetilde H$ attains on it a finite maximum $M_j:=\max_{\overline{A_j}}(1+\widetilde H)$, while $\lambda(\overline{A_j})<+\infty$ because $\overline{A_j}$ is bounded and Lebesgue measurable [F15, F17]; then $M_j\lambda(\overline{A_j})<+\infty$ and with $\theta_j:=M_j(1+\lambda(\overline{A_j}))$ one gets $\int_{A_j}\widetilde H\,dV\le\int_{\overline{A_j}}(1+\widetilde H)\,dV\le\int_{\overline{A_j}}M_j\,dV=M_j\lambda(\overline{A_j})\le\theta_j$ by monotonicity of the nonnegative integral [F19] and the simple-integral formula $\int c\chi_E\,d\mu=c\mu(E)$ [F20]. [F15, F16, F17, F19, F20, step 1.2, step 3.1]

4.2 Define $\beta(t):=\int_0^t\kappa(s)\,ds$. Then $\beta$ is a primitive of the continuous $\kappa$ [F12], so $\beta\in C^\infty$ with $\beta'=\kappa$ and $\beta''=\kappa'=\chi$ by step 2.2; $\beta=0$ on $(-\infty,0]$ since $\kappa$ vanishes there, and $\beta\ge0$ on $[0,\infty)$ by monotonicity of the integral and $\kappa\ge0$ (step 3.2); finally $\beta(2)=\int_0^2\kappa\ge\int_{3/2}^2\kappa\ge\int_{3/2}^2\tfrac12\,ds=\tfrac12(2-\tfrac32)=\tfrac14$, using $\kappa(s)\ge s-1\ge\tfrac12$ for $s\ge\tfrac32$ (step 3.2), additivity and monotonicity of the integral [F13, F14], and the primitive evaluation [F12]. [F12, F13, F14, step 3.2]

5.1 With the numbers $\theta_j\ge0$ of step 4.1 define $d_i:=i+\log(1+\theta_{i+1})$ for $i\ge1$, $C_0:=\max(1,d_1,d_2)\ge1$, $a_i:=\max(0,4(d_{i+2}-C_0(i+2)))\ge0$ for $i\ge1$, and $F(t):=C_0t+\sum_{i=1}^\infty a_i\beta(t-i)$ for $t\in\mathbb R$. At each $t$ only the finitely many indices with $i\le t$ contribute a nonzero term because $\beta(t-i)=0$ for $t-i\le0$ (step 4.2), so near $t$ the function $F$ agrees with a finite sum of $C^\infty$ functions and is $C^\infty$ by the algebra and locality properties of smooth maps [F28, F29]; differentiating that finite sum termwise by the chain rule [F30] gives $F'(t)=C_0+\sum_{i\le t}a_i\kappa(t-i)$ and $F''(t)=\sum_{i\le t}a_i\chi(t-i)$. [F28, F29, F30, step 4.1, step 4.2]

6.1 By step 5.1 and steps 1.3, 3.2, 4.2 the coefficients are nonnegative and $\kappa\ge0$, $\chi\ge0$, so $F'(t)\ge C_0\ge1$ and $F''(t)\ge0$ for every $t$; $F(0)=0$; and since $F$ is a primitive of the continuous $F'$, the evaluation clause of [F12] gives $F(t)-F(s)=\int_s^tF'\ge t-s>0$ for $s<t$, so $F$ is strictly increasing, and $F(t)\ge F(0)+t=t\ge0$ for $t\ge0$; moreover for $j\ge3$ one has $F(j)=C_0j+\sum_{i\le j}a_i\beta(j-i)\ge C_0j+a_{j-2}\beta(2)\ge C_0j+a_{j-2}/4\ge d_j$ by step 4.2 and the definition of $a_{j-2}$, while $F(1)\ge C_0\ge d_1$ and $F(2)\ge2C_0\ge d_2$ because $C_0\ge d_1,d_2$; hence $F(j)\ge d_j$ for every integer $j\ge1$. [F12, F13, F14, step 1.3, step 3.2, step 4.2, step 5.1]

7.1 Let $\mathrm{id}(t):=t$ and put $\psi:=(F-\mathrm{id})\circ S_1$ on $\Omega$. On $\mathbb R$ one has $(F-\mathrm{id})'=F'-1\ge0$ and $(F-\mathrm{id})''=F''\ge0$ by step 6.1, so $F-\mathrm{id}$ is convex by [F27] and nondecreasing because $(F-\mathrm{id})(t)-(F-\mathrm{id})(s)=\int_s^t(F'-1)\ge0$ for $s<t$ by [F12] and $F'\ge1$; the function $S_1$ is real-valued with $\mathcal L_{S_1}(a;v)>0$ for $v\ne0$ by step 2.1, hence $\mathcal L_{S_1}\ge0$ everywhere on the real vector space $\mathbb C^n$, and the $C^2$ Levi criterion [F4] makes $S_1$ plurisubharmonic on $\Omega$; therefore the composition $\psi=(F-\mathrm{id})\circ S_1$ is plurisubharmonic on $\Omega$ by [F5]. [F4, F5, F12, F27, step 2.1, step 6.1]

8.1 Put $\Phi:=F\circ S_1=S_1+\psi$. Then $\Phi\in C^\infty(\Omega)$ by the chain rule and the algebra of smooth maps [F28, F30], and for every $a\in\Omega$ and $v\in\mathbb C^n$ the Levi form is additive, $\mathcal L_\Phi(a;v)=\mathcal L_{S_1}(a;v)+\mathcal L_\psi(a;v)\ge\mathcal L_{S_1}(a;v)>0$: the middle inequality holds because $\psi\in C^2$ is plurisubharmonic, so $\mathcal L_\psi\ge0$ by the $C^2$ Levi criterion [F4], while $\mathcal L_{S_1}(a;v)>0$ for $v\ne0$ by step 2.1 and [F3]; hence $\Phi$ is strictly plurisubharmonic on $\Omega$ and $\Phi\in C^\infty$. [F3, F4, F28, F30, step 2.1, step 7.1]

9.1 Let $H_\Phi:=(\partial^2\Phi/\partial z_j\partial\bar z_k)$ and let $w_\Phi$ be the sum of its $q$ smallest eigenvalues. By steps 8.1 and 1.2 and the Rayleigh characterization recorded in step 1.2, $\lambda_1(H_\Phi)(a)=\min_{\|v\|=1}\mathcal L_\Phi(a;v)\ge\min_{\|v\|=1}\mathcal L_{S_1}(a;v)=\lambda_1(H_{S_1})(a)=\lambda_1(H)(a)\ge g(a)>0$, the last equality because $S_1$ and $S$ have the same complex Hessian (step 2.1) and the last inequality by step 1.2; hence $w_\Phi(a)\ge\lambda_1(H_\Phi)(a)\ge g(a)>0$ on $\Omega$. [F24, step 2.1, step 1.2, step 8.1, algebra]

10.1 The function $a\mapsto\widetilde H(a)e^{-\Phi(a)}$ is continuous, hence Borel measurable, on $\Omega$ [F18]; since the $A_j$ partition $\Omega$ (step 3.1), Beppo Levi's theorem [F21] gives $\int_\Omega\widetilde He^{-\Phi}dV=\sum_{j\ge2}\int_{A_j}\widetilde He^{-\Phi}dV$; on $A_j$ one has $S_1\ge j-1$, hence $\Phi=F(S_1)\ge F(j-1)$ because $F$ is strictly increasing (step 6.1), and $\int_{A_j}\widetilde H\,dV\le\theta_j$ (step 4.1), so the scalar rule and monotonicity [F19] give $\int_{A_j}\widetilde He^{-\Phi}dV\le\theta_je^{-F(j-1)}\le\theta_j(1+\theta_j)^{-1}e^{-(j-1)}\le e^{-(j-1)}$, the middle inequality because $F(j-1)\ge d_{j-1}=(j-1)+\log(1+\theta_j)$ (steps 5.1 and 6.1); the series $\sum_{j\ge2}e^{-(j-1)}=\sum_{k\ge1}(e^{-1})^k$ converges by the ratio test [F22] since $e^{-1}<1$ by strict increase of the exponential [F23]; therefore the energy $E_\Phi(\eta):=\int_\Omega|\eta|^2w_\Phi^{-1}e^{-\Phi}dV$ of $\eta$ with respect to $\Phi$ satisfies $E_\Phi(\eta)\le\int_\Omega\widetilde He^{-\Phi}dV<+\infty$ by step 9.1. [F18, F19, F21, F22, F23, step 3.1, step 4.1, step 5.1, step 6.1, step 9.1]

11.1 Since $\eta$ is a smooth $\bar\partial$-closed $(0,q)$-form and $\Phi\in C^\infty(\Omega;\mathbb R)$ is strictly plurisubharmonic with $E_\Phi(\eta)<+\infty$ (steps 8.1 and 10.1), the $C^\infty$ branch of the Hörmander theorem [F7] (claim 2) supplies $\zeta\in C^\infty(\Omega;\Lambda^{0,q-1})$ with $\bar\partial\zeta=\eta$; thus $\eta\in B^{0,q}_{\bar\partial}(\Omega)$, its class in $H^{0,q}_{\bar\partial}(\Omega)=Z^{0,q}_{\bar\partial}(\Omega)/B^{0,q}_{\bar\partial}(\Omega)$ is zero by [F6], and since $\eta$ was an arbitrary smooth $\bar\partial$-closed $(0,q)$-form one has $H^{0,q}_{\bar\partial}(\Omega)=0$. [F6, F7, step 8.1, step 10.1]

12.1 Claim 1 of the statement is proved by steps 10.1 and 11.1, and claim 2 by step 1.4; both are stated under the ambient Axiom of Choice recorded in the Given and cited as [F32], consumed in this proof only through the AC$_\omega$ instances of the measure-theoretic suppliers [F17] and [F18] and through the AC hypothesis of [F7], and the weight $\Phi=F\circ S_1$ produced in step 8.1 is smooth and strictly plurisubharmonic with no boundary regularity claimed. [F7, F17, F18, F32, step 11.1, step 1.4] ∎
