---
id: thm-law-of-the-iterated-logarithm-for-brownian-motion-at-infinity
kind: theorem
title: "Brownian law of the iterated logarithm at infinity"
status: draft
origin: pipeline
deps: [def-brownian-motion, lem-brownian-gaussian-covariance-is-equivalent-to-independent-stationary-normal-increments, cor-law-of-the-brownian-maximum, lem-two-sided-mills-bounds-for-standard-normal-tail, def-standard-normal-and-normal-laws, lem-normal-density-has-total-mass-one, cor-first-borel-cantelli-lemma-for-events, cor-second-borel-cantelli-lemma-under-pairwise-independence, lem-rat-embeds-dense, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Rick Durrett, Probability: Theory and Examples, fifth edition, Theorem 8.5.1"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
---

## Statement

Let $B$ be a standard Brownian motion [[def-brownian-motion]]. Then on one measurable event of probability one
$$\limsup_{t\to\infty}\frac{B_t}{\sqrt{2t\log\log t}}=1,\qquad\liminf_{t\to\infty}\frac{B_t}{\sqrt{2t\log\log t}}=-1$$
the normalizing function being taken for $t>e$ so that $\log\log t>0$.

## Facts & Assumptions

**Given:** AC, a standard Brownian motion $B$, rationals $\alpha>1$, $\beta>1$ and the geometric sequence $t_n=\alpha^n$.

[F1] The increments of $B$ over disjoint intervals are independent with laws $N(0,h)$ for interval length $h$; the path is continuous on a probability-one event. [[def-brownian-motion]]

[F2] Use the everywhere-continuous zero-start representative fixed in the maximum-law theorem (zero the path outside a measurable full event of continuity and zero start). It equals the original Brownian motion at all times on that event, so the final path conclusion transfers back. Law of the maximum: with $M_T=\sup_{0\le s\le T}B_s$ one has $P(M_T>x)=2\overline\Phi(x/\sqrt T)$ for $x>0$, where $\overline\Phi(z)=\int_z^\infty\varphi(y)\,dy$. [[cor-law-of-the-brownian-maximum]]

[F3] Mills bounds: for $z>0$, $\overline\Phi(z)\le\varphi(z)/z$; for $z>1$, $(z^{-1}-z^{-3})\varphi(z)\le\overline\Phi(z)$; and $\varphi(z)=(2\pi)^{-1/2}e^{-z^2/2}$ is decreasing in $|z|$. [[lem-two-sided-mills-bounds-for-standard-normal-tail]] [[def-standard-normal-and-normal-laws]] [[lem-normal-density-has-total-mass-one]]

[F4] First Borel-Cantelli: summable probabilities give almost surely finitely many occurrences; second Borel-Cantelli: independent events with divergent probability sum occur infinitely often almost surely. [[cor-first-borel-cantelli-lemma-for-events]] [[cor-second-borel-cantelli-lemma-under-pairwise-independence]]

[F5] If $X$ is a standard Brownian motion then so is $-X$: the covariance characterisation exhibits the increments of $-X$ as independent stationary Gaussian increments, and continuity is preserved. [[lem-brownian-gaussian-covariance-is-equivalent-to-independent-stationary-normal-increments]]

[F6] The rationals are dense in $\mathbb R$. [[lem-rat-embeds-dense]]

[F7] AC is inherited from the Brownian, normal-law and maximum-law interfaces. Both cited Borel–Cantelli statements are choice-free; no choice assumption is added to them. [[def-axiom-of-choice]]

## Proof

**Proof technique:** direct.

1.1 For $n$ with $t_n>e$ put $U_n:=\{M_{t_n}>\sqrt{2\beta t_n\log\log t_n}\}$ and $z_n:=\sqrt{2\beta\log\log t_n}$; by [F2] and [F3], $P(U_n)=2\overline\Phi(z_n)\le2\varphi(z_n)/z_n\le C_{\alpha,\beta} n^{-\beta}(\log n)^{-1/2}$ for a constant $C_{\alpha,\beta}$, because $\varphi(z_n)=(2\pi)^{-1/2}(\log t_n)^{-\beta}=(2\pi)^{-1/2}(n\log\alpha)^{-\beta}$; since $\beta>1$ the probabilities are summable. For example, grouping $n$ in $[2^j,2^{j+1})$ bounds the upper series by a constant times $\sum_j2^{j(1-\beta)}$, which is geometric. Set the finitely many early events with $t_n\le e$ to the empty event. [given, F1, F2, F3]

1.2 For the lower bound fix $\alpha>1$, put $\beta:=\alpha/(\alpha-1)>1$ and $D_n:=B_{t_{n+1}}-B_{t_n}$, so that by [F1] the $D_n$ are independent with law $N(0,t_{n+1}-t_n)=N(0,t_{n+1}/\beta)$; let $E_n:=\{D_n>\gamma\sqrt{2t_{n+1}\log\log t_{n+1}}\}$ with $\gamma:=1/\sqrt\beta$, and note $\gamma^2\beta=1$. [given, F1]

2.1 By [F4] and [step 1.1] there is a probability-one event on which $U_n$ fails for all sufficiently large $n$; on that event, for every $t\ge t_N$ with $N$ large, choosing $n$ with $t_n\le t<t_{n+1}$ gives $M_t\le M_{t_{n+1}}\le\sqrt{2\beta t_{n+1}\log\log t_{n+1}}$ and hence $\frac{M_t}{\sqrt{2t\log\log t}}\le\sqrt{\beta\alpha\,\frac{\log\log(\alpha t)}{\log\log t}}\to\sqrt{\alpha\beta}$; therefore $\limsup_{t\to\infty}\frac{B_t}{\sqrt{2t\log\log t}}\le\sqrt{\alpha\beta}$ almost surely. [step 1.1, F1, F4]

2.2 For large $n$ the probability of $E_n$ satisfies $P(E_n)=\overline\Phi(\gamma\sqrt{2\beta\log\log t_{n+1}})\ge\frac12 z_n^{-1}\varphi(z_n)=\frac{1}{2\sqrt{2\pi}}\,\frac{1}{\sqrt{2\log\log t_{n+1}}\,\log t_{n+1}}$, with $z_n=\sqrt{2\log\log t_{n+1}}$, by the lower Mills bound of [F3]; since $\log t_{n+1}=(n+1)\log\alpha$, for sufficiently large $n$ this is at least $c_\alpha/((n+1)\sqrt{\log(n+1)})$ with $c_\alpha>0$. In each block $2^j\le n+1<2^{j+1}$, the sum of these lower bounds is at least a positive constant times $1/\sqrt{j+1}$; hence the series diverges (grouping that latter series into square blocks already gives a fixed positive contribution per block). Define the finitely many early events with $t_{n+1}\le e$ to be empty. [step 1.2, F3]

3.1 Intersecting the events of [step 2.1] over the countably many pairs of rationals $\alpha,\beta\in(1,2)$ and using [F6] to choose, for every $\varepsilon>0$, rationals with $\sqrt{\alpha\beta}\le1+\varepsilon$, we obtain $\limsup_{t\to\infty}\frac{B_t}{\sqrt{2t\log\log t}}\le1$ almost surely. [step 2.1, F6]

4.1 By [F5] the process $-B$ is again a standard Brownian motion, so [step 3.1] applies to it and gives $\liminf_{t\to\infty}\frac{B_t}{\sqrt{2t\log\log t}}\ge-1$ almost surely. [step 3.1, F5]

5.1 By [F4] and [step 2.2] the events $E_n$ occur infinitely often almost surely; on the event of [step 4.1] intersected with this one, for infinitely many $n$ one has $B_{t_{n+1}}=B_{t_n}+D_n\ge-(1+\varepsilon)\sqrt{2t_n\log\log t_n}+\gamma\sqrt{2t_{n+1}\log\log t_{n+1}}=\sqrt{2t_{n+1}\log\log t_{n+1}}\bigl(\gamma-(1+\varepsilon)\alpha^{-1/2}(1+o(1))\bigr)$. [step 4.1, step 1.2, step 2.2, F1, F4]

6.1 Since $\gamma=\sqrt{1-1/\alpha}\to1$ and $\alpha^{-1/2}\to0$ as $\alpha\to\infty$, for every $\delta>0$ there are rational $\alpha>1$ and $\varepsilon>0$ with $\gamma-(1+\varepsilon)\alpha^{-1/2}\ge1-\delta$; hence [step 5.1] gives $\limsup_{t\to\infty}\frac{B_t}{\sqrt{2t\log\log t}}\ge1-\delta$ almost surely for every rational $\delta>0$, and intersecting over the countably many $\delta$ yields $\limsup\ge1$ almost surely. [step 5.1, F7]

7.1 Combining [step 3.1] and [step 6.1] gives $\limsup_{t\to\infty}\frac{B_t}{\sqrt{2t\log\log t}}=1$ almost surely; applying this conclusion to the standard Brownian motion $-B$ of [F5], whose limit superior is the negative of the limit inferior of $B$, gives $\liminf_{t\to\infty}\frac{B_t}{\sqrt{2t\log\log t}}=-1$ almost surely. [step 3.1, step 6.1, F5]

8.1 The boundary and degeneracy cases are covered: the normalizer is positive precisely for $t>e$, and the statement is asymptotic as $t\to\infty$; the geometric sequences are indexed from $n=0$, with only finitely many terms below $e$; the parameters over which probability-one events are intersected may be restricted to rational $\alpha,\beta>1$ and rational $\delta>0$, a countable family. The auxiliary value $\gamma=\sqrt{1-1/\alpha}$ need not be rational and creates no additional event: once $\alpha$ is fixed it is a deterministic threshold in the same block events $E_n$. The upper and lower bounds are established using the first Borel-Cantelli lemma for the upper bound and the second for the lower bound; AC enters only through [F7]. [step 3.1, step 6.1, step 7.1, F7, given] ∎

## Source notes

This follows the geometric-block architecture of Durrett, Theorem 8.5.1 (printed pp.416–418), with an explicit critical-threshold variant. Durrett's lower bound uses threshold coefficient $1/\beta$ and a subcritical exponent $1/\beta$; here $\gamma=1/\sqrt\beta$ gives exponent one, whose remaining $1/\sqrt{\log n}$ factor still makes the probability series divergent, as proved in step 2.2. The upper bound, interpolation, independent-block lower bound and sign symmetry follow the same route. The threshold $\gamma$ need not be rational: it is determined by the rational parameter $\alpha$.
