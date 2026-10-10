---
id: pthm-em-lorenz-gauge-wave-form
kind: physics-theorem
title: "Maxwell's equations in potential form: the Lorenz divergence, the decoupled wave equations and residual generators"
domain: physics
status: draft
origin: pipeline
dependency_level: 17
deps: [pthm-em-spacetime-potentials, def-em-gauge-transformation, pthm-em-gauge-invariance, post-em-vacuum-maxwell, def-em-potential-gauge-and-field-conventions, def-em-fields, def-em-sources, lem-em-joint-smooth-potentials, cor-the-curl-of-a-curl-of-a-c2-field, def-laplacian-of-a-c2-function, thm-clairaut-schwarz-mixed-partials, thm-algebra-of-derivatives, lem-divergence-and-curl-are-linear-and-obey-the-scalar-product-rules, thm-the-divergence-of-a-curl-vanishes, thm-the-curl-of-a-gradient-vanishes, def-directional-and-partial-derivatives, def-ck-euclidean-maps-and-diffeomorphisms, def-interval]
dependency_roles:
  pthm-em-spacetime-potentials: physical-result
  def-em-gauge-transformation: formulation-prerequisite
  pthm-em-gauge-invariance: physical-result
  post-em-vacuum-maxwell: physical-assumption
  def-em-potential-gauge-and-field-conventions: mathematical-premise
  def-em-fields: formulation-prerequisite
  def-em-sources: formulation-prerequisite
  lem-em-joint-smooth-potentials: mathematical-premise
  cor-the-curl-of-a-curl-of-a-c2-field: mathematical-premise
  def-laplacian-of-a-c2-function: mathematical-premise
  thm-clairaut-schwarz-mixed-partials: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  lem-divergence-and-curl-are-linear-and-obey-the-scalar-product-rules: mathematical-premise
  thm-the-divergence-of-a-curl-vanishes: mathematical-premise
  thm-the-curl-of-a-gradient-vanishes: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-interval: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "Exact pointwise identities for a given jointly C^2 potential representation of the adopted sourced vacuum Maxwell system. The sourced Maxwell equations are equivalent to the residual equations in (a). Within the separately declared Lorenz gauge G=0 they are equivalent to the two decoupled sourced wave equations. Maxwell alone does not select a gauge representative. Homogeneous-wave gauge generators preserve Lorenz gauge and the fields. No gauge solvability, prescribed data, boundary, decay, empirical observation or observability of potentials is asserted."
sources:
  references:
    - title: "David Tong, Electromagnetism, University of Cambridge Part II Mathematical Tripos lecture notes (2026 printing, 236 pp.)"
      url: "https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf"
      locator: "§6.1 printed pp. 134-135, eqs. (6.1)-(6.4): the potential formulation, the reduction of the Maxwell equations to the sourced wave equation in Lorentz gauge, and the gauge-transformation identity for the divergence"
    - title: "L. D. Landau and E. M. Lifshitz, The Classical Theory of Fields, Third Revised English Edition (Course of Theoretical Physics vol. 2, Pergamon Press 1971, 387 pp.)"
      url: "http://www.elegio.it/mc2/LandauLifshitz_TheClassicalTheoryOfFields_text.pdf"
      locator: "§18 printed pp. 49-50: the gauge transformation and its effect on the potentials, with the fields unchanged"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript, AMS Graduate Studies in Mathematics)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "§7.1 printed pp. 167-170, eqs. (7.1)-(7.2): the d'Alembert operator and the wave equation normalization u_tt = c^2 Delta u converted to the framework's W = c^{-2} d_t^2 - Delta"
verification:
  precheck: pass
---

## Statement

