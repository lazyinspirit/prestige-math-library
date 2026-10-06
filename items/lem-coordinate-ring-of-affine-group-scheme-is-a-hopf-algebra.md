---
id: lem-coordinate-ring-of-affine-group-scheme-is-a-hopf-algebra
kind: lemma
title: The coordinate ring of an affine group scheme is a commutative Hopf algebra
status: published
origin: pipeline
pipeline_run: "frontier-40-geometry-braids-rep-27"
dependency_level: 2
deps:
  - def-affine-scheme
  - def-commutative-hopf-algebra-over-a-field
  - def-coordinate-hopf-algebra-of-affine-group-scheme
  - def-group-scheme-over-a-field
  - def-morphism-and-closed-subgroup-scheme
  - thm-affine-fibre-product-tensor-ring
  - thm-affine-scheme-ring-anti-equivalence
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: J. S. Milne, Algebraic Groups (corrected 2022 printing, Cambridge University Press)
      url: https://www.jmilne.org/math/Books/iAG2022.pdf
      locator: "Ch. 3 §3(b)-(c), diagrams (17)-(18) and Propositions 3.1 and 3.6, printed pp. 64-67 (PDF 75-78)."
    - title: J. Swanson (notes), J. Pevtsova (lecturer), Algebraic Groups Lecture Notes, University of Washington, Fall 2014
      url: https://www.jpswanson.org/notes/alggroups.pdf
      locator: "September 29th and October 1st lectures, proof sketch of Theorem 19 and Remarks 28 and 30, printed pp. 7-10."
proof_strategy: direct
---

## Statement

Let $k$ be a field, let $G$ be an affine group scheme of finite type over $k$, and let $(A,\Delta,\varepsilon,S)$ be its coordinate ring with the structure maps of [[def-coordinate-hopf-algebra-of-affine-group-scheme]]. Then $(A,\Delta,\varepsilon,S)$ is a commutative Hopf algebra over $k$ in the sense of [[def-commutative-hopf-algebra-over-a-field]]. Moreover, for every morphism $f\colon G\to H$ of affine group schemes ([[def-morphism-and-closed-subgroup-scheme]]) the induced map $\mathcal O(f)\colon\mathcal O(H)\to\mathcal O(G)$ is a morphism of commutative Hopf algebras. No choice principle is used.

## Facts & Assumptions

[F1] The group-object identities of [[def-group-scheme-over-a-field]] read $m\circ(m\times\operatorname{id})=m\circ(\operatorname{id}\times m)$ on $G\times_kG\times_kG$, $m\circ(e\times\operatorname{id})=\operatorname{id}=m\circ(\operatorname{id}\times e)$ under the canonical identifications, and $m\circ(i,\operatorname{id})=e\circ p=m\circ(\operatorname{id},i)$, where $p\colon G\to\operatorname{Spec}k$ is the structure morphism. A morphism of group schemes satisfies $f\circ m_G=m_H\circ(f\times f)$, $f\circ e_G=e_H$ and $i_H\circ f=f\circ i_G$.

[F2] The global-sections functor gives a contravariant equivalence between affine $k$-schemes and commutative $k$-algebras, with $\operatorname{Spec}(B\otimes_kC)\cong\operatorname{Spec}B\times_k\operatorname{Spec}C$, so $\mathcal O(G\times_kG)=A\otimes_kA$ and $\mathcal O(G\times_kG\times_kG)=A\otimes_kA\otimes_kA$. ([[thm-affine-scheme-ring-anti-equivalence]], [[thm-affine-fibre-product-tensor-ring]], [[def-affine-scheme]])

[F3] The structure maps $\Delta=\mathcal O(m)$, $\varepsilon=\mathcal O(e)$ and $S=\mathcal O(i)$ are $k$-algebra homomorphisms, and $\mathcal O$ of a composite is the composite of the comorphisms in reverse order. ([[def-coordinate-hopf-algebra-of-affine-group-scheme]])

## Proof

**Given:** A field $k$, an affine group scheme $G$ of finite type over $k$ with coordinate ring $A=\mathcal O(G)$ and structure maps $\Delta,\varepsilon,S$, and the group identities [F1].

1.1 Under the identification $\mathcal O(G\times_kG\times_kG)=A\otimes_kA\otimes_kA$ of [F2], the comorphism of $m\times\operatorname{id}$ is $\Delta\otimes\operatorname{id}$ and that of $\operatorname{id}\times m$ is $\operatorname{id}\otimes\Delta$: the product $m\times\operatorname{id}$ is, on the level of coordinate rings, the tensor product of $\Delta$ with the identity of $A$. Hence $\mathcal O\bigl(m\circ(m\times\operatorname{id})\bigr)=(\Delta\otimes\operatorname{id})\Delta$ and $\mathcal O\bigl(m\circ(\operatorname{id}\times m)\bigr)=(\operatorname{id}\otimes\Delta)\Delta$ by [F3]. [F2, F3]

1.2 The comorphism of the structure morphism $p\colon G\to\operatorname{Spec}k$ is the unit $u_A\colon k\to A$, the comorphism of $e$ is $\varepsilon$, and the comorphism of $e\times\operatorname{id}$ is $\varepsilon\otimes\operatorname{id}$, so $\mathcal O\bigl(m\circ(e\times\operatorname{id})\bigr)=(\varepsilon\otimes\operatorname{id})\Delta$ and, with the canonical identifications $k\otimes_kA\cong A\cong A\otimes_kk$, the identity $m\circ(e\times\operatorname{id})=\operatorname{id}$ becomes $(\varepsilon\otimes\operatorname{id})\Delta=\operatorname{id}_A$; symmetrically $(\operatorname{id}\otimes\varepsilon)\Delta=\operatorname{id}_A$. Likewise $\mathcal O\bigl(m\circ(i,\operatorname{id})\bigr)=m_A(S\otimes\operatorname{id})\Delta$ and $\mathcal O(e\circ p)=u_A\varepsilon$, so the identity $m\circ(i,\operatorname{id})=e\circ p$ gives $m_A(S\otimes\operatorname{id})\Delta=u_A\varepsilon$, and symmetrically $m_A(\operatorname{id}\otimes S)\Delta=u_A\varepsilon$. [F1, F2, F3]

2.1 Since the identities of [F1] hold as identities of scheme morphisms, and $\mathcal O$ is a functor, the transposed identities of steps 1.1 and 1.2 are identities of $k$-algebra homomorphisms; together with [F3] they are exactly the coassociativity, counit and antipode axioms of [[def-commutative-hopf-algebra-over-a-field]]. Hence $(A,\Delta,\varepsilon,S)$ is a commutative Hopf algebra. [F3, step 1.1, step 1.2]

3.1 For a morphism $f\colon G\to H$ of affine group schemes, applying the contravariant functor $\mathcal O$ to the identities $f\circ m_G=m_H\circ(f\times f)$, $f\circ e_G=e_H$ and $i_H\circ f=f\circ i_G$ of [F1] gives $\Delta_G\mathcal O(f)=(\mathcal O(f)\otimes\mathcal O(f))\Delta_H$, $\varepsilon_G\mathcal O(f)=\varepsilon_H$ and $\mathcal O(f)S_H=S_G\mathcal O(f)$, where the middle identity uses $\mathcal O(f\times f)=\mathcal O(f)\otimes\mathcal O(f)$ under the product identifications of [F2]. These are exactly the three compatibility conditions for a morphism of commutative Hopf algebras, so $\mathcal O(f)$ is one. No choice principle was used: every step is functoriality of $\mathcal O$ or one of the given group identities. [F1, F2, F3] ∎ 