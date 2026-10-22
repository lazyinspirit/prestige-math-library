---
id: cex-knot-kt-33-boundary-case
kind: counterexample
title: "A decomposable color with nonscalar twist has no single writhe correction"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 2
deps:
  - def-colored-framed-knot-evaluation-from-ribbon-category
  - def-ribbon-evaluation-of-an-x-colored-closed-braid
  - lem-ribbon-trace-equals-the-framed-closure-evaluation
  - thm-twist-correction-removes-framing
  - thm-markovs-closed-braid-equivalence-theorem
  - def-axiom-of-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - def-braiding
  - def-twist-and-ribbon-structure
  - def-left-dual-and-right-dual-object
  - thm-a-braided-rigid-category-has-a-drinfeld-morphism
justified_by: []
proof_strategy: direct
axiom_use: "AC supplies countable choice for the trace/closure comparison and is assumed by Markov classification; the two trace calculations are finite and choice-free."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories, §§8.9–8.10"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
    - title: "V. G. Turaev, Quantum Invariants of Knots and 3-Manifolds, Chapter I, §1.5"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/turaev5.pdf"
---

## Statement refuted

Assume the Axiom of Choice. The counterexample uses the following category: objects are finite-dimensional rational vector spaces $U$ with a linear involution $S_U:U\to U$ satisfying $S_U^2=1_U$; morphisms $f:U\to W$ are rational-linear maps satisfying $fS_U=S_Wf$, with ordinary addition and scalar multiplication on each morphism space; tensor product has involution $S_U\otimes S_W$, the unit is $\mathbb Q$ with identity involution, and associators and unitors are the usual vector-space maps. The braiding is the ordinary flip $u\otimes w\mapsto w\otimes u$. The chosen left dual of $U$ is $U^*$ with involution $S_{U^*}=(S_U^{-1})^*$, evaluation $\operatorname{ev}_U(f\otimes u)=f(u)$, and coevaluation $\operatorname{coev}_U(1)=\sum_i e_i\otimes e^i$ for any basis $(e_i)$ and its dual basis $(e^i)$. The twist is $\theta_U=S_U$. This is a $\mathbb Q$-linear ribbon category with $\operatorname{End}_{\mathcal C}(\mathbb Q)=\mathbb Q$. For $X=\mathbb Qe_+\oplus\mathbb Qe_-$ with $S_X=\operatorname{diag}(1,-1)$, the twist is invertible and nonscalar, its one-strand identity ribbon trace is $0$, and its positive two-strand stabilization ribbon trace is $2$. Therefore no nonzero scalar writhe correction works.

## Statement references

[[thm-twist-correction-removes-framing|The scalar-twist theorem and its absolute-simplicity hypothesis]]

[[def-ribbon-evaluation-of-an-x-colored-closed-braid|Ribbon trace on a closed braid]]

[[lem-ribbon-trace-equals-the-framed-closure-evaluation|Equality of the trace and framed-closure value]]

[[def-left-dual-and-right-dual-object|Standard vector-space duality]]

[[thm-a-braided-rigid-category-has-a-drinfeld-morphism|Drinfeld morphism formula]]

