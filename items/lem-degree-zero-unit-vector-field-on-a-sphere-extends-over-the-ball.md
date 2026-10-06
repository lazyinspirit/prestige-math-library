---
id: lem-degree-zero-unit-vector-field-on-a-sphere-extends-over-the-ball
kind: lemma
title: "A degree-zero sphere map extends over the ball without zeros"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-degree-of-a-map-between-oriented-closed-manifolds, def-degree-of-a-self-map-of-an-oriented-sphere, cor-homology-of-spheres, prop-degree-is-homotopy-invariant-and-multiplicative-under-composition, prop-degree-of-identity-constant-reflection-and-antipodal-sphere-maps, cor-homotopic-maps-induce-the-same-map-on-singular-homology, thm-based-sphere-maps-are-classified-by-geometric-degree, def-euclidean-spheres-and-closed-balls, def-the-standard-smooth-step-function, thm-continuously-homotopic-smooth-maps-are-smoothly-homotopic, def-countable-choice]
justified_by: []
aliases: []
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  scraped: []
  references:
    - title: "Victor Guillemin and Alan Pollack, Differential Topology (Prentice-Hall 1974; complete PDF)"
      url: "https://www.math.auckland.ac.nz/~hekmati/Books/GP.pdf"
      locator: "Ch. 3 §6, Exercises 3 and 5 with their hints, printed pp. 145-147 (a degree-zero map of a sphere is homotopic to a constant, and the homotopy fills the ball)"
    - title: "Joel W. Robbin and Dietmar A. Salamon, Introduction to Differential Topology (web draft 2018, complete PDF)"
      url: "https://umutvg.github.io/difftop.pdf"
      locator: "Ch. 3 §3.3 (Hopf degree theorem) and Ch. 2 (extension of boundary data), printed pp. 34-35"
dependency_level: 0
---

## Statement

Assume countable choice $\mathrm{AC}_\omega$
([[def-countable-choice]]). Let $m\ge1$ and let $u:S^m\to S^m$ be a continuous
map of degree $0$
([[def-degree-of-a-map-between-oriented-closed-manifolds]]). Then $u$ is
homotopic to a constant map, and there is a continuous nowhere-zero map
$$F:D^{m+1}\to\mathbb R^{m+1}\setminus\{0\}$$
with $D^{m+1}=\overline B_2(0,1)$ and $F|_{S^m}=u$
([[def-euclidean-spheres-and-closed-balls]]). If $u$ is smooth, $F$ can be
chosen smooth with $F(x)=u(x/|x|)$ for every $x$ with $|x|\ge\frac23$; in
particular $F$ restricts to $u$ on $S^m$.

## Facts & Assumptions

**Given:** $m\ge1$, a continuous map $u:S^m\to S^m$ of degree $0$, and $\mathrm{AC}_\omega$ for the smooth clause.

[A1] Countable choice is [[def-countable-choice]]; it is used only in [F3].

[F1] For $m\ge1$ and a continuous self-map $f$ of $S^m$, the sphere degree of [[def-degree-of-a-self-map-of-an-oriented-sphere]] reads the multiplier $f_*[S^m]=\deg(f)[S^m]$ on the integral top generator of $H_m(S^m;\mathbb Z)\cong\mathbb Z$ given by [[cor-homology-of-spheres]], while the degree of [[def-degree-of-a-map-between-oriented-closed-manifolds]] reads the multiplier of the fundamental classes of the two standard orientations; for $S^m$ these are the same integer. Homotopic maps have equal degree and $\deg(g\circ f)=\deg(g)\deg(f)$; every homotopy equivalence $S^m\to S^m$ has degree $1$ or $-1$; the identity has degree $1$ and constant maps have degree $0$ ([[prop-degree-is-homotopy-invariant-and-multiplicative-under-composition]], [[prop-degree-of-identity-constant-reflection-and-antipodal-sphere-maps]], [[cor-homotopic-maps-induce-the-same-map-on-singular-homology]]).

[F2] For every $r\ge1$ the degree is an isomorphism $\pi_r(S^r,b)\to\mathbb Z$; hence two based self-maps of $S^r$ are homotopic through based maps if and only if their degrees agree, and the constant map represents the zero element ([[thm-based-sphere-maps-are-classified-by-geometric-degree]]).

