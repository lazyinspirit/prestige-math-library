---
id: lem-central-p-subgroups-lie-in-every-block-defect-group
kind: lemma
title: Central p-subgroups lie in every block defect group
status: published
origin: pipeline
deps: [def-brauer-homomorphism-for-a-p-subgroup, thm-defect-groups-are-maximal-brauer-support, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Craven, The Brauer Correspondence, Lemma 1.2, p. 2"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/theses/2004diss.pdf"
    - title: "Meierfrankenfeld, MTH 912 Class Notes, sections 6.6–6.7, pp. 156–165"
      url: "https://web.archive.org/web/20220618221643id_/https://users.math.msu.edu/users/meierfra/Classnotes/MTH912F04/912F04master.pdf"
---

## Statement

Assume the Axiom of Choice. Let $H$ be a finite group, let $Z\leq Z(H)$ be
a $p$-subgroup, and let $c$ be a block idempotent of $kH$. Then $Z$ is
contained in every defect group of $c$.

## Facts & Assumptions

**Given:** AC, the finite group, central $p$-subgroup, and block in the
Statement.

[F1] For a $p$-subgroup $P\leq H$, the Brauer map deletes the coefficients
outside $C_H(P)$ ([[def-brauer-homomorphism-for-a-p-subgroup]]).

[F2] If the Brauer image of a block at $P$ is nonzero, then $P$ is contained
in an $H$-conjugate of every defect group of that block
([[thm-defect-groups-are-maximal-brauer-support]]).

[F3] AC is available ([[def-axiom-of-choice]]). It is used only to discharge
the current published dependency contract behind F2; the displayed finite
group argument makes no additional choice.

## Proof

1.1 Since $Z$ is central, $C_H(Z)=H$. Consequently F1 gives $$ \operatorname{Br}_Z(c)=c. $$ The primitive idempotent $c$ is nonzero, so F2 says that for every defect group $D$ of $c$ there is an $h\in H$ such that $Z\leq hDh^{-1}$. [F1, F2, F3]

2.1 Conjugating this containment by $h^{-1}$ gives $h^{-1}Zh\leq D$. Centrality gives $h^{-1}Zh=Z$, and hence $Z\leq D$. This includes $Z=1$ and applies to each defect group separately. [step 1.1] ∎

