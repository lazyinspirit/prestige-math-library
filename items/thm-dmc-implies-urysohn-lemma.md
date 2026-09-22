---
id: thm-dmc-implies-urysohn-lemma
kind: theorem
title: "DMC implies Urysohn's lemma"
status: draft
origin: pipeline
deps: [def-dependent-multiple-choice-finite-level-tree, def-normal-and-t4-spaces, lem-normality-via-shrinking, def-the-dyadic-rationals-of-the-unit-interval, lem-a-dyadic-scale-of-open-sets-defines-a-continuous-function, lem-finite-choice, def-continuous-map-top, def-interior-closure-boundary-top, def-topological-space, def-interval, lem-interior-closure-boundary-identities, def-natural-numbers, def-function, thm-urysohn-lemma, thm-well-ordering-principle, thm-recursion]
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-22
sources:
  scraped: []
  references:
    - title: "David Fremlin, Dependent multiple choice and Baire's theorem"
      url: "https://www1.essex.ac.uk/maths/people/fremlin/n04j06.ps"
      locator: "Definition 1 and Proposition 2, p. 1: successor menus and pruning"
    - title: "alg-d, Urysohn no hodai (Urysohn's lemma)"
      url: "https://alg-d.com/math/ac/urysohn.pdf"
      locator: "Theorem 5, p. 3: finite-intersection strategy; level alignment is proved locally below"
---

## Statement

$\mathrm{ZF} + \mathrm{DMC}$ proves Urysohn's lemma: in a normal space
([[def-normal-and-t4-spaces]]) any two disjoint closed sets $F, G$ admit a
continuous $f : X \to [0,1]$ ([[def-continuous-map-top]], [[def-interval]]) with
$F \subseteq f^{-1}(\{0\})$ and $G \subseteq f^{-1}(\{1\})$.

DMC is used once, in its successor-menu form of
[[def-dependent-multiple-choice-finite-level-tree]]: it supplies the finite
menus of dyadic nodes, and the finitely many open sets inside each menu are
intersected coordinatewise to obtain a single dyadic scale.

## Facts & Assumptions

**Given:** A normal space $X$; disjoint closed sets $F, G \subseteq X$; the principle DMC.

[F1] Normality via shrinking: if $A$ is closed, $U$ is open and $A \subseteq U$, then there is open $V$ with $A \subseteq V \subseteq \overline{V} \subseteq U$ ([[lem-normality-via-shrinking]]).

[F2] The dyadic rationals $D \subseteq [0,1]$ are an increasing union of finite levels $D_n$, the level $D_{n+1}$ inserts one new point strictly between each pair of $D_n$-consecutive elements, every two elements of $D$ lie in a common $D_n$, and the positive dyadics have infimum zero (the displayed dyadic growth bound gives $2^{-n}\to0$) ([[def-the-dyadic-rationals-of-the-unit-interval]]).

[F3] Dyadic scale lemma: if $(U_r)_{r\in D}$ are open subsets of $X$ with $\overline{U_r} \subseteq U_s$ whenever $r<s$ and $U_1 = X$, then $f(x) := \inf(\{r \in D : x \in U_r\} \cup \{1\})$ is a continuous map $X \to [0,1]$ ([[lem-a-dyadic-scale-of-open-sets-defines-a-continuous-function]]).

[F4] Finite choice: a finite list indexed by a natural number, all of whose entries are nonempty sets admits a choice function for its family of values ([[lem-finite-choice]]).

[F5] DMC: every serial relation on a nonempty set admits nonempty finite successor menus ([[def-dependent-multiple-choice-finite-level-tree]]).

[L1] Closure and union: the closure of a finite union is the union of the closures, a finite intersection of open sets is open, and $\overline{A}$ is the smallest closed superset of $A$; closed sets are complements of open sets ([[def-interior-closure-boundary-top]], [[lem-interior-closure-boundary-identities]], [[def-topological-space]]).

[L2] A nonempty subset of $\mathbb N$ has a least element, and a specified set self-map with an initial state admits recursion on $\mathbb N$ ([[thm-well-ordering-principle]], [[thm-recursion]]).

## Proof

**Proof technique:** direct.

