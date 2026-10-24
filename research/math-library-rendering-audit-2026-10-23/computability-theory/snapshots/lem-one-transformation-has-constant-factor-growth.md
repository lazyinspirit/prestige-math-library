---
id: lem-one-transformation-has-constant-factor-growth
kind: lemma
title: "One fixed transformation has constant-factor growth"
status: published
origin: pipeline
deps:
  - def-dinur-pcp-transformation
  - lem-one-transformation-amplifies-gap
  - thm-gap-amplification-step
  - lem-alphabet-reduction-controls-size-and-degree
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Irit Dinur, The PCP Theorem by Gap Amplification, §1.3 Theorem 1.5 (size clause size(G′) ≤ C·size(G)), printed pp. 4–5"
      url: "https://www.cs.umd.edu/users/gasarch/TOPICS/pcp/dinur.pdf"
    - title: "Sanjeev Arora and Boaz Barak, Computational Complexity: A Modern Approach, §18.5.1 gap amplification (Lemma 18.29) and §18.5.2 alphabet reduction (Lemma 18.30), printed pp. 370–379"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
---

## Statement

Let $t$ be the integer fixed in [[lem-one-transformation-amplifies-gap]] and
let $T:=T_t$ be the transformation of [[def-dinur-pcp-transformation]] at this
$t$. Then there are constants $C_E,C_V,C_D\ge1$, depending only on
$\Sigma_\star$ and on this fixed $t$ (and therefore fixed before any input
graph is given), such that for every finite binary constraint graph $G$ over
$\Sigma_\star$ with $m=\lvert E(G)\rvert$ edge records
$$\lvert E(T(G))\rvert\le C_E\,m,\qquad \lvert V(T(G))\rvert\le C_V\,m,$$
every vertex of $T(G)$ has degree at most $C_D$, and $T$ is deterministic and
computable in time polynomial in the bit length of the explicit encoding of
$G$; explicitly one may take
$C_E=6M_{\Sigma_t}C_t$, $C_V=(2\ell_t+q_{\max,t}+M_{\Sigma_t})C_t$ and
$C_D=6M_{\Sigma_t}d_t$, where $M_{\Sigma_t},\ell_t,q_{\max,t}$ are the
constants attached to the input alphabet $\Sigma_t$ by
[[lem-alphabet-reduction-controls-size-and-degree]]. In particular the growth
factor is bounded by constants independent of $m$, and $T$ maps edgeless
inputs to the empty graph.

## Facts & Assumptions

**Given:** Fix the alphabet $\Sigma_\star$ and the integer $t$ of [[lem-one-transformation-amplifies-gap]], with $T:=T_t$.

[F1] For every integer $t\ge t_0$ and every finite binary $\Sigma_\star$-graph $G$ one has $T_t(G)=A_{\Sigma_t}(R_t(G))$, and $T_t$ is a deterministic map from finite $\Sigma_\star$-graphs to finite $\Sigma_\star$-graphs. ([[def-dinur-pcp-transformation]])

[F2] The alphabet $\Sigma_t$ is finite of size $\lvert\Sigma_t\rvert=\lvert\Sigma_\star\rvert^{(2D)^R}\ge2$ with $D=387$ and $R=t+\lceil\sqrt t\rceil$. ([[def-dinur-pcp-transformation]])

[F3] The intermediate graph $R_t(G)$ is a binary constraint graph over $\Sigma_t$ with at most $C_t\lvert E(G)\rvert$ ordinary edges, and it is edgeless whenever $G$ is edgeless. ([[def-dinur-pcp-transformation]])

[F4] The gap-amplification step at $\Sigma_\star$ has output degree bound $d_t:=2(2D)^{2t+1}=D^{O(t)}$ and blowup $C_t:=D\cdot(2D)^{2t+1}=D^{O(t)}$. ([[thm-gap-amplification-step]])

[F5] The map $R_t$ is deterministic and runs in time polynomial in the bit length of the explicit encoding of $G$, and the parameters $\Sigma_t,d_t,C_t$ depend only on $\lvert\Sigma\rvert$ and $t$, never on $\lvert V(G)\rvert$ or $\lvert E(G)\rvert$. ([[thm-gap-amplification-step]])

[F6] For every finite alphabet $\Sigma$ with $\lvert\Sigma\rvert\ge2$ and every finite $\Sigma$-graph $H$ with $m'$ edge records, $\lvert E(A_\Sigma(H))\rvert\le 6M_\Sigma m'$, where $M_\Sigma=\operatorname{lcm}(1,\dots,Q_\Sigma)$ depends only on $\Sigma$. ([[lem-alphabet-reduction-controls-size-and-degree]])

[F7] For the same input $H$, $\lvert V(A_\Sigma(H))\rvert\le(2\ell+q_{\max}+M_\Sigma)m'$, where $\ell=2^{\lceil\log_2W\rceil}<2W$ and $q_{\max}\le Q_\Sigma$ are the length and largest gadget size attached to $\Sigma$. ([[lem-alphabet-reduction-controls-size-and-degree]])

