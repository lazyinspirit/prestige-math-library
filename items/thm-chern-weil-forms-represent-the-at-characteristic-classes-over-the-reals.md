---
id: thm-chern-weil-forms-represent-the-at-characteristic-classes-over-the-reals
kind: theorem
title: Characteristic forms represent topological characteristic classes over the reals
status: published
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - def-chern-pontryagin-and-euler-characteristic-forms
  - thm-chern-weil-homomorphism-is-independent-of-connection-and-natural
  - lem-first-chern-form-agrees-with-the-topological-line-class
  - lem-oriented-real-two-plane-splitting-with-injective-real-pullback
  - lem-second-countable-smooth-manifolds-have-cw-homotopy-type
  - thm-de-rham-theorem
  - thm-naturality-normalization-and-whitney-sum-for-chern-classes
  - def-chern-classes-from-the-projective-bundle-relation
  - def-pontryagin-classes-by-complexification
  - thm-naturality-orientation-sign-and-whitney-product-for-euler-classes
  - def-euler-class-by-zero-section-pullback-of-the-thom-class
  - def-axiom-of-choice
  - lem-complex-flag-splitting-over-smooth-bases-with-injective-real-pullback
  - lem-compatible-connections-exist-on-smooth-hermitian-and-euclidean-bundles
  - def-complex-linear-and-compatible-bundle-connections
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
axiom_strength: "ZF + full AC; inherited from the smooth flag, topological characteristic-class, Thom/Euler, and compatible-connection suppliers."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Stefan Haller, The Atiyah–Singer Index Theorem, Vienna lecture notes (2013)
      url: https://www.mat.univie.ac.at/~stefan/files/ASIT/ASIT.pdf
      locator: "§II.4.1, Proposition II.4.1(b)–(c), printed pp. 88–89; §II.4.5, Example II.4.5 and total Chern form, printed pp. 91–92"
    - title: John Milnor and James Stasheff, Characteristic Classes
      url: https://xiaoshuo-lin.me/files/Char-Class.pdf
      locator: "Appendix C, split-sum Chern calculation and Corollary C.10, printed pp. 193–194; Lemma C.12 and Generalized Gauss–Bonnet Theorem, printed pp. 195–196; sign-convention qualification, printed p. 192"
verification:
  precheck: pass
  audited: 2026-09-30
---

## Statement

Assume full Axiom of Choice. Let $M$ be a finite-dimensional Hausdorff
second-countable smooth manifold, possibly with boundary or empty, and let
$\rho_M:H^*(M;\mathbb Z)\to H^*(M;\mathbb R)$ be induced by
$\mathbb Z\hookrightarrow\mathbb R$. Write $J_M$ for the natural de Rham
isomorphism from real de Rham cohomology to singular cohomology with real
coefficients.

For every finite-rank smooth complex bundle $E\to M$ with a Hermitian metric
and Hermitian connection $\nabla$, and every $j\geq0$,
$$J_M([c_j(\nabla)])=\rho_M(c_j(E)).$$
For every finite-rank smooth real bundle $V\to M$ with any real connection
$D$, and every $j\geq0$,
$$J_M([p_j(D)])=\rho_M(p_j(V)).$$
For every oriented Euclidean bundle $W\to M$ of even rank with a
metric-compatible connection $\nabla$, and its Thom-normalized Euler class,
$$J_M([e(\nabla)])=\rho_M(e(W)).$$
Here $c_j(\nabla)$, $p_j(D)$, and $e(\nabla)$ use the normalizations in
[[def-chern-pontryagin-and-euler-characteristic-forms]], while $c_j(E)$,
$p_j(V)$, and $e(W)$ are the published topological classes. In particular
$c_1(L)=e(L_{\mathbb R})$ for a complex line and
$p_j(V)=(-1)^j c_{2j}(V_{\mathbb C})$. These are equalities after passage to
real coefficients; no equality with integral torsion is asserted.

## Facts & Assumptions

