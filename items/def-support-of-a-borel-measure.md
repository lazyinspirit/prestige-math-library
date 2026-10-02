---
id: def-support-of-a-borel-measure
kind: definition
title: "Support of a finite Borel measure on the plane"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-radon-measure-on-an-lch-space
  - def-metric-interior-closure-boundary
  - def-measure
  - def-measure-concentrated-on-a-measurable-set
  - thm-rational-points-and-boxes-in-rn
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "B. Khoruzhenko, LTCC Potential Theory notes"
      url: "https://maths.qmul.ac.uk/~boris/potential_th_notes.pdf"
      locator: "§3, measures carried by compact sets and their potentials"
    - title: "E. B. Saff, Logarithmic Potential Theory with Applications to Approximation Theory"
      url: "https://arxiv.org/pdf/1010.3760"
      locator: "§1, compactly supported measures and their potentials"
verification:
  audited: 2026-10-02
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Definition

Let $\mu$ be a finite positive Borel measure on $\mathbb C$ ([[def-radon-measure-on-an-lch-space]]).
Call an open set $V\subseteq\mathbb C$ **$\mu$-null** when $\mu(V)=0$. The
**support** of $\mu$ is the complement of the union of all open $\mu$-null sets,

$$\operatorname{supp}\mu:=\mathbb C\setminus\bigcup\{V\subseteq\mathbb C:V\text{ open and }\mu(V)=0\},$$

which is a closed subset of $\mathbb C$ ([[def-metric-interior-closure-boundary]]).
Equivalently, $x\in\operatorname{supp}\mu$ if and only if $\mu(V)>0$ for every
open set $V\ni x$. A measure is **carried by** a Borel set $A$ when
$\mu(\mathbb C\setminus A)=0$, the terminology of
[[def-measure-concentrated-on-a-measurable-set]]. We say $\mu$ has **compact
support** when it is carried by some compact subset of $\mathbb C$.

## Remark

**The support is the smallest closed carrier, and the argument is choice-free.**
Let $\mathcal U$ be the union of all open $\mu$-null sets. The rational open
squares $B$ of $\mathbb R^2\cong\mathbb C$ form a countable basis
([[thm-rational-points-and-boxes-in-rn]]). Let $\mathcal N$ be the countable
family of those basis squares with $\mu(B)=0$. If $x\in\mathcal U$, then $x$ lies
in some open $\mu$-null $V$, and the basis property supplies a square
$B\in\mathcal N$ with $x\in B\subseteq V$; conversely every $B\in\mathcal N$ is
contained in $\mathcal U$. Hence $\mathcal U$ is the countable union of the
$\mu$-null sets $\mathcal N$ and is itself $\mu$-null by countable additivity
([[def-measure]]). Therefore $\mu(\mathbb C\setminus\operatorname{supp}\mu)=0$:
the support carries $\mu$. If $F$ is a closed set with
$\mu(\mathbb C\setminus F)=0$, then $\mathbb C\setminus F$ is an open $\mu$-null
set, so it is one of the sets in the defining union and
$\operatorname{supp}\mu\subseteq F$; the support is thus the smallest closed set
carrying $\mu$. In particular $\mu\neq0$ if and only if
$\operatorname{supp}\mu\neq\varnothing$, and if $\mu$ is carried by a compact
$K$, then $\operatorname{supp}\mu\subseteq K$ is compact.
