---
id: thm-cech-complete-spaces-are-baire
kind: theorem
title: "Under Dependent Choice, every Čech-complete space is Baire"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-cech-complete-space, def-compactification-of-a-tychonoff-space, def-homeomorphism-and-open-maps, def-g-delta-and-f-sigma-in-a-topological-space, def-subspace-topology-top, def-dense-top, def-baire-space, thm-a-compact-hausdorff-space-is-regular-and-normal, lem-regularity-via-closed-neighbourhoods, thm-closure-characterisation-top, def-dependent-choice, thm-compact-iff-fip]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "David Marker, Descriptive Set Theory, §§1–2"
      url: "https://www.math.uic.edu/~marker/math512/dst.pdf"
    - title: "Michael Kunzinger, General Topology, §§11.3–11.4"
      url: "https://www.mat.univie.ac.at/~mike/teaching/ss16/general_topology.pdf"
    - title: "MFF General Topology course summary, §4.3"
      url: "https://www.karlin.mff.cuni.cz/~cuth/doc/MFF/OT/ot_ENG.pdf"
    - title: "Jesse Peterson, Real Analysis, §§3.6–3.7"
      url: "https://math.vanderbilt.edu/peters10/teaching/fall2016/RealAnalysis.pdf"
pipeline_run: null
---

## Statement

Assume Dependent Choice. Every Čech-complete space is a Baire space.

## Facts & Assumptions

**Given:** The objects, hypotheses, and choice principles stated above.

[F1] A Tychonoff space $X$ is **Čech-complete** when there is a Hausdorff compactification $(K,i)$ of $X$ (def-compactification-of-a-tychonoff-space) for which $i[X]$ is a $G_\delta$ subset of $K$ (def-g-delta-and-f-sigma-in-a-topological-space). The definition asks for one compactification; under the ultrafilter lemma and Dependent Choice, thm-cech-completeness-is-independent-of-compactification proves the equivalent every-compactification form. ([[def-cech-complete-space]]).

[F2] A **Hausdorff compactification** of a space $X$ is a pair $(K,i)$ in which $K$ is compact (def-compact-space) and Hausdorff (def-hausdorff-space), and $i:X\to K$ is an embedding with dense image (def-homeomorphism-and-open-maps, def-dense-top). We identify $X$ with $i[X]$ only after naming $i$; the density condition is a condition on that named image. ([[def-compactification-of-a-tychonoff-space]]).

[F3] A function $f:X\to Y$ is an **embedding** if $f$ is injective and the corestriction $f_0:X\to f[X]$, $f_0(x)=f(x)$, is a homeomorphism onto $f[X]$ carrying the subspace topology inherited from $Y$ (def-subspace-topology-top). ([[def-homeomorphism-and-open-maps]]).

[F4] A subset $A$ of a topological space $X$ is a **$G_\delta$ set of $X$** when there is a sequence $(V_n)_{n\in\mathbb N}$ of open subsets of $X$ with $$A=\bigcap_{n\in\mathbb N}V_n .$$ As everywhere in this library $\mathbb N$ contains $0$, so the indexing starts at $0$. ([[def-g-delta-and-f-sigma-in-a-topological-space]]).

[F5] For $S\subseteq X$ the **subspace topology** on $S$ is $\mathcal T_S:=\{\,U\cap S:U\in\mathcal T\,\}$, the family of traces on $S$ of the open sets of $X$; a subset of $S$ lying in $\mathcal T_S$ is said to be *open in $S$*, and *relatively open* where the ambient space needs emphasis. Choosing a tracing set needs no choice principle, since $U':=\bigcup\{\,U\in\mathcal T:U\cap S\subseteq W\,\}$ is a canonical member of $\mathcal T$ with $U'\cap S=W$, for each $W\in\mathcal T_S$. ([[def-subspace-topology-top]]).

