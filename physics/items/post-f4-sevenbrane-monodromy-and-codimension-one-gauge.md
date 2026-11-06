---
id: post-f4-sevenbrane-monodromy-and-codimension-one-gauge
kind: postulate
title: "7-brane monodromy and codimension-one gauge-algebra dictionary"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 4
domain: physics
library: physics
category: string-theory
deps:
  - post-f4-type-iib-elliptic-fibration-dictionary
  - thm-f4-kodaira-classification-for-relatively-minimal-elliptic-surfaces
  - def-serre-lie-algebra-of-a-finite-type-cartan-matrix
dependency_roles:
  post-f4-type-iib-elliptic-fibration-dictionary: formulation-prerequisite
  thm-f4-kodaira-classification-for-relatively-minimal-elliptic-surfaces: formulation-prerequisite
  def-serre-lie-algebra-of-a-finite-type-cartan-matrix: formulation-prerequisite
physical_scope: "Adopted codimension-one F-theory dictionary at a general closed smooth point of a discriminant divisor, conditional on an explicitly supplied transverse elliptic-surface slice and local minimal Weierstrass model satisfying the exact Kodaira-carrier hypotheses. It identifies Lie algebras only; it gives no global gauge group, global vacuum, or universal existence theorem for local minimal models."
empirical_premises: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "David R. Morrison and Cumrun Vafa, Compactifications of F-Theory on Calabi–Yau Threefolds – I, arXiv:hep-th/9602114v3"
      url: "https://arxiv.org/pdf/hep-th/9602114v3"
      locator: "§3.1, printed pp. 6–10, Kodaira fiber table and the distinct physical 7-brane/gauge interpretation."
    - title: "Timo Weigand, TASI Lectures on F-theory, arXiv:1806.01854v1"
      url: "https://arxiv.org/pdf/1806.01854v1"
      locator: "§§3.2–3.4, pp. 17–22, and §§4.1–4.3, pp. 22–31: monodromy, splitness, Kodaira fibers and gauge-algebra interpretation; the mathematical geometric classification is proved separately from this physical dictionary."
verification:
  precheck: n/a
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  sources_checked:
    date: 2026-11-04
    scope: Recorded source, statement and proof-status review for this postulate in conformal-field-theory-string-theory-step3-fresh-2026-11-04, within the native reports' stated reading limits. This records no proof or new empirical validation.
    by: gpt-6.1-sol; native-step4-independent-batch-reader; delegated by /root under owner authorization
---

## Postulate

Adopt the following codimension-one dictionary in the geometric regime of [[post-f4-type-iib-elliptic-fibration-dictionary]]. Let $D\subset B_3$ be a smooth irreducible component of the discriminant divisor. Choose a closed complex point $p\in D$ in a dense Zariski-open subset on which the codimension-one fiber type and coefficient vanishing orders are constant, away from intersections with other discriminant components. Such a point is called a general closed point here; it is distinct from the scheme-theoretic generic point with residue field $\mathbb C(D)$. A **7-brane** is a Type-IIB object with seven spatial worldvolume directions and one time direction. The discriminant component is interpreted as its locus. On the smooth-fiber complement, the rank-two integral local system with fiber $H_1(E_b,\mathbb Z)$ has monodromy in $\mathrm{SL}(2,\mathbb Z)$ around loops linking $D$; the action is the one induced by parallel transport of the elliptic-fiber homology lattice. Write $\pi^\circ:\pi^{-1}(B_3^\circ)\to B_3^\circ$ for the smooth restriction of $\pi$. Its dual cohomology local system is $R^1\pi^\circ_*\mathbb Z$; the fiber intersection pairing identifies the two rank-two monodromy representations up to the corresponding dual convention.

