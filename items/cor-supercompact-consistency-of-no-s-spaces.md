---
id: cor-supercompact-consistency-of-no-s-spaces
kind: corollary
title: A supercompact gives the relative consistency of no S-spaces
status: draft
origin: pipeline
deps:
  - thm-pfa-implies-there-are-no-s-spaces
  - cor-formal-consistency-of-pfa-from-a-supercompact
  - def-lc-fine-ultrafilters-strong-compactness-and-supercompactness
  - thm-formal-relative-consistency-from-verified-proof-reduction
  - lem-primitive-recursive-syntax-and-proof-checking
  - lem-derivation-finite-support-and-concatenation
  - thm-primitive-recursive-numeralwise-representability
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Moore, A solution to the L space problem, Theorem 7.5, printed p. 22"
      url: https://arxiv.org/pdf/math/0501524
    - title: "Cummings, Iterated Forcing and Elementary Embeddings, Theorem 24.11, printed pp. 99–101"
      url: https://www.math.cmu.edu/users/jcumming/papers/repaper_finished_june_2008.pdf
---

## Statement

For fixed effective presentations and arithmetizations,

$$\operatorname{Con}(\mathrm{ZFC}+\text{there is a supercompact cardinal})\ \Longrightarrow\ \operatorname{Con}(\mathrm{ZFC}+\text{there are no S-spaces}).$$

This is a formal relative-consistency implication.  It neither extracts a
transitive model from consistency nor asserts PFA in ZFC.

## Facts & Assumptions

**Given:** The fixed effective theory presentations and arithmetic base used by the formal supercompact-to-PFA supplier.

[F1] [[cor-formal-consistency-of-pfa-from-a-supercompact]] supplies, for these presentations, the formal implication $\operatorname{Con}(\mathrm{ZFC}+\text{a supercompact})\to \operatorname{Con}(\mathrm{ZFC}+\mathrm{PFA})$ without a countable-transitive- model inference.

[F2] [[thm-pfa-implies-there-are-no-s-spaces]]: ZFC+PFA proves the sentence asserting that there are no S-spaces.

[F3] [[lem-derivation-finite-support-and-concatenation]]: Fixed finite derivations may be concatenated after proved sentence premises are replaced by their proofs, with line references shifted accordingly.

[F4] [[lem-primitive-recursive-syntax-and-proof-checking]] supplies verified proof parsing, concatenation, line renumbering, and malformed-input defaults.

[F5] [[thm-primitive-recursive-numeralwise-representability]]: Every true or false standard instance of the primitive-recursive certified-proof checker has the corresponding finite numeral proof in PA.

[F6] [[thm-formal-relative-consistency-from-verified-proof-reduction]] turns a verified total reduction of contradiction certificates into the corresponding formal consistency implication.

[F7] [[def-lc-fine-ultrafilters-strong-compactness-and-supercompactness]] fixes the supercompactness assertion in the source theory.  No new large-cardinal property is inferred here.

## Proof

**Proof technique:** direct.

1.1 Let $T_{\mathrm P}$ be ZFC+PFA and let $T_{\mathrm N}$ be ZFC plus the sentence that there are no S-spaces. Expand the fixed finite mathematical derivation underlying F2 in the chosen calculus: expand its displayed definitions and abbreviations, and replace every invoked proved premise by its fixed derivation. F3 shows that the resulting finite concatenation is a $T_{\mathrm P}$-derivation of the extra axiom of $T_{\mathrm N}$. Fix its standard code $e$. The checker from F4 accepts this particular numeral, and F5 supplies a finite PA proof of that positive closed checker instance. Thus both $e$ and PA's verification of $e$ are constructed here; neither is attributed to F2's interface. [F2, F3, F4, F5, Given]

2.1 Given a purported $T_{\mathrm N}$-refutation $p$, use F4 to check it and to replace each use of the no-S-space axiom by a renamed copy of $e$.  Retain the ZFC axiom lines and append the same logical inferences.  This yields a $T_{\mathrm P}$-refutation $r(p)$.  The construction is a bounded syntactic substitution into the finite code $p$, with a fixed default on malformed inputs, so the arithmetic base combines the fixed positive checker proof from step 1.1 with induction on the decoded line list to verify that $r$ is total and that $\operatorname{Prf}_{T_{\mathrm N}}(p,\ulcorner\bot\urcorner)\longrightarrow\operatorname{Prf}_{T_{\mathrm P}}(r(p),\ulcorner\bot\urcorner)$. [F4, F5, step 1.1]

3.1 Apply [F6] to the reduction in step 2.1.  The arithmetic base proves $\operatorname{Con}(T_{\mathrm P})\to\operatorname{Con}(T_{\mathrm N})$.  Compose this implication with [F1] to obtain the displayed result. [F1, F6, step 2.1]

4.1 The source theory's large-cardinal clause is exactly the one fixed by [F7].  The argument only transforms finite proof codes: it does not choose a generic filter, construct a model of the whole source theory, or infer a transitive model from its consistency.  Empty spaces and singleton spaces need no special consistency argument—[F2]'s no-S-space theorem already treats the complete definition—and no converse implication is asserted. [F2, F7, step 3.1] ∎
