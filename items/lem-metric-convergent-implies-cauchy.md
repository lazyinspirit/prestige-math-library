---
id: lem-metric-convergent-implies-cauchy
kind: lemma
title: "Every convergent sequence in a metric space is Cauchy"
status: published
origin: session
deps: [def-cauchy-in-metric, def-metric-convergence, def-metric-space,
       lem-rat-embeds-dense, def-real-limit]
justified_by: []
aliases: []
landmark: false
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
    - title: "Cauchy sequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cauchy_sequence"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $(X,d)$ be a metric space ([[def-metric-space]]) and let $(x_k)$ be a
sequence in $X$ converging to $p \in X$ ([[def-metric-convergence]]). Then
$(x_k)$ is Cauchy in $(X,d)$ ([[def-cauchy-in-metric]]).

The converse fails, and that failure is the subject of this page
([[fs-cauchy-implies-convergent-in-every-metric-space]]).

## Facts & Assumptions

**Given:** A metric space $(X,d)$, a sequence $(x_k)$ in $X$, a point $p \in X$ with $x_k \to p$, and a real $\varepsilon > 0$.

[A1] Convergence: for every real $\eta > 0$ there is $K \in \mathbb{N}$ with $d(x_k,p) < \eta$ for all $k \ge K$ ([[def-metric-convergence]], [[def-real-limit]], [[lem-rat-embeds-dense]]).

[A2] Cauchyness is established by producing, for every real $\varepsilon > 0$, an index $K$ with $d(x_m,x_n) < \varepsilon$ for all $m,n \ge K$ ([[def-cauchy-in-metric]], [[lem-rat-embeds-dense]]).

[L1] Triangle inequality (M3) and symmetry (M2) of a metric ([[def-metric-space]]).

## Proof

**Proof technique:** direct.

1.1 The real $\varepsilon/2$ is positive, so [A1] applied with $\eta = \varepsilon/2$ supplies $K \in \mathbb{N}$ with $d(x_k, p) < \varepsilon/2$ for every $k \ge K$. [A1, algebra]

1.2 For all $m, n \in \mathbb{N}$ one has $d(x_m, x_n) \le d(x_m, p) + d(p, x_n)$. [L1]

2.1 Hence for all $m, n \ge K$: $d(x_m,x_n) \le d(x_m,p) + d(p,x_n) < \varepsilon/2 + \varepsilon/2 = \varepsilon$. [step 1.1, step 1.2, algebra]

3.1 Since $\varepsilon > 0$ was an arbitrary real, $(x_k)$ is Cauchy in $(X,d)$. [step 2.1, A2] ∎

## Remarks

- **The proof spends the triangle inequality and nothing else.** In particular it does not use the separation axiom (M1), so the same argument shows that a sequence converging in a pseudometric space ([[def-metric-space]]) is Cauchy for the pseudometric.
- **Halving is the whole idea.** The Cauchy condition compares two terms of the sequence, and a limit compares one term with the limit; routing $m$ and $n$ through $p$ costs two applications of the convergence hypothesis, so each is run at half the target. Every proof on this page that produces a Cauchy sequence out of a convergent one repeats this step.
