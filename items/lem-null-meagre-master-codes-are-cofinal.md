---
id: lem-null-meagre-master-codes-are-cofinal
kind: lemma
title: Null and meagre master codes are cofinal
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-null-meagre-borel-master-codes, lem-borel-null-sections-have-uniform-open-hulls, lem-borel-meagre-sections-have-uniform-closed-covers, def-nowhere-dense-meagre-and-residual-subsets, def-axiom-of-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Tomek Bartoszyński, Invariants of Measure and Category, Lemmas 3.2, 3.4, 3.8 and 3.9, printed pp.4–7"
      url: "https://arxiv.org/pdf/math/9910015"
verification:
  precheck: pending
---

## Statement

The meagre master family $\{M_f\}$ of
[[def-null-meagre-borel-master-codes]] is inclusion-cofinal in the meagre ideal
on Cantor space. If $H\subseteq2^\omega\times2^\omega$ is Borel with all
sections meagre, there is a Borel map from the first coordinate to valid
meagre master codes whose coded sets contain the corresponding sections.

Assume the Axiom of Choice ([[def-axiom-of-choice]]) for the corresponding
null claims: the null master family $\{N_f\}$ is inclusion-cofinal in the
null ideal on Cantor space, and if $H\subseteq2^\omega\times2^\omega$ is
Borel with all sections null, there is a Borel map from the first coordinate
to valid null master codes whose coded sets contain the corresponding
sections.

## Facts & Assumptions

**Given:** The fixed cylinder and clopen enumerations and fair-coin measure of the master-code definition.

[F1] Borel null sections admit Borel-selected open hulls with arbitrarily small measure. ([[lem-borel-null-sections-have-uniform-open-hulls]])

[F2] Borel meagre sections admit Borel-selected sequences of closed nowhere-dense covers. ([[lem-borel-meagre-sections-have-uniform-closed-covers]])

[F3] A valid null code is a sequence of finite clopen unions $C_{f(n)}$ with $\mu(C_{f(n)})\le2^{-n}$; its Borel null coded set belongs to $\mathcal N_{\mathcal C}$. A valid meagre code is a sequence of dense open sets $V_n(f)$ assembled from the fixed cylinder basis; its coded set belongs to $\mathcal M_{\mathcal C}$. ([[def-null-meagre-borel-master-codes]])

[F5] A nowhere-dense set has closure with empty interior; that closure is closed nowhere dense. A meagre set is contained in the union of a sequence of nowhere-dense sets. ([[def-nowhere-dense-meagre-and-residual-subsets]])

[F4] The Axiom of Choice permits simultaneous selection of countably many uniform open-hull codes for the rational errors $2^{-j-2}$ when starting from a Borel null hull. ([[def-axiom-of-choice]])

## Proof

**Proof technique:** Borel regrouping of open hulls and direct dense-open coding.

1.1 Suppose every $H_x$ is null. By [F1] and the countable selection permitted by [F4], for each $j$ obtain Borel open codes $O_j(x)\supseteq H_x$ with $\mu(O_j(x))<2^{-j-2}$. For an open-coded set, its canonical prefix-free cylinders are exactly the basic cylinders contained in the open set whose immediate parent is not contained in it (with the root handled separately). The predicate $[s]\subseteq O_j(x)$ is Borel in $x$: compactness of $[s]$ turns inclusion in the enumerated open union into existence of a finite subcover, a countable disjunction of finite code tests. These prefix-free cylinders partition $O_j(x)$ and their measures sum to $\mu(O_j(x))$. Enumerate all pairs $(j,s)$ in a fixed order, putting the corresponding cylinder at its slot when it is canonical and the empty set otherwise. Write this clopen sequence as $(D_k(x))_k$. It depends Borelly on $x$ and $\sum_k\mu(D_k(x))\le\sum_j2^{-j-2}<1$. [F1, F3, F4]
1.2 Suppose every $H_x$ is meagre. By [F2] obtain Borel closed nowhere-dense codes $F_j(x)$ covering it. Put $V_n(x)=2^\omega\setminus\bigcup_{j\le n}F_j(x)$; this is dense open. List all basic cylinders $U_s$ contained in $V_n(x)$, repeating a fixed cylinder if necessary to make an infinite sequence. Inclusion $U_s\subseteq V_n(x)$ is Borel in $x$: for each $j\le n$ it requires $U_s\subseteq 2^\omega\setminus F_j(x)$, equivalently a finite subcover of the compact cylinder $U_s$ by the cylinders in that coded open complement. This is a finite conjunction of countable disjunctions of finite code tests. The resulting Borel sequence of cylinder indices is a valid meagre code $g_x$ with $V_n(g_x)=V_n(x)$. As $H_x$ lies in the union of the $F_j(x)$, it lies in $M_{g_x}$. [F2, F3]
2.1 Let $T_h(x)=\sum_{k\ge h}\mu(D_k(x))$, a Borel pointwise limit of finite partial sums. Its value decreases to zero. Starting with $h_0=0$, choose $h_{n+1}>h_n$ as the least integer with $T_{h_{n+1}}(x)\le2^{-(n+1)}$. The threshold tests are Borel, so each $h_n(x)$ is Borel. Define $E_n(x)=\bigcup_{h_n(x)\le k<h_{n+1}(x)}D_k(x)$, a finite clopen union. Then $\mu(E_n(x))\le T_{h_n(x)}(x)\le2^{-n}$. Its index in the fixed clopen enumeration can be chosen canonically by least search, hence Borelly. This gives a valid null code $f_x$. Every $y\in H_x$ belongs to at least one canonical cylinder from each $O_j(x)$; these have distinct pair-slots as $j$ varies, so $y$ belongs to infinitely many $E_n(x)$. Thus $H_x\subseteq N_{f_x}$. [step 1.1, F3]
3.1 Let $A\in\mathcal N_{\mathcal C}$. By the definition [F3] choose a Borel null set $B\supseteq A$. Apply [F1] to the constant Borel family $H=\mathcal C\times B$ and the fixed parameter $x_0=0^\omega$, at errors $2^{-j-2}$, to obtain open sets $O_j\supseteq B$ with $\mu(O_j)<2^{-j-2}$; [F4] permits choosing the sequence of hull codes. Their intersection $G$ is a Borel null hull of $A$. The one-parameter versions of steps 1.1 and 2.1 applied to $G$ produce a null master set containing $G$ and hence $A$. For an arbitrary $A\in\mathcal M_{\mathcal C}$, take its defining sequence $(A_j)$ of nowhere-dense sets. Each $\overline{A_j}$ is closed nowhere dense by [F5], so $B=\bigcup_j\overline{A_j}$ is Borel and meagre and contains $A$. Apply step 1.2 to the constant Borel family $\mathcal C\times B$ and evaluate at $0^\omega$ to obtain a meagre master set containing $B$, hence $A$. Taking the closures is canonical and uses no additional choice. This proves cofinality and the uniform Borel clauses. ∎ [step 2.1, step 1.2, F1, F3, F4, F5]
