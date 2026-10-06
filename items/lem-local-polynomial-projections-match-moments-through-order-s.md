---
id: lem-local-polynomial-projections-match-moments-through-order-s
kind: lemma
title: "Local polynomial projections matching moments through order $s$"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 0
deps: [def-multidimensional-rectangle-and-volume, def-ck-and-multi-index-notation-in-several-variables, def-schwartz-space-and-its-seminorms, def-tempered-distribution, def-distribution, def-regular-distribution-from-a-locally-integrable-function, def-c-c-and-c-c-infinity-on-rn, def-measure-with-density, thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz, def-countable-choice]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Mitsuo Izuki, Eiichi Nakai, Yoshihiro Sawano, Hardy spaces with variable exponents, RIMS Kokyuroku Bessatsu B42 (2014), 123-136"
      url: "https://www.kurims.kyoto-u.ac.jp/~kenkyubu/bessatsu/open/B42/pdf/B42_006.pdf"
      locator: "section 8.1, printed p. 128 (PDF p. 6): unique polynomial $P^d_Qf$ of degree at most $d$ with $\\int_Q(f-P)q=0$ for all $q\\in\\mathcal P_d$"
    - title: "Stefano Meda, Peter Sjogren, Maria Vallarino, Atomic decompositions and operators on Hardy spaces, Revista de la Union Matematica Argentina 50 (2009), no. 2, 15-22"
      url: "https://inmabb.criba.edu.ar/revuma/pdf/v50n2/v50n2a02.pdf"
      locator: "section 3, printed pp. 18-19: the classical construction attaches a local polynomial to every Whitney cube"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume Countable Choice ([[def-countable-choice]]). Let $Q\subseteq\mathbb R^n$ be a nondegenerate axis-parallel cube with centre
$c_Q$, side length $\ell(Q)$ and volume $|Q|$ in the sense of
[[def-multidimensional-rectangle-and-volume]]. Fix $\lambda>1$ and write
$$Q^*:=\{x\in\mathbb R^n:\|x-c_Q\|_\infty<\lambda\ell(Q)/2\}$$
for its open concentric dilation. Let $N\in\mathbb N\cup\{0\}$, and let
$\omega_Q\in C_c^\infty(\mathbb R^n)$ be real, nonnegative, with
$\int_{\mathbb R^n}\omega_Q>0$ and
$\operatorname{supp}\omega_Q\subset Q^*$.
Then for every tempered distribution $f\in\mathcal S'(\mathbb R^n)$ there is a
unique **moment-matching polynomial** $P_Q$ of total degree at most $N$ such that
$$\langle f-P_Q,\ x^\alpha\omega_Q\rangle=0 \qquad\text{for every multi-index }|\alpha|\le N .$$
The polynomial $P_Q$ depends only on the restriction of $f$ to an open
neighbourhood of $\operatorname{supp}\omega_Q$: for every open
$U\supseteq\operatorname{supp}\omega_Q$, if $g\in\mathcal S'$ agrees with $f$
as a distribution on $U$, then $P^g_Q=P^f_Q$. When $f$ is
represented by a function in $L^2(\omega_Q(x)\,dx)$, this is the orthogonal
projection of $f$ onto the polynomials of degree at most $N$ in that weighted
inner product space, with inner product
$(P,R)_{\omega_Q}=\int_{\mathbb R^n}P(x)\overline{R(x)}\,\omega_Q(x)\,dx$.
This inner product is positive definite on the polynomial subspace because
$\omega_Q\ge0$ and $\int\omega_Q>0$.

## Facts & Assumptions

**Given:** Countable Choice and a nondegenerate axis-parallel cube $Q$, an integer $N\ge0$, a test function $\omega_Q$ as in the statement, $f\in\mathcal S'(\mathbb R^n)$, and multi-indices with the conventions of [[def-ck-and-multi-index-notation-in-several-variables]].

[L1] A nonnegative continuous function on an open set with positive integral is positive at some point, hence positive on a nonempty open subset of that set; a polynomial vanishing on a nonempty open set is zero: at an interior point all its partial derivatives vanish, and its finite expansion about that point, obtained by the binomial formula for each monomial, has precisely those derivatives as coefficients ([[def-c-c-and-c-c-infinity-on-rn]] fixes the support convention).

[F1] $x^\alpha\omega_Q\in C_c^\infty(\mathbb R^n)\subseteq\mathcal S(\mathbb R^n)$, so the pairings $\langle f,x^\alpha\omega_Q\rangle$ and, for polynomials $P$, the regular-distribution pairings $\langle P,x^\alpha\omega_Q\rangle=\int P\,x^\alpha\omega_Q$ are defined; polynomials are locally integrable and $P\,x^\alpha\omega_Q\in\mathcal S$ ([[def-schwartz-space-and-its-seminorms]], [[def-tempered-distribution]], [[def-regular-distribution-from-a-locally-integrable-function]]).

