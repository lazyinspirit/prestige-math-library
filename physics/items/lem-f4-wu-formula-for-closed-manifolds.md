---
id: lem-f4-wu-formula-for-closed-manifolds
kind: lemma
title: "Wu formula for a closed smooth manifold"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 0
domain: mathematics
library: physics
category: string-theory
axiom_strength: "ZF + full AC, inherited from the Wu-class, Poincare-duality, and Thom suppliers."
deps:
  - def-axiom-of-choice
  - def-wu-classes-of-a-closed-manifold
  - cor-poincare-duality-gives-a-nonsingular-cup-pairing
  - lem-normal-thom-class-realizes-the-poincare-dual-of-a-submanifold
  - def-cap-duality-map-for-an-oriented-manifold
  - def-kronecker-evaluation-pairing
  - prop-cap-product-naturality-and-projection-formula
  - thm-thom-identity-for-stiefel-whitney-classes
  - thm-cohomological-kunneth-cross-product-is-a-ring-isomorphism
  - thm-cartan-formula-for-steenrod-squares
  - prop-steenrod-square-normalization-instability-and-top-square
  - def-stiefel-whitney-classes-from-the-projective-bundle-relation
  - thm-whitney-sum-formula-for-stiefel-whitney-classes
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-wu-classes-of-a-closed-manifold: mathematical-premise
  cor-poincare-duality-gives-a-nonsingular-cup-pairing: mathematical-premise
  lem-normal-thom-class-realizes-the-poincare-dual-of-a-submanifold: mathematical-premise
  def-cap-duality-map-for-an-oriented-manifold: mathematical-premise
  def-kronecker-evaluation-pairing: mathematical-premise
  prop-cap-product-naturality-and-projection-formula: mathematical-premise
  thm-thom-identity-for-stiefel-whitney-classes: mathematical-premise
  thm-cohomological-kunneth-cross-product-is-a-ring-isomorphism: mathematical-premise
  thm-cartan-formula-for-steenrod-squares: mathematical-premise
  prop-steenrod-square-normalization-instability-and-top-square: mathematical-premise
  def-stiefel-whitney-classes-from-the-projective-bundle-relation: mathematical-premise
  thm-whitney-sum-formula-for-stiefel-whitney-classes: mathematical-premise
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "John W. Milnor and James D. Stasheff, Characteristic Classes"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf"
      locator: "§11.6, Lemma 11.13 and Theorem 11.14 (Wu), printed pp. 131–133; diagonal Thom class, dual-basis proof, and total identity."
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Assume full AC. Let $M$ be a connected compact smooth $n$-manifold without boundary. Let $v_k(M)$ be the Wu classes defined by the mod-two Poincare pairing and let $w_i(TM)$ be the Stiefel–Whitney classes of the real tangent bundle. For the total classes $v=\sum_{k=0}^n v_k$ and $w=\sum_{i=0}^n w_i$, with $Sq=\sum_{j\ge0}Sq^j$, the identity is
$$w=Sq(v)\quad\text{in }H^*(M;\mathbb F_2).$$

## Statement references

[[def-wu-classes-of-a-closed-manifold]]

[[thm-thom-identity-for-stiefel-whitney-classes]]

## Facts & Assumptions

**Given:** Full AC and a connected closed smooth $n$-manifold $M$, with its canonical mod-two fundamental class $[M]_2$.

[A1] Full AC is [[def-axiom-of-choice]], as inherited from the Wu-class and Poincare-duality suppliers.

[F1] The Wu classes are characterized by $\langle v_k x,[M]_2\rangle=\langle Sq^k x,[M]_2\rangle$ for $x\in H^{n-k}(M;\mathbb F_2)$; the mod-two cup pairing is nonsingular ([[def-wu-classes-of-a-closed-manifold]], [[cor-poincare-duality-gives-a-nonsingular-cup-pairing]]).

[F2] The canonical mod-two orientation makes $M$ an $\mathbb F_2$-oriented closed manifold. The perfect mod-two Poincare pairing supplied by [[cor-poincare-duality-gives-a-nonsingular-cup-pairing]] also gives finite-dimensional cohomology groups, so homogeneous bases and their Poincare-dual bases exist.

[F3] The diagonal $\Delta:M\hookrightarrow M\times M$ is a closed smooth embedding whose normal bundle is canonically isomorphic to $TM$ by $(u,v)\mapsto v-u$. Its mod-two Poincare-dual class $u_\Delta\in H^n(M\times M;\mathbb F_2)$ is the image of its normal Thom class and satisfies $u_\Delta\cap[M\times M]_2=\Delta_*[M]_2$ ([[lem-normal-thom-class-realizes-the-poincare-dual-of-a-submanifold]]). The Kronecker pairing is compatible with cap-duality, cap-cup products, and pushforward under $\Delta$ ([[def-cap-duality-map-for-an-oriented-manifold]], [[def-kronecker-evaluation-pairing]], [[prop-cap-product-naturality-and-projection-formula]]).

