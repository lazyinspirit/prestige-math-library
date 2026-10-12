---
id: lem-cm-piecewise-c1-jump-derivative
kind: lemma
title: "The distributional derivative of a piecewise $C^1$ function with a jump: $(u_p)'=u_{p'_{\\mathrm{reg}}}+[p]\\,\\delta_{t_*}$"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 0
deps: [def-regular-distribution-from-a-locally-integrable-function, def-locally-integrable-function-on-r-n, def-distributional-derivative, def-distribution, def-dirac-delta-and-its-derivatives, def-test-function-space-d-of-an-open-set, def-integral-over-a-measurable-set, def-borel-and-lebesgue-measurable-function-on-rn, def-countable-choice, def-interval, lem-complex-integration-by-parts-on-intervals-and-decaying-lines, thm-the-lebesgue-integral-respects-almost-everywhere-equality, thm-linearity-of-the-lebesgue-integral-on-l-one, thm-finitely-many-discontinuities-integrable, lem-riemann-lebesgue-comparison-for-distribution-test-integrands, cor-continuous-functions-are-borel-measurable]
dependency_roles:
  def-regular-distribution-from-a-locally-integrable-function: mathematical-premise
  def-locally-integrable-function-on-r-n: mathematical-premise
  def-distributional-derivative: mathematical-premise
  def-distribution: mathematical-premise
  def-dirac-delta-and-its-derivatives: mathematical-premise
  def-test-function-space-d-of-an-open-set: mathematical-premise
  def-integral-over-a-measurable-set: mathematical-premise
  def-borel-and-lebesgue-measurable-function-on-rn: mathematical-premise
  cor-continuous-functions-are-borel-measurable: mathematical-premise
  def-countable-choice: mathematical-premise
  def-interval: mathematical-premise
  lem-complex-integration-by-parts-on-intervals-and-decaying-lines: mathematical-premise
  thm-the-lebesgue-integral-respects-almost-everywhere-equality: mathematical-premise
  thm-linearity-of-the-lebesgue-integral-on-l-one: mathematical-premise
  thm-finitely-many-discontinuities-integrable: mathematical-premise
  lem-riemann-lebesgue-comparison-for-distribution-test-integrands: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Semyon Dyatlov, Lecture notes for 18.155 (MIT, 2022): distributional differentiation and the jump of the Heaviside function (the source whose conventions the library distributions use)"
      url: "https://math.mit.edu/~dyatlov/18.155/155-notes.pdf"
    - title: "David Tong, Classical Dynamics (University of Cambridge), §1.2, printed p. 2: the variable-mass momentum remark and the caution that a finite force at each point does not by itself determine momentum jumps"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
---

## Statement

Assume the Axiom of Countable Choice ($\mathrm{AC}_\omega$, [[def-countable-choice]]), used only through the Borel-measurability, Lebesgue-integration and distribution suppliers cited below. Let $I\subseteq\mathbb R$ be an open interval ([[def-interval]]), let $t_*\in I$, and let $p:I\to\mathbb R$ satisfy:

1. $p$ is continuous on $I\setminus\{t_*\}$ and of class $C^1$ on each of the two open intervals $I\cap(-\infty,t_*)$ and $I\cap(t_*,\infty)$;
2. the one-sided limits $p(t_*^-):=\lim_{t\uparrow t_*}p(t)$, $p(t_*^+):=\lim_{t\downarrow t_*}p(t)$ and the one-sided limits of the derivative $p'(t_*^-):=\lim_{t\uparrow t_*}p'(t)$, $p'(t_*^+):=\lim_{t\downarrow t_*}p'(t)$ all exist in $\mathbb R$.

