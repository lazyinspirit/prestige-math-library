---
id: lem-sr-uniform-galilean-limit-of-boost-charts
kind: lemma
domain: mathematics
title: 'Uniform Galilean limit of the boost charts on bounded regions, and its failure on the whole chart domain'
status: draft
origin: session
dependency_level: 9
deps: [def-sr-galilean-limiting-charts, lem-sr-uniform-low-speed-taylor-remainder, thm-cauchy-schwarz-finite, lem-of-triangle-inequality, def-abs-value, lem-of-abs-value, def-spatial-euclidean-structure-of-an-inertial-frame, def-rational-power, cor-triangle-inequality-for-inner-product-norm, lem-rational-power-monotone, lem-rational-power-laws, lem-of-inverse-positive, thm-of-square-roots]
dependency_roles:
  def-sr-galilean-limiting-charts: mathematical-premise
  lem-sr-uniform-low-speed-taylor-remainder: mathematical-premise
  thm-cauchy-schwarz-finite: mathematical-premise
  lem-of-triangle-inequality: mathematical-premise
  def-abs-value: mathematical-premise
  lem-of-abs-value: mathematical-premise
  def-spatial-euclidean-structure-of-an-inertial-frame: mathematical-premise
  def-rational-power: mathematical-premise
  cor-triangle-inequality-for-inner-product-norm: mathematical-premise
  lem-rational-power-monotone: mathematical-premise
  lem-rational-power-laws: mathematical-premise
  lem-of-inverse-positive: mathematical-premise
  thm-of-square-roots: mathematical-premise
forward_refs: [ex-sr-uniform-galilean-chart-bound-worked]
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: 'S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997); signature (-+++) with c = 1. Chapter 1 printed p. 27, equations (1.98)-(1.101) (PDF p. 34): for small v, p^0 = m + (1/2)mv^2 (rest energy plus kinetic energy) and p^1 = mv (Newtonian momentum); Chapter 4 printed pp. 105-106 (PDF pp. 112-113): the Newtonian limit, the slow-motion condition (4.10) and the weak static field'
      url: 'https://arxiv.org/pdf/gr-qc/9712019'
    - title: 'D. Tong, General Relativity (Cambridge Part III lecture notes, 2019), Section 1.2.2 pp. 14-16 (relativistic free-particle action and the Lorentz factor gamma = (1-|xdot|^2/c^2)^(-1/2)) and Section 1.2.3 pp. 16-19, in particular the Taylor expansion (1.22) on printed p. 17 (-mc^2 + (m/2)|xdot|^2 - m Phi(x) + ... obtained by expanding the square root) (author-hosted copy of the official Cambridge PDF)'
      url: 'https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf'
verification:
  precheck: pass
---

## Statement

Let $v\in S$, $T,R>0$, and let $(\Phi_{v,C})_{C>|v|}$, $G_v$ and $D_{T,R}$ be as in [[def-sr-galilean-limiting-charts]]. For $C>|v|$ write $\gamma_C:=(1-|v|^2/C^2)^{-1/2}$ and $z:=|v|^2/C^2$, and for $(t,x)\in\mathbb R\times S$ write $\Phi_{v,C}(t,x)=(t',x')$.

(a) *Exact differences.* For every $C>|v|$ and all $(t,x)$, $$t'-t=(\gamma_C-1)t-\gamma_C\frac{\delta(v,x)}{C^2},\qquad x'-(x-tv)=(\gamma_C-1)(x_\parallel-tv),$$ where $x_\parallel:=\delta(v,x)v/|v|^2$ for $v\ne0$; for $v=0$ one has $\Phi_{0,C}=\mathrm{id}$ and both differences vanish.

(b) *Uniform bounds on bounded regions.* For every $v\ne0$, every $C>|v|$ and every $(t,x)\in D_{T,R}$, $$|t'-t|\le(\gamma_C-1)T+\gamma_C\frac{|v|R}{C^2},\qquad |x'-(x-tv)|\le(\gamma_C-1)(R+|v|T).$$

