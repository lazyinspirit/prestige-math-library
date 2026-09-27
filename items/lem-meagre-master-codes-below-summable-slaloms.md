---
id: lem-meagre-master-codes-below-summable-slaloms
kind: lemma
title: Meagre master codes are below summable slaloms
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [lem-cantor-and-baire-sequence-coding, lem-good-clopen-family-for-summable-slaloms, lem-borel-meagre-sections-have-uniform-closed-covers, lem-null-meagre-master-codes-are-cofinal, def-null-meagre-borel-master-codes]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Tomek Bartoszyński, Invariants of Measure and Category, Lemmas 3.14–3.15, printed pp.10–11"
      url: "https://arxiv.org/pdf/math/9910015"
verification:
  precheck: pending
---

## Statement

Let $S^n_m$ be the good clopen array of
[[lem-good-clopen-family-for-summable-slaloms]] and put
$M_f^\mathrm{good}=2^\omega\setminus\limsup_nS^n_{f(n)}$ for
$f\in\omega^\omega$. These sets form an inclusion-cofinal subfamily of the
meagre ideal. There are Borel maps $u:\omega^\omega\to\mathbb S$ and
$v:\mathbb S\to\omega^\omega$ such that
$$u(f)\subseteq^*T\quad\Longrightarrow\quad M_f^\mathrm{good}\subseteq M_{v(T)}^\mathrm{good}.$$
Thus the meagre master family is below the summable slalom order in the
ideal-inclusion morphism sense.

## Facts & Assumptions

**Given:** The fixed good clopen array and repeating basic cylinders $U_n$.

[F1] Every $S^n_m$ meets $U_n$; some $S^n_m$ is contained in any specified
dense open set; and any at most $2^n$ members in row $n$ have intersection
meeting $U_n$. ([[lem-good-clopen-family-for-summable-slaloms]])

[F2] A Borel family of meagre sections admits Borel-selected closed
nowhere-dense covers. ([[lem-borel-meagre-sections-have-uniform-closed-covers]])

[F3] Meagre master codes are inclusion-cofinal. The summable slalom space is
Borel in its product code. ([[lem-null-meagre-master-codes-are-cofinal]],
[[def-null-meagre-borel-master-codes]])

[F4] Baire-space and Cantor-space parameters admit fixed Borel coding.
([[lem-cantor-and-baire-sequence-coding]])

## Proof

**Proof technique:** special cofinal meagre codes and a finite-intersection morphism.

1.1 For each $f$, every tail union $\bigcup_{n\ge m}S^n_{f(n)}$ is dense open: a given basic cylinder $U$ equals $U_n$ for some $n\ge m$, and $S^n_{f(n)}$ meets it by [F1]. Hence $M_f^\mathrm{good}$ is meagre. It is represented by a code of [[def-null-meagre-borel-master-codes]]: at master stage $m$, enumerate the basic cylinders contained in that dense open tail union. This enumeration is Borel in $f$ because the tail union is a coded countable union of clopens and inclusion of a compact cylinder in it is a finite-subcover test. [F1, F3]
1.2 If $A$ is meagre, take closed nowhere-dense $F_j$ with $A\subseteq\bigcup_jF_j$. For each $n$, the complement of $\bigcup_{j\le n}F_j$ is dense open, so choose the least $m=f(n)$ such that $S^n_m$ lies in that complement, using [F1]. Every $y\in A$ belongs to some $F_j$ and therefore misses $S^n_{f(n)}$ for all $n\ge j$; hence $A\subseteq M_f^\mathrm{good}$. This proves cofinality. [F1]
1.3 Define $u(f)(n)=\{f(n)\}$, a slalom since $\sum_n2^{-n}<\infty$. For $T\in\mathbb S$, summability implies $|T(n)|\le2^n$ for every sufficiently large $n$. Let $r(T)$ be the least integer beyond which this holds; it is Borel because the condition is a countable conjunction of coordinate tests. Put $W_n(T)=\bigcap_{i\in T(n)}S^n_i$ for $n\ge r(T)$, and put $W_n(T)=2^\omega$ for earlier $n$. Empty intersections are the whole space. By [F1], each $W_n(T)$ for $n\ge r(T)$ meets $U_n$. Therefore every tail union $\bigcup_{n\ge m}W_n(T)$ is dense open, and $L_T=2^\omega\setminus\limsup_nW_n(T)$ is meagre. Its membership relation is Borel in $(T,y)$ because each $W_n(T)$ is a finite clopen intersection with Borel dependence on $T$. [F1, F3]
1.4 Code the Borel slalom parameter space in a Cantor parameter space via [F4], extending $L_T$ by empty sections outside its coded domain. Apply [F2] to get Borel closed nowhere-dense codes $F_j(T)$ with $L_T\subseteq\bigcup_jF_j(T)$. Set $v(T)(n)$ to be the least $m$ such that $$S^n_m\cap\bigcup_{j\le n}F_j(T)=\varnothing.$$ The complement of that finite union is dense open, so [F1] gives such an $m$. For a Borel-coded closed set, disjointness from a fixed clopen set is a Borel finite-subcover test on its open complement; hence $v$ is Borel. If $y\in L_T$, then $y\in F_j(T)$ for some $j$, and it misses $S^n_{v(T)(n)}$ whenever $n\ge j$. Thus $L_T\subseteq M_{v(T)}^\mathrm{good}$. [F1, F2, F4]
2.1 If $u(f)\subseteq^*T$, then $f(n)\in T(n)$ eventually and $W_n(T)\subseteq S^n_{f(n)}$ eventually. Hence $\limsup_nW_n(T)\subseteq\limsup_nS^n_{f(n)}$ and, on taking complements, $M_f^\mathrm{good}\subseteq L_T\subseteq M_{v(T)}^\mathrm{good}$. This is the required Borel morphism. The special family is cofinal by step 1.2, so it is an eligible cofinal master family for ideal inequalities. ∎ [step 1.2, step 1.3, step 1.4]
