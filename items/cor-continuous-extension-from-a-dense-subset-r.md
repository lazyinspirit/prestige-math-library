---
id: cor-continuous-extension-from-a-dense-subset-r
kind: corollary
title: "A uniformly continuous real function on a subset $D \\subseteq \\mathbb{R}$ extends uniquely to a uniformly continuous function on the closure of $D$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-real-and-metric-notions-agree, thm-uniformly-continuous-extension-from-dense, thm-euclidean-space-complete, def-complete-metric-space, def-uniform-continuity-real, def-continuity-real, def-metric-interior-closure-boundary, def-interior-closure-boundary-r, thm-closure-characterisations-r, def-open-and-closed-in-r, def-isometry-and-metric-embedding, lem-real-line-is-a-metric-space, def-metric-ball, def-neighbourhood-r, def-metric-space, def-metric-uniform-continuity, def-metric-continuity]
justified_by: []
aliases: [cor-dense-extension-r]
forward_refs: [cex-one-over-x-is-not-uniformly-continuous-on-the-unit-interval]
landmark: true
short: "continuous extension from a dense subset"
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
    - title: "Uniform continuity (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Uniform_continuity"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 4 (Exercise 4.13)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §3.4"
      url: "https://www.jirka.org/ra/"
    - title: "MIT 18.100, Practice Final 3"
      url: "https://math.mit.edu/classes/18.100/Practice-Final-3.18.100.pdf"
pipeline_run: null
---

## Statement

Let $D \subseteq \mathbb{R}$ be nonempty and let $f : D \to \mathbb{R}$ be
uniformly continuous on $D$ ([[def-uniform-continuity-real]]). Write
$\overline{D}$ for the closure of $D$ in $\mathbb{R}$
([[def-interior-closure-boundary-r]]). Then:

1. there is a **uniformly continuous** $g : \overline{D} \to \mathbb{R}$ with
   $g(x) = f(x)$ for every $x \in D$;
2. $g$ is the **only** continuous function $\overline{D} \to \mathbb{R}$
   extending $f$ ([[def-continuity-real]]).

**Uniform continuity is what is needed, and continuity is not enough.** The
function $x \mapsto 1/x$ is continuous on $D = (0,1)$, whose closure is $[0,1]$,
and no continuous $g : [0,1] \to \mathbb{R}$ extends it, since a continuous
function on the compact set $[0,1]$ is bounded ([[cor-boundedness-theorem-r]])
while $1/x$ is not bounded on $(0,1)$. By this corollary, $x \mapsto 1/x$ is
therefore not uniformly continuous on $(0,1)$.

**This is the metric extension theorem, read through the dictionary.** The work
is done by [[thm-uniformly-continuous-extension-from-dense]], applied to the
metric space $X := \overline{D}$ with the subspace metric, its dense subset $D$,
and the complete target $(\mathbb{R}, d_{\mathbb{R}})$
([[thm-euclidean-space-complete]]); [[lem-real-and-metric-notions-agree]]
translates the hypothesis and the conclusion between the two vocabularies. The
extension is *constructed* there and not selected, so no choice principle enters
through it.

**Why later pages need exactly this.** The exponential and the power functions
are defined on $\mathbb{Q}$ first and then extended to $\mathbb{R}$, and the
extension step is this corollary with $D$ the rationals of an interval; that is
the use for which it is stated here rather than inside an example.

## Facts & Assumptions

**Given:** A nonempty set $D \subseteq \mathbb{R}$ and a function $f : D \to \mathbb{R}$ uniformly continuous on $D$; $X := \overline{D}$ with the subspace metric $d_X$ of $d_{\mathbb{R}}(x,y) = |x-y|$.

[L1] The usual metric of $\mathbb{R}$, its subspace metrics, and its open balls $B(x,r) = (x-r,x+r) = N_r(x)$ ([[lem-real-line-is-a-metric-space]], [[def-isometry-and-metric-embedding]], [[def-metric-ball]], [[def-metric-space]], [[def-neighbourhood-r]]).

[L2] Closure in $\mathbb{R}$: $x \in \overline{D}$ exactly when $N_r(x) \cap D \ne \varnothing$ for every real $r > 0$ ([[thm-closure-characterisations-r]], [[def-interior-closure-boundary-r]], [[def-open-and-closed-in-r]]).

[L3] Density in a metric space: $A \subseteq X$ is dense in $X$ when every point of $X$ is adherent to $A$, that is when every ball of $X$ around a point of $X$ meets $A$ ([[def-metric-interior-closure-boundary]]).

