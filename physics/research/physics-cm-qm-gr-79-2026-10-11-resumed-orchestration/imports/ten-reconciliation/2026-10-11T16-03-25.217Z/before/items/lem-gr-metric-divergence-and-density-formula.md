---
id: lem-gr-metric-divergence-and-density-formula
kind: lemma
title: "The derivative of the metric density and the chart formula for the divergence of a vector field"
status: draft
origin: session
domain: mathematics
dependency_level: 6
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-metric-volume-form-and-current-flux, def-gr-smooth-lorentzian-objects, def-christoffel-symbols-of-an-affine-connection, lem-gr-connection-conditions-in-chart-components, thm-gr-nondegenerate-levi-civita-and-tensor-derivative, def-gr-inverse-metric-and-musical-isomorphisms, lem-cm-determinant-derivative-along-a-matrix-curve, lem-lorentz-form-has-orthonormal-basis, def-smooth-vector-field-as-a-tangent-bundle-section]
dependency_roles:
  def-gr-metric-volume-form-and-current-flux: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-christoffel-symbols-of-an-affine-connection: mathematical-premise
  lem-gr-connection-conditions-in-chart-components: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  def-gr-inverse-metric-and-musical-isomorphisms: mathematical-premise
  lem-cm-determinant-derivative-along-a-matrix-curve: mathematical-premise
  lem-lorentz-form-has-orthonormal-basis: mathematical-premise
  def-smooth-vector-field-as-a-tangent-bundle-section: mathematical-premise
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 4: the variation of sqrt(-g), (4.62)-(4.65), printed pp. 116-117 (PDF pp. 123-124)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), section 4.1: the variation of sqrt(-g) from the determinant identity, printed pp. 140-142 (PDF pp. 147-149)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), sections 9.1-9.2 (variations of the volume factor), printed pp. 111-115 (PDF pp. 112-116), and section 8.6 (integration with sqrt(-g)), printed pp. 108-109 (PDF pp. 109-110)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
verification:
  precheck: pass
---

## Statement

