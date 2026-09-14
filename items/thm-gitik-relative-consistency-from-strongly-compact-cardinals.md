---
id: thm-gitik-relative-consistency-from-strongly-compact-cardinals
kind: theorem
title: Relative consistency from a proper class of strongly compact cardinals
status: published
origin: pipeline
deps:
  - thm-finite-fragment-relative-consistency-transfer
  - thm-montague-levy-finite-reflection
  - thm-countable-elementary-submodels-and-transitive-collapses
  - lem-derivation-finite-support-and-concatenation
  - def-lc-fine-ultrafilters-strong-compactness-and-supercompactness
  - def-gitik-strongly-compact-filter-system-and-class-forcing
  - thm-gitik-expanded-proper-class-forcing-theorem
  - thm-gitik-symmetric-submodel-satisfies-zf
  - thm-gitik-every-limit-ordinal-has-cofinality-omega
  - cor-gitik-every-uncountable-cardinal-is-singular
  - def-axiom-of-choice
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-09-14
sources:
  references:
    - title: "Schürz, Gitik's model, abstract, opening reduction and final theorem, pages 3–4 and 20"
      url: https://repositum.tuwien.at/bitstream/20.500.12708/5394/2/Schuerz%20Johannes%20Philipp%20-%202018%20-%20Gitiks%20model%20or%20a%20model%20of%20ZF%20where%20all...pdf
    - title: "Felgner, Comparison of the axioms of local and universal choice, Theorems 1–2 and Lemmas 1–20, pages 43–59"
      url: http://matwbn.icm.edu.pl/ksiazki/fm/fm71/fm7113.pdf
---

## Statement

Let

$$T=\mathrm{ZFC}+\text{``for every ordinal there is a larger strongly compact cardinal.''}$$

If $T$ is consistent, then so is ZF together with the assertion that every
uncountable cardinal has cofinality $\omega$ and hence is singular.  This is an
external relative-consistency implication.  It does not assert that bare
$\operatorname{Con}(T)$ supplies a countable transitive model of all of $T$.

## Facts & Assumptions

**Given:** The completed Gitik forcing and symmetry proofs of the preceding items.  Write $\mathsf{PCSC}$ for the one first-order sentence saying that strongly compact cardinals are unbounded in the ordinals, and $\mathsf{NRLP}$ for the sentence saying that no regular cardinal is a limit point of the strongly compact cardinals used as coordinates.

[F1] [[thm-finite-fragment-relative-consistency-transfer]]: For an explicitly countable target theory, external relative consistency follows if every fixed finite target fragment has a finite source fragment whose suitable transitive model can be constructed in the source theory and converted there into a set model of the target fragment.  This is a fixed-fragment metatheorem, not a uniform internal proof-code assertion.

[F2] [[thm-montague-levy-finite-reflection]]: Every fixed finite family of membership formulas reflects to arbitrarily high cumulative stages.  Closing the family under subformulas gives the witness criterion used below.

[F3] [[thm-countable-elementary-submodels-and-transitive-collapses]]: Under ambient AC, an infinite extensional set membership structure has a countable elementary submodel with a countable transitive collapse.

[F4] [[def-lc-fine-ultrafilters-strong-compactness-and-supercompactness]]: A strongly compact $\kappa$ supplies, for each set-sized target above $\kappa$, the required fine $\kappa$-complete ultrafilter.  The witnesses and the statements of fineness and completeness have rank only finitely above the target data.

[F5] Felgner, Theorems 1–2 and Lemmas 1–20: a countable model of the local choice theory has a class extension with exactly the same sets and a universal choice function.  Conditions are set-sized local choice functions; a complete descending sequence meets every dense class.  The forcing and weak-forcing lemmas give truth, and Lemmas 16–20 verify Separation/Replacement for formulas using the new choice predicate.  Each fixed finite family uses only finitely many source instances.

[F6] [[def-gitik-strongly-compact-filter-system-and-class-forcing]]: Over a transitive ZFC model equipped with the stated global well-order and an unbounded strongly compact coordinate class having no regular limit point, the coordinate filters, stems, measure-one trees and definable proper-class forcing $P_3$ are defined.

