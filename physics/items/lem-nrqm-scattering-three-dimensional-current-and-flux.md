---
id: lem-nrqm-scattering-three-dimensional-current-and-flux
aliases: [nrqm-scattering-three-dimensional-current-and-flux]
kind: lemma
domain: mathematics
title: "The three-dimensional continuity identity, the vanishing stationary divergence and the incident and outgoing current readings"
status: published
origin: session
dependency_level: 0
deps: [def-directional-and-partial-derivatives, def-jacobian-matrix-and-gradient, def-divergence-and-curl-of-a-c1-vector-field, def-ck-euclidean-maps-and-diffeomorphisms, thm-algebra-of-total-derivatives, thm-chain-rule-for-total-derivatives, thm-total-derivative-computes-directional-and-partial-derivatives, thm-algebra-of-derivatives, thm-sine-and-cosine-derivatives, cor-trigonometric-parity-and-pythagorean-identity, lem-divergence-and-curl-are-linear-and-obey-the-scalar-product-rules, thm-divergence-theorem-for-bounded-c-one-euclidean-domains, def-interval, def-countable-choice]
dependency_roles:
  def-directional-and-partial-derivatives: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  def-divergence-and-curl-of-a-c1-vector-field: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  thm-algebra-of-total-derivatives: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-total-derivative-computes-directional-and-partial-derivatives: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  cor-trigonometric-parity-and-pythagorean-identity: mathematical-premise
  lem-divergence-and-curl-are-linear-and-obey-the-scalar-product-rules: mathematical-premise
  thm-divergence-theorem-for-bounded-c-one-euclidean-domains: mathematical-premise
  def-interval: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "D. Tong, Quantum Mechanics (author-hosted lecture set), Section 1.2.2, printed pages 11-13 (PDF pages 14-16): conservation of probability and the probability current"
      url: "https://davidtong.org/pdfs/teaching/quantum-mechanics/qm.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 12.3, printed pages 267-270 (PDF pages 275-278)"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let
$m,\hbar>0$, let $\Omega\subseteq\mathbb R^{3}$ and $I\subseteq\mathbb R$ be
nonempty open sets, and let
$u,v:\Omega\times I\to\mathbb R$ be functions of class $C^{2}$
([[def-ck-euclidean-maps-and-diffeomorphisms]]) that satisfy the two real
equations
$$\hbar\,\partial_{t}u=-\frac{\hbar^{2}}{2m}\Delta v+Vv,\qquad -\hbar\,\partial_{t}v=-\frac{\hbar^{2}}{2m}\Delta u+Vu$$
pointwise on $\Omega\times I$ for a real-valued function $V$ on $\Omega\times
I$, where $x=(x_0,x_1,x_2)$, $\partial_i$ differentiates in spatial
coordinate $x_i$ for $i\in\{0,1,2\}$ with $t$ fixed,
$\partial_t$ differentiates in $t$ with $x$ fixed, and
$\Delta=\partial_{0}^{2}+\partial_{1}^{2}+\partial_{2}^{2}$
([[def-directional-and-partial-derivatives]]). The equations are the
componentwise reading of
$i\hbar\,\partial_{t}\psi=-\frac{\hbar^{2}}{2m}\Delta\psi+V\psi$ for
$\psi:=u+iv$. Put
$$n:=u^{2}+v^{2}:\Omega\times I\to\mathbb R,\qquad \mathbf j:=\frac{\hbar}{m}\bigl(u\,\nabla v-v\,\nabla u\bigr):\Omega\times I\to\mathbb R^{3},$$
with $\nabla$ the spatial gradient $(\partial_0,\partial_1,\partial_2)$ of
[[def-jacobian-matrix-and-gradient]] at each fixed $t$ and
$\operatorname{div}$ the divergence of
[[def-divergence-and-curl-of-a-c1-vector-field]]. Then:

(a) *Continuity identity.* $\partial_{t}n+\operatorname{div}\mathbf j=0$
pointwise on $\Omega\times I$.

