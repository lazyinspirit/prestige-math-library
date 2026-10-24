---
id: def-s-dense-open-and-s-rational-map
kind: definition
title: "S-dense open subschemes and S-rational maps"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
deps:
  - def-rational-map-integral-schemes
  - def-smooth-morphism-schemes
  - def-scheme-theoretic-fibre
  - def-open-immersion-schemes
  - def-locally-noetherian-and-noetherian-scheme
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "S. Bosch, W. Lutkebohmert, M. Raynaud, Neron Models, Ergebnisse der Mathematik und ihrer Grenzgebiete (3) 21, Springer 1990 (2.5 S-Rational Maps, from the section opening through Proposition 6; Chapters 1-6, 7.2, 8.1)"
      url: "https://www.math.stonybrook.edu/~kamenova/homepage_files/Bosch_Raynaud_Neron_Model_tc.pdf"
---

## Definition

Let $S$ be a locally Noetherian scheme ([[def-locally-noetherian-and-noetherian-scheme]]) and let $X$ and $Y$ be smooth $S$-schemes ([[def-smooth-morphism-schemes]]). An open subscheme $U\subseteq X$ ([[def-open-immersion-schemes]]) is **$S$-dense** if for every $s\in S$ the fibre $U_s=U\times_S\operatorname{Spec}k(s)$ is Zariski dense in the fibre $X_s=X\times_S\operatorname{Spec}k(s)$ ([[def-scheme-theoretic-fibre]]). Fiberwise, $(U\cap V)_s=U_s\cap V_s$ and the intersection of two dense open subsets of a topological space is dense; hence finite intersections of $S$-dense open subschemes of $X$ are again $S$-dense in $X$. Similarly, if $U$ is $S$-dense and open in $X$ and $V\subseteq X$ is open, then $U\cap V$ is $S$-dense in $V$, since $(U\cap V)_s=U_s\cap V_s$ is dense in $V_s$.

An **$S$-rational map** $u:X\dashrightarrow Y$ is an equivalence class of $S$-morphisms $U\to Y$ defined on $S$-dense open subschemes $U\subseteq X$, where two such morphisms $U\to Y$ and $U'\to Y$ are equivalent if they coincide on an $S$-dense open subscheme of $U\cap U'$. We say $u$ is defined at a point $x\in X$ if some representative is defined on an open subscheme containing $x$. The union of the domains of all representatives is an $S$-dense open subscheme $\operatorname{dom}(u)$, the **domain of definition** of $u$. When $Y$ is separated the representatives agree on their intersections and glue to a morphism on $\operatorname{dom}(u)$; without separatedness such a global representative need not exist. This is the relative version of [[def-rational-map-integral-schemes]].

**Base change.** The notions $S$-dense and $S$-rational are preserved by arbitrary base change $S'\to S$. The domain of definition is compatible with flat base change in a sharp sense: if $X$ and $Y$ are smooth of finite type over $S$ and $Y$ is separated over $S$, if $u:X\dashrightarrow Y$ is an $S$-rational map and $S'\to S$ is flat, then the base-changed $S'$-rational map $u_{S'}$ satisfies $\operatorname{dom}(u_{S'})=\operatorname{dom}(u)\times_SS'$ (BLR 2.5/6, Proposition 6). Flatness is essential: over $S=\operatorname{Spec}\mathbb Z$, the $S$-rational map $\mathbb A^1_S\dashrightarrow\mathbb A^1_S$ given by $2/T$ on the $S$-dense open $D(T)$ has domain exactly $D(T)$, since $2/T$ is not regular at any prime containing $T$. After base change to $\operatorname{Spec}\mathbb F_2$ it is the zero rational map, which extends over the whole affine line. Thus the domain of definition does not commute with this non-flat base change.

A collection of fibrewise rational maps with informal specialization compatibility is not used on this page as an equivalent definition of an $S$-rational map: an actual representative on an $S$-dense open subscheme is required, and all extension arguments below produce such representatives.
