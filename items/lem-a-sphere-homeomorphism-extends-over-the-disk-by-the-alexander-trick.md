---
id: lem-a-sphere-homeomorphism-extends-over-the-disk-by-the-alexander-trick
kind: lemma
title: "Alexander trick: a sphere homeomorphism extends radially over the disk"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-euclidean-spheres-and-closed-balls, lem-radial-normalisation-is-continuous, lem-inner-product-pairing-is-nondegenerate-and-norm-is-homogeneous, lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]
justified_by: []
aliases: []
landmark: false
dependency_level: 0
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  scraped: []
  references:
    - title: "John Milnor, Lectures on the h-Cobordism Theorem, section 9, printed pp. 109-110"
      url: "https://www.maths.ed.ac.uk/~v1ranick/surgery/hcobord.pdf"
      locator: "the radial extension r x -> r f(x) used in the two-disk and twisted-sphere argument"
---

## Statement

Let $d\ge1$ and let $f:S^{d-1}\to S^{d-1}$ be a homeomorphism of the unit
sphere $S^{d-1}\subseteq\mathbb R^d$. Then $f$ extends to a homeomorphism
$F:D^d\to D^d$ of the closed unit disk, given by
$$F(0)=0,\qquad F(rx)=r\,f(x)\quad\text{for }0<r\le1,\ x\in S^{d-1}.$$
The extension need not be smooth at the origin.

## Facts & Assumptions

**Given:** An integer $d\ge1$, a homeomorphism $f:S^{d-1}\to S^{d-1}$, and the closed unit disk $D^d:=\overline B_2(0,1)\subseteq\mathbb R^d$ with its Euclidean norm $\lVert\cdot\rVert=\lVert\cdot\rVert_2$ ([[def-euclidean-spheres-and-closed-balls]]).

[F1] The boundary map $f$ is a homeomorphism of $S^{d-1}$; hence it maps $S^{d-1}$ into itself, so $\lVert f(x)\rVert=1$ for every $x\in S^{d-1}$, and both $f$ and its inverse $f^{-1}$ are continuous ([[def-euclidean-spheres-and-closed-balls]]).

[L1] For every scalar $\lambda$ and every $v\in\mathbb R^d$ one has $\lVert\lambda v\rVert=|\lambda|\,\lVert v\rVert$, and $\lVert x\rVert=1$ exactly when $x\in S^{d-1}$ ([[lem-inner-product-pairing-is-nondegenerate-and-norm-is-homogeneous]]).

[L2] For all $u,w\in\mathbb R^d$ one has $\bigl|\lVert u\rVert-\lVert w\rVert\bigr|\le\lVert u-w\rVert$ ([[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]]).

[L3] The radial normalisation $\rho:\mathbb R^d\setminus\{0\}\to S^{d-1}$, $\rho(y)=y/\lVert y\rVert$, is continuous, and $D^d=\{y\in\mathbb R^d:\lVert y\rVert\le1\}$ ([[lem-radial-normalisation-is-continuous]], [[def-euclidean-spheres-and-closed-balls]]).

## Proof

**Proof technique:** direct.

1.1 Every $y\in D^d\setminus\{0\}$ has a unique representation $y=rx$ with $0<r\le1$ and $x\in S^{d-1}$, namely $r=\lVert y\rVert$ and $x=\rho(y)$: taking norms in $y=rx$ gives $r=\lVert y\rVert$ by [L1], and dividing by that positive number gives $x=\rho(y)$; conversely $\lVert y\rVert\le1$ and $\rho(y)\in S^{d-1}$ by [L3], so this pair is admissible, and in particular the prescription of the statement defines a function $F$ on $D^d$. [F1, L1, L3, given]

2.1 For $r\in(0,1]$ and $x\in S^{d-1}$ one has $\lVert F(rx)\rVert=\lVert rf(x)\rVert=r\lVert f(x)\rVert=r\le1$ by [F1] and [L1], so $F$ maps $D^d$ into $D^d$, and $F(0)=0$ lies in $D^d$. [step 1.1, F1, L1]

3.1 Define $G:D^d\to D^d$ by $G(0)=0$ and $G(ry)=r\,f^{-1}(y)$ for $0<r\le1$, $y\in S^{d-1}$, which is a function by the same argument as step 1.1 with $f$ replaced by $f^{-1}$; then $G(F(rx))=G(rf(x))=r\,f^{-1}(f(x))=rx$ and $F(G(ry))=F(rf^{-1}(y))=r\,f(f^{-1}(y))=ry$ for all $r\in(0,1]$ and $x,y\in S^{d-1}$, while both composites fix $0$, so $G\circ F=\mathrm{id}_{D^d}$ and $F\circ G=\mathrm{id}_{D^d}$ and $F$ is a bijection with inverse $G$. [step 1.1, step 2.1, F1, given]