Let $c>0$, let $\Omega\subseteq\mathbb R^3$ be open, let $I\subseteq\mathbb R$ be an interval with at least two elements ([[def-interval]]), and let $(\varphi,A)$ be a potential pair of class $C^2$ jointly on $\Omega\times I$ in the restriction convention of [[lem-em-joint-smooth-potentials]] ([[def-em-potential-gauge-and-field-conventions]]): for open $I$ this is the ordinary open-domain class of [[def-ck-euclidean-maps-and-diffeomorphisms]], and for non-open $I$ the pair is the restriction of a $C^2$ pair on an open neighbourhood of $\Omega\times I$, with relative derivatives at included endpoints and no time jet beyond the restricted values. Write $(E,B)$ for the field pair of $(\varphi,A)$ ([[def-em-fields]]) and

$$G:=\operatorname{div}A+c^{-2}\partial_t\varphi,\qquad W:=c^{-2}\partial_t^2-\Delta$$

for the Lorenz divergence and the wave expression of [[def-em-potential-gauge-and-field-conventions]], with $\Delta$ the Laplacian of [[def-laplacian-of-a-c2-function]]. Let $\rho:\Omega\times I\to\mathbb R$ and $J:\Omega\times I\to\mathbb R^3$ be continuous source fields of the framework ([[def-em-sources]]).

(a) [Exact identities] Independently of any field equation,

$$\operatorname{div}E=W\varphi-\partial_tG,\qquad \operatorname{curl}B-c^{-2}\partial_tE=WA+\nabla G\qquad\text{on }\Omega\times I.$$

Consequently the sourced Maxwell equations of [[post-em-vacuum-maxwell]] hold for $(E,B,\rho,J)$ if and only if

$$W\varphi-\partial_tG=\frac{\rho}{\varepsilon_0},\qquad WA+\nabla G=\mu_0J\qquad\text{on }\Omega\times I,$$

with $\varepsilon_0=(\mu_0c^2)^{-1}$ the constant of that postulate.

(b) [Gauge shift] If $\chi:\Omega\times I\to\mathbb R$ is a gauge function of class $C^2$ jointly on $\Omega\times I$ ([[def-em-gauge-transformation]]), then $G(T_\chi(\varphi,A))=G-W\chi$ on $\Omega\times I$ and the transformed pair has the same field pair $(E,B)$ ([[pthm-em-gauge-invariance]]); hence $T_\chi(\varphi,A)$ is in Lorenz gauge if and only if $W\chi=G$ on $\Omega\times I$.

(c) [Decoupling in Lorenz gauge] Suppose in addition that the given pair is in Lorenz gauge, $G=0$ on $\Omega\times I$. Then its field pair solves the sourced Maxwell system of [[post-em-vacuum-maxwell]] if and only if the pair satisfies the decoupled sourced wave equations

$$W\varphi=\rho/\varepsilon_0,\qquad WA=\mu_0J\qquad\text{on }\Omega\times I.$$

The two source-free equations $\operatorname{div}B=0$ and $\operatorname{curl}E=-\partial_tB$ hold automatically for every potential pair of class $C^2$. For an arbitrary given potential pair, the conjunction of Lorenz gauge with these two wave equations implies the sourced Maxwell system, but Maxwell's equations alone do not impose $G=0$ on that representative: their exact equivalent conditions remain the residual equations of (a), whose right-hand sides retain $\partial_tG$ and $\nabla G$.

(d) [Residual generators] If the $C^2$ gauge function of (b) satisfies $W\chi=0$ on $\Omega\times I$, then the transform of a pair in Lorenz gauge is again in Lorenz gauge and has the same field pair. When $\Omega$ is nonempty the Lorenz condition does not determine the pair: the generator $\chi(x,t)=x_1$, read in numerical SI components with gauge units as in [[def-em-gauge-transformation]], has $W\chi=0$ and changes $A$ by the nonzero constant vector $(1,0,0)$.

