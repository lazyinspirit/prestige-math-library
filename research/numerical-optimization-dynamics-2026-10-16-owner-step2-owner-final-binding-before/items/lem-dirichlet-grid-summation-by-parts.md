---
id: lem-dirichlet-grid-summation-by-parts
kind: lemma
title: One-dimensional discrete summation by parts with boundary terms
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps: [def-uniform-grid-and-difference-operators]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Endre Süli, B6.1 Numerical Solution of Partial Differential Equations"
      url: "https://people.maths.ox.ac.uk/suli/nspdes.pdf"
      locator: "§6.3, PDF pp. 85–89: finite-grid summation by parts and homogeneous Dirichlet wave-energy terms."
---

## Statement

Let $N\ge2$, $h>0$, and let $u=(u_0,\ldots,u_N)$ and $v=(v_0,\ldots,v_N)$ be complex grid functions. With the finite-interval inner products and differences of [[def-uniform-grid-and-difference-operators]],
$$ \langle u,-\Delta_hv\rangle_h =\langle D_+u,D_+v\rangle_{e,h}+u_0\overline{(D_+v)_0}-u_N\overline{(D_-v)_N}. $$
In particular, if $u_0=u_N=0$, the two boundary terms vanish. On the subspace of grid functions with zero endpoints, $-\Delta_h$ is self-adjoint and nonnegative in the interior grid inner product, with $\langle u,-\Delta_hu\rangle_h=\|D_+u\|_{e,h}^2$.

## Facts & Assumptions

**Given:** $N\ge2$, $h>0$, and complex grid values $u_j,v_j$ on $j=0,\ldots,N$.

[F1] The interior and edge inner products and differences are defined in [[def-uniform-grid-and-difference-operators]].

## Proof

1.1 Put $d_j=v_j-v_{j-1}$ for $j=1,\ldots,N$. Expanding the second difference gives $$ \langle u,-\Delta_hv\rangle_h=-\frac1h\sum_{j=1}^{N-1}u_j\overline{(d_{j+1}-d_j)}. $$ Shift the index in the $d_{j+1}$ sum and telescope: $$ -\sum_{j=1}^{N-1}u_j\overline{(d_{j+1}-d_j)} =\sum_{j=1}^{N}(u_j-u_{j-1})\overline{d_j}+u_0\overline{d_1}-u_N\overline{d_N}. $$ Dividing by $h$ identifies the edge sum and boundary terms in the displayed identity. [F1, algebra]

2.1 When $u_0=u_N=0$, step 1.1 reduces to $\langle u,-\Delta_hv\rangle_h=\langle D_+u,D_+v\rangle_{e,h}$. Applying this identity after exchanging $u,v$ and taking complex conjugates gives $\langle-\Delta_hu,v\rangle_h=\langle u,-\Delta_hv\rangle_h$, so $-\Delta_h$ is self-adjoint on the zero-endpoint subspace. Setting $u=v$ gives $\langle u,-\Delta_hu\rangle_h=\|D_+u\|_{e,h}^2\ge0$. [step 1.1, F1] ∎
