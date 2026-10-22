---
id: thm-nrqmx-rank-one-resonance-continuation
kind: theorem
domain: mathematics
library: mathematics
title: Resonance poles in an analytic rank-one model
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
dependency_level: 2
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - def-nrqmx-resonance-matrix-element-poles
  - lem-nrqmx-gaussian-resolvent-continuation
  - def-projection-valued-measure
  - def-unbounded-integral-against-a-pvm
  - thm-spectral-theorem-for-unbounded-self-adjoint-operators
  - thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators
  - thm-polar-coordinates-formula-for-lebesgue-measure
  - cor-lebesgue-sigma-algebra-is-the-completion-of-borel-lebesgue-measure
  - thm-completion-measurable-functions-have-base-measurable-representatives
  - thm-self-adjoint-resolvent-estimate
  - thm-nrqmx-rank-one-resolvent
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
  def-nrqmx-resonance-matrix-element-poles: mathematical-premise
  lem-nrqmx-gaussian-resolvent-continuation: mathematical-premise
  def-projection-valued-measure: mathematical-premise
  def-unbounded-integral-against-a-pvm: mathematical-premise
  thm-spectral-theorem-for-unbounded-self-adjoint-operators: mathematical-premise
  thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators: mathematical-premise
  thm-polar-coordinates-formula-for-lebesgue-measure: mathematical-premise
  cor-lebesgue-sigma-algebra-is-the-completion-of-borel-lebesgue-measure: mathematical-premise
  thm-completion-measurable-functions-have-base-measurable-representatives: mathematical-premise
  thm-self-adjoint-resolvent-estimate: mathematical-premise
  thm-nrqmx-rank-one-resolvent: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "M. Gadella and G. Pronko, The Friedrichs Model and its Use in Resonance Phenomena, §§1.1–2.1"
      url: "https://arxiv.org/pdf/1106.5782"
      locator: "PDF pp.2–6: resolvent-matrix-element definition of a resonance, the rank-one reduced resolvent denominator and poles from zeros."
    - title: "S. Albeverio and P. Kurasov, Singular Perturbations of Differential Operators: Solvable Schrödinger Type Operators, Chapter 1, §1.1.1"
      url: "https://api.pageplace.de/preview/DT0400.9781139382595_A23867432/preview-9781139382595_A23867432.pdf"
      locator: "Theorem 1.1.1 and its proof, printed pp.9–10: exact rank-one resolvent formula for a bounded perturbation of a possibly unbounded self-adjoint operator."
---

## Statement

Assume the Axiom of Choice and Countable Choice. Let $H_0$ be a self-adjoint operator on a complex Hilbert space $\mathcal H$ with inner product linear in its first variable, bounded below, let $g\in\mathcal H$, let $\lambda\in\mathbb R\setminus\{0\}$, and put

$$P_gf=\langle f,g\rangle g,\qquad H_\lambda=H_0+\lambda P_g\quad\hbox{on }D(H_0),\qquad R_0(z)=(H_0-zI)^{-1}.$$

Adopt as an explicit conditional input the rank-one resolvent interface: $H_\lambda$ is self-adjoint, and whenever $z\in\rho(H_0)$ and $d(z):=1+\lambda m(z)\ne0$, where $m(z)=\langle R_0(z)g,g\rangle$, one has

$$(H_\lambda-zI)^{-1} =R_0(z)-\frac{\lambda R_0(z)P_gR_0(z)}{d(z)}.$$

Spectral variables use the energy unit of $H_0$. If $\|g\|$ is
dimensionless, $m(z)$ has inverse-energy units and $\lambda$ has energy
units; in general the coupling is chosen so that $\lambda m(z)$ is
dimensionless.

Let $E_\star\in\mathbb R$, take an open disk $D$ centered at $E_\star$, and let $E_\star$ lie in an open interval $I$ on which the spectral PVM $E_{H_0}(\cdot)$ of $H_0$ is absolutely continuous: $E_{H_0}(N)=0$ for every Lebesgue-null Borel set $N\subseteq I$. Suppose $m$ and, for specified test vectors $f,h$ in a subspace $X\subseteq\mathcal H$, the free matrix elements

