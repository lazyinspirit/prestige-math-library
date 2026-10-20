---
verification:
  repair: research/quantum-computing-algorithms-60-2026-10-15-owner/published-repairs/thm-arithmetic-and-lattice-operations-preserve-measurability.json
id: thm-arithmetic-and-lattice-operations-preserve-measurability
kind: theorem
title: "Arithmetic and lattice operations preserve measurability whenever they are defined"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-extended-reals, def-positive-and-negative-parts-of-a-function, def-measurable-pointwise-extended-real-product, thm-threshold-characterisations-of-real-and-extended-real-measurability, lem-rat-embeds-dense, thm-rationals-countable, def-sigma-algebra, thm-sigma-algebra-closure-laws, def-complete-ordered-field]
proof_strategy: direct
sources:
  references:
    - title: "Sheldon Axler, Measure, Integration and Real Analysis, Section 2B"
      url: "https://measure.axler.net/MIRA.pdf"
    - title: "John K. Hunter, Measure Theory, Definition 3.3"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
---

## Statement

Let $(X,\mathcal A)$ be a measurable space and let
$f,g:X\to\overline{\mathbb R}$ be measurable for the Borel sigma-algebra on
the extended real line. Products of functions use
$\odot_X$ from A total pointwise product for extended-real-valued functions, and $cf$
abbreviates $\underline c\odot_X f$ for the constant function $\underline c$.
The magnitude function is $|f|=\max(f,-f)$ as in
The positive and negative parts of a function. Then:

1. $cf$ is measurable for every real scalar $c$;
2. $\max(f,g)$, $\min(f,g)$, $|f|$, $f^+$, and $f^-$ are measurable;
3. if the partial pointwise sum $f+g$ is defined at every point, then it is measurable;
4. the pointwise product $fg:=f\odot_X g$ is measurable.

## Statement references

[[def-measurable-pointwise-extended-real-product]]

[[def-positive-and-negative-parts-of-a-function]]

## Facts & Assumptions

**Given:** A measurable space $(X,\mathcal A)$ and Borel-measurable functions $f,g:X\to\overline{\mathbb R}$.

[L1] Measurability is equivalent to measurability of all strict upper (or lower) real threshold sets. ([[thm-threshold-characterisations-of-real-and-extended-real-measurability]])

[L2] The parts are $h^+=\max(h,0)$ and $h^-=\max(-h,0)$; $|h|=\max(h,-h)$. At every point one part is zero. ([[def-positive-and-negative-parts-of-a-function]])

[L3] Reflection reverses extended-real order. Partial addition excludes exactly the opposite-infinity pairs; addition with zero is defined. ([[def-extended-reals]])

[L4] The total function product $u\odot_X v$ is zero when either value is zero, is the real product on finite values, and otherwise is the infinity with the sign of the product. This includes all four ordered zero-infinity pairs. ([[def-measurable-pointwise-extended-real-product]])

[L5] A sigma-algebra contains $X$ and the empty set and is closed under finite intersections and countable unions; the rationals are countable, and between distinct real numbers lies a rational. ([[def-sigma-algebra]], [[thm-sigma-algebra-closure-laws]], [[thm-rationals-countable]], [[lem-rat-embeds-dense]])

[L6] Finite real arithmetic is ordered-field arithmetic. ([[def-complete-ordered-field]])

## Proof

**Proof technique:** direct.

1.1 Scalar multiples are measurable. If $c>0$, the product clauses give $\{cf>a\}=\{f>a/c\}$ for every real $a$, including infinite values of $f$. If $c<0$, they give $\{cf>a\}=\{f<a/c\}$. If $c=0$, $cf$ is constantly zero, whose threshold sets are $X$ or empty. Thus [L1] proves the claim, including measurability of $-f$. The latter agrees pointwise with reflection by the finite and the two infinite sign cases. [given, L1, L3, L4, L5, L6]

