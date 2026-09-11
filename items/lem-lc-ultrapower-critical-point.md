---
id: "lem-lc-ultrapower-critical-point"
kind: "lemma"
title: "The critical point of a measurable ultrapower"
deps: ["thm-lc-countable-completeness-and-well-founded-ultrapowers", "lem-lc-complete-measures-small-fibres-and-inaccessibility", "def-axiom-of-choice", "lem-lc-inaccessible-size-and-rank-bounds"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Marks Lemma 23.8 p.94; Monk Chapter 17 critical-point discussion
      url: https://math.berkeley.edu/~marks/notes/set_theory_notes_4.pdf
provenance:
  statement: ai-altered
  proof: ai-generated
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

In ZFC let U be a nonprincipal kappa-complete ultrafilter on an uncountable cardinal kappa, and let j be its collapsed universe ultrapower embedding. Then $j(\alpha)=\alpha$ for every $\alpha<\kappa$, and

$$\kappa\leq\pi([\mathrm{id}_\kappa]_U)<j(\kappa).$$

In particular the critical point, the least ordinal moved by j, is kappa. The embedding fixes $V_\kappa$ pointwise. Scott names in ordinal comparisons are understood through the collapse pi.

## Facts & Assumptions

**Given:** ZFC. Proved the exact predecessor set of every small constant class, derived ordinal fixing and the identity bound, then used rank induction and inaccessible sizes to fix V_kappa.

[F1] [[thm-lc-countable-completeness-and-well-founded-ultrapowers]]: Countable completeness supplies the transitive collapse and elementary map.

[F2] [[lem-lc-complete-measures-small-fibres-and-inaccessibility]]: Small subsets are null and maps into ordinals below kappa have a U-large constant fibre; kappa is inaccessible.

[F3] [[def-axiom-of-choice]]: AC supplies small enumerations and is retained from the ultrapower and cardinal bounds.

[F4] [[lem-lc-inaccessible-size-and-rank-bounds]]: Each member of V_kappa has cardinality below kappa.

## Proof

1.1 U is countably complete since kappa is uncountable, so F1 applies. For any nonempty set x with size eta<kappa, choose a bijection b from eta to x using F3. A predecessor [f] E [c_x] has f(i) in x on a U-large set. Replace f outside that set by b(0), without changing its class. Composing with the inverse of b gives a function to eta, hence has a constant U-large fibre by F2. Therefore [f]=[c_y] for some y in x. Conversely every y in x gives such a predecessor. For empty x there are no predecessors by properness. The collapse equation now gives $j(x)=\{j(y):y\in x\}$ whenever |x|<kappa. [F1, F2, F3]

2.1 Every ordinal alpha<kappa has size below kappa. By induction, step 1.1 gives $j(\alpha)=\{j(\beta):\beta<\alpha\}=\alpha$, including alpha=0. The identity function always takes values in kappa, so its collapsed class d belongs to j(kappa), hence is an ordinal. For every alpha<kappa the tail $\{\xi:\alpha<\xi<\kappa\}$ is U-large, since its complement has size below kappa by F2. Thus alpha=j(alpha) belongs to d. Consequently $\kappa\leq d<j(\kappa)$; kappa is moved and all earlier ordinals are fixed. [F1, F2, step 1.1]

3.1 By F2 kappa is inaccessible and by F4 every x in V_kappa has size below kappa. Apply rank induction to such x. Every y in x has smaller rank and remains in V_kappa, so the induction hypothesis fixes y. Step 1.1 then gives $j(x)=\{j(y):y\in x\}=x$. The induction starts with empty and includes all limit ranks without a separate choice of representatives. [F2, F4, step 1.1, step 2.1] ∎
