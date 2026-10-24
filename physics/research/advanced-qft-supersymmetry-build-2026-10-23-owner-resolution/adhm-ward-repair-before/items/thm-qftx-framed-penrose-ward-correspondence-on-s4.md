---
id: thm-qftx-framed-penrose-ward-correspondence-on-s4
kind: theorem
title: Conditional framed Penrose–Ward correspondence on the round four-sphere
status: draft
origin: pipeline
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
page: qftx-adhm-zero-fi-asd-correspondence
dependency_level: 5
axiom_base: "ZF + full AC, with the explicitly stated GAGA, family base-change and local integrable-Dolbeault inputs."
deps:
  - def-qftx-zero-fi-regular-adhm-and-twistor-data
  - lem-qftx-twistor-line-section-direct-image
  - thm-qftx-projective-gaga-for-monad-data
  - thm-cohomology-projective-space-twisting-sheaves
  - lem-qftx-u-n-determinant-flat-charge-normalization
  - def-axiom-of-choice
  - def-complex-manifolds-and-holomorphic-vector-bundles
dependency_roles:
  def-qftx-zero-fi-regular-adhm-and-twistor-data: mathematical-premise
  lem-qftx-twistor-line-section-direct-image: mathematical-premise
  thm-qftx-projective-gaga-for-monad-data: mathematical-premise
  thm-cohomology-projective-space-twisting-sheaves: mathematical-premise
  lem-qftx-u-n-determinant-flat-charge-normalization: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-complex-manifolds-and-holomorphic-vector-bundles: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Simon K. Donaldson, The ADHM construction of Yang-Mills instantons"
      url: https://arxiv.org/pdf/2205.08639
      locator: "§3, printed pp. 4–6: real twistor lines, the Ward transform in both directions, its real form, and the first-neighbourhood construction."
    - title: "Hiraku Nakajima and Kota Yoshioka, Lectures on Instanton Counting"
      url: https://arxiv.org/pdf/math/0311058
      locator: "§3.1, printed pp. 17–19: framed locally-free sheaves and the cited framed ASD interpretation; it cites Donaldson and is not a proof of the twistor transform."
verification:
  precheck: pass
---

## Statement

Assume full AC and the following two analytic/algebraic inputs: every smooth complex vector bundle on the complex three-manifold $Z=\mathbb CP^3$ with a smooth operator $\bar\partial_{\mathcal E}$ satisfying the Leibniz rule and $\bar\partial_{\mathcal E}^2=0$ has local frames in which that operator is the standard Dolbeault operator; and analytification on $\mathbb P^3_{\mathbb C}$ is an exact tensor-compatible equivalence for the bundles, morphisms, restrictions and projective-family base-change maps used below. These are conditional inputs, not conclusions of this theorem.

For $N\geq2$, let $\mathcal M^{\mathrm{ASD}}_{k,N}$ be the framed unitary ASD sector on the round oriented $S^4$ defined above. On the Ward side take a holomorphic rank-$N$ bundle $\mathcal E$ on $Z$, a positive Hermitian Ward reality datum, and a unitary framing on $L_\infty$. Require $\mathcal E|_{L_x}\cong\mathcal O_{L_x}^{\oplus N}$ for every real twistor line, require the degree-zero family base-change map to be surjective at every such line, and require $c_2(\mathcal E)=kH^2$, where $H=c_1(\mathcal O_Z(1))$. Then $\widehat E_x=H^0(L_x,\mathcal E|_{L_x})$ forms a smooth rank-$N$ Hermitian bundle on $S^4$. For each section of $\widehat E_x$, extend it holomorphically and uniquely to the first infinitesimal neighbourhood of $L_x$ and differentiate this extension in the family of lines; this defines the Ward connection $\widehat\nabla$. Include in the positive Hermitian Ward data the requirement that its specified positive Hermitian form on $\widehat E$ is smooth and is preserved by $\widehat\nabla$.

