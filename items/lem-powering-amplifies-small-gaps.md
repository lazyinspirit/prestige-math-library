---
id: lem-powering-amplifies-small-gaps
kind: lemma
title: "Powering amplifies a small unsatisfaction gap"
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-constraint-graph-powering, def-constraint-graph-and-labeling-value, def-plurality-decoding-of-powered-local-views, lem-plurality-consistency-along-middle-walk-positions, lem-expander-walk-violated-edge-collision-bound, lem-overlap-controlled-union-lower-bound]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Irit Dinur, The PCP theorem by gap amplification, §6 Lemma 6.1 and its proof (Lemmas 6.2-6.4), printed pp. 19-24."
      url: "https://www.cs.umd.edu/users/gasarch/TOPICS/pcp/dinur.pdf"
    - title: "Arora and Barak, Computational Complexity: A Modern Approach, §18.5.1 Lemma 18.29 part 3 with Claims 18.32-18.34, printed pp. 372-377."
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
---

## Statement

Let $d\ge1$, let $\Sigma$ be a finite alphabet with $\lvert\Sigma\rvert\ge2$, and let $\alpha_0<1$ be a constant. Then there are a constant $\beta>0$ depending only on $d,\lvert\Sigma\rvert,\alpha_0$, and an integer $t_0$ with the same dependence, such that for every $t\ge t_0$, every binary constraint graph $G$ over $\Sigma$ whose underlying graph is $d$-regular in the adjacency-slot convention with $E(G)\ne\varnothing$ and normalized second eigenvalue bound $\alpha\le\alpha_0$, and every labeling $\varphi$ of the powered graph $G_t$ of [[def-constraint-graph-powering]],
$$\operatorname{UNSAT}_\varphi(G_t)\ \ge\ \beta\sqrt t\,\min\bigl(\operatorname{UNSAT}(G),\,1/t\bigr).$$
In particular, if $0<\varepsilon\le c/t$ for a constant $c$ then $\operatorname{UNSAT}_\varphi(G_t)\ge\beta'\sqrt t\,\varepsilon$, and for larger gaps the lower bound saturates at $\beta/\sqrt t$. No parity hypothesis on $t$ is needed in this parameterization: the powered slots have length $2t+1$ and the analysed window is symmetric about the midpoint $t+1$. The bound is uniform in the labeling $\varphi$.

## Facts & Assumptions

**Given:** integers $d\ge1$ and $t\ge\max\{4,\lceil(8C_0\lvert\Sigma\rvert)^2\rceil\}$; a finite alphabet $\Sigma$ with $\lvert\Sigma\rvert\ge2$; a $d$-regular binary constraint graph $G$ over $\Sigma$ with $E(G)\ne\varnothing$ and $\alpha\le\alpha_0<1$; a labeling $\varphi$ of the powered graph $G_t$.

[F1] For a labeling of $G$, $\operatorname{UNSAT}_\sigma(G)=1-\operatorname{val}_\sigma(G)$ is one minus the fraction of ordinary edges satisfied, and $\operatorname{UNSAT}(G)=\min_\sigma\operatorname{UNSAT}_\sigma(G)$; for a labeling of $G_t$, $\operatorname{UNSAT}_\varphi(G_t)$ is the fraction of ordinary edges violated, equivalently the violation probability for a uniformly random edge oriented by its unique copy-$0$ incidence slot ([[def-constraint-graph-and-labeling-value]], [[def-constraint-graph-powering]]).

[F2] The plurality decoding $\hat\varphi$ of $\varphi$ satisfies $p_v(\hat\varphi(v))\ge1/\lvert\Sigma\rvert$ for every $v$, where $p_v$ is the law of the value claimed for $v$ by the view at the endpoint of a uniformly random lazy-walk pattern of length $t$ from $v$ ([[def-plurality-decoding-of-powered-local-views]]).

