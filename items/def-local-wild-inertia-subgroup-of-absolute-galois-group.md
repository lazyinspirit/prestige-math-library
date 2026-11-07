---
id: def-local-wild-inertia-subgroup-of-absolute-galois-group
kind: definition
title: "Wild inertia subgroup of a local absolute Galois group"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 6
deps:
  - def-local-inertia-subgroup-of-absolute-galois-group
  - def-local-field-valuation-ring-uniformizer-and-residue-field
  - def-pro-p-group
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Dexter Chua, Part IV, Topics in Number Theory, based on lectures by A. J. Scholl"
      url: "https://dec41.user.srcf.net/notes/IV_L/topics_in_number_theory_trim.pdf"
    - title: "Dexter Chua, Part III Local Fields, Section 6.1, Further ramification theory"
      url: "https://dec41.user.srcf.net/h/III_M/local_fields/6_1"
verification:
  precheck: n/a
---

## Definition

Let $K$ be a nonarchimedean local field with finite residue field $k_K$ of
characteristic $p$, and let $I_K$ be its absolute inertia subgroup. For a finite
group $Q$, let $O_p(Q)$ be the product of all normal $p$-subgroups of $Q$; it is
the largest normal $p$-subgroup because a finite product of normal $p$-groups
is again a normal $p$-group. For each open normal subgroup $N\trianglelefteq I_K$,
form the finite quotient $I_K/N$ and its subgroup $O_p(I_K/N)$. Define
$$P_K:=\bigcap_{N\trianglelefteq_o I_K}\pi_N^{-1}\bigl(O_p(I_K/N)\bigr),$$
where $\pi_N:I_K\to I_K/N$ is the quotient map. This is a closed normal
pro-$p$ subgroup: its image in each finite quotient is contained in that
quotient's $p$-subgroup $O_p(I_K/N)$. Every closed normal pro-$p$ subgroup of
$I_K$ has normal $p$-group image in each $I_K/N$, hence is contained in $P_K$.
Thus $P_K$ is the unique largest closed normal pro-$p$ subgroup of inertia and
is called the **wild inertia subgroup**.

## Definition references

[[def-local-inertia-subgroup-of-absolute-galois-group]]

[[def-local-field-valuation-ring-uniformizer-and-residue-field]]

[[def-pro-p-group]]

[Dexter Chua, *Part IV: Topics in Number Theory*, based on A. J. Scholl's lectures, §1.1, printed pp. 4–5](https://dec41.user.srcf.net/notes/IV_L/topics_in_number_theory_trim.pdf)

[Dexter Chua, *Part III Local Fields*, §6.1, finite wild inertia and its pro-$p$ property](https://dec41.user.srcf.net/h/III_M/local_fields/6_1)
