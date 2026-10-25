---
id: "def-aqft-finite-background-two-groupoid"
kind: "definition"
title: "Finite background gauge 2-groupoid"
status: "draft"
origin: "pipeline"
domain: "mathematics"
library: "mathematics"
dependency_level: 2
deps: ["def-aqft-two-group-background", "thm-aqft-two-group-background-consistency"]
dependency_roles: {"def-aqft-two-group-background": "mathematical-premise", "thm-aqft-two-group-background-consistency": "mathematical-premise"}
proof_strategy: "definition"
provenance: {"statement": "ai-altered", "proof": "not-applicable"}
sources: {"references": [{"title": "Baez and Lauda, Higher-Dimensional Algebra V: 2-Groups", "url": "https://arxiv.org/pdf/math/0307200", "locator": "§8.3 pp.55–63; associator cocycle p.59 and monoidal coherence pp.60–61; explicit finite cochain 2-groupoid constructed locally."}, {"title": "Benini, Cordova and Hsin, On 2-Group Global Symmetries and Their Anomalies", "url": "https://arxiv.org/pdf/1803.09336", "locator": "§2.3, printed pp.18–20 / PDF19–21; background and gauge equations only, explicit coherence reconstructed locally."}]}
---

## Definition

Fix a finite ordered simplicial complex $K$, a finite group $G$, a finite abelian group $A$ in additive notation, a left action $\rho:G\to\operatorname{Aut}(A)$, and a normalized inhomogeneous $3$-cocycle $\beta:G^3\to A$. A background $x=(a,B)$ has flat edge labels $a_{ij}a_{jk}=a_{ik}$ and satisfies $\delta_aB=a^*\beta$, with coefficients at the first vertex. Here $(\delta_a t)_{ij}=\rho_{a_{ij}}t_j-t_i$ for a vertex cochain, $(\delta_a\lambda)_{ijk}=\rho_{a_{ij}}\lambda_{jk}-\lambda_{ik}+\lambda_{ij}$ for an edge cochain, and $(\delta_aB)_{ijkl}=\rho_{a_{ij}}B_{jkl}-B_{ikl}+B_{ijl}-B_{ijk}$. The cocycle convention is

$$
D(s,t,r,q):=\rho_s\beta(t,r,q)-\beta(st,r,q)+\beta(s,tr,q)-\beta(s,t,rq)+\beta(s,t,r)=0.
$$

The **background gauge 2-groupoid** $\mathcal B(K)$ has these backgrounds as objects. A $1$-arrow $f:x\to y$ is a raw pair $(g,\lambda)$ of vertex $G$-labels and edge $A$-labels with target $y=(b,C)$ given by

$$
b_{ij}=g_i a_{ij}g_j^{-1},\qquad \zeta^g_{ijk}(a)=-\beta(g_i,a_{ij},a_{jk})+\beta(b_{ij},g_j,a_{jk})-\beta(b_{ij},b_{jk},g_k),\qquad C=\rho_gB+\zeta^g(a)+\delta_b\lambda.
$$

Raw pairs remain distinct even when their induced functions on backgrounds coincide. For fixed $g$ and target edge labels $b$, a $2$-arrow $t:(g,\lambda)\Rightarrow(g,\lambda')$ is a vertex $A$-cochain satisfying $\lambda'-\lambda=\delta_b t$. There are no $2$-arrows between different vertex labels $g$. Vertical composition adds vertex cochains; the identity $2$-arrow is zero.

For consecutive $1$-arrows $(g,\lambda):x\to y$ and $(h,\mu):y\to z$, write $a,b,c$ for the successive edge labels. Their composite is $(hg,\nu)$, where

$$
\nu_{ij}=\rho_{h_i}\lambda_{ij}+\mu_{ij}+\tau(h,g;a)_{ij},\qquad \tau(h,g;a)_{ij}=\beta(h_i,g_i,a_{ij})-\beta(h_i,b_{ij},g_j)+\beta(c_{ij},h_j,g_j).
$$

Horizontal composition of $t$ on the first arrow and $s$ on the second is $s+\rho_h t$. Identity $1$-arrows have all vertex labels $e$ and edge labels zero. For three consecutive arrows $g,h,k$, the associator from $((k\circ h)\circ g)$ to $k\circ(h\circ g)$ is the vertex cochain $\sigma_i=\beta(k_i,h_i,g_i)$. Unit constraints are identity $2$-arrows.

A $2$-groupoid here means these data form a bicategory: each pair of objects has a category of $1$-arrows and $2$-arrows; horizontal composition preserves identities and vertical composition; associators are natural and obey the pentagon; units obey the triangle identity; all $2$-arrows are invertible and every $1$-arrow has a reverse up to invertible $2$-arrows. Finiteness means all three sets of labels are finite. Coherence of the displayed data is a separate theorem.

Write $\pi_0\mathcal B(K)$ for the equivalence classes of objects under $1$-arrows. For an object $x$, let $\pi_1(\mathcal B(K),x)$ be the group of $2$-isomorphism classes of $1$-automorphisms of $x$, and let $\pi_2(\mathcal B(K),x)$ be the abelian group of $2$-automorphisms of its identity $1$-arrow. In particular, $\pi_2$ retains vertex cochains with $\delta_a t=0$ rather than discarding them. For a subcomplex $L\subseteq K$ and fixed background $s$ on $L$, the **relative background 2-groupoid** has objects restricting exactly to $s$, $1$-arrows with $g=e$ on vertices of $L$ and $\lambda=0$ on edges of $L$, and $2$-arrows with $t=0$ on vertices of $L$.

## Definition references

[[def-aqft-two-group-background]]

[[thm-aqft-two-group-background-consistency]]

[Baez and Lauda, §8.3](https://arxiv.org/pdf/math/0307200)

[Benini, Cordova and Hsin, §2.3](https://arxiv.org/pdf/1803.09336)
