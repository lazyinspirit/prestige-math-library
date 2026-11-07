---
id: thm-cyclotomic-kummer-radical-unit-class-exact-sequence
kind: theorem
title: Cyclotomic Kummer radicals and the unit-class exact sequence
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
proof_strategy: constructive
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - lem-totally-imaginary-cyclotomic-class-field-inertia-trace-kernels
  - thm-kummer-pairing-is-perfect
  - thm-number-field-integral-ideal-factorisation-in-zf
  - def-ideal-class-group-of-a-domain
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
sources:
  references:
    - title: Romyar Sharifi, Iwasawa Theory
      url: https://math.ucla.edu/~sharifi/notes/iwasawa-ch03.html
      locator: Proposition 3.3.9 and Corollary 3.3.14; the finite-layer ideal and Kummer argument is given locally.
---

## Statement

Assume AC, Countable Choice and Dependent Choice. Let $p$ be odd and let $K$ be a totally imaginary number field containing $\mu_p$. Let $K_\infty/K$ be its cyclotomic $\mathbb Z_p$-extension, with finite layers $K_n$, so $\mu_{p^\infty}\subset K_\infty$. Let $\mathfrak X_\infty$ be the Galois group of the maximal abelian pro-$p$ extension of $K_\infty$ unramified at every finite prime not above $p$. Let $A_\infty=\varinjlim_n\operatorname{Cl}(\mathcal O_{K_n})[p^\infty]$ under ideal extension and put $U_\infty=\mathcal O_{K_\infty}^\times\otimes_\mathbb Z\mathbb Q_p/\mathbb Z_p$. Then there is a natural exact sequence of discrete $p$-primary groups
$$0\longrightarrow U_\infty\longrightarrow\operatorname{Hom}_{\mathrm{cts}}(\mathfrak X_\infty,\mu_{p^\infty})\longrightarrow A_\infty\longrightarrow0.$$
It is equivariant for every compatible automorphism of the tower, with the natural conjugation action on $\mathfrak X_\infty$ and cyclotomic action on roots of unity.

## Statement references

[[lem-totally-imaginary-cyclotomic-class-field-inertia-trace-kernels]]

[[thm-kummer-pairing-is-perfect]]

[[thm-number-field-integral-ideal-factorisation-in-zf]]

[[def-ideal-class-group-of-a-domain]]

## Facts & Assumptions

**Given:** The odd prime $p$, the totally imaginary base, tower and choice assumptions in the Statement.

[F1] Beyond some finite layer, all primes over $p$ are totally ramified in the cyclotomic tower. [[lem-totally-imaginary-cyclotomic-class-field-inertia-trace-kernels]]

[F2] Finite Kummer radical subgroups pair perfectly with their finite Galois groups over a field containing the corresponding roots of unity. [[thm-kummer-pairing-is-perfect]]

[F3] Nonzero ideals in finite number-field layers factor uniquely into prime ideals, and ideal classes form the quotient by principal fractional ideals. [[thm-number-field-integral-ideal-factorisation-in-zf]] [[def-ideal-class-group-of-a-domain]]

[A1] The choice assumptions are those of the tower and finite local constructions. [[def-axiom-of-choice]] [[def-countable-choice]] [[def-dependent-choice]]

## Proof

**Proof technique:** Finite Kummer characters, eventual p-ramification and unique ideal roots, with filtered limits taken elementwise.

1.1 Since $K$ contains $\mu_p$, adjoining the cyclotomic $\mathbb Z_p$-extension adjoins all $p$-power roots of unity. For each $m\ge1$, let $B_m$ be the subgroup of $K_\infty^\times/(K_\infty^\times)^{p^m}$ whose Kummer extension is unramified away from $p$. If a class is represented in a finite layer, the condition at a prime away from $p$ is that its valuation be divisible by $p^m$: a unit has separable reduction in $X^{p^m}-u$, so its Kummer extension is unramified there, while a nondivisible valuation produces ramification. This is checked in the finite local layer containing the representative and its roots and then passed through the unramified cyclotomic tower. By [F2], the finite radical pairings identify $B_m$ with the continuous homomorphisms $\mathfrak X_\infty\to\mu_{p^m}$. Every character and every radical uses a finite quotient, so taking the union over $m$ gives $\varinjlim_m B_m\cong\operatorname{Hom}_{\mathrm{cts}}(\mathfrak X_\infty,\mu_{p^\infty})$. The transition $B_m\to B_{m+1}$ is represented by raising the radical to the $p$th power. [F2, A1, given, construct, algebra]

2.1 Let $x$ represent a class in $B_m$ and belong to a finite layer $K_n$. At every prime away from $p$, its valuation is divisible by $p^m$ by step 1.1. By [F1], after moving to a sufficiently high layer every prime above $p$ is totally ramified with ramification degree divisible by $p^m$, so the valuations above $p$ also become divisible by $p^m$. By [F3] the resulting fractional ideal has a unique $p^m$th ideal root: $x\mathcal O_{K_j}=\mathfrak a^{p^m}$. Its class is killed by $p^m$. Passing to a later layer extends $\mathfrak a$, so the class defines an element of $A_\infty$ independent of the chosen sufficiently high layer. Replacing $x$ by $xy^{p^m}$ multiplies $\mathfrak a$ by the principal ideal $(y)$ after a common finite extension, so the class is also independent of the representative. This constructs the homomorphism from the radical limit to $A_\infty$. [F1, F3, step 1.1, construct, algebra]

3.1 The map of step 2.1 is onto. For a class in $A_\infty$ killed by $p^m$, first move to a finite layer in which the class is represented by an ideal $\mathfrak a$ whose $p^m$th power is principal, $\mathfrak a^{p^m}=(x)$; the possibility of moving to such a layer follows directly from the definition of the filtered direct limit. All valuations of $x$ are divisible by $p^m$, so step 1.1 makes its Kummer class unramified away from $p$, and step 2.1 sends it to the original class. The argument applies to each given finite class, not to a chosen family of representatives. [F3, step 1.1, step 2.1, construct, algebra]

4.1 The kernel of the map in step 2.1 is precisely the unit tensor. If the image class is zero in the direct limit, move to one finite layer where $\mathfrak a=(y)$ is principal. Then $x/y^{p^m}$ has zero valuation at every finite prime and is an algebraic unit there, so the radical is represented by a unit. Conversely a unit has trivial ideal root class. The unit map into the radical limit is injective: if a unit becomes a $p^m$th power of an element $y$ in $K_\infty$, then both $y$ and $y^{-1}$ are integral over $\mathbb Z$, because their $p^m$th powers are algebraic integers, so $y$ is a unit. The direct system of unit quotients with transition $u\mapsto u^p$ is exactly $\mathcal O_{K_\infty}^\times\otimes\mathbb Q_p/\mathbb Z_p$. Together with step 3.1 this proves exactness. [F3, step 2.1, step 3.1, construct, algebra]

5.1 Compatible automorphisms of the tower send ideal roots to ideal roots and preserve unit groups, so the maps in steps 2.1–4.1 are equivariant. The Kummer pairing in [F2] satisfies $\langle\sigma g\sigma^{-1},\sigma x\rangle=\sigma\langle g,x\rangle$, giving the indicated cyclotomic action on roots of unity. Every construction is made on a single representative and a finite sufficiently high layer, so no uniform choice of roots or ideal representatives is required beyond the stated assumptions. This proves the exact sequence and its equivariance. [F2, step 1.1, step 2.1, step 4.1, algebra, discharge-construct] ∎
