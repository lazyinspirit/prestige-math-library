---
id: thm-shin-parabolic-initial-boundary-existence-and-residual-stability
kind: theorem
title: "Variable-coefficient parabolic initial-boundary existence and residual stability"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - def-countable-choice
  - def-axiom-of-choice
  - def-shin-parabolic-operator-and-boundary
  - lem-shin-parabolic-classical-approximation-and-boundary-attainment
  - lem-shin-zero-data-parabolic-classical-energy-identification
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Shin, Darbon, and Karniadakis, On the Convergence of Physics-Informed Neural Networks for Linear Second-Order Elliptic and Parabolic Type PDEs"
      url: "https://arxiv.org/pdf/2004.01806"
      locator: "Assumption 3.4, Theorem 3.6 and Appendices F–G; local construction and weak identification supplied by explicit helpers"
---

## Statement

Assume Countable Choice and the Axiom of Choice. Let $U\subset\mathbb R^d$ be nonempty, bounded and open, $T>0$, $Q=U\times(0,T)$, and $0<\alpha<1$. Use the intended divergence operator
$$L_tu=\sum_{i,j}D_i(a_{ij}D_ju)+\sum_iD_i(b_iu)+\sum_i c_iD_iu+du,$$
and its spatially expanded coefficients
$$\widetilde b_j=\sum_iD_ia_{ij}+b_j+c_j,\qquad \widetilde c=\sum_iD_ib_i+d.$$
Assume $a,b$ have the pointwise spatial derivatives needed for the expanded coefficients, $a=a^T\ge\lambda_0I$ with $\lambda_0>0$, and every spatial boundary point has an exterior tangent ball. The classical equation is understood through these expanded nondivergence coefficients. Assume $a,\widetilde b,\widetilde c,f$ have finite source order-zero weighted parabolic Hölder norms and the additional source weighted bounds $|\delta\widetilde b|_\alpha,|\delta^2\widetilde c|_\alpha,|\delta^2f|_\alpha<\infty$. Here the order-zero convention is
$$|v|_{0,\alpha}=\sup_{P\in Q}|v(P)|+\sup_{P\ne R\in Q}\delta_{P,R}^{\alpha}\frac{|v(P)-v(R)|}{d_p(P,R)^\alpha},\qquad d_p(P,R)=(|x-y|^2+|t-s|)^{1/2},$$
with $\delta(P)=\min\{\operatorname{dist}(x,\partial U),\sqrt t\}$ and $\delta_{P,R}=\min\{\delta(P),\delta(R)\}$. Assume the initial datum $g$ and lateral datum $\varphi$ are Hölder continuous with compatible values $g(x)=\varphi(x,0)$ on $\partial U$. Retain the source barrier assumption that some $\theta>0$ satisfies $\theta^2a_{11}+\theta\widetilde b_1\ge1$ and its coefficient bounds
$$\sum_{i,j}|a_{ij}|^2\le\Lambda,\qquad \lambda_0^{-2}(|b|^2+|c|^2)+\lambda_0^{-1}|d|\le v^2.$$
Then the problem $-u_t+L_tu=f$, $u=g$ initially and $u=\varphi$ laterally has a unique solution
$$u^*\in C^{2+\alpha,1+\alpha/2}_{\mathrm{loc}}(U\times(0,T])\cap C(\bar U\times[0,T]).$$
Write $\psi$ for the combined prescribed datum and $\Gamma_T=(\bar U\times\{0\})\cup(\partial U\times[0,T])$. If $\widetilde c\le0$, every $h\in C^{2,1}(Q)\cap C(\bar U\times[0,T])$ with finite residual norm satisfies
$$\|h-u^*\|_\infty\le\|h-\psi\|_{C(\Gamma_T)}+T\|f+h_t-L_th\|_\infty.$$
Consequently any sequence whose two right-hand errors tend to zero converges uniformly to $u^*$. If it exactly satisfies the initial and lateral conditions, its residuals are also locally parabolic Hölder, and the displayed divergence-to-nondivergence expansion agrees in distributions locally, its errors $e_m=h_m-u^*$ belong to $L^2(0,T;H^1_0(U))$ and satisfy $\|e_m\|_{L^2(0,T;H^1(U))}\to0$. If additionally $u^*\in L^2(0,T;H^1(U))$, as holds for zero initial and lateral data, then $h_m$ also belong to that space and converge strongly there to $u^*$. Hölder prescribed data alone do not assert this additional membership of the individual functions. In particular these deterministic implications apply on every probability-one event where a PINN residual-consistency theorem supplies the stated residual and prescribed-data limits.

