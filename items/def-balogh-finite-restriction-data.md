---
id: def-balogh-finite-restriction-data
kind: definition
title: Balogh finite restriction data
status: published
origin: pipeline
deps: [thm-downward-lowenheim-skolem-with-parameters, thm-membership-rank-and-hierarchy-levels, prop-cumulative-hierarchy-transitivity-and-growth, def-axiom-of-choice, thm-regularity-of-the-alephs, thm-cofinality-basics]
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
    - title: "Hart, Set-Theoretic Methods in General Topology, Chapter 5 section 2, Exercises 11–16 and restriction tuples, printed pp. 32–33; domains and rank-level formulation made explicit here"
      url: https://fa.ewi.tudelft.nl/~hart/onderwijs/old-courses/settop.pdf
---

## Definition

Assume AC. Let $\kappa=2^{\aleph_0}$ be the continuum as an initial ordinal, and let $C={}^\kappa2$. Choose a regular uncountable cardinal $\theta$ strictly above $\kappa+\omega$, sufficiently large for the sets below; for example $\theta=(2^{2^\kappa})^+$ suffices. All elementary substructures here are of the set structure $(V_\theta,\in)$, which is not asserted to satisfy ZFC.

For functions $f:\kappa\to\omega$, $g:\kappa\to[C]^{<\omega}$ and $h:\kappa\to[\kappa]^{<\omega}$, choose countable $M,N\prec(V_\theta,\in)$ such that $\kappa,\omega,f,g,h\in M$ and $M\in N$. A **realizable restriction datum** is a tuple $T=(a,A,B,p,q,r)$ arising by

$$a=M\cap\kappa,\quad A=N\cap\kappa,\quad B=\{c\restriction A:c\in C\cap M\},\quad p=f\restriction A,$$

$$q(\alpha)=\{c\restriction A:c\in g(\alpha)\},\qquad r=h\restriction A.$$

Thus $a\subseteq A\subseteq\kappa$ and $B\subseteq{}^A2$ are countable, $p:A\to\omega$, $q:A\to[{}^A2]^{<\omega}$, and $r:A\to[A]^{<\omega}$. Write $v_\alpha:q(\alpha)\to2$ for $v_\alpha(b)=b(\alpha)$.

A **root triple** is $t=(n,E,e)$ with $n<\omega$, $E\in[B]^{<\omega}$ and $e:E\to2$. Define

$$H_T(t)=\{\alpha\in A:p(\alpha)=n,\ q(\alpha)\cap B=E,\ v_\alpha\restriction E=e\}.$$

Let $I_T$ be the set of root triples for which there exists an infinite $K\subseteq H_T(t)$ with $q(\alpha)\cap q(\gamma)=E$ for distinct $\alpha,\gamma\in K$. For every $t\in I_T$ choose one such set $K_T(t)$. These choices are made after fixing the tuple and do not become coordinates of the tuple. Empty $I_T$ is allowed. Both the set of all root triples and $I_T$ are countable.

The elementary-substructure conventions imply that restriction to $A$ is injective on $C\cap N$ and, for $c\in C\cap N$,

$$c\restriction A\in B\quad\Longleftrightarrow\quad c\in M.$$

The following argument establishes the types and these immediate checks; it makes no injectivity assertion on all of $C$.

For later use, the immediate model checks also give: every natural number and every finite subset of a model belongs to it; values of its functions at its arguments belong to it; and each externally countable set belonging to the model is a subset of the model. In particular $M\subseteq N$. These assertions are proved below from the rank-level and elementarity conventions.

## Facts & Assumptions

**Given:** The displayed functions, cardinals and set-structure conventions.

[F1] Downward Löwenheim–Skolem with parameters gives countable elementary substructures of an infinite structure in the finite membership signature containing any specified countable parameter set ([[thm-downward-lowenheim-skolem-with-parameters]]).

