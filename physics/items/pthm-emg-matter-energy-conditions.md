---
id: pthm-emg-matter-energy-conditions
kind: physics-theorem
title: "Observer energy conditions for selected matter plus EM"
status: published
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: physics
library: physics
dependency_level: 2
proof_strategy: direct
deps:
  - def-emg-matter-observables
  - thm-emg-selected-matter-energy-conditions
dependency_roles:
  def-emg-matter-observables: formulation-prerequisite
  thm-emg-selected-matter-energy-conditions: mathematical-premise
physical_scope: "Pointwise observer interpretation of the selected smooth electromagnetic, charged-dust and perfect-fluid stress tensors. Electromagnetic and nonnegative-dust energy conditions are conditional tensor deductions; perfect-fluid conclusions require the exact stated inequalities. No general matter positivity or empirical claim is made."
empirical_premises: []
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Sean M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1, complete 238-page lecture notes"
      url: "https://arxiv.org/pdf/gr-qc/9712019v1"
      locator: "Ch. 1, equation (1.111), Maxwell stress in Gaussian units; Ch. 4, equations (4.69)–(4.72), general Hilbert stress-energy definition and weak-energy-condition context. The exact local SI tensor and observer components are established by the cited mathematical theorem."
    - title: "David Tong, General Relativity, complete author-hosted 290-page lecture notes"
      url: "https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf"
      locator: "§§4.5.3–4.5.4 and §4.5.7, PDF pp. 190–194 and 201–204 (printed pp. 183–187 and 194–197), Maxwell/perfect-fluid stress and energy-condition definitions. The exact local SI inequalities are established by the cited mathematical theorem."
verification:
  precheck: pass
---

## Statement

Use the smooth electromagnetic stress, observer contractions and selected matter tensors of [[def-emg-matter-observables]], with $\mu_0>0$ and a future unit observer $n$. The electromagnetic tensor is symmetric and trace-free, and it satisfies WEC, NEC, SEC and DEC. In a positively oriented orthonormal rest tetrad, with the cross product taken in the oriented Euclidean rest space, its energy density and spatial energy-current components are

$$u=\frac{\epsilon_0|E_n|^2+|B_n|^2/\mu_0}{2},\qquad \mathcal S_n=\frac{E_n\times B_n}{\mu_0c}.$$

For charged dust with $\rho\geq0$, the matter tensor and its sum with the electromagnetic tensor satisfy all four conditions. For a selected perfect-fluid tensor with rest energy density $\epsilon$ and pressure $p$, the exact pointwise conditions on the matter tensor are

$$\mathrm{WEC}\iff \epsilon\geq0\text{ and }\epsilon+p\geq0,\qquad \mathrm{NEC}\iff\epsilon+p\geq0,$$

$$\mathrm{SEC}\iff\epsilon+p\geq0\text{ and }\epsilon+3p\geq0,\qquad \mathrm{DEC}\iff\epsilon\geq|p|.$$

If the perfect-fluid tensor satisfies any one of these conditions, adding the electromagnetic tensor preserves that condition. The inequalities are not assumed universally, and adding the electromagnetic tensor to arbitrary matter need not repair a violated condition.

## Facts & Assumptions

**Given:** The smooth Lorentzian metric, positive $\mu_0$, observer, electromagnetic field and selected dust or perfect-fluid tensors in the Statement.

[F1] [[def-emg-matter-observables]]: $T_{\mathrm{EM}}^{ab}=\mu_0^{-1}(F^{ac}F^b{}_c-\tfrac14g^{ab}F_{cd}F^{cd})$, $F_{0i}=-E_i/c$, $F_{ij}=\epsilon_{ijk}B_k$, and the dust and perfect-fluid matter tensor definitions.

[F2] [[thm-emg-selected-matter-energy-conditions]]: the electromagnetic tensor satisfies WEC, NEC, SEC and DEC with rest-frame density $u=(|E|^2/c^2+|B|^2)/(2\mu_0)$ and energy flux $(E\times B)/(\mu_0c)$; dust with $\rho\geq0$ satisfies all four; the displayed perfect-fluid inequalities are exact; sums preserve each satisfied condition. This draft mathematical proof is used only at its stated algebraic interface.

[A1] The dust branch, when used, assumes $\rho\geq0$. No sign restriction is added to $\epsilon$ or $p$ except when a particular perfect-fluid condition is asserted.

## Proof

1.1 The definitions in [F1] fix the electromagnetic stress and observer convention. The mathematical component and cone argument [F2] establishes its symmetry, trace, observer density and flux, and all four energy conditions. The same supplier gives the exact inequalities for the selected dust and perfect-fluid tensors under [A1]. [F1, F2, A1, given]

2.1 At each point, [F2] proves the future-causal cone and each quadratic condition are preserved under addition of tensors that satisfy the same condition. Therefore nonnegative dust plus the electromagnetic tensor satisfies all four; a perfect-fluid sum satisfies each condition asserted only when the corresponding listed fluid inequalities hold. No conclusion is made for an arbitrary matter tensor. [F2, step 1.1, algebra] ∎