**Given:** Full AC, the stated smooth bundles and connections, and the supplied
metric and orientation wherever the Hermitian or Euler clause requires them.

[A1] Full AC is the choice-function principle: every family of nonempty sets
has a choice function ([[def-axiom-of-choice]]).

[F1] The Chern, Pontryagin, and Euler forms are the determinant coefficients
and Pfaffian curvature evaluations with the stated rank-zero and degree
conventions; Hermitian Chern forms and all Pontryagin forms are real
([[def-chern-pontryagin-and-euler-characteristic-forms]]).

[F2] For a fixed invariant polynomial, Chern–Weil classes are natural under
pullback and independent of the compatible connection on the same supplied
$G$-reduction ([[thm-chern-weil-homomorphism-is-independent-of-connection-and-natural]]).

[F3] A complex bundle on $M$ pulls back to an orthogonal sum of complex lines
along a smooth flag projection $q$ whose pullback on real cohomology is
injective ([[lem-complex-flag-splitting-over-smooth-bases-with-injective-real-pullback]]).

[F4] An oriented Euclidean bundle on $M$ pulls back to an ordered orthogonal
sum of oriented real two-plane bundles (and, in odd rank, one trivial line)
along a smooth flag projection inducing an injection on real cohomology
([[lem-oriented-real-two-plane-splitting-with-injective-real-pullback]]).

[F5] Such smooth manifolds, including the smooth flag spaces, have CW
homotopy type, and their smooth finite-rank bundles are numerable
([[lem-second-countable-smooth-manifolds-have-cw-homotopy-type]]).

[F6] The natural de Rham map $J_M$ is a ring isomorphism, compatible with
smooth pullback, also when $M$ has boundary ([[thm-de-rham-theorem]]).

[F7] Topological Chern classes are natural, satisfy the Whitney sum formula,
and obey the rank conventions on CW-type bases
([[thm-naturality-normalization-and-whitney-sum-for-chern-classes]]).

[F8] The projective-relation definition fixes $c_1(L)=e(L_{\mathbb R})$
and the published integral Chern classes on CW-type bases
([[def-chern-classes-from-the-projective-bundle-relation]]).

[F9] The published Pontryagin classes are defined by
$p_j(V)=(-1)^j c_{2j}(V_{\mathbb C})$, with $p_0=1$ and the rank cutoff
([[def-pontryagin-classes-by-complexification]]).

[F10] Thom-normalized Euler classes are natural under oriented pullback and
satisfy the Whitney product formula for the ordered-sum orientation
([[thm-naturality-orientation-sign-and-whitney-product-for-euler-classes]]).

[F11] The Euler class is the pullback of the normalized Thom class along the
zero section ([[def-euler-class-by-zero-section-pullback-of-the-thom-class]]).

[F12] Under full AC, each smooth real bundle admits a Euclidean metric and a
compatible connection, and each supplied compatible metric admits a
compatible connection ([[lem-compatible-connections-exist-on-smooth-hermitian-and-euclidean-bundles]]).

[F13] The connection definitions give complex-linear connections, Hermitian
connections, Euclidean-compatible connections, and their local connection
matrices ([[def-complex-linear-and-compatible-bundle-connections]]).

[F14] For a Hermitian connection on a complex line, the real de Rham class
of its normalized first Chern form maps to the real coefficient image of
c1(L)=e(L_R) ([[lem-first-chern-form-agrees-with-the-topological-line-class]]).

## Proof

**Proof technique:** Pull back to the supplied smooth flag towers, compute on
line and oriented two-plane summands, and descend by the proven cohomology
injections.

1.1 Prove componentwise: every component is open in a manifold chart and inherits the stated smooth scope; its singular cochains are the product across components, and full AC supplies componentwise cocycles and primitives, so equality on components is equality on $M$; the same componentwise reasoning applies to each smooth flag space below. By [F5], the topological classes in [F7]–[F11] are defined, and [F6] gives the real de Rham ring isomorphism. If $M=\varnothing$, all singular and de Rham groups are zero, so the assertions hold there as well. [A1, F5, F6, F7, F11]

