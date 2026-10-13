---
id: ex-a-nil-hecke-divided-power-projective
kind: example
title: "The nil-Hecke divided-power projective in rank two"
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-divided-power-klr-idempotents-and-projectives, ex-klr-algebras-in-root-degrees-alpha-i-and-two-alpha-i, thm-klr-projective-grothendieck-group-satisfies-the-negative-quantum-serre-relations, def-the-klr-cartan-pairing, lem-klr-module-categories-are-krull-schmidt-with-shift-orbit-bases, thm-klr-cartan-pairing-agrees-with-lusztigs-bilinear-form]
justified_by: []
aliases: []
landmark: false
dependency_level: 9
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'Mikhail Khovanov and Aaron D. Lauda, A diagrammatic approach to categorification of quantum groups I, Representation Theory 13 (2009) 309-347, arXiv:0803.4121v2'
      url: 'https://arxiv.org/pdf/0803.4121'
      locator: '§2.2, Example 3 and the paragraph defining $e_m$, $\psi(e_m)$, the polynomial representation and $NH_m\cong P_m^{[m]!}$, printed pp. 10-15; §3.1 and Example 3.23, printed pp. 43-45: indecomposability of $P_{i(m)}$ and $\gamma(\theta_i^{(m)})=[P_{i(m)}]$.'
    - title: 'Raphael Rouquier, 2-Kac-Moody Algebras, arXiv:0812.5023v3 (66 pages)'
      url: 'https://arxiv.org/pdf/0812.5023'
      locator: '§3.1.6-§3.1.7, printed pp. 20-23: the nil affine Hecke algebra, its polynomial representation and its symmetrizing form; §3.2.3, Lemma 3.13: the divided-power projective complexes.'
---

## Example

Work in $R(2\alpha_i)\cong NH_2$ of [[ex-klr-algebras-in-root-degrees-alpha-i-and-two-alpha-i]]: generators $x_1,x_2$ of degree $2d_i$ and $\tau=\tau_1$ of degree $-2d_i$, the basis $\{x_1^ax_2^b,x_1^ax_2^b\tau\}$, the relations $\tau^2=0$, $\tau x_1=x_2\tau+e$, $\tau x_2=x_1\tau-e$, and center $k[x_1,x_2]^{S_2}$. Then:
(a) $e_{i,2}:=x_1\tau$ is a nonzero idempotent of degree $0$ and $\psi(e_{i,2})=\tau x_1$ is the reflected idempotent; the module $P_{i,2}:=R(2\alpha_i)\psi(e_{i,2})\{-d_i\}$ is the polynomial representation of $NH_2$ shifted by $-d_i$, an indecomposable graded projective with one-dimensional degree-zero endomorphism ring, and it is the projective cover of the unique graded simple $R(2\alpha_i)$-module up to shift.
(b) $R(2\alpha_i)\cong P_{i,2}\{d_i\}\oplus P_{i,2}\{-d_i\}$ with $[2]_{q_i}!=(q_i+q_i^{-1})$, so $P_{i,2}$ is the unique indecomposable projective summand up to shift.
(c) In $K_0(R)$, $[P_{i,2}]=\gamma(\theta_i^{(2)})$ for the divided power $\theta_i^{(2)}=F_i^2/[2]_{q_i}$, and its self-pairing is $([P_{i,2}],[P_{i,2}])=(1-q_i^2)^{-1}(1-q_i^4)^{-1}$, the value of the Lusztig-normalized form at $\theta_i^{(2)}$.

## Facts & Assumptions

**Given:** The rank-two nil-Hecke algebra $R(2\alpha_i)=NH_2$ with its basis and relations of [[ex-klr-algebras-in-root-degrees-alpha-i-and-two-alpha-i]] over a field $k$, the idempotent and projective definitions of [[def-divided-power-klr-idempotents-and-projectives]], and the pairing and form comparison of [[def-the-klr-cartan-pairing]] and [[thm-klr-cartan-pairing-agrees-with-lusztigs-bilinear-form]].

[F1] Rank-two relations ([[ex-klr-algebras-in-root-degrees-alpha-i-and-two-alpha-i]]): $\tau^2=0$, $\tau x_1=x_2\tau+e(ii)$, $\tau x_2=x_1\tau-e(ii)$, PBW basis $\{x_1^ax_2^b,x_1^ax_2^b\tau\}$, and $\deg x_a=2d_i$, $\deg\tau=-2d_i$.