[F6] $A\subseteq X$ is **dense** in $X$ if $\overline A=X$, and this is equivalent to $U\cap A\ne\varnothing$ for every nonempty open $U\subseteq X$. ([[def-dense-top]]).

[F7] A topological space $(X,\mathcal T)$ is a **Baire space** when for every sequence $(U_n)_{n\in\mathbb N}$ of subsets of $X$ that are open and dense in $X$ (def-dense-top), the intersection $\bigcap_{n\in\mathbb N}U_n$ is dense in $X$. ([[def-baire-space]]).

[F8] Let $X$ be a compact (def-compact-space) Hausdorff (def-hausdorff-space) topological space. Then $X$ is **regular** (def-regular-and-t3-spaces), $X$ is **normal**, and $X$ is $T_1$, hence $X$ is $T_3$ and $T_4$. ([[thm-a-compact-hausdorff-space-is-regular-and-normal]]).

[F9] For a topological space $(X,\mathcal T)$ the following are equivalent: (a) $X$ is regular (def-regular-and-t3-spaces); (b) for every $x\in X$ and every open $U$ with $x\in U$ there is an open $V$ with $x\in V\subseteq\overline V\subseteq U$; (c) every point of $X$ has a neighbourhood base consisting of closed neighbourhoods. ([[lem-regularity-via-closed-neighbourhoods]]).

[F10] $\overline A$ is closed, contains $A$, and is contained in every closed $F\subseteq X$ with $A\subseteq F$; so it is the smallest closed superset of $A$, and $A$ is closed if and only if $A=\overline A$. ([[thm-closure-characterisation-top]], claim 2).

[F11] Call a binary relation $R\subseteq X\times X$ **entire on $X$** when for every $x\in X$ there is $y\in X$ with $x\mathbin Ry$. The **Axiom of Dependent Choice** is the statement: for every nonempty set $X$, every relation $R$ entire on $X$, and every $a\in X$, there is a sequence $x:\mathbb N\to X$ with $x_0=a$ and $x_n\mathbin Rx_{n+1}$ for every $n\in\mathbb N$. ([[def-dependent-choice]]).

[F12] A topological space $(X,\mathcal T)$ is compact (def-compact-space) if and only if every family $\mathcal A$ of closed subsets of $X$ with the finite intersection property (def-finite-intersection-property) satisfies $\bigcap\mathcal A\ne\varnothing$, where $\bigcap\varnothing=X$. No choice principle is used in either direction. ([[thm-compact-iff-fip]], claim 1).

## Proof

**Proof technique:** direct.

1.1 Let $X$ be Čech-complete; by [F1] fix a Hausdorff compactification $(K,i)$ of $X$ such that $i[X]$ is a $G_\delta$ subset of $K$, write $Y:=i[X]$ and let $\mathcal T_K$ be the topology of $K$, so $K$ is compact Hausdorff and $i:X\to K$ is an embedding by [F2], and by [F4] there is a sequence $(G_n)_{n\in\mathbb N}$ of members of $\mathcal T_K$ with $Y=\bigcap_{n\in\mathbb N}G_n$, whence $Y\subseteq G_n$ for every $n\in\mathbb N$. [given, F1, F2, F4]

1.2 By [F7] the assertion to be proved is that for every sequence $(U_n)_{n\in\mathbb N}$ of open dense subsets of $X$ the set $\bigcap_{n\in\mathbb N}U_n$ is dense in $X$, and by [F6] that says exactly that $\bigcap_{n\in\mathbb N}U_n$ meets every nonempty open $V\subseteq X$; fix such a sequence $(U_n)_{n\in\mathbb N}$ and such a set $V$, there being nothing to prove when $X$ has no nonempty open subset, in particular when $X=\varnothing$. [given, F6, F7]

