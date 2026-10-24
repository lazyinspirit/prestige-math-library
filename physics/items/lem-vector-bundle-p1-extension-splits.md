---
id: lem-vector-bundle-p1-extension-splits
kind: lemma
title: Extensions of line bundles on the projective line split after ordering
status: published
origin: pipeline
deps:
  - cor-h0-projective-space-o-d-homogeneous-polynomials
  - cor-top-cohomology-projective-space-o-d
  - def-axiom-of-choice
  - def-direct-sum-of-a-family-of-modules
  - def-exact-sequence-sheaves
  - def-invertible-sheaf
  - def-kernel-cokernel-image-sheaves
  - def-locally-free-sheaf-finite-rank
  - def-module-on-ringed-space
  - def-section-restriction-and-global-section
  - def-sheaf-tensor-product
  - def-twist-quasi-coherent-sheaf-projective
  - def-twisting-sheaf-proj
  - lem-stalk-tensor-product
  - thm-exactness-of-sheaves-stalkwise
  - thm-long-exact-sequence-sheaf-cohomology
  - thm-projective-space-as-proj
  - thm-twisting-sheaf-invertible-standard-graded
  - thm-zero-sheaf-cohomology-global-sections
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Michael Artin, MIT 18.721 Introduction to Algebraic Geometry (July 20, 2020 notes), Ch. 8"
      url: "https://math.mit.edu/classes/18.721/ag-jul20.pdf"
    - title: "Ravi Vakil, The Rising Sea (version of October 21, 2025), Chs. 18.5 and 21"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGoct2125public.pdf"
pipeline_run: frontier-37-owner-30
verification:
  audited: 2026-10-02
  precheck: pass
---

## Statement

Assume the Axiom of Choice as inherited from the sheaf-cohomology suppliers.
Let $k$ be a field and put $X=\mathbb P^1_k$. Let
$$0\to\mathcal O_X\to M\to W\to0$$
be a short exact sequence of finite locally free $\mathcal O_X$-modules
([[def-locally-free-sheaf-finite-rank]]) in which $W$ is isomorphic to a finite
direct sum of twisting sheaves $\mathcal O_X(n_i)$
([[def-twisting-sheaf-proj]]) with $n_i\le0$ for every $i$. Then $M$ is
isomorphic to $\mathcal O_X$ directly summed with $W$,
$M\cong\mathcal O_X\oplus W$. More generally, if
$$0\to\mathcal O_X(b)\to E\to F\to0$$
is a short exact sequence of finite locally free sheaves with $F$ isomorphic
to a direct sum of line bundles $\mathcal O_X(b_i)$, $b_i\le b$, then
$E\cong\mathcal O_X(b)\oplus F$.

## Facts & Assumptions

**Given:** a field $k$, the scheme $X=\mathbb P^1_k$, and the two short exact sequences of the statement.

[F1] $X=\mathbb P^1_k\cong\operatorname{Proj}k[x_0,x_1]$. The twisting sheaves satisfy $\mathcal O_X(0)=\mathcal O_X$, each $\mathcal O_X(d)$ is invertible, and the multiplication maps $\mathcal O_X(m)\otimes\mathcal O_X(n)\to\mathcal O_X(m+n)$ are isomorphisms ([[thm-projective-space-as-proj]], [[def-twisting-sheaf-proj]], [[thm-twisting-sheaf-invertible-standard-graded]]). The twist of an $\mathcal O_X$-module is $\mathcal F(d)=\mathcal F\otimes\mathcal O_X(d)$ with $\mathcal F(0)\cong\mathcal F$ and $\mathcal F(m)\otimes\mathcal O_X(n)\cong\mathcal F(m+n)$ ([[def-twist-quasi-coherent-sheaf-projective]]); in particular $(\mathcal F(-c))(c)\cong\mathcal F$ for every integer $c$, and twisting is functorial, so it carries isomorphisms to isomorphisms ([[def-sheaf-tensor-product]]).

[F2] For every $d\in\mathbb Z$ one has $H^0(X,\mathcal O_X(d))=0$ for $d<0$ and $H^0(X,\mathcal O_X(d))\cong k^{\,d+1}$ for $d\ge0$ ([[cor-h0-projective-space-o-d-homogeneous-polynomials]]), and $H^1(X,\mathcal O_X(d))=0$ for $d\ge-1$ ([[cor-top-cohomology-projective-space-o-d]]). In particular $H^0(X,\mathcal O_X)\cong k$ with unit section $1$.

[F3] A short exact sequence of $\mathcal O_X$-modules induces a long exact sequence of cohomology groups ([[thm-long-exact-sequence-sheaf-cohomology]]), and $H^0(X,\mathcal F)\cong\Gamma(X,\mathcal F)$ is the module of global sections of $\mathcal F$ ([[thm-zero-sheaf-cohomology-global-sections]]).

