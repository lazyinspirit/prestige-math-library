---
id: ex-a-urysohn-function-on-the-real-line
kind: example
title: "A Urysohn function for $(-\\infty, 0]$ and $[1, \\infty)$ in $\\mathbb{R}$, written down and checked against the definition"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-urysohn-lemma, def-normal-and-t4-spaces, thm-metric-spaces-are-completely-normal,
       def-continuity-real, thm-algebra-of-continuous-functions, def-interval,
       def-continuous-map-top]
justified_by: []
aliases: []
landmark: false
short: "an explicit Urysohn function on $\\mathbb{R}$"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-5.6-terra-codex-subscription
    verdict: certify
    date: 2026-08-09
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Urysohn's lemma (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Urysohn%27s_lemma"
pipeline_run: null
---

## Example

In $\mathbb{R}$ with its usual topology, normal by
[[thm-metric-spaces-are-completely-normal]], the sets $A := (-\infty,0]$ and
$B := [1,\infty)$ ([[def-interval]]) are disjoint and closed. Define
$g : \mathbb{R} \to [0,1]$ by

$$g(x) \;:=\; \max\{0,\ \min\{1,\ x\}\}.$$

This $g$ is a witness for [[thm-urysohn-lemma]] applied to $A$ and $B$:
continuous, with $A \subseteq g^{-1}(\{0\})$ and $B \subseteq g^{-1}(\{1\})$.

## Facts & Assumptions

**Given:** $\mathbb{R}$ with its usual topology, $A = (-\infty,0]$, $B=[1,\infty)$, and $g(x) = \max\{0,\min\{1,x\}\}$.

[L1] The constant maps and the identity are continuous, and so are $\max\{p,q\}$ and $\min\{p,q\}$ of two continuous real functions ([[thm-algebra-of-continuous-functions]], clauses 3 and 5).

## Verification

**Proof technique:** direct.

1.1 $g$ is continuous, being $x \mapsto \max\{0, \min\{1,x\}\}$, a composition of $\max$ and $\min$ applied to the constants $0,1$ and the identity, all continuous by [L1]. [given, L1]

1.2 For $x \le 0$: $\min\{1,x\} = x$, since $x \le 0 < 1$; and $\max\{0,x\}=0$, since $x \le 0$. So $g(x)=0$ for every $x \in A$. [given, algebra]

1.3 For $x \ge 1$: $\min\{1,x\}=1$, since $x \ge 1$; and $\max\{0,1\}=1$. So $g(x)=1$ for every $x \in B$. [given, algebra]

2.1 By steps 1.1, 1.2 and 1.3, $g : \mathbb{R} \to [0,1]$ is continuous with $A \subseteq g^{-1}(\{0\})$ and $B \subseteq g^{-1}(\{1\})$, exactly the conclusion [[thm-urysohn-lemma]] promises for the disjoint closed pair $A,B$. [step 1.1, step 1.2, step 1.3] ∎

## Remarks

- **For $0<x<1$**, neither clamp is active and $g(x)=x$, so $g$
  interpolates linearly across the gap between $A$ and $B$. Nothing in
  [[thm-urysohn-lemma]] requires linearity: replacing $x$ by $x^2$ on
  $[0,1]$ while keeping the same constant values outside that interval gives
  a different Urysohn function for this pair.

- **No dyadic recursion is visible here.** This $g$ is written down directly, not produced by the construction of [[thm-urysohn-lemma]]; the companion example works through several levels of that construction by hand for the same pair $A,B$.
