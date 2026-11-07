---
id: lem-cyclic-number-field-local-norm-data-descend-to-constructible-universe
kind: lemma
title: Cyclic number-field local norm data descend to the constructible universe
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - thm-constructible-inner-model-semantic-and-formal-schema
  - prop-constructible-levels-transitivity-ordinals-and-rank
  - thm-delta-zero-absoluteness-for-transitive-sets
  - thm-rational-polynomial-root-isolation-is-sound-and-finite
  - lem-number-field-completion-tensor-and-norm-in-zf
  - thm-ring-of-integers-free-of-rank-degree
  - thm-field-norm-and-trace-agree-with-operator-determinant-and-trace
  - thm-finite-galois-extension-characterizations
  - thm-number-field-places-classification
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Stefan Geschke, Models of Set Theory
      url: https://www.math.uni-hamburg.de/home/geschke/teaching/ModelsSetTheory.pdf
      locator: Sections5.3–5.5 through the supplied local constructible-inner-model schema; the arithmetic local-norm descent is authored here
---

## Statement

Work in ZF. Present a finite cyclic extension $F/E$ of number fields by finite rational multiplication tables, an inclusion table, and a matrix for a generator of $\operatorname{Gal}(F/E)$. Let $a\in E^\times$ be given by its finite rational coordinates. Let $\mathcal L$ denote the constructible universe. If $a$ is a norm at every ambient completion of $F/E$, then the corresponding local-norm assertion holds inside $\mathcal L$ for these same coded fields and parameter, using its internal completions. Moreover a global norm witness obtained inside $\mathcal L$ is a global norm witness in the ambient coded fields. These are statements about this fixed arithmetic assertion, not a satisfaction predicate for the class $\mathcal L$ or an absoluteness assertion for arbitrary idèle classes.

## Facts & Assumptions

**Given:** The finite rational field/tower/generator data and the local norm hypotheses in the Statement. No ambient choice axiom is assumed.

[F1] In ZF, each fixed ZFC axiom holds relativized to the definable constructible class, which is transitive and has the ambient ordinals. The corresponding use of the inner-model theorem is a formula-by-formula schema. [[thm-constructible-inner-model-semantic-and-formal-schema]] [[prop-constructible-levels-transitivity-ordinals-and-rank]]

[F2] Bounded formulas are absolute between transitive sets, with the analogous schema for definable transitive classes. [[thm-delta-zero-absoluteness-for-transitive-sets]]

[F3] Rational polynomials have finite exact real-root isolation lists by dyadic intervals and exact roots, with every real root represented. [[thm-rational-polynomial-root-isolation-is-sound-and-finite]]

[F4] In ZF the DVR completion, finite residue-quotient, relative tensor and norm formulas hold for number fields at finite and archimedean places. [[lem-number-field-completion-tensor-and-norm-in-zf]]

[F5] Integer rings have finite free integral bases. Field norm is the determinant of multiplication. [[thm-ring-of-integers-free-of-rank-degree]] [[thm-field-norm-and-trace-agree-with-operator-determinant-and-trace]]

[F6] For a finite extension, a full group of degree-many automorphisms, or equivalently fixed field equal to the base, characterizes a finite Galois extension. [[thm-finite-galois-extension-characterizations]]

[F7] Under AC, number-field places are exactly nonzero integer-ring primes and real embeddings or conjugate pairs of complex embeddings. This premise is used only inside the constructible universe, where AC holds. [[thm-number-field-places-classification]]

## Proof

1.1 All finite rational data in the Statement belong to $\mathcal L$. Indeed it has the same natural numbers and integers by transitivity and [F1], hence the same rationals and finite tuples. Finite rational-coordinate field operations, inverses and the inclusion have the same values. The assertion that a nonzero rational-coordinate element has an inverse quantifies only over these same countable coded sets and is arithmetic, so it too is absolute by [F2], with quantifiers bounded by $\omega$ and its finite powers after coding. The generator's distinct powers, their multiplication laws and its fixed space are finite rational matrix calculations. In particular they give the same cyclic extension internally by [F6]. These observations apply to the parameter $a$ and to every element of either coded number field. [F1, F2, F6, given, construct, algebra]

1.2 The integer ring is also the same set: an element is integral exactly when some finite monic integer polynomial annihilates it, an arithmetic condition on its rational coordinates. By [F5], its additive group is finite free over $\mathbb Z$. Every additive subgroup of $\mathbb Z^d$ is finitely generated in ZF: project to one coordinate, take its least positive image generator if nonzero, lift that single generator, and induct on the remaining $d-1$ coordinates; subtraction by the lift splits off its cyclic image. Thus each ideal has a finite integer generating tuple, hence belongs to $\mathcal L$. Ideal membership, multiplication, primality and extension/contraction quantify over the same rational/integer codes and are arithmetic. The nonzero prime ideals and their finite residue rings, their localizations and every quotient $R_P/P^mR_P$ are therefore the same internally and externally. One may canonically order each finite quotient by least rational representative codes. This argument concerns the discrete finite quotients, not equality of the internal and ambient complete fields. [F1, F2, F5, step 1.1, construct, algebra]