[F4] (Sections as morphisms.) For an $\mathcal O_X$-module $\mathcal F$ every global section $s\in\Gamma(X,\mathcal F)$ determines a morphism of $\mathcal O_X$-modules $s^\sharp:\mathcal O_X\to\mathcal F$ by $s^\sharp_U(a)=a\cdot s|_U$ for opens $U\subseteq X$ and $a\in\mathcal O_X(U)$, and conversely $\varphi\mapsto\varphi_X(1)$ inverts this assignment; the maps are mutual inverses, so $\Gamma(X,\mathcal F)\cong\operatorname{Hom}_{\mathcal O_X}(\mathcal O_X,\mathcal F)$, and for a morphism $\psi:\mathcal F\to\mathcal G$ one has $(\psi\circ s^\sharp)_X(1)=\psi_X(s)$. The construction uses only that $\mathcal F(U)$ is an $\mathcal O_X(U)$-module with restriction maps linear over the ring maps, and that the unit section $1$ generates $\mathcal O_X$ as an $\mathcal O_X$-module ([[def-module-on-ringed-space]], [[def-section-restriction-and-global-section]]).

[F5] A sequence of sheaves of modules is exact if and only if all its stalk sequences are exact; stalk formation preserves kernels, commutes with the tensor product of $\mathcal O_X$-modules and turns an invertible factor into a free module of rank one over the local ring, so tensoring with an invertible sheaf preserves exactness ([[thm-exactness-of-sheaves-stalkwise]], [[def-kernel-cokernel-image-sheaves]], [[lem-stalk-tensor-product]], [[def-exact-sequence-sheaves]]). For a finite family the direct sum of modules is a coproduct with the coordinate injections and a product with the coordinate projections, and $0\to\mathcal F_1\to\mathcal F_1\oplus\mathcal F_2\to\mathcal F_2\to0$ is exact ([[def-direct-sum-of-a-family-of-modules]]).

[F6] The Axiom of Choice is inherited from the Proj and twisting-sheaf suppliers [F1] and the cohomology suppliers [F2] and [F3]; the selection made below is the selection of one lift, and the induction makes finitely many such selections ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct; prove by induction on the number of line-bundle summands of the quotient that an extension of a direct sum of line bundles of degrees at most $c$ by $\mathcal O_X(c)$ splits, splitting off a summand of minimal degree.

1.1 The induction statement. We prove, for every $r\ge0$, the assertion $P(r)$: for every $c\in\mathbb Z$ and every short exact sequence $0\to\mathcal O_X(c)\xrightarrow{i}E\xrightarrow{p}F\to0$ of finite locally free $\mathcal O_X$-modules with $F\cong\bigoplus_{i=1}^{r}\mathcal O_X(c_i)$ and $c_i\le c$ for all $i$, one has $E\cong\mathcal O_X(c)\oplus F$. Since $X\cong\operatorname{Proj}k[x_0,x_1]$ and $\mathcal O_X(1)$ generates the twisting sheaves with $\mathcal O_X(m)\otimes\mathcal O_X(n)\cong\mathcal O_X(m+n)$ by [F1], the reindexing of the $c_i$ and the canonical identifications of direct sums do not change the conclusion, and $P(r)$ for all $r$ and all $c$ gives both assertions of the Statement: the first with $c=0$. [F1, F5]

1.2 Base case. For $r=0$ one has $F=0$, so $p=0$ and $i$ is an isomorphism; hence $E\cong\mathcal O_X(c)\cong\mathcal O_X(c)\oplus F$. [F5]

1.3 Vanishing of the relevant $H^1$. Assume $r\ge1$ and that $P(r-1)$ holds. Choose an enumeration with $c_r=\min_ic_i$, put $F'=\bigoplus_{i<r}\mathcal O_X(c_i)$, so that $F\cong F'\oplus\mathcal O_X(c_r)$, and let $q:F\to\mathcal O_X(c_r)$ be the projection. Twist the given sequence by $\mathcal O_X(-c_r)$: by [F1] and [F5] the result is the short exact sequence $0\to\mathcal O_X(c-c_r)\to E(-c_r)\to F(-c_r)\to0$, with $F(-c_r)\cong F'(-c_r)\oplus\mathcal O_X$. Since $c_i-c_r\ge0$ for all $i<r$, each summand $\mathcal O_X(c_i-c_r)$ has vanishing $H^1$ by [F2], and $H^1$ vanishes on the finite direct sum $F'(-c_r)$ by induction on the number of summands: for a summand split injection $0\to G\to G\oplus\mathcal O_X(c_j-c_r)\to\mathcal O_X(c_j-c_r)\to0$ of [F5] the long exact sequence [F3] yields the exact portion $H^1(X,G)\to H^1(X,G\oplus\mathcal O_X(c_j-c_r))\to H^1(X,\mathcal O_X(c_j-c_r))$ with both outer groups zero. Also $c-c_r\ge0\ge-1$, so $H^1(X,\mathcal O_X(c-c_r))=0$ by [F2]. [F2, F3, F5]

