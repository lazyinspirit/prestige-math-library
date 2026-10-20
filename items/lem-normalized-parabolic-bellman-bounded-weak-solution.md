---
id: lem-normalized-parabolic-bellman-bounded-weak-solution
kind: lemma
title: "A normalized parabolic Bellman equation has a bounded weak solution"
status: draft
origin: session
pipeline_run: machine-learning-all-101-2026-10-19
page: anderson-reverse-time-diffusion
dependency_level: 0
axiom_base: "Full Axiom of Choice, through the existing Alexandrov supplier."
deps:
  - def-axiom-of-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - cor-real-spectral-theorem-for-self-adjoint-endomorphisms
  - thm-na-semiconvex-alexandrov-second-order-differentiability
  - thm-arbitrary-measure-duality-for-l-p-when-one-less-p-less-infinity
  - lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set
  - thm-lebesgue-differentiation-theorem-for-locally-integrable-functions-on-r-n
  - thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign
  - thm-mollifier-approximation-in-distributions
  - cor-bolzano-weierstrass-in-rn
  - thm-heine-borel-rn
  - thm-am-gm
  - cor-cauchy-schwarz-inequality-for-l-two
  - def-weak-derivative-of-a-locally-integrable-function
  - lem-weak-derivatives-are-unique-almost-everywhere
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "N. V. Krylov, Sobolev and Viscosity Solutions for Fully Nonlinear Elliptic and Parabolic Equations, AMS233"
      url: "https://www.scribd.com/document/771799124/N-v-Krylov-Sobolev-and-Viscosity-Solutions-for-Fully-Nonlinear-Elliptic-and-Parabolic-Equations-Mathematical-Surveys-and-Monographs-Mathemati"
      locator: "Complete Section1.2 printed pp5-14, preceding finite-difference construction in Section1.1, and Theorem2.2.4 construction printed pp26-29; actual public full OCR read"
---

## Statement

Assume the Axiom of Choice. Let $d\ge1$, $\lambda>0$, and let $f:\mathbb R\times\mathbb R^d\to[0,\infty)$ be bounded. Suppose that $f$ is globally Lipschitz with constant $L_f$ and that $f(z)+N_f|z|^2$ is convex for some $N_f\ge0$, where $z=(t,x)$. Set
$$n=d+1,\qquad V=\frac{\|f\|_\infty}{n\lambda},\qquad L=\frac{L_f}{n\lambda},\qquad N=\frac{N_f}{n\lambda}.$$
Define
$$\mathcal C=\{a\in\operatorname{Sym}_d:a\ge0,\ \operatorname{tr}a\le1\},\qquad r(a)=1-\operatorname{tr}a,\qquad k(a)=(r(a)\det a)^{1/n}.$$
There is a globally $L$-Lipschitz function $v:\mathbb R^{d+1}\to[0,V]$ such that $v(z)+N|z|^2$ is convex. Its weak derivatives $\partial_tv$, $D_iv$ and $D_{ij}v$, $1\le i,j\le d$, exist and are bounded. They satisfy
$$|D_zv|\le L,\qquad -2NI\le D_x^2v\le\lambda vI\quad\text{almost everywhere},$$
and, outside one common null set,
$$\max_{a\in\mathcal C}\{r(a)\partial_tv+a:D_x^2v-\lambda v+k(a)f\}=0.$$
In particular, with $S=\lambda v-\partial_tv$ and $H=\lambda vI-D_x^2v$,
$$S\ge0,\qquad H\ge0,\qquad S\det H=\left(\frac{f}{d+1}\right)^{d+1}\quad\text{almost everywhere}.$$
For each fixed $a\in\mathcal C$, the corresponding linear expression is also nonpositive as a distribution.

The same $v$ can be chosen below every bounded smooth function $\psi$ for which $\partial_t\psi,D_x^2\psi$ are bounded and uniformly continuous and
$$\sup_{a\in\mathcal C}\{r(a)\partial_t\psi+a:D_x^2\psi-\lambda\psi+k(a)f\}\le0\quad\text{everywhere}.$$

## Facts & Assumptions

**Given:** The Axiom of Choice; the dimension, discount and nonnegative bounded Lipschitz semiconvex data in the Statement. All integrals below use Euclidean Lebesgue measure.

[A1] The Axiom of Choice implies Countable Choice. It permits simultaneous choices of eigenbases and the countable subsequence selections below. ([[def-axiom-of-choice]], [[thm-choice-implies-dependent-implies-countable-choice]])

