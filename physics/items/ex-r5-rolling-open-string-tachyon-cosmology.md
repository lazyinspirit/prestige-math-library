---
id: ex-r5-rolling-open-string-tachyon-cosmology
kind: example
title: Rolling open-string tachyon as an effective cosmological component
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: physics
library: physics
dependency_level: 2
deps:
- def-r5-alternative-cosmology-model-data
dependency_roles:
  def-r5-alternative-cosmology-model-data: formulation-prerequisite
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
  - title: A. Sen, Tachyon Matter, arXiv:hep-th/0203265
    url: https://arxiv.org/pdf/hep-th/0203265
    locator: §5, Eqs. (5.1)–(5.6), for the effective action with A_{μν}=η_{μν}+∂_μT∂_νT and the homogeneous stress in mostly-plus
      signature.
  - title: 'M. Cicoli, J. P. Conlon, A. Maharana, S. Parameswaran, F. Quevedo and I. Zavala, String Cosmology: from the Early
      Universe to Today, arXiv:2303.04819v2'
    url: https://arxiv.org/pdf/2303.04819v2
    locator: §7.5, PDF pp. 141–142; HTML Eqs. (347)–(348) / PDF Eqs. (325)–(326) and surrounding text give the source-reported DBI action, homogeneous stress and dust limit. With the declared (-+++) signature, the action convention is checked locally below against Sen §5, Eqs. (5.1)–(5.6).
physical_scope: Conditional source-normalized open-string tachyon effective action on a four-dimensional induced string-frame
  worldvolume. The stress tensor is derived locally; no microscopic brane-action derivation, four-dimensional Einstein-frame
  conversion, global compactification, inflation, or observation is asserted.
---

## Example

Use natural units $\hbar=c_{\rm light}=1$ and the source convention $2\pi\alpha'=1$. Let $\mathcal W=I\times\mathbb R^3$ be a four-dimensional unstable D3-brane worldvolume (three spatial dimensions) with coordinates $x^\mu$ of length, smoothly embedded by $\iota$ in a string-frame Lorentzian spacetime $(\mathcal X,G_{\rm str})$; its induced metric is $g^{\rm ind,s}:=\iota^*G_{\rm str}$. The instability is modeled by a real tachyon field $T\in C^2(\mathcal W)$ with a potential $V(T)$ that has a maximum and vanishes at its asymptotic minimum. The field has units of length, so $\partial_\mu T$ is dimensionless; in the stated string units its numerical values are dimensionless. The potential density has mass dimension four, with the positive brane-tension normalization absorbed into $V$. The adopted action is $S_s=-\int_{\mathcal W}d^4x\,V(T)\sqrt{-\det(g^{\rm ind,s}_{\mu\nu}+\partial_\mu T\partial_\nu T)}$. Sen's §5 uses the flat Minkowski metric $\eta_{\mu\nu}$; replacing it by $g^{\rm ind,s}$ is an additional covariantization assumption, not a result supplied by Sen. For a homogeneous $T=T(t)$ on the flat-FLRW induced metric $ds_s^2=-dt^2+a_s(t)^2\delta_{ij}dx^idx^j$ with $|\dot T|<1$, the stress components $\rho_s=V(T)/\sqrt{1-\dot T^2}$ and $p_s=-V(T)\sqrt{1-\dot T^2}$ have mass dimension four. A dust-like asymptotic statement requires $V(T)\to0$ and the stated solution regime. A four-dimensional Einstein-frame quantity requires a separate dilaton/volume Weyl transformation and field normalization, not asserted here.

For the calculation, take $\mathcal X$ to be smooth and time-oriented, $\iota:\mathcal W\to\mathcal X$ a smooth timelike embedding, and $g^{\mathrm{ind},s}=\iota^*G_{\rm str}$ a smooth Lorentzian metric of signature $(-,+,+,+)$. The coordinates $(t,x^1,x^2,x^3)$ have dimensions of length; $a_s$ and the metric components are dimensionless in these coordinates. The adopted worldvolume model is [A1], with $T=T(t)$; a Weyl/dilaton/volume transformation to a four-dimensional Einstein-frame action and any corresponding field normalization would be separate input.