[F3] If two smooth maps between smooth manifolds are continuously homotopic, then they are smoothly homotopic ([[thm-continuously-homotopic-smooth-maps-are-smoothly-homotopic]]).

[F4] The standard smooth step function $\sigma:\mathbb R\to[0,1]$ is smooth with $\sigma(t)=0$ for $t\le0$ and $\sigma(t)=1$ for $t\ge1$ ([[def-the-standard-smooth-step-function]]).

[F5] $S^m=\overline B_2(0,1)\setminus B_2(0,1)=\partial D^{m+1}$ is the unit sphere in $\mathbb R^{m+1}$ and is contained in $\mathbb R^{m+1}\setminus\{0\}$ ([[def-euclidean-spheres-and-closed-balls]]).

## Proof

1.1 Fix $b\in S^m$. If $u(b)=b$ put $R:=\operatorname{id}$; otherwise put $R(x):=x-2\langle x,w\rangle w/|w|^2$ with $w:=u(b)-b\ne0$. A direct computation gives $|R(x)|=|x|$, $R^2=\operatorname{id}$ and $R(w)=-w$, hence $R(u(b))=R(b)+R(w)=u(b)-(u(b)-b)=b$; thus $R$ restricts to a self-map of $S^m$ and is its own continuous inverse, so $g:=R\circ u$ is a based self-map of $S^m$ at $b$ with $\deg g=\deg R\cdot\deg u=0$. [F1, F5, algebra]

2.1 By [F2] the degree is an isomorphism $\pi_m(S^m,b)\to\mathbb Z$, so $g$, having degree $0$, is based-homotopic to the constant map at $b$; applying the continuous map $R$ to that based homotopy exhibits a homotopy from $u=R^{-1}\circ g$ to the constant map at $R(b)$, proving that $u$ is homotopic to a constant. [F1, F2, step 1.1]

3.1 Let $H:S^m\times[0,1]\to S^m$ be a homotopy with $H_0=u$ and $H_1\equiv c$, and define $F(0):=c$ and $F(x):=H(x/|x|,\,1-|x|)$ for $x\in D^{m+1}\setminus\{0\}$. Then $F$ is continuous away from $0$ as a composite of continuous maps, and for $x\to0$ continuity at every point of $S^m\times\{1\}$ and a finite subcover of the compact sphere give $H(v,t)\to c$ uniformly in $v$ as $t\to1$, so $F(x)\to c$; on $S^m$ we have $1-|x|=0$ and $F(x)=H(x,0)=u(x)$; and $F$ takes values in $S^m\subseteq\mathbb R^{m+1}\setminus\{0\}$, so $F$ is nowhere zero. [F2, F5, step 2.1, algebra]

4.1 Suppose now that $u$ is smooth. By [F3] the continuously homotopic smooth maps $u$ and the constant $c$ are smoothly homotopic; let $H'$ be a smooth homotopy from $u$ to $c$ and put $\varphi(t):=\sigma(3t-1)$, so that $\varphi$ is smooth with $\varphi(t)=0$ for $t\le1/3$ and $\varphi(t)=1$ for $t\ge2/3$ by [F4]. Then $H''(x,t):=H'(x,\varphi(t))$ is a smooth homotopy from $u$ to $c$ with $H''(x,t)=u(x)$ for $t\le1/3$, and we redefine $F(0):=c$, $F(x):=H''(x/|x|,1-|x|)$ for $x\ne0$. This $F$ is smooth on $\{0<|x|<1\}$ and equals $c$ for $0<|x|\le1/3$ (where $1-|x|\ge2/3$), so it is smooth at $0$ as well; on the collar $\{|x|\ge2/3\}$ it equals $H''(x/|x|,1-|x|)=u(x/|x|)$, a smooth function of $x$ on that collar because $|x|\ge2/3>0$, and at the boundary points $|x|=1$ it equals $u(x)$, where $x/|x|=x$; so $F$ is smooth on $D^{m+1}$ with $F(x)=u(x/|x|)$ for $|x|\ge2/3$, and it takes values in $S^m$, hence is nowhere zero. [A1, F3, F4, F5, step 3.1, construct, algebra] ∎