[Etingof, Gelaki, Nikshych, and Ostrik, *Tensor Categories*, §§8.9–8.10](https://math.mit.edu/~etingof/egnobookfinal.pdf)

[Turaev, *Quantum Invariants of Knots and 3-Manifolds*, Chapter I, §1.5](https://www.maths.ed.ac.uk/~v1ranick/papers/turaev5.pdf)

## Facts & Assumptions

**Given:** The false claim in the preceding section, the braid trace convention, and the Axiom of Choice.

[F1] The ribbon evaluation of an $X$-colored closed braid is $t_n(\beta)=\operatorname{Tr}_L(j_{X^{\otimes n}}\rho_n(\beta))$ with $j=u\theta$ ([[def-ribbon-evaluation-of-an-x-colored-closed-braid]]).

[F2] The scalar writhe-correction theorem assumes an absolutely simple color whose twist is the scalar $\lambda\operatorname{id}_X$ with $\lambda\ne0$ ([[thm-twist-correction-removes-framing]]).

[F3] Under the Axiom of Choice, two braids have equivalent oriented closures exactly when related by conjugations, stabilizations, and destabilizations ([[thm-markovs-closed-braid-equivalence-theorem]]).

[F4] A braiding is a natural isomorphism satisfying the two hexagon identities ([[def-braiding]]).

[F5] A ribbon twist is natural, obeys the balancing identity, and is compatible with duality ([[def-twist-and-ribbon-structure]]).

[F6] Left-dual evaluation and coevaluation satisfy the two snake identities ([[def-left-dual-and-right-dual-object]]).

[F7] The Drinfeld morphism is defined by composing coevaluation, the braiding, and evaluation ([[thm-a-braided-rigid-category-has-a-drinfeld-morphism]]).

[F8] The ribbon-induced pivotal comparison $j=u\theta$ is monoidal, with $j_{U\otimes W}=d_{U,W}(j_U\otimes j_W)$ ([[def-ribbon-evaluation-of-an-x-colored-closed-braid]]).

[F9] Under countable choice, the algebraic ribbon trace equals the blackboard-framed closure evaluation for any color $X$, without a simplicity or scalar-twist hypothesis ([[lem-ribbon-trace-equals-the-framed-closure-evaluation]]). AC implies countable choice ([[thm-choice-implies-dependent-implies-countable-choice]]).

[A1] The Axiom of Choice is assumed ([[def-axiom-of-choice]]).

## Counterexample

1.1 Let $\mathcal C$ have objects finite-dimensional rational vector spaces $U$ equipped with a linear involution $S_U$ ($S_U^2=1$), and morphisms commuting with the involutions. Use $S_{U\otimes W}=S_U\otimes S_W$, the ordinary flip braiding, standard vector-space duality, and define $\theta_U=S_U$. This is a ribbon category: the twist is natural because every morphism commutes with $S$; its tensor rule is $S_{U\otimes W}=S_U\otimes S_W$ and the double flip is the identity; and on the dual, $S_{U^*}=(S_U^{-1})^T=S_U^T=(\theta_U)^*$, giving ribbon dual compatibility. The unit is $\mathbb Q$ with trivial involution, so $\operatorname{End}(\mathbf1)=\mathbb Q$. By [F7], the Drinfeld morphism in this symmetric vector-space category is the canonical double-dual identification: on $v\in U$ and $f\in U^*$ its evaluation is $u_U(v)(f)=f(v)$. Thus the ribbon-induced pivotal map $j_U=u_U\theta_U$ is the canonical double-dual identification composed with $S_U$. [F1, F4, F5, F6, F7, given, construct]

2.1 Take $X=\mathbb Q e_+\oplus\mathbb Q e_-$ with $S_X=\operatorname{diag}(1,-1)$. It is decomposable and its twist is invertible but nonscalar. For the identity $e\in B_1$, [F1] gives $t_1(e)=\operatorname{Tr}(S_X)=1+(-1)=0$. For $\sigma_1\in B_2$, the braid action is the flip $P$. By [F8], under the canonical vector-space double-dual comparison, $j_{X\otimes X}$ has matrix $S_X\otimes S_X$, so the trace of $(S_X\otimes S_X)P$ is $2$: the basis tensors $e_+\otimes e_+$ and $e_-\otimes e_-$ contribute diagonal entries $1$, while the two mixed basis tensors are exchanged and contribute no diagonal entries. [F1, F2, F8, step 1.1, algebra]

3.1 By [A1] and [F9], countable choice holds and the traces in step 2.1 are the actual blackboard-framed closure values; the comparison applies to this nonsimple color. The braid $\sigma_1$ is the positive Markov stabilization of the identity braid in $B_1$, so [F3] says their oriented unframed closures are equivalent. Their exponent sums are $w(e)=0$ and $w(\sigma_1)=1$. For any proposed $\lambda\in\mathbb Q^\times$, the corrected values are $0$ and $2\lambda^{-1}$, which are unequal because $2\ne0$ and $\lambda$ is invertible. Thus these framed evaluations admit no scalar writhe correction giving an unframed invariant. The counterexample has precisely the missing hypothesis identified by [F2]: its invertible twist is not scalar on the decomposable color. [F2, F3, F9, step 2.1, A1, algebra] ∎
