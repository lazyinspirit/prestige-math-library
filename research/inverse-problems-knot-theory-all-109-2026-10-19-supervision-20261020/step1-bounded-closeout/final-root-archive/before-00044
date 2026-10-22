---
id: lem-ip-analytic-nonstationary-incidence-localization
kind: lemma
title: "Analytic incidence localization away from a data cotangent fiber"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-ip-analytic-double-fibration-transform
  - def-ip-distributions-conormal-kernels-and-cotangent-relation
  - def-ip-analytic-wavefront-fbi-transform
  - lem-ip-analytic-cutoff-sequence
  - cor-cauchy-inequalities
  - thm-real-analytic-inverse-and-implicit-function-theorems
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Marco Mazzucchelli, Mikko Salo, and Leo Tzou, A general support theorem for analytic double fibration transforms"
      url: "https://users.jyu.fi/~salomi/pub/MazzucchelliSaloTzou2023.pdf"
      locator: "§5.2, localization preceding Theorem 5.2; the article cites Hörmander 8.5.5 for this step."
    - title: "Johannes Sjöstrand, Singularités analytiques microlocales"
      url: "https://www.numdam.org/item/AST_1982__95__R3_0.pdf"
      locator: "§5, finite local realization and negligible cutoff terms."
---

## Statement

Let $R$ be an analytic double-fibration transform and $u\in\mathcal E'(X)$ with support $K$. Fix a nonzero data covector $(z_0,\zeta_0)$. Suppose there is no relation point $(z_0,\zeta_0;x,\xi)\in C_Z$ with $x\in K$. Then $(z_0,\zeta_0)\notin\operatorname{WF}_A(Ru)$. More precisely, the transpose of a data Gaussian packet, localized near $z_0$, is exponentially small with every fixed number of object derivatives on a neighborhood of $K$, uniformly for data centers and directions near $(z_0,\zeta_0/|\zeta_0|)$.

## Statement references

[[def-ip-analytic-double-fibration-transform|Analytic incidence transform and properness]]

[[def-ip-distributions-conormal-kernels-and-cotangent-relation|Typed transpose and conormal relation]]

[[def-ip-analytic-wavefront-fbi-transform|Data Gaussian criterion]]

## Facts & Assumptions

**Given:** The transform, support compact, covector and empty relation fiber in the statement.

[F1] [[def-ip-analytic-double-fibration-transform]] gives analytic submersions and properness over compact object supports.

[F2] [[def-ip-distributions-conormal-kernels-and-cotangent-relation]] identifies conormals and supplies fixed-support finite derivative bounds for distributions.

[F3] [[lem-ip-analytic-cutoff-sequence]] gives finite-order localizers.

[F4] [[cor-cauchy-inequalities]] gives factorial bounds for all derivatives of the analytic fiber maps, density coefficients and reciprocals of nonzero analytic phase derivatives on smaller neighborhoods.

[F5] [[thm-real-analytic-inverse-and-implicit-function-theorems]] gives analytic local fiber coordinates.

## Proof

**Given:** The data in the statement.

1.1 Fix a relatively compact data chart about $z_0$ and a slightly larger compact object neighborhood $K_1$ of $K$. The incidence portion over the data closure and $K_1$ is compact by [F1]. Use [F5] to cover it by finitely many analytic fiber charts for the projection to $X$, written $(t,x)\mapsto(z(t,x),x)$. In these coordinates the transpose data packet has integrals of the form $ \int e^{i\lambda\Psi(t,x;q,\omega)}b(t,x)\chi(z(t,x))\,dt,\qquad \Psi=(q-z(t,x))\cdot\omega+\frac i2|q-z(t,x)|^2, $ where $b$ is analytic and $\chi$ is a data cutoff. At $z(t,x)=z_0$, $\partial_t\Psi=-D_tz^T\omega_0$. If this vanished, $\zeta_0$ would annihilate the fiber tangent of $\pi_X$. It would therefore extend to a conormal $(\zeta_0,-\xi)$ of $Z$, because the annihilator of that fiber is the image of the dual of $d\pi_X$; this gives a relation point with $x\in K$, contrary to the hypothesis. Both projections being submersions excludes a zero object covector. [F1, F2, F5, given, algebra]

