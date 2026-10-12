---
id: lem-gr-killing-congruence-kinematics-and-energy-current
kind: lemma
title: "Kinematics of a timelike Killing congruence and conservation of the redshift-weighted energy current"
status: draft
origin: session
domain: mathematics
dependency_level: 9
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-observer-energy-momentum-current, lem-gr-observer-energy-momentum-decomposition, def-gr-congruence-acceleration-and-expansion, lem-gr-congruence-acceleration-and-expansion-properties, lem-gr-energy-momentum-current-divergence, def-gr-observer-congruence-and-adapted-charts, def-gr-observer-and-rest-space, def-gr-smooth-lorentzian-objects, def-gr-smooth-covariant-two-tensor-field, def-gr-metric-selected-connection, thm-gr-nondegenerate-levi-civita-and-tensor-derivative, def-gr-killing-field, thm-gr-killing-and-on-shell-matter-identities, def-gr-inverse-metric-and-musical-isomorphisms, def-gr-tensor-fields-and-components, def-gr-metric-volume-form-and-current-flux, thm-gr-density-divergence-and-finite-chain-flux, def-real-power, thm-real-power-continuity-and-derivatives, prop-identity-maps-and-composites-of-smooth-maps-are-smooth, def-c-r-and-smooth-maps-between-smooth-manifolds, def-smooth-vector-field-as-a-tangent-bundle-section]
dependency_roles:
  def-gr-observer-energy-momentum-current: mathematical-premise
  lem-gr-observer-energy-momentum-decomposition: mathematical-premise
  def-gr-congruence-acceleration-and-expansion: mathematical-premise
  lem-gr-congruence-acceleration-and-expansion-properties: mathematical-premise
  lem-gr-energy-momentum-current-divergence: mathematical-premise
  def-gr-observer-congruence-and-adapted-charts: mathematical-premise
  def-gr-observer-and-rest-space: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-smooth-covariant-two-tensor-field: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  def-gr-killing-field: mathematical-premise
  thm-gr-killing-and-on-shell-matter-identities: mathematical-premise
  def-gr-inverse-metric-and-musical-isomorphisms: mathematical-premise
  def-gr-tensor-fields-and-components: mathematical-premise
  def-gr-metric-volume-form-and-current-flux: mathematical-premise
  thm-gr-density-divergence-and-finite-chain-flux: mathematical-premise
  def-real-power: mathematical-premise
  thm-real-power-continuity-and-derivatives: mathematical-premise
  prop-identity-maps-and-composites-of-smooth-maps-are-smooth: mathematical-premise
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
  def-smooth-vector-field-as-a-tangent-bundle-section: mathematical-premise
sources:
  references:
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), section 5.3: Killing vectors, the equation nabla_a X_b + nabla_b X_a = 0 and conservation of X_a V^a along geodesics, printed pp. 53-56 (PDF pp. 54-57)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 5 (5.39)-(5.42): Killing vectors and the conserved quantity along geodesics, printed pp. 140-142 (PDF pp. 147-149)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), sections 4.3.3 and 4.5.5: the Killing current -K^mu T_{mu nu}, its divergence and the energy interpretation of its charge, printed pp. 165-166 and 188-189 (PDF pp. 172-173 and 195-196)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
verification:
  precheck: pass
---

## Statement

Let $(M,g,N)$ be a time-oriented smooth Lorentzian four-manifold with
metric-selected connection $\nabla$, let $U\subseteq M$ be a nonempty open
subset, and let $\xi$ be a smooth Killing field on $U$
([[def-gr-killing-field]]) that is everywhere timelike and future-directed,

$$g_p(\xi_p,\xi_p)<0,\qquad g_p(\xi_p,N_p)<0\qquad\text{for every }p\in U .$$

Put $X:=\sqrt{-g(\xi,\xi)}:U\to(0,\infty)$ (the positive square root) and
$n:=\xi/X$, so that $n$ is a smooth observer congruence on $U$. Let $T$ be a
smooth symmetric covariant $2$-tensor field on $U$ with
$\nabla^aT_{ab}=0$ on $U$, let $\mu$, $J$, $\Phi$, $S$ be the fields of
[[def-gr-observer-energy-momentum-current]], and let $a$, $\theta$, $D$ be the
kinematic fields of [[def-gr-congruence-acceleration-and-expansion]]. Then:

**(a) Normalization is constant along the congruence, and the acceleration is
a spatial gradient.**

$$n^a\nabla_aX=0,\qquad a_a=\nabla_a\ln X=\frac{1}{X}\nabla_aX,$$

equivalently $\nabla_aX=Xa_a$ and $a=\nabla\ln X$ is the spatial gradient of
$\ln X$.

**(b) Vanishing expansion and symmetric part.** $\theta=0$ and

$$\nabla_an_b+\nabla_bn_a=-(n_aa_b+n_ba_a).$$

**(c) The divergence source is the acceleration term.**
$T^{ab}\nabla_an_b=J^aa_a=\Phi^aa_a$, and consequently

