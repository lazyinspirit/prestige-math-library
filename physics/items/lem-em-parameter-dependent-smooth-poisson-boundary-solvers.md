---
id: lem-em-parameter-dependent-smooth-poisson-boundary-solvers
kind: lemma
domain: mathematics
title: "Smooth parameter-dependent Dirichlet and compatible Neumann Poisson solvers"
status: draft
origin: pipeline
pipeline_run: physics-em-sr-40-2026-10-08
dependency_level: 4
deps: [lem-em-parameter-preserving-smooth-extension-on-a-smooth-domain, lem-em-lift-specified-dirichlet-existence, lem-em-zero-boundary-coercivity, lem-em-weak-neumann-and-transmission-existence, lem-em-mean-zero-coercivity-on-a-c-one-domain, thm-higher-order-boundary-regularity-for-dirichlet-problems, thm-higher-order-sobolev-embedding, thm-extension-theorem-for-bounded-smooth-domains, lem-c-k-boundary-flattening-preserves-wkp-locally, thm-lp-trace-operator-on-a-bounded-c-one-domain, cor-first-green-identity-on-a-bounded-c-one-domain, thm-divergence-theorem-for-bounded-c-one-euclidean-domains, thm-riesz-representation-for-hilbert-space, thm-riesz-fischer-completeness-of-l-p, cor-cauchy-schwarz-inequality-for-l-two, def-first-difference-quotient, lem-difference-quotient-integration-by-parts, thm-difference-quotient-characterisation-of-w-one-p-for-p-greater-than-one, thm-wkp-extension-from-a-half-space, cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn, lem-weak-leibniz-rule-with-a-smooth-factor, def-sobolev-space-wkp-and-its-norm, def-bounded-c-k-domain-and-boundary-charts, def-bounded-c-one-domain-boundary-charts-and-outward-normal, def-axiom-of-choice, def-countable-choice, thm-ftc-first-part, thm-ftc-second-part, thm-chain-rule-for-total-derivatives, thm-algebra-of-derivatives]
dependency_roles:
  lem-em-parameter-preserving-smooth-extension-on-a-smooth-domain: mathematical-premise
  lem-em-lift-specified-dirichlet-existence: mathematical-premise
  lem-em-zero-boundary-coercivity: mathematical-premise
  lem-em-weak-neumann-and-transmission-existence: mathematical-premise
  lem-em-mean-zero-coercivity-on-a-c-one-domain: mathematical-premise
  thm-higher-order-boundary-regularity-for-dirichlet-problems: mathematical-premise
  thm-higher-order-sobolev-embedding: mathematical-premise
  thm-extension-theorem-for-bounded-smooth-domains: mathematical-premise
  lem-c-k-boundary-flattening-preserves-wkp-locally: mathematical-premise
  thm-lp-trace-operator-on-a-bounded-c-one-domain: mathematical-premise
  cor-first-green-identity-on-a-bounded-c-one-domain: mathematical-premise
  thm-divergence-theorem-for-bounded-c-one-euclidean-domains: mathematical-premise
  thm-riesz-representation-for-hilbert-space: mathematical-premise
  thm-riesz-fischer-completeness-of-l-p: mathematical-premise
  cor-cauchy-schwarz-inequality-for-l-two: mathematical-premise
  def-first-difference-quotient: mathematical-premise
  lem-difference-quotient-integration-by-parts: mathematical-premise
  thm-difference-quotient-characterisation-of-w-one-p-for-p-greater-than-one: mathematical-premise
  thm-wkp-extension-from-a-half-space: mathematical-premise
  cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn: mathematical-premise
  lem-weak-leibniz-rule-with-a-smooth-factor: mathematical-premise
  def-sobolev-space-wkp-and-its-norm: mathematical-premise
  def-bounded-c-k-domain-and-boundary-charts: mathematical-premise
  def-bounded-c-one-domain-boundary-charts-and-outward-normal: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
  thm-ftc-first-part: mathematical-premise
  thm-ftc-second-part: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Maximilian Hanusch, A Ck-Seeley-Extension-Theorem for Bastiani's Differential Calculus, arXiv:2002.05125v2 (23 February 2023)"
      url: "https://arxiv.org/pdf/2002.05125"
      locator: "Theorem 1 pp. 10-11, construction (24)-(26) pp. 19-22 and Lemma 6 boundary matching pp. 23-25, bounded passages read from the retrieved 29-page full PDF; the finite-dimensional coefficient and moment proofs are supplied locally."
    - title: "John K. Hunter, Notes on Partial Differential Equations (UC Davis, 2014)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "Theorem 4.31 and Corollary 4.32, printed pp. 116-117, for the Dirichlet higher-order estimate; the natural-boundary Neumann estimate is derived locally and is not attributed to this Dirichlet-only source."
