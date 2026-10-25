---
id: ex-aqft-noninvertible-s3-standard-object
kind: example
title: "A simple non-invertible object in Rep_C(S3)"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
dependency_level: 1
deps:
  - def-aqft-noninvertible-defect-fusion
  - def-fusion-and-multifusion-category
  - def-finite-dimensional-representation-of-a-group-over-a-field
  - def-subrepresentation-and-irreducible-representation
  - thm-maschkes-theorem-for-finite-groups-over-fields-whose-characteristic-does-not-divide-the-group-order
  - lem-qsmx-finite-group-irrep-dimension-square-sum
dependency_roles:
  def-aqft-noninvertible-defect-fusion: mathematical-premise
  def-fusion-and-multifusion-category: mathematical-premise
  def-finite-dimensional-representation-of-a-group-over-a-field: mathematical-premise
  def-subrepresentation-and-irreducible-representation: mathematical-premise
  thm-maschkes-theorem-for-finite-groups-over-fields-whose-characteristic-does-not-divide-the-group-order: mathematical-premise
  lem-qsmx-finite-group-irrep-dimension-square-sum: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Pavel Etingof, Shlomo Gelaki, Dmitri Nikshych, and Victor Ostrik, Tensor Categories, §4.1, Example 4.1.2"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
      locator: "The finite-dimensional representation category Rep(G) is a fusion category when the field has characteristic zero; the particular S3 matrices and decomposition are verified locally here."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
---

## Example

Let $S_3=\langle r,s\mid r^3=s^2=1,\ srs=r^{-1}\rangle$ be the permutation group on three letters, and let $\zeta=e^{2\pi i/3}$. On $V=\mathbb C^2$ with basis $u,v$, define $r(u)=\zeta u$, $r(v)=\zeta^2v$, $s(u)=v$, and $s(v)=u$. Let $\mathbf 1$ be the trivial representation and let $\varepsilon$ be the one-dimensional sign representation, with $\varepsilon(r)=1$ and $\varepsilon(s)=-1$. Let $\operatorname{Rep}_{\mathbb C}(S_3)$ be the category whose objects are finite-dimensional complex representations of $S_3$ and whose morphisms $f:W\to W'$ are complex-linear maps satisfying $f(g\cdot w)=g\cdot f(w)$ for every $g\in S_3$ and $w\in W$. Equip it with the tensor product action $g\cdot(x\otimes y)=(g\cdot x)\otimes(g\cdot y)$. These objects satisfy
$$V\otimes V\cong\mathbf 1\oplus\varepsilon\oplus V.$$
The category is a finite semisimple fusion category, $V$ is simple, and $V$ has no tensor inverse. This is an abstract representation-theoretic example and asserts no realization as a defect in a quantum field theory.

## Example references

