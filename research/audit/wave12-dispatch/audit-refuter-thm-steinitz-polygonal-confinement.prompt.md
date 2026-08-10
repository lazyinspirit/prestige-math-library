# Audit proof-refuter brief — Wave 12, A6

> **NO SHELL-PERMISSION PROMPTS (owner, 2026-07-30).** You are read-only and
> tool-less. Do not ask for shell or edit permission. Everything available to
> you is reproduced in the dispatch task.

You are **DeepSeek V4 Pro** at the API's maximum reasoning setting, serving as
an independent adversarial proof-refuter. Return evidence only; Audit-Alpha
alone adjudicates and edits.

## Binding triage

- **Non-negotiable:** mathematical accuracy, logical validity, correct citation.
- **Explicitly acceptable, spend no effort:** minor citational quirks; logical
  gaps a competent reader closes within 30 seconds; other non-fatal quirks;
  imperfection at the level of the letter.

Read the target's title, complete public statement, Facts & Assumptions, every
numbered proof/refutation/verification step, and Remarks. Try to falsify every
load-bearing inference. Before alleging that a cited dependency is too weak,
compare the exact current supplied dependency: domain, hypotheses, quantifiers,
direction, conclusion, boundary cases, and conventions. Check biconditionals,
existence/uniqueness, recursion/induction, limits, index shifts, empty/zero/one/
endpoint/degenerate cases, hidden division, hidden choice, and false Remarks.
For an `ai-generated` Statement or consumer, actively search for a
counterexample or a failure in the witness or cited generated premise. A false
public claim, invalid proof, missing necessary hypothesis, circularity, or
materially inaccurate load-bearing citation is fatal; a quickly closable gap is
nonfatal.

Return no more than 450 words, exactly in this shape:

```text
VERDICT: CLEAN | DEFECTS
```

For each defect:

```text
FINDING 1
  location: [exact section/fact/step]
  severity: fatal | nonfatal
  claim:    [exact assertion]
  evidence: [counterexample, invalid inference, or exact source mismatch]
```

Always end with:

```text
BOUNDARY: [specific boundary/counterexample checks and disposition]
SOURCES:  [confirm every supplied cited item used by the target was inspected]
CHECKED:  [confirm title, public claim, every numbered step, and Remarks]
```


---

# This dispatch

## Selection reasons

- critical risk (13): 29 declared dependencies; 28 cited facts; 26 numbered proof steps; boundary-sensitive language; induction, recursion, or minimality; analytic limiting/completeness language
- top-20 manifest-edge consumer (29 outgoing relationships)

## Target item — `thm-steinitz-polygonal-confinement`

Normalized current SHA-256: `8a2c8e66b062bedc6e30681a8156f4de6c494da833a50dc2938079eb92ded76c`

The complete exact-current item follows, including frontmatter:

````markdown
---
id: thm-steinitz-polygonal-confinement
kind: theorem
title: "Steinitz's polygonal confinement theorem: finitely many vectors of norm at most $1$ summing to $0$ can be ordered so that every partial sum has norm at most $n$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-series-of-vectors-and-rearrangement, def-euclidean-inner-product, def-p-norms-on-rn, lem-p-norms-are-norms-and-induce-the-published-metrics, thm-cauchy-schwarz-and-the-euclidean-norm, lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric, def-norm-and-normed-space, cor-independent-set-is-no-larger-than-a-finite-spanning-set, def-linear-independence, def-dimension, lem-standard-basis-of-f-n, def-linear-combination-and-span, thm-well-ordering-principle, lem-finite-set-has-max, def-max-min, lem-finite-sum-laws, def-finite-sum, lem-finite-subsets-listable, def-countable, lem-pigeonhole, def-injection-surjection-bijection, def-canonical-natural, lem-of-naturals-positive, def-function-space, def-vector-space, thm-induction-principle, lem-of-inverse-positive, def-equinumerous, lem-vector-space-elementary-consequences]
justified_by: []
aliases: []
landmark: true
proof_strategy: constructive
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Levy-Steinitz theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/L%C3%A9vy%E2%80%93Steinitz_theorem"
    - title: "Ernst Steinitz (Wikipedia), for the 1913 paper in which the rearrangement lemma appears"
      url: "https://en.wikipedia.org/wiki/Ernst_Steinitz"
    - title: "T. Oertel, J. Paat and R. Weismantel, A Colorful Steinitz Lemma with Applications to Block Integer Programs"
      url: "https://arxiv.org/abs/2201.05874"
pipeline_run: null
---

## Statement

Let $n \in \mathbb{N}$ with $n \ge 1$, let $m \in \mathbb{N}$ and let
$v : m \to \mathbb{R}^{n}$ be a finite list of vectors with

$$\lVert v_i\rVert_2 \le 1 \ \text{ for every } i<m, \qquad \sum_{i<m} v_i = 0 .$$

Then there is a bijection $\pi : m \to m$
([[def-injection-surjection-bijection]]) such that

$$\Bigl\lVert \sum_{j<k} v_{\pi(j)} \Bigr\rVert_2 \;\le\; \iota(n) \qquad \text{for every } k \le m,$$

where $\iota$ is the canonical natural of $\mathbb{R}$
([[def-canonical-natural]]) and the sums are the finite sums of the vector space
$\mathbb{R}^{n}$ ([[def-linear-combination-and-span]]).

**The bound depends only on the dimension, not on $m$.** That is the whole
content: the triangle inequality alone gives only $\iota(k)$, which grows with
the number of vectors used.

**Which Steinitz result this is.** This is Steinitz's polygonal confinement
lemma, the rearrangement lemma of his 1913 paper on conditionally convergent
series. It is **not** the Steinitz exchange lemma of linear algebra, which is
published in this library as `thm-steinitz-exchange` and carries the alias
`lem-steinitz`. The two are unrelated results by the same author, and no item on
this page uses the bare alias.

## Facts & Assumptions

**Given:** Naturals $n \ge 1$ and $m$; a list $v : m \to \mathbb{R}^{n}$ with $\lVert v_i\rVert_2 \le 1$ for $i<m$ and $\sum_{i<m}v_i = 0$. Every finite list below is extended by $0$ beyond its range, so that the finite sums of [[def-finite-sum]] apply verbatim; a list into $\mathbb{R}^{n}$ is summed in the vector space $\mathbb{R}^{n}$ ([[def-linear-combination-and-span]]).

[L1] Norm facts: $\lVert\cdot\rVert_2$ is a norm on $\mathbb{R}^{n}$, $\lVert\lambda u\rVert_2 = |\lambda|\lVert u\rVert_2$, $\lVert u\rVert_2 \ge 0$, and the finite triangle inequality $\lVert\sum_{j<p}u_j\rVert_2 \le \sum_{j<p}\lVert u_j\rVert_2$ ([[def-norm-and-normed-space]], [[def-p-norms-on-rn]], [[lem-p-norms-are-norms-and-induce-the-published-metrics]], [[thm-cauchy-schwarz-and-the-euclidean-norm]], [[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]] clause 1).

[L2] Laws of finite sums of reals ([[lem-finite-sum-laws]], [[def-finite-sum]]): additivity, scaling, splitting $\sum_{i<r}b_i = \sum_{i<q}b_i + \sum_{i=q}^{r-1}b_i$ for $q \le r$ with $\sum_{i=q}^{r-1}b_i = \sum_{l<r-q}b_{q+l}$, monotonicity, $\sum_{j<p}\lambda = \iota(p)\lambda$, and the fact that a single term of a sum of nonnegative terms is at most the sum.

[L3] Finite sums in $\mathbb{R}^{n}$ are computed pointwise: $\bigl(\sum_{j<p}u_j\bigr)(t) = \sum_{j<p}u_j(t)$ for $t<n$ ([[lem-standard-basis-of-f-n]] clause 1), so every identity between real finite sums yields the corresponding identity between $\mathbb{R}^{n}$-valued ones; and two elements of $\mathbb{R}^{n}$ are equal exactly when all their coordinates are ([[def-function-space]], [[def-vector-space]], [[lem-vector-space-elementary-consequences]]).

[L4] The induction principle ([[thm-induction-principle]]) and the well-ordering principle: every nonempty subset of $\mathbb{N}$ has a least element ([[thm-well-ordering-principle]]).

[L5] A nonempty finite set of reals has a maximum and a minimum, each an element of the set ([[lem-finite-set-has-max]], [[def-max-min]], [[lem-finite-subsets-listable]]).

[L6] Dimension count: $\mathbb{R}^{n+1}$ has a basis with $n+1$ elements ([[lem-standard-basis-of-f-n]] clauses 2 and 4, [[def-dimension]]), so every linearly independent subset of $\mathbb{R}^{n+1}$ is finite with at most $n+1$ elements ([[cor-independent-set-is-no-larger-than-a-finite-spanning-set]], [[def-linear-independence]], [[def-countable]], [[def-equinumerous]], [[lem-pigeonhole]]).

[L7] The canonical natural ([[def-canonical-natural]], [[lem-of-naturals-positive]]): $\iota(0) = 0$ by the recursion clause, $\iota(p+q) = \iota(p)+\iota(q)$ for $p,q \ge 1$ by claim 3 there and trivially when $p = 0$ or $q = 0$, $\iota$ is strictly increasing, and $\iota(p) > 0$ for $p \ge 1$.

[L8] Order arithmetic: $u>0$ gives $u^{-1}>0$; an inequality may be multiplied by a nonnegative real; and trichotomy ([[lem-of-inverse-positive]]).

## Proof

**Proof technique:** constructive.

1.1 **Deleting one entry from a finite sum.** Let $b : \mathbb{N} \to \mathbb{R}$, let $r \ge 1$, let $q<r$, and let $b^{\wedge q}$ be the list with $b^{\wedge q}_i := b_i$ for $i<q$ and $b^{\wedge q}_i := b_{i+1}$ for $q \le i < r-1$. Then $\sum_{i<r}b_i = \sum_{i<r-1}b^{\wedge q}_i + b_q$: splitting the left side at $q$ and again at $q+1$ gives $\sum_{i<q}b_i + b_q + \sum_{l<r-1-q}b_{q+1+l}$, and splitting the right side at $q$ gives $\sum_{i<q}b_i + \sum_{l<r-1-q}b_{q+l+1}$, and the two agree. [L2]

1.2 **The easy case $m \le n$.** Take $\pi$ to be the identity of $m$, a bijection. For $k \le m$ the finite triangle inequality and $\lVert v_j\rVert_2 \le 1$ give $\lVert\sum_{j<k}v_j\rVert_2 \le \sum_{j<k}\lVert v_j\rVert_2 \le \sum_{j<k}1 = \iota(k) \le \iota(n)$, since $k \le m \le n$ and $\iota$ is increasing. So the theorem holds in this case, and we assume $m>n$ from here on. [construct, L1, L2, L7]

1.3 **Stage data.** For $n \le k \le m$ call a pair $(b,\mu)$ **admissible at $k$** when $b : k \to m$ is injective, $\mu : \mathbb{N} \to \mathbb{R}$ vanishes at every $j \ge k$, satisfies $0 \le \mu_j \le 1$ for $j<k$, and satisfies $\sum_{j<k}\mu_j v_{b(j)} = 0$ and $\sum_{j<k}\mu_j = \iota(k-n)$. [construct]

1.4 **Stage $m$ is admissible.** Take $b^{m} :=$ the identity of $m$ and $\mu^{m}_j := \iota(m-n)/\iota(m)$ for $j<m$, $\mu^m_j := 0$ for $j \ge m$; here $\iota(m) > 0$ because $m > n \ge 1$, and $0 \le \iota(m-n) \le \iota(m)$ gives $0 \le \mu^m_j \le 1$. Then $\sum_{j<m}\mu^m_j v_j = \bigl(\iota(m-n)/\iota(m)\bigr)\sum_{j<m}v_j = 0$ and $\sum_{j<m}\mu^m_j = \iota(m)\cdot\iota(m-n)/\iota(m) = \iota(m-n)$. [construct, L2, L7, L8]

1.5 **The estimate for $k<n$, for an arbitrary ordering.** For every bijection $\rho : m \to m$ and every $k<n$, the finite triangle inequality gives $\bigl\lVert\sum_{j<k}v_{\rho(j)}\bigr\rVert_2 \le \sum_{j<k}\lVert v_{\rho(j)}\rVert_2 \le \sum_{j<k}1 = \iota(k) \le \iota(n)$. [L1, L2, L7]

2.1 **The reindexing identity.** For every $k \in \mathbb{N}$, every $r \in \mathbb{N}$, every injective $f : r \to k$ and every $c : \mathbb{N} \to \mathbb{R}$ vanishing at every $j<k$ outside the image of $f$, one has $\sum_{j<k}c_j = \sum_{i<r}c_{f(i)}$. This is proved by induction on $k$, with $r$, $f$ and $c$ universally quantified. At $k=0$ the only injective $f : r \to 0$ has $r = 0$ and both sums are empty. At $k+1$, write $\sum_{j<k+1}c_j = \sum_{j<k}c_j + c_k$: if $k$ is not in the image of $f$ then $c_k = 0$ and $f$ maps into $k$, so the inductive hypothesis applies directly; and if $k = f(q)$ for the unique such $q<r$, then $r \ge 1$ and the list $g := f^{\wedge q}$ of step 1.1 is an injective map $r-1 \to k$ off whose image $c$ vanishes on $\{j : j<k\}$, so the inductive hypothesis gives $\sum_{j<k}c_j = \sum_{i<r-1}c_{g(i)}$, while step 1.1 applied to $b_i := c_{f(i)}$ gives $\sum_{i<r}c_{f(i)} = \sum_{i<r-1}c_{g(i)} + c_{f(q)}$; adding $c_k = c_{f(q)}$ to the first identity yields the claim. [step 1.1, L2, L4]

2.2 **The feasible set at $k-1$ is nonempty.** Let $(b,\mu)$ be admissible at $k$ with $n<k\le m$, and let $\Lambda$ be the set of all $\mu' : \mathbb{N} \to \mathbb{R}$ vanishing at every $j\ge k$, with $0 \le \mu'_j \le 1$ for $j<k$, $\sum_{j<k}\mu'_j v_{b(j)} = 0$ and $\sum_{j<k}\mu'_j = \iota(k-1-n)$. The scalar $\rho := \iota(k-1-n)/\iota(k-n)$ is defined and lies in $[0,1]$, since $\iota(k-n)>0$ and $0 \le \iota(k-1-n) \le \iota(k-n)$; and $\rho\mu$ lies in $\Lambda$. [step 1.3, L2, L7, L8]

3.1 Both identities hold verbatim for lists with values in $\mathbb{R}^{n}$, since a vector identity is the conjunction of its $n$ coordinate identities and the coordinates of a vector finite sum are the real finite sums of the coordinates. [step 1.1, step 2.1, L3]

3.2 **The minimal number of fractional coordinates.** Call $\mu' \in \Lambda$ **$r$-simple** when there is an injective $f : r \to k$ with $\mu'_j \in \{0,1\}$ for every $j<k$ outside the image of $f$. The set $R := \{\, r \in \mathbb{N} : \text{some } \mu' \in \Lambda \text{ is } r\text{-simple} \,\}$ contains $k$, taking $f$ to be the identity of $k$, so $R$ is a nonempty set of naturals and has a least element $r_0$; fix $\mu \in \Lambda$ and an injective $f : r_0 \to k$ witnessing it. [step 2.2, L4]

4.1 **Two consequences used repeatedly.** Taking $k = r$ and $f$ a bijection of $k$ in step 2.1 gives $\sum_{j<k}c_{f(j)} = \sum_{j<k}c_j$ for every $c$; and taking $c$ to vanish off the image of an injective $f : r \to k$ gives $\sum_{j<k}c_j = \sum_{i<r}c_{f(i)}$, both in $\mathbb{R}$ and in $\mathbb{R}^{n}$. [step 2.1, step 3.1]

4.2 **Every marked coordinate is strictly fractional.** For every $i<r_0$ one has $0 < \mu_{f(i)} < 1$: otherwise $\mu_{f(i)} \in \{0,1\}$, and then $f^{\wedge i}$, an injective map $r_0-1 \to k$ off whose image $\mu$ takes values in $\{0,1\}$, would witness that $\mu$ is $(r_0-1)$-simple, contradicting minimality of $r_0$. [step 1.1, step 3.2]

4.3 **Suppose $r_0 \ge n+2$, towards a contradiction.** Define $w : r_0 \to \mathbb{R}^{n+1}$ by $w_i(t) := \bigl(v_{b(f(i))}\bigr)(t)$ for $t<n$ and $w_i(n) := 1$. [step 3.2]

5.1 **The list $w$ is linearly dependent:** there is $\lambda : r_0 \to \mathbb{R}$, not identically $0$, with $\sum_{i<r_0}\lambda_i w_i = 0$. If $w$ is not injective, say $w_{i_1} = w_{i_2}$ with $i_1 \ne i_2$, take $\lambda_{i_1} := 1$, $\lambda_{i_2} := -1$ and $\lambda_i := 0$ otherwise; the list $i \mapsto \lambda_i w_i$ then vanishes off $\{i_1,i_2\}$ and sums to $w_{i_1} - w_{i_2} = 0$ by step 4.1. If $w$ is injective, its image is a subset of $\mathbb{R}^{n+1}$ equinumerous with $r_0 \ge n+2$, hence not linearly independent by [L6]; so some injective list $h : p \to \operatorname{im}(w)$ is linearly dependent, giving $\nu : p \to \mathbb{R}$ not identically $0$ with $\sum_{l<p}\nu_l h(l) = 0$, and setting $\lambda_{i} := \nu_l$ when $w_i = h(l)$ and $\lambda_i := 0$ otherwise turns that into $\sum_{i<r_0}\lambda_i w_i = 0$ by step 4.1, the list $i \mapsto \lambda_i w_i$ vanishing off the image of the injective map $l \mapsto$ the unique $i$ with $w_i = h(l)$. [step 4.3, L6]

5.2 **The step length.** Let $i_0$ be the least $i<r_0$ with $\lambda_i \ne 0$, which exists because $\lambda$ is not identically $0$. Define $s : r_0 \to \mathbb{R}$ by $s_i := (1-\mu_{f(i)})/\lambda_i$ if $\lambda_i>0$, by $s_i := \mu_{f(i)}/(-\lambda_i)$ if $\lambda_i<0$, and by $s_i := s_{i_0}$ if $\lambda_i = 0$; every $s_i$ is a positive real by step 4.2. Put $t^{*} := \min\{s_0,\dots,s_{r_0-1}\}$, a minimum over a nonempty finite set of reals, so $t^{*}>0$ and $t^{*} = s_{i}$ for some $i<r_0$; choosing that $i$ if $\lambda_i \ne 0$ and $i_0$ otherwise, there is $i^{*}<r_0$ with $\lambda_{i^{*}} \ne 0$ and $t^{*} = s_{i^{*}}$. [step 4.2, L4, L5, L8]

6.1 **Reading the coordinates of step 5.1.** The coordinate $n$ gives $\sum_{i<r_0}\lambda_i = 0$, and the coordinates $t<n$ give $\sum_{i<r_0}\lambda_i v_{b(f(i))} = 0$ in $\mathbb{R}^{n}$. [step 4.3, step 5.1, L3]

6.2 **The moved point.** Define $\mu' : \mathbb{N} \to \mathbb{R}$ by $\mu'_j := \mu_j + t^{*}\lambda_i$ if $j = f(i)$ for the unique $i<r_0$ with that property, and $\mu'_j := \mu_j$ otherwise. Then $0 \le \mu'_j \le 1$ for every $j<k$: outside the image of $f$ nothing changes; at $j = f(i)$ with $\lambda_i>0$ one has $\mu_{f(i)} < \mu'_j \le \mu_{f(i)} + s_i\lambda_i = 1$; with $\lambda_i<0$ one has $0 = \mu_{f(i)} + s_i\lambda_i \le \mu'_j < \mu_{f(i)}$; and with $\lambda_i = 0$ the value is unchanged. [step 4.2, step 5.2, L8]

7.1 **The moved point is feasible.** The list $j \mapsto \mu'_j - \mu_j$ vanishes at every $j<k$ off the image of $f$ and takes the value $t^{*}\lambda_i$ at $f(i)$, so step 4.1 gives $\sum_{j<k}(\mu'_j-\mu_j) = \sum_{i<r_0}t^{*}\lambda_i = t^{*}\cdot 0 = 0$; likewise the $\mathbb{R}^{n}$-valued list $j \mapsto (\mu'_j-\mu_j)v_{b(j)}$ vanishes off that image and takes the value $t^{*}\lambda_i v_{b(f(i))}$ at $f(i)$, so $\sum_{j<k}(\mu'_j-\mu_j)v_{b(j)} = t^{*}\sum_{i<r_0}\lambda_i v_{b(f(i))} = 0$. Hence $\sum_{j<k}\mu'_j = \iota(k-1-n)$ and $\sum_{j<k}\mu'_j v_{b(j)} = 0$, so $\mu' \in \Lambda$. [step 4.1, step 6.1, step 6.2, L2, L3]

8.1 **The contradiction.** By step 5.2, $\mu'_{f(i^{*})} = \mu_{f(i^{*})} + t^{*}\lambda_{i^{*}} \in \{0,1\}$. So $f^{\wedge i^{*}}$, an injective map $r_0-1 \to k$, witnesses that $\mu'$ is $(r_0-1)$-simple: off the image of $f$ the value $\mu'_j = \mu_j$ lies in $\{0,1\}$, and at $f(i^{*})$ it lies in $\{0,1\}$ as just shown. This contradicts the minimality of $r_0$, so the supposition of step 4.3 is untenable and $r_0 \le n+1$. [step 1.1, step 3.2, step 5.2, step 6.2, step 7.1]

9.1 **The support bound.** There is $j_0<k$ with $\mu_{j_0} = 0$. Suppose instead that $\mu_j>0$ for every $j<k$; then off the image of $f$ the value $\mu_j$ lies in $\{0,1\}$ and is positive, hence equals $1$. Put $\nu_j := 1-\mu_j$ for $j<k$ and $\nu_j := 0$ for $j \ge k$, so $\nu$ vanishes at every $j<k$ off the image of $f$ and satisfies $0<\nu_{f(i)}<1$ for $i<r_0$ by step 4.2, while $\sum_{j<k}\nu_j = \iota(k)-\iota(k-1-n) = \iota(n+1)$ by [L7]. [step 4.2, step 8.1, L2, L7]

10.1 By step 4.1, $\sum_{j<k}\nu_j = \sum_{i<r_0}\nu_{f(i)}$. If $r_0 = 0$ this is the empty sum $0$, contradicting $\iota(n+1)>0$. If $r_0 \ge 1$ then every term of $\sum_{i<r_0}(1-\nu_{f(i)})$ is positive, so that sum is at least its term at index $0$ and hence positive, whence $\sum_{i<r_0}\nu_{f(i)} = \iota(r_0) - \sum_{i<r_0}(1-\nu_{f(i)}) < \iota(r_0) \le \iota(n+1)$ using step 8.1. Either way $\iota(n+1) < \iota(n+1)$ or $\iota(n+1) = 0$, both impossible; so some $\mu_{j_0}$ is $0$. [step 4.1, step 8.1, step 9.1, L2, L7, L8]

11.1 **Descending one stage.** With $j_0$ as in step 9.1, put $b' := b^{\wedge j_0} : k-1 \to m$ and $\mu'' := \mu^{\wedge j_0}$, extended by $0$ beyond $k-1$. Then $b'$ is injective with image $\operatorname{im}(b)\setminus\{b(j_0)\}$, $0 \le \mu''_j \le 1$ for $j<k-1$, and by step 1.1 in both its real and its vector form, $\sum_{j<k-1}\mu''_j = \sum_{j<k}\mu_j - \mu_{j_0} = \iota(k-1-n)$ and $\sum_{j<k-1}\mu''_j v_{b'(j)} = \sum_{j<k}\mu_j v_{b(j)} - \mu_{j_0}v_{b(j_0)} = 0$. So $(b',\mu'')$ is admissible at $k-1$. [construct, step 1.1, step 3.1, step 3.2, step 10.1]

12.1 **Iterating.** Starting from the admissible pair of step 1.4 at $k = m$ and applying step 11.1 once for each $k$ from $m$ down to $n+1$, one obtains admissible pairs $(b^{k},\mu^{k})$ for every $k$ with $n \le k \le m$, with $\operatorname{im}(b^{k-1}) \subseteq \operatorname{im}(b^{k})$ and $\operatorname{im}(b^{k})\setminus\operatorname{im}(b^{k-1})$ a single element. This is a recursion of length $m-n$, each stage determined by the previous one together with finitely many determinations (a least natural, a minimum of a finite set of reals), so no choice principle is involved. [construct, step 1.4, step 11.1, L4, L5]

13.1 **The ordering.** Define $\pi : m \to m$ by $\pi(j) := b^{n}(j)$ for $j<n$ and, for each $k$ with $n<k\le m$, $\pi(k-1) := $ the unique element of $\operatorname{im}(b^{k})\setminus\operatorname{im}(b^{k-1})$. The images $\operatorname{im}(b^{k})$ increase from $\operatorname{im}(b^{n})$, of size $n$, to $\operatorname{im}(b^{m}) = m$, gaining exactly one element at each stage, so $\pi$ is injective with image $m$, that is a bijection, and for every $k$ with $n \le k \le m$ the set $\{\pi(j) : j<k\}$ is exactly $\operatorname{im}(b^{k})$. [construct, step 12.1, L4, L6]

14.1 **Both enumerations give the same partial sum.** Fix $k$ with $n \le k \le m$ and let $c : \mathbb{N} \to \mathbb{R}^{n}$ be $c_i := v_i$ for $i \in \operatorname{im}(b^{k})$ and $c_i := 0$ otherwise. Then $c$ vanishes at every $i<m$ off the image of the injective list $j \mapsto \pi(j)$ on $k$, and also off the image of $b^{k}$, so step 4.1 applied twice gives $\sum_{j<k}v_{\pi(j)} = \sum_{i<m}c_i = \sum_{j<k}v_{b^{k}(j)}$. [step 4.1, step 13.1]

15.1 **The estimate for $n \le k \le m$.** Since $\sum_{j<k}\mu^{k}_j v_{b^{k}(j)} = 0$, additivity gives $\sum_{j<k}v_{b^{k}(j)} = \sum_{j<k}\bigl(1-\mu^{k}_j\bigr)v_{b^{k}(j)}$; each coefficient $1-\mu^{k}_j$ is nonnegative, so the finite triangle inequality and $\lVert v_i\rVert_2 \le 1$ give $\bigl\lVert\sum_{j<k}v_{b^{k}(j)}\bigr\rVert_2 \le \sum_{j<k}\bigl(1-\mu^{k}_j\bigr)\lVert v_{b^{k}(j)}\rVert_2 \le \sum_{j<k}\bigl(1-\mu^{k}_j\bigr) = \iota(k)-\iota(k-n) = \iota(n)$. [step 12.1, step 14.1, L1, L2, L7]

16.1 By steps 14.1 and 15.1 the bound $\lVert\sum_{j<k}v_{\pi(j)}\rVert_2 \le \iota(n)$ holds for $n \le k \le m$, and by step 1.5 it holds for $k<n$; together with the case $m \le n$ of step 1.2, the required bijection $\pi$ has been exhibited in every case. [step 1.2, step 13.1, step 14.1, step 15.1, step 1.5, discharge-construct] ∎

## Remarks

- **The support bound of steps 9.1 and 10.1 is the step most write-ups omit.** From $r_0 \le n+1$ one gets only that the support of $\mu$ has at most $(k-1-n)+(n+1) = k$ elements, which is no information at all. What rules out equality is that the quantities $1-\mu_{f(i)}$ would then be strictly positive at each of at most $n+1$ marked indices while summing to $\iota(n+1)$; that is exactly the computation in steps 9.1 and 10.1, and without a coordinate $\mu_{j_0} = 0$ the descending construction does not start.

- **Where the dimension enters, and only there.** The single place the number $n$ is used is step 5.1, where $n+2$ vectors in $\mathbb{R}^{n+1}$ are linearly dependent. The extra coordinate constantly $1$ is what converts the constraint $\sum_i \lambda_i = 0$ into a linear condition, so that one dependence delivers both identities of step 6.1 at once.

- **No choice principle is used.** The construction is a recursion of length $m-n$; at each stage the objects produced are a least natural number ([[thm-well-ordering-principle]]) and a minimum of a nonempty finite set of reals ([[lem-finite-set-has-max]]), both determined rather than selected, and the pair $(\mu, f)$ of step 3.2 is a single selection from a nonempty set at each of finitely many stages.

- **The reindexing identity of step 2.1 is proved here rather than cited.** [[lem-finite-sum-laws]] is stated for sums $\sum_{k<n}a_k$ over an initial segment of $\mathbb{N}$ and carries no invariance clause, and no lemma available to this page gives the form step 2.1 needs — an injective $f : r \to k$ with the summand vanishing at every $j < k$ off its image. That form is therefore proved here. Step 2.1 contains permutation invariance as the special case $r = k$ with $f$ a bijection.

- **The constant $\iota(n)$ is not claimed to be optimal.** What is proved is that some ordering keeps every partial sum inside the ball of radius $\iota(n)$; on an explicit list of six unit vectors in $\mathbb{R}^{2}$ the companion page exhibits one ordering that meets the bound — with room to spare, so the bound is not attained there — and another that violates it, so the theorem is seen to say something.
````

## Wave 12 provenance row

```json
{
  "id": "thm-steinitz-polygonal-confinement",
  "statement": "ai-altered",
  "proof": "ai-generated",
  "evidence": "semantic-source",
  "urls": [
    "https://arxiv.org/abs/2201.05874"
  ],
  "rationale": "Steinitz's polygonal confinement theorem: finitely many vectors of norm at most $1$ summing to $0$ can be ordered so that every partial sum has norm at most $n$: The cited paper proves the stronger arbitrary-norm finite zero-sum unit-ball permutation theorem with every partial sum bounded by the dimension; the item is its Euclidean-norm specialization in zero-based notation. The supplied numbered argument was audited as a local proof rather than a transcription or identifiable adaptation of a source proof.",
  "alpha_concurred": false,
  "at": "2026-08-09"
}
```

## Exact-current proof contract

