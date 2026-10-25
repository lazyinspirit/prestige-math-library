---
id: thm-qftx-framed-penrose-ward-correspondence-on-s4
kind: theorem
title: Conditional framed Penrose–Ward correspondence on the round four-sphere
status: "published"
origin: pipeline
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
page: qftx-adhm-zero-fi-asd-correspondence
dependency_level: 9
axiom_base: "ZF + full AC, with the explicitly stated GAGA, family base-change and local integrable-Dolbeault inputs."
deps:
  - def-qftx-zero-fi-regular-adhm-and-twistor-data
  - lem-qftx-twistor-line-section-direct-image
  - thm-qftx-projective-gaga-for-monad-data
  - thm-cohomology-projective-space-twisting-sheaves
  - lem-qftx-u-n-determinant-flat-charge-normalization
  - def-axiom-of-choice
  - def-complex-manifolds-and-holomorphic-vector-bundles
  - lem-qftx-local-integrable-dolbeault-frames
  - lem-normal-thom-class-realizes-the-poincare-dual-of-a-submanifold
  - lem-integral-cohomology-ring-of-complex-projective-space-by-splitting
dependency_roles:
  def-qftx-zero-fi-regular-adhm-and-twistor-data: mathematical-premise
  lem-qftx-twistor-line-section-direct-image: mathematical-premise
  thm-qftx-projective-gaga-for-monad-data: mathematical-premise
  thm-cohomology-projective-space-twisting-sheaves: mathematical-premise
  lem-qftx-u-n-determinant-flat-charge-normalization: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-complex-manifolds-and-holomorphic-vector-bundles: mathematical-premise
  lem-qftx-local-integrable-dolbeault-frames: mathematical-premise
  lem-normal-thom-class-realizes-the-poincare-dual-of-a-submanifold: mathematical-premise
  lem-integral-cohomology-ring-of-complex-projective-space-by-splitting: mathematical-premise
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
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
---

## Statement

Assume full AC and the following exact projective GAGA comparison: analytification on $\mathbb P^3_{\mathbb C}$ is an exact tensor equivalence on coherent sheaves and induces cohomology isomorphisms. The local smooth integrable-Dolbeault frame theorem is supplied by the separately proved local lemma in the Statement references; step 1.1 invokes that lemma, rather than reproving it here.

For integers $k\ge0$, $N\ge2$, let $S^4=\mathbb H\mathbb P^1$ have the unit round metric and positive stereographic orientation $dx^0\wedge dx^1\wedge dx^2\wedge dx^3$, where $z_1=x^0+ix^1$, $z_2=x^2+ix^3$. A framed ASD object is a smooth Hermitian rank-$N$ bundle $E\to S^4$, a smooth unitary connection $A$, a unitary framing at infinity, $F_A^+=(F_A+*_gF_A)/2=0$, and $q_N=-(8\pi^2)^{-1}\int_{S^4}\operatorname{tr}_N(F_A\wedge F_A)=-k$, modulo unitary bundle isomorphisms preserving the connection and framing; write $\mathcal M^{\mathrm{ASD}}_{k,N}$ for this set.

Set $Z=\mathbb P_{\mathbb C}(\mathbb H^2)=\mathbb C\mathbb P^3$, let $j$ be the fixed right quaternionic structure with $j^2=-1$, and define $\sigma([v])=[jv]$ and $\pi([v])=\operatorname{span}_{\mathbb C}(v,jv)\in\mathbb H\mathbb P^1$. For $x\in S^4$, the real twistor line is $L_x=\pi^{-1}(x)\cong\mathbb C\mathbb P^1$; $L_\infty$ is the fiber over infinity. A positive Hermitian Ward reality datum on a holomorphic rank-$N$ bundle $\mathcal E\to Z$ is a nondegenerate holomorphic pairing $b:\mathcal E\otimes\sigma^*\overline{\mathcal E}\to\mathcal O_Z$ satisfying $b_{\sigma z}(v,u)=\overline{b_z(u,v)}$ and such that

$$h_x(s,t)=b_z(s(z),t(\sigma z))$$

is independent of $z\in L_x$ and positive definite on $H^0(L_x,\mathcal E|_{L_x})$. A unitary framing on $L_\infty$ is an isomorphism $\Phi:\mathcal E|_{L_\infty}\xrightarrow{\sim}\mathcal O_{L_\infty}^{\oplus N}$ that is unitary for the form induced by $b$. Let $\mathcal O_Z(1)$ be the dual tautological line bundle, put $H=c_1(\mathcal O_Z(1))$, and require $\mathcal E|_{L_x}\cong\mathcal O_{L_x}^{\oplus N}$ for every real twistor line and $c_2(\mathcal E)=kH^2$.