[F1] A locally semiconvex function on an open Euclidean set has a direction-uniform Peano quadratic expansion outside a null set. ([[thm-na-semiconvex-alexandrov-second-order-differentiability]])

[F2] A real self-adjoint finite-dimensional map has an orthonormal eigenbasis. ([[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]])

[F3] Real $L^2$ duality holds, and compactly supported smooth tests are dense in $L^2$ of every open ball. ([[thm-arbitrary-measure-duality-for-l-p-when-one-less-p-less-infinity]], [[lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set]])

[F4] Ball averages recover each locally integrable real function almost everywhere. ([[thm-lebesgue-differentiation-theorem-for-locally-integrable-functions-on-r-n]])

[F5] Convolution with a compactly supported smooth unit-mass kernel is smooth, differentiates on the kernel, and approximates distributions. ([[thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign]], [[thm-mollifier-approximation-in-distributions]])

[F6] Bounded Euclidean sequences admit convergent subsequences, and closed bounded Euclidean balls are compact. ([[cor-bolzano-weierstrass-in-rn]], [[thm-heine-borel-rn]])

[F7] AM–GM holds for finite nonnegative tuples, with equality exactly when all entries agree. ([[thm-am-gm]])

[F8] Integral Cauchy–Schwarz gives $\|u\|_1\le |B|^{1/2}\|u\|_2$ on a finite-measure ball and bounds mean absolute oscillation by mean-square oscillation. ([[cor-cauchy-schwarz-inequality-for-l-two]])

[F9] Weak derivatives satisfy the signed compact-test identity and, when locally integrable, are unique almost everywhere under Countable Choice. ([[def-weak-derivative-of-a-locally-integrable-function]], [[lem-weak-derivatives-are-unique-almost-everywhere]])

## Proof

**Proof technique:** positive discounted finite differences, preserved semiconvexity, weak-test bounds, and strict quadratic contacts.

1.1 For each $a\in\mathcal C$, choose unit eigenvectors $e_i(a)$ and eigenvalues $s_i(a)\ge0$, so $a=\sum_{i=1}^d s_i(a)e_i(a)e_i(a)^{\mathsf T}$. For $0<h<1$, define $$L_h^au(t,x)=\sum_i\frac{s_i(a)}{h^2}\bigl(u(t,x+he_i)-2u(t,x)+u(t,x-he_i)\bigr)+\frac{r(a)}h\bigl(u(t+h,x)-u(t,x)\bigr).$$ All off-center coefficients are nonnegative. Their sum is $q_h(a)=2\operatorname{tr}(a)/h^2+r(a)/h$. [A1, F2, construct]

1.2 We will use this elementary representation fact on a bounded open ball $B$: if a linear functional $T$ on compact smooth tests satisfies $|T\eta|\le C\|\eta\|_1$, it is integration against a function of absolute value at most $C$. Indeed, $\|\eta\|_1\le |B|^{1/2}\|\eta\|_2$ extends $T$ continuously from the dense test subspace to $L^2(B)$. Real $L^2$ duality represents it by $g\in L^2(B)$. The original $L^1$ estimate extends to all $L^2$ tests, because their $L^2$ approximations also converge in $L^1$. Test with $\operatorname{sgn}(g)\mathbf1_{\{|g|>C+\epsilon\}}$ to obtain a contradiction unless that set is null. Hence $|g|\le C$. The unique local representatives agree on overlaps. [F3, F8, F9, construct, algebra]

2.1 Write $L_h^au=M_h^au-q_h(a)u$, where $M_h^a$ is its off-center positive operator, and define $$P_hu(z)=\sup_{a\in\mathcal C}\frac{M_h^au(z)+k(a)f(z)}{\lambda+q_h(a)}.$$ Put $Q_h=2h^{-2}+h^{-1}$ and $\gamma_h=Q_h/(\lambda+Q_h)<1$. Positivity and $M_h^a1=q_h(a)\le Q_h$ give $$\|P_hu-P_hw\|_\infty\le\gamma_h\|u-w\|_\infty.$$ The same argument bounds $\sup(P_hu-P_hw)^+$ by $\gamma_h\sup(u-w)^+$. [step 1.1, algebra]

