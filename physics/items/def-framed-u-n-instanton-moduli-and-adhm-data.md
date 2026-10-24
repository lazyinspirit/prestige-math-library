---
id: def-framed-u-n-instanton-moduli-and-adhm-data
kind: definition
title: "Framed U(N) Instanton Moduli and ADHM Data"
status: draft
origin: pipeline
dependency_level: 3
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
axiom_base: "ZF + full AC, inherited from the supplied trace-normalized instanton definition."
deps:
  - def-qftx-instanton-number-and-asd-sector
  - def-axiom-of-choice
dependency_roles:
  def-qftx-instanton-number-and-asd-sector: mathematical-premise
  def-axiom-of-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Hiraku Nakajima and Kota Yoshioka, Lectures on Instanton Counting"
      url: https://arxiv.org/pdf/math/0311058
      locator: "§3.1, PDF pp. 17–19: framed torsion-free sheaves, charge and framing scope, Uhlenbeck compactification, the T^2×T_G action, partition fixed points, and the tangent-character conventions."
    - title: "Nikita A. Nekrasov, Seiberg–Witten Prepotential from Instanton Counting"
      url: https://arxiv.org/pdf/hep-th/0206161
      locator: "§§3.1 and 3.3, PDF pp. 12–15, equations (3.1)–(3.9): ADHM vector spaces and maps, real and complex moment maps, framing action, noncompactness, and the positive-FI resolution."
verification:
  precheck: pending
---

## Definition

Assume the Axiom of Choice. Let $N\geq 2$ and let $S^4=\mathbb R^4\cup\{\infty\}$ be the one-point compactification, oriented so the coordinates $x^1,x^2,x^3,x^4$ on $\mathbb R^4$ have $dx^1\wedge dx^2\wedge dx^3\wedge dx^4>0$. Give $S^4$ a smooth round metric in the conformal class of the Euclidean metric on $\mathbb R^4$. A framed $U(N)$ connection is a smooth unitary connection $A$ on a Hermitian rank-$N$ vector bundle $E\to S^4$, together with a chosen unitary frame $\Phi:E_\infty\to\mathbb C^N$ of its fiber at $\infty$. Gauge transformations are smooth unitary bundle automorphisms that equal the identity in this frame at $\infty$. The curvature is $F_A$, and the Hodge operator is defined by $\alpha\wedge *_g\beta=\langle\alpha,\beta\rangle_g\,d\mathrm{vol}_g$ on two-forms. Set $F_A^+=(F_A+*_gF_A)/2$ and $F_A^-=(F_A-*_gF_A)/2$; the anti-self-dual condition is $F_A^+=0$, and the self-dual condition is $F_A^-=0$.

Let $\mathfrak u(N)$ be the anti-Hermitian matrices and put $B_N(X,Y)=-\operatorname{tr}_N(XY)$. In the trace convention of the library, the charge of $A$ is $q_N(A)=(8\pi^2)^{-1}\int_{S^4}B_N(F_A\wedge F_A)$, and the positive anti-self-dual instanton number is $k(A)=-q_N(A)$. For $k\in\mathbb Z_{\geq0}$, the framed anti-self-dual charge-$k$ moduli set $\mathcal I^{\mathrm{ASD}}_{k,N}$ consists of framed pairs $(E,A)$ with $F_A^+=0$ and $k(A)=k$, modulo the stated based gauge transformations. The integer-charge condition is part of the selected bundle sector; no analytic existence or uniqueness assertion is included in this definition. The trace and Hodge conventions agree with the supplied compact-four-manifold definition of $q_B$; its special $SU(2)$ integrality clause is not used to assert $U(N)$ integrality.

For $k\geq0$, take Hermitian spaces $V=\mathbb C^k$ and $W=\mathbb C^N$. The ADHM data are
$$B_1,B_2\in\operatorname{End}_{\mathbb C}(V),\qquad I\in\operatorname{Hom}_{\mathbb C}(W,V),\qquad J\in\operatorname{Hom}_{\mathbb C}(V,W).$$
Their data space is $\mathcal R_{k,N}=\operatorname{End}_{\mathbb C}(V)^2\oplus\operatorname{Hom}_{\mathbb C}(W,V)\oplus\operatorname{Hom}_{\mathbb C}(V,W)$, and their complex and real moment-map expressions are
$$\mu_{\mathbb C}=[B_1,B_2]+IJ\in\operatorname{End}_{\mathbb C}(V),\qquad \mu_{\mathbb R}=[B_1,B_1^\dagger]+[B_2,B_2^\dagger]+II^\dagger-J^\dagger J\in\operatorname{End}_{\mathbb C}(V).$$
Here $[X,Y]=XY-YX$, and $\dagger$ is the Hermitian adjoint. The two displayed formulas define maps $\mu_{\mathbb C}:\mathcal R_{k,N}\to\operatorname{End}_{\mathbb C}(V)$ and $\mu_{\mathbb R}:\mathcal R_{k,N}\to\operatorname{Herm}(V)$, where $\mathcal R_{k,N}$ is the stated product of four Hom spaces and $\operatorname{Herm}(V)$ is the real vector space of Hermitian endomorphisms. They are the complex and real ADHM moment-map expressions, with these formulas fixing their normalization. A datum is stable when
$$\operatorname{span}_{\mathbb C}\{B_{i_1}\cdots B_{i_m}I(w):m\geq0,\ i_j\in\{1,2\},\ w\in W\}=V,$$
where the word of length zero is the identity. Equivalently, no proper $B_1,B_2$-invariant subspace of $V$ contains $\operatorname{im}I$. The group $GL(V)$ consists of invertible complex-linear endomorphisms, and $U(V)$ is its subgroup preserving the chosen Hermitian inner product. The group $GL(V)$ acts by $g\cdot(B_1,B_2,I,J)=(gB_1g^{-1},gB_2g^{-1},gI,Jg^{-1})$. For $\zeta>0$, the stable complex ADHM quotient $\mathcal M^{\mathrm{GIT},\zeta}_{k,N}$ is the geometric quotient of $\{\mu_{\mathbb C}=0,\ \text{stable}\}$ by $GL(V)$ in the positive stability chamber; $\zeta$ labels that chamber and is not an additional coordinate on the complex equation set.

