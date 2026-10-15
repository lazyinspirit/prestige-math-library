---
id: cex-td-degenerate-thermometer-comparison
kind: counterexample
title: Degenerate thermometers can fail product comparison
status: draft
origin: pipeline
domain: physics
library: physics
physical_scope: An abstract positive-energy thermometer model showing failure of T4 and the comparison hypothesis for products; it is not a measured thermometer or a claim about ordinary thermodynamic bodies.
deps: [thm-natural-logarithm-laws, def-td-scaled-products-and-comparison, post-td-thermal-join-axioms, def-td-si-quantities]
dependency_roles:
  thm-natural-logarithm-laws: mathematical-premise
  def-td-scaled-products-and-comparison: formulation-prerequisite
  post-td-thermal-join-axioms: physical-assumption
  def-td-si-quantities: formulation-prerequisite
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Lieb and Yngvason, The Physics and Mathematics of the Second Law of Thermodynamics, §IV.C, pp. 59–60
      url: https://arxiv.org/pdf/cond-mat/9708200v2
    - title: "André Thess, The Lieb–Yngvason Machine: A didactical tool for the definition of entropy in classical thermodynamics, §2"
      url: https://www.dlr.de/de/tt/downloads/dokumente/institut/institutsleitung/Entropie.pdf/@@download/file
    - title: Goddard, The second law of thermodynamics as variation on a theme of Carathéodory, §3
      url: https://escholarship.org/content/qt27k6m59q/qt27k6m59q.pdf
verification:
  precheck: n/a
dependency_level: 9
---

## Statement refuted

Let $E$ be an internal-energy value measured in joules, and use the dimensionless numerical coordinate $U:=E/(1\,\mathrm J)\in(0,\infty)$, so $E=U(1\,\mathrm J)$, as in [[def-td-si-quantities]]. The one-system order relation $U\le U'$ on the degenerate thermometer state space $\Gamma=(0,\infty)$, together with the thermal equilibration operation described below, need not satisfy T4 or the comparison hypothesis on products. Consequently, a monotone entropy on the single-system space need not represent product accessibility.

## Facts & Assumptions

**Given:** A state is a positive dimensionless energy coordinate $U$ as defined in the Statement. For one copy, accessibility is $U\le U'$. Thermal equilibrium of scaled copies $\lambda_1U_1,\lambda_2U_2$ holds exactly when their normalized coordinates $U_1=U_2$. For two unit copies starting at $(U_1,U_2)$, put $\bar U=(U_1+U_2)/2$, let

$$A=\{(U'_1,U'_2):U'_1\ge U_1,\ U'_2\ge U_2\},\qquad B=\{(U'_1,U'_2):U'_1\ge\bar U,\ U'_2\ge\bar U\},$$

and define the product forward sector as $\operatorname{conv}(A\cup B)$, where $\operatorname{conv}(C)$ is the set of all finite convex combinations $\sum_{k=1}^m t_k z_k$ with $z_k\in C$, $t_k\ge0$, and $\sum_k t_k=1$. This is the source’s model: $A$ describes componentwise energy increase and $B$ thermal equilibration followed by energy increase.

[F1] [[def-td-scaled-products-and-comparison]]: product states are tagged scaled copies and product comparison is the declared relation, not coordinate addition.

[F2] [[post-td-thermal-join-axioms]]: T4 requires a thermal-equilibrium class crossing strictly below and above every state.

[F3] [[thm-natural-logarithm-laws]]: the real natural logarithm is strictly increasing on positive reals, has $\log 1=0$, and satisfies $\log(ab)=\log a+\log b$.

[F4] [[def-td-si-quantities]]: energy is measured in joules, and numerical energy coordinates are divided by their displayed units before they are used as Euclidean coordinates.

## Counterexample
**Given:** [F1]–[F4] and the product sector specified above.

1.1 Start at $(1,3)$. Then $\bar U=2$, every point of $A$ has second coordinate at least $3$, and every point of $B$ has second coordinate at least $2$. A finite convex combination of points whose second coordinates are at least $2$ still has second coordinate at least $2$, because it is the weighted sum of those coordinates with nonnegative weights summing to one. Hence every point in $\operatorname{conv}(A\cup B)$ has second coordinate at least $2$, so $(3,1)$ is not in the forward sector and $(1,3)\not\prec(3,1)$. [given, F1, algebra]

1.2 In the one-system space, strict accessibility is exactly strict increase of $U$, while thermal equilibrium is equality of normalized energies. If $U_0\prec\prec U\prec\prec U_1$, then $U_0<U<U_1$, so $U_0\ne U_1$ and the two cannot be thermally equivalent. Thus T4 fails. [given, F2, algebra]

2.1 Start instead at $(3,1)$. Again $\bar U=2$; every point of its $A$ has first coordinate at least $3$, and every point of its $B$ has first coordinate at least $2$. Convex combinations therefore have first coordinate at least $2$, so $(1,3)$ is not accessible from $(3,1)$. The two product states are incomparable, and the comparison hypothesis fails. [given, step 1.1, algebra]

3.1 By [F4], $U$ is dimensionless, so the single-system function $S(U)=\log U$ is well-defined; it is strictly increasing and represents $U\le U'$. If its additive sum represented product accessibility, the states $(1,3)$ and $(3,1)$ would have equal summed entropy $\log 3$, forcing accessibility both ways. Step 1.1 and step 2.1 show neither direction holds. Therefore this single-system entropy does not represent the product relation. Since the example fails T4 by step 1.2, it does not satisfy the hypotheses of a product-comparison result that includes T4. [F1, F2, F3, F4, step 1.1, step 2.1, algebra] ∎
## Remarks

The example concerns the formal order model and shows why a product theorem must retain T4 or provide another adequate thermal partner. Lieb–Yngvason’s subsequent Theorem 4.9 treats entropy construction without T4 only when the degenerate type is joined to a system satisfying the appropriate contact conditions.
