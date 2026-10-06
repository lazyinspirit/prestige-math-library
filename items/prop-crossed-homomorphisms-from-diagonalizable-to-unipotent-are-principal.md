---
id: prop-crossed-homomorphisms-from-diagonalizable-to-unipotent-are-principal
kind: proposition
title: "Smooth diagonalizable groups over algebraically closed fields have only principal cocycles into smooth commutative unipotent groups"
dependency_level: 9
deps:
  - def-axiom-of-choice
  - def-crossed-homomorphism-and-hochschild-extension
  - def-diagonalizable-group-and-character-module
  - def-dimension-noetherian-topological-space
  - def-morphism-and-closed-subgroup-scheme
  - lem-power-map-on-unipotent-groups-is-bijective
  - lem-smooth-multiplicative-type-groups-are-generated-by-their-finite-subgroups
provenance:
  statement: ai-altered
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
      locator: Proposition 15.3 and its proof, printed pp. 303-304
    - title: J. S. Milne, Algebraic Groups (v2.00, 20 December 2015 author-hosted preliminary edition)
      url: https://www.jmilne.org/math/CourseNotes/iAG200.pdf
      locator: Proposition 16.3, printed p. 270
---
## Statement

Assume the Axiom of Choice. Let $k$ be an algebraically closed field, let $G$ be a diagonalizable group variety over $k$ ([[def-diagonalizable-group-and-character-module]]) and let $M$ be a commutative unipotent group variety over $k$ equipped with an action of $G$ by group automorphisms ([[def-crossed-homomorphism-and-hochschild-extension]]). Put $\mathcal N_k=\{n\ge1:n\cdot1_k\ne0\}$, all positive integers in characteristic zero and those prime to $p$ in characteristic $p>0$. Then every crossed homomorphism $f:G\to M$ is principal: there is $m\in M(k)$ with
$$f(x)=x\cdot m-m\qquad\text{for all }x\in G(k).$$

## Facts & Assumptions
**Given:** The Axiom of Choice, an algebraically closed field $k$, a smooth diagonalizable group $G$ with character group $X(G)=M_G$, a smooth commutative unipotent group $M$ with a $G$-action, and a crossed homomorphism $f:G\to M$.

[F1] A crossed homomorphism satisfies $f(xy)=f(x)+x\cdot f(y)$ for all points $x,y$; it is principal when $f(x)=x\cdot m-m$ for some $m\in M(k)$. The $k$-points of $G_n=\ker(n\cdot:G\to G)$ form a finite subgroup for each $n\ge1$. ([[def-crossed-homomorphism-and-hochschild-extension]], [[def-diagonalizable-group-and-character-module]])

[F2] Assume AC. If $e\cdot1_k\ne0$, the power map $x\mapsto x^e$ is a bijection of $M(k)$, so multiplication by $e$ is an automorphism of the abelian group $M(k)$. ([[lem-power-map-on-unipotent-groups-is-bijective]])

[F3] If $G$ is a smooth group of multiplicative type over the algebraically closed field $k$ and $Z\subseteq G$ is a closed subscheme with $Z(k)\supseteq\bigcup_{n\in\mathcal N_k}G_n(k)$, then $Z=G$. ([[lem-smooth-multiplicative-type-groups-are-generated-by-their-finite-subgroups]])

[F4] A closed subset of the Noetherian topological space underlying a finite-type $k$-scheme is Noetherian; a descending chain of closed subsets of a Noetherian space stabilizes. ([[def-dimension-noetherian-topological-space]])

## Proof

**Given:** The Axiom of Choice, an algebraically closed field $k$, a smooth diagonalizable group $G$, a smooth commutative unipotent $G$-group $M$, and a crossed homomorphism $f:G\to M$.

1.1 Fix $n>1$ in $\mathcal N_k$ and $x\in G_n(k)$, and sum the identity $f(x)=f(xy)-x\cdot f(y)$ over all $y\in G_n(k)$: since the action of $x$ is a group automorphism, $\sum_{y\in G_n(k)}f(xy)=\sum_{y'\in G_n(k)}f(y')=s$ and $\sum_y x\cdot f(y)=x\cdot s$, so $e_nf(x)=s-x\cdot s$ where $e_n=|G_n(k)|$ divides a power of $n$, hence $e_n\cdot1_k\ne0$. By [F2] $e_n$ is invertible on $M(k)$, so $f(x)=x\cdot m_n-m_n$ with $m_n=-e_n^{-1}s$ for all $x\in G_n(k)$: the restriction of $f$ to $G_n$ is principal. [F1, F2]

2.1 For each $n\in\mathcal N_k$ let $M(n)=\{m\in M(k):f(x)=x\cdot m-m\text{ for all }x\in G_n(k)\}$. Each $M(n)$ is nonempty by [step 1.1] (for $n>1$; for $n=1$ the condition is vacuous and $M(1)=M(k)$) and is the set of $k$-points of the closed subscheme of $M$ defined by the finitely many equations $f(x)=x\cdot m-m$ for $x$ running over a generating set of $G_n$; the family is directed downwards under divisibility: if $n\mid n'$, then $G_n\subseteq G_{n'}$ and $M(n')\subseteq M(n)$. [step 1.1]

3.1 Choose a divisibility-increasing cofinal sequence $n_1\mid n_2\mid\cdots$ in $\mathcal N_k$ (take $n_j$ to be the least common multiple of the integers at most $j$ belonging to $\mathcal N_k$). The sets $M(n_1)\supseteq M(n_2)\supseteq\cdots$ form a descending chain of nonempty closed subsets of $M(k)$, which is Noetherian as a subspace of the Noetherian finite-type scheme $M$ ([[def-dimension-noetherian-topological-space]]), so it stabilizes at some index $j_0$; choose $m\in M(n_{j_0})$, which is nonempty. Then $f(x)=x\cdot m-m$ for all $x$ in $\bigcup_jG_{n_j}(k)$. [F4, step 2.1]

4.1 Consider the morphisms $G\to M$, $x\mapsto f(x)$ and $x\mapsto x\cdot m-m$; their equalizer $Z$ is a closed subscheme of $G$ (closed immersions and equalizers into the separated $M$) with $Z(k)\supseteq\bigcup_{n\in\mathcal N_k}G_n(k)$ by [step 3.1], since every $n\in\mathcal N_k$ divides some $n_j$ and hence has its $G_n$ contained in some $G_{n_j}$. As $G$ is a diagonalizable group variety, it is smooth of multiplicative type over the algebraically closed field $k$, [F3] gives $Z=G$; therefore $f(x)=x\cdot m-m$ for all points $x$, and $f$ is principal. [F3, step 3.1] ∎ 