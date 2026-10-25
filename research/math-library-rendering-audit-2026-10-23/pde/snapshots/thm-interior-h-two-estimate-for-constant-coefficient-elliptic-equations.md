---
id: thm-interior-h-two-estimate-for-constant-coefficient-elliptic-equations
kind: theorem
title: "Interior $H^2$ estimate for constant-coefficient elliptic equations"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 5
deps: [def-local-weak-solution-for-a-divergence-form-operator, def-uniformly-elliptic-divergence-form-operator, lem-difference-quotient-integration-by-parts, lem-tangential-difference-quotient-test-function, thm-difference-quotient-characterisation-of-w-one-p-for-p-greater-than-one, cor-scaled-caccioppoli-inequality-on-concentric-balls, lem-scaled-euclidean-bumps-with-compact-support-and-gradient-bound, thm-young-inequality-real-exponents, thm-holder-inequality-for-integrals, def-countable-choice, lem-weak-limit-of-uniformly-bounded-difference-quotients-is-the-weak-derivative, def-the-standard-smooth-step-function, thm-chain-rule-for-total-derivatives]
landmark: false
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Richard S. Laugesen, Linear Analysis and Partial Differential Equations (University of Illinois, 2020, complete 158-page graduate notes)"
      url: "https://publish.illinois.edu/rlaugesen/files/2023/07/554-Lectures.pdf"
      locator: "Chapter 5, Section 5.2, Theorem 5.6 (proof for $L=-\\Delta$) and Proposition 5.7, printed pp. 108-110 (read in full)"
    - title: "John K. Hunter, Notes on Partial Differential Equations (UC Davis, revised 18 June 2014, complete 242-page two-quarter graduate notes)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "Section 4.11, Theorem 4.27 and the difference-quotient proof, printed pp. 110-114 (read in full)"
---

## Statement

Assume Countable Choice. Let $n\ge1$, $\mathbb K\in\{\mathbb R,\mathbb C\}$,
let $a^{ij}\in\mathbb K$ be a constant matrix satisfying
$\operatorname{Re}\big(\sum a^{ij}\xi_j\overline{\xi_i}\big)\ge\theta|\xi|^2$
with $\theta>0$ and $|a^{ij}|\le M_a$, let $b^i,c\in\mathbb K$ be constants with $|b^i|\le M_b$,
$|c|\le M_c$, and let $L$ be the associated constant-coefficient
divergence-form operator with form $a$. Let $f\in L^2(B_R(x_0))$ and let
$u\in H^1(B_R(x_0))$ solve $Lu=f$ weakly on $B_R(x_0)$. Then
$u\in H^2(B_r(x_0))$ for every $0<r<R$, with
$$\|D^2u\|_{L^2(B_r(x_0))}\le C\Big(\left(1+\frac{1}{(R-r)^2}\right)\|u\|_{L^2(B_R(x_0))}+\|f\|_{L^2(B_R(x_0))}\Big),$$
where $C=C(n,\theta,M_a,M_b,M_c)$. No symmetry of $a$ and no boundary condition
on $u$ is required, and the estimate is the transparent constant-coefficient
core of the variable-coefficient theorem.

## Facts & Assumptions

**Given:** Countable Choice; the ball $B_R(x_0)$ with $0<r<R$; constant coefficients $a^{ij},b^i,c$ with the bounds and ellipticity of the Statement; $f\in L^2(B_R(x_0))$; and a local weak solution $u\in H^1(B_R(x_0))$ of $Lu=f$.

[F1] Local weak solution: $a(u,\varphi)=\int_{B_R(x_0)}f\overline\varphi\,dx$ for every $\varphi\in C_c^\infty(B_R(x_0))$. ([[def-local-weak-solution-for-a-divergence-form-operator]])

[F2] The constant-coefficient form and ellipticity: $a(w,z)=\int\big(a^{ij}D_jw\overline{D_iz}+b^iD_iw\overline z+cw\overline z\big)dx$ with $\operatorname{Re}\big(a^{ij}\xi_j\overline{\xi_i}\big)\ge\theta|\xi|^2$, $|b^i|\le M_b$, $|c|\le M_c$. ([[def-uniformly-elliptic-divergence-form-operator]])

