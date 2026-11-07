---
id: lem-smith-pairing-test-means-control-rank-law
kind: lemma
title: "Pairing test means control the finite matrix rank law"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps: [def-finite-field-and-its-order, def-vector-space, lem-character-orthogonality-for-finite-abelian-groups]
justified_by: []
proof_strategy: direct
axiom_use: "The proof uses only finite sums and finite-dimensional linear algebra."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "A. Smith, The Distribution of ℓ∞-Selmer Groups in Degree ℓ Twist Families I"
      url: "https://arxiv.org/pdf/2207.05674"
      locator: "§6.1, Cassels–Tate test means and rank transitions"
verification: {}
---

## Statement

Let $k$ be a finite field of cardinality $q$, let $X$ be a finite nonempty set and $A\subseteq X$ a nonempty subset, and put $a=|A|/|X|$. In the bilinear case let $U,V$ be finite-dimensional $k$-vector spaces and put $W=U\otimes_k V$. In the alternating case let $U$ be finite-dimensional and put $W=\bigwedge_k^2 U$. Let $d=\dim_k W$, and suppose that each $x\in A$ is assigned a linear form $B_x\in W^*$. Fix a nontrivial additive character $\psi:k\to\mathbb C^\times$. Assume that for every nonzero $w\in W$,
$$\left|\frac1{|X|}\sum_{x\in A}\psi(B_x(w))\right|\le\varepsilon.$$
Let $\mu$ be the distribution of $B_x$ for uniformly chosen $x\in A$, and let $\nu$ be the uniform distribution on $W^*$. Then
$$\sum_{B\in W^*}|\mu(B)-\nu(B)|\le\sqrt{q^d-1}\,\frac{\varepsilon}{a}.$$
For any statistic of the pairing, its induced distributions satisfy the same $L^1$ bound. In particular this applies to the kernel dimension of the associated $\dim V\times\dim U$ matrix in the bilinear case and of the alternating $\dim U\times\dim U$ matrix in the alternating case. Thus a bound for all nonzero Cassels–Tate tensor or exterior-square test means gives the displayed finite rank-transition approximation, conditional on the assumed test bound and the identification of the actual pairing domain with $W^*$.

## Statement references

[[lem-character-orthogonality-for-finite-abelian-groups]]

[Smith, *The Distribution of $\ell^\infty$-Selmer Groups in Degree $\ell$ Twist Families I*, §6.1](https://arxiv.org/pdf/2207.05674)

## Facts & Assumptions

**Given:** The field, finite sets, spaces, pairing forms, character and test bound in the Statement.

[F1] Characters of a finite abelian group satisfy the standard orthogonality relations. [[lem-character-orthogonality-for-finite-abelian-groups]]

## Proof

1.1 Put $G=W^*$ and $N=q^d=|G|$. For $w\in W$ define the additive character $\chi_w(B)=\psi(B(w))$. The map $w\mapsto\chi_w$ is injective: if $w\ne0$, the map $B\mapsto B(w)$ is onto $k$, so some value has nontrivial $\psi$. It therefore gives all $N$ characters of $G$. The hypothesis says that for $w\ne0$, the Fourier coefficient $$\widehat\mu(w)=\sum_{B\in G}\mu(B)\chi_w(B)$$ has magnitude at most $\varepsilon/a$. [given, construct, algebra]

2.1 Let $f=\mu-\nu$. Its zero Fourier coefficient vanishes, and its nonzero coefficients are those of $\mu$. By [F1], finite Fourier orthogonality gives the exact Parseval identity $$\sum_{B\in G}|f(B)|^2=\frac1N\sum_{w\in W\setminus\{0\}}|\widehat\mu(w)|^2\le\frac{N-1}{N}\left(\frac\varepsilon a\right)^2.$$ Cauchy–Schwarz then yields $$\sum_{B\in G}|f(B)|\le\sqrt N\left(\sum_B|f(B)|^2\right)^{1/2}\le\sqrt{N-1}\,\frac\varepsilon a.$$ When $d=0$ both distributions are the point mass and the bound is zero. [F1, step 1.1, given, algebra]

3.1 For any map $g:G\to Z$, summing $f$ over each fiber and using the triangle inequality shows that the $L^1$ distance of the pushforward laws is at most $\sum_B|f(B)|$. A linear form on $U\otimes V$ is a bilinear form, and a linear form on $\bigwedge^2U$ is an alternating bilinear form, including in characteristic two. Choosing bases identifies them respectively with all matrices of the displayed sizes and all alternating square matrices; the map sending a form to the dimension of its kernel is a statistic. Applying the preceding bound proves the stated rank-law consequence. [step 2.1, given, algebra] ∎
