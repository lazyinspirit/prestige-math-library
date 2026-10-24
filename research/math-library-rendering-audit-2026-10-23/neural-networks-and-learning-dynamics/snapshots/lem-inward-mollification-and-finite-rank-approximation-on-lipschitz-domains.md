---
id: lem-inward-mollification-and-finite-rank-approximation-on-lipschitz-domains
kind: lemma
title: Inward mollification and smooth finite-rank approximation on Lipschitz domains
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps:
  - def-countable-choice
  - def-sobolev-space-wkp-and-its-norm
  - lem-sobolev-norm-is-well-defined-and-definite
  - lem-finite-ambient-partitions-for-euclidean-boundary-integration
  - lem-mollification-commutes-with-weak-derivatives-in-the-interior
  - lem-complex-translation-and-approximate-identity-interfaces
  - thm-minkowski-integral-inequality
  - lem-classical-derivatives-are-weak-derivatives
  - lem-weak-leibniz-rule-with-a-smooth-factor
  - thm-heine-borel-rn
  - thm-heine-cantor-metric
  - thm-holder-inequality-for-integrals
  - prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets
  - lem-smooth-bump-between-concentric-euclidean-balls
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Kovachki et al., Neural Operator: Learning Maps Between Function Spaces With Applications to PDEs"
      url: https://www.jmlr.org/papers/volume24/21-1524/21-1524.pdf
      locator: "Appendix B, Lemma 26, printed/PDF pp. 78–80; the present proof supplies a direct inward-mollification construction instead of the cited extension and basis arguments."
---

## Statement

Assume Countable Choice. Let $D\subseteq\mathbb R^d$ be a bounded Lipschitz open set, with $d\ge1$, and let $m\in\mathbb N_0$. Let $X$ be either $W^{m,p}(D;\mathbb R)$ for $1\le p<\infty$, including $W^{0,p}(D)=L^p(D)$, or $C^m(\bar D;\mathbb R)$. In the latter space derivatives in $D$ extend continuously to $\bar D$, and the norm is $\max_{|\alpha|\le m}\sup_{\bar D}|D^\alpha u|$. For every norm-compact $K\subseteq X$ and every $\varepsilon>0$, there is a bounded finite-rank linear map $F:X\to X$ such that $\sup_{u\in K}\|Fu-u\|_X<\varepsilon$ and whose range is contained in the restrictions to $D$ of functions in $C_c^\infty(\mathbb R^d)$, with their continuous boundary values in the $C^m$ case. In particular, such smooth restrictions are norm-dense in $X$.

Moreover, there are finitely many ambient smooth cutoffs $\psi_j$, vectors $v_j$, a unit-mass $\rho\in C_c^\infty(\mathbb R^d)$, and $t_0>0$ such that for $0<t<t_0$ the kernel $k_t(x,y)=\sum_j\psi_j(x)\rho_t(x+tv_j-y)$, with $\rho_t(z)=t^{-d}\rho(z/t)$, defines bounded linear smoothing maps $S_tu(x)=\int_Dk_t(x,y)u(y)\,dy$. They satisfy $\sup_{0<t<t_0}\|S_t\|_{X\to X}<\infty$ and $\sup_{u\in K}\|S_tu-u\|_X\to0$ for every norm-compact $K\subset X$. Each kernel is ambient smooth with fixed compact support in its first variable.

## Statement references

[[def-countable-choice]]

[[def-sobolev-space-wkp-and-its-norm]]

