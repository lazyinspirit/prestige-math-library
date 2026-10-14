---
id: thm-countable-mixture-likelihood-ratio-vector-is-minimal-sufficient
kind: theorem
title: "A countable mixture likelihood-ratio vector is minimal sufficient"
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 7
deps:
  - def-sufficient-statistic
  - def-minimal-sufficient-statistic
  - def-minimal-sufficient-sigma-field
  - def-measure-kernel-and-probability-kernel
  - def-standard-borel-space
  - thm-doob-dynkin-lemma
  - thm-standard-borel-spaces-admit-bimeasurable-real-codings
  - thm-existence-of-regular-conditional-distributions-for-standard-borel-targets
  - lem-regular-conditional-kernels-factor-through-a-standard-borel-conditioning-variable
  - thm-countable-products-of-completely-metrizable-spaces
  - thm-countable-products-of-second-countable-spaces
  - thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality
  - def-axiom-of-choice
  - thm-nonnegative-measurable-functions-admit-increasing-simple-approximations
  - thm-monotone-convergence-for-the-integral
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
proof_strategy: direct
sources:
  references:
    - title: "Ryan Martin, Lecture Notes on Advanced Statistical Theory"
      url: "https://homepages.math.uic.edu/~rgmartin/Teaching/Stat511/Notes/511notes.pdf"
    - title: "Joshua M. Tebbs, STAT 512 Mathematical Statistics Lecture Notes"
      url: "https://people.stat.sc.edu/Tebbs/stat512/s24notes.pdf"
    - title: "Peter Kempthorne, MIT 18.655 Lecture Note 6: Sufficiency"
      url: "https://ocw.mit.edu/courses/18-655-mathematical-statistics-spring-2016/bbbca14a2009e47add8c7ea2a49daa41_MIT18_655S16_LecNote6.pdf"
    - title: "Noah Fithian, Stat 210a Reader: Sufficiency"
      url: "https://stat210a.berkeley.edu/fall-2025/reader/sufficiency.html"
    - title: "Noah Fithian, Stat 210a Reader: Completeness, Ancillarity, and Basu’s Theorem"
      url: "https://stat210a.berkeley.edu/fall-2025/reader/completeness.html"
    - title: "Charles J. Geyer, Stat 5421 Lecture Notes: Exponential Families"
      url: "https://www.stat.umn.edu/geyer/5421/notes/expfam.pdf"
    - title: "Jiahao Tian, Chapter 2: Sufficiency and Exponential Families"
      url: "https://jiahaotian-stat.github.io/Notes/en/Advanced_Stat/2Sufficiency/"
---

## Statement

Assume AC. Let $(P_k)_{k\ge1}$ be a countable family of probability measures on a standard Borel space $(\mathcal X,\mathcal A)$, let $w_k>0$ with $\sum_kw_k=1$, and put $Q=\sum_kw_kP_k$. Choose finite-valued Borel versions $f_k=dP_k/dQ$, changed to zero on one common $Q$-null set. Then $T(x)=(f_k(x))_{k\ge1}$ is a Borel statistic into $[0,\infty)^{\mathbb N}$ and is minimal sufficient. For every standard Borel sufficient statistic $S$, there is a Borel $\varphi$ with $T=\varphi(S)$ $Q$-almost surely.

## Facts & Assumptions

**Given:** AC, the countable family, positive mixture weights, and the common reference mixture $Q$.

[A1] [[def-axiom-of-choice]]: AC permits selection of RN representatives and the countable product construction; only countably many null exceptional sets are combined.

[F1] [[def-sufficient-statistic]]: sufficiency supplies one parameter-independent conditional kernel.

[F2] [[def-minimal-sufficient-statistic]] and [[def-minimal-sufficient-sigma-field]]: minimality requires inclusion modulo common model-null sets in every sufficient sub-sigma-field; a common conditional kernel supplies the common bounded conditional expectations for its generated sigma-field.

[F3] [[def-measure-kernel-and-probability-kernel]]: the common conditional kernel has probability-measure sections and measurable evaluations.

[F4] [[def-standard-borel-space]]: Borel maps and countable Borel codings define standard Borel statistics.

[F5] [[thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality]]: each $P_k\ll Q$ has an RN density, unique $Q$-almost everywhere.

[F6] [[thm-countable-products-of-completely-metrizable-spaces]] and [[thm-countable-products-of-second-countable-spaces]]: a countable product of Polish spaces is Polish, so its Borel space is standard Borel.

[F7] [[thm-existence-of-regular-conditional-distributions-for-standard-borel-targets]] and [[lem-regular-conditional-kernels-factor-through-a-standard-borel-conditioning-variable]]: the $Q$-law admits a regular conditional law given $T$ as a probability kernel on the target of $T$.

[F8] [[thm-doob-dynkin-lemma]] and [[thm-standard-borel-spaces-admit-bimeasurable-real-codings]]: a real $\sigma(S)$-measurable function factors through a standard Borel statistic by coding its target in $\mathbb R$; coordinatewise this factors a sequence-valued map.

