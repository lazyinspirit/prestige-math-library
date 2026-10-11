---
id: ex-five-algebraic-proofs-of-bernoulli-and-rational-forms
kind: example
title: "Five finite proofs of Bernoulli, with rational exponents and the quadratic refinement"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-integer-power, lem-power-laws, lem-power-monotone, def-finite-sum, lem-finite-sum-laws, thm-induction-principle, thm-recursion, def-ordered-field, lem-of-add-order, lem-of-sign-rules, lem-of-square-positive, lem-of-zero-mult, lem-of-naturals-positive, lem-of-q-embeds, lem-of-inverse-positive, def-nat-order, thm-nat-linear-order, lem-nat-order-add-compatible, lem-nat-discrete, lem-bernoulli-inequality, lem-power-difference-factorisation, thm-am-gm, thm-weighted-am-gm-rational, def-rational-power, lem-rational-power-laws, lem-rational-power-monotone, lem-rat-positive-denominator, lem-nat-embeds-int, def-rat-order, def-int-order]
justified_by: []
aliases: []
landmark: false
dependency_level: 8
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Jim Belk, Convexity, Inequalities, and Norms (Cornell University)"
      url: "https://e.math.cornell.edu/people/belk/measuretheory/Inequalities.pdf"
      locator: "Theorem 5, pp. 5-6, weighted AM-GM statement and convexity/exponential proof. Only the statement is corroborating context here: the published rational-weight supplier supplies a complete finite proof, and the Bernoulli consequences below are derived locally. No exponential/convexity theorem is consumed."
---

## Example

Five proof routes verify the same integer statement: for $x \ge -1$ and a
natural $n$, $(1+x)^n \ge 1+nx$, with equality exactly when $n \le 1$ or
$x = 0$. The routes are ordinary induction, geometric-sum comparison, an exact
nonnegative supporting-line remainder, AM-GM, and a finite
binomial/positive-weight expansion. They cover $-1 \le x < 0$ as well as
$x \ge 0$; $0^0 = 1$ is the integer-power convention. In addition, with
rational $r$ and $x \ge -1$ (requiring $x > -1$ when $r < 0$),
$(1+x)^r \ge 1+rx$ for $r \ge 1$ or $r \le 0$, and $(1+x)^r \le 1+rx$ for
$0 \le r \le 1$. Equality is exactly $x = 0$ or $r \in \{0,1\}$. For rational
$r \ge 2$, the promised quadratic refinement follows in the stronger form
$(1+x)^r \ge 1+rx+(r/2)x^2$; hence it holds with any natural coefficient $m$
satisfying $2m \le r$, including the coefficient customarily written
$\lfloor r/2\rfloor$. For $1 \le r < 2$ that floor coefficient is zero and the
ordinary bound applies. The stronger refinement has equality exactly when
$x = 0$ or $r = 2$. At $x = -1$, the supplementary clause of
[[def-rational-power]] supplies $0^r = 0$ for rational $r > 0$, and
[[def-integer-power]] supplies $0^0 = 1$; negative powers of zero remain
undefined. No irrational exponent or exponential/general convexity theorem is
asserted.

## Facts & Assumptions

**Given:** A natural $n$ and a real $x \ge -1$, with $y := 1+x \ge 0$; rationally, a rational $r$ and the base $y > 0$.

[L1] Finite sums and products ([[def-finite-sum]], [[lem-finite-sum-laws]]): recursion clauses, splitting, additivity, scaling, constant sums and products, monotonicity, and the strict comparison obtained by splitting off one strictly larger term and adding the strict inequality of [L2].

[L2] Order arithmetic ([[def-ordered-field]], [[lem-of-add-order]], [[lem-of-sign-rules]]): the order is total and transitive, adding constants and adding strict inequalities preserve it, multiplication by a positive element preserves it and by a negative element reverses it.

[L3] Powers ([[def-integer-power]], [[lem-power-laws]], [[lem-power-monotone]]): $u^{0} = 1$, $u^{j+1} = u^{j}u$, $u^{m+n} = u^{m}u^{n}$, $(u^{m})^{n} = u^{mn}$, $(uv)^{n} = u^{n}v^{n}$; $u \ge 0$ gives $u^{j} \ge 0$; and $u \mapsto u^{j}$ is strictly increasing on the nonnegatives for $j \ge 1$.

