---
dependency_level: 3
id: lem-power-bounded-subring-and-uniform-adic-completeness
kind: lemma
title: The power-bounded subring and its uniform adic completeness
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: ai-altered
  proof: ai-generated
deps:
- def-dependent-choice
- def-tate-k-algebra-and-power-bounded-elements
- def-perfectoid-field-and-its-tilt
- lem-semiperfectness-modulo-a-pseudouniformizer-implies-modulo-p
proof_strategy: direct
sources:
  references:
  - title: Peter Scholze, Perfectoid Spaces, Definitions2.6and5.1; elementary local
      Banach-algebra arguments
    url: https://www.numdam.org/article/PMIHES_2012__116__245_0.pdf
---

## Statement

Assume Dependent Choice. Let $K$ be a complete nonarchimedean field and let $R$ be a commutative Banach $K$-algebra with a submultiplicative nonarchimedean norm. Then its power-bounded elements form an open subring $R^\circ$ integrally closed in $R$. If $R^\circ$ is bounded, then for every $\varpi\in K$ with $0<|\varpi|_K<1$, its inherited topology is the $(\varpi)$-adic topology and $R^\circ$ is complete and Hausdorff for that topology. If $R^\circ$ is bounded and $K$ is perfectoid of residue characteristic $p$ and $p\in\varpi K^\circ$, then Frobenius surjectivity on $R^\circ/\varpi R^\circ$ is equivalent to Frobenius surjectivity on $R^\circ/pR^\circ$. Thus the perfectoid Frobenius condition is independent of the scalar dividing $p$. The zero algebra is allowed.

## Statement references

[Scholze, Perfectoid Spaces, Definitions2.6and5.1](https://www.numdam.org/article/PMIHES_2012__116__245_0.pdf)

## Facts & Assumptions

**Given:** Dependent Choice, the complete field $K$, and the commutative Banach algebra with its norm.

[A1] Dependent Choice supplies the countable sequences of choices used for compatible residue representatives and by [F2]. ([[def-dependent-choice]])

[F1] A Banach algebra has a complete submultiplicative nonarchimedean norm compatible with scalar absolute values; power-bounded means boundedness of the norms of all nonnegative powers. Uniformity means boundedness of the entire set of power-bounded elements. Only these norm definitions are used, not the subring assertion being proved. ([[def-tate-k-algebra-and-power-bounded-elements]])

[F2] In a complete Hausdorff $I$-adic $K^\circ$-algebra over a perfectoid field, with $\varpi\in I$ and $p\in\varpi K^\circ$, Frobenius modulo $\varpi$ is surjective exactly when Frobenius modulo $p$ is surjective. ([[lem-semiperfectness-modulo-a-pseudouniformizer-implies-modulo-p]], [[def-perfectoid-field-and-its-tilt]])

## Proof

1.1 If $R=0$, all assertions are immediate; assume $R\ne0$. If $x,y$ are power-bounded, choose $C_x,C_y\ge1$ bounding all their power norms, including exponent zero. Commutativity gives $\|(xy)^n\|\le C_xC_y$. Every integer has scalar absolute value at most $1$, so the binomial expansion and the ultrametric inequality give $\|(x+y)^n\|\le C_xC_y$ as well, independently of $n$. Negation preserves bounded powers. Both $0$ and $1$ have bounded powers, so $R^\circ$ is a subring. Every element of norm at most $1$ has bounded powers, hence this subring contains a neighborhood of zero and is open. Its additive cosets are open, so it is also closed in $R$. It contains the image of $K^\circ$, since $\|a^n1\|=|a|_K^n\|1\|$ for $|a|_K\le1$. [given, F1, algebra]

2.1 Suppose $z\in R$ satisfies a monic relation of degree $d\ge1$ with coefficients $a_0,\ldots,a_{d-1}\in R^\circ$. For each coefficient choose a bound $C_i\ge1$ on all its power norms, including exponent zero. Repeatedly using the monic relation expresses every $z^n$ as $\sum_{j<d}c_{n,j}z^j$, where each $c_{n,j}$ is an integer polynomial in the $a_i$. Every monomial in those coefficients has norm at most $\prod_iC_i$, independently of its exponents. The ultrametric inequality and the bound $|m|_K\le1$ for integers $m$ show $\|c_{n,j}\|\le\prod_iC_i$. Hence $\|z^n\|\le(\prod_iC_i)\max_{j<d}\|z^j\|$ for all $n$. Thus $z\in R^\circ$, proving integral closedness without assuming $R$ is reduced or Noetherian. [step 1.1, F1, algebra]

2.2 Now assume $R^\circ$ is bounded and choose $M>0$ bounding the norms of all its elements. For $0<|\varpi|_K<1$, the sets $\varpi^nR^\circ$ are open neighborhoods of zero by step 1.1 and are contained in norm balls with radii $M|\varpi|_K^n\to0$. Thus they form a neighborhood basis for the inherited topology, and are exactly the powers of the principal ideal $\varpi R^\circ$. Since $R^\circ$ is closed in the complete algebra $R$, it is complete. More explicitly, choose representatives of any compatible system modulo $\varpi^nR^\circ$ under [A1]; these representatives are Cauchy and converge in $R^\circ$, and each ideal is closed because it is an open additive subgroup. The limit represents every residue, while the norm bounds show intersection of all the ideals is zero. This proves adic completeness in the inverse-limit sense as well. [A1, F1, step 1.1, algebra, choose]

3.1 Over a perfectoid field, apply [F2] with $S=R^\circ$ and $I=\varpi R^\circ$, using step 2.2. It proves exactly the stated Frobenius equivalence, so any two allowed scalar choices define the same condition. If $R=0$, its power-bounded ring and all quotients are zero and all constructions have the same trivial interpretation. No Fontaine map, almost purity, sheaf result or tilting equivalence is used. [A1, F2, step 2.2, algebra] ∎