```json
{
  "citations": [
    {
      "fact": "L1",
      "source": "def-norm-and-normed-space",
      "source_section": "Definition",
      "quote": "Throughout this page $\\mathbb{R}$ is the complete ordered field ([[def-complete-ordered-field]]) constructed in this library, in particular a field, so that \"vector space\" below always means vector space over $\\mathbb{R}$ ([[def-vector-space]]). Let $V$ be a vector space over $\\mathbb{R}$, with zero vector $0_V$. A **norm on $V$** is a function $N : V \\to \\mathbb{R}$ such that for all $u, v \\in V$ and all $\\lambda \\in \\mathbb{R}$: - **(N1) Separation.** $N(v) = 0$ if and only if $v = 0_V$. - **(N2) Absolute homogeneity.** $N(\\lambda v) = |\\lambda|\\,N(v)$, the absolute value being that of [[def-abs-value]]. - **(N3) Triangle inequality.** $N(u + v) \\le N(u) + N(v)$. A **normed space** is a pair $(V, N)$ consisting of a vector space $V$ over $\\mathbb{R}$ and a norm $N$ on it. When only one norm is in play we write $\\lVert v\\rVert$ for $N(v)$; when several are, the norm is always named. **The values of a norm are real numbers.** The codomain is $\\mathbb{R}$, so $N(v)$ is an honest element of the complete ordered field and no infinite value is permitted. This is the same convention [[rem-metric-axiom-conventions]] records for metrics. ### Nonnegativity is a theorem, not an axiom Many texts add a fourth condition $N(v) \\ge 0$. It is redundant. Applying (N2) with $\\lambda = -1$ gives $N(-v) = |-1|\\,N(v) = N(v)$ ([[lem-of-abs-value]], [[lem-vector-space-elementary-consequences]] for $(-1)v = -v$), and then (N3) with $u = v$ and $-v$ gives $$0 \\;=\\; N(0_V) \\;=\\; N\\bigl(v + (-v)\\bigr) \\;\\le\\; N(v) + N(-v) \\;=\\; N(v) + N(v),$$ where $N(0_V) = 0$ is (N1). So $N(v) + N(v) \\ge 0$, and if $N(v) < 0$ then $N(v) + N(v) < 0$ by addition of inequalities, which trichotomy forbids ([[def-complete-ordered-field]]). Hence $N(v) \\ge 0$ for every $v \\in V$. **Consequently the verification of a candidate norm has three things to check and not four**, exactly as the verification of a candidate metric has three and not four ([[def-metric-space]], [[lem-metric-nonnegativity]]). No item in this library assumes nonnegativity of a norm before the argument above. ### The induced metric Let $N$ be a norm on $V$ and define $$d_N(u,v) \\;:=\\; N(u - v) \\qquad (u, v \\in V),$$ where $u - v = u + (-v)$ ([[def-vector-space]]). **Then $d_N$ is a metric on $V$** ([[def-metric-space]]), and the three axioms are the three conditions above, in order: - **(M1)** $d_N(u,v) = 0$ means $N(u-v) = 0$, which by (N1) says $u - v = 0_V$, that is $u = v$; and conversely $d_N(v,v) = N(0_V) = 0$. - **(M2)** $d_N(v,u) = N(v-u) = N\\bigl((-1)(u-v)\\bigr) = |-1|\\,N(u-v) = d_N(u,v)$, by (N2), [[lem-of-abs-value]] and $(-1)w = -w$ ([[lem-vector-space-elementary-consequences]]). - **(M3)** $d_N(u,w) = N\\bigl((u-v) + (v-w)\\bigr) \\le N(u-v) + N(v-w) = d_N(u,v) + d_N(v,w)$, by (N3). A normed space is therefore a metric space, and every notion defined for metric spaces — open set ([[def-metric-topology]]), convergence, Cauchyness, continuity, compactness — is available in it with no further definition. **This library never introduces a second notion of any of them for normed spaces.** ### Two properties an arbitrary metric need not have The metric $d_N$ satisfies, for all $u, v, w \\in V$ and $\\lambda \\in \\mathbb{R}$: - **translation invariance**, $d_N(u + w, v + w) = N\\bigl((u+w)-(v+w)\\bigr) = N(u-v) = d_N(u,v)$; - **absolute homogeneity**, $d_N(\\lambda u, \\lambda v) = N\\bigl(\\lambda(u-v)\\bigr) = |\\lambda|\\,d_N(u,v)$, by (N2). **Not every metric on a vector space arises from a norm**, and homogeneity is what fails. The published bounded remetrisation [[lem-bounded-remetrisation]] replaces a metric $d$ by $d' = \\min\\{d, 1\\}$, a metric with the same topology whose values never exceed $1$; on a vector space $V$ containing a vector $v$ with $d(v, 0_V) > 0$ this $d'$ cannot be $d_M$ for any norm $M$, since absolute homogeneity would force $d'(\\lambda v, 0_V) = |\\lambda|\\,d'(v, 0_V)$, which is unbounded in $\\lambda$, while $d'$ is bounded by $1$. So the passage from norms to metrics is not reversible, and a statement about a metric on a vector space is strictly weaker than the corresponding statement about a norm.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.2",
        "1.5",
        "15.1"
      ]
    },
    {
      "fact": "L1",
      "source": "def-p-norms-on-rn",
      "source_section": "Definition",
      "quote": "Let $n \\in \\mathbb{N}$ and let $\\mathbb{R}^{n}$ be the function space of [[def-euclidean-inner-product]], with $x_k := x(k)$ for $k < n$. ### The $p$-norm, for a rational exponent $p \\ge 1$ Let $p \\in \\mathbb{Q}$ with $p \\ge 1$. For $x \\in \\mathbb{R}^{n}$ put $$\\lVert x\\rVert_p \\;:=\\; \\Bigl(\\sum_{k<n} |x_k|^{p}\\Bigr)^{1/p},$$ where $|\\cdot|$ is the absolute value ([[def-abs-value]]), the sum is the finite sum of [[def-finite-sum]], and both powers are the **rational** powers of [[def-rational-power]]. **Every power written here is defined.** Each base $|x_k|$ is a nonnegative real and $p > 0$, so $|x_k|^{p}$ is given by [[def-rational-power]] for $|x_k| > 0$ and by its supplementary clause $0^{p} = 0$ for $|x_k| = 0$; the sum of these nonnegative terms is nonnegative ([[lem-finite-sum-laws]] clause 4), and $1/p$ is a positive rational, so the outer power is defined for the same two reasons. The value does not depend on which representative of $p$ or of $1/p$ is used ([[lem-rational-power-well-defined]]). **The exponent is a rational, and that is not a matter of taste.** [[def-rational-power]] supplies $a^{r}$ for a nonnegative base and a **rational** exponent only; real exponents do not exist at this point in the reading order, and [[rem-real-exponents-deferred]] records exactly why. This is also why the published Minkowski inequality [[thm-minkowski-finite]], which is what makes the triangle inequality work below, is itself stated for rational $p \\ge 1$. **No statement on this page is written for $p$ ranging over a real interval.** ### The maximum norm For $n \\ge 1$ and $x \\in \\mathbb{R}^{n}$ put $$\\lVert x\\rVert_\\infty \\;:=\\; \\max\\{\\, |x_k| \\;:\\; k < n \\,\\},$$ the maximum of a nonempty finite set of reals, which exists and is one of its elements ([[lem-finite-set-has-max]], [[def-max-min]]). **The hypothesis $n \\ge 1$ is required and propagates.** At $n = 0$ the set $\\{|x_k| : k<n\\}$ is empty and has no maximum ([[def-max-min]]). This is the same restriction the published [[lem-metrics-on-rn]] carries, for the same reason, and **every statement on this page that mentions $\\lVert\\cdot\\rVert_\\infty$ inherits it**. The $p$-norms for rational $p \\ge 1$ carry no such restriction: at $n = 0$ each is the empty sum raised to a positive rational power, hence $0$. ### The three cases the rest of the page uses - $\\lVert x\\rVert_1 = \\sum_{k<n}|x_k|$, since $t^{1} = t$ for $t \\ge 0$ ([[lem-rational-power-laws]], and $0^{1} = 0$ by the supplementary clause). - $\\lVert x\\rVert_2 = \\bigl(\\sum_{k<n}|x_k|^{2}\\bigr)^{1/2} = \\sqrt{\\sum_{k<n}x_k^{2}}$, which is exactly the Euclidean norm of [[def-euclidean-inner-product]]: the exponent $2$ agrees with the integer power, so $|x_k|^{2} = x_k^{2}$ ([[lem-of-abs-value]]), and $t^{1/2}$ is the unique nonnegative square root of $t$, which is $\\sqrt{t}$ ([[def-rational-power]], [[thm-of-square-roots]]). **The two notations denote the same function and no second Euclidean norm is introduced.** - $\\lVert x\\rVert_\\infty$ as above, for $n \\ge 1$. That each of these is a norm in the sense of [[def-norm-and-normed-space]], and that the metrics they induce are exactly the published $d_1$, $d_2$ and $d_\\infty$ of [[lem-metrics-on-rn]], is [[lem-p-norms-are-norms-and-induce-the-published-metrics]]; it is proved there and is not assumed here.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.2",
        "1.5",
        "15.1"
      ]
    },
    {
      "fact": "L1",
      "source": "lem-p-norms-are-norms-and-induce-the-published-metrics",
      "source_section": "Statement",
      "quote": "Let $n \\in \\mathbb{N}$ and let $p \\in \\mathbb{Q}$ with $p \\ge 1$, with the norms of [[def-p-norms-on-rn]]. Then: 1. $\\lVert\\cdot\\rVert_p$ is a norm on $\\mathbb{R}^{n}$ ([[def-norm-and-normed-space]]). 2. For $n \\ge 1$, $\\lVert\\cdot\\rVert_\\infty$ is a norm on $\\mathbb{R}^{n}$. 3. **The dictionary.** For $n \\ge 1$ and all $x, y \\in \\mathbb{R}^{n}$, $$\\lVert x-y\\rVert_1 = d_1(x,y), \\qquad \\lVert x-y\\rVert_2 = d_2(x,y), \\qquad \\lVert x-y\\rVert_\\infty = d_\\infty(x,y),$$ where $d_1$, $d_2$, $d_\\infty$ are the metrics of the published [[lem-metrics-on-rn]]. So the metric induced by each of these three norms ([[def-norm-and-normed-space]]) **is** the correspondingly named published metric, not merely one equivalent to it. **Consequence, used repeatedly below and stated once here.** By clause 3 at $p = 2$, the metric space $(\\mathbb{R}^{n}, d_2)$ of the published metric-spaces page and the metric space underlying the normed space $(\\mathbb{R}^{n}, \\lVert\\cdot\\rVert_2)$ of this page are the same object. Hence completeness ([[thm-euclidean-space-complete]] clause 2), Heine-Borel ([[thm-heine-borel-rn]] clause 2) and the compactness equivalences ([[thm-metric-compactness-equivalences]]) are statements about this page's normed space, **with their hypothesis $n \\ge 1$ inherited unchanged and not weakened**. Nothing below cites any of those three theorems for $n = 0$. **Why this lemma exists.** Without it the library would hold a norm-induced metric on $\\mathbb{R}^{n}$ and a separately published metric on the same set with no recorded relation, and every later citation would have to guess which was meant. The proof of clause 3 is a comparison of two written expressions; the value is that the comparison is made and recorded.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.2",
        "1.5",
        "15.1"
      ]
    },
    {
      "fact": "L1",
      "source": "thm-cauchy-schwarz-and-the-euclidean-norm",
      "source_section": "Statement",
      "quote": "Let $n \\in \\mathbb{N}$ and let $x, y \\in \\mathbb{R}^{n}$, with the Euclidean inner product and the Euclidean norm as in [[def-euclidean-inner-product]]. Then: 1. **Cauchy-Schwarz.** $$\\lvert\\langle x,y\\rangle\\rvert \\;\\le\\; \\lVert x\\rVert_2\\,\\lVert y\\rVert_2 ,$$ with equality if and only if there is a pair $(\\lambda,\\mu) \\ne (0,0)$ of reals with $\\lambda x_k = \\mu y_k$ for every $k < n$. 2. **$\\lVert\\cdot\\rVert_2$ is a norm on $\\mathbb{R}^{n}$** ([[def-norm-and-normed-space]]), for **every** $n \\in \\mathbb{N}$; the metric it induces is $d_2$ of [[lem-metrics-on-rn]] whenever $n \\ge 1$. 3. **Parallelogram law.** $$\\lVert x+y\\rVert_2^{2} + \\lVert x-y\\rVert_2^{2} \\;=\\; 2\\lVert x\\rVert_2^{2} + 2\\lVert y\\rVert_2^{2} .$$ 4. **Polarisation.** $$\\langle x,y\\rangle \\;=\\; \\tfrac14\\Bigl(\\lVert x+y\\rVert_2^{2} - \\lVert x-y\\rVert_2^{2}\\Bigr),$$ so the inner product is recovered from the norm it induces. **Clause 1 is a citation, not a new proof.** The inequality and its equality case are the published [[thm-cauchy-schwarz-finite]], stated there for two lists of reals; all that happens below is that it is read in the vector notation of [[def-euclidean-inner-product]]. Re-proving it here would put two proofs of one statement in the library.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.2",
        "1.5",
        "15.1"
      ]
    },
    {
      "fact": "L1",
      "source": "lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric",
      "source_section": "Statement",
      "quote": "**Clause 1 is about an arbitrary norm; clauses 2 to 4 are about $\\mathbb{R}^{n}$ with $n \\ge 1$.** 1. **Finite and reverse triangle inequalities.** Let $V$ be a vector space over $\\mathbb{R}$ and $N$ a norm on it ([[def-norm-and-normed-space]]). For every $p \\in \\mathbb{N}$ and every list $u : p \\to V$ ([[def-linear-combination-and-span]]), $$N\\Bigl(\\sum_{j<p} u_j\\Bigr) \\;\\le\\; \\sum_{j<p} N(u_j),$$ and for all $u, w \\in V$, $$\\bigl|N(u) - N(w)\\bigr| \\;\\le\\; N(u - w).$$ Now let $n \\in \\mathbb{N}$ with $n \\ge 1$, let $\\mathbb{R}^{n}$ carry the norms of [[def-p-norms-on-rn]] and write $\\iota$ for the canonical natural ([[def-canonical-natural]]). 2. **Every norm is dominated by the $1$-norm.** Let $N$ be a norm on $\\mathbb{R}^{n}$ and put $C := \\max\\{\\, N(e_k) : k<n \\,\\}$, a maximum over a nonempty finite set of reals ([[lem-standard-basis-of-f-n]], [[lem-finite-set-has-max]]). Then $C \\ge 0$ and $$N(x) \\;\\le\\; C\\,\\lVert x\\rVert_1 \\qquad \\text{for every } x \\in \\mathbb{R}^{n}.$$ 3. **The comparison chain.** For every $x \\in \\mathbb{R}^{n}$, $$\\lVert x\\rVert_\\infty \\;\\le\\; \\lVert x\\rVert_2 \\;\\le\\; \\lVert x\\rVert_1 \\;\\le\\; \\iota(n)\\,\\lVert x\\rVert_\\infty , \\qquad \\lVert x\\rVert_1 \\;\\le\\; \\sqrt{\\iota(n)}\\;\\lVert x\\rVert_2 .$$ In particular $\\lVert\\cdot\\rVert_1$, $\\lVert\\cdot\\rVert_2$ and $\\lVert\\cdot\\rVert_\\infty$ are pairwise equivalent norms on $\\mathbb{R}^{n}$, with the constants displayed ([[def-equivalent-norms]]). 4. **Every norm is Lipschitz for the Euclidean metric.** With $N$ and $C$ as in clause 2, $N : (\\mathbb{R}^{n}, d_2) \\to (\\mathbb{R}, d_{\\mathbb{R}})$ is Lipschitz with constant $C\\sqrt{\\iota(n)}$ ([[def-lipschitz-holder-contraction]], [[lem-metrics-on-rn]], [[lem-real-line-is-a-metric-space]]), hence uniformly continuous and continuous ([[thm-metric-regularity-hierarchy]], [[def-metric-continuity]]). **Where $n \\ge 1$ enters.** Clauses 2 and 4 need the maximum defining $C$ to exist, and clause 3 mentions $\\lVert\\cdot\\rVert_\\infty$; at $n = 0$ each is a maximum over the empty index set and does not exist, exactly as in [[lem-metrics-on-rn]] and [[def-p-norms-on-rn]]. Clause 1 carries no hypothesis on the dimension and no hypothesis on the space.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.2",
        "1.5",
        "15.1"
      ]
    },
    {
      "fact": "L2",
      "source": "lem-finite-sum-laws",
      "source_section": "Statement",
      "quote": "Let $a, b, c : \\mathbb{N} \\to \\mathbb{R}$ be sequences of reals, let $\\lambda \\in \\mathbb{R}$, and let $m, n \\in \\mathbb{N}$, with finite sums and finite products as in [[def-finite-sum]]. Then: 1. **Additivity.** $\\displaystyle\\sum_{k<n}(a_k + b_k) = \\sum_{k<n} a_k + \\sum_{k<n} b_k$. 2. **Scaling.** $\\displaystyle\\sum_{k<n} \\lambda a_k = \\lambda \\sum_{k<n} a_k$; in particular $\\displaystyle\\sum_{k<n} \\lambda = n\\lambda$, where $n$ denotes the canonical natural $\\iota(n) \\in \\mathbb{R}$ ([[lem-of-q-embeds]], [[lem-of-naturals-positive]]). 3. **Splitting.** If $m \\le n$ then $\\displaystyle\\sum_{k<n} a_k = \\sum_{k<m} a_k + \\sum_{k=m}^{n-1} a_k$, and $\\displaystyle\\prod_{k<n} a_k = \\Big(\\prod_{k<m} a_k\\Big)\\Big(\\prod_{k=m}^{n-1} a_k\\Big)$. 4. **Monotonicity.** If $a_k \\le b_k$ for all $k < n$ then $\\displaystyle\\sum_{k<n} a_k \\le \\sum_{k<n} b_k$. In particular, if $a_k \\ge 0$ for all $k < n$ then $\\sum_{k<n} a_k \\ge 0$, every single term satisfies $a_j \\le \\sum_{k<n} a_k$ for $j < n$, and $\\sum_{k<n} a_k = 0$ forces $a_k = 0$ for every $k < n$. 5. **Telescoping.** $\\displaystyle\\sum_{k<n}\\big(c_{k+1} - c_k\\big) = c_n - c_0$. 6. **Products.** $\\displaystyle\\prod_{k<n}(a_k b_k) = \\Big(\\prod_{k<n} a_k\\Big)\\Big(\\prod_{k<n} b_k\\Big)$; if $a_k \\ge 0$ for all $k < n$ then $\\prod_{k<n} a_k \\ge 0$, and if $a_k > 0$ for all $k < n$ then $\\prod_{k<n} a_k > 0$.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1",
        "1.2",
        "1.4",
        "1.5",
        "2.1",
        "2.2",
        "7.1",
        "9.1",
        "10.1",
        "15.1"
      ]
    },
    {
      "fact": "L2",
      "source": "def-finite-sum",
      "source_section": "Definition",
      "quote": "Throughout this page $\\mathbb{R}$ is the complete ordered field ([[def-complete-ordered-field]]), in particular an ordered field ([[def-ordered-field]]) and a field ([[def-field]]), and $\\mathbb{N}$ is the set of natural numbers ([[def-natural-numbers]]) with successor $\\sigma(n) = n + 1$ ([[def-nat-addition]]). Let $a : \\mathbb{N} \\to \\mathbb{R}$ be a sequence of reals, written $a_k$ for $a(k)$. **Finite sums and finite products of $a$ are defined by recursion on the upper index**, which is legitimate because of the recursion theorem ([[thm-recursion]]). That theorem produces a function of one variable, so the running index has to be carried along inside the value: applying it to the set $A = \\mathbb{N} \\times \\mathbb{R}$, the starting element $(0, 0)$ and the function $f(n, s) = (\\sigma(n),\\, s + a_n)$ gives a unique $g : \\mathbb{N} \\to \\mathbb{N} \\times \\mathbb{R}$ with $$g(0) = (0, 0), \\qquad g(\\sigma(n)) = f(g(n)) \\quad (n \\in \\mathbb{N}).$$ Write $g(n) = \\big(\\pi_1(g(n)),\\, \\Sigma_n\\big)$ for its two coordinates. **The first coordinate is the index itself, and that is a small induction, not an observation** ([[thm-induction-principle]]). Indeed $\\pi_1(g(0)) = 0$; and if $\\pi_1(g(n)) = n$, then $g(\\sigma(n)) = f\\big(\\pi_1(g(n)), \\Sigma_n\\big) = \\big(\\sigma(\\pi_1(g(n))),\\, \\Sigma_n + a_{\\pi_1(g(n))}\\big) = \\big(\\sigma(n),\\, \\Sigma_n + a_n\\big)$, so $\\pi_1(g(\\sigma(n))) = \\sigma(n)$. By induction $\\pi_1(g(n)) = n$ for every $n \\in \\mathbb{N}$. Only now may the second coordinate of the two displayed clauses be read off, and doing so gives $$\\Sigma_0 = 0, \\qquad \\Sigma_{\\sigma(n)} = \\Sigma_n + a_n .$$ $\\Sigma$ is moreover the **unique** function $\\mathbb{N} \\to \\mathbb{R}$ with those two properties: if $\\Sigma'$ also has them then $n \\mapsto (n, \\Sigma'_n)$ satisfies the two clauses defining $g$, hence equals $g$ by the uniqueness clause of [[thm-recursion]], so $\\Sigma' = \\Sigma$. We write $\\sum_{k < n} a_k := \\Sigma_n$. The same construction with starting element $(0, 1)$ and $f(n, p) = (\\sigma(n),\\, p \\cdot a_n)$, with the same induction on the first coordinate and the same uniqueness argument, gives the unique $\\Pi : \\mathbb{N} \\to \\mathbb{R}$ with $$\\Pi_0 = 1, \\qquad \\Pi_{\\sigma(n)} = \\Pi_n \\cdot a_n ,$$ and we write $\\prod_{k < n} a_k := \\Pi_n$. **Notation.** For $m, n \\in \\mathbb{N}$ we abbreviate $$\\sum_{k=0}^{n} a_k := \\sum_{k < n+1} a_k, \\qquad \\prod_{k=0}^{n} a_k := \\prod_{k < n+1} a_k,$$ and, for a general lower index $m$ with $m \\le n + 1$, writing $d = n + 1 - m$ for the number of terms, $$\\sum_{k=m}^{n} a_k := \\sum_{j < d} a_{m+j}, \\qquad \\prod_{k=m}^{n} a_k := \\prod_{j < d} a_{m+j} .$$ When $m = n + 1$ we have $d = 0$ and the sum is **empty**, with value $0$, while the empty product has value $1$. In the same spirit $\\sum_{k=0}^{-1} a_k$ is notation for the empty sum $\\Sigma_0 = 0$ and $\\prod_{k=0}^{-1} a_k$ for the empty product $\\Pi_0 = 1$; the index $-1$ never occurs as an element of $\\mathbb{N}$ and is only a way of writing \"no terms\". Only finitely many values of $a$ enter $\\sum_{k<n} a_k$, so the notation $\\sum_{k<n} a_k$ and $\\prod_{k<n} a_k$ is also used for a list $a_0, \\dots, a_{n-1}$ of reals given without reference to any extension of the list to all of $\\mathbb{N}$: extend the list by $a_k = 0$ (respectively $a_k = 1$) for $k \\ge n$ and apply the definition above.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1",
        "1.2",
        "1.4",
        "1.5",
        "2.1",
        "2.2",
        "7.1",
        "9.1",
        "10.1",
        "15.1"
      ]
    },
    {
      "fact": "L3",
      "source": "lem-standard-basis-of-f-n",
      "source_section": "Statement",
      "quote": "Let $F$ be a field ([[def-field]]), let $n \\in \\mathbb{N}$ and let $F^{n}$ be the function space on the von Neumann natural $n = \\{0, \\dots, n-1\\}$, with the pointwise operations ([[def-function-space]], [[def-natural-numbers]], [[lem-nat-order-is-membership]]). For $i < n$ define the **standard unit vector** $e_i \\in F^{n}$ by $$e_i(i) = 1_F, \\qquad e_i(j) = 0_F \\ \\text{ for } j < n \\text{ with } j \\ne i .$$ Then: 1. **Finite sums in a function space are pointwise.** For every set $X$, every $p \\in \\mathbb{N}$, every list $u : p \\to F^{X}$ and every $j \\in X$, $$\\Bigl(\\sum_{k<p} u_k\\Bigr)(j) \\;=\\; \\sum_{k<p} u_k(j),$$ the right-hand sum being taken in $(F,+,0_F)$. (Stated here for an arbitrary $X$ because the companion page needs it at $X = \\mathbb{N}$.) 2. $e : n \\to F^{n}$ is an ordered basis of $F^{n}$ ([[def-linear-basis]]); in particular $e$ is injective and its image $e[n] = \\{\\, e_i : i < n \\,\\}$ is a basis of $F^{n}$ with $e[n] \\approx n$ ([[def-equinumerous]]); 3. for every $\\lambda : n \\to F$ and every $j < n$, $\\bigl(\\sum_{i<n}\\lambda_i e_i\\bigr)(j) = \\lambda_j$; equivalently the coordinate list of $x \\in F^{n}$ with respect to the ordered basis $e$ ([[thm-unique-coordinates-with-respect-to-an-ordered-basis]]) is $i \\mapsto x(i)$; 4. $F^{n}$ is finite-dimensional over $F$ with $\\dim_F F^{n} = n$ ([[def-dimension]]); 5. at $n = 0$ this reads: $F^{0}$ has exactly one element, the empty function, so $F^{0}$ is the zero space, the empty list is its ordered basis, $\\varnothing$ is its basis and $\\dim_F F^{0} = 0$. Every index runs from $0$, so the coordinates of an element of $F^{n}$ are $x_0, \\dots, x_{n-1}$ and no statement above is restricted to $n \\ge 1$.",
      "quote_selection": "full-source-section",
      "uses": [
        "3.1",
        "6.1",
        "7.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-function-space",
      "source_section": "Definition",
      "quote": "Let $F$ be a field ([[def-field]]) and let $X$ be any set. Write $$F^{X} \\;:=\\; \\{\\, f \\;:\\; f \\text{ is a function } X \\to F \\,\\},$$ and for $f \\in F^{X}$ write $f(x)$ for its value at $x \\in X$. Two elements of $F^{X}$ are equal exactly when they agree at every point of $X$. Define $$(f + g)(x) \\;:=\\; f(x) + g(x), \\qquad (\\lambda f)(x) \\;:=\\; \\lambda\\, f(x), \\qquad 0_{F^{X}}(x) \\;:=\\; 0_F,$$ for $f, g \\in F^{X}$, $\\lambda \\in F$ and $x \\in X$, the operations on the right being those of $F$. These are the **pointwise** operations. **These rules really are the required data.** For $f, g \\in F^{X}$ the assignment $x \\mapsto f(x) + g(x)$ is a function $X \\to F$, so $+$ is a binary operation $F^{X} \\times F^{X} \\to F^{X}$ ([[def-binary-operation]]); for $\\lambda \\in F$ and $f \\in F^{X}$ the assignment $x \\mapsto \\lambda f(x)$ is a function $X \\to F$, so scalar multiplication is a map $F \\times F^{X} \\to F^{X}$; and $0_{F^{X}}$, the constant function at $0_F$, is an element of $F^{X}$. **$F^{X}$ is a vector space over $F$** ([[def-vector-space]]). Each axiom is an equation between elements of $F^{X}$, hence holds exactly when it holds at every $x \\in X$ after evaluation, and there it is the corresponding field axiom applied to the values $f(x), g(x), \\lambda, \\mu$: - associativity and commutativity of $+$, and $f + 0_{F^{X}} = f$, come from the same laws for $+$ in $F$; the additive inverse of $f$ is $x \\mapsto -f(x)$, which lies in $F^{X}$ and satisfies $f + (-f) = 0_{F^{X}}$ pointwise. This is axiom (V1); - $\\bigl(\\lambda(f+g)\\bigr)(x) = \\lambda(f(x)+g(x)) = \\lambda f(x) + \\lambda g(x)$ is (V2), by distributivity in $F$; - $\\bigl((\\lambda+\\mu)f\\bigr)(x) = (\\lambda+\\mu)f(x) = \\lambda f(x) + \\mu f(x)$ is (V3), by distributivity in $F$; - $\\bigl((\\lambda\\mu)f\\bigr)(x) = (\\lambda\\mu)f(x) = \\lambda(\\mu f(x))$ is (V4), by associativity of multiplication in $F$; - $(1_F f)(x) = 1_F f(x) = f(x)$ is (V5), by the multiplicative identity law in $F$. ### The case $X = n$ A natural number is a von Neumann natural ([[def-natural-numbers]]), that is a set, and $n = \\{\\, m \\in \\mathbb{N} : m < n \\,\\} = \\{0, 1, \\dots, n-1\\}$ ([[lem-nat-order-is-membership]]). Taking $X = n$ therefore gives $$F^{n} \\;=\\; \\{\\, x \\;:\\; x \\text{ is a function } n \\to F \\,\\},$$ whose elements are written $x = (x_0, x_1, \\dots, x_{n-1})$ with $x_i := x(i)$ for $i < n$. **The coordinates are indexed from $0$**, because $0 \\in n$ whenever $n \\ne 0$ and $n \\notin n$ always. The operations read $$(x + y)_i = x_i + y_i, \\qquad (\\lambda x)_i = \\lambda x_i \\qquad (i < n),$$ and the zero of $F^{n}$ is the tuple all of whose coordinates are $0_F$. **The two boundary cases.** $\\mathbb{N}$ contains $0$, so $n = 0$ is a genuine case. Since $0 = \\varnothing$, the set $F^{0} = F^{\\varnothing}$ has exactly one element, the empty function; that element is $0_{F^{0}}$, so $F^{0}$ is the **zero space** $\\{0_{F^{0}}\\}$, not the empty set. For $n = 1$ we have $1 = \\{0\\}$, and the map $F^{1} \\to F$ sending $x$ to its single coordinate $x_0$ is a bijection satisfying $(x+y)_0 = x_0 + y_0$ and $(\\lambda x)_0 = \\lambda x_0$; we use it to read $F^{1}$ as $F$ where convenient. (No general notion of isomorphism of vector spaces is available on this page, and none is claimed here: what is asserted is exactly the displayed bijection and the two displayed equations.)",
      "quote_selection": "full-source-section",
      "uses": [
        "3.1",
        "6.1",
        "7.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-vector-space",
      "source_section": "Definition",
      "quote": "Let $F$ be a field ([[def-field]]), with additive identity $0_F$, multiplicative identity $1_F$, and the field axioms as stated there. A **vector space over $F$**, also called an **$F$-vector space**, consists of - a set $V$, whose elements are called **vectors**; - a binary operation $+ : V \\times V \\to V$ on $V$ ([[def-binary-operation]]), the **vector addition**; - an element $0_V \\in V$, the **zero vector**; - a map $\\cdot \\,:\\, F \\times V \\to V$, the **scalar multiplication**, written $\\lambda v := \\cdot(\\lambda, v)$; subject to the following axioms, in which $u, v \\in V$ and $\\lambda, \\mu \\in F$ are arbitrary. - **(V1)** $(V, +, 0_V)$ is an abelian group ([[def-group]]): $+$ is associative and commutative, $0_V$ is a two-sided identity for $+$ ([[def-identity-element]]), and every $v \\in V$ has an additive inverse ([[def-invertible-element]]). - **(V2)** $\\lambda(u + v) = \\lambda u + \\lambda v$. - **(V3)** $(\\lambda + \\mu)v = \\lambda v + \\mu v$. - **(V4)** $(\\lambda\\mu)v = \\lambda(\\mu v)$. - **(V5)** $1_F v = v$. The elements of $F$ are called **scalars**. When several vector spaces are in play we write $0_V$ for the zero of $V$, and we write $-v$ for the additive inverse of $v$ and $u - v := u + (-v)$. **The notation $0_V$ and $-v$ is legitimate.** Axiom (V1) asserts only that some two-sided identity and some additive inverses exist. That there is at most one two-sided identity for $+$ is [[lem-identity-unique]], and that an invertible element of a monoid has exactly one inverse is [[lem-inverse-unique]]; both are proved before [[def-group]] and are inherited here with the group structure. So $0_V$ and $-v$ denote well-defined elements, and nothing below re-derives them. **What (V1) buys, and why it is not restated.** Associativity, commutativity, the identity law $v + 0_V = v = 0_V + v$, the inverse law $v + (-v) = 0_V$, cancellation ([[lem-group-cancellation]]) and the inverse identities ([[lem-group-inverse-laws]]) are facts about abelian groups. They are quoted from the group page wherever they are used and are never proved again for vectors.",
      "quote_selection": "full-source-section",
      "uses": [
        "3.1",
        "6.1",
        "7.1"
      ]
    },
    {
      "fact": "L3",
      "source": "lem-vector-space-elementary-consequences",
      "source_section": "Statement",
      "quote": "Let $V$ be a vector space over a field $F$ ([[def-vector-space]]). For all $\\lambda \\in F$ and $v \\in V$: 1. $0_F v = 0_V$; 2. $\\lambda 0_V = 0_V$; 3. $(-\\lambda)v = -(\\lambda v)$, and also $\\lambda(-v) = -(\\lambda v)$; 4. $(-1_F)v = -v$; 5. if $\\lambda v = 0_V$ then $\\lambda = 0_F$ or $v = 0_V$. Here $0_F$ and $1_F$ are the additive and multiplicative identities of $F$, $0_V$ is the zero vector, $-\\lambda$ is the additive inverse of $\\lambda$ in $F$, and $-v$ is the additive inverse of $v$ in the abelian group $(V,+,0_V)$.",
      "quote_selection": "full-source-section",
      "uses": [
        "3.1",
        "6.1",
        "7.1"
      ]
    },
    {
      "fact": "L4",
      "source": "thm-induction-principle",
      "source_section": "Statement",
      "quote": "Let $S \\subseteq \\mathbb{N}$. If $0 \\in S$ and $\\sigma(n) \\in S$ whenever $n \\in S$, then $S = \\mathbb{N}$. Equivalently (property form): if a property $P$ satisfies $P(0)$ and ($P(n) \\Rightarrow P(\\sigma(n))$) for all $n$, then $P(n)$ holds for all $n \\in \\mathbb{N}$. This is the induction principle, the basis of proof by induction.",
      "quote_selection": "full-source-section",
      "uses": [
        "2.1",
        "3.2",
        "5.2",
        "12.1",
        "13.1"
      ]
    },
    {
      "fact": "L4",
      "source": "thm-well-ordering-principle",
      "source_section": "Statement",
      "quote": "Every nonempty subset $S \\subseteq \\mathbb{N}$ has a least element: there is $\\ell \\in S$ with $\\ell \\le s$ for all $s \\in S$.",
      "quote_selection": "full-source-section",
      "uses": [
        "2.1",
        "3.2",
        "5.2",
        "12.1",
        "13.1"
      ]
    },
    {
      "fact": "L5",
      "source": "lem-finite-set-has-max",
      "source_section": "Statement",
      "quote": "For every $n \\in \\mathbb{N}$ and all $a_0, a_1, \\dots, a_n \\in \\mathbb{R}$, the set $\\{a_0, a_1, \\dots, a_n\\}$ has a maximum and a minimum ([[def-max-min]]). What is proved below is exactly the displayed statement, by induction on $n$. The usual reading, that *every nonempty finite subset of $\\mathbb{R}$ has a maximum and a minimum*, follows once one identifies the nonempty finite subsets of $\\mathbb{R}$ with the sets listable as $\\{a_0, \\dots, a_n\\}$. That identification is recorded as a stipulation in the Given below, because this page has no definition of finiteness to prove it against. **It is discharged, not merely assumed**: [[lem-finite-subsets-listable]] proves that the two descriptions of a nonempty finite subset of $\\mathbb{R}$ agree. That lemma is recorded in `justified_by` rather than in `deps`, since it is about the sets this lemma quantifies over and therefore depends on this one. This is what licenses the notation $\\max\\{a_1, \\dots, a_n\\}$ and $\\min\\{a_1, \\dots, a_n\\}$ for finite sets of **real** numbers from this page onwards.",
      "quote_selection": "full-source-section",
      "uses": [
        "5.2",
        "12.1"
      ]
    },
    {
      "fact": "L5",
      "source": "def-max-min",
      "source_section": "Definition",
      "quote": "Let $S \\subseteq \\mathbb{R}$ and $m \\in \\mathbb{R}$. - $m$ is a **maximum** (or *greatest element*) of $S$ if $m \\in S$ and $s \\le m$ for every $s \\in S$. - $m$ is a **minimum** (or *least element*) of $S$ if $m \\in S$ and $m \\le s$ for every $s \\in S$. A set has at most one maximum: if $m_1$ and $m_2$ are both maxima then $m_1 \\in S$ gives $m_1 \\le m_2$ and $m_2 \\in S$ gives $m_2 \\le m_1$, so $m_1 = m_2$ by antisymmetry of the order, which is immediate from the trichotomy axiom of an ordered field ([[def-ordered-field]], [[def-complete-ordered-field]]). The same argument applies to minima, so we may write $\\max S$ and $\\min S$.",
      "quote_selection": "full-source-section",
      "uses": [
        "5.2",
        "12.1"
      ]
    },
    {
      "fact": "L5",
      "source": "lem-finite-subsets-listable",
      "source_section": "Statement",
      "quote": "Let $\\mathbb{R}$ be a complete ordered field ([[def-complete-ordered-field]]) and let $F \\subseteq \\mathbb{R}$ be nonempty. Then $F$ is finite ([[def-countable]]) **if and only if** there are $n \\in \\mathbb{N}$ and $a_0, a_1, \\dots, a_n \\in \\mathbb{R}$ with $$F = \\{a_0, a_1, \\dots, a_n\\}.$$ Here $\\{a_0, \\dots, a_n\\}$ means the image $a[\\sigma(n)]$ of a function $a : \\sigma(n) \\to \\mathbb{R}$, where $\\sigma(n) = \\{\\, i \\in \\mathbb{N} : i \\le n \\,\\}$ ([[def-natural-numbers]], [[lem-nat-order-is-membership]]). **Consequently every nonempty finite subset of $\\mathbb{R}$ has a maximum and a minimum** ([[def-max-min]]), since [[lem-finite-set-has-max]] proves exactly that for sets presented as $\\{a_0, \\dots, a_n\\}$.",
      "quote_selection": "full-source-section",
      "uses": [
        "5.2",
        "12.1"
      ]
    },
    {
      "fact": "L6",
      "source": "lem-standard-basis-of-f-n",
      "source_section": "Statement",
      "quote": "Let $F$ be a field ([[def-field]]), let $n \\in \\mathbb{N}$ and let $F^{n}$ be the function space on the von Neumann natural $n = \\{0, \\dots, n-1\\}$, with the pointwise operations ([[def-function-space]], [[def-natural-numbers]], [[lem-nat-order-is-membership]]). For $i < n$ define the **standard unit vector** $e_i \\in F^{n}$ by $$e_i(i) = 1_F, \\qquad e_i(j) = 0_F \\ \\text{ for } j < n \\text{ with } j \\ne i .$$ Then: 1. **Finite sums in a function space are pointwise.** For every set $X$, every $p \\in \\mathbb{N}$, every list $u : p \\to F^{X}$ and every $j \\in X$, $$\\Bigl(\\sum_{k<p} u_k\\Bigr)(j) \\;=\\; \\sum_{k<p} u_k(j),$$ the right-hand sum being taken in $(F,+,0_F)$. (Stated here for an arbitrary $X$ because the companion page needs it at $X = \\mathbb{N}$.) 2. $e : n \\to F^{n}$ is an ordered basis of $F^{n}$ ([[def-linear-basis]]); in particular $e$ is injective and its image $e[n] = \\{\\, e_i : i < n \\,\\}$ is a basis of $F^{n}$ with $e[n] \\approx n$ ([[def-equinumerous]]); 3. for every $\\lambda : n \\to F$ and every $j < n$, $\\bigl(\\sum_{i<n}\\lambda_i e_i\\bigr)(j) = \\lambda_j$; equivalently the coordinate list of $x \\in F^{n}$ with respect to the ordered basis $e$ ([[thm-unique-coordinates-with-respect-to-an-ordered-basis]]) is $i \\mapsto x(i)$; 4. $F^{n}$ is finite-dimensional over $F$ with $\\dim_F F^{n} = n$ ([[def-dimension]]); 5. at $n = 0$ this reads: $F^{0}$ has exactly one element, the empty function, so $F^{0}$ is the zero space, the empty list is its ordered basis, $\\varnothing$ is its basis and $\\dim_F F^{0} = 0$. Every index runs from $0$, so the coordinates of an element of $F^{n}$ are $x_0, \\dots, x_{n-1}$ and no statement above is restricted to $n \\ge 1$.",
      "quote_selection": "full-source-section",
      "uses": [
        "5.1",
        "13.1"
      ]
    },
    {
      "fact": "L6",
      "source": "def-dimension",
      "source_section": "Definition",
      "quote": "Let $V$ be a vector space over a field $F$ ([[def-vector-space]]). $V$ is **finite-dimensional over $F$** when it has a **finite** basis ([[def-linear-basis]], [[def-countable]]): some basis $B$ of $V$ satisfies $B \\approx n$ for some $n \\in \\mathbb{N}$ ([[def-equinumerous]]). For such a $V$, the **dimension of $V$ over $F$**, written $\\dim_F V$, is that $n$: $$\\dim_F V \\;:=\\; \\text{the unique } n \\in \\mathbb{N} \\text{ such that } V \\text{ has a basis } B \\text{ with } B \\approx n .$$ **This is well defined.** Existence of such an $n$ is the hypothesis, together with the fact that a finite set is equinumerous with exactly one natural number ([[lem-pigeonhole]], claim 3). Uniqueness is [[thm-any-two-finite-bases-have-the-same-size]]: two bases of $V$ with $n$ and with $m$ elements force $n = m$. That theorem is therefore a **prerequisite** of this definition, not a later justification of it, and it is listed in `deps`. $V$ is **infinite-dimensional over $F$** when it is not finite-dimensional over $F$, that is, when $V$ has **no** finite basis. No number is attached to such a space here: the symbol $\\dim_F V$ is defined only in the finite-dimensional case, and the expression $\\dim_F V = \\infty$ is not used. **The zero space.** $\\varnothing$ is a basis of $\\{0_V\\}$ ([[def-linear-basis]]) and $\\varnothing \\approx 0$, so $\\{0_V\\}$ is finite-dimensional with $\\dim_F \\{0_V\\} = 0$. Conversely a space of dimension $0$ has a basis $B \\approx 0$, that is $B = \\varnothing$, and then $V = \\operatorname{span}(\\varnothing) = \\{0_V\\}$ ([[def-linear-combination-and-span]]).",
      "quote_selection": "full-source-section",
      "uses": [
        "5.1",
        "13.1"
      ]
    },
    {
      "fact": "L6",
      "source": "cor-independent-set-is-no-larger-than-a-finite-spanning-set",
      "source_section": "Statement",
      "quote": "Let $V$ be a vector space over a field $F$ ([[def-vector-space]]) and suppose $V$ has a spanning subset $S$ ([[def-linear-combination-and-span]]) with $S \\approx n$ for some $n \\in \\mathbb{N}$ ([[def-equinumerous]]). Then: 1. every linearly independent subset $L \\subseteq V$ ([[def-linear-independence]]) is finite ([[def-countable]]), and the unique $m \\in \\mathbb{N}$ with $L \\approx m$ satisfies $m \\le n$; 2. no linearly independent subset of $V$ is equinumerous with $\\mathbb{N}$.",
      "quote_selection": "full-source-section",
      "uses": [
        "5.1",
        "13.1"
      ]
    },
    {
      "fact": "L6",
      "source": "def-linear-independence",
      "source_section": "Definition",
      "quote": "Let $V$ be a vector space over a field $F$ ([[def-vector-space]]). As in [[def-linear-combination-and-span]], a **finite list** of vectors is a function $v : n \\to V$ on a von Neumann natural $n = \\{0, \\dots, n-1\\}$ ([[def-natural-numbers]], [[lem-nat-order-is-membership]]), written $v_i := v(i)$, and $$\\sum_{i<n} \\lambda_i v_i$$ is the finite sum of [[def-monoid-finite-product]] read additively in the abelian group $(V,+,0_V)$, applied to the list $i \\mapsto \\lambda_i v_i$. No second notion of finite sum is introduced here. ### Independence of a list A finite list $v : n \\to V$ is **linearly independent** when, for every list of scalars $\\lambda : n \\to F$, $$\\sum_{i<n} \\lambda_i v_i = 0_V \\quad \\Longrightarrow \\quad \\lambda_i = 0_F \\text{ for every } i < n,$$ and **linearly dependent** otherwise, that is, when some $\\lambda : n \\to F$ has $\\sum_{i<n}\\lambda_i v_i = 0_V$ while $\\lambda_j \\ne 0_F$ for at least one $j < n$. Such a $\\lambda$ is called a **witness** to the dependence of $v$. ### Independence of a subset A subset $S \\subseteq V$ is **linearly independent** when **every injective** finite list $v : n \\to S$ ([[def-injection-surjection-bijection]]) is linearly independent, and **linearly dependent** otherwise, that is, when some injective finite list into $S$ is linearly dependent. **The injectivity clause is not decoration.** A linear combination in [[def-linear-combination-and-span]] is indexed by an arbitrary list $v : n \\to S$, which is **not** required to be injective. If the definition above quantified over all such lists, then for any $w \\in S$ the list $v : 2 \\to S$ with $v_0 = v_1 = w$ and the scalars $\\lambda_0 = 1_F$, $\\lambda_1 = -1_F$ would give $$\\sum_{i<2}\\lambda_i v_i = (0_V + 1_F w) + (-1_F)w = w + (-w) = 0_V$$ with $\\lambda_0 = 1_F \\ne 0_F$ ([[def-field]], [[lem-vector-space-elementary-consequences]]), so **every** nonempty subset of $V$ would be dependent and the notion would be empty. Quantifying over injective lists is what makes the subset notion the intended one. It costs nothing for lists: [[lem-independent-list-is-injective]] shows that the vanishing condition above already forces a list to be injective, so no injectivity hypothesis has to be carried alongside independence of a list. ### The boundary cases are genuine cases $\\mathbb{N}$ contains $0$ ([[def-natural-numbers]]), so both of the following are instances of the definitions and neither is a convention. - **The empty list is independent.** For $n = 0$ the only list of scalars is the empty one, and the condition \"$\\lambda_i = 0_F$ for every $i < 0$\" holds vacuously. - **$\\varnothing \\subseteq V$ is independent.** The only function $v : n \\to \\varnothing$ is the empty one, with $n = 0$, and it is independent by the previous point. - **$\\{0_V\\}$ is dependent.** The list $v : 1 \\to \\{0_V\\}$ with $v_0 = 0_V$ is injective, and taking $\\lambda_0 = 1_F$ gives $\\sum_{i<1}\\lambda_i v_i = 0_V + 1_F 0_V = 0_V$ by the recursion of [[def-monoid-finite-product]] and $\\lambda 0_V = 0_V$ ([[lem-vector-space-elementary-consequences]]), while $1_F \\ne 0_F$ in a field ([[def-field]]). So $\\{0_V\\}$, and hence every subset of $V$ containing $0_V$, is linearly dependent.",
      "quote_selection": "full-source-section",
      "uses": [
        "5.1",
        "13.1"
      ]
    },
    {
      "fact": "L6",
      "source": "def-countable",
      "source_section": "Definition",
      "quote": "Recall that a natural number is a von Neumann natural ([[def-natural-numbers]]): $0 = \\varnothing$ and $\\sigma(n) = n \\cup \\{n\\}$, so that $$n = \\{\\, m \\in \\mathbb{N} : m < n \\,\\} = \\{0, 1, \\dots, n-1\\}$$ is itself the set of its predecessors. Here $<$ is the order of [[def-nat-order]], which is defined additively, so the displayed identity is a theorem and not a convention: it is [[lem-nat-order-is-membership]], proved immediately above. Let $A$ be a set, and let $\\approx$ be equinumerosity ([[def-equinumerous]]). - $A$ is **finite** if $A \\approx n$ for some $n \\in \\mathbb{N}$. - $A$ is **countably infinite** if $A \\approx \\mathbb{N}$. - $A$ is **at most countable** if it is finite or countably infinite. - $A$ is **uncountable** if it is not at most countable.",
      "quote_selection": "full-source-section",
      "uses": [
        "5.1",
        "13.1"
      ]
    },
    {
      "fact": "L6",
      "source": "def-equinumerous",
      "source_section": "Definition",
      "quote": "Let $A$ and $B$ be sets ([[def-injection-surjection-bijection]] for the terminology). - $A$ and $B$ are **equinumerous**, written $A \\approx B$, if there exists a bijection $f : A \\to B$. - $A$ is **dominated by** $B$, written $A \\preceq B$, if there exists an injection $f : A \\to B$. - $A \\prec B$ abbreviates: $A \\preceq B$ and not $A \\approx B$.",
      "quote_selection": "full-source-section",
      "uses": [
        "5.1",
        "13.1"
      ]
    },
    {
      "fact": "L6",
      "source": "lem-pigeonhole",
      "source_section": "Statement",
      "quote": "Let $\\mathbb{N}$ be the von Neumann naturals, with $0 = \\varnothing$ and $\\sigma(n) = n \\cup \\{n\\}$ ([[def-natural-numbers]]), and let $<$ be the order of [[def-nat-order]], so that $m < n \\iff m \\in n$ and $n = \\{\\, m \\in \\mathbb{N} : m < n \\,\\}$ ([[lem-nat-order-is-membership]]). Write $\\approx$ for equinumerosity ([[def-equinumerous]]). Then: 1. for every $n \\in \\mathbb{N}$ there is **no injection** $\\sigma(n) \\to n$; 2. if $m < n$ then there is no injection $n \\to m$; 3. if $n \\approx m$ with $n, m \\in \\mathbb{N}$, then $n = m$; 4. $\\mathbb{N} \\not\\approx n$ for every $n \\in \\mathbb{N}$; 5. no natural number is equinumerous with a proper subset of itself: if $A \\subseteq n$ and $n \\approx A$, then $A = n$. Claim 1 is the pigeonhole principle in its sharpest form, that $n + 1$ pigeons do not fit injectively into $n$ holes; the other four are the consequences the library actually quotes. Claim 3 says a finite set is equinumerous with exactly one natural number, so \"the number of elements\" is well defined. Claim 4 says $\\mathbb{N}$ is infinite. Claim 5 says no natural number is Dedekind-infinite. **Why this is proved here.** The next item on this page defines finiteness as equinumerosity with a natural number, and the three size classes it introduces are exhaustive by construction but mutually exclusive only because of claim 4. Several later items also need claim 3 or claim 5. The principle is elementary and belongs with the naturals, but it is about counting rather than about order, so it is proved here, immediately before finiteness is defined, from induction and the identification of the order with membership alone. Nothing below uses ordinals, cardinals, or any later material.",
      "quote_selection": "full-source-section",
      "uses": [
        "5.1",
        "13.1"
      ]
    },
    {
      "fact": "L7",
      "source": "def-canonical-natural",
      "source_section": "Definition",
      "quote": "Let $F$ be a field ([[def-field]]) with additive identity $0_F$ and multiplicative identity $1_F$. Define $\\iota : \\mathbb{N} \\to F$ by recursion on $\\mathbb{N}$ ([[def-natural-numbers]], [[thm-recursion]]): $$\\iota(0) \\;:=\\; 0_F, \\qquad \\iota(n+1) \\;:=\\; \\iota(n) + 1_F .$$ $\\iota(n)$ is the **canonical natural** of $n$ in $F$. It is also written $n \\cdot 1_F$, and for $n \\ge 1$ it is $1_F$ added to itself $n$ times. **Why the notation is needed at all.** A natural number in this library is a von Neumann natural, that is a set ([[def-natural-numbers]]), and a set is not an element of $F$. So $1/n$, $n^{\\alpha}$ and $x/n$ are not expressions of $F$ when $n$ is a natural: what they mean is $1/\\iota(n)$, $\\iota(n)^{\\alpha}$ and $x/\\iota(n)$. The map $\\iota$ is what carries a counting number into the field, and writing it is the whole reason a reader meets $1/\\iota(k+1)$ where an informal text would write $1/(k+1)$.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.2",
        "1.4",
        "1.5",
        "2.2",
        "9.1",
        "10.1",
        "15.1"
      ]
    },
    {
      "fact": "L7",
      "source": "lem-of-naturals-positive",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field, with field structure as in [[def-field]], and for $n \\ge 1$ let $n \\cdot 1_F$ denote the canonical natural number $\\underbrace{1_F + \\cdots + 1_F}_{n}$, defined recursively by $1 \\cdot 1_F = 1_F$ and $(n+1) \\cdot 1_F = n \\cdot 1_F + 1_F$. Then for every $n \\ge 1$: - $n \\cdot 1_F > 0$ and $(n+1) \\cdot 1_F > n \\cdot 1_F$; - the map $n \\mapsto n \\cdot 1_F$ is strictly increasing, hence injective, on $\\{1, 2, 3, \\dots\\}$; - $(m+n) \\cdot 1_F = m \\cdot 1_F + n \\cdot 1_F$ and $(mn) \\cdot 1_F = (m \\cdot 1_F)(n \\cdot 1_F)$ for all $m, n \\ge 1$.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.2",
        "1.4",
        "1.5",
        "2.2",
        "9.1",
        "10.1",
        "15.1"
      ]
    },
    {
      "fact": "L8",
      "source": "lem-of-inverse-positive",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) with positive cone $P$, and let $a, b \\in F$. 1. If $a > 0$ then $a^{-1} > 0$. 2. If $0 < a < b$ then $0 < b^{-1} < a^{-1}$.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.4",
        "2.2",
        "5.2",
        "6.2",
        "10.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1.1",
      "claim": "**Deleting one entry from a finite sum.** Let $b : \\mathbb{N} \\to \\mathbb{R}$, let $r \\ge 1$, let $q<r$, and let $b^{\\wedge q}$ be the list with $b^{\\wedge q}_i := b_i$ for $i<q$ and $b^{\\wedge q}_i := b_{i+1}$ for $q \\le i < r-1$. Then $\\sum_{i<r}b_i = \\sum_{i<r-1}b^{\\wedge q}_i + b_q$: splitting the left side at $q$ and again at $q+1$ gives $\\sum_{i<q}b_i + b_q + \\sum_{l<r-1-q}b_{q+1+l}$, and splitting the right side at $q$ gives $\\sum_{i<q}b_i + \\sum_{l<r-1-q}b_{q+l+1}$, and the two agree.",
      "step": "1.1",
      "inputs": [
        "L2"
      ]
    },
    {
      "id": "step-1.2",
      "claim": "**The easy case $m \\le n$.** Take $\\pi$ to be the identity of $m$, a bijection. For $k \\le m$ the finite triangle inequality and $\\lVert v_j\\rVert_2 \\le 1$ give $\\lVert\\sum_{j<k}v_j\\rVert_2 \\le \\sum_{j<k}\\lVert v_j\\rVert_2 \\le \\sum_{j<k}1 = \\iota(k) \\le \\iota(n)$, since $k \\le m \\le n$ and $\\iota$ is increasing. So the theorem holds in this case, and we assume $m>n$ from here on.",
      "step": "1.2",
      "inputs": [
        "construct",
        "L1",
        "L2",
        "L7"
      ]
    },
    {
      "id": "step-1.3",
      "claim": "**Stage data.** For $n \\le k \\le m$ call a pair $(b,\\mu)$ **admissible at $k$** when $b : k \\to m$ is injective, $\\mu : \\mathbb{N} \\to \\mathbb{R}$ vanishes at every $j \\ge k$, satisfies $0 \\le \\mu_j \\le 1$ for $j<k$, and satisfies $\\sum_{j<k}\\mu_j v_{b(j)} = 0$ and $\\sum_{j<k}\\mu_j = \\iota(k-n)$.",
      "step": "1.3",
      "inputs": [
        "construct"
      ]
    },
    {
      "id": "step-1.4",
      "claim": "**Stage $m$ is admissible.** Take $b^{m} :=$ the identity of $m$ and $\\mu^{m}_j := \\iota(m-n)/\\iota(m)$ for $j<m$, $\\mu^m_j := 0$ for $j \\ge m$; here $\\iota(m) > 0$ because $m > n \\ge 1$, and $0 \\le \\iota(m-n) \\le \\iota(m)$ gives $0 \\le \\mu^m_j \\le 1$. Then $\\sum_{j<m}\\mu^m_j v_j = \\bigl(\\iota(m-n)/\\iota(m)\\bigr)\\sum_{j<m}v_j = 0$ and $\\sum_{j<m}\\mu^m_j = \\iota(m)\\cdot\\iota(m-n)/\\iota(m) = \\iota(m-n)$.",
      "step": "1.4",
      "inputs": [
        "construct",
        "L2",
        "L7",
        "L8"
      ]
    },
    {
      "id": "step-1.5",
      "claim": "**The estimate for $k<n$, for an arbitrary ordering.** For every bijection $\\rho : m \\to m$ and every $k<n$, the finite triangle inequality gives $\\bigl\\lVert\\sum_{j<k}v_{\\rho(j)}\\bigr\\rVert_2 \\le \\sum_{j<k}\\lVert v_{\\rho(j)}\\rVert_2 \\le \\sum_{j<k}1 = \\iota(k) \\le \\iota(n)$.",
      "step": "1.5",
      "inputs": [
        "L1",
        "L2",
        "L7"
      ]
    },
    {
      "id": "step-2.1",
      "claim": "**The reindexing identity.** For every $k \\in \\mathbb{N}$, every $r \\in \\mathbb{N}$, every injective $f : r \\to k$ and every $c : \\mathbb{N} \\to \\mathbb{R}$ vanishing at every $j<k$ outside the image of $f$, one has $\\sum_{j<k}c_j = \\sum_{i<r}c_{f(i)}$. This is proved by induction on $k$, with $r$, $f$ and $c$ universally quantified. At $k=0$ the only injective $f : r \\to 0$ has $r = 0$ and both sums are empty. At $k+1$, write $\\sum_{j<k+1}c_j = \\sum_{j<k}c_j + c_k$: if $k$ is not in the image of $f$ then $c_k = 0$ and $f$ maps into $k$, so the inductive hypothesis applies directly; and if $k = f(q)$ for the unique such $q<r$, then $r \\ge 1$ and the list $g := f^{\\wedge q}$ of step 1.1 is an injective map $r-1 \\to k$ off whose image $c$ vanishes on $\\{j : j<k\\}$, so the inductive hypothesis gives $\\sum_{j<k}c_j = \\sum_{i<r-1}c_{g(i)}$, while step 1.1 applied to $b_i := c_{f(i)}$ gives $\\sum_{i<r}c_{f(i)} = \\sum_{i<r-1}c_{g(i)} + c_{f(q)}$; adding $c_k = c_{f(q)}$ to the first identity yields the claim.",
      "step": "2.1",
      "inputs": [
        "step 1.1",
        "L2",
        "L4"
      ]
    },
    {
      "id": "step-2.2",
      "claim": "**The feasible set at $k-1$ is nonempty.** Let $(b,\\mu)$ be admissible at $k$ with $n<k\\le m$, and let $\\Lambda$ be the set of all $\\mu' : \\mathbb{N} \\to \\mathbb{R}$ vanishing at every $j\\ge k$, with $0 \\le \\mu'_j \\le 1$ for $j<k$, $\\sum_{j<k}\\mu'_j v_{b(j)} = 0$ and $\\sum_{j<k}\\mu'_j = \\iota(k-1-n)$. The scalar $\\rho := \\iota(k-1-n)/\\iota(k-n)$ is defined and lies in $[0,1]$, since $\\iota(k-n)>0$ and $0 \\le \\iota(k-1-n) \\le \\iota(k-n)$; and $\\rho\\mu$ lies in $\\Lambda$.",
      "step": "2.2",
      "inputs": [
        "step 1.3",
        "L2",
        "L7",
        "L8"
      ]
    },
    {
      "id": "step-3.1",
      "claim": "Both identities hold verbatim for lists with values in $\\mathbb{R}^{n}$, since a vector identity is the conjunction of its $n$ coordinate identities and the coordinates of a vector finite sum are the real finite sums of the coordinates.",
      "step": "3.1",
      "inputs": [
        "step 1.1",
        "step 2.1",
        "L3"
      ]
    },
    {
      "id": "step-3.2",
      "claim": "**The minimal number of fractional coordinates.** Call $\\mu' \\in \\Lambda$ **$r$-simple** when there is an injective $f : r \\to k$ with $\\mu'_j \\in \\{0,1\\}$ for every $j<k$ outside the image of $f$. The set $R := \\{\\, r \\in \\mathbb{N} : \\text{some } \\mu' \\in \\Lambda \\text{ is } r\\text{-simple} \\,\\}$ contains $k$, taking $f$ to be the identity of $k$, so $R$ is a nonempty set of naturals and has a least element $r_0$; fix $\\mu \\in \\Lambda$ and an injective $f : r_0 \\to k$ witnessing it.",
      "step": "3.2",
      "inputs": [
        "step 2.2",
        "L4"
      ]
    },
    {
      "id": "step-4.1",
      "claim": "**Two consequences used repeatedly.** Taking $k = r$ and $f$ a bijection of $k$ in step 2.1 gives $\\sum_{j<k}c_{f(j)} = \\sum_{j<k}c_j$ for every $c$; and taking $c$ to vanish off the image of an injective $f : r \\to k$ gives $\\sum_{j<k}c_j = \\sum_{i<r}c_{f(i)}$, both in $\\mathbb{R}$ and in $\\mathbb{R}^{n}$.",
      "step": "4.1",
      "inputs": [
        "step 2.1",
        "step 3.1"
      ]
    },
    {
      "id": "step-4.2",
      "claim": "**Every marked coordinate is strictly fractional.** For every $i<r_0$ one has $0 < \\mu_{f(i)} < 1$: otherwise $\\mu_{f(i)} \\in \\{0,1\\}$, and then $f^{\\wedge i}$, an injective map $r_0-1 \\to k$ off whose image $\\mu$ takes values in $\\{0,1\\}$, would witness that $\\mu$ is $(r_0-1)$-simple, contradicting minimality of $r_0$.",
      "step": "4.2",
      "inputs": [
        "step 1.1",
        "step 3.2"
      ]
    },
    {
      "id": "step-4.3",
      "claim": "**Suppose $r_0 \\ge n+2$, towards a contradiction.** Define $w : r_0 \\to \\mathbb{R}^{n+1}$ by $w_i(t) := \\bigl(v_{b(f(i))}\\bigr)(t)$ for $t<n$ and $w_i(n) := 1$.",
      "step": "4.3",
      "inputs": [
        "step 3.2"
      ]
    },
    {
      "id": "step-5.1",
      "claim": "**The list $w$ is linearly dependent:** there is $\\lambda : r_0 \\to \\mathbb{R}$, not identically $0$, with $\\sum_{i<r_0}\\lambda_i w_i = 0$. If $w$ is not injective, say $w_{i_1} = w_{i_2}$ with $i_1 \\ne i_2$, take $\\lambda_{i_1} := 1$, $\\lambda_{i_2} := -1$ and $\\lambda_i := 0$ otherwise; the list $i \\mapsto \\lambda_i w_i$ then vanishes off $\\{i_1,i_2\\}$ and sums to $w_{i_1} - w_{i_2} = 0$ by step 4.1. If $w$ is injective, its image is a subset of $\\mathbb{R}^{n+1}$ equinumerous with $r_0 \\ge n+2$, hence not linearly independent by [L6]; so some injective list $h : p \\to \\operatorname{im}(w)$ is linearly dependent, giving $\\nu : p \\to \\mathbb{R}$ not identically $0$ with $\\sum_{l<p}\\nu_l h(l) = 0$, and setting $\\lambda_{i} := \\nu_l$ when $w_i = h(l)$ and $\\lambda_i := 0$ otherwise turns that into $\\sum_{i<r_0}\\lambda_i w_i = 0$ by step 4.1, the list $i \\mapsto \\lambda_i w_i$ vanishing off the image of the injective map $l \\mapsto$ the unique $i$ with $w_i = h(l)$.",
      "step": "5.1",
      "inputs": [
        "step 4.3",
        "L6",
        "4.1"
      ]
    },
    {
      "id": "step-5.2",
      "claim": "**The step length.** Let $i_0$ be the least $i<r_0$ with $\\lambda_i \\ne 0$, which exists because $\\lambda$ is not identically $0$. Define $s : r_0 \\to \\mathbb{R}$ by $s_i := (1-\\mu_{f(i)})/\\lambda_i$ if $\\lambda_i>0$, by $s_i := \\mu_{f(i)}/(-\\lambda_i)$ if $\\lambda_i<0$, and by $s_i := s_{i_0}$ if $\\lambda_i = 0$; every $s_i$ is a positive real by step 4.2. Put $t^{*} := \\min\\{s_0,\\dots,s_{r_0-1}\\}$, a minimum over a nonempty finite set of reals, so $t^{*}>0$ and $t^{*} = s_{i}$ for some $i<r_0$; choosing that $i$ if $\\lambda_i \\ne 0$ and $i_0$ otherwise, there is $i^{*}<r_0$ with $\\lambda_{i^{*}} \\ne 0$ and $t^{*} = s_{i^{*}}$.",
      "step": "5.2",
      "inputs": [
        "step 4.2",
        "L4",
        "L5",
        "L8"
      ]
    },
    {
      "id": "step-6.1",
      "claim": "**Reading the coordinates of step 5.1.** The coordinate $n$ gives $\\sum_{i<r_0}\\lambda_i = 0$, and the coordinates $t<n$ give $\\sum_{i<r_0}\\lambda_i v_{b(f(i))} = 0$ in $\\mathbb{R}^{n}$.",
      "step": "6.1",
      "inputs": [
        "step 4.3",
        "step 5.1",
        "L3"
      ]
    },
    {
      "id": "step-6.2",
      "claim": "**The moved point.** Define $\\mu' : \\mathbb{N} \\to \\mathbb{R}$ by $\\mu'_j := \\mu_j + t^{*}\\lambda_i$ if $j = f(i)$ for the unique $i<r_0$ with that property, and $\\mu'_j := \\mu_j$ otherwise. Then $0 \\le \\mu'_j \\le 1$ for every $j<k$: outside the image of $f$ nothing changes; at $j = f(i)$ with $\\lambda_i>0$ one has $\\mu_{f(i)} < \\mu'_j \\le \\mu_{f(i)} + s_i\\lambda_i = 1$; with $\\lambda_i<0$ one has $0 = \\mu_{f(i)} + s_i\\lambda_i \\le \\mu'_j < \\mu_{f(i)}$; and with $\\lambda_i = 0$ the value is unchanged.",
      "step": "6.2",
      "inputs": [
        "step 4.2",
        "step 5.2",
        "L8"
      ]
    },
    {
      "id": "step-7.1",
      "claim": "**The moved point is feasible.** The list $j \\mapsto \\mu'_j - \\mu_j$ vanishes at every $j<k$ off the image of $f$ and takes the value $t^{*}\\lambda_i$ at $f(i)$, so step 4.1 gives $\\sum_{j<k}(\\mu'_j-\\mu_j) = \\sum_{i<r_0}t^{*}\\lambda_i = t^{*}\\cdot 0 = 0$; likewise the $\\mathbb{R}^{n}$-valued list $j \\mapsto (\\mu'_j-\\mu_j)v_{b(j)}$ vanishes off that image and takes the value $t^{*}\\lambda_i v_{b(f(i))}$ at $f(i)$, so $\\sum_{j<k}(\\mu'_j-\\mu_j)v_{b(j)} = t^{*}\\sum_{i<r_0}\\lambda_i v_{b(f(i))} = 0$. Hence $\\sum_{j<k}\\mu'_j = \\iota(k-1-n)$ and $\\sum_{j<k}\\mu'_j v_{b(j)} = 0$, so $\\mu' \\in \\Lambda$.",
      "step": "7.1",
      "inputs": [
        "step 4.1",
        "step 6.1",
        "step 6.2",
        "L2",
        "L3"
      ]
    },
    {
      "id": "step-8.1",
      "claim": "**The contradiction.** By step 5.2, $\\mu'_{f(i^{*})} = \\mu_{f(i^{*})} + t^{*}\\lambda_{i^{*}} \\in \\{0,1\\}$. So $f^{\\wedge i^{*}}$, an injective map $r_0-1 \\to k$, witnesses that $\\mu'$ is $(r_0-1)$-simple: off the image of $f$ the value $\\mu'_j = \\mu_j$ lies in $\\{0,1\\}$, and at $f(i^{*})$ it lies in $\\{0,1\\}$ as just shown. This contradicts the minimality of $r_0$, so the supposition of step 4.3 is untenable and $r_0 \\le n+1$.",
      "step": "8.1",
      "inputs": [
        "step 1.1",
        "step 3.2",
        "step 5.2",
        "step 6.2",
        "step 7.1",
        "4.3"
      ]
    },
    {
      "id": "step-9.1",
      "claim": "**The support bound.** There is $j_0<k$ with $\\mu_{j_0} = 0$. Suppose instead that $\\mu_j>0$ for every $j<k$; then off the image of $f$ the value $\\mu_j$ lies in $\\{0,1\\}$ and is positive, hence equals $1$. Put $\\nu_j := 1-\\mu_j$ for $j<k$ and $\\nu_j := 0$ for $j \\ge k$, so $\\nu$ vanishes at every $j<k$ off the image of $f$ and satisfies $0<\\nu_{f(i)}<1$ for $i<r_0$ by step 4.2, while $\\sum_{j<k}\\nu_j = \\iota(k)-\\iota(k-1-n) = \\iota(n+1)$ by [L7].",
      "step": "9.1",
      "inputs": [
        "step 4.2",
        "step 8.1",
        "L2",
        "L7"
      ]
    },
    {
      "id": "step-10.1",
      "claim": "By step 4.1, $\\sum_{j<k}\\nu_j = \\sum_{i<r_0}\\nu_{f(i)}$. If $r_0 = 0$ this is the empty sum $0$, contradicting $\\iota(n+1)>0$. If $r_0 \\ge 1$ then every term of $\\sum_{i<r_0}(1-\\nu_{f(i)})$ is positive, so that sum is at least its term at index $0$ and hence positive, whence $\\sum_{i<r_0}\\nu_{f(i)} = \\iota(r_0) - \\sum_{i<r_0}(1-\\nu_{f(i)}) < \\iota(r_0) \\le \\iota(n+1)$ using step 8.1. Either way $\\iota(n+1) < \\iota(n+1)$ or $\\iota(n+1) = 0$, both impossible; so some $\\mu_{j_0}$ is $0$.",
      "step": "10.1",
      "inputs": [
        "step 4.1",
        "step 8.1",
        "step 9.1",
        "L2",
        "L7",
        "L8"
      ]
    },
    {
      "id": "step-11.1",
      "claim": "**Descending one stage.** With $j_0$ as in step 9.1, put $b' := b^{\\wedge j_0} : k-1 \\to m$ and $\\mu'' := \\mu^{\\wedge j_0}$, extended by $0$ beyond $k-1$. Then $b'$ is injective with image $\\operatorname{im}(b)\\setminus\\{b(j_0)\\}$, $0 \\le \\mu''_j \\le 1$ for $j<k-1$, and by step 1.1 in both its real and its vector form, $\\sum_{j<k-1}\\mu''_j = \\sum_{j<k}\\mu_j - \\mu_{j_0} = \\iota(k-1-n)$ and $\\sum_{j<k-1}\\mu''_j v_{b'(j)} = \\sum_{j<k}\\mu_j v_{b(j)} - \\mu_{j_0}v_{b(j_0)} = 0$. So $(b',\\mu'')$ is admissible at $k-1$.",
      "step": "11.1",
      "inputs": [
        "construct",
        "step 1.1",
        "step 3.1",
        "step 3.2",
        "step 10.1",
        "9.1"
      ]
    },
    {
      "id": "step-12.1",
      "claim": "**Iterating.** Starting from the admissible pair of step 1.4 at $k = m$ and applying step 11.1 once for each $k$ from $m$ down to $n+1$, one obtains admissible pairs $(b^{k},\\mu^{k})$ for every $k$ with $n \\le k \\le m$, with $\\operatorname{im}(b^{k-1}) \\subseteq \\operatorname{im}(b^{k})$ and $\\operatorname{im}(b^{k})\\setminus\\operatorname{im}(b^{k-1})$ a single element. This is a recursion of length $m-n$, each stage determined by the previous one together with finitely many determinations (a least natural, a minimum of a finite set of reals), so no choice principle is involved.",
      "step": "12.1",
      "inputs": [
        "construct",
        "step 1.4",
        "step 11.1",
        "L4",
        "L5"
      ]
    },
    {
      "id": "step-13.1",
      "claim": "**The ordering.** Define $\\pi : m \\to m$ by $\\pi(j) := b^{n}(j)$ for $j<n$ and, for each $k$ with $n<k\\le m$, $\\pi(k-1) := $ the unique element of $\\operatorname{im}(b^{k})\\setminus\\operatorname{im}(b^{k-1})$. The images $\\operatorname{im}(b^{k})$ increase from $\\operatorname{im}(b^{n})$, of size $n$, to $\\operatorname{im}(b^{m}) = m$, gaining exactly one element at each stage, so $\\pi$ is injective with image $m$, that is a bijection, and for every $k$ with $n \\le k \\le m$ the set $\\{\\pi(j) : j<k\\}$ is exactly $\\operatorname{im}(b^{k})$.",
      "step": "13.1",
      "inputs": [
        "construct",
        "step 12.1",
        "L4",
        "L6"
      ]
    },
    {
      "id": "step-14.1",
      "claim": "**Both enumerations give the same partial sum.** Fix $k$ with $n \\le k \\le m$ and let $c : \\mathbb{N} \\to \\mathbb{R}^{n}$ be $c_i := v_i$ for $i \\in \\operatorname{im}(b^{k})$ and $c_i := 0$ otherwise. Then $c$ vanishes at every $i<m$ off the image of the injective list $j \\mapsto \\pi(j)$ on $k$, and also off the image of $b^{k}$, so step 4.1 applied twice gives $\\sum_{j<k}v_{\\pi(j)} = \\sum_{i<m}c_i = \\sum_{j<k}v_{b^{k}(j)}$.",
      "step": "14.1",
      "inputs": [
        "step 4.1",
        "step 13.1"
      ]
    },
    {
      "id": "step-15.1",
      "claim": "**The estimate for $n \\le k \\le m$.** Since $\\sum_{j<k}\\mu^{k}_j v_{b^{k}(j)} = 0$, additivity gives $\\sum_{j<k}v_{b^{k}(j)} = \\sum_{j<k}\\bigl(1-\\mu^{k}_j\\bigr)v_{b^{k}(j)}$; each coefficient $1-\\mu^{k}_j$ is nonnegative, so the finite triangle inequality and $\\lVert v_i\\rVert_2 \\le 1$ give $\\bigl\\lVert\\sum_{j<k}v_{b^{k}(j)}\\bigr\\rVert_2 \\le \\sum_{j<k}\\bigl(1-\\mu^{k}_j\\bigr)\\lVert v_{b^{k}(j)}\\rVert_2 \\le \\sum_{j<k}\\bigl(1-\\mu^{k}_j\\bigr) = \\iota(k)-\\iota(k-n) = \\iota(n)$.",
      "step": "15.1",
      "inputs": [
        "step 12.1",
        "step 14.1",
        "L1",
        "L2",
        "L7"
      ]
    },
    {
      "id": "step-16.1",
      "claim": "By steps 14.1 and 15.1 the bound $\\lVert\\sum_{j<k}v_{\\pi(j)}\\rVert_2 \\le \\iota(n)$ holds for $n \\le k \\le m$, and by step 1.5 it holds for $k<n$; together with the case $m \\le n$ of step 1.2, the required bijection $\\pi$ has been exhibited in every case.",
      "step": "16.1",
      "inputs": [
        "step 1.2",
        "step 13.1",
        "step 14.1",
        "step 15.1",
        "step 1.5",
        "discharge-construct"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "checked",
      "evidence": "Statement: The finite list length m may be 0; the empty bijection and empty partial sum satisfy the conclusion. Let $n \\in \\mathbb{N}$ with $n \\ge 1$, let $m \\in \\mathbb{N}$ and let $v : m \\to \\mathbb{R}^{n}$ be a finite list of vectors with $$\\lVert v_i\\rVert_2 \\le 1 \\ \\text{ for every } i<"
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "step 1.3: **Stage data.** For $n \\le k \\le m$ call a pair $(b,\\mu)$ **admissible at $k$** when $b : k \\to m$ is injective, $\\mu : \\mathbb{N} \\to \\mathbb{R}$ vanishes at every $j \\ge k$, satisfies $0 \\le \\mu_j \\le 1$ for $j<k$, and satisfies $\\sum_{j<k}\\mu_j v_{b(j)} = 0$ and $\\sum_{j<k}\\mu"
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "Statement: The one-dimensional, one-term, or p=1 boundary is within the stated range (or is the explicit minimal witness) and was checked against the proof. Let $n \\in \\mathbb{N}$ with $n \\ge 1$, let $m \\in \\mathbb{N}$ and let $v : m \\to \\mathbb{R}^{n}$ be a finite list of vectors with $$\\lVert v_i\\rVert_2 \\le 1 \\ \\text{ for every } i<"
    },
    {
      "case": "degenerate",
      "status": "not_applicable",
      "reason": "thm-steinitz-polygonal-confinement: the Statement has no collapse, coincidence, constant-family, or equality-case branch beyond cases already included by its universal estimates."
    },
    {
      "case": "endpoints",
      "status": "checked",
      "evidence": "step 2.1: **The reindexing identity.** For every $k \\in \\mathbb{N}$, every $r \\in \\mathbb{N}$, every injective $f : r \\to k$ and every $c : \\mathbb{N} \\to \\mathbb{R}$ vanishing at every $j<k$ outside the image of $f$, one has $\\sum_{j<k}c_j = \\sum_{i<r}c_{f(i)}$. This is proved by inductio"
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "step 1.2: **The easy case $m \\le n$.** Take $\\pi$ to be the identity of $m$, a bijection. For $k \\le m$ the finite triangle inequality and $\\lVert v_j\\rVert_2 \\le 1$ give $\\lVert\\sum_{j<k}v_j\\rVert_2 \\le \\sum_{j<k}\\lVert v_j\\rVert_2 \\le \\sum_{j<k}1 = \\iota(k) \\le \\iota(n)$, since $k \\le m "
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "thm-steinitz-polygonal-confinement: the asserted result has no biconditional requiring a forward implication; any “if and only if” appearing inside a cited definition is not a new proof obligation here."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "thm-steinitz-polygonal-confinement: the asserted result has no biconditional requiring a reverse implication; any equivalence used as a dependency is consumed only in the direction named by the numbered proof."
    }
  ],
  "finite_smoke": [],
  "risk_review": {
    "status": "pending",
    "reviewer": "Alpha",
    "notes": "Audit-Beta captured the A2 contract. Alpha assigns the independent proof-refuter route at A5/A6."
  }
}
```

