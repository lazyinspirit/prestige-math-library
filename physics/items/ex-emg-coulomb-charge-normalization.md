---
id: ex-emg-coulomb-charge-normalization
kind: example
title: "Coulomb field and geometric charge scale"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 3
deps:
  - def-countable-choice
  - def-emg-geometric-scaling
  - def-emg-lorentzian-forms
  - thm-emg-field-normalization-equivalence
dependency_roles:
  def-countable-choice: mathematical-premise
  def-emg-geometric-scaling: mathematical-premise
  def-emg-lorentzian-forms: mathematical-premise
  thm-emg-field-normalization-equivalence: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "BIPM, The International System of Units (SI Brochure), 9th edition, version 4.01, §2.3 and the ampere definition, printed pp. 124 and 129"
      url: "https://www.bipm.org/documents/20126/41483022/SI-Brochure-9.pdf"
    - title: "David Tong, General Relativity, Cambridge Part III lecture notes, §4, author-hosted full-text HTML, Maxwell normalization and electromagnetic stress"
      url: "https://www.damtp.cam.ac.uk/user/tong/gr/grhtml/S4.html"
    - title: "Sean M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1, §§4.3–4.5 and 7.2, Maxwell equations and electromagnetic stress"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
---

## Example

On the exterior region $r>0$ of oriented Minkowski four-space, use length coordinates $x^0=ct$ and radial coordinate $r$ in metres. For a signed charge parameter $Q_e$ in coulombs, consider the smooth Coulomb two-form whose only independent spherical component is

$$F_{0r}=-\frac{Q_e}{4\pi\varepsilon_0c\,r^2}.$$

The singular source point $r=0$ is outside the domain; this example records no measurement or distributional source.

## Facts & Assumptions

**Given:** The positive conversion parameters and $\mathcal F=\alpha F$ of [[def-emg-geometric-scaling]], the Lorentzian coordinate convention of [[def-emg-lorentzian-forms]], and the exact geometric electrovac normalization of [[thm-emg-field-normalization-equivalence]]. The inherited geometric setup carries $\mathrm{AC}_\omega$ as in [A1].

[F1] The definitions give $\alpha=\sqrt{\kappa/(2\mu_0)}$, $\kappa=8\pi G/c^4$, and $\varepsilon_0\mu_0c^2=1$. ([[def-emg-geometric-scaling]])

[F2] The same two-form is rescaled by $\mathcal F=\alpha F$ in the exact geometric Einstein normalization. ([[thm-emg-field-normalization-equivalence]])

[A1] The inherited choice assumption is Countable Choice $\mathrm{AC}_\omega$, not full Choice. ([[def-countable-choice]])

## Verification

1.1 From [F1], $\alpha^2=4\pi G/(\mu_0c^4)=4\pi G\varepsilon_0/c^2$. Since $\alpha>0$, this gives $\alpha=\sqrt{4\pi G\varepsilon_0}/c$ and hence $\alpha/(4\pi\varepsilon_0c)=\sqrt{G/(4\pi\varepsilon_0c^4)}$; the positivity assumptions justify taking the positive square root. [given, F1, A1, algebra]

2.1 Multiplying the Coulomb component by $\alpha$ and using the equality in step 1.1 yields $\mathcal F_{0r}=\alpha F_{0r}=-\sqrt{G/(4\pi\varepsilon_0c^4)}\,Q_e/r^2=-q_{\mathrm{geo}}/r^2$. By [F2], this is the geometric charge coefficient in the exact normalized Einstein equation. The equality is valid only on $r>0$ and introduces no point-source solution at the excluded origin. [given, F2, step 1.1, algebra] ∎
