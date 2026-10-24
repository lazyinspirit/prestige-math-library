---
id: lem-qa-23-positive-polynomial-complement-factorization
kind: lemma
title: A nonnegative even polynomial has a bounded parity complement
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 9
deps:
  - def-qa-23-qsp-admissible-polynomial-pair
  - def-polynomial-ring-over-a-commutative-ring
  - def-polynomial-degree-leading-coefficient-and-monic
  - def-complex-conjugate-real-imaginary-part-and-modulus
  - thm-of-square-roots
  - thm-polynomial-division-algorithm-over-a-field
  - thm-fundamental-theorem-of-algebra-minimum-modulus-proof
  - lem-nonreal-roots-of-a-real-polynomial-occur-in-conjugate-pairs
  - thm-complex-numbers-form-a-field
  - def-real-numbers
  - thm-reals-field
  - thm-reals-ordered-field
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "András Gilyén, Yuan Su, Guang Hao Low, and Nathan Wiebe, Quantum singular value transformation and beyond"
      url: "https://arxiv.org/pdf/1806.01838"
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms, Chapter 29"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
---

## Statement

Let $d\ge0$ and let $A\in\mathbb R[x]$ be even, of degree at most $2d$, and nonnegative on $[-1,1]$. Then there are $B,C\in\mathbb R[x]$ such that
$$A(x)=B(x)^2+(1-x^2)C(x)^2,$$
where $\deg B\le d$, $\deg C\le d-1$, $B$ has parity $d$, and $C$ has parity $d-1$. The zero polynomial is both even and odd and satisfies every degree bound.

## Facts & Assumptions

**Given:** An integer $d\ge0$ and an even real polynomial $A$ with $\deg A\le2d$ and $A(x)\ge0$ on $[-1,1]$.

[F1] [[def-polynomial-ring-over-a-commutative-ring]]: a polynomial is a finitely supported coefficient sequence, and multiplication is coefficient convolution.

[F2] [[def-polynomial-degree-leading-coefficient-and-monic]]: a nonzero polynomial has degree equal to the largest exponent with nonzero coefficient; the zero polynomial has no degree.

[F3] [[thm-fundamental-theorem-of-algebra-minimum-modulus-proof]]: every nonconstant complex polynomial has a complex root.

[F4] [[thm-polynomial-division-algorithm-over-a-field]]: division by a nonzero polynomial over a field gives a unique quotient and a remainder that is zero or has degree strictly below the divisor.

[F5] [[thm-of-square-roots]]: every nonnegative real number has a unique nonnegative real square root.

[F6] [[lem-nonreal-roots-of-a-real-polynomial-occur-in-conjugate-pairs]]: a nonreal root of a real polynomial occurs with its complex conjugate.

[F7] [[def-complex-conjugate-real-imaginary-part-and-modulus]]: complex conjugation fixes real numbers, conjugates products, and $z\overline z=|z|^2$.

[F8] [[thm-complex-numbers-form-a-field]]: the complex numbers form a field containing $\mathbb R$, with the displayed coordinate arithmetic.

[F9] [[thm-reals-field]] and [[thm-reals-ordered-field]]: $\mathbb R$ is a field with a compatible total order, so real polynomial division and sign comparisons are defined.

## Proof

1.1 If $A=0$, choose $B=C=0$. Otherwise evenness makes $\deg A=2n$ for some $0\le n\le d$. By [F3], [F8], and repeated use of [F4], factor $A$ over $\mathbb C$ into its finite multiset of roots with multiplicity. [F1, F2, F3, F4, F8]

1.2 The root multiset, with multiplicities, is invariant under $\zeta\mapsto-\zeta$ because substituting $-x$ preserves the order of a zero, and under conjugation as follows: if $A=(x-\zeta)^m H$ with $H(\zeta)\ne0$, conjugating the entire coefficient factorization gives $A=(x-\overline\zeta)^m\overline H$ and $\overline H(\overline\zeta)=\overline{H(\zeta)}\ne0$. Hence conjugate roots have exactly equal multiplicities, strengthening the root existence in [F6]. The multiplicity at zero is even because every nonzero coefficient of an even polynomial has even exponent. Every real root $s$ with $0<|s|<1$ has even multiplicity: write $A(x)=(x-s)^m h(x)$ with $h(s)\ne0$. Division by $x-s$ gives $h(x)-h(s)=(x-s)k(x)$ for a polynomial $k$. On a bounded interval around $s$, $k$ is bounded (each of its finitely many monomials is bounded); choosing the interval small enough makes $|h(x)-h(s)|<|h(s)|$, so $h$ has the sign of $h(s)$ there by [F9]. If $m$ were odd, $(x-s)^m h(x)$ would then have opposite signs on the two sides of $s$, contrary to $A\ge0$. [F1, F2, F4, F6, F7, F9, given]

