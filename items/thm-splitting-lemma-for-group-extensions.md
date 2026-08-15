---
id: thm-splitting-lemma-for-group-extensions
kind: theorem
title: "Splitting lemma for groups: a section, a complement, and a semidirect-product decomposition are equivalent"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-split-extension-of-groups, thm-internal-external-semidirect-product-equivalence, thm-first-isomorphism-theorem-groups, thm-group-homomorphism-injective-iff-trivial-kernel]
justified_by: []
aliases: []
landmark: true
proof_strategy: iff
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Group Theory"
      url: "https://www.jmilne.org/math/CourseNotes/GT.pdf"
pipeline_run: null
---

## Statement

For a short exact sequence

$$1\to N\mathrel{\mathop{\to}^{i}}G\mathrel{\mathop{\to}^{\pi}}H\to1,$$

the following are equivalent:

1. there is a homomorphic section $s:H\to G$ of $\pi$;
2. $\ker\pi$ has a complement $K$ in $G$;
3. $G$ is isomorphic to $(\ker\pi)\rtimes H$ by an isomorphism compatible with the injection and quotient maps.

For a section $s$, the action is $h\cdot n=s(h)ns(h)^{-1}$.

## Facts & Assumptions

**Given:** The displayed short exact sequence.

[L1] A section satisfies $\pi s=\operatorname{id}_H$, and a complement $K$ satisfies $G=(\ker\pi)K$ and $(\ker\pi)\cap K=\{1\}$ ([[def-split-extension-of-groups]]).

[L2] An internal semidirect product is isomorphic to the external product defined by its conjugation action ([[thm-internal-external-semidirect-product-equivalence]]).

[L3] The first isomorphism theorem identifies the quotient by a kernel with the image ([[thm-first-isomorphism-theorem-groups]]).

[L4] A homomorphism is injective exactly when its kernel is trivial ([[thm-group-homomorphism-injective-iff-trivial-kernel]]).

## Proof

**Proof technique:** iff.

1.1 Suppose $s$ is a section and put $K=s(H)$. If $s(h)\in\ker\pi$, then $h=\pi s(h)=1$, so $s$ is injective by [L4] and $K\cap\ker\pi=\{1\}$. [L1, L4]

1.2 Conversely, suppose $K$ is a complement. The restriction $\pi|_K$ is injective because its kernel is $K\cap\ker\pi$, and it is surjective because $G=(\ker\pi)K$ and $\pi$ kills the first factor. Thus it is an isomorphism by [L3] and [L4]. [L1, L3, L4]

2.1 For $g\in G$, put $h=\pi(g)$. Then $gs(h)^{-1}\in\ker\pi$, so $g\in(\ker\pi)K$. Hence $K$ is a complement, and [L2] gives the compatible semidirect-product decomposition with the stated conjugation action. [step 1.1, L1, L2]

3.1 The inverse $s=(\pi|_K)^{-1}:H\to K\hookrightarrow G$ is a homomorphic section. Finally, any compatible external semidirect decomposition supplies its canonical complement and hence a section by the same construction. [step 1.2, L1, L2] ∎
