---
id: thm-gr-tt-plane-wave-curvature
kind: theorem
title: "First-order curvature of the flat linearization and of TT plane waves, its gauge invariance and its contraction to the linearized Ricci tensor"
status: draft
origin: session
domain: mathematics
dependency_level: 12
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-plane-wave-perturbation, def-gr-flat-linearized-perturbation, thm-gr-flat-linearized-curvature-and-gauge, thm-gr-tt-plane-wave-solutions, def-gr-minkowski-model-and-inertial-chart, def-gr-curvature-tensor-and-derived-tensors, thm-gr-curvature-tensoriality-and-coordinate-formula, def-gr-inverse-metric-and-musical-isomorphisms, def-gr-smooth-covariant-two-tensor-field, thm-clairaut-schwarz-mixed-partials, thm-algebra-of-derivatives, thm-chain-rule, def-derivative, def-c-r-and-smooth-maps-between-smooth-manifolds, lem-gr-null-phase-coordinate]
dependency_roles:
  def-gr-plane-wave-perturbation: mathematical-premise
  def-gr-flat-linearized-perturbation: mathematical-premise
  thm-gr-flat-linearized-curvature-and-gauge: mathematical-premise
  thm-gr-tt-plane-wave-solutions: mathematical-premise
  def-gr-minkowski-model-and-inertial-chart: mathematical-premise
  def-gr-curvature-tensor-and-derived-tensors: mathematical-premise
  thm-gr-curvature-tensoriality-and-coordinate-formula: mathematical-premise
  def-gr-inverse-metric-and-musical-isomorphisms: mathematical-premise
  def-gr-smooth-covariant-two-tensor-field: mathematical-premise
  thm-clairaut-schwarz-mixed-partials: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-chain-rule: mathematical-premise
  def-derivative: mathematical-premise
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
  lem-gr-null-phase-coordinate: mathematical-premise
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 6 (6.4)-(6.6) and (6.60)-(6.61): the linearized Riemann tensor and the component R^i_{00j} = (1/2) d_0^2 h^i_j for transverse-traceless plane waves, printed pp. 142-143 and 152-153 (PDF pp. 149-150 and 159-160)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), section 5.2.2: the linearised Riemann tensor R^mu_{rho sigma nu} = (1/2) eta^{mu lambda}(...), the component R^mu_{00 nu} = (1/2) d_0^2 h^mu_nu and the geodesic deviation equation (5.23), printed pp. 212-213 (PDF pp. 219-220)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), sections 7.1 and 7.3: the linearized curvature of the metric family and its gauge invariance (7.4)-(7.13), printed pp. 71-73 (PDF pp. 72-74)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
verification:
  precheck: pass
---

## Statement

Let $(M,g,N)=(\mathbb R^4,\eta,\partial_0)$ be the flat model with its
inertial chart and let $(\varepsilon_1,h,q)$ be a flat linearized family over
an open set $\Omega\subseteq\mathbb R^4$ with first-order coefficients
$\Gamma^{(1)a}{}_{bc}$ as in [[def-gr-flat-linearized-perturbation]]; write
$R^a{}_{bcd}(\lambda)$ for the curvature components of $g(\lambda)$
([[def-gr-curvature-tensor-and-derived-tensors]],
[[thm-gr-curvature-tensoriality-and-coordinate-formula]]) and define the
**first-order curvature coefficient**

$$R^{(1)a}{}_{bcd}:=\partial_\lambda R^a{}_{bcd}(\lambda)\big|_{\lambda=0},\qquad R^{(1)}_{abcd}:=\eta_{ae}R^{(1)e}{}_{bcd}.$$

Then:

**(a) General first-order formula.** The coefficient is defined (the
component family is differentiable in $\lambda$ at $0$) and

$$R^{(1)a}{}_{bcd}=\partial_c\Gamma^{(1)a}{}_{db}-\partial_d\Gamma^{(1)a}{}_{cb},\qquad R^{(1)}_{abcd}=\tfrac12\bigl(\partial_b\partial_ch_{ad}+\partial_a\partial_dh_{bc}-\partial_a\partial_ch_{bd}-\partial_b\partial_dh_{ac}\bigr).$$

