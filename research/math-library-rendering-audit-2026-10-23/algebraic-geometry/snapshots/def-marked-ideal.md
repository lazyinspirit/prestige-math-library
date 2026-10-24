---
id: "def-marked-ideal"
kind: "definition"
title: "Marked ideals and their support"
status: published
origin: pipeline
pipeline_run: "frontier-40-geometry-braids-rep-27"
dependency_level: 2
deps:
  - "def-coherent-module-scheme"
  - "def-effective-cartier-divisor"
  - "def-order-of-an-ideal-sheaf-at-a-point"
  - "def-simple-normal-crossings-divisors"
  - "rem-resolution-of-singularities-conventions"
provenance:
  statement: "literature-derived"
  proof: "not-applicable"
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Jaroslaw Wlodarczyk, Simple Hironaka resolution in characteristic zero, J. Amer. Math. Soc. 18 (2005) 779-822; author's arXiv version math/0401401 (28 pp., dated October 25, 2018)"
      url: "https://arxiv.org/pdf/math/0401401"
    - title: "Herwig Hauser, The Hironaka theorem on resolution of singularities (or: A proof we always wanted to understand), Bull. Amer. Math. Soc. 40 (2003) 323-403"
      url: "https://homepage.univie.ac.at/herwig.hauser/Publications/hauser%20hironaka%20thm%20bams.pdf"
---

## Definition

Let $X$ be a smooth $K$-scheme of pure dimension $n$ ([[rem-resolution-of-singularities-conventions]]) and let $E$ be a finite family of reduced divisors on $X$ in simultaneous SNC position ([[def-simple-normal-crossings-divisors]]).
A marked ideal on $X$ is a triple $(\mathcal I,E,\mu)$ consisting of a coherent ideal sheaf $\mathcal I\subseteq\mathcal O_X$, the family $E$, and an integer $\mu\ge 0$; it is displayed as $(\mathcal I,\mu)$ when $E$ is understood.
The support of $(\mathcal I,E,\mu)$ is
$$\operatorname{supp}(\mathcal I,E,\mu):=\{x\in X : \operatorname{ord}_x(\mathcal I)\ge\mu\}$$
([[def-order-of-an-ideal-sheaf-at-a-point]]); it is in fact a closed subset of $X$, as shown below.
The canonical-resolution existence theorem below requires $\mu\ge1$ and $\mathcal I$ nonzero at the generic point of every irreducible component of $X$. Merely requiring $\mathcal I\ne0$ globally does not suffice on a disconnected smooth scheme. For $\mu=0$ the support is all of $X$, so support-clearing resolution by the canonical algorithm is not asserted.
Writing $(\mathcal I,\mu)$ for $(\mathcal I,E,\mu)$ suppresses only $E$, never the order $\mu$.
