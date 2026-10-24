---
id: thm-connected-graded-module-coalgebra-with-injective-unit-orbit-is-free
kind: theorem
title: "A connected graded module coalgebra with injective unit orbit is free"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps:
  - def-axiom-of-choice
  - def-quotient-vector-space-and-canonical-projection
  - prop-quotient-vector-space-operations-and-projection
  - cor-every-vector-space-has-a-basis
  - thm-universal-property-of-module-tensor-products
  - thm-tensor-products-commute-with-arbitrary-direct-sums
  - thm-tensor-product-basis-from-bases
  - thm-unit-isomorphisms-for-module-tensor-products
  - def-free-module-on-a-set-and-standard-basis
  - thm-universal-property-of-free-modules
dependency_level: 0
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Tom Weston, An Introduction to Cobordism Theory"
      url: "https://math.stanford.edu/~ralph/morsecourse/cobordismintro%20.pdf"
      locator: "Section 6, Lemma 6.1 and Proposition 6.2 with complete proof, printed pp.11–13; homogeneous-section and degree-zero corrections are proved locally."
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume AC and fix a field $k$. Let $A=\bigoplus_{i\ge0}A_i$ be a unital associative graded $k$-algebra with $A_0=k1_A$, equipped with a degree-preserving coassociative counital coproduct $\Delta_A$ such that $\Delta_A(1_A)=1_A\otimes1_A$ and $\Delta_A,\varepsilon_A$ are algebra homomorphisms for the Koszul multiplication $(a\otimes b)(c\otimes d)=(-1)^{|b||c|}ac\otimes bd$. Let $M=\bigoplus_{j\ge0}M_j$ be a coaugmented coassociative counital graded $k$-coalgebra with $M_0=ku$, $\varepsilon_M(u)=1$, and $\Delta_M(u)=u\otimes u$. Supply a $k$-bilinear unital left $A$-action satisfying $(ab)m=a(bm)$, $(\lambda1_A)m=\lambda m$, and $A_iM_j\subseteq M_{i+j}$. Give $M\otimes M$ the diagonal action $a(v\otimes w)=\sum(-1)^{|a_2||v|}(a_1v)\otimes(a_2w)$ for $\Delta_Aa=\sum a_1\otimes a_2$, and assume $\Delta_M(am)=a\Delta_M(m)$. If $\nu:A\to M$, $a\mapsto au$, is injective, set $A^+=\bigoplus_{i>0}A_i$ and $Q=M/A^+M$. Then $Q$ is nonnegatively graded with $Q_0=k\pi(u)$, and every graded $k$-linear section $f:Q\to M$ of $\pi$ induces a graded left $A$-module isomorphism $\Phi:A\otimes_kQ\to M$, $a\otimes q\mapsto af(q)$, with $A$ acting on the first tensor factor. Such a section exists under AC. Any homogeneous $k$-basis of $Q$ lifts under $f$ to a homogeneous free $A$-basis of $M$. No commutativity, antipode, or finite-type hypothesis is imposed; supplying the homogeneous basis and lifts removes additional choice from the proof.

## Facts & Assumptions

**Given:** AC; a field $k$; a connected nonnegatively graded unital associative $k$-algebra $A=\bigoplus_{i\ge0}A_i$ with $A_0=k1_A$ and a coassociative counital degree-preserving coproduct $\Delta_A$ that is an algebra homomorphism for the Koszul multiplication; a connected coaugmented coassociative counital graded coalgebra $M=\bigoplus_{j\ge0}M_j$ with $M_0=ku$, $\varepsilon_M(u)=1$, $\Delta_M(u)=u\otimes u$; a unital graded left $A$-action on $M$ with $A_iM_j\subseteq M_{i+j}$ and $\Delta_M(am)=a\Delta_M(m)$ for the diagonal action; and an injective degree-preserving orbit map $\nu:A\to M$, $\nu(a)=au$.

[L2] The quotient $Q=M/A^+M$ has a surjective linear projection $\pi$ with kernel $A^+M$, and quotient vector-space operations are well defined ([[def-quotient-vector-space-and-canonical-projection]], [[prop-quotient-vector-space-operations-and-projection]]).

[L3] Under AC every vector space has a basis, and every independent set extends to a basis ([[cor-every-vector-space-has-a-basis]], [[def-axiom-of-choice]]).

[L4] A balanced bilinear formula induces a well-defined homomorphism on the module tensor product ([[thm-universal-property-of-module-tensor-products]]).

[L5] Tensor products commute with direct sums, admit bases built from bases of the factors, and satisfy the unit isomorphisms $k\otimes_kX\cong X\cong X\otimes_kk$ ([[thm-tensor-products-commute-with-arbitrary-direct-sums]], [[thm-tensor-product-basis-from-bases]], [[thm-unit-isomorphisms-for-module-tensor-products]]).