(e) [Scope] The identities and equivalences are properties of the given $C^2$ representation. No gauge function with $W\chi=G$, and no generator meeting prescribed initial or boundary values, is asserted to exist; that is a separate PDE conclusion with its own hypotheses, treated by the gauge-reachability theorem later on this page. No boundary, decay or initial condition on the pair is imposed, and no empirical claim or observability of $\varphi$ or $A$ is included. A pair of class $C^1$ defines $E$, $B$ and $G$ but need not possess the second derivatives appearing in $W\varphi$, $WA$, $\Delta$ or $\partial_tG$, so $C^2$ is the exact standing regularity here.

## Facts & Assumptions

**Given:** A constant $c>0$, an open set $\Omega\subseteq\mathbb R^3$, an interval $I\subseteq\mathbb R$ with at least two elements, a potential pair $(\varphi,A)$ of class $C^2$ jointly on $\Omega\times I$ in the restriction convention, its field pair $(E,B)$, the functions $G$ and $W$ displayed in the Statement, and continuous source fields $\rho,J$.

[F1] Potential-pair vocabulary: for a pair $(\varphi,A)$ of class $C^m$, $m\ge1$, on an open set the electric and magnetic fields are $E=-\nabla\varphi-\partial_tA$ and $B=\operatorname{curl}A$ and are of class $C^{m-1}$; the Lorenz divergence is $G=\operatorname{div}A+c^{-2}\partial_t\varphi$, of class $C^{m-1}$; for $k\ge2$ the gauge transform of a class $C^k$ pair by a class $C^k$ function is $T_\chi(\varphi,A)=(\varphi-\partial_t\chi,\ A+\nabla\chi)$, of class $C^{k-1}$; the wave expression is $Wu=c^{-2}\partial_t^2u-\Delta u$ for class $C^2$ scalar and componentwise vector arguments; a pair is in Lorenz gauge when $G=0$; the definition asserts no existence or solvability ([[def-em-potential-gauge-and-field-conventions]]).

[F2] Restriction convention for a possibly non-open time interval: joint $C^m$ regularity on $\Omega\times I$ means restriction of a $C^m$ map on an open neighbourhood of $\Omega\times I$ in $\mathbb R^4$, spatial identities hold at every point of $\Omega\times I$ and time derivatives at included endpoints are the relative one-sided derivatives of the restriction; for open $I$ this is the ordinary class ([[lem-em-joint-smooth-potentials]]).

[F3] Framework vocabulary: $E$ and $B$ are the fixed-time spatial fields of the framework with the stated regularity and the polar/axial convention ([[def-em-fields]]); a smooth source field $(\rho,J)$ consists of maps continuous on $\Omega\times I$ and of class $C^1$ wherever a displayed equation differentiates them ([[def-em-sources]]).

[F4] Linearity and algebra of derivatives: for $C^1$ fields $F,H$ on an open set and reals $\alpha,\beta$, $\operatorname{div}(\alpha F+\beta H)=\alpha\operatorname{div}F+\beta\operatorname{div}H$ and $\operatorname{curl}(\alpha F+\beta H)=\alpha\operatorname{curl}F+\beta\operatorname{curl}H$; partial derivatives are one-variable derivatives along coordinate lines and obey the sum and product rules componentwise ([[lem-divergence-and-curl-are-linear-and-obey-the-scalar-product-rules]], [[def-directional-and-partial-derivatives]], [[thm-algebra-of-derivatives]]).

[F5] Clairaut--Schwarz: mixed coordinate partial derivatives of a $C^2$ function on an open subset of $\mathbb R^m$ commute, so for the jointly $C^2$ functions $\varphi$, $A$ and $\chi$ the identities $\partial_t\partial_i=\partial_i\partial_t$ hold componentwise and $\partial_i\partial_j=\partial_j\partial_i$ ([[thm-clairaut-schwarz-mixed-partials]]).

