---
id: lem-lc-boolean-generic-truth
kind: lemma
title: Boolean truth for a supplied generic extension
status: published
origin: pipeline
deps: [lem-lc-generic-boolean-ground-joins, def-boolean-valued-name-semantics, lem-boolean-valued-semantics-is-well-defined, def-forcing-name-valuation-and-generic-extension, lem-forcing-names-and-name-ranks-are-absolute, def-forcing-names-and-name-rank]
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Geschke, Models of Set Theory, Boolean semantics Definition 6.27 pp.26–27; local ground-join truth proof
      url: https://www.math.uni-hamburg.de/home/geschke/teaching/ModelsSetTheory.pdf
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
---

## Statement

Work in ZF. Let $M$ be a transitive set model of ZF, let $\mathbb B\in M$ be internally complete and nontrivial, and let $G\subseteq\mathbb B\setminus\{0\}$ be an externally supplied $M$-generic filter in the Boolean order. Use Boolean names with coefficients in all of $\mathbb B$, including zero, and valuation by $G$. For each fixed finite formula $\varphi$ in the language of membership and every finite tuple of Boolean names $\vec\tau$ in $M$,

$$M[G]\models\varphi(\operatorname{val}_G(\vec\tau))\quad\Longleftrightarrow\quad \|\varphi(\vec\tau)\|^M\in G.$$

Here $M[G]$ is the set of valuations of Boolean names in $M$, with its actual membership relation, and Boolean values are computed internally in $M$. The assertion does not presume that $M[G]$ satisfies ZF, does not assert existence of $M$ or $G$, and does not give a formal consistency transfer. No form of Choice is used.

## Facts & Assumptions

**Given:** $M,\mathbb B,G$ and a fixed finite formula as in the statement. Names use the full Boolean algebra as coefficient set; genericity uses its nonzero forcing order.

[F1] A supplied generic Boolean filter is a proper ultrafilter; a ground-family join is in it exactly when a member is, and a ground-family meet is in it exactly when all members are. ([[lem-lc-generic-boolean-ground-joins]])

[F2] Atomic values are the specified subname joins and meets; existential values are joins of the set of attained matrix values. ([[def-boolean-valued-name-semantics]])

[F3] Each fixed formula has a definable unique Boolean value internally, using only internally complete ground-family operations. ([[lem-boolean-valued-semantics-is-well-defined]])

[F4] Valuation selects the subnames whose coefficients belong to $G$; $M[G]$ is precisely the set of valuations of ground names. ([[def-forcing-name-valuation-and-generic-extension]])

[F5] Ground-model namehood and name ranks agree with actual namehood and ranks. ([[lem-forcing-names-and-name-ranks-are-absolute]])

[F6] Each proper subname has strictly smaller ordinal name rank; finite iterated descendant closure is a set. ([[def-forcing-names-and-name-rank]])

## Proof

1.1 F3 supplies internally the values of each fixed formula on its parameters. In particular, all atomic term families, and each fixed existential's set of attained values, are members of $M$ by its Replacement or Separation. All their elements are actual elements of $\mathbb B$ by transitivity. F5 identifies all ground subnames and their ranks with the external ones. Thus F1 applies to these families, although the externally supplied $G$ need not belong to $M$. No assertion of absoluteness of existential Boolean values is needed. [F1, F2, F3, F5]

1.2 Fix ground names $s,t$. Their descendant closure $C\in M$ is a set closed under subnames: take the union of the finite iterations adjoining first coordinates of pair entries. On $C\times C$, order the complexity pairs $(\max(\operatorname{rk}_{\mathbb B}(u),\operatorname{rk}_{\mathbb B}(v)),\min(\operatorname{rk}_{\mathbb B}(u),\operatorname{rk}_{\mathbb B}(v)))$ lexicographically. Any nonempty set of these pairs has a least first coordinate and then a least second coordinate. Lowering either rank and retaining the other lowers this sorted pair, even when the coordinates exchange positions. Consequently simultaneous induction for equality and membership is legitimate: if some pair fails one of the two assertions, a least-complexity failing pair has all recursive subname pairs correct. [F5, F6]

