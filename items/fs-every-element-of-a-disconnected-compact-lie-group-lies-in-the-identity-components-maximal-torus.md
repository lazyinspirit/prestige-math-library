---
id: fs-every-element-of-a-disconnected-compact-lie-group-lies-in-the-identity-components-maximal-torus
kind: false-statement
title: Disconnected elements need not lie in identity-component tori
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-torus-and-maximal-torus-in-a-compact-lie-group, def-lie-group]
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
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed."
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter IV §4 (connectedness in the torus-containment theorems)"
proof_strategy: direct
---

## Statement

Every element of a disconnected compact Lie group lies in a maximal torus of its
identity component.

## Facts & Assumptions

**Given:** The group $G:=\mathbb Z/2=\{0,1\}$ with the discrete topology, and the definition of a torus.

[L1] A torus is a compact connected abelian Lie group, and a maximal torus of a compact Lie group is a torus subgroup maximal under inclusion; a connected subgroup of a discrete group is a singleton ([[def-torus-and-maximal-torus-in-a-compact-lie-group]]).

[L2] $\mathbb Z/2$ is a compact Lie group of dimension zero; its identity component is the singleton $\{0\}$, and the element $1$ is different from $0$ ([[def-lie-group]], [[def-torus-and-maximal-torus-in-a-compact-lie-group]]).

## Refutation

**Proof technique:** direct.

1.1 The group $\mathbb Z/2$ is discrete, so it is a compact zero-dimensional Lie group; its identity component is the connected component of $0$, which is the singleton $\{0\}$, and the element $1\ne0$ is not in it. [L2]

1.2 Every connected subgroup of the discrete group $\mathbb Z/2$ is a singleton by [L1], so the only torus contained in the identity component is the trivial torus $\{0\}$; it is the unique maximal torus of the identity component. [L1]

2.1 The nonidentity element $1$ does not lie in $\{0\}$, so it lies in no torus of the identity component; hence the asserted statement fails already for the compact Lie group $\mathbb Z/2$, and connectedness of the ambient group is a necessary hypothesis for torus-containment theorems. [L1, step 1.1, step 1.2] ∎