[L6] A free module on a set has the standard basis and the universal property of free modules ([[def-free-module-on-a-set-and-standard-basis]], [[thm-universal-property-of-free-modules]]).

## Proof

**Proof technique:** direct.

1.1 Grading and the counit give, for homogeneous m∈M_d with d>0, Δ_M(m)=u⊗m+m⊗u+R, where R lies in ⊕_{0<i<d}M_i⊗M_{d-i}. Indeed the degree-(0,d) component is u⊗m by (ε_M⊗id)Δ_M=id, since ε_M vanishes on positive degrees; the other counit identity gives the degree-(d,0) component. Tensor bidegrees are direct by [L5]. In degree zero, Δ_M(λu)=λu⊗u, as already justified. The same argument gives the two endpoints for Δ_A(a) in positive degree. [given, L5]

1.2 A⁺M is the span of a·m with a of positive degree. It is graded: decomposing a,m into homogeneous components expresses every element as a finite sum of homogeneous such products. It is an A-submodule, since b(a·m)=(ba)·m and each nonzero homogeneous product ba has positive degree. It has no degree-zero component. By [L2], Q is the direct sum of Q_d=M_d/(A⁺M)_d, π is graded and surjective, its kernel is A⁺M, and Q_0=M_0. Moreover π(a·m)=ε_A(a)π(m) for every a,m: positive-degree a is killed, and degree-zero a acts as a scalar. [given, L2]

1.3 Choose a k-basis of each Q_d and lift each basis vector to M_d; this is allowed by [L3] and AC. In degree zero use π(u), with lift u. Extend the lifts linearly on each degree and then on the direct sum to obtain a graded section f. Conversely any graded section has f(π(u))=u, because π:M_0→Q_0 is an isomorphism. The formula for Φ is balanced and bilinear over k, so [L4] makes it a well-defined map. It is graded, and A-linearity follows from (ba)f(q)=b(af(q)). [given, L2, L3, L4]

2.1 We prove surjectivity by induction on d≥0. In degree zero Φ is the scalar isomorphism k⊗k→k·u. Suppose every M_e with e<d is in its image, and take m∈M_d. The vector m-f(π(m)) lies in (A⁺M)_d, so it is a finite sum Σ a_t m_t with homogeneous a_t of positive degree and m_t of degree d-|a_t|<d. Such an expression is obtained by projecting any finite expression in A⁺M to degree d. By induction choose y_t∈A⊗Q with Φ(y_t)=m_t. Then m=Φ(1_A⊗π(m)+Σ a_t y_t). Thus Φ is surjective in each degree, and finite degree support proves surjectivity on M. [step 1.3, L2, given]

2.2 Define T=(id_M⊗π)Δ_M:M→M⊗Q. Give M⊗Q the A-action on the first factor only. Then T is A-linear. Indeed apply id⊗π to the diagonal compatibility formula. Every summand with a₂ of positive degree vanishes by step 1.2. The surviving terms have a₂ in degree zero, so their Koszul signs are 1; the counit identity (id⊗ε_A)Δ_A(a)=a combines these terms to give T(a·m)=a·T(m). This calculation also treats a of degree zero and all inhomogeneous inputs by linearity. [step 1.2, L4, given]

3.1 For homogeneous q∈Q_d, the component of T(f(q)) with second degree d is exactly u⊗q. Every other component has second degree strictly less than d, by step 1.1. When d=0 there are no other components. Therefore TΦ(a⊗q)=ν(a)⊗q + terms of second degree less than d. This statement concerns second-factor degree, not total degree; multiplication on the first factor preserves that comparison. [step 1.1, step 1.3, step 2.2]

4.1 Suppose z∈ker Φ. By [L5], using a homogeneous k-basis (q_j) of Q, write z uniquely as a finite sum Σ_j a_j⊗q_j with a_j∈A. If z≠0, take the largest degree d of a q_j with a_j≠0. Since TΦ(z)=0, its component of second degree d gives Σ_{|q_j|=d} ν(a_j)⊗q_j=0. The q_j in this equation are distinct basis vectors. Their coordinate functionals, tensored with id_M via [L4], give ν(a_j)=0 individually. Injectivity of ν gives a_j=0, contradicting the definition of d. Hence z=0 and Φ is injective. This finite maximum argument requires no finite-dimensionality of Q or its degree pieces. [step 3.1, L3, L4, L5]

5.1 By steps 2.1 and 4.1, Φ is a bijective graded A-linear map. Its inverse is A-linear and graded by uniqueness of preimages. Every element of A⊗Q has a unique finite expression Σ a_j⊗q_j, by [L5]; the first-factor action turns this into a free A-module with basis 1_A⊗q_j, in the sense of [L6]. Transporting that basis by Φ proves the theorem, with each generator in degree |q_j|. AC was used only for the homogeneous basis and its lifts; no further infinite selection occurs in the degree induction or finite-maximum argument. [step 1.3, step 2.1, step 4.1, L5, L6] ∎
