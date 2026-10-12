---
id: lem-gr-energy-momentum-current-divergence
kind: lemma
title: "Divergence of the measured energy-momentum current and the finite-chain balance identity"
status: draft
origin: session
domain: mathematics
dependency_level: 9
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-observer-energy-momentum-current, lem-gr-observer-energy-momentum-decomposition, def-gr-congruence-acceleration-and-expansion, lem-gr-congruence-acceleration-and-expansion-properties, def-gr-killing-field, def-gr-smooth-lorentzian-objects, def-gr-metric-selected-connection, thm-gr-nondegenerate-levi-civita-and-tensor-derivative, def-gr-inverse-metric-and-musical-isomorphisms, def-gr-tensor-fields-and-components, def-gr-observer-congruence-and-adapted-charts, def-gr-metric-volume-form-and-current-flux, thm-gr-density-divergence-and-finite-chain-flux, lem-gr-metric-divergence-and-density-formula, def-smooth-vector-field-as-a-tangent-bundle-section]
dependency_roles:
  def-gr-observer-energy-momentum-current: mathematical-premise
  lem-gr-observer-energy-momentum-decomposition: mathematical-premise
  def-gr-congruence-acceleration-and-expansion: mathematical-premise
  lem-gr-congruence-acceleration-and-expansion-properties: mathematical-premise
  def-gr-killing-field: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  def-gr-inverse-metric-and-musical-isomorphisms: mathematical-premise
  def-gr-tensor-fields-and-components: mathematical-premise
  def-gr-observer-congruence-and-adapted-charts: mathematical-premise
  def-gr-metric-volume-form-and-current-flux: mathematical-premise
  thm-gr-density-divergence-and-finite-chain-flux: mathematical-premise
  lem-gr-metric-divergence-and-density-formula: mathematical-premise
  def-smooth-vector-field-as-a-tangent-bundle-section: mathematical-premise
sources:
  references:
    - title: "E. Gourgoulhon, 3+1 Formalism and Bases of Numerical Relativity, arXiv:gr-qc/0703035v1 (2007), sections 5.2.1-5.2.2: the 3+1 decomposition of the conservation equation and the energy conservation equation containing the expansion term, printed pp. 72-73 (PDF pp. 72-73)"
      url: "https://arxiv.org/pdf/gr-qc/0703035"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), section 4.5.5: the failure of covariant conservation to produce a boundary term for the energy-momentum tensor, and the charge of the Killing current, printed pp. 187-189 (PDF pp. 194-196)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), section 8.7: Stokes' theorem and the flux balance, printed pp. 109-110 (PDF pp. 110-111)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
verification:
  precheck: pass
---

## Statement

Let $(M,g,N)$ be a time-oriented smooth Lorentzian four-manifold with
metric-selected connection $\nabla$, let $U\subseteq M$ be a nonempty open
subset, let $T$ be a smooth symmetric covariant $2$-tensor field on $U$ with
$\nabla^aT_{ab}=0$ on $U$, and let $n$ be a smooth observer congruence on $U$.
Let $\mu$, $J$, $\Phi$, $S$ be the fields of
[[def-gr-observer-energy-momentum-current]] and let $a$, $\theta$, $D$ be the
kinematic fields of [[def-gr-congruence-acceleration-and-expansion]].

**(a) Divergence identity.** On $U$,

$$\nabla_aJ^a=-T^{ab}\nabla_an_b .$$

**(b) Balance identity.** On $U$,

$$D\mu+\mu\theta+\nabla_a\Phi^a=-T^{ab}\nabla_an_b .$$

**(c) Finite-chain balance.** Let $C$ be a finite smooth singular $4$-chain of
$M$ contained in $U$ with induced boundary
$\partial C=\Sigma_2-\Sigma_1+B$, where $\Sigma_1,\Sigma_2,B$ are smooth
singular $3$-chains ([[def-gr-metric-volume-form-and-current-flux]] clause
(b)). Then

$$\Phi_J(\Sigma_2)-\Phi_J(\Sigma_1)=-\Phi_J(B)+\int_C\bigl(-T^{ab}\nabla_an_b\bigr)\mathrm{vol}_g .$$

In particular, if $T^{ab}\nabla_an_b=0$ on an open subset containing the image
of $C$, then $\Phi_J(\Sigma_2)-\Phi_J(\Sigma_1)=-\Phi_J(B)$.

**(d) Killing contraction.** If $\xi$ is a smooth vector field on $U$ with
$\nabla_a\xi_b+\nabla_b\xi_a=0$ (a Killing field,
[[def-gr-killing-field]]), then $T^{ab}\nabla_a\xi_b=0$ on $U$.

## Facts & Assumptions

**Given:** The time-oriented smooth Lorentzian four-manifold $(M,g,N)$ with metric-selected connection $\nabla$, the open subset $U$, the smooth symmetric covariant $2$-tensor field $T$ with $\nabla^aT_{ab}=0$ on $U$, the smooth observer congruence $n$ on $U$, the fields $\mu$, $J$, $\Phi$, $S$ of [[def-gr-observer-energy-momentum-current]], and the fields $a$, $\theta$, $D$ of [[def-gr-congruence-acceleration-and-expansion]]. In (c) additionally the finite smooth singular $4$-chain $C\subseteq U$ with boundary $\partial C=\Sigma_2-\Sigma_1+B$; in (d) additionally the vector field $\xi$ with $\nabla_a\xi_b+\nabla_b\xi_a=0$.

