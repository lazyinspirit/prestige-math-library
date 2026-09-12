---
id: "cex-forcing-is-not-upward-monotone-to-weaker-conditions"
kind: "counterexample"
title: "Forcing is not monotone toward weaker conditions"
deps: ["def-forcing-relation-for-atomic-formulas", "lem-forcing-monotonicity-density-and-decision", "def-check-names-and-the-canonical-generic-name", "ex-atomic-forcing-of-check-names"]
justified_by: []
forward_refs: []
provenance:
  statement: "ai-altered"
  proof: "ai-generated"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: "Neeman, Forcing (2011), section 1, Theorem 1.16 and its complete atomic/formula proof, Lemmas 1.17 and 1.25–1.28, pp.4–9; section 2.1, Lemma 2.2 through Theorem 2.6, pp.10–11"
      url: "https://www.math.ucla.edu/~ineeman/223s.1.11s/223s-spring11-lecture-notes-6-5.pdf"
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Statement refuted

If $p\Vdash\varphi$ and p is stronger than r, then $r\Vdash\varphi$.

## Facts & Assumptions

**Given:** Work in ZF with three distinct conditions $P=\{1,p,q\}$, ordered reflexively with $p\le1$ and $q\le1$, and no other comparisons. The two atoms p and q are incompatible.

[F1] [[def-forcing-relation-for-atomic-formulas]] defines forced membership by a dense set of coefficient/equality witnesses.

[F2] [[lem-forcing-monotonicity-density-and-decision]] proves the correctly oriented persistence to stronger conditions.

[F3] [[def-check-names-and-the-canonical-generic-name]] gives $\dot G=\{\langle\check1,1\rangle,\langle\check p,p\rangle,\langle\check q,q\rangle\}$.

[F4] [[ex-atomic-forcing-of-check-names]] computes equality of check names: it is forced exactly for equal ground sets.

## Counterexample

1.1 For the formula $\check p\in\dot G$, a membership witness r in F1 must lie below one of the three displayed coefficients and force check p equal to that coefficient's check name. By F4, the entries with coefficients 1 and q cannot qualify. The entry with coefficient p qualifies exactly when $r\le p$. Since p is an atom, the full witness set is therefore precisely $\{p\}$. [F1, F3, F4]

2.1 This witness set is dense below p: the only condition below p is p itself. It is not dense below 1: q is below 1 and its only refinement is q, which is not p. Thus $p\Vdash\check p\in\dot G$ and $1\not\Vdash\check p\in\dot G$, despite $p\le1$. The proposed persistence to weaker conditions is false. [F1, step 1.1]

3.1 F2 gives exactly the valid direction: if a condition forces a formula, every stronger condition does. The calculation uses neither the existence of a generic nor AC, and it distinguishes failure to force at 1 from forcing the negation at 1. In fact 1 cannot force that negation, since its extension p forces the formula. [F2, step 2.1] ∎
