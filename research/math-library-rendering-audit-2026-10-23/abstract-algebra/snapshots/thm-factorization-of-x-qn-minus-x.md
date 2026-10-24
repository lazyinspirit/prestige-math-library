---
id: thm-factorization-of-x-qn-minus-x
kind: theorem
title: "Over $\\mathbb F_q$, $x^{q^n}-x$ is the product of all monic irreducibles whose degrees divide $n$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-finite-fields-have-prime-power-order, thm-existence-of-finite-fields, prop-finite-fields-are-splitting-fields-of-x-q-minus-x, thm-subfield-lattice-of-a-finite-field, thm-simple-algebraic-extension-quotient-power-basis-and-degree, lem-polynomial-factorisation-into-irreducibles, thm-repeated-root-derivative-criterion, lem-adjoining-one-root-reduces-the-unsplit-degree, thm-evaluation-kernel-and-minimal-polynomial]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "K. Conrad, Finite Fields, Appendix A"
      url: "https://kconrad.math.uconn.edu/blurbs/galoistheory/finitefields.pdf"
pipeline_run: null
---

## Statement

Let $\mathbb F_q$ be a finite field and let $n\ge1$. In $\mathbb F_q[t]$,

$$t^{q^n}-t=\prod_{\substack{P\text{ monic irreducible}\ \deg P\mid n}}P(t),$$

where each monic irreducible occurs once.

## Facts & Assumptions

**Given:** A finite field $\mathbb F_q$ and a positive integer $n$.

[L1] The order of a finite field is a prime power; write $q=p^r$ with $r\ge1$ ([[thm-finite-fields-have-prime-power-order]]).

[L2] For every prime $p$ and positive integer $s$, a field of order $p^s$ exists ([[thm-existence-of-finite-fields]]).

[L3] A field of order $Q$ is the full root set and a splitting field of $t^Q-t$ ([[prop-finite-fields-are-splitting-fields-of-x-q-minus-x]]).

[L4] The subfields of a field of order $p^s$ have orders $p^u$ with $u\mid s$ ([[thm-subfield-lattice-of-a-finite-field]]).

[L5] If an algebraic element has minimal polynomial of degree $d$, its simple extension has degree $d$ and the corresponding power basis ([[thm-simple-algebraic-extension-quotient-power-basis-and-degree]]).

[L6] Every nonzero nonunit polynomial over a field factors into irreducibles ([[lem-polynomial-factorisation-into-irreducibles]]).

[L7] A root is repeated exactly when the formal derivative also vanishes there ([[thm-repeated-root-derivative-criterion]]).

[L8] A polynomial of degree at least one over a field has a root in some field extension ([[lem-adjoining-one-root-reduces-the-unsplit-degree]]).

[L9] For an algebraic element $\alpha$ there is a unique monic irreducible $m_\alpha$ with $m_\alpha(\alpha)=0$, and for every $f$ one has $f(\alpha)=0$ exactly when $m_\alpha\mid f$ ([[thm-evaluation-kernel-and-minimal-polynomial]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], write $q=p^r$. Use [L2] to choose a field $E$ of order $p^{rn}=q^n$. By [L3], $E$ is the full root set and a splitting field of $t^{q^n}-t$. [given, L1, L2, L3, choose]

1.2 Let $P$ be monic irreducible of degree $d\ge1$. By [L8] it has a root $\alpha$ in some extension of $\mathbb F_q$; since $P$ is monic irreducible and annihilates $\alpha$, the uniqueness in [L9] makes $P$ the minimal polynomial of $\alpha$. By [L5], $\mathbb F_q(\alpha)$ has degree $d$ over $\mathbb F_q$ and hence has $q^d=p^{rd}$ elements. [given, L1, L5, L8, L9]

2.1 The derivative of $t^{q^n}-t$ is $-1$, which vanishes nowhere. Every irreducible factor of $t^{q^n}-t$ has a root in the splitting field $E$ of step 1.1, and a repeated factor would make that root repeated; so [L7] shows that no irreducible factor repeats. [step 1.1, given, L7, algebra]

2.2 If $d\mid n$, write $n=ed$. Applied to the field $\mathbb F_q(\alpha)$, [L3] gives $\alpha^{q^d}=\alpha$; iterating this identity $e$ times gives $\alpha^{q^n}=\alpha$. So $t^{q^n}-t$ vanishes at $\alpha$, and since $P$ is its minimal polynomial by step 1.2, [L9] gives $P\mid t^{q^n}-t$. [step 1.2, L3, L9, algebra]

2.3 Conversely, if $P$ divides $t^{q^n}-t$, choose its root $\alpha$ in the splitting field $E$ from step 1.1. Then $\mathbb F_q(\alpha)$ is a subfield of $E$ with order $p^{rd}$, so [L4] gives $rd\mid rn$, and cancellation yields $d\mid n$. [step 1.1, step 1.2, L4, choose]

3.1 Factor the polynomial by [L6]. Steps 2.2 and 2.3 identify exactly the monic irreducible factors, and step 2.1 gives multiplicity one. Since both sides are monic, their unit factors agree, proving the formula. [step 2.2, step 2.3, step 2.1, L6] ∎
