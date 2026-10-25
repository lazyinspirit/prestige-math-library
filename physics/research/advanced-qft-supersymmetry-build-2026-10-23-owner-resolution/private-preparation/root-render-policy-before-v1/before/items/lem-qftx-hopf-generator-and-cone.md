---
id: lem-qftx-hopf-generator-and-cone
kind: lemma
title: "Hopf generator and mapping-cone coefficient"
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
dependency_level: 1
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
page: qftx-gauge-group-sphere-homotopy
physical_scope: null
proof_strategy: direct
axiom_base: "ZF + AC"
deps:
  - cor-suspension-isomorphism-in-reduced-singular-homology
  - thm-real-line-mod-integers-is-homeomorphic-to-the-unit-circle
  - thm-lower-dimensional-sphere-maps-are-based-nullhomotopic
  - thm-numerable-fiber-bundles-are-hurewicz-fibrations
  - def-qftx-mapping-cone-hopf-invariant
  - cor-real-line-is-universal-cover-of-circle
  - thm-covering-space-lifting-criterion
  - thm-long-exact-sequence-of-homotopy-groups-of-a-fibration
  - thm-based-sphere-maps-are-classified-by-geometric-degree
  - lem-integral-cohomology-ring-of-complex-projective-space-by-splitting
  - def-axiom-of-choice
dependency_roles:
  cor-suspension-isomorphism-in-reduced-singular-homology: mathematical-premise
  thm-real-line-mod-integers-is-homeomorphic-to-the-unit-circle: mathematical-premise
  thm-lower-dimensional-sphere-maps-are-based-nullhomotopic: mathematical-premise
  thm-numerable-fiber-bundles-are-hurewicz-fibrations: mathematical-premise
  def-qftx-mapping-cone-hopf-invariant: mathematical-premise
  cor-real-line-is-universal-cover-of-circle: mathematical-premise
  thm-covering-space-lifting-criterion: mathematical-premise
  thm-long-exact-sequence-of-homotopy-groups-of-a-fibration: mathematical-premise
  thm-based-sphere-maps-are-classified-by-geometric-degree: mathematical-premise
  lem-integral-cohomology-ring-of-complex-projective-space-by-splitting: mathematical-premise
  def-axiom-of-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Allen Hatcher, Algebraic Topology, Chapter 4"
      url: https://pi.math.cornell.edu/~hatcher/AT/ATch4.pdf
      locator: "§4.2, printed pp. 379–381; Appendix §4.B, pp. 427–428."
    - title: "J. P. May, A Concise Course in Algebraic Topology"
      url: https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf
      locator: "Chapter 7, pp. 49–56; Chapter 9, §3, p. 66."
    - title: "Allen Hatcher, Algebraic Topology, Appendix"
      url: https://pi.math.cornell.edu/~Hatcher/AT/ATch4.4.pdf
      locator: "§4.B, printed pp. 427–428; Hopf invariant and mapping-cone coefficient."
verification:
  precheck: pending
---
## Statement

Let $h:S^3\to\mathbb{CP}^1\cong S^2$ be the Hopf map $h(z_0,z_1)=[z_0:z_1]$ on the unit sphere in $\mathbb C^2$. Then $h$ generates $\pi_3(S^2)\cong\mathbb Z$. Use the integral mapping-cone Hopf invariant $H(f)$ defined for based maps $f:S^3\to S^2$ by $x^2=H(f)y$ in $C_f=S^2\cup_fD^4$, with the positive degree-two and oriented top-cell generators. With the complex orientations, $C_h\cong\mathbb{CP}^2$, $H(h)=1$, and for every integer $m$ and degree-$m$ map $d_m:S^3\to S^3$, $H(h\circ d_m)=m$.

## Statement references