verification:
  precheck: pass
---

## Statement

Assume AC and Countable Choice carried by the variational and Sobolev suppliers ([[def-axiom-of-choice]], [[def-countable-choice]]). Let $\Omega$ be a bounded smooth graph domain in $\mathbb R^3$ ([[def-bounded-c-k-domain-and-boundary-charts]]), $\varepsilon>0$ constant and $J$ an open interval. Let the bulk datum $f$ be jointly smooth up to $\overline\Omega\times J$ in the all-mixed-derivative sense of the parameter-preserving extension supplier, and let boundary families $g_D,\kappa$ be smooth in a fixed finite boundary atlas $\times\,J$. Then the Dirichlet problem $-\varepsilon\Delta u=f$, $u|_{\partial\Omega}=g_D$ has a unique solution on $\Omega\times J$; it has a single smooth ambient continuation near the closed spatial domain $\times\,J$. The Neumann problem $-\varepsilon\Delta u=f$, $\varepsilon\partial_\nu u=\kappa$ has such a solution precisely when

$$\int_{\Omega_j}f(\cdot,t)+\int_{\partial\Omega_j}\kappa(\cdot,t)=0\quad\text{for each component and every }t\in J.$$

It is unique modulo a separately chosen spatial constant on each component at each time. The normalization $\int_{\Omega_j}u(\cdot,t)=0$ gives a unique smooth family. Both solution operations are linear in their data; time differentiation commutes with them. Smoothness and estimates are local in compact time subintervals, with no uniform-in-$J$ requirement. The smooth ambient continuations are auxiliary and are not unique off the closed physical spatial region.

## Facts & Assumptions
**Given:** A bounded smooth graph domain $\Omega$ with a fixed finite boundary atlas ([[def-bounded-c-k-domain-and-boundary-charts]], [[def-bounded-c-one-domain-boundary-charts-and-outward-normal]]); $\varepsilon>0$ constant; an open time interval $J$; smooth bulk and boundary data; and the two weak solvability suppliers ([[lem-em-lift-specified-dirichlet-existence]], [[lem-em-weak-neumann-and-transmission-existence]]).

[F1] **Weak solvers and estimates.** The Dirichlet and compatible Neumann weak problems have unique solutions in the declared classes with the stated normalisations, and the natural-boundary regularity and the Dirichlet higher-order boundary estimate are available with the Sobolev extension and embedding tools ([[lem-em-zero-boundary-coercivity]], [[lem-em-mean-zero-coercivity-on-a-c-one-domain]], [[thm-lp-trace-operator-on-a-bounded-c-one-domain]], [[thm-higher-order-boundary-regularity-for-dirichlet-problems]], [[thm-higher-order-sobolev-embedding]], [[thm-extension-theorem-for-bounded-smooth-domains]], [[def-sobolev-space-wkp-and-its-norm]]).

