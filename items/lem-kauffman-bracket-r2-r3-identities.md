---
id: lem-kauffman-bracket-r2-r3-identities
kind: lemma
title: "Kauffman bracket R2 and R3 identities"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 1
deps:
  - def-kauffman-bracket-smoothing-and-loop-value
  - def-temperley-lieb-diagram-category
  - thm-temperley-lieb-diagram-category-laws
  - lem-temperley-lieb-generators-satisfy-local-relations
  - def-oriented-reidemeister-moves
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Choice-free: the proof is a finite local algebra calculation."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Louis H. Kauffman, An Invariant of Regular Isotopy, Transactions of the AMS 318(2) (1990), §III, printed pp. 430–432"
      url: "https://homepages.math.uic.edu/~kauffman/IRH.pdf"
    - title: "Louis H. Kauffman, Combinatorial Knot Theory and the Jones Polynomial, arXiv:2204.12104v2, §2"
      url: "https://arxiv.org/pdf/2204.12104v2"
    - title: "Justin Roberts, Knots Knotes, §4.1, printed pp. 21–22"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/knotes.pdf"
    - title: "François Funar, A Crash Course in Quantum Invariants of Knots and 3-Manifolds, Chapter 3, §1.2"
      url: "https://www-fourier.univ-grenoble-alpes.fr/~funar/quantum.pdf"
---

## Statement

Let $A$ be an indeterminate and $n\ge2$. In a vertical $n$-strand braid box
whose longitudinal parameter increases from bottom to top, let $I$ be the
straight tangle and, for
$1\le i<n$, let $e_i$ be the cup-cap tangle with a cap at the top and a cup
at the bottom on strands $i,i+1$, and straight strands elsewhere. Each closed
loop has value $\delta=-A^2-A^{-2}$. For the positive crossing, use positive projection coordinates $(t,x)$, with $t$ longitudinal and $x$ transverse, and over and under tangent vectors $(1,-2h)$ and $(1,2h)$ for $h>0$. Transport the source chart by $(t,x)=(v,-2hu)$: its A-smoothing is the left/right pairing with coefficient $A$, giving $I$, and its B-smoothing is the top/bottom pairing with coefficient $A^{-1}$, giving $e_i$. Set
$$C_i:=AI+A^{-1}e_i.$$
For the opposite crossing, the smoothings exchange their through and cup-cap
pairings; set
$$C_i^{-}:=A^{-1}I+Ae_i.$$
Then $C_iC_i^{-}=C_i^{-}C_i=I$, and for adjacent strands
$$C_iC_{i+1}C_i=C_{i+1}C_iC_{i+1}.$$
Consequently the bracket is unchanged by every local Reidemeister II or III
replacement; arbitrary strand orientations do not change these unoriented
tangle identities.

```tikz
\begin{tikzpicture}[scale=0.8, line cap=round]
  \draw (-0.35,-0.25) rectangle (2.35,1.25);
  \foreach \x in {0,1,2} {
    \fill (\x,1) circle (1.4pt);
    \fill (\x,0) circle (1.4pt);
  }
  \draw (0,1) .. controls (0,0.68) and (1,0.68) .. (1,1);
  \draw (0,0) .. controls (0,0.32) and (1,0.32) .. (1,0);
  \draw (2,0) -- (2,1);
  \node[above] at (0,1.06) {$t_1$};
  \node[above] at (1,1.06) {$t_2$};
  \node[above] at (2,1.06) {$t_3$};
  \node[below] at (0,-0.06) {$b_1$};
  \node[below] at (1,-0.06) {$b_2$};
  \node[below] at (2,-0.06) {$b_3$};
  \node at (1,-0.55) {$e_1$};
\end{tikzpicture}
```

The picture names the cap, cup, and through strand that define $e_1$; the
algebraic equalities above are proved below without using the picture as an
inference.

## Statement references

[[def-oriented-reidemeister-moves|Oriented Reidemeister moves]]

