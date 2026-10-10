---
id: lem-em-smooth-forced-maxwell-cauchy-system
kind: lemma
title: "The smooth forced Maxwell Cauchy system on a slab: existence, uniqueness, Gauss constraints and the cone of dependence"
status: draft
origin: pipeline
domain: mathematics
deps: [cor-zero-derivative-implies-constant, thm-em-wave-cauchy-kirchhoff, def-countable-choice, def-ck-euclidean-maps-and-diffeomorphisms, def-divergence-and-curl-of-a-c1-vector-field, def-laplacian-of-a-c2-function, def-wave-equation-cauchy-data-and-wave-speed, def-forward-and-backward-wave-cones-domain-of-dependence-and-influence, def-jacobian-matrix-and-gradient, def-directional-and-partial-derivatives, thm-the-curl-of-a-gradient-vanishes, thm-the-divergence-of-a-curl-vanishes, cor-the-curl-of-a-curl-of-a-c2-field, lem-divergence-and-curl-are-linear-and-obey-the-scalar-product-rules, thm-clairaut-schwarz-mixed-partials, thm-algebra-of-derivatives, thm-algebra-of-total-derivatives]
dependency_roles:
  cor-zero-derivative-implies-constant: mathematical-premise
  thm-em-wave-cauchy-kirchhoff: mathematical-premise
  def-countable-choice: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-divergence-and-curl-of-a-c1-vector-field: mathematical-premise
  def-laplacian-of-a-c2-function: mathematical-premise
  def-wave-equation-cauchy-data-and-wave-speed: mathematical-premise
  def-forward-and-backward-wave-cones-domain-of-dependence-and-influence: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  thm-the-curl-of-a-gradient-vanishes: mathematical-premise
  thm-the-divergence-of-a-curl-vanishes: mathematical-premise
  cor-the-curl-of-a-curl-of-a-c2-field: mathematical-premise
  lem-divergence-and-curl-are-linear-and-obey-the-scalar-product-rules: mathematical-premise
  thm-clairaut-schwarz-mixed-partials: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-algebra-of-total-derivatives: mathematical-premise
pipeline_run: physics-em-sr-40-2026-10-08
dependency_level: 3
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript, AMS Graduate Studies in Mathematics)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "section 7.1, printed p. 173, Problem 7.9: the vacuum Maxwell system with the hint that the components satisfy the wave equation with c=(mu_0 epsilon_0)^{-1/2}; section 7.3, printed pp. 176-178, Theorem 7.12 with (7.29): the local energy identity and the cone of dependence"
    - title: "Victor Ivrii, Partial Differential Equations (University of Toronto lecture-note textbook, 2026 printing, CC BY-SA)"
      url: "https://www.math.toronto.edu/courses/apm346h1/20181/PDE-textbook/PDE-textbook.pdf"
      locator: "section 9.2.1-9.2.3, printed pp. 289-292: the local energy identity, Proposition 9.2.1 and the domain-of-dependence argument for u_tt-c^2 Delta u=f"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
---

## Statement

Assume the Axiom of Countable Choice ($\mathrm{AC}_\omega$) through [[thm-em-wave-cauchy-kirchhoff]] ([[def-countable-choice]]). Let $c,\varepsilon,\mu>0$ with $\varepsilon\mu c^2=1$, let $t_0<T$, and let $\rho:\mathbb R^3\times[t_0,T]\to\mathbb R$ and $J:\mathbb R^3\times[t_0,T]\to\mathbb R^3$ be of class $C^\infty$ in the extension sense (restrictions of $C^\infty$ functions on $\mathbb R^3\times I_{\rm ext}$ for some open interval $I_{\rm ext}\supset[t_0,T]$, [[def-ck-euclidean-maps-and-diffeomorphisms]]) satisfying the continuity equation

$$\partial_t\rho+\operatorname{div}J=0\qquad\text{on }\mathbb R^3\times(t_0,T).$$

Let $E_0,B_0\in C^\infty(\mathbb R^3;\mathbb R^3)$ satisfy $\operatorname{div}E_0=\rho(\cdot,t_0)/\varepsilon$ and $\operatorname{div}B_0=0$ on $\mathbb R^3$. Then:

