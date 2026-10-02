---
id: thm-schur-weyl-decomposition-with-length-cutoff
kind: theorem
title: "Schur-Weyl decomposition and highest weights"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps: [thm-schur-weyl-double-centralizer, lem-schur-weyl-length-cutoff-by-column-antisymmetrization, lem-schur-weyl-polytabloid-highest-weight, thm-complex-irreducibles-of-symmetric-groups-are-specht-modules, thm-maschkes-theorem-for-finite-groups-over-fields-whose-characteristic-does-not-divide-the-group-order, def-commuting-symmetric-and-linear-actions-on-tensor-power, cor-finite-dimensional-representations-are-completely-reducible-when-char-k-does-not-divide-group-order, def-completely-reducible-representation, thm-isotypic-decomposition-of-a-completely-reducible-representation-is-unique, def-isotypic-component-of-a-completely-reducible-representation, lem-isotypical-evaluation-and-subspaces-of-multiplicity-spaces, cor-schurs-lemma-for-irreducible-representations, cor-endomorphisms-of-an-irreducible-over-an-algebraically-closed-field-are-scalars, thm-simple-modules-over-semisimple-rings, thm-tensor-product-basis-from-bases, cor-finite-iterated-tensor-products-represent-multilinear-maps, def-column-antisymmetrizer-polytabloid-and-specht-module, def-irreducible-completely-reducible-and-faithful-lie-algebra-representation]
justified_by: []
aliases: []
landmark: true
proof_strategy: constructive
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Pavel Etingof et al., Introduction to Representation Theory, MIT 18.712 Chapter 4, Theorems 4.54-4.57 and Sections 4.18-4.21, PDF pp. 18-21"
      url: "https://ocw.mit.edu/courses/18-712-introduction-to-representation-theory-fall-2010/84358595a02a73bced2c4e363a5d66f0_MIT18_712F10_ch4.pdf"
    - title: "Hsueh-Yung Lin, Modern Algebra I, Section 27, printed pp. 71-74"
      url: "https://homepage.ntu.edu.tw/~hsuehyunglin/Modern_Algebra_I.pdf"
verification:
  precheck: pass
---

## Statement

Let $V$ be a finite-dimensional complex vector space of dimension $d\ge0$,
let $n\ge0$, and let $E:=V^{\otimes n}$ carry the commuting left place action
of $S_n$ and diagonal action of $\operatorname{GL}(V)$
([[def-commuting-symmetric-and-linear-actions-on-tensor-power]]). Let
$B:=\operatorname{span}_{\mathbb C}\{g^{\otimes n}:g\in\operatorname{GL}(V)\}$,
and for $\lambda\vdash n$ put
$$M_\lambda:=\operatorname{Hom}_{S_n}\bigl(S^\lambda,E\bigr),$$
on which $\operatorname{GL}(V)$ acts by postcomposition
$(g\cdot\psi)(s):=g^{\otimes n}\psi(s)$ and $B$ acts by
$b\cdot\psi:=b\circ\psi$. Then:

1. **(Decomposition.)** There is an isomorphism of
   $(S_n\times\operatorname{GL}(V))$-modules
   $$E\cong\bigoplus_{\lambda\vdash n,\ \ell(\lambda)\le d}S^\lambda\otimes M_\lambda,$$
   where $S_n$ acts on the first factor and trivially on $M_\lambda$ and
   $\operatorname{GL}(V)$ acts on $M_\lambda$ by postcomposition and trivially
   on $S^\lambda$. The sum runs over exactly the partitions $\lambda\vdash n$
   with at most $d$ rows.
2. **(Nonzero irreducible factors.)** For every $\lambda\vdash n$ with
   $\ell(\lambda)\le d$ the space $M_\lambda$ is nonzero and irreducible as a
   module over $B$ by postcomposition, hence also irreducible as a
   $\operatorname{GL}(V)$-module and as a $\mathfrak{gl}(V)$-module under
   $x\mapsto\Delta(x)$
   ([[def-irreducible-completely-reducible-and-faithful-lie-algebra-representation]]);
   for $\ell(\lambda)>d$ one has $M_\lambda=0$.