[F8] Every vertex of $A_\Sigma(H)$ has degree at most $6M_\Sigma d$ when the input has maximum degree at most $d$, and $A_\Sigma$ is computable by a deterministic algorithm in time polynomial in the bit length of the explicit encoding of $H$. ([[lem-alphabet-reduction-controls-size-and-degree]])

[F9] The integer $t$ satisfies $t\ge t_0$ and depends only on the absolute constants $\kappa,\beta,c,t_0$, never on an input graph. ([[lem-one-transformation-amplifies-gap]])

## Proof

**Given:** Use the fixed alphabet $\Sigma_\star$, the fixed integer $t$ of [F9] and the map $T=T_t$.

1.1 By [F9] the integer $t\ge t_0$ lies in the transformation domain, so by [F1] and [F2] the map $T$ sends finite $\Sigma_\star$-graphs to finite $\Sigma_\star$-graphs by $G\mapsto A_{\Sigma_t}(R_t(G))$, with $\Sigma_t$ a finite alphabet of size at least two; by [F3] the graph $R_t(G)$ has at most $C_t\lvert E(G)\rvert$ edge records and is edgeless when $G$ is edgeless, and by [F4] its degrees are at most $d_t$. [F1, F2, F3, F4, F9, given]

1.2 Let $M_{\Sigma_t},\ell_t,q_{\max,t}$ be the constants attached to the alphabet $\Sigma_t$ by [F6]–[F8], and set $C_E:=6M_{\Sigma_t}C_t$, $C_V:=(2\ell_t+q_{\max,t}+M_{\Sigma_t})C_t$ and $C_D:=6M_{\Sigma_t}d_t$. These are constants depending only on $\Sigma_\star$ and $t$, because $\Sigma_t,d_t,C_t$ do by [F4] and [F5], while $M_{\Sigma_t},\ell_t,q_{\max,t}$ do by their definition at the input alphabet $\Sigma_t$. [F4, F5, F6, F7, F8, algebra]

2.1 Let $G$ be an arbitrary finite $\Sigma_\star$-graph with $m=\lvert E(G)\rvert$ edge records. Applying [F6] with $\Sigma:=\Sigma_t$ and $H:=R_t(G)$, which is a finite $\Sigma_t$-graph by [F1]–[F3], gives $\lvert E(T(G))\rvert=\lvert E(A_{\Sigma_t}(R_t(G)))\rvert\le6M_{\Sigma_t}\lvert E(R_t(G))\rvert\le6M_{\Sigma_t}C_t\,m=C_E\,m$, the last inequality using [F3]. [F1, F2, F3, F6, step 1.1, step 1.2, algebra]

2.2 Applying [F7] to the same input $H=R_t(G)$ gives $\lvert V(T(G))\rvert\le(2\ell_t+q_{\max,t}+M_{\Sigma_t})\lvert E(R_t(G))\rvert\le(2\ell_t+q_{\max,t}+M_{\Sigma_t})C_t\,m=C_V\,m$, again using the edge bound of [F3]. [F1, F2, F3, F7, step 1.1, step 1.2, algebra]

2.3 Applying [F8] to $H=R_t(G)$ with degree parameter $d=d_t$, which bounds the degrees of $R_t(G)$ by [F4], shows that every vertex of $T(G)=A_{\Sigma_t}(R_t(G))$ has degree at most $6M_{\Sigma_t}d_t=C_D$. [F1, F2, F4, F8, step 1.1, step 1.2, algebra]

2.4 By [F5] the first stage computes $R_t(G)$ deterministically in time polynomial in the bit length of the explicit encoding of $G$, so the explicit encoding of $R_t(G)$ has polynomially bounded length; by [F8] the second stage computes $A_{\Sigma_t}(R_t(G))$ deterministically in time polynomial in the bit length of that encoding. Composing the two deterministic polynomial-time algorithms exhibits a deterministic algorithm computing $T(G)$ in time polynomial in the bit length of the explicit encoding of $G$. [F1, F5, F8, step 1.1]

3.1 The graph $G$ was arbitrary, the constants $C_E,C_V,C_D$ depend only on $\Sigma_\star$ and $t$ by step 1.2, and all three output bounds and the uniformity clause were established in steps 2.1–2.4; hence $T$ has the claimed constant-factor growth. If $G$ is edgeless, then $R_t(G)$ is edgeless by [F3], and [F6] and [F7] applied with $m'=0$ give $\lvert E(T(G))\rvert=0$ and $\lvert V(T(G))\rvert=0$: the output is the empty graph and all bounds hold as $0\le0$. [F1, F3, F6, F7, step 2.1, step 2.2, step 2.3, step 2.4] ∎

## Remarks

The constants are enormous — $C_E$ and $C_V$ are built from the least common multiple $M_{\Sigma_t}$ of the local gadget sizes — but they are fixed before any input is read, which is all the later iteration needs. Degree reduction, powering and alphabet reduction each blow up the graph by a constant factor once $t$ and the alphabet are frozen, and the composition of the three maps stays deterministic polynomial time because each stage's explicit output encoding has polynomial length. No choice principle is used.