Fix a value $p(t_*)\in\mathbb R$ arbitrarily (for instance $p(t_*):=0$) and define $p'_{\mathrm{reg}}:I\to\mathbb R$ by $p'_{\mathrm{reg}}(t):=p'(t)$ for $t\ne t_*$ and $p'_{\mathrm{reg}}(t_*):=0$. Put $[p]:=p(t_*^+)-p(t_*^-)$ and let $u_p,u_{p'_{\mathrm{reg}}}\in\mathcal D'(I)$ be the associated regular distributions ([[def-regular-distribution-from-a-locally-integrable-function]], [[def-locally-integrable-function-on-r-n]]): $$u_p(\varphi)=\int_Ip(t)\,\varphi(t)\,d\lambda(t),\qquad u_{p'_{\mathrm{reg}}}(\varphi)=\int_Ip'_{\mathrm{reg}}(t)\,\varphi(t)\,d\lambda(t).$$

Then $p$ and $p'_{\mathrm{reg}}$ are locally integrable on $I$, and

$$(u_p)'=u_{p'_{\mathrm{reg}}}+[p]\,\delta_{t_*}$$

in $\mathcal D'(I)$ ([[def-distributional-derivative]], [[def-dirac-delta-and-its-derivatives]]): that is, for every test function $\varphi\in\mathcal D(I)$,

$$-\int_Ip(t)\,\varphi'(t)\,d\lambda(t)=\int_Ip'_{\mathrm{reg}}(t)\,\varphi(t)\,d\lambda(t)+[p]\,\varphi(t_*).$$

Both integrals are over the Lebesgue measure $\lambda$ on $\mathbb R$, and the pairing convention of the two sides is complex-linear in $\varphi$; it therefore suffices that the identity hold for real-valued test functions.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, an open interval $I$, a point $t_*\in I$, and a real function $p$ satisfying the piecewise-$C^1$ and one-sided-limit hypotheses above.

[L1] The test space $\mathcal D(I)$ consists of the compactly supported $C^\infty$ functions on $I$; for $\varphi\in\mathcal D(I)$ the pairing of a distribution $u$ is written $\langle u,\varphi\rangle$, and $(u')(\varphi)=-u(\varphi')$; the Dirac distribution satisfies $\delta_{t_*}(\varphi)=\varphi(t_*)$; $\int_I$ and $\int_E$ denote the Lebesgue integral, with $\int_Ef\,d\lambda=\int f\chi_E\,d\lambda$; a locally integrable $f$ defines the regular distribution $u_f(\varphi)=\int_If\varphi\,d\lambda$ ([[def-distribution]], [[def-distributional-derivative]], [[def-dirac-delta-and-its-derivatives]], [[def-test-function-space-d-of-an-open-set]], [[def-regular-distribution-from-a-locally-integrable-function]], [[def-locally-integrable-function-on-r-n]], [[def-integral-over-a-measurable-set]]).

[L2] Complex Lebesgue integration by parts: for complex $C^1$ functions $u,v$ on a closed interval $[a,b]$, $a<b$, one has $\int_a^bu'v=u(b)v(b)-u(a)v(a)-\int_a^buv'$ and $\int_a^bu'=u(b)-u(a)$ ([[lem-complex-integration-by-parts-on-intervals-and-decaying-lines]]).

[L3] Functions agreeing almost everywhere have the same integral over every measurable set, and the Lebesgue integral is linear on $L^1$ ([[thm-the-lebesgue-integral-respects-almost-everywhere-equality]], [[thm-linearity-of-the-lebesgue-integral-on-l-one]]); a bounded real function on a closed bounded interval that is continuous except at finitely many points is Riemann integrable, and a bounded Borel Riemann integrable function on a box is Lebesgue integrable with the same integral ([[thm-finitely-many-discontinuities-integrable]], [[lem-riemann-lebesgue-comparison-for-distribution-test-integrands]]); every continuous real function on $\mathbb R$ is Borel measurable, so preimages of Borel sets under it are Borel ([[cor-continuous-functions-are-borel-measurable]], [[def-borel-and-lebesgue-measurable-function-on-rn]]).

## Proof

**Proof technique:** direct.

1.1 Local integrability: let $K\subseteq I$ be compact and nonempty. The chosen compact interval $K$ meets $\{t_*\}$ or not. If $t_*\notin K$, then $p$ is continuous on $K$; if $t_*\in K$, choose $c<t_*<d$ with $K\subseteq[c,d]\subseteq I$ (possible since $I$ is open and $t_*\in I$), and extend $p$ to $q:[c,d]\to\mathbb R$ by $q(t):=p(t)$ for $t\ne t_*$ and $q(t_*):=p(t_*^-)$. Then $q$ is bounded (continuity off $t_*$ plus the one-sided limits). For Borel measurability, extend the two half-interval readings to continuous functions on $\mathbb R$: $P_-(t):=p(c)$ for $t\le c$, $P_-(t):=p(t)$ for $c<t<t_*$, $P_-(t):=p(t_*^-)$ for $t\ge t_*$, and $P_+(t):=p(t_*^+)$ for $t\le t_*$, $P_+(t):=p(t)$ for $t_*<t<d$, $P_+(t):=p(d)$ for $t\ge d$. Each is continuous on $\mathbb R$ (at $c$ and $d$ by continuity of $p$ there, at $t_*$ by the respective one-sided limit), hence Borel measurable by [L3]. Therefore, for every Borel set $B\subseteq\mathbb R$, the identity $q^{-1}(B)=\bigl(P_-^{-1}(B)\cap[c,t_*]\bigr)\cup\bigl(P_+^{-1}(B)\cap(t_*,d]\bigr)$ exhibits $q^{-1}(B)$ as a finite union of Borel sets, so $q$ is Borel measurable; the value at the single point $t_*$ affects neither measurability nor the integral. Since $q=p$ off the single point $t_*$, [L3] gives $\int_K|p|\,d\lambda=\int_K|q|\,d\lambda\le\int_{[c,d]}|q|\,d\lambda<+\infty$: $|q|$ is a bounded Borel function that is continuous except possibly at one point, hence Riemann integrable and Lebesgue integrable with the same integral by [L3]. The same argument applies to $p'_{\mathrm{reg}}$, whose one-sided limits exist by hypothesis, so $p,p'_{\mathrm{reg}}\in L^1_{\mathrm{loc}}(I)$ and $u_p,u_{p'_{\mathrm{reg}}}$ are regular distributions. [given, L1, L3]


1.2 Let $\varphi\in\mathcal D(I)$ be real-valued and choose $\delta>0$ with $\operatorname{supp}\varphi\subseteq[t_*-\delta,t_*+\delta]\subseteq I$; shrinking $\delta$ we may also assume $t_*-\delta,t_*+\delta\in I$. Since $\varphi$ vanishes outside $[t_*-\delta,t_*+\delta]$, [L1] and [L3] give $$\int_Ip\varphi'\,d\lambda=\int_{[t_*-\delta,\,t_*+\delta]}p\varphi'\,d\lambda=\int_{[t_*-\delta,\,t_*]}p\varphi'\,d\lambda+\int_{[t_*,\,t_*+\delta]}p\varphi'\,d\lambda,$$ the second equality splitting the integral over the two overlapping half-intervals by linearity and the identity $\chi_{[t_*-\delta,t_*+\delta]}=\chi_{[t_*-\delta,t_*]}+\chi_{[t_*,t_*+\delta]}-\chi_{\{t_*\}}$ (the subtracted term contributes $0$ because $\{$a point$\}$ has measure zero). [given, L1, L2, L3, algebra]


2.1 On the left half-interval define $\bar p_-(t):=p(t)$ for $t<t_*$ and $\bar p_-(t_*):=p(t_*^-)$; on $[t_*-\delta,t_*]$ this is $C^1$ with derivative extending $p'$ (whose one-sided limit exists), and $p=\bar p_-$ there except at the single point $t_*$. Hence by [L3] $\int_{[t_*-\delta,t_*]}p\varphi'\,d\lambda=\int_{t_*-\delta}^{t_*}\bar p_-\varphi'\,d\lambda$, and the Lebesgue integration by parts [L2] for the $C^1$ pair $(\bar p_-,\varphi)$ on $[t_*-\delta,t_*]$ gives $$\int_{t_*-\delta}^{t_*}\bar p_-\varphi'=\bar p_-(t_*)\varphi(t_*)-\bar p_-(t_*-\delta)\varphi(t_*-\delta)-\int_{t_*-\delta}^{t_*}\bar p_-'\varphi=p(t_*^-)\varphi(t_*)-\int_{[t_*-\delta,t_*]}p'_{\mathrm{reg}}\varphi\,d\lambda,$$ because $\varphi$ vanishes at $t_*-\delta$ and $\bar p_-'=p'_{\mathrm{reg}}$ on $(t_*-\delta,t_*)$. [step 1.2, given, L2, L3, algebra]


2.2 The same computation on the right half-interval with the extension $\bar p_+(t):=p(t)$ for $t>t_*$, $\bar p_+(t_*):=p(t_*^+)$ gives $$\int_{[t_*,t_*+\delta]}p\varphi'\,d\lambda=\int_{t_*}^{t_*+\delta}\bar p_+\varphi'\,d\lambda=\bar p_+(t_*+\delta)\varphi(t_*+\delta)-\bar p_+(t_*)\varphi(t_*)-\int_{t_*}^{t_*+\delta}\bar p_+'\varphi=-p(t_*^+)\varphi(t_*)-\int_{[t_*,t_*+\delta]}p'_{\mathrm{reg}}\varphi\,d\lambda.$$ [step 1.2, given, L2, L3, algebra]


3.1 Adding the two identities of steps 2.1 and 2.2 and substituting into step 1.2 gives $$\int_Ip\varphi'\,d\lambda=-\bigl(p(t_*^+)-p(t_*^-)\bigr)\varphi(t_*)-\int_Ip'_{\mathrm{reg}}\varphi\,d\lambda=-[p]\,\varphi(t_*)-\int_Ip'_{\mathrm{reg}}\varphi\,d\lambda,$$ that is, $\langle(u_p)',\varphi\rangle=-\int_Ip\varphi'\,d\lambda=\int_Ip'_{\mathrm{reg}}\varphi\,d\lambda+[p]\varphi(t_*)=\langle u_{p'_{\mathrm{reg}}}+[p]\delta_{t_*},\varphi\rangle$ for every real-valued $\varphi\in\mathcal D(I)$ by [L1]. Since both sides are complex-linear in $\varphi$, the identity extends to all $\varphi\in\mathcal D(I)$ by applying it to $\operatorname{Re}\varphi$ and $\operatorname{Im}\varphi$; hence $(u_p)'=u_{p'_{\mathrm{reg}}}+[p]\delta_{t_*}$ in $\mathcal D'(I)$. [step 2.1, step 2.2, L1, L3, algebra] ∎
