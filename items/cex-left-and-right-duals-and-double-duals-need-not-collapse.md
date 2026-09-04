---
id: cex-left-and-right-duals-and-double-duals-need-not-collapse
kind: counterexample
title: "Left and right duals, and double duals, need not collapse"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-the-double-dual-is-a-monoidal-functor]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Michael Muger, Tensor Categories: A Selective Guided Tour, p. 16"
      url: "https://arxiv.org/pdf/0804.3587"
    - title: "MathOverflow, The dual of a dual in a rigid tensor category"
      url: "https://mathoverflow.net/questions/303245/the-dual-of-a-dual-in-a-rigid-tensor-category"
---

## Statement refuted

In every rigid monoidal category, left and right duals of an object are
isomorphic and every object is isomorphic to its double dual.

## Facts & Assumptions

**Given:** The poset category $\mathbb Z$, its endofunctor category under composition, and the monotone maps $D,L,R,H$ defined in the proof.

## Counterexample

**Proof technique:** direct.

1.1 Let $\mathbb Z$ be the ordered set of integers regarded as a small category, so there is a unique morphism $m\to n$ exactly when $m\le n$. Let $D(n)=2n$, $L(n)=\lceil n/2\rceil$, $R(n)=\lfloor n/2\rfloor$, and $H(n)=2n-1$. Directly from the defining inequalities, $$L(m)\le n\iff m\le D(n),\qquad D(m)\le n\iff m\le R(n),\qquad H(m)\le n\iff m\le L(n).$$ Thus $L\dashv D\dashv R$ and $H\dashv L$. [given, construct]

2.1 Let $\mathcal R$ be the full subcategory of $\operatorname{End}(\mathbb Z)$ generated under finite composition by the identity functor and all endofunctors in the bi-infinite adjoint chain obtained by repeatedly taking left and right adjoints of $D$. It is a monoidal subcategory by construction. Each generator has both adjacent adjoints in the chain, and a finite composite of functors with left and right adjoints has the corresponding reversed composites as its left and right adjoints. Those composites again belong to $\mathcal R$, and their units and counits lie in the full subcategory. Hence every object of $\mathcal R$ has both duals and $\mathcal R$ is rigid. [step 1.1, algebra]

3.1 In the endofunctor category of a poset, a natural transformation $F\Rightarrow G$ exists exactly when $F(n)\le G(n)$ for all $n$, so two endofunctors are isomorphic exactly when they are equal pointwise. Here $L(1)=1>0=R(1)$, so there is no natural transformation $L\Rightarrow R$ and therefore no isomorphism $L\cong R$. Thus the object $D$ has nonisomorphic left and right duals. [step 2.1, algebra]

4.1 If the chosen left duality on $\mathcal R$ uses left adjoints, then $D^\vee=L$ and $D^{\vee\vee}=H$. Since $H(0)=-1\ne0=D(0)$, the endofunctors $H$ and $D$ are not isomorphic. Therefore in this rigid monoidal category neither left/right duals nor double duals are forced to collapse. [step 1.1, step 3.1, step 2.1] ∎