[F2] The space $\mathcal P_N$ of polynomials of total degree at most $N$ has finite dimension $d=\binom{N+n}{n}$, and the monomials $x^\alpha$, $|\alpha|\le N$, form a basis ([[def-ck-and-multi-index-notation-in-several-variables]]). A finite-dimensional linear system with invertible matrix has a unique solution.

[F3] If two distributions agree on an open set $U$, then their pairings with every test function supported in $U$ agree: this is the definition of agreement of distributions on $U$ ([[def-distribution]]). In particular, if $h\in C_c^\infty(\mathbb R^n)$ is supported in $U$ and $f=0$ on $U$, then $\langle f,h\rangle=0$.

[F4] Since $\omega_Q$ is measurable and nonnegative, $d\mu_Q=\omega_Q(x)\,dx$ is the measure with density $\omega_Q$ relative to Lebesgue measure ([[def-measure-with-density]]).

[F5] On the measure space $(\mathbb R^n,\mu_Q)$ the pairing $([u],[v])\mapsto\int u\overline v\,d\mu_Q$ is the well-defined complex $L^2$ inner product ([[thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz]]).



**Proof technique:** positive-definite Gram matrix on the finite-dimensional polynomial space.

## Proof

**Proof technique:** direct.

1.1 The Gram matrix. Set $G_{\alpha\beta}=\int_{\mathbb R^n}x^{\alpha+\beta}\omega_Q(x)\,dx$ for $|\alpha|,|\beta|\le N$. If $P=\sum_{|\alpha|\le N}c_\alpha x^\alpha$ satisfies $\int|P|^2\omega_Q=0$, then $|P|^2\omega_Q=0$ Lebesgue-a.e.; since $|P|^2$ is continuous and $\omega_Q$ is continuous and positive on a nonempty open set by [L1] (using $\int\omega_Q>0$ and $\omega_Q\ge0$), $P$ vanishes on that open set, hence $P=0$ and all $c_\alpha=0$ by [L1] and [F2]. Writing $\int|P|^2\omega_Q=\sum_{\alpha,\beta}\overline{c_\alpha}c_\beta G_{\alpha\beta}$, positive definiteness follows, so $G$ is invertible. [L1, F1, F2, algebra]

2.1 Existence and uniqueness. The vector $b=\bigl(\langle f,x^\alpha\omega_Q\rangle\bigr)_{|\alpha|\le N}\in\mathbb C^d$ is well defined by [F1], so [F2] gives a unique coefficient vector $c=G^{-1}b$ and a polynomial $P_Q=\sum_{|\alpha|\le N}c_\alpha x^\alpha$ with $\langle P_Q,x^\beta\omega_Q\rangle=\sum_\alpha c_\alpha G_{\alpha\beta}=b_\beta=\langle f,x^\beta\omega_Q\rangle$ for every $|\beta|\le N$; that is, $\langle f-P_Q,x^\beta\omega_Q\rangle=0$. If $f$ is represented by an element of $L^2(\mu_Q)$, then for every polynomial $R$ of degree at most $N$ its conjugate is a linear combination of the real monomials $x^\alpha$, and the moment equations give $(f-P_Q,R)_{\omega_Q}=\int(f-P_Q)\overline R\,d\mu_Q=0$ by [F4, F5]. Thus $P_Q$ is the orthogonal projection onto the polynomial subspace in the weighted $L^2$ inner product space. If $P',P''$ both satisfy the moment equations, then $R=P'-P''$ satisfies $\langle R,x^\alpha\omega_Q\rangle=0$ for $|\alpha|\le N$, so $\int|R|^2\omega_Q=\sum \overline{c_\alpha}\langle R,x^\alpha\omega_Q\rangle=0$ with $c_\alpha$ the coefficients of $R$, because $\overline R=\sum\overline{c_\alpha}x^\alpha$, and step 1.1 gives $R=0$. This proves existence and uniqueness. [step 1.1, F1, F2, F4, F5, algebra]

3.1 Locality. Let $U$ be the given neighbourhood of $\operatorname{supp}\omega_Q$ on which $f$ and $g$ agree as distributions. For every $|\alpha|\le N$, the test function $x^\alpha\omega_Q$ is supported in $\operatorname{supp}\omega_Q\subset U$, so [F3] gives $\langle f-g,x^\alpha\omega_Q\rangle=0$. Hence $f$ and $g$ produce the same vector $b$ in step 2.1, and therefore the same $P_Q=G^{-1}b$. This proves the locality statement. [step 2.1, F3, given]

4.1 Conclusion. Step 1.1 shows that the Gram matrix is positive definite, step 2.1 constructs the unique moment-matching polynomial and identifies it as the weighted $L^2$ orthogonal projection when that interpretation applies, and step 3.1 records dependence only on the distribution near the support of the weight. This proves the lemma. [step 1.1, step 2.1, step 3.1] ∎