1.2 For a complex bundle $E$ of rank $r$ with Hermitian connection $\nabla$, take on each component the complex flag projection $q:F(E)\to M$ from [F3]; it has injective real-cohomology pullback and $q^*E=L_1\oplus\cdots\oplus L_r$ orthogonally. The flag space is in the smooth scope of [F5], ranks $0,1$ use the identity map, and $q^*\nabla$ is Hermitian. [F3, F5, F13, given]

1.3 Let $V$ be a real rank-$r$ bundle with arbitrary real connection $D$. For a real matrix $A$, $P_j(A)=[t^{2j}]\det(I+tA/(2\pi))$ is a real $\operatorname{GL}_r(\mathbb R)$-invariant polynomial. Writing $e_k(A)=[t^k]\det(I+tA)$, the complexified-curvature formula [F1] gives $c_k(D_{\mathbb C})=i^k e_k(\Omega_D)/(2\pi)^k$, hence as actual real forms $p_j(D)=(-1)^jc_{2j}(D_{\mathbb C})=P_j(\Omega_D)$. Chern–Weil connection independence [F2] for the real general-linear reduction compares all real connections in real de Rham cohomology. [F1, F2, algebra, given]

1.4 On one oriented two-plane summand, take a positive orthonormal frame $(e_1,e_2)$ with $Je_1=e_2$, where $J$ is its orientation complex structure. Metric compatibility gives $\nabla e_1=\alpha e_2$ and $\nabla e_2=-\alpha e_1$, so the curvature matrix is $\left(\begin{smallmatrix}0&-d\alpha\\d\alpha&0\end{smallmatrix}\right)$ and the library Pfaffian convention [F1] gives $-d\alpha/(2\pi)$. The associated complex line with induced Hermitian metric has connection form $i\alpha$, curvature $i\,d\alpha$, and first Chern form $-i\,d\alpha/(2\pi i)=-d\alpha/(2\pi)$. By [F14] and [F8], its real class is the coefficient image of the Thom-normalized Euler class of the plane. [F1, F8, F11, F13, F14, algebra]

2.1 Let $P_a$ be the smooth orthogonal projection onto $L_a$ and set $\nabla^a s=P_a((q^*\nabla)s)$ for sections of $L_a$. Since $P_a(fs)=fP_a(s)$, the projected operator obeys the connection Leibniz rule; since $\langle P_a u,t\rangle=\langle u,t\rangle$ for $t\in L_a$, the Hermitian metric identity for $q^*\nabla$ restricts to the same identity after projection. Thus $\nabla^\oplus=\bigoplus_a\nabla^a$ is Hermitian on the same complex bundle as $q^*\nabla$. By [F2], connection independence and naturality identify the de Rham classes of $c_j(q^*\nabla)$ and $q^*c_j(\nabla)$ with those of $c_j(\nabla^\oplus)$ and $q^*[c_j(\nabla)]$, respectively. [F2, F13, step 1.2, algebra]

3.1 The curvature of $\nabla^\oplus$ is block diagonal, so [F1] gives $c(\nabla^\oplus)=\bigwedge_{a=1}^r(1+c_1(\nabla^a))$. For each line, [F8] and [F14] give $J_{F(E)}([c_1(\nabla^a)])=\rho_{F(E)}(c_1(L_a))$; multiplicativity of [F6] and the topological Whitney formula [F7] then give $J_{F(E)}([c_j(\nabla^\oplus)])=\rho_{F(E)}(c_j(q^*E))=\rho_{F(E)}(q^*c_j(E))$ for every $j$. Naturality in [F2] and [F6] makes the pullback of $J_M([c_j(\nabla)])-\rho_M(c_j(E))$ zero. Injectivity in [F3] proves the complex assertion. [F1, F2, F3, F6, F7, F8, F14, step 2.1, algebra]

