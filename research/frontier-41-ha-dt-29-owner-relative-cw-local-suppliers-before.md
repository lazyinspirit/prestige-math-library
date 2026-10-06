---
id: lem-a-handle-decomposition-gives-a-relative-cw-complex
kind: lemma
title: "A handle decomposition gives a relative CW complex"
status: draft
origin: pipeline
dependency_level: 4
deps: [def-handle-decomposition-relative-to-the-incoming-boundary, lem-handle-attachments-are-relative-cell-attachments-up-to-homotopy, def-cell-attachment-by-a-characteristic-map, def-skeleta-cw-subcomplex-and-relative-cw-complex, prop-relative-cw-inclusions-are-cofibrations, def-cofibration-and-homotopy-extension-property, thm-cellular-approximation-for-maps-of-cw-pairs, thm-adapted-excellent-morse-functions-exist-on-compact-cobordisms, thm-morse-functions-and-handle-decompositions-correspond]
justified_by: []
provenance:
  statement: literature-derived
  proof: literature-derived
verification:
  precheck: pass
sources:
  references:
    - title: "Allen Hatcher, Algebraic Topology, Chapter 0, Propositions 0.18–0.19 and Corollaries 0.20–0.21, pp. 16–17"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
    - title: "C. T. C. Wall, Differential Topology (Cambridge Studies in Advanced Mathematics 156), Sections 5.1-5.4, printed pp. 129-148"
      url: "https://www.math.auckland.ac.nz/~hekmati/Books/Wall.pdf"
    - title: "Andrei Pajitnov, Circle-Valued Morse Theory (de Gruyter Studies in Mathematics 32), Chapter 5 Sections 1-3 (pp. 163-189) and Chapter 4 Section 3 (pp. 132-162)"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/pajbook.pdf"
proof_strategy: "mapping-cylinder attachment comparison, cellular approximation, and dimension induction"
---


## Statement

Assume $\mathrm{AC}_\omega$. A compact triad $(W;M_0,M_1)$ with a finite handle decomposition of indices $k_1,\ldots,k_r$ has a finite CW model of pairs $(X,A)\simeq(W,M_0)$, with one relative $k_i$-cell per handle. Here $A$ is a finite CW model of $M_0$, rather than an unstated CW structure on that smooth manifold. If a finite CW structure on $M_0$ is supplied, one can take $A=M_0$ and the equivalence relative to $M_0$. The relative cells may be added in the given handle order after cellular approximation of each attaching map; this order need not be a skeletal filtration. In particular a compact smooth manifold has finite CW homotopy type, with the empty incoming face giving the absolute case.

## Facts & Assumptions

[F1] [[lem-handle-attachments-are-relative-cell-attachments-up-to-homotopy]] replaces each handle by its core cell, as a homotopy equivalence relative to the current stage.

[F2] [[thm-cellular-approximation-for-maps-of-cw-pairs]] is choice-free for a finite source; an attaching sphere can therefore be moved into the appropriate skeleton.

[F3] [[def-cell-attachment-by-a-characteristic-map]] and [[def-skeleta-cw-subcomplex-and-relative-cw-complex]] give cell attachments and relative CW pairs.

[F4] [[prop-relative-cw-inclusions-are-cofibrations]] supplies HEP for disk boundaries and CW subcomplexes.

[F5] [[thm-adapted-excellent-morse-functions-exist-on-compact-cobordisms]] and [[thm-morse-functions-and-handle-decompositions-correspond]] give a finite handle presentation on the empty incoming face for every compact smooth manifold, also with boundary.

[A1] The attachment comparison below uses Hatcher, *Algebraic Topology*, Chapter 0, Propositions 0.18–0.19 and Corollaries 0.20–0.21, pp. 16–17, with their complete HEP proofs: https://pi.math.cornell.edu/~hatcher/AT/AT.pdf. These ensure that a cofibration which is a homotopy equivalence is a strong deformation retract, and that homotopic attaching maps give equivalences relative to the base. They assume neither choice nor a CW structure on a base merely receiving a disk.

## Proof

**Given:** The compact triad and its finite ordered handles.

1.1 Record the attachment comparison explicitly. If $e:Y\to Z$ is a homotopy equivalence and $\alpha:S^{k-1}\to Y$, attach a disk to its mapping cylinder $M_e$ along $\alpha$ in the source end. By [A1], $M_e$ retracts to $Y$ fixing $Y$, so this enlarged space retracts to $Y\cup_\alpha D^k$. Inside $M_e$, the source attaching map is homotopic along its cylinder tracks to the target map $e\alpha$. For a homotopy $H$ of attaching maps, the space formed by attaching $D^k\times I$ along $H$ retracts to either endpoint attachment: use the disk-cylinder retraction onto $(D^k\times\{0\})\cup(S^{k-1}\times I)$, or its reversed version, from [F4]. Hence the enlarged space is also equivalent to the disk attached at the target end, which retracts to $Z\cup_{e\alpha}D^k$. This proves invariance under replacing the base by a homotopy equivalent model. For equivalences of pairs, carry the base pair through its mapping cylinder; the same retractions restrict to those of the base cylinder, giving equivalences of pairs. If the original base is retained pointwise and the initial equivalence is relative to it, the relative form of [A1] makes all these equivalences relative to it. The case $k=0$ is a disjoint point. [A1, F3, F4, construct]

2.1 Suppose a CW model $A$ for $M_0$ is available. The initial collar retracts to $M_0$, hence has pair model $(A,A)$. Inductively replace a handle by its core using [F1], transport its attaching map by the current equivalence, and apply step 1.1. By [F2] homotope the resulting map $S^{k_i-1}\to X_{i-1}$ to a cellular one; the attaching sphere has a finite CW structure (two hemispheres, with the usual lower-dimensional cells), so the finite-source clause applies. Step 1.1 also proves invariance under this homotopy. Attaching its disk therefore gives a genuine CW complex $X_i$ with one additional cell of dimension $k_i$ and with base subcomplex $A$. Finite attachments have the quotient weak topology and closure finiteness. Thus the induction gives $(X,A)\simeq(W,M_0)$, and retains the supplied base pointwise when $A=M_0$. [F1, F2, F3, step 1.1, construct]

3.1 Supply the finite model of $M_0$ without circularity by dimension induction, simultaneously proving that every compact smooth manifold has finite CW homotopy type. In dimension zero, compactness and discreteness give finitely many points, with their zero-cell structure. In dimension $d>0$, present any compact smooth $d$-manifold relative to the empty face by [F5]. Step 2.1 uses the empty CW base and produces an absolute finite CW model, without assuming any model in dimension $d$. For a general $d$-triad, $M_0$ is a compact boundaryless $(d-1)$-manifold and has a finite CW model by the already established lower-dimensional case. Step 2.1 then supplies the asserted model of pairs. This induction uses only the explicit finite attachment comparisons and finite-source cellular approximation, in addition to the $\mathrm{AC}_\omega$ Morse and handle suppliers. [F2, F5, step 2.1, base, ih, construct]

4.1 There is one relative cell for every original handle, including a disjoint point for index zero and the full-dimensional core cell for index $n$. An empty handle list gives the collar equivalence to the base model. The equivalence is relative to the actual $M_0$ only when its CW structure is supplied; in general it is an equivalence of pairs to $(X,A)$. This proves all the stated assertions and the dimension-induction conclusion. [F1, F3, step 2.1, step 3.1, discharge-induction] ∎
