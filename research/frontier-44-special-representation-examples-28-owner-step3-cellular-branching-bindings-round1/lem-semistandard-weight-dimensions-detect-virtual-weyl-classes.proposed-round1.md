---
id: lem-semistandard-weight-dimensions-detect-virtual-weyl-classes
kind: lemma
title: "Semistandard weight dimensions detect virtual Weyl classes"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-grothendieck-group-of-an-essentially-small-abelian-category, def-semistandard-tableau-and-kostka-number, def-type-a-q-schur-algebra-and-weyl-modules, lem-kostka-change-of-basis-is-dominance-unitriangular, thm-jordan-holder-theorem-for-modules]
justified_by: []
aliases: []
landmark: false
dependency_level: 3
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Andrew Mathas, Hecke algebras and Schur algebras of the symmetric group, complete prepublication manuscript (1998; expanded published edition: AMS University Lecture Series 15, 1999); complete 79-page manuscript, SHA-256 8cfeb611a95a3ff25cb95ad22bfd3a68475818301c34b04d131a8480a1b997e0"
      url: "https://web.math.ucsb.edu/~bigelow/books/mathas.pdf"
      locator: "Lemma 5.30 with Theorem 4.16 and Corollary 4.18, printed pp. 44-60: the semistandard weight-space dimensions dim W^lambda phi_{T^nu T^nu} = K_{lambda nu} and the unitriangular decomposition matrix"
    - title: "Richard Dipper, Gordon James and Andrew Mathas, The (Q,q)-Schur algebra, Proc. London Math. Soc. (3) 77 (1998) 327-361; arXiv:q-alg/9701024"
      url: "https://arxiv.org/abs/q-alg/9701024"
      locator: "Lemma 5.5, Definition 5.6, equations (5.4) and (5.7), printed pp. 28-29: the diagonal semistandard elements are orthogonal idempotents summing to the identity, and every module decomposes as the direct sum of its weight spaces phi_{lambda lambda}U"
---

## Statement

Let $F$ be a field, $q\in F^{\times}$, $d,n\ge1$, and let $S=S(d,n)$ be the
q-Schur algebra with Weyl modules $W^{\lambda}$ for
$\lambda\in\Lambda^{+}(d,n)$
([[def-type-a-q-schur-algebra-and-weyl-modules]]). Let $M$ be a
finite-dimensional right $S$-module and let $(a_{\lambda})_{\lambda\in\Lambda^{+}(d,n)}$
be integers such that
$$\dim_F\bigl(M\varphi_{T^{\nu}T^{\nu}}\bigr)=\sum_{\lambda\in\Lambda^{+}(d,n)}a_{\lambda}\,\dim_F\bigl(W^{\lambda}\varphi_{T^{\nu}T^{\nu}}\bigr)$$
for every partition $\nu\in\Lambda^{+}(d,n)$, where $\varphi_{T^{\nu}T^{\nu}}$
are the diagonal semistandard basis elements
([[def-type-a-q-schur-algebra-and-weyl-modules]]). Then
$[M]=\sum_{\lambda}a_{\lambda}[W^{\lambda}]$ in the Grothendieck group
$G_0(S\text{-mod})$
([[def-grothendieck-group-of-an-essentially-small-abelian-category]]).
Consequently equality of all semistandard weight-space dimensions forces
equality in the Grothendieck group.

## Facts & Assumptions

**Given:** A field $F$, the type-A q-Schur algebra $S=S(d,n)$ over $F$, its Weyl modules $W^{\lambda}$ and simple heads $L^{\lambda}$ for $\lambda\in\Lambda^{+}(d,n)$, and the semistandard elements $\varphi_{ST}$ ([[def-type-a-q-schur-algebra-and-weyl-modules]]).

[F1] Semistandard structure ([[def-type-a-q-schur-algebra-and-weyl-modules]]): $S$ is finite dimensional over $F$; the $L^{\lambda}$, $\lambda\in\Lambda^{+}(d,n)$, form a complete set of pairwise non-isomorphic absolutely irreducible $S$-modules; the weight projections $p_\nu$ onto the permutation summands are orthogonal idempotents and, for the canonical tableau of the partition $\nu$, $p_\nu=\varphi_{T^{\nu}T^{\nu}}$; arbitrary diagonal semistandard elements need not be idempotents; the decomposition numbers $d_{\lambda\mu}:=[W^{\lambda}:L^{\mu}]$ satisfy $d_{\lambda\lambda}=1$ and $d_{\lambda\mu}\ne0\Rightarrow\lambda\unrhd\mu$; and $\dim_F(W^{\lambda}\varphi_{T^{\nu}T^{\nu}})=K_{\lambda\nu}$ for all $\lambda,\nu\in\Lambda^{+}(d,n)$ ([[def-semistandard-tableau-and-kostka-number]]).

[F2] Kostka unitriangularity ([[lem-kostka-change-of-basis-is-dominance-unitriangular]]): $K_{\lambda\nu}=0$ unless $\lambda\unrhd\nu$ and $K_{\lambda\lambda}=1$; with rows and columns ordered by a linear extension of dominance from smaller to larger, $(K_{\lambda\nu})_{\lambda,\nu\in\Lambda^{+}(d,n)}$ is lower unitriangular over $\mathbb Z$, hence invertible over $\mathbb Z$.

