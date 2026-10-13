---
id: lem-laurent-binomial-valuation-at-one-over-any-field
kind: lemma
title: "Laurent binomial valuation at one over any field"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 0
deps: [def-discrete-valuation-ring, def-ring-characteristic,
       def-the-laurent-polynomial-ring]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Mathas, Positive Jantzen sum formulas for cyclotomic Hecke algebras, arXiv:2106.15486v2"
      url: "https://arxiv.org/pdf/2106.15486v2"
      locator: "Extracted text PDF pp. 14–15 §4.1/Lemma 4.1/Proposition 4.3 actually read; elementary DVR/weight principle, no Specht-to-Schur converse."
---

## Statement

Let $F$ be a field, let $F[t,t^{-1}]$ be its Laurent polynomial ring
([[def-the-laurent-polynomial-ring]]), and let $v_1$ be the $(t-1)$-adic
valuation on the nonzero elements of $F[t,t^{-1}]$: for $0\ne f$,
$$v_1(f):=\max\{n\ge0:(t-1)^n\mid f\ \text{in}\ F[t,t^{-1}]\},$$
so that $v_1(f)=0$ exactly when $f(1)\ne0$
([[def-discrete-valuation-ring]]). Let $A,B\in F\setminus\{0\}$, let $u,v\in\mathbb Z$,
put $N:=u-v$ and $f:=At^u-Bt^v$.

1. If $A\ne B$, then $v_1(f)=0$.
2. If $A=B$ and $N\ne0$, then $v_1(f)=1$ when $\operatorname{char}F=0$, and
   $v_1(f)=p^{v_p(|N|)}$ when $\operatorname{char}F=p>0$; here $v_p$ is the
   exponent of $p$ in $|N|$, i.e. $N=p^r m$ with $p\nmid m$
   ([[def-ring-characteristic]]).
3. If $A=B$ and $N=0$, then $f=0$, and the zero element has no finite valuation.

In the intended application the Laurent polynomials $Q_aq_H^{\,j-i}t^{\,na+j-i}$
(foot residues of the Jantzen expression) are compared by this lemma: it
computes their valuation exactly when their difference is nonzero and prevents
replacing valuations by an equality-of-residues indicator in positive
characteristic.

## Facts & Assumptions

**Given:** A field $F$, nonzero $A,B\in F$, integers $u,v$, the Laurent
polynomial $f=At^u-Bt^v$, and the $(t-1)$-adic valuation $v_1$ of the
Statement.

[F1] The finite Laurent construction over $F$ uses sums $\sum_k a_kt^k$ with finite support and the coefficientwise addition and convolution multiplication. It is the field-coefficient version of [[def-the-laurent-polynomial-ring]]; $t$ is a unit, and multiplying by a sufficiently large power of $t$ identifies any such sum with an ordinary polynomial.

[F2] A DVR is the ring of nonnegative values of a surjective integer-valued valuation on a field ([[def-discrete-valuation-ring]]). The multiplicity valuation used here is established locally in step 1.1.

[F3] The characteristic is the least positive integer annihilating $1_F$, or zero if no such integer exists ([[def-ring-characteristic]]). Its field consequences needed here are established in step 1.1.

## Proof

**Proof technique:** direct.

**Given:** The field $F$, the Laurent polynomial ring $F[t,t^{-1}]$ with unit $t$, the valuation $v_1$ of the Statement, and the data of [F1]–[F3].

1.1 Construct the valuation. For an ordinary nonzero polynomial $g$, repeated division by $t-1$ terminates as degree decreases, giving a unique factorization $g=(t-1)^a g_0$ with $g_0(1)\ne0$; division is explicit from $g(t)-g(1)=\sum_j a_j(t^j-1)$. For a Laurent polynomial multiply by $t^M$ first: since $t^M(1)=1$, the resulting multiplicity is independent of $M$. Multiplying two factorizations multiplies their nonzero evaluations, so multiplicities add; adding them gives multiplicity at least their minimum, unless the sum is zero. Consequently $v(g/h)=v(g)-v(h)$ is a well-defined valuation on $F(t)$, surjective since $v(t-1)=1$. Its nonnegative-value ring is $F[t]_{(t-1)}$: cancel the powers of $t-1$ in numerator and denominator, leaving a denominator nonzero at $1$. This proves the DVR assertion in the sense of [F2], the zero-evaluation criterion, and invariance under Laurent units. Finally, positive field characteristic is prime: a composite least annihilator $ab$ would give $(a1_F)(b1_F)=0$ with both factors nonzero. Division of an integer by that prime shows $m1_F\ne0$ if $p\nmid m$. [F1, F2, F3, algebra]

