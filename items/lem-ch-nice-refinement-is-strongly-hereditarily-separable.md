---
id: lem-ch-nice-refinement-is-strongly-hereditarily-separable
kind: lemma
title: CH makes the nice refinement strongly hereditarily separable
status: published
origin: pipeline
deps:
  - def-set-theoretic-l-and-s-spaces
  - def-ordered-fundamental-space-and-nice-refinement
  - lem-nice-refinement-exists-and-is-not-lindelof
  - rem-continuum-hypothesis
  - def-second-countable-space
  - cor-urysohn-metrization
  - def-product-topology
  - lem-uncountable-delta-system-for-finite-sets
  - def-club-subsets-of-ordinals
  - def-axiom-of-choice
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Hart–Kunen, Ultra Strong S-Spaces, Lemmas 2.7, 2.9, 2.14–2.15, 4.13–4.15 and 4.22, Theorem 4.17 and Corollary 4.18, printed pp. 91–106"
      url: https://www.uwosh.edu/faculty_staff/hartj/ultra.pdf
---

## Statement

Assume CH.  Start with a second-countable ordered fundamental space and let
$(\omega_1,\widetilde{\mathcal T})$ be a nice refinement satisfying
$(\star_\alpha)$ at every stage.  Then every nonempty finite power of
$(\omega_1,\widetilde{\mathcal T})$ is hereditarily separable.

## Facts & Assumptions

**Given:** ZFC, CH, a second-countable ordered fundamental space $(\omega_1,\mathcal T)$, and a nice refinement satisfying $(\star)$.

[F1] [[def-ordered-fundamental-space-and-nice-refinement]] defines the intermediate topologies $\mathring{\mathcal T}_\alpha$, standard Vietoris neighbourhoods, the model chain, and $(\star_\alpha)$.

[F2] [[lem-nice-refinement-exists-and-is-not-lindelof]] gives the zero-dimensional Hausdorff nice-refinement structure, compact clopen tails, open initial segments, and every instance of $(\star)$.

[F3] [[rem-continuum-hypothesis]] records CH as the assertion that no cardinality lies strictly between that of $\omega$ and that of its power set.

[F4] [[def-second-countable-space]] defines a countable basis.

[F5] [[cor-urysohn-metrization]] makes the regular $T_1$ second-countable fundamental topology metrizable under AC.

[F6] [[lem-uncountable-delta-system-for-finite-sets]] gives an uncountable $\Delta$-subfamily of any uncountable family of finite sets.

[F7] [[def-product-topology]] gives finite-product basic neighbourhoods.

[F8] [[def-set-theoretic-l-and-s-spaces]] defines hereditary separability and nonempty finite powers.

[F9] [[def-club-subsets-of-ordinals]] supplies the closed-unbounded terminology used for simultaneous closure points in $\omega_1$.

[F10] [[def-axiom-of-choice]] supplies all transfinite selections, thinnings, dense-set choices, and the CH well-ordering.

## Proof

**Proof technique:** direct, via exclusion of left-separated sequences.

1.1 A space $Y$ is hereditarily separable exactly when it has no left-separated sequence $\langle y_\xi:\xi<\omega_1\rangle$, where $y_\xi\notin\overline{\{y_\zeta:\zeta<\xi\}}$.  If a subspace $A$ is nonseparable, recursively choose $y_\xi\in A$ outside the closure of its countable set of predecessors; otherwise those predecessors would be a countable dense subset of $A$.  Conversely, for a left-separated sequence and a countable subset $D$ of its range, choose $\xi$ above every index represented in $D$; the separating neighbourhood of $y_\xi$ misses $D$, so $D$ is not dense in the sequence subspace. [F8, F10, given]

