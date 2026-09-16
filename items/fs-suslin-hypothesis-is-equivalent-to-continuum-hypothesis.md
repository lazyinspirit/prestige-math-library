---
id: fs-suslin-hypothesis-is-equivalent-to-continuum-hypothesis
kind: false-statement
title: "SH is not equivalent to CH"
status: published
origin: pipeline
deps: [cor-formal-consistency-of-ma-and-not-ch, cor-ma-and-not-ch-implies-suslin-hypothesis, lem-finite-fragment-l-interpretation-with-gch, thm-formal-consistency-of-zfc-plus-gch-from-zf, thm-constructible-inner-model-semantic-and-formal-schema, thm-v-equals-l-implies-diamond, prop-diamond-implies-continuum-hypothesis, cor-v-equals-l-gives-a-suslin-tree, thm-suslin-tree-implies-suslin-line, def-suslin-hypothesis-and-suslin-algebra, thm-formal-relative-consistency-from-verified-proof-reduction, def-arithmetic-provability-and-consistency, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Karagila, Forcing & Symmetric Extensions, Section 7, printed pp. 34-38"
      url: https://karagila.org/files/Forcing-2023.pdf
    - title: "Monk, Set theory following Jech, Theorem 15.42, printed p. 277"
      url: https://euclid.colorado.edu/~monkd/jech.pdf
justified_by: []
forward_refs: []
---

## Statement refuted

**FALSE:** The Suslin Hypothesis is equivalent to the continuum hypothesis.

Assuming external $\operatorname{Con}(\mathrm{ZFC})$, the two implications
already fail separately in consistent extensions of the theory:

$$\operatorname{Con}(\mathrm{ZFC}+\mathrm{SH}+\neg\mathrm{CH}),\qquad\operatorname{Con}(\mathrm{ZFC}+\mathrm{CH}+\neg\mathrm{SH}).$$

These are joint relative-consistency statements. Separate consistency of
ZFC+SH and ZFC+$\neg$SH would not by itself control CH and would not refute the
claimed equivalence.

## Facts & Assumptions

**Given:** external $\operatorname{Con}(\mathrm{ZFC})$ and the fixed proof predicates and contradiction sentence. All theory extensions use the same literal CH and SH formulas.

[F1] Externally, consistency of ZFC implies consistency of ZFC+MA+$\neg$CH, without a claim of a PA-verified uniform reduction. [[cor-formal-consistency-of-ma-and-not-ch]]

[F2] ZFC proves that MA+$\neg$CH implies SH. [[cor-ma-and-not-ch-implies-suslin-hypothesis]]

[F3] The $L$-interpretation dispatcher translates ZFC+GCH proofs to ZF by a primitive-recursive map whose totality and checker acceptance PA verifies. [[lem-finite-fragment-l-interpretation-with-gch]]

[F4] ZF has fixed proofs that $L$ satisfies every selected ZFC+$V=L$ axiom. [[thm-constructible-inner-model-semantic-and-formal-schema]]

[F5] ZF proves that $V=L$ implies diamond on $\omega_1$. [[thm-v-equals-l-implies-diamond]]

[F6] In ZFC, diamond implies CH. [[prop-diamond-implies-continuum-hypothesis]]

[F7] ZF proves that $V=L$ yields a normal splitting Suslin tree. [[cor-v-equals-l-gives-a-suslin-tree]]

[F8] In ZFC, a Suslin tree yields a strong-convention Suslin line. [[thm-suslin-tree-implies-suslin-line]]

[F9] SH says that no such Suslin line exists, so a supplied line witnesses its literal negation. [[def-suslin-hypothesis-and-suslin-algebra]]

[F10] A base-verified total map from target refutations to source refutations yields the corresponding formal consistency implication. [[thm-formal-relative-consistency-from-verified-proof-reduction]]

[F11] External consistency means that no actual certified finite refutation of the fixed contradiction exists. [[def-arithmetic-provability-and-consistency]]

[F12] The verified $L$ proof transformation includes the fixed terminal block that converts a relativized contradiction into the selected ZF contradiction. [[thm-formal-consistency-of-zfc-plus-gch-from-zf]]

[A1] Choice is available in the ZFC object theories and internally in $L$; the metatheoretic finite proof splices make no family choice. [[def-axiom-of-choice]]

## Counterexample

1.1 Put $T_{mathrm{MA}}=\mathrm{ZFC}+\mathrm{MA}+\neg\mathrm{CH}$ and $S_0=\mathrm{ZFC}+\mathrm{SH}+\neg\mathrm{CH}$. By [F1], the given consistency hypothesis makes $T_{\mathrm{MA}}$ externally consistent. Fix the finite $T_{\mathrm{MA}}$ proof of SH supplied by [F2]. If $S_0$ had a certified finite refutation, replace every occurrence of its added SH axiom by a fresh copy of that fixed proof; its ZFC and $\neg$CH axiom lines already belong to $T_{\mathrm{MA}}$. The resulting finite derivation would refute $T_{\mathrm{MA}}$, contrary to [F1] and [F11]. Hence $S_0$ is consistent. It asserts SH and $\neg$CH together, so it refutes the implication SH$\to$CH. Zero, one, or repeated SH-axiom occurrences are handled by the same finite splice. [F1, F2, F11, given, construct]

1.2 Build the other branch inside the verified $L$-interpretation. By [F4], there are fixed ZF proofs that internally $L$ satisfies ZFC, $V=L$, and AC. Translate [F5] and then [F6] inside $L$ to obtain one fixed certified ZF proof $d_{\mathrm{CH}}$ of $\mathrm{CH}^L$. Independently, translate [F7] and [F8] inside $L$ and use [F9] to obtain one fixed certified ZF proof $d_{\neg\mathrm{SH}}$ of $(\neg\mathrm{SH})^L$. These are literal guarded relativizations in the fixed calculus, with capture-free substitutions. Object-level Choice is used inside $L$ by the diamond, tree and tree-to-line suppliers as recorded in [A1]; ambient ZF makes no family choice here. [F4, F5, F6, F7, F8, F9, A1, construct]

2.1 Let $S_1=\mathrm{ZFC}+\mathrm{CH}+\neg\mathrm{SH}$. Extend the verified dispatcher [F3] by two decidable axiom tags: on the CH tag return the constant block $d_{\mathrm{CH}}$, and on the $\neg$SH tag return $d_{\neg\mathrm{SH}}$. Retain the existing ZFC branches, capture guards, malformed-input tautology, and the terminal relativized-contradiction block supplied by [F12]. Two finite case branches and two constant certified blocks preserve primitive recursiveness, and PA verifies their line-prefix checker acceptance. Thus PA verifies a total map sending every certified $S_1$ refutation first to a ZF refutation and then, by identical axiom lines, to a ZFC refutation. Zero or repeated occurrences of either added axiom reuse the same dispatcher branches. [F3, F10, F11, F12, step 1.2, construct]

3.1 Apply [F10] to the map of step 2.1, with source ZFC and target $S_1$. It yields $$\mathrm{PA}\vdash\operatorname{Con}(\mathrm{ZFC})\longrightarrow\operatorname{Con}(S_1),$$ and therefore the required external consistency consequence. The theory $S_1$ asserts CH and $\neg$SH, so it refutes CH$\to$SH. This is a syntactic consistency transfer through $L$, not an extraction of a transitive model from consistency. [F10, F11, step 2.1]

4.1 By steps 1.1 and 3.1, under external $\operatorname{Con}(\mathrm{ZFC})$ there is a consistent extension refuting SH$\to$CH and a consistent extension refuting CH$\to$SH. A certified ZFC proof of either implication would also be a proof in the corresponding extension and, together with that extension's two added axioms, would give a fixed propositional refutation. Hence ZFC proves neither implication and cannot prove SH$\leftrightarrow$CH. The empty or malformed proof-code cases do not witness derivability; each joint theory has both advertised axioms, including CH and SH in opposite truth patterns. No actual generic or set model is inferred. The only Choice uses are already inside the two ZFC branches and internally in $L$; the final proof-code transformations use finite recursion only. [F11, A1, step 1.1, step 3.1] ∎

## Remarks

- The MA branch supplies SH with CH false; the constructible branch supplies CH with SH false. Neither branch claims that its axiom pattern holds in the ambient universe.
- The combined $L$ dispatcher is essential. Con(ZFC+CH) and Con(ZFC+$\neg$SH) separately would not imply consistency of their union.
