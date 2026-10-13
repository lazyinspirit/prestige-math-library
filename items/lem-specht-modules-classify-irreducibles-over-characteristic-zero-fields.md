---
id: lem-specht-modules-classify-irreducibles-over-characteristic-zero-fields
kind: lemma
title: "Specht modules classify the irreducibles over every field of characteristic zero"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 0
deps: [def-polytabloid-specht-module-over-an-arbitrary-field,
       lem-integral-specht-garnir-straightening-and-field-basis,
       thm-complex-specht-modules-are-irreducible,
       thm-complex-irreducibles-of-symmetric-groups-are-specht-modules,
       cor-distinct-specht-modules-are-inequivalent,
       thm-maschkes-theorem-for-finite-groups-over-fields-whose-characteristic-does-not-divide-the-group-order,
       def-restriction-and-extension-of-scalars,
       thm-tensor-products-commute-with-arbitrary-direct-sums,
       def-tensor-product-of-modules-by-generators-and-relations,
       cor-schurs-lemma-for-irreducible-representations,
       cor-endomorphisms-of-an-irreducible-over-an-algebraically-closed-field-are-scalars,
       thm-group-actions-and-group-ring-modules-correspond,
       thm-group-ring-is-a-unital-algebra-with-basis-g,
       def-group-ring,
       thm-tensor-product-basis-from-bases,
       def-module-homomorphism-kernel-image-and-cokernel]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
sources:
  references:
    - title: "Thomas Church, Jordan S. Ellenberg and Benson Farb, “FI-modules and stability for representations of symmetric groups”, arXiv:1204.4533v4 (2014); published in Duke Math. J. 164 (2015) 1833–1910"
      url: "https://arxiv.org/pdf/1204.4533"
      locator: "The paragraph “Irreducible representations of $S_n$ in characteristic 0”, printed p. 13: over a field of characteristic $0$, every irreducible representation of $S_n$ is defined over $\\mathbb Q$ and the decomposition does not depend on the field"
    - title: "I. G. Macdonald, Symmetric Functions and Hall Polynomials, 2nd ed., Oxford Mathematical Monographs, 1995 (author-hosted full text)"
      url: "https://math.berkeley.edu/~corteel/MATH249/macdonald.pdf"
      locator: "Chapter I §7, printed pp. 114–115: the character table of $S_n$ and the Specht/Young classification conventions"
---

## Statement

Let $F$ be a field of characteristic $0$ and let $n\ge0$. For every partition
$\lambda\vdash n$ the field-valued Specht module $S^\lambda_F$ of
[[def-polytabloid-specht-module-over-an-arbitrary-field]] is nonzero and
irreducible, distinct partitions give non-isomorphic modules, and every
irreducible $FS_n$-module is isomorphic to exactly one of them. Consequently,
by Maschke's theorem, every finite-dimensional $FS_n$-module is a direct sum of
copies of the $S^\lambda_F$; thus the irreducible $FS_n$-modules are indexed by
the partitions of $n$ and the modules $\{S^\lambda_F:\lambda\vdash n\}$ form a
complete irredundant list.

This is the constituent convention used throughout the pair: over
$F=\mathbb C$ it specialises to the published complex classification, and over
a general characteristic-zero field $F$ it is proved by extending the rational
Specht models along $\mathbb Q\to F$, never by a scalar extension from
$\mathbb C$ to $F$.

## Facts & Assumptions

**Given:** A field $F$ of characteristic $0$, an integer $n\ge0$, and the fields $\mathbb Q\subseteq\mathbb C$; for every partition $\lambda\vdash n$ the module $S^\lambda_F$ of [[def-polytabloid-specht-module-over-an-arbitrary-field]].

[F1] For every commutative ring $R$ and $\lambda\vdash n$, the tabloid module $M^\lambda_R=R^{(\Omega_\lambda)}$ and the $R$-span $S^\lambda_R$ of the polytabloids $e_t\subseteq M^\lambda_R$ are left $R[S_n]$-modules; the coefficient of the tabloid $\{t\}$ in $e_t$ is $1$, so $e_t\ne0$ and $S^\lambda_R\ne0$ whenever $R$ is a nonzero ring; and for $R=\mathbb C$ the module $S^\lambda_{\mathbb C}$ is the published complex Specht module $S^\lambda$, so the published complex statements apply to it ([[def-polytabloid-specht-module-over-an-arbitrary-field]]).