Then $\widehat E_x=H^0(L_x,\mathcal E|_{L_x})$ forms a smooth rank-$N$ Hermitian bundle on $S^4$. For the ideal sheaf $\mathcal I_{L_x}$ of $L_x$, its first infinitesimal neighbourhood is the closed subscheme with structure sheaf $\mathcal O_Z/\mathcal I_{L_x}^2$. Extend each section of $\widehat E_x$ holomorphically and uniquely to that neighbourhood and differentiate the extension in the family of lines; this defines the Ward connection $\widehat\nabla$. The form induced by $b$ is smooth and is preserved by $\widehat\nabla$; this is a conclusion, not an independent metric-compatibility assumption.

Use the standard spin structure on $S^4$ with rank-two complex spinor bundles $S^+$ and $S^-$, so $T_{\mathbb C}S^4\cong S^+\otimes S^-$. A point of $L_x=\mathbb P(S_x^+)$ is a complex line $\ell\subset S_x^+$, and $\ell\otimes S_x^-$ is the corresponding complex alpha-plane. Under these hypotheses, the Ward construction gives a bijection between the framed ASD classes in $\mathcal M^{\mathrm{ASD}}_{k,N}$ and isomorphism classes of the specified framed Ward data, where Ward isomorphisms preserve the holomorphic bundle, pairing $b$, and framing $\Phi$. The reconstructed Ward connection satisfies $F^+=0$ and $q_N=-k$. The inverse sends a framed ASD connection to the holomorphic structure on $\pi^*E$ whose vertical part is the standard Dolbeault operator and whose horizontal $(0,1)$ part is induced by $A$ along the horizontal lifts of vectors in these alpha-planes, using the Levi-Civita horizontal distribution of $\pi$. Define $T=(S^1)^2\times(S^1)^N$, with $S^1=\{u\in\mathbb C:|u|=1\}$, $t_1,t_2,e_1,\ldots,e_N\in S^1$, and $h=\operatorname{diag}(e_1^{-1},\ldots,e_N^{-1})$. It acts on $S^4$ by $(z_1,z_2)\mapsto(t_1z_1,t_2z_2)$, on framed ASD classes by inverse pullback and postcomposition of the framing by $h$, and on $Z$ by $g([\lambda_1:\lambda_2:\mu_1:\mu_2])=[\lambda_1:t_1t_2\lambda_2:t_1\mu_1:t_2\mu_2]$; the induced action on framed Ward data is inverse pullback by $g$ together with postcomposition of $\Phi$ by $h$. Both maps preserve the framing, Hermitian form, charge, and these torus actions. Reducible bundles and flat summands are included; no irreducibility assumption is imposed.

## Statement references

[[def-qftx-zero-fi-regular-adhm-and-twistor-data]]

[[lem-qftx-twistor-line-section-direct-image]]

[[lem-qftx-local-integrable-dolbeault-frames]]

[[thm-qftx-projective-gaga-for-monad-data]]

