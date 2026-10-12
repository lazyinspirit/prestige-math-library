---
id: lem-cm-cross-product-triple-identity
kind: lemma
title: "The vector triple product identity $u\\times(v\\times w)=\\langle u,w\\rangle v-\\langle u,v\\rangle w$"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 0
deps: [def-cross-product-in-r3, def-euclidean-inner-product, lem-finite-sum-laws]
dependency_roles:
  def-cross-product-in-r3: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  lem-finite-sum-laws: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "David Tong, Classical Dynamics (University of Cambridge), §1.1, printed pp. 1-2: the vector triple product and the orthonormality identities for the cross product"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "Richard Fitzpatrick, Newtonian Dynamics (University of Texas at Austin), §2.5 and Appendix A: vector identities for the cross product, including the triple product rule"
      url: "https://farside.ph.utexas.edu/teaching/336k/Newtonhtml/node12.html"
---

## Statement

For all $u,v,w\in\mathbb R^3$,
$$u\times(v\times w)=\langle u,w\rangle\,v-\langle u,v\rangle\,w .$$

## Facts & Assumptions

**Given:** Vectors $u,v,w\in\mathbb R^3$ with coordinates $u=(u_1,u_2,u_3)$, $v=(v_1,v_2,v_3)$, $w=(w_1,w_2,w_3)$.

[L1] The cross product is defined coordinatewise by $u\times v=(u_2v_3-u_3v_2,\,u_3v_1-u_1v_3,\,u_1v_2-u_2v_1)$ ([[def-cross-product-in-r3]]).

[L2] The Euclidean inner product is $\langle u,w\rangle=\sum_{k=1}^3u_kw_k$ ([[def-euclidean-inner-product]]).

[L3] Finite sums may be expanded, reordered and combined ([[lem-finite-sum-laws]]).

## Proof

**Proof technique:** direct.

1.1 First component. By [L1], $$(u\times(v\times w))_1=u_2(v\times w)_3-u_3(v\times w)_2=u_2(v_1w_2-v_2w_1)-u_3(v_3w_1-v_1w_3),$$ which expands to $v_1(u_2w_2+u_3w_3)-w_1(u_2v_2+u_3v_3)$; since $u_2w_2+u_3w_3=\langle u,w\rangle-u_1w_1$ and $u_2v_2+u_3v_3=\langle u,v\rangle-u_1v_1$ by [L2], this equals $v_1\bigl(\langle u,w\rangle-u_1w_1\bigr)-w_1\bigl(\langle u,v\rangle-u_1v_1\bigr)=\bigl(\langle u,w\rangle v-\langle u,v\rangle w\bigr)_1$, which is the $1$-component of the asserted identity. [L1, L2, L3, algebra]

2.1 Second and third components. The same computation, with the coordinate labels cyclically relabelled and the components of the cross product read off in the corresponding cyclic order, gives $(u\times(v\times w))_2=\bigl(\langle u,w\rangle v-\langle u,v\rangle w\bigr)_2$ and $(u\times(v\times w))_3=\bigl(\langle u,w\rangle v-\langle u,v\rangle w\bigr)_3$: each is the same finite expansion of [L1] as in step 1.1 with $(1,2,3)$ cyclically replaced, and [L2], [L3] are unaffected by the relabelling. [L1, L2, L3, algebra]

3.1 Two vectors of $\mathbb R^3$ with equal components are equal, so steps 1.1 and 2.1 prove the identity in all three coordinates. [step 1.1, step 2.1, L1, algebra] ∎
