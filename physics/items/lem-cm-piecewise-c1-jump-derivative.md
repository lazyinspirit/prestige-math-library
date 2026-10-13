---
id: lem-cm-piecewise-c1-jump-derivative
kind: lemma
title: "The distributional derivative of a piecewise $C^1$ function with a jump:
  $(u_p)'=u_{p'_{\\mathrm{reg}}}+[p]\\,\\delta_{t_*}$"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 0
deps:
  [
    cor-mean-value-theorem,
    def-regular-distribution-from-a-locally-integrable-function,
    def-locally-integrable-function-on-r-n,
    def-distributional-derivative,
    def-distribution,
    def-dirac-delta-and-its-derivatives,
    def-test-function-space-d-of-an-open-set,
    def-integral-over-a-measurable-set,
    def-borel-and-lebesgue-measurable-function-on-rn,
    def-countable-choice,
    prop-countable-subsets-of-rn-are-lebesgue-null,
    def-interval,
    prop-order-and-scalar-rules-for-the-nonnegative-integral,
    lem-complex-integration-by-parts-on-intervals-and-decaying-lines,
    thm-compact-subset-is-closed-and-bounded,
    thm-extreme-value-metric,
    thm-the-lebesgue-integral-respects-almost-everywhere-equality,
    thm-linearity-of-the-lebesgue-integral-on-l-one,
    thm-finitely-many-discontinuities-integrable,
    lem-riemann-lebesgue-comparison-for-distribution-test-integrands
  ]
dependency_roles:
  cor-mean-value-theorem: mathematical-premise
  def-regular-distribution-from-a-locally-integrable-function: mathematical-premise
  def-locally-integrable-function-on-r-n: mathematical-premise
  def-distributional-derivative: mathematical-premise
  def-distribution: mathematical-premise
  def-dirac-delta-and-its-derivatives: mathematical-premise
  def-test-function-space-d-of-an-open-set: mathematical-premise
  def-integral-over-a-measurable-set: mathematical-premise
  def-borel-and-lebesgue-measurable-function-on-rn: mathematical-premise
  def-countable-choice: mathematical-premise
  prop-countable-subsets-of-rn-are-lebesgue-null: mathematical-premise
  def-interval: mathematical-premise
  prop-order-and-scalar-rules-for-the-nonnegative-integral: mathematical-premise
  lem-complex-integration-by-parts-on-intervals-and-decaying-lines: mathematical-premise
  thm-compact-subset-is-closed-and-bounded: mathematical-premise
  thm-extreme-value-metric: mathematical-premise
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
    - title: "Semyon Dyatlov, Lecture notes for 18.155 (MIT, 2022): distributional
        differentiation and the jump of the Heaviside function (the source whose
        conventions the library distributions use)"
      url: "https://math.mit.edu/~dyatlov/18.155/155-notes.pdf"
    - title: "David Tong, Classical Dynamics (University of Cambridge), §1.2, printed
        p. 2: the variable-mass momentum remark and the caution that a finite
        force at each point does not by itself determine momentum jumps"
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

[L3] Functions agreeing almost everywhere have the same integral over every measurable set, and the Lebesgue integral is linear on $L^1$ ([[thm-the-lebesgue-integral-respects-almost-everywhere-equality]], [[thm-linearity-of-the-lebesgue-integral-on-l-one]]); a bounded real function on a closed bounded interval that is continuous except at finitely many points is Riemann integrable, and a bounded Borel Riemann integrable function on a box is Lebesgue integrable with the same integral ([[thm-finitely-many-discontinuities-integrable]], [[lem-riemann-lebesgue-comparison-for-distribution-test-integrands]]).

[L4] A real function continuous on $[a,b]$ and differentiable on $(a,b)$ has $f(b)-f(a)=f'(c)(b-a)$ for some $c\in(a,b)$. ([[cor-mean-value-theorem]])

[L5] A compact subset of the metric space $\mathbb R$ is closed, hence Borel, and under $\mathrm{AC}_\omega$ every singleton in $\mathbb R$ is Lebesgue-null ([[thm-compact-subset-is-closed-and-bounded]], [[prop-countable-subsets-of-rn-are-lebesgue-null]]).

[L6] For nonnegative measurable functions, pointwise order implies the same order of their Lebesgue integrals; with the integral-over-a-set convention, $E\subseteq F$ gives $\int_E h\,d\lambda\le\int_F h\,d\lambda$ ([[prop-order-and-scalar-rules-for-the-nonnegative-integral]], [[def-integral-over-a-measurable-set]]).

[L7] A continuous real function on a nonempty compact metric space is bounded and attains its bounds ([[thm-extreme-value-metric]]).

## Proof

**Proof technique:** direct.

1.1 Local integrability: put $I_-:=I\cap(-\infty,t_*)$ and $I_+:=I\cap(t_*,\infty)$. Both are open, and $p$ and $p'_{\mathrm{reg}}$ are continuous on each. For any open $O\subseteq\mathbb R$, the preimage on either half is open relative to that open half, hence open in $\mathbb R$; the preimage at $t_*$ is either empty or $\{t_*\}$. Thus both functions are Borel on $I$. Let $K\subseteq I$ be compact. If $K=\varnothing$, its integral is zero. Otherwise choose $c<t_*<d$ with $K\cup\{t_*\}\subset(c,d)$ and $[c,d]\subset I$. Extending each one-sided reading of $p$ and $p'_{\mathrm{reg}}$ to $t_*$ by its finite one-sided limit gives continuous functions on $[c,t_*]$ and $[t_*,d]$; [L7] bounds them there, and the fixed finite values at $t_*$ preserve boundedness. Hence $p$ and $p'_{\mathrm{reg}}$ are bounded on $[c,d]$, and their absolute values are Borel and continuous except possibly at $t_*$. By [L3] they are Riemann integrable and Lebesgue integrable on $[c,d]$. The set $K$ is Borel by [L5], and [L6] gives $\int_K|p|\,d\lambda\le\int_{[c,d]}|p|\,d\lambda<\infty$ and $\int_K|p'_{\mathrm{reg}}|\,d\lambda\le\int_{[c,d]}|p'_{\mathrm{reg}}|\,d\lambda<\infty$. Thus both functions are locally integrable and define the regular distributions in [L1]. [given, L1, L3, L5, L6, L7]


