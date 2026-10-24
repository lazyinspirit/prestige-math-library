---
id: ex-godunov-fv-captures-burgers-shock-speed
kind: example
title: Godunov finite volumes preserve the Burgers shock speed
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
aliases: []
deps:
  [
    def-conservative-finite-volume-scheme,
    def-finite-volume-space-time-reconstruction,
    def-godunov-flux-for-burgers,
    lem-godunov-flux-for-burgers-is-continuous-and-consistent,
    def-locally-bounded-distributional-weak-solution,
    thm-rankine-hugoniot-jump-condition
  ]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "H. De Sterck and P. Ullrich, Introduction to Computational PDEs, Chapter
        3, complete chapter, PDF pp. 81–106"
      url: "https://climate.ucdavis.edu/AM452.pdf"
      locator: "§3.2.3 and §§3.4.1–3.4.3, pp. 88–99: Burgers shock speed, cell-average
        updates, Godunov fluxes and conservation."
    - title: "Benjamin Seibold, MIT OpenCourseWare 18.336, Lecture 19: Finite Volume
        Methods, complete six-page note"
      url: "https://ocw.mit.edu/courses/18-336-numerical-methods-for-partial-differen\
        tial-equations-spring-2009/814ce5a38ea0db4c58eff0c5ad8b111a_MIT18_336S0\
        9_lec19.pdf"
      locator: "pp. 1–2: Burgers Godunov method and shock-wave Riemann problems."
verification:
  precheck: pass
---

## Example

For $f_B(s)=s^2/2$, use the Godunov flux $G$ of
[[def-godunov-flux-for-burgers]] on cells of width $h_m\downarrow0$ with
$\tau_m=h_m/2$. Let $u_0(x)=1$ for $x<0$ and $u_0(x)=-1$ for $x\ge0$,
with cell-average initialization. The scheme preserves the stationary shock exactly:
$$ U_j^{m,n}=\begin{cases}1,&j<0,\\-1,&j\ge0.\end{cases} $$
Its reconstruction is the same stationary weak shock for every $m$. The
Rankine–Hugoniot speed is $0$, which is the speed of this limit.

## Facts & Assumptions

**Given:** Burgers' flux $f_B(s)=s^2/2$, the Godunov scheme with $\tau_m=h_m/2$, and the Riemann data $1$ to the left of zero and $-1$ to its right.

[F1] The scheme starts from cell averages and updates each cell by the right-minus-left shared flux difference. ([[def-conservative-finite-volume-scheme]])

[F2] The state reconstruction is constant with value $U_j^{m,n}$ on $I_j^m\times[t_n^m,t_{n+1}^m)$. ([[def-finite-volume-space-time-reconstruction]])

[F3] $G(1,1)=G(1,-1)=G(-1,-1)=1/2$, and $G$ is continuous and consistent with $f_B$. ([[def-godunov-flux-for-burgers]], [[lem-godunov-flux-for-burgers-is-continuous-and-consistent]])

[F4] A measurable, locally essentially bounded state satisfying the weak identity with the initial boundary term is a locally bounded distributional weak solution. ([[def-locally-bounded-distributional-weak-solution]])

[F5] A one-dimensional shock with distinct traces has speed $s=[f]/[u]=(f(u^+)-f(u^-))/(u^+-u^-)$. ([[thm-rankine-hugoniot-jump-condition]])

## Verification

1.1 The cell averages are $1$ for $j<0$ and $-1$ for $j\ge0$. The only face pairs are $(1,1)$, $(1,-1)$, and $(-1,-1)$; [F3] gives flux $1/2$ in all three cases. [F1, F3, given]

2.1 Every cell therefore has equal left and right fluxes at every step, so the update leaves every $U_j^{m,n}$ unchanged. Induction on $n$ gives exactly the stationary step profile displayed in the Example. [F1, F3, step 1.1, algebra]

3.1 By [F2] and step 2.1, every reconstruction equals $u(x,t)=1$ for $x<0$ and $u(x,t)=-1$ for $x\ge0$ almost everywhere, so $\mathcal U_m\to u$ strongly in $L^1_{\mathrm{loc}}$ and $|u|\le1$. For any $\varphi\in C_c^\infty(\mathbb R\times(-\infty,T))$, compact support makes $\varphi$ vanish near $t=T$, and $u(x,t)=u_0(x)$ for $t>0$; hence $\int_0^T\int_{\mathbb R}u\varphi_t\,dx\,dt=-\int_{\mathbb R}u_0(x)\varphi(x,0)\,dx$. Also $f_B(u)=1/2$ almost everywhere, so $\int_0^T\int_{\mathbb R}f_B(u)\varphi_x\,dx\,dt=0$. Thus the weak identity holds, and [F4] gives the claimed local weak solution without an additional choice axiom. [F2, F4, step 2.1, given, algebra]

4.1 The traces are $u^-=1$ and $u^+=-1$. Thus [F5] gives $s=(f_B(-1)-f_B(1))/(-1-1)=(1/2-1/2)/(-2)=0$, agreeing with the stationary interface. [F5, step 3.1, algebra] ∎
