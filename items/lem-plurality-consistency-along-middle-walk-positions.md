---
id: lem-plurality-consistency-along-middle-walk-positions
kind: lemma
title: "Plurality opinions agree with local views in middle positions"
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-plurality-decoding-of-powered-local-views, lem-lazy-walk-lengths-within-root-t-have-close-endpoint-laws, def-constraint-graph-powering]
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
    - title: "Arora and Barak, Computational Complexity: A Modern Approach, §18.5.1 Claim 18.32, printed pp. 374-375."
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
    - title: "Irit Dinur, The PCP theorem by gap amplification, §6 first-moment estimate (Lemma 6.2), printed pp. 21-23."
      url: "https://www.cs.umd.edu/users/gasarch/TOPICS/pcp/dinur.pdf"
---

## Statement

Let $G$ be a binary constraint graph over $\Sigma$ whose underlying graph is $d$-regular in the adjacency-slot convention of [[def-constraint-graph-and-labeling-value]], let $t\ge4$, let $G_t$ be its powered graph with walk length $L=2t+1$, central window $J$ and view alphabet $\Sigma_t$, and let $\varphi:V\to\Sigma_t$ be any labeling of $G_t$ with plurality decoding $\hat\varphi$ ([[def-plurality-decoding-of-powered-local-views]]). Write
$$c:=\frac{1}{8C_0\lvert\Sigma\rvert},\qquad C_0=\frac{1}{\sqrt{2\pi}},$$
so that $c<1$, and let
$$J_c:=\{j\in J:\ \lvert j-1-t\rvert\le c\sqrt t\}$$
be the corresponding sub-window of the central window; it is nonempty, since $t+1\in J_c$.

