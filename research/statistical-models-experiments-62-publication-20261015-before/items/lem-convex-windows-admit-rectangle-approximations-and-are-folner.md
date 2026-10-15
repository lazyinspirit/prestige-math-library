---
id: lem-convex-windows-admit-rectangle-approximations-and-are-folner
kind: lemma
title: "Compact convex windows admit rectangle approximations and have negligible translated boundary"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 0
deps:
  - def-countable-choice
  - thm-lebesgue-measure-is-a-complete-measure
  - thm-lebesgue-measure-of-a-box-of-every-kind
  - thm-invertible-linear-images-scale-lebesgue-measure-by-a-constant
  - thm-continuity-from-below-for-measures
  - thm-lebesgue-outer-measure-and-measurability-are-translation-invariant
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Günter Last and Mathew Penrose, Lectures on the Poisson Process (2017 author-hosted version)"
      url: "https://stoch.math.kit.edu/img/Last/lastpenrose2017.pdf"
      locator: "Chapter 8, proof of Theorem 8.14, PDF pp.89–92 (printed pp.77–80): approximation of convex windows by rectangles and boundary control."
    - title: "Adrian Baddeley, Spatial Point Processes and their Applications"
      url: "https://leman.stat.vt.edu/VTCourses/BaddeleyPointProcesses.pdf"
      locator: "Lecture 2, §2.4, PDF pp.35–37: stationary spatial window conventions; geometry argument supplied locally."
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
---

## Statement

Assume Countable Choice. Let $W\subseteq\mathbb R^d$ be compact and convex with nonempty interior. Then $0<|W|<\infty$, $|aW|=a^d|W|$ for every $a>0$, and for each $\epsilon>0$ there is a finite disjoint union $R$ of half-open rectangles with $R\subseteq W$ and $|W\setminus R|<\epsilon$. Also, for every fixed $x\in\mathbb R^d$,

$$\frac{|(aW+x)\mathbin{\triangle}aW|}{|aW|}\longrightarrow0\qquad(a\to\infty).$$

Here $|\cdot|$ denotes Borel Lebesgue measure and $A\mathbin{\triangle}B=(A\setminus B)\cup(B\setminus A)$.

## Facts & Assumptions

**Given:** Countable Choice, a compact convex set $W$ with nonempty interior, and Borel Lebesgue measure $|\cdot|$ on $\mathbb R^d$.

[A1] Countable Choice is assumed for the Borel Lebesgue measure and its box-value properties. ([[def-countable-choice]])

[F1] Under Countable Choice, Lebesgue measure on the full Lebesgue sigma-algebra is a measure, its restriction to Borel sets is a measure, every half-open box has its usual product volume, and it is finite on bounded sets. ([[thm-lebesgue-measure-is-a-complete-measure]], [[thm-lebesgue-measure-of-a-box-of-every-kind]])

[F2] An invertible linear map scales the measure of every Borel set by a positive constant; for $aI$, the constant is $a^d$ by its value on a box. ([[thm-invertible-linear-images-scale-lebesgue-measure-by-a-constant]], [[thm-lebesgue-measure-of-a-box-of-every-kind]])

[F3] Lebesgue measure is translation invariant, and measures are continuous from below. ([[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]], [[thm-continuity-from-below-for-measures]])

## Proof

**Given:** Countable Choice and a compact convex $W\subseteq\mathbb R^d$ with nonempty interior.

1.1 Choose $x_0\in\operatorname{int}W$ and $r>0$ with the open ball $B(x_0,r)\subseteq W$. For $0<t<1$ put $W_t=x_0+(1-t)(W-x_0)$. If $w\in W$ and $\|z\|<tr$, then $x_0+z/t\in B(x_0,r)\subseteq W$ and $$(1-t)w+t(x_0+z/t)=(1-t)w+tx_0+z\in W$$ by convexity; thus every point of $W_t$ has an open ball of radius $tr$ contained in $W$, so $W_t\subseteq\operatorname{int}W$. [given, A1, construct]

2.1 If $0<t'<t<1$, put $w'=\frac{1-t}{1-t'}w+\frac{t-t'}{1-t'}x_0$. The two coefficients are nonnegative and sum to one, so $w'\in W$ by convexity, and $$x_0+(1-t)(w-x_0)=x_0+(1-t')(w'-x_0).$$ Thus $W_t\subseteq W_{t'}$. Moreover, every $y\in\operatorname{int}W$ lies in some $W_t$: for $y\ne x_0$, choose $s>0$ small enough that $w=x_0+(1+s)(y-x_0)\in W$, and then $y=x_0+(1-t)(w-x_0)$ for $t=s/(1+s)$; $x_0$ lies in every $W_t$. Hence for any sequence $t_n\downarrow0$, $W_{t_n}\uparrow\operatorname{int}W$. [step 1.1, given, construct, algebra]

3.1 By [F2] and [F3], $|W_{t_n}|=(1-t_n)^d|W|$ and the sets increase to $\operatorname{int}W$, so [F3] gives $|\operatorname{int}W|=|W|$. Thus the compact boundary $\partial W=W\setminus\operatorname{int}W$ is a null set. Since $W$ contains a nonempty open ball and is bounded, [F1] gives $0<|W|<\infty$. [step 2.1, F1, F2, F3]

4.1 Given $\epsilon>0$, choose $t>0$ so that $|W|-|W_t|=(1-(1-t)^d)|W|<\epsilon$. Choose a grid of half-open cubes of side $\delta< tr/\sqrt d$. Each cube that intersects $W_t$ is contained in $W$, because its points lie within distance at most $\sqrt d\delta<tr$ of a point whose radius-$tr$ ball lies in $W$. Only finitely many grid cubes intersect bounded $W_t$; their union $R$ is disjoint, finite, contains $W_t$, and is contained in $W$. Therefore $|W\setminus R|\le |W\setminus W_t|<\epsilon$. [step 1.1, step 3.1, F1, construct]

5.1 Fix $\epsilon>0$ and choose $R\subseteq W$ as in step 4.1, a finite union of disjoint rectangles. Translation invariance and the symmetric-difference inclusion give $$|(W+h)\triangle W|\le2|W\setminus R|+|(R+h)\triangle R|.$$ For each half-open rectangle, its overlap with a translate by $h$ has volume tending to the rectangle's volume as $h\to0$, by the box-volume formula; the same limit holds for their finite union. Thus $\limsup_{h\to0}|(W+h)\triangle W|\le2\epsilon$, and arbitrariness of $\epsilon$ gives convergence to zero. [step 4.1, F1, F3, algebra]

6.1 For $a>0$, [F2] gives $|aW|=a^d|W|$ and $|(aW+x)\triangle aW|=a^d|(W+x/a)\triangle W|$. Dividing and applying step 5.1 with $h=x/a\to0$ proves the asserted boundary ratio. [step 5.1, F2, algebra]

7.1 Steps 3.1, 4.1, 5.1, and 6.1 prove positive finite volume, the finite inner rectangle approximation, dilation scaling, and the translated-boundary limit. Countable Choice is used only through [F1]–[F2]; no AC or DC is used. [A1, F1, F2, step 3.1, step 4.1, step 5.1, step 6.1] ∎

## Sources

Last and Penrose, Chapter 8, proof of Theorem 8.14; local details above make the convex-boundary approximation explicit.
