---
id: def-bigraded-matrix-factorization-with-potential
kind: definition
title: "Bigraded matrix factorizations with a potential"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 0
deps: [def-graded-ring-module-bimodule-and-internal-shift, def-polynomial-ring-over-a-commutative-ring]
justified_by: []
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  scraped: []
  references:
    - title: "Mikhail Khovanov and Lev Rozansky, Matrix factorizations and link homology II, arXiv:math/0505056v2 (2006), section 1, printed pp. 1-3; published as Geom. Topol. 12 (2008) 1387-1425"
      url: "https://arxiv.org/pdf/math/0505056v2"
    - title: "Khovanov and Rozansky, Matrix factorizations and link homology, arXiv:math/0401268v2, section 2 Definitions 1-2, printed pp. 13-14; section 3, printed pp. 19-22 (factorizations, parity shifts and homotopies)"
      url: "https://arxiv.org/pdf/math/0401268"
    - title: "Tina Kanstrup (notes by Corina Keller and Wai-kit Yeung), Knot homologies and matrix factorizations, ICMS summer school lecture notes (2019), Lectures 1-2"
      url: "https://webhomes.maths.ed.ac.uk/~djordan/notes/KnotHomologyMatrixFac.pdf"
---

## Definition

Fix a finite set $I$, let
$S=\mathbb Q[a,x_i\;:\;i\in I]$ be the polynomial ring of
[[def-polynomial-ring-over-a-commutative-ring]] in a variable $a$ and the
variables $x_i$, bigraded by

$$\deg a=(2,0),\qquad \deg x_i=(0,2),$$

and for a bigraded $S$-module $M$ and $(n_1,n_2)\in\mathbb Z^2$ write
$M\{n_1,n_2\}$ for the internal shift

$$M\{n_1,n_2\}_{(k,l)}=M_{(k-n_1,l-n_2)}$$

in the sense of the internal shift of
[[def-graded-ring-module-bimodule-and-internal-shift]] (the two-parameter
refinement of the one-parameter shift, applied to each bigrading separately).

Fix signs $\epsilon_i\in\{1,-1\}$ for $i\in I$ and put
$w=a\sum_{i\in I}\epsilon_ix_i$, an element of $S$ of bidegree $(2,2)$. A
**bigraded matrix factorization with potential $w$** is a pair
$M=(M^0,M^1,d)$ consisting of free bigraded $S$-modules $M^0,M^1$ (of
arbitrary, possibly infinite, rank) together with $S$-linear maps

$$d\colon M^0\to M^1,\qquad d\colon M^1\to M^0$$

of bidegree $(1,1)$ such that

$$d^2=w\cdot\mathrm{id},$$

i.e. $d^2(m)=wm$ for every $m\in M^0\oplus M^1$. A **morphism**
$f\colon M\to N$ is a pair of $S$-linear maps of bidegree $(0,0)$ on the two
components commuting with $d$; a **homotopy** between two morphisms is a pair
of maps of bidegree $(-1,-1)$ satisfying the usual homotopy formula. Write
$\mathrm{mf}_w$ for the category of factorizations with potential $w$ and
their bidegree-preserving morphisms, and $\mathrm{hmf}_w$ for its homotopy
category, in which the morphisms are the bidegree-preserving morphisms modulo
null-homotopic ones. Explicitly, $f-g=d_Nh+hd_M$, where $h$ reverses
inner parity. Internal shifts $M\{u,v\}$ shift both modules and retain their
inner parity. Write $\Pi M$ for the parity reversal: $(\Pi M)^0=M^1$,
$(\Pi M)^1=M^0$, with the same differential. It preserves the potential,
acts on morphisms by the same component maps, and satisfies $\Pi^2M=M$.
For $w=0$, the direct sum of the two parity cohomologies of $\Pi M$ is the
same bigraded vector space as that of $M$; only their parity labels change.

Caveats. Unless $w=0$, $d$ does not square to zero, so a factorization is not
an ordinary complex. If $I=\varnothing$ then $S=\mathbb Q[a]$ and a
factorization with $w=0$ is a $2$-periodic complex
$M^0\xrightarrow{d}M^1\xrightarrow{d}M^0$ of free bigraded $\mathbb Q[a]$-modules;
for $w\ne0$ the only failure of the complex axioms is the identity
$d^2=w\cdot\mathrm{id}$. The sign vector $(\epsilon_i)$ and the bigrading are
part of the data, and on this page the potential is always $a$ times a linear
form with coefficients in $\{1,-1\}$. The conventions (two-variable bigrading
with $\deg a=(2,0)$, $\deg x_i=(0,2)$; $d$ of bidegree $(1,1)$; homotopies of
bidegree $(-1,-1)$; morphisms commuting with $d$) follow Khovanov-Rozansky,
*Matrix factorizations and link homology II*, section 1, formulas (1)-(2) and
the lattice picture of its Figure 3; the ungraded definitions of a duplex and a free-module factorization are
Definitions 1-2 in section 2 (printed pp. 13-14) of Khovanov-Rozansky, *Matrix
factorizations and link homology*.
