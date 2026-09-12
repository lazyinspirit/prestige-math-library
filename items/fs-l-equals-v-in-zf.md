---
id: fs-l-equals-v-in-zf
kind: false-statement
title: "False statement: ZF proves L equals V"
status: draft
origin: pipeline
deps: [thm-formal-consistency-of-zfc-plus-gch-from-zf, thm-constructibility-is-absolute-and-l-is-minimal, prop-atomless-generics-are-not-ground-model-elements, thm-forcing-preserves-ordinals, cor-relative-consistency-from-a-forced-sentence]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Kunen, Set Theory, warning after Chapter VI Corollary 3.4, pp. 170–171"
      url: https://fa.ewi.tudelft.nl/~hart/set_theory/Jech/Kunen-1980-Set_Theory.pdf
justified_by: []
forward_refs: []
---

## Statement

False statement: because ZF proves $L$ is an inner model of
$\mathrm{ZFC}+V=L$, ZF therefore proves $V=L$.

Assuming externally $\operatorname{Con}(\mathrm{ZF})$, the displayed
conclusion is false: ZF does not prove $V=L$. The consistency hypothesis is
essential to this metamathematical refutation.

## Facts & Assumptions

**Given:** External $\operatorname{Con}(\mathrm{ZF})$ and the fixed effective
presentations used by F1 and F5.

[F1] [[thm-formal-consistency-of-zfc-plus-gch-from-zf]] gives
$\operatorname{Con}(\mathrm{ZF})\to
\operatorname{Con}(\mathrm{ZFC}+\mathrm{GCH})$, hence in particular
$\operatorname{Con}(\mathrm{ZF})\to\operatorname{Con}(\mathrm{ZFC})$.

[F2] [[thm-constructibility-is-absolute-and-l-is-minimal]] identifies the
constructible levels of a transitive ZF model with the actual levels below its
ordinal height.

[F3] [[prop-atomless-generics-are-not-ground-model-elements]] says that an
atomless generic filter is not an element of its transitive ground model.

[F4] [[thm-forcing-preserves-ordinals]] says that a generic extension and its
transitive ground model have exactly the same ordinals.

[F5] [[cor-relative-consistency-from-a-forced-sentence]] converts a supplied
base-verified uniform finite-fragment forcing construction for a fixed sentence
$\varphi$ into
$\operatorname{Con}(\mathrm{ZFC})\to
\operatorname{Con}(\mathrm{ZFC}+\varphi)$.

## Refutation

1.1 Let $P=2^{<\omega}$, ordered by extension, with stronger strings below weaker ones. Appending $0$ and appending $1$ gives two incompatible stronger conditions below every $p$, so $P$ is nonempty and atomless. If $M$ is a transitive ground model containing $P$ and $G$ is $M$-generic, F3 gives $G\notin M$, while the generic-extension construction gives $G\in M[G]$. [F3, construct]

2.1 By F4, $M$ and $M[G]$ have the same ordinals. Apply F2 in each model at every common ordinal: the two internal constructible hierarchies have the same levels, so $L^{M[G]}=L^M\subseteq M$. Step 1.1 then gives $G\in M[G]\setminus L^{M[G]}$, and therefore $M[G]\models V\ne L$. [F2, F4, step 1.1]

3.1 The preceding Cohen construction has the uniform formal verification required by F5. Concretely, parse a certified target axiom of $T=\mathrm{ZFC}+\neg(V=L)$. For a ZFC tag, structural recursion on its matrix expands the fixed forcing-relation and generic-extension proof schema; its Separation and Replacement branches substitute the original matrix into the corresponding ground-model proof templates. For the one extra tag, expand the fixed proofs that $P$ is atomless, the generic object is new, ordinals are preserved, and the two $L$ histories agree, exactly as in steps 1.1–2.1. Bound-variable renaming, substitution, finite-support extraction and proof-list concatenation are primitive recursive. Induction on the formula parse and then on the generated line prefix proves in PA that every output passes the fixed ZFC proof checker at its literal endpoint. Malformed certificates take a fixed default. Thus this is the required total proof-constructor verification, not merely the semantic existence of one generic extension. [F2, F3, F4, F5, step 1.1, step 2.1, induction]

4.1 Instantiate F5 with $\varphi=\neg(V=L)$ and the constructors of step 3.1. Then $\mathrm{PA}\vdash\operatorname{Con}(\mathrm{ZFC})\longrightarrow\operatorname{Con}(\mathrm{ZFC}+\neg(V=L))$. Together with F1 this yields, under the stated hypothesis, $\operatorname{Con}(\mathrm{ZFC}+\neg(V=L))$. [F1, F5, step 3.1]

5.1 Suppose instead that ZF proved $V=L$. The same finite derivation is a ZFC derivation. Appending it to the distinguished axiom $\neg(V=L)$ and then the fixed propositional contradiction block would be a $\mathrm{ZFC}+\neg(V=L)$ refutation, contrary to step 4.1. Hence, assuming $\operatorname{Con}(\mathrm{ZF})$, ZF does not prove $V=L$. The inner-model theorem proves a relativized assertion about the subclass $L$; it does not identify every ambient set with a constructible set. [assume-contra, step 4.1, discharge-contradiction] ∎
