---
id: lem-compatible-refinement-for-tuple-indexed-coverings
kind: lemma
title: "A refinement compatible with tuple-indexed coverings"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 0
deps: [def-compact-space, def-hausdorff-space,
       thm-a-compact-hausdorff-space-is-regular-and-normal,
       def-normal-and-t4-spaces, def-topological-space,
       thm-closure-characterisation-top,
       thm-closed-subspace-of-a-compact-space-is-compact]
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
there is $k\in K_{\alpha(j_0)\dots\alpha(j_p)}$ with
$$V_{j_0}\cap\dots\cap V_{j_p}\subseteq W_{\alpha(j_0)\dots\alpha(j_p),k}.$$

No choice principle is used: every selection in the proof is made from
finitely many nonempty sets, and the empty index conventions of
[[def-compact-space]] cover the degenerate cases.

## Facts & Assumptions
**Given:** A compact Hausdorff space $X$, a finite set $I$, an open cover $(U_i)_{i\in I}$, an integer $p\ge0$, and for every $(i_0,\dots,i_p)\in I^{p+1}$ an open cover $(W_{\underline i,k})_{k\in K_{\underline i}}$ of $U_{\underline i}$.

[F1] Compactness of $X$ means that every open cover of $X$ has a finite subcover: either $X=\varnothing$ and the empty subfamily covers it, or there are $n\in\mathbb N$ and members $U_0,\dots,U_n$ of the cover with $X=U_0\cup\dots\cup U_n$; and a subset $K\subseteq X$ is a compact subset when the subspace $K$ is compact in its own right ([[def-compact-space]]).

[F2] A compact Hausdorff space is normal, and normal means that any two disjoint closed subsets can be separated by disjoint open sets ([[thm-a-compact-hausdorff-space-is-regular-and-normal]], [[def-normal-and-t4-spaces]]).

[F3] In a topological space, the intersection of any family of closed sets is closed and the union of finitely many closed sets is closed; for $A\subseteq X$ the closure $\overline A$ is closed, contains $A$, and is the smallest closed superset of $A$ ([[def-topological-space]], [[thm-closure-characterisation-top]]).

[F4] A closed subset of a compact space is a compact subset of it ([[thm-closed-subspace-of-a-compact-space-is-compact]]).



## Proof

**Proof technique:** induction on $p$, with an inner shrinking induction on the number of members of a finite cover and an inner finite descent on failing tuples.

1.1 **Finite shrinking.** Let $Y$ be a normal space and let $(A_1,\dots,A_m)$ be a finite open cover of $Y$. Then there are open sets $B_1,\dots,B_m$ with $\overline{B_i}\subseteq A_i$ for every $i$ and $Y=B_1\cup\dots\cup B_m$. Prove this by recursion on $i=1,\dots,m$, maintaining the invariant $$Y=\Bigl(\bigcup_{j<i}B_j\Bigr)\cup\Bigl(\bigcup_{j\ge i}A_j\Bigr).$$ The invariant holds at $i=1$ because the $A_j$ cover $Y$. Given the invariant for some $i\le m$, the set $F_i:=Y\setminus\bigl(\bigcup_{j<i}B_j\cup\bigcup_{j>i}A_j\bigr)$ is closed, and it is contained in $A_i$: if $x\in F_i$ and $x\notin A_i$, then the invariant puts $x$ in $\bigcup_{j<i}B_j\cup\bigcup_{j\ge i}A_j$; the first of these two sets is excluded by $x\in F_i$, while membership in the second together with $x\notin A_i$ forces $x\in A_j$ for some $j>i$, also excluded by $x\in F_i$. Now $F_i$ and $Y\setminus A_i$ are disjoint closed sets, so by normality there are disjoint open sets $G\supseteq F_i$ and $H\supseteq Y\setminus A_i$; set $B_i:=G$. Then $\overline{B_i}\subseteq Y\setminus H\subseteq A_i$ by [F3], and the invariant for $i+1$ holds because $\bigcup_{j\le i}B_j\cup\bigcup_{j>i}A_j$ contains $\bigcup_{j<i}B_j\cup F_i\cup\bigcup_{j>i}A_j=Y$. At $i=m+1$ the invariant reads $Y=B_1\cup\dots\cup B_m$. [F2, F3, construct]

