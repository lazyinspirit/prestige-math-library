---
id: def-conway-polynomial
kind: definition
title: The Conway polynomial
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - def-oriented-link-in-s-three-and-ambient-isotopy
  - def-oriented-crossing-sign-writhe-and-blackboard-framing
proof_strategy: direct
justified_by: []
dependency_level: 1
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: W. B. R. Lickorish, An Introduction to Knot Theory, Chapter 8, Theorems 8.5–8.6
      url: https://link.springer.com/book/10.1007/978-1-4612-0691-0
      locator: Printed pp. 82–83
    - title: Introduction to Vassiliev Knot Invariants, §2.3
      url: https://www.math.cinvestav.mx/~mostovoy/cdbook/cdbook-as-submitted.pdf
    - title: Polyak–Viro Formulas for Coefficients of the Conway Polynomial, §§3.4–4.2
      url: https://math.osu.edu/~chmutov.1/preprints/chmutov-khoury-rossi.pdf
    - title: Elementary proof of existence of the Alexander-Conway polynomial, §§1–4, PDF pp. 1–9
      url: https://arxiv.org/pdf/2012.03086v1
---

## Definition

For an oriented link type $L$ in $S^3$, the Conway polynomial is the polynomial $\nabla_L(z)\in\mathbb Z[z]$ characterized by the normalization $\nabla_U(z)=1$ for the unknot $U$ and the skein relation
$$\nabla_{L_+}(z)-\nabla_{L_-}(z)=z\,\nabla_{L_0}(z).$$
Here $L_+$ and $L_-$ are identical oriented links outside a ball and have respectively a positive and negative crossing inside it, while $L_0$ is obtained in that ball by the orientation-preserving smoothing. For each integer $k\ge0$, the $k$th Conway coefficient is $c_k(L):=[z^k]\nabla_L(z)$. This carrier records the conventional skein interface; existence and uniqueness of the invariant are a separate well-definedness obligation. The skein characterization is on nonempty oriented links. If the link domain also includes the empty link, extend the invariant by the separate conventional value $\nabla_{\varnothing}(z)=0$; this empty-link value is not determined by the nonempty skein axioms.

## Definition references

[[def-oriented-link-in-s-three-and-ambient-isotopy|Oriented links and ambient-isotopy classes]]

[[def-oriented-crossing-sign-writhe-and-blackboard-framing|Positive crossing convention]]