## Statement references

[Shin et al., Assumption 3.4, Theorem 3.6 and Appendices F–G](https://arxiv.org/pdf/2004.01806)

## Facts & Assumptions

**Given:** All choices, domain, coefficient, Hölder, data, exterior-ball and retained source hypotheses in the Statement; the weak-expansion compatibility is additionally assumed for the energy clause.

[A1] Countable Choice and the Axiom of Choice are retained from weak existence, Sobolev truncation, compactness and smooth-interior embedding ([[def-countable-choice]], [[def-axiom-of-choice]]).

[F1] The parabolic operator uses $P=-\partial_t+L_t$ and prescribed initial plus lateral data, excluding the final-time face ([[def-shin-parabolic-operator-and-boundary]]).

[F2] Bounded locally parabolic Hölder nondivergence coefficients with elliptic principal part, nonpositive potential and exterior balls have a unique continuous-up-to-boundary interior classical solution; its proof includes weak approximation, interior regularity, boundary barriers and comparison ([[lem-shin-parabolic-classical-approximation-and-boundary-attainment]]).

[F3] A bounded zero-data locally classical error with bounded locally Hölder residual and the compatible bounded divergence representation is the unique zero-initial energy solution, with the stated $L^2_tH^1_x$ estimate ([[lem-shin-zero-data-parabolic-classical-energy-identification]]).

## Proof

1.1 The supremum term of $|\cdot|_{0,\alpha}$ gives boundedness of $a,\widetilde b,\widetilde c,f$. On every compact positive-time cylinder away from the spatial boundary, $\delta$ has a positive lower bound; hence its weighted seminorm gives an ordinary local parabolic Hölder bound there. Near a spatial interior point of the final face the same lower bound holds, since the final face is not part of the distance-defining boundary. Thus these coefficients and source have unique one-sided Hölder limits at $T$ and the regularity required in [F2]. The Frobenius bound on $a$ gives an upper eigenvalue bound in addition to uniform lower ellipticity. The two Hölder data sets define one continuous $\psi$ on the compact $\Gamma_T$ by the compatibility hypothesis. [given, F1, algebra]

2.1 Choose $k\ge\max\{0,\sup_Q\widetilde c\}$. Setting $u=e^{kt}w$ transforms the equation into $$-w_t+a:D^2w+\widetilde b\cdot Dw+(\widetilde c-k)w=e^{-kt}f,$$ with transformed datum $e^{-kt}\psi$. The potential is nonpositive and all other hypotheses of [F2] hold by step 1.1. Apply that supplier and multiply back by $e^{kt}$ to construct $u^*$ with the stated regularity and data. Applying its comparison uniqueness to differences after the same transformation gives uniqueness for the original equation. No assumption of closed-cylinder second derivatives is used. [A1, F2, step 1.1, construct]

3.1 Assume now $\widetilde c\le0$, put $e=h-u^*$, $R=\|f+h_t-L_th\|_\infty$, and $E=\|h-\psi\|_{C(\Gamma_T)}$. The nonnegative barrier $W=E+tR$ satisfies $(\partial_t-L_t)W=R-\widetilde c(E+tR)\ge R$. The forward equation for $e$ has source $f+h_t-L_th$, of absolute value at most $R$. The comparison proved in [F2] applied to $e-W$ and $-e-W$ gives $|e|\le W$, and therefore the displayed stability bound. Its application on closed cylinders ending at $\tau<T$, followed by $\tau\uparrow T$, requires no unsupported derivative on the top face of the original open $Q$. [F1, F2, step 2.1, given, algebra]

4.1 For any sequence with $E_m\to0$ and $R_m\to0$, step 3.1 gives $\|h_m-u^*\|_\infty\le E_m+TR_m\to0$. If these errors converge on a probability-one event, this same deterministic argument applies separately to every outcome in that event and proves almost-sure uniform convergence. It invokes no optimization property beyond the residual and boundary limits actually supplied. [step 3.1, algebra]

5.1 Under the additional weak-expansion compatibility, if $h_m$ exactly satisfies the initial and lateral data, $e_m=h_m-u^*$ has zero prescribed data and $$-e_{m,t}+L_te_m=-\bigl(f+h_{m,t}-L_th_m\bigr)=:r_m.$$ Fix $0<\tau<T$. The residual is locally Hölder up to this stopped final face because $\tau$ is interior to the original time interval; all coefficient, continuity, zero-data and distributional compatibility hypotheses of [F3] hold on $U\times(0,\tau)$. Apply [F3] there. Its energy proof gives a constant uniform for $\tau\le T$: with $B=\|b\|_\infty+\|c\|_\infty$, $D=\|d\|_\infty$ and $C_0=B^2/\lambda_0+2D+1$, one may use $C_E(T)=e^{C_0T}+\lambda_0^{-1}(C_0Te^{C_0T}+1)$. Consequently $$\sup_{t\le\tau}\|e_m(t)\|_2^2+\int_0^\tau\|De_m(t)\|_2^2dt\le C_E(T)\|r_m\|_{L^2(U\times(0,\tau))}^2.$$ Let $\tau\uparrow T$. The stopped energy solutions agree with the same classical $e_m$, so their weak spatial derivatives agree on overlaps. Monotone convergence gives $e_m\in L^2(0,T;H^1_0(U))$ and the full-interval gradient bound. The bounded divergence coefficients and the equation then give $e_{m,t}\in L^2(0,T;H^{-1}(U))$, with the zero initial trace inherited from any stopped interval. Since $\|r_m\|_{L^2}^2\le T|U|\|r_m\|_\infty^2\to0$, the gradient norm tends to zero; step 4.1 also gives $\int_0^T\|e_m\|_2^2dt\le T|U|\|e_m\|_\infty^2\to0$. Thus the errors converge strongly to zero in $L^2(0,T;H^1(U))$. If $u^*$ also belongs to that space, adding $e_m$ proves membership and strong convergence of $h_m$ there; zero prescribed data give this additional membership by [F3] applied to $u^*$ with source $f$ on stopped cylinders and the same limiting argument. No residual limit or derivatives at the original final face are required. [F3, step 2.1, step 4.1, given, algebra] ∎

## Remarks

The order-zero weighted Hölder requirement makes the source word “Hölder” precise through its equation (2.7), including its supremum term. If instead the original statement intended merely local Hölder continuity with only the positive-order weighted bounds, this proof does not cover that larger class: the heat equation with source $\sin(x)/t$ on $(0,\pi)$ and zero initial data has no continuous zero-initial solution. Against a nonnegative compactly supported spatial test its equation would equate a time derivative of a bounded quantity plus a bounded quantity to a positive constant divided by $t$, contradicting integration near zero. The intended interpretation must be approved explicitly, not silently substituted.

The source assumes pointwise spatial differentiability. Distributional compatibility is needed only by the additional energy clause, not by classical existence or sup-norm stability. It is automatic for local spatial $C^1$ coefficients, but must be stated if that word is interpreted more broadly. The source's printed double sum places $b_iu$ inside the $i,j$ sum and repeats it $d$ times; this item uses the separately indexed divergence term matching its own displayed expanded coefficients.

The exact source trial-class convention weights $D_{ij}h$ by $\delta$ rather than $\delta^2$. It is retained as a source convention in the definition; neither existence nor this proof asserts that the solution has that stronger weighted norm. The stability conclusion applies to its classical trial members, and in fact to the larger classical class explicitly stated here.

The source barrier and divergence coefficient bounds are retained even where the existence construction does not need their full strength. The deterministic consistency clause is the PDE interface used by the separate regularized-PINN consumer; it is not a new sampling, global-minimizer, or optimizer theorem. The full Shin definitions, Assumption 3.4 and Appendix F were read. Its cited Friedman theorem was not represented as a local proof or as newly read full text.
