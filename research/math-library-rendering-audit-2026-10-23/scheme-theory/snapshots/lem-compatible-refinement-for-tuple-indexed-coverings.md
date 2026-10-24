---
id: lem-compatible-refinement-for-tuple-indexed-coverings
kind: lemma
title: "A refinement compatible with tuple-indexed coverings"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 0
deps: [def-compact-space, def-hausdorff-space,
       thm-a-compact-hausdorff-space-is-regular-and-normal,
       def-normal-and-t4-spaces, def-topological-space,
       thm-closure-characterisation-top,
       thm-closed-subspace-of-a-compact-space-is-compact,
       lem-compactness-of-a-subspace-is-ambient]
justified_by: []
aliases: []
proof_strategy: induction
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, Topology (chapter 5); §13, Lemma 13.5 (tag 09UW), compatible refinement for tuple-indexed coverings of a Hausdorff quasi-compact space"
      url: "https://stacks.math.columbia.edu/download/topology.pdf"
      locator: '§13, Lemma 13.5 (tag 09UW): for a Hausdorff quasi-compact space, an open cover (U_i), an integer p >= 0 and covers U_{i_0} cap ... cap U_{i_p} = union_k W_{i_0...i_p,k}, there is an open cover (V_j) with a map alpha such that V_j is contained in U_{alpha(j)} and each V_{j_0} cap ... cap V_{j_p} is contained in some W_{alpha(j_0)...alpha(j_p),k}'
---

## Statement

Let $X$ be a compact Hausdorff space ([[def-compact-space]],
[[def-hausdorff-space]]), let $I$ be a **finite** set, and let
$(U_i)_{i\in I}$ be an open cover of $X$. Fix an integer $p\ge0$, write
$$U_{i_0\dots i_p}:=U_{i_0}\cap\dots\cap U_{i_p}\qquad(i_0,\dots,i_p\in I),$$
and suppose that for every $(p+1)$-tuple $\underline i=(i_0,\dots,i_p)$ of
elements of $I$ a family $(W_{\underline i,k})_{k\in K_{\underline i}}$ of open
subsets of $U_{\underline i}$ is given which covers $U_{\underline i}$.

Then there are a finite set $J$, a map $\alpha:J\to I$, and an open cover
$(V_j)_{j\in J}$ of $X$ such that
$$V_j\subseteq U_{\alpha(j)}\qquad\text{for every }j\in J,$$
and such that for every $(p+1)$-tuple $(j_0,\dots,j_p)$ of elements of $J$
whose intersection $V_{j_0}\cap\dots\cap V_{j_p}$ is nonempty there is $k\in K_{\alpha(j_0)\dots\alpha(j_p)}$ with
$$V_{j_0}\cap\dots\cap V_{j_p}\subseteq W_{\alpha(j_0)\dots\alpha(j_p),k}.$$

Empty intersections impose no condition; this is necessary when a cover of an empty $U_{\underline i}$ has empty index set. No choice principle is used: every selection in the proof is made from
finitely many nonempty sets, and the empty-space case is covered by the empty refinement.

## Facts & Assumptions
**Given:** A compact Hausdorff space $X$, a finite set $I$, an open cover $(U_i)_{i\in I}$, an integer $p\ge0$, and for every $(i_0,\dots,i_p)\in I^{p+1}$ an open cover $(W_{\underline i,k})_{k\in K_{\underline i}}$ of $U_{\underline i}$.

[F1] Compactness of $X$ means that every open cover of $X$ has a finite subcover: either $X=\varnothing$ and the empty subfamily covers it, or there are $n\in\mathbb N$ and members $U_0,\dots,U_n$ of the cover with $X=U_0\cup\dots\cup U_n$; and a subset $K\subseteq X$ is a compact subset when the subspace $K$ is compact in its own right ([[def-compact-space]]).

[F2] A compact Hausdorff space is normal, and normal means that any two disjoint closed subsets can be separated by disjoint open sets ([[thm-a-compact-hausdorff-space-is-regular-and-normal]], [[def-normal-and-t4-spaces]]).

