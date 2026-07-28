---
id: fs-heine-borel-holds-in-every-normed-space
kind: false-statement
title: "FALSE: in every normed space a closed bounded set is compact"
status: draft
origin: session
deps: [thm-heine-borel-rn, def-norm-and-normed-space, lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric, fs-all-norms-on-any-real-vector-space-are-equivalent, fs-closed-and-bounded-implies-compact-in-every-metric-space, def-function-space, def-vector-space, def-linear-subspace, lem-linear-subspace-criterion, def-metric-space, def-metric-topology, def-metric-ball, def-metric-bounded-diameter, def-metric-compactness, def-metric-compactness-variants, thm-compact-implies-the-other-compactness-forms, thm-metric-compactness-equivalences, thm-compact-implies-complete-and-totally-bounded, def-totally-bounded, def-cauchy-in-metric, def-metric-convergence, lem-metric-convergent-implies-cauchy, lem-standard-basis-of-f-n, lem-finite-set-has-max, def-max-min, lem-pigeonhole, def-countable, lem-of-abs-value, def-abs-value, lem-index-map-grows, def-sequence, def-injection-surjection-bijection, def-isometry-and-metric-embedding]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Heine-Borel theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Heine%E2%80%93Borel_theorem"
    - title: "Riesz's lemma (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Riesz%27s_lemma"
pipeline_run: null
---

## Statement

**False claim:** in every normed space $(W,N)$ ([[def-norm-and-normed-space]]) a
subset that is closed in the induced metric ([[def-metric-topology]]) and bounded
([[def-metric-bounded-diameter]]) is compact ([[def-metric-compactness]]).

What is true is the same statement for $\mathbb{R}^{n}$ with the Euclidean norm
and $n$ a natural number, which is [[thm-heine-borel-rn]] clause 2. The published
[[fs-closed-and-bounded-implies-compact-in-every-metric-space]] already refutes
the corresponding claim for arbitrary **metric** spaces; the point of the present
item is that adding a **linear** structure and a norm does not repair it, which a
reader who has just met [[thm-all-norms-on-rn-are-equivalent]] may well expect it
to.

**The witness** is the space $V$ of finitely supported real sequences with the
norm $N_\infty$, both as in
[[fs-all-norms-on-any-real-vector-space-are-equivalent]], and the closed unit
ball

$$K \;:=\; \{\, v \in V : N_\infty(v) \le 1 \,\} .$$

$K$ is closed in $(V, d_{N_\infty})$ and bounded, and it is not compact: the
vectors $e_k$ all lie in it and satisfy $N_\infty(e_j - e_k) = 1$ for $j \ne k$.

## Facts & Assumptions

**Given:** The vector space $V$ of finitely supported sequences and the norm $N_\infty$ on it, with induced metric $d(v,w) := N_\infty(v-w)$; the set $K$ above; and the vectors $e_k \in V$ with $e_k(k) = 1$ and $e_k(j) = 0$ for $j \ne k$.

[A1] The refuted claim, at $(V,N_\infty)$ and $K$: $K$ is compact.

[L1] $V$ is a real vector space and $N_\infty$ is a norm on it, with $N_\infty(v) = \max\{|v_j| : j<K\}$ for any admissible $K \ge 1$ ([[fs-all-norms-on-any-real-vector-space-are-equivalent]], [[def-function-space]], [[def-vector-space]], [[def-linear-subspace]], [[lem-linear-subspace-criterion]], [[lem-finite-set-has-max]], [[def-max-min]], [[def-norm-and-normed-space]]).

[L2] A norm induces a metric $d(v,w) = N(v-w)$, and $|N(v)-N(w)| \le N(v-w)$ ([[def-norm-and-normed-space]], [[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]] clause 1, which is stated for a norm on an arbitrary real vector space; [[def-metric-space]]).

[L3] Open and closed sets, balls, and boundedness ([[def-metric-topology]], [[def-metric-ball]], [[def-metric-bounded-diameter]]).

[L4] In ZF a compact metric space is sequentially compact ([[thm-compact-implies-the-other-compactness-forms]], [[def-metric-compactness-variants]]), and a compact subset is one whose metric subspace is compact ([[def-metric-compactness]], [[def-isometry-and-metric-embedding]]); the five-way equivalence [[thm-metric-compactness-equivalences]] is not needed and is not used.

[L5] Every convergent sequence in a metric space is Cauchy ([[lem-metric-convergent-implies-cauchy]], [[def-cauchy-in-metric]], [[def-metric-convergence]], [[def-sequence]]); a subsequence is indexed by a strictly increasing map, which is injective ([[lem-index-map-grows]], [[def-injection-surjection-bijection]]).

