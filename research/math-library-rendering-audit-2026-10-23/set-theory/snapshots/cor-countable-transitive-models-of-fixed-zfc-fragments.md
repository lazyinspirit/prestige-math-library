---
id: cor-countable-transitive-models-of-fixed-zfc-fragments
kind: corollary
title: "Countable transitive models of fixed finite fragments"
status: published
origin: pipeline
deps: [cor-transitive-models-of-each-finite-zf-fragment, thm-countable-elementary-submodels-and-transitive-collapses, def-axiom-of-choice]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
proof_strategy: direct
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "Geschke, Models of Set Theory — Corollary 4.6 pp11–12"
      url: "https://www.math.uni-hamburg.de/home/geschke/teaching/ModelsSetTheory.pdf"
---


## Statement

For every fixed external finite $\Gamma\subseteq\mathrm{ZFC}$, ZFC proves that $\Gamma$ has a countable transitive model. Under ambient AC the same construction applies to fixed finite $\Gamma\subseteq\mathrm{ZF}$. It does not assert a model of the whole theory or a uniform internal model-existence statement for all coded fragments.

## Facts & Assumptions

[F1] [[cor-transitive-models-of-each-finite-zf-fragment]]: For each fixed external finite $\Gamma\subseteq\mathrm{ZF}$, ZF proves that some transitive $V_\beta$ satisfies $\Gamma$, with $\beta$ above any prescribed ordinal bound. In ZFC the analogous scheme holds for fixed finite $\Gamma\subseteq\mathrm{ZFC}$. These are schemes indexed by external fragments, not a single internal assertion of models for all coded fragments.

[F2] [[thm-countable-elementary-submodels-and-transitive-collapses]]: In ZFC, if an infinite set membership structure $M$ satisfies Extensionality, then for every at most countable $A\subseteq M$ there is a countably infinite $X\prec M$ containing $A$, and $X$ has a countable transitive collapse. To retain a set $a\in M$ as one parameter, use $A=\{a\}$.

[F3] [[def-axiom-of-choice]]: Every family of nonempty sets has a choice function

## Proof

**Given:** A fixed external finite fragment and ambient ZFC.

1.1 Enlarge the fixed finite fragment by Extensionality, and use F1 to reflect it to $V_\beta$ for $\beta>\omega$. This is an infinite transitive membership structure satisfying Extensionality and every original axiom of $\Gamma$. In the ZFC branch, ambient AC (F3) supplies a reflected Choice axiom if present. [F1, F3, given]

2.1 Apply F2 with empty parameter set to obtain a countable elementary submodel of this stage and its transitive collapse $C$. Elementarity preserves each sentence of $\Gamma$, and the collapse isomorphism preserves the same sentences. Thus $(C,\in)\models\Gamma$. AC is used in F2 even when $\Gamma\subseteq\mathrm{ZF}$; the earlier reflection of ZF axioms alone does not use it. [F2, step 1.1] ∎
