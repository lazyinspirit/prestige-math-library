---
id: thm-marcinkiewicz-interpolation-for-weak-one-one-and-strong-infinity
kind: theorem
title: "Marcinkiewicz interpolation from weak $(1,1)$ and strong $(\\infty,\\infty)$"
status: published
origin: session
landmark: true
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-sublinear-operator-weak-and-strong-type-p-q, def-distribution-function-of-absolute-value, thm-layer-cake-formula-for-l-p-powers]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
sources:
  references:
    - title: "Gerald B. Folland, Real Analysis: Modern Techniques and Their Applications, 2nd ed., Theorem 6.28"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
    - title: "Richard F. Bass, Real Analysis for Graduate Students, Chapter 24.1"
      url: "https://www.math.wustl.edu/~victor/classes/ma5051/rags100514.pdf"
---

## Statement

Let $(X,\mathcal{A},\mu)$ be a measure space, let $T$ be a sublinear operator
on measurable functions, and suppose:

1. $T$ is of weak type $(1,1)$ with constant $A$;
2. $T$ is of strong type $(\infty,\infty)$ with constant $B$.

Then for every $1<p<\infty$ and every $f\in L^p(\mu)$,
$$\|Tf\|_p\le 2\left(\frac{Ap}{p-1}\right)^{1/p}B^{1-1/p}\|f\|_p.$$
In particular, $T$ is of strong type $(p,p)$ for every $1<p<\infty$.

## Facts & Assumptions

**Given:** A measure space $(X,\mathcal{A},\mu)$, a sublinear operator $T$, constants $A,B\ge0$, an exponent $1<p<\infty$, and a function $f\in L^p(\mu)$.

[L1] Sublinearity, weak type $(1,1)$, and strong type $(\infty,\infty)$ are as defined in [[def-sublinear-operator-weak-and-strong-type-p-q]].

[L2] The distribution function of a measurable function $g$ is $$A_g(t)=\mu(\{|g|>t\}).$$ ([[def-distribution-function-of-absolute-value]])

[L3] For $0<p<\infty$, $$\int |g|^p\,d\mu=p\int_0^\infty t^{p-1}\mu(\{|g|>t\})\,dt$$ for every measurable $g$. ([[thm-layer-cake-formula-for-l-p-powers]])

## Proof

**Proof technique:** direct.

1.1 Fix $t>0$ and $\eta>0$, and put $C:=B+\eta>0$. Since the strong [L1, given, construct, algebra] $(\infty,\infty)$ bound with constant $B$ also holds with the larger constant $C$, split $$f=f_t^{>}+f_t^{\le},\qquad f_t^{>}:=f\,\mathbf{1}_{\{|f|>t/(2C)\}},\qquad f_t^{\le}:=f\,\mathbf{1}_{\{|f|\le t/(2C)\}}.$$ Sublinearity gives $$|Tf|\le |Tf_t^{>}|+|Tf_t^{\le}|.$$ Since $\|f_t^{\le}\|_\infty\le t/(2C)$, the strong $(\infty,\infty)$ bound with constant $C$ yields $$|Tf_t^{\le}|\le C\|f_t^{\le}\|_\infty\le t/2.$$ Therefore $$\{|Tf|>t\}\subseteq\{|Tf_t^{>}|>t/2\}.$$ [L1, given, construct, algebra]

2.1 Apply the weak $(1,1)$ bound to $f_t^{>}$: [L1, step 1.1, algebra] $$\mu(\{|Tf|>t\})\le\mu(\{|Tf_t^{>}|>t/2\}) \le\frac{2A}{t}\|f_t^{>}\|_1 =\frac{2A}{t}\int_{\{|f|>t/(2C)\}}|f|\,d\mu.$$ [L1, step 1.1, algebra]

3.1 Using [L3] with $g=Tf$ and then step 2.1, [L2, L3, step 2.1, algebra] $$\|Tf\|_p^p =p\int_0^\infty t^{p-1}\mu(\{|Tf|>t\})\,dt \le 2Ap\int_0^\infty t^{p-2} \left(\int_{\{|f|>t/(2C)\}}|f|\,d\mu\right)dt.$$ [L2, L3, step 2.1, algebra]

4.1 The integrand in step 3.1 is nonnegative, so Tonelli's theorem for [step 3.1, algebra] nonnegative integrals lets us swap the order: $$\|Tf\|_p^p \le 2Ap\int_X |f(x)| \left(\int_0^{2C|f(x)|} t^{p-2}\,dt\right)d\mu(x).$$ Because $p>1$, $$\int_0^{2C|f(x)|} t^{p-2}\,dt=\frac{(2C|f(x)|)^{p-1}}{p-1},$$ so $$\|Tf\|_p^p \le \frac{2^pAp}{p-1}C^{p-1}\int_X|f|^p\,d\mu.$$ [step 3.1, algebra]

5.1 Taking $p$th roots in step 4.1 gives [step 4.1, algebra] $$\|Tf\|_p\le 2\left(\frac{Ap}{p-1}\right)^{1/p}C^{1-1/p}\|f\|_p.$$ Because $\eta>0$ was arbitrary, letting $\eta\downarrow0$ yields $$\|Tf\|_p\le 2\left(\frac{Ap}{p-1}\right)^{1/p}B^{1-1/p}\|f\|_p.$$ Thus $T$ is of strong type $(p,p)$ for every $1<p<\infty$. [step 4.1, algebra] ∎
