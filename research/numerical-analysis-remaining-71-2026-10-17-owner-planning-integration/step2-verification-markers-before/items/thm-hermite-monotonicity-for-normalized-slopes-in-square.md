---
id: thm-hermite-monotonicity-for-normalized-slopes-in-square
kind: theorem
title: A sufficient monotonicity square for cubic Hermite interpolation
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps: [def-piecewise-cubic-hermite-interpolant, cor-mean-value-theorem, lem-derivative-algebra-and-chain-rules]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "F. N. Fritsch and J. Butland, A Method for Constructing Local Monotone Piecewise Cubic Interpolants, SIAM Journal on Scientific and Statistical Computing 5 (1984), pp. 300–304"
      url: https://anthonylloyd.github.io/public/interp/pchip/A_method_for_constructing_local_monotone_picewise_cubic_interpolants_fritsch1984.pdf
---

## Statement

Let $p$ be the single Hermite piece from [[def-piecewise-cubic-hermite-interpolant]] on $[x_0,x_1]$, with $h=x_1-x_0>0$, endpoint values $y_0,y_1$, slopes $m_0,m_1$, and secant $d=(y_1-y_0)/h$. If $d\ne0$ and $\alpha=m_0/d$, $\beta=m_1/d$ both lie in $[0,3]$, then $p$ is monotone from $y_0$ to $y_1$ and stays between those values. If $d=0$ and $m_0=m_1=0$, then $p$ is constant.

## Facts & Assumptions

**Given:** One Hermite cell with $h>0$, endpoint values and slopes as in the statement.

[F1] [[def-piecewise-cubic-hermite-interpolant]]: the cell is $P=y_0H_{00}(t)+y_1H_{01}(t)+hm_0H_{10}(t)+hm_1H_{11}(t)$ for $t=(x-x_0)/h$.

[F2] [[cor-mean-value-theorem]]: continuity on a closed interval and differentiability in its interior give $p(v)-p(u)=p'(c)(v-u)$ for some interior $c$ whenever $u<v$.

[F3] [[lem-derivative-algebra-and-chain-rules]]: the integer power rule $(x^m)'=mx^{m-1}$ holds for $m\ge1$.

## Proof
1.1 For $d\ne0$, differentiating [F1] by [F3], using $y_1-y_0=hd$ and $dt/dx=1/h$, gives $p'(x)/d=\alpha +(6-4\alpha-2\beta)t+(3\alpha+3\beta-6)t^2$. Indeed, $H'_{01}=6t-6t^2$, $H'_{10}=1-4t+3t^2$, and $H'_{11}=-2t+3t^2$; substitution produces those coefficients. Direct substitution in [F1] also gives $p(x_0)=y_0$ and $p(x_1)=y_1$. [F1, F3, given, algebra]

2.1 For $0\le t\le1$ put $\lambda_{00}=(1-\alpha/3)(1-\beta/3)$, $\lambda_{30}=(\alpha/3)(1-\beta/3)$, $\lambda_{03}=(1-\alpha/3)(\beta/3)$, and $\lambda_{33}=(\alpha/3)(\beta/3)$. These are nonnegative and sum to one. The polynomial in step 1.1 is affine in $(\alpha,\beta)$, so it equals the convex combination with these weights of its values at $(0,0),(3,0),(0,3),(3,3)$, namely $6t(1-t)$, $3(1-t)^2$, $3t^2$, and $3(1-2t)^2$. Each of these four polynomials is nonnegative on $[0,1]$. [step 1.1, given, algebra]

3.1 step 2.1 gives $p'(x)/d\ge0$ throughout the cell. If $d>0$, $p'\ge0$; if $d<0$, $p'\le0$. For any two points $u<v$ in the cell, [F2] transfers that derivative sign to $p(v)-p(u)$, so $p$ is monotone; step 1.1 gives its endpoint values $y_0,y_1$, so every value lies between them. If $d=0$, then $y_1=y_0$ and [F1] reduces to $p=y_0(H_{00}+H_{01})=y_0$, since $m_0=m_1=0$ and $H_{00}+H_{01}=1$. [step 1.1, step 2.1, F1, F2, given, algebra] ∎
## Remarks

The diagram uses horizontal coordinate $\alpha=m_0/d$ and vertical coordinate $\beta=m_1/d$; the shaded square is the sufficient region $[0,3]^2$. Its four vertices are the four derivative polynomials listed in proof step 2.1. The argument above proves the claim independently of the picture.

```tikz
\begin{tikzpicture}[scale=0.9]
  \draw[->] (-0.25,0) -- (3.65,0) node[right] {$\alpha$};
  \draw[->] (0,-0.25) -- (0,3.65) node[above] {$\beta$};
  \fill[blue!12] (0,0) rectangle (3,3);
  \draw[thick] (0,0) rectangle (3,3);
  \draw (0,0.05)--(0,-0.05) node[below] {\small $0$};
  \draw (1,0.05)--(1,-0.05) node[below] {\small $1$};
  \draw (2,0.05)--(2,-0.05) node[below] {\small $2$};
  \draw (3,0.05)--(3,-0.05) node[below] {\small $3$};
  \draw (0.05,0)--(-0.05,0) node[left] {\small $0$};
  \draw (0.05,1)--(-0.05,1) node[left] {\small $1$};
  \draw (0.05,2)--(-0.05,2) node[left] {\small $2$};
  \draw (0.05,3)--(-0.05,3) node[left] {\small $3$};
  \fill (0,0) circle (1.5pt);
  \fill (3,0) circle (1.5pt);
  \fill (0,3) circle (1.5pt);
  \fill (3,3) circle (1.5pt);
\end{tikzpicture}
```
