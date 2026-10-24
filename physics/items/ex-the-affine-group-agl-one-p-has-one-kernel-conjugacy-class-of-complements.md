---
id: ex-the-affine-group-agl-one-p-has-one-kernel-conjugacy-class-of-complements
kind: example
title: "The affine group AGL(1,p) has one kernel-conjugacy class of complements to its translation subgroup"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-first-cohomology-via-crossed-homomorphisms, thm-first-cohomology-classifies-complements-up-to-kernel-conjugacy, thm-z-mod-p-is-a-field, thm-multiplicative-group-of-a-finite-field-is-cyclic, ex-crossed-homomorphisms-from-a-cyclic-group-are-determined-by-a-generator]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "David A. Craven, Finite Group Theory"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/finitegroups2012.pdf"
---

## Example

Let $p$ be prime. In the affine group

$$\operatorname{AGL}(1,p)=\mathbb F_p\rtimes\mathbb F_p^\times,$$

all complements to the translation subgroup $\mathbb F_p$ are conjugate by
translations.

## Facts & Assumptions

**Given:** A prime $p$ and the semidirect product $\mathbb F_p\rtimes\mathbb F_p^\times$.

[L1] First cohomology classifies complements up to kernel conjugacy ([[thm-first-cohomology-classifies-complements-up-to-kernel-conjugacy]]).

[L2] The two operations on $\mathbb F_p$ make it a field ([[thm-z-mod-p-is-a-field]]).

[L3] The multiplicative group $\mathbb F_p^\times$ is cyclic, and crossed homomorphisms from a cyclic group are determined by the value on a generator ([[thm-multiplicative-group-of-a-finite-field-is-cyclic]], [[ex-crossed-homomorphisms-from-a-cyclic-group-are-determined-by-a-generator]]).

[L4] First cohomology is the quotient of crossed homomorphisms by principal crossed homomorphisms ([[def-first-cohomology-via-crossed-homomorphisms]]).

## Verification

**Proof technique:** direct.

1.1 If $p=2$, then $\mathbb F_2^\times=\{1\}$ is trivial, so the only crossed homomorphism $\mathbb F_2^\times\to\mathbb F_2$ is the zero map. Hence $H^1(\mathbb F_2^\times,\mathbb F_2)=0$ by [L4]. [given, L2, L4, algebra]

1.2 Suppose $p>2$. By [L2] and [L3], choose a generator $u$ of the cyclic group $\mathbb F_p^\times$. Any crossed homomorphism $z:\mathbb F_p^\times\to\mathbb F_p$ is determined by $m=z(u)$, so it suffices to show that $m$ is always principal. [given, L2, L3, choose]

2.1 Because $p>2$, the generator $u$ is not $1$, so $u-1\neq0$ in the field $\mathbb F_p$. By [L2] it is therefore invertible. Choose $a\in\mathbb F_p$ with $(u-1)a=m$. Then the principal cocycle $g\mapsto g\cdot a-a$ agrees with $z$ on the generator $u$, hence everywhere by [L3]. Thus every crossed homomorphism is principal, and [L4] gives $H^1(\mathbb F_p^\times,\mathbb F_p)=0$. [L2, L3, L4, step 1.2, choose, algebra]

3.1 Steps 1.1 and 2.1 show that $H^1(\mathbb F_p^\times,\mathbb F_p)=0$ for every prime $p$. Now [L1] shows that there is exactly one $\mathbb F_p$-conjugacy class of complements to the translation subgroup in $\operatorname{AGL}(1,p)$. [L1, step 1.1, step 2.1] ∎
