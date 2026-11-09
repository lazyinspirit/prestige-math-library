---
id: thm-author-d026a7b99ace-supported-rr
kind: theorem
title: External actual supported Riemann–Roch in codimension three
status: published
domain: mathematics
deps:
  - thm-author-d026a7b99ace-integral-field-model
  - math:def-axiom-of-choice
  - lem-adjudicate-6e70d30b9793-smooth-supported-gysin-transport
dependency_roles:
  thm-author-d026a7b99ace-integral-field-model: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  lem-adjudicate-6e70d30b9793-smooth-supported-gysin-transport: mathematical-premise
provenance:
  statement: literature-derived
  proof: literature-derived
external_input: true
sources:
  references:
    - title: Alberto Navarro, On the higher Riemann–Roch without denominators
      url: https://arxiv.org/pdf/1901.09337v1
      locator: Example1.1 p3; §§2.1–2.2 p4; Definition2.4 p6; Theorem3.1 and proof pp7–8
      hypotheses: Finite-dimensional noetherian schemes; regular closed immersion of
        codimension d; positive Chern index q, nonnegative higher-K index r, and
        a in K_r(Z). Here only regular smooth finite-type ambient V over
        algebraically closed k and the smooth closed point are used; no
        characteristic exclusion or resolution assumption. Integral motivic HZ
        as compared in the separate import.
      statement: The universal pointed Chern maps define supported operations,
        compatible with ordinary K→KH and forgetting support. For q=d=3,r=0,
        supported RR gives c_3^Z(ibar(a))=ibar(P_3^3(rk(a))) with integral
        universal polynomial depending only on rank.
      reading_limits: The prior import records reading pp2–9. For this scoped repair,
        reread Example1.1, §§2.1–2.2, Theorem2.3, Definition2.4, §§2.6–2.7 and
        Theorem3.1 with its proof, printed pp3–8, in primary PDF text. The
        theorem remains an established external input; its cited
        Kondo–Yasuda/Jouanolou computations were not reconstructed. Existing
        background-error qualifications are retained without fresh adjudication.
dependency_level: 22
---

## Statement
For a regular closed immersion $i:Z\hookrightarrow V$ of codimension $d$ between finite-dimensional noetherian schemes, every integer $q>0$, every nonnegative integer $r$ and every class $a\in K_r(Z)$ in ordinary algebraic K-theory, the actual supported integral motivic Chern operation of Navarro §2.2 satisfies the following identity in $H^{2q-r}_{\mathrm M,Z}(V,\mathbb Z(q))$:
$$c^Z_{q,r}(\bar i(a))=\bar i\bigl(P_q^d(\operatorname{rk}(a),c_{1,r}(a),\ldots;c_1(N),\ldots)\bigr).$$
The refined K pushforward and refined motivic Gysin are the specified actual maps. For the EM application assume the Axiom of Choice and the fixed site and universe bounds. In our application $V$ is smooth affine over the perfect field, $Z=x$, $q=d=3$, $r=0$, so the polynomial has no positive Chern or normal variables and is $P^3_3(\operatorname{rk}(a))$. Refined K pushforward of1 is the positive residue-sheaf class; refined motivic pushforward of1 is the fundamental point class, with divisor normalization and composition as in the source. Forget-support maps commute with the universal Chern maps by §2.2, and ordinary K→KH is compatible with those maps; on the regular pair it is an equivalence.

## External input
Import the supported identity of Theorem3.1, with its actual operations and positive Chern-index range. The numerical specialization of the universal polynomial belongs to the downstream coefficient helper, which uses this input and its projective-space calculation; that calculation is not a premise of this item. The proof does not use the source’s defective Key formula, printed Thom expansion or unequal-rank stabilization sentence. The main supported RR theorem is an established input, not claimed reconstructed here. No counterexample to it follows from the separate background-display findings.


## Exact impact of the retained background errors
The deformation argument in Theorem3.1 uses the correctly printed general excess formula2′ of Theorem2.3, with its top excess Chern factor; this is the applicable version of the malformed Key formula. The argument uses the actual Thom top class $c_d(H)$ and its uniquely refined support class, not the inhomogeneous polynomial expansion in §2.6. Finally our closed support is a smooth point, so its normal bundle is a three-dimensional vector space, and its pullback along the deformation is trivial. The needed zero-section normalization is therefore the trivial-bundle case of Theorem2.7: compose the three Cartier zero sections and apply the correctly stated divisor normalization and functoriality. The false general unequal-free-rank stabilization criterion is not needed for that case. Thus the exact inputs to this restricted deformation/RR application are specified without reproducing any of those three false printed steps. The deeper Kondo–Yasuda/Jouanolou universal computations remain explicit external inputs, not locally reconstructed proofs.

## Exact EM application
[[lem-adjudicate-6e70d30b9793-smooth-supported-gysin-transport]] identifies the refined smooth Gysin map and positive point class under the specified integral coefficient comparison. The inherited Choice premise, [[math:def-axiom-of-choice]], belongs to this EM/smooth-model application; Navarro’s general theorem retains its stated hypotheses. The first and higher Chern maps are identified before taking support fibers. All background-source qualifications above remain in force.