(a) the first-order system

$$\partial_tE=c^2\operatorname{curl}B-\frac{J}{\varepsilon},\qquad \partial_tB=-\operatorname{curl}E\qquad\text{on }\mathbb R^3\times(t_0,T),$$

with $E(\cdot,t_0)=E_0$, $B(\cdot,t_0)=B_0$, has exactly one solution $(E,B)$ with $E,B$ of class $C^\infty$ on $\mathbb R^3\times[t_0,T]$ in the extension sense;

(b) this solution obeys both Gauss laws on $\mathbb R^3\times(t_0,T)$: $\operatorname{div}E=\rho/\varepsilon$ and $\operatorname{div}B=0$;

(c) (domain of dependence) if $(\tilde\rho,\tilde J,\tilde E_0,\tilde B_0)$ is second data of the same kind and, for some $x_*\in\mathbb R^3$ and $t_*\in(t_0,T]$, one has $\tilde E_0=E_0$, $\tilde B_0=B_0$ on the closed base ball $\overline B_{c(t_*-t_0)}(x_*)$ and $\tilde\rho=\rho$, $\tilde J=J$ on the closed backward cone $K(x_*,t_*)=\{(y,v):|y-x_*|\le c(t_*-v),\ t_0\le v\le t_*\}$ ([[def-forward-and-backward-wave-cones-domain-of-dependence-and-influence]]), then $\tilde E(x_*,t_*)=E(x_*,t_*)$ and $\tilde B(x_*,t_*)=B(x_*,t_*)$.

This is a statement about the stipulated smooth system with coefficients and sources given; no physical identification of $(E,B)$ with an electromagnetic field, no finite-domain boundary problem and no decay at spatial infinity is asserted.

## Facts & Assumptions

**Given:** The constants $c,\varepsilon,\mu>0$ with $\varepsilon\mu c^2=1$, the times $t_0<T$, the extension-sense smooth sources $\rho,J$ with $\partial_t\rho+\operatorname{div}J=0$, and the data $E_0,B_0$ with the two constraint identities.

[F1] Put $W=c^{-2}\partial_t^2-\Delta$. For every $a,b\in C^\infty(\mathbb R^3)$ and every extension-sense smooth source $h$ on the slab there is a unique extension-sense $C^2$ function $u$ with $Wu=h$ on $\mathbb R^3\times(t_0,T)$, $u(\cdot,t_0)=a$, $\partial_tu(\cdot,t_0)=b$; it is $C^\infty$ in the extension sense. Moreover, if $\tilde a,\tilde b,\tilde h$ are second data with $\tilde a=a$, $\tilde b=b$ on a closed ball $\bar B_{c(t_*-t_0)}(x_*)$ and $\tilde h=h$ on the closed backward cone $K(x_*,t_*)$, then the corresponding solutions agree at $(x_*,t_*)$. The theorem assumes $\mathrm{AC}_\omega$ ([[thm-em-wave-cauchy-kirchhoff]]).

[F2] If $\phi$ is $C^2$ then $\operatorname{curl}\nabla\phi=0$ wherever defined ([[thm-the-curl-of-a-gradient-vanishes]]).

[F3] If $F$ is a $C^2$ field then $\operatorname{div}(\operatorname{curl}F)=0$ ([[thm-the-divergence-of-a-curl-vanishes]]).

[F4] If $F$ is a $C^2$ field on an open subset of $\mathbb R^3$, then $\operatorname{curl}\operatorname{curl}F=\nabla\operatorname{div}F-\Delta F$ ([[cor-the-curl-of-a-curl-of-a-c2-field]]).

[F5] Divergence and curl are linear on $C^1$ fields, and $\operatorname{div}(fF)=\langle\nabla f,F\rangle+f\operatorname{div}F$ ([[lem-divergence-and-curl-are-linear-and-obey-the-scalar-product-rules]]).

[F6] If $\phi$ is $C^2$ on an open subset of $\mathbb R^m$ then $\partial_i\partial_j\phi=\partial_j\partial_i\phi$ ([[thm-clairaut-schwarz-mixed-partials]]).

