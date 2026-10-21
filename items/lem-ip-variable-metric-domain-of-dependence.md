---
id: lem-ip-variable-metric-domain-of-dependence
kind: lemma
title: Finite propagation for the wave equation on a Riemannian manifold
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
axiom_base: Countable Choice
deps:
  - lem-ip-riemannian-green-boundary-traces-and-wave-lifting
  - def-riemannian-metric-and-riemannian-manifold
  - def-riemannian-volume-density
  - def-riemannian-distance-on-a-connected-manifold
  - def-riemannian-speed-and-length
  - thm-riemannian-distance-is-a-metric
  - lem-local-comparison-of-a-riemannian-metric-with-the-euclidean-metric
  - lem-distance-to-set-is-lipschitz
  - def-countable-choice
  - thm-smooth-partitions-of-unity-exist-on-manifolds-with-boundary
  - def-weak-derivative-of-a-locally-integrable-function
  - thm-c1-lipschitz-ac-bv-hierarchy
  - thm-absolutely-continuous-functions-have-integrable-derivatives
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - thm-dominated-convergence
  - thm-linear-change-of-variables-for-lebesgue-measure
  - lem-weak-derivative-linearity-locality-and-commutation
  - lem-weak-derivatives-are-unique-almost-everywhere
dependency_level: 1
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Medet Nursultanov and Lauri Oksanen, Introduction to inverse problems for hyperbolic PDEs (full lecture notes, arXiv:2311.06020v2)"
      url: "https://arxiv.org/pdf/2311.06020v2"
      locator: "§3.2, PDF p. 16: higher-dimensional Riemannian finite-speed theorem. The notes refer to another source for its proof; the full distance-weighted energy argument and the two-boundary-trip consequence are proved here."
    - title: "Mikko Salo, On geometric inverse problems and microlocal analysis (full author lecture notes, arXiv:2312.08123v1)"
      url: "https://arxiv.org/pdf/2312.08123v1"
      locator: "Theorems 3.1–3.2 and Remark 3.3, PDF pp. 21–22: static-potential ray transform, uniqueness, and the finite-time support threshold; the local Riemannian energy estimate is proved here."
proof_strategy: weighted-energy-cutoff
---

## Statement

Let $(M,g)$ be a compact, connected, nonempty smooth Riemannian manifold with nonempty smooth boundary, let $T>0$, and define the intrinsic distance $d_g(x,y)$ as the infimum of Riemannian lengths of piecewise $C^1$ curves in $M$ from $x$ to $y$. For a nonempty set $K\subseteq M$, write $d_g(x,K)=\inf_{y\in K}d_g(x,y)$; for nonempty sets $A,B\subseteq M$, write $d_g(A,B)=\inf_{a\in A,b\in B}d_g(a,b)$. Let $q\in C^\infty(M;\mathbb R)$ be independent of time; the solution functions may be real- or complex-valued. Set
$$L_q=\partial_t^2-\Delta_g+q(x),\qquad \Delta_g=\operatorname{div}_g\nabla_g.$$
For a smooth solution $u$ up to the boundary on $[0,T]\times M$, let $u_0=u(0,\cdot)$, $u_1=\partial_tu(0,\cdot)$, and let $h=u|_{[0,T]\times\partial M}$ be its Dirichlet boundary value. The support of a function is the closure of the set where it is nonzero.

(i) If $h=0$ and $\operatorname{supp}u_0\cup\operatorname{supp}u_1\subseteq K$ for a nonempty closed $K\subseteq M$, then
$$\operatorname{supp}u(t,\cdot)\subseteq\{x\in M:d_g(x,K)\le t\}\qquad(0\le t\le T).$$

(ii) If $u_0=u_1=0$ and $h(t,\cdot)=0$ for $0\le t\le s_0$ with $0\le s_0<T$, then
$$\operatorname{supp}u(t,\cdot)\subseteq\{x\in M:d_g(x,\partial M)\le t-s_0\}\qquad(s_0\le t\le T).$$
The same assertion holds backward in time for a smooth solution with zero terminal data and boundary value vanishing for $s_1\le t\le T$, with $0\le t\le s_1$ and $t-s_0$ replaced by $s_1-t$.

(iii) Let $q_1,q_2\in C^\infty(M;\mathbb R)$ be time independent, put $Q=\operatorname{supp}(q_1-q_2)$, and suppose $Q\ne\varnothing$ and $d_g(Q,\partial M)>T/2$. If $u$ solves $L_{q_1}u=0$ with zero initial data and smooth boundary value compactly supported in $(0,T)\times\partial M$, and $v$ solves $L_{q_2}v=0$ with zero terminal data and smooth boundary value compactly supported in $(0,T)\times\partial M$, then
$$\int_0^T\!\int_M(q_1-q_2)u(t,x)v(t,x)\,dV_g(x)\,dt=0.$$
This is the two-boundary-trip finite-time invisibility statement at the level of the interior pairing.

