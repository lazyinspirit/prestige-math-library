---
id: thm-hessian-comparison-for-distance-under-sectional-curvature-bounds
kind: theorem
title: Hessian comparison for distance under sectional curvature bounds
status: draft
origin: pipeline
deps:
  - cor-cut-time-does-not-exceed-first-conjugate-time
  - prop-hessian-of-distance-in-terms-of-radial-jacobi-fields
  - prop-gradient-of-the-distance-is-the-outward-unit-radial-field-off-the-cut-locus
  - thm-exp-p-is-a-diffeomorphism-from-the-open-tangent-cut-domain-onto-m-minus-the-cut-locus-and-p
  - def-radial-jacobi-tensor
  - def-radial-riccati-operator
  - lem-radial-jacobi-tensor-is-invertible-before-the-first-conjugate-point
  - thm-radial-riccati-equation
  - thm-rauch-comparison-theorem-first-form
  - prop-model-functions-solve-the-constant-curvature-jacobi-equation
  - def-comparison-sine-cosine-and-cotangent-functions
  - def-sectional-curvature
  - cor-real-spectral-theorem-for-self-adjoint-endomorphisms
  - thm-taylor-peano-remainder
  - def-countable-choice
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J.-H. Eschenburg, Comparison Theorems in Riemannian Geometry"
      url: https://www.math.toronto.edu/~vtk/eschenburg-comparison.pdf
      locator: "§6, displays (6.2)–(6.6) and the surrounding text, printed p.21: A ≤ (s'/s)I on V^⊥ and DV(V)=0 for the radial field V=∇ρ when K≥k, obtained from the Riccati comparison Theorem 3.1 with Remark 3.2"
    - title: "Ved Datar, Lectures on Riemannian Geometry (2025)"
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: "§§26.1–26.2 and 28.1, pp.191–197, 205–209: matrix Jacobi tensors, the Riccati equation and log-derivative comparison of radial solutions"
---

## Statement

Assume the inherited Axiom of Countable Choice $\mathrm{AC}_\omega$. Let
$(M,g)$ be a complete, connected, boundaryless Riemannian manifold of
dimension $n\ge2$, let $p\in M$, let $r:=r_p=d_g(p,\cdot)$ be the distance
from $p$, and let $q\in M\setminus(\{p\}\cup\operatorname{Cut}(p))$ be a point
off $p$ and off the cut locus of $p$. Put $t_0:=r(q)>0$, let
$\gamma:[0,t_0]\to M$ be the minimizing unit-speed geodesic from $p=\gamma(0)$
to $q=\gamma(t_0)$, so that $\dot\gamma(t_0)=\operatorname{grad}r(q)$, and let
$$N:=\{\dot\gamma(t_0)\}^{\perp}=\{\operatorname{grad}r(q)\}^{\perp}\subseteq T_qM$$
be the normal hyperplane at $q$. Let $k\in\mathbb R$ and assume
$$t_0<\pi/\sqrt k\qquad\text{if }k>0 .$$

1. If $\operatorname{Rm}(X,\dot\gamma(s),\dot\gamma(s),X)\ge k\,|X|^2$ for every
   $s\in(0,t_0]$ and every $X\in\{\dot\gamma(s)\}^{\perp}$ — equivalently, if
   every sectional curvature of a plane containing $\dot\gamma(s)$ is at least
   $k$ along $\gamma$ — then
   $$\operatorname{Hess}r(X,X)\le\operatorname{ct}_k(t_0)\;g_q(X,X) \qquad\text{for all }X\in N .$$
2. If $\operatorname{Rm}(X,\dot\gamma(s),\dot\gamma(s),X)\le k\,|X|^2$ for
   every $s\in(0,t_0]$ and every $X\in\{\dot\gamma(s)\}^{\perp}$, then
   $$\operatorname{Hess}r(X,X)\ge\operatorname{ct}_k(t_0)\;g_q(X,X) \qquad\text{for all }X\in N .$$
3. $\operatorname{Hess}r(\operatorname{grad}r,\cdot)=0$ at every point of
   $M\setminus(\{p\}\cup\operatorname{Cut}(p))$; in particular
   $\operatorname{Hess}r(\dot\gamma(t_0),\cdot)=0$.

