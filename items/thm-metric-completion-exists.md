---
id: thm-metric-completion-exists
kind: theorem
title: "Every metric space has a completion, constructed as the equivalence classes of its Cauchy sequences"
status: draft
origin: session
deps: [def-metric-completion, def-cauchy-in-metric, def-complete-metric-space,
       def-metric-space, def-isometry-and-metric-embedding, def-countable-choice,
       thm-cauchy-criterion-via-lub, def-real-limit, lem-metric-reverse-triangle,
       thm-algebra-of-limits, lem-limit-preserves-order,
       def-metric-interior-closure-boundary, def-metric-ball, def-metric-convergence,
       lem-limit-unique, lem-metric-nonnegativity, lem-of-abs-value,
       cor-archimedean-reciprocal, def-integers, lem-rat-embeds-dense,
       lem-finite-set-has-max, def-max-min]
justified_by: []
forward_refs: [ex-completion-of-q-is-r]
aliases: []
landmark: true
short: "existence of the completion"
proof_strategy: constructive
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Complete metric space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Complete_metric_space"
    - title: "Cauchy sequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cauchy_sequence"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $(X,d)$ be a metric space ([[def-metric-space]]) and let $\mathcal{C}$ be the
set of all Cauchy sequences in $X$ ([[def-cauchy-in-metric]]). Then:

1. For all $x = (x_n)$ and $y = (y_n)$ in $\mathcal{C}$ the real sequence
   $\big(d(x_n,y_n)\big)_n$ converges, so
   $$\rho(x,y) \;:=\; \lim_{n} d(x_n,y_n)$$
   is a single well-determined real ([[thm-cauchy-criterion-via-lub]],
   [[lem-limit-unique]]).
2. The relation $x \sim y :\Longleftrightarrow \rho(x,y) = 0$ is an equivalence
   relation on $\mathcal{C}$. Write $\widehat{X} := \mathcal{C}/\!\sim$ for the
   set of its classes and $[x]$ for the class of $x$.
3. $\widehat{d}\big([x],[y]\big) := \rho(x,y)$ does not depend on the chosen
   representatives, and $\widehat{d}$ is a metric on $\widehat{X}$.
4. The map $\iota : X \to \widehat{X}$ sending $p$ to the class of the constant
   sequence at $p$ is an isometric embedding with dense image
   ([[def-isometry-and-metric-embedding]],
   [[def-metric-interior-closure-boundary]]).
5. $(\widehat{X}, \widehat{d})$ is complete.

Consequently $\big((\widehat{X},\widehat{d}), \iota\big)$ is a completion of
$(X,d)$ ([[def-metric-completion]]), and **every metric space has a
completion**.

**The notation is kept honest.** A Cauchy sequence in $X$ need not converge in
$X$, so no symbol $\lim_n x_n$ appears anywhere below; the only limits taken are
limits of *real* sequences, and each is written only after its existence has been
proved. The equivalence relation is defined and verified here rather than cited,
because this library has no general theory of equivalence relations; the same
was done for [[def-integers]].

## Facts & Assumptions

**Given:** A metric space $(X,d)$; the set $\mathcal{C}$ of Cauchy sequences in $X$; elements $x = (x_n)$, $y = (y_n)$, $z = (z_n)$ of $\mathcal{C}$; a real $\varepsilon > 0$.

[A1] Cauchyness: for every real $\varepsilon > 0$ there is $K$ with $d(x_n,x_m) < \varepsilon$ for all $n,m \ge K$ ([[def-cauchy-in-metric]], [[lem-rat-embeds-dense]]).

[L1] Reverse triangle inequality: $|d(u,w) - d(v,w)| \le d(u,v)$ ([[lem-metric-reverse-triangle]]); with the triangle inequality for the absolute value ([[lem-of-abs-value]]) this gives the quadrilateral estimate $|d(u,v) - d(u',v')| \le d(u,u') + d(v,v')$.

[L2] Every Cauchy sequence of reals converges, and the limit of a real sequence is unique, which licenses the notation $\lim_n a_n$ for a sequence already known to converge ([[thm-cauchy-criterion-via-lub]], [[lem-limit-unique]], [[def-real-limit]]).

[L3] Limits of reals preserve non-strict inequalities holding eventually, and behave additively ([[lem-limit-preserves-order]], [[thm-algebra-of-limits]]); a constant sequence converges to that constant.

