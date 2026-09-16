---
id: lem-shelah-continuous-unions-of-sweetness-models
kind: lemma
title: Continuous countable unions of sweetness models remain sweet
status: draft
origin: pipeline
deps: [def-shelah-sweetness-model, lem-shelah-sweet-forcings-are-sigma-directed-ccc, lem-iteration-restrictions-and-complete-embeddings, def-countable-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
sources:
  references:
    - {title: "Saharon Shelah, Can You Take Solovay's Inaccessible Away?", url: "https://shelah.logic.at/files/95333/176.pdf", locator: "Claim 7.10, p. 41"}
---

## Statement

Let $(P_i,D_i,(E^i_n))_{i<\delta}$ be a continuous increasing chain of sweetness
models, where $\delta$ has countable cofinality and every successor extends its
predecessor in the exact sweetness-model sense. Then the direct union forcing,
dense set, and stabilized equivalence relations form a sweetness model, and
every $P_i$ is a complete subforcing of the union.

## Facts & Assumptions

**Given:** A continuous increasing chain of sweetness models indexed by an ordinal $\delta$ of countable cofinality, with extension relations as in the definition.

[F1] [[def-shelah-sweetness-model]]: the sweetness clauses, and the five extension clauses, in particular that every new class meeting an old dense set is contained in it and that the old relations are the restrictions of the new ones.

[F2] [[def-countable-choice]]: countable choice; it counts countable unions of countable sets and selects one witness per natural number.

[F3] [[lem-shelah-sweet-forcings-are-sigma-directed-ccc]]: sweetness gives a decomposition of a complete suborder into countably many directed sets, which is how completeness of the embedded stages is certified.

[F4] [[lem-iteration-restrictions-and-complete-embeddings]]: completeness of a suborder is equivalent to predensity of its maximal antichains, which is preserved by direct unions of the present kind.

## Proof

1.1 Fix an increasing cofinal sequence $\gamma_0<\gamma_1<\dots$ in $\delta$ and replace the chain by its cofinal subsequence: every stage lies below some $\gamma_k$, so the union forcing, dense set and relations are unchanged. Put $P=\bigcup_k P_{\gamma_k}$, $D=\bigcup_k D_{\gamma_k}$ and $E_n=\bigcup_k E^{\gamma_k}_n$. [F1]

1.2 Every $P_i$ is complete in the union: a maximal antichain of $P_i$ remains predense at every later stage by the extension relation, hence is predense in the union, and [F4] certifies completeness from predensity of maximal antichains. [F1, F3, F4]

2.1 The relations are well defined: $E^{\gamma_k}_n$ is the restriction of $E^{\gamma_j}_n$ for $j\ge k$ by [F1], so the union relation is an equivalence relation on $D$ extending each stage relation and satisfying $E_{n+1}\subseteq E_n$. [F1, step 1.1]

3.1 Fewer than countably many classes: the class of $q\in D_{\gamma_k}$ under $E_n$ is the union of its classes at the stages, and it equals its $E^{\gamma_k}_n$-class, because every later class meeting $D_{\gamma_k}$ is contained in $D_{\gamma_k}$ and restricts to the old relation. Since every $E^{\gamma_k}_n$ has countably many classes and countable choice counts countable unions of countable sets, $E_n$ has countably many classes. [F1, F2, step 2.1]

3.2 Downward directedness: if $x_1,x_2$ lie in one $E_n$-class, take a stage $\gamma_k$ containing both and realizing their relations; the $E^{\gamma_k}_n$-class of $x_1$ equals the $E_n$-class, and the stage model is directed, so a common lower bound exists inside that stage class, hence inside the union class. [F1, step 2.1]

4.1 Sequential clause: let $q_i\mathrel{E_i}q_\omega$ for $i<\omega$. By the transfer clause of the union (proved next) and step 3.1, for every $i$ large enough there is a strengthening $r_i\le q_i$ of $q_\omega$ inside the $E_i$-class of $q_\omega$; the finitely many moduli involved have a common bound, so this holds for all $i\ge n$. Countable choice selects one $r_i$ for each $i\ge n$, and each class $q_\omega/E_i$ is already present inside the single stage where $q_\omega$ occurs, so the sequence $\langle r_i:n\le i\le\omega\rangle$ with $r_\omega=q_\omega$ lies in that stage and satisfies $r_i\mathrel{E_i}r_\omega$ there. The sequential clause of that stage model now supplies a common lower bound of the tail in the $E_n$-class of $q_\omega$, which is also its $E_n$-class in the union. [F1, F2, step 3.1, step 3.2]

4.2 Transfer clause: given $p,q\in D$ and $n$, take a stage $\gamma_k$ containing both; by step 3.1 the $E_n$-classes of $p$ and $q$ in the union are their classes at that stage, and the transfer clause of the stage model supplies the required modulus $k$, which serves in the union because the relations are restrictions. [F1, step 3.1]

5.1 Steps 1.2 through 4.2 verify the four sweetness clauses and completeness of the stage embeddings for $(P,D,(E_n))$, which is the assertion of the Statement. [step 4.1, step 4.2, step 1.2] ∎