1.2 Let $\varphi\in\mathcal D(I)$ be real-valued. Choose $a<t_*<b$ with $\operatorname{supp}\varphi\cup\{t_*\}\subset(a,b)$ and $[a,b]\subset I$; compactness of the support and openness of $I$ allow this, without requiring a symmetric interval around $t_*$. Since $\varphi$ vanishes outside $[a,b]$, [L1] and [L3] give $$\int_Ip\varphi'\,d\lambda=\int_{[a,b]}p\varphi'\,d\lambda=\int_{[a,t_*]}p\varphi'\,d\lambda+\int_{[t_*,b]}p\varphi'\,d\lambda,$$ the second equality splitting the integral over the two overlapping half-intervals by linearity and the identity $\chi_{[a,b]}=\chi_{[a,t_*]}+\chi_{[t_*,b]}-\chi_{\{t_*\}}$ (the subtracted term contributes $0$ because the singleton $\{t_*\}$ has measure zero). [given, L1, L2, L3, L5, algebra]


2.1 On the left half-interval define $\bar p_-(t):=p(t)$ for $t<t_*$ and $\bar p_-(t_*):=p(t_*^-)$; on $[a,t_*]$ this extension is continuous. For $t<t_*$, the mean value theorem [L4] on $[t,t_*]$ gives $(\bar p_-(t_*)-\bar p_-(t))/(t_*-t)=p'(\xi_t)$ for some $t<\xi_t<t_*$. As $t\uparrow t_*$ this tends to $p'(t_*^-)$, proving the endpoint derivative. Its derivative is continuous up to $t_*$; extend beyond $t_*$ by the affine function $p(t_*^-)+p'(t_*^-)(t-t_*)$ to obtain a $C^1$ function on an open neighborhood of $[a,t_*]$. On $[a,t_*]$, $p$ and $\bar p_-$ agree except at $t_*$, so [L3] and [L5] give $\int_{[a,t_*]}p\varphi'\,d\lambda=\int_a^{t_*}\bar p_-\varphi'\,d\lambda$. Lebesgue integration by parts [L2] for the $C^1$ pair $(\bar p_-,\varphi)$ gives $$\int_a^{t_*}\bar p_-\varphi'=\bar p_-(t_*)\varphi(t_*)-\bar p_-(a)\varphi(a)-\int_a^{t_*}\bar p_-'\varphi=p(t_*^-)\varphi(t_*)-\int_{[a,t_*]}p'_{\mathrm{reg}}\varphi\,d\lambda,$$ because $\varphi(a)=0$ and $\bar p_-'=p'_{\mathrm{reg}}$ on $(a,t_*)$; the last integrals agree by [L3] and [L5]. [step 1.2, given, L2, L3, L4, L5, algebra]


2.2 On the right half-interval define $\bar p_+(t):=p(t)$ for $t>t_*$ and $\bar p_+(t_*):=p(t_*^+)$. The mean value theorem [L4] on $[t_*,t]$ shows that the right derivative of $\bar p_+$ at $t_*$ is $p'(t_*^+)$; extending affinely to the left gives a $C^1$ function on a neighborhood of $[t_*,b]$. Since $p$ and $\bar p_+$, and $p'_{\mathrm{reg}}$ and $\bar p_+'$, agree except at $t_*$, [L3] and [L5] give equality of their integrals against the tests on $[t_*,b]$. Integration by parts [L2], together with $\varphi(b)=0$, now gives $$\int_{[t_*,b]}p\varphi'\,d\lambda=\int_{t_*}^{b}\bar p_+\varphi'\,d\lambda=\bar p_+(b)\varphi(b)-\bar p_+(t_*)\varphi(t_*)-\int_{t_*}^{b}\bar p_+'\varphi=-p(t_*^+)\varphi(t_*)-\int_{[t_*,b]}p'_{\mathrm{reg}}\varphi\,d\lambda.$$ [step 1.2, given, L2, L3, L4, L5, algebra]


3.1 Adding the two identities of steps 2.1 and 2.2 and substituting into step 1.2 gives $$\int_Ip\varphi'\,d\lambda=-\bigl(p(t_*^+)-p(t_*^-)\bigr)\varphi(t_*)-\int_Ip'_{\mathrm{reg}}\varphi\,d\lambda=-[p]\,\varphi(t_*)-\int_Ip'_{\mathrm{reg}}\varphi\,d\lambda,$$ that is, $\langle(u_p)',\varphi\rangle=-\int_Ip\varphi'\,d\lambda=\int_Ip'_{\mathrm{reg}}\varphi\,d\lambda+[p]\varphi(t_*)=\langle u_{p'_{\mathrm{reg}}}+[p]\delta_{t_*},\varphi\rangle$ for every real-valued $\varphi\in\mathcal D(I)$ by [L1]. Since both sides are complex-linear in $\varphi$, the identity extends to all $\varphi\in\mathcal D(I)$ by applying it to $\operatorname{Re}\varphi$ and $\operatorname{Im}\varphi$; hence $(u_p)'=u_{p'_{\mathrm{reg}}}+[p]\delta_{t_*}$ in $\mathcal D'(I)$. [step 2.1, step 2.2, L1, L3, algebra] ∎
