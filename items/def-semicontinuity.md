---
id: def-semicontinuity
kind: definition
title: "Upper and lower semicontinuity of $f : A \\to \\mathbb{R}$ at a point of $A$ and on $A$"
status: published
origin: session
deps: [def-continuity-real, def-neighbourhood-r, def-complete-ordered-field, lem-of-abs-value]
justified_by: []
aliases: [def-upper-semicontinuous, def-lower-semicontinuous]
landmark: true
short: "upper and lower semicontinuity"
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
    - title: "Semi-continuity (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Semi-continuity"
pipeline_run: null
---

## Definition

Let $A \subseteq \mathbb{R}$, let $f : A \to \mathbb{R}$ and let $c \in A$, with
neighbourhoods as in [[def-neighbourhood-r]].

- $f$ is **upper semicontinuous at $c$** when for every real $\varepsilon > 0$
  there is a real $\delta > 0$ with
  $$f(x) \;<\; f(c) + \varepsilon \qquad \text{for every } x \in A \cap N_\delta(c).$$
- $f$ is **lower semicontinuous at $c$** when for every real $\varepsilon > 0$
  there is a real $\delta > 0$ with
  $$f(x) \;>\; f(c) - \varepsilon \qquad \text{for every } x \in A \cap N_\delta(c).$$
- $f$ is **upper semicontinuous on $A$**, respectively **lower semicontinuous on
  $A$**, when it is so at every point of $A$.

In words: an upper semicontinuous function cannot jump **up** in the limit, and
a lower semicontinuous one cannot jump **down**. Both conditions are pointwise,
both quantify over the same unpunctured neighbourhoods as
[[def-continuity-real]], and at $x = c$ each holds automatically, since
$f(c) < f(c) + \varepsilon$ and $f(c) > f(c) - \varepsilon$.

### Continuity is exactly the conjunction

$f$ is continuous at $c$ **if and only if** it is both upper and lower
semicontinuous at $c$.

*If $f$ is continuous at $c$*, a $\delta$ witnessing $|f(x) - f(c)| < \varepsilon$
on $A \cap N_\delta(c)$ witnesses both displayed conditions, since
$|f(x) - f(c)| < \varepsilon$ gives $-\varepsilon < f(x) - f(c) < \varepsilon$
([[lem-of-abs-value]]).

*Conversely*, given $\varepsilon > 0$ take $\delta_1$ for the upper condition
and $\delta_2$ for the lower one and put $\delta := \min\{\delta_1, \delta_2\} > 0$.
For $x \in A \cap N_\delta(c)$ both $f(x) < f(c) + \varepsilon$ and
$f(x) > f(c) - \varepsilon$ hold, that is $|f(x) - f(c)| < \varepsilon$
([[lem-of-abs-value]]). So $f$ is continuous at $c$.

Consequently $f$ is continuous on $A$ exactly when it is both upper and lower
semicontinuous on $A$.

### Negation exchanges the two

$f$ is upper semicontinuous at $c$ **if and only if** $-f$ is lower
semicontinuous at $c$, since $f(x) < f(c) + \varepsilon$ says the same thing as
$-f(x) > -f(c) - \varepsilon$ ([[def-complete-ordered-field]]). Every statement
about one notion below is therefore proved for one of them and transferred to
the other by this substitution, never proved twice.

**Neither notion implies the other, and neither implies continuity.** The
indicator of a closed set is upper semicontinuous and the indicator of an open
set is lower semicontinuous, and neither is continuous unless the set is clopen;
the companion page uses an upper semicontinuous function on $[0,1]$ that attains
no minimum.
