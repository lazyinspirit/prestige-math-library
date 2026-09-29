---
id: thm-relative-p1-line-bundle-cohomology-shift
kind: theorem
title: Relative projective-line cohomology shift
status: draft
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - lem-relative-projective-line-cohomology-and-apolarity
  - thm-leray-spectral-sequence-for-sheaf-cohomology
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  references:
    - title: "The Stacks Project, Cohomology of Schemes"
      url: "https://stacks.math.columbia.edu/download/coherent.pdf"
      locator: "§§30.2, 30.8, 30.14"
    - title: "Jacob Lurie, A Proof of the Borel–Weil–Bott Theorem"
      url: "https://people.math.harvard.edu/~lurie/papers/bwb.pdf"
      locator: "Theorems 1 and 3 and Lemma 4"
---

## Statement

Assume the Axiom of Choice. Let $\pi:E\to S$ be a Zariski locally trivial
$\mathbb P^1$-bundle of complex schemes, let $L$ be an invertible sheaf of
constant geometric fibre degree $n\ge-1$, and write
$K_\pi=\omega_{E/S}$. After fixing the invariant apolarity normalization
of [[lem-relative-projective-line-cohomology-and-apolarity]], for every
$i\ge0$ there is an isomorphism natural in $(E/S,L)$ and under restriction
of $S$,
$$H^i(E,L)\;\cong\;H^{i+1}(E,L\otimes K_\pi^{\otimes(n+1)}).$$

## Facts & Assumptions

**Given:** $\pi$, $E$, $S$, $L$, $n$ and $K_\pi$ as in the statement.

[F1] The relative projective-line calculation gives
$R^q\pi_*L=0$ for $q>0$,
$R^q\pi_*(L\otimes K_\pi^{\otimes(n+1)})=0$ for $q\ne1$, and a
base-restriction-compatible isomorphism
$a:\pi_*L\xrightarrow{\sim}R^1\pi_*(L\otimes K_\pi^{\otimes(n+1)})$.
For $n=-1$ both displayed possibly nonzero sheaves vanish.
([[lem-relative-projective-line-cohomology-and-apolarity]])

[F2] For a morphism $f:X\to Y$ and an abelian sheaf $\mathcal F$ there is
a natural Leray spectral sequence
$E_2^{p,q}=H^p(Y,R^qf_*\mathcal F)\Rightarrow H^{p+q}(X,\mathcal F)$;
if all but one row $q=q_0$ vanish, its edge isomorphisms are
$H^p(Y,R^{q_0}f_*\mathcal F)\cong H^{p+q_0}(X,\mathcal F)$.
([[thm-leray-spectral-sequence-for-sheaf-cohomology]])

[F3] The Axiom of Choice is [[def-axiom-of-choice]].

## Proof

1.1 Apply [F2] to $\pi$ and $L$. By [F1] every $E_2$ row except $q=0$ vanishes. There are therefore no possible incoming or outgoing differentials and the filtration of each abutment has one graded piece. Its edge map is the natural isomorphism $$H^i(E,L)\xrightarrow{\sim}H^i(S,\pi_*L)\qquad(i\ge0).$$ [F1, F2]

2.1 Put $L'=L\otimes K_\pi^{\otimes(n+1)}$. For $L'$ the only possibly nonzero Leray row is $q=1$ by [F1]. The same one-row argument yields $$H^i(S,R^1\pi_*L')\xrightarrow{\sim}H^{i+1}(E,L')$$ for every $i\ge0$. This isomorphism is the edge map with its degree-one shift, not a choice of a splitting of a multistep filtration. [F1, F2, step 1.1]

3.1 Compose the isomorphism of 1.1, the map $H^i(S,a)$ of [F1], and the isomorphism of 2.1. This gives the displayed isomorphism. Every map in the composite is induced by a natural map of sheaves or by a one-row Leray edge map, so the composite commutes with restriction of $S$ and with isomorphisms of the bundle and line bundle that preserve the fixed apolarity normalization. If $n=-1$, [F1] makes both Leray rows zero, so both cohomology groups are zero and the same composite is the unique map $0\to0$. AC is inherited through [F1] and [F2]. The completed sheaf-level apolarity isomorphism [F1] is used in the two Leray collapses and the final comparison. [F1, F2, F3, step 1.1, step 2.1] ∎
