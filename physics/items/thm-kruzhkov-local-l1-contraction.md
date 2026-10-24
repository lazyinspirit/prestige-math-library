---
id: thm-kruzhkov-local-l1-contraction
kind: theorem
title: Local $L^1$ contraction for two entropy solutions
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 4
justified_by: []
aliases: []
proof_strategy: direct
deps: [lem-kato-inequality-for-two-entropy-solutions, def-kruzhkov-entropy-solution, def-lipschitz-holder-contraction, thm-dominated-convergence, lem-euclidean-bump-for-a-compact-set-inside-an-open-set, def-metric-ball, thm-lebesgue-differentiation-theorem-for-locally-integrable-functions-on-r-n, def-l-p-space-as-a-quotient-by-null-functions, def-countable-choice]
sources:
  references:
    - title: "S. N. Kruzhkov, “First order quasilinear equations in several independent variables,” Mat. USSR-Sbornik 10 (1970), 217–243, complete English translation"
      url: "https://www.mathnet.ru/links/c11e6b0d0e3edba28696e58d4e1fd4db/sm3372_eng.pdf"
      locator: "§3, Theorem 1 and its proof, pp. 222–228 (autonomous case)"
    - title: "Alberto Bressan, “Hyperbolic Conservation Laws: An Illustrated Tutorial,” 2009, complete lecture notes"
      url: "https://yulia-petrova.github.io/teaching/shocks/Bressan-tutorial.pdf"
      locator: "§6.1, Theorem 4, pp. 49–50"
    - title: "G. A. Chechkin and A. Yu. Goritsky (translated by B. Andreianov), “S. N. Kruzhkov’s lectures on first-order quasilinear PDEs,” in Analytical and Numerical Aspects of PDEs, de Gruyter 2009, complete lecture-notes text"
      url: "https://www.math.ntnu.no/conservation/2009/011.pdf"
      locator: "§5.5–6, pp. 46–52"
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

Assume Countable Choice. Let $n\ge1$, $T>0$, and $f\colon\mathbb R\to\mathbb R^n$
be $C^1$. Let $M,L\ge0$ and assume $|f(a)-f(b)|\le L|a-b|$ for all
$a,b\in[-M,M]$. Let $u,v$ be bounded Kruzhkov entropy solutions on $\Pi_T$ in
the sense of [[def-kruzhkov-entropy-solution]], with $|u|,|v|\le M$ almost
everywhere and initial data $u_0,v_0\in L^\infty\cap L^1_{\mathrm{loc}}$. For
each fixed $x_0\in\mathbb R^n$ and $R>0$, for almost every $t\in(0,T)$
satisfying $Lt<R$,
$$\int_{B(x_0,R-Lt)}|u(t,x)-v(t,x)|\,dx\le\int_{B(x_0,R)}|u_0(x)-v_0(x)|\,dx.$$
In particular, for each fixed $x_0,R$, if $u_0=v_0$ almost everywhere on
$B(x_0,R)$, then $u(t,\cdot)=v(t,\cdot)$ almost everywhere on $B(x_0,R-Lt)$ for
almost every $t$ with $Lt<R$. The exceptional null set may depend on $x_0$ and
$R$.

## Facts & Assumptions

**Given:** $n\ge1$, $T>0$, $f\in C^1(\mathbb R;\mathbb R^n)$, constants $M,L\ge0$ with $|f(a)-f(b)|\le L|a-b|$ on $[-M,M]$, bounded Kruzhkov entropy solutions $u,v$ on $\Pi_T$ with $|u|,|v|\le M$ almost everywhere and initial data $u_0,v_0\in L^\infty\cap L^1_{\mathrm{loc}}(\mathbb R^n)$, a centre $x_0\in\mathbb R^n$ and radius $R>0$, and the abbreviations $w=|u-v|$, $q=\operatorname{sgn}(u-v)\bigl(f(u)-f(v)\bigr)$.