[F4] The cohomological Künneth theorem makes the external product a graded-ring isomorphism when $R$ is a PID and one factor has finite-free homology in every degree ([[thm-cohomological-kunneth-cross-product-is-a-ring-isomorphism]]). Here $R=\mathbb F_2$ is a field, hence a PID, and the finite-generation part of the Poincaré-duality supplier's proof gives finite-dimensional $H_j(M;\mathbb F_2)$ for every $j$; finite-dimensional vector spaces are finite free, so the Künneth hypotheses hold. For external products the evaluation formula is $\langle x\times y,[M\times M]_2\rangle=\langle x,[M]_2\rangle\langle y,[M]_2\rangle$: it follows by evaluating external cochains on the singular chain cross product representing $[M]_2\times[M]_2$, which is the local mod-two fundamental class of $M\times M$. Thus the product cup pairing pairs decomposable classes by the product of the pairings on the factors, with signs trivial over $\mathbb F_2$ ([[cor-poincare-duality-gives-a-nonsingular-cup-pairing]]).

[F5] The Thom identity gives $Sq^i(u_\Delta)=w_i(\nu_\Delta)\smile u_\Delta$, and the Whitney formula identifies the characteristic classes of the diagonal normal bundle with those of $TM$ ([[thm-thom-identity-for-stiefel-whitney-classes]], [[thm-whitney-sum-formula-for-stiefel-whitney-classes]], [[def-stiefel-whitney-classes-from-the-projective-bundle-relation]]).

[F6] Steenrod squares are natural and satisfy the Cartan formula for external products; $Sq^0$ is the identity and positive squares of the degree-zero unit vanish ([[thm-cartan-formula-for-steenrod-squares]], [[prop-steenrod-square-normalization-instability-and-top-square]]).



## Proof

**Proof technique:** identify the diagonal class by dual bases, then apply the Thom identity and Cartan formula.

1.1 If $M=\varnothing$, its cohomology groups are zero, so $w=Sq(v)=0$ and the identity holds. Henceforth suppose $M$ is nonempty. For each $d$, choose a basis $\{b_{d,r}\}_r$ of $H^d(M;\mathbb F_2)$ and its Poincare-dual basis $\{b^{d,r}\}_r\subseteq H^{n-d}(M;\mathbb F_2)$, so $\langle b^{d,r}\smile b_{e,s},[M]_2\rangle=\delta_{de}\delta_{rs}$. The finite-dimensionality in [F2] makes these finite bases, and nonsingularity gives the dual bases. [A1, F1, F2, choose]

2.1 The Künneth isomorphism in [F4] and diagonal identity in [F3] give $$u_\Delta=\sum_{d,r} b^{d,r}\times b_{d,r}.$$ Indeed, for any decomposable $a\times b$ of complementary degree, the evaluation formula in [F4] shows that pairing the right side with it gives $\langle a\smile b,[M]_2\rangle$: the dual-basis identities contract the two finite sums. This equals $\langle u_\Delta\smile(a\times b),[M\times M]_2\rangle$ because $u_\Delta\cap[M\times M]_2=\Delta_*[M]_2$ and cap-product naturality gives $\Delta^*(a\times b)=a\smile b$. Decomposables span by [F4], and the product pairing is nonsingular by [F1]. [F1, F3, F4, step 1.1, algebra]

3.1 Define the linear map $\lambda:H^*(M\times M;\mathbb F_2)\to H^*(M;\mathbb F_2)$ by $\lambda(a\times b)=\langle b,[M]_2\rangle a$ and linear extension through the Kunneth isomorphism. This is well-defined by the tensor-product description in [F4]. Applying it to step 2.1 retains only $d=n$; connectedness makes $H^n(M;\mathbb F_2)=\mathbb F_2$ with its generator evaluating to $1$, whose dual in $H^0$ is $1$. Thus $\lambda(u_\Delta)=1$. Also $\lambda((c\times1)z)=c\smile\lambda(z)$ for every $c\in H^*(M;\mathbb F_2)$ and $z\in H^*(M\times M;\mathbb F_2)$, first on decomposables and then by linearity. [F2, F4, step 2.1, algebra]

4.1 The normal bundle identification in [F3] and Thom identity [F5] give $Sq^i(u_\Delta)=(w_i(TM)\times1)\smile u_\Delta$. Applying $\lambda$ and using step 3.1 yields $\lambda(Sq^i(u_\Delta))=w_i(TM)$. Summing the finite nonzero components gives $\lambda(Sq(u_\Delta))=w(TM)$. [F3, F5, step 3.1, algebra]

4.2 By Cartan and naturality in [F6], $Sq(u_\Delta)=\sum_{d,r} Sq(b^{d,r})\times Sq(b_{d,r})$. Therefore step 3.1 gives $$\lambda(Sq(u_\Delta))=\sum_{d,r}\langle Sq(b_{d,r}),[M]_2\rangle\,Sq(b^{d,r}).$$ The dual-basis expansion and the defining Wu pairing in [F1] say $v=\sum_{d,r}\langle Sq(b_{d,r}),[M]_2\rangle b^{d,r}$: for each homogeneous degree, pairing this expression with any basis element of complementary degree recovers exactly the defining Steenrod-square functional. Hence the preceding sum is $Sq(v)$. [F1, F4, F6, step 1.1, step 3.1, algebra]

5.1 Steps 4.1 and 4.2 identify the same class $\lambda(Sq(u_\Delta))$ as $w(TM)$ and $Sq(v)$, respectively. Thus $w(TM)=Sq(v)$ in mod-two cohomology. The empty case was settled in step 1.1, and connectedness excludes more than one nonempty component; degrees above $n$ vanish by the rank convention, all sums are finite, and signs in the diagonal and product formulas disappear over $\mathbb F_2$. This proves the asserted identity without an orientation choice. [F1, F3, F5, F6, step 4.1, step 4.2] ∎
