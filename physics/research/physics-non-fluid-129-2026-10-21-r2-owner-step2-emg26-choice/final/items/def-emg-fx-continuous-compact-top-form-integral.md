---
id: def-emg-fx-continuous-compact-top-form-integral
kind: definition
title: Continuous compact-support integration for the constitutive action
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 0
deps:
  - def-countable-choice
  - def-oriented-smooth-manifold-and-oriented-chart
  - thm-heine-borel-rn
  - lem-euclidean-bump-for-a-compact-set-inside-an-open-set
  - def-multidimensional-darboux-integral
  - def-multidimensional-darboux-sums
  - thm-continuous-on-a-rectangle-is-riemann-integrable
  - lem-compactly-supported-riemann-integral-is-well-defined
  - cor-change-of-variables-for-compactly-supported-functions
  - thm-multidimensional-integral-properties
  - def-integral-of-a-compactly-supported-top-form-on-an-oriented-manifold
  - thm-global-form-integration-is-independent-of-the-atlas-partition-and-refinement
dependency_roles:
  def-countable-choice: mathematical-premise
  def-oriented-smooth-manifold-and-oriented-chart: mathematical-premise
  thm-heine-borel-rn: mathematical-premise
  lem-euclidean-bump-for-a-compact-set-inside-an-open-set: mathematical-premise
  def-multidimensional-darboux-integral: mathematical-premise
  def-multidimensional-darboux-sums: mathematical-premise
  thm-continuous-on-a-rectangle-is-riemann-integrable: mathematical-premise
  lem-compactly-supported-riemann-integral-is-well-defined: mathematical-premise
  cor-change-of-variables-for-compactly-supported-functions: mathematical-premise
  thm-multidimensional-integral-properties: mathematical-premise
  def-integral-of-a-compactly-supported-top-form-on-an-oriented-manifold: mathematical-premise
  thm-global-form-integration-is-independent-of-the-atlas-partition-and-refinement: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: John M. Lee, Introduction to Smooth Manifolds, Chapter 16, chart-partition integration formula
      url: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf
      locator: The existing pinned smooth integration definitions cite pp. 404–406. Their formula is extended to continuous coefficients by the local proof below; no new external full-text reading is claimed.
---

## Definition

Assume Countable Choice, meaning that every countable family of nonempty sets has a choice function. Let $M$ be a smooth Hausdorff second-countable oriented four-manifold without boundary. A continuous real top form is a continuous section of $\Lambda^4T^*M$: in every smooth coordinate chart it has the form $f(x)\,dx^1\wedge dx^2\wedge dx^3\wedge dx^4$ with continuous real coefficient $f$, and the coefficients transform by the determinant of the coordinate-transition derivative. Its support is the closure in $M$ of its nonzero locus. Write $C_c^0(\Lambda^4T^*M)$ for these forms with compact support.

For $\omega\in C_c^0(\Lambda^4T^*M)$, put $K=\operatorname{supp}\omega$. If $K=\varnothing$, define its integral to be zero. Otherwise choose finitely many positively oriented charts $(U_i,\phi_i)$ and smooth functions $\chi_i:M\to[0,1]$ with compact support contained in $U_i$, such that $\sum_i\chi_i=1$ on a neighborhood of $K$. Write
$$
(\phi_i^{-1})^*(\chi_i\omega)=f_i\,dx^1\wedge dx^2\wedge dx^3\wedge dx^4
$$
on $\phi_i(U_i)$ and extend $f_i$ by zero to $\mathbb R^4$, obtaining $\widetilde f_i$. Define
$$
\mathcal I_M(\omega):=\sum_i\int_{\mathbb R^4}\widetilde f_i(x)\,dx,
$$
where each Euclidean integral is the Riemann integral over any closed nondegenerate rectangle whose interior contains its support. Such finite cutoffs exist, each zero extension is continuous and compactly supported, and the value is independent of the chosen charts, cutoffs and bounding rectangles. This is a linear functional on $C_c^0(\Lambda^4T^*M)$. For fixed cutoffs and bounding rectangles $Q_i$, it satisfies $|\mathcal I_M(\omega)|\le\sum_i\operatorname{vol}(Q_i)\sup_{Q_i}|\widetilde f_i|$; thus uniform convergence of these finitely many zero-extended coefficients implies convergence of their integrals. If an open set $V\subseteq M$ contains $K$, then $\mathcal I_V(\omega|_V)=\mathcal I_M(\omega)$, with the restricted orientation. On smooth compactly supported top forms it equals the previously defined smooth manifold integral.

