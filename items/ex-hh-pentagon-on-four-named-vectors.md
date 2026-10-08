---
id: ex-hh-pentagon-on-four-named-vectors
kind: example
title: "The pentagon on four named vectors in $k^2$"
status: published
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 2
deps: [def-hh-scalar-and-tensor-conventions, lem-hh-tensor-coherence-on-elementary-tensors, thm-symmetry-and-associativity-over-a-commutative-ring]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Keith Conrad, Tensor products (University of Connecticut expository notes, 60 pp.)"
      url: "https://kconrad.math.uconn.edu/blurbs/linmultialg/tensorprod.pdf"
      locator: "Theorem 5.2, printed p. 24: the associativity isomorphism $(M\\otimes N)\\otimes P\\cong M\\otimes(N\\otimes P)$ on elementary tensors"
verification:
  audited: "2026-10-08"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Example

Let $e_1,e_2$ be the standard basis of $k^2$ and put $l=e_1$, $m=e_1+e_2$, $n=2e_2$, $x=e_1-e_2$. Then in $k^2\otimes k^2\otimes k^2\otimes k^2$ the pentagon of [[lem-hh-tensor-coherence-on-elementary-tensors]] holds on $((l\otimes m)\otimes n)\otimes x$: the two composites $(\mathrm{id}\otimes\alpha)\circ\alpha\circ(\alpha\otimes\mathrm{id})$ and $\alpha\circ\alpha$ both send that element to $l\otimes(m\otimes(n\otimes x))$, i.e. to $e_1\otimes((e_1+e_2)\otimes(2e_2\otimes(e_1-e_2)))$.

## Facts & Assumptions

**Given:** A field $k$, the standard basis $e_1,e_2$ of $k^2$, and $l=e_1$, $m=e_1+e_2$, $n=2e_2$, $x=e_1-e_2$ in $k^2$.

[F1] The tensor product conventions: iterated tensor powers are left-associated, every element is a finite sum of elementary tensors, and the elementary tensor is bilinear, so $l\otimes m=l\otimes e_1+l\otimes e_2$ and scalar factors may be moved across the tensor sign ([[def-hh-scalar-and-tensor-conventions]]).

[F2] The associator is the unique linear isomorphism with $\alpha((u\otimes v)\otimes w)=u\otimes(v\otimes w)$ on elementary tensors ([[thm-symmetry-and-associativity-over-a-commutative-ring]]).

[F3] The pentagon identity $(\mathrm{id}\otimes\alpha)\circ\alpha\circ(\alpha\otimes\mathrm{id})=\alpha\circ\alpha$ holds as an equality of linear maps on $k^2\otimes k^2\otimes k^2\otimes k^2$ ([[lem-hh-tensor-coherence-on-elementary-tensors]]).

## Verification

**Proof technique:** direct.

1.1 Expand the first factor by bilinearity [F1]: $(l\otimes m)\otimes n=(l\otimes e_1)\otimes n+(l\otimes e_2)\otimes n$, and $n=2e_2$ may be written $n=2\cdot e_2$; since $(\ \cdot\ )\otimes x$ and both composites are linear, it suffices by [F3] to evaluate the two pentagon composites on the elementary tensors $((l\otimes e_i)\otimes n)\otimes x$, $i=1,2$, where $l,e_i,n,x\in k^2$. [given, F1, F3, algebra]

1.2 On such an elementary tensor the right composite $\alpha\circ\alpha=\alpha_{L,M,N\otimes X}\circ\alpha_{L\otimes M,N,X}$ gives first $(l\otimes e_i)\otimes(n\otimes x)$ and then $l\otimes(e_i\otimes(n\otimes x))$, and the left composite $(\mathrm{id}\otimes\alpha)\circ\alpha\circ(\alpha\otimes\mathrm{id})$ gives first $(l\otimes(e_i\otimes n))\otimes x$, then $l\otimes((e_i\otimes n)\otimes x)$ and finally $l\otimes(e_i\otimes(n\otimes x))$, all by the elementary-tensor formula of [F2]; the two values agree. [given, F1, F2, algebra]

2.1 By linearity of the two composites in the first factor (step 1.1) and their agreement on the two elementary summands (step 1.2), both composites send $((l\otimes m)\otimes n)\otimes x$ to $l\otimes(m\otimes(n\otimes x))$, which is $e_1\otimes((e_1+e_2)\otimes(2e_2\otimes(e_1-e_2)))$ by the definitions of $l,m,n,x$; this is the pentagon identity of [F3] checked on the four named vectors. [step 1.1, step 1.2, F1, F3] ∎
