---
id: ex-steinberg-representation-and-nonzero-monodromy
kind: example
title: "Steinberg representation and nonzero monodromy"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 15
deps:
  - def-local-field-valuation-ring-uniformizer-and-residue-field
  - def-smooth-admissible-representation-of-gln-over-a-p-adic-field
  - def-weil-deligne-representation-of-a-local-field
  - def-local-l-and-epsilon-factors-of-a-weil-deligne-representation
  - thm-local-langlands-correspondence-for-gl-n-over-p-adic-fields
  - thm-llc-segment-parameter-formula-for-gln
  - thm-bernstein-zelevinsky-classification-of-irreducible-admissible-gln-representations-by-segments
  - def-axiom-of-choice
  - def-dependent-choice
  - thm-choice-implies-dependent-implies-countable-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Torsten Wedhorn, The Local Langlands Correspondence for GL(n) over p-adic Fields, §§2.2.9, 2.2.13, 3.2.3, and 4.3.4"
      url: "https://arxiv.org/pdf/math/0011210"
    - title: "Masao Oi, Introduction to the Local Langlands Correspondence, §§5.5 and 6.2"
      url: "https://masaooi.github.io/LLC.pdf"
verification: {}
---

## Example

Assume the Axiom of Choice and let $K$ be a finite extension of $\mathbb Q_p$ with residue cardinality $q$. Let $G=\mathrm{GL}_n(K)$ and let $B$ be its subgroup of upper triangular matrices. For $b\in B(K)$ put $\delta_B(b)=\prod_{i<j}|b_{ii}/b_{jj}|_K$. For $n\ge2$, let $\mathrm{St}_n$ be the unique irreducible quotient of the right-translation representation on locally constant functions $f:G\to\mathbb C$ satisfying
$$f(bg)=\delta_B(b)^{1/2}\prod_{i=1}^n |b_{ii}|_K^{(2i-n-1)/2} f(g)\qquad(b\in B(K),\ g\in G).$$
Let $\mathrm{Sp}(n)$ be the Weil–Deligne representation with basis $e_0,\ldots,e_{n-1}$, Weil action $r(w)e_j=|w|_K^j e_j$, and monodromy operator $Ne_j=e_{j+1}$ for $j<n-1$, $Ne_{n-1}=0$. Under the local Langlands correspondence, $\mathrm{St}_n$ has parameter $|\cdot|_K^{(1-n)/2}\mathrm{Sp}(n)$. This parameter has nonzero nilpotent monodromy for $n\ge2$, and its Galois-side local $L$-factor is
$$L_K(s,|\cdot|_K^{(1-n)/2}\mathrm{Sp}(n))=(1-q^{-s-(n-1)/2})^{-1}.$$

## Example references

[[def-local-field-valuation-ring-uniformizer-and-residue-field]]

[[def-smooth-admissible-representation-of-gln-over-a-p-adic-field]]

[[def-weil-deligne-representation-of-a-local-field]]

[[def-local-l-and-epsilon-factors-of-a-weil-deligne-representation]]

[[thm-local-langlands-correspondence-for-gl-n-over-p-adic-fields]]

[[thm-llc-segment-parameter-formula-for-gln]]

[Torsten Wedhorn, *The Local Langlands Correspondence for GL(n) over p-adic Fields*, §§2.2.9, 2.2.13, 3.2.3, and 4.3.4](https://arxiv.org/pdf/math/0011210)

[Masao Oi, *Introduction to the Local Langlands Correspondence*, §§5.5 and 6.2](https://masaooi.github.io/LLC.pdf)

[[def-axiom-of-choice]]

[[def-dependent-choice]]

[[thm-choice-implies-dependent-implies-countable-choice]]
## Facts & Assumptions

**Given:** The Axiom of Choice, $K$, $q$, $n\ge2$, and $\mathrm{St}_n$ as in the Example.

[A1] [[def-axiom-of-choice]]: AC selects from every family of nonempty sets.

[A2] [[def-dependent-choice]]: DC supplies a serial path from any prescribed initial point.

[F6] [[thm-choice-implies-dependent-implies-countable-choice]]: in ZF, AC implies DC and hence meets the separate DC hypothesis of the local Artin supplier.


[F1] [[def-weil-deligne-representation-of-a-local-field]]: $r(w)Nr(w)^{-1}=|w|_KN$ and Frobenius-semisimplicity means that $r(\Phi)$ is diagonalizable for a geometric Frobenius lift.

[F2] [[def-local-l-and-epsilon-factors-of-a-weil-deligne-representation]]: $L_K(s,(r,V,N))=\det(1-q^{-s}r(\Phi)\mid(\ker N)^{I_K})^{-1}$.

[L1] [[thm-bernstein-zelevinsky-classification-of-irreducible-admissible-gln-representations-by-segments]]: the existence and uniqueness of the irreducible quotient used to define $\mathrm{St}_n$ require the segment classification; no such proof item is supplied on the current run manifest.

[F3] [[thm-local-langlands-correspondence-for-gl-n-over-p-adic-fields]]: every irreducible admissible representation has its uniquely normalized Weil–Deligne parameter.

[L2] [[thm-llc-segment-parameter-formula-for-gln]]: the segment classification must identify the LLC parameter of the unique irreducible quotient of the stated principal series with $|\cdot|_K^{(1-n)/2}\mathrm{Sp}(n)$. No proof of this specialized correspondence is supplied in the active run.

## Verification

**Given:** The data in the Example.

1.1 The operator $N$ satisfies $N^n=0$ and $N\ne0$ because $Ne_0=e_1$ for $n\ge2$. For every $w\in W_K$ and $j<n-1$,
$$r(w)Nr(w)^{-1}e_j=|w|_K^{j+1}|w|_K^{-j}e_{j+1}=|w|_KNe_j,$$
and both sides vanish on $e_{n-1}$. Twisting $r$ by the scalar character $|\cdot|_K^{(1-n)/2}$ leaves this relation unchanged. Since inertia has $|i|_K=1$, it acts trivially, and geometric Frobenius acts diagonally; hence the displayed pair is a Frobenius-semisimple Weil–Deligne representation. [A1, F1, given, algebra]

1.2 Its kernel of monodromy is the line $\mathbb C e_{n-1}$, on which geometric Frobenius acts by $q^{-(n-1)/2}$. The $L$-factor definition therefore gives $(1-q^{-s-(n-1)/2})^{-1}$. The identification of this pair with the Steinberg parameter is the unresolved segment-parameter supplier [L2]; the source statement is recorded, but the present library has no proof body for that supplier. [A1, A2, F2, F3, F6, L2, step 1.1, algebra]