[F2] Divided powers ([[def-divided-power-klr-idempotents-and-projectives]]): for $n=2$, $e_{i,2}=x_1\tau$ is a nonzero idempotent of degree $0$, $P_{i,2}=R(2\alpha_i)\psi(e_{i,2})\{-d_i\}$ is the unique indecomposable projective summand up to shift, and $[P_{i,2}]=\gamma(\theta_i^{(2)})$ by [[thm-klr-projective-grothendieck-group-satisfies-the-negative-quantum-serre-relations]], clause (iii).

[F3] Pairing values ([[def-the-klr-cartan-pairing]], [[thm-klr-cartan-pairing-agrees-with-lusztigs-bilinear-form]]): $([P_i],[P_i])=(1-q_i^2)^{-1}$ and for the divided power $([P_{i,n}],[P_{i,n}])=\prod_{a=1}^n(1-q_i^{2a})^{-1}$.

[F4] Krull-Schmidt ([[lem-klr-module-categories-are-krull-schmidt-with-shift-orbit-bases]]): finite graded projective decompositions are unique up to order and shift.

## Verification

**Proof technique:** direct computation in rank two.

1.1 (a) Using [F1], $e_{i,2}^2=x_1\tau x_1\tau=x_1(x_2\tau+e)\tau=x_1x_2\tau^2+x_1\tau=x_1\tau=e_{i,2}$ because $\tau^2=0$, and $e_{i,2}\ne0$ because $x_1\tau$ is a basis monomial; its degree is $2d_i+(-2d_i)=0$. Likewise $\psi(e_{i,2})^2=\tau x_1\tau x_1=(x_2\tau+e)\tau x_1=x_2\tau^2x_1+\tau x_1=\tau x_1$, so $\psi(e_{i,2})$ is an idempotent of degree $0$. The left ideal $R(2\alpha_i)\psi(e_{i,2})$ is the polynomial representation: the map $a\psi(e_{i,2})\mapsto a\cdot1$ is surjective onto $k[x_1,x_2]$ because $\psi(e_{i,2})1=1$, and its inverse sends $f$ to $f\tau x_1$; the two maps are inverse because $\psi(e_{i,2})$ is the rank-one projection exhibiting $NH_2=\operatorname{End}_{k[x_1,x_2]^{S_2}}(k[x_1,x_2])$, so the module is indecomposable projective and its homogeneous endomorphism algebra is the symmetric polynomial ring $k[x_1,x_2]^{S_2}$, whose degree-zero part is $k$. As a projective with simple head it is the projective cover of the unique graded simple column $k[x_1,x_2]/(x_1+x_2,x_1x_2)$, of dimension $2$, up to shift. The positive symmetric-center ideal gives its simple quotient; its kernel is graded superfluous by the least-degree argument, or by the matrix equivalence with the connected positively graded center; the displayed shift $-d_i$ is the one fixed in [F2] and does not affect these statements except by transport. [given, F1, F2, algebra]

2.1 (b) The endomorphism ring computation of step 1.1 shows $R(2\alpha_i)\cong\operatorname{End}_{k[x_1,x_2]^{S_2}}(k[x_1,x_2])$ as a graded module over itself, and this is the direct sum of $2=[2]_i!|_{q_i=1}$ shifted copies of the polynomial column $P_{i,2}$: the polynomial ring is free of rank $2$ over its symmetric subring with basis $\{1,x_1\}$ (or the Artin monomials $\{1,x_1\}$ for $m=2$), so the duals of the two basis monomials have degrees $0,-2d_i$, so the regular module is $V\oplus V\{-2d_i\}$ for the polynomial column $V$. Since $P_{i,2}=V\{-d_i\}$, this is $P_{i,2}\{d_i\}\oplus P_{i,2}\{-d_i\}$. By [F4] the decomposition into indecomposables is unique up to order and shift, so $P_{i,2}$ is the unique indecomposable projective summand up to shift. The graded multiplicity in the normalization of [F2] is $[2]_{q_i}!=[1]_{q_i}[2]_{q_i}=1\cdot(q_i+q_i^{-1})$, the value recorded in the statement, and at $q_i=1$ it is the ungraded multiplicity $2$; the two polynomial columns carry the permutation shifts of the two Artin monomials and are absorbed by this normalization. [step 1.1, F2, F4, algebra]

3.1 (c) The class identification $[P_{i,2}]=\gamma(\theta_i^{(2)})$ is [F2] with $n=2$. The self-pairing is the rank-$n$ value of [F3] at $n=2$: $([P_{i,2}],[P_{i,2}])=\prod_{a=1}^2(1-q_i^{2a})^{-1}=(1-q_i^2)^{-1}(1-q_i^4)^{-1}$, which is the Lusztig-normalized value $B_L(\theta_i^{(2)},\theta_i^{(2)})$ by the form comparison. [step 2.1, F2, F3, algebra] ∎
