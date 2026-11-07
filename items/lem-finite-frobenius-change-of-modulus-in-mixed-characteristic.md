---
id: lem-finite-frobenius-change-of-modulus-in-mixed-characteristic
kind: lemma
title: Finite Frobenius change of modulus in mixed characteristic
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - thm-binomial-theorem-over-a-commutative-ring
  - thm-binomial-closed-formula
  - thm-euclids-lemma
  - def-multiplicative-absolute-value-on-a-field
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Bhatt, Morrow, and Scholze, Integral p-adic Hodge Theory"
      url: "https://arxiv.org/pdf/1602.03148v3.pdf"
      locator: "Section3.1, Lemma3.9, finite lifting argument; explicit mixed-characteristic finite-modulus specialization"
verification: {}
---

## Statement

Let $p$ be prime, let $R$ be a commutative unital ring, and let $\pi,t\in R$ and an integer $N\ge1$ satisfy
$$p\in\pi R,\qquad \pi\in t^pR,\qquad t^{pN}\in pR.$$
Then Frobenius on $R/\pi R$ is surjective if and only if Frobenius on $R/pR$ is surjective. Both quotients have characteristic dividing $p$; the zero ring is allowed. No completeness, torsion-freeness or Choice axiom is needed.

In particular, let $K$ be a characteristic-zero field with a nontrivial real-valued nonarchimedean absolute value, with $|p|<1$ and nondiscrete value group. Let $0<|\varpi|<1$ with $p\in\varpi K^\circ$, and let $S$ be any commutative unital $K^\circ$-algebra. Frobenius on $S/\varpi S$ is surjective if and only if Frobenius on $S/pS$ is surjective. This conclusion requires neither completeness of $K$ or $S$ nor a perfectoid assumption on $K$.

## Facts & Assumptions

**Given:** The prime, ring, elements and finite integer in the first assertion; for the second assertion, the valued field and algebra with exactly the displayed hypotheses.

[F1] The binomial theorem holds over a commutative ring. The integral binomial-coefficient formula and Euclid's lemma show $p\mid\binom pj$ for $0<j<p$. [[thm-binomial-theorem-over-a-commutative-ring]] [[thm-binomial-closed-formula]] [[thm-euclids-lemma]]

[F2] A nonarchimedean multiplicative absolute value satisfies $|xy|=|x||y|$ and $|x+y|\le\max(|x|,|y|)$. Its valuation ring is $K^\circ=\{a:|a|\le1\}$. [[def-multiplicative-absolute-value-on-a-field]]

## Proof

1.1 The inclusion $pR\subseteq\pi R$ makes both displayed quotients characteristic-$p$ rings, allowing the zero quotient. In either quotient, [F1] gives $(a+b)^p=a^p+b^p$, so Frobenius is a ring homomorphism. If it is surjective on $R/pR$, then for any $a\in R$ there is $b\in R$ with $a-b^p\in pR\subseteq\pi R$. This proves surjectivity on $R/\pi R$. [F1, given, algebra]

2.1 Conversely suppose Frobenius on $R/\pi R$ is surjective. Since $\pi R\subseteq t^pR$, for every $a\in R$ there exist $b,c\in R$ with $a=b^p+t^pc$. Fix any one $a=a_0$. Finite induction supplies $b_0,\ldots,b_{N-1}$ and $a_1,\ldots,a_N$ such that $a_j=b_j^p+t^pa_{j+1}$ for $0\le j<N$. At each induction step only one nonempty set of pairs is instantiated; a finite list is produced, not a countable choice function. Substitution gives $a=\sum_{j<N}t^{pj}b_j^p+t^{pN}a_N$. Reducing modulo $p$ and using [F1] and $t^{pN}\in pR$ yields $a\equiv(\sum_{j<N}t^jb_j)^p\bmod pR$. Thus Frobenius modulo $p$ is surjective. The argument works for $N=1$, for zero elements and for rings with $p$-torsion. [F1, step 1.1, given, construct, algebra]

3.1 For the valued-field assertion, set $v(a)=-\log|a|$ for $a\ne0$. The additive subgroup $v(K^\times)\subseteq\mathbb R$ has arbitrarily small positive elements: otherwise its positive elements would have a positive infimum $d$; choosing an element below $2d$ shows, by subtracting any smaller positive element, that this is a least positive element, and integer division then makes the subgroup discrete, contrary to the hypothesis. Choose one $t\in K^\circ$ with $0<v(t)<v(\varpi)/p$. Then $v(\varpi/t^p)>0$, so $\varpi\in t^pK^\circ$. Choose one integer $N\ge1$ with $pNv(t)\ge v(p)$; then $t^{pN}\in pK^\circ$. These are two individual finite choices. The assumed relation $p\in\varpi K^\circ$ and the two new relations pass to the algebra $S$, which therefore satisfies all hypotheses of steps 1.1–2.1 with $R=S$ and $\pi=\varpi$. Applying those steps proves the asserted equivalence at the exact unqualified scope. [F2, step 1.1, step 2.1, given, construct, algebra] ∎

## Source notes

This is the finite mixed-characteristic block of the Frobenius change-of-modulus mechanism used in BMS §3.1. The explicit integer $N$ makes the finite nature of the lifting transparent. No infinite iteration from BMS Lemma3.9, countable section of a quotient map, or completion theorem is used. The existing local lemma covering both characteristics assumes Dependent Choice; that original Statement and proof are left untouched.

The result does not supply the characteristic-$p$ limiting step, inverse-limit completeness of a sequentially complete normed ring, compatible infinite Frobenius preimages, or surjectivity of the Fontaine map. Those remain separate obligations in the original unqualified BMS perfectoid comparison.
