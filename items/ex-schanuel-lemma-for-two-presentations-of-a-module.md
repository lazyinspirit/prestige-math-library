---
id: ex-schanuel-lemma-for-two-presentations-of-a-module
kind: example
title: "Schanuel's lemma for two presentations of a module"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
deps: [thm-schanuel-lemma-in-an-abelian-category, def-exact-and-short-exact-sequences-of-modules]
generation:
  role: example
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra"
      url: "https://djvu.online/file/WrPctxOTQCdBj"
    - title: "The Stacks Project, Section 10.109: Rings of finite global dimension"
      url: "https://stacks.math.columbia.edu/tag/00O2"
pipeline_run: frontier-28
---
## Example

For $\mathbb Z/2\mathbb Z$, compare the two short exact sequences $$0\to2\mathbb Z\to\mathbb Z\to\mathbb Z/2\mathbb Z\to0$$ and $$0\to2\mathbb Z\oplus\mathbb Z\to\mathbb Z\oplus\mathbb Z\to \mathbb Z/2\mathbb Z\to0,$$ where the second surjection sends $(a,b)$ to $\bar a$. Schanuel's lemma predicts $$2\mathbb Z\oplus(\mathbb Z\oplus\mathbb Z)\cong(2\mathbb Z\oplus\mathbb Z)\oplus\mathbb Z.$$
## Facts & Assumptions

**Given:** The two displayed short exact sequences.

[L1] Schanuel's lemma gives a stable isomorphism between the two kernels ([[thm-schanuel-lemma-in-an-abelian-category]]).

[L2] Short exact sequences of modules are exact module-theoretic rows ([[def-exact-and-short-exact-sequences-of-modules]]).
## Verification

**Proof technique:** direct.

1.1 The kernel of $\mathbb Z\to\mathbb Z/2\mathbb Z$ is $2\mathbb Z$, and the kernel of $(a,b)\mapsto\bar a$ is $2\mathbb Z\oplus\mathbb Z$. Thus the two displayed rows are short exact in the sense of [L2]. [L2, given, algebra]

2.1 Since $2\mathbb Z\cong\mathbb Z$, both sides of Schanuel's conclusion are free abelian groups of rank three. Hence they are isomorphic, exactly as [L1] predicts. [L1, step 1.1, algebra] ∎
