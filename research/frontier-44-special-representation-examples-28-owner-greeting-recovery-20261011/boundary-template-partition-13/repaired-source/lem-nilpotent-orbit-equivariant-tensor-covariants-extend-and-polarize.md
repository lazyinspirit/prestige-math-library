---
id: lem-nilpotent-orbit-equivariant-tensor-covariants-extend-and-polarize
kind: lemma
title: "Nilpotent-orbit tensor covariants extend and polarize"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 1
deps: [lem-type-a-nilpotent-orbit-closures-are-normal-via-chain-varieties,
       thm-weyls-complete-reducibility-theorem, thm-schur-weyl-double-centralizer,
       lem-normal-domain-implies-s-two, thm-depth-zero-associated-prime-criterion,
       thm-associated-primes-localise, lem-depth-quotient-by-regular-element,
       thm-zero-divisors-on-a-module, lem-finite-prime-avoidance,
       thm-tensor-product-basis-from-bases, thm-nilpotent-jordan-string-basis,
       def-axiom-of-choice,
       def-nilpotent-endomorphism, def-classical-complex-matrix-lie-algebras]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Hanspeter Kraft and Claudio Procesi, Closures of conjugacy classes of matrices are normal, Inventiones Math. 53 (1979) 227-247"
      url: "https://gdz.sub.uni-goettingen.de/download/pdf/PPN356556735_0053/LOG_0017.pdf"
      locator: "Section 6, printed pp. 245-246: extension of equivariant maps from the orbit to its normal closure and the structure of the resulting polynomial covariants End(V) -> End(V^{tensor d}) as polarized permutation contractions. The same argument is expanded locally in owner-category-o-batch17-vust-local-proof.md, Section 5."
    - title: "Jonathan Brundan and Alexander Kleshchev, Schur-Weyl duality for higher levels, Selecta Math. (N.S.) 14 (2008) 1-57 (complete 50-page arXiv article)"
      url: "https://arxiv.org/pdf/math/0605217"
      locator: "Section 2.2-2.3, printed pp. 8-9: the centralizer of the degenerate affine Hecke action in the stable range and its use in the double centralizer statements; the covariant form proved here is the all-Jordan-type converse needed by Theorem 2.4."
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice. Let $e$ be a nilpotent endomorphism of a
finite-dimensional complex vector space $V$, let
$G_e=\{g\in\mathrm{GL}(V):geg^{-1}=e\}$ be its centralizer, and let $d\ge0$.

1. Every $G_e$-fixed endomorphism $B\in\operatorname{End}_{\mathbb C}(V^{\otimes d})$
   is the value at $e$ of a $\mathrm{GL}(V)$-equivariant polynomial map
   $\Phi\colon\operatorname{End}(V)\to\operatorname{End}(V^{\otimes d})$
   (polynomial in the matrix entries of the input, with
   $\Phi(gXg^{-1})=(g^{\otimes d})\Phi(X)(g^{-1})^{\otimes d}$).
2. Every such equivariant polynomial map is a finite sum
   $\Phi(X)=\sum_hc_h\,\sigma_h(X^{h_1}\otimes\cdots\otimes X^{h_d})$ with
   $h_i\ge0$, where $\sigma_h$ is a place permutation of the $d$ tensor
   factors and $c_h$ is an invariant scalar polynomial in $X$ (a polynomial
   in the traces $\operatorname{tr}(X^k)$).

The extension in (1) is proved by Hartogs lifting on the normal codimension-$\ge2$
orbit closure; the structure in (2) is proved by polarization and the
Schur-Weyl description of tensor invariants, not by importing a
first-fundamental-theorem for the full matrix algebra.

## Facts & Assumptions

**Given:** AC; a nilpotent $e$ in $\operatorname{End}(V)$ with $\dim V=N<\infty$ and largest Jordan block $l$ when $V\ne0$, an integer $d\ge0$, the orbit closure $X=\overline{\mathrm{GL}(V)\cdot e}$ with dense orbit $O=\mathrm{GL}(V)\cdot e$, and the centralizer $G_e$.

[F1] $X$ is the spectrum of a reduced irreducible normal domain $A=\mathbb C[X]$, and $O$ is its dense open orbit; $G_e$ is the unit group of the full finite-dimensional associative centralizer algebra $C_e=\operatorname{End}_{\mathbb C[e]}(V)=\{b:be=eb\}$. Its units are exactly $\{b\in C_e:\det b\ne0\}$: if $b$ commutes with $e$ and is invertible on $V$, its inverse also commutes with $e$. This is a nonempty open subset of the affine vector space $C_e$, containing the identity, so $G_e$ is smooth, irreducible and connected; no product-of-matrix-algebras identification is needed ([[lem-type-a-nilpotent-orbit-closures-are-normal-via-chain-varieties]], [[def-nilpotent-endomorphism]], [[thm-nilpotent-jordan-string-basis]]).

