---
id: thm-great-picard-theorem
kind: theorem
title: "Great Picard theorem"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-two-omitted-values-rule-out-an-essential-singularity]
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  references:
    - title: "Aleksander Simonic, The Ahlfors lemma and Picard's theorems, §6.4"
      url: "https://arxiv.org/pdf/1506.07019"
---

## Statement

Let $f$ be holomorphic on a punctured disc $0<|z-a|<R$ and suppose $a$ is an
essential singularity of $f$. With at most one finite exception, every value in
$\mathbb C$ is assumed infinitely often in every punctured neighborhood of
$a$.

## Facts & Assumptions

**Given:** A holomorphic function on $0<|z-a|<R$ with an essential singularity at $a$.

[L1] If a punctured-disc holomorphic function omits two distinct finite values, then the singularity is removable or a pole ([[lem-two-omitted-values-rule-out-an-essential-singularity]]).

## Proof

**Proof technique:** direct.

1.1 Suppose two distinct finite values $w_1,w_2$ each failed to occur infinitely often in some punctured neighborhood of $a$. After passing to the smaller of those neighborhoods, each equation $f(z)=w_j$ would have only finitely many solutions there. Shrink once more past all those finitely many points. The resulting punctured disc omits both $w_1$ and $w_2$, so [L1] would make the singularity removable or a pole, contradicting the hypothesis that it is essential. [L1, given, assume-contra, discharge-contradiction]

2.1 Step 1.1 shows that at most one finite value can fail the asserted infinitely-often property. Every other finite value is therefore assumed infinitely often in every punctured neighborhood of $a$. [step 1.1, algebra]

3.1 This is exactly the Great Picard conclusion for finite values. [step 2.1] ∎
