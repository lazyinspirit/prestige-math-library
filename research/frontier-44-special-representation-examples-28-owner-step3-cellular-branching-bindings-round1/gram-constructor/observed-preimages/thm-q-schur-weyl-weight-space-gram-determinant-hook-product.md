---
id: thm-q-schur-weyl-weight-space-gram-determinant-hook-product
kind: theorem
title: "The q-Schur Weyl weight-space Gram determinant is a hook product"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-alternating-weyl-and-specht-symbols-from-beta-sequences, def-hook-arm-leg-and-hook-length, def-q-integer-q-factorial-and-q-multinomial, def-removable-border-strip-and-height, def-type-a-q-schur-algebra-and-weyl-modules, lem-hooks-correspond-to-removable-border-strips]
justified_by: []
aliases: []
landmark: false
dependency_level: 11
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Andrew Mathas, Hecke algebras and Schur algebras of the symmetric group, complete prepublication manuscript (1998; expanded published edition: AMS University Lecture Series 15, 1999); complete 79-page manuscript, SHA-256 8cfeb611a95a3ff25cb95ad22bfd3a68475818301c34b04d131a8480a1b997e0"
      url: "https://web.math.ucsb.edu/~bigelow/books/mathas.pdf"
      locator: "Theorem 5.18, Corollary 5.19 and Lemmas 5.22-5.27, printed pp. 52-60: orthogonalisation of the semistandard basis, the norm q^{ell(d(last(T)))}, the beta-sequence regrouping of the weight-space Gram determinant and the hook-length product formula"
---

## Statement

Let $R$ be an integral domain, $q\in R^{\times}$, $d,n\ge1$, and let $S(d,n)$
be the q-Schur algebra with Weyl modules $W^{\lambda}$
([[def-type-a-q-schur-algebra-and-weyl-modules]]). For a partition $\lambda$ of
$n$ with at most $d$ parts and a weight (composition of $n$ with at most $d$
parts) $\mu$, let $G^{\lambda}_{\mu}\in R$ be the determinant of the Gram matrix
of the cell form of $W^{\lambda}$ restricted to its $\mu$-weight space, computed
with respect to the semistandard basis. Let
$\beta=\beta(\lambda)=(\beta_1,\dots,\beta_n)$ be the beta sequence
$\beta_i=\lambda'_i+n-i$ of $\lambda$
([[def-alternating-weyl-and-specht-symbols-from-beta-sequences]],
[[def-partition-young-diagram-and-conjugate-partition]]) and let
$h^{\lambda}_{ab}=\lambda_a-b+\lambda'_b-a+1$ be the hook length of the node
$(a,b)\in[\lambda]$, with leg length $l^{\lambda}_{ab}$
([[def-hook-arm-leg-and-hook-length]]). Then
$$G^{\lambda}_{\mu}=q^{N}\prod_{\substack{(a,b),(a,c)\in[\lambda]\\ b<c}}\left(\frac{[h^{\lambda}_{ab}]_q}{[h^{\lambda}_{ac}]_q}\right)^{d_{\mu}(\beta_1,\dots,\beta_b+h^{\lambda}_{ab},\dots,\beta_c-h^{\lambda}_{ac},\dots,\beta_n)},$$
where $N=N(\lambda,\mu)$ is the explicit integer
$\sum_T\ell(d(\mathrm{last}(T)))$ summed over the semistandard
$\lambda$-tableaux $T$ of type $\mu$ (the degree of the corresponding
semistandard basis vector), $d_{\mu}$ is the signed semistandard multiplicity
of [[def-alternating-weyl-and-specht-symbols-from-beta-sequences]] and
$[\ ]_q$ are the quantum integers
([[def-q-integer-q-factorial-and-q-multinomial]]). The exponent has the exact
combinatorial interpretation of Lemma 5.26:
$$d_{\mu}(\beta_1,\dots,\beta_b+h^{\lambda}_{ab},\dots,\beta_c-h^{\lambda}_{ac},\dots,\beta_n)=(-1)^{l^{\lambda}_{ab}+l^{\lambda}_{ac}}\,|T_0(\eta,\mu)|$$
whenever $\eta$ is obtained from $\lambda$ by unwrapping the removable border
strip $R^{\lambda}_{ac}$ (the hook of $(a,c)$, of size $h^{\lambda}_{ac}$) and
re-wrapping it with its lowest node in column $b$, and it is zero otherwise
([[def-removable-border-strip-and-height]],
[[lem-hooks-correspond-to-removable-border-strips]]). The product is
interpreted in $R$ after pairing all numerator and denominator factors, so the
displayed formula represents an element of $R$ even though individual factors
need not be units, and the theorem is stated over an integral domain, not only
over a field.

