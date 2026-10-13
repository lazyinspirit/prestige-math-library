---
id: ex-sr-uniform-galilean-chart-bound-worked
kind: example
domain: mathematics
title: 'Worked uniform Galilean chart bound on a bounded region'
status: published
origin: session
dependency_level: 10
deps: [lem-sr-uniform-galilean-limit-of-boost-charts, def-sr-galilean-limiting-charts, def-rational-power, lem-rational-power-laws, thm-of-square-roots, lem-rational-power-monotone, def-ordered-field]
dependency_roles:
  def-ordered-field: mathematical-premise
  lem-sr-uniform-galilean-limit-of-boost-charts: mathematical-premise
  def-sr-galilean-limiting-charts: mathematical-premise
  def-rational-power: mathematical-premise
  lem-rational-power-laws: mathematical-premise
  thm-of-square-roots: mathematical-premise
  lem-rational-power-monotone: mathematical-premise
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
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
---

## Example

Take $v=e_1$ (so $|v|=1$), $T=1$, $R=2$ and the point $(t,x)=(1,2e_1)$ in [[def-sr-galilean-limiting-charts]], and let $\Phi_{v,C}(1,2e_1)=(t',x')$. For $C>1$, write $g_C=C/\sqrt{C^2-1}$, so $t'=(C^2-2)/(C\sqrt{C^2-1})$ and $x'=g_Ce_1$, while $G_v(1,2e_1)=(1,e_1)$. The exact point deviations and whole-region bounds are
$$d_t(C):=1-\frac{C^2-2}{C\sqrt{C^2-1}}\le B_t(C):=g_C-1+\frac{2g_C}{C^2},\qquad d_x(C):=g_C-1\le B_x(C):=3(g_C-1).$$
Their rounded values are:

| $C$ | $g_C$ | $t'$ | $d_t(C)$ | $B_t(C)$ | $d_x(C)$ | $B_x(C)$ |
|---|---|---|---|---|---|---|
| $10$ | $1.0050378153$ | $0.9849370590$ | $0.0150629410$ | $0.0251385716$ | $0.0050378153$ | $0.0151134458$ |
| $100$ | $1.0000500038$ | $0.9998499937$ | $0.0001500063$ | $0.0002500138$ | $0.0000500038$ | $0.0001500113$ |

Here $g_{10}=10/\sqrt{99}=10/(3\sqrt{11})$. The computed deviations shrink by factors $d_t(10)/d_t(100)\approx100.4154227043$ and $d_x(10)/d_x(100)\approx100.7487483984$, or about $100.4$ and $100.7$ to one decimal place, consistent with the $O(C^{-2})$ rate of [[lem-sr-uniform-galilean-limit-of-boost-charts]]\,(c).

Finally, for tolerance $\varepsilon=0.01$, take $z_0=1/4$. Then $K_0=4\sqrt3/9$ and $A_0=1/2+\sqrt3/9<3/4$. Choose exactly $z_1=1/900$. With $H=T+R+|v|T=4$, one has $z_1<z_0$, $A_0z_1<1/1200<1/2$ and $A_0Hz_1<1/300<\varepsilon/2=1/200$, so every threshold inequality is satisfied. The sufficient threshold is $$C_\varepsilon=\max\{1/\sqrt{z_1},\sqrt{3|v|R/\varepsilon}\}=\max\{30,\sqrt{600}\}=30>1=|v|.$$ Thus $C=30$ is sufficient uniformly on $D_{1,2}$. At the specified point $\gamma_{30}=30/\sqrt{899}$, $|t'-t|=1-449/(15\sqrt{899})\approx0.0016674389$ and $|x'-(x-tv)|=30/\sqrt{899}-1\approx0.0005560189$, both below $0.01$. The whole-region bound values at $C=30$ are approximately $0.0027794768$ and $0.0016680568$, also below $0.01$. Computed values are rounded to ten places after the decimal point, except the explicitly stated one-place shrink factors; terminating rational data are exact and all inequalities compare exact values. No physical interpretation of the auxiliary $\Phi_{v,C}$ family is asserted.

