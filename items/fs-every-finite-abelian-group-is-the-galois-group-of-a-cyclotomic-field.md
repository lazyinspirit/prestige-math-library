---
id: fs-every-finite-abelian-group-is-the-galois-group-of-a-cyclotomic-field
kind: false-statement
title: "FALSE: every finite abelian group is $\\operatorname{Gal}(\\mathbb Q(\\mu_n)/\\mathbb Q)$ for some $n$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [cor-the-galois-group-of-a-rational-cyclotomic-field, thm-every-finite-abelian-group-is-a-galois-group-over-the-rationals, thm-lagrange, def-unit-group-modulo-n-and-euler-totient]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "P. L. Clark, Field Theory (course notes/monograph), Corollary 9.12"
      url: "https://web.archive.org/web/2023/http://alpha.math.uga.edu/~pete/FieldTheory.pdf"
    - title: "K. Conrad, Cyclotomic Extensions (expository blurb), Section 2"
      url: "https://kconrad.math.uconn.edu/blurbs/galoistheory/cyclotomic.pdf"
pipeline_run: null
---

## Statement

**False claim.** For every finite abelian group $G$ there is an $n\ge1$ with

$$\operatorname{Gal}(\mathbb Q(\mu_n)/\mathbb Q)\cong G.$$

The obstruction is visible already at the level of cardinality: the cyclic group
$C_3$ occurs as a Galois group over $\mathbb Q$, but never as the Galois group of
a cyclotomic field.

## Facts & Assumptions

**Given:** Cyclotomic Galois groups and the theorem realising finite abelian groups over $\mathbb Q$.

[L1] $\operatorname{Gal}(\mathbb Q(\mu_n)/\mathbb Q)\cong(\mathbb Z/n)^\times$, so its order is $\varphi(n)$ ([[cor-the-galois-group-of-a-rational-cyclotomic-field]], [[def-unit-group-modulo-n-and-euler-totient]]).

[L2] Every finite abelian group is the Galois group of some finite Galois extension of $\mathbb Q$ ([[thm-every-finite-abelian-group-is-a-galois-group-over-the-rationals]]).

[L3] In a finite group, the order of every subgroup divides the order of the group ([[thm-lagrange]]).

## Refutation

**Proof technique:** direct.

1.1 For $n=1$ and $n=2$, the group $(\mathbb Z/n)^\times$ is trivial, so $\varphi(1)=\varphi(2)=1$. [L1, algebra]

1.2 If $n\ge3$, then the unit class $[-1]$ in $(\mathbb Z/n)^\times$ has order $2$: one has $[-1]^{2}=[1]$, and $[-1]\ne[1]$ because otherwise $n$ would divide $2$, contrary to $n\ge3$. Therefore [L3] makes the group order $\varphi(n)=|(\mathbb Z/n)^\times|$ even. [L1, L3, algebra]

2.1 Steps 1.1 and 1.2 show that $\varphi(n)$ is never $3$. So no cyclotomic field $\mathbb Q(\mu_n)$ has Galois group of order $3$, and in particular none has Galois group isomorphic to $C_3$. [step 1.1, step 1.2, L1]

3.1 By [L2], however, some finite Galois extension of $\mathbb Q$ does have Galois group $C_3$. Hence the false claim fails. [step 2.1, L2] ∎

## Remarks

- **What the true theorem says instead.** The proved result is that every finite abelian group is the Galois group of a subfield of a cyclotomic field, not of the cyclotomic field itself.
