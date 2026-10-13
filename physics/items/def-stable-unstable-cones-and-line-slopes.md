---
id: def-stable-unstable-cones-and-line-slopes
kind: definition
title: "Stable and unstable cones, invariant line slopes, stable and unstable sets, and transverse homoclinic points of the quadratic family"
status: published
origin: pipeline
domain: mathematics
dependency_level: 0
deps: [def-metric-space, def-metric-convergence, def-derivative, def-interval, def-abs-value, def-total-derivative-in-euclidean-space, def-jacobian-matrix-and-gradient, def-ck-euclidean-maps-and-diffeomorphisms, def-complex-numbers-and-arithmetic, thm-complex-numbers-form-a-field, thm-of-square-roots]
dependency_roles:
  def-metric-space: mathematical-premise
  def-metric-convergence: mathematical-premise
  def-derivative: mathematical-premise
  def-interval: mathematical-premise
  def-abs-value: mathematical-premise
  def-total-derivative-in-euclidean-space: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-complex-numbers-and-arithmetic: mathematical-premise
  thm-complex-numbers-form-a-field: mathematical-premise
  thm-of-square-roots: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "G. Teschl, Ordinary Differential Equations and Dynamical Systems, AMS Graduate Studies in Mathematics 140 (author's preliminary online edition, complete PDF), Section 13.2, stable and unstable manifolds and transverse homoclinic points of a hyperbolic fixed point"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-ode/ode.pdf"
    - title: "R. Devaney and Z. Nitecki, Shift automorphisms in the Hénon mapping, Communications in Mathematical Physics 67 (1979) 137-146, Lemma 4 and Proposition 3, invariant sectors with a uniform expansion factor"
      url: "https://projecteuclid.org/journals/communications-in-mathematical-physics/volume-67/issue-2/Shift-automorphisms-in-the-H%C3%A9non-mapping/cmp/1103905161.pdf"
    - title: "P. Cvitanović, R. Artuso, R. Mainieri, G. Tanner, G. Vattay, Chaos: Classical and Quantum (ChaosBook.org, edition 17.6.8, complete PDF), Chapter 15 Section 15.1, stable and unstable manifolds of a fixed point"
      url: "https://chaosbook.org/chapters/ChaosBook.pdf"
verification:
  precheck: pass
---

## Definition

**The quadratic family.** For $a\in\mathbb R$ let

$$F_a:\mathbb R^2\longrightarrow\mathbb R^2,\qquad F_a(x,y):=(y,\,y^2-a-x),$$

with differential at $(x,y)\in\mathbb R^2$

$$DF_a(x,y)=\begin{pmatrix}0&1\\-1&2y\end{pmatrix}.$$

The inverse map is

$$F_a^{-1}(x,y)=(x^2-a-y,x),$$

and its differential at $(x,y)$ is

$$D(F_a^{-1})(x,y)=\begin{pmatrix}2x&-1\\1&0\end{pmatrix}.$$

Here $DF_a(x,y)^{-1}$ denotes the inverse matrix of $DF_a(x,y)$, namely
$\begin{pmatrix}2y&-1\\1&0\end{pmatrix}$; it is not the same notation as
$D(F_a^{-1})(x,y)$, which evaluates the derivative of the inverse map at the
point $(x,y)$. All matrices act on column vectors of $\mathbb R^2$
([[def-total-derivative-in-euclidean-space]], [[def-jacobian-matrix-and-gradient]]).

**Complex coordinates and modulus.** Use $\mathbb C:=\mathbb R[x]/(x^2+1)$,
with real numbers embedded as constant classes and $i:=x+(x^2+1)$, so $i^2=-1$
([[def-complex-numbers-and-arithmetic]]). This is a field and each element has
a unique form $\alpha+i\beta$ with $\alpha,\beta\in\mathbb R$
([[thm-complex-numbers-form-a-field]]). Define its modulus by

$$|\alpha+i\beta|:=\sqrt{\alpha^2+\beta^2},$$

where the square root is the unique nonnegative real square root
([[thm-of-square-roots]]). Identify $\mathbb C^2$ with pairs of complex
coordinates; a real matrix acts on it by the same matrix entries, extended
$\mathbb C$-linearly.