On $N$ the Hessian is compared with the scalar multiple
$\operatorname{ct}_k(t_0)$ of the metric, in both curvature directions. The
point $q$ is a point of smoothness of $r$; the cut locus and $p$ itself are
excluded because the Hessian of $r$ is not defined there. For $k>0$ the
restriction $t_0<\pi/\sqrt k$ keeps $t_0$ inside the domain of
$\operatorname{ct}_k$, whose spherical pole at $\pi/\sqrt k$ is not crossed;
for $k\le0$ the function $\operatorname{ct}_k$ is defined on all of
$(0,\infty)$ and no restriction on $t_0$ beyond $t_0>0$ is imposed. In
dimension $n=2$ the space $N$ is one-dimensional, so the operator inequalities
are scalar inequalities for the single normal direction. No compactness of $M$
is assumed, and the only choice used is the inherited
$\mathrm{AC}_\omega$.

## Facts & Assumptions

**Given:** The inherited $\mathrm{AC}_\omega$ of [A1]; a complete, connected, boundaryless Riemannian manifold $(M,g)$ of dimension $n\ge2$; a point $p\in M$; the distance function $r=r_p$; a point $q\in M\setminus(\{p\}\cup\operatorname{Cut}(p))$; the number $t_0=r(q)>0$; a real number $k$ with $t_0<\pi/\sqrt k$ when $k>0$; and one of the two curvature hypotheses of the statement.

[A1] The countable-choice premise is the inherited $\mathrm{AC}_\omega$ ([[def-countable-choice]]), carried by the cut-time, exponential-map and curvature interfaces used by the suppliers below; no further selection is made.

[F1] The published Hessian formula for the distance ([[prop-hessian-of-distance-in-terms-of-radial-jacobi-fields]]): let $v\in S_pM$ be unit and $0<t<c_p(v)$, put $\gamma=\gamma_{p,v}$, $q=\gamma(t)$, $T=\dot\gamma(t)$. Then (a) for every $X\in T_qM$ with $g_q(X,T)=0$ there is exactly one Jacobi field $J_X$ along $\gamma$ with $J_X(0)=0$ and $J_X(t)=X$, it is normal, and the radial endpoint map $J(t):\{v\}^{\perp}\to T^{\perp}$, $W\mapsto J_W(t)$, is a linear isomorphism; (b) $(\nabla^2r_p)_q(X,Y)=g_q(D_tJ_X(t),Y)$ for every $X\perp T$ and every $Y\in T_qM$, so in particular $(\nabla^2r_p)_q(T,\cdot)=0$; (c) the endomorphism $S:=\nabla\operatorname{grad}r_p$, characterized by $g_q(SX,Y)=(\nabla^2r_p)_q(X,Y)$, satisfies $S(T)=0$ and $S(X)=D_tJ_X(t)$ for every $X\perp T$, so on $T^{\perp}$ it is $D_tJ(t)\circ J(t)^{-1}$ and it is $g$-self-adjoint there.

[F2] The published radial gradient formula ([[prop-gradient-of-the-distance-is-the-outward-unit-radial-field-off-the-cut-locus]]): for $v\in S_pM$ unit and $0<t<c_p(v)$, with $\gamma=\gamma_{p,v}$ and $q=\gamma(t)=\exp_p(tv)$, $$\operatorname{grad}r_p(q)=\dot\gamma(t)=d(\exp_p)_{tv}(v),\qquad |\operatorname{grad}r_p(q)|_g=1,$$ and the segment $\gamma|_{[0,t]}$ is the minimizing radial geodesic from $p$ to $q$, so that $d_g(p,q)=t$.

[F3] The published exponential parametrisation of the complement of the cut locus ([[thm-exp-p-is-a-diffeomorphism-from-the-open-tangent-cut-domain-onto-m-minus-the-cut-locus-and-p]]): with $D_p=\{tv:v\in S_pM,\ 0<t<c_p(v)\}$, the restriction $\exp_p|_{D_p}:D_p\to M\setminus(\{p\}\cup\operatorname{Cut}(p))$ is a diffeomorphism onto its image. Hence every $q\in M\setminus(\{p\}\cup\operatorname{Cut}(p))$ has a unique representation $q=\exp_p(tv)$ with $v\in S_pM$ and $0<t<c_p(v)$.

