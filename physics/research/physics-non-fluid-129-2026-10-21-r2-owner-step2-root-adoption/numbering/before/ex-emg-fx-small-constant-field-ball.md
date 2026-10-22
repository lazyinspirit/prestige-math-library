---
id: ex-emg-fx-small-constant-field-ball
kind: example
title: Constant-field branch on a ball
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: mathematics
dependency_level: 5
proof_strategy: direct
deps:
  - thm-emg-fx-small-dirichlet-data
  - def-emg-fx-dirichlet-constraint-problem
  - def-emg-fx-conformal-seed
  - lem-emg-fx-conformal-constraints
  - def-emg-constrained-electrovacuum-data
  - lem-emg-fx-dirichlet-energy-and-trace
  - thm-higher-order-boundary-regularity-for-dirichlet-problems
  - thm-higher-order-sobolev-embedding
  - cor-sobolev-algebra-above-the-critical-index
  - thm-smooth-up-to-the-boundary-density-on-smooth-domains
  - def-sobolev-space-wkp-and-its-norm
  - def-weak-dirichlet-solution-for-a-divergence-form-operator
  - thm-chain-rule-for-total-derivatives
  - def-axiom-of-choice
  - def-countable-choice
dependency_roles:
  thm-emg-fx-small-dirichlet-data: mathematical-premise
  def-emg-fx-dirichlet-constraint-problem: mathematical-premise
  def-emg-fx-conformal-seed: mathematical-premise
  lem-emg-fx-conformal-constraints: mathematical-premise
  def-emg-constrained-electrovacuum-data: mathematical-premise
  lem-emg-fx-dirichlet-energy-and-trace: mathematical-premise
  thm-higher-order-boundary-regularity-for-dirichlet-problems: mathematical-premise
  thm-higher-order-sobolev-embedding: mathematical-premise
  cor-sobolev-algebra-above-the-critical-index: mathematical-premise
  thm-smooth-up-to-the-boundary-density-on-smooth-domains: mathematical-premise
  def-sobolev-space-wkp-and-its-norm: mathematical-premise
  def-weak-dirichlet-solution-for-a-divergence-form-operator: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "A. I. Alcubierre, J. C. Degollado and M. Salgado, The Einstein-Maxwell system in 3+1 form and initial data for multiple charged black holes, arXiv:0907.1151v2 (2009)"
      url: "https://arxiv.org/pdf/0907.1151"
      locator: "Section III.A, equations (3.1)-(3.12); geometric-normalized seed fields and the time-symmetric scalar constraint."
    - title: "David Gilbarg and Neil S. Trudinger, Elliptic Partial Differential Equations of Second Order (2001)"
      url: "https://djvu.online/file/jxRRleAzbYjsl"
      locator: "Chapter 4, Theorems 4.6 and 4.8; the local example's linear Dirichlet coefficient is computed directly."
    - title: "John K. Hunter, Notes on Partial Differential Equations (2014)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "Section 4.12, Theorem 4.31, printed p. 116; higher-order boundary regularity for Dirichlet problems."
    - title: "Juha Kinnunen, Sobolev Spaces (2026)"
      url: "https://math.aalto.fi/~jkkinnun/files/sobolev_spaces.pdf"
      locator: "Chapter 3, §3.5, Remark 3.41 and its iteration argument, printed pp. 83–84; Sobolev algebra estimates above the critical index."
    - title: "J. Lebl, Basic Analysis I"
      url: "https://www.jirka.org/ra/html/sec_svtheder.html"
      locator: "§8.3, the total derivative chain rule used in the smooth-approximant composition formulas."
verification:
  precheck: pass
---

## Example