3. **(Pairwise inequivalence of the nonzero factors.)** If $\lambda\ne\mu$
   are partitions of $n$ with $\ell(\lambda)\le d$ and $\ell(\mu)\le d$, then
   $M_\lambda$ and $M_\mu$ are non-isomorphic as $B$-modules, as
   $\operatorname{GL}(V)$-modules and as $\mathfrak{gl}(V)$-modules. Thus the
   nonzero factors in the decomposition of claim 1 are pairwise inequivalent,
   and a nonzero $M_\lambda$ is not isomorphic to a zero $M_\mu$ with
   $\ell(\mu)>d$ because their dimensions differ; no assertion is made about
   two zero factors.
4. **(Highest weight $\lambda$.)** For every $\lambda\vdash n$ with
   $\ell(\lambda)\le d$, writing $\lambda_i:=0$ for $i>\ell(\lambda)$, the
   module $M_\lambda$ has highest weight $\lambda$ with respect to the Borel
   of upper triangular matrices: it contains a nonzero vector $\varphi$ with
   $\Delta(E_{ii})\circ\varphi=\lambda_i\varphi$ for all $i$ and
   $\Delta(E_{ij})\circ\varphi=0$ for all $i<j$, and every nonzero
   $\psi\in M_\lambda$ killed by all raising operators $\Delta(E_{ij})$,
   $i<j$, and satisfying $\Delta(E_{ii})\circ\psi=\mu_i\psi$ for scalars
   $\mu_1,\dots,\mu_d$ satisfies $\mu=\lambda$ and lies in
   $\mathbb C\varphi$.
5. **(Homogeneous polynomial module of degree $n$.)** Fix a basis
   $e_1,\dots,e_d$ of $V$ and write $ge_j=\sum_ig_{ij}e_i$ for the matrix
   entries of $g\in\operatorname{GL}(V)$. For every $\lambda\vdash n$ with
   $\ell(\lambda)\le d$ and every basis of $M_\lambda$, each matrix
   coefficient $g\mapsto\langle\psi^*,g\cdot\psi\rangle$ of the action on
   $M_\lambda$ is a homogeneous polynomial of degree $n$ in the entries
   $g_{ij}$.

All statements are over $\mathbb C$.

## Facts & Assumptions

**Given:** a finite-dimensional complex vector space $V$ of dimension $d$,
an integer $n\ge0$, the module $E=V^{\otimes n}$ with its place
$S_n$-action and diagonal $\operatorname{GL}(V)$-action, the algebra
$B=\operatorname{span}_{\mathbb C}\{g^{\otimes n}\}$, and the spaces
$M_\lambda=\operatorname{Hom}_{S_n}(S^\lambda,E)$ with the postcomposition
actions.

[F1] The place action
$\sigma\cdot(v_1\otimes\cdots\otimes v_n)=v_{\sigma^{-1}(1)}\otimes\cdots\otimes v_{\sigma^{-1}(n)}$
and the diagonal action
$g^{\otimes n}(v_1\otimes\cdots\otimes v_n)=gv_1\otimes\cdots\otimes gv_n$
are well-defined linear actions that commute with each other, $E=\mathbb C$
for $n=0$, the assignment
$\Delta(X)=\sum_{a=1}^n\mathbf 1^{\otimes(a-1)}\otimes X\otimes\mathbf 1^{\otimes(n-a)}$
is linear in $X$, and if $e_1,\dots,e_d$ is a basis of $V$ then the
assignment $(v_1,\dots,v_n)\mapsto v_1\otimes\cdots\otimes v_n$ is
multilinear, so $g^{\otimes n}$ is computed on basis tensors by expanding
each factor
([[def-commuting-symmetric-and-linear-actions-on-tensor-power]],
[[cor-finite-iterated-tensor-products-represent-multilinear-maps]]).

[F2] The $d^n$ elementary tensors $e_{a_1}\otimes\cdots\otimes e_{a_n}$ form
a basis of $E$ ([[thm-tensor-product-basis-from-bases]]).

