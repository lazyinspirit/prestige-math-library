---
id: lem-real-spin-norm-detects-components
kind: lemma
title: The even Clifford norm detects the identity component in mixed signature
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: pin-spin-and-clifford-module-representations
dependency_level: 8
deps:
  - lem-real-orthogonal-polar-decomposition
  - lem-cartan-dieudonne-real-nondegenerate-reflection-factorization
  - lem-normalized-pin-spin-product-and-norm-laws
  - thm-real-pin-spin-topological-double-covers
justified_by: []
verification:
  precheck: pass
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Eckhard Meinrenken, Lie groups and Clifford algebras, Chapter 2 §4.1, Theorem 4.4"
      url: https://www.math.toronto.edu/mein/teaching/LieClifford/cl12.pdf
    - title: "Jean Gallier, Clifford Algebras, Clifford Groups, and a Generalization of the Quaternions: The Pin and Spin Groups, §1.9"
      url: https://arxiv.org/pdf/0805.0311
---

## Statement

Let $p,q>0$ and use signature $(+^p,-^q)$. In the polar decomposition of $A\in SO(p,q)$ from [[lem-real-orthogonal-polar-decomposition]], write $K=K_+\oplus K_-$ with $K_+\in O(p)$ and $K_-\in O(q)$. Then $\det K_+=\det K_-\in\{1,-1\}$, and

$$SO_0(p,q)=\{A\in SO(p,q):\det K_+=1\}=\rho(\operatorname{Spin}_{N=1}(p,q)).$$

For definite signature, $SO(p,q)$ is connected and every full-even Spin element has norm $1$, so full-even Spin and norm-one Spin have the same image and are the same subgroup. In signature $(1,1)$, the norm-one preimage of $SO_0(1,1)$ has two connected components; it is not the identity component of full-even Spin.

## Facts & Assumptions

**Given:** The nondegenerate real quadratic space and signature convention in the Statement.

[F1] Every $A\in SO(p,q)$ is joined within $SO(p,q)$ to its block-diagonal polar factor $K\in S(O(p)\times O(q))$ ([[lem-real-orthogonal-polar-decomposition]]).

[F2] The full-even Spin map is a two-sheeted covering of $SO(p,q)$, and its kernel is $\{1,-1\}$ ([[thm-real-pin-spin-topological-double-covers]]).

[F3] Norm is scalar-valued and multiplicative on normalized vector products ([[lem-normalized-pin-spin-product-and-norm-laws]]).

[F4] Each block orthogonal transformation factors into reflections, and reflection parity is its determinant ([[lem-cartan-dieudonne-real-nondegenerate-reflection-factorization]]).

## Proof


**Proof technique:** direct.

1.1 For $A\in SO(p,q)$, $\det K_+\det K_-=\det K=1$, so the two block determinants have the same sign. The polar path in [F1] joins $A$ to $K\in S(O(p)\times O(q))$. For each $m\ge1$, $SO(m)$ is path connected: $SO(1)=\{I\}$; for $m\ge2$, rotate $Ae_m$ to $e_m$ in their plane, using a half-turn in a plane containing $e_m$ if $Ae_m=-e_m$, and then apply induction to the restriction to $e_m^\perp$. Each determinant component of $O(m)$ is a translate of $SO(m)$. Thus the two common determinant signs label exactly the two components of $SO(p,q)$, and the sign $+1$ component is $SO_0(p,q)$. [F1, algebra]

2.1 Along any path in $SO(p,q)$, a chosen lift exists by [F2]. Indeed, cover the compact parameter interval by evenly covered neighborhoods, choose a finite subdivision subordinate to this cover, and continue the lift over each subinterval in the sheet agreeing at its initial endpoint. By [F3], its norm is a continuous function with values in $\{1,-1\}$, so it is constant along the lifted path. [F2, F3, step 1.1, construct]