2.1 Compactness of the portion over $K_1$ and step 1.1 give a finite refinement with the following uniform alternative on each piece, for $x$ in a neighborhood of $K$ and $(q,\omega)$ near the supplied data point: either $|z-q|\ge d>0$, or one fiber coordinate satisfies $|\partial_{t_j}\Psi|\ge d>0$. The first pieces have Gaussian exponential decay in every fixed object derivative. For the second pieces shrink the analytic neighborhoods so $1/\partial_{t_j}\Psi$ is holomorphic and has uniform factorial derivative bounds by [F4]. The data cutoff can be chosen equal to one on the central data neighborhood. Its transition contributes only pieces of the first type, so it is never differentiated to an order growing with $\lambda$ in the second estimate. [F1, F4, step 1.1, choose]

3.1 For integration by parts choose finite-order localizers in the finitely many refined fiber charts. They can form an exact partition near the incidence compact without reciprocal derivatives: if $\chi_{j,N}$ are the cutoffs in [F3], take $\rho_{j,N}=\chi_{j,N}\prod_{\ell<j}(1-\chi_{\ell,N})$. At every point of the compact at least one $\chi_{j,N}$ is identically one on a fixed neighborhood. Hence $\sum_j\rho_{j,N}=1$ there. There are a fixed finite number of factors; the product rule gives $|\partial^\alpha\rho_{j,N}|\le C(CN)^{|\alpha|}$ for $|\alpha|\le N$. Extend the construction to a fixed slightly larger compact in the incidence charts, so all object derivatives through any fixed order $m$ preserve the exact partition identity near $K$. Use the sequence indexed by $N+m$. [F3, step 2.1, algebra, construct]

4.1 On a nonstationary piece use $L=(i\lambda\partial_{t_j}\Psi)^{-1}\partial_{t_j}$, so $Le^{i\lambda\Psi}=e^{i\lambda\Psi}$. There are no boundary terms because the localizers have compact support in the chart. After $N$ integrations by parts the integrand is $e^{i\lambda\Psi}(L^*)^N(b\rho_{j,N+m})$. The factorial coefficient bounds and the product rule give $ \|(L^*)^N(b\rho_{j,N+m})\|_\infty \le C^{N+1}\lambda^{-N}\sum_{k=0}^N\frac{N!}{k!}(C(N+m))^k \le C_m(C_m N/\lambda)^N $ for $N\ge m+1$. To obtain the first bound, expand each adjoint as a first-order derivative plus its differentiated analytic coefficient; induction distributes $k$ derivatives to the localizer and bounds the remaining analytic derivatives by $C^{N+1}N!/k!$. In the second bound use $N!\le N^N$ and $\sum_{k\le N}(C(N+m))^k/k!\le e^{C(N+m)}$. The bounded integration volumes and $|e^{i\lambda\Psi}|\le1$ leave the same bound for the integral. Applying $m$ object derivatives first adds at most a fixed power of $\lambda$ and $N$; the same induction with $N+m$ gives $C_m\lambda^{M_m}N^{M_m}(C_mN/\lambda)^N$. Fix this $m$ and take $N=\lfloor\epsilon_m\lambda\rfloor$ with $C_m\epsilon_m<1/2$. The result is $O(e^{-c_m\lambda})$. [F2, F3, F4, step 3.1, algebra]

5.1 The transpose packet coefficient is independent of $N$ because the partition is exact near the support. Summing the finitely many estimates in steps 2.1 and 4.1 proves the asserted $C^m$ estimate on a fixed neighborhood of $K$. Take $m$ to be the finite distributional order in [F2] and pair with $u$. It follows that the data Gaussian FBI pairing of $Ru$ is uniformly exponentially small. The definition of analytic wavefront gives the conclusion. This proof uses neither an unproved wavefront pushforward theorem nor a compact analytic bump. [F2, step 2.1, step 4.1, algebra] ∎