[F3] Every finite-dimensional complex representation of $S_n$ is completely
reducible ([[cor-finite-dimensional-representations-are-completely-reducible-when-char-k-does-not-divide-group-order]],
[[thm-maschkes-theorem-for-finite-groups-over-fields-whose-characteristic-does-not-divide-the-group-order]],
[[def-completely-reducible-representation]]).

[F4] The modules $\{S^\lambda:\lambda\vdash n\}$ form a complete irredundant
list of the finite-dimensional irreducible complex $S_n$-representations
([[thm-complex-irreducibles-of-symmetric-groups-are-specht-modules]],
[[def-column-antisymmetrizer-polytabloid-and-specht-module]]).

[F5] For a finite-dimensional completely reducible representation $U$ of
$S_n$ the isotypic components $U_{(\lambda)}$, the sums of all irreducible
subrepresentations isomorphic to $S^\lambda$, are defined and satisfy
$U=\bigoplus_{\lambda\vdash n}U_{(\lambda)}$ with the decomposition
independent of choices; each $U_{(\lambda)}$ is a direct sum of copies of
$S^\lambda$
([[def-isotypic-component-of-a-completely-reducible-representation]],
[[thm-isotypic-decomposition-of-a-completely-reducible-representation-is-unique]]).

[F6] If $U$ is a finite-dimensional $S^\lambda$-isotypical $S_n$-module and
$N_\lambda=\operatorname{Hom}_{S_n}(S^\lambda,U)$, then evaluation
$E_U:S^\lambda\otimes N_\lambda\to U$, $s\otimes f\mapsto f(s)$, is an
$S_n$-isomorphism; if $U,U'$ are such modules, every $S_n$-map
$U\to U'$ is uniquely $E_{U'}(1\otimes a)E_U^{-1}$ for a linear
$a:N_\lambda\to N'_\lambda$, and these identifications preserve composition
([[lem-isotypical-evaluation-and-subspaces-of-multiplicity-spaces]]).

[F7] A nonzero $S_n$-intertwiner between irreducible complex
$S_n$-representations is an isomorphism, and every endomorphism of an
irreducible complex representation is a scalar
([[cor-schurs-lemma-for-irreducible-representations]],
[[cor-endomorphisms-of-an-irreducible-over-an-algebraically-closed-field-are-scalars]]).

[F8] $B$ is a unital $\mathbb C$-subalgebra of $\operatorname{End}(E)$ equal
to the centralizer $\operatorname{End}_{S_n}(E)$ of the place action, and $B$
is also the unital subalgebra generated by
$\{\Delta(T):T\in\operatorname{End}(V)\}$
([[thm-schur-weyl-double-centralizer]]).

[F9] For every $\lambda\vdash n$ one has
$\operatorname{Hom}_{S_n}(S^\lambda,E)\ne0$ if and only if
$\ell(\lambda)\le d$
([[lem-schur-weyl-length-cutoff-by-column-antisymmetrization]]).

[F10] Assume $\ell(\lambda)\le d$ and let $t$ be a $\lambda$-tableau. The
row-labelled map $\Phi:M^\lambda\to E$, $\Phi(\sigma\cdot\{t\})=\sigma\cdot w_t$
with $w_t$ carrying $e_{r(a)}$ in the place labelled $a$, restricts to a
nonzero $\varphi=\Phi|_{S^\lambda}\in M_\lambda$ with
$\Delta(E_{ii})\circ\varphi=\lambda_i\varphi$ for all $i$ (where
$\lambda_i:=0$ for $i>\ell(\lambda)$) and
$\Delta(E_{ij})\circ\varphi=0$ for all $i<j$; and if $M_\lambda$ is
irreducible over $B$ by postcomposition, then every nonzero
$\psi\in M_\lambda$ with $\Delta(E_{ij})\circ\psi=0$ for all $i<j$ and
$\Delta(E_{ii})\circ\psi=\mu_i\psi$ for scalars $\mu_i$ satisfies
$\mu=\lambda$ and $\psi\in\mathbb C\varphi$
([[lem-schur-weyl-polytabloid-highest-weight]]).

