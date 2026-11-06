---
id: op-nonabelian-m5-2-0-theory
kind: open-problem
title: Nonabelian M5 2 0 Theory
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 8
domain: physics
library: physics
deps:
- def-m5-brane-worldvolume-tensor-action
dependency_roles:
  def-m5-brane-worldvolume-tensor-action: formulation-prerequisite
aliases: []
physical_scope: Open construction question for N greater than one coincident M5-branes and their interacting six-dimensional
  type-A_(N-1) (2,0) worldvolume theory, together with its extension to the full stack including the free center-of-mass
  tensor multiplet; it asserts no completed theory or multiple-brane action.
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
  - title: Paolo Pasti, Dmitri Sorokin, and Mario Tonin, Covariant Action for a D=11 Five-Brane with the Chiral Field, arXiv:hep-th/9701037v3
    url: https://arxiv.org/pdf/hep-th/9701037v3
    locator: 'Abstract, §§1–4, and Conclusion, PDF pp. 1–8: a single bosonic abelian M5 action with a chiral field, auxiliary
      scalar, Wess–Zumino coupling, and D4 reduction.'
  - title: Heng-Yu Chen, Nick Dorey, Sanefumi Moriyama, Rishi Mouland, and Canberk Şanlı, An M2/M5 Duality from the Giant
      Graviton Expansion, arXiv:2601.17114v1
    url: https://arxiv.org/pdf/2601.17114v1
    locator: Abstract and Introduction, PDF pp. 1–4; the proposed relation concerns superconformal indices of the M2 and M5
      worldvolume theories and tests selected limits, not a multiple-M5 construction.
  - title: Michael R. Douglas, On D=5 super Yang-Mills theory and (2,0) theory, arXiv:1012.2880v1
    url: https://arxiv.org/pdf/1012.2880v1
    locator: 'Abstract and Introduction: circle compactification of the six-dimensional (2,0) theory to five-dimensional maximally supersymmetric Yang-Mills, and the unresolved status of reversing that relation.'
  - title: Jeffrey A. Harvey, Ruben Minasian, and Gregory Moore, Non-abelian Tensor-multiplet Anomalies, arXiv:hep-th/9808060v1
    url: https://arxiv.org/pdf/hep-th/9808060v1
    locator: 'Section 2.1, printed pp. 1–2 (PDF pp. 2–3), equations (2.5)–(2.6): charge-Q5 anomaly constraint conditional on cancellation with bulk inflow; no microscopic construction of the nonabelian theory.'
verification:
  precheck: n/a
  sources_checked:
    date: 2026-11-04
    scope: Recorded source, statement and proof-status review for this open-problem in conformal-field-theory-string-theory-step3-fresh-2026-11-04, within the native reports' stated reading limits. This records no proof or new empirical validation.
    by: gpt-6.1-sol; native-step4-independent-batch-reader; delegated by /root under owner authorization
---

## Open problem

Let $N\ge2$ coincident parallel M5-branes have a smooth oriented Lorentzian spin six-manifold $\mathcal W_6$ as worldvolume. Their interacting sector is the type-$A_{N-1}$ $(2,0)$ theory; the full $U(N)$ stack notation used for the index literature includes, in addition, a decoupled free center-of-mass tensor multiplet. The construction problem concerns the interacting sector and requires every full-stack observable or anomaly to state explicitly whether that free multiplet is included.

Construct that interacting six-dimensional quantum theory with specified local operators and Hilbert spaces or equivalent observables, and with a local anomaly polynomial $I_8(T\mathcal W_6,\mathcal N)$ for the tangent bundle and rank-five $SO(5)_R$ bundle $\mathcal N$. Here an anomaly polynomial means a degree-eight invariant characteristic-form polynomial in the tangent- and R-symmetry-bundle curvatures whose descent gives the perturbative local gauge, R-symmetry, and gravitational anomaly of the six-dimensional partition function; a proposed construction must realize the known source-qualified anomaly constraint below in its stated normalization, rather than leaving those coefficients unconstrained. For circle reduction, take $\mathcal W_6=\mathcal W_5\times S^1_r$ with periodic spin structure, circle radius $r>0$, and energies $E\ll r^{-1}$; the reduced theory must reproduce five-dimensional maximally supersymmetric Yang–Mills, its gauge group, the required Kaluza–Klein sectors, and the coupling-to-$r$ relation in the chosen normalization. A controlled bulk coupling must specify globally defined couplings to the eleven-dimensional metric and $C_3,C_6$ background potentials, their gauge transformations and charge data, and anomaly inflow sufficient to make the combined quantum system well-defined. A single abelian five-brane action or an index conjecture does not supply these construction data.

