---
id: lem-corson-ordered-urysohn-automorphism-group-is-extremely-amenable
kind: lemma
title: "Aut(U_Q^<) is extremely amenable"
status: published
origin: pipeline
deps: [def-corson-ordered-rational-permutation-model, thm-extreme-amenability-yields-bpi-in-finite-support-models, def-metric-space, def-ramsey-colouring-and-arrow-notation, def-axiom-of-choice, thm-tychonoff, def-product-topology, thm-closed-subspace-of-a-compact-space-is-compact, def-hausdorff-space, cor-the-agreement-set-of-two-maps-into-a-hausdorff-space-is-closed]
justified_by: []
provenance:
  statement: literature-derived
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
    - title: "Samuel Corson, The Independence of Stone's Theorem from the Boolean Prime Ideal Theorem"
      url: "https://arxiv.org/pdf/2001.06513"
      locator: "§§2-3, pp. 2-4"
    - title: "Jaroslav Nešetřil, Metric spaces are Ramsey"
      url: "https://iti.mff.cuni.cz/series/2004/198.pdf"
      locator: "Theorem 1.2, §§2–4 proof, §5 Remark 2 (rational metrics), pp. 3–11"
    - title: "Kechris, Pestov, and Todorcevic, Fraïssé limits, Ramsey theory, and topological dynamics of automorphism groups"
      url: "https://arxiv.org/pdf/math/0305241"
      locator: "Theorem 4.7"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). The group
$\operatorname{Aut}(U_{\mathbb{Q}}^{<})$ of order-and-metric
automorphisms of the rational ordered Urysohn metric space, with the topology of
pointwise convergence on the underlying countable set given the discrete topology, is extremely amenable, and so is every finite point
stabiliser required by the finite-support permutation model of
[[def-corson-ordered-rational-permutation-model]].

## Facts & Assumptions

**Given:** The age of $U_{\mathbb{Q}}^{<}$, namely the finite ordered rational metric spaces, and a finite support $E$.

[A1] The Axiom of Choice is assumed ([[def-axiom-of-choice]]).

[F1] Nešetřil's Ramsey theorem says that the class $\mathcal K$ of finite
ordered rational metric spaces is a Ramsey class: for all $A,B\in\mathcal K$
and every positive integer $k$, there is $C\in\mathcal K$ such that
$$C\longrightarrow(B)^A_k.$$
Thus every $k$-colouring of the copies of $A$ in this *extension* $C$ has a
copy $B'\cong B$ whose copies of $A$ are monochromatic
([[def-ramsey-colouring-and-arrow-notation]]). No self-arrow $B\to(B)^A_k$ is
asserted.

[F2] The KPT correspondence: the automorphism group of a Fraïssé structure whose finite substructures are rigid and whose age is Ramsey is extremely amenable (Kechris--Pestov--Todorcevic, Theorem 4.7; Theorem 6.16 gives this ordered-rational-Urysohn instance). This is the external KPT theorem, not a conclusion of the BPI criterion. Its use is the literature prerequisite specified by this item’s manifest; it is verified against the source cited above.

[F3] Under AC, an arbitrary product of compact spaces is compact
([[thm-tychonoff]]), and a closed subspace of a compact space is compact
([[thm-closed-subspace-of-a-compact-space-is-compact]]). Products and their
coordinate topology are as in [[def-product-topology]].

[L2] For continuous maps into a Hausdorff space, the agreement set is closed
([[cor-the-agreement-set-of-two-maps-into-a-hausdorff-space-is-closed]],
[[def-hausdorff-space]]).

[L3] A basic neighbourhood in a product topology restricts only finitely many
coordinates ([[def-product-topology]]).

[L1] A finite ordered rational metric space is rigid: an isomorphism onto itself preserving the order and all distances is the identity, because the least point must be fixed, then the least remaining point, and so on through the finite order. The order alone suffices; the metric has the meaning of [[def-metric-space]].

## Proof

**Proof technique:** direct.

