---
id: post-qft-example-formal-observable-map
kind: postulate
domain: physics
library: physics
title: Formal diagram coefficient-to-observable adoption
status: published
origin: pipeline
pipeline_run: physics-td-qft-rpm-62-2026-10-14
dependency_level: 7
deps:
  - def-qft-example-observable-types
  - def-countable-choice
  - post-qft-formal-qed-coefficients
  - lem-qft-example-two-body-phase-space
dependency_roles:
  def-qft-example-observable-types: formulation-prerequisite
  def-countable-choice: mathematical-premise
  post-qft-formal-qed-coefficients: formulation-prerequisite
  lem-qft-example-two-body-phase-space: mathematical-premise
physical_scope: >-
  A model-specific phenomenological reading of named formal tree coefficients
  through the stated two-body flux and phase-space maps. It adopts no exact
  continuum scattering operator, LSZ limit, convergence estimate, loop or
  soft-radiation correction, detector model, or empirical result.
empirical_premises: []
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: David Tong, Quantum Field Theory, Chapter 3 §§3.5.3 and 3.6.2–3.6.3, and Chapter 6 §6.6
      url: https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S3.html
    - title: David Tong, Quantum Field Theory, Chapter 6 §§6.4.1, 6.5 and 6.6
      url: https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S6.html
    - title: Mark Srednicki, Quantum Field Theory, author-hosted prepublication draft, §§11, 46–48, 59 and 64
      url: https://web.physics.ucsb.edu/~mark/ms-qft-DRAFT.pdf
    - title: X. Fan et al., Measurement of the Electron Magnetic Moment, Physical Review Letters 130, 071801 (2023), arXiv:2209.13084v2
      url: https://arxiv.org/html/2209.13084
verification:
  sources_checked:
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    by: "Completed delegated workflow source/scope reviewers and adjudicators; owner accepted existing evidence"
---

## Postulate

Assume Countable Choice, $\mathrm{AC}_\omega$ [[def-countable-choice]], as required by the cited mathematical phase-space map.

For a specifically named finite tree calculation, adopt its selected formal
diagram coefficient as a **leading perturbative coefficient** with a stated
phenomenological reading. For QED, use the vertex and free-line conventions
of the current draft supplier
[[post-qft-formal-qed-coefficients]]. A Dirac species of natural charge $q_n$ has
vertex $iq_n\gamma^a$; the electron has $q_n=-e_n$ and vertex
$-ie_n\gamma^a$. The rational fermion line is
$$ i\frac{\not p+\mu}{h(p,p)-\mu^2}, $$
for $\mu>0$ and off-shell $p$ with $h(p,p)-\mu^2\ne0$. In Feynman gauge
the auxiliary photon line is
$$ -i\frac{h_{ab}}{h(k,k)+i0}=i\frac{\eta_{ab}}{h(k,k)+i0}. $$
For a finite matrix kernel the coefficientwise inverse in
[[post-qft-formal-qed-coefficients]] is part of the formal convention and
asserts no convergence. If a time-ordered distribution is used, use the
actual free carrier specified there; that identification is conditional on
[[def-countable-choice]]. The displayed pole notation does not define loop
products. In the pair-production channel below the selected muon also has
model charge $-e$, and only the photon line is internal.

For declared incoming spin probabilities, sum over declared final spin
labels, and a specified formal amplitude $\mathcal A$, adopt the
cross-section coefficient map of
[[lem-qft-example-two-body-phase-space]]. Its scattering inputs are
positive-shell energy vectors $p_i=(E_i,\mathbf p_i)$ with
$E_i=\sqrt{|\mathbf p_i|^2+\mathsf M_{i,\rm in}^2}>0$,
$\mathsf M_{i,\rm in}\ge0$, and common future-timelike total
$P=p_1+p_2=k_1+k_2$. The outgoing $k_j$ are on their specified positive
shells. Require $s=h(P,P)>(\mathsf M_1+\mathsf M_2)^2$ for the outgoing
rest energies and positive incoming flux $F>0$, precisely the supplier's
admissible scattering domain. In the center-of-momentum frame it
uses the invariant incoming flux $F$, the two-body measure $d\Phi_2$, and the
final-state factor $S_f=2$ for identical particles or $S_f=1$ for
distinguishable particles, integrated over the full labeled sphere. When
this coefficient is read phenomenologically, the initial preparation,
channel, threshold, and approximation are part of the model statement. No
universal error estimate for omitted terms is implied.

For the scalar examples, separately adopt the constant formal amplitudes
$\mathcal A=-\lambda$ for the quartic contact channel and $\mathcal G=G_E$
for the cubic parent decay, with the units and external normalization stated
at each use. The scalar scattering inputs lie on their stated positive
shells with a common total and the same strict threshold and positive-flux
conditions. For decay, the parent is $P_0=(\mathsf M_0,\mathbf0)$,
$\mathsf M_0>\mathsf M_1+\mathsf M_2$, and its two positive-shell daughters
sum to $P_0$. Their coefficient map is the one in
[[lem-qft-example-two-body-phase-space]]. If a rate $\Gamma$ is reported as
an energy width, the convention is explicitly $\Gamma_E:=\hbar\Gamma$; it
does not supply a survival law.

The readings above do not identify a formal coefficient with an exact
continuum cross section, probability, decay rate, or measured estimate. In
particular they do not construct an interacting continuum $S$-matrix or LSZ
limit, establish convergence of a perturbation series, bound loop or
soft-radiation effects, specify beam or detector cuts, resolve threshold
resummation, or reproduce the statistical analysis of an experiment. A
comparison with observations would require the actual apparatus, sampling,
calibration, uncertainty, and radiative-inclusiveness conditions. The
reported electron magnetic-moment measurements, including the Fan et al.
report listed in the source references, remain source-reported
empirical results and are not premises of this adoption.

## Facts & Assumptions

**Given:** The formal-coefficient and source-reported-estimate distinction of [[def-qft-example-observable-types]], the mathematical maps of [[lem-qft-example-two-body-phase-space]] under its Countable Choice hypothesis, and the model-specific nature of the adoption.

[F1] [[def-qft-example-observable-types]]: a formal coefficient record is a sequence of specified coefficients and is not an evaluated probability or error bound without a separate evaluation/adoption; an empirical estimate retains its reported apparatus, sampling, analysis, and uncertainty conditions.

[F2] [[lem-qft-example-two-body-phase-space]]: the cross-section coefficient map, on the positive-shell/common-total/strict-threshold domain with $F>0$ just stated, is $(\hbar c)^2\overline{|\mathcal A|^2}d\Phi_2/(F S_f)$ and the decay coefficient map is $\int |\mathcal G|^2d\Phi_2/(2\hbar\mathsf M_0S_f)$.

[A1] [[post-qft-formal-qed-coefficients]] is the current batch-53 QFT-G02 draft. It adopts the Dirac-species vertex $iq_n\gamma^a$ (electron $q_n=-e_n$), the fermion line $i(\not p+\mu)/(h(p,p)-\mu^2)$ only for $\mu>0$ and $h(p,p)-\mu^2\ne0$, and the Feynman-gauge photon line $-ih_{ab}/(h(k,k)+i0)$. A time-ordered free line uses the actual Countable-Choice-dependent carrier $H_\mu$; this is a postulate with no Proof section and no claim of convergence, loop products, LSZ, or nonperturbative continuum existence. Its carrier is current and its exact interface was inspected; its proof/adoption status remains draft.
