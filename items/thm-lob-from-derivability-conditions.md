---
id: thm-lob-from-derivability-conditions
kind: theorem
title: "Löb theorem"
status: draft
origin: pipeline
deps: [thm-arithmetic-diagonal-lemma, thm-hilbert-bernays-lob-derivability-conditions]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "Moschovakis, Lecture Notes in Logic (2014) — 4C.9–4C.10 pp153–154; local direct D1–D3 proof, not the source's second-incompleteness route"
      url: "https://www.math.ucla.edu/~ynm/lectures/lnl.pdf"
    - title: "Avigad, Computability and Incompleteness (2007) — Theorem 4.8.1, pp115–116, complete formal derivation"
      url: "https://www.andrew.cmu.edu/user/avigad/Teaching/candi_notes.pdf"
---


## Statement

Let T have its own arithmetized syntax and a provability predicate $\operatorname{Prov}_T$ satisfying D1–D3. Assume the diagonal lemma holds internally in the T-language for the formula $\operatorname{Prov}_T(v)\to\phi$: there is a T-sentence $\theta$ such that

$$T\vdash\theta\leftrightarrow\bigl(\operatorname{Prov}_T(\ulcorner\theta\urcorner)\to\phi\bigr).$$

This hypothesis holds when T is in an effective signature extending Q by the diagonal lemma below. If $T\vdash\operatorname{Prov}_T(\ulcorner\phi\urcorner)\to\phi$, then $T\vdash\phi$. Consistency is not a hypothesis. An interpretation of arithmetic suffices only after it supplies this exact unguarded T-language fixed point and identifies the displayed predicate with T's chosen provability predicate.

## Facts & Assumptions

[F1] [[thm-arithmetic-diagonal-lemma]]: For every formula $\psi(v)$ with no other free variables in an effective signature extending arithmetic, there is a sentence $\theta$ such that Q in that signature proves $\theta\leftrightarrow\psi(\ulcorner\theta\urcorner)$. The construction is effective and requires neither consistency nor soundness.

[F2] [[thm-hilbert-bernays-lob-derivability-conditions]]: For the standard certified predicate of an effective T extending PA, the following hold for sentences $\phi,\psi$: D1, if $T\vdash\phi$ then $T\vdash\operatorname{Prov}_T(\ulcorner\phi\urcorner)$; D2, T proves $\operatorname{Prov}_T(\ulcorner\phi\to\psi\urcorner)\to(\operatorname{Prov}_T(\ulcorner\phi\urcorner)\to\operatorname{Prov}_T(\ulcorner\psi\urcorner))$; D3, T proves $\operatorname{Prov}_T(\ulcorner\phi\urcorner)\to\operatorname{Prov}_T(\ulcorner\operatorname{Prov}_T(\ulcorner\phi\urcorner)\urcorner)$. The interpreted version requires an effective PA copy and verification there of the arithmetic proof constructors and axiom-proof translations used below.

## Proof

**Given:** The stated internal fixed point, D1–D3, and a T proof of $\Box\phi\to\phi$.

1.1 Write $\Box A$ for $\operatorname{Prov}_T(\ulcorner A\urcorner)$. The hypothesis gives $\theta\leftrightarrow(\Box\theta\to\phi)$; when T extends Q in an effective signature, F1 supplies precisely this fixed point. D1 and D2 of F2 applied to its forward implication give $\Box\theta\to\Box(\Box\theta\to\phi)$. [F1, F2, given]

2.1 D3 gives $\Box\theta\to\Box\Box\theta$. D2 applied to $\Box\theta\to\phi$ gives $\Box(\Box\theta\to\phi)\to(\Box\Box\theta\to\Box\phi)$. Combining these with step 1.1 yields $\Box\theta\to\Box\phi$. The assumed reflection instance $\Box\phi\to\phi$ therefore yields $\Box\theta\to\phi$. [F2, step 1.1, given]

3.1 The reverse fixed-point implication now gives theta as a T theorem. D1 gives $\Box\theta$, and MP with step 2.1 gives phi. This proves the claim without appealing to second incompleteness. [F2, step 1.1, step 2.1] ∎
