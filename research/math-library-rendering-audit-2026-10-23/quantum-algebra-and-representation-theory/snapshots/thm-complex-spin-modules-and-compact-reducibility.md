---
id: thm-complex-spin-modules-and-compact-reducibility
kind: theorem
title: Complex spinor modules and complete reducibility for Euclidean Spin
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: pin-spin-and-clifford-module-representations
dependency_level: 7
deps:
  - lem-real-orthogonal-space-preliminaries
  - thm-clifford-pbw-basis-and-associated-graded
  - lem-normalized-pin-spin-product-and-norm-laws
  - thm-real-pin-spin-image-kernel-and-compactness
  - def-real-clifford-group-and-normalized-pin-spin
  - lem-clifford-even-subalgebra-signature-identification
  - thm-real-complex-clifford-algebra-classification
  - def-axiom-of-choice
  - thm-finite-dimensional-compact-group-representations-are-completely-reducible
  - def-finite-dimensional-representation-of-a-group-over-a-field
justified_by: []
verification:
  precheck: pass
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "M. F. Atiyah, R. Bott, and A. Shapiro, Clifford Modules, Part I"
      url: https://www.math.ens.psl.eu/~benoist/refs/ABS.pdf
    - title: "Konstantin Wernli, Lecture Notes on Spin Geometry, §§1.5.1–1.5.3, pp. 26–31"
      url: https://arxiv.org/pdf/1911.09766
    - title: "Jean Gallier, Clifford Algebras, Clifford Groups, and a Generalization of the Quaternions: The Pin and Spin Groups, §§1.5–1.8"
      url: https://arxiv.org/pdf/0805.0311
---

## Statement

Use the complex PA-04 Clifford classification in [A1] and [A2]. For the complexification of a positive-definite real $n$-space, the irreducible Clifford spinor modules and their restrictions to full-even Spin are as follows:

- If $n=2m$ with $m\ge1$, the unique irreducible complex Clifford module has dimension $2^m$; its restriction to Spin is $S^+\oplus S^-$, with two inequivalent irreducible half-spin modules of dimension $2^{m-1}$ each.
- If $n=2m+1$, there are two inequivalent irreducible complex Clifford modules, each of dimension $2^m$; their restrictions to Spin are isomorphic to the same irreducible complex Spin module of dimension $2^m$.
- For $n=0$, there is one one-dimensional complex Clifford spinor; for $n=1$, there are two one-dimensional Clifford spinors and their restrictions to $\operatorname{Spin}(1)=\{\pm1\}$ agree.

Separately, assuming AC, every finite-dimensional continuous complex representation of the compact Hausdorff group $\operatorname{Spin}(n)$ is completely reducible. This applies to all finite-dimensional continuous representations, not only the spinor modules above.

## Facts & Assumptions

**Given:** The Euclidean Clifford algebra, its full-even Spin group, AC, and the complex PA-04 classification suppliers.

[F1] Every finite-dimensional nondegenerate real quadratic space has a pairwise orthogonal anisotropic basis ([[lem-real-orthogonal-space-preliminaries]]). The PBW theorem applies to ordered bases over both $\mathbb R$ and $\mathbb C$, so the even monomials form bases of the real and complex even Clifford algebras ([[thm-clifford-pbw-basis-and-associated-graded]]).

[F2] The real Spin group in definite signature is compact, and its twisted map is onto $SO(n)$ ([[thm-real-pin-spin-image-kernel-and-compactness]]).

[F3] Full-even Spin consists of even products of normalized anisotropic real vectors, with scalar $-1$ included when $V=0$ ([[lem-normalized-pin-spin-product-and-norm-laws]]).

[F4] Every continuous finite-dimensional complex representation of a compact Hausdorff group is completely reducible under AC ([[thm-finite-dimensional-compact-group-representations-are-completely-reducible]]).

[F5] A finite-dimensional representation is a group homomorphism into the invertible linear maps ([[def-finite-dimensional-representation-of-a-group-over-a-field]]).

[A1] The classification theorem [[thm-real-complex-clifford-algebra-classification]] states $\mathrm{Cl}_{2m}(\mathbb C)\cong M_{2^m}(\mathbb C)$ and $\mathrm{Cl}_{2m+1}(\mathbb C)\cong M_{2^m}(\mathbb C)\oplus M_{2^m}(\mathbb C)$.

[A2] The even-subalgebra identification [[lem-clifford-even-subalgebra-signature-identification]] states $\mathrm{Cl}_{n}(\mathbb C)^0\cong\mathrm{Cl}_{0,n-1}(\mathbb C)$ for $n>0$. Together [A1] and [A2] yield the even matrix-factor sizes used below.

[A3] Assume the Axiom of Choice. Its exact use is the compact-group complete-reducibility supplier [F4], which obtains normalized Haar measure from AC ([[def-axiom-of-choice]]).

