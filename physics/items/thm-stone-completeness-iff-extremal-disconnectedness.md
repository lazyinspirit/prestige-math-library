---
id: thm-stone-completeness-iff-extremal-disconnectedness
kind: theorem
title: Completeness, extremal disconnectedness, and regular-open clopens
status: published
origin: pipeline
deps: [def-complete-boolean-algebra-and-regular-open-sets, thm-regular-open-sets-form-a-complete-boolean-algebra, thm-stone-clopen-representation-under-bpi]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "Fremlin, Measure Theory, 314S, Chapter 31, p. 40"
      url: https://www1.essex.ac.uk/maths/people/fremlin/chap31.pdf
---

## Statement

Assume BPI. For a Boolean algebra $B$ with Stone space $X=\operatorname{Ult}(B)$, the following are equivalent: $B$ is complete; $X$ is extremally disconnected, meaning the closure of every open subset is open; and $\operatorname{Clop}(X)=\operatorname{RO}(X)$. When the two algebras coincide their Boolean structures agree. Empty spaces and trivial Boolean algebras are included.

## Facts & Assumptions

[F1] [[def-complete-boolean-algebra-and-regular-open-sets]] defines completeness and regular opens, with empty bounds included.

[F2] [[thm-regular-open-sets-form-a-complete-boolean-algebra]] proves completeness of $\operatorname{RO}(X)$ and gives its finite Boolean operations.

[F3] [[thm-stone-clopen-representation-under-bpi]] identifies $B$ with all clopens under BPI; its sets $[b]$ form a basis and reflect order.

## Proof

**Given:** BPI, a Boolean algebra $B$ and $X=\operatorname{Ult}(B)$.

1.1 Assume $B$ is complete, and let $G\subseteq X$ be open. Set $A=\{a\in B:[a]\subseteq G\}$ and $b=\bigvee A$. The basis property of F3 gives $G=\bigcup_{a\in A}[a]$. Hence $G\subseteq[b]$, and since $[b]$ is closed, $\overline G\subseteq[b]$. If $[b]\setminus\overline G$ were nonempty, it would be open and F3 would supply $0<d\in B$ with $[d]\subseteq[b]\setminus\overline G$. Order reflection gives $d\le b$ and $d\wedge a=0$ for every $a\in A$. Thus $b\wedge\neg d$ would be an upper bound of $A$ strictly below $b$, impossible. Therefore $[b]=\overline G$, which is open. This proves extremal disconnectedness, including $G=\varnothing$, where $A=\{0\}$, $b=0$ and $\overline G=\varnothing$. [F1, F3, algebra]

1.2 Assume $X$ is extremally disconnected. Each clopen $K$ satisfies $K=\operatorname{int}\overline K$, so it is regular open. Conversely for regular open $U$, the closure $\overline U$ is open by the assumption. Hence $U=\operatorname{int}\overline U=\overline U$, so $U$ is also closed. This proves equality of the two sets of subsets. [F1, given, algebra]

2.1 Assume $\operatorname{Clop}(X)=\operatorname{RO}(X)$. On clopens, F2's binary meet, complement and binary join reduce respectively to intersection, set complement and union, since the result is already clopen; the bounds are the same as well. Thus the equality is an equality of Boolean algebras. Completeness of F2 transfers through the isomorphism F3 to $B$: for $A\subseteq B$, take the regular-open supremum of $\{[a]:a\in A\}$, which by the assumed equality is a clopen $[b]$; order reflection makes $b$ exactly the least upper bound of $A$. Empty suprema are included. This proves completeness of $B$ and closes the three-implication cycle with steps 1.1 and 1.2. If $B$ is trivial, $X$ is empty and all three claims hold with the sole subset $\varnothing$; the operation comparison still applies. Arbitrary unions of clopens need not themselves be clopen: the common algebra's arbitrary join is the regularized union from F2. QED. [F1, F2, F3, step 1.1, step 1.2, algebra]
