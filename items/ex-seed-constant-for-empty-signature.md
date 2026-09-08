---
id: ex-seed-constant-for-empty-signature
kind: example
title: "The empty signature still needs a nonempty term domain"
status: published
origin: pipeline
deps: [def-henkin-closed-term-model, thm-set-language-first-order-soundness]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-09
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: "Moschovakis, Lemmas 1I.4–1I.5 pp40–43; singleton complete-theory example supplied locally."
      url: https://www.math.ucla.edu/~ynm/lectures/lnl.pdf
proof_strategy: direct
---

## Example

In the empty nonlogical signature there are no closed terms. After adjoining constants $c_0,c_1,\ldots$ with seed $c_0$, there is a consistent complete deductively closed Henkin theory whose term quotient has exactly one element.

## Facts & Assumptions

**Given:** No original constants, function symbols or relation symbols; equality is logical.

[F1] A complete consistent Henkin theory with a seed has its well-defined closed-term quotient. ([[def-henkin-closed-term-model]])

[F2] Soundness implies that a theory with a model is consistent and every proved sentence is true there. ([[thm-set-language-first-order-soundness]])

## Verification

1.1 With no constants or functions, the term constructors give only variables, so none is closed. In the expanded signature each closed term is exactly one of the constants $c_n$, because there are still no function symbols. Let $A$ have carrier $\{0\}$ and interpret every $c_n$ by $0$. Put $H=\operatorname{Th}(A)$, the set of all expanded sentences true in this structure. Negation's truth clause makes exactly one of $\sigma,\neg\sigma$ belong to $H$. F2 makes $H$ consistent; it also makes $H$ deductively closed, since any sentence proved from $H$ is true in $A$. [F2]

2.1 For any existential sentence $\exists x\phi$, if it is true in $A$, its only possible witness is $0=c_0^A$, so $\phi[c_0/x]$ is true. If it is false, the implication $\exists x\phi\to\phi[c_0/x]$ is true by the Boolean implication clause. Thus every such witness axiom belongs to $H$, and $H$ is Henkin with seed $c_0$. For all $m,n$ the equation $c_m=c_n$ is true since $0=0$, so all and only the closed terms are in the one class $[c_0]=\{c_n:n<\omega\}$. The quotient of F1 is exactly $\{[c_0]\}$. Its reduct is a singleton model of the original empty theory. This computation concerns this particular $H$, not every Henkin completion of the empty theory. [F1, step 1.1] ∎
