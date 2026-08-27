---
id: cex-a-domain-of-holomorphy-need-not-be-convex
kind: counterexample
title: "A domain of holomorphy need not be convex"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-holomorphic-extension-and-domain-of-holomorphy,
       thm-identity-theorem-in-several-complex-variables]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Jiří Lebl, Tasty Bits of Several Complex Variables, §2.1"
      url: "https://www.jirka.org/scv/scv.pdf"
    - title: "Harold P. Boas, Lecture Notes on Several Complex Variables, Example 12"
      url: "https://haroldpboas.gitlab.io/courses/650-2007c/notes.pdf"
pipeline_run: null
---

## Statement refuted

Every domain of holomorphy in $\mathbb C^m$ is convex.

## Facts & Assumptions

**Given:** The domain
$$U=\mathbb C^2\setminus\{(z_1,z_2): z_1z_2=1\}.$$

[L1] A domain of holomorphy is characterized by the failure of every common
simultaneous extension pair
([[def-holomorphic-extension-and-domain-of-holomorphy]]).

[L2] A holomorphic function on a connected open set is determined by its values
on any nonempty open subset
([[thm-identity-theorem-in-several-complex-variables]]).

## Counterexample

**Proof technique:** direct.

1.1 The function $f(z_1,z_2)=1/(z_1z_2-1)$ is holomorphic on $U$. Let $p$ be a point of the removed hypersurface $z_1z_2=1$. If $f$ extended holomorphically to a neighborhood $V$ of $p$, then $(z_1z_2-1)F$ would be holomorphic on $V$ and equal to $1$ on the nonempty open set $V\cap U$. By [L2], it would equal $1$ on all of $V$, impossible at $p$ where $z_1z_2-1=0$. So the same function is singular at every boundary point of $U$, and [L1] makes $U$ a domain of holomorphy. [L1, L2, given]

2.1 The points $(2,0)$ and $(0,2)$ lie in $U$, but their midpoint $(1,1)$ lies on the removed hypersurface and therefore is not in $U$. Hence $U$ is not convex. This refutes the statement. [step 1.1, given, algebra] ∎