## Generated audit-manifest relationships

```json
[
  {
    "source": "thm-steinitz-polygonal-confinement",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "def-series-of-vectors-and-rearrangement",
    "declared_target": "def-series-of-vectors-and-rearrangement",
    "target_statement_provenance": "ai-altered",
    "targetPage": "rn-as-a-normed-space",
    "targetBatch": "wave12-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-steinitz-polygonal-confinement",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "def-euclidean-inner-product",
    "declared_target": "def-euclidean-inner-product",
    "target_statement_provenance": "ai-altered",
    "targetPage": "rn-as-a-normed-space",
    "targetBatch": "wave12-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-steinitz-polygonal-confinement",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "def-p-norms-on-rn",
    "declared_target": "def-p-norms-on-rn",
    "target_statement_provenance": "ai-altered",
    "targetPage": "rn-as-a-normed-space",
    "targetBatch": "wave12-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-steinitz-polygonal-confinement",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "lem-p-norms-are-norms-and-induce-the-published-metrics",
    "declared_target": "lem-p-norms-are-norms-and-induce-the-published-metrics",
    "target_statement_provenance": "ai-altered",
    "targetPage": "rn-as-a-normed-space",
    "targetBatch": "wave12-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-steinitz-polygonal-confinement",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "thm-cauchy-schwarz-and-the-euclidean-norm",
    "declared_target": "thm-cauchy-schwarz-and-the-euclidean-norm",
    "target_statement_provenance": "ai-altered",
    "targetPage": "rn-as-a-normed-space",
    "targetBatch": "wave12-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-steinitz-polygonal-confinement",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric",
    "declared_target": "lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric",
    "target_statement_provenance": "ai-altered",
    "targetPage": "rn-as-a-normed-space",
    "targetBatch": "wave12-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-steinitz-polygonal-confinement",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "def-norm-and-normed-space",
    "declared_target": "def-norm-and-normed-space",
    "target_statement_provenance": "ai-altered",
    "targetPage": "rn-as-a-normed-space",
    "targetBatch": "wave12-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-steinitz-polygonal-confinement",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "cor-independent-set-is-no-larger-than-a-finite-spanning-set",
    "declared_target": "cor-independent-set-is-no-larger-than-a-finite-spanning-set",
    "target_statement_provenance": "ai-altered",
    "targetPage": "linear-independence-bases-and-dimension",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-steinitz-polygonal-confinement",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "def-linear-independence",
    "declared_target": "def-linear-independence",
    "target_statement_provenance": "ai-altered",
    "targetPage": "linear-independence-bases-and-dimension",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-steinitz-polygonal-confinement",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "def-dimension",
    "declared_target": "def-dimension",
    "target_statement_provenance": "ai-altered",
    "targetPage": "linear-independence-bases-and-dimension",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-steinitz-polygonal-confinement",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "lem-standard-basis-of-f-n",
    "declared_target": "lem-standard-basis-of-f-n",
    "target_statement_provenance": "ai-altered",
    "targetPage": "linear-independence-bases-and-dimension",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-steinitz-polygonal-confinement",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "def-linear-combination-and-span",
    "declared_target": "def-linear-combination-and-span",
    "target_statement_provenance": "ai-altered",
    "targetPage": "vector-spaces-and-subspaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-steinitz-polygonal-confinement",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "thm-well-ordering-principle",
    "declared_target": "thm-well-ordering-principle",
    "target_statement_provenance": "literature-derived",
    "targetPage": "construction-of-the-natural-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-steinitz-polygonal-confinement",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "lem-finite-set-has-max",
    "declared_target": "lem-finite-set-has-max",
    "target_statement_provenance": "ai-altered",
    "targetPage": "suprema-and-infima",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-steinitz-polygonal-confinement",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "def-max-min",
    "declared_target": "def-max-min",
    "target_statement_provenance": "ai-altered",
    "targetPage": "suprema-and-infima",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-steinitz-polygonal-confinement",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "lem-finite-sum-laws",
    "declared_target": "lem-finite-sum-laws",
    "target_statement_provenance": "ai-altered",
    "targetPage": "roots-and-rational-powers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-steinitz-polygonal-confinement",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "def-finite-sum",
    "declared_target": "def-finite-sum",
    "target_statement_provenance": "ai-altered",
    "targetPage": "roots-and-rational-powers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-steinitz-polygonal-confinement",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "lem-finite-subsets-listable",
    "declared_target": "lem-finite-subsets-listable",
    "target_statement_provenance": "ai-altered",
    "targetPage": "countability-and-uncountability",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-steinitz-polygonal-confinement",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "def-countable",
    "declared_target": "def-countable",
    "target_statement_provenance": "ai-altered",
    "targetPage": "countability-and-uncountability",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-steinitz-polygonal-confinement",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "lem-pigeonhole",
    "declared_target": "lem-pigeonhole",
    "target_statement_provenance": "ai-altered",
    "targetPage": "countability-and-uncountability",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-steinitz-polygonal-confinement",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "def-injection-surjection-bijection",
    "declared_target": "def-injection-surjection-bijection",
    "target_statement_provenance": "ai-altered",
    "targetPage": "relations-functions-and-quotients",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-steinitz-polygonal-confinement",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "def-canonical-natural",
    "declared_target": "def-canonical-natural",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-steinitz-polygonal-confinement",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "lem-of-naturals-positive",
    "declared_target": "lem-of-naturals-positive",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-steinitz-polygonal-confinement",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "def-function-space",
    "declared_target": "def-function-space",
    "target_statement_provenance": "ai-altered",
    "targetPage": "vector-spaces-and-subspaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-steinitz-polygonal-confinement",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "def-vector-space",
    "declared_target": "def-vector-space",
    "target_statement_provenance": "ai-altered",
    "targetPage": "vector-spaces-and-subspaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-steinitz-polygonal-confinement",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "thm-induction-principle",
    "declared_target": "thm-induction-principle",
    "target_statement_provenance": "literature-derived",
    "targetPage": "construction-of-the-natural-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-steinitz-polygonal-confinement",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "lem-of-inverse-positive",
    "declared_target": "lem-of-inverse-positive",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-steinitz-polygonal-confinement",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "def-equinumerous",
    "declared_target": "def-equinumerous",
    "target_statement_provenance": "ai-altered",
    "targetPage": "countability-and-uncountability",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-steinitz-polygonal-confinement",
    "sourcePage": "rn-as-a-normed-space",
    "batch": "wave12-real-analysis",
    "target": "lem-vector-space-elementary-consequences",
    "declared_target": "lem-vector-space-elementary-consequences",
    "target_statement_provenance": "ai-altered",
    "targetPage": "vector-spaces-and-subspaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  }
]
```

