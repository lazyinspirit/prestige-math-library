---
id: thm-tensor-train-exact-ranks-and-root-sum-square-truncation-error
kind: theorem
title: Exact TT ranks and root-sum-square truncation error
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-finite-tensor-arrays-and-frobenius-inner-product, def-tensor-train-cores-bond-ranks-and-canonical-gauges, lem-tensor-unfoldings-are-frobenius-isometries, thm-best-rank-k-frobenius-matrix-approximation, alg-sequential-tensor-train-svd, alg-tensor-train-rounding, thm-singular-value-decomposition]
aliases: []
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Ivan V. Oseledets, Tensor-Train Decomposition, SIAM Journal on Scientific Computing 33(5) (2011), §§2–3"
      url: "https://users.math.msu.edu/users/iwenmark/Teaching/CMSE890/TENSOR_oseledets2011.pdf"
    - title: "Mi-Song Dupuy, Tensor trains for high-dimensional problems, full lecture notes, Chapter 1, §§1.2.1–1.2.5 (2026)"
      url: "https://msdupuy.github.io/teaching/TT_lectures_2026.pdf"
dependency_level: 3
---

## Statement

Let $A\in\mathbb F^{n_1\times\cdots\times n_d}$, $d\ge2$, and let $A^{\langle k\rangle}$ denote its cut-$k$ unfolding. For sequential TT-SVD, let $r_k$ be its retained bond size and $\delta_k$ its discarded singular-value tail at cut $k$. For rounding, let the input TT represent $A$ and use the same notation for the output bond sizes and recorded tails. Then both procedures satisfy
$$ \|A-\widehat A\|_F^2\le\sum_{k=1}^{d-1}\delta_k^2. $$
If no positive singular value is discarded, the output is exactly $A$. In full-rank TT-SVD, $r_k=\operatorname{rank}(A^{\langle k\rangle})$ for every cut, and these are the minimal possible TT bond sizes among exact representations.

## Facts & Assumptions

**Given:** A finite tensor over $\mathbb R$ or $\mathbb C$, and either its exact sequential TT-SVD or a valid TT representation supplied to the exact rounding procedure.

[F1] [[def-tensor-train-cores-bond-ranks-and-canonical-gauges]]: a TT core list contracts over adjacent bond indices; its left and right matricizations specify the isometric gauges.

[F2] [[lem-tensor-unfoldings-are-frobenius-isometries]]: cut unfoldings preserve Frobenius norms and inner products.

[F3] [[thm-best-rank-k-frobenius-matrix-approximation]]: truncating a matrix SVD at rank $r$ discards an orthogonal component whose squared Frobenius norm is the sum of the squared omitted singular values.

[F4] [[alg-sequential-tensor-train-svd]]: each left-to-right step retains the leading singular vectors of the current cut remainder and records the omitted singular-value tail.

[F5] [[alg-tensor-train-rounding]]: exact left orthogonalization is followed by right-to-left core SVD truncations, with each omitted tail recorded.

[F6] [[thm-singular-value-decomposition]]: every finite-dimensional real or complex linear map has an exact SVD with orthonormal singular-vector bases.

## Proof

1.1 Any TT representation with bond size $r_k$ factors the cut unfolding as $A^{\langle k\rangle}=L_kR_k$: the columns of $L_k$ are the contracted first $k$ cores indexed by the bond $\alpha_k$, and the rows of $R_k$ are the contracted remaining cores with that same bond index. This is a matrix product through an inner dimension $r_k$, so $\operatorname{rank}(A^{\langle k\rangle})\le r_k$. [F1, algebra]

