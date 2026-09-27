---
id: lem-null-master-codes-and-summable-slaloms-are-tukey-equivalent
kind: lemma
title: Null master codes and summable slaloms are Tukey equivalent
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [lem-cantor-and-baire-sequence-coding, def-null-meagre-borel-master-codes, lem-null-meagre-master-codes-are-cofinal, lem-borel-null-sections-have-uniform-open-hulls, lem-cantor-coin-measure-from-binary-expansion, thm-baire-category-for-complete-metric-spaces, lem-closed-subset-of-a-compact-space-is-compact, def-axiom-of-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Tomek Bartoszyński, Invariants of Measure and Category, Lemma 3.13, printed pp.9–10"
      url: "https://arxiv.org/pdf/math/9910015"
verification:
  audited: 2026-09-27
  precheck: pass
---

## Statement

In ZFC, let $\mathcal N_0=\{N_f:f\text{ is a valid null master code}\}$, ordered by
inclusion, and let $(\mathbb S,\subseteq^*)$ be the summable slalom order of
[[def-null-meagre-borel-master-codes]]. There are Borel morphisms in both
directions:

* $\mathcal N_0\preceq\mathbb S$: Borel maps $u$ from null codes to slaloms
  and $v$ from slaloms to null codes with
  $u(f)\subseteq^*S\Rightarrow N_f\subseteq N_{v(S)}$;
* $\mathbb S\preceq\mathcal N_0$: Borel maps $u'$ from slaloms to null codes
  and $v'$ from null codes to slaloms with
  $N_{u'(S)}\subseteq N_f\Rightarrow S\subseteq^*v'(f)$.

These are morphisms of the coded cofinal family; no identification of a code
with a unique ideal member is required.

## Facts & Assumptions

**Given:** The fair-coin Cantor probability space, the clopen null codes,
and finite-valued summable slaloms.

[F1] Valid null codes select clopen $C_{f(n)}$ of measure at most $2^{-n}$;
their limsups are null. The slalom space is Borel in the standard product
code of finite subsets because the finite partial sums of
$\sum_n|S(n)|2^{-n}$ are uniformly coded. ([[def-null-meagre-borel-master-codes]])

[F2] Borel families with null sections have Borel-selected covering null
master codes. ([[lem-null-meagre-master-codes-are-cofinal]])

[F3] Cantor space and Baire space have fixed Borel codes for the standard
Borel parameter spaces used here. ([[lem-cantor-and-baire-sequence-coding]])

[F4] The Baire category theorem holds on every nonempty compact metric
space, in particular on a nonempty closed subset of Cantor space.
([[lem-cantor-and-baire-sequence-coding]], [[lem-closed-subset-of-a-compact-space-is-compact]], [[thm-baire-category-for-complete-metric-spaces]])

[F5] AC gives the ordinary measure and cardinal framework; all maps below
are defined by fixed enumerations, Borel tests, and least-index choices.
([[def-axiom-of-choice]])

## Proof

**Proof technique:** two explicit coded morphisms.

1.1 Enumerate all clopen sets as $(C_i)_i$, as in [F1], and put $C_i^k=C_i$ when $\mu(C_i)\le2^{-k}$ and $C_i^k=\varnothing$ otherwise. For a null code $f$ define $u(f)(n)=\{f(2n),f(2n+1)\}$. This is a slalom, since $\sum_n|u(f)(n)|2^{-n}\le\sum_n2^{1-n}<\infty$. For $S\in\mathbb S$ let $$H_S=\limsup_n\bigcup_{i\in S(n)}(C_i^{2n}\cup C_i^{2n+1}).$$ Its stage-$n$ measure is at most $|S(n)|(2^{-2n}+2^{-(2n+1)})$, and the sum of these bounds is finite by summability. The elementary tail-union estimate therefore gives $\mu(H_S)=0$. Membership in $H_S$ is Borel in $(S,y)$, since each stage is a finite clopen union. [F1]

1.2 For a null code $f$, define the closed sets $$K'_m(f)=\bigcap_{n\ge m}(2^\omega\setminus C_{f(n)}).$$ They increase to $2^\omega\setminus N_f$, which has measure one. Choose the least $m=m(f)$ for which $\mu(K'_m(f))>1/2$ and set $K'_f=K'_{m(f)}(f)$. This is a Borel choice: each measure is the decreasing limit of measures of finite clopen intersections, and the least-index threshold test is Borel. For the fixed basic clopens $(U_j)_j$ let $Z_j=\{f:\mu(K'_f\cap U_j)=0\}$, again Borel by the same finite-stage measure limits, and set $$K_f=K'_f\setminus\bigcup_{j:f\in Z_j}U_j.$$ This is compact, has the same measure as $K'_f$, is disjoint from $N_f$, and has the property that every nonempty $K_f\cap U_j$ has positive measure. The last assertion follows because a zero-measure intersection with $K_f$ would be a zero-measure intersection with $K'_f$ unless $U_j$ was removed, in which case the intersection is empty. Its closed code is Borel in $f$: the finite-stage closed approximants are clopen, and whether the compact intersection meets a basic clopen is the decreasing-limit nonemptiness test from compactness. [F1]

2.1 Use [F3] to code $\mathbb S$ as a Borel subset of a Cantor parameter space; extend the Borel family $H_S$ by empty sections off that subset. Apply [F2] and restrict the resulting selector to obtain a Borel null-code map $v(S)$ with $H_S\subseteq N_{v(S)}$. If $u(f)\subseteq^*S$, then for all sufficiently large $n$ the two clopen sets $C_{f(2n)}$ and $C_{f(2n+1)}$ appear in the stage-$n$ union defining $H_S$. Every point of $N_f$ lies in infinitely many even or odd code sets and hence in $H_S$. Thus $N_f\subseteq N_{v(S)}$, proving the first morphism. [step 1.1, F2, F3]

3.1 For each pair $(n,i)$ with $n\ge1$, allocate a distinct block of $n$ binary coordinates and let $G_i^n$ be the clopen event that all bits in that block are zero. The blocks are disjoint, so the family of all these events is independent and $\mu(G_i^n)=2^{-n}$. For $S\in\mathbb S$ put $$L_S=\limsup_{n\ge1}\bigcup_{i\in S(n)}G_i^n.$$ The sum of stage measures is bounded by $\sum_{n\ge1}|S(n)|2^{-n}<\infty$, so $L_S$ is null. It is Borel in $(S,y)$. As in step 2.1, [F2] supplies a Borel null-code map $u'(S)$ with $L_S\subseteq N_{u'(S)}$. [F1, F2, F3]

4.1 For each $f,j,n$ define, when $K_f\cap U_j\ne\varnothing$, $$T_{f,j}(n)=\{i:K_f\cap U_j\cap G_i^n=\varnothing\};$$ when $K_f\cap U_j=\varnothing$, put $T_{f,j}(n)=\varnothing$. The compact-hit tests of step 1.2 make this a Borel family. In the nonempty case put $a=\mu(K_f\cap U_j)>0$. For every finite set of pairs $(n,i)$ with $i\in T_{f,j}(n)$, independence gives $$a\le\prod_{(n,i)}(1-2^{-n}).$$ Taking finite products increasingly shows both that every $T_{f,j}(n)$ is finite and that $\sum_{n\ge1}|T_{f,j}(n)|2^{-n}<\infty$; indeed $-\log(1-t)\ge t$ and the logarithms of all finite products are bounded below by $\log a$. Thus $T_{f,j}$ is a slalom. [step 3.1, step 1.2]

5.1 Choose Borelly the least increasing thresholds $r_j(f)\ge j$ with $\sum_{n\ge r_j(f)}|T_{f,j}(n)|2^{-n}<2^{-j}$. Such thresholds exist by step 4.1; each test is Borel as a limit of finite sums. Put $$v'(f)(n)=\bigcup_{j:r_j(f)\le n}T_{f,j}(n).$$ Only finitely many $j\le n$ contribute, so the value is finite, and $\sum_n|v'(f)(n)|2^{-n}\le\sum_j2^{-j}<\infty$. Also $T_{f,j}\subseteq^*v'(f)$ for every $j$. [step 4.1]

6.1 Assume $N_{u'(S)}\subseteq N_f$. Since $L_S\subseteq N_{u'(S)}$, the compact $K_f$ misses $L_S$. Hence it is covered by the increasing closed sets $$K_f\cap\bigcap_{n\ge m} \left(2^\omega\setminus\bigcup_{i\in S(n)}G_i^n\right) \qquad(m\in\omega).$$ By [F4], one of these closed sets has nonempty relative interior in $K_f$. Choose a basic $U_j$ witnessing that interior. Then $K_f\cap U_j$ is nonempty and, for all $n\ge m$ and $i\in S(n)$, it misses $G_i^n$. Therefore $S(n)\subseteq T_{f,j}(n)$ eventually, and step 5.1 gives $S\subseteq^*v'(f)$. This is the second morphism. AC in [F5] supplies DC for the Baire category theorem [F4] at this step and underlies full null-ideal cofinality in [F2]; the displayed Borel maps make no further arbitrary choices. ∎ [step 3.1, step 5.1, F2, F4, F5]