[F6] Vector identity and Laplacian: for a $C^2$ field $F$ on an open subset of $\mathbb R^3$, $\operatorname{curl}\operatorname{curl}F=\nabla\operatorname{div}F-\Delta F$, and $\Delta F$ is the componentwise Laplacian defined by $\Delta f=\operatorname{div}\nabla f=\sum_i\partial_i\partial_if$ ([[cor-the-curl-of-a-curl-of-a-c2-field]], [[def-laplacian-of-a-c2-function]]).

[F7] Automatic source-free identities: for a $C^2$ field $F$ on an open subset of $\mathbb R^3$ one has $\operatorname{div}\operatorname{curl}F=0$, and for a $C^2$ scalar $f$ one has $\operatorname{curl}\nabla f=0$ ([[thm-the-divergence-of-a-curl-vanishes]], [[thm-the-curl-of-a-gradient-vanishes]]).

[F8] The adopted microscopic vacuum Maxwell equations in their smooth branch: for jointly $C^1$ fields with the additional derivatives required by each equation and continuous sources, $\operatorname{div}E=\rho/\varepsilon_0$, $\operatorname{div}B=0$, $\operatorname{curl}E=-\partial_tB$ and $\operatorname{curl}B=\mu_0J+c^{-2}\partial_tE$, with $\mu_0>0$, $c>0$ and $\varepsilon_0=(\mu_0c^2)^{-1}$ ([[post-em-vacuum-maxwell]]).

[F9] Gauge invariance: if $(\varphi,A)$ is a potential pair of class $C^k$ jointly with $k\ge2$ and $\chi$ a gauge function of class $C^k$ jointly, then $T_\chi(\varphi,A)$ has the same field pair as $(\varphi,A)$ ([[pthm-em-gauge-invariance]], [[def-em-gauge-transformation]]).

## Proof

**Proof technique:** direct; expand the two second-order combinations of $E$ and $B$ defined by the potential formulas with the linearity, mixed-partial and curl-of-curl identities, then compare the resulting equations with the sourced postulate and expand the gauge transform of $G$.

1.1 Regularity bookkeeping. The pair $(\varphi,A)$ is $C^2$, so by [F1] the field pair $(E,B)$ and the Lorenz divergence $G$ are of class $C^1$ and the expressions $W\varphi$, $WA$, $\partial_tG$ and $\nabla G$ are defined and continuous on $\Omega\times I$; at included endpoints of a non-open $I$ all derivatives are those of the restriction convention [F2]. Hence both identities displayed in (a) are equalities of continuous functions on $\Omega\times I$. [given, F1, F2]

2.1 First identity. By [F1] and the linearity of the divergence [F4], $\operatorname{div}E=\operatorname{div}(-\nabla\varphi-\partial_tA)=-\operatorname{div}\nabla\varphi-\operatorname{div}\partial_tA$. The definition of the Laplacian [F6] gives $\operatorname{div}\nabla\varphi=\Delta\varphi$, and the componentwise commutation of the time and space partial derivatives of the $C^2$ field $A$ [F5] gives $\operatorname{div}\partial_tA=\partial_t\operatorname{div}A$. On the other hand, expanding $G$ [F1] and using the linearity of $\partial_t$ and of $\Delta$ [F4] with [F5], $W\varphi-\partial_tG=(c^{-2}\partial_t^2\varphi-\Delta\varphi)-(\partial_t\operatorname{div}A+c^{-2}\partial_t^2\varphi)=-\Delta\varphi-\partial_t\operatorname{div}A$. The two right-hand sides agree, so $\operatorname{div}E=W\varphi-\partial_tG$ on $\Omega\times I$. [step 1.1, F1, F4, F5, F6]

