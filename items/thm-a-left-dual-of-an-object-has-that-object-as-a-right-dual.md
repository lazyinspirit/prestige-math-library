---
id: thm-a-left-dual-of-an-object-has-that-object-as-a-right-dual
kind: theorem
title: "A left dual of an object has that object as a right dual"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-left-dual-and-right-dual-object, def-the-zig-zag-identities]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories, Remark 2.10.3"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
    - title: "Michael Muger, Tensor Categories: A Selective Guided Tour, Section 1.5"
      url: "https://arxiv.org/pdf/0804.3587"
---

## Statement

If $X^\vee$ is a left dual of an object $X$, then $X$ is a right dual of
$X^\vee$. Dually, if ${}^\vee X$ is a right dual of $X$, then $X$ is a left
dual of ${}^\vee X$.

## Facts & Assumptions

**Given:** A left dual $(X^\vee,\operatorname{ev}_X,\operatorname{coev}_X)$ of
$X$.

[L1] A right dual of $X^\vee$ requires maps $X^\vee\otimes X\to\mathbf 1$ and
$\mathbf 1\to X\otimes X^\vee$ satisfying the mirror zig-zag identities
([[def-left-dual-and-right-dual-object]], [[def-the-zig-zag-identities]]).

## Proof

**Proof technique:** direct.

1.1 Reuse the same two morphisms $\operatorname{ev}_X:X^\vee\otimes X\to\mathbf 1$ and $\operatorname{coev}_X:\mathbf 1\to X\otimes X^\vee$, but now regard them as candidate right-dual data for the object $X^\vee$ with proposed right dual $X$. [given, L1, construct]

2.1 The first right-dual zig-zag for $X^\vee$ is exactly the second left-dual zig-zag for $X$, and the second right-dual zig-zag for $X^\vee$ is exactly the first left-dual zig-zag for $X$. Both are identities by the hypotheses that $X^\vee$ is a left dual of $X$. [step 1.1, L1]

3.1 Hence $X$ is a right dual of $X^\vee$. The dual assertion is the same argument with left and right interchanged. [step 2.1] ∎
