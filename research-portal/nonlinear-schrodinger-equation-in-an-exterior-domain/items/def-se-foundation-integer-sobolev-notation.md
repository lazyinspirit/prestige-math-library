---
id: def-se-foundation-integer-sobolev-notation
kind: definition
domain: mathematics
title: Complex integer-order Sobolev notation
status: published
deps:
  - math:def-sobolev-space-wkp-and-its-norm
  - math:def-wkp-zero-as-a-sobolev-closure
  - math:lem-sobolev-norm-is-well-defined-and-definite
  - math:def-countable-choice
dependency_roles:
  math:def-sobolev-space-wkp-and-its-norm: mathematical-premise
  math:def-wkp-zero-as-a-sobolev-closure: mathematical-premise
  math:lem-sobolev-norm-is-well-defined-and-definite: mathematical-premise
  math:def-countable-choice: mathematical-premise
provenance:
  statement: ai-generated
  proof: not-applicable
dependency_level: 0
---

## Definition

Assume Countable Choice: every sequence of nonempty sets has a choice function. Let $D\subseteq\mathbb R^n$ be open, with $n\ge1$, and let $k$ be a nonnegative integer. All functions below are complex-valued and identified when equal almost everywhere. For $1\le p\le\infty$, $W^{k,p}(D;\mathbb C)$ is the space of $L^p$ classes whose weak derivatives $D^\alpha u$ of every multi-index $\alpha\in\mathbb N_0^n$ with $|\alpha|\le k$ belong to $L^p(D;\mathbb C)$. A weak derivative is defined by integration against smooth compactly supported test functions, with the usual factor $(-1)^{|\alpha|}$; $D^0u=u$.

Write $H^k(D)=W^{k,2}(D;\mathbb C)$, with norm $\|u\|_{H^k(D)}=(\sum_{|\alpha|\le k}\|D^\alpha u\|_{L^2(D)}^2)^{1/2}$. Write $W^{k,\infty}(D)$ for $W^{k,\infty}(D;\mathbb C)$, equipped with $\|u\|_{W^{k,\infty}(D)}=\max_{|\alpha|\le k}\|D^\alpha u\|_{L^\infty(D)}$. In particular, the order-zero derivative requires $u$ itself to be essentially bounded.

Let $C_c^\infty(D;\mathbb C)$ denote the complex-valued smooth functions on $D$ whose supports are compact subsets of $D$. Define $H^k_0(D)=W^{k,2}_0(D;\mathbb C)$ as their closure in the $H^k(D)$ norm: $u\in H^k_0(D)$ exactly when, for every $\varepsilon>0$, there is $\varphi\in C_c^\infty(D;\mathbb C)$ with $\|u-\varphi\|_{H^k(D)}<\varepsilon$. This definition asserts no trace characterization.

## Definition references

[[math:def-countable-choice]]

[[math:def-sobolev-space-wkp-and-its-norm]]

[[math:def-wkp-zero-as-a-sobolev-closure]]

## Justification

The complex Sobolev supplier defines the derivative classes and displayed finite-sum and maximum conventions under Countable Choice; the assumption is used in its representative-independence and weak-derivative uniqueness interface. [[math:lem-sobolev-norm-is-well-defined-and-definite]] establishes that these expressions are norms on the classes. [[math:def-wkp-zero-as-a-sobolev-closure]] supplies the inclusion of the test functions in the Sobolev space and the resulting metric closure, so the stated approximation condition defines a subset without requiring boundary traces.

## Remarks

Fractional or negative ordinary Sobolev spaces, Dirichlet spectral spaces, identifications between domains, norm equivalences and trace characterizations require separate statements.
