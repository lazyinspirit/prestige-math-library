---
id: "def-ag-standard-smooth-algebra"
kind: "definition"
title: "Standard smooth presentations and locally standard smooth maps"
status: draft
origin: "pipeline"
deps: ["lem-ag-polynomial-quotient-differentials", "def-polynomial-ring-on-a-family-of-indeterminates", "def-finitely-presented-module-and-algebra"]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
sources:
  references:
    - title: "Stacks Algebra 10.137.5–7"
      url: "https://stacks.math.columbia.edu/download/algebra.pdf"
---

## Definition

Let $R$ be a commutative ring. A **standard smooth presentation** of an
$R$-algebra $S$ consists of integers $n\ge c\ge0$, elements
$f_1,\dots,f_c$ of the polynomial ring $P=R[x_1,\dots,x_n]$
([[def-polynomial-ring-on-a-family-of-indeterminates]]) and an element $g\in P$
such that
$$S\cong\bigl(R[x_1,\dots,x_n]/(f_1,\dots,f_c)\bigr)_g$$
as $R$-algebras, and such that the Jacobian matrix of
([[lem-ag-polynomial-quotient-differentials]])
$$\Bigl(\frac{\partial f_j}{\partial x_i}\Bigr)_{\substack{1\le j\le c\\1\le i\le n}}$$
has a $c\times c$ minor whose image in $S$ is a unit, that is, an invertible
element. The integer $n-c\ge0$ is the **relative dimension** of the
presentation. The case $c=0$ is allowed and is exactly a localisation of a
polynomial ring, $S\cong(R[x_1,\dots,x_n])_g$; the case $n=c=0$ presents
$S=R[\,]_g$ for $g\in R$, that is a localisation of $R$ itself.

For a homomorphism $R\to S$ of commutative rings that is finitely presented as
an $R$-algebra ([[def-finitely-presented-module-and-algebra]]) and a prime
$\mathfrak q\in\operatorname{Spec}S$, the map is **standard smooth at
$\mathfrak q$**, or has a standard smooth presentation at $\mathfrak q$, when
there is $h\in S\smallsetminus\mathfrak q$ such that $S_h$ admits a standard
smooth presentation over $R$. It is **locally standard smooth** when this holds
at every prime of $S$; equivalently, when every point of $\operatorname{Spec}S$
has an affine open neighbourhood on which $S$ is presented by a single
standard smooth presentation.

Two conventions are part of the definition. First, the invertible minor may be
assumed to sit in the first $c$ columns: if a minor on columns
$i_1<\dots<i_c$ is a unit, the automorphism of $R[x_1,\dots,x_n]$ permuting the
variables so that these become the first $c$ variables carries the presentation
to one whose minor in the first $c$ columns is that unit, and the relative
dimension $n-c$ is unchanged. Second, a further principal localisation can be
absorbed into the presentation: adjoining a variable $z$ with the single
equation $zg-1$ to a presentation produces a standard smooth presentation of
the localisation, the new equation contributing a diagonal entry that keeps a
block minor invertible, and it changes $n$ and $c$ by the same amount, so that
the relative dimension is again unchanged.