[F7] One-variable derivatives are linear and obey the sum rule, and total derivatives are additive and homogeneous ([[thm-algebra-of-derivatives]], [[thm-algebra-of-total-derivatives]]).

[F8] $\operatorname{div}F=\sum_i\partial_iF_i$ for $C^1$ $F$, $\operatorname{curl}F=(\partial_yF_z-\partial_zF_y,\partial_zF_x-\partial_xF_z,\partial_xF_y-\partial_yF_x)$ for $C^1$ $F$ on open subsets of $\mathbb R^3$, $\Delta f=\operatorname{div}\nabla f$ for $C^2$ scalars, partial derivatives are one-variable derivatives along coordinate lines, and $\nabla f=(\partial_0f,\partial_1f,\partial_2f)$ ([[def-divergence-and-curl-of-a-c1-vector-field]], [[def-laplacian-of-a-c2-function]], [[def-directional-and-partial-derivatives]], [[def-jacobian-matrix-and-gradient]]).

[F9] A map is of class $C^k$ when each component is, in the extension sense on a closed time slab when it is the restriction of a $C^k$ map on an open time neighbourhood ([[def-ck-euclidean-maps-and-diffeomorphisms]]).

[F10] The closed backward cone with vertex $(x_*,t_*)$ is $K(x_*,t_*)=\{(y,v):|y-x_*|\le c(t_*-v),\ t_0\le v\le t_*\}$, with base ball $\overline B_{c(t_*-t_0)}(x_*)$ ([[def-forward-and-backward-wave-cones-domain-of-dependence-and-influence]]).

[F11] A continuous function on an interval with zero derivative at every interior point is constant ([[cor-zero-derivative-implies-constant]]).

[A1] The Axiom of Countable Choice $\mathrm{AC}_\omega$ ([[def-countable-choice]]).

## Proof

**Proof technique:** direct.

1.1 Existence. Define $E$ componentwise by [F1] on the slab with data $E(\cdot,t_0)=E_0$, $\partial_tE(\cdot,t_0)=c^2\operatorname{curl}B_0-J(\cdot,t_0)/\varepsilon$ and source $-\nabla\rho/\varepsilon-\mu\partial_tJ$, and $B$ componentwise by [F1] with data $B(\cdot,t_0)=B_0$, $\partial_tB(\cdot,t_0)=-\operatorname{curl}E_0$ and source $\mu\operatorname{curl}J$. All data and sources are smooth in the extension sense because $\rho,J,E_0,B_0$ are, and $\operatorname{curl}$ and $\nabla$ are finite combinations of first partial derivatives; hence $E$ and $B$ are of class $C^\infty$ on the slab in the extension sense. [given, F1, F8, F9, A1]

