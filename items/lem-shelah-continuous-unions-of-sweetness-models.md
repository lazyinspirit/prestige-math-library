---
id: lem-shelah-continuous-unions-of-sweetness-models
kind: lemma
title: Continuous countable unions of sweetness models remain sweet
status: draft
origin: pipeline
deps: [def-shelah-sweetness-model, def-countable-choice, thm-countable-union-of-countable]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-22
sources:
  references:
    - {title: "Saharon Shelah, Can You Take Solovay's Inaccessible Away?", url: "https://shelah.logic.at/files/95333/176.pdf", locator: "Claim 7.10, p. 41"}
---

## Statement

Assume Countable Choice ([[def-countable-choice]]). Let
$(P_i,D_i,(E^i_n))_{i<\delta}$ be a continuous increasing chain of sweetness
models, where $\delta$ has countable cofinality and every successor extends its
predecessor in the exact sweetness-model sense, and all stages have the same distinguished weakest condition. Then the direct union forcing,
dense set, and stabilized equivalence relations form a sweetness model, and
every $P_i$ is a complete subforcing of the union.

## Facts & Assumptions

**Given:** Countable Choice and a continuous increasing chain of sweetness models with a common distinguished weakest condition $1$, indexed by an ordinal $\delta$ of countable cofinality, with extension relations as in the definition. Increasing means that for every $i\le j<\delta$, the stage $j$ extends stage $i$ in that relation; the cofinal sequence is fixed from the hypothesis $\operatorname{cf}(\delta)=\omega$.

[F1] [[def-shelah-sweetness-model]]: the sweetness clauses, and the five extension clauses, in particular that every new class meeting an old dense set is contained in it and that the old relations are the restrictions of the new ones.

[F2] Under [[def-countable-choice]], a natural-number-indexed union of at most countable sets is at most countable ([[thm-countable-union-of-countable]]).

## Proof

1.1 Fix an increasing cofinal sequence $\gamma_0<\gamma_1<\dots$ in $\delta$ and replace the chain by its cofinal subsequence: every stage lies below some $\gamma_k$, so the union forcing, dense set and relations are unchanged. Put $P=\bigcup_k P_{\gamma_k}$, $D=\bigcup_k D_{\gamma_k}$ and $E_n=\bigcup_k E^{\gamma_k}_n$. The inherited order is reflexive and transitive: each finite collection of conditions and comparisons lies in one later stage. The union is nonempty since each forcing stage is nonempty. Its distinguished condition $1$ is weakest: every $p$ lies in a stage where $p\le1$, and this comparison persists in the union. For $p\in P$ take a stage containing it and a strengthening $d$ in that stage's dense set. Then $d\in D$ and $d\le p$, proving $D$ dense in $P$. [F1]

2.1 Every $P_i$ is complete in the union. The order on $P_i$ is the restriction of the union order by the extension clauses. If two conditions of $P_i$ have a common lower bound in the union, that lower bound belongs to some later stage $P_{\gamma_k}$, and completeness of $P_i$ in that stage reflects compatibility back to $P_i$; thus incompatibility is also the restriction. Finally let $A$ be a maximal antichain of $P_i$ and $p\in P$. Choose a later stage $P_{\gamma_k}$ containing both $P_i$ and $p$. The extension relation makes $A$ maximal in $P_{\gamma_k}$, so some $a\in A$ is compatible with $p$ there and hence in the union. Thus every maximal antichain of $P_i$ remains maximal in $P$, which is exactly completeness in [F1]. [F1, step 1.1]

2.2 The relations are well defined: $E^{\gamma_k}_n$ is the restriction of $E^{\gamma_j}_n$ for $j\ge k$ by [F1], so the union relation is an equivalence relation on $D$ extending each stage relation and satisfying $E_{n+1}\subseteq E_n$. [F1, step 1.1]

3.1 At most countably many classes. First, for stages $i\le j$, if $r\in D_j\cap P_i$, density gives $d\in D_i$ with $d\le r$. The last extension clause implies $r\in D_i$, so $D_j\cap P_i=D_i$. If $p\in D_i$ and $r\mathrel{E_n^j}p$, the class-containment clause gives $r\in P_i$, and the preceding identity gives $r\in D_i$. Restriction of the relations now gives $r\mathrel{E_n^i}p$. Consequently the class of $q\in D_{\gamma_k}$ under $E_n$ is the union of its classes at the stages, and it equals its $E^{\gamma_k}_n$-class, because every later class meeting $D_{\gamma_k}$ is contained in $D_{\gamma_k}$ and restricts to the old relation. Since every $E^{\gamma_k}_n$ has countably many classes and countable choice counts countable unions of countable sets, $E_n$ has countably many classes. [F1, F2, step 2.2]

3.2 Downward directedness: if $x_1,x_2$ lie in one $E_n$-class, take a stage $\gamma_k$ containing both and realizing their relations; the $E^{\gamma_k}_n$-class of $x_1$ equals the $E_n$-class, and the stage model is directed, so a common lower bound exists inside that stage class, hence inside the union class. [F1, step 2.2]

4.1 Sequential clause: let $q_i\mathrel{E_i}q_\omega$ for $i<\omega$, and choose a stage $P_{\gamma_k}$ containing $q_\omega$. By step 3.1, for every $i$ the entire union $E_i$-class of $q_\omega$ is its old $E_i^{\gamma_k}$-class and is contained in $D_{\gamma_k}$. Hence every $q_i$ already belongs to that one stage and satisfies $q_i\mathrel{E_i^{\gamma_k}}q_\omega$ there. The sequential clause of the stage model supplies a common lower bound of the whole sequence and, for every $n$, a common lower bound of the tail in the $E_n^{\gamma_k}$-class of $q_\omega$; these are also valid lower bounds and the same classes in the union. [F1, step 3.1]

4.2 Transfer clause: given $p,q\in D$ and $n$, take a stage $\gamma_j$ containing both. The transfer clause of that stage model supplies a modulus $k$. If $p'\mathrel{E_k}p$ in the union, step 3.1 puts $p'$ in the same old $E_k^{\gamma_j}$-class, hence in $D_{\gamma_j}$; and any assumed witness from the union $E_n$-class of $q$ is likewise already in its old stage class. The stage transfer clause therefore supplies the required witness, which also serves in the union. [F1, step 3.1]

5.1 Steps 2.1 through 4.2 verify the four sweetness clauses and completeness of the stage embeddings for $(P,D,(E_n))$, which is the assertion of the Statement. [step 4.1, step 4.2, step 2.1] ∎
