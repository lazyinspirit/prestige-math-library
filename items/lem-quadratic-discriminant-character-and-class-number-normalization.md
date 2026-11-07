---
dependency_level: 6
id: lem-quadratic-discriminant-character-and-class-number-normalization
kind: lemma
title: Quadratic discriminant characters and exact class-number normalization
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
proof_strategy: direct
deps:
- lem-quadratic-extension-in-characteristic-not-two-is-generated-by-a-square-root
- thm-ring-of-integers-of-a-quadratic-field
- def-fundamental-quadratic-discriminant
- lem-monogenic-prime-factorisation-by-polynomial-reduction
- def-dirichlet-character-modulo-q
- def-primitive-dirichlet-character-and-conductor
- def-legendre-symbol
- def-jacobi-symbol
- thm-legendre-symbol-multiplicativity
- thm-jacobi-symbol-multiplicativity
- thm-quadratic-reciprocity
- thm-first-supplement-to-quadratic-reciprocity
- thm-second-supplement-to-quadratic-reciprocity
- thm-chinese-remainder-theorem
- thm-dedekind-zeta-euler-product
- thm-dirichlet-l-euler-product
- thm-nonprincipal-dirichlet-l-holomorphic-right-half-plane
- thm-identity-theorem-holomorphic-functions
- thm-dedekind-zeta-simple-pole-and-analytic-class-number-formula
- thm-finiteness-of-the-number-field-class-group
- thm-dirichlet-unit-theorem
- def-number-field-regulator
- thm-primitive-forms-correspond-to-proper-ideal-classes-of-quadratic-orders
- def-proper-invertible-ideal-class-group-of-a-quadratic-order
- def-oriented-proper-invertible-ideal-class-group-of-a-quadratic-order
- cor-trace-and-norm-of-an-algebraic-integer
- thm-natural-logarithm-laws
- thm-logarithm-derivative-and-integral
- thm-monotonicity-of-the-integral
- def-axiom-of-choice
- def-countable-choice
- lem-qa-13-pi-rational-bounds
- thm-riemann-zeta-continuation-to-the-right-half-plane
- thm-fundamental-theorem-of-arithmetic
- def-ideal-class-group-of-a-domain
- cor-ring-of-integers-is-a-dedekind-domain
- thm-nonzero-ideals-in-dedekind-domains-are-invertible
- thm-choice-implies-dependent-implies-countable-choice
- def-dependent-choice
justified_by: []
axiom_use: AC+CC. AC is used by the actual class-number/unit/regulator/class-group
  suppliers; it supplies DC where inherited. No choice-free arithmetic claim.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: W. Haneke, Über die reellen Nullstellen der Dirichletschen L-Reihen
    url: https://www.impan.pl/shop/publication/transaction/download/product/98676?download.pdf
    locator: Acta Arithmetica22(1973),391–421, complete scanned article visually read.
      Arithmetic reduced-form counts and positive Mellin/Euler estimates reconstructed
      locally; no theorem imported.
  - title: W. Haneke, Corrigendum
    url: https://www.impan.pl/shop/publication/transaction/download/product/101046?download.pdf
    locator: Acta Arithmetica31(1976),99–100, full two-page correction visually read;
      the ramified-prime reciprocal sum is retained.
---

## Statement

Assume AC and Countable Choice. Let $F/\mathbb Q$ be any quadratic number field, $d$ its signed fundamental discriminant, $q=|d|$, $h$ its ordinary ideal class number, $w$ its roots-of-unity order and $R$ its regulator. There is a primitive real nonprincipal Dirichlet character $\chi_d$ of exact conductor $q$ and parity $\chi_d(-1)=\operatorname{sgn}d$ such that, as meromorphic functions on $\operatorname{Re}s>0$,
$$\zeta_F(s)=\zeta_{\mathbb Q}(s)L(s,\chi_d).$$
Explicitly, for odd $d$, $\chi_d(n)=(n/q)$; for $d=4m$ with signed odd $m\equiv3\pmod4$, $\chi_d(n)=\chi_4(n)(n/|m|)$; and for $d=8r$ with signed odd $r$, $\chi_d(n)=\chi_8(n)\chi_4(n)^e(n/|r|)$, where $e=0,1$ according as $r\equiv1,3\pmod4$. Here, on odd integers, $\chi_4(n)=(-1)^{(n-1)/2}$ and $\chi_8(n)=(-1)^{(n^2-1)/8}$; both vanish on even integers, and an empty odd Jacobi product equals one. Every character vanishes off the units. At an unramified prime its value is $1$ or $-1$ according as the prime splits or is inert; at a ramified prime its value is zero, including all cases at $2$.
Put $H=\sqrt q L(1,\chi_d)$. Then $H\ge1/3$. If $d<0$, $H=2\pi h/w$, $w\le10$ and $h<2H$. If $d>0$, writing $h_+$ for the narrow class number and $\epsilon>1$ for the least totally positive norm-one unit, one has
$$H=2hR=h_+\log\epsilon,\qquad \epsilon=(t+u\sqrt d)/2>\sqrt d>2,\qquad t^2-du^2=4,$$
with integers $t>0,u\ge1$. The proper primitive form class numbers are $h$ for negative $d$ and $h_+$ for positive $d$. No global class-field or arbitrary-relative-field Artin conductor assertion is made.