## Example references

[[def-r5-alternative-cosmology-model-data]]

[A. Sen, Tachyon Matter, arXiv:hep-th/0203265](https://arxiv.org/pdf/hep-th/0203265)

[M. Cicoli, J. P. Conlon, A. Maharana, S. Parameswaran, F. Quevedo and I. Zavala, String Cosmology: from the Early Universe to Today, arXiv:2303.04819v2](https://arxiv.org/pdf/2303.04819v2)

## Facts & Assumptions

[F1] [[def-r5-alternative-cosmology-model-data]]: A model datum specifies its spacetime dimension and metric frame, action and fields, background branch, transition data, correction-control regime, and observable outputs; unprovided transfer data remain missing.

[A1] Adopt the open-string tachyon worldvolume action $S_s[T,g]=-\int_{\mathcal W}d^4x\,V(T)\sqrt{-\det\left(g^{\mathrm{ind},s}_{\mu\nu}+\partial_\mu T\partial_\nu T\right)}$, with the positive overall source normalization absorbed into $V$. Sen's flat-space action uses $A_{\mu\nu}=\eta_{\mu\nu}+\partial_\mu T\partial_\nu T$; the induced-metric replacement in this item is an additional adopted covariantization. Here $V(T)\geq0$ on the branch and $|\dot T|<1$ for a homogeneous real-action solution. The action is an effective model input; this item does not derive it from a general brane action or a global string construction.

## Verification

**Given:** [A1], a compactly supported metric variation, and the homogeneous flat-FLRW setup above.

1.1 The matrix determinant lemma gives $\det(g^{\mathrm{ind},s}+\partial T\,\partial T)=\det(g^{\mathrm{ind},s})Q$, where $Q=1+g^{\mathrm{ind},s,\mu\nu}\partial_\mu T\partial_\nu T>0$. Thus [A1] has density $\mathcal L_s=-V(T)\sqrt{-g}\sqrt Q$. [given, A1, algebra]

2.1 Varying the reduced density with respect to $g^{\mu\nu}$ gives $\delta S_s=\frac12\int d^4x\sqrt{-g}\left(g_{\mu\nu}V\sqrt Q-\frac{V}{\sqrt Q}\partial_\mu T\partial_\nu T\right)\delta g^{\mu\nu}$. Therefore $T_{\mu\nu}=-\frac{2}{\sqrt{-g}}\frac{\delta S_s}{\delta g^{\mu\nu}}=\frac{V}{\sqrt Q}\partial_\mu T\partial_\nu T-g_{\mu\nu}V\sqrt Q$. [A1, step 1.1, algebra]

3.1 For $T=T(t)$, $Q=1-\dot T^2$. Then $T_{00}=V\dot T^2/\sqrt Q+V\sqrt Q=V/\sqrt{1-\dot T^2}$ and $T_{ij}=-g_{ij}V\sqrt Q$. Thus $\rho_s=V(T)/\sqrt{1-\dot T^2}$ and $p_s=-V(T)\sqrt{1-\dot T^2}$. [A1, step 2.1, algebra]

4.1 Their ratio is $w_s=p_s/\rho_s=-(1-\dot T^2)$ whenever $V>0$. Hence $w_s\to0$ as $|\dot T|\to1$. This ratio alone does not guarantee finite nonzero density. [step 3.1, algebra]

5.1 If, in addition, the chosen solution has $V(T)\to0$ and $\rho_s\to\rho_*>0$ while $|\dot T|\to1$, then $p_s=-\rho_s(1-\dot T^2)\to0$ and the homogeneous stress approaches a pressureless component of density $\rho_*$. The action alone selects no such solution and proves no Einstein-frame cosmology. [F1, A1, step 4.1, algebra] ∎