## Facts & Assumptions

**Given:** $v=e_1$, $T=1$, $R=2$, the point $(t,x)=(1,2e_1)$, the maps $\Phi_{v,C}$ and $G_v$ and the region $D_{1,2}$ of [[def-sr-galilean-limiting-charts]], and the bounds and threshold of [[lem-sr-uniform-galilean-limit-of-boost-charts]].

[L1] In the frame data, $|v|=|e_1|=1$ and $\delta(v,x)=\delta(e_1,2e_1)=2$, and $\Phi_{v,C}(t,x)=\bigl(\gamma_C(t-\delta(v,x)/C^2),\ x+\tfrac{\gamma_C-1}{|v|^2}\delta(v,x)v-\gamma_Ctv\bigr)$ for $v\ne0$ while $G_v(t,x)=(t,x-tv)$ ([[def-sr-galilean-limiting-charts]]).

[L2] With these data the lemma gives: the exact differences $t'-t=(\gamma_C-1)t-\gamma_C\delta(v,x)/C^2$ and $x'-(x-tv)=(\gamma_C-1)(x_\parallel-tv)$; the bounds $|t'-t|\le(\gamma_C-1)T+\gamma_C|v|R/C^2$ and $|x'-(x-tv)|\le(\gamma_C-1)(R+|v|T)$; and the sufficient threshold $C_\varepsilon=\max\{|v|/\sqrt{z_1},\sqrt{3|v|R/\varepsilon}\}$ for any admissible $z_1$ ([[lem-sr-uniform-galilean-limit-of-boost-charts]]).

[L3] Rational powers: $\gamma_C=(1-1/C^2)^{-1/2}=(C^2/(C^2-1))^{1/2}=C/\sqrt{C^2-1}$ for $C>1$, and $(3/4)^{-5/2}=(4/3)^{5/2}=(4/3)^2(4/3)^{1/2}$ ([[def-rational-power]], [[lem-rational-power-laws]]).

[L4] Square roots: $\sqrt{\ }$ is the nonnegative root of [[thm-of-square-roots]], and for $0\le a<b$ one has $\sqrt a<\sqrt b$; in particular $\sqrt3<9/4$ because $3<81/16$, and $\sqrt{600}<30$ because $600<900$. Also $(4/3)^{5/2}=(16/9)(2/\sqrt3)=32/(9\sqrt3)$ ([[thm-of-square-roots]], [[lem-rational-power-monotone]]).

[L5] Order arithmetic in $\mathbb R$: inequalities may be multiplied by positive numbers and added, and $0<1/300<1/200$ ([[def-ordered-field]]): $(b+d)-(a+c)=(b-a)+(d-c)$ and $\lambda b-\lambda a=\lambda(b-a)$ are nonnegative when $a\le b$, $c\le d$, $\lambda>0$, by positive-cone closure, with equality handled separately.





## Verification

**Proof technique:** direct.

1.1 The exact deviations at the point. With $v=e_1$, $|v|=1$, $\delta(v,x)=2$, $x_\parallel=2e_1$ and $x-tv=e_1$, [L1] and [L3] give $\gamma_C=C/\sqrt{C^2-1}$, $t'=\gamma_C(1-\tfrac2{C^2})=(C^2-2)/(C\sqrt{C^2-1})$ and $x'=2e_1+2(\gamma_C-1)e_1-\gamma_Ce_1=\gamma_Ce_1$, so the exact deviations are $d_t(C)=1-(C^2-2)/(C\sqrt{C^2-1})$ and $d_x(C)=\gamma_C-1$. Indeed, if $1<C^2\le2$ then $t^{\prime}\le0<1$; if $C^2>2$, both numerator and denominator of $t^{\prime}$ are positive and $(C^2-2)^2<C^2(C^2-1)$ since $4<3C^2$, so $t^{\prime}<1$ again. Thus $d_t(C)>0$ for every $C>1$, including $C=10,30,100$, and the absolute value may be read as written. [given, L1, L3, L5, algebra]