[Lickorish, Theorems 8.5–8.6, printed pp. 82–83](https://link.springer.com/book/10.1007/978-1-4612-0691-0)

[Chmutov, Duzhin, and Mostovoy, §2.3, printed pp. 35–37](https://www.math.cinvestav.mx/~mostovoy/cdbook/cdbook-as-submitted.pdf)

[Chmutov, Cap Khoury, and Rossi, §§3.4–4.2, PDF pp. 4–8](https://math.osu.edu/~chmutov.1/preprints/chmutov-khoury-rossi.pdf)

[Garaev, “Elementary proof of existence of the Alexander-Conway polynomial,” §§1–4, PDF pp. 1–9](https://arxiv.org/pdf/2012.03086v1)



## Facts & Assumptions

**Given:** Finite diagrams of nonempty oriented links, with no ordering of their components, the declared positive/negative crossing convention and oriented smoothing. The link isotopy and diagram conventions are those of the Definition.

[F1] **External input — the normalized Conway polynomial from Seifert matrices.** For a Seifert matrix $V$ of $L$, write $\Theta_L(u):=\det(u^{1/2}V-u^{-1/2}V^T)$. Lickorish, *An Introduction to Knot Theory*, Chapter 8, Theorems 8.5–8.6, proves that this Conway-normalized Alexander determinant is independent of the chosen Seifert matrix and satisfies $\Theta_U(u)=1$ and
$$\Theta_{L_+}(u)-\Theta_{L_-}(u)=(u^{-1/2}-u^{1/2})\Theta_{L_0}(u).$$
The source then defines $\nabla_L(z)\in\mathbb Z[z]$ by $\Theta_L(u)=\nabla_L(u^{-1/2}-u^{1/2})$. Thus it supplies an actual ambient-isotopy invariant of finite oriented links with the normalization and skein relation in the Definition. The source uses the standard positive crossing shown in Figure 3.2; its crossing convention agrees with the determinant convention of the Definition and the crossing-sign supplier. The source does not assign an empty-link value; that value is separately specified here.

[F2] **External input — ambient-link interpretation and conventional normalization.** Chmutov–Duzhin–Mostovoy, *Introduction to Vassiliev Knot Invariants*, §1.2.1, printed p.11/PDF19, gives the Reidemeister diagram criterion with its oriented extension; §2.3.1, printed pp.35–36/PDF43–44, states the Conway invariant of oriented links with values in $\mathbb Z[z]$, normalized to one on the unknot and satisfying the positive-minus-negative skein relation. It uses links with unnumbered components. This confirms the ambient-link interpretation and conventional interface of [F1]; existence in this item is supplied by [F1].

Actual reading limits for this repair: the full relevant Lickorish argument was read in the Chapter 8 text, printed pp.79–83, including Theorems 8.2 and 8.4–8.6, their proofs, and Figures 1.11 and 3.2. The import used here is the Seifert-determinant construction and skein theorem; no local determinant proof is claimed. CDM, the Polyak–Viro paper, and Garaev remain bibliography references, but their cited passages are not used as the existence proof in this carrier.

## Proof

1.1 Form the coefficientwise formal expression $C_D(z)=\sum_{j\ge0}c_j(D)z^j$ from [F1]. It is a diagram invariant, has value $1$ on an unknot, and satisfies $C_{D_+}-C_{D_-}=zC_{D_0}$ coefficientwise. A local positive and negative curl on any component of the $r$-component unlink are both that unlink; the oriented smoothing is the $(r+1)$-component unlink. Thus $c_j(U_r)-c_j(U_r)=c_{j-1}(U_{r+1})$ for every $j\ge1$. All coefficients of $U_{r+1}$ vanish. Therefore the unlink values of the formal expression are $1$ for one component and $0$ for more than one. This is also the forced unlink value for ANY polynomial-valued invariant satisfying the Definition. [F1, F2, given, algebra]

2.1 Here is the finite argument that the expression is actually in $\mathbb Z[z]$. In a diagram choose finitely many component basepoints and an order. Call a crossing bad when its first encounter in this traversal is the underpass. If none is bad, the first component passes over every later component and has a descending self-diagram. Pull its successive arcs above everything they first encounter to isolate a round circle; repeat for the remaining components. Thus a descending diagram is an unlink. At a bad crossing the skein relation writes its value as the value of the switched diagram, plus or minus $z$ times its oriented smoothing. The switched diagram has one fewer bad crossing and the same number $N$ of crossings; the smoothing has $N-1$ crossings. Reset the finite component data on a smoothing if necessary. The nonnegative integer $N(N+1)/2+b$, with $b$ the number of bad crossings, decreases in each branch. Hence this is a FINITE resolution tree. Its leaves have values $0$ or $1$ by step1.1. Working back through the tree uses only integer addition/subtraction and multiplication by $z$, so $C_D\in\mathbb Z[z]$. In fact every branch has at most $N$ smoothing operations, giving degree at most $N$. This proves finiteness and integrality without assuming an integer-valued formal sequence theorem or making an infinite selection. [F1, F2, step 1.1, construct, algebra]

3.1 Apply the SAME finite tree to any two polynomial-valued invariants satisfying the stated normalization and skein relation. Their unlink leaves agree by step1.1, and each internal skein relation then forces agreement. Their values agree on every diagram. Existence follows from [F1], step 2.1 and the ambient-link interpretation [F2], and this argument proves uniqueness. The separately fixed empty-link extension is unique as well, since its prescribed value is zero. Consequently the separate existence/uniqueness obligation mentioned in the Definition is now discharged: the resulting actual link invariant is exactly $\nabla$, and its coefficient $[z^k]\nabla_L$ is well-defined for every $k$. The finite local arguments use no choice axiom; the external constructive coefficient/diagram inputs are explicitly distinguished from them. [F1, F2, step 1.1, step 2.1, algebra] ∎

