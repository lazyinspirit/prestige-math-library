---
id: lem-faltings-semisimple-character-determines-isomorphism
kind: lemma
title: "Equal characters determine isomorphic semisimple representations"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-field
  - def-semisimple-module
  - def-simple-module
  - def-semisimple-ring
  - thm-finitely-generated-semisimple-modules-are-finite-direct-sums-of-simple-modules
  - thm-schurs-lemma-for-modules
  - thm-wedderburn-artin-theorem
  - thm-simple-modules-over-semisimple-rings
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Faltings–Wüstholz, *Rational Points*, 2nd ed., Chapter V, Proposition 2.7"
      url: "https://yhzhumath.github.io/Mordell2024/RP.pdf"
      locator: "Printed pp. 162–164; equality of traces and semisimplicity imply isomorphism of the Tate representations."
    - title: "William Crawley-Boevey, Noncommutative Algebra, Chapter1 §§1.1–1.9"
      url: "https://www.math.uni-bielefeld.de/~wcrawley/1617noncommalg/Noncommutative%20algebra.pdf"
      locator: "Semisimple modules and Wedderburn–Artin, through the actual published local supplier proof. The finite-dimensional submodule bridge below avoids the general AC-dependent complement theorem."
verification:
  precheck: pending
---

## Statement

Let $\Gamma$ be a group, let $F$ be a field of characteristic zero, and let $V,W$ be finite-dimensional semisimple $F$-representations of $\Gamma$. If $\operatorname{tr}(\gamma\mid V)=\operatorname{tr}(\gamma\mid W)$ for every $\gamma\in\Gamma$, then $V$ and $W$ are isomorphic as $F$-representations.

## Statement references

[[def-field]]

[[def-semisimple-module]]

[[def-simple-module]]

[Faltings–Wüstholz, *Rational Points*, Chapter V, Proposition 2.7](https://yhzhumath.github.io/Mordell2024/RP.pdf)

[[thm-wedderburn-artin-theorem]]

[[thm-simple-modules-over-semisimple-rings]]

## Facts & Assumptions

**Given:** A group $\Gamma$, a field $F$ of characteristic zero, and finite-dimensional semisimple $F$-representations $V,W$ with equal trace functions on $\Gamma$.

[F1] A semisimple module is an internal direct sum of simple submodules, including the empty sum for zero. [[def-semisimple-module]]

[F2] A simple module is nonzero and has no proper nonzero submodule. [[def-simple-module]]

[F3] The scalar field has characteristic zero, so equality in $F$ of two nonnegative integer multiples of $1_F$ implies equality of those integers. [[def-field]]

[F4] A finitely generated semisimple module is a finite direct sum of simple modules; the published proof uses the union of finitely many generator supports. [[thm-finitely-generated-semisimple-modules-are-finite-direct-sums-of-simple-modules]]

[F5] A ring is semisimple when its left regular module is semisimple. [[def-semisimple-ring]]

[F6] A nonzero semisimple unital ring is a finite product of matrix rings over division rings. Every simple module is supported on exactly one factor and is the column-module type of that factor. [[thm-wedderburn-artin-theorem]] [[thm-simple-modules-over-semisimple-rings]]

[F7] A nonzero homomorphism between simple modules is an isomorphism. [[thm-schurs-lemma-for-modules]]

## Proof

**Given:** [F1]–[F7] and the original representation data. Only finite-dimensional linear algebra and finite choices are used; no choice axiom is added.

1.1 Put $M=V\oplus W$. If $M=0$, then $V=W=0$ and the unique map is the required isomorphism. Assume $M\ne0$. For $\gamma\in\Gamma$, let $r_\gamma$ be its block-diagonal action on $M$, and let $R$ be the $F$-linear span of all these operators. Since $r_\gamma r_\delta=r_{\gamma\delta}$ and $r_1=1_M$, this span is a unital $F$-subalgebra of $\operatorname{End}_F(M)$, hence finite-dimensional, and its action on $M$ is faithful. The scalar copy of $F$ lies centrally in $R$ and is injective because $M\ne0$. An $F$-subspace of $V$ or $W$ is $R$-stable exactly when it is $\Gamma$-stable. Thus $V,W,M$ are semisimple $R$-modules. Each is finitely generated over $R$, since any finite $F$-basis generates it. By [F4], they have finite simple-summand decompositions. [F1, F3, F4, given, construct, algebra]

2.1 We prove the finite-dimensional submodule fact needed here, instead of applying a general complement theorem with an extra AC hypothesis. Let $X=S_1\oplus\cdots\oplus S_n$ be a finite-dimensional $F$-space expressed as a finite direct sum of simple $R$-modules, with the given central scalar action, and let $N\subseteq X$ be an $R$-submodule. Induct on $n$; $N=0$ or $n=0$ is immediate. Otherwise the nonempty finite set of positive dimensions of nonzero submodules of $N$ has a least value. Take a submodule $T$ of that dimension. Every proper nonzero submodule of $T$ would have smaller dimension, so $T$ is simple by [F2]. Some coordinate projection $\pi_j:T\to S_j$ is nonzero, and is an isomorphism by [F7]. The map $q=(\pi_j|_T)^{-1}\pi_j:X\to T$ is an $R$-linear retraction with kernel $X'=\bigoplus_{i\ne j}S_i$. Since $T\subseteq N$, each $n_0\in N$ decomposes as $q(n_0)+(n_0-q(n_0))$ in $T\oplus(N\cap X')$. The latter intersection is semisimple by induction on $n-1$. Hence $N$ is semisimple. The minimum, coordinate and witnesses were chosen only finitely many times, with a strictly decreasing finite bound. [F1, F2, F7, step 1.1, algebra]

