---
id: lem-qftx-casimir-tensor-diagonal-invariance
kind: lemma
title: "The Casimir tensor is invariant under the diagonal adjoint action"
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
dependency_level: 0
domain: mathematics
library: mathematics
deps:
  - prop-killing-form-is-invariant-and-nondegenerate-on-a-complex-semisimple-lie-algebra
  - lem-the-casimir-element-is-independent-of-dual-bases
dependency_roles:
  prop-killing-form-is-invariant-and-nondegenerate-on-a-complex-semisimple-lie-algebra: mathematical-premise
  lem-the-casimir-element-is-independent-of-dual-bases: mathematical-premise
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; only a finite-dimensional duality map and finite sums are used."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Toshitake Kohno, Monodromy representations of braid groups and Yang-Baxter equations"
      url: "https://www.numdam.org/item/10.5802/aif.1114.pdf"
      locator: "§1.1, printed pp. 141–142: the Casimir tensor and infinitesimal pure braid relations."
    - title: "Pavel I. Etingof, Igor B. Frenkel, and Alexander A. Kirillov Jr., Lectures on Representation Theory and Knizhnik-Zamolodchikov Equations"
      url: "https://djvu.online/file/elCdJNnaapAuA"
      locator: "Lecture 2, §2.5, printed pp. 19–20: the Casimir tensor, its basis independence, and its adjoint invariance."
verification:
  precheck: pending
---

## Statement

Let $\mathfrak g$ be a finite-dimensional complex semisimple Lie algebra, let $B$ be its Killing form, and let $(x_a)$ and $(x^a)$ be $B$-dual bases. The tensor $\Omega:=\sum_a x_a\otimes x^a\in\mathfrak g\otimes\mathfrak g$ corresponds to the identity map under $\Phi_B(u\otimes v)(y):=uB(v,y)$, and is invariant under the diagonal adjoint action:

$$([x,\cdot]\otimes 1+1\otimes[x,\cdot])\Omega=\sum_a [x,x_a]\otimes x^a+x_a\otimes[x,x^a]=0\qquad(x\in\mathfrak g).$$

## Facts & Assumptions

**Given:** A finite-dimensional complex semisimple Lie algebra $\mathfrak g$, its Killing form $B$, and a pair of $B$-dual bases $(x_a),(x^a)$.

[F1] [[prop-killing-form-is-invariant-and-nondegenerate-on-a-complex-semisimple-lie-algebra]]: $B$ is symmetric, nondegenerate, and invariant, so $B([u,v],w)=B(u,[v,w])$.

[F2] [[lem-the-casimir-element-is-independent-of-dual-bases]]: $\sum_a x_a\otimes x^a$ is independent of the chosen pair of $B$-dual bases.

## Proof

**Proof technique:** identify $\mathfrak g\otimes\mathfrak g$ with $\operatorname{End}(\mathfrak g)$ using the nondegenerate form, then compute the two adjoint actions.

1.1 Nondegeneracy [F1] makes $\beta_B:v\mapsto B(v,\cdot)$ an isomorphism $\mathfrak g\to\mathfrak g^*$. Since $\mathfrak g$ is finite-dimensional, $u\otimes\lambda\mapsto(y\mapsto\lambda(y)u)$ is an isomorphism $\mathfrak g\otimes\mathfrak g^*\to\operatorname{End}(\mathfrak g)$: in any basis and its dual, it sends the tensor basis to the matrix-unit basis. Their composite is $\Phi_B$, hence $\Phi_B$ is an isomorphism. Duality gives $\sum_a x_a B(x^a,y)=y$ for every $y$, so $\Phi_B(\Omega)=I_{\mathfrak g}$. [F1, given, algebra]

2.1 Invariance and symmetry [F1] imply $B([x,u],v)=-B(u,[x,v])$: indeed $B(u,[x,v])=B([u,x],v)=-B([x,u],v)$. Thus $\Phi_B(( [x,\cdot]\otimes 1)\Omega)(y)=[x,y]$, while $\Phi_B((1\otimes[x,\cdot])\Omega)(y)=-\sum_a x_aB(x^a,[x,y])=-[x,y]$, using step 1.1's dual-basis identity. [F1, step 1.1, algebra]

3.1 The two images in step 2.1 sum to zero for every $y$. Since $\Phi_B$ is injective by step 1.1, the sum of tensors is zero. The tensor itself is independent of the dual bases by [F2], so this is the diagonal adjoint invariance of the canonical Casimir tensor. [F2, step 1.1, step 2.1, algebra] ∎