The source-reported local anomaly constraint is conditional: in the five-brane embedding/inflow setup of Harvey–Minasian–Moore, assume that the eleven-dimensional bulk inflow contributions cancel the total anomaly for a stack of positive integral five-brane charge $Q_5$. In this setup $\mathcal N$ is the oriented real rank-five normal bundle and hence the $SO(5)_R$ background bundle. Let $p_j(V)$ denote the degree-$4j$ Pontryagin forms of a real bundle $V$, normalized to represent its integral Pontryagin classes, and use the source's anomaly chirality/orientation convention. These are universal degree-eight characteristic polynomials before descent, not eight-forms to integrate over the six-dimensional worldvolume. The single free tensor-multiplet polynomial is
$$I_8^{(1)}=\frac1{48}\left[p_2(\mathcal N)-p_2(T\mathcal W_6)+\frac14\bigl(p_1(T\mathcal W_6)-p_1(\mathcal N)\bigr)^2\right].$$
Under the stated cancellation assumption the full charge-$Q_5$ stack must have
$$I_8^{\mathrm{stack}}(Q_5)=Q_5 I_8^{(1)}+\frac{Q_5^3-Q_5}{24}p_2(\mathcal N).$$
For the $N$ coincident-brane stack in the construction problem, set $Q_5=N$. The full-stack polynomial includes the free center-of-mass tensor multiplet. With the decoupled center-of-mass splitting specified above, the interacting type-$A_{N-1}$ constraint is therefore
$$I_8^{A_{N-1}}=I_8^{\mathrm{stack}}(N)-I_8^{(1)}=(N-1)I_8^{(1)}+\frac{N^3-N}{24}p_2(\mathcal N).$$
The subtraction is the additive removal of one free tensor multiplet in the same background bundles. These source-qualified local anomaly constraints do not construct the interacting theory, determine its full operator algebra or Hilbert spaces, establish global-anomaly cancellation, or supply globally consistent couplings to arbitrary bulk backgrounds.

## Open problem references

[[def-m5-brane-worldvolume-tensor-action]]

[Pasti, Sorokin, and Tonin, Abstract and §§1–4](https://arxiv.org/pdf/hep-th/9701037v3)

[Chen et al., Abstract and Introduction](https://arxiv.org/pdf/2601.17114v1)

[Douglas, Abstract and Introduction](https://arxiv.org/pdf/1012.2880v1)

[Harvey, Minasian, and Moore, §2.1, equations (2.5)–(2.6)](https://arxiv.org/pdf/hep-th/9808060v1)

## Status

The source-status review dated 2026-10-30 confirms that Pasti, Sorokin, and Tonin construct a covariant bosonic action for one abelian M5-brane, with a chiral two-form and auxiliary scalar; it is not an interacting $N>1$ theory. Chen et al. study a conjectured relation between ABJM and the $U(N)$ $(2,0)$ superconformal indices and report checks in selected regimes. Douglas discusses circle compactification to five-dimensional maximally supersymmetric Yang–Mills while leaving the reverse reconstruction question open. Harvey, Minasian, and Moore explicitly assume anomaly cancellation for general $Q_5$ and use the known bulk inflow to predict the local polynomial above; this is a conditional consistency constraint, not a microscopic construction. The interacting polynomial removes the one free center-of-mass tensor already distinguished in this item. These sources do not construct the local interacting type-$A_{N-1}$ theory or its globally consistent bulk coupling. The existence of the source-qualified anomaly constraint does not close this construction problem. This is a targeted source review, not an exhaustive literature claim.