**Hyperbolic fixed points.** Let $U,V\subseteq\mathbb R^2$ be open, let
$G:U\to V$ be a $C^1$ diffeomorphism, and let $\bar z\in U\cap V$ satisfy
$G(\bar z)=\bar z$. Its eigenvalues are the numbers $\lambda\in\mathbb C$
for which $DG(\bar z)v=\lambda v$ for some $v\in\mathbb C^2\setminus\{0\}$.
The fixed point $\bar z$ is **hyperbolic** when every such eigenvalue satisfies
$|\lambda|\ne1$. A global $C^1$ diffeomorphism of $\mathbb R^2$ is the special
case $U=V=\mathbb R^2$.

**Cones.** Fix $k\in(0,1)$. The **unstable cone** and **stable cone** of aperture $k$ are

$$C^u_k:=\{\,(u,v)\in\mathbb R^2\ :\ |u|\le k|v|\,\},\qquad C^s_k:=\{\,(u,v)\in\mathbb R^2\ :\ |v|\le k|u|\,\}$$

([[def-abs-value]]); both are closed subsets of $\mathbb R^2$, they are closed under multiplication by real scalars, and $C^u_k\cap C^s_k=\{0\}$, because a nonzero vector in the intersection would satisfy $|u|\le k|v|$ and $|v|\le k|u|$, hence $|u|\le k^2|u|<|u|$.

**Slopes.** A line through the origin not contained in the horizontal axis is written uniquely as $\{(hv,v):v\in\mathbb R\}$ with the **slope parameter** $h=u/v$; here $|h|\le k$ characterises the lines contained in $C^u_k$. Similarly a line not contained in the vertical axis is written uniquely as $\{(u,ru):u\in\mathbb R\}$ with the **slope parameter** $r=v/u$, and $|r|\le k$ characterises the lines contained in $C^s_k$.

For real numbers $x,y$ two maps on slope parameters are defined:

$$\Phi_y(h):=\frac{1}{2y-h}\quad(h\ne2y)\quad\text{(forward slope map)},\qquad \Psi_x(r):=\frac{1}{2x-r}\quad(r\ne2x)\quad\text{(backward slope map)}.$$

