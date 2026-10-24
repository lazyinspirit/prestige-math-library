---
id: thm-forcing-preorders-have-regular-open-completions
kind: theorem
title: Choice-free regular open completion of forcing preorders
status: published
origin: pipeline
deps: [lem-separative-quotient-of-a-forcing-preorder, thm-regular-open-sets-form-a-complete-boolean-algebra]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "Karagila, Forcing lecture notes (2023), Theorem 2.34, printed pp. 12–13 (PDF pp. 15–16); local ZF closure and compatibility calculations"
      url: https://karagila.org/files/Forcing-2023.pdf
---

## Statement

In ZF every nonempty separative set partial order has an order embedding into the nonzero part of a complete Boolean algebra whose image is dense there and which preserves and reflects compatibility. For any forcing preorder $P$, its separative quotient has such an embedding. More explicitly, in the downward-open topology on $P$ the map $e(p)=\operatorname{int}\overline{\mathord\downarrow p}$ satisfies

$$e(p)\subseteq e(q)\iff p\le^*q,\qquad e(p)\cap e(q)\ne\varnothing\iff p,q\text{ are compatible}.$$

Here $\mathord\downarrow p=\{r\in P:r\le p\}$, and $\le^*$ is the separative preorder. No BPI or AC is assumed.

## Facts & Assumptions

[F1] [[lem-separative-quotient-of-a-forcing-preorder]] constructs the separative quotient, preserves and reflects compatibility, and proves $\le^*=\le$ in a separative partial order.

[F2] [[thm-regular-open-sets-form-a-complete-boolean-algebra]] gives a complete Boolean algebra for every topological space, ordered by inclusion, with finite meets equal to intersections; its proof shows $\operatorname{int}\overline E$ is regular open.

## Proof

**Given:** A nonempty set preorder $P$, with the stronger-condition convention of F1.

1.1 Declare a set open when it is downward closed. The empty set and $P$ qualify, and arbitrary unions and finite intersections of downward-closed sets remain downward closed, giving a topology. Every open neighborhood of $p$ contains $\mathord\downarrow p$, and this downset is itself open. Consequently $p\in\overline A$ iff $\mathord\downarrow p\cap A\ne\varnothing$, and $p\in\operatorname{int}A$ iff $\mathord\downarrow p\subseteq A$. In particular $\overline{\mathord\downarrow q}$ consists of the conditions compatible with $q$, and $p\in e(q)\iff(\forall r\le p)\ r\text{ is compatible with }q\iff p\le^*q$. F2 ensures $e(q)$ is regular open; it is nonempty since $q\le^*q$. [F1, F2, algebra]

2.1 If $p\le^*q$, transitivity from F1 shows that every $r\in e(p)$ is in $e(q)$, so $e(p)\subseteq e(q)$. Conversely that inclusion puts $p\in e(q)$, since $p\in e(p)$, and step 1.1 gives $p\le^*q$. A common original extension $r\le p,q$ belongs to $e(p)\cap e(q)$. Conversely if $r$ belongs to the intersection, $r\le^*p,q$. First choose $s\le r,p$, then, because $s\le r$, choose $t\le s,q$. This $t$ is a common original extension of $p,q$. Thus the two displayed equivalences hold. By F2, a nonempty intersection is exactly a nonzero Boolean meet, which is equivalent to compatibility in the Boolean algebra's nonzero part: the meet itself is a common nonzero lower bound, and any such bound lies below the meet. [F1, F2, step 1.1, algebra]

3.1 Let $U$ be a nonzero regular open, so $U\ne\varnothing$. Take one $p\in U$. Downward openness gives $\mathord\downarrow p\subseteq U$, and regularization is monotone, so $e(p)\subseteq\operatorname{int}\overline U=U$. Step 1.1 gives $e(p)\ne\varnothing$. This proves density among nonzero Boolean elements. If $P$ is separative, F1 and step 2.1 make $e$ an order embedding, hence injective by antisymmetry. For a general preorder, step 2.1 makes $e$ constant exactly on the mutual-$\le^*$ classes, and gives a well-defined injective order map from the quotient with the same range. F1 and step 2.1 give compatibility preservation and reflection for that map. Alternatively the same construction can be applied directly to the quotient. When $P$ has one element, its open algebra is $\{\varnothing,P\}$ and its single condition maps to $P$; the Boolean zero is excluded from the target forcing order. Empty preorders are outside the stated convention. Every witness selection above is finite, and neither a filter extension nor a maximal-family argument occurs. QED. [F1, F2, step 1.1, step 2.1, algebra]
