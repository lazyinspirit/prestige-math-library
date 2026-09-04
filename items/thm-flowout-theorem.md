---
id: thm-flowout-theorem
kind: theorem
title: "The flowout theorem"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-flowout-of-an-embedded-submanifold, thm-fundamental-theorem-on-flows, def-local-defining-map-for-an-embedded-submanifold, thm-smooth-partitions-of-unity-exist-on-manifolds, thm-smooth-inverse-function-theorem-on-manifolds]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed."
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
---

## Statement

Let $X$ be a smooth vector field on $M$ with maximal flow $\Phi$, and let
$S\hookrightarrow M$ be an embedded codimension-one submanifold. If $X_p\notin T_pS$
for every $p\in S$, then there is an open neighbourhood
$\mathcal O\subseteq \mathbb R\times S$ of $\{0\}\times S$ such that the map

$$ F:\mathcal O\to M,\qquad F(t,p)=\Phi_t(p), $$

is an embedding. Its image is a flowout of $S$ along $X$.

## Facts & Assumptions

**Given:** A smooth vector field $X$ with maximal flow $\Phi$ and a codimension-one embedded submanifold $S$ everywhere transverse to $X$.

[L1] The maximal flow is smooth on an open domain ([[thm-fundamental-theorem-on-flows]]).

[L2] A codimension-one embedded submanifold has local defining functions ([[def-local-defining-map-for-an-embedded-submanifold]]).

[L3] Every open cover of a smooth manifold admits a smooth partition of unity subordinate to it ([[thm-smooth-partitions-of-unity-exist-on-manifolds]]).

[L4] A map with invertible differential at a point is a local diffeomorphism near that point ([[thm-smooth-inverse-function-theorem-on-manifolds]]).

## Proof

**Proof technique:** direct.

1.1 Fix $p\in S$. Because $X_p\notin T_pS$ and $S$ has codimension one, one has $T_pM=\mathbb R X_p\oplus T_pS$. The map $F(t,q)=\Phi_t(q)$ is smooth near $(0,p)$ by [L1], and its differential at $(0,p)$ sends the time direction to $X_p$ and the $S$-directions identically onto $T_pS$. Hence $dF_{(0,p)}$ is an isomorphism. [L1, given]

2.1 By [L4], for each $p\in S$ there are open neighbourhoods $W_p\subseteq S$ and $U_p\subseteq M$, together with $\varepsilon_p>0$, such that $F$ restricts to a diffeomorphism from $(-\varepsilon_p,\varepsilon_p)\times W_p$ onto $U_p$. By [L2], after shrinking $U_p$ we may choose a local defining function $u_p:U_p\to\mathbb R$ for $S\cap U_p$. Since $X_p\notin T_pS=\ker (du_p)_p$, possibly replacing $u_p$ by $-u_p$ and shrinking $U_p$ again, we may assume there is $c_p>0$ with $X(u_p)\ge c_p$ on $U_p$. [L2, L4, step 1.1, choose]

3.1 If $(t,q)\in (-\varepsilon_p,\varepsilon_p)\times W_p$, then the curve $r\mapsto F(r,q)$ is an integral curve of $X$, so $$\frac d{dr}u_p(F(r,q))=X(u_p)(F(r,q))\ge c_p$$ whenever it is defined. Because $q\in S\cap U_p$, one has $u_p(q)=0$, and the fundamental theorem of calculus gives $$|u_p(F(t,q))|\ge c_p|t|.$$ In particular, for such $(t,q)$ one has $F(t,q)\in S$ if and only if $t=0$. [L1, step 2.1, algebra]

4.1 By [L3], choose a smooth partition of unity $(\rho_p)_{p\in S}$ subordinate to the open cover $(W_p)_{p\in S}$ of $S$, and define $$f(q):=\sum_{p\in S}\varepsilon_p\rho_p(q).$$ This is a smooth positive function on $S$. For each $q\in S$, pick $p_0$ with $\rho_{p_0}(q)>0$ and $\varepsilon_{p_0}$ maximal among such indices. Then $q\in W_{p_0}$ and $$f(q)=\sum_p \varepsilon_p\rho_p(q)\le \varepsilon_{p_0}\sum_p \rho_p(q)=\varepsilon_{p_0}.$$ Set $\delta:=f/2$, and let $$\mathcal O:=\{(t,q)\in \mathbb R\times S:(t,q)\in\mathcal D,\ |t|<\delta(q)\}.$$ Then $\mathcal O$ is an open neighbourhood of $\{0\}\times S$ in $\mathbb R\times S$. Suppose $F(t,q)=F(t',q')$ with $(t,q),(t',q')\in\mathcal O$. Renaming if necessary, assume $f(q')\le f(q)$. By the group law from [L1], one has $F(t-t',q)=q'\in S$. Also $$|t-t'|\le |t|+|t'|<\frac{f(q)}2+\frac{f(q')}{2}\le f(q)\le \varepsilon_{p_0}.$$ Step 3.1 applied inside $(-\varepsilon_{p_0},\varepsilon_{p_0})\times W_{p_0}$ therefore forces $t-t'=0$, and then $q=q'$. Thus $F$ is injective on $\mathcal O$. [L1, L3, step 3.1, construct]

5.1 Because $S$ has codimension one, the source $\mathcal O\subseteq \mathbb R\times S$ and the target $M$ have the same dimension. Step 1.1 and [L4] therefore make $F$ a local diffeomorphism at every point of $\mathcal O$, and step 4.1 makes it injective. Hence $F:\mathcal O\to M$ is a diffeomorphism onto the open submanifold $F[\mathcal O]$. By definition, this image is a flowout of $S$ along $X$. [L4, step 1.1, step 4.1] ∎
