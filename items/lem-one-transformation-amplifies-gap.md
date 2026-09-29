---
id: lem-one-transformation-amplifies-gap
kind: lemma
title: "One fixed-alphabet transformation doubles small gaps"
status: draft
origin: pipeline
deps:
  - def-dinur-pcp-transformation
  - thm-gap-amplification-step
  - thm-alphabet-reduction-step
  - def-constraint-graph-and-labeling-value
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Irit Dinur, The PCP Theorem by Gap Amplification, §1.3 Theorem 1.5 (Main), soundness clause and fixed output alphabet, printed pp. 4–5"
      url: "https://www.cs.umd.edu/users/gasarch/TOPICS/pcp/dinur.pdf"
    - title: "Sanjeev Arora and Boaz Barak, Computational Complexity: A Modern Approach, §18.5.1 gap amplification (Lemma 18.29) and §18.5.2 alphabet reduction (Lemma 18.30), printed pp. 370–379"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
verification:
  precheck: pass
---

## Statement

Let $\Sigma_\star$ be the fixed $66$-symbol alphabet of
[[thm-alphabet-reduction-step]], let $\beta>0$, $c:=DK=7740/7$ and $t_0$ be
the constants that [[thm-gap-amplification-step]] attaches to the finite
alphabet $\Sigma_\star$, and let $\kappa=1/48000$ be the absolute constant
of [[thm-alphabet-reduction-step]]. Put
$$t:=\max\bigl(t_0,\ \lceil 4(\kappa\beta)^{-2}\rceil\bigr),\qquad \alpha:=\min\bigl(1/2,\ \kappa\beta c/\sqrt t\bigr),$$
and let $T:=T_t$ be the transformation of [[def-dinur-pcp-transformation]] at
this fixed $t$. Then $t\ge t_0$ is an integer in the transformation domain,
$\alpha>0$, and both depend only on the absolute constants $\kappa,\beta,c$
and $t_0$, never on an input graph. For every finite binary constraint graph
$G$ over $\Sigma_\star$,
$$\operatorname{UNSAT}(T(G))\ \ge\ \min\bigl(2\operatorname{UNSAT}(G),\ \alpha\bigr).$$
Moreover $T$ is a deterministic map from finite $\Sigma_\star$-graphs to
finite $\Sigma_\star$-graphs, so the same transformation and the same $t$ can
be used in every round of an iteration.

## Facts & Assumptions

**Given:** Fix the alphabet $\Sigma_\star$ and the constants $\beta,c,t_0$ of [[thm-gap-amplification-step]] and $\kappa$ of [[thm-alphabet-reduction-step]] attached to it.

[F1] $T_t(G)=A_{\Sigma_t}(R_t(G))$ for every finite $\Sigma_\star$-graph $G$ and every integer $t\ge t_0$, and $T_t$ is a deterministic map from finite $\Sigma_\star$-graphs to finite $\Sigma_\star$-graphs, defined exactly for integers $t\ge t_0$. ([[def-dinur-pcp-transformation]])

[F2] $\Sigma_t$ has $\lvert\Sigma_t\rvert=\lvert\Sigma_\star\rvert^{(2D)^R}$ symbols for the absolute constant $D=387$ and the view radius $R=t+\lceil\sqrt t\rceil$, so $\lvert\Sigma_t\rvert\ge2$ for every $t$ in the domain and the alphabet reduction $A_{\Sigma_t}$ of [F4] can be instantiated at this input alphabet. ([[def-dinur-pcp-transformation]])

[F3] The gap-amplification step at the alphabet $\Sigma_\star$ has a gap map $g_t(\varepsilon)=\beta\sqrt t\,\min(\varepsilon,c/t)$ with $c=DK=7740/7$ and $\beta>0$ depending only on $\lvert\Sigma_\star\rvert=66$ and the absolute constants of that theorem, and $\operatorname{UNSAT}(R_t(G))\ge\beta\sqrt t\,\min(\operatorname{UNSAT}(G),c/t)$ for every $t\ge t_0$ and every finite $\Sigma_\star$-graph $G$. ([[thm-gap-amplification-step]])

[F4] For every finite alphabet $\Sigma$ with $\lvert\Sigma\rvert\ge2$ and every finite $\Sigma$-graph $H$, $$\operatorname{UNSAT}(A_\Sigma(H))\ge\kappa\operatorname{UNSAT}(H),\qquad \kappa=\frac{\rho_0\delta}{4\cdot6}=\frac1{48000},$$ so the retention factor is the absolute constant $\kappa$. ([[thm-alphabet-reduction-step]])

[F5] For a labeling $\sigma$ the number $\operatorname{val}_\sigma(G)$ is the fraction of ordinary edges satisfied, or $1$ when $E(G)=\varnothing$; hence $0\le\operatorname{val}_\sigma(G)\le1$ and $0\le\operatorname{UNSAT}(G)\le1$ for every finite graph $G$. ([[def-constraint-graph-and-labeling-value]])

