---
id: thm-symmetric-group-decomposition-matrix-is-dominance-unitriangular
kind: theorem
title: Dominance unitriangularity of the symmetric-group decomposition matrix
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
landmark: false
proof_strategy: direct
deps:
  - def-integral-specht-lattice-and-base-change
  - def-integral-tabloid-bilinear-form-and-specht-gram-matrix
  - def-modular-specht-form-and-radical-quotient
  - def-og-lattice-and-reduction-modulo-the-maximal-ideal
  - def-decomposition-map-from-ordinary-to-modular-grothendieck-groups
  - def-decomposition-numbers-and-decomposition-matrix
  - thm-decomposition-map-is-independent-of-the-stable-lattice
  - def-composition-series-and-length-of-a-module
  - thm-jordan-holder-theorem-for-modules
  - def-invariant-inner-product-on-a-tabloid-module
  - lem-specht-module-has-nondegenerate-self-pairing-in-characteristic-zero
  - thm-james-submodule-theorem-over-an-arbitrary-field
  - thm-specht-radical-quotient-is-nonzero-exactly-for-p-regular-partitions
  - lem-nonzero-maps-between-specht-quotients-force-dominance
  - thm-modular-simple-modules-of-sn-are-the-p-regular-specht-heads
  - def-dominance-order-on-partitions
  - def-p-regular-and-p-restricted-partitions
  - def-splitting-p-modular-system-for-a-finite-group
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "G. D. James, The Representation Theory of the Symmetric Groups, Lecture Notes in Mathematics 682, Theorem 12.1 and Corollaries 12.2-12.3, printed pp. 42-43"
      url: "https://www-users.cse.umn.edu/~webb/oldteaching/Year2010-11/the-representation-theory-of-the-symmetric-groups-SLN.pdf"
    - title: "David A. Craven, Groups, Geometries and Representation Theory, §2.3, Proposition 2.10 and Corollary 2.11, printed pp. 25-26"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/groupsgeomreptheory2013.pdf"
verification:
  precheck: pass
---

## Statement

Let $p$ be a prime, let $n\ge0$, and let $(K,\mathcal O,k)$ be a splitting
$p$-modular system for $S_n$ with maximal ideal
$\mathfrak m\subseteq\mathcal O$. For $\lambda\vdash n$ put
$$S^\lambda_{\mathcal O}:=\mathcal O\otimes_{\mathbb Z}S^\lambda_{\mathbb Z}, \qquad S^\lambda_K:=K\otimes_{\mathbb Z}S^\lambda_{\mathbb Z}, \qquad S^\lambda_k:=k\otimes_{\mathbb Z}S^\lambda_{\mathbb Z},$$
so that $S^\lambda_{\mathcal O}$ is a stable $\mathcal O[S_n]$-lattice in
$S^\lambda_K$ with reduction $S^\lambda_k$
([[def-integral-specht-lattice-and-base-change]],
[[def-og-lattice-and-reduction-modulo-the-maximal-ideal]]). For a
$p$-regular $\mu\vdash n$ let $D^\mu$ be the simple $k[S_n]$-module of
[[thm-modular-simple-modules-of-sn-are-the-p-regular-specht-heads]], and put
$$d_{\lambda\mu}:=[S^\lambda_k:D^\mu],$$
the multiplicity of $D^\mu$ in a composition series of $S^\lambda_k$. By the
definition of the decomposition map and its independence of the stable
lattice, $d_{\lambda\mu}$ is the decomposition number of the ordinary
irreducible $S^\lambda_K$ with respect to $D^\mu$
([[def-decomposition-map-from-ordinary-to-modular-grothendieck-groups]],
[[def-decomposition-numbers-and-decomposition-matrix]],
[[thm-decomposition-map-is-independent-of-the-stable-lattice]]). Then:

1. **Dominance bound.** $d_{\lambda\mu}=0$ unless the $p$-regular partition
   $\mu$ dominates $\lambda$; equivalently, every composition factor of
   $S^\lambda_k$ is isomorphic to $D^\mu$ for some $p$-regular $\mu\unrhd
   \lambda$.
2. **Diagonal.** $d_{\lambda\lambda}=1$ for every $p$-regular
   $\lambda\vdash n$; that is, $D^\lambda$ occurs exactly once as a
   composition factor of $S^\lambda_k$.
3. **Lower unitriangular block.** List the $p$-regular partitions of $n$ in
   decreasing lexicographic order, put them first among the rows in that
   order, and use the same order for the columns. Then the square block
   $(d_{\lambda\mu})_{\lambda,\mu\ p\text{-regular}}$ is lower
   unitriangular: $d_{\lambda\mu}=0$ whenever $\mu$ is lexicographically
   strictly smaller than $\lambda$ (so its column occurs to the right of the
   diagonal), and $d_{\lambda\lambda}=1$.

The result is a constraint on the decomposition matrix, not a formula for
all of its entries. It uses no positivity of the modular form, no division
by a group order and no averaging, and it includes $n=0$ and
characteristic $2$.

## Facts & Assumptions

**Given:** A prime $p$, an integer $n\ge0$, a splitting $p$-modular system $(K,\mathcal O,k)$ for $S_n$, and the objects above.

[F1] For every commutative ring $R$ the module $S^\lambda_R= R\otimes_{\mathbb Z}S^\lambda_{\mathbb Z}$ has the standard polytabloids as $R$-basis and is an $S_n$-submodule of $M^\lambda_R$; in particular it is free over $R$ and nonzero ([[def-integral-specht-lattice-and-base-change]]).

[F2] $\beta_R$ is the $R$-bilinear form on $M^\lambda_R$ with orthonormal tabloid basis; it is symmetric, nondegenerate and $S_n$-invariant, and its matrix in the standard basis of $S^\lambda_R$ is $G_\lambda$, the integral Gram matrix ([[def-integral-tabloid-bilinear-form-and-specht-gram-matrix]]).

[F3] In the standard basis of $S^\lambda_{\mathbb C}$, the positive definite Hermitian tabloid product has matrix $G_\lambda$, and $S^\lambda_{\mathbb C}\cap(S^\lambda_{\mathbb C})^{\perp}=\{0\}$ with $S^\lambda_{\mathbb C}\ne0$ ([[def-invariant-inner-product-on-a-tabloid-module]], [[lem-specht-module-has-nondegenerate-self-pairing-in-characteristic-zero]]).

[F4] For every field $F$, every $F[S_n]$-submodule $U\le M^\lambda_F$ satisfies $S^\lambda_F\le U$ or $U\le(S^\lambda_F)^{\perp}$, where the orthogonal complement is taken for the form $\beta_F$ ([[thm-james-submodule-theorem-over-an-arbitrary-field]]).

[F5] For every field $F$ of characteristic $p$: $D^\lambda_F=0$ if and only if $\lambda$ is not $p$-regular; and for $p$-regular $\lambda$, the module $D^\lambda_F$ is nonzero, self-dual and absolutely irreducible, $R^\lambda_F =S^\lambda_F\cap(S^\lambda_F)^{\perp}$ is the unique maximal submodule of $S^\lambda_F$ and equals $\operatorname{rad}(S^\lambda_F)$, and $D^\lambda_F$ is the simple head of $S^\lambda_F$ ([[thm-specht-radical-quotient-is-nonzero-exactly-for-p-regular-partitions]], [[def-modular-specht-form-and-radical-quotient]]).

[F6] If $F$ has characteristic $p$, $\nu$ is $p$-regular, $U\le M^\lambda_F$ is a submodule and $\psi:D^\nu_F\to M^\lambda_F/U$ is a nonzero $F[S_n]$-homomorphism, then $\nu\unrhd\lambda$; and if $\nu=\lambda$ then $U$ does not contain $S^\lambda_F$ ([[lem-nonzero-maps-between-specht-quotients-force-dominance]]).