3.2 Continuity of $F$ at $0$: every $\varepsilon>0$ satisfies $\lVert F(y)-F(0)\rVert=\lVert F(y)\rVert=\lVert y\rVert<\varepsilon$ whenever $\lVert y-0\rVert<\varepsilon$ by [L1] and step 2.1, so $F$ is continuous at $0$. [step 2.1, L1]

3.3 Continuity of $F$ at a point $y_0\neq0$: writing $r=\lVert y\rVert$, $r_0=\lVert y_0\rVert$, $x=\rho(y)$, $x_0=\rho(y_0)$ for $y\ne0$ gives $F(y)-F(y_0)=r(f(x)-f(x_0))+(r-r_0)f(x_0)$ by [L1] and bilinearity, hence $\lVert F(y)-F(y_0)\rVert\le\lVert f(x)-f(x_0)\rVert+\lVert y-y_0\rVert$ because $r\le1$, because $\lVert f(x_0)\rVert=1$ by [F1], and because $|r-r_0|\le\lVert y-y_0\rVert$ by [L2]; given $\varepsilon>0$, continuity of $f$ at $x_0$ gives $\eta>0$ with $\lVert f(x)-f(x_0)\rVert<\varepsilon/2$ whenever $\lVert x-x_0\rVert<\eta$, and continuity of $\rho$ at $y_0$ ([L3]) gives $\delta>0$ with $\lVert\rho(y)-\rho(y_0)\rVert<\eta$ and $\lVert y-y_0\rVert<\varepsilon/2$ whenever $0<\lVert y-y_0\rVert<\delta$, so $\lVert F(y)-F(y_0)\rVert<\varepsilon$ for all such $y$ and $F$ is continuous at $y_0$. [step 1.1, step 2.1, F1, L1, L2, L3]

4.1 The arguments of steps 3.2 and 3.3 used only that the boundary map is a continuous map $S^{d-1}\to S^{d-1}$ and that its values lie in $S^{d-1}$; applying them with $f$ replaced by the continuous map $f^{-1}$ of [F1] shows that the inverse $G$ of step 3.1 is continuous on $D^d$. [step 3.1, step 3.2, step 3.3, F1, given]

5.1 Therefore $F:D^d\to D^d$ is a continuous bijection with continuous inverse $G$, that is a homeomorphism, and it restricts to $f$ on $S^{d-1}$ because $F(1\cdot x)=f(x)$ for $x\in S^{d-1}$, which proves the extension claim. [step 3.1, step 3.2, step 3.3, step 4.1] ∎

## Remarks

**Why smoothness can fail.** Suppose $F$ is differentiable at $0$ with
derivative $A$ (in the sense of the derivative as a linear map). For every
$x\in S^{d-1}$ and every $t\in(0,1]$ one has $F(tx)=tf(x)$, so
$$\frac{\lVert F(tx)-A(tx)\rVert}{t}=\lVert f(x)-Ax\rVert\xrightarrow[t\to0^+]{}\,0,$$ and therefore $f(x)=Ax$: the boundary map is
itself the restriction of the linear map $A$. Consequently, for a
homeomorphism $f$ of $S^{d-1}$ that is not the restriction of a linear map,
the radial extension $F$ is not differentiable at the origin and in particular
is not smooth there. Such homeomorphisms exist for every $d\ge2$: for
$0<\varepsilon<1$ the map $\theta\mapsto\theta+\varepsilon\sin\theta$ is
strictly increasing (its derivative $1+\varepsilon\cos\theta$ is positive) and
commutes with translation by $2\pi$, so it descends to a homeomorphism
$f_\varepsilon$ of the circle $S^1$, and $f_\varepsilon$ is a rotation or a
reflection only for $\varepsilon=0$. For $d>2$, write a sphere point as $(r\cos\theta,r\sin\theta,z)$
with $z\in\mathbb R^{d-2}$ and apply this angular map to $\theta$,
leaving $r,z$ fixed. At $r=0$ the map and its inverse extend continuously
because the first two coordinates have norm $r$; on $z=0$ it is the same
nonlinear circle map, so it cannot be the restriction of a linear map. Thus
the extension is not automatically smooth at the origin, which is why it is used only as a topological gluing map
in the applications below. Milnor's treatment of the two-disk argument
likewise uses the radial extension as a homeomorphism only (Milnor, *Lectures
on the h-Cobordism Theorem*, section 9, printed pp. 109-110).