(c) *Quantitative rate and uniform convergence to the Galilean chart map.* Fix $z_0\in(0,1)$ and set $K_0=\tfrac38(1-z_0)^{-5/2}$, $A_0=\tfrac12+K_0z_0$ and $\Gamma_0=(1-z_0)^{-1/2}$. Whenever $v\ne0$ and $C\ge |v|/\sqrt{z_0}$, the following hold uniformly on $D_{T,R}$: $$|t'-t|\le\frac{A_0|v|^2T+\Gamma_0|v|R}{C^2},\qquad |x'-(x-tv)|\le\frac{A_0|v|^2(R+|v|T)}{C^2}.$$ Thus the rate is $O(C^{-2})$ with explicit constants for fixed $v,T,R,z_0$. For every $\varepsilon>0$ there is $C_\varepsilon>|v|$ such that for every $C\ge C_\varepsilon$ and every $(t,x)\in D_{T,R}$, $$\max\{|t'-t|,\,|x'-(x-tv)|\}\le\varepsilon .$$ For $v\ne0$, put $H=T+R+|v|T$, choose any $z_1$ with $0<z_1\le\min\{z_0,(2A_0)^{-1},\varepsilon/(2A_0H)\}$ (for example the displayed minimum), and set $$C_\varepsilon=\max\{|v|/\sqrt{z_1},\sqrt{3|v|R/\varepsilon}\}.$$ This is sufficient, and since $z_1<1$ it gives $C_\varepsilon>|v|$. For $v=0$ both errors vanish identically and any $C_\varepsilon>0$ suffices. Hence $\sup_{D_{T,R}}\max\{|t'-t|,|x'-(x-tv)|\}\to0$ as $C\to\infty$ with $v,T,R$ fixed, the convergence is uniform on $D_{T,R}$, and for each fixed $(t,x)$ the image $\Phi_{v,C}(t,x)$ converges to the Galilean value $G_v(t,x)=(t,x-tv)$.

(d) *Failure on the whole chart domain.* For every $v\ne0$ and every $C>|v|$, $\sup_{\mathbb R\times S}|t'-t|=+\infty$ and $\sup_{\mathbb R\times S}|x'-(x-tv)|=+\infty$; so the boundedness of $T,R$ in (c) is essential and the limit is not uniform on the whole chart domain.

## Facts & Assumptions

**Given:** A vector $v\in S$, reals $T,R>0$, the family $(\Phi_{v,C})_{C>|v|}$, the Galilean map $G_v(t,x)=(t,x-tv)$, the region $D_{T,R}=\{(t,x):|t|\le T,\ |x|\le R\}$, and for $C>|v|$ the numbers $\gamma_C=(1-|v|^2/C^2)^{-1/2}$ and $z=|v|^2/C^2$ ([[def-sr-galilean-limiting-charts]]).

[L1] The definitions of $\Phi_{v,C}$, $G_v$, $D_{T,R}$ and $\gamma_C$ are those of [[def-sr-galilean-limiting-charts]]: for $v\ne0$, $\Phi_{v,C}(t,x)=\bigl(\gamma_C(t-\delta(v,x)/C^2),\ x+((\gamma_C-1)/|v|^2)\delta(v,x)v-\gamma_Ctv\bigr)$, and $\Phi_{0,C}=\mathrm{id}$.

[L2] Uniform Taylor remainder: for $z_0\in(0,1)$, $K_0=\tfrac38(1-z_0)^{-5/2}$ and $0\le z\le z_0$, one has $(1-z)^{-1/2}=1+\tfrac z2+R(z)$ with $|R(z)|\le K_0z^2$, hence $(\gamma-1)\le(\tfrac12+K_0z_0)z$ for $\gamma=(1-z)^{-1/2}$ ([[lem-sr-uniform-low-speed-taylor-remainder]]).

[L3] Cauchy–Schwarz in the frame's orthonormal basis: writing $v=\sum_iv^ie_i$ and $x=\sum_ix^ie_i$ in the $\delta$-orthonormal basis of [[def-spatial-euclidean-structure-of-an-inertial-frame]], one has $\delta(v,x)=\sum_iv^ix^i$, $|v|^2=\sum_i(v^i)^2$, $|x|^2=\sum_i(x^i)^2$ and $|\delta(v,x)|\le|v|\,|x|$ ([[thm-cauchy-schwarz-finite]]).

[L4] Norm and absolute-value calculus: $|\lambda u|=|\lambda|\,|u|$ and $|u+w|\le|u|+|w|$ on $S$ ([[cor-triangle-inequality-for-inner-product-norm]]); $\lambda,\mu\in\mathbb R$ satisfy $|\lambda+\mu|\le|\lambda|+|\mu|$, $|\lambda\mu|=|\lambda||\mu|$, $|w|=w$ for $w\ge0$ ([[lem-of-triangle-inequality]], [[def-abs-value]], [[lem-of-abs-value]]).

[L5] Rational-power order: for $0<a\le b$ and rational $r>0$, $a^r\le b^r$; for $0<a<b$, $0<b^{-1}<a^{-1}$; for $0<a<1$ and rational $r<0$, $a^r>1$, and $1^r=1$ ([[lem-rational-power-monotone]], [[lem-of-inverse-positive]], [[lem-rational-power-laws]], [[def-rational-power]]).

[L6] The norm $|w|=\sqrt{\delta(w,w)}$ of [[def-spatial-euclidean-structure-of-an-inertial-frame]] is the nonnegative square root of [[thm-of-square-roots]], so $|w|^2=\delta(w,w)$ and $|w|\ge0$.



## Proof

**Proof technique:** direct.

