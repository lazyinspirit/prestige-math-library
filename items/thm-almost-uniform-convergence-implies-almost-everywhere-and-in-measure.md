---
id: thm-almost-uniform-convergence-implies-almost-everywhere-and-in-measure
kind: theorem
title: "Almost uniform convergence implies almost-everywhere convergence and convergence in measure"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-almost-uniform-convergence, def-convergence-almost-everywhere-relative-to-a-measure, def-convergence-in-measure, prop-measure-monotonicity]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  references:
    - title: "Gerald B. Folland, Real Analysis, 2nd ed., Exercise 39"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
---

## Statement

Let $(X,\mathcal A,\mu)$ be a measure space and let
$f_n,f : X \to \mathbb R$ be measurable. If $f_n \to f$ almost uniformly, then
$f_n \to f$ $\mu$-almost everywhere and $f_n \to f$ in measure.
## Facts & Assumptions

**Given:** A measure space $(X,\mathcal A,\mu)$, measurable functions $f_n,f : X \to \mathbb R$, and almost-uniform convergence of $(f_n)$ to $f$.

[L1] Almost-uniform convergence means that for every $\varepsilon>0$ there is a measurable $E$ with $\mu(E)<\varepsilon$ such that $f_n \to f$ uniformly on $X\setminus E$. ([[def-almost-uniform-convergence]])

[L2] Almost-everywhere convergence means pointwise convergence off a measurable null set. ([[def-convergence-almost-everywhere-relative-to-a-measure]])

[L3] Convergence in measure means that for every real $\varepsilon>0$, $\mu(\{|f_n-f|>\varepsilon\}) \to 0$. ([[def-convergence-in-measure]])

[L4] If $A \subseteq B$ are measurable, then $\mu(A)\le\mu(B)$. ([[prop-measure-monotonicity]])

## Proof

**Proof technique:** direct.

1.1 For each $m \ge 1$, [L1] gives a measurable set $E_m$ with $\mu(E_m)<1/m$ such that $f_n \to f$ uniformly on $X\setminus E_m$. Let $N:=\bigcap_{m=1}^\infty E_m$. Since $N \subseteq E_m$ for every $m$, [L4] gives $\mu(N)\le 1/m$ for every $m$, hence $\mu(N)=0$. If $x \in X\setminus N$, then $x \notin E_m$ for some $m$, and uniform convergence on $X\setminus E_m$ implies $f_n(x)\to f(x)$. Therefore $f_n \to f$ almost everywhere by [L2]. [L1, L2, L4]

1.2 Fix $\varepsilon>0$ and $\eta>0$. By [L1] choose a measurable set $E$ with $\mu(E)<\eta$ such that $f_n \to f$ uniformly on $X\setminus E$. Then there is $N$ such that for $n \ge N$ and $x \in X\setminus E$ one has $|f_n(x)-f(x)|\le \varepsilon$, so $\{|f_n-f|>\varepsilon\}\subseteq E$. Hence $\mu(\{|f_n-f|>\varepsilon\})\le\mu(E)<\eta$ for $n \ge N$. Since $\eta$ was arbitrary, [L3] follows. [L1, L3, L4]

2.1 Steps 1.1 and 1.2 prove the two asserted conclusions. [step 1.1, step 1.2] ∎