1.2 **The base case $p=0$.** Suppose $p=0$, so that for every $i\in I$ a family $(W_{i,k})_{k\in K_i}$ of open subsets of $U_i$ covering $U_i$ is given. The family of all $W_{i,k}$ with $i\in I$ and $k\in K_i$ is an open cover of $X$: a point $x$ lies in some $U_i$, hence in some $W_{i,k}$. By compactness [F1] there are finitely many pairs $(i_1,k_1),\dots,(i_m,k_m)$ with $X=W_{i_1,k_1}\cup\dots\cup W_{i_m,k_m}$. Take $J:=\{1,\dots,m\}$, $V_t:=W_{i_t,k_t}$ and $\alpha(t):=i_t$. Then $V_t\subseteq U_{\alpha(t)}$ and the one-element tuple $(t)$ is contained in the member $W_{\alpha(t),k_t}$ of the family indexed by the tuple $(\alpha(t))$. Hence the statement holds for $p=0$. [F1, base]

1.3 **Induction hypothesis and the auxiliary covers.** Assume now $p\ge1$ and assume the statement is proved for $p-1$ with the same space $X$: for every finite open cover of $X$ and every family of covers indexed by the $(p)$-tuples, a finite refinement $(V_j,\alpha)$ as in the statement exists. For each $p$-tuple $\underline i'=(i'_0,\dots,i'_{p-1})$ of elements of $I$ define a cover of the open set $U_{\underline i'}$ as follows. Let $S:=\{i'_0,\dots,i'_{p-1}\}$, the set of entries of $\underline i'$; it is a nonempty finite set of size at most $p$. Let $\Phi$ be the set of $(p+1)$-tuples $\underline i\in I^{p+1}$ whose set of entries is exactly $S$; the set $\Phi$ is finite and nonempty, and for every $\underline i\in\Phi$ one has $U_{\underline i}=\bigcap_{i\in S}U_i=U_{\underline i'}$. Let the new family consist of all intersections $$W'_{\underline i',(k_{\underline i})_{\underline i\in\Phi}}:=\bigcap_{\underline i\in\Phi}W_{\underline i,k_{\underline i}}\qquad(k_{\underline i}\in K_{\underline i}\ \text{for each}\ \underline i\in\Phi),$$ indexed by the tuples of choices $(k_{\underline i})_{\underline i\in\Phi}$. Each of these intersections is an open subset of $U_{\underline i'}$, and the family covers $U_{\underline i'}$: a point $x\in U_{\underline i'}$ lies in $U_{\underline i}$ for every $\underline i\in\Phi$, hence in some member $W_{\underline i,k_{\underline i}}$ of each of the finitely many covers, and therefore in the corresponding intersection. [F1, construct]

2.1 **The intermediate refinement.** Apply the induction hypothesis of step 1.3 to the cover $(U_i)_{i\in I}$ and these covers indexed by $p$-tuples. This gives a finite set $J$, a map $\alpha:J\to I$ and an open cover $(V_j)_{j\in J}$ of $X$ with $V_j\subseteq U_{\alpha(j)}$ such that for every $p$-tuple $(j_0,\dots,j_{p-1})$ of elements of $J$ some member of the family $W'_{\alpha(j_0)\dots\alpha(j_{p-1})}$ contains $V_{j_0}\cap\dots\cap V_{j_{p-1}}$. Apply the shrinking of step 1.1 to this finite cover (the space $X$ is normal by [F2]) and replace every $V_j$ by its shrinking; rename the result $(V_j)_{j\in J}$. All containments of intersections in members of the families $W'$ persist, because each new $V_j$ is a subset of the old one. The outcome is a finite open cover with $$V_j\subseteq\overline{V_j}\subseteq U_{\alpha(j)}\qquad(j\in J)$$ and with the $p$-tuple property just recalled. [step 1.1, step 1.3, ih]

3.1 **Tuples with a repetition are already compatible.** Let $(j_0,\dots,j_p)$ be a $(p+1)$-tuple of elements of $J$ whose $\alpha$-values are not pairwise distinct, say $\alpha(j_a)=\alpha(j_b)$ for some $a\ne b$. Drop the position $b$ and consider the $p$-tuple $(j'_0,\dots,j'_{p-1})$ of the remaining indices; its set of $\alpha$-values equals $\{\alpha(j_0),\dots,\alpha(j_p)\}=:S$. By the property of step 2.1 there is a member of the family $W'_{\alpha(j'_0)\dots\alpha(j'_{p-1})}$ containing $V_{j'_0}\cap\dots\cap V_{j'_{p-1}}$, and by the definition of that family in step 1.3 every one of its members is contained in $W_{\underline i,k}$ for every $(p+1)$-tuple $\underline i$ with set of entries $S$ and every $k$ occurring in the corresponding choice; taking $\underline i:=(\alpha(j_0),\dots,\alpha(j_p))$, whose set of entries is $S$, we find $k\in K_{\underline i}$ with $V_{j'_0}\cap\dots\cap V_{j'_{p-1}}\subseteq W_{\alpha(j_0)\dots\alpha(j_p),k}$. Finally $V_{j_0}\cap\dots\cap V_{j_p}\subseteq V_{j'_0}\cap\dots\cap V_{j'_{p-1}}$, since the right-hand intersection is over a subfamily of the same members. Hence every such tuple satisfies the required containment. [step 1.3, step 2.1, algebra]

3.2 **The fix-up operation.** Suppose $\underline i=(i_0,\dots,i_p)$ is pairwise distinct and $(j_0,\dots,j_p)$ is a tuple bad for it. Put $$C:=\bigcup\{\,\overline{V_j}:\ j\in J,\ \alpha(j)\in\{i_1,\dots,i_p\}\,\},$$ a finite union of closed sets, hence closed, with $C\subseteq U_{i_1}\cap\dots\cap U_{i_p}$ by step 2.1. Then $$\Sigma:=\overline{V_{j_0}}\cap C$$ is closed in $X$ as an intersection of closed sets, hence a compact subset of $X$ by [F4], and $$\Sigma\subseteq\overline{V_{j_0}}\cap U_{i_1}\cap\dots\cap U_{i_p}\subseteq U_{i_0}\cap U_{i_1}\cap\dots\cap U_{i_p}=U_{\underline i},$$ the last inclusion because $\overline{V_{j_0}}\subseteq U_{\alpha(j_0)}=U_{i_0}$ by step 2.1. The open sets $W_{\underline i,k}\cap\Sigma$ ($k\in K_{\underline i}$) cover the compact space $\Sigma$, so finitely many of them cover it: there is a finite set $K\subseteq K_{\underline i}$ with $$\Sigma\subseteq\bigcup_{k\in K}W_{\underline i,k}.$$ Now define $$H:=V_{j_0}\setminus C,\qquad B_k:=V_{j_0}\cap W_{\underline i,k}\quad(k\in K),$$ open subsets of $V_{j_0}$, and form the new family by deleting $V_{j_0}$ and inserting $H$ and the $B_k$: formally $$J^\ast:=(J\setminus\{j_0\})\sqcup\{h\}\sqcup K,\qquad V^\ast_h:=H,\quad V^\ast_k:=B_k,\quad V^\ast_j:=V_j\ (j\in J\setminus\{j_0\}),$$ $$\alpha^\ast(h):=i_0,\qquad\alpha^\ast(k):=i_0\ (k\in K),\qquad\alpha^\ast(j):=\alpha(j)\ (j\in J\setminus\{j_0\}).$$ This is again an open cover of $X$ with $V^\ast_{j^\ast}\subseteq U_{\alpha^\ast(j^\ast)}$ for all $j^\ast$: a point of $V_{j_0}$ either lies in $C$, hence in $\Sigma\subseteq\bigcup_{k\in K}W_{\underline i,k}$ by the displayed containment and so in some $B_k$, or it does not lie in $C$ and then lies in $H$; and $H$ and the $B_k$ are subsets of $V_{j_0}\subseteq U_{i_0}$. Moreover $\overline{V^\ast_{j^\ast}}\subseteq U_{\alpha^\ast(j^\ast)}$ holds for every new index: for $j^\ast=h$ and for $j^\ast\in K$ we have $V^\ast_{j^\ast}\subseteq V_{j_0}$, so $\overline{V^\ast_{j^\ast}}\subseteq\overline{V_{j_0}}\subseteq U_{i_0}=U_{\alpha^\ast(j^\ast)}$, and for the unchanged members this is step 2.1. [step 2.1, F3, F4, construct]

4.1 **Failing tuples and their count.** Call a $(p+1)$-tuple $(j_0,\dots,j_p)$ of elements of $J$ **bad for** a $(p+1)$-tuple $\underline i=(i_0,\dots,i_p)$ of pairwise distinct elements of $I$ when $\alpha(j_t)=i_t$ for all $t$ and $V_{j_0}\cap\dots\cap V_{j_p}$ is contained in no $W_{\underline i,k}$. For such $\underline i$ put $$N(\underline i):=\#\{(j_0,\dots,j_p)\in J^{p+1}:\ (j_0,\dots,j_p)\ \text{is bad for}\ \underline i\},$$ a nonnegative integer, finite because $J^{p+1}$ is finite. By step 3.1, a tuple that is bad for a pairwise-distinct $\underline i$ automatically has pairwise distinct $\alpha$-values. If $N(\underline i)=0$ for every pairwise-distinct $\underline i$, then every tuple with a repetition among its $\alpha$-values is compatible by the preceding step, and by the hypothesis $N(\underline i)=0$ every tuple with pairwise distinct $\alpha$-values is compatible as well, so the required containment holds for all tuples and the statement for $p$ is proved; the construction below reduces to this case. [step 3.1, algebra]

5.1 **The operation kills the chosen bad tuple and creates no new one.** In the new family: (i) the tuple $(j_0,\dots,j_p)$ is no longer available, since $j_0\notin J^\ast$; (ii) a $(p+1)$-tuple of $J^\ast$-indices with $\alpha^\ast$-values exactly $\underline i$ that contains a new index $k\in K$ has its intersection contained in $B_k\subseteq W_{\underline i,k}$; (iii) a $(p+1)$-tuple of $J^\ast$-indices with $\alpha^\ast$-values exactly $\underline i$ that contains $h$ occupies the position with value $i_0$ by $h$, and its remaining $p$ positions are indices $j$ with $\alpha(j)\in\{i_1,\dots,i_p\}$, so its intersection lies in $H\cap V_j\subseteq H\cap C=\varnothing$ and the required containment holds vacuously; (iv) a $(p+1)$-tuple with $\alpha^\ast$-values exactly $\underline i$ that uses neither $h$ nor any $k\in K$ is a tuple of indices in $J\setminus\{j_0\}$, and both its intersection and its $\alpha$-values are the same as before the operation, so it is bad or good before exactly as it is after. Therefore $N(\underline i)$ is strictly smaller after the operation than before: the chosen bad tuple is gone, the tuples replacing it are good by (ii) and (iii), and every other tuple either persists with the same status (iv) or is one of the good new ones. [step 4.1, step 3.2, algebra]

5.2 **No other count increases, and repetitions stay compatible.** Define $\beta:J^\ast\to J$ by $\beta(j)=j$ for $j\in J\setminus\{j_0\}$ and $\beta(h)=\beta(k):=j_0$ for $k\in K$. Then $V^\ast_{j^\ast}\subseteq V_{\beta(j^\ast)}$ for all $j^\ast$ and $\alpha^\ast=\alpha\circ\beta$. Hence whenever a tuple $(j^\ast_0,\dots,j^\ast_p)$ of $J^\ast$-indices is bad for some $\underline i''$ in the new family, the tuple $(\beta(j^\ast_0),\dots,\beta(j^\ast_p))$ is bad for $\underline i''$ in the old family: were it good, its containment into some $W_{\underline i'',k}$ would pass to the smaller new intersection. Consequently the operation increases no $N(\underline i'')$. The same inclusion argument shows that a tuple whose $\alpha^\ast$-values have a repetition and whose $\beta$-image was compatible remains compatible: the $\beta$-image has the same value tuple, with a repetition, and was compatible by step 3.1, while the new intersection is contained in the old one. [step 3.1, step 4.1, step 3.2, algebra]

6.1 **Termination of the descent.** There are only finitely many pairwise-distinct $(p+1)$-tuples $\underline i$ of elements of the finite set $I$. Process them one after another in any order; for the current $\underline i$, as long as $N(\underline i)>0$, apply the operation of step 3.2 to some tuple bad for $\underline i$ and update the family. By step 5.1 each application lowers $N(\underline i)$ by at least one, and by step 5.2 no application, whether for $\underline i$ or for another value tuple, ever raises $N(\underline i)$ again. Hence after at most $N(\underline i)$ applications of the operation the count $N(\underline i)$ is zero and remains zero during the rest of the process. When all value tuples have been processed, $N(\underline i)=0$ for every pairwise-distinct $\underline i$, while by step 5.2 every tuple with a repetition among its $\alpha$-values is still compatible. [step 5.1, step 5.2, discharge-induction]

7.1 **Conclusion of the induction step.** The final family is a finite open cover $(V_j)_{j\in J}$ with a map $\alpha:J\to I$, satisfying $V_j\subseteq U_{\alpha(j)}$ for all $j$ and the required containment for every $(p+1)$-tuple of $J$-indices by steps 3.1 and 6.1. This proves the statement for $p$ from the statement for $p-1$. [step 1.2, step 6.1, discharge-induction] ∎

## Remarks

- The two moving parts are exactly the two difficulties of the statement. The shrinking of step 1.1 puts the closures $\overline{V_j}$ inside the members $U_{\alpha(j)}$, so that one may apply compactness to the single closed piece $\Sigma$ in step 4.1; without it, the closure of a tuple intersection could leave the corresponding intersection of members of the cover. The map $\beta$ of step 5.2 controls the direction in which badness can move, so that the finite descent on the counts $N$ terminates.

- The result is applied in the compact-support calculus of this page, where the covers $W_{\underline i,k}$ consist of neighbourhoods on which a prescribed section of a quotient sheaf lifts: the conclusion supplies a single refinement on which a coherent system of lifts exists, which is what makes the connecting homomorphisms of refinement-limit Čech cohomology well defined.