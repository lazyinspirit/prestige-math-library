---
id: thm-qc-diamond-norm-ancilla-dimension-bound
kind: theorem
title: "Diamond Norm Ancilla Dimension Bound"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 4
deps: ["def-qc-diamond-norm", "thm-singular-value-decomposition", "def-adjoint-of-a-linear-map-between-inner-product-spaces", "def-matrix-product-and-identity-matrix", "def-trace-of-an-endomorphism", "def-qc-tensor-register-and-permutation", "def-qc-tensor-map", "thm-qc-tensor-map-composition-and-adjoint", "lem-qc-tensor-products-of-operator-matrix-units-form-a-basis", "thm-heine-borel-rn", "thm-qc-schmidt-decomposition", "thm-qc-trace-norm-duality-and-norm-properties", "cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases", "def-qc-trace-norm"]
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
      locator: "§3.3.2–3.3.4, finite ancilla reduction and norm attainment."
---

## Statement

Let $H,K$ be nonzero finite-dimensional complex Hilbert spaces, $d=\dim H$, and let $\Phi:\mathcal L(H)\to\mathcal L(K)$ be linear. Then
$$\|\Phi\|_\diamond=\|\Phi\otimes\operatorname{id}_{\mathbb C^d}\|_{1\to1},$$
and the latter induced norm is attained on some rank-one operator $R_{x,y}:z\mapsto\langle z,y\rangle_{\rm root}x$ with unit vectors $x,y\in H\otimes\mathbb C^d$.

## Facts & Assumptions

**Given:** Nonzero finite-dimensional $H,K$ and a linear map $\Phi:\mathcal L(H)\to\mathcal L(K)$.

[L1] The trace norm is the sum of singular values; SVD writes $X=\sum_j s_jR_{u_j,v_j}$, where $R_{u,v}(z)=\langle z,v\rangle_{\rm root}u$, $s_j\ge0$, and $\sum_j s_j=\|X\|_1$ ([[def-qc-trace-norm]], [[thm-singular-value-decomposition]]). The QC01 trace-norm definition is present as a draft and agrees with the root first-argument-linear convention.

[L2] Tensor maps act on elementary tensors factorwise, factor permutations reorder product bases, and tensor-map adjoints are factorwise ([[def-qc-tensor-map]], [[def-qc-tensor-register-and-permutation]], [[thm-qc-tensor-map-composition-and-adjoint]]). Products of operator matrix units form a basis of the full tensor-product operator space, so checking the amplification identity on those elementary operators proves it for every input ([[lem-qc-tensor-products-of-operator-matrix-units-form-a-basis]]). The QC02 carriers are present as drafts; step 1.2 proves the singular-value invariance of the two separate isometric embeddings.

[L3] Every vector $x\in H\otimes Z$ has a Schmidt decomposition with at most $\dim H$ terms and orthonormal families in both factors ([[thm-qc-schmidt-decomposition]]). The QC03 theorem body is present as a draft; this proof uses only its finite-rank decomposition.

[L4] The finite trace norm is a norm and satisfies the triangle inequality ([[thm-qc-trace-norm-duality-and-norm-properties]]). For a matrix $A$ of fixed shape $q\times p$, let $m=\min(p,q)$. Its SVD gives $\|A\|_1=\sum_{j=1}^m s_j(A)$ and $\sum_j s_j(A)^2=\operatorname{tr}(A^*A)=\sum_{i,j}|A_{ij}|^2$. Since each singular value is at most $(\sum_j s_j(A)^2)^{1/2}$, $\|A\|_1\le m(\sum_{i,j}|A_{ij}|^2)^{1/2}$. The norm triangle inequality therefore gives, for matrices $A,B$ of the same shape, $|\|A\|_1-\|B\|_1|\le m(\sum_{i,j}|A_{ij}-B_{ij}|^2)^{1/2}$. This finite-coordinate bound proves the continuity used below; the singular-value and trace-norm formulas are [[thm-singular-value-decomposition]] and [[def-qc-trace-norm]].

[F1] A nonempty closed bounded subset of $\mathbb R^n$ is compact ([[thm-heine-borel-rn]]); every finite-dimensional complex inner-product space has an orthonormal basis ([[cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]]).

