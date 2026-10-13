---
id: lem-gr-schwarzschild-ricci-and-einstein-tensors
kind: lemma
title: "Curvature components and the vanishing of the Ricci and Einstein tensors of the Schwarzschild exterior metric"
status: draft
origin: session
domain: mathematics
dependency_level: 12
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-schwarzschild-exterior-model, lem-gr-schwarzschild-metric-properties, lem-gr-schwarzschild-christoffel-symbols, def-gr-smooth-lorentzian-objects, def-gr-metric-selected-connection, thm-gr-nondegenerate-levi-civita-and-tensor-derivative, def-christoffel-symbols-of-an-affine-connection, def-gr-curvature-tensor-and-derived-tensors, thm-gr-curvature-tensoriality-and-coordinate-formula, thm-gr-curvature-algebraic-symmetries, def-gr-inverse-metric-and-musical-isomorphisms, def-gr-tensor-fields-and-components, def-derivative, def-directional-and-partial-derivatives, def-rational-power, def-countable-choice]
dependency_roles:
  def-gr-schwarzschild-exterior-model: mathematical-premise
  lem-gr-schwarzschild-metric-properties: mathematical-premise
  lem-gr-schwarzschild-christoffel-symbols: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  def-christoffel-symbols-of-an-affine-connection: mathematical-premise
  def-gr-curvature-tensor-and-derived-tensors: mathematical-premise
  thm-gr-curvature-tensoriality-and-coordinate-formula: mathematical-premise
  thm-gr-curvature-algebraic-symmetries: mathematical-premise
  def-gr-inverse-metric-and-musical-isomorphisms: mathematical-premise
  def-gr-tensor-fields-and-components: mathematical-premise
  def-derivative: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  def-rational-power: mathematical-premise
  def-countable-choice: mathematical-premise
sources:
  references:
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), section 3.4.3 (3.51)-(3.54): the metric -f(t,r)^2dt^2 + f^{-2}dr^2 + r^2 dOmega^2 with general f(r), its nonvanishing curvature components and their Schwarzschild specialisation with f = (1-2GM/r)^{1/2}, printed pp. 136-138 (PDF pp. 143-145)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 7 (7.14)-(7.29): the Christoffel symbols of the static spherically symmetric metric, the resulting curvature and the vacuum solution, printed pp. 168-171 (PDF pp. 175-178)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), section 6.1.2 (6.3): the Kretschmann scalar of the Schwarzschild solution and the statement that the vacuum solution is Ricci flat, printed p. 236 (PDF p. 243)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
verification:
  precheck: pass
---

## Statement

Let $(M,g,N)$ be the Schwarzschild exterior datum of mass parameter $m_*$,
Schwarzschild radius $s=2G_Nm_*/c^2$ and $f(r)=1-s/r$
([[def-gr-schwarzschild-exterior-model]]), with metric-selected connection
$\nabla$ and curvature data $R^a{}_{bcd}$, $R_{abcd}$,
$\operatorname{Ric}_{ab}$, $S$, $G_{ab}$
([[def-gr-metric-selected-connection]],
[[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]],
[[def-gr-curvature-tensor-and-derived-tensors]]). In every spherical-polar
product chart
$(x^0,r,\vartheta,\varphi)$, writing $f'=\frac{df}{dr}=s/r^2$ and
$f''=\frac{d^2f}{dr^2}=-2s/r^3$:

**(a) Curvature components.** All nonzero components of the lowered
curvature tensor, up to the symmetries of
[[thm-gr-curvature-algebraic-symmetries]], are

$$R_{0101}=\frac{f''}{2},\qquad R_{0202}=\frac{rf f'}{2},\qquad R_{0303}=\frac{rf f'\sin^2\vartheta}{2},$$

$$R_{1212}=-\frac{rf'}{2f},\qquad R_{1313}=-\frac{rf'\sin^2\vartheta}{2f},\qquad R_{2323}=r^2\bigl(1-f\bigr)\sin^2\vartheta .$$

Every component whose index pairs do not coincide as unordered pairs, and
every component with an index repeated inside a pair, vanishes.

**(b) Ricci tensor.** The Ricci tensor has the diagonal components

$$\operatorname{Ric}_{00}=f\Bigl(\frac{f''}{2}+\frac{f'}{r}\Bigr),\qquad \operatorname{Ric}_{11}=-\frac{1}{f}\Bigl(\frac{f''}{2}+\frac{f'}{r}\Bigr),$$

