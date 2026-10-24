---
id: ex-dmc-urysohn-finite-menu-intersection
kind: example
title: "Finite-menu intersection in the DMC Urysohn construction"
status: published
origin: pipeline
deps: [thm-dmc-implies-urysohn-lemma, def-dependent-multiple-choice-finite-level-tree, def-interior-closure-boundary-top, lem-interior-closure-boundary-identities, def-topological-space, def-normal-and-t4-spaces, def-natural-numbers]
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-09-22
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-22
sources:
  scraped: []
  references:
    - title: "alg-d, Urysohn no hodai (Urysohn's lemma)"
      url: "https://alg-d.com/math/ac/urysohn.pdf"
      locator: "Theorem 5, p. 3: strategy provenance"
---

## Example

In the DMC construction of [[thm-dmc-implies-urysohn-lemma]] each level $n$ of
the dyadic scale is obtained by intersecting, coordinatewise, the finitely many
nodes of the menu at that level. The example computes the first two levels and
verifies that the closure inclusions survive the intersection and that the
predecessor coherence of the menus is preserved.

## Facts & Assumptions

**Given:** A normal space $X$ with disjoint closed sets $F,G$; nodes $\langle U_1,\dots,U_{2^n}\rangle$ of open sets with $\overline{U_i} \subseteq U_{i+1}$ for $1 \le i < 2^n$, $F \subseteq U_1$ and $U_{2^n} = X \setminus G$; and nonempty finite menus $M_n,M_{n+1}$ of nodes of levels $n$ and $n+1$, respectively. The successor relation used here is the one fixed in [[thm-dmc-implies-urysohn-lemma]]: for $a\in M_n$ and $b\in M_{n+1}$, $aSb$ means $b_{2i}=a_i$ for every $1\le i\le2^n$. Every $a\in M_n$ has an $S$-successor in $M_{n+1}$, and every $b\in M_{n+1}$ has an $S$-predecessor in $M_n$.

[F1] The closure of a finite union is the union of the closures, and for finitely many sets the closure of an intersection is contained in the intersection of the closures; $A \subseteq \overline{A}$ ([[def-interior-closure-boundary-top]], [[lem-interior-closure-boundary-identities]]).

[F2] A finite intersection of open sets is open, and the entries of a node satisfy the closure inclusions displayed above ([[def-topological-space]], [[def-normal-and-t4-spaces]]).

[F3] Abstract DMC supplies successor menus, without prescribing their levels
([[def-dependent-multiple-choice-finite-level-tree]]). Here level alignment and
both coverage properties are explicit Given hypotheses; their construction in
[[thm-dmc-implies-urysohn-lemma]] is context, not an additional premise of this
finite calculation. Natural numbers include zero ([[def-natural-numbers]]).


## Verification

1.1 Let $a^{(1)},\dots,a^{(m)}$ be the nodes of the menu at level $n$, with entries $a^{(j)}_i$, and put $U_i := \bigcap_{1 \le j \le m} a^{(j)}_i$ for $1 \le i \le 2^n$; each $U_i$ is a finite intersection of open sets, hence open. [given, F2]

2.1 For each $1\le i<2^n$ the inclusion $\overline{U_i} \subseteq U_{i+1}$ holds: $\overline{U_i}$ is contained in $\bigcap_{1\le j\le m} \overline{a^{(j)}_i}$ by [F1], and each $\overline{a^{(j)}_i} \subseteq a^{(j)}_{i+1}$ by hypothesis, so $\overline{U_i} \subseteq \bigcap_{1\le j\le m} a^{(j)}_{i+1} = U_{i+1}$. [step 1.1, F1]

2.2 The boundary values are preserved: $F \subseteq U_1$ because $F$ is contained in every $a^{(j)}_1$, and $U_{2^n} = X \setminus G$ because every $a^{(j)}_{2^n}$ equals $X \setminus G$. [step 1.1, F2]

2.3 Predecessor coherence is preserved: the Given predecessor property and the definition of $S$ show that every $2i$-th entry occurring in the level-$(n+1)$ menu is an $i$-th entry occurring in the level-$n$ menu. Conversely, the successor property in the Given data makes every level-$n$ node occur as the predecessor of some level-$(n+1)$ node, so every level-$n$ $i$-th entry occurs among those $2i$-th entries. The two indexed families of sets therefore have the same range, and their intersections are equal. [step 1.1, given]

3.1 At level $0$ the only possible node is $\langle X\setminus G\rangle$, so its intersection is $X\setminus G$. A finite menu at level $1$ consists of nodes $\langle V_j,X\setminus G\rangle$, $1\le j\le m$, with $F\subseteq V_j$ and $\overline{V_j}\subseteq X\setminus G$. Its two intersections are $V=\bigcap_{1\le j\le m}V_j$ and $X\setminus G$. Steps 2.1 and 2.2 give $F\subseteq V\subseteq\overline V\subseteq X\setminus G$; the second intersection equals the level-$0$ value as in step 2.3. When $m=1$ these are just the original entries. All finite enumerations here concern one fixed menu; no sequence of enumerations is selected. [step 2.1, step 2.2, step 2.3, given, F1, F3] ∎
