---
id: cor-finitely-generated-pro-p-homomorphisms-are-surjective-iff-surjective-mod-frattini
kind: corollary
title: "A homomorphism of finitely generated pro-p groups is surjective exactly when the induced map on Frattini quotients is surjective"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-topological-burnside-basis-theorem]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Gareth Wilkes, Profinite Groups and Group Cohomology lecture notes"
      url: "https://www.dpmms.cam.ac.uk/~grw46/LectureNotes.pdf"
    - title: "Alexander Lubotzky, Combinatorial group theory for pro-p groups"
      url: "https://www.researchgate.net/publication/242982224_Combinatorial_group_theory_for_pro-p_groups"
---

## Statement

Let $f:G\to H$ be a continuous homomorphism of finitely generated pro-$p$
groups. Then $f$ is surjective if and only if the induced linear map
$G/\Phi(G)\to H/\Phi(H)$ is surjective.

## Facts & Assumptions

**Given:** A continuous homomorphism $f:G\to H$ of finitely generated pro-$p$ groups.

[L1] In a finitely generated pro-$p$ group, a subset topologically generates
the group exactly when its image spans the Frattini quotient
([[thm-topological-burnside-basis-theorem]]).

## Proof

**Proof technique:** direct.

1.1 If $f$ is surjective, then every quotient map induced by $f$, including $G/\Phi(G)\to H/\Phi(H)$, is surjective. [given]

1.2 Conversely, suppose $G/\Phi(G)\to H/\Phi(H)$ is surjective, and let $K:=f(G)\le H$. The image of $K$ in $H/\Phi(H)$ is all of $H/\Phi(H)$ by hypothesis, so [L1] says that $K$ topologically generates $H$. But $K$ is compact as the continuous image of the profinite group $G$, hence closed in the Hausdorff group $H$. A closed subgroup whose closure is all of $H$ must equal $H$, so $f$ is surjective. [L1, given, algebra]

2.1 Steps 1.1 and 1.2 prove both implications. In the trivial-group boundary case, both maps are automatically surjective. [step 1.1, step 1.2] ∎
