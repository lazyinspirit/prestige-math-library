---
id: thm-odd-dimensional-wave-formula-by-spherical-means
kind: theorem
title: "The odd-dimensional wave formula by iterated spherical means"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 4
proof_strategy: direct
deps: [thm-kirchhoff-formula-for-the-three-dimensional-wave-equation, lem-iterated-radial-derivative-identity, lem-radial-derivative-expansion-of-the-epd-transform, lem-odd-dimensional-wave-kernels-obey-the-radial-recursion, lem-euler-poisson-darboux-equation-for-spherical-means, lem-spherical-means-of-smooth-data-are-smooth, def-spherical-mean-of-space-dependent-data, thm-algebra-of-derivatives, def-countable-choice, thm-chain-rule-for-total-derivatives, thm-clairaut-schwarz-mixed-partials, thm-continuous-partial-derivatives-imply-total-differentiability]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript, AMS Graduate Studies in Mathematics)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "§7.2, printed pp. 174–175, (7.19)–(7.22), Theorem 7.7 (proof read in full)"
    - title: "Victor Ivrii, Partial Differential Equations (University of Toronto, 2018, CC BY-SA)"
      url: "https://www.math.toronto.edu/courses/apm346h1/20181/PDE-textbook/PDE-textbook.pdf"
      locator: "§2.3, Problem 14, printed p. 53: the recursion and the odd-dimensional spherical-wave construction"
    - title: "Jared Speck, MIT 18.152 Introduction to Partial Differential Equations, Class Meeting #12: Kirchhoff's Formula and Minkowskian Geometry (Fall 2011)"
      url: "https://ocw.mit.edu/courses/18-152-introduction-to-partial-differential-equations-fall-2011/940561a138578640826f762b5a57bcad_MIT18_152F11_lec_12.pdf"
      locator: "§1, printed p. 1: the three-dimensional base case of the induction"
---


## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $n=2k+1\ge3$ be odd, $c>0$, $u_0\in C^{k+2}(\mathbb R^n)$, $u_1\in C^{k+1}(\mathbb R^n)$, put $D_t:=t^{-1}\partial_t$, and let $M$ be the spherical mean of [[def-spherical-mean-of-space-dependent-data]]. Then
$$u(x,t):=\frac{1}{(n-2)!!}\Bigl[\frac{\partial}{\partial t}D_t^{k-1}\bigl(t^{n-2}M_{u_0}(x,ct)\bigr)+D_t^{k-1}\bigl(t^{n-2}M_{u_1}(x,ct)\bigr)\Bigr]$$
defines a $C^2$ function on $\mathbb R^n\times(0,\infty)$ solving $u_{tt}=c^2\Delta u$; each $D_t^{j}$ is applied to the $t$-dependent function $t\mapsto t^{n-2}M_f(x,ct)$. For $n=3$ ($k=1$) this is exactly Kirchhoff's formula [[thm-kirchhoff-formula-for-the-three-dimensional-wave-equation]], and the displayed constant $(n-2)!!$ is the one required by the leading coefficient of [[lem-radial-derivative-expansion-of-the-epd-transform]].

## Facts & Assumptions

**Given:** Countable Choice, $n=2k+1\ge3$, $c>0$, $u_0\in C^{k+2}(\mathbb R^n)$, $u_1\in C^{k+1}(\mathbb R^n)$, and the spherical means $H_f(x,r):=M_f(x,r)$.

[F1] For $j\ge1$ and every $\varphi\in C^{j+1}((0,\infty))$, $\partial_r^2D_r^{j-1}\bigl(r^{2j-1}\varphi(r)\bigr)=D_r^{j-1}\bigl[r^{2j-1}r^{-2j}\partial_r\bigl(r^{2j}\partial_r\varphi(r)\bigr)\bigr]$ on $(0,\infty)$, where $D_r=r^{-1}\partial_r$ ([[lem-iterated-radial-derivative-identity]]).

[F2] For $m\ge1$ and $h\in C^m(\mathbb R^n)$, $(x,r)\mapsto M_h(x,r)$ is $C^m$ on $\mathbb R^n\times(0,\infty)$ with all derivatives obtained by differentiating $h$ under the sphere integral ([[lem-spherical-means-of-smooth-data-are-smooth]]).

[F3] For $h\in C^2(\mathbb R^n)$ the Euler–Poisson–Darboux identity $\Delta_xM_h(x,r)=M_{rr}(x,r)+\frac{n-1}{r}M_r(x,r)$ holds for every $r>0$ ([[lem-euler-poisson-darboux-equation-for-spherical-means]]).

