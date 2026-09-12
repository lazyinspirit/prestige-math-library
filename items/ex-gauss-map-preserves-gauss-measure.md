---
id: ex-gauss-map-preserves-gauss-measure
kind: example
title: The Gauss map preserves Gauss measure
deps: ["thm-indefinite-integral-of-a-nonnegative-function-is-a-measure", "thm-logarithm-derivative-and-integral", "thm-natural-logarithm-laws", "thm-continuous-implies-integrable", "thm-ftc-second-part", "thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral", "prop-countable-subsets-of-rn-are-lebesgue-null", "thm-measure-preservation-on-a-generating-pi-system", "prop-measure-preserving-compositions-iterates-and-completions", "def-countable-choice", "lem-q-and-irrationals-dense-r", "thm-rationals-countable"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: E–W Lemma 3.5, Gauss measure
      url: https://webspace.maths.qmul.ac.uk/f.vivaldi/teaching/ETAD/NotesI.pdf
status: draft
origin: pipeline
proof_strategy: direct
---

## Example

Assume countable choice. On $X=[0,1)$ put $G(0)=0$ and $G(x)=\{1/x\}$ for $x>0$. The Borel probability $\mu$ with density $h(x)=1/[\log(2)(1+x)]$ relative to Lebesgue measure is $G$-invariant. The same map preserves its completion. This example proves measure preservation only.

## Facts & Assumptions

[F1] A nonnegative measurable density defines a measure by integration over sets. [[thm-indefinite-integral-of-a-nonnegative-function-is-a-measure]].

[F2] The logarithm has derivative $1/x$ on the positive reals. [[thm-logarithm-derivative-and-integral]].

[F3] The logarithm is continuous, strictly increasing, vanishes at one, and obeys the quotient law. [[thm-natural-logarithm-laws]].

[F4] Continuous functions on closed bounded intervals are bounded and Riemann integrable. [[thm-continuous-implies-integrable]].

[F5] The Riemann integral of an integrable derivative is the primitive difference, including one-sided endpoint derivatives. [[thm-ftc-second-part]].

[F6] Under countable choice, bounded Riemann integrable functions have the same Lebesgue integral. [[thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral]].

[F7] At most countable sets are Lebesgue measurable and null under countable choice. [[prop-countable-subsets-of-rn-are-lebesgue-null]].

[F8] It suffices to check a measurable self-map on a generating pi-system for a finite measure. [[thm-measure-preservation-on-a-generating-pi-system]].

[F9] A measure-preserving transformation extends to the completed measure space. [[prop-measure-preserving-compositions-iterates-and-completions]].

[F10] Rational points are dense in the real line. [[lem-q-and-irrationals-dense-r]].

[F11] The rationals are countable. [[thm-rationals-countable]].

## Verification

**Given:** Assume countable choice. On $X=[0,1)$ put $G(0)=0$ and $G(x)=\{1/x\}$ for $x>0$. The Borel probability $\mu$ with density $h(x)=1/[\log(2)(1+x)]$ relative to Lebesgue measure is $G$-invariant. The same map preserves its completion. This example proves measure preservation only.

1.1 By [F3], $\log2>\log1=0$, so $h$ is positive, bounded by $1/\log2$, and continuous on $[0,1]$. By [F4] it is Riemann integrable on every closed subinterval. The derivative of $\log(1+x)$ is $1/(1+x)$ by [F2], using the translated difference quotient, also one-sided at subinterval endpoints. Thus [F5] and [F6] yield $\int_{[a,b]}h\,d\lambda=[\log(1+b)-\log(1+a)]/\log2$ for $0\le a<b\le1$. Singletons and countable sets have zero density integral because they are null by [F7] and $h$ is bounded. Consequently endpoints do not change this interval value. By [F1] the density defines a Borel measure, and the value with $a=0,b=1$ is one; removing the endpoint 1 does not change it. [F1, F2, F3, F4, F5, F6, F7]

1.2 The Borel sets $J_n=(1/(n+1),1/n]\cap X$, $n\ge1$, partition $(0,1)$. On $J_n$, $G(x)=1/x-n$, and on the singleton $\{0\}$ it is zero. Each branch is the restriction of a continuous real function and takes values in $[0,1)$, so for every open subset of $X$ its inverse image is a countable union of Borel branch inverse images and possibly $\{0\}$. This proves Borel measurability. For $0<s<1$, the exact inverse image is $G^{-1}[0,s]=\{0\}\cup\bigcup_{n\ge1}([1/(n+s),1/n]\cap X)$. The displayed intervals are pairwise disjoint because $1/(n+s)>1/(n+1)$. The only endpoint outside $X$ is 1 when $n=1$. [1.1]

2.1 Using the interval integral of step 1.1 and countable additivity, $\mu(G^{-1}[0,s])$ is $1/\log2$ times the sum over $n\ge1$ of $\log(1+1/n)-\log(1+1/(n+s))$. The quotient law [F3] and the identity $(1+1/n)/(1+1/(n+s))=(1+s/n)/(1+s/(n+1))$ rewrite the partial sum through $M$ as $\log(1+s)-\log(1+s/(M+1))$. All original summands are nonnegative. Continuity of $\log$ at 1 gives the limit $\log(1+s)$, so $\mu(G^{-1}[0,s])=\log(1+s)/\log2=\mu([0,s])$. For $s=0$, the preimage is $\{0\}\cup\{1/n:n\ge2\}$, an explicitly enumerated countable null set, and both masses are zero. The full space $X$ also has equal inverse-image mass one. [1.1, 1.2, F3, F7]

3.1 The family consisting of $X$, the empty set, and all $[0,s]$ with $0\le s<1$ is a pi-system. It generates the Borel sets of $X$: complements give $(s,1)$, and increasing unions of initial closed intervals give $[0,b)$; intersections give ordinary open intervals, which form a countable rational-endpoint base for the interval topology. Conversely all generators are Borel. The measure is finite and $G$ is measurable, so [F8] applies to step 2.1 and proves preservation for every Borel set. By [F9] the map is measurable and preserving on the completion as well. Countable choice is inherited in the Lebesgue/Riemann comparison, null-set and completion suppliers; the branch sums and partial-sum telescoping make no choices. The rational-base assertion uses [F10]. The rational-base assertion uses [F11]. [1.1, 1.2, 2.1, F6, F7, F8, F9, F10, F11]

4.1 The corresponding inverse-branch density calculation can also be seen directly. On $0<y<1$, the inverse branch is $\eta_n(y)=1/(n+y)$, with $|\eta_n^{\prime}(y)|=1/(n+y)^2$. Hence $h(\eta_n(y))|\eta_n^{\prime}(y)|=1/[\log2\,(n+y)(n+y+1)]$. The algebraic identity $1/[(n+y)(n+y+1)]=1/(n+y)-1/(n+y+1)$ gives the partial sum $[1/(1+y)-1/(M+1+y)]/\log2$, tending to $h(y)$. This verifies the density balance numerically; the interval proof in steps 1.1–3.1 already establishes measure preservation without assuming a change-of-variables theorem. The separate endpoint computations in step 2.1 account for $y=0$. [1.1, 1.2, 2.1, 3.1] ∎