**(b) Gauge invariance.** For every smooth covector field $\xi$ on $\Omega$,
with $h'_{ab}:=h_{ab}-\partial_a\xi_b-\partial_b\xi_a$ the gauge-transformed
perturbation of [[def-gr-flat-linearized-perturbation]] clause (d),
$R^{(1)}_{abcd}(h')=R^{(1)}_{abcd}(h)$: the first-order curvature coefficient
is unchanged by gauge transformations.

**(c) Planar and TT waves.** Let $F=(F_{ab})$ be a smooth planar profile with
$h_{ab}(x)=F_{ab}(u(x))$, $u=x^0-x^3$, and let $n_a=\partial_au$; then

$$R^{(1)}_{abcd}=\tfrac12\bigl(n_bn_cF''_{ad}+n_an_dF''_{bc}-n_an_cF''_{bd}-n_bn_dF''_{ac}\bigr).$$

If the profile is spatial ($F_{0a}=0$ for all $a$), then
$R^{(1)}_{0i0j}=-\tfrac12F''_{ij}$ and, raising indices,
$R^{(1)i}{}_{00j}=+\tfrac12F''{}^i{}_j$. If the profile is TT with amplitudes
$A_+,A_\times$, then $F''$ is supported on the screen with $F''_{11}=A_+''$,
$F''_{22}=-A_+''$, $F''_{12}=F''_{21}=A_\times''$ and all other second
derivatives of the profile zero; in particular

$$R^{(1)}_{0101}=-\tfrac12A_+'',\qquad R^{(1)}_{0102}=-\tfrac12A_\times'',\qquad R^{(1)}_{0202}=+\tfrac12A_+'' .$$

**(d) Contraction to the Ricci coefficient.** For every perturbation $h$,

$$\eta^{ac}R^{(1)}_{abcd}=\operatorname{Ric}^{(1)}_{bd},$$

the right-hand side being the first-order coefficient of
[[def-gr-flat-linearized-perturbation]] clause (b). For a TT planar
perturbation both sides vanish: $\operatorname{Ric}^{(1)}_{bd}=0$ and
$S^{(1)}=0$.

## Facts & Assumptions

**Given:** A flat linearized family $(\varepsilon_1,h,q)$ over $\Omega$, a smooth covector field $\xi$, and a smooth planar profile $F$.

[L1] The curvature components of the metric $g(\lambda)$ are given by $R^a{}_{bcd}=\partial_c\Gamma^a{}_{db}-\partial_d\Gamma^a{}_{cb}+\sum_e(\Gamma^a{}_{ce}\Gamma^e{}_{db}-\Gamma^a{}_{de}\Gamma^e{}_{cb})$, the curvature is a $(1,3)$-tensor, and $\operatorname{Ric}_{bd}=\eta^{ae}R_{ebad}$, $S=\eta^{bd}\operatorname{Ric}_{bd}$, $G_{ab}=\operatorname{Ric}_{ab}-\tfrac12S\eta_{ab}$ ([[thm-gr-curvature-tensoriality-and-coordinate-formula]], [[def-gr-curvature-tensor-and-derived-tensors]], [[def-gr-flat-linearized-perturbation]] clauses (a)-(c), [[def-gr-inverse-metric-and-musical-isomorphisms]]).

[L2] The first-order Christoffel coefficients are $\Gamma^{(1)a}{}_{bc}=\tfrac12\eta^{ad}(\partial_bh_{cd}+\partial_ch_{bd}-\partial_dh_{bc})$, the component family $\lambda\mapsto\Gamma^a{}_{bc}(\lambda,p)$ is smooth with second derivative bounded on compact parameter sets, and $\Gamma^a{}_{bc}(0)=0$ ([[thm-gr-flat-linearized-curvature-and-gauge]] clauses (a), (e), [[def-gr-flat-linearized-perturbation]] clause (b)).

[L3] Mixed partial derivatives of a $C^2$ function commute and derivatives of products and sums obey the usual rules ([[thm-clairaut-schwarz-mixed-partials]], [[thm-algebra-of-derivatives]], [[def-derivative]], [[def-c-r-and-smooth-maps-between-smooth-manifolds]]).

[L4] For a planar profile, $\partial_ch_{ab}=F'_{ab}(u)n_c$ and $\partial_d\partial_ch_{ab}=F''_{ab}(u)n_dn_c$, and for a TT profile the trace, the divergence and hence the contraction $\partial_a\partial_bh^{ab}$ vanish ([[lem-gr-null-phase-coordinate]] clause (c)).

[L5] For a TT planar perturbation, $G^{(1)}_{ab}(h)=0$ ([[thm-gr-tt-plane-wave-solutions]] clause (b)).

[L6] The map $h\mapsto R^{(1)}_{abcd}(h)$ given by the formula of (a) is $\mathbb R$-linear in $h$ and its derivatives, and $\operatorname{Ric}^{(1)}_{bd}=\tfrac12(\partial_c\partial_bh^c{}_d+\partial_c\partial_dh^c{}_b-\Box h_{bd}-\partial_b\partial_dh)$ ([[thm-gr-flat-linearized-curvature-and-gauge]] clause (b), [[def-gr-flat-linearized-perturbation]] clause (b)).

## Proof

**Proof technique:** direct; differentiate the coordinate curvature formula at $\lambda=0$, substitute the first-order Christoffel symbols, then cancel the pure-gauge terms and specialize to planar profiles.

1.1 (Differentiating the curvature formula.) By [L2] the Christoffel component families are smooth in $(\lambda,p)$ with $\Gamma(0)=0$. Differentiating the coordinate formula of [L1] in $\lambda$ at $0$, the product terms $\Gamma\Gamma$ contribute $2\Gamma(0)\partial_\lambda\Gamma(0)=0$, so $R^{(1)a}{}_{bcd}=\partial_c\Gamma^{(1)a}{}_{db}-\partial_d\Gamma^{(1)a}{}_{cb}$; this also shows that the coefficient is defined as the derivative of a differentiable component family. Substituting the formula of [L2] into $\eta_{ae}R^{(1)e}{}_{bcd}$ and using $\eta_{ae}\Gamma^{(1)e}{}_{db}=\Gamma^{(1)}_{adb}=\tfrac12(\partial_dh_{ab}+\partial_bh_{ad}-\partial_ah_{db})$ gives $$R^{(1)}_{abcd}=\tfrac12\partial_c(\partial_dh_{ab}+\partial_bh_{ad}-\partial_ah_{db})-\tfrac12\partial_d(\partial_ch_{ab}+\partial_bh_{ac}-\partial_ah_{cb}),$$ and the two terms $-\tfrac12\partial_c\partial_dh_{ab}$ and $+\tfrac12\partial_d\partial_ch_{ab}$ cancel by [L3], leaving the displayed formula. This proves (a). [L1, L2, L3, algebra]



2.1 (Gauge invariance.) Let $H_{ab}:=\partial_a\xi_b+\partial_b\xi_a$, so that $h'=h-H$ and $R^{(1)}(h')=R^{(1)}(h)-R^{(1)}(H)$ by [L6]. By the formula of step 1.1, $$R^{(1)}_{abcd}(H)=\tfrac12\bigl(\partial_b\partial_cH_{ad}+\partial_a\partial_dH_{bc}-\partial_a\partial_cH_{bd}-\partial_b\partial_dH_{ac}\bigr).$$ Substituting $H_{ad}=\partial_a\xi_d+\partial_d\xi_a$ and expanding, the eight third-derivative terms group as $$(\partial_b\partial_c\partial_a\xi_d-\partial_a\partial_c\partial_b\xi_d)+(\partial_b\partial_c\partial_d\xi_a-\partial_b\partial_d\partial_c\xi_a)+(\partial_a\partial_d\partial_b\xi_c-\partial_b\partial_d\partial_a\xi_c)+(\partial_a\partial_d\partial_c\xi_b-\partial_a\partial_c\partial_d\xi_b),$$ and each parenthesis vanishes by [L3]. Hence $R^{(1)}(H)=0$ and $R^{(1)}(h')=R^{(1)}(h)$. This proves (b). [L3, L6, step 1.1, algebra]

2.2 (Planar waves.) Let $h_{ab}=F_{ab}(u)$; by [L4], $\partial_b\partial_ch_{ad}=F''_{ad}n_bn_c$, and substituting into the formula of step 1.1 gives the displayed planar formula. If $F_{0a}=0$, then substituting $n_0=1$, $n_i=0$ for $i=1,2$ and $n_3=-1$ gives $R^{(1)}_{0i0j}=\tfrac12(n_in_0F''_{0j}+n_0n_jF''_{i0}-n_0n_0F''_{ij}-n_in_jF''_{00})=-\tfrac12F''_{ij}$. For the raised component, the four-term formula of step 1.1 is antisymmetric in the first and in the last index pair, so $R^{(1)}_{a00j}=-R^{(1)}_{a0j0}=R^{(1)}_{0aj0}=-R^{(1)}_{0a0j}=-\bigl(-\tfrac12F''_{aj}\bigr)=\tfrac12F''_{aj}$; raising the first index gives $R^{(1)i}{}_{00j}=\eta^{ia}\tfrac12F''_{aj}=+\tfrac12F''{}^i{}_j$. If in addition the profile is TT, then $F''_{ij}$ vanishes whenever $i=j=3$ or one index equals $3$, and $F''_{11}=-F''_{22}=A_+''$, $F''_{12}=F''_{21}=A_\times''$; the displayed components follow. This proves (c). [L4, step 1.1, algebra]

2.3 (Ricci contraction.) Contracting the formula of step 1.1 with $\eta^{ac}$ term by term gives $$\eta^{ac}R^{(1)}_{abcd}=\tfrac12\bigl(\partial_b\partial_ch^c{}_d+\partial_a\partial_dh^{a}{}_b-\Box h_{bd}-\partial_b\partial_dh\bigr),$$ which is the formula of [L6] for $\operatorname{Ric}^{(1)}_{bd}$ (the first two terms are the same contraction with renamed dummy indices). For a TT planar perturbation, [L5] gives $G^{(1)}_{ab}=0$, and by the identity $G^{(1)}_{ab}=\operatorname{Ric}^{(1)}_{ab}-\tfrac12S^{(1)}\eta_{ab}$ of [L1] applied to first-order coefficients, $\operatorname{Ric}^{(1)}_{ab}=\tfrac12S^{(1)}\eta_{ab}$. The trace $S^{(1)}=\eta^{ab}\operatorname{Ric}^{(1)}_{ab}$ then gives $S^{(1)}=2S^{(1)}$ at every point, so $S^{(1)}=0$ and $\operatorname{Ric}^{(1)}=0$. This proves (d). [L1, L5, L6, step 1.1, algebra]

3.1 (Conclusion.) Steps 1.1, 2.1, 2.2 and 2.3 prove the four clauses from the coordinate curvature formula, the first-order Christoffel symbols and the commutation of partial derivatives. No field equation is assumed except in the vanishing statement of (d), where the proved statement of [[thm-gr-tt-plane-wave-solutions]] is used; no choice principle beyond the inherited countable choice of the cited suppliers is used. [step 1.1, step 2.1, step 2.2, step 2.3] ∎

## Remarks

- **Physical reading.** Clauses (a)-(c) identify a gauge-invariant curvature content of a linearized perturbation and compute it for plane waves; clause (d) verifies that the contraction reproduces the independently defined Ricci coefficient. The physical interpretation of $R^{(1)}$ as tidal response requires the free-fall postulate and is given in the response theorem of this page.

- **Sign conventions.** The displayed signs are those of the curvature convention $R^a{}_{bcd}=\partial_c\Gamma^a{}_{db}-\partial_d\Gamma^a{}_{cb}+\Gamma\Gamma$ fixed by [[thm-gr-curvature-tensoriality-and-coordinate-formula]] and [[def-gr-curvature-tensor-and-derived-tensors]]; changing the overall curvature sign would reverse the signs in clause (c).