2.1 Fix a finite place $P$ of $E$ from these prime-ideal codes. Choose one $E$-basis $b_1,\ldots,b_n$ of $F$, and write
$$\mathcal N(X_1,\ldots,X_n)=N_{F/E}(\textstyle\sum_iX_ib_i).$$
By [F5] this is the determinant of an $n$ by $n$ matrix of linear forms, so is a homogeneous degree-$n$ polynomial with coefficients in $E$, the same polynomial in both universes. By [F4], its value on the tensor algebra $F\otimes_EE_P$ is the product of the norms on the finitely many local field factors. The hypothesis that $a$ is a norm from every factor therefore gives a solution of $\mathcal N(x)=a$ in $E_P^n$: put one such norm preimage in one factor and1 in the others, and use the tensor isomorphism. This uses only a finite selection for this one place. Choose a positive rational integer $D$ making all coefficients of $D\mathcal N$ integral at $P$, and a uniformizer $\pi\in E$ of $R_P$; both are discrete codes in $\mathcal L$. Choose an integer $h\ge0$ large enough that $Y_i=\pi^h x_i$ are integral and $D\pi^{hn}a$ is integral. Then
$$D\mathcal N(Y)=D\pi^{hn}a$$
is an equation with coefficients in the common localization $R_P$, with an ambient solution in its completed integer ring. [F4, F5, step 1.1, step 1.2, given, construct, algebra]

2.2 For $m\ge1$, let $T_m$ be the finite set of vectors in $(R_P/\pi^mR_P)^n$ satisfying that equation modulo $\pi^m$. These finite sets and reduction maps are identical internally and externally by step 1.2; every $T_m$ is nonempty by the ambient solution. All of this is arithmetic on finite codes, so internal nonemptiness holds for each $m$ as well. Call a node extendable when it has extensions to every later level. An extendable node has an extendable child, since otherwise the finitely many bounds on its children's depths have a maximum. At every step select the least extendable child in the finite code order. Extendability has only natural-number and finite-code quantifiers, so has the same meaning in both universes; ordinary recursion of this unique function defines the branch inside $\mathcal L$. Internal completeness in [F4] then yields $Y\in(E_P^{\mathcal L})^n$ solving the equation exactly. Dividing by $\pi^h$ gives a solution of $\mathcal N(x)=a$ in its internal completion. No assertion that every ambient $p$-adic number belongs to $\mathcal L$ was used. [F1, F2, F4, step 1.2, step 2.1, construct, algebra]

2.3 Inside $\mathcal L$, apply [F4] to that norm-polynomial solution. It gives elements in the local tensor factors whose norm product is $a$. The factors are transitively permuted by the coded cyclic generator. For a specified factor, use the least power carrying it to each other factor and transport the corresponding element back. The finite product of these transported elements has local norm $a$. None is zero, since their norm product is the nonzero $a$. Thus internally $a$ is a norm from every local extension above $P$. This is a theorem for an arbitrary prime code $P$, not a simultaneous choice of all the branch witnesses. [F4, F6, step 1.1, step 2.2, construct, algebra]

3.1 The archimedean data are also absolute. Every real algebraic number belongs to $\mathcal L$: [F3] gives a rational isolating interval, and repeated dyadic isolation gives its unique rational Cauchy cut by natural-number recursion inside $\mathcal L$. Exact rational roots are included. A complex algebraic number has real and imaginary parts real algebraic, since algebraic numbers are closed under the finite field operations and conjugation; their annihilating polynomials can equally be obtained by finite resultants. Thus the finite algebraic images of the field bases specifying every real or complex embedding all belong to $\mathcal L$, with the same equations, inequalities and conjugate pairs. For a real base place, cyclic Galois transitivity makes all factors either real or all complex; their norm images are respectively $\mathbb R^\times$ and $\mathbb R_{>0}$. At a complex base place they are $\mathbb C^\times$. These norm descriptions are explicit in [F4]. Positivity of the algebraic number $a$ is absolute, and in the positive case its positive square root is algebraic and lies in $\mathcal L$. Hence the ambient local norm hypothesis holds internally at every archimedean place as well. [F1, F2, F3, F4, step 1.1, construct, algebra]

4.1 Internally $\mathcal L$ satisfies AC by [F1], so [F7] applies inside it and its number-field places have the usual prime-ideal and archimedean descriptions. Steps 2.3 and 3.1 therefore cover every one of its places. They prove exactly the claimed local-norm assertion relativized to $\mathcal L$. Finally a global element of its coded $F$ is a finite rational tuple, a set identical in the ambient universe. The equation $N_{F/E}(x)=a$ is a finite determinant equality on those coordinates, so is absolute by step 1.1. Any internal global norm witness therefore is an ambient global witness. This last assertion is only about an element of the coded number field, not an arbitrary internal cohomology class or an ambient idèle. [F1, F2, F4, F5, F7, step 1.1, step 2.3, step 3.1, algebra] ∎
