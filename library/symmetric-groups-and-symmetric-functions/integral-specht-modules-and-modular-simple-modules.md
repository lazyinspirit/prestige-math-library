---
page: integral-specht-modules-and-modular-simple-modules
title: "Integral Specht Modules and Modular Simple Modules"
status: published
requires: [specht-modules-and-the-irreducibles-of-the-symmetric-group,
           modular-representations-and-projective-covers,
           brauer-characters-and-decomposition-matrices]
items: [def-integral-specht-lattice-and-base-change,
        def-integral-tabloid-bilinear-form-and-specht-gram-matrix,
        def-modular-specht-form-and-radical-quotient,
        lem-field-antisymmetrizer-image-and-dominance,
        thm-james-submodule-theorem-over-an-arbitrary-field,
        def-p-regular-and-p-restricted-partitions,
        lem-specht-gram-gcd-detects-p-regularity,
        thm-specht-radical-quotient-is-nonzero-exactly-for-p-regular-partitions,
        lem-nonzero-maps-between-specht-quotients-force-dominance,
        thm-modular-simple-modules-of-sn-are-the-p-regular-specht-heads,
        thm-symmetric-group-decomposition-matrix-is-dominance-unitriangular,
        lem-conjugate-specht-sign-duality-over-fields,
        prop-p-regular-and-p-restricted-simple-labels-are-related-by-conjugate-sign-duality,
        rem-general-modular-decomposition-numbers-are-not-determined-by-triangularity]
examples: []
---

This page develops the integral and modular theory of Specht modules for the
symmetric group $S_n$ over a fixed splitting $p$-modular system
$(K,\mathcal O,k)$. The first items construct the integral Specht lattice
$S^\lambda_{\mathbb Z}\subseteq M^\lambda_{\mathbb Z}$ on the tabloids, prove
that the standard polytabloids form a $\mathbb Z$-basis, that the lattice is a
saturated summand of the integral tabloid module, and that the construction
commutes with base change to every commutative ring. The orthonormal integral
tabloid form $\beta$ and its integer Gram matrix $G_\lambda$ in the standard
basis are set up in parallel, and the two partition conditions that govern the
modular theory are fixed: $\lambda$ is $p$-regular when no positive part
occurs $p$ times, and $p$-restricted when consecutive parts differ by less
than $p$. The basic layer also contains the field form of the antisymmetrizer
image lemma, stating that $\kappa_tM^\mu_F\ne0$ forces
$\lambda\unrhd\mu$, and the integral gcd lemma, which locates the
$p$-divisibility of the Gram data between
$L=\prod_jz_j!$ and $U=\prod_j(z_j!)^j$: the positive gcd $g_\lambda$ of all
integral polytabloid pairings satisfies $L\mid g_\lambda\mid U$, so
$p\nmid g_\lambda$ exactly when $\lambda$ is $p$-regular.

The modular form quotient $D^\lambda=S^\lambda_k/R^\lambda$, with $R^\lambda$
the form radical $S^\lambda_k\cap(S^\lambda_k)^\perp$, is then analysed using
the James submodule theorem over an arbitrary field. The vanishing criterion
is $D^\lambda\ne0$ if and only if $\lambda$ is $p$-regular, with
$\dim_kD^\lambda=\operatorname{rank}_k(G_\lambda\bmod p)$; when nonzero,
$D^\lambda$ is the simple, self-dual and absolutely irreducible head of
$S^\lambda_k$, and $R^\lambda$ is its radical. A dominance lemma for nonzero
maps between Specht quotients shows that $D^\mu$ can occur as a composition
factor of $S^\lambda_k$ only if $\mu\unrhd\lambda$, and these two results
force $D^\lambda=0$ for $p$-singular $\lambda$ and identify the modular simple
modules with the family $D^\lambda$ indexed by the $p$-regular partitions
$\lambda\vdash n$: they are nonzero, pairwise non-isomorphic and exhaust
every simple $k[S_n]$-module, the count of them agreeing with the number of
$p$-regular conjugacy classes by Brauer's theorem and a coefficient-wise
partition identity.

The closing items relate the two label conventions and record the
decomposition matrix. Conjugate Specht sign duality gives
$S(\mu)\cong S^{\mu'}_k\otimes\operatorname{sgn}$ for $p$-restricted $\mu$,
hence $D(\mu)\cong D^{\mu'}\otimes\operatorname{sgn}$, so the $p$-restricted
labels are exchanged with the $p$-regular ones by transposition and a sign
twist. For the decomposition numbers
$d_{\lambda\mu}=[S^\lambda_k:D^\mu]$ one has the dominance bound
$d_{\lambda\mu}=0$ unless $\mu\unrhd\lambda$, the diagonal value
$d_{\lambda\lambda}=1$ for $p$-regular $\lambda$, and a lower unitriangular
leading block when the $p$-regular labels are ordered decreasingly
lexicographically. A closing remark records that this triangularity is a
constraint and not a computation: for $n=3$ the entry $d_{(2,1),(3)}$ is $0$
in characteristic $2$ and $1$ in characteristic $3$, so determining the
off-diagonal entries requires the modular composition factors of the Specht
modules as separate input, and no general formula or algorithm for them is
asserted here.

All actions on tabloids are left actions and tabloids keep their labelled
rows; the form $\beta$ is the symmetric bilinear form making the tabloids
orthonormal, not the complex Hermitian form of the ordinary theory. The
splitting $p$-modular system is fixed throughout, no additional hypothesis of
algebraic closure is imposed on $k$, and every item on this page is finite
and choice-free, with characteristic $2$ included.