(b) *Stationary solutions.* If $u,v:\Omega\to\mathbb R$ are $C^{2}$ and
independent of $t$, if $V:\Omega\to\mathbb R$ is real, and if there is a real
$E$ with
$$-\frac{\hbar^{2}}{2m}\Delta u+Vu=Eu,\qquad -\frac{\hbar^{2}}{2m}\Delta v+Vv=Ev$$
pointwise on $\Omega$, then $\operatorname{div}\mathbf j=0$ on $\Omega$ for the
time-independent field $\mathbf j=\frac{\hbar}{m}(u\nabla v-v\nabla u)$, and for
every closed ball $\overline{B(a,r)}\subseteq\Omega$ with outward unit normal
$\nu$ on the sphere $\partial B(a,r)$,
$$\int_{\partial B(a,r)}\mathbf j\cdot\nu\,dS=0 .$$

(c) *The two explicit readings.* Let $k>0$, $d\in S^{2}$ and define
$u(x):=\cos(kd\cdot x)$, $v(x):=\sin(kd\cdot x)$ on $\Omega=\mathbb R^{3}$
(then $u,v$ are $C^{\infty}$ and satisfy the stationary equations with $V=0$,
$E=\hbar^{2}k^{2}/(2m)$). Then
$$\mathbf j=\frac{\hbar k}{m}\,d\qquad\text{on }\mathbb R^{3}.$$
Let $r_{0}>0$, write $\Omega:=\{x\in\mathbb R^{3}:|x|>r_{0}\}$, let
$\Omega\ni x=r\,\omega$ with $r=|x|$, $\omega\in S^{2}$, and let
$a,b:S^{2}\to\mathbb R$ be functions with $a,b\in C^{1}(S^{2})$. Here
$S^{2}:=\{\omega\in\mathbb R^{3}:|\omega|=1\}$, and, for a function
$g:S^{2}\to\mathbb R$, $g\in C^{1}(S^{2})$ means that its radial extension
$\widetilde g:\mathbb R^{3}\setminus\{0\}\to\mathbb R$,
$\widetilde g(x):=g(x/|x|)$, is $C^{1}$ in the open-domain sense of
[[def-ck-euclidean-maps-and-diffeomorphisms]]. Define
$$u(x):=\frac{a(\omega)\cos(kr)-b(\omega)\sin(kr)}{r},\qquad v(x):=\frac{a(\omega)\sin(kr)+b(\omega)\cos(kr)}{r}$$
on $\Omega$, so that $u+iv=\frac{f(\omega)}{r}e^{ikr}$ with $f:=a+ib$. Then
$u,v\in C^{1}(\Omega)$ and, with $\hat r:=\omega$,
$$\mathbf j\cdot\hat r=\frac{\hbar k}{m}\frac{|f(\omega)|^{2}}{r^{2}},\qquad \text{equivalently}\qquad r^{2}\,\mathbf j\cdot\hat r=\frac{\hbar k}{m}|f(\omega)|^{2},$$
and the current identity holds for every declared $f\in C^{1}(S^{2})$, with no
equation required of the field.

The assertion is an identity for the declared differentiable functions; it
constructs no probability law, no state, no beam and no cross section. The
fields of clause (c) are only $C^{1}$: an $f\in C^{1}(S^{2})$ need not admit
two angular derivatives, and no outgoing field is claimed here to solve the
free equation or to be stationary.

## Facts & Assumptions

**Given:** the open sets $\Omega,I$, the functions $u,v,V$, the constants $m,\hbar>0$, and the data of clause (c).

[F1] **Differentiation rules.** For totally differentiable Euclidean maps the sum and scalar-multiple rules hold ([[thm-algebra-of-total-derivatives]]) and the chain rule $D(g\circ f)(a)=Dg(f(a))\circ Df(a)$ holds ([[thm-chain-rule-for-total-derivatives]]), with $Df(a)e_{j}=\partial_{j}f(a)$ recovering the partial derivatives ([[thm-total-derivative-computes-directional-and-partial-derivatives]]); the partial derivatives themselves are those of [[def-directional-and-partial-derivatives]], the entries of the Jacobian of [[def-jacobian-matrix-and-gradient]]. For scalar functions on an interval the sum, product and quotient rules hold ([[thm-algebra-of-derivatives]]), and $(\sin)'=\cos$ and $(\cos)'=-\sin$ on $\mathbb R$ ([[thm-sine-and-cosine-derivatives]]). Also $\sin^2s+\cos^2s=1$ for every real $s$ ([[cor-trigonometric-parity-and-pythagorean-identity]]).