## Proof

**Given:** Use the fixed alphabet $\Sigma_\star$ and the constants $\beta,c,t_0,\kappa$ of [F3] and [F4].

1.1 The numbers $\kappa=1/48000>0$ and $\beta>0$ are fixed constants, so $t:=\max(t_0,\lceil4(\kappa\beta)^{-2}\rceil)$ is a well-defined integer with $t\ge t_0$; it therefore lies in the transformation domain of [F1], and $t\ge4(\kappa\beta)^{-2}$ gives $\sqrt t\ge2/(\kappa\beta)$, that is, $\kappa\beta\sqrt t\ge2$. [F1, F3, F4, algebra]

1.2 Let $G$ be an arbitrary finite $\Sigma_\star$-graph and put $\varepsilon:=\operatorname{UNSAT}(G)$; by [F5], $\varepsilon\ge0$. The gap-amplification step [F3] gives $\operatorname{UNSAT}(R_t(G))\ge\beta\sqrt t\,\min(\varepsilon,c/t)$. [F3, F5, given]

2.1 With $c=7740/7>0$ from [F3], set $\alpha:=\min(1/2,\kappa\beta c/\sqrt t)$. Then $\alpha>0$ and $\alpha\le\kappa\beta c/\sqrt t$, and both $t$ and $\alpha$ depend only on $\kappa,\beta,c,t_0$. [F3, step 1.1, algebra]

2.2 Put $T:=T_t$. By [F1], $T$ is a deterministic map from finite $\Sigma_\star$-graphs to finite $\Sigma_\star$-graphs with $T(G)=A_{\Sigma_t}(R_t(G))$ for every finite $\Sigma_\star$-graph $G$; by [F2] the alphabet $\Sigma_t$ is finite of size at least two, so the reduction $A_{\Sigma_t}$ of [F4] applies to $\Sigma_t$-graphs. [F1, F2, F4, step 1.1]

2.3 The graph $R_t(G)$ is a finite graph over the alphabet $\Sigma_t$, which has at least two symbols by [F2]. Applying [F4] with $\Sigma:=\Sigma_t$ and $H:=R_t(G)$ gives $\operatorname{UNSAT}(A_{\Sigma_t}(R_t(G)))\ge\kappa\operatorname{UNSAT}(R_t(G))$, and multiplying the inequality of step 1.2 by $\kappa>0$ yields $\operatorname{UNSAT}(A_{\Sigma_t}(R_t(G)))\ge\kappa\beta\sqrt t\,\min(\varepsilon,c/t)$. [F1, F2, F3, F4, step 1.2, algebra]

3.1 Since $\kappa\beta\sqrt t\ge2$ (step 1.1) and $\varepsilon\ge0$ (step 1.2), $\kappa\beta\sqrt t\,\min(\varepsilon,c/t)=\min(\kappa\beta\sqrt t\,\varepsilon,\kappa\beta c/\sqrt t)\ge\min(2\varepsilon,\alpha)$, because $\kappa\beta\sqrt t\,\varepsilon\ge2\varepsilon$ while $\kappa\beta c/\sqrt t\ge\alpha$ by step 2.1. Hence $\operatorname{UNSAT}(T(G))=\operatorname{UNSAT}(A_{\Sigma_t}(R_t(G)))\ge\min(2\varepsilon,\alpha)=\min(2\operatorname{UNSAT}(G),\alpha)$. [F1, step 1.1, step 1.2, step 2.1, step 2.3, algebra]

4.1 The graph $G$ was arbitrary and the numbers $t,\alpha$ and the map $T$ were fixed in steps 1.1–2.2 without reference to $G$; hence there are a fixed integer $t\ge t_0$, a fixed $\alpha>0$ and the fixed map $T=T_t$ with $\operatorname{UNSAT}(T(G))\ge\min(2\operatorname{UNSAT}(G),\alpha)$ for every finite $\Sigma_\star$-graph $G$, and $T$ is again a finite $\Sigma_\star$-graph transformation, so the same $t$ serves in every round. [step 1.1, step 2.1, step 2.2, step 3.1] ∎

## Remarks

This is the soundness clause of Dinur's gap-amplification step in the fixed-alphabet form: the powering alone multiplies small unsatisfaction values by $\beta\sqrt t$ but enlarges the alphabet to $\Sigma_t$, and the alphabet reduction returns to $\Sigma_\star$ at the absolute cost $\kappa$. Fixing one $t$ with $\kappa\beta\sqrt t\ge2$ therefore restores the factor two, with the cap $\alpha$ for large inputs. The threshold $t$ and the cap $\alpha$ are computed from absolute constants alone, so no input-dependent choice or sampling is involved and the map can be iterated. The lemma asserts only the lower bound on unsatisfaction; it makes no claim about value one, which is supplied separately by [[lem-one-transformation-preserves-satisfiability]].
