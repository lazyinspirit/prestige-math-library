---
id: thm-a-short-exact-sequence-is-a-kernel-cokernel-pair
kind: theorem
title: "A short exact sequence is a kernel-cokernel pair"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-the-arrow-theoretic-criterion-for-exactness,
       def-exact-sequence-and-short-exact-sequence-in-an-abelian-category,
       prop-the-kernel-of-a-monomorphism-is-zero-and-the-cokernel-of-an-epimorphism-is-zero,
       prop-the-cokernel-of-a-zero-morphism-out-of-the-zero-object-is-an-isomorphism,
       cor-a-morphism-in-an-abelian-category-is-monic-exactly-when-its-kernel-is-zero-and-epic-exactly-when-its-cokernel-is-zero,
       def-exactness-at-a-node,
       cor-equalizers-are-monic-and-coequalizers-are-epic,
       thm-every-monomorphism-is-the-kernel-of-its-cokernel]
justified_by: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-29
  precheck: pass
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Section 12.5, Definition 12.5.7"
      url: "https://stacks.math.columbia.edu/tag/00ZX"
    - title: "David Mehrle, Category Theory, Part III, Remark 7.21"
      url: "https://pi.math.cornell.edu/~dmehrle/notes/partiii/cattheory_partiii_notes.pdf"
pipeline_run: frontier-23
---

## Statement

For morphisms
$$0\to A\xrightarrow{i}B\xrightarrow{p}C\to 0$$
in an abelian category, the following are equivalent:

1. the sequence is short exact;
2. $i$ is a kernel of $p$ and $p$ is a cokernel of $i$.

## Facts & Assumptions

**Given:** Morphisms $i:A \to B$ and $p:B \to C$ in an abelian category.

[L1] A short exact sequence is exact at $A$, $B$, and $C$ ([[def-exact-sequence-and-short-exact-sequence-in-an-abelian-category]]).

[L2] Exactness at a node can be tested by the two arrow equalities $g f = 0$ and $q k = 0$ ([[thm-the-arrow-theoretic-criterion-for-exactness]]).

[L3] In an abelian category, a morphism is monic exactly when its kernel is zero, and epic exactly when its cokernel is zero ([[cor-a-morphism-in-an-abelian-category-is-monic-exactly-when-its-kernel-is-zero-and-epic-exactly-when-its-cokernel-is-zero]]).

[L4] The identity of $A$ is a cokernel of $0 \to A$, and dually the identity of $C$ is a kernel of $C \to 0$ ([[prop-the-cokernel-of-a-zero-morphism-out-of-the-zero-object-is-an-isomorphism]]).

[L5] Exactness at $B$ gives both $[\operatorname{im}(i)] = [\ker(p)]$ and $[\operatorname{coker}(i)] = [\operatorname{coim}(p)]$ ([[def-exactness-at-a-node]]).

[L6] Every epimorphism is the cokernel of its kernel ([[thm-every-monomorphism-is-the-kernel-of-its-cokernel]]).

[L7] Kernels are monic and cokernels are epic ([[cor-equalizers-are-monic-and-coequalizers-are-epic]]).

## Proof

**Proof technique:** direct.

1.1 Assume the displayed sequence is short exact. Exactness at $A$ and [L4] make the arrow criterion [L2] read $1_A k = 0$ for a kernel $k$ of $i$, so $\ker(i)=0$ and [L3] makes $i$ monic. Dually, exactness at $C$ gives $\operatorname{coker}(p)=0$, so $p$ is epic. [L1, L2, L3, L4]

1.2 Conversely, assume $i$ is a kernel of $p$ and $p$ is a cokernel of $i$. Then [L7] makes $i$ monic and $p$ epic, so [L3] gives endpoint exactness. Also $p i = 0$, and if $k$ is a kernel of $p$ while $q$ is a cokernel of $i$, then $k$ factors through $i$, hence $q k = 0$ because $q i = 0$. Thus [L2] gives exactness at $B$, so the sequence is short exact. [L2, L3, L7]

2.1 Exactness at $B$ gives $p i = 0$ by [L2]. Since $i$ is monic by step 1.1, the factorization $i = i 1_A$ is an epi-mono factorization of $i$, so every $u:U \to B$ with $p u = 0$ factors through $i$. Thus $i$ is a kernel of $p$. [L2, step 1.1]

2.2 The same exactness at $B$, read through the second equality in [L5], identifies $\operatorname{coker}(i)$ with $\operatorname{coim}(p)$. Because step 1.1 makes $p$ epic, [L6] says that $p$ itself represents $\operatorname{coim}(p)$. Hence $p$ represents the quotient $\operatorname{coker}(i)$, which is exactly to say that $p$ is a cokernel of $i$. [L5, L6, step 1.1]

3.1 Steps 1.1 and 2.1 show that short exactness forces $i$ to be the kernel of $p$. [step 1.1, step 2.1]

4.1 Steps 2.2 and 1.2 complete the equivalence. [step 2.2, step 1.2] ∎
