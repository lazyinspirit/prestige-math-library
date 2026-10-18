---
id: thm-real-spin-modules-and-real-types
kind: theorem
title: Real Spin modules from the even Clifford algebra
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: pin-spin-and-clifford-module-representations
dependency_level: 7
deps:
  - lem-real-orthogonal-space-preliminaries
  - thm-clifford-pbw-basis-and-associated-graded
  - lem-normalized-pin-spin-product-and-norm-laws
  - lem-clifford-even-subalgebra-signature-identification
  - thm-real-complex-clifford-algebra-classification
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
    - title: "Konstantin Wernli, Lecture Notes on Spin Geometry, §§1.5.1–1.5.4, pp. 26–33"
      url: https://arxiv.org/pdf/1911.09766
    - title: "Jean Gallier, Clifford Algebras, Clifford Groups, and a Generalization of the Quaternions: The Pin and Spin Groups, Chapter 1"
      url: https://arxiv.org/pdf/0805.0311
---

## Statement

Let $(V,B)$ be a finite-dimensional nondegenerate real quadratic space. The real linear span of $\operatorname{Spin}_{\mathrm{full}}(V,Q)$ inside $\mathrm{Cl}(V,Q)$ is $\mathrm{Cl}^0(V,Q)$. In particular, a subspace of a Clifford module is Spin-invariant exactly when it is a $\mathrm{Cl}^0$-submodule, and the two commutants agree. Here a **Clifford spinor representation** of full-even Spin means the restriction of a finite-dimensional unital $\mathrm{Cl}^0(V,Q)$-module. This does not mean an arbitrary group representation of Spin. Use the PA-04 even-Clifford classification in [A1] and [L1]. If

$$\mathrm{Cl}^0(V,Q)\cong\prod_{j=1}^s M_{r_j}(D_j),\qquad D_j\in\{\mathbb R,\mathbb C,\mathbb H\},$$

then the irreducible finite-dimensional real Clifford spinor representations are precisely one column module $D_j^{r_j}$ for each factor. Its real dimension is $r_j\dim_{\mathbb R}D_j$ and its commuting endomorphism algebra is $D_j^{\mathrm{op}}$, isomorphic to $D_j$. Distinct factors, including split factors, give inequivalent Spin modules. The module type is determined by the even algebra, not automatically by the full Clifford algebra.

In dimensions $0$ and $1$, the even Clifford algebra is $\mathbb R$ and there is one one-dimensional real Clifford spinor representation. In dimension $2$, definite signatures have even algebra $\mathbb C$ and one two-dimensional real Clifford spinor representation of complex type; signature $(1,1)$ has even algebra $\mathbb R\oplus\mathbb R$ and two inequivalent one-dimensional real Clifford spinor representations.

## Facts & Assumptions

**Given:** The real Clifford convention $v^2=Q(v)$, the full-even Spin group, and the PA-04 classification suppliers.

[F1] Every finite-dimensional nondegenerate real quadratic space has a basis of pairwise orthogonal anisotropic vectors ([[lem-real-orthogonal-space-preliminaries]]). For any chosen ordered basis, its increasing square-free monomials form a basis of the Clifford algebra, and the even part is spanned by the even-length monomials ([[thm-clifford-pbw-basis-and-associated-graded]]).

[F2] Full-even Spin consists of even products of normalized anisotropic vectors; every such product lies in $\mathrm{Cl}^0$ ([[lem-normalized-pin-spin-product-and-norm-laws]]).

[A1] The real classification theorem [[thm-real-complex-clifford-algebra-classification]] states the real matrix-algebra type of $\mathrm{Cl}_{p,q}$ for every nondegenerate signature under $v^2=Q(v)$.

[L1] The even-subalgebra identification [[lem-clifford-even-subalgebra-signature-identification]] states $\mathrm{Cl}_{p,q}^0\cong\mathrm{Cl}_{q,p-1}$ for $p>0$ and $\mathrm{Cl}_{0,q}^0\cong\mathrm{Cl}_{0,q-1}$ for $p=0,q>0$.

## Proof


**Proof technique:** direct.