[F3] In a topological space, the intersection of any family of closed sets is closed and the union of finitely many closed sets is closed; for $A\subseteq X$ the closure $\overline A$ is closed, contains $A$, and is the smallest closed superset of $A$ ([[def-topological-space]], [[thm-closure-characterisation-top]]).

[F4] A closed subset of a compact space is a compact subset of it ([[thm-closed-subspace-of-a-compact-space-is-compact]]).

[F5] If a compact subset of $X$ is covered by an indexed family of ambient open subsets of $X$, finitely many indexed members cover it; this uses no choice principle ([[lem-compactness-of-a-subspace-is-ambient]], claim 2).



## Proof

**Proof technique:** induction on $p$, with an inner shrinking induction on the number of members of a finite cover and an inner finite descent on failing tuples.

1.1 **Finite shrinking.** Let $Y$ be a normal space and let $(A_1,\dots,A_m)$ be a finite open cover of $Y$. Then there are open sets $B_1,\dots,B_m$ with $\overline{B_i}\subseteq A_i$ for every $i$ and $Y=B_1\cup\dots\cup B_m$. Prove this by recursion on $i=1,\dots,m$, maintaining the invariant $$Y=\Bigl(\bigcup_{j<i}B_j\Bigr)\cup\Bigl(\bigcup_{j\ge i}A_j\Bigr).$$ The invariant holds at $i=1$ because the $A_j$ cover $Y$. Given the invariant for some $i\le m$, the set $F_i:=Y\setminus\bigl(\bigcup_{j<i}B_j\cup\bigcup_{j>i}A_j\bigr)$ is closed, and it is contained in $A_i$: if $x\in F_i$ and $x\notin A_i$, then the invariant puts $x$ in $\bigcup_{j<i}B_j\cup\bigcup_{j\ge i}A_j$; the first of these two sets is excluded by $x\in F_i$, while membership in the second together with $x\notin A_i$ forces $x\in A_j$ for some $j>i$, also excluded by $x\in F_i$. Now $F_i$ and $Y\setminus A_i$ are disjoint closed sets, so by normality there are disjoint open sets $G\supseteq F_i$ and $H\supseteq Y\setminus A_i$; set $B_i:=G$. Then $\overline{B_i}\subseteq Y\setminus H\subseteq A_i$ by [F3], and the invariant for $i+1$ holds because $\bigcup_{j\le i}B_j\cup\bigcup_{j>i}A_j$ contains $\bigcup_{j<i}B_j\cup F_i\cup\bigcup_{j>i}A_j=Y$. At $i=m+1$ the invariant reads $Y=B_1\cup\dots\cup B_m$. [F2, F3, construct]

1.2 **The base case $p=0$.** Suppose $p=0$, so that for every $i\in I$ a family $(W_{i,k})_{k\in K_i}$ of open subsets of $U_i$ covering $U_i$ is given. The family of all $W_{i,k}$ with $i\in I$ and $k\in K_i$ is an open cover of $X$: a point $x$ lies in some $U_i$, hence in some $W_{i,k}$. By compactness [F1] there are finitely many pairs $(i_1,k_1),\dots,(i_m,k_m)$ with $X=W_{i_1,k_1}\cup\dots\cup W_{i_m,k_m}$. Take $J:=\{1,\dots,m\}$, $V_t:=W_{i_t,k_t}$ and $\alpha(t):=i_t$. Then $V_t\subseteq U_{\alpha(t)}$ and the one-element tuple $(t)$ is contained in the member $W_{\alpha(t),k_t}$ of the family indexed by the tuple $(\alpha(t))$. Hence the statement holds for $p=0$. [F1, base]

