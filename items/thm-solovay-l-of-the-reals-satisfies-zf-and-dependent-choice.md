---
id: thm-solovay-l-of-the-reals-satisfies-zf-and-dependent-choice
kind: theorem
title: Solovay L(R) satisfies ZF and Dependent Choice
status: published
origin: pipeline
deps: [def-l-of-the-reals-in-the-solovay-collapse-extension, def-definable-subsets-of-a-membership-structure, lem-canonical-well-order-of-finite-definition-codes, def-serial-relation-dependent-choice-principle-over-zf, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: canonical-code-recursion
verification:
  audited: 2026-09-14
sources:
  references:
    - {title: "Solovay 1970, Part III, Lemmas 2.4–2.7", url: "https://people.math.ethz.ch/~fdalio/ZKmodel.pdf"}
    - {title: "Unger 2015, pp. 1–2 and Claim 6's HOD(R) coding template", url: "https://www.math.toronto.edu/sunger/solovay-model.pdf"}
    - {title: "Kanamori, The Higher Infinite, Theorem 11.1 and Proposition 11.13", url: "https://math.cs.kitami-it.ac.jp/~fuchino/xbooks/The-Higher-Infinite-optimized.pdf", locator: "§11, printed pp. 139–143"}
---

## Statement

$L(\mathbb R)^{V[G]}$ is an inner model of ZF+DC with the same reals and ordinals as $V[G]$. Moreover, its hierarchy gives a canonical definable surjection

$$F:\operatorname{Ord}\times\mathbb R\twoheadrightarrow L(\mathbb R)$$

in which the finite formula and hierarchy codes are absorbed into the ordinal coordinate.

## Facts & Assumptions

**Given:** The relativized $L(\mathbb R)$ hierarchy in the Solovay extension.

[F1] [[def-l-of-the-reals-in-the-solovay-collapse-extension]] and [[def-definable-subsets-of-a-membership-structure]]: successor stages contain exactly first-order definable subsets with parameters.

[F2] [[lem-canonical-well-order-of-finite-definition-codes]] applies to each well-ordered set of ordinals below a fixed bound and each fixed finite arity. It orders the finite ordinal part of a definition code only; it supplies no well-order of a hierarchy stage or of its real parameters.

[F3] [[def-serial-relation-dependent-choice-principle-over-zf]]: states DC in serial-relation form.

[F4] [[def-axiom-of-choice]]: ambient AC chooses real witnesses after ordinal minimization.

## Proof

1.1 Induction makes every $L_\alpha(\mathbb R)$ transitive and makes the hierarchy continuous at limits. Empty set, pairing, union, infinity and every required finite construction occur at a bounded later definability stage; Extensionality and Foundation are absolute to the transitive union. For a fixed formula and parameters, the usual finite-formula reflection construction closes an ordinal stage under witnesses for that formula and its subformulas. Separation over a set is consequently definable at the next stage. For Replacement, ambient Replacement first collects the uniquely specified witnesses and their least hierarchy ranks; their supremum is an ordinal, and reflection above that bound makes the image definable over one set stage. For Power Set, ambient Separation forms the set of $L(\mathbb R)$-members of $\mathcal P(a)$; ambient Replacement bounds their least hierarchy ranks, so at a later stage this entire internal power set is the definable set $\{x\in L_\theta(\mathbb R):x\subseteq a\}$. These arguments also give Collection. Thus $L(\mathbb R)\models ZF$, and F1 gives equality of its reals and ordinals with the ambient model. [F1]

1.2 Recursively unfold a successor-stage definition into its finitely branching tree of earlier parameter definitions. This tree is finite: if it had nodes at every finite depth, repeatedly taking the least extendible child would give a strictly descending omega-sequence of hierarchy ranks. Encode its finite shape and formula numbers by natural numbers. Bound its finitely many ordinal labels by one ordinal; F2 orders the resulting fixed-arity bounded tuple, and finite ordinal pairing absorbs that tuple, the shape, and the formula numbers into one ordinal. Interleave the finitely many real leaves into one real. Decoding all such pairs defines a surjection $F:\mathrm{Ord}\times\mathbb R\twoheadrightarrow L(\mathbb R)$; invalid codes return $\varnothing$. The same recursion is set-sized below every fixed ordinal stage. At no point are the real leaves or all of a hierarchy stage well-ordered. [F1, F2]

2.1 Let $A,R,a_0\in L(\mathbb R)$, where $A\ne\varnothing$, $a_0\in A$, and $R$ is serial on $A$. Ambient AC first supplies one choice function on the set of all nonempty subsets of $\mathbb R$. Let $\alpha_0$ be the least ordinal for which some real codes $a_0$ via $F$, and use that choice function to select such an $x_0$. Recursively let $\alpha_{n+1}$ be the least ordinal for which some real $x$ codes via $F$ an $R$-successor in $A$ of $F(\alpha_n,x_n)$, and apply the same choice function to this nonempty set of real witnesses to obtain $x_{n+1}$. Membership of the current point in $A$ and seriality on $A$ make every successor-witness set nonempty. Thus ordinal minimization is canonical, while F4 is used exactly for the real witnesses. [F3, F4, step 1.2]

3.1 One real $y$ interleaves all $x_n$. From $y,R,a_0$ the leastness clauses recursively recover $\alpha_0$ and every $\alpha_{n+1}$, hence the chain $n\mapsto F(\alpha_n,x_n)$. Because $y,R,a_0\in L(\mathbb R)$, that definition belongs to a later hierarchy stage. It is an internal $R$-chain, proving DC. For a singleton $A$ the construction is constant; no boundedness of the ordinal sequence is assumed. [F1, F3, step 1.2, step 2.1] ∎
