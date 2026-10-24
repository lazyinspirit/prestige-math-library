---
id: cor-uniqueness-comparison-and-order-preservation-for-entropy-solutions
kind: corollary
title: Uniqueness, comparison and order preservation of entropy solutions
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 5
justified_by: []
aliases: []
proof_strategy: direct
deps: [thm-kruzhkov-local-l1-contraction, def-kruzhkov-entropy-solution, lem-kato-inequality-for-two-entropy-solutions, thm-dominated-convergence, thm-monotone-convergence-for-the-integral, def-l-p-space-as-a-quotient-by-null-functions, def-abs-value, def-countable-choice]
sources:
  references:
    - title: "S. N. Kruzhkov, “First order quasilinear equations in several independent variables,” Mat. USSR-Sbornik 10 (1970), 217–243, complete English translation"
      url: "https://www.mathnet.ru/links/c11e6b0d0e3edba28696e58d4e1fd4db/sm3372_eng.pdf"
      locator: "§3, Theorems 1–3, especially the monotone-dependence estimate (3.16), pp. 222–229"
    - title: "G. A. Chechkin and A. Yu. Goritsky (translated by B. Andreianov), “S. N. Kruzhkov’s lectures on first-order quasilinear PDEs,” in Analytical and Numerical Aspects of PDEs, de Gruyter 2009, complete lecture-notes text"
      url: "https://www.math.ntnu.no/conservation/2009/011.pdf"
      locator: "§5.5, pp. 46–48"
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume Countable Choice ([[def-countable-choice]]) for the analytic prerequisites used below.

Let $n\ge1$, $T>0$ and let $f\colon\mathbb R\to\mathbb R^n$ be $C^1$ (hence Lipschitz on bounded intervals).

(i) If $u,v$ are bounded Kruzhkov entropy solutions on $\Pi_T$ in the sense of
[[def-kruzhkov-entropy-solution]] with $|u|,|v|\le M$ and $u_0\le v_0$ almost
everywhere, then $u\le v$ almost everywhere on $\Pi_T$.

(ii) There is at most one bounded Kruzhkov entropy solution with a given initial
datum $u_0\in L^\infty\cap L^1_{\mathrm{loc}}$; if $u_0=v_0$ almost everywhere
on the whole of $\mathbb R^n$, then $u=v$ almost everywhere on $\Pi_T$.

(iii) The positive part contracts:
$\int_{\mathbb R^n}\bigl(u(t,\cdot)-v(t,\cdot)\bigr)_+\,dx\le\int_{\mathbb R^n}(u_0-v_0)_+\,dx$
for almost every $t\in(0,T)$ whenever both sides are finite
([[def-abs-value]], [[def-l-p-space-as-a-quotient-by-null-functions]]).

## Facts & Assumptions

**Given:** Countable Choice, $n\ge1$, $T>0$, a $C^1$ flux $f$, bounded Kruzhkov entropy solutions $u,v$ on $\Pi_T$ with common essential bound $M$, and a constant $L\ge0$ with $|f(a)-f(b)|\le L|a-b|$ for $a,b\in[-M,M]$.

[F1] Entropy solutions are distributional weak solutions: $\partial_t(u-v)+\operatorname{div}_x\bigl(f(u)-f(v)\bigr)=0$ in $\mathcal D'(\Pi_T)$; moreover each of $u,v$ has the strong local $L^1$ initial trace: for every compact $K\subseteq\mathbb R^n$, $\operatorname*{ess\,sup}_{0<t<\delta}\int_K|u(t,x)-u_0(x)|\,dx\to0$ as $\delta\downarrow0$, and likewise for $v$ ([[def-kruzhkov-entropy-solution]]).

[F2] Kato's inequality: $\partial_t|u-v|+\operatorname{div}_x\bigl(\operatorname{sgn}(u-v)(f(u)-f(v))\bigr)\le0$ in $\mathcal D'(\Pi_T)$ ([[lem-kato-inequality-for-two-entropy-solutions]]).

[F3] Positive-part identities: for every $r\in\mathbb R$, $(r)_+=\tfrac12(|r|+r)$ and $\mathbf 1_{\{r>0\}}=\tfrac12(\operatorname{sgn}(r)+1)$ for $r\ne0$; at $u=v$ the flux difference is zero, so the flux identity remains valid with $\operatorname{sgn}(0)=0$, so adding [F1] and [F2] gives $\partial_t(u-v)_++\operatorname{div}_x\bigl(\mathbf 1_{\{u>v\}}(f(u)-f(v))\bigr)\le0$ in $\mathcal D'(\Pi_T)$; writing $w=(u-v)_+$ and $q=\mathbf 1_{\{u>v\}}(f(u)-f(v))$, the Lipschitz hypothesis gives $|q|\le Lw$ almost everywhere, since $|u|,|v|\le M$ and $f$ is $L$-Lipschitz on $[-M,M]$ ([[def-abs-value]]).

