---
id: cex-a-composition-of-integrable-functions-that-is-not-integrable
kind: counterexample
title: "Integrable $\\varphi$ and integrable $f$ with $\\varphi\\circ f$ not integrable: the order of the hypotheses in the composition theorem cannot be reversed"
status: draft
origin: session
deps: [thm-composition-with-a-continuous-function, def-dirichlet-and-thomae-functions, thm-dirichlet-and-thomae-continuity-sets, thm-lebesgue-criterion, cor-countably-many-discontinuities-integrable, thm-monotone-implies-integrable, def-monotone-function, def-measure-zero-and-content-zero, lem-nondegenerate-interval-is-not-null, lem-countable-sets-are-null, lem-subset-of-countable, def-countable, thm-rationals-countable, def-darboux-integral, def-continuity-real, def-canonical-natural, lem-of-naturals-positive, def-bounded-set, def-interval, def-ordered-field, def-complete-ordered-field]
justified_by: []
aliases: []
landmark: true
short: "integrable after integrable is not integrable"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Thomae's function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Thomae%27s_function"
    - title: "Riemann integral (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Riemann_integral"
pipeline_run: null
---

## Statement refuted

**False claim:** if $f : [a,b] \to [m,M]$ is Riemann integrable and
$\varphi : [m,M] \to \mathbb{R}$ is Riemann integrable, then $\varphi\circ f$ is
Riemann integrable on $[a,b]$.

That is [[thm-composition-with-a-continuous-function]] with "continuous"
weakened to "integrable" on the outer function, and it is false. On $[0,1]$ take
$f := t$, Thomae's function ([[def-dirichlet-and-thomae-functions]]), whose
values lie in $[0,1]$, and

$$\varphi : [0,1] \to \mathbb{R}, \qquad \varphi(u) \;:=\; \begin{cases} 0 & u = 0, \\ 1 & 0 < u \le 1. \end{cases}$$

Both are Riemann integrable, $t$ because its discontinuity set is at most
countable and $\varphi$ because it is nondecreasing. But

$$\varphi \circ t \;=\; \mathbf{1}_{\mathbb{Q}} \quad \text{on } [0,1] ,$$

the Dirichlet function, which is not Riemann integrable.

**Exactly one hypothesis of the composition theorem fails, and it is named:**
$\varphi$ is not continuous, being discontinuous at $0$. The theorem's hypothesis
is *continuous after integrable*; here the outer function is merely integrable,
and that is not enough.

## Facts & Assumptions

**Given:** Thomae's function $t$ on $[0,1]$, with $t(x) = 1/\iota(q(x))$ at a rational $x$ of least denominator $q(x) \ge 1$ and $t(x) = 0$ at an irrational $x$, and the function $\varphi$ above.

[L1] $0 \le t(x) \le 1$ for every $x$, and $t(x) > 0$ exactly at the rational $x$, since $\iota(q(x)) \ge 1 > 0$ ([[def-dirichlet-and-thomae-functions]], [[def-canonical-natural]], [[lem-of-naturals-positive]], [[def-ordered-field]]).

[L2] $t$ is continuous at every irrational and discontinuous at every rational, and $\mathbf{1}_{\mathbb{Q}}$ is continuous at no real ([[thm-dirichlet-and-thomae-continuity-sets]], claims 1 and 3, [[def-continuity-real]]).

[L3] $\mathbb{Q}$ is countably infinite and every subset of an at most countable set is at most countable ([[thm-rationals-countable]], [[lem-subset-of-countable]], [[def-countable]]).

[L4] A bounded function on $[p,q]$ whose set of discontinuities is at most countable is Riemann integrable there ([[cor-countably-many-discontinuities-integrable]], [[def-bounded-set]], [[def-darboux-integral]]).

[L5] A monotone function on a closed bounded interval with distinct endpoints is bounded and integrable there ([[thm-monotone-implies-integrable]], [[def-monotone-function]]).

[L6] A bounded function on $[p,q]$ is integrable if and only if its discontinuity set has measure zero; a nondegenerate interval does not have measure zero; an at most countable set does ([[thm-lebesgue-criterion]], [[lem-nondegenerate-interval-is-not-null]], [[lem-countable-sets-are-null]], [[def-measure-zero-and-content-zero]]).

[L7] Ordered-field arithmetic and intervals: the order is total and transitive ([[def-ordered-field]], [[def-complete-ordered-field]], [[def-interval]]).

## Counterexample

**Proof technique:** direct.

1.1 $t$ is bounded on $[0,1]$ with values in $[0,1]$, by [L1]. [given, L1]

1.2 The set of discontinuities of $t$ in $[0,1]$ is $\mathbb{Q}\cap[0,1]$ by [L2], which is at most countable by [L3]. [L2, L3]

1.3 $\varphi$ is nondecreasing on $[0,1]$: for $u \le v$ the only case not giving $\varphi(u) = \varphi(v)$ is $u = 0 < v$, where $\varphi(u) = 0 < 1 = \varphi(v)$. So $\varphi$ is bounded and integrable on $[0,1]$ by [L5]. [given, L5, L7]

2.1 Hence $t$ is Riemann integrable on $[0,1]$ by [L4]. [step 1.1, step 1.2, L4]

2.2 For $x \in [0,1]$: if $x$ is rational then $t(x) > 0$ by [L1], so $\varphi(t(x)) = 1$; if $x$ is irrational then $t(x) = 0$, so $\varphi(t(x)) = 0$. Hence $\varphi\circ t$ agrees with $\mathbf{1}_{\mathbb{Q}}$ at every point of $[0,1]$. [step 1.1, given, L1]

3.1 $\mathbf{1}_{\mathbb{Q}}$ is bounded on $[0,1]$ and continuous at no point of it by [L2], so its discontinuity set is $[0,1]$, which does not have measure zero by [L6]; therefore $\varphi\circ t$ is not Riemann integrable on $[0,1]$ by [L6]. [step 2.2, L2, L6]

4.1 So $t$ and $\varphi$ are integrable while $\varphi\circ t$ is not, and the claim is false. The hypothesis of [[thm-composition-with-a-continuous-function]] that fails here is the continuity of the outer function: $\varphi$ is discontinuous at $0$, since $\varphi(0) = 0$ while $\varphi(u) = 1$ for every $u \in (0,1]$ and every neighbourhood of $0$ in $[0,1]$ contains such a $u$. [step 2.1, step 1.3, step 3.1, L7] ∎

## Remarks

- **The order of composition is the whole point.** The published theorem is *continuous after integrable*, and it is true; the reversal, *integrable after integrable*, is refuted here. A reader who remembers only "composition preserves integrability" will get this wrong in one direction out of two, and the direction that fails is the one this item names.

- **Nothing is claimed about the inner function being continuous.** If $f$ is continuous and $\varphi$ merely integrable, the composite may still fail to be integrable; that case is not covered above and no claim is made about it here.

- **Thomae is the right inner function because its positivity set is exactly $\mathbb{Q}$.** Any integrable $f$ that is positive exactly on a dense set of measure zero and zero elsewhere would do; Thomae is the published one, and [[thm-dirichlet-and-thomae-continuity-sets]] is what supplies its continuity set without recomputing it.
