---
id: cor-product-of-two-noetherian-rings-is-noetherian
kind: corollary
title: "A product of two Noetherian rings is Noetherian"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-noetherian-from-finitely-many-noetherian-quotients, def-product-ring, thm-first-isomorphism-theorem-rings]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., Exercise (16.18)"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, §2-§3"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
pipeline_run: null
---

## Statement

Let $R$ and $S$ be Noetherian commutative rings. Then the product ring
$R\times S$ ([[def-product-ring]]) is Noetherian.

## Facts & Assumptions

**Given:** Noetherian commutative rings $R$ and $S$, and their product ring $R\times S$ with componentwise operations.

[L1] The **product ring** $R\times S$ is the cartesian product of the underlying sets with the componentwise operations $(a,b)+(a',b')=(a+a',b+b')$ and $(a,b)(a',b')=(aa',bb')$, zero $(0_R,0_S)$ and identity $(1_R,1_S)$ ([[def-product-ring]]).

[L2] For a ring homomorphism $f\colon R\to S$ there is a ring isomorphism $R/\ker f\cong\operatorname{im}f$ ([[thm-first-isomorphism-theorem-rings]]).

[L3] If a commutative ring $T$ has ideals $\mathfrak a_1,\ldots,\mathfrak a_r$ with $r\ge1$ and zero intersection, and every quotient ring $T/\mathfrak a_i$ is Noetherian, then $T$ is Noetherian ([[cor-noetherian-from-finitely-many-noetherian-quotients]]).

## Proof

**Proof technique:** direct.

1.1 Put $\mathfrak a_1=\{0_R\}\times S$ and $\mathfrak a_2=R\times\{0_S\}$. Each is an additive subgroup of $R\times S$ closed under multiplication by an arbitrary element, since $(a,b)(0_R,t)=(0_R,bt)$ and $(a,b)(u,0_S)=(au,0_S)$, so each is an ideal; and $\mathfrak a_1\cap\mathfrak a_2=\{(0_R,0_S)\}=0$. The ring $R\times S$ is commutative because $R$ and $S$ are and the operations are componentwise. [L1, given, algebra]

2.1 The coordinate maps $p_1(a,b)=a$ and $p_2(a,b)=b$ are ring homomorphisms, since the operations are componentwise and $p_1(1_R,1_S)=1_R$, $p_2(1_R,1_S)=1_S$; they are surjective, with $\ker p_1=\mathfrak a_1$ and $\ker p_2=\mathfrak a_2$. The first isomorphism theorem therefore gives ring isomorphisms $(R\times S)/\mathfrak a_1\cong R$ and $(R\times S)/\mathfrak a_2\cong S$. [L1, L2, step 1.1, algebra]

3.1 A ring isomorphism carries ideals to ideals and finite generating lists to finite generating lists, so a ring isomorphic to a Noetherian ring is Noetherian; hence both quotients in step 2.1 are Noetherian. With the zero intersection of step 1.1 this is the hypothesis of the preceding corollary at $r=2$, and it gives that $R\times S$ is Noetherian. [L3, step 1.1, step 2.1, algebra] ∎

## Remarks

- **Every finite product of Noetherian rings is Noetherian**, by induction on the number of factors using $R_1\times\cdots\times R_{n+1}\cong(R_1\times\cdots\times R_n)\times R_{n+1}$; the base case of one factor is tautological. A product indexed by an infinite set is not defined by [[def-product-ring]], which introduces the product of two rings only, so no claim is made about one here.

- **The converse holds as well**, though it is not what is claimed above: step 2.1 exhibits each factor as isomorphic to a quotient of $R\times S$, and [[thm-noetherian-ring-quotients-and-localisations]] makes every quotient of a Noetherian ring Noetherian. So $R\times S$ is Noetherian exactly when both factors are.

- **When both factors are nonzero, the two coordinate ideals are incomparable**, and their intersection is zero while their sum is the unit ideal. If one factor is the zero ring, one coordinate ideal is the whole product and the other is zero, so they are comparable; the proof uses only their zero intersection and covers that degenerate case as well.
