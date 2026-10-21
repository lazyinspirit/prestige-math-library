---
id: lem-ip-boundary-quasimode-jets-and-borel-correction
kind: lemma
title: "Boundary quasimode jets and exact-solution correction"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-ip-sobolev-spaces-on-compact-riemannian-domain
  - lem-ip-conductivity-map-wellposedness
  - def-bounded-c-k-domain-and-boundary-charts
  - def-bounded-c-one-domain-boundary-charts-and-outward-normal
  - thm-collar-neighborhood-theorem
  - thm-smooth-partitions-of-unity-exist-on-manifolds-with-boundary
  - def-axiom-of-choice
  - def-countable-choice
dependency_level: 2
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Mikko Salo, Applications of microlocal analysis to inverse problems (2019)"
      url: "https://arxiv.org/pdf/1908.03041"
      locator: "Section 5, Proposition 5.5 and proof, PDF pp. 25-30."
---

## Statement

Assume the Axiom of Choice and Countable Choice.

Let $\Omega\subset\mathbb R^n$, $n\geq2$, be a bounded smooth domain, let $\gamma,\widetilde\gamma\in C^\infty(\overline\Omega,\mathbb R)$ be strictly positive, let $x_0\in\partial\Omega$, and let $\xi_0\in T_{x_0}^*\partial\Omega$ have unit norm in the induced boundary metric. Choose a sufficiently small boundary patch and $\chi\in C_c^\infty(\partial\Omega)$ supported there with $\chi=1$ near $x_0$. For every integer $N\geq1$ there are a smooth complex phase $\Phi$ in a collar of the patch and amplitudes $b_{\lambda,\gamma}$, $b_{\lambda,\widetilde\gamma}$, defined for $\lambda\geq1$, such that
$$v_{\lambda,\gamma}=\lambda^{-1/2}e^{i\lambda\Phi}b_{\lambda,\gamma},\qquad v_{\lambda,\widetilde\gamma}=\lambda^{-1/2}e^{i\lambda\Phi}b_{\lambda,\widetilde\gamma},$$
have boundary values $\lambda^{-1/2}e^{i\lambda\phi}\chi$, where $\phi$ is real with $|d\phi|=1$ near $\operatorname{supp}\chi$, have $H^1(\Omega)$ norms bounded above and below by positive constants, and satisfy
$$\|\operatorname{div}(\gamma\nabla v_{\lambda,\gamma})\|_{L^2(\Omega)} +\|\operatorname{div}(\widetilde\gamma\nabla v_{\lambda,\widetilde\gamma})\|_{L^2(\Omega)} =O(\lambda^{-N}).$$
Here $\phi=\Phi|_{\partial\Omega}$ is real, $d\phi(x_0)=\xi_0$, and $\operatorname{Im}\Phi$ is comparable to the inward distance to the boundary on the collar. Let $u_{\lambda,\gamma}$ and $u_{\lambda,\widetilde\gamma}$ be the exact conductivity solutions with the same respective boundary values. Their corrections satisfy
$$\|u_{\lambda,\gamma}-v_{\lambda,\gamma}\|_{H^1(\Omega)} +\|u_{\lambda,\widetilde\gamma}-v_{\lambda,\widetilde\gamma}\|_{H^1(\Omega)} =O(\lambda^{-N}).$$
For every fixed integer $k\geq0$ and continuous $F$ on $\overline\Omega$, choosing $N>k$ gives
$$\lim_{\lambda\to\infty}\lambda^k \int_\Omega \operatorname{dist}(x,\partial\Omega)^k F(x) \nabla v_{\lambda,\gamma}\cdot\overline{\nabla v_{\lambda,\widetilde\gamma}}\,dx =c_k\int_{\partial\Omega}F|\chi|^2\,dS,\qquad c_k=2\int_0^\infty t^ke^{-2t}\,dt=\frac{k!}{2^k}>0.$$
The same limit holds with $v_{\lambda,\gamma},v_{\lambda,\widetilde\gamma}$ replaced by their exact corrections.

## Statement references

[[def-bounded-c-k-domain-and-boundary-charts|Smooth Euclidean boundary charts]]

[[def-bounded-c-one-domain-boundary-charts-and-outward-normal|Outward normal and boundary distance]]

[[lem-ip-conductivity-map-wellposedness|Positive conductivity weak solvability]]

## Facts & Assumptions
[A1] [[def-axiom-of-choice]] is a hypothesis of the positive-conductivity solvability supplier [F3]; it is used only for the exact correction.

[A2] [[def-countable-choice]] is a hypothesis of the positive-conductivity solvability supplier [F3]; it is used only for the exact correction.

**Given:** the smooth bounded domain, positive smooth conductivities, a boundary point and unit tangential covector, and a cutoff equal to one near that point.

[F1] [[def-bounded-c-k-domain-and-boundary-charts]] and [[thm-collar-neighborhood-theorem]]: a smooth boundary has local smooth charts flattening it, and a neighborhood of the compact boundary is smoothly parametrized by inward normal distance.

[F2] [[thm-smooth-partitions-of-unity-exist-on-manifolds-with-boundary]]: a finite smooth partition of unity can localize and patch the chartwise constructions.