1.1 The exact time difference. For $v\ne0$ and $C>|v|$, subtraction in $\mathbb R$ using [L1] gives $$t'-t=\gamma_C\Bigl(t-\frac{\delta(v,x)}{C^2}\Bigr)-t=(\gamma_C-1)t-\gamma_C\frac{\delta(v,x)}{C^2},$$ for every $(t,x)\in\mathbb R\times S$. [L1, algebra]

1.2 The exact spatial difference. In the same case, subtraction in the vector space $S$ using [L1] gives $$x'-(x-tv)=x+\frac{\gamma_C-1}{|v|^2}\delta(v,x)v-\gamma_Ctv-x+tv=(\gamma_C-1)\Bigl(\frac{\delta(v,x)}{|v|^2}v-tv\Bigr)=(\gamma_C-1)(x_\parallel-tv),$$ with $x_\parallel=\delta(v,x)v/|v|^2$; if $v=0$ then $\Phi_{0,C}=\mathrm{id}$ and $t'-t=0$, $x'-(x-tv)=x-x=0$. This proves (a). [L1, algebra]

1.3 The Taylor estimate for $\gamma_C$. Fix $z_0\in(0,1)$, let $0\le z\le z_0$ and put $\gamma=(1-z)^{-1/2}$; by [L2] $\gamma=1+\tfrac z2+R(z)$ with $|R(z)|\le K_0z^2$, so $$\gamma-1=\tfrac z2+R(z)\le\tfrac z2+K_0z^2\le\bigl(\tfrac12+K_0z_0\bigr)z=A_0z,$$ because $K_0\ge0$ and $z\le z_0$. [L2, algebra]

1.4 The reciprocal bound for $\gamma_C$. With the same data, $0<1-z_0\le1-z\le1$ gives $(1-z_0)^{1/2}\le(1-z)^{1/2}$ by [L5]; if $1-z_0<1-z$ the strict reciprocal rule of [L5] gives $(1-z)^{-1/2}<(1-z_0)^{-1/2}$, and if $1-z_0=1-z$ the two quantities are equal, so in all cases $\gamma=(1-z)^{-1/2}\le(1-z_0)^{-1/2}=\Gamma_0$. [L5]

1.5 The domain inclusion. For $v\ne0$ and $C\ge|v|/\sqrt{z_0}$ one has $z=|v|^2/C^2\le|v|^2/(|v|^2/z_0)=z_0$; hence steps 1.3 and 1.4 apply with this $z$. [L1, L5, algebra]

2.1 The time bound. Let $v\ne0$, $C>|v|$ and $(t,x)\in D_{T,R}$; by [L5], $(1-z)^{-1/2}>1$ for $0<z<1$ and $\gamma_C=1$ for $z=0$, so $\gamma_C-1\ge0$ and $\gamma_C\ge1$. Taking absolute values in step 1.1 and using [L4], $|t'-t|\le(\gamma_C-1)|t|+\gamma_C|\delta(v,x)|/C^2$, and [L3] plus $|t|\le T$, $|x|\le R$ give $|t'-t|\le(\gamma_C-1)T+\gamma_C|v|R/C^2$. [step 1.1, L3, L4, L5, algebra]

2.2 The spatial bound. In the same case, step 1.2 and the homogeneity and triangle inequality of [L4] give $|x'-(x-tv)|=(\gamma_C-1)|x_\parallel-tv|\le(\gamma_C-1)(|x_\parallel|+|t|\,|v|)$; by [L3] $|x_\parallel|=|\delta(v,x)|/|v|\le|x|$, so on $D_{T,R}$ we get $|x'-(x-tv)|\le(\gamma_C-1)(|x|+|v|T)\le(\gamma_C-1)(R+|v|T)$. This proves (b). [step 1.2, L3, L4, algebra]

2.3 The case $v=0$. Here $G_0(t,x)=(t,x)$ and $\Phi_{0,C}=\mathrm{id}$ for every $C>0$, so $|t'-t|=0$ and $|x'-(x-0\cdot v)|=|x'-x|=0$ for every $(t,x)$; hence every $\varepsilon>0$ is met already with any $C_\varepsilon>0$. [step 1.2, L1]

3.1 The explicit $O(C^{-2})$ bounds. Let $v\ne0$, $C\ge|v|/\sqrt{z_0}$ and $(t,x)\in D_{T,R}$. By step 2.1 and steps 1.3, 1.5, $$|t'-t|\le(\gamma_C-1)T+\gamma_C\frac{|v|R}{C^2}\le A_0zT+\Gamma_0\frac{|v|R}{C^2}=\frac{A_0|v|^2T+\Gamma_0|v|R}{C^2},$$ and by step 2.2 and steps 1.3, 1.5, $$|x'-(x-tv)|\le(\gamma_C-1)(R+|v|T)\le A_0z(R+|v|T)=\frac{A_0|v|^2(R+|v|T)}{C^2},$$ since $z=|v|^2/C^2$. [step 2.1, step 2.2, step 1.3, step 1.4, step 1.5, algebra]