2.1 The first-order equations. Put $R:=E_t-c^2\operatorname{curl}B+J/\varepsilon$ and $Q:=B_t+\operatorname{curl}E$. Since $\partial_t$ commutes with $W$ on $C^\infty$ functions and $\operatorname{curl}$ commutes with $W$ on $C^\infty$ fields (both are finite combinations of constant-coefficient first and second partial derivatives, and mixed partials commute), the wave equations of step 1.1 give $W(E_t)=(WE)_t=-\nabla\rho_t/\varepsilon-\mu J_{tt}$, $W(\operatorname{curl}B)=\operatorname{curl}(WB)=\mu\operatorname{curl}\operatorname{curl}J$ and $W(J/\varepsilon)=c^{-2}J_{tt}/\varepsilon-\Delta J/\varepsilon=\mu J_{tt}-c^2\mu\Delta J$. Adding, with $\varepsilon\mu c^2=1$ and so $c^2\mu=1/\varepsilon$, the $J_{tt}$ and $\Delta J$ terms cancel and $WR=-\nabla\rho_t/\varepsilon-c^2\mu\nabla\operatorname{div}J=-\nabla(\rho_t+\operatorname{div}J)/\varepsilon=0$ by the continuity equation. Likewise $WQ=(WB)_t+\operatorname{curl}(WE)=\mu\operatorname{curl}J_t+\operatorname{curl}(-\nabla\rho/\varepsilon-\mu J_t)=0$, using $\operatorname{curl}\nabla\rho=0$ and the interchange of $\operatorname{curl}$ with $\partial_t$. At $t_0$: $R(t_0)=E_t(t_0)-c^2\operatorname{curl}B_0+J(\cdot,t_0)/\varepsilon=0$ and $Q(t_0)=B_t(t_0)+\operatorname{curl}E_0=0$ by the prescribed data. For the time derivatives at $t_0$: $E_{tt}(t_0)=c^2\Delta E_0+c^2(WE)(t_0)=c^2\Delta E_0-c^2\nabla\rho(\cdot,t_0)/\varepsilon-c^2\mu J_t(\cdot,t_0)$ and $c^2\operatorname{curl}\operatorname{curl}E_0=c^2\nabla\operatorname{div}E_0-c^2\Delta E_0=c^2\nabla(\rho(\cdot,t_0)/\varepsilon)-c^2\Delta E_0$, so $R_t(t_0)=E_{tt}(t_0)+c^2\operatorname{curl}\operatorname{curl}E_0+J_t(\cdot,t_0)/\varepsilon=(-c^2\mu+1/\varepsilon)J_t(\cdot,t_0)=0$; similarly $B_{tt}(t_0)=c^2\Delta B_0+c^2(WB)(t_0)=c^2\Delta B_0+c^2\mu\operatorname{curl}J(\cdot,t_0)$ and $Q_t(t_0)=B_{tt}(t_0)+\operatorname{curl}E_t(t_0)=c^2\Delta B_0+c^2\mu\operatorname{curl}J(\cdot,t_0)+c^2\operatorname{curl}\operatorname{curl}B_0-\operatorname{curl}J(\cdot,t_0)/\varepsilon=c^2\nabla\operatorname{div}B_0=0$. Thus $R$ and $Q$ are extension-sense smooth fields with $WR=WQ=0$ on $\mathbb R^3\times(t_0,T)$ and zero initial values and time derivatives; the uniqueness clause of [F1], applied componentwise, gives $R=Q=0$, that is, $E_t=c^2\operatorname{curl}B-J/\varepsilon$ and $B_t=-\operatorname{curl}E$ on the slab. [step 1.1, F1, F2, F4, F5, F6, F7]

3.1 The Gauss laws. Put $D:=\operatorname{div}E-\rho/\varepsilon$. Since $W$ commutes with $\operatorname{div}$ on extension-sense $C^3$ fields, $WD=\operatorname{div}(WE)-(c^{-2}\rho_{tt}-\Delta\rho)/\varepsilon=-\Delta\rho/\varepsilon-\mu\operatorname{div}J_t-(c^{-2}\rho_{tt}-\Delta\rho)/\varepsilon=-\mu(\operatorname{div}J_t+\rho_{tt})=0$, the last equality being the time derivative of the continuity equation. Moreover $D(t_0)=\operatorname{div}E_0-\rho(\cdot,t_0)/\varepsilon=0$ and, using the first-order equation from step 2.1 and $\operatorname{div}\operatorname{curl}=0$, $D_t(t_0)=\operatorname{div}(c^2\operatorname{curl}B_0-J(\cdot,t_0)/\varepsilon)-\rho_t(\cdot,t_0)/\varepsilon=-(\operatorname{div}J+\rho_t)(\cdot,t_0)/\varepsilon=0$. By the uniqueness clause of [F1] componentwise, $D=0$. Likewise $W(\operatorname{div}B)=\operatorname{div}(WB)=\mu\operatorname{div}\operatorname{curl}J=0$, $\operatorname{div}B(t_0)=\operatorname{div}B_0=0$ and $\partial_t\operatorname{div}B(t_0)=-\operatorname{div}\operatorname{curl}E_0=0$, so $\operatorname{div}B=0$ on the slab. [step 1.1, step 2.1, F1, F3, F5, F7]

