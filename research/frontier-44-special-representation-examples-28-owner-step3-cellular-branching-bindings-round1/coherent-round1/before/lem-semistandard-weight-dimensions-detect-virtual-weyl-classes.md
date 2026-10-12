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

[F1] Semistandard structure ([[def-type-a-q-schur-algebra-and-weyl-modules]]): $S$ is finite dimensional over $F$; the $L^{\lambda}$, $\lambda\in\Lambda^{+}(d,n)$, form a complete set of pairwise non-isomorphic absolutely irreducible $S$-modules; the diagonal elements $\varphi_{TT}$ are orthogonal idempotents, so in particular $\varphi_{T^{\nu}T^{\nu}}^2=\varphi_{T^{\nu}T^{\nu}}\in S$ for every $\nu$; the decomposition numbers $d_{\lambda\mu}:=[W^{\lambda}:L^{\mu}]$ satisfy $d_{\lambda\lambda}=1$ and $d_{\lambda\mu}\ne0\Rightarrow\lambda\unrhd\mu$; and $\dim_F(W^{\lambda}\varphi_{T^{\nu}T^{\nu}})=K_{\lambda\nu}$ for all $\lambda,\nu\in\Lambda^{+}(d,n)$ ([[def-semistandard-tableau-and-kostka-number]]).

[F2] Kostka unitriangularity ([[lem-kostka-change-of-basis-is-dominance-unitriangular]]): $K_{\lambda\nu}=0$ unless $\lambda\unrhd\nu$ and $K_{\lambda\lambda}=1$; with rows and columns ordered by a linear extension of dominance from smaller to larger, $(K_{\lambda\nu})_{\lambda,\nu\in\Lambda^{+}(d,n)}$ is lower unitriangular over $\mathbb Z$, hence invertible over $\mathbb Z$.

[F3] Grothendieck group and multiplicities ([[def-grothendieck-group-of-an-essentially-small-abelian-category]], [[thm-jordan-holder-theorem-for-modules]]): $[Y]=[X]+[Z]$ for every short exact sequence $0\to X\to Y\to Z\to0$ of finite-dimensional $S$-modules, and $[N]=\sum_{\mu}[N:L^{\mu}][L^{\mu}]$ in $G_0(S\text{-mod})$, where the composition multiplicity $[N:L^{\mu}]$ is well defined.



## Proof

**Proof technique:** direct.

1.1 Rank additivity for idempotents: let $0\to A\to B\to C\to0$ be a short exact sequence of finite-dimensional right $S$-modules and let $\varphi\in\mathrm{End}_S(B)$ be idempotent with $\varphi(A)\subseteq A$. Then $\operatorname{rank}_F(\varphi_B)=\operatorname{rank}_F(\varphi_A)+\operatorname{rank}_F(\varphi_C)$, where $\varphi_A$ and $\varphi_C$ are the induced endomorphisms of $A$ and $C$. Indeed, $B=\operatorname{im}\varphi\oplus\ker\varphi$ gives $\operatorname{rank}_F(\varphi_B)=\dim_F\operatorname{im}\varphi$; a $\varphi$-stable subspace satisfies $A=(A\cap\operatorname{im}\varphi)\oplus(A\cap\ker\varphi)$, and $A\cap\operatorname{im}\varphi=\operatorname{im}(\varphi_A)$, since $\varphi_A=\varphi_B|_A$ has image $\varphi_B(A)\subseteq A\cap\operatorname{im}\varphi$ while an element $a=\varphi_B(b)\in A\cap\operatorname{im}\varphi$ equals $\varphi_B(a)\in\operatorname{im}(\varphi_A)$ by idempotency and stability. Moreover the induced map on $C=B/A$ has image $(\operatorname{im}\varphi+A)/A\cong\operatorname{im}\varphi/(\operatorname{im}\varphi\cap A)$, so $\operatorname{rank}_F(\varphi_C)=\dim_F\operatorname{im}\varphi-\dim_F\operatorname{im}(\varphi_A)$ and the claim follows. [given, algebra]

