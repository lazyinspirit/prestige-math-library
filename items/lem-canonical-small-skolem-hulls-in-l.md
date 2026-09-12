---
id: "lem-canonical-small-skolem-hulls-in-l"
kind: "lemma"
title: "Canonical L-hulls are elementary and small"
deps: ["def-skolem-hulls-in-constructible-levels", "thm-transfinite-recursion", "lem-cardinality-of-a-well-orderable-set", "thm-hessenberg", "prop-constructible-levels-transitivity-ordinals-and-rank"]
justified_by: []
forward_refs: []
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: "Lietz, Set Theory, section 7.2, Lemma 7.11 and Theorem 7.13 (hulls), Proposition 7.14 (counting), printed pp.57–59; local choice-free coding argument"
      url: "https://andreas-lietz.github.io/resources/PDFs/Lecture_Notes.pdf"
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

In ZF, for a nonzero limit ordinal $\alpha$ and $A\subseteq L_\alpha$, the hull $H=\operatorname{Hull}^{L_\alpha}(A)$ exists as a set and $(H,\in)$ is elementary in $(L_\alpha,\in)$. If $A$ is infinite and well-orderable, then $H$ is well-orderable and $|H|=|A|$. If $A$ is finite, including empty, $H$ is countably infinite.

## Facts & Assumptions

**Given:** ZF, a nonzero limit ordinal alpha, and a seed A contained in its level. Elementarity means agreement on every membership formula with parameters in H.

[F1] [[def-skolem-hulls-in-constructible-levels]] specifies the functions $f_i$, their default, and the stages $H_n$.

[F2] [[thm-transfinite-recursion]] supplies unique set recursions on ordinal intervals in ZF without choice.

[F3] [[lem-cardinality-of-a-well-orderable-set]] assigns cardinalities to well-orderable sets without AC, in clauses (a)–(e).

[F4] [[thm-hessenberg]] gives $|\kappa\times\kappa|=\kappa$ for each infinite well-orderable cardinal in ZF.

[F5] [[prop-constructible-levels-transitivity-ordinals-and-rank]] gives transitivity and $L_\alpha\cap\operatorname{Ord}=\alpha$.

## Proof

1.1 Each $f_i$ is a set function: its graph is obtained by Separation from $L_\alpha^{k_i}\times L_\alpha$, using the set satisfaction relation and the set well-order in F1. The joint evaluation relation is a set as well, since the formula indices and finite tuples form a set. Replacement therefore forms the successor closure of any subset of $L_\alpha$. F2 on $\omega$ gives the unique stage sequence; Union gives $H\subseteq L_\alpha$. [F1, F2]

2.1 Every finite tuple from $H$ belongs to some common $H_n$: take the maximum of the finitely many first-entry stages. Thus its image under any $f_i$ lies in $H_{n+1}$. The zero-arity case puts a witness for $y=y$ in $H_1$ even if $A=\varnothing$. Hence $H$ is nonempty and closed under all the specified functions. [F1, step 1.1]

2.2 Every element of H is the value of a finite term formed from the operation symbols $f_i$ and constants naming members of A. Indeed constants give $H_0$, and an element entering $H_{n+1}$ is an operation on finitely many earlier terms; conversely every term has finite depth and its value is in that stage of the closure. Nullary symbols are terms without seed constants. [F1, step 1.1]

3.1 Prove agreement of satisfaction by induction on formulas. Atoms agree since H carries the restricted membership relation. Negation and conjunction preserve agreement. If $L_\alpha\models\exists y\psi(y,a)$ with $a$ in H, the corresponding function gives $b\in H$ with $L_\alpha\models\psi(b,a)$; the induction hypothesis makes this true in H. Conversely a witness in H satisfies the same subformula in $L_\alpha$ by that hypothesis. These two directions complete the existential step, hence prove elementarity for all formulas. [F1, step 2.1]

3.2 If A is infinite and well-orderable, fix one bijection between A and its cardinal $\kappa$ from F3. If A is finite fix a finite enumeration and put $\kappa=\omega$. In either case the alphabet consisting of parentheses, countably many operation symbols and seed labels injects into $\kappa$. Fix one bijection $\kappa\times\kappa\to\kappa$ using F4. Its iterates encode finite strings of each length; encoding the length together with the iterated value encodes all finite strings in $\kappa$. This uses one fixed bijection and ordinary recursion, not countably many choices. The set of valid terms therefore injects into $\kappa$. [F2, F3, F4, step 2.2]

4.1 Assign to $x\in H$ the least code of a term evaluating to x. Such a code exists by step 2.2, and distinct values have distinct least codes. This injects H into $\kappa$ and gives a well-order of H. For infinite A the inclusion $A\subseteq H$ supplies the opposite cardinal bound, so $|H|=|A|$. For finite A, step 3.1 implies H contains every natural number: zero is the unique empty set in the transitive level, and from n its unique ordinal successor in that level is obtained by the successor-defining formula. All finite ordinals belong to every nonzero limit L level. Thus $\omega\subseteq H$, and the upper bound makes H countably infinite. No AC is used in either case. [F1, F3, F5, step 3.1, step 2.2, step 3.2] ∎