[L4] The metric axioms (M1), (M2), (M3) and nonnegativity ([[def-metric-space]], [[lem-metric-nonnegativity]]).

[L5] Density and convergence are tested with balls and with real $\varepsilon > 0$ ([[def-metric-interior-closure-boundary]], [[def-metric-ball]], [[def-metric-convergence]], [[lem-rat-embeds-dense]]).

[L6] Countable choice: a family $(A_k)_{k \in \mathbb{N}}$ of nonempty sets admits $k \mapsto a_k$ with $a_k \in A_k$ ([[def-countable-choice]]).

[L7] For every real $\eta > 0$ there is a natural $K$ with $1/(K+1) < \eta$ ([[cor-archimedean-reciprocal]]).

[L8] Two naturals have a maximum ([[lem-finite-set-has-max]], [[def-max-min]]).

## Proof

**Proof technique:** constructive.

1.1 The quadrilateral estimate of [L1] gives $|d(x_n,y_n) - d(x_m,y_m)| \le d(x_n,x_m) + d(y_n,y_m)$ for all $n,m$. [L1]

2.1 Given a real $\varepsilon > 0$, [A1] supplies $K_x$ and $K_y$ with $d(x_n,x_m) < \varepsilon/2$ and $d(y_n,y_m) < \varepsilon/2$ for indices beyond them; with $K := \max\{K_x,K_y\}$ the sequence $\big(d(x_n,y_n)\big)_n$ satisfies $|d(x_n,y_n) - d(x_m,y_m)| < \varepsilon$ for $n,m \ge K$, so it is a Cauchy sequence of reals. [step 1.1, A1, L8]

3.1 By [L2] that sequence converges and its limit is unique, so $\rho(x,y) := \lim_n d(x_n,y_n)$ is a single well-determined real: claim 1. [step 2.1, L2, construct]

4.1 $\rho$ is nonnegative and symmetric, and satisfies $\rho(x,z) \le \rho(x,y) + \rho(y,z)$: the terms $d(x_n,y_n)$ are nonnegative, $d(x_n,y_n) = d(y_n,x_n)$, and $d(x_n,z_n) \le d(x_n,y_n) + d(y_n,z_n)$ for every $n$, and all three pass to the limit. [step 3.1, L3, L4]

5.1 Claim 2: $\sim$ is reflexive since $d(x_n,x_n) = 0$ for every $n$; symmetric since $\rho$ is; and transitive, since $\rho(x,y) = \rho(y,z) = 0$ gives $0 \le \rho(x,z) \le 0 + 0 = 0$. So $\sim$ is an equivalence relation and $\widehat{X} = \mathcal{C}/\!\sim$ is defined. [step 4.1, L4, construct]

6.1 Claim 3, well-definedness: if $x \sim x'$ and $y \sim y'$ then, by [L1] applied termwise, $|d(x_n,y_n) - d(x'_n,y'_n)| \le d(x_n,x'_n) + d(y_n,y'_n)$; passing to the limit gives $|\rho(x,y) - \rho(x',y')| \le \rho(x,x') + \rho(y,y') = 0$, so $\rho(x,y) = \rho(x',y')$. Hence $\widehat{d}([x],[y]) := \rho(x,y)$ is a well-defined function on $\widehat{X} \times \widehat{X}$. [step 3.1, step 5.1, L1, L3]

7.1 $\widehat{d}$ is a metric: symmetry and the triangle inequality are step 4.1 read on classes, and $\widehat{d}([x],[y]) = 0$ says $\rho(x,y) = 0$, which says $x \sim y$, which says $[x] = [y]$. This completes claim 3. [step 4.1, step 5.1, step 6.1, L4]

8.1 Claim 4: for $p \in X$ the constant sequence at $p$ is Cauchy, so $\iota(p) := [(p)_n]$ is defined, and $\widehat{d}(\iota(p),\iota(q)) = \lim_n d(p,q) = d(p,q)$, a constant sequence; so $\iota$ is an isometric embedding. [step 7.1, L3, construct]

9.1 Density: let $[x] \in \widehat{X}$ and let $\varepsilon > 0$ be real. By [A1] there is $N$ with $d(x_n,x_m) < \varepsilon/2$ for all $n,m \ge N$; in particular $d(x_n,x_N) \le \varepsilon/2$ for all $n \ge N$, so $\widehat{d}([x], \iota(x_N)) = \lim_n d(x_n,x_N) \le \varepsilon/2 < \varepsilon$. Hence every ball around $[x]$ meets $\iota[X]$, that is $\iota[X]$ is dense, completing claim 4. [step 8.1, A1, L3, L5]

