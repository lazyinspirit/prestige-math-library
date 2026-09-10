---
id: lem-cantor-and-baire-sequence-coding
kind: lemma
title: "Cantor and Baire sequence spaces and coordinate codings"
status: draft
origin: pipeline
deps: ["def-cantor-sequence-space-for-descriptive-set-theory", "def-polish-space", "def-metric-space", "def-compact-space", "def-continuous-map-top"]
justified_by: []
forward_refs: []
landmark: false
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  scraped: []
  references:
    - title: "Definition 1.7 and Exercise 1.11, printed pp4–5; compare Lietz Theorem 10.10 proof, p100. Compactness uses a local binary-cylinder proof instead of arbitrary Tychonoff"
      url: "https://homepages.math.uic.edu/~marker/math512/dst.pdf"
---
## Statement

In ZF, $\mathcal C=2^{\mathbb N}$ and $\mathcal N=\mathbb N^{\mathbb N}$ are Polish under the metric $d(x,x)=0$ and $d(x,y)=2^{-m-1}$ when $m$ is the first coordinate at which $x$ and $y$ differ. Cantor space is compact and has no isolated points. Coordinate pairing gives homeomorphisms $\mathcal N\cong\mathcal N^{\mathbb N}$ and $\mathcal C\cong\mathcal C^{\mathbb N}$. The map

$$h(x)=0^{x(0)}1\,0^{x(1)}1\,0^{x(2)}1\cdots$$

is a homeomorphism of $\mathcal N$ onto $D=\{z\in\mathcal C:z\text{ has infinitely many }1\text{s}\}$, and $\mathcal C\setminus D$ is at most countable.

## Facts & Assumptions

[F1] [[def-cantor-sequence-space-for-descriptive-set-theory]] fixes the binary cylinder topology, inherited from Baire space.

[F2] Metric axioms are in [[def-metric-space]], and [[def-polish-space]] means separable and completely metrizable.

[F3] [[def-compact-space]] requires a finite subcover of every open cover.

[F4] The open-neighbourhood criterion for continuity is in [[def-continuous-map-top]].

## Proof

**Given:** The two fixed sequence spaces and their cylinder topologies. No choice principle is assumed.

1.1 Symmetry and separation of $d$ follow from the first differing coordinate. If $x,y$ and $y,z$ both agree through the first $n$ coordinates, so do $x,z$. Consequently $d(x,z)\leq\max(d(x,y),d(y,z))\leq d(x,y)+d(y,z)$, proving the metric law. For $n\geq1$, $N_{x\upharpoonright n}=\{y:d(x,y)<2^{-n}\}$, so the metric induces precisely the cylinders. A Cauchy sequence has each coordinate eventually constant: use the Cauchy bound $2^{-k-1}$ for coordinate $k$. Define $x(k)$ to be that unique eventual value. The Cauchy bound at $2^{-n}$ shows all sufficiently late terms agree with $x$ on the first $n$ coordinates, hence converge to $x$. In the binary case each value remains binary. [F1, F2]

1.2 Let $\mathcal U$ be an open cover of $\mathcal C$. If no finite subfamily covers it, the root cylinder is not finitely covered. Whenever $N_s$ is not finitely covered, at least one of $N_{s^\frown0},N_{s^\frown1}$ is not finitely covered: otherwise combine their two finite covers. Recursively take the least such bit. The resulting $x$ lies in some $U\in\mathcal U$, and openness gives $N_{x\upharpoonright n}\subseteq U$ for some $n$, contradicting the construction. Hence every cover has a finite subcover, as F3 requires. Only least choices from two bits were used. [F1, F3]

1.3 The displayed pairing is a bijection $\mathbb N^2\to\mathbb N$: on diagonal $i+j=r$ its values are the consecutive integers from $r(r+1)/2$ to $(r+1)(r+2)/2-1$, and the diagonals partition $\mathbb N$. Define $H(x)_i(j)=x(\langle i,j\rangle)$. Its inverse assigns $x(\langle i,j\rangle)=z_i(j)$, so both compositions are identities coordinate by coordinate. A finite restriction on either side constrains finitely many coordinates on the other; at each point a long enough initial cylinder fixes all those coordinates. Thus both directions are continuous by F4, in the binary case as well. [F1, F4]

1.4 Each block in $h$ ends in $1$ and has positive length, so $h(x)\in D$. Conversely for $z\in D$, let $p_n$ be the position of its $n$th $1$, indexed starting at zero, obtained by successive least search. Put $x(0)=p_0$ and $x(n+1)=p_{n+1}-p_n-1$. These are natural numbers and the block concatenation reconstructs $z$. Reading block lengths from $h(x)$ returns $x$, giving a two-sided inverse. Fixing enough input coordinates to finish the first $k$ output bits proves continuity of $h$; fixing through the $k$th separator proves continuity of its inverse on $D$. [F1, F4]

2.1 Finite words admit an explicit natural-number coding: encode a finite word by its length and recursively pair its entries, using $\langle i,j\rangle=(i+j)(i+j+1)/2+j$. Appending infinitely many zeros gives a countable family meeting every cylinder in either space. Thus they are separable; combined with step 1.1 this proves Polishness. Given any binary cylinder containing $x$, change the next unrestricted bit of $x$ and keep all other bits. The resulting different point is in the same cylinder, so no point is isolated. [F1, F2, step 1.1]

3.1 If $z\notin D$, it has only finitely many $1$s. Associate the integer $c(z)=\sum_{j:z(j)=1}2^j$. Distinct finite binary supports give distinct sums: at their largest differing index $r$, the term $2^r$ exceeds the sum $\sum_{j<r}2^j=2^r-1$. Thus $c$ is an injection into $\mathbb N$, with the zero sequence mapped to zero. This proves the countability assertion and completes all constructions. QED. [step 1.4, algebra]
