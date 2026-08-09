---
id: def-uniform-continuity-real
kind: definition
title: "Uniform continuity of $f : A \\to \\mathbb{R}$: one $\\delta$ serving every pair of points of $A$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-continuity-real, def-interval, def-neighbourhood-r, lem-of-abs-value]
justified_by: []
aliases: []
forward_refs: [cex-one-over-x-is-not-uniformly-continuous-on-the-unit-interval, cex-x-squared-is-not-uniformly-continuous-on-r]
landmark: true
short: "uniform continuity of a real function"
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Uniform continuity (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Uniform_continuity"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 4 (Def. 4.18)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §3.4"
      url: "https://www.jirka.org/ra/"
    - title: "J. Lebl, Basic Analysis I, §3.3: Uniform continuity"
      url: "https://www.jirka.org/ra/html/sec_unifcont.html"
pipeline_run: null
---

## Definition

Let $A \subseteq \mathbb{R}$ and let $f : A \to \mathbb{R}$. Then $f$ is
**uniformly continuous on $A$** when

$$(\forall \varepsilon > 0)\ (\exists \delta > 0)\ (\forall x, x' \in A)\ \bigl[\ |x - x'| < \delta \ \Longrightarrow\ |f(x) - f(x')| < \varepsilon\ \bigr],$$

with $\varepsilon$ and $\delta$ ranging over the positive reals.

**The whole content is in the order of the quantifiers.** Written out,
continuity on $A$ ([[def-continuity-real]]) is

$$\forall \varepsilon\ \forall c \in A\ \exists \delta\ \forall x \in A ,$$

and uniform continuity is

$$\forall \varepsilon\ \exists \delta\ \forall x' \in A\ \forall x \in A .$$

Moving $\exists \delta$ to the left of the point quantifier is the entire
difference: for continuity the radius may shrink from point to point, for
uniform continuity one radius must serve the whole of $A$ at once. This is the
same distinction, for the same reason, that [[def-metric-uniform-continuity]]
draws for maps of metric spaces.

**Uniform continuity implies continuity.** Given $\varepsilon > 0$, take the
$\delta$ supplied by uniform continuity and, at a point $c \in A$, apply the
condition with $x' := c$: every $x \in A$ with $|x - c| < \delta$ satisfies
$|f(x) - f(c)| < \varepsilon$. So the same $\delta$ witnesses continuity at
every point of $A$ simultaneously. The converse fails, and the failure is not
marginal: [[fs-continuity-implies-uniform-continuity]] refutes it on this page,
and the companion page works two witnesses out in full.

**Uniform continuity is a property of the pair $(f, A)$, not of $f$ alone.** The
same formula may be uniformly continuous on one set and not on another:
$x \mapsto 1/x$ is uniformly continuous on $[1,\infty)$ and not on $(0,1)$, and
$x \mapsto x^{2}$ is uniformly continuous on every bounded interval and not on
$\mathbb{R}$. Restricting the domain therefore never destroys uniform
continuity, since the condition then quantifies over fewer pairs; enlarging it
may.

**The two points are unordered and may coincide.** Nothing above excludes
$x = x'$, at which the implication reads $|f(x) - f(x)| = 0 < \varepsilon$
([[lem-of-abs-value]]) and is automatic, and the condition is symmetric in the
two points because $|x - x'| = |x' - x|$.

## Remarks

- **A single $\delta$, and a picture.** For a uniformly continuous $f$ one may
  slide a rectangle of width $\delta$ and height $2\varepsilon$ along the graph
  and never have the graph leave it through the top or bottom. For a merely
  continuous $f$ the rectangle must be narrowed as one moves, and on
  $x \mapsto 1/x$ over $(0,1)$ it must be narrowed without limit.

- **Neighbourhood form.** The condition says
  $f\bigl(A \cap N_{\delta}(x')\bigr) \subseteq N_{\varepsilon}(f(x'))$ for
  every $x' \in A$, with one $\delta$ ([[def-neighbourhood-r]]). That is
  continuity on $A$ with the radius independent of the centre.

- **On an interval this is the notion the extension theorem needs.** A
  uniformly continuous function on a set $D$ extends to one on the closure of
  $D$ ([[cor-continuous-extension-from-a-dense-subset-r]]); mere continuity does
  not suffice, since $x \mapsto 1/x$ on $(0,1)$ has no continuous extension to
  $[0,1]$ ([[def-interval]]).

- **The two standard witnesses, for orientation.** The converse fails in two
  independent ways, each worked out on the companion page:
  [[cex-one-over-x-is-not-uniformly-continuous-on-the-unit-interval]] on a
  bounded domain that is not closed, and
  [[cex-x-squared-is-not-uniformly-continuous-on-r]] on a closed domain that is
  not bounded. Both are named here for orientation only; nothing in this
  definition rests on them.

- **Lipschitz and Hölder conditions are stronger still, and are not redefined
  here.** They are [[def-lipschitz-holder-contraction]] instantiated at
  $A \subseteq \mathbb{R}$ with $d(x,y) = |x-y|$; the dictionary that makes that
  instantiation legitimate, and that transports the implications of
  [[thm-metric-regularity-hierarchy]] to real functions, is
  [[lem-real-and-metric-notions-agree]], immediately below.