[F2] Hartogs lemma for a normal $S_2$ domain $A$: a fraction $f\in\operatorname{Frac}(A)$ regular in codimension $1$ lies in $A$. More precisely, if $f$ is regular off a closed subset of codimension $\ge2$, then $f\in A$. Proof ingredients: set $J=\{a\in A:af\in A\}$; $J_{\mathfrak p}=A_{\mathfrak p}$ for every height-one prime; if $0\ne a\in J$ then every associated prime of $A/(a)$ has height $1$ by the normal $S_2$ property and the depth criterion; prime avoidance produces $b\in J$ avoiding those primes; from $b(af)=a(bf)$ and regularity of $b$ modulo $a$ one gets $af\in aA$, and cancellation gives $f\in A$ ([[lem-normal-domain-implies-s-two]], [[thm-depth-zero-associated-prime-criterion]], [[thm-associated-primes-localise]], [[lem-depth-quotient-by-regular-element]], [[thm-zero-divisors-on-a-module]], [[lem-finite-prime-avoidance]]).

[F3] Complete reducibility: every finite-dimensional rational $\mathrm{GL}(V)$-module is a direct sum of irreducibles; hence a quotient invariant vector has an invariant lift, and invariant tensors in mixed tensor powers of $V$ are spanned by permutation contractions ([[thm-weyls-complete-reducibility-theorem]], [[thm-schur-weyl-double-centralizer]]).

[F4] The trace form $\operatorname{tr}(XY)$ on $\operatorname{End}(V)$ is symmetric and nondegenerate, and a pure tensor basis of a tensor product contains a basis of the invariants it is paired with ([[def-classical-complex-matrix-lie-algebras]], [[thm-tensor-product-basis-from-bases]]).



## Proof

**Proof technique:** direct.

**Given:** The data of [F1]-[F4]: the nilpotent $e$, the normal orbit closure $X$ with dense orbit $O$, the connected centralizer $G_e$, the degree $d$, and a $G_e$-fixed $B\in\operatorname{End}(V^{\otimes d})$.

1.1 **The zero-dimensional case.** If $V=0$, its orbit closure is a point and its boundary is empty by [F1]. For $d=0$, $V^{\otimes d}=\mathbb C$ and every fixed operator is a scalar, extended by the constant polynomial map; the empty permutation and empty tensor product give the asserted normal form. For $d>0$, $V^{\otimes d}=0$ and its endomorphism space has only the zero operator, extended by the zero map; the normal form is the empty sum. Thus both assertions hold without a largest Jordan block. Henceforth $V\ne0$, so its largest block length $l$ exists. [F1, construct, algebra]

1.2 Hartogs lifting. Let $A=\mathbb C[X]$ and let $f\in\operatorname{Frac}(A)$ be regular on $O$, hence regular off a closed subset of $X\setminus O$; since $\partial X$ has codimension $\ge2$ in $X$ by the normality lemma [F1], $f$ is regular in codimension $1$ and therefore extends to $A$ by [F2]. Applying this coordinatewise to maps into a finite-dimensional vector space shows that every regular map $O\to W$ into a finite-dimensional vector space extends uniquely to a regular map $X\to W$. [F1, F2, algebra]

1.3 The equivariant map on $O$. Fix $B\in\operatorname{End}(V^{\otimes d})^{G_e}$ and define, for $g\in\mathrm{GL}(V)$, $F(g\,e\,g^{-1}):=(g^{\otimes d})\,B\,(g^{-1})^{\otimes d}\in\operatorname{End}(V^{\otimes d})$. This is well defined: if $g_1e g_1^{-1}=g_2eg_2^{-1}$, then $g_2^{-1}g_1\in G_e$, so $(g_2^{-1}g_1)^{\otimes d}B(g_2^{-1}g_1)^{-\otimes d}=B$ by $G_e$-invariance, which rearranges to $(g_1^{\otimes d})B(g_1^{-1})^{\otimes d}=(g_2^{\otimes d})B(g_2^{-1})^{\otimes d}$. The map $F$ is $\mathrm{GL}(V)$-equivariant by construction: $F(hXh^{-1})=(h^{\otimes d})F(X)(h^{-1})^{\otimes d}$ for $X\in O$. [F1, construct, algebra]

2.1 Regularity of $F$ on $O$. The ranks of $X^0,X^1,\dots,X^{l-1}$ are constant on $O$. Cover $O$ by open charts where fixed minors used to select bases of the kernels and images, their quotient complements and Jordan top vectors are nonzero. Gaussian elimination on such a chart gives a Jordan basis for $X$ with entries regular in $X$. Let $g(X)$ carry a fixed Jordan basis for $e$ to this chosen Jordan basis for $X$, with the same ordered string lengths. Then $g(X)e g(X)^{-1}=X$. Restricting to the open chart where the Jordan-basis determinant is nonzero makes both $g(X)$ and $g(X)^{-1}$ regular, since their entries have only the fixed nonvanishing minors and determinant as denominators. Thus $X\mapsto(g(X)^{\otimes d})B(g(X)^{-1})^{\otimes d}$ is the map of step 1.3 and is regular on each chart. These charts cover $O$; on overlaps $g_2(X)^{-1}g_1(X)\in G_e$, so the expressions agree by $G_e$-invariance of $B$. Hence $F$ is regular on $O$. [F1, step 1.3, algebra, construct]

