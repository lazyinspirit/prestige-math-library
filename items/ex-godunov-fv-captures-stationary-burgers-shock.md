---
id: ex-godunov-fv-captures-stationary-burgers-shock
kind: example
title: Godunov scheme captures a stationary Burgers entropy shock
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 6
aliases: []
deps:
  [
    def-bounded-bv-data-on-line,
    def-monotone-finite-volume-entropy-scheme,
    def-godunov-flux-for-burgers,
    lem-godunov-flux-for-burgers-is-continuous-and-consistent,
    def-distributional-weak-solution-of-a-scalar-conservation-law,
    thm-rankine-hugoniot-jump-condition,
    def-kruzhkov-entropy-solution,
    def-countable-choice,
    ex-godunov-fv-monotone-under-cfl,
    thm-monotone-finite-volume-entropy-convergence
  ]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jérôme Droniou, A beginner’s course in finite volume approximation of
        scalar conservation laws, complete lecture note"
      url: "https://math.univ-cotedazur.fr/u/massonr/MAM5/droniou-scalar-hyp.pdf"
      locator: "§§2.3.3–2.4, PDF pp. 22–24: monotone-scheme entropy convergence and
        numerical Burgers shock examples."
    - title: "Siddhartha Mishra, Ulrik S. Fjordholm and Rémi Abgrall, Numerical
        Methods for Conservation Laws, ETH lecture notes"
      url: "https://metaphor.ethz.ch/x/2019/hs/401-4671-00L/literature/mishra_hyperbo\
        lic_pdes.pdf"
      locator: "§4.4, PDF pp. 40–44 (Godunov/Lax–Friedrichs fluxes and Burgers
        shocks); §4.6, pp. 55–57 (entropy convergence)."
verification:
  precheck: pass
---

## Example

Assume $\mathrm{AC}_\omega$. For Burgers' flux $f_B(s)=s^2/2$, take $u_0(x)=1$ for $x<0$ and $u_0(x)=-1$
for $x>0$. Use $h_m=1/m$, $\tau_m=h_m/4$, and the Godunov flux from
[[def-godunov-flux-for-burgers]]. The grid interface $x=0$ is aligned with the
initial jump. Every numerical face flux is $1/2$, so the finite-volume profile
is stationary at every time step. The exact shock speed is zero, and the
stationary jump satisfies all Kruzhkov entropy inequalities. Theorem
[[thm-monotone-finite-volume-entropy-convergence]] therefore applies, although
in this aligned example the reconstructions already equal their limit exactly.

The diagram shows the stationary interface and the two constant states. The
horizontal coordinate is $x$, the vertical coordinate is time, and the vertical
line is the shock curve $x=0$; the proof uses the recurrence and entropy fluxes,
not the drawing.

```tikz
\begin{tikzpicture}[x=1.2cm,y=1cm]
  \draw[->] (-2,0) -- (2.2,0) node[right] {$x$};
  \draw[->] (0,0) -- (0,2.2) node[above] {$t$};
  \draw[thick] (0,0) -- (0,2);
  \node at (-1,1.3) {$u=1$};
  \node at (1,1.3) {$u=-1$};
  \node[right] at (0,1.8) {$x=0$};
\end{tikzpicture}
```

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, $f_B(s)=s^2/2$, the Riemann datum $u_0=1$ on $x<0$ and $u_0=-1$ on $x>0$, $h_m=1/m$, $\tau_m=h_m/4$, and the Burgers Godunov flux.

[F1] The Burgers Godunov flux has $G(a,a)=a^2/2$ and, when $b<a$, $G(a,b)=\max\{a^2,b^2\}/2$ ([[def-godunov-flux-for-burgers]], [[lem-godunov-flux-for-burgers-is-continuous-and-consistent]]).

[F2] Under $\mathrm{AC}_\omega$, the chosen Godunov flux has coordinate Lipschitz bounds $1,1$ on $[-1,1]$, so $\lambda=1/4$ satisfies the full CFL bound; the entropy-convergence theorem then applies to bounded BV data ([[ex-godunov-fv-monotone-under-cfl]], [[def-countable-choice]], [[thm-monotone-finite-volume-entropy-convergence]]).