## Statement references

[[lem-ip-riemannian-green-boundary-traces-and-wave-lifting]]

[[def-riemannian-metric-and-riemannian-manifold]]

[[def-riemannian-volume-density]]

[[def-riemannian-distance-on-a-connected-manifold]]

[[def-riemannian-speed-and-length]]

[[thm-riemannian-distance-is-a-metric]]

[[lem-distance-to-set-is-lipschitz]]

[[def-countable-choice]]

## Facts & Assumptions

**Given:** Countable Choice; the compact Riemannian manifold, time-independent real potential, smooth real- or complex-valued solution, and data in the Statement.

[A1] Countable Choice ([[def-countable-choice]]) is used by the smooth partition of unity and the countable Fubini realization of weak derivatives on coordinate boxes. No full Axiom of Choice is invoked.

[F1] The metric is smooth and positive definite, $dV_g$ is its Riemannian density, $d_g$ is the infimum-of-lengths metric on a connected manifold, and $\Delta_g=\operatorname{div}_g\nabla_g$. ([[def-riemannian-metric-and-riemannian-manifold]], [[def-riemannian-volume-density]], [[def-riemannian-distance-on-a-connected-manifold]], [[def-riemannian-speed-and-length]], [[thm-riemannian-distance-is-a-metric]])

[F2] For every nonempty $K$, $d_g(\cdot,K)$ is 1-Lipschitz with respect to $d_g$. ([[lem-distance-to-set-is-lipschitz]])

[F3] In a smooth chart, the length of a coordinate line segment $z(s)=z_0+sa$ is $\int\sqrt{g_{z(s)}(a,a)}\,ds$. On compact subcharts the coordinate metric is uniformly comparable to the Euclidean metric. ([[def-riemannian-speed-and-length]], [[lem-local-comparison-of-a-riemannian-metric-with-the-euclidean-metric]])

[F4] Under Countable Choice, a Lipschitz function on a coordinate box is absolutely continuous on almost every line in each fixed direction and has an almost-everywhere integrable line derivative. Fubini and difference quotients identify that derivative as a weak directional derivative: for a compactly supported smooth test $\phi$, translate by $h$ in the chosen direction, change variables, and let $h\to0$; the difference quotients of the Lipschitz function are bounded, converge to its derivative almost everywhere, and dominated convergence applies. On a boundary half-box reflect the Lipschitz function across the flat face to apply this interior argument; on a half-interval the same bounded difference quotients give $\int_a^b f'=f(b)-f(a)$, because $h^{-1}\int_a^b(f(x+h)-f(x))dx\to f(b)-f(a)$; applying this to the Lipschitz product $f\phi$ gives the endpoint integration-by-parts term. Weak derivatives are linear and unique almost everywhere. ([[thm-c1-lipschitz-ac-bv-hierarchy]], [[thm-absolutely-continuous-functions-have-integrable-derivatives]], [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]], [[thm-dominated-convergence]], [[def-weak-derivative-of-a-locally-integrable-function]], [[lem-weak-derivative-linearity-locality-and-commutation]], [[lem-weak-derivatives-are-unique-almost-everywhere]])

[F5] An invertible linear change of Euclidean coordinates preserves null sets ([[thm-linear-change-of-variables-for-lebesgue-measure]]). The weak-derivative pullback rule follows directly from its test identity and linear substitution: let $y=Bx+c$ with $B$ invertible, set $w(y)=u(B^{-1}(y-c))$, and take $\varphi\in C_c^\infty$ in the $y$-chart. With $\widetilde\varphi(x)=\varphi(Bx+c)$, the chain rule gives $$(\partial_{y_j}\varphi)(Bx+c)=\sum_i(B^{-1})_{ij}\partial_{x_i}\widetilde\varphi(x).$$ Thus, using $dy=|\det B|dx$ and the weak-derivative identity for $u$,
$$\begin{aligned}\int w(y)\partial_{y_j}\varphi(y)\,dy&=|\det B|\sum_i(B^{-1})_{ij}\int u(x)\partial_{x_i}\widetilde\varphi(x)\,dx\\&=-|\det B|\sum_i(B^{-1})_{ij}\int D_{x_i}u(x)\widetilde\varphi(x)\,dx\\&=-\int\left(\sum_i(B^{-1})_{ij}D_{x_i}u\right)(B^{-1}(y-c))\varphi(y)\,dy.\end{aligned}$$
Therefore $D_{y_j}w=\sum_i(B^{-1})_{ij}(D_{x_i}u)\circ B^{-1}(y-c)$. In particular, if $x=Cy+c$ and the first column of $C$ is a fixed direction $a$, then $D_{y_1}(u\circ(x=Cy+c))=(a\cdot D_xu)\circ(Cy+c)$. This is the affine-coordinate rule used to identify the line derivative in step 3.1; weak-derivative linearity in the same coordinates is supplied by [[lem-weak-derivative-linearity-locality-and-commutation]].

