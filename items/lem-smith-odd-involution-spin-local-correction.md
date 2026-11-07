---
id: lem-smith-odd-involution-spin-local-correction
kind: lemma
title: "Odd involution spin and its dyadic and real correction"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 21
deps: [def-number-field, def-axiom-of-choice, def-countable-choice, def-dependent-choice, thm-smith-involution-spin-split-hilbert-product, lem-tame-local-hilbert-symbol-residue-formula]
justified_by: []
proof_strategy: direct
axiom_use: >-
  AC, Countable Choice, and DC are inherited from global Hilbert reciprocity
  and the local-field interfaces.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "A. Morgan and A. Smith, Field change for the Cassels–Tate pairing and applications to class groups, Proposition 8.1"
      url: "https://arxiv.org/pdf/2206.13403"
      locator: "§8.1, involution spin and its local conditions"
verification: {}
---

## Statement

Assume AC, Countable Choice, and DC, and let $K/F$, $\kappa$, and $\alpha$ satisfy the hypotheses of the split Hilbert-product theorem. Define its **odd involution spin** by
$$S_{\mathrm{odd}}(\alpha)=\prod_{\substack{w\nmid2\\v_w(\kappa\alpha)>0}}\left(\frac{\alpha}{w}\right)^{v_w(\kappa\alpha)},$$
where the product ranges over finite primes of $K$ of odd residue characteristic and the factor is the quadratic residue character of the unit $\alpha$ modulo $w$. The unit condition holds because $(\alpha)$ and $(\kappa\alpha)$ are coprime.

For a place $v$ of $F$ splitting in $K$, write $(x_v,y_v)$ for the two images of $\alpha$ in $F_v\times F_v$ and let $H_{v,2}$ be the quadratic Hilbert symbol. Then
$$S_{\mathrm{odd}}(\alpha)=\prod_{\substack{v\text{ split}\\v\mid2\text{ or }v\text{ real}}}H_{v,2}(x_v,y_v).$$
In particular, two inputs satisfying the same hypotheses have equal odd spins whenever their ratio is a square in every completion of $K$ over a dyadic or real place of $F$. This statement explicitly retains the dyadic and real corrections; it does not identify them with an unqualified source spin convention.

## Statement references

[[thm-smith-involution-spin-split-hilbert-product]]

[[lem-tame-local-hilbert-symbol-residue-formula]]

[Morgan and Smith, *Field change for the Cassels–Tate pairing and applications to class groups*, Proposition 8.1](https://arxiv.org/pdf/2206.13403)

## Facts & Assumptions

**Given:** AC, Countable Choice, DC, the quadratic extension and $\alpha$ with the stated ideal and local properties.

[F1] The product over all split places of the corresponding quadratic Hilbert factors is $1$. [[thm-smith-involution-spin-split-hilbert-product]]

[F2] At an odd residue-characteristic place, the quadratic Hilbert symbol is symmetric, is $1$ on two units, and its pairing of a unit with an element of valuation $r$ is the residue quadratic character of the unit raised to $r$. [[lem-tame-local-hilbert-symbol-residue-formula]]

## Proof

1.1 If a finite place of $F$ is nonsplit, its unique prime $w$ in $K$ is fixed by $\kappa$. Then $v_w(\alpha)=v_w(\kappa\alpha)$, so coprimality and integrality force both valuations to be zero. Thus every factor in $S_{\mathrm{odd}}(\alpha)$ lies over a split odd place. [given, algebra]

2.1 At a split odd place, write $\alpha=(x,y)\in F_v\times F_v$. Integrality gives nonnegative valuations, while coprimality of $(\alpha)$ and $(\kappa\alpha)$ gives $\min(v(x),v(y))=0$. If $v(x)>0$, the odd spin contribution at the conjugate prime is $\chi_v(\overline y)^{v(x)}$; by [F2] this is $H_{v,2}(x,y)$. The case $v(y)>0$ is symmetric, and if both are units both the spin contribution and [F2]'s Hilbert factor are $1$. Consequently $S_{\mathrm{odd}}(\alpha)$ is the product of the split odd Hilbert factors. [F2, step 1.1, given, algebra]

3.1 By [F1], multiplying the split odd factors, the split dyadic factors, and the split real factors gives $1$; complex factors are $1$. Since each factor is $\pm1$, its inverse equals itself, proving the displayed correction formula. If $\alpha/\alpha'$ is a square in every completion of $K$ above a dyadic or real split place, the corresponding two components have identical local square classes, so all factors on the right agree. This proves the comparison without discarding the corrections. [F1, step 2.1, given, algebra] ∎
