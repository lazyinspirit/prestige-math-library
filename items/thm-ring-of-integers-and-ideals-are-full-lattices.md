---
id: thm-ring-of-integers-and-ideals-are-full-lattices
kind: theorem
title: "Number-field integer rings and ideals are full lattices"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-minkowski-embedding-of-a-number-field
  - def-full-euclidean-lattice-and-covolume
  - thm-discriminant-as-an-embedding-determinant
  - thm-ring-of-integers-free-of-rank-degree
  - lem-subgroups-of-z-are-cyclic
  - def-left-right-and-two-sided-ideal
  - def-fractional-ideal
  - def-number-field
  - def-ring-of-integers-of-a-number-field
provenance:
  statement: literature-derived
  proof: literature-derived
proof_strategy: direct
sources:
  references:
    - title: "J. S. Milne, Algebraic Number Theory v3.08"
      url: "https://www.jmilne.org/math/CourseNotes/ANTc.pdf"
      locator: "Ch. 4 Proposition 4.26, pp.79-80."
    - title: "William A. Stein, Algebraic Number Theory: A Computational Approach"
      url: "https://wstein.org/books/ant/ant.pdf"
      locator: "§7.1 Lemmas 7.1.7-7.1.8, pp.80-81."
verification:
  audited: 2026-10-02
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Statement

Let $K$ be a number field ([[def-number-field]]) of degree $n=[K:\mathbb Q]$,
let $\mathcal O_K$ be its ring of integers
([[def-ring-of-integers-of-a-number-field]]), and let
$\sigma:K\to\mathbb R^n$ be the unscaled Minkowski embedding
([[def-minkowski-embedding-of-a-number-field]]). Then:

1. $\sigma(\mathcal O_K)$ is a full lattice in $\mathbb R^n$
   ([[def-full-euclidean-lattice-and-covolume]]);
2. for every nonzero fractional $\mathcal O_K$-ideal $I$
   ([[def-fractional-ideal]]), the image $\sigma(I)$ is a full lattice in
   $\mathbb R^n$.

No choice principle is used: both lattices are exhibited by explicit
$\mathbb Z$-bases. The proof fixes one basis for the given ring of integers,
considers one ideal or subgroup at a time, and at each finite induction stage
selects one lift from a single nonempty fiber; it does not select
simultaneously from an arbitrary family of nonempty sets.

## Facts & Assumptions

**Given:** A number field $K$ of degree $n=[K:\mathbb Q]$, its ring of
integers $\mathcal O_K$, and the unscaled Minkowski embedding $\sigma$.

[F1] For every ordered $\mathbb Q$-basis $\alpha_1,\dots,\alpha_n$ of $K$ the
real $n\times n$ matrix $A$ whose $j$-th column is $\sigma(\alpha_j)$ is
invertible, and
$|\det A|=2^{-r_2}\sqrt{|\operatorname{disc}(\alpha_1,\dots,\alpha_n)|}\ne0$
([[def-minkowski-embedding-of-a-number-field]],
[[thm-discriminant-as-an-embedding-determinant]]).

[F2] $\mathcal O_K$ is a free $\mathbb Z$-module of rank $n$
([[thm-ring-of-integers-free-of-rank-degree]]).

[F3] Every additive subgroup of $\mathbb Z$ is $d\mathbb Z$ for a unique
nonnegative integer $d$, with $d>0$ when the subgroup is nonzero
([[lem-subgroups-of-z-are-cyclic]]).

[F4] An ideal $I\trianglelefteq R$ is an additive subgroup with $ri\in I$ for
all $r\in R$, $i\in I$; in particular an ideal $\mathfrak a$ of
$\mathcal O_K$ is a $\mathbb Z$-submodule of $\mathcal O_K$, and
$u\mathcal O_K\subseteq\mathfrak a$ for every $u\in\mathfrak a$
([[def-left-right-and-two-sided-ideal]]).

[F5] A fractional ideal of $\mathcal O_K$ is a nonzero $\mathcal O_K$-submodule
$I\subseteq K$ for which some $0\ne d\in\mathcal O_K$ satisfies
$dI\subseteq\mathcal O_K$ ([[def-fractional-ideal]]).

[F6] A full lattice is by definition the $\mathbb Z$-span
$\mathbb Z b_1\oplus\cdots\oplus\mathbb Z b_n$ of a real basis
$b_1,\dots,b_n$ of $\mathbb R^n$
([[def-full-euclidean-lattice-and-covolume]]).

## Proof

1.1 For every ordered $\mathbb Q$-basis $\alpha_1,\dots,\alpha_n$ of $K$, let $A$ have columns $\sigma(\alpha_j)$. By [F1], $A$ is invertible; hence these images form a real basis of $\mathbb R^n$. [F1, given, algebra]

1.2 Choose a $\mathbb Z$-basis $\alpha_1,\dots,\alpha_n$ of $\mathcal O_K$, which exists by [F2]. A rational relation among the $\alpha_i$, multiplied by a positive common denominator, would be an integer relation, so $\mathbb Z$-independence makes them $\mathbb Q$-independent. There are $n=[K:\mathbb Q]$ of them, so they form a $\mathbb Q$-basis of $K$. [F2, algebra, choose]

1.3 We prove by induction on $m\ge0$ that every additive subgroup of $\mathbb Z^m$ has a finite $\mathbb Z$-basis with at most $m$ members. The claim holds for $m=0$, since its only subgroup is $\{0\}$, with empty basis. [given]