[F9] [[thm-nonnegative-measurable-functions-admit-increasing-simple-approximations]] and [[thm-monotone-convergence-for-the-integral]]: conditional identities and weighted mixture identities extend from indicators to nonnegative measurable functions by increasing simple approximations and monotone convergence.

## Proof

1.1 Since $P_k\ll Q$, [F5] gives finite-valued nonnegative Borel densities $f_k$ after changing each on its null set. Their exceptional sets have countable union $N$ with $Q(N)=0$; reset all $f_k$ to zero on $N$. By [F6], $[0,\infty)^{\mathbb N}$ is standard Borel. The coordinate maps are Borel, hence $T$ is Borel. [A1, F4, F5, F6, given, construct]

2.1 By [F7], choose a conditional-law kernel $K$ for $X$ given $T$ under $Q$. Its defining identity extends from indicator weights to nonnegative Borel weights by [F9]. By [F5], $P_k(A\cap T^{-1}C)=\int 1_A1_C(T)f_k\,dQ$. Since $T_k=f_k$, applying the weighted conditional identity with weight $1_C(t)t_k$ gives $P_k(A\cap T^{-1}C)=\int_CK(t,A)t_kQ^T(dt)$; taking $A=\mathcal X$ gives $P_k^T(C)=\int_Ct_kQ^T(dt)$. Thus $K$ works under every $P_k$, so [F1] gives sufficiency. [F1, F3, F5, F7, F9, step 1.1, given, algebra]

2.2 Let $S$ be any other standard Borel sufficient statistic with common kernel $L$. The same kernel is a conditional law under $Q$: its conditional identity follows by multiplying the identity under $P_k$ by $w_k$ and summing the nonnegative integrals, with [F9] justifying passage to the countable sum. It is also the common conditional law under each $P_k$. Let $Q^S$ and $P_k^S$ be the image laws. The identity $P_k^S\ll Q^S$ follows from $P_k\ll Q$; write $r_k=dP_k^S/dQ^S$. Disintegrating with $L$ and extending the conditional identity to the nonnegative weight $r_k$ by [F9] gives, for every $A$, $P_k(A)=\int L(s,A)r_k(s)Q^S(ds)=\int_A r_k(S(x))Q(dx)$. RN uniqueness yields $f_k=r_k(S)$ $Q$-almost surely. [A1, F1, F3, F5, F9, given, construct, step 1.1]

3.1 Apply [F5] to each coordinate to obtain Borel $r_k$ (modified on $Q^S$-null sets if necessary). The map $\varphi(s)=(r_k(s))_{k\ge1}$ is Borel because its coordinate maps are Borel; step 2.2 gives $T=\varphi(S)$ $Q$-almost surely. Since every weight is positive, $Q(C)=0$ iff $P_k(C)=0$ for every $k$. For every Borel $D$ in the target of $T$, the sets $T^{-1}(D)$ and $S^{-1}(\varphi^{-1}(D))$ differ only on $\{T\ne\varphi(S)\}$, which is $Q$-null by step 2.2. Therefore $\sigma(T)\subseteq\sigma(S)$ modulo the family-null ideal, establishing the asserted comparison with $S$. [F2, F5, F6, F8, step 2.2, given, construct]

4.1 Let $\mathcal H$ be any sufficient sub-sigma-field as in [F2]. For each $k$, apply [F5] on $(\mathcal X,\mathcal H)$ to obtain a finite nonnegative $\mathcal H$-measurable density $r_k=d(P_k|_{\mathcal H})/d(Q|_{\mathcal H})$. For each $A\in\mathcal A$, sufficiency supplies one bounded $\mathcal H$-measurable $v_A$ with the conditional identities for $1_A$ under every $P_k$. Summing with weights gives those identities under $Q$. Testing on $\{v_A<0\}$ and $\{v_A>1\}$ shows $0\le v_A\le1$ $Q$-almost surely; clipping on these $\mathcal H$-measurable null sets preserves every identity because $P_k\ll Q$. Simple approximation and [F9] extend the $Q$ conditional identity to the nonnegative $\mathcal H$-measurable weight $r_k$, while the restricted RN identity extends to $v_A$. Consequently $\int_A r_k\,dQ=\int v_A r_k\,dQ=\int v_A\,dP_k=P_k(A)$. Uniqueness in [F5] gives $f_k=r_k$ $Q$-almost surely. Combining only these countably many null sets, $T=(r_k)_k$ $Q$-almost surely. The right side is $\mathcal H$-measurable, so every event in $\sigma(T)$ agrees modulo a family-null set with an event in $\mathcal H$. The kernel in step 2.1 gives sufficiency of $\sigma(T)$ by extending its event identities to bounded functions using simple approximation and [F9]. Thus [F2] proves minimality against every sufficient sub-sigma-field. [A1, F2, F5, F9, step 1.1, step 2.1, given, construct] ∎
