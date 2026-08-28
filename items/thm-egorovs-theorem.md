---
id: thm-egorovs-theorem
kind: theorem
title: "Egorov's theorem"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-convergence-almost-everywhere-relative-to-a-measure, def-almost-uniform-convergence, thm-continuity-from-above-for-measures, thm-finite-and-countable-subadditivity-of-measures, prop-measure-monotonicity]
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  references:
    - title: "Gerald B. Folland, Real Analysis, 2nd ed., Theorem 2.33"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
---
## Statement
Let $(X,\mathcal A,\mu)$ be a measure space with $\mu(X)<+\infty$, and let
$f_n,f : X \to \mathbb R$ be measurable. If $f_n \to f$ $\mu$-almost
everywhere, then $f_n \to f$ almost uniformly.

The finite-measure hypothesis is used exactly at the continuity-from-above step
below.

## Facts & Assumptions
**Given:** A finite measure space $(X,\mathcal A,\mu)$ and measurable functions $f_n,f : X \to \mathbb R$ such that $f_n \to f$ almost everywhere.

[L1] Almost-everywhere convergence means pointwise convergence off a measurable null set. ([[def-convergence-almost-everywhere-relative-to-a-measure]])

[L2] Almost-uniform convergence means that for every $\varepsilon>0$ there is a measurable $E$ with $\mu(E)<\varepsilon$ such that $f_n \to f$ uniformly on $X\setminus E$. ([[def-almost-uniform-convergence]])

[L3] If $(E_n)$ is a decreasing sequence of measurable sets and one $E_{n_0}$ has finite measure, then $\mu(\bigcap_n E_n)=\inf_n\mu(E_n)$. ([[thm-continuity-from-above-for-measures]])

[L4] For measurable $(E_k)$ one has $\mu(\bigcup_k E_k)\le\sum_{k=0}^\infty\mu(E_k)$. ([[thm-finite-and-countable-subadditivity-of-measures]])

[L5] If $A \subseteq B$ are measurable, then $\mu(A)\le\mu(B)$. ([[prop-measure-monotonicity]])

## Proof

**Proof technique:** direct.

1.1 Let $\varepsilon>0$, and let $N$ be a measurable null set outside which $f_n(x)\to f(x)$. For $m,k \ge 1$ put $$E_{k,m}:=\bigcup_{j \ge k}\{|f_j-f|>1/m\}.$$ For fixed $m$ the sets $E_{k,m}$ decrease with $k$, each lies in $X$, and $\bigcap_{k=1}^\infty E_{k,m}\subseteq N$ because outside $N$ only finitely many $j$ satisfy $|f_j(x)-f(x)|>1/m$. Therefore [L3] and [L5] give $$\mu(E_{k,m})\downarrow \mu\!\left(\bigcap_{k=1}^\infty E_{k,m}\right)=0.$$ So for each $m \ge 1$ there is a least index $k(m)$ with $\mu(E_{k(m),m})<\varepsilon 2^{-m}$. [L1, L3, L5, choose]

2.1 Put $E:=\bigcup_{m=1}^\infty E_{k(m),m}$. Then [L4] and step 1.1 give $$\mu(E)\le\sum_{m=1}^\infty \mu(E_{k(m),m}) <\sum_{m=1}^\infty \varepsilon 2^{-m}=\varepsilon.$$ If $x \in X\setminus E$, then for every $m \ge 1$ and every $j \ge k(m)$ one has $|f_j(x)-f(x)|\le 1/m$. Hence for any $\eta>0$ one may choose $m$ with $1/m<\eta$ and then $j \ge k(m)$ gives $|f_j(x)-f(x)|<\eta$. So $f_n \to f$ uniformly on $X\setminus E$. [step 1.1, L4, algebra]

3.1 Since $\varepsilon>0$ was arbitrary, step 2.1 is exactly [L2]. Therefore $f_n \to f$ almost uniformly. [step 2.1, L2] ∎