[Kauffman, *An Invariant of Regular Isotopy* (1990), §III, printed pp. 430–432](https://homepages.math.uic.edu/~kauffman/IRH.pdf)

[Kauffman, *Combinatorial Knot Theory and the Jones Polynomial* (2022), §2](https://arxiv.org/pdf/2204.12104v2)

[Roberts, *Knots Knotes* (1999), §4.1](https://webhomes.maths.ed.ac.uk/~v1ranick/papers/knotes.pdf)

[Funar, *A Crash Course in Quantum Invariants of Knots and 3-Manifolds*, Chapter 3, §1.2](https://www-fourier.univ-grenoble-alpes.fr/~funar/quantum.pdf)

## Facts & Assumptions

**Given:** A regular link diagram with one of the local R2 or R3 replacements described in the statement.

[F1] In the source crossing chart, the A-smoothing has weight $A$, the B-smoothing has weight $A^{-1}$, and a closed trivial loop has value $\delta=-A^2-A^{-2}$ ([[def-kauffman-bracket-smoothing-and-loop-value]]).

[F2] The identity $I$ is the vertical through tangle; $e_i$ is the cap on top and cup on bottom, stacking removes loops with coefficient $\delta$, and the stacking product is associative and bilinear ([[def-temperley-lieb-diagram-category]], [[thm-temperley-lieb-diagram-category-laws]]).

[F3] The generators satisfy $e_i^2=\delta e_i$, $e_ie_{i+1}e_i=e_i$, $e_{i+1}e_ie_{i+1}=e_{i+1}$, and distant generators commute ([[lem-temperley-lieb-generators-satisfy-local-relations]]).

[F4] R2 creates or deletes two opposite crossings, and every allowed R3 has a strict height order with the cyclic over/under pattern excluded ([[def-oriented-reidemeister-moves]]).

## Proof
1.1 Use source coordinates $(u,v)$ with their standard positive orientation and positive projection coordinates $(t,x)$ on the braid box. For $h>0$, the map $(t,x)=(v,-2hu)$ has determinant $2h>0$. It sends the source over direction $(1,1)$ to $(1,-2h)$ and the source under direction $(-1,1)$ to $(1,2h)$, whose determinant is $4h>0$. The source left/right pairs have constant $u$, hence constant braid position $x$ and give the through pairing $I$; the source top/bottom pairs have constant $v$, hence constant braid time $t$ and give the cup-cap $e_i$. The displayed page coordinates $(x,t)$ reverse the positive projection orientation; their visual quarter-turn is not the orientation comparison. For the opposite crossing, rotating the source chart by a positive quarter-turn exchanges the two endpoint pairings, so its A/B smoothings are respectively $e_i$ and $I$. By [F1] these expansions are $C_i=AI+A^{-1}e_i$ and $C_i^{-}=A^{-1}I+Ae_i$. Using [F2] and [F3], $$C_iC_i^{-}=(AI+A^{-1}e_i)(A^{-1}I+Ae_i)=I+(A^2+A^{-2}+\delta)e_i=I.$$ The same multiplication in the other order gives $C_i^{-}C_i=I$, since both factors are polynomials in $e_i$. Thus the two opposite crossings in an R2 pair cancel in either order. [F1, F2, F3, algebra]

1.2 Put $x=e_i$ and $y=e_{i+1}$. Expanding and using [F3] gives $$C_iC_{i+1}C_i=A^3I+A(2x+y)+A^{-1}(xy+yx+\delta x)+A^{-3}x,$$ while interchanging $x$ and $y$ gives $$C_{i+1}C_iC_{i+1}=A^3I+A(2y+x)+A^{-1}(yx+xy+\delta y)+A^{-3}y.$$ Their difference is $A^{-1}(A^2+\delta+A^{-2})(x-y)=0$. Hence the two sides of the braid-like R3 move have equal bracket operators. [F1, F3, algebra]

2.1 Near the three-strand event, choose a linear longitudinal coordinate nonzero on each of the three tangent lines, shrink the event disk, and orient the unoriented local tracks in its increasing direction. All three tracks are then monotone; these temporary arrows do not affect the bracket. Label the tracks $1,2,3$ at the incoming end. The two R3 sides meet their pairs in orders $(12,13,23)$ and $(23,13,12)$, and a strict height order permits exactly the exponent triples $+++, --- , ++-, -++, +--, --+$. The triples $+-+$ and $-+-$ would require a cyclic height order. Put $a=C_i$ and $b=C_{i+1}$. Besides $aba=bab$ from step 1.2 and its inverse from step 1.1, the four needed identities are $$ab a^{-1}=b^{-1}ab,\qquad a^{-1}ba=bab^{-1},\qquad ab^{-1}a^{-1}=b^{-1}a^{-1}b,\qquad a^{-1}b^{-1}a=ba^{-1}b^{-1}.$$ The first follows by multiplying $aba=bab$ on the left by $b^{-1}$ and on the right by $a^{-1}$; the second follows by multiplying on the left by $a^{-1}$ and on the right by $b^{-1}$; the last two are their inverses. Thus each of the six height orders gives equality with exactly its actual over/under choices. For R2, choose a longitudinal coordinate along the common tangent at the bigon event, shrink the disk, and temporarily orient both tracks increasingly; the two local crossings have opposite types and cancel by step 1.1. Reversing any original strand arrow leaves all smoothing weights unchanged. Adjoining the unchanged exterior tangle and closing its boundary preserves these equalities: expand each crossing into its two smoothings, use bilinearity, and evaluate each resulting crossingless closed diagram with one factor $\delta$ per circle as in [F2]. This gives equal sums $\sum_S A^{a(S)-b(S)}\delta^{|S|}$ on the two sides. Every complete smoothing of the nonempty diagram has $|S|\ge1$, and $\delta=-A^2-A^{-2}$ is nonzero in the integral domain $\mathbb Z[A^{\pm1}]$; hence these sums are $\delta\langle D\rangle$ and $\delta\langle D'\rangle$. Cancelling $\delta$ proves $\langle D\rangle=\langle D'\rangle$, so every R2/R3 variant preserves the bracket. [F1, F2, F4, step 1.1, step 1.2, algebra] ∎
