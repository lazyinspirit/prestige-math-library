---
id: thm-height-growth-under-morphism-of-projective-line
kind: theorem
title: Height growth h(f(P))=d h(P)+O(1)
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 5
deps:
  - def-canonical-height-of-a-morphism-on-projective-line
  - def-axiom-of-choice
  - def-archimedean-embeddings-and-number-field-signature
  - def-prime-above-and-residue-degree
  - def-ramification-index
  - thm-algebraic-embedding-extension
  - thm-fundamental-identity-for-primes-in-number-fields
  - thm-field-norm-and-trace-by-embeddings
  - thm-number-field-places-classification
  - thm-product-formula-for-number-fields
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Gregory S. Call and Joseph H. Silverman, Canonical heights on varieties with morphisms, §1, printed pp. 166–170"
      url: "https://www.numdam.org/item/CM_1993__89_2_163_0.pdf"
    - title: "Joseph H. Silverman, Lecture Notes on Arithmetic Dynamics, Arizona Winter School 2010, §4.1, Theorem 12(a), printed pp. 9–10"
      url: "https://swc-math.github.io/aws/2010/2010SilvermanNotes.pdf"
---

## Statement

Assume the Axiom of Choice. Let $K$ be a number field, let $d\ge2$, and let $\phi:\mathbb P^1\to\mathbb P^1$ be given by two homogeneous degree-$d$ forms over $K$ with no common projective zero. Let $h$ be the absolute logarithmic projective height with the number-field product-formula normalization. There is a constant $C_\phi\ge0$, independent of the algebraic point $P$, such that
$$|h(\phi(P))-d h(P)|\le C_\phi$$
for every $P\in\mathbb P^1(\overline K)$.

## Statement references

[[def-canonical-height-of-a-morphism-on-projective-line|Map and absolute-height conventions]]

