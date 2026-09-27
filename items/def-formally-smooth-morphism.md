---
id: "def-formally-smooth-morphism"
kind: "definition"
title: "Formally smooth morphism"
status: draft
origin: "pipeline"
deps: ["def-scheme-over-base", "def-closed-immersion-schemes", "def-ideal-sheaf", "def-morphism-of-schemes"]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
sources:
  references:
    - title: "Stacks Algebra, Definition 10.138.1 (tag 00TH) and Stacks More on Morphisms, Section 37.11"
      url: "https://stacks.math.columbia.edu/tag/00TH"
---

## Definition

Let $f\colon X\to S$ be a morphism of schemes ([[def-scheme-over-base]]) and let
$i\colon T_0\hookrightarrow T$ be a square-zero thickening, namely a closed
immersion ([[def-closed-immersion-schemes]]) whose ideal sheaf
$\mathcal I=\ker(\mathcal O_T\to i_*\mathcal O_{T_0})$ ([[def-ideal-sheaf]])
satisfies $\mathcal I^2=0$.

**Formally smooth.** The morphism $f$ is **formally smooth** if for every
commutative $S$-diagram

$$\begin{array}{ccc} T_0 & \xrightarrow{\ a\ } & X\\[2pt] \big\downarrow{\scriptstyle i} & & \big\downarrow{\scriptstyle f}\\[2pt] T & \xrightarrow{\ b\ } & S \end{array}$$

every point $t\in T$ has an open neighbourhood $U\subseteq T$ over which a lift
exists: there is an $S$-morphism $U\to X$ extending $a|_{T_0\cap U}$. In other
words, lifts exist **Zariski locally on the test scheme $T$**, and there is no
uniqueness requirement.

**Equivalent formulation.** Since the lifting problem is local on $T$, it is
equivalent to require that the sheaf-theoretic lifting problem
$\operatorname{Hom}_S(T,X)\to\operatorname{Hom}_S(T_0,X)$ be surjective locally
on $T$; equivalently, by the universal property of the fibre product, the
projection $X\times_ST\to T$ admits a section locally on $T$ over the given
morphism $T_0\to X\times_ST$. No finite-type, finite-presentation or flatness
hypothesis is imposed, and no uniqueness of lifts is asserted; in particular a
formally smooth morphism need not be an open immersion or a submersion in any
topological sense, and "formally smooth" is not by itself the same condition as
"the relative differentials are locally free" nor as "smooth of finite
presentation", which is treated elsewhere.