2.2 Second identity. By [F1] and the linearity of the curl and of $\partial_t$ [F4], $\operatorname{curl}B-c^{-2}\partial_tE=\operatorname{curl}\operatorname{curl}A+c^{-2}\partial_t\nabla\varphi+c^{-2}\partial_t^2A$. The curl-of-curl identity [F6] rewrites the first term as $\nabla\operatorname{div}A-\Delta A$; the componentwise commutation [F5] for the $C^2$ function $\varphi$ rewrites $c^{-2}\partial_t\nabla\varphi$ as $c^{-2}\nabla\partial_t\varphi=\nabla(c^{-2}\partial_t\varphi)$; and the last term is one of the two summands of $WA$ [F1]. Collecting terms, $\operatorname{curl}B-c^{-2}\partial_tE=(\nabla\operatorname{div}A+\nabla(c^{-2}\partial_t\varphi))+(c^{-2}\partial_t^2A-\Delta A)=\nabla G+WA$ by the linearity of $\nabla$ [F4] and the definition of $G$, that is $\operatorname{curl}B-c^{-2}\partial_tE=WA+\nabla G$ on $\Omega\times I$. [step 1.1, F1, F4, F5, F6]

2.3 Automatic source-free equations. For the potential pair, $\operatorname{div}B=\operatorname{div}\operatorname{curl}A=0$ by [F7], and $\operatorname{curl}E=\operatorname{curl}(-\nabla\varphi-\partial_tA)=-\operatorname{curl}\nabla\varphi-\operatorname{curl}\partial_tA$ by linearity [F4]; the first term vanishes by [F7] applied to the $C^2$ function $\varphi$, and the second equals $\partial_t\operatorname{curl}A=\partial_tB$ by the componentwise commutation [F5], so $\operatorname{curl}E=-\partial_tB$ on $\Omega\times I$. [step 1.1, F1, F4, F5, F7]

2.4 Gauge shift and the Lorenz condition. Let $\chi$ be a gauge function of class $C^2$ jointly. By [F1] the transform $T_\chi(\varphi,A)=(\varphi-\partial_t\chi,\ A+\nabla\chi)$ is a potential pair of class $C^1$, so its Lorenz divergence is defined; expanding it with the linearity of $\operatorname{div}$ [F4] and the definitions [F1], $G(T_\chi(\varphi,A))=\operatorname{div}A+\operatorname{div}\nabla\chi+c^{-2}\partial_t\varphi-c^{-2}\partial_t^2\chi=G+\Delta\chi-c^{-2}\partial_t^2\chi=G-W\chi$, the middle identity using $\operatorname{div}\nabla\chi=\Delta\chi$ [F6] and the last the definition of $W$ [F1]. Thus $G(T_\chi(\varphi,A))=0$ if and only if $W\chi=G$ on $\Omega\times I$; and the field pair is unchanged by [F9], so the transformed pair represents the same $(E,B)$ of [F3]. [step 1.1, F1, F4, F6, F9]

3.1 Equivalence with the sourced system. By [F8] the sourced Maxwell equations for $(E,B,\rho,J)$ are the four identities $\operatorname{div}E=\rho/\varepsilon_0$, $\operatorname{div}B=0$, $\operatorname{curl}E=-\partial_tB$ and $\operatorname{curl}B=\mu_0J+c^{-2}\partial_tE$ on $\Omega\times I$; the pair $(E,B)$ is of class $C^1$ by step 1.1 with all derivatives required by those equations existing and continuous, and $\rho,J$ are continuous by [F3]. The second and third identities hold identically by step 2.3. The first is equivalent, by step 2.1, to $W\varphi-\partial_tG=\rho/\varepsilon_0$, and the fourth is equivalent, by step 2.2, to $WA+\nabla G=\mu_0J$. Hence the sourced Maxwell equations hold for $(E,B,\rho,J)$ if and only if the two residual equations of (a) hold. [step 2.1, step 2.2, step 2.3, F3, F8]

