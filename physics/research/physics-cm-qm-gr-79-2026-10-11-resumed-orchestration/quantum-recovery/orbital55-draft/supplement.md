# Orbital eigenstate proof correction — provisional research draft

This supplement is limited to the previously identified defects in proof steps 2.1 and 2.2. The research candidate retains the complete carrier and changes only those two paragraphs; its inherited verification field is a copy of the observed carrier, not a new certification. The live carrier, manifests, readiness, controller state and gate evidence were not edited. No final-byte review, native acceptance or repair round is claimed. The lead retains final-byte integration and complete consumer ownership after the lead verifies the actual batch54 final-byte history and grants integration scope.

The original Statement below is preserved verbatim. The complex-valued radial profile, every angular-momentum reading and the full physical scope are unchanged.

## Statement

Adopt the state and composition postulate P1, the observable and probability
postulate P2, the kinematics and massive-particle model postulate P5 and the
internal-factor assignment of the spin postulate P6, read for the massive
spin-$s$ model of [[def-nrqm-kinematics-framework-massive-spin-s-model]] and
the angular momentum readings of
[[def-nrqm-angular-momentum-framework-angular-momentum-observables]]
([[post-nrqm-framework-state-and-composition]],
[[post-nrqm-framework-observable-and-probability]],
[[post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle]],
[[post-nrqm-framework-identical-particles-and-spin]]), and assume the Axiom
of Choice and the Axiom of Countable Choice ([[def-axiom-of-choice]],
[[def-countable-choice]]). Fix $l\ge0$, $m\in\{-l,\dots,l\}$, a unit vector
$w\in\mathbb C^{r}$ and a complex-valued $R\in C_{c}^{\infty}((0,\infty))$, and
let $h_{lm}$ be the harmonic homogeneous polynomial of degree $l$ with
$h_{lm}|_{S^2}=Y_{lm}$ of
[[thm-nrqm-orbital-and-spin-harmonic-polynomial-dimension]] clause (c)
([[thm-nrqm-orbital-and-spin-associated-polynomial-normalization]]). Define
the model vector
$$\psi(x):=R(|x|)\,h_{lm}(x)\,w\qquad(x\in\mathbb R^{3},\ x\ne0),\qquad \psi(0):=0 .$$
Then:

(a) $\psi$ is a well-defined class in the model's state space $H_{s}$ and in
fact $\psi\in C_{c}^{\infty}(\mathbb R^{3};\mathbb C^{r})\subseteq\mathcal
S^{(r)}$; it lies in $D(L_{i})$ for each $i$, and for $x\ne0$
$$(L_{i}\psi)(x)=R(|x|)\,\bigl(-i\hbar\,D_{i}h_{lm}\bigr)(x)\,w,\qquad D_{i}h_{lm}=(x\times\nabla h_{lm})_{i},$$
so that $-i\hbar D_{i}h_{lm}$ is the polynomial representative of the sphere
function $L_{i}^{\mathrm{sph}}Y_{lm}$ of
[[thm-nrqm-orbital-and-spin-orbital-self-adjoint-generators]]; in particular
$L_{3}\psi=\hbar m\,\psi$;

(b) with $\|R\|_{l}^{2}:=\int_{0}^{\infty}|R(r)|^{2}r^{2l+2}\,dr$ one has
$\|\psi\|^{2}=\|R\|_{l}^{2}$ and
$$\|L_{i}\psi\|^{2}=\|R\|_{l}^{2}\,\bigl\|L_{i}^{\mathrm{sph}}Y_{lm}\bigr\|^{2}, \qquad \sum_{i=1}^{3}\|L_{i}\psi\|^{2}=\hbar^{2}l(l+1)\,\|\psi\|^{2},$$
so the Casimir quadratic form of the model's orbital generators on $\psi$
takes the value $\hbar^{2}l(l+1)$;

(c) consequently, for the pure preparation of the unit vector
$\psi/\|\psi\|$ (for $R\not\equiv0$), the mean and the second moment of the
outcome law of $(L_{3},\mathrm{J\,s})$ are finite and equal
$\hbar m$ and $\hbar^{2}m^{2}$, so the variance vanishes; for each $i$ the
mean and second moment of the law of $L_{i}$ are finite and the second moment
equals $\bigl\|L_{i}^{\mathrm{sph}}Y_{lm}\bigr\|^{2}$; the model reads $(l,m)$
as the **orbital angular momentum quantum numbers** of the preparation, in
the sense of the eigenvalue of the angular momentum-squared form and the
eigenvalue of $L_{3}$;

(d) **Scope.** Clauses (a)-(c) are conditional consequences of P1, P2, P5, P6
and the cited mathematics, and concern the spatial factor of the massive
model. The item asserts no dynamics, no measurement or apparatus model, no
joint sharp values of two different components $L_{i},L_{j}$, no empirical
value and no spectral resolution of $L^{2}(\mathbb R^{3})$: the identity
$\sum_{i}L_{i}^{2}=\hbar^{2}l(l+1)$ is a quadratic-form statement on the
displayed smooth vectors and is not read as a statement about a self-adjoint
operator $\sum_{i}L_{i}^{2}$ on the full spatial Hilbert space.

## Replacement proof paragraphs

