---
id: lem-qftx-rational-torus-classifying-space-cohomology
kind: lemma
title: Rational coefficient ring and characters of a product torus classifying space
status: "published"
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
dependency_level: 0
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
deps:
  - def-axiom-of-choice
  - lem-unit-circle-is-a-compact-metrizable-topological-group
  - prop-relative-cw-inclusions-are-cofibrations
  - def-compactly-generated-based-space-and-well-pointed-object
  - def-milnor-infinite-join-model-of-eg
  - thm-milnor-join-model-is-a-contractible-free-g-space
  - lem-cohomology-ring-of-infinite-complex-projective-space
  - thm-topological-universal-coefficient-short-exact-sequence-for-cohomology
  - thm-universal-coefficient-theorem-for-homology-over-a-pid
  - cor-field-kunneth-isomorphism-for-homology-of-products
  - thm-cohomological-kunneth-cross-product-is-a-ring-isomorphism
  - prop-first-chern-class-of-tensor-dual-and-conjugate-lines
  - def-chern-classes-from-the-projective-bundle-relation
  - thm-complex-exponential-is-entire-with-derivative-itself
  - thm-sine-cosine-zero-sets-and-fundamental-period
  - cor-zero-derivative-implies-constant
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  lem-unit-circle-is-a-compact-metrizable-topological-group: mathematical-premise
  prop-relative-cw-inclusions-are-cofibrations: mathematical-premise
  def-compactly-generated-based-space-and-well-pointed-object: mathematical-premise
  def-milnor-infinite-join-model-of-eg: mathematical-premise
  thm-milnor-join-model-is-a-contractible-free-g-space: mathematical-premise
  lem-cohomology-ring-of-infinite-complex-projective-space: mathematical-premise
  thm-topological-universal-coefficient-short-exact-sequence-for-cohomology: mathematical-premise
  thm-universal-coefficient-theorem-for-homology-over-a-pid: mathematical-premise
  cor-field-kunneth-isomorphism-for-homology-of-products: mathematical-premise
  thm-cohomological-kunneth-cross-product-is-a-ring-isomorphism: mathematical-premise
  prop-first-chern-class-of-tensor-dual-and-conjugate-lines: mathematical-premise
  def-chern-classes-from-the-projective-bundle-relation: mathematical-premise
  thm-complex-exponential-is-entire-with-derivative-itself: mathematical-premise
  thm-sine-cosine-zero-sets-and-fundamental-period: mathematical-premise
  cor-zero-derivative-implies-constant: mathematical-premise
justified_by: []
axiom_strength: ZF + AC
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
sources:
  references:
    - title: Allen Hatcher, Algebraic Topology
      url: https://pi.math.cornell.edu/~hatcher/AT/ATch3.pdf
      locator: Section 3.2, Theorem 3.19, printed pp. 220–222.
landmark: false
---

## Statement

Assume the Axiom of Choice. Let $r\geq0$, let $T=(\mathbb R/\mathbb Z)^r$, and use $E_T=(E_{S^1})^r$, the product of the right Milnor join models, with $BT=E_T/T$. For the $i$th coordinate character $\chi_i([t_1,\ldots,t_r])=\exp(2\pi i t_i)$, let $L_i=E_T\times_T\mathbb C_{\chi_i}$ be the associated complex line bundle over $BT$, with the right diagonal equivalence $(e,z)\cdot t=(e\cdot t,\chi_i(t)^{-1}z)$, and put $u_i=c_1(L_i)\in H^2(BT;\mathbb Q)$. Then
$$
BT\cong(\mathbb{CP}^{\infty})^r,\qquad H^*(BT;\mathbb Q)\cong\mathbb Q[u_1,\ldots,u_r],\qquad |u_i|=2.
$$
Every smooth character $\chi:T\to S^1$ is uniquely $\chi_{\mathbf n}([t])=\exp(2\pi i\sum_i n_it_i)$ for $\mathbf n=(n_1,\ldots,n_r)\in\mathbb Z^r$, and its associated line satisfies $c_1(L_{\chi_{\mathbf n}})=\sum_i n_i u_i$. In particular a nontrivial character has a nonzero degree-two class. For each $k\in\{\mathbb Q,\mathbb R\}$, $H_q(BT;k)$ is finite-dimensional in every degree $q$. For $r=0$, $BT$ is a point and its rational cohomology is $\mathbb Q$.

