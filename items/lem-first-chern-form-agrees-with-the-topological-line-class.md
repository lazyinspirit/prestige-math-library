---
id: lem-first-chern-form-agrees-with-the-topological-line-class
kind: lemma
title: First Chern form agrees with the topological line class
status: published
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - def-chern-pontryagin-and-euler-characteristic-forms
  - thm-chern-weil-homomorphism-is-independent-of-connection-and-natural
  - lem-second-countable-smooth-manifolds-have-cw-homotopy-type
  - thm-de-rham-theorem
  - thm-naturality-orientation-sign-and-whitney-product-for-euler-classes
  - def-chern-classes-from-the-projective-bundle-relation
  - thm-universal-coefficient-theorem-for-cohomology-over-a-pid
  - thm-general-stokes-theorem
  - def-axiom-of-choice
  - thm-smooth-partitions-of-unity-exist-on-manifolds
  - thm-smooth-partitions-of-unity-exist-on-manifolds-with-boundary
  - def-euler-class-by-zero-section-pullback-of-the-thom-class
  - def-thom-class-by-fiberwise-normalization
  - thm-excision-for-singular-cohomology
  - thm-homotopic-maps-induce-equal-maps-in-singular-cohomology
  - def-kronecker-evaluation-pairing
  - def-smooth-vector-bundle-rank-fibre-and-trivial-bundle
  - def-complex-linear-and-compatible-bundle-connections
  - thm-compactness-under-continuous-maps
  - thm-heine-borel-rn
  - def-singular-chain-complex-and-singular-homology
  - def-singular-cochain-complex-with-coefficients
  - def-de-rham-cohomology
  - def-the-chern-weil-homomorphism
  - def-de-rham-integration-cochain-map
  - def-fundamental-class-of-a-compact-oriented-manifold
  - def-smooth-singular-chain-and-cochain-complexes
  - def-smooth-singular-simplex
  - def-standard-topological-simplex-and-its-affine-face-maps
  - def-integral-of-a-form-over-a-smooth-singular-simplex
  - prop-integration-of-top-forms-by-finite-parametrizations
  - thm-smooth-singular-chains-compute-singular-homology
  - def-schubert-cells-in-real-and-complex-grassmannians
  - thm-schubert-cells-give-the-stable-grassmannian-cw-structure
  - thm-cellular-homology-computes-singular-homology
  - lem-transgression-between-two-connections-is-exact
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Stefan Haller, The Atiyah–Singer Index Theorem, Vienna lecture notes (2013)
      url: https://www.mat.univie.ac.at/~stefan/files/ASIT/ASIT.pdf
      locator: "§II.4.5, Example II.4.5; tautological CP¹ connection-frame relation and two-disk Stokes calculation"
    - title: Allen Hatcher, Vector Bundles & K-Theory
      url: https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf
      locator: "§3.2, ‘The Euler Class,’ printed p. 91; Thom class restricted to the zero section"
verification:
  precheck: pass
  audited: 2026-09-30
---

## Statement

Assume the Axiom of Choice. Let $M$ be a finite-dimensional Hausdorff
second-countable smooth manifold, possibly with boundary or empty, and let
$L\to M$ be a smooth complex line bundle with a supplied Hermitian metric and
Hermitian connection $\nabla$. Write $\Omega_\nabla$ for its curvature and
$c_1(L):=e(L_{\mathbb R})$ for the published integral line class, using the
complex orientation on the underlying real plane. Let
$$\rho_M:H^2(M;\mathbb Z)\longrightarrow H^2(M;\mathbb R)$$
be induced by $\mathbb Z\hookrightarrow\mathbb R$. Under the natural de Rham
isomorphism $J_M$,
$$J_M\left[ -\frac{\Omega_\nabla}{2\pi i}\right]=\rho_M(c_1(L)).$$
For a disconnected base the same line-class convention is understood on each
component; the global class is the Euler class displayed above.

