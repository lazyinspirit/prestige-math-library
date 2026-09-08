---
id: def-relative-open-convex-gauge
kind: definition
title: The finite gauge of an open convex neighbourhood of zero
status: published
origin: pipeline
deps: [def-relative-normed-convexity-and-separation, thm-infimum-property]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  audited: 2026-09-09
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: Haim Brezis, Functional Analysis, Sobolev Spaces and Partial Differential Equations, §§1.1–1.2 and §1.3 evaluation paragraph
      url: https://www.math.utoronto.ca/almut/Brezis.pdf
    - title: Gerald Teschl, Topics in Real and Functional Analysis, Theorems 4.13–4.20 and §5.1 (2018 university-hosted copy)
      url: https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf
pipeline_run: phase-2-wave-1
---

## Definition

Let $X$ be a real or complex normed space and let $U\subseteq X$ be open and convex with $0\in U$, using [[def-relative-normed-convexity-and-separation]]. For $x\in X$ set
$$S_x=\{t\in\mathbb R:t>0,\ x/t\in U\},\qquad p_U(x)=\inf S_x.$$
The function $p_U:X\to\mathbb R$ is the **gauge** of $U$, with real nonnegative values and real positive scale parameters. Symmetry and boundedness of $U$ are not assumed.

This infimum is well-defined without HB or choice. Openness at zero gives one $r>0$ with $B(0,r)\subseteq U$. For any fixed $x$ and any $t>\|x\|/r$, $\|x/t\|<r$, so $t\in S_x$. Thus $S_x$ is nonempty, for example at $t=1+\|x\|/r$, and is bounded below by zero. The real infimum property [[thm-infimum-property]] supplies a finite $p_U(x)\ge0$. These formulas define a unique value at every $x$; no family of choices is involved. At zero, $S_0=(0,\infty)$, whose infimum is zero because it has members below every positive number.

The scale sets give the following direct calculations. For $U=B(0,1)$, one has $S_x=\{t>0:t>\|x\|\}$, so $p_U(x)=\|x\|$, including zero. For the open convex strip $U=\{(s,v)\in\mathbb R^2:|s|<1\}$, the condition $(s,v)/t\in U$ is exactly $t>|s|$, so $p_U(s,v)=|s|$. This set contains $(0,v)$ for all real $v$ and is unbounded; its gauge vanishes along that whole line. Finally, $U=\{0\}$ in a nonzero normed space is convex but not a neighbourhood of zero: every positive-radius ball contains a nonzero multiple of any fixed nonzero vector. For $x\ne0$ its scale set is empty since $x/t\ne0$ for every $t>0$. Thus that set does not define a finite gauge on all of $X$ by this construction.

## Source notes

Brezis Lemma 1.2 and (8), p.6; Teschl (5.1) and Lemma 5.1, pp.137–138.
