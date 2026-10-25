---
id: thm-second-incompleteness-for-standard-provability
kind: theorem
title: "Second incompleteness for standard provability"
status: published
origin: pipeline
deps: [thm-lob-from-derivability-conditions, def-arithmetic-provability-and-consistency, thm-hilbert-bernays-lob-derivability-conditions]
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
    - title: "Moschovakis, Lecture Notes in Logic (2014) — 4C.8–4C.13 pp153–156; local derivation from the preceding direct Lob theorem"
      url: "https://www.math.ucla.edu/~ynm/lectures/lnl.pdf"
    - title: "Avigad, Computability and Incompleteness (2007) — Theorems 4.7.1–4.7.2 pp114–115 and Theorem 4.8.1 p116"
      url: "https://www.andrew.cmu.edu/user/avigad/Teaching/candi_notes.pdf"
---


## Statement

If T is consistent and has the arithmetic/interpretation and D1–D3 hypotheses above for the displayed standard predicate, T does not prove its displayed $\operatorname{Con}(T)$. Numeralwise correctness of an arbitrary predicate is insufficient.

## Facts & Assumptions

[F1] [[def-arithmetic-provability-and-consistency]]: For a fixed effective theory T, let $\operatorname{Prf}_T(p,a)$ be the chosen numeralwise arithmetic representation of certified proof checking, with proof code first. Use lem-primitive-recursive-syntax-and-proof-checking and the strengthened representation constructed in thm-primitive-recursive-numeralwise-representability. Retain also the finite PA proof of equivalence to its syntactic $\Sigma_1$ computation form. Thus “Sigma1” for this chosen predicate may mean PA-Sigma1; it does not assert Q equivalence.

Put $\operatorname{Prov}_T(a):=\exists p\operatorname{Prf}_T(p,a)$ and $\operatorname{Con}(T):=\neg\operatorname{Prov}_T(\ulcorner\bot\urcorner)$, where $\bot=\exists v_0\neg(v_0=v_0)$ is in the appropriate signature and corner brackets denote the numeral of a code. External consistency means that there is no actual finite T-refutation; the displayed Con is an arithmetic formula.

For theories extending Q, $0=1$ may replace the fixed contradiction: Q proves $0\ne S0$, so from $0=S0$ explosion gives $\bot$; conversely reflexivity refutes $\bot$ and explosion gives $0=S0$. Appending these fixed finite proof blocks gives primitive-recursive transformations between refutation certificates, verified in PA. We use the fixed $\bot$ throughout. Correctness only on standard numerals is insufficient to replace this predicate in a derivability or second-incompleteness theorem.

[F2] [[thm-lob-from-derivability-conditions]]: Let T extend Q, or have the effective interpreted Q copy needed for diagonalization, and let its chosen provability predicate satisfy D1–D3. If $T\vdash\operatorname{Prov}_T(\ulcorner\phi\urcorner)\to\phi$, then $T\vdash\phi$. Consistency is not a hypothesis.

[F3] [[thm-hilbert-bernays-lob-derivability-conditions]]: For the standard certified predicate of an effective T extending PA, the following hold for sentences $\phi,\psi$: D1, if $T\vdash\phi$ then $T\vdash\operatorname{Prov}_T(\ulcorner\phi\urcorner)$; D2, T proves $\operatorname{Prov}_T(\ulcorner\phi\to\psi\urcorner)\to(\operatorname{Prov}_T(\ulcorner\phi\urcorner)\to\operatorname{Prov}_T(\ulcorner\psi\urcorner))$; D3, T proves $\operatorname{Prov}_T(\ulcorner\phi\urcorner)\to\operatorname{Prov}_T(\ulcorner\operatorname{Prov}_T(\ulcorner\phi\urcorner)\urcorner)$. The interpreted version requires an effective PA copy and verification there of the arithmetic proof constructors and axiom-proof translations used below.

## Proof

**Given:** External consistency of T and the hypotheses for Lob for the chosen certified predicate.

1.1 By F1, Con(T) is $\neg\Box\bot$. Classical logic identifies this with $\Box\bot\to\bot$, since T refutes the fixed contradictory sentence. Thus a T proof of Con(T) would give that reflection instance. [F1, given]

2.1 F2, using exactly the arithmetic and derivability hypotheses F3, would then imply $T\vdash\bot$. This contradicts the stipulated external consistency. Therefore T has no proof of that Con sentence. [F2, F3, step 1.1] ∎
