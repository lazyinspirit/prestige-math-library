---
id: def-cm-complex-phase-domains-and-holomorphic-maps
kind: definition
title: "Complex phase domains, holomorphic maps on $\\mathbb C^m$, and the complexified canonical form and bracket"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 0
deps: [def-cm-phase-domain-and-standard-symplectic-two-form, def-complex-differentiability-holomorphic-and-entire, def-total-derivative-in-euclidean-space, def-euclidean-linear-map, def-linear-map, def-invertible-euclidean-linear-map, def-directional-and-partial-derivatives, def-ck-euclidean-maps-and-diffeomorphisms, def-metric-ball, def-metric-topology, def-star-shaped-open-subset-of-rn, def-transpose-of-a-matrix, def-matrix-product-and-identity-matrix, thm-complex-numbers-form-a-field]
dependency_roles:
  def-cm-phase-domain-and-standard-symplectic-two-form: mathematical-premise
  def-complex-differentiability-holomorphic-and-entire: mathematical-premise
  def-total-derivative-in-euclidean-space: mathematical-premise
  def-euclidean-linear-map: mathematical-premise
  def-linear-map: mathematical-premise
  def-invertible-euclidean-linear-map: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-metric-ball: mathematical-premise
  def-metric-topology: mathematical-premise
  def-star-shaped-open-subset-of-rn: mathematical-premise
  def-transpose-of-a-matrix: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  thm-complex-numbers-form-a-field: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "J. Lebl, Tasty Bits of Several Complex Variables, Chapter 1, Section 1.1 (holomorphic functions in several variables) and Section 1.2 (polydiscs and power series), printed pages 13-27"
      url: "https://www.jirka.org/scv/scv.pdf"
    - title: "E. Stein and R. Shakarchi, Complex Analysis, Chapter 1 (the one-variable notions of holomorphy, disc and power series)"
      url: "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf"
verification:
  precheck: pass
---

## Definition

**Holomorphic maps.** Let $m,p\ge1$ and let $D\subseteq\mathbb C^m$ be open, identified with an open subset of $\mathbb R^{2m}$ through $\mathbb C^m\cong\mathbb R^{2m}$. A map $F:D\to\mathbb C^p$ is **complex differentiable at** $a\in D$ when there is a map $L:\mathbb C^m\to\mathbb C^p$ that is $\mathbb C$-linear — $L(u+v)=L(u)+L(v)$ and $L(\lambda u)=\lambda L(u)$ for $\lambda\in\mathbb C$ ([[def-linear-map]], [[def-euclidean-linear-map]], [[thm-complex-numbers-form-a-field]]) — with

$$F(a+v)=F(a)+L(v)+r(v),\qquad \frac{\lVert r(v)\rVert}{\lVert v\rVert}\longrightarrow0\ \ (v\to0),$$

the norm being the Euclidean norm of $\mathbb R^{2m}$ and $\mathbb R^{2p}$ ([[def-total-derivative-in-euclidean-space]]). Such an $L$ is unique by the argument of [[def-complex-differentiability-holomorphic-and-entire]], applied componentwise; it is denoted $DF(a)$. The map $F$ is **holomorphic on** $D$ when it is complex differentiable at every point of $D$; for $m=p=1$ this is the notion of [[def-complex-differentiability-holomorphic-and-entire]]. For holomorphic $F$ and $k\le m$ put $\partial_{z_k}F(a):=DF(a)(e_k)$, the $k$-th coordinate derivative; for $p=1$ this is the partial derivative of [[def-directional-and-partial-derivatives]] in the complex coordinate direction.

**Real analytic functions.** Let $N\ge1$ and let $V\subseteq\mathbb R^N$ be open. A function $\varphi:V\to\mathbb R$ is **real analytic at** $x\in V$ when there are an open set $W\subseteq\mathbb C^N$ with $x\in W$ and a holomorphic $F:W\to\mathbb C$ with $F(\xi)=\varphi(\xi)$ for every $\xi\in W\cap V$; $\varphi$ is **real analytic on** $V$ when it is real analytic at every point of $V$. Thus real analyticity is defined here exactly as *admitting a local holomorphic extension*.

