---
page: klr-algebras-induction-and-quantum-serre-categorification-examples
title: "KLR Algebras, Induction, and Quantum-Serre Categorification — Examples"
status: draft
requires: [klr-algebras-induction-and-quantum-serre-categorification]
items: []
examples: [ex-klr-algebras-in-root-degrees-alpha-i-and-two-alpha-i, ex-the-two-vertex-klr-polynomial-representation, ex-the-double-edge-klr-braid-correction, ex-a-nil-hecke-divided-power-projective, cex-degenerate-q-ij-polynomials-destroy-the-faithful-basis-route]
---

**Objective.** This companion page calibrates the generic theory of
[[klr-algebras-induction-and-quantum-serre-categorification]] on the smallest
concrete KLR algebras and on the exact boundaries of its hypotheses. Every item
is a dependency leaf: nothing elsewhere in the library depends on it, and each
verification is a finite computation inside a rank-one, rank-two or two-colour
KLR algebra.

## What the examples show

- [[ex-klr-algebras-in-root-degrees-alpha-i-and-two-alpha-i]] computes the two
  lowest weights: $R(\alpha_i)=k[x_1]$ with its unique simple and projective
  cover, and $R(2\alpha_i)\cong NH_2$ with basis
  $\{x_1^ax_2^b,x_1^ax_2^b\tau_1\}$, relations $\tau_1^2=0$,
  $\tau_1x_1=x_2\tau_1+e(ii)$, $\tau_1x_2=x_1\tau_1-e(ii)$, graded dimension
  $(1+q^{-2d_i})/(1-q^{2d_i})^2$ and the idempotent $e_{i,2}=x_1\tau_1$.
- [[ex-the-two-vertex-klr-polynomial-representation]] runs the two-colour
  polynomial representation in both parameter cases $a_{ij}=0$ and
  $a_{ij}=-1$: the four-dimensional PBW basis, the degree-zero corner
  isomorphism $Re(ij)\cong Re(ji)$ giving $[P_{ij}]=[P_{ji}]$, the explicit
  action with the factor $x_1+x_2$, and the simply-laced Serre relation
  $[P_{iji}]=[P_{i(2)j}]+[P_{ji(2)}]$.
- [[ex-the-double-edge-klr-braid-correction]] exhibits the genuinely
  non-simply-laced feature: for the affine double edge
  $Q_{ij}=-(u-v)^2$ the braid correction on $(i,j,i)$ is
  $x_1+x_3-2x_2\ne0$, of degree $2=-2b_{ij}-2d_i$, in contrast to the
  degree-zero constant of a simple edge.
- [[ex-a-nil-hecke-divided-power-projective]] verifies the rank-two
  divided-power projective: $\psi(e_{i,2})$ is the rank-one projection whose
  left ideal is the polynomial representation, $[P_{i,2}]=\gamma(\theta_i^{(2)})$
  and the self-pairing is $(1-q_i^2)^{-1}(1-q_i^4)^{-1}$.

## What the counterexample shows

- [[cex-degenerate-q-ij-polynomials-destroy-the-faithful-basis-route]] refutes
  the claim that the faithful polynomial-representation route needs only the
  hermitian symmetry and the degree condition. With $Q_{ij}=Q_{ji}=0$ every
  factorization forfeits one corner and the action kills the nonzero element
  $\tau_1e(ij)$; with the degree-correct non-hermitian pair $u+2v,u+v$ (over
  characteristic $\ne2$) associativity forces
  $\tau_1x_2e(ij)=x_1\tau_1e(ij)=0$, so Rouquier's spanning family is not
  linearly independent. The example explicitly does not claim that the
  degenerate algebra ceases to be free; it localises the failure in the
  faithful-representation route with its two nonvanishing hypotheses.

Together the five items pin the conventions of the main page — crossing signs,
factorizations, the crossed-pair shift, and the exact role of the
nonvanishing conditions (Q1) and (Q4).