$$\langle R_0(z)f,h\rangle,\qquad a_f(z):=\langle R_0(z)f,g\rangle,\qquad b_h(z):=\langle R_0(z)g,h\rangle$$

have holomorphic continuations through $E_\star$ to $D$. Suppose $d_{\mathrm{cont}}(z)=1+\lambda m_{\mathrm{cont}}(z)$ has a zero $z_0\in D$ with $\operatorname{Im}z_0<0$ of finite order $k\ge1$, and $a_f(z_0)b_h(z_0)\ne0$. Then the continued matrix element $\langle(H_\lambda-zI)^{-1}f,h\rangle$ has a resonance pole of order $k$. In the simple-zero case its residue is

$$-\frac{a_f(z_0)b_h(z_0)}{m_{\mathrm{cont}}'(z_0)}.$$

In particular, for the Gaussian model $H_0=M_{|p|^2}$, $g(p)=\pi^{-3/4}e^{-|p|^2/2}$, and $X=\operatorname{span}\{g\}$, the continuation in [[lem-nrqmx-gaussian-resolvent-continuation]] supplies $m_{\mathrm{cont}}$; every interval $I\subset(0,\infty)$ is absolutely continuous by the radial spectral measure formula. Every finite-order zero of $1+\lambda m_{\mathrm{cont}}$ in the lower half of such a disk gives a pole of the continued scalar element $\langle(H_\lambda-zI)^{-1}g,g\rangle$. These poles are not nonreal eigenvalues of the self-adjoint $H_\lambda$.

## Statement references

[[def-axiom-of-choice]]

[[def-countable-choice]]

[[def-nrqmx-resonance-matrix-element-poles]]

[[def-projection-valued-measure]]

[[def-unbounded-integral-against-a-pvm]]

[[lem-nrqmx-gaussian-resolvent-continuation]]

[[thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators]]

[[thm-self-adjoint-resolvent-estimate]]

[[thm-spectral-theorem-for-unbounded-self-adjoint-operators]]

[[thm-nrqmx-rank-one-resolvent]]

[[thm-polar-coordinates-formula-for-lebesgue-measure]]

[[cor-lebesgue-sigma-algebra-is-the-completion-of-borel-lebesgue-measure]]

[[thm-completion-measurable-functions-have-base-measurable-representatives]]

## Facts & Assumptions

**Given:** AC and CC; the self-adjoint lower-semibounded $H_0$, $g$, real nonzero $\lambda$, $H_\lambda$ and $R_0$ in the Statement; the specified test space and local continuations.

[A1] The rank-one resolvent theorem is used at its exact current interface: under AC, self-adjoint lower-semibounded $H_0$, $g\in\mathcal H$, real $\lambda$, $P_gf=\langle f,g\rangle g$, and $H_\lambda$ on $D(H_0)$, it gives self-adjointness and the displayed resolvent identity when $1+\lambda\langle R_0(z)g,g\rangle\ne0$ ([[thm-nrqmx-rank-one-resolvent]]). The complete current proof and hash-current Step 1 ready record were inspected; this use matches both exactly.

[F1] The continuation and pole terms have the precise matrix-element meaning of [[def-nrqmx-resonance-matrix-element-poles]].

[F2] The Gaussian $m_{\mathrm{cont}}$, its positive-energy interval, and the explicit horizontal contour are supplied by [[lem-nrqmx-gaussian-resolvent-continuation]].

[F3] A self-adjoint $H_\lambda$ has real spectrum; every nonreal $z$ is in its resolvent set ([[thm-self-adjoint-resolvent-estimate]]).

[F4] The spectral PVM of $H_0=M_{|p|^2}$ acts by multiplication by $\mathbf 1_{\{|p|^2\in B\}}$, and its scalar measure for $u\in L^2(\mathbb R^3)$ is $\int_{\{|p|^2\in B\}}|u(p)|^2\,dp$ ([[thm-spectral-theorem-for-unbounded-self-adjoint-operators]], [[def-projection-valued-measure]], [[def-unbounded-integral-against-a-pvm]]).

[F5] Polar integration on $\mathbb R^3$ gives $dp=r^2\,dr\,d\sigma(\omega)$, with finite unit-sphere measure ([[thm-polar-coordinates-formula-for-lebesgue-measure]]).

[F6] Since Lebesgue measure on $\mathbb R^3$ is the completion of its Borel restriction, every Lebesgue-measurable function agrees almost everywhere with a Borel-measurable function; apply this to $|u|^2$ ([[cor-lebesgue-sigma-algebra-is-the-completion-of-borel-lebesgue-measure]], [[thm-completion-measurable-functions-have-base-measurable-representatives]]).

## Proof

**Given:** [A1], [F1]–[F6], and the free matrix-element continuations in the Statement.

1.1 Fix $z$ with $\operatorname{Im}z>0$. Self-adjointness of $H_0$ puts $z$ in $\rho(H_0)$; self-adjointness of $H_\lambda$ in [A1] puts it in $\rho(H_\lambda)$. Also $d(z)\ne0$: if $d(z)=0$, then $g\ne0$, $u=R_0(z)g\ne0$, and $(H_\lambda-zI)u=g+\lambda\langle R_0(z)g,g\rangle g=0$, contradicting $z\in\rho(H_\lambda)$. Thus [A1] applies on the upper half-plane. [A1, F3, given, algebra]

1.2 Pairing the rank-one identity [A1] against $f,h$ and using the first-variable-linear convention gives
$\langle R_\lambda(z)f,h\rangle
=\langle R_0(z)f,h\rangle-\frac{\lambda\,a_f(z)b_h(z)}{d(z)}$.
Each numerator term has the holomorphic continuation assumed in the Statement, so the right side defines the corresponding meromorphic continuation on $D$. [A1, given, F1, algebra]

2.1 By the finite-order zero hypothesis, $d_{\mathrm{cont}}(z)=(z-z_0)^k q(z)$ near $z_0$, where $q$ is holomorphic and $q(z_0)\ne0$. The product $a_f b_h$ is holomorphic and nonzero at $z_0$, so its quotient by $d_{\mathrm{cont}}$ has a pole of order exactly $k$. The first term $\langle R_0(z)f,h\rangle_{\mathrm{cont}}$ is holomorphic and cannot cancel that pole. Thus the continued $H_\lambda$ matrix element has the asserted resonance pole. If $k=1$, its residue is $-\lambda a_f(z_0)b_h(z_0)/d'_{\mathrm{cont}}(z_0)=-a_f(z_0)b_h(z_0)/m'_{\mathrm{cont}}(z_0)$. [step 1.2, given, F1, algebra]

3.1 In the Gaussian model of [F2], choose a Borel representative of $|u|^2$ by [F6]. The PVM formula [F4] and polar integration [F5] then give, for every $u\in L^2(\mathbb R^3)$,
$\mu_u(B)=\int_{\{|p|^2\in B\}}|u(p)|^2\,dp
=\int_{B\cap(0,\infty)}\frac{\sqrt E}{2}
\int_{S^2}|u(\sqrt E\,\omega)|^2\,d\sigma(\omega)\,dE$.
The substitution $E=r^2$ gives $r^2\,dr=(\sqrt E/2)\,dE$. Thus $E_{H_0}(N)=0$ for every Lebesgue-null $N\subset(0,\infty)$, so any open $I\subset(0,\infty)$ meets the Statement's absolute-continuity condition. For $f=h=g$, one has $a_g=b_g=m_{\mathrm{cont}}$. At a zero of $1+\lambda m_{\mathrm{cont}}$, $m_{\mathrm{cont}}(z_0)=-1/\lambda\ne0$. Hence the noncancellation condition of step 2.1 holds at every finite-order zero, proving the stated Gaussian specialization. [F2, F4, F5, F6, step 2.1, algebra]

4.1 If a nonzero vector $u\in D(H_\lambda)$ satisfied $H_\lambda u=z_0u$ with $\operatorname{Im}z_0<0$, self-adjointness in [A1] would make $\langle H_\lambda u,u\rangle$ real, but it equals $z_0\|u\|^2$, which is nonreal. This contradiction proves that the continued pole is not a nonreal eigenvalue. [A1, algebra] ∎