2.2 If the form is definite and $\dim V>0$, every normalized vector has the same value of $Q$, either $1$ or $-1$. Every full-even Spin element is a product of an even number of such vectors, so [F3] gives norm $1$; hence the full-even and norm-one subgroups coincide. If $V=0$, the definition gives full Spin $=\{1,-1\}$ and both elements have norm $1$. The rotation argument in step 1.1 also shows that definite $SO(V)$ is connected, including $SO(0)=\{I\}$. [F3, step 1.1, algebra]

3.1 Factor $K_+$ and $K_-$ into reflections using [F4]. Their combined number is even because $\det K=1$, so normalized vector lifts give a full-even Spin lift of $K$. A reflection in the positive subspace contributes norm $-1$, and one in the negative subspace contributes norm $+1$, by [F3]. If $k_+$ is the number of positive-subspace reflections, the lift therefore has norm $(-1)^{k_+}=\det K_+$. The two lifts differ by $-1$ by [F2], and $N(-1)=1$, so this norm is independent of the chosen lift. By step 2.1 it is the same for every lift of $A$ joined to $K$. Since [F2] gives a full-even lift for every $A$, norm one occurs exactly when $\det K_+=1$. Step 1.1 identifies these matrices with $SO_0(p,q)$, proving the image equality. [F2, F3, F4, step 1.1, step 2.1]

4.1 In signature $(1,1)$, put $E=e_+e_-$ with $e_+^2=1$ and $e_-^2=-1$. Then $E^2=1$ and $\bar E=-E$. For $A=\begin{pmatrix}a&b\\c&d\end{pmatrix}\in SO(1,1)$ and $J=\operatorname{diag}(1,-1)$, orthogonality gives $A^{-1}=JA^TJ$, while determinant one gives $A^{-1}=\begin{pmatrix}d&-b\\-c&a\end{pmatrix}$. Equating entries yields $d=a$ and $c=b$; the $(1,1)$ entry of $A^TJA=J$ then gives $a^2-b^2=1$. Thus $SO_0(1,1)$ is the branch $a>0$, parameterized by $a=\cosh t$, $b=\sinh t$. Set $w(t)=\cosh(t/2)e_+-\sinh(t/2)e_-$; then $Q(w(t))=1$ and $x(t)=e_+w(t)=\cosh(t/2)-E\sinh(t/2)$ is a product of two normalized vectors, hence a full-even Spin lift. Since $\bar E=-E$, direct multiplication gives $N(x(t))=1$. Also $[E,e_+]=-2e_-$ and $[E,e_-]=-2e_+$, so $\operatorname{ad}_E^2=4I$ on the span of $e_+,e_-$. Since $x(t)$ is even, its twisted action is conjugation; from $x(t)=e^{-tE/2}$ and the exponential series, $e^{-t\operatorname{ad}_E/2}=\cosh(t)I-\tfrac12\sinh(t)\operatorname{ad}_E$. Applying this formula to $e_+$ and $e_-$ gives $\rho_{x(t)}(e_+)=\cosh(t)e_++\sinh(t)e_-$ and $\rho_{x(t)}(e_-)=\sinh(t)e_++\cosh(t)e_-$, which is the matrix in the identity branch. By [F2], every fiber has exactly the two lifts $\pm x(t)$, so the full preimage of $SO_0(1,1)$ is $\{\pm(\cosh s+E\sinh s):s\in\mathbb R\}$. Each sign branch is connected, and the scalar coordinate is respectively positive or negative, so these branches are separated. In particular $1$ and $-1$ lie in different connected components of the norm-one preimage, which is therefore not the identity component of full-even Spin. [F2, F3, step 1.1, step 3.1, algebra] ∎
## Remarks

The source Toronto convention uses reversion norm $t(x)x$; the $N=x\bar x$ convention here is converted using parity. The result for $(1,1)$ is why “norm-one Spin” is not called the identity component without a dimension qualification.
