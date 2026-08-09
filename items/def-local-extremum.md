---
id: def-local-extremum
kind: definition
title: "Local (relative) maximum and minimum of $f : A \\to \\mathbb{R}$ at a point, the strict forms, and what it means for the point to be interior to $A$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-neighbourhood-r, def-max-min, def-interior-closure-boundary-r, def-complete-ordered-field, def-interval, def-limit-point-r]
justified_by: []
aliases: [def-local-maximum, def-local-minimum, def-relative-extremum]
landmark: true
short: "local maximum, local minimum, interior point"
verification:
  audited: 2026-07-28
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Maximum and minimum (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Maximum_and_minimum"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 5"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §4.2"
      url: "https://www.jirka.org/ra/"
    - title: "J. Lebl, Basic Analysis I, Mean Value Theorem"
      url: "https://www.jirka.org/ra/html/sec_mvt.html"
pipeline_run: null
---

## Definition

Throughout, $\mathbb{R}$ is the complete ordered field
([[def-complete-ordered-field]]) and neighbourhoods are those of
[[def-neighbourhood-r]]. Let $A \subseteq \mathbb{R}$, let $f : A \to
\mathbb{R}$ and let $c \in A$.

- $f$ has a **local maximum at $c$**, also called a *relative maximum*, when
  there is a real $\varepsilon > 0$ with
  $$f(x) \le f(c) \qquad \text{for every } x \in A \cap N_{\varepsilon}(c) .$$
- $f$ has a **local minimum at $c$** when there is a real $\varepsilon > 0$
  with $f(x) \ge f(c)$ for every $x \in A \cap N_{\varepsilon}(c)$.
- $f$ has a **local extremum at $c$** when it has a local maximum or a local
  minimum at $c$.
- $f$ has a **strict local maximum at $c$** when there is a real
  $\varepsilon > 0$ with $f(x) < f(c)$ for every $x \in A \cap
  N^{*}_{\varepsilon}(c)$, the neighbourhood being **punctured**; and a
  **strict local minimum at $c$** when $f(x) > f(c)$ for every such $x$.

The point $c$ is **interior to $A$** when $c \in A^{\circ}$
([[def-interior-closure-boundary-r]]), equivalently when there is a real
$\varepsilon > 0$ with $N_{\varepsilon}(c) \subseteq A$; that equivalence is the
pointwise description of the interior proved in
[[def-interior-closure-boundary-r]] and is not reproved here.

**The strict forms must puncture, and the weak forms must not.** With an
unpunctured neighbourhood the strict condition would read $f(c) < f(c)$ at
$x = c$, which no function satisfies, so the notion would be empty. With a
punctured neighbourhood the weak condition would say nothing at $c$, which is
harmless but pointless, since $f(c) \le f(c)$ holds anyway. So each form is
stated with the quantifier that makes it a condition.

**Four consequences, each an obligation this definition carries.**

1. **The condition does not depend on which witness $\varepsilon$ is produced.**
   If it holds for $\varepsilon$, it holds for every real $\varepsilon'$ with
   $0 < \varepsilon' \le \varepsilon$, because $N_{\varepsilon'}(c) \subseteq
   N_{\varepsilon}(c)$ ([[def-neighbourhood-r]]). So the existential quantifier
   may be read as "for all sufficiently small $\varepsilon$", and two witnesses
   can always be replaced by the smaller of them.

2. **A local maximum really is a maximum, of a set.** $f$ has a local maximum at
   $c$ exactly when there is a real $\varepsilon > 0$ with
   $f(c) = \max f\bigl[A \cap N_{\varepsilon}(c)\bigr]$ ([[def-max-min]]).
   Indeed $c \in A \cap N_{\varepsilon}(c)$, since $c \in A$ and
   $|c - c| = 0 < \varepsilon$ ([[def-neighbourhood-r]]), so $f(c)$ belongs to
   that image; and the defining inequality says exactly that $f(c)$ bounds the
   image above. Conversely a maximum of the image is an element of it bounding
   it above, which is the defining inequality. The same argument with the order
   reversed identifies a local minimum with a minimum of the same image.

3. **A strict local extremum is a local extremum.** If $f(x) < f(c)$ for every
   $x \in A \cap N^{*}_{\varepsilon}(c)$, then $f(x) \le f(c)$ for every
   $x \in A \cap N_{\varepsilon}(c)$: the points of the unpunctured
   neighbourhood other than $c$ are covered by the hypothesis, and at $x = c$
   the inequality $f(c) \le f(c)$ is automatic.

4. **A global extremum is a local one.** If $f(c) = \max f[A]$ then $f$ has a
   local maximum at $c$, with $\varepsilon := 1$ serving, since
   $A \cap N_1(c) \subseteq A$; and dually for the minimum.

**An interior point of $A$ is a limit point of $A$.** Suppose
$N_{\varepsilon}(c) \subseteq A$ with $\varepsilon > 0$ real, and let a real
$\delta > 0$ be given. The punctured neighbourhood
$N^{*}_{\rho}(c)$ with $\rho := \min\{\delta, \varepsilon\} > 0$ is nonempty
([[def-neighbourhood-r]]) and is contained both in $N^{*}_{\delta}(c)$ and in
$N_{\varepsilon}(c) \subseteq A$; so $N^{*}_{\delta}(c) \cap A \ne \varnothing$.
As $\delta$ was arbitrary, $c$ is a limit point of $A$
([[def-limit-point-r]]). **This is what makes an interior extremum a place where
a derivative can be spoken of at all**, and it is the reason the interiority
hypothesis appears in Fermat's theorem below rather than being replaced by
something weaker.

## Remarks

- **"The local maximum" is not a legitimate phrase.** A function may have local
  maxima at many points, and the definite article belongs only to the *value*
  $f(c)$ once the point $c$ is fixed. A global maximum value is unique when it
  exists ([[def-max-min]]); a local one is not, and neither is the point.

- **Local is a statement about $A$, not about $\mathbb{R}$.** The comparison
  runs over $A \cap N_{\varepsilon}(c)$, so a function on a small domain has
  local maxima easily: every point of $A$ at which $A \cap N_{\varepsilon}(c) =
  \{c\}$ for some $\varepsilon$, that is every isolated point of $A$
  ([[def-limit-point-r]]), carries both a strict local maximum and a strict
  local minimum, the punctured condition being vacuous there. Interiority is
  the hypothesis that rules that degenerate case out.

- **Endpoints are the case to keep in mind.** For $A = [a,b]$ with $a < b$
  ([[def-interval]]) the points $a$ and $b$ are not interior to $A$: any
  $N_{\varepsilon}(a)$ contains $a - \varepsilon/2$, which is not in $[a,b]$.
  A function may perfectly well attain its greatest value there, with no
  vanishing derivative anywhere, and the companion page works that case out.

- **Nothing here mentions a derivative.** The definition is purely about the
  order, and it applies to functions that are nowhere differentiable. What the
  next items add is the interaction, in one direction only: differentiability at
  an interior extremum forces the derivative to vanish, and the converse is
  false.
