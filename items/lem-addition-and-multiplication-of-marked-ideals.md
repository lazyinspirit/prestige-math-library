---
id: "lem-addition-and-multiplication-of-marked-ideals"
kind: "lemma"
title: "Addition and multiplication of marked ideals"
status: published
origin: pipeline
pipeline_run: "frontier-40-geometry-braids-rep-27"
dependency_level: 5
deps:
  - "def-axiom-of-choice"
  - "def-ag-geometrically-regular-algebra-and-fibre"
  - "def-coherent-module-scheme"
  - "def-equivalence-of-marked-ideals"
  - "def-ideal-sheaf"
  - "def-marked-ideal"
  - "def-multiple-test-blowup-and-controlled-transform"
  - "def-order-of-an-ideal-sheaf-at-a-point"
  - "def-sheaf-tensor-product"
  - "def-smooth-morphism-schemes"
  - "thm-associated-graded-ring-of-a-regular-local-ring"
proof_strategy: "direct"
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
sources:
  references:
    - title: "Jaroslaw Wlodarczyk, Simple Hironaka resolution in characteristic zero, J. Amer. Math. Soc. 18 (2005) 779-822; author's arXiv version math/0401401 (28 pp., dated October 25, 2018)"
      url: "https://arxiv.org/pdf/math/0401401"
---

## Statement

Let $(X,E)$ be a smooth $K$-scheme with a fixed family $E$ in simultaneous SNC position, and let $(\mathcal I,\mu_{\mathcal I})$, $(\mathcal J,\mu_{\mathcal J})$, $(\mathcal I_1,\mu_1),\dots, (\mathcal I_m,\mu_m)$ be marked ideals on $X$ with common $E$ ([[def-marked-ideal]]). All marks are nonnegative. For the sum operation below require every summand mark to be positive; the product operation permits zero marks. For assertion (1), assume the Axiom of Choice; assertion (2) and its proof are choice-free.

For positive marks define
$$
(\mathcal I,\mu_{\mathcal I})+(\mathcal J,\mu_{\mathcal J}):=(\mathcal I^{\mu_{\mathcal J}}+\mathcal J^{\mu_{\mathcal I}},\ \mu_{\mathcal I}\mu_{\mathcal J}),
$$
and inductively
$$
(\mathcal I_1,\mu_1)+\dots+(\mathcal I_m,\mu_m):=\left(\sum_{j=1}^m\mathcal I_j^{\prod_{k\ne j}\mu_k},\ \prod_k\mu_k\right).
$$
For nonnegative marks define
$$
(\mathcal I,\mu_{\mathcal I})\cdot(\mathcal J,\mu_{\mathcal J}):=(\mathcal I\mathcal J,\ \mu_{\mathcal I}+\mu_{\mathcal J}).
$$

(1) For any $m\ge1$, the support of the sum is $\bigcap_j\operatorname{supp}(\mathcal I_j,\mu_j)$. Its multiple test blow-ups are exactly the simultaneous multiple test blow-ups of all summands, and controlled transforms commute with sums:
$$
(\mathcal I_1,\mu_1)_i+\dots+(\mathcal I_m,\mu_m)_i=[(\mathcal I_1,\mu_1)+\dots+(\mathcal I_m,\mu_m)]_i
$$
at every stage $i$.

(2) The product satisfies
$$
\operatorname{supp}(\mathcal I,\mu_{\mathcal I})\cap\operatorname{supp}(\mathcal J,\mu_{\mathcal J})\subseteq\operatorname{supp}(\mathcal I\mathcal J,\mu_{\mathcal I}+\mu_{\mathcal J}).
$$
Every simultaneous multiple test blow-up of $(\mathcal I,\mu_{\mathcal I})$ and $(\mathcal J,\mu_{\mathcal J})$ is a multiple test blow-up of their product, and
$$
(\mathcal I_i,\mu_{\mathcal I})\cdot(\mathcal J_i,\mu_{\mathcal J})=[(\mathcal I,\mu_{\mathcal I})\cdot(\mathcal J,\mu_{\mathcal J})]_i
$$
at every such stage.

Under the AC hypothesis in (1), the sum is not associative on the nose, but its two bracketings are equivalent in the sense of [[def-equivalence-of-marked-ideals]].

## Facts & Assumptions

**Given:** The smooth $K$-scheme, common SNC boundary, marked ideals, and weight ranges stated above. Assertion (1) is under AC; assertion (2) has no choice assumption.

[A1] [[def-axiom-of-choice]]: AC is used in assertion (1) through the associated-graded theorem for regular local rings; no choice is used in assertion (2).

[F1] [[def-marked-ideal]], [[def-order-of-an-ideal-sheaf-at-a-point]]: $\operatorname{supp}(\mathcal A,\nu)=\{x:\operatorname{ord}_x(\mathcal A)\ge\nu\}$, with $\operatorname{ord}_x(\mathcal A)=+\infty$ for the zero ideal and finite order attained for nonzero ideals.