Let $\Omega=B_R(0)\subset\mathbb R^3$ be the open Euclidean ball of radius $R>0$, regarded as an oriented smooth three-manifold without boundary, and let $e_1=(1,0,0)$. Here $C^\infty(\overline\Omega)$ means that all partial derivatives of every finite order on $\Omega$ extend continuously to $\overline\Omega$. For a fixed $a\geq0$ with units of inverse length, prescribe smooth contravariant fields $\bar E_0:\overline\Omega\to\mathbb R^3$, $\bar E_0(x)=a e_1$, and $\bar B_0:\overline\Omega\to\mathbb R^3$, $\bar B_0(x)=0$; both are restrictions of smooth maps on $\mathbb R^3$. Set $\bar E_\varepsilon=\varepsilon\bar E_0$, $\bar B_\varepsilon=\varepsilon\bar B_0$, so $S=|\bar E_0|_\delta^2+|\bar B_0|_\delta^2=a^2$ and both barred fields have zero Euclidean divergence. For every sufficiently small $|\varepsilon|$, the local Dirichlet branch gives a function $\psi_\varepsilon\in C^\infty(\overline\Omega)$ with $\psi_\varepsilon\geq1$ and

$$\psi_\varepsilon(x)=1+\varepsilon^2\frac{a^2}{24}\bigl(R^2-|x|^2\bigr)+O_{C^{2,\alpha}}(\varepsilon^4).$$

With $\bar h=\delta$, $\bar A=0$, $\tau=0$, and $\Lambda=0$, the conformal formulas $h=\psi_\varepsilon^4\delta$, $K=0$, $E=\psi_\varepsilon^{-6}\bar E_\varepsilon$, and $B=\psi_\varepsilon^{-6}\bar B_\varepsilon=0$ define smooth constrained electrovacuum initial data on $\Omega$; here time-symmetric means $K=0$, and constrained means satisfying both Maxwell divergence constraints and the Hamiltonian and momentum constraints. The boundary condition $\psi_\varepsilon|_{\partial\Omega}=1$ is prescribed data on this fixed ball; this is not an isolated asymptotically flat black-hole construction.

## Example references

[[thm-emg-fx-small-dirichlet-data]]

[[def-emg-fx-conformal-seed]]

[[lem-emg-fx-conformal-constraints]]

[[def-emg-constrained-electrovacuum-data]]

[[lem-emg-fx-dirichlet-energy-and-trace]]

[[thm-higher-order-boundary-regularity-for-dirichlet-problems]]

[[thm-higher-order-sobolev-embedding]]

[[cor-sobolev-algebra-above-the-critical-index]]

## Facts & Assumptions

**Given:** $R>0$, $a\geq0$, the prescribed seed fields and their $\varepsilon$-scaled barred fields from the Example, and the Axiom of Choice and Countable Choice.

[A1] The Axiom of Choice and Countable Choice are assumed by the small-branch theorem, the Sobolev embedding/algebra suppliers, and the higher-order regularity route. [[def-axiom-of-choice]] [[def-countable-choice]]

[F1] [[def-emg-fx-dirichlet-constraint-problem]]: $S\in C^{0,\alpha}(\overline\Omega)$ is nonnegative, $u=\psi-1$ has zero boundary values, and $-8\Delta\psi=2\varepsilon^2S\psi^{-3}$ with $\psi>0$.

[F2] [[thm-emg-fx-small-dirichlet-data]]: for sufficiently small $|\varepsilon|$, there is a locally unique $C^{2,\alpha}$ branch with $\psi_\varepsilon\geq1$ and $\psi_\varepsilon=1+\varepsilon^2v+O_{C^{2,\alpha}}(\varepsilon^4)$, where $-8\Delta v=2S$ and $v=0$ on the boundary.

[F3] [[def-emg-fx-conformal-seed]]: $h=\psi^4\bar h$, $K=(\tau/3)h+\psi^{-2}\bar A$, and $E=\psi^{-6}\bar E$, $B=\psi^{-6}\bar B$ for smooth seed fields on the three-manifold.

[F4] [[lem-emg-fx-conformal-constraints]]: the barred Maxwell constraints are $\bar D_i\bar E^i=\bar D_i\bar B^i=0$; the transformed Hamiltonian equation includes $-8\Delta_{\bar h}\psi+\bar R\psi-2(|\bar E|_{\bar h}^2+|\bar B|_{\bar h}^2)\psi^{-3}=0$ when $\bar A=0$, $\tau=0$, and $\Lambda=0$; the momentum equation is satisfied when $K=0$ and $\bar E\times_{\bar h}\bar B=0$.

