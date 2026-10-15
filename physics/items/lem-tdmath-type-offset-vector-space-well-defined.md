---
id: lem-tdmath-type-offset-vector-space-well-defined
kind: lemma
title: Type-offset quotient is a real vector space
status: published
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 1
deps: [def-tdmath-type-offset-vector-space, def-complete-ordered-field, def-function-space, def-vector-space, def-linear-subspace, def-cartesian-product, def-axiom-of-pairing, def-axiom-of-union, def-axiom-of-infinity, def-axiom-schema-of-separation, def-axiom-of-power-set, def-axiom-schema-of-replacement]
dependency_roles:
  def-tdmath-type-offset-vector-space: mathematical-premise
  def-complete-ordered-field: mathematical-premise
  def-function-space: mathematical-premise
  def-vector-space: mathematical-premise
  def-linear-subspace: mathematical-premise
  def-cartesian-product: mathematical-premise
  def-axiom-of-pairing: mathematical-premise
  def-axiom-of-union: mathematical-premise
  def-axiom-of-infinity: mathematical-premise
  def-axiom-schema-of-separation: mathematical-premise
  def-axiom-of-power-set: mathematical-premise
  def-axiom-schema-of-replacement: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "MIT 18.102, Introduction to Functional Analysis, complete lecture notes"
      url: "https://ocw.mit.edu/courses/18-102-introduction-to-functional-analysis-spring-2021/8fb8d5c170f1613151aca71de21027bc_MIT18_102s21_full_lec.pdf?download=1"
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
---

## Statement

For the construction in [[def-tdmath-type-offset-vector-space]], $F$ and $N$ are sets, $F$ is a real vector space, $N$ is a linear subspace of $F$, and $F/N$ has representative-independent vector operations making it a real vector space. Its displayed product and positive-scaling relations hold in the quotient.

## Facts & Assumptions

[F1] [[def-tdmath-type-offset-vector-space]]: $\mathcal G$ is a set closed under product and positive scaling; $F$ consists of finite-support functions; $N$ is the set of finite linear combinations of the stated relation vectors.

[F2] [[def-function-space]] and [[def-vector-space]]: all functions $\mathcal G\to\mathbb R$ form a real vector space under pointwise operations.

[F3] [[def-linear-subspace]]: a nonempty subset closed under addition and scalar multiplication is a linear subspace with inherited operations.

[F4] [[def-axiom-of-pairing]], [[def-axiom-of-union]], [[def-axiom-of-infinity]], [[def-axiom-schema-of-separation]], [[def-axiom-of-power-set]], [[def-axiom-schema-of-replacement]], and [[def-cartesian-product]]: pairs, unions, natural numbers, subsets, power sets, images of sets, and Cartesian products of sets exist.

## Proof

**Given:** [F1]–[F4].

1.1 The set of all functions $\mathcal G\to\mathbb R$ exists and is a vector space by [F2]. Separation [F4] selects the functions whose support is finite, so $F$ is a set. It contains zero; if $c,d\in F$, then $\operatorname{supp}(c+d)\subseteq\operatorname{supp}(c)\cup\operatorname{supp}(d)$, a finite union, and $\operatorname{supp}(tc)\subseteq\operatorname{supp}(c)$ for every scalar $t$. Thus $F$ is a linear subspace of the function space by [F3], hence a real vector space. [F1, F2, F3, F4]

1.2 The index sets $\mathcal G\times\mathcal G$ and $\mathbb R_{>0}\times\mathcal G$ exist by [F4]. Replacement applied to the two displayed relation maps in [F1] gives the set $\mathcal R$; each relation vector has support of size at most three and lies in $F$. The family of finite subsets of $\mathcal R$ is a subset of its power set, and the coefficient functions on each such finite subset form sets by [F2] and [F4]. Replacement under finite summation therefore gives the set $N\subseteq F$ of all finite linear combinations. [F1, F2, F4]

2.1 The zero vector is in $N$ as the empty sum. If $u,v\in N$, write each as a finite combination of relation vectors; their sum is the finite combination on the union of those two finite index sets, adding coefficients where an index repeats. For $t\in\mathbb R$, $tu$ is obtained by multiplying every coefficient by $t$. Hence $N$ is closed under addition and scalar multiplication and is a linear subspace of $F$ by [F3]. [F1, F3, step 1.2]

3.1 Define $c\sim d$ on $F$ exactly when $c-d\in N$. Since $0\in N$, $N$ is closed under negatives (take scalar $-1$), and under addition, this relation is reflexive, symmetric and transitive. Each class $[c]=\{d\in F:d-c\in N\}$ is a subset of $F$ by separation; replacement on the set $F$ gives the quotient set of these classes. [F1, F4, step 2.1]

4.1 If $c\sim c'$ and $d\sim d'$, then $(c+d)-(c'+d')=(c-c')+(d-d')\in N$; and for any scalar $t$, $tc-tc'=t(c-c')\in N$. Therefore $[c]+[d]:=[c+d]$ and $t[c]:=[tc]$ do not depend on representatives. The quotient map $c\mapsto[c]$ preserves zero, addition and scalar multiplication; applying it to each vector-space identity in $F$ proves all vector-space axioms in $F/N$. Every generator in $\mathcal R$ lies in $N$, so its class is zero and the two displayed relations hold. [F1, F2, step 2.1, step 3.1] ∎

