---
id: cex-isomorphic-hecke-classes-do-not-by-themselves-prove-homotopy-equivalent-complexes
kind: counterexample
title: "Equal Euler classes do not by themselves prove homotopy-equivalent complexes"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 7
deps: [prop-decategorification-of-a-rouquier-complex-is-the-hecke-braid-generator, def-positive-and-negative-rouquier-generator-complexes, lem-euler-class-of-a-rouquier-complex-is-homotopy-invariant-and-multiplicative, lem-rouquier-generator-complexes-have-canonical-derived-graph-models, thm-homology-factors-uniquely-through-the-homotopy-category, def-cohomology-object-of-a-cochain-complex, def-complex-homotopy-and-contractibility-in-an-additive-category, def-type-a-soergel-bimodule-for-a-simple-reflection, def-type-a-standard-graph-bimodules-support-filtrations-and-character]
justified_by: []
aliases: []
proof_strategy: direct
generation:
  role: counterexample
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  scraped: []
  references:
    - title: "Eugene Gorsky, Oscar Kivinen, José Simental, Algebra and geometry of link homology: Lecture Notes from the IHES 2021 Summer School, Bull. London Math. Soc. 55 (2023) 537-591, §3.1"
      url: "https://arxiv.org/pdf/2108.10356"
      locator: "Remark 3.7 (the derived and homotopy worlds must not be conflated) and Lemma 3.8, printed pp. 541-545"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement refuted

The following statement is refuted: two bounded complexes with terms in
$\mathrm{SBim}_n$ and the same alternating class in
$K_0^{\mathrm{split}}(\mathrm{SBim}_n)$ are homotopy equivalent (equivalently,
the Euler or Hecke class determines the homotopy type).

## Facts & Assumptions

**Given:** A simple reflection $s_i$, the bimodule $B_i=R\otimes_{R^{s_i}}R(1)$ with generators $u=1\otimes1$ of degree $-1$ and $w_0=1\otimes\delta_i$, $\delta_i=\alpha_i/2$, the standard graph bimodule $R_{s_i}$ of [[def-type-a-standard-graph-bimodules-support-filtrations-and-character]], and the two-term complexes $Z_i=[B_i\xrightarrow{\ 0\ }R(1)]$ and $F_i=[B_i\xrightarrow{\varepsilon_i}R(1)]$ of [[def-positive-and-negative-rouquier-generator-complexes]].

[F1] *Equal classes.* $\chi(F_i)=[B_i]-[R(1)]$ in $K_0^{\mathrm{split}}(\mathrm{SBim}_n)$; the alternating class is the alternating sum of the term classes, so the zero-differential complex with the same two terms in the same cohomological degrees has the same class $\chi(Z_i)=[B_i]-[R(1)]$, and under the identification $\Phi$ of the split Grothendieck ring with the Hecke algebra this class corresponds to $H_i-v$. ([[lem-euler-class-of-a-rouquier-complex-is-homotopy-invariant-and-multiplicative]], [[prop-decategorification-of-a-rouquier-complex-is-the-hecke-braid-generator]])

[F2] *Cohomology of the generator complex.* $H^0(F_i)=\ker\varepsilon_i\cong R_{s_i}(-1)$ and $H^1(F_i)=\operatorname{coker}\varepsilon_i=0$, all other cohomology of $F_i$ being zero. ([[lem-rouquier-generator-complexes-have-canonical-derived-graph-models]])

[F3] *Cohomology of the zero-differential complex.* For the bounded complex $Z_i$ with zero differential, $H^0(Z_i)=B_i$, $H^1(Z_i)=R(1)$ and all other cohomology is zero. ([[def-cohomology-object-of-a-cochain-complex]])

[F4] *Left $R$-ranks.* $B_i$ is finite free of rank two as a left $R$-module, while $R_{s_i}$ and its shifts are free of rank one as left $R$-modules; an isomorphism of graded bimodules restricts to an isomorphism of left $R$-modules, and isomorphic free modules have equal rank. ([[def-type-a-soergel-bimodule-for-a-simple-reflection]], [[def-type-a-standard-graph-bimodules-support-filtrations-and-character]])

[F5] *Invariance of cohomology.* Homotopy equivalent complexes have isomorphic cohomology objects, because homology factors through the homotopy category. ([[thm-homology-factors-uniquely-through-the-homotopy-category]], [[def-complex-homotopy-and-contractibility-in-an-additive-category]])

## Counterexample

As a counterexample take the zero-differential complex
$$Z_i:=\bigl[\;B_i\xrightarrow{\ 0\ }R(1)\;\bigr]$$
with $B_i$ in cohomological degree $0$ and $R(1)$ in degree $1$, and the
Rouquier generator complex $F_i=[B_i\xrightarrow{\varepsilon_i}R(1)]$. Both have
the same alternating class
$$\chi(Z_i)=\chi(F_i)=[B_i]-[R(1)]\in K_0^{\mathrm{split}}(\mathrm{SBim}_n),\qquad \Phi(\chi(Z_i))=\Phi(\chi(F_i))=H_i-v\in H_{S_n},$$
but $H^0(Z_i)=B_i$ and $H^1(Z_i)=R(1)$, whereas $H^0(F_i)=R_{s_i}(-1)$ and
$H^1(F_i)=0$. Since $B_i$ is free of rank two as a left $R$-module while
$R_{s_i}(-1)$ is free of rank one, the two complexes are not quasi-isomorphic
and hence, by homotopy invariance of cohomology, not homotopy equivalent. Thus
the decategorification map loses the differential data already at the level of
the generators.

**Proof technique:** direct.

1.1 *The classes agree.* By [F1] the generator complex has class $\chi(F_i)=[B_i]-[R(1)]$, and $Z_i$ has the same two terms in the same cohomological degrees with zero differential, so its alternating class is the same alternating sum, $\chi(Z_i)=[B_i]-[R(1)]=\chi(F_i)$; under $\Phi$ both correspond to $H_i-v$. [F1]

1.2 *The cohomology differs.* By [F3] $H^0(Z_i)=B_i$ and $H^1(Z_i)=R(1)$, whereas by [F2] $H^0(F_i)\cong R_{s_i}(-1)$ and $H^1(F_i)=0$; in particular $H^1(Z_i)$ is nonzero while $H^1(F_i)=0$, and the two left $R$-modules $H^0(Z_i)$ and $H^0(F_i)$ have different ranks. [F2, F3, F4]

2.1 *They are not homotopy equivalent.* By [F4] the left $R$-module $B_i$ has rank two while $R_{s_i}(-1)$ has rank one, so $H^0(Z_i)\not\cong H^0(F_i)$; independently $H^1(Z_i)\not\cong H^1(F_i)$. If $Z_i$ and $F_i$ were homotopy equivalent, [F5] would make their cohomology objects isomorphic, a contradiction; hence $Z_i\not\simeq F_i$ although their classes agree, which refutes the statement. [F4, F5, step 1.1, step 1.2] ∎

## Remarks

The counterexample uses no choice. The same phenomenon is why the derived comparisons and the homotopy-category comparisons of this page must not be conflated: in the derived category the Rouquier complexes become isomorphic to shifted graph models, while in the homotopy category the differentials carry information that the alternating class forgets already for the generators. The statement refuted is the general claim; the example above does not refute the weaker statement that two complexes with equal class and equal cohomology are homotopy equivalent, which is not claimed here in either direction.
