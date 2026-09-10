---
id: thm-etemadi-strong-law-for-pairwise-independent-iid-variables
kind: theorem
title: Etemadi strong law for pairwise independent iid variables
deps: ["def-pairwise-independence", "lem-iid-linear-truncation-occurs-only-finitely-often", "lem-summability-of-truncated-normalized-variances", "lem-cesaro-limit-of-truncated-means", "cor-chebyshev-inequality-for-random-variables", "cor-covariance-vanishes-under-independence", "lem-variance-and-covariance-identities-for-random-variables", "lem-measurable-functions-preserve-independence", "cor-first-borel-cantelli-lemma-for-events", "thm-monotone-convergence", "lem-integer-part", "def-integer-power", "thm-geometric-series"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: Durrett, Theorem 2.4.1, Lemmas 2.4.2–2.4.4 and complete proof, pp. 76–78
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
status: draft
origin: pipeline
proof_strategy: direct
---

## Statement

Pairwise independent, identically distributed integrable real $(X_n)$ satisfy $S_n/n\to\mathbb EX_1$ almost surely.

## Facts & Assumptions

[F1] [[lem-measurable-functions-preserve-independence]]: Let $(X_i)_{i\in I}$ be an independent family of random elements
$X_i:(\Omega,\mathcal F,\mathbb P)\to(S_i,\Sigma_i)$. For each $i$, let
$g_i:(S_i,\Sigma_i)\to(T_i,\mathcal T_i)$ be measurable. Then the family
$(g_i\circ X_i)_{i\in I}$ is independent.

[F2] [[cor-covariance-vanishes-under-independence]]: If $X$ and $Y$ are independent square-integrable real random variables, then
$$\operatorname{Cov}(X,Y)=0.$$

Thus independence implies zero covariance. The converse is false in general.

[F3] [[lem-variance-and-covariance-identities-for-random-variables]]: Let $X,Y$ be square-integrable real random variables on one probability space.
Then
$$\operatorname{Var}(X)=\mathbb E[X^2]-\mathbb E[X]^2,$$
$$\operatorname{Cov}(X,Y)=\mathbb E[XY]-\mathbb E[X]\mathbb E[Y].$$
Moreover, covariance is symmetric and bilinear on finite linear combinations.
On finite full-power-set probability spaces these formulas reduce to the
published finite identities.

[F4] [[lem-integer-part]]: Identify $\mathbb{Z}$ with its canonical copy inside $\mathbb{R}$, along the
embeddings $\mathbb{N} \to \mathbb{Z} \to \mathbb{Q} \to \mathbb{R}$
(lem-nat-embeds-int, lem-int-embeds-rat, lem-rat-embeds-dense,
def-integers). Then for every real $x$ there is **exactly one** integer $m$
with

$$m \;\le\; x \;<\; m + 1 .$$

It is written $\lfloor x \rfloor$ and called the **integer part**, or **floor**,
of $x$.

**Two independent ingredients are needed and neither may be dropped.** Existence
is the Archimedean property (thm-of-archimedean) together with the
well-ordering of $\mathbb{N}$ (thm-well-ordering-principle): the first says
that $x$ is caught between two integers at all, the second picks the *least*
integer above $x$. Uniqueness is the discreteness of $\mathbb{Z}$: no integer
lies strictly between $m$ and $m+1$.

This lemma is stated once here and reused. It is what turns "the nearest integer
to $x$" from a picture into an object, and the companion page's oscillator
$\psi(x) = \inf_{n \in \mathbb{Z}} |x - n|$ is computed from it in one line.

[F5] [[def-integer-power]]: Let $a \in \mathbb{R}$, where $\mathbb{R}$ is the ambient ordered field
(def-ordered-field, def-field).

**Natural exponents.** By the recursion theorem (thm-recursion) applied to
the set $\mathbb{R}$, the starting element $1$ and the function
$f(x) = x \cdot a$, there is a unique function $\mathbb{N} \to \mathbb{R}$,
written $n \mapsto a^n$, with

$$a^0 = 1, \qquad a^{n+1} = a^n \cdot a \quad (n \in \mathbb{N}).$$

Thus $a^1 = a$, $a^2 = a \cdot a$, and so on. Note that this is defined for
**every** $a$, including $a = 0$.

**Negative exponents.** If $a \ne 0$ and $n \in \mathbb{N}$ with $n \ge 1$, set

$$a^{-n} := (a^n)^{-1}.$$

**Why that is legitimate.** The right-hand side presupposes that $a^n$ is
invertible, that is, that $a^n \ne 0$. This is a proof obligation and not an
observation, and it is discharged by claim 2 of lem-power-laws: for $a \ne 0$
in a field, $a^n \ne 0$ for every $n \in \mathbb{N}$, proved there by induction on
$n$ from the fact that a field has no zero divisors (lem-of-no-zero-divisors).
That lemma is a statement *about* the operation introduced here, so it depends on
this definition and is recorded in this item's `justified_by` rather than in its
`deps` (SCHEMA §3). Given $a^n \ne 0$, the value $(a^n)^{-1}$ is a single
well-determined element, because multiplicative inverses in a field are unique
(lem-of-inverse-unique).

**Integer exponents.** Every integer $m$ (def-integers) is either
$\iota(n)$ or $-\iota(n)$ for a unique natural $n$, where $\iota$ is the
embedding $\mathbb{N} \to \mathbb{Z}$ (lem-nat-embeds-int,
def-int-operations). This too is a citation and not a slogan: the order on
$\mathbb{Z}$ is total (thm-int-ordered-ring), so $m \ge 0$ or $m < 0$; the
image of $\iota$ is exactly the set of nonnegative integers, and each of them is
$\iota(n)$ for a unique natural $n$ (lem-nat-embeds-int); and if $m < 0$ then
$-m > 0$, by compatibility of the order with addition (thm-int-ordered-ring),
so $-m = \iota(n)$ and $m = -\iota(n)$, with $n$ unique because $\iota$ is
injective. The two clauses above therefore define $a^m$ for every
$m \in \mathbb{Z}$ whenever $a \ne 0$, and for every $m \in \mathbb{N}$ for
arbitrary $a$. The clauses are consistent where they overlap: the only overlap is
$m = 0$, where $-\iota(0) = \iota(0)$ and $(a^0)^{-1} = 1^{-1} = 1 = a^0$.

[F6] [[thm-geometric-series]]: Let $r \in \mathbb{R}$ and let $r^k$ be the integer power (def-integer-power),
so that $r^0 = 1$ for every $r$, including $r = 0$.

1. If $|r| < 1$ then the series $\sum r^k$ converges (def-series) and
   $$\sum_{k=0}^{\infty} r^{k} \;=\; \frac{1}{1-r} .$$
2. If $|r| \ge 1$ then $\sum r^k$ diverges.

The series starts at $k = 0$ and its first term is $r^0 = 1$; in particular
$\sum_{k=0}^{\infty} 2^{-k} = 2$, while the series starting at $k = 1$ sums to
$1$. Which starting index is meant has to be said, and it is said here.

[F7] [[lem-summability-of-truncated-normalized-variances]]: For identically distributed integrable real $(X_n)$ and $Y_n=X_n\mathbf1_{\{|X_n|\le n\}}$, $\sum_{n\ge1}\operatorname{Var}(Y_n)/n^2\le2\mathbb E|X_1|<\infty$. No independence is required.

[F8] [[cor-chebyshev-inequality-for-random-variables]]: If $X$ is a square-integrable real random variable and $a>0$, then
$$\mathbb P(|X-\mathbb E[X]|\ge a)\le\frac{\operatorname{Var}(X)}{a^2}.$$

[F9] [[cor-first-borel-cantelli-lemma-for-events]]: Let $(A_n)_{n\in\mathbb N}$ be events in a probability space. If
$$\sum_{n=0}^\infty \mathbb P(A_n)<+\infty,$$
then
$$\mathbb P(A_n\ \mathrm{i.o.})=0.$$

No independence hypothesis is needed.

[F10] [[lem-cesaro-limit-of-truncated-means]]: For identically distributed integrable real $(X_n)$, with $Y_k=X_k\mathbf1_{\{|X_k|\le k\}}$, one has $n^{-1}\sum_{k=1}^n\mathbb EY_k\to\mathbb EX_1$.

[F11] [[lem-iid-linear-truncation-occurs-only-finitely-often]]: For identically distributed integrable real $(X_n)$, put $Y_n=X_n\mathbf1_{\{|X_n|\le n\}}$. Almost surely $Y_n=X_n$ for all sufficiently large $n$. Consequently $n^{-1}\sum_{k=1}^n(X_k-Y_k)\to0$. Independence is unnecessary.

## Proof

**Given:** The objects, hypotheses and definitions in the statement. Its conclusions are to be established below.

1.1 First suppose $X_n\ge0$. Put $Y_m=X_m\mathbf1_{\{X_m\le m\}}$, $T_n=\sum_{m\le n}Y_m$, and $v_m=\operatorname{Var}(Y_m)$. Pairwise independence survives these coordinatewise Borel maps by applying F1 separately to each independent pair. F2 and F3 give $\operatorname{Var}(T_n)=\sum_{m\le n}v_m$. [F1, F2, F3]

1.2 Fix an integer $r\ge1$ and $\alpha=1+1/r>1$. By F4 set $k_j=\lfloor\alpha^j\rfloor$ for $j\ge0$, using F5. For large j, $k_j\ge\alpha^j/2$ and $k_{j+1}/k_j\to\alpha$; this follows on dividing $\alpha^j-1<k_j\le\alpha^j$ by $\alpha^j$. The sequence is eventually strictly increasing, since $\alpha^{j+1}-\alpha^j$ tends to infinity. [F4, F5]

1.3 For each m, let $j_0$ be the first nonnegative j with $\alpha^j\ge m$. Apart from finitely many small j, $\sum_{j:k_j\ge m}k_j^{-2}\le4\sum_{j\ge j_0}\alpha^{-2j}=4\alpha^{-2j_0}/(1-\alpha^{-2})\le4m^{-2}/(1-\alpha^{-2})$ by F6. The omitted finitely many j affect only m<=max $k_j$, so increasing the constant gives $\sum_{j:k_j\ge m}k_j^{-2}\le C_\alpha m^{-2}$ for every m. [F6]

2.1 Interchanging finite nonnegative double sums and then taking suprema, step 1.1 and step 1.3 give $\sum_j\operatorname{Var}(T_{k_j})/k_j^2\le C_\alpha\sum_m v_m/m^2<\infty$, the last inequality by F7. For each positive integer l, F8 bounds $\mathbb P(|T_{k_j}-\mathbb ET_{k_j}|>k_j/l)$ by $l^2\operatorname{Var}(T_{k_j})/k_j^2$. F9 and a countable intersection over l imply $(T_{k_j}-\mathbb ET_{k_j})/k_j\to0$ almost surely. [F7, F8, F9, step 1.1, step 1.3]

3.1 F10 gives $\mathbb ET_n/n\to\mu=\mathbb EX_1$. For $k_j\le n<k_{j+1}$, nonnegativity makes $T_{k_j}/k_{j+1}\le T_n/n\le T_{k_{j+1}}/k_j$. Consequently step 1.2 and step 2.1 give $\mu/\alpha\le\liminf_n T_n/n\le\limsup_n T_n/n\le\alpha\mu$ on a conull event. [F10, step 1.2, step 2.1]

4.1 Intersect these events over $r\ge1$. Since $1+1/r\downarrow1$ and $\mu$ is finite and nonnegative, step 3.1 gives $T_n/n\to\mu$. F11 removes the truncation error. For general real variables, apply this nonnegative result separately to $X_n^+$ and $X_n^-$; their integrability and pairwise independence follow from the given hypotheses and coordinatewise measurability. Subtracting the two finite limits proves the assertion. [F11, step 3.1] ∎
