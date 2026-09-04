---
id: lem-kernel-subgroup-in-a-group-extension-is-normal-and-the-quotient-is-the-base
kind: lemma
title: "In a group extension the kernel is normal and the quotient recovers the base"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-split-extension-of-groups, thm-image-subgroup-and-kernel-normal, thm-first-isomorphism-theorem-groups]
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
    - title: "J. S. Milne, Group Theory"
      url: "https://www.jmilne.org/math/CourseNotes/GT.pdf"
---

## Statement

Let

$$1\to N\xrightarrow{i}E\xrightarrow{\pi}Q\to1$$

be a group extension. Then $i(N)=\ker\pi$ is a normal subgroup of $E$, and the
quotient $E/i(N)$ is canonically isomorphic to $Q$.

## Facts & Assumptions

**Given:** The displayed short exact sequence of groups.

[L1] In a short exact sequence, the image of the first map equals the kernel of
the second ([[def-split-extension-of-groups]]).

[L2] The kernel of a group homomorphism is a normal subgroup of its domain
([[thm-image-subgroup-and-kernel-normal]]).

[L3] The first isomorphism theorem identifies the quotient by the kernel with
the image ([[thm-first-isomorphism-theorem-groups]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], $i(N)=\ker\pi$. Since $\ker\pi$ is normal in $E$ by [L2], the subgroup $i(N)$ is normal in $E$. [L1, L2]

2.1 The map $\pi$ is surjective because the sequence is exact, so its image is $Q$. Applying [L3] to $\pi$ and using step 1.1 gives $E/i(N)=E/\ker\pi\cong Q$. [L1, L3, step 1.1] ∎