1.2 We will use the following standard Vietoris reduction, whose proof is included.  Let $B,F$ be compact in a zero-dimensional space, with $F\subsetneq B$, and let $\mathcal G$ be a standard-form local base at $F$.  For $G=N(U_0,\ldots,U_r)$ put $S\mathbin{\downarrow}G=\{K\setminus\bigcup G:K\in S,\ K\cap U_i\neq\varnothing\ (i\leq r),\ K\setminus\bigcup G\neq\varnothing\}$.  Then $B\in\overline S$ iff $B\setminus\bigcup G\in\overline{S\mathbin{\downarrow}G}$ for every $G\in\mathcal G$ with nonempty remainder.  Forward, combine any standard neighbourhood of the remainder, chosen disjoint from $\bigcup G$, with the cells of $G$ to obtain a neighbourhood of $B$.  Reverse, refine any standard neighbourhood of $B$ so its cells meeting $F$ contain some $G\in\mathcal G$, retain the cells disjoint from $F$, and add the finitely many remainders of the former cells; the assumed closure of the remainder then supplies an element of $S$ in this refinement.  For $F=\{p\}$ this says that, along any clopen local base $V$ at $p$ that splits $B$, $B\in\overline S$ iff every $B\setminus V$ lies in the closure of $\{K\setminus V:K\in S,\ V\text{ splits }K\}$. [F1, F2, given]

1.3 The original topology $\mathcal T$ is zero-dimensional Hausdorff, hence regular and $T_1$; [F5] therefore gives a metric inducing it.  Since $\widetilde{\mathcal T}$ refines $\mathcal T$, this metric topology is a coarser topology on the final space. [F1, F5, given]

2.1 For each countable $\delta<\omega_1$, $\mathring{\mathcal T}_\delta$ is second countable: add the countably many sets $V_n^\xi$ with $\xi<\delta$ to a countable base for $\mathcal T$ and close under finite intersections.  Finite lists from this base form a countable standard Vietoris base for $K(\omega_1,\mathring{\mathcal T}_\delta)$.  Every subspace of a second-countable space is second countable and, under [F10], separable by choosing one point from every nonempty basic trace.  Thus this hyperspace is hereditarily separable by step 1.1. [F1, F4, F10, step 1.1]

2.2 The first closure-transfer claim is the stage case.  Let $\max B=\beta$, let $S\in M_{\beta+1}$ be countable with $S\subseteq K(\beta,\widetilde{\mathcal T}\restriction\beta)$, and suppose $B\in\overline S$ for the $\mathring{\mathcal T}_\beta$ Vietoris topology.  The final-open neighbourhood $V_0^\beta$ of $\beta$ leaves a compact remainder $B\setminus V_0^\beta$ in the coarser intermediate topology; the decreasing $W_n^\beta$-base and compactness give $r$ with $B\cap W_r^\beta\subseteq V_0^\beta$, so every ring intersection of index at least $r$ lies in its $H$-piece.  If $r=0$, each finite danger zone is clopen and misses $B$, hence $B$ is in the intermediate closure of every $\Gamma_\beta(S,\nu)$.  Choose infinitely large $\nu$ from $(\star_\beta)$ and then $K\in\Gamma_\beta(S,\nu)$ close to $B$ and $J\in\Gamma_\beta(S,\omega)$ with $d_\beta(K,J)\leq2^{-\nu}$.  The triangle inequality makes such $J$ arbitrarily Hausdorff-close to $B$, and the intermediate and final point-bases agree on $\{\beta\}\cup\bigcup_\ell H_\ell^\beta$, so $B$ is in the final closure of $S$.  If an earlier ring is bad, increase $r$ beyond it, put $W=W_r^\beta$, and use standard neighbourhoods $G$ of the nonempty compact part $B\setminus W$, all with cells below $\beta$ and hence in $M_{\beta+1}$.  The family $S\mathbin{\downarrow}G$ is in the model, while the tail $B\cap W$ has no danger-zone intersections; apply the $r=0$ argument to every such tail and then the reduction of step 1.2 to recover $B$. [F1, F2, step 1.2]

