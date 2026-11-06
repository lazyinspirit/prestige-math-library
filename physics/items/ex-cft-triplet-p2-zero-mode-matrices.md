---
id: ex-cft-triplet-p2-zero-mode-matrices
kind: example
title: A two-dimensional matrix model for the p equals two endpoint conventions
dependency_level: 0
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
page: cft-triplet-strong-generation-and-endpoint-modules-examples
physical_scope: Pure mathematics; no physical premises or physical claim.
axiom_base: "ZF"
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
deps: []
dependency_roles: {}
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: Adamović and Milas, On the triplet vertex algebra W(p)
      url: https://arxiv.org/pdf/0707.1857v2
      locator: Section 1, Propositions 3.9–3.10, Theorem 3.11; these motivate the F,H,E and sl2 top-action conventions, while this finite p=2 matrix example is verified self-contained here.
---

## Example

Let $U=\mathbb Ca\oplus\mathbb Cb$. Define complex-linear endomorphisms by
$$F(a)=0,\quad F(b)=4a,\qquad E(a)=-8b,\quad E(b)=0,\qquad H(a)=-4a,\quad H(b)=4b.$$
Put $e=-E/8$, $f=F/4$ and $h=H/4$, and use the commutator $[A,B]=AB-BA$. Then
$$[e,f]=h,\qquad [h,e]=2e,\qquad [h,f]=-2f.$$
More explicitly, let $\mathfrak{sl}_2(\mathbb C)$ mean the trace-zero $2\times2$ complex matrices with commutator bracket, with basis $e_*=(\begin{smallmatrix}0&1\\0&0\end{smallmatrix})$, $f_*=(\begin{smallmatrix}0&0\\1&0\end{smallmatrix})$ and $h_*=(\begin{smallmatrix}1&0\\0&-1\end{smallmatrix})$. The linear map sending this basis to $e,f,h$ is a Lie algebra representation on $U$. It is irreducible: its only invariant subspaces are $0$ and $U$. Every nonzero vector of $U$ is cyclic under these operators, and also under $E,F,H$, where cyclic means that the span of all finite operator words applied to that vector equals $U$.

## Example references

[Adamović–Milas, triplet generator and endpoint conventions](https://arxiv.org/pdf/0707.1857v2)

## Facts & Assumptions

**Given:** The two-dimensional vector space and the displayed linear maps. An invariant subspace is a complex-linear subspace preserved by every representing operator; irreducibility means that no nonzero proper invariant subspace exists. Finite operator words include the empty word, which acts as the identity.

[A1] The vector space $U$, the six displayed basis actions, the commutator convention, and the definition of cyclicity in the Example are the complete assumptions.

## Verification

1.1 The normalized operators satisfy $e(a)=b$, $e(b)=0$, $f(a)=0$, $f(b)=a$, $h(a)=-a$, $h(b)=b$. Hence $[e,f](a)=-a=h(a)$ and $[e,f](b)=b=h(b)$. Also $[h,e](a)=2b=2e(a)$ and $[h,e](b)=0$, while $[h,f](a)=0$ and $[h,f](b)=-2a=-2f(b)$. Equality on the basis proves the three operator identities. Direct matrix multiplication gives the same three brackets for $e_*,f_*,h_*$. The bracket is bilinear and alternating, so checking all three distinct basis pairs proves that the stipulated linear map preserves every bracket. Thus it is a representation of the explicitly defined matrix Lie algebra. [given, A1, algebra]

2.1 Let $R\subset U$ be a nonzero invariant subspace and choose $u=xa+yb\in R$, $u\ne0$. Since $R$ is invariant under $h$ and the identity, it contains $(I-h)u/2=xa$ and $(I+h)u/2=yb$. At least one is nonzero. If $a\in R$, then $b=e(a)\in R$; if $b\in R$, then $a=f(b)\in R$. In either case $R=U$, proving irreducibility. This argument uses the two distinct diagonal eigenvalues and the explicitly nonzero connecting maps. [given, step 1.1, algebra]

3.1 For any nonzero $u\in U$, let $C(u)$ be the span of all finite words in $e,f,h$ applied to $u$. It is a nonzero invariant subspace by prepending any of the three operators to each word. Step 2.1 gives $C(u)=U$. Since $E=-8e$, $F=4f$ and $H=4h$, multiplication by these nonzero scalars in either direction shows that the finite-word spans for the two operator triples coincide. Every nonzero vector is therefore cyclic for both triples. [given, step 1.1, step 2.1, algebra] ∎

## Remarks

The normalization is motivated by the $p=2$ specialization of the endpoint top matrices in the triplet construction: $\binom{3p-2}{2p-1}=4$. The example itself asserts only the finite-dimensional matrix representation proved above. These matrices alone supply no state fields, module Jacobi identity, all-grade lattice module, or identification with an actual triplet endpoint.