[L4] Squares ([[lem-of-square-positive]], [[lem-of-zero-mult]]): $u^{2} > 0$ for $u \ne 0$ and $0^{2} = 0$, so $u^{2} \ge 0$ with equality only at $u = 0$.

[L5] Bernoulli's inequality ([[lem-bernoulli-inequality]]): for $x \ge -1$ and natural $n$, $(1+x)^{n} \ge 1+nx$, with equality exactly when $n \le 1$ or $x = 0$; its published proof is the ordinary induction with that equality analysis.

[L6] Difference factorisation ([[lem-power-difference-factorisation]]): $b^{n} - a^{n} = (b-a)\sum_{k=0}^{n-1}a^{k}b^{\,n-1-k}$ for $n \ge 1$.

[L7] AM-GM ([[thm-am-gm]]): for nonnegative entries of length $m \ge 1$, $\prod \le (\text{mean})^{m}$, with equality exactly for constant lists; and weighted AM-GM ([[thm-weighted-am-gm-rational]]): for $x_k > 0$ and rationals $w_k \ge 0$ summing to $1$ when read as real numbers, $\prod x_k^{w_k} \le \sum w_kx_k$.

[L8] Induction and recursion ([[thm-induction-principle]], [[thm-recursion]]) and arithmetic of naturals ([[def-nat-order]], [[thm-nat-linear-order]], [[lem-nat-order-add-compatible]], [[lem-nat-discrete]]).

[L9] Rationals and their embedding ([[lem-rat-positive-denominator]], [[lem-nat-embeds-int]], [[def-rat-order]], [[def-int-order]], [[lem-of-q-embeds]], [[lem-of-naturals-positive]], [[lem-of-inverse-positive]]): every rational has a representative $m/N$ with $m$ a natural and $N \ge 1$ when it is nonnegative; the canonical embedding $\iota : \mathbb{Q} \to \mathbb{R}$ is injective and order-preserving, and the real number $m$ is positive for $m \ge 1$; inverses of positives are positive.

[L10] Rational powers and their laws ([[def-rational-power]], [[lem-rational-power-laws]], [[lem-rational-power-monotone]]): $a^{r+s} = a^{r}a^{s}$, $\big(a^{r}\big)^{s} = a^{rs}$, $a^{1} = a$ for $a > 0$; $a^{r} > 0$; $0^{r} = 0$ for rational $r > 0$ and $0^{0} = 1$; and for fixed positive exponent the base map is strictly increasing, so $y^{r} = 1$ with $y > 0$ forces $y = 1$.

## Verification

**Proof technique:** direct; five routes for the integer statement, then the rational forms and the quadratic refinement.

1.1 The degenerate cases, common to all routes: if $n = 0$ both sides are $1$; if $n = 1$ both sides are $1+x$; if $x = 0$ both sides are $1$, since $1^{n} = 1$ for every natural $n$; so equality holds whenever $n \le 1$ or $x = 0$, and it remains to prove the strict inequality $(1+x)^{n} > 1+nx$ for $n \ge 2$ and $x \ne 0$ with $x \ge -1$. [L3, L5, algebra]

1.2 Route 1, ordinary induction: the published theorem [L5] states the inequality with exactly the claimed equality clause and its published proof is the ordinary induction, so this route is verified by quoting [L5] as a whole; no duplicate induction is minted. [L5]

1.3 Route 2, geometric-sum comparison: for $n \ge 2$ and $y \ge 0$, $y \ne 1$, [L6] gives $y^{n}-1 = (y-1)\sum_{k<n}y^{k}$; if $y > 1$ then every term $y^{k}$ is at least $1$ and the term $k = 1$ is strictly larger, so the sum is strictly greater than $n$ by the strict sum comparison of [L1] and $y-1 > 0$ gives $y^{n}-1 > n(y-1)$, while if $0 \le y < 1$ every term is at most $1$ and the term $k = 1$ is strictly smaller, so the sum is strictly less than $n$ and multiplication by the negative $y-1$ reverses the comparison in [L2] to give again $y^{n}-1 > n(y-1)$; substituting $y = 1+x$ gives $(1+x)^{n} > 1+nx$ for $n \ge 2$, $x \ne 0$. [L1, L2, L6, algebra]