[F3] Difference-quotient calculus: for locally integrable classes the two-domain integration-by-parts identity holds and reduces to $\int\delta_h^iw\,\overline{\varphi}\,dx=-\int w\,\overline{\delta_{-h}^i\varphi}\,dx$ whenever the product has compact support of distance exceeding $|h|$ from the boundary; the product rule $\delta_h^i(w\zeta)=(\tau_{-he_i}w)\delta_h^i\zeta+(\delta_h^iw)\zeta$ holds; and difference quotients commute with weak derivatives, $D^\alpha(\delta_h^iw)=\delta_h^i(D^\alpha w)$ on the shrunken domain. ([[lem-difference-quotient-integration-by-parts]])

[F4] The localised test class: for $u\in H^1$, $\eta\in C_c^\infty$ and $0<|h|<\operatorname{dist}(\operatorname{supp}\eta,\partial\Omega)$ the class $v:=-\delta_{-h}^k\big(\eta^2\delta_h^ku\big)$ lies in $H^1_0$ and is an admissible test class in the weak equation. ([[lem-tangential-difference-quotient-test-function]])

[F5] Scales: for every $x_0$ and $0<r<R$ there is $\eta\in C_c^\infty(B_{(r+R)/2}(x_0))$ with $0\le\eta\le1$, $\eta=1$ on $B_r(x_0)$ and $\|D\eta\|_\infty\le C(n)/(R-r)$; and the scaled Caccioppoli inequality holds on concentric balls $B_\rho(x_0)\Subset B_R(x_0)$. ([[def-the-standard-smooth-step-function]], [[thm-chain-rule-for-total-derivatives]], [[lem-scaled-euclidean-bumps-with-compact-support-and-gradient-bound]], [[cor-scaled-caccioppoli-inequality-on-concentric-balls]])

[F6] Young and Cauchy--Schwarz: $ab\le\varepsilon a^2+(4\varepsilon)^{-1}b^2$ for $\varepsilon>0$ and real $a,b\ge0$, and $|\int g\overline h\,dx|\le\|g\|_{L^2}\|h\|_{L^2}$. ([[thm-young-inequality-real-exponents]], [[thm-holder-inequality-for-integrals]])