[F1] Kato's inequality: for every nonnegative $\varphi\in C_c^\infty(\Pi_T)$, $\int_{\Pi_T}\bigl(w\,\varphi_t+q\cdot\nabla_x\varphi\bigr)\,dx\,dt\ge0$. Since $|u|,|v|\le M$ almost everywhere and $f$ is $L$-Lipschitz on $[-M,M]$, also $|q|\le Lw$ almost everywhere ([[lem-kato-inequality-for-two-entropy-solutions]], [[def-lipschitz-holder-contraction]], [[def-kruzhkov-entropy-solution]]).

[F2] Strong local $L^1$ initial traces: for every compact $K\subseteq\mathbb R^n$, $\lim_{\delta\downarrow0}\operatorname*{ess\,sup}_{0<t<\delta}\int_K|u(t,x)-u_0(x)|\,dx=0$, and the same holds for $v$ and $v_0$ ([[def-kruzhkov-entropy-solution]]).

[F3] Cutoff profiles: for every $\sigma>0$ there is a smooth nonincreasing $\beta_\sigma\colon\mathbb R\to[0,1]$ with $\beta_\sigma=1$ on $(-\infty,R-\sigma]$ and $\beta_\sigma=0$ on $[R,\infty)$, obtained by integrating a nonnegative smooth bump supported in $(R-\sigma,R)$; then $\beta_\sigma'\le0$ and $\Phi_\sigma(t,x)=\beta_\sigma(|x-x_0|+Lt)$ satisfies $\partial_t\Phi_\sigma+L|\nabla_x\Phi_\sigma|=0$ on the region where $|x-x_0|+Lt>R-\sigma$, and $\Phi_\sigma=1$ on the region where $|x-x_0|+Lt\le R-\sigma$; hence $\Phi_\sigma$ is smooth on the slab $0<t<t_3$ whenever $Lt_3<R-\sigma$, has compact spatial support contained in $B(x_0,R)$, and vanishes identically for $t\ge R/L$ if $L>0$ ([[lem-euclidean-bump-for-a-compact-set-inside-an-open-set]], [[def-metric-ball]]).

[F4] Slice functions: $F_\sigma(t)=\int_{\mathbb R^n}w(t,x)\Phi_\sigma(t,x)\,dx$ is well defined for almost every $t$ and locally integrable on its interval of definition, because $w$ is bounded and $\Phi_\sigma$ is bounded with compact spatial support; hence almost every point is a Lebesgue point of $F_\sigma$, and the intersection of countably many full-measure sets is again full measure. Dominated and monotone convergence justify limits of integrals with uniformly bounded integrands against fixed integrable functions ([[thm-lebesgue-differentiation-theorem-for-locally-integrable-functions-on-r-n]], [[thm-dominated-convergence]], [[def-l-p-space-as-a-quotient-by-null-functions]], [[def-countable-choice]]).

## Proof

**Proof technique:** direct.

1.1 **Cutoff inequalities on a time slab.** Fix $t_3\in(0,T)$ with $Lt_3<R$ — for $L>0$ such $t_3$ exist by taking $t_3<\min\{T,R/L\}$, and for $L=0$ every $t_3\in(0,T)$ works — and fix $\sigma\in(0,R-Lt_3)$. Let $\Phi_\sigma$ be as in [F3] and set $F_\sigma(t)=\int_{\mathbb R^n}w(t,x)\Phi_\sigma(t,x)\,dx$ and $G_\sigma(t)=\int_{\mathbb R^n}\bigl(w\,\partial_t\Phi_\sigma+q\cdot\nabla_x\Phi_\sigma\bigr)(t,x)\,dx$ for $t\in(0,t_3)$. Because $\beta_\sigma'\le0$ and [F3] holds, $G_\sigma\le\int_{\mathbb R^n}w\bigl(\partial_t\Phi_\sigma+L|\nabla_x\Phi_\sigma|\bigr)\,dx=0$ by [F1]. For nonnegative $\eta\in C_c^\infty((0,t_3))$ the function $\varphi=\eta\Phi_\sigma$ is an admissible nonnegative test function in [F1], since $\Phi_\sigma$ is smooth on the slab and compactly supported in $x$; hence $0\le\int_0^{t_3}\bigl(F_\sigma\eta'+G_\sigma\eta\bigr)\le\int_0^{t_3}F_\sigma\eta'$, that is, $\int_0^{t_3}F_\sigma\eta'\ge0$. [F1, F3, F4]