2.1 Let $m>0$, assume the claim for $m-1$, and project $H\le\mathbb Z^m$ onto its first coordinate. By [F3], the image is $d\mathbb Z$ for a nonnegative integer $d$. If $d=0$, $H$ lies in the last $m-1$ coordinates, so induction gives a basis with at most $m-1$ members. [F3, step 1.3]

2.2 By steps 1.1 and 1.2, the vectors $\sigma(\alpha_1),\dots,\sigma(\alpha_n)$ form a real basis. Additivity of $\sigma$ gives $\sigma(\mathcal O_K)=\mathbb Z\sigma(\alpha_1)\oplus\cdots\oplus\mathbb Z\sigma(\alpha_n)$, so this is a full lattice by [F6]. This proves clause 1. [F6, step 1.1, step 1.2, algebra]

3.1 If $d>0$, choose $h\in H$ whose first coordinate is $d$. The kernel $H_0$ of the projection, viewed in $\mathbb Z^{m-1}$, has a basis $k_1,\dots,k_s$ by induction, with $s\le m-1$. Every $g\in H$ has first coordinate $qd$ for a unique $q\in\mathbb Z$, so $g-qh\in H_0$; hence $h,k_1,\dots,k_s$ span $H$. If $ah+\sum_i b_i k_i=0$ with integer coefficients, the first coordinate gives $ad=0$, hence $a=0$, and independence of the basis of $H_0$ gives every $b_i=0$. Together with the $d=0$ case, this proves the induction claim. [step 1.3, step 2.1, choose, algebra]

4.1 Let $\mathfrak a\subseteq\mathcal O_K$ be a nonzero integral ideal. It is an additive subgroup by [F4]. Using the basis of $\mathcal O_K$ from step 1.2 to identify it with $\mathbb Z^n$, steps 1.3, 2.1, and 3.1 give a $\mathbb Z$-basis $\beta_1,\dots,\beta_r$ of $\mathfrak a$ with $r\le n$. Choose $0\ne u\in\mathfrak a$; then $u\mathcal O_K\subseteq\mathfrak a$ by [F4]. [F2, F4, step 1.2, step 1.3, step 3.1, choose]

5.1 For any nonzero $v\in K$, coordinate multiplication by the values of the embeddings at $v$ defines a block-diagonal real map $L_v$. Its real blocks are the nonzero scalars $\sigma_i(v)$; a complex block $\tau_j(v)=a+ib$ is represented by $\begin{pmatrix}a&-b\\b&a\end{pmatrix}$, whose determinant is $a^2+b^2=|\tau_j(v)|^2>0$ because each embedding is injective. Thus $L_v$ is invertible. In particular, for the element $u$ chosen in step 4.1, $\sigma(ux)=L_u\sigma(x)$ and $L_u(\sigma(\mathcal O_K))=\sigma(u\mathcal O_K)\subseteq\sigma(\mathfrak a)$. Applying $L_u$ to the basis in step 2.2 gives a real basis, whose integer span is a full lattice by [F6]; hence $\sigma(\mathfrak a)$ spans $\mathbb R^n$. [F4, F6, step 4.1, step 2.2, algebra]

6.1 Since $\beta_1,\dots,\beta_r$ are $\mathbb Z$-independent, they are $\mathbb Q$-independent: a rational relation, after multiplication by a positive common denominator, is an integer relation and therefore has all coefficients zero. Additivity gives $\sigma(\mathfrak a)=\mathbb Z\sigma(\beta_1)+\cdots+\mathbb Z\sigma(\beta_r)$, so these images span it over $\mathbb R$. Step 5.1 forces $r\ge n$, while step 4.1 gives $r\le n$. Thus $r=n$, the $\beta_i$ form a $\mathbb Q$-basis of $K$, and [F1] makes their images a real basis. Therefore $\sigma(\mathfrak a)=\mathbb Z\sigma(\beta_1)\oplus\cdots\oplus\mathbb Z\sigma(\beta_n)$ is a full lattice. [F1, F6, step 4.1, step 5.1, algebra]

7.1 Let $I$ be a nonzero fractional $\mathcal O_K$-ideal. By [F5], choose $0\ne d\in\mathcal O_K$ with $\mathfrak b:=dI\subseteq\mathcal O_K$. The set $\mathfrak b$ is an ideal because $I$ is an $\mathcal O_K$-submodule, and it is nonzero because multiplication by $d\ne0$ in the field $K$ is injective. Thus step 6.1 shows that $\sigma(\mathfrak b)$ is a full lattice. [F5, step 6.1, choose]

8.1 The real-coordinate multiplication $L_d$ is invertible by the block calculation of step 5.1. From $\mathfrak b=dI$ and $\sigma(dx)=L_d\sigma(x)$ we obtain $L_d(\sigma(I))=\sigma(\mathfrak b)$. If $\gamma_1,\dots,\gamma_n$ is a lattice basis of $\sigma(\mathfrak b)$ from step 7.1, then $L_d^{-1}\gamma_1,\dots,L_d^{-1}\gamma_n$ is a real basis and its integer span is $\sigma(I)$; thus $\sigma(I)$ is a full lattice by [F6]. This proves clause 2. [F5, F6, step 5.1, step 7.1, algebra]

9.1 Clause 1 is step 2.2 and clause 2 is step 8.1, so both assertions of the statement hold. [step 2.2, step 8.1] ∎
