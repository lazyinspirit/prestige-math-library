---
id: lem-grid-changing-chosen-variable-action
kind: lemma
title: "Changing the chosen polynomial action on a filtered knot grid"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - alg-grid-knot-floer-complex
  - lem-grid-marking-variables-chain-homotopic
  - lem-grid-rectangle-boundary-square-zero-and-filtration
dependency_level: 6
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ozsvath, Stipsicz and Szabo, Grid Homology for Knots and Links"
      url: "https://web.math.princeton.edu/~petero/GridHomologyBook.pdf"
      locator: "Proposition 13.4.1 and equations (13.10)–(13.11); divided-difference change of the chosen variable action"
---

## Statement

Let $C$ be the full filtered complex of a knot grid with independent marking variables. The same underlying complex, regarded as a module over $\mathbb F_2[U]$ with $U$ acting as $U_i$, has filtered chain homotopy type independent of $i$. This assertion concerns restriction of scalars; no marking variables are identified or set to zero. For consecutive markings the equivalence and its inverse homotopies are explicit polynomial divided-difference formulas and finite weighted rectangle counts.

## Statement references

[[alg-grid-knot-floer-complex]]

[[lem-grid-marking-variables-chain-homotopic]]

[[lem-grid-rectangle-boundary-square-zero-and-filtration]]

[Ozsvath, Stipsicz and Szabo, *Grid Homology for Knots and Links*, Proposition 13.4.1](https://web.math.princeton.edu/~petero/GridHomologyBook.pdf)

## Facts & Assumptions

**Given:** The filtered grid complex $(C,d)$ over the full marking polynomial ring. Initially let $U_1,U_2$ be consecutive along the knot.

[F1] [[lem-grid-marking-variables-chain-homotopic]] gives the polynomial-linear rectangle operator $H$ counting rectangles through the distinguished $X$, with $dH+Hd=U_1+U_2$, Maslov degree $-1$, and Alexander filtration degree at most $-1$.

[F2] [[lem-grid-rectangle-boundary-square-zero-and-filtration]] pairs nonreturning two-rectangle decompositions and says returning domains are thin annuli with one marking of each type.

## Proof

1.1 The operator $H^2$ counts ordered pairs of empty rectangles both containing the distinguished $X$. A returning thin annulus contains that $X$ with multiplicity at most one and cannot occur. Every remaining domain has two decompositions by [F2]; selecting both factors through $X$ is the same in both decompositions, since it is equivalent to total multiplicity two at that point. Their monomial weights agree, so they cancel. Hence $H^2=0$. [F1, F2, given, construct, algebra]

1.2 Regard a polynomial uniquely as $\sum_{k\ge0}c_kU_1^k$, with coefficients containing all other variables and grid-state generators. Define $h$ by $h(c_kU_1^k)=c_k\sum_{p+q=k-1}U_1^pU_2^q$, with zero result when $k=0$. This finite divided difference satisfies $hU_1+U_2h=1$. Let $h'$ be its counterpart with $U_1,U_2$ exchanged, so $h'U_2+U_1h'=1$. The maps commute with the remaining variables. Each divided difference has Maslov degree $+2$ and filtration degree $+1$. [given, construct, algebra]

2.1 Put $A=Hh$, $B=Hh'$, and define $\phi=1+dA+Ad$, $\psi=1+dB+Bd$. Because $d^2=0$, both are chain maps. Their Maslov degree is zero and they do not increase filtration: $A,B$ have degree $+1$ and filtration degree at most zero. Since $d,H$ commute with every variable, step 1.2 gives $\phi U_1+U_2\phi=(U_1+U_2)+dH+Hd=0$. Similarly $\psi U_2+U_1\psi=0$. Thus $\phi$ is a map over $\mathbb F_2[U]$ from the $U_1$ action to the $U_2$ action, and $\psi$ is a map in the reverse direction. [F1, step 1.2, construct, algebra]

3.1 Set $K=A+B+BdA+BAd$. Expand using $d^2=0$ to obtain $dK+Kd=(1+dB+Bd)(1+dA+Ad)+1=\psi\phi+1$. Every summand of $K$ has Maslov degree $+1$ and filtration degree at most zero. This is an identity of additive maps; it remains to check that $K$ is linear for the $U_1$ action. [step 2.1, construct, algebra]

4.1 For an additive map $T$ write $[T,U_1]=TU_1+U_1T$. Directly from the finite sums in step 1.2 one has $[A,U_1]=(U_1+U_2)A+H$ and $[B,U_1]=0$. Apply $[ST,U_1]=S[T,U_1]+[S,U_1]T$, and use $dH+Hd=U_1+U_2$. Substitution into the four summands of $K$ cancels the terms linear in $H$ and the terms containing $(U_1+U_2)A$; the remaining expression is $H^2(hd+dh)$. It vanishes by step 1.1. Hence $[K,U_1]=0$, so the homotopy in step 3.1 is a homotopy over $\mathbb F_2[U]$. Interchanging the indices constructs a homotopy over the $U_2$ action from $\phi\psi$ to the identity. [F1, step 1.1, step 1.2, step 2.1, step 3.1, algebra]

5.1 The single-cycle condition for a knot orders all $O$ variables by consecutive pairs. Connect any two indices by a finite path in that cycle and compose the consecutive filtered equivalences constructed above. The composition of chain homotopy equivalences is a chain homotopy equivalence, with homotopies obtained by composing and adding the displayed homotopies. All formulas are finite on every polynomial input. This proves the independence assertion for all indices. [F1, step 2.1, step 3.1, step 4.1, construct, algebra] ∎
