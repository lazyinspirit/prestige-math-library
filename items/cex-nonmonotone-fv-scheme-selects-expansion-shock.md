---
id: cex-nonmonotone-fv-scheme-selects-expansion-shock
kind: counterexample
title: A consistent nonmonotone flux selects a nonentropy expansion shock
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
aliases: []
deps:
  [
    def-bounded-bv-data-on-line,
    def-conservative-finite-volume-scheme,
    def-locally-bounded-distributional-weak-solution,
    def-kruzhkov-entropy-solution,
    lem-schwartz-cutoffs-from-the-standard-smooth-step
  ]
justified_by: []
forward_refs: []
proof_strategy: direct
generation:
  role: counterexample
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "Jérôme Droniou, A beginner’s course in finite volume approximation of
        scalar conservation laws, complete lecture note"
      url: "https://math.univ-cotedazur.fr/u/massonr/MAM5/droniou-scalar-hyp.pdf"
      locator: "§2.3.2–2.3.3, PDF pp. 21–23: discrete entropy inequalities and why
        they are needed in addition to weak conservation."
    - title: "Siddhartha Mishra, Ulrik S. Fjordholm and Rémi Abgrall, Numerical
        Methods for Conservation Laws, ETH lecture notes"
      url: "https://metaphor.ethz.ch/x/2019/hs/401-4671-00L/literature/mishra_hyperbo\
        lic_pdes.pdf"
      locator: "§4.5.2, PDF pp. 50–51: entropy admissibility is a separate inequality
        beyond the weak conservation law."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement refuted

For every $T>0$, every continuous consistent conservative two-point finite-volume flux, without
a monotonicity assumption, sends every bounded BV datum to reconstructions
whose strong local limits are Kruzhkov entropy solutions.

## Facts & Assumptions

**Given:** $T>0$, Burgers' flux $f_B(s)=s^2/2$, the Riemann datum $u_0=-1$ on $x<0$ and $u_0=1$ on $x>0$, and the polynomial flux $F$ below.

[F1] A continuous consistent numerical flux is inserted in the shared-face flux-difference update, with initial cell averages ([[def-conservative-finite-volume-scheme]]).

[F2] A locally bounded distributional weak solution satisfies the initial-boundary weak identity for every smooth compactly supported test ([[def-locally-bounded-distributional-weak-solution]]).

[F3] Entropy admissibility requires each Kruzhkov inequality with $q_k(s)=\operatorname{sgn}(s-k)(f(s)-f(k))$ ([[def-kruzhkov-entropy-solution]]).

[F4] For each $R>0$ there is a nonnegative $C_c^\infty(\mathbb R^2)$ cutoff equal to $1$ near the origin and supported in the ball of radius $2R$ ([[lem-schwartz-cutoffs-from-the-standard-smooth-step]]).

[F5] The datum is globally bounded and has finite translation variation ([[def-bounded-bv-data-on-line]]).

## Counterexample

For Burgers' flux $f_B(s)=s^2/2$, take the bounded BV datum
$u_0(x)=-1$ for $x<0$ and $u_0(x)=1$ for $x>0$. Define the continuous
polynomial flux
$$F(a,b):=\frac{a^2+b^2}{4}+\frac1{16}(a-b)(a^2-1)(b^2-1).$$
It is consistent, since $F(s,s)=s^2/2$, but it is not monotone in
its first coordinate. On every grid with $x=0$ as a cell face, the finite-volume
scheme keeps the expansion shock fixed. The resulting reconstructions converge
strongly locally to a weak solution that fails the $k=0$ Kruzhkov inequality.

1.1 The polynomial $F$ is continuous. On the diagonal, its correction term vanishes and $F(s,s)=s^2/2=f_B(s)$, so it is consistent. Its first partial derivative is $\partial_aF(a,b)=\frac a2+\frac1{16}\bigl((a^2-1)(b^2-1)+2a(a-b)(b^2-1)\bigr).$ At $(-1,0)$ this equals $-1/2-2/16=-5/8<0$, so it is not nondecreasing in its first coordinate. [given, algebra]

1.2 On the uniform cells $I_j=[jh,(j+1)h)$ with $h>0$, the initial averages are $U_j^0=-1$ for $j<0$ and $U_j^0=1$ for $j\ge0$. Every same-state face flux is $F(-1,-1)=F(1,1)=1/2$. The only mixed pair is $(-1,1)$; both correction factors vanish and $F(-1,1)=1/2$. Thus every face flux equals $1/2$, and the recurrence leaves every cell average unchanged at every step. [F1, given, algebra]

2.1 The datum has $\operatorname{TV}(u_0)=2$ by [F5]. For any sequence $h_m,\tau_m\downarrow0$ with this aligned grid convention, the piecewise-constant reconstruction is exactly the stationary step function almost everywhere. It therefore converges strongly in local space-time $L^1$ to $u(x,t)=-1$ for $x<0$ and $u(x,t)=1$ for $x>0$. Its initial trace is $u_0$. [F1, step 1.2, F5, given]

3.1 Since $f_B(u)=1/2$ almost everywhere, for any $\varphi\in C_c^\infty(\mathbb R\times(-\infty,T))$ one has $\int_0^T u(x,t)\varphi_t(x,t)\,dt=-u_0(x)\varphi(x,0)$ for almost every $x$, because $u(x,t)=u_0(x)$ is stationary and $\varphi$ vanishes near $t=T$. Integrating in $x$ cancels the initial term in [F2]. The flux contribution is $\frac12\int_{\mathbb R}\varphi_x(x,t)\,dx=0$ for each $t$, since $\varphi$ has compact spatial support. Thus $u$ satisfies the weak identity and is a locally bounded distributional weak solution. [F2, step 2.1, algebra]

4.1 Let $R:=T/8$ and choose the cutoff $\chi\in C_c^\infty(\mathbb R^2)$ of [F4] with $\chi=1$ on the unit ball and support in the radius-two ball. The function $\varphi(x,t):=\chi(x/R,(t-T/2)/R)$ is nonnegative, smooth, supported in $\mathbb R\times(0,T)$, and satisfies $\int_0^T\varphi(0,t)\,dt>0$. For $k=0$, $|u|=1$ is stationary, so $\int|u|\varphi_t=0$, while $q_0(-1)=-1/2$ and $q_0(1)=1/2$ give $\int_0^T\!\int_{\mathbb R}q_0(u)\varphi_x\,dx\,dt=-\int_0^T\varphi(0,t)\,dt<0.$ This contradicts the required nonnegative entropy pairing in [F3]. [F3, F4, step 2.1, construct, algebra] ∎
## Remarks

The diagram shows the stationary discontinuity at $x=0$ with its left and right
states. The horizontal axis is space and the vertical axis is time. The proof
verifies the weak equation and entropy defect by direct integration; it does
not rely on the drawing.

```tikz
\begin{tikzpicture}[x=1.2cm,y=1cm]
  \draw[->] (-2,0) -- (2.2,0) node[right] {$x$};
  \draw[->] (0,0) -- (0,2.2) node[above] {$t$};
  \draw[thick] (0,0) -- (0,2);
  \node at (-1,1.3) {$u=-1$};
  \node at (1,1.3) {$u=1$};
  \node[right] at (0,1.8) {$x=0$};
\end{tikzpicture}
```