[Kovachki et al., Lemma 26](https://www.jmlr.org/papers/volume24/21-1524/21-1524.pdf)

## Facts & Assumptions

**Given:** Countable Choice, $D,d,m,X,K,\varepsilon$ as in the statement. Lipschitz means that every boundary point has a rigid graph chart in which $D$ is the strict epigraph of a Lipschitz function.

[F1] The Sobolev norm is the finite $\ell^p$ sum of the $L^p$ norms of the weak derivatives through order $m$, and $W^{0,p}=L^p$; this is a well-defined norm under Countable Choice ([[def-sobolev-space-wkp-and-its-norm]], [[lem-sobolev-norm-is-well-defined-and-definite]]).

[F2] A finite open cover of a compact Euclidean set admits nonnegative ambient smooth functions compactly supported in the respective cover members and summing to one on a neighborhood of that set ([[lem-finite-ambient-partitions-for-euclidean-boundary-integration]]).

[F3] Interior mollification commutes with every weak derivative through order $m$ wherever the closed mollifier-support ball is compactly contained in the domain ([[lem-mollification-commutes-with-weak-derivatives-in-the-interior]]).

[F4] Under Countable Choice, translations are isometries in $L^p(\mathbb R^d)$ and are norm-continuous for $p<\infty$; convolution with a compact smooth kernel is smooth and differentiates by differentiating the kernel ([[lem-complex-translation-and-approximate-identity-interfaces]]).

[F5] Minkowski's integral inequality holds for all $1\le p<\infty$; its $p=1$ case is Tonelli's identity ([[thm-minkowski-integral-inequality]]).

[F6] Classical derivatives of a $C^m$ function are weak derivatives, and the weak Leibniz rule holds for a smooth multiplier with bounded derivatives ([[lem-classical-derivatives-are-weak-derivatives]], [[lem-weak-leibniz-rule-with-a-smooth-factor]]).

[F7] Closed bounded Euclidean sets are compact, and continuous maps on compact metric spaces are uniformly continuous ([[thm-heine-borel-rn]], [[thm-heine-cantor-metric]]).

[F8] Bounded measurable Euclidean sets have finite measure, and Hölder, including $p=1$, gives $\|u\|_{L^1(D)}\le |D|^{1-1/p}\|u\|_{L^p(D)}$ for nonempty open $D$ ([[prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets]], [[thm-holder-inequality-for-integrals]]).

[F9] Nested balls admit a nonnegative compactly supported smooth bump equal to one on the inner ball ([[lem-smooth-bump-between-concentric-euclidean-balls]]).

**Choice use:** Countable Choice is used in the Sobolev, Lebesgue-measure, translation, convolution and weak-derivative interfaces [F1], [F3]–[F6], [F8]. The geometric cover and all later nets and cell selections are finite selections. No stronger choice axiom is used.

## Proof

1.1 If $D=\varnothing$, $X$ is the zero space; take $F=0$, the empty cutoff family, $k_t=0$, $S_t=0$ and $t_0=1$. If $K=\varnothing$ the compact approximation clause is vacuous and $F=0$ suffices; the smoothing construction below depends only on $D$ and $X$, and can be obtained by carrying it out with $K=\{0\}$. Henceforth both sets are nonempty. In particular $0<|D|<\infty$, because $D$ contains a ball and is bounded. Fix one boundary chart $Q$, with Lipschitz graph function $\varphi$ of constant $L$, and an ambient neighborhood $U$ of its boundary point with $\bar U\subset Q$ compact. In chart coordinates set $v=(L+2)e_d$. For $x\in\bar D\cap\bar U$, $|z|\le1$, and sufficiently small $t>0$, uniformly in $x,z$, the point $y=x+tv-tz$ stays in $Q$ because $t(|v|+1)<\operatorname{dist}(\bar U,Q^c)$. Moreover $y_d-\varphi(y')\ge x_d-\varphi(x')+t(L+2)-t|z_d|-Lt|z'|\ge t>0$. Thus $\overline B(x+tv,t)\Subset D$. Rotate $v$ back to the original coordinates. [given, F7, F8, construct, algebra]

2.1 The compact boundary admits finitely many such $U_j$, $1\le j\le J$, covering it. The compact remainder $\bar D\setminus\bigcup_{j=1}^JU_j$ lies in $D$; cover it by finitely many balls with closures in $D$, and let $U_0$ be their union, omitting it if the remainder is empty. Then $\bar U_0\Subset D$, so $v_0=0$ has the same ball property for sufficiently small $t$. Apply [F2] to this finite open cover of $\bar D$, obtaining $\psi_j\in C_c^\infty(U_j)$ with $\sum_j\psi_j=1$ near $\bar D$. The minimum of the finitely many positive bounds on $t$ gives $t_0>0$ such that $\overline B(x+tv_j,t)\Subset D$ for every $x\in\bar D\cap\operatorname{supp}\psi_j$ and $0<t<t_0$. Taking the family of all admissible chart neighborhoods before extracting a finite subcover avoids selecting a chart independently at every boundary point. [F2, F7, step 1.1, construct]

3.1 By [F9] choose a nonnegative smooth bump compactly supported in $B_1(0)$ and positive on $\overline B_{1/2}(0)$, and divide it by its positive integral to obtain $\rho\in C_c^\infty(B_1(0))$ with $\int\rho=1$. Put $\rho_t(w)=t^{-d}\rho(w/t)$. Every $u\in X$ belongs continuously to $L^1(D)$: use [F8] for Sobolev spaces, and $\|u\|_1\le |D|\|u\|_{C^m}$ for $C^m$. For its zero extension $E_0u$ define $H_{j,t}u(x)=(\rho_t*E_0u)(x+tv_j)$ and $S_tu=\sum_j\psi_jH_{j,t}u$. By [F4] these are well-defined linear constructions independent of representatives and $S_tu\in C_c^\infty(\mathbb R^d)$. [F4, F8, F9, step 2.1, construct]

4.1 First take $X=W^{m,p}(D)$. For every $|\gamma|\le m$ and $x\in\bar D\cap\operatorname{supp}\psi_j$, [F3] and step 2.1 give $$D^\gamma H_{j,t}u(x)=\int\rho(z)(E_0D^\gamma u)(x+t(v_j-z))\,dz.$$ The translated center has distance greater than $t$ from $D^c$: the entire closed ball of radius $t$ is a compact subset of $D$. The identity consequently holds on a neighborhood of each indicated $x$. Equivalently the defining weak-derivative identity can be tested against $y\mapsto\rho_t(x+tv_j-y)$, whose support is compact in $D$; its two derivative signs cancel. Only interior values are used, with no assertion that derivatives commute with zero extension across $\partial D$. [F1, F3, step 2.1, step 3.1]

4.2 For $f\in L^p(\mathbb R^d)$ define $T_{j,t}f(x)=\int\rho(z)f(x+t(v_j-z))\,dz$ and $\omega_f(r)=\sup_{|h|\le r}\|f(\cdot+h)-f\|_p$. Translation invariance and [F5] give $\|T_{j,t}f\|_p\le\|f\|_p$ and $$\|T_{j,t}f-f\|_p\le\omega_f((|v_j|+1)t).$$ By [F4], $\omega_f(r)\to0$ as $r\downarrow0$. The integral estimates also apply when $p=1$, where [F5] follows directly from Tonelli. [F4, F5, step 3.1, construct]

4.3 Fix $0<t<t_0$. Write $k_t(x,y)=\sum_j\psi_j(x)\rho_t(x+tv_j-y)$, so $S_tu(x)=\int_D k_t(x,y)u(y)\,dy$. Fix a closed box $Q$ containing $\bar D$. The finitely many $D_x^\alpha k_t$, $|\alpha|\le m$, are smooth and uniformly continuous on the compact set $\bar D\times Q$ by [F7]. For any $\eta>0$, partition $Q$ into finitely many measurable cells $Q_\ell$ of small enough diameter, assigning shared and outer faces consistently, and choose $y_\ell\in Q_\ell$. Their diameters can be chosen so that $|D_x^\alpha k_t(x,y)-D_x^\alpha k_t(x,y_\ell)|<\eta$ for $x\in\bar D$, $y\in Q_\ell$ and $|\alpha|\le m$. The point $y_\ell$ need not lie in $D$. [F7, step 3.1, construct]

5.1 Set $f_\gamma=E_0D^\gamma u$. The finite Leibniz rule [F6], step 4.1 and $\sum_j\psi_j=1$ near $\bar D$ give, for $|\alpha|\le m$, the a.e. identity on $D$ $$D^\alpha(S_tu-u)=\sum_j\sum_{\beta\le\alpha}\binom{\alpha}{\beta}(D^\beta\psi_j)\bigl(T_{j,t}f_{\alpha-\beta}-D^{\alpha-\beta}u\bigr).$$ Every derivative $D^\beta\psi_j$ vanishes off $\operatorname{supp}\psi_j$, so step 4.1 supplies exactly the identities used in this formula. All these fixed multiplier derivatives are bounded. Step 4.2 and the finite norm sum [F1] therefore imply $\|S_tu-u\|_{W^{m,p}}\to0$. The same Leibniz formula without subtracting $u$, and $\|T_{j,t}f_\gamma\|_p\le\|f_\gamma\|_p\le\|u\|_{W^{m,p}}$, give $\sup_{0<t<t_0}\|S_t\|_{X\to X}\le M_X<\infty$. For example take the $\ell^p$ norm over $\alpha$ of $\sum_{j,\beta\le\alpha}\binom{\alpha}{\beta}\|D^\beta\psi_j\|_\infty$. This argument includes $m=0$ and $p=1$. [F1, F6, step 2.1, step 4.1, step 4.2, algebra]

6.1 Now take $X=C^m(\bar D)$. By [F6] each bounded classical derivative is its weak derivative, so $u\in W^{m,1}(D)$ and step 4.1 applies. Each $D^\gamma u$ is uniformly continuous on $\bar D$ by [F7]. For $x\in\bar D\cap\operatorname{supp}\psi_j$, every sampled $y=x+t(v_j-z)$ lies in $D$ and $|y-x|\le(|v_j|+1)t$. Positivity and mass one of $\rho$ thus give $$\sup_{x\in\bar D\cap\operatorname{supp}\psi_j}|D^\gamma H_{j,t}u(x)-D^\gamma u(x)|\le\sup_{\substack{x,y\in\bar D\\|x-y|\le(|v_j|+1)t}}|D^\gamma u(y)-D^\gamma u(x)|\longrightarrow0.$$ The formula of step 5.1, first on $D$ and then by continuity on $\bar D$, gives $\|S_tu-u\|_{C^m}\to0$. Bounding each averaged derivative by $\|D^\gamma u\|_\infty$ and summing the same fixed multiplier constants gives $\sup_{0<t<t_0}\|S_t\|_{X\to X}\le M_X<\infty$ also in this case. [F6, F7, step 2.1, step 4.1, step 5.1, algebra]

7.1 Define $$F_{t,\eta}u(x)=\sum_\ell k_t(x,y_\ell)\int_{D\cap Q_\ell}u(y)\,dy.$$ Each coefficient is a bounded linear functional by step 3.1, and there are finitely many coefficients. Each range function $k_t(\cdot,y_\ell)$ belongs to $C_c^\infty(\mathbb R^d)$, so the operator has finite rank with the required smooth range. Comparison with the integral for $S_t$ gives $$\max_{|\alpha|\le m}\sup_{\bar D}|D^\alpha(F_{t,\eta}-S_t)u|\le\eta\|u\|_{L^1(D)}.$$ For $X=C^m(\bar D)$, this yields $\|F_{t,\eta}-S_t\|_{X\to X}\le |D|\eta$. For $X=W^{m,p}(D)$ let $A_m$ be the finite number of multi-indices of order at most $m$. Taking the derivative $L^p$ norms and then applying [F8] gives $\|F_{t,\eta}-S_t\|_{X\to X}\le A_m^{1/p}|D|^{1/p}\eta |D|^{1-1/p}=A_m^{1/p}|D|\eta$. This includes $p=1$, and it shows each $F_{t,\eta}$ is bounded because $S_t$ is bounded. [F1, F8, step 3.1, step 5.1, step 6.1, step 4.3, construct, algebra]

7.2 By steps 5.1 and 6.1 the operators $S_t:X\to X$ converge pointwise to the identity and satisfy $\|S_t\|\le M_X$. Choose $\delta<\varepsilon/[4(M_X+1)]$. Compactness gives a finite $\delta$-net $u_1,\ldots,u_N$ in $K$. Pointwise convergence permits one $t\in(0,t_0)$ such that $\max_i\|S_tu_i-u_i\|<\varepsilon/4$. For any $u\in K$, choose one net point within $\delta$; then $\|S_tu-u\|\le(M_X+1)\delta+\max_i\|S_tu_i-u_i\|<\varepsilon/2$. Compactness also makes $R=\sup_{u\in K}\|u\|$ finite: a finite cover by unit balls bounds all these norms by one plus the largest center norm. [step 5.1, step 6.1, given, choose, algebra]

8.1 Choose $\eta>0$ small enough that the relevant bound in step 7.1 is below $\varepsilon/[2(R+1)]$. For $F=F_{t,\eta}$, $$\sup_{u\in K}\|Fu-u\|\le\|F-S_t\|R+\sup_{u\in K}\|S_tu-u\|<\varepsilon.$$ Its range is a finite span of ambient compactly supported smooth functions by step 7.1. Applying this conclusion to the singleton compact set $K=\{u\}$ proves smooth-restriction density for every $u\in X$. All net, partition and representative-point choices here are finite; Countable Choice enters only the analytical interfaces stated above. [step 7.1, step 7.2, choose, algebra] ∎ 