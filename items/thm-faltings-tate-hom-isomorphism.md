---
id: thm-faltings-tate-hom-isomorphism
kind: theorem
title: "Faltings isogeny theorem: Galois-equivariant Tate-module homomorphisms come from abelian-variety homomorphisms"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 7
deps:
  - def-arith-tate-module-and-inertia
  - def-axiom-of-choice
  - def-continuous-l-adic-galois-representation
  - def-dependent-choice
  - lem-faltings-galois-invariant-subspace-is-direct-summand
  - thm-faltings-semisimplicity-of-tate-module
  - lem-faltings-height-sequence-eventually-stationary
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "G. Faltings, “Endlichkeitssätze für abelsche Varietäten über Zahlkörpern,” §5"
      url: "https://archive.ymsc.tsinghua.edu.cn/pacm_download/355/9132-elc.pdf"
      locator: "Printed pp. 360–361, semisimplicity, Tate homomorphism, and Hom corollary."
verification:
  precheck: pending
axiom_use: "The explicit axiom branches are AC, DC; the displayed item-local proof is choice-free after the cited hypotheses unless its Proof status records an unresolved internal use."
---

## Statement

Assume AC and DC. Let $A,B$ be abelian varieties over a number field $K$ and let $\ell$ be a prime. The natural map induced by the Tate-module functor is an isomorphism
$$\operatorname{Hom}_K(A,B)\otimes_{\mathbb Z}\mathbb Q_\ell\;\xrightarrow{\;\sim\;}\;\operatorname{Hom}_{G_K}\bigl(V_\ell(A),V_\ell(B)\bigr).$$

## Statement references

[[def-arith-tate-module-and-inertia]]

[[def-continuous-l-adic-galois-representation]]

[[lem-faltings-galois-invariant-subspace-is-direct-summand]]

[[lem-faltings-height-sequence-eventually-stationary]]

[[thm-faltings-semisimplicity-of-tate-module]]

[Faltings 1983, §5, Satz 4 and Corollary 1](https://archive.ymsc.tsinghua.edu.cn/pacm_download/355/9132-elc.pdf)

[Faltings–Wüstholz, *Rational Points*, Chapter IV, §§2–3](https://yhzhumath.github.io/Mordell2024/RP.pdf)

## Facts & Assumptions

**Given:** AC and DC; abelian varieties $A,B/K$, a prime $\ell$, and the induced Galois representations on their Tate modules.

[A1] [[def-axiom-of-choice]]: AC is an explicit hypothesis inherited through the declared supplier chain; any internal use not reconstructed is recorded in Proof status.

[A2] [[def-dependent-choice]]: DC is an explicit hypothesis inherited through the declared supplier chain; any internal use not reconstructed is recorded in Proof status.

[F1] [[def-arith-tate-module-and-inertia]]: $V_\ell(A)$ and $V_\ell(B)$ are finite-dimensional rational Tate modules with continuous $G_K$-action.

[F2] [[thm-faltings-semisimplicity-of-tate-module]]: these representations are semisimple.

## Proof status

The source route reduces a Galois-equivariant linear map to an invariant subspace in a product Tate module. The former unrestricted bounded-stable-height assertion is false and is excluded. A valid quotient-repetition argument would need a proved finiteness theorem with the actual semistable or fixed-good-reduction hypotheses, together with proofs that the relevant quotient family satisfies those hypotheses and has the necessary height bound. No such replacement is assumed here, especially for the arbitrary $A,B/K$ in the Statement. Semisimplicity, the corrected stationary quotient argument, and the construction of a realizing homomorphism retain their actual proof obligations. This theorem remains held.

Unresolved proof prerequisite (not an accepted given): Surjectivity requires a correctly scoped finite quotient family, the corrected quotient-sequence argument, and the actual realizing homomorphism; none may be inferred from the refuted unrestricted height assertion. The full proof is not supplied by the current local items. Proposed supplier ID: `lem-faltings-invariant-subspace-realized-by-a-homomorphism` (not scaffolded or accepted in this run; proposed placement is this A page before this consumer).