[F3] [[lem-ip-conductivity-map-wellposedness]]: a positive smooth conductivity has a unique weak Dirichlet solution for each $H^{1/2}$ boundary value, and its zero-trace Poincare inequality holds.

[F4] [[def-ip-sobolev-spaces-on-compact-riemannian-domain]]: the exact corrections are measured in the chartwise $H^1$ norm and the zero-trace space is the closure of compactly supported smooth functions.

## Proof

**Given:** the data in the statement.

1.1 Choose boundary normal coordinates $(y,x_n)$ near $x_0$, with $x_n=\operatorname{dist}(x,\partial\Omega)$ and inward unit normal $\partial_{x_n}$. The induced metric on the boundary is smooth. Choose a smooth hypersurface $S$ in $\partial\Omega$ through $x_0$, orthogonal there to $\xi_0$ (if $n=2$, take $S=\{x_0\}$). The boundary geodesics starting normally from $S$ give, by smooth dependence of the geodesic ODE and the inverse function theorem, coordinates $(s,z)$ near $x_0$; define $\phi(s,z)=s$. Gauss' lemma gives $|d\phi|_{g_{\partial\Omega}}=1$ and $d\phi(x_0)=\xi_0$. Shrink the patch so these coordinates and $\chi$ are supported inside it. [F1, given, construct]

2.1 In boundary normal coordinates, $g^{nn}=1$ and $g^{n\alpha}=0$ at the boundary. Set $\Phi|_{x_n=0}=\phi$ and $\partial_n\Phi|_{x_n=0}=i$. Then $g^{ij}\partial_i\Phi\partial_j\Phi=0$ at $x_n=0$ because $|d\phi|=1$. Differentiate this eikonal equation successively in $x_n$. At each order the newest unknown normal jet $\partial_n^{j+1}\Phi|_{x_n=0}$ occurs linearly with coefficient $2i g^{nn}=2i\ne0$; all other terms use already assigned jets and derivatives of $g$. Solve recursively for every normal jet. Realize the resulting jet sequence by the following local Borel construction: if $c_j(y)$ is the prescribed $j$th normal derivative, choose a fixed smooth cutoff $\theta$ equal to one near zero and supported in $(-1,1)$, and set $$\Phi(y,x_n)=\sum_{j\geq0}\frac{c_j(y)}{j!}x_n^j\theta(x_n/\varepsilon_j).$$ For all sufficiently large $j$, choose $\varepsilon_j<2^{-j}$ so that every derivative of order at most $j/2$ of the $j$th summand has sup norm at most $2^{-j}$; this is possible because those derivatives are bounded by constants times $\varepsilon_j^{j-m}$ with $m\leq j/2$. Choose any positive $\varepsilon_j$ for the finitely many smaller $j$. For each fixed derivative order, the tail then converges uniformly, so $\Phi$ is smooth and has the prescribed jets. In particular, the eikonal expression vanishes to infinite order at the boundary. Since $\partial_n\operatorname{Im}\Phi=1$ there, shrinking the collar gives $\operatorname{Im}\Phi\geq x_n/2$. [F1, step 1.1, construct, algebra]

3.1 For $P_\gamma=\operatorname{div}(\gamma\nabla)$, direct differentiation gives $$P_\gamma(e^{i\lambda\Phi}b)=e^{i\lambda\Phi}\big[-\lambda^2p_\gamma b+i\lambda L_\gamma b+P_\gamma b\big],$$ where $p_\gamma=\gamma g^{ij}\partial_i\Phi\partial_j\Phi$ and $L_\gamma b=2\gamma g^{ij}(\partial_i\Phi)(\partial_jb)+\operatorname{div}(\gamma\nabla\Phi)b$. The phase is common to both conductivities and $p_\gamma=\gamma p_1$ vanishes to infinite order on the boundary by step 2.1. Prescribe $b_{0,\gamma}|_{\partial\Omega}=\chi$ and $b_{-j,\gamma}|_{\partial\Omega}=0$ for $j\geq1$. In boundary normal coordinates the coefficient of the new normal derivative in $L_\gamma b$ is $2i\gamma$, which is nonzero. Therefore the normal derivatives of $b_{0,\gamma}$ can be chosen successively so that $L_\gamma b_{0,\gamma}=0$ to infinite order at the boundary; after choosing $b_{0,\gamma},\ldots,b_{-(j-1),\gamma}$, the same recursion chooses all jets of $b_{-j,\gamma}$ so that $iL_\gamma b_{-j,\gamma}+P_\gamma b_{-(j-1),\gamma}=0$ to infinite order. Realize each sequence by the Borel series in step 2.1 and multiply by a fixed collar cutoff equal to one near the boundary support. Repeat for $\widetilde\gamma$. [F1, F2, step 2.1, construct]

