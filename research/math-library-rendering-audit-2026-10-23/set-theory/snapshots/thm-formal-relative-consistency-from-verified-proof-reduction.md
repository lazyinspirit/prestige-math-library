---
id: thm-formal-relative-consistency-from-verified-proof-reduction
kind: theorem
title: "Formal consistency transfer from a verified reduction"
status: published
origin: pipeline
deps: [thm-finite-fragment-relative-consistency-transfer, lem-interpretation-translates-finite-derivations, def-arithmetic-provability-and-consistency]
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
    - title: "Freiburg, Course Notes for Set Theory and Independence Proofs (2024) — Lemma 3.5.12 p54; formal proof-map refinement of its finite derivation argument"
      url: "https://home.mathematik.uni-freiburg.de/maxwell/coursenotes-settheoryandindependenceproofs.pdf"
---


## Statement

If an arithmetic base B verifies a total code map r and $\forall p(\operatorname{Prf}_U(p,\ulcorner\bot\urcorner)\to\operatorname{Prf}_T(r(p),\ulcorner\bot\urcorner))$, then $B\vdash\operatorname{Con}(T)\to\operatorname{Con}(U)$. For reflection/finite-fragment applications the support extractor, fragment maps and reflection/transfer/soundness proof constructors must actually be supplied and verified to obtain such an r.

## Facts & Assumptions

[F1] [[def-arithmetic-provability-and-consistency]]: For a fixed effective theory T, let $\operatorname{Prf}_T(p,a)$ be the chosen numeralwise arithmetic representation of certified proof checking, with proof code first. Use lem-primitive-recursive-syntax-and-proof-checking and the strengthened representation constructed in thm-primitive-recursive-numeralwise-representability. Retain also the finite PA proof of equivalence to its syntactic $\Sigma_1$ computation form. Thus “Sigma1” for this chosen predicate may mean PA-Sigma1; it does not assert Q equivalence.

Put $\operatorname{Prov}_T(a):=\exists p\operatorname{Prf}_T(p,a)$ and $\operatorname{Con}(T):=\neg\operatorname{Prov}_T(\ulcorner\bot\urcorner)$, where $\bot=\exists v_0\neg(v_0=v_0)$ is in the appropriate signature and corner brackets denote the numeral of a code. External consistency means that there is no actual finite T-refutation; the displayed Con is an arithmetic formula.

For theories extending Q, $0=1$ may replace the fixed contradiction: Q proves $0\ne S0$, so from $0=S0$ explosion gives $\bot$; conversely reflexivity refutes $\bot$ and explosion gives $0=S0$. Appending these fixed finite proof blocks gives primitive-recursive transformations between refutation certificates, verified in PA. We use the fixed $\bot$ throughout. Correctness only on standard numerals is insufficient to replace this predicate in a derivability or second-incompleteness theorem.

[F2] [[thm-finite-fragment-relative-consistency-transfer]]: Let T extend enough ZF to formalize set-model soundness, and let U be an explicitly countable sentence theory. Suppose that for each external finite $\Delta\subseteq U$ there are a finite $\Gamma$ and T proofs of existence of a suitable TM/CTM of $\Gamma$ and of its conversion into a set model of $\Delta$. Then external Con(T) implies Con(U). This is a metatheorem with fixed finite proof inputs, not a uniform internal all-fragment assertion.

[F3] [[lem-interpretation-translates-finite-derivations]]: An interpretation as defined above sends every S-derivation of $\phi$ to a T-derivation of $G_{\mathrm{FV}(\phi)}\to\phi^I$. In particular a source contradiction gives a target contradiction, so external Con(T) implies Con(S). Effective certificate data gives an effective translation. A formal Con implication additionally follows in any base B that verifies a total map from S-contradiction certificates to T-contradiction certificates.

## Proof

**Given:** The stated B-verifiable total reduction, represented by a total functional graph if r is not a language symbol.

1.1 Work in B and assume Con(T) in the convention F1. For arbitrary p, totality of r provides its value q. If $\operatorname{Prf}_U(p,\ulcorner\bot\urcorner)$ held, the verified reduction would give $\operatorname{Prf}_T(q,\ulcorner\bot\urcorner)$, contrary to Con(T). Hence B proves the negated U-proof instance for every p under that assumption. [F1, given]

2.1 Universal generalization on p gives Con(U), and discharging the Con(T) assumption gives the desired implication. For the finite-fragment route F2 supplies only an external finite assembly until each constituent map and its verification is supplied; the analogous distinction for interpretations is F3. No uniform proof generator follows merely from the existence of the external assemblies. [F2, F3, step 1.1] ∎
