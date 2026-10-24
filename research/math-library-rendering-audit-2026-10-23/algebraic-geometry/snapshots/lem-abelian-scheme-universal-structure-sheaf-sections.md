---
id: lem-abelian-scheme-universal-structure-sheaf-sections
kind: lemma
title: "Universal structure-sheaf sections of an abelian scheme"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
deps:
  - def-axiom-of-choice
  - def-dependent-choice
  - def-abelian-scheme
  - thm-global-functions-proper-integral-variety
  - thm-nakayama-lemma
  - thm-sheaf-morphism-isomorphism-stalkwise
  - lem-proper-flat-fp-cohomology-perfect-complex
  - lem-cohomology-base-change-finite-free-criterion
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "J. S. Milne, Abelian Varieties, v2.00 (2008), Chapter I sections 3, 5, 8 (structure sheaf of an abelian scheme)"
      url: "https://www.jmilne.org/math/CourseNotes/AV.pdf"
---

## Statement

Assume AC and DC as inherited from coherent cohomology and base change. Let $f:A\to S$ be an abelian scheme ([[def-abelian-scheme]]). For every morphism $T\to S$ the unit map $\mathcal O_T\to f_{T,*}\mathcal O_{A_T}$ of the base-changed abelian scheme $A_T=A\times_ST\to T$ is an isomorphism, with inverse given by evaluation along the identity section; consequently every geometric fibre has $H^0(A_s,\mathcal O)=k(s)$ and $f_*\mathcal O_A\cong\mathcal O_S$ universally.

## Facts & Assumptions

**Given:** AC and DC, an abelian scheme $f:A\to S$, a morphism $T\to S$ and the base change $A_T\to T$.

[F1] An abelian scheme is smooth, proper and finitely presented with connected geometric fibres ([[def-abelian-scheme]]).

[F2] A proper geometrically integral scheme over a field has global functions equal to the field ([[thm-global-functions-proper-integral-variety]]).

[F3] For a proper flat finitely presented morphism and a finitely presented flat sheaf, the higher direct images form a perfect complex compatible with base change; the finite-free base-change criterion turns surjectivity of the degree-zero fibre map into universal base change and finite local freeness ([[lem-proper-flat-fp-cohomology-perfect-complex]], [[lem-cohomology-base-change-finite-free-criterion]]).

[F4] A morphism of finite locally free modules of the same rank which is an isomorphism on every residue-field fibre is an isomorphism; a local basis computation with Nakayama identifies the unit map ([[thm-sheaf-morphism-isomorphism-stalkwise]], [[thm-nakayama-lemma]]).

## Proof

**Proof technique:** direct: compute the degree-zero cohomology fibrewise and apply cohomology and base change.

1.1 Work over an affine open $V=\operatorname{Spec}R\subseteq S$, shrinking further so the complex $K$ of [F3] is finite free and concentrated in nonnegative degrees. At any $s\in V$, the geometric fibre $A_{\bar s}$ is smooth and connected, hence integral: regular local rings prevent its finitely many irreducible components from meeting, and connectedness leaves only one. Thus $A_s$ is geometrically integral and [F2] gives $H^0(A_s,\mathcal O)=\kappa(s)$. The actual base-change map $H^0(K)\otimes_R\kappa(s)\to H^0(K\otimes_R\kappa(s))=H^0(A_s,\mathcal O)$ is surjective, because the global constant section $1$ maps to a basis of its target. [F1, F2, F3, given, algebra]

2.1 Apply the finite-free criterion in [F3] with $q=0$ to the map just proved surjective. Its preceding map in degree $-1$ is also surjective, since $K$ has no negative terms. The criterion consequently makes $H^0(K)$ finite locally free and gives $H^0(K)\otimes_RR'\cong H^0(K\otimes_RR')$ for every $R$-algebra $R'$ locally near $s$. Its residue-field rank is one by step 1.1. Since $s$ was arbitrary, these neighbourhoods cover $S$, proving that $f_*\mathcal O_A$ is invertible and universally compatible with base change. [F3, step 1.1, algebra]

3.1 The unit map $u:\mathcal O_S\to f_*\mathcal O_A$ is a morphism of invertible sheaves which over each geometric fibre is an isomorphism (it sends $1$ to the constant function $1$); by [F4] it is an isomorphism, and the identity section $e:S\to A$ gives an inverse by pullback of functions, since $e^*u=\operatorname{id}$. The same argument applied to $A_T\to T$ and to arbitrary base change, including nonreduced $T$, gives $\mathcal O_T\cong f_{T,*}\mathcal O_{A_T}$ universally. This argument uses stalkwise and fibrewise isomorphisms supplied by the coherence theorem; it does not infer morphism equality from geometric points. [F3, F4, step 2.1, algebra] ∎ 