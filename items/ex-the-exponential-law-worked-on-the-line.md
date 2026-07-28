---
id: ex-the-exponential-law-worked-on-the-line
kind: example
title: "The map $(x,z) \\mapsto x \\cdot z$ on $\\mathbb{R} \\times \\mathbb{R}$ and its transpose $z \\mapsto (x \\mapsto x \\cdot z)$ traced through the exponential law"
status: published
origin: session
deps: [thm-the-exponential-law, thm-exponential-correspondence-is-continuous,
       thm-evaluation-is-continuous-on-a-locally-compact-metric-domain,
       def-compact-open-topology, def-locally-compact-metric-space, def-evaluation-map,
       def-product-topology, lem-product-topology-on-rn, lem-metrics-on-rn,
       lem-real-line-is-a-metric-space, def-metrizable-space, thm-heine-borel-rn,
       def-metric-compactness, def-topology-of-compact-convergence,
       thm-compact-open-equals-compact-convergence, def-canonical-natural,
       cor-archimedean-reciprocal, def-metric-continuity, def-continuous-map-top,
       def-lipschitz-holder-contraction, thm-metric-regularity-hierarchy,
       def-metric-ball, def-metric-topology, def-abs-value, lem-of-abs-value,
       lem-of-triangle-inequality, def-max-min, lem-finite-set-has-max,
       def-metric-bounded-diameter, def-interval, lem-of-naturals-positive,
       def-metric-space, def-injection-surjection-bijection, thm-of-archimedean]
justified_by: []
aliases: []
landmark: false
short: "exponential law worked on the line"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Compact-open topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Compact-open_topology"
    - title: "Exponential object (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Exponential_object"
pipeline_run: null
---

## Example

Take $X := \mathbb{R}$, $Z := \mathbb{R}$ and $Y := \mathbb{R}$, all with the
usual metric ([[lem-real-line-is-a-metric-space]]), and let

$$f : \mathbb{R} \times \mathbb{R} \to \mathbb{R}, \qquad f(x,z) := x \cdot z .$$

Write $F := \Phi(f)$ for its transpose, so $F(z)(x) = x \cdot z$: each $F(z)$ is
the multiplication-by-$z$ map of $\mathbb{R}$. This example checks every clause
of the exponential law ([[thm-the-exponential-law]]) by hand on this pair:

1. $f$ is continuous on $\mathbb{R} \times \mathbb{R}$ with the product
   topology ([[def-product-topology]]);
2. each $F(z)$ is continuous, being Lipschitz with constant $|z|$, so
   $F(z) \in C(\mathbb{R},\mathbb{R})$;
3. $F : \mathbb{R} \to C(\mathbb{R},\mathbb{R})$ is continuous for the
   compact-open topology, **directly**: if $|z - z_0| < \varepsilon/\iota(m)$
   then $F(z) \in B_{[-m,m]}(F(z_0), \varepsilon)$;
4. $\mathbb{R}$ is locally compact, so the exponential law applies and
   $\Phi$ is a bijection $C(\mathbb{R} \times \mathbb{R}, \mathbb{R}) \to
   C(\mathbb{R}, C(\mathbb{R},\mathbb{R}))$ whose inverse returns $f$ from $F$.

Claim 3 is the content of
[[thm-exponential-correspondence-is-continuous]] in this instance, verified
without the tube lemma; claim 4 is where
[[thm-evaluation-is-continuous-on-a-locally-compact-metric-domain]] is spent.

## Facts & Assumptions

**Given:** $\mathbb{R}$ with $d(s,t) = |s-t|$; the product $\mathbb{R} \times \mathbb{R}$ with the product topology; the map $f(x,z) = xz$ and its transpose $F$; and for a natural $m \ge 1$ the interval $[-m,m] = \{\, t : -\iota(m) \le t \le \iota(m) \,\}$ ([[def-interval]], [[def-canonical-natural]]).

[L1] The product topology on $\mathbb{R} \times \mathbb{R} = \prod_{k<2}\mathbb{R}$ is the metric topology of $d_\infty\big((x,z),(x',z')\big) = \max\{|x-x'|, |z-z'|\}$ ([[lem-product-topology-on-rn]], [[lem-metrics-on-rn]], [[def-product-topology]], [[def-metric-topology]], [[def-metrizable-space]], [[def-max-min]], [[lem-finite-set-has-max]]).

[L2] $|uv| = |u||v|$, $|u+v| \le |u|+|v|$, and $|u| \ge 0$ ([[lem-of-abs-value]], [[lem-of-triangle-inequality]], [[def-abs-value]]).

[L3] $\varepsilon$-$\delta$ continuity of a map of metric spaces, and its agreement with continuity of the corresponding map of topological spaces ([[def-metric-continuity]], [[def-continuous-map-top]], [[def-metrizable-space]], [[def-metric-ball]], [[def-metric-space]]).

[L4] A map Lipschitz with some constant is continuous ([[def-lipschitz-holder-contraction]], [[thm-metric-regularity-hierarchy]], claims 2 and 3).

[L5] $[-m,m]$ is a compact subset of $\mathbb{R}$ for every natural $m \ge 1$, and every compact subset of $\mathbb{R}$ lies in some $[-m,m]$; the sets $B_K(g,\varepsilon)$ centred at $g$ are a neighbourhood base at $g$ in the compact-open topology on $C(\mathbb{R},\mathbb{R})$ ([[thm-heine-borel-rn]], [[def-metric-compactness]], [[def-metric-bounded-diameter]], [[thm-compact-open-equals-compact-convergence]], [[def-topology-of-compact-convergence]], fact (U4), [[def-compact-open-topology]]).