[F11] Let $r\ge1$, let every $m_i\ge1$ and let every $D_i$ be a division
ring. Every simple left module over $R=\prod_{i=1}^rM_{m_i}(D_i)$ is
supported on exactly one factor and is isomorphic to that factor's column
module $D_i^{m_i}$, these column modules representing all simple left
$R$-module isomorphism classes, one per factor
([[thm-simple-modules-over-semisimple-rings]]).

[F12] A subspace of a $\mathfrak{gl}(V)$-module is a submodule when it is
stable under $\Delta(x)$ for every $x\in\mathfrak{gl}(V)$; the module is
irreducible when it is nonzero and has no proper nonzero submodule
([[def-irreducible-completely-reducible-and-faithful-lie-algebra-representation]]).

## Proof

**Proof technique:** constructive.

1.1 [construct] By [F3] the $S_n$-module $E$ is completely reducible, so by [F5] and [F4] its isotypic decomposition $E=\bigoplus_{\lambda\vdash n}E_\lambda$ over the classes $S^\lambda$ is defined and unique, with $E_\lambda$ a (possibly zero) direct sum of copies of $S^\lambda$. If $\psi:S^\lambda\to E$ is $S_n$-linear, then $\ker\psi$ is a submodule of the irreducible $S^\lambda$, so $\psi=0$ or $\psi$ is injective with image isomorphic to $S^\lambda$, hence contained in $E_\lambda$; therefore $\operatorname{Hom}_{S_n}(S^\lambda,E)=\operatorname{Hom}_{S_n}(S^\lambda,E_\lambda)=M_\lambda$. Applying [F6] to the isotypical module $E_\lambda$ gives an $S_n$-isomorphism $S^\lambda\otimes M_\lambda\to E_\lambda$, $s\otimes\psi\mapsto\psi(s)$, so $\dim_{\mathbb C}E_\lambda=\dim_{\mathbb C}S^\lambda\cdot\dim_{\mathbb C}M_\lambda$ and $E_\lambda=0$ if and only if $M_\lambda=0$. [F3, F4, F5, F6, construct, algebra]

1.2 Fix a basis $s_1,\dots,s_k$ of $S^\lambda$ and consider the evaluation map $\mathrm{ev}:M_\lambda\to E^k$, $\psi\mapsto(\psi(s_1),\dots,\psi(s_k))$. It is $\mathbb C$-linear and injective, because an $S_n$-linear map is determined by its values on a basis; and it intertwines the postcomposition action on $M_\lambda$ with the componentwise diagonal action on $E^k$, since $(g\cdot\psi)(s_l)=g^{\otimes n}\psi(s_l)$ for every $l$. [given, F1, construct, algebra]

1.3 Fix the basis $e_1,\dots,e_d$ of $V$ and write $ge_j=\sum_ig_{ij}e_i$. By the multilinearity of the tensor product in [F1], for all $b_1,\dots,b_n\in\{1,\dots,d\}$ one has $g^{\otimes n}(e_{b_1}\otimes\cdots\otimes e_{b_n})=(ge_{b_1})\otimes\cdots\otimes(ge_{b_n})=\sum_{a_1,\dots,a_n}\bigl(\prod_{l=1}^ng_{a_lb_l}\bigr)e_{a_1}\otimes\cdots\otimes e_{a_n}$; hence each matrix entry of $g^{\otimes n}$ in the elementary tensor basis [F2] is either $0$ or a monomial $\prod_{l=1}^ng_{a_lb_l}$ of degree $n$ in the entries $g_{ij}$. [F1, F2, algebra]

