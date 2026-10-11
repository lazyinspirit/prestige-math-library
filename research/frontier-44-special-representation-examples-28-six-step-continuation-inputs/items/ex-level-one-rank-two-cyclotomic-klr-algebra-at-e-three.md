---
id: ex-level-one-rank-two-cyclotomic-klr-algebra-at-e-three
kind: example
title: "The level-one rank-two cyclotomic KLR algebra at e=3"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 31
deps: [def-residue-sequence-idempotents-and-cyclotomic-hecke-blocks,
       def-type-a-cyclotomic-specialization-of-the-qg-klr-algebras,
       prop-cyclotomic-hecke-algebras-of-level-one-are-finite-hecke-algebras,
       thm-hecke-jucys-murphy-action-is-dominance-triangular]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Jonathan Brundan and Alexander Kleshchev, Blocks of cyclotomic Hecke algebras and Khovanov–Lauda algebras, arXiv:0808.2032v3, Invent. Math. 178 (2009) 451–484 (complete 32-page article)"
      url: "https://arxiv.org/pdf/0808.2032"
      locator: "Introduction pp. 1–5 (quiver, (1.1)–(1.4), Main Theorem (1.6)–(1.15), Corollaries 1–2); Section 2 (2.1)–(2.7), Lemmas 2.1–2.2; Sections 3.1–3.5 pp. 7–19; Sections 4.1–4.5 pp. 19–27; Section 6 pp. 29–31."
    - title: "Jonathan Brundan and Alexander Kleshchev, Graded decomposition numbers for cyclotomic Hecke algebras, arXiv:0901.4450v3, Adv. Math. 222 (2009) 1883–1942 (complete 57-page article)"
      url: "https://arxiv.org/pdf/0901.4450"
      locator: "Section 2.2 relations (2.9)–(2.12) and the grading statement after (2.12); Sections 4.1–4.3, Theorem 4.1 and Remark 4.2, pp. 30–32."
    - title: "Jun Hu and Andrew Mathas, Seminormal forms and cyclotomic quiver Hecke algebras of type A, arXiv:1304.0906v3 (published in Math. Ann.), complete 51-page article"
      url: "https://arxiv.org/pdf/1304.0906"
      locator: "Introduction: Theorem A and Corollary 1.1, pp. 2–4; Section 2.2 Definition 2.2 and Remark 2.3; Sections 2.5–2.6, Theorem 2.8, Definition 2.10, Remark 2.13, Theorem 2.14, Corollary 2.15, pp. 11–16; Section 4.1 Definition 4.1."
---

## Example

Let $F$ be algebraically closed of characteristic $\ne3$, let $q\in F^\times$
be a primitive cube root of unity (so $e=3$), let $\Lambda=\Lambda_0$ (level
one) and $d=2$. Then:

(i) for $i=(i_1,i_2)\in I^2$ the cyclotomic relation is
$y_1^{\delta_{i_1,0}}e(i)=0$; thus $y_1e(i)=0$ for the three sequences with
$i_1=0$, and $e(i)=0$ for all six sequences with $i_1\ne0$, because their
exponent is zero and $y_1^0e(i)=e(i)$;

(ii) $\psi_1^2e(i)$ equals $0$ if $i_1=i_2$, equals $(y_2-y_1)e(i)$ if
$i_2=i_1+1$ and equals $(y_1-y_2)e(i)$ if $i_2=i_1-1$; for $e=3$ these are
all cases;

(iii) the nonzero blocks of $H^\Lambda_2$ are exactly
$H^\Lambda_{\alpha_0+\alpha_1}$ and $H^\Lambda_{\alpha_0+\alpha_2}$; both are
one dimensional, with $e((0,1))\ne0$ in the first (the block of the trivial
module of $H_{F,q}(S_2)$) and $e((0,2))\ne0$ in the second (the block of the
sign module); the other four $\alpha$-blocks of height $2$ are zero
([[def-residue-sequence-idempotents-and-cyclotomic-hecke-blocks]],
[[def-type-a-cyclotomic-specialization-of-the-qg-klr-algebras]]).

## Verification

**Proof technique:** direct.

**Given:** $F$ algebraically closed of characteristic $\ne3$, a primitive cube

root $q$, $\Lambda=\Lambda_0$, $d=2$, and the KLR presentation of

[[def-type-a-cyclotomic-specialization-of-the-qg-klr-algebras]].

1.1 The cyclotomic relation on $I^2$. Enumerate $I^2=\{0,1,2\}^2$. The cyclotomic exponent of the sequence $i$ is the pairing $(\Lambda_0,\alpha_{i_1})=\delta_{i_1,0}$, so the defining cyclotomic relation reads $y_1^{\delta_{i_1,0}}e(i)=0$. For the three sequences with $i_1=0$ this is $y_1e(i)=0$; for the six sequences with $i_1\ne0$ the exponent is zero and the relation is $y_1^0e(i)=e(i)=0$, so those idempotents vanish rather than merely a degree-one dot relation. [given, algebra]

1.2 The quadratic relation. The KLR quadratic relation distinguishes the colour cases: $i_1=i_2$, $i_2=i_1+1$, $i_2=i_1-1$. For $e=3$ and $I=\{0,1,2\}$ every ordered pair of distinct colours is adjacent in the $3$-cycle, so these are all cases, and substituting gives $\psi_1^2e(i)=0$, $(y_2-y_1)e(i)$, and $(y_1-y_2)e(i)$ respectively. [given, algebra]

2.1 The two nonzero blocks. By [[prop-cyclotomic-hecke-algebras-of-level-one-are-finite-hecke-algebras]] the level-one algebra $H^\Lambda_2$ is the finite Hecke algebra $H_{F,q}(S_2)$ with standard basis $\{1,T_1\}$, so it is two-dimensional, and $T_1^2-(q-1)T_1-q=0$ gives $H^\Lambda_2\cong F[T]/((T-q)(T+1))\cong F\times F$, the two factors being distinct because $q\ne1$ and $q\ne-1$ for a primitive cube root in characteristic $\ne3$. Hence there are exactly two nonzero one-dimensional blocks. Their labels come from the polynomial generator: on the trivial module $X_1=q^0=1$ and $X_2=q^{-1}T_1X_1T_1=q^{-1}q^2=q$, giving residue sequence $(0,1)$; on the sign module $X_1=1$ and $X_2=q^{-1}(-1)^2=q^{-1}=q^2$, giving $(0,2)$; equivalently these are the $q$-contents of the standard tableaux of $(2)$ and $(1,1)$ ([[thm-hecke-jucys-murphy-action-is-dominance-triangular]]). Every nonzero block contains at least one of these surviving idempotents, so the remaining four blocks of height $2$ are zero. [step 1.1, step 1.2, algebra] ∎