2.1 By [F3] the corestriction $i_0:X\to Y$ is a homeomorphism onto $Y$ with the subspace topology inherited from $K$, so $i[V]$ and every $i[U_n]$ are open in $Y$ and $i[V]\ne\varnothing$; each $i[U_n]$ is moreover dense in $Y$, since for nonempty $S$ open in $Y$ the set $i_0^{-1}[S]$ is nonempty and open in $X$, hence meets $U_n$ by [F6], and the image under $i$ of a point of $i_0^{-1}[S]\cap U_n$ lies in $S\cap i[U_n]$; putting $W:=\bigcup\{\,O\in\mathcal T_K:O\cap Y\subseteq i[V]\,\}$ and $W_n:=\bigcup\{\,O\in\mathcal T_K:O\cap Y\subseteq i[U_n]\,\}$ for $n\in\mathbb N$, the canonical tracing construction of [F5] makes these members of $\mathcal T_K$ with $W\cap Y=i[V]$ and $W_n\cap Y=i[U_n]$, and since $W_n$ is defined by a formula in $n$ rather than selected, the sequence $(W_n)_{n\in\mathbb N}$ is obtained with no appeal to countable choice. [step 1.1, step 1.2, F3, F5, F6]

2.2 The space $K$ is compact Hausdorff by step 1.1, hence regular by [F8], so clause (b) of [F9] holds in $K$: for every $y\in K$ and every $P\in\mathcal T_K$ with $y\in P$ there is $O\in\mathcal T_K$ with $y\in O\subseteq\overline O\subseteq P$, all closures being taken in $K$. [step 1.1, F8, F9]

3.1 Since $i[V]$ is nonempty and open in $Y$ and $i[U_0]$ is dense in $Y$, there is a point $y_0\in i[V]\cap i[U_0]=Y\cap W\cap W_0$, and $y_0\in G_0$ because $Y\subseteq G_0$; thus $y_0$ lies in the member $W\cap W_0\cap G_0$ of $\mathcal T_K$, and the closure form of regularity yields $O_0\in\mathcal T_K$ with $y_0\in O_0\subseteq\overline{O_0}\subseteq W\cap W_0\cap G_0$, so that $O_0\cap Y\ne\varnothing$. [step 1.1, step 2.1, step 2.2, F6]

