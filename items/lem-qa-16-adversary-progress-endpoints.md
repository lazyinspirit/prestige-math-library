---
id: lem-qa-16-adversary-progress-endpoints
kind: lemma
title: Adversary progress at initial and bounded-error final states
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 23
deps:
  - def-qa-16-general-adversary-bound
  - def-qa-16-boolean-query-domain
  - def-qc-pure-state-and-ray
  - def-qc-quantum-acceptance-probability
  - def-qa-quantum-query-algorithm
  - lem-qa-16-query-unitary-normal-form
  - cor-real-spectral-theorem-for-self-adjoint-endomorphisms
  - thm-cauchy-schwarz-in-an-inner-product-space
  - cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases
  - thm-singular-value-decomposition
  - thm-operator-norm-is-the-largest-singular-value
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
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
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6"
      url: "https://arxiv.org/pdf/1907.09415"
---

## Statement


Let $\Gamma$ be an admissible real symmetric adversary matrix, vanishing on every equal-output pair, as in [[def-qa-16-general-adversary-bound]]. For a standard XOR query algorithm in the ordinary oracle-only model that outputs $f(x)$ with probability at least $1-\epsilon$ for every $x\in D$, where $0\le\epsilon<1/2$, purify its final states and define
$$W_t=\sum_{x,y\in D}\Gamma_{xy}\alpha_x\alpha_y\langle\psi_x^t|\psi_y^t\rangle_D,$$
where α is a real unit eigenvector of Γ with eigenvalue of magnitude ||Γ||. Then |W_0|=||Γ|| and
$$|W_T|\le 2\sqrt{\epsilon(1-\epsilon)}\,\|\Gamma\|.$$

## Facts & Assumptions

**Given:** An ordinary oracle-only query algorithm for a finite Boolean function, an admissible real symmetric adversary matrix Γ, and a normalized principal eigenvector α.



[F1] [[def-qa-16-general-adversary-bound]]: Γ is real symmetric, vanishes on equal-output pairs, and has norm ||Γ||.

[F2] [[def-qa-16-boolean-query-domain]]: the function has finite domain D and Boolean output.

[F3] [[def-qc-pure-state-and-ray]]: each purified algorithm branch has a unit state vector.

[F4] [[def-qc-quantum-acceptance-probability]]: acceptance probability is the squared norm of the output-one projection.

[F5] [[lem-qa-16-query-unitary-normal-form]]: measurements can be deferred into a final output projection without increasing queries.

[F6] [[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]]: a finite real symmetric matrix has an orthonormal real eigenbasis.

[F7] [[cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]]: every finite-dimensional inner-product space has an orthonormal basis.

[F8] [[thm-singular-value-decomposition]]: a finite real matrix has a singular-value decomposition with orthonormal left and right singular vectors; its transpose has the same singular values.

[F9] [[thm-operator-norm-is-the-largest-singular-value]]: the operator norm is the largest singular value.

[F10] [[thm-cauchy-schwarz-in-an-inner-product-space]]: finite-dimensional inner products satisfy the Cauchy–Schwarz inequality.

[F11] [[def-operator-norm-on-a-finite-dimensional-inner-product-space]]: the operator norm is the induced Euclidean norm.

## Proof

1.1 If Γ=0, then W_0=W_T=0 and both endpoint bounds hold. Assume Γ≠0. By [F6], choose a real orthonormal eigenbasis; the induced norm [F11] then gives a real unit eigenvector α of Γ with eigenvalue λ satisfying |λ|=||Γ||. Since Γ has only cross-output blocks, write Γ=[[0,B],[B^T,0]] with respect to the two nonempty output classes. The SVD [F8] and largest-singular-value characterization [F9] show ||Γ||=||B||: for any (a,b), ||Γ(a,b)||²=||Bb||²+||B^Ta||²≤||B||²(||a||²+||b||²), and a top right singular vector of B attains equality. The eigenvector equations imply α_0^{\mathsf T}Bα_1=λ||α_0||²=λ||α_1||²; because λ≠0, the class norms are equal, hence each is 1/√2. Initially all x-dependent states are identical, so W_0=Σ_xyΓ_xyα_xα_y=α^TΓα=λ. [given, F1, F2, F5, F6, F8, F9, F11, construct]

1.2 By [F5], represent the terminal computation by unit vectors ψ_x and an output-one projection P. For x with f(x)=0 put a_x=Pψ_x, b_x=(I−P)ψ_x; for y with f(y)=1 put c_y=Pψ_y, d_y=(I−P)ψ_y. The per-input error hypothesis gives p_x=||a_x||²≤ε and q_y=||c_y||²≥1−ε. Orthogonality of the two measurement subspaces gives ⟨ψ_x|ψ_y⟩=⟨a_x|c_y⟩+⟨b_x|d_y⟩. [given, F3, F4, F5]

2.1 If ε=0, then a_x=d_y=0 for every opposite-output pair, so all such overlaps vanish and W_T=0. Suppose 0<ε<1/2. Set r=(1−ε)/ε, b=√(ε/(1−ε)), and a=rb=√((1−ε)/ε). Define u_x=(√a\,a_x,√b\,b_x) and v_y=(a^{-1/2}c_y,b^{-1/2}d_y). Then ⟨u_x|v_y⟩=⟨ψ_x|ψ_y⟩. Since a≥b, the bounds p_x≤ε and q_y≥1−ε give ||u_x||²≤aε+b(1−ε)=2√(ε(1−ε)), ||v_y||²≤(1−ε)/a+ε/b=2√(ε(1−ε)). Thus the cross-overlap matrix has a factorization with both squared vector norms at most c:=2√(ε(1−ε)). [given, F3, step 1.2, algebra]

3.1 Choose an orthonormal basis $(e_r)$ of the finite state space by [F7], and write $u_x=\sum_r u_{xr}e_r$, $v_y=\sum_r v_{yr}e_r$. For each r set $a_r=(\alpha_xu_{xr})_{x\in D_0}$ and $b_r=(\alpha_yv_{yr})_{y\in D_1}$. The cross-output contribution is $\sum_r a_r^*Bb_r$. By Cauchy–Schwarz [F10] and the induced norm definition [F11], each term is bounded by $\|B\|\|a_r\|\|b_r\|$: the real SVD $B=U\Sigma V^{\mathsf T}$ in [F8] also acts unitarily on complex coordinates, so [F9] gives $\|Bb_r\|\le\|B\|\|b_r\|$. Summing and applying real Cauchy–Schwarz to the nonnegative norms gives $\|B\|\sum_r\|a_r\|\|b_r\|\le\|B\|(\sum_x\alpha_x^2\|u_x\|^2)^{1/2}(\sum_y\alpha_y^2\|v_y\|^2)^{1/2}$. By step 2.1 this is at most $c\|B\|\|\alpha_0\|\|\alpha_1\|=c\|\Gamma\|/2$. The reverse-output block contributes the complex conjugate, hence $|W_T|\le c\|\Gamma\|=2\sqrt{\epsilon(1-\epsilon)}\|\Gamma\|$. Together with the $\epsilon=0$ case this proves the endpoint bound. [given, F1, F7, F8, F9, F10, F11, step 1.1, step 2.1, algebra] ∎