[F2] **Divergence of a product with a scalar.** For $C^{1}$ functions $\varphi:\Omega\to\mathbb R$ and $F:\Omega\to\mathbb R^{3}$, the equality $\operatorname{div}(\varphi F)=\langle\nabla\varphi,F\rangle+\varphi\operatorname{div}F$ holds pointwise, the divergence and gradient being those of [[def-divergence-and-curl-of-a-c1-vector-field]] and [[def-jacobian-matrix-and-gradient]] ([[lem-divergence-and-curl-are-linear-and-obey-the-scalar-product-rules]]).

[F3] **Divergence theorem.** Assume $\mathrm{AC}_{\omega}$. For a bounded $C^{1}$ domain $\Omega_{0}$ and $F\in C^{1}(\overline{\Omega_{0}};\mathbb R^{3})$, $\int_{\Omega_{0}}\operatorname{div}F\,dx=\int_{\partial\Omega_{0}}F\cdot\nu\,dS$ ([[thm-divergence-theorem-for-bounded-c-one-euclidean-domains]]).

## Proof

**Proof technique:** direct; differentiate $n$, use the two real equations to cancel the terms, then evaluate the stationary divergence and the two explicit fields.

**Given:** the data of the statement and [F1]-[F3].

1.1 By [F1], $\partial_{t}n=\partial_{t}(u^{2}+v^{2})=2(u\,\partial_{t}u+v\,\partial_{t}v)$ pointwise on $\Omega\times I$. [F1, given]

1.2 Put $F:=u\nabla v-v\nabla u$. By [F2] applied to each of the two products, using $\operatorname{div}(\nabla v)=\sum_{i=0}^{2}\partial_{i}\partial_{i}v=\Delta v$ and likewise for $u$, one has $\operatorname{div}(u\nabla v)=\nabla u\cdot\nabla v+u\,\Delta v$ and $\operatorname{div}(v\nabla u)=\nabla v\cdot\nabla u+v\,\Delta u$; the mixed terms are equal by symmetry of the inner product and cancel in the difference, so $\operatorname{div}F=u\,\Delta v-v\,\Delta u$ and hence $\operatorname{div}\mathbf j=\frac{\hbar}{m}(u\Delta v-v\Delta u)$. [F2, F1, algebra]

1.3 Reading the complex equation $i\hbar\partial_{t}(u+iv)=-\frac{\hbar^{2}}{2m}\Delta(u+iv)+V(u+iv)$ by real and imaginary parts gives $\hbar\,\partial_{t}u=-\frac{\hbar^{2}}{2m}\Delta v+Vv$ and $-\hbar\,\partial_{t}v=-\frac{\hbar^{2}}{2m}\Delta u+Vu$, i.e. $\partial_{t}u=-\frac{\hbar}{2m}\Delta v+\frac{V}{\hbar}v$ and $\partial_{t}v=\frac{\hbar}{2m}\Delta u-\frac{V}{\hbar}u$. [given, algebra]

1.4 For $u=\cos(kd\cdot x)$, $v=\sin(kd\cdot x)$ the chain rule [F1] gives $\nabla u=-k\,d\,\sin(kd\cdot x)$ and $\nabla v=k\,d\,\cos(kd\cdot x)$; hence $u\nabla v-v\nabla u=k\,d\,(\cos^{2}+\sin^{2})=k\,d$ and $\mathbf j=\frac{\hbar k}{m}d$. The two functions are $C^{\infty}$ and satisfy the stationary equations with $V=0$, because $\partial_{i}\partial_{i}u=-k^{2}d_{i}^{2}\cos(kd\cdot x)$ and $\partial_{i}\partial_{i}v=-k^{2}d_{i}^{2}\sin(kd\cdot x)$ by [F1], so summing over $i=0,1,2$ and using $|d|^{2}=1$ gives $\Delta u=-k^{2}u$ and $\Delta v=-k^{2}v$ with $E=\hbar^{2}k^{2}/(2m)$. [F1, given, algebra]

