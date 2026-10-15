---
id: ex-hh-two-dimensional-comodule-coefficient-matrix
kind: example
title: "A two-dimensional comodule and its coefficient matrix"
status: draft
origin: pipeline
pipeline_run: hopf-hecke-unfinished-15-2026-10-15
dependency_level: 3
deps: [def-hh-right-comodule-and-comodule-morphism, lem-hh-comodule-kernels-quotients-and-coefficient-identities, lem-hh-finite-comatrix-coalgebra-exists]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Daniel Kongsgaard and UCSD Math 207A, Hopf Algebras Lecture Notes, Spring 2020"
      url: "https://mathweb.ucsd.edu/~drogalsk/207a-s20-lecturenotes.pdf"
      locator: "§1.6, printed pp.11–15; Examples 1.15–1.16, pp.13–14; §§3.3–3.4, printed pp.36–41"
    - title: "William Chin, A Brief Introduction to Coalgebra Representation Theory"
      url: "https://condor.depaul.edu/~wchin/crt.pdf"
      locator: "§2, printed pp.2–3"
---
## Example

Let $C=E_2$ be the two-dimensional comatrix coalgebra from [[lem-hh-finite-comatrix-coalgebra-exists]], with basis $c_{11},c_{12},c_{21},c_{22}$ and structure
$$
\Delta(c_{ij})=\sum_{\ell=1}^2c_{i\ell}\otimes c_{\ell j},
\qquad
\varepsilon(c_{ij})=\delta_{ij}.
$$
Let $M$ have basis $v_1,v_2$ and set
$$
\rho(v_j)=\sum_{i=1}^2v_i\otimes c_{ij}.
$$
Then $M$ is a right $C$-comodule and its coefficient matrix is $(c_{ij})$.

## Facts & Assumptions

**Given:** A field $k$, the two-dimensional comatrix coalgebra structure above, and the two-dimensional vector space $M$ with basis $v_1,v_2$.

[F1] A right coaction must satisfy $(\rho\otimes\operatorname{id})\rho=(\operatorname{id}\otimes\Delta)\rho$ and $(\operatorname{id}\otimes\varepsilon)\rho=\operatorname{id}$. ([[def-hh-right-comodule-and-comodule-morphism]])

[F2] For a finite basis, coefficient identities $\Delta(c_{ij})=\sum_\ell c_{i\ell}\otimes c_{\ell j}$ and $\varepsilon(c_{ij})=\delta_{ij}$ define a right-comodule structure by the displayed basis formula. ([[lem-hh-comodule-kernels-quotients-and-coefficient-identities]])

[F3] For $n=2$, [[lem-hh-finite-comatrix-coalgebra-exists]] supplies the basis $c_{ij}$, the displayed coproduct and counit, and a proof that the assignments extend linearly and satisfy coassociativity and both counit identities.

## Verification

**Given:** The basis and coefficient maps of $E_2$ and the two-dimensional vector space $M$.

1.1 Define $\rho$ on $v_1,v_2$ by the two displayed finite sums and extend linearly. Since $v_1,v_2$ is a basis, this determines a unique linear map $M\to M\otimes C$. [given, F1, construct]

2.1 For $j=1,2$, expand the left coaction composite as $(\rho\otimes\operatorname{id})\rho(v_j)=\sum_{i,\ell=1}^2v_i\otimes c_{i\ell}\otimes c_{\ell j}$. The right composite is $(\operatorname{id}\otimes\Delta)\rho(v_j)=\sum_{i,\ell=1}^2v_i\otimes c_{i\ell}\otimes c_{\ell j}$ using the coproduct formula in [F3]. Thus the composites agree on the basis and hence on every vector. [F1, F3, step 1.1, algebra]

2.2 For $j=1,2$, $(\operatorname{id}\otimes\varepsilon)\rho(v_j)=\sum_{i=1}^2v_i\delta_{ij}=v_j$. Linearity extends the counit identity to all of $M$. Together with the coalgebra structure on $C$ from [F3], this makes the displayed map a right coaction. [F1, F3, step 1.1, algebra]

3.1 By the ordered basis formula for a right coaction, the coefficient in row $i$, column $j$ is exactly $c_{ij}$; the identities in [F2] are the corresponding comatrix identities. [F2, step 1.1, step 2.1, step 2.2]

4.1 Steps 1.1, 2.1, and 2.2 verify the right coaction equations using the finite comatrix coalgebra of [F3], and step 3.1 identifies its coefficient matrix. [F3, step 1.1, step 2.1, step 2.2, step 3.1] ∎
