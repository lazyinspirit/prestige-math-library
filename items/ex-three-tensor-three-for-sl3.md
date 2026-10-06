---
id: ex-three-tensor-three-for-sl3
kind: example
title: Three times three for sl3
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 7
deps:
  - prop-direct-sum-dual-hom-and-tensor-representations
  - def-symmetric-and-exterior-powers-over-an-arbitrary-field
  - thm-weyls-complete-reducibility-theorem
  - def-axiom-of-choice
  - def-tensor-product-multiplicity-for-highest-weight-modules
  - cor-minuscule-tensor-product-rule
  - def-minuscule-weight
  - lem-minuscule-weights-are-the-weyl-orbit
  - thm-highest-weight-classification-of-finite-dimensional-irreducible-representations
  - prop-root-systems-of-the-classical-complex-lie-algebras
  - def-classical-complex-matrix-lie-algebras
  - def-fundamental-weights
  - def-integral-dominant-and-strictly-dominant-weights
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "P. Etingof, Lie Groups and Lie Algebras II (MIT 18.755, Spring 2024), complete lecture notes"
      url: "https://ocw.mit.edu/courses/18-755-lie-groups-and-lie-algebras-ii-spring-2024/mit18_755_s24_lec_full.pdf"
      locator: "§27.2--27.3, printed pp. 145--147 (the standard representation of $\\mathfrak{sl}_3$ and tensor products), §30.2 Corollary 30.7 and its proof, printed pp. 159--160 (tensor product with a minuscule representation)."
    - title: "T. Seynnaeve, Representation Theory (lecture notes, Bern)"
      url: "https://timseynnaeve.github.io/misc/Rep_Theory_Notes.pdf"
      locator: "Ch. 9 Remarks 9.4--9.6, printed pp. 51--52 (weights of polynomial representations, powers and exterior powers of the standard representation)."
---

## Example

Assume the Axiom of Choice. Take $\mathfrak g=\mathfrak{sl}_3$ with simple
roots $\alpha_1,\alpha_2$, positive roots
$\Phi^+=\{\alpha_1,\alpha_2,\alpha_1+\alpha_2\}$, Weyl vector
$\rho=\alpha_1+\alpha_2$, fundamental weights $\omega_1,\omega_2$, and let
$V=L(\omega_1)$ be the standard three-dimensional simple module
([[prop-root-systems-of-the-classical-complex-lie-algebras]],
[[def-classical-complex-matrix-lie-algebras]], [[def-fundamental-weights]],
[[thm-highest-weight-classification-of-finite-dimensional-irreducible-representations]]).
Then the tensor-product multiplicities of
[[def-tensor-product-multiplicity-for-highest-weight-modules]] are
$c^{2\omega_1}_{\omega_1\omega_1}=c^{\omega_2}_{\omega_1\omega_1}=1$ and all
others are zero, that is
$$L(\omega_1)\otimes L(\omega_1)\cong L(2\omega_1)\oplus L(\omega_2)=\operatorname{Sym}^2V\oplus\Lambda^2V,\qquad 3\otimes 3=6\oplus\bar 3,$$
with summands of dimensions $6$ and $3$; in particular the trivial module
$L(0)$ is not a summand. The same answer is obtained from
[[cor-minuscule-tensor-product-rule]]: $\omega_1$ is minuscule
([[def-minuscule-weight]]), its weight orbit is
$W\omega_1=\{\omega_1,\ \omega_2-\omega_1,\ -\omega_2\}$, the three weights of
$V$, each of multiplicity one
([[lem-minuscule-weights-are-the-weyl-orbit]]), and among the three translates
$\omega_1+\gamma$ exactly $2\omega_1$ and $\omega_2$ are dominant integral
while $\omega_1-\omega_2$ is not. Two consistency checks fix the omissions:
$L(0)$ is excluded because $-\omega_1\notin W\omega_1$, and the dimension
count is $\dim\operatorname{Sym}^2V+\dim\Lambda^2V=6+3=9=\dim(V\otimes V)$.

## Facts & Assumptions

**Given:** AC, $\mathfrak g=\mathfrak{sl}_3$ with its standard positive system and fundamental weights, and $V=L(\omega_1)$ of dimension $3$ with weights $\omega_1,\omega_2-\omega_1,-\omega_2$, each of multiplicity one.