[F4] Cutoff machinery of [[thm-kruzhkov-local-l1-contraction]]: for $t_3\in(0,T)$ with $Lt_3<R$ and $0<\sigma<R-Lt_3$ there is a smooth nonincreasing $\beta_\sigma$ with $\beta_\sigma=1$ on $(-\infty,R-\sigma]$ and $\beta_\sigma=0$ on $[R,\infty)$, and $\Phi_\sigma(t,x)=\beta_\sigma(|x-x_0|+Lt)$ satisfies $\partial_t\Phi_\sigma+L|\nabla_x\Phi_\sigma|=0$, is compactly supported in $x$, and is admissible as a test factor on $(0,t_3)$; for $w\ge0$ with strong local $L^1$ initial trace $w_0$ and $|q|\le Lw$, testing $\partial_tw+\operatorname{div}_xq\le0$ against $\eta\Phi_\sigma$ and letting $\sigma\downarrow0$ along a decreasing sequence yields $\int_{B(x_0,R-Lt)}w(t,x)\,dx\le\int_{B(x_0,R)}w_0(x)\,dx$ for almost every $t\in(0,T)$ with $Lt<R$; the argument uses Lebesgue points of $t\mapsto\int w\Phi_\sigma$, monotone and dominated convergence ([[thm-dominated-convergence]], [[thm-monotone-convergence-for-the-integral]], [[def-l-p-space-as-a-quotient-by-null-functions]]).

## Proof

**Proof technique:** direct.

1.1 **The positive-part inequality.** By [F1] and [F2], the sum of the weak equation for $(u-v)$ and Kato's inequality is the distributional inequality $\partial_tw+\operatorname{div}_xq\le0$ with $w=(u-v)_+$ and $q=\mathbf 1_{\{u>v\}}(f(u)-f(v))$ by the identities of [F3], and $|q|\le Lw$ almost everywhere. [F1, F2, F3]


2.1 **Local positive-part estimate.** Apply the cutoff computation [F4] to the pair $(w,q)$ of step 1.1 with any centre $x_0$ and radius $R$: $\int_{B(x_0,R-Lt)}(u-v)_+(t,x)\,dx\le\int_{B(x_0,R)}(u_0-v_0)_+(x)\,dx$ for almost every $t\in(0,T)$ with $Lt<R$. Indeed the structural hypotheses of [F4] are met: the strong local $L^1$ trace of $w$ at $0$ is $w_0=(u_0-v_0)_+$ because $|w(t,x)-w_0(x)|\le|u(t,x)-u_0(x)|+|v(t,x)-v_0(x)|$ almost everywhere, the positive part being $1$-Lipschitz, and $|q|\le Lw$ holds by step 1.1; the cutoff, Lebesgue-point, initial-trace and $\sigma\downarrow0$ steps are those of the proof of [[thm-kruzhkov-local-l1-contraction]] with $|u-v|$ replaced by $(u-v)_+$. [F4, step 1.1]


3.1 **Order preservation.** Assume $u_0\le v_0$ almost everywhere, so $(u_0-v_0)_+=0$ almost everywhere and the right-hand side of step 2.1 vanishes for every centre and radius. Take centres $x_0=0$ and radii $R_m=LT+m$, $m\ge1$, so that $B(0,R_m-Lt)\supseteq B(0,m-LT)$ for every $t\in(0,T)$; intersecting the countably many full-measure sets of times supplied by step 2.1, for almost every $t\in(0,T)$ one has $\int_{B(0,m-LT)}(u-v)_+(t,x)\,dx=0$ for every $m$ with $m>LT$, hence $(u-v)_+(t,\cdot)=0$ almost everywhere on the union $\bigcup_mB(0,m-LT)=\mathbb R^n$. By Fubini, $(u-v)_+=0$ almost everywhere on $\Pi_T$, that is, $u\le v$ almost everywhere. [F4, step 2.1]


4.1 **Uniqueness.** If $u,v$ are bounded entropy solutions with the same datum $u_0=v_0$, then both $u_0\le v_0$ and $v_0\le u_0$ hold almost everywhere, so step 3.1 gives $u\le v$ and $v\le u$ almost everywhere on $\Pi_T$, whence $u=v$ almost everywhere. This proves both assertions of (ii). [step 3.1]


5.1 **Positive-part contraction.** Let $u,v$ be any two bounded entropy solutions with both integrals finite; step 2.1 with centre $0$ and radii $R_m=LT+m$ gives $\int_{B(0,R_m-Lt)}(u-v)_+\le\int_{B(0,R_m)}(u_0-v_0)_+\le\int_{\mathbb R^n}(u_0-v_0)_+<\infty$ for almost every $t$ outside a null set $N_m$. On the complement of the null set $\bigcup_mN_m$, all these inequalities hold, and monotone convergence over the increasing balls $B(0,R_m-Lt)\uparrow\mathbb R^n$ gives $\int_{\mathbb R^n}(u(t,\cdot)-v(t,\cdot))_+\,dx\le\int_{\mathbb R^n}(u_0-v_0)_+\,dx$, which is (iii). [F4, step 2.1] ∎