[F4] Radial tensor, Riccati operator and Riccati equation ([[def-radial-jacobi-tensor]], [[def-radial-riccati-operator]], [[thm-radial-riccati-equation]], [[lem-radial-jacobi-tensor-is-invertible-before-the-first-conjugate-point]]): along a unit-speed geodesic with $T=\dot\gamma$ and normal spaces $N_t=\{T(t)\}^{\perp}$, the radial Jacobi tensor $A(t):N_0\to N_t$ is $A(t)w=J_w(t)$ for the Jacobi field with $J_w(0)=0$, $D_tJ_w(0)=w$; it is invertible for every $t$ with $0<t<\tau$, where $\tau$ is the first conjugate instant of $\gamma(0)$ along $\gamma$; with $\bar A=P^{-1}\circ A$ and $R_\gamma(t)=P_t^{-1}\circ R(P_t\cdot,T(t))T(t)\in\operatorname{End}(N_0)$, the radial Riccati operator $S=\bar A'\bar A^{-1}$ is defined and smooth on $0<t<\tau$, is self-adjoint, satisfies the Riccati equation $S'+S^2+R_\gamma=0$, and has the matched asymptotics $S(t)=t^{-1}\operatorname{id}+O(t)$ as $t\downarrow0$ in the operator norm.

[F5] Sectional curvature ([[def-sectional-curvature]]): for linearly independent $v,w$, $\sec(v\wedge w)=\operatorname{Rm}(v,w,w,v)/(|v|^2|w|^2-\langle v,w\rangle^2)$, so for $X\ne0$ with $X\perp T$ one has $\operatorname{Rm}(X,T,T,X)=\sec(X\wedge T)|X|^2$, and both sides vanish for $X=0$.

[F6] Model functions ([[prop-model-functions-solve-the-constant-curvature-jacobi-equation]], [[def-comparison-sine-cosine-and-cotangent-functions]]): $\operatorname{sn}_k''+k\operatorname{sn}_k=0$ on $\mathbb R$ with $\operatorname{sn}_k(0)=0$, $\operatorname{sn}_k'(0)=1$, $\operatorname{cs}_k=\operatorname{sn}_k'$ with $\operatorname{cs}_k''+k\operatorname{cs}_k=0$, $\operatorname{cs}_k(0)=1$, $\operatorname{cs}_k'(0)=0$, and $\operatorname{cs}_k(t)^2+k\operatorname{sn}_k(t)^2=1$; the comparison cotangent is $\operatorname{ct}_k=\operatorname{cs}_k/\operatorname{sn}_k$, defined where $\operatorname{sn}_k\ne0$, its positive domain containing $(0,\pi/\sqrt k)$ when $k>0$ and $(0,\infty)$ when $k\le0$.

[F7] Real spectral theorem ([[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]]): a self-adjoint endomorphism of a finite-dimensional real inner product space has an orthonormal basis of eigenvectors with real eigenvalues; hence its Rayleigh quotient $x\mapsto\langle Sx,x\rangle$ on the unit sphere attains a maximum $\lambda_{\max}(S)$ and a minimum $\lambda_{\min}(S)$, its largest and smallest eigenvalues.

[F8] Taylor expansion ([[thm-taylor-peano-remainder]]): a real function that is $m$ times differentiable at $0$ satisfies $f(t)=\sum_{j=0}^{m}f^{(j)}(0)t^j/j!+o(t^m)$ as $t\to0$.

## Proof

**Proof technique:** direct: identify the Hessian of $r$ at $q$ with the transported radial Riccati operator $S(t_0)$ through the published radial-Jacobi formula, compare the extreme eigenvalues of $S$ with the scalar model $\operatorname{ct}_k$ by a Dini-derivative comparison whose matched asymptotics at $t=0$ are the singular behaviour $t^{-1}\operatorname{id}+O(t)$ of the Riccati operator, and translate the resulting Loewner inequalities back to the Hessian.