[F2] [[def-sheaf-tensor-product]]: products and powers of ideal sheaves are formed by multiplying local sections.

[F3] [[def-multiple-test-blowup-and-controlled-transform]]: a multiple test blow-up has regular centers in the successive supports meeting the successive boundaries with SNC; its controlled transform is $\sigma^{\mathrm c}(\mathcal A,\nu)=(\mathcal I(D)^{-\nu}\sigma^*\mathcal A,\nu)$.

[F4] [[def-equivalence-of-marked-ideals]]: two marked ideals with the same ordered boundary are equivalent when their supports and all multiple test blow-ups, with induced supports, agree.

[F5] [[def-smooth-morphism-schemes]], [[def-ag-geometrically-regular-algebra-and-fibre]]: for every $x\in X$, the local ring $\mathcal O_{X,x}$ is a regular local ring, since $X\to\operatorname{Spec}K$ is smooth.

[F6] Under AC, [[thm-associated-graded-ring-of-a-regular-local-ring]] identifies $\operatorname{gr}_{\mathfrak m_x}(\mathcal O_{X,x})$ with a polynomial algebra over its residue field; in particular, this associated-graded ring is a domain.

## Proof

1.1 Order calculus. Work at $x\in X$, with $R=\mathcal O_{X,x}$ and maximal ideal $\mathfrak m$. For ideals $A,B\subseteq R$, $\operatorname{ord}_x(A+B)=\min(\operatorname{ord}_x A,\operatorname{ord}_x B)$: containment of both ideals in $A+B$ gives one inequality, and $A+B\subseteq\mathfrak m^n$ forces both into $\mathfrak m^n$. Always $\operatorname{ord}_x(AB)\ge\operatorname{ord}_x A+\operatorname{ord}_x B$ by multiplying ideal containments. For assertion (1), if $A\ne0$ has finite order $a$, choose $f\in A\setminus\mathfrak m^{a+1}$; its initial class in $\operatorname{gr}_{\mathfrak m}R$ is nonzero by [F1]. By [A1], [F5], and [F6], the associated-graded ring is a domain, so the initial class of $f^k$ is nonzero in degree $ka$; hence $\operatorname{ord}_x(A^k)=ka$, since the reverse inequality follows from $A\subseteq\mathfrak m^a$. The zero ideal has infinite order and its positive powers are zero, so the identity also holds there. [A1, F1, F5, F6]

2.1 Supports. Put $\mu=\prod_j\mu_j$ and $e_j=\prod_{k\ne j}\mu_k$, all positive. By step 1.1, $\operatorname{ord}_x(\sum_j\mathcal I_j^{e_j})=\min_j e_j\operatorname{ord}_x(\mathcal I_j)$. This is at least $\mu$ exactly when every $\operatorname{ord}_x(\mathcal I_j)\ge\mu_j$, giving the support intersection in (1). For (2), if $x$ is in both factor supports, then $\operatorname{ord}_x(\mathcal I)+\operatorname{ord}_x(\mathcal J)\ge\mu_{\mathcal I}+\mu_{\mathcal J}$; the product lower bound in step 1.1 puts $x$ in the product support. This proves the stated reverse-direction inclusion, including zero marks. [F1, step 1.1]

3.1 Transform identities. For a blow-up with exceptional equation $y$ and center in the support of the sum, step 2.1 places that center in every summand support. Writing $\mathcal I_{j,i}=y^{-\mu_j}\sigma^*\mathcal I_j$, we have $y^{-\mu}\sigma^*(\sum_j\mathcal I_j^{e_j})=\sum_j(y^{-\mu_j}\sigma^*\mathcal I_j)^{e_j}=\sum_j\mathcal I_{j,i}^{e_j}$ because $e_j\mu_j=\mu$. For the product, at any simultaneous admissible center, $y^{-(\mu_{\mathcal I}+\mu_{\mathcal J})}\sigma^*(\mathcal I\mathcal J)=(y^{-\mu_{\mathcal I}}\sigma^*\mathcal I)(y^{-\mu_{\mathcal J}}\sigma^*\mathcal J)$. Thus the corresponding controlled transforms agree. These are ideal-sheaf identities and use no choice. [F2, F3, step 2.1]

4.1 Test blow-ups. The support equality in step 2.1 and transform identity in step 3.1 show inductively that a sequence is a multiple test blow-up of the sum exactly when each center is simultaneously admissible for every summand; all transformed supports agree at each stage. For the product, simultaneous admissibility puts each center in the intersection of factor supports and hence, by step 2.1, in the product support; the product transform identity then gives the induction that every simultaneous test sequence is a product test sequence. [F3, step 2.1, step 3.1]

5.1 Associativity of the sum. For either bracketing of three or more summands, step 2.1 identifies the initial supports and step 4.1 identifies the multiple test blow-ups and induced supports. The two bracketings therefore satisfy the equivalence criterion [F4], although their defining ideal sheaves need not be equal. This proves the final assertion. [F4, step 2.1, step 4.1] ∎