[F3] Draw a uniformly random powered edge oriented by its unique copy-$0$ incidence slot, equivalently a uniform start $v_0\in V$ and a uniform lazy-walk pattern $\sigma\in\mathcal P_{2t+1}$. With $C_0=1/\sqrt{2\pi}$ and $c_{\rm win}:=1/(8C_0\lvert\Sigma\rvert)$, for every $j$ with $\lvert j-1-t\rvert\le c_{\rm win}\sqrt t$ and every slot $s$ of $G$ from $u$ to $u'$, the probability that both $\varphi(v_0)(\kappa_{v_0,u})=\hat\varphi(u)$ and $\varphi(v_L)(\kappa_{v_L,u'})=\hat\varphi(u')$, conditioned on the $j$-th lazy step of $\sigma$ being the option $s$, is at least $1/(4\lvert\Sigma\rvert^2)$ ([[lem-plurality-consistency-along-middle-walk-positions]]).

[F4] For any set $F$ of ordinary edges of $G$ with $\varepsilon_F=\lvert F\rvert/\lvert E(G)\rvert$, with $A_i$ the event that the $i$-th step of a uniformly random lazy-walk pattern of length $k$ from a uniform start vertex traverses an edge of $F$, one has $\sum_{1\le i<j\le k}\Pr[A_i\cap A_j]\le\sqrt{d/2}\,(k^2\varepsilon_F^2+k\varepsilon_F/(1-\alpha))$ ([[lem-expander-walk-violated-edge-collision-bound]]).

[F5] If finitely many events satisfy $\sum_{i<j}\Pr[B_i\cap B_j]\le C\sum_i\Pr[B_i]$ for some $C\ge0$, then $\Pr[\bigcup_iB_i]\ge\sum_i\Pr[B_i]/(1+2C)$ ([[lem-overlap-controlled-union-lower-bound]]).

## Proof

**Proof technique:** direct.

1.1 If $\operatorname{UNSAT}(G)=0$ then the right-hand side is zero and there is nothing to prove, so assume $\varepsilon:=\operatorname{UNSAT}(G)>0$. Let $\hat\varphi$ be the plurality decoding of $\varphi$ and put $\varepsilon':=\operatorname{UNSAT}_{\hat\varphi}(G)$, so $\varepsilon'\ge\varepsilon$ by [F1]; let $V\subseteq E(G)$ be the set of edges violated by $\hat\varphi$, of size $\varepsilon'\lvert E(G)\rvert\ge1$. Choose a set $F\subseteq V$ as follows: if $\min(\varepsilon',1/t)\lvert E(G)\rvert\ge1$ let $F$ be any subset of $V$ with $\lvert F\rvert=\lceil\min(\varepsilon',1/t)\lvert E(G)\rvert\rceil$, and otherwise let $F=\{f_0\}$ for some single violated edge $f_0$. Writing $\varepsilon_F:=\lvert F\rvert/\lvert E(G)\rvert$ and $m:=\lvert E(G)\rvert$, in both cases $\varepsilon_F\ge\min(\varepsilon',1/t)\ge\min(\varepsilon,1/t)>0$, and $\varepsilon_F\le\min(\varepsilon',1/t)+1/m$. Put $a:=c_{\rm win}\sqrt t$ and $k:=\#\{j:\lvert j-1-t\rvert\le a\}$. Since $c_{\rm win}<1$, this interval lies inside $J$; since $t\ge\lceil c_{\rm win}^{-2}\rceil$, $a\ge1$, and the integer positions give $k=2\lfloor a\rfloor+1$, so $a\le k\le2a+1$. [F1, F2, F3, construct, algebra]

2.1 For $j$ in the window of step 1.1 and $f\in F$ let $B_{j,f}$ be the event that the $j$-th lazy step of the sampled representative walk traverses a slot of the edge $f$ carrying the relation $R_f$ in its specified endpoint order (for a loop, either of its two slots), and that both endpoint views report the decoded labels of the endpoints of $f$. In the uniform powered-edge model of [F3] the position before the $j$-th step is uniform, so each of the $2m$ slots of $G$ is traversed by that step with probability $1/(2\cdot2m)=1/(4m)$, and combining this with the conditional bound of [F3] gives $\Pr[B_{j,f}]\ge1/(16m\lvert\Sigma\rvert^2)$. Moreover $B_{j,f}$ implies that the sampled powered edge is violated: the tested pair at position $j$ is exactly the pair $(\hat\varphi(u),\hat\varphi(u'))$ of decoded labels at the endpoints of $f$, and this pair fails $R_f$ because $\hat\varphi$ violates $f$. [F1, F3, step 1.1, algebra]

3.1 Let $A_j$ be the event that the $j$-th lazy step of the sampled representative walk traverses an edge of $F$. If $j=j'$ and $f\ne f'$ then $B_{j,f}\cap B_{j',f'}=\varnothing$, a single step traversing one edge only; otherwise $B_{j,f}\cap B_{j',f'}\subseteq A_j\cap A_{j'}$. The $k$ consecutive lazy steps in the central sub-window have the law of a length-$k$ lazy walk from a uniform start: the walk starts uniformly and the uniform distribution remains stationary at the beginning of this sub-window, while its step choices are independent. Thus [F4] applies to this block and this $F$, and $\sum_{(j,f)\ne(j',f')}\Pr[B_{j,f}\cap B_{j',f'}]\le2\sum_{j<j'}\Pr[A_j\cap A_{j'}]\le2\sqrt{d/2}\,(k^2\varepsilon_F^2+k\varepsilon_F/(1-\alpha))$. [F1, F4, step 1.1, step 2.1]

4.1 Summing the bound of step 2.1 over the $k$ positions and the $\lvert F\rvert$ edges gives $S:=\sum_{j,f}\Pr[B_{j,f}]\ge k\lvert F\rvert/(16m\lvert\Sigma\rvert^2)=k\varepsilon_F/(16\lvert\Sigma\rvert^2)\ge c_{\rm win}\sqrt t\,\varepsilon_F/(16\lvert\Sigma\rvert^2)>0$, and the events and the collision sum are finite, so [F5] is applicable. Applying it with the ratio $$C:=\frac{\sum_{(j,f)\ne(j',f')}\Pr[B_{j,f}\cap B_{j',f'}]}{S}\ \le\ \frac{2\sqrt{d/2}\,(k^2\varepsilon_F^2+k\varepsilon_F/(1-\alpha))\cdot16\lvert\Sigma\rvert^2}{k\varepsilon_F}\ =\ 32\sqrt{\tfrac d2}\,\lvert\Sigma\rvert^2\Bigl(k\varepsilon_F+\frac1{1-\alpha}\Bigr)$$ gives $\Pr[\bigcup_{j,f}B_{j,f}]\ge S/(1+2C)$. [F5, step 2.1, step 3.1, algebra]

5.1 Two regimes. If $k\varepsilon_F\le1$ then $1+2C\le1+64\sqrt{d/2}\,\lvert\Sigma\rvert^2(1+1/(1-\alpha_0))=:1+2C^*$ and hence $\Pr[\bigcup B]\ge c_{\rm win}\sqrt t\,\varepsilon_F/(16\lvert\Sigma\rvert^2(1+2C^*))=\beta_1\sqrt t\,\varepsilon_F$, where $\beta_1:=c_{\rm win}/(16\lvert\Sigma\rvert^2(1+2C^*))$. If $k\varepsilon_F>1$ then $k\varepsilon_F+1/(1-\alpha)\le k\varepsilon_F(1+1/(1-\alpha))$, so $1+2C\le(1+64\sqrt{d/2}\lvert\Sigma\rvert^2(1+1/(1-\alpha_0)))k\varepsilon_F$ and $\Pr[\bigcup B]\ge 1/(16\lvert\Sigma\rvert^2(1+2C^*))=\beta_2$ with $\beta_2:=1/(16\lvert\Sigma\rvert^2(1+2C^*))$. Every $B_{j,f}$ implies that the sampled powered edge is violated, so $\operatorname{UNSAT}_\varphi(G_t)\ge\Pr[\bigcup_{j,f}B_{j,f}]$, and because $\sqrt t\min(\varepsilon,1/t)\le t^{-1/2}\le1$ for $t\ge1$ while $\varepsilon_F\ge\min(\varepsilon,1/t)$, both regimes give $\operatorname{UNSAT}_\varphi(G_t)\ge\min(\beta_1,\beta_2)\sqrt t\,\min(\operatorname{UNSAT}(G),1/t)$ with $\beta:=\min(\beta_1,\beta_2)$ and $t_0:=\max\{4,\lceil c_{\rm win}^{-2}\rceil\}$. [step 1.1, step 4.1, algebra] ∎

## Remarks

- **The two regimes are the two halves of the promise.** For $k\varepsilon_F\le1$ the union bound loses only the constant $1+2C^*$ and delivers $\Theta(\sqrt t\,\varepsilon_F)$; for $k\varepsilon_F>1$ the same computation yields a constant lower bound, which dominates $\beta\sqrt t\min(\varepsilon,1/t)$ because that quantity is at most $\beta/\sqrt t$. This is exactly Dinur's Lemma 6.1 with $\min(\operatorname{UNSAT}(G),1/t)$, and it is what makes the iteration of [[thm-gap-amplification-step]] terminate in $O(\log M)$ rounds.
- **The window is a sub-window of the central window.** The positions used lie in $J_c\subseteq J$ and number $k=2\lfloor c_{\rm win}\sqrt t\rfloor+1\ge c_{\rm win}\sqrt t$, so every event $B_{j,f}$ is a violation of the powered slot relation and the sub-window still gives the $\sqrt t$ gain. Over the full central window the middle-position lemma would lose a constant and the collision term $k\varepsilon_F/(1-\alpha)$ would grow.
- **Where each constant comes from.** $\beta$ depends only on $d,\lvert\Sigma\rvert,\alpha_0$: through $c_{\rm win}=1/(8C_0\lvert\Sigma\rvert)$ and the factor $1/(1-\alpha)$ of the collision bound, and through $\sqrt{d/2}$ in the same bound. No dependence on $n$, on $\lvert E(G)\rvert$, on $t$ or on the labeling remains, and the proof chooses nothing beyond the subset $F$ and the slot of each edge, both of which are fixed deterministically.
- The statement above is uniform over labelings of $G_t$, including non-liftable ones; that is the content of the decoding step 1.1, which replaces an arbitrary powered labeling by one base labeling $\hat\varphi$ at the cost of the factor $1$ in $\varepsilon'\ge\varepsilon$.