2.1 **Monotonicity in time.** Fix a nonnegative smooth bump $\zeta$ supported in $(0,1)$ with $\int_0^1\zeta=1$ and put $H(r)=\int_{-\infty}^r\zeta$. For $0<s<t<t_3$ and small $\varepsilon>0$, the function $\eta_\varepsilon(\tau)=H\bigl(\tfrac{\tau-s}{\varepsilon}\bigr)-H\bigl(\tfrac{\tau-t}{\varepsilon}\bigr)$ is admissible in step 1.1 and $\eta_\varepsilon'\to\delta_s-\delta_t$ as $\varepsilon\downarrow0$. At Lebesgue points $s<t$ of $F_\sigma$, step 1.1 gives $F_\sigma(s)-F_\sigma(t)=\lim_{\varepsilon\downarrow0}\int_0^{t_3}F_\sigma\eta_\varepsilon'\ge0$, so $F_\sigma(s)\ge F_\sigma(t)$ for all Lebesgue points $0<s<t<t_3$ of $F_\sigma$, a full-measure set of pairs by [F4]. [F4, step 1.1]


3.1 **The limit as $s\downarrow0$.** We claim $\operatorname*{ess\,lim}_{s\downarrow0}F_\sigma(s)=\int_{\mathbb R^n}|u_0(x)-v_0(x)|\,\beta_\sigma(|x-x_0|)\,dx$. Indeed, the difference is bounded by $\int_{B(x_0,R)}|u(s)-u_0|\,\beta_\sigma+\int_{B(x_0,R)}|v(s)-v_0|\,\beta_\sigma+\int_{\mathbb R^n}|u_0-v_0|\,\bigl|\beta_\sigma(|x-x_0|+Ls)-\beta_\sigma(|x-x_0|)\bigr|$; the first two terms tend to $0$ by [F2], since $\beta_\sigma$ is supported in $B(x_0,R)$, and the third tends to $0$ because $\beta_\sigma$ has bounded derivative and $|u_0-v_0|\in L^1_{\mathrm{loc}}$. Combining with step 2.1 and letting $s\downarrow0$ through Lebesgue points of $F_\sigma$, for almost every $t\in(0,t_3)$, $F_\sigma(t)\le\int_{\mathbb R^n}|u_0-v_0|\,\beta_\sigma(|x-x_0|)\,dx$. [F2, F4, step 2.1]


4.1 **Removing the cutoff.** Let $\sigma_j\downarrow0$ with $\sigma_j<R-Lt_3$ and intersect the full-measure sets of step 3.1 over all $j$ using [F4]: for almost every $t\in(0,t_3)$ the inequality of step 3.1 with $\sigma=\sigma_j$ holds for every $j$. For such $t$, $\beta_{\sigma_j}(|x-x_0|+Lt)\to\mathbf 1_{\{|x-x_0|<R-Lt\}}(x)$ pointwise away from the sphere $|x-x_0|=R-Lt$, and the corresponding integrands are dominated by $w(t,\cdot)\mathbf 1_{B(x_0,R)}$ respectively $|u_0-v_0|\mathbf 1_{B(x_0,R)}$, which are integrable; hence dominated convergence gives $\int_{B(x_0,R-Lt)}|u-v|(t,x)\,dx\le\int_{B(x_0,R)}|u_0-v_0|(x)\,dx$. Every $t\in(0,T)$ with $Lt<R$ lies in $(0,t_3)$ for some admissible $t_3$ — put $H=\min\{T,R/L\}$ for $L>0$, and $H=T$ for $L=0$, and use the explicit sequence $t_3^{(j)}=H(1-1/(j+1))\uparrow H$ — so the estimate holds for almost every such $t$, with exceptional set depending on $x_0,R$. If $u_0=v_0$ almost everywhere on $B(x_0,R)$ the right-hand side vanishes, so $u(t,\cdot)=v(t,\cdot)$ almost everywhere on $B(x_0,R-Lt)$ for almost every such $t$. [F4, step 3.1] ∎
## Remarks

The global $L^1$ estimate is [[cor-global-lone-contraction-from-the-local-kruzhkov-estimate]] ([[def-metric-ball]]).
