---
id: cex-dirichlet-is-nowhere-continuous
kind: counterexample
title: "The indicator of $\\mathbb{Q}$ is continuous at no point of $\\mathbb{R}$"
status: published
origin: session
deps: [def-continuity-real, lem-q-and-irrationals-dense-r, thm-closure-characterisations-r, def-limit-point-r, def-interior-closure-boundary-r, def-neighbourhood-r, def-open-and-closed-in-r, lem-rat-embeds-dense, lem-of-abs-value, def-ordered-field]
justified_by: []
aliases: [cex-dirichlet-function]
landmark: true
short: "Dirichlet function is nowhere continuous"
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
    - title: "Dirichlet function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Dirichlet_function"
    - title: "Continuous function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Continuous_function"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 4"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** every function $\mathbb{R} \to \mathbb{R}$ is continuous at
at least one point ([[def-continuity-real]]).

The witness is the **Dirichlet function**, the indicator of the rationals:
writing $\mathbb{Q}$ for the canonical copy of the rationals inside $\mathbb{R}$
([[lem-rat-embeds-dense]]),

$$\mathbf{1}_{\mathbb{Q}} : \mathbb{R} \to \mathbb{R}, \qquad \mathbf{1}_{\mathbb{Q}}(x) := \begin{cases} 1 & \text{if } x \in \mathbb{Q},\\ 0 & \text{if } x \notin \mathbb{Q}. \end{cases}$$

It is continuous at **no** point of $\mathbb{R}$. The mechanism is that both
$\mathbb{Q}$ and its complement are dense ([[lem-q-and-irrationals-dense-r]]),
so every neighbourhood of every real contains a point of each, and the two
values differ by $1$.

**The argument is choice free.** Density is used in the form "every
neighbourhood of every point meets the set", which is
[[thm-closure-characterisations-r]] applied to a closure equal to $\mathbb{R}$;
no sequence is built, so neither
[[lem-sequential-characterisation-of-closure-r]] nor
[[thm-sequential-criterion-for-continuity]] is invoked, and the countable choice
those two spend is not spent here.

## Facts & Assumptions

**Given:** The canonical copy $\mathbb{Q} \subseteq \mathbb{R}$ of the rationals, its complement $X := \mathbb{R} \setminus \mathbb{Q}$, and the function $\mathbf{1}_{\mathbb{Q}} : \mathbb{R} \to \mathbb{R}$ taking the value $1$ on $\mathbb{Q}$ and $0$ on $X$.

[L1] Continuity at $c$: for every real $\varepsilon > 0$ there is a real $\delta > 0$ with $|\mathbf{1}_{\mathbb{Q}}(x) - \mathbf{1}_{\mathbb{Q}}(c)| < \varepsilon$ for every real $x$ with $|x - c| < \delta$. So continuity at $c$ fails as soon as some real $\varepsilon_0 > 0$ admits, for every real $\delta > 0$, a real $x$ with $|x - c| < \delta$ and $|\mathbf{1}_{\mathbb{Q}}(x) - \mathbf{1}_{\mathbb{Q}}(c)| \ge \varepsilon_0$ ([[def-continuity-real]], [[def-neighbourhood-r]]).

[L2] Both $\mathbb{Q}$ and $X$ are dense in $\mathbb{R}$, that is, each has closure $\mathbb{R}$ ([[lem-q-and-irrationals-dense-r]], [[def-limit-point-r]], [[lem-rat-embeds-dense]]).

[L3] A point lies in the closure of $S$ exactly when every neighbourhood $N_{\delta}$ of it meets $S$; so a set with closure $\mathbb{R}$ meets every $N_{\delta}(c)$, for every real $c$ and every real $\delta > 0$ ([[thm-closure-characterisations-r]], [[def-interior-closure-boundary-r]], [[def-open-and-closed-in-r]], [[def-neighbourhood-r]]).

[L4] $\mathbf{1}_{\mathbb{Q}}$ is a well-defined function: $X$ is by definition the complement $\mathbb{R} \setminus \mathbb{Q}$, so every real either lies in $\mathbb{Q}$ or does not, exclusively; and $|1 - 0| = |0 - 1| = 1$, with $1/2 > 0$ and $1/2 < 1$ ([[lem-of-abs-value]], [[def-ordered-field]]).

## Counterexample

**Proof technique:** direct.

1.1 $\mathbf{1}_{\mathbb{Q}}$ is a well-defined function on $\mathbb{R}$ taking only the values $0$ and $1$, and $\mathbb{R}$ is the disjoint union of $\mathbb{Q}$ and $X$. [L4]

1.2 Let $c \in \mathbb{R}$ be arbitrary, put $\varepsilon_0 := 1/2 > 0$, and let a real $\delta > 0$ be given. [L4]

2.1 By [L2] and [L3] the neighbourhood $N_{\delta}(c)$ meets $\mathbb{Q}$ and it meets $X$: there are reals $p \in N_{\delta}(c) \cap \mathbb{Q}$ and $z \in N_{\delta}(c) \cap X$, so $|p - c| < \delta$ and $|z - c| < \delta$, with $\mathbf{1}_{\mathbb{Q}}(p) = 1$ and $\mathbf{1}_{\mathbb{Q}}(z) = 0$. [step 1.2, L2, L3, choose]

3.1 If $c \in \mathbb{Q}$ then $\mathbf{1}_{\mathbb{Q}}(c) = 1$ and the point $x := z$ satisfies $|x - c| < \delta$ and $|\mathbf{1}_{\mathbb{Q}}(x) - \mathbf{1}_{\mathbb{Q}}(c)| = |0 - 1| = 1 \ge \varepsilon_0$. If $c \notin \mathbb{Q}$ then $\mathbf{1}_{\mathbb{Q}}(c) = 0$ and the point $x := p$ satisfies $|x - c| < \delta$ and $|\mathbf{1}_{\mathbb{Q}}(x) - \mathbf{1}_{\mathbb{Q}}(c)| = |1 - 0| = 1 \ge \varepsilon_0$. By [L4] these two possibilities are exhaustive and exclusive. [step 1.1, step 2.1, L4]

4.1 So for the fixed $\varepsilon_0 = 1/2$ no real $\delta > 0$ serves at $c$, and by [L1] the function $\mathbf{1}_{\mathbb{Q}}$ is not continuous at $c$. As $c$ was an arbitrary real, it is continuous at no point of $\mathbb{R}$, and the refuted claim is false. [step 1.2, step 3.1, L1] ∎

## Remarks

- **Why $\varepsilon_0 = 1/2$ and not $1$.** Any $\varepsilon_0 \le 1$ works, since the discrepancy produced is exactly $1$. Taking $1/2$ leaves the inequality strict and makes it visible that the failure is not a boundary effect.

- **Restricting the domain repairs it completely.** The restriction of $\mathbf{1}_{\mathbb{Q}}$ to $\mathbb{Q}$ is constantly $1$ and the restriction to the irrationals is constantly $0$; both are continuous. This is the standard warning that continuity is a property of the pair (function, domain), recorded in [[def-continuity-real]]: continuity passes to subsets of the domain, never up from them.

- **A near miss worth naming.** Multiplying by $x$ repairs continuity at exactly one point: $x \mapsto x\,\mathbf{1}_{\mathbb{Q}}(x)$ is continuous at $0$ and nowhere else, which is [[ex-x-times-dirichlet-is-continuous-exactly-at-zero]]. The same argument as above, applied to any function taking two distinct values densely, shows nowhere-continuity; in particular the function equal to $1$ on $\mathbb{Q}$ and $-1$ elsewhere is nowhere continuous while its absolute value is constant.
