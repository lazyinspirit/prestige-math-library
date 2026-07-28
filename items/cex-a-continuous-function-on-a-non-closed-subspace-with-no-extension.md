---
id: cex-a-continuous-function-on-a-non-closed-subspace-with-no-extension
kind: counterexample
title: "The reciprocal on $(0,1]$ is continuous and extends to no continuous function on $\\mathbb{R}$, so closedness of the subspace is not decoration in the $\\mathbb{R}$-valued Tietze extension"
status: published
origin: session
deps: [fs-a-continuous-real-function-on-any-subspace-of-a-normal-space-extends,
       thm-tietze-extension-theorem, cor-tietze-for-unbounded-and-open-interval-valued-maps, def-continuity-real, thm-algebra-of-continuous-functions,
       cor-boundedness-theorem-r, cor-archimedean-reciprocal, def-interval,
       def-subspace-topology-top, thm-heine-borel-r]
justified_by: []
aliases: []
landmark: false
short: "reciprocal on $(0,1]$, no continuous extension"
proof_strategy: contradiction
verification:
  precheck: pass
  verified:
    model: claude-fable-5
    verdict: certify
    date: 2026-07-29
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Tietze extension theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Tietze_extension_theorem"
pipeline_run: null
---

## Statement refuted

The continuous function $f : (0,1] \to \mathbb{R}$, $f(x) := 1/x$, extends to a
continuous function $F : \mathbb{R} \to \mathbb{R}$.

This is the single witness behind
[[fs-a-continuous-real-function-on-any-subspace-of-a-normal-space-extends]],
presented on its own as the counterexample it is: it shows that dropping the
hypothesis "$A$ closed" from
[[cor-tietze-for-unbounded-and-open-interval-valued-maps]] is not a minor
loosening but breaks that extension statement outright, on the very space
$\mathbb{R}$ where it is otherwise available.

**Which statement this witness refutes, and which it does not.** The corollary is
the $\mathbb{R}$-valued form, and $f$ meets every one of its hypotheses except
closedness of $A$, so it isolates that hypothesis exactly. It does **not** refute
[[thm-tietze-extension-theorem]] itself with the closedness hypothesis removed:
that theorem is stated for maps into a bounded interval $[a,b]$, and $f$ is
unbounded, so $f$ fails its codomain hypothesis as well. A witness violating two
hypotheses cannot isolate one.

## Facts & Assumptions

**Given:** $A := (0,1] \subseteq \mathbb{R}$ and $f : A \to \mathbb{R}$, $f(x) := 1/x$.

[L1] Quotients of continuous real functions with nonvanishing denominator are continuous ([[thm-algebra-of-continuous-functions]], clause 4).

[L2] Continuity passes to subsets of the domain ([[def-continuity-real]]).

[L3] $[0,1]$ is compact ([[thm-heine-borel-r]]); a continuous real function on a compact subset of its domain is bounded there ([[cor-boundedness-theorem-r]]).

[L4] For every real $\varepsilon>0$ there is a natural $n \ge 1$ with $1/n < \varepsilon$ ([[cor-archimedean-reciprocal]]).

## Counterexample

**Proof technique:** contradiction.

1.1 $f$ is continuous on $A$ by [L1], with $0 \notin A$. [given, L1]

1.2 For every real $M$ there is $x \in A$ with $f(x)>M$: for $M \le 0$ take $x:=1$; for $M>0$, [L4] with $\varepsilon := 1/(M+1)$ gives a natural $n \ge 1$ with $1/n < 1/(M+1)$, hence $n>M$, and $x := 1/n \in (0,1]=A$ has $f(x)=n>M$. [given, L4, algebra, choose]

1.3 Suppose, toward a contradiction, that a continuous $F : \mathbb{R} \to \mathbb{R}$ extends $f$. [assume-contra]

2.1 Under step 1.3: $F|_{[0,1]}$ is continuous by [L2]; by [L3], $[0,1]$ is compact and $F|_{[0,1]}$ is therefore bounded: fix real $M_0 \ge 0$ with $|F(x)| \le M_0$ for every $x \in [0,1]$. [step 1.3, L2, L3, choose]

3.1 Under step 1.3: for $x \in A \subseteq [0,1]$, $F(x)=f(x)$, so $f(x) \le M_0$ for every $x \in A$ by step 2.1; but step 1.2 with $M:=M_0$ gives $x_0 \in A$ with $f(x_0)>M_0$, a contradiction. [step 1.3, step 2.1, step 1.2, discharge-contradiction] ∎

## Remarks

- **The only hypothesis of the $\mathbb{R}$-valued extension statement that fails here is closedness of $A$.** $\mathbb{R}$ is normal and $f$ is continuous on $A$; the closure of $A$ in $\mathbb{R}$ is $[0,1]$, and it is exactly the missing point $0$ where $f$ has nowhere finite to go. Against [[thm-tietze-extension-theorem]] itself the witness fails a second hypothesis, since that theorem takes values in a bounded interval and $f$ does not, which is why the statement refuted above is framed against [[cor-tietze-for-unbounded-and-open-interval-valued-maps]].

- **The obstruction is boundedness, not the existence of a limit.** Step 1.2 shows $f$ is unbounded on every neighbourhood of the missing point directly from the reciprocal's growth, with no appeal to $\lim_{x \to 0^+} f(x)$ failing to exist as a real number.
