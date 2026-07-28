---
id: ex-hamel-basis-additive-function
kind: example
title: "An additive $f : \\mathbb{R} \\to \\mathbb{R}$ that is not $x \\mapsto cx$: the coefficient of one fixed Hamel basis vector. It is unbounded above and below on every nondegenerate interval, its graph is dense in $\\mathbb{R}^{2}$, and every nonempty level set is dense in $\\mathbb{R}$"
status: published
origin: session
deps: [lem-hamel-basis-exists, fs-additive-implies-linear, def-additive-function, lem-additive-is-q-linear, thm-cauchy-functional-equation-regularity, def-vector-space, lem-restriction-of-scalars, def-linear-combination-and-span, def-linear-subspace, lem-metrics-on-rn, def-metric-interior-closure-boundary, thm-metric-closure-characterisation, def-metric-ball, def-axiom-of-choice, thm-zorn, def-bounded-set, def-interval, lem-rat-embeds-dense, lem-q-and-irrationals-dense-r, def-complete-ordered-field, def-continuity-real, def-monotone-function]
justified_by: []
aliases: []
landmark: false
short: "a Hamel coefficient is additive and wild"
proof_strategy: constructive
verification:
  audited: 2026-07-28
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Cauchy's functional equation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cauchy%27s_functional_equation"
    - title: "Hamel basis, in Basis (linear algebra) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Basis_(linear_algebra)"
pipeline_run: null
---

## Example

**Assume the Axiom of Choice** ([[def-axiom-of-choice]]), which enters through
[[lem-hamel-basis-exists]] and hence through [[thm-zorn]]. Fix a Hamel basis
$B$ of $\mathbb{R}$ over the canonical copy $\mathbb{Q} \subseteq \mathbb{R}$ of
the rationals ([[lem-rat-embeds-dense]], [[lem-restriction-of-scalars]],
[[def-vector-space]]), fix $b_{\star} \in B$, and let

$$f \;:=\; \Lambda_{b_{\star}} : \mathbb{R} \to \mathbb{R}$$

be the coefficient map of $b_{\star}$ ([[lem-hamel-basis-exists]], claim 4).
Write $W := W_{b_{\star}} = \operatorname{span}(B \setminus \{b_{\star}\})$
([[def-linear-combination-and-span]]). Then:

1. $f$ is additive ([[def-additive-function]]) and is **not** of the form
   $x \mapsto cx$ for any real $c$ ([[fs-additive-implies-linear]]);
2. $f$ is bounded neither above nor below on any nondegenerate interval
   ([[def-bounded-set]], [[def-interval]]), is monotone on no nondegenerate
   interval ([[def-monotone-function]]), is of constant sign on none, and is
   continuous at no point of $\mathbb{R}$ ([[def-continuity-real]]);
3. the graph $\{(x,f(x)) : x \in \mathbb{R}\}$ is dense in $\mathbb{R}^{2}$ for
   the metric $d_\infty$ ([[lem-metrics-on-rn]],
   [[def-metric-interior-closure-boundary]]);
4. the values of $f$ are exactly the rationals, and for every rational $r$ the
   level set $f^{-1}(\{r\}) = \{\, x \in \mathbb{R} : f(x) = r \,\}$ is **dense
   in $\mathbb{R}$**; for an irrational $v$ the level set $f^{-1}(\{v\})$ is
   empty.

Claim 2 is the contrapositive of [[thm-cauchy-functional-equation-regularity]]
applied to claim 1, clause by clause, and claim 3 is the contrapositive of its
sixth clause.

## Facts & Assumptions

**Given:** The Axiom of Choice; a Hamel basis $B$ of $\mathbb{R}$ over $\mathbb{Q}$; a fixed $b_{\star} \in B$; the coefficient map $f = \Lambda_{b_{\star}}$ and $W = \operatorname{span}(B \setminus \{b_{\star}\})$.

[A1] The Axiom of Choice ([[def-axiom-of-choice]], [[thm-zorn]]).

[L1] **Assume the Axiom of Choice.** Then a Hamel basis $B$ exists; for $b_{\star} \in B$ the coefficient map $\Lambda_{b_{\star}} : \mathbb{R} \to \mathbb{Q}$ is well defined, additive, $\mathbb{Q}$-homogeneous, has range all of $\mathbb{Q}$, has $\{x : \Lambda_{b_{\star}}(x) = 0\} = W$, and $W \ne \{0\}$ ([[lem-hamel-basis-exists]], claims 1, 4 and 5, [[def-linear-combination-and-span]], [[def-linear-subspace]]).

[L2] There is an additive $\mathbb{R} \to \mathbb{R}$ that is not of the form $x \mapsto cx$, namely a coefficient map $\Lambda_{b_{\star}}$: it takes only rational values while $c \ne 0$ would force irrational values ([[fs-additive-implies-linear]], [[lem-q-and-irrationals-dense-r]]).

