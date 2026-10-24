---
id: ex-the-compact-open-topology-on-the-continuous-functions-of-the-line
kind: example
title: "On $C(\\mathbb{R}, \\mathbb{R})$ the compact-open topology has the sets $\\{g : \\sup_{[-m,m]} |f-g| < \\varepsilon\\}$ as a neighbourhood base, and $\\mathbb{R}$ is locally compact so evaluation is continuous"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-compact-open-topology, thm-compact-open-equals-compact-convergence,
       def-topology-of-compact-convergence, def-locally-compact-metric-space,
       thm-evaluation-is-continuous-on-a-locally-compact-metric-domain,
       def-evaluation-map, thm-heine-borel-rn, def-metric-compactness, def-interval,
       lem-real-line-is-a-metric-space, def-metrizable-space, def-canonical-natural,
       def-metric-ball, def-metric-topology, def-metric-bounded-diameter,
       def-neighbourhood-top, thm-of-archimedean, lem-of-naturals-positive,
       def-max-min, lem-finite-set-has-max, def-continuous-map-top, def-metric-space]
justified_by: []
aliases: []
landmark: false
short: "compact-open topology on $C(\\mathbb{R},\\mathbb{R})$"
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
    - title: "Locally compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Locally_compact_space"
pipeline_run: null
---

## Example

Let $\mathbb{R}$ carry its usual metric $d(s,t) = |s-t|$
([[lem-real-line-is-a-metric-space]]) and let $C(\mathbb{R},\mathbb{R})$ carry
the compact-open topology ([[def-compact-open-topology]]). For a natural
$m \ge 1$ write $[-m,m] := \{\, t \in \mathbb{R} : -\iota(m) \le t \le \iota(m) \,\}$
([[def-interval]], [[def-canonical-natural]]). Then:

1. every $[-m,m]$ is a compact subset of $\mathbb{R}$, and every compact
   $K \subseteq \mathbb{R}$ is contained in some $[-m,m]$;
2. for each $f \in C(\mathbb{R},\mathbb{R})$ the sets
   $$B_{[-m,m]}(f,\varepsilon) = \{\, g \in C(\mathbb{R},\mathbb{R}) : |f(t)-g(t)| < \varepsilon \text{ for every } t \in [-m,m] \,\} \qquad (m \ge 1,\ \varepsilon > 0)$$
   form a neighbourhood base at $f$ in the compact-open topology
   ([[def-neighbourhood-top]]);
3. $\mathbb{R}$ is a locally compact metric space
   ([[def-locally-compact-metric-space]]), so the evaluation map
   $e : C(\mathbb{R},\mathbb{R}) \times \mathbb{R} \to \mathbb{R}$ is continuous
   ([[thm-evaluation-is-continuous-on-a-locally-compact-metric-domain]],
   [[def-evaluation-map]]).

The quantity $\sup_{t \in [-m,m]} |f(t)-g(t)|$ of the title exists and is a
maximum, by fact (U3) of [[def-topology-of-compact-convergence]]; the
formulation in claim 2 avoids writing it, which is what keeps the empty compact
set harmless elsewhere on this page.

## Facts & Assumptions

**Given:** $\mathbb{R}$ with the usual metric, $C(\mathbb{R},\mathbb{R})$ with the compact-open topology, and for a natural $m \ge 1$ the interval $[-m,m]$.

[L1] A subset of $\mathbb{R}$ is a compact subset exactly when it is closed in $\mathbb{R}$ and bounded, and a bounded subset lies in a ball $B(0,r)$, so $|t| < r$ for each of its points ([[thm-heine-borel-rn]], claim 3, [[def-metric-compactness]], [[def-metric-bounded-diameter]], [[def-metric-ball]]).

[L2] A subset of $\mathbb{R}$ is closed exactly when its complement is open, and a set is open exactly when each of its points has a ball around it inside the set ([[def-metric-topology]], [[def-metrizable-space]], [[def-metric-ball]]).

[L3] For every real $x$ there is a natural $m \ge 1$ with $x < \iota(m)$, and $\iota$ is strictly increasing with $\iota(m) > 0$ for $m \ge 1$ ([[thm-of-archimedean]], [[lem-of-naturals-positive]], [[def-canonical-natural]]).