3.2 Let $W$ be an oriented Euclidean bundle of rank $2m$ with metric-compatible connection $\nabla$. The real flag projection [F4] gives $q:F(W)\to M$ with injective pullback and an ordered orthogonal splitting $q^*W=L_1\oplus\cdots\oplus L_m$ into oriented two-planes. Pull back $\nabla$ and project orthogonally to each summand; the Euclidean metric identity restricts under orthogonal projection by $\langle P_a u,t\rangle=\langle u,t\rangle$, so the projected connections and their direct sum are metric-compatible on the same oriented Euclidean bundle as $q^*\nabla$. This is the same projection calculation as in step 2.1. By [F2], the Pfaffian classes of these two connections agree. [F2, F4, F13, step 2.1]


4.1 By [A1] and [F12], choose a Euclidean metric on $V$ and a compatible connection $D_g$; its complexification is Hermitian for the induced metric. The complex result in step 3.1 identifies $J_M([c_{2j}((D_g)_{\mathbb C})])$ with $\rho_M(c_{2j}(V_{\mathbb C}))$. Multiplying by $(-1)^j$ and using [F9] and step 1.3 proves the Pontryagin equality for $D_g$, while step 1.3 permits replacing $D$ by $D_g$ in the Pontryagin de Rham class. If $2j>r$, both sides vanish by [F1] and [F9]; if $j=0$, both are the unit. [A1, F1, F2, F9, F12, step 1.3, step 3.1]

4.2 The Pfaffian of the block-diagonal curvature in step 3.2 is the product of the rank-two Pfaffians. Step 1.4, the ring isomorphism [F6], and the Euler Whitney product [F10] give $J_{F(W)}([e(q^*\nabla)])=\rho_{F(W)}(e(q^*W))$. Naturality of the Euler class [F10] and characteristic form [F2] identifies this with the pullback of the difference on $M$; injectivity in [F4] proves the Euler assertion. [F2, F4, F6, F10, step 3.2, step 1.4, algebra]

5.1 The degree-zero classes in the total forms are units; rank-zero Chern and Pontryagin bundles have no positive-degree coefficients, and a rank-zero oriented Euclidean bundle has Euler form and class equal to the unit by [F1] and [F11]. A complex line is covered by steps 1.2, 2.1, and 3.1; the rank-two Euler sign by step 1.4; and the rank cutoffs for $c_j,p_j$ by [F1], [F9], and step 4.1. Boundary points are covered by the half-space flag, connection, pullback, and de Rham suppliers [F2]–[F6]. There is no odd-rank Euler-form clause or if-and-only-if assertion. Full AC is used in step 1.1 for componentwise cohomology, through the flag and characteristic-class/Thom/Euler suppliers [F3]–[F5], [F7]–[F11], and in step 4.1 for compatible-connection existence; the curvature algebra and supplied-connection comparisons are choice-free. [A1, F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, F12, F13, step 1.1, step 1.2, step 1.4, step 3.1, step 3.2, step 4.1, step 4.2] ∎

## Source notes

Haller, *The Atiyah–Singer Index Theorem*, §II.4.1, Proposition II.4.1(b)–(c),
printed pp. 88–89, proves connection independence and pullback naturality for
trace power series; §II.4.5, Example II.4.5, printed pp. 91–92, uses the
normalization $c_1(L)=[-R/(2\pi i)]$ and gives the total determinant Chern
form. This is corroboration for those formulas, not a source for arbitrary
invariant polynomials or the real and oriented Euler branches; [F2] supplies
the broader connection theorem used here.

Milnor–Stasheff, *Characteristic Classes*, Appendix C, printed pp. 193–196,
derives the split-sum Chern calculation, Pontryagin coefficient formula, and
Pfaffian Euler theorem. Its printed p. 192 warns that readers using classical
sign conventions should replace $K$ by $-K$. The rank-two calculation in
step 1.4 independently fixes the Pfaffian sign for this library's stated
curvature and orientation conventions; no sign is imported from that source.