If $\nabla'$ is any complex connection on $L$, not necessarily metric
compatible, then
$$\left[-\frac{\Omega_{\nabla'}}{2\pi i}\right]=\iota_M\!\left(J_M^{-1}\rho_M(c_1(L))\right)\quad\text{in }H^2_{\rm dR}(M;\mathbb C),$$
where $\iota_M$ is induced by including real-valued forms into complex-valued
forms. Thus the arbitrary-connection class is identified with the same real
class by the degree-one transgression.

## Facts & Assumptions

**Given:** Full AC, the stated manifold and line bundle, and a supplied
Hermitian metric and Hermitian connection for the first assertion.

[A1] Full AC is the choice-function principle of
[[def-axiom-of-choice]]. It supplies compatible-connection existence [F2],
manifold numerability [F3], the Thom/Euler and projective Chern-class inputs
[F5, F6, F10], and the field UCT [F7]. It implies the $\mathrm{AC}_\omega$ hypotheses of the de Rham
comparison [F4], smooth partitions [F9], and smooth-chain homology comparison
[F16].

[F1] The total Chern form is
$\det(I-\Omega/(2\pi i))$; its degree-two term for a line is
$-\Omega/(2\pi i)$, and Hermitian connections give real-valued Chern forms
([[def-chern-pontryagin-and-euler-characteristic-forms]]).

[F2] Chern–Weil classes are natural under smooth pullback and independent of
the supplied compatible connection; full AC is needed for the connection
existence clause
([[thm-chern-weil-homomorphism-is-independent-of-connection-and-natural]]).

[F3] A manifold in this statement is paracompact Hausdorff, has CW homotopy
type, and its smooth bundles are numerable
([[lem-second-countable-smooth-manifolds-have-cw-homotopy-type]]).

[F4] Under $\mathrm{AC}_\omega$, the natural de Rham isomorphism
$J_M:H^*_{\rm dR}(M;\mathbb R)\to H^*_{\rm sing}(M;\mathbb R)$ is natural
for smooth maps ([[thm-de-rham-theorem]]).

[F5] The Thom-defined Euler class is natural under orientation-preserving
pullback, and the published first Chern class of a complex line is the Euler
class of its complex-oriented real plane
([[thm-naturality-orientation-sign-and-whitney-product-for-euler-classes]],
[[def-chern-classes-from-the-projective-bundle-relation]]).

[F6] For $m\geq0$, $\mathbb{CP}^m$ has one Schubert cell in each dimension
$0,2,\ldots,2m$; the standard $\mathbb{CP}^1$ is its two-skeleton when
$m\geq1$. For $m\geq1$, cellular homology and the field-coefficient UCT therefore give
$H_1(\mathbb{CP}^m;\mathbb R)=0$, $H_2(\mathbb{CP}^m;\mathbb R)=\mathbb R$,
and restriction $H^2(\mathbb{CP}^m;\mathbb R)\to
H^2(\mathbb{CP}^1;\mathbb R)$ is an isomorphism. For $m=0$, $\mathbb{CP}^0$
is a point, so $H_1$, $H_2$, and $H^2$ all vanish. The integral tautological
Euler class is natural under projective inclusions
([[def-schubert-cells-in-real-and-complex-grassmannians]],
[[thm-schubert-cells-give-the-stable-grassmannian-cw-structure]],
[[thm-cellular-homology-computes-singular-homology]]).

[F7] For a free chain complex over a PID the UCT evaluation map fits into
$0\to\operatorname{Ext}^1(H_{n-1},G)\to H^n\to
\operatorname{Hom}(H_n,G)\to0$. Over the field $\mathbb R$ the Ext term
vanishes, so evaluation is an isomorphism
([[thm-universal-coefficient-theorem-for-cohomology-over-a-pid]]).

[F8] Stokes holds on compact oriented manifolds with boundary with the
outward-normal-first convention ([[thm-general-stokes-theorem]]).

[F9] Under $\mathrm{AC}_\omega$, every open cover of a smooth manifold,
including one with boundary, has a smooth subordinate partition of unity
([[thm-smooth-partitions-of-unity-exist-on-manifolds]],
[[thm-smooth-partitions-of-unity-exist-on-manifolds-with-boundary]]).

[F10] The Euler class is the zero-section pullback of the Thom class, whose
restriction to each oriented fiber disk is the positive generator. Excision
identifies the local class at an isolated zero with the fiber class, and the
Kronecker pairing evaluates it against the local fundamental class
([[def-euler-class-by-zero-section-pullback-of-the-thom-class]],
[[def-thom-class-by-fiberwise-normalization]],
[[thm-excision-for-singular-cohomology]],
[[thm-homotopic-maps-induce-equal-maps-in-singular-cohomology]],
[[def-kronecker-evaluation-pairing]]).

[F11] A smooth vector bundle has local smooth trivializations, and a complex
bundle has local complex frames
([[def-smooth-vector-bundle-rank-fibre-and-trivial-bundle]],
[[def-complex-linear-and-compatible-bundle-connections]]).

[F12] Smooth singular chains are finite real linear combinations of smooth
singular simplices. Their standard domains are compact, and continuous images
of compact sets are compact ([[def-smooth-singular-chain-and-cochain-complexes]],
[[def-smooth-singular-simplex]],
[[def-standard-topological-simplex-and-its-affine-face-maps]],
[[thm-heine-borel-rn]],
[[thm-compactness-under-continuous-maps]]).

[F13] Ordinary singular homology uses finite formal chains, and the singular
cochain complex is their Hom; integer-to-real coefficient inclusion is
postcomposition and commutes with the differential
([[def-singular-chain-complex-and-singular-homology]],
[[def-singular-cochain-complex-with-coefficients]]).

[F14] For a compactly supported top form, a finite family of
orientation-preserving parametrizations whose open images are disjoint and
whose closures cover the support computes its integral by summing the
parameter-domain integrals
([[prop-integration-of-top-forms-by-finite-parametrizations]]).

[F15] The degree-one Chern–Simons transgression for two complex line
connections is the differential of the normalized connection difference
([[lem-transgression-between-two-connections-is-exact]]).

[F16] Inclusion of smooth real singular chains into continuous real singular
chains induces a natural homology isomorphism under $\mathrm{AC}_\omega$
([[thm-smooth-singular-chains-compute-singular-homology]]).

[F17] A compact oriented manifold's fundamental class is determined by its
local orientation restrictions
([[def-fundamental-class-of-a-compact-oriented-manifold]]).

[F18] The de Rham integration cochain evaluates a form on a smooth simplex by
integrating its pullback over the standard simplex
([[def-de-rham-integration-cochain-map]],
[[def-integral-of-a-form-over-a-smooth-singular-simplex]],
[[def-smooth-singular-chain-and-cochain-complexes]]).

[F19] Complex de Rham cohomology is the cohomology of the complexification of
the real form complex, and real cohomology is closed forms modulo exact forms.
The inclusion of real forms into complex forms induces an injective cohomology
map, since the real part of a complex primitive of a real form is a real
primitive ([[def-the-chern-weil-homomorphism]], [[def-de-rham-cohomology]]).

## Proof

1.1 Let $\gamma\to\mathbb{CP}^m$ be tautological and choose a Hermitian connection on it using the compatible-connection supplier. [F2, A1]
First take
$m=1$, with affine coordinates $z=z_1/z_0$ and $w=z_0/z_1$. The standard
frames $s_U=(1,z)$ and $s_V=(w,1)$ satisfy $s_U=z s_V$ on the overlap. If
$\nabla s_U=\omega_U s_U$ and $\nabla s_V=\omega_V s_V$, the connection
Leibniz rule gives
$$\omega_U-\omega_V=\frac{dz}{z}.$$
In their displayed charts, the closed unit disks
$$D_U=\{[1:z]:|z|\leq1\},\qquad D_V=\{[w:1]:|w|\leq1\}$$
cover $\mathbb{CP}^1$ and induce opposite orientations on their common
boundary. The equator parametrization $z\mapsto[1:z]$ preserves orientation.
The coordinate maps from the open unit disks in $z$ and $w$ preserve
orientation, have disjoint images, and their closed images cover
$\mathbb{CP}^1$, so [F14] gives the integral as the sum of the two disk
integrals. Using $\Omega|_U=d\omega_U$, $\Omega|_V=d\omega_V$, and [F8],
$$\int_{\mathbb{CP}^1}\Omega=\int_{\partial D_U}(\omega_U-\omega_V)=\int_{S^1}\frac{dz}{z}=2\pi i.$$
Thus the degree-two Chern form $\eta_\gamma=-\Omega/(2\pi i)$ has period
$-1$. This calculation is for any chosen connection; in particular it applies
to the Hermitian connection above. [A1, F1, F2, F8, F11, F14, given, algebra]

1.2 The de Rham evaluation on the fundamental class is determined by integration [A1, F4, F18].
Identify $\mathbb{CP}^1$ with the unit sphere with its complex
orientation. Take a tetrahedron containing the origin in its interior and
radially project its oriented boundary to the sphere, orienting the faces by
the boundary orientation. The four face maps form a smooth singular cycle:
each face map extends smoothly near its standard simplex because its affine
plane misses the origin, and the shared edge chains cancel. The radial map
carries the oriented tetrahedral triangulation to the sphere, so the resulting
cycle has the local orientation restrictions of the fundamental class by
[F17]. By [F16], it also represents the corresponding class in smooth
singular homology. Each face interior maps orientation-preservingly and
diffeomorphically onto one of four disjoint spherical triangles; their
closures cover the sphere. Thus the finite-parametrization formula in [F14]
identifies the sum of the face integrals with $\int_{\mathbb{CP}^1}
\eta_\gamma$. The restriction from continuous to smooth cohomology sends
$J[\eta_\gamma]$ to the class of the integration cochain [F18], so evaluation
on this smooth cycle is exactly the integral just computed, namely $-1$.
The independent Thom-class calculation is local. On the tautological line
$\gamma$, orthogonally project the fixed vector $(1,0)$ onto each complex
line. This gives a smooth section with its only zero at $p=[0:1]$. In the
chart $w=z_0/z_1$ centered at $p$, use the frame $(w,1)$; the section has
fiber coordinate $\bar w/(1+|w|^2)$. Its derivative at zero is complex
conjugation, with real determinant $-1$. Homotopy through scalar multiples
of the section identifies its absolute Thom pullback with the zero-section
Euler class. In a small disk about $p$, excision and fiberwise Thom
normalization [F10] identify the relative pullback with the local orientation
class multiplied by that determinant sign. The fundamental class restricts
to the positive local orientation by [F17]. Hence
$\langle e(\gamma_{\mathbb R}),[\mathbb{CP}^1]\rangle=-1$. Its
coefficient image has the same real evaluation by [F13]. Evaluation is an
isomorphism in degree two by [F7] and [F6], so the two real singular classes
agree on $\mathbb{CP}^1$. [A1, F4, F6, F7, F10, F13, F14, F16, F17, F18, step 1.1]

1.3 The Schubert cell structure and field UCT control the degree-two comparison [A1, F6, F7].
For $m\geq1$, the Schubert cell structure in [F6] has one cell in each
even dimension and none in odd dimensions. Its cellular chain complex over
$\mathbb R$ therefore has $C_1=0$, $C_2=\mathbb R$, and zero boundary into or
out of degree two. The inclusion $\mathbb{CP}^1\hookrightarrow\mathbb{CP}^m$
includes the unique two-cell, so it induces an isomorphism on $H_2$.
Cellular homology and [F7] make restriction on $H^2(-;\mathbb R)$ an
isomorphism. By naturality of $J$ and of the Euler class, step 1.2 then gives
$$J_{\mathbb{CP}^m}[\eta_\gamma]=\rho_{\mathbb{CP}^m}(e(\gamma_{\mathbb R})).$$
For $m=0$, both degree-two groups vanish, so the same equality holds.
The sign here comes from the computed periods, not merely from the fact that
the tautological class is a generator. [A1, F5, F6, F7, step 1.2]

1.4 Every real homology class has a smooth cycle representative by [A1, F16].
Fix a smooth real singular two-cycle $z$ in $M$. [F16]
Let $K$ be the union of
the images of its finitely many singular simplices. Each standard simplex is
compact, so [F12] makes $K$ compact. If $K=\varnothing$, then $z=0$ and
this cycle pairs to zero; henceforth assume $K\ne\varnothing$. By [F3], $L$ is numerable, so its
Thom-defined Euler class lies in the stated scope. Let the index set consist of all local
nonvanishing smooth sections $\lambda_a$ of $L^*$, with domain $U_a$; the
domains cover $M$ by [F11]. Use [F9] to take a smooth partition
$(\phi_a)$ subordinate to this indexed cover. The open sets
$V_a=\{x:\phi_a(x)>0\}$ cover $K$. Compactness gives finitely many indices
$a_1,\ldots,a_N$ whose $V_{a_i}$ cover $K$, so $N\geq1$.
Define $\sigma_i=\phi_{a_i}\lambda_{a_i}$ on $U_{a_i}$ and zero
outside. This extension is smooth because
$\operatorname{supp}\phi_{a_i}\subset U_{a_i}$. On the open neighborhood
$V=\bigcup_iV_{a_i}$ of $K$, at least one $\sigma_i$ is nonzero at every
point. [F9, F11, F12, A1, given, construct]

1.5 The local complex bundle frames give the fiberwise evaluation map [F11].
The evaluation map
$$\Phi:L|_V\longrightarrow V\times\mathbb C^N,\qquad v\longmapsto(\pi(v),(\sigma_1(v),\ldots,\sigma_N(v)))$$
is smooth and complex-linear on each fiber. Since some $\sigma_i(x)$ is
nonzero for every $x\in V$, its fiber map is injective. Its image is a smooth
line subbundle: on the open set where the $i$th coordinate is nonzero, the
projective coordinate ratios are smooth. Hence it defines a smooth map
$f:V\to\mathbb{CP}^{N-1}$ and an isomorphism
$L|_V\cong f^*\gamma$. The isomorphism is complex-linear and therefore
preserves the complex orientation. This construction uses a finite subcover
of $K$; no global finite-dimensional classifying map on $M$ is asserted.
[F11, step 1.4, construct]

1.6 Euler naturality applies to the orientation-preserving line-bundle isomorphism. [F5]
By [F5] and the orientation-preserving isomorphism of step 1.5,
$$e(L_{\mathbb R})|_V=f^*e(\gamma_{\mathbb R}).$$
Choose a Hermitian connection on $\gamma$ over $\mathbb{CP}^{N-1}$, and
transport its pullback to $L|_V$. It may use a different Hermitian metric
from the supplied one on $L$, but both are complex-linear connections on the
same complex line bundle; their Hermitian metrics need not agree. By [F2],
their first Chern forms have the same complex de Rham class, and
naturality identifies the pulled-back form class with
$f^*[\eta_\gamma]$. By step 1.3 this is the complexification of
$\rho_V(e(L_{\mathbb R})|_V)$ under the de Rham comparison. The inclusion
$\Omega^\bullet(V;\mathbb R)\hookrightarrow\Omega^\bullet(V;\mathbb C)$ is
injective on cohomology: a complex primitive of a real exact form has a real
part that is a real primitive by [F19]. Therefore the two real classes agree on $V$.
Naturality of $J$ gives
$$J_V\left[ -\frac{\Omega_\nabla}{2\pi i}\right]=\rho_V(e(L_{\mathbb R})|_V).$$
[A1, F1, F2, F4, F5, F19, step 1.3, step 1.5, algebra]

1.7 The UCT evaluation map detects the difference class. [F7]
Put
$$\Delta=J_M\left[-\frac{\Omega_\nabla}{2\pi i}\right]-\rho_M(e(L_{\mathbb R}))\in H^2(M;\mathbb R).$$
If $z=0$, its evaluation is zero. Otherwise step 1.4 gives a neighborhood
$V$ containing its image, and step 1.6 makes $\Delta|_V=0$. Naturality in [F4]
then makes the UCT evaluation of $\Delta$ on $[z]$ zero. Every class of
$H_2(M;\mathbb R)$ is represented by a smooth cycle by [F16, A1], so $\Delta$
evaluates to zero on all of $H_2(M;\mathbb R)$. Since $\mathbb R$ is a
field, [F7] makes the evaluation map an isomorphism, hence $\Delta=0$.
This proves the Hermitian assertion globally, including disconnected $M$;
the argument only fixes one cycle at a time. [A1, F4, F7, F16, step 1.4, step 1.6]

1.8 The degree-one transgression applies to any two complex line connections. [F15]
Let $\nabla'$ be any complex connection and set
$A=\nabla'-\nabla$. The degree-one case of [F15], for
$P_1(B)=-\operatorname{tr}(B)/(2\pi i)$, gives
$$-\frac{\Omega_{\nabla'}}{2\pi i}+\frac{\Omega_\nabla}{2\pi i}=d\left(-\frac{A}{2\pi i}\right).$$
Thus their complex de Rham classes differ by the displayed exact form.
Step 1.7 identifies the real class of $-\Omega_\nabla/(2\pi i)$, and [F19]
shows that including real forms into complex forms carries it to the stated
complex class. This proves the second assertion and fixes the transgression
endpoints in the order $\nabla$ to $\nabla'$. If $M=\varnothing$, its
singular and de Rham groups are zero by [F13, F19]. A zero curvature form is
included in the same transgression equation; the zero cycle was handled in
step 1.4. The statement is for a line bundle, and $N=1$ in step 1.5 gives
the trivial target $\mathbb{CP}^0$, covered by step 1.3. Degenerate singular
simplices remain among the finite chains and have compact standard domains
by [F12]. Boundary points use the half-space conventions in [F2, F4, F9,
F16]. Full AC is used exactly through the compatible-connection, manifold
numerability, Thom/Euler, projective Chern and UCT
suppliers; its $\mathrm{AC}_\omega$ consequence is used by the partition,
smooth-chain and de Rham comparison suppliers. The local cycle argument uses
only a finite subcover of $K$, with no global classifying map. There is no
if-and-only-if assertion. [A1, F1, F2, F3, F4, F5, F6, F7, F9, F10, F12,
F13, F15, F16, F19, cases, step 1.4, step 1.5, step 1.7] $\square$

## Source notes

Haller, *The Atiyah–Singer Index Theorem*, §II.4.5, Example II.4.5, gives the
two tautological frames, their connection-form
difference, and the Stokes calculation $\int_{\mathbb{CP}^1}\Omega=2\pi i$.
Its passage asserts the Chern–Weil class and period for the tautological line;
the proof above separately identifies the integral Euler-class sign using
the local Thom-class computation in step 1.2.
The finite projective factorization and the passage from compact cycles to
the arbitrary possibly noncompact base are proved here; neither is inferred
from Haller's compact model calculation.
