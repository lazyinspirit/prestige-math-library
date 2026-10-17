---
id: lem-emg-maxwell-stress-divergence
kind: lemma
title: "Curved electromagnetic stress divergence"
status: published
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 5
proof_strategy: direct
deps:
  - def-emg-lorentzian-forms
  - lem-emg-maxwell-action-variation
  - lem-emg-maxwell-current-forms
  - thm-gr-nondegenerate-levi-civita-and-tensor-derivative
  - def-countable-choice
  - def-emg-finite-real-supremum-domain
  - def-emg-real-metric-axiom-convention
  - lem-emg-metric-axioms-imply-nonnegativity
  - def-emg-explicit-power-regimes
  - lem-emg-sequence-limit-criterion-with-choice
  - def-emg-boundaryless-completeness-domain
  - def-emg-set-size-and-class-schema
dependency_roles:
  def-emg-lorentzian-forms: mathematical-premise
  lem-emg-maxwell-action-variation: mathematical-premise
  lem-emg-maxwell-current-forms: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  def-countable-choice: mathematical-premise
  def-emg-finite-real-supremum-domain: mathematical-premise
  def-emg-real-metric-axiom-convention: mathematical-premise
  lem-emg-metric-axioms-imply-nonnegativity: mathematical-premise
  def-emg-explicit-power-regimes: mathematical-premise
  lem-emg-sequence-limit-criterion-with-choice: mathematical-premise
  def-emg-boundaryless-completeness-domain: mathematical-premise
  def-emg-set-size-and-class-schema: mathematical-premise
sources:
  references:
    - title: "David Tong, General Relativity, 2019 lecture notes, §4.5.3, PDF pp. 191–193 (printed pp. 184–186)"
      url: "https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf"
      locator: "§4.5.3: the Hilbert tensor and its Maxwell expression. The sourced curved divergence identity is derived in full here from the sourced Maxwell equations."
    - title: "Sean M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 4, equations (4.69)–(4.72), PDF pp. 123–124 (printed pp. 116–117)"
      url: "https://arxiv.org/pdf/gr-qc/9712019v1"
      locator: "Ch. 4: the Hilbert stress convention and Bianchi compatibility context; the electromagnetic sourced contraction is proved locally here."
provenance:
  statement: ai-altered
  proof: ai-altered
---

## Statement

Let $U$ be an oriented open subset of a smooth time-oriented Lorentzian four-manifold of signature $(-,+,+,+)$, with metric-selected connection $\nabla$. Let $F\in\Omega^2(U)$ and $j\in\Gamma(TU)$ be smooth, and let $\mu_0>0$. Assume

$$dF=0,\qquad \nabla_aF^{ab}=-\mu_0j^b,$$

with the sign convention of [[lem-emg-maxwell-current-forms]]. Define the Maxwell Hilbert tensor by the compact metric variation of [[lem-emg-maxwell-action-variation]],

$$T^{\mathrm{EM}}_{ab}:=\frac1{\mu_0}\left(F_{ac}F_b{}^c-\frac14g_{ab}F_{cd}F^{cd}\right).$$

Then

$$\nabla_aT_{\mathrm{EM}}^{ab}=-F^{bc}j_c.$$

All fields and derivatives are smooth on $U$. In length-coordinate SI bookkeeping, assign $[F_{ab}]=\mathrm{Wb\,m^{-2}}$, $[\mu_0]=\mathrm{H\,m^{-1}}$, $[j^a]=\mathrm{A\,m^{-2}}$, and $[T_{\mathrm{EM}}]=\mathrm{J\,m^{-3}}$; these are formal units and not observed values. No quadratic stress is assigned to singular point self-fields or distributional sources.

## Facts & Assumptions

**Given:** The Lorentzian metric, its metric-compatible torsion-free connection, a smooth real two-form $F$, a smooth vector current $j$, $\mu_0>0$, and the two Maxwell equations in the Statement.

