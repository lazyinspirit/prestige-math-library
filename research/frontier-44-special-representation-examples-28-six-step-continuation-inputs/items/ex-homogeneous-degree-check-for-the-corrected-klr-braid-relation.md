---
id: ex-homogeneous-degree-check-for-the-corrected-klr-braid-relation
kind: example
title: "Homogeneous degree check for the corrected KLR braid relation"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 14
deps: [def-type-a-cyclotomic-specialization-of-the-qg-klr-algebras,
       def-klr-grading-and-diagrammatic-composition]
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
    - title: "Mikhail Khovanov and Aaron D. Lauda, A diagrammatic approach to categorification of quantum groups I, arXiv:0803.4121v3, Represent. Theory 13 (2009) 309–347 (complete 53-page article)"
      url: "https://arxiv.org/pdf/0803.4121"
      locator: "Sections 2.1–2.2: local relations (2.3)–(2.8) and the grading (2.12) (deg dot = 2, deg crossing = −i·j); Section 2.3 polynomial representation and Theorem 2.5."
    - title: "Jonathan Brundan and Alexander Kleshchev, Blocks of cyclotomic Hecke algebras and Khovanov-Lauda algebras, arXiv:0808.2032v3, Invent. Math. 178 (2009) 451–484 (complete 32-page article)"
      url: "https://arxiv.org/pdf/0808.2032"
      locator: "Introduction pp. 1–5 (quiver, (1.1)–(1.4), Main Theorem (1.6)–(1.15), Corollaries 1–2); Section 2 (2.1)–(2.7), Lemmas 2.1–2.2; Sections 3.1–3.5 pp. 7–19; Sections 4.1–4.5 pp. 19–27; Section 6 pp. 29–31."
    - title: "Alexander Kleshchev, Representation theory of symmetric groups and related Hecke algebras, arXiv:0909.4844v1, Bull. AMS 47 (2010) 419–481 (complete 66-page survey)"
      url: "https://arxiv.org/pdf/0909.4844"
      locator: "Sections 2.7–2.8: Definition 2.7 and Theorem 2.8 with Corollaries 2.9–2.10 (pp. 12–13); Section 2.11 Definition 2.14 (affine KLR), pp. 22–23."
---

## Example

In the specialized cyclotomic KLR algebra of
[[def-type-a-cyclotomic-specialization-of-the-qg-klr-algebras]] use the
grading $\deg e(i)=0$, $\deg y_r=2$,
$\deg\psi_re(i)=-a_{i_r,i_{r+1}}$
([[def-klr-grading-and-diagrammatic-composition]]). Fix a triple
$i=(i_r,i_{r+1},i_{r+2})$ and put
$$d(i):=-a_{i_ri_{r+1}}-a_{i_ri_{r+2}}-a_{i_{r+1}i_{r+2}},$$
the degree of both three-crossing words $\psi_r\psi_{r+1}\psi_re(i)$ and
$\psi_{r+1}\psi_r\psi_{r+1}e(i)$, computed on the successive permuted colour
pairs. Then both sides of the corrected braid relation are homogeneous of degree $d(i)$ and the
correction term has the same degree: it is $\pm1$ (degree $0$) when
$i_{r+2}=i_r\to i_{r+1}$ or $i_{r+2}=i_r\leftarrow i_{r+1}$, it is
$y_r+y_{r+2}-2y_{r+1}$ (degree $2$) when
$i_{r+2}=i_r\rightleftarrows i_{r+1}$ (the $e=2$ double edge), and it is $0$
otherwise. In particular the single-edge corrected braid relations have
degree $0$ and the $e=2$ double-edge corrected braid relation has degree $2$;
both match the two sides.

## Verification

**Proof technique:** direct.

**Given:** The specialized cyclotomic KLR algebra with the grading above, a

fixed colour triple $i$, and the cyclic Cartan entries ($a_{mm}=2$,

$a_{m,m\pm1}=-1$ for $e\ge3$, and $a_{01}=a_{10}=-2$ for $e=2$).

1.1 The common degree of the two words. The three crossings of $\psi_r\psi_{r+1}\psi_re(i)$ cross the colour pairs $(i_r,i_{r+1})$, $(i_r,i_{r+2})$, $(i_{r+1},i_{r+2})$ of the successive permuted sequences, so its degree is $d(i)$; the other braid word has the same multiset of crossed pairs, hence the same degree $d(i)$. [given, algebra]

1.2 The four cases of the correction. Substituting the cyclic Cartan entries: (a) if $i_{r+2}=i_r\to i_{r+1}$ then $d(i)=-(-1)-2-(-1)=0$ and the correction is $+1$; (b) if $i_{r+2}=i_r\leftarrow i_{r+1}$ then $d(i)=0$ and the correction is $-1$; (c) if $e=2$ and $i_{r+2}=i_r\rightleftarrows i_{r+1}$, then $a_{i_ri_{r+1}}=a_{i_{r+1}i_{r+2}}=-2$ and $a_{i_ri_{r+2}}=a_{00}=2$, so $d(i)=2+2-2=2$, matching the degree $2$ of $y_r+y_{r+2}-2y_{r+1}$; (d) in all other cases the correction is $0$. This is the source's case list, and the nonzero correction requires equal outer colours, while zero corrections remain homogeneous without asserting that their degree is zero. [given, algebra]

2.1 Conclusion. In each nonzero case the correction term has degree $d(i)$, equal to the common degree of the two braid words computed in step 1.1; in the remaining cases the correction vanishes, so the identity is homogeneous at degree $d(i)$. Hence the single-edge corrected braid relations have degree $0$ and the $e=2$ double-edge corrected braid relation has degree $2$, both matching the two sides. The displayed source word order is $\psi_r\psi_{r+1}\psi_r-\psi_{r+1}\psi_r\psi_{r+1}$, which equals the native opposite-order $\tau$-difference under $\psi=-\tau$. No choice is used. [step 1.1, step 1.2] ∎