2.1 The evaluation isomorphism of step 1.1 intertwines the postcomposition action of $\operatorname{GL}(V)$ on $M_\lambda$ with the diagonal action on $E_\lambda$: for $g\in\operatorname{GL}(V)$, $s\in S^\lambda$ and $\psi\in M_\lambda$ one has $E_\lambda(s\otimes g\cdot\psi)=(g\cdot\psi)(s)=g^{\otimes n}\psi(s)=g^{\otimes n}E_\lambda(s\otimes\psi)$. It also intertwines the action of $S_n$, which is $\rho_\lambda\otimes\mathrm{id}$ because $E_\lambda(\sigma s\otimes\psi)=\psi(\sigma s)=\sigma\psi(s)=\sigma E_\lambda(s\otimes\psi)$; equivalently the conjugation action $\sigma\cdot\psi=\sigma\psi\sigma^{-1}$ is trivial on $M_\lambda$, since $\psi$ is $S_n$-linear. Hence $E_\lambda\cong S^\lambda\otimes M_\lambda$ as $(S_n\times\operatorname{GL}(V))$-modules. [given, F1, F6, step 1.1, algebra]

2.2 Let $\psi\in M_\lambda$ and $\psi^*\in M_\lambda^*$. Since $\mathrm{ev}$ of step 1.2 is injective, it has a linear retraction: choosing a basis of the image $\mathrm{ev}(M_\lambda)$ and extending it to a basis of the finite-dimensional space $E^k$, define $r:E^k\to M_\lambda$ on the basis by $r(v)=\mathrm{ev}^{-1}(v)$ for $v$ in that basis of the image and $r=0$ on the added vectors, so that $r\circ\mathrm{ev}=\mathrm{id}$. Then $g\cdot\psi=r\bigl(\mathrm{ev}(g\cdot\psi)\bigr)$ and the matrix coefficient is $\psi^*(g\cdot\psi)=(\psi^*\circ r)\bigl(g^{\otimes n}\psi(s_1),\dots,g^{\otimes n}\psi(s_k)\bigr)$. The vectors $\psi(s_l)\in E$ are fixed, so their coordinates in the elementary tensor basis [F2] are constants, and by step 1.3 the numbers $\psi^*(g\cdot\psi)$ are constant-coefficient linear combinations of monomials of degree $n$ in the entries $g_{ij}$: they are homogeneous polynomials of degree $n$. This holds for the matrix coefficients of the action with respect to any basis of $M_\lambda$, so $M_\lambda$ is a homogeneous polynomial $\operatorname{GL}(V)$-module of degree $n$. This proves claim 5. [F2, step 1.2, step 1.3, construct, algebra]

3.1 By [F9], $M_\lambda\ne0$ exactly when $\ell(\lambda)\le d$; combined with step 1.1 and step 2.1 this gives the $(S_n\times\operatorname{GL}(V))$-isomorphism $E=\bigoplus_{\ell(\lambda)\le d}E_\lambda\cong\bigoplus_{\ell(\lambda)\le d}S^\lambda\otimes M_\lambda$, the omitted components being exactly the zero ones, and proves claim 1. [F9, step 1.1, step 2.1, algebra]

4.1 An $S_n$-endomorphism $F\in\operatorname{End}_{S_n}(E)$ maps each isotypic component $E_\lambda$ into itself: $E_\lambda$ is a sum of copies of $S^\lambda$ by [F5], and the image under $F$ of such a copy is either $0$ or, by irreducibility of $S^\lambda$, a copy of $S^\lambda$, hence lies in $E_\lambda$. Restriction gives an isomorphism of $\mathbb C$-algebras $\operatorname{End}_{S_n}(E)\to\prod_{\lambda\vdash n}\operatorname{End}_{S_n}(E_\lambda)$ (injective, since $F$ is determined on the direct sum, and blockwise surjective, with componentwise composition). For each $\lambda$ with $M_\lambda\ne0$, [F6] identifies $\operatorname{End}_{S_n}(E_\lambda)$ with $\operatorname{End}(M_\lambda)$: every $F_\lambda\in\operatorname{End}_{S_n}(E_\lambda)$ is uniquely $E_\lambda(1\otimes a_\lambda)E_\lambda^{-1}$ with $a_\lambda\in\operatorname{End}(M_\lambda)$ and the identification preserves composition. Therefore, by [F8], $B=\operatorname{End}_{S_n}(E)\cong\prod_{\ell(\lambda)\le d}\operatorname{End}(M_\lambda)$ as $\mathbb C$-algebras, the product being over the $\lambda$ with $M_\lambda\ne0$ (and $B=0$ when there are none). [F5, F6, F8, step 1.1, step 3.1, algebra]