3.2 The $\varepsilon$-threshold for $v\ne0$. Fix $\varepsilon>0$, put $H=T+R+|v|T>0$, and choose $z_1$ with $0<z_1\le\min\{z_0,(2A_0)^{-1},\varepsilon/(2A_0H)\}$; the minimum is positive because $z_0,A_0,\varepsilon,H$ are positive. Let $C\ge\max\{|v|/\sqrt{z_1},\sqrt{3|v|R/\varepsilon}\}$. Then $z\le z_1\le z_0$, so by step 1.3, $\gamma_C-1\le A_0z_1\le\tfrac12$, whence $\gamma_C\le\tfrac32$, and $A_0z_1T\le\tfrac{\varepsilon}{2H}T\le\tfrac{\varepsilon}{2}$ while $A_0z_1(R+|v|T)\le\tfrac{\varepsilon}{2H}(R+|v|T)\le\tfrac{\varepsilon}{2}$. Thus step 2.1 gives $|t'-t|\le A_0z_1T+\tfrac32\tfrac{|v|R}{C^2}\le\tfrac\varepsilon2+\tfrac\varepsilon2=\varepsilon$ and step 2.2 gives $|x'-(x-tv)|\le A_0z_1(R+|v|T)\le\tfrac\varepsilon2\le\varepsilon$ on $D_{T,R}$. Since $z_1\le z_0<1$ and $v\ne0$, the number $C_\varepsilon=\max\{|v|/\sqrt{z_1},\sqrt{3|v|R/\varepsilon}\}$ satisfies $C_\varepsilon\ge|v|/\sqrt{z_1}>|v|$. [step 2.1, step 2.2, step 1.3, step 1.5, L5, algebra]

4.1 Uniform and pointwise convergence. By steps 3.2 and 2.3, for every fixed $v,T,R$ and every $\varepsilon>0$ there is $C_\varepsilon>|v|$ with $\max\{|t'-t|,|x'-(x-tv)|\}\le\varepsilon$ for all $(t,x)\in D_{T,R}$ and all $C\ge C_\varepsilon$; taking the supremum over $D_{T,R}$ gives $\sup_{D_{T,R}}\max\{|t'-t|,|x'-(x-tv)|\}\le\varepsilon$, so the supremum tends to $0$ as $C\to\infty$. Since $\Phi_{v,C}(t,x)-(t,x-tv)$ has both components bounded by that maximum, $\Phi_{v,C}(t,x)\to G_v(t,x)$ for each fixed $(t,x)$, which lies in $D_{T,R}$ for $T,R$ large; this proves (c). [step 3.2, step 2.3, L1, algebra]

5.1 Failure on the whole chart domain. Let $v\ne0$ and $C>|v|$, so $z>0$, $\gamma_C>1$ and $x_\parallel$ is defined. For $\lambda>0$ take $(t,x)=(0,\lambda v/|v|)$; then $x_\parallel=\lambda v/|v|$ and step 1.2 gives $x'-(x-0\cdot v)=(\gamma_C-1)\lambda v/|v|$, of norm $(\gamma_C-1)\lambda$, which is unbounded as $\lambda\to\infty$; hence $\sup_{\mathbb R\times S}|x'-(x-tv)|=+\infty$. For $\mu>0$ take $(t,x)=(0,-\mu v)$; then $\delta(v,x)=-\mu|v|^2$ and step 1.1 gives $t'-t=\gamma_C\mu|v|^2/C^2$, which is unbounded as $\mu\to\infty$; hence $\sup_{\mathbb R\times S}|t'-t|=+\infty$. This proves (d), so the boundedness of $T,R$ is essential and no uniform limit holds on the whole chart domain. [step 1.1, step 1.2, L1, L6, algebra] ∎



## Remarks

The statement and proof concern the auxiliary coordinate family $\Phi_{v,C}$ of [[def-sr-galilean-limiting-charts]] alone: $C$ is varied with $v,T,R$ fixed, the model's adopted scale $c$ is unchanged, and no trajectory, force, interaction or physical limiting process is defined. The constants $A_0,\Gamma_0,K_0$ depend on the chosen $z_0$ (equivalently on the admissible ratio $|v|/C$), so the rate is uniform only on the declared bounded region and speed window; clause (d) exhibits failure on the whole chart domain. This does not imply failure on every unbounded subset: on $\{(0,x):\delta(v,x)=0\}$ both exact differences in (a) vanish, even though that subset is unbounded. The quantitative threshold of clause (c) is sharp enough for the worked evaluation of [[ex-sr-uniform-galilean-chart-bound-worked]].
