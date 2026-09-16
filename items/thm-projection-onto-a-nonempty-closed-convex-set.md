---
id: thm-projection-onto-a-nonempty-closed-convex-set
kind: theorem
title: Projection onto a nonempty closed convex set
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [lem-minimizing-sequence-in-a-closed-convex-set-is-cauchy, def-hilbert-space, thm-infimum-property, lem-inf-epsilon, def-infimum, cor-archimedean-reciprocal, def-real-limit, def-countable-choice, def-relative-normed-convexity-and-separation, def-metric-topology, lem-reverse-triangle-inequality-in-a-normed-space, thm-parallelogram-law]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis, Theorem 1.44, pp.40–41"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
    - title: "Andrew Lin and Casey Rodriguez, MIT 18.102 Introduction to Functional Analysis, Theorem 178"
      url: "https://live.ocw.mit.edu/courses/18-102-introduction-to-functional-analysis-spring-2021/8fb8d5c170f1613151aca71de21027bc_MIT18_102s21_full_lec.pdf"
    - title: "Bruce Blackadar, Ilijas Farah and Asaf Karagila, Hilbert spaces without the Countable Axiom of Choice, Theorem 2.0.4"
      url: "https://eprints.whiterose.ac.uk/216587/1/Hilbert%20spaces%20without%20the.pdf"
---

## Statement

Assume the Axiom of Countable Choice. Let $H$ be a real or complex Hilbert space, let $C\subseteq H$ be nonempty, closed and convex, and let $x\in H$. Then there is exactly one point $p\in C$ with $\|x-p\|=\inf_{c\in C}\|x-c\|$, that is, a unique nearest point of $C$ to $x$.

## Facts & Assumptions

[A1] A Hilbert space is an inner-product space complete for its induced norm: every Cauchy sequence converges to a point of the space ([[def-hilbert-space]]).

[A2] Every nonempty real set bounded below has an infimum, characterised by points arbitrarily close from above ([[thm-infimum-property]], [[lem-inf-epsilon]]).

[A3] Countable Choice selects a point from each set of a countable family of nonempty sets ([[def-countable-choice]]).

[A4] A minimizing sequence in a nonempty convex set is Cauchy ([[lem-minimizing-sequence-in-a-closed-convex-set-is-cauchy]]).

[A5] $C$ is convex and $d\le\|x-c\|$ for every $c\in C$ ([[def-relative-normed-convexity-and-separation]], [[def-infimum]]); a closed set contains the limits of its convergent sequences, and limits in a metric space are unique ([[def-metric-topology]]).

[A6] Norm distance is continuous: $\bigl|\|u\|-\|v\|\bigr|\le\|u-v\|$ ([[lem-reverse-triangle-inequality-in-a-normed-space]]).

[A7] Convergence of a sequence of reals to $L$ means that for every $\varepsilon>0$ the terms are eventually within $\varepsilon$ of $L$, and for every $\varepsilon>0$ some $1/n$ is below $\varepsilon$ ([[def-real-limit]], [[cor-archimedean-reciprocal]]).

[A8] Every inner-product norm satisfies the parallelogram law ([[thm-parallelogram-law]]).

## Proof

**Proof technique:** direct.

**Given:** Countable Choice, a real or complex Hilbert space $H$, a nonempty closed convex set $C\subseteq H$ and a vector $x\in H$.

1.1 The set $D=\{\|x-c\|:c\in C\}$ is nonempty and bounded below by $0$, so $d=\inf D$ exists and for every $n$ some $c\in C$ has $\|x-c\|<d+1/(n+1)$ by the epsilon characterisation of the infimum. [A2]

2.1 Countable Choice selects for every $n$ a point $c_n\in C$ with $\|x-c_n\|<d+1/(n+1)$, the sets being nonempty by step 1.1. [step 1.1, A3]

3.1 Then $0\le\|x-c_n\|-d<1/(n+1)$ for every $n$, so $\|x-c_n\|\to d$ by the Archimedean reciprocal bound; hence $(c_n)$ is Cauchy by the minimizing-sequence lemma, completeness of $H$ gives a limit $p\in H$, and closedness of $C$ places $p$ in $C$. [step 2.1, A1, A4, A5, A7]

4.1 Moreover $\|x-p\|=d$: norm continuity along the limit gives $\bigl|\|x-p\|-\|x-c_n\|\bigr|\le\|p-c_n\|\to0$, and a limit of the sequence $\|x-c_n\|$ is unique. [step 3.1, A5, A6]

5.1 If $p,q\in C$ both satisfy $\|x-p\|=\|x-q\|=d$, then the midpoint $\tfrac12(p+q)$ lies in $C$ by convexity, so $\|x-\tfrac12(p+q)\|\ge d$, and the parallelogram law gives $\|p-q\|^2=2\|x-p\|^2+2\|x-q\|^2-4\|x-\tfrac12(p+q)\|^2\le4d^2-4d^2=0$, whence $p=q$: the nearest point is unique. [step 4.1, A5, A8, algebra] ∎