1.2 Assume $f+g$ is defined at every point. For every real $a$, $$\{f+g>a\}=\bigcup_{q\in\mathbb Q}\bigl(\{f>q\}\cap\{g>a-q\}\bigr).$$ To check the right-to-left inclusion, both values then exceed finite bounds, hence neither is $-\infty$. If either is $+\infty$, the sum is $+\infty$; otherwise finite ordered-field addition gives $f(x)+g(x)>a$. Conversely, a defined sum greater than $a$ cannot have a $-\infty$ summand. If both summands are finite, choose $a-g(x)<q<f(x)$. If $f(x)=+\infty$ and $g(x)$ is finite, choose $a-g(x)<q<a-g(x)+1$. If $g(x)=+\infty$ and $f(x)$ is finite, choose $f(x)-1<q<f(x)$. If both are $+\infty$, take $q=0$. These are all cases. The union is countable and each intersection is measurable, proving measurability of the sum. [L1, L3, L5, L6]

1.3 Let $u,v:X\to[0,+\infty]$ be measurable. Their product is nonnegative by [L4], so its strict upper threshold set is $X$ when $a<0$. For real $a\ge0$, $$\{u\odot_X v>a\}=\bigcup_{q\in\mathbb Q,\ q>0}\bigl(\{u>q\}\cap\{v>a/q\}\bigr).$$ A point on the right has $u(x)>q>0$ and $v(x)>a/q\ge0$. If either value is infinite the product is $+\infty$; otherwise multiplying the strict finite bounds proves that the product exceeds $a$. Conversely, a product greater than $a\ge0$ has neither value zero. If both values are finite positive, choose $a/v(x)<q<u(x)$, which is possible because $u(x)v(x)>a$. If $u(x)$ is finite positive and $v(x)=+\infty$, choose $0<q<u(x)$. If $u(x)=+\infty$ and $v(x)$ is finite positive, choose $a/v(x)<q<a/v(x)+1$; this ensures $q>0$, also at $a=0$. If both values are $+\infty$, take $q=1$. These cases include $a=0$ and exclude zero-infinity pairs exactly because their product is zero. Countability and threshold measurability prove measurability of the nonnegative product. [L1, L4, L5, L6]

2.1 For real $a$, total order gives $$\{\max(f,g)>a\}=\{f>a\}\cup\{g>a\},\qquad \{\min(f,g)>a\}=\{f>a\}\cap\{g>a\}.$$ The threshold criterion gives measurability. The zero function is measurable, so this also gives measurability of $f^+$, $f^-$ and $|f|=\max(f,-f)$. [step 1.1, L1, L2, L3, L5]

3.1 By step 2.1 the four parts $f^+,f^-,g^+,g^-$ are nonnegative measurable functions. Step 1.3 makes their four $\odot_X$ products measurable. Define $$h_+=(f^+\odot_X g^+)+(f^-\odot_X g^-),\qquad h_-=(f^+\odot_X g^-)+(f^-\odot_X g^+).$$ Each addition is defined because both summands are nonnegative, so step 1.2 proves that $h_+,h_-$ are measurable. If either original value is zero, all four products are zero. If both are positive, only $f^+\odot_X g^+$ can be nonzero; if both are negative, only $f^-\odot_X g^-$ can be nonzero. If $f(x)>0>g(x)$, only $f^+\odot_X g^-$ can be nonzero; if $f(x)<0<g(x)$, only $f^-\odot_X g^+$ can be nonzero. Thus at least one of $h_+(x),h_-(x)$ is zero in every case. [step 2.1, step 1.2, step 1.3, L2, L3, L4]

4.1 The sum $h_++(-h_-)$ is therefore defined at every point. It is measurable by steps 1.1 and 1.2. It equals $f\odot_X g$: in the zero case both sides are zero; in the two same-sign cases step 3.1 leaves the nonnegative magnitude product in $h_+$ and zero in $h_-$, and in the two opposite-sign cases it leaves zero in $h_+$ and that magnitude product in $h_-$. When both original values are finite, the real sign rules identify the value with their real product. When at least one nonzero original value is infinite, the remaining magnitude product is $+\infty$, and the reconstruction is respectively $+\infty$ or $-\infty$, exactly as [L4] requires. No extended-real distributivity or cancellation is used. [step 1.1, step 1.2, step 3.1, L3, L4, L6]

5.1 Steps 1.1 and 2.1 prove scalar and lattice closure, step 1.2 proves defined-sum closure, and step 4.1 proves product closure with the declared convention. These are all four assertions. [step 1.1, step 2.1, step 1.2, step 4.1] ∎