[F2] The standard polytabloids are a $\mathbb Z$-basis of $S^\lambda_{\mathbb Z}$, and for every field $E$ their coefficient reductions are an $E$-basis of $S^\lambda_E$; in particular $\dim_ES^\lambda_E=f^\lambda$ for every field $E$, independently of $E$ ([[lem-integral-specht-garnir-straightening-and-field-basis]]).

[F3] $S^\lambda_{\mathbb C}$ is irreducible; the modules $\{S^\lambda_{\mathbb C}:\lambda\vdash n\}$ form a complete irredundant list of the finite-dimensional irreducible complex $S_n$-modules, so any nonzero finite-dimensional complex $S_n$-module has an irreducible submodule isomorphic to some $S^\lambda_{\mathbb C}$, and $S^\lambda_{\mathbb C}\cong S^\mu_{\mathbb C}$ forces $\lambda=\mu$ ([[thm-complex-specht-modules-are-irreducible]], [[thm-complex-irreducibles-of-symmetric-groups-are-specht-modules]], [[cor-distinct-specht-modules-are-inequivalent]]).

[F4] Let $G$ be finite and $k$ a field with $\operatorname{char}k\nmid|G|$, and let $W\le V$ be a subrepresentation of a finite-dimensional $k$-representation $V$. Then $W$ has a complement: $V=W\oplus U$ for some subrepresentation $U$. Over a field of characteristic $0$ this hypothesis holds for $G=S_n$; hence every finite-dimensional $kS_n$-module with $\operatorname{char}k=0$ is a finite direct sum of simple modules ([[thm-maschkes-theorem-for-finite-groups-over-fields-whose-characteristic-does-not-divide-the-group-order]]).

[F5] For a commutative ring $k$ and a group $G$, $k$-linear $G$-actions on a $k$-module correspond bijectively to $k[G]$-module structures, and a $k$-linear map is $G$-equivariant exactly when it is a $k[G]$-module homomorphism; the group ring $k[G]$ has the basis $([g])_{g\in G}$ with $[g][h]=[gh]$ and identity $[e]$ ([[def-group-ring]], [[thm-group-ring-is-a-unital-algebra-with-basis-g]], [[thm-group-actions-and-group-ring-modules-correspond]]).

[F6] A nonzero homomorphism between irreducible modules over a group algebra is an isomorphism, and over an algebraically closed field every endomorphism of an irreducible representation is a scalar ([[cor-schurs-lemma-for-irreducible-representations]], [[cor-endomorphisms-of-an-irreducible-over-an-algebraically-closed-field-are-scalars]]).

[F7] If $M$ has basis $(m_i)$ and $N$ has basis $(n_j)$ over a commutative ring, then $M\otimes N$ has basis $(m_i\otimes n_j)$; tensor products commute with arbitrary direct sums in either variable; extension of scalars along a ring homomorphism $R\to S$ sends an $R$-module $M$ to $S\otimes_RM$ ([[thm-tensor-product-basis-from-bases]], [[thm-tensor-products-commute-with-arbitrary-direct-sums]], [[def-restriction-and-extension-of-scalars]], [[def-tensor-product-of-modules-by-generators-and-relations]]).

## Proof

**Proof technique:** direct.

1.1 Fix $\lambda\vdash n$. For every field $E$ the standard polytabloids are an $E$-basis of $S^\lambda_E$, so $\dim_ES^\lambda_E=f^\lambda\ge1$ and $S^\lambda_E\ne0$. If $K/E$ is a field extension, the coefficient inclusion $S^\lambda_E\to S^\lambda_K$ is $E$-linear and sends $e_t$ to $e_t$, so it induces a $K$-linear map $K\otimes_ES^\lambda_E\to S^\lambda_K$ with $1\otimes e_t\mapsto e_t$; this map carries the $K$-basis $(1\otimes e_t)_{t\text{ standard}}$ of $K\otimes_ES^\lambda_E$ to the $K$-basis $(e_t)_{t\text{ standard}}$ of $S^\lambda_K$ and is compatible with the actions because both actions are given by the same formulas on tabloids. Hence $K\otimes_ES^\lambda_E\cong S^\lambda_K$; in particular $S^\lambda_{\mathbb C}\cong\mathbb C\otimes_{\mathbb Q}S^\lambda_{\mathbb Q}$ and $F\otimes_{\mathbb Q}S^\lambda_{\mathbb Q}\cong S^\lambda_F$. [F1, F2, F7, given, construct]