For a real parameter $\zeta\geq0$, the real moment-map presentation is the quotient of $\{\mu_{\mathbb C}=0,\ \mu_{\mathbb R}=\zeta\,\mathrm{id}_V,\ \text{stable}\}$ by $U(V)$. At $\zeta>0$ this is called the resolved or positive-FI ADHM quotient; at $\zeta=0$ it is the zero-FI real moment-map quotient. The equations and quotient are definitions; this item does not assert that the real moment-map quotient is isomorphic to the stable complex quotient or to an instanton moduli space.

Write $\mathbb{CP}^2$ for the complex projective plane, $\ell_\infty=\{[0:z_1:z_2]\}$ for its line at infinity, and $\mathcal O_{\ell_\infty}$ for the sheaf of holomorphic functions on that line. The affine chart $\mathbb{CP}^2\setminus\ell_\infty$ is $\mathbb C^2$; projective compactification adds the whole line $\ell_\infty$, unlike the one-point compactification $S^4$. Let $\mathcal O(1)$ be the hyperplane line bundle and $\mathcal O(m)=\mathcal O(1)^{\otimes m}$ for $m\geq0$. A coherent sheaf is a sheaf of $\mathcal O_{\mathbb{CP}^2}$-modules that is locally finitely presented; it is torsion-free when no nonzero local section is annihilated by a nonzero local function. Its rank is the dimension of its generic fiber over the function field. Define its Hilbert polynomial by $P_E(m)=\sum_{i=0}^2(-1)^i\dim_{\mathbb C}H^i(\mathbb{CP}^2,E\otimes\mathcal O(m))$ for all sufficiently large integers $m$. The framed Gieseker moduli space $\mathcal G_{k,N}$ is the moduli of pairs $(E,\Phi)$ with $E$ a rank-$N$ torsion-free coherent sheaf, $P_E(m)=N\binom{m+2}{2}-k$, and $\Phi:E|_{\ell_\infty}\cong\mathcal O_{\ell_\infty}^{\oplus N}$. Its locally-free locus is distinguished from the boundary of non-locally-free sheaves. The Uhlenbeck set-theoretic compactification is the disjoint union of strata $\mathcal I^{\mathrm{ASD}}_{k-\ell,N}\times\operatorname{Sym}^{\ell}(\mathbb R^4)$ for $0\leq\ell\leq k$, where $\operatorname{Sym}^{\ell}(\mathbb R^4)=(\mathbb R^4)^\ell/S_\ell$ records ideal point defects. The Gieseker space and the Uhlenbeck space are distinct: the former retains torsion-free sheaf data at the small-instanton boundary, while the latter records only ideal points. No compactness of either full space is asserted here.

Write $z_1=x^1+ix^2$ and $z_2=x^3+ix^4$. The compact torus $T=(S^1)^2\times T_G$, with $T_G\subset U(W)$ the diagonal framing torus, acts on ADHM data by
$$(t_1,t_2,h)\cdot(B_1,B_2,I,J)=(t_1B_1,t_2B_2,Ih^{-1},t_1t_2hJ).$$
This convention makes $\mu_{\mathbb C}$ transform with character $t_1t_2$ and leaves $\mu_{\mathbb R}$ invariant. Let $e_\alpha$ denote the character of the dual of the $\alpha$th framing line, so the framing representation has character $\mathbf W=\sum_{\alpha=1}^N e_\alpha^{-1}$ and its dual has character $\mathbf W^\vee=\sum_{\alpha=1}^N e_\alpha$. For the rotation characters write $t_1,t_2$, and write $\epsilon_i=c_1^T(t_i)$ and $a_\alpha=c_1^T(e_\alpha)$ for their additive equivariant weights.

## Definition references

[Nekrasov, §§3.1 and 3.3, equations (3.1)–(3.9)](https://arxiv.org/pdf/hep-th/0206161)

[Nakajima and Yoshioka, §3.1, PDF pp. 17–19](https://arxiv.org/pdf/math/0311058)

[[def-qftx-instanton-number-and-asd-sector|Trace-normalized charge and the self-dual/anti-self-dual sign]]

[[def-axiom-of-choice|Full Axiom of Choice]]
