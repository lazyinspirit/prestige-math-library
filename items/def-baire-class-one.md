---
id: def-baire-class-one
kind: definition
title: "Pointwise convergence of a sequence of real functions, and the Baire class one functions as the pointwise limits of sequences of continuous functions"
status: draft
origin: session
deps: [def-continuity-real, def-sequence, def-real-limit, lem-limit-unique, def-interval]
justified_by: []
aliases: [def-pointwise-convergence, def-baire-one]
landmark: true
short: "pointwise limit; Baire class one"
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Baire function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Baire_function"
    - title: "Pointwise convergence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Pointwise_convergence"
pipeline_run: null
---

## Definition

Let $A \subseteq \mathbb{R}$. A **sequence of functions on $A$** is a function
assigning to each $n \in \mathbb{N}$ a function $f_n : A \to \mathbb{R}$; it is
written $(f_n)_{n \in \mathbb{N}}$. As everywhere in this library $\mathbb{N}$
contains $0$, so the first term is $f_0$ ([[def-sequence]]).

**Pointwise convergence.** $(f_n)$ **converges pointwise on $A$** to
$f : A \to \mathbb{R}$ when, for every $x \in A$, the sequence of reals
$(f_n(x))_{n \in \mathbb{N}}$ converges to $f(x)$ ([[def-real-limit]]); written
out, for every $x \in A$ and every real $\varepsilon > 0$ there is
$N \in \mathbb{N}$ with $|f_n(x) - f(x)| < \varepsilon$ for every $n \ge N$.

**The limit function is unique.** A sequence of reals has at most one limit
([[lem-limit-unique]]), so if $(f_n)$ converges pointwise to $f$ and to $g$ then
$f(x) = g(x)$ for every $x \in A$, hence $f = g$. We may therefore speak of
*the* pointwise limit and write $f = \lim_n f_n$ pointwise.

**The index $N$ is allowed to depend on $x$, and that is the whole content of the
word *pointwise*.** No uniformity over $A$ is asserted anywhere below.

### Baire class one

$f : A \to \mathbb{R}$ is of **Baire class one on $A$** when there is a sequence
$(f_n)$ of functions $A \to \mathbb{R}$, each continuous on $A$
([[def-continuity-real]]), converging pointwise on $A$ to $f$.

**Every continuous function is of Baire class one**, by the constant sequence
$f_n := f$, which converges pointwise to $f$ because a constant sequence of
reals converges to its value.

**The class is strictly larger than the continuous functions**, and it is
strictly smaller than the class of all functions. The first is visible already
on $A = [0,1]$ ([[def-interval]]): the indicator of a single point is of Baire
class one and is not continuous. The second is
[[thm-baire-one-continuity-points]], which shows that a Baire class one function
on a closed bounded interval has a dense set of continuity points, and the
companion page uses it to exhibit a function that is not of Baire class one
on this page's companion examples page.

**On the higher classes.** The pointwise limits of sequences of Baire class one
functions form what is classically called Baire class two, and the construction
iterates. No definition of the higher classes is given here and none is used;
where the phrase is needed below it is stated as "a pointwise limit of a
sequence of Baire class one functions", which is a condition already expressible
with the words above.
