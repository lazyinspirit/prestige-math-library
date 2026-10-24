---
id: def-qftx-zero-fi-regular-adhm-and-twistor-data
kind: definition
title: Zero-FI regular ADHM and framed twistor data
status: draft
origin: pipeline
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
page: qftx-adhm-zero-fi-asd-correspondence
dependency_level: 3
deps:
  - def-qftx-adhm-linear-data-stability-and-regularity
  - def-qftx-instanton-number-and-asd-sector
  - def-axiom-of-choice
dependency_roles:
  def-qftx-adhm-linear-data-stability-and-regularity: mathematical-premise
  def-qftx-instanton-number-and-asd-sector: mathematical-premise
  def-axiom-of-choice: mathematical-premise
provenance:
  statement: literature-derived
  proof: not-applicable
axiom_base: "ZF + full AC as inherited from the trace-normalized charge definition and characteristic-class comparison."
sources:
  references:
    - title: "Simon K. Donaldson, The ADHM construction of Yang-Mills instantons"
      url: https://arxiv.org/pdf/2205.08639
      locator: "§2, printed p. 3: framed U(r) bundles on S4, instanton number and the stated linear-map setup."
    - title: "Hiraku Nakajima and Kota Yoshioka, Lectures on Instanton Counting"
      url: https://arxiv.org/pdf/math/0311058
      locator: "§3.1, printed pp. 17–19: framing at infinity, c1=0, and the locally-free framed-sheaf locus."
verification:
  precheck: n/a
---

## Definition

Fix integers $N\geq2$ and $k\geq0$. Let $V=\mathbb C^k$ and $W=\mathbb C^N$ with their standard Hermitian inner products. A raw framed ADHM datum is $x=(B_1,B_2,I,J)$ with $B_i\in\operatorname{End}_{\mathbb C}(V)$, $I:W\to V$, and $J:V\to W$. Its complex and real moment expressions are

$$\mu_{\mathbb C}(x)=[B_1,B_2]+IJ,\qquad \mu_{\mathbb R}(x)=[B_1,B_1^\dagger]+[B_2,B_2^\dagger]+II^\dagger-J^\dagger J.$$

The datum is stable when the vectors $B_{i_1}\cdots B_{i_m}I(w)$, for $m\geq0$, $i_j\in\{1,2\}$, and $w\in W$, span $V$. It is costable when no nonzero subspace of $V$ is invariant under both $B_1,B_2$ and contained in $\ker J$. It is regular when it is both stable and costable. The group $GL(V)$ acts by $g\cdot x=(gB_1g^{-1},gB_2g^{-1},gI,Jg^{-1})$ and its unitary subgroup is $U(V)$. The regular zero-FI real quotient is the orbit set

$$\mathcal A^{\mathrm{reg}}_{k,N}=\{x:\mu_{\mathbb C}(x)=0,\ \mu_{\mathbb R}(x)=0,\ x\text{ stable and costable}\}/U(V).$$

Let $S^4=\mathbb H\mathbb P^1$ have the unit round metric and the orientation whose restriction to the stereographic coordinates $z_1=x^0+ix^1$, $z_2=x^2+ix^3$ on $\mathbb R^4=S^4\setminus\{\infty\}$ is $dx^0\wedge dx^1\wedge dx^2\wedge dx^3$. For a smooth right principal $U(N)$-bundle $P\to S^4$, let $E=P\times_{U(N)}\mathbb C^N$ be its Hermitian associated vector bundle, let $A$ be a smooth unitary connection, and let $\Phi:E|_{\infty}\to\mathbb C^N$ be a unitary framing. Write $F_A$ for the anti-Hermitian curvature matrix and define

$$q_N(P,A)=-\frac{1}{8\pi^2}\int_{S^4}\operatorname{tr}_N(F_A\wedge F_A).$$

The anti-self-dual equation is $F_A^+=(F_A+*_gF_A)/2=0$. For integer $k\geq0$, the framed ASD sector $\mathcal M^{\mathrm{ASD}}_{k,N}$ is the set of such framed connections satisfying $F_A^+=0$ and $q_N(P,A)=-k$, modulo smooth unitary gauge transformations whose value at $\infty$ is the identity in the framing. This definition alone does not assert that every sector exists or that $q_N$ is integral; the exact $U(N)$ charge normalization is a separate lemma below.

Identify $\mathbb H^2$ with $\mathbb C^4$ using a fixed right quaternionic structure $j$ with $j^2=-1$. The twistor space is $Z=\mathbb C\mathbb P^3=\mathbb P_{\mathbb C}(\mathbb H^2)$, the projection $\pi:Z\to\mathbb H\mathbb P^1=S^4$ sends a complex line $\ell$ to the quaternionic line $\ell+j\ell$, and the antiholomorphic involution is $\sigma([v])=[jv]$. A real twistor line is a fibre $L_x=\pi^{-1}(x)\cong\mathbb C\mathbb P^1$; $\sigma$ restricts to the antipodal map on each such line. Fix homogeneous coordinates $[\lambda_1:\lambda_2:\mu_1:\mu_2]$ so $\sigma$ is induced by $(\lambda_1,\lambda_2,\mu_1,\mu_2)\mapsto(-\bar\lambda_2,\bar\lambda_1,-\bar\mu_2,\bar\mu_1)$. The finite real line over $z$ has equations $\mu_1=z_1\lambda_1-\bar z_2\lambda_2$, $\mu_2=z_2\lambda_1+\bar z_1\lambda_2$; the line at infinity is $\lambda_1=\lambda_2=0$. These equations fix the quaternionic identification and its orientation. In the chart $\lambda_1=1,\lambda_2=0$, vertical complex orientation followed by the positive orientation of $(z_1,z_2)$ is the complex orientation of $Z$.


