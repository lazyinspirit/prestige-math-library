---
id: lem-small-dowker-ladder-normality
kind: lemma
title: Small Dowker ladder normality
status: draft
origin: pipeline
deps: [def-small-dowker-ladder-topology, def-axiom-of-choice, thm-countable-subsets-of-omega-one-are-bounded, thm-omega-one-is-the-least-uncountable-ordinal, def-normal-and-t4-spaces, def-hausdorff-space]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Rinot–Shalev, A guessing principle from a Souslin tree, with applications to topology, Proposition 2.8 p. 5; Lemmas 3.4–3.8 pp. 17–18; Lemma 3.10 p. 19"
      url: https://www.assafrinot.com/files/paper48.pdf
---

## Statement

Assume AC and the single-ladder two-target AD hypotheses of [[def-small-dowker-ladder-topology]]. The resulting space $X=(\omega_1,\tau)$ is normal Hausdorff. Every disjoint closed pair has an at most countable, hence bounded, member; in particular there are no two disjoint uncountable closed sets.

The ladder family is **almost $P_0$**: for each $\xi<\omega_1$ and each $c:\bar S\cap\xi\to\omega$, there exists $c^*:\xi\to\omega$ whose restriction to each $L_\alpha$, $\alpha\in\bar S\cap\xi$, is eventually constant with value $c(\alpha)$. Here eventually means outside a bounded subset of $\alpha$. This is proved by countable local disjointification. No MA, uniformization theorem, or nonreflection theorem is assumed.

## Facts & Assumptions

**Given:** The space $X$, its active indices $\bar S$, lower-level ladders $L_\alpha$, and AC as in the statement.

[F1] The bounded-tail openness and closedness tests hold; intersections of distinct active ladders are bounded at either index; any two uncountable targets meet $L_\alpha$ cofinally at common active indices ([[def-small-dowker-ladder-topology]]).

[F2] Every $\xi<\omega_1$ is countable and countable subsets of $\omega_1$ are bounded under countable choice ([[thm-omega-one-is-the-least-uncountable-ordinal]], [[thm-countable-subsets-of-omega-one-are-bounded]]).

[F3] Normality means separation of disjoint closed sets by disjoint open sets; Hausdorffness means separation of distinct points by disjoint open sets ([[def-normal-and-t4-spaces]], [[def-hausdorff-space]]).

[A1] AC supplies countable choice for F2. A single enumeration of a fixed countable ordinal may be fixed once; subsequent least bounds and explicit assignments need no further simultaneous choices ([[def-axiom-of-choice]]).

## Proof

1.1 Every singleton $\{x\}$ is closed: for active $\alpha\ne x$, its intersection with $L_\alpha$ is empty or a singleton $\{x\}$ with $x<\alpha$, bounded by $x+1<\alpha$ since $\alpha$ is a limit. Every initial segment $\xi<\omega_1$ is open, since $\alpha<\xi$ implies $L_\alpha\subseteq\alpha\subseteq\xi$. If $\xi\notin\bar S$, the initial segment is also closed: for active $\alpha\notin\xi$, equality $\alpha=\xi$ is excluded and $\xi<\alpha$ bounds $\xi\cap L_\alpha$. Points outside $\bar S$ are isolated, and every $W_n$ is open because all ladders at its points lie in lower levels. [F1]

1.2 If disjoint closed $K_0,K_1$ were both uncountable, F1 would give active $\alpha$ with both $K_i\cap L_\alpha$ cofinal. The closedness test would force $\alpha\in K_0\cap K_1$, impossible. Consequently one member is countable and is bounded by F2, whose choice hypothesis is supplied by A1. [F1, F2, A1]

1.3 Fix $\xi<\omega_1$ and an injective enumeration $(\alpha_j)_{j\in J}$ of $\bar S\cap\xi$, where $J$ is a finite initial segment of $\omega$ or all of $\omega$. Such an enumeration exists by F2; if the domain is empty use the empty list. For each $j$, the finitely many intersections $L_{\alpha_j}\cap L_{\alpha_k}$ with $k<j$ are bounded in $\alpha_j$ by F1. Choose the least $\varepsilon_j<\alpha_j$ whose initial segment contains their union, and put $T_j=L_{\alpha_j}\setminus\varepsilon_j$. The empty union permits $\varepsilon_0=0$. Each $T_j$ is a cofinal tail; for $k<j$, it misses $L_{\alpha_k}$ and hence $T_k$. For $c:\bar S\cap\xi\to\omega$, define $c^*(\gamma)=c(\alpha_j)$ on $T_j$, and $0$ off their disjoint union. This is a well-defined function on $\xi$ and equals $c(\alpha_j)$ on a tail of every $L_{\alpha_j}$. It proves almost $P_0$, with arbitrary natural-number colors. [F1, F2, A1]

