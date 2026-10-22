---
id: lem-von-neumann-inertia-and-coisotropic-reduction
kind: lemma
title: "Von Neumann inertia, dense congruences, and coisotropic reduction"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 1
deps:
  - lem-finite-von-neumann-module-dimension-and-dense-quotients
justified_by: []
proof_strategy: direct
axiom_use: "The standing full AC convention is inherited from the finite von Neumann module and spectral suppliers."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Wolfgang Lück and Thomas Schick, Various L2-signatures and a topological L2-signature theorem"
      url: https://arxiv.org/pdf/math/0209161
      locator: "Section 3, finite Hilbert-module signatures; dense-form and isotropic calculations are supplied explicitly below."
---

## Statement

Work under the standing AC convention for finite von Neumann modules. Let $A=\mathcal N G$ with its finite trace, and let all Hilbert modules below be ranges of projections on finite sums of $\ell^2(G)$. For a bounded self-adjoint module operator $J$ define its positive and negative inertia by the traces of $\mathbf1_{(0,\infty)}(J)$ and $\mathbf1_{(-\infty,0)}(J)$, and its signature by their difference. Each inertia is the supremum of dimensions of closed module subspaces on which the form $\langle Jx,x\rangle$ is strictly positive or strictly negative, respectively. If $T:H_0\to H_1$ is bounded, injective and has dense image, then $T^*JT$ and $J$ have the same inertia. If $J$ is invertible, $V\subseteq H$ is closed, and $V^{\perp_J}\subseteq V$, then the form on $H$ and its restriction to $V$ have equal signatures. Kernels contribute zero. These statements include ordinary real signatures by complexification and the trivial-group trace.

## Statement references

[[lem-finite-von-neumann-module-dimension-and-dense-quotients]]

[Lück–Schick, Section 3](https://arxiv.org/pdf/math/0209161)

## Facts & Assumptions

**Given:** The finite projection modules, their bounded module maps and self-adjoint forms in the Statement.

[F1] Matrix spectral projections, polar rank-nullity, trace faithfulness and normality, and Hilbert-closed submodule projections have the properties proved in the finite-module lemma. [[lem-finite-von-neumann-module-dimension-and-dense-quotients]]

## Proof

**Given:** The data in the Statement.

1.1 The positive spectral subspace of $J$ is strictly positive for its quadratic form: integrating the positive spectral variable gives a positive number for every nonzero vector there. If a closed module subspace $U$ is strictly positive, its projection into that positive spectral subspace is injective, because a vector with no positive spectral part has nonpositive quadratic form. Polar rank-nullity in [F1] therefore bounds $\dim_A U$ by the trace of the positive spectral projection. This proves the positive characterization, and applying it to $-J$ proves the negative one. [F1, given, algebra]

2.1 For two projections $p,q$ on a common finite module, rank-nullity for $(I-q):pH\to(I-q)H$ gives $\tau(p\wedge q)\ge\tau(p)-\tau(I-q)$; its kernel is exactly their closed range intersection. If $T$ is injective with dense image, let $q_\varepsilon=\mathbf1_{[\varepsilon,\infty)}(TT^*)$. The traces $\tau(q_\varepsilon)$ tend to $\dim_A H_1$ by [F1], and $q_\varepsilon H_1$ lies in the image of $T$ with a bounded module inverse on it. Intersect this range with a positive spectral subspace $p_\delta H_1=\mathbf1_{[\delta,\infty)}(J)H_1$. Its trace tends to $\tau(p_\delta)$ as $\varepsilon\downarrow0$ by the intersection inequality. Pulling it back by the bounded inverse of $T$ gives a closed positive subspace for $T^*JT$ of the same dimension. Step 1.1 and then $\delta\downarrow0$ show that the positive inertia of $T^*JT$ is at least that of $J$. Conversely, on every closed positive subspace for $T^*JT$, project $T$ into the positive spectral subspace of $J$; this map is injective, giving the reverse inequality by [F1]. Repeat with $-J$. [F1, step 1.1, construct, algebra]

3.1 Assume $J$ is invertible and put $L=V^{\perp_J}\subseteq V$, $K=V\cap L^\perp$ and $Q=V^\perp$, where unmarked orthogonals use the underlying Hilbert product. These are closed module subspaces and $H=L\oplus K\oplus Q$. The identity $L=J^{-1}Q$ says that $J|_L:L\to Q$ is a bounded isomorphism. In this decomposition the matrix of $J$ is $\left(\begin{smallmatrix}0&0&B\\0&C&E\\B^*&E^*&F\end{smallmatrix}\right)$, where $B^*:L\to Q$ is invertible. Replace $k\in K$ by $k-(B^*)^{-1}E^*k$. This bounded invertible triangular change makes $K$ orthogonal, for the form, to both $L$ and $Q$, leaving its form $C$ unchanged. In the remaining $L\oplus Q$ block, replace $l$ by $l-\tfrac12(B^*)^{-1}Fq$ to obtain $\left(\begin{smallmatrix}0&B\\B^*&0\end{smallmatrix}\right)$. Conjugation by $\operatorname{diag}(I_L,-I_Q)$ negates this last form; its positive and negative spectral projections consequently have the same trace, so its signature is zero. Step 2.1 applies to the bounded invertible changes just used, proving that the original signature is the signature of $C$. [F1, step 2.1, construct, algebra]

4.1 The restriction of the form to $V=L\oplus K$ is $0\oplus C$, so it too has signature equal to that of $C$. This proves coisotropic reduction. For a map with a kernel, its pullback form vanishes on that kernel and has no cross terms with it; discard the kernel and use step 2.1 on its orthogonal complement whenever the remaining image is dense. For the trivial group, projection traces are ordinary complex dimensions; complexifying a real symmetric form preserves its real positive and negative dimensions by diagonalizing the finite real form. Thus the ordinary case is included. [step 1.1, step 2.1, step 3.1, algebra] ∎
