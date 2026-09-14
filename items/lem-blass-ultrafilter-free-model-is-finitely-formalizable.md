---
id: lem-blass-ultrafilter-free-model-is-finitely-formalizable
kind: lemma
title: The Blass ultrafilter-free construction is finitely formalizable
status: draft
origin: pipeline
deps: [thm-blass-model-has-only-principal-ultrafilters, lem-forcing-transfer-for-finite-zfc-fragments, lem-finite-fragment-l-interpretation-with-gch, def-axiom-of-choice, lem-derivation-finite-support-and-concatenation]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - {title: "A. Blass, A model without ultrafilters, Bull. Acad. Polon. Sci. 25 (1977), 329–331; primary article not recovered", url: "https://zbmath.org/?q=an:0365.02054"}
    - {title: "Yair Hayut and Asaf Karagila, Spectra of uniformity, Proposition 2.3 and Corollary 2.4, printed pp. 288–289", url: "https://cmuc.karlin.mff.cuni.cz/pdf/cmuc1902/haykara.pdf"}
---

## Statement

For every externally fixed finite fragment $\Delta$ of ZF together with the
assertion that every ultrafilter on every set is principal, a suitable finite
ZFC source proves that Blass's parameter-HOD construction yields a set model
of $\Delta$.

## Facts & Assumptions

**Given:** One externally fixed finite list $\Delta$ containing finitely many ZF axiom instances and the displayed all-ultrafilters sentence. The quantification over $\Delta$ is metatheoretic; no uniform truth predicate or single countable transitive model of full ZF is assumed.

[F1] [[thm-blass-model-has-only-principal-ultrafilters]] proves, by the displayed parameter-HOD, tail-automorphism, least-ordinal, small-forcing, Scott, and $W$-rank argument, that every ultrafilter on every set of the constructed model is principal.  In this lemma that displayed proof is the proof text whose formula instances are traced; none of its ingredients is being attributed to the theorem's statement as an additional conclusion.

[F2] [[lem-forcing-transfer-for-finite-zfc-fragments]] extracts the finite source instances used by one fixed forcing verification and constructs a generic extension of a countable transitive model of those instances.

[F3] [[lem-finite-fragment-l-interpretation-with-gch]] translates any fixed finite ZFC+GCH source fragment into a finite ZF fragment interpreted in its constructible universe.

[F4] [[def-axiom-of-choice]] records the ambient Choice used for the countable elementary-submodel construction and for the source-side cardinal and ultrapower arguments.

[F5] [[lem-derivation-finite-support-and-concatenation]] proves that every formal derivation uses only finitely many assumptions.

## Proof

**Proof technique:** direct finite proof tracing through a constructible reflected source.

1.1 Expand the proofs of the finitely many ZF instances in $\Delta$ and the displayed all-ultrafilters proof recorded at F1. Retain every actually used fixed formula: the Cohen forcing and truth recursions; finite-parameter definition and hereditary-closure formulas; tail automorphisms; ultrafilter and least-partition calculations; the finite-coordinate forcing relation; every fixed instance in the small-forcing restriction and normal ultrapower; the Scott $V=L$ calculation; bounded definition-code satisfaction; and the two $W$-rank inductions. By F5 a formal proof has finite assumption support, so this expansion uses only finitely many Separation, Replacement, Reflection, recursion, satisfaction, and forcing-absoluteness instances. Let $\Sigma$ be their finite source union, including the finite assertion that the source is constructible. [F1, F5, given]

2.1 Enlarge $\Sigma$ by the finitely many ZFC+GCH instances needed to define $\operatorname{Fn}(\omega\times\omega,2)$, form its generic extension, and prove the following conditional contradiction used at F1: **if** the assumed free ultrafilter first produces a nonprincipal $\kappa$-complete ultrafilter in a finite-coordinate extension, then the small-forcing restriction produces one in the ground; its normal ultrapower gives Scott's contradiction to $V=L$.  The source fragment contains the finite ultrapower and Łoś derivations under that displayed hypothesis.  It contains no measurable-cardinal axiom and does not assert that a normal measure exists outright. Apply F3 to obtain a finite $\Gamma\subseteq\mathrm{ZF}$ proving the $L$-relativizations of all those source instances; include the finite proof that the interpretation domain satisfies $V=L$. This does not assert that one finite fragment proves every ZFC theorem: $\Gamma$ depends externally on the fixed proof expansion in step 1.1. [F1, F3, step 1.1]

3.1 Use the source-model and generic construction of F2 with enough of ambient ZFC to obtain a countable transitive $C\models\Gamma$. The external set $M=L^C$ is countable and transitive, and step 2.1 makes it satisfy every retained source instance as well as $V=L$. Enumerate its dense subsets of the Cohen forcing and construct an $M$-generic $G$. The parameter-HOD class defined in $M[G]$ is an external subset of the set $M[G]$, hence is itself a set structure. Every verification retained in step 1.1 is valid over this $M$ and shows that the structure satisfies each member of $\Delta$, including the assertion that all its ultrafilters are principal. Thus it is a set model of $\Delta$. [F2, F3, step 1.1, step 2.1]

4.1 The construction is repeated separately for each externally supplied finite $\Delta$. If the selected ZF subfragment is empty, the all-ultrafilters sentence and the finite source proof it requires are still retained; duplicate instances do no harm. Ambient AC is used only in F2's reflected countable source and in the explicitly retained source-side cardinal and ultrapower steps, as recorded by F4. The resulting parameter-HOD structure verifies only the selected target formulas and the displayed sentence: no full-ZF set model, uniform satisfaction predicate, or internal quantification over fragments has been inferred. [F2, F4, step 3.1] ∎
