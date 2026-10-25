---
id: thm-hankel-representation-for-reciprocal-gamma
kind: theorem
title: "Hankel's representation for reciprocal Gamma"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-hankel-contour-and-power-branch,
       thm-euler-reflection-formula,
       thm-gamma-meromorphic-continuation]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-30
  precheck: pass
sources:
  scraped: []
  references:
    - title: "K. Chandrasekharan, Lectures on the Riemann Zeta-Function, Lecture 6 §2"
      url: "https://mathweb.tifr.res.in/Documents/Publications/Lectures/01.pdf"
pipeline_run: null
---

## Statement

For every $z\in\mathbb C$,

$$\frac{1}{\Gamma(z)}=\frac{1}{2\pi i}\int_H e^t t^{-z}\,dt,$$

where $H$ is the Hankel contour and $t^{-z}$ uses the principal branch on
$\mathbb C\setminus(-\infty,0]$. The integral converges absolutely for
$0<\operatorname{Re}z<1$ and then extends meromorphically to all $z$.

## Facts & Assumptions

**Given:** The Hankel contour and the principal branch.

[L1] The reflection formula gives $\Gamma(z)\Gamma(1-z)=\pi/\sin(\pi z)$ ([[thm-euler-reflection-formula]]).

[L2] Gamma already has a meromorphic continuation to all of $\mathbb C$ ([[thm-gamma-meromorphic-continuation]]).

[L3] The Hankel contour and the branch $t^{-z}$ are fixed as in [[def-hankel-contour-and-power-branch]].

## Proof

**Proof technique:** direct.

1.1 First assume $0<\operatorname{Re}z<1$. On the small circle about $0$, the integrand has size $O(r^{-\operatorname{Re}z})$, so the circular contribution tends to $0$ as $r\downarrow0$. On the two rays, $e^t$ decays exponentially as $t=-x$ with $x\to+\infty$, so the contour integral converges absolutely. [given, L3, algebra]

2.1 Along the upper and lower sides of the cut, one has $(-x\pm i0)^{-z}=e^{\mp\pi iz}x^{-z}$. With the orientation from [L3], the lower ray contributes $e^{\pi iz}\int_0^\infty e^{-x}x^{-z}\,dx$ and the upper ray contributes $-e^{-\pi iz}\int_0^\infty e^{-x}x^{-z}\,dx$. Therefore step 1.1 yields $$\int_H e^t t^{-z}\,dt =\left(e^{\pi iz}-e^{-\pi iz}\right)\int_0^\infty e^{-x}x^{-z}\,dx =2i\sin(\pi z)\Gamma(1-z).$$ [step 1.1, L3, algebra]

3.1 Using [L1], the right-hand side of step 2.1 equals $2\pi i/\Gamma(z)$ on $0<\operatorname{Re}z<1$. Hence the displayed integral formula holds on that strip. Both sides are meromorphic in $z$, and [L2] extends the identity to all of $\mathbb C$. [step 2.1, L1, L2, algebra] ∎


## Remarks

The schematic below separates the two sides of the negative real axis for visibility. The lower ray runs inward, the small circle runs counterclockwise, and the upper ray runs outward. Here $t=-x$ on the limiting rays, with $x>0$; their far ends correspond to $x\to+\infty$. The dashed line is the branch cut, not part of the contour.

```tikz
\begin{tikzpicture}[scale=1.05]
\draw[dashed,gray] (-5.3,0) -- (0,0);
\draw[->,gray] (0,0) -- (1.7,0) node[right] {$\mathrm{Re}\,t$};
\draw[->,gray] (0,-1.3) -- (0,1.5) node[above] {$\mathrm{Im}\,t$};
\draw[thick,->] (-5,-0.4) -- (-2.8,-0.4);
\draw[thick] (-2.8,-0.4) -- (-0.693,-0.4);
\draw[thick,->] (-0.693,-0.4) arc (-150:0:0.8);
\draw[thick,->] (0.8,0) arc (0:150:0.8);
\draw[thick] (-0.693,0.4) -- (-2.8,0.4);
\draw[thick,->] (-2.8,0.4) -- (-5,0.4);
\fill (0,0) circle (1.3pt);
\node[below right] at (0,0) {$0$};
\node[above] at (-3,0.6) {$\arg t\to\pi,\quad t^{-z}\to e^{-\pi iz}x^{-z}$};
\node[below] at (-3,-0.6) {$\arg t\to-\pi,\quad t^{-z}\to e^{\pi iz}x^{-z}$};
\node[below] at (0.8,-0.9) {$|t|=r$};
\node[above] at (-3,1.35) {$H:\quad\hbox{lower}\ \longrightarrow\ \hbox{circle}\ \longrightarrow\ \hbox{upper}$};
\end{tikzpicture}
```

The phase labels are the boundary values from step 2.1. The inward lower ray has $x$ decreasing and $dt=-dx$, producing the positive factor $e^{\pi iz}$; the outward upper ray has $x$ increasing and produces the negative factor $-e^{-\pi iz}$. The circular contribution vanishes as $r\downarrow0$ in the strip of step 1.1. These pictures and labels only illustrate the independent proof above.