The geometric Kodaira-type clause is used only when the transverse complex-curve pullback $\pi_S:S\to C$ satisfies the exact carrier hypotheses: $S$ is a projective smooth surface; $C$ is a smooth connected complex algebraic curve; $\pi_S$ is a proper flat elliptic fibration with a smooth generic genus-one fiber, geometrically connected fibers, and a regular section; no fiber contains a smooth rational curve of self-intersection $-1$ (relative minimality); and every singular fiber in use has a local short Weierstrass equation $y^2=x^3+f(t)x+g(t)$ with $f,g$ holomorphic, discriminant $4f^3+27g^2$ not identically zero, and not both divisible by $t^4,t^6$, respectively. A transverse slice means pullback along a holomorphic map $\jmath:C^{\mathrm{an}}\to B_3^{\mathrm{an}}$ with $\jmath(c)=p$ for a closed point $c\in C$ and $d\jmath_c(T_cC)\not\subset T_pD$. The resulting surface and morphism must separately satisfy the algebraic and projective hypotheses just stated. The theorem then supplies a fiber type from $I_n$ ($n\ge1$), II, III, IV, $I_n^*$ ($n\ge0$), IV*, III*, II*. A merely local analytic slice is not automatically a projective surface to which this theorem applies. This postulate asserts no such projective slice or local model exists for every discriminant component.

The splitness data are taken over the function field $K=\mathbb C(D)$, not over a single complex transverse point. For the following $K$-valued tests require the Weierstrass line bundle and sections to arise from algebraic data on a Zariski neighbourhood of the generic point of $D$. Choose a regular frame $e$ of that line bundle there and a regular local equation $w$ for $D$; write $f,g$ for the resulting scalar coefficient functions. Set $f_j=(f/w^j)|_D$, $g_j=(g/w^j)|_D\in K$ whenever the indicated orders hold. Restriction means reduction modulo $w$ after cancellation in the local ring at that generic point. A **monodromy cover** here is the finite cover of a dense open subset of $D$ defined by the specified polynomial in $\psi$ over $K$; its irreducible factors specify the component orbits under continuation along $D$. Split means the geometric components are individually defined over $K$. For the relevant types the exact tests are:

- $I_n$, $n\ge2$: the quadratic $\psi^2+9g/(2f)|_D$; two linear factors mean split, an irreducible quadratic non-split.
- IV: $\psi^2-g_2$; two linear factors mean split, an irreducible quadratic non-split.
- $I_0^*$: $\psi^3+f_2\psi+g_3$; three linear factors mean split; one linear and one irreducible quadratic mean semi-split; an irreducible cubic means non-split. The latter allows either cyclic order-three or full symmetric monodromy on the three outer components.
- $I_n^*$, $n\ge1$: use the quadratic distinguishing the two terminal fork components. Explicitly, for $n=2k-5$ ($k\ge3$) it is $\psi^2+\frac14[(\Delta/w^{2k+1})(2wf/(9g))^3]|_D$, and for $n=2k-4$ ($k\ge3$) it is $\psi^2+[(\Delta/w^{2k+2})(2wf/(9g))^2]|_D$. Two linear factors mean split; an irreducible quadratic means non-split and interchanges the two fork ends. These are rational expressions restricted after the displayed cancellations.
- IV*: $\psi^2-g_4$; two linear factors mean split, an irreducible quadratic non-split. No extra splitness choice changes the assignments for III, III*, or II*.

These factorization tests are independent of the two choices. Indeed, replacing $e$ by $e'=u e$ and $w$ by $w'=v w$, with units $u,v$ near the generic point, gives $f'=u^{-4}f$, $g'=u^{-6}g$, $\Delta'=u^{-12}\Delta$, and $f'_j=u^{-4}v^{-j}f_j$, $g'_j=u^{-6}v^{-j}g_j$ after restriction. In the respective cover equations take $\psi'=s\psi$ with the following nonzero elements of $K$ (all units are restricted to $D$):

| Type | $s$ |
|---|---|
| $I_n$ | $u^{-1}$ |
| IV | $u^{-3}v^{-1}$ |
| $I_0^*$ | $u^{-2}v^{-1}$ |
| $I_{2k-5}^*$ | $u^{-3}v^{-(k-1)}$ |
| $I_{2k-4}^*$ | $u^{-4}v^{-k}$ |
| IV* | $u^{-3}v^{-2}$ |