1.4 Route 3, exact nonnegative remainder: for $n \ge 2$ and $y \ge 0$ one has the identity $y^{n}-ny+(n-1) = (y-1)^{2}\sum_{j=0}^{n-2}(n-1-j)y^{j}$: indeed [L6] gives $y^{n}-1 = (y-1)\sum_{k<n}y^{k}$, so $y^{n}-ny+(n-1) = (y-1)\big(\sum_{k<n}y^{k}-n\big)$, and $\sum_{k<n}y^{k}-n = \sum_{k=1}^{n-1}\big(y^{k}-1\big) = \sum_{k=1}^{n-1}(y-1)\sum_{j<k}y^{j} = (y-1)\sum_{j=0}^{n-2}(n-1-j)y^{j}$, since each $y^{j}$ occurs once for each $k > j$ with $k \le n-1$, of which there are $n-1-j$; every coefficient $n-1-j$ is a positive natural and every $y^{j} \ge 0$, so the last sum is at least its constant term $n-1 > 0$, and $(y-1)^{2} \ge 0$ with equality only at $y = 1$ by [L4]; hence $y^{n}-ny+(n-1) > 0$ for $y \ne 1$, that is $(1+x)^{n} > 1+nx$ for $n \ge 2$ and $x \ne 0$, with the identity giving $0 = 0$ and equality at $x = 0$. [L1, L4, L6, algebra]

1.5 Route 4, AM-GM applied to $(y^{n},1,\dots,1)$: for $n \ge 2$ and $y \ge 0$ the $n$ entries $y^{n},1,\dots,1$ are nonnegative, their product is $y^{n}$, and their geometric mean is $(y^{n})^{1/n} = y$ because $y \ge 0$ and $y^{n} = y^{n}$; [L7] gives $y \le \big(y^{n}+(n-1)\big)/n$, that is $y^{n} \ge ny-(n-1) = 1+n(y-1) = 1+nx$; if $y \ne 1$ the list is not constant, so [L7]'s equality clause makes the inequality strict, and $y = 1$ means $x = 0$; this proves the integer statement for $n \ge 2$ by a fourth route, with strictness for $x \ne 0$. [L3, L7, algebra]

1.6 Route 5, finite binomial coefficients, constructed by recursion: define $b_{m,k}$ for naturals $m, k$ by $b_{0,0} = 1$, $b_{0,k} = 0$ for $k \ge 1$, and $b_{m+1,k} = b_{m,k} + b_{m,k-1}$ for $k \ge 1$; then $b_{m,k} = 0$ for $k > m$ and $b_{m,k} \ge 0$ for all $m, k$, and induction on $m$ gives both the finite expansion $(u+v)^{m} = \sum_{k=0}^{m}b_{m,k}u^{k}v^{\,m-k}$ for all reals $u, v$ and the endpoint and first-column values $b_{m,0} = b_{m,m} = 1$, $b_{m,1} = m$; moreover $k\,b_{m,k} = m\,b_{m-1,k-1}$ for $1 \le k \le m$, because the preceding-row identities applied to $k\,b_{m,k} = k\big(b_{m-1,k}+b_{m-1,k-1}\big)$ rewrite the second summand using $(k-1)b_{m-1,k-1} = (m-1)b_{m-2,k-2}$ and combine with the Pascal step, and the endpoint cases $k = 1, m$ follow from the displayed values. [L1, L3, L8, algebra, induction]

1.7 Strictness transfer for weighted AM-GM with finitely many positive rational weights: let $x_0,\dots,x_{m-1} > 0$ and let $w_k \ge 0$ be rationals with $\sum_{k}w_k = 1$ as real numbers; by [L9] write $w_k = n_k/N$ with $n_k$ naturals and a common $N \ge 1$, repeat each $x_k$ exactly $n_k$ times to obtain a list of $N$ positive entries, and note that its product has $N$-th power $\prod_k x_k^{\,n_k} = \big(\prod_k x_k^{\,w_k}\big)^{N}$ and its arithmetic mean is $\sum_k w_kx_k$; [L7]'s AM-GM applied to the repeated list gives $\big(\prod_k x_k^{\,w_k}\big)^{N} \le \big(\sum_k w_kx_k\big)^{N}$ with equality exactly for a constant repeated list, and hence by the strict monotonicity of the power map in [L3] the weighted inequality $\prod_k x_k^{\,w_k} \le \sum_k w_kx_k$ is strict whenever the repeated list is not constant, in particular whenever two bases carrying positive weight differ. [L3, L7, L9, algebra]

