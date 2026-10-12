---
id: lem-cm-sine-coefficient-decay-by-integration-by-parts
kind: lemma
title: "Repeated integration by parts gives $|b_n(F)|\\le 2L^5M_5/(\\pi^5n^5)$ for odd $2L$-periodic $C^5$ functions and $|b_n(G)|\\le 2L^4M_4/(\\pi^4n^4)$ for $C^4$"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 1
deps: [def-cm-sine-coefficients-of-periodic-functions, thm-integration-by-parts, thm-ftc-second-part, def-oriented-integral, thm-additivity-over-subintervals, thm-algebra-of-derivatives, def-ck-euclidean-maps-and-diffeomorphisms, def-derivative, def-abs-value, thm-extreme-value-metric, thm-heine-borel-rn, def-metric-ball, thm-linearity-of-the-integral, def-sine-and-cosine-by-power-series, thm-sine-and-cosine-derivatives, thm-sine-cosine-zero-sets-and-fundamental-period]
dependency_roles:
  def-cm-sine-coefficients-of-periodic-functions: mathematical-premise
  thm-integration-by-parts: mathematical-premise
  thm-ftc-second-part: mathematical-premise
  def-oriented-integral: mathematical-premise
  thm-additivity-over-subintervals: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-derivative: mathematical-premise
  def-abs-value: mathematical-premise
  thm-extreme-value-metric: mathematical-premise
  thm-heine-borel-rn: mathematical-premise
  def-metric-ball: mathematical-premise
  thm-linearity-of-the-integral: mathematical-premise
  def-sine-and-cosine-by-power-series: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  thm-sine-cosine-zero-sets-and-fundamental-period: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "R. Laugesen, Harmonic Analysis Lecture Notes (arXiv:0903.3845), Chapter 1 (smoothness and decay: Theorems 1.6–1.8)"
      url: "https://arxiv.org/pdf/0903.3845"
    - title: "L. Grafakos, Classical Fourier Analysis, 3rd ed., Section 3.3.2 (decay of Fourier coefficients of smooth functions)"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"

  precheck: pass
---

## Statement

Let $L>0$. Let $F:\mathbb R\to\mathbb R$ be odd and $2L$-periodic of class $C^5$ and let $G:\mathbb R\to\mathbb R$ be odd and $2L$-periodic of class $C^4$ ([[def-cm-sine-coefficients-of-periodic-functions]], [[def-ck-euclidean-maps-and-diffeomorphisms]]); put

$$M_5:=\sup_{\mathbb R}|F^{(5)}|<+\infty,\qquad M_4:=\sup_{\mathbb R}|G^{(4)}|<+\infty .$$

Then for every integer $n\ge1$, with the sine coefficients $b_n$ of [[def-cm-sine-coefficients-of-periodic-functions]],

$$|b_n(F)|\le\frac{2L^5M_5}{\pi^5n^5},\qquad |b_n(G)|\le\frac{2L^4M_4}{\pi^4n^4}.$$

## Facts & Assumptions

**Given:** The period $L>0$, the functions $F,G$ and the bounds $M_5,M_4$; an integer $n\ge1$.

[F1] Integration by parts: for $C^1$ functions $p,q$ on $[a,b]$, $\int_a^bpq'=\bigl[pq\bigr]_a^b-\int_a^bp'q$ ([[thm-integration-by-parts]], [[thm-ftc-second-part]], [[def-oriented-integral]], [[thm-additivity-over-subintervals]], [[thm-algebra-of-derivatives]]).

[F2] Boundary values: an odd $2L$-periodic function $W$ satisfies $W(0)=0$ and $W(L)=W(-L)=-W(L)$, hence $W(L)=0$; its even-order derivatives are again odd $2L$-periodic, so $W''(0)=W''(L)=W''''(0)=W''''(L)=0$ whenever these derivatives exist. Also $\sin(n\pi\cdot0/L)=\sin0=0$ and $\sin(n\pi L/L)=\sin(n\pi)=0$, while $\cos(0)=1$ and $\cos(n\pi)=(-1)^n$ ([[def-sine-and-cosine-by-power-series]], [[thm-sine-and-cosine-derivatives]], [[thm-sine-cosine-zero-sets-and-fundamental-period]], [[def-cm-sine-coefficients-of-periodic-functions]]).

[F3] The bounds $M_5,M_4$ dominate the corresponding derivatives everywhere, so in particular on $[0,L]$; and $|b_n|=|\frac2L\int_0^LF\sin(n\pi x/L)dx|\le\frac2L\int_0^L|F|$ when used with the sup bound ([[def-abs-value]], [[thm-extreme-value-metric]], [[thm-heine-borel-rn]], [[def-metric-ball]], [[thm-linearity-of-the-integral]]).

## Proof

**Proof technique:** direct; integrate by parts five times (four times for $G$) and use the vanishing boundary values of the odd derivatives.

1.1 Put $I_0:=\int_0^LF(x)\sin(n\pi x/L)dx$ and $I_j:=\int_0^LF^{(j)}(x)\cdot\bigl(\sin\text{ if }j\text{ even},\ \cos\text{ if }j\text{ odd}\bigr)(n\pi x/L)dx$ for $j=1,\dots,5$. Applying [F1] successively, each integration by parts produces the boundary term $$\bigl[F^{(j)}(x)\cdot(\pm\tfrac{L}{n\pi})(\text{the other trigonometric factor})\bigr]_0^L ,$$ which vanishes by [F2]: at $j$ even the boundary factor is $\cos$, nonzero at the endpoints, but the multiplying derivative $F^{(j)}$ is odd, hence vanishes at $0$ and $L$; at $j$ odd the boundary factor is $\sin$, which vanishes at $0$ and $L$. Therefore $I_0=\frac{L}{n\pi}I_1$, $I_1=-\frac{L}{n\pi}I_2$, $I_2=\frac{L}{n\pi}I_3$, $I_3=-\frac{L}{n\pi}I_4$, $I_4=\frac{L}{n\pi}I_5$, and chaining, $$I_0=\Bigl(\frac{L}{n\pi}\Bigr)^5I_5 .$$ [given, F1, F2, algebra]

2.1 Since $|I_5|\le\int_0^L|F^{(5)}|dx\le LM_5$, step 1.1 gives $|b_n(F)|=\frac2L|I_0|\le\frac2L\bigl(\frac{L}{n\pi}\bigr)^5LM_5=\frac{2L^5M_5}{\pi^5n^5}$. The same computation with four integrations by parts and $G^{(4)}$ in place of $F^{(5)}$ gives $|b_n(G)|\le\frac{2L^4M_4}{\pi^4n^4}$. [step 1.1, F3, algebra] ∎

## Remarks

- The powers $n^{-5}$ and $n^{-4}$ are exactly the number of integrations by parts available; from $C^k$ odd periodic functions one obtains $O(n^{-k})$ (with the parity pattern of the boundary terms as used above). No sharpness is claimed.

- The estimates are uniform in $n$, and their summands are summable; this is what permits the termwise differentiation of the string series in the companion theorem. The constant depends on $L$, on the sup norms and on the fixed exponent, not on $n$.