1.1 The radial data and the identification of the Hessian with $S(t_0)$. [F1, F2, F3, F4, A1, given]
By [F3] there are a unique unit vector $v\in S_pM$ and a unique $t'\in(0,c_p(v))$ with $q=\exp_p(t'v)$; by [F2] applied to this pair, $t'=d_g(p,q)=r(q)=t_0$, and $\gamma$ is the geodesic $\gamma_{p,v}$ restricted to $[0,t_0]$, with $$T:=\dot\gamma(t_0)=\operatorname{grad}r(q),\qquad |T|=1,\qquad N=T^{\perp}=\{\operatorname{grad}r(q)\}^{\perp}.$$ By [F3], $t_0<c_p(v)$. The published
[[cor-cut-time-does-not-exceed-first-conjugate-time]] gives
$c_p(v)\le\tau$ for the full radial geodesic (with $\tau=+\infty$
when no conjugate time exists). Thus $t_0<\tau$, so [F4] makes $A(s)$
invertible and $S(s)$ smooth for every $0<s\le t_0$. This uses the whole
pre-cut interval, rather than inferring absence of earlier singularities
from invertibility at $t_0$ alone. Combining [F1(c)] with $A(t_0)=J(t_0)$ and with $A=P_{t_0}\bar A$, $D_tA=P_{t_0}\bar A'$ from [F4], $$H:=\nabla\operatorname{grad}r=\bigl(D_tA(t_0)\bigr)\circ A(t_0)^{-1} =P_{t_0}\circ S(t_0)\circ P_{t_0}^{-1}\quad\text{on }N,\qquad H(T)=0,$$ and $H$ is $g$-self-adjoint on $N$ and annihilates $T$; since $H(T)=0$ and $T\perp N$, the endomorphism $H$ is self-adjoint on all of $T_qM$, and by [F1(b)] the Hessian satisfies $\operatorname{Hess}r(X,Y)=g_q(HX,Y)$ for all $X,Y\in T_qM$. Consequently, for $X,Y\in N$ with $x:=P_{t_0}^{-1}X$ and $y:=P_{t_0}^{-1}Y$ in $N_0$, $$\operatorname{Hess}r(X,Y)=g_q\bigl(HX,Y\bigr) =g_q\bigl(P_{t_0}S(t_0)x,P_{t_0}y\bigr)=\langle S(t_0)x,y\rangle ,$$ because $P_{t_0}$ is an isometry, and $S(t_0)$ is self-adjoint by [F4]. The endpoint $t_0$ is strictly positive and finite, and the formula is asserted at $q$ only; the value of $S$ at $t=0$ and past $\tau$ is never used. Since a self-adjoint endomorphism of $N_0$ is negative (respectively positive) semidefinite if and only if its quadratic form is nonpositive (respectively nonnegative), claims (1) and (2) of the statement are equivalent to the Loewner inequalities $$S(t_0)\le\operatorname{ct}_k(t_0)\operatorname{id}_{N_0} \quad\text{and}\quad S(t_0)\ge\operatorname{ct}_k(t_0)\operatorname{id}_{N_0}$$ respectively, and claim (3) is exactly $H(T)=0$ from [F1(c)]. [F1, F2, F3, F4, A1, given]

1.2 The curvature hypothesis in transported form. [F4, F5, given]
For $s\in(0,t_0]$ and $w\in N_0$, the definition of $R_\gamma$ in [F4] and the fact that $P_s$ is an isometry give $$\langle R_\gamma(s)w,w\rangle =\bigl\langle R(P_sw,T(s))T(s),P_sw\bigr\rangle =\operatorname{Rm}\bigl(P_sw,T(s),T(s),P_sw\bigr),$$ which vanishes for $w=0$ and equals $|w|^2\sec(P_sw\wedge T(s))$ for $w\ne0$ by [F5], since $P_sw\perp T(s)$ is nonzero. Therefore the first curvature hypothesis of the statement is equivalent to $$R_\gamma(s)\ge k\operatorname{id}_{N_0}\quad\text{for all }s\in(0,t_0] ,$$ and the second to $R_\gamma(s)\le k\operatorname{id}_{N_0}$ for all $s\in(0,t_0]$, both in the Loewner order on the $(n-1)$-dimensional space $N_0$. [F4, F5, given]

