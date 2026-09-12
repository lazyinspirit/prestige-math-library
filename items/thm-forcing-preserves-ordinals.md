---
id: "thm-forcing-preserves-ordinals"
kind: "theorem"
title: "Forcing preserves ordinals"
deps: ["thm-generic-extensions-satisfy-zf-and-zfc", "thm-generic-extension-transitivity-and-rank-bound", "lem-names-for-pairs-functions-and-ordinals", "lem-forcing-names-and-name-ranks-are-absolute"]
justified_by: []
forward_refs: []
provenance:
  statement: "literature-derived"
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

## Statement

In ambient ZF, if M is a transitive ZF ground model and G is M-generic for a nonempty forcing preorder in M, then

$$\operatorname{Ord}\cap M[G]=\operatorname{Ord}\cap M.$$

This is preservation of ordinals as sets; no preservation of their cardinality or cofinality is asserted.

## Facts & Assumptions

**Given:** The stated ground model and generic extension.

[F1] [[thm-generic-extensions-satisfy-zf-and-zfc]] gives transitive ZF M[G] containing M; only its ZF branch is used.

[F2] [[thm-generic-extension-transitivity-and-rank-bound]] gives $\operatorname{rank}(\tau_G)\le\operatorname{rk}_P(\tau)$.

[F3] [[lem-names-for-pairs-functions-and-ordinals]] gives check names for ground ordinals with their original values.

[F4] [[lem-forcing-names-and-name-ranks-are-absolute]] identifies the name rank of a ground name as an ordinal belonging to M.

## Proof

1.1 If $\gamma\in\operatorname{Ord}\cap M$, F3 gives a ground name whose value is gamma, so $\gamma\in M[G]$. Its being an actual ordinal is unchanged. Thus $\operatorname{Ord}\cap M\subseteq\operatorname{Ord}\cap M[G]$. [F1, F3]

1.2 If $\gamma\in\operatorname{Ord}\cap M[G]$, write $\gamma=\tau_G$ for a name $\tau\in M$. By F4, $\beta=\operatorname{rk}_P(\tau)$ is an actual ordinal in M. Since an ordinal has membership rank equal to itself, F2 gives $\gamma\le\beta$. If $\gamma=\beta$ it is in M directly; if $\gamma<\beta$, transitivity of M puts $\gamma\in M$. This includes gamma zero. [F1, F2, F4]

2.1 The inclusions in steps 1.1 and 1.2 prove the equality. The upper-bound argument compares actual ordinal sets and uses no enumeration, cardinal arithmetic, cofinal map or AC; it therefore makes no claim that the extension has the same cardinals or cofinalities. [step 1.1, step 1.2] ∎