## Relevant current generated-risk rows

```json
[]
```

## Full exact-current text of every cited or declared item (29)

### `cor-independent-set-is-no-larger-than-a-finite-spanning-set`

````markdown
---
id: cor-independent-set-is-no-larger-than-a-finite-spanning-set
kind: corollary
title: "If $V$ has a spanning set with $n$ elements, then every linearly independent subset of $V$ is finite with at most $n$ elements; in particular $V$ has no linearly independent subset equinumerous with $\\mathbb{N}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-steinitz-exchange, def-linear-independence, def-linear-combination-and-span, def-vector-space, def-field, def-countable, def-equinumerous, def-injection-surjection-bijection, lem-pigeonhole, def-natural-numbers, def-nat-order]
justified_by: []
aliases: [cor-independent-bounded-by-spanning]
landmark: false
short: "independent sets are bounded by a finite spanning set"
proof_strategy: direct
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
    - title: "Steinitz exchange lemma (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Steinitz_exchange_lemma"
    - title: "Dimension (vector space) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Dimension_(vector_space)"
    - title: "Western Washington University notes: Bases and the Steinitz exchange lemma"
      url: "https://faculty.curgus.wwu.edu/Courses/504_201710/Bases2013.pdf"
pipeline_run: null
---

## Statement

Let $V$ be a vector space over a field $F$ ([[def-vector-space]]) and suppose
$V$ has a spanning subset $S$ ([[def-linear-combination-and-span]]) with
$S \approx n$ for some $n \in \mathbb{N}$ ([[def-equinumerous]]). Then:

1. every linearly independent subset $L \subseteq V$
   ([[def-linear-independence]]) is finite ([[def-countable]]), and the unique
   $m \in \mathbb{N}$ with $L \approx m$ satisfies $m \le n$;
2. no linearly independent subset of $V$ is equinumerous with $\mathbb{N}$.

## Facts & Assumptions

**Given:** A field $F$, a vector space $V$ over $F$, a spanning subset $S \subseteq V$ with $S \approx n$, and a linearly independent subset $L \subseteq V$.

[L1] Steinitz exchange: under these hypotheses $L$ is finite and the unique $m$ with $L \approx m$ satisfies $m \le n$ ([[thm-steinitz-exchange]], claim 1).

[L2] A finite set is equinumerous with exactly one natural number, and $\mathbb{N} \not\approx p$ for every $p \in \mathbb{N}$ ([[lem-pigeonhole]], claims 3 and 4).

[L3] $\approx$ is symmetric and transitive, being carried by bijections; and a set is finite when it is equinumerous with some natural number ([[def-equinumerous]], [[def-injection-surjection-bijection]], [[def-countable]], [[def-natural-numbers]], [[def-nat-order]]).

## Proof

**Proof technique:** direct.

1.1 Claim 1 is exactly claim 1 of the Steinitz exchange lemma, whose hypotheses are the ones assumed here: $S$ spans $V$ and is finite of size $n$, and $L$ is linearly independent. [L1]

1.2 Suppose some linearly independent $L \subseteq V$ satisfied $L \approx \mathbb{N}$. By claim 1 the set $L$ is finite, so $L \approx m$ for some $m \in \mathbb{N}$; by symmetry and transitivity of $\approx$ this gives $\mathbb{N} \approx m$, which is impossible. [L1, L2, L3]

2.1 Claim 1 is step 1.1 and claim 2 is step 1.2. [step 1.1, step 1.2] ∎

## Remarks

- **Claim 2 is the form in which later items say a space is infinite-dimensional.** Exhibiting a linearly independent subset equinumerous with $\mathbb{N}$ shows, by this corollary read backwards, that the space has no finite spanning set at all, hence no finite basis. That is exactly the route taken on the companion page by the explicit infinite basis for the eventually zero families and by the independent set of $F^{\mathbb{N}}$ that does not span it.

- **The bound is on the independent set, not on the spanning set.** A spanning set may be enlarged freely without ceasing to span, so no bound in the other direction holds; what is bounded is how many vectors can be independent, and the bound is the size of *any* finite spanning set.

- **Nothing here assumes $V$ has a basis.** The hypothesis is a finite spanning set, which need not be independent; that a spanning set contains a basis is [[cor-every-spanning-set-contains-a-basis]], proved later and by a different route.
````

### `def-canonical-natural`

````markdown
---
id: def-canonical-natural
kind: definition
title: "The canonical natural $\\iota(n) = n \\cdot 1_F$ of a field"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-field, def-natural-numbers, thm-recursion]
justified_by: []
forward_refs: [def-metric-completion]
aliases: []
landmark: false
short: "$\\iota(n) = n \\cdot 1_F$"
verification:
  precheck: n/a
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Characteristic (algebra) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Characteristic_(algebra)"
    - title: "T. Tao, Analysis I, 3rd ed."
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Elias Zakon, Mathematical Analysis: Natural Numbers and Induction"
      url: "https://math.libretexts.org/Bookshelves/Analysis/Mathematical_Analysis_%28Zakon%29/02%3A_Real_Numbers_and_Fields/2.02%3A_Natural_Numbers._Induction"
pipeline_run: null
---

## Definition

Let $F$ be a field ([[def-field]]) with additive identity $0_F$ and
multiplicative identity $1_F$. Define
$\iota : \mathbb{N} \to F$ by recursion on $\mathbb{N}$
([[def-natural-numbers]], [[thm-recursion]]):

$$\iota(0) \;:=\; 0_F, \qquad \iota(n+1) \;:=\; \iota(n) + 1_F .$$

$\iota(n)$ is the **canonical natural** of $n$ in $F$. It is also written
$n \cdot 1_F$, and for $n \ge 1$ it is $1_F$ added to itself $n$ times.

**Why the notation is needed at all.** A natural number in this library is a von
Neumann natural, that is a set ([[def-natural-numbers]]), and a set is not an
element of $F$. So $1/n$, $n^{\alpha}$ and $x/n$ are not expressions of $F$ when
$n$ is a natural: what they mean is $1/\iota(n)$, $\iota(n)^{\alpha}$ and
$x/\iota(n)$. The map $\iota$ is what carries a counting number into the field,
and writing it is the whole reason a reader meets $1/\iota(k+1)$ where an
informal text would write $1/(k+1)$.

## Remarks

- **Where the index shift comes from.** $\mathbb{N}$ contains $0$
  ([[def-natural-numbers]]) and $\iota(0) = 0_F$, so $1/\iota(k)$ is undefined at
  $k = 0$. A family of reciprocals indexed by $\mathbb{N}$ is therefore written
  over $\iota(k+1)$, which is why the harmonic and telescoping families of this
  library run over $k+1$ rather than over $k$. This is bookkeeping, not a
  restriction: the values are the usual ones.

- **This definition records notation; the arithmetic is proved elsewhere.** That
  $\iota$ is strictly increasing and positive on $n \ge 1$, and that it carries
  sums to sums and products to products, is [[lem-of-naturals-positive]], stated
  for an ordered field. That lemma introduces the same element by the equivalent
  recursion $1 \cdot 1_F = 1_F$, $(n+1) \cdot 1_F = n \cdot 1_F + 1_F$, which
  agrees with the definition above because $\iota(1) = \iota(0) + 1_F = 1_F$.
  Nothing here is new mathematics; the definition exists so that the notation has
  a home a reader can look up.

- **The symbol $\iota$ is used in this library for other canonical maps, and this
  definition does not govern them.** It also denotes the canonical field
  embedding $\iota : \mathbb{Q} \to F$ ([[lem-of-q-embeds]]), the isometric
  embedding of a metric space into a completion ([[def-metric-completion]]), and
  an inclusion map $\iota : S \to X$ of a subspace. Each of those is introduced
  where it is used and means something different from the map defined here. What
  the four share is only that each is the canonical map of its situation.

- **Fields, not just ordered fields.** The recursion needs no order, so the
  definition is stated for a field; every use in this library is in an ordered
  field, and the order is what makes $\iota$ injective
  ([[lem-of-naturals-positive]]). In a field of positive characteristic $\iota$
  is not injective, which is one reason the injectivity is a lemma rather than
  part of the definition.
````

### `def-countable`

````markdown
---
id: def-countable
kind: definition
title: "Finite, countably infinite, countable, uncountable"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-equinumerous, def-natural-numbers, def-nat-order, lem-nat-order-is-membership, lem-pigeonhole]
justified_by: []
aliases: [def-finite-set, def-countably-infinite, def-uncountable]
landmark: true
short: "finite, countable, uncountable"
verification:
  precheck: n/a
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-07-26
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-25
sources:
  scraped: []
  references:
    - title: "J. K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
    - title: "J. Lebl, Basic Analysis: Introduction to Real Analysis, basic set theory"
      url: "https://www.jirka.org/ra/html/sec_basicset.html"
    - title: "Countable set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Countable_set"
    - title: "Finite set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Finite_set"
    - title: "T. Tao, Analysis I, 3rd ed., §3.6 and §8.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Definition

Recall that a natural number is a von Neumann natural
([[def-natural-numbers]]): $0 = \varnothing$ and $\sigma(n) = n \cup \{n\}$, so
that

$$n = \{\, m \in \mathbb{N} : m < n \,\} = \{0, 1, \dots, n-1\}$$

is itself the set of its predecessors. Here $<$ is the order of
[[def-nat-order]], which is defined additively, so the displayed identity is a
theorem and not a convention: it is [[lem-nat-order-is-membership]], proved
immediately above. Let $A$ be a set, and let $\approx$ be equinumerosity
([[def-equinumerous]]).

- $A$ is **finite** if $A \approx n$ for some $n \in \mathbb{N}$.
- $A$ is **countably infinite** if $A \approx \mathbb{N}$.
- $A$ is **at most countable** if it is finite or countably infinite.
- $A$ is **uncountable** if it is not at most countable.

## Remarks

- **Convention: in this library "countable" alone always means "at most
  countable"**, so a finite set is countable. This is the convention of Halmos
  and of Tao, and it is the one that makes the theorems on this page read
  cleanly: subsets, products and unions of countable sets are countable, with no
  finite/infinite case split in the statement. The competing convention, used by
  Rudin among others, reserves "countable" for "countably infinite" and says
  "at most countable" for the disjunction. Under that convention every statement
  below still holds after replacing "countable" with "at most countable", but
  several would become false as literally written. Where the distinction
  matters, the long forms "countably infinite" and "at most countable" are used
  in full, and "uncountable" always means "not at most countable", on which the
  two conventions agree.

- **The three classes are exhaustive by construction**: every set is finite,
  countably infinite, or uncountable, since "uncountable" is defined as the
  negation of the disjunction. That they are also mutually exclusive, that is,
  that no set is both finite and countably infinite, is a genuine theorem
  amounting to $\mathbb{N} \not\approx n$ for every $n \in \mathbb{N}$, and it is
  proved immediately above as claim 4 of [[lem-pigeonhole]]. So a countably
  infinite set is never finite, and "$A$ is infinite", meaning not finite, is
  implied by $A \approx \mathbb{N}$. The same lemma pins down finiteness itself:
  by its claim 3 a finite set is equinumerous with exactly one natural number, so
  the number of elements of a finite set is well defined, and by its claim 5 no
  finite set is equinumerous with a proper subset of itself.

- **What the exclusivity is and is not used for below.** Nothing on this page
  needs it in order to run: the infinitude of $\mathbb{Q}$, for instance, is
  obtained by exhibiting a bijection $\mathbb{Q} \approx \mathbb{N}$ directly
  ([[thm-rationals-countable]]) rather than by ruling out finiteness. It is used
  where the two notions of infinity are compared
  ([[fs-infinite-has-countable-subset-in-zf]]) and where the continuum hypothesis
  is instantiated at $\mathbb{N}$ ([[rem-continuum-hypothesis]]), both of which
  need $\mathbb{N}$ to be infinite as a fact rather than as a convention.

- **$0$ and the empty set.** $0 = \varnothing$, and $A \approx 0$ holds exactly
  when $A = \varnothing$, so the empty set is finite. This matters in the proofs
  below, where the empty case is always separated out: a surjection
  $\mathbb{N} \to A$ cannot exist when $A = \varnothing$, which is why
  [[lem-countable-iff-surjection-from-n]] assumes $A$ nonempty.

- **Countability is a property of a set alone**, not of a set with structure. In
  particular $\mathbb{Q}$ is countable while carrying a dense order, and
  $\mathbb{R}$ is uncountable; neither statement says anything on its own about
  the order or the arithmetic those sets carry.
````

### `def-dimension`

````markdown
---
id: def-dimension
kind: definition
title: "Finite-dimensional vector space, and its dimension $\\dim_F V$; infinite-dimensional means having no finite basis"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [thm-any-two-finite-bases-have-the-same-size, def-linear-basis, def-linear-independence, def-linear-combination-and-span, lem-restriction-of-scalars, def-subfield, def-vector-space, def-field, def-countable, def-equinumerous, def-injection-surjection-bijection, lem-pigeonhole, def-natural-numbers]
justified_by: []
aliases: [def-finite-dimensional, def-infinite-dimensional]
landmark: true
short: "$\\dim_F V$"
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-03
    scope: published-audit-targeted
    context_sha256: 00c5f9e7b8d68228285e9a2319a6cc98f3a1d6982c44b52bdc03f0f2b9feea4d
    item_sha256: b1e7ccec53efbe1df92ba5a9cdfdce9fd51f466194a4ae3295eb879d599f7114
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-03
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Dimension (vector space) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Dimension_(vector_space)"
    - title: "S. Axler, Linear Algebra Done Right, 4th ed., Ch. 2"
      url: "https://linear.axler.net/"
    - title: "Interactive Linear Algebra: Dimension"
      url: "https://textbooks.math.gatech.edu/ila/dimension.html"
    - title: "Sheldon Axler, Linear Algebra Done Right, 4th ed."
      url: "https://linear.axler.net/LADR4e.pdf"
pipeline_run: null
---

## Definition

Let $V$ be a vector space over a field $F$ ([[def-vector-space]]).

$V$ is **finite-dimensional over $F$** when it has a **finite** basis
([[def-linear-basis]], [[def-countable]]): some basis $B$ of $V$ satisfies
$B \approx n$ for some $n \in \mathbb{N}$ ([[def-equinumerous]]).

For such a $V$, the **dimension of $V$ over $F$**, written $\dim_F V$, is that
$n$:

$$\dim_F V \;:=\; \text{the unique } n \in \mathbb{N} \text{ such that } V \text{ has a basis } B \text{ with } B \approx n .$$

**This is well defined.** Existence of such an $n$ is the hypothesis, together
with the fact that a finite set is equinumerous with exactly one natural number
([[lem-pigeonhole]], claim 3). Uniqueness is
[[thm-any-two-finite-bases-have-the-same-size]]: two bases of $V$ with $n$ and
with $m$ elements force $n = m$. That theorem is therefore a **prerequisite** of
this definition, not a later justification of it, and it is listed in `deps`.

$V$ is **infinite-dimensional over $F$** when it is not finite-dimensional over
$F$, that is, when $V$ has **no** finite basis. No number is attached to such a
space here: the symbol $\dim_F V$ is defined only in the finite-dimensional case,
and the expression $\dim_F V = \infty$ is not used.

**The zero space.** $\varnothing$ is a basis of $\{0_V\}$
([[def-linear-basis]]) and $\varnothing \approx 0$, so $\{0_V\}$ is
finite-dimensional with $\dim_F \{0_V\} = 0$. Conversely a space of dimension $0$
has a basis $B \approx 0$, that is $B = \varnothing$, and then
$V = \operatorname{span}(\varnothing) = \{0_V\}$
([[def-linear-combination-and-span]]).

## Remarks

- **The subscript $F$ is not ornamental.** By [[lem-restriction-of-scalars]] the
  same set with the same addition is a vector space over any subfield
  $K \subseteq F$ ([[def-subfield]]), and for a proper subfield the two
  structures can have different bases and different dimensions. The companion
  page's basis of $\mathbb{R}$ over
  $\mathbb{Q}$ is the extreme case: $\mathbb{R}$ is a vector
  space both over itself and over the embedded copy of $\mathbb{Q}$ inside it, and
  it is infinite-dimensional over the latter. So "the dimension of $V$" is
  incomplete language in exactly the
  way that "the vector space $V$" is, and both the space and the field are part of
  the statement of every result below.

- **Infinite-dimensional is defined as a negation, deliberately.** Assigning a
  size to an infinite basis would require knowing that any two infinite bases of a
  space are equinumerous, which
  [[thm-any-two-finite-bases-have-the-same-size]] does not prove and this page
  does not claim; the standard argument for it is cardinal arithmetic, developed
  much later in the library. The companion page therefore records a proper
  subspace with an equinumerous basis rather than any statement of
  the form $\dim U = \dim V$ for infinite-dimensional spaces.

- **Dimension counts a basis, not a spanning set and not an independent set.** A
  spanning set may be larger than $\dim_F V$ and an independent set smaller;
  [[cor-independent-set-is-no-larger-than-a-finite-spanning-set]] is what bounds
  the second by the first, and
  [[lem-basis-iff-maximal-independent-iff-minimal-spanning]] is what says a basis
  is exactly where the two meet.
````

### `def-equinumerous`

````markdown
---
id: def-equinumerous
kind: definition
title: "Equinumerous sets, $A \\approx B$ and $A \\preceq B$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-injection-surjection-bijection]
justified_by: []
aliases: [def-equipollent, def-same-cardinality]
landmark: false
short: "$A\\approx B$, $A\\preceq B$"
verification:
  precheck: n/a
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-07-26
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-25
sources:
  scraped: []
  references:
    - title: "J. K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
    - title: "J. Lebl, Basic Analysis: Introduction to Real Analysis, basic set theory"
      url: "https://www.jirka.org/ra/html/sec_basicset.html"
    - title: "Equinumerosity (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Equinumerosity"
    - title: "Countable set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Countable_set"
pipeline_run: null
---

## Definition

Let $A$ and $B$ be sets ([[def-injection-surjection-bijection]] for the
terminology).

- $A$ and $B$ are **equinumerous**, written $A \approx B$, if there exists a
  bijection $f : A \to B$.
- $A$ is **dominated by** $B$, written $A \preceq B$, if there exists an
  injection $f : A \to B$.
- $A \prec B$ abbreviates: $A \preceq B$ and not $A \approx B$.

## Remarks

- **$\approx$ behaves like an equivalence relation.** It is reflexive
  ($\mathrm{id}_A$ is a bijection), symmetric (the inverse of a bijection is a
  bijection) and transitive (a composition of bijections is a bijection). The
  careful statement is that these three properties hold for all sets, and that
  $\approx$ restricted to any *set* of sets is an equivalence relation on that
  set. It is not a relation on "the set of all sets", which does not exist; the
  reflexivity, symmetry and transitivity statements are schemas about arbitrary
  sets, which is all any argument below uses.

- **$\preceq$ is reflexive and transitive**, for the same reasons, and
  $A \approx B$ implies both $A \preceq B$ and $B \preceq A$. The converse, that
  $A \preceq B$ and $B \preceq A$ together give $A \approx B$, is a theorem and
  not a triviality: it is [[thm-schroder-bernstein]], and it is proved without
  any use of choice.

- **Subsets.** $A \subseteq B$ implies $A \preceq B$, since the inclusion map is
  injective. The reverse fails badly for infinite sets: the successor map
  $\sigma$ is a bijection $\mathbb{N} \to \mathbb{N} \setminus \{0\}$, being
  injective and never zero ([[thm-omega-is-peano-system]]) and hitting every
  nonzero natural ([[lem-nat-nonzero-is-successor]]), so
  $\mathbb{N} \approx \mathbb{N} \setminus \{0\}$ and a proper subset can be
  equinumerous with the whole.

- $\approx$ is the library's substitute for "has the same number of elements",
  stated without introducing cardinal numbers. Everything on this page is phrased
  with $\approx$, $\preceq$ and $\prec$ alone, so no theory of cardinals is
  presupposed.
````

### `def-euclidean-inner-product`

````markdown
---
id: def-euclidean-inner-product
kind: definition
title: "The Euclidean inner product $\\langle x,y\\rangle = \\sum_{k<n} x_k y_k$ on $\\mathbb{R}^n$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-norm-and-normed-space, def-function-space, def-vector-space, lem-standard-basis-of-f-n, def-finite-sum, lem-finite-sum-laws, lem-metrics-on-rn, lem-of-square-positive, thm-of-square-roots, def-natural-numbers, lem-nat-order-is-membership, def-integer-power, lem-power-laws]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Dot product (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Dot_product"
    - title: "Euclidean space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Euclidean_space"
    - title: "J. Demmel, MA221 Lecture 3: Vector Norms"
      url: "https://people.eecs.berkeley.edu/~demmel/ma221_Fall10/Lectures/Lecture_03.html"
    - title: "G. Zitelli, Math 641 Functional Analysis, Part I"
      url: "https://www.math.uci.edu/~gzitelli/pdf/641/641part1.pdf"
pipeline_run: null
---

## Definition

Let $n \in \mathbb{N}$. A natural number is a von Neumann natural, that is a set,
and $n = \{0, 1, \dots, n-1\}$ ([[def-natural-numbers]],
[[lem-nat-order-is-membership]]), so

$$\mathbb{R}^{n} \;=\; \{\, x \;:\; x \text{ is a function } n \to \mathbb{R} \,\}$$

is the function space of [[def-function-space]] at $F = \mathbb{R}$ and $X = n$,
a vector space over $\mathbb{R}$ under the pointwise operations
([[def-vector-space]]). We write $x_k := x(k)$ for $k < n$, and two elements of
$\mathbb{R}^{n}$ are equal exactly when they agree at every $k < n$. This is the
same set that [[lem-metrics-on-rn]] calls $\mathbb{R}^{n}$.

The **Euclidean inner product** of $x, y \in \mathbb{R}^{n}$ is the real number

$$\langle x, y\rangle \;:=\; \sum_{k<n} x_k\,y_k ,$$

the finite sum of [[def-finite-sum]] applied to the list $k \mapsto x_k y_k$
(extended by $0$ beyond $n$, as every finite list in this library is). The
**Euclidean norm** of $x$ is

$$\lVert x\rVert_2 \;:=\; \sqrt{\langle x, x\rangle},$$

which is defined because $\langle x,x\rangle = \sum_{k<n} x_k^{2} \ge 0$ (a sum
of nonnegative terms, [[lem-finite-sum-laws]] clause 4 and
[[lem-of-square-positive]], the case $x_k = 0$ giving $x_k^2 = 0$ by
[[def-integer-power]]) and every nonnegative real has a unique nonnegative square
root ([[thm-of-square-roots]]).

### Both are defined for every $n$, including $n = 0$

At $n = 0$ the set $\mathbb{R}^{0}$ has exactly one element, the empty function,
and it is the zero vector space ([[lem-standard-basis-of-f-n]] clause 5); the sum
above is the empty sum, so $\langle x,y\rangle = 0$ and $\lVert x\rVert_2 = 0$.
**This is the first place on this page where the two index regimes diverge, and
the divergence is deliberate.** The published metrics $d_1$, $d_2$, $d_\infty$ of
[[lem-metrics-on-rn]] are defined only for $n \ge 1$, because $d_\infty$ would
otherwise be a maximum over the empty index set; the algebra above needs no such
restriction. The boundary in this page runs between the algebra and the metric,
not where a reader would guess, and [[rem-rn-conventions-and-scope]] lists
exactly which items inherit $n \ge 1$.

### The algebra of the inner product

For all $x, y, z \in \mathbb{R}^{n}$ and $\lambda \in \mathbb{R}$:

1. **Symmetry.** $\langle x,y\rangle = \langle y,x\rangle$, since $x_ky_k = y_kx_k$
   termwise.
2. **Additivity in the first argument.**
   $\langle x + y, z\rangle = \langle x,z\rangle + \langle y,z\rangle$: the list
   $k \mapsto (x_k+y_k)z_k$ is the termwise sum of $k \mapsto x_kz_k$ and
   $k \mapsto y_kz_k$, so [[lem-finite-sum-laws]] clause 1 applies.
3. **Homogeneity in the first argument.**
   $\langle \lambda x, y\rangle = \lambda\langle x,y\rangle$, by
   [[lem-finite-sum-laws]] clause 2.
4. **Bilinearity.** Clauses 2 and 3 together with symmetry give the same two laws
   in the second argument.
5. **Positive definiteness.** $\langle x,x\rangle \ge 0$, and
   $\langle x,x\rangle = 0$ if and only if $x = 0$. Indeed a vanishing sum of
   nonnegative terms has every term $0$ ([[lem-finite-sum-laws]] clause 4), so
   $x_k^{2} = 0$ for every $k < n$, and a nonzero real has a positive square
   ([[lem-of-square-positive]]), whence $x_k = 0$ for every $k < n$ and $x = 0$.
6. **Agreement with the published Euclidean metric.** For $n \ge 1$ and
   $x, y \in \mathbb{R}^{n}$,
   $\lVert x - y\rVert_2 = \sqrt{\sum_{k<n}(x_k-y_k)^{2}} = d_2(x,y)$, the two
   sides being the same expression ([[lem-metrics-on-rn]]). In particular
   $\lVert x\rVert_2 = d_2(x, 0)$.

That $\lVert\cdot\rVert_2$ is a norm in the sense of [[def-norm-and-normed-space]]
is proved in [[thm-cauchy-schwarz-and-the-euclidean-norm]], where the triangle
inequality is obtained from the Cauchy-Schwarz inequality; it is not assumed
here.

## Remarks

- **Scope: the concrete form only.** What is defined above is the Euclidean inner
  product on $\mathbb{R}^{n}$ and nothing more. The general theory of inner
  product spaces — abstract inner products, orthonormal bases, Gram-Schmidt,
  orthogonal projection and orthogonal complements of arbitrary subspaces — is
  planned for a page of this library that comes **earlier in the plan order** and
  is not yet built. No item on this page claims anything about abstract inner
  product spaces, and no item on this page introduces the general notion.

- **The standard basis and coordinates.** For $i < n$ the standard unit vector
  $e_i \in \mathbb{R}^{n}$ has $e_i(i) = 1$ and $e_i(j) = 0$ for $j \ne i$
  ([[lem-standard-basis-of-f-n]]). Then $\langle x, e_i\rangle = x_i$: the list
  $k \mapsto x_k (e_i)_k$ vanishes except at $k = i$, where its value is $x_i$,
  and a list vanishing off one index sums to its value there
  ([[lem-finite-sum-laws]] clause 3, splitting the range at $i$). So the
  coordinates of $x$ are recovered by testing against the standard basis, which
  is the form used repeatedly below.

- **Powers here are integer powers.** $x_k^{2}$ means the integer power of
  [[def-integer-power]], and $\lVert x\rVert_2^{2} = \langle x,x\rangle$ by
  [[thm-of-square-roots]] and [[lem-power-laws]].
````

### `def-finite-sum`

````markdown
---
id: def-finite-sum
kind: definition
title: "Finite sums and finite products, by recursion"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [thm-recursion, thm-induction-principle, def-ordered-field, def-natural-numbers, def-nat-addition, def-field, def-complete-ordered-field, lem-of-naturals-positive, lem-of-q-embeds]
justified_by: []
aliases: [def-finite-product]
landmark: false
verification:
  precheck: n/a
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-07-26
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-25
sources:
  scraped: []
  references:
    - title: "J. Aspnes, Summation Notation"
      url: "https://www.cs.yale.edu/homes/aspnes/pinewiki/SummationNotation.html"
    - title: "M. Fochler, Recursive sums, products, and powers"
      url: "https://people.math.binghamton.edu/mfochler/bu-mfx/bu-math-arv/math-330-arv/math-330-2019-08/html/lec-notes/bu-ln-330-m330-solns-2019-12-03.pdf"
    - title: "Empty sum (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Empty_sum"
    - title: "T. Tao, Analysis I, 3rd ed., §7.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Definition

Throughout this page $\mathbb{R}$ is the complete ordered field
([[def-complete-ordered-field]]), in particular an ordered field
([[def-ordered-field]]) and a field ([[def-field]]), and $\mathbb{N}$ is the set
of natural numbers ([[def-natural-numbers]]) with successor $\sigma(n) = n + 1$
([[def-nat-addition]]).

Let $a : \mathbb{N} \to \mathbb{R}$ be a sequence of reals, written $a_k$ for
$a(k)$. **Finite sums and finite products of $a$ are defined by recursion on the
upper index**, which is legitimate because of the recursion theorem
([[thm-recursion]]). That theorem produces a function of one variable, so the
running index has to be carried along inside the value: applying it to the set
$A = \mathbb{N} \times \mathbb{R}$, the starting element $(0, 0)$ and the function
$f(n, s) = (\sigma(n),\, s + a_n)$ gives a unique
$g : \mathbb{N} \to \mathbb{N} \times \mathbb{R}$ with

$$g(0) = (0, 0), \qquad g(\sigma(n)) = f(g(n)) \quad (n \in \mathbb{N}).$$

Write $g(n) = \big(\pi_1(g(n)),\, \Sigma_n\big)$ for its two coordinates.

**The first coordinate is the index itself, and that is a small induction, not an
observation** ([[thm-induction-principle]]). Indeed $\pi_1(g(0)) = 0$; and if
$\pi_1(g(n)) = n$, then
$g(\sigma(n)) = f\big(\pi_1(g(n)), \Sigma_n\big) = \big(\sigma(\pi_1(g(n))),\, \Sigma_n + a_{\pi_1(g(n))}\big) = \big(\sigma(n),\, \Sigma_n + a_n\big)$,
so $\pi_1(g(\sigma(n))) = \sigma(n)$. By induction $\pi_1(g(n)) = n$ for every
$n \in \mathbb{N}$. Only now may the second coordinate of the two displayed
clauses be read off, and doing so gives

$$\Sigma_0 = 0, \qquad \Sigma_{\sigma(n)} = \Sigma_n + a_n .$$

$\Sigma$ is moreover the **unique** function $\mathbb{N} \to \mathbb{R}$ with those
two properties: if $\Sigma'$ also has them then $n \mapsto (n, \Sigma'_n)$ satisfies
the two clauses defining $g$, hence equals $g$ by the uniqueness clause of
[[thm-recursion]], so $\Sigma' = \Sigma$.

We write $\sum_{k < n} a_k := \Sigma_n$. The same construction with starting
element $(0, 1)$ and $f(n, p) = (\sigma(n),\, p \cdot a_n)$, with the same
induction on the first coordinate and the same uniqueness argument, gives the
unique $\Pi : \mathbb{N} \to \mathbb{R}$ with

$$\Pi_0 = 1, \qquad \Pi_{\sigma(n)} = \Pi_n \cdot a_n ,$$

and we write $\prod_{k < n} a_k := \Pi_n$.

**Notation.** For $m, n \in \mathbb{N}$ we abbreviate

$$\sum_{k=0}^{n} a_k := \sum_{k < n+1} a_k, \qquad \prod_{k=0}^{n} a_k := \prod_{k < n+1} a_k,$$

and, for a general lower index $m$ with $m \le n + 1$, writing $d = n + 1 - m$
for the number of terms,

$$\sum_{k=m}^{n} a_k := \sum_{j < d} a_{m+j}, \qquad \prod_{k=m}^{n} a_k := \prod_{j < d} a_{m+j} .$$

When $m = n + 1$ we have $d = 0$ and the sum is **empty**, with value $0$, while
the empty product has value $1$. In the same spirit $\sum_{k=0}^{-1} a_k$ is
notation for the empty sum $\Sigma_0 = 0$ and $\prod_{k=0}^{-1} a_k$ for the
empty product $\Pi_0 = 1$; the index $-1$ never occurs as an element of
$\mathbb{N}$ and is only a way of writing "no terms".

Only finitely many values of $a$ enter $\sum_{k<n} a_k$, so the notation
$\sum_{k<n} a_k$ and $\prod_{k<n} a_k$ is also used for a list
$a_0, \dots, a_{n-1}$ of reals given without reference to any extension of the
list to all of $\mathbb{N}$: extend the list by $a_k = 0$ (respectively
$a_k = 1$) for $k \ge n$ and apply the definition above.

## Remarks

- **Why recursion and not "$a_0 + a_1 + \cdots + a_{n-1}$".** The dots are not a
  definition: they presuppose that the displayed pattern determines a value for
  every $n$, which is exactly what the recursion theorem
  ([[thm-recursion]]) supplies, and its uniqueness clause is what makes
  $\sum_{k<n} a_k$ a single well-determined real rather than a family of choices.
  Associativity and commutativity of addition are *not* used in the definition;
  they are used in the laws proved from it ([[lem-finite-sum-laws]]).
- **Naturals and rationals inside $\mathbb{R}$ (a convention used on the whole
  page).** A natural number $n$ and a rational number $r$ are not literally
  elements of $\mathbb{R}$: they enter $\mathbb{R}$ through the canonical
  embedding $\iota : \mathbb{Q} \to \mathbb{R}$, which is an injective,
  order-preserving field homomorphism ([[lem-of-q-embeds]]), restricting on
  positive naturals to $n \mapsto n \cdot 1_{\mathbb{R}} = 1_\mathbb{R} + \cdots + 1_\mathbb{R}$
  ([[lem-of-naturals-positive]]). Following ordinary practice, and only where no
  confusion is possible, we write $n$ for $\iota(n)$ and $r$ for $\iota(r)$; so,
  for instance, $\frac{1}{n}\sum_{k<n} a_k$ means
  $\iota(n)^{-1} \cdot \sum_{k<n} a_k$, which makes sense because
  $\iota(n) > 0$ for $n \ge 1$. Exponents are the one place where the
  identification is deliberately NOT made: in $a^n$ and $a^r$ the exponent stays
  a natural, an integer or a rational ([[def-integer-power]],
  [[def-rational-power]]), never a real.
- The two indexings are related by $\sum_{k=0}^{n} a_k = \sum_{k < n+1} a_k$, so
  a statement proved for one is available for the other. Sums over $k < n$ are
  the primitive form here because $\Sigma_0$, the empty sum, is then the base
  case of every induction, and no index outside $\mathbb{N}$ is ever needed.
````

### `def-function-space`

````markdown
---
id: def-function-space
kind: definition
title: "The vector space $F^{X}$ of all functions $X \\to F$ with pointwise operations, and $F^{n}$ as the case $X = n = \\{0, 1, \\dots, n-1\\}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-vector-space, def-field, def-binary-operation, def-natural-numbers, lem-nat-order-is-membership]
justified_by: []
aliases: [def-coordinate-space, def-tuple-space]
landmark: true
short: "$F^{X}$, $F^{n}$"
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Function space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Function_space"
    - title: "Examples of vector spaces (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Examples_of_vector_spaces"
    - title: "S. Axler, Linear Algebra Done Right, 4th ed. (free PDF, CC BY-NC)"
      url: "https://linear.axler.net/LADR4e.pdf"
pipeline_run: null
---

## Definition

Let $F$ be a field ([[def-field]]) and let $X$ be any set. Write

$$F^{X} \;:=\; \{\, f \;:\; f \text{ is a function } X \to F \,\},$$

and for $f \in F^{X}$ write $f(x)$ for its value at $x \in X$. Two elements of
$F^{X}$ are equal exactly when they agree at every point of $X$. Define

$$(f + g)(x) \;:=\; f(x) + g(x), \qquad (\lambda f)(x) \;:=\; \lambda\, f(x), \qquad 0_{F^{X}}(x) \;:=\; 0_F,$$

for $f, g \in F^{X}$, $\lambda \in F$ and $x \in X$, the operations on the right
being those of $F$. These are the **pointwise** operations.

**These rules really are the required data.** For $f, g \in F^{X}$ the assignment
$x \mapsto f(x) + g(x)$ is a function $X \to F$, so $+$ is a binary operation
$F^{X} \times F^{X} \to F^{X}$ ([[def-binary-operation]]); for $\lambda \in F$ and
$f \in F^{X}$ the assignment $x \mapsto \lambda f(x)$ is a function $X \to F$, so
scalar multiplication is a map $F \times F^{X} \to F^{X}$; and $0_{F^{X}}$, the
constant function at $0_F$, is an element of $F^{X}$.

**$F^{X}$ is a vector space over $F$** ([[def-vector-space]]). Each axiom is an
equation between elements of $F^{X}$, hence holds exactly when it holds at every
$x \in X$ after evaluation, and there it is the corresponding field axiom applied
to the values $f(x), g(x), \lambda, \mu$:

- associativity and commutativity of $+$, and $f + 0_{F^{X}} = f$, come from the
  same laws for $+$ in $F$; the additive inverse of $f$ is $x \mapsto -f(x)$,
  which lies in $F^{X}$ and satisfies $f + (-f) = 0_{F^{X}}$ pointwise. This is
  axiom (V1);
- $\bigl(\lambda(f+g)\bigr)(x) = \lambda(f(x)+g(x)) = \lambda f(x) + \lambda g(x)$
  is (V2), by distributivity in $F$;
- $\bigl((\lambda+\mu)f\bigr)(x) = (\lambda+\mu)f(x) = \lambda f(x) + \mu f(x)$ is
  (V3), by distributivity in $F$;
- $\bigl((\lambda\mu)f\bigr)(x) = (\lambda\mu)f(x) = \lambda(\mu f(x))$ is (V4),
  by associativity of multiplication in $F$;
- $(1_F f)(x) = 1_F f(x) = f(x)$ is (V5), by the multiplicative identity law
  in $F$.

### The case $X = n$

A natural number is a von Neumann natural ([[def-natural-numbers]]), that is a
set, and $n = \{\, m \in \mathbb{N} : m < n \,\} = \{0, 1, \dots, n-1\}$
([[lem-nat-order-is-membership]]). Taking $X = n$ therefore gives

$$F^{n} \;=\; \{\, x \;:\; x \text{ is a function } n \to F \,\},$$

whose elements are written $x = (x_0, x_1, \dots, x_{n-1})$ with $x_i := x(i)$ for
$i < n$. **The coordinates are indexed from $0$**, because $0 \in n$ whenever
$n \ne 0$ and $n \notin n$ always. The operations read

$$(x + y)_i = x_i + y_i, \qquad (\lambda x)_i = \lambda x_i \qquad (i < n),$$

and the zero of $F^{n}$ is the tuple all of whose coordinates are $0_F$.

**The two boundary cases.** $\mathbb{N}$ contains $0$, so $n = 0$ is a genuine
case. Since $0 = \varnothing$, the set $F^{0} = F^{\varnothing}$ has exactly one
element, the empty function; that element is $0_{F^{0}}$, so $F^{0}$ is the
**zero space** $\{0_{F^{0}}\}$, not the empty set. For $n = 1$ we have
$1 = \{0\}$, and the map $F^{1} \to F$ sending $x$ to its single coordinate $x_0$
is a bijection satisfying $(x+y)_0 = x_0 + y_0$ and $(\lambda x)_0 = \lambda x_0$;
we use it to read $F^{1}$ as $F$ where convenient. (No general notion of
isomorphism of vector spaces is available on this page, and none is claimed here:
what is asserted is exactly the displayed bijection and the two displayed
equations.)