1.2 The $\varepsilon$-threshold data. Take $z_0=1/4$. By [L3] and [L4], $K_0=\tfrac38(3/4)^{-5/2}=\tfrac38\cdot\tfrac{32}{9\sqrt3}=\tfrac{4\sqrt3}{9}$ and $A_0=\tfrac12+K_0z_0=\tfrac12+\tfrac{\sqrt3}{9}$; since $\sqrt3<9/4$ by [L4], $A_0<\tfrac12+\tfrac14=\tfrac34$. With $z_1=1/900$ one has $z_1<z_0$, $A_0z_1<\tfrac34\cdot\tfrac1{900}=\tfrac1{1200}<\tfrac12$ and $A_0Hz_1=4A_0z_1<\tfrac1{300}<\tfrac1{200}=\varepsilon/2$ for $\varepsilon=1/100$, so $z_1$ satisfies the hypothesis of [L2],(c). [given, L3, L4, L5, algebra]

2.1 The whole-region bound values. Instance of [L2],(b) with $T=1$, $R=2$, $|v|=1$: the bounds read $B_t(C)=(\gamma_C-1)+2\gamma_C/C^2$ and $B_x(C)=3(\gamma_C-1)$, and $d_t(C)\le B_t(C)$, $d_x(C)\le B_x(C)$ hold at every $C>1$ by the lemma; the statement records the ten-place rounded values of the exact expressions $d_t(C),d_x(C),B_t(C),B_x(C)$ at $C=10$ and $C=100$. [step 1.1, L2, algebra]

2.2 The sufficient threshold. By [L2],(c) applied with $z_1=1/900$, $|v|=1$, $R=2$ and $\varepsilon=1/100$, $$C_\varepsilon=\max\{1/\sqrt{z_1},\sqrt{3|v|R/\varepsilon}\}=\max\{30,\sqrt{600}\}=30,$$ because $\sqrt{600}<30$ by [L4]; since $30>1=|v|$, every $C\ge30$ meets both error bounds of [L2],(b) on the whole region $D_{1,2}$. [step 1.2, L2, L4, algebra]

3.1 The evaluations and ratios at the named scales. For $C=10$ one has $\gamma_{10}=10/\sqrt{99}=10/(3\sqrt{11})$, $d_t(10)=1-98/(10\sqrt{99})$, $d_x(10)=\gamma_{10}-1$; for $C=100$ one has $\gamma_{100}=100/\sqrt{9999}$ and the corresponding expressions; for $C=30$ one has $\gamma_{30}=30/\sqrt{899}$, $t'=898/(30\sqrt{899})=449/(15\sqrt{899})$ and the bound value $B_t(30)=451/(15\sqrt{899})-1$. The two ratios of exact deviations are $$\frac{d_t(10)}{d_t(100)}=\frac{(10\sqrt{99}-98)\cdot10\sqrt{9999}}{\sqrt{99}\,(100\sqrt{9999}-9998)},\qquad \frac{d_x(10)}{d_x(100)}=\frac{\gamma_{10}-1}{\gamma_{100}-1},$$ evaluated from these exact radicals before rounding; the statement records the ten-place rounded values of all these quantities, and each bound comparison at the named scales is the instance of [L2],(b) already recorded in step 2.1. [step 1.1, step 2.1, L3, algebra]

4.1 Conclusion of the worked instance. The exact differences, the uniform bounds at $C=10,30,100$, the ten-place rounded evaluations, the two ratios of exact deviations and the $\varepsilon=1/100$ threshold $C_\varepsilon=30$ have been checked above from the exact radicals, and the constants $K_0=4\sqrt3/9$, $A_0=1/2+\sqrt3/9<3/4$ and the inequalities $z_1<z_0$, $A_0z_1<1/1200$, $A_0Hz_1<1/300<\varepsilon/2$ hold with exact values; the auxiliary family $\Phi_{v,C}$ is mathematical and no physical claim is made. [step 2.2, step 3.1, L2, given] ∎
