---
id: def-nondegenerate-star-representation-of-a-banach-star-algebra
kind: definition
title: Nondegenerate star-representations of a Banach star-algebra
deps:
  - def-countable-choice
  - def-banach-star-algebra-without-required-unit
  - def-c-star-algebra
  - def-hilbert-space
  - def-bounded-linear-operator
  - lem-bounded-hilbert-operators-form-a-c-star-algebra
  - def-linear-combination-and-span
  - def-orthogonality-and-orthogonal-complement
  - thm-orthogonal-decomposition-by-a-closed-subspace
dependency_level: 0
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_audit: "No choice principle is used in the definitional identities. The Hilbert adjoint entering σ(a*) = σ(a)* is the adjoint interface of [[lem-bounded-hilbert-operators-form-a-c-star-algebra]], which is established under Countable Choice; consumers of this definition that need adjoints inherit that assumption (on this page, AC is assumed throughout)."
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Bachir Bekka and Pierre de la Harpe, Unitary Representations of Groups, Duals, and Characters (arXiv:1912.07262v1, 16 December 2019)"
      url: "https://arxiv.org/pdf/1912.07262"
      locator: "Chapter 8, §8.B: the paragraphs before Definition 8.B.1 (π is a *-representation of L1(G)) and before Proposition 8.B.3 (nondegenerate *-representations)"
    - title: "Bachir Bekka, Pierre de la Harpe and Alain Valette, Kazhdan's Property (T) (Cambridge University Press 2008; author-hosted complete text)"
      url: "https://perso.univ-rennes1.fr/bachir.bekka/KazhdanTotal.pdf"
      locator: "Appendix F, §F.4: the paragraphs after Example F.4.1 (nondegenerate *-representations of L1(G))"
status: published
origin: pipeline
---
## Definition

Let $A$ be a complex Banach $\ast$-algebra without a required unit
([[def-banach-star-algebra-without-required-unit]]) and let $K$ be a complex
Hilbert space ([[def-hilbert-space]]). A **star-representation** of $A$ on
$K$ is a bounded complex-linear map $\sigma:A\to\mathcal B(K)$
([[def-bounded-linear-operator]],
[[lem-bounded-hilbert-operators-form-a-c-star-algebra]]) satisfying
$$\sigma(ab)=\sigma(a)\sigma(b),\qquad\sigma(a^*)=\sigma(a)^*\qquad(a,b\in A),$$
where the adjoint is the Hilbert adjoint on $\mathcal B(K)$. It is
**nondegenerate** if the closed linear span of
$\{\sigma(a)\xi:a\in A,\ \xi\in K\}$
([[def-linear-combination-and-span]]) is all of $K$. When $A$ is a C\*-algebra,
a bounded star-representation of $A$ is exactly a bounded star-homomorphism
$A\to\mathcal B(K)$ in the sense of [[def-c-star-algebra]].

## Remarks

- **Equivalence with the common-kernel condition.** Assume Countable Choice
  ([[def-countable-choice]]) for the Hilbert-space decomposition and adjoint
  suppliers in this paragraph. Nondegeneracy is
  equivalent to: every $\xi\in K$ with $\sigma(a)\xi=0$ for all $a\in A$
  satisfies $\xi=0$. Indeed, let $S$ be the closed linear span of
  $\{\sigma(a)\xi\}$. By [[thm-orthogonal-decomposition-by-a-closed-subspace]]
  one has $K=S\oplus S^\perp$, so $S=K$ exactly when $S^\perp=\{0\}$; and a
  vector $\eta$ lies in $S^\perp$ exactly when
  $\langle\sigma(a)\xi,\eta\rangle=0$ for all $a\in A$ and $\xi\in K$. Since
  $\langle\sigma(a)\xi,\eta\rangle=\langle\xi,\sigma(a)^*\eta\rangle
  =\langle\xi,\sigma(a^*)\eta\rangle$
  ([[def-orthogonality-and-orthogonal-complement]],
  [[lem-bounded-hilbert-operators-form-a-c-star-algebra]]), and since
  $\eta\perp K$ forces $\eta=0$, this holds exactly when
  $\sigma(a^*)\eta=0$ for all $a$, i.e. when $\sigma(a)\eta=0$ for all $a$.
- **Continuity is part of the definition.** A star-representation is required
  to be bounded; no automatic-continuity statement is asserted here. For
  $A=L^1(G)$ the contractive bound is proved, not assumed, by the recovery
  lemma used on this page.