[F5] [[def-emg-constrained-electrovacuum-data]]: constrained data satisfy the two Maxwell divergence equations, the Hamiltonian scalar equation, and the momentum covector equation displayed in that definition.

[F6] [[lem-emg-fx-dirichlet-energy-and-trace]]: a $C^1(\overline\Omega)$ function with zero boundary restriction belongs to $H^1_0(\Omega)$.

[F7] [[def-sobolev-space-wkp-and-its-norm]] and [[def-weak-dirichlet-solution-for-a-divergence-form-operator]]: $H^m=W^{m,2}$ records square-integrable weak derivatives through order $m$; a zero-boundary weak solution of $-\Delta u=f$ satisfies $\int_\Omega\nabla u\cdot\nabla w=\int_\Omega f w$ for every $w\in H^1_0(\Omega)$.

[F8] [[thm-higher-order-boundary-regularity-for-dirichlet-problems]]: on a bounded smooth domain, a zero-trace weak solution of $-\Delta u=f\in H^m$ lies in $H^{m+2}$.

[F9] [[thm-higher-order-sobolev-embedding]]: on a bounded smooth three-dimensional domain, $H^1\hookrightarrow L^6$, $H^2\hookrightarrow C^0(\overline\Omega)$, and $H^m\hookrightarrow C^0(\overline\Omega)$ for $m\geq2$; [[cor-sobolev-algebra-above-the-critical-index]]: $H^m=W^{m,2}$ is a Banach algebra for $m\geq2$.

[F10] [[thm-smooth-up-to-the-boundary-density-on-smooth-domains]]: restrictions of ambient compactly supported smooth functions are dense in $H^m(\Omega)$ for each finite integer $m\geq1$.

[F11] [[thm-chain-rule-for-total-derivatives]]: the total derivative of a differentiable composition is the composition of the total derivatives; iteration gives the finite chain rule for the smooth approximants used below.

## Verification

1.1 The base fields are smooth and $\partial_i\bar E_0^i=\partial_i\bar B_0^i=0$, so the source in [F1] is the constant $S=a^2$, and scaling them by $\varepsilon$ preserves their zero divergences. The units are consistent: $a^2$ and $\Delta$ have units of inverse length squared, while $\psi$ and $\varepsilon$ are dimensionless. [given, F1, algebra]

2.1 On $B_R(0)$, define $v(x):=\frac{a^2}{24}(R^2-|x|^2)$. It vanishes on $\partial B_R$, and $\Delta |x|^2=6$ in $\mathbb R^3$, so $-8\Delta v=-8(-6a^2/24)=2a^2=2S$. By uniqueness of the zero-boundary solution in [F2], this is the coefficient in the branch expansion. [F1, F2, step 1.1, algebra]

3.1 Smoothness bootstrap, initial gain. Set $u=u_\varepsilon=\psi_\varepsilon-1$ and $f=(\varepsilon^2a^2/4)\psi_\varepsilon^{-3}$, so $-\Delta u=f$ and $u=0$ on $\partial\Omega$. The branch gives $u\in C^{2,\alpha}(\overline\Omega)$ and $\psi_\varepsilon\ge1$. The identities $\partial_i(\psi^{-3})=-3\psi^{-4}\partial_i\psi$ and $\partial_{ij}(\psi^{-3})=12\psi^{-5}(\partial_i\psi)(\partial_j\psi)-3\psi^{-4}\partial_{ij}\psi$ follow from [F11] and the product rule and show that $f\in C^2(\overline\Omega)$, with bounded derivatives through order two, hence $f\in H^2(\Omega)$ by integration by parts against compactly supported tests. By [F6], $u\in H^1_0(\Omega)$. Its classical equation tested against $C_c^\infty(\Omega)$ gives the weak identity; continuity of both sides in the $H^1$ test norm and the defining density of $C_c^\infty$ in $H^1_0$ extend it to every test in $H^1_0$. Applying [F8] with $m=2$ yields $u\in H^4(\Omega)$. [A1, F2, F6, F7, F8, F11, algebra]

