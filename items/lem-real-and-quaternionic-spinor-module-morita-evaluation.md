---
id: lem-real-and-quaternionic-spinor-module-morita-evaluation
kind: lemma
title: Ungraded real and quaternionic spinor Morita evaluation
status: published
origin: pipeline
deps:
- def-given-spin-and-spinc-structures-and-associated-spinor-bundles
- thm-real-complex-clifford-algebra-classification
- cor-finite-cw-real-vector-bundle-has-orthogonal-complement-under-ac
- def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: Eschenburg–Hanke, Bott–Thom isomorphism, Hopf bundles and Morse theory,
      propositions 10.4–10.6
    url: https://arxiv.org/pdf/2011.14368v3
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: real-clifford-modules-ko-and-abs-orientations
dependency_level: 9
---

## Statement

Assume AC and let $V\to X$ be a given Spin Euclidean bundle over a finite CW
complex, of positive rank $8m$ or $8m+4$. Let $\Sigma$ be the associated
irreducible **ungraded** real $C(V)$-module bundle; it acquires its canonical
volume grading but arbitrary independent gradings are not part of this
category. In rank $8m$ evaluation gives an equivalence between real bundles
and ungraded $C(V)$-module bundles. In rank $8m+4$ it gives an equivalence
between right-$\mathbb H$ bundles and ungraded $C(V)$-module bundles, by

$$E\longmapsto E\otimes_{\mathbb H}\Sigma,\qquad \Lambda\longmapsto\operatorname{Hom}_{C(V)}(\Sigma,\Lambda).$$

Here $\Sigma$ has its commuting right action $s\mapsto sq$; its left action
for balancing is $q\cdot s=s\bar q$, and the Hom right action is
$(f\cdot q)(s)=f(s\bar q)$. Evaluation $f\otimes s\mapsto f(s)$ is an
isomorphism. The equivalences are natural, additive and induce
$KO^0(X)\cong K_{C(V)}(X)$ and $KSp^0(X)\cong K_{C(V)}(X)$ respectively.

## Facts & Assumptions

**Given:** The bundle, Spin lift, AC and the indicated *ungraded* categories.

[F1] The negative-square Clifford classification gives
$C_{8m}=M_k(\mathbb R)$ and $C_{8m+4}=M_k(\mathbb H)$, with irreducible
column module $S=D^k$ ([[thm-real-complex-clifford-algebra-classification]]).

[F2] The associated spinor transition functions are left Clifford
multiplications, covering oriented orthonormal frame changes
([[def-given-spin-and-spinc-structures-and-associated-spinor-bundles]]).

[A1] AC is propagated through finite-bundle complements when these are used
([[cor-finite-cw-real-vector-bundle-has-orthogonal-complement-under-ac]]).



**Proof technique:** explicit symbols and finite-dimensional bundle constructions.

## Proof

**Proof technique:** direct construction.

1.1 Write $A=M_k(D)$ and $S=D^k$ as a right $D$-space. Any real-linear endomorphism commuting with all matrix units has the same real-linear map $t:D\to D$ in every coordinate. Commuting also with left multiplication by every quaternion gives $t(a)=a\,t(1)$, so it is right multiplication $R_q$. In the real case this is just a real scalar. Composition satisfies $R_qR_r=R_{rq}$, so the commutant is $D^{\mathrm{op}}$. For $D=\mathbb H$ the map $q\mapsto R_{\bar q}$ is an additive, real-linear ring isomorphism $\mathbb H\to D^{\mathrm{op}}$. Conjugation, rather than inversion on arbitrary nonzero quaternions, is essential here. [F1, algebra]


2.1 For a left $A$-module $L$, the matrix idempotents split $L=\bigoplus_i e_{ii}L$. The maps $e_{i1}$ identify the summands with $e_{11}L$, a left $D$-space, so choosing a $D$-basis identifies $L$ with $S^{\oplus t}$. For $D=\mathbb H$, the proposed Hom action is additive in both variables, has unit, and satisfies $((f\cdot q)\cdot r)(s)=f(s\bar r\bar q)=f(s\overline{qr})$. The left action on $S$ satisfies $q\cdot(r\cdot s)=s\bar r\bar q=(qr)\cdot s$. Consequently evaluation is balanced, since $(f\cdot q)(s)=f(s\bar q)=f(q\cdot s)$. [step 1.1, algebra]


3.1 First take $L=S$. Its Hom is the commutant, and its right-$\mathbb H$ coordinate is $R_a\mapsto\bar a$, because $(R_a\cdot q)=R_{\bar q a}$ and $\overline{\bar q a}=\bar a q$. Under this coordinate evaluation is $\mathbb H\otimes_{\mathbb H}S\to S$, $h\otimes s\mapsto s\bar h$, the tensor-unit isomorphism for the left action just defined. For $L=S^{\oplus t}$ take its direct sum to obtain $\operatorname{Hom}_A(S,L)\otimes_{\mathbb H}S\cong L$. For $D=\mathbb R$ the identical argument uses ordinary scalar multiplication. For a right-$\mathbb H$ space $E$, the inverse identification is $E\to\operatorname{Hom}_A(S,E\otimes_{\mathbb H}S)$, $e\mapsto(s\mapsto e\otimes s)$; it is right-linear by the balancing identity and bijective after taking any finite basis of $E$. No dimension-only surjectivity assertion is needed. [step 1.1, step 2.1, algebra]


4.1 In a Spin frame, all these constructions have the fixed matrix form of step 1.1, step 2.1 and step 3.1. The right-$D$ action on the spinor commutes with every left Clifford multiplication, so it is preserved by the spinor transition functions in [F2]. Hom is a vector subbundle of the ordinary Hom bundle: locally it is the fixed kernel of finitely many matrix intertwining equations, of constant rank because the algebra and module types are locally constant. Changes of frame transport the Hom by conjugation and transport evaluation to evaluation. Thus the fiberwise isomorphisms are continuous bundle isomorphisms, glue globally, and commute with pullback and module morphisms. [F2, step 3.1, construct, step 1.1, step 2.1]


5.1 The inverse equivalences preserve direct sums and isomorphism classes, so they identify the additive monoids of bundles and hence their Grothendieck groups without any cancellation assumption. If a stable presentation is desired, a right-$\mathbb H$ bundle embeds in a finite trivial quaternionic bundle: finite charts and a partition give the quaternionic-linear embedding, and its invariant Hermitian orthogonal complement is quaternionic. The real proof is the same. Tensoring this complement with $\Sigma$ gives a module complement in a finite sum of $\Sigma$. This proves the stable-complement compatibility as well. Arbitrary graded modules were never substituted for the ungraded category. [A1, step 4.1, algebra] ∎