1.2 The case $A=B$, $N=0$. Then $f=At^u-Bt^v=At^u-At^u=0$ by [F1], the zero element of $F[t,t^{-1}]$; since $(t-1)^n\mid0$ for every $n$, the set in the definition of $v_1$ is unbounded and no finite value is assigned. [F1]

2.1 Reduction to $N$ and to $A/B$ for $f\ne0$. Since $Bt^v$ is a unit of $F[t,t^{-1}]$ with inverse $B^{-1}t^{-v}$ by [F1], the identity $At^u-Bt^v=Bt^v\bigl((A/B)t^N-1\bigr)$ and [F2] give $v_1(At^u-Bt^v)=v_1\bigl((A/B)t^N-1\bigr)$; moreover if $N<0$ then $t^{N}-1=-t^{N}(t^{-N}-1)$ with $-t^{N}$ a unit, so $v_1(t^{N}-1)=v_1(t^{|N|}-1)$ by [F1] and [F2]. [F1, F2, step 1.1]

3.1 The case $A\ne B$. Evaluating the Laurent polynomial $(A/B)t^N-1$ at $t=1$ gives $A/B-1\ne0$, so the factor $t-1$ cannot divide $(A/B)t^N-1$: a product containing $t-1$ would evaluate to $0$ under the ring homomorphism $f\mapsto f(1)$ with $1\mapsto1$. Hence $v_1((A/B)t^N-1)=0$ by [F2], and the reduction of step 2.1 gives $v_1(f)=0$. [F1, F2, step 1.1, step 2.1]

3.2 The case $A=B$, $\operatorname{char}F=0$, $N\ne0$. Here $f=A(t^u-t^v)=At^v(t^N-1)$ with $At^v$ a unit, so by step 2.1 the valuation equals $v_1(t^{|N|}-1)$, while $t^{|N|}-1=(t-1)(1+t+\cdots+t^{|N|-1})$ with second factor evaluating at $t=1$ to $|N|\cdot1_F\ne0$ by [F3] and therefore of valuation $0$ by [F2]; the valuation is additive on this factorisation of the nonzero polynomial $t^{|N|}-1$, so $v_1(f)=1$. [F1, F2, F3, step 1.1, step 2.1, algebra]

4.1 The case $A=B$, $\operatorname{char}F=p>0$, $N\ne0$. Write $|N|=p^rm$ with $r\ge0$ and $p\nmid m$. In characteristic $p$ the identity $(x-1)^{p^r}=x^{p^r}-1$ follows by iterating $(x-1)^p=x^p-1$ (the intermediate binomial coefficients $\binom{p}{i}$, $1\le i\le p-1$, are multiples of $p$); applying it to $x=t^m$ gives $t^{|N|}-1=(t^m-1)^{p^r}=(t-1)^{p^r}(1+t+\cdots+t^{m-1})^{p^r}$. The second factor evaluates at $t=1$ to $m^{p^r}\cdot1_F$, which is nonzero because $m\cdot1_F\ne0$ by [F3]; it thus has valuation $0$ by [F2], so $v_1(t^{|N|}-1)=p^r$, and step 2.1 gives $v_1(f)=p^r=p^{v_p(|N|)}$. [F1, F2, F3, step 1.1, step 2.1, algebra] ∎

## Remarks

The lemma is a leaf computation over an arbitrary field: it is used where a denominator $t-1$ is cleared or an integrality statement is checked at $t=1$, and it records explicitly that in characteristic $p$ the valuation is the full $p$-power $p^{v_p(|N|)}$, not merely the indicator of $p\mid N$. No choice principle is used.
