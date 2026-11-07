---
dependency_level: 4
id: lem-finite-residue-teichmuller-lifts-and-equal-characteristic-laurent-coordinates
kind: lemma
title: Finite residue lifts and equal-characteristic Laurent coordinates
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- def-local-field-valuation-ring-uniformizer-and-residue-field
- lem-hensel-factor-lifting-over-a-complete-valued-field
justified_by: []
proof_strategy: direct
axiom_use: ZF; fixed finite representative data and single-valued recursions
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
  - title: Fesenko–Vostokov, Local Fields and Their Extensions, Chapter I §§5–6 and
      Chapter IX §4; explicit local reconstruction below
    url: https://ivanfesenko.org/wp-content/uploads/2021/10/vol.pdf
verification: {}
---

## Statement

Let $F$ be a complete discretely valued field with finite residue field $k$ of cardinality $q$ and characteristic $p$, and fix a uniformizer $\pi$. Every $a\in k$ has a unique lift $[a]\in\mathcal O_F$ satisfying $[a]^q=[a]$. The nonzero lifts form $\mu_{q-1}(F)$ and are multiplicative representatives. If $\operatorname{char}F=p$, these lifts form a coefficient field identified with $k$, every element has a unique convergent Laurent expansion in $\pi$ with coefficients in this field, and
$$F=\bigoplus_{j=0}^{p-1}\pi^jF^p,\qquad [F:F^p]=p.$$
Moreover adjoining $t^p=\pi$ gives the degree-$p$ local extension $F^{1/p}=F(t)$ containing the unique $p$th root of every element of $F$, with normalized valuation $v_{F(t)}|_F=pv_F$ and the same residue field. These assertions use no choice axiom. The additive coefficient-field assertion is made only in equal characteristic.

## Statement references

[[def-local-field-valuation-ring-uniformizer-and-residue-field]]

[[lem-hensel-factor-lifting-over-a-complete-valued-field]]

## Facts & Assumptions

**Given:** Exactly the data in the Statement.

[F1] The field is complete for a surjective discrete valuation with finite residue field, and $\pi$ has value one. [[def-local-field-valuation-ring-uniformizer-and-residue-field]]

[F2] A simple residue root of a monic integral polynomial has its unique lift by the deterministic Hensel construction. [[lem-hensel-factor-lifting-over-a-complete-valued-field]]

## Proof

**Given:** The data above.

1.1 Apply [F2] to $T^q-T$: every residue element is a root and its derivative is $-1$ in $k$. The unique lifts include $0,1$. A nonzero lift has $(q-1)$st power $1$; conversely every such root is integral with a nonzero residue and is that residue's unique lift. Products and inverses again satisfy the same equation and have the expected residue, so the lifts are multiplicative representatives. In characteristic $p$, the $q$th power is also additive; sums and negatives of lifts satisfy the equation, proving that all $q$ lifts form a subfield mapped isomorphically onto $k$. No additive assertion is made in characteristic zero. [F1, F2, given, construct, algebra]

2.1 In characteristic $p$, use this subfield as representatives. Zero has the zero expansion. Starting with $x$ of valuation $a$, at each integer $i\ge a$ subtract the uniquely determined coefficient $a_i\pi^i$ whose residue cancels that of the remainder divided by $\pi^i$. The new remainder has value at least $i+1$; a zero coefficient covers a larger-valued or zero remainder. Completeness gives $x=\sum_{i\ge a}a_i\pi^i$. Two distinct expansions have a first differing coefficient, a unit whose term cannot cancel the strictly larger-valued tail; hence the expansion is unique. Addition and multiplication agree with formal Laurent addition and convolution: modulo any fixed power only finitely many terms contribute, and continuity gives their limits. This identifies $F$ with $k((\pi))$ using the chosen uniformizer. [F1, step 1.1, construct, algebra]

3.1 The Frobenius on the finite field $k$ is injective and hence bijective. Thus a series is a $p$th power precisely when its exponents are multiples of $p$: taking the unique coefficient roots gives the reverse implication, and taking $p$th powers commutes with the convergent sums. Grouping a series' indices modulo $p$ gives $F=\sum_{j=0}^{p-1}\pi^jF^p$. A nonzero summand $\pi^jy_j^p$ has valuation congruent to $j$ modulo $p$, so distinct nonzero summands have distinct valuations; their least term cannot cancel. The sum is direct and has $p$ basis elements over $F^p$. [F1, step 1.1, step 2.1, algebra]

4.1 The polynomial $T^p-\pi$ is irreducible. In a splitting field it has one root $t$ with multiplicity $p$. If a monic irreducible factor had degree $0<d<p$, its expression $(T-t)^d$ would have coefficient $-dt$ in $F$; since $d$ is nonzero in characteristic $p$, this would put $t$ in $F$, impossible because $p v_F(t)=1$. Thus the quotient $L=F[T]/(T^p-\pi)$ is a field of degree $p$. For its power-basis expression set $$v_L\!\left(\sum_{j=0}^{p-1}b_jt^j\right)=\min_{b_j\ne0}(p v_F(b_j)+j),\qquad v_L(0)=+\infty.$$ Every nonzero expression has a unique least-valued term. In a product the unique pair of least-valued terms is strictly smaller than every other product term; replacing $t^p$ by $\pi$ preserves values. Thus the least term cannot cancel, and the value is multiplicative. The strong inequality under addition is immediate. This is a normalized valuation, with $v_L(t)=1$ and restriction $pv_F$. [F1, step 3.1, construct, algebra]

5.1 A sequence in $L$ is Cauchy exactly when each of its finitely many power-basis coordinates is Cauchy in $F$, as follows from the displayed minimum. Coordinate limits therefore prove completeness without an infinite family choice. The residue of a value-zero expression comes from its index-zero coordinate; all other nonnegative-valued terms have positive value. Hence the residue field is $k$. For $x=\sum a_i\pi^i\in F$, the convergent series $\sum a_i^{1/p}t^i$ in $L$ has $p$th power $x$. Uniqueness follows from injectivity of Frobenius in any field of characteristic $p$. Every $y=\sum_{j=0}^{p-1}b_jt^j$ has $y^p\in F$, so $L$ is exactly the extension containing all these unique roots. This proves the asserted $F^{1/p}$ description, including the zero series and both unit and negative valuations. All recursions use the finite fixed field of representatives and unique limits. [F1, step 1.1, step 2.1, step 4.1, construct, algebra] ∎

