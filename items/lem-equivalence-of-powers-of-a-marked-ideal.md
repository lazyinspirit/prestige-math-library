---
id: "lem-equivalence-of-powers-of-a-marked-ideal"
kind: "lemma"
title: "A marked ideal is equivalent to its powers"
status: published
origin: pipeline
pipeline_run: "frontier-40-geometry-braids-rep-27"
dependency_level: 6
deps:
  - "def-axiom-of-choice"
  - "def-ag-geometrically-regular-algebra-and-fibre"
  - "def-equivalence-of-marked-ideals"
  - "def-marked-ideal"
  - "def-order-of-an-ideal-sheaf-at-a-point"
  - "def-smooth-morphism-schemes"
  - "lem-addition-and-multiplication-of-marked-ideals"
  - "thm-associated-graded-ring-of-a-regular-local-ring"
proof_strategy: "direct"
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Jaroslaw Wlodarczyk, Simple Hironaka resolution in characteristic zero, J. Amer. Math. Soc. 18 (2005) 779-822; author's arXiv version math/0401401 (28 pp., dated October 25, 2018)"
      url: "https://arxiv.org/pdf/math/0401401"
---

## Statement

Assume the Axiom of Choice. For every marked ideal $(\mathcal I,E,\mu)$ on a smooth $K$-scheme and every integer $k\ge1$,
$$
(\mathcal I,E,\mu)\simeq(\mathcal I^k,E,k\mu)
$$
in the sense of [[def-equivalence-of-marked-ideals]].

## Facts & Assumptions

**Given:** A marked ideal $(\mathcal I,E,\mu)$ on a smooth $K$-scheme and an integer $k\ge1$. We use AC only through the associated-graded theorem in [F3].

[A1] [[def-axiom-of-choice]]: assume AC for applying the associated-graded theorem to the regular local rings $\mathcal O_{X,x}$.

[F1] [[def-order-of-an-ideal-sheaf-at-a-point]] and [[def-marked-ideal]]: $\operatorname{ord}_x(\mathcal I)$ is the largest $n$ with $\mathcal I_x\subseteq\mathfrak m_x^n$, and the support of $(\mathcal I,E,\mu)$ is $\{x:\operatorname{ord}_x(\mathcal I)\ge\mu\}$; the zero ideal has order $+\infty$.

[F2] [[def-smooth-morphism-schemes]], [[def-ag-geometrically-regular-algebra-and-fibre]]: since $X\to\operatorname{Spec}K$ is smooth, every $\mathcal O_{X,x}$ is regular local.

[F3] Under AC, [[thm-associated-graded-ring-of-a-regular-local-ring]] identifies $\operatorname{gr}_{\mathfrak m_x}(\mathcal O_{X,x})$ with a polynomial algebra over the residue field, so it is a domain.

[F4] [[lem-addition-and-multiplication-of-marked-ideals]], clause (2): controlled transforms commute with products of marked ideals, including products with equal factors.

[F5] [[def-equivalence-of-marked-ideals]]: equivalence means equality of the initial supports, of the multiple test blow-ups, and of their induced supports, with the same ordered boundary.

## Proof

1.1 Exact order of powers. Fix $x\in X$, put $R=\mathcal O_{X,x}$ and let $\mathfrak m$ be its maximal ideal. If $\mathcal I_x=0$, then every positive power is zero and both orders are $+\infty$. Otherwise $a=\operatorname{ord}_x(\mathcal I)$ is finite and attained by [F1]. Choose $f\in\mathcal I_x\setminus\mathfrak m^{a+1}$; its initial class in $\operatorname{gr}_{\mathfrak m}R$ is nonzero. By [A1], [F2] and [F3], this associated-graded ring is a domain, so the initial class of $f^k$ is nonzero in degree $ka$. Thus $\operatorname{ord}_x(\mathcal I^k)\le ka$, while $\mathcal I_x\subseteq\mathfrak m^a$ gives the reverse inequality. Hence $\operatorname{ord}_x(\mathcal I^k)=k\operatorname{ord}_x(\mathcal I)$. [A1, F1, F2, F3]

2.1 Equal supports. By step 1.1, $\operatorname{ord}_x(\mathcal I)\ge\mu$ if and only if $\operatorname{ord}_x(\mathcal I^k)=k\operatorname{ord}_x(\mathcal I)\ge k\mu$. Therefore $\operatorname{supp}(\mathcal I,E,\mu)=\operatorname{supp}(\mathcal I^k,E,k\mu)$, including $\mu=0$. [F1, step 1.1]

3.1 Equal multiple test blow-ups. Induct on the sequence length. At each stage $i$, assume the two transforms are $(\mathcal I_i,E_i,\mu)$ and $(\mathcal I_i^k,E_i,k\mu)$. Step 1.1 gives equal supports for these marked ideals, so their admissible regular centers meeting $E_i$ with SNC agree. If $y$ is the exceptional equation for such a center, the controlled-transform product identity [F4] gives $y^{-k\mu}\sigma^*(\mathcal I_i^k)=(y^{-\mu}\sigma^*\mathcal I_i)^k$, so the next transforms again have this form and their supports agree. The base case is step 2.1; induction works in both directions, so the test sequences and all induced supports coincide. By [F5], the marked ideals are equivalent. [F3, F4, step 1.1, step 2.1] ∎
