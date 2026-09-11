---
id: "thm-lc-weak-compactness-infinitary-logic"
kind: "theorem"
title: "Weak compactness and small infinitary theories"
deps: ["def-lc-weakly-compact-cardinal", "lem-lc-henkin-truth-tree", "def-axiom-of-choice"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Monk Theorem 17.24 pp.358–361
      url: https://euclid.colorado.edu/~monkd/jech.pdf
provenance:
  statement: ai-altered
  proof: ai-generated
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

In ZFC, at an inaccessible kappa, weak compactness is equivalent to compactness for less-than-kappa satisfiable $L_{\kappa,\kappa}$ theories in languages and theories of size at most kappa, and is also equivalent to the corresponding $L_{\kappa,\omega}$ compactness property.

## Facts & Assumptions

**Given:** ZFC. Applied the authored Henkin model construction in the forward direction and supplied a propositional tree encoding, small-subtheory models and the full branch extraction in the reverse direction.

[F1] [[def-lc-weakly-compact-cardinal]]: At the stipulated inaccessible, weak compactness is the tree property.

[F2] [[lem-lc-henkin-truth-tree]]: The constructed truth tree yields a model from any cofinal branch.

[F3] [[def-axiom-of-choice]]: AC chooses one injection of each tree level into kappa from the nonempty family of such injections.

## Proof

1.1 If kappa is weakly compact, apply F2 to any theory in the assertion. F1 gives a cofinal branch in its truth tree, and F2 produces a model. Thus the L_(kappa,kappa) property holds. Every L_(kappa,omega) theory is a special case with finite blocks, so the latter compactness property follows. [F1, F2]

2.1 Conversely assume the L_(kappa,omega) property and fix a kappa-tree S. It has kappa nodes: its kappa nonempty levels give the lower bound, and choosing injections of levels into kappa gives the upper bound by the cardinal-square estimate used in F2. Introduce a unary relation P_t for each node t and one constant d; write p_t for the sentence P_t(d). Take a theory consisting of the disjunction $\bigvee_{t\in S_\alpha}p_t$ for each alpha<kappa and the sentences $\neg(p_s\wedge p_t)$ for each incomparable pair s,t. Every level disjunction has fewer than kappa terms, so this is already an L_(kappa,omega) theory (indeed it uses no quantifiers). Its language and theory have size at most kappa, using the same square bound. [F1, F2, F3, step 1.1]

3.1 Any subtheory of size below kappa has level-disjunction requirements at a bounded collection of levels, by regularity. Choose a node u above those levels. In a one-element structure interpret p_t as true exactly for t<=u. This meets every required level and violates no incomparable-pair prohibition, including prohibitions mentioning nodes at arbitrarily high levels. Hence every small subtheory is satisfiable. Compactness gives a full model. Its true p_t include a node at each level and never include incomparable nodes; they therefore form a cofinal branch of S. As S was arbitrary, F1 gives weak compactness. Together with step 1.1 this proves both equivalences. [F1, step 2.1] ∎
