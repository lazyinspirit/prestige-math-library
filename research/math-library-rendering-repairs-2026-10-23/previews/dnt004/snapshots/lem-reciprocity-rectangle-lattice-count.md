---
id: lem-reciprocity-rectangle-lattice-count
kind: lemma
title: "The two reciprocity lattice counts partition an open rectangle"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-gauss-lower-half-lattice-count, thm-euclids-lemma]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-sonnet-5"
    verdict: pass
    date: 2026-08-17
  audited: 2026-08-17
sources:
  scraped: []
  references:
    - title: "P. Hackman, Elementary Number Theory, §D.V"
      url: "https://courses.mai.liu.se/GU/TATA54/Dokument/booktot.pdf"
    - title: "A. Gorodnik, Number Theory, Lecture 9, §2"
      url: "https://www.math.uzh.ch/gorodnik/nt/lecture9.pdf"
pipeline_run: null
---

## Statement

Let $p$ and $q$ be distinct odd primes, and let $S_{p,q}$ and $S_{q,p}$ be the lower-half lattice counts of [[lem-gauss-lower-half-lattice-count]]. Then $S_{p,q}+S_{q,p}=(p-1)(q-1)/4$.

## Facts & Assumptions

**Given:** Distinct odd primes $p,q$ and the integer rectangle $R=\{(x,y):1\le x\le(p-1)/2,\ 1\le y\le(q-1)/2\}$.

[L1] Put $S_{p,q}:=|\{(x,y)\in\mathbb Z^2:1\le x\le(p-1)/2,\ 0<py<qx\}|$ ([[lem-gauss-lower-half-lattice-count]]).

[L2] If a prime $p$ divides a product $ab$, then $p\mid a$ or $p\mid b$ ([[thm-euclids-lemma]]).

## Proof

**Proof technique:** direct.

1.1 No point $(x,y)\in R$ lies on the diagonal $py=qx$: equality would give $p\mid qx$, so [L2] would give $p\mid q$ or $p\mid x$; distinctness of the primes rules out the first alternative, while $1\le x\le(p-1)/2<p$ rules out the second. Thus every point of $R$ satisfies exactly one of $py<qx$ and $qx<py$. [L2, given]

2.1 The points of $R$ with $py<qx$ are exactly those counted by $S_{p,q}$: the inequality itself forces $y<q/2$, hence $y\le(q-1)/2$; after interchanging the coordinates and the primes, the points with $qx<py$ are exactly those counted by $S_{q,p}$. By step 1.1 these two sets partition $R$, whose cardinality is $((p-1)/2)((q-1)/2)=(p-1)(q-1)/4$. [step 1.1, L1, algebra] ∎


## Remarks

For $p=7$ and $q=11$, the picture shows all integer points of $R$ inside the open rectangle $0<x<7/2$, $0<y<11/2$. Filled points satisfy $7y<11x$ and are counted by $S_{7,11}=8$; hollow points satisfy $11x<7y$ and, after interchanging coordinates, are counted by $S_{11,7}=7$. The diagonal contains no point of $R$, as proved in step 1.1; the proof does not depend on the illustration.

```tikz
\begin{tikzpicture}[scale=0.85]
\draw[->] (0,0) -- (4.5,0) node[right] {$x$};
\draw[->] (0,0) -- (0,6.3) node[above] {$y$};
\draw[dashed] (3.5,0) -- (3.5,5.5) -- (0,5.5);
\draw[thick] (0,0) -- (3.5,5.5) node[right] {$7y=11x$};
\foreach \x in {1,2,3} {\draw (\x,0.08) -- (\x,-0.08) node[below] {$\x$};}
\foreach \y in {1,2,3,4,5} {\draw (0.08,\y) -- (-0.08,\y) node[left] {$\y$};}
\node[below] at (3.5,-0.05) {$7/2$};
\node[left] at (0,5.5) {$11/2$};
\foreach \x/\y in {1/1,2/1,2/2,2/3,3/1,3/2,3/3,3/4} {\fill (\x,\y) circle (2.6pt);}
\foreach \x/\y in {1/2,1/3,1/4,1/5,2/4,2/5,3/5} {\draw[thick] (\x,\y) circle (2.6pt);}
\end{tikzpicture}
```