## Remarks

- **The same set $F^{X}$ also carries a ring structure, and the two must not be
  conflated.** For a ring $R$ and a set $X$, [[def-ring-of-functions]] equips the
  set $R^{X}$ of all functions $X \to R$ with pointwise addition and pointwise
  multiplication. Taking $R = F$, the underlying set is literally the same set
  $F^{X}$ as here, and **the addition is literally the same operation**,
  $(f+g)(x) = f(x) + g(x)$ in both. What differs is the second operation:

  | | second operation | type |
  |---|---|---|
  | ring of functions | $(fg)(x) = f(x)\,g(x)$ | $F^{X} \times F^{X} \to F^{X}$ |
  | vector space (here) | $(\lambda f)(x) = \lambda\, f(x)$ | $F \times F^{X} \to F^{X}$ |

  Neither is a special case of the other, since they do not even have the same
  domain: one multiplies two functions, the other multiplies a function by a
  scalar. They agree in the following sense, and this is the whole of the
  relation between them: for $\lambda \in F$ let $c_\lambda \in F^{X}$ be the
  constant function at $\lambda$; then $\lambda f$ and the ring product
  $c_\lambda f$ have the same value $\lambda f(x)$ at every $x$, so they are
  equal. Both structures are present on $F^{X}$ at once, and nothing on this page
  uses the ring product.

- **Why $F^{n}$ is defined this way rather than as "$n$-tuples".** An $n$-tuple is
  already a function on an index set, and taking that index set to be the natural
  number $n$ itself makes the coordinates, the finite sums of
  [[def-monoid-finite-product]] and the induction arguments below all run over the
  same object. The price is that every index starts at $0$, and that $F^{0}$ is a
  one-element space; both are recorded above so that no statement on this page or
  its companion is quietly restricted to $n \ge 1$.

- **$X$ is arbitrary.** Nothing above assumes $X$ finite, countable, or nonempty.
  The case $X = \mathbb{N}$ gives the space of all families of scalars indexed by
  $\mathbb{N}$, and the case $X = m \times n$ gives the matrices of
  [[def-matrix-space]].
````

### `def-injection-surjection-bijection`

````markdown
---
id: def-injection-surjection-bijection
kind: definition
title: "Injection, surjection, bijection"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-function, def-image-and-preimage-under-a-relation]
justified_by: []
aliases: [def-injective, def-surjective, def-bijective]
landmark: false
short: "injective, surjective, bijective"
verification:
  precheck: n/a
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-08-06
    scope: published-rehoming-repair
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "J. K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
    - title: "J. Lebl, Basic Analysis: Introduction to Real Analysis, basic set theory"
      url: "https://www.jirka.org/ra/html/sec_basicset.html"
    - title: "Bijection, injection and surjection (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Bijection,_injection_and_surjection"
    - title: "T. Tao, Analysis I, 3rd ed., §3.3 (Functions)"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Definition

Let $A$ and $B$ be sets and let $f : A \to B$ be a function ([[def-function]]).

- $f$ is **injective** (one-to-one) if $f(x) = f(y)$ implies $x = y$, for all
  $x, y \in A$.
- $f$ is **surjective** (onto) if for every $b \in B$ there is some $x \in A$
  with $f(x) = b$; equivalently, the image $f[A] := \{ f(x) : x \in A \}$ equals
  $B$.
- $f$ is **bijective** if it is both injective and surjective.

For $S \subseteq A$ we write $f[S] = \{ f(x) : x \in S \}$ for the image of $S$,
and for $T \subseteq B$ we write $f^{-1}[T] = \{ x \in A : f(x) \in T \}$ for the
preimage of $T$; these are the image and preimage of a set under $f$ read as a
relation ([[def-image-and-preimage-under-a-relation]]).

## Remarks

- **Composition.** If $f : A \to B$ and $g : B \to C$ are both injective then so
  is $g \circ f$, since $g(f(x)) = g(f(y))$ forces $f(x) = f(y)$ and then
  $x = y$; if both are surjective then so is $g \circ f$, since any $c \in C$ is
  $g(b)$ for some $b \in B$ and that $b$ is $f(a)$ for some $a \in A$. Hence a
  composition of bijections is a bijection. These verifications, together with the
  two partial converses, are
  [[prop-composition-preserves-injectivity-surjectivity-and-bijectivity]].

- **Inverses.** $f : A \to B$ is bijective exactly when there is a function
  $f^{-1} : B \to A$ with $f^{-1}(f(x)) = x$ for all $x \in A$ and
  $f(f^{-1}(b)) = b$ for all $b \in B$; that two-sided inverse is unique, and it
  is itself a bijection. Injectivity alone gives a bijection from $A$ onto the
  image $f[A]$, and hence an inverse defined on $f[A]$ only. No choice principle
  is involved: the value $f^{-1}(b)$ is the *unique* $x$ with $f(x) = b$, so it
  is determined rather than selected. The full statement, with the uniqueness of the
  two-sided inverse, is
  [[thm-a-function-is-a-bijection-exactly-when-it-has-a-two-sided-inverse]]; the
  corresponding statement for an arbitrary surjection is not available at this point
  in the reading order, because a right inverse for every surjection is equivalent
  to the Axiom of Choice.

- **What this item does and does not do.** A function $A \to B$ is a set of ordered
  pairs, single valued and total on $A$ ([[def-function]]); ordered pairs, Cartesian
  products, images and preimages are fixed by [[def-ordered-pair]],
  [[def-cartesian-product]] and [[def-image-and-preimage-under-a-relation]]. This
  item only fixes the three adjectives and the notation used for them. Nothing here
  is proved.
````

### `def-linear-combination-and-span`

````markdown
---
id: def-linear-combination-and-span
kind: definition
title: "Linear combination of a finite list, and the span $\\operatorname{span}(S)$ as the smallest linear subspace containing $S$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-vector-space, def-linear-subspace, lem-intersection-of-linear-subspaces, def-monoid-finite-product, def-semigroup-and-monoid, def-group, def-natural-numbers, lem-nat-order-is-membership, def-field]
justified_by: []
aliases: [def-span, def-linear-combination, def-spanning-set]
landmark: true
short: "linear combination; $\\operatorname{span}(S)$"
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Linear span (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Linear_span"
    - title: "Linear combination (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Linear_combination"
    - title: "S. Axler, Linear Algebra Done Right, 4th ed. (free PDF, CC BY-NC)"
      url: "https://linear.axler.net/LADR4e.pdf"
pipeline_run: null
---

## Definition

Let $V$ be a vector space over a field $F$ ([[def-vector-space]]).

### Finite sums of vectors

By axiom (V1) the triple $(V, +, 0_V)$ is an abelian group ([[def-group]]), hence
in particular a commutative monoid ([[def-semigroup-and-monoid]]). So the finite
products of [[def-monoid-finite-product]] are available in it, and we write them
**additively**: for $n \in \mathbb{N}$ and a finite list $u : n \to V$, that is a
function on the von Neumann natural $n = \{0, \dots, n-1\}$
([[def-natural-numbers]], [[lem-nat-order-is-membership]]),

$$\sum_{i<n} u_i \;:=\; \prod_{i<n} u_i \quad \text{computed in } (V,+,0_V),$$

so that $\sum_{i<0} u_i = 0_V$ and $\sum_{i<\sigma(n)} u_i = \bigl(\sum_{i<n} u_i\bigr) + u_n$,
and the value depends only on $u_0, \dots, u_{n-1}$.

### Linear combinations

A **linear combination in $V$** is a vector of the form

$$\sum_{i<n} \lambda_i v_i$$

where $n \in \mathbb{N}$, $\lambda : n \to F$ is a finite list of scalars and
$v : n \to V$ is a finite list of vectors; the sum is the finite sum just
described, of the list $i \mapsto \lambda_i v_i$. For $S \subseteq V$, a vector
$w \in V$ is a **linear combination of elements of $S$** when there are
$n \in \mathbb{N}$, $\lambda : n \to F$ and $v : n \to S$ with
$w = \sum_{i<n} \lambda_i v_i$.

**The empty case is a real case.** $\mathbb{N}$ contains $0$
([[def-natural-numbers]]), and at $n = 0$ the sum is the empty sum, which is
$0_V$. So $0_V$ is a linear combination of elements of every subset of $V$,
including $S = \varnothing$. The lists are indexed from $0$, so a linear
combination of length $n$ is $\lambda_0 v_0 + \dots + \lambda_{n-1}v_{n-1}$; no
statement here is restricted to $n \ge 1$.

### The span

Let $S \subseteq V$. The set of linear subspaces of $V$ containing $S$ is
nonempty, since $V$ itself is one, so its intersection is a linear subspace of
$V$ by [[lem-intersection-of-linear-subspaces]]. That intersection is the **span
of $S$**,

$$\operatorname{span}(S) \;:=\; \bigcap \{\, W \;:\; W \text{ is a linear subspace of } V \text{ and } S \subseteq W \,\} .$$

It contains $S$, being an intersection of sets each of which contains $S$, and it
is contained in every linear subspace of $V$ that contains $S$. So it is the
**smallest** linear subspace of $V$ containing $S$, and those two properties
determine it uniquely: if $W$ and $W'$ both contain $S$ and are each contained in
every linear subspace containing $S$, then each is contained in the other. This
is what licenses the definite article.

A subset $S \subseteq V$ **spans** $V$, or is a **spanning set** of $V$, when
$\operatorname{span}(S) = V$.

## Remarks

- **The definition is the one already used for subgroups.**
  [[def-generated-subgroup]] defines $\langle S \rangle$ as the intersection of
  all subgroups containing $S$, licensed by
  [[lem-intersection-of-subgroups]]. Its Remarks also record a description from
  inside, as a set of products, proved there only for a single generator
  ([[lem-cyclic-subgroup-is-the-set-of-powers]]) with the general case deferred
  to a later page. The span is defined here in exactly that outside shape, and
  the identification from inside, that $\operatorname{span}(S)$ is precisely the
  set of linear combinations of elements of $S$, is proved in full as
  [[lem-span-is-the-set-of-linear-combinations]]. In particular
  $\operatorname{span}(\varnothing) = \{0_V\}$ is proved there, as a consequence
  of the definition, and is not stipulated here.

- **Why the finite sum is [[def-monoid-finite-product]] and not
  [[def-finite-sum]].** The latter is stated for sequences into the complete
  ordered field, so it cannot carry a sum of vectors in an arbitrary vector space
  over an arbitrary field. The monoid finite product is defined by recursion in
  any monoid, its empty value is the identity, and
  [[thm-generalised-associativity]] supplies the splitting, regrouping and
  reordering laws for it. Reading it additively in $(V,+,0_V)$ costs nothing and
  is the only sum of vectors this page uses.

- **A linear combination is a value, not an expression.** Two different lists may
  produce the same vector, and nothing above asserts otherwise. Repetitions are
  allowed in the list $v$, and so are coefficients equal to $0_F$; asking when a
  vector is a linear combination of a set in only one way is the question of
  linear independence, which belongs to a later page and is not raised here.
````

### `def-linear-independence`

````markdown
---
id: def-linear-independence
kind: definition
title: "Linear independence: a finite list $v : n \\to V$ is independent when $\\sum_{i<n} \\lambda_i v_i = 0_V$ forces every $\\lambda_i = 0_F$, and a subset $S \\subseteq V$ is independent when every injective finite list into $S$ is independent"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-vector-space, def-field, lem-vector-space-elementary-consequences, def-linear-combination-and-span, def-monoid-finite-product, def-natural-numbers, lem-nat-order-is-membership, def-injection-surjection-bijection]
justified_by: []
aliases: [def-linearly-independent, def-linear-dependence]
landmark: true
short: "linearly independent list; independent subset"
verification:
  audited: 2026-07-28
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Linear independence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Linear_independence"
    - title: "S. Axler, Linear Algebra Done Right, 4th ed., Ch. 2"
      url: "https://linear.axler.net/"
    - title: "Interactive Linear Algebra: Linear Independence"
      url: "https://textbooks.math.gatech.edu/ila/linear-independence.html"
    - title: "Cambridge University Press excerpt: Vector spaces and bases"
      url: "https://assets.cambridge.org/97810092/43902/excerpt/9781009243902_excerpt.pdf"
pipeline_run: null
---

## Definition

Let $V$ be a vector space over a field $F$ ([[def-vector-space]]). As in
[[def-linear-combination-and-span]], a **finite list** of vectors is a function
$v : n \to V$ on a von Neumann natural $n = \{0, \dots, n-1\}$
([[def-natural-numbers]], [[lem-nat-order-is-membership]]), written
$v_i := v(i)$, and

$$\sum_{i<n} \lambda_i v_i$$

is the finite sum of [[def-monoid-finite-product]] read additively in the abelian
group $(V,+,0_V)$, applied to the list $i \mapsto \lambda_i v_i$. No second notion
of finite sum is introduced here.

### Independence of a list

A finite list $v : n \to V$ is **linearly independent** when, for every list of
scalars $\lambda : n \to F$,

$$\sum_{i<n} \lambda_i v_i = 0_V \quad \Longrightarrow \quad \lambda_i = 0_F \text{ for every } i < n,$$

and **linearly dependent** otherwise, that is, when some $\lambda : n \to F$ has
$\sum_{i<n}\lambda_i v_i = 0_V$ while $\lambda_j \ne 0_F$ for at least one
$j < n$. Such a $\lambda$ is called a **witness** to the dependence of $v$.

### Independence of a subset

A subset $S \subseteq V$ is **linearly independent** when **every injective**
finite list $v : n \to S$ ([[def-injection-surjection-bijection]]) is linearly
independent, and **linearly dependent** otherwise, that is, when some injective
finite list into $S$ is linearly dependent.

**The injectivity clause is not decoration.** A linear combination in
[[def-linear-combination-and-span]] is indexed by an arbitrary list $v : n \to S$,
which is **not** required to be injective. If the definition above quantified
over all such lists, then for any $w \in S$ the list $v : 2 \to S$ with
$v_0 = v_1 = w$ and the scalars $\lambda_0 = 1_F$, $\lambda_1 = -1_F$ would give

$$\sum_{i<2}\lambda_i v_i = (0_V + 1_F w) + (-1_F)w = w + (-w) = 0_V$$

with $\lambda_0 = 1_F \ne 0_F$ ([[def-field]],
[[lem-vector-space-elementary-consequences]]), so **every** nonempty subset of
$V$ would be dependent and the notion would be empty. Quantifying over injective
lists is what makes the subset notion the intended one. It costs nothing for
lists: [[lem-independent-list-is-injective]] shows that the vanishing condition
above already forces a list to be injective, so no injectivity hypothesis has to
be carried alongside independence of a list.

### The boundary cases are genuine cases

$\mathbb{N}$ contains $0$ ([[def-natural-numbers]]), so both of the following are
instances of the definitions and neither is a convention.

- **The empty list is independent.** For $n = 0$ the only list of scalars is the
  empty one, and the condition "$\lambda_i = 0_F$ for every $i < 0$" holds
  vacuously.
- **$\varnothing \subseteq V$ is independent.** The only function $v : n \to
  \varnothing$ is the empty one, with $n = 0$, and it is independent by the
  previous point.
- **$\{0_V\}$ is dependent.** The list $v : 1 \to \{0_V\}$ with $v_0 = 0_V$ is
  injective, and taking $\lambda_0 = 1_F$ gives
  $\sum_{i<1}\lambda_i v_i = 0_V + 1_F 0_V = 0_V$ by the recursion of
  [[def-monoid-finite-product]] and $\lambda 0_V = 0_V$
  ([[lem-vector-space-elementary-consequences]]), while $1_F \ne 0_F$ in a field
  ([[def-field]]). So $\{0_V\}$, and hence every subset of $V$ containing $0_V$,
  is linearly dependent.

## Remarks

- **Independence is relative to the field, and to the ambient vector space.** The
  scalars range over $F$, so a set of vectors independent over a subfield
  $K \subseteq F$ may be dependent over $F$; [[lem-restriction-of-scalars]] is
  what makes both readings available on one set, and the companion page uses the
  distinction for $\mathbb{R}$ over $\mathbb{Q}$. The ambient space matters only
  through its addition, its zero and its scalar multiplication, all of which a
  linear subspace inherits from $V$ ([[def-linear-subspace]]); the resulting
  agreement is recorded in [[def-linear-basis]].

- **Dependence is a property of a list together with a witness, but of a subset
  outright.** A dependent list carries an explicit vanishing combination with a
  nonzero coefficient. For a subset, the witness is an injective list drawn from
  it; which list that is, is not part of the statement that the set is dependent.
  [[lem-dependent-iff-a-vector-lies-in-the-span-of-the-others]] converts the
  existential into a statement with no lists in it at all.

- **Why the two notions are both kept.** Lists carry order, and an ordered list is
  what a coordinate system is
  ([[thm-unique-coordinates-with-respect-to-an-ordered-basis]]); subsets carry no
  order, and it is subsets that the Zorn argument of
  [[thm-every-independent-set-extends-to-a-basis]] runs over. Keeping both, and
  proving that they agree, is cheaper than translating at every use.
````

### `def-max-min`

````markdown
---
id: def-max-min
kind: definition
title: "Maximum and minimum of a set"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-complete-ordered-field, def-ordered-field]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-07-26
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-25
sources:
  scraped: []
  references:
    - title: "Maximum and minimum (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Maximum_and_minimum"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "David H. Ernst, An Introduction to Proof via Inquiry-Based Learning, Section 5.1"
      url: "https://math.libretexts.org/Bookshelves/Mathematical_Logic_and_Proof/An_Introduction_to_Proof_via_Inquiry-Based_Learning_%28Ernst%29/05%253A_New_Page/5.01%253A_New_Page"
pipeline_run: null
---

## Definition

Let $S \subseteq \mathbb{R}$ and $m \in \mathbb{R}$.

- $m$ is a **maximum** (or *greatest element*) of $S$ if $m \in S$ and $s \le m$
  for every $s \in S$.
- $m$ is a **minimum** (or *least element*) of $S$ if $m \in S$ and $m \le s$
  for every $s \in S$.

A set has at most one maximum: if $m_1$ and $m_2$ are both maxima then
$m_1 \in S$ gives $m_1 \le m_2$ and $m_2 \in S$ gives $m_2 \le m_1$, so
$m_1 = m_2$ by antisymmetry of the order, which is immediate from the trichotomy
axiom of an ordered field ([[def-ordered-field]], [[def-complete-ordered-field]]).
The same argument applies to minima, so we may write $\max S$ and $\min S$.

## Remarks

- A maximum is precisely an upper bound of $S$ ([[def-complete-ordered-field]])
  that happens to lie in $S$; a minimum is a lower bound of $S$
  ([[def-bounded-set]]) that lies in $S$. In particular a set with a maximum is
  bounded above and a set with a minimum is bounded below.
- The empty set has neither a maximum nor a minimum, because the requirement
  $m \in S$ cannot be met.
- The membership requirement $m \in S$ is exactly what separates a maximum from a
  supremum, and it is the theme of this page. A supremum is a bound on the set
  and is not asked to belong to it; a maximum is an element of the set. The two
  agree exactly when the supremum happens to be attained ([[lem-max-is-sup]]),
  and they genuinely differ in general ([[fs-sup-belongs-to-set]]).
- Every nonempty finite subset of $\mathbb{R}$ has both a maximum and a minimum
  ([[lem-finite-set-has-max]]), which is what licenses the notation
  $\max\{a_1, \dots, a_n\}$. Infinite sets need not: the failure of attainment is
  an infinitary phenomenon.
````

### `def-norm-and-normed-space`

````markdown
---
id: def-norm-and-normed-space
kind: definition
title: "A norm on a real vector space, the induced metric, and the dictionary with the metric axioms"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-vector-space, def-function-space, def-linear-map, def-metric-space, lem-metric-nonnegativity, def-metric-topology, lem-bounded-remetrisation, rem-metric-axiom-conventions, def-abs-value, lem-of-abs-value, lem-of-triangle-inequality, def-complete-ordered-field, lem-vector-space-elementary-consequences]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Norm (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Norm_(mathematics)"
    - title: "Normed vector space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Normed_vector_space"
    - title: "J. Demmel, MA221 Lecture 3: Vector Norms"
      url: "https://people.eecs.berkeley.edu/~demmel/ma221_Fall10/Lectures/Lecture_03.html"
    - title: "G. Zitelli, Math 641 Functional Analysis, Part I"
      url: "https://www.math.uci.edu/~gzitelli/pdf/641/641part1.pdf"
pipeline_run: null
---

## Definition

Throughout this page $\mathbb{R}$ is the complete ordered field
([[def-complete-ordered-field]]) constructed in this library, in particular a
field, so that "vector space" below always means vector space over $\mathbb{R}$
([[def-vector-space]]).

Let $V$ be a vector space over $\mathbb{R}$, with zero vector $0_V$. A **norm on
$V$** is a function $N : V \to \mathbb{R}$ such that for all $u, v \in V$ and all
$\lambda \in \mathbb{R}$:

- **(N1) Separation.** $N(v) = 0$ if and only if $v = 0_V$.
- **(N2) Absolute homogeneity.** $N(\lambda v) = |\lambda|\,N(v)$, the absolute
  value being that of [[def-abs-value]].
- **(N3) Triangle inequality.** $N(u + v) \le N(u) + N(v)$.

A **normed space** is a pair $(V, N)$ consisting of a vector space $V$ over
$\mathbb{R}$ and a norm $N$ on it. When only one norm is in play we write
$\lVert v\rVert$ for $N(v)$; when several are, the norm is always named.

**The values of a norm are real numbers.** The codomain is $\mathbb{R}$, so
$N(v)$ is an honest element of the complete ordered field and no infinite value
is permitted. This is the same convention [[rem-metric-axiom-conventions]]
records for metrics.

### Nonnegativity is a theorem, not an axiom

Many texts add a fourth condition $N(v) \ge 0$. It is redundant. Applying (N2)
with $\lambda = -1$ gives $N(-v) = |-1|\,N(v) = N(v)$ ([[lem-of-abs-value]],
[[lem-vector-space-elementary-consequences]] for $(-1)v = -v$), and then (N3)
with $u = v$ and $-v$ gives

$$0 \;=\; N(0_V) \;=\; N\bigl(v + (-v)\bigr) \;\le\; N(v) + N(-v) \;=\; N(v) + N(v),$$

where $N(0_V) = 0$ is (N1). So $N(v) + N(v) \ge 0$, and if $N(v) < 0$ then
$N(v) + N(v) < 0$ by addition of inequalities, which trichotomy forbids
([[def-complete-ordered-field]]). Hence $N(v) \ge 0$ for every $v \in V$.

**Consequently the verification of a candidate norm has three things to check and
not four**, exactly as the verification of a candidate metric has three and not
four ([[def-metric-space]], [[lem-metric-nonnegativity]]). No item in this
library assumes nonnegativity of a norm before the argument above.

### The induced metric

Let $N$ be a norm on $V$ and define

$$d_N(u,v) \;:=\; N(u - v) \qquad (u, v \in V),$$

where $u - v = u + (-v)$ ([[def-vector-space]]). **Then $d_N$ is a metric on
$V$** ([[def-metric-space]]), and the three axioms are the three conditions
above, in order:

- **(M1)** $d_N(u,v) = 0$ means $N(u-v) = 0$, which by (N1) says $u - v = 0_V$,
  that is $u = v$; and conversely $d_N(v,v) = N(0_V) = 0$.
- **(M2)** $d_N(v,u) = N(v-u) = N\bigl((-1)(u-v)\bigr) = |-1|\,N(u-v) = d_N(u,v)$,
  by (N2), [[lem-of-abs-value]] and $(-1)w = -w$
  ([[lem-vector-space-elementary-consequences]]).
- **(M3)** $d_N(u,w) = N\bigl((u-v) + (v-w)\bigr) \le N(u-v) + N(v-w) = d_N(u,v) + d_N(v,w)$,
  by (N3).

A normed space is therefore a metric space, and every notion defined for metric
spaces — open set ([[def-metric-topology]]), convergence, Cauchyness,
continuity, compactness — is available in it with no further definition. **This
library never introduces a second notion of any of them for normed spaces.**

### Two properties an arbitrary metric need not have

The metric $d_N$ satisfies, for all $u, v, w \in V$ and $\lambda \in \mathbb{R}$:

- **translation invariance**, $d_N(u + w, v + w) = N\bigl((u+w)-(v+w)\bigr) = N(u-v) = d_N(u,v)$;
- **absolute homogeneity**, $d_N(\lambda u, \lambda v) = N\bigl(\lambda(u-v)\bigr) = |\lambda|\,d_N(u,v)$, by (N2).

**Not every metric on a vector space arises from a norm**, and homogeneity is
what fails. The published bounded remetrisation [[lem-bounded-remetrisation]]
replaces a metric $d$ by $d' = \min\{d, 1\}$, a metric with the same topology
whose values never exceed $1$; on a vector space $V$ containing a vector $v$ with
$d(v, 0_V) > 0$ this $d'$ cannot be $d_M$ for any norm $M$, since absolute
homogeneity would force $d'(\lambda v, 0_V) = |\lambda|\,d'(v, 0_V)$, which is
unbounded in $\lambda$, while $d'$ is bounded by $1$. So the passage from norms
to metrics is not reversible, and a statement about a metric on a vector space is
strictly weaker than the corresponding statement about a norm.

## Remarks

- **Why (N1) is stated as an equivalence.** The direction $N(0_V) = 0$ is forced
  by (N2) with $\lambda = 0$, since $0\,v = 0_V$
  ([[lem-vector-space-elementary-consequences]]) gives $N(0_V) = |0|\,N(v) = 0$.
  Only the direction "$N(v) = 0$ implies $v = 0_V$" is a genuine assumption, and
  dropping it gives what is usually called a seminorm, a notion this library does
  not use. The situation is exactly the one [[rem-metric-axiom-conventions]]
  describes for (M1) and the pseudometric.

- **The zero space carries exactly one norm.** If $V = \{0_V\}$ then the only
  function $V \to \mathbb{R}$ satisfying (N1) is the one with value $0$, and it
  satisfies (N2) and (N3) trivially. In particular $\mathbb{R}^{0}$, the function
  space on the empty index set ([[def-function-space]]), is a normed space,
  although the metrics of the published metric theory on $\mathbb{R}^n$ are
  defined only for $n \ge 1$.

- **What is not defined here.** This item does not define linear maps; their
  published definition is [[def-linear-map]]. It also does not define operator
  norms, dual spaces, or abstract inner product spaces.
  [[rem-rn-conventions-and-scope]] records the remaining scope boundaries and
  what each later development would license.
````

### `def-p-norms-on-rn`

````markdown
---
id: def-p-norms-on-rn
kind: definition
title: "The $p$-norms $\\lVert x\\rVert_p$ for rational $p \\ge 1$, and $\\lVert x\\rVert_\\infty$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-norm-and-normed-space, def-euclidean-inner-product, def-rational-power, lem-rational-power-well-defined, lem-rational-power-laws, lem-rational-power-monotone, rem-real-exponents-deferred, thm-minkowski-finite, def-finite-sum, lem-finite-sum-laws, lem-finite-set-has-max, def-max-min, lem-metrics-on-rn, def-abs-value, lem-of-abs-value, thm-of-square-roots]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Lp space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Lp_space"
    - title: "Norm (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Norm_(mathematics)"
    - title: "J. Demmel, MA221 Lecture 3: Vector Norms"
      url: "https://people.eecs.berkeley.edu/~demmel/ma221_Fall10/Lectures/Lecture_03.html"
    - title: "G. Zitelli, Math 641 Functional Analysis, Part I"
      url: "https://www.math.uci.edu/~gzitelli/pdf/641/641part1.pdf"
pipeline_run: null
---

## Definition

Let $n \in \mathbb{N}$ and let $\mathbb{R}^{n}$ be the function space of
[[def-euclidean-inner-product]], with $x_k := x(k)$ for $k < n$.

### The $p$-norm, for a rational exponent $p \ge 1$

Let $p \in \mathbb{Q}$ with $p \ge 1$. For $x \in \mathbb{R}^{n}$ put

$$\lVert x\rVert_p \;:=\; \Bigl(\sum_{k<n} |x_k|^{p}\Bigr)^{1/p},$$

where $|\cdot|$ is the absolute value ([[def-abs-value]]), the sum is the finite
sum of [[def-finite-sum]], and both powers are the **rational** powers of
[[def-rational-power]].

**Every power written here is defined.** Each base $|x_k|$ is a nonnegative real
and $p > 0$, so $|x_k|^{p}$ is given by [[def-rational-power]] for $|x_k| > 0$
and by its supplementary clause $0^{p} = 0$ for $|x_k| = 0$; the sum of these
nonnegative terms is nonnegative ([[lem-finite-sum-laws]] clause 4), and
$1/p$ is a positive rational, so the outer power is defined for the same two
reasons. The value does not depend on which representative of $p$ or of $1/p$ is
used ([[lem-rational-power-well-defined]]).

**The exponent is a rational, and that is not a matter of taste.**
[[def-rational-power]] supplies $a^{r}$ for a nonnegative base and a **rational**
exponent only; real exponents do not exist at this point in the reading order,
and [[rem-real-exponents-deferred]] records exactly why. This is also why the
published Minkowski inequality [[thm-minkowski-finite]], which is what makes the
triangle inequality work below, is itself stated for rational $p \ge 1$. **No
statement on this page is written for $p$ ranging over a real interval.**

### The maximum norm

For $n \ge 1$ and $x \in \mathbb{R}^{n}$ put

$$\lVert x\rVert_\infty \;:=\; \max\{\, |x_k| \;:\; k < n \,\},$$

the maximum of a nonempty finite set of reals, which exists and is one of its
elements ([[lem-finite-set-has-max]], [[def-max-min]]).

**The hypothesis $n \ge 1$ is required and propagates.** At $n = 0$ the set
$\{|x_k| : k<n\}$ is empty and has no maximum ([[def-max-min]]). This is the same
restriction the published [[lem-metrics-on-rn]] carries, for the same reason, and
**every statement on this page that mentions $\lVert\cdot\rVert_\infty$ inherits
it**. The $p$-norms for rational $p \ge 1$ carry no such restriction: at $n = 0$
each is the empty sum raised to a positive rational power, hence $0$.

### The three cases the rest of the page uses

- $\lVert x\rVert_1 = \sum_{k<n}|x_k|$, since $t^{1} = t$ for $t \ge 0$
  ([[lem-rational-power-laws]], and $0^{1} = 0$ by the supplementary clause).
- $\lVert x\rVert_2 = \bigl(\sum_{k<n}|x_k|^{2}\bigr)^{1/2} = \sqrt{\sum_{k<n}x_k^{2}}$,
  which is exactly the Euclidean norm of [[def-euclidean-inner-product]]: the
  exponent $2$ agrees with the integer power, so $|x_k|^{2} = x_k^{2}$
  ([[lem-of-abs-value]]), and $t^{1/2}$ is the unique nonnegative square root of
  $t$, which is $\sqrt{t}$ ([[def-rational-power]], [[thm-of-square-roots]]).
  **The two notations denote the same function and no second Euclidean norm is
  introduced.**
- $\lVert x\rVert_\infty$ as above, for $n \ge 1$.

That each of these is a norm in the sense of [[def-norm-and-normed-space]], and
that the metrics they induce are exactly the published $d_1$, $d_2$ and
$d_\infty$ of [[lem-metrics-on-rn]], is
[[lem-p-norms-are-norms-and-induce-the-published-metrics]]; it is proved there
and is not assumed here.

## Remarks

- **Why $p \ge 1$.** The triangle inequality for $\lVert\cdot\rVert_p$ is
  Minkowski's inequality, and [[thm-minkowski-finite]] is stated for rational
  $p \ge 1$. For $0 < p < 1$ the displayed expression is still defined but is not
  a norm on $\mathbb{R}^{n}$ for $n \ge 2$; nothing on this page asserts anything
  about that range, and the expression is never written with such an exponent.

- **Monotonicity in the base is what makes the comparisons below work.** For a
  fixed positive rational $r$ the map $a \mapsto a^{r}$ is strictly increasing on
  the positive reals ([[lem-rational-power-monotone]] clause 2), so an inequality
  between nonnegative sums passes through the outer power. That is the only
  property of rational powers used in the comparison chain of
  [[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]].

- **The subscript $\infty$ is a name, not a number.** No arithmetic is performed
  with it, and $\lVert\cdot\rVert_\infty$ is not $\lVert\cdot\rVert_p$ for any
  exponent; it is a separately defined function that happens to sit at the end of
  the family. This is the same refusal to extend $\mathbb{R}$ silently that
  [[def-interval]] records for the interval notation.
````

### `def-series-of-vectors-and-rearrangement`

````markdown
---
id: def-series-of-vectors-and-rearrangement
kind: definition
title: "Series of vectors in $\\mathbb{R}^n$, absolute convergence, rearrangement, and the set of rearrangement sums"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-euclidean-inner-product, def-p-norms-on-rn, lem-p-norms-are-norms-and-induce-the-published-metrics, thm-componentwise-convergence-and-completeness, thm-all-norms-on-rn-are-equivalent, def-equivalent-norms, def-metric-convergence, def-series, def-absolute-and-conditional-convergence, def-rearrangement-and-unconditional-convergence, lem-standard-basis-of-f-n, def-linear-combination-and-span, def-finite-sum, lem-finite-sum-laws, def-sequence, def-injection-surjection-bijection, def-vector-space, lem-metrics-on-rn, lem-metric-limits-unique, def-isometry-and-metric-embedding, def-norm-and-normed-space]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Series (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Series_(mathematics)"
    - title: "Absolute convergence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Absolute_convergence"
    - title: "T. Banakh, A Simple Inductive Proof of the Levy-Steinitz Theorem"
      url: "https://arxiv.org/abs/1711.04136"
pipeline_run: null
---

## Definition

Let $n \in \mathbb{N}$ with $n \ge 1$, so that $\mathbb{R}^{n}$ carries the
Euclidean metric $d_2$ ([[lem-metrics-on-rn]],
[[lem-p-norms-are-norms-and-induce-the-published-metrics]]). A **sequence of
vectors** is a function $x : \mathbb{N} \to \mathbb{R}^{n}$, written $(x_k)$ with
$x_k := x(k)$; as everywhere in this library $\mathbb{N}$ contains $0$ and a
sequence is indexed from $0$ ([[def-sequence]], [[def-metric-convergence]]).

### Partial sums and convergence

The **partial sums** of $(x_k)$ are

$$s_N \;:=\; \sum_{k<N} x_k \;\in\; \mathbb{R}^{n} \qquad (N \in \mathbb{N}),$$

the finite sum of the vector space $\mathbb{R}^{n}$
([[def-linear-combination-and-span]]), so $s_0 = 0$ and $s_{N+1} = s_N + x_N$.
**No third notion of finite sum is introduced**: by
[[lem-standard-basis-of-f-n]] clause 1 the vector sum is computed pointwise,
$(s_N)(j) = \sum_{k<N} x_k(j)$ for $j<n$, the right-hand side being the real
finite sum of [[def-finite-sum]].

The **series** $\sum x_k$ **converges to $s \in \mathbb{R}^{n}$** when
$s_N \to s$ in $(\mathbb{R}^{n}, d_2)$ ([[def-metric-convergence]]), and then $s$
is **the sum**, written $\sum_{k=0}^{\infty}x_k$. The symbol denotes a single
vector, because a sequence in a metric space has at most one limit
([[lem-metric-limits-unique]]). The series **diverges** when $(s_N)$ does not
converge.

### Absolute convergence

$\sum x_k$ **converges absolutely** when the real series
$\sum \lVert x_k\rVert_2$ converges ([[def-series]]); since
$\lVert x_k\rVert_2 \ge 0$ ([[def-norm-and-normed-space]]), this is a statement
about a series of nonnegative terms, exactly as in
[[def-absolute-and-conditional-convergence]].

**The choice of norm is immaterial.** If $N$ is any norm on $\mathbb{R}^{n}$ then
$c\lVert x_k\rVert_2 \le N(x_k) \le C\lVert x_k\rVert_2$ for fixed $c, C > 0$
([[thm-all-norms-on-rn-are-equivalent]], [[def-equivalent-norms]]), so
$\sum N(x_k)$ converges exactly when $\sum\lVert x_k\rVert_2$ does, both being
series of nonnegative terms. The notion defined above therefore depends on
$\mathbb{R}^{n}$ and not on the norm chosen to test it.

### Rearrangement and the set of rearrangement sums

Let $\sigma : \mathbb{N} \to \mathbb{N}$ be a bijection
([[def-injection-surjection-bijection]]). The **rearrangement of $\sum x_k$ along
$\sigma$** is the series $\sum x_{\sigma(k)}$ of the sequence
$k \mapsto x_{\sigma(k)}$, verbatim as in
[[def-rearrangement-and-unconditional-convergence]] one dimension down. The
**set of rearrangement sums** of $(x_k)$ is

$$\mathcal{S}(x) \;:=\; \Bigl\{\, s \in \mathbb{R}^{n} \;:\; \text{some rearrangement of } \sum x_k \text{ converges to } s \,\Bigr\}.$$

Taking $\sigma$ to be the identity shows that a convergent $\sum x_k$ has its own
sum in $\mathcal{S}(x)$, so $\mathcal{S}(x) \ne \varnothing$ for a convergent
series.

### Agreement with the one-dimensional theory

$\mathbb{R}^{1}$ is the set of functions $1 \to \mathbb{R}$ and is **not
literally** $\mathbb{R}$. The map $\theta : \mathbb{R} \to \mathbb{R}^{1}$ sending
$t$ to the function with value $t$ at $0$ is a bijection; it preserves addition
and scalar multiplication, since both are computed pointwise
([[def-vector-space]], [[lem-standard-basis-of-f-n]]), and
$d_2(\theta(s),\theta(t)) = |s-t|$, so it is an isometric bijection
([[def-isometry-and-metric-embedding]]). Under that identification, and for
$n = 1$:

- the partial sums above are the partial sums of [[def-series]];
- convergence and the sum are those of [[def-series]];
- absolute convergence is that of [[def-absolute-and-conditional-convergence]],
  since $\lVert\theta(t)\rVert_2 = |t|$;
- rearrangement is that of [[def-rearrangement-and-unconditional-convergence]];
- $\mathcal{S}(x)$ is the image under $\theta$ of the set of rearrangement sums
  that the published remark [[rem-rearrangement-in-higher-dimensions]] writes
  $\mathcal{S}(a)$.

**Every comparison on this page between $\mathbb{R}^{n}$ and the published
one-dimensional theory goes through this identification, and it is stated each
time.**

## Remarks

- **Where $n \ge 1$ comes from.** Convergence is tested with $d_2$, and
  [[lem-metrics-on-rn]] defines the metrics on $\mathbb{R}^{n}$ only for
  $n \ge 1$. The algebra above — partial sums, rearrangement, the set
  $\mathcal{S}(x)$ as a set of vectors — makes sense at $n = 0$ as well, but
  nothing on this page is asserted there.

- **Convergence is componentwise.** By
  [[thm-componentwise-convergence-and-completeness]] clause 1 and the pointwise
  formula for partial sums, $\sum x_k$ converges to $s$ if and only if the $n$
  real series $\sum (x_k)_j$ converge, with sums $s_j$. That is the form every
  proof below uses, and it is what reduces the vector theory to the published
  scalar theory rather than duplicating it.

- **Unconditional convergence is not defined here.** The one-dimensional notion is
  [[def-rearrangement-and-unconditional-convergence]], and over $\mathbb{R}$ it
  coincides with absolute convergence ([[cor-unconditional-iff-absolute-in-r]]).
  Whether that coincidence survives to $\mathbb{R}^{n}$ for $n \ge 2$ is not
  settled anywhere on this page, and nothing here asserts it in either direction.
  What **is** proved is that absolute convergence implies convergence of every
  rearrangement to the same sum ([[thm-absolute-convergence-in-rn]]).
````

### `def-vector-space`

````markdown
---
id: def-vector-space
kind: definition
title: "Vector space over a field"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-field, def-group, def-binary-operation, def-identity-element, def-invertible-element, lem-identity-unique, lem-inverse-unique]
justified_by: []
aliases: [def-vector, def-scalar-multiplication]
landmark: true
short: "vector space over $F$"
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Vector space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Vector_space"
    - title: "S. Axler, Linear Algebra Done Right, 4th ed., Ch. 1"
      url: "https://linear.axler.net/"
