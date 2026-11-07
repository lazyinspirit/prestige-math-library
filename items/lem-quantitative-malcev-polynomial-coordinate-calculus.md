---
dependency_level: 4
id: lem-quantitative-malcev-polynomial-coordinate-calculus
kind: lemma
title: Quantitative Mal’cev polynomial coordinate calculus
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - lem-finite-nilpotent-exponential-and-bch-calculus
  - def-malcev-basis-and-rationality
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Ben Green and Terence Tao, The quantitative behaviour of polynomial orbits on nilmanifolds
      url: https://annals.math.princeton.edu/wp-content/uploads/annals-v175-n2-p02-p.pdf
      locator: Lemmas A.2–A.3, printed pp. 526–528
---

## Statement

Let $G/\Gamma$ have a supplied $Q$-rational Mal’cev basis $X$, where $Q\ge2$, dimension $m$ and nilpotence step at most $s$. First-to-second and second-to-first coordinate changes, multiplication and inversion are polynomial maps of degree $O_{m,s}(1)$ with rational coefficient heights $Q^{O_{m,s}(1)}$. In a nested basis their triangular forms are

$$\psi(xy)_k=t_k+u_k+T_k(t_{<k},u_{<k}),\qquad \psi(x^{-1})_k=-t_k+S_k(t_{<k}),$$

where $t=\psi(x)$, $u=\psi(y)$, and every monomial of $T_k$ contains a variable from each of its two arguments. The coordinate maps have zero constant term. If a Lie subalgebra has a nested basis $Y$ consisting of rational combinations of $X$ with coefficient heights at most $Q$, its exponential subgroup has polynomial second-coordinate conversion maps to the ambient coordinates and back on that subgroup, with the same types of degree and height bounds. These assertions include rational full basis changes.

For all these polynomial maps there is a common coefficient denominator bounded by $Q^C$. On inputs in $a^{-1}\mathbb Z^r$, values have a common denominator at most $Q^C a^D$, independently of the input numerators, where $C,D$ depend only on the displayed dimensions and step. Subspaces specified by rational generators or defining linear equations of heights at most $Q$ have kernel, intersection, equation and basis-extension constructions with coefficient heights $Q^C$. Every nontrivial $G$ has a nonzero horizontal character of modulus at most $Q^C$.

## Statement references

