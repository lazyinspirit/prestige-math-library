---
id: thm-bing-q-set-moore-space-is-normal-and-nonmetrizable
kind: theorem
title: "Bing's Q-set space is a normal nonmetrizable Moore space"
status: draft
origin: pipeline
deps: [def-q-sets-and-heath-moore-space-interface, def-moore-spaces-and-developments, def-normal-and-t4-spaces, def-metrizable-space, def-separable-space, def-subspace-topology-top, def-metric-space, def-metric-ball, def-metric-topology, def-neighbourhood-top, def-open-and-closed-in-r, def-topology-basis-subbasis, def-axiom-of-choice]
justified_by: []
provenance:
  statement: literature-derived
  proof: literature-derived
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Dennis K. Burke, The Normal Moore Space Problem"
      url: "https://dmitripavlov.org/scans/ttu15.pdf"
      locator: "Example 3.3 and its full normality proof, printed pp. 5-7"
    - title: "R. H. Bing, Metrization of topological spaces"
      url: "https://www.cambridge.org/core/services/aop-cambridge-core/content/view/48C1A50A9E249D05BD7054529F93BAA1/S0008414X00030923a.pdf/metrization-of-topological-spaces.pdf"
      locator: "Example E, printed p. 183"
---

## Statement

For every uncountable Q-set $E \subseteq \mathbb R$
([[def-q-sets-and-heath-moore-space-interface]]) the tangent-disk space $Z(E)$
is a separable normal nonmetrizable Moore space
([[def-moore-spaces-and-developments]], [[def-separable-space]],
[[def-normal-and-t4-spaces]]).

## Facts & Assumptions

**Given:** An uncountable Q-set $E \subseteq \mathbb R$, the space $Z := Z(E)$ with open part $P = \mathbb R \times (0,\infty)$ and axis part $E_0 = E \times \{0\}$ ([[def-q-sets-and-heath-moore-space-interface]]), and for $n \ge 1$ the open covers $$\mathcal H_n := \{\, V(z,n) : z \in Z \,\}, \quad V(z,n) := \begin{cases} B(z, \min(1/n, z_2/3)) & z \in P, \\ U(z,n) & z \in E_0, \end{cases}$$ where $z_2$ is the second coordinate and $U(z,n)$ is the tangent disk.

[F1] The tangent disks $U((a,0),n)$ are basic open sets, $U((a,0),n) \cap E_0 = \{(a,0)\}$, and they form a local base at $(a,0)$; the balls $B(z,r) \cap P$ are basic open sets of $P$ and form a local base at $z \in P$ ([[def-q-sets-and-heath-moore-space-interface]], [[def-metric-ball]], [[def-topology-basis-subbasis]], [[def-neighbourhood-top]]).

[F2] The open part $P$ with the Euclidean metric is a metric space, hence is normal and $T_1$, and separable sets and discrete families in it behave metrically ([[def-metric-space]], [[def-metric-topology]]).

[F3] $E_0$ is closed in $Z$ and is a Q-set-indexed axis; every subset of $E$ is relatively $G_\delta$ in $E$, and for $A = E \cap \bigcap_n S_n$ with $S_n$ open, decreasing, and $A \subseteq S_n$ one has $A = E \cap \bigcap_n S_n$ ([[def-q-sets-and-heath-moore-space-interface]], [[def-open-and-closed-in-r]]).

[L1] A development's stars are open sets containing the point, and closeness of a point to a closed set is tested by neighbourhoods; closures in $Z$ of subsets of $P$ are computed with $E_0$ closed ([[def-moore-spaces-and-developments]], [[def-q-sets-and-heath-moore-space-interface]], [[def-subspace-topology-top]]).

[L2] In a separable metric space each of its subspaces is separable: a countable dense set $D$ yields the countable base $\{B(d,1/k)\}$, and every discrete family in a space with a countable base is countable, because each member of a discrete family contains a distinct base element ([[def-separable-space]], [[def-metric-ball]]).

## Proof

**Proof technique:** direct.

1.1 Fix $E$, $Z$, $P$, $E_0$ and the covers $\mathcal H_n$. [given, F1]

2.1 Each $\mathcal H_n$ is an open cover by open sets, because $z \in V(z,n)$ and each $V(z,n)$ is a basic open set by [F1]. [step 1.1, F1]

2.2 $(\mathcal H_n)$ is a development. At $z = (a,0) \in E_0$, if $q \in Z$ satisfies $z \in V(q,n)$ and $q \ne z$, then $q \in P$ and $\operatorname{dist}(q,z) \ge q_2$, while $z \in V(q,n)$ forces $\operatorname{dist}(q,z) < q_2/3$, a contradiction; hence $\operatorname{St}(z,\mathcal H_n) = U(z,n)$, and the tangent disks form a local base at $z$ by [F1], so every neighbourhood of $z$ contains a star. At $z \in P$, every member $V(q,n)$ containing $z$ satisfies $V(q,n) \subseteq B(z,2/n)$ when $q \in P$, and $V(q,n) \subseteq B(z,4/n)$ when $q \in E_0$; hence $\operatorname{St}(z,\mathcal H_n) \subseteq B(z,4/n)$, which is contained in any prescribed Euclidean neighbourhood for $n$ large. [step 1.1, F1, L1]

