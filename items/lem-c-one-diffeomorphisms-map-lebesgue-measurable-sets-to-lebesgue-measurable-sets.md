---
id: lem-c-one-diffeomorphisms-map-lebesgue-measurable-sets-to-lebesgue-measurable-sets
kind: lemma
title: "A C^1 diffeomorphism maps Lebesgue measurable sets to Lebesgue measurable sets"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [lem-c-one-diffeomorphisms-map-lebesgue-null-sets-to-null-sets, cor-lebesgue-sigma-algebra-is-the-completion-of-borel-lebesgue-measure, thm-continuous-preimages-of-borel-sets-are-borel, def-countable-choice]
proof_strategy: direct
verification:
  audited: 2026-08-29
  precheck: pass
sources:
  references:
    - title: "Gerald B. Folland, Real Analysis, 2nd ed., Theorem 2.47"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let
$U,V \subseteq \mathbb R^n$ be open and let $T : U \to V$ be a
$C^1$ diffeomorphism. If $E \subseteq U$ is Lebesgue measurable, then $T(E)$ is
Lebesgue measurable.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice, open sets
$U,V \subseteq \mathbb R^n$, a $C^1$ diffeomorphism $T : U \to V$, and a
Lebesgue measurable set $E \subseteq U$.

[L1] A $C^1$ diffeomorphism maps null sets to null sets. ([[lem-c-one-diffeomorphisms-map-lebesgue-null-sets-to-null-sets]])

[L2] Assuming countable choice, every Lebesgue measurable set is a Borel set
up to a null modification.
([[cor-lebesgue-sigma-algebra-is-the-completion-of-borel-lebesgue-measure]])

[L3] Continuous preimages of Borel sets are Borel. ([[thm-continuous-preimages-of-borel-sets-are-borel]])

## Proof

**Proof technique:** direct.

1.1 By [L2], write $E=B \cup N$ with $B$ Borel and $N$ contained in a null set. Since $T^{-1}$ is continuous, [L3] implies that $$T(B)=(T^{-1})^{-1}(B)$$ is Borel. Also [L1] makes $T(N)$ null. [L1, L2, L3]

2.1 Therefore $T(E)=T(B)\cup T(N)$ is a Borel set union a null set, hence Lebesgue measurable by [L2]. [step 1.1, L2] ∎