Draw a uniformly random ordinary edge of $G_t$ and orient it by its unique copy-$0$ incidence slot; equivalently, choose a uniformly random start vertex $v_0\in V$ and a uniformly random lazy-walk pattern $\sigma=(\sigma_1,\dots,\sigma_L)\in\mathcal P_L$, giving the visited vertices $v_0,\dots,v_L$. Then for every $j\in J_c$ and every **slot** $s$ of $G$ from $u$ to $u'$ (every one of the $d$ slot options at $u$, loops included, and no hold option),
$$\Pr\Bigl[\varphi(v_0)(\kappa_{v_0,u})=\hat\varphi(u)\ \text{ and }\ \varphi(v_L)(\kappa_{v_L,u'})=\hat\varphi(u')\ \Bigm|\ \text{the }j\text{-th lazy step of }\sigma\text{ is the option }s\Bigr]\ \ge\ \frac{1}{4\lvert\Sigma\rvert^2},$$
where the two $\kappa$ coordinates are the canonical patterns specified by the slot relation of [[def-constraint-graph-powering]]. In words: whenever a powered walk traverses a fixed slot at a middle position of the window $J_c$, the two endpoint views report the decoded plurality labels of that slot's two endpoints with probability bounded below by a positive constant depending only on $\lvert\Sigma\rvert$. The bound is uniform in the slot, in the position, in the graph, in $t$ and in the powered labeling.

## Facts & Assumptions

**Given:** a $d$-regular binary constraint graph $G$ over $\Sigma$, an integer $t\ge4$, the powered graph $G_t$ with parameters $R,L,J,\Sigma_t$, a labeling $\varphi$ of $G_t$ with decoding $\hat\varphi$, a position $j\in J_c$ and a slot $s$ of $G$ from $u$ to $u'$.

[F1] Under the sampling convention of [[def-constraint-graph-powering]], a uniformly random powered edge oriented by its unique copy-$0$ incidence slot is a uniformly random start vertex and length-$L$ pattern; its step options are independent and uniform, and reversal pairs its copy-$0$ incidence with the copy-$1$ incidence of the reversed pattern ([[def-constraint-graph-powering]]).

[F2] For any $1\le\ell\le R$ and uniformly random lazy-walk pattern $\pi$ of length $\ell$ from a vertex $x$, let $X_{x,\ell}$ be the value claimed for $x$ by the view at the endpoint of $\pi$, namely $\varphi(y)(\kappa_{y,x})$ where $y$ is the endpoint and $\kappa_{y,x}$ is the canonical pattern from $y$ to $x$; the opinion distribution of the decoding is $p_x(a)=\Pr[X_{x,t}=a]$, and $\hat\varphi(x)$ maximises $p_x$, so $p_x(\hat\varphi(x))\ge1/\lvert\Sigma\rvert$ ([[def-plurality-decoding-of-powered-local-views]]).

[L1] If $1\le\ell\le R$, $m=\min(\ell,t)$, $\lvert\ell-t\rvert\le\sqrt m$ and $\lvert\ell-t\rvert\le\sqrt t$, then $\operatorname{TV}(X_{x,t},X_{x,\ell})\le C_0\lvert\ell-t\rvert/\sqrt m$; consequently $\operatorname{TV}(X_{x,t},X_{x,\ell})\le1/(4\lvert\Sigma\rvert)$ whenever $\lvert\ell-t\rvert\le c\sqrt t$, uniformly in the start vertex $x$ and in the labeling $\varphi$ ([[lem-lazy-walk-lengths-within-root-t-have-close-endpoint-laws]]).

## Proof

**Proof technique:** direct.

1.1 Condition on the $j$-th lazy step of the sampled representative walk being the option $s$ at $v_{j-1}=u$; this forces $v_j=u'$. The coordinates of $\sigma$ other than the $j$-th are still independent uniform options, the constraint links only the prefix coordinates $1,\dots,j-1$ through the requirement that the prefix ends at $u$, and it does not involve the suffix coordinates $j+1,\dots,L$. Hence, conditionally, the suffix $(\sigma_{j+1},\dots,\sigma_L)$ read from $u'$ is a uniformly random lazy-walk pattern of length $L-j$, the prefix is a uniformly random pattern of length $j-1$ from $v_0$ ending at $u$, the two are independent, and $v_0$ is the start of that prefix. Reversal is a bijection from patterns of length $j-1$ ending at $u$ to patterns of length $j-1$ starting at $u$, and preserves the uniform law on each such set, so the reversed prefix is a uniformly random lazy-walk pattern of length $j-1$ from $u$. For $j\in J_c$ we have $j-1\ge t-c\sqrt t\ge1$, $L-j\ge t+1-c\sqrt t-1\ge1$, and both lengths differ from $t$ by at most $c\sqrt t$. [F1, given, algebra]

2.1 By the powering definition, the relation reads the canonical coordinates $\varphi(v_0)(\kappa_{v_0,u})$ and $\varphi(v_L)(\kappa_{v_L,u'})$. The reversed prefix from $u$ ends at $v_0$, so the first coordinate has the law of $X_{u,j-1}$ by [F2]; the suffix from $u'$ ends at $v_L$, so the second has the law of $X_{u',L-j}$. The prefix and suffix patterns are independent under step 1.1, so the two claimed values are independent. [F1, F2, step 1.1]

2.2 By [F2] the decoding satisfies $p_u(\hat\varphi(u))\ge1/\lvert\Sigma\rvert$, and by [L1], applied with $\ell=j-1$ and $x=u$, the law $X_{u,j-1}$ is within total variation $1/(4\lvert\Sigma\rvert)$ of $X_{u,t}$ because $1\le j-1\le R$ and $\lvert j-1-t\rvert\le c\sqrt t$; hence $\Pr[X_{u,j-1}=\hat\varphi(u)]\ge p_u(\hat\varphi(u))-1/(4\lvert\Sigma\rvert)\ge3/(4\lvert\Sigma\rvert)\ge1/(2\lvert\Sigma\rvert)$. The same computation with $\ell=L-j$ and $x=u'$ gives $\Pr[X_{u',L-j}=\hat\varphi(u')]\ge1/(2\lvert\Sigma\rvert)$, since $1\le L-j\le R$ and $\lvert L-j-t\rvert=\lvert j-1-t\rvert\le c\sqrt t$. [F2, L1, step 1.1, algebra]

3.1 Multiplying the two conditional probabilities of step 2.2 and using the conditional independence of step 2.1 gives the bound $1/(4\lvert\Sigma\rvert^2)$ for the event that both endpoint views report the decoded labels of $u$ and $u'$. This holds for every $j\in J_c$ and every slot $s$ of $G$, with constants depending only on $\lvert\Sigma\rvert$ and not on the graph, on $t$, on the position or on the powered labeling, and it covers loops through $u=u'$. [step 2.1, step 2.2, algebra] ∎

## Remarks

- **Both endpoints are needed and the tested position is central.** The slot relation of [[def-constraint-graph-powering]] tests at position $j$ the canonical coordinate at the view on the *first* vertex $v_0$ for $u$ and the canonical coordinate at the view on the *last* vertex $v_L$ for $u'$; that is why the argument conditions on the walk through the two endpoints of the traversed slot and not on a single random walk. The position $t+1$ always belongs to $J_c$.
- **The sub-window is a genuine restriction.** Item [L1] loses only $1/(4\lvert\Sigma\rvert)$ of probability over lengths $t\pm c\sqrt t$, so the constant survives; over the whole central window of width $\asymp\sqrt t$ the loss is a positive constant and the argument would fail for large alphabets. The promise of [[thm-gap-amplification-step]] is unaffected, because $J_c$ still has $\Theta(\sqrt t)$ positions and every slot violation detected at a position of $J_c\subseteq J$ is a violation of the powered slot.
- **Numerical form of the window.** By definition of $C_0$, $c=1/(8C_0\lvert\Sigma\rvert)=\sqrt{\pi/32}/\lvert\Sigma\rvert<1$, so the window is centred at $t+1$ and is nonempty for every $t\ge4$.
- The claim is stated conditionally on the traversed option rather than unconditionally, because the consumer [[lem-powering-amplifies-small-gaps]] must multiply it by the probability that a stationary lazy walk traverses a given violated slot; that probability is computed there.