[F3] A bounded weak solution satisfies the integral identity with the initial boundary term ([[def-distributional-weak-solution-of-a-scalar-conservation-law]]).

[F4] For a piecewise smooth weak solution with a graph shock $x=s(t)$ and distinct traces, the Rankine–Hugoniot speed is $s'=[f]/[u]$ ([[thm-rankine-hugoniot-jump-condition]]).

[F5] Kruzhkov entropy admissibility is the family of inequalities using $q_k(s)=\operatorname{sgn}(s-k)(f(s)-f(k))$, together with a strong local initial trace ([[def-kruzhkov-entropy-solution]]).

[F6] The datum is a bounded BV equivalence class with total translation variation $\operatorname{TV}(u_0)$ ([[def-bounded-bv-data-on-line]]).

## Verification

1.1 The initial cell averages are $U_j^0=1$ for $j<0$ and $U_j^0=-1$ for $j\ge0$. Same-state faces have flux $1/2$ by [F1], and the only mixed face has pair $(1,-1)$ and flux $\max\{1,1\}/2=1/2$. Thus every face flux equals $1/2$. [F1, given, algebra]

2.1 Every cell's left and right fluxes are both $1/2$, so the conservative update leaves every $U_j^n$ unchanged. Induction in $n$ proves that both reconstructions equal the stationary step function almost everywhere for every $m$; in particular they converge strongly locally to it. [step 1.1, given, algebra]

3.1 The stationary profile is a bounded weak solution: for every $\varphi\in C_c^\infty(\mathbb R\times(-\infty,T))$, its time term satisfies $\int_0^T\!\int_{\mathbb R}u\varphi_t\,dx\,dt=-\int_{\mathbb R}u_0(x)\varphi(x,0)\,dx$, while $f_B(u)=1/2$ almost everywhere and hence $\int_{\mathbb R}f_B(u)\varphi_x\,dx=0$ at each time. This is exactly the weak identity of [F3]. [F3, step 2.1, algebra]

3.2 Fix $k\in\mathbb R$. The entropy flux traces are $q_k(1)$ on the left and $q_k(-1)$ on the right. If $k\le-1$ or $k\ge1$, both states lie on the same side of $k$ and these fluxes are equal because $f_B(1)=f_B(-1)$. If $-1<k<1$, then $q_k(1)=\frac{1-k^2}{2},\qquad q_k(-1)=-\frac{1-k^2}{2},\qquad q_k(1)-q_k(-1)=1-k^2\ge0.$ For any nonnegative interior test $\varphi$, the time term $\int|u-k|\varphi_t$ vanishes because $u$ is stationary. Integration on the two half-lines gives $\int_0^T\!\int_{\mathbb R}q_k(u)\varphi_x\,dx\,dt=(q_k(1)-q_k(-1))\int_0^T\varphi(0,t)\,dt\ge0.$ The initial trace is exactly $u_0$, so [F5] shows the stationary shock is a Kruzhkov entropy solution. [F5, step 2.1, algebra]

4.1 The left and right traces are $u_L=1$ and $u_R=-1$. By [F4], the shock speed is $s=\frac{f_B(-1)-f_B(1)}{-1-1}=\frac{1/2-1/2}{-2}=0,$ which agrees with the stationary interface. The Rankine–Hugoniot supplier applies because step 3.1 verified the weak identity and the traces are distinct. [F3, F4, step 2.1, step 3.1, algebra]

5.1 The translation variation of the datum is $2$: for $h>0$, $u_0(x+h)-u_0(x)$ is nonzero only on $(-h,0)$, where its absolute value is $2$, so $\int|u_0(x+h)-u_0(x)|dx=2h$. The ratio is $\tau_m/h_m=1/4$, and the flux bounds $L_1=L_2=1$ from [F2] give $\lambda(L_1+L_2)=1/2\le1$. Thus the hypotheses of the main convergence theorem in [F2] hold; since the exact reconstruction is the entropy solution from step 3.2, it is the unique limit. No global $L^1$ assertion is made because the two tails are nonzero. [F2, F5, F6, step 4.1, step 3.2, algebra] ∎