[F1] In the selected sourced convention, $\nabla_aF^{ab}=-\mu_0j^b$ and $dF=0$; equivalently the first equation is $d\star F=\mu_0\iota_j\mathrm{vol}_g$. ([[lem-emg-maxwell-current-forms]])

[F2] The Maxwell stress tensor obtained by compact variation at fixed lower $F$ is $T^{\mathrm{EM}}_{ab}=\mu_0^{-1}(F_{ac}F_b{}^c-\frac14g_{ab}F_{cd}F^{cd})$. ([[lem-emg-maxwell-action-variation]])

[F3] The induced connection on tensor fields satisfies the product rule and commutes with contractions; it is torsion-free and metric-compatible, so $\nabla_ag_{bc}=0$. ([[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]])

[A1] The geometric interface carries the $\mathrm{AC}_\omega$ convention through its canonical smooth tangent-bundle supplier. This proof uses no choice after the smooth manifold, metric and fields are given. ([[def-emg-lorentzian-forms]], [[def-countable-choice]])

## Proof

**Proof technique:** differentiate the variational Maxwell tensor, contract the homogeneous Maxwell identity with $F$, and cancel the derivative terms.

1.1 Write $F^2:=F_{cd}F^{cd}$. Because $\nabla$ is torsion-free, $dF=0$ is equivalent to $\nabla_aF_{dc}+\nabla_dF_{ca}+\nabla_cF_{ad}=0$. Metric compatibility and the product rule in [F3] give the raised-index derivatives used below. [A1, F1, F3, given, algebra]

2.1 Multiply the cyclic identity in step 1.1 by $F^{ac}$. The first term is $X_d:=F^{ac}\nabla_aF_{dc}$. In the third term, swapping the dummy indices $a,c$ and using $F^{ca}=-F^{ac}$ and $F_{ad}=-F_{da}$ gives another $X_d$. The middle term is $F^{ac}\nabla_dF_{ca}=-\frac12\nabla_d(F_{ac}F^{ac})=-\frac12\nabla_dF^2$. Thus $2X_d-\frac12\nabla_dF^2=0$, so $F^{ac}\nabla_aF_{dc}=\frac14\nabla_dF^2$. [step 1.1, F3, algebra]

3.1 Raise $d$ in step 2.1 and differentiate the tensor in [F2]. The product rule yields $\mu_0\nabla_aT_{\mathrm{EM}}^{ab}=(\nabla_aF^{ac})F^b{}_c+F^{ac}\nabla_aF^b{}_c-\frac14\nabla^bF^2=-\mu_0j_cF^{bc}+\frac14\nabla^bF^2-\frac14\nabla^bF^2$, where the sourced equation in [F1] gives the first term and step 2.1 gives the second. [F1, F2, F3, step 2.1, algebra]

4.1 The last two terms in step 3.1 cancel. Dividing by $\mu_0>0$ gives $\nabla_aT_{\mathrm{EM}}^{ab}=-F^{bc}j_c$, as claimed. The calculation uses no regularity beyond the stated smoothness and no physical or empirical premise. [step 3.1, algebra] ∎

## Remarks

- The sign is tied to $\nabla_aF^{ab}=-\mu_0j^b$ and to the Hilbert tensor in [F2]. Reversing the source convention reverses the exchange sign.
- If the matter identity of [[lem-emg-matter-noether-exchange]] also applies, the two divergences cancel in the sum $T^{\mathrm{EM}}+T^m$.
- The M03 current-form and Maxwell-action carriers are present as drafts and are used only at their inspected statement interfaces; this calculation does not approve their proofs. The seven typed foundational replacement carriers declared in `deps` are now authored on emg-mg02; no independent acceptance is asserted: [[def-emg-finite-real-supremum-domain]], [[def-emg-real-metric-axiom-convention]], [[lem-emg-metric-axioms-imply-nonnegativity]], [[def-emg-explicit-power-regimes]], [[lem-emg-sequence-limit-criterion-with-choice]], [[def-emg-boundaryless-completeness-domain]], and [[def-emg-set-size-and-class-schema]].

