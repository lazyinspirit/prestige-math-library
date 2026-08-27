---
id: ex-x-fifth-minus-six-x-plus-three-is-not-solvable-by-radicals
kind: example
title: "$x^5-6x+3$ over $\\mathbb Q$ is not solvable by radicals"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-the-complex-numbers-are-algebraically-closed, thm-algebra-of-continuous-functions, thm-intermediate-value, thm-eisenstein-irreducibility-criterion, thm-a-transitive-subgroup-of-s-p-containing-a-transposition-is-s-p, thm-solvable-by-radicals-implies-a-solvable-galois-group, thm-a-five-and-symmetric-groups-from-degree-five-are-not-solvable, thm-irreducible-separable-polynomial-iff-galois-group-transitive, thm-nth-roots-exist, def-polynomials-that-split-and-splitting-fields, cor-fields-of-characteristic-zero-and-finite-fields-are-perfect, def-perfect-field]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Keith Conrad, Applications of Galois Theory, Theorem 2.1"
      url: "https://kconrad.math.uconn.edu/blurbs/galoistheory/galoisappn.pdf"
    - title: "J. S. Milne, Fields and Galois Theory, v5.10, Sections 5 and 7"
      url: "https://web.archive.org/web/20170516190815if_/http://www.jmilne.org:80/math/CourseNotes/FT.pdf"
pipeline_run: frontier-20
---

## Example

The irreducible quintic
$$
f(x)=x^5-6x+3 \in \mathbb Q[x]
$$
is not solvable by radicals.

## Facts & Assumptions

**Given:** The polynomial $f(x)=x^5-6x+3$.

[L1] Eisenstein's criterion over $\mathbb Z$ ([[thm-eisenstein-irreducibility-criterion]]).

[L2] Every positive real has a unique positive fourth root ([[thm-nth-roots-exist]]).

[L3] Polynomial functions are continuous ([[thm-algebra-of-continuous-functions]]).

[L4] Every field of characteristic zero is perfect, and over a perfect field every nonconstant irreducible polynomial is separable ([[cor-fields-of-characteristic-zero-and-finite-fields-are-perfect]], [[def-perfect-field]]).

[L5] A continuous real function takes every intermediate value on a closed interval ([[thm-intermediate-value]]).

[L6] The field $\mathbb C$ is algebraically closed ([[thm-the-complex-numbers-are-algebraically-closed]]).

[L7] A positive-degree separable polynomial is irreducible exactly when its Galois group acts transitively on its roots ([[thm-irreducible-separable-polynomial-iff-galois-group-transitive]]).

[L8] For prime $p$, a transitive subgroup of $S_p$ containing a transposition is all of $S_p$ ([[thm-a-transitive-subgroup-of-s-p-containing-a-transposition-is-s-p]]).

[L9] The group $S_5$ is not solvable ([[thm-a-five-and-symmetric-groups-from-degree-five-are-not-solvable]]).

[L10] In characteristic $0$, a polynomial solvable by radicals has solvable Galois group ([[thm-solvable-by-radicals-implies-a-solvable-galois-group]]).

[L11] A splitting field is generated over the base field by all roots of the polynomial ([[def-polynomials-that-split-and-splitting-fields]]).

## Verification

**Proof technique:** direct.

1.1 The prime $3$ divides the coefficients $-6$ and $3$, does not divide the leading coefficient $1$, and $3^2=9$ does not divide the constant term $3$. So [L1] makes $f$ irreducible over $\mathbb Q$. [L1, algebra]

1.2 Let $a:=(6/5)^{1/4}>1$, which exists by [L2]. For real numbers $x<y$ one has $$ f(y)-f(x)=(y-x)\bigl(y^4+y^3x+y^2x^2+yx^3+x^4-6\bigr). $$ If $a\le x<y$ or $x<y\le-a$, then each of the five degree-four monomials in parentheses is at least $a^4=6/5$, and at least one is strictly larger than $6/5$; hence the parenthesis is $>5a^4-6=0$, so $f(y)>f(x)$. If $-a\le x<y\le a$, then each of those monomials is at most $a^4=6/5$, and they cannot all equal $6/5$ when $x<y$: equality in the $x^4$ and $y^4$ terms would force $|x|=|y|=a$, while $x<y$ would then give $(x,y)=(-a,a)$ and hence $y^3x=-a^4$. So the parenthesis is $<5a^4-6=0$, and therefore $f(y)<f(x)$. Thus $f$ is increasing on $(-\infty,-a]$, decreasing on $[-a,a]$, and increasing on $[a,\infty)$. [L2, algebra]

2.1 Because $a^4=6/5<16=2^4$ and $a>0$, one has $a<2$. Also $$ f(-a)=\frac{24a}{5}+3>0 \quad\text{and}\quad f(a)=3-\frac{24a}{5}<0. $$ Together with $f(-2)=-17<0$ and $f(2)=23>0$, the continuity from [L3] and the intermediate value theorem [L5] give a root in each of the three intervals $$ (-2,-a),\qquad (-a,a),\qquad (a,2). $$ Step 1.2 shows that $f$ is monotone on each of the three corresponding regions, so there is at most one root in each. Therefore $f$ has exactly three real roots. [L3, L5, step 1.2, algebra]

3.1 By [L6], choose all five roots of $f$ in $\mathbb C$ and let $E \subseteq \mathbb C$ be the subfield they generate over $\mathbb Q$. Fact [L11] makes $E$ a splitting field of $f$ over $\mathbb Q$. Step 2.1 shows that exactly three of those roots are real, so the remaining two roots are nonreal. Complex conjugation on $\mathbb C$ fixes $\mathbb Q$ and preserves the root set, hence it restricts to a $\mathbb Q$-automorphism of $E$ that fixes the three real roots and swaps the two nonreal roots. Thus $\operatorname{Gal}(E/\mathbb Q)$ contains a transposition. [L6, L11, step 2.1, algebra]

4.1 The field $\mathbb Q$ has characteristic $0$, so [L4] makes it perfect. Step 1.1 shows that $f$ is irreducible over $\mathbb Q$, and therefore $f$ is separable by the defining property of a perfect field in [L4]. Fact [L7] now makes $\operatorname{Gal}(E/\mathbb Q)$ transitive on the five roots. With step 3.1, fact [L8] gives $$ \operatorname{Gal}(E/\mathbb Q)=S_5. $$ [L4, L7, L8, step 1.1, step 3.1]

5.1 By [L9], the group $S_5$ is not solvable. If $f$ were solvable by radicals, [L10] would force $\operatorname{Gal}(E/\mathbb Q)$ to be solvable, contradicting step 4.1. Hence $f$ is not solvable by radicals. [L9, L10, step 4.1, discharge-contradiction] ∎
