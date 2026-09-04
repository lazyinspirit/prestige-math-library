---
id: cor-complete-separated-adic-pair-henselian
kind: corollary
title: "Complete separated adic pairs are Henselian"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-henselian-pair-and-henselian-local-ring, prop-units-in-an-adically-complete-ring, lem-coprime-factor-bezout-lift, lem-hensel-factor-lift-leading-coefficient-normalisation, lem-hensel-factor-correction-one-stage, lem-hensel-factor-corrections-form-cauchy-sequences, lem-hensel-factor-limit-multiplies-to-original, lem-hensel-factor-lift-uniqueness-induction]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Section 15.11: Henselian pairs"
      url: "https://stacks.math.columbia.edu/tag/09XD"
    - title: "Melvin Hochster, The structure theory of complete local rings"
      url: "https://sites.lsa.umich.edu/hochster/wp-content/uploads/sites/1337/2026/04/Structure.pdf"
pipeline_run: null
---

## Statement

Let $A$ be a commutative ring and let $I \subseteq A$ be an ideal. If $A$ is
$I$-adically complete and separated, then $(A,I)$ is a Henselian pair.

## Facts & Assumptions

**Given:** A commutative ring $A$ that is $I$-adically complete and separated.

[L1] In an $I$-adically complete ring, every element congruent to $1$ modulo $I$ is a unit ([[prop-units-in-an-adically-complete-ring]]).

[L2] Coprime residue factors admit a lifted Bezout identity modulo $I$ ([[lem-coprime-factor-bezout-lift]]).

[L3] One Hensel correction step improves a factorization from modulo $I^r$ to modulo $I^{r+1}$ ([[lem-hensel-factor-correction-one-stage]]).

[L4] The correction sequence is coefficientwise Cauchy and its coefficientwise limit multiplies back to the original polynomial ([[lem-hensel-factor-corrections-form-cauchy-sequences]], [[lem-hensel-factor-limit-multiplies-to-original]]).

[L5] Two such lifts agree modulo every power of $I$ ([[lem-hensel-factor-lift-uniqueness-induction]]).

[L6] A Henselian pair is exactly a pair satisfying the Jacobson-radical clause and the unique coprime factor-lifting clause ([[def-henselian-pair-and-henselian-local-ring]]).

## Proof

**Proof technique:** iterate the correction lemma and pass to the limit.

1.1 Let $x \in I$ and $r \in A$. Then $rx \in I$, so $1-rx \equiv 1 \pmod I$. By [L1], the element $1-rx$ is a unit. This is the Jacobson-radical criterion for $x$, so $x \in J(A)$. Hence $I \subseteq J(A)$. [L1, given, algebra]

1.2 Let $f \in A[T]$ be monic and let $\overline f=g_0h_0$ be a coprime monic factorization in $(A/I)[T]$. Choose monic lifts $g_1,h_1$ of $g_0,h_0$. By [L2], choose $a,b \in A[T]$ with $ag_1+bh_1 \equiv 1 \pmod I$. Repeatedly applying [L3] produces monic pairs $(g_r,h_r)$ with $$f-g_rh_r \in I^r[T]$$ for every $r \ge 1$. [L2, L3, given, choose, induction]

2.1 By [L4], the coefficient sequences of $(g_r)$ and $(h_r)$ are Cauchy and converge to monic polynomials $g,h \in A[T]$ with $f=gh$. Their reductions are still $g_0,h_0$. Thus the required lifted factorization exists. [L4, step 1.2]

3.1 If $f=g'h'$ is another monic lift of the same residue factorization, then [L5] gives $g \equiv g' \pmod{I^r[T]}$ and $h \equiv h' \pmod{I^r[T]}$ for every $r \ge 1$. Separatedness forces $g=g'$ and $h=h'$. Hence the lift is unique. [L5, step 2.1, given]

4.1 Steps 1.1-3.1 verify both clauses of the definition, so $(A,I)$ is a Henselian pair. [L6, step 1.1, step 2.1, step 3.1] ∎