Let $(M,g,N)$ be a time-oriented smooth Lorentzian four-manifold with
metric-selected connection $\nabla$
([[def-gr-smooth-lorentzian-objects]],
[[def-christoffel-symbols-of-an-affine-connection]],
[[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]), let $(U,x)$ be a
smooth chart, and let $w=\sqrt{|\det(g_{ab})|}$ be the metric density of
[[def-gr-metric-volume-form-and-current-flux]] clause (a) on $U$. Write
$g^{ab}$ for the inverse-metric components
([[def-gr-inverse-metric-and-musical-isomorphisms]]) and
$\Gamma^{a}{}_{bc}$ for the Christoffel symbols of $\nabla$ in the chart.

**(a) Derivative of the density.** At every point of $U$,

$$\partial_a w=\tfrac12\,w\,g^{bc}\,\partial_a g_{bc}.$$

**(b) Trace of the Christoffel symbols.** At every point of $U$,

$$\Gamma^{b}{}_{ba}=w^{-1}\partial_a w .$$

**(c) Divergence formula.** For every smooth vector field $J$ on $M$, at every
point of $U$,

$$\nabla_aJ^a=\partial_aJ^a+\Gamma^{a}{}_{ab}J^b=w^{-1}\partial_a\bigl(w\,J^a\bigr),$$

where $\nabla_aJ^a=g^{ab}\nabla_bJ_a$ is the divergence of $J$ contracted with
the metric and $J^a$ are the components of $J$
([[def-smooth-vector-field-as-a-tangent-bundle-section]]).

The identity of (c) is a chart formula for a chart-independent scalar: the
right-hand side is independent of the chart, as the left-hand side is.

## Facts & Assumptions

**Given:** A time-oriented smooth Lorentzian four-manifold $(M,g,N)$ with metric-selected connection $\nabla$, a smooth chart $(U,x)$, the density $w$ of [[def-gr-metric-volume-form-and-current-flux]], and a smooth vector field $J$.

[L1] In a chart the Christoffel symbols are $\Gamma^{a}{}_{bc}=\tfrac12g^{ad}(\partial_bg_{dc}+\partial_cg_{bd}-\partial_dg_{bc})$ and satisfy $\Gamma^{a}{}_{bc}=\Gamma^{a}{}_{cb}$ ([[def-christoffel-symbols-of-an-affine-connection]], [[lem-gr-connection-conditions-in-chart-components]], [[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]).

[L2] The extension of $\nabla$ to tensor fields has coordinate components $J^{a}{}_{;c}=\partial_cJ^{a}+\Gamma^{a}{}_{dc}J^{d}$ for a vector field $J$, and $\nabla g=0$, $\nabla g^{-1}=0$; the divergence is $\nabla_aJ^a=g^{ab}J^{a}{}_{;b}$ ([[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]] clause (c), [[def-gr-inverse-metric-and-musical-isomorphisms]]).

[L3] The components $g^{ab}$ of the inverse metric are smooth and satisfy $g^{ac}g_{cb}=\delta^{a}{}_{b}$ ([[def-gr-inverse-metric-and-musical-isomorphisms]]).

[L4] For a differentiable matrix curve $A$ with invertible values, $(\det A)'=\det A\;\operatorname{tr}(A^{-1}A')$ ([[lem-cm-determinant-derivative-along-a-matrix-curve]]).

[L5] There is a $g_p$-orthonormal basis of $T_pM$ in which the matrix of $g_p$ is $\operatorname{diag}(-1,1,1,1)$; consequently $\det(g_{ab}(p))\neq0$ and in fact $\det(g_{ab}(p))<0$ at every $p$ ([[lem-lorentz-form-has-orthonormal-basis]], [[def-gr-smooth-lorentzian-objects]]).

## Proof

**Proof technique:** direct; differentiate the determinant along a coordinate curve, then substitute the Christoffel formula.

1.1 (Determinant derivative.) Fix $p\in U$ with coordinates $x(p)$ and fix an index $a$. Define the matrix curve $A(s):=\bigl(g_{bc}(x(p)+s\,e_a)\bigr)$ for small $|s|$, where $e_a$ is the $a$-th standard basis vector; its entries are differentiable at $s=0$ and, since $\det A(0)=\det(g_{bc}(p))\neq0$ by [L5] and the determinant is continuous, $A(s)$ is invertible for small $|s|$. By [L4], $\partial_a\det(g_{bc})(p)=\det(g_{bc}(p))\operatorname{tr}\bigl(A(0)^{-1}A'(0)\bigr)=\det(g_{bc}(p))\,g^{bc}(p)\,\partial_ag_{bc}(p)$, using [L3]. [L3, L4, L5, algebra]

2.1 (Derivative of the square root.) By [L5], $\det(g_{bc})<0$ on $U$, so $|\det(g_{bc})|=-\det(g_{bc})$ and $w=\bigl(-\det(g_{bc})\bigr)^{1/2}$. Differentiating the square root and substituting step 1.1, $\partial_aw=\tfrac12\bigl(-\det(g_{bc})\bigr)^{-1/2}\bigl(-\partial_a\det(g_{bc})\bigr)=\tfrac12w\,g^{bc}\partial_ag_{bc}$, which is claim (a). [step 1.1, L5, algebra]

3.1 (Christoffel trace.) By [L1], $\Gamma^{b}{}_{ba}=\tfrac12g^{bc}(\partial_ag_{bc}+\partial_bg_{ca}-\partial_cg_{ba})$. Relabelling the dummy indices $b\leftrightarrow c$ in the third term and using the symmetry of $g_{ba}$ and of $g^{bc}$ turns it into $-\tfrac12g^{bc}\partial_bg_{ca}$, which cancels the second term; hence $\Gamma^{b}{}_{ba}=\tfrac12g^{bc}\partial_ag_{bc}=w^{-1}\partial_aw$ by claim (a). [step 2.1, L1, L3, algebra]

4.1 (Divergence.) By [L2], $\nabla_aJ^a=\partial_aJ^a+\Gamma^{a}{}_{ab}J^b$. Substituting claim (b), $\nabla_aJ^a=\partial_aJ^a+w^{-1}(\partial_bw)J^{b}=w^{-1}\bigl(w\partial_aJ^a+J^a\partial_aw\bigr)=w^{-1}\partial_a(wJ^a)$, which is claim (c) and completes the proof. [step 3.1, L2, algebra] ∎

## Remarks

- **Density reading.** The function $w$ is not a scalar: under a change of chart it is multiplied by $|\det D\varphi|$, as recorded in
  [[lem-gr-metric-volume-form-patching-and-face-normal]] clause (a). Claim (c) shows that $wJ^a$ are the components of a vector density whose coordinate divergence is chart-independent; this is the metric-density form of the divergence theorem used in [[thm-gr-density-divergence-and-finite-chain-flux]].

- **Sign conventions.** No orientation is used in this lemma; claims (a)-(c) hold on every chart of every time-oriented smooth Lorentzian four-manifold.