2.1 For membership, F2 and F1 give $I(s,t)^M\in G$ exactly when some $\langle u,b\rangle\in t$ satisfies $b\wedge E(s,u)^M\in G$. In a proper Boolean filter this is equivalent to $b\in G$ and $E(s,u)^M\in G$: one direction uses upward closure and the other meet closure. Since $u$ is a proper subname of $t$, induction changes the equality clause to $\operatorname{val}_G(s)=\operatorname{val}_G(u)$. F4 now identifies the existence of this pair exactly with $\operatorname{val}_G(s)\in\operatorname{val}_G(t)$. This proves both membership directions at this pair. [F1, F2, F4, step 1.1, step 1.2]

2.2 For equality, F1 applied to each of the two ground meets in F2 says $E(s,t)^M\in G$ exactly when every $\langle u,b\rangle\in s$ satisfies $\neg b\vee I(u,t)^M\in G$, and every $\langle u,b\rangle\in t$ satisfies $\neg b\vee I(u,s)^M\in G$. Ultrafilterhood makes $\neg b\vee d\in G$ equivalent to the implication $b\in G\Rightarrow d\in G$. Indeed, if $b\notin G$ then $\neg b\in G$; if $d\in G$ the join is in $G$; and if both the join and $b$ are in $G$, their meet lies below $d$, so $d\in G$. Each membership call lowers the complexity by step 1.2. The induction hypotheses and F4 therefore identify the two conditions respectively with $\operatorname{val}_G(s)\subseteq\operatorname{val}_G(t)$ and the reverse inclusion. Actual Extensionality makes their conjunction equivalent to equality of the valuations. Both equality directions hold. [F1, F2, F4, step 1.1, step 1.2]

3.1 The simultaneous induction in steps 2.1–2.2 proves the assertion for all atomic formulas on ground names. Empty names cause no exception: their membership joins are zero and their empty equality requirements are one, matching empty valuation. A zero coefficient never belongs to $G$, and its implication clause is one, so zero coefficients impose no unwanted membership or equality condition. Since any two names admit the set descendant domain of step 1.2, this argument covers all the ground-name parameters. [F1, F2, F4, step 1.2, step 2.1, step 2.2]

4.1 Induct now on a fixed finite formula, using negation, conjunction and existential quantification as primitive logical operations. By F1, $\neg b\in G$ iff $b\notin G$, and $b\wedge c\in G$ iff both are in $G$. The corresponding external satisfaction clauses and the formula induction hypothesis establish the assertion for negation and conjunction, in both directions. Other finite Boolean connectives are their usual logical abbreviations. [F1, F2, step 3.1]

5.1 For an existential with ground tuple $\vec t$, put $A=\{b\in\mathbb B:M\models\exists\text{ Boolean name }s\ (b=\|\psi(s,\vec t)\|)\}$. This is the internally defined attained-value set in F2, so $A\in M$ by step 1.1. F1 says $\bigvee{}^M A\in G$ iff some $b\in A\cap G$ exists. Membership in this actual set $A$ means there is a witness name $s\in M$ with internal matrix value $b$; this is the semantics of the displayed existential in the supplied set structure $M$, and namehood agrees by F5. The formula induction hypothesis turns $b\in G$ into $M[G]\models\psi(\operatorname{val}_G(s),\operatorname{val}_G(\vec t))$. Conversely every witness in $M[G]$ has a ground name by F4, so an existentially true matrix supplies an attained value in $G$ and hence the join in $G$. This proves both existential directions without choosing a name for every element simultaneously. [F1, F2, F4, F5, step 1.1, step 4.1]

6.1 The finite formula induction proves the statement, including universal quantification by negation and existential quantification. It concerns external satisfaction for the set structures supplied, with one Boolean defining formula for each fixed object-language formula. The proof used neither a uniform truth predicate for the universe nor a Boolean validity proof for any ZF axiom. The only choices of names or join witnesses were single existential witnesses within implications, so the argument remains in ZF. [F3, step 3.1, step 4.1, step 5.1] ∎
