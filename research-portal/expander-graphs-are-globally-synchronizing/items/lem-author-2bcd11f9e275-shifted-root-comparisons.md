---
id: lem-author-2bcd11f9e275-shifted-root-comparisons
kind: lemma
title: Inward comparison and small-shift limits of entropy roots
domain: mathematics
status: published
origin: pipeline
deps:
  - lem-author-2bcd11f9e275-logarithmic-tangent-bound
  - lem-author-2bcd11f9e275-entropy-branch-geometry
  - lem-author-2bcd11f9e275-entropy-inverse-branches
  - lem-author-2bcd11f9e275-shifted-root-signs
  - math:thm-monotonicity-from-the-derivative
dependency_roles:
  lem-author-2bcd11f9e275-logarithmic-tangent-bound: mathematical-premise
  lem-author-2bcd11f9e275-entropy-branch-geometry: mathematical-premise
  lem-author-2bcd11f9e275-entropy-inverse-branches: mathematical-premise
  lem-author-2bcd11f9e275-shifted-root-signs: mathematical-premise
  math:thm-monotonicity-from-the-derivative: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 4
---

## Statement

Under $0<\varepsilon<1$ and $1+\varepsilon<\gamma<1+\varepsilon^{-2}$, put $u=1/\gamma$, $t=(1+\varepsilon)/\gamma$, $c_\pm(\gamma)=a_\pm(u)-1$, $c_-(\gamma,\varepsilon)=a_-(t)-1+\varepsilon$, and $c_+(\gamma,\varepsilon)=a_+(t)-1-\varepsilon$. Then $-1<c_-(\gamma)<c_-(\gamma,\varepsilon)<0<c_+(\gamma,\varepsilon)<c_+(\gamma)$. For each fixed $\gamma>1$, $c_\pm(\gamma,\varepsilon)\to c_\pm(\gamma)$ as $\varepsilon\downarrow0$ within the admissible range.

## Facts & Assumptions

**Given:** The variables and hypotheses of the Statement.

[F1] [[lem-author-2bcd11f9e275-logarithmic-tangent-bound]] gives $-\log x>I(x)$ for $0<x<1$ and $\log y>I(y)$ for $1<y<e$.

[F2] [[lem-author-2bcd11f9e275-entropy-branch-geometry]] gives the strict branch order and $I(e)=1$, where $\log e=1$.

[F3] [[lem-author-2bcd11f9e275-entropy-inverse-branches]] gives the continuous inverse functions $a_\pm$ and the shifted solution formulas.

[F4] [[lem-author-2bcd11f9e275-shifted-root-signs]] gives the signs and admissibility of the two shifted solutions.

[F5] [[math:thm-monotonicity-from-the-derivative]] gives monotonicity from a derivative bound on a closed interval.

## Proof

**Goal:** Establish the full Statement.

1.1 Put $x=a_-(u)\in(0,1)$. If $x\le\varepsilon$, then $a_-(t)+\varepsilon>\varepsilon\ge x$. If $x>\varepsilon$, on $[x-\varepsilon,x]$ the derivative of $I(z)-z\log x$ is $\log z-\log x\le0$. Thus $I(x-\varepsilon)\ge I(x)-\varepsilon\log x>(1+\varepsilon)I(x)=t$. Since $I$ strictly decreases on its lower branch, $x-\varepsilon<a_-(t)$, again giving $x<a_-(t)+\varepsilon$. Therefore $c_-(\gamma)<c_-(\gamma,\varepsilon)$. [F1, F2, F5, algebra]

2.1 Put $y=a_+(u)$. Since $u<1=I(e)$, $1<y<e$. On $[y,y+\varepsilon]$ the derivative of $I(z)-z\log y$ is $\log z-\log y\ge0$. Therefore $I(y+\varepsilon)\ge I(y)+\varepsilon\log y>(1+\varepsilon)I(y)=t$. Strict increase on the upper branch gives $a_+(t)<y+\varepsilon$, hence $c_+(\gamma,\varepsilon)<c_+(\gamma)$. Together with F4 and $x>0$ this is the entire strict comparison. [F1, F2, F4, F5, step 1.1, algebra]

3.1 For fixed $\gamma>1$, all sufficiently small positive $\varepsilon$ obey the hypotheses: take $\varepsilon<\min\{1,\gamma-1,(\gamma-1)^{-1/2}\}$. Then $t\to u\in(0,1)$, and continuity of both inverses gives $a_\pm(t)\to a_\pm(u)$. The additive shifts tend to zero, proving both limits. [F3, algebra] ∎