2.1 Weight functionals are additive: let $N$ be a finite-dimensional right $S$-module and let $\varphi\in\mathrm{End}_S(N)$ be idempotent. Then $\dim_F(N\varphi)=\sum_{\mu}[N:L^{\mu}]\dim_F(L^{\mu}\varphi)$. Indeed, choose a composition series $0=N_0\subsetneq N_1\subsetneq\dots\subsetneq N_k=N$; every $N_i$ is $\varphi$-stable and each factor is isomorphic to some $L^{\mu}$, so step 1.1 applied to $0\to N_{i-1}\to N_i\to N_i/N_{i-1}\to0$ and summation give additivity of $\operatorname{rank}_F(\varphi)$ over the series; collecting the factors by isomorphism type and using that the multiplicities $[N:L^{\mu}]$ are well defined gives the formula. In particular $[N]=\sum_{\mu}[N:L^{\mu}][L^{\mu}]$ in $G_0(S\text{-mod})$ by the defining relations [F3]. [step 1.1, F1, F3]

3.1 Invertibility of the weight matrix: put $X_{\mu\nu}:=\dim_F(L^{\mu}\varphi_{T^{\nu}T^{\nu}})$ for $\mu,\nu\in\Lambda^{+}(d,n)$. Feeding a composition series of $W^{\lambda}$ into step 2.1 gives $$K_{\lambda\nu}=\dim_F(W^{\lambda}\varphi_{T^{\nu}T^{\nu}})=\sum_{\mu}d_{\lambda\mu}X_{\mu\nu},$$ that is, $K=dX$ with $d=(d_{\lambda\mu})$ and $K=(K_{\lambda\nu})$. Both $d$ and $K$ are unitriangular over $\mathbb Z$ by [F1] and [F2] respectively, hence invertible over $\mathbb Z$, and therefore $X=d^{-1}K$ is invertible over $\mathbb Z$. [step 2.1, F1, F2]

4.1 Conclusion: write $c_{\mu}:=[M:L^{\mu}]$ and $b_{\mu}:=c_{\mu}-\sum_{\lambda}a_{\lambda}d_{\lambda\mu}\in\mathbb Z$. By step 2.1 applied to $M$ and to the identity $\dim_F(W^{\lambda}\varphi_{T^{\nu}T^{\nu}})=K_{\lambda\nu}$, for every $\nu$ $$0=\dim_F(M\varphi_{T^{\nu}T^{\nu}})-\sum_{\lambda}a_{\lambda}\dim_F(W^{\lambda}\varphi_{T^{\nu}T^{\nu}})=\sum_{\mu}c_{\mu}X_{\mu\nu}-\sum_{\lambda}a_{\lambda}\sum_{\mu}d_{\lambda\mu}X_{\mu\nu}=\sum_{\mu}b_{\mu}X_{\mu\nu}.$$ Since $X$ is invertible over $\mathbb Z$ by step 3.1, $b_{\mu}=0$ for all $\mu$. Hence $c_{\mu}=\sum_{\lambda}a_{\lambda}d_{\lambda\mu}$, and step 2.1 together with the defining relations [F3] gives $$[M]=\sum_{\mu}c_{\mu}[L^{\mu}]=\sum_{\lambda}a_{\lambda}\sum_{\mu}d_{\lambda\mu}[L^{\mu}]=\sum_{\lambda}a_{\lambda}[W^{\lambda}].$$ [step 2.1, step 3.1, F1, F3]

5.1 Consequence: if two finite-dimensional right $S$-modules $M,N$ satisfy $\dim_F(M\varphi_{T^{\nu}T^{\nu}})=\dim_F(N\varphi_{T^{\nu}T^{\nu}})$ for all $\nu\in\Lambda^{+}(d,n)$, then applying the argument of step 4.1 to the difference of their multiplicity vectors shows $\sum_{\mu}([M:L^{\mu}]-[N:L^{\mu}])X_{\mu\nu}=0$ for all $\nu$, so the invertibility of $X$ gives $[M:L^{\mu}]=[N:L^{\mu}]$ for all $\mu$ and hence $[M]=[N]$ in $G_0(S\text{-mod})$. [step 3.1, step 4.1, F3] ∎