[F7] The modules $D^\mu$ with $\mu\vdash n$ $p$-regular form a complete set of pairwise non-isomorphic simple $k[S_n]$-modules, and their classes form the integral basis of the modular Grothendieck group ([[thm-modular-simple-modules-of-sn-are-the-p-regular-specht-heads]], [[def-decomposition-numbers-and-decomposition-matrix]]).

[F8] The decomposition map sends the class of a $KG$-module $V$ to the class of $L/\mathfrak mL$ for any $G$-stable $\mathcal O G$-lattice $L\subseteq V$, independently of $L$ ([[def-decomposition-map-from-ordinary-to-modular-grothendieck-groups]], [[thm-decomposition-map-is-independent-of-the-stable-lattice]], [[def-og-lattice-and-reduction-modulo-the-maximal-ideal]]).

[F9] Composition multiplicities are additive in short exact sequences, and the multiplicities of the simple factors do not depend on the composition series ([[def-composition-series-and-length-of-a-module]], [[thm-jordan-holder-theorem-for-modules]]).

[F10] $\unrhd$ is a partial order; if $\mu\unrhd\lambda$ and $\mu\ne\lambda$, then at the least index $r$ with $\mu_r\ne\lambda_r$ one has $\mu_r>\lambda_r$, so $\mu$ is strictly larger than $\lambda$ in decreasing lexicographic order ([[def-dominance-order-on-partitions]]).

## Proof

**Proof technique:** direct.

1.1 By [F1] and [F8], $S^\lambda_{\mathcal O}=\mathcal O\otimes_{\mathbb Z}S^\lambda_{\mathbb Z}$ is a free $\mathcal O$-module with the standard polytabloids as basis, it is stable under $S_n$, its reduction is $$S^\lambda_{\mathcal O}/\mathfrak mS^\lambda_{\mathcal O}\cong k\otimes_{\mathcal O}S^\lambda_{\mathcal O}\cong k\otimes_{\mathbb Z}S^\lambda_{\mathbb Z}=S^\lambda_k,$$ and $K\otimes_{\mathcal O}S^\lambda_{\mathcal O}\cong K\otimes_{\mathbb Z}S^\lambda_{\mathbb Z}=S^\lambda_K$. Thus $S^\lambda_{\mathcal O}$ is a stable $\mathcal O[S_n]$-lattice in $S^\lambda_K$ with reduction $S^\lambda_k$. [given, F1, F8, algebra]

1.2 The matrix of the Hermitian product of [F3] in the standard basis of $S^\lambda_{\mathbb C}$ is $\bigl(\langle e_i,e_j\rangle\bigr)=\bigl(\sum_Tc_i(T)\overline{c_j(T)}\bigr)$, and since all tabloid coefficients of polytabloids are integers by [F1] this equals $\bigl(\sum_Tc_i(T)c_j(T)\bigr)=G_\lambda$ by [F2]. By [F3] the restricted Hermitian form on $S^\lambda_{\mathbb C}$ is nondegenerate, so $G_\lambda$ is an invertible matrix over $\mathbb C$; since $G_\lambda$ has integer entries, $\det G_\lambda\ne0$. As $K$ has characteristic $0$, the image of $\det G_\lambda$ in $K$ is nonzero, so the base-changed form $\beta_K$ has invertible Gram matrix on $S^\lambda_K$ and is nondegenerate there. [given, F1, F2, F3, algebra]

