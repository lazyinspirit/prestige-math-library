---
id: lem-normalized-satake-transform-is-convolution-homomorphism-for-gln
kind: lemma
title: Normalized Satake transform preserves convolution on GL(n)
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
- def-spherical-hecke-algebra-and-normalized-satake-transform-for-gln
- lem-gln-local-iwasawa-and-cartan-decompositions
- def-axiom-of-choice
sources:
  references:
  - title: Masao Oi, Introduction to the Local Langlands Correspondence, §§8.2, 11.1–11.2
    url: https://masaooi.github.io/LLC.pdf
  - title: W. Casselman, Introduction to the Theory of Admissible Representations of p-adic Reductive Groups (1995 draft), §§2.1–2.2
    url: https://www.math.ubc.ca/~cass/research/pdf/p-adic-book.pdf
proof_strategy: direct
---
## Statement

Assume the Axiom of Choice and the local data with measures fixed in the spherical Hecke definition. The raw normalized Satake expression $\mathcal S_0f(t)=\delta(t)^{1/2}\int_U f(tu)\,du$ is invariant under $T\cap K$ and has finite support on $T/(T\cap K)$. Write $\mathcal Sf$ for the resulting Laurent polynomial under the exponent identification in the definition. Then
$$
\mathcal S(f_1*f_2)=\mathcal Sf_1\,\mathcal Sf_2,\qquad \mathcal S(1_K)=1.
$$

## Statement references

[[def-spherical-hecke-algebra-and-normalized-satake-transform-for-gln]]

[[lem-gln-local-iwasawa-and-cartan-decompositions]]

[[def-axiom-of-choice]]

[Masao Oi, *Introduction to the Local Langlands Correspondence*, §§11.1–11.2](https://masaooi.github.io/LLC.pdf)

[W. Casselman, *Introduction to the Theory of Admissible Representations of p-adic Reductive Groups*, §§2.1–2.2](https://www.math.ubc.ca/~cass/research/pdf/p-adic-book.pdf)

## Facts & Assumptions

**Given:** $f_1,f_2\in H$ and the local data of [F1].

[A1] AC is assumed for the Haar-existence and normalization context used by the fixed measures. [[def-axiom-of-choice]]

[F1] The groups, measures, modulus, raw transform and exponent identification are fixed in [[def-spherical-hecke-algebra-and-normalized-satake-transform-for-gln]].

[F2] Iwasawa integration on right-$K$-invariant functions, Cartan double cosets, elementary-divisor minor invariants, and the diagonal modulus are proved in [[lem-gln-local-iwasawa-and-cartan-decompositions]].

## Proof

**Given:** Two functions $f_1,f_2\in H$. For $\mu\in\mathbb Z^n$, write $X^\mu=X_1^{\mu_1}\cdots X_n^{\mu_n}$.

1.1 For $z\in T\cap K$, $\delta(z)=1$. Using $tzu=t(zuz^{-1})z$, right-$K$ invariance of $f$ removes the last $z$, and conjugation by $z$ preserves $du$ by [F2]. Thus $\mathcal S_0f(tz)=\mathcal S_0f(t)$, so the expression descends to $T/(T\cap K)$. [F1, F2, algebra]

2.1 It suffices to bound the support for $h_\lambda=1_{Kt_\lambda K}$ with $\lambda$ decreasing, since these functions form a basis by [F2]. If $t_\mu u\in Kt_\lambda K$, determinants give $\sum_i\mu_i=\sum_i\lambda_i$. For every subset $I$ of $j$ indices, the corresponding principal minor of the upper triangular matrix $t_\mu u$ is $\varpi^{\sum_{i\in I}\mu_i}$. The least valuation of its $j$-minors is $\lambda_{n-j+1}+\cdots+\lambda_n$ by [F2], so each such subset sum is at least that number. For $j=1$ and $j=n-1$ this gives $\lambda_n\le\mu_i\le\lambda_1$; if $n=1$, the determinant fixes $\mu_1$ directly. There are finitely many possible $\mu$. For fixed $t$, the set $\{u\in U:tu\in Kt_\lambda K\}$ is compact because $Kt_\lambda K$ is compact and $u\mapsto tu$ is a closed embedding; it is open and right $U\cap K$-invariant. It is therefore a finite union of compact-open cosets, so its integral is a finite sum. Linearity proves finite support for every $f\in H$. [F1, F2, step 1.1, algebra]

3.1 Fix $t\in T$. Expand the convolution in $\mathcal S(f_1*f_2)(t)$. For each fixed $u$, the function $x\mapsto f_1(x)f_2(x^{-1}tu)$ is compactly supported and right-$K$-invariant: replacing $x$ by $xk$ leaves $f_1$ unchanged and changes the second argument by left multiplication by $k^{-1}$. Apply the integration formula [F2] with $x=av$, $a\in T$, $v\in U$, to obtain $\mathcal S(f_1*f_2)(t)=\delta(t)^{1/2}\int_T\int_U\int_U f_1(av)f_2(v^{-1}a^{-1}tu)\,du\,dv\,da$. All exchanges are finite compact-open sums: if $x\in\operatorname{supp}(f_1)$ and $x^{-1}tu\in\operatorname{supp}(f_2)$, then $u\in t^{-1}\operatorname{supp}(f_1)\operatorname{supp}(f_2)$, a compact set; the coset decompositions in [F2] are finite on compact support. [A1, F1, F2, step 2.1, algebra]

4.1 Put $b=a^{-1}t$. Then $v^{-1}bu=b(b^{-1}v^{-1}b)u$. Left translation of $u$ by $b^{-1}v^{-1}b$ preserves $du$, so the $u$-integral is independent of $v$. The expression in step 3.1 becomes
$$
\int_T\delta(t)^{1/2}\delta(a)^{-1/2}\delta(a^{-1}t)^{-1/2}(\mathcal Sf_1)(a)(\mathcal Sf_2)(a^{-1}t)\,da.
$$
Since $\delta$ is a character, the scalar factor is one. This is torus convolution, which is Laurent multiplication under the exponent identification. Finally, $t_\mu u\in K$ forces $\mu=0$ by the lattice invariants in [F2], and then exactly $u\in U\cap K$ contributes, with measure one. Hence $\mathcal S(1_K)=1$. [F1, F2, step 3.1, algebra] ∎

## Notes

The proof establishes descent and finite support before treating the Satake expression as a Laurent polynomial. Oi's Satake theorem is cited only for normalization context; its proof reference to Cartier is not used.