1.2 For rounding, let $C_\ell$ be the contraction of cores $\ell+1,\ldots,d$, with row index the bond after core $\ell$ and column index the suffix $(i_{\ell+1},\ldots,i_d)$; the empty suffix gives $C_d=[1]$. Put $R_\ell=C_\ell^*$. Backward induction from $C_d$ shows $C_\ell C_\ell^*=I$: if $G_{\ell+1}^{(R)}$ is the right matricization of core $G_{\ell+1}$ and $C_{\ell+1}C_{\ell+1}^*=I$, then $C_\ell=G_{\ell+1}^{(R)}(I_{n_{\ell+1}}\otimes C_{\ell+1})$, so $C_\ell C_\ell^*=G_{\ell+1}^{(R)}(I_{n_{\ell+1}}\otimes C_{\ell+1}C_{\ell+1}^*)G_{\ell+1}^{(R)*}=G_{\ell+1}^{(R)}G_{\ell+1}^{(R)*}=I$ by right-isometry. Forward induction similarly gives orthonormal columns for each prefix interface: $L_0=[1]$ and $L_j=(L_{j-1}\otimes I_{n_j})G_j^{(L)}$. Since $L_{j-1}^*L_{j-1}=I$, $(L_{j-1}\otimes I_{n_j})^*(L_{j-1}\otimes I_{n_j})=I$, so $L_j^*L_j=G_j^{(L)*}G_j^{(L)}=I$. When the right-to-left sweep processes cut $k$, cores $1,\ldots,k$ still have that left gauge and cores $k+2,\ldots,d$ have the right gauge. The current cut unfolding is $L_kM_{k+1}J$, where $M_{k+1}$ is core $G_{k+1}$ reshaped with row index the incoming bond and column index $(i_{k+1},\alpha_{k+1})$, and $J=I_{n_{k+1}}\otimes R_{k+1}^*$. Since $R_{k+1}^*R_{k+1}=I$, $JJ^*=I$. The local SVD truncation replaces $M_{k+1}$ by $M_{k+1}V_qV_q^*$, where $V_q$ has the retained right singular vectors, so the full unfolding changes from $L_kM_{k+1}J$ to $L_kM_{k+1}V_qV_q^*J=(L_kM_{k+1}J)(J^*V_qV_q^*J)$. Since $JJ^*=I$ and $V_q^*V_q=I$, $J^*V_qV_q^*J$ is the orthogonal projection onto $T_k=\operatorname{ran}(J^*V_q)$, a subspace of the suffix modes $k+1,\ldots,d$. Thus the resulting tensor is the projection onto $S_k=\mathbb F^{n_1\times\cdots\times n_k}\otimes T_k$. With $E=M_{k+1}(I-V_qV_q^*)$, the global residual norm satisfies $\|L_kEJ\|_F^2=\operatorname{tr}(J^*E^*L_k^*L_kEJ)=\operatorname{tr}(E^*EJJ^*)=\|E\|_F^2=\delta_k^2$. At the next cut $k-1$, the right interface $R_k$ has orthonormal columns spanning $T_k$. Its local embedding is $I_{n_k}\otimes R_k$, so every newly retained suffix vector lies in $\operatorname{ran}(I_{n_k}\otimes R_k)=\mathbb F^{n_k}\otimes T_k$. Hence $S_{k-1}\subseteq S_k$. [F1, F2, F3, F5, F6, algebra]

2.1 In full-rank TT-SVD, set $Q_0=[1]$ and recursively $Q_k=(Q_{k-1}\otimes I_{n_k})U_k$ using the left singular vectors retained at cut $k$. Since $Q_{k-1}^*Q_{k-1}=I$ and $U_k^*U_k=I$, the columns of every $Q_k$ are orthonormal. Substituting each exact SVD of the current remainder into the preceding factorization gives $A^{\langle k\rangle}=Q_k\Sigma_kV_k^*$ for each cut. The retained singular values are all positive, so this factorization has rank $r_k$. By step 1.1 no exact TT can have a smaller bond, proving the full-rank characterization. [F4, F6, step 1.1, algebra]

3.1 For TT-SVD, let $S_0=\mathbb F^{n_1\times\cdots\times n_d}$ and, after truncating cut $k$, let $S_k=\operatorname{ran}(Q_k)\otimes\mathbb F^{n_{k+1}\times\cdots\times n_d}$. The retained prefix matrices satisfy $\operatorname{ran}(Q_k)\subseteq\operatorname{ran}(Q_{k-1}\otimes I_{n_k})$, hence $S_k\subseteq S_{k-1}$. At step $k$, the current unfolding is $(Q_{k-1}\otimes I_{n_k})M_k$. If $U_q$ contains the retained left singular vectors, the new unfolding is $(Q_{k-1}\otimes I_{n_k})U_qU_q^*M_k$, the orthogonal projection of the current tensor onto $S_k$. The discarded matrix $M_k-U_qU_q^*M_k$ has squared Frobenius norm $\delta_k^2$ by [F3]; left multiplication by the isometry $Q_{k-1}\otimes I_{n_k}$ preserves that norm by direct expansion of the Frobenius inner product, equivalently [F2]. [F2, F3, F4, F6, step 2.1, algebra]

4.1 In either algorithm, let $A_0=A$ and let $A_j$ be the approximation after the $j$th truncation in execution order. By steps 3.1 and 1.2, each step is an orthogonal projection onto a retained subspace nested inside the preceding one. Therefore $e_j=A_{j-1}-A_j$ is orthogonal to every later increment, which lies in the retained subspace at step $j$. Telescoping gives $A-\widehat A=\sum_j e_j$, an orthogonal sum, and each $\|e_j\|_F$ is the recorded tail for that cut. Hence $\|A-\widehat A\|_F^2=\sum_{k=1}^{d-1}\delta_k^2$. If a zero-rank truncation occurs, the output becomes zero and the unperformed tails are zero, so this same argument includes that branch. If no positive singular value is discarded, every $\delta_k=0$ and the output is exactly $A$. [step 3.1, step 1.2, algebra] ∎
