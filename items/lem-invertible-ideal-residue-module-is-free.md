---
id: lem-invertible-ideal-residue-module-is-free
kind: lemma
title: "An invertible ideal modulo a finite ideal is free of rank one"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-number-field
  - def-ring-of-integers-of-a-number-field
  - def-fractional-ideal
  - def-invertible-fractional-ideal
  - def-absolute-norm-of-an-ideal
  - thm-number-field-integral-ideal-factorisation-in-zf
  - thm-ideal-norm-is-multiplicative
  - thm-chinese-remainder-theorem-for-comaximal-ideals
  - lem-nonzero-number-field-ideal-has-finite-quotient
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, Algebraic Number Theory, Chapter 3"
      url: "https://www.jmilne.org/math/CourseNotes/ANT.pdf"
      locator: "Dedekind ideal factorisation and local rank-one behavior of nonzero ideals; the finite quotient argument below is given explicitly."

---

## Statement

Let $K$ be a number field, let $R=\mathcal O_K$, let $\mathfrak a$ be an invertible nonzero fractional ideal of $R$, and let $0\ne\mathfrak m\subseteq R$ be an integral ideal. Then the $R/\mathfrak m$-module $\mathfrak a/\mathfrak m\mathfrak a$ is free of rank one; equivalently, it is isomorphic to $R/\mathfrak m$ as an $R/\mathfrak m$-module. For $\mathfrak m=R$ both modules are zero.

## Statement references

[[def-number-field]]

[[def-ring-of-integers-of-a-number-field]]

[[def-fractional-ideal]]

[[def-invertible-fractional-ideal]]

[[thm-number-field-integral-ideal-factorisation-in-zf]]

[[thm-chinese-remainder-theorem-for-comaximal-ideals]]

## Facts & Assumptions

**Given:** A number field $K$, its ring of integers $R$, an invertible nonzero fractional ideal $\mathfrak a$, and a nonzero integral ideal $\mathfrak m$.

[F1] Every nonzero integral ideal factors uniquely as a finite product of nonzero prime ideals, and nonzero integral ideals have finite quotient rings. [[thm-number-field-integral-ideal-factorisation-in-zf]] [[lem-nonzero-number-field-ideal-has-finite-quotient]]

[F2] The ideal norm is the cardinality of the quotient, is multiplicative, and $N\mathfrak p>1$ for every nonzero prime ideal $\mathfrak p$. [[def-absolute-norm-of-an-ideal]] [[thm-ideal-norm-is-multiplicative]] [[lem-nonzero-number-field-ideal-has-finite-quotient]]

[F3] Pairwise comaximal ideals satisfy the Chinese remainder theorem, including the equality of their intersection and product. [[thm-chinese-remainder-theorem-for-comaximal-ideals]]

[F4] Invertibility means that $\mathfrak a$ has a fractional inverse $\mathfrak a^{-1}$ with $\mathfrak a\mathfrak a^{-1}=R$. [[def-invertible-fractional-ideal]]

[F5] A fractional ideal admits a nonzero denominator $d\in R$ such that $d\mathfrak a\subseteq R$. [[def-fractional-ideal]]

## Proof

**Given:** The data in the Statement.

1.1 If $\mathfrak m=R$, then $\mathfrak m\mathfrak a=\mathfrak a$, so both quotients are zero and the asserted isomorphism holds. Otherwise factor $\mathfrak m=\prod_{i=1}^r\mathfrak p_i^{e_i}$ with distinct nonzero prime ideals and $e_i\ge1$, using [F1]. [F1, given, cases]

1.2 Choose $0\ne d\in R$ with $\mathfrak b=d\mathfrak a\subseteq R$, as allowed by [F5]. Multiplication by $d$ gives an $R$-module isomorphism $\mathfrak a/\mathfrak m\mathfrak a\to\mathfrak b/\mathfrak m\mathfrak b$, so it suffices to prove the claim for the nonzero integral ideal $\mathfrak b$. [F5, given, algebra]

