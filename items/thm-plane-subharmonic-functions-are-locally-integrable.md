---
id: thm-plane-subharmonic-functions-are-locally-integrable
kind: theorem
title: "Plane subharmonic functions are locally integrable"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-plane-subharmonic-function, lem-upper-semicontinuous-functions-are-borel-and-circle-integrals-are-defined, thm-harmonic-majorant-characterization-of-plane-subharmonicity, thm-open-connected-subsets-of-rn-are-polygonally-connected]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Boris Khoruzhenko, Potential Theory lecture notes"
      url: "https://www.yumpu.com/en/document/view/12029492/potential-theory"
---

## Statement

Every subharmonic function on a complex domain belongs to $L^1_{\mathrm{loc}}$.

## Facts & Assumptions

**Given:** A subharmonic function $u$ on a complex domain $\Omega$.

[L1] On every closed disc inside the domain, a harmonic function that dominates $u$ on the boundary dominates $u$ throughout the disc ([[thm-harmonic-majorant-characterization-of-plane-subharmonicity]]).

[L2] On a compact circle, the boundary values of an upper semicontinuous function are Borel measurable and bounded above, so the circle averages in the submean inequality are finite or $-\infty$ ([[lem-upper-semicontinuous-functions-are-borel-and-circle-integrals-are-defined]]).

[L3] Every open connected subset of $\mathbb R^2$ is polygonally connected ([[thm-open-connected-subsets-of-rn-are-polygonally-connected]]).

[L4] For a nonnegative Borel function $F$ on a disc, the polar-coordinate
identity
$$\int_{D(c,s)}F\,dA=\int_0^s\int_0^{2\pi}F(c+te^{i\theta})\,t\,d\theta\,dt$$
follows first for indicators of annular sectors and nonnegative simple
functions, and then for general $F$ by monotone convergence.

## Proof

**Proof technique:** direct.

1.1 Fix a compact disc $\overline{D(a,R)}\subseteq\Omega$ and a smaller concentric disc $\overline{D(a,\rho)}$ with $0<\rho<R$. The function $u$ is upper semicontinuous on the compact circle $\partial D(a,R)$, so [L2] gives a finite upper bound there. By the harmonic-comparison theorem [L1], $u$ is therefore bounded above on $\overline{D(a,\rho)}$ by the harmonic majorant obtained from any continuous boundary majorant on $\partial D(a,R)$. [L1, L2, given]

1.2 The set $A=\{z\in\Omega:u(z)=-\infty\}$ has empty interior. Suppose instead that $D(c_0,R)\subseteq A$ for some $R>0$, and fix any point $x$ in the connected component of $\Omega$ containing $c_0$. By [L3], choose a polygonal path $\gamma$ in that component from $c_0$ to $x$. Because $\gamma([0,1])$ is compact and lies in the open set $\Omega$, choose $r>0$ with $3r<R$ and $\overline{D(y,4r)}\subseteq\Omega$ for every $y\in\gamma([0,1])$. Subdivide the path by points $c_0,c_1,\dots,c_N=x$ on $\gamma$ with $|c_{j+1}-c_j|<r/2$ for every $j$. We claim inductively that $D(c_j,3r)\subseteq A$ for all $j$. The case $j=0$ holds because $3r<R$. If $D(c_j,3r)\subseteq A$ and $b\in D(c_j,7r/2)$, choose $\rho$ with $\max(0,|b-c_j|-3r)<\rho<r/2$. Then the circle $|z-b|=\rho$ lies in $D(c_j,4r)\subseteq\Omega$ and meets $D(c_j,3r)$ in an open arc, so $u=-\infty$ on a set of positive arc-length measure on that circle. By [L2], the circle values are Borel measurable and bounded above, hence the circle average is $-\infty$. The submean inequality therefore gives $u(b)=-\infty$, proving $D(c_j,7r/2)\subseteq A$. Since $|c_{j+1}-c_j|<r/2$, one has $D(c_{j+1},3r)\subseteq D(c_j,7r/2)\subseteq A$, completing the induction. In particular $x\in A$. Because $x$ was arbitrary in the component, this contradicts the subharmonic convention that $u$ is not identically $-\infty$ there. Thus $A$ has empty interior, so every open subdisc contains a point where $u$ is finite. [L2, L3, given, algebra]

2.1 Fix $a\in\Omega$ and choose $r>0$ with $\overline{D(a,3r)}\subseteq\Omega$. Step 1.1, applied with outer radius $3r$ and inner radius $2r$, gives a finite upper bound $M$ for $u$ on $D(a,2r)$. By step 1.2 choose $c\in D(a,r/2)$ with $u(c)>-\infty$, and then choose $$r+|c-a|<s<2r-|c-a|.$$ These inequalities give $D(a,r)\subseteq D(c,s)\subseteq D(a,2r)$. [step 1.1, step 1.2, choose, algebra]

3.1 For every $0<t<s$, the submean inequality at $c$ gives $$\int_0^{2\pi}\bigl(M-u(c+te^{i\theta})\bigr)\,d\theta\le2\pi\bigl(M-u(c)\bigr).$$ The integrand is nonnegative and Borel by [L2]. Multiply by $t$, integrate from $0$ to $s$, and apply [L4] to obtain $$\int_{D(c,s)}(M-u)\,dA\le\pi s^2\bigl(M-u(c)\bigr)<\infty.$$ Thus the negative part of $u$ is integrable on $D(c,s)$, while its positive part is bounded there by $M$. Hence $u\in L^1(D(c,s))$, and therefore $u\in L^1(D(a,r))$. [step 2.1, L2, L4, algebra]

4.1 Every point $a\in\Omega$ admits such a disc $D(a,r)$, so $u\in L^1_{\mathrm{loc}}(\Omega)$. [step 3.1] ∎