$$\nabla_aJ^a=-\Phi^aa_a .$$

**(d) Conservation of the redshift-weighted current.** On $U$,

$$\nabla_a(XJ^a)=0,\qquad \nabla_a\bigl(T^{ab}\xi_b\bigr)=0 .$$

Moreover, for every finite smooth singular $4$-chain $C$ of $M$ contained in
$U$ with induced boundary $\partial C=\Sigma_2-\Sigma_1+B$,

$$\Phi_{XJ}(\Sigma_2)-\Phi_{XJ}(\Sigma_1)=-\Phi_{XJ}(B),$$

where $\Phi_{XJ}$ is the flux of the smooth vector field $XJ$
([[def-gr-metric-volume-form-and-current-flux]] clause (b)).

## Facts & Assumptions

**Given:** The time-oriented smooth Lorentzian four-manifold $(M,g,N)$ with metric-selected connection $\nabla$, the open subset $U$, the Killing field $\xi$ with $g(\xi,\xi)<0$ and $g(\xi,N)<0$ on $U$, the functions $X=\sqrt{-g(\xi,\xi)}$ and the congruence $n=\xi/X$, the smooth symmetric tensor field $T$ with $\nabla^aT_{ab}=0$, the fields $\mu$, $J$, $\Phi$, $S$ of [[def-gr-observer-energy-momentum-current]] and the fields $a$, $\theta$, $D$ of [[def-gr-congruence-acceleration-and-expansion]].

[L1] $\xi$ is a Killing field exactly when $\nabla_a\xi_b+\nabla_b\xi_a=0$; equivalently $\mathcal L_\xi g=0$ ([[def-gr-killing-field]], [[thm-gr-killing-and-on-shell-matter-identities]] clause (a)).

[L2] $\nabla$ is torsion-free and $g$-compatible, the extension of $\nabla$ to tensor fields satisfies the product rule, and $\nabla g=0$, $\nabla g^{-1}=0$; in particular indices may be raised and lowered across $\nabla$, and for smooth $f>0$ the usual product and quotient rules apply to $f$-multiples of tensor fields ([[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]] clause (c), [[def-gr-metric-selected-connection]], [[def-gr-tensor-fields-and-components]], [[def-gr-inverse-metric-and-musical-isomorphisms]]).

[L3] $-g(\xi,\xi)$ is a positive smooth function on $U$ because $g$ and $\xi$ are smooth and $\xi$ is timelike there; hence $X=\sqrt{-g(\xi,\xi)}$ is smooth: on charts it is the composition of the positive smooth function $-g(\xi,\xi)$ with the square-root function $t\mapsto t^{1/2}$, which is differentiable on $(0,\infty)$ with derivative $\tfrac12t^{-1/2}$, and iterating the derivative formula exhibits smoothness ([[def-real-power]], [[thm-real-power-continuity-and-derivatives]], [[prop-identity-maps-and-composites-of-smooth-maps-are-smooth]], [[def-c-r-and-smooth-maps-between-smooth-manifolds]]). Consequently $n=\xi/X$ is a smooth observer congruence on $U$: $g(n,n)=-g(\xi,\xi)/X^2=-1$ and $g(n,N)=-g(\xi,N)/X<0$ ([[def-gr-observer-congruence-and-adapted-charts]]).

[L4] The fields of [[def-gr-observer-energy-momentum-current]] satisfy $J^a=-T^{ab}n_b$, $J=\mu n+\Phi$ and $n_a\Phi^a=0$ ([[lem-gr-observer-energy-momentum-decomposition]] clauses (a) and (b)).

[L5] $\nabla_aJ^a=-T^{ab}\nabla_an_b$ and $T^{ab}\nabla_a\xi_b=0$ ([[lem-gr-energy-momentum-current-divergence]] clauses (a) and (d)).

[L6] $a=\nabla_nn$, $\theta=\nabla_an^a$, $Df=n^a\nabla_af$ and $\theta=h^{ab}\nabla_an_b$ ([[def-gr-congruence-acceleration-and-expansion]], [[lem-gr-congruence-acceleration-and-expansion-properties]] clause (c)).

[L7] For a smooth vector field $K$ on $M$ with $\nabla_aK^a=0$ on $U$ and a finite smooth singular $4$-chain $C\subseteq U$ with $\partial C=\Sigma_2-\Sigma_1+B$, one has $\Phi_K(\Sigma_2)-\Phi_K(\Sigma_1)=-\Phi_K(B)$ ([[thm-gr-density-divergence-and-finite-chain-flux]] clause (b), [[def-gr-metric-volume-form-and-current-flux]]).

## Proof

**Proof technique:** direct; contract the Killing equation along $\xi$ to identify the gradient of the normalization and the acceleration, compute the symmetric part of $\nabla n$ and its trace, and integrate the resulting divergence-free current.

