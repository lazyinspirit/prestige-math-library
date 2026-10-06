---
id: "def-multiple-test-blowup-and-controlled-transform"
kind: "definition"
title: "Multiple test blow-ups, controlled transforms and resolutions of marked ideals"
status: draft
origin: pipeline
pipeline_run: "frontier-40-geometry-braids-rep-27"
dependency_level: 3
deps:
  - "def-blowup-scheme-along-ideal"
  - "def-closed-immersion-schemes"
  - "def-exceptional-divisor-blowup"
  - "def-invertible-sheaf"
  - "def-invertible-sheaf-of-cartier-divisor"
  - "def-marked-ideal"
  - "def-sheaf-tensor-product"
  - "def-simple-normal-crossings-divisors"
  - "def-strict-transform-closed-subscheme"
provenance:
  statement: "literature-derived"
  proof: "not-applicable"
sources:
  references:
    - title: "Jaroslaw Wlodarczyk, Simple Hironaka resolution in characteristic zero, J. Amer. Math. Soc. 18 (2005) 779-822; author's arXiv version math/0401401 (28 pp., dated October 25, 2018)"
      url: "https://arxiv.org/pdf/math/0401401"
    - title: "Herwig Hauser, The Hironaka theorem on resolution of singularities (or: A proof we always wanted to understand), Bull. Amer. Math. Soc. 40 (2003) 323-403"
      url: "https://homepage.univie.ac.at/herwig.hauser/Publications/hauser%20hironaka%20thm%20bams.pdf"
---

## Definition

Let $(\mathcal I,E,\mu)$ be a marked ideal on the smooth $K$-scheme $X$ ([[def-marked-ideal]]).
A multiple test blow-up of $(\mathcal I,E,\mu)$ is a finite sequence
$$X=X_0\xleftarrow{\sigma_1}X_1\leftarrow\cdots\leftarrow X_r$$
in which each $\sigma_i\colon X_i\to X_{i-1}$ is specified either as an inserted isomorphism step or as the blowup ([[def-blowup-scheme-along-ideal]]) of $X_{i-1}$ at a regular closed subscheme $C_{i-1}\subseteq\operatorname{supp}(\mathcal I_{i-1},E_{i-1},\mu)$ ([[def-closed-immersion-schemes]]) that has SNC with $E_{i-1}$, together with the marked ideals defined inductively for a blowup step by
$$(\mathcal I_i,E_i,\mu),\qquad \mathcal I_i:=\mathcal I(D_i)^{-\mu}\cdot\sigma_i^*(\mathcal I_{i-1}),\qquad E_i:=\sigma_i^{\mathrm{c}}(E_{i-1})\cup\{D_i\},$$
where $D_i\subseteq X_i$ is the exceptional divisor ([[def-exceptional-divisor-blowup]]), $\mathcal I(D_i)$ is its invertible ideal ([[def-invertible-sheaf-of-cartier-divisor]]), $\mathcal I(D_i)^{-\mu}$ its $(-\mu)$-th tensor power ([[def-invertible-sheaf]], [[def-sheaf-tensor-product]]), and $\sigma_i^{\mathrm{c}}(E_{i-1})$ is the family of strict transforms ([[def-strict-transform-closed-subscheme]]) ordered so that all old members precede $D_i$.
Empty members of the transformed boundary are omitted, with the order of all surviving labels retained.
The transform $\sigma_i^{\mathrm{c}}(\mathcal I_{i-1},\mu):=(\mathcal I_i,\mu)$ is the controlled transform of $(\mathcal I_{i-1},\mu)$; for a local section $f\in\mathcal I_{i-1}(U)$ with local equation $y_i$ of $D_i$ the section $y_i^{-\mu}\sigma_i^*(f)$ is a controlled transform of $f$, well defined up to a unit.
A blowup step retains the specified center and $D_i=\sigma_i^{-1}(C_{i-1})$, even when its underlying morphism is an isomorphism, as for a Cartier center. An inserted isomorphism step has empty $D_i$, transports the ideal and ordered boundary, and appends no boundary member.
A resolution of $(\mathcal I,E,\mu)$ is a multiple test blow-up with $\operatorname{supp}(\mathcal I_r,E_r,\mu)=\varnothing$.
An extension of a multiple test blow-up $(X_i)_{0\le i\le m}$ is a multiple test blow-up $(X'_j)_{0\le j\le m'}$ with $X'_0=X$, indices $j_0=0<j_1<\dots<j_m$ and isomorphisms forming an identification $X'_{j_i}=X_i$; the extended sequence is obtained from the original one by inserting isomorphisms, with every original blow-up retained in its original order. No new nontrivial blow-ups are inserted. This is the extension convention of the source, Definition 2.1.5.