[L4] $(\mathbb{R}, d_{\mathbb{R}})$ is a complete metric space ([[thm-euclidean-space-complete]], [[def-complete-metric-space]]).

[L5] Extension theorem: if $A$ is dense in a metric space $X$, if $Y$ is complete and if $h : A \to Y$ is uniformly continuous, then there is a uniformly continuous $g : X \to Y$ with $g|_A = h$, and $g$ is the only continuous map $X \to Y$ extending $h$ ([[thm-uniformly-continuous-extension-from-dense]], [[def-metric-uniform-continuity]], [[def-metric-continuity]]).

[L6] Dictionary: for $S \subseteq \mathbb{R}$ with the subspace metric, continuity and uniform continuity of a function $S \to \mathbb{R}$ in the senses of [[def-continuity-real]] and [[def-uniform-continuity-real]] coincide with the metric-space senses ([[lem-real-and-metric-notions-agree]], clauses 1 and 2).

## Proof

**Proof technique:** direct.

1.1 Put $X := \overline{D}$ with the subspace metric $d_X$, so $d_X(x,y) = |x-y|$ for $x,y \in X$; then $D \subseteq X$, and the subspace metric that $D$ inherits from $X$ is again $d(x,y) = |x-y|$, the same one it inherits from $\mathbb{R}$. $X$ is nonempty, since $D$ is and $D \subseteq \overline{D}$. [L1, L2]

2.1 **$D$ is dense in the metric space $X$.** Let $x \in X$ and let $r > 0$ be real. By [L2] there is $t \in N_r(x) \cap D$, and $t \in D \subseteq X$, so $t$ lies in the ball $B_X(x,r) = N_r(x) \cap X$ of $X$ ([L1]) and in $D$. Hence every ball of $X$ around a point of $X$ meets $D$, which by [L3] says $D$ is dense in $X$. [step 1.1, L1, L2, L3]

2.2 **Transport of the hypothesis.** By [L6], applied to $S := D$, the uniform continuity of $f$ on $D$ in the sense of [[def-uniform-continuity-real]] is uniform continuity of $f : (D, d_D) \to (\mathbb{R}, d_{\mathbb{R}})$ as a map of metric spaces. [step 1.1, L6]

3.1 By [L4] the target $(\mathbb{R}, d_{\mathbb{R}})$ is complete, so [L5] applies with $A := D$, this $X$, $Y := \mathbb{R}$ and $h := f$: there is a uniformly continuous $g : X \to \mathbb{R}$ with $g(x) = f(x)$ for every $x \in D$, and $g$ is the only continuous map $X \to \mathbb{R}$ extending $f$. [step 2.1, step 2.2, L4, L5]

4.1 **Transport of the conclusion.** By [L6], applied to $S := X = \overline{D}$, uniform continuity of $g$ as a map of metric spaces is uniform continuity of $g$ on $\overline{D}$ in the sense of [[def-uniform-continuity-real]], and continuity as a map of metric spaces is continuity on $\overline{D}$ in the sense of [[def-continuity-real]]. So $g$ is uniformly continuous on $\overline{D}$, extends $f$, and is the unique continuous extension of $f$ to $\overline{D}$: claims 1 and 2. [step 3.1, L6] ∎

## Remarks

- **Uniqueness needs only continuity, and it needs density.** Two continuous functions on $\overline{D}$ agreeing on $D$ agree everywhere, because $D$ is dense; that is the uniqueness half of [[thm-uniformly-continuous-extension-from-dense]] and it is why claim 2 quantifies over continuous extensions rather than over uniformly continuous ones. On a set where $D$ is not dense the conclusion is simply false: any values may be assigned off $\overline{D}$.

- **The extension is uniformly continuous, not merely continuous**, and with the same modulus in the following sense: any $\delta$ that works for $f$ on $D$ and a given $\varepsilon$ works for $g$ on $\overline{D}$ and any $\varepsilon' > \varepsilon$. That refinement is not asserted here; what is asserted is what [[thm-uniformly-continuous-extension-from-dense]] proves.

- **The same conclusion, reached directly.** That $x \mapsto 1/x$ is not uniformly continuous on $(0,1)$ is proved on the companion page by exhibiting the pairs of points that defeat every $\delta$ ([[cex-one-over-x-is-not-uniformly-continuous-on-the-unit-interval]]); that item is named here for orientation only, and nothing in this corollary rests on it.

- **A special case worth naming.** If $D$ is already closed then $\overline{D} = D$ ([[thm-closure-characterisations-r]]) and the corollary says nothing. Its content is entirely about the points of $\overline{D} \setminus D$, which is where the values have to be created.
