---
id: post-type-iia-romans-massive-supergravity-action
kind: postulate
title: Type Iia Romans Massive Supergravity Action
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 0
domain: physics
library: physics
deps: []
dependency_roles: {}
physical_scope: "Source-reported two-derivative massive IIA bosonic action in the field-strength, component, and normalization basis of Bergshoeff et al. (1996), Eq. (2.13). No conversion to the Graña democratic RR basis, Hamilton massless convention, kappa_0, or alpha-prime normalization is asserted."
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "E. Bergshoeff, M. de Roo, M. B. Green, G. Papadopoulos, and P. K. Townsend, Duality of Type II 7-branes and 8-branes"
      url: "https://arxiv.org/pdf/hep-th/9601150v3"
      locator: "§2, printed pp. 7–9, Eqs. (2.2)–(2.13), especially component form convention (2.3), field strengths (2.7), redefinitions (2.9)–(2.11), and action (2.13); Eq. (2.13) visually checked."
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

Adopt the source-reported two-derivative ten-dimensional massive IIA bosonic action in the field and normalization basis of Bergshoeff et al., Eq. (2.13). It is formulated on an oriented smooth ten-dimensional manifold $M^{10}$, or an oriented smooth coordinate patch in such a manifold, with a smooth Lorentzian metric $g$ of signature $(-+\cdots+)$, a smooth real dilaton $\sigma:M^{10}\to\mathbb R$, and smooth real potentials $A\in\Omega^1(M^{10})$, $B\in\Omega^2(M^{10})$, and $C\in\Omega^3(M^{10})$. Here $g$ is the string-frame metric variable used in Eq. (2.13); no other metric frame or frame conversion is part of this item. “Two-derivative” means that the displayed density has no term with more than two spacetime derivatives of the fields. The Romans parameter $m\in\mathbb R$ is constant. For coordinates $x^M$, $M=0,\ldots,9$, use the source's form-component convention
$$Q=Q_{M_1\ldots M_q}dx^{M_1}\wedge\cdots\wedge dx^{M_q},$$
with summation over all ordered indices and no factor $1/q!$. For a $q$-form $Q$, define $|Q|^2:=Q_{M_1\ldots M_q}Q^{M_1\ldots M_q}/q!$, raising indices with $g$; this is a signed Lorentzian contraction and need not be nonnegative. In the displayed scalar curvature, use
$$\Gamma^P{}_{MN}=\tfrac12g^{PQ}(\partial_Mg_{NQ}+\partial_Ng_{MQ}-\partial_Qg_{MN}),\quad R^P{}_{QMN}=\partial_M\Gamma^P{}_{NQ}-\partial_N\Gamma^P{}_{MQ}+\Gamma^P{}_{MR}\Gamma^R{}_{NQ}-\Gamma^P{}_{NR}\Gamma^R{}_{MQ},\quad R_{QN}=R^P{}_{QPN},\quad R=g^{QN}R_{QN}.$$
Set
$$H=3\,dB,\qquad F=2\,dA+mB,\qquad G=4\,dC+24\,A\wedge dB+6m\,B\wedge B.$$
The source-basis string-frame Lagrangian density is
$$\mathcal L=\sqrt{-g}\left\{e^{-2\sigma}\left[R+4|d\sigma|^2-\frac13|H|^2\right]-|F|^2-\frac1{12}|G|^2-\frac12m^2\right\} +\frac19\epsilon\left[dC\wedge dC\wedge B+m\,dC\wedge B^3+\frac9{20}m^2B^5\right],$$
where $g:=\det(g_{MN})$ in $\sqrt{-g}$, and $\epsilon^{M_1\ldots M_{10}}$ is the alternating contravariant coordinate density normalized by $\epsilon^{01\ldots9}=+1$ in positively oriented coordinates, not a tensor raised with $g$. In particular, the first topological term uses the explicit source contraction
$$\frac19\epsilon^{M_1\ldots M_{10}}\partial_{M_1}C_{M_2M_3M_4}\,\partial_{M_5}C_{M_6M_7M_8}\,B_{M_9M_{10}},$$
as in Eq. (2.4); the remaining top-form products use the same component and orientation conventions. No overall $1/(2\kappa_0^2)$ is inserted. No $\alpha'$ normalization or identification of $m$ with the $F_0$ in the separate Graña massive-RR convention is supplied. Fermions are set to zero. This is a source-reported low-energy action, not a derivation from string theory.

Use natural units, length-valued target coordinates, dimensionless metric, dilaton, and coordinate components of $B,A,C$; then $m,H,F,G$ have component dimension length$^{-1}$, and each term in the local density has dimension length$^{-2}$. Because the source prints no overall gravitational coupling, this statement does not assign a dimensionless normalization to the integrated action.

## Postulate references

[Bergshoeff et al., §2, Eq. (2.13)](https://arxiv.org/pdf/hep-th/9601150v3)

