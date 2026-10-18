---
id: cex-conservative-fv-weak-limit-need-not-be-entropic
kind: counterexample
title: A conservative consistent finite-volume weak limit need not be entropic
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 4
aliases: []
deps: [def-conservative-finite-volume-scheme, def-finite-volume-space-time-reconstruction, def-godunov-flux-for-burgers, lem-godunov-flux-for-burgers-is-continuous-and-consistent, thm-conservative-finite-volume-weak-limit, def-kruzhkov-entropy-solution, def-countable-choice]
justified_by: []
proof_strategy: direct
axiom_use: "Assume ACω, as required by the weak-limit and L1-translation suppliers; the entropy-defect calculation uses no further choice."
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
sources:
  references:
    - title: "H. De Sterck and P. Ullrich, Introduction to Computational PDEs, Chapter 3, complete chapter, PDF pp. 81–106"
      url: "https://climate.ucdavis.edu/AM452.pdf"
      locator: "§3.2.3 and §3.4, pp. 88–99: Rankine–Hugoniot speed and conservative finite-volume updates; the entropy-violating sequence is proved locally."
    - title: "Benjamin Seibold, MIT OpenCourseWare 18.336, Lecture 19: Finite Volume Methods, complete six-page note"
      url: "https://ocw.mit.edu/courses/18-336-numerical-methods-for-partial-differential-equations-spring-2009/814ce5a38ea0db4c58eff0c5ad8b111a_MIT18_336S09_lec19.pdf"
      locator: "pp. 1–2: Godunov flux and conservative cell update; the CFL-violating trajectory and entropy defect are verified locally."
---

## Statement refuted

Conservativity, diagonal flux consistency, local uniform boundedness and strong local $L^1$ convergence alone imply Kruzhkov entropy admissibility.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice $\mathrm{AC}_\omega$, Burgers' flux
$f_B(s)=s^2/2$, the Godunov finite-volume scheme with
$\tau_m=2h_m\downarrow0$, cell-average Riemann data $u_0=0$ for $x<0$ and
$u_0=1$ for $x>0$, and the resulting piecewise-constant reconstructions.

[A1] $\mathrm{AC}_\omega$ is the axiom that every countable family of nonempty
sets has a choice function ([[def-countable-choice]]).

[F1] The numerical update is the right-minus-left shared-flux difference and
starts from the cell averages of $u_0$.
([[def-conservative-finite-volume-scheme]])

[F2] The reconstruction equals $U_j^{m,n}$ on
$I_j^m\times[t_n^m,t_{n+1}^m)$.
([[def-finite-volume-space-time-reconstruction]])

[F3] For Burgers' flux, $G(0,0)=G(0,1)=0$ and $G(1,1)=1/2$; the flux is
continuous and diagonal-consistent.
([[def-godunov-flux-for-burgers]],
[[lem-godunov-flux-for-burgers-is-continuous-and-consistent]])

[F4] Strong local $L^1$ convergence and local uniform state bounds imply that
the conservative consistent scheme's limit satisfies the distributional weak
identity with the initial boundary term.
([[thm-conservative-finite-volume-weak-limit]])

[F5] A Kruzhkov entropy solution satisfies, for every real $k$ and every
nonnegative $\psi\in C_c^\infty(\mathbb R\times(0,T))$,
$$ \int_0^T\int_{\mathbb R}\bigl(\eta_k(u)\psi_t+q_k(u)\psi_x\bigr)\,dx\,dt\ge0, \quad \eta_k(s)=|s-k|,\quad q_k(s)=\operatorname{sgn}(s-k)(f_B(s)-f_B(k)). $$
([[def-kruzhkov-entropy-solution]])

## Counterexample
1.1 Cell averages of $u_0$ are $U_j^{m,0}=0$ for $j<0$ and $1$ for $j\ge0$. The only face pairs along the resulting step are $(0,0)$, $(0,1)$ and $(1,1)$; [F3] gives their fluxes as $0,0,1/2$. The ratio $\tau_m/h_m=2$, while $\max_{0\le s\le1}|f'_B(s)|=1$, so the usual noninteraction bound $(\tau_m/h_m)\max|f'_B|\le1$ fails. [F1, F3, given]

2.1 Assume inductively $U_j^{m,n}=0$ for $j<n$ and $1$ for $j\ge n$. If $j<n$, both face fluxes are $0$, so the state remains $0$. At $j=n$, the left flux is $0$ and the right flux is $1/2$, hence $U_n^{m,n+1}=1-2(1/2-0)=0$. For $j>n$ both fluxes are $1/2$, so those states remain $1$. Therefore the step shifts to $U_j^{m,n+1}=0$ for $j<n+1$ and $1$ for $j\ge n+1$. [F1, F3, step 1.1, algebra]

3.1 On $[2nh_m,2(n+1)h_m)$, the numerical jump is at $nh_m$, while the limit jump is at $t/2\in[nh_m,(n+1)h_m)$. The profiles differ only on a strip of width at most $h_m$ and height $1$, so the $L^1$ error on every bounded space-time rectangle is at most $h_mT'\to0$. All states are bounded by $1$. By [F4], the limit $u(x,t)=0$ for $x<t/2$ and $1$ for $x>t/2$ is a locally bounded distributional weak solution with those initial data. [A1, F2, F4, step 2.1, given, algebra]

4.1 Take $k=1/2$. Then $\eta_k(0)=\eta_k(1)=1/2$, while $q_k(0)=1/8$ and $q_k(1)=3/8$. Choose nonnegative $\alpha\in C_c^\infty((0,T))$ with $\int\alpha>0$ and nonnegative $\beta\in C_c^\infty(\mathbb R)$ with $\beta(0)>0$, and set $\psi(x,t)=\alpha(t)\beta(x-t/2)$. This is an admissible nonnegative test. To evaluate its time term, put $B=\int_{\mathbb R}\beta(y)\,dy$. Differentiating the smooth compactly supported test and changing variables gives $\int_{\mathbb R}\psi_t(x,t)\,dx=B\alpha'(t)-\frac12\alpha(t)\int_{\mathbb R}\beta'(y)\,dy=B\alpha'(t)$; the last integral is zero because $\beta$ is compactly supported. Therefore $\int_0^T\int_{\mathbb R}\eta_k(u)\psi_t\,dx\,dt=\frac12B(\alpha(T)-\alpha(0))=0$. Splitting the flux integral at $x=t/2$ and applying the fundamental theorem of calculus gives $\int_{\mathbb R}q_k(u)\psi_x\,dx=(1/8-3/8)\psi(t/2,t)=-\frac14\alpha(t)\beta(0)$. Thus the integral in [F5] equals $-\frac14\beta(0)\int\alpha<0$, contradicting the required entropy inequality. The weak limit is not Kruzhkov entropic. [F5, step 3.1, given, algebra] ∎