1.1 Assume DMC, let $X$ be normal and let $F, G$ be disjoint closed subsets of $X$. [given, F5]

2.1 Under step 1.1, $X \setminus G$ is open and $F \subseteq X \setminus G$; by [F1] fix open $V_0$ with $F \subseteq V_0 \subseteq \overline{V_0} \subseteq X \setminus G$, and put $V_1 := X \setminus G$. [step 1.1, F1, L1]

3.1 Under step 1.1, define a **node of level $n$** to be a tuple $\langle U_1, \dots, U_{2^n}\rangle$ of open subsets of $X$ such that $\overline{U_i} \subseteq U_{i+1}$ for $1 \le i < 2^n$, $F \subseteq U_1$, and $U_{2^n} = X \setminus G$. Let $T$ be the set of such nodes over all $n \in \mathbb{N}$, and let the relation $S$ on $T$ be: $a \mathrel{S} b$ when $b$ is a node of level $n+1$ whose even entries are the entries of $a$, that is $b_{2i} = a_i$ for $1 \le i \le 2^n$. [step 2.1, L1]

4.1 Under step 3.1, $\langle V_1\rangle = \langle X \setminus G\rangle$ is a node of level $0$ in $T$: it has the single required entry, $F \subseteq X \setminus G$ and its last entry is $X \setminus G$, so $T \ne \varnothing$. And $S$ is serial on $T$: given a node $a = \langle U_1,\dots,U_{2^n}\rangle$, apply [F1] to the closed set $F$ inside the open set $U_1$ to obtain an open $W_0$ with $F \subseteq W_0 \subseteq \overline{W_0} \subseteq U_1$, for each $1 \le i < 2^n$ apply [F1] to the closed set $\overline{U_i}$ inside the open set $U_{i+1}$ to obtain an open $W_i$ with $\overline{U_i} \subseteq W_i \subseteq \overline{W_i} \subseteq U_{i+1}$, and use [F4] to choose all of $W_0,\dots,W_{2^n-1}$ at once (when $n=0$ one may take $W_0$ to be the $V_0$ of step 2.1, which has exactly the required inclusions); then $b := \langle W_0, U_1, W_1, U_2, \dots, W_{2^n-1}, U_{2^n}\rangle$ has $2^{n+1}$ entries, its even entries are $b_{2i} = U_i$ for $1 \le i \le 2^n$, and $F \subseteq b_1$, $\overline{b_j} \subseteq b_{j+1}$ for $1 \le j < 2^{n+1}$, $b_{2^{n+1}} = X \setminus G$ by step 3.1, so $b$ is a node of level $n+1$ with $a \mathrel{S} b$. [step 2.1, step 3.1, F1, F4, L1]

5.1 Under step 4.1, apply [F5] to obtain finite nonempty menus $F_n\subseteq T$. They need not be level-aligned. Let $k$ be the least level represented in $F_0$ by [L2] and let $H_0$ consist of its level-$k$ members. Define $H_{n+1}=\{b\in F_{n+1}: (\exists a\in H_n)\ aSb\}$. This is a definable recursion (encode the index and subset in a set state, with a default for other states), licensed by [L2]. Induction shows that $H_n$ is nonempty finite, every member has level $k+n$, and the $H_n$ have both successor and predecessor properties: each retained $a$ has a successor in the original next menu and that successor is retained. To recover levels below $k$, for a level-$k$ node $a$ and $0\le m\le k$ put $\pi_m(a)_i=a_{i2^{k-m}}$ for $1\le i\le2^m$. Each projection is a level-$m$ node: all entries contain $F$, the last is $X\setminus G$, and the closure inclusions follow by skipping along the original chain. Moreover $\pi_{m+1}(a)_{2i}=\pi_m(a)_i$ and $\pi_k(a)=a$. Now put $F'_m=\{\pi_m(a):a\in H_0\}$ for $m<k$, and $F'_m=H_{m-k}$ for $m\ge k$. These are nonempty finite menus of exactly level $m$, with both predecessor and successor properties, including the transition into level $k$. In particular $F'_0=\{\langle X\setminus G\rangle\}$. No enumeration of infinitely many finite menus or branch choice is made. [step 3.1, step 4.1, F5, L1, L2]

