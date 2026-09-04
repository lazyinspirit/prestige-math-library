---
id: thm-affine-nullstellensatz-correspondence
kind: theorem
title: "Affine algebraic sets correspond to radical ideals, and irreducible ones to prime ideals"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-affine-algebraic-set, def-vanishing-ideal-affine-set, lem-variety-ideal-galois-connection, thm-zariski-closed-sets-affine-space, cor-strong-nullstellensatz-two-inclusions]
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Geometry, Corollary 2.17 and Summary 2.28"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
    - title: "Donu Arapura, Notes on Basic Algebraic Geometry, §1.5-1.6"
      url: "https://www.math.purdue.edu/~arapura/preprints/algeom.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
---

## Statement

Assume the Axiom of Choice.

Let $k$ be an algebraically closed field.

1. The assignments
$$ X\longmapsto I(X),\qquad J\longmapsto V(J) $$
induce mutually inverse inclusion-reversing correspondences between affine
algebraic sets $X\subseteq \mathbf A_k^n$ and radical ideals
$J\subseteq k[x_1,\ldots,x_n]$.

2. Under this correspondence, nonempty irreducible affine algebraic sets
correspond exactly to prime ideals.

## Facts & Assumptions

**Given:** An algebraically closed field $k$ and the Axiom of Choice.

[L1] For every subset $X\subseteq k^n$ and ideal $J\subseteq k[x_1,\ldots,x_n]$, $$ X\subseteq V(J)\quad\Longleftrightarrow\quad J\subseteq I(X), $$ so in particular $X\subseteq V(I(X))$ and $J\subseteq I(V(J))$ ([[lem-variety-ideal-galois-connection]]).

[L2] For every ideal $J\subseteq k[x_1,\ldots,x_n]$, $$ I(V(J))=\sqrt J $$ ([[cor-strong-nullstellensatz-two-inclusions]]).

[L3] For ideals $I,J$ one has $V(I)\cup V(J)=V(IJ)$ ([[thm-zariski-closed-sets-affine-space]]).

## Proof

**Proof technique:** direct.

1.1 Let $X\subseteq k^n$ be affine algebraic, say $X=V(S)$ for some set $S\subseteq k[x_1,\ldots,x_n]$. Then $X\subseteq V(I(X))$ by [L1]. The reverse inclusion holds because every element of $S$ vanishes on $X$, so $S\subseteq I(X)$ and therefore $V(I(X))\subseteq V(S)=X$ by [L1]. Hence $X=V(I(X))$. [L1, given]

1.2 Conversely, assume $X$ is nonempty and irreducible, and let $fg\in I(X)$. Then every point of $X$ annihilates $fg$, so $X\subseteq V(fg)=V(f)\cup V(g)$ by [L3]. Irreducibility gives $X\subseteq V(f)$ or $X\subseteq V(g)$, and then [L1] yields $f\in I(X)$ or $g\in I(X)$. Also $1\notin I(X)$ because $X\ne\varnothing$. Therefore $I(X)$ is prime. [L1, L3, given, algebra]

2.1 Let $J\subseteq k[x_1,\ldots,x_n]$ be an ideal. Then [L2] gives $I(V(J))=\sqrt J$. Therefore $J$ is radical exactly when $I(V(J))=J$. Together with step 1.1, this makes $X\mapsto I(X)$ and $J\mapsto V(J)$ inverse correspondences between algebraic sets and radical ideals. [L2, step 1.1]

2.2 Let $X$ be a nonempty algebraic set. If $I(X)$ is prime and $X=Y\cup Z$ with algebraic subsets $Y=V(J)$ and $Z=V(K)$, then [L3] gives $X=V(JK)$. Applying step 1.1 and then [L2], $$ I(X)=I(V(JK))=\sqrt{JK}. $$ Hence $JK\subseteq I(X)$. If neither $J$ nor $K$ were contained in $I(X)$, we could choose $f\in J\setminus I(X)$ and $g\in K\setminus I(X)$, and then $fg\in JK\subseteq I(X)$ would contradict primality of $I(X)$. So $J\subseteq I(X)$ or $K\subseteq I(X)$, which by [L1] means $X\subseteq Y$ or $X\subseteq Z$. Since $Y,Z\subseteq X$, one has $X=Y$ or $X=Z$. Thus $X$ is irreducible. [L1, L2, L3, choose, algebra]

3.1 Steps 2.2 and 1.2 identify the irreducible algebraic sets precisely with the prime ideals under the correspondence from step 2.1. [step 2.1, step 2.2, step 1.2] ∎