2.3 $Z$ is separable: the set of points of $P$ with both coordinates rational is countable and dense: every ball in $P$ and every tangent disk $U((a,0),n)$ contains the point $(a,1/(2n))$ and hence, being open in $\mathbb R^2$, a rational point of $P$ sufficiently close to it ([[def-separable-space]], [[def-metric-ball]]). [step 1.1, F1]

2.4 $E_0$ is closed in $Z$ and discrete: it is the trace of the closed set $\mathbb R \times \{0\}$, and each of its points $z$ has the neighbourhood $U(z,1)$ with $U(z,1) \cap E_0 = \{z\}$ by [F1]. [step 1.1, F1, F3]

2.5 (Axis separation.) Let $A \subseteq E_0$ be closed in $E_0$ and put $B := E_0 \setminus A$. Since every subset of the Q-set $E$ is relatively $G_\delta$ there are decreasing sequences $(S_n)$ and $(T_n)$ of open subsets of $\mathbb R$ with $A = E \cap \bigcap_n S_n$ and $B = E \cap \bigcap_n T_n$, so $A \subseteq S_n$ and $B \subseteq T_n$ for every $n$; for $n \in \mathbb N$ put $B_n := B \setminus S_n$ and $A_n := A \setminus T_n$. Fix $n$. For $a \in A$ the set $S_n$ is open and contains $a$, so $\varepsilon_n(a) := \sup\{\, \varepsilon > 0 : (a_1 - \varepsilon, a_1 + \varepsilon) \subseteq S_n \,\}$ is positive, and $b = (b_1,0) \in B_n \subseteq \mathbb R \setminus S_n$ gives $|a_1 - b_1| \ge \varepsilon_n(a)$; let $k_n(a)$ be the least positive integer with $2/\sqrt{k_n(a)} \le \varepsilon_n(a)$. Then $U((a,0),k_n(a)) \cap U((b,0),1) = \varnothing$ for every $a \in A$ and $b \in B_n$: tangent disks of radii $1/k$ and $1$ at axis points at distance $\rho$ are disjoint whenever $\rho \ge 2/\sqrt{k}$, because their centre distance $\sqrt{\rho^2 + (1-1/k)^2}$ is then at least $1 + 1/k$. Hence the open sets $V_n := \bigcup_{b \in B_n} U((b,0),1)$ and $W_n := \bigcup_{a \in A_n} U((a,0),k_n(a))$ satisfy $B_n \subseteq V_n$, $A_n \subseteq W_n$, $U((a,0),k_n(a)) \cap V_n = \varnothing$ for $a \in A$, $V_n \cap E_0 = B_n$, $W_n \cap E_0 = A_n$, and $V_n \cap W_n = \varnothing$: a tangent disk meets the axis only at its own tangency point, and every disk occurring in $W_n$ was chosen disjoint from $V_n$. Put $V := \bigcup_n (V_n \setminus \bigcup_{k<n} \operatorname{cl}(W_k))$ and $W := \bigcup_n (W_n \setminus \bigcup_{k<n} \operatorname{cl}(V_k))$. Both are open and they are disjoint. If $x \in V_n \setminus \bigcup_{k<n}\operatorname{cl}(W_k)$ and $x \in W_m \setminus \bigcup_{k<m}\operatorname{cl}(V_k)$ with $n<m$, then $x \in V_n \subseteq \bigcup_{k<m}\operatorname{cl}(V_k)$, contradicting the choice of $x \in W_m$; symmetrically for $m<n$; and $n=m$ is excluded by $V_n \cap W_n = \varnothing$. Also $B \subseteq V$ and $A \subseteq W$: for $b \in B$ the fact that $b \notin A = E \cap \bigcap_n S_n$ gives an $m$ with $b \notin S_m$, that is $b \in B_m \subseteq V_m$, while $b \notin \bigcup_{k<m}\operatorname{cl}(W_k)$ because $\operatorname{cl}(W_k) \cap E_0 = A_k \subseteq A$ is disjoint from $B$; symmetrically for $a \in A$. The closure identities $\operatorname{cl}(W_k) \cap E_0 = A_k$ and $\operatorname{cl}(V_k) \cap E_0 = B_k$ hold because a tangent disk has only its tangency point on the axis and $A_k$, $B_k$ are closed in $E_0$: if a sequence of points of $W_k$ converges to $(c,0) \in E_0$, then its tangency points converge to $c$, since a point $(x,y) \in U((a,0),r)$ with $r \le 1$ satisfies $|x - a|^2 < 2ry - y^2$, so $|x-a| \to 0$ as $y \to 0$; hence $c$ lies in the closed set $A_k$, and dually for $B_k$. [step 1.1, F1, F3]

