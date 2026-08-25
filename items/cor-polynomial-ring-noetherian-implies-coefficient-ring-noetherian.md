---
id: cor-polynomial-ring-noetherian-implies-coefficient-ring-noetherian
kind: corollary
title: "$R[x]$ is Noetherian if and only if $R$ is Noetherian"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-hilbert-basis-theorem, thm-noetherian-ring-quotients-and-localisations, thm-universal-property-of-a-polynomial-ring, thm-first-isomorphism-theorem-rings, def-polynomial-evaluation-and-root]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., Exercise (16.8)"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, §3"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
pipeline_run: null
---

## Statement

Let $R$ be a commutative ring. Then $R[x]$ is Noetherian if and only if $R$ is
Noetherian.

## Facts & Assumptions

**Given:** A commutative ring $R$ and its polynomial ring $R[x]$.

[L1] If $R$ is a Noetherian commutative ring then $R[x]$ is a Noetherian commutative ring ([[thm-hilbert-basis-theorem]]).

[L2] For commutative rings $R,S$, a unital ring homomorphism $\varphi\colon R\to S$ and $s\in S$, there is a unique unital ring homomorphism $\operatorname{ev}_{\varphi,s}\colon R[x]\to S$ that extends $\varphi$ on constant polynomials and sends $x$ to $s$ ([[thm-universal-property-of-a-polynomial-ring]]).

[L3] For a unital ring homomorphism $\varphi\colon R\to S$ between commutative rings, $s\in S$ and $f=\sum_ia_ix^i\in R[x]$, the value of $f$ at $s$ along $\varphi$ is $f_\varphi(s)=\sum_i\varphi(a_i)s^i$ ([[def-polynomial-evaluation-and-root]]).

[L4] For a ring homomorphism $f\colon R\to S$ there is a ring isomorphism $R/\ker f\cong\operatorname{im}f$ ([[thm-first-isomorphism-theorem-rings]]).

[L5] Every quotient $R/I$ of a Noetherian commutative ring by an ideal is Noetherian ([[thm-noetherian-ring-quotients-and-localisations]]).

## Proof

**Proof technique:** direct.

1.1 For the direction from $R$ to $R[x]$, the Hilbert basis theorem applied to $R$ gives at once that $R[x]$ is Noetherian. [L1, given]

1.2 For the converse direction, take $\varphi$ to be the identity of $R$ and $s=0_R$ in the universal property: there is a unital ring homomorphism $\varepsilon\colon R[x]\to R$, evaluation at $0$, which is the identity on constant polynomials and sends $x$ to $0$. Being the identity on constants makes $\varepsilon$ surjective, so $\operatorname{im}\varepsilon=R$. [L2, L3, given]

2.1 Still for the converse direction, the first isomorphism theorem applied to $\varepsilon$ gives a ring isomorphism $R[x]/\ker\varepsilon\cong R$. [L4, step 1.2]

3.1 Still for the converse direction, assume $R[x]$ Noetherian. Its quotient $R[x]/\ker\varepsilon$ is then Noetherian, and a ring isomorphism carries ideals to ideals and finite generating lists to finite generating lists, so the isomorphic ring $R$ is Noetherian. [L5, step 2.1, algebra]

4.1 Step 1.1 is one implication and step 3.1 is the other, so $R[x]$ is Noetherian exactly when $R$ is. [step 1.1, step 3.1] ∎

## Remarks

- **Which half is the theorem.** The direction from $R$ to $R[x]$ is the Hilbert basis theorem and carries all the work; the converse is three citations, since $R$ is a quotient of $R[x]$ and quotients of Noetherian rings are Noetherian.

- **Evaluation at any element of $R$ would do.** The argument uses only that $\varepsilon$ is a surjective ring homomorphism $R[x]\to R$; evaluation at $0$ is chosen because it is the one whose kernel, the ideal of polynomials with zero constant term, is the easiest to name.
