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
---

## Example

Let $S_3=\langle r,s\mid r^3=s^2=1,\ srs=r^{-1}\rangle$ be the permutation group on three letters, and let $\zeta=e^{2\pi i/3}$. On $V=\mathbb C^2$ with basis $u,v$, define $r(u)=\zeta u$, $r(v)=\zeta^2v$, $s(u)=v$, and $s(v)=u$. Let $\mathbf 1$ be the trivial representation and let $\varepsilon$ be the one-dimensional sign representation, with $\varepsilon(r)=1$ and $\varepsilon(s)=-1$. In the finite-dimensional complex representation category with the tensor product action $g\cdot(x\otimes y)=(g\cdot x)\otimes(g\cdot y)$, these objects satisfy
$$V\otimes V\cong\mathbf 1\oplus\varepsilon\oplus V.$$
The category is a finite semisimple fusion category, $V$ is simple, and $V$ has no tensor inverse. This is an abstract representation-theoretic example and asserts no realization as a defect in a quantum field theory.

## Example references

[Etingof, Gelaki, Nikshych, and Ostrik, *Tensor Categories*, §4.1, Example 4.1.2](https://math.mit.edu/~etingof/egnobookfinal.pdf)

## Facts & Assumptions

**Given:** The finite group $S_3$, the displayed two-dimensional representation candidate, and the complex field, whose characteristic is zero.

[F1] [[def-fusion-and-multifusion-category]]: a fusion category is a finite semisimple tensor category, and its tensor unit is simple.

[F2] [[def-aqft-noninvertible-defect-fusion]]: a tensor-invertible object has a two-sided tensor inverse.

[F3] [[def-finite-dimensional-representation-of-a-group-over-a-field]]: a finite-dimensional representation over a field is a finite-dimensional vector space with a group homomorphism into its invertible linear maps.

[F4] [[def-subrepresentation-and-irreducible-representation]]: a subrepresentation is a group-invariant linear subspace, and an irreducible representation is nonzero with no nonzero proper subrepresentation.

[F5] [[thm-maschkes-theorem-for-finite-groups-over-fields-whose-characteristic-does-not-divide-the-group-order]]: if the characteristic of the field does not divide the order of a finite group, every subrepresentation of a finite-dimensional representation has an invariant complement.

[F6] [[lem-qsmx-finite-group-irrep-dimension-square-sum]]: for a finite group $H$, there are finitely many irreducible complex representations and the sum of the squares of their dimensions is $|H|$.

## Verification

1.1 The matrices prescribed by $r$ and $s$ satisfy $r^3=I$, $s^2=I$, and $srs=r^{-1}$ because $\zeta^3=1$ and conjugation by the coordinate swap interchanges the diagonal entries $\zeta$ and $\zeta^2$. Thus they define a group homomorphism $S_3\to\operatorname{GL}(V)$, so $V$ is a finite-dimensional representation. [given, F3, algebra]

2.1 The eigenvalues $\zeta$ and $\zeta^2$ of $r$ are distinct. Any one-dimensional $r$-invariant subspace is therefore $\mathbb C u$ or $\mathbb C v$, and $s$ exchanges those two lines, so neither is $S_3$-invariant. Since every nonzero proper subspace of $V$ is one-dimensional, $V$ is irreducible. The trivial and sign representations are also irreducible; they are nonisomorphic because $s$ acts by $+1$ and $-1$, respectively, while their dimensions distinguish them from $\dim V=2$. [step 1.1, F4, algebra]

2.2 Under the tensor product action, $r$ fixes both $u\otimes v$ and $v\otimes u$, while $s$ exchanges them. Hence $\mathbb C(u\otimes v+v\otimes u)$ is trivial and $\mathbb C(u\otimes v-v\otimes u)$ is the sign representation. On $\operatorname{span}\{v\otimes v,u\otimes u\}$, $r$ has eigenvalues $\zeta$ and $\zeta^2$ in that order and $s$ exchanges the two basis vectors; the map $u\mapsto v\otimes v$, $v\mapsto u\otimes u$ is an intertwining isomorphism from $V$. These three subspaces are a direct sum of dimensions $1+1+2=4$, so $V\otimes V\cong\mathbf 1\oplus\varepsilon\oplus V$. [step 1.1, algebra]

3.1 The map $T=\operatorname{diag}(1,-1)$ intertwines $\varepsilon\otimes V$ with $V$: it commutes with the action of $r$, and $T(-s)=sT$. The same matrix gives $V\otimes\varepsilon\cong V$. Together with the unit laws and step 2.2, this determines every tensor product of the three simple representations. [step 1.1, step 2.2, algebra]

3.2 By [F5], every finite-dimensional complex representation of $S_3$ is semisimple. The three pairwise nonisomorphic irreducibles in step 2.1 have squared dimensions $1,1,4$, whose sum is $6=|S_3|$; [F6] therefore leaves no other irreducible isomorphism class. Kernels and cokernels of equivariant maps inherit the $S_3$ action, so this representation category is abelian. Each Hom space is a finite-dimensional subspace of a linear-map space, and tensor product is bilinear. The trivial representation is a simple unit. For any representation $W$, give its dual $W^*$ the action $(g\cdot\ell)(w)=\ell(g^{-1}\cdot w)$. Evaluation $W^*\otimes W\to\mathbb C$, $\ell\otimes w\mapsto\ell(w)$, is equivariant because $(g\cdot\ell)(g\cdot w)=\ell(w)$. For a basis $e_i$ of $W$ and dual basis $e^i$, coevaluation $1\mapsto\sum_i e_i\otimes e^i$ is invariant: under $g$ this tensor corresponds to the conjugate $\rho(g)I_W\rho(g)^{-1}=I_W$. The two snake composites are identities by $\sum_i e^i(w)e_i=w$ and $\sum_i\ell(e_i)e^i=\ell$. Thus every representation has left and right duals and the category meets [F1]. [given, F1, F5, F6, step 2.1, algebra]

4.1 Every object $X$ of this semisimple category is isomorphic to $\mathbf 1^{\oplus a}\oplus\varepsilon^{\oplus b}\oplus V^{\oplus c}$ for nonnegative integers $a,b,c$. Steps 2.2 and 3.1 give $$V\otimes X\cong V^{\oplus(a+b+c)}\oplus\mathbf 1^{\oplus c}\oplus\varepsilon^{\oplus c}.$$ If $V\otimes X\cong\mathbf 1$, then the multiplicity of $\mathbf 1$ forces $c=1$, while the multiplicity of $\varepsilon$ forces $c=0$, a contradiction. Thus $V$ has no right tensor inverse and is non-invertible by [F2]. [F2, step 2.2, step 3.1, step 3.2, algebra] ∎
