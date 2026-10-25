---
id: ex-hh-finite-coevaluation-in-two-bases
kind: example
title: "Finite coevaluation computed in two bases"
status: published
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 2
deps: [def-hh-scalar-and-tensor-conventions, lem-hh-finite-tensor-duality-and-canonical-coevaluation, def-dual-family-associated-to-a-basis, thm-dual-family-is-a-basis-in-finite-dimension]
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
      locator: "Theorem 5.9 and Example 5.11, printed pp. 30–31: dual bases and the Hom–tensor correspondence in the finite-free case"
verification:
  audited: "2026-10-08"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Example

Let $V=k^2$ with standard basis $e_1,e_2$, and let $k$ have characteristic $\ne2$. For the second basis $b_1=e_1+e_2$, $b_2=e_1-e_2$ with dual basis $b_1^*=\tfrac12(e_1^*+e_2^*)$, $b_2^*=\tfrac12(e_1^*-e_2^*)$, the elements $\sum_ie_i\otimes e_i^*$ and $\sum_jb_j\otimes b_j^*$ of $V\otimes V^*$ are equal. Hence the coevaluation $\mathrm{coev}:k\to V\otimes V^*$ of [[lem-hh-finite-tensor-duality-and-canonical-coevaluation]] is computed by the same element in both bases, and the zigzag identities hold in both.

## Facts & Assumptions

**Given:** The field $k$ of characteristic $\ne2$, the space $V=k^2$ with standard basis $e_1,e_2$ and dual basis $e_1^*,e_2^*$, and the second ordered basis $b_1=e_1+e_2$, $b_2=e_1-e_2$ with dual basis $b_1^*,b_2^*$.

[F1] The tensor product conventions: every element of $V\otimes V^*$ is a finite sum of elementary tensors and the defining relations give bilinearity and $c(u\otimes v)=(cu)\otimes v=u\otimes(cv)$ ([[def-hh-scalar-and-tensor-conventions]]).

[F2] The dual family of a basis is characterized by $b_j^*(b_k)=\delta_{jk}$ ([[def-dual-family-associated-to-a-basis]]), and a dual family of a finite basis is again a basis, so it is determined by those values ([[thm-dual-family-is-a-basis-in-finite-dimension]]).

[F3] For finite-dimensional $V$, the element $\sum_iv_i^*\otimes v_i\in V^*\otimes V$, equivalently $\sum_iv_i\otimes v_i^*\in V\otimes V^*$ under the symmetry, is independent of the ordered basis and equals the coevaluation image of $1$; both zigzag identities hold ([[lem-hh-finite-tensor-duality-and-canonical-coevaluation]]).

## Verification

**Proof technique:** direct.

1.1 First, $b_1^*,b_2^*$ as displayed are the dual basis of $b_1,b_2$: using $e_i^*(e_j)=\delta_{ij}$ one computes $b_1^*(b_1)=\tfrac12(1+1)=1$, $b_1^*(b_2)=\tfrac12(1-1)=0$, $b_2^*(b_1)=\tfrac12(1-1)=0$ and $b_2^*(b_2)=\tfrac12(1+1)=1$, so by the characterization of [F2] the displayed functionals are $b_1^*,b_2^*$. Then [F1] gives $\sum_jb_j\otimes b_j^*=\tfrac12\bigl((e_1+e_2)\otimes(e_1^*+e_2^*)+(e_1-e_2)\otimes(e_1^*-e_2^*)\bigr)=\tfrac12\bigl(2e_1\otimes e_1^*+2e_2\otimes e_2^*\bigr)=e_1\otimes e_1^*+e_2\otimes e_2^*$, the two cross terms cancelling and the factor $\tfrac12\cdot2=1$ being legitimate because $\operatorname{char}k\ne2$. [given, F1, F2, algebra]

2.1 By step 1.1 the same element of $V\otimes V^*$ is computed by the sum over the standard basis and by the sum over the second basis, which is exactly the basis-independence asserted in [F3]; since [F3] identifies this element with the image of $1$ under the coevaluation, the coevaluation is computed by the same element in both bases, and the zigzag identities of [F3] hold for both ordered bases. [step 1.1, F3] ∎