$$\operatorname{Ric}_{22}=1-f-rf',\qquad \operatorname{Ric}_{33}=\bigl(1-f-rf'\bigr)\sin^2\vartheta,$$

and all mixed components $\operatorname{Ric}_{ab}$ with $a\ne b$ vanish.

**(c) Vanishing for the model.** For $f(r)=1-s/r$ one has
$\frac{f''}{2}+\frac{f'}{r}=0$ and $1-f-rf'=0$; consequently

$$\operatorname{Ric}_{ab}=0,\qquad S=0,\qquad G_{ab}=0$$

on the regular angular locus and, as tensor identities, on all of $M$ by
smoothness and density. In particular the
Schwarzschild exterior metric is a Ricci-flat metric, and $G=0$ holds as an
identity of smooth tensor fields.

**(d) The curvature does not vanish.** The model is not locally flat. The
global base-field contraction $R_{0101}:=g(R(\partial_0,\partial_r)
\partial_r,\partial_0)$ equals $-s/r^3$ on the regular angular locus, hence
everywhere by smoothness and density. It is therefore nowhere zero even
though the Ricci and Einstein tensors vanish identically.

## Facts & Assumptions

**Given:** The Schwarzschild exterior datum, its metric and connection, a spherical-polar product chart $(x^0,r,\vartheta,\varphi)$ with $0<\vartheta<\pi$, and the functions $f(r)=1-s/r$, $f'=s/r^2$, $f''=-2s/r^3$.

[L1] On a spherical-polar product chart the metric components are $g_{00}=-f$, $g_{11}=f^{-1}$, $g_{22}=r^2$, $g_{33}=r^2\sin^2\vartheta$, off-diagonal components vanish, and the inverse components are $g^{00}=-f^{-1}$, $g^{11}=f$, $g^{22}=r^{-2}$, $g^{33}=r^{-2}\sin^{-2}\vartheta$ ([[lem-gr-schwarzschild-metric-properties]], [[def-gr-inverse-metric-and-musical-isomorphisms]]); all components and all Christoffel symbols are independent of $x^0$ and $\varphi$.

[L2] The nonzero Christoffel symbols of $\nabla$ in the chart are $\Gamma^0{}_{01}=\Gamma^0{}_{10}=f'/(2f)$, $\Gamma^1{}_{00}=ff'/2$, $\Gamma^1{}_{11}=-f'/(2f)$, $\Gamma^1{}_{22}=-rf$, $\Gamma^1{}_{33}=-rf\sin^2\vartheta$, $\Gamma^2{}_{12}=\Gamma^2{}_{21}=1/r$, $\Gamma^2{}_{33}=-\sin\vartheta\cos\vartheta$, $\Gamma^3{}_{13}=\Gamma^3{}_{31}=1/r$ and $\Gamma^3{}_{23}=\Gamma^3{}_{32}=\cot\vartheta$ ([[lem-gr-schwarzschild-christoffel-symbols]]).

[L3] In the chart, $R^a{}_{bcd}=\partial_c\Gamma^a{}_{db}-\partial_d\Gamma^a{}_{cb}+\sum_e(\Gamma^a{}_{ce}\Gamma^e{}_{db}-\Gamma^a{}_{de}\Gamma^e{}_{cb})$, and $R$ is a smooth tensor field whose components transform under changes of chart. Tensor vanishing and contractions are intrinsic; the component formulas in (a)-(b) are computed separately in each spherical-polar product chart with the same metric form ([[thm-gr-curvature-tensoriality-and-coordinate-formula]] clauses (a)-(b), [[def-gr-curvature-tensor-and-derived-tensors]] clause (b)).

[L4] The lowered curvature satisfies $R_{abcd}=-R_{bacd}=-R_{abdc}=R_{cdab}$ and the first Bianchi identity $R_{abcd}+R_{acdb}+R_{adbc}=0$; the Ricci tensor, scalar curvature and Einstein tensor are $\operatorname{Ric}_{bd}=g^{ac}R_{abcd}$, $S=g^{bd}\operatorname{Ric}_{bd}$ and $G_{ab}=\operatorname{Ric}_{ab}-\tfrac12Sg_{ab}$, with $\operatorname{Ric}_{ab}=\operatorname{Ric}_{ba}$ ([[thm-gr-curvature-algebraic-symmetries]] clauses (a)-(d), [[def-gr-curvature-tensor-and-derived-tensors]] clause (c)).

[L5] The model function satisfies $f'=s/r^2$, $f''=-2s/r^3$, so $f''/2+f'/r=0$ and $1-f-rf'=1-(1-s/r)-s/r=0$ ([[def-derivative]], [[def-rational-power]]); in the chart domain $r>s>0$ and $\sin\vartheta>0$.

## Proof

**Proof technique:** exhaust the independent curvature components by the curvature symmetries and a finite pair-index table, contract to Ricci, and extend the resulting smooth tensor identities from the dense polar-chart locus to the poles.

1.1 (Exhaustive pair-index table.) By [L4], a lowered component with a repeated index inside either pair vanishes, and the two skew-symmetries and pair exchange reduce all other components to a symmetric $6\times6$ array indexed by the six choices $01,02,03,12,13,23$. Substitution of every pair-pair choice into [L3] gives this complete array; entries below the diagonal equal their transposes, and reversing the order within either pair changes the sign: [L2, L3, L4]
$\begin{array}{c|rrrrrr}&01&02&03&12&13&23\\\hline01&f''/2&0&0&0&0&0\\02&&rff'/2&0&0&0&0\\03&&&rff'\sin^2\vartheta/2&0&0&0\\12&&&&-rf'/(2f)&0&0\\13&&&&&-rf'\sin^2\vartheta/(2f)&0\\23&&&&&&r^2(1-f)\sin^2\vartheta\end{array}$
Thus all fifteen unequal-pair entries are explicitly zero; the six diagonal entries are computed in steps 1.2, 1.3 and 2.1. This exhausts the $21$ independent pair-pair entries and, by [L4], every curvature component. [L2, L3, L4]

1.2 (The $01$ and $23$ components.) For $R_{0101}=g_{00}R^0{}_{101}$: by [L3], [L2] and $\partial_0\Gamma^0{}_{11}=0$, $R^0{}_{101}=-\partial_1\Gamma^0{}_{01}+\Gamma^0{}_{01}\Gamma^1{}_{11}-\Gamma^0{}_{10}\Gamma^0{}_{01}=-\partial_1\bigl(f'/(2f)\bigr)-\tfrac{(f')^2}{4f^2}-\tfrac{(f')^2}{4f^2}=-\tfrac{f''}{2f}+\tfrac{(f')^2}{2f^2}-\tfrac{(f')^2}{2f^2}=-\tfrac{f''}{2f}$, and multiplication by $g_{00}=-f$ gives $R_{0101}=f''/2$. For $R_{2323}=g_{22}R^2{}_{323}$: $R^2{}_{323}=\partial_2\Gamma^2{}_{33}+\Gamma^2{}_{21}\Gamma^1{}_{33}-\Gamma^2{}_{33}\Gamma^3{}_{23}=(\sin^2\vartheta-\cos^2\vartheta)-f\sin^2\vartheta+\cos^2\vartheta=(1-f)\sin^2\vartheta$, using [L2]; hence $R_{2323}=r^2(1-f)\sin^2\vartheta$. [L2, L3, algebra]

1.3 (The $02$ and $12$ components.) For $R_{0202}=g_{00}R^0{}_{202}$: $R^0{}_{202}=\Gamma^0{}_{01}\Gamma^1{}_{22}=-(rf')/2$ by [L2] and [L3] (all remaining terms contain a vanishing symbol or a $\partial_0$-derivative), so $R_{0202}=(-f)(-rf'/2)=rff'/2$. For $R_{1212}=g_{11}R^1{}_{212}$: $R^1{}_{212}=\partial_1\Gamma^1{}_{22}+\Gamma^1{}_{11}\Gamma^1{}_{22}-\Gamma^1{}_{22}\Gamma^2{}_{12}=-(f+rf')+\tfrac{rf'}{2}+f=-\tfrac{rf'}{2}$, using [L2], hence $R_{1212}=f^{-1}(-rf'/2)=-rf'/(2f)$. [L2, L3, algebra]

2.1 (The remaining $03$ and $13$ components.) From [L2]-[L3], $R^0{}_{303}=\Gamma^0{}_{01}\Gamma^1{}_{33}=-(rf'\sin^2\vartheta)/2$, so $R_{0303}=g_{00}R^0{}_{303}=rff'\sin^2\vartheta/2$. Also $R^1{}_{313}=\partial_1\Gamma^1{}_{33}+\Gamma^1{}_{11}\Gamma^1{}_{33}-\Gamma^1{}_{33}\Gamma^3{}_{13}=-(rf'\sin^2\vartheta)/2$, hence $R_{1313}=g_{11}R^1{}_{313}=-rf'\sin^2\vartheta/(2f)$. These verify the final two diagonal entries of the table in step 1.1. [L2, L3, step 1.1, algebra]

3.1 (Mixed and zero components.) The fifteen unequal-pair entries are exactly the off-diagonal entries of the exhaustive array in step 1.1. Every component with a repeated index inside a pair vanishes by [L4]; all remaining sign and order variants are determined by its skew-symmetries and pair exchange. Thus clause (a) is exhaustive. [step 1.1, step 1.2, step 1.3, step 2.1, L4]

4.1 (Contraction to the Ricci tensor.) By [L4] and clause (a), $\operatorname{Ric}_{00}=g^{11}R_{1010}+g^{22}R_{2020}+g^{33}R_{3030}=f\cdot\tfrac{f''}{2}+\tfrac{1}{r^2}\cdot\tfrac{rff'}{2}+\tfrac{1}{r^2\sin^2\vartheta}\cdot\tfrac{rff'\sin^2\vartheta}{2}=f\bigl(\tfrac{f''}{2}+\tfrac{f'}{r}\bigr)$. Similarly $\operatorname{Ric}_{11}=g^{00}R_{0101}+g^{22}R_{2121}+g^{33}R_{3131}=-\tfrac{f''}{2f}-\tfrac{f'}{2rf}-\tfrac{f'}{2rf}=-\tfrac{1}{f}\bigl(\tfrac{f''}{2}+\tfrac{f'}{r}\bigr)$, $\operatorname{Ric}_{22}=g^{00}R_{0202}+g^{11}R_{1212}+g^{33}R_{3232}=-\tfrac{rf'}{2}-\tfrac{rf'}{2}+(1-f)=1-f-rf'$, and $\operatorname{Ric}_{33}=g^{00}R_{0303}+g^{11}R_{1313}+g^{22}R_{2323}=-\tfrac{rf'\sin^2\vartheta}{2}-\tfrac{rf'\sin^2\vartheta}{2}+(1-f)\sin^2\vartheta=(1-f-rf')\sin^2\vartheta$. For a mixed pair, say $(0,1)$, every term $g^{aa}R_{a0a1}$ of [L4] contains a component with unequal index pairs or a repeated index, which vanishes by step 3.1; hence $\operatorname{Ric}_{01}=0$, and all mixed components vanish likewise. This is clause (b). [step 1.2, step 1.3, step 3.1, L4, L1, algebra]

5.1 (Specialisation and the Einstein tensor.) For $f=1-s/r$ the identities of [L5] give $f''/2+f'/r=0$ and $1-f-rf'=0$. Clause (b) therefore gives $\operatorname{Ric}=0$ on the dense open regular angular locus $M^\circ=\mathbb R\times(s,\infty)\times(S^2\setminus\{\text{two poles}\})$. The Ricci tensor is smooth on all of $M$ by [L3]; in any chart about a pole its components are continuous and vanish on the dense subset from $M^\circ$, hence vanish at the pole too. Thus $\operatorname{Ric}=0$ globally. Its contractions then give $S=0$ and $G=0$ by [L4]. This proves (c). [L3, L4, L5, step 4.1, algebra]

6.1 (Nonvanishing curvature.) On $M^\circ$, the $01$ entry of step 1.1 and $f''=-2s/r^3$ give the global base-field contraction $g(R(\partial_0,\partial_r)\partial_r,\partial_0)=-s/r^3$. This contraction is continuous on $M$ and equals the smooth function $-s/r^3$ on the dense subset $M^\circ$, so the identity holds everywhere. Since $s,r>0$, the contraction is nowhere zero and therefore the curvature tensor is nowhere zero. This proves (d). [L1, L3, L5, step 1.1, algebra] ∎

## Remarks

- **What is proved and what is not.** The computation proves the tensor
  identities $\operatorname{Ric}=0$, $S=0$, $G=0$ on the exterior domain. It
  does not assert that $g$ is a solution of the framework's field law: that
  reading requires the field law and the vacuum prescription and is the
  content of the exterior vacuum-model theorem of this page. It also does not assert
  that the Schwarzschild metric is the only Ricci-flat metric or the only
  spherically symmetric one; uniqueness statements are the local Birkhoff
  theorem of this page.

- **The curvature invariant.** Contracting the components of clause (a)
  against the inverse metric gives the Kretschmann scalar of the model, a
  computation performed separately in the curvature-and-Kretschmann lemma of
  this page; the result
  $12s^2/r^6$ is finite at $r=s$ and diverges as $r\downarrow0$, the basis of
  the singularity discussion of this page.
