---
id: lem-regular-boundary-disk-caps-have-an-actual-nonlinear-response-graph
kind: lemma
title: "Regular boundary disk caps have an actual nonlinear response graph"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps: [def-countable-choice, lem-real-boundary-node-caps-have-bounded-incoming-outgoing-response-maps, lem-generator-punctured-boundary-disk-weighted-fredholm-and-node-evaluation, lem-node-fixed-boundary-disk-sobolev-moduli-affine-slices-and-cover-index, lem-countable-choice-weighted-strip-sobolev-algebra-and-composition, lem-countable-choice-quantitative-newton-correction-and-smooth-zero-chart]
dependency_level: 11
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
---

## Statement

Assume Countable Choice. Fix the actual regular node-fixed index-two boundary disk $v$, exact node frame and two compact-core phases in the cap response theorem. Use weight $0<\delta<\pi$ and choose its cut $\sigma=S$ sufficiently far into the exact node chart. Let
$$G_-^{5/2}=\{(g_n)_{n<0}:g_n\in\mathbb R^m,\ \sum_{n<0}(1+|n|)^5|g_n|^2<\infty\},$$
and define $G_+^{5/2}$ similarly.

For every sufficiently small pair $(g,c)\in G_-^{5/2}\times\mathbb R^m$ there is a unique actual $H^3$ map on the disk cap, near $v$, solving the autonomous holomorphic equation, with physical boundary on $L_0$, zero phases relative to $v$, and negative and constant modes of its difference from $v$ at the cut equal to $g$ and $c$. This is uniqueness in one fixed small cap neighborhood. Its positive-mode difference is a smooth response
$$\mathcal R(g,c)\in G_+^{5/2},\qquad \mathcal R(0,0)=0,$$
with bounded derivative and
$$d\mathcal R_{(0,0)}(g,c)=A_dg+B_dc$$
for the actual linear cap maps. The cap maps are smooth on their interior and up to the physical boundary away from the artificial cut; arbitrary higher smoothness of rough incoming data at that artificial cut is not asserted. Every actual nearby cap solution with the stated phase and trace data lies on this graph.

The graph is constructed from actual weighted Sobolev maps and their actual nonlinear section. It is not a formal graph or moduli axiom, and it supplies no neck matching or nodal exhaustion by itself.

## Statement references

[[lem-real-boundary-node-caps-have-bounded-incoming-outgoing-response-maps]]

## Facts & Assumptions

**Given:** The actual disk, regular operator, exact node geometry, cut, phases, incoming trace space and small real constant. The phases are the fixed bounded linear functionals on local-addition sections supported on the non-nodal disk core.

[F1] [[lem-real-boundary-node-caps-have-bounded-incoming-outgoing-response-maps]] constructs the inward extension $k_g$, its fixed-band forcing $F_g$, the phase-zero node-fixed inverse $Q_d^0$, and the full-kernel lift $L_dc$ with node constant $c$ and zero phases. These are actual component operators.

[F2] [[lem-generator-punctured-boundary-disk-weighted-fredholm-and-node-evaluation]] gives actual weighted higher spaces, node constants, positive-mode filling and bounds. [[lem-node-fixed-boundary-disk-sobolev-moduli-affine-slices-and-cover-index]] and [[lem-countable-choice-weighted-strip-sobolev-algebra-and-composition]] give the actual local addition, $H^3$ map charts, composition and weak regularity estimates.

[F3] [[lem-countable-choice-quantitative-newton-correction-and-smooth-zero-chart]] gives actual Hilbert implicit solutions and uniqueness for a specified bounded inverse, with smooth parameter dependence, under Countable Choice.

## Proof

1.1 Use full weighted local-addition sections $\eta=c+r$ at the node, with $c\in\mathbb R^m$ and $r$ in the actual weighted $H^3$ remainder space. Dropping the fixed-node constraint in [F2]'s chart construction gives this actual chart: on the exact end it is ordinary coordinate addition, and the real constant preserves the boundary plane. The weighted local supremum and composition estimates give a uniform small map neighborhood. Let its actual section be $\mathcal F_v(\eta)$ and its derivative at zero $P$. Then $$\mathcal F_v(\eta)=P\eta+N(\eta),\qquad N(0)=dN(0)=0.$$ Choose a fixed end threshold $S_0$ so that $v$ and every map in this small chart lie in the exact target chart for $\sigma\ge S_0$. There the nonlinear section and its target trivialization are exactly $D_0(q(v)+\eta)$, so $N$ is identically zero there. Thus $N$ is a genuine smooth map to weighted $H^2$ forcings supported on a fixed compact source core, with the ordinary quadratic derivative estimate from [F2]. It is not an unproved composition on $H^1$ maps. [F2, given, construct, algebra]