pipeline_run: null
---

## Definition

Let $F$ be a field ([[def-field]]), with additive identity $0_F$, multiplicative
identity $1_F$, and the field axioms as stated there. A **vector space over $F$**,
also called an **$F$-vector space**, consists of

- a set $V$, whose elements are called **vectors**;
- a binary operation $+ : V \times V \to V$ on $V$ ([[def-binary-operation]]),
  the **vector addition**;
- an element $0_V \in V$, the **zero vector**;
- a map $\cdot \,:\, F \times V \to V$, the **scalar multiplication**, written
  $\lambda v := \cdot(\lambda, v)$;

subject to the following axioms, in which $u, v \in V$ and $\lambda, \mu \in F$
are arbitrary.

- **(V1)** $(V, +, 0_V)$ is an abelian group ([[def-group]]): $+$ is associative
  and commutative, $0_V$ is a two-sided identity for $+$
  ([[def-identity-element]]), and every $v \in V$ has an additive inverse
  ([[def-invertible-element]]).
- **(V2)** $\lambda(u + v) = \lambda u + \lambda v$.
- **(V3)** $(\lambda + \mu)v = \lambda v + \mu v$.
- **(V4)** $(\lambda\mu)v = \lambda(\mu v)$.
- **(V5)** $1_F v = v$.

The elements of $F$ are called **scalars**. When several vector spaces are in
play we write $0_V$ for the zero of $V$, and we write $-v$ for the additive
inverse of $v$ and $u - v := u + (-v)$.

**The notation $0_V$ and $-v$ is legitimate.** Axiom (V1) asserts only that some
two-sided identity and some additive inverses exist. That there is at most one
two-sided identity for $+$ is [[lem-identity-unique]], and that an invertible
element of a monoid has exactly one inverse is [[lem-inverse-unique]]; both are
proved before [[def-group]] and are inherited here with the group structure. So
$0_V$ and $-v$ denote well-defined elements, and nothing below re-derives them.

**What (V1) buys, and why it is not restated.** Associativity, commutativity, the
identity law $v + 0_V = v = 0_V + v$, the inverse law $v + (-v) = 0_V$,
cancellation ([[lem-group-cancellation]]) and the inverse identities
([[lem-group-inverse-laws]]) are facts about abelian groups. They are quoted from
the group page wherever they are used and are never proved again for vectors.

## Remarks

- **Scalar multiplication is not a binary operation on a set.** It is a map
  $F \times V \to V$ with arguments from two different sets, so
  [[def-binary-operation]], which is about a map $S \times S \to S$, does not
  apply to it and is never cited for it. The definition above cites that item for
  the vector addition only. In particular "closed under scalar multiplication"
  below always means $\lambda v \in W$ for $\lambda \in F$ and $v \in W$, which is
  not an instance of the closure condition defined there.

- **(V5) is an axiom, not a consequence of (V2)–(V4).** Take any abelian group
  $(V,+,0_V)$ and define $\lambda v := 0_V$ for every $\lambda$ and $v$. Then
  (V2), (V3) and (V4) all hold, both sides of each being $0_V$, while (V5) fails
  as soon as $V \ne \{0_V\}$. So (V5) has to be imposed, and it is what ties the
  scalar action to the identity of $F$.

- **Two structures, one set.** A vector space is data: the set $V$, the addition,
  the zero, and the scalar multiplication, over a fixed field $F$. The same set
  may carry vector-space structures over different fields, and the field is part
  of the statement of every result below. [[lem-restriction-of-scalars]] is the
  first place where that matters.

- **The field is the published one.** No field axiom is restated here; $F$ is a
  field in the sense of [[def-field]], whose axiom (A) already says that $(F,+)$
  is an abelian group and whose axiom (M) says the same of
  $(F \setminus \{0_F\}, \cdot)$. In particular every field is a vector space over
  itself, which is [[lem-restriction-of-scalars]].
````

### `lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric`

````markdown
---
id: lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric
kind: lemma
title: "The finite and reverse triangle inequalities for a norm; and for $n \\ge 1$ every norm $N$ on $\\mathbb{R}^n$ satisfies $N(x) \\le C\\lVert x\\rVert_1$ and is Lipschitz, hence continuous, for $d_2$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-norm-and-normed-space, def-p-norms-on-rn, lem-p-norms-are-norms-and-induce-the-published-metrics, def-equivalent-norms, lem-standard-basis-of-f-n, def-linear-combination-and-span, thm-unique-coordinates-with-respect-to-an-ordered-basis, thm-cauchy-schwarz-finite, lem-finite-set-has-max, def-max-min, lem-finite-sum-laws, def-finite-sum, def-lipschitz-holder-contraction, thm-metric-regularity-hierarchy, def-metric-continuity, def-canonical-natural, lem-of-naturals-positive, thm-induction-principle, lem-of-abs-value, lem-of-square-monotone, thm-of-square-roots, lem-real-line-is-a-metric-space, lem-metrics-on-rn, def-vector-space, lem-vector-space-elementary-consequences]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Norm (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Norm_(mathematics)"
    - title: "Lipschitz continuity (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Lipschitz_continuity"
    - title: "J. Demmel, MA221 Lecture 3: Vector Norms"
      url: "https://people.eecs.berkeley.edu/~demmel/ma221_Fall10/Lectures/Lecture_03.html"
    - title: "G. Zitelli, Math 641 Functional Analysis, Part I"
      url: "https://www.math.uci.edu/~gzitelli/pdf/641/641part1.pdf"
pipeline_run: null
---

## Statement

**Clause 1 is about an arbitrary norm; clauses 2 to 4 are about
$\mathbb{R}^{n}$ with $n \ge 1$.**

1. **Finite and reverse triangle inequalities.** Let $V$ be a vector space over
   $\mathbb{R}$ and $N$ a norm on it ([[def-norm-and-normed-space]]). For every
   $p \in \mathbb{N}$ and every list $u : p \to V$
   ([[def-linear-combination-and-span]]),
   $$N\Bigl(\sum_{j<p} u_j\Bigr) \;\le\; \sum_{j<p} N(u_j),$$
   and for all $u, w \in V$,
   $$\bigl|N(u) - N(w)\bigr| \;\le\; N(u - w).$$

Now let $n \in \mathbb{N}$ with $n \ge 1$, let $\mathbb{R}^{n}$ carry the norms of
[[def-p-norms-on-rn]] and write $\iota$ for the canonical natural
([[def-canonical-natural]]).

2. **Every norm is dominated by the $1$-norm.** Let $N$ be a norm on
   $\mathbb{R}^{n}$ and put $C := \max\{\, N(e_k) : k<n \,\}$, a maximum over a
   nonempty finite set of reals ([[lem-standard-basis-of-f-n]],
   [[lem-finite-set-has-max]]). Then $C \ge 0$ and
   $$N(x) \;\le\; C\,\lVert x\rVert_1 \qquad \text{for every } x \in \mathbb{R}^{n}.$$
3. **The comparison chain.** For every $x \in \mathbb{R}^{n}$,
   $$\lVert x\rVert_\infty \;\le\; \lVert x\rVert_2 \;\le\; \lVert x\rVert_1 \;\le\; \iota(n)\,\lVert x\rVert_\infty , \qquad \lVert x\rVert_1 \;\le\; \sqrt{\iota(n)}\;\lVert x\rVert_2 .$$
   In particular $\lVert\cdot\rVert_1$, $\lVert\cdot\rVert_2$ and
   $\lVert\cdot\rVert_\infty$ are pairwise equivalent norms on $\mathbb{R}^{n}$,
   with the constants displayed ([[def-equivalent-norms]]).
4. **Every norm is Lipschitz for the Euclidean metric.** With $N$ and $C$ as in
   clause 2, $N : (\mathbb{R}^{n}, d_2) \to (\mathbb{R}, d_{\mathbb{R}})$ is
   Lipschitz with constant $C\sqrt{\iota(n)}$
   ([[def-lipschitz-holder-contraction]], [[lem-metrics-on-rn]],
   [[lem-real-line-is-a-metric-space]]), hence uniformly continuous and
   continuous ([[thm-metric-regularity-hierarchy]], [[def-metric-continuity]]).

**Where $n \ge 1$ enters.** Clauses 2 and 4 need the maximum defining $C$ to
exist, and clause 3 mentions $\lVert\cdot\rVert_\infty$; at $n = 0$ each is a
maximum over the empty index set and does not exist, exactly as in
[[lem-metrics-on-rn]] and [[def-p-norms-on-rn]]. Clause 1 carries no hypothesis
on the dimension and no hypothesis on the space.

## Facts & Assumptions

**Given:** A vector space $V$ over $\mathbb{R}$ with a norm $N$ ([[def-vector-space]], [[def-norm-and-normed-space]]); and, for clauses 2 to 4, a natural $n \ge 1$, the space $\mathbb{R}^{n}$, a norm $N$ on it, and vectors $x, y \in \mathbb{R}^{n}$.

[L1] The norm axioms: $N(v) = 0$ exactly when $v = 0_V$; $N(\lambda v) = |\lambda|N(v)$; $N(u+w) \le N(u)+N(w)$; and $N(v) \ge 0$ ([[def-norm-and-normed-space]]).

[L2] Finite sums in a vector space: $\sum_{j<0}u_j = 0_V$ and $\sum_{j<p+1}u_j = \bigl(\sum_{j<p}u_j\bigr) + u_p$ ([[def-linear-combination-and-span]]); and $(-1)v = -v$ ([[lem-vector-space-elementary-consequences]]).

[L3] The induction principle ([[thm-induction-principle]]).

[L4] Laws of finite sums of reals ([[lem-finite-sum-laws]], [[def-finite-sum]]): additivity, scaling, monotonicity, $\sum_{k<n}\lambda = \iota(n)\lambda$, a sum of nonnegative terms is nonnegative, and every single term is at most such a sum.

[L5] The standard basis: $e_i \in \mathbb{R}^{n}$ has $e_i(i) = 1$ and $e_i(j) = 0$ for $j \ne i$, $e$ is an ordered basis of $\mathbb{R}^{n}$, and every $x$ satisfies $x = \sum_{i<n}x_i e_i$ with coordinate list $i \mapsto x(i)$ ([[lem-standard-basis-of-f-n]] clauses 1 to 3, [[thm-unique-coordinates-with-respect-to-an-ordered-basis]]).

[L6] Maxima ([[lem-finite-set-has-max]], [[def-max-min]]): a nonempty finite set of reals has a maximum, which belongs to the set and bounds it above.

[L7] The three norms ([[def-p-norms-on-rn]], [[lem-p-norms-are-norms-and-induce-the-published-metrics]]): $\lVert x\rVert_1 = \sum_{k<n}|x_k|$, $\lVert x\rVert_2 = \sqrt{\sum_{k<n}x_k^{2}}$, $\lVert x\rVert_\infty = \max\{|x_k| : k<n\}$, and each induces the correspondingly named published metric.

[L8] Cauchy-Schwarz in root form ([[thm-cauchy-schwarz-finite]]): $\bigl|\sum_{k<n}a_kb_k\bigr| \le \sqrt{\sum_{k<n}a_k^{2}}\sqrt{\sum_{k<n}b_k^{2}}$.

[L9] Square roots and squaring ([[thm-of-square-roots]], [[lem-of-square-monotone]]): every $c \ge 0$ has a unique $\sqrt{c} \ge 0$ with $(\sqrt{c})^{2} = c$; for $a,b \ge 0$, $a \le b$ exactly when $a^{2} \le b^{2}$.

[L10] Absolute value ([[lem-of-abs-value]]): $|t| \ge 0$, $|t|^{2} = t^{2}$, $|st| = |s||t|$, $|-t| = |t|$, and $|t|$ equals $t$ or $-t$.

[L11] The canonical natural: $\iota(n) > 0$ for $n \ge 1$ ([[def-canonical-natural]], [[lem-of-naturals-positive]]).

[L12] Lipschitz maps and the regularity hierarchy ([[def-lipschitz-holder-contraction]], [[thm-metric-regularity-hierarchy]], [[def-metric-continuity]]): a map with $d_Y(f(x),f(y)) \le L\,d_X(x,y)$ and $L \ge 0$ is Lipschitz, hence uniformly continuous, hence continuous; $d_{\mathbb{R}}(s,t) = |s-t|$ ([[lem-real-line-is-a-metric-space]]).

## Proof

**Proof technique:** direct.

1.1 The finite triangle inequality holds by induction on $p$: at $p = 0$ both sides are $0$, since $\sum_{j<0}u_j = 0_V$ and $N(0_V) = 0$ and the empty real sum is $0$; and if $N(\sum_{j<p}u_j) \le \sum_{j<p}N(u_j)$, then $N(\sum_{j<p+1}u_j) = N(\sum_{j<p}u_j + u_p) \le N(\sum_{j<p}u_j) + N(u_p) \le \sum_{j<p}N(u_j) + N(u_p) = \sum_{j<p+1}N(u_j)$. [L1, L2, L3, L4]

1.2 For $u, w \in V$: $N(u) = N((u-w)+w) \le N(u-w) + N(w)$, so $N(u)-N(w) \le N(u-w)$; and $N(w-u) = N((-1)(u-w)) = |-1|N(u-w) = N(u-w)$, so the same argument with $u$ and $w$ exchanged gives $N(w)-N(u) \le N(u-w)$. Since $|N(u)-N(w)|$ is one of $N(u)-N(w)$ and $N(w)-N(u)$, the reverse triangle inequality follows, completing clause 1. [L1, L2, L10]

1.3 For every $j<n$: $x_j^{2} \le \sum_{k<n}x_k^{2}$, since every single term of a sum of nonnegative terms is at most the sum; taking nonnegative square roots and using $|x_j|^{2} = x_j^{2}$ gives $|x_j| \le \lVert x\rVert_2$. [L4, L7, L9, L10]

1.4 For every $j<n$: $|x_j| \le \sum_{k<n}|x_k| = \lVert x\rVert_1$, again because a single term is at most the sum. [L4, L7, L10]

1.5 $\sum_{k<n}|x_k| \le \sum_{k<n}\lVert x\rVert_\infty = \iota(n)\lVert x\rVert_\infty$, since $|x_k| \le \lVert x\rVert_\infty$ for every $k<n$ and a constant list sums to $\iota(n)$ times its value; so $\lVert x\rVert_1 \le \iota(n)\lVert x\rVert_\infty$. [L4, L6, L7, L11]

1.6 Instantiating [L8] at $a_k := |x_k|$ and $b_k := 1$ gives $\lVert x\rVert_1 = \bigl|\sum_{k<n}|x_k|\cdot 1\bigr| \le \sqrt{\sum_{k<n}|x_k|^{2}}\,\sqrt{\sum_{k<n}1} = \lVert x\rVert_2\sqrt{\iota(n)}$. [L4, L7, L8, L10]

1.7 The set $\{N(e_k) : k<n\}$ is a nonempty finite set of reals because $n \ge 1$, so $C = \max\{N(e_k) : k<n\}$ exists, belongs to the set, satisfies $N(e_k) \le C$ for every $k<n$, and is $\ge 0$ since every value of $N$ is. [L1, L5, L6]

1.8 $x = \sum_{i<n} x_i e_i$, the coordinate list of $x$ with respect to the ordered basis $e$ being $i \mapsto x(i) = x_i$. [L5]

2.1 $\lVert x\rVert_\infty$ is one of the numbers $|x_j|$ with $j<n$, so step 1.3 gives $\lVert x\rVert_\infty \le \lVert x\rVert_2$. [step 1.3, L6, L7]

2.2 $\sum_{k<n}x_k^{2} = \sum_{k<n}|x_k|\,|x_k| \le \sum_{k<n}|x_k|\,\lVert x\rVert_1 = \lVert x\rVert_1\sum_{k<n}|x_k| = \lVert x\rVert_1^{2}$, using step 1.4 termwise, monotonicity and scaling; taking nonnegative square roots gives $\lVert x\rVert_2 \le \lVert x\rVert_1$. [step 1.4, L4, L7, L9, L10]

2.3 Applying step 1.1 to the list $i \mapsto x_i e_i$ and then (N2): $N(x) = N\bigl(\sum_{i<n}x_ie_i\bigr) \le \sum_{i<n}N(x_ie_i) = \sum_{i<n}|x_i|\,N(e_i) \le \sum_{i<n}|x_i|\,C = C\lVert x\rVert_1$, the last inequality by monotonicity from step 1.7. This is clause 2. [step 1.1, step 1.7, step 1.8, L1, L4, L7]

3.1 Steps 2.1, 2.2, 1.5 and 1.6 are the four inequalities of clause 3; since $\iota(n) > 0$ and $\sqrt{\iota(n)} > 0$, they exhibit positive constants in both directions for each of the three pairs, so the three norms are pairwise equivalent. [step 1.5, step 1.6, step 2.1, step 2.2, L11, L9]

3.2 By step 1.2 applied on $\mathbb{R}^{n}$, then step 2.3, then step 1.6: $\bigl|N(x)-N(y)\bigr| \le N(x-y) \le C\lVert x-y\rVert_1 \le C\sqrt{\iota(n)}\;\lVert x-y\rVert_2$. [step 1.2, step 1.6, step 2.3, L4]

4.1 Since $\lVert x-y\rVert_2 = d_2(x,y)$ and $\bigl|N(x)-N(y)\bigr| = d_{\mathbb{R}}(N(x),N(y))$, step 3.2 says exactly that $N$ is Lipschitz with the nonnegative constant $C\sqrt{\iota(n)}$, hence uniformly continuous and continuous; this is clause 4, and with steps 1.2, 2.3 and 3.1 all four clauses are proved. [step 1.2, step 2.3, step 3.1, step 3.2, L7, L12] ∎

## Remarks

- **Clause 2 is the half of norm equivalence that costs no compactness.** It gives an upper bound for an arbitrary norm in terms of $\lVert\cdot\rVert_1$, and hence in terms of $\lVert\cdot\rVert_2$ by clause 3, by a computation with the standard basis alone. The matching **lower** bound is where compactness of the unit sphere enters, and that is [[thm-all-norms-on-rn-are-equivalent]].

- **The constants of clause 3 are best possible, and the companion page shows it.** Nothing here claims sharpness; the attaining vectors are exhibited on the companion page for $\mathbb{R}^{2}$.

- **Clause 1 is stated for a general norm on purpose.** It is used below for the Euclidean norm on $\mathbb{R}^{n}$ inside [[thm-steinitz-polygonal-confinement]] and for an arbitrary $N$ in clause 2, and it is the only statement on this page that needs no hypothesis on the dimension at all.
````

### `lem-finite-set-has-max`

````markdown
---
id: lem-finite-set-has-max
kind: lemma
title: "Every nonempty finite set of reals has a maximum and a minimum"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-max-min, thm-induction-principle, def-nat-addition, def-complete-ordered-field, def-ordered-field]
justified_by: [lem-finite-subsets-listable]
forward_refs: [def-countable]
aliases: []
landmark: false
proof_strategy: induction
verification:
  precheck: pass
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-04
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Maximum and minimum (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Maximum_and_minimum"
    - title: "Mathematical induction (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Mathematical_induction"
    - title: "Finite set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Finite_set"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Statement

For every $n \in \mathbb{N}$ and all $a_0, a_1, \dots, a_n \in \mathbb{R}$, the
set $\{a_0, a_1, \dots, a_n\}$ has a maximum and a minimum ([[def-max-min]]).

What is proved below is exactly the displayed statement, by induction on $n$.

The usual reading, that *every nonempty finite subset of $\mathbb{R}$ has a
maximum and a minimum*, follows once one identifies the nonempty finite subsets
of $\mathbb{R}$ with the sets listable as $\{a_0, \dots, a_n\}$. That
identification is recorded as a stipulation in the Given below, because this page
has no definition of finiteness to prove it against. **It is discharged, not
merely assumed**: [[lem-finite-subsets-listable]] proves that the two
descriptions of a nonempty finite subset of $\mathbb{R}$ agree. That lemma is
recorded in `justified_by` rather than in `deps`, since it is about the sets this
lemma quantifies over and therefore depends on this one. This is what licenses
the notation
$\max\{a_1, \dots, a_n\}$ and $\min\{a_1, \dots, a_n\}$ for finite sets of
**real** numbers from this page onwards.

## Facts & Assumptions

**Given:** Real numbers $a_0, a_1, a_2, \dots$; for $n \in \mathbb{N}$ write $F_n := \{a_0, \dots, a_n\}$, so that $F_{n+1} = F_n \cup \{a_{n+1}\}$. A subset of $\mathbb{R}$ is nonempty and finite exactly when it equals $F_n$ for some $n \in \mathbb{N}$ and some choice of $a_0, \dots, a_n$.

[A1] $P(n)$ denotes the statement: for all $a_0, \dots, a_n \in \mathbb{R}$, the set $F_n$ has a maximum and a minimum.

[L1] Maximum and minimum: $m = \max X$ means $m \in X$ and $x \le m$ for all $x \in X$; $m = \min X$ means $m \in X$ and $m \le x$ for all $x \in X$; each is unique when it exists ([[def-max-min]]).

[L2] Induction principle: if $P(0)$ holds and $P(n)$ implies $P(n+1)$ for every $n \in \mathbb{N}$, then $P(n)$ holds for every $n \in \mathbb{N}$, where $n + 1$ denotes the successor $\sigma(n)$ ([[thm-induction-principle]], [[def-nat-addition]]).

[L3] The order on $\mathbb{R}$ is reflexive, total and transitive: $a \le a$; for all $a, b$ exactly one of $a < b$, $a = b$, $b < a$ holds, so at least one of $a \le b$ and $b \le a$ holds; and $a \le b$ with $b \le c$ gives $a \le c$ ([[def-complete-ordered-field]], [[def-ordered-field]]).

## Proof

**Proof technique:** induction.

1.1 Base case: $F_0 = \{a_0\}$, and $a_0 \in F_0$ with $a_0 \le a_0$ by reflexivity, so $a_0$ is both a maximum and a minimum of $F_0$; hence $P(0)$ holds. [base, A1, L1, L3]

1.2 Inductive hypothesis: fix $n \in \mathbb{N}$ and assume $P(n)$, that is, for all reals $a_0, \dots, a_n$ the set $F_n$ has a maximum and a minimum. [ih, A1]

2.1 Let $a_0, \dots, a_{n+1} \in \mathbb{R}$ be arbitrary; by the inductive hypothesis the set $F_n$ has a maximum $M$ and a minimum $m$, and $F_{n+1} = F_n \cup \{a_{n+1}\}$. [step 1.2, L1]

3.1 By totality at least one of $a_{n+1} \le M$ and $M \le a_{n+1}$ holds. If $a_{n+1} \le M$, then $M \in F_n \subseteq F_{n+1}$, every element of $F_n$ is $\le M$ because $M = \max F_n$, and $a_{n+1} \le M$ as well, so $M$ is a maximum of $F_{n+1}$. If $M \le a_{n+1}$, then $a_{n+1} \in F_{n+1}$, every $x \in F_n$ satisfies $x \le M \le a_{n+1}$ hence $x \le a_{n+1}$ by transitivity, and $a_{n+1} \le a_{n+1}$, so $a_{n+1}$ is a maximum of $F_{n+1}$. Either way $F_{n+1}$ has a maximum. [step 2.1, L1, L3]

3.2 Dually, at least one of $m \le a_{n+1}$ and $a_{n+1} \le m$ holds. If $m \le a_{n+1}$, then $m \in F_{n+1}$ and every element of $F_{n+1}$ is $\ge m$, so $m$ is a minimum of $F_{n+1}$. If $a_{n+1} \le m$, then $a_{n+1} \in F_{n+1}$ and every $x \in F_n$ satisfies $a_{n+1} \le m \le x$ hence $a_{n+1} \le x$ by transitivity, so $a_{n+1}$ is a minimum of $F_{n+1}$. Either way $F_{n+1}$ has a minimum. [step 2.1, L1, L3]

4.1 Since $a_0, \dots, a_{n+1}$ were arbitrary, $F_{n+1}$ has a maximum and a minimum for every such list, that is, $P(n)$ implies $P(n+1)$. [step 3.1, step 3.2, A1]

5.1 The base case and the inductive step give $P(n)$ for every $n \in \mathbb{N}$ by the induction principle; since a nonempty finite subset of $\mathbb{R}$ is exactly a set of the form $F_n$, every nonempty finite subset of $\mathbb{R}$ has both a maximum and a minimum. [step 1.1, step 4.1, given, L2, discharge-induction] ∎

## Remarks

- **Where the stipulation is discharged.** Finiteness itself is defined later, in [[def-countable]], as equinumerosity with a von Neumann natural; with that definition in hand [[lem-finite-subsets-listable]] proves that a subset of $\mathbb{R}$ is nonempty and finite exactly when it is listable as $\{a_0, \dots, a_n\}$, which is the Given below. So nothing on this page rests on an assumption that is never paid for; it is paid for later, and the payment is recorded in `justified_by`.
- **Only the total order is used, never completeness.** The base case needs reflexivity, the inductive step needs totality and transitivity, and the induction itself runs over $\mathbb{N}$. The same induction works in any totally ordered field; what is recorded here is its specialisation to $\mathbb{R}$.
- Nonemptiness is essential: $\emptyset$ is finite and has no maximum ([[def-max-min]]). Finiteness is essential too: $\{x \in \mathbb{R} : 0 < x < 1\}$ is bounded and has no maximum ([[fs-sup-belongs-to-set]]).
- Combined with claim 1 of [[lem-max-is-sup]], this says every nonempty finite subset of $\mathbb{R}$ has a supremum, and that the supremum is attained, because it equals the maximum. The infimum half is *not* part of [[lem-max-is-sup]], which speaks only of maxima and suprema; it follows from the minimum proved here together with the reflection identity $\inf X = -\sup(-X)$ ([[lem-reflection]], [[thm-infimum-property]]).
````

### `lem-finite-subsets-listable`

````markdown
---
id: lem-finite-subsets-listable
kind: lemma
title: "The nonempty finite subsets of $\\mathbb{R}$ are exactly the listable ones"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-countable, def-equinumerous, thm-induction-principle, lem-nat-order-is-membership, lem-nat-transitive-irreflexive, def-injection-surjection-bijection, def-natural-numbers, def-nat-order, lem-nat-nonzero-is-successor, def-complete-ordered-field, lem-finite-set-has-max, def-max-min]
justified_by: []
aliases: []
landmark: false
short: "finite iff listable as $\\{a_0,\\dots,a_n\\}$"
proof_strategy: induction
verification:
  precheck: pass
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-07-26
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-25
sources:
  scraped: []
  references:
    - title: "J. K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
    - title: "J. Lebl, Basic Analysis: Introduction to Real Analysis, basic set theory"
      url: "https://www.jirka.org/ra/html/sec_basicset.html"
    - title: "Finite set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Finite_set"
    - title: "Maximum and minimum (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Maximum_and_minimum"
pipeline_run: null
---

## Statement

Let $\mathbb{R}$ be a complete ordered field ([[def-complete-ordered-field]]) and
let $F \subseteq \mathbb{R}$ be nonempty. Then $F$ is finite
([[def-countable]]) **if and only if** there are $n \in \mathbb{N}$ and
$a_0, a_1, \dots, a_n \in \mathbb{R}$ with

$$F = \{a_0, a_1, \dots, a_n\}.$$

Here $\{a_0, \dots, a_n\}$ means the image $a[\sigma(n)]$ of a function
$a : \sigma(n) \to \mathbb{R}$, where $\sigma(n) = \{\, i \in \mathbb{N} : i \le n \,\}$
([[def-natural-numbers]], [[lem-nat-order-is-membership]]).

**Consequently every nonempty finite subset of $\mathbb{R}$ has a maximum and a
minimum** ([[def-max-min]]), since [[lem-finite-set-has-max]] proves exactly that
for sets presented as $\{a_0, \dots, a_n\}$.

## Facts & Assumptions

**Given:** A complete ordered field $\mathbb{R}$ and a nonempty subset $F \subseteq \mathbb{R}$. For $n \in \mathbb{N}$ and a function $a : \sigma(n) \to \mathbb{R}$, write $\{a_0, \dots, a_n\} := a[\sigma(n)]$, and call a set of this form **listable**.

[L1] $F$ is finite when $F \approx m$ for some $m \in \mathbb{N}$, where $m = \{\, i \in \mathbb{N} : i < m \,\}$; and $F \approx 0 = \varnothing$ only for $F = \varnothing$ ([[def-countable]], [[def-natural-numbers]]).

[L2] Bijections and their images, and the symmetry and transitivity of $\approx$ ([[def-equinumerous]], [[def-injection-surjection-bijection]]).

[L3] Induction principle: if $P(0)$ holds and $P(n)$ implies $P(\sigma(n))$ for every $n$, then $P(n)$ holds for every $n \in \mathbb{N}$ ([[thm-induction-principle]]).

[L4] For the additive order of [[def-nat-order]]: $i < \sigma(n) \iff i \le n$, and every natural number is exactly the set of the naturals below it, so $\sigma(n) = \{\, i : i \le n \,\} = n \cup \{n\}$ ([[lem-nat-order-is-membership]], [[def-natural-numbers]]); and every nonzero natural is a successor ([[lem-nat-nonzero-is-successor]]).

[L5] For every $n \in \mathbb{N}$ and all $a_0, \dots, a_n \in \mathbb{R}$ the set $\{a_0, \dots, a_n\}$ has a maximum and a minimum ([[lem-finite-set-has-max]], [[def-max-min]]).

[L6] Membership is irreflexive on $\mathbb{N}$: $k \notin k$ for every $k \in \mathbb{N}$ ([[lem-nat-transitive-irreflexive]]).

## Proof

**Proof technique:** induction.

1.1 Base case of the listable-implies-finite direction: for $n = 0$ a listable set is $a[\sigma(0)] = \{a(0)\}$, and $i \mapsto a(0)$ is a bijection from $\sigma(0) = \{0\}$ onto it, so it is finite. [base, L1, L2, L4]

1.2 Inductive hypothesis: fix $n \in \mathbb{N}$ and assume every set of the form $a[\sigma(n)]$, for a function $a : \sigma(n) \to \mathbb{R}$, is finite. [ih]

1.3 The finite-implies-listable direction needs no induction: if $F$ is nonempty and finite there is a bijection $\psi : m \to F$ with $m \in \mathbb{N}$, and $m \ne 0$ because $F \ne \varnothing$, so $m = \sigma(n)$ for some $n$ by [L4]; putting $a := \psi$ gives $F = \psi[\sigma(n)] = \{a_0, \dots, a_n\}$, a listable set. [given, L1, L2, L4]

2.1 Inductive step: let $b : \sigma(\sigma(n)) \to \mathbb{R}$ and put $G = b[\sigma(n)]$ and $H = b[\sigma(\sigma(n))] = G \cup \{b(\sigma(n))\}$, using [L4]. By the inductive hypothesis applied to the restriction of $b$ to $\sigma(n)$, there is a bijection $u : G \to k$ for some $k \in \mathbb{N}$. If $b(\sigma(n)) \in G$ then $H = G$ is finite. Otherwise extend $u$ to $H$ by $u(b(\sigma(n))) := k$; since $k \notin k$ by [L6], this is a bijection $H \to k \cup \{k\} = \sigma(k)$, so $H$ is finite. In both cases $H$ is finite, so the claim holds at $\sigma(n)$. [step 1.2, L1, L2, L4, L6]

3.1 By [L3] every listable subset of $\mathbb{R}$ is finite, and by step 1.3 every nonempty finite subset of $\mathbb{R}$ is listable, which is the stated equivalence; combining it with [L5], every nonempty finite $F \subseteq \mathbb{R}$ is of the form $\{a_0, \dots, a_n\}$ and therefore has a maximum and a minimum. [step 1.1, step 1.3, step 2.1, L3, L5, discharge-induction] ∎

## Remarks

- **This lemma discharges the one stipulation left open in [[lem-finite-set-has-max]].** That lemma proves, by induction on $n$, that every set $\{a_0, \dots, a_n\}$ of reals has a maximum and a minimum, and then adopts as a working convention, explicitly not proved there, that the nonempty finite subsets of $\mathbb{R}$ are exactly the sets of that form. The convention could not be proved at the time because the library had no definition of finiteness. With [[def-countable]] available, it is proved above, and the usual reading of that lemma, "every nonempty finite subset of $\mathbb{R}$ has a maximum and a minimum", is now a theorem rather than a stipulation.

- Nonemptiness is needed only for the finite-implies-listable direction: a list $a_0, \dots, a_n$ always has at least the entry $a_0$, whereas $\varnothing$ is finite and not listable in this sense.

- Nothing in the argument uses the order or the arithmetic of $\mathbb{R}$; the same proof shows that in any set the nonempty finite subsets are exactly the images of the naturals $\sigma(n)$. Only the consequence about maxima and minima uses that $\mathbb{R}$ is ordered.
````

### `lem-finite-sum-laws`

````markdown
---
id: lem-finite-sum-laws
kind: lemma
title: "Laws of finite sums and finite products"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-finite-sum, thm-induction-principle, def-ordered-field, def-field, lem-of-add-order, lem-of-sign-rules, lem-of-zero-mult, cor-of-one-positive, lem-of-q-embeds, lem-of-naturals-positive]
justified_by: []
aliases: []
landmark: false
proof_strategy: induction
verification:
  precheck: pass
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-07-26
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
sources:
  scraped: []
  references:
    - title: "J. Aspnes, Summation Notation"
      url: "https://www.cs.yale.edu/homes/aspnes/pinewiki/SummationNotation.html"
    - title: "M. Fochler, Recursive sums, products, and powers"
      url: "https://people.math.binghamton.edu/mfochler/bu-mfx/bu-math-arv/math-330-arv/math-330-2019-08/html/lec-notes/bu-ln-330-m330-solns-2019-12-03.pdf"
    - title: "T. Tao, Analysis I, 3rd ed., §7.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Telescoping series (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Telescoping_series"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $a, b, c : \mathbb{N} \to \mathbb{R}$ be sequences of reals, let
$\lambda \in \mathbb{R}$, and let $m, n \in \mathbb{N}$, with finite sums and
finite products as in [[def-finite-sum]]. Then:

1. **Additivity.** $\displaystyle\sum_{k<n}(a_k + b_k) = \sum_{k<n} a_k + \sum_{k<n} b_k$.
2. **Scaling.** $\displaystyle\sum_{k<n} \lambda a_k = \lambda \sum_{k<n} a_k$; in particular $\displaystyle\sum_{k<n} \lambda = n\lambda$, where $n$ denotes the canonical natural $\iota(n) \in \mathbb{R}$ ([[lem-of-q-embeds]], [[lem-of-naturals-positive]]).
3. **Splitting.** If $m \le n$ then $\displaystyle\sum_{k<n} a_k = \sum_{k<m} a_k + \sum_{k=m}^{n-1} a_k$, and $\displaystyle\prod_{k<n} a_k = \Big(\prod_{k<m} a_k\Big)\Big(\prod_{k=m}^{n-1} a_k\Big)$.
4. **Monotonicity.** If $a_k \le b_k$ for all $k < n$ then $\displaystyle\sum_{k<n} a_k \le \sum_{k<n} b_k$. In particular, if $a_k \ge 0$ for all $k < n$ then $\sum_{k<n} a_k \ge 0$, every single term satisfies $a_j \le \sum_{k<n} a_k$ for $j < n$, and $\sum_{k<n} a_k = 0$ forces $a_k = 0$ for every $k < n$.
5. **Telescoping.** $\displaystyle\sum_{k<n}\big(c_{k+1} - c_k\big) = c_n - c_0$.
6. **Products.** $\displaystyle\prod_{k<n}(a_k b_k) = \Big(\prod_{k<n} a_k\Big)\Big(\prod_{k<n} b_k\Big)$; if $a_k \ge 0$ for all $k < n$ then $\prod_{k<n} a_k \ge 0$, and if $a_k > 0$ for all $k < n$ then $\prod_{k<n} a_k > 0$.

## Facts & Assumptions

**Given:** Sequences $a, b, c : \mathbb{N} \to \mathbb{R}$, a real $\lambda$, and naturals $m, n$. Write $\Sigma_n = \sum_{k<n} a_k$ and $\Pi_n = \prod_{k<n} a_k$.

[L1] Recursion clauses ([[def-finite-sum]]): $\sum_{k<0} a_k = 0$ and $\sum_{k<n+1} a_k = \sum_{k<n} a_k + a_n$; $\prod_{k<0} a_k = 1$ and $\prod_{k<n+1} a_k = \big(\prod_{k<n} a_k\big) \cdot a_n$; and $\sum_{k=m}^{n-1} a_k = \sum_{j < n-m} a_{m+j}$ for $m \le n$, likewise for products.

[L2] Field axioms: addition and multiplication are associative and commutative, $0$ and $1$ are the identities, $x - x = 0$, and multiplication distributes over addition ([[def-field]], [[def-ordered-field]]); and $0 \cdot x = 0$, which is not an axiom but a lemma ([[lem-of-zero-mult]]).

