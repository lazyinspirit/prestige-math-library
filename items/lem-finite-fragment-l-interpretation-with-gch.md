---
id: lem-finite-fragment-l-interpretation-with-gch
kind: lemma
title: Finite-fragment interpretation in L with GCH
status: draft
origin: pipeline
deps: [thm-constructible-inner-model-semantic-and-formal-schema, thm-generalized-continuum-hypothesis-in-l, def-effective-interpretation-and-proof-translation, lem-interpretation-translates-finite-derivations, def-coded-first-order-zf-theory]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: "Kunen, Set Theory, Chapter VI §§2–4, pp. 169–176"
      url: https://fa.ewi.tudelft.nl/~hart/set_theory/Jech/Kunen-1980-Set_Theory.pdf
    - title: "UCLA 220C notes, Constructible Sets §8, pp. 293–295"
      url: https://www.math.ucla.edu/~dam/220c.1.14s/220Cynm.pdf
justified_by: []
forward_refs: []
---

## Statement

For each fixed finite fragment $\Delta$ of $\mathrm{ZFC}+\mathrm{GCH}$,
some finite fragment $\Gamma$ of ZF proves the $L$-relativization of every
member of $\Delta$, with an effective translation of finite derivations.

For the fixed certified presentations below, the axiom and proof translators
can moreover be chosen primitive recursive, and PA verifies their totality and
checker acceptance. This is a uniform syntactic assertion; it is stronger than
merely knowing separately that each standard axiom has some ZF proof.

## Facts & Assumptions

**Given:** The fixed pure-membership calculus and certified ZF presentation of
F5. The target presentation adds one literal well-ordering sentence as AC and
one literal initial-ordinal cardinal-arithmetic sentence as GCH. Relativization
uses one fixed pure-membership formula $D(x)$ defining $x\in L$, with equality
and membership interpreted literally.

[F1] [[thm-constructible-inner-model-semantic-and-formal-schema]] supplies a
ZF derivation of the $L$-relativization of each fixed ZFC axiom and identifies
the interpretation domain with the constructible universe.

[F2] [[thm-generalized-continuum-hypothesis-in-l]] supplies fixed ZF
derivations of the selected AC and GCH sentences after relativization to $L$.

[F3] [[def-effective-interpretation-and-proof-translation]] fixes guarded
formula translation, certified proof predicates, malformed-input behavior and
the stronger requirement for a base-verified primitive-recursive proof map.

[F4] [[lem-interpretation-translates-finite-derivations]] compiles proofs once
the interpretation obligations and translated source-axiom proofs are supplied.

[F5] [[def-coded-first-order-zf-theory]] gives exact certificates for the six
fixed ZF axioms and arbitrary Separation and Replacement matrices, with
capture-free renaming and universal closure conventions.

## Proof

1.1 Fix the promised presentation explicitly. Expand $D(x)$ from the usual finite-formula definition of $L$: a witness is a set-sized ordinal hierarchy history beginning with the empty set, taking definable subsets at successors and unions at limits, and containing $x$ in one of its values. Expand ordered pairs, functions, ordinals, formula words and finite satisfaction tables into the primitive membership syntax. Use the least fresh variable at every renaming. Add to the F5 certificates tag $3$ for the selected well-ordering form of AC and tag $4$ for the selected GCH sentence saying that, for each infinite initial ordinal $\kappa$, the power set of $\kappa$ is bijective with its next initial ordinal. These are finite formulas, so formula recognition, certificate checking and raw $D$-relativization are primitive recursive and have literal, rather than merely alpha-equivalent, output codes. [F3, F5, given, construct]

2.1 We construct a proof-producing map on accepted target-axiom certificates. For each of the six fixed ZF tags, expand the corresponding finite derivation from F1 in the fixed calculus and store its code. Do the same for the fixed AC and GCH derivations from F2; the AC block includes the finite equivalence from the selected well-ordering sentence to the choice formulation used there, and the GCH block includes the finite expansion of initial ordinals, successor cardinals and bijections. Substitution and alpha-renaming append the required domain guards and give the exact raw-relativization endpoints. There are only eight such blocks, so they are constants of a primitive-recursive dispatcher, not an appeal to a truth predicate or to a model of ZF. [F1, F2, F3, step 1.1]