Under these hypotheses, the Ward construction gives a bijection between based unitary gauge classes in $\mathcal M^{\mathrm{ASD}}_{k,N}$ and isomorphism classes of the specified framed Ward bundles. The reconstructed Ward connection satisfies $F^+=0$ and $q_N=-k$. The inverse sends a framed ASD connection to the holomorphic structure on $\pi^*E$ whose vertical part is the standard Dolbeault operator and whose horizontal $(0,1)$ part is the connection on the planes $\ell\otimes S_x^-$. Both maps preserve the framing, Hermitian form, charge, and compact torus action. Reducible bundles and flat summands are included; no irreducibility assumption is imposed.

## Statement references

[[def-qftx-zero-fi-regular-adhm-and-twistor-data]]

[[lem-qftx-twistor-line-section-direct-image]]

[[thm-qftx-projective-gaga-for-monad-data]]

[Donaldson, §3, printed pp. 4–6](https://arxiv.org/pdf/2205.08639)

[Nakajima–Yoshioka, §3.1, printed pp. 17–19](https://arxiv.org/pdf/math/0311058)

## Facts & Assumptions

**Given:** Full AC; the round oriented $S^4$, its twistor fibration and spinor convention; either a framed unitary ASD connection or a Ward bundle satisfying every condition in the Statement; and the two explicitly conditional analytic/algebraic inputs in the Statement.

[A1] The exact GAGA interface is analytification as an exact tensor-compatible equivalence, preserving the stated projective-family restriction, framed morphism and base-change data. A current batch-59 carrier exists, but its Step 1 record is escalated on the local analytic package and relative direct-image comparison; algebraic compatibility remains conditional. [[thm-qftx-projective-gaga-for-monad-data]]

[A2] At every real twistor line, the degree-zero base-change map for the universal line family is surjective. This is exactly the additional hypothesis of [[lem-qftx-twistor-line-section-direct-image]]; the current GAGA carrier's family clause is conditional on locally free higher direct images and base-change isomorphisms, and does not establish this surjectivity by itself.

[A3] The local integrable-Dolbeault theorem stated in the Statement converts the square-zero operator constructed below into a holomorphic vector bundle with local holomorphic frames. The library definition fixes the meaning of such frames but does not prove this analytic theorem. [[def-complex-manifolds-and-holomorphic-vector-bundles]]

[A4] On the Ward side, the positive Hermitian form on $\widehat E$ is smooth and preserved by the first-order-extension connection, as required in the Statement. This condition is part of the Ward data and is not inferred from linewise triviality alone.

[F1] The twistor fibres are $L_x=\mathbb P(S_x^+)$, and the horizontal complex two-plane corresponding to $\ell\in\mathbb P(S_x^+)$ is $\ell\otimes S_x^-$. With the chosen orientation, a curvature component restricts there as $F_{AB}\pi^A\pi^B$, and vanishing for every $[\pi]$ is equivalent to $F^+=0$. [[def-qftx-zero-fi-regular-adhm-and-twistor-data]]

[F2] On $L_x\cong\mathbb P^1$, $H^0(\mathcal O(-1))=H^1(\mathcal O(-1))=0$. [[thm-cohomology-projective-space-twisting-sheaves]]

[F3] For the universal projective-line family, the stated surjectivity of the degree-zero base-change map makes the direct image locally free near each real line, identifies its fibre with $H^0(L_x,\mathcal E|_{L_x})$, and makes evaluation an isomorphism on the real incidence family. [[lem-qftx-twistor-line-section-direct-image]]

[F4] For a framed unitary ASD connection, the determinant connection is flat and the trace-normalized Chern-Weil relation is $-q_N=\langle c_2(E),[S^4]\rangle$. [[lem-qftx-u-n-determinant-flat-charge-normalization]]

## Proof

**Given:** The two alternatives and every conditional hypothesis in the Statement. The inverse construction uses [A2]; the forward construction uses the local analytic input in [A3].

1.1 For a framed ASD connection $A$, pull $E$ back to $Z$. Define $\bar\partial_{\mathcal E}$ by the ordinary Dolbeault operator along each vertical twistor line and by $A^{0,1}$ on horizontal vectors. The vertical square is zero. A mixed vertical-horizontal commutator is zero because the vertical connection is constant on the fibre $E_x$ and vertical vectors project to zero on $S^4$. On two horizontal $(0,1)$ vectors the square is $F_A$ evaluated on their projected plane $\ell\otimes S_x^-$. By [F1] and $F_A^+=0$, this restriction vanishes, so $\bar\partial_{\mathcal E}^2=0$. [given, F1, algebra]

1.2 Apply [A3] to obtain the holomorphic structure on $\pi^*E$. Its restriction to each real line is the constant holomorphic bundle with fibre $E_x$, so it is holomorphically and unitarily trivial. The Hermitian metric induces the positive Ward reality datum, and the framing at $\infty$ gives the framing on $L_\infty$. The first-order-extension connection recovers $A$ because extending a constant section differentiates it by the original covariant derivative; hence the induced Hermitian form is parallel. By [F4] and the twistor orientation, $q_N=-k$ gives $c_2(E)=ku$ and $c_2(\pi^*E)=kH^2$. Gauge-equivalent framed connections give isomorphic Ward bundles; [A1] supplies the stated algebraic comparison when an algebraic presentation is used. [given, A1, A3, F1, F4, construct]

1.3 For a Ward bundle, [A2] and [F3] make $\widehat E_x=H^0(L_x,\mathcal E|_{L_x})$ a smooth rank-$N$ bundle and identify evaluation on every real line. The conormal bundle is $N^*_{L_x/Z}\cong\mathcal O(-1)\oplus\mathcal O(-1)$, so the first-neighbourhood sequence tensored by $\mathcal E|_{L_x}\cong\mathcal O^{\oplus N}$ is $0\to\mathcal O(-1)^{\oplus2N}\to\mathcal E|_{L_x^{(1)}}\to\mathcal O^{\oplus N}\to0$. By [F2], the left term has zero $H^0$ and $H^1$; its long exact sequence makes $H^0(L_x,\mathcal E|_{L_x^{(1)}})\to H^0(L_x,\mathcal E|_{L_x})$ an isomorphism. Every section therefore has a unique first-order holomorphic extension. Differentiating these extensions along the smooth family of lines gives a connection; the Leibniz rule follows by extending a product, and uniqueness makes the derivative depend only on the first jet. By [A4] this connection is unitary. [A2, A4, F2, F3, algebra]

2.1 In the inverse Ward construction, the horizontal component of the square of the induced Dolbeault operator is $\widehat F$ on $\ell\otimes S_x^-$. It vanishes because the Ward bundle is holomorphic, so $\widehat F_{AB}\pi^A\pi^B=0$ for every $[\pi]\in\mathbb P(S_x^+)$. A homogeneous quadratic in two complex variables that vanishes at every projective point has all three coefficients zero; hence $\widehat F^+=0$ by [F1]. The unitary framing on $L_\infty$ and the evaluation isomorphism frame $\widehat E_\infty$. [given, A4, F1, step 1.3, algebra]

3.1 Starting from $A$, constant sections identify $H^0(L_x,\mathcal E|_{L_x})$ with $E_x$, and the first-order-extension connection is $A$ by step 1.2. Starting from a Ward bundle, [F3] identifies the reconstructed pullback bundle with $\mathcal E$ on every real line; evaluation is holomorphic vertically, and the horizontal Dolbeault derivatives agree by the first-order-extension definition, so evaluation is a holomorphic isomorphism on $Z$. Since $\pi^*u=H^2$ and $c_2(\mathcal E)=kH^2$, naturality gives $\langle c_2(\widehat E),[S^4]\rangle=k$; [F4] then gives $q_N=-k$. The identifications preserve the Hermitian form and framing. No irreducibility is used, so flat summands pass through the same fibrewise section construction. Rotations and framing transformations commute with evaluation and extension, making the two maps inverse and $T$-equivariant on framed isomorphism classes. [A1, A2, A4, F3, F4, step 1.2, step 1.3, step 2.1] ∎

## Remarks

The diagram records the inverse maps on framed isomorphism classes. The proof of the two identities is step 4.1.

```tikzcd
\mathcal M^{\mathrm{ASD}}_{k,N}
  \arrow[r,"\mathcal W"]
  \arrow[dr,"\mathrm{id}"']
&
\mathcal W_{k,N}^{+}
  \arrow[d,"\mathcal W^{-1}"]
\\
&
\mathcal M^{\mathrm{ASD}}_{k,N}
```
