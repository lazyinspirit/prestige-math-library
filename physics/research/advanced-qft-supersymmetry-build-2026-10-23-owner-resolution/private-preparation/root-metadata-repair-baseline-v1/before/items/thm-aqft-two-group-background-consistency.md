---
id: thm-aqft-two-group-background-consistency
kind: theorem
title: Finite 2-group background gauge consistency
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 1
deps:
  - def-aqft-two-group-background
dependency_roles:
  def-aqft-two-group-background: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Francesco Benini, Clay Córdova, and Po-Shen Hsin, On 2-Group Global Symmetries and Their Anomalies, §2.3"
      url: https://arxiv.org/pdf/1803.09336
      locator: "PDF pp. 18–19, equations (2.14)–(2.20)"
    - title: "John C. Baez and Aaron D. Lauda, Higher-Dimensional Algebra V: 2-Groups, §8.3"
      url: https://arxiv.org/pdf/math/0307200
      locator: "PDF pp. 54–59, associator-pentagon and functor-coherence calculations"
---

## Statement

Let $K$ be a finite ordered simplicial complex; let $G$ be a finite group, $A$ a finite abelian group written additively, $\rho:G\to\operatorname{Aut}(A)$ a left action, and $\beta:G^3\to A$ a normalized group $3$-cocycle with the convention that its associator is directed from $(gh)k$ to $g(hk)$. Let $a_{ij}\in G$ be flat on every ordered triangle, let $B_{ijk}\in A$ be an $A$-valued $2$-cochain at the first vertex, and assume on every ordered tetrahedron that

$$
\rho_{a_{ij}}B_{jkl}-B_{ikl}+B_{ijl}-B_{ijk}=\beta(a_{ij},a_{jk},a_{kl}).
$$

For arbitrary vertex labels $g_i\in G$ and edge labels $\lambda_{ij}\in A$, put $a'_{ij}=g_i a_{ij}g_j^{-1}$ and

$$
\zeta_{ijk}=-\beta(g_i,a_{ij},a_{jk})+\beta(a'_{ij},g_j,a_{jk})-\beta(a'_{ij},a'_{jk},g_k).
$$

$$
B'_{ijk}=\rho_{g_i}B_{ijk}+\zeta_{ijk}+\rho_{a'_{ij}}\lambda_{jk}-\lambda_{ik}+\lambda_{ij}.
$$

Then $a'$ is flat and $(a',B')$ satisfies the same twisted tetrahedron equation. If $(g,\lambda)$ is followed by $(h,\mu)$, with $a''_{ij}=h_i a'_{ij}h_j^{-1}$, their composite is $(hg,\nu)$ where

