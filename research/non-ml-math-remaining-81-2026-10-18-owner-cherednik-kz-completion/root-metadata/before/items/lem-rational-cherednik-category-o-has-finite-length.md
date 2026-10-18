---
id: lem-rational-cherednik-category-o-has-finite-length
kind: lemma
title: "Every rational Cherednik category-O object has finite length"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 7
deps:
  - def-rational-cherednik-reflection-data-and-parameters
  - def-rational-cherednik-algebra
  - def-rational-cherednik-category-o
  - def-rational-cherednik-standard-module
  - thm-rational-cherednik-standard-module-lies-in-category-o
  - thm-rational-cherednik-pbw-theorem
  - cor-finite-variable-polynomial-ring-noetherian
  - lem-finite-modules-over-noetherian-rings-are-noetherian
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Pavel Etingof and Xiaoguang Ma, Lecture Notes on Cherednik Algebras"
      url: "https://arxiv.org/pdf/1001.0432"
      locator: "§§3.5–3.8, Euler element, simples and finite length, PDF pp. 17–19."
    - title: "Victor Ginzburg, Nicolas Guay, Eric Opdam, and Raphael Rouquier, On the category O for rational Cherednik algebras"
      url: "https://arxiv.org/pdf/math/0212036"
      locator: "§§2.4–2.6 and 3.2, generalized weights, simples and finite length, PDF pp. 5–12."
---

## Statement

For every finite complex reflection group $W$ and every parameter $c$, each object of $\mathcal O_c(W,\mathfrak h)$ has a finite composition series. Every simple object is a quotient of a standard module $\Delta_c(E)$ for some finite-dimensional irreducible $W$-module $E$, and each standard module has a unique simple head.

## Facts & Assumptions

**Given:** A finite complex reflection group $W$ on $\mathfrak h$, a parameter $c$, the algebra $H_{1,c}(W,\mathfrak h)$, and an object $M\in\mathcal O_c(W,\mathfrak h)$.

[F1] [[def-rational-cherednik-algebra]]: $H_{1,c}$ has commuting generators $\mathfrak h^*$ and $\mathfrak h$, the mixed commutator is in $\mathbb C W$, and $W$ acts by conjugation on both spaces.

[F2] [[thm-rational-cherednik-pbw-theorem]] and [[def-rational-cherednik-standard-module]]: $\Delta_c(E)\cong\mathbb C[\mathfrak h^*]\otimes E$; the degree-$d$ part is finite dimensional and is generated from the degree-zero copy of $E$.

[F3] [[def-rational-cherednik-category-o]]: $M$ is finite over $\mathbb C[\mathfrak h^*]$, and every vector is killed by all sufficiently high-degree elements of $S(\mathfrak h)$.

[F4] [[def-rational-cherednik-reflection-data-and-parameters]]: $W$ is finite and $c$ is conjugacy invariant; hence $\sum_{s\in S}c_s s$ is central in $\mathbb C W$.

[F5] [[cor-finite-variable-polynomial-ring-noetherian]]: $\mathbb C[\mathfrak h^*]$ is a Noetherian commutative ring.

[F6] [[lem-finite-modules-over-noetherian-rings-are-noetherian]]: a finite module over a Noetherian commutative ring is Noetherian; each of its submodules is finitely generated.

## Proof

**Proof technique:** direct.

**Given:** [F1]–[F6].

