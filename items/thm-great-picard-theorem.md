---
id: thm-great-picard-theorem
kind: theorem
title: "Great Picard theorem"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-axiom-of-choice, lem-two-omitted-values-rule-out-an-essential-singularity]
landmark: true
proof_strategy: direct
verification:
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
sources:
  references:
    - title: "Aleksander Simonic, The Ahlfors lemma and Picard's theorems, §6.4"
      url: "https://arxiv.org/pdf/1506.07019"
---

## Statement

Assume the Axiom of Choice. Let $f$ be holomorphic on a punctured disc $0<|z-a|<R$ and suppose $a$ is an
essential singularity of $f$. With at most one finite exception, every value in
$\mathbb C$ is assumed infinitely often in every punctured neighborhood of
$a$.

## Facts & Assumptions

**Given:** The Axiom of Choice and a holomorphic function on $0<|z-a|<R$ with an essential singularity at $a$.

[A1] The Axiom of Choice is [[def-axiom-of-choice]]; it is used in the omitted-values lemma to select a convergent subsequence from a normal family.

[L1] Under the Axiom of Choice, if a punctured-disc holomorphic function omits two distinct finite values, then the singularity is removable or a pole ([[lem-two-omitted-values-rule-out-an-essential-singularity]]).

## Proof

**Proof technique:** direct.

1.1 Suppose two distinct finite values $w_1,w_2$ each failed to occur infinitely often in some punctured neighborhood of $a$. After passing to the smaller of those neighborhoods, each equation $f(z)=w_j$ would have only finitely many solutions there. Shrink once more past all those finitely many points. The resulting punctured disc omits both $w_1$ and $w_2$, so [L1], under [A1], would make the singularity removable or a pole, contradicting the hypothesis that it is essential. [A1, L1, given, assume-contra, discharge-contradiction]

2.1 Step 1.1 shows that at most one finite value can fail the asserted infinitely-often property. Every other finite value is therefore assumed infinitely often in every punctured neighborhood of $a$. [step 1.1, algebra]

3.1 This is exactly the Great Picard conclusion for finite values. [step 2.1] ∎