[Green–Tao, Lemmas A.2–A.3](https://annals.math.princeton.edu/wp-content/uploads/annals-v175-n2-p02-p.pdf)

## Facts & Assumptions

**Given:** The bases and parameters in the statement; constants $C,D$ depend only on the fixed dimensions and step.

[F1] The supplied chart, rational height, horizontal character and lattice conventions are those of [[def-malcev-basis-and-rationality]].

[F2] Finite BCH, exponential subgroups, strict nesting, and triangular first/second coordinate maps are proved in [[lem-finite-nilpotent-exponential-and-bch-calculus]].

## Proof

1.1 Write $F_X=\psi_X\circ\exp$ for first-to-second coordinates and $A_X=\log_X\circ E_X=F_X^{-1}$ for second-to-first coordinates. By [F2] these are triangular polynomial maps with diagonal $1$, bounded degree and coefficient heights $Q^C$. BCH therefore makes multiplication the map $(t,u)\mapsto F_X(B_s(A_X(t),A_X(u)))$ and inversion the map $t\mapsto F_X(-A_X(t))$. Strict nesting implies that component $k$ is respectively $t_k+u_k+T_k(t_{<k},u_{<k})$ and $-t_k+S_k(t_{<k})$. A bounded number of substitutions, additions and products of bounded-height rationals retains height $Q^C$. Since multiplication by the identity changes no coordinate, $T_k(t,0)=T_k(0,u)=0$; uniqueness of polynomial coefficients then implies that every monomial of $T_k$ has a factor from both variable sets. All maps send zero to zero. [F1, F2, algebra]

2.1 Let $Y$ be a rational nested basis of a subalgebra and let $P$ be its coefficient matrix in $X$. Choose a nonzero maximal minor of $P$ and invert it by its adjugate to construct a left inverse $J$ on $\operatorname{im}P$. Determinant expansion bounds all its rational heights by $Q^C$. In first coordinates subgroup inclusion is $w\mapsto Pw$, and its inverse on that image is $v\mapsto Jv$. Thus second-coordinate conversions are $F_X\circ P\circ A_Y$ and $F_Y\circ J\circ A_X$ on the subgroup. The structure constants of $Y$ have heights $Q^C$, by taking each ambient bracket of its coefficient columns and applying $J$. Consequently [F2] applies to $Y$ with that enlarged rationality parameter, proving all degree and height assertions for these maps. The square-matrix case gives full basis changes. [F2, step 1.1, algebra]

3.1 A polynomial of bounded degree in a bounded number of variables has a bounded number of coefficients. The product of their reduced denominators is a common denominator at most $Q^C$. If each input lies in $a^{-1}\mathbb Z$, each monomial of total degree at most $D$ has denominator dividing $a^D$; multiplying by the common coefficient denominator proves the asserted value-denominator bound. This does not bound numerators of values. Conversely, for any such polynomial with zero constant term, substitution of $b\mathbb Z^r$ gives integral values if $b$ is a multiple of all its coefficient denominators: every nonconstant monomial then contains at least one factor $b$. These rules also prove the coefficient bounds under any fixed finite number of compositions and auxiliary polynomial integrations, the latter dividing only by bounded positive integers. [step 1.1, step 2.1, algebra]

3.2 For completeness the rational linear algebra used here is finite: clear all denominators of a matrix of bounded size, choose its first nonzero rank-size minor in lexicographic order, and use the adjugate formula to solve the pivot equations. Each determinant has a bounded number of terms, each a bounded product, so coefficients of a kernel basis and defining equations have heights $Q^C$. Intersections concatenate equations. Extending a rational basis uses the first standard coordinate vectors that increase its rank. Applying this procedure successively through a finite flag yields a compatible bounded rational basis. In a relative-square subalgebra the conditions are $v,w\in\mathfrak g_i$ and $v-w\in\mathfrak g_{i+1}$; these are just such rational linear equations. Its brackets are those of the direct product, so all these bounds apply without any existence assertion about an unspecified subgroup. [step 2.1, algebra]

4.1 If $m>0$, $[\mathfrak g,\mathfrak g]\ne\mathfrak g$, since otherwise every term of the lower central series would equal $\mathfrak g$. Form the rational matrix whose columns are the coefficient vectors of $[X_i,X_j]$. After clearing its finitely many denominators its entries are integers bounded by $Q^C$, and its rank $r$ is less than $m$. Choose $r$ independent columns and pivot rows. Set one free coordinate to their nonzero pivot determinant and solve the remaining coordinates by cofactors, setting other free coordinates to zero. This gives a nonzero integral vector $k$ orthogonal to all columns, with $|k|_\infty\le Q^C$. For rank zero use a standard unit vector. The real linear functional $\lambda(\sum v_iX_i)=k\cdot v$ annihilates all brackets, so BCH gives $\lambda(B_s(U,V))=\lambda(U)+\lambda(V)$. Hence $\eta(\exp V)=\lambda(V)\pmod{\mathbb Z}$ is a homomorphism. Iterating BCH over ordered basis factors gives $\lambda(\log E_X(t))=k\cdot t$; therefore $\eta$ annihilates $\Gamma=E_X(\mathbb Z^m)$, is nonzero, and has modulus at most $Q^C$. This proves the assertion without claiming that every integer coordinate vector defines a character. The zero-dimensional case has no requested nonzero character. [F1, F2, step 3.2, algebra] ∎

## Remarks

The reading covers GT12 Definitions 2.1–2.6 and complete Appendix A. The suppressed height bookkeeping in A.2–A.3 is supplied locally here. Uniform denominators are independent of rational numerators; a rational element with unbounded coordinates has not been assigned bounded height. If a horizontal character of an orbit is already known to be a polynomial modulo one of degree at most $d$, its binomial coefficients have circle distance at most $1/2$, so its smoothness seminorm on $[N]$ is at most $N^d/2$; the polynomial-degree assertion itself belongs to the filtered-polynomial supplier.