[L4] The compact-open topology on $C(X,Y)$ for metric $X$ and $Y$ is the topology of compact convergence, whose sets $B_K(f,\varepsilon)$ centred at $f$ form a neighbourhood base at $f$ ([[thm-compact-open-equals-compact-convergence]], [[def-topology-of-compact-convergence]], fact (U4), [[def-compact-open-topology]], [[def-metric-space]]).

[L5] If $K \subseteq K'$ are compact then $B_{K'}(f,\varepsilon) \subseteq B_K(f,\varepsilon)$, the defining condition on $K'$ being stronger ([[def-topology-of-compact-convergence]]).

[L6] $(X,d)$ is locally compact when every point has a compact set containing a ball around it ([[def-locally-compact-metric-space]]); and evaluation is then continuous ([[thm-evaluation-is-continuous-on-a-locally-compact-metric-domain]], [[def-evaluation-map]], [[def-continuous-map-top]]).

[L7] The maximum of a two-element set of reals exists and is one of them ([[lem-finite-set-has-max]], [[def-max-min]]).

## Verification

**Proof technique:** direct.

1.1 $[-m,m]$ is bounded, lying in $B(0, \iota(m)+1)$, and closed in $\mathbb{R}$, since a point $y$ with $y > \iota(m)$ has $B(y, y - \iota(m))$ inside the complement and a point with $y < -\iota(m)$ has $B(y, -\iota(m) - y)$ inside it; so $[-m,m]$ is a compact subset of $\mathbb{R}$. [L1, L2]

2.1 Let $K \subseteq \mathbb{R}$ be compact; it is bounded, so fix a real $r > 0$ with $|t| < r$ for every $t \in K$, and then a natural $m \ge 1$ with $r < \iota(m)$; every $t \in K$ satisfies $-\iota(m) \le t \le \iota(m)$, that is $K \subseteq [-m,m]$. This with step 1.1 is claim 1. [step 1.1, L1, L3, choose]

2.2 For claim 3, let $x \in \mathbb{R}$ and take a natural $m \ge 1$ with $|x| + 1 < \iota(m)$; then $[-m,m]$ is compact by step 1.1 and $B(x,1) \subseteq [-m,m]$, since $|t - x| < 1$ gives $|t| \le |x| + 1 < \iota(m)$ by the triangle inequality for the absolute value. [step 1.1, L3, L7, choose]

3.1 For claim 2, fix $f \in C(\mathbb{R},\mathbb{R})$ and let $N$ be a neighbourhood of $f$ in the compact-open topology; since that topology is the topology of compact convergence, there are a compact $K$ and a real $\varepsilon > 0$ with $B_K(f,\varepsilon) \subseteq N$. [step 2.1, L4, choose]

4.1 Take $m \ge 1$ with $K \subseteq [-m,m]$; then $B_{[-m,m]}(f,\varepsilon) \subseteq B_K(f,\varepsilon) \subseteq N$, and $f \in B_{[-m,m]}(f,\varepsilon)$, which is itself a neighbourhood of $f$ by step 1.1 and [L4]; so the displayed family is a neighbourhood base at $f$, which is claim 2. [step 1.1, step 2.1, step 3.1, L4, L5]

5.1 So every point of $\mathbb{R}$ has a compact set containing a ball around it, that is $\mathbb{R}$ is a locally compact metric space; hence the evaluation map on $C(\mathbb{R},\mathbb{R})$ is continuous, which is claim 3. [step 2.2, L6] ∎

## Remarks

- **Claim 2 is what makes the compact-open topology on $C(\mathbb{R},\mathbb{R})$ concrete.** A general neighbourhood in it involves an arbitrary compact set and an arbitrary open subset of the target; claim 2 replaces both by a bound on a symmetric interval and a single $\varepsilon$, and the intervals may be indexed by the naturals. That is the shape a metrization proof would exploit, and this library does not carry out that proof.

- **Local compactness of $\mathbb{R}$ is where Heine-Borel is spent.** In a general metric space a closed ball need not be compact, and then nothing above survives; what makes $\mathbb{R}$ work is that closed bounded sets are compact ([[thm-heine-borel-rn]]). The contrast is $\mathbb{Q}$, where the evaluation map is not continuous at all.

- **The intervals $[-m,m]$ exhaust $\mathbb{R}$, and that is claim 1's real content.** Every compact subset sits inside one of countably many of them, so the compact sets, of which there are very many, are controlled by a countable family. Nothing about metrizability follows from this alone, and none is claimed.