Countable Choice is retained to match that smooth integral's standing convention. The finite-cover construction and comparison for continuous coefficients below require no further choice principle, and do not assume the full Axiom of Choice.

## Definition references

[[def-countable-choice]]

[[def-oriented-smooth-manifold-and-oriented-chart]]

[[def-multidimensional-darboux-integral]]

[[def-integral-of-a-compactly-supported-top-form-on-an-oriented-manifold]]

## Facts & Assumptions

**Given:** Countable Choice, an oriented smooth Hausdorff second-countable boundaryless four-manifold $M$, and a continuous compactly supported real section $\omega$ of its top exterior cotangent bundle, as defined above.

[A1] Countable Choice is the countable-family choice-function statement in [[def-countable-choice]]. Its separate remark that full Choice implies Countable Choice is not an assumption of the converse implication.

[F1] Positive charts have coordinate frames in the supplied orientation ([[def-oriented-smooth-manifold-and-oriented-chart]]). Closed bounded Euclidean sets, including closed balls and rectangles, are compact without a choice principle ([[thm-heine-borel-rn]]). A compact subset of an open Euclidean set has a smooth $[0,1]$-valued bump equal to one there; the supplier's finite-ball construction has compact support inside that open set ([[lem-euclidean-bump-for-a-compact-set-inside-an-open-set]]).

[F2] Continuous functions on closed nondegenerate rectangles are Riemann integrable ([[thm-continuous-on-a-rectangle-is-riemann-integrable]]). A compactly supported Riemann integral is independent of its bounding rectangle ([[lem-compactly-supported-riemann-integral-is-well-defined]]).

[F3] For an injective $C^1$ map $g:U\to\mathbb R^4$ on an open set with invertible derivative, a compactly supported Riemann-integrable $f$ with support inside $g(U)$ satisfies $\int f=\int (f\circ g)|\det Dg|$, with the transformed integrand extended by zero ([[cor-change-of-variables-for-compactly-supported-functions]]).

[F4] The finite Riemann integral is linear and monotone and obeys the absolute-value estimate ([[thm-multidimensional-integral-properties]]). Its Darboux definition and sums give $|\int_Q h|\le\operatorname{vol}(Q)\sup_Q|h|$ for integrable $h$ on a nondegenerate rectangle $Q$ ([[def-multidimensional-darboux-integral]], [[def-multidimensional-darboux-sums]]).

[F5] Under Countable Choice the existing integral of a smooth compactly supported top form is the chart-partition sum, independent of atlas, partition and refinement, and local to any open neighborhood of the support ([[def-integral-of-a-compactly-supported-top-form-on-an-oriented-manifold]], [[thm-global-form-integration-is-independent-of-the-atlas-partition-and-refinement]]). Its stated smoothness hypothesis is not used to assert an integral for nonsmooth forms.

## Proof

1.1 If $K=\varnothing$, the form is zero and the stated zero value needs no charts. Otherwise consider the family of all pairs of concentric coordinate balls $B_i\subset V_i$ in positive charts, with $\overline{B_i}$ compact and contained in $V_i$. Every point of $K$ lies in one such inner ball: openness of a chart image permits two sufficiently small concentric Euclidean balls, whose closed inner ball is compact by [F1]. This forms an open cover without selecting a chart separately at every point. Compactness of $K$ gives finitely many such pairs whose inner balls cover $K$. Apply [F1]'s bump construction for each of these finitely many compact inner balls inside its chart image, pull back and extend by zero, to get smooth $\rho_i:M\to[0,1]$ with compact support inside $V_i$ and $\rho_i=1$ on $B_i$. Only finitely many choices are made. Set $B=\sum_i\rho_i$, so $B\ge1$ on $K$. Let $u(t)=e^{-1/t}$ for $t>0$ and $u(t)=0$ for $t\le0$, and define $q(t)=u(t-1/4)/(u(t-1/4)+u(1/2-t))$. Its denominator is positive for every real $t$; the function $u$ and all its derivatives vanish at zero, so $q$ is smooth, lies in $[0,1]$, is zero for $t\le1/4$ and is one for $t\ge1/2$. Put $\eta=q(B)$ and define $\chi_i=\eta\rho_i/B$ on $\{B>0\}$, extending by zero elsewhere. Since $\eta=0$ for $B\le1/4$, the extension is smooth; its support is a closed subset of the compact support of $\rho_i$ and remains inside $V_i$. Their sum is $\eta$, hence is one on the open neighborhood $\{B>1/2\}$ of $K$. These are the required finite cutoffs. [given, F1, construct, algebra]

