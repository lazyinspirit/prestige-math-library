---
id: lem-tensor-products-of-primitive-vectors
kind: lemma
title: "Tensor products of primitive vectors"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 27
deps: [cor-every-vector-space-has-a-basis, def-axiom-of-choice, def-algebraic-dual-and-linear-functional, def-primitive-vector-of-a-rational-representation, def-rational-representation-and-comodule-of-an-affine-group-scheme, lem-tensor-and-hom-representations-are-rational, thm-universal-property-of-module-tensor-products]
justified_by: []
aliases: []
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
    - title: "J. S. Milne, Algebraic Groups (corrected 2022 printing, Cambridge University Press)"
      url: "https://www.jmilne.org/math/Books/iAG2022.pdf"
      locator: "Ch. 22, Lemma 22.25, printed p. 470"
    - title: "Robert Steinberg, Lectures on Chevalley Groups (Yale University, 1967; notes prepared by J. Faulkner and R. Wilson)"
      url: "https://math.soimeme.org/~arunram/Resources/YaleNotes.pdf"
      locator: "Ch. 12, Lemma 76 and the tensor construction before Theorem 40"
---
## Statement

Assume the Axiom of Choice inherited from the named suppliers. Let $(V,r)$ and
$(V',r')$ be rational representations of a split reductive group $(G,T)$ with
primitive vectors $v,v'$ of weights $\lambda,\lambda'$
([[def-primitive-vector-of-a-rational-representation]]). Then $v\otimes v'$ is
a primitive vector of $V\otimes V'$ of weight $\lambda+\lambda'$.
Consequently tensor powers and tensor products of primitive vectors are
primitive, with the summed weights.

## Facts & Assumptions

**Given:** Rational representations $(V,r)$, $(V',r')$ of the split reductive
group $(G,T)$ with primitive vectors $v\in V$, $v'\in V'$ and weights
$\lambda,\lambda'$, and the unipotent radical $U=B_u$ of a Borel subgroup
$B\supseteq T$.

[F1] *Tensor coactions.* The representation/comodule dictionary applies to arbitrary vector spaces. For finite-dimensional pairs, [[lem-tensor-and-hom-representations-are-rational]] gives the tensor coaction explicitly. The same formula from the two finite coaction expansions on each elementary tensor is defined in arbitrary dimension by the tensor universal property; its counit and coassociativity identities follow from those of the two factors and multiplicativity of the Hopf-algebra counit and coproduct. This is verified directly in step 1.1. ([[def-rational-representation-and-comodule-of-an-affine-group-scheme]], [[thm-universal-property-of-module-tensor-products]])

[F2] *Primitive vectors.* A nonzero vector is primitive of weight $\chi$
exactly when it is fixed by $U$ and is a $T$-eigenvector with character $\chi$;
in particular $u\cdot v=v$ and $t\cdot v=\lambda(t)v$ for all $R$-points $u\in
U(R)$, $t\in T(R)$, and likewise for $v'$
([[def-primitive-vector-of-a-rational-representation]],
[[def-rational-representation-and-comodule-of-an-affine-group-scheme]]).

[F3] *Nonzero elementary tensors.* Under the existing AC premise every vector space has a basis ([[cor-every-vector-space-has-a-basis]]). For a nonzero vector choose a nonzero coordinate in that basis and rescale its coordinate functional to value $1$. Thus there are $\phi\in V^*$ and $\phi'\in(V')^*$ with $\phi(v)=\phi'(v')=1$. Their bilinear product defines a linear functional on $V\otimes V'$ taking $v\otimes v'$ to $1$, by the tensor universal property. ([[def-algebraic-dual-and-linear-functional]], [[thm-universal-property-of-module-tensor-products]])

## Proof

**Proof technique:** direct.

1.1 For finite-dimensional $V,V'$, [F1] supplies the tensor representation. In arbitrary dimension, write $\rho(v)=\sum_i v_i\otimes a_i$ and $\rho'(v')=\sum_jv'_j\otimes b_j$. Each expansion is finite, even for arbitrary-dimensional representations. The formula
$$c(v\otimes v')=\sum_{i,j}v_i\otimes v'_j\otimes a_ib_j$$
is induced by a bilinear map, hence defines a linear coaction candidate by [F1]. Its counit sends this expression to $v\otimes v'$ because $\varepsilon(a_ib_j)=\varepsilon(a_i)\varepsilon(b_j)$. Its two iterated coactions agree because the coactions of both factors are coassociative and $\Delta(a_ib_j)=\Delta(a_i)\Delta(b_j)$. Thus the representation/comodule dictionary gives a rational representation on $V\otimes V'$; evaluating at any $R$-point $g$ gives $g(v\otimes v')=gv\otimes gv'$. The two coordinate functionals of [F3] evaluate $v\otimes v'$ to $1$, so this vector is nonzero. This proves all tensor inputs needed below in arbitrary dimension. [F1, F3, given, algebra]

1.2 For every $R$-point $t\in T(R)$ one has $t\cdot(v\otimes v')=t\cdot v\otimes t\cdot v'=\lambda(t)\lambda'(t)\,(v\otimes v')=(\lambda+\lambda')(t)\,(v\otimes v')$, so $v\otimes v'$ is a $T$-eigenvector of weight $\lambda+\lambda'$. [F1, F2]

2.1 For every $R$-point $u\in U(R)$ one has $u\cdot(v\otimes v')=u\cdot v\otimes u\cdot v'=v\otimes v'$, so $v\otimes v'$ is fixed by $U$. [F1, F2, step 1.1]

3.1 By [F2] a nonzero $U$-fixed $T$-eigenvector of weight $\lambda+\lambda'$ is primitive of that weight, so $v\otimes v'$ is primitive of weight $\lambda+\lambda'$. [F2, step 1.1, step 2.1, step 1.2]

4.1 Iterating the construction gives that tensor powers $v^{\otimes m}$ are primitive of weight $m\lambda$ and tensor products of finitely many primitive vectors are primitive with the sum of the weights. For $m=0$, the empty tensor is $1$ in the trivial module $k$, primitive of weight $0$. [step 3.1, algebra] ∎ 