1.1 The age of $U_{\mathbb{Q}}^{<}$ is the class of finite ordered rational metric spaces, and $U_{\mathbb{Q}}^{<}$ is its Fraïssé limit, since it is countable, universal and homogeneous for that class by [[def-corson-ordered-rational-permutation-model]]. Encode rational distances by a binary relation for each rational value, together with the order relation; this is a countable relational language. Its automorphism group is closed in the permutation group of the underlying countable set: failure to preserve a relation is witnessed by a finite tuple and remains a failure on a basic neighbourhood. [given]

2.1 Every finite ordered rational metric space is rigid by [L1], and the age is a Ramsey class by [F1]; hence the hypotheses of the KPT criterion [F2] hold for the Fraïssé limit $U_{\mathbb{Q}}^{<}$, and $\operatorname{Aut}(U_{\mathbb{Q}}^{<})$ is extremely amenable. [step 1.1, F1, F2, L1]

3.1 Put $G:=\operatorname{Aut}(U_{\mathbb Q}^{<})$ and $H:=\operatorname{fix}(E)$. In the pointwise-convergence topology $H$ is an open subgroup of $G$, since fixing the finitely many points of $E$ is a basic identity neighbourhood. [given, step 2.1]

4.1 Let $X$ be a nonempty compact Hausdorff $H$-flow. Inside the product $X^G$, define the coinduced space $$Y:=\{\Phi:G\to X:\Phi(hg)=h\cdot\Phi(g)\text{ for all }h\in H, g\in G\}.$$ It is nonempty: AC chooses one representative of every left $H$-orbit in $G$; fix one $x_0\in X$, assign that same value at every representative, and then the displayed rule extends it uniquely to that orbit. [given, A1, step 3.1, construct]

5.1 The space $Y$ is closed in $X^G$: for fixed $h,g$, the equation $\Phi(hg)=h\cdot\Phi(g)$ is an equaliser of two continuous coordinate maps and is closed because $X$ is Hausdorff. Arbitrary intersections of these closed equalisers are closed. Hence [F3] makes $Y$ compact with its subspace topology. It is Hausdorff: two distinct functions differ at some coordinate, where disjoint open neighbourhoods in $X$ pull back to disjoint cylinder neighbourhoods in $Y$. [step 4.1, F3, L2]

5.2 Define a $G$-action on $Y$ by $$(a\cdot\Phi)(g):=\Phi(ga).$$ The defining equivariance of $Y$ is preserved, since $\Phi(hga)=h\cdot\Phi(ga)$. It is a left action: $a\cdot(b\cdot\Phi)$ evaluated at $g$ is $\Phi((ga)b)=\Phi(g(ab))$, and the identity acts trivially. This action is continuous. Indeed, at $a_0\in G$ and for each of finitely many output coordinates $g_i$, openness of $H$ gives a neighbourhood on which $h_i(a):=g_i a a_0^{-1}g_i^{-1}\in H$; then $g_i a=h_i(a)g_i a_0$ and $\Phi(g_i a)=h_i(a)\cdot\Phi(g_i a_0)$. Continuity of $h_i$, of the $H$-action, and the product topology at the finitely many fixed coordinates $g_i a_0$ therefore give joint continuity. [step 3.1, step 4.1, L3]

6.1 Extreme amenability of $G$ from [step 2.1] gives a $G$-fixed $\Phi\in Y$. The right-translation action then makes $\Phi$ constant, since $\Phi(a)=(a\cdot\Phi)(1)=\Phi(1)$ for every $a\in G$. For $h\in H$, the defining equation for $Y$ gives $h\cdot\Phi(1)=\Phi(h)=\Phi(1)$, so $\Phi(1)$ is an $H$-fixed point of $X$. [step 2.1, step 4.1, step 5.1, step 5.2]

7.1 Thus every nonempty compact Hausdorff $H$-flow has a fixed point, so $H=\operatorname{fix}(E)$ is extremely amenable. Since $E$ was arbitrary and $E=\varnothing$ gives the whole group, the stated group and all required finite point stabilisers are extremely amenable. [step 3.1, step 6.1] ∎

## Remarks

The stabiliser conclusion supplies the hypothesis of [[thm-extreme-amenability-yields-bpi-in-finite-support-models]]. That consumer proves BPI from extreme amenability and is not a source for the KPT correspondence.