[F7] Difference-quotient characterisation of $W^{1,p}$ for $1<p<\infty$: (1) if $u\in W^{1,p}(\Omega)$ then $\|\delta_h^iu\|_{L^p(\Omega')}\le\|D_iu\|_{L^p(\Omega)}$ for $0<|h|<\operatorname{dist}(\Omega',\partial\Omega)$; (2) conversely, if $\|\delta_h^iu\|_{L^p(\Omega')}\le C$ for all $0<|h|<\operatorname{dist}(\Omega',\partial\Omega)/2$, then $D_iu\in L^p(\Omega')$ with $\|D_iu\|_{L^p(\Omega')}\le C$. The weak-limit supplier proves the same converse from bounds for all $0<|h|<h_0$ for any finite positive $h_0$ below the domain margin. ([[thm-difference-quotient-characterisation-of-w-one-p-for-p-greater-than-one]], [[lem-weak-limit-of-uniformly-bounded-difference-quotients-is-the-weak-derivative]])

## Proof

**Proof technique:** direct.

1.1 Setup. Fix $x_0$ and $0<r<R$, put $\rho:=(r+R)/2$ and $h_0:=(R-r)/4$, and choose the real cutoff $\eta(x)=\sigma((s_*^2-|x-x_0|^2)/(s_*^2-r^2))$ with $s_*=(r+\rho)/2$ and the fixed smooth step of [F5]. Its support lies in $\overline B_{s_*}\Subset B_\rho$, it equals one on $B_r$, and the chain rule gives $\|D\eta\|_\infty\le4\|\sigma'\|_\infty/(\rho-r)=C_1/(R-r)$ with $C_1=8\|\sigma'\|_\infty$, so that $\|D(\eta^2)\|_\infty\le 2C_1/(R-r)$. For $0<|h|<h_0$ and $k\in\{1,\dots,n\}$ the class $v:=-\delta_{-h}^k(\eta^2\delta_h^ku)$ is defined and admissible in the weak equation by [F4], and all difference quotients below are taken on $B_\rho(x_0)$. [F4, F5]

2.1 Constant-coefficient translation. For $w=\eta^2\delta_h^ku$, its support and all small translates are compactly contained in $B_R$. Discrete integration by parts and commutation of weak derivatives therefore give $a(u,-\delta_{-h}^kw)=a(\delta_h^ku,w)$, since the coefficients are constant. This use is confined to the supported test $w$; an arbitrary $H^1_0(B_R)$ test need not admit a translation staying inside the ball. [F2, F3, step 1.1]

3.1 Expansion and datum. Put $E_h=\|\eta\delta_h^kDu\|_2$ and $s=R-r$. The product rule expands $a(\delta_h^ku,\eta^2\delta_h^ku)$ into the accretive principal term, the principal cutoff term, and drift/reaction terms. On the supported cutoff neighbourhood, with shifts remaining inside $B_\rho$, the coordinate quotient bound gives $\|\delta_h^ku\|_2\le\|D_ku\|_{L^2(B_\rho)}$ after decreasing $h_0$ to the cutoff-support margin if necessary. Thus $\|v\|_2\le C(E_h+s^{-1}\|Du\|_{L^2(B_\rho)})$. This only uses norms on valid shrunken domains, not an undefined quotient on all $B_R$. [F1, F2, F3, F7, step 2.1, algebra]

4.1 Absorption. The principal cutoff term is at most $C M_a s^{-1}E_h\|Du\|_{L^2(B_\rho)}$. The drift and reaction terms are bounded by $C M_bE_h\|Du\|_{L^2(B_\rho)}+M_c\|Du\|_{L^2(B_\rho)}^2$. The datum pairing is at most $C\|f\|_{L^2(B_R)}(E_h+s^{-1}\|Du\|_{L^2(B_\rho)})$. Young's inequality and $\operatorname{Re}P_h\ge\theta E_h^2$ therefore give $E_h^2\le C((1+s^{-2})\|Du\|_{L^2(B_\rho)}^2+\|f\|_{L^2(B_R)}^2)$, where $C$ depends only on $n,\theta,M_a,M_b,M_c$, uniformly in sufficiently small $h$. [F2, F6, step 3.1, algebra]

5.1 Refined gradient estimate. To eliminate the intermediate gradient, choose a smooth cutoff $\beta$ equal to one on $B_\rho$, supported in $B_R$ with $\|D\beta\|_\infty\le C/s$, and test the weak equation with $\beta^2u$. The Caccioppoli computation behind [F5], taking real parts and absorbing the principal cutoff and drift products by Young, gives $\|Du\|_{L^2(B_\rho)}^2\le C((1+s^{-2})\|u\|_{L^2(B_R)}^2+\|f\|_{L^2(B_R)}\|u\|_{L^2(B_R)})$. Set $t=(1+s^{-2})^{-1}$ and use $\|f\|_2\|u\|_2\le t\|f\|_2^2+(4t)^{-1}\|u\|_2^2$. Then $\|Du\|_{L^2(B_\rho)}^2\le C((1+s^{-2})\|u\|_2^2+(1+s^{-2})^{-1}\|f\|_2^2)$. Substituting this bound into step 4.1 yields $E_h^2\le C((1+s^{-2})^2\|u\|_2^2+\|f\|_2^2)$. This retains the forcing coefficient at every scale. [F1, F2, F5, F6, step 4.1, algebra]

6.1 Conclusion. Since $\eta=1$ on $B_r$, step 5.1 bounds every coordinate quotient $\delta_h^kD_ju$ on $B_r$ uniformly for all sufficiently small $h$. The converse criterion [F7], applied with any finite threshold below both this support margin and $(R-r)/2$, gives each $D_kD_ju\in L^2(B_r)$ with the same bound. Summing the finitely many second-derivative bounds and taking square roots gives the displayed estimate $\|D^2u\|_{L^2(B_r)}\le C((1+(R-r)^{-2})\|u\|_{L^2(B_R)}+\|f\|_{L^2(B_R)})$. [step 5.1, F7, algebra] ∎

## Source notes

Laugesen's Theorem 5.6 (printed pp. 108-110) proves the estimate for $L=-\Delta$ by difference quotients with the cutoff test function, and Hunter's Theorem 4.27 (printed pp. 110-114) carries out the same scheme for general divergence-form operators; the constant-coefficient case has no coefficient commutators, so the error terms in step 3.1 contain only the cutoff gradients $D_i(\eta^2)$, which is why the step-size $h$ disappears from the final constant. The scaled Caccioppoli inequality supplies the $(R-r)^{-2}\|u\|_{L^2(B_R)}$ term exactly at the scale of the statement.