3.1 Starting with $u_0=0$, iterate $u_{j+1}=P_hu_j$. The contraction bounds successive differences by a summable geometric sequence. Their sums converge uniformly to a bounded function $v_h$, since a uniformly Cauchy sequence of bounded real functions has a bounded pointwise limit and converges uniformly. The contraction estimate gives $P_hv_h=v_h$ and uniqueness among bounded fixed points. Multiplying the individual residuals by their denominators, which lie in $[\lambda,\lambda+Q_h]$, shows that this is equivalent to $$\sup_{a\in\mathcal C}\{L_h^av_h-\lambda v_h+k(a)f\}=0.\qquad\text{(1)}$$. [step 2.1, construct, algebra]

3.2 Let $\psi$ be a supersolution as in the Statement. The centered second difference is an average of the corresponding directional second derivative, and the forward time difference is an average of $\partial_t\psi$. Bounded uniform continuity gives $E_h\to0$ such that, uniformly in $z$ and $a$, $$\left|L_h^a\psi-r(a)\partial_t\psi-a:D_x^2\psi\right|\le E_h.$$ For example, the sum of the spatial-Hessian and time-derivative moduli of continuity at scale $h$ suffices, since $r(a)+\operatorname{tr}a=1$. Therefore $\Psi_h=\psi+E_h/\lambda$ satisfies $P_h\Psi_h\le\Psi_h$. [step 1.1, step 2.1, given, algebra]

4.1 AM–GM applied to $r(a),s_1(a),\ldots,s_d(a)$, whose sum is $1$, gives $0\le k(a)\le1/n$. Hence $P_h$ preserves $0\le u\le V$: at the upper bound its numerator is at most $q_h(a)V+\|f\|_\infty/n=(\lambda+q_h(a))V$. Thus $0\le v_h\le V$. [F7, step 2.1, step 3.1, algebra]

5.1 If $u$ has Lipschitz constant at most $L$, each affine control expression in $P_hu$ has Lipschitz constant at most $$\frac{q_h(a)L+L_f/n}{\lambda+q_h(a)}\le L.$$ A supremum preserves this common bound. Iteration and uniform convergence therefore make every $v_h$ globally $L$-Lipschitz. [step 2.1, step 3.1, step 4.1, given]

5.2 If $u(z)+N|z|^2$ is convex, every translate of $u$ has the same semiconvexity constant $N$. The numerator in each affine control expression has semiconvexity constant at most $q_h(a)N+N_f/n$. After division this is at most $N$, since $N_f/n=\lambda N$. Adding $N|z|^2$ makes each expression convex; the translation corrections to its quadratic term are affine plus constants. Their supremum is convex. Starting from $0$ and passing to the uniform limit proves that $v_h+N|z|^2$ is convex. [step 2.1, step 3.1, step 4.1, given, algebra]

6.1 Take a sequence $h_j\downarrow0$. Diagonally select a subsequence along which $v_{h_j}$ converges at every rational point. Boundedness gives the successive subsequences, and finite rational nets plus the common Lipschitz constant give uniform convergence on every compact set. Call the limit $v$. It satisfies $0\le v\le V$, the global $L$-Lipschitz bound, and convexity of $v+N|z|^2$. [A1, F6, step 4.1, step 5.1, step 5.2, construct]

7.1 The one-sided contraction estimate gives $$\sup(v_h-\Psi_h)^+\le\gamma_h\sup(v_h-\Psi_h)^+.$$ The supremum is finite, so it vanishes. Pass along the chosen subsequence to obtain $v\le\psi$. This proves the comparison assertion for the same constructed limit. [step 2.1, step 3.1, step 6.1, step 3.2, algebra]

7.2 Fix $a\in\mathcal C$ and a nonnegative compactly supported smooth test $\eta$. Equation (1) implies $L_h^av_h-\lambda v_h+k(a)f\le0$. Integrate against $\eta$ and transfer translations to $\eta$. Its adjoint centered differences converge uniformly, on a common compact support, to the spatial second derivatives; its adjoint forward difference converges to $-\partial_t\eta$. Local uniform convergence of $v_h$ gives $$\int v\bigl(a:D_x^2\eta-r(a)\partial_t\eta-\lambda\eta\bigr)+\int k(a)f\eta\le0.\qquad\text{(2)}$$ Thus each fixed-control inequality holds as a distribution. [F9, step 1.1, step 3.1, step 6.1, algebra]