2.1 [Core action and $L_{3}$ eigenvalue] By step 1.1 and [F2], $\psi\in D(L_{i})$ and $L_{i}\psi=\sum_{j,k}\varepsilon_{ijk}Q_{j}P_{k}\psi=-i\hbar\,(x\times\nabla)_{i}\psi=R(|x|)\,(-i\hbar D_{i}h_{lm})(x)\,w$ for almost every $x$, where the weak derivatives agree with the classical ones by [F5]; here $P_{k}=-i\hbar\partial_{k}$ on the Schwartz class, so the factor $-i\hbar$ occurs once. For $i=3$, [F1] gives $L_{3}\psi=-i\hbar R\,D_{3}h_{lm}\,w=\hbar mR\,h_{lm}w=\hbar m\psi$, proving (a). [step 1.1, F1, F2, F5, algebra]

2.2 [Norms and the Casimir form] Put $q_i:=D_i h_{lm}$. Each term $x_j\partial_k h_{lm}$ is homogeneous of degree $l$ or zero, so $q_i(r\Omega)=r^lq_i(\Omega)$ for $r>0$; for $l=0$, $q_i=0$. By step 2.1, $\|w\|=1$ and polar integration [F4], $\|L_i\psi\|^2=\hbar^2\int_{\mathbb R^3}|R(|x|)|^2|q_i(x)|^2\,dx=\hbar^2\bigl(\int_0^\infty|R(r)|^2r^{2l+2}\,dr\bigr)\int_{S^2}|q_i(\Omega)|^2\,d\sigma(\Omega)$. By [F1], $L_i^{\mathrm{sph}}Y_{lm}=-i\hbar q_i|_{S^2}$, hence $\|L_i\psi\|^2=\|R\|_l^2\|L_i^{\mathrm{sph}}Y_{lm}\|^2$. Likewise homogeneity of $h_{lm}$ and [F4] give $\|\psi\|^2=\|R\|_l^2\int_{S^2}|Y_{lm}|^2\,d\sigma=\|R\|_l^2$, using the normalization in [[thm-nrqm-orbital-and-spin-associated-polynomial-normalization]] clause (d). Finally, on the finite invariant block $V_l$, self-adjointness and [F3] give $\sum_i\|L_i^{\mathrm{sph}}Y_{lm}\|^2=\langle\sum_i(L_i^{\mathrm{sph}})^2Y_{lm},Y_{lm}\rangle=\hbar^2l(l+1)$, so $\sum_i\|L_i\psi\|^2=\hbar^2l(l+1)\|\psi\|^2$, proving (b), including $l=0$ and $R=0$. [step 2.1, F1, F3, F4, given, algebra]

## Exact supplier uses

- `lem-nrqm-symmetries-rotation-generators-on-schwartz-classes`, Statement (b): on componentwise Schwartz classes, the full spatial generator equals the sum of epsilon-weighted Q_j P_k, with no additional prefactor before that sum. The alternative differential expression contains the single factor -i hbar. The statement assumes AC and CC, both retained by the consumer.
- `lem-nrqm-kinematics-componentwise-position-and-momentum`, displayed definition of P_k and Statement (a): P_k acts as -i hbar times the componentwise weak derivative. Together with unchanged step 1.1 and F5 this identifies the classical action on the compactly supported smooth vector. It is the definition, rather than translation clause (c), that supplies this factor.
- `thm-nrqm-orbital-and-spin-harmonic-polynomial-dimension`, Statement (c): h_lm is a nonzero complex harmonic homogeneous polynomial of degree l with sphere restriction Y_lm, including negative m and the constant l=0 case. Differentiation lowers degree once and multiplication by x raises it once; the corrected homogeneity argument is explicit and introduces no supplier.
- `thm-nrqm-orbital-and-spin-orbital-self-adjoint-generators`, Statement (a),(c), proof step 4.1: the sphere action is the restriction of -i hbar D_i h_lm, with D_i preserving the degree-l harmonic space (including zero); L_3 Y_lm = hbar m Y_lm. These assertions concern the sphere operators. The full spatial action comes separately from the Schwartz supplier above.
- `thm-nrqm-orbital-and-spin-associated-polynomial-normalization`, Statement (d): the Y_lm have norm one, also for negative m. Clause (c) defines the family and conjugation convention; normalization itself is clause (d), cited explicitly in the replacement.
- `thm-polar-coordinates-formula-for-lebesgue-measure`, Statement with n=3: the Borel nonnegative norm integrands have volume element r^2 d sigma dr. Since both h_lm and D_i h_lm scale as r^l, both radial norm integrals have weight r^(2l+2), and a complex radial profile contributes |R|^2. The carrier already imports this mathematical snapshot; no import bytes were changed.
- `lem-nrqm-orbital-and-spin-sphere-integral-in-angle-coordinates`, Statement (a),(b): this identifies the same polar measure and its normalization. No extra angular Jacobian is inserted into the sphere norms.
- `lem-nrqm-angular-momentum-orbital-casimir-identity`, Statement (a),(b): each sphere generator is self-adjoint on the finite invariant block and the sum of its squares is hbar^2 l(l+1) there. Taking the inner product with the unit Y_lm yields the sum of squared norms. This uses only the finite-block operator identity and proves the consumer's spatial quadratic-form conclusion; it asserts no full-space operator sum or domain equality.

## Limitations

This is a scoped local derivation and supplier-use check for two already identified proof defects, not an independent whole-item audit, consumer review, source retrieval, native acceptance, certification or gate attempt. No external full text was retrieved. No repair counter was advanced. Every live input and this candidate must be rehashed at final integration before integration; the lead corrected ownership to completed batch54, and this worker has not independently verified its final native history. The lead must examine any changed final bytes and their actual suppliers and retain existing repair caps.
