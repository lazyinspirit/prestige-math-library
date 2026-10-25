---
id: ex-na-burgers-godunov-musc-shock
kind: example
title: Positive-state Burgers shock and the monotone finite-volume baseline
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 5
aliases: []
deps:
  - def-na-high-resolution-reconstruction
  - def-bounded-bv-data-on-line
  - def-monotone-finite-volume-entropy-scheme
  - def-kruzhkov-entropy-solution
  - def-rankine-hugoniot-and-lax-shocks
  - thm-monotone-finite-volume-entropy-convergence
  - def-countable-choice
justified_by: []
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "Jérôme Droniou, A Beginner’s Course in Finite Volume Approximation of Scalar Conservation Laws, complete lecture notes"
      url: "https://math.univ-cotedazur.fr/u/massonr/MAM5/droniou-scalar-hyp.pdf"
      locator: "§§2.2.2–2.3.3, PDF pp. 15–23, and §3.3, pp. 32–35: positive-state Burgers Godunov flux, monotone finite-volume convergence context and minmod MUSCL reconstruction."
verification:
  precheck: pass
---

## Example

For $f(u)=u^2/2$ and $u_0(x)=1$ for $x<0$, $u_0(x)=0$ for $x>0$, the entropy shock moves right at speed $1/2$. For states $a,b\in[0,1]$, define the positive-state Burgers Godunov flux by $F_G(a,b)=\min_{v\in[a,b]}f(v)$ when $a\le b$ and $F_G(a,b)=\max_{v\in[b,a]}f(v)$ when $a>b$. Since $f$ is increasing on $[0,1]$, both cases give $F_G(a,b)=a^2/2$. Minmod slopes vanish for the initial step, so the first MUSCL flux update is the first-order Godunov update; the batch-29 monotone finite-volume theorem applies to its mesh-refined baseline under Countable Choice and the stated CFL conditions.

## Facts & Assumptions

**Given:** $T>0$, $f(u)=u^2/2$, $u_0=\mathbf 1_{(-\infty,0)}$, cells $I_j=[jh,(j+1)h)$, $h_m=1/m$, $\tau_m=h_m/2$, and the displayed MUSCL/minmod reconstruction. The positive-state Godunov flux is defined by the two min/max formulas in the Example.

[A1] [[def-countable-choice]]: $\mathrm{AC}_\omega$ asserts that every countable family of nonempty sets has a choice function.

[F1] [[def-bounded-bv-data-on-line]]: $\mathrm{BV}_b(\mathbb R)$ consists of bounded locally integrable classes with finite translation variation; it does not require global $L^1$ integrability.

[F2] [[def-monotone-finite-volume-entropy-scheme]]: on an invariant interval $I$, the shared two-point update uses a locally Lipschitz consistent flux nondecreasing in its first coordinate and nonincreasing in its second, under $\lambda(L_1+L_2)\le1$.

[F3] [[thm-monotone-finite-volume-entropy-convergence]]: under $\mathrm{AC}_\omega$, bounded BV data, a locally Lipschitz consistent coordinatewise monotone flux on the invariant interval, $h_m,\tau_m\to0$, a positive lower bound on $\tau_m/h_m$, and the full CFL bound, the cell-average scheme converges locally to the unique bounded Kruzhkov entropy solution. Dependent Choice is additionally required only on the theorem's $u_0\in L^1(\mathbb R)$ branch.

[F4] [[def-kruzhkov-entropy-solution]]: a Kruzhkov solution satisfies every entropy inequality for $\eta_k(u)=|u-k|$, $q_k(u)=\operatorname{sgn}(u-k)(f(u)-f(k))$, and has a strong local $L^1$ initial trace.

[F5] [[def-rankine-hugoniot-and-lax-shocks]]: a jump from $u_L$ to $u_R$ with speed $s$ satisfies the weak jump law exactly when $f(u_R)-f(u_L)=s(u_R-u_L)$; in the scalar convex case, a strict Lax shock has $f'(u_R)<s<f'(u_L)$.

[F6] [[def-na-high-resolution-reconstruction]]: the minmod slope is the minmod of the left and right divided differences; a positive-speed face flux uses the reconstructed trace from the cell on its left.

## Verification

1.1 The jump data are bounded and locally integrable. For any translation length $r>0$, $|u_0(x+r)-u_0(x)|$ equals $1$ on an interval of length $r$ and vanishes elsewhere, so $\operatorname{TV}(u_0)=1$ by [F1]. The data are not in global $L^1(\mathbb R)$, so [F3] uses only its $\mathrm{AC}_\omega$ branch and imposes no DC assumption. [given, A1, F1, F3, algebra]

1.2 For $0\le a\le b\le1$, monotonicity of $f$ gives $\min_{v\in[a,b]}f(v)=f(a)$; for $0\le b<a\le1$, it gives $\max_{v\in[b,a]}f(v)=f(a)$. Thus the flux defined in the Example is $F_G(a,b)=a^2/2$ on $[0,1]^2$. Use the same polynomial $F(a,b)=a^2/2$ on all of $\mathbb R^2$ for the theorem's globally defined input. Its restriction is consistent, nondecreasing in $a$, independent of $b$, and satisfies $|F(a,b)-F(a',b)|\le|a-a'|$ on $[0,1]^2$; hence $L_1=1,L_2=0$ are valid in [F2]. For the particular jump $(1,0)$, [F5] gives speed $s=(f(1)-f(0))/(1-0)=1/2>0$, so the interface ray lies on the left state and the flux is the physical Riemann flux. [F2, F5, algebra]

2.1 Here $\lambda_m=\tau_m/h_m=1/2$, $h_m,\tau_m\to0$, and $\lambda_m(L_1+L_2)=1/2\le1$ with $\lambda_m\ge1/2$. Therefore [F3] applies to the cell-average recurrence and gives convergence to the unique bounded entropy solution, provided the explicit shock below is identified as that solution. [A1, F2, F3, step 1.1, step 1.2, given]

3.1 Define $u(t,x)=1$ for $x<t/2$ and $u(t,x)=0$ for $x>t/2$. The jump speed is $s=1/2=(f(1)-f(0))/(1-0)$, so [F5] gives the weak jump law. For $0\le k\le1$, the Kruzhkov entropy-flux jump is $q_k(0)-q_k(1)-\tfrac12(|0-k|-|1-k|)=k^2-k\le0$; for $k\le0$ and $k\ge1$ direct substitution gives zero. The initial trace is strong locally because the shock moves a distance $t/2\to0$. Hence [F4] identifies this profile as a bounded Kruzhkov solution; uniqueness in [F3] makes it the convergence target from step 2.1. [F3, F4, F5, step 2.1, algebra]

4.1 All cell averages are constant on each side of the initial interface, and both neighboring differences change sign or vanish at the two cells adjacent to it; [F6] therefore gives zero minmod slope in every cell. At the first step $F(1,0)=F(1,1)=1/2$ and $F(0,0)=0$, so the cell to the right of the interface becomes $0-(1/2)(0-1/2)=1/4$, while the cell to the left remains $1$. The exact shock at time $\tau=h/2$ has advanced by $h/4$, so its average on the first right cell is also $1/4$. [F2, F6, step 1.2, algebra] ∎

