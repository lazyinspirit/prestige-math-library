---
id: thm-global-function-field-brauer-hasse-sequence
kind: theorem
title: Brauer–Hasse exact sequence for a function field over a finite field
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 12
deps:
- def-axiom-of-choice
- thm-choice-implies-dependent-implies-countable-choice
- def-global-field
- def-place-of-a-global-field
- def-completion-of-a-global-field-at-a-place
- cor-local-brauer-invariant-under-choice
- lem-function-field-geometric-divisor-picard-cohomology
- lem-function-field-constant-class-local-invariant-comparison
- lem-local-unramified-degree-two-cohomology-and-inflation
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: J. S. Milne, Arithmetic Duality Theorems, second edition, Appendix A.7;
      locally reconstructed intermediates
    url: https://www.jmilne.org/math/Books/ADTnot.pdf
    locator: Printed pp.131–132, full actual A.7 proof read. Finite-field Jacobian,
      augmentation and local comparison details are proved in the local bodies, not
      imported from its omitted end-zero or identification sentence.
verification: {}
---

## Statement

Assume the Axiom of Choice. Let $k=\mathbb F_q$, let $C/k$ be a smooth
proper geometrically integral curve, and let $K=k(C)$; thus $k$ is the full
constant field of $K$. For each closed point $v\in C$, let $K_v$ be the
completion and let $\operatorname{inv}_v$ be its normalized local invariant.
Then
$$0\longrightarrow\operatorname{Br}(K) \xrightarrow{\mathrm{loc}}\bigoplus_{v\in C^{(1)}}\operatorname{Br}(K_v) \xrightarrow{\sum_v\operatorname{inv}_v}\mathbb Q/\mathbb Z \longrightarrow0$$
is exact. No $k$-rational point on $C$ is assumed. In particular, each global
class has finite local support, localization is injective, and every
finite-support tuple whose local invariants sum to zero comes from a unique
global class.

## Statement references

[[def-global-field]]

[[def-completion-of-a-global-field-at-a-place]]

[Milne, Arithmetic Duality Theorems, Appendix A.7, printed pp.131–132](https://www.jmilne.org/math/Books/ADTnot.pdf)

## Facts & Assumptions

**Given:** AC, $k=\mathbb F_q$, the smooth proper geometrically integral curve $C/k$, and $K=k(C)$ in the Statement.

[A1] AC implies DC, supplying the literal axiom hypotheses of the local and cohomological helpers. [[def-axiom-of-choice]] [[thm-choice-implies-dependent-implies-countable-choice]]

[F1] Actual continuous LHS and Tsen identify the classical Brauer group of $K$ with $H^2(G_k,\bar K^\times)$ through the standard crossed-product sign. [[lem-function-field-constant-class-local-invariant-comparison]]

[F2] The constants, divisor and algebraic Picard sequences give $H^2(G_k,\bar K^\times)\cong H^2(G_k,\operatorname{Prin}(\bar C))$ and the exact sequence
$$0\to H^2(G_k,\operatorname{Prin}(\bar C))\to
 \bigoplus_{v\in C^{(1)}}\mathbb Q/\mathbb Z
 \xrightarrow{\sum_v}\mathbb Q/\mathbb Z\to0.$$
In particular the augmentation map is proved onto with $H^3(G_k,\operatorname{Prin}(\bar C))=0$. [[lem-function-field-geometric-divisor-picard-cohomology]]

[F3] The component of the divisor-cohomology map at $v$ is the invariant of actual Brauer localization: for a constant carry representative $(n,a)$ it is $[k(v):k]\operatorname{ord}_v(a)/n$. [[lem-function-field-constant-class-local-invariant-comparison]]

[F4] Under AC/DC each completed local field has the classical invariant isomorphism to $\mathbb Q/\mathbb Z$, with actual unramified valuation/arithmetic-Frobenius normalization. [[cor-local-brauer-invariant-under-choice]] [[lem-local-unramified-degree-two-cohomology-and-inflation]]

## Proof

**Proof technique:** identify the actual localization row with the proved divisor/Picard cohomology row.

**Given:** The data above.

1.1 By [A1], every helper's AC/DC hypotheses hold. Use [F1] to identify $\operatorname{Br}(K)$ with $H^2(G_k,\bar K^\times)$, then use [F2]'s constants-sequence isomorphism to identify it with $H^2(G_k,\operatorname{Prin}(\bar C))$. The resulting map to divisor cohomology is injective by [F2]. [A1, F1, F2, given]

1.2 At each closed point $v$, [F4] identifies $\operatorname{Br}(K_v)$ with the $v$ copy of $\mathbb Q/\mathbb Z$. The arithmetic-Frobenius/valuation normalization in [F4] is the stated $\operatorname{inv}_v$; it is constructed by the proved conditional corollary, without taking the older unqualified local-invariant theorem as input. The direct sum of these local identifications is therefore the middle vertical isomorphism in the diagram below. [F4, step 1.1, algebra]

2.1 By [F3], the map from the first row's global group to each local summand is the actual scalar-extension localization, not an arbitrary isomorphism to a cohomology coordinate. Every global class has finite support there: its constant carry representative $(n,a)$ has invariant zero outside the finite divisor support of $a$. Thus localization lands in the stated direct sum, and the diagram commutes.
$$
\begin{tikzcd}
0 \arrow[r] & \operatorname{Br}(K) \arrow[r,"\mathrm{loc}"] \arrow[d,"\sim"'] &
\displaystyle\bigoplus_v\operatorname{Br}(K_v) \arrow[r,"\sum_v\operatorname{inv}_v"] \arrow[d,"\sim"'] &
\mathbb Q/\mathbb Z \arrow[r] \arrow[d,equal] & 0\\
0 \arrow[r] & H^2(G_k,\operatorname{Prin}(\bar C)) \arrow[r] &
\displaystyle\bigoplus_v\mathbb Q/\mathbb Z \arrow[r,"\sum_v"] &
\mathbb Q/\mathbb Z \arrow[r] & 0
\end{tikzcd}
$$
The equalities of the arrows are the finite-stage carry/valuation calculations in [F3]; the proof does not rely on the drawing. [F2, F3, F4, step 1.1, step 1.2, algebra]

2.2 The bottom row is exact by [F2]. Transport through the actual vertical isomorphisms of step 2.1 gives injectivity of localization, equality of its image with the kernel of the local invariant sum, and surjectivity of that sum. Hence every finite-support tuple with sum zero is the localization of a unique global class. [F2, step 2.1, algebra]

3.1 No rational point on $C/k$ was selected: [F2] proves augmentation surjectivity from any closed-point orbit, whose normalized degree-two map is the identity regardless of its degree. The argument includes every finite constant field and all characteristic-primary Brauer classes. It proves this function-field Brauer sequence only; no number-field reciprocity or global idèle degree-three conclusion follows from it. [A1, F2, step 2.2] ∎
