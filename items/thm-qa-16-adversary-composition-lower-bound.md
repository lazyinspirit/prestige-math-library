---
id: thm-qa-16-adversary-composition-lower-bound
kind: theorem
title: Nonnegative and signed adversary bounds compose from below
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 24
deps:
  - def-qa-16-boolean-query-domain
  - def-qa-16-general-adversary-bound
  - def-qa-16-nonnegative-adversary-bound
  - def-qa-16-input-mismatch-matrices
  - thm-singular-value-decomposition
  - thm-operator-norm-is-the-largest-singular-value
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
axiom_use: None; all spaces, matrices, decompositions and optimization variables are finite-dimensional.
sources:
  references:
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms (17 April 2025)"
      url: "https://cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "Høyer, Lee, and Špalek, Negative Weights Make Adversaries Stronger, Theory of Computing 3 (2007), §§6.1–6.2"
      url: "https://arxiv.org/pdf/quant-ph/0611054"
---

## Statement


Let $f:D_f\to\{0,1\}$ be a finite partial Boolean function on $N$ bits and let $g:D_g\to\{0,1\}$ be a finite partial Boolean function on $m$ bits. Define the block domain and composed function by
$$D_h=\{(x_1,\ldots,x_N)\in D_g^N:(g(x_1),\ldots,g(x_N))\in D_f\},\qquad h=f\circ g^N.$$
Assume $D_h\ne\varnothing$, as required for $h$ to be a Boolean query problem under [[def-qa-16-boolean-query-domain]]. Then both adversary bounds satisfy
$$\operatorname{Adv}^{\pm}(h)\ge\operatorname{Adv}^{\pm}(f)\operatorname{Adv}^{\pm}(g),\qquad \operatorname{Adv}(h)\ge\operatorname{Adv}(f)\operatorname{Adv}(g).$$

## Facts & Assumptions

**Given:** Finite partial Boolean functions f and g with disjoint input blocks in the composition h=f∘g^N.



[F1] [[def-qa-16-general-adversary-bound]]: finite nonconstant functions have an attained signed adversary matrix.

[F2] [[def-qa-16-nonnegative-adversary-bound]]: the same statement holds with entrywise nonnegative matrices.

[F3] [[def-qa-16-input-mismatch-matrices]]: Δ_i marks a mismatch at bit i and filters matrices entrywise.

[F4] [[thm-singular-value-decomposition]]: every finite real matrix has orthonormal left/right singular vectors and singular values.

[F5] [[thm-operator-norm-is-the-largest-singular-value]]: its operator norm is its largest singular value.

[F6] [[def-qa-16-boolean-query-domain]]: a Boolean query problem has a finite nonempty domain and a positive input length.

## Proof

1.1 Let f:D_f→{0,1} be a nonconstant Boolean function on N bits and g:D_g→{0,1} a nonconstant Boolean function on m bits. The composed partial function h=f∘g^N has domain D_h={ (x_1,…,x_N)∈D_g^N : (g(x_1),…,g(x_N))∈D_f }. This domain is nonempty: choose one z∈D_f and fixed preimages in D_g of 0 and 1, which exist because g is nonconstant, then lift the coordinates of z blockwise. Choose optimal matrices Γ_f,Γ_g normalized so max_i||Γ_f∘Δ_i||=max_j||Γ_g∘Δ_j||=1; write a=||Γ_g||=Adv±(g). [given, F1, F2, F3, F6]

1.2 Decompose each adversary matrix by output classes, Γ_g=[[0,B_g],[B_g^T,0]]. For a,b∈{0,1}, let G^{ab} be the (a,b) block of Γ_g when a≠b and let G^{aa}=a I on D_g^a. For x,y∈D_h put \tilde x=(g(x_1),…,g(x_N)) and define (Γ_h)_{xy}=(Γ_f)_{\tilde x,\tilde y}\prod_{j=1}^N G^{\tilde x_j,\tilde y_j}_{x_j,y_j}. This matrix is real symmetric and vanishes whenever h(x)=h(y); if Γ_f,Γ_g are entrywise nonnegative, so is Γ_h. [given, F1, F2, F3, construct]

