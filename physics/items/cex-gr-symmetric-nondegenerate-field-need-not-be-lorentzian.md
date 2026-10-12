---
id: cex-gr-symmetric-nondegenerate-field-need-not-be-lorentzian
kind: counterexample
title: "A smooth symmetric nondegenerate 2-tensor field of inertia (2,2,0)"
status: draft
origin: session
domain: mathematics
dependency_level: 2
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-smooth-covariant-two-tensor-field, def-gr-smooth-lorentzian-objects, def-lorentz-form-and-inertia, def-definiteness-inertia-and-signature-data-over-the-reals, cor-real-symmetric-bilinear-forms-are-classified-by-inertia, ex-euclidean-spaces-and-open-subsets-as-smooth-manifolds]
dependency_roles:
  def-gr-smooth-covariant-two-tensor-field: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-lorentz-form-and-inertia: mathematical-premise
  def-definiteness-inertia-and-signature-data-over-the-reals: mathematical-premise
  cor-real-symmetric-bilinear-forms-are-classified-by-inertia: mathematical-premise
  ex-euclidean-spaces-and-open-subsets-as-smooth-manifolds: mathematical-premise
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), the canonical form (2.34) and the distinction between Lorentzian and indefinite metrics, printed p. 49 (PDF p. 56)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "K. Conrad, Bilinear Forms (orthogonality, radicals, inertia)"
      url: "https://kconrad.math.uconn.edu/blurbs/linmultialg/bilinearform.pdf"
verification:
  precheck: pass
---

## Statement refuted

Statement refuted: "every smooth symmetric nondegenerate covariant $2$-tensor
field on a smooth four-manifold is a Lorentzian metric, so that
$g_p$ has inertia $(3,1,0)$ at every point"
([[def-gr-smooth-covariant-two-tensor-field]],
[[def-gr-smooth-lorentzian-objects]]).

## Facts & Assumptions

**Given:** $M=\mathbb R^4$ with its standard smooth structure and global identity chart, and the family $B=(B_p)$ of bilinear forms with constant components $\operatorname{diag}(1,1,-1,-1)$ in that chart.

[L1] A family of bilinear forms with $C^\infty$ components in the charts of an atlas is a smooth covariant $2$-tensor field; it is symmetric when the component matrix is symmetric and nondegenerate when the determinant of the component matrix is nowhere zero ([[def-gr-smooth-covariant-two-tensor-field]], [[ex-euclidean-spaces-and-open-subsets-as-smooth-manifolds]]).

[L2] The inertia of a real symmetric bilinear form is the triple $(p,q,r)$ of numbers of positive, negative and zero entries in any diagonalizing basis, and it is independent of that basis ([[def-definiteness-inertia-and-signature-data-over-the-reals]], [[cor-real-symmetric-bilinear-forms-are-classified-by-inertia]]).

[L3] A Lorentz form on a $4$-dimensional real vector space is a symmetric nondegenerate bilinear form with inertia $(3,1,0)$; a smooth Lorentzian four-manifold is a smooth four-manifold whose metric has this inertia at every point ([[def-lorentz-form-and-inertia]], [[def-gr-smooth-lorentzian-objects]]).

## Counterexample

1.1 The component matrix $\operatorname{diag}(1,1,-1,-1)$ is constant, hence $C^\infty$, and symmetric with determinant $1\neq0$; by [L1] the family $B$ is a smooth symmetric nondegenerate covariant $2$-tensor field on $M$. [L1, given]

1.2 In the global chart the matrix is already diagonal with two positive entries and two negative entries and no zero entry; by [L2] the inertia of each $B_p$ is therefore $(2,2,0)$, independent of any further basis choice. [L2, algebra]

2.1 Since $(2,2,0)\neq(3,1,0)$, $B_p$ is not a Lorentz form by [L3], so $(M,B)$ is not a smooth Lorentzian four-manifold; hence the refuted statement is false. The same computation with the constant matrix $\operatorname{diag}(1,1,1,1)$ gives a smooth symmetric nondegenerate field of inertia $(4,0,0)$, a Riemannian metric, which also fails the Lorentzian signature condition; both witnesses show that the signature clause in the definition of a Lorentzian metric is a genuine additional requirement beyond symmetry, smoothness and nondegeneracy. [step 1.1, step 1.2, L3] ∎

## Remarks

The counterexample refutes the implication "smooth symmetric nondegenerate
$\Rightarrow$ Lorentzian"; it makes no claim about whether a field of inertia
$(2,2,0)$ is realized as the metric of any model of this framework, and it does
not assert that signature is locally constant along a connected manifold.
