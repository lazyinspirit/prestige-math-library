---
id: lem-resolvent-identity
kind: lemma
title: Resolvent identity
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-spectrum-and-resolvent-set-in-a-banach-algebra, def-unital-banach-algebra, def-invertible-element-and-general-linear-group-of-a-banach-algebra]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Theo Bühler and Dietmar A. Salamon, Functional Analysis — Lemma 5.19, printed p. 221"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
    - title: "Vahid Shirbisheh, Lectures on C-star Algebras, v2 — Chapter 2 §2.3, printed pp. 30–33"
      url: "https://arxiv.org/pdf/1211.3404"
---

## Statement

Let $A$ be a unital complex Banach algebra and let $a,b \in A$. With the
resolvent $R(z,a) = (z1-a)^{-1}$ of
[[def-spectrum-and-resolvent-set-in-a-banach-algebra]]:

1. for all $z,w \in \rho_A(a)$,
   $$R(z,a) - R(w,a) = (w-z)\,R(z,a)\,R(w,a);$$
   in particular $R(z,a)$ and $R(w,a)$ commute;
2. for all $z \in \rho_A(a) \cap \rho_A(b)$,
   $$R(z,a) - R(z,b) = R(z,a)\,(a-b)\,R(z,b).$$

Both identities are equalities of two-sided products; no commutativity of $A$
is assumed, and the factor order shown is the one that is used later.

## Facts & Assumptions

**Given:** A unital complex Banach algebra $A$, elements $a,b \in A$, complex numbers $z,w$ with $z,w \in \rho_A(a)$ and $z \in \rho_A(b)$.

[L1] The norm is submultiplicative, $\|1\| = 1$, and multiplication is associative, bilinear, and satisfies $1u = u1 = u$ for all $u \in A$ ([[def-unital-banach-algebra]]).

[L2] For $z \in \rho_A(a)$ the resolvent $R(z,a)$ is the unique element of $A$ with $(z1-a)R(z,a) = R(z,a)(z1-a) = 1$, and similarly for $b$; if $u,v$ are invertible then $(uv)^{-1} = v^{-1}u^{-1}$ ([[def-spectrum-and-resolvent-set-in-a-banach-algebra]], [[def-invertible-element-and-general-linear-group-of-a-banach-algebra]]).

## Proof

**Proof technique:** direct.

1.1 Each resolvent is a two-sided inverse of its own argument: $R(z,a)(z1-a) = (z1-a)R(z,a) = 1$, $R(w,a)(w1-a) = (w1-a)R(w,a) = 1$ and $R(z,b)(z1-b) = (z1-b)R(z,b) = 1$ by [L2]; and the scalar identities $(z1-a) - (w1-a) = (z-w)1$ and $(z1-a) - (z1-b) = b - a$ are immediate. No commutativity between $a$ and $b$, and no commutativity between $R(z,a)$ and $R(z,b)$, is claimed or needed: the two computations below multiply each resolvent against its own argument only. [L1, L2, algebra]

2.1 Multiplying the identity $(z1-a) - (w1-a) = (z-w)1$ on the left by $R(z,a)$ and on the right by $R(w,a)$ yields $R(z,a)(z1-a)R(w,a) - R(z,a)(w1-a)R(w,a) = (z-w)R(z,a)R(w,a)$; the two terms on the left equal $R(w,a)$ and $R(z,a)$ respectively, so $R(w,a) - R(z,a) = (z-w)R(z,a)R(w,a)$, which is claim 1. [step 1.1, L2, algebra]

2.2 Multiplying the identity $(z1-a) - (z1-b) = b - a$ on the left by $R(z,a)$ and on the right by $R(z,b)$ yields $R(z,a)(z1-a)R(z,b) - R(z,a)(z1-b)R(z,b) = R(z,a)(b-a)R(z,b)$; the two terms on the left equal $R(z,b)$ and $R(z,a)$ respectively, so $R(z,b) - R(z,a) = R(z,a)(b-a)R(z,b)$, which is claim 2 in the stated form after moving the term and reversing the sign: $R(z,a) - R(z,b) = R(z,a)(a-b)R(z,b)$. [step 1.1, L2, algebra]

3.1 Claim 1 and claim 2 are exactly the two displayed identities of the statement, so the lemma is proved. [step 2.1, step 2.2] ∎
