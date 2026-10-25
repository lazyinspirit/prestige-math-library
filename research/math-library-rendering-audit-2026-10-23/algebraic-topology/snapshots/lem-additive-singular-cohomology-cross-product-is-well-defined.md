---
id: lem-additive-singular-cohomology-cross-product-is-well-defined
kind: lemma
title: The additive singular cohomology cross product is well-defined
status: published
origin: pipeline
pipeline_run: phase-2-next-20
deps: [def-additive-singular-cohomology-cross-product, lem-singular-product-chain-equivalence-by-simplex-models, def-singular-cochain-complex-with-coefficients, def-singular-cohomology-with-coefficients]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Miller, Construction 28.1, printed page 76; positive differential convention verified locally
      url: https://math.mit.edu/~hrm/papers/notes-905.pdf
---

## Statement

Over a commutative unital ring $R$, the additive singular cohomology cross product is well-defined on both cocycle classes, independent of the chain homotopy inverse to shuffle, $R$-bilinear and natural in both spaces. With positive coboundary, its tensor functional satisfies
$$\delta J(\varphi,\psi)=J(\delta\varphi,\psi)+(-1)^pJ(\varphi,\delta\psi)\qquad(|\varphi|=p).$$
No AC is required.

## Facts & Assumptions

[F1] [[def-additive-singular-cohomology-cross-product]] specifies $J$ and the quotient product via a shuffle inverse $T$.

[F2] [[lem-singular-product-chain-equivalence-by-simplex-models]] gives natural maps $S,T$ and homotopies $ST\simeq1$, $TS\simeq1$, with tensor differential $d(x\otimes y)=dx\otimes y+(-1)^{|x|}x\otimes dy$.

[F3] [[def-singular-cochain-complex-with-coefficients]] uses $\delta\varphi=\varphi d$; [[def-singular-cohomology-with-coefficients]] identifies representatives modulo coboundaries.

## Proof

**Given:** $R,X,Y$, homogeneous cochains $\varphi,\psi$ of degrees $p,q\ge0$, and the maps in [F1]–[F3]. Put $F=C(X;R)\otimes_R C(Y;R)$ and $D=C(X\times Y;R)$.

1.1 On a tensor of bidegree $(p+1,q)$, $J(\varphi,\psi)d$ has only the term $\varphi(dx)\psi(y)=J(\delta\varphi,\psi)(x\otimes y)$. On bidegree $(p,q+1)$, only $(-1)^p\varphi(x)\psi(dy)$ remains, equal to $(-1)^pJ(\varphi,\delta\psi)(x\otimes y)$. On every other bidegree of total degree $p+q+1$, all terms vanish by the support definition of $J$. Homogeneous tensors generate the total complex, proving the asserted identity. In particular $J(\varphi,\psi)$ is closed when both inputs are closed; its composite with $T$ is closed because $T$ is a chain map. [F1, F2, F3, given]

2.1 If $\varphi$ changes to $\varphi+\delta u$ with $|u|=p-1$ while $\psi$ is closed, step 1.1 gives $J(\delta u,\psi)=\delta J(u,\psi)$. After composing with $T$ the change is $\delta(J(u,\psi)T)$. If $\psi$ changes by $\delta v$ while $\varphi$ is closed, step 1.1 gives $J(\varphi,\delta v)=(-1)^p\delta J(\varphi,v)$, yielding the coboundary $\delta((-1)^pJ(\varphi,v)T)$. A changed cocycle is still closed because $\delta^2=0$, so applying the two calculations successively handles simultaneous changes. When an input degree is zero, its negative-degree cochain is zero and the corresponding change is absent. This proves descent through both cohomology quotients. [F1, F2, F3, step 1.1]

2.2 Let $T':D\to F$ be another chain homotopy inverse of $S$. Choose the supplied homotopies $dL+Ld=1_D-ST$ and $dP+Pd=T'S-1_F$ (negating a homotopy if needed). Then $K=T'L+PT$ has $dK+Kd=T'(1-ST)+(T'S-1)T=T'-T$, using the chain-map identities. For a closed functional $\chi=J(\varphi,\psi)$, $\chi(T'-T)=\chi dK+\chi Kd=\delta(\chi K)$ since $\chi d=0$. Thus both inverse choices give the same class. In total degree zero, the potential primitive has negative degree and is zero; the same identity gives equality directly. [F1, F2, F3, step 1.1]

3.1 On cochains, $J$ is additive and $R$-linear in each variable by its evaluation formula and commutativity of $R$. Precomposition with $T$ is linear, so step 2.1 descends this bilinearity to cohomology and hence to the tensor product of cohomology modules. For maps $f:X'\to X$ and $g:Y'\to Y$, naturality of the specified $T$ gives $T_{X,Y}(f\times g)_\#=(f_\#\otimes g_\#)T_{X',Y'}$. Evaluation on homogeneous tensors gives $J(\varphi,\psi)(f_\#\otimes g_\#)=J(\varphi f_\#,\psi g_\#)$. Combining these equalities and passing to classes proves $(f\times g)^*(\alpha\times\beta)=f^*\alpha\times g^*\beta$. Independence in step 2.2 makes this naturality independent of the particular inverse used to express the classes. [F1, F2, F3, step 2.1, step 2.2]

4.1 If either factor space is empty or either cochain class is zero, the product is zero by step 2.1 and bilinearity; the zero ring likewise gives zero modules. At $p=q=0$, $T$ is the inverse vertex-pair identification, so the product value is $\varphi(x)\psi(y)$ and the two unit values on points multiply to $1$. Steps 1.1 and 2.1 separately cover $p=0$ or $q=0$, with no missing negative cochains. All chosen homotopies in step 2.2 are supplied as part of the inverse data, and the canonical inverse in [F2] is explicit, so no family of arbitrary choices or AC is used. [F1, F2, F3, step 1.1, step 2.1, step 2.2, step 3.1] ∎