$$
\nu_{ij}=\beta(h_i,g_i,a_{ij})+\rho_{h_i}\lambda_{ij}-\beta(h_i,a'_{ij},g_j)+\mu_{ij}+\beta(a''_{ij},h_j,g_j).
$$

Each transformation is invertible: for a fixed source background, put $h_i=g_i^{-1}$ and

$$
\mu_{ij}=-\beta(h_i,g_i,a_{ij})-\rho_{h_i}\lambda_{ij}+\beta(h_i,a'_{ij},g_j)-\beta(a_{ij},h_j,g_j);
$$

then its composite has $\nu_{ij}=0$. Treating a gauge arrow as its induced map on background cochains, sequential maps compose associatively, and the displayed formula gives a representative for each composite. This is a mathematical consistency result and does not assert a physical anomaly theorem.

## Statement references

[Benini, Córdova, and Hsin, §2.3, PDF pp. 18–19](https://arxiv.org/pdf/1803.09336)

[Baez and Lauda, §8.3, PDF pp. 54–59](https://arxiv.org/pdf/math/0307200)

## Facts & Assumptions

**Given:** finite data $G,A,\rho,\beta,K$, a flat edge cochain $a$, a $2$-cochain $B$ satisfying the displayed tetrahedron equation, and vertex/edge gauge parameters $g_i,\lambda_{ij}$ as in the Statement.

[F1] [[def-aqft-two-group-background]]: a flat edge cochain satisfies $a_{ij}a_{jk}=a_{ik}$, local coefficient transport from $j$ to $i$ is $\rho(a_{ij})$, and the twisted differential on a $2$-cochain is $\rho(a_{ij})B_{jkl}-B_{ikl}+B_{ijl}-B_{ijk}$.

[F2] [[def-aqft-two-group-background]]: the skeletal $2$-group tensor product is $(g,u)\otimes(h,v)=(gh,u+\rho_gv)$, its associator has label $\beta(g,h,k)$, and the normalized $3$-cocycle identity is the associator pentagon equation.

## Proof

1.1 Flatness of $a$ gives $a'_{ij}a'_{jk}=g_i a_{ij}g_j^{-1}g_j a_{jk}g_k^{-1}=g_i a_{ik}g_k^{-1}=a'_{ik}$, so $a'$ is flat and $\rho(a'_{ij})$ defines its local coefficient transport. [given, F1, algebra]

1.2 For consecutive transformations $(g,\lambda)$ and $(h,\mu)$, start with the edge product $(h_i g_i)a_{ij}$. The successive associator/edge-morphism labels along $(h_i g_i)a_{ij}\to h_i(g_i a_{ij})\to h_i(a'_{ij}g_j)\to(h_i a'_{ij})g_j\to(a''_{ij}h_j)g_j\to a''_{ij}(h_jg_j)$ are $\beta(h_i,g_i,a_{ij})$, $\rho_{h_i}\lambda_{ij}$, $-\beta(h_i,a'_{ij},g_j)$, $\mu_{ij}$, and $\beta(a''_{ij},h_j,g_j)$, respectively; adding them gives exactly $\nu_{ij}$ in the Statement. [F2, given, construct, algebra]

2.1 For an edge cochain $\lambda$, expanding $\delta_{a'}^2\lambda$ on $[ijkl]$ gives terms $\rho(a'_{ij})\rho(a'_{jk})\lambda_{kl}-\rho(a'_{ij})\lambda_{jl}+\rho(a'_{ij})\lambda_{jk}-\rho(a'_{ik})\lambda_{kl}+\lambda_{il}-\lambda_{ik}+\rho(a'_{ij})\lambda_{jl}-\lambda_{il}+\lambda_{ij}-\rho(a'_{ij})\lambda_{jk}+\lambda_{ik}-\lambda_{ij}$; the first and fourth cancel because $a'$ is flat and $\rho$ is an action, and every other term cancels with its displayed opposite. Hence the $1$-form shift contributes zero to the transformed tetrahedron equation. [F1, step 1.1, algebra]

2.2 Write $u=a'_{01}$, $v=a'_{12}$, $w=a'_{23}$, $x=a_{01}$, $y=a_{12}$, and $z=a_{23}$. Expanding $\delta_{a'}\zeta$ using the three displayed terms in each $\zeta_{ijk}$ and applying the five-term cocycle identity to the four ordered quadruples $(g_0,x,y,z)$, $(u,g_1,y,z)$, $(u,v,g_2,z)$, and $(u,v,w,g_3)$ yields $(\delta_{a'}\zeta)_{0123}+\rho_{g_0}\beta(x,y,z)-\beta(u,v,w)=D(g_0,x,y,z)-D(u,g_1,y,z)+D(u,v,g_2,z)-D(u,v,w,g_3)=0$, where $D(s,t,r,q):=\rho_s\beta(t,r,q)-\beta(st,r,q)+\beta(s,tr,q)-\beta(s,t,rq)+\beta(s,t,r)$. The cancellation uses flatness and $a'_{ij}g_j=g_i a_{ij}$ to identify the adjacent products. Hence $\delta_{a'}\zeta=\beta(a'_{01},a'_{12},a'_{23})-\rho_{g_0}\beta(a_{01},a_{12},a_{23})$ on each tetrahedron. [F2, step 1.1, algebra]

2.3 Let $\tau_{ij}=\beta(h_i,g_i,a_{ij})-\beta(h_i,a'_{ij},g_j)+\beta(a''_{ij},h_j,g_j)$ be the $\beta$ part of $\nu$. The sequential and direct face formulas agree exactly when $\rho_{h_i}\zeta^g_{ijk}+\zeta^h_{ijk}(a')-\zeta^{hg}_{ijk}(a)=(\delta_{a''}\tau)_{ijk}$, where $(\delta_{a''}\tau)_{ijk}=\rho_{a''_{ij}}\tau_{jk}-\tau_{ik}+\tau_{ij}$. For a fixed ordered triangle $i<j<k$, write $x=a_{ij}$, $y=a_{jk}$, $b_{rs}=a'_{rs}$, and $c_{rs}=a''_{rs}$. For the cocycle expression $D$, direct expansion gives the exact formal identity $\rho_{h_i}\zeta^g_{ijk}+\zeta^h_{ijk}(a')-\zeta^{hg}_{ijk}(a)-(\delta_c\tau)_{ijk}=-D(h_i,g_i,x,y)+D(h_i,b_{ij},g_j,y)-D(h_i,b_{ij},b_{jk},g_k)-D(c_{ij},h_j,g_j,y)+D(c_{ij},h_j,b_{jk},g_k)-D(c_{ij},c_{jk},h_k,g_k)$. To verify it, substitute $D(s,t,r,q)=\rho_s\beta(t,r,q)-\beta(st,r,q)+\beta(s,tr,q)-\beta(s,t,rq)+\beta(s,t,r)$ in these six terms, use $b_{ij}g_j=g_i a_{ij}$ and $c_{ij}h_j=h_i b_{ij}$ to identify mixed products, and use $a_{ik}=a_{ij}a_{jk}$, $b_{ik}=b_{ij}b_{jk}$, $c_{ik}=c_{ij}c_{jk}$ to identify long edges. The remaining terms are precisely the three $\zeta$ expressions and the three terms of $-\delta_c\tau$ on the left; every other beta term cancels with its opposite. All six $D$ terms vanish by [F2]. In full, $B_{\rm seq}=\rho_{hg}B+\rho_h\zeta^g+\zeta^h+\delta_{a''}(\rho_h\lambda+\mu)$ and $B_{\rm direct}=\rho_{hg}B+\zeta^{hg}+\delta_{a''}(\rho_h\lambda+\mu+\tau)$, so the displayed identity proves equality on every triangle. [F2, step 1.2, algebra]

3.1 The coefficient transport identity $\rho(a'_{ij})\rho(g_j)=\rho(g_i)\rho(a_{ij})$ gives $(\delta_{a'}(\rho_g B))_{ijkl}=\rho_{g_i}(\delta_aB)_{ijkl}$. Combining this with $B'=\rho_gB+\zeta+\delta_{a'}\lambda$, steps 2.1–2.2, and $\delta_aB=a^*\beta$ gives $\delta_{a'}B'=\rho_{g_i}\beta(a_{ij},a_{jk},a_{kl})+\beta(a'_{ij},a'_{jk},a'_{kl})-\rho_{g_i}\beta(a_{ij},a_{jk},a_{kl})=a'^*\beta$. [given, F1, F2, step 2.1, step 2.2, algebra]

4.1 For a fixed source background, set $h_i=g_i^{-1}$ and choose $\mu_{ij}$ by the displayed reverse formula. Substitution into the composite law cancels its five terms and gives $h_i g_i=e$, $\nu_{ij}=0$, and $a''=a$. The identity transformation fixes $B$ because $\beta$ is normalized and $\rho_e=\operatorname{id}_A$. Thus each gauge arrow has a reverse; composition of the induced maps is associative as ordinary function composition. [F1, F2, step 1.2, algebra] ∎
