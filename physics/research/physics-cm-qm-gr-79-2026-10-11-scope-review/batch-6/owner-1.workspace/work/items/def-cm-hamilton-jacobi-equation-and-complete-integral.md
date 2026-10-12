---
id: def-cm-hamilton-jacobi-equation-and-complete-integral
kind: definition
title: "The Hamilton-Jacobi equation and a complete integral of it"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 3
deps: [prop-cm-hamiltonian-field-and-poisson-bracket-in-a-phase-chart, def-ck-euclidean-maps-and-diffeomorphisms, def-directional-and-partial-derivatives, def-jacobian-matrix-and-gradient, def-total-derivative-in-euclidean-space, def-metric-topology, def-interval]
dependency_roles:
  prop-cm-hamiltonian-field-and-poisson-bracket-in-a-phase-chart: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  def-total-derivative-in-euclidean-space: mathematical-premise
  def-metric-topology: mathematical-premise
  def-interval: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "D. Tong, Classical Dynamics (University of Cambridge Part II Mathematical Tripos), Section 4.7 'The Hamilton-Jacobi Equation' (the equation W_t + H(q, W_q, t) = 0 and the role of dW/dbeta constants), printed pages 121-126"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "D. Cline, Variational Principles in Classical Mechanics (2nd edition, University of Rochester River Campus Libraries, open textbook, CC BY-NC-SA 4.0), Section 15.4 (Hamilton-Jacobi theory and Jacobi's complete integral)"
      url: "https://downloads.libretexts.org/api/v1/download/phys-9557/pdf"
verification:
  precheck: pass
---

## Definition

Let $n\ge1$, let $J\subseteq\mathbb R$ be a nonempty open interval
([[def-interval]]), let $U\subseteq\mathbb R^n$ be a nonempty open set, and let

$$H:J\times U\times\mathbb R^n\longrightarrow\mathbb R$$

be of class $C^2$ ([[def-ck-euclidean-maps-and-diffeomorphisms]]); write $p=(p_1,\dots,p_n)$ for
the third variable, so that $(t,q,p)$ range over phase-type data and $H$ is a Hamiltonian in the
sense of [[prop-cm-hamiltonian-field-and-poisson-bracket-in-a-phase-chart]]. Let
$J'\subseteq J$, $U'\subseteq U$ and $A'\subseteq\mathbb R^n$ be nonempty open sets
([[def-metric-topology]]) and let $S:J'\times U'\times A'\to\mathbb R$ be of class $C^3$; write
$\alpha=(\alpha_1,\dots,\alpha_n)$ for the third variable.

$S$ **solves the Hamilton-Jacobi equation associated with $H$** on $J'\times U'\times A'$ if

$$S_t(t,q,\alpha)+H\bigl(t,\,q,\,S_q(t,q,\alpha)\bigr)=0\qquad\bigl((t,q,\alpha)\in J'\times U'\times A'\bigr),$$

where $S_t$ is the partial derivative in $t$, $S_q=(S_{q^1},\dots,S_{q^n})$ is the gradient in $q$
and $H$ is evaluated at the momentum $p=S_q(t,q,\alpha)$
([[def-directional-and-partial-derivatives]], [[def-jacobian-matrix-and-gradient]]). $S$ is a
**complete integral** of the Hamilton-Jacobi equation at $(t_0,q_0,\alpha_0)$ if in addition

$$\det S_{q\alpha}(t_0,q_0,\alpha_0)\ne0,$$

where $S_{q\alpha}$ is the $n\times n$ matrix with entries
$\partial^2S/\partial q^i\partial\alpha_j$, called the **mixed derivative**.

If $S$ is a complete integral, the associated **momentum map** is
$p(t,q,\alpha):=S_q(t,q,\alpha)$ and the associated **constants**
$\beta(t,q,\alpha):=S_\alpha(t,q,\alpha)$ are the **Jacobi constants** of the complete integral.
This is the Hamiltonian case of the general first-order equation $u_t+H(t,q,D_qu)=0$: the $n$
parameters $\alpha$ enter essentially through the nonvanishing mixed derivative, and $S_t$ is
determined algebraically by $S_q$ on the solutions.
