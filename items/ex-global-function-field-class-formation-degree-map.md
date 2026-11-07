---
id: ex-global-function-field-class-formation-degree-map
kind: example
title: "The degree component of a function-field idèle class group"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
  - def-global-field
  - def-place-of-a-global-field
  - def-completion-of-a-global-field-at-a-place
  - def-local-field-valuation-ring-uniformizer-and-residue-field
  - def-idele-group-of-a-global-field
  - def-idele-class-group-of-a-global-field
  - thm-product-formula-for-function-fields
dependency_level: 9
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "J. S. Milne, Arithmetic Duality Theorems, second edition"
      url: "https://www.jmilne.org/math/Books/ADTnot.pdf"
      locator: "Appendix A.7–A.9, idèle classes and the function-field class formation, printed pp.131–134."
verification:
  precheck: n/a
---

## Example

Assume AC, AC_omega, and DC, and take $F=\mathbb F_q(T)$ with exact constant field $\mathbb F_q$. For each place $v$, let $\operatorname{ord}_v$ be the normalized discrete valuation and let $\deg(v)=[\kappa(v):\mathbb F_q]$. If $a=(a_v)$ is an idele, define
$$
\deg(a)=\sum_v \deg(v)\operatorname{ord}_v(a_v).
$$
This sum has finite support and vanishes on diagonal $F^\times$, so it induces a surjective homomorphism $\deg:C_F=\mathbb A_F^\times/F^\times\to\mathbb Z$. Its degree-zero kernel is infinite: it contains distinct classes represented by ideles supported at $T=0$ with component $1+T^n$ for every integer $n\ge1$. Thus the degree-zero idèle-class subgroup is not a finite group.

## Example references

[[def-global-field]]

[[def-place-of-a-global-field]]

[[def-completion-of-a-global-field-at-a-place]]

[[def-idele-group-of-a-global-field]]

[[def-idele-class-group-of-a-global-field]]

[[thm-product-formula-for-function-fields]]

[[thm-function-field-global-class-formation-finite-constants]]

[Milne, Arithmetic Duality Theorems, Appendix A.7–A.9](https://www.jmilne.org/math/Books/ADTnot.pdf)

[Rosen, Number Theory in Function Fields, Chapter 5](https://knihovna.inpb.cz/soubory/number_theory_in_function_field_rosen.pdf)

## Facts & Assumptions

**Given:** AC, AC_omega, and DC; $F=\mathbb F_q(T)$; its places and completions; and its restricted-product idèle group.

[A1] The place, completion, and restricted-product conventions require the stated choice assumptions. [[def-axiom-of-choice]] [[def-countable-choice]] [[def-dependent-choice]] [[def-global-field]] [[def-place-of-a-global-field]] [[def-completion-of-a-global-field-at-a-place]] [[def-idele-group-of-a-global-field]]

[F1] The function-field product formula says $\sum_v\deg(v)\operatorname{ord}_v(f)=0$ for every $f\in F^\times$. [[thm-product-formula-for-function-fields]]

[F2] The topological idèle class group is the quotient of the restricted-product idèle group by the closed diagonal $F^\times$. [[def-idele-group-of-a-global-field]] [[def-idele-class-group-of-a-global-field]]

[F4] The canonical map from a field to a place completion is injective. For $\mathbb F_q(T)$, the places $T=0$ and infinity have residue degree one, with uniformizers $T$ and $T^{-1}$ respectively. [[def-completion-of-a-global-field-at-a-place]] [[def-place-of-a-global-field]]

## Verification

**Given:** The assumptions and data in the Example.

1.1 By the restricted-product definition, $a_v\in\mathcal O_v^\times$ for all but finitely many finite places, so $\operatorname{ord}_v(a_v)=0$ except at finitely many places. Hence the displayed degree sum is finite and additive in $a$. [A1, given]

1.2 For a diagonal $f\in F^\times$, [F1] gives $\deg((f)_v)=\sum_v\deg(v)\operatorname{ord}_v(f)=0$. Thus the homomorphism on ideles is constant on cosets of the diagonal and descends to $C_F$ as in [F2]. [F1, F2, step 1.1]

2.1 At the place $v_\infty$ of infinity, [F4] gives $\deg(v_\infty)=1$ and uniformizer $T^{-1}$. The idele equal to $T^{-1}$ at $v_\infty$ and $1$ elsewhere has degree $1$, so the induced map is surjective. [A1, F4, given, construct]

3.1 Let $v_0$ be the place $T=0$. For $n\ge1$, the idele $a_n$ with component $1+T^n$ at $v_0$ and $1$ elsewhere has valuation zero at every place, so its class has degree zero. If $[a_n]=[a_m]$, then $a_n/a_m$ is the diagonal idele of some $f\in F^\times$. At infinity its component is $1$, so [F4] and injectivity of $F\to F_{v_\infty}$ give $f=1$. Then $1+T^n=1+T^m$ in $F_{v_0}$, which forces $n=m$. Thus the kernel contains infinitely many distinct classes. [A1, F2, F4, step 1.2, construct, algebra] ∎
