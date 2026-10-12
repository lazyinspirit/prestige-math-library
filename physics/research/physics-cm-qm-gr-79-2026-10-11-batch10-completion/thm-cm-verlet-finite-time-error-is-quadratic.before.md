---
id: thm-cm-verlet-finite-time-error-is-quadratic
kind: theorem
title: "Finite-time global error of the velocity-Verlet method: $\\lVert z_n-\\Phi_{nh}(z_0)\\rVert\\le C(e^{LT}-1)h^2/L$"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 3
deps: [lem-cm-verlet-local-truncation-error-is-cubic, prop-cm-drift-kick-and-verlet-preserve-the-canonical-form, def-cm-splitting-hamiltonian-and-verlet-map, def-cm-local-flow-of-an-autonomous-system, thm-chain-rule-for-total-derivatives, def-jacobian-matrix-and-gradient, def-matrix-product-and-identity-matrix, def-metric-ball, def-metric-topology, def-ck-euclidean-maps-and-diffeomorphisms, cor-exponential-reciprocal-and-positivity, thm-exponential-is-strictly-increasing, thm-derivative-of-exponential, thm-ftc-second-part]
dependency_roles:
  lem-cm-verlet-local-truncation-error-is-cubic: mathematical-premise
  prop-cm-drift-kick-and-verlet-preserve-the-canonical-form: mathematical-premise
  def-cm-splitting-hamiltonian-and-verlet-map: mathematical-premise
  def-cm-local-flow-of-an-autonomous-system: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  def-metric-ball: mathematical-premise
  def-metric-topology: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  cor-exponential-reciprocal-and-positivity: mathematical-premise
  thm-exponential-is-strictly-increasing: mathematical-premise
  thm-derivative-of-exponential: mathematical-premise
  thm-ftc-second-part: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "E. Hairer, Geometric Numerical Integration (TU Munchen 2010), Lecture 2 'Symplectic integrators', Sections 1-2 and 4: order of a one-step method and composition of consistent methods, printed pages 1-9"
      url: "https://www.unige.ch/~hairer/poly_geoint/week2.pdf"
    - title: "A. Quillen, PHY411 Lecture notes Part 7 'Integrators' (University of Rochester), Sections 1.1-1.2: local versus global error accumulation for one-step methods, printed pages 2-7"
      url: "https://astro.pas.rochester.edu/~aquillen/phy411/lecture7.pdf"
verification:
  precheck: pass
---

## Statement

Let $d\ge1$ and let $U$, $M$, $V$, $A$, $B$, $H=A+B$, $V_h$ and $\Phi_t$ be as in [[def-cm-splitting-hamiltonian-and-verlet-map]] and [[lem-cm-verlet-local-truncation-error-is-cubic]]. Let $W\subseteq U$ be open, bounded and convex, let $K_1\subseteq W$ be nonempty compact, and let $r_1>0$ satisfy $K_1+\overline B_{r_1}(0)\subseteq W$ ([[def-metric-ball]]). Let $h_1>0$ and $C_1<\infty$ be the constants supplied by [[lem-cm-verlet-local-truncation-error-is-cubic]] for this data, so that for every $z\in K_1$ and $0<|h|\le h_1$ both $V_h(z)$ and $\Phi_h(z)$ are defined and lie in $W$ and

$$\lVert V_h(z)-\Phi_h(z)\rVert\le C_1|h|^3.$$

Then there is a constant $C<\infty$, depending only on $d$, $r_1$, $\lVert M^{-1}\rVert$, $\sup_{K_1}\lVert p\rVert$ and the bounds $M_0,L_1,L_2$ of [[lem-cm-verlet-local-truncation-error-is-cubic]] on $W$, such that the following holds. Let $T>0$, let $z_0\in K_1$, let $0<|h|\le h_1$ and $n\in\mathbb N$ satisfy $nh\le T$, and suppose the numerical iterates $z_j:=V_h^j(z_0)$ and the exact orbit points $\Phi_{jh}(z_0)$, $j=0,1,\dots,n$, all lie in $K_1$. Then

$$\lVert z_n-\Phi_{nh}(z_0)\rVert\le\frac{C}{L}\bigl(e^{LT}-1\bigr)h^2\quad\text{if }L>0,\qquad \lVert z_n-\Phi_{nh}(z_0)\rVert\le CTh^2\quad\text{if }L=0,$$

where $L:=\sup_{K_1}\lVert DV_h\rVert+ L_1$ is a finite one-step Lipschitz constant for $V_h$ and $\Phi_h$ on $K_1$.

## Facts & Assumptions

**Given:** The data and constants of [[lem-cm-verlet-local-truncation-error-is-cubic]] on the convex tube $K_1+\overline B_{r_1}(0)\subseteq W$; a time $T>0$; a step $0<|h|\le h_1$; points $z_0\in K_1$ with $z_j=V_h^j(z_0)$ and $\Phi_{jh}(z_0)$ in $K_1$ for $0\le j\le n$ and $nh\le T$.

[F1] Local error and step maps: for every $z\in K_1$ and $0<|h|\le h_1$, $V_h(z)\in W$, $\Phi_h(z)\in W$ and $\lVert V_h(z)-\Phi_h(z)\rVert\le C_1|h|^3$ ([[lem-cm-verlet-local-truncation-error-is-cubic]]).