[F6] The Riemannian divergence and boundary pairing for smooth vector fields are given by the coordinate divergence formula and the Green identity on $M$. For complex vector fields, apply the real identity to real and imaginary parts and take real parts in the energy calculation. ([[lem-ip-riemannian-green-boundary-traces-and-wave-lifting]])

[F7] A smooth partition of unity subordinate to a boundary-compatible coordinate cover exists under Countable Choice. ([[thm-smooth-partitions-of-unity-exist-on-manifolds-with-boundary]])



## Proof

1.1 Fix a nonempty closed $K\subseteq M$ and write $\rho(x)=d_g(x,K)$. By [F2], $\rho$ is 1-Lipschitz in the intrinsic metric. Local metric comparison [F3] bounds the length of sufficiently short coordinate segments above by a constant times their Euclidean length, so $\rho$ is locally Euclidean-Lipschitz in each chart. [F2, F3, given]

1.2 For a smooth real- or complex-valued solution of $L_qu=0$, set $e=\tfrac12(|\partial_tu|^2+|\nabla_gu|_g^2+|u|^2)$. Since $q$ is real, the product rule gives $$\partial_te=\operatorname{Re}\!\left(\operatorname{div}_g(\overline{\partial_tu}\,\nabla_gu)+(1-q)\overline u\,\partial_tu\right).$$ [F1, given, algebra]

2.1 For a fixed coordinate vector $a$, every sufficiently short segment satisfies $$|\rho(z+sa)-\rho(z)|\le d_g(z+sa,z)\le\int_0^s\sqrt{g_{z+ra}(a,a)}\,dr.$$ Reversing the segment gives the same estimate for negative $s$, so wherever the line derivative exists its absolute value is at most $\sqrt{g_z(a,a)}$. [F2, F3, step 1.1]

3.1 For each nonzero rational $a$, an invertible linear coordinate change with first axis parallel to $a$ and [F4]–[F5] identify the almost-everywhere line derivative from step 2.1 with $a\cdot D\rho$; the zero direction is immediate. Countably many rational vectors and a countable coordinate cover allow one common null exceptional set by Countable Choice [A1]. Outside it, the estimate holds for every rational vector, and continuity extends it to every real tangent vector. Thus $|\nabla_g\rho|_g\le1$ almost everywhere. [A1, F4, F5, step 2.1, given]

4.1 Fix $\epsilon>0$. Define $b(r)=0$ for $r\le0$ and $b(r)=e^{-1/r}$ for $r>0$, and set $\theta_\epsilon(s)=b(s)/(b(s)+b(\epsilon-s))$. Every derivative of $e^{-1/r}$ tends to zero as $r\downarrow0$, so $b$ is smooth; the denominator is positive everywhere. On $(0,\epsilon)$ the ratio $b(s)/b(\epsilon-s)$ is increasing because its logarithmic derivative is $s^{-2}+ (\epsilon-s)^{-2}>0$, and outside this interval $\theta_\epsilon$ is constant. Thus $\theta_\epsilon$ is smooth nondecreasing, equals zero on $(-\infty,0]$ and one on $[\epsilon,\infty)$. For $\eta(t,x)=\theta_\epsilon(\rho(x)-t)$, the one-dimensional chain rule on almost every coordinate line and [F4] give $$\partial_t\eta=-\theta_\epsilon'(\rho-t),\qquad \nabla_g\eta=\theta_\epsilon'(\rho-t)\nabla_g\rho,$$ so $\partial_t\eta+|\nabla_g\eta|_g\le0$ almost everywhere. With $\rho_\partial=d_g(\cdot,\partial M)$, the cutoff $\eta_\partial(t,x)=\theta_\epsilon(\rho_\partial(x)-(t-s_0))$ has the same inequality for $t\ge s_0$ and has zero boundary trace. [F4, step 3.1, construct]

