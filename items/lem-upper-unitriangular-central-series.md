---
id: lem-upper-unitriangular-central-series
kind: lemma
title: The central series of U_n with additive quotients
dependency_level: 2
deps:
  - def-subgroup-commutator-and-lower-central-series
  - def-triangular-and-diagonal-matrices-over-a-commutative-ring
  - def-upper-unitriangular-group-scheme
  - thm-ring-matrix-arithmetic-laws
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
status: draft
origin: pipeline
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: J. S. Milne, Algebraic Groups (corrected 2022 printing, Cambridge University Press)
      url: https://www.jmilne.org/math/Books/iAG2022.pdf
      locator: Example 6.49, printed pp. 136-137; Theorem 16.21, printed pp. 330-331
---
## Statement

Let $k$ be a field and $n\ge1$, and let $U_n\subseteq T_n\subseteq\mathrm{GL}_n$ be the upper unitriangular and upper triangular group schemes of [[def-upper-unitriangular-group-scheme]], with $T_n=D_n\ltimes U_n$.

Order the pairs $(i,j)$ with $1\le i<j\le n$ by increasing $j-i$ (and arbitrarily, say by increasing $i$, within a fixed difference), and let $m=n(n-1)/2$. For $0\le r\le m$ let $U_n^{(r)}$ be the closed subgroup scheme of $U_n$ of matrices whose entries $x_{ij}$ vanish on the first $r$ pairs of the ordering; thus $U_n^{(0)}=U_n$ and $U_n^{(m)}=1$, and the $U_n^{(r)}$ are closed subgroup schemes of $U_n$ stable under conjugation by $T_n$.

Then
$$U_n=U_n^{(0)}\supseteq U_n^{(1)}\supseteq\dots\supseteq U_n^{(m)}=1$$
is a central series of closed subgroup schemes of $U_n$ stable under $T_n$: $[U_n^{(r)},U_n]\subseteq U_n^{(r+1)}$ for $0\le r<m$, and each successive quotient $U_n^{(r)}/U_n^{(r+1)}$ is canonically isomorphic to $\mathbf G_a$, the isomorphism being given by the coordinate $x_{ij}$ of the $(r+1)$-st pair. The diagonal torus $D_n$ acts on each quotient through the character $d\mapsto d_id_j^{-1}$.

## Facts & Assumptions
**Given:** A field $k$, an integer $n\ge1$, the group schemes $U_n\subseteq T_n\subseteq\mathrm{GL}_n$, and the ordering of pairs $(i,j)$, $i<j$, described in the statement.

[F1] For every commutative unital $k$-algebra $R$, $U_n(R)$ is the group of upper unitriangular matrices in $\mathrm{GL}_n(R)$ and $T_n(R)$ the group of invertible upper triangular matrices, with $T_n=D_n\ltimes U_n$. ([[def-upper-unitriangular-group-scheme]], [[def-triangular-and-diagonal-matrices-over-a-commutative-ring]])

[F2] Matrix multiplication is associative, the identity matrix is a unit, and the $(i,j)$-entry of a product $XY$ is $\sum_l x_{il}y_{lj}$; entrywise these identities hold over every commutative ring. ([[thm-ring-matrix-arithmetic-laws]])

[F3] The commutator of two elements of an abstract group is $[x,y]=xyx^{-1}y^{-1}$, and the lower central series of a group is defined by $G^{(0)}=G$, $G^{(r+1)}=[G,G^{(r)}]$; a series is central when $[G^{(r)},G]\subseteq G^{(r+1)}$ in the indexed form used here. ([[def-subgroup-commutator-and-lower-central-series]])

## Proof

**Given:** A field $k$, $n\ge1$, the group schemes $U_n\subseteq T_n$ and the pair ordering of the statement.

1.1 For $0\le r<m$, let $d$ be the difference of the next pair. Every pair among the first $r$ has difference $e\le d$ and its $(i,j)$ entry vanishes in each $X\in U_n^{(r)}(R)$. In a product, the linear terms of that entry vanish; every cross term has two positive differences strictly smaller than $e\le d$, so its factors vanish as well. For an inverse, write $X=I+N$ and use the finite series $X^{-1}=I-N+N^2-\cdots$. The linear entry is zero; every entry of $N^q$ for $q\ge2$ is a sum over strict index chains whose segment differences are positive and strictly smaller than $e\le d$, so each factor vanishes. Thus the first $r$ entries remain zero under product and inverse over every commutative $k$-algebra $R$. By [F1] these valued-point subgroups define closed subgroup schemes. The endpoints are $U_n^{(0)}=U_n$ and $U_n^{(m)}=1$. [F1, F2]

2.1 Fix $r<m$ and let the next pair have difference $d$. Write $X=I+A\in U_n^{(r)}(R)$ and $Y=I+B\in U_n(R)$ for an arbitrary $k$-algebra $R$. All entries of $A$ have difference at least $d$, while those of $B$ have difference at least one. In $XYX^{-1}Y^{-1}-I$, expansion using the finite nilpotent inverse series leaves only words involving at least one $A$ and at least one $B$; terms involving only one matrix cancel since the commutator is $I$ if either matrix is zero. Every such word has entries of difference at least $d+1$. Therefore the commutator vanishes on all pairs of difference at most $d$, in particular the first $r+1$ pairs, and lies in $U_n^{(r+1)}(R)$. The valued-point criterion proves $[U_n^{(r)},U_n]\subseteq U_n^{(r+1)}$ as subgroup schemes. By step 1.1, $U_n^{(r+1)}$ is a subgroup contained in $U_n^{(r)}$. Since $[Y,X]=[X,Y]^{-1}$, it also lies in $U_n^{(r+1)}$, and $YXY^{-1}=[Y,X]X$ shows that conjugation by $U_n$ preserves $U_n^{(r)}$. Diagonal conjugation multiplies each coordinate $x_{ij}$ by $d_i d_j^{-1}$ and preserves the zero conditions. Since $T_n=D_n\ltimes U_n$, every term is $T_n$-stable. [F1, F2, step 1.1]

3.1 Let $(i,j)$ be the next pair, of difference $d$. The coordinate $x_{ij}:U_n^{(r)}\to\mathbf G_a$ is a homomorphism, since the cross terms $x_{il}(X)x_{lj}(Y)$ in multiplication have factors of differences strictly less than $d$, and those entries vanish in $U_n^{(r)}$. Its kernel is exactly $U_n^{(r+1)}$. It is surjective on every algebra-valued point, with section $a\mapsto I+aE_{ij}$; the quotient functor is therefore represented by $\mathbf G_a$. By step 2.1 the action of $U_n$ on this quotient is trivial, while diagonal conjugation multiplies the coordinate by $d_id_j^{-1}$. Thus the quotient and its stated $T_n$-action are as claimed. [F1, F2, step 2.1]

4.1 By [step 2.1] the series is central and normal in $U_n$, with $T_n$-stable terms, and by [step 3.1] its successive quotients are canonically $\mathbf G_a$ with the diagonal characters displayed; the last term is $U_n^{(m)}=1$ by [step 1.1]. This proves all assertions. [step 2.1, step 3.1, step 1.1, F3] ∎

