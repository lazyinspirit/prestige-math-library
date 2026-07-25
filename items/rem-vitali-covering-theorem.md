---
id: rem-vitali-covering-theorem
kind: remark
title: "Vitali covering theorem"
status: draft
origin: session
proved_here: false
deps: [rem-lebesgue-measure-and-integral]
justified_by: []
forward_refs: []
aliases: []
landmark: false
short: "A fine cover contains a countable disjoint subfamily that misses only a null set"
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Vitali covering lemma (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Vitali_covering_lemma"
    - title: "Vitali theorem (Encyclopedia of Mathematics)"
      url: "https://encyclopediaofmath.org/wiki/Vitali_theorem"
    - title: "B. S. Thomson, Vitali coverings and Lebesgue's differentiation theorem, Real Anal. Exchange 29 (2003/04) 957-973"
      url: "https://classicalrealanalysis.info/documents/Thomson-RAE2003-euclid.rae.1149698567.pdf"
pipeline_run: null
---

## Statement

Call a family $\mathcal{V}$ of nondegenerate closed intervals a **Vitali cover**
(a **fine cover**) of $E \subseteq \mathbb{R}$ when for every $x \in E$ and every
$\varepsilon > 0$ there is $I \in \mathcal{V}$ with $x \in I$ and
$0 < |I| < \varepsilon$.

**Vitali covering theorem.** If $\lambda^{*}(E) < \infty$ and $\mathcal{V}$ is a
Vitali cover of $E$, then for every $\varepsilon > 0$ there are finitely many
pairwise disjoint $I_1, \dots, I_N \in \mathcal{V}$ with

$$\lambda^{*}\Big(E \setminus \bigcup_{k=1}^{N} I_k\Big) < \varepsilon,$$

and there is a countable pairwise disjoint family
$\{I_k\}_{k \ge 1} \subseteq \mathcal{V}$ with
$\lambda^{*}\big(E \setminus \bigcup_{k \ge 1} I_k\big) = 0$. The finiteness of
$\lambda^{*}(E)$ may be dropped for the countable form, since $\mathbb{R}$ is a
countable union of bounded pieces. The same statement holds in $\mathbb{R}^n$
for closed balls, and the underlying combinatorial device is the $5r$ covering
lemma: from any family of balls with uniformly bounded radii one may extract a
disjoint subfamily $\mathcal{D}$ such that the balls of $\mathcal{D}$ dilated by
the factor $5$ cover the union of the original family.

## Remarks

**Not proved in this library.** It is recorded with citations and used in no
proof here.

**What would prove it.** Lebesgue outer measure and the measurability theory of
[[rem-lebesgue-measure-and-integral]], together with a greedy selection: repeatedly
choose an interval of nearly maximal length among those disjoint from the ones
already chosen, and estimate the leftover by the $5r$ lemma. The selection is a
recursion over a countable index set with an explicit rule, so it costs only
dependent choice, not the full Axiom of Choice.

**Which page it serves.** It is the covering machinery behind almost everywhere
differentiability: the Lebesgue differentiation theorems
([[rem-lebesgue-monotone-differentiation]], [[rem-lebesgue-differentiation-theorem]])
and, through them, the sharp fundamental theorem of calculus
([[rem-ftc-absolutely-continuous]]). Its natural home is the monotone functions
and discontinuities page, which can prove that a monotone function has at most
countably many discontinuities but cannot reach differentiability almost
everywhere.

**Relation to the elementary covering arguments already in scope.** The
Heine-Borel and nested interval arguments this library uses, and the elementary
covering definition of a null set, are all finite or countable covering
statements about total length. Vitali's theorem is the first covering result
that needs the measure itself rather than just total length, which is why it is
here and they are not. The weaker form sufficient for null sets is recorded
separately as [[rem-mini-vitali-covering-theorem]].
