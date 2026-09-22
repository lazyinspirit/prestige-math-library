---
id: thm-dc-iff-products-compact-hausdorff-are-baire
kind: theorem
title: "DC is equivalent to Baireness of compact-Hausdorff products"
status: published
origin: pipeline
deps: [thm-a-compact-hausdorff-space-is-regular-and-normal, def-dependent-choice, def-product-topology, def-compact-space, def-baire-space, thm-dependent-choice-is-equivalent-to-complete-metric-baire-over-zf, def-countable-choice, thm-choice-implies-dependent-implies-countable-choice, def-standard-topologies, def-one-point-compactification, thm-one-point-compactification-properties, def-locally-compact-space, lem-products-preserve-t0-t1-and-hausdorff, def-hausdorff-space, lem-discrete-sequence-spaces-are-complete-in-zf, lem-serial-relation-successor-sets-are-open-dense, thm-well-ordering-principle, thm-recursion, lem-prescribed-start-and-starting-point-free-serial-choice-are-equivalent-in-zf, def-countable, thm-countable-union-of-countable, lem-finite-choice, thm-subset-of-a-finite-set, def-dense-top, def-interior-closure-boundary-top, def-topological-space, def-natural-numbers, thm-compact-iff-fip, def-finite-intersection-property]
justified_by: []
provenance:
  statement: literature-derived
  proof: literature-derived
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
    - title: "Horst Herrlich and Kyriakos Keremedis, Products, the Baire category theorem, and the axiom of dependent choice"
      url: "https://dml.cz/bitstream/handle/10338.dmlcz/119129/CommentatMathUnivCarolRetro_40-1999-4_13.pdf"
      locator: "Definitions and Theorem 4, journal pp. 771-775"
---

## Statement

Over $\mathrm{ZF}$, the Axiom of Dependent Choice
([[def-dependent-choice]]) is equivalent to the assertion that every product of
compact Hausdorff spaces, **including the empty product**, is a Baire space
([[def-product-topology]], [[def-compact-space]], [[def-baire-space]]).

The equivalence is due to Herrlich and Keremedis. Their forward direction runs
the pseudo-complete-space recursion, which for compact Hausdorff factors reduces
to a recursion of finite-support cylinders; the reverse direction reduces the
hypothesis to Baireness of the complete sequence space $A^{\omega}$ of a serial
relation, where the classical Blair extraction of a chain applies. No
nonemptiness of an arbitrary product of nonempty compact Hausdorff spaces is
claimed: that statement is strictly stronger than DC.

## Facts & Assumptions

**Given:** The two assertions of the statement; an arbitrary family $(X_i)_{i \in I}$ of compact Hausdorff spaces with product $X$; a countable family $(U_n)_{n \in \mathbb{N}}$ of dense open subsets of $X$; a nonempty open $B \subseteq X$; an arbitrary serial relation $R$ on a nonempty set $A$.

[F1] DC: for every nonempty $P$, every relation entire on $P$, and every $a \in P$, there is $x : \mathbb{N} \to P$ with $x_0 = a$ and $x_n \mathrel{R} x_{n+1}$ ([[def-dependent-choice]]).

[F2] DC implies Countable Choice ([[thm-choice-implies-dependent-implies-countable-choice]], [[def-countable-choice]]).

[F3] The one-point compactification of a discrete space is compact and Hausdorff, and a space is dense in its one-point compactification exactly when it is not compact ([[def-one-point-compactification]], [[thm-one-point-compactification-properties]], [[def-standard-topologies]], [[def-locally-compact-space]]).

[F4] The product of an arbitrary family of Hausdorff spaces is Hausdorff ([[lem-products-preserve-t0-t1-and-hausdorff]], [[def-hausdorff-space]]).

[F5] The discrete sequence space $A^{\omega}$ with its reciprocal first-difference metric is nonempty and complete in $\mathrm{ZF}$, and its sets $U_i = \{\, f : \exists j\ f(i) \mathrel{R} f(j) \,\}$ are open and dense ([[lem-discrete-sequence-spaces-are-complete-in-zf]], [[lem-serial-relation-successor-sets-are-open-dense]]).

[F6] Every nonempty subset of $\mathbb{N}$ has a least element, recursion on $\mathbb{N}$ defines functions from a self-map and an initial value, and the prescribed-start and starting-point-free forms of DC are equivalent over $\mathrm{ZF}$ ([[thm-well-ordering-principle]], [[thm-recursion]], [[lem-prescribed-start-and-starting-point-free-serial-choice-are-equivalent-in-zf]]).

[F7] Finite choice and finite unions: a function with finite domain all of whose values are nonempty has a choice function, a subset of a finite set is finite, and a countable union of at most countable sets is at most countable under countable choice ([[lem-finite-choice]], [[thm-subset-of-a-finite-set]], [[thm-countable-union-of-countable]], [[def-countable]]).

