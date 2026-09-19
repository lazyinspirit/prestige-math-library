---
id: thm-separable-complete-metric-baire-in-zf
kind: theorem
title: "Separable complete metric spaces are Baire in ZF"
status: draft
origin: pipeline
deps: [def-metric-space, def-baire-space, def-separable-space, def-complete-metric-space, lem-nonempty-countable-set-has-a-padded-enumeration, def-countable, def-metric-ball, def-metric-topology, thm-metric-open-set-algebra, def-metric-interior-closure-boundary, thm-cantor-intersection-metric, def-metric-bounded-diameter, def-natural-numbers, def-function]
justified_by: []
provenance:
  statement: literature-derived
  proof: literature-derived
proof_strategy: cases
sources:
  scraped: []
  references:
    - title: "Marianne Morillon, Axiom of Choice"
      url: "https://lim.univ-reunion.fr/staff/mar/mem-HDR.pdf"
      locator: "§2.3, pp. 7-8"
---

## Statement

In $\mathrm{ZF}$, every separable ([[def-separable-space]]) complete
([[def-complete-metric-space]]) metric space ([[def-metric-space]]) is a Baire
space ([[def-baire-space]]).

**The form of the conclusion used below.** A space $X$ is Baire exactly when
$W \cap \bigcap_{n} U_n \ne \varnothing$ for every sequence $(U_n)$ of dense open
subsets and every nonempty open $W \subseteq X$. No choice principle is spent:
separability supplies a single at most countable dense set, the padding lemma
turns it into a fixed sequence, and the recursion below selects a least
index-radius pair at each stage, a definable operation.

## Facts & Assumptions

**Given:** A separable complete metric space $(X,d)$; a sequence $(U_n)_{n\in\mathbb{N}}$ of dense open subsets of $X$; a nonempty open $W \subseteq X$.

[F1] $X$ is separable when it has an at most countable dense subset; $A$ is dense in $X$ when $B(x,r) \cap A \ne \varnothing$ for every $x$ and every $r > 0$ ([[def-separable-space]], [[def-metric-interior-closure-boundary]], [[def-metric-ball]]).

[F2] $U$ is open when every $u \in U$ has $r > 0$ with $B(u,r) \subseteq U$; open balls are open, and open sets are closed under finite intersections and arbitrary unions ([[def-metric-topology]], [[thm-metric-open-set-algebra]]).

[F3] Every nonempty at most countable set is the range of a sequence $\mathbb{N} \to D$ ([[lem-nonempty-countable-set-has-a-padded-enumeration]], [[def-countable]]).

[L1] Completeness of $(X,d)$ means every Cauchy sequence in $X$ converges in $X$ ([[def-complete-metric-space]]).

[L2] Cantor's intersection theorem: if $F_k$ is a sequence of nonempty closed bounded subsets of $X$ with $F_{k+1} \subseteq F_k$ and $\operatorname{diam}(F_k) \to 0$, then $\bigcap_k F_k$ has exactly one element when $(X,d)$ is complete; the diameter of a nonempty bounded set dominates $d(a,b)$ for $a,b$ in it ([[thm-cantor-intersection-metric]], [[def-metric-bounded-diameter]]).

[L3] Triangle inequality (M3), symmetry (M2), separation (M1) and nonnegativity of the metric ([[def-metric-space]]).

## Proof

**Proof technique:** cases, on whether the ambient space is empty.

1.1 Assume $(X,d)$ is separable and complete, let $(U_n)$ be dense open subsets of $X$, and let $W$ be a nonempty open subset of $X$; the task is to produce a point of $W \cap \bigcap_n U_n$. [given, F1]

1.2 Case A: $X = \varnothing$. Case B: $X \ne \varnothing$. [assume-case, assume-case]

2.1 In case A the conclusion is vacuous and no sequence is constructed: a space with empty underlying set has no nonempty open subset, so there is no $W$ to test, and in particular no sequence into $X$ is invented. [step 1.2, F1]

2.2 In case B, separability gives a dense at most countable $D \subseteq X$, and $D \ne \varnothing$ because the dense set $D$ meets the nonempty open set $X$; by [F3] fix a sequence $s : \mathbb{N} \to D$ whose range is $D$. [step 1.2, F1, F3]

