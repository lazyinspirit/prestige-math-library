---
id: lem-regular-parameters-globalize-with-stable-annihilators
kind: lemma
title: Global regular parameters with stable annihilators
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
- def-axiom-of-choice
- thm-regular-local-rings-are-domains-and-cohen-macaulay
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: The Stacks Project, tag 07FD
    url: https://stacks.math.columbia.edu/tag/07FD
    locator: Source-backed local reconstruction; exact actual proof and reading limits are the bound proof_source_parts. No linked prerequisite or whole-chapter reading is asserted; source citation is not an external theorem import.
proof_strategy: direct
axiom_use: AC is explicit in the public Statement. It supplies the module/vector-space/chart selections and, through AC⇒DC where used, compatible formal lifts and Noetherian induction; only the particular selections identified in the proof are used.
---

## Statement

Assume the Axiom of Choice. Let $L$ be Noetherian, $\mathfrak q$ a prime ideal, $J$ an ideal, and $N,e$ positive integers. Suppose $L_{\mathfrak q}$ is regular local and $\mathfrak q^N L_{\mathfrak q}\subseteq J L_{\mathfrak q}$. There are elements $\pi_1,\ldots,\pi_d\in L$ forming a regular system of parameters of $L_{\mathfrak q}$, each satisfying $\pi_i^N\in J$, such that in $L/(\pi_1^e,\ldots,\pi_{i-1}^e)$ the annihilators of $\pi_i$ and $\pi_i^2$ are equal. The denominator-stabilization construction works for all sufficiently large powers of a fixed denominator.

## Facts & Assumptions

**Given:** The rings, maps, finite presentations, specified elements, witnesses and other data quantified in the Statement. AC is assumed. All displayed factor maps preserve the specified target map.

[F1] The following existing interface is used at its literal public scope: [[def-axiom-of-choice]].

[F2] The following existing interface is used at its literal public scope: [[thm-regular-local-rings-are-domains-and-cohen-macaulay]].

## Proof

**Proof technique:** finite equations, the specified local constructions and the explicit supplier interfaces.

1.1 Let `B` be Noetherian, `S` multiplicative, and `x in B`. Suppose `Ann_(S^-1 B)(x)=Ann_(S^-1 B)(x^2)`. The finite `B`-module `Q=Ann_B(x^2)/Ann_B(x)` localizes to zero. Choose one `s in S` killing it, by multiplying the finitely many annihilators of a finite set of module generators. Thus whenever `x^2 y=0`, one has `s x y=0`. [F1, F2, given, construct, algebra]

2.1 The ascending chain `Ann_B(s^j)` stabilizes. Choose `N>=1` from which it is constant. For every `n>=N` we claim `Ann_B(s^n x)=Ann_B((s^n x)^2)`. Only the reverse inclusion needs proof. If `s^(2n) x^2 y=0`, apply step 1.1 to `s^(2n)y` to obtain `s^(2n+1) x y=0`. Stabilization gives `s^n x y=0`. This proves the claim. All sufficiently high powers work, not just a single unspecified multiplier. [F1, F2, step 1.1, given, construct, algebra]

3.1 Let `B` be Noetherian, let `J` be an ideal and `q` a prime, and suppose `B_q` is regular local of dimension `d` and `q^n B_q subset J B_q`. Fix a positive integer `e`. Select a regular system of parameters of the regular local ring. Clear its finitely many denominators to get elements `x_1,...,x_d in B` generating `q B_q`. For each `i`, clear a denominator of `x_i^n in J B_q`; multiplying `x_i` by that denominator then gives `x_i^n in J` globally. These multipliers are outside `q` and preserve the parameter system. [F1, F2, step 2.1, given, construct, algebra]

4.1 Induct through the fixed finite list. Suppose the earlier parameters are already fixed. In `C=B/(x_1^e,...,x_(i-1)^e)` the image of `x_i` is a nonzerodivisor after localization at `q`: a regular system of parameters is a regular sequence, and replacing earlier regular-sequence elements by positive powers preserves that property. The latter assertion follows inductively by filtering a quotient by a power with its successive principal-power subquotients; multiplication by the next regular element is injective on each subquotient and hence on the quotient. Thus the two localized annihilators are equal. Apply steps 1.1–2.1 in this Noetherian quotient to replace `x_i` by `s^N x_i`, `s notin q`, making `Ann_C(x_i)=Ann_C(x_i^2)` globally. It remains a local parameter and its `n`th power remains in `J`. Earlier conditions are unaffected because their quotients involve only earlier parameters. [F1, F2, step 1.1, step 2.1, step 3.1, given, construct, algebra]

5.1 After these finitely many steps, the `x_i` generate `q B_q`, each `x_i^n` belongs to `J`, and the stable-annihilator equalities hold modulo all preceding `e`th powers. This is the exact parameter-and-annihilator output needed for the iterated eighth-order desingularization. It makes no assertion that a local parameter is a global nonzerodivisor without the multiplier correction. [F1, F2, step 4.1, given, construct, algebra] ∎

## Source and authoring record

This is a local reconstruction from the exact source part recorded in `native146-helper-carriers-v1/author-source-map.json`. The cited Stacks locators document the construction; no external theorem is imported. Earlier partial-status research files and all frozen histories remain unchanged. Completion and readiness are tracked in the run’s item record.
