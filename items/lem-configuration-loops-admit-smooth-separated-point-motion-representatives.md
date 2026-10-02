---
id: lem-configuration-loops-admit-smooth-separated-point-motion-representatives
kind: lemma
title: "Smooth representatives of configuration loops"
status: draft
origin: pipeline
landmark: true
deps: [def-unordered-configuration-space,
       def-ordered-configuration-space,
       thm-ordered-configurations-cover-unordered-configurations-regularly,
       thm-path-lifting-for-covering-maps,
       cor-weierstrass-approximation-on-the-unit-interval,
       def-the-standard-smooth-step-function,
       def-boundary-fixed-mapping-class-group-of-a-punctured-disk]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Juan Gonzalez-Meneses, Basic results on braid groups, sections 1.1-1.3, printed pp. 3-5"
      url: "https://arxiv.org/pdf/1010.0321"
verification:
  precheck: pass
---

## Statement

Let $Q_n=(q_1,\dots,q_n)$ be the fixed base configuration of
[[def-boundary-fixed-mapping-class-group-of-a-punctured-disk]]. Every based loop
$\alpha:I\to C_n(\operatorname{int}D^2)$ at the basepoint $[Q_n]$ is path
homotopic relative to $\{0,1\}$ to a based loop $\beta$ whose unique ordered lift
$z:I\to F_n(\operatorname{int}D^2)$ from $Q_n$ consists of coordinate paths
$z_1,\dots,z_n$ that are smooth, pairwise collision-free
($z_i(t)\ne z_j(t)$ for $i\ne j$), take values in $\operatorname{int}D^2$, and
are constant on $[0,\varepsilon)$ and on $(1-\varepsilon,1]$ for some
$\varepsilon>0$. The construction uses no choice principle.

## Facts & Assumptions

**Given:** The based loop $\alpha:I\to C_n(\operatorname{int}D^2)$ with $\alpha(0)=\alpha(1)=[Q_n]$.

[L1] For every $f\in C([0,1],\mathbb R)$ and $\varepsilon>0$ there is a polynomial $p$ with $\sup_{x\in[0,1]}|p(x)-f(x)|<\varepsilon$ ([[cor-weierstrass-approximation-on-the-unit-interval]]).

[L2] The standard smooth step function $\sigma(t)=\beta(t)/(\beta(t)+\beta(1-t))$ is smooth, equals $0$ for $t\le0$ and equals $1$ for $t\ge1$ ([[def-the-standard-smooth-step-function]]).

[L3] The quotient $p:F_n(\operatorname{int}D^2)\to C_n(\operatorname{int}D^2)$ is a covering map with $n!$-element fibres, and both spaces are path-connected ([[thm-ordered-configurations-cover-unordered-configurations-regularly]]).

[L4] A covering map has a unique path lift through any prescribed starting point: if $\widetilde\alpha(0)=e_0$ and $p\circ\widetilde\alpha=\alpha$, then $\widetilde\alpha$ is unique ([[thm-path-lifting-for-covering-maps]]).

[L5] $F_n(X)$ consists of the tuples with pairwise distinct coordinates and $C_n(X)=F_n(X)/S_n$ with quotient map $p(x)=[x]$ ([[def-ordered-configuration-space]], [[def-unordered-configuration-space]]).

## Proof
**Proof technique:** direct.

If $n=0$, the unique based loop represents itself and has the unique empty ordered lift; the claim is immediate. Assume $n\ge1$ below.

1.1 *The ordered lift and its margin.* Let $p:F_n(\operatorname{int}D^2)\to C_n(\operatorname{int}D^2)$ be the quotient covering map of [L3]. By [L4] there is a unique path $u:I\to F_n(\operatorname{int}D^2)$ with $u(0)=Q_n$ and $p\circ u=\alpha$; its coordinates $u_1,\dots,u_n$ are continuous and satisfy $u_i(t)\ne u_j(t)$ for $i\ne j$ and $u_i(t)\in\operatorname{int}D^2$. Compactness and finiteness give a positive boundary margin $d:=\min_{i,t}(1-\lVert u_i(t)\rVert_2)>0$; if $n\ge2$, also put $c:=\min_{i<j,t}\lVert u_i(t)-u_j(t)\rVert_2>0$, and if $n=1$ put $c:=1$. Then $m:=\min(c,d)>0$ bounds every pairwise separation and every boundary margin from below (with the pairwise condition vacuous for $n=1$). [L3, L4, L5]

