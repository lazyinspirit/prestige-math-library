---
id: lem-wall-crossing-functors-act-on-standard-modules-by-the-two-step-extension
kind: lemma
title: Wall-crossing acts on standard modules by a two-step extension
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 3
deps: [def-wall-crossing-functor-and-unit-counit,
       thm-translation-to-and-from-a-wall-on-standard-modules,
       def-verma-flag-and-its-multiplicities,
       lem-verma-flag-multiplicities-are-independent-of-the-flag,
       lem-direct-summands-of-verma-filtered-objects-are-verma-filtered,
       def-grothendieck-group-and-character-of-category-o,
       lem-tensoring-with-a-finite-dimensional-module-preserves-verma-flags,
       def-axiom-of-choice, lem-dominant-norm-distance-comparison,
       lem-weight-norm-bound-for-finite-dimensional-simple-modules]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Wolfgang Soergel, Kategorie O, perverse Garben und Moduln ueber den Koinvarianten zur Weylgruppe, J. Amer. Math. Soc. 3 (1990) 421-445 (MPIM preprint 1989/46 full text)"
      url: "https://archive.mpim-bonn.mpg.de/3653/1/preprint_1989_46.pdf"
      locator: "Section 2.1, 'Verschiebungsfunktoren' and the Grothendieck-group computation; Section 2.6, Lemma 9(ii): the class map with sP = theta_s P - P (preprint pp. 8-9 and 18-19)"
    - title: "Arthur Garnier, The classical theory of Soergel bimodules and the link with Lusztig's conjecture, Oberwolfach Arbeitsgemeinschaft note (2022)"
      url: "https://www.lamfa.u-picardie.fr/agarnier/talks/soergel_notes.pdf"
      locator: "Proposition 4.7 and the following sentence: [Theta_s Delta_w] = [Delta_w] + [Delta_ws] in K_0(O_0), and the map K_0(O_0) -> Z[W], [Delta_w] -> w, is an isomorphism intertwining Theta_s with right multiplication by 1+s (printed p. 8)"
---

## Statement

Assume the Axiom of Choice, inherited from the published items. Let
$\theta_s$ be the wall-crossing functor of
[[def-wall-crossing-functor-and-unit-counit]] attached to the simple reflection
$s$ in the regular integral block $\mathcal O_\lambda$. For every $w\in W$ the
object $\theta_s\Delta(w\cdot\lambda)$ has a finite Verma flag with exactly two
factors, namely $\Delta(w\cdot\lambda)$ and $\Delta(ws\cdot\lambda)$, each with
multiplicity one; in the Grothendieck group
$$[\theta_s\Delta(w\cdot\lambda)]=[\Delta(w\cdot\lambda)]+[\Delta(ws\cdot\lambda)].$$
Moreover $\theta_s$ is exact and preserves Verma-filtered objects with finite
Verma flags: if $X$ has a finite Verma flag with multiplicities
$(X:\Delta(v\cdot\lambda))$, then $\theta_sX$ has one with multiplicities
$(\theta_sX:\Delta(u\cdot\lambda))=(X:\Delta(u\cdot\lambda))+(X:\Delta(us\cdot\lambda))$,
and the same formula holds in $K_0(\mathcal O_\lambda)$. The resulting flag is
not in general split; splitting is neither asserted nor used.

## Facts & Assumptions

**Given:** The regular integral block $\mathcal O_\lambda$, a simple reflection $s$, the wall-crossing functor $\theta_s=T_{\mathrm{out}}T_{\mathrm{on}}$, and the published single-wall translation datum for the wall of $s$.

[F1] The onto-wall translation satisfies $T_{\mathrm{on}}\Delta(w\cdot\lambda)\cong\Delta(w\cdot\mu)$ for every $w$, and the out-of-wall translation satisfies $T_{\mathrm{out}}\Delta(w\cdot\mu)\cong$ a finite Verma flag with exactly the two factors $\Delta(w\cdot\lambda)$ and $\Delta(ws\cdot\lambda)$, each of multiplicity one, with class $[\Delta(w\cdot\lambda)]+[\Delta(ws\cdot\lambda)]$ ([[def-wall-crossing-functor-and-unit-counit]], [[thm-translation-to-and-from-a-wall-on-standard-modules]]).

[F2] $\theta_s$ is exact; a finite Verma flag of $X$ pushes forward under an exact functor to a finite flag of $\theta_sX$; Verma-flag multiplicities are independent of the flag; the class in $K_0(\mathcal O_\lambda)$ of a Verma-filtered object is the sum of its factor classes ([[def-wall-crossing-functor-and-unit-counit]], [[def-verma-flag-and-its-multiplicities]], [[lem-verma-flag-multiplicities-are-independent-of-the-flag]], [[def-grothendieck-group-and-character-of-category-o]]).

[F3] Direct summands of Verma-filtered objects are Verma-filtered, and tensoring by a finite-dimensional module preserves Verma flags ([[lem-direct-summands-of-verma-filtered-objects-are-verma-filtered]], [[lem-tensoring-with-a-finite-dimensional-module-preserves-verma-flags]]).

## Proof

**Proof technique:** direct.

1.1 $\theta_s\Delta(w\cdot\lambda)\cong T_{\mathrm{out}}\Delta(w\cdot\mu)$ by the first clause of [F1], hence it has the two-factor finite Verma flag of the second clause of [F1] with factors $\Delta(w\cdot\lambda)$ and $\Delta(ws\cdot\lambda)$, each once; its class in $K_0(\mathcal O_\lambda)$ is $[\Delta(w\cdot\lambda)]+[\Delta(ws\cdot\lambda)]$ by [F2]. [F1, F2]

2.1 Let $X$ be Verma-filtered with finite flag $0=X_0\subseteq X_1\subseteq\cdots\subseteq X_n=X$ and factors $\Delta(v_i\cdot\lambda)$. Exactness of $\theta_s$ by [F2] makes $0=\theta_sX_0\subseteq\cdots\subseteq\theta_sX_n=\theta_sX$ an increasing chain of subobjects, and each quotient $\theta_sX_i/\theta_sX_{i-1}\cong\theta_s(X_i/X_{i-1})\cong\theta_s\Delta(v_i\cdot\lambda)$ carries the two-factor flag of step 1.1; concatenating these two-step flags through the chain yields a finite Verma flag of $\theta_sX$ with factor multiplicities $(X:\Delta(u\cdot\lambda))+(X:\Delta(us\cdot\lambda))$, where the independence of the flag [F2] makes the count well defined. [F2, step 1.1]

3.1 Summing the classes along the flag of step 2.1 gives $[\theta_sX]=\sum_i([\Delta(v_i\cdot\lambda)]+[\Delta(v_is\cdot\lambda)])=[X]+\sum_i[\Delta(v_is\cdot\lambda)]$, which is the stated formula $(\theta_sX:\Delta(u\cdot\lambda))=(X:\Delta(u\cdot\lambda))+(X:\Delta(us\cdot\lambda))$; no splitting of the two-step extensions is used, and the claim extends to direct summands of $\theta_sX$ whenever they are Verma-filtered, by [F3]. [F2, F3, step 2.1, algebra] ∎