1.3 Pair the roots into the following classes, choosing one representative from each symmetric class. A zero root of multiplicity $2r$ contributes $x^r$. A real pair $\pm s$ with $0<s<1$ and multiplicity $m$ at each root contributes $(x^2-s^2)^{m/2}$; this is a polynomial because $m$ is even. A real pair $\pm s$ with $s\ge1$ and multiplicity $m$ contributes $R_s(x)^m$, where $R_s(x)=\sqrt{s^2-1}\,x+i s\sqrt{1-x^2}$ and $R_sR_s^*=s^2-x^2$. A pure-imaginary pair $\pm ib$ with $b>0$ and multiplicity $m$ contributes $I_b(x)^m$, where $I_b(x)=\sqrt{b^2+1}\,x+i b\sqrt{1-x^2}$ and $I_bI_b^*=x^2+b^2$. [F5, F7]

1.4 A nonreal quadruple $\pm a\pm ib$ with $a,b>0$ and common multiplicity $m$ contributes $Q_{a,b}(x)^m$. Put $u=a^2+b^2$ and $v=2(a^2+1)b^2+(a^2-1)^2+b^4$, and set $c=u+\sqrt v$. Since $\sqrt v\ge|a^2-1|$, the two cases $a^2\le1$ and $a^2\ge1$ give $c\ge1$, so all displayed square roots are real by [F5]. Define $Q_{a,b}(x)=c x^2-u+i\sqrt{c^2-1}\,x\sqrt{1-x^2}$. For $x\in[-1,1]$, its quartic norm is $Q_{a,b}(x)\overline{Q_{a,b}(x)}=|Q_{a,b}(x)|^2\ge0$; because the quartic roots are the nonreal numbers $\pm a\pm ib$, it is strictly positive on the real interval. Direct expansion gives $Q_{a,b}Q_{a,b}^*=x^4+2(b^2-a^2)x^2+(a^2+b^2)^2$, the product of the four linear root factors. [F5, F6, F7, F8, F9, algebra]

2.1 Let $G(x)$ be the product of the nonnegative real factors associated with these root classes: $x^{2r}$ for zero roots, $(x^2-s^2)^m$ for interior real pairs, $(s^2-x^2)^m$ for exterior real pairs, $(x^2+b^2)^m$ for pure-imaginary pairs, and the quartics from step 1.4. Then $A=\kappa G$ for a nonzero real constant $\kappa$, because both sides have the same roots with the same multiplicities and the same degree. Enumerate reduced rationals in $(-1,1)$ by increasing positive denominator and then increasing numerator, and take the first $x_0$ outside the finite root set; this search terminates because a nonzero polynomial has finitely many roots by step 1.1. There $A(x_0)>0$ by the nonnegativity hypothesis and $A(x_0)\ne0$, and $G(x_0)>0$ by its displayed factors, so $\kappa=A(x_0)/G(x_0)>0$ by [F9]. Let $K=\sqrt{\kappa}$ by [F5]. [F3, F4, F5, F8, F9, step 1.1, step 1.3, step 1.4, given]

3.1 Multiply the corresponding root-class factors defined above to form $W(x)=K\prod R(x)$, retaining the interior and zero factors as real factors. Repeated use of $(B+i\sqrt{1-x^2}C)(D+i\sqrt{1-x^2}E)=(BD-(1-x^2)CE)+i\sqrt{1-x^2}(BE+CD)$ shows that $W=B+i\sqrt{1-x^2}C$ for real polynomials $B,C$. Their factor identities give $WW^*=A$ for every $x\in[-1,1]$. Both $WW^*=B^2+(1-x^2)C^2$ and $A$ are polynomials; their difference vanishes at infinitely many real points, so it is the zero polynomial, since a nonzero polynomial has at most its degree many roots by repeated division by linear factors. [F1, F4, F7, step 1.3, step 1.4, step 2.1]

4.1 In each root class, the real part and the coefficient of $i\sqrt{1-x^2}$ have opposite parities; a real zero or interior factor has only a real part. The multiplication rule in step 3.1 preserves this parity relation. If $\deg A=2n$, the degrees of the factors give $\deg B\le n$ and $\deg C\le n-1$: every imaginary term contains at least one factor whose imaginary coefficient has degree at least one below that factor's real degree. When $n=d$, the pair has a unique parity profile $b$ determined by its nonzero component: $B$ has parity $b$ if $B\ne0$, and otherwise $C$ has parity $1-b$. If $b\ne d$, then $B$ has degree at most $d-1$, while $C$, whose parity is $d$, has degree at most $d-2$; both terms of $B^2+(1-x^2)C^2$ would then have degree at most $2d-2$, contradicting $\deg A=2d$. Thus $b=d$ and the required parities hold. [step 3.1, algebra]

5.1 If $n<d$, let $b$ be the parity profile from step 4.1. If $b\ne d$, multiply $W$ by $x+i\sqrt{1-x^2}$. Its conjugate product is $x^2+(1-x^2)=1$, and the multiplication rule changes the profile from $b$ to $1-b$. It raises the degrees by at most one, so the new bounds are $\deg B\le n+1\le d$ and $\deg C\le n\le d-1$. If $b=d$, no adjustment is needed. This also covers $B=0$ or $C=0$, since the profile is read from the nonzero component. Thus the resulting $B,C$ meet the required bounds and parities, completing the identity. [F5, step 3.1, step 4.1, algebra] ∎






