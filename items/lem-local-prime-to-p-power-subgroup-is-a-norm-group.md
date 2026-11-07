---
id: lem-local-prime-to-p-power-subgroup-is-a-norm-group
kind: lemma
title: Prime-to-residue-character power subgroups are local norm groups
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 14
deps:
- def-local-field-valuation-ring-uniformizer-and-residue-field
- thm-local-artin-reciprocity-and-norm-index
- lem-hensel-factor-lifting-over-a-complete-valued-field
- thm-multiplicative-group-of-a-finite-field-is-cyclic
- thm-finite-unramified-local-extensions-classified-by-residue-extensions
- thm-finite-extension-local-degree-equals-ramification-index-times-residue-degree
- thm-choice-implies-dependent-implies-countable-choice
- def-axiom-of-choice
- def-dependent-choice
- thm-existence-of-finite-fields
justified_by: []
proof_strategy: direct
axiom_use: AC is inherited from local class formation and DC from the finite-group cohomology
  convention; the finite extension construction is otherwise explicit.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: I. B. Fesenko and S. V. Vostokov, Local Fields and Their Extensions, second edition,
      Chapter IV §§2–4
    url: https://ivanfesenko.org/wp-content/uploads/2021/10/vol.pdf
    locator: Chapter IV (5.2) printed145 and (6.2) printed155, full proofs read; explicit tame/unramified
      degree/index construction supplied locally.
verification: {}
---

## Statement

Assume AC and DC. Let $K$ be a finite-residue nonarchimedean local
field of residue characteristic $p$, and let $n\ge1$ be prime to $p$. Then
the subgroup $K^{\times n}=\{x^n:x\in K^\times\}$ is the norm group of a
finite abelian extension of $K$.

## Statement references

[[def-local-field-valuation-ring-uniformizer-and-residue-field]]

[[thm-local-artin-reciprocity-and-norm-index]]

[[def-dependent-choice]]

[[def-axiom-of-choice]]

[[lem-hensel-factor-lifting-over-a-complete-valued-field]]

[Fesenko and Vostokov, *Local Fields and Their Extensions*, Chapter IV §§2–4, printed pp. 136–146](https://ivanfesenko.org/wp-content/uploads/2021/10/vol.pdf)

## Facts & Assumptions

**Given:** The original local field, $n$ prime to $p$, AC and DC.

[F1] The finite residue multiplicative group is cyclic of order $q-1$.
[[thm-multiplicative-group-of-a-finite-field-is-cyclic]]

[F2] The canonical Artin quotient for a finite abelian extension is onto,
with algebraic norm kernel and index equal to its degree.
[[thm-local-artin-reciprocity-and-norm-index]]

[F3] Simple residue roots lift uniquely by the full Hensel factor theorem.
[[lem-hensel-factor-lifting-over-a-complete-valued-field]]

[F4] Finite residue extensions lift to unramified local extensions with
cyclic Frobenius group; in particular there is one of every positive degree.
[[thm-finite-unramified-local-extensions-classified-by-residue-extensions]]
[[thm-existence-of-finite-fields]]

[F5] Finite extensions have $[E:K]=e(E/K)f(E/K)$ under Countable Choice,
with finite residue field and discrete extending value group.
[[thm-finite-extension-local-degree-equals-ramification-index-times-residue-degree]]

[A1] Original AC and DC hold; AC supplies the Countable Choice in [F4,F5].
[[def-axiom-of-choice]] [[def-dependent-choice]]
[[thm-choice-implies-dependent-implies-countable-choice]]

## Proof

**Proof technique:** match a directly computed power index with the
canonical norm index of an explicit finite abelian extension.

**Given:** The data above.

1.1 Put $d=\gcd(n,q-1)$. For each $u\in U_1$, $X^n-u$ has simple root $1$ in the residue field, since $n$ is a residue unit. By [F3] there is a root in $1+\mathfrak m_K$; it is unique there. Thus $U_1^n=U_1$. The residue reduction sequence then gives $\mathcal O_K^\times/(\mathcal O_K^\times)^n \simeq k^\times/(k^\times)^n$: if a unit has residue $\bar v^n$, lift $\bar v$ once and its remaining principal-unit factor is an $n$th power. By [F1] the index is $d$. Writing $K^\times=\pi^{\mathbb Z} \mathcal O_K^\times$ gives $$[K^\times:K^{\times n}]=nd.$$ This also shows $K^{\times n}$ is open, since it contains $U_1$. [F1, F3, given, construct, algebra]

2.1 Since $d\mid q-1$, [F1] gives all $d$ distinct roots of $X^d-1$ in $k$, each simple. Their [F3] lifts are all the roots in $K$, and form a cyclic $\mu_d$ of order $d$ (lift a primitive residue root; its order cannot decrease on reduction). Let $E_t=K(\alpha)$, $\alpha^d=\pi$. With the extended valuation normalized by $v_K(\pi)=1$, $v(\alpha)=1/d$; so $e(E_t/K)\ge d$. The polynomial gives degree at most $d$, and [F5] forces degree and ramification index exactly $d$, residue degree one. It is separable and all its roots $\zeta\alpha$ lie in $E_t$; its Galois group injects into cyclic $\mu_d$ and has order $d$, hence is cyclic. For $d=1$ these assertions give $E_t=K$ directly. [A1, F1, F3, F5, step 1.1, construct, algebra]

3.1 The roots of $X^{q^n}-X$ in a splitting field over $k$ form a field of $q^n$ elements containing $k$ (the roots of $X^q-X$); its degree over $k$ is $n$ by cardinality. Thus [F4] supplies an unramified $E_0/K$ of degree $n$. Put $E=E_0E_t$. This compositum is finite Galois as a splitting field of the two finite separable splitting polynomials. Its value group contains $1/d$, and its residue field contains the degree-$n$ residue extension of $E_0$. Thus [F5] gives $[E:K]\ge dn$, while the spanning products of bases of $E_0$ and $E_t$ give $[E:K]\le dn$. Equality follows. Restriction embeds $\operatorname{Gal}(E/K)$ into $C_n\times C_d$; both have order $nd$, so it is an isomorphism. In particular the group is abelian and killed by $n$, since $d\mid n$. This argument proves actual degree, rather than assuming disjointness from a description as unramified and totally ramified. The same bounds also show their intersection is $K$: it has value index one as a subfield of $E_0$ and residue degree one as a subfield of $E_t$, so [F5] gives degree one. [A1, F4, F5, step 2.1, construct, algebra]

4.1 The actual canonical quotient in [F2] for $E/K$ has kernel $N_{E/K}E^\times$ of index $nd$. It kills $n$th powers because its target is killed by $n$, so $K^{\times n}\subseteq N_{E/K}E^\times$. Their equal finite indices from step 1.1 force equality, proving the original Statement. For $n=1$ all fields may be $K$ and the norm is the identity. No tame Hilbert-symbol or all-open-existence premise was used. [A1, F2, step 1.1, step 3.1, algebra] ∎