1.3 Let $D^\nu$ be a composition factor of $M^\lambda_k/S^\lambda_k$. Then $D^\nu\ne0$, so $\nu$ is $p$-regular by [F5]. Choose a composition series of $M^\lambda_k/S^\lambda_k$; the factor $D^\nu$ is $N/N'$ for submodules $N'\le N$ of $M^\lambda_k/S^\lambda_k$. With $\pi:M^\lambda_k\twoheadrightarrow M^\lambda_k/S^\lambda_k$ and $U:=\pi^{-1}(N')\supseteq S^\lambda_k$ one has $M^\lambda_k/U\cong(M^\lambda_k/S^\lambda_k)/N'$, and $N/N'\cong D^\nu$ is a nonzero submodule of that quotient; hence there is a nonzero $k[S_n]$-homomorphism $\psi:D^\nu\to M^\lambda_k/U$. By [F6] with $(\nu,\lambda)$ in place of its $(\lambda,\mu)$ we get $\nu\unrhd\lambda$, and if $\nu=\lambda$ then [F6] says $U$ does not contain $S^\lambda_k$, contrary to $U\supseteq S^\lambda_k$. Hence $\nu\rhd\lambda$: every composition factor of $M^\lambda_k/S^\lambda_k$ is $D^\nu$ with $\nu$ strictly dominating $\lambda$. [given, F5, F6, F7, algebra]

2.1 By step 1.1 the stable lattice $S^\lambda_{\mathcal O}$ in $S^\lambda_K$ has reduction $S^\lambda_k$, so by [F8] the decomposition map sends $[S^\lambda_K]$ to $[S^\lambda_k]$. Since the classes of the simple modules form the integral basis of the modular Grothendieck group by [F7], and the expansion coefficients of $[S^\lambda_k]$ in that basis are the composition multiplicities by [F9], $$d([S^\lambda_K])=\sum_{\mu\ p\text{-regular}}[S^\lambda_k:D^\mu]\,[D^\mu] =\sum_{\mu\ p\text{-regular}}d_{\lambda\mu}\,[D^\mu].$$ Hence the $d_{\lambda\mu}$ are exactly the decomposition numbers of the ordinary irreducible $S^\lambda_K$. [given, F7, F8, F9, step 1.1]

2.2 $S^\lambda_K$ is irreducible: if $0\ne U\le S^\lambda_K$ is a proper submodule, then viewing $U$ inside $M^\lambda_K$ and applying the James submodule theorem [F4] gives $S^\lambda_K\le U$ (impossible) or $U\le(S^\lambda_K)^{\perp}$, and the latter forces $U\le S^\lambda_K\cap(S^\lambda_K)^{\perp}=0$ by the nondegeneracy of step 1.2, a contradiction. The same argument applies over any field extension $E/K$: base change gives $E\otimes_KS^\lambda_K\cong E\otimes_{\mathbb Z}S^\lambda_{\mathbb Z}=S^\lambda_E$ by [F1], $\det G_\lambda\ne0$ in $E$, and [F4] holds over $E$; so $S^\lambda_E$ is irreducible. Hence $S^\lambda_K$ is absolutely irreducible and is the ordinary irreducible attached to $\lambda$. [given, F1, F4, step 1.2]

2.3 The pairing $(x+S^\lambda_k,\,y)\mapsto\beta_k(x,y)$ from $(M^\lambda_k/S^\lambda_k)\times S^{\lambda\perp}_k$ to $k$ is well defined because $\beta_k(S^\lambda_k,S^{\lambda\perp}_k)=0$, and it is nondegenerate: on the right, $\beta_k(M^\lambda_k,y)=0$ forces $y=0$ by nondegeneracy of $\beta_k$ from [F2]; on the left, $(S^{\lambda\perp}_k)^{\perp}=S^\lambda_k$ because $\dim W^{\perp}=\dim M^\lambda_k-\dim W$ for a nondegenerate form and $\dim M^\lambda_k-\dim S^{\lambda\perp}_k=\dim S^\lambda_k$. Hence $\Phi:S^{\lambda\perp}_k\to(M^\lambda_k/S^\lambda_k)^*$, $\Phi(y)=\beta_k(\cdot,y)$, is an isomorphism of $k[S_n]$-modules, equivariant by the invariance of $\beta_k$ in [F2]. Dualizing a composition series $0=M_0<\cdots<M_r=M^\lambda_k/S^\lambda_k$ gives exact sequences $0\to(M_i/M_{i-1})^*\to M_i^*\to M_{i-1}^*$ and, by induction on $i$, the composition factors of $(M^\lambda_k/S^\lambda_k)^*$ are the duals of those of $M^\lambda_k/S^\lambda_k$ with the same multiplicities. Each $D^\nu$ is self-dual by [F5], so by step 1.3 every composition factor of $S^{\lambda\perp}_k$ is $D^\nu$ with $\nu\rhd\lambda$. [given, F2, F5, step 1.3, algebra]

3.1 The chain $0\subseteq R^\lambda=S^\lambda_k\cap S^{\lambda\perp}_k\subseteq S^\lambda_k\subseteq M^\lambda_k$ is a chain of $k[S_n]$-submodules, and $S^\lambda_k/R^\lambda=D^\lambda$ if $\lambda$ is $p$-regular, and $D^\lambda=0$ otherwise, by [F5]. By additivity of composition multiplicities [F9] over this chain, every composition factor of $S^\lambda_k$ is a composition factor of $R^\lambda$ or of $S^\lambda_k/R^\lambda$; the factors of $R^\lambda$ are among those of $S^{\lambda\perp}_k$, hence have the form $D^\nu$ with $\nu\rhd\lambda$ by step 2.3. Consequently: (i) every composition factor of $S^\lambda_k$ is $D^\mu$ with $\mu\unrhd\lambda$; and (ii) if $\lambda$ is $p$-regular then $[S^\lambda_k:D^\lambda]=1$, since the quotient $S^\lambda_k/R^\lambda$ contributes exactly one copy of $D^\lambda$ and no factor of $R^\lambda$ is $D^\lambda$ (those have $\nu\rhd\lambda$), while if $\lambda$ is not $p$-regular then $D^\lambda=0$. With step 2.1 this is assertion 1 and assertion 2. [given, F5, F9, step 2.1, step 2.3]

4.1 Let $\mu\unrhd\lambda$ with $\mu\ne\lambda$ and let $r$ be the least index with $\mu_r\ne\lambda_r$ (sequences padded by zeros). The first $r-1$ partial sums of $\mu$ and $\lambda$ agree, so if $\mu_r<\lambda_r$ the $r$-th partial sum of $\mu$ would be strictly smaller than that of $\lambda$, contradicting $\mu\unrhd\lambda$; hence $\mu_r>\lambda_r$ and $\mu$ is strictly larger than $\lambda$ in decreasing lexicographic order by [F10]. Therefore, for $p$-regular $\lambda$, a nonzero $d_{\lambda\mu}$ forces $\mu=\lambda$ or $\mu>\lambda$ lexicographically. Listing the $p$-regular partitions in decreasing lexicographic order as rows (in a block placed first) and as columns, all nonzero entries of the leading $p$-regular square block lie on or below the diagonal, and the diagonal entries equal $1$ by step 3.1. This is assertion 3. [given, F10, step 3.1]

5.1 Assertions 1, 2 and 3 are steps 3.1, 3.1 and 4.1; the decomposition-number identification of the $d_{\lambda\mu}$ is step 2.1, and the irreducibility of the ordinary modules $S^\lambda_K$ is step 2.2. For $n=0$ there is one partition $\varnothing$, which is $p$-regular, $S^\varnothing_k\cong k$ is the trivial module and $d_{\varnothing\varnothing}=1$, so the statements hold with a $1\times1$ block. The theorem gives only dominance constraints: it does not compute the off-diagonal entries $d_{\lambda\mu}$ with $\mu\rhd\lambda$, which depend on $p$. No step divides by $p$ or by a group order, none uses positivity of the modular form (positivity is used only over $\mathbb C$ in step 1.2 to see that $G_\lambda$ is nonsingular), and characteristic $2$ is included. [given, step 1.1, step 1.2, step 1.3, step 2.1, step 2.2, step 2.3, step 3.1, step 4.1] ∎