6.1 Under step 5.1, for $n \in \mathbb{N}$ and $1 \le i \le 2^n$ put $U_{n,i} := \bigcap \{\, a_i : a \in F'_n \,\}$, the intersection of the $i$-th entries of the finitely many menu elements; each $U_{n,i}$ is open, $F \subseteq U_{n,1}$, $U_{n,2^n} = X \setminus G$, and $\overline{U_{n,i}} \subseteq U_{n,i+1}$, because the intersection is contained in every entry, its closure is contained in every entry closure by monotonicity, and each such closure is contained in the corresponding next entry. Monotonicity follows directly from the smallest-closed-superset characterization in [L1]. [step 5.1, L1]

7.1 Under step 6.1, $U_{n+1,2i} = U_{n,i}$ for all $n$ and $1 \le i \le 2^n$: every $b \in F'_{n+1}$ has $b_{2i} = a_i$ for the predecessor $a \in F'_n$ with $a \mathrel{S} b$, and every $a \in F'_n$ occurs as the predecessor of some $b \in F'_{n+1}$ by the successor property, so the two intersections have the same entries. [step 5.1, step 6.1]

8.1 Under step 7.1 define a family on all dyadics by $U_0:=\varnothing$, $U_1:=X$, and, for $0<r<1$, $U_r:=U_{n,i}$ whenever $r=i/2^n$ with $1\le i<2^n$. This is well defined by step 7.1 and [F2]. If $0<r<s<1$, choose $N$ with $r=i/2^N$, $s=j/2^N$ and $i<j$ by [F2]; then $U_r=U_{N,i}$, $U_s=U_{N,j}$, and $\overline{U_r}\subseteq U_s$ by step 6.1. The same inclusion is automatic when $r=0$ or $s=1$. Thus $(U_r)_{r\in D}$ satisfies the hypotheses of [F3] literally. [step 6.1, step 7.1, F2, F3]

9.1 Under step 8.1, [F3] applies to the scale and gives the continuous $f(x) = \inf(\{r \in D : x \in U_r\} \cup \{1\}) : X \to [0,1]$. [step 8.1, F3]

10.1 Under step 9.1, $F \subseteq f^{-1}(\{0\})$: if $a\in F$ and $0<r=i/2^n<1$, then $a\in F\subseteq U_{n,1}\subseteq U_{n,i}=U_r$, and also $a\in U_1=X$. Hence $\{r\in D:a\in U_r\}=D\setminus\{0\}$, whose infimum is $0$, so $f(a)=0$. [step 6.1, step 8.1, step 9.1, F2]

10.2 Under step 9.1, $G \subseteq f^{-1}(\{1\})$: for $b\in G$, first $b\notin U_0=\varnothing$. For $r=i/2^n\in D$ with $0<r<1$ we have $i\ge1$, $i < 2^n$ and $U_{n,i} \subseteq U_{n,2^n} = X \setminus G$, so $b \notin U_r$; also $b \in X = U_1$; hence $\{r \in D : b \in U_r\} \cup \{1\} = \{1\}$ and $f(b) = 1$. [step 6.1, step 8.1, step 9.1]

11.1 Under steps 9.1, 10.1 and 10.2 the map $f$ is continuous with $F \subseteq f^{-1}(\{0\})$ and $G \subseteq f^{-1}(\{1\})$, which is Urysohn's lemma for the arbitrary normal space $X$ and disjoint closed sets $F,G$; the only choice principle used was DMC. [step 9.1, step 10.1, step 10.2, F5] ∎

## Remarks

- **Comparison with the dependent-choice proof.** The published [[thm-urysohn-lemma]] runs the same dyadic construction under DC, choosing one new open set at a time by dependent choice. Here the menus are finite, so a whole level of the scale is obtained at once, and the only price is DMC, without inferring a single branch from the menus.

- **Where the finite intersections enter.** Passing from the finite menus to the single scale values $U_{n,i}$ is the step that makes the construction a proof in $\mathrm{ZF}$: a finite intersection of open sets is open, its closure is contained in the intersection of the closures, and the coherence verified in step 7.1 makes the resulting values nest along the dyadic refinement.