3.1 Extension to $X$. By steps 1.2 and 2.1 the map $F\colon O\to\operatorname{End}(V^{\otimes d})$ is a regular equivariant map on the dense orbit; by step 1.2 it extends uniquely to a regular map $F\colon X\to\operatorname{End}(V^{\otimes d})$. Since $\mathbb C[X]=\mathbb C[\operatorname{End}(V)]/I(X)$ and $X$ is an affine closed subset of the affine space $\operatorname{End}(V)$, the coordinate functions of $F$ are restrictions of polynomial functions on $\operatorname{End}(V)$; fixing representatives gives a polynomial map $\Phi\colon\operatorname{End}(V)\to\operatorname{End}(V^{\otimes d})$ extending $F$. [F2, step 1.2, step 2.1, algebra]

4.1 Equivariance of $\Phi$. For fixed $g\in\mathrm{GL}(V)$, both sides of $\Phi(gXg^{-1})=(g^{\otimes d})\Phi(X)(g^{-1})^{\otimes d}$ are polynomial maps in $X$; they agree on the dense orbit $O$ by step 1.3 and hence on all of $X$. Consequently the class of $\Phi$ in the finite-dimensional space of polynomial maps $\operatorname{End}(V)\to\operatorname{End}(V^{\otimes d})$ of degree at most $K$ (for $K$ at least the degree of $\Phi$), modulo the $\mathrm{GL}(V)$-stable subspace of maps vanishing on $X$, is invariant for the conjugation action. By the invariant-lifting property of complete reducibility [F3], this class has an invariant representative $\Phi'$ of degree at most $K$; then $\Phi'$ is a $\mathrm{GL}(V)$-equivariant polynomial map on $\operatorname{End}(V)$ agreeing with $F$ on $X$, and $\Phi'(e)=F(e)=B$ since $e\in O$, which is assertion (1). [F3, step 1.3, step 3.1, algebra]

5.1 Polarization. Write $\Phi=\sum_k\Phi_k$ for its homogeneous components of degree $k$; each $\Phi_k$ is equivariant. Fix $k$ and assume for the structure argument that $\Phi$ is homogeneous of degree $k$. Polarize the $k$ matrix variables $X_1,\dots,X_k$ of $\Phi$ and pair the output in $\operatorname{End}(V^{\otimes d})$ with $d$ independent matrices $Y_1,\dots,Y_d$ using the nondegenerate trace pairing on each tensor factor; this produces a multilinear $\mathrm{GL}(V)$-invariant $P(X_1,\dots,X_k;Y_1,\dots,Y_d)\in\mathbb C$ in $(k+d)$ matrix arguments. [F4, step 4.1, algebra]

6.1 Tensor invariants are permutation contractions. By the Schur-Weyl description [F3], every multilinear invariant of the matrix arguments is a linear combination of contractions: each argument contributes one upper and one lower index, an invariant pairs each upper index with a lower index of another argument, and the invariant is a product over the cycles of the resulting permutation of traces of the corresponding cyclically ordered product of matrices. [F3, step 5.1, algebra]

7.1 Covariant normal form. Depolarize in the $k$ identical variables $X_i=X$ and read each contraction cycle. A cycle that uses only $X$-arguments contributes a scalar invariant polynomial in $X$; a cycle that uses some $Y$-arguments alternates blocks of $X$'s and single $Y$'s, so its trace is precisely the trace pairing of $Y_1\otimes\cdots\otimes Y_d$ with a place permutation of $X^{h_1}\otimes\cdots\otimes X^{h_d}$. By nondegeneracy of the trace pairing, the operator identity $\Phi(X)=\sum_hc_h(X)\,\sigma_h(X^{h_1}\otimes\cdots\otimes X^{h_d})$ follows, with $h_i\ge0$, $\sigma_h$ a place permutation and $c_h$ a scalar invariant polynomial (a polynomial in the traces $\operatorname{tr}(X^m)$); summing over the homogeneous components gives assertion (2). [F4, step 5.1, step 6.1, algebra]

8.1 Evaluation at $e$. Since $e^l=0$ for the largest Jordan block length $l$ of $e$, evaluating the normal form at $X=e$ kills every term with some $h_i\ge l$; the surviving terms are place permutations applied to a tensor product of nonnegative powers $e^{h_1}\otimes\cdots\otimes e^{h_d}$ multiplied by the scalar invariants $c_h(e)$, which are ordinary numbers depending only on the Jordan type of $e$ (that is, on the list of eigenvalues $\operatorname{tr}(e^m)$, all zero for nilpotent $e$, so $c_h(e)=c_h(0)$). This gives the concrete description of the $G_e$-fixed endomorphisms used by the double centralizer theorem. [step 7.1, algebra] ∎

## Remarks

- The extension step is exactly where the normality of the orbit closure is consumed: without the codimension-two Hartogs property the $G_e$-fixed operator need not extend past the orbit, and the double centralizer statement would only hold in the stable range.

- The scalar invariant coefficients $c_h$ lie in the polynomial ring generated by the traces of powers of $X$; evaluating at nilpotent $e$ specializes them to rational numbers depending only on the Jordan type, not on the chosen orbit point.
