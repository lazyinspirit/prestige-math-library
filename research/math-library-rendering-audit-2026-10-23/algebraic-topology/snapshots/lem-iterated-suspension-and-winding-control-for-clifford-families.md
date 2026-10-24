---
id: lem-iterated-suspension-and-winding-control-for-clifford-families
kind: lemma
title: Iterated suspension and winding control
status: published
origin: pipeline
deps:
- def-axiom-of-choice
- lem-relative-path-shortening-connectivity
- lem-real-clifford-block-rotation-index-lower-bound
- prop-relative-cw-inclusions-are-cofibrations
- lem-clifford-centrioles-and-geodesic-tangent-condition
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
  - title: Eschenburg–Hanke, Bott–Thom isomorphism, Hopf bundles and Morse theory
      (2021), expanded local argument
    url: https://arxiv.org/pdf/2011.14368v3
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: real-clifford-modules-ko-and-abs-orientations
dependency_level: 8
---

## Statement

Assume AC. Fix $k=4m-1$ and a positive orthogonal $C_k$ representation on $\mathbb R^p$, meaning $J_k=J_1\cdots J_{k-1}$. Fixed-meridian geodesic suspension defines a composite
$$\theta:\operatorname{Map}_*(S^1,P_{k-1})\longrightarrow\operatorname{Map}_*(S^k,\mathrm{SO}(p)).$$
It is $d$-connected when $p$ satisfies the finite size inequalities below. Earlier extendible stages in residue $l=4a-2$ have winding zero. Terminal determinant winding defines a stable, additive label on based sphere maps, independent of positive representation, orthogonal gauge, and stabilization by constant blocks.

## Facts & Assumptions

[A1] The Axiom of Choice is assumed; it implies the countable-choice assumptions in the differential-geometric suppliers. No stronger choice principle is introduced. ([[def-axiom-of-choice]]).

[F1] The minimum-path inclusion is relatively connected whenever the nonminimum index exceeds the parameter dimension. ([[lem-relative-path-shortening-connectivity]]).

[F2] The weak nonunitary index bound and exact winding-dependent unitary bound hold. ([[lem-real-clifford-block-rotation-index-lower-bound]]).

[F3] Relative CW inclusions have the homotopy extension property. ([[prop-relative-cw-inclusions-are-cofibrations]]).

[F4] The geodesic midpoint and tangent identifications apply to the compatible Clifford centriole chain. ([[lem-clifford-centrioles-and-geodesic-tangent-condition]]).



**Proof technique:** direct construction.

**Given:** The data and hypotheses in the Statement.

## Proof

**Proof technique:** direct construction.

1.1 Let $m$ be a chosen meridian of $S^q$, from its north pole to south pole, and fix its image as a shortest path from $J_l$ to $-J_l$. The pair $(S^q,m)$ is a finite CW pair. Restriction of based maps to $m$ has the homotopy lifting property for finite-CW parameters: lifting is extension of a map on $(S^q\times\{0\})\cup(m\times I)$, supplied by [F3], also relative to a parameter subcomplex. The based mapping space of the interval $m$ is contractible by precomposition with its contraction to the north endpoint. Hence the fixed-meridian fiber has the same relative homotopy classes as the whole based mapping space. [A1, F3, construct]


1.2 At a stage $l=4a-2$ before the terminal stage, the chosen midpoint $J_{l+1}$ determines the minimal path $\exp(\pi tA)J_l$, with $A^2=-I$. Set $i=J_1\cdots J_{l-1}$. The $\pm1$ eigenspaces of $A/i$ determine its winding. An additional $J_{l+2}$ commutes with $A$ and anticommutes with $i$, so interchanges those spaces; their dimensions agree and the winding is zero. Conversely if those dimensions agree, an isometric $C_l$ intertwiner between the two spaces yields an off-diagonal complex structure, followed by $J_l$, extending the family. Thus extendibility forces precisely the zero winding needed for the earlier index estimates. The last stage does not have this further generator and retains its actual winding. [F2, F4, algebra]


1.3 Put $l=k-1$ and $i=J_1\cdots J_{l-1}$. For a based loop $\omega$ in $P_l$ define $\eta(\omega)$ to be the winding of $\det_{\mathbb C}(\omega J_l^{-1})$. The positive half-meridian $\gamma(t)=\exp(\pi it)J_l$ has winding $p/4$. Fixing that half-meridian leaves a second path $\widetilde\gamma:J_l\rightsquigarrow-J_l$; concatenating the first with the reverse second gives $\eta=p/4-w(\widetilde\gamma).$ This is an identity of determinant windings, not an identification of all winding components with one component. [F2, F4, construct]


2.1 View $S^q$ as a suspension of $S^{q-1}$. Adjunction identifies the fixed-meridian space with $\operatorname{Map}_*(S^{q-1},\Omega(P_l;J_l,-J_l))$, the distinguished sphere point being sent to the fixed path. Replacing paths by minima gives geodesic suspension with midpoint target $P_{l+1}$. For a test disk $D^j$, the exact parameter pair is $(D^j\times S^{q-1},(\partial D^j\times S^{q-1})\cup(D^j\times\{*\})).$ Its dimension is $j+q-1$. For $q\ge2$ the equator is connected, so all its paths lie in the component of the fixed meridian. Thus nonminimum index greater than $d+q-1$ implies $d$-connectivity of this suspension. [F1, F3, F4, step 1.1, construct]


3.1 Put $D=d+k$. A safe finite size requirement is $p/s_{l+1}-1>D$ for every $0\le l\le k-2$ with $l\not\equiv2\pmod4$, and $p\ge4Ds_l$ for the remaining $l$. Choose $p_0(d,k)$ large enough for these inequalities, with dimensions restricted to those admitting the given representation. By [F2] and step 1.2 these bounds make all nonminimum indices exceed the actual parameter dimensions in step 2.1. Each suspension is $d$-connected, hence so is their composite $\theta$. For finite-CW pairs this follows by successive relative extensions, using [F3] to maintain boundary homotopies. The notation $p_0(d)$ in the source suppresses the fixed value of $k$. [F1, F2, F3, step 2.1, step 1.2, algebra]


4.1 For $p$ sufficiently large, step 3.1 with $d\ge1$ gives a bijection of path components under $\theta$. Define the stable label of a sphere map by the winding of its preimage component after adding a sufficiently large constant block. This is independent of the size: positive representation block sums preserve every suspension, determinant winding is additive, and a constant block has winding zero. Two sizes embed in a common larger one, where the component bijection forces equality. Positive representations of the same dimension are orthogonally equivalent. Conjugation preserves the entire construction; after adding a constant coordinate an arbitrary orthogonal conjugator $T$ can be replaced by $\operatorname{diag}(T,\det T)$ in a connected special orthogonal group, and a path to the identity gives the same stable label. This proves representation and orthogonal gauge invariance. An oriented change of frame on the domain sphere is isotopic to the identity through its special orthogonal frame group, so also preserves the label. [F2, F4, step 3.1, step 1.3, construct] ∎
