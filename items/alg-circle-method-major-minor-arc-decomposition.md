---
id: alg-circle-method-major-minor-arc-decomposition
kind: algorithm
title: "Major/minor arc decomposition for the Waring representation count"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - def-waring-representation-count
  - def-waring-singular-series-and-singular-integral
  - lem-continuous-torus-orthogonality-for-integer-frequencies
  - def-real-power
  - lem-integer-part
  - lem-waring-major-arcs-disjoint
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "T. D. Wooley, Vinogradov's Mean Value Theorem via Efficient Congruencing"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v175-n3-p12-p.pdf"
      locator: "§10, major/minor arcs m and M in the proof of Theorem 1.4, printed pp. 1620–1621"
    - title: "N. Assing, The Circle Method and Waring's Problem"
      url: "https://www.math.uni-bonn.de/people/assing/lectures/circle_method.pdf"
      locator: "§6.1, definitions of major and minor arcs, printed pp. 34–35"
---

## Definition

The input is an integer degree $k\ge2$, an integer number of summands $s\ge1$, and an integer $n\ge1$ for which $N:=\lfloor n^{1/k}\rfloor\ge16$. Put $e(t)=\exp(2\pi i t)$, define $R_{s,k}(n):=\#\{(x_1,\ldots,x_s)\in\mathbb Z_{>0}^s:\sum_i x_i^k=n\}$ with ordered tuples, and set $g_{k,N}(\alpha):=\sum_{x=1}^N e(\alpha x^k)$. Also set $P:=\lfloor N^{1/8}\rfloor$ and $Q:=\lfloor N^{1/16}\rfloor$. Regard $\mathbb T:=\mathbb R/\mathbb Z$ as the unit circle with normalized coordinate $\alpha\in[0,1)$ and torus distance $\|t\|_{\mathbb T}:=\min_{m\in\mathbb Z}|t-m|$. For every $1\le q\le Q$ and every residue $a$ with $0\le a<q$ whose only positive common divisor with $q$ is $1$, form the torus interval
$$\mathfrak M(q,a):=\left\{\alpha\in\mathbb T:\left\|\alpha-\frac aq\right\|_{\mathbb T}\le\frac{16P}{qN^k}\right\},\qquad \mathfrak M:=\bigcup_{q\le Q}\ \bigcup_{\substack{0\le a<q\\\gcd(a,q)=1}}\mathfrak M(q,a),\qquad \mathfrak m:=\mathbb T\setminus\mathfrak M.$$
Here $\|t\|_{\mathbb T}:=\min_{m\in\mathbb Z}|t-m|$. The output is the ordered pair $(\mathfrak M,\mathfrak m)$ and the identity
$$R_{s,k}(n)=\int_{\mathfrak M}g_{k,N}(\alpha)^s e(-n\alpha)\,d\alpha+\int_{\mathfrak m}g_{k,N}(\alpha)^s e(-n\alpha)\,d\alpha.$$
To execute the procedure, compute $N,P,Q$, enumerate the reduced residues $(q,a)$ in the stated finite ranges, take the indicated union and its complement, and return both integrals. The integrals are normalized torus Riemann integrals. The resulting arcs are pairwise disjoint for $N\ge16$ by the disjointness lemma listed below.

## Definition references

[[def-waring-representation-count]]

[[def-waring-singular-series-and-singular-integral]]

[[lem-continuous-torus-orthogonality-for-integer-frequencies]]

[[lem-waring-major-arcs-disjoint]]

[Wooley, proof of Theorem 1.4](https://annals.math.princeton.edu/wp-content/uploads/annals-v175-n3-p12-p.pdf)

[Assing, §6.1](https://www.math.uni-bonn.de/people/assing/lectures/circle_method.pdf)

## Arc convention

The diagram identifies the endpoints of $[0,1]$. Each blue arc represents one interval centered at a reduced fraction $a/q$ with radius $16P/(qN^k)$, and the red part is the complement. The picture is schematic and supplies no step in a proof.

```tikz
\begin{tikzpicture}[scale=1.15]
  \draw[thick] (0,0) circle (1.35);
  \draw[blue,very thick] (25:1.35) arc[start angle=25,end angle=48,radius=1.35];
  \draw[blue,very thick] (145:1.35) arc[start angle=145,end angle=168,radius=1.35];
  \draw[blue,very thick] (265:1.35) arc[start angle=265,end angle=288,radius=1.35];
  \fill (36.5:1.35) circle (1.2pt);
  \fill (156.5:1.35) circle (1.2pt);
  \fill (276.5:1.35) circle (1.2pt);
  \node[blue] at (0,1.75) {$\mathfrak M(q,a)$};
  \node[red] at (0,-1.75) {$\mathfrak m$};
  \node at (1.75,0) {$0\equiv1$};
\end{tikzpicture}
```