**Polydiscs.** For $a\in\mathbb C^m$ and a polyradius $\rho=(\rho_1,\dots,\rho_m)$ with $0<\rho_k\le\infty$ put

$$\Delta_\rho(a):=\{\,z\in\mathbb C^m:\ |z_k-a_k|<\rho_k\ \text{for all }k\,\},\qquad \Gamma_\rho(a):=\{\,z:\ |z_k-a_k|=\rho_k\ \text{for all }k\,\},$$

the open **polydisc** and its **distinguished boundary**; a polydisc is open and convex ([[def-metric-ball]], [[def-metric-topology]]).

**Complex phase domains.** Let $d\ge1$. A **complex phase domain** is a nonempty open $D\subseteq\mathbb C^{2d}$ whose points are written $Z=(z,w)$ with $z=(z^1,\dots,z^d)$, $w=(w_1,\dots,w_d)\in\mathbb C^d$. On it define the **complexified canonical two-form** and the **complexified Poisson bracket** of holomorphic functions $f,g:D\to\mathbb C$ by

$$\omega_{\mathbb C}:=\sum_{i=1}^d dz^i\wedge dw_i,\qquad \{f,g\}:=\sum_{i=1}^d\bigl(\partial_{z^i}f\,\partial_{w_i}g-\partial_{w_i}f\,\partial_{z^i}g\bigr),$$

and for a holomorphic $f:D\to\mathbb C$ its **complex Hamiltonian field** $X_f:=J\nabla f$, where $J=\begin{pmatrix}0_d&I_d\\-I_d&0_d\end{pmatrix}$ is the standard symplectic matrix of [[def-cm-phase-domain-and-standard-symplectic-two-form]] and $\nabla f=(\partial_{z^1}f,\dots,\partial_{z^d}f,\partial_{w_1}f,\dots,\partial_{w_d}f)$ is the gradient column of coordinate derivatives. The real subspace $\mathbb R^{2d}\subseteq\mathbb C^{2d}$ and the restriction of $\omega_{\mathbb C}$, $J$ and $\{\,\cdot\,,\,\cdot\,\}$ to real-valued functions reproduce the real objects of [[def-cm-phase-domain-and-standard-symplectic-two-form]].

**Distance domains.** For $U\subseteq\mathbb R^{2d}$ and $r>0$ put

$$D(r):=\{\,\zeta\in\mathbb C^{2d}:\ \operatorname{dist}(\zeta,\overline U)<r\,\},\qquad \operatorname{dist}(\zeta,\overline U):=\inf\{\lVert\zeta-x\rVert:x\in\overline U\},$$

where $\overline U$ is the closure of $U$ in $\mathbb R^{2d}$ and the norm is the Euclidean norm of $\mathbb C^{2d}\cong\mathbb R^{4d}$. Each $D(r)$ is open, contains $U$, and $D(r)\subseteq D(r')$ for $r\le r'$; if $U$ is star-shaped with respect to $0$ ([[def-star-shaped-open-subset-of-rn]]), then every $D(r)$ is star-shaped with respect to $0$ as well.

## Remarks

- The definition of holomorphy used here is the $\mathbb C$-linear total-derivative definition, matching the one-variable published definition. The equivalence with power-series representability and with continuity plus separate holomorphy is *not* assumed: it is proved in [[lem-cm-cauchy-formula-and-power-series-on-polydiscs]] and [[lem-cm-holomorphic-map-calculus]] on this page, together with the differentiability of the coordinate derivatives.
- No choice principle is used. All objects are the standard complexifications of the real canonical objects; no physical interpretation is attached to $z,w$ or to $\omega_{\mathbb C}$ in this definition.
