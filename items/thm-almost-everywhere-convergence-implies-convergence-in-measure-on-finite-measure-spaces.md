---
id: thm-almost-everywhere-convergence-implies-convergence-in-measure-on-finite-measure-spaces
kind: theorem
title: "On a finite measure space, almost-everywhere convergence implies convergence in measure"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-convergence-almost-everywhere-relative-to-a-measure, def-convergence-in-measure, thm-continuity-from-above-for-measures, prop-measure-monotonicity]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  references:
    - title: "H. L. Royden and P. M. Fitzpatrick, Real Analysis, 4th ed., Proposition 3"
      url: "https://fliphtml5.com/avac/zfwm/Measure_Theory_Royden/"
---

## Statement

Let $(X,\mathcal A,\mu)$ be a measure space with $\mu(X)<+\infty$, and let
$f_n,f : X \to \mathbb R$ be measurable. If $f_n \to f$ $\mu$-almost
everywhere, then $f_n \to f$ in measure.
## Facts & Assumptions

**Given:** A finite measure space $(X,\mathcal A,\mu)$ and measurable functions $f_n,f : X \to \mathbb R$ such that $f_n \to f$ almost everywhere.

[L1] Almost-everywhere convergence means pointwise convergence off a measurable null set. ([[def-convergence-almost-everywhere-relative-to-a-measure]])

[L2] Convergence in measure means that for every real $\varepsilon>0$, $\mu(\{|f_n-f|>\varepsilon\}) \to 0$. ([[def-convergence-in-measure]])

[L3] If $(E_n)$ is a decreasing sequence of measurable sets and one $E_{n_0}$ has finite measure, then $\mu(\bigcap_n E_n)=\inf_n\mu(E_n)$. ([[thm-continuity-from-above-for-measures]])

[L4] If $A \subseteq B$ are measurable, then $\mu(A)\le\mu(B)$. ([[prop-measure-monotonicity]])

## Proof

**Proof technique:** direct.

1.1 Fix $\varepsilon>0$, and let $N$ be a measurable null set outside which $f_n(x)\to f(x)$. For $r \ge 0$ put $E_r:=\bigcup_{n \ge r}\{|f_n-f|>\varepsilon\}$. Then $(E_r)$ is a decreasing sequence of measurable sets, each contained in $X$, and $\bigcap_{r=0}^\infty E_r \subseteq N$ because outside $N$ only finitely many indices can satisfy $|f_n(x)-f(x)|>\varepsilon$. [given, L1]

2.1 Because $\mu(X)<+\infty$, [L3] applies to $(E_r)$. The intersection in step 1.1 is null, so $$\mu(E_r)\downarrow \mu\!\left(\bigcap_{r=0}^\infty E_r\right)=0.$$ For each $r$ one has $\{|f_r-f|>\varepsilon\}\subseteq E_r$, hence by [L4] $\mu(\{|f_r-f|>\varepsilon\})\le\mu(E_r)\to0$. This is exactly [L2]. [step 1.1, L2, L3, L4]

3.1 Since $\varepsilon>0$ was arbitrary, the sequence converges in measure. [step 2.1, L2] ∎