5.1 Under the identification of step 4.1, an element $b\in B$ acts on $E_\lambda$ as $E_\lambda(1\otimes a_\lambda)E_\lambda^{-1}$, where $a_\lambda$ is its $\lambda$-component in $\prod\operatorname{End}(M_\lambda)$; hence for $\psi\in M_\lambda$ one has $(b\cdot\psi)(s)=b(\psi(s))=E_\lambda(s\otimes a_\lambda\psi)=(a_\lambda\psi)(s)$, that is, $b$ acts on $M_\lambda$ by $a_\lambda$. Since $M_\lambda\ne0$ for $\ell(\lambda)\le d$ by [F9], $\operatorname{End}(M_\lambda)$ is the full matrix algebra $M_{m_\lambda}(\mathbb C)$ with $m_\lambda=\dim_{\mathbb C}M_\lambda\ge1$, so $B\cong\prod_{\ell(\lambda)\le d}M_{m_\lambda}(\mathbb C)$ is a product of full matrix algebras over the field $\mathbb C$; by [F11] every simple left $B$-module is supported on exactly one factor and is isomorphic to that factor's column module, and distinct factors have non-isomorphic column modules. The postcomposition module $M_\lambda$ is the column module of the $\lambda$-th factor $\operatorname{End}(M_\lambda)$ (the other factors acting as zero, as step 4.1 shows the action factors through the $\lambda$-component), so $M_\lambda$ is a simple $B$-module and $M_\lambda\cong M_\mu$ as $B$-modules implies $\lambda=\mu$. [F9, F11, step 4.1, algebra]

6.1 Because $B$ is spanned by the operators $g^{\otimes n}$, a $\operatorname{GL}(V)$-stable subspace of $M_\lambda$ is stable under every $b\in B$; because $B$ is the unital subalgebra generated by the operators $\Delta(T)$, $T\in\operatorname{End}(V)$, a subspace stable under all $\Delta(T)$ (that is, a $\mathfrak{gl}(V)$-submodule, [F12]) is also $B$-stable. By step 5.1 the space $M_\lambda$ is a simple $B$-module and nonzero, so it has no proper nonzero subspace of either kind: it is irreducible as a $\operatorname{GL}(V)$-module and as a $\mathfrak{gl}(V)$-module. This proves claim 2, the case $\ell(\lambda)>d$ being [F9]. [F8, F9, F12, step 5.1, algebra]

6.2 Let $\lambda,\mu\vdash n$ satisfy $\ell(\lambda)\le d$ and $\ell(\mu)\le d$, so that $M_\lambda\ne0$ and $M_\mu\ne0$ by [F9], and let $T:M_\lambda\to M_\mu$ be an isomorphism of $\operatorname{GL}(V)$-modules. For $b=\sum_gc_gg^{\otimes n}\in B$ and $\psi\in M_\lambda$ one has $T(b\cdot\psi)=\sum_gc_gT(g^{\otimes n}\psi)=\sum_gc_gg^{\otimes n}T(\psi)=b\cdot T(\psi)$, so $T$ is a $B$-module isomorphism and, both modules being nonzero, step 5.1 forces $\lambda=\mu$. Likewise an isomorphism of $\mathfrak{gl}(V)$-modules intertwines every $\Delta(T)$, and since finite sums and products of such operators span $B$ by [F8], it is a $B$-module isomorphism and again forces $\lambda=\mu$. If exactly one of $\ell(\lambda),\ell(\mu)$ is at most $d$, then exactly one of $M_\lambda,M_\mu$ is zero by [F9], so the two are not isomorphic even as vector spaces. This proves claim 3. [F8, F9, step 5.1, algebra]