2.1 Fix $i$. Since $N(\mathfrak p_i\mathfrak b)=N\mathfrak p_iN\mathfrak b>N\mathfrak b$, [F2] gives $\mathfrak p_i\mathfrak b\subsetneq\mathfrak b$. Choose $x_i\in\mathfrak b\setminus\mathfrak p_i\mathfrak b$ and define $\mathfrak c_i=(x_i)\mathfrak b^{-1}$. Because $(x_i)\subseteq\mathfrak b$ and [F4] holds, $\mathfrak c_i\subseteq R$ is an integral ideal. The quotient $R/\mathfrak p_i$ is a finite integral domain by [F1]; multiplication by any nonzero element of this finite ring is injective and hence surjective, so it is a field and $\mathfrak p_i$ is maximal. If $\mathfrak c_i\subseteq\mathfrak p_i$, multiplying by $\mathfrak b$ would give $(x_i)\subseteq\mathfrak p_i\mathfrak b$, contrary to the choice of $x_i$. Maximality therefore gives $\mathfrak c_i+\mathfrak p_i=R$. [F1, F2, F4, step 1.2, given, choose, algebra]

3.1 The map $R/\mathfrak p_i^{e_i}\to\mathfrak b/\mathfrak p_i^{e_i}\mathfrak b$ given by $r\mapsto rx_i$ is well defined. If $rx_i\in\mathfrak p_i^{e_i}\mathfrak b$, then $(r)\mathfrak c_i\subseteq\mathfrak p_i^{e_i}$ after multiplying the containment $(rx_i)\subseteq\mathfrak p_i^{e_i}\mathfrak b$ by $\mathfrak b^{-1}$ and using $(x_i)=\mathfrak b\mathfrak c_i$. Factorisation [F1] and $\mathfrak c_i+\mathfrak p_i=R$ imply $\mathfrak c_i+\mathfrak p_i^{e_i}=R$; write $u+v=1$ with $u\in\mathfrak c_i$ and $v\in\mathfrak p_i^{e_i}$. Then $r=ru+rv\in\mathfrak p_i^{e_i}$. Conversely every $r\in\mathfrak p_i^{e_i}$ has $rx_i\in\mathfrak p_i^{e_i}\mathfrak b$. The map is injective. [F1, step 2.1, algebra]

4.1 The source in step 3.1 has cardinality $N(\mathfrak p_i^{e_i})$. The exact sequence $0\to\mathfrak b/\mathfrak p_i^{e_i}\mathfrak b\to R/\mathfrak p_i^{e_i}\mathfrak b\to R/\mathfrak b\to0$ and [F2] give $|\mathfrak b/\mathfrak p_i^{e_i}\mathfrak b|=N(\mathfrak p_i^{e_i}\mathfrak b)/N\mathfrak b=N(\mathfrak p_i^{e_i})$. The finite injective map in step 3.1 is therefore surjective and an isomorphism. [F2, step 3.1, algebra]

5.1 Put $I_i=\mathfrak p_i^{e_i}$. The modules $I_i\mathfrak b$ are pairwise comaximal inside $\mathfrak b$, since $I_i+I_j=R$ implies $I_i\mathfrak b+I_j\mathfrak b=\mathfrak b$. For two such ideals, if $x\in I_i\mathfrak b\cap I_j\mathfrak b$ and $u+v=1$ with $u\in I_i$, $v\in I_j$, then $x=ux+vx\in I_iI_j\mathfrak b$. Also $I_i+\prod_{j\ne i}I_j=R$: multiply identities $u_j+v_j=1$ with $u_j\in I_i$, $v_j\in I_j$ to see that $1-\prod_{j\ne i}v_j\in I_i$. Induction using the two-ideal calculation gives $\bigcap_i I_i\mathfrak b=(\prod_iI_i)\mathfrak b=\mathfrak m\mathfrak b$. The idempotents supplied by the ring Chinese remainder theorem [F3] therefore show that the natural map $\mathfrak b/\mathfrak m\mathfrak b\to\prod_i\mathfrak b/I_i\mathfrak b$ is an isomorphism: for surjectivity, lift a tuple and multiply its lifts by the corresponding idempotents; its kernel is the displayed intersection. [F3, step 1.1, step 4.1, algebra]

5.2 By step 4.1, each factor $\mathfrak b/I_i\mathfrak b$ is isomorphic to $R/I_i$. Applying the ring Chinese remainder isomorphism [F3] gives
$$\mathfrak b/\mathfrak m\mathfrak b\cong\prod_i R/I_i\cong R/\mathfrak m.$$
Together with step 1.2, this proves the claim for $\mathfrak a$. [F3, step 1.2, step 4.1, step 5.1, algebra] ∎
