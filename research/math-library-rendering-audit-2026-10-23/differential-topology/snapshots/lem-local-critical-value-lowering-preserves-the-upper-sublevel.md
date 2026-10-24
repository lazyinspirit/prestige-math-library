---
id: "lem-local-critical-value-lowering-preserves-the-upper-sublevel"
kind: "lemma"
title: "Local critical-value lowering preserves the upper sublevel"
deps: ["thm-morse-lemma", "lem-manifold-bump-for-a-compact-set-inside-an-open-set"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - url: "https://www3.nd.edu/~lnicolae/Morse2nd.pdf"
      title: "Nicolaescu, An Invitation to Morse Theory"
    - url: "https://audin.pages.math.unistra.fr/livres/audin-damian-en.pdf"
      title: "Audin–Damian, Morse Theory and Floer Homology"
status: published
origin: "pipeline"
proof_strategy: "differentiate the cutoff perturbation and compare sublevel sets"
---

## Statement

Assume $\mathrm{AC}_\omega$. In a Morse chart $f=c-|u|^2+|v|^2$ containing the closed ball $|u|^2+|v|^2\le2\varepsilon$, choose a smooth $\mu:[0,\infty)\to[0,\infty)$ supported in $[0,2\varepsilon)$ with $\mu(0)>\varepsilon$ and $-1<\mu^{\prime}\le0$. Set $F=f-\mu(|u|^2+2|v|^2)$ in the chart and $F=f$ outside. This is smooth, has the same critical points as $f$, lowers $p$ below $c-\varepsilon$, and satisfies $\{F\le c+\varepsilon\}=\{f\le c+\varepsilon\}$. If $f^{-1}([c-\varepsilon,c+\varepsilon])$ is compact with only the critical point $p$, the corresponding closed band of $F$ is compact and regular.

## Facts & Assumptions

[F1] [[thm-morse-lemma]]: Let $f:M\to\mathbb R$ be smooth, let $p$ be a nondegenerate critical point of $f$, and let $\lambda$ be the index of $p$. If $n=\dim M$, then there are local coordinates $(x^1,\dots,x^n)$ centered at $p$ in which $$f=f(p)-\sum_{i=1}^{\lambda}(x^i)^2+\sum_{i=\lambda+1}^{n}(x^i)^2.$$ For $n=0$, both sums are empty.

[F2] [[lem-manifold-bump-for-a-compact-set-inside-an-open-set]]: Let $M$ be a smooth manifold, let $K\subseteq M$ be compact, and let $W\subseteq M$ be open with $K\subseteq W$. Then there exists a smooth function $\rho:M\to [0,1]$ that equals $1$ on an open neighbourhood of $K$ and satisfies $\operatorname{supp}(\rho)\subseteq W$.

## Proof

**Given:** The objects and hypotheses in the statement.

1.1 The Morse lemma supplies the displayed coordinates after shrinking $\varepsilon>0$. Such cutoffs exist: take a smooth function $0\le\eta<1$ with support compactly inside $(0,2\varepsilon)$ and integral greater than $\varepsilon$, and put $\mu(t)=\int_t^{2\varepsilon}\eta(s)\,ds$. A bump equal to a constant less than one on a sufficiently long closed subinterval gives $\eta$. The perturbation has support compactly inside the chart, so gluing by zero is smooth. [F1, F2, algebra]

2.1 Put $x=|u|^2$, $y=|v|^2$. Then $dF=-2(1+\mu^{\prime})u\cdot du+2(1-2\mu^{\prime})v\cdot dv$. Both scalar magnitudes are positive, so its only chart critical point is $(0,0)$; its Hessian there has the same index, including empty coordinate blocks. Its value is $c-\mu(0)<c-\varepsilon$. All other critical points and their values are unchanged. [step 1.1, algebra]

3.1 Since $F\le f$, one inclusion of upper sublevels holds. Wherever $F\ne f$, $x+2y<2\varepsilon$, hence $f=c-x+y<c+\varepsilon$; elsewhere the two functions coincide. This proves the reverse inclusion. If $F\ge c-\varepsilon$, then $f\ge F\ge c-\varepsilon$. Thus the modified closed band is a closed subset of the original compact band. Its only candidate critical point has been lowered out of it. [step 2.1, algebra] ∎
