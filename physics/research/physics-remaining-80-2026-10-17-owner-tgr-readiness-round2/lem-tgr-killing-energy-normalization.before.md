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
---

## Statement

Let $(M,g,V)$ be a time-oriented smooth Lorentzian four-manifold of signature $(-+++)$. Let $U\subseteq M$ be an open chart domain with metric-selected connection $\nabla$, and let $x=(x^0,x^1,x^2,x^3)$ be a positively oriented smooth chart on $U$ whose image contains a neighborhood of the compact product box $K=[x_0^-,x_0^+]\times\Omega$, where $x_0^-<x_0^+$ and $\Omega=\prod_{i=1}^3[a_i,b_i]$ with $a_i<b_i$. The chart orients $U$, which inherits the time orientation from $V$. Let $T^{ab}$ be a smooth symmetric contravariant rank-two tensor on $U$ satisfying $\nabla_aT^{ab}=0$, and let $\xi$ be a smooth Killing field on $U$. Use the Levi-Civita tensor derivative on all tensor fields. With the inverse metric and index conventions of [[def-gr-inverse-metric-and-musical-isomorphisms]] and [[def-gr-tensor-fields-and-components]], set $\xi_b:=g_{bc}\xi^c$ and $T_{ab}:=g_{ac}g_{bd}T^{cd}$. Define the Killing current by
$$j_\xi^a:=-T^{ab}\xi_b .$$
On $K$, write $h_{ij}:=g_{ij}$, assume $h$ is positive definite and $g^{00}<0$, and choose the time orientation so that $n^a=-\alpha g^{a0}$ is future-directed, where $\alpha:=(-g^{00})^{-1/2}$; the future unit normal is $n_a=-\alpha\delta_a^0$. Put $w:=\sqrt{|\det(g_{ab})|}$, and let $dV_h:=\sqrt{\det h}\,d^3x$ be the induced positive spatial volume element. For $x^0=s\in[x_0^-,x_0^+]$, define the finite slice charge
$$H_\xi(s):=\int_\Omega [-g(j_\xi,n)]\,dV_h=\int_\Omega T_{ab}n^a\xi^b\,dV_h .$$
Let $B$ be the union of the six side faces of $K$, and let $\Phi_J(B)$ be the net outward side flux defined in [[def-tgr-spacelike-current-slab]]; explicitly it is the sum of the three upper-minus-lower face integrals of $wJ^i$ over the remaining coordinate variables. Conditional on the exact finite-slab balance stated in [[thm-tgr-finite-current-production-balance]],
$$H_\xi(x_0^+)-H_\xi(x_0^-)+\Phi_{j_\xi}(B)=0 .$$
Thus the endpoint charges are equal exactly when the net outward side flux is zero; divergence-free current alone does not imply that equality. The balance supplier is currently a draft theorem, so this clause is conditional on its stated interface and is not treated as an accepted theorem here.

In the static subcase, assume $\xi=\partial_{x^0}$ is future timelike and orthogonal to these coordinate slices, so $g_{0i}=0$ and the future unit normal is $u^a=n^a=\xi^a/\mathcal N_\xi$, where $\mathcal N_\xi:=\sqrt{-g(\xi,\xi)}>0$. Define $\epsilon:=T_{ab}u^au^b$. Then the same finite charge is the redshifted energy functional
$$H_\xi(s)=\int_\Omega \mathcal N_\xi\,\epsilon\,\sqrt{\det h}\,d^3x .$$
This is a matter-current charge on the specified finite slice, not a general gravitational energy.

For every dimensionless constant $a>0$, replacing $\xi$ by $\widetilde{\xi}=a\xi$ preserves the Killing equation and gives $\widetilde j=a j$ and $\widetilde H=aH$. In the static subcase it also gives $\widetilde{\mathcal N}_\xi=a\mathcal N_\xi$ and the same normalized field $u=\xi/\mathcal N_\xi$. If a positive proper-temperature scalar $\vartheta$ in kelvins is supplied there, the definition $\mathcal T_\xi:=\mathcal N_\xi\vartheta$ therefore scales as $\mathcal T_{a\xi}=a\mathcal T_\xi$; no equilibrium or constancy of $\mathcal T_\xi$ is asserted.

For the SI reading, take length coordinates $x^0=ct$ and $x^i$ in metres, with $c>0$ in $\mathrm{m\,s^{-1}}$, dimensionless metric and length-normalized $\xi$. If $T_{ab}$ has components in $\mathrm{J\,m^{-3}}$, then $H_\xi$ is in joules. A mechanical momentum covector $p_a$ with components in $\mathrm{kg\,m\,s^{-1}}$ pairs with $\xi$ to give momentum, so its energy normalization is $E_\xi(p):=-c\,p_a\xi^a$ joules. An inverse-length wave covector $k_a$ instead has $E_\xi(k):=-\hbar c\,k_a\xi^a$, while an energy-valued covector $\pi_a$, with components in joules, has $E_\xi(\pi):=-\pi_a\xi^a$ with no extra factor of $c$. For any such $\pi_a$, the covector $p_a:=\pi_a/c$ has mechanical momentum units. Each pairing scales linearly with $\xi$.