## Facts & Assumptions

**Given:** The data and AC+CC hypotheses in the Statement.

[F1] Quadratic fields have the full integer ring with basis $1,(d+\sqrt d)/2$ in its usual equivalent parity forms. Its discriminant is fundamental. Polynomial reduction of a monogenic full integer ring gives prime factorization, including repeated factors. [[lem-quadratic-extension-in-characteristic-not-two-is-generated-by-a-square-root]] [[thm-ring-of-integers-of-a-quadratic-field]] [[def-fundamental-quadratic-discriminant]] [[lem-monogenic-prime-factorisation-by-polynomial-reduction]]

[F2] The Legendre and Jacobi symbols are multiplicative, satisfy quadratic reciprocity and the two supplements, and finite coprime congruences can be solved by CRT. Exact conductor means failure of induction from every proper divisor. [[def-dirichlet-character-modulo-q]] [[def-primitive-dirichlet-character-and-conductor]] [[def-legendre-symbol]] [[def-jacobi-symbol]] [[thm-legendre-symbol-multiplicativity]] [[thm-jacobi-symbol-multiplicativity]] [[thm-quadratic-reciprocity]] [[thm-first-supplement-to-quadratic-reciprocity]] [[thm-second-supplement-to-quadratic-reciprocity]] [[thm-chinese-remainder-theorem]] [[thm-fundamental-theorem-of-arithmetic]]

[F3] The full Dedekind and Dirichlet Euler products converge absolutely on $\operatorname{Re}s>1$. Nonprincipal Dirichlet $L$ is holomorphic on $\operatorname{Re}s>0$, and the right-half-plane zeta formula has just the simple pole at one. Identity extends equality of the continuations. [[thm-dedekind-zeta-euler-product]] [[thm-dirichlet-l-euler-product]] [[thm-nonprincipal-dirichlet-l-holomorphic-right-half-plane]] [[thm-riemann-zeta-continuation-to-the-right-half-plane]] [[thm-identity-theorem-holomorphic-functions]]

[F4] The AC class-number formula gives residue $2^{r_1}(2\pi)^{r_2}hR/(w\sqrt q)$. The unit theorem and regulator use the full integer ring; the class group is finite. Nonzero ideals in this Dedekind ring are invertible. [[thm-dedekind-zeta-simple-pole-and-analytic-class-number-formula]] [[thm-dirichlet-unit-theorem]] [[def-number-field-regulator]] [[thm-finiteness-of-the-number-field-class-group]] [[def-ideal-class-group-of-a-domain]] [[cor-ring-of-integers-is-a-dedekind-domain]] [[thm-nonzero-ideals-in-dedekind-domains-are-invertible]]

[F5] At a fundamental discriminant the proper primitive form classes identify with the ordinary imaginary ideal classes and the oriented real ideal classes, the latter identified with narrow classes. Algebraic integers have integral trace and norm. [[thm-primitive-forms-correspond-to-proper-ideal-classes-of-quadratic-orders]] [[def-proper-invertible-ideal-class-group-of-a-quadratic-order]] [[def-oriented-proper-invertible-ideal-class-group-of-a-quadratic-order]] [[cor-trace-and-norm-of-an-algebraic-integer]]

[F6] The local rational bound gives $\pi>3$; logarithms are additive and $\log x=\int_1^xdt/t$, with order preservation for integrals. [[lem-qa-13-pi-rational-bounds]] [[thm-natural-logarithm-laws]] [[thm-logarithm-derivative-and-integral]] [[thm-monotonicity-of-the-integral]]

