---
id: thm-choice-bernstein-set-pathology
kind: theorem
title: "Choice gives a Bernstein set with no perfect-set, Baire or measure regularity"
status: published
origin: pipeline
deps: ["def-axiom-of-choice", "thm-well-ordering-theorem", "thm-bernstein-sets-exist-under-a-well-ordering-of-r", "def-bernstein-set-on-r", "cor-a-bernstein-set-is-not-lebesgue-measurable", "thm-a-bernstein-set-has-inner-measure-zero-and-full-outer-measure-in-every-interval", "lem-baire-property-sigma-algebra-and-borel-regularity", "thm-nested-interval-property", "lem-rat-embeds-dense", "thm-rationals-countable", "def-perfect-set-r", "cor-archimedean-reciprocal", "thm-recursion"]
justified_by: []
forward_refs: []
landmark: false
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  scraped: []
  references:
    - title: "complete Theorems 6.3.6–6.3.8, printed pp102–103, read 2026-09-09; the shrinking rational-interval proof here supplies category closure directly."
      url: "https://community.wvu.edu/~kciesiel/ProfessionalStuff/Other/ElectronicReprints/B2IntSetThe.pdf"
    - title: "Proposition 10.13 p101; use existing real-line supplier rather than duplicate its existence proof."
      url: "https://andreas-lietz.github.io/resources/PDFs/Lecture_Notes.pdf"
---
## Statement

Assume AC. There is a Bernstein $B\subseteq\mathbb R$. Both B and its complement are uncountable, contain no nonempty perfect subset, lack the Baire property, are not Lebesgue measurable and are not Borel. Moreover $\lambda_*(B)=0$ and $\lambda^*(B\cap I)=\lambda(I)$ for every nondegenerate bounded interval I. Existence alone needs only a well-order of $\mathbb R$; the measure conclusions here use the stronger AC assumption.

## Facts & Assumptions

[F1] [[thm-well-ordering-theorem]] well-orders the real line under AC.

[F2] [[thm-bernstein-sets-exist-under-a-well-ordering-of-r]] supplies a Bernstein set from that well-order.

[F3] [[def-bernstein-set-on-r]] says every nonempty perfect set meets both sides; [[def-perfect-set-r]] means closed with no isolated points.

[F4] [[thm-a-bernstein-set-has-inner-measure-zero-and-full-outer-measure-in-every-interval]] gives the stated measure values under countable choice.

[F5] [[cor-a-bernstein-set-is-not-lebesgue-measurable]] gives nonmeasurability under countable choice.

[F6] [[lem-baire-property-sigma-algebra-and-borel-regularity]] gives Borel inclusion and the meagre ideal under AC.

[F7] [[thm-nested-interval-property]] gives a unique point in nested nonempty bounded closed intervals whose lengths tend to zero.

[F8] [[lem-rat-embeds-dense]] and [[thm-rationals-countable]] give rational refinements and fixed natural codes.

[F9] [[cor-archimedean-reciprocal]] gives arbitrarily small reciprocal bounds; [[thm-recursion]] gives prescribed length recursion.

[A1] Assume [[def-axiom-of-choice]].

## Proof

**Given:** AC and the indicated real-line conventions.

1.1 By F1 and A1 fix a well-order of $\mathbb R$ and apply F2 to obtain Bernstein B. Its complement is Bernstein too, since F3's two intersection conditions are symmetric. Neither side contains a nonempty perfect P: such P must also meet the other side by F3, contrary to containment. [F1, F2, F3, A1]

1.2 We prove the category avoidance needed below. Given a nonempty open interval J and a sequence of closed nowhere dense F_n, choose the least rational bounded interval I_empty of length less than one with closure inside $J\setminus F_0$. Given I_s at depth n, choose the least coded pair of rational nonempty child intervals with disjoint closures inside $I_s\setminus F_{n+1}$ and lengths less than $1/(n+2)$. Such pairs exist: the complement of the closed nowhere dense set has a nonempty open piece in I_s; that piece contains two separated rational intervals by F8. F9's recursion, with defaults outside valid histories, constructs all levels, and the preceding existence proves defaults unused. Put $K=\bigcap_n\bigcup_{|s|=n}\overline{I_s}$. Each level is closed (a finite union), so K is closed. [F8, F9]

2.1 Each binary branch gives nested nonempty bounded closed intervals with lengths tending to zero by F9; F7 supplies its unique point, inside J and outside every F_n. Hence K is nonempty. A point of K has a unique interval at each level by disjoint sibling closures and determines a branch, so these are exactly K's points. For x in K and $\epsilon>0$, take a level interval on its branch of length less than $\epsilon$. Follow the opposite child at the next level and then always the left child. F7 supplies a different point of K in that same parent interval, by disjoint child closures; its distance from x is less than $\epsilon$. Thus K has no isolated point and is a nonempty perfect set by F3. [F3, F7, F9, step 1.2]

3.1 No Bernstein set is meagre: otherwise close its nowhere dense covering witnesses and apply step 2.1 in (0,1) to obtain a nonempty perfect set missing it, contrary to F3. If B had the Baire property, choose open U and closed nowhere dense F_n covering $B\triangle U$. If U were empty B would be meagre, already excluded. Otherwise choose an interval J inside U and use step 2.1 to find nonempty perfect $K\subseteq J\setminus\bigcup_n F_n\subseteq B$, contradicting step 1.1. The same argument applies to the complement. Countable real sets are meagre, since singletons are closed nowhere dense and an enumeration (padded for finite sets) supplies witnesses; hence neither side is countable. By F6 and A1 every Borel set has the Baire property, so neither side is Borel. [F3, F6, A1, step 1.1, step 2.1]

4.1 AC supplies countable choice: a choice function on the range of a sequence of nonempty sets, composed with that sequence, chooses its terms. Therefore F4 and F5 apply to B and to its Bernstein complement from step 1.1. F5 gives nonmeasurability of both. F4 gives inner measure zero and the exact outer measure value for B in every specified interval, regardless of its endpoint convention. These conclude all assertions. QED. [F4, F5, A1, step 1.1]
