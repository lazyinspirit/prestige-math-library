---
id: ex-spectrum-of-a-multiplication-operator
kind: example
title: Spectrum of a multiplication operator
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-spectrum-and-resolvent-set-in-a-banach-algebra, ex-bounded-operators-form-a-noncommutative-banach-algebra, def-l-p-space-as-a-quotient-by-null-functions, thm-the-l-p-norm-descends-to-the-quotient-and-makes-l-p-a-normed-space, thm-riesz-fischer-completeness-of-l-p, lem-complex-lp-completeness-density-and-inner-product, def-countable-choice, def-axiom-of-choice]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Theo Bühler and Dietmar A. Salamon, Functional Analysis — Example 5.17 and §5.2.1, printed pp. 220–222"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
verification:
  audited: 2026-09-22
---

## Example

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $(X,\mathcal A,\mu)$ be
a nonzero $\sigma$-finite measure space and let $m : X \to \mathbb C$ be
measurable and essentially bounded, with

$$\|m\|_\infty := \inf\{\,M \ge 0 : |m(x)| \le M \text{ for almost every } x\,\}.$$

On the complex Hilbert space $L^2(\mu)$
([[def-l-p-space-as-a-quotient-by-null-functions]],
[[thm-the-l-p-norm-descends-to-the-quotient-and-makes-l-p-a-normed-space]],
[[thm-riesz-fischer-completeness-of-l-p]]) the multiplication operator
$M_m[f] := [mf]$ is bounded with $\|M_m\| \le \|m\|_\infty$, and

$$\sigma(M_m) = \operatorname{essran}(m) := \{\,\lambda \in \mathbb C : \mu(\{|m-\lambda| < \varepsilon\}) > 0 \text{ for every } \varepsilon > 0\,\},$$

the spectrum taken in $\mathcal B(L^2(\mu))$
([[ex-bounded-operators-form-a-noncommutative-banach-algebra]],
[[def-spectrum-and-resolvent-set-in-a-banach-algebra]]). If $\mu$ is the zero
measure then $L^2(\mu) = \{0\}$ is not a nonzero algebra and the spectral
convention of this page does not apply.

## Facts & Assumptions

**Given:** The Axiom of Choice, a nonzero $\sigma$-finite measure space $(X,\mathcal A,\mu)$, an essentially bounded measurable $m$, and the operator $M_m$ on $L^2(\mu)$.

[L1] $L^2(\mu)$ is a complex Banach space of almost-everywhere equivalence classes, with $\|[f]\|_2 = \|f\|_2$; convergence in norm and equality of classes are as in [[thm-the-l-p-norm-descends-to-the-quotient-and-makes-l-p-a-normed-space]], [[thm-riesz-fischer-completeness-of-l-p]] and [[lem-complex-lp-completeness-density-and-inner-product]] ([[def-l-p-space-as-a-quotient-by-null-functions]]).

[L2] Elements of $L^2$ are equivalence classes modulo a.e. equality; quotient operations are induced by pointwise operations ([[def-l-p-space-as-a-quotient-by-null-functions]]). The multiplier estimate and composition identities will be proved on representatives below.

[L3] If $T$ is invertible then $T$ is bounded below: $\|x\| = \|T^{-1}Tx\| \le \|T^{-1}\|\,\|Tx\|$; and an operator that is not bounded below is not invertible ([[def-spectrum-and-resolvent-set-in-a-banach-algebra]]).

[L4] Under AC the bounded operators on a nonzero complex Banach space form a unital complex Banach algebra with composition as multiplication ([[ex-bounded-operators-form-a-noncommutative-banach-algebra]]).

[L5] Assume AC ([[def-axiom-of-choice]]), which includes choice for families indexed by $\mathbb N$ ([[def-countable-choice]]). Fix a sigma-finite cover and replace it by its finite partial unions to obtain increasing measurable sets $E_k$ with finite measure and union $X$.

## Verification

**Proof technique:** direct.

1.1 Put $r=\|m\|_\infty$. Each set $N_j=\{|m|>r+1/j\}$ is null: by the definition of the infimum there is an a.e. bound strictly below $r+1/j$. A countable union of measurable null sets is null, by disjointifying the union and applying countable additivity. Outside $\bigcup_{j\ge1}N_j$, $|m|\le r$. For any measurable $f$ of finite squared integral, the nonnegative integral therefore gives $\int|mf|^2\le r^2\int|f|^2$. Thus multiplication defines a bounded linear map $M_m[f]=[mf]$, independent of representatives by [L2]. The same reasoning applies to every essentially bounded measurable symbol $h$. If $h,k$ are such symbols, then on every class $M_hM_k[f]=[h(kf)]=[(hk)f]=M_{hk}[f]$, and $M_1=I$; a general multiplier need not be the identity. Since the measure is nonzero, some $E_k$ from [L5] has positive measure (otherwise their union is null). Its indicator has nonzero finite $L^2$ norm. Hence $L^2$ is a nonzero complex Banach space by [L1], and [L4] supplies its operator algebra. AC is inherited from [L4] and supplies the Countable Choice required by [L1]. [L1, L2, L4, L5]

2.1 If $\lambda \notin \operatorname{essran}(m)$, then there is $\varepsilon > 0$ with $\mu(\{|m-\lambda|<\varepsilon\}) = 0$; hence $|m-\lambda| \ge \varepsilon$ almost everywhere and the measurable function $\phi := 1/(m-\lambda)$ on $\{|m-\lambda| \ge \varepsilon\}$ (arbitrary, say $0$, on the null complement) is essentially bounded by $1/\varepsilon$. By step 1.1 its multiplication operator satisfies $M_\phi(M_m - \lambda) = (M_m-\lambda)M_\phi = 1$ on classes. Thus $M_m-\lambda I$ is invertible, and so is its negative $\lambda I-M_m$, the shifted operator in [L3]; therefore $\lambda\in\rho(M_m)$. [step 1.1, L2, L4, L3]

2.2 If $\lambda \in \operatorname{essran}(m)$, then for every $n \ge 1$ the set $A_n := \{|m-\lambda| < 1/n\}$ has positive measure; since $X = \bigcup_kE_k$ with $\mu(E_k) < \infty$, some $A_n\cap E_k$ has positive measure, since otherwise their countable union $A_n$ would be null. Take the least such $k$; this deterministic choice uses no choice principle. [step 1.1, L5, algebra]

3.1 For this least $k$ the normalized indicator $f_n := \mu(A_n\cap E_k)^{-1/2}\mathbf 1_{A_n\cap E_k}$ is a unit vector in $L^2(\mu)$, and $\|(M_m-\lambda)f_n\|_2 \le (1/n)\|f_n\|_2 = 1/n \to 0$; hence $M_m-\lambda$ is not bounded below, so by [L3] neither it nor its negative is invertible and $\lambda \in \sigma(M_m)$. [step 2.2, L3, L1, algebra]

4.1 Steps [step 2.1] and [step 3.1] together give both inclusions, so $\sigma(M_m) = \operatorname{essran}(m)$; the boundedness assertion is [step 1.1]. [step 1.1, step 2.1, step 3.1] ∎