1.3 The model functions. [F6, F8, given]
On its positive domain the comparison cotangent satisfies the scalar Riccati identity $$\operatorname{ct}_k'+\operatorname{ct}_k^2=-k:$$ by [F6], $\operatorname{cs}_k'=\operatorname{sn}_k''=-k\operatorname{sn}_k$ and $\operatorname{sn}_k'=\operatorname{cs}_k$, so the quotient rule gives $$\operatorname{ct}_k' =\frac{\operatorname{cs}_k'\operatorname{sn}_k-\operatorname{cs}_k\operatorname{sn}_k'}{\operatorname{sn}_k^2} =\frac{-k\operatorname{sn}_k^2-\operatorname{cs}_k^2}{\operatorname{sn}_k^2} =-k-\operatorname{ct}_k^2 .$$ Moreover $\operatorname{sn}_k(t)=t+O(t^3)$ and $\operatorname{cs}_k(t)=1+O(t^2)$ as $t\downarrow0$: by [F6], $\operatorname{sn}_k(0)=0$, $\operatorname{sn}_k'(0)=1$ and $\operatorname{sn}_k''(0)=-k\operatorname{sn}_k(0)=0$, while $\operatorname{cs}_k(0)=1$ and $\operatorname{cs}_k'(0)=0$, and [F8] applied with $m=3$ to $\operatorname{sn}_k$ and $m=2$ to $\operatorname{cs}_k$ gives the two expansions. Hence there is $\delta_0>0$ with $\operatorname{sn}_k(t)=t\,(1+O(t^2))\ne0$ and $$0<\operatorname{cs}_k(t)\le2,\qquad \operatorname{ct}_k(t)=\frac{\operatorname{cs}_k(t)}{\operatorname{sn}_k(t)} =\frac1t\bigl(1+O(t^2)\bigr),\qquad \operatorname{ct}_k(t)\ge\frac1{2t}\quad(0<t<\delta_0),$$ the last bound by shrinking $\delta_0$ so that $|O(t^2)|\le\frac12$ and $\operatorname{cs}_k\ge\frac12$ on $(0,\delta_0)$. In particular $t\mapsto\operatorname{ct}_k(t)$ is continuous on $(0,t_0]$, because $t_0<\pi/\sqrt k$ when $k>0$ and $\operatorname{ct}_k$ is defined and smooth on all of $(0,\infty)$ when $k\le0$. [F6, F8, given]

1.4 The eigenvalues of $S$ and their Dini bounds. [F4, F7, given]
Let $\lambda_{\max}(s)$ and $\lambda_{\min}(s)$ denote the largest and the smallest eigenvalue of the self-adjoint operator $S(s)$, $s\in(0,\tau)$. We claim that both functions are Lipschitz on compact subintervals of $(0,\tau)$ and that for every $s\in(0,t_0)$ $$D^+\lambda_{\max}(s)\le-\lambda_{\max}(s)^2-\langle R_\gamma(s)w_+,w_+\rangle$$ for some unit eigenvector $w_+$ of $\lambda_{\max}(s)$, and $$D_+\lambda_{\min}(s)\ge-\lambda_{\min}(s)^2-\langle R_\gamma(s)w_-,w_-\rangle$$ for some unit eigenvector $w_-$ of $\lambda_{\min}(s)$, where $D^+$ and $D_+$ are the upper and lower right Dini derivatives. Indeed, by [F7] and compactness of the unit sphere of the finite-dimensional space $N_0$, $\lambda_{\max}(s)=\max_{|x|=1}\langle S(s)x,x\rangle$ and $\lambda_{\min}(s)=\min_{|x|=1}\langle S(s)x,x\rangle$, so both are Lipschitz where $S$ is $C^1$ by [F4]. Fix $s\in(0,t_0)$ and let $h_n\downarrow0$ be a null sequence along which the difference quotients of $\lambda_{\max}$ approach its upper right Dini derivative; for each $n$ pick a unit vector $x_n$ with $\lambda_{\max}(s+h_n)=\langle S(s+h_n)x_n,x_n\rangle$, and pass to a subsequence with $x_n\to w$, $|w|=1$. Since $\lambda_{\max}(s)\ge\langle S(s)x_n,x_n\rangle$ and $S$ is $C^1$, $$\lambda_{\max}(s+h_n)-\lambda_{\max}(s) \le\int_0^{h_n}\bigl\langle S'(s+u)x_n,x_n\bigr\rangle\,du =h_n\langle S'(s)w,w\rangle+o(h_n),$$ so $D^+\lambda_{\max}(s)\le\langle S'(s)w,w\rangle$; moreover $\langle S(s)w,w\rangle=\lim_n\langle S(s)x_n,x_n\rangle=\lambda_{\max}(s)$, so $w$ is a unit maximizer and $S(s)w=\lambda_{\max}(s)w$. The Riccati equation $S'=-S^2-R_\gamma$ of [F4] then gives $$\langle S'(s)w,w\rangle=-|S(s)w|^2-\langle R_\gamma(s)w,w\rangle =-\lambda_{\max}(s)^2-\langle R_\gamma(s)w,w\rangle .$$ The computation for $\lambda_{\min}$ is the same with maximizers replaced by minimizers: for minimizers $x_n$ at $s+h_n$ one has $\lambda_{\min}(s+h_n)-\lambda_{\min}(s)\ge \langle S(s+h_n)x_n,x_n\rangle-\langle S(s)x_n,x_n\rangle$ because $\lambda_{\min}(s)\le\langle S(s)x_n,x_n\rangle$, a limit point $w$ of a subsequence is a unit minimizer, and the same substitution applies, so $D_+\lambda_{\min}(s)\ge\langle S'(s)w,w\rangle$. [F4, F7, given]

