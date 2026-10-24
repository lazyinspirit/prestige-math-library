---
id: thm-hilbert-bernays-lob-derivability-conditions
kind: theorem
title: "Derivability conditions for the chosen proof predicate"
status: published
origin: pipeline
deps: [lem-pa-uniform-bounded-truth-proof-certificates, def-arithmetic-provability-and-consistency, lem-primitive-recursive-syntax-and-proof-checking, lem-interpretation-translates-finite-derivations]
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
    - title: "Moschovakis, Lecture Notes in Logic (2014) — 4C.12–4C.13 pp154–156; local bounded-certificate constructors supply omitted details"
      url: "https://www.math.ucla.edu/~ynm/lectures/lnl.pdf"
    - title: "Avigad, Computability and Incompleteness (2007) — §4.7 pp113–115 conditions 1–3 (source omits verification); local verification backed by Moschovakis Proposition 4C.13"
      url: "https://www.andrew.cmu.edu/user/avigad/Teaching/candi_notes.pdf"
---


## Statement

For the standard certified predicate of an effective T extending PA, the following hold for sentences $\phi,\psi$: D1, if $T\vdash\phi$ then $T\vdash\operatorname{Prov}_T(\ulcorner\phi\urcorner)$; D2, T proves $\operatorname{Prov}_T(\ulcorner\phi\to\psi\urcorner)\to(\operatorname{Prov}_T(\ulcorner\phi\urcorner)\to\operatorname{Prov}_T(\ulcorner\psi\urcorner))$; D3, T proves $\operatorname{Prov}_T(\ulcorner\phi\urcorner)\to\operatorname{Prov}_T(\ulcorner\operatorname{Prov}_T(\ulcorner\phi\urcorner)\urcorner)$. The interpreted version requires an effective PA copy and verification there of the arithmetic proof constructors and axiom-proof translations used below.

## Facts & Assumptions

[F1] [[def-arithmetic-provability-and-consistency]]: For a fixed effective theory T, let $\operatorname{Prf}_T(p,a)$ be the chosen numeralwise arithmetic representation of certified proof checking, with proof code first. Use lem-primitive-recursive-syntax-and-proof-checking and the strengthened representation constructed in thm-primitive-recursive-numeralwise-representability. Retain also the finite PA proof of equivalence to its syntactic $\Sigma_1$ computation form. Thus “Sigma1” for this chosen predicate may mean PA-Sigma1; it does not assert Q equivalence.

Put $\operatorname{Prov}_T(a):=\exists p\operatorname{Prf}_T(p,a)$ and $\operatorname{Con}(T):=\neg\operatorname{Prov}_T(\ulcorner\bot\urcorner)$, where $\bot=\exists v_0\neg(v_0=v_0)$ is in the appropriate signature and corner brackets denote the numeral of a code. External consistency means that there is no actual finite T-refutation; the displayed Con is an arithmetic formula.

For theories extending Q, $0=1$ may replace the fixed contradiction: Q proves $0\ne S0$, so from $0=S0$ explosion gives $\bot$; conversely reflexivity refutes $\bot$ and explosion gives $0=S0$. Appending these fixed finite proof blocks gives primitive-recursive transformations between refutation certificates, verified in PA. We use the fixed $\bot$ throughout. Correctness only on standard numerals is insufficient to replace this predicate in a derivability or second-incompleteness theorem.

[F2] [[lem-primitive-recursive-syntax-and-proof-checking]]: For the fixed effective signature and sentinel encoding, term/formula recognition, free-variable and free-for tests, capture-free substitution, numeral formation, negation, and certified derivation checking are primitive recursive. Invalid inputs return zero or false.

[F3] [[lem-pa-uniform-bounded-truth-proof-certificates]]: For each fixed bounded arithmetic formula $\delta(\bar x)$, PA proves that $\delta(\bar x)$ yields a certified Q-proof of $\delta(\overline{\bar x})$, and that $\neg\delta(\bar x)$ yields a certified Q-proof of its negation. Substitution of numerals in this assertion is the numerical syntax operation, not literal substitution of a variable into a numeral. Consequently, for each fixed syntactic $\Sigma_1$ sentence $\sigma$, PA proves $\sigma\to\operatorname{Prov}_Q(\ulcorner\sigma\urcorner)$.

[F4] [[lem-interpretation-translates-finite-derivations]]: An interpretation as defined above sends every S-derivation of $\phi$ to a T-derivation of $G_{\mathrm{FV}(\phi)}\to\phi^I$. In particular a source contradiction gives a target contradiction, so external Con(T) implies Con(S). Effective certificate data gives an effective translation. A formal Con implication additionally follows in any base B that verifies a total map from S-contradiction certificates to T-contradiction certificates.

## Proof

**Given:** T extending PA with its standard certified predicate, or the expressly verified interpreted version.

1.1 For D1 take an actual certificate p of a T-proof of phi. Numeralwise correctness of the predicate F1 gives a Q proof of $\operatorname{Prf}_T(\bar p,\ulcorner\phi\urcorner)$. T proves this as it extends PA, hence Q, and existential introduction proves its Prov instance. This is an external rule on actual T proofs. [F1, given]

1.2 For D2 concatenate a proof of phi->psi and a proof of phi, shifting each premise reference in the second block by the first block length, then append MP. The resulting code c(p,q) is primitive recursive by F2. Each old line keeps its formula, axiom certificate and earlier-premise property after shifting; the new last line has the two verified premises. PA induction through the concatenated blocks proves that if the inputs pass the two proof checks, the output passes the check for psi. The standard representations in F1 carry these recursively verified check identities in PA. Existentially quantifying p,q and then c(p,q) gives D2 in PA and therefore in T. [F1, F2, given]

2.1 For D3 fix $\chi=\operatorname{Prov}_T(\ulcorner\phi\urcorner)$ and its syntactic Sigma1 form sigma, with the fixed PA proof $\chi\leftrightarrow\sigma$ retained by F1. F3 gives $\mathrm{PA}\vdash\sigma\to\operatorname{Prov}_Q(\ulcorner\sigma\urcorner)$. Embed Q certificates into T by replacing the finitely many Q-axiom types with fixed T proofs of their universal closures and instantiating; their correctness is verified in PA by checking those fixed certificates and induction on the input proof lines. Append a fixed T proof of sigma->chi and MP using step 1.2. PA therefore proves $\sigma\to\operatorname{Prov}_T(\ulcorner\chi\urcorner)$. Composing with chi->sigma gives D3. No Q equivalence of chi and sigma was used. [F1, F2, F3, step 1.2]

3.1 In the interpreted case perform these numerical recursions in the stipulated PA copy and use its verification of their proof translations. F4 transports the finite Q/PA derivations and their guards; the certificates for the fixed target proofs are inserted by the interpreted arithmetic verification. The same three calculations then establish the interpreted D1–D3. Mere correctness of a different predicate on standard numerals would not supply step 1.2 or step 2.1. [F4, step 1.1, step 1.2, step 2.1] ∎