10.1 Claim 5: let $(\xi^{(k)})$ be a Cauchy sequence in $(\widehat{X},\widehat{d})$. For each $k$ the set $A_k := \{\, p \in X : \widehat{d}(\xi^{(k)}, \iota(p)) < 1/(k+1) \,\}$ is nonempty by step 9.1, so [L6] supplies $a_k \in A_k$ for every $k$, that is a sequence $(a_k)$ in $X$ with $\widehat{d}(\xi^{(k)}, \iota(a_k)) < 1/(k+1)$. [step 9.1, L6, L7, choose]

11.1 $(a_k)$ is Cauchy in $X$: since $\iota$ is isometric, $d(a_k,a_l) = \widehat{d}(\iota(a_k),\iota(a_l)) \le 1/(k+1) + \widehat{d}(\xi^{(k)},\xi^{(l)}) + 1/(l+1)$; given a real $\varepsilon > 0$, choose $K$ so large that $1/(K+1) < \varepsilon/3$ and $\widehat{d}(\xi^{(k)},\xi^{(l)}) < \varepsilon/3$ for all $k,l \ge K$, and then $d(a_k,a_l) < \varepsilon$ for all $k,l \ge K$. So $a := (a_k) \in \mathcal{C}$ and $[a] \in \widehat{X}$. [step 8.1, step 10.1, L4, L7, L8]

12.1 $\xi^{(k)} \to [a]$: given a real $\varepsilon > 0$ take $K$ as in step 11.1 for $\varepsilon/3$, so that $d(a_k,a_n) < \varepsilon/3$ for all $k,n \ge K$, enlarged if necessary so that also $1/(K+1) < \varepsilon/3$. For $k \ge K$ we have $d(a_k,a_n) \le \varepsilon/3$ for all $n \ge K$, hence $\widehat{d}(\iota(a_k),[a]) = \lim_n d(a_k,a_n) \le \varepsilon/3$, and therefore $\widehat{d}(\xi^{(k)},[a]) \le \widehat{d}(\xi^{(k)},\iota(a_k)) + \widehat{d}(\iota(a_k),[a]) < \varepsilon/3 + \varepsilon/3 < \varepsilon$. [step 10.1, step 11.1, L3, L4, L5]

13.1 So every Cauchy sequence in $(\widehat{X},\widehat{d})$ converges in it, which is claim 5; with claims 1 to 4 this exhibits $\big((\widehat{X},\widehat{d}),\iota\big)$ as a completion of the arbitrary metric space $(X,d)$. [step 3.1, step 5.1, step 7.1, step 9.1, step 12.1, discharge-construct] ∎

## Remarks

- **What the new points are.** A point of $\widehat{X}$ is a class of Cauchy sequences of $X$, two sequences being identified exactly when the distance between their $n$-th terms tends to $0$. The old points reappear as the classes of constant sequences, and the new ones are the classes of Cauchy sequences that had nowhere to go. This is the same move that builds $\mathbb{R}$ out of $\mathbb{Q}$, and the resulting completion of $\mathbb{Q}$ really is $\mathbb{R}$ ([[ex-completion-of-q-is-r]]).
- **Where choice is spent, and where it is not.** Only at step 10.1, which selects one point of $X$ per natural number: that is exactly $\mathrm{AC}_\omega$ ([[def-countable-choice]]). Claims 1 to 4 are choice free. The selection could not be avoided by a uniqueness argument, because a point of $X$ within $1/(k+1)$ of $\xi^{(k)}$ is in general far from unique.
- **The quadrilateral estimate does most of the work.** Step 1.1 is used twice: at step 2.1, to show $\big(d(x_n,y_n)\big)_n$ is Cauchy, and at step 6.1, to show $\rho$ is independent of representatives. It is the reverse triangle inequality ([[lem-metric-reverse-triangle]]) applied twice and added. The triangle inequality for $\rho$, and hence for $\widehat{d}$, does **not** use it: step 4.1 gets that from the triangle inequality of $d$ applied termwise and passed to the limit.
- **Nothing here needs $X$ to be nonempty.** If $X = \emptyset$ then $\mathcal{C} = \emptyset$, $\widehat{X} = \emptyset$, and the empty metric space is complete, vacuously. The construction degenerates correctly rather than requiring a hypothesis.