[L6] For every real $x$ there is a natural $m \ge 1$ with $|x| + 1 < \iota(m)$, and $\iota(m) \ge 1 > 0$ for $m \ge 1$ ([[thm-of-archimedean]], [[lem-of-naturals-positive]], [[cor-archimedean-reciprocal]], [[def-canonical-natural]]).

[L7] $\mathbb{R}$ is locally compact if every point has a compact set containing a ball around it; and then the exponential law holds for $X = \mathbb{R}$ and arbitrary $Z, Y$, with $\Phi$ a bijection whose inverse sends $F$ to $(x,z) \mapsto F(z)(x)$ ([[def-locally-compact-metric-space]], [[thm-the-exponential-law]], [[def-evaluation-map]], [[def-injection-surjection-bijection]]).

## Verification

**Proof technique:** direct.

1.1 For claim 1, fix $(x_0,z_0) \in \mathbb{R} \times \mathbb{R}$ and a real $\varepsilon_0 > 0$, and put $\delta := \min\{1,\ \varepsilon_0/(|x_0| + |z_0| + 1)\}$, a real with $0 < \delta \le 1$. [L1, L2, choose]

1.2 For fixed $z$ the map $F(z) : x \mapsto xz$ satisfies $|xz - x'z| = |z||x-x'|$, so it is Lipschitz with constant $|z|$ and continuous; this is claim 2. [L2, L4]

1.3 For claim 3, fix $z_0 \in \mathbb{R}$ and a neighbourhood $N$ of $F(z_0)$ in the compact-open topology; there are a compact $K$ and a real $\varepsilon > 0$ with $B_K(F(z_0),\varepsilon) \subseteq N$, and a natural $m \ge 1$ with $K \subseteq [-m,m]$, so $B_{[-m,m]}(F(z_0),\varepsilon) \subseteq B_K(F(z_0),\varepsilon) \subseteq N$. [L5, choose]

1.4 For claim 4: given $x \in \mathbb{R}$ take a natural $m \ge 1$ with $|x| + 1 < \iota(m)$; then $[-m,m]$ is compact and $B(x,1) \subseteq [-m,m]$, since $|t - x| < 1$ gives $|t| \le |x| + 1 < \iota(m)$; so $\mathbb{R}$ is a locally compact metric space. [L2, L5, L6]

2.1 If $d_\infty\big((x,z),(x_0,z_0)\big) < \delta$ then $|x - x_0| < \delta$ and $|z - z_0| < \delta$, so $|z| \le |z_0| + |z - z_0| < |z_0| + \delta$. [step 1.1, L1, L2]

2.2 Put $\eta := \varepsilon/\iota(m) > 0$; if $|z - z_0| < \eta$ then for every $x \in [-m,m]$ we get $|F(z)(x) - F(z_0)(x)| = |x||z - z_0| \le \iota(m)|z-z_0| < \iota(m)\eta = \varepsilon$, so $F(z) \in B_{[-m,m]}(F(z_0),\varepsilon) \subseteq N$. [step 1.3, L2, L6]

3.1 Hence $|xz - x_0z_0| = |z(x - x_0) + x_0(z - z_0)| \le |z||x-x_0| + |x_0||z-z_0| < (|z_0| + \delta)\delta + |x_0|\delta = \delta\big(|x_0| + |z_0| + \delta\big) \le \delta\big(|x_0| + |z_0| + 1\big) \le \varepsilon_0$. [step 1.1, step 2.1, L2]

4.1 So $f$ is continuous at every point in the $\varepsilon$-$\delta$ sense for the metric $d_\infty$, hence continuous as a map of topological spaces for the product topology; this is claim 1. [step 3.1, L1, L3]

5.1 As $N$ was an arbitrary neighbourhood of $F(z_0)$ and $z_0$ an arbitrary point, $F$ is continuous for the compact-open topology; this is claim 3, and it agrees with what [[thm-exponential-correspondence-is-continuous]] gives from claim 1. [step 4.1, step 1.3, step 2.2, L3, L5]

6.1 The exponential law therefore applies with $X = Z = Y = \mathbb{R}$: transposition is a bijection between $C(\mathbb{R}\times\mathbb{R},\mathbb{R})$ and $C(\mathbb{R}, C(\mathbb{R},\mathbb{R}))$, it sends the $f$ of claim 1 to the $F$ of claim 3, and its inverse sends $F$ back to $(x,z) \mapsto F(z)(x) = xz$, which is $f$; this is claim 4. [step 4.1, step 5.1, step 1.4, L7] ∎

## Remarks

- **Claim 3 is proved twice on purpose.** The general theorem [[thm-exponential-correspondence-is-continuous]] derives it from the tube lemma, and the computation above derives it from a single estimate $|x||z-z_0| \le \iota(m)|z-z_0|$ on $[-m,m]$. The second route is available here only because the compact sets of $\mathbb{R}$ are contained in intervals on which the first variable is bounded; the tube lemma is what replaces that boundedness in general.

- **What is *not* checked here, because it is not claimed.** Nothing above asserts that the bijection $\Phi$ is a homeomorphism for any topology on the two sides. [[thm-the-exponential-law]] is a bijection of sets of continuous maps, and its own remark records what the homeomorphism form would additionally require.

- **The transposed family is a line of linear maps.** As $z$ runs over $\mathbb{R}$ the functions $F(z)$ sweep out the multiplications by $z$, and claim 3 says that this sweep is continuous when nearness of two such maps is measured uniformly on each bounded interval. It is *not* continuous for the uniform metric on all of $\mathbb{R}$: for $z \ne z_0$ the difference $|x||z-z_0|$ exceeds $1$ once $|x|$ is large, so the uniform distance between $F(z)$ and $F(z_0)$ is $1$ whenever $z \ne z_0$, which is the same phenomenon as the counterexample earlier on this page.