1.2 Let $V,W$ be finite-dimensional $ES_n$-modules and $K/E$ a field extension. Choose $E$-bases and identify $\operatorname{Hom}_E(V,W)$ with the space of $k\times m$ matrices, $m=\dim_EV$, $k=\dim_EW$; an element is $ES_n$-linear if and only if $\rho_W(\sigma)A=A\rho_V(\sigma)$ for all $\sigma\in S_n$, a finite system of linear equations with coefficients in $E$. Its solution space is the kernel of a matrix with entries in $E$, and Gaussian elimination over $E$ shows that the rank of such a matrix, hence the dimension of the solution space, is the same over $E$ and over $K$; the $K$-solutions are exactly the $K$-span of the $E$-solutions. In the chosen coordinates this says that the natural map $K\otimes_E\operatorname{Hom}_{ES_n}(V,W)\to\operatorname{Hom}_{KS_n}(K\otimes_EV,K\otimes_EW)$ is an isomorphism. [F5, F7, given, algebra]

2.1 Taking $E=\mathbb Q$, $K=\mathbb C$ in $1.2$ with $V=W=S^\lambda_{\mathbb Q}$ and using $S^\lambda_{\mathbb C}\cong\mathbb C\otimes_{\mathbb Q}S^\lambda_{\mathbb Q}$ gives $\dim_{\mathbb Q}\operatorname{End}_{\mathbb QS_n}(S^\lambda_{\mathbb Q})=\dim_{\mathbb C}\operatorname{End}_{\mathbb CS_n}(S^\lambda_{\mathbb C})=1$ by [F3, F6]; as the scalars lie in $\operatorname{End}_{\mathbb QS_n}(S^\lambda_{\mathbb Q})$, that endomorphism ring is $\mathbb Q$. For $\lambda\ne\mu$, $1.2$ gives $\mathbb C\otimes_{\mathbb Q}\operatorname{Hom}_{\mathbb QS_n}(S^\lambda_{\mathbb Q},S^\mu_{\mathbb Q})\cong\operatorname{Hom}_{\mathbb CS_n}(S^\lambda_{\mathbb C},S^\mu_{\mathbb C})=0$, so $\operatorname{Hom}_{\mathbb QS_n}(S^\lambda_{\mathbb Q},S^\mu_{\mathbb Q})=0$. [F3, F6, step 1.1, step 1.2]

3.1 Suppose $0\ne U\subseteq S^\lambda_{\mathbb Q}$ is a proper $\mathbb QS_n$-submodule. By [F4, F5] there is a $\mathbb QS_n$-submodule $V\ne0$ with $S^\lambda_{\mathbb Q}=U\oplus V$, and the projection $\pi$ onto $U$ along $V$ is a $\mathbb QS_n$-endomorphism that is not a scalar: $\pi$ acts as $1$ on $U$ and as $0$ on $V$. This contradicts step 2.1, so $S^\lambda_{\mathbb Q}$ is irreducible. [F4, F5, step 2.1]

3.2 Applying step 1.2 with $E=\mathbb Q$, $K=F$ and step 2.1 gives $\operatorname{End}_{FS_n}(S^\lambda_F)\cong F\otimes_{\mathbb Q}\operatorname{End}_{\mathbb QS_n}(S^\lambda_{\mathbb Q})=F$ and $\operatorname{Hom}_{FS_n}(S^\lambda_F,S^\mu_F)=0$ for $\lambda\ne\mu$. [step 1.2, step 2.1]

4.1 Let $W$ be a simple $\mathbb QS_n$-module, so $W\ne0$. For $0\ne w\in W$ the map $\mathbb QS_n\to W$, $x\mapsto xw$, is a nonzero $\mathbb QS_n$-linear map onto the nonzero submodule $W$, so $W$ is a quotient of the finite-dimensional module $\mathbb QS_n$ and $\dim_{\mathbb Q}W<\infty$. Then $W_{\mathbb C}:=\mathbb C\otimes_{\mathbb Q}W$ is a nonzero finite-dimensional complex $S_n$-module, so by [F3] it has an irreducible submodule isomorphic to $S^\lambda_{\mathbb C}$ for some $\lambda\vdash n$; hence $\operatorname{Hom}_{\mathbb CS_n}(S^\lambda_{\mathbb C},W_{\mathbb C})\ne0$. By step 1.2 and step 1.1 this is $\mathbb C\otimes_{\mathbb Q}\operatorname{Hom}_{\mathbb QS_n}(S^\lambda_{\mathbb Q},W)$, so $\operatorname{Hom}_{\mathbb QS_n}(S^\lambda_{\mathbb Q},W)\ne0$. A nonzero map from the irreducible module $S^\lambda_{\mathbb Q}$ (step 3.1) to the simple module $W$ has zero kernel and image $W$, hence is an isomorphism [F6]; thus every simple $\mathbb QS_n$-module is isomorphic to some $S^\lambda_{\mathbb Q}$. [F3, F6, step 1.1, step 1.2, step 3.1]

