---
id: ex-eilenberg-watts-recovers-extension-of-scalars
kind: example
title: "Eilenberg-Watts recovers extension of scalars"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps:
  - thm-eilenberg-watts-for-arbitrary-unital-rings
  - lem-evaluation-on-the-regular-module-has-a-commuting-right-action
  - def-restriction-and-extension-of-scalars
  - thm-unit-isomorphisms-for-module-tensor-products
  - thm-extension-of-scalars-is-left-adjoint-to-restriction
  - cor-left-adjoints-preserve-colimits
justified_by: []
aliases: []
dependency_level: 4
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "M. Kamensky, Non-Commutative Algebra (BGU course notes, Spring 2017), §5.1, Theorem 5.1.43, Proposition 5.1.40, Lemma 5.1.46, Corollaries 5.1.48-5.1.49"
      url: "https://mkamensky.github.io/teaching/2017s/noncommutative-algebra/notes.pdf"
    - title: "A. Nyman and S. P. Smith, A Generalization of Watts's Theorem: Right Exact Functors on Module Categories, arXiv:0806.0832, Theorem 1.1-1.2, Propositions 3.2-3.3, Lemma 3.4"
      url: "https://arxiv.org/pdf/0806.0832"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Example

Let $f:R\to S$ be a unital homomorphism of commutative rings and let
${}_SS_R$ be the $(S,R)$-bimodule with left action by multiplication and right
action $s\cdot r=sf(r)$ of
[[def-restriction-and-extension-of-scalars]]. Then the tensor functor
$T_S=S\otimes_R-$ is exactly the extension of scalars along $f$; it is additive
and cocontinuous; and its Eilenberg-Watts kernel is $T_S(R)=S\otimes_RR\cong S$
with the right action of
[[lem-evaluation-on-the-regular-module-has-a-commuting-right-action]] equal to
the displayed action $s\cdot r=sf(r)$. Thus
[[thm-eilenberg-watts-for-arbitrary-unital-rings]] recovers extension of scalars
with kernel ${}_SS_R$. The same bimodule and computation apply to an arbitrary
unital ring homomorphism, but the published definition of extension of scalars
is stated for commutative rings. No choice is used.

## Facts & Assumptions

**Given:** A unital homomorphism $f:R\to S$ of commutative rings, the
$(S,R)$-bimodule ${}_SS_R$ with $s\cdot r=sf(r)$, and the tensor functor
$T_S=S\otimes_R-:R\text{-}\mathbf{Mod}\to S\text{-}\mathbf{Mod}$.

[F1] Extension of scalars along $f$ is the functor $S\otimes_R-$, with $S$ the
$(S,R)$-bimodule whose left action is multiplication and whose right action is
$s\cdot r=sf(r)$; the outer action $s'(s\otimes m)=(s's)\otimes m$ makes
$S\otimes_RM$ an $S$-module, and extension sends $u$ to $1_S\otimes u$
([[def-restriction-and-extension-of-scalars]]).

[F2] Extension of scalars is left adjoint to restriction of scalars
([[thm-extension-of-scalars-is-left-adjoint-to-restriction]]), and a left
adjoint preserves every colimit that exists
([[cor-left-adjoints-preserve-colimits]]).

[F3] Every tensor functor $T_N=N\otimes_R-$, for $N$ an $(S,R)$-bimodule, is
additive, right exact, coproduct-preserving and therefore cocontinuous
([[thm-eilenberg-watts-for-arbitrary-unital-rings]]).

[F4] The tensor-unit map $\rho_S:S\otimes_RR\to S$, $\rho_S(s\otimes x)=sx$,
is an isomorphism with inverse $s\mapsto s\otimes1$
([[thm-unit-isomorphisms-for-module-tensor-products]]).

[F5] For an additive functor $F$ and the regular module $R$, the formula
$ma=F(r_a)(m)$ with $r_a(x)=xa$ turns $F(R)$ into an $(S,R)$-bimodule
([[lem-evaluation-on-the-regular-module-has-a-commuting-right-action]]).

## Verification

**Given:** The data of the Example.

1.1 The functor $T_S=S\otimes_R-$ is by definition the extension of scalars along $f$ by [F1]. It is additive and cocontinuous: it is additive by [F3], and it is cocontinuous because extension of scalars is left adjoint to restriction of scalars by [F2] and a left adjoint preserves every colimit that exists by [F2] (equivalently, additive and coproduct-preserving with right exactness gives cocontinuity directly by [F3]). [F1, F2, F3]

2.1 Kernel: apply the evaluation lemma [F5] to $F=T_S$ and the regular module $R$. For $a\in R$ one has $T_S(r_a)=1_S\otimes r_a$, so the reconstructed right action on $T_S(R)=S\otimes_RR$ is $(s\otimes x)a=s\otimes(xa)$; under the unit isomorphism $\rho_S$ of [F4] this corresponds to $\rho_S(s\otimes(xa))=sf(xa)=sf(x)f(a)$, since $f$ is a unital ring homomorphism, and the last term is $\rho_S(s\otimes x)\cdot a$ for the displayed right action $s'\cdot a=s'f(a)$ of [F1]. Hence the evaluation right action on the kernel $S\otimes_RR\cong S$ is exactly $s\cdot a=sf(a)$, the published action of ${}_SS_R$. [F1, F4, F5, step 1.1]

3.1 By step 1.1 the extension-of-scalars functor is the tensor functor $T_S$ with kernel the $(S,R)$-bimodule ${}_SS_R$, as computed in step 2.1, and by [F3] it is additive and right exact as the theorem requires; hence the Eilenberg-Watts classification reproduces extension of scalars together with its kernel bimodule. [F3, step 1.1, step 2.1]

4.1 The same bimodule ${}_SS_R$ and the same unit-isomorphism computation make sense for an arbitrary unital ring homomorphism, but the published definition of extension of scalars is stated only for commutative rings, so only the commutative case is claimed here; that caveat is recorded and not used. No element of an auxiliary set is chosen, so no choice is involved. [F1, step 3.1] ∎