1.5 The matched-asymptotic comparison lemma. [given]
We use the following elementary fact. Let $0<T\le t_0$, let $p:(0,T]\to\mathbb R$ be continuous with $p(t)\ge c/t$ for $t\in(0,\delta)$ and constants $c\ge1$, $\delta\in(0,T]$, and let $h:(0,T]\to\mathbb R$ be continuous with $|h(t)|=o(1/t)$ as $t\downarrow0$ and $D^+h(t)+p(t)h(t)\le0$ for every $t\in(0,T)$. Then $h\le0$ on $(0,T]$.

*Proof.* We first record the Dini monotonicity principle: a continuous $\varphi$ on $[a,b]$ with $D^+\varphi\le0$ everywhere on $[a,b)$ is nonincreasing. Indeed, $\psi:=-\varphi$ has $D_+\psi\ge0$ everywhere; suppose $\psi(x)>\psi(y)$ for some $x<y$, put $m:=(\psi(x)-\psi(y))/(y-x)>0$ and $\Psi(t):=\psi(t)-\psi(x)+\frac m2(t-x)$ on $[x,y]$. Then $\Psi(x)=0$, $\Psi(y)=-\frac m2(y-x)<0$, and $D_+\Psi=D_+\psi+\frac m2\ge\frac m2$ everywhere. The set $A=\{t\in[x,y]:\Psi(t)<0\}$ is nonempty, and with $\beta:=\inf A$ one has $\beta<y$, $\Psi(\beta)=0$ (the complement of $A$ is closed, and points of $A$ approach $\beta$ from above), and along a sequence $t_n\downarrow\beta$ with $t_n\in A$ the quotients $\bigl(\Psi(t_n)-\Psi(\beta)\bigr)/(t_n-\beta)=\Psi(t_n)/(t_n-\beta)$ are negative; hence $D_+\Psi(\beta)\le0$, contradicting $D_+\Psi(\beta)\ge m/2>0$. This proves the principle, and the product rule for Dini derivatives with the $C^1$ factor $e^M$ is exact. Now fix $t\in(0,T]$ and $0<\varepsilon_0<t$, and put $M(s):=-\int_s^t p(u)\,du$ for $s\in[\varepsilon_0,t]$. Then $e^M$ is $C^1$ with $(e^M)'=p\,e^M$, so $$D^+\bigl(h\,e^M\bigr)(s)=e^{M(s)}\bigl(D^+h(s)+p(s)h(s)\bigr)\le0 ,$$ and the principle gives $h(t)e^{M(t)}\le h(\varepsilon_0)e^{M(\varepsilon_0)}$, that is $$h(t)\le h(\varepsilon_0)\exp\Bigl(-\int_{\varepsilon_0}^{t}p(u)\,du\Bigr).$$ With $\delta':=\min(\delta,t)$ and $K:=(t-\delta')\max_{[\delta',t]}|p|$ (finite, $p$ being continuous on the compact set $[\delta',t]\subseteq(0,T]$), $$\int_{\varepsilon_0}^{t}p(u)\,du \ge c\log\frac{\delta'}{\varepsilon_0}-K \qquad\text{for }0<\varepsilon_0<\delta' ,$$ so $\exp\bigl(-\int_{\varepsilon_0}^{t}p\bigr)\le e^{K}(\varepsilon_0/\delta')^{c}$ and, since $c\ge1$ and $\varepsilon_0|h(\varepsilon_0)|\to0$, $$h(t)\le e^{K}\delta'^{-c}\,\varepsilon_0^{\,c}|h(\varepsilon_0)| =e^{K}\delta'^{-c}\,\varepsilon_0^{\,c-1}\cdot\varepsilon_0|h(\varepsilon_0)| \longrightarrow0\qquad(\varepsilon_0\downarrow0).$$ Hence $h(t)\le0$, and $t$ was arbitrary. [given] ∎

