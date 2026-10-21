---
id: lem-amsgrad-one-step-regret-inequality
kind: lemma
title: One-step regret inequality for AMSGrad
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - alg-amsgrad
  - lem-adaptive-moment-updates-well-defined
  - def-subgradient-and-subdifferential
  - def-euclidean-inner-product
  - thm-cauchy-schwarz-and-the-euclidean-norm
  - thm-of-square-roots
  - lem-of-square-positive
  - lem-of-zero-mult
  - def-ordered-field
  - lem-of-sign-rules
  - lem-of-inverse-positive
  - def-convex-subset-of-euclidean-space
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Sashank J. Reddi, Satyen Kale, and Sanjiv Kumar, On the Convergence of Adam and Beyond"
      url: "https://arxiv.org/pdf/1904.09237"
      locator: "Appendix D, projection inequality and the one-step inner-product bound, PDF pp. 15–16."
---

## Statement

At an AMSGrad round, let $F\subseteq\mathbb R^d$ be nonempty, compact, and convex, let $x_t,x_{t+1}\in F$, let $\ell_t:F\to\mathbb R$ be convex, and let $g_t\in\partial\ell_t(x_t)$. Take $\alpha_t>0$ and $\beta_{1,t}\in[0,1)$. Write $q_{t,i}=\sqrt{\widehat v_{t,i}}$, $Q_t=\operatorname{diag}(q_{t,1},\ldots,q_{t,d})$, and
$$\|z\|_{Q_t}^2:=\sum_iq_{t,i}z_i^2,\qquad E_t(z):=\sum_{i:q_{t,i}>0}\frac{z_i^2}{q_{t,i}},$$
with zero contribution from coordinates where $q_{t,i}=0$. For the AMSGrad update, every such zero coordinate has $m_{t,i}=m_{t-1,i}=0$. Then for every comparator $u\in F$,
$$\ell_t(x_t)-\ell_t(u)\le \frac{\|x_t-u\|_{Q_t}^2-\|x_{t+1}-u\|_{Q_t}^2}{2\alpha_t(1-\beta_{1,t})} +\frac{\alpha_t}{2(1-\beta_{1,t})}E_t(m_t) +\frac{\beta_{1,t}\alpha_t}{2(1-\beta_{1,t})}E_t(m_{t-1}) +\frac{\beta_{1,t}}{2\alpha_t(1-\beta_{1,t})}\|x_t-u\|_{Q_t}^2.$$

## Statement references

[[alg-amsgrad]]: defines the raw-moment recurrence, weighted minimization, and zero-coordinate convention.

[[lem-adaptive-moment-updates-well-defined]]: zero historical maximum implies zero current and previous first moments.

[[def-subgradient-and-subdifferential]]: a subgradient gives the supporting inequality for the loss.

[[thm-cauchy-schwarz-and-the-euclidean-norm]]: Cauchy–Schwarz and the Euclidean norm identities used in the weighted Young bound.

[Reddi, Kale, and Kumar, Appendix D](https://arxiv.org/pdf/1904.09237)

## Facts & Assumptions

**Given:** The AMSGrad state and update, a convex loss, a subgradient at $x_t$, a comparator $u\in F$, and $\alpha_t>0$, $\beta_{1,t}\in[0,1)$.

[F1] [[alg-amsgrad]]: $m_{t,i}=\beta_{1,t}m_{t-1,i}+(1-\beta_{1,t})g_{t,i}$, and $x_{t+1}$ minimizes the weighted squared distance from the specified $y_{t+1}$.

[F2] [[lem-adaptive-moment-updates-well-defined]]: $Q_t$ has finite nonnegative diagonal entries; if $q_{t,i}=0$, then $m_{t,i}=m_{t-1,i}=0$.

[F3] [[def-subgradient-and-subdifferential]]: $\ell_t(x_t)-\ell_t(u)\le\langle g_t,x_t-u\rangle$.

[F4] [[def-euclidean-inner-product]]: the inner product and squared weighted norms are finite coordinate sums.

[F5] [[thm-cauchy-schwarz-and-the-euclidean-norm]]: $|\langle a,b\rangle|\le\|a\|_2\|b\|_2$; in particular the finite weighted-coordinate form follows by applying it to $a_i=m_{t-1,i}/\sqrt{q_{t,i}}$ and $b_i=\sqrt{q_{t,i}}(x_{t,i}-u_i)$ on positive-weight coordinates.

[F6] [[def-convex-subset-of-euclidean-space]], [[thm-of-square-roots]], [[lem-of-square-positive]], [[lem-of-zero-mult]], [[def-ordered-field]], [[lem-of-sign-rules]], and [[lem-of-inverse-positive]]: segments between feasible points remain feasible; nonnegative coordinates have nonnegative roots; weighted squares are nonnegative; and division by a positive denominator preserves the displayed inequalities.

## Proof

**Given:** The state, update, convex loss, subgradient, comparator, and positive step size in the Statement.

1.1 Put $y_i=x_{t,i}-\alpha_t m_{t,i}/q_{t,i}$ when $q_{t,i}>0$ and $y_i=x_{t,i}$ otherwise. Let $p=x_{t+1}$, $D=\|u-p\|_{Q_t}^2\ge0$, and $c=\sum_i q_{t,i}(p_i-y_i)(u_i-p_i)$. Convexity of $F$ makes $p+s(u-p)\in F$ for $0<s\le1$. Minimality of $p$ gives $0\le2sc+s^2D$. If $c<0$, set $a=-c>0$ and $s=a/(D+a+1)$; then $0<s<1$ and $sD<a$, so $2sc+s^2D=s(-2a+sD)<-sa<0$, a contradiction. Thus $c\ge0$, and expansion of $\|u-y\|_{Q_t}^2$ yields $\|p-u\|_{Q_t}^2\le\|y-u\|_{Q_t}^2$. [F1, F2, F4, F6, given, algebra]

2.1 Expanding the right side from step 1.1 and using $m_{t,i}=0$ whenever $q_{t,i}=0$ gives $$\langle m_t,x_t-u\rangle\le\frac{\|x_t-u\|_{Q_t}^2-\|x_{t+1}-u\|_{Q_t}^2}{2\alpha_t}+\frac{\alpha_t}{2}E_t(m_t).$$ This follows coordinatewise from $y_i=x_{t,i}-\alpha_tm_{t,i}/q_{t,i}$ on positive weights; zero-weight coordinates contribute zero. [F1, F2, F4, F6, step 1.1, given, algebra]

3.1 Rearranging the first-moment recurrence in [F1] gives $$\langle g_t,x_t-u\rangle=\frac{\langle m_t,x_t-u\rangle-\beta_{1,t}\langle m_{t-1},x_t-u\rangle}{1-\beta_{1,t}}.$$ By [F2] zero-weight coordinates vanish; by [F5], weighted Cauchy–Schwarz on positive weights gives $|\langle m_{t-1},x_t-u\rangle|\le E_t(m_{t-1})^{1/2}\|x_t-u\|_{Q_t}$. For nonnegative $a,b$, $0\le(\sqrt{\alpha_t}a-b/\sqrt{\alpha_t})^2$ expands to $ab\le(\alpha_ta^2+b^2/\alpha_t)/2$, which bounds the negative cross term. Substituting step 2.1 and the subgradient inequality [F3] gives the stated four terms. [F1, F2, F3, F5, F6, step 2.1, given, algebra] ∎

