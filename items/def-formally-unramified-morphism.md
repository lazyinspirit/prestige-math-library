---
id: "def-formally-unramified-morphism"
kind: "definition"
title: "Formally unramified morphism"
status: published
origin: "pipeline"
deps: ["def-scheme-over-base", "def-closed-immersion-schemes", "def-ideal-sheaf", "def-morphism-of-schemes"]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-27
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
sources:
  references:
    - title: "Stacks Algebra, Definition 10.148.1 (tag 00UM) and Stacks More on Morphisms, Section 37.6 (tag 02G3)"
      url: "https://stacks.math.columbia.edu/tag/00UM"
---

## Definition

Let $f\colon X\to S$ be a morphism of schemes
([[def-morphism-of-schemes]], [[def-scheme-over-base]]).

**Square-zero thickenings.** A **square-zero thickening** of a scheme $T_0$ is a
closed immersion $i\colon T_0\hookrightarrow T$ ([[def-closed-immersion-schemes]])
whose ideal sheaf
$\mathcal I=\ker(\mathcal O_T\to i_*\mathcal O_{T_0})$
([[def-ideal-sheaf]]) satisfies $\mathcal I^2=0$, meaning that the product of any
two local sections of $\mathcal I$ over a common open set is zero. Such a
thickening is an $S$-thickening when $T$ is an $S$-scheme and $i$ is an
$S$-morphism.

**Formally unramified.** The morphism $f$ is **formally unramified** if for
every commutative diagram of schemes

$$\begin{array}{ccc} T_0 & \xrightarrow{\ a\ } & X\\[2pt] \big\downarrow{\scriptstyle i} & & \big\downarrow{\scriptstyle f}\\[2pt] T & \xrightarrow{\ b\ } & S \end{array}$$

in which $i\colon T_0\hookrightarrow T$ is a square-zero thickening and the
square is over $S$ — that is, $a$ and $b$ are compatible with $f$ — there is
**at most one** $S$-morphism $T\to X$ whose restriction to $T_0$ is $a$. In
other words, two $S$-morphisms $T\to X$ agreeing on a square-zero closed
subscheme agree everywhere.

The condition is a uniqueness condition only: no existence is required, no
finite-type, finite-presentation, flatness or separatedness hypothesis is
imposed on $f$, and the test thickenings are required to be square-zero but are
otherwise arbitrary, in particular not assumed to be affine or of finite type
over $S$. For the affine case $X=\operatorname{Spec}B$, $S=\operatorname{Spec}A$
with $f$ induced by $A\to B$, the condition is the algebraic one: for every
$A$-algebra $C$ with an ideal $I\subseteq C$ satisfying $I^2=0$, two $A$-algebra
maps $B\to C$ that agree modulo $I$ are equal.