[Donaldson, §3, printed pp. 4–6](https://arxiv.org/pdf/2205.08639)

[Nakajima–Yoshioka, §3.1, printed pp. 17–19](https://arxiv.org/pdf/math/0311058)

## Facts & Assumptions

**Given:** AC, the exact positive incidence/reality convention, the full framed unitary ASD and Ward objects in the Statement, and the absolute GAGA interface.

[A1] Absolute projective GAGA supplies the exact coherent tensor equivalence and cohomology comparison. The relative-family comparison map is constructed in its current proof and is not a separate assumed theorem. [[thm-qftx-projective-gaga-for-monad-data]]

[F1] Positive stereographic orientation, incidence equations, the involution and the pairing-induced positive Hermitian form have their exact local definition. [[def-qftx-zero-fi-regular-adhm-and-twistor-data]]

[F2] A square-zero smooth Dolbeault operator on a finite-rank bundle has local holomorphic frames, and intertwining maps are holomorphic. [[lem-qftx-local-integrable-dolbeault-frames]]

[F3] Absolute GAGA, algebraic line-family cohomology/base change and the elementary local P¹ product argument give the actual analytic section bundle and evaluation isomorphism near every real line; surjectivity is proved, not assumed. The scalar O(-1) degree-zero and degree-one groups vanish. [[lem-qftx-twistor-line-section-direct-image]], [[thm-cohomology-projective-space-twisting-sheaves]]

[F4] Framed unitary ASD determinant reduction and the exact trace Chern-Weil normalization give $q_N=-c_2[S^4]$. [[lem-qftx-u-n-determinant-flat-charge-normalization]]

[F5] The normal Thom class represents the oriented Poincaré dual, and integral projective cohomology is generated by the tautological Euler class; its negative is c₁(O(1)). [[lem-normal-thom-class-realizes-the-poincare-dual-of-a-submanifold]], [[lem-integral-cohomology-ring-of-complex-projective-space-by-splitting]]

## Proof

**Given:** The stated objects and the single conditional supplier [A1].

1.1 In the chart $w=\lambda_2/\lambda_1$ on a real incidence fiber, the projected horizontal (0,1) directions are $H_1=\partial_{\bar z_1}-w\partial_{z_2}$ and $H_2=\partial_{\bar z_2}+w\partial_{z_1}$. Indeed these and the vertical $\partial_{\bar w}$ annihilate the holomorphic coordinates w, $\mu_1=z_1-\bar z_2w$, $\mu_2=z_2+\bar z_1w$. They are independent and commute; their coefficients are holomorphic in w. For a unitary connection A define the pulled-back (0,1) operator by the vertical ordinary derivative and $\nabla_A$ along H₁,H₂. Its mixed squares vanish by the displayed commuting generators and holomorphic w coefficients. Its horizontal square is $F_A(H_1,H_2)=F_{\bar1\bar2}-w(F_{1\bar1}+F_{2\bar2})+w^2F_{12}$, which vanishes for an ASD two-form in the positive orientation: the three coefficients are precisely its self-dual component. Thus the operator squares to zero on this chart, and on the other projective chart by the same tensorial calculation. Apply [F2] to obtain a genuine holomorphic bundle. Its restriction to every real line is the constant bundle $E_x$, with positive reality pairing induced by the unitary metric and framing at infinity. This pairing is holomorphic: its vertical derivative vanishes on the constant fibres, and differentiating horizontally gives zero by the original identity $\nabla_Ah=0$, with the conjugate pullback at σ interchanging the conjugate horizontal directions. [F1, F2, construct, algebra]

2.1 For any Ward bundle use [F3] to form the analytic vector bundle H over a complex-open neighborhood U of every real line in G=Gr(2,4), with holomorphic evaluation p*H≅e*E on the universal family. On a graph chart X:A→B, incidence is (X,[λ])↦[λ,Xλ]. The distribution D=ker(de) consists of matrix variations v with vλ=0 and no λ variation. It is a holomorphic involutive rank-two subbundle, since it is tangent to the fibers of the submersion e. The restriction of p*Ω¹_U to D has kernel B*⊗O(-1) on each projective-line fiber and target D*≅O(1)². The O(-1) vanishings in [F3] give Ω¹_U≅p_*D*. Equivalently, on the graph chart a linear covector on Hom(A,B) restricts to a section on all kernels vλ=0; the map is injective because those kernels span Hom(A,B), and both coefficient spaces have dimension four. This gives the holomorphic sheaf isomorphism without any extra analytic base-change assumption. [A1, F3, step 1.1, algebra]

3.1 The bundle e*E has a canonical flat partial connection δ along D: in a holomorphic frame pulled back from E, differentiate coefficient functions along the fibers of e. Changes of that frame have zero D derivative, so δ is well-defined and flat. Transfer δ to p*H by evaluation. For a local holomorphic section s of H, δ(p*s) is a section of D*⊗p*H. Push down using Ω¹_U≅p_*D* from step 2.1 to define ∇s. The partial Leibniz rule becomes ∇(fs)=df⊗s+f∇s, so ∇ is a holomorphic full connection. Its pullback restriction to D is δ, first on pulled-back sections and then on all sections by Leibniz. It is unique: the difference of two such connections is an End(H)-valued one-form restricting to zero on D at every λ, hence zero by the same cotangent isomorphism. The curvature restricts on D to δ²=0. Connections on overlapping graph charts agree by uniqueness. [F3, step 2.1, construct, algebra]

4.1 Restrict H and ∇ to the totally real graph locus $M=\mathbb HP^1$. Its smooth real incidence is diffeomorphic to Z by $(P,[v])\mapsto[v]$, with inverse $[v]\mapsto(\operatorname{span}(v,jv),[v])$; the explicit charts in [F3] verify smoothness. Under this identification dp(D) is exactly the span of H₁,H₂ in step 1.1: write $X_z=((z_1,-\bar z_2),(z_2,\bar z_1))$ and solve $v(1,w)^T=0$. Therefore the restricted smooth connection has $F(H_1,H_2)=0$ for every w, so all three self-dual coefficients in step 1.1 vanish. Hence it is ASD. Evaluation intertwines the original holomorphic operator on E with the reconstructed vertical/horizontal Dolbeault operator: it is holomorphic vertically, and on D its derivative is exactly the canonical relative derivative δ by step 3.1. These directions generate the (0,1) tangent in step 1.1, proving equality of the full operators, not just of underlying bundles. [F1, F2, F3, step 1.1, step 2.1, step 3.1, algebra]

5.1 To identify the connection with the first-neighborhood prescription, the line's conormal bundle is O(-1)², by its two independent linear defining equations. The sequence 0→E|L⊗(I/I²)→E|L^(1)→E|L→0 and [F3]'s O(-1) vanishings give a unique extension of every line section to L^(1). Smooth variation is supplied by step 3.1, not merely inferred from this pointwise uniqueness. At a graph X choose a local holomorphic section s of H with specified value and ∇s(X)=0; in a local frame its affine-linear coefficient function can realize any prescribed first jet. Its evaluation derivative in parameter direction v vanishes on vλ=0 by step 3.1, so factors through the normal displacement vλ. These factorizations glue on the two λ charts and give precisely a first-neighborhood extension. Uniqueness identifies it with the preceding extension. Subtracting such a horizontal first jet from an arbitrary section shows that differentiation relative to this extension is exactly ∇. This proves the prescription, its Leibniz rule, chart independence and smooth dependence. [F3, step 2.1, step 3.1, step 4.1, algebra]

5.2 The section metric is the form induced by $b_z(s(z),t(\sigma z))$ in [F1]. It is independent of z on each line because that scalar is holomorphic on P¹, and is smooth by the evaluation frames of [F3]. The preceding construction commutes with duals, conjugate pullback and bundle morphisms: each commutes with the canonical relative e-connection and the cotangent isomorphism, and uniqueness in step 3.1 then forces the full connections to commute. Apply this to the holomorphic reality isomorphism $E\to\sigma^*\overline E^*$. On the real line locus, the induced conjugate involution fixes the parameter and its real tangent vectors. Thus the induced map $H\to\overline H^*$ intertwines ∇ with the conjugate dual connection, which is precisely $Xh(s,t)=h(\nabla_Xs,t)+h(s,\nabla_Xt)$ for real X. Positivity from [F1] makes ∇ unitary. Arbitrary independent positive forms would not satisfy this identity and are not used. [F1, F3, step 3.1, step 4.1, algebra]

6.1 Starting from A in step 1.1, its constant real-line sections identify the reconstructed smooth H with E. Along every alpha-plane the recovered connection has the same derivative as A; the cotangent uniqueness in step 3.1 makes the full connections equal. The unitary reality pairing and framing also agree. Starting from a Ward bundle, step 4.1 proves evaluation is a holomorphic isomorphism from the reconstructed pullback to the original bundle, and step 5.2 preserves its reality pairing and metric. These constructions and identities apply to morphisms as well, so descend to inverse maps on based unitary gauge and framed holomorphic isomorphism classes. No irreducibility or absence of parallel sections was used. [F1, F2, F3, step 1.1, step 3.1, step 4.1, step 5.2, algebra]

7.1 The explicit incidence chart fixes vertical complex orientation followed by the positive base orientation to be the complex orientation of Z. The pullback of the positive point Thom class on S⁴ is the positive normal Thom class of its fiber CP¹; [F5] identifies its absolute class as the Poincaré dual of that fiber. A linear CP¹ has dual H²: H restricts with integral one to the line, and the integral projective cohomology ring gives H² as its positive degree-four generator. Hence $\pi^*u=H^2$ for the positive generator u of H⁴(S⁴). Smooth evaluation gives $E_{\mathrm{twistor}}\cong\pi^*H$, so $c_2(E_{\mathrm{twistor}})=kH^2$ is equivalent to $c_2(H)[S^4]=k$. By [F4] this is $q_N=-k$; the same calculation verifies the forward map's charge clause. Framing is transported by evaluation at infinity. All constructions use incidence, evaluation and unique relative connections, so commute with the specified projective rotations and framing transformations. They therefore give the claimed T-equivariant bijection and all stated invariants, conditional on the exact absolute GAGA comparison [A1]. [A1, F1, F4, F5, step 4.1, step 5.2, step 6.1, algebra] ∎

## Remarks

The projective GAGA theorem supplies the absolute comparison input with its declared analytic prerequisites and projective generation proof. The local integrable-frame, degree-zero line-family, connection and positive metric arguments above are separate concrete proofs and do not discharge the coupled Penrose transform or inverse real-monad normal form.