4.1 Uniqueness and the forced wave problems. Let $(\tilde E,\tilde B)$ be any second $C^\infty$ solution of the first-order system on the slab in the extension sense with the same data. Taking divergence directly in its first-order equations gives $\partial_t(\operatorname{div}\tilde E-\rho/\varepsilon)=-(\operatorname{div}J+\rho_t)/\varepsilon=0$ and $\partial_t\operatorname{div}\tilde B=-\operatorname{div}\operatorname{curl}\tilde E=0$ by [F3] and the continuity equation. For each fixed spatial point these defects have zero derivative, hence are constant in time by [F11], and their initial values vanish; thus $\operatorname{div}\tilde E=\rho/\varepsilon$ and $\operatorname{div}\tilde B=0$. Differentiating $\tilde E_t=c^2\operatorname{curl}\tilde B-J/\varepsilon$ in time and using $\operatorname{curl}\operatorname{curl}=\nabla\operatorname{div}-\Delta$ gives $c^{-2}\tilde E_{tt}=-\operatorname{curl}\operatorname{curl}\tilde E-\mu J_t$, hence $W\tilde E=-\nabla\operatorname{div}\tilde E-\mu J_t=-\nabla\rho/\varepsilon-\mu J_t$, while $W\tilde B=\mu\operatorname{curl}J$. Its initial data and initial time derivatives coincide with those used in step 1.1 (the derivative values are determined by the system and the data: $\tilde E_t(\cdot,t_0)=c^2\operatorname{curl}B_0-J(\cdot,t_0)/\varepsilon$ and $\tilde B_t(\cdot,t_0)=-\operatorname{curl}E_0$). By the uniqueness clause of [F1] applied componentwise, $\tilde E=E$ and $\tilde B=B$. [step 1.1, step 3.1, F1, F2, F3, F4, F5, F6, F11]

5.1 Domain of dependence. Let $(\tilde\rho,\tilde J,\tilde E_0,\tilde B_0)$ be second data as in the Statement, with corresponding solution $(\tilde E,\tilde B)$ furnished by step 1.1, and fix $x_*\in\mathbb R^3$, $t_*\in(t_0,T]$. By step 4.1's reduction, $E$ solves the wave problem with source $-\nabla\rho/\varepsilon-\mu\partial_tJ$ and initial data $E_0$, $c^2\operatorname{curl}B_0-J(\cdot,t_0)/\varepsilon$, and $\tilde E$ solves the corresponding wave problem with hatted data. The data agree on the closed base ball $\overline B_{c(t_*-t_0)}(x_*)$: the displacement data agree by hypothesis, and the time-derivative data $c^2\operatorname{curl}B_0-J(\cdot,t_0)/\varepsilon$ agree because $B_0=\tilde B_0$ and $J(\cdot,t_0)=\tilde J(\cdot,t_0)$ there (the latter is the base of the cone in [F10]). The sources agree on the closed backward cone: $\rho,J$ and their first partial derivatives agree on the cone, since the identity holds on the open cone (for $\rho,J$ by hypothesis, for the derivatives by the same local differential expressions) and all these functions are continuous on the closed cone, on which they agree by continuity. Applying the cone clause of [F1] to each component of the wave problems for $E$ and $\tilde E$ gives $\tilde E(x_*,t_*)=E(x_*,t_*)$; the same argument, with source $\mu\operatorname{curl}J$ and initial data $B_0$, $-\operatorname{curl}E_0$, gives $\tilde B(x_*,t_*)=B(x_*,t_*)$. [step 1.1, step 4.1, F1, F10] ∎

## Remarks

- **Choice accounting.** The countable-choice assumption enters only through the existence, uniqueness and cone clauses of the wave theorem [F1]; all differential-algebraic steps are choice-free. The statement records this by assuming $\mathrm{AC}_\omega$ globally.

- **Role of the constraint hypotheses.** $\operatorname{div}E_0=\rho(\cdot,t_0)/\varepsilon$ and $\operatorname{div}B_0=0$ are used in step 2.1 to propagate the Gauss laws; without them the first-order system would still have a unique solution but the first-order divergence identities would keep the corresponding initial Gauss defects constant in time at each spatial point. The continuity equation is used in steps 2.1, 3.1 and 4.1.

- **No physical claim.** The constants $c,\varepsilon,\mu$ are parameters of the mathematical system; no identification with an electromagnetic field or with SI quantities is made here.
