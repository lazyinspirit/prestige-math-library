---
id: ex-hh-rank-one-cyclotomic-cell-modules-and-forms
kind: example
title: "Rank-one cyclotomic cell modules and their forms"
status: draft
origin: pipeline
pipeline_run: hopf-hecke-unfinished-15-2026-10-15
dependency_level: 8
deps:
  - def-hh-multiplicative-cyclotomic-hecke-algebra
  - def-hh-cell-datum-dominance-and-cell-ideals
  - def-hh-cyclotomic-murphy-elements
  - thm-hh-cyclotomic-murphy-basis-and-cellularity
  - thm-hh-cell-modules-forms-and-radicals
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Richard Dipper, Gordon James, and Andrew Mathas, Cyclotomic q-Schur algebras, Mathematische Zeitschrift 229 (1998), 385–416"
      url: "https://pnp.mathematik.uni-stuttgart.de/iaz/iaz1/Dipper/papers/cyclo.ps"
      locator: "§3.28–3.30, printed pp. 397–398: cyclotomic Murphy cell modules, forms, and simple quotients; the rank-one specialization below is computed directly."
    - title: "Andrew Mathas, Hecke algebras and Schur algebras of the symmetric group, complete author-uploaded preliminary lecture manuscript (1998)"
      url: "https://web.math.ucsb.edu/~bigelow/books/mathas.pdf"
      locator: "Chapter 2, §§2.4–2.8, PDF pp. 15–17: cell modules, forms, and radicals; complete passage inspected."
---

## Statement

Let $F$ be a field, let $a,b\in F^\times$, and specialize the rank-one, level-two cyclotomic algebra to
$$H=F[X,X^{-1}]/((X-a)(X-b)).$$
The two Murphy elements are $m_1=X-b$ and $m_2=1$, ordered by $(1,\varnothing)\triangleright(\varnothing,1)$. They form a cellular basis. The cell modules are one-dimensional, with $X$ acting by $a$ and $b$, respectively, and the cell forms are the scalars $a-b$ and $1$. At $a=b=c\ne0$, the first form vanishes, the second does not, and $H\cong F[\epsilon]/(\epsilon^2)$ with $\epsilon=X-c$; this specialized algebra has one simple module.

## Facts & Assumptions

**Given:** A field $F$, units $a,b\in F^\times$, the rank-one cyclotomic presentation, the Murphy convention, and the coefficient-defined cell-module form.

[F1] [[def-hh-multiplicative-cyclotomic-hecke-algebra]]: at rank one the relation is $(X-a)(X-b)=0$, and $X$ is invertible.

[F2] [[def-hh-cyclotomic-murphy-elements]]: the two one-box Murphy elements are $X-b$ and $1$, with the stated dominance order and generator-fixing anti-involution.

[F3] [[def-hh-cell-datum-dominance-and-cell-ideals]]: a cellular basis uses an involution-swapped basis and the fixed-first-index multiplication law modulo higher cells.

[F4] [[thm-hh-cell-modules-forms-and-radicals]]: the cell form is the same-cell product coefficient modulo higher cells.

## Proof

**Given:** $F$, $a,b$, the quotient $H$, and the candidate basis $m_1=X-b$, $m_2=1$.

1.1 For $(1,\varnothing)$ the cyclotomic factor is $X-b$ and the row subgroup is trivial; for $(\varnothing,1)$ the factor is empty and the row subgroup is trivial. Thus [F2] gives the displayed Murphy elements. In multipartition dominance the first component prefix is $1$ for $(1,\varnothing)$ and $0$ for $(\varnothing,1)$, so the stated order holds. [F1, F2, construct]

2.1 Expanding the relation gives $X^2=(a+b)X-ab$, hence $X^{-1}=(a+b-X)/(ab)$. Therefore the Laurent quotient equals the polynomial quotient $F[X]/((X-a)(X-b))$. Division by this monic quadratic gives a unique remainder of degree less than $2$, so $1,X$ is a basis. Since $X=m_1+b m_2$, the change from $1,X$ to $m_1,m_2$ has determinant $-1$; these Murphy elements are also a basis. [F1, step 1.1, algebra]

3.1 Direct multiplication gives$(X-b)X=X^2-bX=a(X-b).$ Thus for any $h=A(X-b)+B$ in the basis of step 2.1, $(X-b)h=(A(a-b)+B)(X-b)$, which is the fixed-row law in the upper cell. In the lower cell quotient, $X=(X-b)+b\equiv b$ modulo the upper ideal, so $1\cdot h\equiv h(b)\cdot1$. The involution fixes $X$ and hence both Murphy elements. These two calculations verify the cell axiom for both labels, so the displayed basis is cellular. [F2, F3, step 2.1]

4.1 The upper form scalar is the coefficient in$(X-b)^2=(a-b)(X-b),$ so it is $a-b$. The lower basis element satisfies $1\cdot1=1$, giving form scalar $1$. [F3, F4, step 3.1]

5.1 If $a=b=c\ne0$, then the defining polynomial is $(X-c)^2$. Translation by $c$ identifies the quotient with $F[\epsilon]/(\epsilon^2)$, where $\epsilon=X-c$ is nonzero by the basis of step 2.1. The upper cell form is zero and the lower form is $1$. To see directly that there is one simple module, let $S$ be simple. The subspace $\epsilon S$ is a submodule. If it is nonzero then $\epsilon S=S$, which implies $\epsilon^2S=S$, contradicting $\epsilon^2=0$ and $S\ne0$. Thus $\epsilon S=0$, and $S$ is a simple module over $H/(\epsilon)\cong F$, hence one-dimensional. [F1, F4, step 2.1, step 4.1, algebra] ∎