1.1 (Gradient of the normalization and the acceleration.) By [L1] and [L2], $\xi^a\nabla_a\xi_b=-\xi^a\nabla_b\xi_a=-\tfrac12\nabla_b(\xi^a\xi_a)$; since $\xi^a\xi_a=-X^2$, this gives $\xi^a\nabla_a\xi_b=\tfrac12\nabla_b(X^2)=X\nabla_bX$. On one hand $n^a\nabla_a(X^2)=2X\,DX$ by definition of $D$; on the other, $n^a\nabla_a(X^2)=-2n^a\xi^b\nabla_a\xi_b=-\tfrac{2}{X}\bigl(\xi^a\nabla_a\xi_b\bigr)\xi^b=-2X\,DX$ by [L2] and the identity just proved. Hence $2X\,DX=-2X\,DX$, so $DX=n^a\nabla_aX=0$ because $X>0$. Next, by the product rule [L2], $\nabla_an_b=\tfrac1X\nabla_a\xi_b-\tfrac{\xi_b}{X^2}\nabla_aX$; contracting with $n^a$ and using $DX=0$ gives $a_b=\tfrac{1}{X}n^a\nabla_a\xi_b=\tfrac{1}{X^2}\xi^a\nabla_a\xi_b=\tfrac{1}{X^2}X\nabla_bX=\nabla_b\ln X$. This proves (a). [L1, L2, L3, L6, algebra]

2.1 (Vanishing expansion and symmetric part.) Symmetrizing the product formula of step 1.1, $\nabla_an_b+\nabla_bn_a=\tfrac1X(\nabla_a\xi_b+\nabla_b\xi_a)-\tfrac{\xi_b}{X^2}\nabla_aX-\tfrac{\xi_a}{X^2}\nabla_bX=-(n_b\nabla_a\ln X+n_a\nabla_b\ln X)=-(n_ba_a+n_ab_b)$ by [L1] and step 1.1. For the trace, $\theta=\nabla_an^a=\tfrac1X\nabla_a\xi^a-\tfrac{\xi^a}{X^2}\nabla_aX$, where $\nabla_a\xi^a=\tfrac12g^{ab}(\nabla_a\xi_b+\nabla_b\xi_a)=0$ and $\xi^a\nabla_aX=XDX=0$; hence $\theta=0$. This proves (b). [L1, step 1.1, L2, L6, algebra]

3.1 (The divergence source.) Using the product formula and step 1.1, $T^{ab}\nabla_an_b=\tfrac1XT^{ab}\nabla_a\xi_b-T^{ab}n_ba_a$; the first term vanishes by [L5], and the second is $-(T^{ab}n_b)a_a=J^aa_a$ by [L4]. Since $a$ is spatial and $\Phi=J-\mu n$, $J^aa_a=\Phi^aa_a+\mu n^aa_a=\Phi^aa_a$ by [L6] and clause (a) of [[lem-gr-congruence-acceleration-and-expansion-properties]]. Substituting into [L5] gives $\nabla_aJ^a=-\Phi^aa_a$. This proves (c). [step 1.1, step 2.1, L4, L5, L6, algebra]

4.1 (Conservation of the weighted current.) By the product rule [L2] and step 1.1, $\nabla_a(XJ^a)=X\nabla_aJ^a+J^a\nabla_aX=X(-\Phi^aa_a)+J^aXa_a=0$, because $J^aa_a=\Phi^aa_a$ by step 3.1. Moreover $T^{ab}\xi_b=XT^{ab}n_b=-XJ^a$ by [L4], so $\nabla_a(T^{ab}\xi_b)=-\nabla_a(XJ^a)=0$. This proves the first part of (d). [step 1.1, step 3.1, L4, L2, algebra]

5.1 (Flux balance.) The vector field $XJ$ is smooth on $U$ with $\nabla_a(XJ^a)=0$ by step 4.1, so applying [L7] to $K:=XJ$ gives $\Phi_{XJ}(\Sigma_2)-\Phi_{XJ}(\Sigma_1)=-\Phi_{XJ}(B)$ for every finite smooth singular $4$-chain $C\subseteq U$ with the stated boundary. This completes the proof of (d). [step 4.1, L7] ∎

## Remarks

- **Interpretation of the weight.** $X=\sqrt{-g(\xi,\xi)}$ is the normalization of the Killing field, and $XJ$ is the energy-momentum current of the congruence weighted by it; in a static model $X$ is the redshift factor between the congruence observers and the symmetry normalization. The unweighted current $J$ is *not* conserved in general: its divergence is $-\Phi^aa_a$, the acceleration source of clause (c).

- **Hypotheses.** Only the Killing equation, the timelike direction of $\xi$, and $\nabla^aT_{ab}=0$ are used. No extension of $\xi$ or $T$ beyond $U$, no completeness of the congruence and no asymptotic control of the chains is assumed or asserted.

- **Choice convention.** The smooth structure of the tangent bundle underlying $\xi$ and $n$ assumes $\mathrm{AC}_\omega$ through [[def-gr-observer-congruence-and-adapted-charts]]; no other choice principle is used.