3.1 The full closure-transfer claim follows by induction on $\max B$.  Fix $\alpha$ and suppose $S\in M_{\alpha+1}$ is countable in $K(\alpha,\widetilde{\mathcal T}\restriction\alpha)$, every assigned $W_n^\beta$ for $\beta\in B$ belongs to $M_{\alpha+1}$, and $B\in\overline S$ for $\mathring{\mathcal T}_\alpha$.  If $\max B<\alpha$, the intermediate and final bases already agree on $B$; if $\max B=\alpha$, step 2.2 applies.  If $\beta=\max B>\alpha$ and $B=\{\beta\}$, the common $W_n^\beta$ bases transfer closure first to $\mathring{\mathcal T}_\beta$, then step 2.2 transfers it to the final topology.  Otherwise, for every sufficiently small splitting $W_n^\beta$, step 1.2 gives $B\setminus W_n^\beta\in\overline{S_n}$ in $\mathring{\mathcal T}_\alpha$, where $S_n=\{K\setminus W_n^\beta:K\in S,\ W_n^\beta\text{ splits }K\}\in M_{\alpha+1}$.  Its maximum is below $\beta$ and it inherits the model condition, so the induction hypothesis transfers this closure to the final topology, hence to the coarser $\mathring{\mathcal T}_\beta$ topology.  Step 1.2 reconstructs $B\in\overline S$ there, and step 2.2 finishes the transfer to $\widetilde{\mathcal T}$. [F1, F2, step 1.2, step 2.2]

3.2 Suppose there were a left-separated sequence $\langle B_\xi:\xi<\omega_1\rangle$ of sets of one fixed finite size $0<n<\omega$ in $K(\omega_1,\widetilde{\mathcal T})$ and a fixed $\gamma<\omega_1$ such that the $B_\xi\setminus\gamma$ were pairwise disjoint.  Every $B_\xi$ has a maximum.  Using step 2.1, thin so the maxima $a_\xi=\max B_\xi$ are strictly increasing; bounded maxima would put an uncountable left-separated sequence in one of the second-countable intermediate hyperspaces. [F2, F10, step 2.1]

4.1 For finite target compacta, the model condition in step 3.1 can be removed.  Induct on $k=|B|$.  If $B\subseteq M_{\alpha+1}$, the global assigned-base map and finiteness put all its $W$-bases in the model, so step 3.1 applies.  For $k=1$ outside the model, transfer the singleton first to its own intermediate stage, where its $W$-base is in the model, and use step 3.1 there.  Let $k>1$, assume the claim below $k$, and put $\lambda=M_{\alpha+1}\cap\omega_1$.  After moving $\alpha$ to the first point of $B$ above it when necessary, either $B$ is captured by the next model or $\alpha\in B$ and $B=B^-\cup B^+$, where $B^-=B\cap\lambda$ and $B^+=B\setminus\lambda$ are both nonempty and smaller than $B$.  With $\zeta=\max B^-$, let $E$ consist of the $|B^+|$-element $H\subseteq(\zeta,\omega_1)$ for which $B^-\cup H\in\overline S$ in $\mathring{\mathcal T}_\alpha$.  The set $E$ belongs to $M_{\alpha+1}$, and step 2.1 gives in that model a countable dense $F\subseteq E$.  Every $H\in F$ lies in the model, so step 3.1 puts $B^-\cup H$ in the final closure of $S$.  Meanwhile $B^+\in\overline F$ transfers to the intermediate stage $\beta=\min B^+$ because those topologies have the same point-bases on $B^+$; the induction hypothesis, applied to the smaller target $B^+$, transfers it to the final topology.  Given a standard neighbourhood of $B^-\cup B^+$ with one disjoint cell at each point, first choose $H\in F$ whose points enter the $B^+$-cells, then use the final closure of $B^-\cup H$ to choose an element of $S$ in all cells.  Thus $B$ is in the final closure of $S$. [F1, F2, F10, step 2.1, step 3.1]

4.2 For each $\delta<\omega_1$, step 2.1 gives an ordinal $\rho_\delta>\delta$ such that $\{B_\xi:\xi<\rho_\delta\}$ is dense in the whole sequence for the $\mathring{\mathcal T}_\delta$ Vietoris topology; choose the least such ordinal.  Refinement gives $\rho_\delta\leq\rho_\epsilon$ when $\delta<\epsilon$.  The simultaneous closure points of $\delta\mapsto\rho_\delta$ and $\xi\mapsto a_\xi$ contain a club $C$ by [F9].  Choose a limit $\eta\in C$ above $\gamma$.  Then $S=\{B_\xi:\xi<\eta\}$ is a subset of $K(\eta,\widetilde{\mathcal T}\restriction\eta)$ and is dense in the whole sequence for $\mathring{\mathcal T}_\eta$: any basic neighbourhood mentions finitely many switched coordinates and therefore already belongs to some earlier intermediate topology. [F1, F9, F10, step 2.1, step 3.2]

