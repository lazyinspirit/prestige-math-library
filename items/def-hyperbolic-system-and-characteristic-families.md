---
id: def-hyperbolic-system-and-characteristic-families
kind: definition
title: "Strictly hyperbolic conservation systems and characteristic families"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps:
  - def-c-one-map-and-local-inverse
  - def-ck-euclidean-maps-and-diffeomorphisms
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Alberto Bressan, Hyperbolic Conservation Laws: An Illustrated Tutorial"
      url: "https://yulia-petrova.github.io/teaching/shocks/Bressan-tutorial.pdf"
      locator: "§§3.1–3.3, printed pp. 21–26: strict hyperbolicity and characteristic families"
---

## Definition

Let $m\ge1$, let $G\subseteq\mathbb R^m$ be open, and let
$f:G\to\mathbb R^m$ be $C^3$ ([[def-c-one-map-and-local-inverse]];
the $C^3$ convention is that of [[def-ck-euclidean-maps-and-diffeomorphisms]]).
The one-dimensional conservation system with state domain $G$ is
$$u_t+\partial_x f(u)=0,\qquad u(t,x)\in G,$$
where $u$ is the conserved state and $f$ its flux. Its flux Jacobian is
$A(u)=Df(u)$. The system is **strictly hyperbolic on an open set $N\subseteq G$**
if, for every $u\in N$, $A(u)$ has $m$ distinct real eigenvalues, written in
increasing order $\lambda_1(u)<\cdots<\lambda_m(u)$. An **$i$th characteristic
family** on $N$ is a $C^2$ right-eigenvector field $r_i:N\to\mathbb R^m\setminus\{0\}$
with $A(u)r_i(u)=\lambda_i(u)r_i(u)$. It is **genuinely nonlinear** on $N$ if
$D\lambda_i(u)r_i(u)$ is nowhere zero there; after shrinking $N$ its sign is
constant. It is **linearly degenerate** on $N$ if $D\lambda_i(u)r_i(u)=0$
throughout $N$. Rescaling $r_i$ by a nonzero constant changes the wave-strength
parameter but not the family.

For $Q=(0,\infty)\times\mathbb R$, a locally bounded map $u:Q\to G$ is a
**distributional weak solution with initial data $u_0$** if
$$\int_Q\bigl(u\cdot\varphi_t+f(u)\cdot\varphi_x\bigr)\,dt\,dx=0$$
for every vector test function $\varphi\in C_c^\infty(Q;\mathbb R^m)$ and
$u(t,\cdot)\to u_0$ in $L^1_{\rm loc}(\mathbb R;\mathbb R^m)$ as
$t\downarrow0$. A **Riemann initial datum** is the step
$u_0(x)=u_L$ for $x<0$ and $u_0(x)=u_R$ for $x>0$.

In this weak-solution clause, $u$ is required to be Lebesgue measurable and
$f\circ u\in L^1_{\rm loc}(Q;\mathbb R^m)$, so the test-function integral is
defined. Local boundedness gives $u\in L^1_{\rm loc}(Q;\mathbb R^m)$.