[Hatcher, Algebraic Topology, §4.2 and Appendix §4.B](https://pi.math.cornell.edu/~hatcher/AT/ATch4.pdf)

[May, A Concise Course in Algebraic Topology](https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf)

[Hatcher, Algebraic Topology, Appendix §4.B](https://pi.math.cornell.edu/~Hatcher/AT/ATch4.4.pdf)

[Local mapping-cone Hopf invariant definition]([[def-qftx-mapping-cone-hopf-invariant]])

## Facts & Assumptions

**Given:** The Hopf map and standard based sphere orientations in the Statement. Use ZF + AC for the imported cohomology-ring and fibration suppliers.

[F1] The circle is covered universally by $\mathbb R$, and a based map from a simply connected sphere into $S^1$ lifts to $\mathbb R$ and is nullhomotopic. [[cor-real-line-is-universal-cover-of-circle]], [[thm-covering-space-lifting-criterion]]

[F2] For a based Serre fibration the homotopy groups of its fiber, total space and base form the stated exact sequence. [[thm-long-exact-sequence-of-homotopy-groups-of-a-fibration]]

[F3] Degree classifies based self-maps of a sphere: $\pi_3(S^3)\cong\mathbb Z$ with the identity of degree $1$. [[thm-based-sphere-maps-are-classified-by-geometric-degree]]

[F4] The integral cohomology ring of $\mathbb{CP}^2$ is $\mathbb Z[x]/(x^3)$, with $x$ the positive generator in degree $2$ and $x^2$ the positive degree-$4$ generator. [[lem-integral-cohomology-ring-of-complex-projective-space-by-splitting]]

[F5] For a based $f:S^3\to S^2$, $H(f)$ is the unique integer defined by $x\smile x=H(f)y$ in $C_f$, with $x$ restricting to the positive bottom-sphere generator and $y$ the oriented top-cell generator. [[def-qftx-mapping-cone-hopf-invariant]]

[F6] A locally trivial bundle with a supplied numeration is a Hurewicz fibration under AC. [[thm-numerable-fiber-bundles-are-hurewicz-fibrations]] Spheres of dimension at least two are simply connected by [[thm-lower-dimensional-sphere-maps-are-based-nullhomotopic]], and the quotient circle of [F1] is the unit complex circle by [[thm-real-line-mod-integers-is-homeomorphic-to-the-unit-circle]]. The homology suspension isomorphism is natural, so suspension preserves the degree of sphere self-maps. [[cor-suspension-isomorphism-in-reduced-singular-homology]]

[A1] Orient $S^3$ as the unit sphere in $\mathbb C^2$, orient $S^2=\mathbb{CP}^1$ complexly, and orient the top cell of $\mathbb{CP}^2$ complexly. These choices fix the sign $H(h)=+1$.

## Proof

1.1 The Hopf map is a locally trivial circle bundle: in the chart $z_0\ne0$ with $w=z_1/z_0$, the section is $(1,w)/\sqrt{1+|w|^2}$ and the fiber coordinate is $z_0/|z_0|$; use $(w,1)/\sqrt{1+|w|^2}$ and $z_1/|z_1|$ in the other chart. These formulas give continuous inverse bundle charts. Put $a_i([z])=|z_i|^2/(|z_0|^2+|z_1|^2)$, $b_i=\max(0,a_i-1/4)$ and $\rho_i=b_i/(b_0+b_1)$. At least one $a_i\ge1/2$, so the denominator is positive, and $\operatorname{supp}\rho_i\subseteq\{a_i\ge1/4\}\subseteq\{z_i\ne0\}$. This is a finite numeration with closed supports subordinate to the charts. By [F6] the Hopf bundle is Hurewicz and hence Serre. By [F1], $\pi_2(S^1)=\pi_3(S^1)=0$; the LES [F2] therefore makes $h_*:\pi_3(S^3)\to\pi_3(S^2)$ an isomorphism. By [F3] its source is generated by the identity, so $[h]$ generates $\pi_3(S^2)\cong\mathbb Z$. [F1, F2, F3, F6, construct]

1.2 Write $\mathbb{CP}^2=\{[z_0:z_1:z_2]\}$ and use the open cell $z_2\ne0$ with representative $(w_0,w_1,1)$, $w\in\mathbb C^2$. Its characteristic disk can be taken as the unit ball in $\mathbb C^2$ via $w\mapsto[w_0:w_1:\sqrt{1-|w|^2}]$; the interior parametrizes the complement of $\mathbb{CP}^1$, and on $|w|=1$ the boundary map is $[w_0:w_1]=h(w)$. Thus $\mathbb{CP}^2$ is the mapping cone $C_h$. By [F4], the degree-two generator squares to the degree-four generator, so [F5] gives $H(h)=1$. [F4, F5, A1, construct]

2.1 Let $d_m:S^3\to S^3$ have degree $m$. The radial cone extension $D^4\to D^4$, $ru\mapsto r d_m(u)$, has relative degree $m$ and boundary $d_m$: on collapsing the disk boundary its map is $\Sigma d_m$, whose degree is $m$ by the natural homology suspension in [F6]. Together with the identity on $S^2$, it defines a map $C_{h\circ d_m}\to C_h$, since the boundary attaching maps agree. It pulls the degree-two generator of $C_h$ back to that of $C_{h\circ d_m}$ and the degree-four generator back to $m$ times the latter. Pulling back $x_h^2=y_h$ therefore gives $x_{h\circ d_m}^2=m y_{h\circ d_m}$, which is exactly $H(h\circ d_m)=m$ by [F5]. [F4, F5, F6, step 1.2, construct, algebra]

3.1 The coefficient $H(f)$ is invariant under a based homotopy $H_t$ of attaching maps. A comparison $C_{f_0}\to C_{f_1}$ is the identity on $S^2$; on a cone point $[x,t]$ it equals $H_{2t}(x)$ for $0\le t\le1/2$ and the target cone point $[x,2t-1]$ for $1/2\le t\le1$. The formulas agree at the seam, respect the tip, and are continuous by quotient descent. Reversing the homotopy gives its homotopy inverse: the composites insert a path followed by its reverse, which contracts by shrinking its traversed homotopy parameter, and then a linear cone reparametrization removes the constant collar. Both maps restrict to the identity on the bottom sphere and have relative top-cell degree $+1$, so cup-product naturality preserves $H$. Since step 1.1 identifies every homotopy class with $[h\circ d_m]$ for a unique integer $m$, step 2.1 implies that any attachment with $H(f)=m$ has class $m[h]$. [F1, F2, F3, F5, step 1.1, step 2.1, construct, algebra] ∎
