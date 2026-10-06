---
id: lem-l-series-coefficient-identity-for-projective-spaces
kind: lemma
title: "The coefficient identity $[z^{2k}](z/\\tanh z)^{2k+1}=1$ for every $k$"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
aliases: []
dependency_level: 2
deps:
  - lem-formal-tangent-and-artanh-series-are-compositional-inverses
  - def-formal-hyperbolic-tangent-series
  - lem-formal-residue-identities
  - def-formal-laurent-series-and-residue
  - def-formal-power-series-and-coefficient-extraction
  - thm-formal-power-series-unit-criterion
  - thm-summable-families-and-rearrangement
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "John Milnor and James Stasheff, Characteristic Classes (re-typeset scan; original pagination)"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf"
      locator: "section 19, original p. 226: the coefficient of $z^{2k}$ in $(z/\\tanh z)^{2k+1}$ is computed to be $+1$"
    - title: "Tom Weston, An Introduction to Cobordism Theory (lecture notes, Stanford)"
      url: "https://math.stanford.edu/~ralph/morsecourse/cobordismintro%20.pdf"
      locator: "section 19, printed p. 37: the contour integral of $dz/(\\tanh z)^{2n+1}$ equals 1 after the substitution $u=\\tanh z$"
    - title: "Daniel S. Freed, Bordism: Old and New (lecture notes, UT Austin, Fall 2012)"
      url: "https://people.math.harvard.edu/~dafr/bordism.pdf"
      locator: "Proposition 8.8, printed p. 68: the substitution $z=\\tanh y$ turns the coefficient into the coefficient of $(1-z^2)^{-1}$"
    - title: "Jacob Lurie, The Hirzebruch Signature Formula (Lecture 25, Harvard Math 287x notes)"
      url: "https://people.math.harvard.edu/~lurie/287xnotes/Lecture25.pdf"
      locator: "Lecture 25, PDF p. 2: the same coefficient extraction by Lagrange inversion"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

For every $m\ge0$, in the formal series $Q(z)=z/T(z)=z/\tanh z$ of
[[def-formal-hyperbolic-tangent-series]],
$$[z^m]\Bigl(\frac{z}{\tanh z}\Bigr)^{m+1}=\begin{cases}1,&m\text{ even},\\0,&m\text{ odd.}\end{cases}$$
Equivalently, for every $k\ge0$,
$$[z^{2k}]\Bigl(\frac{z}{\tanh z}\Bigr)^{2k+1}=1,\qquad [z^{2n+1}]\Bigl(\frac{z}{\tanh z}\Bigr)^{2n+2}=0\quad(n\ge0),$$
and the formal residue $\operatorname{res}_z\,(\tanh z)^{-(2k+1)}\,dz$ equals
$1$.

## Facts & Assumptions

**Given:** The series $T$ and $A$ of [[def-formal-hyperbolic-tangent-series]], the integer $m\ge0$, and the Bernoulli-free coefficient computation below.

[F1] $T=xS$ with $S$ an even power series of constant term $1$, so $S$ is a unit and $Q=x/T=1/S$; in particular $T$ has order $1$ and linear coefficient $1$ ([[def-formal-hyperbolic-tangent-series]]).

[F2] For a field $K$, $K((x))$ consists of the Laurent series with support bounded below, with finite convolution in each degree, derivative $D(x^n)=nx^{n-1}$, and residue $\operatorname{res}_x(f)=[x^{-1}]f$ ([[def-formal-laurent-series-and-residue]]).

[F3] The inverse-series lemma gives $T\circ A=z$, $A\circ T=x$, and $A'(z)=1/(1-z^2)=\sum_{j\ge0}z^{2j}$ ([[lem-formal-tangent-and-artanh-series-are-compositional-inverses]]).

[F4] Over a field $K$ containing $\mathbb Q$, for $g\in xK\llbracket x\rrbracket$ with nonzero linear coefficient and $F\in K((x))$ for which $F\circ g$ is formed by Laurent substitution, $\operatorname{res}_x((F\circ g)Dg)=\operatorname{res}_x(F)$ ([[lem-formal-residue-identities]]).

[F5] A power series is a unit exactly when its constant coefficient is a unit, and inverses are unique; $(1-z^2)\sum_{j\ge0}z^{2j}=1$ ([[thm-formal-power-series-unit-criterion]]).

[F6] Summable families may be regrouped and reindexed, and coefficient extraction is the functional $[z^n]$ of [[def-formal-power-series-and-coefficient-extraction]] ([[thm-summable-families-and-rearrangement]]).

## Proof

**Proof technique:** direct; reduce the coefficient to a residue and change variables by the inverse series.

1.1 Since $T=uS$ with $S$ a unit of $\mathbb Q\llbracket u\rrbracket$ by [F1], the series $F(u):=T(u)^{-(m+1)}=u^{-(m+1)}S(u)^{-(m+1)}$ is a well-defined element of $\mathbb Q((u))$ of order $-(m+1)$. As $(u/T(u))^{m+1}=u^{m+1}T(u)^{-(m+1)}$ in Laurent series, $F(z)=z^{-(m+1)}(z/T(z))^{m+1}$ and therefore $\operatorname{res}_zF(z)=[z^{-1}]z^{-(m+1)}(z/T(z))^{m+1}=[z^m](z/T(z))^{m+1}$. [given, F1, F2, F5, F6, algebra]

2.1 The composition $F\circ A$ is formed by Laurent substitution: $A=z\,U$ with $U$ a unit, so $A^{-(m+1)}=z^{-(m+1)}U^{-(m+1)}$ has finitely many terms in each degree and $S^{-(m+1)}\circ A$ is a unit power series, and every coefficient of $F\circ A$ is a finite sum. By [F3], $T\circ A=z$, hence $F\circ A=(T\circ A)^{-(m+1)}=z^{-(m+1)}$; and $DA=A'=1/(1-z^2)=\sum_{j\ge0}z^{2j}$, the last identity by [F3] and [F5]. [step 1.1, F1, F2, F3, F5]

3.1 The change-of-variables identity [F4] applies over $K=\mathbb Q$ with $g=A$, whose linear coefficient is $1\ne0$: $\operatorname{res}_z\bigl((F\circ A)A'\bigr)=\operatorname{res}_zF$. By step 2.1 the left side is $\operatorname{res}_z\bigl(z^{-(m+1)}(1-z^2)^{-1}\bigr)=[z^{-1}]z^{-(m+1)}\sum_{j\ge0}z^{2j}=[z^m]\sum_{j\ge0}z^{2j}$, which is $1$ when $m$ is even and $0$ when $m$ is odd, since $z^{2j}$ has degree $2j$. Combining with step 1.1 gives $[z^m](z/T(z))^{m+1}=1$ for even $m$ and $0$ for odd $m$. [step 1.1, step 2.1, F3, F4, F5, F6]

4.1 Taking $m=2k$ gives $[z^{2k}](z/\tanh z)^{2k+1}=1$ for every $k\ge0$; taking $m=2n+1$ gives $[z^{2n+1}](z/\tanh z)^{2n+2}=0$; and step 1.1 with $m=2k$ identifies $\operatorname{res}_zT(z)^{-(2k+1)}=[z^{2k}](z/T(z))^{2k+1}=1$, the residue form asserted. The value $k=0$ reads $[z^0]Q=1$, the constant term of the unit series $Q$. All computations are coefficientwise identities between formal Laurent series over $\mathbb Q$; no analytic contour and no choice principle is involved. [step 1.1, step 3.1, given] ∎