3.1 $Z$ is normal. Let $H, K \subseteq Z$ be disjoint closed sets; put $A := H \cap E_0$, closed in $E_0$, and $B := E_0 \setminus A$, so that $K \cap E_0 \subseteq B$. By step 2.5 applied to $A$ there are disjoint open $O_A \supseteq A$ and $O_B \supseteq B$, the latter containing $K \cap E_0$. [step 1.1, step 2.5, F3]

3.2 $Z$ is $T_1$ and regular: distinct points are separated by small balls or tangent disks, using that $E_0$ is closed and $P$ is open; for $z = (a,0) \in E_0$ and a closed $C \not\ni z$, choose $n$ with $U(z,n) \cap C = \varnothing$ by [F1], let $D$ be the closed disk of radius $1/n$ about $(a,1/n)$ and put $U := U(z,2n)$ and $V := Z \setminus \operatorname{cl}(U)$; every point of $\operatorname{cl}(U)$ other than $z$ lies in $U(z,n) \subseteq Z \setminus C$ and $z \notin C$, so $C \subseteq V$, while $U \cap V = \varnothing$. Together with step 2.2 the space $Z$ is a Moore space. [step 2.2, F1, F2, L1]

3.3 $Z$ is not metrizable. Suppose $d$ induces its topology. By step 2.3 the metric space is separable, so by [L2] it has a countable base, say $(W_i)_{i \in \omega}$. For $z \in E_0$ the set $U(z,1)$ is open and contains $z$, so by [F1] some $i$ has $z \in W_i \subseteq U(z,1)$, and then $W_i \cap E_0 = \{z\}$ by step 2.4; the map $z \mapsto \min\{i : z \in W_i \subseteq U(z,1)\}$ is therefore a definable injection $E_0 \to \omega$, contradicting the uncountability of $E$ and hence of $E_0$. [step 2.3, step 2.4, F1, L2]

4.1 (Reduction.) With $O_A, O_B$ as in step 3.1, the open part is metrizable and hence normal by [F2]; separate the disjoint closed-in-$P$ sets $H \cap P$ and $K \cap P$ by disjoint open-in-$P$ sets $R_H, R_K$ with $\operatorname{cl}_P(R_H) \cap \operatorname{cl}_P(R_K) = \varnothing$. For each $x \in H \cap P$ choose a Euclidean ball around $x$ whose doubling misses $E_0$ (possible because $x \notin E_0 = \operatorname{cl}(E_0)$), and let $R_H'$ be the union of $R_H$ with all these balls; define $R_K'$ likewise. Then $R_H', R_K'$ are open in $P$, contain $H \cap P$ and $K \cap P$, are disjoint, and satisfy $\operatorname{cl}_Z(R_H') \cap B = \varnothing$ and $\operatorname{cl}_Z(R_K') \cap A = \varnothing$: an accumulation point of $R_H'$ on the axis is a limit of points of $H \cap P$ (the balls shrink to their centres), hence lies in $H \cap E_0 = A$, and dually. [step 2.5, step 3.1, F2]

5.1 The sets $U := R_H' \cup (O_A \setminus \operatorname{cl}_Z(R_K'))$ and $W' := R_K' \cup (O_B \setminus \operatorname{cl}_Z(R_H'))$ are open, disjoint and contain $H$ and $K$: openness is clear; if $h \in H$ then $h \in R_H'$ when $h \in P$ and $h \in O_A \setminus \operatorname{cl}_Z(R_K')$ when $h \in A$, by step 4.1; dually for $K$; and $U \cap W' = \varnothing$ because $R_H' \cap R_K' = \varnothing$, $R_H' \cap (O_B \setminus \operatorname{cl}_Z(R_H')) = \varnothing$, $(O_A \setminus \operatorname{cl}_Z(R_K')) \cap R_K' = \varnothing$ and $(O_A \setminus \operatorname{cl}_Z(R_K')) \cap (O_B \setminus \operatorname{cl}_Z(R_H')) \subseteq O_A \cap O_B = \varnothing$. [step 2.5, step 4.1]

6.1 Steps 2.2, 3.2, 2.3, 3.3 and 5.1 show that $Z$ is a Moore space, separable, nonmetrizable and normal, as claimed. [step 2.2, step 3.2, step 2.3, step 3.3, step 5.1] ∎

## Remarks

- **Disjointness of the tangent disks in step 2.5.** Tangent disks of radii $1/k$ and $1$ with centres $(a_1,1/k)$ and $(b_1,1)$ are disjoint exactly when their centre distance $\sqrt{\rho^2 + (1-1/k)^2}$ is at least $1 + 1/k$, where $\rho = |a_1 - b_1|$; squaring, this is equivalent to $\rho \ge 2/\sqrt{k}$, which is the estimate used in the definition of $k_n(a)$. Since a tangent disk meets the axis only at its tangency point, this also gives $V_n \cap E_0 = B_n$ and $W_n \cap E_0 = A_n$.

- **Why normality needs the Q-set property.** Step 3.1 uses only that closed subsets of $E_0$ are relatively $G_\delta$ with open witnesses; for arbitrary uncountable $E$ the space $Z(E)$ is the standard nonnormal Moore plane witness, and the Q-set hypothesis is exactly what removes that obstruction.