1.5 Write $c_{k}:=\cos(kr)$, $s_{k}:=\sin(kr)$ and $f=a+ib$. Then $u=r^{-1}(ac_{k}-bs_{k})$, $v=r^{-1}(as_{k}+bc_{k})$, so by the chain and product rules for functions of the single variable $r$ [F1], $\partial_{r}u=-k\,r^{-1}(as_{k}+bc_{k})-r^{-2}(ac_{k}-bs_{k})$ and $\partial_{r}v=k\,r^{-1}(ac_{k}-bs_{k})-r^{-2}(as_{k}+bc_{k})$. Multiplying out, $u\,\partial_{r}v-v\,\partial_{r}u=k\,r^{-2}\bigl[(ac_{k}-bs_{k})^{2}+(as_{k}+bc_{k})^{2}\bigr]=k\,r^{-2}(a^{2}+b^{2})=k\,r^{-2}|f(\omega)|^{2}$; since $\hat r$ is a unit vector and the radial directional derivative of an angular function is zero, $\mathbf j\cdot\hat r=\frac{\hbar}{m}(u\,\partial_{r}v-v\,\partial_{r}u)$, which is the first display of (c), and multiplying by $r^{2}>0$ gives the equivalent second display. Both $u$ and $v$ are $C^{1}$ on $\Omega$: they are sums of products of the $C^{\infty}$ radial factors $r^{-1}$, $\cos(kr)$, $\sin(kr)$ with the $C^{1}$ angular factors $a,b$, and the radial extensions of $a,b$ are $C^{1}$ by the explicit convention in (c), so the Euclidean product rules give the stated regularity. [F1, given, algebra]

2.1 Substituting 1.3 into 1.1 and using that $V$ is real, $2(u\partial_{t}u+v\partial_{t}v)=2\bigl(-\frac{\hbar}{2m}u\Delta v+\frac{V}{\hbar}uv+\frac{\hbar}{2m}v\Delta u-\frac{V}{\hbar}vu\bigr)=-\frac{\hbar}{m}(u\Delta v-v\Delta u)$. Adding the value of $\operatorname{div}\mathbf j$ from 1.2 gives $\partial_{t}n+\operatorname{div}\mathbf j=0$, which is (a). [step 1.1, step 1.2, step 1.3, algebra]

2.2 If $u,v,V$ do not depend on $t$ and satisfy the stationary equations, then $\Delta u=\frac{2m}{\hbar^{2}}(V-E)u$ and $\Delta v=\frac{2m}{\hbar^{2}}(V-E)v$ pointwise, so 1.2 gives $\operatorname{div}\mathbf j=\frac{\hbar}{m}\cdot\frac{2m}{\hbar^{2}}(V-E)(uv-vu)=0$ on $\Omega$. [step 1.2, given, algebra]

3.1 Let $\overline{B(a,r)}\subseteq\Omega$. The ball $B(a,r)$ is a bounded $C^{1}$ domain and $\mathbf j$ is $C^{1}$ on a neighbourhood of its closure, so [F3] gives $\int_{\partial B(a,r)}\mathbf j\cdot\nu\,dS=\int_{B(a,r)}\operatorname{div}\mathbf j\,dx=0$ by 2.2; with 1.4 for the plane-wave reading, 1.5 for the outgoing current identity, 2.1 for (a) and this step for (b), the proof of (a), (b) and (c) is complete. [F3, step 1.4, step 1.5, step 2.2, algebra] ∎

## Remarks

- **Role.** The lemma supplies the exact current reading used by the pair's
  stationary beam model: $\mathbf j$ is the pair of clauses (a) and (b) that
  makes the current of a stationary solution divergence-free and flux-free
  through spheres, and clause (c) computes the two currents -- the incident
  plane wave with magnitude $\hbar k/m$ and the outgoing spherical wave with
  radial density $(\hbar k/m)|f|^{2}/r^{2}$ -- that the model's cross-section
  reading compares. Clause (c) asserts the outgoing current identity without
  any equation for the field: the model's amplitude $f_{k}$ appears in the
  outgoing coefficient of the full stationary solution (incident wave plus
  outgoing wave plus remainder), whose existence and equation are established
  by the pair's stationary theorem, not here.
- **Choice.** The divergence theorem used in 3.1 assumes countable choice; no
  additional choice principle is used.