[L3] If an additive $g : \mathbb{R} \to \mathbb{R}$ is bounded above on a nondegenerate interval, or bounded below on one, or monotone on one, or of constant sign on one, or continuous at a single point, or has non-dense graph in $\mathbb{R}^{2}$, then $g(x) = g(1)x$ for every real $x$ ([[thm-cauchy-functional-equation-regularity]]).

[L4] $d_\infty$ is a metric on $\mathbb{R}^{2}$ and a subset is dense exactly when every open ball meets it ([[lem-metrics-on-rn]], [[def-metric-ball]], [[def-metric-interior-closure-boundary]], [[thm-metric-closure-characterisation]]).

[L5] $W$ is a linear subspace of $\mathbb{R}$ over $\mathbb{Q}$, so $w \in W$ and $q \in \mathbb{Q}$ give $qw \in W$, and $W$ is closed under addition ([[def-linear-subspace]], [[def-linear-combination-and-span]]).

[L6] Strictly between any two distinct reals there lies a rational, and $\mathbb{R}$ is an ordered field ([[lem-rat-embeds-dense]], [[def-complete-ordered-field]]).

[L7] An additive $g$ satisfies $g(qx) = q g(x)$ for rational $q$ ([[lem-additive-is-q-linear]]).

## Verification

**Proof technique:** constructive.

1.1 Assume the Axiom of Choice, fix $B$ and $b_{\star} \in B$, and put $f := \Lambda_{b_{\star}}$ and $W := W_{b_{\star}}$. [A1, L1, construct]

2.1 Claim 1: $f$ is additive, and it is not of the form $x \mapsto cx$ for any real $c$. [step 1.1, L1, L2]

2.2 Claim 4, the range: the range of $f$ is exactly $\mathbb{Q}$, so $f^{-1}(\{v\}) = \varnothing$ for every irrational $v$ and $f^{-1}(\{r\}) \ne \varnothing$ for every rational $r$. [step 1.1, L1]

2.3 $W$ is dense in $\mathbb{R}$: by [L1] there is $w_{0} \in W$ with $w_{0} \ne 0$, and $q w_{0} \in W$ for every rational $q$; given reals $u < v$, the two reals $u/w_{0}$ and $v/w_{0}$ are distinct, so a rational $q$ lies strictly between them, and then $q w_{0}$ lies strictly between $u$ and $v$ if $w_{0} > 0$, and strictly between $v$ and $u$ if $w_{0} < 0$. Either way $W$ meets $(u,v)$. [step 1.1, L1, L5, L6]

3.1 Claim 2, clause by clause. Were $f$ bounded above on a nondegenerate interval, or bounded below on one, or monotone on one, or of constant sign on one, or continuous at a single point, the regularity theorem would give $f(x) = f(1)x$ for every real $x$, contradicting step 2.1. So none of the five holds. [step 2.1, L3]

3.2 Claim 3: were the graph of $f$ not dense in $\mathbb{R}^{2}$, the sixth clause of the regularity theorem would give the same contradiction. So the graph is dense. [step 2.1, L3, L4]

3.3 For a rational $r$ the level set $f^{-1}(\{r\})$ is $x_{r} + W$ for any $x_{r}$ with $f(x_{r}) = r$: indeed $f(y) = r$ holds exactly when $f(y - x_{r}) = f(y) - f(x_{r}) = 0$, that is exactly when $y - x_{r} \in W$. Here $f(-x) = -f(x)$ follows from additivity. [step 1.1, step 2.2, L1, L7]

4.1 Each such level set is dense in $\mathbb{R}$: given reals $u < v$, the interval $(u - x_{r},\ v - x_{r})$ meets $W$ by step 2.3, say in $w$, and then $x_{r} + w \in f^{-1}(\{r\})$ lies in $(u,v)$. Claim 4 is proved, and with steps 2.1, 3.1 and 3.2 so are claims 1, 2 and 3. [step 2.1, step 3.1, step 3.2, step 2.2, step 2.3, step 3.3, discharge-construct] ∎

## Remarks

- **The pathology is entirely a consequence of the two facts in claim 1.** The
  proof uses nothing about $f$ except that it is additive and not linear; every
  other property is read off [[thm-cauchy-functional-equation-regularity]] by
  contraposition. A single such function therefore witnesses the failure of all
  six regularity conditions at once.

- **What the level sets look like.** They are the cosets of the
  $\mathbb{Q}$-subspace $W = \ker f$, one for each rational value, and each is
  dense. So $\mathbb{R}$ is partitioned into countably many dense sets, on each
  of which $f$ is constant. The companion function of
  [[ex-bounded-with-no-local-extremum-and-nowhere-semicontinuous]] is built by
  relabelling those values.

- **No measurability claim is made.** The classical statement that a Hamel
  coefficient map is not Lebesgue measurable is not asserted here: this library
  develops no measure as it stands, so the statement is not expressible, and
  nothing above depends on it.
