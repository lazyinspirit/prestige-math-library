---
id: cor-trace-is-tensor-contraction
kind: corollary
title: "Under $\\operatorname{End}_F(V)\\cong V^*\\otimes_FV$, tensor contraction is the trace"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-hom-from-a-finite-dimensional-space-as-a-tensor-product, def-trace-of-an-endomorphism, thm-universal-property-of-module-tensor-products]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "C. Dennis, Week 1 recap on tensor products"
      url: "https://math.uchicago.edu/~may/PEOPLE/DENNIS/week1a.pdf"
pipeline_run: null
---

## Statement

Let $V$ be a finite-dimensional vector space over $F$. Under the isomorphism

$$V^*\otimes_FV\longrightarrow\operatorname{End}_F(V),\qquad \phi\otimes v\longmapsto[x\mapsto\phi(x)v],$$

the contraction map $c:V^*\otimes_FV\to F$, defined by $c(\phi\otimes v)=\phi(v)$, corresponds to the trace $T\mapsto\operatorname{tr}(T)$.

## Facts & Assumptions

**Given:** A finite-dimensional $F$-vector space $V$ and the canonical Hom-tensor isomorphism with $W=V$.

[L1] The canonical isomorphism sends $\phi\otimes v$ to the rank-one endomorphism $x\mapsto\phi(x)v$ ([[thm-hom-from-a-finite-dimensional-space-as-a-tensor-product]]).

[L2] The trace of an endomorphism is the sum of the diagonal entries of its matrix in any basis, and is zero in dimension zero ([[def-trace-of-an-endomorphism]]).

[L3] A bilinear pairing induces a unique linear map from a tensor product ([[thm-universal-property-of-module-tensor-products]]).

## Proof

**Proof technique:** direct.

1.1 Evaluation $(\phi,v)\mapsto\phi(v)$ is bilinear, so [L3] induces the linear contraction map $c:V^*\otimes_FV\to F$ with $c(\phi\otimes v)=\phi(v)$. [given, L3]

1.2 Choose a basis $(e_1,\ldots,e_n)$ of $V$ and write $v=\sum_jv_je_j$. For $T_{\phi,v}(x)=\phi(x)v$, the coefficient of $e_i$ in $T_{\phi,v}(e_i)$ is $\phi(e_i)v_i$. [given, L1, algebra]

1.3 If $V=0$, the tensor product and endomorphism space are zero and both maps are the zero map by [L2]. [L1, L2, L3]

2.1 By [L2], $\operatorname{tr}(T_{\phi,v})=\sum_i\phi(e_i)v_i=\phi(\sum_iv_ie_i)=\phi(v)=c(\phi\otimes v)$. [step 1.1, step 1.2, L2, algebra]

3.1 Matrix diagonal sums are linear, so trace is linear by [L2]. Therefore trace after [L1] and contraction are linear maps inducing the same bilinear pairing by step 2.1; uniqueness in [L3] proves that they agree everywhere. [step 1.1, step 2.1, L1, L2, L3, algebra]

4.1 Thus tensor contraction is precisely trace under the canonical isomorphism, including the zero-dimensional case. [step 3.1, step 1.3] ∎