## Proof


1.1 For fixed $r$, let $M_r$ be the maximum of $\|(\Phi\otimes\operatorname{id}_r)(R_{u,v})\|_1$ over unit vectors $u,v\in H\otimes\mathbb C^r$. Their unit spheres are compact by [F1]. In orthonormal coordinates each entry of $R_{u,v}$ is a finite product of coordinates of $u$ and conjugates of coordinates of $v$; applying the finite linear map $\Phi\otimes\operatorname{id}_r$ remains continuous, and [L4] makes the output trace norm continuous. Hence the maximum exists. By [L1], every $X$ with $\|X\|_1\le1$ has an SVD $X=\sum_js_jR_{u_j,v_j}$ with unit $u_j,v_j$, $s_j\ge0$, and $\sum_js_j\le1$. Linearity and the trace-norm triangle inequality give $\|(\Phi\otimes\operatorname{id}_r)(X)\|_1\le\sum_js_jM_r\le M_r$. For unit $u,v$, the adjoint calculation gives $R_{u,v}^*R_{u,v}=R_{v,v}$, a rank-one orthogonal projection, so its singular values are one $1$ and the remaining zeros; hence $\|R_{u,v}\|_1=1$. Thus the induced norm equals $M_r$ and is attained. [given, L1, L4, F1, algebra]

1.2 Now take any finite ancilla $Z$ and unit vectors $x,y\in H\otimes Z$. By [L3], their Schmidt ranks $a,b$ are at most $\min(d,\dim Z)$. Let $m=\max(a,b)$ and pad each Schmidt list to an orthonormal $m$-tuple, obtaining $x',y'\in H\otimes\mathbb C^m$ by replacing the respective ancilla Schmidt vectors by the standard basis vectors and retaining the Schmidt coefficients and $H$-vectors. Define $V_x,V_y:\mathbb C^m\to Z$ to send that basis to the respective padded orthonormal ancilla families; thus $x=(I_H\otimes V_x)x'$ and $y=(I_H\otimes V_y)y'$. The tensor-map definition and product pairing show each map $I\otimes V_x$ and $I\otimes V_y$ is an isometry. Factor permutations are unitary because they carry an orthonormal product basis bijectively to another such basis. Thus $$(\Phi\otimes\operatorname{id}_Z)(R_{x,y})=(I_K\otimes V_x)(\Phi\otimes\operatorname{id}_m)(R_{x',y'})(I_K\otimes V_y)^*.$$ To verify the equality, expand operators in elementary tensors $A\otimes B$: $\Phi\otimes\operatorname{id}$ sends this to $\Phi(A)\otimes B$, and the two isometries send each ancilla matrix unit $R_{e_i,e_j}$ to $R_{z_i,w_j}$. For isometries $U,V$, $(UA_0V^*)^*(UA_0V^*)=VA_0^*A_0V^*$. The positive eigenvalues of this operator are those of $A_0^*A_0$: an eigenvector $z$ with positive eigenvalue maps to $Vz$, and any eigenvector with positive eigenvalue must lie in the range of $V$ because the operator vanishes on its orthogonal complement. Hence left/right isometric embeddings preserve the nonzero singular values and trace norm. Embedding $\mathbb C^m$ isometrically into $\mathbb C^d$ on both sides is the same case, so the original output has trace norm at most $\|\Phi\otimes\operatorname{id}_d\|_{1\to1}$. [given, L2, L3, algebra]

2.1 By step 1.1, the induced norm for each $Z$ is attained by a rank-one unit input, so step 1.2 gives $\|\Phi\otimes\operatorname{id}_Z\|_{1\to1}\le\|\Phi\otimes\operatorname{id}_d\|_{1\to1}$. Taking the supremum over all finite $Z$ gives $\|\Phi\|_\diamond\le\|\Phi\otimes\operatorname{id}_d\|_{1\to1}$. The reverse inequality holds because $r=d$ is one of the ancilla dimensions in the supremum. Step 1.1 at $r=d$ supplies an attaining rank-one operator. [step 1.1, step 1.2, given] ∎

