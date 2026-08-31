---
id: thm-monodromy-theorem
kind: theorem
title: "Fixed-endpoint homotopic paths give the same analytic continuation"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-analytic-continuation-along-a-path, thm-end-germ-of-path-continuation-is-independent-of-the-chain, thm-uniqueness-of-analytic-continuation, def-homotopy-relative-and-path-homotopy, thm-lebesgue-number-lemma]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Lars V. Ahlfors, Complex Analysis, 3rd ed., Ch. 8 §§1.5-1.6"
      url: "https://mccuan.math.gatech.edu/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
    - title: "Henry Wilton, Riemann Surfaces lecture notes, §9.2"
      url: "https://www.scribd.com/document/833386016/II-Riemann-Surfaces-Notes-Henry-Wilton"
---

## Statement

Let $\Omega \subseteq \mathbb C$ be a complex domain, let $a_0 \in \Omega$, and
let $\xi_0$ be a holomorphic germ at $a_0$. Assume that $\xi_0$ admits analytic
continuation along every path in $\Omega$ starting at $a_0$.

If $\alpha,\beta:[0,1]\to\Omega$ satisfy
$\alpha(0)=\beta(0)=a_0$, have the same terminal point, and are path homotopic
relative to the endpoints, then the continuation of $\xi_0$ along $\alpha$ and
along $\beta$ has the same terminal germ.

## Facts & Assumptions

**Given:** A complex domain $\Omega$, a base point $a_0 \in \Omega$, a germ $\xi_0$ at $a_0$, paths $\alpha,\beta$ starting at $a_0$, and an endpoint-fixed path homotopy $H:[0,1]\times[0,1]\to\Omega$ from $\alpha$ to $\beta$.

[L1] For a fixed path, the terminal germ of continuation is independent of the chosen admissible chain, hence unique ([[thm-end-germ-of-path-continuation-is-independent-of-the-chain]], [[thm-uniqueness-of-analytic-continuation]]).

[L2] A path homotopy relative to the endpoints is a continuous map $H:[0,1]\times[0,1]\to\Omega$ whose slices $\alpha_t(s):=H(s,t)$ all start at $a_0$ and all end at the common endpoint ([[def-homotopy-relative-and-path-homotopy]]).

## Proof

**Proof technique:** direct.

1.1 For $t \in [0,1]$, write $\alpha_t(s):=H(s,t)$. By [L2], each $\alpha_t$ is a path from $a_0$ to the common endpoint, so continuation of $\xi_0$ along $\alpha_t$ exists by hypothesis. [given, L2]

1.2 Fix $t_0 \in [0,1]$ and choose an admissible continuation chain $(f_j,U_j)$ over a subdivision $0=s_0<\cdots<s_m=1$ for $\alpha_{t_0}$. For each $j<m$, the compact set $\alpha_{t_0}([s_j,s_{j+1}])$ lies in the open set $U_j$. Continuity of $H$ therefore gives $\varepsilon_j>0$ such that

$$H([s_j,s_{j+1}]\times((t_0-\varepsilon_j,t_0+\varepsilon_j)\cap[0,1]))\subseteq U_j.$$

For each $j<m-1$, admissibility gives equality of the germs of $f_j$ and $f_{j+1}$ at $\alpha_{t_0}(s_{j+1})$, so there is an open neighbourhood $W_j\subseteq U_j\cap U_{j+1}$ of that point on which $f_j=f_{j+1}$. Continuity of $H$ at $(s_{j+1},t_0)$ therefore gives $\eta_j>0$ such that $$H(\{s_{j+1}\}\times((t_0-\eta_j,t_0+\eta_j)\cap[0,1]))\subseteq W_j.$$ Taking the minimum of the finitely many $\varepsilon_j$ and $\eta_j$ produces $\varepsilon>0$ with all of these properties. [step 1.1, choose]

2.1 For every $t$ with $|t-t_0|<\varepsilon$, step 1.2 keeps the subpath $\alpha_t([s_j,s_{j+1}])$ inside $U_j$ for every $j<m$. It also keeps each joining point $\alpha_t(s_{j+1})$ inside $W_j$, where $f_j=f_{j+1}$. So the same function elements $(f_j,U_j)$ and the same subdivision form an admissible continuation chain for $\alpha_t$. By [L1], the terminal germ of continuation along $\alpha_t$ is therefore the terminal germ of this fixed chain, so it is independent of $t$ on that neighbourhood of $t_0$. [L1, step 1.2]

3.1 Step 2.1 shows that the terminal germ depends locally constantly on $t \in [0,1]$. Since $[0,1]$ is connected, this terminal germ is constant on the whole interval. In particular the terminal germs at $t=0$ and $t=1$, namely the continuations along $\alpha$ and $\beta$, are equal. [step 2.1, given] ∎