2.1 Given disjoint closed sets, interchange their names if necessary so that $K_0$ is bounded, by step 1.2. Choose a countable successor ordinal $\xi$ with $K_0\subseteq\xi$; if $K_0=\varnothing$, take $\xi=1$. Successors are inactive, so $\xi$ is clopen by step 1.1. Fix the disjoint tails $T_j$ from step 1.3 for this one $\xi$ once and for all. They give a specified extension operation $c\mapsto c^*$ by the formula there, valid for every later coloring on this same domain. [step 1.1, step 1.2, step 1.3, F2]

3.1 Suppose $H_0,H_1$ are disjoint closed sets with $H_0\subseteq\xi$. On $\bar S\cap\xi$ define $c_i(\alpha)=1$ for $\alpha\in H_i$ and $0$ otherwise, and extend each by the fixed operation of step 2.1. Set $H_i'=H_i\cup P_i$, where $P_i=\{\gamma\in\xi\setminus H_{1-i}:c_i^*(\gamma)=1\text{ and }c_{1-i}^*(\gamma)=0\}$. The old sets are retained and $H_0'\subseteq\xi$. New points of one set avoid the other old set by definition; new points of both sets would require both $c_0^*=1,c_1^*=0$ and $c_1^*=1,c_0^*=0$. Thus $H_0',H_1'$ are disjoint. [step 2.1, construct]

4.1 Each $H_i'$ in step 3.1 is closed. Indeed, let active $\alpha\notin H_i'$ have $L_\alpha\cap H_i'$ cofinal. Since $\alpha\notin H_i$ and $H_i$ is closed, its old intersection is bounded; hence $L_\alpha\cap P_i$ must be cofinal. All new points lie below $\xi$, so $\alpha\le\xi$. Equality is impossible since $\xi$ is inactive. Thus $\alpha\in\bar S\cap\xi\setminus H_i$, giving $c_i(\alpha)=0$. Its extension is eventually zero on $L_\alpha$, whereas every point of $P_i$ has extension value one, a contradiction. The closedness test of F1 now gives the assertion. [step 3.1, F1]

4.2 If active $\alpha\in H_i\cap\xi$, disjointness gives $c_i(\alpha)=1$ and $c_{1-i}(\alpha)=0$. On a common tail of $L_\alpha$ the extensions therefore have these two values. Also $H_{1-i}\cap L_\alpha$ is bounded because $H_{1-i}$ is closed and does not contain $\alpha$. Removing this additional bounded set puts the entire remaining tail in $P_i\subseteq H_i'$. This explicitly checks the exclusion of the other old set, as well as the two color requirements. Inactive indices have empty ladders and need no tail assertion. [step 3.1, F1]

5.1 Start $K_i^0=K_i$ and iterate the explicit operation of step 3.1 to obtain $K_i^{n+1}=(K_i^n)'$. Steps 4.1 and 4.2 preserve closedness, disjointness, $K_0^n\subseteq\xi$, and containment of a ladder tail at each active point of $K_i^n\cap\xi$ in $K_i^{n+1}$. The assignment is a fixed function of a pair, so finite iteration defines each stage; equivalently its graph consists of the unique endpoints of finite sequences of iterates. No countable selection of unspecified extensions is being assumed. Put $U_0=\bigcup_nK_0^n$ and $U_1=(\omega_1\setminus\xi)\cup\bigcup_nK_1^n$. [step 3.1, step 4.1, step 4.2, construct]

6.1 For any active $\alpha\in U_i\cap\xi$, membership in some $K_i^n$ puts a tail of $L_\alpha$ in $K_i^{n+1}\subseteq U_i$. The exterior $\omega_1\setminus\xi$ is open because $\xi$ is clopen; it supplies the open-set test at the remaining points of $U_1$. There are no points of $U_0$ outside $\xi$. Thus both $U_i$ are open. If $x\in U_0\cap U_1$, it lies below $\xi$ and in $K_0^r\cap K_1^s$ for some $r,s$. Monotonicity puts it in the disjoint pair at stage $\max(r,s)$, impossible. Each $U_i$ contains $K_i$. This proves normality, including empty closed members. Separating the closed singletons of two distinct points proves Hausdorffness. QED. [step 5.1, step 2.1, F1, F3]