2.1 The case $K\ge k$: the largest eigenvalue is at most $\operatorname{ct}_k$. [F4, step 1.1, step 1.2, step 1.3, step 1.4, step 1.5, given]
Assume the first curvature hypothesis, so that $R_\gamma(s)\ge k\operatorname{id}_{N_0}$ on $(0,t_0]$ by step 1.2. Put $$h(t):=\lambda_{\max}(t)-\operatorname{ct}_k(t),\qquad p(t):=\lambda_{\max}(t)+\operatorname{ct}_k(t)\qquad(0<t\le t_0),$$ both continuous on $(0,t_0]$: $\lambda_{\max}$ is continuous by step 1.4 and $\operatorname{ct}_k$ is continuous on $(0,t_0]$ by step 1.3. By the asymptotics $S(t)=t^{-1}\operatorname{id}+O(t)$ of [F4] every eigenvalue of $S(t)$ equals $t^{-1}+O(t)$, so $\lambda_{\max}(t)=t^{-1}+O(t)$, while $\operatorname{ct}_k(t)=t^{-1}(1+O(t^2))$ by step 1.3; hence $$|h(t)|=O(t)=o(1/t),\qquad p(t)=\frac2t+O(t)\ge\frac1t\quad(0<t<\delta_1)$$ for some $\delta_1\in(0,t_0]$, after shrinking $\delta_0$ of step 1.3 if necessary. For $s\in(0,t_0)$, step 1.4 provides a unit eigenvector $w_+$ of $\lambda_{\max}(s)$ with $$D^+\lambda_{\max}(s)\le-\lambda_{\max}(s)^2-\langle R_\gamma(s)w_+,w_+\rangle \le-\lambda_{\max}(s)^2-k,$$ the last step by $R_\gamma(s)\ge k\operatorname{id}$; and $\operatorname{ct}_k'(s)=-k-\operatorname{ct}_k(s)^2$ by step 1.3, so $$D^+h(s)+p(s)h(s) \le\bigl(-\lambda_{\max}^2-k\bigr)+\bigl(k+\operatorname{ct}_k^2\bigr) +\bigl(\lambda_{\max}^2-\operatorname{ct}_k^2\bigr)=0 .$$ Step 1.5 with $T:=t_0$, the functions $p,h$ above and $c:=1$ therefore gives $h\le0$ on $(0,t_0]$, that is $$\lambda_{\max}(t)\le\operatorname{ct}_k(t)\quad(0<t\le t_0),\qquad \text{in particular } S(t_0)\le\operatorname{ct}_k(t_0)\operatorname{id}_{N_0},$$ the last Loewner inequality because $S(t_0)$ is self-adjoint with largest eigenvalue at most $\operatorname{ct}_k(t_0)$. [F4, step 1.1, step 1.2, step 1.3, step 1.4, step 1.5, given]

2.2 The case $K\le k$: the smallest eigenvalue is at least $\operatorname{ct}_k$. [F4, step 1.1, step 1.2, step 1.3, step 1.4, step 1.5, given]
Assume now the second curvature hypothesis, so that $R_\gamma(s)\le k\operatorname{id}_{N_0}$ on $(0,t_0]$ by step 1.2, and put $$\tilde h(t):=\operatorname{ct}_k(t)-\lambda_{\min}(t),\qquad \tilde p(t):=\lambda_{\min}(t)+\operatorname{ct}_k(t)\qquad(0<t\le t_0).$$ As above $\lambda_{\min}(t)=t^{-1}+O(t)$, so $|\tilde h(t)|=O(t)=o(1/t)$ and $\tilde p(t)\ge1/t$ on $(0,\delta_1)$. For $s\in(0,t_0)$, step 1.4 provides a unit eigenvector $w_-$ of $\lambda_{\min}(s)$ with $$D_+\lambda_{\min}(s)\ge-\lambda_{\min}(s)^2-\langle R_\gamma(s)w_-,w_-\rangle \ge-\lambda_{\min}(s)^2-k,$$ the last step by $R_\gamma(s)\le k\operatorname{id}$; since $D^+\tilde h=\operatorname{ct}_k'-D_+\lambda_{\min}$ and $\operatorname{ct}_k'=-k-\operatorname{ct}_k^2$, $$D^+\tilde h(s)+\tilde p(s)\tilde h(s) \le\bigl(-k-\operatorname{ct}_k^2\bigr)+\bigl(\lambda_{\min}^2+k\bigr) +\bigl(\operatorname{ct}_k^2-\lambda_{\min}^2\bigr)=0 .$$ Step 1.5 with $T:=t_0$, the functions $\tilde p,\tilde h$ and $c:=1$ gives $\tilde h\le0$ on $(0,t_0]$, that is $$\lambda_{\min}(t)\ge\operatorname{ct}_k(t)\quad(0<t\le t_0),\qquad \text{in particular } S(t_0)\ge\operatorname{ct}_k(t_0)\operatorname{id}_{N_0}.$$ [F4, step 1.1, step 1.2, step 1.3, step 1.4, step 1.5, given]

