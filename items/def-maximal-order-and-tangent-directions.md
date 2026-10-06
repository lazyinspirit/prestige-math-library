---
id: "def-maximal-order-and-tangent-directions"
kind: "definition"
title: "Marked ideals of maximal order, tangent directions and transversality to the exceptional divisors"
status: draft
origin: pipeline
pipeline_run: "frontier-40-geometry-braids-rep-27"
dependency_level: 5
deps:
  - "def-embedding-dimension-and-regular-local-ring"
  - "def-field"
  - "def-ideal-of-derivatives"
  - "def-marked-ideal"
  - "def-order-of-an-ideal-sheaf-at-a-point"
  - "def-simple-normal-crossings-divisors"
  - "lem-derivative-ideals-have-the-same-support"
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

Let $(\mathcal I,E,\mu)$ be a marked ideal with $\mathcal I\ne 0$ on the smooth $K$-scheme $X$ ([[def-marked-ideal]]).
It is of maximal order if $\operatorname{ord}_x(\mathcal I)\le\mu$ for every $x\in X$; when $\mu$ is attained this is equivalent to $\operatorname{supp}(\mathcal I,E,\mu)=\{x:\operatorname{ord}_x\mathcal I=\mu\}$. For $\mu\ge1$, in characteristic zero or in perfect characteristic $p>0$ with $\mu<p$, maximal order is also equivalent to $\mathcal D^\mu(\mathcal I)=\mathcal O_X$ ([[def-field]], [[lem-derivative-ideals-have-the-same-support]]).
For the tangent-direction construction require $\mu\ge1$. Put $T(\mathcal I):=\mathcal D^{\mu-1}(\mathcal I)$ ([[def-ideal-of-derivatives]]).
A tangent direction of $(\mathcal I,E,\mu)$ on an open $U\subseteq X$ is a section $u\in T(\mathcal I)(U)$ of multiplicity one ([[def-order-of-an-ideal-sheaf-at-a-point]]): $\operatorname{ord}_x(u)=1$ for every $x\in V(u)$, so $V(u)$ is a regular hypersurface in $U$ containing $\operatorname{supp}(\mathcal I,E,\mu)\cap U$.
Such a $u$ is transversal to $E$ at $x$ if $x\in V(u)$ and the class of $u$ together with the classes of the distinct local boundary equations through $x$ is linearly independent in $\mathfrak m_x/\mathfrak m_x^2$, equivalently these equations and $u$ extend together to a regular system of parameters of $\mathcal O_{X,x}$ ([[def-simple-normal-crossings-divisors]]); in particular $u$ cannot be a boundary parameter or lie in the span of the boundary classes. This hypothesis ensures that $V(u)$ is transversal to the boundary and is used in restriction, completion-automorphism and glueing arguments.
