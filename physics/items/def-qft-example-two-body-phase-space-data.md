---
id: def-qft-example-two-body-phase-space-data
kind: definition
title: Two-body phase-space and formal coefficient data
status: published
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 1
deps:
  - def-countable-choice
  - def-qft-example-data
  - lem-euclidean-chart-measure-agrees-with-polar-surface-measure
dependency_roles:
  def-countable-choice: mathematical-premise
  def-qft-example-data: mathematical-premise
  lem-euclidean-chart-measure-agrees-with-polar-surface-measure: mathematical-premise
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: David Tong, Quantum Field Theory, Chapter 3, sections 3.5–3.6
      url: https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S3.html
      locator: Complete author-hosted HTML chapter; scalar tree amplitude, two-body decay and cross-section normalization.
    - title: Mark Srednicki, Quantum Field Theory, author-posted prepublication draft, section 11
      url: https://web.physics.ucsb.edu/~mark/ms-qft-DRAFT.pdf
      locator: Complete 616-page author-hosted textbook draft; printed pp. 93–99, invariant phase-space, flux, two-body measure, and identical-particle symmetry factors.
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
---

## Definition

Assume Countable Choice [[def-countable-choice]] and use the energy-vector, metric, and unit conventions of [[def-qft-example-data]]. A rest-energy parameter $\mathsf M\geq0$ and every energy-vector component are measured in joules. Set $D_{\mathsf M}=\mathbb R^3$ when $\mathsf M>0$ and $D_0=\mathbb R^3\setminus\{0\}$. Define $\iota_{\mathsf M}:D_{\mathsf M}\to\mathbb R^4$ by
$$\iota_{\mathsf M}(\mathbf p)=\bigl(\sqrt{|\mathbf p|^2+\mathsf M^2},\mathbf p\bigr), \qquad \mathcal H^+_{\mathsf M}:=\iota_{\mathsf M}(D_{\mathsf M}).$$
Thus $\mathcal H^+_{\mathsf M}$ is the positive-energy shell, with its subspace Borel structure. Define the Borel shell measure $\nu_{\mathsf M}$ as the pushforward under $\iota_{\mathsf M}$ of the measure absolutely continuous with respect to three-dimensional Lebesgue measure on $D_{\mathsf M}$, with density $((2\pi)^3\,2\sqrt{|\mathbf p|^2+\mathsf M^2})^{-1}$. In particular, the massless apex is excluded.

Let $\mathsf M_1,\mathsf M_2\geq0$ and let $s>(\mathsf M_1+\mathsf M_2)^2$. Define
$$k_*=\frac{\sqrt{[s-(\mathsf M_1+\mathsf M_2)^2][s-(\mathsf M_1-\mathsf M_2)^2]}}{2\sqrt{s}}, \qquad E_i^*=\sqrt{k_*^2+\mathsf M_i^2}.$$
Both factors under the square root are positive, so $k_*>0$. On the Euclidean unit sphere $S^2$, let $\Omega$ be the chart surface Borel measure of [[lem-euclidean-chart-measure-agrees-with-polar-surface-measure]]. Define the finite Borel measure $\Phi_2$ on $S^2$ and the shell-pair map $\Psi_2:S^2\to\mathcal H^+_{\mathsf M_1}\times\mathcal H^+_{\mathsf M_2}$ by
$$d\Phi_2=\frac{k_*}{16\pi^2\sqrt{s}}\,d\Omega, \qquad \Psi_2(\mathbf n)=((E_1^*,k_*\mathbf n),(E_2^*,-k_*\mathbf n)).$$
The center-of-momentum measure on the shell-pair space is the pushforward $(\Psi_2)_\#\Phi_2$. The angular measure $\Phi_2$ and its shell-pair pushforward are distinct typed measures.

For incoming energy four-vectors $p_i\in\mathcal H^+_{\mathsf M_{i,\mathrm{in}}}$, where $\mathsf M_{i,\mathrm{in}}\geq0$ for $i=1,2$, define the invariant flux when its radicand is nonnegative by
$$F(p_1,p_2)=4\sqrt{(p_1\cdot p_2)^2-\mathsf M_{1,\mathrm{in}}^2\mathsf M_{2,\mathrm{in}}^2}, \qquad p\cdot q=h(p,q).$$
Let $\mathcal S_{\rm in}$ and $\mathcal S_{\rm out}$ be finite nonempty sets of initial and final spin labels, respectively, and let $w_i\geq0$ for $i\in\mathcal S_{\rm in}$ satisfy $\sum_iw_i=1$. A spin-resolved formal amplitude is a family of dimensionless Borel functions $\mathcal A_{if}:S^2\to\mathbb C$, indexed by $i\in\mathcal S_{\rm in}$ and $f\in\mathcal S_{\rm out}$. Define the Borel function
$$\overline{|\mathcal A(\mathbf n)|^2}:=\sum_{i\in\mathcal S_{\rm in}}w_i\sum_{f\in\mathcal S_{\rm out}}|\mathcal A_{if}(\mathbf n)|^2.$$
For a specified final two-particle channel, set $S_f=2$ when its two final particles are identical and $S_f=1$ when they are distinguishable. When the incoming flux is positive, $F>0$, define the angular cross-section coefficient measure $\sigma_{\rm coeff}$ on $S^2$ by
$$d\sigma_{\mathrm{coeff}}=\frac{(\hbar c)^2}{F S_f}\, \overline{|\mathcal A(\mathbf n)|^2}\,d\Phi_2.$$
For a parent at rest with energy $\mathsf M_0>0$ and a specified single-channel Borel formal decay amplitude $\mathcal G:S^2\to\mathbb C$ measured in joules, define the extended nonnegative coefficient
$$\Gamma_{\mathrm{coeff}}=\frac{1}{2\hbar\mathsf M_0 S_f} \int_{S^2}|\mathcal G(\mathbf n)|^2\,d\Phi_2.$$
It is a finite rate coefficient when this integral is finite; otherwise the displayed integral has value $+\infty$.
These are mathematical coefficient maps for the explicitly specified formal amplitudes; their definitions assert no exact interacting scattering operator or decay law.
