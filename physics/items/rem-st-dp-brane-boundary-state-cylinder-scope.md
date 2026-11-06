---
id: rem-st-dp-brane-boundary-state-cylinder-scope
kind: remark
title: Dp Boundary State Cylinder Scope
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 7
domain: physics
library: physics
deps:
  - def-type-ii-dp-brane-boundary-state
dependency_roles:
  def-type-ii-dp-brane-boundary-state: formulation-prerequisite
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
physical_scope: "Source-reported perturbative cylinder description for two parallel flat Type II Dp-branes; does not assert a local modular-equivalence proof, absolute boundary-state normalization, a general boundary conformal field theory, or nonperturbative duality."
sources:
  references:
    - title: "J. Polchinski, S. Chaudhuri, and C. V. Johnson, Notes on D-Branes, arXiv:hep-th/9602052v2"
      url: "https://arxiv.org/pdf/hep-th/9602052v2"
      locator: "Lecture II §2.5, PDF p. 17, equation (2.31), closed-channel cylinder overlap and the source's explicit statement that the formalism is not developed there."
    - title: "Miao Li, Boundary States of D-Branes and Dy-Strings, arXiv:hep-th/9510161v1"
      url: "https://arxiv.org/pdf/hep-th/9510161v1"
      locator: "§2, PDF pp. 3–7, equations (2.1)–(2.5), GSO-inserted closed overlap, open-loop representation, and massless closed-channel residue."
    - title: "J. Polchinski, Dirichlet-Branes and Ramond-Ramond Charges, arXiv:hep-th/9510017v3"
      url: "https://arxiv.org/pdf/hep-th/9510017v3"
      locator: "§2, PDF pp. 3–7, boundary-state source, cylinder factorization, and the source's charge-normalization comparison."
verification:
  precheck: n/a
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Remark

Here the cylinder worldsheet is the annulus $\Sigma=S^1\times[0,1]$ with its two boundary circles mapped to two parallel static flat Dp-branes at transverse positions $0$ and $Y\in\mathbb R^{9-p}$. The conformal structure on $\Sigma$ is parameterized by a positive annulus modulus, with numerical normalization fixed separately in each source. In the closed channel, the interval coordinate is propagation time and closed-string states propagate between the boundary sources. In the open channel, the circle coordinate is Euclidean time and the trace runs over open-string states whose endpoints lie on the two branes.

Miao Li records the following closed-channel expression in his source convention:
$$
\mathcal A_{\mathrm{Li}}(Y)=\int_0^\infty dt_{\mathrm{Li}}\;\langle B,0|\,\frac14(1+(-1)^{F_{\mathrm{Li}}})(1+(-1)^{\widetilde F_{\mathrm{Li}}})\,e^{-t_{\mathrm{Li}}\Delta_{\mathrm{Li}}}\,|B,Y\rangle,
$$
In this expression, $t_{\mathrm{Li}}>0$ is Li's integration parameter in equation (2.1); $F_{\mathrm{Li}}$ and $\widetilde F_{\mathrm{Li}}$ denote only the left- and right-moving fermion-number operators whose parity insertions appear there. Li calls $\Delta_{\mathrm{Li}}$ the closed-string propagator, but equation (2.1) does not specify it as a particular Virasoro-zero-mode combination. The source variables have been subscripted here only to distinguish the two papers' notation. Li's parity insertions are not identified with the sector-dependent $G_{\mathrm{NS}}$ and $G_{\mathrm R}$ defined in the boundary-state item. Li states in section 2 that he works in Euclidean spacetime and obtains Minkowski results by Wick rotation; equation (2.1) is recorded here in that Euclidean source convention, without a separate local continuation argument.

Separately, Polchinski–Chaudhuri–Johnson's equation (2.23) sets $q=e^{-\pi t_{\mathrm{PCJ}}}$ in their cylinder calculation, and equation (2.31) writes the closed-channel overlap as
$$
\langle B|\exp\!\left[-\frac{\pi(L_0+\widetilde L_0)}{t_{\mathrm{PCJ}}}\right]|B\rangle.
$$
Here $t_{\mathrm{PCJ}}>0$ is their dimensionless open-channel parameter in equation (2.23), where $q=e^{-\pi t_{\mathrm{PCJ}}}$; its reciprocal appears in the closed-channel exponent. The symbols $L_0$ and $\widetilde L_0$ are the left- and right-moving Virasoro zero modes in their bosonic-string convention. Equation (2.31) occurs in their bosonic-string cylinder calculation, whose surrounding massless exchange is expressed using the Green function in $25-p$ transverse dimensions. It is cited here only to record that source's own propagator and modulus notation, not as a Type II calculation. No operator identification between $\Delta_{\mathrm{Li}}$ and $L_0+\widetilde L_0$, and no modulus map between $t_{\mathrm{Li}}$ and $t_{\mathrm{PCJ}}$, is asserted.

Li's equations (2.2)–(2.4) separately give the open-string one-loop representation and the massless closed-channel residue. His equation (2.5) explicitly reports
$$
T_{p,\mathrm{Li}}^2=2\pi(4\pi^2\alpha')^{3-p},
$$
where $\alpha'>0$ has length-squared dimension and $T_{p,\mathrm{Li}}$ is the source's Dp-brane tension parameter in its massless-exchange convention, of dimension $\mathrm{length}^{3-p}$. This normalization comes from the individual exchange contributions, even though the NS–NS and R–R contributions cancel in their sum. This is a source-reported coefficient result, not a finiteness assertion for the full modulus integral or its massless limit. No identification with a tension density in another bulk-field convention, or with the unevaluated overall factor $\mathcal N_p$ in the formal boundary-state definition, is made here. That factor still has no local absolute-normalization calculation, and no full string duality is asserted.

The tube sketch labels the closed-channel reading of the same cylinder; it records the two boundary sources and the propagation direction only, and is not a proof of the channel transformation.

```tikz
\begin{tikzpicture}
\draw[thick] (0,0) ellipse (0.65 and 0.2);
\draw[thick] (-0.65,0) -- (-0.65,2.2);
\draw[thick] (0.65,0) -- (0.65,2.2);
\draw[thick] (0,2.2) ellipse (0.65 and 0.2);
\node at (0,-0.45) {$|B,Y\rangle$};
\node at (0,2.65) {$\langle B,0|$};
\draw[->] (1.0,0.35) -- (1.0,1.85);
\node[right] at (1.05,1.1) {closed propagation};
\end{tikzpicture}
```

## Remark references

[[def-type-ii-dp-brane-boundary-state]]