1.8 Rational Bernoulli forms, inequality directions, for $y > 0$ and rational $r$: (a) if $r > 1$, the weights $1/r$ and $1-1/r$ are rational, nonnegative and sum to $1$, so [L7] applied to the positive bases $y^{r}$ and $1$ gives $y = \big(y^{r}\big)^{1/r}1^{\,1-1/r} \le (1/r)y^{r} + (1-1/r)$, and multiplying by the positive $r$ gives $y^{r} \ge 1+r(y-1)$; (b) if $r < 0$, the weights $-r/(1-r)$ and $1/(1-r)$ are rational, nonnegative and sum to $1$, and with bases $y$ and $y^{r}$ the geometric side is $y^{-r/(1-r)}\big(y^{r}\big)^{1/(1-r)} = y^{0} = 1$ by the addition law of [L10], so $1 \le \big(-r\,y + y^{r}\big)/(1-r)$ and multiplying by the positive $1-r$ gives $y^{r} \ge 1+r(y-1)$; (c) if $0 < r < 1$, the weights $r$ and $1-r$ give $y^{r} = y^{r}1^{\,1-r} \le r\,y + (1-r) = 1+r(y-1)$; in every case the powers of $1$ used are $1$ by [L10]. [L2, L7, L10, algebra]

2.1 Route 5 for $x > 0$: the expansion of step 1.6 at $(u,v) = (x,1)$ gives $(1+x)^{n} = \sum_{k=0}^{n}b_{n,k}x^{k} = 1 + nx + \sum_{k=2}^{n}b_{n,k}x^{k}$ with $b_{n,0} = 1$, $b_{n,1} = n$, all coefficients $\ge 0$ and $b_{n,n} = 1$, so $(1+x)^{n} \ge 1+nx+x^{n} > 1+nx$ for $n \ge 2$ and $x > 0$; equality at $x \ne 0$, $n \ge 2$ is impossible in this range. [step 1.6, L1, L3, algebra]

2.2 Route 5 for $-1 \le x < 0$: put $t := -x \in (0,1]$ and $y := 1-t = 1+x \ge 0$; the expansion of step 1.6 gives $1 = (t+y)^{n} = \sum_{k=0}^{n}b_{n,k}t^{k}y^{\,n-k}$ and, using the coefficient identity $k\,b_{n,k} = n\,b_{n-1,k-1}$ and the expansion at $n-1$, also $nt = \sum_{k=1}^{n}k\,b_{n,k}t^{k}y^{\,n-k}$; subtracting the first identity from the second, $nt - (1-y^{n}) = \sum_{k=1}^{n}(k-1)b_{n,k}t^{k}y^{\,n-k} \ge 0$ with $k = n$ term $(n-1)t^{n} > 0$ for $n \ge 2$, so $nt > 1-y^{n}$ and $y^{n} > 1-nt = 1+nx$; this proves the integer statement for the negative range $x \in [-1,0)$ by positive weights, without discarding alternating terms. [step 1.6, L1, L3, algebra]

2.3 Rational equality and strictness: for $y > 0$ and rational $r \ne 0, 1$, if $x \ne 0$, that is $y \ne 1$, then in each case of step 1.8 the two bases carrying positive weight differ, so the strictness transfer of step 1.7 makes the weighted inequality strict and, after the positive multiplications of step 1.8, the rational Bernoulli inequality is strict as well; if $x = 0$, that is $y = 1$, every base equals $1$ and both sides equal $1$, and the cases $r = 0$ and $r = 1$ give $y^{0} = 1 = 1+0$ and $y^{1} = y = 1+x$ identically, so equality holds exactly for $x = 0$ or $r \in \{0,1\}$. [step 1.7, step 1.8, L10, algebra]