[F7] [[thm-gitik-expanded-proper-class-forcing-theorem]]: For that already defined $P_3$ and an upward-closed directed filter $G$ meeting every ground-definable dense subclass, each fixed expanded-language formula has a definable forcing predicate satisfying the truth lemma.

[F8] [[thm-gitik-symmetric-submodel-satisfies-zf]]: The hereditarily symmetric values form a transitive model of ZF.

[F9] [[thm-gitik-every-limit-ordinal-has-cofinality-omega]]: Every nonzero limit ordinal in that model has cofinality $\omega$.

[F10] [[cor-gitik-every-uncountable-cardinal-is-singular]]: Consequently every uncountable cardinal there has cofinality $\omega$ and is singular.

[F11] [[def-axiom-of-choice]]: AC is used only in the source theory: for the countable hull/collapse, the global-choice preparation, ground filter choices, and the external generic enumerations.  It is not asserted in the target symmetric model.

[F12] [[lem-derivation-finite-support-and-concatenation]]: Every fixed formal derivation uses only finitely many theory assumptions, and finitely many such derivations may be concatenated after replacing proved premises by their proofs.

## Proof

1.1 Let $\Delta$ be an arbitrary external finite fragment of $$U=\mathrm{ZF}+\text{``every uncountable cardinal has cofinality }\omega\text{.''}$$ Expand, for the sentences in $\Delta$, the actual fixed-formula derivations underlying F6--F9: the required coordinate-filter and $P_3$ clauses, the atomic class-forcing recursion, its Boolean and existential clauses, the needed Separation/Collection name constructions, the particular homogenization and Power Set argument, and the coordinate proof of the single cofinality sentence. By F12 each one has finite assumption support, and finitely many such supports have finite union. Retain each specifically used ground Separation/Replacement instance, recursion instance, parameter-existence formula, and local class-theory instance. Let $\Gamma$ be their finite set of pure ground translations, enlarged by Extensionality, AC, the finite instances required by Felgner's preparation, and the sentences $\mathsf{PCSC}$ and $\mathsf{NRLP}$ required by the reduced F6 construction. No theorem saying that a finite-fragment model satisfies full ZFC is invoked here. [F1, F5, F6, F7, F8, F9, F11, F12]

2.1 Work in $T$. If there is no regular limit of strongly compact cardinals, let $V^*=V$. Otherwise let $\lambda$ be the least regular limit of strongly compact cardinals and let $V^*=V_\lambda$. In the second case $\lambda$ is strongly inaccessible, strongly compact cardinals are unbounded below it, and all set-sized fine-ultrafilter witnesses with target below $\lambda$ belong to $V_\lambda$; hence $V_\lambda\models T$. Minimality of $\lambda$ says that $V_\lambda\models\mathsf{NRLP}$. In the first case $V$ itself models $T+\mathsf{NRLP}$. Thus in both cases the following reflection construction is carried out inside a transitive $V^*\models T+\mathsf{NRLP}$; this is Schürz's opening reduction, not an inference from $\mathsf{PCSC}$ alone. Close the finite formula family underlying $\Gamma$ under subformulas. Inside $V^*$ recursively choose reflection ordinals $\beta_0<\beta_1<\cdots$ for that family and strongly compact cardinals $$\beta_n<\kappa_n<\beta_{n+1}.$$ F2 gives the next reflection ordinal and $\mathsf{PCSC}$ gives the next $\kappa_n$; least ordinal witnesses make this an ordinary recursion on $\omega$. Put $\beta=\sup_n\beta_n$ (so $\beta<\lambda$ in the $V_\lambda$ case by regularity). If parameters lie in $V_\beta^{V^*}$, one $V_{\beta_n}^{V^*}$ contains them. Reflection there supplies, for every true existential subformula in the closed family, a witness already in $V_{\beta_n}^{V^*}\subseteq V_\beta^{V^*}$. The witness criterion therefore makes $V_\beta^{V^*}$ satisfy every sentence of $\Gamma$ other than $\mathsf{PCSC}$. For $\alpha<\beta$, choose $n$ with $\alpha<\beta_n$. Then $\alpha<\kappa_n<\beta$. If the reflected stage asks for one of the fine-ultrafilter witnesses expressing strong compactness of $\kappa_n$, F4 supplies it in $V^*$. Its rank is finitely above the ranks of its target data, and some later reflection stage $\beta_m$ contains it. Fineness, $\kappa_n$-completeness and extension of the relevant filter are absolute for these transitive stages. Thus $V_\beta^{V^*}$ regards the $\kappa_n$ as internally unbounded strongly compact cardinals. Because $\mathsf{NRLP}$ belongs to the reflected formula family and is true in $V^*$, it is true in $V_\beta^{V^*}$ as well. Hence $V_\beta^{V^*}\models\Gamma$, including both $\mathsf{PCSC}$ and $\mathsf{NRLP}$. [F2, F4, F6, step 1.1]