3.1 Conclusion and boundary cases. [step 1.1, step 2.1, step 2.2, given]
Under the first curvature hypothesis, step 2.1 gives $S(t_0)\le\operatorname{ct}_k(t_0)\operatorname{id}_{N_0}$; the equivalence recorded in step 1.1 then yields claim (1): $\operatorname{Hess}r(X,X)\le\operatorname{ct}_k(t_0)\,g_q(X,X)$ for all $X\in N$. Under the second hypothesis, step 2.2 gives $S(t_0)\ge\operatorname{ct}_k(t_0)\operatorname{id}_{N_0}$ and hence claim (2). Claim (3) is $H(T)=0$ from step 1.1. The comparison is asserted only at the point $t_0$ of the interval $(0,\min(\tau,\pi/\sqrt k))$ (with $\pi/\sqrt k$ omitted when $k\le0$), so the singularities at $t=0$ and at the first conjugate instant are not crossed, and for $k>0$ the hypothesis $t_0<\pi/\sqrt k$ keeps $t_0$ away from the pole of $\operatorname{ct}_k$, where no value of the model is defined; for $k\le0$ no upper restriction on $t_0$ is needed and none is imposed. In dimension $n=2$ the space $N_0$ is one-dimensional, the eigenvalues in steps 2.1 and 2.2 are single numbers, and the two Loewner inequalities reduce to the scalar statements $S(t_0)\le\operatorname{ct}_k(t_0)$ and $S(t_0)\ge\operatorname{ct}_k(t_0)$ for the scalar Riccati function. If both curvature hypotheses hold (constant curvature $k$ along $\gamma$) the two claims give equality $\operatorname{Hess}r=\operatorname{ct}_k(t_0)\,g$ on $N$. Under the lower curvature bound, the field-level companion of the present
estimate, $|J_w(t)|\le\operatorname{sn}_k(t)|w|$ for the radial Jacobi fields, is [[thm-rauch-comparison-theorem-first-form]]; the estimate proved here is its derivative-level form. No compactness of $M$ is used, and no choice beyond the inherited [A1] enters: the geodesic, the parallel frame, the Riccati operator and the eigenvalues are all determined by the given data. [step 1.1, step 2.1, step 2.2, given] ∎

## Source locator

Eschenburg §6, displays (6.2)–(6.4) and the surrounding text (printed p.21), states that for the radial field $V=\nabla\rho$ on a complete manifold with $K\ge k$ the comparison Theorem 3.1 gives $A=DV=D\nabla\rho\le(s'/s)I$ on $V^{\perp}$ together with $D\nabla\rho=0$ on $\mathbb RV$; the scalar $s'/s$ is the comparison cotangent $\operatorname{ct}_k$, and (6.5)–(6.6) record the equality in the model space. Eschenburg's Theorem 3.1 with Remark 3.2 is the Riccati comparison for solutions that are singular at $t=0$ with a continuous extension of the difference; the proof above carries out the same comparison for this pair in the eigenvalue form, using the in-run radial Riccati equation with its matched asymptotics $S(t)=t^{-1}\operatorname{id}+O(t)$ and the scalar model $\operatorname{ct}_k$ of the in-run model-function suppliers, and it derives the lower bound $K\le k$ by the same argument with the extreme eigenvalues exchanged. Datar §§26.1–26.2 and 28.1, pp.191–197 and 205–209, contains the matrix Jacobi tensor and log-derivative calculus underlying the identification of the Hessian with $S$. The proof above is carried out from the published distance-Hessian and radial-gradient formulas and the in-run Riccati machinery; it does not use the index-form argument of [[thm-rauch-comparison-theorem-first-form]], which is recorded as the field-level companion of the estimate.
