---
id: prop-qa-16-ambainis-base-separation
kind: proposition
title: The four-bit Ambainis function separates nonnegative and signed adversary bounds
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 25
deps:
  - def-qa-16-boolean-query-domain
  - def-qa-16-input-mismatch-matrices
  - def-qa-16-general-adversary-bound
  - def-qa-16-nonnegative-adversary-bound
  - lem-qa-16-nonnegative-dual-overlap-upper-bound
  - thm-singular-value-decomposition
  - thm-operator-norm-is-the-largest-singular-value
  - cor-real-spectral-theorem-for-self-adjoint-endomorphisms
  - thm-cauchy-schwarz-in-an-inner-product-space
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
axiom_use: None; all spaces, matrices, decompositions and optimization variables are finite-dimensional.
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6"
      url: "https://arxiv.org/pdf/1907.09415"
    - title: "Høyer, Lee, and Špalek, Negative Weights Make Adversaries Stronger, Theory of Computing 3 (2007), §7.1"
      url: "https://arxiv.org/pdf/quant-ph/0611054"
---

## Statement


Let f:{0,1}^4→{0,1} equal 1 exactly on the sorted strings
$$0000,0001,0011,0111,1111,1110,1100,1000.$$
Then the nonnegative adversary value is exactly $\operatorname{Adv}(f)=5/2$, while an explicit signed-weight matrix gives
$$\operatorname{Adv}^{\pm}(f)>2.511486>5/2.$$
The distributions and matrices used to certify both bounds are given in the proof.

## Facts & Assumptions

**Given:** The sorted four-bit Boolean function and the query mismatch masks Δ_i.



[F1] [[def-qa-16-boolean-query-domain]]: the input set is {0,1}^4 with the Boolean function fixed in the Statement.

[F2] [[def-qa-16-input-mismatch-matrices]]: Δ_i filters pairs that differ at coordinate i.

[F3] [[def-qa-16-general-adversary-bound]]: any real symmetric admissible Γ gives a lower bound by its norm ratio.

[F4] [[def-qa-16-nonnegative-adversary-bound]]: nonnegative matrices use the same ratio with Γ≥0.

[F5] [[lem-qa-16-nonnegative-dual-overlap-upper-bound]]: for a nonconstant Boolean function, distributions with cross-output mismatch overlap at least η>0 imply Adv≤1/η.

[F6] [[thm-singular-value-decomposition]]: a finite real matrix has a singular-value decomposition; its transpose has the same singular values.

[F7] [[thm-operator-norm-is-the-largest-singular-value]]: the operator norm is the largest singular value.

[F8] [[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]]: a finite real symmetric matrix has an orthonormal eigenbasis.

[F9] [[thm-cauchy-schwarz-in-an-inner-product-space]]: finite-dimensional inner products satisfy Cauchy–Schwarz.

[F10] [[def-operator-norm-on-a-finite-dimensional-inner-product-space]]: the operator norm is induced by the Euclidean norm.

## Proof

1.1 The sorted four-bit function is 1 exactly on T=(0000,0001,0011,0111,1111,1110,1100,1000) and 0 exactly on Z=(0010,0101,1011,0110,1101,1010,0100,1001). Define g(x_1,x_2,x_3,x_4)=(x_2,x_3,x_4,1⊕x_1). Direct substitution shows g cycles each displayed list and preserves monotonicity, and g shifts the four coordinate-mismatch masks cyclically. [given, F1, F2, construct]