3.2 Let $\mathcal S:=\{\,(n,O):n\in\mathbb N,\ O\in\mathcal T_K,\ O\cap Y\ne\varnothing\,\}$ and let $R$ hold of $\big((n,O),(m,O')\big)$ exactly when $m=n+1$ and $\overline{O'}\subseteq O\cap W_m\cap G_m$; then $R$ is entire on $\mathcal S$, for given $(n,O)\in\mathcal S$ the set $O\cap Y$ is nonempty and open in $Y$, so the dense set $i[U_{n+1}]=Y\cap W_{n+1}$ meets it in a point $y$, which lies in $G_{n+1}$ because $Y\subseteq G_{n+1}$ and hence lies in the member $O\cap W_{n+1}\cap G_{n+1}$ of $\mathcal T_K$, and the closure form of regularity yields $O'\in\mathcal T_K$ with $y\in O'\subseteq\overline{O'}\subseteq O\cap W_{n+1}\cap G_{n+1}$, so that $(n+1,O')\in\mathcal S$ and $(n,O)\mathbin R(n+1,O')$. [step 1.1, step 2.1, step 2.2, F6]

4.1 The class $\mathcal S$ is a set, being a subset of $\mathbb N\times\mathcal T_K$, it is nonempty by step 3.1, and $R$ is entire on it by step 3.2, so [F11] applied to $\mathcal S$, $R$ and the starting point $(0,O_0)$ gives a sequence $s:\mathbb N\to\mathcal S$ with $s_0=(0,O_0)$ and $s_n\mathbin Rs_{n+1}$ for every $n\in\mathbb N$; since $R$ raises the first coordinate by exactly one, induction on $n$ gives $s_n=(n,O_n)$ for members $O_n$ of $\mathcal T_K$ with $O_n\cap Y\ne\varnothing$, and the definition of $R$ gives $\overline{O_{n+1}}\subseteq O_n\cap W_{n+1}\cap G_{n+1}$ for every $n\in\mathbb N$, while $\overline{O_0}\subseteq W\cap W_0\cap G_0$ by step 3.1. [step 3.1, step 3.2, F11]

5.1 Each $\overline{O_n}$ is closed in $K$ and contains the nonempty set $O_n$ by [F10], hence is nonempty, and $\overline{O_{n+1}}\subseteq O_n\subseteq\overline{O_n}$ by step 4.1 and [F10], so the family $\{\,\overline{O_n}:n\in\mathbb N\,\}$ is decreasing; a nonempty finite subfamily therefore has intersection $\overline{O_N}\ne\varnothing$, where $N$ is the largest index occurring in it, and the empty subfamily has intersection $K\supseteq\overline{O_0}\ne\varnothing$, so the family consists of closed sets and has the finite intersection property, and compactness of $K$ with claim 1 of [F12] produces a point $y\in\bigcap_{n\in\mathbb N}\overline{O_n}$. [step 4.1, F10, F12]

6.1 For every $n\ge1$ step 4.1 gives $y\in\overline{O_n}\subseteq W_n\cap G_n$, and $y\in\overline{O_0}\subseteq W\cap W_0\cap G_0$, so $y\in\bigcap_{n\in\mathbb N}G_n=Y$ by step 1.1, and therefore $y\in Y\cap W_n=i[U_n]$ for every $n\in\mathbb N$ and $y\in Y\cap W=i[V]$ by step 2.2; as $i$ is injective by [F3], the point $x:=i_0^{-1}(y)$ of $X$ lies in $V$ and in $U_n$ for every $n\in\mathbb N$. [step 1.1, step 2.2, step 4.1, step 5.1, F3]

7.1 Thus $\bigcap_{n\in\mathbb N}U_n$ meets the arbitrary nonempty open set $V$, so it is dense in $X$ by step 1.2, and $X$ is a Baire space. [step 1.2, step 6.1] ∎

## Remarks

- **The construction has to be run in $K$, on ambient open sets that MEET $Y$.** It is tempting to build the nested sets inside $X$ itself, or to ask for a nonempty member of $\mathcal T_K$ contained in some $i[U_n]$; the second is impossible in general, because a Čech-complete space may sit in its compactification with empty interior. Take $K=[0,1]$ and $Y$ its set of irrational points, which is a $G_\delta$ in $K$ since $K\setminus Y$ is countable, and take every $U_n$ equal to $X$. A nonempty open subset of $[0,1]$ contains an interval of positive length and hence a rational point, so no nonempty member of $\mathcal T_K$ is contained in $Y$, and $Y$ has empty interior in $K$. What steps 3.1 and 3.2 use instead is that $O\cap Y\ne\varnothing$, which is preserved because $i[U_{n+1}]$ is dense in $Y$ and the shrinking is done with the closure form of regularity.

- **Where the choice principles enter, and where they do not.** Dependent Choice is used once, at step 4.1, and it is genuinely needed: the admissible $(n+1)$-st open set depends on the $n$-th, so the family being selected from is not fixed in advance. Nothing else in the proof selects. The sets $W$ and $W_n$ are the canonical tracing sets of [F5], so passing from the relatively open $i[U_n]$ to an ambient $W_n$ for all $n$ at once is a definition rather than a countable choice; the $G_n$ arrive as a sequence from [F4]; and the two individual points $y_0$ and $y$ are single existential instantiations.

- **Compact closures are not what the argument needs.** Every $\overline{O_n}$ is a closed subset of the compact space $K$, so the intersection at step 5.1 could equally be obtained from the finite intersection property applied inside $\overline{O_0}$. What is load bearing is only that the $\overline{O_n}$ are closed in a compact space and decrease, together with $\overline{O_n}\subseteq G_n$, which is what forces the limit point into $Y$ rather than into the remainder $K\setminus Y$.