2.1 A lift of the unit section. The long exact sequence [F3] of the twisted sequence begins $$H^0(X,E(-c_r))\to H^0(X,F(-c_r))\to H^1(X,\mathcal O_X(c-c_r))=0,$$ so the first map is surjective. The projection $q$ twisted by $\mathcal O_X(-c_r)$ is a surjection $F(-c_r)\to\mathcal O_X$ whose kernel is $F'(-c_r)$; by step 1.3 and the long exact sequence of $0\to F'(-c_r)\to F(-c_r)\to\mathcal O_X\to0$, the induced map on $H^0$ is surjective. Composing the two surjections there is $s\in H^0(X,E(-c_r))$ with image the unit section $1\in H^0(X,\mathcal O_X)\cong k$. By [F4] the section $s$ corresponds to a morphism $\sigma=s^\sharp:\mathcal O_X\to E(-c_r)$ with $p'\circ\sigma=\mathrm{id}$, where $p':E(-c_r)\to\mathcal O_X$ is the composite $q\circ p$ twisted. [F2, F3, F4]

3.1 Splitting off the minimal summand. Let $K=\ker p'\subseteq E(-c_r)$. The morphism $\Psi:K\oplus\mathcal O_X\to E(-c_r)$ defined on the summands by the inclusion of $K$ and by $\sigma$ is an isomorphism. Indeed, on stalks at a point $x$ the argument is the elementary module argument: if $k+\sigma(l)=0$ with $k\in K_x$, $l\in\mathcal O_{X,x}$, then applying $p'_x$ gives $l=0$ and then $k=0$, so $\Psi_x$ is injective; and for $m\in E(-c_r)_x$ one has $m-\sigma(p'_x(m))\in K_x$, so $\Psi_x$ is surjective. By [F5] a morphism of sheaves that is stalkwise bijective is an isomorphism. Hence $E(-c_r)\cong K\oplus\mathcal O_X$. [F5, step 2.1]

4.1 The complement is again an extension of the same shape. Let $r':F(-c_r)\to F'(-c_r)$ be the projection of step 1.3. The sequence $$0\to\mathcal O_X(c-c_r)\to K\to F'(-c_r)\to0$$ is exact, where the first map is the restriction of the inclusion of $\mathcal O_X(c-c_r)$ and the second is the restriction of $r'\circ p$ to $K$. Stalks at $x$: the sequence $0\to\mathcal O_X(c-c_r)_x\to E(-c_r)_x\to F(-c_r)_x\to0$ is exact and $F(-c_r)_x=F'(-c_r)_x\oplus\mathcal O_{X,x}$; an element of $F'(-c_r)_x$ lifted to $E(-c_r)_x$ can be corrected by an element with the same $\mathcal O_{X,x}$-component to lie in $K_x$, because $E(-c_r)_x\to\mathcal O_{X,x}$ is surjective, so $K_x\to F'(-c_r)_x$ is surjective; and its kernel is the kernel of $E(-c_r)_x\to F(-c_r)_x$, namely $\mathcal O_X(c-c_r)_x$, the inclusion being injective. Exactness of the displayed sequence follows from [F5]. Also $K$ is finite locally free: near any point, trivialize the kernel line bundle and the finite locally free quotient $F'(-c_r)$, lift the finitely many quotient basis germs to sections of $K$, and shrink so that their images equal the basis sections. These lifts define a local splitting. Together with a frame of the kernel they identify $K$ locally with a finite free sheaf, as required for $P(r-1)$. [F5, step 1.3, step 3.1]

5.1 Induction step. In the exact sequence of step 4.1 the quotient $F'(-c_r)\cong\bigoplus_{i<r}\mathcal O_X(c_i-c_r)$ has $r-1$ summands. Since $c_r=\min_i c_i$ and $c_i\le c$, their exponents satisfy $0\le c_i-c_r\le c-c_r$. Thus $P(r-1)$, applied with kernel exponent $c-c_r$, gives $K\cong\mathcal O_X(c-c_r)\oplus F'(-c_r)$. Combining with step 3.1 and twisting back by $\mathcal O_X(c_r)$, which preserves direct sums and isomorphisms by [F1] and inverts $(-c_r)$, $$E\cong E(-c_r)(c_r)\cong K(c_r)\oplus\mathcal O_X(c_r)\cong\mathcal O_X(c)\oplus F'\oplus\mathcal O_X(c_r)\cong\mathcal O_X(c)\oplus F.$$ This proves $P(r)$. [F1, step 1.3, step 3.1, step 4.1]

6.1 Conclusion. By steps 1.2 and 5.1 the assertion $P(r)$ holds for every $r\ge0$ and every $c\in\mathbb Z$; taking $c=0$ gives $M\cong\mathcal O_X\oplus W$ for the first sequence of the Statement, and the general assignment $c=b$ gives $E\cong\mathcal O_X(b)\oplus F$ whenever all $b_i\le b$. Every selection made was the choice of one lift of a specified element in step 2.1 and finitely many such selections occur, so the Axiom of Choice enters through the Proj, twisting-sheaf and cohomology suppliers recorded in [F6]. [F6, step 1.1, step 1.2, step 2.1, step 5.1] ∎