1.2 *Smooth approximation with fixed endpoints and flat time ends.* Write $u_i=(u_{i,1},u_{i,2})$. For each of the finitely many functions $u_{i,k}$ apply [L1] with $\varepsilon_1>0$ to obtain a polynomial $P_{i,k}$ with $\sup_t|P_{i,k}(t)-u_{i,k}(t)|<\varepsilon_1$, and put $R_{i,k}(t):=P_{i,k}(t)+(1-t)(u_{i,k}(0)-P_{i,k}(0))+t(u_{i,k}(1)-P_{i,k}(1))$, so that $R_{i,k}(0)=u_{i,k}(0)$, $R_{i,k}(1)=u_{i,k}(1)$ and $\sup_t|R_{i,k}(t)-u_{i,k}(t)|<2\varepsilon_1$. Now choose a small $\varepsilon\in(0,\tfrac14)$ and use [L2] to define the smooth time change $\lambda(t):=\sigma\bigl((t-\varepsilon)/\varepsilon\bigr)\sigma\bigl((1-\varepsilon-t)/\varepsilon\bigr)t+\bigl(1-\sigma\bigl((1-\varepsilon-t)/\varepsilon\bigr)\bigr)$; it is smooth, equals $0$ on $[0,\varepsilon]$, equals $1$ on $[1-\varepsilon,1]$, satisfies $0\le\lambda(t)\le1$ and $|\lambda(t)-t|\le4\varepsilon$ on $I$, and equals $t$ on $[2\varepsilon,1-2\varepsilon]$. Set $r_i(t):=(R_{i,1}(t),R_{i,2}(t))$ and $z_i:=r_i\circ\lambda$. Then each $z_i$ is smooth, is constant on $[0,\varepsilon]$ and on $[1-\varepsilon,1]$, and because the finitely many $u_i$ are uniformly continuous there is a modulus of continuity $\omega$ for all of them on $I$ with $\lVert u_i(\lambda(t))-u_i(t)\rVert_2\le\omega(4\varepsilon)$. Choosing $\varepsilon_1$ and $\varepsilon$ so small that $3\varepsilon_1+\omega(4\varepsilon)<m/4$, we obtain $$\lVert z_i(t)-u_i(t)\rVert_2\le\lVert R_i(\lambda(t))-u_i(\lambda(t))\rVert_2+\lVert u_i(\lambda(t))-u_i(t)\rVert_2<m/4$$ for every $i$ and $t$. [L1, L2]

2.1 *The approximating tuple is collision-free, interior, and based.* For $i\ne j$ and all $t\in[0,1]$ the estimates of step 1.2 give $\lVert z_i(t)-z_j(t)\rVert_2\ge m-2(m/4)=m/2>0$ and $1-\lVert z_i(t)\rVert_2\ge m-m/4>0$, so all $z_i(t)$ lie in $\operatorname{int}D^2$ and are pairwise distinct. Moreover $z_i(0)=r_i(\lambda(0))=r_i(0)=u_i(0)=q_i$ and $z_i(1)=r_i(1)=u_i(1)$, so $[z(1)]=[u(1)]=\alpha(1)=[Q_n]$: the terminal tuple $z(1)$ is a permutation of $Q_n$, and $z:I\to F_n(\operatorname{int}D^2)$ is an ordered path from $Q_n$ to that permutation, while $p\circ z$ is a based loop at $[Q_n]$. [L5, step 1.1, step 1.2]

3.1 *A relative homotopy to the smooth representative.* For $s,t\in[0,1]$ put $\gamma(s,t):=(1-s)u(t)+s\,z(t)$, computed coordinatewise in $\mathbb R^{2n}$. The map $\gamma$ is continuous, and by the estimates of steps 1.2 and 2.1 every $\gamma(s,t)$ again has pairwise distinct coordinates at distance at least $m/2$ and lies in $\operatorname{int}D^2$: the interpolation moves each point by at most $m/4$ from $u_i(t)$. Hence $\gamma$ lands in $F_n(\operatorname{int}D^2)$, and its composition with the quotient map $p$ of [L3] is a continuous map $H:I\times I\to C_n(\operatorname{int}D^2)$, $H(s,t):=[\gamma(s,t)]$, with $H(0,t)=\alpha(t)$ and $H(1,t)=[z(t)]$; the identities $\gamma(s,0)=u(0)=Q_n$ and $\gamma(s,1)=u(1)$, together with $[u(1)]=\alpha(1)=[Q_n]$, show that $H(s,0)=H(s,1)=[Q_n]$ for every $s$, so that $H$ is a path homotopy relative to $\{0,1\}$. [L3, L5, step 1.1, step 1.2, step 2.1]

4.1 *The lift of the representative is $z$ itself.* The path $[z]:=p\circ z$ is a based loop at $[Q_n]$ by step 2.1, and $z$ is a lift of it with $z(0)=Q_n$; by the uniqueness clause [L4] the unique ordered lift of $[z]$ from $Q_n$ is exactly $z$. Together with steps 1.2, 2.1 and 3.1 this exhibits the required smooth collision-free lift with flat time ends and the path homotopy $\alpha\simeq[z]$ rel $\{0,1\}$; all constructions used only the given loop, fixed polynomials and the fixed step function, so no choice principle is spent. [L3, L4, step 1.2, step 2.1, step 3.1] ∎

## Remarks

- The time change $\lambda$ is built from the published smooth step so that the approximating path is stationary near both ends of the interval; this is what later allows the motion to be extended across the endpoints by constancy.
- The estimate is uniform in $t$ and uses only finitely many continuous functions on the compact interval, so no selection from infinitely many approximations is made.