4.1 Smoothness bootstrap, composition and iteration. Fix an integer $m\ge4$ and suppose $\psi=1+u\in H^m(\Omega)$. Its continuous range is a compact interval $J\subset[1,\infty)$ by [F2] and [F9]. To verify $\psi^{-3}\in H^m$, use [F10] to choose smooth restrictions $\psi_n\to\psi$ in $H^m$; [F9] gives uniform convergence, so for all sufficiently large $n$ the values of $\psi_n$ lie in one compact interval $J'\subset(0,\infty)$ containing $J$. For each smooth $q$ with values in $J'$, repeated application of the total chain and product rules [F11] expresses every $D^\beta(q^{-3})$, $|\beta|\le m$, as a finite sum of bounded factors $G^{(r)}(q)$, $G(s)=s^{-3}$, times products $\prod_jD^{\gamma_j}q$ with $|\gamma_j|\ge1$ and $\sum_j|\gamma_j|=|\beta|$. Each product is in $L^2$ with a bound controlled by $\|q\|_{H^m}$: derivatives of order at most $m-2$ lie in $H^2$ or a higher Sobolev space and hence in $L^\infty$ by [F9]; a factor of order $m$ can occur only alone and is in $L^2$; a factor of order $m-1$ occurs at most once, lies in $H^1\subset L^6$, and any remaining factor has total derivative order at most one and lies in $L^\infty$. Thus $q\mapsto G'(q)$ is uniformly bounded in $H^m$ on the bounded smooth approximants and their line segments. The same difference identity applied to $G'$ shows $t\mapsto G'(\psi_\ell+t(\psi_n-\psi_\ell))$ is continuous in $H^m$, so its displayed integral exists as a Banach-valued Riemann integral. The identity $G(\psi_n)-G(\psi_\ell)=(\psi_n-\psi_\ell)\int_0^1G'(\psi_\ell+t(\psi_n-\psi_\ell))\,dt$, together with the Banach-algebra bound [F9], shows $G(\psi_n)$ is Cauchy in $H^m$. Its uniform limit is $G(\psi)$, proving $\psi^{-3}\in H^m$. Hence $f\in H^m$; [F8] gives $u\in H^{m+2}$. Starting with $m=4$ and repeating for $m=4,6,8,\ldots$ proves $u\in H^{2j}(\Omega)$ for every sufficiently large integer $j$. The same embeddings imply $u\in H^r(\Omega)$ for every finite integer $r$, and then $u\in C^k(\overline\Omega)$ for every $k$, so $\psi_\varepsilon\in C^\infty(\overline\Omega)$. [A1, F2, F8, F9, F10, F11, step 3.1, algebra]

5.1 Verification of the full constraints. On the oriented manifold without boundary $\Sigma=\Omega$, take the conformal seed data $\bar h=\delta$, $\bar A=0$, $\tau=0$, $\Lambda=0$, $\bar E=\varepsilon a e_1$, and $\bar B=0$. Smoothness and positivity of $\psi_\varepsilon$ follow from steps 3.1–4.1 and [F2], so [F3] defines smooth $h,K,E,B$ and gives $K=0$. The Maxwell constraints hold because $\partial_i\bar E^i=\partial_i\bar B^i=0$ by step 1.1 and the barred metric is Euclidean. Since $\bar R=0$ and $|\bar E|_\delta^2=\varepsilon^2a^2$, the transformed Hamiltonian constraint [F4] is exactly $-8\Delta\psi_\varepsilon=2\varepsilon^2a^2\psi_\varepsilon^{-3}$, the branch equation. Its transformed momentum equation has zero left side because $K=\tau=0$ and zero right side because $\bar E\times_\delta\bar B=0$. Thus all four constraints in [F5] hold. The data are smooth constrained time-symmetric data on this fixed ball; the Dirichlet boundary value is prescribed, and the proof makes no claim of an isolated asymptotically flat black hole or any other boundary-value problem. [F2, F3, F4, F5, step 1.1, step 3.1, step 4.1, algebra] ∎
