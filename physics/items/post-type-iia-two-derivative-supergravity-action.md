---
id: post-type-iia-two-derivative-supergravity-action
kind: postulate
title: Type Iia Two Derivative Supergravity Action
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 7
domain: physics
library: physics
deps:
  - def-supergravity-conventions-and-normalizations
  - post-ten-dimensional-ns-ns-supergravity-action
dependency_roles:
  def-supergravity-conventions-and-normalizations: formulation-prerequisite
  post-ten-dimensional-ns-ns-supergravity-action: formulation-prerequisite
physical_scope: "Adopted source-free, massless, leading tree-level, two-derivative type IIA bosonic effective action in string frame on a smooth oriented ten-dimensional Lorentzian manifold. Fermions, localized sources, Romans mass, loop and alpha-prime corrections are omitted. This is a model premise, not a derivation from string theory or a claim that every string background solves its Euler–Lagrange equations."
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "M. J. D. Hamilton, The field and Killing spinor equations of M-theory and type IIA/IIB supergravity in coordinate-free notation"
      url: "https://arxiv.org/pdf/1607.00327v3"
      locator: "§6.1, Definition 6.1; action, field-strength definitions, and local IIA conventions."
    - title: "Joseph Polchinski, String Theory, Volume II: Superstring Theory and Beyond"
      url: "https://library.institutpendidikan.ac.id/wp-content/uploads/2024/08/Joseph-Polchinski-_String-Theory-Volume-II-Superstring-Theory-and-Beyond_.pdf"
      locator: "§12.1.5 and §12.1.8, printed pp. 86–89, equations (12.1.4)–(12.1.10); dimensional reduction, IIA field strengths, and string-frame action."
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  sources_checked:
    date: 2026-11-04
    scope: Recorded source, statement and proof-status review for this postulate in conformal-field-theory-string-theory-step3-fresh-2026-11-04, within the native reports' stated reading limits. This records no proof or new empirical validation.
    by: gpt-6-luna; native-step3-independent-reader; delegated by /root under owner authorization
---

## Postulate

Adopt
$$S_{\mathrm{IIA}}=S_{\mathrm{NS}}-\frac{1}{4\kappa_0^2}\int_{M^{10}}d^{10}x\,\sqrt{-g_s}\bigl(|G_2|_s^2+|\widetilde G_4|_s^2\bigr)-\frac{1}{4\kappa_0^2}\int_{M^{10}}B_2\wedge G_4\wedge G_4,$$
where $S_{\mathrm{NS}}=(2\kappa_0^2)^{-1}\int\sqrt{-g_s}\,e^{-2\Phi}\bigl(R_s+4|d\Phi|_s^2-\tfrac12|H_3|_s^2\bigr)d^{10}x$ is the adopted local NS–NS action. The fields are a string-frame Lorentzian metric $g_s$, real scalar dilaton $\Phi$, local potentials $B_2,C_1,C_3$, and
$$H_3=dB_2,\qquad G_2=dC_1,\qquad G_4=dC_3,\qquad \widetilde G_4=G_4-C_1\wedge H_3.$$
For this item write $g_s:=G^{(s)}$ for the string-frame metric; it is distinct from the dimensionless string coupling $g_{\mathrm{str}}$. The coefficient convention is $2\kappa_0^2=(2\pi)^7\alpha'^4$, the signature is $(-+\cdots+)$, and $|F_p|^2=F_{M_1\ldots M_p}F^{M_1\ldots M_p}/p!$, as fixed by the adopted supergravity conventions. Use natural units $\hbar=c=1$, length-valued target coordinates, dimensionless metric and dilaton components, and dimensionless coordinate components of $B_2,C_1,C_3$; then $H_3,G_2,G_4,\widetilde G_4$ have component dimension length$^{-1}$, $\kappa_0^2$ has dimension length$^{8}$, and every displayed action term is dimensionless. The mass parameter is $F_0=0$. This postulate applies locally where the potentials are defined and $dH_3=0$; there are no magnetic or localized sources. It includes neither a fermion action nor a supersymmetry transformation law.

## Postulate references

[M. J. D. Hamilton, §6.1, Definition 6.1](https://arxiv.org/pdf/1607.00327v3)

[Joseph Polchinski, §12.1](https://library.institutpendidikan.ac.id/wp-content/uploads/2024/08/Joseph-Polchinski-_String-Theory-Volume-II-Superstring-Theory-and-Beyond_.pdf)

[[post-ten-dimensional-ns-ns-supergravity-action]]

[[def-supergravity-conventions-and-normalizations]]

## Remarks

The current convention definition and NS–NS postulate carriers and their current ready Step 1 records were inspected; their exact interfaces match this action. This postulate remains a source-reported low-energy model input, not a derivation from string theory.