[F1] On the diagonal Cartan, the standard basis vectors of $V=\mathbb C^3$ have weights $\varepsilon_1=\omega_1$, $\varepsilon_2=\omega_2-\omega_1$ and $\varepsilon_3=-\omega_2$, since $\omega_1=\varepsilon_1$, $\omega_2=\varepsilon_1+\varepsilon_2$ and $\varepsilon_1+\varepsilon_2+\varepsilon_3=0$. The positive roots are $\varepsilon_1-\varepsilon_2$, $\varepsilon_2-\varepsilon_3$, $\varepsilon_1-\varepsilon_3$; their coroot pairings with $\omega_1$ are $1,0,1$, so $\omega_1$ is minuscule. Root reflections exchange the corresponding coordinates, giving the displayed three-element orbit. The matrix units $E_{ij}$ show that $V$ is simple: applying them to a nonzero vector produces every basis vector; $e_1$ is killed by upper-triangular root vectors and has highest weight $\omega_1$. The minuscule tensor rule applies ([[prop-root-systems-of-the-classical-complex-lie-algebras]], [[def-fundamental-weights]], [[def-minuscule-weight]], [[thm-highest-weight-classification-of-finite-dimensional-irreducible-representations]], [[lem-minuscule-weights-are-the-weyl-orbit]], [[cor-minuscule-tensor-product-rule]]).

[F2] The trivial module $L(0)$ is the one-dimensional module of highest weight $0$, and a dominant integral weight has all simple-coroot pairings $\ge0$, whence $0\ne\omega_1$, $0\ne2\omega_1$, $0\ne\omega_2$. Since $\langle\omega_i,\alpha_j^\vee\rangle=\delta_{ij}$, the weight $\omega_1-\omega_2$ has pairings $\langle\omega_1-\omega_2,\alpha_1^\vee\rangle=1$ and $\langle\omega_1-\omega_2,\alpha_2^\vee\rangle=-1$, so it is not dominant ([[def-integral-dominant-and-strictly-dominant-weights]], [[def-fundamental-weights]]).

[F3] The flip $\tau(v\otimes w)=w\otimes v$ commutes with the diagonal Lie action. The projections $(I+\tau)/2$ and $(I-\tau)/2$ split $V\otimes V$ into symmetric and alternating subspaces, canonically isomorphic to the quotient powers of [[def-symmetric-and-exterior-powers-over-an-arbitrary-field]] via these projections. Their bases are $e_i\otimes e_i$ and $e_i\otimes e_j+e_j\otimes e_i$ for $i<j$, respectively $e_i\otimes e_j-e_j\otimes e_i$ for $i<j$, giving dimensions six and three. The nonzero vectors $e_1\otimes e_1$ and $e_1\otimes e_2-e_2\otimes e_1$ are killed by every upper-triangular root vector and have weights $2\omega_1$ and $\omega_2$. Complete reducibility therefore supplies a copy of each corresponding simple module in its respective subspace ([[prop-direct-sum-dual-hom-and-tensor-representations]], [[thm-weyls-complete-reducibility-theorem]], [[thm-highest-weight-classification-of-finite-dimensional-irreducible-representations]]).

## Verification

1.1 By [F1] the tensor product $L(\omega_1)\otimes L(\omega_1)$ is the direct sum of the $L(\omega_1+\gamma)$ over the three elements $\gamma\in W\omega_1=\{\omega_1,\omega_2-\omega_1,-\omega_2\}$, with terms labeled by non-dominant weights dropped. The three translates are $\omega_1+\omega_1=2\omega_1$, $\omega_1+(\omega_2-\omega_1)=\omega_2$ and $\omega_1-\omega_2$; by [F2] the first two are dominant integral and the third is not. Hence $c^{2\omega_1}_{\omega_1\omega_1}=c^{\omega_2}_{\omega_1\omega_1}=1$ and all other tensor-product multiplicities vanish. [F1, F2, given, algebra]

2.1 Identification with symmetric and exterior squares: by [F3] the submodule $\operatorname{Sym}^2V\subseteq V\otimes V$ is nonzero of dimension $6$ and has highest weight $2\omega_1$, so it contains $L(2\omega_1)$; similarly $\Lambda^2V$ is nonzero of dimension $3$ with highest weight $\omega_2$ and contains $L(\omega_2)$. The decomposition of step 1.1 has exactly the two summands $L(2\omega_1)$ and $L(\omega_2)$, so $9=\dim(V\otimes V)=\dim L(2\omega_1)+\dim L(\omega_2)$ with $\dim L(2\omega_1)\le6$ and $\dim L(\omega_2)\le3$; hence $\dim L(2\omega_1)=6=\dim\operatorname{Sym}^2V$ and $\dim L(\omega_2)=3=\dim\Lambda^2V$, and the inclusions are equalities: $\operatorname{Sym}^2V=L(2\omega_1)$ and $\Lambda^2V=L(\omega_2)$. [F1, F3, step 1.1, algebra]

3.1 The trivial module is not a summand: it would have to be one of the $L(\omega_1+\gamma)$ with $\omega_1+\gamma=0$, i.e. $\gamma=-\omega_1\in W\omega_1$; but the three elements of $W\omega_1$ listed in [F1] are distinct from $-\omega_1$ (equality would force $\omega_2=0$, $\omega_1=\omega_2$ or $\omega_1=0$). Hence $L(0)$ does not occur, consistent with the dimension count $6+3=9$. [F1, F2, step 1.1, step 2.1, algebra] ∎
