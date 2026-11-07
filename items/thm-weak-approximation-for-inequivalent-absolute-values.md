---
id: thm-weak-approximation-for-inequivalent-absolute-values
kind: theorem
title: "Weak approximation for finitely many inequivalent absolute values"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-equivalent-field-absolute-values
  - def-multiplicative-absolute-value-on-a-field
  - thm-equivalent-field-absolute-values-characterisation
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, Algebraic Number Theory, version 3.08, Chapter VII, Lemmas 7.18–7.19 and Theorem 7.20"
      url: "https://www.jmilne.org/math/CourseNotes/ANT.pdf"
verification: {}
---

## Statement

Let $K$ be a field and let $|\cdot|_1,\ldots,|\cdot|_n$ be finitely many
pairwise inequivalent nontrivial absolute values on $K$, where $n\ge1$. For
arbitrary targets $c_i\in K$ and errors $\epsilon_i>0$, there exists $c\in K$
such that $|c-c_i|_i<\epsilon_i$ for every $1\le i\le n$. The proof uses only
finite constructions and no choice principle.

## Statement references

[[def-multiplicative-absolute-value-on-a-field]]

[[def-equivalent-field-absolute-values]]

## Facts & Assumptions

**Given:** A field $K$, a positive integer $n$, pairwise inequivalent
nontrivial absolute values $|\cdot|_1,\ldots,|\cdot|_n$, targets
$c_1,\ldots,c_n\in K$, and positive errors $\epsilon_1,\ldots,\epsilon_n$.

[F1] An absolute value on $K$ is multiplicative, vanishes exactly at zero,
and satisfies the triangle inequality. ([[def-multiplicative-absolute-value-on-a-field]])

[F2] Two nontrivial absolute values are equivalent exactly when one is a
positive real power of the other. ([[def-equivalent-field-absolute-values]])

[F3] Two nontrivial absolute values induce the same topology exactly when
they are equivalent. ([[thm-equivalent-field-absolute-values-characterisation]])

## Proof



**Given:** The data and hypotheses above.

1.1 Two inequivalent absolute values admit elements $b,d\in K^\times$ with $|b|_1<1\le|b|_2$ and $|d|_1>1>|d|_2$. To prove this, if the open unit balls for the two absolute values agreed, choose $u\ne0$ with $|u|_1<1$; such a $u$ exists by nontriviality, using the inverse of an element of value greater than one when needed. Then $|u|_2<1$. Given any $\eta>0$, choose $m$ with $|u|_1^m<\eta$. If $|x|_2<|u|_2^m$, then $|xu^{-m}|_2<1$, hence $|xu^{-m}|_1<1$ by equality of the unit balls, so $|x|_1<\eta$. The same argument with the indices reversed proves the two absolute-value topologies agree, contradicting inequivalence. Thus, after interchanging indices if needed, choose $b$ in the first unit ball but not the second. If $|b|_2>1$, take $d=b^{-1}$. If $|b|_2=1$, choose $y\ne0$ with $|y|_2<1$. Since $|b|_1<1$, choose $m$ large enough that $|y|_1|b|_1^{-m}>1$ and take $d=yb^{-m}$. Then $|d|_1>1$ and $|d|_2=|y|_2<1$. Therefore $z=d/b$ satisfies $|z|_1>1>|z|_2$. [F1, F2, F3, given, choose, algebra]

2.1 By induction on $n$, for every finite pairwise inequivalent list there is $z\in K^\times$ with $|z|_1>1$ and $|z|_j<1$ for $j=2,\ldots,n$. The case $n=2$ is step 1.1. For $n>2$, apply the induction hypothesis to obtain $b$ with $|b|_1>1$ and $|b|_j<1$ for $2\le j<n$, and apply step 1.1 to $|\cdot|_1,|\cdot|_n$ to obtain $d$ with $|d|_1>1>|d|_n$. If $|b|_n<1$, take $z=b$. If $|b|_n=1$, take $z=db^m$ for sufficiently large $m$; at places $2,\ldots,n-1$ the factors $|b|_j^m$ tend to zero, while the values at places $1,n$ remain respectively greater than one and less than one. If $|b|_n>1$, take $z=db^m/(1+b^m)$. The denominator is nonzero since $|b|_1>1$, and $|b|_1^m/|1+b^m|_1\to1$ and $|b|_n^m/|1+b^m|_n\to1$ by the reverse triangle inequality; hence $|z|_1>1$ and $|z|_n<1$ for large $m$. At every intermediate place $j$, $|b|_j<1$, so $|z|_j\to0$. The finite number of intermediate constraints permits one sufficiently large $m$. [F1, step 1.1, given, construct, algebra]

3.1 Assume first $n\ge2$. For each index $i$, apply step 2.1 to obtain $z_i\in K^\times$ with $|z_i|_i>1$ and $|z_i|_j<1$ for $j\ne i$. For positive integers $r$, put $b_i(r)=z_i^r/(1+z_i^r)$; the denominator is nonzero because $|z_i|_i>1$. At place $i$, the reverse triangle inequality gives $|b_i(r)-1|_i=1/|1+z_i^r|_i\to0$. At each $j\ne i$, $|b_i(r)|_j\le |z_i|_j^r/(1-|z_i|_j^r)\to0$. Since there are only finitely many constraints, choose $r_i$ so that $|c_i|_i|b_i(r_i)-1|_i<\epsilon_i/n$ and $|c_i|_j|b_i(r_i)|_j<\epsilon_j/n$ for every $j\ne i$; when a coefficient is zero its inequality is automatic. [F1, step 2.1, given, choose, algebra]

4.1 Set $c=\sum_{i=1}^n c_i b_i(r_i)$. For each $j$, $|c-c_j|_j\le |c_j|_j|b_j(r_j)-1|_j+\sum_{i\ne j}|c_i|_j|b_i(r_i)|_j<\epsilon_j,$ because the right side is a sum of $n$ terms each smaller than $\epsilon_j/n$ by step 3.1. This proves all inequalities simultaneously. For $n=1$, take $c=c_1$. The construction used only a finite induction, finite sums, and finitely many positive-integer bounds; it invokes no choice principle. [F1, step 3.1, given, algebra] ∎

