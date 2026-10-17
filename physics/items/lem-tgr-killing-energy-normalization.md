---
id: lem-tgr-killing-energy-normalization
kind: lemma
title: "Finite Killing energy current and reference normalization"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 4
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-smooth-lorentzian-objects, def-gr-inverse-metric-and-musical-isomorphisms, def-gr-tensor-fields-and-components, def-gr-killing-field, thm-gr-killing-and-on-shell-matter-identities, def-countable-choice, thm-gr-nondegenerate-levi-civita-and-tensor-derivative, def-tgr-spacelike-current-slab, thm-tgr-finite-current-production-balance]
dependency_roles:
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-inverse-metric-and-musical-isomorphisms: mathematical-premise
  def-gr-tensor-fields-and-components: mathematical-premise
  def-gr-killing-field: mathematical-premise
  thm-gr-killing-and-on-shell-matter-identities: mathematical-premise
  def-countable-choice: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  def-tgr-spacelike-current-slab: mathematical-premise
  thm-tgr-finite-current-production-balance: mathematical-premise
sources:
  references:
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), sections 5.3, 6.3, and 8.7"
      url: "https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
      locator: "Section 5.3, PDF pp. 56–57: Killing equation and the current-divergence exercise; section 6.3, PDF pp. 64–66: symmetric stress-energy, observer energy density and its current; section 8.7, PDF pp. 109–110: Stokes flux balance."
    - title: "D. Tong, General Relativity, author-hosted full-text lecture notes"
      url: "https://www.damtp.cam.ac.uk/user/tong/gr/grhtml/S4.html"
      locator: "Chapter 4, section 4.5.5, subsection Conserved Energy from a Killing Vector: the symmetric stress-energy contraction, its covariant divergence, and charge on a spacelike slice."
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
      locator: "Chapter 4, printed pp. 117–118 (PDF pp. 124–125): stress-energy conservation and flux interpretation; chapter 5, printed pp. 140–142 (PDF pp. 147–149): Killing equation and conserved geodesic contraction."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Statement

