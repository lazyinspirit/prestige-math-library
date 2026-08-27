---
id: thm-minimal-normal-subgroups-of-faithful-primitive-groups-are-transitive
kind: theorem
title: "Minimal normal subgroups of faithful primitive groups are transitive"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-minimal-normal-subgroup-and-socle, thm-normal-subgroups-of-a-primitive-action-are-transitive-or-kernel-contained]
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Group Theory, Chapter 4"
      url: "https://web.archive.org/web/20251127151005if_/https://www.jmilne.org/math/CourseNotes/GT.pdf"
    - title: "Leonard H. Soicher, Primitive permutation groups"
      url: "https://web.archive.org/web/20180712185154if_/http://www.maths.qmul.ac.uk:80/~lsoicher/designtheory.org/library/encyc/topics/primitive.pdf"
---

## Statement

Let $G \le \operatorname{Sym}(\Omega)$ be finite, faithful, and primitive, and let
$N \trianglelefteq G$ be a minimal normal subgroup. Then $N$ acts transitively
on $\Omega$.

## Facts & Assumptions

**Given:** A finite faithful primitive action of $G$ on $\Omega$ and a minimal normal subgroup $N \trianglelefteq G$.

[L1] In a primitive action, every normal subgroup is either transitive or
contained in the kernel
([[thm-normal-subgroups-of-a-primitive-action-are-transitive-or-kernel-contained]]).

[A1] A faithful action has trivial kernel.

## Proof

**Proof technique:** direct.

1.1 By [L1], the normal subgroup $N$ is either transitive or contained in the kernel of the action. [given, L1]

2.1 The action is faithful, so [A1] gives trivial kernel. Because $N$ is a minimal normal subgroup, it is nontrivial, so the kernel-contained alternative from step 1.1 is impossible. Hence $N$ is transitive. [A1, step 1.1] ∎ 
