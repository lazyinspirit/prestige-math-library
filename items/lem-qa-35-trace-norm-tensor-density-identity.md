---
id: lem-qa-35-trace-norm-tensor-density-identity
kind: lemma
title: "Trace distance is unchanged by a fixed tensor factor"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 4
deps: ["def-qc-density-operator", "def-qc-trace-distance", "def-qc-tensor-register-and-permutation", "def-qc-tensor-map", "thm-qc-tensor-map-composition-and-adjoint", "lem-qc-tensor-product-basis-and-dimension", "thm-qc-trace-norm-spectral-formula", "thm-non-negative-operator-characterisations", "thm-complex-spectral-theorem-for-normal-endomorphisms", "def-qc-trace-norm", "thm-non-negative-square-root-exists-and-is-unique", "def-trace-of-an-endomorphism", "def-self-adjoint-and-normal-endomorphism"]
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; all distributions, sums, bases, and selection sets are finite."
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information"
      url: https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf
      locator: "§1.1.3 (operator decompositions and norms), §2.1.2 (density operators), §2.3.1 (measurements), and §3.1.1, Theorem 3.4 (binary state discrimination)."
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6"
      url: https://arxiv.org/pdf/1907.09415
      locator: "Chapter 16 §§16.1 and 16.6, PDF pp.147–153; private/public-coin SMP and equality lower-bound context (§16.1), quantum fingerprint construction and SWAP-test analysis (§16.6)."
---

## Statement

For density operators $\rho,\sigma$ on $H$ and $\tau$ on $K$, $D(\rho\otimes\tau,\sigma\otimes\tau)=D(\rho,\sigma)$.

## Facts & Assumptions

**Given:** Finite-dimensional complex inner-product spaces $H,K$, density operators $\rho,\sigma$ on $H$, and a density operator $\tau$ on $K$.

[F1] [[def-qc-density-operator]]: A density operator on $H$ is a non-negative endomorphism $\rho:H\to H$ with $\operatorname{tr}(\rho)=1$.

[F2] [[lem-qc-tensor-product-basis-and-dimension]]: The elementary tensors of the factor bases, ordered lexicographically, form an orthonormal basis of the tensor register, and its dimension is the product of the dimensions.

[F3] [[thm-qc-trace-norm-spectral-formula]]: For every linear map $A:H\to K$, $\|A\|_1=\operatorname{tr}_H(\sqrt{A^*A})$.

[F4] [[thm-non-negative-operator-characterisations]]: A linear endomorphism $T$ of a finite-dimensional real or complex inner-product space is non-negative if and only if some orthonormal basis makes its matrix diagonal with nonnegative real diagonal entries.

[F5] [[def-self-adjoint-and-normal-endomorphism]]: Every self-adjoint endomorphism is normal, because $TT^*=T^2=T^*T$.

[F6] [[thm-complex-spectral-theorem-for-normal-endomorphisms]]: Then $T$ is normal if and only if $V$ has an orthonormal basis consisting of eigenvectors of $T$.

[F7] [[thm-non-negative-square-root-exists-and-is-unique]]: For a non-negative endomorphism $T$ of a finite-dimensional real or complex inner-product space $V$, there exists a unique non-negative operator $R:V\to V$ such that $R^2=T$.

[F8] [[def-qc-trace-distance]]: Their trace distance is $D(\rho,\sigma):=\tfrac12\|\rho-\sigma\|_1$.

[F9] [[def-trace-of-an-endomorphism]]: Choose any ordered basis $\mathcal B$ of $V$ and define the trace by $\operatorname{tr}(T):=\operatorname{tr}([T]_{\mathcal B}^{\mathcal B})$; this is independent of the chosen basis.

[F10] [[def-qc-tensor-map]]: A tensor map is the unique linear map whose action on elementary tensors applies each factor map to its corresponding factor.

[F11] [[thm-qc-tensor-map-composition-and-adjoint]]: Tensor maps preserve factorwise composition and adjoints: $(\bigotimes_k S_k)(\bigotimes_k T_k)=\bigotimes_k(S_kT_k)$ and $(\bigotimes_k T_k)^*=\bigotimes_kT_k^*$.

## Proof

**Proof technique:** direct.

1.1 By [F4], [F2], and [F10], tensor products of orthonormal eigenbases diagonalize the tensor maps $\rho\otimes\tau$ and $\sigma\otimes\tau$ with nonnegative eigenvalues whose sums are $\operatorname{tr}(\rho)\operatorname{tr}(\tau)=1$ and $\operatorname{tr}(\sigma)\operatorname{tr}(\tau)=1$, respectively; hence both are density operators. The difference $\Delta=\rho-\sigma$ is self-adjoint, hence normal by [F5], and has an orthonormal eigenbasis $(e_i)$ with real eigenvalues $\lambda_i$ by [F6]. Choose an orthonormal eigenbasis $(f_j)$ for $\tau$ with eigenvalues $t_j\ge0$ and $\sum_jt_j=1$. [given, F1, F2, F4, F5, F6, F9, F10, choose]

2.1 The product vectors $e_i\otimes f_j$ form an orthonormal basis by [F2], and [F10] shows that $\Delta\otimes\tau$ is diagonal there with real eigenvalues $\lambda_it_j$; therefore it is self-adjoint. In agreement, [F11] gives $(\Delta\otimes\tau)^*=\Delta^*\otimes\tau^*=\Delta\otimes\tau$. Applying the composition rule in [F11], its product with its adjoint is $(\Delta^*\Delta)\otimes(\tau^*\tau)$, diagonal in this basis with entries $(\lambda_it_j)^2$. Its unique nonnegative square root therefore has entries $|\lambda_i|t_j$ by [F7]. The same computation on $(e_i)$ gives $\|\Delta\|_1=\sum_i|\lambda_i|$. Therefore [F3] gives $\|\Delta\otimes\tau\|_1=\sum_{i,j}|\lambda_i|t_j=\sum_i|\lambda_i|=\|\Delta\|_1$. Dividing by two and using [F8] proves $D(\rho\otimes\tau,\sigma\otimes\tau)=D(\rho,\sigma)$. [step 1.1, F2, F3, F7, F8, F10, F11, algebra] ∎