[L1] A space is Baire when the intersection of every sequence of dense open sets meets every nonempty open set; a dense subset of a space meets every nonempty open set; and a compact space is one in which every family of closed sets with the finite intersection property has nonempty intersection ([[def-baire-space]], [[def-dense-top]], [[def-interior-closure-boundary-top]], [[thm-compact-iff-fip]], [[def-finite-intersection-property]], [[def-topological-space]]).

[L2] A compact Hausdorff space is regular and normal ([[thm-a-compact-hausdorff-space-is-regular-and-normal]]), so for every point $x$ of such a space and every open $U \ni x$ there is an open $V$ with $x \in V \subseteq \overline{V} \subseteq U$.

## Proof

**Proof technique:** direct.

1.1 Assume DC and let $(X_i)_{i\in I}$, $(U_n)$ and $B$ be as in the assumptions; the task is to find a point of $B \cap \bigcap_n U_n$. [assume-hyp, given]

1.2 Assume instead that every product of compact Hausdorff spaces is Baire, and let $R$ be a serial relation on a nonempty set $A$; the task is to build an infinite $R$-chain. [assume-hyp, given]

2.1 Under step 1.1: if $X = \varnothing$ then $X$ is Baire and the empty product is the one-point space, which is Baire, so assume $X \ne \varnothing$ and fix $x \in X$. [step 1.1, L1]

2.2 Under step 1.2: if $A$ is finite and nonempty, finite choice gives $f : A \to A$ with $a \mathrel{R} f(a)$ for every $a$, and recursion on $\mathbb{N}$ gives the $R$-chain $a, f(a), f(f(a)), \dots$; so assume $A$ is infinite. [step 1.2, F6, F7]

3.1 Under step 1.1 and step 2.1, let $Y$ be the set of quadruples $(n, F, (B_i)_{i \in F})$ where $n \in \mathbb{N}$, $F \subseteq I$ is finite, each $B_i \subseteq X_i$ is nonempty open, and $\bigcap_{i \in F} \pi_i^{-1}[B_i] \subseteq B \cap U_n$; here $\pi_i$ is the projection. Then $Y \ne \varnothing$: the set $B \cap U_0$ is nonempty open by [L1], so it contains a basic open cylinder, which is a finite intersection of coordinates. [step 2.1, L1]

3.2 Under step 2.2 and $A$ infinite, let $\alpha A := A \cup \{\infty\}$ be the one-point compactification of the discrete space $A$; by [F3] it is compact Hausdorff, and $A$ is open and dense in $\alpha A$ because the infinite discrete space $A$ is not compact. [step 2.2, F3]

