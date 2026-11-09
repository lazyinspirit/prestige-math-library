---
title: External actual supported Riemann–Roch in codimension three
status: published
research_item: thm-author-d026a7b99ace-supported-rr
dependency_level: 22
---

PDF p. 17: Corollary6.9 supported factor calculation

## Prerequisites

- [thm-author-d026a7b99ace-integral-field-model](item-thm-author-d026a7b99ace-integral-field-model)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [lem-adjudicate-6e70d30b9793-smooth-supported-gysin-transport](item-lem-adjudicate-6e70d30b9793-smooth-supported-gysin-transport)


## Statement
For a regular closed immersion $i:Z\hookrightarrow V$ of codimension $d$ between finite-dimensional noetherian schemes, every integer $q>0$, every nonnegative integer $r$ and every class $a\in K_r(Z)$ in ordinary algebraic K-theory, the actual supported integral motivic Chern operation of Navarro §2.2 satisfies the following identity in $H^{2q-r}_{\mathrm M,Z}(V,\mathbb Z(q))$:
$$c^Z_{q,r}(\bar i(a))=\bar i\bigl(P_q^d(\operatorname{rk}(a),c_{1,r}(a),\ldots;c_1(N),\ldots)\bigr).$$
The refined K pushforward and refined motivic Gysin are the specified actual maps. For the EM application assume the Axiom of Choice and the fixed site and universe bounds. In our application $V$ is smooth affine over the perfect field, $Z=x$, $q=d=3$, $r=0$, so the polynomial has no positive Chern or normal variables and is $P^3_3(\operatorname{rk}(a))$. Refined K pushforward of1 is the positive residue-sheaf class; refined motivic pushforward of1 is the fundamental point class, with divisor normalization and composition as in the source. Forget-support maps commute with the universal Chern maps by §2.2, and ordinary K→KH is compatible with those maps; on the regular pair it is an equivalence.

## External input
Import the supported identity of Theorem3.1, with its actual operations and positive Chern-index range. The numerical specialization of the universal polynomial belongs to the downstream coefficient helper, which uses this input and its projective-space calculation; that calculation is not a premise of this item. The proof does not use the source’s defective Key formula, printed Thom expansion or unequal-rank stabilization sentence. The main supported RR theorem is an established input, not claimed reconstructed here. No counterexample to it follows from the separate background-display findings.


## Exact impact of the retained background errors
The deformation argument in Theorem3.1 uses the correctly printed general excess formula2′ of Theorem2.3, with its top excess Chern factor; this is the applicable version of the malformed Key formula. The argument uses the actual Thom top class $c_d(H)$ and its uniquely refined support class, not the inhomogeneous polynomial expansion in §2.6. Finally our closed support is a smooth point, so its normal bundle is a three-dimensional vector space, and its pullback along the deformation is trivial. The needed zero-section normalization is therefore the trivial-bundle case of Theorem2.7: compose the three Cartier zero sections and apply the correctly stated divisor normalization and functoriality. The false general unequal-free-rank stabilization criterion is not needed for that case. Thus the exact inputs to this restricted deformation/RR application are specified without reproducing any of those three false printed steps. The deeper Kondo–Yasuda/Jouanolou universal computations remain explicit external inputs, not locally reconstructed proofs.

## Exact EM application
[lem-adjudicate-6e70d30b9793-smooth-supported-gysin-transport](item-lem-adjudicate-6e70d30b9793-smooth-supported-gysin-transport) identifies the refined smooth Gysin map and positive point class under the specified integral coefficient comparison. The inherited Choice premise, [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice), belongs to this EM/smooth-model application; Navarro’s general theorem retains its stated hypotheses. The first and higher Chern maps are identified before taking support fibers. All background-source qualifications above remain in force.
