---
id: lem-bmw-closure-pairing-independence
kind: lemma
title: BMW descending matchings are independent by closure pairing
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 5
deps:
  - lem-bmw-relations-dubrovnik-parameter-dictionary
  - lem-bmw-descending-tangle-spanning
  - def-dubrovnik-tangle-skein-algebra
  - lem-framed-kauffman-link-evaluation
proof_strategy: direct
axiom_use: "Choice-free: the coefficient specialization, finite determinant calculation, and adjugate argument are algebraic."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Frederick M. Goodman and Holly Hauschild, Affine Birman–Wenzl–Murakami Algebras and Tangles in the Solid Torus, §§4.1–4.4 and 5.1"
      url: "https://arxiv.org/pdf/math/0411155"
      locator: "PDF pp. 27–32 and 33–35: Brauer connectors, closure pairings, descending tangle spanning, and the ordinary tangle basis"
    - title: "Louis H. Kauffman, An Invariant of Regular Isotopy, Transactions of the AMS 318(2) (1990), §§VI–VII"
      url: "https://homepages.math.uic.edu/~kauffman/IRH.pdf"
      locator: "PDF pp. 38–54/printed pp. 453–469: scalar evaluation and Dubrovnik specialization"
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Statement

Let $S=\mathbb Z[a^{\pm1},z,d^{\pm1}]/(z(d-1)-(a-a^{-1}))$ and let $T=S[q^{\pm1}]/(q-q^{-1}-z)$. For each $n\ge0$, index the standard descending matching tangles by the perfect matchings $m$ of the $2n$ boundary endpoints. Reflect a second such tangle across the horizontal midline and glue corresponding boundary endpoints to obtain a closed diagram. Let $M_n$ be the matrix whose $(m,m')$ entry is the scalar Dubrovnik evaluation $P$ of this closure. Then $\det M_n$ is nonzero in $S$, its image is a non-zero-divisor in $T$, and the standard matching tangles are linearly independent over $T$. The assertion is over this universal coefficient extension and makes no independence claim after an arbitrary nonflat specialization.

## Statement references

[[lem-bmw-relations-dubrovnik-parameter-dictionary|The coefficient extension and its free-module structure]]

[[lem-bmw-descending-tangle-spanning|Standard descending matching tangles]]

[[lem-framed-kauffman-link-evaluation|Scalar Dubrovnik evaluation and coefficient domain]]

[Goodman and Hauschild, *Affine Birman–Wenzl–Murakami Algebras and Tangles in the Solid Torus*](https://arxiv.org/pdf/math/0411155)

[Kauffman, *An Invariant of Regular Isotopy*](https://homepages.math.uic.edu/~kauffman/IRH.pdf)

## Facts & Assumptions

**Given:** The standard descending tangle representatives, the scalar Dubrovnik evaluation, and the coefficient rings $S\subset T$.

[F1] The scalar evaluation $P$ is defined on every closed diagram, is unchanged by regular isotopy, multiplies by $a,a^{-1}$ at the two curls and by $d$ for each free circle, and the coefficient ring $S$ is an integral domain ([[lem-framed-kauffman-link-evaluation]]).

[F2] $T$ is free over $S$ with basis $1,q$, so the inclusion $S\hookrightarrow T$ is injective ([[lem-bmw-relations-dubrovnik-parameter-dictionary]]).

[F3] For every connector there is one standard loop-free, self-crossing-free totally descending tangle; any two such diagrams with the same connector are regularly isotopic ([[lem-bmw-descending-tangle-spanning]]).

## Diagram

In the schematic, solid blue edges are one endpoint matching and dashed red edges are the other. Each vertex belongs to one edge of each color, so the union decomposes into alternating cycles; each such cycle is one component after closure.

```tikz
\begin{tikzpicture}[baseline=-0.5ex,scale=0.72]
\foreach \i/\ang in {1/90,2/30,3/-30,4/-90,5/-150,6/150}{\coordinate (v\i) at (\ang:1.2);}
\draw[blue!70!black,line width=1.2pt] (v1)--(v4) (v2)--(v5) (v3)--(v6);
\draw[red!70!black,line width=1.2pt,dashed] (v1)--(v2) (v3)--(v4) (v5)--(v6);
\foreach \i in {1,...,6}{\fill (v\i) circle (1.5pt);}
\node[blue!70!black] at (0,-1.65) {$m$};
\node[red!70!black] at (0,1.65) {$m'$};
\end{tikzpicture}
```


## Proof


1.1 Define the ring homomorphism $\sigma:S\to\mathbb Z[x^{\pm1}]$ by $a\mapsto1$, $z\mapsto0$, and $d\mapsto x$; the defining relation maps to $0=0$, so the map is well defined. For any closed diagram in an entry of $M_n$, the skein rule in [F1] becomes $P_+=P_-$ under $\sigma$. Switch finitely many crossings until the closed diagram is totally descending; these switches do not change its specialized value. Pulling the first traversed strands above the later ones unties every component, and the specialized curl factor is $1$. The result is a disjoint union of $\ell(m,m')$ trivial circles, where $\ell(m,m')$ is the number of connected components in the union of the two endpoint matchings. Hence $\sigma(M_n[m,m'])=x^{\ell(m,m')}$. The closure is a closed diagram at every $n$, including the empty diagram for $n=0$. [F1, F3, construct, algebra]

2.1 If $m=m'$, their union consists of $n$ doubled edges, so $\ell(m,m)=n$. If $m\ne m'$, each connected component of their union is an alternating even cycle, and at least one has length at least four; therefore $\ell(m,m')\le n-1$. Let $N=(2n-1)!!$ be the number of matchings, with $N=1$ for $n=0$. In the determinant expansion of $\sigma(M_n)$, the identity permutation contributes $x^{nN}$. Every nonidentity permutation has at least one off-diagonal entry of degree at most $n-1$, while every other entry has degree at most $n$, so its term has degree at most $nN-1$. The identity term is therefore the unique leading term with coefficient $1$, and $\det(\sigma(M_n))\ne0$. Thus $\det M_n\ne0$ in $S$. For $n=0$ the matrix is $[1]$, so the same conclusion holds. [F1, step 1.1, algebra]

3.1 Since $S$ is a domain by [F1], multiplication by $\det M_n\ne0$ is injective on $S$. By [F2], every $t\in T$ has a unique form $u+vq$ with $u,v\in S$. If $(\det M_n)t=0$, uniqueness gives $(\det M_n)u=(\det M_n)v=0$ in $S$, hence $u=v=0$; so $\det M_n$ is a non-zero-divisor in $T$. [F1, F2, step 2.1, algebra]

4.1 Suppose $\sum_m t_m T_m=0$ in the tangle skein algebra over $T$. Close this relation against each reflected standard matching and apply the scalar evaluation; closure respects the skein, curl, and circle relations, so the resulting equations are $M_n^{\mathsf T}t=0$. Multiplication by the adjugate gives $(\det M_n)t=0$. Step 3.1 shows each coordinate $t_m$ is zero. Therefore the standard tangles are linearly independent over $T$. The same argument includes $n=0$ and $n=1$, whose matrices are respectively $[1]$ and $[d]$. [F1, F2, step 3.1, algebra] ∎
