---
id: lem-basic-cohen-symmetric-construction-is-uniformly-formalizable
kind: lemma
title: Fixed finite-fragment verification for the basic Cohen symmetric model
status: published
origin: pipeline
deps: [def-basic-cohen-symmetric-system, def-forcing-relation-for-atomic-formulas, def-forcing-relation-for-formulas, lem-symmetry-lemma-for-forcing-automorphisms, thm-hereditarily-symmetric-interpretations-form-a-zf-model, cor-basic-cohen-model-fails-well-orderability-and-choice, thm-montague-levy-finite-reflection, cor-countable-transitive-models-of-fixed-zfc-fragments, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - {title: "Karagila, Forcing & Symmetric Extensions, §10.4", url: "https://karagila.org/files/Forcing-2023.pdf"}
    - {title: "Jech, The Axiom of Choice, Theorem 3.2 and Lemma 3.3, pp. 35–38", url: "https://gwern.net/doc/math/1973-jech-theaxiomofchoice.pdf"}
---

## Statement

For every externally fixed finite fragment $\Delta$ of $\mathrm{ZF}+\neg\mathrm{AC}$, ZFC proves that a set model of $\Delta$ exists, using the basic Cohen symmetric construction. Each such proof uses some finite fragment of ZFC. The finite fragment and its proof may depend on $\Delta$; no PA-verified uniform proof-code constructor is asserted.

## Facts & Assumptions

**Given:** One externally fixed finite list $\Delta$ of target axioms, including its actual Separation and Replacement matrices.

[F1] [[def-forcing-relation-for-atomic-formulas]] and [[def-forcing-relation-for-formulas]] specify the name-rank and formula recursions for each fixed formula.

[F2] [[def-basic-cohen-symmetric-system]], [[lem-symmetry-lemma-for-forcing-automorphisms]], and [[thm-hereditarily-symmetric-interpretations-form-a-zf-model]] supply the symmetric system, equivariance, and semantic HS-model construction. Direct invariant subname cuts apply only to bounded matrices.

[F3] [[cor-basic-cohen-model-fails-well-orderability-and-choice]] supplies the basic Cohen model's failure of Choice.

[F4] [[thm-montague-levy-finite-reflection]] and [[cor-countable-transitive-models-of-fixed-zfc-fragments]] supply countable transitive models for each externally fixed finite ZFC fragment.

[F5] [[def-axiom-of-choice]] is available in the ambient ZFC proof, particularly for the countable hull and generic enumeration; it is not assumed in the symmetric target.

## Proof

1.1 Fix the actual formulas of $\Delta$ and their subformulas. Use $P=\operatorname{Add}(\omega,\omega)$, the finite permutations of the first coordinate, and the finite-support normal filter of F2. For each of these fixed formulas the recursions in F1 give ordinary set-theoretic proofs of definability, strengthening, truth and equivariance. Name-rank induction is an object-level transfinite induction in those proofs, not a numerical search over names. [F1, F2]

2.1 Here is the almost-universality argument used by the HS-model construction. In an ambient generic extension let $x=\dot x_{G_0}\subseteq N=\mathrm{HS}^{G_0}$. In the ground model assign to each $(\tau,p)\in\operatorname{dom}(\dot x)\times P$ the least rank of an HS name $\sigma$ such that $p\Vdash\tau=\sigma$, or zero if none exists. Ground Replacement bounds these ranks strictly by an ordinal $\gamma$. For every $u\in x$, a subname $\tau$ evaluating to $u$ and the truth lemma give such an equality at some condition in $G_0$. Thus $u$ has an HS name of rank below $\gamma$. The ground set of all HS names below that rank is invariant under every automorphism; placing all these names at the top condition gives an HS name for an $N$-set containing $x$. This proves relative almost universality. For a bounded matrix, rank-bounded HS subnames satisfying its ordinary forcing clause form the exact cut of an $N$-set. Bounded absoluteness identifies that clause with truth in $N$; the parameter stabilizers and equivariance make the cut HS. [F1, F2, step 1.1]

2.2 For completeness, the failure-of-Choice argument in F3 has two supported-map branches. Distinct coordinate names $\dot a_n$ are forced unequal by assigning opposite values at a fresh bit. If an HS name $\dot f$ were an injection from $\omega$ to $A$, take a finite support $E$ for it and a condition $p$ forcing this, enlarging $E$ to include the finite first-coordinate support of $p$. If no strengthening decides any value outside $\{a_n:n\in E\}$, density of value decisions confines its range to that finite set, contradicting injectivity. Otherwise choose a strengthening $q$ deciding $f(i)=a_n$ with $n\notin E$, and $m$ outside $E\cup\operatorname{supp}(q)\cup\{n\}$. The transposition of $n,m$ fixes $p,\dot f$; $q$ and its image agree off the swapped coordinates and have disjoint domains on them, so their union forces two distinct values for $f(i)$. Thus $A$ is infinite and has no injection from $\omega$; a well-order of $A$ would give one by successively choosing its least remaining element. Hence $N\models\neg\mathrm{AC}$. These are set-theoretic arguments within the chosen proof, not operations performed by a numerical proof constructor. [F1, F2, F3, step 1.1]

3.1 Pairing HS names directly gives unordered and Kuratowski pairs in $N$. Each of Jech's eight operations (pair, difference, product, domain, restricted membership and three triple-coordinate permutations) produces an ambient set of $N$-elements. Step 2.1 puts it inside an $N$-set; its bounded defining formula cuts out the operation's exact value. To obtain general Separation, induct externally on the fixed formula's complexity. Atomic relations follow from these operations, negation from relative difference, and conjunction from intersection. For an existential subformula $\exists v\,\psi(v,\bar u)$, ambient Separation and Replacement collect, for every parameter tuple, the set of all $N$-witnesses of least rank, or the empty set. Starting from the argument set and the parameters, close under these witness sets for $\omega$ stages. This yields an ambient set containing witnesses for every relevant tuple. Almost universality puts it inside a set $Y\in N$; the induction hypothesis constructs the relation for $\psi$ on $Y$, and projection followed by restriction gives the existential relation on the original argument set. This is the cited Jech all-witness and transitive-class argument, with no choice of a distinguished witness. For a fixed functional Replacement matrix, ambient Replacement bounds its unique $N$-values on the domain, almost universality supplies an internal container, and the just-proved internal Separation cuts out the image. Only bounded matrices used the direct subname cut of step 2.1. [F2, step 2.1]

4.1 For the externally fixed $\Delta$, the finitely many formula inductions just described yield finite ZFC derivations of its HS-model axioms and step 2.2. Collect their actual Separation, Replacement, recursion and forcing instances into a finite ground support $\Gamma$, enlarging it for the names, valuations and generic construction. The preceding argument applied to a countable transitive $\Gamma$-model proves that its symmetric extension satisfies each member of $\Delta$; full ZFC in that ground model is not used. F4 proves in ambient ZFC that such a countable transitive source model exists. Enumerate its dense subsets, construct a generic filter, and take the set of valuations of its HS names. This gives a set model of the particular $\Delta$. Ambient AC has precisely the source-model and generic-construction role of F5. [F1, F2, F4, F5, step 1.1, step 2.1, step 3.1, step 2.2]

5.1 The ambient ZFC derivation in step 4.1 is finite, so it too uses only finitely many axioms and schema instances. The choice of this proof is made separately for the given external $\Delta$. Neither a single internally quantified model-existence assertion nor a PA-total selector of these proofs follows from this argument. This proves exactly the fixed-fragment assertion. [step 4.1] ∎
