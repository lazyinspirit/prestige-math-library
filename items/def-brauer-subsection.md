---
id: def-brauer-subsection
kind: definition
title: Brauer subsections and B-subsections
status: draft
origin: pipeline
deps: [def-p-section-of-a-p-element, lem-central-p-subgroups-lie-in-every-block-defect-group, def-induced-block-from-a-subgroup, lem-block-induction-exists-under-centralizer-containment, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Craven, The Brauer Correspondence, section 1.5 and Theorem 1.19, pp. 13–16"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/theses/2004diss.pdf"
    - title: "Aschbacher–Kessar–Oliver, Fusion Systems in Algebra and Topology, Theorems 5.4–5.5, pp. 276–278"
      url: "https://www.math.univ-paris13.fr/~bobol/ako.pdf"
---

## Definition

Assume the Axiom of Choice, and fix a splitting $p$-modular system for a
finite group $G$. A **Brauer subsection** of $G$ is a pair $(u,c)$ in which
$u\in G$ is a $p$-element and $c$ is a block of $kC_G(u)$. Subsections are
considered up to simultaneous $G$-conjugacy:
$$  (u,c)\sim (gug^{-1},gcg^{-1})\qquad(g\in G).$$
For a block $B$ of $kG$, the pair is a **$B$-subsection** when the induced
block $c^G$ is $B$, in the local-to-global sense of
[[def-induced-block-from-a-subgroup]]. The associated $p$-section is
$S_G(u)$ from [[def-p-section-of-a-p-element]].

## Well-definedness and conventions

Let $H=C_G(u)$. The subgroup $\langle u\rangle$ is a central $p$-subgroup of
$H$, so every defect group $D$ of $c$ contains $\langle u\rangle$ by
[[lem-central-p-subgroups-lie-in-every-block-defect-group]]. Hence
$$  C_G(D)\leq C_G(u)=H,$$
and [[lem-block-induction-exists-under-centralizer-containment]] proves that
$c^G$ is defined. Thus the notation does not silently assume the existence
of an induced block.

Conjugation by $g$ identifies the block bimodule $c$ with the block bimodule
$gcg^{-1}$ and carries every restriction summand in the definition of block
induction to the corresponding conjugate summand. A global block ideal is
fixed by inner conjugation because its idempotent is central. Therefore
$$  (gcg^{-1})^G=c^G,$$
so the condition $c^G=B$ depends only on the subsection's conjugacy class.
For $u=1$, the centralizer is $G$, the induced block is $c$ itself, and the
definition reduces to the pairs $(1,B)$. The Axiom of Choice is used only to
discharge the inherited published block-support and block-induction
contracts; forming these finite conjugacy classes adds no choice
([[def-axiom-of-choice]]).