4.1 Let $b_{\lambda,\gamma}=\sum_{j=0}^K\lambda^{-j}b_{-j,\gamma}$, with the same construction for $\widetilde\gamma$. The order-$\lambda^2$ eikonal term and the order-$\lambda,\ldots,\lambda^{1-K}$ transport terms in step 3.1 vanish to infinite order at $x_n=0$. Thus each remaining coefficient is $O(x_n^R)$ for every prescribed integer $R$. On the collar, $|e^{i\lambda\Phi}|\leq e^{-\lambda x_n/2}$. For every fixed $a,R$, direct integration gives $$\|\lambda^a x_n^R e^{-\lambda x_n/2}\|_{L^2(0,\delta)}=O(\lambda^{a-R-1/2}).$$ Choose $R$ and then $K$ large enough to make every residual term $O(\lambda^{-N})$. Derivatives of the collar cutoff are supported where $x_n\geq c>0$ and hence contribute $O(e^{-c\lambda})$. The same Gaussian integration shows $\|v_{\lambda,\gamma}\|_{L^2}=O(\lambda^{-1})$ and bounds its gradient norm above. Thus the $H^1$ norms are bounded above and the residual bounds hold for the arbitrary prescribed $N$. [F1, F2, given, step 3.1, algebra]

5.1 Let $r_\lambda=u_{\lambda,\gamma}-v_{\lambda,\gamma}\in H_0^1(\Omega)$. Its weak equation is $P_\gamma r_\lambda=-P_\gamma v_{\lambda,\gamma}$. Test with $r_\lambda$, use $\gamma\geq\gamma_*>0$, and use the Poincare inequality in [F3]: $$\gamma_*\|\nabla r_\lambda\|_2^2\leq\|P_\gamma v_{\lambda,\gamma}\|_2\|r_\lambda\|_2 \leq C_P\|P_\gamma v_{\lambda,\gamma}\|_2\|\nabla r_\lambda\|_2.$$ If the last gradient norm is zero then $r_\lambda=0$ by [F3]; otherwise divide by it. This proves $\|r_\lambda\|_{H^1}=O(\lambda^{-N})$. The same argument applies to $\widetilde\gamma$. [A1, A2, F3, F4, step 4.1, algebra]

5.2 In the collar, write $J(y,x_n)dS(y)dx_n$ for Euclidean volume in boundary normal coordinates, with $J(y,0)=1$. Since $\Phi=\phi+ix_n+O(x_n^2)$, $\operatorname{Im}\Phi=x_n+O(x_n^2)$ and $g(d\Phi,\overline{d\Phi})=2+O(x_n)$. The boundary values of both leading amplitudes are $\chi$, and lower amplitudes vanish there. Differentiating $v_{\lambda,\gamma}$ and $v_{\lambda,\widetilde\gamma}$ therefore gives $$\nabla v_{\lambda,\gamma}\cdot\overline{\nabla v_{\lambda,\widetilde\gamma}} =2\lambda e^{-2\lambda x_n}|\chi(y)|^2+e^{-2\lambda x_n}O(1)+ e^{-2\lambda x_n}O(\lambda x_n),$$ uniformly for $0\leq x_n\leq\lambda^{-1/2}$. On this shrinking collar $\lambda x_n^2\leq1$, so after $t=\lambda x_n$ the phase remainder factor is uniformly bounded; boundedness of $F,J,\chi$ gives an integrable majorant $C t^ke^{-t}$ for the rescaled leading term. For each fixed $t$, the rescaled leading term tends to $2t^ke^{-2t}F(y,0)|\chi(y)|^2$. Each displayed remainder has an additional factor $\lambda^{-1}$ after scaling and is dominated by $C\lambda^{-1}(t^k+t^{k+1}+t^{k+2})e^{-t}$, including the phase error $e^{O(t^2/\lambda)}-1=O(t^2/\lambda)$; its integral tends to zero. On the rest of the fixed collar, $\operatorname{Im}\Phi\geq x_n/2$ gives exponential decay $e^{-\lambda x_n}\leq e^{-\sqrt{\lambda}}$; every polynomial prefactor is therefore negligible. The cutoff region away from the collar is also exponentially small. Thus the limit for approximate beams is $$2\int_0^\infty t^ke^{-2t}\,dt\int_{\partial\Omega}F|\chi|^2\,dS,$$ whose constant is strictly positive. [F1, step 3.1, step 4.1, algebra]

6.1 Taking equal conductivities, $F=1$, and $k=0$ in step 5.2 gives $\lim_{\lambda\to\infty}\int_\Omega|\nabla v_{\lambda,\gamma}|^2dx=c_0\int_{\partial\Omega}|\chi|^2dS>0$. Together with the upper bound in step 4.1 this proves the asserted two-sided $H^1$ norm bound. [F1, step 4.1, step 5.2, algebra]

7.1 The exact corrections satisfy $H^1$ errors $O(\lambda^{-N})$ by step 5.1, while both approximate beams have uniformly bounded $H^1$ norms by step 4.1. Cauchy-Schwarz bounds the change in the weighted product integral, after multiplication by $\lambda^k$, by $C\lambda^k\lambda^{-N}$ because $0\leq\operatorname{dist}(x,\partial\Omega)^k\leq C$ on the bounded domain. Choose $N>k$. The error tends to zero, so the same limit holds for the exact solutions. [F3, F4, step 4.1, step 5.1, step 5.2, algebra] ∎

