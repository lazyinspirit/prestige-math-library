---
id: fs-a-continuous-real-function-on-any-subspace-of-a-normal-space-extends
kind: false-statement
title: "FALSE: Every continuous real-valued function on a subspace of a normal space extends continuously to the whole space"
status: draft
origin: session
deps: [thm-tietze-extension-theorem, cor-tietze-for-unbounded-and-open-interval-valued-maps,
       def-subspace-topology-top, def-continuity-real, thm-algebra-of-continuous-functions,
       cor-boundedness-theorem-r, def-continuous-map-top, def-interval,
       cor-archimedean-reciprocal, thm-metric-spaces-are-completely-normal,
       def-normal-and-t4-spaces, thm-heine-borel-r]
justified_by: []
aliases: []
landmark: false
short: "closedness of the subspace is not decoration in Tietze"
proof_strategy: contradiction
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Tietze extension theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Tietze_extension_theorem"
    - title: "Archimedean property (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Archimedean_property"
pipeline_run: null
---

## Statement

**FALSE.** Every continuous real-valued function on a subspace of a normal
space extends continuously to the whole space.

This shows that the hypothesis "$A$ closed" in
[[thm-tietze-extension-theorem]] and [[cor-tietze-for-unbounded-and-open-interval-valued-maps]]
is not decoration: the witness below is a continuous function on a subspace
of a normal space that has no continuous extension at all, and the only
hypothesis it fails is closedness of the subspace.

## Facts & Assumptions

**Given:** $\mathbb{R}$ with its usual topology, the subspace $A := (0,1] \subseteq \mathbb{R}$ ([[def-interval]], [[def-subspace-topology-top]]), and $f : A \to \mathbb{R}$, $f(x) := 1/x$.

[L1] $\mathbb{R}$ is normal, being metrizable ([[thm-metric-spaces-are-completely-normal]]).

[L2] Quotients of continuous real functions with nonvanishing denominator are continuous ([[thm-algebra-of-continuous-functions]], clause 4); in particular $x \mapsto 1/x$ is continuous on $\{x \in \mathbb{R} : x \ne 0\} \supseteq A$.

[L3] Continuity passes to subsets of the domain: if $B \subseteq C \subseteq \mathbb{R}$ and $g : C \to \mathbb{R}$ is continuous, then $g|_B$ is continuous ([[def-continuity-real]]).

[L4] $[0,1]$ is compact ([[thm-heine-borel-r]]).

[L5] A continuous real function on a compact subset $K$ of its domain is bounded on $K$: there is real $M \ge 0$ with $|g(x)| \le M$ for every $x \in K$ ([[cor-boundedness-theorem-r]]).

[L6] For every real $\varepsilon>0$ there is a natural $n \ge 1$ with $1/n < \varepsilon$ ([[cor-archimedean-reciprocal]]).

## Refutation

**Proof technique:** contradiction.

1.1 $f$ is continuous on $A$, by [L2] with $0 \notin A$; and $\mathbb{R}$ is normal, by [L1]. [given, L1, L2]

1.2 For every real $M$, there is $x \in A$ with $f(x) > M$: if $M \le 0$, take $x:=1$, so $f(1)=1>0\ge M$; if $M>0$, [L6] applied to $\varepsilon := 1/(M+1) > 0$ gives a natural $n \ge 1$ with $1/n < 1/(M+1)$, hence $n > M+1 > M$; taking $x := 1/n \in (0,1] = A$ gives $f(x) = 1/x = n > M$. [given, L6, algebra, choose]

1.3 Suppose, toward a contradiction, that a continuous $F : \mathbb{R} \to \mathbb{R}$ exists with $F|_A = f$. [assume-contra]

1.4 $[0,1]$ is compact, by [L4]. [L4]

2.1 Under step 1.3: $F|_{[0,1]}$ is continuous, by [L3] applied to $F$ on $\mathbb{R} \supseteq [0,1]$. [step 1.3, L3]

3.1 Under step 1.3: by [L5] applied to $F|_{[0,1]}$ (step 2.1) and $K := [0,1]$ (step 1.4), fix a real $M_0 \ge 0$ with $|F(x)| \le M_0$ for every $x \in [0,1]$. [step 2.1, step 1.4, L5, choose]

4.1 Under step 1.3: for $x \in A$, $F(x) = f(x)$ (step 1.3) and $x \in [0,1]$, so $f(x) \le |F(x)| \le M_0$ by step 3.1; but step 1.2 applied with $M := M_0$ gives $x_0 \in A$ with $f(x_0) > M_0$, contradicting $f(x_0) \le M_0$. [step 1.3, step 3.1, step 1.2, discharge-contradiction] ∎

## Remarks

- **No property but closedness fails.** $\mathbb{R}$ is normal (step 1.1), $f$ is continuous on $A$ (step 1.1), and the target is all of $\mathbb{R}$, so every hypothesis of [[thm-tietze-extension-theorem]] holds except that $A$ is not closed in $\mathbb{R}$ — its closure is $[0,1]$, one point larger.

- **The obstruction is unboundedness near the missing point, not discontinuity.** $f$ itself is continuous at every point of its own domain $A$; nothing about $f$ is badly behaved on $A$. What blocks an extension is that $f$ has no finite value it could sensibly take at the boundary point $0 \notin A$, and step 1.2 makes that failure of boundedness explicit rather than appealing to a limit that does not exist.