2.1 Choose $S$ so that $S-2>S_0$ and the phases vanish on $\sigma\ge S_0$. The inward extension in [F1] is $$k_g=\chi(\sigma)\sum_{n<0}e^{-\pi n(\sigma-S)}g_n\phi_n,$$ on the cap, with $\chi=0$ below $S-2$ and one above $S-1$. Integrating three derivatives gives its actual cap $H^3$ norm bounded by $C\|g\|_{G_-^{5/2}}$: the squared factor for mode $n$ is bounded by $C(1+|n|)^5$. Its forcing $F_g=\chi'\sum e^{-\pi n(\sigma-S)}g_n\phi_n$, extended by zero beyond the cap, is supported in that fixed band. The exponential damping there makes it a bounded linear function of $g$ into every weighted integer forcing order, in particular $H^2$. The extension itself is zero on the support of $N$ and of the phases. Hence for sections $h$ with node constant zero and phases zero, the exact cap equation for $k_g+L_dc+h$ is $$Ph+F_g+N(L_dc+h)=0.$$ The equation can be interpreted globally on the weighted punctured disk using the displayed compactly supported forcing, although the incoming section itself is only defined inward on the cap. No growing negative mode is extended toward its missing node. [F1, F2, step 1.1, construct, algebra]

3.1 Solve this actual global equation by $$h=-Q_d^0\bigl(F_g+N(L_dc+h)\bigr).$$ At $(h,g,c)=(0,0,0)$ its left-minus-right derivative in $h$ is the identity. The specified bounded inverse and [F3] give one unique small solution $h(g,c)$, smooth in the stated Hilbert parameters. It has node constant and phases zero by construction. Since $F_g$ and $N$ vanish for $\sigma>S-1$, its end is homogeneous and has only positive modes, with zero constant, by [F2]. Thus $k_g+L_dc+h(g,c)$ on the cap is an actual small section whose map solves the equation and physical boundary condition; its incoming modes are exactly $g$, its constant mode is $c$ and its phases are zero. The positive trace of $L_dc+h$ defines $\mathcal R(g,c)$. Its $G_+^{5/2}$ norm is bounded smoothly by the actual homogeneous end estimates: use the positive-mode series on the fixed extra collar from $S-1$ to $S$, whose exponential damping controls every fixed trace order by its interior $H^1$ norm. This trace map is bounded linear on homogeneous weighted solutions. Differentiating the global equation at zero gives $h_g=-Q_d^0F_g$ and $h_c=0$, because $dN(0)=0$. Therefore its positive trace derivative is precisely $A_dg+B_dc$ from [F1]. [F1, F2, F3, step 1.1, step 2.1, construct, algebra]

4.1 Prove that all actual nearby solutions were captured. Take such a cap map and write its actual local-addition section as $\xi$. On the end collar the target chart is linear, and both that map and $v$ are holomorphic, so $\xi$ solves $D_0$ there. Subtract $k_g+L_dc$ on the cap. Its cut trace now has only positive modes and zero constant, and its phases are zero. Extend it to the omitted end by the corresponding positive Fourier solution. The trace norm gives a weighted $H^3$ extension by integrating those modes; matching zeroth traces first gives a global weak $H^1$ section with no seam measure, and the homogeneous equation near that seam and the actual regularity in [F2] give its full higher realization. Denote the resulting section by $h$. Its norm is small if the cap map, $g$ and $c$ are in the chosen small neighborhoods, by the fixed trace and extension bounds. On the core the cap equation is exactly that in step2.1, and beyond the cut both its sides are zero. Thus $h$ solves the same global equation as in step3.1. The implicit uniqueness there makes it $h(g,c)$. This establishes genuine local uniqueness among actual cap maps, rather than only uniqueness in a selected complement with no converse. [F1, F2, F3, step 2.1, step 3.1, construct, algebra]

5.1 The cap maps just constructed are actual weak $H^3$ zeros on the cap interior with the actual physical totally real boundary. The local weak bootstrap in [F2] makes them smooth there and up to every physical edge point away from the artificial cut. Rough incoming $G_-^{5/2}$ data are not presumed smooth at that cut. The positive response, however, has the smooth homogeneous-end estimates used in step3.1, and all its Hilbert derivatives exist by the actual implicit theorem. The bounded derivative assertion follows on a smaller parameter ball from that smoothness and continuity at zero. All operations were specified inverses, compact nonlinearities and actual Fourier extensions under Countable Choice. This proves a local nonlinear cap graph without asserting a long-neck fixed point, gluing collar or compactification theorem. [F2, F3, step 1.1, step 3.1, step 4.1, algebra] ∎