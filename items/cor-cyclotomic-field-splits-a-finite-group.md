---
id: cor-cyclotomic-field-splits-a-finite-group
kind: corollary
title: A cyclotomic field splits a finite group
status: published
origin: pipeline
deps: [thm-brauer-induction, cor-finite-dimensional-representations-are-completely-reducible-when-char-k-does-not-divide-group-order, thm-transitivity-of-induction-for-finite-groups]
proof_strategy: direct
verification:
  audited: 2026-09-06
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: Wen-Wei Li, Yanqi Lake Lectures on Algebra I, Corollary 14.4.2 (Lecture 14.4, PDF pp. 171–172)
      url: https://www.wwli.asia/downloads/YAlg1.pdf
provenance:
  statement: literature-derived
  proof: literature-derived
---

## Statement

If $G$ has exponent $m$ and $F\subseteq\mathbb C$ is a characteristic-zero field containing all $m$-th roots of unity, then $F$ is a splitting field for $G$. In particular $\mathbb Q(\zeta_{|G|})$ is a splitting field.

## Facts & Assumptions

[F1] The cited prerequisite is [[thm-brauer-induction]].

[F2] In characteristic zero, finite-dimensional representations are completely reducible by [[cor-finite-dimensional-representations-are-completely-reducible-when-char-k-does-not-divide-group-order]].

## Proof

**Given:** $V$ is an irreducible complex representation of $G$.

1.1 Brauer induction expresses $[V]$ integrally as inductions of linear characters of elementary subgroups. Every such linear character $\lambda$ satisfies $\lambda(h)^m=1$, so it takes values in $F$ and its induced representation has an $F$-model. Thus $[V]$ is the scalar extension of a virtual $F$-representation. [F1, given]

2.1 By [F2], decompose that virtual $F$-representation as $\sum_i c_i[W_i]$ with the $W_i$ distinct irreducible $F$-representations. Base change preserves intertwiner spaces, so distinct $W_i\otimes_F\mathbb C$ have disjoint irreducible complex constituents. Each is semisimple, with positive constituent multiplicities. Since their signed sum is the single irreducible basis element $[V]$, exactly one summand occurs, its coefficient and the multiplicity of $V$ are both $1$, and it has no other constituent. Hence $V\cong W_i\otimes_F\mathbb C$ for that index. Every irreducible complex representation is therefore defined over $F$, so $F$ is a splitting field. [F2, step 1.1, algebra]

3.1 The exponent $m$ divides $|G|$, so $\mathbb Q(\zeta_{|G|})$ contains every $m$-th root of unity. Applying the proved assertion to this field gives the final statement. ∎ [step 2.1]
