---
id: def-green-exceptional-intersection-families
kind: definition
title: Green exceptional intersection families
deps: [def-relative-projectivity, def-vertex-and-source-of-an-indecomposable-module]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Saunders, Modular Representation Theory, Lemmas 4.18–4.19 and 4.35–4.38,
        Theorem 4.34
      url: https://jpsaunders.uk/ModRep/NotesWebsite.pdf
    - title: Lassueur–Farrell, Chapter 7, §29, Theorem 29.4 and proof
      url: https://www.niamhfarrell.com/uploads/6/9/2/8/69286633/upload2.pdf
status: published
origin: pipeline
---

## Definition

Fix a finite group $G$, a field $k$ of characteristic $p>0$, a $p$-subgroup $P$, and $N_G(P)\leq H\leq G$. All modules considered on this page are finite dimensional left modules; indecomposable means nonzero and not a direct sum of two nonzero submodules. Put ${}^gQ=gQg^{-1}$ and define the finite subgroup families

$$\mathcal X=\{P\cap{}^gP:g\in G\setminus H\},\qquad \mathcal Y=\{H\cap{}^gP:g\in G\setminus H\}.$$

For a subgroup $Q$ and a family $\mathcal F$, write $Q\leq_K\mathcal F$ if some $x\in K$ and $T\in\mathcal F$ satisfy ${}^xQ\leq T$. Define

$$\mathcal Z=\{Q\leq P:Q\not\leq_G\mathcal X\}.$$

For a family of subgroups of an ambient group $K$, a $kK$-module is **relatively $\mathcal F$-projective** when each of its indecomposable direct summands is relatively $T$-projective for some $T\in\mathcal F$, in the sense of [[def-relative-projectivity]]. This quantifies over summands without choosing a decomposition. The zero module qualifies for every family, including the empty family.

Having a **vertex in $\mathcal Z$** means that at least one vertex, as defined in [[def-vertex-and-source-of-an-indecomposable-module]], is literally a member of $\mathcal Z$. For $H=G$ the families $\mathcal X,\mathcal Y$ are empty and $\mathcal Z$ consists of all subgroups of $P$. If $P=1$, then $N_G(P)=G$, so $H=G$. Members of $\mathcal Y$ are subgroups of $H$; this definition makes no smaller-order assertion about them.

The definition uses only the inducing-summand clause of relative projectivity, not its arbitrary-dimensional projectivity comparison. No choice principle or existence theorem for vertices is asserted here.
