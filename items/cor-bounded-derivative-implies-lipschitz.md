---
id: cor-bounded-derivative-implies-lipschitz
kind: corollary
title: "If $f$ is continuous on an interval $I$ and $|f'| \\le M$ at every interior point, then $|f(x) - f(y)| \\le M|x-y|$ for all $x,y \\in I$, so $f$ is Lipschitz with constant $M$ and uniformly continuous on $I$"
status: draft
origin: session
deps: [cor-mean-value-theorem, def-derivative, def-interval, def-continuity-real, def-uniform-continuity-real, lem-real-and-metric-notions-agree, def-lipschitz-holder-contraction, thm-metric-regularity-hierarchy, lem-of-abs-value, def-interior-closure-boundary-r, def-neighbourhood-r, prop-of-multiply-inequalities, def-limit-point-r]
justified_by: []
forward_refs: [cex-differentiable-with-unbounded-derivative-is-not-lipschitz]
aliases: []
landmark: true
short: "bounded derivative gives Lipschitz"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Lipschitz continuity (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Lipschitz_continuity"
    - title: "Mean value theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Mean_value_theorem"
    - title: "J. Lebl, Basic Analysis I, §4.2"
      url: "https://www.jirka.org/ra/"
pipeline_run: null
---

## Statement

Let $I \subseteq \mathbb{R}$ be order-convex ([[def-interval]]), let
$f : I \to \mathbb{R}$ be continuous on $I$ ([[def-continuity-real]]) and
differentiable at every point of $I$ interior to $I$
([[def-interior-closure-boundary-r]], [[def-derivative]]), and let
$M \in \mathbb{R}$ with $M \ge 0$ satisfy

$$|f'(x)| \;\le\; M \qquad \text{at every interior point } x \text{ of } I .$$

Then

$$|f(x) - f(y)| \;\le\; M\,|x - y| \qquad \text{for all } x, y \in I ,$$

which is exactly the statement that $f$ is **Lipschitz with constant $M$** on
$I$ ([[def-lipschitz-holder-contraction]], clause 3 of
[[lem-real-and-metric-notions-agree]]). Consequently $f$ is uniformly
continuous on $I$ ([[def-uniform-continuity-real]]).

**$M \ge 0$ is a hypothesis, not a deduction.** It follows from
$|f'(x)| \le M$ at any single interior point, absolute values being
nonnegative, but $I$ need have no interior point at all, and then the sign
condition has to be asked for. With $M \ge 0$ assumed the conclusion is a
genuine statement in every case, and at $x = y$ it reads $0 \le 0$.

**Boundedness of $f'$ cannot be dropped.** A function may be continuous on an
interval and differentiable at every interior point with no bound on $|f'|$, and
then it need not be Lipschitz there; the companion page's square root on
$(0,1]$ is such a function.

## Facts & Assumptions

**Given:** An order-convex $I \subseteq \mathbb{R}$, a function $f : I \to \mathbb{R}$ continuous on $I$ and differentiable at every interior point of $I$, and a real $M \ge 0$ with $|f'(x)| \le M$ at every interior point $x$ of $I$.

[L1] Mean value theorem ([[cor-mean-value-theorem]]): for $u < v$ and $h : [u,v] \to \mathbb{R}$ continuous on $[u,v]$ and differentiable at every point of $(u,v)$, there is $c \in (u,v)$ with $h(v)-h(u) = h'(c)(v-u)$.

[L2] Order-convexity ([[def-interval]]): $u, v \in I$ with $u \le v$ gives $[u,v] \subseteq I$; and for $u < v$ in $I$ every $x \in (u,v)$ is interior to $I$, since $N_{\varepsilon}(x) \subseteq (u,v) \subseteq I$ for $\varepsilon := \min\{x-u,\ v-x\} > 0$ ([[def-neighbourhood-r]], [[def-interior-closure-boundary-r]]).

[L3] Restriction of the domain ([[def-derivative]]): if $B \subseteq A$, if $p \in B$ is a limit point of $B$ and if $h : A \to \mathbb{R}$ is differentiable at $p$, then $h|_B$ is differentiable at $p$ with the same derivative; every point of an order-convex set with at least two elements is a limit point of it ([[def-limit-point-r]]).

[L4] Continuity passes to a subset of the domain ([[def-continuity-real]]).

[L5] Absolute value ([[lem-of-abs-value]]): $|u| \ge 0$; $|u| = 0$ exactly when $u = 0$; $|uw| = |u|\,|w|$; and $|{-u}| = |u|$, so $|x - y| = |y - x|$.

[L6] Dictionary ([[lem-real-and-metric-notions-agree]], clause 3): for a real $L \ge 0$, "$f : A \to \mathbb{R}$ is Lipschitz with constant $L$" means exactly that $|f(x)-f(x')| \le L\,|x-x'|$ for all $x, x' \in A$, this being the metric condition of [[def-lipschitz-holder-contraction]] instantiated at $A \subseteq \mathbb{R}$ with $d(x,y) = |x-y|$.

[L7] Regularity hierarchy ([[thm-metric-regularity-hierarchy]], claim 2), transported to real functions by clauses 2 and 6 of [[lem-real-and-metric-notions-agree]]: a Lipschitz $f : A \to \mathbb{R}$ is uniformly continuous on $A$ in the sense of [[def-uniform-continuity-real]].

[L8] Multiplying non-strict inequalities of nonnegatives ([[prop-of-multiply-inequalities]]): $0 \le s \le t$ and $0 \le w \le z$ imply $sw \le tz$.

## Proof

**Proof technique:** direct.

1.1 Let $x, y \in I$. If $x = y$ then $|f(x)-f(y)| = |0| = 0$ and $M|x-y| = M \cdot 0 = 0$, so the asserted inequality holds. Assume therefore $x \ne y$, and put $u := \min\{x,y\}$ and $v := \max\{x,y\}$, so that $u, v \in I$, $u < v$, and $|x - y| = v - u = |v - u|$ by [L5]. [given, L5]

2.1 By [L2] the segment $[u,v]$ lies in $I$ and is nondegenerate; the restriction $f|_{[u,v]}$ is continuous on $[u,v]$ by [L4]; and each $x' \in (u,v)$ is interior to $I$ by [L2], hence a point at which $f$ is differentiable with $|f'(x')| \le M$, while $x'$ is a limit point of $[u,v]$ by [L3], so $f|_{[u,v]}$ is differentiable at $x'$ with the same derivative. [step 1.1, L2, L3, L4]

3.1 By step 2.1 the function $f|_{[u,v]}$ satisfies the hypotheses of [L1], so fix $c \in (u,v)$ with $f(v) - f(u) = f'(c)\,(v-u)$. [step 2.1, L1, choose]

4.1 Taking absolute values in step 3.1 and using $|uw| = |u||w|$ gives $|f(v)-f(u)| = |f'(c)|\,|v-u|$. The point $c$ lies in $(u,v)$, hence is interior to $I$ by step 2.1, so $0 \le |f'(c)| \le M$; and $0 \le |v-u| \le |v-u|$. So [L8] gives $|f'(c)|\,|v-u| \le M\,|v-u|$, whence $|f(v)-f(u)| \le M\,|v-u|$. Since $\{u,v\} = \{x,y\}$ and $|f(v)-f(u)| = |f(x)-f(y)|$ by [L5], and $|v-u| = |x-y|$ by step 1.1, this is $|f(x)-f(y)| \le M\,|x-y|$. [step 2.1, step 3.1, L5, L8]

5.1 The pair $x, y \in I$ was arbitrary and the case $x = y$ was settled in step 1.1, so $|f(x)-f(y)| \le M|x-y|$ for all $x, y \in I$. By [L6] that is the statement that $f$ is Lipschitz with constant $M$ on $I$, and by [L7] such an $f$ is uniformly continuous on $I$. [step 1.1, step 4.1, L6, L7] ∎

## Remarks

- **The constant is the bound on the derivative, unchanged.** No factor is lost and none is gained: the mean value theorem turns the increment into a single value of $f'$ times the increment of the argument, so whatever bounds $|f'|$ bounds the Lipschitz ratio. That is why this corollary is so much sharper than the mere uniform continuity that follows from it.

- **Uniform continuity is obtained through the metric dictionary, not reproved.** [[lem-real-and-metric-notions-agree]] says that the Lipschitz condition for a real function is the metric one instantiated, and [[thm-metric-regularity-hierarchy]] says that a Lipschitz map is uniformly continuous. Neither statement is restated here in an $\mathbb{R}$-native form, because both already exist in the library and duplicating them would create exactly the seam those items were written to close.

- **What the converse would say, and why it is not asserted.** A Lipschitz function need not be differentiable at any particular point, so no statement about $f'$ follows from a Lipschitz bound alone, and this corollary asserts none.

- **The boundedness hypothesis is exactly what is needed.** [[cex-differentiable-with-unbounded-derivative-is-not-lipschitz]] on the companion page exhibits a function continuous on $(0,1]$ and differentiable at every interior point, with $|f'|$ bounded by no real at all, which is not Lipschitz there. So the hypothesis cannot be replaced by mere differentiability, and it cannot be replaced by a bound holding only near one end of the interval.