[L3] Induction principle: a property holding at $0$ and inherited by successors holds at every natural ([[thm-induction-principle]]).

[L4] Adding inequalities: $x \le y$ and $u \le v$ imply $x + u \le y + v$. [[lem-of-add-order]] states the STRICT forms and only those ($x < y \Rightarrow x + c < y + c$, and $x < y$ with $u < v$ giving $x + u < y + v$); the nonstrict form used throughout below is those two together with the cases $x = y$ and $u = v$, which are settled by trichotomy, the order being total and transitive ([[def-ordered-field]]).

[L5] The canonical embedding $\iota : \mathbb{Q} \to \mathbb{R}$ is a field homomorphism, so $\iota(0) = 0$ and $\iota(n+1) = \iota(n) + 1$, and $\iota(n) > 0$ for $n \ge 1$ ([[lem-of-q-embeds]], [[lem-of-naturals-positive]]).

[L6] Sign rules: a product of two positives is positive ([[lem-of-sign-rules]], claim 1), and a product of two nonnegatives is nonnegative, since a factor equal to $0$ makes the product $0$ ([[lem-of-zero-mult]]) and otherwise both factors are positive; and $1 > 0$, which is proved in [[cor-of-one-positive]] and stated by none of the items named above.

## Proof

**Proof technique:** induction.

1.1 Base case $n = 0$: every claim holds at $n = 0$, since both sides of claim 1 are $0 = 0 + 0$, both sides of claim 2 are $0 = \lambda \cdot 0$ and $0 = \iota(0)\lambda$, claim 4 reads $0 \le 0$ with no term to bound and the hypothesis $\sum_{k<0} a_k = 0$ giving nothing to prove, claim 5 reads $0 = c_0 - c_0$, and claim 6 reads $1 = 1 \cdot 1$ with $1 > 0$. [base, L1, L2, L5, L6]

1.2 Inductive hypothesis: fix $n \in \mathbb{N}$ and assume claims 1, 2, 4, 5 and 6 hold for this $n$ and for all sequences $a, b, c$ and all $\lambda$. [ih]

1.3 Splitting, claim 3, by a separate induction on the number of trailing terms $d = n - m$ with $m$ fixed: for $d = 0$ the claim reads $\sum_{k<m} a_k = \sum_{k<m} a_k + 0$ and $\prod_{k<m} a_k = \big(\prod_{k<m} a_k\big) \cdot 1$, which hold; and if $\sum_{k<m+d} a_k = \sum_{k<m} a_k + \sum_{j<d} a_{m+j}$, then $\sum_{k<m+d+1} a_k = \sum_{k<m+d} a_k + a_{m+d} = \sum_{k<m} a_k + \big(\sum_{j<d} a_{m+j} + a_{m+d}\big) = \sum_{k<m} a_k + \sum_{j<d+1} a_{m+j}$ by associativity, and identically for products with $1$ in place of $0$ and multiplication in place of addition, so induction on $d$ gives claim 3 for every $m \le n$. [L1, L2, L3]

2.1 Additivity at $n+1$: $\sum_{k<n+1}(a_k + b_k) = \sum_{k<n}(a_k + b_k) + (a_n + b_n) = \big(\sum_{k<n} a_k + \sum_{k<n} b_k\big) + (a_n + b_n) = \big(\sum_{k<n} a_k + a_n\big) + \big(\sum_{k<n} b_k + b_n\big) = \sum_{k<n+1} a_k + \sum_{k<n+1} b_k$, using the recursion clause, the hypothesis, and commutativity with associativity of addition. [step 1.2, L1, L2]

2.2 Scaling at $n+1$: $\sum_{k<n+1} \lambda a_k = \sum_{k<n} \lambda a_k + \lambda a_n = \lambda \sum_{k<n} a_k + \lambda a_n = \lambda\big(\sum_{k<n} a_k + a_n\big) = \lambda \sum_{k<n+1} a_k$ by the recursion clause, the hypothesis and distributivity; taking $a_k = 1$ for all $k$ gives $\sum_{k<n+1} \lambda = \sum_{k<n} \lambda + \lambda = \iota(n)\lambda + \lambda = (\iota(n) + 1)\lambda = \iota(n+1)\lambda$. [step 1.2, L1, L2, L5]

2.3 Monotonicity at $n+1$: assume $a_k \le b_k$ for all $k < n+1$; then $a_k \le b_k$ for all $k < n$, so the hypothesis gives $\sum_{k<n} a_k \le \sum_{k<n} b_k$, and adding the inequality $a_n \le b_n$ gives $\sum_{k<n+1} a_k = \sum_{k<n} a_k + a_n \le \sum_{k<n} b_k + b_n = \sum_{k<n+1} b_k$. [step 1.2, L1, L4]

2.4 Telescoping at $n+1$: $\sum_{k<n+1}(c_{k+1} - c_k) = \sum_{k<n}(c_{k+1} - c_k) + (c_{n+1} - c_n) = (c_n - c_0) + (c_{n+1} - c_n) = c_{n+1} - c_0$, by the recursion clause, the hypothesis and the field identities. [step 1.2, L1, L2]

2.5 Products at $n+1$: $\prod_{k<n+1}(a_k b_k) = \big(\prod_{k<n}(a_k b_k)\big)(a_n b_n) = \big(\prod_{k<n} a_k\big)\big(\prod_{k<n} b_k\big)(a_n b_n) = \big(\prod_{k<n+1} a_k\big)\big(\prod_{k<n+1} b_k\big)$ by the recursion clause, the hypothesis, and commutativity with associativity of multiplication; and if every $a_k \ge 0$ for $k < n+1$ then $\prod_{k<n+1} a_k = \big(\prod_{k<n} a_k\big) a_n$ is a product of two nonnegatives, hence nonnegative, with the same argument giving positivity from positivity since $\prod_{k<0} a_k = 1 > 0$. [step 1.2, L1, L2, L6]

3.1 Consequences of monotonicity, completing claim 4: monotonicity itself holds at every $n$, by the induction principle applied to the base case of step 1.1 and the successor step 2.3, so it is available for an arbitrary $n$ in what follows; if $a_k \ge 0$ for all $k < n$ then comparing with the zero sequence gives $\sum_{k<n} a_k \ge \sum_{k<n} 0 = 0$; for $j < n$ splitting at $j$ and then at $j+1$ writes $\sum_{k<n} a_k = \sum_{k<j} a_k + a_j + \sum_{k=j+1}^{n-1} a_k$ with the first and third summands $\ge 0$, so $a_j \le \sum_{k<n} a_k$; and if moreover $\sum_{k<n} a_k = 0$ then $0 \le a_j \le 0$ for every $j < n$, so $a_j = 0$. [step 1.1, step 2.3, step 1.3, L3, L4, L2]

4.1 By the induction principle claims 1, 2, 4, 5 and 6 hold for every $n \in \mathbb{N}$, and claim 3 was proved in step 1.3 with its consequences in step 3.1, so all six laws hold. [step 1.1, step 2.1, step 2.2, step 2.3, step 2.4, step 2.5, step 1.3, step 3.1, L3, discharge-induction] ∎
````

### `lem-of-inverse-positive`

````markdown
---
id: lem-of-inverse-positive
kind: lemma
title: "Inverses of positives are positive, and reciprocation reverses order"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-ordered-field, lem-of-sign-rules, cor-of-one-positive]
aliases: []
landmark: false
verification:
  precheck: pass
  judge:
    model: openai/gpt-5.4
    verdict: pass
    date: 2026-07-25
  audited: 2026-07-25
sources:
  scraped: []
  references:
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "M. Spivak, Calculus, 4th ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Michael_Spivak"
    - title: "University of Innsbruck notes: Ordered fields"
      url: "https://www.uibk.ac.at/media/filer_public/28/02/280225fd-dde6-4e9c-bff6-baad33ff4a05/ragen.pdf"
pipeline_run: null
proof_strategy: direct
---

## Statement

Let $F$ be an ordered field ([[def-ordered-field]]) with positive cone $P$, and
let $a, b \in F$.

1. If $a > 0$ then $a^{-1} > 0$.
2. If $0 < a < b$ then $0 < b^{-1} < a^{-1}$.

## Facts & Assumptions

**Given:** An ordered field $F$ with positive cone $P$, and elements $a, b \in F$.

[L1] $x > 0 \iff x \in P$; $x < 0 \iff -x \in P$; and for $x \neq 0$ exactly one of $x \in P$, $-x \in P$ holds ([[def-ordered-field]]).

[L2] Sign rules: a product of a positive and a negative is negative, a product of two positives is positive, and for $c > 0$ one has $a < b \iff ac < bc$ ([[lem-of-sign-rules]]).

[L3] $0 < 1$; in particular $1 \neq 0$ ([[cor-of-one-positive]]).

[L4] $P$ is closed under addition, so $<$ is transitive ([[def-ordered-field]]).

## Proof

**Proof technique:** direct.

1.1 Assume $a > 0$, so $a \neq 0$ and its inverse $a^{-1}$ exists with $a \cdot a^{-1} = 1$; moreover $a^{-1} \neq 0$, since $a^{-1}$ has $a$ as its inverse while $0$ is non-invertible ($1 \neq 0$ by L3). [assume-hyp, L1, L3]

2.1 By trichotomy $a^{-1} \in P$ or $-a^{-1} \in P$; if $-a^{-1} \in P$, then $a > 0$ and $a^{-1} < 0$ give $a \cdot a^{-1} < 0$ by the sign rules, i.e. $1 < 0$, contradicting $0 < 1$; hence $a^{-1} \in P$, i.e. $a^{-1} > 0$, proving claim 1. [step 1.1, L2, L3, L1]

3.1 Assume $0 < a < b$; then $0 < b$ by transitivity, so by claim 1 both $a^{-1} > 0$ and $b^{-1} > 0$, and the sign rules give $a^{-1} b^{-1} > 0$. [assume-hyp, step 2.1, L4, L2, L1]

4.1 Multiplying $a < b$ by the positive $a^{-1} b^{-1}$ via the sign rules gives $a (a^{-1} b^{-1}) < b (a^{-1} b^{-1})$; since $a a^{-1} = 1$ and $b b^{-1} = 1$, this simplifies to $b^{-1} < a^{-1}$. [step 3.1, L2, algebra]

5.1 Together with $b^{-1} > 0$ from step 3.1, we conclude $0 < b^{-1} < a^{-1}$, proving claim 2. [step 3.1, step 4.1] ∎
````

### `lem-of-naturals-positive`

````markdown
---
id: lem-of-naturals-positive
kind: lemma
title: "Canonical naturals are positive and strictly increasing"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [cor-of-one-positive, lem-of-add-order, def-field]
aliases: []
landmark: false
short: "n·1 > 0"
proof_strategy: induction
verification:
  precheck: pass
  judge:
    model: openai/gpt-5.4
    verdict: pass
    date: 2026-07-25
  audited: 2026-07-25
sources:
  scraped: []
  references:
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "M. Spivak, Calculus, 4th ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Michael_Spivak"
    - title: "Elias Zakon, Mathematical Analysis: Natural Numbers and Induction"
      url: "https://math.libretexts.org/Bookshelves/Analysis/Mathematical_Analysis_%28Zakon%29/02%3A_Real_Numbers_and_Fields/2.02%3A_Natural_Numbers._Induction"
pipeline_run: null
---

## Statement

Let $F$ be an ordered field, with field structure as in [[def-field]], and for
$n \ge 1$ let $n \cdot 1_F$ denote the canonical natural number
$\underbrace{1_F + \cdots + 1_F}_{n}$, defined recursively by $1 \cdot 1_F = 1_F$
and $(n+1) \cdot 1_F = n \cdot 1_F + 1_F$. Then for every $n \ge 1$:

- $n \cdot 1_F > 0$ and $(n+1) \cdot 1_F > n \cdot 1_F$;
- the map $n \mapsto n \cdot 1_F$ is strictly increasing, hence injective, on $\{1, 2, 3, \dots\}$;
- $(m+n) \cdot 1_F = m \cdot 1_F + n \cdot 1_F$ and $(mn) \cdot 1_F = (m \cdot 1_F)(n \cdot 1_F)$ for all $m, n \ge 1$.

## Facts & Assumptions

**Given:** An ordered field $F$ whose canonical naturals are defined recursively by $1 \cdot 1_F = 1_F$ and $(n+1) \cdot 1_F = n \cdot 1_F + 1_F$, with $0 \cdot 1_F = 0$.

[L1] $0 < 1_F$ in every ordered field ([[cor-of-one-positive]]).

[L2] The order is compatible with addition and positives are closed under addition: $a < b$ implies $a + c < b + c$, and $a > 0$, $b > 0$ imply $a + b > 0$ ([[lem-of-add-order]]).

## Proof

**Proof technique:** induction.

1.1 Base case $n = 1$: by definition $1 \cdot 1_F = 1_F$, and $1_F > 0$. [L1, base]

1.2 Inductive hypothesis: assume $n \cdot 1_F > 0$ for some fixed $n \ge 1$. [ih]

1.3 By the recursion, $(n+1) \cdot 1_F - n \cdot 1_F = 1_F > 0$, so $(n+1) \cdot 1_F > n \cdot 1_F$. [given, L1]

1.4 Additive identity: fix $m$ and induct on $n$; at $n = 1$, $(m+1) \cdot 1_F = m \cdot 1_F + 1_F$ by the recursion, and if $(m+n) \cdot 1_F = m \cdot 1_F + n \cdot 1_F$ then $(m+n+1) \cdot 1_F = (m+n) \cdot 1_F + 1_F = m \cdot 1_F + n \cdot 1_F + 1_F = m \cdot 1_F + (n+1) \cdot 1_F$. [given, algebra]

2.1 Inductive step: $(n+1) \cdot 1_F = n \cdot 1_F + 1_F$ is a sum of two positives, by the hypothesis and $1_F > 0$, hence $(n+1) \cdot 1_F > 0$. [step 1.2, L1, L2]

2.2 Iterating 1.3, for $m < n$ one has $m \cdot 1_F < n \cdot 1_F$, so $n \mapsto n \cdot 1_F$ is strictly increasing and therefore injective on $\{1, 2, 3, \dots\}$. [step 1.3, L2]

2.3 Multiplicative identity: fix $m$ and induct on $n$; at $n = 1$, $(m \cdot 1) \cdot 1_F = m \cdot 1_F = (m \cdot 1_F)(1 \cdot 1_F)$, and the step $(m(n+1)) \cdot 1_F = (mn + m) \cdot 1_F = (mn) \cdot 1_F + m \cdot 1_F = (m \cdot 1_F)(n \cdot 1_F) + (m \cdot 1_F)(1_F) = (m \cdot 1_F)((n+1) \cdot 1_F)$ uses 1.4 and distributivity. [step 1.4, algebra]

3.1 By induction on 1.1, 1.2, 2.1, $n \cdot 1_F > 0$ for every $n \ge 1$; with the strict increase 2.2 and the identities 1.4, 2.3, every claim holds. [step 2.1, step 2.2, step 1.4, step 2.3, discharge-induction] ∎
````

### `lem-p-norms-are-norms-and-induce-the-published-metrics`

````markdown
---
id: lem-p-norms-are-norms-and-induce-the-published-metrics
kind: lemma
title: "Each $\\lVert\\cdot\\rVert_p$ is a norm on $\\mathbb{R}^n$, and the induced metrics are exactly $d_1$, $d_2$ and $d_\\infty$ of the published metric-spaces page"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-p-norms-on-rn, def-norm-and-normed-space, def-euclidean-inner-product, thm-cauchy-schwarz-and-the-euclidean-norm, thm-minkowski-finite, lem-rational-power-laws, lem-rational-power-monotone, lem-finite-sum-laws, def-finite-sum, lem-metrics-on-rn, def-metric-space, def-metric-topology, thm-euclidean-space-complete, thm-heine-borel-rn, thm-metric-compactness-equivalences, lem-finite-set-has-max, def-max-min, def-rational-power, lem-of-abs-value, def-abs-value, lem-of-triangle-inequality, lem-of-sign-rules, def-ordered-field, thm-of-square-roots]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Lp space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Lp_space"
    - title: "Minkowski inequality (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Minkowski_inequality"
    - title: "J. Demmel, MA221 Lecture 3: Vector Norms"
      url: "https://people.eecs.berkeley.edu/~demmel/ma221_Fall10/Lectures/Lecture_03.html"
    - title: "G. Zitelli, Math 641 Functional Analysis, Part I"
      url: "https://www.math.uci.edu/~gzitelli/pdf/641/641part1.pdf"
pipeline_run: null
---

## Statement

Let $n \in \mathbb{N}$ and let $p \in \mathbb{Q}$ with $p \ge 1$, with the norms
of [[def-p-norms-on-rn]]. Then:

1. $\lVert\cdot\rVert_p$ is a norm on $\mathbb{R}^{n}$
   ([[def-norm-and-normed-space]]).
2. For $n \ge 1$, $\lVert\cdot\rVert_\infty$ is a norm on $\mathbb{R}^{n}$.
3. **The dictionary.** For $n \ge 1$ and all $x, y \in \mathbb{R}^{n}$,
   $$\lVert x-y\rVert_1 = d_1(x,y), \qquad \lVert x-y\rVert_2 = d_2(x,y), \qquad \lVert x-y\rVert_\infty = d_\infty(x,y),$$
   where $d_1$, $d_2$, $d_\infty$ are the metrics of the published
   [[lem-metrics-on-rn]]. So the metric induced by each of these three norms
   ([[def-norm-and-normed-space]]) **is** the correspondingly named published
   metric, not merely one equivalent to it.

**Consequence, used repeatedly below and stated once here.** By clause 3 at
$p = 2$, the metric space $(\mathbb{R}^{n}, d_2)$ of the published metric-spaces
page and the metric space underlying the normed space
$(\mathbb{R}^{n}, \lVert\cdot\rVert_2)$ of this page are the same object. Hence
completeness ([[thm-euclidean-space-complete]] clause 2), Heine-Borel
([[thm-heine-borel-rn]] clause 2) and the compactness equivalences
([[thm-metric-compactness-equivalences]]) are statements about this page's normed
space, **with their hypothesis $n \ge 1$ inherited unchanged and not weakened**.
Nothing below cites any of those three theorems for $n = 0$.

**Why this lemma exists.** Without it the library would hold a norm-induced
metric on $\mathbb{R}^{n}$ and a separately published metric on the same set with
no recorded relation, and every later citation would have to guess which was
meant. The proof of clause 3 is a comparison of two written expressions; the
value is that the comparison is made and recorded.

## Facts & Assumptions

**Given:** A natural number $n$, a rational $p \ge 1$, vectors $x, y \in \mathbb{R}^{n}$ and a real $\lambda$; write $S(x) := \sum_{k<n}|x_k|^{p}$, so that $\lVert x\rVert_p = S(x)^{1/p}$ ([[def-p-norms-on-rn]], [[def-finite-sum]]).

[A1] For clauses 2 and 3, $n \ge 1$, so that $\{|x_k| : k<n\}$ is a nonempty finite set of reals ([[def-p-norms-on-rn]], [[lem-metrics-on-rn]]).

[L1] Rational powers ([[def-rational-power]], [[lem-rational-power-laws]]): for $a, b \ge 0$ and rationals $r, s > 0$ one has $a^{r} \ge 0$, $(ab)^{r} = a^{r}b^{r}$, $0^{r} = 0$, and $a^{r} > 0$ when $a > 0$; and for $a > 0$, $(a^{r})^{s} = a^{rs}$ and $a^{1} = a$.

[L2] Monotonicity in the base ([[lem-rational-power-monotone]] clause 2): for a rational $r > 0$ and reals $0 \le a < b$ one has $a^{r} < b^{r}$; hence $a \le b$ implies $a^{r} \le b^{r}$, the case $a = b$ being trivial, and $a^{r} = 0$ only for $a = 0$.

[L3] Laws of finite sums ([[lem-finite-sum-laws]], [[def-finite-sum]]): additivity, scaling, monotonicity; a sum of nonnegative terms is nonnegative, each single term is at most such a sum, and a sum of nonnegative terms that vanishes has every term $0$.

[L4] Minkowski's inequality for finite sums at rational $p \ge 1$ ([[thm-minkowski-finite]]): $\bigl(\sum_{k<n}|a_k+b_k|^{p}\bigr)^{1/p} \le \bigl(\sum_{k<n}|a_k|^{p}\bigr)^{1/p} + \bigl(\sum_{k<n}|b_k|^{p}\bigr)^{1/p}$.

[L5] Absolute value ([[lem-of-abs-value]], [[def-abs-value]], [[lem-of-triangle-inequality]]): $|t| \ge 0$; $|t| = 0$ exactly when $t = 0$; $|st| = |s|\,|t|$; $|s+t| \le |s|+|t|$; and $|t|^{2} = t^{2}$.

[L6] Maxima ([[lem-finite-set-has-max]], [[def-max-min]]): a nonempty finite set of reals has a maximum, the maximum belongs to the set and bounds it above, and a set with an upper bound belonging to it has that element as its maximum.

[L7] Order arithmetic: multiplying an inequality by a nonnegative real preserves it ([[lem-of-sign-rules]] in its strict form, together with the case of equality settled by totality), and $\le$ is transitive ([[def-ordered-field]]).

[L8] The norm axioms (N1), (N2), (N3) ([[def-norm-and-normed-space]]); $\lVert\cdot\rVert_2$ agrees with the Euclidean norm of [[def-euclidean-inner-product]], and is a norm by [[thm-cauchy-schwarz-and-the-euclidean-norm]]; square roots are the rational power at exponent $1/2$ ([[thm-of-square-roots]], [[def-p-norms-on-rn]]).

[L9] The published metrics on $\mathbb{R}^{n}$ for $n \ge 1$ are $d_1(x,y) = \sum_{k<n}|x_k-y_k|$, $d_2(x,y) = \sqrt{\sum_{k<n}(x_k-y_k)^{2}}$ and $d_\infty(x,y) = \max\{|x_k-y_k| : k<n\}$, and each is a metric ([[lem-metrics-on-rn]], [[def-metric-space]], [[def-metric-topology]]).

## Proof

**Proof technique:** direct.

1.1 Every term $|x_k|^{p}$ is nonnegative, so $S(x) \ge 0$ and $\lVert x\rVert_p = S(x)^{1/p}$ is defined and nonnegative. [L1, L3]

1.2 $S(x) = 0$ holds exactly when $|x_k|^{p} = 0$ for every $k<n$, a vanishing sum of nonnegative terms having every term $0$; and $|x_k|^{p} = 0$ exactly when $|x_k| = 0$, that is exactly when $x_k = 0$. [L1, L2, L3, L5]

1.3 For every $k<n$, $|(\lambda x)_k|^{p} = \bigl(|\lambda|\,|x_k|\bigr)^{p} = |\lambda|^{p}|x_k|^{p}$, so $S(\lambda x) = |\lambda|^{p}S(x)$ by scaling of finite sums. [L1, L3, L5]

1.4 Instantiating [L4] at $a_k := x_k$ and $b_k := y_k$, and using $(x+y)_k = x_k+y_k$, gives $\lVert x+y\rVert_p \le \lVert x\rVert_p + \lVert y\rVert_p$, which is axiom (N3) for $\lVert\cdot\rVert_p$. [L4, L8]

1.5 Under [A1] the set $\{|x_k| : k<n\}$ is nonempty and finite, so $\lVert x\rVert_\infty$ exists, is one of the $|x_k|$, and satisfies $|x_k| \le \lVert x\rVert_\infty$ for every $k<n$; in particular $\lVert x\rVert_\infty \ge 0$. [A1, L5, L6]

1.6 Under [A1], $\lVert x-y\rVert_1 = \sum_{k<n}|x_k-y_k|$ by the case $p=1$ of the definition, and that is the written expression for $d_1(x,y)$. [L1, L9]

1.7 Under [A1], $\lVert x-y\rVert_2 = \bigl(\sum_{k<n}|x_k-y_k|^{2}\bigr)^{1/2} = \sqrt{\sum_{k<n}(x_k-y_k)^{2}}$, using $|t|^{2} = t^{2}$ and the identification of the exponent $1/2$ with the nonnegative square root, and that is the written expression for $d_2(x,y)$. [L5, L8, L9]

1.8 Under [A1], $\lVert x-y\rVert_\infty = \max\{|x_k-y_k| : k<n\}$ by definition, and that is the written expression for $d_\infty(x,y)$. [L9]

2.1 $\lVert x\rVert_p = 0$ holds exactly when $S(x) = 0$, since $S(x) > 0$ would give $S(x)^{1/p} > 0$ and $0^{1/p} = 0$. [step 1.1, L1, L2]

2.2 Under [A1]: $\lVert x\rVert_\infty = 0$ forces $|x_k| \le 0$ and $|x_k| \ge 0$ for every $k<n$, hence $x = 0$; and $\lVert 0\rVert_\infty = 0$. This is (N1) for $\lVert\cdot\rVert_\infty$. [step 1.5, L5, L8]

2.3 Under [A1]: for every $k<n$, $|(\lambda x)_k| = |\lambda|\,|x_k| \le |\lambda|\,\lVert x\rVert_\infty$, and choosing $j<n$ with $|x_j| = \lVert x\rVert_\infty$ gives $|(\lambda x)_j| = |\lambda|\,\lVert x\rVert_\infty$; so $|\lambda|\lVert x\rVert_\infty$ belongs to the set and bounds it above, whence $\lVert \lambda x\rVert_\infty = |\lambda|\lVert x\rVert_\infty$. This is (N2) for $\lVert\cdot\rVert_\infty$. [step 1.5, L5, L6, L7]

2.4 Under [A1]: for every $k<n$, $|(x+y)_k| = |x_k+y_k| \le |x_k| + |y_k| \le \lVert x\rVert_\infty + \lVert y\rVert_\infty$; choosing $j<n$ with $|(x+y)_j| = \lVert x+y\rVert_\infty$ gives $\lVert x+y\rVert_\infty \le \lVert x\rVert_\infty + \lVert y\rVert_\infty$, which is (N3) for $\lVert\cdot\rVert_\infty$. [step 1.5, L5, L6, L7]

3.1 By steps 2.1 and 1.2, $\lVert x\rVert_p = 0$ exactly when $x_k = 0$ for every $k<n$, that is exactly when $x = 0$; this is axiom (N1) for $\lVert\cdot\rVert_p$. [step 2.1, step 1.2, L8]

3.2 Steps 2.2, 2.3 and 2.4 are (N1), (N2) and (N3) for $\lVert\cdot\rVert_\infty$ under [A1], so clause 2 holds. [step 2.2, step 2.3, step 2.4, A1, L8]

4.1 If $\lambda = 0$ then $\lambda x = 0$ and both sides of (N2) are $0$ by step 3.1; if $\lambda \ne 0$ then $|\lambda| > 0$, and step 1.3 with the power laws gives $\lVert \lambda x\rVert_p = \bigl(|\lambda|^{p}S(x)\bigr)^{1/p} = \bigl(|\lambda|^{p}\bigr)^{1/p}S(x)^{1/p} = |\lambda|^{p\cdot(1/p)}\lVert x\rVert_p = |\lambda|\,\lVert x\rVert_p$; this is axiom (N2). [step 1.3, step 3.1, L1, L5, L8]

5.1 Steps 3.1, 4.1 and 1.4 are (N1), (N2) and (N3) for $\lVert\cdot\rVert_p$, so clause 1 holds. [step 1.4, step 3.1, step 4.1, L8]

6.1 Steps 1.6, 1.7 and 1.8 give clause 3, and with steps 5.1 and 3.2 all three clauses are proved; in particular the metric induced by $\lVert\cdot\rVert_2$ on $\mathbb{R}^{n}$ for $n \ge 1$ is the published $d_2$, which is the consequence recorded in the Statement. [step 5.1, step 3.2, step 1.6, step 1.7, step 1.8, L9] ∎

## Remarks

- **What the consequence does and does not license.** Because the two metric spaces are literally the same, a published theorem about $(\mathbb{R}^{n}, d_2)$ may be quoted here verbatim. It may **not** be quoted with a weaker hypothesis: [[thm-euclidean-space-complete]], [[thm-heine-borel-rn]] and [[lem-metrics-on-rn]] are all stated for $n \ge 1$ only, because $d_\infty$ is a maximum over an empty index set at $n = 0$, and every item on this page that uses one of them carries $n \ge 1$ in its own statement.

- **Clause 1 holds at $n = 0$ and clause 2 does not apply there.** At $n = 0$ every $\lVert\cdot\rVert_p$ is the zero function on the one-element space $\mathbb{R}^{0}$, which is the unique norm on the zero space ([[def-norm-and-normed-space]]); $\lVert\cdot\rVert_\infty$ is not defined there at all.

- **The route to (N3) differs between the two families, and that is not an accident.** For $\lVert\cdot\rVert_p$ the triangle inequality is Minkowski's inequality, a genuine theorem about rational powers; for $\lVert\cdot\rVert_\infty$ it is the elementary argument of step 2.4, that a maximum of sums is at most the sum of the maxima. The second argument is the one that needs a nonempty index set.
````

### `lem-pigeonhole`

````markdown
---
id: lem-pigeonhole
kind: lemma
title: "The pigeonhole principle on $\\mathbb{N}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-natural-numbers, def-nat-order, thm-induction-principle,
       lem-nat-order-is-membership, lem-nat-trichotomy,
       lem-nat-nonzero-is-successor, lem-nat-transitive-irreflexive,
       def-injection-surjection-bijection, def-equinumerous]
justified_by: []
forward_refs: [def-cardinal]
aliases: [lem-pigeonhole-principle, pigeonhole-principle]
landmark: true
short: "no injection $\\sigma(n)\\to n$"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-07-26
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-25
sources:
  scraped: []
  references:
    - title: "J. K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
    - title: "J. Lebl, Basic Analysis: Introduction to Real Analysis, basic set theory"
      url: "https://www.jirka.org/ra/html/sec_basicset.html"
    - title: "Pigeonhole principle (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Pigeonhole_principle"
    - title: "Finite set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Finite_set"
    - title: "Dedekind-infinite set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Dedekind-infinite_set"
    - title: "T. Tao, Analysis I, 3rd ed., §3.6 (Cardinality of sets)"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Statement

Let $\mathbb{N}$ be the von Neumann naturals, with $0 = \varnothing$ and
$\sigma(n) = n \cup \{n\}$ ([[def-natural-numbers]]), and let $<$ be the order of
[[def-nat-order]], so that $m < n \iff m \in n$ and
$n = \{\, m \in \mathbb{N} : m < n \,\}$ ([[lem-nat-order-is-membership]]).
Write $\approx$ for equinumerosity ([[def-equinumerous]]). Then:

1. for every $n \in \mathbb{N}$ there is **no injection** $\sigma(n) \to n$;
2. if $m < n$ then there is no injection $n \to m$;
3. if $n \approx m$ with $n, m \in \mathbb{N}$, then $n = m$;
4. $\mathbb{N} \not\approx n$ for every $n \in \mathbb{N}$;
5. no natural number is equinumerous with a proper subset of itself: if
   $A \subseteq n$ and $n \approx A$, then $A = n$.

Claim 1 is the pigeonhole principle in its sharpest form, that $n + 1$ pigeons do
not fit injectively into $n$ holes; the other four are the consequences the
library actually quotes. Claim 3 says a finite set is equinumerous with exactly
one natural number, so "the number of elements" is well defined. Claim 4 says
$\mathbb{N}$ is infinite. Claim 5 says no natural number is Dedekind-infinite.

**Why this is proved here.** The next item on this page defines finiteness as
equinumerosity with a natural number, and the three size classes it introduces
are exhaustive by construction but mutually exclusive only because of claim 4.
Several later items also need claim 3 or claim 5. The principle is elementary and
belongs with the naturals, but it is about counting rather than about order, so
it is proved here, immediately before finiteness is defined, from induction and
the identification of the order with membership alone. Nothing below uses
ordinals, cardinals, or any later material.

## Facts & Assumptions

**Given:** $\mathbb{N}$ with $0 = \varnothing$ and $\sigma(n) = n \cup \{n\}$, and $\mathbb{N}$ closed under $\sigma$, since it is an inductive set ([[def-natural-numbers]]); the order $m \le n \iff \exists k \in \mathbb{N}\ (m + k = n)$ and $m < n \iff (m \le n$ and $m \ne n)$ ([[def-nat-order]]); and $A \approx B$ meaning that a bijection $A \to B$ exists ([[def-equinumerous]]).

[L1] Induction: if $P(0)$ holds and $P(n)$ implies $P(\sigma(n))$ for every $n \in \mathbb{N}$, then $P(n)$ holds for every $n \in \mathbb{N}$ ([[thm-induction-principle]]).

[L2] On $\mathbb{N}$ the order is membership ([[lem-nat-order-is-membership]]): $\mathbb{N}$ is a transitive set, so every element of a natural number is again a natural number; $m < n \iff m \in n$; $m \le n \iff m \subseteq n$; and consequently $n = \{\, m \in \mathbb{N} : m < n \,\}$.

[L3] Every natural number is a transitive set and satisfies $n \notin n$ ([[lem-nat-transitive-irreflexive]]).

[L4] Trichotomy: for all $m, n \in \mathbb{N}$ exactly one of $m < n$, $m = n$, $n < m$ holds ([[lem-nat-trichotomy]]).

[L5] Every natural number $n \ne 0$ equals $\sigma(m)$ for some $m \in \mathbb{N}$ ([[lem-nat-nonzero-is-successor]]).

[L6] Maps ([[def-injection-surjection-bijection]]): $f$ is injective when $f(x) = f(y)$ forces $x = y$, and bijective when it is injective and surjective, so every bijection is an injection; a composite of two injections is an injection, a composite of two bijections is a bijection, and a bijection has a two sided inverse which is again a bijection. Two immediate consequences of the definition of injectivity are used below: the restriction of an injection to a subset of its domain is an injection, injectivity being a condition on pairs of points of the domain; and a map whose values all lie in a subset $C$ of its codomain may be read as a map into $C$, without affecting injectivity.

## Proof

**Proof technique:** direct.

1.1 Transpositions. For a set $X$ and $a, b \in X$ define $\tau^{X}_{a,b} : X \to X$ by $\tau^{X}_{a,b}(a) = b$, $\tau^{X}_{a,b}(b) = a$, and $\tau^{X}_{a,b}(x) = x$ for $x \notin \{a, b\}$; the clauses agree where they overlap (if $a = b$ all three read $a \mapsto a$, so the map is the identity), so this is a well defined function, and $\tau^{X}_{a,b} \circ \tau^{X}_{a,b} = \mathrm{id}_X$, whence $\tau^{X}_{a,b}$ is a bijection of $X$ onto itself. It carries $X \setminus \{a\}$ onto $X \setminus \{b\}$: when $a = b$ this is the identity statement, and when $a \ne b$ the elements of $X \setminus \{a\}$ are $b$, sent to $a$, together with the $x \notin \{a, b\}$, each fixed, so the image is $\{a\} \cup (X \setminus \{a, b\}) = X \setminus \{b\}$. [construct]

1.2 Base case of claim 1. Here $\sigma(0) = 0 \cup \{0\} = \{0\}$ and $0 = \varnothing$, so a function $f : \sigma(0) \to 0$ would have to supply a value $f(0) \in \varnothing$, and $\varnothing$ has no elements; hence there is no function $\sigma(0) \to 0$ at all, injective or not. [given]

1.3 Inductive step, hypotheses. Fix $n \in \mathbb{N}$, assume there is no injection $\sigma(n) \to n$, and suppose towards a contradiction that some $f : \sigma(\sigma(n)) \to \sigma(n)$ is injective. Note $\sigma(\sigma(n)) = \sigma(n) \cup \{\sigma(n)\}$, so $\sigma(n) \subseteq \sigma(\sigma(n))$ and $\sigma(n) \in \sigma(\sigma(n))$; note also $n \in \sigma(n)$. [assume-hyp, given]

2.1 Normalising $f$ at the top point. Put $a = f(\sigma(n))$, an element of $\sigma(n)$ because $\sigma(n)$ is the codomain of $f$, and let $\tau = \tau^{\sigma(n)}_{a,n}$, which is legitimate since $a$ and $n$ both lie in $\sigma(n)$. Then $f' = \tau \circ f : \sigma(\sigma(n)) \to \sigma(n)$ is a composite of an injection with a bijection, hence injective, and $f'(\sigma(n)) = \tau(a) = n$. [step 1.1, step 1.3, L6]

2.2 Every $k \in \sigma(n)$ satisfies $k \ne \sigma(n)$: were $k = \sigma(n)$ we would have $\sigma(n) \in \sigma(n)$, and no natural number is a member of itself, $\sigma(n)$ included, since $\mathbb{N}$ is closed under $\sigma$. [step 1.3, L3, given]

3.1 Let $k \in \sigma(n)$. Then $k \in \sigma(\sigma(n))$, so $f'(k)$ is defined; and $k \ne \sigma(n)$, so injectivity of $f'$ gives $f'(k) \ne f'(\sigma(n)) = n$. Since $f'(k) \in \sigma(n) = n \cup \{n\}$, this forces $f'(k) \in n$. Hence the restriction of $f'$ to $\sigma(n)$ takes all its values in $n$ and is an injection $\sigma(n) \to n$. [step 2.1, step 2.2, L6]

4.1 Claim 1. The injection produced in step 3.1 contradicts the assumption made in step 1.3, so no injection $\sigma(\sigma(n)) \to \sigma(n)$ exists. Since $n$ was arbitrary, this is exactly the induction step for the property $P(n)$ that there is no injection $\sigma(n) \to n$, and step 1.2 is $P(0)$; so $P(n)$ holds for every $n \in \mathbb{N}$. [step 1.2, step 1.3, step 3.1, L1]

5.1 Claim 2. Let $m < n$. Then $m \in n$, and $m \le n$ gives $m \subseteq n$, so $\sigma(m) = m \cup \{m\} \subseteq n$. If some $g : n \to m$ were injective, its restriction to $\sigma(m)$ would be an injection $\sigma(m) \to m$, which step 4.1 forbids. Hence there is no injection $n \to m$. [step 4.1, L2, L6]

5.2 Claim 4. Since $\mathbb{N}$ is closed under $\sigma$ we have $\sigma(n) \in \mathbb{N}$, and $\mathbb{N}$ is a transitive set, so $\sigma(n) \subseteq \mathbb{N}$. If some $F : \mathbb{N} \to n$ were a bijection, it would in particular be an injection, and its restriction to $\sigma(n)$ would be an injection $\sigma(n) \to n$, which step 4.1 forbids. Hence $\mathbb{N} \not\approx n$. [step 4.1, L2, L6, given]

