---
id: def-finite-thom-classifying-detector-map
kind: definition
title: "Finite Thom classifying detector map"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps:
  - thm-stable-unoriented-thom-cohomology-is-free-over-the-square-algebra
  - def-degreewise-mod-two-cohomology-of-the-universal-thom-prespectrum
  - lem-stable-thom-cohomology-is-degreewise-eventually-constant
  - thm-eilenberg-maclane-spaces-represent-singular-cohomology
  - def-axiom-of-choice
  - thm-product-universal-property
  - def-mod-two-square-algebra-admissible-sequences-and-excess
justified_by:
  - lem-finite-thom-classifying-detector-map-exists-and-is-continuous
dependency_level: 8
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Tom Weston, An Introduction to Cobordism Theory"
      url: "https://math.stanford.edu/~ralph/morsecourse/cobordismintro%20.pdf"
      locator: "§13, printed pp. 24–25: classifying maps to Eilenberg–Mac Lane spaces and the strict comparison range; the finite generator product is constructed locally."
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Definition

Assume AC. Let $\mathcal A$ be the mod-two square algebra acting on $M=\widehat H^*(TO;\mathbb F_2)$, let $\mathcal A^+=\bigoplus_{j>0}\mathcal A^j$ be its positive-degree ideal, and put $Q=M/\mathcal A^+M$ as in the freeness theorem. Fix once and for all a homogeneous basis $B=\coprod_{d\ge0}B_d$ of $Q$ and a degree-preserving section $s:Q\to M$ of the quotient map, using AC; these choices are shared by every rank. For $b\in B_d$ set $m_b=s(b)$ and $d_b=d$. For each $r\ge2$, set $B(r)=\bigcup_{0\le d<r}B_d$. The freeness theorem makes all $m_b$, for $b\in B$, a homogeneous free $\mathcal A$-basis of $M$. Via the eventual-constancy isomorphism $M^d\cong\widetilde H^{r+d}(T_r;\mathbb F_2)$, let $\bar m_{b,r}$ be the rank-r coordinate of the same fixed $m_b$, and choose a based representative $f_{r,b}:T_r\to K(\mathbb F_2,r+d_b)$ of its representing class. Set $P_r=\prod_{b\in B(r)}K(\mathbb F_2,r+d_b)$ and define the candidate based detector $f_r:T_r\to P_r$ by its coordinate maps. The same basis and lifts are used at every rank, so the coordinates are compatible with prespectrum stabilization. The finite existence and continuity argument is recorded in [[lem-finite-thom-classifying-detector-map-exists-and-is-continuous]].

The construction fixes one global homogeneous $\mathbb F_2$-basis $B$ of $Q$ and one degree-preserving section $s$ of the quotient map, used at every rank; a given detector sees only the finite initial segment $B(r)$. The freeness theorem identifies the lifts $m_b=s(b)$ as a free $\mathcal A$-basis of $M$, and the eventual-constancy lemma identifies each stable class with its rank-$r$ coordinate whenever $r>d_b$. The finiteness of $B(r)$, the existence of the based representing maps $f_{r,b}$, and the continuity of $f_r$ are proved in [[lem-finite-thom-classifying-detector-map-exists-and-is-continuous]]. The same basis and lifts are used in every rank, so no new choice enters the suspension-compatibility computation.