1.1 Choose a pairwise orthogonal anisotropic basis $e_1,\ldots,e_n$ by [F1], and put $u_i=e_i/\sqrt{|Q(e_i)|}$, so each $u_i$ is normalized. By PBW in this ordered basis, every even basis monomial $e_{i_1}\cdots e_{i_{2k}}$ is a nonzero real scalar multiple of the even normalized-vector product $u_{i_1}\cdots u_{i_{2k}}$. That product belongs to full-even Spin, so the real span of full-even Spin contains a basis of $\mathrm{Cl}^0$. Conversely every full-even Spin element belongs to $\mathrm{Cl}^0$. Therefore $\operatorname{span}_{\mathbb R}(\operatorname{Spin}_{\mathrm{full}})=\mathrm{Cl}^0$. A real subspace is Spin-invariant exactly when it is invariant under this linear span, so a given $\mathrm{Cl}^0$-module and its Spin restriction have the same invariant subspaces and commutants. Moreover any Spin intertwiner between two such restrictions intertwines the spanning algebra; hence their module-isomorphism and Spin-isomorphism classes agree, and an extending algebra action is uniquely determined. [F1, F2, construct, algebra]

1.2 For a division algebra $D$ and $r\ge1$, the standard column module $D^r$ is simple over $M_r(D)$: from any nonzero column, matrix units move a nonzero coordinate to any position and left multiplication by $D$ produces arbitrary coordinates. Conversely, if $M$ is a finite-dimensional simple left $M_r(D)$-module, some diagonal matrix unit $E_{ii}$ acts nontrivially; matrix units transfer a nonzero vector to $E_{11}M$. This is a left $D$-module. If it had dimension greater than one, choose a proper nonzero left $D$-subspace $W\subset E_{11}M$ and form $N=\sum_{i=1}^r E_{i1}W$. Matrix multiplication shows $N$ is an $M_r(D)$-submodule, and $E_{11}N=W$; hence $N$ is nonzero and proper, contradicting simplicity of $M$. Thus $E_{11}M\cong D$, and $D^r\to M$, $(d_i)\mapsto\sum_i E_{i1}(d_i)v$, is a nonzero module map; simplicity of $D^r$ makes it an isomorphism. [given, construct, algebra]

2.1 An endomorphism of $D^r$ commuting with $M_r(D)$ must commute with every $E_{ij}$ and every diagonal scalar matrix; it is therefore the same right multiplication by some $d\in D$ in every coordinate. The commutant is $D^{\mathrm{op}}$. For a product of matrix algebras, the central identity idempotents split every module; in a simple module exactly one factor acts nontrivially, so each factor gives one simple type and distinct factors give inequivalent modules. [step 1.2, algebra]

3.1 Applying [L1] to identify the even algebra and [A1] to classify its real matrix factors, the matrix-algebra result of steps 1.2–2.1 gives exactly the column modules, dimensions, and commutant types stated. By step 1.1 these are exactly the irreducible Clifford spinor restrictions to full-even Spin. This calculation does not identify the type of a full Clifford module without computing its even-subalgebra factors. [A1, L1, step 1.1, step 1.2, step 2.1]

4.1 In dimensions $0$ and $1$, the even monomials are just scalars, so $\mathrm{Cl}^0\cong\mathbb R$. In dimension $2$, put $E=e_1e_2$ for an orthogonal basis normalized so that $Q(e_i)=\pm1$. Such normalization is obtained by dividing each anisotropic basis vector by $\sqrt{|Q(e_i)|}$. Then $E^2=-Q(e_1)Q(e_2)$ and $\mathrm{Cl}^0=\mathbb R\oplus\mathbb R E$. If the signature is definite, $E^2=-1$ and this is $\mathbb C$; its standard real module has dimension $2$ and commutant $\mathbb C$. If the signature is $(1,1)$, $E^2=1$ and $\mathbb R[E]/(E^2-1)\cong\mathbb R\oplus\mathbb R$ via $a+bE\mapsto(a+b,a-b)$, giving two one-dimensional real modules. Step 1.1 transfers these classifications to Spin. [F1, F2, step 1.1, step 1.2, algebra] ∎

## Remarks

The signature-by-signature dimensions and types use the actual PA-04 even-algebra identifications and real classification table. These draft suppliers and this draft theorem still require the ordinary independent review and native owner reconciliation.

The restriction to Clifford spinor representations is essential: the trivial one-dimensional representation of $\operatorname{Spin}(2)$ does not extend to a unital real $\mathrm{Cl}^0_{2,0}\cong\mathbb C$ action, since a real scalar representing $i$ would have to square to $-1$. The compact complete-reducibility theorem in [[thm-complex-spin-modules-and-compact-reducibility]] separately treats all continuous finite-dimensional complex group representations.