7.3 Choose a nonnegative smooth compactly supported unit-mass kernel $\rho$ and put $\rho_\epsilon(z)=\epsilon^{-n}\rho(z/\epsilon)$, $v_\epsilon=v*\rho_\epsilon$. The common Lipschitz bound gives $|D_zv_\epsilon|\le L$, and $v_\epsilon\to v$ locally uniformly. Integration by parts bounds each distributional directional derivative by $L\|\eta\|_1$. Step 1.2 represents these by bounded weak derivatives. Using a countable dense set of unit directions gives $|D_zv|\le L$ almost everywhere. [F5, F9, step 6.1, step 1.2, construct]

8.1 Semiconvexity gives $D_z^2v_\epsilon\ge-2NI$. For a unit spatial vector $e$, insert the rank-one control $a=ee^{\mathsf T}$ into (2). It has $r(a)=k(a)=0$, so $D_{ee}v-\lambda v\le0$ as distributions. Convolution makes this $D_{ee}v_\epsilon\le\lambda v_\epsilon$ everywhere. Taking a countable dense set of $e$ and then continuity yields $$-2NI\le D_x^2v_\epsilon\le\lambda v_\epsilon I\le\lambda VI.\qquad\text{(3)}$$. [F5, step 6.1, step 7.2, algebra]

9.1 Set $C=\max(2N,\lambda V)$. Every spatial Hessian entry in (3) has absolute value at most $C$. For a compact smooth test $\eta$, $$\int v\,\partial_{x_ix_j}\eta=\lim_{\epsilon\downarrow0}\int (D_{ij}v_\epsilon)\eta.$$ Step 1.2 therefore represents this distribution by an actual weak derivative $D_{ij}v\in L^\infty$, with norm at most $C$. Passing the directional bounds through tests gives $-2NI\le D_x^2v\le\lambda vI$ almost everywhere. The control $a=0$ in (2) similarly gives $\partial_tv\le\lambda v$. [F9, step 7.2, step 1.2, step 7.3, step 8.1]

10.1 Each individually existing derivative commutes with convolution by its weak-test identity: if $g=D^\beta v$, where $\beta$ is a first index or two spatial indices, test against $y\mapsto\rho_\epsilon(z-y)$ to obtain $$D^\beta(v*\rho_\epsilon)(z)=\int g(y)\rho_\epsilon(z-y)\,dy.$$ The factors $(-1)^{|\beta|}$ cancel. This argument uses only that particular weak derivative. All expressions in (2) now have bounded-function representatives. Discard the null sets for a countable dense subset of $\mathcal C$; continuity in $a$, including continuity of the determinant at singular matrices, extends the inequalities to every $a$ on one common full-measure set. [F5, F9, step 7.2, step 7.3, step 9.1, algebra]

10.2 By semiconvexity and the local Alexandrov theorem, almost every $z_0$ has a direction-uniform expansion $v(z)=q(z)+o(|z-z_0|^2)$ for a quadratic polynomial $q$ with $q(z_0)=v(z_0)$. Require also that ball averages recover each bounded weak first and spatial second derivative $g$, and $g^2$, at $z_0$. These finitely many requirements remove only a null set. Expanding the square gives $$\frac{1}{|B(z_0,s)|}\int_{B(z_0,s)}|g-g(z_0)|^2\longrightarrow0,$$ so Cauchy–Schwarz gives mean absolute convergence as well. [A1, F1, F4, F8, step 6.1, step 7.3, step 9.1]

11.1 The first-order blowups $[v(z_0+sy)-v(z_0)]/s$ converge locally uniformly to $Dq(z_0)\cdot y$. Their weak derivatives are $D_zv(z_0+sy)$, which converge locally in $L^1$ to the weak derivative values at $z_0$ by step 10.2. Distributional limits identify those values with $Dq(z_0)$. Similarly the second-order blowups $$\frac{v(z_0+sy)-v(z_0)-sDq(z_0)\cdot y}{s^2}$$ converge locally uniformly to $\tfrac12y^{\mathsf T}D^2q\,y$, while their spatial second weak derivatives are $D_x^2v(z_0+sy)$ and converge locally in $L^1$ to $D_x^2v(z_0)$. Thus the spatial block of $D^2q$ equals that actual weak Hessian. These scaled weak identities follow directly by changing variables in the compact-test identities. [F9, step 7.3, step 9.1, step 10.2, algebra]

