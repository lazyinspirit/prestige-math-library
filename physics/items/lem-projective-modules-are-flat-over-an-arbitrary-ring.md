---
id: lem-projective-modules-are-flat-over-an-arbitrary-ring
title: "Projective left and right modules are flat over an arbitrary ring"
kind: lemma
status: published
origin: pipeline
deps: ["def-left-and-right-flat-modules-over-an-arbitrary-ring", "thm-projective-module-characterizations", "thm-universal-property-of-module-tensor-products"]
proof_strategy: direct
sources:
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra"
      url: https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
  verified:
    model: "gpt-6-astra"
    verdict: pass
    date: 2026-09-09
    scope: "Owner-authorized local defect repair; no independent judge or owner audit"
    delegated_by: owner
---

## Statement

Every projective left or right module over an arbitrary unital ring is flat on its appropriate side. This implication requires no Axiom of Choice.

## Proof

**Given:** a projective left $R$-module $P$; the right-module case is symmetric.

1.1 The choice-free implication in [[thm-projective-module-characterizations]] supplies a split free cover $F=R^{(I)}\cong P\oplus P^\prime$: lift the identity of $P$ through its canonical free cover. Fix the resulting inclusion $i:P\to F$ and retraction $p:F\to P$. [given]

2.1 For any right module $N$, the balanced pairing $(n,(r_j))\mapsto(nr_j)_j$ induces $N\otimes_RF\to N^{(I)}$ by [[thm-universal-property-of-module-tensor-products]]. Its inverse sends a finite-support tuple $(n_j)$ to $\sum_j n_j\otimes e_j$. The two composites fix elementary tensors and coordinate generators, since $n\otimes\sum_jr_je_j=\sum_jnr_j\otimes e_j$. These identifications commute with homomorphisms in $N$. [step 1.1, algebra]

3.1 Direct sums of exact sequences are exact: kernels are computed coordinatewise, and an element of the kernel has finite support, so finitely many preimages suffice to lift it from the preceding term. Finite choices require no AC. Thus step 2.1 shows that $-\otimes_RF$ is exact. [step 2.1, algebra]

4.1 Tensoring $i$ and $p$ gives natural maps with composite the identity. If $z$ is a cycle in a sequence tensored with $P$, include it into the sequence tensored with $F$, lift it there by step 3.1, and retract that lift using $p$. This proves exactness after tensoring with $P$, including the endpoint conditions. Hence $P$ is flat by [[def-left-and-right-flat-modules-over-an-arbitrary-ring]]. [step 1.1, step 3.1, algebra]

5.1 For a projective right module, use its split right free cover and the balanced isomorphism $R^{(I)}\otimes_RN\to N^{(I)}$, $(r_j)\otimes n\mapsto(r_jn)_j$, whose inverse is $(n_j)\mapsto\sum_je_j\otimes n_j$. The same coordinatewise and retract arguments prove right flatness, without invoking tensor symmetry or choice. [step 2.1, step 3.1, step 4.1, algebra] ∎
