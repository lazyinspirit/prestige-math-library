---
id: ex-tietze-extension-from-a-closed-interval-of-the-line
kind: example
title: "A continuous function on $[0,1] \\subseteq \\mathbb{R}$ extended to all of $\\mathbb{R}$, both by Tietze and by hand"
status: draft
origin: session
deps: [thm-tietze-extension-theorem, cor-tietze-for-unbounded-and-open-interval-valued-maps,
       thm-metric-spaces-are-completely-normal, def-normal-and-t4-spaces,
       def-continuity-real, lem-continuity-is-local-and-pastes, def-interval,
       def-subspace-topology-top, thm-algebra-of-continuous-functions]
justified_by: []
aliases: []
landmark: false
short: "a hand-built Tietze extension"
proof_strategy: direct
verification:
  precheck: pass
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

## Example

Let $A := [0,1] \subseteq \mathbb{R}$, closed, and $f : A \to \mathbb{R}$,
$f(x) := x^2$, continuous. $\mathbb{R}$ is normal
([[thm-metric-spaces-are-completely-normal]]), so
[[cor-tietze-for-unbounded-and-open-interval-valued-maps]] guarantees a
continuous $F : \mathbb{R} \to \mathbb{R}$ with $F|_A = f$, with no formula
supplied. One is written down here directly:

$$F(x) \;:=\; \big(\max\{0,\ \min\{1,\ x\}\}\big)^2.$$

## Facts & Assumptions

**Given:** $A=[0,1]$, $f(x)=x^2$, and $F(x) = (\max\{0,\min\{1,x\}\})^2$.

[L1] The identity and constants are continuous, and so are $\max$, $\min$ and products of continuous real functions ([[thm-algebra-of-continuous-functions]], clauses 1, 3, 5).

## Verification

**Proof technique:** direct.

1.1 $F$ is continuous, being the square of $x \mapsto \max\{0,\min\{1,x\}\}$, itself continuous by [L1]; the square is a product of that function with itself, continuous by [L1]. [given, L1]

1.2 For $x \in [0,1]$: $\min\{1,x\}=x$ and $\max\{0,x\}=x$, since $0 \le x \le 1$; so $F(x) = x^2 = f(x)$. [given, algebra]

2.1 By steps 1.1 and 1.2, $F : \mathbb{R} \to \mathbb{R}$ is continuous with $F|_A = f$, an explicit witness for the extension [[cor-tietze-for-unbounded-and-open-interval-valued-maps]] and [[thm-tietze-extension-theorem]] promise abstractly. [step 1.1, step 1.2] ∎

## Remarks

- **The trick generalises.** For any closed bounded interval $[a,b]$ and any continuous $f : [a,b] \to \mathbb{R}$, precomposing $f$ with the clamp $x \mapsto \max\{a,\min\{b,x\}\} : \mathbb{R} \to [a,b]$ gives a continuous extension of $f$ to all of $\mathbb{R}$, by the same two-step argument as above. Nothing about $x^2$ is used beyond its own continuity on $[0,1]$.

- **This is not the extension the recursive proof of [[thm-tietze-extension-theorem]] would produce.** That proof builds an extension as a uniformly convergent series of Urysohn functions, and it makes no claim of matching the clamp-composition extension above; both are legitimate continuous extensions, and neither is canonical.