## Proof


**Proof technique:** direct.

1.1 Choose a pairwise orthogonal anisotropic real basis $e_1,\ldots,e_n$ by [F1], and put $u_i=e_i/\sqrt{|Q(e_i)|}$. The ordered monomials in the $e_i$ are a real PBW basis of the real Clifford algebra and a complex PBW basis after complexification. The natural scalar-extension map $\mathrm{Cl}_{\mathbb R}(V,Q)\otimes_{\mathbb R}\mathbb C\to\mathrm{Cl}_{\mathbb C}(V\otimes_{\mathbb R}\mathbb C,Q_{\mathbb C})$, induced by the common generator relations, matches these monomials, so is an isomorphism and embeds the real Clifford algebra into its complexification. Viewed as a complex basis, the $e_i$ have the same squares and remain pairwise orthogonal. Each even PBW basis monomial $e_{i_1}\cdots e_{i_{2k}}$ is the nonzero real scalar $\prod_j\sqrt{|Q(e_{i_j})|}$ times the product $u_{i_1}\cdots u_{i_{2k}}$. This product belongs to the real full-even Spin group by [F3] and hence to the complexified Clifford algebra. Thus the complex span of full-even Spin contains a basis of $\mathrm{Cl}^0$. Conversely every real Spin element is even, so its complex span lies in $\mathrm{Cl}^0$. Therefore these complex linear spans are equal, and a complex subspace is Spin-invariant exactly when it is a $\mathrm{Cl}^0$-submodule. [F1, F3, construct, algebra]

1.2 For a complex matrix algebra $M_r(\mathbb C)$, every module is the sum of its diagonal matrix-unit subspaces $E_{ii}M$, and $E_{i1}$ identifies these subspaces with $E_{11}M$. Consequently $M\cong\mathbb C^r\otimes_{\mathbb C}E_{11}M$ with the algebra acting on the first factor. Its simple module is therefore the column $\mathbb C^r$, and each finite-dimensional module is a sum of columns. For a product of matrix algebras the central factor idempotents split the module, and simples supported on different factors are inequivalent. This is a complex-linear calculation, separate from the real commutant types. [given, construct, algebra]

2.1 If $n=2m\ge2$, [A1] gives one full Clifford simple of complex dimension $2^m$, and [A1]–[A2] identify the even algebra with two matrix factors of size $2^{m-1}$. Set $\omega=i^m u_1\cdots u_{2m}$ using the normalized vectors of step 1.1. Since $Q(u_j)=1$, the Clifford relations give $\omega^2=(-1)^m(-1)^{m(2m-1)}=1$, and $\omega$ commutes with every even monomial. PBW makes $\omega$ nonscalar, so $p_\pm=(1\pm\omega)/2$ are nonzero orthogonal central idempotents of $\mathrm{Cl}^0$. An odd unit vector anticommutes with $\omega$ and conjugates $p_+$ to $p_-$. The full Clifford module is faithful because $\mathrm{Cl}_{2m}(\mathbb C)$ is a simple matrix algebra; hence both idempotents act nontrivially. Each factor therefore contributes at least one simple module of dimension $2^{m-1}$; their dimensions already sum to $2^m$, so each occurs exactly once. Step 1.1 makes these two summands the inequivalent half-spin modules. [A1, A2, F1, step 1.1, step 1.2, algebra]

2.2 If $n=2m+1$, [A1] gives two full Clifford simple modules of dimension $2^m$, and [A1]–[A2] identify a single even matrix factor of size $2^m$. Each full module restricts nontrivially to that even algebra, and its dimension equals the unique simple even-module dimension. Hence each restriction is the unique irreducible even module; by step 1.1 the two Spin restrictions are isomorphic irreducible modules. For $n=0$, $\mathrm{Cl}^0=\mathbb C$ and the spinor has dimension one. For $n=1$, $\mathrm{Cl}^0=\mathbb C$ while the full algebra has two one-dimensional simples, so both restrict to the same one-dimensional Spin module. [A1, A2, F1, step 1.1, step 1.2, algebra]

3.1 By [F2], $\operatorname{Spin}(n)$ is a compact subgroup of a finite-dimensional Hausdorff real algebra, hence is a compact Hausdorff topological group. For any continuous finite-dimensional complex representation in [F5], [F4] and [A3] give a direct sum of irreducible subrepresentations. [A3, F2, F4, F5, algebra] ∎

## Remarks

The proof uses $\mathrm{Cl}^0$ to determine the Spin commutant and irreducibility. A real or complex type for a full Clifford module cannot be copied to its Spin restriction without this even-algebra calculation. For a nonzero complex vector $v$ with $Q(v)=0$, Clifford multiplication need not be invertible.