11.2 Fix $\epsilon>0$ and set $q_\pm(z)=q(z)\pm\epsilon|z-z_0|^2$. On a sufficiently small closed ball centered at $z_0$, the expansion makes $q_+$ a strict upper contact and $q_-$ a strict lower contact. Let $z_j$ maximize $v_{h_j}-q_+$ there. Local uniform convergence implies $z_j\to z_0$ and $m_j=(v_{h_j}-q_+)(z_j)\to0$. For large $j$, every stencil neighbor of $z_j$ remains in that ball. Nonnegative off-center weights then give $$0\le\sup_a\{L_{h_j}^aq_+-\lambda q_++k(a)f\}(z_j)-\lambda m_j$$. [F6, step 1.1, step 3.1, step 6.1, step 10.2, construct]

12.1 Centered spatial differences are exact on a quadratic polynomial; its forward time difference differs from its time derivative by $h_j\partial_{tt}q_+/2$. This error is uniform in the controls, since $0\le r(a)\le1$. Bounded coefficients and uniform Lipschitz continuity of $f$ therefore allow passage in step 11.2 to $$\max_a\{r(a)\partial_tq_++a:D_x^2q_+-\lambda q_++k(a)f\}(z_0)\ge0$$. [step 1.1, step 11.2, given, algebra]

13.1 Minimize $v_{h_j}-q_-$ on the same ball. The identical positive-weight calculation reverses the inequality and gives the corresponding maximum for $q_-$ nonpositive in the limit. Let $\epsilon\downarrow0$ in both conclusions. Continuity of the finite-dimensional maximum gives zero for $q$. By step 11.1 its first and spatial second coefficients are the actual weak derivatives of $v$ at $z_0$. This proves the asserted Bellman equation outside a null set. [step 1.1, step 3.1, step 11.1, step 11.2, step 12.1, algebra]

14.1 At a point where the equation and derivative bounds hold, put $S=\lambda v-\partial_tv\ge0$ and $H=\lambda vI-D_x^2v\ge0$. The equation becomes $$\max_{\substack{r\ge0,\ a\ge0\\r+\operatorname{tr}a=1}}\{-rS-a:H+(r\det a)^{1/n}f\}=0.\qquad\text{(4)}$$ In particular every normalized control satisfies $rS+a:H\ge(r\det a)^{1/n}f$. [step 9.1, step 10.1, step 13.1, algebra]

15.1 For $\delta>0$, let $S_\delta=S+\delta$, $H_\delta=H+\delta I$, and $$c_\delta=(S_\delta^{-1}+\operatorname{tr}H_\delta^{-1})^{-1},\qquad r_\delta=c_\delta/S_\delta,\qquad a_\delta=c_\delta H_\delta^{-1}.$$ This is a normalized control, and $$r_\delta S+a_\delta:H\le nc_\delta,\qquad (r_\delta\det a_\delta)^{1/n}=\frac{c_\delta}{(S_\delta\det H_\delta)^{1/n}}.$$ Insert it into the inequality from step 14.1 and cancel $c_\delta>0$ to get $f\le n(S_\delta\det H_\delta)^{1/n}$. Sending $\delta\downarrow0$ gives $f\le n(S\det H)^{1/n}$, including $S=0$ or singular $H$. [F2, step 14.1, construct, algebra]

16.1 If $S>0$ and $H$ is positive definite, AM–GM for $rS$ and the eigenvalues of $a^{1/2}Ha^{1/2}$ gives $$rS+a:H\ge n(r\det a\,S\det H)^{1/n}.$$ If $f<n(S\det H)^{1/n}$, the expression in (4) is strictly negative for interior controls. It is also strictly negative for boundary controls: there $r\det a=0$, whereas $rS+a:H>0$ because $r+\operatorname{tr}a=1$. Compactness of the normalized control set and continuity make its maximum strictly negative, contradicting (4). Thus equality holds. If $S=0$ or $H$ is singular, step 15.1 already gives $f=0$ and $S\det H=0$. This proves the product identity in all cases, and completes every assertion. [F2, F6, F7, step 14.1, step 15.1, algebra] ∎

## Source notes

The source is Krylov's AMS233, Sections1.1–1.2 and the construction in Theorem2.2.4. The finite-difference contraction is specialized here to normalized parabolic controls. Rank-one controls provide the upper spatial Hessian bound directly; an inline $L^2$ representation argument supplies actual weak derivatives. The proof uses the local Alexandrov theorem only for the final contact argument. The weak time and spatial derivatives are handled individually; no second time or mixed time-space derivatives are asserted.