Let $(M,g,N)$ be a time-oriented smooth Lorentzian four-manifold of signature $(-+++)$. Here $N$ is the supplied smooth timelike vector field selecting the future cone, as in clause (c) of [[def-gr-smooth-lorentzian-objects]]. Let $U\subseteq M$ be an open chart domain and let $\nabla$ be the unique torsion-free, $g$-compatible connection supplied by [[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]. Let $x=(x^0,x^1,x^2,x^3)$ be a positively oriented smooth chart on $U$ whose image contains a neighborhood of the compact closure $\overline K=[x_0^-,x_0^+]\times\overline\Omega$ of the slab $K=[x_0^-,x_0^+]\times\Omega$, where $x_0^-<x_0^+$, $\Omega=\prod_{i=1}^3(a_i,b_i)$ and $\overline\Omega=\prod_{i=1}^3[a_i,b_i]$ with $a_i<b_i$. The chart orients $U$, which inherits the time orientation from $N$. Let $T^{ab}$ be a smooth symmetric contravariant rank-two tensor on $U$ satisfying $\nabla_aT^{ab}=0$, and let $\xi$ be a smooth Killing field on $U$. Use the induced Levi-Civita derivative on all tensor fields. With the inverse metric and index conventions of [[def-gr-inverse-metric-and-musical-isomorphisms]] and [[def-gr-tensor-fields-and-components]], set $\xi_b:=g_{bc}\xi^c$ and $T_{ab}:=g_{ac}g_{bd}T^{cd}$. Define the Killing current by
$$j_\xi^a:=-T^{ab}\xi_b .$$
On an open neighborhood of $\overline K$, write $h_{ij}:=g_{ij}$, assume $h$ is positive definite and $g^{00}<0$, and choose the time orientation so that $n^a=-\alpha g^{a0}$ is future-directed, where $\alpha:=(-g^{00})^{-1/2}$; the future unit normal is $n_a=-\alpha\delta_a^0$. Put $w:=\sqrt{|\det(g_{ab})|}$, and let $dV_h:=\sqrt{\det h}\,d^3x$ be the induced positive spatial volume element. For $x^0=s\in[x_0^-,x_0^+]$, define the finite slice charge
$$H_\xi(s):=\int_\Omega [-g(j_\xi,n)]\,dV_h=\int_\Omega T_{ab}n^a\xi^b\,dV_h .$$
Let $B$ be the union of the six side faces of $K$, and let $\Phi_J(B)$ be the net outward side flux defined in [[def-tgr-spacelike-current-slab]]; explicitly it is the sum of the three upper-minus-lower face integrals of $wJ^i$ over the remaining coordinate variables. Conditional on the exact finite-slab balance stated in [[thm-tgr-finite-current-production-balance]],
$$H_\xi(x_0^+)-H_\xi(x_0^-)+\Phi_{j_\xi}(B)=0 .$$
Thus the endpoint charges are equal exactly when the net outward side flux is zero; divergence-free current alone does not imply that equality. The balance uses precisely the open spatial rectangle and compact-closure convention of that theorem.

In the static subcase on $U$, assume $\xi=\partial_{x^0}$ is future timelike and orthogonal to these coordinate slices, so $g_{0i}=0$ and the future unit normal is $u^a=n^a=\xi^a/\mathcal N_\xi$, where $\mathcal N_\xi:=\sqrt{-g(\xi,\xi)}>0$. Define $\epsilon:=T_{ab}u^au^b$. Then the same finite charge is the redshifted energy functional
$$H_\xi(s)=\int_\Omega \mathcal N_\xi\,\epsilon\,\sqrt{\det h}\,d^3x .$$
This is a matter-current charge on the specified finite slice, not a general gravitational energy.

For every constant $a>0$, replacing $\xi$ by $\widetilde{\xi}=a\xi$ preserves the Killing equation and gives $\widetilde j=a j$ and $\widetilde H=aH$. In the static subcase it also gives $\widetilde{\mathcal N}_\xi=a\mathcal N_\xi$ and the same normalized field $u=\xi/\mathcal N_\xi$. In the SI convention below, $a$ is dimensionless. If a function $\vartheta:U\to(0,\infty)$ is supplied and interpreted as the local temperature assigned to the observer field $u$, with SI unit kelvins, define $\mathcal T_\xi(q):=\mathcal N_\xi(q)\vartheta(q)$ for $q\in U$. No regularity of $\vartheta$ is needed for this pointwise definition. Then $\mathcal T_{a\xi}=a\mathcal T_\xi$; no equilibrium or constancy of $\mathcal T_\xi$ is asserted.

For the SI reading, take length coordinates $x^0=ct$ and spatial coordinates $x^i$ in metres, where $c>0$ has units $\mathrm{m\,s^{-1}}$; the metric components are dimensionless, and $\xi$ is normalized so that its flow parameter has units of length, hence its components are dimensionless. At any $q\in U$, let $p,k,\pi\in T_q^*U$ be covectors whose components have units $\mathrm{kg\,m\,s^{-1}}$, $\mathrm{m^{-1}}$, and $\mathrm J$, respectively, interpreted as mechanical momentum, wave, and energy-valued covectors. These labels assign physical interpretations and units only; no motion law or identification between $p,k,\pi$ is assumed. Let $\hbar$ be a supplied constant with SI unit $\mathrm{J\,s}$. These are pointwise pairings, so no regularity beyond the stated covectors is needed. If $T_{ab}$ has components in $\mathrm{J\,m^{-3}}$, then $H_\xi$ is in joules. At each $q\in U$, the mechanical pairing $E_\xi(p;q):=-c\,p_a\xi^a(q)$ has units of joules. The wave pairing $E_\xi(k;q):=-\hbar c\,k_a\xi^a(q)$ also has units of joules, while the energy-valued covector pairs as $E_\xi(\pi;q):=-\pi_a\xi^a(q)$ with no extra factor of $c$. The rescaled covector $p^\pi_a:=\pi_a/c$ has mechanical momentum units. Each pairing scales linearly with $\xi$.

For an additional horizon clause, let $\mathcal H\subset U$ be a smooth embedded codimension-one submanifold whose induced metric is degenerate at every point (the null-hypersurface condition). Assume $\xi$ is nonzero and tangent to $\mathcal H$, and suppose a function $\kappa_\xi:\mathcal H\to\mathbb R$ is defined there by $\nabla_\xi\xi=\kappa_\xi\xi$ along $\mathcal H$. Then the rescaled generator satisfies $\kappa_{a\xi}=a\kappa_\xi$. In geometric units where the flow parameter has length, $\kappa_\xi$ has units $\mathrm{m^{-1}}$; the associated acceleration normalization is $c^2\kappa_\xi$ in $\mathrm{m\,s^{-2}}$. No existence or constancy of a horizon surface gravity, or temperature law, is asserted.

## Facts & Assumptions

**Given:** The Lorentzian data $(M,g,N,U)$, the positively oriented chart and slab $K$ with compact closure $\overline K$, smooth symmetric $T^{ab}$ with $\nabla_aT^{ab}=0$, and a smooth Killing field $\xi$. The static, SI-unit, and horizon clauses add the hypotheses stated separately.

[F1] [[def-gr-smooth-lorentzian-objects]] defines a smooth time-oriented four-manifold with a smooth nondegenerate metric of signature $(-+++)$, a timelike time-orientation field, and the future cone.

[F2] [[def-gr-inverse-metric-and-musical-isomorphisms]] defines the inverse-metric components $g^{ab}$ and the metric isomorphisms that raise and lower tensor indices; [[def-gr-tensor-fields-and-components]] fixes the contravariant and covariant slot conventions.

[F3] [[def-gr-killing-field]] defines a Killing field by $\mathcal L_\xi g=0$.

[A1] Assume $\mathrm{AC}_\omega$, the Axiom of Countable Choice, in order to invoke [F4]; no stronger choice principle is used [[def-countable-choice]].

[F4] Under [A1], [[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]] supplies the unique torsion-free, metric-compatible connection and its induced tensor derivative. In particular the covariant derivative obeys the product rule on tensor contractions and $\nabla_ag_{bc}=0$.

[F5] On the oriented chart domain $U$, [[thm-gr-killing-and-on-shell-matter-identities]] clause (a) proves $\mathcal L_\xi g=0\Longleftrightarrow\nabla_a\xi_b+\nabla_b\xi_a=0$ for every smooth vector field $\xi$. The full theorem's additional clauses are not used.

[L1] [[def-tgr-spacelike-current-slab]] uses a positively oriented chart and slab $K=[t_0,t_1]\times\Omega$, with $\Omega=\prod_i(a_i,b_i)$ and compact closure $\overline K=[t_0,t_1]\times\prod_i[a_i,b_i]$, positive-definite $h_{ij}$, $g^{00}<0$, future unit normal $n^a=-\alpha g^{a0}$, $n_a=-\alpha\delta_a^0$, $\alpha=(-g^{00})^{-1/2}$, and density $w=\sqrt{|\det(g_{ab})|}$. Its coordinates are mathematical real coordinates without units in that definition; the SI length assignment is the separate assumption [A3]. It requires a $C^1$ current on a neighborhood of $\overline K$, defines $Q_J(t)=\int_\Omega -g(J,n)\,dV_h$, and defines the net outward side flux $\Phi_J(B)$ as the sum of upper-minus-lower $wJ^i$ face integrals.

[L2] [[thm-tgr-finite-current-production-balance]] assumes the $\mathrm{AC}_\omega$ background, the slab data and a $C^1$ current $J$; with $\Pi:=\nabla_aJ^a$, its exact statement is $Q_J(t_1)-Q_J(t_0)+\Phi_J(B)=\int_K\Pi\,\mathrm{vol}_g$.

[A2] On $U$, the static subcase assumes the adapted chart is orthogonal to the future timelike Killing field $\xi=\partial_{x^0}$, so the slice normal is $u^a=n^a=\xi^a/\mathcal N_\xi$, with $\mathcal N_\xi=\sqrt{-g(\xi,\xi)}>0$. If supplied, $\vartheta:U\to(0,\infty)$ is interpreted as the local temperature assigned to observer field $u$ and has SI unit kelvins; no regularity is needed for the pointwise definition $\mathcal T_\xi(q):=\mathcal N_\xi(q)\vartheta(q)$.

[A3] For the SI clause, $x^0=ct$ and the spatial coordinates are in metres; $c>0$ has units $\mathrm{m\,s^{-1}}$. The metric components are dimensionless, and $\xi$ is normalized so its flow parameter has length units, hence its components are dimensionless. At any $q\in U$, the covectors $p,k,\pi\in T_q^*U$ are interpreted as mechanical momentum, wave, and energy-valued covectors, with components in $\mathrm{kg\,m\,s^{-1}}$, $\mathrm{m^{-1}}$, and $\mathrm J$, respectively; $\hbar$ is a supplied constant with SI unit $\mathrm{J\,s}$. If $T_{ab}$ has components in $\mathrm{J\,m^{-3}}$, the slice charge has units joules. These pointwise covectors require no regularity assumption.

[A4] For the horizon clause only, $\mathcal H\subset U$ is a smooth embedded codimension-one submanifold with degenerate induced metric, $\xi$ is nonzero and tangent to $\mathcal H$, and $\kappa_\xi:\mathcal H\to\mathbb R$ satisfies $\nabla_\xi\xi=\kappa_\xi\xi$ along $\mathcal H$.

## Proof

**Proof technique:** direct; contract the symmetric stress with the Killing equation, apply the exact finite-slab balance, and compute the static and normalization identities.

1.1 By [A1] and [F4], the induced covariant derivative obeys the tensor product rule, so differentiating $j_\xi^a=-T^{ab}\xi_b$ and using the given $\nabla_aT^{ab}=0$ gives $\nabla_a j_\xi^a=-(\nabla_aT^{ab})\xi_b-T^{ab}\nabla_a\xi_b=-T^{ab}\nabla_a\xi_b$. [given, A1, F4, algebra]

2.1 Symmetry of $T^{ab}$ and [F3, F5] give $T^{ab}\nabla_a\xi_b=\tfrac12T^{ab}(\nabla_a\xi_b+\nabla_b\xi_a)=0$; hence $\nabla_a j_\xi^a=0$. [F3, F5, step 1.1, algebra]

3.1 The current is smooth, so it is $C^1$ as required by [L1]. In the finite-slab balance [L2], set $J=j_\xi$; its production term vanishes by step 2.1. Using $n^a=g^{ab}n_b$ and $T_{ab}=g_{ac}g_{bd}T^{cd}$, the proper normal flux is $-g(j_\xi,n)=-n_a(-T^{ab}\xi_b)=n_aT^{ab}\xi_b=T_{ab}n^a\xi^b$, so $Q_{j_\xi}(s)=H_\xi(s)$. Substitution into the exact balance interface yields the stated conditional identity. [F1, F2, L1, L2, step 2.1, algebra]

4.1 In the balance from step 3.1, $\Phi_{j_\xi}(B)=0$ implies equal endpoint charges. Conversely, if the endpoint charges are equal, that same equation gives $\Phi_{j_\xi}(B)=0$. This is a statement about net outward flux, not pointwise vanishing on each side face. [L2, step 3.1, algebra]

4.2 In the static clause [A2], $\xi^a=\mathcal N_\xi u^a$ and $n=u$, so $T_{ab}n^a\xi^b=\mathcal N_\xi T_{ab}u^au^b=\mathcal N_\xi\epsilon$ pointwise; integrating with the slice volume element of [L1] gives the stated $H_\xi=\int_\Omega\mathcal N_\xi\epsilon\sqrt{\det h}\,d^3x$. [A2, L1, step 3.1, algebra]

5.1 For dimensionless constant $a>0$, the metric-selected connection is linear, so $\nabla_a(a\xi)_b+\nabla_b(a\xi)_a=a(\nabla_a\xi_b+\nabla_b\xi_a)=0$ by [F5]; its reverse implication shows that $a\xi$ is Killing. Direct substitution gives $j_{a\xi}=a j_\xi$, $\mathcal N_{a\xi}=a\mathcal N_\xi$, and $u_{a\xi}=u_\xi$; the slice charge, side flux, temperature definition, and each covector pairing with the generator therefore scale by $a$. [F3, F4, F5, A2, step 4.2, algebra]

6.1 In the length-flow convention of [A3], $T_{ab}\sqrt{\det h}\,d^3x$ has units $\mathrm{J}$. For mechanical $p_a$, $p_a\xi^a$ has units $\mathrm{kg\,m\,s^{-1}}$, and multiplication by $c$ gives $\mathrm{kg\,m^2\,s^{-2}}=\mathrm J$. For $k_a$ in $\mathrm{m^{-1}}$, $\hbar c k_a\xi^a$ has units $\mathrm J$. For an energy-valued covector $\pi_a$ already in joules, no $c$ is needed, and $p_a:=\pi_a/c$ has units $\mathrm{kg\,m\,s^{-1}}$. These are distinct covector types. [A3, step 5.1, algebra]

7.1 Under [A1] and [A4], $\nabla_{a\xi}(a\xi)=a^2\nabla_\xi\xi=a^2\kappa_\xi\xi=(a\kappa_\xi)(a\xi)$ on $\mathcal H$. Since $\xi$ is nonzero there, the scalar in the defining equation is $\kappa_{a\xi}=a\kappa_\xi$. The supplied units give $c^2\kappa_\xi$ the acceleration units $\mathrm{m\,s^{-2}}$. This uses the defining equation only and asserts no existence or constancy result. [A1, A4, F4, step 5.1, algebra] ∎

## Remarks

The statement concerns the matter current built from $T$ and $\xi$ on a finite coordinate slab. It does not establish positivity, a global gravitational energy, an unbounded-slice charge, an exhaustion limit, an equilibrium theorem, or a relation between temperature and surface gravity. The finite-slab balance uses the exact MI01 hypotheses and suppliers.
