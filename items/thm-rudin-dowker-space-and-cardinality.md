---
id: thm-rudin-dowker-space-and-cardinality
kind: theorem
title: Rudin ZFC Dowker space and its size
status: draft
origin: pipeline
deps: [thm-rudin-box-space-is-collectionwise-normal, thm-rudin-tail-neighborhood-obstruction, thm-countable-paracompactness-shrinking-criterion, lem-cardinal-arithmetic-basic-laws, lem-cofinal-aleph-product-cardinality, thm-regularity-of-the-alephs, def-axiom-of-choice, def-countable-paracompactness-and-dowker-space, lem-ordinal-product-as-an-order-type, cor-cardinal-absorption, thm-cofinality-basics, def-rudin-ordinal-box-space]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "K. P. Hart, Set-Theoretic Methods in General Topology, Chapter 6 sections 1–3, printed pp. 35–38; cardinality injections supplied here"
      url: https://fa.ewi.tudelft.nl/~hart/onderwijs/old-courses/settop/settop.pdf
---

## Statement

Assume AC. For every infinite $B\subseteq\omega\setminus\{0,1\}$, $X_R(B)$ is a Dowker space constructed in ZFC, and

$$|X_R(B)|=\aleph_\omega^{\aleph_0}.$$

Here Dowker means $T_1$, normal and not countably paracompact, and the power is cardinal exponentiation. The result assumes neither CH nor a value for the continuum.

## Facts & Assumptions

**Given:** The stated infinite $B$ and AC. Put $X=X_R(B)$ and $Q=\prod_{n\in B}\aleph_n$.

[F1] $X_R(B)$ is Hausdorff and collectionwise normal, hence normal ([[thm-rudin-box-space-is-collectionwise-normal]]).

[F2] Its decreasing closed initial-top slices have empty intersection, but every sequence of their open neighborhoods has nonempty intersection ([[thm-rudin-tail-neighborhood-obstruction]]).

[F3] In a normal space, countable paracompactness is equivalent to existence, for every decreasing closed sequence with empty intersection, of open expansions with empty intersection ([[thm-countable-paracompactness-shrinking-criterion]], (iv)).

[F4] A $T_1$ normal space which is not countably paracompact is a Dowker space ([[def-countable-paracompactness-and-dowker-space]]).

[F5] Injections give cardinal inequalities between well-orderable sets ([[lem-cardinal-arithmetic-basic-laws]], (a)).

[F6] $|Q|=\aleph_\omega^{\aleph_0}$ ([[lem-cofinal-aleph-product-cardinality]]).

[F7] The positive finite alephs are regular under AC ([[thm-regularity-of-the-alephs]]).

[F8] The ordinal product $\alpha\cdot\beta$ is the order type of $\beta$ copies of $\alpha$ laid end to end, whose underlying set is $\alpha\times\beta$ ([[lem-ordinal-product-as-an-order-type]]).

[F9] The product of two nonzero infinite-cardinal-bounded sets has size at most their largest infinite cardinal bound ([[cor-cardinal-absorption]]).

[F10] A subset of size less than an ordinal's cofinality is bounded in it ([[thm-cofinality-basics]]).

[F11] $X_R(B)$ lies in the inclusive-top product $P_B$ and consists of its points with uncountable coordinate cofinalities uniformly below a finite aleph ([[def-rudin-ordinal-box-space]]).

[A1] AC is assumed for the cited topological results and for cardinal comparison of the function sets ([[def-axiom-of-choice]]).

## Proof

1.1 By F1 and A1, $X$ is Hausdorff and normal. It is $T_1$: for distinct $p,q$, disjoint neighborhoods supplied by Hausdorffness give a neighborhood of $q$ excluding $p$, so $X\setminus\{p\}$ is open as the union of such neighborhoods. If $X$ were countably paracompact, F3 would give open expansions with empty intersection for the decreasing closed sequence in F2. F2 rules out precisely those expansions. Hence $X$ is not countably paracompact, and F4 makes it a Dowker space. [F1, F2, F3, F4, A1]

1.2 For each $n\in B$ define an injection $e_n:[0,\aleph_n]\longrightarrow\aleph_n$ by $e_n(\aleph_n)=0$, $e_n(r)=r+1$ for finite $r$, and $e_n(\alpha)=\alpha$ for $\omega\le\alpha<\aleph_n$. The three image parts are respectively zero, the positive finite ordinals, and the infinite ordinals below $\aleph_n$; they are disjoint and the maps on them are injective. Thus $h\mapsto(n\mapsto e_n(h(n)))$ injects the inclusive-top product $P_B$, and hence $X$ by F11, into $Q$. F5, F6 and A1 give $|X|\le\aleph_\omega^{\aleph_0}$. [F5, F6, F11, A1]

1.3 For $n\in B$ and $\alpha<\aleph_n$ set $d_n(\alpha)=\omega_1\cdot(\alpha+1)$, with ordinal multiplication. By F8 its cardinality is that of $\omega_1\times(\alpha+1)$. Since $n\ge2$, both factors have cardinality at most $\mu=\max(\aleph_1,|\alpha+1|)<\aleph_n$. F9 bounds the product size by $\mu$; its ordinal order type is therefore below the initial ordinal $\aleph_n$. These values are strictly increasing with $\alpha$: if $\alpha<\beta$, the first $\alpha+1$ blocks form a proper initial segment of the $\beta+1$ blocks in F8, so their order type is strictly smaller. Each value has cofinality exactly $\omega_1$. Its last block has order type $\omega_1$ and is cofinal, giving the upper bound. For a set of size less than $\omega_1$, its points in that block are bounded there by F7 and F10; a later point in the last block bounds the whole set, since all preceding blocks lie below it. This proves the lower bound on cofinality. At $\alpha=0$ the value is $\omega_1$, so the same proof includes zero. [F7, F8, F9, F10]

2.1 Define $D:Q\longrightarrow P_B$ by $D(q)(n)=d_n(q(n))$. Step 1.3 shows that every coordinate is below its factor top and has cofinality $\omega_1$. Hence F11 gives $D(q)\in X$, with the strict uniform cofinality bound $\aleph_2$. If $q\ne q'$, they differ at some coordinate $n$; injectivity of $d_n$ then gives $D(q)\ne D(q')$. Thus $D$ is injective, and F5, F6 and A1 give $\aleph_\omega^{\aleph_0}\le|X|$. Combined with step 1.2 this proves equality. Step 1.1 proves the Dowker assertion. All constructions used only ZFC and the stated infinite-coordinate hypotheses. QED. [step 1.1, step 1.2, step 1.3, F5, F6, F11, A1]