5.1 Multiply that identity by a nonnegative Lipschitz weight $\eta$ and integrate over $M$. In each chart the product of $\eta$ with a smooth coefficient is Lipschitz, so [F4] gives its weak derivative by difference quotients. Choose a boundary-compatible coordinate cover and subordinate partition $(\chi_j)$ by [F7]. On a boundary half-chart, one-dimensional integration by parts in the normal half-line includes the endpoint value; [F6] identifies its coordinate density with $\eta\operatorname{Re}(\overline{\partial_tu}\,\partial_{\nu_{out}}u)\,dS_g$. Summing the partitioned fields $\chi_j\eta\overline{\partial_tu}\nabla_gu$ cancels the extra terms since $\sum_j\nabla_g\chi_j=0$. For $E_\eta(t)=\int_M\eta e\,dV_g$, this yields $$E_\eta'(t)=\int_M\big((\partial_t\eta)e-\operatorname{Re}(\overline{\partial_tu}\,g(\nabla_g\eta,\nabla_gu))+\eta\operatorname{Re}((1-q)\overline u\,\partial_tu)\big)\,dV_g+\int_{\partial M}\eta\operatorname{Re}(\overline{\partial_tu}\,\partial_{\nu_{out}}u)\,dS_g.$$ The identity holds for each fixed $t$; the spatial weak-derivative calculation applies at every such time, while $\eta,\partial_t\eta,e$ are bounded and continuous in $(t,x)$. Differentiation under the integral makes $E_\eta$ continuously differentiable. [F4, F6, F7, step 1.2, step 4.1, given, algebra]

6.1 The inequality $|\partial_tu|\,|\nabla_gu|_g\le e$ and step 4.1 give $$(\partial_t\eta)e-\operatorname{Re}(\overline{\partial_tu}\,g(\nabla_g\eta,\nabla_gu))\le0.$$ Since $q$ is smooth, the open sets $U_x=\{y:|1-q(y)|<|1-q(x)|+1\}$ cover compact $M$. A finite subcover gives $C<\infty$ with $|1-q|\le C$. Thus $|(1-q)\overline u\,\partial_tu|\le Ce$. The boundary term vanishes if $u=0$ on $\partial M$ and also if $\eta=0$ there. In either case $E_\eta'(t)\le CE_\eta(t)$. If $E_\eta(s)=0$, the nonnegative differentiable function $H(t)=e^{-C(t-s)}E_\eta(t)$ satisfies $H(s)=0$ and $H'(t)\le0$, so $H=E_\eta=0$ for all $t\ge s$. [step 4.1, step 5.1, given, construct, algebra]

7.1 For (i), take $\rho=d_g(\cdot,K)$ and $\eta=\theta_\epsilon(\rho-t)$. The homogeneous Dirichlet condition removes the boundary term. At $t=0$, $\eta$ vanishes on $K$; on $M\setminus K$, $u_0,u_1$ and the spatial gradient of $u_0$ vanish because their supports lie in $K$. Thus $E_\eta(0)=0$, and step 6.1 gives $E_\eta(t)=0$. Continuity and nonnegativity force $e(t,x)=0$ wherever $\eta(t,x)>0$, in particular where $d_g(x,K)>t+\epsilon$. Given any $x$ with $d_g(x,K)>t$, choose $0<\epsilon<d_g(x,K)-t$; then $u(t,x)=0$. [step 4.1, step 6.1, given]

8.1 For (ii), first use $\eta\equiv1$ on $[0,s_0]\times M$. The boundary flux vanishes because $h=0$ there, and the initial energy is zero; step 6.1 gives $u=\partial_tu=\nabla_gu=0$ up to $s_0$. With $\rho_\partial=d_g(\cdot,\partial M)$, use $\eta_\partial(t,x)=\theta_\epsilon(\rho_\partial(x)-(t-s_0))$. Its boundary trace is zero and its energy at $s_0$ is zero. Steps 5.1–6.1 yield $E_{\eta_\partial}=0$; the continuity argument in step 7.1 then gives $u(t,x)=0$ whenever $d_g(x,\partial M)>t-s_0$. [step 4.1, step 5.1, step 6.1, step 7.1, given]

9.1 Reverse time by setting $\widetilde v(s,x)=v(T-s,x)$. Since $q$ is time independent, $L_qv=0$ implies $L_q\widetilde v=0$. Applying (ii) from the reversed initial time gives the terminal-data assertion. [step 8.1, given, algebra]

10.1 Set $\delta=d_g(Q,\partial M)>T/2$. For every $t\in[0,T]$, either $t<\delta$ or $T-t<\delta$: if $t\le T/2$ the first holds, and if $t\ge T/2$ the second holds. In the first case (ii) with $s_0=0$ gives $u(t,\cdot)=0$ on $Q$; in the second case the terminal assertion gives $v(t,\cdot)=0$ on $Q$. Thus $(q_1-q_2)uv=0$ pointwise and its integral vanishes. [step 8.1, step 9.1, given, algebra] ∎
