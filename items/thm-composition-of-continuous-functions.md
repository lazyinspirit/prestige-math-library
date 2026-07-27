---
id: thm-composition-of-continuous-functions
kind: theorem
title: "A composite of continuous functions is continuous, with no side hypothesis of the kind the composition of limits needs"
status: published
origin: session
deps: [def-continuity-real, thm-composition-of-function-limits, fs-naive-composition-of-limits, def-function-limit, def-limit-point-r, def-neighbourhood-r]
justified_by: []
aliases: []
landmark: true
short: "composition of continuous functions"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Continuous function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Continuous_function"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 4 (Thm 4.7)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §3.2"
      url: "https://www.jirka.org/ra/"
pipeline_run: null
---

## Statement

Let $A, B \subseteq \mathbb{R}$, let $g : A \to \mathbb{R}$ with
$g(A) \subseteq B$, and let $f : B \to \mathbb{R}$, so that the composite
$f \circ g : A \to \mathbb{R}$ is defined. Let $c \in A$. If $g$ is continuous
at $c$ and $f$ is continuous at $g(c) \in B$, then $f \circ g$ is continuous at
$c$ ([[def-continuity-real]]).

Consequently, if $g$ is continuous on $A$ and $f$ is continuous on $B$, then
$f \circ g$ is continuous on $A$.

**No side hypothesis is needed, and that is the whole point.** The composition
theorem for limits, [[thm-composition-of-function-limits]], must assume one of
two extra conditions: either $L \in B$ with $f(L) = M$, or $g \ne L$ on a
punctured neighbourhood of $c$; with both dropped the statement is false, which
is [[fs-naive-composition-of-limits]]. The first of those conditions is exactly
*continuity of $f$ at $L$* written out, so under the hypotheses above it holds
automatically and nothing has to be assumed. The mechanism is visible in the
proof: [[def-continuity-real]] quantifies over $|y - b| < \rho$ rather than over
$0 < |y - b| < \rho$, so the value $y = b$ that the limit version cannot control
is precisely the one the continuity hypothesis does control.

## Facts & Assumptions

**Given:** Sets $A, B \subseteq \mathbb{R}$, functions $g : A \to \mathbb{R}$ with $g(A) \subseteq B$ and $f : B \to \mathbb{R}$, a point $c \in A$ at which $g$ is continuous, and the hypothesis that $f$ is continuous at $b := g(c) \in B$.

[L1] Continuity of $g$ at $c$: for every real $\rho > 0$ there is a real $\delta > 0$ such that every $x \in A$ with $|x - c| < \delta$ satisfies $|g(x) - g(c)| < \rho$ ([[def-continuity-real]]).

[L2] Continuity of $f$ at $b$: for every real $\varepsilon > 0$ there is a real $\rho > 0$ such that every $y \in B$ with $|y - b| < \rho$ satisfies $|f(y) - f(b)| < \varepsilon$ ([[def-continuity-real]]).

[L3] Neighbourhoods and the unpunctured quantifier: the condition in [L2] is imposed at every $y \in B$ with $|y - b| < \rho$, the value $y = b$ included ([[def-neighbourhood-r]], [[def-continuity-real]]).

[L4] For limits the corresponding statement needs an extra hypothesis, one of "$L \in B$ and $f(L) = M$" or "$g$ avoids $L$ near $c$", and is false without both ([[thm-composition-of-function-limits]], [[fs-naive-composition-of-limits]], [[def-function-limit]], [[def-limit-point-r]]).

## Proof

**Proof technique:** direct.

1.1 Write $b := g(c)$; by hypothesis $b \in B$, since $g(A) \subseteq B$ and $c \in A$. Also $(f \circ g)(c) = f(b)$. [given]

1.2 Let a real $\varepsilon > 0$ be given. By [L2] fix a real $\rho > 0$ such that every $y \in B$ with $|y - b| < \rho$ satisfies $|f(y) - f(b)| < \varepsilon$. [L2, choose]

2.1 By [L1], applied with this $\rho$, fix a real $\delta > 0$ such that every $x \in A$ with $|x - c| < \delta$ satisfies $|g(x) - b| < \rho$. [step 1.2, L1, choose]

3.1 Let $x \in A$ with $|x - c| < \delta$. Then $g(x) \in B$ and $|g(x) - b| < \rho$ by step 2.1, so $y := g(x)$ is admissible in step 1.2 and gives $\bigl|f(g(x)) - f(b)\bigr| < \varepsilon$, that is $\bigl|(f \circ g)(x) - (f \circ g)(c)\bigr| < \varepsilon$. Note that the case $g(x) = b$ is included, by [L3]. [step 1.1, step 1.2, step 2.1, L3]

4.1 The real $\varepsilon > 0$ was arbitrary and a $\delta > 0$ was produced for it, so $f \circ g$ is continuous at $c$; applying this at every point of $A$ gives continuity of $f \circ g$ on $A$ whenever $g$ is continuous on $A$ and $f$ on $B$. [step 3.1, L1, L2] ∎

## Remarks

- **The contrast with limits, in one sentence.** [[thm-composition-of-function-limits]] cannot control $f$ at the single value $L$, because [[def-function-limit]] never evaluates $f$ there; continuity of $f$ at that value is exactly the missing information, and it is hypothesis (i) of that theorem. So the present theorem is not a strengthening obtained by cleverness: it is the composition theorem under the hypothesis that makes the obstruction vanish.

- **What is not claimed.** Continuity of $f \circ g$ at $c$ does not follow from continuity of $g$ at $c$ alone together with $f$ merely having a limit at $b$; nor does it follow from continuity of $f$ at $b$ together with $g$ merely having a limit at $c$, since then $g(c)$ need not be $b$ at all. Both hypotheses above are hypotheses about the same two points, $c$ and $g(c)$.
