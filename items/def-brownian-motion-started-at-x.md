---
id: def-brownian-motion-started-at-x
kind: definition
title: "Brownian motion started at x"
status: draft
origin: pipeline
deps: [def-brownian-motion, def-d-dimensional-brownian-motion, cor-existence-and-scaling-of-d-dimensional-brownian-motion, lem-law-of-a-random-element-is-a-probability-measure, def-axiom-of-choice]
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Rick Durrett, Probability: Theory and Examples, fifth edition, Section 7.5"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
    - title: "Perla Sousi, Advanced Probability, Section 6.1"
      url: "http://www.statslab.cam.ac.uk/~ps422/mynotes.pdf"
---

## Definition

Assume the Axiom of Choice. Let $d\ge1$ be a finite integer and let $B$ be a
standard $d$-dimensional Brownian motion on a probability space
$(\Omega,\mathcal F,P)$ [[def-d-dimensional-brownian-motion]], as supplied by
[[cor-existence-and-scaling-of-d-dimensional-brownian-motion]]. For
$x\in\mathbb R^d$ put
$$B^x_t:=x+B_t,\qquad t\ge0 .$$
The process $B^x$ is the **standard $d$-dimensional Brownian motion started at
$x$**, and its law
$$P_x:=\text{the law of the random element } \omega\mapsto\bigl(x+B_t(\omega)\bigr)_{t\ge0}$$
is called the **shifted Brownian law at $x$**. Here the target is
$(\mathbb R^d)^{[0,\infty)}$ with its cylinder sigma-algebra, the smallest
sigma-algebra making every coordinate projection measurable; the map is a
random element because each coordinate $\omega\mapsto x_\alpha+B^\alpha_t(\omega)$
is measurable, and hence $P_x$ is a probability measure
[[lem-law-of-a-random-element-is-a-probability-measure]]. We write
$P_x(A)=P\bigl((x+B_t)_{t\ge0}\in A\bigr)$.

The following are part of the definition and are used later in this form.

1. **Initial value.** $B^x_0=x$ and $P_x$-almost every path starts at $x$;
   because every path of $B$ is continuous on one probability-one event,
   $P_x$-almost every path of $B^x$ is continuous as well.
2. **Increments.** For $0\le s\le t$ one has the pathwise identity
   $B^x_t-B^x_s=B_t-B_s$. Consequently, under $P_x$ the increments are
   independent with laws $N_d\bigl(0,(t-s)I_d\bigr)$ [[def-d-dimensional-brownian-motion]];
   in particular $B^x$ is again a standard Brownian motion up to its
   initial value $x$.
3. **Translation of hitting times.** Let $C\subseteq\mathbb R^d$ and let
   $$T_C(f):=\inf\{t\ge0:f(t)\in C\}$$ (with $\inf\emptyset:=+\infty$) be the first hitting functional of $C$, evaluated on path space. Then pathwise $$
T_C(B^x)=T_{C-x}(B),\qquad C-x:=\{z-x:z\in C\}$$
   because $x+B_t\in C$ if and only if $B_t\in C-x$. In particular
   $P_x(T_C\le t)=P(T_{C-x}\le t)$ for every $t\ge0$, and for $d=1$ the
   one-point case reads $P_x(T_a<\infty)=P(T_{a-x}<\infty)$.
4. **These are the only shifted laws used below.** The one-dimensional items
   use $d=1$, the planar items use $d=2$, and $P_0$ is the law of $B$ itself.
   No statement below treats $P_x$ as a kernel in $x$ or as a regular
   conditional distribution.

## Source notes

Durrett, Section 7.5, and Sousi, Section 6.1, use the notation $P_x$ for
Brownian motion started at $x$ without minting a separate definition. The
definition above fixes that notation on the canonical cylinder space, so that
hitting-time events are defined as events of the shifted law, and records the
translation identity that every later use consumes.