2.4 Endpoint $x = -1$: for rational $r > 0$ the supplementary clause gives $0^{r} = 0$ by [L10], so the left-hand side is $0$ and the right-hand side is $1-r$; for $r \ge 1$ the assertion $0 \ge 1-r$ holds with equality exactly at $r = 1$, and for $0 < r \le 1$ the reversed assertion $0 \le 1-r$ holds with equality exactly at $r = 1$; at $r = 0$ the integer convention gives $0^{0} = 1 = 1+0$, an equality, and negative rational exponents are not defined at $0$ and are excluded by the domain of the statement. [step 1.8, L10, algebra]

3.1 The integer statement is proved with five routes and the sharp equality case: Route 1 is [L5] quoted in step 1.2; Route 2 is the geometric-sum comparison of step 1.3; Route 3 is the supporting-line remainder of step 1.4, whose identity has positive coefficients and double zero exactly at $y = 1$; Route 4 is the AM-GM application of step 1.5; and Route 5 is the binomial expansion, which gives strictness for $x > 0$ in step 2.1 and for $-1 \le x < 0$ in step 2.2; all routes cover $x \ge -1$, the degenerate equalities $n \le 1$ or $x = 0$ are those of step 1.1, and every route gives strict inequality for $n \ge 2$, $x \ne 0$. [step 1.1, step 1.2, step 1.3, step 1.4, step 1.5, step 2.1, step 2.2, L5]

3.2 The rational forms hold on the stated domain: for $x > -1$ the inequalities are the three cases of step 1.8, their equality and strictness pattern is step 2.3, and the endpoint $x = -1$ is step 2.4; hence $(1+x)^{r} \ge 1+rx$ for $r \ge 1$ or $r \le 0$ and $(1+x)^{r} \le 1+rx$ for $0 \le r \le 1$, in each case exactly on the stated domain, with equality exactly when $x = 0$ or $r \in \{0,1\}$. [step 1.8, step 2.3, step 2.4, L10]

4.1 The quadratic refinement: let $r \ge 2$ be rational and $x \ge -1$. If $x > -1$, put $y := 1+x > 0$, $z := y^{2} > 0$ and $s := r/2$, a rational with $s \ge 1$; the rational Bernoulli lower bound of step 3.2 applied to $z$ and $s$ gives $z^{s} \ge 1+s(z-1)$, and $z^{s} = \big(y^{2}\big)^{r/2} = y^{\,r}$ while $s(z-1) = (r/2)\big((1+x)^{2}-1\big) = (r/2)\big(2x+x^{2}\big)$, so $y^{r} \ge 1+rx+(r/2)x^{2}$; equality in this chain holds exactly when $z = 1$, that is $x = 0$, or $s = 1$, that is $r = 2$; if $x = -1$ the left side is $0^{r} = 0$ and the right side is $1-r+r/2 = 1-r/2 \le 0$ with equality exactly at $r = 2$; and if $m$ is a natural with $2m \le r$, then $r/2 - m \ge 0$ and $x^{2} \ge 0$ give $(r/2)x^{2} \ge m\,x^{2}$, so the stronger bound implies $(1+x)^{r} \ge 1+rx+m\,x^{2}$; for $1 \le r < 2$ there is no positive natural $m$ with $2m \le r$, the coefficient $r/2$ lies below $1$, and the ordinary lower bound is the case $m = 0$. [step 3.2, L3, L4, L10, algebra]

5.1 Summary: the integer Bernoulli statement holds with the equality clause $n \le 1$ or $x = 0$ by five independent finite routes, two of which (Routes 4 and 5) are new here while Route 1 is the published induction and Routes 2 and 3 are the difference-of-powers and supporting-line arguments (steps 1.2 through 1.5, 2.1, 2.2, 3.1); the rational-exponent forms hold with the equality clause $x = 0$ or $r \in \{0,1\}$ except at the directly verified endpoint (steps 1.8, 2.3, 2.4, 3.2); and the quadratic refinement $(1+x)^{r} \ge 1+rx+(r/2)x^{2}$ for $r \ge 2$, together with its coefficient weakening and the case $1 \le r < 2$, holds with equality exactly when $x = 0$ or $r = 2$ (step 4.1); no route invokes a derivative, logarithm, exponential, convergence, or an unproved optimization theorem. [step 3.1, step 3.2, step 4.1, L5, L7] ∎
