---
id: lem-fair-coin-open-content-is-countably-subadditive
kind: lemma
title: Choice-free fair-coin content on open subsets of binary sequence space
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-binary-sequence-cylinders-and-fair-coin-content, lem-binary-sequence-space-is-compact-without-tychonoff, thm-fair-coin-measure-on-binary-sequences, def-countable-choice]
proof_strategy: direct
sources:
  references:
    - title: "Eriksson and Weigert, Examples 2.8-2.9, cylinder algebra and finite fair-coin content"
      url: "https://webspace.maths.qmul.ac.uk/f.vivaldi/teaching/ETAD/NotesI.pdf"
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-24'
    scope: Bounded mathematical new_item review recorded in /home/lazyinspirit/Projects/prestige-math-library/research/ap-131-sol-repair/agent-10-receipts.jsonl.
      Local checks and any separate second-reader evidence are recorded in the run
      report; this is not an independent judge verdict or whole-library certification.
    delegated_by: user
---

## Statement

Let $\Omega=2^\omega$, let $\mathcal C$ be its algebra of finite unions of
cylinders, and let $p_0:\mathcal C\to[0,1]$ be the fair-coin content of
[[def-binary-sequence-cylinders-and-fair-coin-content]]. For every open
$U\subseteq\Omega$ define its **fair-coin open content** by
$$\mu_o(U):=\sup\{p_0(C):C\in\mathcal C,\ C\subseteq U\}.$$
This definition and the following assertions are choice-free:
$\mu_o(\varnothing)=0$, $\mu_o(\Omega)=1$,
$\mu_o([\sigma])=2^{-|\sigma|}$ for every prefix cylinder,
$\mu_o$ is monotone, and for every sequence of open sets
$$\mu_o\Bigl(\bigcup_{i\ge0}U_i\Bigr) \le\sum_{i\ge0}\mu_o(U_i).$$
For pairwise disjoint open sets equality holds. If countable choice is
assumed, the unique Borel fair-coin probability $\mu$ of
[[thm-fair-coin-measure-on-binary-sequences]] satisfies
$\mu_o(U)=\mu(U)$ for every open $U$. No Borel measure on all Borel sets
is asserted in the choice-free part.

## Facts & Assumptions

**Given:** The cylinder algebra and content $p_0$, and an arbitrary
sequence of open subsets of $\Omega$.

[F1] The cylinder algebra consists of finite unions of clopen cylinders;
$p_0$ is monotone and finitely additive, with total mass one and the
displayed cylinder masses
([[def-binary-sequence-cylinders-and-fair-coin-content]]).

[F2] Binary sequence space is compact and its prefix cylinders form a
countable base, by an explicit finite-branching argument without choice
([[lem-binary-sequence-space-is-compact-without-tychonoff]]).

[F3] Under countable choice, there is a Borel probability extending $p_0$
([[thm-fair-coin-measure-on-binary-sequences]], [[def-countable-choice]]).

## Proof

**Proof technique:** direct.

1.1 The collection in the supremum is nonempty because it contains $\varnothing$, and all its values lie in $[0,1]$ by [F1], so the real supremum exists. Monotonicity follows by inclusion of the collections being supremized. The empty and whole-space values follow directly from $p_0(\varnothing)=0$ and $p_0(\Omega)=1$. If $C\subseteq[\sigma]$ is clopen, [F1] gives $p_0(C)\le p_0([\sigma])$; taking $C=[\sigma]$ gives the reverse bound and proves the cylinder formula. [F1, given, algebra]

2.1 Let $U=\bigcup_iU_i$, and fix $C\in\mathcal C$ with $C\subseteq U$. The family $\{\Omega\setminus C\}\cup\{U_i:i\ge0\}$ is an open cover of $\Omega$. By [F2] finitely many $U_i$, indexed by a finite set $F$, cover $C$. Consider **all** prefix cylinders contained in at least one $U_i$ with $i\in F$; they cover $C$ because prefix cylinders form a base. Together with $\Omega\setminus C$ they cover $\Omega$, so compactness gives finitely many such cylinders covering $C$. Assign each selected cylinder to the least eligible $i\in F$, and let $C_i$ be the finite union of cylinders assigned to $i$. Then $C\subseteq\bigcup_{i\in F}C_i$ and $C_i\subseteq U_i$. By [F1], $p_0(C)\le\sum_{i\in F}p_0(C_i) \le\sum_{i\in F}\mu_o(U_i)\le\sum_{i\ge0}\mu_o(U_i)$. Taking the supremum over $C$ proves countable subadditivity. No choice of a cylinder for each point was made; the finite selections came from the stated compactness conclusion. [F1, F2, step 1.1, algebra]

3.1 If $U,V$ are disjoint and open, clopen $C_U\subseteq U$ and $C_V\subseteq V$ are disjoint, so [F1] gives $p_0(C_U)+p_0(C_V)=p_0(C_U\cup C_V)\le\mu_o(U\cup V)$. Taking the two suprema yields $\mu_o(U)+\mu_o(V)\le\mu_o(U\cup V)$; step 2.1 gives the reverse inequality. Induction yields finite additivity on pairwise disjoint opens. For a disjoint sequence, monotonicity then gives $\mu_o(\bigcup_iU_i)\ge\sum_{i<k}\mu_o(U_i)$ for every $k$; take the supremum in $k$ and combine with step 2.1 to obtain equality. [F1, step 1.1, step 2.1, algebra]

4.1 Now assume countable choice and take the Borel measure $\mu$ of [F3]. Enumerate all prefix cylinders contained in an open $U$ in the canonical length-then-binary-value order, and let $C_k$ be the union of those among the first $k$ strings that are contained in $U$. Each $C_k$ belongs to $\mathcal C$, the sequence increases, and $\bigcup_kC_k=U$ by [F2]. Continuity from below of $\mu$ gives $\mu(U)=\sup_k\mu(C_k)=\sup_kp_0(C_k)\le\mu_o(U)$. Conversely, if $C\in\mathcal C$ lies in $U$, then the open cover $\{C_k:k\ge0\}\cup\{\Omega\setminus C\}$ of compact $\Omega$ has a finite subcover. Since the $C_k$ increase, $C\subseteq C_k$ for some $k$. Thus $p_0(C)\le p_0(C_k)\le\mu(U)$, and taking the supremum proves $\mu_o(U)\le\mu(U)$. [F2, F3, step 1.1, algebra] ∎