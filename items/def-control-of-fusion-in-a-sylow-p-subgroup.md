---
id: def-control-of-fusion-in-a-sylow-p-subgroup
kind: definition
title: "Control of fusion in a sylow p subgroup"
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-sylow-p-subgroup, def-conjugacy-class-and-centralizer, def-subgroup, def-normalizer-of-a-subgroup]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "Paul Flavell, An Introduction to Transfer and Fusion in Finite Groups, §§2–5"
      url: "https://web.mat.bham.ac.uk/P.J.Flavell/fusion.pdf"
      locator: "§§2–5, PDF pp. 1–15"
    - title: "Hans Kurzweil and Bernd Stellmacher, The Theory of Finite Groups, §§7.1–7.2"
      url: "https://homes.psd.uchicago.edu/~sethi/Teaching/P342-W2017/Kurzweil-Stellmacher_Theory%20of%20finite%20groups.pdf"
      locator: "§§7.1–7.2, printed pp. 163–171"
verification:
  precheck: n/a
---

## Definition

Let $G$ be a finite group, $p$ a prime, and $P\in\operatorname{Syl}_p(G)$ a
Sylow $p$-subgroup ([[def-sylow-p-subgroup]]). Following the convention
$x^{g}=gxg^{-1}$ of [[def-conjugacy-class-and-centralizer]], we say that

$$P \text{ controls fusion in } P \text{ with respect to } G$$

when, for all $x,y\in P$, the existence of $g\in G$ with $y=x^{g}$ implies the
existence of $u\in P$ with $y=x^{u}$. Equivalently: any two elements of $P$ that
are $G$-conjugate are already conjugate by an element of $P$; equivalently, the
conjugacy class of $x$ in $G$ meets $P$ in exactly the conjugacy class of $x$
under $P$ ([[def-subgroup]], [[def-normalizer-of-a-subgroup]]).

**What is and is not claimed.** This is a statement about *element* fusion only:
it says nothing about when two subgroups of $P$ are conjugate in $G$, and
nothing about elements of $G$ outside $P$. It is a property of the pair $(G,P)$,
and it is invariant under conjugating $P$: if $g\in G$ and the Sylow $P$ controls
fusion in $P$ with respect to $G$, then $P^{g}=gPg^{-1}$ controls fusion in
$P^{g}$ with respect to $G$, because $y=x^{u}$ implies $y^{g}=(x^{g})^{gug^{-1}}$ and
$gug^{-1}\in P^{g}$ whenever $u\in P$. Control by $P$ implies
control by $N_G(P)$, since $P\le N_G(P)$: every conjugating element supplied
inside $P$ also belongs to $N_G(P)$. When $N_G(P)=P$ the two conditions are
identical, but this equality alone does not assert that either condition holds.