3.2 Residual generators. If in addition to $G=0$ the gauge function satisfies $W\chi=0$ on $\Omega\times I$, then step 2.4 gives $G(T_\chi(\varphi,A))=G-W\chi=0$, so the transformed pair is again in Lorenz gauge, and by [F9] it has the same field pair. For nonempty $\Omega$, take $\chi(x,t)=x_1$: all its second partial derivatives vanish, hence $W\chi=0$, while $\partial_t\chi=0$ and $\nabla\chi=(1,0,0)$, so $T_\chi(\varphi,A)=(\varphi,A+(1,0,0))$ is distinct from $(\varphi,A)$ on the nonempty product. Thus the Lorenz condition does not determine the pair on a nonempty region. On empty $\Omega$ all identities are vacuous and there is only one potential pair. [step 2.4, F1, F4, F9]

4.1 Decoupling under the Lorenz condition. Assume additionally $G=0$ on $\Omega\times I$. Then the $C^1$ function $G$ has $\partial_tG=0$ and $\nabla G=0$ on $\Omega\times I$ by [F4]: each spatial restriction is identically zero, and the time restriction is identically zero on the nondegenerate interval $I$, so its interior and relative endpoint difference quotients vanish. Hence the residual equations of step 3.1 read $W\varphi=\rho/\varepsilon_0$ and $WA=\mu_0J$ there; conversely, if these two wave equations hold then the residual equations hold and, by step 3.1, the sourced Maxwell system holds for the pair. This equivalence is asserted only under the explicitly imposed hypothesis $G=0$: for a general representative the equivalent conditions are the residual equations of step 3.1, which contain the derivatives $\partial_tG$ and $\nabla G$ of the representative's own Lorenz divergence, and no step infers $G=0$ from the Maxwell equations. [step 2.3, step 3.1, F4, algebra]

5.1 Conclusion and scope. Step 2.1 and step 2.2 give the exact pointwise identities of (a), and step 3.1 identifies the two residual equations with the sourced Maxwell system; step 2.3 records the two automatic source-free equations. Step 2.4 gives the gauge shift and the equivalence of the Lorenz condition for the transform with $W\chi=G$; step 4.1 gives the decoupling inside $G=0$, with the explicit warning that Maxwell alone does not impose that condition; and step 3.2 gives the residual generators. Throughout, no existence of a solution of $W\chi=G$ or of a generator with prescribed data is asserted, no boundary, decay or initial condition is imposed, and $C^2$ is the exact standing regularity: for a merely $C^1$ pair the expressions $W\varphi$, $WA$, $\Delta$ and $\partial_tG$ of the Statement need not exist. No choice principle is used, and no hypothesis is made on the shape of $\Omega$ beyond openness. [step 2.1, step 2.2, step 2.3, step 3.1, step 2.4, step 4.1, step 3.2, F1, F2] ∎

## Remarks

- **Direction of the gauge statement.** The identities of (a) hold with no field equation at all. The hypothesis $G=0$ in (c) is an extra condition on the representative; the theorem never claims that every pair can be brought to Lorenz gauge, only that *if* $G=0$ then the sourced system is exactly the two decoupled wave equations, and that a gauge generator can enforce $G=0$ only under the separate hypotheses of the reachability theorem on this page.
- **Time-domain qualification.** An empty time domain gives only vacuous identities. For a singleton time, time jets are not determined by the restricted values. A singleton version is obtained by supplying ambient functions on an open time interval, imposing the same-field, field-equation or Lorenz hypotheses used by the relevant implication on that interval, and restricting its conclusion. Merely requiring $G=0$ at one time does not give $\partial_tG=0$ there; for example, the ambient pair $\varphi(x,t)=t^2$, $A=0$ has $G(x,0)=0$ but $\partial_tG(x,0)=2c^{-2}$.

- **Constant bookkeeping.** The identity $\operatorname{curl}B-c^{-2}\partial_tE=WA+\nabla G$ produces the two Maxwell source constants directly: comparing with [F8] gives $W\varphi=\rho/\varepsilon_0$ and $WA=\mu_0J$ in Lorenz gauge with $\varepsilon_0=(\mu_0c^2)^{-1}$, so no separate factor is introduced anywhere.