3.1 In case B, continuing, for every nonempty open $G \subseteq X$ and every real $\rho > 0$ the set of pairs $(k,m) \in \mathbb{N} \times \mathbb{N}$ with $m \ge 1$, $1/m \le \rho$ and $\bar B(s(k), 1/m) \subseteq G$ is nonempty. Fix $y \in G$ and $r > 0$ with $B(y,r) \subseteq G$ by [F2], choose $m \ge 1$ with $1/m < \min(r/3, \rho)$ using the Archimedean property of $\mathbb{R}$, and use density of $D$ to fix $k$ with $s(k) \in B(y,1/m)$. If $z \in \bar B(s(k),1/m)$, then $$d(z,y)\leq d(z,s(k))+d(s(k),y)<2/m<r,$$ so $z \in B(y,r) \subseteq G$. Thus the required closed ball, not merely its open subball, lies in $G$. [step 2.2, F1, F2, L3]

3.2 In case B, continuing, put $G_0 := W \cap U_0$; this set is nonempty because $W$ is nonempty open and $U_0$ is dense, and it is open by [F2]. [step 2.2, F1, F2]

4.1 In case B, continuing, define by recursion on $n \in \mathbb{N}$: given the nonempty open $G_n$, let $(k_n, m_n)$ be the least element of the admissible set of step 3.1 for $(G_n, 2^{-(n+2)})$, put $x_n := s(k_n)$, $r_n := 1/m_n$ and $G_{n+1} := B(x_n, r_n) \cap U_{n+1}$; the least element exists by well-ordering of $\mathbb{N} \times \mathbb{N}$, and $G_{n+1}$ is nonempty open because the nonempty open ball $B(x_n, r_n)$ meets the dense set $U_{n+1}$ and both sets are open. [step 3.1, step 3.2, F1, F2]

5.1 In case B, continuing, put $C_n := \bar B(x_n,r_n)$. By the admissibility condition of step 3.1 used at stage $n$, $C_n \subseteq G_n$. Hence $$C_{n+1}\subseteq G_{n+1}=B(x_n,r_n)\cap U_{n+1}\subseteq C_n.$$ Each $C_n$ is nonempty and closed by [F2], and $\operatorname{diam} C_n \le 2r_n \le 2^{-(n+1)}$ by the triangle inequality, so the diameters tend to $0$; the closed balls are bounded by definition. Thus $(C_n)$ is a Cantor chain. [step 3.1, step 4.1, F2, L2, L3]

6.1 In case B, continuing, completeness [L1] and [L2] give exactly one point $p \in \bigcap_n C_n$. [step 1.1, step 5.1, L1, L2]

7.1 In case B, continuing, $p \in C_0 \subseteq G_0=W\cap U_0$. For every $n$, step 5.1 also gives $p \in C_{n+1}\subseteq G_{n+1}\subseteq U_{n+1}$. Therefore $p \in W \cap \bigcap_n U_n$. [step 3.2, step 5.1, step 6.1]

8.1 Either the ambient space is empty, in which case step 2.1 gives the Baire condition vacuously, or it is nonempty, in which case steps 4.1 to 7.1 produce the required point of $W \cap \bigcap_n U_n$; the two cases exhaust the possibilities, so $(X,d)$ is Baire and the only objects used were the supplied dense set, its enumeration, and least-element selections on $\mathbb{N} \times \mathbb{N}$. [step 2.1, step 7.1, cases-exhaustive] ∎

## Remarks

- **Where the choice would have been, and why it is not spent.** The classical proof of the complete-metric Baire theorem chooses a ball inside $G_n \cap U_n$ at every stage, which is dependent choice. Here the centre is forced to be the least index of a fixed enumeration of one dense set and the radius is forced to be the least admissible value, so each stage is a definable function of the previous one and no selection principle is invoked.

- **Completeness is used once.** The unique point of the nested closed balls is supplied by [[thm-cantor-intersection-metric]]; nothing else in the argument uses convergence of sequences, and the separable hypothesis is used only to produce the single enumeration $s$.
