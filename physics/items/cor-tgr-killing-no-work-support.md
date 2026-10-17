---
id: cor-tgr-killing-no-work-support
kind: corollary
title: "Zero Killing contraction makes the sourced Killing current divergence-free"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 5
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [lem-tgr-killing-energy-normalization, def-gr-smooth-lorentzian-objects, def-gr-killing-field, thm-gr-killing-and-on-shell-matter-identities, def-countable-choice, thm-gr-nondegenerate-levi-civita-and-tensor-derivative, def-tgr-spacelike-current-slab, thm-tgr-finite-current-production-balance]
dependency_roles:
  lem-tgr-killing-energy-normalization: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
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
      locator: "Section 5.3 gives the Killing equation and the current-divergence exercise; section 6.3 states covariant stress-energy balance; section 8.7 supplies the finite boundary-flux convention."
    - title: "D. Tong, General Relativity, author-hosted full-text lecture notes"
      url: "https://www.damtp.cam.ac.uk/user/tong/gr/grhtml/S4.html"
      locator: "Chapter 4, section 4.5.5, subsection Conserved Energy from a Killing Vector: current divergence and charge balance."
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
      locator: "Chapter 4, printed pp. 117–118 (PDF pp. 124–125): stress-energy conservation and flux; chapter 5, printed pp. 140–142 (PDF pp. 147–149): Killing equation."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Statement

Use the time-oriented Lorentzian open set, smooth metric, metric-selected connection, Killing field, positively oriented finite coordinate slab with compact closure, and finite-slab conventions of [[lem-tgr-killing-energy-normalization]], including its definitions of $h_{ij},n_a,w,j_\xi,H_\xi$ and the net outward side flux $\Phi_{j_\xi}(B)$. Assume $\mathrm{AC}_\omega$ as required by its connection construction. Let $T^{ab}$ be smooth and symmetric and let $f^b$ be a smooth vector field such that $\nabla_aT^{ab}=f^b$; this replaces the conserved-stress hypothesis for this corollary. If $f^b\xi_b=0$, then $\nabla_a j_\xi^a=0$, and, conditional on the finite-slab balance theorem [[thm-tgr-finite-current-production-balance]] at its actual interface, the finite slice charges satisfy $H_\xi(x_0^+)-H_\xi(x_0^-)+\Phi_{j_\xi}(B)=0$. Thus the endpoint charges are equal exactly when the net side flux is zero. In the static subcase, assume $\xi=\mathcal N_\xi u$ with $\mathcal N_\xi>0$; the algebraic zero-work condition $u_bf^b=0$ then implies $f^b\xi_b=0$. No infinite-domain or exhaustion limit is asserted.

## Facts & Assumptions

**Given:** The geometric setup, current definition, and finite-slab convention of [[lem-tgr-killing-energy-normalization]], with a smooth symmetric tensor $T^{ab}$, a smooth vector field $f^b$, $\nabla_aT^{ab}=f^b$, and $f^b\xi_b=0$. The conserved-stress equation in the lemma is not assumed here.

[A1] Assume $\mathrm{AC}_\omega$, the Axiom of Countable Choice, to carry the exact hypothesis of the lemma and its Levi-Civita supplier ([[def-countable-choice]]).

[F1] [[lem-tgr-killing-energy-normalization]] defines $j_\xi^a=-T^{ab}\xi_b$, $H_\xi$ as the finite proper-normal flux charge, and the exact finite-slab geometric notation; its MI01 balance input is the theorem statement recorded in [L2].

[F2] [[def-gr-killing-field]] defines a Killing field by $\mathcal L_\xi g=0$.

[F3] Under [A1], [[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]] supplies the induced tensor derivative product rule.

[F4] On the oriented chart domain inherited from the lemma, [[thm-gr-killing-and-on-shell-matter-identities]] clause (a) proves $\mathcal L_\xi g=0\Longleftrightarrow\nabla_a\xi_b+\nabla_b\xi_a=0$ for every smooth vector field $\xi$; its other clauses are not used.

[L1] [[def-tgr-spacelike-current-slab]] defines a positively oriented product slab with open spatial rectangle and compact closure, future unit slice normal, proper normal-flux charge, and upper-minus-lower coordinate side flux, with $C^1$ current regularity and mathematical real coordinates.

[L2] [[thm-tgr-finite-current-production-balance]] assumes the $\mathrm{AC}_\omega$ background, the slab data and a $C^1$ current $J$; with $\Pi=\nabla_aJ^a$, it states $Q_J(t_1)-Q_J(t_0)+\Phi_J(B)=\int_K\Pi\,\mathrm{vol}_g$.

## Proof

**Proof technique:** direct; compute the source term in the Killing-current divergence and apply the finite-slab balance to the resulting current.

1.1 By [A1] and [F3], the induced tensor product rule and the supplied source equation give $\nabla_a j_\xi^a=-(\nabla_aT^{ab})\xi_b-T^{ab}\nabla_a\xi_b=-f^b\xi_b-T^{ab}\nabla_a\xi_b$. [A1, F1, F3, given, algebra]

2.1 Symmetry of $T^{ab}$, the Killing definition [F2], and its exact characterization [F4] give $T^{ab}\nabla_a\xi_b=\tfrac12T^{ab}(\nabla_a\xi_b+\nabla_b\xi_a)=0$. The assumed zero Killing contraction therefore gives $\nabla_a j_\xi^a=0$. [F2, F4, step 1.1, given, algebra]

3.1 The smooth current is $C^1$, so the balance [L2] applies at its stated interface. Substituting step 2.1 into its production integral gives zero, while [F1] identifies the normal current flux with $H_\xi$; hence the conditional endpoint-plus-side-flux identity follows. [F1, L1, L2, step 2.1, algebra]

4.1 In the balance from step 3.1, zero net side flux implies equal endpoint charges, and equal endpoint charges imply zero net side flux. In the static case, $f^b\xi_b=\mathcal N_\xi f^bu_b=0$ whenever $u_bf^b=0$; thus zero local work suffices for current conservation. [F1, L2, given, step 2.1, step 3.1, algebra] ∎