[F2] One-step Lipschitz bounds: the derivative of $V_h$ is the product of the three block matrices of [[prop-cm-drift-kick-and-verlet-preserve-the-canonical-form]] evaluated at the intermediate points, each of the form $I+O(h)$; consequently there is a constant $\Lambda<\infty$, depending only on $\lVert M^{-1}\rVert$, the Hessian bounds and $d$, with $\lVert DV_h(z)\rVert\le 1+\Lambda|h|$ for $z\in K_1$ and $|h|\le h_1$. By the mean value estimate along segments in the convex $W$, $$\lVert V_h(z)-V_h(z')\rVert\le(1+\Lambda|h|)\lVert z-z'\rVert,\qquad \lVert\Phi_h(z)-\Phi_h(z')\rVert\le e^{L_1|h|}\lVert z-z'\rVert$$ for $z,z'\in K_1$, the second estimate from the flow derivative bound $\lVert D\Phi_h\Vert\le e^{L_1|h|}$ on the convex tube ([[lem-cm-verlet-local-truncation-error-is-cubic]], [[thm-chain-rule-for-total-derivatives]], [[def-jacobian-matrix-and-gradient]], [[def-matrix-product-and-identity-matrix]]).

[F3] Elementary exponential bounds: $1+x\le e^x$ for $x\ge0$ and $e^{a}\le e^{b}$ for $a\le b$, from $e^x-(1+x)=\int_0^x(e^t-1)\,dt\ge0$, where $e^t\ge1$ for $t\ge0$ by strict increase of the exponential and $e^0=1$ ([[thm-derivative-of-exponential]], [[thm-exponential-is-strictly-increasing]], [[cor-exponential-reciprocal-and-positivity]], [[thm-ftc-second-part]], [[def-ck-euclidean-maps-and-diffeomorphisms]]).

## Proof

**Proof technique:** direct; telescope the one-step errors and bound the homogeneous recurrence by a finite geometric sum.

1.1 Define $L:=(1+\Lambda|h|)$-free Lipschitz constant by $1+Lh:=\max\{1+\Lambda|h|,\,e^{L_1|h|}\}$, so that both $V_h$ and $\Phi_h$ are $(1+Lh)$-Lipschitz on $K_1$ by [F2]; $L$ is finite and independent of $n$. Put $e_j:=\lVert z_j-\Phi_{jh}(z_0)\rVert$ for $0\le j\le n$. [given, F2, algebra]

2.1 One-step recursion. For $0\le j<n$, writing $y_j:=\Phi_{jh}(z_0)\in K_1$ and using $\Phi_{jh+h}(z_0)=\Phi_h(y_j)$ ([[def-cm-local-flow-of-an-autonomous-system]]), $$\lVert z_{j+1}-\Phi_{(j+1)h}(z_0)\rVert=\lVert V_h(z_j)-\Phi_h(y_j)\rVert\le\lVert V_h(z_j)-V_h(y_j)\rVert+\lVert V_h(y_j)-\Phi_h(y_j)\rVert\le(1+Lh)e_j+C_1|h|^3,$$ by [F1] and the Lipschitz bound of step 1.1; both $z_{j+1}$ and $\Phi_{(j+1)h}(z_0)$ lie in $K_1$ by hypothesis. [given, step 1.1, F1]

3.1 Discrete Gronwall bound. We prove $e_j\le\frac{(1+Lh)^j-1}{Lh}\,C_1|h|^3$ for $0\le j\le n$ when $L>0$, by induction on $j$: $e_0=0$; and if the claim holds at $j$, then [step 2.1] gives $$e_{j+1}\le(1+Lh)\frac{(1+Lh)^j-1}{Lh}C_1|h|^3+C_1|h|^3=\frac{(1+Lh)^{j+1}-1}{Lh}C_1|h|^3.$$ For $L=0$ the same induction gives $e_j\le jC_1|h|^3$. [step 2.1, algebra]

4.1 Conclusion. Multiplying by $(Lh)^{-1}\cdot C_1|h|^3$ and using $L>0$, $(1+Lh)^n\le e^{Lnh}\le e^{LT}$ by [F3], $$e_n\le\frac{(1+Lh)^n-1}{Lh}C_1h^3\le\frac{e^{LT}-1}{L}C_1h^2,$$ and for $L=0$, $e_n\le nC_1h^3\le C_1Th^2$. Taking $C:=C_1$ proves the two displayed bounds; $C$ and $L$ depend only on the listed data. [step 3.1, F3, algebra] ∎

## Remarks

- The theorem is conditional on the *numerical and exact iterates remaining in $K_1$* for the whole interval $[0,T]$. This is a stated hypothesis, not a consequence of the local estimates: the lemma only guarantees $V_h(K_1)\subseteq W$ and does not prevent later escape for large $T$. The analytic refinement of the companion theorem [[thm-cm-analytic-verlet-energy-on-exponential-times]] keeps the same hypothesis.
- No choice principle is used: the induction is over the finite range $j\le n$. The constant $C$ is unoptimised and independent of $h$ and $T$; the bound is a worst-case bound and is not a statement about observed numerical performance.
