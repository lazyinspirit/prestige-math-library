---
id: def-brownian-transition-semigroup
kind: definition
title: "The Brownian transition semigroup"
status: published
origin: pipeline
deps: [def-brownian-motion, def-standard-normal-and-normal-laws, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gregory F. Lawler, Stochastic Calculus: An Introduction with Applications, Section 2.6"
      url: "https://www.math.uchicago.edu/~lawler/finbook.pdf"
    - title: "Rick Durrett, Probability: Theory and Examples, fifth edition, Section 7.3"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
verification:
  audited: 2026-09-22
---

## Definition

Assume the Axiom of Choice. Let $B$ be a standard Brownian motion
[[def-brownian-motion]]. For $t>0$ define the **Brownian transition kernel**
$$p_t(x,y):=(2\pi t)^{-1/2}\exp\!\left(-\frac{(y-x)^2}{2t}\right),\qquad x,y\in\mathbb R,$$
and for every bounded Borel function $f:\mathbb R\to\mathbb R$ define
$$P_tf(x):=\int_{\mathbb R}f(y)\,p_t(x,y)\,dy\qquad(t>0),\qquad P_0f:=f .$$
The family $(P_t)_{t\ge0}$ is the **Brownian transition semigroup**, and each
$P_t$ is a **transition operator**.

Two equivalent descriptions are part of the definition and are used below.

1. **Expectation form.** For a standard Brownian motion $B$ as in
   [[def-brownian-motion]] and $t\ge0$,
   $$P_tf(x)=E\bigl[f(x+B_t)\bigr].$$
   Under AC, $N(0,t)$ is the law of $\sqrt t\,Z$ for a standard normal $Z$, whose
   density $\varphi(z)=e^{-z^2/2}/\sqrt{2\pi}$ is fixed in
   [[def-standard-normal-and-normal-laws]]; the density of $N(x,t)$ is the
   translate $y\mapsto p_t(x,y)$, and the agreement of the two displayed
   expressions is proved as the first assertion of the semigroup lemma later on
   this page.
2. **Basic regularity.** For $t>0$ the map $(x,y)\mapsto p_t(x,y)$ is
   continuous, hence Borel; consequently $P_tf$ is Borel for bounded Borel $f$,
   $P_t$ is linear, and $\|P_tf\|_\infty\le\|f\|_\infty$, with equality for
   $f\equiv1$ once the kernel is known to be a probability density. At $t=0$
   the convention is $P_0f=f$, so $P_0$ is the identity.

The cases $t=0$ and $s=0$ of every later identity are the identity operator and
are recorded separately rather than derived from the $t>0$ formula. No choice
beyond the declared AC is made by the kernel: the integral is a Lebesgue
integral of a fixed continuous density.

## Source notes

Lawler, Section 2.6, and Durrett, Section 7.3, define the Brownian transition
density and the operator $P_tf$. The expectation form is the definition of
$P_t$ in Lawler's Markov-viewpoint treatment; here it is stated as an
equivalent description and proved in the following lemma, so that no step of
the later arguments has to treat it as an extra hypothesis.