3.1 Start the construction above beyond $\omega$, so $V_\beta$ is infinite.  Apply F3 to this membership structure and collapse a countable elementary submodel.  The result is a countable transitive set $M$ satisfying the fixed source fragment $\Gamma$, AC, and the sentences $\mathsf{PCSC}$ and $\mathsf{NRLP}$.  Its internally strongly compact ordinals need not be strongly compact in the ambient universe; the retained proofs use only the filters, completeness statements and sequences which $M$ contains. [F3, F11, step 2.1]

4.1 Take the definable-class expansion of $M$.  For each of the finitely many class instances retained in step 1.1, its set part is the corresponding pure formula in $\Gamma$.  Apply the fixed finite part of Felgner's construction F5.  Because $M$ and its definable classes are externally countable, enumerate the dense classes of local choice conditions and recursively choose a descending complete sequence meeting them.  The resulting class predicate $W$ well-orders the whole set universe of $M$; the forcing truth argument verifies exactly the retained $W$-Separation and $W$-Replacement instances.  Felgner's membership isomorphism shows that this adds classes but no sets, so $(M,\in)$ still satisfies $\Gamma$, $\mathsf{PCSC}$ and $\mathsf{NRLP}$.  This is the amenable global well-order appearing among the retained premises of the F6 construction, rather than an arbitrary external well-order of $M$. [F5, F6, F11, F12, step 1.1, step 3.1]

5.1 In the prepared class structure, $W$ makes the choices occurring in the retained coordinate-filter and cofinal-sequence formulas. Execute the particular definitions and finite derivations selected in step 1.1 to obtain the required instance of $P_3^M$; this uses F6 as the source of those derivations, not as a theorem applied to a model of full ZFC. Externally, this internally proper class is a countable set of conditions because it is a subclass of the countable set $M$. Enumerate its ground-definable dense classes and recursively take stronger conditions to obtain an $M$-generic $G$. Evaluation is well-founded because $M$ is transitive. The hereditarily symmetric names form an ambient set, so their values form a nonempty set structure $N$. Now concatenate and relativize the finite derivations retained in step 1.1, as licensed by F12. The retained fixed-formula forcing/truth derivations underlying F7 apply to the particular formulas over $(M,W,G)$; the retained derivations underlying F8 verify the ZF axioms occurring in $\Delta$, and those underlying F9 verify the cofinality sentence. Consequently $N\models\Delta$. When the cardinal consequence is stated, the retained instance underlying F10 verifies internally that cofinality $\omega$ is strictly below every uncountable cardinal, so those cardinals are singular. No full-theory interface F6--F10 is applied to the finite-fragment model $M$. [F6, F7, F8, F9, F10, F11, F12, step 1.1, step 3.1, step 4.1]

6.1 Steps 2.1–3.1 are a $T$ proof of existence of the suitable CTM for the fixed finite source data; steps 4.1–5.1 are a $T$ proof converting it to a set model of the arbitrary fixed finite $\Delta$.  F1 therefore gives the external implication $$\operatorname{Con}(T)\Longrightarrow\operatorname{Con}(U).$$ The empty $\Delta$ needs only a nonempty set model and is covered by the same construction.  No converse is claimed.  In particular, this argument neither derives a transitive model of all of $T$ from $\operatorname{Con}(T)$ nor claims a PA-verified uniform map on proof codes; it supplies exactly the external finite assemblies required by F1. [F1, step 1.1, step 2.1, step 3.1, step 4.1, step 5.1] ∎