[F3] Grothendieck group and multiplicities ([[def-grothendieck-group-of-an-essentially-small-abelian-category]], [[thm-jordan-holder-theorem-for-modules]]): $[Y]=[X]+[Z]$ for every short exact sequence $0\to X\to Y\to Z\to0$ of finite-dimensional $S$-modules, and $[N]=\sum_{\mu}[N:L^{\mu}][L^{\mu}]$ in $G_0(S\text{-mod})$, where the composition multiplicity $[N:L^{\mu}]$ is well defined.



## Proof

**Proof technique:** direct.

1.1 Exactness of a weight projection. Fix an idempotent $p=p_\nu\in S$. For a short exact sequence $0\to A\to B\xrightarrow{f}C\to0$ of right $S$-modules, the sequence $0\to Ap\to Bp\to Cp\to0$ is exact as vector spaces. Injectivity and the kernel identity follow from the underlying sequence and $a=ap$ for $a\in Ap$. For surjectivity, lift $c\in C$ to $b\in B$; then $f(bp)=cp$. Right multiplication by $p$ is a linear projection, and preserves every $S$-submodule, although it need not be an $S$-linear endomorphism when $p$ is not central. Taking dimensions proves additivity. Only the canonical partition weight projections are used. [given, F1, algebra]

2.1 Weight functionals on composition series. Apply step 1.1 to every short exact sequence of a finite composition series of $N$. Its factors are the simple modules $L^\mu$, so
$$\dim_F(Np_\nu)=\sum_\mu[N:L^\mu]\dim_F(L^\mu p_\nu).$$
The defining relations of the Grothendieck group similarly give $[N]=\sum_\mu[N:L^\mu][L^\mu]$. This argument requires exactness on vector spaces, not the false assertion that every noncentral weight projection lies in $\operatorname{End}_S(N)$. [step 1.1, F1, F3]

3.1 Invertibility of the weight matrix: put $X_{\mu\nu}:=\dim_F(L^{\mu}\varphi_{T^{\nu}T^{\nu}})$ for $\mu,\nu\in\Lambda^{+}(d,n)$. Feeding a composition series of $W^{\lambda}$ into step 2.1 gives $$K_{\lambda\nu}=\dim_F(W^{\lambda}\varphi_{T^{\nu}T^{\nu}})=\sum_{\mu}d_{\lambda\mu}X_{\mu\nu},$$ that is, $K=dX$ with $d=(d_{\lambda\mu})$ and $K=(K_{\lambda\nu})$. Both $d$ and $K$ are unitriangular over $\mathbb Z$ by [F1] and [F2] respectively, hence invertible over $\mathbb Z$, and therefore $X=d^{-1}K$ is invertible over $\mathbb Z$. [step 2.1, F1, F2]

4.1 Conclusion: write $c_{\mu}:=[M:L^{\mu}]$ and $b_{\mu}:=c_{\mu}-\sum_{\lambda}a_{\lambda}d_{\lambda\mu}\in\mathbb Z$. By step 2.1 applied to $M$ and to the identity $\dim_F(W^{\lambda}\varphi_{T^{\nu}T^{\nu}})=K_{\lambda\nu}$, for every $\nu$ $$0=\dim_F(M\varphi_{T^{\nu}T^{\nu}})-\sum_{\lambda}a_{\lambda}\dim_F(W^{\lambda}\varphi_{T^{\nu}T^{\nu}})=\sum_{\mu}c_{\mu}X_{\mu\nu}-\sum_{\lambda}a_{\lambda}\sum_{\mu}d_{\lambda\mu}X_{\mu\nu}=\sum_{\mu}b_{\mu}X_{\mu\nu}.$$ Since $X$ is invertible over $\mathbb Z$ by step 3.1, $b_{\mu}=0$ for all $\mu$. Hence $c_{\mu}=\sum_{\lambda}a_{\lambda}d_{\lambda\mu}$, and step 2.1 together with the defining relations [F3] gives $$[M]=\sum_{\mu}c_{\mu}[L^{\mu}]=\sum_{\lambda}a_{\lambda}\sum_{\mu}d_{\lambda\mu}[L^{\mu}]=\sum_{\lambda}a_{\lambda}[W^{\lambda}].$$ [step 2.1, step 3.1, F1, F3]

5.1 Consequence: if two finite-dimensional right $S$-modules $M,N$ satisfy $\dim_F(M\varphi_{T^{\nu}T^{\nu}})=\dim_F(N\varphi_{T^{\nu}T^{\nu}})$ for all $\nu\in\Lambda^{+}(d,n)$, then applying the argument of step 4.1 to the difference of their multiplicity vectors shows $\sum_{\mu}([M:L^{\mu}]-[N:L^{\mu}])X_{\mu\nu}=0$ for all $\nu$, so the invertibility of $X$ gives $[M:L^{\mu}]=[N:L^{\mu}]$ for all $\mu$ and hence $[M]=[N]$ in $G_0(S\text{-mod})$. [step 3.1, step 4.1, F3] ∎