1.3 **Induction hypothesis and the auxiliary covers.** Assume now $p\ge1$ and assume the statement is proved for $p-1$ with the same space $X$: for every finite open cover of $X$ and every family of covers indexed by the $(p)$-tuples, a finite refinement $(V_j,\alpha)$ as in the statement exists. For each $p$-tuple $\underline i'=(i'_0,\dots,i'_{p-1})$ of elements of $I$ define a cover of the open set $U_{\underline i'}$ as follows. Let $S:=\{i'_0,\dots,i'_{p-1}\}$, the set of entries of $\underline i'$; it is a nonempty finite set of size at most $p$. Let $\Phi$ be the set of $(p+1)$-tuples $\underline i\in I^{p+1}$ whose set of entries is exactly $S$; the set $\Phi$ is finite and nonempty, and for every $\underline i\in\Phi$ one has $U_{\underline i}=\bigcap_{i\in S}U_i=U_{\underline i'}$. Let the new family consist of all intersections $$W'_{\underline i',(k_{\underline i})_{\underline i\in\Phi}}:=\bigcap_{\underline i\in\Phi}W_{\underline i,k_{\underline i}}\qquad(k_{\underline i}\in K_{\underline i}\ \text{for each}\ \underline i\in\Phi),$$ indexed by the tuples of choices $(k_{\underline i})_{\underline i\in\Phi}$. Each of these intersections is an open subset of $U_{\underline i'}$, and the family covers $U_{\underline i'}$: a point $x\in U_{\underline i'}$ lies in $U_{\underline i}$ for every $\underline i\in\Phi$, hence in some member $W_{\underline i,k_{\underline i}}$ of each of the finitely many covers, and therefore in the corresponding intersection. [F1, construct]

2.1 **The intermediate refinement.** Apply the induction hypothesis of step 1.3 to the cover $(U_i)_{i\in I}$ and these covers indexed by $p$-tuples. This gives a finite set $J$, a map $\alpha:J\to I$ and an open cover $(V_j)_{j\in J}$ of $X$ with $V_j\subseteq U_{\alpha(j)}$ such that for every $p$-tuple $(j_0,\dots,j_{p-1})$ of elements of $J$ with nonempty intersection some member of the family $W'_{\alpha(j_0)\dots\alpha(j_{p-1})}$ contains $V_{j_0}\cap\dots\cap V_{j_{p-1}}$. Apply the shrinking of step 1.1 to this finite cover (the space $X$ is normal by [F2]) and replace every $V_j$ by its shrinking; rename the result $(V_j)_{j\in J}$. All containments of intersections in members of the families $W'$ persist, because each new $V_j$ is a subset of the old one. The outcome is a finite open cover with $$V_j\subseteq\overline{V_j}\subseteq U_{\alpha(j)}\qquad(j\in J)$$ and with the $p$-tuple property just recalled. [step 1.1, step 1.3, ih]

3.1 **Tuples with a repetition.** Call a tuple compatible if its intersection is empty or is contained in a member of the prescribed cover. Suppose $(j_0,\dots,j_p)$ has nonempty intersection and repeated $\alpha$-values. Drop a position whose value repeats; the remaining $p$-tuple has the same set $S$ of $\alpha$-values and nonempty intersection. Step 2.1 puts that intersection in a member of the meet cover of step 1.3. Such a member is contained in a $W_{\underline i,k}$ for each value tuple $\underline i$ with entry set $S$, in particular $\underline i=(\alpha(j_0),\dots,\alpha(j_p))$. The full intersection is smaller, hence compatible. [step 1.3, step 2.1, algebra]

3.2 **The fix-up operation.** Fix a pairwise-distinct value tuple $\underline i=(i_0,\dots,i_p)$ and an incompatible tuple $(j_0,\dots,j_p)$ with $\alpha(j_t)=i_t$. Put $$C:=\bigcap_{t=1}^p\Bigl(\bigcup_{\alpha(j)=i_t}\overline{V_j}\Bigr),\qquad\Sigma:=\overline{V_{j_0}}\cap C.$$ The unions are finite, so $C$ and $\Sigma$ are closed. Each union in the intersection is contained in $U_{i_t}$ by step 2.1; hence $\Sigma\subseteq U_{\underline i}$ and $\Sigma$ is compact [F4]. The given incompatible intersection is nonempty and contained in $\Sigma$, so $\Sigma\ne\varnothing$. Choose a finite nonempty set $E\subseteq K_{\underline i}$ with $\Sigma\subseteq\bigcup_{k\in E}W_{\underline i,k}$ by [F5]: the $W_{\underline i,k}$ are open in $X$ because $U_{\underline i}$ is open in $X$. Replace $V_{j_0}$ by $$H:=V_{j_0}\setminus C,\qquad B_k:=V_{j_0}\cap W_{\underline i,k}\quad(k\in E),$$ using disjoint new index labels, each mapped to $i_0$. These opens cover $V_{j_0}$: a point in $C\cap V_{j_0}$ belongs to $\Sigma$ and hence to some $B_k$, and a point outside $C$ belongs to $H$. They are subsets of $V_{j_0}$, so their closures remain in $U_{i_0}$. The other members are unchanged; the resulting family is a finite open refinement with the same closure property. [step 2.1, F3, F4, F5, construct]

4.1 **The counts.** For a pairwise-distinct value tuple $\underline i$, let $N(\underline i)$ be the number of incompatible tuples of indices whose $\alpha$-values are $\underline i$. This is finite. Let $M$ be the number of value tuples with $N(\underline i)>0$; this is finite because $I$ is finite. Compatibility for repeated values was proved in step 3.1, so $M=0$ suffices for the conclusion. [step 3.1, algebra]

5.1 **The chosen count decreases.** After step 3.2, a tuple with value tuple $\underline i$ using $B_k$ is contained in $W_{\underline i,k}$. A tuple using $H$ has empty intersection: its remaining members, with values $i_1,\dots,i_p$, have intersection contained in $C$. Tuples using no new index are unchanged. Every tuple using the deleted $j_0$ has disappeared, including the chosen incompatible tuple, and all its replacements are compatible. Thus $N(\underline i)$ strictly decreases. [step 3.2, step 4.1, algebra]

5.2 **Zero counts remain zero.** Map every new index to $j_0$ and keep the other indices fixed, obtaining $\beta:J^*\to J$. The new opens satisfy $V^*_{j^*}\subseteq V_{\beta(j^*)}$ and $\alpha^*=\alpha\circ\beta$. Any tuple whose old $\beta$-image was compatible remains compatible, because its intersection is smaller; an empty old intersection stays empty. Therefore every zero count remains zero, and compatibility for repeated values persists. Positive counts for other value tuples may increase, since $\beta$ need not be injective on tuples; no bound on those counts is asserted. [step 3.1, step 3.2, step 4.1, algebra]

6.1 **Finite descent.** If $M>0$, fix one value tuple $\underline i$ with $N(\underline i)>0$ and repeatedly perform step 3.2 for this same value tuple. Step 5.1 strictly decreases its finite count at each operation, so after finitely many operations its count is zero. By step 5.2 all previously zero counts remain zero, so this lowers $M$. Repeating for at most the original $M$ value tuples produces $M=0$, while compatibility for repeated values persists. Each inner and outer descent is finite, so it requires only finite selections. [step 5.1, step 5.2, discharge-induction]

7.1 **Conclusion.** The finite open family produced by step 6.1 refines $(U_i)$ and is compatible for every tuple, by steps 3.1 and 4.1. This proves the induction step from $p-1$ to $p$; together with step 1.2 it proves the result for all $p\ge0$. Empty intersections require no witness, and for $X=\varnothing$ take $J=\varnothing$. [step 1.2, step 3.1, step 4.1, step 6.1, discharge-induction] ∎

## Remarks

- The intersection of the finite unions of closures in step 3.2 controls all tuples with the chosen value tuple and the chosen first member at once. The inner descent decreases its count $N$; the outer descent decreases the number $M$ of failing value tuples. A many-to-one refinement map preserves compatibility, but does not bound the number of incompatible tuples.

- In the application to local lifts of quotient-sheaf sections, a cochain component over an empty intersection is zero and has the zero lift. The nonempty intersections are exactly those for which a compatible-refinement witness is needed.