The intended reading is the graph-transform reading: $DF_a(x,y)$ carries the line
$\{(hv,v):v\in\mathbb R\}$ at $(x,y)$ to the line
$\{(h'v,v):v\in\mathbb R\}$ at $F_a(x,y)$ with $h'=\Phi_y(h)$, and
$D(F_a^{-1})(x,y)$ carries the line $\{(u,ru):u\in\mathbb R\}$ at $(x,y)$
to the line $\{(u,r'u):u\in\mathbb R\}$ at $F_a^{-1}(x,y)$ with
$r'=\Psi_x(r)$. These two statements follow from the displayed matrices and
are proved in the companion lemma on this page, not asserted as part of this
definition.

**Invariant line fields on a sequence.** A **real bilateral sequence** is a function $s:\mathbb Z\to\mathbb R$; write $s_n:=s(n)$. Put $z_n:=(s_{n-1},s_n)$. An **unstable line field along $s$** is a family $(L^u_n)_{n\in\mathbb Z}$ of lines through the origin of $\mathbb R^2$ such that $DF_a(z_n)$ maps $L^u_n$ onto $L^u_{n+1}$ for every $n$. A **stable line field along $s$** is a family $(L^s_n)_{n\in\mathbb Z}$ such that $D(F_a^{-1})(z_{n+1})$ maps $L^s_{n+1}$ onto $L^s_n$ for every $n$. The latter evaluates the derivative of the inverse map at $z_{n+1}$. When $s$ satisfies $s_{n+1}=s_n^2-a-s_{n-1}$, one has $z_{n+1}=F_a(z_n)$, so these are the source and target orbit points. The displayed matrix conditions also define line families for arbitrary sequences, without asserting that such a sequence is an orbit. For a real bound $L\ge2$, sequences with $|s_n|\ge L$, and apertures satisfying $k(2L-k)\ge1$, existence and uniqueness of line fields with slopes in $[-k,k]$ are proved in the companion lemma on this page.

**Stable and unstable sets.** Let $G:Z\to Z$ be a bijection of a metric
space $(Z,d)$ ([[def-metric-space]]) with fixed point $\bar z$ (so
$G(\bar z)=\bar z$). Put

$$W^s(\bar z):=\{\,z\in Z\ :\ G^n(z)\ \text{is defined for every }n\ge0\text{ and }G^n(z)\to\bar z\ \text{as }n\to\infty\,\},$$

$$W^u(\bar z):=\{\,z\in Z\ :\ G^{-n}(z)\ \text{is defined for every }n\ge0\text{ and }G^{-n}(z)\to\bar z\ \text{as }n\to\infty\,\},$$

where convergence is that of the metric $d$ ([[def-metric-convergence]]). The
sets $W^s(\bar z)$ and $W^u(\bar z)$ are the **stable set** and the
**unstable set** of $\bar z$.

These orbit-based definitions also apply to a local map. Let $U,V\subseteq
\mathbb R^2$ be open, let $G:U\to V$ be a $C^1$ diffeomorphism, and let
$\bar z\in U\cap V$ satisfy $G(\bar z)=\bar z$. Define $G^0(z):=z$ and
recursively $G^{n+1}(z):=G(G^n(z))$ whenever $G^n(z)\in U$; define
$G^{-n-1}(z):=G^{-1}(G^{-n}(z))$ whenever $G^{-n}(z)\in V$. Then

$$W^s_G(\bar z):=\{z\in U:G^n(z)\text{ is defined for every }n\ge0\text{ and }G^n(z)\to\bar z\},$$

$$W^u_G(\bar z):=\{z\in V:G^{-n}(z)\text{ is defined for every }n\ge0\text{ and }G^{-n}(z)\to\bar z\},$$

where convergence is Euclidean metric convergence. The explicit domain clauses
require every forward iterate to lie in $U$ before applying $G$, and every
backward iterate to lie in $V$ before applying $G^{-1}$. In the global case
above every iterate is defined automatically.

A **homoclinic point** is a point in both the stable and unstable sets,
different from the fixed point $\bar z$. For a global bijection on
$\mathbb R^2$ or a local planar diffeomorphism as above, it is
**transverse** when there are $\varepsilon>0$ and $C^1$ maps
([[def-ck-euclidean-maps-and-diffeomorphisms]], [[def-derivative]])

$$\gamma_s,\gamma_u:(-\varepsilon,\varepsilon)\longrightarrow\mathbb R^2$$

such that $\gamma_s(0)=\gamma_u(0)=z$, the stable curve takes values in the
stable set and the unstable curve takes values in the unstable set, both are
injective on $(-\varepsilon,\varepsilon)$ with
$\gamma_s'(0)\ne0\ne\gamma_u'(0)$, and the derivative vectors
$\gamma_s'(0),\gamma_u'(0)\in\mathbb R^2$ are linearly independent. Thus
derivatives and tangent vectors in this definition are taken in the
two-dimensional differentiable setting used by the results on this page; no
derivative is assigned to a curve in an arbitrary metric space. The interval
$(-\varepsilon,\varepsilon)$ is
that of [[def-interval]].

## Remarks

- The definition records the two vocabularies used by the coding theorem and the transversality theorem: the linear cone and slope objects of the quadratic family, and the invariant-set objects of global bijections and local planar diffeomorphisms. It asserts no invariance of the cones, no convergence of the slope maps and no transversality; those are the contents of [[lem-slope-graph-transforms-converge]] and [[lem-tail-curve-tangents-and-homoclinic-transversality]].

- The transversality condition above is stated with two $C^1$ curves through the point, one lying in each invariant set, whose tangents span $\mathbb R^2$. When the local stable and unstable sets are themselves $C^1$ curves near $z$ (which holds at the fixed points and their finite images in the situation of [[lem-tail-curve-tangents-and-homoclinic-transversality]]), this agrees with the usual formulation "$W^s$ and $W^u$ meet transversely at $z$".

- The forward slope map is defined on $[-k,k]$ when $|y|>k$, since $|2y-h|\ge2|y|-k>0$; this condition alone does not ensure contraction. In [[lem-slope-graph-transforms-converge]], the stronger bound $|y|\ge L\ge2$ gives $|\Phi_y(h)-\Phi_y(h')|\le(2L-k)^{-2}|h-h'|$ for $h,h'\in[-k,k]$, with $(2L-k)^{-2}<1$. The additional aperture condition $k(2L-k)\ge1$ ensures that the image lies in $[-k,k]$. The same conclusions hold for the backward slope map with $|x|\ge L$.