[F2] **Flattening, traces and calculus.** Chart flattening preserves local Sobolev classes with the chain rule; the first Green identity, the Euclidean divergence theorem, the difference-quotient tools, the weak Leibniz rule, half-space extension, compactly supported smooth density and the FTC/chain/algebra rules are available ([[lem-c-k-boundary-flattening-preserves-wkp-locally]], [[cor-first-green-identity-on-a-bounded-c-one-domain]], [[thm-divergence-theorem-for-bounded-c-one-euclidean-domains]], [[def-first-difference-quotient]], [[lem-difference-quotient-integration-by-parts]], [[thm-difference-quotient-characterisation-of-w-one-p-for-p-greater-than-one]], [[lem-weak-leibniz-rule-with-a-smooth-factor]], [[thm-wkp-extension-from-a-half-space]], [[cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn]], [[thm-ftc-first-part]], [[thm-ftc-second-part]], [[thm-chain-rule-for-total-derivatives]], [[thm-algebra-of-derivatives]]).

[F3] **Riesz, completeness and Cauchy-Schwarz.** Bounded functionals on closed $L^2$ subspaces are represented, $L^2$ is complete and Cauchy-Schwarz holds ([[thm-riesz-representation-for-hilbert-space]], [[thm-riesz-fischer-completeness-of-l-p]], [[cor-cauchy-schwarz-inequality-for-l-two]]).

[F4] **Parameter-preserving extension.** A fixed linear extension of smooth-domain fields preserves all parameters and smoothness up to the boundary ([[lem-em-parameter-preserving-smooth-extension-on-a-smooth-domain]]).



## Proof

**Proof technique:** direct.

1.1 Fixed boundary lifts: in the graph coordinates $r=x_3-h(y)$ with the domain on $r<0$ and outward normal $\nu=(-\nabla h,1)/\sqrt{1+|\nabla h|^2}$, take a finite boundary partition and a fixed normal cutoff equal to one near $r=0$; for a localized Dirichlet datum $g_j(y,t)$ set the lift $L_Dg_j=\rho(r)g_j(y,t)$ with a larger fixed chart cutoff, and for a localized conormal datum $\kappa_j$ set $L_N\kappa_j=r\rho(r)\kappa_j(y,t)/(\varepsilon\sqrt{1+|\nabla h(y)|^2})$; at $r=0$ the coefficient terms with a differentiated factor vanish because of the factor $r$ while $\partial_\nu r=\sqrt{1+|\nabla h|^2}$, so $\varepsilon\partial_\nu L_N\kappa_j=\kappa_j$, and summing the finite chart pieces gives lifts with the exact datum that are linear, time-independent in their spatial profile, smooth on a spatial collar $\times\,J$ and bounded in $H^{k+2}$ by finite $C^{k+2}$ boundary seminorms. [given, F1, F2, algebra]

2.1 Dirichlet branch: subtract the lift $L_Dg_D$ and apply the weak Dirichlet solver and the exact higher-order Dirichlet boundary estimate to the source $f+\varepsilon\Delta L_Dg_D$; the solution is unique and, by the regularity estimate iterated over $m$, lies in $H^m$ for every $m$ on compact time subintervals, hence has a smooth representative on the closed spatial domain times those subintervals; the estimate is local in time because all data seminorms are taken on compact subintervals. [step 1.1, F1, F2, algebra]

2.2 Neumann weak existence: smooth boundary $\kappa$ defines a bounded boundary trace functional by Cauchy-Schwarz and the $H^1\to L^2(\partial\Omega)$ trace theorem, and the weak Neumann lemma gives existence exactly under the componentwise compatibility condition, with uniqueness modulo one spatial constant per component at each time; the mean-zero coercivity on each component gives $\|u\|_{H^1}\le C(\|f\|_2+\|\kappa\|_{L^2(\partial\Omega)})$ after normalisation, and a bounded smooth graph domain has only finitely many components because a finite cover by connected one-sided graph patches meets only finitely many and every component meets one. [step 1.1, F1, F3, algebra]