3.1 Choose a finite $F$-basis $m_1,\ldots,m_d$ of $M$, and define $\iota:R\to M^d$ by $a\mapsto(am_1,\ldots,am_d)$. It is a homomorphism of left $R$-modules: $\iota(ba)=b\iota(a)$. If $\iota(a)=0$, the $F$-linear operator $a$ kills a basis, so it is zero; thus $\iota$ is injective. The module $M^d$ is a finite direct sum of the simple summands from step 1.1. Step 2.1 therefore shows that its submodule $\iota(R)$ is semisimple. Consequently the left regular module of $R$ is semisimple, and $R$ is a nonzero semisimple ring by [F5]. This proves the needed faithful-semisimple-to-regular-module bridge without a Jacobson-radical or arbitrary-module choice argument. [F1, F4, F5, step 1.1, step 2.1, construct, algebra]

4.1 Apply [F6] to obtain $R\cong\prod_{i=1}^rM_{n_i}(D_i)$, and let $e_i\in R$ be the central idempotent corresponding to identity in factor $i$ and zero in the others. They are orthogonal and sum to $1$. By the actual simple-module classification in [F6], the simple summands of $M$ supported on factor $i$ all have one common $R$-module type $S_i$. Such a summand exists for every $i$: otherwise $e_i$ would annihilate $M$, contradicting faithfulness and $e_i\ne0$. Choose one from the finite decomposition of $M$. Put $d_i=\dim_F S_i>0$. All $R$-linear maps are $F$-linear because the scalar field is central in $R$. The same classification therefore gives $e_iV\cong S_i^{a_i}$ and $e_iW\cong S_i^{b_i}$ for nonnegative integers $a_i,b_i$. [F4, F6, step 1.1, step 3.1, construct, algebra]

5.1 The $F$-linear functional $a\mapsto\operatorname{tr}(a|V)-\operatorname{tr}(a|W)$ vanishes on every $r_\gamma$ by hypothesis, hence on their entire $F$-span $R$. It vanishes in particular on each $e_i$. An idempotent $e$ on a finite-dimensional $F$-space $Y$ has the direct-sum decomposition $Y=eY\oplus(1-e)Y$; in a concatenated basis its matrix is identity on the first summand and zero on the second. Trace is unchanged by basis change because the finite entry identity $\operatorname{tr}(AB)=\operatorname{tr}(BA)$ holds over a commutative field. Thus $\operatorname{tr}(e_i|V)=(\dim_F e_iV)1_F$ and similarly for $W$. By [F3], equality of these traces gives equality of their dimensions as ordinary integers. Hence $a_i d_i=b_i d_i$, and $d_i>0$ implies $a_i=b_i$ for every $i$. [F3, step 1.1, step 4.1, algebra]

6.1 For each of the finitely many $i$, the equality $a_i=b_i$ gives an $R$-linear isomorphism $e_iV\to e_iW$ by matching the finite copies of $S_i$; it is the unique zero-space map when this multiplicity is zero. Taking their finite direct sum gives an $R$-linear, hence $F$-linear, isomorphism $V\to W$. Since every group operator $r_\gamma$ belongs to $R$, this map commutes with the action of every $\gamma\in\Gamma$. It is therefore the required isomorphism of $F$-representations. No absolute irreducibility, algebraic closure, finiteness of $\Gamma$, or choice axiom has been used. [F1, F3, F6, step 4.1, step 5.1, algebra] ∎

## Historical scope boundary

The corrected characteristic-zero Statement is preserved verbatim. The former arbitrary-characteristic wording is false: for the trivial group over $\mathbb F_p$, the semisimple representations $\mathbb F_p^p$ and zero have equal traces, both zero in the field, but different dimensions. The proof uses characteristic zero exactly in step 5.1 to recover integer dimensions from traces. The previously proposed but absent ID `thm-artin-wedderburn-structure-for-finite-dimensional-algebras` is unnecessary: the actual published `thm-wedderburn-artin-theorem` is used only after step 3.1 proves its precise semisimple-ring hypothesis. The general AC-dependent semisimple-complement theorem is not a premise.
