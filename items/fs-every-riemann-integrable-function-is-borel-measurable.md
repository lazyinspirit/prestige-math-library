---
id: fs-every-riemann-integrable-function-is-borel-measurable
kind: false-statement
title: "FALSE: every Riemann integrable function on a closed bounded interval is Borel measurable"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [cor-every-subset-of-r-of-positive-outer-measure-contains-a-nonmeasurable-subset, lem-this-homeomorphism-sends-the-cantor-set-onto-a-set-of-lebesgue-measure-one, lem-x-plus-the-cantor-function-is-a-homeomorphism-from-zero-one-onto-zero-two, cor-cantor-set-is-an-uncountable-lebesgue-null-set, thm-lebesgue-measure-is-a-complete-measure, prop-null-sets-form-a-sigma-ideal-in-a-complete-space, thm-cantor-set-properties, cor-riemann-integrability-and-lebesgue-null-discontinuity-sets, thm-borel-sigma-algebra-of-a-subspace-is-the-trace, thm-continuous-preimages-of-borel-sets-are-borel]
aliases: []
landmark: false
proof_strategy: contradiction
verification:
  audited: 2026-08-28
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John K. Hunter, Measure Theory, Example 2.22"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
---

## Statement

Assume the Axiom of Choice. Every Riemann integrable function on a closed
bounded interval is Borel measurable.

## Facts & Assumptions

**Given:** The Axiom of Choice, the Cantor set $C\subseteq[0,1]$, the map
$\psi(x)=x+c(x)$, and the compact set $K:=\psi[C]$.

[L1] The map $\psi$ is a homeomorphism from $[0,1]$ onto $[0,2]$, and
$K=\psi[C]$ is compact and Lebesgue measurable with $\lambda_1(K)=1$.
([[lem-x-plus-the-cantor-function-is-a-homeomorphism-from-zero-one-onto-zero-two]],
[[lem-this-homeomorphism-sends-the-cantor-set-onto-a-set-of-lebesgue-measure-one]])

[L2] Every subset of $\mathbb R$ of positive Lebesgue outer measure contains a
nonmeasurable subset.
([[cor-every-subset-of-r-of-positive-outer-measure-contains-a-nonmeasurable-subset]])

[L3] The Cantor set is Lebesgue measurable with measure $0$.
([[cor-cantor-set-is-an-uncountable-lebesgue-null-set]])

[L4] In a complete measure space, every subset of a measurable null set is
measurable and null.
([[thm-lebesgue-measure-is-a-complete-measure]],
[[prop-null-sets-form-a-sigma-ideal-in-a-complete-space]])

[L5] The Cantor set is closed and nowhere dense.
([[thm-cantor-set-properties]])

[L6] A bounded function on $[0,1]$ is Riemann integrable exactly when its
discontinuity set has Lebesgue measure $0$.
([[cor-riemann-integrability-and-lebesgue-null-discontinuity-sets]])

[L7] The Borel sigma-algebra of a subspace is the trace of the ambient Borel
sigma-algebra.
([[thm-borel-sigma-algebra-of-a-subspace-is-the-trace]])

[L8] A continuous map has Borel preimages of Borel sets.
([[thm-continuous-preimages-of-borel-sets-are-borel]])

## Refutation

**Proof technique:** refutation.

1.1 By [L1], the compact set $K$ has positive measure, so [L2] provides a [L1, L2, L3, L4, construct]
nonmeasurable subset $N\subseteq K$. Put $E:=\psi^{-1}[N]\subseteq C$. Since
$C$ is measurable and null by [L3], step 1.1 and [L4] show that $E$ is
Lebesgue measurable and null.

2.1 Let $h:=\mathbf 1_E$ on $[0,1]$. If $x\notin C$, then [step 1.1, L3, L5, L6]
an open
neighbourhood of $x$ disjoint from $C$, hence disjoint from $E$, so $h$ is
identically $0$ there. Thus every discontinuity of $h$ lies in $C$. Since $C$
has Lebesgue measure $0$ by [L3], [L6] makes $h$ Riemann integrable on $[0,1]$.

3.1 Suppose instead that $h$ were Borel measurable on $[0,1]$. [step 1.1, step 2.1, L1, L7, L8, assume-contra, discharge-contradiction]
Then
$E=h^{-1}((1/2,\infty))$ would be Borel in the subspace $[0,1]$. Because
$E\subseteq C$, [L7] makes $E$ Borel in the subspace $C$. The restriction
$\psi|_C:C\to K$ is a homeomorphism by [L1], so its inverse
$(\psi|_C)^{-1}:K\to C$ is continuous; applying [L8] to that inverse shows that
$N=\psi[E]$ is Borel in the subspace $K$. Since $K$ is compact and therefore
closed in $\mathbb R$, [L7] makes $N$ Borel in $\mathbb R$, contradicting the
choice of $N$. Therefore $h$ is Riemann integrable but not Borel measurable,
and the statement is false. ∎
