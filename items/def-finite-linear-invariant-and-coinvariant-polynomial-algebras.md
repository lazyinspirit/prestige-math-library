---
id: def-finite-linear-invariant-and-coinvariant-polynomial-algebras
kind: definition
title: Finite linear invariant and coinvariant polynomial algebras
status: draft
origin: pipeline
deps: [def-polynomial-ring-over-a-commutative-ring]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Pavel Etingof, Representations of Lie Groups, §§11–13; local proof and exact reading limits in the group report
      url: https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf
---

## Definition

Let $V$ be a finite-dimensional complex vector space and $G\leq\operatorname{GL}(V)$ finite. Write $S=\mathbb C[V]=\operatorname{Sym}(V^*)$ for its polynomial algebra. Concretely, after a finite choice of linear coordinates $x_1,\ldots,x_r$, this is the iterated polynomial ring $\mathbb C[x_1,\ldots,x_r]$ of [[def-polynomial-ring-over-a-commutative-ring]], with finite monomial sums, total degree and substitution of linear forms. Under a change of coordinates, the two invertible linear substitutions are inverse algebra homomorphisms, so the construction is independent of that choice.

Define $(g\cdot f)(v)=f(g^{-1}v)$. Substitution respects sums and products, preserves total degree, and $(g\cdot(h\cdot f))(v)=f(h^{-1}g^{-1}v)=((gh)\cdot f)(v)$, so this is an action by graded algebra automorphisms. Let
$$R=S^G=\{f\in S:g\cdot f=f\text{ for every }g\in G\},\qquad R_+=\bigoplus_{d>0}R_d,\qquad I=SR_+.$$
The **invariant polynomial algebra** is $R$; the **coinvariant algebra** is the graded quotient $S/I$. The notation $SR_+$ means finite sums of products $fp$ with $f\in S$ and $p\in R_+$. Because the action is graded, homogeneous parts of an invariant are invariant. Thus $R_+$ is an ideal of $R$, $I$ is a homogeneous ideal of $S$, and the quotient grading is well-defined.

The **Reynolds operator** is $\mathcal R(f)=|G|^{-1}\sum_{g\in G}g\cdot f$. The group is nonempty and $|G|$ is invertible in $\mathbb C$. Left multiplication permutes its finite elements, so every $\mathcal R(f)$ is invariant. For invariant $f$ all summands equal $f$, hence $\mathcal R(f)=f$ and $\mathcal R^2=\mathcal R$. For $p\in R$, $\mathcal R(pf)=p\mathcal R(f)$ termwise. It is therefore a graded $R$-linear projection onto $R$.

The polynomial-function notation is faithful over $\mathbb C$: a univariate nonzero degree-$d$ polynomial has at most $d$ roots by repeated division by $x-a$, and induction on the number of variables, viewing the last variable's coefficients as polynomials in the others, shows that a polynomial vanishing everywhere is zero. Thus the substitution formulas can be checked either formally or on points.

If $V=0$, then $S=R=\mathbb C$, $G$ is the trivial subgroup, $R_+=I=0$ and the coinvariant algebra is $\mathbb C$. If $G=\{1\}$ in positive dimension, $R=S$ and $I=(x_1,\ldots,x_r)$, so again $S/I=\mathbb C$. Constants survive in every case because $I$ has positive degree. All averages and coordinate choices are finite; no AC is used.