2.1 The support of $\chi_i\omega$ is a closed subset of $K\cap\operatorname{supp}\chi_i$, hence compact and contained in its chart. Its coordinate coefficient is continuous there. The coordinate support is compact inside the open chart image, so the zero extension is continuous at artificial chart edges: outside that compact set a neighborhood has identically zero coefficient. On a closed rectangle containing this compact coordinate support the extension is therefore integrable by [F2]. The same fact and [F2]'s bounding-rectangle independence make each summand in the Definition a finite well-defined real number. The rectangle estimate in [F4] and the finite sum give the displayed bound for $|\mathcal I_M(\omega)|$. Applied to coefficient differences with fixed cutoffs and rectangles, this bound proves the stated uniform-limit property. [given, F1, F2, F4, step 1.1, algebra]

3.1 Suppose a continuous top form $\zeta$ has compact support contained in two positive charts $(U,\phi)$ and $(V,\psi)$. On their overlap put $g=\psi\circ\phi^{-1}$; this is a smooth injective diffeomorphism between open Euclidean sets, and $\det Dg>0$ because both charts are positive. If $f_\psi$ is its target coefficient, the defining tensor transformation law gives $f_\phi=(f_\psi\circ g)\det Dg$. The zero-extended target coefficient is continuous with compact support contained in the target overlap, by the argument of step 2.1. All hypotheses of [F3] hold, and the transformed coefficient extended by zero is exactly the source coefficient extended by zero. Consequently their Euclidean integrals agree. This proves the required chart comparison for continuous coefficients directly, without applying the smooth-only claim in [F5] to $\zeta$. [given, F2, F3, step 2.1, algebra]

4.1 Let $(\chi_i,U_i)$ and $(\tau_j,V_j)$ be two finite cutoff systems for $K$. Every $\chi_i\tau_j\omega$ has compact support contained in $U_i\cap V_j$. Near $K$ each cutoff sum is one, and outside $K$ the form vanishes, so $\chi_i\omega=\sum_j\chi_i\tau_j\omega$ and $\tau_j\omega=\sum_i\chi_i\tau_j\omega$. All sums are finite. Apply linearity [F4] and the chart comparison of step 3.1 to each product term. Both proposed integrals equal the same finite double sum, proving independence of cutoff systems and charts. Step 2.1 already proves bounding-rectangle independence. For two compactly supported forms take cutoffs near the union of their supports, which is compact; [F4] then proves linearity in the forms and scalar coefficients. [given, F3, F4, step 1.1, step 2.1, step 3.1, algebra]

5.1 If an open $V\subseteq M$ contains $K$, the construction of step 1.1 may use only coordinate balls with compact closure inside $V$. The same finite coefficient integrals compute $\mathcal I_V(\omega|_V)$ and $\mathcal I_M(\omega)$, so step 4.1 proves locality. Now suppose $\omega$ is smooth. Choose a chart-partition system $(\tau_j,U_j)$ permitted by the smooth integral in [F5]. Only finitely many $\tau_j\omega$ are nonzero near $K$, as part of that integral contract. Comparing this system with the finite cutoffs $\chi_i$ uses the same product identities as in step 4.1: each $\chi_i\tau_j\omega$ is supported compactly in the two chart domains, and step 3.1 identifies its two coordinate integrals. The finite double sum consequently equals both $\mathcal I_M(\omega)$ and the existing smooth chart-partition integral on $M$. Countable Choice enters this comparison only through the explicit convention of [F5]; the finite construction and comparison in steps 1.1–4.1 did not assume full Choice. Thus the continuous integral extends the exact previously defined smooth integral, with the stated locality and linearity. [A1, F1, F2, F4, F5, step 1.1, step 2.1, step 4.1, algebra] ∎