[L6] Pigeonhole: there is no injection from $\sigma(p)$ into $p$, hence none from $\mathbb{N}$ into any natural number ([[lem-pigeonhole]] claims 1 and 4, [[def-countable]]).

[L7] Absolute value ([[def-abs-value]], [[lem-of-abs-value]]) and the pointwise description of $e_k$ ([[lem-standard-basis-of-f-n]]).

[L8] A compact metric space is totally bounded ([[thm-compact-implies-complete-and-totally-bounded]], [[def-totally-bounded]]).

## Refutation

**Proof technique:** direct.

1.1 Each $e_k$ lies in $V$, with $K = k+1$ admissible, and $N_\infty(e_k) = 1$; so $e_k \in K$ for every $k$. [L1, L7]

1.2 For $j \ne k$ the vector $e_j - e_k$ has coordinates $1$ at $j$, $-1$ at $k$ and $0$ elsewhere, so $N_\infty(e_j-e_k) = 1$, that is $d(e_j,e_k) = 1$. [L1, L2, L7]

1.3 $K$ is bounded, since $K \subseteq B(0,2)$: $v \in K$ gives $d(v,0) = N_\infty(v) \le 1 < 2$. [L1, L2, L3]

1.4 $K$ is closed in $(V,d)$. Let $v \notin K$, so $N_\infty(v) > 1$, and put $r := N_\infty(v)-1 > 0$; if $d(w,v) < r$ then $N_\infty(w) \ge N_\infty(v) - N_\infty(v-w) > N_\infty(v) - r = 1$, so $w \notin K$. Hence the complement of $K$ is open. [L2, L3]

2.1 No subsequence of $(e_k)$ is Cauchy in $(V,d)$: if $l \mapsto e_{n_l}$ were, with $n$ strictly increasing and hence injective, then taking the tolerance $1/2$ would give indices $l \ne l'$ with $d(e_{n_l},e_{n_{l'}}) < 1/2$, while $n_l \ne n_{l'}$ and step 1.2 make that distance $1$. [step 1.2, L5]

3.1 Hence no subsequence of $(e_k)$ converges in the metric subspace $(K, d_K)$, a convergent sequence being Cauchy and $d_K$ being the restriction of $d$; so $(K,d_K)$ is not sequentially compact. [step 2.1, L4, L5]

4.1 If $K$ were compact then $(K,d_K)$ would be a compact metric space and hence sequentially compact, contradicting step 3.1. So [A1] is false, and with steps 1.3 and 1.4 the set $K$ is closed and bounded and not compact. [step 1.3, step 1.4, step 3.1, A1, L4]

5.1 The same family shows that $(K,d_K)$ is not totally bounded, which is the property the general characterisation identifies as missing. Suppose $\{y_0,\dots,y_p\} \subseteq K$ were a finite $1/2$-net. Assigning to each $k \in \mathbb{N}$ the least $i \le p$ with $d(e_k,y_i) < 1/2$ gives a map $\mathbb{N} \to \sigma(p)$, which cannot be injective by pigeonhole; so there are $j \ne k$ and one $i$ with $d(e_j,y_i) < 1/2$ and $d(e_k,y_i) < 1/2$, whence $d(e_j,e_k) \le d(e_j,y_i)+d(y_i,e_k) < 1$, contradicting step 1.2. [step 1.2, L6, L8] ∎

## Remarks

- **What is refuted and what is not.** The claim refuted is the transfer of [[thm-heine-borel-rn]] to arbitrary normed spaces. Nothing here is asserted about normed spaces in general, a theory this library has not built; in particular the classical converse, that a normed space whose closed unit ball is compact must be finite-dimensional, is **not** proved anywhere here.

- **Why the linear structure does not help.** The bisection proof of [[thm-heine-borel-rn]] halves one coordinate at a time and terminates because there are finitely many coordinates. On $V$ there are infinitely many, and the standard unit vectors stay a fixed distance apart no matter how far out one looks; that is exactly the failure of total boundedness in step 5.1.

- **The relation to the published metric-space version.** [[fs-closed-and-bounded-implies-compact-in-every-metric-space]] refutes the claim for metric spaces, with a witness in the bounded real-valued functions under the supremum metric. The present item refutes the narrower claim about **normed** spaces, on a space that is a linear subspace of a function space and carries a genuine norm, so no reader can retreat to "the counterexample was not linear".

- **No choice principle is used.** Step 4.1 quotes only the ZF implication [[thm-compact-implies-the-other-compactness-forms]], and step 5.1 quotes [[thm-compact-implies-complete-and-totally-bounded]], also a theorem of ZF; the equivalence [[thm-metric-compactness-equivalences]], which carries two choice hypotheses, is deliberately avoided.
