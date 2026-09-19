---
id: lem-measurable-null-code-orders-bound-constructible-null-unions
kind: lemma
title: A measurable null-code order bounds the constructible null union
status: draft
origin: pipeline
deps: [def-boldface-sigma-one-three-measurability, thm-canonical-definable-global-well-order-of-l, thm-tonelli-and-fubini-for-completed-product-measures, def-countable-choice, cor-lebesgue-outer-measure-is-regular-with-borel-measurable-hulls, lem-dyadic-coding-coin-measure-and-lebesgue-transfer]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
sources:
  references:
    - {title: "Hiromi Ishii, Regularity Properties and Inaccessible Cardinals", url: "https://tsukuba.repo.nii.ac.jp/record/37187/files/Hiromi%20ISHII.pdf", locator: "Definition 3.4 and Lemma 3.10, pp. 47-48"}
---

## Statement

For a real $x$ define $A(x)$ on pairs $(u,v)$ by comparing the least canonical
$L[x]$ null $G_\delta$ codes containing $u$ and $v$. Then $A(x)$ is
$\Sigma^1_2(x)$. Under Countable Choice, if $A(x)$ is measurable, the union $G$
of all null Borel sets coded in $L[x]$ is null in the ambient universe.

## Facts & Assumptions

**Given:** A real $x$, the coin measure $\nu$ on $2^\omega$ with its completion, and the family of null $G_\delta$ subsets of $2^\omega$ coded in $L[x]$.

[F1] [[thm-canonical-definable-global-well-order-of-l]]: $L[x]$ has a canonical definable global well-order, so its Borel codes and the null $G_\delta$ subsets they define are enumerated in a canonical order $\langle z_\xi:\xi<\omega_1^{L[x]}\rangle$ without choice.

[F2] [[def-boldface-sigma-one-three-measurability]]: the pointclass $\Sigma^1_2(x)$ and its closure properties under real quantifiers with arithmetic matrices.

[F3] [[def-countable-choice]]: countable unions of null sets are null, and $\omega_1$ is regular; both are used to see that initial segments of the canonical enumeration of length below $\omega_1$ are null.

[F4] [[thm-tonelli-and-fubini-for-completed-product-measures]]: Fubini for the completed product measure: a measurable subset of $2^\omega\times2^\omega$ whose horizontal sections are almost all null has null vertical-section set, and almost every vertical section of a null measurable set is null.

[F5] [[cor-lebesgue-outer-measure-is-regular-with-borel-measurable-hulls]]: outer measure from open covers and inner approximation by closed sets, which converts the Fubini conclusion for the section function into nullity of $G$.

[F6] [[lem-dyadic-coding-coin-measure-and-lebesgue-transfer]]: the coin measure and its standard transfer to Lebesgue measure.

## Proof

1.1 Enumerate the Borel codes of null $G_\delta$ sets lying in $L[x]$ in the canonical order of [F1] as $\langle z_\xi:\xi<\omega_1^{L[x]}\rangle$, and let $G_\xi$ be the $G_\delta$ set coded by $z_\xi$ in the ambient universe. Define the disjointified sets $\tilde G_\xi=G_\xi\setminus\bigcup_{\eta<\xi}G_\eta$ and $G=\bigcup_{\xi<\omega_1^{L[x]}}G_\xi=\bigcup_\xi\tilde G_\xi$, a pairwise disjoint decomposition, all measured by the completed coin measure of [F6]. [F1, F6]

2.1 Definition of the order: put $\xi(u)$ equal to the unique $\xi$ with $u\in\tilde G_\xi$ for $u\in G$, and define $A(x)=\{(u,v)\in G\times G:\xi(u)<\xi(v)\}$. Then $A(x)$ is exactly the set of pairs $(u,v)$ for which the least canonical null $G_\delta$ code containing $u$ precedes that containing $v$. [F1, step 1.1]

3.1 Complexity: $(u,v)\in A(x)$ can be expressed by the existence of a real coding a countable well-founded level $L_\alpha[x]$ and a code $z$ in that level such that $z$ codes a null $G_\delta$ containing $u$ and no earlier code in the level codes one containing $v$. Satisfaction and the bounded canonical-order search in the coded countable level are arithmetic in the code, while well-foundedness is $\Pi^1_1$; after the leading existential real quantifier this is a $\Sigma^1_2(x)$ definition, as in [F2]. [F2, step 2.1]

3.2 Sections: for $v\in G$, the section $A(x)^v=\{u:\xi(u)<\xi(v)\}=\bigcup_{\xi<\xi(v)}\tilde G_\xi$ is a union of fewer than $\omega_1$ null sets. Since every ordinal below $\omega_1$ is countable, this is a countable union of null sets and hence null by [F3]; the same holds for every $v$ because $A(x)\subseteq G\times G$. [F1, F3, step 2.1]

4.1 Fubini: assume $A(x)$ is measurable. Applying [F4] to the measurable set $A(x)$ whose horizontal sections are almost all null by step 3.2, the set $Z=\{u:\nu(A(x)_u)>0\}$ of indices with non-null vertical section is null. [F4, step 3.2]

5.1 Split into two cases, without assigning a measure to the possibly nonmeasurable set $G$. If the vertical section $A(x)_u$ is non-null for every $u\in G$, then $G\subseteq Z$, and step 4.1 makes $G$ null. Otherwise choose $u\in G$ for which $A(x)_u$ is null. The lower horizontal section $A(x)^u=\{v\in G:\xi(v)<\xi(u)\}$ is null by step 3.2, the middle layer $\widetilde G_{\xi(u)}$ is contained in the null set $G_{\xi(u)}$, and the upper vertical section $A(x)_u=\{v\in G:\xi(u)<\xi(v)\}$ is null by choice. Since $G=A(x)^u\cup\widetilde G_{\xi(u)}\cup A(x)_u$, this finite union is null. In both cases $G$ is null; [F5] supplies a measurable null hull if nullity is formulated via outer measure. [F3, F5, step 3.2, step 4.1]

6.1 the steps above prove the complexity and the nullity conclusion, which is the Statement. [step 3.1, step 5.1] ∎