For the spinor convention, use the standard spin structure on $S^4$ and $\operatorname{Spin}(4)\cong SU(2)_+\times SU(2)_-$. Let $S^+,S^-$ be the associated rank-two complex spinor bundles, so $T_{\mathbb C}S^4\cong S^+\otimes S^-$. The twistor fibre at $x$ is $\mathbb P(S_x^+)$, and the complex two-plane associated with $\ell\in\mathbb P(S_x^+)$ is $\ell\otimes S_x^-$. Use the Levi-Civita connection of the round metric for the horizontal distribution of $\pi$; the horizontal $(0,1)$ subspace at $[\ell]\in L_x$ projects to this complex alpha-plane. The displayed orientation is the twistor orientation: the vertical complex orientation followed by the quotient orientation on $S^4$ agrees with the complex orientation on $Z$. It is chosen so the curvature component that vanishes on every such plane is precisely $F^+=(F+*_gF)/2$. In spinor components, $F_{AB}=F_{(AB)}$ denotes the symmetric spinor corresponding to $F^+$ under $\Lambda^2_+T_x^*S^4\otimes\mathbb C\cong\operatorname{Sym}^2(S_x^+)^*$; restriction to the plane is $F_{AB}\pi^A\pi^B$, which vanishes for every $[\pi]\in\mathbb P(S_x^+)$ exactly when $F^+=0$.

A linear monad on $Z$ is a complex of holomorphic bundles

$$\mathcal O_Z(-1)\otimes U\xrightarrow{a}\mathcal O_Z\otimes K\xrightarrow{b}\mathcal O_Z(1)\otimes U',$$

where $U,U',K$ are finite-dimensional complex vector spaces, $b\circ a=0$, $a$ is injective as a sheaf map, $b$ is surjective, and the cohomology sheaf $\ker b/\operatorname{im}a$ is locally free. It is framed when that cohomology has a specified unitary trivialization on $L_\infty$. For a holomorphic bundle $\mathcal E$ on $Z$ that is holomorphically trivial on every real line, a positive Hermitian Ward reality datum is a holomorphic nondegenerate pairing $b:\mathcal E\otimes\sigma^*\overline{\mathcal E}\to\mathcal O_Z$ satisfying $b_{\sigma z}(v,u)=\overline{b_z(u,v)}$. Here $b_z$ is complex linear in $u\in\mathcal E_z$ and conjugate linear in $v\in\mathcal E_{\sigma z}$; the conjugate pullback is holomorphic because $\sigma$ is antiholomorphic. For holomorphic sections $s,t$ on $L_x$, the function $b_z(s(z),t(\sigma z))$ is holomorphic on the compact line, hence constant. It defines $h_x(s,t)$; require this Hermitian form to be positive definite for every $x$. The metric on each fibre of $\mathcal E|_{L_x}$ is transported from this form by holomorphic evaluation. Thus positive forms are induced by the pairing, not independent arbitrary choices. A framed Ward bundle includes a unitary framing on $L_\infty$ for this induced form. Smoothness and parallelness of the induced section-bundle metric are conclusions of the Ward construction.

The compact torus $T=(S^1)^2\times(S^1)^N$ acts on $\mathbb R^4\cong\mathbb C^2$ by $(z_1,z_2)\mapsto(t_1z_1,t_2z_2)$ and on $W$ by $h=\operatorname{diag}(e_1^{-1},\ldots,e_N^{-1})$. Its raw ADHM action is

$$ (t_1,t_2,h)\cdot(B_1,B_2,I,J)=(t_1B_1,t_2B_2,Ih^{-1},t_1t_2hJ). $$

On the framed ASD sector, the same torus acts by inverse pullback under the indicated rotation of $S^4$ and by postcomposition of the framing with $h$. On $Z$, the rotations act by $[\lambda_1:\lambda_2:\mu_1:\mu_2]\mapsto[\lambda_1:t_1t_2\lambda_2:t_1\mu_1:t_2\mu_2]$, equivalently the projective spin lift to $\mathbb P(S^+)$; the central sign in the spin double cover acts trivially after projectivization, and the induced action commutes with $\sigma$. The framing torus acts on the framed monad cohomology by the same diagonal representation.

## Definition references

[[def-qftx-adhm-linear-data-stability-and-regularity]]

[[def-qftx-instanton-number-and-asd-sector]]

[[def-axiom-of-choice]]

## Remarks

For each $x\in S^4$, the fibre line $L_x$ is included in $Z$ and projects to $x$. The square commutes because the projection is constant on a fibre; the diagram records the chosen twistor-fibre convention.

```tikzcd
L_x \arrow[r,hook] \arrow[d,"\pi|_{L_x}"'] & Z \arrow[d,"\pi"] \\
\{x\} \arrow[r,hook] & S^4
```