## Statement references

[Integral projective-space cohomology ring underlying the rational calculation] [Hatcher, Section 3.2, Theorem 3.19, printed pp. 220–222](https://pi.math.cornell.edu/~hatcher/AT/ATch3.pdf)

## Facts & Assumptions

**Given:** AC, $r\geq0$, the product torus, and the product Milnor model in the statement.

[A1] Assume the Axiom of Choice. [[def-axiom-of-choice]]

[F1] The multiplicative unit circle is a compact metrizable topological group, and $\epsilon:\mathbb R/\mathbb Z\to S^1$, $[t]\mapsto e^{2\pi i t}$, is a topological-group isomorphism. Its finite CW structure has vertex $1$ and one open $1$-cell $S^1\setminus\{1\}$, with characteristic map $[0,1]\to S^1$, $t\mapsto e^{2\pi i t}$, identifying the endpoints. The quotient map $q:\mathbb R\to\mathbb R/\mathbb Z$ is open and each class has a unique representative in $[0,1)$, so its restriction to $(0,1)$ identifies that open cell with $S^1\setminus\{1\}$. Thus $\{1\}$ is a zero-cell subcomplex. [[lem-unit-circle-is-a-compact-metrizable-topological-group]]

[F2] A relative CW subcomplex inclusion is a cofibration, and a based space is well-pointed when the basepoint inclusion is a cofibration. [[prop-relative-cw-inclusions-are-cofibrations]] [[def-compactly-generated-based-space-and-well-pointed-object]]

[F3] For a well-pointed topological group of CW type, the Milnor join is free and contractible; for the circle, its finite stage $J_N=(S^1)^{*(N+1)}$ is identified with $S^{2N+1}\subset\mathbb C^{N+1}$ by $\Phi_N(\sum_{j=0}^N t_jz_j)=(\sqrt{t_0}z_0,\ldots,\sqrt{t_N}z_N)$. This map is a homeomorphism, intertwines the diagonal right action with scalar multiplication, and commutes with the inclusions that append a zero join coordinate. Its quotient is $\mathbb{CP}^N$, and $BS^1$ is the selected weak CW colimit $\mathbb{CP}^{\infty}$. [[def-milnor-infinite-join-model-of-eg]] [[thm-milnor-join-model-is-a-contractible-free-g-space]]

[F4] With $u=e(\gamma_{\mathbb R})$ for the complex-oriented tautological line, $H^*(\mathbb{CP}^{\infty};\mathbb Z)=\mathbb Z[u]$, and integral homology is $\mathbb Z$ in even degrees and zero in odd degrees. [[lem-cohomology-ring-of-infinite-complex-projective-space]]

[F5] For any space and coefficient group $G$, the natural sequence has kernel $\operatorname{Ext}^1(H_{n-1}(-;\mathbb Z),G)$ and quotient $\operatorname{Hom}(H_n(-;\mathbb Z),G)$. [[thm-topological-universal-coefficient-short-exact-sequence-for-cohomology]]

[F6] For a free chain complex over a PID, homology after tensoring has the natural exact sequence with $H_n(C)\otimes G$ and $\operatorname{Tor}_1(H_{n-1}(C),G)$. [[thm-universal-coefficient-theorem-for-homology-over-a-pid]]

[F7] Over a PID under AC, the cohomological cross product is a graded-ring isomorphism when one factor has finite-free homology in every degree. [[thm-cohomological-kunneth-cross-product-is-a-ring-isomorphism]]

[F8] First Chern classes are additive under tensor product and change sign under dualization; for a complex line, $c_1$ is the Euler class of its complex-oriented underlying real plane. [[prop-first-chern-class-of-tensor-dual-and-conjugate-lines]] [[def-chern-classes-from-the-projective-bundle-relation]]

[F9] The complex exponential has derivative itself. [[thm-complex-exponential-is-entire-with-derivative-itself]]

[F10] A differentiable real function with zero derivative on an interval is constant. [[cor-zero-derivative-implies-constant]]

[F11] Over a field and under AC, singular homology of a product is the direct-sum tensor product of the factor homologies in each total degree. [[cor-field-kunneth-isomorphism-for-homology-of-products]]

[F12] The injective map $\epsilon:\mathbb R/\mathbb Z\to S^1$ satisfies $\epsilon([0])=1$. Therefore $\exp(2\pi i a)=1$ exactly when $[a]=[0]$, which in the quotient $\mathbb R/\mathbb Z$ means $a\in\mathbb Z$. [[lem-unit-circle-is-a-compact-metrizable-topological-group]]

## Proof

**Given:** AC, $r\geq0$, the stated product torus, and the product Milnor model.

1.1 The identity point is a zero-cell of the finite CW circle, so its inclusion is a relative CW subcomplex inclusion and is a cofibration by [F2]. Together with compact metrizability from [F1], this makes $S^1$ a well-pointed group of CW type in the sense of [F2]. Hence [F3] applies. [F1, F2]

1.2 On one $\mathbb{CP}^{\infty}$ factor, apply [F5] with $G=\mathbb Q$. By [F4], each integral homology group is free, so the Ext term is zero and evaluation identifies $H^n(\mathbb{CP}^{\infty};\mathbb Q)$ with $\operatorname{Hom}(H_n(\mathbb{CP}^{\infty};\mathbb Z),\mathbb Q)$. The natural coefficient map sends each integral generator $u^k$ to the nonzero generator of the corresponding rational group. Thus the rational ring is $\mathbb Q[u_{\mathbb Q}]$, with $|u_{\mathbb Q}|=2$. [A1, F4, F5]

1.3 Apply [F6] to the integral singular chain complex with $G=\mathbb Q$. Each integral homology group in [F4] is free, so the Tor term vanishes and $H_n(\mathbb{CP}^{\infty};\mathbb Q)$ is $\mathbb Q$ for even $n$ and zero for odd $n$; it is finite free in every degree. [A1, F4, F6, given]

1.4 Let $\chi:T\to S^1$ be a smooth character and restrict it to each coordinate one-parameter subgroup $\gamma_i(s)=[0,\ldots,s,\ldots,0]$. Write $f_i(s)=\chi(\gamma_i(s))$. The homomorphism law gives $f_i(s+h)=f_i(s)f_i(h)$; differentiating in $h$ at zero yields $f_i'(s)=f_i(s)f_i'(0)$. Since $|f_i(s)|=1$, differentiation of $|f_i(s)|^2=1$ at zero shows $f_i'(0)=2\pi i a_i$ for a real $a_i$. Put $g_i(s)=e^{-2\pi i a_i s}f_i(s)$. Under $\mathbb C\cong\mathbb R^2$, this is a differentiable map of the real variable $s$, and the product rule and [F9] give $g_i'(s)=e^{-2\pi i a_i s}(f_i'(s)-2\pi i a_i f_i(s))=0$ for all $s\in\mathbb R$. The real-linear coordinate projections commute with this derivative (apply them to the difference quotient), so $\operatorname{Re}g_i$ and $\operatorname{Im}g_i$ are differentiable real functions on the interval $\mathbb R$, hence continuous there, with zero derivative everywhere. Applying [F10] separately to these two functions makes both constant. Since $f_i(0)=\chi(e)=1$, we have $g_i(0)=1$, so their constant values are $1$ and $0$, respectively. Thus $g_i(s)=1$ and $f_i(s)=e^{2\pi i a_i s}$ for every real $s$. Since $\gamma_i(1)$ is the identity, $f_i(1)=1$, and [F12] gives $a_i=n_i\in\mathbb Z$. The product decomposition of $T$ now gives $\chi([t])=e^{2\pi i\sum_i n_i t_i}$. Uniqueness follows by restricting again to each $\gamma_i$. [F9, F10, F12, given, construct]

2.1 The product $E_T=(E_{S^1})^r$ is free for the coordinatewise right $T$-action, since a point fixed by $t$ has every coordinate fixed and each factor action is free. It is contractible because it is a finite product of contractible spaces. Each Milnor quotient map is open: the saturation of an open set is the union of its translates. The finite product quotient map is therefore open and its fibers are exactly the $T$-orbits, so it induces $BT\cong (BS^1)^r\cong(\mathbb{CP}^{\infty})^r$ by [F3]. For $r=0$ this is the one-point product. [F3, step 1.1, construct]

2.2 Iterating the ring cross product [F7] over the finite product $(\mathbb{CP}^{\infty})^r$ identifies its rational cohomology ring with the graded tensor product of $r$ copies of $\mathbb Q[u_{\mathbb Q}]$, using the finite-free homology in step 1.3. All generators have even degree, so the graded tensor multiplication has no sign changes and is $\mathbb Q[u_1,\ldots,u_r]$. [A1, F7, step 1.2, step 1.3]

3.1 For $k=\mathbb Q$ or $\mathbb R$, [F6] applied to the same integral chain complex and $G=k$ gives $H_n(\mathbb{CP}^{\infty};k)=k$ for even $n$ and zero for odd $n$, since the integral groups in [F4] are free. Iterating [F11] over the finite product in step 2.1 identifies $H_n(BT;k)$ with a direct sum over the finitely many $r$-tuples of nonnegative degrees summing to $n$. Every summand is either zero or one-dimensional over $k$, so $H_n(BT;k)$ is finite-dimensional, and therefore finite-free, for every $n$. For $r=0$, only the degree-zero group $k$ occurs. [A1, F4, F6, F11, step 2.1, algebra]

3.2 For the coordinate character $\chi_i$, write a point of the $N$th Milnor join in the $i$th circle factor as $e=\sum_{j=0}^N t_jz_j$, with $t_j\geq0$, $\sum_jt_j=1$, and $z_j\in S^1$ ignored whenever $t_j=0$. By [F3], it determines the unit vector $v_N(e)=\Phi_N(e)=(\sqrt{t_0}z_0,\ldots,\sqrt{t_N}z_N)\in S^{2N+1}$. The inverse of $\Phi_N$ recovers $t_j=|v_j|^2$ and $z_j=v_j/|v_j|$ when $v_j\ne0$. The right circle action sends $v_N$ to $\lambda v_N$, and its orbit is the complex line $\mathbb Cv_N$ represented by $[v_N]\in\mathbb{CP}^N$. For the product model $ET=(E_{S^1})^r$, the associated-line map on this stage is $[e,z]\mapsto z v_N(e)$ in the $i$th factor. It is well defined because $(e,z)\sim(e\cdot\lambda,\lambda^{-1}z)$ gives $(\lambda^{-1}z)(\lambda v_N(e))=zv_N(e)$. On each fiber it is a complex-linear isomorphism onto $\mathbb Cv_N(e)$. On each projective coordinate chart choose a continuous unit representative $v$; the inverse coefficient $w\mapsto\sum_j\overline{v_j}w_j$ is continuous there, and replacing $v$ by $\lambda v$ replaces the coefficient by $\lambda^{-1}$ times itself, which gives the same associated-bundle class. Thus the bundle map is a homeomorphism onto the tautological line over $\mathbb{CP}^N$. These maps commute with the finite-stage inclusions, and hence identify $L_i$ with the tautological line over the selected $\mathbb{CP}^{\infty}$ quotient. By [F4] and [F8], $u_i=c_1(L_i)$ is a rational degree-two generator. For $\mathbf n\in\mathbb Z^r$, the associated line is the tensor product of $L_i^{\otimes n_i}$, interpreting negative powers as dual lines; additivity and duality in [F8] give $c_1(L_{\chi_{\mathbf n}})=\sum_i n_i u_i$. This is nonzero exactly when $\mathbf n\ne0$, by the polynomial basis in step 2.2. [F3, F4, F8, step 2.1, step 2.2, step 1.4]

4.1 For $r=0$, $T$ and $BT$ are points, the cohomology is $\mathbb Q$ in degree zero, and there are no nontrivial characters. The finite product, universal-coefficient, and ring arguments above add no additional restriction beyond AC. [A1, F3, F4, F5, F6, F7, step 1.2, step 2.2] ∎