Direct substitution makes each transformed quadratic $s^2$ times the original one, and the transformed cubic $s^3$ times the original one. Since $\psi\mapsto s\psi$ is an invertible $K$-linear change of variable and these scalar factors are nonzero, the degrees and number of irreducible factors over $K$ are unchanged. After shrinking the dense open to remove poles, these equations define the same cover up to isomorphism. Purely analytic coefficient data without this algebraic realization are not assigned a $K$-factorization by this clause.

Under these hypotheses adopt the following complete assignment of the **complexified non-abelian gauge Lie algebra**; $0$ means that this codimension-one fiber contributes no non-abelian algebra, not that the whole model has no abelian sector.

| Fiber type | Splitness data | Assigned complex Lie algebra |
|---|---|---|
| $I_0$, $I_1$, II | none | $0$ |
| $I_n$, $n\ge2$ | split | $\mathfrak{sl}_n$ (type $A_{n-1}$) |
| $I_n$, $n\ge2$ | non-split | $\mathfrak{sp}_{\lfloor n/2\rfloor}$ (type $C_{\lfloor n/2\rfloor}$) |
| III | none | $\mathfrak{sl}_2$ |
| IV | split / non-split | $\mathfrak{sl}_3$ / $\mathfrak{sp}_1=\mathfrak{sl}_2$ |
| $I_0^*$ | split / semi-split / non-split | $\mathfrak{so}_8$ / $\mathfrak{so}_7$ / $\mathfrak g_2$ |
| $I_n^*$, $n\ge1$ | split / non-split | $\mathfrak{so}_{2n+8}$ / $\mathfrak{so}_{2n+7}$ |
| IV* | split / non-split | $\mathfrak e_6$ / $\mathfrak f_4$ |
| III* | none | $\mathfrak e_7$ |
| II* | none | $\mathfrak e_8$ |

Here $\mathfrak{sl}_n=\{X\in M_n(\mathbb C):\operatorname{tr}X=0\}$, $\mathfrak{so}_N=\{X:X^T+X=0\}$, and $\mathfrak{sp}_r=\{X\in M_{2r}(\mathbb C):X^TJ_r+J_rX=0\}$ with $J_r=\left(\begin{smallmatrix}0&I_r\\-I_r&0\end{smallmatrix}\right)$, all with commutator bracket. The exceptional symbols mean the complex Serre Lie algebras of [[def-serre-lie-algebra-of-a-finite-type-cartan-matrix]]. For $E_n$ ($n=6,7,8$), its Cartan matrix has diagonal $2$ and off-diagonal $-1$ along the edges of the tree with one central vertex and three arms of lengths $2,n-4,1$, and zero elsewhere. For $F_4$ and $G_2$ the matrices are respectively
$$\begin{pmatrix}2&-1&0&0\\-1&2&-2&0\\0&-1&2&-1\\0&0&-1&2\end{pmatrix},\qquad \begin{pmatrix}2&-1\\-3&2\end{pmatrix}.$$
The corresponding conventional compact gauge-algebra names are $\mathfrak{su}(n)$, compact $\mathfrak{sp}(r)$, compact $\mathfrak{so}(N)$ and compact exceptional real forms. The folding is the geometric affine-component monodromy with its root multiplicities, as specified by the table; it is not an unqualified assertion that taking fixed points in any finite ADE algebra gives every row (notably odd non-split $I_n$). No algebra is assigned from fiber type alone when its required cover data are missing.

This is a physical dictionary layered on a mathematical fiber classification. It identifies a Lie algebra, not the global form of the gauge group; it does not imply a particular matter spectrum or a compact global vacuum.

## Postulate references

[[post-f4-type-iib-elliptic-fibration-dictionary]]

[[thm-f4-kodaira-classification-for-relatively-minimal-elliptic-surfaces]]
