---
id: lem-author-9b7c42e8f103-open-j-chambers
kind: lemma
title: Full-dimensional J-chambers lie in the relative interior
status: draft
domain: mathematics
origin: pipeline
deps:
  - lem-author-9b7c42e8f103-coordinate-faces
  - prop-tits-domain-interface-artin-tits-prerequisites
dependency_roles:
  lem-author-9b7c42e8f103-coordinate-faces: mathematical-premise
  prop-tits-domain-interface-artin-tits-prerequisites: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: Osamu Iyama and Michael Wemyss, Tits Cone Intersections and Applications,
        author-hosted draft
      url: https://www.maths.gla.ac.uk/~mwemyss/MainFile_for_web.pdf
      hypotheses: Finite Coxeter graph, canonical real reflection representation and
        dual action; arbitrary vertex subset J, not required spherical. Our I is
        the source secondary subset, and our J is the source fixed subset.
      reading_limits: Retrieved this author-hosted PDF and read §§1.3–1.5 definitions
        and Theorem 1.12 statement (printed pp. 4–7); visually inspected PDF pp.
        30–31 for the subset notation and labels. No source proof review or
        claim of local reconstruction; no infinite-rank topology or
        local-finiteness result imported.
      locator: Definition 1.6(1), printed p. 6 (PDF p. 30)
      statement: Iyama–Wemyss, Definition 1.6(1), calls $xC_I$ a $J$-chamber precisely
        when $xC_I\subseteq E_J$ and $|I|=|J|$, with $x$ representing a coset in
        $W/W_I$.
dependency_level: 2
---

## Statement

Let $(W,S)$ be a finite-rank Coxeter system in its canonical real representation $V=\mathbb R^S$, with basis $(\alpha_s)$, dual $\Theta$, root system $\Phi$, contragredient action, and Tits cone $U$. For $I\subseteq S$ put $E_I=\{f:f(\alpha_i)=0\ (i\in I)\}$ and $C_I=\{f\in E_I:f(\alpha_s)>0\ (s\notin I)\}$. Fix $J\subseteq S$ and put $E=E_J$, $T=U\cap E$, and $T^\circ=\operatorname{int}_E T$. If $x\in W$, $I\subseteq S$, $xC_I\subseteq E$ and $|I|=|J|$, then $xE_I=E$, the set $xC_I$ is open in $E$, and $xC_I\subseteq T^\circ$. In particular every Iyama–Wemyss $J$-chamber lies in $T^\circ$.

## Statement references

[[lem-author-9b7c42e8f103-coordinate-faces]]

[[prop-tits-domain-interface-artin-tits-prerequisites]]

## External input

Iyama–Wemyss, Definition 1.6(1), calls $xC_I$ a $J$-chamber precisely when $xC_I\subseteq E_J$ and $|I|=|J|$, with $x$ representing a coset in $W/W_I$.

## Facts & Assumptions

[F1] Coordinate faces and their translates span their annihilator spaces and are relatively open by [[lem-author-9b7c42e8f103-coordinate-faces]].

[F2] The dual Coxeter action is invertible and $U$ contains every $xC_I$ by [[prop-tits-domain-interface-artin-tits-prerequisites]].

## Proof
**Given:** The objects and hypotheses of the statement. **Goal:** Establish its conclusion.


Iyama–Wemyss, Definition 1.6(1), calls $xC_I$ a $J$-chamber precisely when $xC_I\subseteq E_J$ and $|I|=|J|$, with $x$ representing a coset in $W/W_I$.


1.1 By [F1], the inclusion $xC_I\subseteq E$ implies $xE_I\subseteq E$. Both spaces have dimension $|S|-|J|$, because $x$ is invertible and $|I|=|J|$. Hence $xE_I=E$, and [F1] makes $xC_I$ open in $E$. [F1, F2, given, algebra]

2.1 By [F2], $xC_I\subseteq U\cap E=T$. An open subset of $E$ contained in $T$ lies in $\operatorname{int}_E T$. The external definition identifies all source $J$-chambers with sets satisfying these hypotheses, giving the final assertion. [step 1.1, F2, given] ∎

## Source notes

The external statement is used only as explicitly recorded above. It is an independent prerequisite source, not the article under study. The local topology and linear-algebra argument is authored here; the source proof has not been reviewed.