5.1 Every hereditarily countable set is coded by a relation on a subset of $\omega$, so $|H(\aleph_1)|\leq2^{\aleph_0}$; the reverse inequality follows because every subset of $\omega$ is hereditarily countable.  Thus [F3] gives $|H(\aleph_1)|=\aleph_1$.  Elementarity puts a bijection from $\omega_1$ onto $H(\aleph_1)$ in $M_1$, and the chain contains every countable ordinal, so $H(\aleph_1)\subseteq M_{\omega_1}=\bigcup_{\alpha<\omega_1}M_\alpha$.  Hence choose $\alpha>\eta$ with $S\in M_{\alpha+1}$.  Only countably many $B_\xi\setminus\gamma$ meet the countable interval $[\eta,\alpha]$, because those free parts are pairwise disjoint; choose $\xi>\alpha+1$ with $B_\xi\cap[\eta,\alpha]=\varnothing$.  The point-bases of $\mathring{\mathcal T}_\eta$ and $\mathring{\mathcal T}_\alpha$ agree at every point of $B_\xi$ (points below $\eta$ use $V$, points above $\alpha$ use $W$), so their standard Vietoris local bases agree there and step 4.2 yields $B_\xi\in\overline S$ for $\mathring{\mathcal T}_\alpha$.  The finite-target transfer in step 4.1 gives $B_\xi\in\overline S$ in the final topology.  But $S$ consists entirely of predecessors of $B_\xi$, contradicting left separation. [F1, F3, F10, step 3.2, step 4.1, step 4.2, contradiction]

6.1 Therefore no left-separated sequence of one fixed nonzero finite size can have pairwise-disjoint parts above one fixed countable ordinal. [step 3.2, step 5.1]

7.1 Fix $0<n<\omega$.  If $[\omega_1]^n$ in the final Vietoris topology were not hereditarily separable, step 1.1 would give a left-separated sequence of $n$-element sets.  By [F6], thin it to a $\Delta$-system with finite root $R$ and put $\gamma=\sup\{\rho+1:\rho\in R\}$, taking $\gamma=0$ when $R=\varnothing$.  The parts above $\gamma$ are pairwise disjoint, contradicting step 6.1.  Thus $[\omega_1]^n$ is hereditarily separable for every positive $n$. [F6, F10, step 1.1, step 6.1]

8.1 Fix $0<n<\omega$ and suppose the final product $(\omega_1,\widetilde{\mathcal T})^n$ were not hereditarily separable.  By step 1.1 choose a left-separated sequence of $n$-tuples and thin so its coordinate-equality pattern is fixed.  Retain one representative of each of its $m$ coordinate classes; intersecting the finitely many product coordinates belonging to one class shows that the resulting $m$-tuple sequence is still left separated.  Using the coarser metric topology from step 1.3, choose pairwise closure-disjoint basic cells around the $m$ distinct coordinates and thin, by second countability, until the cells are fixed.  For each tuple intersect a final-product separating neighbourhood with those cells.  The corresponding standard Vietoris neighbourhood then separates its underlying $m$-element set from all earlier such sets: disjoint cells force membership in the Vietoris neighbourhood to match coordinatewise membership in the product neighbourhood.  This produces a left-separated sequence in $[\omega_1]^m$, contradicting step 7.1. [F4, F7, F10, step 1.1, step 1.3, step 7.1]

9.1 Therefore every nonempty finite power is hereditarily separable, exactly as asserted.  The zero power is excluded by [F8]; $n=1$ is included; empty standard neighbourhood families and empty $\Delta$-roots were handled in steps 1.2 and 7.1.  CH is used only in step 5.1 to capture the countable dense segment in a later model, while all other selections are the ZFC uses recorded by [F10]. [F8, F10, step 5.1, step 7.1, step 8.1] ∎