For an additional horizon clause, let $\mathcal H\subset U$ be a smooth embedded codimension-one submanifold whose induced metric is degenerate at every point (the null-hypersurface condition). Assume $\xi$ is nonzero and tangent to $\mathcal H$, and suppose a scalar $\kappa_\xi$ is defined there by $\nabla_\xi\xi=\kappa_\xi\xi$. Then the rescaled generator satisfies $\kappa_{a\xi}=a\kappa_\xi$. In geometric units where the flow parameter has length, $\kappa_\xi$ has units $\mathrm{m^{-1}}$; the associated acceleration normalization is $c^2\kappa_\xi$ in $\mathrm{m\,s^{-2}}$. No existence or constancy of a horizon surface gravity, or temperature law, is asserted.

## Facts & Assumptions

**Given:** The Lorentzian data $(M,g,V,U)$, the positively oriented chart and compact product box $K$, smooth symmetric $T^{ab}$ with $\nabla_aT^{ab}=0$, and a smooth Killing field $\xi$. The static, SI-unit, and horizon clauses add the hypotheses stated separately.

[F1] [[def-gr-smooth-lorentzian-objects]] defines a smooth time-oriented four-manifold with a smooth nondegenerate metric of signature $(-+++)$, a timelike time-orientation field, and the future cone.

[F2] [[def-gr-inverse-metric-and-musical-isomorphisms]] defines the inverse-metric components $g^{ab}$ and the metric isomorphisms that raise and lower tensor indices; [[def-gr-tensor-fields-and-components]] fixes the contravariant and covariant slot conventions.

[F3] [[def-gr-killing-field]] defines a Killing field by $\mathcal L_\xi g=0$.

[A1] Assume $\mathrm{AC}_\omega$, the Axiom of Countable Choice, in order to invoke [F4]; no stronger choice principle is used [[def-countable-choice]].

[F4] Under [A1], [[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]] supplies the unique torsion-free, metric-compatible connection and its induced tensor derivative. In particular the covariant derivative obeys the product rule on tensor contractions and $\nabla_ag_{bc}=0$.

[F5] On the oriented chart domain $U$, [[thm-gr-killing-and-on-shell-matter-identities]] clause (a) proves $\mathcal L_\xi g=0\Longleftrightarrow\nabla_a\xi_b+\nabla_b\xi_a=0$ for every smooth vector field $\xi$. The full theorem's additional clauses are not used.

[L1] The current [[def-tgr-spacelike-current-slab]] item on batch 50 is a draft definition. It uses a positively oriented chart and compact product box $K=[t_0,t_1]\times\Omega$, positive-definite $h_{ij}$, $g^{00}<0$, future unit normal $n^a=-\alpha g^{a0}$, $n_a=-\alpha\delta_a^0$, $\alpha=(-g^{00})^{-1/2}$, and density $w=\sqrt{|\det(g_{ab})|}$. Its coordinates are mathematical real coordinates without units in that definition; the SI length assignment is the separate assumption [A3]. It requires a $C^1$ current on a neighborhood of $K$, defines $Q_J(t)=\int_\Omega -g(J,n)\,dV_h$, and defines the net outward side flux $\Phi_J(B)$ as the sum of upper-minus-lower $wJ^i$ face integrals.

[L2] The current [[thm-tgr-finite-current-production-balance]] item on batch 50 is a draft theorem. It assumes the $\mathrm{AC}_\omega$ background, the slab data and a $C^1$ current $J$; with $\Pi:=\nabla_aJ^a$, its exact statement is $Q_J(t_1)-Q_J(t_0)+\Phi_J(B)=\int_K\Pi\,\mathrm{vol}_g$. Its proof remains draft, so this consumer's use is conditional and does not treat the item label as proof approval.

[A2] For the static clause, the adapted chart is orthogonal to the future timelike Killing field $\xi=\partial_{x^0}$, so the slice normal is $u^a=n^a=\xi^a/\mathcal N_\xi$, with $\mathcal N_\xi=\sqrt{-g(\xi,\xi)}>0$. A positive proper-temperature scalar $\vartheta$ in kelvins may also be supplied, with $\mathcal T_\xi:=\mathcal N_\xi\vartheta$.

[A3] For the unit conversion clause, $x^0=ct$ and the spatial coordinates are lengths; $g,n,u,\xi$ are dimensionless in the chosen length-flow convention. The components of $T_{ab}$, $p_a$, $k_a$, $\pi_a$, $c$ and $\hbar$ have the SI units stated in the Statement.