[Etingof, Gelaki, Nikshych, and Ostrik, *Tensor Categories*, §4.1, Example 4.1.2](https://math.mit.edu/~etingof/egnobookfinal.pdf)

## Facts & Assumptions

**Given:** The finite group $S_3$, the displayed two-dimensional representation candidate, and the complex field, whose characteristic is zero.

[F1] [[def-fusion-and-multifusion-category]] and [[def-aqft-noninvertible-defect-fusion]]: a fusion category is a finite semisimple rigid monoidal category with bilinear tensor product and simple unit; every object has left and right duals, with evaluation and coevaluation maps of the two orientations satisfying both snake identities. A simple object is nonzero and has no nonzero proper categorical subobject.

[F2] [[def-aqft-noninvertible-defect-fusion]]: a tensor-invertible object has a two-sided tensor inverse.

[F3] [[def-finite-dimensional-representation-of-a-group-over-a-field]]: a finite-dimensional representation over a field is a finite-dimensional vector space with a group homomorphism into its invertible linear maps.

[F4] [[def-subrepresentation-and-irreducible-representation]]: a subrepresentation is a group-invariant linear subspace, and an irreducible representation is nonzero with no nonzero proper subrepresentation.

[F5] [[thm-maschkes-theorem-for-finite-groups-over-fields-whose-characteristic-does-not-divide-the-group-order]]: if the characteristic of the field does not divide the order of a finite group, every subrepresentation of a finite-dimensional representation has an invariant complement.

[F6] [[lem-qsmx-finite-group-irrep-dimension-square-sum]]: for a finite group $H$, there are finitely many irreducible complex representations and the sum of the squares of their dimensions is $|H|$.

## Verification

1.1 The matrices prescribed by $r$ and $s$ satisfy $r^3=I$, $s^2=I$, and $srs=r^{-1}$ because $\zeta^3=1$ and conjugation by the coordinate swap interchanges the diagonal entries $\zeta$ and $\zeta^2$. Thus they define a group homomorphism $S_3\to\operatorname{GL}(V)$, so $V$ is a finite-dimensional representation. [given, F3, algebra]

2.1 The eigenvalues $\zeta$ and $\zeta^2$ of $r$ are distinct. Any one-dimensional $r$-invariant subspace is therefore $\mathbb C u$ or $\mathbb C v$, and $s$ exchanges those two lines, so neither is $S_3$-invariant. Since every nonzero proper subspace of $V$ is one-dimensional, $V$ is irreducible. The trivial and sign representations are also nonzero and one-dimensional, hence irreducible. In $\operatorname{Rep}_{\mathbb C}(S_3)$, a morphism is monic exactly when its underlying linear map is injective: if an intertwiner has nonzero kernel, that invariant kernel's inclusion and zero map have distinct composites with it, while an injective map is left-cancellable. Each such monomorphism is an equivariant isomorphism onto its invariant image, and every invariant subspace is the image of its monic inclusion, so categorical subobjects correspond exactly to invariant subspaces. Thus the three irreducible representations are simple objects by [F1] and [F4]. The trivial and sign representations are nonisomorphic because $s$ acts by $+1$ and $-1$, respectively, while their dimensions distinguish them from $\dim V=2$. [step 1.1, F1, F4, algebra]

2.2 Under the tensor product action, $r$ fixes both $u\otimes v$ and $v\otimes u$, while $s$ exchanges them. Hence $\mathbb C(u\otimes v+v\otimes u)$ is trivial and $\mathbb C(u\otimes v-v\otimes u)$ is the sign representation. On $\operatorname{span}\{v\otimes v,u\otimes u\}$, $r$ has eigenvalues $\zeta$ and $\zeta^2$ in that order and $s$ exchanges the two basis vectors; the map $u\mapsto v\otimes v$, $v\mapsto u\otimes u$ is an intertwining isomorphism from $V$. These three subspaces are a direct sum of dimensions $1+1+2=4$, so $V\otimes V\cong\mathbf 1\oplus\varepsilon\oplus V$. [step 1.1, algebra]

3.1 The map $T=\operatorname{diag}(1,-1)$ intertwines $\varepsilon\otimes V$ with $V$: it commutes with the action of $r$, and $T(-s)=sT$. The same matrix gives $V\otimes\varepsilon\cong V$. Together with the unit laws and step 2.2, this determines every tensor product of the three simple representations. [step 1.1, step 2.2, algebra]

3.2 By [F5], every invariant subspace of a finite-dimensional complex representation has an invariant complement. Induction on dimension now proves complete reducibility: the zero representation is the empty direct sum; for a nonzero representation $W$, choose a nonzero invariant subspace $U$ of least positive dimension, which is irreducible, and use [F5] to write $W=U\oplus U'$ with $U'$ invariant and $\dim U'<\dim W$. Induction decomposes $U'$ into irreducibles. The three pairwise nonisomorphic irreducibles in step 2.1 have squared dimensions $1,1,4$, whose sum is $6=|S_3|$; [F6] therefore leaves no other irreducible isomorphism class. [given, F5, F6, step 2.1, induction]

4.1 For an equivariant linear map, its kernel, image, and cokernel inherit the $S_3$ action; kernels, cokernels, and image-coimage identification are computed as for vector spaces, so the representation category is abelian. Each Hom space is a finite-dimensional subspace of a linear-map space, the tensor product is $\mathbb C$-bilinear, and the trivial representation is a simple unit. By step 3.2 every object is a finite direct sum of simples, and by [F6] there are exactly the three simple isomorphism classes found in step 2.1. [step 2.1, step 3.2, F6, algebra]

5.1 For any representation $W$, give $W^*=\operatorname{Hom}_{\mathbb C}(W,\mathbb C)$ the action $(g\cdot\ell)(w)=\ell(g^{-1}\cdot w)$. The left-dual maps are $\operatorname{ev}_L:W^*\otimes W\to\mathbb C$, $\ell\otimes w\mapsto\ell(w)$, and $\operatorname{coev}_L:\mathbb C\to W\otimes W^*$, $1\mapsto\sum_i e_i\otimes e^i$. The right-dual maps are $\operatorname{ev}_R:W\otimes W^*\to\mathbb C$, $w\otimes\ell\mapsto\ell(w)$, and $\operatorname{coev}_R:\mathbb C\to W^*\otimes W$, $1\mapsto\sum_i e^i\otimes e_i$, for a basis $e_i$ and dual basis $e^i$. Both evaluations are equivariant because $(g\cdot\ell)(g\cdot w)=\ell(w)$; both coevaluations are invariant because the displayed tensors correspond to identity endomorphisms, fixed by conjugation by the representation of $g$. With the ordinary vector-space associator and unit identifications, the left snake composites contract respectively to $\sum_i e^i(w)e_i=w$ and $\sum_i\ell(e_i)e^i=\ell$, and the right snake composites contract to these same two identities in the reversed map orientations. Thus every object has both left and right duals, and steps 3.2--5.1 show that this category meets [F1]. [given, F1, step 3.2, step 4.1, algebra]

6.1 Every object $X$ of this semisimple category is isomorphic to $\mathbf 1^{\oplus a}\oplus\varepsilon^{\oplus b}\oplus V^{\oplus c}$ for nonnegative integers $a,b,c$. Steps 2.2 and 3.1 give $$V\otimes X\cong V^{\oplus(a+b+c)}\oplus\mathbf 1^{\oplus c}\oplus\varepsilon^{\oplus c}.$$ If $V\otimes X\cong\mathbf 1$, then the multiplicity of $\mathbf 1$ forces $c=1$, while the multiplicity of $\varepsilon$ forces $c=0$, a contradiction. Thus $V$ has no right tensor inverse and is non-invertible by [F2]. [F2, step 2.2, step 3.1, step 3.2, algebra] ∎