[A1] Full AC and CC are retained at the literal local supplier interfaces. AC implies DC and hence covers inherited DC requirements; no necessity or choice-free refinement is asserted. [[def-axiom-of-choice]] [[def-countable-choice]] [[thm-choice-implies-dependent-implies-countable-choice]] [[def-dependent-choice]]

## Proof

**Given:** The stated data.

1.1 The parity forms of a fundamental discriminant in [F1] are: odd squarefree $d\equiv1\pmod4$; $d=4m$ for signed odd squarefree $m\equiv3\pmod4$; and $d=8r$ for signed odd squarefree $r$. The formulas in the Statement are multiplicative periodic real characters by [F2]. Each odd prime component is a nontrivial Legendre character: its nonzero squares form a subgroup of index two since $x^2=y^2$ has exactly the two solutions $x=\pm y$, so a nonsquare exists. CRT isolates such a component while all other components equal one; removing that prime from the conductor is impossible. The mod-four component distinguishes $1,3$; both mod-eight components distinguish $1,5$, and therefore cannot descend modulo four. CRT isolates those components too. Thus the exact conductor is $q$, not a proper divisor, even when the odd part is empty. All quadratic fields have $q\ge3$, so these characters are nonprincipal. Substituting $-1$ in the formulas and using the first supplement gives the asserted parity. [F1, F2, A1, given, construct, algebra]

2.1 At an odd prime $p\nmid q$, reciprocity and the two supplements turn the formula for $\chi_d(p)$ into $(d/p)$. The integer-ring quadratic polynomial from [F1] is split or irreducible exactly according as this symbol is $1$ or $-1$. For $2\nmid q$ the polynomial is $X^2-X+(1-d)/4$, split modulo two for $d\equiv1\pmod8$ and irreducible for $d\equiv5\pmod8$; the second supplement gives the same values of $\chi_d(2)$. At each odd $p\mid q$ the polynomial has a repeated linear factor. When $2\mid q$, the basis polynomial for $\sqrt m$ has a repeated linear factor modulo two, both for $m$ odd and for $m=2r$. Polynomial factorization in the full integer ring [F1] therefore gives precisely the asserted ramification. Its local zeta factors are $(1-p^{-s})^{-2}$, $(1-p^{-2s})^{-1}$ or $(1-p^{-s})^{-1}$ in the split, inert or ramified cases. They equal the product of the rational zeta factor and $(1-\chi_d(p)p^{-s})^{-1}$ in all cases. Absolute Euler convergence [F3] proves the identity on $\operatorname{Re}s>1$; meromorphic identity then proves it on the whole right half-plane. [F1, F2, F3, step 1.1, algebra]

3.1 Compare residues at one in step 2.1, using residue one for rational zeta and [F4]. In the imaginary case $R=1$ and the result is $H=2\pi h/w$. A root of unity has norm one and trace in $\{-2,-1,0,1,2\}$; for each trace there are at most two roots of $X^2-tX+1$. Thus $w\le10$ by [F5], and $H\ge\pi/5>3/5$ while $h/H=w/(2\pi)<2$. In the real case $w=2$ and the result is $H=2hR>0$. These use the full residue and regulator normalizations, not an Euler-deleted residue. [F4, F5, F6, step 2.1, algebra]

4.1 In the real case choose the positive first-embedding fundamental unit $\eta>1$, so $R=\log\eta$ by [F4]. Elements $1,-1,\sqrt d,-\sqrt d$ realize the four real sign patterns. If a norm-minus-one unit exists, unit signs realize all four, the narrow-to-ordinary map has kernel one, $h_+=h$ and the positive norm-one generator is $\epsilon=\eta^2$. Otherwise unit signs have order two, that kernel has order two, $h_+=2h$ and $\epsilon=\eta$. These assertions follow directly by quotienting principal ideals by their totally positive generators; invertibility and finiteness are provided by [F4]. Hence always $h_+\log\epsilon=2hR=H$. The full integer-ring description gives $\epsilon=(t+u\sqrt d)/2$ with integers $t,u$, norm equation $t^2-du^2=4$, and $\epsilon-\epsilon^{-1}=u\sqrt d$. Positivity and $\epsilon>1$ imply $t>0,u\ge1$, so $\epsilon>\sqrt d\ge\sqrt5>2$. Consequently $H\ge\log\epsilon>\log2\ge1/2$ by [F6]. The proper class counts now follow from the precise ordinary/oriented/narrow dictionary [F5]. Together with step 3.1 this proves every normalization and $H\ge1/3$. [F1, F4, F5, F6, step 3.1, choose, algebra] ∎