[A4] For the horizon clause only, $\mathcal H$, $\xi$, and $\kappa_\xi$ satisfy the explicit null-hypersurface and defining-equation hypotheses in the Statement.

## Proof

**Proof technique:** direct; contract the symmetric stress with the Killing equation, apply the current draft finite-slab balance conditionally, and compute the static and normalization identities.

1.1 By [A1] and [F4], the induced covariant derivative obeys the tensor product rule, so differentiating $j_\xi^a=-T^{ab}\xi_b$ and using the given $\nabla_aT^{ab}=0$ gives $\nabla_a j_\xi^a=-(\nabla_aT^{ab})\xi_b-T^{ab}\nabla_a\xi_b=-T^{ab}\nabla_a\xi_b$. [given, A1, F4, algebra]

2.1 Symmetry of $T^{ab}$ and [F3, F5] give $T^{ab}\nabla_a\xi_b=\tfrac12T^{ab}(\nabla_a\xi_b+\nabla_b\xi_a)=0$; hence $\nabla_a j_\xi^a=0$. [F3, F5, step 1.1, algebra]

3.1 The current is smooth, so it is $C^1$ as required by [L1]. In the conditional draft balance [L2], set $J=j_\xi$; its production term vanishes by step 2.1. Using $n^a=g^{ab}n_b$ and $T_{ab}=g_{ac}g_{bd}T^{cd}$, the proper normal flux is $-g(j_\xi,n)=-n_a(-T^{ab}\xi_b)=n_aT^{ab}\xi_b=T_{ab}n^a\xi^b$, so $Q_{j_\xi}(s)=H_\xi(s)$. Substitution into the exact balance interface yields the stated conditional identity. [F1, F2, L1, L2, step 2.1, algebra]

4.1 In the balance from step 3.1, $\Phi_{j_\xi}(B)=0$ implies equal endpoint charges. Conversely, if the endpoint charges are equal, that same equation gives $\Phi_{j_\xi}(B)=0$. This is a statement about net outward flux, not pointwise vanishing on each side face. [L2, step 3.1, algebra]

4.2 In the static clause [A2], $\xi^a=\mathcal N_\xi u^a$ and $n=u$, so $T_{ab}n^a\xi^b=\mathcal N_\xi T_{ab}u^au^b=\mathcal N_\xi\epsilon$ pointwise; integrating with the slice volume element of [L1] gives the stated $H_\xi=\int_\Omega\mathcal N_\xi\epsilon\sqrt{\det h}\,d^3x$. [A2, L1, step 3.1, algebra]

5.1 For dimensionless constant $a>0$, the metric-selected connection is linear, so $\nabla_a(a\xi)_b+\nabla_b(a\xi)_a=a(\nabla_a\xi_b+\nabla_b\xi_a)=0$ by [F5]; its reverse implication shows that $a\xi$ is Killing. Direct substitution gives $j_{a\xi}=a j_\xi$, $\mathcal N_{a\xi}=a\mathcal N_\xi$, and $u_{a\xi}=u_\xi$; the slice charge, side flux, temperature definition, and each covector pairing with the generator therefore scale by $a$. [F3, F4, F5, A2, step 4.2, algebra]

6.1 In the length-flow convention of [A3], $T_{ab}\sqrt{\det h}\,d^3x$ has units $\mathrm{J}$. For mechanical $p_a$, $p_a\xi^a$ has units $\mathrm{kg\,m\,s^{-1}}$, and multiplication by $c$ gives $\mathrm{kg\,m^2\,s^{-2}}=\mathrm J$. For $k_a$ in $\mathrm{m^{-1}}$, $\hbar c k_a\xi^a$ has units $\mathrm J$. For an energy-valued covector $\pi_a$ already in joules, no $c$ is needed, and $p_a:=\pi_a/c$ has units $\mathrm{kg\,m\,s^{-1}}$. These are distinct covector types. [A3, step 5.1, algebra]

7.1 Under [A1] and [A4], $\nabla_{a\xi}(a\xi)=a^2\nabla_\xi\xi=a^2\kappa_\xi\xi=(a\kappa_\xi)(a\xi)$ on $\mathcal H$. Since $\xi$ is nonzero there, the scalar in the defining equation is $\kappa_{a\xi}=a\kappa_\xi$. The supplied units give $c^2\kappa_\xi$ the acceleration units $\mathrm{m\,s^{-2}}$. This uses the defining equation only and asserts no existence or constancy result. [A1, A4, F4, step 5.1, algebra] ∎

## Remarks

The statement concerns the matter current built from $T$ and $\xi$ on a finite coordinate slab. It does not establish positivity, a global gravitational energy, an unbounded-slice charge, an exhaustion limit, an equilibrium theorem, or a relation between temperature and surface gravity. The finite-slab balance remains conditional on the draft MI01 theorem and its exact suppliers.