[L1] The extension of $\nabla$ to tensor fields satisfies the product rule, and $\nabla g=0$, $\nabla g^{-1}=0$; consequently raising and lowering indices commute with $\nabla$, and for a smooth covariant $2$-tensor field $T$ with $\nabla^aT_{ab}=0$ one has $\nabla_aT^{ab}=0$ ([[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]] clause (c), [[def-gr-inverse-metric-and-musical-isomorphisms]], [[def-gr-tensor-fields-and-components]], [[def-gr-metric-selected-connection]]).

[L2] The fields of [[def-gr-observer-energy-momentum-current]] satisfy $J=\mu\,n+\Phi$ and $\mu=-J^an_a$, with $n_a\Phi^a=0$ ([[lem-gr-observer-energy-momentum-decomposition]] clauses (a) and (b), [[def-gr-observer-energy-momentum-current]]).

[L3] For a smooth vector field $K$ on $M$ and a finite smooth singular $4$-chain $C$ of $M$, $\Phi_K(\partial C)=\int_C(\nabla_aK^a)\mathrm{vol}_g$; consequently, if $\partial C=\Sigma_2-\Sigma_1+B$, then $\Phi_K(\Sigma_2)-\Phi_K(\Sigma_1)=-\Phi_K(B)+\int_C(\nabla_aK^a)\mathrm{vol}_g$ ([[thm-gr-density-divergence-and-finite-chain-flux]] clause (b), [[def-gr-metric-volume-form-and-current-flux]] clause (b)).

[L4] $Df=n^a\nabla_af$ for smooth $f$, and $\theta=\nabla_an^a$ ([[def-gr-congruence-acceleration-and-expansion]] clauses (b) and (c), [[lem-gr-congruence-acceleration-and-expansion-properties]] clause (c)).

## Proof

**Proof technique:** direct; differentiate the current, substitute the orthogonal decomposition of $T$, and apply the finite-chain flux balance to the current.

1.1 (Divergence identity.) By the definition $J^a=-T^{ab}n_b$ and the product rule [L1], $\nabla_aJ^a=-\nabla_a(T^{ab}n_b)=-(\nabla_aT^{ab})n_b-T^{ab}\nabla_an_b$; the hypothesis $\nabla^aT_{ab}=0$ gives $\nabla_aT^{ab}=0$ by [L1], so the first term vanishes and $\nabla_aJ^a=-T^{ab}\nabla_an_b$. This proves (a). [L1, given, algebra]

2.1 (Balance identity.) By [L2], $J=\mu n+\Phi$; hence $\nabla_aJ^a=\nabla_a(\mu n^a)+\nabla_a\Phi^a=n^a\nabla_a\mu+\mu\nabla_an^a+\nabla_a\Phi^a$, so by [L4] $\nabla_aJ^a=D\mu+\mu\theta+\nabla_a\Phi^a$. Substituting step 1.1 gives (b). [step 1.1, L2, L4, algebra]

2.2 (Finite-chain balance.) Applying [L3] to the smooth vector field $J$ and the chain $C$, $\Phi_J(\partial C)=\int_C(\nabla_aJ^a)\mathrm{vol}_g$, and the additivity of the flux over chains gives $\Phi_J(\partial C)=\Phi_J(\Sigma_2)-\Phi_J(\Sigma_1)+\Phi_J(B)$. Substituting step 1.1 yields $\Phi_J(\Sigma_2)-\Phi_J(\Sigma_1)=-\Phi_J(B)+\int_C(-T^{ab}\nabla_an_b)\mathrm{vol}_g$; if the integrand vanishes on an open set containing the image of $C$, the integral vanishes and the second assertion follows. This proves (c). [step 1.1, L3, algebra]

3.1 (Killing contraction.) Write $T^{ab}\nabla_a\xi_b=\tfrac12T^{ab}(\nabla_a\xi_b+\nabla_b\xi_a)+\tfrac12T^{ab}(\nabla_a\xi_b-\nabla_b\xi_a)$. The first summand vanishes by the Killing equation. In the second, the symmetry $T^{ab}=T^{ba}$ and a relabelling $a\leftrightarrow b$ give $T^{ab}(\nabla_a\xi_b-\nabla_b\xi_a)=T^{ab}\nabla_a\xi_b-T^{ba}\nabla_a\xi_b=0$. Hence $T^{ab}\nabla_a\xi_b=0$. This proves (d). [given, algebra] ∎

## Remarks

- **Source of the balance.** The right-hand side $-T^{ab}\nabla_an_b$ is a
  source term produced by the congruence: it vanishes identically for a
  parallel congruence ($\nabla n=0$), and for a normalized timelike Killing
  congruence it reduces to $-\Phi^aa_a$ by
  [[lem-gr-killing-congruence-kinematics-and-energy-current]] clause (c). The
  measured energy current alone therefore need not be conserved; only the
  Killing-weighted current of that lemma is.

- **No positivity or dynamics.** The lemma uses only $\nabla^aT_{ab}=0$ and
  the congruence property; no energy condition, no equation of state and no
  existence of a solution of the field equation is used or asserted.
