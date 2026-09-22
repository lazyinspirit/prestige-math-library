---
id: cex-a-disconnected-compact-group-element-outside-every-identity-component-torus
kind: counterexample
title: A disconnected element outside every identity-component torus
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-torus-and-maximal-torus-in-a-compact-lie-group]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-22
sources:
  references:
    - title: "Brian Conrad and Aaron Landesman, Compact Lie Groups"
      url: "https://math.stanford.edu/~conrad/210CPage/handouts/lie_groups_notes.pdf"
      locator: "§7–§8 (connectedness hypotheses)"
proof_strategy: direct
---

## Statement refuted

Every element of the compact Lie group $O(2)$ lies in a torus contained in its
identity component.

## Facts & Assumptions

**Given:** The group $O(2)$ of orthogonal $2\times2$ matrices with determinant $\pm1$, its identity component $SO(2)$, and a reflection $r\in O(2)$.

[L1] $O(2)$ is a compact Lie group whose identity component is $SO(2)$, and a torus is a compact *connected* abelian Lie group; a maximal torus of a group is a torus subgroup maximal under inclusion ([[def-torus-and-maximal-torus-in-a-compact-lie-group]]).

[L2] The determinant is a continuous homomorphism $O(2)\to\{\pm1\}$; every connected subset of $\{\pm1\}$ is a singleton, so every connected subgroup of $O(2)$ lies in the kernel $SO(2)$ of the determinant ([[def-torus-and-maximal-torus-in-a-compact-lie-group]]).

## Counterexample

**Proof technique:** direct.

1.1 A reflection is an orthogonal matrix with determinant $-1$, so $r\notin SO(2)=O(2)^0$. [L1]

1.2 Every torus contained in the identity component is a connected subgroup of $O(2)$ lying in $SO(2)$; by [L2] every connected subgroup of $O(2)$ lies in the kernel of the determinant, so no torus of the identity component contains $r$. [L1, L2]

2.1 Hence $r$ is an element of the compact Lie group $O(2)$ that lies in no torus of the identity component, refuting the asserted statement and showing that connectedness of the ambient group is a necessary hypothesis for the torus-containment theorems. [L1, step 1.1, step 1.2] ∎