1.1 Choose a basis $x_1,\ldots,x_n$ of $\mathfrak h^*$ and its dual $y_1,\ldots,y_n$. For $s\in S$, let $\lambda_s\ne1$ be the eigenvalue of $s$ on $\alpha_s\in\mathfrak h^*$; then $s\alpha_s^\vee=\lambda_s^{-1}\alpha_s^\vee$ and $s y=y+\lambda_s^{-1}\alpha_s(y)\alpha_s^\vee$. Put $\mathrm{eu}:=\sum_i x_i y_i+\frac n2-\sum_{s\in S}c_s s$. Using [F1], $[\sum_i x_i y_i,x]=x-\sum_s c_s\alpha_s^\vee(x)\alpha_s s$ and $[\sum_i x_i y_i,y]=-y+\sum_s c_s\lambda_s^{-1}\alpha_s(y)\alpha_s^\vee s$. The commutators of $-\sum_s c_s s$ with $x$ and $y$ are respectively $+\sum_s c_s\alpha_s^\vee(x)\alpha_s s$ and $-\sum_s c_s\lambda_s^{-1}\alpha_s(y)\alpha_s^\vee s$. Hence $[\mathrm{eu},x]=x$ and $[\mathrm{eu},y]=-y$. Also $\mathrm{eu}$ commutes with $W$, because $\sum_i x_i y_i$ is the basis-independent contraction and $\sum_s c_s s$ is central by [F4]. [F1, F4, choose, algebra]

2.1 On the degree-zero copy of an irreducible $W$-module $E$ in $\Delta_c(E)$, $\mathrm{eu}$ acts by the scalar $a_E$ of the central element $\frac n2-\sum_s c_s s$; Schur's lemma applies because $E$ is irreducible over $\mathbb C$. By $[\mathrm{eu},x]=x$, the degree-$d$ part of $\Delta_c(E)$ is an eigenspace of eigenvalue $a_E+d$. [F1, F2, step 1.1, algebra]

2.2 For any $v\in M$, [F3] makes $U:=S(\mathfrak h)\mathbb C Wv$ finite dimensional and stable under $S(\mathfrak h)$ and $W$. The commuting nilpotent operators from a basis of $\mathfrak h$ have a nonzero common kernel in every nonzero such $U$: successively take the kernel of each basis operator, which is nonzero because that operator is nilpotent and is preserved by the remaining commuting operators. Call this common kernel $K$. It is $W$-stable. Since $\mathfrak h$ kills $K$, PBW gives $H_{1,c}K=\mathbb C[\mathfrak h^*]K$ as a vector space. The finite-dimensional space $K$ is locally finite under the linear operator $\frac n2-\sum_s c_s s$, and $[\mathrm{eu},x]=x$ shows every polynomial-degree piece of $\mathbb C[\mathfrak h^*]K$ is finite dimensional and $\mathrm{eu}$-stable. Thus $\mathrm{eu}$ acts locally finitely on $H_{1,c}K$. [F1, F2, F3, step 1.1, algebra]

3.1 Induct on $\dim U$ to show that $\mathrm{eu}$ acts locally finitely on $v$. The zero-dimensional case is immediate. In the nonzero case, $K\ne0$ from step 2.2, so the image $\bar U$ of $U$ in $M/H_{1,c}K$ has smaller dimension. By induction some nonzero polynomial $p$ satisfies $p(\mathrm{eu})\bar v=0$, hence $p(\mathrm{eu})v\in H_{1,c}K$. Step 2.2 gives a nonzero polynomial $q$ with $q(\mathrm{eu})p(\mathrm{eu})v=0$, so the span of $\{\mathrm{eu}^jv:j\ge0\}$ is finite dimensional. This proves local finiteness for every $v$. [F1, F3, step 2.2, induction]

3.2 Each standard module $\Delta_c(E)$ has a unique simple head. Every proper submodule is stable under $\mathrm{eu}$ and therefore is a sum of its eigenspaces; it cannot meet the degree-zero copy of $E$, since $E$ is irreducible and generates $\Delta_c(E)$. The sum of all proper submodules still misses degree zero, so it is proper and contains every proper submodule. Its quotient has no nonzero proper submodule, hence is the unique simple head. [F2, step 2.1, algebra]

