---
id: def-tdmath-type-offset-vector-space
kind: definition
title: Type-offset quotient vector space
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 0
deps: [def-complete-ordered-field, def-function-space, def-vector-space, def-linear-subspace, def-linear-combination-and-span, def-cartesian-product, def-axiom-of-pairing, def-axiom-of-union, def-axiom-of-infinity, def-axiom-schema-of-separation, def-axiom-of-power-set, def-axiom-schema-of-replacement]
justified_by: [lem-tdmath-type-offset-vector-space-well-defined]
dependency_roles:
  def-complete-ordered-field: mathematical-premise
  def-function-space: mathematical-premise
  def-vector-space: mathematical-premise
  def-linear-subspace: mathematical-premise
  def-linear-combination-and-span: mathematical-premise
  def-cartesian-product: mathematical-premise
  def-axiom-of-pairing: mathematical-premise
  def-axiom-of-union: mathematical-premise
  def-axiom-of-infinity: mathematical-premise
  def-axiom-schema-of-separation: mathematical-premise
  def-axiom-of-power-set: mathematical-premise
  def-axiom-schema-of-replacement: mathematical-premise
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Lieb and Yngvason, The Physics and Mathematics of the Second Law of Thermodynamics, §VI.B"
      url: "https://arxiv.org/pdf/cond-mat/9708200v2"
    - title: "MIT 18.102, Introduction to Functional Analysis, complete lecture notes"
      url: "https://ocw.mit.edu/courses/18-102-introduction-to-functional-analysis-spring-2021/8fb8d5c170f1613151aca71de21027bc_MIT18_102s21_full_lec.pdf?download=1"
---

## Definition

Let $\mathcal G$ be a set of formal type labels closed under the formal operations $(\Gamma,\Gamma')\mapsto\Gamma\times\Gamma'$ and $(t,\Gamma)\mapsto t\Gamma$ for every real $t>0$. Let $F:=\mathbb R^{(\mathcal G)}$ be the vector space of finite-support real functions on $\mathcal G$, and let $e_\Gamma$ be the function equal to $1$ at $\Gamma$ and $0$ elsewhere.

Form the set of relation vectors

$$\mathcal R:=\{e_{\Gamma\times\Gamma'}-e_\Gamma-e_{\Gamma'}:\Gamma,\Gamma'\in\mathcal G\}\cup\{e_{t\Gamma}-t e_\Gamma:t>0,\Gamma\in\mathcal G\}.$$

Following [[def-linear-combination-and-span]], let $N$ consist of exactly the vectors $\sum_{i<n}a_i r_i$ for $n\in\mathbb N$, scalar lists $a:n\to\mathbb R$ and vector lists $r:n\to\mathcal R$. The sum is computed in the additive group of $F$, starting with $s_0=0$ and recursively setting $s_{i+1}=s_i+a_i r_i$ for $i<n$; its value is $s_n$. In particular, the empty list contributes $0\in N$. Define the **type-offset vector space**

$$V_{\mathcal G}:=F/N.$$

The class of $c\in F$ is $[c]$. The defining relations are $[e_{\Gamma\times\Gamma'}]=[e_\Gamma]+[e_{\Gamma'}]$ and $[e_{t\Gamma}]=t[e_\Gamma]$. The set existence, subspace properties, quotient operations and vector-space laws are proved in [[lem-tdmath-type-offset-vector-space-well-defined]]. These are formal algebraic type labels; no actual catalyst-chain cost or physical existence claim is built into $V_{\mathcal G}$.