4.1 Under step 3.1 define $\rho$ on $Y$ by $(n,F,(B_i)) \mathrel{\rho} (n',F',(B'_i))$ iff $n' = n+1$, $F \subseteq F'$, and $\overline{B'_i} \subseteq B_i$ for $i \in F$; the new open sets indexed by $F' \setminus F$ are unrestricted beyond the membership condition of $Y$. Then $\rho$ is entire on $Y$: given $(n,F,(B_i)) \in Y$ the cylinder $C := \bigcap_{i\in F}\pi_i^{-1}[B_i]$ is a nonempty open subset of $B \cap U_n$, so $C \cap U_{n+1}$ is nonempty open because $U_{n+1}$ is dense; fix a point $w$ of it. Some basic open cylinder around $w$ lies in the open set $C \cap U_{n+1}$; intersecting it with $C$ and adding the coordinates of $C$ that it omits, we obtain a basic open cylinder $\bigcap_{i\in F^{\dagger}}\pi_i^{-1}[B^{\dagger}_i]$ with $F \subseteq F^{\dagger}$, $B^{\dagger}_i \subseteq B_i$ for $i \in F$, and $w \in \bigcap_{i \in F^{\dagger}}\pi_i^{-1}[B^{\dagger}_i] \subseteq C \cap U_{n+1}$. For each $i \in F^{\dagger}$ the point $w_i$ lies in $B^{\dagger}_i$, so by the regularity clause of [L2] applied in the compact Hausdorff space $X_i$ there is a nonempty open $B'_i$ with $w_i \in B'_i \subseteq \overline{B'_i} \subseteq B^{\dagger}_i$; put $F' := F^{\dagger}$. Then $\bigcap_{i \in F'}\pi_i^{-1}[B'_i] \subseteq \bigcap_{i \in F'}\pi_i^{-1}[B^{\dagger}_i] \subseteq B \cap U_{n+1}$, so $(n+1,F',(B'_i)) \in Y$, and $\overline{B'_i} \subseteq B^{\dagger}_i \subseteq B_i$ for every $i \in F$, so $(n,F,(B_i)) \mathrel{\rho} (n+1,F',(B'_i))$. [step 3.1, L1, L2, F4]

4.2 Under step 3.2 let $X := (\alpha A)^{\omega}$; it is a product of compact Hausdorff spaces, hence Baire by the hypothesis of step 1.2, and the sets $D_n := \{\, g \in X : g(n) \in A \,\}$ are open and dense, so $A^{\omega} = \bigcap_n D_n$ is a dense $G_{\delta}$ of $X$; a dense $G_{\delta}$ subspace of a Baire space is Baire, since the traces of countably many dense open sets of the bigger space witness the subspace condition. [step 3.2, L1, F4]

5.1 Under step 1.1 and step 4.1, DC gives a sequence $y_n = (n, F_n, (B^n_i)_{i \in F_n})$ in $Y$ with $y_n \mathrel{\rho} y_{n+1}$ for all $n$; in particular $F_n \subseteq F_{n+1}$ and, for every $i \in F_n$, the closures nest inside the previous open sets: $\overline{B^{n+1}_i} \subseteq B^n_i$. [step 4.1, F1]

5.2 Under step 4.2 the subspace $A^{\omega}$ is the discrete sequence space with its product topology, complete under the reciprocal first-difference metric by [F5]; so this complete metric space is Baire. [step 4.2, F5]

6.1 Under step 5.1 the set $F := \bigcup_n F_n$ is at most countable: it is a countable union of finite sets, and countable choice holds by [F2]. [step 5.1, F2, F7]

6.2 Under step 5.1, for each $i \in F$ let $n_i$ be least with $i \in F_{n_i}$; then the sets $\overline{B^n_i}$ for $n \ge n_i$ form a decreasing sequence of nonempty closed subsets of the compact space $X_i$, so their intersection is nonempty and is contained in $\bigcap_{n \ge n_i} B^n_i$, since $\overline{B^{n+1}_i} \subseteq B^n_i$ for every $n$. [step 5.1, L1, F7]

6.3 Under step 5.2 the sets $V_i := \{\, f \in A^{\omega} : \exists j\ f(i) \mathrel{R} f(j) \,\}$ are open and dense in $A^{\omega}$ by [F5], so their intersection is dense and hence nonempty; fix $f \in \bigcap_i V_i$. [step 5.2, F5, L1]

7.1 Under step 6.1, step 6.2 and countable choice, choose $b_i \in \bigcap_{n \ge n_i} \overline{B^n_i}$ for each $i \in F$ — the set is nonempty by step 6.2, where compactness gives a point of the intersection of the nested closed sets, and step 6.2 also identifies the intersection as a subset of $\bigcap_{n \ge n_i} B^n_i$ — and define $y \in X$ by $y_i := b_i$ for $i \in F$ and $y_i := x_i$ for $i \notin F$. [step 6.1, step 6.2, F2, F7]

7.2 Under step 6.3 define $q(i) := \min\{\, j \in \mathbb{N} : f(i) \mathrel{R} f(j) \,\}$, which exists by [F6] because $f \in V_i$, and $k(0) := 0$, $k(n+1) := q(k(n))$, a definition by recursion; then $a(n) := f(k(n))$ satisfies $a(n) = f(k(n)) \mathrel{R} f(q(k(n))) = f(k(n+1)) = a(n+1)$ for every $n$, so $a$ is an infinite $R$-chain. [step 6.3, F6]

8.1 Under step 7.1, $y \in \bigcap_{i \in F_n} \pi_i^{-1}[B^n_i] \subseteq B \cap U_n$ for every $n$, because $b_i \in B^n_i$ for every $i \in F_n$ and the inclusion is the defining property of $Y$; hence $B \cap \bigcap_n U_n \ne \varnothing$, so every product of compact Hausdorff spaces is Baire under DC. [step 7.1, step 3.1]

8.2 Under step 2.2 and step 7.2 every serial relation on a nonempty set admits an infinite chain, which is the starting-point-free form of DC; the prescribed-start form follows by [F6], so the hypothesis of step 1.2 implies DC. [step 2.2, step 7.2, F6]

9.1 Step 8.1 proves that DC implies Baireness of every product of compact Hausdorff spaces, and step 8.2 proves the converse; the two implications are the displayed equivalence. [step 8.1, step 8.2] ∎

## Remarks

- **Why the empty product is named.** The product over an empty index set is the one-point space, which is trivially Baire, and a product with an empty factor is empty and hence Baire for the same reason; both cases are separated in step 2.1 and neither contributes to either implication.

- **What the forward direction does not claim.** The quadruple recursion proves Baireness of the product; it does not prove that the product of nonempty compact Hausdorff spaces is nonempty, and the remark of Herrlich and Keremedis that this stronger statement is properly stronger than DC is not used here.