[Call and Silverman, §1, printed pp. 166–170](https://www.numdam.org/item/CM_1993__89_2_163_0.pdf)

[Silverman, §4.1, Theorem 12(a), printed pp. 9–10](https://swc-math.github.io/aws/2010/2010SilvermanNotes.pdf)

## Facts & Assumptions

**Given:** The Axiom of Choice; a number field $K$; degree-$d$ homogeneous forms $F_0,F_1$ with no common projective zero; and an algebraic point $P=[x:y]$.

[A1] Choice is assumed by the absolute height and number-field-place inputs used here. [[def-axiom-of-choice]] [[def-canonical-height-of-a-morphism-on-projective-line]]

[F1] For a point over a finite extension $E/K$, its absolute logarithmic height is $[E:\mathbb Q]^{-1}$ times the sum of the local logarithms of the maximum of its homogeneous coordinates, with the complex absolute value squared. [[def-canonical-height-of-a-morphism-on-projective-line]] [[thm-number-field-places-classification]]

[F2] If $\mathfrak P\mid\mathfrak p$ in a finite extension of number fields, then $\operatorname{ord}_{\mathfrak P}(a)=e(\mathfrak P/\mathfrak p)\operatorname{ord}_{\mathfrak p}(a)$ for base-field elements $a$, and $N\mathfrak P=(N\mathfrak p)^{f(\mathfrak P/\mathfrak p)}$. Hence the normalized finite-place absolute value at $\mathfrak P$ is the value at $\mathfrak p$ raised to $e f$; the sum of these $e f$ over $\mathfrak P|\mathfrak p$ is the extension degree. [[thm-number-field-places-classification]] [[def-prime-above-and-residue-degree]] [[def-ramification-index]] [[thm-fundamental-identity-for-primes-in-number-fields]]

[F3] Archimedean places are real embeddings or conjugate pairs of complex embeddings, and the extensions of embeddings to a finite extension, counted with conjugates separately, have total number equal to the extension degree. [[def-archimedean-embeddings-and-number-field-signature]] [[thm-algebraic-embedding-extension]] [[thm-field-norm-and-trace-by-embeddings]]

[F4] For each nonzero element of a number field, only finitely many finite-place factors differ from $1$. [[thm-product-formula-for-number-fields]]

## Proof

1.1 Put $f_i(T)=F_i(1,T)$. These polynomials have no common root in $\overline K$, since such a root would give a common projective zero $[1:t]$. Hence their gcd in $K[T]$ is $1$: any nonconstant common divisor has a root in $\overline K$. The Euclidean algorithm gives $u_0f_0+u_1f_1=1$. Choose $N\ge d+\max(\deg u_0,\deg u_1)$ and homogenize to obtain homogeneous forms $U_0,U_1$ of degree $N-d$ with $U_0F_0+U_1F_1=X^N$. [given, A1, algebra, choose]

2.1 Put $g_i(T)=F_i(T,1)$. The same argument in the chart $[t:1]$ gives homogeneous forms $V_0,V_1$ with $V_0F_0+V_1F_1=Y^M$ for some $M\ge d$. Choose $N'\ge N,M$ and multiply the identities by $X^{N'-N}$ and $Y^{N'-M}$, respectively. The resulting identities for $X^{N'}$ and $Y^{N'}$ have coefficient forms of degree $N'-d$. [given, step 1.1, algebra, choose]

3.1 Fix a place $v$ of $K$ and a nonzero pair $z=(x,y)$ in its completion. Write $\|z\|_v=\max(|x|_v,|y|_v)$ and $M_v(z)=\max(|F_0(x,y)|_v,|F_1(x,y)|_v)$. The coefficients of $F_0,F_1$ bound $M_v(z)$ above by $A_v\|z\|_v^d$. Choose the identity from step 2.1 whose left side is the coordinate of norm $\|z\|_v$; its coefficient forms have degree $N'-d$, so their local norms are bounded by a constant times $\|z\|_v^{N'-d}$. The triangle inequality then gives $\|z\|_v^{N'}\le B_vM_v(z)\|z\|_v^{N'-d}$ for some finite $B_v\ge1$. Dividing by the positive norm factor yields $B_v^{-1}\|z\|_v^d\le M_v(z)\le A_v\|z\|_v^d$. [given, F1, step 2.1, algebra]

4.1 The coefficients of the two forms and the four coefficient forms in step 2.1 lie in $K$; by [F4], only finitely many finite places have any nonintegral coefficient. At every other finite place, the ultrametric inequality gives both estimates in step 3.1 with $A_v=B_v=1$. Set $C_v=\max(1,A_v,B_v)$ at all places. Then $|\log M_v(z)-d\log\|z\|_v|\le\log C_v$, and $C_v=1$ outside a finite set of finite places. [given, F4, step 2.1, step 3.1, algebra]

5.1 Let $E/K$ be a finite extension containing the coordinates of $P$. At a finite place $\mathfrak P$ over $\mathfrak p$, [F2] scales every base-field coefficient absolute value by $e(\mathfrak P/\mathfrak p)f(\mathfrak P/\mathfrak p)$; summing these exponents over $\mathfrak P\mid\mathfrak p$ gives $[E:K]$. Above a real archimedean place, real extensions have weight $1$ and each complex place has weight $2$, counted by its two conjugate embeddings; above a complex place, each extension of its chosen embedding has weight $1$. By [F3], the total relative weight above each archimedean place is $[E:K]$. Thus the local error bounds from step 4.1 sum to $[E:K]\log C_v$ above each $v$. [given, F2, F3, step 4.1]

6.1 The height formula [F1], applied to $P$ and $\phi(P)$ over $E$, gives $|h(\phi(P))-d h(P)|\le [E:\mathbb Q]^{-1}\sum_{v\in M_K}[E:K]\log C_v=[K:\mathbb Q]^{-1}\sum_{v\in M_K}\log C_v$. This is finite by step 4.1 and independent of $E$ and $P$; taking it as $C_\phi$ proves the claim. [given, F1, step 3.1, step 4.1, step 5.1, algebra] ∎
