---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/thm-three-sat-reduces-to-three-colourability.json
  precheck: pass
id: thm-three-sat-reduces-to-three-colourability
kind: theorem
title: "3SAT polynomial-time many-one reduces to 3-COLORABILITY"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-reduction-gadget-and-interface-invariant, def-three-colourability, def-polynomial-time-many-one-reduction]
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "John E. Savage, Models of Computation, Chapter 8"
      url: "https://cs.brown.edu/people/jsavage/book/pdfs/ModelsOfComputation_Chapter8.pdf"

---

## Statement

There is a polynomial-time many-one reduction from $3$-SAT to
$3$-COLORABILITY.

## Facts & Assumptions

**Given:** A $3$-CNF formula $$ \varphi=\bigwedge_{j=1}^m (\ell_{j1}\lor \ell_{j2}\lor \ell_{j3}). $$

Here a literal is a Boolean variable or its negation, and each clause is a disjunction of exactly three literal occurrences, with repetitions permitted. The formula is satisfied when every clause has a true literal; the empty conjunction is true. Use explicit variable-name and clause-list encodings, rejecting malformed strings. The predicate $NAE$ means that its listed Boolean values are not all equal.

[L1] A polynomial-time many-one reduction is a total polynomial-time function preserving membership in both directions, by [[def-polynomial-time-many-one-reduction]].

[L2] A gadget reduction must prove the construction cost and both directions of correctness, by [[def-reduction-gadget-and-interface-invariant]].

[F1] A graph is a yes-instance of $3$-COLORABILITY exactly when it admits a proper colouring with colours $0,1,2$, by [[def-three-colourability]].

## Proof

**Proof technique:** direct.

1.1 First reduce $\varphi$ to a not-all-equal $3$-CNF formula. Introduce one global fresh variable $z$ and, for each clause $C_j=(\ell_{j1}\lor \ell_{j2}\lor \ell_{j3})$, one fresh variable $s_j$. Replace $C_j$ by the two NAE clauses $N_{j,1}=NAE(\ell_{j1},\ell_{j2},s_j)$ and $N_{j,2}=NAE(\neg s_j,\ell_{j3},z)$. Call the conjunction of all these clauses $\psi$. This is polynomial-time and doubles the number of clauses. [L2, given, construct]

2.1 The formula $\varphi$ is satisfiable if and only if $\psi$ is NAE-satisfiable. If $\varphi$ is satisfiable, set $z=0$ and keep the satisfying values of the original variables. Then every original clause has at least one true literal, so the four-tuple $(\ell_{j1},\ell_{j2},\ell_{j3},z)$ is not all equal; choose $s_j$ so that the pair of NAE clauses in step 1.1 holds, which is possible exactly because $NAE(a,b,c,d) \iff \exists s \bigl( NAE(a,b,s)\land NAE(\neg s,c,d) \bigr)$. Indeed, if $a=b=v$, the first clause forces $s=1-v$, and the second then holds exactly unless $c=d=v$. If $a\ne b$, the first clause allows either $s$; if $c=d=w$, take $s=w$, and if $c\ne d$, take either value. These cases prove both directions of the identity. Conversely, if $\psi$ is NAE-satisfiable and $z=0$, then each original clause has at least one true literal and $\varphi$ is satisfiable. If instead $z=1$, complement every Boolean value. NAE truth is invariant under global complementation, so the complemented assignment still satisfies $\psi$ and now has $z=0$. Thus $\varphi$ is satisfiable in all cases. [L2, step 1.1, construct]

2.2 From $\psi$, build a graph $G_\psi$ as follows. Add one distinguished vertex $\nu$. For each variable $u$ appearing in $\psi$, add the triangle on the three vertices $u,\neg u,\nu$. For each NAE clause with ordered literal occurrences $(a,b,c)$, add a clause triangle with three position-distinguished vertices $(j,1),(j,2),(j,3)$, and join them respectively to the variable-triangle vertices labeled $a,b,c$. The position labels remain distinct even when a literal is repeated. This is polynomial-time and creates $O(|\psi|)$ vertices and edges. [L2, F1, step 1.1, construct]

