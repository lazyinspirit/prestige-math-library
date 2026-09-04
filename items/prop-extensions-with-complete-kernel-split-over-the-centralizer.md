---
id: prop-extensions-with-complete-kernel-split-over-the-centralizer
kind: proposition
title: "If the kernel is complete, the extension splits over its centralizer"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-complete-group, lem-an-extension-induces-a-well-defined-outer-action-on-the-kernel, thm-splitting-criteria-via-sections-complements-retractions-and-semidirect-products, def-centralizer-of-a-subgroup, thm-conjugation-is-an-automorphism]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Group Theory"
      url: "https://www.jmilne.org/math/CourseNotes/GT.pdf"
---

## Statement

Let

$$1\to N\xrightarrow{i}E\xrightarrow{\pi}Q\to1$$

be a group extension. If $N$ is complete, then $E$ is the internal direct
product of $i(N)$ and $C_E(i(N))$. In particular, the extension splits.

## Facts & Assumptions

**Given:** The displayed extension, with $N$ complete.

[L1] A complete group has trivial center and trivial outer automorphism group
([[def-complete-group]]).

[L2] Every extension determines a homomorphism $Q\to\operatorname{Out}(N)$
([[lem-an-extension-induces-a-well-defined-outer-action-on-the-kernel]]).

[L3] The centralizer $C_E(i(N))$ consists of the elements of $E$ commuting with
every element of $i(N)$ ([[def-centralizer-of-a-subgroup]]).

[L4] In an extension, a complement to the kernel is equivalent to a split
section ([[thm-splitting-criteria-via-sections-complements-retractions-and-semidirect-products]]).

## Proof

**Proof technique:** direct.

1.1 By [L2], the extension defines a homomorphism $\omega:Q\to\operatorname{Out}(N)$. Since $\operatorname{Out}(N)=1$ by [L1], this homomorphism is trivial. Therefore for every $g\in E$, conjugation by $g$ on $i(N)$ is an inner automorphism. [L1, L2, given]

1.2 If $x\in i(N)\cap C_E(i(N))$, then $x$ commutes with every element of $i(N)$. Under the identification of $i(N)$ with $N$, this says that $x$ lies in $Z(N)$, which is trivial by [L1]. So $i(N)\cap C_E(i(N))=1$. [L1, L3, algebra]

2.1 Fix $g\in E$. By step 1.1 there exists $\gamma\in N$ such that $g\,i(n)\,g^{-1}=i(\gamma n\gamma^{-1})$ for all $n\in N$. Then $i(\gamma)^{-1}g$ commutes with every element of $i(N)$, so $i(\gamma)^{-1}g\in C_E(i(N))$. Hence every $g\in E$ lies in $i(N)C_E(i(N))$, and therefore $E=i(N)C_E(i(N))$. [L3, step 1.1, algebra]

3.1 Because every element of $C_E(i(N))$ commutes with every element of $i(N)$ by [L3], the two subgroups centralize one another. Together with steps 2.1 and 1.2, this makes $E$ the internal direct product of $i(N)$ and $C_E(i(N))$. In particular $C_E(i(N))$ is a complement to $i(N)$, so [L4] gives a split extension. [L3, L4, step 2.1, step 1.2] ∎
