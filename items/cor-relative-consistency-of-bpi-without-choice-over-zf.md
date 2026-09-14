---
id: cor-relative-consistency-of-bpi-without-choice-over-zf
kind: corollary
title: Relative consistency of BPI without Choice over ZF
status: draft
origin: pipeline
deps: [thm-basic-cohen-model-satisfies-bpi-and-fails-choice, lem-basic-cohen-search-and-shift-prime-ideal-construction, lem-basic-cohen-symmetric-construction-is-uniformly-formalizable, thm-formal-consistency-of-zfc-plus-gch-from-zf, def-arithmetic-provability-and-consistency]
proof_strategy: finite-proof-reduction
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - {title: "J. D. Halpern and A. Lévy, The Boolean prime ideal theorem does not imply the axiom of choice, metamathematical construction, pp.83-134", url: "https://www.ams.org/books/pspum/013.1/0284328"}
    - {title: "Brian Ransom, On BPI in Symmetric Extensions Part 1, Sections 3-5", url: "https://arxiv.org/abs/2511.21684"}
---

## Statement

Writing consistency as the absence of a standard finite refutation in the coding of [[def-arithmetic-provability-and-consistency]],

$$\operatorname{Con}(\mathrm{ZF})\Longrightarrow\operatorname{Con}(\mathrm{ZF}+\mathrm{BPI}+\neg\mathrm{AC}).$$

Consequently, conditional on the consistency of ZF, BPI does not imply AC over ZF. This is an external syntactic relative-consistency implication; it does not infer a transitive model from bare consistency, and it does not claim that PA proves the displayed implication.

## Facts & Assumptions

**Given:** Assume $\operatorname{Con}(\mathrm{ZF})$ and suppose, for contradiction, that the target theory has a coded finite refutation.

[F1] [[thm-formal-consistency-of-zfc-plus-gch-from-zf]] transfers the hypothesis to $\operatorname{Con}(\mathrm{ZFC}+\mathrm{GCH})$.

[F2] [[lem-basic-cohen-symmetric-construction-is-uniformly-formalizable]] says that, for every externally fixed finite fragment $\Delta$ of $\mathrm{ZF}+\neg\mathrm{AC}$, ZFC proves a set model of $\Delta$, using only a finite source fragment depending on $\Delta$. It explicitly makes no claim of a PA-verified uniform selector for these proofs.

[F3] [[lem-basic-cohen-search-and-shift-prime-ideal-construction]] is one fixed finite ZFC proof that the same symmetric construction satisfies BPI; its forcing recursion, finite Ramsey instances, Erdős--Rado instance, collapse comparison, and name recursion use only finitely many ZFC axioms and schema instances.

[F4] [[thm-basic-cohen-model-satisfies-bpi-and-fails-choice]] identifies the resulting semantic target, while [[def-arithmetic-provability-and-consistency]] supplies primitive-recursive proof checking and the meaning of both consistency formulas.

## Proof

**Proof technique:** external finite-refutation reduction.

1.1 A standard finite refutation $R$ of $\mathrm{ZF}+\mathrm{BPI}+\neg\mathrm{AC}$ contains only finitely many ZF schema instances. Fix this particular $R$, and let $\Delta$ consist of those instances together with $\neg\mathrm{AC}$; BPI is retained as its single displayed target sentence. This is an external extraction from one alleged finite proof, not a claimed uniform construction formalized in PA. [F4, given, assume-contra]

2.1 Since $\Delta$ is now one externally fixed fragment, F2 gives one finite ZFC proof that the basic Cohen symmetric construction has a set interpretation satisfying $\Delta$. Append the fixed set-theoretic proof F3 to the same finite construction, enlarging the finite source fragment for the finitely many forcing, cardinal, name-rank, and symmetry instances occurring in F3. The result is a finite ZFC proof that this set interpretation also satisfies BPI, hence a finite ZFC proof of a model of $\Delta+\mathrm{BPI}$. No effective dependence of this proof on arbitrary input codes is used. [F2, F3, F4, step 1.1]

3.1 Relativize every line of the fixed refutation $R$ to that set interpretation and append the ordinary finite satisfaction induction for the finitely many formulas occurring in $R$. This gives a finite contradiction proof in ZFC. No countable-transitive-model inference is made. [F2, F3, F4, step 1.1, step 2.1]

4.1 F1 says the assumed consistency of ZF implies consistency of the ZFC+GCH source and therefore of ZFC, contradicting step 3.1. Hence no standard finite target refutation exists, which is exactly the displayed external relative-consistency implication. The resulting consistent extension contains BPI and $\neg\mathrm{AC}$, so, under the same antecedent, ZF+BPI cannot prove AC. [F1, F4, step 3.1, discharge-contradiction] ∎
