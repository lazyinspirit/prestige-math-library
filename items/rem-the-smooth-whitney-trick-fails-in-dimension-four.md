---
id: rem-the-smooth-whitney-trick-fails-in-dimension-four
kind: remark
title: The smooth Whitney trick fails in dimension four
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
provenance:
  statement: ai-altered
  proof: not-applicable
deps: []
sources:
  references:
  - title: Andrew Ranicki, Algebraic and Geometric Surgery (Oxford Mathematical Monographs, Oxford University Press
      2002; complete electronic copy)
    url: https://math.uchicago.edu/~shmuel/tom-readings/ranicki-intro
    locator: 'Remark 7.29, printed p. 140 (for $m=4$ the Whitney trick is possible only in special cases and is
      much harder: Freedman, Freedman-Quinn)'
  - title: John Milnor, Lectures on the h-Cobordism Theorem (notes by L. Siebenmann and J. Sondow, Princeton University
      Press 1965; scanned edition with searchable text layer)
    url: https://www.maths.ed.ac.uk/~v1ranick/surgery/hcobord.pdf
    locator: Remark 2 after Corollary 6.5, printed p. 70 (the dimension restriction on the cancellation theorem
      and the cases left unchecked)
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
dependency_level: 0
---

## Remark

**Recorded in the boundary case of this page, not used as a prerequisite by any result above.** For $m=4$ and complementary sheets $A^2,B^2\subseteq X^4$ the dimension counts of the stable range collapse: the sufficient stable-range inequalities $a,b\le m-3=1$ fail, the interior intersections of a null-homotopy disk with the sheets have dimension $0$ rather than $-1$, and a surface in a $4$-manifold generically has isolated self-intersections which are not removable by dimension count. The failure is not an artefact of the proof: in the smooth category the four-dimensional Whitney trick is genuinely obstructed, and obstructions to cleaning immersed disks include the non-sliceness of knots; successful four-dimensional statements require the additional structure of Freedman-Quinn theory in the topological category or further hypotheses in the smooth category. Consequently no result on this page asserts the trick for $m=4$, and the borderline theorem above is stated only for $m\ge5$ with the codimension-two hypothesis and the fundamental-group complement condition.

The bookkeeping of the failure is elementary and worth recording precisely. A null-homotopy disk has a two-dimensional interior, and generically it meets a sheet $A^a\subseteq X^m$ in dimension $a+2-m$; negative expected dimensions guarantee that a transverse disk interior avoids both sheets when $a+2<m$ and $b+2<m$, equivalently $a,b\le m-3$. These are sufficient generic-avoidance conditions, not necessary conditions for a particular disk to be clean. For $m=4$ and $a=b=2$ this count gives intersections of dimension $0$, not the $-1$ of the stable range, so a transverse disk interior may meet the sheets in isolated points whose absence the general-position lemma cannot guarantee; and the self-intersections of a generic surface in a $4$-manifold are likewise isolated, so the dimension count fails for them too. This remark is a recorded boundary and carries no proof obligation: it is used by no item of this page, and it is cited only to explain why the main theorem and the borderline theorem stop where they do. The two source locators above record the statements consulted: Ranicki's remark that the four-dimensional Whitney trick requires the special Freedman-Quinn theory, and Milnor's restriction of the cancellation theorem to the dimensions he checks.