4.1 Choose finite generators of $M$ over $\mathbb C[\mathfrak h^*]$. By step 3.1 each generator is a finite sum of generalized $\mathrm{eu}$-eigenvectors; replace the generating list by these finitely many components, with generalized eigenvalues $\lambda_1,\ldots,\lambda_r$. The relation $[\mathrm{eu},x]=x$ shifts a generalized eigenvalue by $1$ under multiplication by $x$, so all eigenvalues of $M$ lie in $\bigcup_i(\lambda_i+\mathbb Z_{\ge0})$. For any fixed $\lambda$, only finitely many pairs $(i,d)$ satisfy $\lambda_i+d=\lambda$, and each $S^d(\mathfrak h^*)$ is finite dimensional; therefore every generalized eigenspace $M[\lambda]$ is finite dimensional. [F2, step 1.1, step 3.1, construct]

5.1 Let $p(M)=\{m\in M:ym=0\text{ for every }y\in\mathfrak h\}$. It is $W$-stable, and $\mathrm{eu}$ acts on it as the central element $z=\frac n2-\sum_s c_s s$. Every vector of a $W$-module lies in the finite-dimensional span of its $W$-orbit; averaging a projection over finite $W$ shows each such span is semisimple. Thus every vector of $p(M)$ is a sum of $z$-eigenvectors with eigenvalues among the finitely many scalars $a_E$ for irreducible $W$-modules $E$. By step 4.1 the corresponding generalized eigenspaces $M[a_E]$ are finite dimensional, so $p(M)\subseteq\sum_E M[a_E]$ is finite dimensional. If $M\ne0$, choose an eigenvalue of minimal real part among the finite union of lower-bounded integer progressions containing the eigenvalues of $M$. A nonzero vector in its generalized eigenspace is killed by $\mathfrak h$, since each $y$ lowers the $\mathrm{eu}$-eigenvalue by one. Thus $p(M)\ne0$. [F1, F3, F4, step 1.1, step 4.1, algebra]

6.1 Every nonzero object $N\in\mathcal O$ contains a simple submodule. By [F5]–[F6], $N$ is Noetherian, because it is finite over $\mathbb C[\mathfrak h^*]$; the same is true of each submodule and quotient. By step 5.1, $p(N)$ is a nonzero finite-dimensional $W$-module. Every finite-dimensional $W$-module is semisimple: for a $W$-stable subspace, average any linear projection onto it over the finite group to obtain a $W$-equivariant projection, then induct on dimension. Choose an irreducible $W$-submodule $E\subseteq p(N)$ maximal among those occurring in $p(N)$ for the order $E<F$ when $a_F-a_E\in\mathbb Z_{>0}$. Frobenius reciprocity gives a nonzero map $\Delta_c(E)\to N$ whose image is $L:=H_{1,c}E$. Every irreducible constituent $F$ of $p(L)$ has Euler eigenvalue $a_F$, while $L$ is a quotient of $\Delta_c(E)$, whose eigenvalues are $a_E+d$ with $d\ge0$ by step 2.1. If $d>0$, then $F$ also occurs in $p(N)$ and contradicts maximality of $E$. If $d=0$, that eigenspace in $\Delta_c(E)$ is exactly its top copy of $E$, so the only constituent is $E$. Thus $p(L)=E$. Every nonzero submodule of $L$ has a nonzero singular vector by step 5.1; its singular space is a nonzero $W$-submodule of the irreducible $E$, so it contains $E$ and therefore equals $L$. Thus $L$ is simple. The same induction-reciprocity argument shows that any simple object is a quotient of some $\Delta_c(E)$. [F1, F2, F3, F4, F5, F6, step 2.1, step 5.1, construct]

7.1 Starting with $M_0=0$, if $M/M_j\ne0$, choose a simple submodule of that quotient by step 6.1 and let $M_{j+1}$ be its inverse image in $M$. This gives a strictly increasing chain of submodules. Noetherianity from step 6.1 forces the chain to stop after finitely many steps, at $M$. Its successive quotients are simple, so it is a finite composition series. This proves the Statement. [F5, F6, step 6.1, induction] ∎
