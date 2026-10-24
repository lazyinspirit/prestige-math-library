---
id: lem-competing-exponential-race-for-reaction-channels
kind: lemma
title: "Competing exponential clocks give the reaction event law"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - def-countable-choice
  - def-independent-random-elements
  - def-independent-sigma-algebras-and-events
  - def-law-or-distribution-of-a-random-element
  - def-product-sigma-algebra-and-finite-product-sigma-algebras
  - def-random-element-and-real-random-variable
  - thm-measure-uniqueness-on-a-sigma-finite-pi-system
  - thm-exponential-and-weibull-survival-laws
  - thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Daniel T. Gillespie, Exact Stochastic Simulation of Coupled Chemical Reactions"
      url: "https://www.ma.imperial.ac.uk/~nsjones/gillespie_1977.pdf"
      locator: "§§II.B–III.C, journal pp. 2342–2345 / PDF pp. 3–6."
    - title: "David F. Anderson, Introduction to Stochastic Processes with Applications to Biology, Chapters 6–7"
      url: "https://people.math.wisc.edu/~dfanderson/605F11/Notes/StochBioOLD.pdf"
      locator: "Chapter 6, §§6.1–6.2; Chapter 7, §§7.1.1 and 7.2.1, PDF pp. 145–156, 183–196."
    - title: "David F. Anderson and Thomas G. Kurtz, Continuous Time Markov Chain Models for Chemical Reaction Networks"
      url: "https://people.math.wisc.edu/~dfanderson/papers/SURVEY_AndKurtz.pdf"
      locator: "§§2.1–2.2, PDF pp. 5–8."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Statement

Assume Countable Choice. Let $R\ge1$, let $r_1,\ldots,r_R\ge0$, and set $r_0=\sum_{j=1}^R r_j$. On a common probability space let $E_1,\ldots,E_R$ be independent random variables, each with the unit exponential law $\operatorname{Exp}(1)$, whose survival at $t\ge0$ is $e^{-t}$. If $r_0>0$, define
$$T_*:=\min_{j:r_j>0}\frac{E_j}{r_j},\qquad J_*:=\operatorname*{argmin}_{j:r_j>0}\frac{E_j}{r_j}.$$
Then ties have probability zero, $T_*\sim\operatorname{Exp}(r_0)$, $J_*$ is independent of $T_*$, and
$$\mathbb P(J_*=j)=\frac{r_j}{r_0}.$$
If $r_0=0$, every $r_j=0$ and no finite reaction clock is active.

## Facts & Assumptions

**Given:** Countable Choice, finite nonnegative rates $r_1,\ldots,r_R$, and independent unit exponential random variables $E_1,\ldots,E_R$.

[F1] Under Countable Choice, $\operatorname{Exp}(\theta)$ has density $\theta e^{-\theta t}$ on $t>0$ and survival $e^{-\theta t}$ for $t\ge0$; the law is unique. ([[thm-exponential-and-weibull-survival-laws]])

[F2] Independence of the generated sigma-algebras gives the product formula for every measurable rectangle in a finite product of real lines. The inverse image of each such rectangle under the coordinate tuple is a finite intersection of coordinate preimages, hence measurable; since the rectangles generate the finite product sigma-algebra, the tuple is a random element there. Iterating the sigma-finite product-measure theorem gives the finite product law of the marginals. It and the joint law agree on the generating pi-system of elementary rectangles, which contains the whole space with mass one, so the measure-uniqueness theorem identifies these laws. ([[def-independent-random-elements]], [[def-independent-sigma-algebras-and-events]], [[def-product-sigma-algebra-and-finite-product-sigma-algebras]], [[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]], [[thm-measure-uniqueness-on-a-sigma-finite-pi-system]])

[A1] Countable Choice is assumed in [F1] for the exponential probability law. ([[def-countable-choice]])

## Proof

1.1 If $r_0=0$, nonnegativity of the finite sum implies every $r_j=0$, so the set of active clocks is empty and no finite candidate time is defined. [given, algebra]

1.2 Suppose $r_0>0$. For $t\ge0$, independence in [F2] and the unit exponential survival in [F1] give $\mathbb P(T_*>t)=\prod_{j:r_j>0}\mathbb P(E_j>r_jt)=\prod_{j:r_j>0}e^{-r_jt}=e^{-r_0t}.$ Thus $T_*$ has the unique law $\operatorname{Exp}(r_0)$ specified in [F1]. [A1, F1, F2, given, algebra]

2.1 For a channel $j$ with $r_j>0$, the scaled clock $E_j/r_j$ has density $r_j e^{-r_jt}$ on $t>0$ by change of variables in [F1]. Independence [F2] therefore gives the joint density that channel $j$ rings first at time $t$ as $r_j e^{-r_jt}\prod_{k\ne j:r_k>0}e^{-r_kt}=r_j e^{-r_0t}.$ Integrating over $t>0$ yields $\mathbb P(J_*=j)=r_j/r_0$, and this joint density factors as $r_0e^{-r_0t}(r_j/r_0)$, proving independence of $T_*$ and $J_*$. [A1, F1, F2, step 1.2, algebra]

3.1 For distinct active $i,j$, the independent scaled clocks have continuous densities, so their equality has probability zero: conditioning on $E_i/r_i$ leaves the independent variable $E_j/r_j$ with zero probability at each singleton. A finite union over pairs shows the minimum is unique almost surely. Together with steps 1.2 and 2.1 this proves all assertions. [F1, F2, step 1.2, step 2.1] ∎
