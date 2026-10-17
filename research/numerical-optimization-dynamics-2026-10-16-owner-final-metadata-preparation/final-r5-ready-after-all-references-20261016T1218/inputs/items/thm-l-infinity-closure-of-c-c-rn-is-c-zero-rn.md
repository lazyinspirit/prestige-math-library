---
id: thm-l-infinity-closure-of-c-c-rn-is-c-zero-rn
kind: theorem
title: "The $L^\\infty$-closure of $C_c(\\mathbb{R}^n)$ is $C_0(\\mathbb{R}^n)$, not all of $L^\\infty(\\mathbb{R}^n)$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-c-c-and-c-c-infinity-on-rn, def-c-zero-on-rn, lem-a-compact-set-inside-a-bounded-open-set-admits-an-explicit-compactly-supported-cutoff]
landmark: false
proof_strategy: "Use explicit cutoffs to approximate every $C_0$ function uniformly by compactly supported ones, and note that on continuous compactly supported functions the $L^\\infty$ norm is the supremum norm. Uniform limits of such functions stay continuous and vanish at infinity."
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Walter Rudin, Real and Complex Analysis, 3rd ed."
      url: "https://perso.telecom-paristech.fr/decreuse/_downloads/c22155fef582344beb326c1f44f437d2/rudin.pdf"
---
## Statement

Inside $L^\infty(\mathbb{R}^n)$ with the essential-supremum norm, the closure of
$C_c(\mathbb{R}^n)$ is exactly $C_0(\mathbb{R}^n)$. In particular it is not all
of $L^\infty(\mathbb{R}^n)$.

## Facts & Assumptions

**Given:** The spaces $C_c(\mathbb{R}^n)$ and $C_0(\mathbb{R}^n)$.

[L1] Continuous compactly supported functions and functions vanishing at infinity are defined in [[def-c-c-and-c-c-infinity-on-rn]] and [[def-c-zero-on-rn]].

[L2] There is an explicit compactly supported cutoff equal to $1$ on a large ball ([[lem-a-compact-set-inside-a-bounded-open-set-admits-an-explicit-compactly-supported-cutoff]]).

## Proof

**Proof technique:** direct.

1.1 Let $f \in C_0(\mathbb{R}^n)$ and $\varepsilon > 0$. By [L1], choose [L1, L2, given, choose, algebra] $R > 0$ so that $|f(x)| < \varepsilon$ for $|x| \ge R$. Apply [L2] to $K = \overline{B(0,R)} \subseteq O = B(0,R+1)$ and let $\eta \in C_c$ be the corresponding cutoff. Then $\eta f \in C_c(\mathbb{R}^n)$ and $$ \|f-\eta f\|_\infty \le \varepsilon. $$ So every $C_0$ function lies in the closure of $C_c$. [L1, L2, given, choose, algebra]

2.1 Conversely, let $(f_m)$ be a sequence in $C_c(\mathbb{R}^n)$ converging to [step 1.1, given, choose, algebra] $f$ in the essential-supremum norm. Then $(f_m)$ is Cauchy in the actual supremum norm, because for continuous functions the essential supremum equals the ordinary supremum. Hence $(f_m)$ converges uniformly to some continuous function $g$. For each $m$, the tail estimate outside $\operatorname{supp}(f_m)$ shows $g$ is uniformly small there, so $g \in C_0(\mathbb{R}^n)$. [step 1.1, given, choose, algebra]

3.1 After passing to a subsequence, arrange [step 2.1, given, choose, algebra] $$ \|f-f_m\|_\infty^{\mathrm{ess}} < 2^{-m}. $$ For each $m$ there is a null set $N_m$ such that $|f-f_m|\le 2^{-m}$ on $\mathbb{R}^n\setminus N_m$. On the full-measure set $\mathbb{R}^n\setminus\bigcup_m N_m$, one therefore has $f_m(x)\to f(x)$, while uniform convergence gives $f_m(x)\to g(x)$ for every $x$. Thus $f=g$ almost everywhere, so the $L^\infty$ class of $f$ is represented by $g\in C_0(\mathbb{R}^n)$. [step 2.1, given, choose, algebra]

4.1 Steps 1.1, 2.1, and 3.1 identify the closure as $C_0(\mathbb{R}^n)$. Since the [step 1.1, step 2.1, step 3.1, algebra] constant function $1$ lies in $L^\infty(\mathbb{R}^n)$ but not in $C_0(\mathbb{R}^n)$, this closure is not all of $L^\infty(\mathbb{R}^n)$. [step 1.1, step 2.1, step 3.1, algebra] ∎
