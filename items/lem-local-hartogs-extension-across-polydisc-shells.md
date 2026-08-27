---
id: lem-local-hartogs-extension-across-polydisc-shells
kind: lemma
title: "Hartogs figures give local extension across polydisc shells"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-hartogs-figure-and-polydisc-hull,
       thm-contour-parameter-integrals-are-holomorphic,
       thm-cauchy-integral-formula-circle,
       thm-identity-theorem-in-several-complex-variables,
       thm-locally-bounded-separate-holomorphy,
       def-balls-and-polydiscs-in-complex-euclidean-space]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Lebl, Tasty Bits of Several Complex Variables, §2.1"
      url: "https://www.jirka.org/scv/scv.pdf"
pipeline_run: null
---

## Statement

Fix $m\ge2$, a point $a=(a_1,\dots,a_m)\in\mathbb C^m$, a polyradius
$\rho=(\rho_1,\dots,\rho_m)$, and real numbers $0<r,s<1$. Let
$S(a,\rho;r,s)$ be the subset of the polydisc $\Delta_\rho(a)$ defined by

$$S(a,\rho;r,s):=\Bigl\{z: |z_1-a_1|<\rho_1,\ |z_m-a_m|<s\rho_m,\ |z_j-a_j|<\rho_j \text{ for } 2\le j\le m-1\Bigr\}\cup\Bigl\{z: r\rho_1<|z_1-a_1|<\rho_1,\ |z_m-a_m|<\rho_m,\ |z_j-a_j|<\rho_j \text{ for } 2\le j\le m-1\Bigr\}.$$

Every holomorphic function on $S(a,\rho;r,s)$ extends uniquely to a holomorphic
function on the whole polydisc $\Delta_\rho(a)$.

## Facts & Assumptions

**Given:** A holomorphic function on the coordinate shell $S(a,\rho;r,s)$.

[L1] A contour integral of a jointly continuous integrand that is holomorphic in one chosen complex parameter defines a holomorphic function of that parameter ([[thm-contour-parameter-integrals-are-holomorphic]]).

[L2] Cauchy's integral formula on a circle recovers a holomorphic one-variable function from any smaller concentric circle ([[thm-cauchy-integral-formula-circle]]).

[L3] Holomorphic functions on a connected open set agree everywhere once they agree on one nonempty open subset ([[thm-identity-theorem-in-several-complex-variables]]).

[L4] A separately holomorphic function that is locally bounded is jointly holomorphic ([[thm-locally-bounded-separate-holomorphy]]).

[L5] Polydiscs are products of coordinate discs ([[def-balls-and-polydiscs-in-complex-euclidean-space]]), and the two-variable Hartogs figure is the model set of [[def-hartogs-figure-and-polydisc-hull]].

## Proof

**Proof technique:** direct.

1.1 By translating by $a$ and scaling each coordinate by $\rho_j^{-1}$, we may reduce to the case $a=0$ and $\rho_j=1$ for all $j$. Then the shell is exactly $H(r,s)\times\Delta_1^{m-2}$, with $H(r,s)$ in the $(z_1,z_m)$ variables and the middle variables passive. [L5, construct]

2.1 Fix $\rho$ with $r<\rho<1$. On the domain $$D_\rho:=\{z:|z_1|<\rho,\ |z_j|<1\text{ for }2\le j\le m\}$$ define [construct] $$F_\rho(z):=\frac{1}{2\pi i}\int_{|\zeta|=\rho}\frac{f(\zeta,z_2,\dots,z_m)}{\zeta-z_1}\,d\zeta.$$ Because $|\zeta|=\rho>r$ and $|z_j|<1$ for $j\ge2$, every point $(\zeta,z_2,\dots,z_m)$ lies in the shell from step 1.1, so the integral is well defined. [L5, step 1.1, construct]

3.1 Fix all variables except one coordinate of $z\in D_\rho$. For the $z_1$ variable, the integrand in step 2.1 is jointly continuous on the contour times $\{|z_1|<\rho\}$ and holomorphic in $z_1$, so [L1] makes $z_1\mapsto F_\rho(z)$ holomorphic. For any coordinate $z_k$ with $2\le k\le m$, the denominator is constant and the slice $z_k\mapsto f(\zeta,z_2,\dots,z_m)$ is holomorphic on the unit disc because $f$ is holomorphic on the shell. Another use of [L1] makes $z_k\mapsto F_\rho(z)$ holomorphic. Therefore $F_\rho$ is separately holomorphic on $D_\rho$. [L1, step 2.1]

3.2 If $|z_m|<s$, then for fixed $z_2,\dots,z_{m-1}$ the slice $z_1\mapsto f(z_1,z_2,\dots,z_m)$ is holomorphic on the full unit disc. Applying [L2] on the circle $|\zeta|=\rho$ gives $$F_\rho(z)=f(z)\qquad\bigl(|z_1|<\rho,\ |z_m|<s,\ |z_j|<1\text{ for }2\le j\le m-1\bigr).$$ So $F_\rho$ agrees with $f$ on a nonempty open subset of the shell. [L2, step 2.1]

4.1 Let $K\subseteq D_\rho$ be compact. Choose $\delta>0$ so that $|z_1|\le\rho-\delta$ on $K$. The set $$\{(\zeta,z_2,\dots,z_m):|\zeta|=\rho,\ z\in K\}$$ is a compact subset of the shell, so $|f|$ has a finite bound $M_K$ there. The contour in step 2.1 has length $2\pi\rho$, and $|\zeta-z_1|\ge\delta$ on that contour for $z\in K$, hence $$|F_\rho(z)|\le\frac{1}{2\pi}\int_{|\zeta|=\rho}\frac{M_K}{|\zeta-z_1|}\,|d\zeta|\le\frac{\rho M_K}{\delta}\qquad(z\in K).$$ Thus $F_\rho$ is locally bounded on $D_\rho$, so [L4] upgrades step 3.1 to joint holomorphicity on $D_\rho$. [L4, step 2.1, step 3.1]

5.1 If $r<\rho_1<\rho_2<1$, then both $F_{\rho_1}$ and $F_{\rho_2}$ are holomorphic on $D_{\rho_1}$ by step 4.1, and step 3.2 shows that they agree on the nonempty open subset of $D_{\rho_1}$ where $|z_m|<s$. Therefore [L3] gives $F_{\rho_1}=F_{\rho_2}$ on all of $D_{\rho_1}$. [L3, step 4.1, step 3.2]

6.1 For each point $z$ of the full polydisc from step 1.1, choose any $\rho$ with $\max\{r,|z_1|\}<\rho<1$ and set $F(z):=F_\rho(z)$. Step 5.1 makes this definition independent of $\rho$, and step 4.1 shows that $F$ is holomorphic near each point. Step 3.2 shows that $F$ extends the original $f$ on the shell. If $G$ is another holomorphic extension to the full polydisc, then $F$ and $G$ agree with $f$ on the same nonempty open subset where $|z_m|<s$, so [L3] forces $F=G$. Thus the extension is unique. [L3, step 3.2, step 4.1, step 5.1] ∎