4.2 Suppose $0\ne U\subseteq S^\lambda_F$ is a proper $FS_n$-submodule. By [F4, F5] there is a complement $V\ne0$, $S^\lambda_F=U\oplus V$, and the projection $\pi$ onto $U$ along $V$ lies in $\operatorname{End}_{FS_n}(S^\lambda_F)$ and is not a scalar, since it acts as $1$ on $U\ne0$ and as $0$ on $V\ne0$. This contradicts step 3.2, so $S^\lambda_F$ is irreducible. [F4, F5, step 3.2]

5.1 By [F4, F5] the finite-dimensional $\mathbb QS_n$-module $\mathbb QS_n$ is a finite direct sum of simple modules, and by step 4.1 each is isomorphic to some $S^\lambda_{\mathbb Q}$; collecting isomorphic summands and using the pairwise non-isomorphism from step 2.1 gives $\mathbb QS_n\cong\bigoplus_{\lambda\vdash n}(S^\lambda_{\mathbb Q})^{m_\lambda}$ for multiplicities $m_\lambda\ge0$. Each $m_\lambda\ge1$: by step 3.1 and step 4.1 the module $S^\lambda_{\mathbb Q}$ is simple, and for $0\ne v\in S^\lambda_{\mathbb Q}$ the surjection $\mathbb QS_n\to S^\lambda_{\mathbb Q}$, $x\mapsto xv$, splits by [F4], exhibiting $S^\lambda_{\mathbb Q}$ as a direct summand of $\mathbb QS_n$. [F1, F4, F5, step 2.1, step 3.1, step 4.1]

6.1 The canonical map $F\otimes_{\mathbb Q}\mathbb QS_n\to FS_n$, $c\otimes[\sigma]\mapsto c[\sigma]$, sends the $F$-basis $(1\otimes[\sigma])_{\sigma\in S_n}$ of $F\otimes_{\mathbb Q}\mathbb QS_n$ to the basis $([\sigma])_{\sigma\in S_n}$ of $FS_n$ and is compatible with multiplication by [F5]; hence it is an isomorphism of $FS_n$-modules. Applying $F\otimes_{\mathbb Q}-$ to step 5.1 and using [F7] together with step 1.1 gives $FS_n\cong F\otimes_{\mathbb Q}\mathbb QS_n\cong\bigoplus_{\lambda\vdash n}(F\otimes_{\mathbb Q}S^\lambda_{\mathbb Q})^{m_\lambda}\cong\bigoplus_{\lambda\vdash n}(S^\lambda_F)^{m_\lambda}$ with all $m_\lambda\ge1$. [F5, F7, step 1.1, step 5.1]

7.1 Let $W$ be a simple $FS_n$-module, so $W\ne0$. For $0\ne w\in W$ the map $FS_n\to W$, $x\mapsto xw$, is a nonzero $FS_n$-linear map onto $W$; hence $\dim_FW<\infty$ and $W$ is a quotient of $FS_n$. By step 6.1, $FS_n\cong\bigoplus_{\lambda\vdash n}(S^\lambda_F)^{m_\lambda}$ with $m_\lambda\ge1$, so some component $(S^\lambda_F)^{m_\lambda}\to W$ of the quotient map is nonzero, and then some single copy $S^\lambda_F\to W$ is nonzero. The module $S^\lambda_F$ is irreducible (step 4.2), so this nonzero map is an isomorphism [F6]; hence $W\cong S^\lambda_F$. [F6, step 6.1, step 4.2]

8.1 Steps 1.1, 3.1 and 4.2 show that every $S^\lambda_F$ is nonzero and irreducible over $F$ (and over $\mathbb Q$, with the complex case being [F3]); steps 2.1 and 3.2 show that distinct partitions give modules with no nonzero homomorphism between them, and steps 4.1 and 7.1 show over $\mathbb Q$ and over $F$ that every irreducible module is isomorphic to one of them. Finally, a finite-dimensional $FS_n$-module decomposes into simple submodules by [F4, F5] applied repeatedly (each proper submodule splits off a nonzero complement, and the dimension strictly decreases), and each simple summand is isomorphic to some $S^\lambda_F$ by step 7.1. Thus the $S^\lambda_F$ are a complete irredundant list of irreducible $FS_n$-modules, and over $F=\mathbb C$ this is the published complex classification [F3]. [F1, F2, F3, F4, F5, step 1.1, step 2.1, step 3.1, step 4.1, step 3.2, step 4.2, step 7.1] ∎
