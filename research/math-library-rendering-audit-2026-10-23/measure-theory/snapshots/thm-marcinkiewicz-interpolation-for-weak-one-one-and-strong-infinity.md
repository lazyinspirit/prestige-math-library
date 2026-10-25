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
deps: [def-sublinear-operator-weak-and-strong-type-p-q, def-distribution-function-of-absolute-value, thm-layer-cake-formula-for-l-p-powers, thm-indefinite-integral-of-a-nonnegative-function-is-a-measure, thm-integration-against-a-density]
proof_strategy: direct
sources:
  references:
    - title: "Gerald B. Folland, Real Analysis: Modern Techniques and Their Applications, 2nd ed., Theorem 6.28"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
    - title: "Richard F. Bass, Real Analysis for Graduate Students, Chapter 24.1"
      url: "https://www.math.wustl.edu/~victor/classes/ma5051/rags100514.pdf"
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-03-receipts.jsonl (thm-marcinkiewicz-interpolation-for-weak-one-one-and-strong-infinity). No independent judge or whole-closure certification.
    delegated_by: owner
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

[L4] For nonnegative measurable $v$, the set function $\lambda(E)=\int_Ev\,d\mu$ is a measure, and $\int h\,d\lambda=\int hv\,d\mu$ for nonnegative measurable $h$. ([[thm-indefinite-integral-of-a-nonnegative-function-is-a-measure]], [[thm-integration-against-a-density]])

## Proof

**Proof technique:** direct.

1.1 Fix $t>0$ and $\eta>0$, and put $C:=B+\eta>0$. Since the strong [L1, given, construct, algebra] $(\infty,\infty)$ bound with constant $B$ also holds with the larger constant $C$, split $$f=f_t^{>}+f_t^{\le},\qquad f_t^{>}:=f\,\mathbf{1}_{\{|f|>t/(2C)\}},\qquad f_t^{\le}:=f\,\mathbf{1}_{\{|f|\le t/(2C)\}}.$$ Sublinearity gives $$|Tf|\le |Tf_t^{>}|+|Tf_t^{\le}|.$$ Since $\|f_t^{\le}\|_\infty\le t/(2C)$, the strong $(\infty,\infty)$ bound with constant $C$ yields $$|Tf_t^{\le}|\le C\|f_t^{\le}\|_\infty\le t/2.$$ Therefore $$\{|Tf|>t\}\subseteq\{|Tf_t^{>}|>t/2\}.$$ [L1, given, construct, algebra]

2.1 On $\{|f|>t/(2C)\}$ one has $|f|\le(2C/t)^{p-1}|f|^p$, so $f_t^{>}\in L^1$ because $f\in L^p$. Apply the weak $(1,1)$ bound: [L1, step 1.1, algebra] $$\mu(\{|Tf|>t\})\le\mu(\{|Tf_t^{>}|>t/2\}) \le\frac{2A}{t}\|f_t^{>}\|_1 =\frac{2A}{t}\int_{\{|f|>t/(2C)\}}|f|\,d\mu.$$ [L1, step 1.1, algebra]

3.1 Using [L3] with $g=Tf$ and then step 2.1, [L2, L3, step 2.1, algebra] $$\|Tf\|_p^p =p\int_0^\infty t^{p-1}\mu(\{|Tf|>t\})\,dt \le 2Ap\int_0^\infty t^{p-2} \left(\int_{\{|f|>t/(2C)\}}|f|\,d\mu\right)dt.$$ [L2, L3, step 2.1, algebra]

4.1 Define the positive measure $\lambda(E)=\int_E|f|\,d\mu$ by [L4]. Apply [L3] with exponent $p-1>0$, function $|f|$, and measure $\lambda$; then substitute $t=2Cu$ in the one-dimensional nonnegative integral from step 3.1. This gives $$\int_0^\infty t^{p-2}\lambda(\{|f|>t/(2C)\})\,dt=\frac{(2C)^{p-1}}{p-1}\int_X|f|^{p-1}\,d\lambda.$$ By [L4], the last integral is $\int_X|f|^p\,d\mu$. Hence $$\|Tf\|_p^p\le\frac{2^pAp}{p-1}C^{p-1}\int_X|f|^p\,d\mu.$$ This uses no sigma-finiteness assumption on $\mu$. [L3, L4, step 3.1, algebra]

5.1 Taking $p$th roots in step 4.1 gives [step 4.1, algebra] $$\|Tf\|_p\le 2\left(\frac{Ap}{p-1}\right)^{1/p}C^{1-1/p}\|f\|_p.$$ Because $\eta>0$ was arbitrary, letting $\eta\downarrow0$ yields $$\|Tf\|_p\le 2\left(\frac{Ap}{p-1}\right)^{1/p}B^{1-1/p}\|f\|_p.$$ Thus $T$ is of strong type $(p,p)$ for every $1<p<\infty$. [step 4.1, algebra] ∎