3.1 Natural-boundary $H^2$ estimate: after subtracting the fixed lift $H=L_N\kappa$, the residual $w=u-H$ has homogeneous Neumann flux and source $f+\varepsilon\Delta H$, whose residual bulk integral vanishes under the original compatibility; flattening and localization change the datum to $\eta p-A\nabla z\cdot\nabla\eta+G\cdot\nabla\eta$ with $p\in L^2$ and $G\in H^1$, the exact terms accounting for the natural flux, and the tangential difference-quotient test $v=-\delta_{-h}^k(\eta^2\delta_h^kz)$ — a supported $H^1$ test that need not vanish at the boundary — gives by [F2] and [F3] the uniform bound $\|\eta\nabla\delta_h^kz\|_2\le C(\|p\|_2+\|G\|_{H^1}+\|z\|_{H^1})$; passing to the limit and using Riesz representation supplies all second derivatives with a tangential factor, and the strong equation $-\operatorname{div}(A\nabla z)=p-\operatorname{div}G$ together with $A_{33}\ge\alpha>0$ recovers the remaining normal derivative, giving the natural-boundary $H^2$ estimate. [step 2.2, F2, F3, algebra]

4.1 Higher orders: if $w\in H^{k+1}$ with homogeneous Neumann data and datum in $H^k$, localize; the localized scalar datum lies in $H^k$ and the vector datum in $H^{k+1}$, tangential differentiation by a multi-index $\alpha$ of order $k$ keeps the principal matrix with scalar datum $D^\alpha_{\rm tan}p\in L^2$ and vector datum $D^\alpha_{\rm tan}G-\sum_{0<\beta\le\alpha}\binom{\alpha}{\beta}(D^\beta_{\rm tan}A)\nabla D^{\alpha-\beta}_{\rm tan}z\in H^1$, since every commutator carries a coefficient derivative and uses derivatives of $z$ through order at most $k+1$; the tangentially differentiated flux need not vanish but is represented by these vector terms in the natural weak identity, to which step 3.1 applies; this controls order-$k+2$ derivatives with at most two normal factors, and expanding the strong equation on each half-patch and recovering successively larger normal counts through the sole $A_{33}$ principal term, with compact test supports lying in the half-patch interior, yields by the finite cover $\|u\|_{H^{k+2}}\le C_k(\|f\|_{H^k}+\|\kappa\|_{C^{k+2}(\partial\Omega)}+\|u\|_{H^1})$; tangential tests are justified by the half-space extension and compactly supported smooth density of [F2] without falsely using $H_0^1$ density. [step 3.1, F2, F1, algebra]

5.1 Strong equation and exact Neumann trace: after the estimates give all spatial orders, Sobolev embedding produces a $C^2$ representative on the closure; testing the weak equation against compact interior smooth functions makes the continuous residual $-\varepsilon\Delta u-f$ vanish pointwise by a nonnegative interior bump, and applying the first Green identity to the smooth representative and tests obtained from the fixed smooth Dirichlet lift gives $\int_{\partial\Omega}(\varepsilon\partial_\nu u-\kappa)q=0$ for every smooth boundary test $q$, so the continuous boundary difference vanishes pointwise by a nonnegative chart bump supported where it keeps one sign; the classical conormal equality is therefore recovered from the natural weak formulation rather than presupposed. [step 4.1, F2, F1, algebra]

6.1 Joint smoothness in $(x,t)$ and ambient continuation: differences and time derivatives of compatible data stay in the same compatible linear data space, weak $H^1$ continuity follows from the energy estimate, and applying the higher-order estimate to a difference quotient in time minus the solution for the differentiated data makes the error tend to zero in every $H^m$ on compact time patches, since bulk derivatives converge in $H^k$, boundary derivatives in the finite $C^{k+2}$ seminorms and the $H^1$ error tends to zero; induction gives all time derivatives as solutions for the differentiated data, higher-order Sobolev embedding gives one consistent family of all mixed boundary jets, and the fixed parameter-preserving extension [F4] supplies a single smooth ambient continuation; linearity in the data is clear from the construction. [step 2.1, step 2.2, step 4.1, step 5.1, F4, algebra] ∎