2.1 By [F4,F5], choose a singular-vector basis of the cross block B_g. Pair its positive singular vectors across the two output classes, and pair equal numbers of left and right null vectors with singular value zero. If the null-space dimensions differ, each leftover null vector is a one-dimensional component supported on just one output class; its equal-output patch is aI and its cross-output action is zero. For a paired singular value s≤a, the four restrictions G^{00},G^{01},G^{10},G^{11} act as a times C_s=[[1,s/a],[s/a,1]], which is positive semidefinite with unit diagonal. A leftover singleton is represented by C_0=diag(1,0) or diag(0,1), a positive semidefinite matrix with diagonal entries at most one. For each tuple of child components, the corresponding invariant subspace is indexed by the compatible outer output labels b∈D_f, and the restriction of Γ_h is a^N times the compression of Γ_f∘C, where C_{b,b′} is the product of the selected two-output factors. The tensor-product factor C is positive semidefinite with diagonal entries at most one. Write C_{b,b′}=⟨c_b|c_{b′}⟩ with ||c_b||≤1; then V|b⟩=|b⟩⊗|c_b⟩ is a contraction and V^*(Γ_f⊗I)V=Γ_f∘C, so ||Γ_f∘C||≤||Γ_f||. The SVD components span every child input space, proving ||Γ_h||≤||Γ_f||a^N. [given, F4, F5, step 1.2, algebra]

3.1 Choose top singular pairs (u_f,v_f) and (u_g,v_g) for the cross blocks of Γ_f and Γ_g. The bipartite block form makes α_f=(u_f,v_f)/√2 and α_g=(u_g,v_g)/√2 eigenvectors with eigenvalues ||Γ_f|| and a. For a fixed outer output tuple b, each child factor G^{b_j,b′_j} sends the restricted α_g component in class b′_j to a times the corresponding component in class b_j, whether b_j=b′_j (the patched aI block) or b_j≠b′_j (the singular-vector equation for B_g). Substitution in the definition of Γ_h therefore shows α_h(x)=α_f(tilde x)∏_jα_g(x_j) is an eigenvector with eigenvalue ||Γ_f||a^N. Together with step 2.1 this gives ||Γ_h||=||Γ_f||a^N. [given, F1, F4, F5, step 1.2, step 2.1, algebra]

3.2 Fix an input bit q in block j and put d=||Γ_g∘Δ_q||. If d=0, then every entry of Γ_g∘Δ_q is zero, the equal-output patch dI is zero, and the masked composed block is zero. Suppose d>0. In Γ_h∘Δ_{j,q}, if the outer block outputs agree at j, its factor Γ_f∘Δ_j is zero; equivalently, the patched equal-output child block is diagonal in x_j and is killed by the inner mismatch Δ_q. If the outer outputs differ at j, the child cross block is exactly the corresponding block of Γ_g∘Δ_q. Thus the masked composite has the same entrywise construction as step 1.2 with outer matrix Γ_f∘Δ_j, child j cross block from Γ_g∘Δ_q patched by dI on equal-output blocks, and every other child patched by aI. Repeating the invariant-subspace and correlation-compression argument of step 2.1 bounds its norm by ||Γ_f∘Δ_j|| d a^{N−1}. The paired, zero-singular, and singleton components are handled as in step 2.1; the outer and inner filtered norms are at most one by normalization, so ||Γ_h∘Δ_{j,q}||≤a^{N−1}. [given, F3, F4, F5, step 1.2, step 2.1]

4.1 Therefore max_{j,q}||Γ_h∘Δ_{j,q}||≤a^{N-1}, while ||Γ_h||=Adv±(f)a^N by step 3.1. Its ratio is at least Adv±(f)a, proving Adv±(f∘g^N)≥Adv±(f)Adv±(g). If Γ_f and Γ_g are nonnegative, step 1.2 makes Γ_h nonnegative, so the identical argument proves Adv(f∘g^N)≥Adv(f)Adv(g). If either function is constant, the asserted lower bound is the trivial zero bound. [given, F1, F2, step 1.2, step 3.1, step 3.2] ∎