[F2] Rank determines membership in hierarchy levels ([[thm-membership-rank-and-hierarchy-levels]]); each hierarchy level is transitive and grows with its index ([[prop-cumulative-hierarchy-transitivity-and-growth]]).

[F3] The chosen successor cardinal $\theta$ is regular under AC ([[thm-regularity-of-the-alephs]]), and a countable set of ordinals below it is bounded there ([[thm-cofinality-basics]]).

[A1] AC supplies the model choices and the witnesses $K_T(t)$ from their nonempty defining sets ([[def-axiom-of-choice]]).

## Proof

1.1 Using the ordinary ordered-pair coding, functions on $\kappa$ with binary values and the finite tuples and power sets displayed here have ranks below $\kappa+\omega$: each pairing or power set increases the rank by finitely many levels, and the function domains consist of ordinals below $\kappa$. Thus they lie in $V_\theta$ by F2. Apply F1 and A1 with the finite parameter set $\{\kappa,\omega,f,g,h\}$ to obtain countable $M$. By F2–F3, the ranks of its countably many elements have supremum below $\theta$, and adding one still stays below the limit cardinal $\theta$. Hence $M\in V_\theta$. A second application of F1 with $M$ as a parameter gives countable $N$ containing it. Enumerations of countable subsets of either model, and finite sets of elements of these models, also have bounded rank below $\theta$, by F2–F3. We have used a set structure throughout. [F1, F2, F3, A1]

2.1 For either elementary substructure $P$, the empty set and each next finite ordinal are uniquely definable from the preceding one, so all natural numbers lie in $P$. If a function and an argument belong to $P$, its uniquely specified value belongs to $P$ by elementarity. The same uniqueness argument for finite set formation shows every finite subset of $P$ belongs to $P$. If $D\in P$ is externally countable and nonempty, an actual enumeration $\omega\to D$ belongs to $V_\theta$ by the rank bound in step 1.1. Elementarity supplies such an enumeration in $P$. Its values at every natural number are in $P$, so $D\subseteq P$; the empty case holds directly. The assertion that the enumeration is a function onto $D$ is absolute here: all quantifiers in its definition are bounded by its graph, $\omega$, or $D$, whose elements are in the transitive $V_\theta$ by F2. In particular $M\in N$ and countability give $M\subseteq N$. [step 1.1, F2]

3.1 If distinct $c,c'\in C\cap N$ are given, some $\xi<\kappa$ has $c(\xi)\ne c'(\xi)$. This is a bounded assertion about their graphs and $\kappa$ and hence holds in $V_\theta$ by F2. Elementarity supplies such a $\xi\in N$, which belongs to $A$. Their restrictions to $A$ differ, proving injectivity on $C\cap N$. If $c\restriction A\in B$, there is $c'\in C\cap M$ with that restriction; step 2.1 puts $c'$ in $N$, so injectivity gives $c=c'\in M$. Conversely membership in $C\cap M$ gives that trace in $B$ by the definition. This proves both directions of the stated trace test. [step 2.1, F2]

4.1 Since $M\subseteq N$, one has $a\subseteq A$. For $\alpha\in A$, the values $g(\alpha)$ and $h(\alpha)$ belong to $N$ by step 2.1, because their functions belong to $M\subseteq N$. They are finite sets, so that same step puts every member in $N$. Thus the traces in $q(\alpha)$ come from $C\cap N$, and $h(\alpha)\subseteq A$. These establish the displayed types, and evaluation $v_\alpha$ has domain exactly the finite $q(\alpha)$. To count root triples, fix an enumeration of countable $B$; finite subsets are encoded by finite sets of natural-number indices, using binary sums, and a function to $2$ on such a finite set has finitely many codes. Pairing these codes with $n<\omega$ gives a countable set of triples. $I_T$ is a subset of it, and each required $K_T(t)$ has a nonempty witness set by the definition of $I_T$; A1 selects them, including the empty selection when $I_T=\varnothing$. All defining types and checks follow. QED. [step 2.1, step 3.1, A1]
