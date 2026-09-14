---
id: lem-basic-cohen-model-schema-of-continuity
kind: lemma
title: Schema of continuity in the basic Cohen model
status: published
origin: pipeline
deps: [def-basic-cohen-symmetric-system, lem-basic-cohen-generic-reals-form-a-symmetric-set, def-ordinal-definability-and-hod, lem-forcing-monotonicity-density-and-decision, lem-symmetry-lemma-for-forcing-automorphisms, thm-forcing-theorem]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - {title: "Miroslav Repický, A proof of the independence of the Axiom of Choice from the Boolean Prime Ideal Theorem, Lemma 2 and Corollary 3, pp.543-545", url: "https://im.saske.sk/~repicky/-r30.pdf"}
    - {title: "Thomas Jech, The Axiom of Choice, Theorem 7.1 and surrounding discussion, printed pp.97-98", url: "https://gwern.net/doc/math/1973-jech-theaxiomofchoice.pdf"}
---

## Statement

Let $V\models\mathrm{ZF}$, let $P=\operatorname{Add}(\omega,\omega)$ be the forcing in [[def-basic-cohen-symmetric-system]], and let $G$ be $V$-generic. Define $a_i(n)=b$ exactly when some $p\in G$ has $p(i,n)=b$, and put $A=\{a_i:i\in\omega\}$. Let $\bar x\in V$ be a finite tuple, let $h:m\to\omega$ be injective, put $s_j=a_{h(j)}$, and fix a formula $\varphi(\bar x,s,A)$. If

$$V[G]\models\varphi(\bar x,s,A),$$

then there are pairwise disjoint basic clopen sets $U_j\subseteq2^\omega$, with $s_j\in U_j$, such that

$$V[G]\models\varphi(\bar x,t,A)$$

whenever $t\in A^m$ and $t_j\in U_j$ for every $j<m$.

Consequently, if finitely many parameters are ordinal-definable in $V[G]$ from $A$ and a fixed finite tuple $u$ of distinct members of $A$, they may be held fixed while a finite tuple of distinct members of $A$, disjoint from $\operatorname{rng}(u)$, is varied through pairwise disjoint basic clopen neighbourhoods which also avoid $\operatorname{rng}(u)$. Here “ordinal-definable from $A,u$” means unique definability using the predicate $A$, the tuple $u$, and finitely many ordinal parameters, in the coded sense of [[def-ordinal-definability-and-hod]].

## Facts & Assumptions

**Given:** The ZF forcing extension, tuples, formula, and displayed truth in the Statement. Existence of the particular generic $G$ is a hypothesis. Once it and the finite tuples are fixed, the argument below makes only finitely many explicit extensions and permutations; no form of Choice is used.

[F1] [[def-basic-cohen-symmetric-system]] gives the finite-coordinate forcing and the action $\pi\dot a_i=\dot a_{\pi(i)}$, $\pi\dot A=\dot A$.

[F2] [[lem-basic-cohen-generic-reals-form-a-symmetric-set]] gives that the coordinate reals are distinct.

[F3] [[thm-forcing-theorem]] and [[lem-forcing-monotonicity-density-and-decision]] give the truth lemma, persistence, and density closure used below.

[F4] [[lem-symmetry-lemma-for-forcing-automorphisms]] transports forced formulas under finite permutations of the first coordinate.

[F5] [[def-ordinal-definability-and-hod]] supplies coded unique definitions from ordinal parameters.

## Proof

**Proof technique:** direct, with a local contradiction.

1.1 If $m=0$, take the empty family of clopens: there is one empty tuple, and the conclusion is the given truth. Assume $m>0$. By the truth lemma choose $p'\in G$ which forces $\varphi(\check{\bar x},\dot s,\dot A)$, where $\dot s_j=\dot a_{h(j)}$. It is enough to show that below every such $p'$ there is a condition forcing the asserted clopen-box conclusion, because density closure and the truth lemma then put that conclusion in $V[G]$. [F3, given]

1.2 Extend $p'$ to a condition $p$ and choose $k\in\omega$ so that $\operatorname{dom}(p)=k\times k$, $\operatorname{rng}(h)\subseteq k$, and the rows $p_i=p\restriction(\{i\}\times k)$ are pairwise distinct for $i<k$. This is a finite construction: first enlarge the rectangle, then give each pair of rows a fresh column on which their bits differ. Put $U_j=[p_{h(j)}]$. The $U_j$ are pairwise disjoint because their defining binary strings are incompatible, and $p$ forces $\dot a_{h(j)}\in U_j$. [F1, F2, construct]

2.1 Suppose, towards a contradiction, that some $r\le p$ forces that a tuple $\dot t\in\dot A^m$ lies in $\prod_{j<m}U_j$ but fails $\varphi(\check{\bar x},\dot t,\dot A)$. By finitely many applications of the membership forcing clause and density, strengthen $r$ so that $\dot t_j=\dot a_{z(j)}$ for a ground-model map $z:m\to\omega$. The disjointness of the $U_j$ and F2 make $z$ injective. Moreover, if $z(j)<k$, then $r\le p$ and $r\Vdash\dot a_{z(j)}\in[p_{h(j)}]$ give $p_{z(j)}=p_{h(j)}$; the pairwise distinct rows imply $z(j)=h(j)$. Thus every $z(j)\ne h(j)$ lies outside $k$. [F2, F3, step 1.2, assume-contra]

3.1 Let $\pi$ interchange $h(j)$ and $z(j)$ whenever they differ and fix every other coordinate. The transpositions are disjoint by the last conclusion of step 2.1. The symmetry lemma gives

$$\pi r\Vdash\neg\varphi(\check{\bar x},\dot s,\dot A),$$

because $\pi\dot a_{z(j)}=\dot a_{h(j)}$, while check names and $\dot A$ are fixed. On every row below $k$ not in $\operatorname{rng}(h)$, $\pi r$ agrees with $r$ and hence with $p$. On row $h(j)$, the part of $\pi r$ below column $k$ is the old $z(j)$-row of $r$, which equals $p_{h(j)}$ because $r$ forced $\dot a_{z(j)}\in U_j$. Since $p$ has domain $k\times k$, $p$ and $\pi r$ are compatible. [F1, F4, step 2.1]

4.1 A common extension of $p$ and $\pi r$ would force both $\varphi(\check{\bar x},\dot s,\dot A)$, by persistence from $p\le p'$, and its negation, by step 3.1. This is impossible. Hence $p$ forces that every tuple from $A$ in the displayed clopen box satisfies $\varphi$. Since such a $p$ is available below every $p'$ forcing the original instance, step 1.1 and density closure prove the first assertion in $V[G]$. [F3, step 1.1, step 3.1, discharge-contradiction]

5.1 For the consequence, choose fixed formulas and ordinal parameters which uniquely define the finitely many supported parameters from $A,u$. Replace their occurrences in the desired assertion by those definitions and conjoin uniqueness. Apply the first assertion to the concatenated tuple $u^\frown s$. Keep the coordinates belonging to $u$ at their original values and retain only the clopens belonging to $s$. All clopens in the larger box are pairwise disjoint, so the retained ones avoid $\operatorname{rng}(u)$; unique definability restores the fixed parameters after every permitted substitution. The construction is finite and makes no choice from an arbitrary family. [F5, step 4.1] ∎