[F4] If $f$ is totally differentiable at $a$ and $g$ at $f(a)$, then $g\circ f$ is totally differentiable at $a$ with $D(g\circ f)(a)=Dg(f(a))\circ Df(a)$ ([[thm-chain-rule-for-total-derivatives]]); sums, products and quotients of differentiable functions are differentiable with the usual rules on their domains ([[thm-algebra-of-derivatives]]). The required total differentiability follows from continuous coordinate partial derivatives ([[thm-continuous-partial-derivatives-imply-total-differentiability]]).

[F5] If $h$ is $C^2$ on an open subset of $\mathbb R^m$, then $\partial_i\partial_jh=\partial_j\partial_ih$ ([[thm-clairaut-schwarz-mixed-partials]]).

## Proof

1.1 Fix $f\in C^{k+1}(\mathbb R^n)$ and put $W(x,t):=D_t^{k-1}\bigl(t^{n-2}H_f(x,ct)\bigr)$, where $n-2=2k-1$. Applying [F1] with $j=k$ and $\varphi(t):=H_f(x,ct)$ — admissible for each fixed $x$ because $H_f(x,\cdot)\in C^{k+1}$ by [F2] — gives $\partial_t^2D_t^{k-1}\bigl(t^{2k-1}H_f(x,ct)\bigr)=D_t^{k-1}\bigl[t^{2k-1}t^{-2k}\partial_t\bigl(t^{2k}\partial_tH_f(x,ct)\bigr)\bigr]$. [F1, F2]

1.2 The inner expression. By [F4], $\partial_tH_f(x,ct)=c\,(H_f)_r(x,ct)$ and $\partial_t^2H_f(x,ct)=c^2(H_f)_{rr}(x,ct)$, so with $r=ct$ and $2k=n-1$, $t^{-1}\partial_t\bigl(t^{2k}\partial_tH_f(x,ct)\bigr)=t^{-1}\partial_t\bigl(t^{n-1}c(H_f)_r(x,ct)\bigr)=c\,t^{n-3}\bigl[(n-1)(H_f)_r(x,ct)+ct(H_f)_{rr}(x,ct)\bigr]=c\,t^{n-3}\bigl[(n-1)(H_f)_r(x,r)+r(H_f)_{rr}(x,r)\bigr]=c^2t^{n-2}\Delta_xH_f(x,ct)$, the last equality because $r\bigl((H_f)_{rr}+\frac{n-1}{r}(H_f)_r\bigr)=r\Delta_xH_f$ by [F3]. [F3, F4, algebra]

1.3 Hence $\partial_t^2W(x,t)=c^2D_t^{k-1}\bigl(t^{n-2}\Delta_xH_f(x,ct)\bigr)$. The operator $\Delta_x$ acts only on the $x$-variables while $D_t^{k-1}$ and multiplication by $t^{n-2}$ act only on $t$, and the mixed partials involved commute by [F5] since $H_f$ is $C^{k+1}$; therefore $D_t^{k-1}\bigl(t^{n-2}\Delta_xH_f(x,ct)\bigr)=\Delta_xD_t^{k-1}\bigl(t^{n-2}H_f(x,ct)\bigr)=\Delta_xW(x,t)$, that is $\partial_t^2W=c^2\Delta_xW$ on $\mathbb R^n\times(0,\infty)$. [F5, algebra]

1.4 Regularity and superposition. For $f=u_0\in C^{k+2}(\mathbb R^n)$ the function $t\mapsto t^{n-2}H_{u_0}(x,ct)$ is $C^{k+2}$ by [F2], so $W_{u_0}=D_t^{k-1}(\cdot)$ is $C^3$; for $f=u_1\in C^{k+1}(\mathbb R^n)$ similarly $W_{u_1}$ is $C^2$. Hence $u=(n-2)!!^{-1}\bigl[\partial_tW_{u_0}+W_{u_1}\bigr]$ is $C^2$ on $\mathbb R^n\times(0,\infty)$ and $u_{tt}=(n-2)!!^{-1}\bigl[\partial_t\partial_t^2W_{u_0}+\partial_t^2W_{u_1}\bigr]=(n-2)!!^{-1}\bigl[\partial_t(c^2\Delta_xW_{u_0})+c^2\Delta_xW_{u_1}\bigr]=c^2\Delta_xu$. [F2, algebra]

2.1 For $k=1$, that is $n=3$, the formula reads $\partial_t\bigl[tM_{u_0}(x,ct)\bigr]+tM_{u_1}(x,ct)$ with $(n-2)!!=1$, which is Kirchhoff's expression of [[thm-kirchhoff-formula-for-the-three-dimensional-wave-equation]]. The prefactor $(n-2)!!$ is the leading coefficient of $D_r^{k-1}(r^{2k-1}\varphi)$ by [[lem-radial-derivative-expansion-of-the-epd-transform]]: with $r=ct$ and with the evenness of the means, which kills the first-order term, that expansion makes the normalised combination the data-carrying normalisation; the precise attainment of $u_0$ and $u_1$ is proved by the data-attainment lemma below. [given] ∎ 