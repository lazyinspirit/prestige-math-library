---
id: thm-relative-whitney-approximation-for-manifold-valued-maps
kind: theorem
title: "Relative Whitney approximation for manifold-valued maps"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-countable-choice, thm-whitney-approximation-for-manifold-valued-maps, thm-relative-whitney-approximation-for-euclidean-valued-maps, lem-distance-to-set-is-lipschitz, prop-identity-maps-and-composites-of-smooth-maps-are-smooth, prop-smooth-maps-are-continuous, def-homotopy-relative-and-path-homotopy]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  verified:
    model: Codex
    verdict: repaired-and-locally-checked
    date: 2026-09-10
    scope: "Owner-authorized relative neighbourhood and ball-homotopy repair under countable choice; no independent judge"
    delegated_by: owner
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed., Theorems 6.21 and 6.26, pp.136-137 and 141"
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
---

## Statement

Assume countable choice $\mathrm{AC}_\omega$. Let $F:M\to N$ be continuous, let $A\subseteq M$ be closed, and suppose $F$ is smooth on an open neighbourhood of $A$. Then there exist a smooth map $\widetilde F:M\to N$ and an open neighbourhood $W$ of $A$ such that $\widetilde F=F$ on $W$ and $F$ is homotopic to $\widetilde F$ by a homotopy fixed on $W$, hence relative to $A$. No compactness of $A$ or its neighbourhood is assumed.

## Facts & Assumptions

**Given:** Countable choice, a continuous $F:M\to N$, a closed $A\subseteq M$, and an open $V\supseteq A$ on which $F$ is smooth.

[A1] Countable choice is [[def-countable-choice]]. Both existence constructions cited below explicitly assume it.

[L1] The proof of [[thm-whitney-approximation-for-manifold-valued-maps]], steps 1.1 through 6.1, supplies under [A1] an embedding $j:N\to\mathbb R^k$, a smooth inverse $j^{-1}:S\to N$ for $S=j(N)$, an open $U\supseteq S$, and a smooth retraction $R:U\to S$. Specifically it uses the repaired arbitrary finite-dimensional embedding, defines bounded eligible normal-addition radii before taking their supremum, proves the continuous radius and its endpoint injectivity, and glues the local inverses on $\{\|v\|<r(p)/2\}$. These auxiliary data are fully proved there, independent of the final approximation step, without a smooth-radius minorant or a general ambient tube theorem.

[L2] Under [A1], for every positive continuous $\varepsilon:M\to(0,\infty)$, a continuous Euclidean-valued map smooth near a closed $A$ has a smooth approximation equal to it on some open neighbourhood of $A$ and with pointwise error strictly less than $\varepsilon$ ([[thm-relative-whitney-approximation-for-euclidean-valued-maps]]). This statement permits arbitrary noncompact closed $A$.

[L3] Distance to a fixed nonempty set is finite and $1$-Lipschitz ([[lem-distance-to-set-is-lipschitz]]).

[L4] Composites of smooth maps are smooth, and smooth maps are continuous ([[prop-identity-maps-and-composites-of-smooth-maps-are-smooth]], [[prop-smooth-maps-are-continuous]]).

[F1] A homotopy relative to $A$ is a jointly continuous map on $M\times[0,1]$ with the prescribed endpoints and constant in the second variable on $A$ ([[def-homotopy-relative-and-path-homotopy]]).

## Proof

**Proof technique:** direct.

1.1 If $M=\varnothing$, take the empty maps and $W=\varnothing$. Otherwise $N$ is nonempty because $F$ exists. Use [L1] to obtain $j,S,U,R$, and put $f=j\circ F$. The map $f$ is continuous on $M$ and smooth on $V$ by [L4]. All the embedding and retraction data are fixed before applying any approximation result. [A1, L1, L4, given, choose]

2.1 If $C=\mathbb R^k\setminus U$ is empty, put $\varepsilon\equiv1$. Otherwise put $$\varepsilon(x)=\min\{1,\tfrac12 d(f(x),C)\}.$$ This is finite and continuous by [L3] and continuity of the minimum operation. It is positive: at each $f(x)\in U$, openness supplies a ball of some positive radius contained in $U$, so every point of $C$ is at least that far away. This is a pointwise argument, not a simultaneous selection of radii. Moreover $$B(f(x),\varepsilon(x))\subseteq U$$ for every $x$: when $C$ is nonempty, a point of $C$ in that ball would have distance to $f(x)$ less than $\varepsilon(x)\le d(f(x),C)/2$, contradicting the infimum lower bound. When $C$ is empty the inclusion is automatic. [L3, step 1.1, construct, algebra]

3.1 Apply [L2] to $f$, $A$ and $\varepsilon$. Obtain a smooth $H:M\to\mathbb R^k$ with $\|H(x)-f(x)\|<\varepsilon(x)$ everywhere and $H=f$ on an open neighbourhood $W_0$ of $A$. Set $W=W_0\cap V$, still an open neighbourhood of $A$. Step 2.1 gives $H(M)\subseteq U$. Since $U$ is open, $H:M\to U$ is smooth in the same coordinate charts. Thus $$\widetilde F=j^{-1}\circ R\circ H$$ is smooth by [L4]. For $x\in W$, $H(x)=j(F(x))$ and $R$ fixes $S$, giving $\widetilde F(x)=F(x)$. No relatively compact neighbourhood of $A$ has been selected. [A1, L1, L2, L4, step 1.1, step 2.1, choose]

4.1 Define $z(x,t)=(1-t)f(x)+tH(x)$ for $(x,t)\in M\times[0,1]$. At every such pair, $$\|z(x,t)-f(x)\|=t\|H(x)-f(x)\|<\varepsilon(x),$$ including $t=0$ because $\varepsilon(x)>0$. Therefore the whole segment lies in the single ball from step 2.1 and hence in $U$. Each coordinate of $z$ is a sum of products of continuous functions pulled back from the two factors, so $z$ is jointly continuous. The formula $$\mathcal H(x,t)=j^{-1}\bigl(R(z(x,t))\bigr)$$ is consequently jointly continuous, using [L4] and the subspace topology on $U$. Its endpoints are $F$ and $\widetilde F$, since $R$ fixes $S$. [L1, L4, step 1.1, step 2.1, step 3.1, construct, algebra]

5.1 On $W$ the equality $H=f$ makes $z(x,t)=f(x)$ for every $t$, and hence $\mathcal H(x,t)=F(x)$ throughout $W\times[0,1]$. Thus [F1] gives a homotopy fixed on the open neighbourhood $W$, in particular relative to $A$. The proof also covers $A=\varnothing$ by permitting its open neighbourhood to be empty, and the empty-source case was settled in step 1.1. This proves every claimed conclusion. [F1, step 1.1, step 3.1, step 4.1, algebra] ∎
