---
id: ex-tdmath-flat-face-nonunique-minimizer
kind: example
title: "A flat exposed face with many Fenchel minimizers"
status: published
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 4
proof_strategy: direct
deps:
  - def-tdmath-extended-convex-function
  - def-tdmath-fenchel-transform-and-subgradient
  - lem-tdmath-extended-convex-epigraph-equivalence
  - lem-tdmath-fenchel-young-equality
  - thm-tdmath-fenchel-attainment
dependency_roles:
  def-tdmath-extended-convex-function: mathematical-premise
  def-tdmath-fenchel-transform-and-subgradient: mathematical-premise
  lem-tdmath-extended-convex-epigraph-equivalence: mathematical-premise
  lem-tdmath-fenchel-young-equality: mathematical-premise
  thm-tdmath-fenchel-attainment: mathematical-premise
justified_by: []
aliases: []
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "R. T. Rockafellar, Convex Analysis, §23"
      url: "https://djvu.online/file/68u51YEBQaqiP"
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
  precheck: n/a
---

## Example

Let $f$ be the indicator of $[-1,1]$. The zero tilt $f(y)-0\cdot y$ has every point of the interval as a minimizer, and $f^*(0)=0$ is attained at every such point. Equivalently, $0\in\partial f(x)$ for every $x\in[-1,1]$. Thus the supporting face at slope zero is the whole interval, and coercive Fenchel attainment need not be unique.

## Facts & Assumptions

**Given:** The indicator $f(x)=0$ for $x\in[-1,1]$ and $f(x)=+\infty$ otherwise.

[F1] [[def-tdmath-extended-convex-function]]: the indicator of a nonempty closed convex set is proper, closed, and convex in the given conventions.

[F2] [[def-tdmath-fenchel-transform-and-subgradient]]: $f^*(p)$ is the supremum of $py-f(y)$ over $y\in\operatorname{dom}f$, and $p\in\partial f(x)$ means $f(y)\ge f(x)+p(y-x)$ for all $y$.

[F3] [[lem-tdmath-extended-convex-epigraph-equivalence]]: a proper indicator with a closed convex epigraph is closed and convex in the local extended-real conventions.

[L1] [[lem-tdmath-fenchel-young-equality]]: equality in Fenchel's inequality at a finite point is equivalent to the subgradient condition and attainment of the conjugate supremum.

[L2] [[thm-tdmath-fenchel-attainment]]: if the closed proper convex tilt is coercive, it has a finite global minimum and the conjugate supremum is attained, without a uniqueness conclusion.

## Verification

**Proof technique:** direct calculation.

1.1 The epigraph is $[-1,1]\times[0,\infty)$, a nonempty closed convex rectangle, and the domain $[-1,1]$ is nonempty; hence the indicator is proper, closed, and convex by [F1, F3]. At slope $p=0$, every $y\in[-1,1]$ contributes $0$ to the conjugate supremum, and no other $y$ is in the effective domain, so $f^*(0)=0$ and every point of the interval attains this supremum. [F1, F2, F3, given]

2.1 Fix any $x\in[-1,1]$. For every $y\in\mathbb R$, $f(y)\ge0=f(x)+0(y-x)$: equality holds on the interval and the left side is $+\infty$ outside it. Hence $0\in\partial f(x)$; [L1] also gives $f^*(0)=0=0\cdot x-f(x)$ at each such $x$. [F2, L1, step 1.1, algebra]

3.1 The zero tilt is $g=f$. It is coercive as an extended-real function: for any $M\in\mathbb R$, choosing $R=2$ ensures $|x|\ge R$ implies $g(x)=+\infty>M$. Its minimum is $0$, attained at every $x\in[-1,1]$, so this example satisfies [L2] while exhibiting nonuniqueness and a whole flat supporting face. [L2, step 1.1, algebra] ∎