2.2 For a Separation certificate with matrix $\phi(z,\bar p)$, recurse through the parse tree of $\phi$ and compile the usual satisfaction-relativization equivalence for every subformula. Compile the finite witness-rank iteration for that subformula closure above a level containing $a,\bar p$; its terminal level $L_\beta$ reflects every member of the closure. Ambient Separation then forms $b=\{z\in a:(L_\beta,\in)\models\phi[z,\bar p]\}$, and the finite Decode/Def block puts $b$ in $L_{\beta+1}$. The compiled equivalence identifies this with $\{z\in a:\phi^L(z,\bar p)\}$. Universal generalization over the parameters, followed by the fixed propositional rearrangements, ends at the literal $D$-relativization of the F5 Separation sentence. Empty $a$ and an empty defined subset use the same block and require no witness choice. [F1, F3, F5, step 1.1, construct]

3.1 For a Replacement certificate with matrix $\phi(z,w,\bar p)$, first use ambient Replacement on the functional formula $D(w)\land\phi^L(z,w,\bar p)$ to form its image $Y$. A second ambient Replacement on constructible ranks, followed by Union and successor, produces $\beta$ with $Y\subseteq L_\beta$ and with $a,\bar p\in L_\beta$. Invoke the constructor of step 2.2 on the original image matrix $\exists z(z\in a\land\phi(z,w,\bar p))$, not on an already relativized formula. Its $L$-Separation block cuts exactly $Y$ out of $L_\beta$; internal functionality gives both directions of the required image biconditional. This also covers $a=\varnothing$. The rank-bound, uniqueness, Separation and final universal-closure templates are fixed Hilbert proof schemata, while the only varying pieces are capture-free substitutions of the parsed matrix. Consequently their expansion ends at the exact F5 Replacement relativization. [F1, F3, F5, step 2.2, construct]

4.1 The constructions in steps 2.1–3.1 use only finite list operations, structural recursion on a checked formula parse, capture-free substitution, and concatenation or index-shifting of finite derivations. Induction on the subformula schedule proves that every generated line is either one of the six logical schemes of the fixed calculus, an axiom carrying its F5 certificate, or one of its three rules applied to earlier lines. PA formalizes this bounded induction and the line-prefix induction of the proof checker. It therefore proves that the dispatcher is total and that every accepted target-axiom certificate is sent to a ZF proof whose conclusion is its literal $D$-relativization. On malformed input the dispatcher returns a fixed proof of a tautology; correctness is asserted only under the accepted-certificate antecedent. The large concrete endpoint codes and executable regression checks are useful finite checks of the selection, but are not being identified with this PA derivation. [F3, F5, step 2.1, step 2.2, step 3.1, induction]

5.1 Now fix finite $\Delta$. Apply the dispatcher to its finitely many members. From the resulting translated-axiom proofs and the finitely many fixed interpretation-obligation proofs, extract every nonlogical ZF axiom sentence that actually occurs, and let $\Gamma$ be the union of those finite supports. Proof codes themselves are not members of $\Gamma$. Every member of $\Gamma$ therefore has an F5 axiom certificate, so $\Gamma$ is a finite fragment of ZF, and weakening makes every translated-axiom and interpretation-obligation derivation a $\Gamma$-proof. For empty $\Delta$, only the ZF axiom occurrences in the fixed interpretation-obligation derivations remain. [F3, F5, step 4.1]

6.1 Give the finite source theory $\Delta$ the restricted target certificates and the interpretation of step 1.1. The lookup in its finite list of translated axiom proofs is effective. F4 therefore translates every finite $\Delta$-derivation into a $\Gamma$-derivation of its guarded $L$-translation. More generally, dispatching axiom lines as in step 4.1 and logical lines by F4 yields one PA-verified primitive-recursive translator for arbitrary certified $\mathrm{ZFC}+\mathrm{GCH}$ proofs. This proves both the stated finite-fragment result and the uniform formalized clause, without a transitive-model assumption. [F3, F4, step 4.1, step 5.1] ∎