3.1 Suppose that $\psi$ is NAE-satisfiable. Colour $\nu$ by $2$. In each variable triangle, colour the literal vertices $u$ and $\neg u$ by their Boolean values $0$ and $1$, which are opposite because they are complements. Now fix one clause triangle. Because the clause is NAE-satisfied, two of its literals have different Boolean values; colour the corresponding two clause vertices by the opposite Boolean values, so each differs from the colour of the adjacent variable vertex. Colour the third clause vertex by $2$. The three clause-vertex colours are then $0,1,2$, so the clause triangle is proper. Doing this for every clause yields a proper three-colouring of $G_\psi$. [F1, step 2.1, step 2.2, construct]

4.1 Suppose conversely that $G_\psi$ has a proper three-colouring. Every triangle uses all three colours, so after permuting colour names assume $\nu$ has colour $2$. In each variable triangle, the vertices $u$ and $\neg u$ therefore receive colours $0$ and $1$ in some order; assign the truth value of each literal to be its vertex colour, so $u$ and $\neg u$ receive opposite truth values. In each clause triangle, exactly one vertex has colour $2$ and the other two have colours $0$ and $1$. Because each clause vertex is adjacent to the matching literal vertex, a clause vertex with colour $0$ or $1$ forces the corresponding literal to have the complementary truth value. Thus the three literals of the clause are not all equal, so the clause is NAE-satisfied. Therefore $\psi$ is NAE-satisfiable. [F1, step 2.2, step 3.1, construct]

5.1 Steps 2.1, 3.1, and 4.1 show $\varphi\in 3\text{-}SAT \iff \psi\text{ is NAE-satisfiable } \iff G_\psi\in 3\text{-}COLORABILITY$. For the empty conjunction the construction is still colourable (only variable triangles, if any, and $\nu$ occur). Map a malformed source string to the complete graph on four vertices, which requires four distinct colours and is a fixed negative instance. Syntax checking and the constructions in steps 1.1 and 2.2 are polynomial-time, so [L1] and [L2] yield a polynomial-time many-one reduction from $3$-SAT to $3$-COLORABILITY. [L1, L2, step 1.1, step 2.1, step 2.2, step 3.1, step 4.1] ∎


## Remarks

The left panel shows one variable triangle; the right panel shows the clause gadget for an illustrative NAE assignment $(a,b,c)=(0,1,0)$. Numbers inside vertices are colours. Each clause position is joined to its matching literal vertex, with all other edges incident to those literal vertices omitted. The clause colours $(1,0,2)$ implement step 3.1. Literal vertices are identified when their labels denote the same literal, but the three clause positions always remain distinct. The proof above is independent of this illustration.

```tikz
\begin{tikzpicture}[scale=0.9]
\node at (1,2.2) {Variable triangle};
\node at (6,2.2) {One clause gadget};
\node[draw,circle,minimum size=7mm] (u) at (0,0.5) {$0$};
\node[above] at (0,0.9) {$u$};
\node[draw,circle,minimum size=7mm] (v) at (2,0.5) {$1$};
\node[above] at (2,0.9) {$\neg u$};
\node[draw,circle,minimum size=7mm] (n) at (1,-1.2) {$2$};
\node[below] at (1,-1.6) {$\nu$};
\draw (u) -- (v);
\draw (v) -- (n);
\draw (n) -- (u);
\node[draw,circle,minimum size=7mm] (a) at (4,1) {$0$};
\node[above] at (4,1.4) {$a$};
\node[draw,circle,minimum size=7mm] (b) at (8,1) {$1$};
\node[above] at (8,1.4) {$b$};
\node[draw,circle,minimum size=7mm] (c) at (6,-3.2) {$0$};
\node[below] at (6,-3.6) {$c$};
\node[draw,circle,minimum size=7mm] (p) at (5,0) {$1$};
\node[above] at (5,0.4) {$(j,1)$};
\node[draw,circle,minimum size=7mm] (q) at (7,0) {$0$};
\node[above] at (7,0.4) {$(j,2)$};
\node[draw,circle,minimum size=7mm] (r) at (6,-1.7) {$2$};
\node[right] at (6.4,-1.7) {$(j,3)$};
\draw (p) -- (q);
\draw (q) -- (r);
\draw (r) -- (p);
\draw (a) -- (p);
\draw (b) -- (q);
\draw (c) -- (r);
\end{tikzpicture}
```
