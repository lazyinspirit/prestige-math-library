---
id: ex-hh-elementary-tensor-presentations-and-invariant-contractions
kind: example
title: "Many finite presentations of one tensor and the invariant contraction"
status: published
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 1
deps: [def-hh-scalar-and-tensor-conventions, def-balanced-and-bilinear-maps, thm-universal-property-of-module-tensor-products, prop-elementary-tensor-formulas-descend-exactly-when-balanced, thm-tensor-product-basis-from-bases]
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
      locator: "§1, printed pp. 1–2, and §3, printed pp. 7–10: the general element of a tensor product is a finite linear combination of elementary tensors and bilinear maps descend"
verification:
  audited: "2026-10-08"
  precheck: pass
---

## Example

Let $k$ be a field of characteristic $\ne2$. Work in $V=W=k^2$ with $u=(1,0)$, $v=(0,1)$, $u'=(2,0)$ and $v'=(0,\tfrac12)$. Then $u\otimes v=u'\otimes v'$ in $k^2\otimes k^2$, although $(u,v)\ne(u',v')$. Consequently every $k$-bilinear form $B:k^2\times k^2\to k$ with $B(u,v)=1$ gives the value $1$ on **every** finite presentation of that tensor: if $\sum_lx_l\otimes y_l=u\otimes v$ then $\sum_lB(x_l,y_l)=1$. The contraction of a bilinear form against a tensor is therefore independent of the presentation.

## Facts & Assumptions

**Given:** A field $k$ of characteristic $\ne2$, the vectors $u=(1,0)$, $v=(0,1)$, $u'=(2,0)$ and $v'=(0,\tfrac12)$ in $k^2$, and a $k$-bilinear form $B:k^2\times k^2\to k$ with $B(u,v)=1$.

[F1] The tensor product conventions: $k^2\otimes k^2$ is the tensor product over $k$ with its universal property, every element is a finite sum of elementary tensors, and the defining relations give $c(x\otimes y)=(cx)\otimes y=x\otimes(cy)$ for every $c\in k$ ([[def-hh-scalar-and-tensor-conventions]]).

[F2] Bilinear maps over a commutative ring are additive in each variable and satisfy $b(rx,y)=rb(x,y)=b(x,ry)$ ([[def-balanced-and-bilinear-maps]]).

[F3] A balanced pairing on $V\times W$ induces a unique group homomorphism on $V\otimes W$ with the corresponding values on elementary tensors ([[thm-universal-property-of-module-tensor-products]]).

[F4] A prescription on elementary tensors descends to a homomorphism exactly when its underlying pairing is balanced, and then the extension is unique ([[prop-elementary-tensor-formulas-descend-exactly-when-balanced]]).

[F5] The elementary tensors of two bases form a basis of the tensor product, so for the basis vectors $e_1=u$, $e_2=v$ the tensor $u\otimes v=e_1\otimes e_2$ is a nonzero element of $k^2\otimes k^2$ ([[thm-tensor-product-basis-from-bases]]).

## Verification

**Proof technique:** direct.

1.1 Since $u'=2u$ and $v'=\tfrac12v$, bilinearity of the elementary tensor [F1] gives $u'\otimes v'=(2u)\otimes(\tfrac12v)=2\cdot\tfrac12\,(u\otimes v)=u\otimes v$ because $2\cdot\tfrac12=1$ in $k$ by the characteristic hypothesis; and $(u,v)\ne(u',v')$ because $u=(1,0)\ne(2,0)=u'$; moreover $u\otimes v=e_1\otimes e_2\ne0$ by [F5], so an empty presentation, whose sum is $0$, can never satisfy $\sum_lx_l\otimes y_l=u\otimes v$. [given, F1, F5, algebra]

2.1 The form $B$ is $k$-bilinear [F2], hence balanced, so it descends to the unique group homomorphism $\overline B:k^2\otimes k^2\to k$ with $\overline B(x\otimes y)=B(x,y)$ by [F3] and [F4]. It is $k$-linear: for $c\in k$ and $t=\sum_lx_l\otimes y_l$, [F1] and [F2] give $\overline B(ct)=\sum_lB(cx_l,y_l)=c\sum_lB(x_l,y_l)=c\overline B(t)$. If $\sum_lx_l\otimes y_l=u\otimes v$ is any finite presentation of the tensor, linearity of $\overline B$ and step 1.1 give $\sum_lB(x_l,y_l)=\overline B\bigl(\sum_lx_l\otimes y_l\bigr)=\overline B(u\otimes v)=B(u,v)=1$, so the contraction has the same value $1$ on every presentation and is independent of the presentation. [step 1.1, F1, F2, F3, F4] ∎