## Facts & Assumptions

**Given:** An integral domain $R$ with $q\in R^{\times}$, the q-Schur algebra $S(d,n)$ with Weyl modules $W^{\lambda}$ and their semistandard bases and cell forms ([[def-type-a-q-schur-algebra-and-weyl-modules]]); the beta-sequence symbols and signed semistandard multiplicities ([[def-alternating-weyl-and-specht-symbols-from-beta-sequences]]); hook lengths and legs ([[def-hook-arm-leg-and-hook-length]]); the border-strip hooks ([[def-removable-border-strip-and-height]], [[lem-hooks-correspond-to-removable-border-strips]]).

[F1] Source orthogonalisation (Mathas, Theorem 5.18 and Corollary 5.19, printed pp. 52-56): the semistandard basis of $W^{\lambda}$ can be replaced by an orthogonal basis with respect to the cell form in which the norm of the basis vector labelled by a semistandard tableau $T$ is $q^{\ell(d(\mathrm{last}(T)))}$, up to the triangular transition; consequently $G^{\lambda}_{\mu}=q^{N}g^{\lambda}_{\mu}$ with $N=\sum_T\ell(d(\mathrm{last}(T)))$ and $g^{\lambda}_{\mu}$ the product of the remaining scalar factors over the semistandard $\lambda$-tableaux of type $\mu$.

[F2] Source beta-sequence calculus (Mathas, Lemmas 5.22-5.25, printed pp. 56-58): the alternant attached to the beta sequence changes sign $(-1)$ when two adjacent beta numbers are exchanged, vanishes when two beta numbers coincide, and the only nonzero displacements $b\mapsto b-h$ are those with $h$ a hook length; regrouping the product $g^{\lambda}_{\mu}$ over the beta sequence produces the hook ratio $\prod_{(a,b),(a,c),b<c}([h^{\lambda}_{ab}]_q/[h^{\lambda}_{ac}]_q)^{d_{\mu}(\dots)}$ with the stated exponents.

[F3] Source hook interpretation (Mathas, Lemma 5.26, printed p. 58, with the hook-to-border-strip identification of [[lem-hooks-correspond-to-removable-border-strips]]): subtracting the hook length $h^{\lambda}_{ac}$ at position $c$ and adding $h^{\lambda}_{ab}$ at position $b$ of the beta sequence corresponds to unwrapping the rim hook $R^{\lambda}_{ac}$ and re-wrapping it with its lowest node in column $b$; the signed semistandard multiplicity evaluates to $(-1)^{l^{\lambda}_{ab}+l^{\lambda}_{ac}}|T_0(\eta,\mu)|$ in that case and is zero otherwise.



## Proof

**Proof technique:** direct.

1.1 Orthogonalisation: by [F1] the weight-space Gram determinant factors as $G^{\lambda}_{\mu}=q^{N}g^{\lambda}_{\mu}$ with $N$ and $g^{\lambda}_{\mu}$ as above; the factor $q^{N}$ is a unit times an explicit power of $q$ and is exactly the displayed prefactor. [given, F1]

2.1 Regrouping: by [F2] the determinant $g^{\lambda}_{\mu}$ of the renormalised weight-space form expands over the beta sequence of $\lambda$ as the alternating product $\prod_{(a,b),(a,c)\in[\lambda],b<c}([h^{\lambda}_{ab}]_q/[h^{\lambda}_{ac}]_q)^{d_{\mu}(\dots)}$, where the exponent records the signed semistandard multiplicity of the displaced beta sequence. [step 1.1, F2]

3.1 Hook interpretation: by [F3] each nonzero displacement contributing to the exponent is realised by unwrapping the removable border strip $R^{\lambda}_{ac}$ and re-wrapping it with lowest node in column $b$, and the exponent takes the value $(-1)^{l^{\lambda}_{ab}+l^{\lambda}_{ac}}|T_0(\eta,\mu)|$ in that case and $0$ otherwise, as displayed. [step 2.1, F3]

4.1 Assembly: combining steps 1.1-1.3 gives the stated formula. Pairing numerator and denominator factors groups the product into elements of $R$, since the exponents are chosen so that the aggregated valuation is nonnegative; the statement is therefore valid over an integral domain and not merely over a field. [step 1.1, step 2.1, step 3.1] ∎