2.1 In row order T and column order Z, define the cross block C(a,b,c,d) by $ \begin{array}{c|rrrrrrrr} &0010&0101&1011&0110&1101&1010&0100&1001\\ 0000&a&c&d&b&d&c&a&b\\ 0001&b&a&c&d&b&d&c&a\\ 0011&a&b&a&c&d&b&d&c\\ 0111&c&a&b&a&c&d&b&d\\ 1111&d&c&a&b&a&c&d&b\\ 1110&b&d&c&a&b&a&c&d\\ 1100&d&b&d&c&a&b&a&c\\ 1000&c&d&b&d&c&a&b&a \end{array} $ and set Γ=[[0,C],[C^T,0]]. The displayed cyclic pattern gives Γ(gx,gy)=Γ(x,y); hence each Γ∘Δ_i is a simultaneous row/column permutation of Γ∘Δ_1. For i=1, reorder the full symmetric 16×16 masked matrix by T₀=(0000,0001,0011,0111), Z₁=(1011,1101,1010,1001), T₁=(1000,1110,1111,1100), Z₀=(0010,0100,0101,0110). Its four off-diagonal 4×4 blocks are A, Aᵀ, B, Bᵀ, arranged as M_A⊕M_B with M_A=[[0,A],[Aᵀ,0]] and M_B=[[0,B],[Bᵀ,0]], where A=[[d,d,c,b],[c,b,d,a],[a,d,b,c],[b,c,d,d]] and B=[[c,b,d,d],[b,c,d,a],[d,d,c,b],[d,a,b,c]]. The matrix B is symmetric, and A=PBQ where P reorders rows as (3,2,4,1) and Q swaps columns 1 and 2. With S=diag(P,Qᵀ), which is orthogonal, S M_B Sᵀ=M_A; conjugating M_B by 2^{-1/2}[[I,I],[I,−I]] gives diag(B,−B). Hence both 8×8 blocks have norm ||B||, and the full 16×16 masked matrix has norm ||B||. This justifies the filtered norm for i=1, and cyclic symmetry gives it for every i. [given, F2, F3, F10, step 1.1, construct, algebra]

2.2 Define coordinate distributions at the orbit seeds by p_{0000}=(1/10,2/5,2/5,1/10),\quad p_{0010}=(1/10,1/10,2/5,2/5), and propagate by p_{g(x)}(σ(i))=p_x(i), where σ sends old coordinates 1,2,3,4 to new coordinates 4,1,2,3. Each propagated vector is a probability distribution. For the eight pairs (0000,g^k(0010)), k=0,…,7, the mismatch overlaps Σ_{i:x_i≠y_i}√(p_x(i)p_y(i)) are respectively (2/5,1/2,1/2,2/5,1/2,1/2,2/5,2/5). Every opposite-output pair is carried to one of these by a power of g, so all overlaps are at least 2/5. [given, F1, F2, step 1.1, algebra]

3.1 First choose a=3/4,b=1/2,c=d=0. Every row and column of C then sums to 2(a+b)=5/2. For any vector z, weighted Cauchy–Schwarz [F9] gives ||Cz||²≤(5/2)Σ_xΣ_y C_{xy}|z_y|²=(5/2)^2||z||² by [F10], while the uniform vector is an eigenvector of C and C^T with singular value 5/2. For the symmetric block matrix Γ=[[0,C],[C^T,0]], SVD gives ||C^T||=||C||; hence ||Γ(u,v)||²=||Cv||²+||C^Tu||²≤||C||²(||u||²+||v||²), with equality on a top right singular vector of C, so ||Γ||=||C||=5/2. The corresponding B decomposes under the swap (1 3)(2 4) into even and odd blocks [[0,1/2],[1/2,3/4]] and [[0,1/2],[1/2,−3/4]], whose eigenvalues are {1,−1/4} and {1/4,−1}. Thus ||B||=1 by [F8,F10], and [F3,F4] give Adv(f)≥5/2. [given, F3, F4, F6, F7, F8, F9, F10, step 2.1, algebra]

3.2 Now choose a=579/1000,b=707/1000,c=183/1000,d=−212/1000. The uniform vector in the 8×8 block C has row and column sum 2(a+b+c+d)=2514/1000, so ||Γ||≥2514/1000. [given, F3, F10, step 2.1, algebra]

3.3 The even/odd restrictions of B under (1 3)(2 4) are $E=\frac1{1000}\begin{pmatrix}-29&495\\495&762\end{pmatrix},\qquad O=\frac1{1000}\begin{pmatrix}395&919\\919&-396\end{pmatrix}.$ Their eigenvalues are (733±√1,605,781)/2000 and (−1±√4,003,925)/2000. Since 1,605,781<1269² and 4,003,925<2001², every absolute eigenvalue is strictly below 1.001; by [F8,F10], the operator norm of the symmetric B is the greatest of those absolute eigenvalues. Thus ||Γ∘Δ_i||=||B||<1.001 for every i. [given, F2, F8, F10, step 2.1, algebra]

4.1 Applying [F5] with η=2/5 yields Adv(f)≤5/2. Together with step 3.1, Adv(f)=5/2. [given, F4, F5, step 3.1, step 2.2]

5.1 Multiply Γ by 999/1000. Its denominator becomes less than 0.999999, while its numerator is at least (999/1000)(2514/1000)=2.511486. The ratio is therefore strictly greater than 2.511486>5/2. By [F3,F4], Adv±(f)>2.511486>Adv(f). [given, F3, F4, step 3.2, step 3.3, algebra] ∎
