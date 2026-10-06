---
id: ex-node-line-intersection-branches
kind: example
title: Lines through a node and its two branches
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 6
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-formal-series-over-a-field-is-a-local-domain, def-axiom-of-choice, def-composition-series-and-length-of-a-module, def-formal-power-series-and-coefficient-extraction, def-local-intersection-multiplicity-plane-curves, def-multiplicity-plane-curve-point, def-plane-projective-curve, def-tangent-lines-plane-curve-point, lem-finite-variable-polynomial-rings-over-fields-are-ufds, lem-gauss-lemma-over-a-ufd, lem-local-intersection-length-finite, thm-bezout-plane-curves, thm-formal-power-series-ring-and-polynomial-embedding, thm-intersection-multiplicity-at-least-product-multiplicities]
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "William Fulton, Algebraic Curves: An Introduction to Algebraic Geometry (2008 electronic edition; Internet Archive copy of the author's PDF)"
      url: "https://web.archive.org/web/20240102232744id_/https://dept.math.lsa.umich.edu/~wfulton/CurveBook.pdf"
    - title: "Michael Artin, MIT 18.721 Notes for a Course in Algebraic Geometry (January 26, 2022 version), Chapter 1"
      url: "https://math.mit.edu/classes/18.721/notes/ag-jan26-2022.pdf"
---

## Example

Assume the Axiom of Choice, inherited from the cited local-length, smoothness or Bezout suppliers.

Let $C=V(y^2z-x^2(x+z))\subseteq\mathbf P^2$ be the nodal cubic over an algebraically closed field of characteristic not two, with node $p=[0:0:1]$. The tangent cone is $y^2-x^2$, so there are two distinct tangent lines $y=\pm x$. A line through $p$ equal to one of the two tangent lines meets $C$ with multiplicity three at $p$; a line through $p$ distinct from both tangents, for instance $V(y)$, has $I_p(C,L)=2$; a line not through $p$ and not contained in $C$ meets $C$ in three points counted with multiplicity.

## Facts & Assumptions

**Given:** AC [[def-axiom-of-choice]], an algebraically closed field $k$ of characteristic not two, the curve $C=V(y^2z-x^2(x+z))$, the chart $z=1$ with affine equation $f=y^2-x^2(x+1)=y^2-x^2-x^3$, the node $p=(0,0)$, and $O=k[x,y]_{(x,y)}$.

[F1] The homogeneous equation $(y^2-x^2)z-x^3$ is primitive and linear in $z$ over $k[x,y]$, since $y^2-x^2$ and $x^3$ are coprime. It is therefore irreducible by [[lem-gauss-lemma-over-a-ufd]], [[lem-finite-variable-polynomial-rings-over-fields-are-ufds]], and $f$ is square-free, so $C$ is a plane projective curve of degree three; at $p$ the lowest part is $y^2-x^2=(y-x)(y+x)$, so $m_p(C)=2$ and the tangent lines are $V(y-x)$ and $V(y+x)$ [[def-plane-projective-curve]], [[def-multiplicity-plane-curve-point]], [[def-tangent-lines-plane-curve-point]].

[F2] Local intersection multiplicities are lengths of local quotients, $I_p(C,L)=\ell_O(O/(f,\ell))$ [[def-local-intersection-multiplicity-plane-curves]], [[lem-local-intersection-length-finite]], and the product bound gives $I_p\ge2$ on every line through $p$, with equality exactly for separated tangent cones [[thm-intersection-multiplicity-at-least-product-multiplicities]].

[F3] $O/(y-x,x^3)$ has $k$-basis $1,x,x^2$, and $O/(y,x^2+x^3)=O/(y,x^2(1+x))$ has $k$-basis $1,x$ because $1+x$ is a unit of $O$; The descending-power flags in the quotients $k[x]_{(x)}/(x^3)$ and $k[x]_{(x)}/(x^2)$ have simple residue-$k$ factors, so lengths equal the number of these basis monomials [[def-composition-series-and-length-of-a-module]].

[F4] For a line $L$ with $L\not\subseteq C$, Bezout applied to the cubic $C$ and the line of degree one gives $\sum_{q\in L\cap C}I_q(C,L)=3$ [[thm-bezout-plane-curves]].

[F5] The two branches here are formal graph branches. In $k\llbracket x\rrbracket$ [[def-formal-power-series-and-coefficient-extraction]] the coefficient operations form a ring [[thm-formal-power-series-ring-and-polynomial-embedding]], which is a domain [[cor-formal-series-over-a-field-is-a-local-domain]]. Construct $s(x)=1+\sum_{r\ge1}s_rx^r$ with $s(x)^2=1+x$: the coefficient of degree $r$ is $2s_r+\sum_{i=1}^{r-1}s_is_{r-i}$, so it uniquely determines $s_r$ because $2$ is invertible. Then $f=(y-xs(x))(y+xs(x))$ in $k\llbracket x\rrbracket[y]$. Substitution gives the two graph branches $y=\pm xs(x)$, with distinct linear terms $\pm x$; each factor gives the domain $k\llbracket x\rrbracket$ as quotient, and no other factor remains. This is a formal splitting, not a factorisation of the irreducible curve in the algebraic local ring.

## Verification

1.1 Tangent line $V(y-x)$: substituting $y=x$ into $f$ gives $x^2-x^2-x^3=-x^3$, so $(f,y-x)=(y-x,x^3)$ up to a unit and $I_p(C,V(y-x))=\ell_O(O/(y-x,x^3))=3$. The other tangent line gives the same value by symmetry $y\mapsto-y$. [F1, F2, F3, algebra]

1.2 Non-tangent line $V(y)$ through $p$: substituting $y=0$ gives $-x^2(1+x)$, and since $1+x$ is a unit at $p$ this is a unit multiple of $x^2$, so $I_p(C,V(y))=\ell_O(O/(y,x^2))=2$, the value predicted by equality in the product bound. [F1, F2, F3, algebra]

1.3 A line $L$ with $p\notin L$ and $L\not\subseteq C$: [F4] gives $\sum_{q\in L\cap C}I_q(C,L)=3$, so the contact points of the line with the cubic, counted with multiplicity, exhaust three. [F1, F4, given]

2.1 The computations exhibit the two distinct tangent directions at the node, the contact of order three of each tangent line with the curve at the node, and the transverse value two for other lines through the node, with the global line total three for lines avoiding $p$. [step 1.1, step 1.2, step 1.3, F1, F2, F5] ∎ 