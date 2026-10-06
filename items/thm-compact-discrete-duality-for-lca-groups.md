---
id: thm-compact-discrete-duality-for-lca-groups
kind: theorem
title: Compactness and discreteness are exchanged by duality
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 18
deps: [thm-choice-implies-dependent-implies-countable-choice, def-axiom-of-choice, def-compact-space, def-homeomorphism-and-open-maps, def-pontryagin-dual-and-compact-open-topology, def-standard-topologies, thm-compact-groups-have-discrete-duals-and-discrete-groups-have-compact-duals, thm-dual-of-an-lca-group-is-locally-compact-abelian, thm-pontryagin-biduality]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: Lynn H. Loomis, Introduction to Abstract Harmonic Analysis, D. Van Nostrand, 1953 (Harvard-hosted full scan)
    url: https://people.math.harvard.edu/~shlomo/212a/loomis.pdf
    locator: 'Section 38A, printed pp. 153-154: compactness and discreteness are exchanged, with the converses using biduality.'
  - title: Manfred Einsiedler and Thomas Ward, Ergodic Theory with a View Towards Number Theory, Appendix C (course-hosted full text)
    url: https://maths.qmul.ac.uk/~fvivaldi/teaching/ETAD/NotesI.pdf
    locator: 'Appendix C.3, Lemma C.7, printed pp. 434-435, and Theorem C.12, printed p. 437: the forward compact/discrete implications and biduality.'
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---
## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $G$ be a locally compact Hausdorff abelian group. Then:

(1) $G$ is compact if and only if $\widehat G$ is discrete;

(2) $G$ is discrete if and only if $\widehat G$ is compact.

The Axiom of Choice supplies the Tychonoff-based compactness implication and the choice hypotheses of biduality used in the converses.

## Facts & Assumptions

**Given:** A locally compact Hausdorff abelian group $G$ and the Axiom of Choice.

[F1] If $G$ is compact then $\widehat G$ is discrete, and if $G$ is discrete then, assuming the Axiom of Choice, $\widehat G$ is compact. Both directions are for abelian topological groups. ([[thm-compact-groups-have-discrete-duals-and-discrete-groups-have-compact-duals]])

[F2] The dual of a locally compact Hausdorff abelian group is again a locally compact Hausdorff abelian group. ([[thm-dual-of-an-lca-group-is-locally-compact-abelian]], [[def-pontryagin-dual-and-compact-open-topology]])

[F3] The evaluation map $\Phi_G:G\to\widehat{\widehat G}$ is an isomorphism of topological groups; a homeomorphism carries compact subsets to compact subsets and discrete spaces to discrete spaces, and $(\widehat G)\widehat{\ }=\widehat{\widehat G}$. ([[thm-pontryagin-biduality]], [[def-homeomorphism-and-open-maps]], [[def-compact-space]], [[def-standard-topologies]])

[F4] The assumed Axiom of Choice implies Dependent Choice, so the current biduality theorem applies with its full hypotheses. ([[thm-choice-implies-dependent-implies-countable-choice]])

## Proof

1.1 The forward implications are exactly the two clauses of [F1]: compact $G$ gives discrete $\widehat G$, and discrete $G$ gives compact $\widehat G$. [F1]

2.1 For the converses, apply [F1] to the locally compact Hausdorff abelian group $\widehat G$ of [F2], whose dual is the bidual $\widehat{\widehat G}$: if $\widehat G$ is compact then $\widehat{\widehat G}$ is discrete, and $\Phi_G$ identifies $G$ with $\widehat{\widehat G}$ by [F3], so $G$ is discrete; if $\widehat G$ is discrete then $\widehat{\widehat G}$ is compact, so $G$ is compact. Together with step 1.1 this proves both equivalences. [F1, F2, F3, F4, step 1.1] ∎