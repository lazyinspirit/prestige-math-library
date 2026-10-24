---
id: "ex-trivial-forcing-recovers-the-ground-model"
kind: "example"
title: "Trivial forcing recovers the ground model"
deps: ["thm-forcing-theorem", "thm-check-name-evaluation-and-generic-reconstruction", "thm-generic-extensions-satisfy-zf-and-zfc", "def-forcing-name-valuation-and-generic-extension"]
justified_by: []
forward_refs: []
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: "Neeman, Forcing (2011), section 1, Theorem 1.16 and its complete atomic/formula proof, Lemmas 1.17 and 1.25–1.28, pp.4–9; section 2.1, Lemma 2.2 through Theorem 2.6, pp.10–11"
      url: "https://www.math.ucla.edu/~ineeman/223s.1.11s/223s-spring11-lecture-notes-6-5.pdf"
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Example

In ZF let M be a transitive ZF model and $P=\{1\}\in M$ with its reflexive order. The unique M-generic filter is $G=\{1\}$, $M[G]=M$, and for every fixed formula with ground names,

$$1\Vdash^M\varphi(\vec\tau)\quad\Longleftrightarrow\quad M\models\varphi(\vec\tau_G).$$

In particular $1\Vdash^M\varphi(\check{\vec a})$ iff $M\models\varphi(\vec a)$ for ground parameters.

## Facts & Assumptions

**Given:** The one-element forcing preorder in the transitive ZF model M.

[F1] [[thm-forcing-theorem]] gives the truth lemma for the fixed formula.

[F2] [[thm-check-name-evaluation-and-generic-reconstruction]] gives values of check names and the inclusion of M in its extension.

[F3] [[thm-generic-extensions-satisfy-zf-and-zfc]] establishes the generic-extension ZF framework; no AC branch is used.

[F4] [[def-forcing-name-valuation-and-generic-extension]] gives unique valuation by setlike recursion and defines M[G].

## Verification

1.1 A nonempty filter in the singleton preorder must be $\{1\}$. Every dense subset contains 1, since 1's only extension is itself. Hence G meets every ground dense subset and is the unique M-generic. Here G=P belongs to M. [F3, given]

2.1 For any ground name tau, its valuation recursion using G can be carried out inside M since G is a set in M and M satisfies ZF. It agrees with the external recursion: every subname and its sole possible coefficient are in M, and induction on name rank identifies the predecessor values and their set image at each step. Thus $\tau_G\in M$. This gives $M[G]\subseteq M$, while F2 gives $M\subseteq M[G]$. Consequently $M[G]=M$. [F2, F4, step 1.1]

3.1 F1 says that truth at the valuations is equivalent to a member of G forcing the formula. Its only member is 1, and the extension is exactly M by step 2.1. These substitutions prove the first display; F2 then replaces check-name values by the original parameters. For example empty and singleton names have values $\varnothing$ and $\{\varnothing\}$, so 1 forces $\check\varnothing\in\check{\{\varnothing\}}$ and does not force their equality. No Choice is used. [F1, F2, step 1.1, step 2.1] ∎
