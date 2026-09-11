---
id: "def-ordinal-definability-and-hod"
kind: "definition"
title: "Ordinal definability and HOD"
deps: ["lem-finite-tuple-satisfaction-is-absolute", "def-cumulative-hierarchy-stages", "prop-transitive-closure-minimality", "thm-montague-levy-finite-reflection"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Karagila, Axiomatic Set Theory §8.4 Definition 8.33–8.35 and Theorem
        8.34, printed p42
      url: https://karagila.org/files/set-theory-2017.pdf
provenance:
  statement: ai-altered
  proof: not-applicable
status: "draft"
origin: "pipeline"
---

## Definition

In ZF a set $x$ is **ordinal definable**, written $x\in\mathrm{OD}$, if there are an ordinal $\theta>0$, finitely many ordinals $a_i<\theta$, and a membership formula code e such that $x\in V_\theta$ is the unique element satisfying that formula over $(V_\theta,\in)$ with those parameters. Here $V_\theta$ is precisely the cumulative hierarchy of [[def-cumulative-hierarchy-stages]], not an arbitrary transitive set closed under some operations. Set satisfaction, with finite tuples as in [[lem-finite-tuple-satisfaction-is-absolute]], makes OD a single first-order definable class.

Define

$$\mathrm{HOD}=\{x:\operatorname{TC}(\{x\})\subseteq\mathrm{OD}\}.$$

The TC convention is the least transitive superset, so it includes x itself when applied to its singleton, by [[prop-transitive-closure-minimality]]. Thus HOD requires x and every descendant to be OD.

This coded definition agrees, formula by formula, with unique definability in V from finitely many ordinals. If a fixed formula uniquely defines x in V from ordinal parameters, reflect that formula, its uniqueness assertion and their subformulas to a $V_\theta$ containing x and the parameters, using [[thm-montague-levy-finite-reflection]]. It defines exactly x there. Conversely the particular code e, theta and ordinal tuple witnessing the displayed definition give an ambient unique definition: use the uniformly definable set $V_\theta$ and its set satisfaction. The code e is a natural number, hence itself an ordinal parameter. This converse asserts definability for each witness; it does not introduce a truth predicate for V or quantify over arbitrary formulas evaluated in V.