6.3 Assume $\ell(\lambda)\le d$, so $M_\lambda\ne0$ by [F9] and $M_\lambda$ is irreducible over $B$ by step 5.1. The highest weight lemma [F10] then supplies a nonzero $\varphi\in M_\lambda$ with $\Delta(E_{ii})\circ\varphi=\lambda_i\varphi$ (with $\lambda_i=0$ for $i>\ell(\lambda)$) and $\Delta(E_{ij})\circ\varphi=0$ for $i<j$, and shows that every nonzero $\psi\in M_\lambda$ killed by all raising operators and of weight $\mu$ satisfies $\mu=\lambda$ and $\psi\in\mathbb C\varphi$. This proves claim 4. [F10, F9, step 5.1, algebra]

7.1 Boundary and choice audit. For $n=0$ one has $E=\mathbb C$, the only partition is $\varnothing$ with $\ell(\varnothing)=0\le d$, $M_\varnothing=\operatorname{Hom}(\mathbb C,\mathbb C)=\mathbb C$, and claim 1 reads $E\cong S^\varnothing\otimes M_\varnothing$; $B=\mathbb C\,\mathrm{id}$, $M_\varnothing$ is a one-dimensional simple $B$-module, claim 4 holds with $\lambda=(0,\dots,0)$ and claim 5 with degree $0$ polynomials, the constants. For $d=0$ and $n\ge1$ one has $V=0$, $E=0$ and no partition of $n$ satisfies $\ell(\lambda)\le0$, so the sum in claim 1 is empty and $E=0$, the assertions of claims 2, 3, 4 and 5 are vacuous since all $M_\lambda=0$, and $B=\operatorname{End}_{S_n}(0)=0$ consistently. For $d\ge1$ and $n\ge1$ there are finitely many partitions of $n$ and all spaces are finite-dimensional. The argument uses that $\mathbb C$ has characteristic $0$ not dividing $n!$ ([F3]), that $\mathbb C$ is algebraically closed ([F6], [F7]), and the fixed basis of $V$, the fixed basis of $S^\lambda$, the fixed tableau $t$ and the finite-dimensional retraction $r$ of step 2.2; finite sums over the partitions of $n$ and over the coordinate index sets occur throughout, and no choice principle is invoked. This proves claims 1, 2, 3, 4 and 5. [F1, F3, F9, step 3.1, step 6.1, step 6.2, step 6.3, step 2.2, discharge-construct] ∎

## Remarks

- **Two actions, two refinements.** The Schur-Weyl decomposition refines
  the isotypic decomposition of $E$ as an $S_n$-module by the action of the
  centralizer $B=\operatorname{End}_{S_n}(E)$: the double centralizer
  theorem ([[thm-schur-weyl-double-centralizer]]) turns $B$ into a product
  of full matrix algebras, one factor on each nonzero multiplicity space, which
  is both why each nonzero $M_\lambda$ is irreducible and why the distinct
  nonzero $\lambda$-factors are inequivalent. The length cutoff comes from
  [[lem-schur-weyl-length-cutoff-by-column-antisymmetrization]] and the
  weight from [[lem-schur-weyl-polytabloid-highest-weight]]; no root system,
  PBW theorem or classification of $\mathfrak{gl}(V)$-modules is used.

- **Symmetric and exterior powers.** For $\lambda=(n)$ the factor
  $M_{(n)}$ is isomorphic to the $n$-th symmetric power of $V$, and for
  $\lambda=(1^n)$, which appears exactly when $n\le d$, the factor
  $M_{(1^n)}$ is isomorphic to the $n$-th exterior power; the highest weight
  vectors of claim 4 are the usual ones, as computed in the remarks of
  [[lem-schur-weyl-polytabloid-highest-weight]].

- **Polynomial degree.** The degree $n$ in claim 5 records the polynomiality
  of $g\mapsto g^{\otimes n}$: the matrix coefficients are homogeneous of
  degree $n$ because they are combinations of $n$-fold products of the
  entries of $g$. This is the precise content of the phrase that each
  multiplicity space $M_\lambda$ is a homogeneous polynomial module of
  degree $n$.
