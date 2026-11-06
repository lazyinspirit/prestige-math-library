---
id: def-type-iib-supergravity-killing-spinor-equations
kind: definition
title: Type IIB Supergravity Killing Spinor Equations
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 12
domain: physics
library: physics
deps:
- def-supergravity-conventions-and-normalizations
- post-type-iib-two-derivative-supergravity-pseudoaction
- post-type-iib-fiveform-self-duality-constraint
- pthm-type-iib-field-equations-with-self-duality
- def-type-iib-spinor-bundle-data
dependency_roles:
  def-supergravity-conventions-and-normalizations: formulation-prerequisite
  post-type-iib-two-derivative-supergravity-pseudoaction: physical-assumption
  post-type-iib-fiveform-self-duality-constraint: physical-assumption
  pthm-type-iib-field-equations-with-self-duality: physical-result
  def-type-iib-spinor-bundle-data: mathematical-premise
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
  - title: M. J. D. Hamilton, The field and Killing spinor equations of M-theory and type IIA/IIB supergravity in coordinate-free
      notation, arXiv:1607.00327v3
    url: https://arxiv.org/pdf/1607.00327v3
    locator: §7.2, Theorem 7.9, printed pp. 44–45; visually checked spinor doublet, Pauli matrices, Omega forms, and both
      equations against page images.
  - title: Emily J. Hackett-Jones and Douglas J. Smith, Type IIB Killing spinors and calibrations, arXiv:hep-th/0405098v3
    url: https://arxiv.org/pdf/hep-th/0405098v3
    locator: Section 2 opening, printed pp. 2–3 (PDF pp. 3–4), equations (1)–(2) and footnotes 1–2; string-frame gravitino
      structure, supplied chiral doublet, and physical Clifford convention. Its democratic RR field basis does not set the
      displayed undoubled Hamilton coefficients.
physical_scope: Local string-frame supersymmetry condition for a smooth nonzero Type IIB Majorana–Weyl spinor doublet on a
  bosonic solution. It asserts neither existence of such a spinor nor that the Killing-spinor equations alone imply the bosonic
  equations.
aliases: []
verification:
  precheck: n/a
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Definition

Assume the source-free bosonic solution and convention of *Type IIB Two Derivative Supergravity Pseudoaction*, *Type IIB Five Form Self Duality Constraint*, and *Type IIB Field Equations with Five Form Self Duality*, together with the spinor bundle data of *Lorentzian Type IIB Spinor Bundle Data*, applied with its metric $g$ identified with the same string-frame metric $g_s$ as the pseudoaction. Thus its full Clifford action, chirality decomposition, and lifted spin connection all use $g_s$; write $\nabla^S:=\nabla^{S,g_s}$ and $X^\flat:=g_s(X,\cdot)$. Write the two left-handed Majorana–Weyl spinors as a smooth doublet $\epsilon=(\epsilon_1,\epsilon_2)\in\Gamma(S_+\oplus S_+)$. Let $\sigma_1=\begin{pmatrix}0&1\\1&0\end{pmatrix}$, $\sigma_2=\begin{pmatrix}0&-i\\i&0\end{pmatrix}$, $\sigma_3=\begin{pmatrix}1&0\\0&-1\end{pmatrix}$ and set $\lambda_1=\sigma_1$, $\lambda_2=i\sigma_2$, $\lambda_3=\sigma_3$, acting on the doublet. Define the form-valued matrices

$$\widetilde\Omega=\frac18e^\Phi\left(G_1\lambda_2-\widetilde G_3\lambda_1+\frac12\widetilde G_5\lambda_2\right),\qquad \Omega=e^\Phi\left(\frac12\widetilde G_3\lambda_1-G_1\lambda_2\right).$$

A bosonic solution is called supersymmetric on the patch exactly when there exists a smooth nonzero doublet $\epsilon$ such that for every smooth vector field $X$,

$$\nabla^S_X\epsilon+\frac14(i_XH_3)\lambda_3\cdot\epsilon+\widetilde\Omega\cdot(X^\flat\cdot\epsilon)=0,\qquad (d\Phi+\tfrac12H_3\lambda_3+\Omega)\cdot\epsilon=0.$$

Here $i_X$ is contraction, $X^\flat=g_s(X,\cdot)$, and Clifford multiplication is extended to form-valued doublet endomorphisms as in *Lorentzian Type IIB Spinor Bundle Data*. The two-form operator $i_XH_3$ preserves chirality. Each component of $\widetilde\Omega$ has odd form degree, so its composite with $X^\flat$ has even Clifford parity; the gravitino equation therefore takes values in $S_+\otimes\mathbb R^2$. Every term of $d\Phi+\tfrac12H_3\lambda_3+\Omega$ has odd Clifford parity, so the dilatino equation takes values in $S_-\otimes\mathbb R^2$. Both equations use the full supplied Clifford bundle and chirality-preserving connection specified by the spinor-data supplier. This is Hamilton's string-frame convention; the formula is not silently converted to another RR field basis.

## Definition references

[[def-supergravity-conventions-and-normalizations]]

[[post-type-iib-two-derivative-supergravity-pseudoaction]]

[[post-type-iib-fiveform-self-duality-constraint]]

[[pthm-type-iib-field-equations-with-self-duality]]

[[def-type-iib-spinor-bundle-data]]

[Hamilton, §7.2, Theorem 7.9](https://arxiv.org/pdf/1607.00327v3)

[Hackett-Jones–Smith, §2, equations (1)–(2)](https://arxiv.org/pdf/hep-th/0405098v3)

## Remarks

The KSE transcription has been visually checked against Hamilton's printed pp. 44–45. The prefactor in $\widetilde\Omega$ is $+1/8$, as on Hamilton's printed p. 44 and in the component expansion following Proposition 7.10; the earlier track-design minus sign is a transcription error. The auxiliary Hackett-Jones–Smith paper uses a democratic RR field basis and supports the string-frame structure and Clifford convention; its coefficients are not silently transferred to the displayed undoubled Hamilton basis.