5.3 Claim 5. Let $A \subseteq n$ with $n \approx A$, and suppose $A \ne n$. Then $n \ne 0$, since the only subset of $0 = \varnothing$ is $\varnothing = 0$ itself, so $n = \sigma(m)$ for some $m \in \mathbb{N}$; moreover $m \in \sigma(m) = n$ and $m \notin m$, so $n \setminus \{m\} = (m \cup \{m\}) \setminus \{m\} = m$. Choose $j \in n \setminus A$, possible because $A \subseteq n$ and $A \ne n$, and let $h : n \to A$ be a bijection; since $j \notin A$ we have $A \subseteq n \setminus \{j\}$, so $h$ read as a map into $n \setminus \{j\}$ is an injection $n \to n \setminus \{j\}$. The transposition $\tau^{n}_{j,m}$ is a bijection of $n$ carrying $n \setminus \{j\}$ onto $n \setminus \{m\} = m$, so its composite with $h$ is an injection $n \to m$, that is an injection $\sigma(m) \to m$, which step 4.1 forbids. Hence $A = n$. [step 1.1, step 4.1, L3, L5, L6, choose]

6.1 Claim 3. Let $n, m \in \mathbb{N}$ with $n \approx m$, and suppose $n \ne m$. By trichotomy either $m < n$ or $n < m$. If $m < n$, a bijection $n \to m$ is in particular an injection $n \to m$, which step 5.1 forbids. If $n < m$, a bijection $n \to m$ has an inverse bijection $m \to n$, which is in particular an injection $m \to n$, and step 5.1 forbids that too, with the roles of $m$ and $n$ interchanged. Hence $n = m$. [step 5.1, L4, L6]

7.1 Claims 1, 2, 3, 4 and 5 are established in steps 4.1, 5.1, 6.1, 5.2 and 5.3 respectively. [step 4.1, step 5.1, step 5.2, step 5.3, step 6.1] ∎

## Remarks

- **Where the work is.** Everything rests on claim 1, and claim 1 rests on one device: a map into $\sigma(n)$ can be modified by a transposition of the codomain so that the top point $\sigma(n)$ goes to the top value $n$, after which the rest of the map misses $n$ and lands in $n$. Without that normalisation the inductive hypothesis does not apply, since an arbitrary injection $\sigma(\sigma(n)) \to \sigma(n)$ need not send anything to $n$.

- **No choice is used.** Every map built above is defined by an explicit rule: the transposition is given by three cases, and the only element selected anywhere is a single $j \in n \setminus A$ in step 5.3, a single choice from a nonempty set, which needs no choice principle.

- **Claim 5 and the two notions of infinity.** A set is *Dedekind-infinite* when it is equinumerous with a proper subset of itself. Claim 5 says no natural number is, and transporting along a bijection extends this to every finite set, which is the ZF half of the comparison discussed in [[fs-infinite-has-countable-subset-in-zf]]: Dedekind-infinite implies infinite outright in ZF, while the converse is not a theorem of ZF unless ZF is inconsistent, that item's conclusion being conditional on the consistency of ZF and resting on an external independence result quoted rather than proved. The successor map $\sigma : \mathbb{N} \to \mathbb{N} \setminus \{0\}$ shows $\mathbb{N}$ itself is Dedekind-infinite, so the restriction to natural numbers in claim 5 is essential.

- **Relation to the ordinals page.** [[def-cardinal]] calls an ordinal $\kappa$ a cardinal when no $\alpha \in \kappa$ satisfies $\alpha \approx \kappa$. Claim 3 makes every natural number a cardinal and claim 4 makes $\omega$ one, which is what licenses the traditional $\aleph_0 = \omega$. That page comes much later in the library; the pointer here is orientation only, and nothing above rests on it.
````

### `lem-standard-basis-of-f-n`

````markdown
---
id: lem-standard-basis-of-f-n
kind: lemma
title: "The standard list $e : n \\to F^{n}$ with $e_i(i) = 1_F$ and $e_i(j) = 0_F$ for $j \\ne i$ is an ordered basis of $F^{n}$; hence $\\dim_F F^{n} = n$, and $F^{0}$ is the zero space with basis $\\varnothing$ and dimension $0$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-linear-basis, def-dimension, def-linear-independence, thm-unique-coordinates-with-respect-to-an-ordered-basis, def-function-space, def-linear-combination-and-span, def-sum-of-linear-subspaces, def-monoid-finite-product, lem-restriction-of-scalars, def-vector-space, def-field, lem-vector-space-elementary-consequences, thm-induction-principle, def-natural-numbers, lem-nat-order-is-membership, def-injection-surjection-bijection, def-equinumerous, def-countable]
justified_by: []
aliases: [lem-standard-basis, def-standard-unit-vectors]
landmark: true
short: "$\\dim_F F^{n} = n$"
proof_strategy: direct
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
    - title: "Standard basis (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Standard_basis"
    - title: "S. Axler, Linear Algebra Done Right, 4th ed., Ch. 2"
      url: "https://linear.axler.net/"
    - title: "Cambridge University Press excerpt: Vector spaces and bases"
      url: "https://assets.cambridge.org/97810092/43902/excerpt/9781009243902_excerpt.pdf"
pipeline_run: null
---

## Statement

Let $F$ be a field ([[def-field]]), let $n \in \mathbb{N}$ and let $F^{n}$ be the
function space on the von Neumann natural $n = \{0, \dots, n-1\}$, with the
pointwise operations ([[def-function-space]], [[def-natural-numbers]],
[[lem-nat-order-is-membership]]). For $i < n$ define the **standard unit vector**
$e_i \in F^{n}$ by

$$e_i(i) = 1_F, \qquad e_i(j) = 0_F \ \text{ for } j < n \text{ with } j \ne i .$$

Then:

1. **Finite sums in a function space are pointwise.** For every set $X$, every
   $p \in \mathbb{N}$, every list $u : p \to F^{X}$ and every $j \in X$,
   $$\Bigl(\sum_{k<p} u_k\Bigr)(j) \;=\; \sum_{k<p} u_k(j),$$
   the right-hand sum being taken in $(F,+,0_F)$. (Stated here for an arbitrary
   $X$ because the companion page needs it at $X = \mathbb{N}$.)
2. $e : n \to F^{n}$ is an ordered basis of $F^{n}$ ([[def-linear-basis]]); in
   particular $e$ is injective and its image $e[n] = \{\, e_i : i < n \,\}$ is a
   basis of $F^{n}$ with $e[n] \approx n$ ([[def-equinumerous]]);
3. for every $\lambda : n \to F$ and every $j < n$,
   $\bigl(\sum_{i<n}\lambda_i e_i\bigr)(j) = \lambda_j$; equivalently the
   coordinate list of $x \in F^{n}$ with respect to the ordered basis $e$
   ([[thm-unique-coordinates-with-respect-to-an-ordered-basis]]) is
   $i \mapsto x(i)$;
4. $F^{n}$ is finite-dimensional over $F$ with $\dim_F F^{n} = n$
   ([[def-dimension]]);
5. at $n = 0$ this reads: $F^{0}$ has exactly one element, the empty function,
   so $F^{0}$ is the zero space, the empty list is its ordered basis,
   $\varnothing$ is its basis and $\dim_F F^{0} = 0$.

Every index runs from $0$, so the coordinates of an element of $F^{n}$ are
$x_0, \dots, x_{n-1}$ and no statement above is restricted to $n \ge 1$.

## Facts & Assumptions

**Given:** A field $F$, a natural number $n$, the vector space $F^{n}$ with pointwise operations, and the vectors $e_i$ for $i < n$.

[L1] $F^{X}$ is a vector space over $F$ with $(x+y)(j) = x(j)+y(j)$, $(\lambda x)(j) = \lambda\,x(j)$ and zero the constant function at $0_F$; two elements are equal exactly when they agree at every point; and $F^{0}$ has exactly one element, the empty function, which is $0_{F^{0}}$ ([[def-function-space]], [[def-vector-space]]).

[L2] Finite sums: $\sum_{k<0}u_k$ is the zero vector and $\sum_{k<\sigma(p)}u_k = \bigl(\sum_{k<p}u_k\bigr) + u_p$, in any vector space ([[def-monoid-finite-product]], [[def-linear-combination-and-span]]).

[L3] $F$ is a vector space over itself, with the field addition and multiplication ([[lem-restriction-of-scalars]], claim 1), so the finite sums of $\mathbb{N}$-indexed lists of scalars are available in $(F,+,0_F)$ and satisfy (F1) and (F3); in particular a list of scalars vanishing off a single index sums to its value at that index ([[def-sum-of-linear-subspaces]]).

[L4] In $F$: $\lambda 1_F = \lambda$ and $\lambda 0_F = 0_F$ for every $\lambda \in F$ ([[def-field]], [[lem-vector-space-elementary-consequences]]).

[L5] A list $v : n \to V$ is an ordered basis of $V$ if and only if every $x \in V$ is $\sum_{i<n}\lambda_i v_i$ for exactly one $\lambda : n \to F$; an ordered basis is injective and its image is a basis with $v[n] \approx n$ ([[thm-unique-coordinates-with-respect-to-an-ordered-basis]], [[def-linear-basis]], [[def-linear-independence]], [[def-injection-surjection-bijection]]).

[L6] $\dim_F V$ is the unique $p \in \mathbb{N}$ with a basis $B \approx p$, defined when $V$ has a finite basis ([[def-dimension]], [[def-countable]]).

[L7] Induction on $\mathbb{N}$ ([[thm-induction-principle]]).

## Proof

**Proof technique:** direct.

1.1 Claim 1, that a finite sum in $F^{X}$ is computed pointwise: for every $p \in \mathbb{N}$, every list $u : p \to F^{X}$ and every $j \in X$, $\bigl(\sum_{k<p}u_k\bigr)(j) = \sum_{k<p}u_k(j)$, the right-hand sum being taken in $(F,+,0_F)$. By induction on $p$: at $p = 0$ the left side is the value at $j$ of the constant function $0_F$ and the right side is the empty sum $0_F$; and if it holds at $p$, then $\bigl(\sum_{k<\sigma(p)}u_k\bigr)(j) = \bigl(\sum_{k<p}u_k + u_p\bigr)(j) = \bigl(\sum_{k<p}u_k\bigr)(j) + u_p(j) = \sum_{k<p}u_k(j) + u_p(j) = \sum_{k<\sigma(p)}u_k(j)$, using pointwise addition and the recursion. [L1, L2, L3, L7]

2.1 Evaluating a combination of the $e_i$. Let $\lambda : n \to F$ and $j < n$. By step 1.1 and pointwise scalar multiplication, $\bigl(\sum_{i<n}\lambda_i e_i\bigr)(j) = \sum_{i<n}(\lambda_i e_i)(j) = \sum_{i<n}\lambda_i\, e_i(j)$. The list of scalars $i \mapsto \lambda_i\,e_i(j)$ takes the value $\lambda_i 0_F = 0_F$ at every $i \ne j$ and the value $\lambda_j 1_F = \lambda_j$ at $i = j$, so it vanishes off the single index $j$ and therefore sums to $\lambda_j$. Hence $\bigl(\sum_{i<n}\lambda_i e_i\bigr)(j) = \lambda_j$ for every $j < n$. [step 1.1, L1, L3, L4]

3.1 Existence and uniqueness of coordinates. Given $x \in F^{n}$, put $\lambda_i := x(i)$; by step 2.1 the vectors $\sum_{i<n}\lambda_i e_i$ and $x$ agree at every $j < n$, hence are equal. And if $\sum_{i<n}\lambda_i e_i = \sum_{i<n}\mu_i e_i$, then evaluating both sides at $j$ and using step 2.1 gives $\lambda_j = \mu_j$ for every $j < n$. So every $x \in F^{n}$ is $\sum_{i<n}\lambda_i e_i$ for exactly one $\lambda : n \to F$. [step 2.1, L1]

4.1 Claims 2 and 3. Step 2.1 is claim 3, and by the coordinate characterisation of an ordered basis, step 3.1 says exactly that $e$ is an ordered basis of $F^{n}$; hence $e$ is injective, $e[n]$ is a basis of $F^{n}$, and $e[n] \approx n$. [step 2.1, step 3.1, L5]

5.1 Claims 4 and 5. By step 4.1 the space $F^{n}$ has a basis with $n$ elements, so it is finite-dimensional and $\dim_F F^{n} = n$. At $n = 0$ the space $F^{0}$ has exactly one element, the empty function, which is its zero vector, so $F^{0}$ is the zero space; the list $e$ is then the empty list, its image is $\varnothing$, and $\dim_F F^{0} = 0$. [step 4.1, L1, L6] ∎

## Remarks

- **The indices start at $0$ because a natural number is the set of its predecessors.** $F^{n}$ is the function space $F^{X}$ at $X = n = \{0,\dots,n-1\}$ ([[def-function-space]], [[lem-nat-order-is-membership]]), so an element of $F^{n}$ is a function on $\{0,\dots,n-1\}$ and there is no $e_n$. Reading the standard basis off a $1$-indexed source would put a vector outside the space at one end and lose one at the other.

- **Step 1.1 is not a triviality to be skipped.** That a finite sum of functions is the pointwise finite sum is a statement about the recursion defining [[def-monoid-finite-product]] in two different monoids, and it is proved by induction. Every evaluation argument on this page and on the companion page rests on it.

- **This is the concrete counterweight to [[cor-every-vector-space-has-a-basis]].** Here a basis is written down and no choice principle is used anywhere; there a basis is produced by Zorn's lemma and none is exhibited. The companion page carries both extremes for infinite-dimensional spaces as well: an explicit infinite basis for the eventually zero families, and a basis of $\mathbb{R}$ over $\mathbb{Q}$ that no argument exhibits.
````

### `lem-vector-space-elementary-consequences`

````markdown
---
id: lem-vector-space-elementary-consequences
kind: lemma
title: "In any vector space $0_F v = 0_V$, $\\lambda 0_V = 0_V$, $(-\\lambda)v = -(\\lambda v)$, $(-1_F)v = -v$, and $\\lambda v = 0_V$ forces $\\lambda = 0_F$ or $v = 0_V$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-vector-space, def-field, def-group, lem-group-cancellation, lem-of-inverse-unique]
justified_by: []
aliases: []
landmark: false
short: "$0_F v = 0_V$, $(-1_F)v = -v$"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-08-02
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Vector space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Vector_space"
    - title: "S. Axler, Linear Algebra Done Right, 4th ed., Ch. 1"
      url: "https://linear.axler.net/"
pipeline_run: null
---

## Statement

Let $V$ be a vector space over a field $F$ ([[def-vector-space]]). For all
$\lambda \in F$ and $v \in V$:

1. $0_F v = 0_V$;
2. $\lambda 0_V = 0_V$;
3. $(-\lambda)v = -(\lambda v)$, and also $\lambda(-v) = -(\lambda v)$;
4. $(-1_F)v = -v$;
5. if $\lambda v = 0_V$ then $\lambda = 0_F$ or $v = 0_V$.

Here $0_F$ and $1_F$ are the additive and multiplicative identities of $F$, $0_V$
is the zero vector, $-\lambda$ is the additive inverse of $\lambda$ in $F$, and
$-v$ is the additive inverse of $v$ in the abelian group $(V,+,0_V)$.

## Facts & Assumptions

**Given:** A field $F$, a vector space $V$ over $F$ with axioms (V1)–(V5) ([[def-vector-space]]), a scalar $\lambda \in F$ and a vector $v \in V$.

[L1] The four scalar axioms: $\lambda(u+w) = \lambda u + \lambda w$ (V2); $(\lambda+\mu)w = \lambda w + \mu w$ (V3); $(\lambda\mu)w = \lambda(\mu w)$ (V4); $1_F w = w$ (V5) ([[def-vector-space]]).

[L2] $(V,+,0_V)$ is an abelian group (V1): addition is associative and commutative, $0_V$ is a two-sided identity, and each $w \in V$ has an additive inverse $-w$ with $w + (-w) = 0_V = (-w) + w$ ([[def-vector-space]], [[def-group]]).

[L3] Cancellation in a group, read additively: if $x + y = x + z$ then $y = z$, and if $y + x = z + x$ then $y = z$ ([[lem-group-cancellation]]).

[L4] Field arithmetic ([[def-field]]): $0_F + 0_F = 0_F$; $\mu + (-\mu) = 0_F$ for every $\mu \in F$; $1_F$ is the multiplicative identity; multiplication is associative; and every $\mu \ne 0_F$ has a multiplicative inverse $\mu^{-1}$ with $\mu^{-1}\mu = 1_F$.

[L5] The identities $0_F$, $1_F$ and the inverses $-\mu$, $\mu^{-1}$ of a field are unique, so those notations denote well-defined elements ([[lem-of-inverse-unique]]).

## Proof

**Proof technique:** direct.

1.1 By (V3) applied to $0_F$ and $0_F$, and $0_F + 0_F = 0_F$ in $F$: $0_F v + 0_F v = (0_F + 0_F)v = 0_F v$. [L1, L4]

1.2 Since $0_V$ is a two-sided identity for $+$: $0_F v = 0_V + 0_F v$. [L2]

1.3 By (V2) applied to $0_V$ and $0_V$, and $0_V + 0_V = 0_V$ in $V$: $\lambda 0_V + \lambda 0_V = \lambda(0_V + 0_V) = \lambda 0_V$. [L1, L2]

1.4 Since $0_V$ is a two-sided identity for $+$: $\lambda 0_V = 0_V + \lambda 0_V$. [L2]

1.5 The vector $\lambda v$ has an additive inverse $-(\lambda v)$ with $\lambda v + (-(\lambda v)) = 0_V$. [L2]

2.1 Combining steps 1.1 and 1.2 gives $0_F v + 0_F v = 0_V + 0_F v$; cancelling $0_F v$ on the right yields $0_F v = 0_V$, which is claim 1. [step 1.1, step 1.2, L3]

2.2 Combining steps 1.3 and 1.4 gives $\lambda 0_V + \lambda 0_V = 0_V + \lambda 0_V$; cancelling $\lambda 0_V$ on the right yields $\lambda 0_V = 0_V$, which is claim 2. [step 1.3, step 1.4, L3]

3.1 By (V3) applied to $\lambda$ and $-\lambda$, then $\lambda + (-\lambda) = 0_F$, then claim 1: $\lambda v + (-\lambda)v = (\lambda + (-\lambda))v = 0_F v = 0_V$. [step 2.1, L1, L4]

3.2 By (V2) applied to $v$ and $-v$, then $v + (-v) = 0_V$, then claim 2: $\lambda v + \lambda(-v) = \lambda(v + (-v)) = \lambda 0_V = 0_V$. [step 2.2, L1, L2]

3.3 Suppose $\lambda v = 0_V$ and $\lambda \ne 0_F$. Then $\lambda^{-1} \in F$ exists with $\lambda^{-1}\lambda = 1_F$, so $v = 1_F v = (\lambda^{-1}\lambda)v = \lambda^{-1}(\lambda v) = \lambda^{-1} 0_V = 0_V$, using (V5), (V4) and claim 2 in turn. [step 2.2, L1, L4, L5]

4.1 Steps 3.1 and 1.5 exhibit both $(-\lambda)v$ and $-(\lambda v)$ as vectors $x$ with $\lambda v + x = 0_V$; cancelling $\lambda v$ on the left gives $(-\lambda)v = -(\lambda v)$. [step 3.1, step 1.5, L3]

5.1 Likewise steps 3.2 and 1.5 give $\lambda v + \lambda(-v) = 0_V = \lambda v + (-(\lambda v))$, and cancelling $\lambda v$ on the left gives $\lambda(-v) = -(\lambda v)$; with step 4.1 this is claim 3. [step 3.2, step 1.5, L3]

5.2 Taking $\lambda = 1_F$ in step 4.1 and using (V5): $(-1_F)v = -(1_F v) = -v$, which is claim 4. [step 4.1, L1]

6.1 Claim 1 is step 2.1, claim 2 is step 2.2, claim 3 is steps 4.1 and 5.1, and claim 4 is step 5.2; for claim 5, if $\lambda v = 0_V$ then either $\lambda = 0_F$, or $\lambda \ne 0_F$ and step 3.3 gives $v = 0_V$. [step 2.1, step 2.2, step 3.3, step 4.1, step 5.1, step 5.2] ∎

## Remarks

- **None of this is an axiom.** The scalar axioms (V2)–(V5) say nothing directly about $0_F$, $0_V$ or negatives; each claim above is extracted by writing one element in two ways and cancelling in the abelian group $(V,+,0_V)$. That is the same device that gives $0 \cdot a = 0$ in a field ([[lem-of-zero-mult]]), and the proofs are deliberately parallel.

- **Claim 5 is what makes $\{0_V\}$ the only "degenerate" scalar multiple.** It is used below to compute $\operatorname{span}\{v\}$ ([[lem-span-of-a-single-vector]]) and, in that form, is the vector-space analogue of a field having no zero divisors ([[lem-of-no-zero-divisors]]). Its converse directions, claims 1 and 2, say that both degenerate products really are $0_V$.

- **Claim 4 is the bridge to the additive group.** It says the additive inverse of a vector is a scalar multiple of it, which is why closure under scalar multiplication already forces closure under negatives; that is what makes a linear subspace a subgroup of $(V,+)$ without a separate axiom.
````

### `thm-cauchy-schwarz-and-the-euclidean-norm`

````markdown
---
id: thm-cauchy-schwarz-and-the-euclidean-norm
kind: theorem
title: "Cauchy-Schwarz $\\lvert\\langle x,y\\rangle\\rvert \\le \\lVert x\\rVert_2\\lVert y\\rVert_2$ with its equality case, the triangle inequality for $\\lVert\\cdot\\rVert_2$, the parallelogram law and polarisation"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-euclidean-inner-product, def-norm-and-normed-space, thm-cauchy-schwarz-finite, thm-minkowski-finite, lem-finite-sum-laws, def-finite-sum, thm-of-square-roots, lem-of-square-monotone, lem-metrics-on-rn, def-integer-power, lem-of-abs-value, def-abs-value]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Cauchy-Schwarz inequality (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cauchy%E2%80%93Schwarz_inequality"
    - title: "Parallelogram law (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Parallelogram_law"
    - title: "Polarization identity (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Polarization_identity"
    - title: "J. Demmel, MA221 Lecture 3: Vector Norms"
      url: "https://people.eecs.berkeley.edu/~demmel/ma221_Fall10/Lectures/Lecture_03.html"
    - title: "G. Zitelli, Math 641 Functional Analysis, Part I"
      url: "https://www.math.uci.edu/~gzitelli/pdf/641/641part1.pdf"
pipeline_run: null
---

## Statement

Let $n \in \mathbb{N}$ and let $x, y \in \mathbb{R}^{n}$, with the Euclidean
inner product and the Euclidean norm as in [[def-euclidean-inner-product]]. Then:

1. **Cauchy-Schwarz.**
   $$\lvert\langle x,y\rangle\rvert \;\le\; \lVert x\rVert_2\,\lVert y\rVert_2 ,$$
   with equality if and only if there is a pair $(\lambda,\mu) \ne (0,0)$ of
   reals with $\lambda x_k = \mu y_k$ for every $k < n$.
2. **$\lVert\cdot\rVert_2$ is a norm on $\mathbb{R}^{n}$**
   ([[def-norm-and-normed-space]]), for **every** $n \in \mathbb{N}$; the metric
   it induces is $d_2$ of [[lem-metrics-on-rn]] whenever $n \ge 1$.
3. **Parallelogram law.**
   $$\lVert x+y\rVert_2^{2} + \lVert x-y\rVert_2^{2} \;=\; 2\lVert x\rVert_2^{2} + 2\lVert y\rVert_2^{2} .$$
4. **Polarisation.**
   $$\langle x,y\rangle \;=\; \tfrac14\Bigl(\lVert x+y\rVert_2^{2} - \lVert x-y\rVert_2^{2}\Bigr),$$
   so the inner product is recovered from the norm it induces.

**Clause 1 is a citation, not a new proof.** The inequality and its equality case
are the published [[thm-cauchy-schwarz-finite]], stated there for two lists of
reals; all that happens below is that it is read in the vector notation of
[[def-euclidean-inner-product]]. Re-proving it here would put two proofs of one
statement in the library.

## Facts & Assumptions

**Given:** A natural number $n$ and vectors $x, y \in \mathbb{R}^{n}$, so that $\langle x,y\rangle = \sum_{k<n}x_ky_k$ and $\lVert x\rVert_2 = \sqrt{\langle x,x\rangle}$ ([[def-euclidean-inner-product]], [[def-finite-sum]]).

[L1] Cauchy-Schwarz for finite sums ([[thm-cauchy-schwarz-finite]]): $\bigl(\sum_{k<n}a_kb_k\bigr)^{2} \le \bigl(\sum_{k<n}a_k^{2}\bigr)\bigl(\sum_{k<n}b_k^{2}\bigr)$, with equality if and only if there is $(\lambda,\mu) \ne (0,0)$ with $\lambda a_k = \mu b_k$ for every $k<n$; and the root form $\bigl|\sum_{k<n}a_kb_k\bigr| \le \sqrt{\sum_{k<n}a_k^{2}}\sqrt{\sum_{k<n}b_k^{2}}$.

[L2] The inner product is symmetric, bilinear and positive definite, $\langle x,x\rangle = \sum_{k<n}x_k^{2} \ge 0$, and $\langle x,x\rangle = 0$ exactly when $x = 0$ ([[def-euclidean-inner-product]], [[lem-finite-sum-laws]]).

[L3] Square roots ([[thm-of-square-roots]]): every $c \ge 0$ has a unique $s \ge 0$ with $s^{2} = c$, written $\sqrt{c}$; hence $\lVert x\rVert_2 \ge 0$ and $\lVert x\rVert_2^{2} = \langle x,x\rangle$ ([[def-integer-power]]).

[L4] Squaring is monotone on the nonnegatives: for $a,b \ge 0$, $a \le b$ if and only if $a^{2} \le b^{2}$, and $a = b$ if and only if $a^{2} = b^{2}$ ([[lem-of-square-monotone]]).

[L5] Absolute value ([[lem-of-abs-value]], [[def-abs-value]]): $|t| \ge 0$, $|t|^{2} = t^{2}$, and $|st| = |s|\,|t|$.

[L6] The norm axioms (N1), (N2), (N3) ([[def-norm-and-normed-space]]), and the fact that $d_2(u,v) = \lVert u-v\rVert_2$ for $n \ge 1$ ([[lem-metrics-on-rn]], [[def-euclidean-inner-product]] clause 6).

## Proof

**Proof technique:** direct.

1.1 Instantiating [L1] at $a_k := x_k$ and $b_k := y_k$ gives $\langle x,y\rangle^{2} \le \langle x,x\rangle\,\langle y,y\rangle$, with equality exactly when some $(\lambda,\mu) \ne (0,0)$ has $\lambda x_k = \mu y_k$ for every $k<n$. [L1, L2]

1.2 Both $\lvert\langle x,y\rangle\rvert$ and $\lVert x\rVert_2\lVert y\rVert_2$ are nonnegative, and their squares are $\langle x,y\rangle^{2}$ and $\langle x,x\rangle\langle y,y\rangle$. [L3, L5]

1.3 Expanding by bilinearity and symmetry, $\langle x+y, x+y\rangle = \langle x,x\rangle + \langle x,y\rangle + \langle y,x\rangle + \langle y,y\rangle = \lVert x\rVert_2^{2} + 2\langle x,y\rangle + \lVert y\rVert_2^{2}$. [L2, L3]

1.4 The same expansion at $x - y = x + (-1)y$ gives $\lVert x-y\rVert_2^{2} = \lVert x\rVert_2^{2} - 2\langle x,y\rangle + \lVert y\rVert_2^{2}$. [L2, L3]

1.5 For a scalar $\lambda$, $\langle \lambda x, \lambda x\rangle = \lambda^{2}\langle x,x\rangle = |\lambda|^{2}\lVert x\rVert_2^{2}$, so $\lVert \lambda x\rVert_2^{2} = \bigl(|\lambda|\lVert x\rVert_2\bigr)^{2}$. [L2, L3, L5]

1.6 Axiom (N1) holds: $\lVert x\rVert_2 = 0$ if and only if $\lVert x\rVert_2^{2} = \langle x,x\rangle = 0$, which by positive definiteness says $x = 0$. [L2, L3, L4]

2.1 Comparing the squares of step 1.2 through step 1.1 and using monotonicity of squaring on the nonnegatives yields $\lvert\langle x,y\rangle\rvert \le \lVert x\rVert_2\lVert y\rVert_2$, with equality exactly in the proportional case of step 1.1; this is clause 1. [step 1.1, step 1.2, L4]

2.2 Adding the identities of step 1.3 and step 1.4 gives $\lVert x+y\rVert_2^{2} + \lVert x-y\rVert_2^{2} = 2\lVert x\rVert_2^{2} + 2\lVert y\rVert_2^{2}$, which is clause 3. [step 1.3, step 1.4, algebra]

2.3 Subtracting the identity of step 1.4 from that of step 1.3 gives $\lVert x+y\rVert_2^{2} - \lVert x-y\rVert_2^{2} = 4\langle x,y\rangle$, which is clause 4 after dividing by $4$. [step 1.3, step 1.4, algebra]

2.4 Both $\lVert \lambda x\rVert_2$ and $|\lambda|\lVert x\rVert_2$ are nonnegative and by step 1.5 have equal squares, so $\lVert \lambda x\rVert_2 = |\lambda|\lVert x\rVert_2$, which is axiom (N2). [step 1.5, L3, L4, L5]

3.1 By step 2.1 the middle term of step 1.3 satisfies $2\langle x,y\rangle \le 2\lVert x\rVert_2\lVert y\rVert_2$, so $\lVert x+y\rVert_2^{2} \le \lVert x\rVert_2^{2} + 2\lVert x\rVert_2\lVert y\rVert_2 + \lVert y\rVert_2^{2} = \bigl(\lVert x\rVert_2 + \lVert y\rVert_2\bigr)^{2}$. [step 1.3, step 2.1, L5, algebra]

4.1 Both $\lVert x+y\rVert_2$ and $\lVert x\rVert_2 + \lVert y\rVert_2$ are nonnegative, so step 3.1 and monotonicity of squaring give $\lVert x+y\rVert_2 \le \lVert x\rVert_2 + \lVert y\rVert_2$, which is axiom (N3). [step 3.1, L3, L4]

5.1 Steps 2.4, 1.6 and 4.1 are exactly (N1), (N2) and (N3), so $\lVert\cdot\rVert_2$ is a norm on $\mathbb{R}^{n}$ for every $n \in \mathbb{N}$, and for $n \ge 1$ the metric it induces is $d_2$; this is clause 2, and with steps 2.1, 2.2 and 2.3 all four clauses are proved. [step 2.1, step 2.2, step 2.3, step 2.4, step 1.6, step 4.1, L6] ∎

## Remarks

- **Which route to the triangle inequality was taken.** The proof above obtains (N3) by expanding $\lVert x+y\rVert_2^{2}$ and applying Cauchy-Schwarz. The alternative is to quote [[thm-minkowski-finite]] at the rational exponent $p = 2$, which states the same inequality directly; that route is equally legitimate and is the one [[lem-p-norms-are-norms-and-induce-the-published-metrics]] uses for a general exponent. Only one of the two is used here, so no statement is proved twice.

- **Clause 1 holds at $n = 0$, where it reads $0 \le 0$**, and the equality case is then satisfied by every pair $(\lambda,\mu) \ne (0,0)$, the condition quantifying over no indices. Clause 2 also holds at $n = 0$, the zero space carrying exactly one norm ([[def-norm-and-normed-space]]). What is not available at $n = 0$ is the metric $d_2$ of [[lem-metrics-on-rn]], which is why the last sentence of clause 2 carries $n \ge 1$.

- **Clauses 3 and 4 are what the companion page uses.** The parallelogram law is an identity satisfied by every norm of the form $\sqrt{\langle\cdot,\cdot\rangle}$, so a norm violating it is not of that form; that is how the companion page rules out $\lVert\cdot\rVert_1$ on $\mathbb{R}^{2}$. Polarisation says the inner product carries no information the norm does not.
````

### `thm-induction-principle`

````markdown
---
id: thm-induction-principle
kind: theorem
title: "The principle of mathematical induction"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-natural-numbers, def-inductive-set, lem-omega-smallest-inductive]
aliases: [principle-of-induction, induction-principle]
landmark: true
short: "$0\\in S$, $\\sigma$-closed $\\Rightarrow S=\\mathbb N$"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-08-02
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Mathematical induction (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Mathematical_induction"
    - title: "Set-theoretic definition of natural numbers (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Set-theoretic_definition_of_natural_numbers"
    - title: "B. Kaya, MATH 320 Set Theory (METU lecture notes)"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
    - title: "Peano axioms (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Peano_axioms"
pipeline_run: null
---

## Statement

Let $S \subseteq \mathbb{N}$. If $0 \in S$ and $\sigma(n) \in S$ whenever $n \in S$, then $S = \mathbb{N}$. Equivalently (property form): if a property $P$ satisfies $P(0)$ and ($P(n) \Rightarrow P(\sigma(n))$) for all $n$, then $P(n)$ holds for all $n \in \mathbb{N}$. This is the induction principle, the basis of proof by induction.

## Facts & Assumptions

**Given:** $\mathbb{N} = \omega$ is the smallest inductive set ([[def-inductive-set]], [[def-natural-numbers]], [[lem-omega-smallest-inductive]]); $0 = \varnothing$, $\sigma(n) = n \cup \{n\}$.

[L1] $\omega$ is contained in every inductive set ([[lem-omega-smallest-inductive]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $S \subseteq \mathbb{N}$ with $0 = \varnothing \in S$ and ($x \in S \Rightarrow \sigma(x) = x \cup \{x\} \in S$). [given]

2.1 Then $S$ contains $\varnothing$ and is closed under $x \mapsto x \cup \{x\}$, so $S$ is an inductive set. [step 1.1]

3.1 $\mathbb{N} = \omega \subseteq S$ because $\omega$ is a subset of every inductive set. [L1, step 2.1]

4.1 With $S \subseteq \mathbb{N}$ by hypothesis, $S = \mathbb{N}$. [step 3.1, given]

5.1 The property form is the set case with $S = \{n \in \mathbb{N} : P(n)\}$: $P(0)$ and $P(n) \Rightarrow P(\sigma(n))$ give $0 \in S$ and $\sigma$-closure, so $S = \mathbb{N}$, i.e. $P$ holds for all $n$; conversely the set form is the property form applied to $P(n) :\equiv n \in S$, so the two are equivalent. [step 4.1] ∎
````

### `thm-well-ordering-principle`

````markdown
---
id: thm-well-ordering-principle
kind: theorem
title: "The well-ordering principle"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-natural-numbers, def-nat-order, thm-induction-principle, lem-nat-discrete, lem-nat-trichotomy, thm-omega-is-peano-system, lem-nat-add-successor-left, lem-nat-add-identity]
aliases: [well-ordering]
landmark: true
short: "every nonempty $S\\subseteq\\mathbb N$ has a least element"
proof_strategy: contradiction
verification:
  precheck: pass
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-08-02
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Well-ordering principle (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Well-ordering_principle"
    - title: "Mathematical induction (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Mathematical_induction"
    - title: "B. Kaya, MATH 320 Set Theory (METU lecture notes)"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
pipeline_run: null
---

## Statement

Every nonempty subset $S \subseteq \mathbb{N}$ has a least element: there is $\ell \in S$ with $\ell \le s$ for all $s \in S$.

## Facts & Assumptions

**Given:** A nonempty subset $S \subseteq \mathbb{N}$. Define $T = \{\, n \in \mathbb{N} : \text{every } m \text{ with } m \le n \text{ satisfies } m \notin S \,\}$ (informally, no element of $S$ is $\le n$).

[L1] Induction principle: a subset of $\mathbb{N}$ that contains $0$ and is closed under $\sigma$ equals $\mathbb{N}$ ([[thm-induction-principle]]).

[L2] $m < n \iff \sigma(m) \le n$; consequently no $k$ satisfies $n < k < \sigma(n)$ ([[lem-nat-discrete]]).

[L3] Exactly one of $s < n$, $s = n$, $n < s$ holds ([[lem-nat-trichotomy]]); and $n < s \iff \sigma(n) \le s$ ([[lem-nat-discrete]]).

[L4] $\sigma$ is injective (Peano axiom P2) ([[thm-omega-is-peano-system]]).

[L5] $\sigma(a) + i = \sigma(a + i)$ for all $a, i$ (the left successor law, [[lem-nat-add-successor-left]]).

[L6] $0 + k = k$ for all $k$ ([[lem-nat-add-identity]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose $S$ is nonempty but has no least element. [assume-contra]

1.2 If $m < \sigma(n)$ then $m \le n$: by [L2] applied to $m$ and $\sigma(n)$ we get $\sigma(m) \le \sigma(n)$, say $\sigma(m) + i = \sigma(n)$; then $\sigma(m + i) = \sigma(m) + i = \sigma(n)$ [L5], so $m + i = n$ by injectivity [L4], hence $m \le n$. [L2, L4, L5]

2.1 First, $0 \in T$: if $0 \in S$ then $0 \le s$ for all $s \in S$, since $0 + s = s$ [L6], making $0$ a least element, contrary to the assumption; hence $0 \notin S$; moreover $m \le 0$ forces $m = 0$, because $m \ne 0$ would give $0 < m$ (as $0 + m = m$ [L6] with $m \ne 0$) while $m \le 0$ gives $m < 0$, and [L3] admits at most one of these; so every $m \le 0$ lies outside $S$. [step 1.1, L3, L6, given]

2.2 Next, $T$ is closed under $\sigma$: assume $n \in T$; if $\sigma(n) \in S$ then no $s \in S$ satisfies $s < \sigma(n)$ (else $s \le n$ by step 1.2, so $s \notin S$ because $n \in T$, a contradiction), hence $\sigma(n) \le s$ for all $s \in S$ by [L3], making $\sigma(n)$ a least element, contrary to the assumption; therefore $\sigma(n) \notin S$, and any $m$ with $m \le \sigma(n)$ satisfies $m = \sigma(n)$ or $m \ne \sigma(n)$; in the second case $m \le \sigma(n)$ together with $m \ne \sigma(n)$ gives $m < \sigma(n)$ by the definition of the strict order, hence $m \le n$ by step 1.2 and $m \notin S$ because $n \in T$, while in the first case $m = \sigma(n) \notin S$; so every $m \le \sigma(n)$ lies outside $S$, giving $\sigma(n) \in T$. [step 1.1, step 1.2, L3]

3.1 By the induction principle [L1], from $0 \in T$ and closure under $\sigma$, $T = \mathbb{N}$; then for every $n$, taking $m = n \le n$ shows $n \notin S$, so $S = \varnothing$, contradicting nonemptiness; therefore $S$ has a least element. [step 2.1, step 2.2, L1, discharge-contradiction] ∎
````

