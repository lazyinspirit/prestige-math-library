---
id: lem-av7-integral-closure-elementary-etale-base-change
kind: lemma
title: Relative integral closure under elementary etale change
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
proof_strategy: direct
deps: [def-axiom-of-choice, lem-av7-zero-dimensional-standard-smooth-local-tools, thm-integrality-commutes-with-localisation, thm-transitivity-of-integrality, cor-integral-elements-form-a-subring, thm-integrality-and-finite-module-equivalences]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: Stacks Project, integral closure and etale extension, Lemmas 10.147.1 and 10.147.2
      url: https://stacks.math.columbia.edu/tag/03GE
---

## Statement

Assume AC and let $A$ be a reduced finite-type algebra over an algebraically closed field $k$. Let $A\to B$ be any algebra map and $C=\operatorname{Int}_A(B)\subseteq B$. If $A\to E$ is an elementary etale algebra change as constructed in [[lem-av7-zero-dimensional-standard-smooth-local-tools]], then
$$E\otimes_A C\;=\;\operatorname{Int}_E(E\otimes_A B)$$
inside $E\otimes_A B$. Injectivity on the left is part of the assertion. The algebra $B$ need not be finite type, reduced, or a domain.

## Facts & Assumptions

**Given:** AC and the algebras in the Statement.

[F1] The specified changes are flat and locally have the monic form $(A[T]/(P))_h$ with $P'$ invertible ([[lem-av7-zero-dimensional-standard-smooth-local-tools]]).

[F2] Integral elements form a subring, integrality is transitive, a finite module algebra is integral, and relative integral closure commutes with localization ([[cor-integral-elements-form-a-subring]], [[thm-transitivity-of-integrality]], [[thm-integrality-and-finite-module-equivalences]], [[thm-integrality-commutes-with-localisation]]). AC is assumed ([[def-axiom-of-choice]]).

## Proof

1.1 Flatness of $E$ preserves the injection $C\hookrightarrow B$. The image of $E\otimes_A C$ is integral over $E$, since each of its elements uses finitely many integral elements of $C$ and sums and products of integral elements remain integral by [F2]. For the opposite inclusion it suffices to work on the monic principal-open charts of [F1]; an element belongs to a submodule if its class in the quotient vanishes locally on a covering family. [F1, F2, algebra]

1.2 Let $P\in A[T]$ be monic of degree $d>0$, put $D=A[T]/(P)$, and take $c\in B[T]/(P)$ integral over $D$. Since $D$ is finite free over $A$, transitivity makes $c$ integral over $A$. Write $c=\sum_{i<d}b_iT^i$. Form a splitting algebra over $B$ by adjoining a root of $P$, dividing by its monic linear factor, then adjoining a root of the quotient and continuing. Every extension is finite free with a basis containing $1$, so $B$ injects into the splitting algebra, and its roots $\alpha_1,\ldots,\alpha_d$ are integral over $A$. The polynomial identity $P'(T)c(T)\equiv\sum_{i=1}^d c(\alpha_i)\prod_{j\ne i}(T-\alpha_j)\pmod {P(T)}$ holds universally: over independent formal roots, interpolation proves it after inverting the Vandermonde determinant, and injectivity of that localization in the universal polynomial domain proves the original polynomial identity. Specialization therefore permits repeated roots. Each $c(\alpha_i)$ is integral over $A$, because evaluation carries its monic equation to a monic equation. Every coefficient on the right is integral over $A$. The degree-less-than-$d$ remainder on the left has coefficients in the injected ring $B$, so each of those coefficients belongs to $C$. Thus $P'c\in C[T]/(P)$. [F2, algebra, construct]

2.1 On the chart $E=D_h$ of [F1], let $b\in(B[T]/(P))_h$ be integral over $E$. Localization compatibility in [F2] gives some $N$ such that $c=h^N b$ lies in $B[T]/(P)$ and is integral over $D$. By step 1.2, $P'c$ lies in $C[T]/(P)$. Both $h$ and $P'$ are invertible in $E$, whence $b=h^{-N}(P')^{-1}(P'c)$ belongs to $E\otimes_A C$. Covering by these charts proves the opposite inclusion. Degree-zero monic charts are empty and cause no exception; the zero algebras are likewise harmless. Together with step 1.1 this proves the equality. AC is inherited through [F1]; the finite splitting-algebra construction adds no further choice. [F1, F2, step 1.1, step 1.2, algebra] ∎
