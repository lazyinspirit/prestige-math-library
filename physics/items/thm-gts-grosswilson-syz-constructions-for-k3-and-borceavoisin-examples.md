---
id: thm-gts-grosswilson-syz-constructions-for-k3-and-borceavoisin-examples
kind: theorem
title: Gross–Wilson SYZ constructions for K3 and Borcea–Voisin examples
status: published
origin: pipeline
domain: mathematics
library: physics
dependency_level: 5
deps:
  - def-gts-compact-calabiyau-manifold-conventions
  - def-gts-marked-m-polarized-k3-and-admissible-vector
  - def-gts-borcea-voisin-k3-involution-and-quotient-data
  - def-gts-special-lagrangian-with-phase
  - def-gts-smooth-syz-fibration-and-dual-local-system-torus
  - def-gts-symplectic-and-almost-complex-curve-data
  - cor-gts-ricci-flat-metric-in-every-kahler-class-when-c1-0
  - rem-gts-gross-wilson-k3-and-borcea-voisin-source-interface
  - thm-geometric-clifford-module-dirac-index-formula
  - thm-hodge-laplacian-kernel-represents-de-rham-and-dolbeault-cohomology
  - thm-compact-kahler-hodge-decomposition-via-elliptic-harmonic-forms
  - lem-hormander-solver-on-smooth-pseudoconvex-domain
  - def-axiom-of-choice
  - thm-hahn-banach-dominated-extension
  - thm-relative-hahn-banach-geometric-separation
  - thm-riesz-representation-for-hilbert-space
dependency_roles:
  def-gts-compact-calabiyau-manifold-conventions: mathematical-premise
  def-gts-marked-m-polarized-k3-and-admissible-vector: mathematical-premise
  def-gts-borcea-voisin-k3-involution-and-quotient-data: mathematical-premise
  def-gts-special-lagrangian-with-phase: mathematical-premise
  def-gts-smooth-syz-fibration-and-dual-local-system-torus: mathematical-premise
  def-gts-symplectic-and-almost-complex-curve-data: mathematical-premise
  cor-gts-ricci-flat-metric-in-every-kahler-class-when-c1-0: mathematical-premise
  rem-gts-gross-wilson-k3-and-borcea-voisin-source-interface: mathematical-premise
  thm-geometric-clifford-module-dirac-index-formula: mathematical-premise
  thm-hodge-laplacian-kernel-represents-de-rham-and-dolbeault-cohomology: mathematical-premise
  thm-compact-kahler-hodge-decomposition-via-elliptic-harmonic-forms: mathematical-premise
  lem-hormander-solver-on-smooth-pseudoconvex-domain: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  thm-hahn-banach-dominated-extension: mathematical-premise
  thm-relative-hahn-banach-geometric-separation: mathematical-premise
  thm-riesz-representation-for-hilbert-space: mathematical-premise
axiom_use: "The proof uses AC to supply the Hahn–Banach principle used in the continuous separations at Steps 115.1 and 126.1; the Riesz representation supplier in Step 115.1 requires only countable choice, which follows from AC."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Mark Gross and P. M. H. Wilson, Mirror Symmetry via 3-tori for a Class of Calabi-Yau Threefolds
      url: https://arxiv.org/pdf/alg-geom/9608004v3
      locator: §1 Proposition 1.3 and proof; §3 Borcea–Voisin construction and Proposition 3.1
    - title: Dominic Joyce, Lectures on Special Lagrangian Geometry
      url: https://arxiv.org/pdf/math/0111111v3
      locator: §§4.1–4.2, Definition 4.3 and phase convention; used only to check the local special-Lagrangian equations
    - title: "Jean-Pierre Demailly, Complex Analytic and Differential Geometry"
      url: https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf
      locator: "Chapter III §8, printed pp. 173–181 read in full; local Lelong analyticity and divisorial argument reconstructed below. Chapter VIII pp. 382–384 read for the nonintegrability-locus comparison; no general extension theorem consumed."
    - title: "Jean-Pierre Demailly, Regularization of closed positive currents and intersection theory"
      url: https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/regularization.pdf
      locator: "Complete Section 2, PDF pp. 6–12, read in full. The stronger Griffiths-curvature version suffices here and is reconstructed below; Sections 3–5 are not used."
    - title: "Nicholas Buchdahl, On compact Kähler surfaces, Annales de l'Institut Fourier 49 (1999), 287–302"
      url: https://aif.centre-mersenne.org/item/AIF_1999__49_1_287_0/
      locator: "Full article read. Lemma 7, Theorem 12 and Theorem 14/Corollary 15 guide the locally reconstructed irrational real-class Kähler-cone argument."
verification:
  precheck: pending
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
proof_strategy: direct
---

## Statement

Assume AC. Under Gross–Wilson’s exact lattice hypotheses, including an m-admissible vector and general complex and Kähler choices, a specified M-polarized K3 admits a continuous map to $S^2$ whose general fibres are special-Lagrangian $T^2$'s for the Ricci-flat Kähler metric in the selected class. Here and below, a special-Lagrangian torus fibration in the source sense permits singular fibres; only its general fibres are required to be smooth special-Lagrangian tori.

In the named Borcea–Voisin construction, under the source involution, quotient, degeneration, and metric hypotheses, there is a continuous map $\pi:X\to B=(S^2\times S^1)/\langle(\iota',j')\rangle$ whose general fibres are special-Lagrangian $T^3$'s contained in $X\setminus E_{\mathrm{exc}}$. Here $E_{\mathrm{exc}}$ is the exceptional locus of the quotient resolution, $\iota'$ and $j'$ are the involutions induced on the two product bases, and the metric on $X\setminus E_{\mathrm{exc}}$ is the pullback of the product quotient metric. More precisely, let $\Sigma\subset S^2$ be the finite set of critical values of the rotated elliptic K3 fibration, and let $q_B:S^2\times S^1\to B$ be the quotient map. Put
$$D=q_B\bigl((\Sigma\times S^1)\cup\operatorname{Fix}(\iota',j')\bigr),\qquad B^\circ=B\setminus D,\qquad X^\circ=\pi^{-1}(B^\circ).$$
The restriction $\pi:X^\circ\to B^\circ$ is a smooth SYZ fibration datum: a proper smooth submersion with connected oriented special-Lagrangian $T^3$ fibres. It has the integral character-torus dual, and the named mirror is a smooth topological compactification of that dual bundle over $B^\circ$. No smooth torus-submersion assertion is made over $D$. These are exact examples, not a general SYZ theorem or a proof of corrected analytic mirror equivalence.

## Facts & Assumptions

**Given:** Exactly the marked lattice, actual Kähler metric-class, general-choice, involution and allowed quotient-degeneration data in the Statement and the two source-data Definitions. In the Borcea–Voisin branch retain the actual D′/T′ and mirror-period exclusion. The full construction below supplies its period/chamber realization; no Gross–Wilson, Torelli, Siu, Demailly-regularization or real-cone theorem is assumed as an external premise.

[F1] [[def-gts-marked-m-polarized-k3-and-admissible-vector]] fixes the marking and lattice conventions. In the Borcea–Voisin branch, [[def-gts-borcea-voisin-k3-involution-and-quotient-data]] identifies $M$ with the $+1$ eigensublattice of $\iota^*$ and $T=M^\perp$ with its $-1$ eigensublattice; its restricted $D'_M/T'_M$ period and Kähler data are part of the hypotheses. In particular, the selected original Kähler class $[\omega]\in M\otimes\mathbb R$ is invariant under $\iota^*$.

[F2] [[cor-gts-ricci-flat-metric-in-every-kahler-class-when-c1-0]] supplies the Ricci-flat metric in an actual selected Kähler class, including uniqueness with its normalization.

[F3] [[thm-geometric-clifford-module-dirac-index-formula]] is valid for every compact boundaryless oriented even-dimensional Riemannian manifold with the specified geometric Clifford module; no projectivity hypothesis is present.

[F4] [[thm-hodge-laplacian-kernel-represents-de-rham-and-dolbeault-cohomology]] applies to every compact complex manifold and finite-rank holomorphic Hermitian bundle. [[thm-compact-kahler-hodge-decomposition-via-elliptic-harmonic-forms]] supplies the Kähler Hodge decomposition and Green operators. The dimension-two Dolbeault comparison, top-degree duality and ddbar identities used below are reconstructed explicitly.

[F5] [[lem-hormander-solver-on-smooth-pseudoconvex-domain]] supplies the proved smooth-weight reciprocal-Levi L² estimate on bounded smoothly bounded pseudoconvex domains. Singular weights below are obtained by smoothing, exhaustion and weak limits; its source's stronger named extension theorem is not consumed.

[F6] [[thm-hahn-banach-dominated-extension]] supplies the dominated extension under AC, hence the Hahn–Banach principle required by [[thm-relative-hahn-banach-geometric-separation]]. That geometric-separation theorem applies to disjoint convex subsets of a real normed space when the first subset is open, and supplies a nonzero bounded real-linear functional with a separating level. [[thm-riesz-representation-for-hilbert-space]] represents each bounded real-linear functional on the real Hilbert space used below by an inner product with a unique vector; its countable-choice hypothesis follows from AC. Weak compactness is used on bounded Hilbert balls and finite-mass positive measures.

[F7] [[def-gts-special-lagrangian-with-phase]] fixes the calibration equations, and [[def-gts-smooth-syz-fibration-and-dual-local-system-torus]] fixes the integral dual torus bundle. The source-interface remark records attribution and scope, not an unproved theorem input.

## Proof

**Proof technique:** direct construction, analytic index and weighted estimates, followed by hyperkähler rotation and integral torus duality.

1.1 Use the actual published thm-geometric-clifford-module-dirac-index-formula on the compact oriented four-manifold, with Clifford module Λ^{0,*}T*X⊗L and its Chern connection. In a unitary holomorphic frame at a point of a Kähler surface, Clifford action is √2(ε(ξ^{0,1})−ι(ξ^{1,0})); its connection trace gives exactly $D=\sqrt{2}(\bar\partial _L+\bar\partial _L*)$. This is a first-order identity: the principal symbols agree by the displayed exterior/contraction formula, and both zero-order connection terms vanish in a unitary normal holomorphic frame. The canonical Spin-c determinant is $K_X^{-1}$, so its relative character is exp(c₁(TX)/2)ch(L). Multiplying Â by that exponential gives Td, root by root from $(x/2)/\sinh (x/2)·e^{x/2}=x/(1−e^{−x})$. The index supplier therefore gives [given, F1, F2, F3, F4, F5, F6, F7, algebra]

2.1 χ_{∂bar}(L)=∫_X Td(TX)ch(L). [given, F1, F2, F3, F4, F5, F6, F7, step 1.1, algebra]

3.1 The actual general Hodge theorem thm-hodge-laplacian-kernel-represents-de-rham-and-dolbeault-cohomology applies to arbitrary finite-rank holomorphic Hermitian bundles on compact complex manifolds. To identify its smooth quotient with sheaf cohomology, use the coefficientwise local ∂bar Poincaré formula in a holomorphic frame: successively apply the one-coordinate Cauchy–Green integral and remove the closed terms; this is exact in positive degree. The resulting smooth-form sheaves are fine by smooth partitions of unity and hence acyclic. It is a fine resolution of O(L), proving the comparison in dimension two without using a Riemann-surface-only supplier. [given, F1, F2, F3, F4, F5, F6, F7, step 2.1, algebra]

4.1 Top-degree Serre duality here is equally explicit. Define the conjugate-linear Hodge map #_L by u∧#_L $v=⟨u,v⟩dV$, sending Ω^{0,2}(L) to $Ω^{2,0}(L*)=Ω^{0,0}(K_X⊗L*)$. Integration by parts against arbitrary Ω^{0,1}(L) gives $\#_L\bar\partial_L^*v=\bar\partial_{K L^*}\#_L v$. Since ∂bar $v=0$ automatically at top degree, # identifies harmonic (0,2) L-forms with holomorphic $K_X⊗L*$ sections; the converse follows by the inverse-star identity. Stokes makes the integral pairing descend to cohomology, and it is positive on (v,#v), hence perfect. Thus $h²(L)=h⁰(K_X⊗L*)$. [given, F1, F2, F3, F4, F5, F6, F7, step 3.1, algebra]

5.1 For a K3, simple connectivity gives H¹_deRham=0 and Kähler Hodge decomposition gives h¹(O)=0. Trivial K gives h⁰(K)=1 and h⁰(O)=1, hence χ(O)=2. The above index formula applied to O gives ∫c₂/12=2; applying it to L, with c₁(TX)=0, yields the actual analytic formula [given, F1, F2, F3, F4, F5, F6, F7, step 4.1, algebra]

6.1 χ(L)=2+c₁(L)²/2,    $h²(L)=h⁰(L^{-1})$. [given, F1, F2, F3, F4, F5, F6, F7, step 5.1, algebra]

7.1 Every integral real (1,1) class is a holomorphic line-bundle class: in 0→Z→O→O*→1 its image in H²(O) is its (0,2) component under the just-proved Dolbeault comparison and Kähler decomposition, so it vanishes. No algebraic-surface RR formula or projective criterion has been substituted. [given, F1, F2, F3, F4, F5, F6, F7, step 6.1, algebra]

8.1 Take the given K3 with Ricci-flat Kähler metric g in class ω. A nonzero holomorphic two-form Ω is parallel. Indeed its canonical-bundle connection has curvature the Ricci form, zero; log|Ω|² is pluriharmonic and hence constant on the compact surface, and the Chern-connection formula in the holomorphic frame Ω then gives ∇Ω=0. Normalize it so Re Ω, Im Ω and ω have equal square. [given, F1, F2, F3, F4, F5, F6, F7, step 7.1, algebra]

9.1 In a unitary real orthonormal frame the skew endomorphisms defined by these three forms satisfy I²=J²=K²=−1 and $IJ=K=−JI$; this follows by expanding Ω=(e¹+ie²)∧(e³+ie⁴) and ω=e¹∧e²+e³∧e⁴. They are parallel globally. A parallel almost complex structure has zero Nijenhuis tensor by the torsion-free connection formula, and its associated two-form is closed. Thus every unit quaternion combination is an actual Kähler complex structure for the same metric, with the cyclic holomorphic two-forms. It is still a K3: simple connectivity is unchanged and its displayed parallel (2,0)-form trivializes K. [given, F1, F2, F3, F4, F5, F6, F7, step 8.1, algebra]

10.1 Choose the phase of Ω so (E,Im Ω)=0 and (E,Re Ω)>0. This is possible because E∈T and the given period is outside Δ_M, so (E,Ω)≠0. Since $ω∈M_R$, (E,ω)=0. In the rotated structure with Kähler form Re Ω and holomorphic form Im Ω+iω, E is an integral (1,1) class with positive Kähler pairing. [given, F1, F2, F3, F4, F5, F6, F7, step 9.1, algebra]

11.1 Every integral (1,1) class α of this rotation is in T. Its pairing with ω is zero; the rational orthogonal projection of α to $M_Q$ therefore pairs to zero with ω. The stated $ω\perp ∩M=0$ forces that projection to vanish. Since T is primitive, α∈T. Consequently every root reflection below preserves the full lattice T. [given, F1, F2, F3, F4, F5, F6, F7, step 10.1, algebra]

12.1 Admissibility makes E primitive. If $E=aE₀$ with $a>1$, then (E₀,E′)=m/a is a positive integer smaller than m, contradicting the admissibility condition for E′. The same holds for E′. Its other divisibility conditions imply (α,E),(α,E′)∈mZ for all α∈T. The integral projection onto ZE+ZE′ therefore splits $T=U(m)\oplus\check M$ directly. [given, F1, F2, F3, F4, F5, F6, F7, step 11.1, algebra]

13.1 For the line bundle with class E, analytic RR and positive Kähler pairing give h⁰(E)≥2: $L^{-1}$ cannot have an effective divisor of negative Kähler area, so h²(E)=0 and χ(E)=2. Hence E is effective. [given, F1, F2, F3, F4, F5, F6, F7, step 12.1, algebra]

14.1 If E is not nef, some irreducible curve C has (E,C)<0 and is a component of an effective representative. Distinct curve intersections are nonnegative local analytic intersection numbers; thus C²<0. The divisor exact sequence and analytic RR give $χ(O_C)=−C²/2$, so $p_a(C)=1+C²/2≥0$. Since the lattice is even, C²=−2. The reflection E↦E+(E,C)C preserves primitiveness, isotropy and the forward component of the positive cone. Its new class has positive Kähler area, hence is effective by RR. [given, F1, F2, F3, F4, F5, F6, F7, step 13.1, algebra]

15.1 This process terminates with no projectivity assumption. If Pic_R contains no positive-square vector, E is in its radical: otherwise E+tα has positive square for one sign of sufficiently small t. Thus (E,C)=0 for every curve and E was already nef. If Pic_R contains a positive vector, it is a nondegenerate Lorentzian subspace. Project the Kähler vector into it; its square remains positive and its pairing with every curve remains positive. Root hyperplanes are locally finite in the positive cone: a root C²=−2 orthogonal to some vector in a fixed compact positive-cone neighborhood has uniformly bounded Euclidean norm, by negative definiteness of the corresponding orthogonal complements. There are only finitely many such integral roots. A small rational perturbation of the projected Kähler vector therefore pairs positively with every negative curve; positive-square and isotropic effective curves pair positively by the Lorentzian cone inequality. Clear denominators to obtain an integral forward positive H with (H,C)>0 for every curve. Each reflection step decreases the positive integer (H,E) by the positive integer −(E,C)(H,C). It must terminate. No assertion that H is ample was needed. [given, F1, F2, F3, F4, F5, F6, F7, step 14.1, algebra]

16.1 Let F be the resulting primitive nef isotropic class. All reflections were in T, so its divisibility there remains m. Their product w gives (F,wE′)=m. [given, F1, F2, F3, F4, F5, F6, F7, step 15.1, algebra]

17.1 Write the complete effective linear system |F| as moving part |A| plus fixed divisor B. Its moving part has A²≥0: two general divisors have no common component and their local intersections are nonnegative. Nefness and F²=0 give (F,A)=(F,B)=0. The Kähler Hodge-index inequality on $H^{1,1}_R$ says the form on F⊥ is nonpositive with radical RF; this is immediate from the signature (1,19), supplied by Kähler Hodge polarization and the given K3 lattice. Thus $A=qF$. Integrality and primitiveness give q a positive integer. Since $B=(1−q)F$ is effective, its positive Kähler area gives q≤1. Hence $q=1$ and $B=0$. [given, F1, F2, F3, F4, F5, F6, F7, step 16.1, algebra]

18.1 There are no base points: two general members have intersection F²=0, whereas a common base point contributes a positive local intersection. The resulting holomorphic map has curve image; otherwise two hyperplane pullbacks would have positive intersection. Its connected-fibre factorization has a smooth compact base curve C. A holomorphic one-form on C pulls back nontrivially at a generic submersion point, whereas $H^{1,0}(S)=0$. Thus C has genus zero. Riemann–Roch on C applied to one point gives a meromorphic function of degree one, identifying C with P¹. Equivalently this factorization is obtained by normalizing the image in the meromorphic function field of the pencil; its local finite integral algebras follow from Weierstrass division. The pullback of a positive-degree divisor on C is F; primitiveness forces degree one. Thus |F| is an elliptic pencil with connected fibres. [given, F1, F2, F3, F4, F5, F6, F7, step 17.1, algebra]

19.1 A general fibre is smooth by the holomorphic local rank theorem and the discrete critical-value set of this proper map. Its normal line is trivial, as the pullback of the tangent line of the base at that point. Adjunction and $K_S=O$ give trivial canonical line on the fibre; the connected compact smooth curve has genus one. It is a real two-torus. [given, F1, F2, F3, F4, F5, F6, F7, step 18.1, algebra]

20.1 A holomorphic curve for the rotated complex structure is special Lagrangian for the original I. On its oriented tangent plane the rotated Kähler form Re Ω is its metric area, while ω and Im Ω restrict to zero, by the quaternionic frame calculation. Thus the elliptic map gives the required special-Lagrangian T² fibration on the original K3 for its selected Ricci-flat metric. This fibration construction works for the actual given period/class data; it has not used a global Torelli existence assertion. [given, F1, F2, F3, F4, F5, F6, F7, step 19.1, algebra]

21.1 For the source's genuinely general choices, take a primitive class σ∈T with (F,σ)=m and with σ²=0 when $m>1$, or σ²=−2 when $m=1$. Such a class is wE′ in the first case and w(E′−E) in the second. Choose its own phase of Ω, which may differ from the fibre phase, to make σ algebraic on a rotation. For choices outside the countably many real period walls where another integral class becomes (1,1) on that rotation, its Picard lattice is Zσ. There are countably many reflection products w and integral candidate classes σ, so one may exclude the walls for all of them at once. The walls are proper: an extra class α not proportional to σ requires Im((α,Ω)/(σ,Ω))=0, a nontrivial real analytic equation on the period domain. In the rank-one case RR makes σ effective, with the sign chosen by positive area. Primitiveness forces an effective representative to be irreducible; its arithmetic genus is one or zero. In the isotropic case Steps 13.1–19.1 give a smooth elliptic member, and in the −2 case arithmetic genus zero gives a smooth rational curve. Rotation makes it a special-Lagrangian embedded surface, with topological intersection m with the fibration fibre. [given, F1, F2, F3, F4, F5, F6, F7, step 20.1, algebra]

22.1 These representatives persist on an open neighborhood among the data preserving the class: h²=0 and RR give the lower h⁰ bound, while upper semicontinuity at the constructed point gives equality and h¹=0. The kernels of the elliptic ∂bar family are therefore a smooth vector bundle, as is seen by its Green inverse and constant-rank finite-dimensional spectral projection. Smooth sections defining a smooth curve, or the basepoint-free pencil, persist by the implicit-function theorem and properness. The union of these neighborhoods contains the dense complement of the countable real walls, so is open dense. This is the usual source 'general choices' conclusion, and the section and fibre are allowed different calibration phases, exactly as Gross–Wilson warns. It is not an assertion that every point of $D_M\setminus Δ_M$ satisfies this extra numerical-section conclusion. [given, F1, F2, F3, F4, F5, F6, F7, step 21.1, algebra]

23.1 Let v be psh on a coordinate ball D in $C^{n}$, and let H be the vector space of holomorphic functions F on D with ∫_D $|F|²e^{−v}<∞$. Then [given, F1, F2, F3, F4, F5, F6, F7, step 22.1, algebra]

24.1 $A(v)=\{x:e^{−v}$ is not integrable on any neighbourhood of $x\}=\bigcap _{F∈H}\{F=0\}$. [given, F1, F2, F3, F4, F5, F6, F7, step 23.1, algebra]

25.1 One inclusion is immediate: if F(x)≠0 its modulus has a positive lower bound on a smaller neighbourhood. For the other, suppose $e^{−v}$ is integrable near x. Choose χ supported in that neighbourhood, equal to 1 on a smaller ball about x, and set $f=\bar\partial χ$. On D solve with the weights [given, F1, F2, F3, F4, F5, F6, F7, step 24.1, algebra]

26.1 $v_j(z)+n$ log(|z−x|²+δ_j²)+|z|², [given, F1, F2, F3, F4, F5, F6, F7, step 25.1, algebra]

27.1 where δ_j↓0 and $v_j$ are decreasing smooth psh regularizations on slightly smaller concentric balls exhausting D. These weights have Levi form ≥the Euclidean metric. The datum f is supported on a fixed compact annulus disjoint from x, so its reciprocal-Levi energy is bounded by $C∫_{suppχ}e^{−v}$, independently of j. The proved smooth-weight solver therefore gives $u_j$ with ∂bar $u_j=f$ and uniformly bounded weighted norm. On every compact subset of D the weights are bounded above uniformly; diagonal weak L² compactness yields u with ∂bar $u=f$. To retain the singular bound, first fix a compact subset and a fixed smooth approximation of the limiting weight; the monotonicity of the weights and weak lower semicontinuity give its weighted estimate, and then monotone convergence gives [given, F1, F2, F3, F4, F5, F6, F7, step 26.1, algebra]

28.1 ∫_D $|u|²e^{−v}|z−x|^{−2n}e^{−|z|²}<∞$. [given, F1, F2, F3, F4, F5, F6, F7, step 27.1, algebra]

29.1 This limit procedure also works if D itself is fixed and v is first smoothed on a slightly larger ball; the exhaustion version removes that extra margin. Since $f=0$ near x, distributional ∂bar $u=0$ there makes u holomorphic: convolve, use the ordinary Cauchy formula for the convolved functions, and pass to their local L² limit. A nonzero value u(x) would make the displayed pole integral infinite (v is bounded above near x); hence u(x)=0. Consequently $F=χ−u$ is holomorphic on D, F(x)=1, and belongs to H. The latter follows because $|z−x|^{−2n}e^{−|z|²}$ has a positive lower bound on bounded D and χ is supported where $e^{−v}$ is integrable. [given, F1, F2, F3, F4, F5, F6, F7, step 28.1, algebra]

30.1 For completeness, the common zero set of an arbitrary family of holomorphic functions is analytic locally. At a chosen point its germs generate an ideal in the convergent power-series local ring, which is Noetherian by induction using Weierstrass division. Choose finitely many of the functions generating that ideal of germs, and representatives of the finitely many irreducible germs of their zero set. Every member of the original family vanishes on each of these irreducible germs, and hence on a connected representative by the holomorphic identity theorem. Thus a fixed sufficiently small representative of that finite zero set is exactly the common zero set. This uses no multiplier-ideal coherence theorem and no extension theorem beyond the smooth-weight solver proved above. [given, F1, F2, F3, F4, F5, F6, F7, step 29.1, algebra]

31.1 Use $d^{c}$ and the harmless dimensional constant so that an integration current over a smooth complex curve has Lelong number 1 at a regular point. For a positive closed (1,1)-current T on a surface coordinate ball and y in a smaller ball put φ_y(x)=log|x−y|. The finite-radius density is [given, F1, F2, F3, F4, F5, F6, F7, step 30.1, algebra]

32.1 ν(y,r)=∫_{φ_y<r} $T∧dd^{c}φ_y$, [given, F1, F2, F3, F4, F5, F6, F7, step 31.1, algebra]

33.1 interpreted using max(φ_y,s) and then s→−∞. Stokes on an annulus gives the equivalent normalized Euclidean trace-mass formula $e^{−2r}∫_{|x−y|<e^{r}}T∧dd^{c}|x−y|²$. It also gives that ν(y,r) is increasing in r, so ν(y)=lim_(r→−∞)ν(y,r) exists. The same Stokes identity for two bounded psh weights equal near their common outer level shows their outer densities agree; their limiting densities depend only on their logarithmic singularity coefficient. In particular replacing φ_y by bφ_y+O(1) multiplies the limiting density by b. These statements follow first after smoothing T and the maximum and then by weak convergence of the trace measures, avoiding radii with boundary mass; monotonicity gives the remaining radii by one-sided limits. [given, F1, F2, F3, F4, F5, F6, F7, step 32.1, algebra]

34.1 The bounded-potential products used below need no unbounded Monge–Ampère assertion. If w is continuous psh and S is a positive closed current, define $S∧dd^{cw}=dd^{c}(wS)$. Smooth psh convolution gives positive approximants, so this is positive. For iterated products on relatively compact sets, choose nested cutoffs. Integration by parts bounds each product mass by C times the product of sup norms of its bounded potentials times the mass of S on a larger compact set. In comparing two uniformly close systems of potentials, telescope one factor at a time and move $dd^c$ onto the fixed test form; the same bound makes the difference tend to zero. Thus the iterated bounded-continuous-potential products and the integration-by-parts identities below follow from these estimates. Only the finite truncations max(φ_y,r), which are bounded and continuous on compact sets, are used in such products. [given, F1, F2, F3, F4, F5, F6, F7, step 33.1, algebra]

35.1 Shrink and rescale the two coordinate balls so that the sets {φ_y≤0} stay in a fixed compact subset of the x-ball. Choose smooth increasing χ with χ(t)=t for t≤−1 and χ(t)=0 for t≥0. For Re z<−1 set [given, F1, F2, F3, F4, F5, F6, F7, step 34.1, algebra]

36.1 V(y,z)=−∫_(Re z)^0 ν(y,t)χ′(t)dt. [given, F1, F2, F3, F4, F5, F6, F7, step 35.1, algebra]

37.1 For fixed z the bounded truncation $w=\max(φ_y,\operatorname{Re}z)$ gives, by Fubini and the outer-level Stokes identity, [given, F1, F2, F3, F4, F5, F6, F7, step 36.1, algebra]

38.1 V(y,z)=∫_x T(x) χ(w) $dd^{c}_x$ w. [given, F1, F2, F3, F4, F5, F6, F7, step 37.1, algebra]

39.1 On the full product space, integration by parts against a compactly supported test form in (y,z) gives [given, F1, F2, F3, F4, F5, F6, F7, step 38.1, algebra]

40.1 $dd^{c}_{y,z}V=∫_x$ T(x) $dd^{c}(χ(w))∧dd^{c}$ w. [given, F1, F2, F3, F4, F5, F6, F7, step 39.1, algebra]

41.1 The terms with an x-degree different from (2,2) integrate to zero. Where φ_y<−1, χ(w)=w and the integrand is positive. On the fixed corona −1≤φ_y≤0, $w=φ_y$ and the integrand is independent of z, with locally bounded coefficients: φ_y is smooth there and T has locally finite mass. Thus for a sufficiently large smooth ρ(y)=C|y|²+C′, [given, F1, F2, F3, F4, F5, F6, F7, step 40.1, algebra]

42.1 ρ(y)+V(y,z) is psh on {Re z<−1}. [given, F1, F2, F3, F4, F5, F6, F7, step 41.1, algebra]

43.1 All identities are legitimate by the bounded-potential calculus in Step 34.1. In particular their regularized versions pass to the limit locally uniformly in the truncation parameters. [given, F1, F2, F3, F4, F5, F6, F7, step 42.1, algebra]

44.1 For $a>0$ put $U_a(y)=\inf _{r<−1}(ρ(y)+V(y,r)−ar)$. This function is psh or identically −∞. Here is the required minimum argument. A smooth psh function independent of Im z is convex in r. Add δr²+δ/(−1−r), and restrict first to a compact subinterval, so that the infimum is attained in the interior and the r-Hessian is positive. The Levi matrix of its minimum in y is the Schur complement of the r-Hessian in the full Levi matrix, and is nonnegative. Smooth convolution in (y,Re z) reduces continuous psh functions to this case. Let the interval exhaust (−∞,−1) and then δ↓0; the infima decrease and have a local upper bound obtained by choosing one fixed r. Their limit is psh or −∞. The same construction on nested relatively compact y-balls proves the asserted local statement. [given, F1, F2, F3, F4, F5, F6, F7, step 43.1, algebra]

45.1 The density monotonicity gives V(y,r)≤rν(y,r)≤rν(y). Hence $U_a(y)=−∞$ if ν(y)>a. If $ν(y_0)<a$, choose $r_0$ with $ν(y_0,r_0)<a$. Finite-radius density is upper semicontinuous after a harmless enlargement of its radius: this follows directly from weak continuity of translated smooth ball cutoffs and then monotone approximation. Therefore on a neighbourhood of $y_0$ it is uniformly less than a at some slightly enlarged fixed $r_0$. Splitting the defining integral there gives V(y,r)−ar≥−C for $r<r_0$, while the remaining compact r-interval is also bounded below. Thus $U_a$ is bounded below near $y_0$. [given, F1, F2, F3, F4, F5, F6, F7, step 44.1, algebra]

46.1 The needed quantitative singularity bound can be checked explicitly. For y close to $y_0$ and 0<η<1, put [given, F1, F2, F3, F4, F5, F6, F7, step 45.1, algebra]

47.1 $r=\log |y−y_0|+\log (2e/η)$. [given, F1, F2, F3, F4, F5, F6, F7, step 46.1, algebra]

48.1 The inequality $||x−y|−|x−y_0||≤|y−y_0|$ allows the following psh weight to be glued across the two level spheres of $φ_{y_0}$: it equals $(1−η)φ_{y_0}+ηr−η/2$ inside level r−1; the maximum of this expression and φ_y on the annulus from r−1 to r; and φ_y outside level r. Indeed on the inner boundary the first expression exceeds φ_y, because $\log (1+e|y−y_0|e^{−r})≤η/2$; on the outer boundary it is less than φ_y, because $\log (1−|y−y_0|e^{−r})≥−η/2$. Outer-level Stokes and monotonicity therefore give [given, F1, F2, F3, F4, F5, F6, F7, step 47.1, algebra]

49.1 $ν(y,r)≥(1−η)ν(y_0)$. [given, F1, F2, F3, F4, F5, F6, F7, step 48.1, algebra]

50.1 Together with V≤rν(y,r), where $r<0$, this yields [given, F1, F2, F3, F4, F5, F6, F7, step 49.1, algebra]

51.1 $U_a(y)≤ρ(y)+((1−η)ν(y_0)−a)(\log |y−y_0|+\log (2e/η))$. [given, F1, F2, F3, F4, F5, F6, F7, step 50.1, algebra]

52.1 This is the precise logarithmic bound; it is not the unsupported implication that every psh pole has an analytic pole set. [given, F1, F2, F3, F4, F5, F6, F7, step 51.1, algebra]

53.1 Fix $c>0$. For $0<a<c$ and $0<b<(c−a)/4$, let $Z_{a,b}$ be the nonintegrability locus of $\exp (−U_a/b)$. Steps 23.1–30.1 make this analytic, unless $U_a≡−∞$, when it is the whole parameter ball and is again analytic. If $ν(y_0)<c$, choose a with $ν(y_0)<a<c$. Step 45.1 makes $U_a$ bounded below near $y_0$, so $y_0∉Z_{a,b}$ for every $b>0$. If $ν(y_0)≥c$, choose η small enough that $((1−η)c−a)/b>4$. The estimate in Step 51.1 bounds $\exp (−U_a/b)$ below by a constant times $|y−y_0|^{−q}$ with $q>4$, so it is not locally integrable on the complex surface parameter ball. Consequently [given, F1, F2, F3, F4, F5, F6, F7, step 52.1, algebra]

54.1 $\{ν(T,y)≥c\}=\bigcap _{0<a<c,0<b<(c−a)/4} Z_{a,b}$. [given, F1, F2, F3, F4, F5, F6, F7, step 53.1, algebra]

55.1 An arbitrary intersection of analytic subsets is analytic by the local Noetherian/irreducible-component argument in Step 30.1. This proves upper-level analyticity. Its dimension is at most one: an open set on which ν≥c would contain on the order of $r^{−4}$ disjoint radius-r balls, each with trace mass ≥Ccr²; their total mass would be unbounded as r→0. Hence this analytic set has no open component. [given, F1, F2, F3, F4, F5, F6, F7, step 54.1, algebra]

56.1 For an irreducible curve C put λ_C=inf_(x∈C)ν(T,x). Upper-level analyticity shows ν(T,x)=λ_C off a countable union of proper analytic subsets of C: take the intersections C∩{ν≥q} for rational q>λ_C. If λ_C>0, then T−λ_C[C] is positive. Here the measure argument proves the subtraction directly; no Skoda–El Mir closed-restriction theorem is used. [given, F1, F2, F3, F4, F5, F6, F7, step 55.1, algebra]

57.1 Work near a regular point of C and make C a coordinate complex line. For every a∈C the density estimate gives the trace-mass inequality [given, F1, F2, F3, F4, F5, F6, F7, step 56.1, algebra]

58.1 mass_T(B(a,r))≥λ_C mass_[C](B(a,r)). [given, F1, F2, F3, F4, F5, F6, F7, step 57.1, algebra]

59.1 Integrate this inequality against an arbitrary nonnegative compactly supported continuous function f(a) on C. If $g_r(z)=∫_C$ 1_(B(a,r))(z)f(a)darea_C(a), Fubini gives $∫g_r(T−λ_C[C])∧β≥0$, with β the Euclidean positive form. Dividing by the area of a curve ball, $g_r$ converges boundedly to f on C and to zero off C. Dominated convergence for coefficient measures therefore proves 1_C(T−λ_C[C])∧β≥0. Repeat after every invertible complex linear change of coordinates and let one eigenvalue of the resulting positive metric tend to zero. This tests every decomposable positive form and proves the matrix-measure inequality 1_CT≥λ_C[C]. Since T itself is positive off C, the desired global positivity follows across the regular locus. [given, F1, F2, F3, F4, F5, F6, F7, step 58.1, algebra]

60.1 The singular locus of a curve is discrete. A closed positive (1,1)-current on a surface has no trace-mass atoms: a finite atom would make the normalized ball density grow like $r^{−2}$, contradicting its finite upper bound at one fixed radius and monotonicity toward zero. The integration current has no atoms either, so the inequality extends across those discrete singularities. Closedness of T−λ_C[C] now follows immediately from closedness of the two currents, without ever differentiating 1_CT. [given, F1, F2, F3, F4, F5, F6, F7, step 59.1, algebra]

61.1 On a compact surface list the curve components appearing in the sets {ν(T,·)≥q}, q positive rational. There are countably many: each such analytic set has finitely many curve components by compactness and local irreducible decomposition. Subtract their respective λ_C successively. Different irreducible curves meet only in isolated points, so subtraction of one does not alter the generic density along another. Every finite remainder is positive and closed by the preceding argument. The decreasing positive remainders have bounded trace mass and converge weakly to a positive closed remainder R. Thus [given, F1, F2, F3, F4, F5, F6, F7, step 60.1, algebra]

62.1 $T=\sum _C$ λ_C[C]+R. [given, F1, F2, F3, F4, F5, F6, F7, step 61.1, algebra]

63.1 There is no curve on which R has positive generic density: any such curve was already a curve component of a positive rational upper-level set of T and had its full generic coefficient subtracted. Since Steps 31.1–55.1 apply to R, each {ν(R,·)≥c} is consequently a zero-dimensional analytic subset, and is finite on a compact surface. The coefficients and curves are unique, because generic Lelong density along a curve reads off its coefficient and the remainder has zero generic density there. [given, F1, F2, F3, F4, F5, F6, F7, step 62.1, algebra]

64.1 This proves the required divisorial decomposition and finite positive-threshold exceptional sets. [given, F1, F2, F3, F4, F5, F6, F7, step 63.1, algebra]

65.1 A smooth Hermitian metric on TX has, on a compact manifold, a finite Griffiths curvature lower bound. Choose K large enough to absorb its norm and the fixed normalization constants below. In local holomorphic coordinates and a holomorphic trivialization write ||xi||_z^2=xi* H(z) xi. At z0 choose H(z0)=Id. A holomorphic matrix g(z), g(z0)=Id, first cancels the linear pure z and bar-z terms of H by its linear Taylor coefficients. Its quadratic coefficients then cancel the pure zz and bar-z bar-z terms. The remaining quadratic term is [given, F1, F2, F3, F4, F5, F6, F7, step 64.1, algebra]

66.1 $\|g(z)\xi\|_z^2 = |\xi|^2 + \sum B_{j\bar k\lambda\bar\mu}z_j\bar z_k\xi_\lambda\bar\xi_\mu + O(|z|^3)|\xi|^2$. [given, F1, F2, F3, F4, F5, F6, F7, step 65.1, algebra]

67.1 The mixed coefficient is minus the Chern-curvature coefficient: this follows directly by differentiating $H^{-1}$ partial H at a frame with first derivatives zero. The Griffiths lower bound therefore gives [given, F1, F2, F3, F4, F5, F6, F7, step 66.1, algebra]

68.1 $\|g(z)\xi\|_z\le\|\xi\|_{z0}\exp(v(z-z0)+O(|z-z0|^3))$ [given, F1, F2, F3, F4, F5, F6, F7, step 67.1, algebra]

69.1 whenever $dd^c$ v is a slightly larger positive quadratic form than K omega at z0. Increasing that quadratic form slightly absorbs the cubic remainder on a smaller neighborhood. Thus the inequality holds there with exp(v) and no remainder. All such local constants are bounded uniformly on the fixed finite atlas. The freely enlarged K is independent of c and of all smoothing scales. [given, F1, F2, F3, F4, F5, F6, F7, step 68.1, algebra]

70.1 Let phi be psh in a coordinate domain. Define, with $s=Re$ w, [given, F1, F2, F3, F4, F5, F6, F7, step 69.1, algebra]

71.1 M(z,w) = $\sup _{||\xi ||_z\le 1}$ phi(z+exp(w)xi), $L_c(z,w)$ = $\inf _{t\le 0}$ [ M(z,w+t)−ct ]. [given, F1, F2, F3, F4, F5, F6, F7, step 70.1, algebra]

72.1 The phase of exp(w) is irrelevant. For a fixed z, M is increasing and convex in s: restrict phi to each complex line and use the subharmonic maximum three-circles inequality, then take the supremum over unit directions. The ball maximum is continuous for positive radius. Indeed nearby balls are sandwiched between concentric balls of radii r−eta and r+eta, and convexity gives continuity of the radial maximum. It follows also that the right radial derivative is upper semicontinuous, since it is the decreasing limit of continuous positive difference quotients. [given, F1, F2, F3, F4, F5, F6, F7, step 71.1, algebra]

73.1 For a CONSTANT norm M is jointly psh in (z,w), being the locally bounded upper envelope of the psh functions phi(z+exp(w)xi). Its partial Legendre transform $L_c$ is jointly psh. Here is the minimum principle used, rather than a citation. Smooth a psh function independent of Im w by translation convolution and add a small positive multiple of $|z|^{2}+s^{2}$. At an interior minimizer of M(z,w+t)−ct its second derivative in t is positive; differentiating the minimizer gives the complex Hessian in z as the Schur complement of the (z,w) Levi matrix. That matrix is semipositive, so its Schur complement is semipositive. At a boundary minimizer $t=0$ the same result holds with the one-sided variational inequality. Equivalently replace the constraint $t\le 0$ by smooth convex penalties tending to its indicator; then all minimizers are interior. Constrain first to a finite interval by a convex penalty at its left endpoint and let the endpoint tend to minus infinity. The smoothed strictly convex problems converge locally in L1, after upper regularization, to the displayed infimum; the distributional Levi inequalities pass to that limit. This proves the minimum principle also for singular psh inputs. The function is not identically minus infinity: it is bounded above by M(z,w) and finite wherever nu(phi,z)<c, while at points with larger Lelong number its minus-infinity value is the permitted psh singularity. [given, F1, F2, F3, F4, F5, F6, F7, step 72.1, algebra]

74.1 The elementary one-dimensional convex estimates give, for $v\ge 0$, [given, F1, F2, F3, F4, F5, F6, F7, step 73.1, algebra]

75.1 $L_c(z,w−v) \ge  L_c(z,w)−c$ v. [given, F1, F2, F3, F4, F5, F6, F7, step 74.1, algebra]

76.1 Indeed put t'=t−v in the infimum and enlarge the range $t'\le −v$ to $t'\le 0$. This estimate remains true at singular values by extended-real inequalities. [given, F1, F2, F3, F4, F5, F6, F7, step 75.1, algebra]

77.1 For a VARIABLE norm use the matrix g from Steps 65.1–69.1 and set [given, F1, F2, F3, F4, F5, F6, F7, step 76.1, algebra]

78.1 $h(z,w)=\sup _{||\xi ||_{z0}\le 1}$ phi(z+exp(w)g(z)xi). [given, F1, F2, F3, F4, F5, F6, F7, step 77.1, algebra]

79.1 It is psh. The norm estimate gives $M(z,w)\ge h(z,w−v(z−z0))$, with equality at $z=z0$. The same comparison holds for their Legendre transforms. Applying the submean inequality for $h_c$ along the complex disc $(z0+e^{i\theta}\zeta,w0+e^{i\theta}\eta)$, and observing that the Hermitian quadratic $v(e^{i\theta}\zeta)$ equals $v(\zeta)$, gives [given, F1, F2, F3, F4, F5, F6, F7, step 78.1, algebra]

80.1 $\operatorname{average}_{\theta}L_c(z0+e^{i\theta}\zeta,w0+e^{i\theta}\eta)\ge L_c(z0,w0-v(\zeta))\ge L_c(z0,w0)-c\,v(\zeta)$. [given, F1, F2, F3, F4, F5, F6, F7, step 79.1, algebra]

81.1 Use a slightly larger quadratic v to make the same bound valid at neighboring centers, then let its excess tend to zero. The distributional/submean characterization of quasi-psh functions proves [given, F1, F2, F3, F4, F5, F6, F7, step 80.1, algebra]

82.1 $dd^{c}_{z,w} L_c(z,w)(\zeta ,\eta ) \ge $ −Kc omega_z(zeta). [given, F1, F2, F3, F4, F5, F6, F7, step 81.1, algebra]

83.1 There is no error in the mixed or w directions. This is why no uncontrolled mixed heat-kernel estimate is being assumed. [given, F1, F2, F3, F4, F5, F6, F7, step 82.1, algebra]

84.1 Continuity off $E_c$ follows directly from the infimum, not from a regularity theorem. On a compact set where nu(phi,z)<c, upper semicontinuity of the radial derivative and its monotone limit nu(phi,z) give a uniform $t0<0$ such that the derivative is $<c$ for $t<t0$. Therefore the infimum can be restricted to the compact interval [t0,0]. It is then an infimum over a compact family of jointly continuous functions, hence continuous. [given, F1, F2, F3, F4, F5, F6, F7, step 83.1, algebra]

85.1 For completeness the Lelong shift is exactly (nu−c)_+. It suffices to compare radial maxima near a fixed point, since bounded smooth metric changes and coordinate distortions change only constants. Write $A(r)=\sup _{|z|\le r}\phi (z)$, so A(r)/log r tends to nu. Choosing the smoothing radius r at any center $|z|\le r$ gives the upper estimate $L_c(z,\log  \delta )\le A(2r)−c$ log(r/delta), hence a Lelong lower bound nu−c, together with positivity giving zero if that is negative. Conversely choose a center z in the radius-r ball whose value is arbitrarily close to A(r). For smoothing radii $t\le 2r$ the value in the infimum is bounded below by A(r)−c log(2r/delta). For $t\ge 2r$ its ball contains the radius-(t/2) ball at the original point, so it is bounded below by A(t/2)−c log(t/delta). The bounds (nu+eta)log $t−C_\eta  \le A(t)\le $ (nu−eta)log $t+C_\eta $ and minimization over t in [2r,delta] give a radial-maximum lower bound (max(nu−c,0)+O(eta))log $r−C_\eta $. Let eta tend to zero. Together these inequalities prove the exact shift. They also justify that the local infimum is L1, as the quasi-psh construction above requires. [given, F1, F2, F3, F4, F5, F6, F7, step 84.1, algebra]

86.1 For this attenuation construction, let T be a closed real (1,1)-current with $T\ge \gamma $, where gamma is a continuous real (1,1)-form; the inequality means T−gamma is positive. Write $T=\theta +dd^{c}$ psi globally, with theta smooth and closed and psi quasi-psh, and set $b=\gamma −\theta $. The decomposition follows on the compact Kähler surface by the ddbar identity for currents, obtained from the same Hodge Green operator by duality. The later applications take $\gamma =0$ for a positive current, or $\gamma =tγ$ when the current has the stated smooth lower bound tγ. Choose a fixed finite coordinate atlas. For a small $\delta >0$, cover the manifold by coordinate balls $B_j'=B(a_j,\delta )$ with $B_j=B(a_j,2\delta )$ contained in that atlas, using a maximal delta-separated family in each chart. Metric comparisons and all chart derivatives up to order three are uniform. Put $B_j''=B(a_j,\sqrt{2}\delta )$. [given, F1, F2, F3, F4, F5, F6, F7, step 85.1, algebra]

87.1 Choose on $B_j$ a constant Hermitian form $b_j$ with [given, F1, F2, F3, F4, F5, F6, F7, step 86.1, algebra]

88.1 0 $\le  b−b_j \le $ eta(delta) omega,    eta(delta)->0. [given, F1, F2, F3, F4, F5, F6, F7, step 87.1, algebra]

89.1 For instance take $b(a_j)$ minus a fixed multiple of its uniform modulus of continuity times the coordinate metric. Let $q_j$ be its quadratic potential centered at $a_j$, so $dd^{c} q_j=b_j$. Then $dd^{c}(\phi _j)=T−\gamma +(b−b_j)\ge 0$ for $\phi _j=\psi −q_j$, by the lower bound in step 86.1 and step 88.1. Thus phi_j is psh on $B_j$. Also $|q_j|=O(\delta ^{2})$, and the first derivatives of $q_j$ are O(delta). Use the variable metric induced from the global metric to form its $L_{j,c}$. Define [given, F1, F2, F3, F4, F5, F6, F7, step 86.1, step 88.1, algebra]

90.1 $p_j(x,w)=L_{j,c}(z_j(x),w)+q_j(z_j(x))−\delta |z_j(x)−a_j|^{2}$, p(x,w)=max_(x in $B_j''$) $p_j(x,w)$. [given, F1, F2, F3, F4, F5, F6, F7, step 89.1, algebra]

91.1 The following estimate is the essential gluing calculation. For a transition map h, Taylor's formula gives [given, F1, F2, F3, F4, F5, F6, F7, step 90.1, algebra]

92.1 $h(B_k(z,r))$ lies between the metric balls at h(z) of radii r−C $r^{2}$ and r+C $r^{2}$. [given, F1, F2, F3, F4, F5, F6, F7, step 91.1, algebra]

93.1 The metric norms in this comparison agree under dh(z). The radial derivatives of the ball suprema of psi are uniformly bounded at small radii in the fixed atlas. To see the uniformity, subtract one fixed smooth quadratic in each original chart to make psi psh there. Convexity in log radius bounds the derivative at radius $\le r0/2$ by its secant slope between r0/2 and r0; the two ball maxima are continuous and finite on the chart's compact inner subset. Adding back that fixed quadratic changes the derivative by a uniformly bounded O(r) term. Thus the ball inclusions change the suprema by at most [given, F1, F2, F3, F4, F5, F6, F7, step 92.1, algebra]

94.1 $C[\log(r+C r^2)-\log(r-C r^2)]\le C'r$. [given, F1, F2, F3, F4, F5, F6, F7, step 93.1, algebra]

95.1 Subtracting $q_j$ before taking the supremum and adding $q_j$ at the center adds another O(r), uniformly. Taking the infimum with $r=\exp(\operatorname{Re}w+t)$, $t\le 0$, retains an error at most $C'\exp(\operatorname{Re}w)$. Hence on overlaps [given, F1, F2, F3, F4, F5, F6, F7, step 94.1, algebra]

96.1 $p_j-p_k=\delta(|z_k-a_k|^2-|z_j-a_j|^2)+O(\exp(\operatorname{Re}w))$. [given, F1, F2, F3, F4, F5, F6, F7, step 95.1, algebra]

97.1 Near the boundary of $B_j''$, some inner ball $B_k'$ contains x. The displayed principal term is at most $−\delta ^{3}$ there, whereas the error is at most C exp(Re w). Choose exp(Re $w)<\delta ^{3}/(4C$). Then $p_j$ is strictly smaller than another participating function near its boundary and cannot contribute to the maximum. Consequently the maximum defines a genuine global quasi-psh function; no artificial chart-boundary jump is present. It is continuous outside $E_c(T)$, by Step 84.1. [given, F1, F2, F3, F4, F5, F6, F7, step 96.1, algebra]

98.1 Steps 77.1–83.1 give the Levi lower bound of each $L_{j,c}$. The quadratic $q_j$ restores b up to eta(delta)omega, and the last bump costs at most C delta omega. The maximum preserves a common local lower Hessian bound, after subtracting a local smooth quadratic majorant for its continuous negative bound and applying the psh maximum rule. Equivalently the same complex-disc inequality in Steps 79.1–82.1 applies after each holomorphic coordinate transition, its second-order coefficient being invariant and its third-order remainder vanishing in the distributional inequality. Thus at fixed w as above [given, F1, F2, F3, F4, F5, F6, F7, step 97.1, algebra]

99.1 $\theta +dd^{c}$ p(.,w) $\ge $ gamma−[Kc+eta(delta)+Cdelta]omega. [given, F1, F2, F3, F4, F5, F6, F7, step 98.1, algebra]

100.1 Each local $p_j$ has the exact same Lelong shift, so their finite maximum does too. The global function is locally bounded above at the singular set and has the unique quasi-psh upper extension there. Taking delta small gives any requested scale error a/2. No limiting interchange, monotonicity of an entire approximating sequence, or change of cohomology class is required for this application. [given, F1, F2, F3, F4, F5, F6, F7, step 99.1, algebra]

101.1 Here are the Richberg details needed, rather than a named smoothing theorem. Let p be continuous on the open complement $M=X$ minus $E_c(T)$, with $dd^{c} p\ge b0$ for a continuous real (1,1)-form b0. Choose a locally finite, star-finite system of coordinate balls $V_j$ with compact closures in M whose concentric smaller balls cover M. Take radii small enough that b0 and the desired positive error function have their prescribed small oscillation on each ball. Local translation convolution makes $p_j$ smooth, converges uniformly to p there, and has Hessian $\ge b0−\epsilon _j$ omega after the continuous-form oscillation is included. On each ball add a bump $\eta _j(r_j^{2}−|z_j|^{2})$, choosing eta_j small enough to cost less than one quarter of the desired local Hessian error. [given, F1, F2, F3, F4, F5, F6, F7, step 100.1, algebra]

102.1 First choose the eta_j, then convolution scales so small that the uniform error in any overlapping ball is less than one quarter of the positive bump on a covering smaller ball. This is possible because the system is star-finite and only finitely many inequalities are imposed at each step. Near each outer boundary another smaller ball supplies a strictly larger function; hence boundary branches do not enter the maximum. Replace the maximum by a smooth regularized maximum: convolve $\max (s_1,...,s_N)$ with product kernels of sufficiently small prescribed widths. This function is convex, nondecreasing in each argument, invariant under simultaneous translation, and is independent of any argument which is separated below the maximum by more than the widths. Therefore the local formulas agree when inactive boundary branches are dropped and define one global smooth function p'. Its Hessian is the sum of the branch Hessians with nonnegative weights summing to one, plus a semipositive covariance term from the convex Hessian of the regularized maximum. Thus $dd^{c} p'\ge b0−a(x)\omega $, and |p'−p| is smaller than any prescribed continuous positive tolerance, by the choices of bumps, convolution errors and widths. [given, F1, F2, F3, F4, F5, F6, F7, step 101.1, algebra]

103.1 Choose that tolerance bounded globally and tending to zero near $E_c(T)$, and choose the Hessian error $\le a/2$. The new function extends across $E_c(T)$ as the upper quasi-psh extension. Indeed after adding a local quadratic for its lower Hessian bound it is psh, locally bounded above, and its bounded difference from the old potential preserves the same removable upper extension and the same Lelong numbers. The resulting global current is cohomologous to T, smooth on M, and satisfies the interface bound gamma−(Kc+a)omega everywhere as a current. [given, F1, F2, F3, F4, F5, F6, F7, step 102.1, algebra]

104.1 For the divisor-subtracted $R_c$, the complementary Siu construction says $E_c(R_c)$ is a finite set. Apply Steps 65.1–103.1. Add a fixed small multiple b omega to the resulting current so that its lower bound is strictly positive. Near an isolated point it has a strictly psh local potential f, smooth on a punctured ball. Translation convolution $f_h$ is smooth on a smaller ball and retains a fixed positive Hessian lower bound. On a compact annulus away from the point it converges to f in every $C^{k}$ norm, since f is smooth there. A fixed cutoff chi, zero in the inner ball and one outside the annulus, gives [given, F1, F2, F3, F4, F5, F6, F7, step 103.1, algebra]

105.1 $f_{\mathrm{new}}$ = chi $f+(1−\chi )f_h$. [given, F1, F2, F3, F4, F5, F6, F7, step 104.1, algebra]

106.1 The two cutoff derivative errors are bounded by the $C^{2}$ annular difference and tend to zero, so for h small $f_{\mathrm{new}}$ remains strictly psh. It is smooth across the point and agrees exactly with f outside the annulus. The difference is an L1 function supported in the ball, hence changes the global current by $dd^c$ of a global distribution, without altering cohomology. Do this at the finitely many points, then subtract the added b omega. Taking all preliminary errors and b arbitrarily small gives a smooth $r_c\ge −(Kc+a)\omega $ in $[P−D_c]$, as claimed. [given, F1, F2, F3, F4, F5, F6, F7, step 105.1, algebra]

107.1 For a closed positive (1,1)-current P on the compact Kähler surface X and every $c>0$, subtract the finite divisor [given, F1, F2, F3, F4, F5, F6, F7, step 106.1, algebra]

108.1 $D_c=\sum_{\text{generic }\nu_C(P)\ge c}\nu_C(P)[C]$. [given, F1, F2, F3, F4, F5, F6, F7, step 107.1, algebra]

109.1 The Siu component proves $T=P−D_c$ is positive and that $E_c(T)$ is finite. The preceding quantitative attenuation, followed by smoothing at those finitely many points, produces a smooth closed form τ_(c,δ) in class $[P]−[D_c]$, with $τ_{c,δ}≥−(cK+o_δ(1))ω$, for a fixed background Kähler form ω and constant K. If P≥tγ for a fixed positive smooth form γ, the same construction preserves that lower bound up to $cKω+o_δ(1)ω$, because subtracting $D_c$ leaves $P−D_c≥tγ$. Indeed the Siu component proves the stronger matrix-measure inequality 1_CP≥ν_C(P)[C]; a smooth γ has zero coefficient-measure mass on a curve. Thus the subtraction preserves the lower bound both on the curve and on its complement, without applying a closed-current theorem to the nonclosed current P−tγ. Then apply attenuation with its arbitrary smooth lower curvature bound. This last clause is required; mere positivity of $P−D_c$ would lose the strict lower bound. [given, F1, F2, F3, F4, F5, F6, F7, step 108.1, algebra]

110.1 Point smoothing is elementary. Near an exceptional point write the strictly positive current as $dd^cf$, with f smooth away from that point. Convolve f on a smaller ball. On a fixed surrounding annulus this converges in every smooth norm. Interpolate by a fixed cutoff between f and its convolution; for sufficiently small convolution radius its Hessian remains strictly positive on the annulus, and it is positive inside by convolution. It agrees with f outside. For an almost-positive lower bound first add a fixed local quadratic potential for a slightly larger error, perform the construction, then subtract it. Thus the stated global loss can be enlarged arbitrarily slightly while keeping the same class. [given, F1, F2, F3, F4, F5, F6, F7, step 109.1, algebra]

111.1 Let γ be a smooth strictly positive real (1,1)-form with $dd^{c}γ=0$. Normalize ∫γ²=2. The already Kähler ddbar lemma gives a real closed correction γhat=γ+∂u+bar∂bar u. Adding $dd^cf$ to γhat arranges γ∧γhat to be a constant multiple of γ²: the scalar operator $f↦γ∧dd^{cf}$ is elliptic; its kernel and adjoint kernel are the constants by the maximum principle and $dd^{c}γ=0$, so its image is exactly the zero-integral top forms. Integration by parts gives, with a≥0, [given, F1, F2, F3, F4, F5, F6, F7, step 110.1, algebra]

112.1 ∫γhat²=∫γ∧γhat=2(1+a), [given, F1, F2, F3, F4, F5, F6, F7, step 111.1, algebra]

113.1 where a is the squared norm of the (0,2) correction divided by the normalization constant. One may verify both equalities by expanding γhat² and using dγhat=0; the remaining (0,2) term wedges with its conjugate with positive sign. In particular γhat is forward positive in the ordinary finite-dimensional Hodge-index space. [given, F1, F2, F3, F4, F5, F6, F7, step 112.1, algebra]

114.1 We need a null-square approximation fact for $dd^{c}$-closed forms, which follows from Hilbert-space separation. If λ is a real $dd^{c}$-closed L² (1,1)-form with ∫λ²≥0 and ∫γλ>0, then for every ε>0 there exist a positive L² form p and f in the Sobolev $dd^c$ domain with $||λ+dd^{cf}−p||_L²<ε$. To prove this, first note that the intersection form on $dd^{c}$-closed L² forms modulo $dd^{c}$-exact ones has index one. Solve $γ∧dd^{cf}=γ∧(λ−bγ)$ with $b=∫γλ/2$. The remainder is primitive pointwise and hence anti-self-dual, so its square integral is nonpositive. This proves the reverse Cauchy inequality on the forward nonnegative cone, including strict positive pairing between a forward null nonzero class and a positive definite one. [given, F1, F2, F3, F4, F5, F6, F7, step 113.1, algebra]

115.1 Rescale so that $\int_X\gamma\wedge\lambda=1$, and let $H=L^2(X,\Lambda^{1,1}_{\mathbb R})$ with the real Hilbert inner product induced by the Kähler metric. Let $\mathcal P=\{p\in H:p\text{ is pointwise positive semidefinite a.e. and }\int_X\gamma\wedge p=1\}$ and $\mathcal A=\lambda+\{dd^cf:f\in W^{2,2}(X,\mathbb R)\}$. Here $W^{2,2}$ is the Sobolev space of real functions with weak derivatives through order two in $L^2$; $dd^cf$ is then an $L^2$ real $(1,1)$-form. The set $\mathcal P$ is nonempty (it contains $\gamma/2$, since $\int_X\gamma^2=2$ in Step 111.1) and convex, and $\mathcal A$ is a nonempty affine subspace. If the asserted approximation fails, choose $\varepsilon>0$ such that $\|a-p\|_H\ge\varepsilon$ for every $a\in\mathcal A$, $p\in\mathcal P$. Then the open convex nonempty set $\mathcal U=\mathcal P+B_H(0,\varepsilon)$ is disjoint from $\mathcal A$. Apply the open-set clause of [[thm-relative-hahn-banach-geometric-separation]] to $(\mathcal U,\mathcal A)$. It gives a nonzero bounded real-linear functional $F\in H^*$ and $c\in\mathbb R$ with $F(u)<c\le F(a)$ for all $u\in\mathcal U$ and $a\in\mathcal A$. Because $\mathcal A$ contains $\lambda+t\,dd^cf$ for every $t\in\mathbb R$, the right inequality forces $F(dd^cf)=0$ for every $f\in W^{2,2}$ and $F(a)=F(\lambda)$ on $\mathcal A$. Taking the supremum over $h\in B_H(0,\varepsilon)$ in $F(p+h)<c$ yields $F(p)+\varepsilon\|F\|\le c\le F(\lambda)$ for every $p\in\mathcal P$.
By [[thm-riesz-representation-for-hilbert-space]], there is a unique $r\in H$ such that $F(q)=\langle q,r\rangle_H$. Let $*$ be the Hodge star of the Kähler metric; on real $(1,1)$-forms on a complex surface it is a self-adjoint involution, and $\langle q,r\rangle_H=\int_X q\wedge *r$. Put $\psi=-*r$ and $b=\int_X\psi\wedge\lambda=-F(\lambda)$. The annihilation identity makes $dd^c\psi=0$ in the distributional sense, while the separator inequality gives
$$\int_X(\psi-b\gamma)\wedge\lambda=0,\qquad \int_X(\psi-b\gamma)\wedge p\ge\varepsilon\|F\|\quad(p\in\mathcal P).$$
For every positive semidefinite $q\in H$, scaling by $\int_X\gamma\wedge q$ (when this is nonzero) gives $\int_X(\psi-b\gamma)\wedge q\ge\varepsilon\|F\|\int_X\gamma\wedge q$. In a local $\gamma$-unitary frame, test with rank-one positive forms supported on arbitrary measurable sets and with a countable dense set of complex directions. The resulting scalar inequalities hold almost everywhere and imply $\psi-b\gamma\ge\varepsilon\|F\|\gamma$ as Hermitian forms almost everywhere: on a complex surface the wedge-dual of the cone of semipositive Hermitian forms is the same cone, and rank-one tests detect each Rayleigh quotient. Thus $\psi-b\gamma$ is weakly $dd^c$-closed and positive definite; its square and its pairing with $\gamma$ are positive. The index-one inequality from Step 114.1 then forces $\int_X(\psi-b\gamma)\wedge\lambda>0$, contradicting the displayed zero pairing. This proves the approximation by contradiction. The smooth approximations of $p$ and $f$ asserted in Step 114.1 preserve an arbitrarily small $L^2$ error and strict positivity. [F1, F2, F3, F4, F5, F6, step 114.1, algebra]

116.1 If $a=0$, then γ itself is closed after the vanishing correction equations, and there is nothing to prove. For $a>0$ put [given, F1, F2, F3, F4, F5, F6, F7, step 115.1, algebra]

117.1 $t_0=1+a-\sqrt{a(1+a)}$,    $λ=γhat−t_0γ$. [given, F1, F2, F3, F4, F5, F6, F7, step 116.1, algebra]

118.1 Then $0<t_0<1$, ∫λ²=0, and ∫γλ>0. The approximation fact and bounded positive masses give a weak limit p≥0 with $p=λ+dd^{cf}$ for a distribution f. The $dd^c$ range is closed in distributions: fix the mean of f and use the Green inverse of the background Kähler scalar Laplacian on the trace, then test the remaining tensor equation. Consequently $P=p+t_0γ=γhat+dd^{cf}$ is closed and satisfies $P≥t_0γ$. [given, F1, F2, F3, F4, F5, F6, F7, step 117.1, algebra]

119.1 Apply Steps 107.1–110.1 with c↓0 and δ↓0. Obtain real effective divisors $D_i$ increasing coefficientwise, smooth closed τ_i in class $γhat−D_i$, and numbers $t_i↑t_0$ with $τ_i≥t_iγ$. Write $x_i=γhat·D_i=∫γ∧D_i≥0$. The closed correction of the positive form $τ_i−t_iγ$ is in class $(1−t_i)γhat−D_i$ and lies in the forward positive cone, by the same integration-by-parts square identity. Thus [given, F1, F2, F3, F4, F5, F6, F7, step 118.1, algebra]

120.1 $x_i<2(1+a)(1−t_i)$. [given, F1, F2, F3, F4, F5, F6, F7, step 119.1, algebra]

121.1 Pointwise positivity of $τ_i−t_iγ$ also implies [given, F1, F2, F3, F4, F5, F6, F7, step 120.1, algebra]

122.1 $0≤∫(τ_i−t_iγ)² =2(1+a)−4t_i(1+a)+2t_i²+D_i²−2(1−t_i)x_i$. [given, F1, F2, F3, F4, F5, F6, F7, step 121.1, algebra]

123.1 The Hodge-index norm ||D||²=x²/(1+a)−D² is positive definite. Combining the preceding two inequalities gives [given, F1, F2, F3, F4, F5, F6, F7, step 122.1, algebra]

124.1 $||D_i||²≤2(1+a)−4t_i(1+a)+2t_i²→0$. [given, F1, F2, F3, F4, F5, F6, F7, step 123.1, algebra]

125.1 Choose fixed smooth harmonic representatives $d_i$ of $D_i$. Their smooth norms tend to zero because the harmonic space is finite-dimensional. For i large, $τ_i+d_i$ is therefore positive, closed, and in class γhat. Its difference from γhat is $dd^{c}$-exact by the Kähler ddbar lemma, so its difference from γ is ∂u′+bar∂bar u′. This proves the required positive closed Aeppli representative, without assuming a Gauduchon-to-Kähler theorem. [given, F1, F2, F3, F4, F5, F6, F7, step 124.1, algebra]

126.1 Let α be a real (1,1) cohomology class with α²>0, α·ω>0, and $α·C>0$ for every irreducible curve C. Suppose first that α has no smooth positive representative modulo ∂+bar∂. Work in the real normed space of continuous real (1,1)-forms with the uniform norm, and take the affine subspace consisting of α plus smooth forms in im(∂+bar∂). The cone of continuous strictly positive forms is open and convex. If it met that affine subspace, the intersection would itself be a smooth positive form, contrary to the assumption. Apply the open-set separation clause of F6 and negate its functional if necessary. Scaling the positive cone and translating along the affine directions shows that the functional is nonnegative on positive forms, annihilates im(∂+bar∂), and has value at most zero on α. Its restriction to smooth forms is a nonzero positive current P, and annihilation gives dP=0 and α·P≤0. Separation from an open set is sufficient; no closedness of that image is assumed. [given, F1, F2, F3, F4, F5, F6, F7, step 125.1, algebra]

127.1 Take $c_i↓0$ and errors ε_i↓0 in Steps 107.1–110.1, so τ_i is smooth closed, represents $P−D_i$, and τ_i+ε_iω is strictly positive. The divisors $D_i$ increase with i. By the ordinary finite-dimensional Hodge-index inequality, [given, F1, F2, F3, F4, F5, F6, F7, step 126.1, algebra]

128.1 $0<α·(P−D_i+ε_iω)≤−α·D_i+ε_iα·ω$. [given, F1, F2, F3, F4, F5, F6, F7, step 127.1, algebra]

129.1 Since α is strictly positive on every irreducible curve, $α·D_i≥0$. These nonnegative numbers increase with i while the displayed upper bound tends to zero. Therefore every $D_i$ is zero. It follows that [P]+ε_i[ω] is represented by a positive closed form for every i. In particular [P]²≥0 and [P]·ω≥0. Taking limits in the displayed strict inequality gives α·[P]=0. Hodge index with the positive vector α now forces [P]=0. But P is a nonzero positive current and ω is strictly positive, so ∫P∧ω>0, a contradiction. [given, F1, F2, F3, F4, F5, F6, F7, step 128.1, algebra]

130.1 Thus α has a smooth positive $dd^{c}$-closed representative γ modulo ∂+bar∂. Steps 111.1–125.1 give a smooth positive closed representative in the same Aeppli class. Its difference from the original closed representative α is d-closed and Aeppli-exact; on a Kähler manifold the ddbar lemma makes that difference $dd^{c}$-exact, hence de Rham exact. It therefore represents exactly α. Conversely a Kähler class has all three stated numerical properties. This proves the criterion. [given, F1, F2, F3, F4, F5, F6, F7, step 129.1, algebra]

131.1 On a K3, irreducible curves have square ≥−2 by analytic RR and adjunction. A curve of nonnegative square with positive area lies in the forward nonnegative cone; every forward positive α pairs positively with it by Hodge index. It is consequently enough to require $α·C>0$ only for effective (−2) curves. This is the exact irrational, nonprojective K3 chamber criterion needed by the mirror construction. [given, F1, F2, F3, F4, F5, F6, F7, step 130.1, algebra]

132.1 Use the source regime D′_M: after phase and normalization Im Ω lies in check $M_R$ and ω lies in $M_R$. For general check M component and ω, every integral class perpendicular to Im Ω and ω lies in $P=U(1)$. This follows from the two rational orthogonal projections and the absence of integral vectors orthogonal to the chosen general vectors in the two Lorentzian lattices. Thus the rotated elliptic K3 has Pic=P. [given, F1, F2, F3, F4, F5, F6, F7, step 131.1, algebra]

133.1 Choose its primitive fibre E. Its isotropic partner E′ has E·E′=1. Analytic RR makes the class σ=E′−E effective: it has square −2, while its negative has negative intersection with the nef fibre. Every vertical irreducible component has class aE and hence square zero, so fibres cannot be reducible. In any decomposition of σ there is one horizontal component of fibre degree one; subtracting k fibres would give that component square −2(k+1), impossible for an irreducible K3 curve unless $k=0$. Hence σ is a smooth rational section. Every section has the same class (fibre degree one and square −2 determine it in U), and two different such curves would have negative intersection −2. It is unique. [given, F1, F2, F3, F4, F5, F6, F7, step 132.1, algebra]

134.1 In the Borcea–Voisin branch, F1 identifies $M$ with the $+1$ eigensublattice of $\iota^*$, and the selected original Kähler class satisfies $[\omega]\in M\otimes\mathbb R$. Thus $\iota^*[\omega]=[\omega]$. The involution is holomorphic for $I$, so uniqueness of the Ricci-flat metric makes it an isometry. Since $\iota^*\Omega=-\Omega$, the quaternionic rotation gives $\iota^*K=-K$, so it is anti-holomorphic for the elliptic structure $K$. Its action on fibre and section classes is their negative, precisely the sign caused by reversing complex-curve orientation. It therefore preserves their unoriented curves, the elliptic fibration and its unique section. It acts as an anti-holomorphic homomorphism on the smooth fibre groups, covering an anti-holomorphic involution of $\mathbb P^1$. [given, F1, F2, F3, F4, F5, F6, F7, step 133.1, algebra]

135.1 Let ν be fibrewise negation. It extends over the compact elliptic surface. One direct construction is the relative degree-three linear system of the section: on a smooth genus-one fibre its functions 1,x,y have poles 0,2,3 at the section and satisfy y²=x³+a x+b after completing square and cube. Transition changes preserve the negation y↦−y. The same cubic model covers the integral singular fibres; the minimal smooth model is obtained by resolving their plane singularities, and this involution lifts through the canonical point resolution. Alternatively its birational involution on the smooth surface preserves the holomorphic two-form up to −1 and hence is crepant; on a common point-blowup resolution the pullback two-form zeros count exactly the exceptional divisors with positive discrepancy. The two zero divisors agree, forcing exactly the same contractions on each side; descent gives a global automorphism. Thus this is an actual involution, not just a map on the discriminant complement. [given, F1, F2, F3, F4, F5, F6, F7, step 134.1, algebra]

136.1 It is anti-symplectic for K: locally the holomorphic two-form is a nonzero scalar times dt∧dx/y. Consequently every rational ν-invariant H² class is of type (1,1), since the (2,0) and (0,2) parts have eigenvalue −1. The invariant rational subspace is contained in $\operatorname{Pic}_Q=P_Q$ and contains the fibre and section classes; it is exactly $P_Q$. Orthogonality then gives [given, F1, F2, F3, F4, F5, F6, F7, step 135.1, algebra]

137.1 $ν*|P=1$,    ν*|P⊥=−1. [given, F1, F2, F3, F4, F5, F6, F7, step 136.1, algebra]

138.1 This is $r_P$ with no global Torelli faithfulness assumption. Since ι preserves the group section it commutes with ν. The explicit involution ι_m=νι is anti-holomorphic for K and has action $r_P$ ι* on cohomology. [given, F1, F2, F3, F4, F5, F6, F7, step 137.1, algebra]

139.1 On a smooth elliptic fibre let J be its integral symplectic intersection pairing. It identifies the underlying torus with its dual. If A is the map of homology induced by the anti-holomorphic ι between two fibres, then A is anti-symplectic, $A^{t}$ J $A=−J$. The transpose map on the dual is $(A^{-1})^{t}$. Hence [given, F1, F2, F3, F4, F5, F6, F7, step 138.1, algebra]

140.1 $J^{-1}(A^{-1})^{t} J=−A$. [given, F1, F2, F3, F4, F5, F6, F7, step 139.1, algebra]

141.1 Under fibrewise Poincaré duality the transpose involution is therefore νι, including its base action. This holds integrally, so it identifies the actual local-system tori and not merely their real tangent spaces. Both involutions preserve the section, eliminating torsor translations. [given, F1, F2, F3, F4, F5, F6, F7, step 140.1, algebra]

142.1 For an elliptic curve $A=R²/Z²$ with its flat metric, the map (x,y)↦y is a special-Lagrangian circle fibration. Negation acts as −1 on both fibre and base; its transpose on the dual fibre is again −1. The product fibration on S×A is consequently special Lagrangian: its product Kähler form vanishes on the product tangent spaces, and the product normalized holomorphic volume form restricts, after one constant phase, to the product volume. Its dual involution is exactly (νι,j). [given, F1, F2, F3, F4, F5, F6, F7, step 141.1, algebra]

143.1 The metric $g×g_A$ is invariant under (ι,j), so descends to the orbifold quotient Y. On its free locus it is Ricci-flat Kähler and its invariant holomorphic three-form descends. Near a fixed curve, local coordinates have action (z,x,y)↦(z,−x,−y); the invariant equation is uv=w² with $u=x²,v=y²,w=xy$. Blowing up the reduced singular locus resolves it: in the u chart, $w=us,v=us²$, with smooth coordinates (z,u,s); the v chart is analogous and they glue with an exceptional P¹. The volume form dz∧dx∧dy becomes ½dz∧du∧ds, nonvanishing. This proves that the resolution is crepant locally, and the displayed charts glue the global resolution. [given, F1, F2, F3, F4, F5, F6, F7, step 142.1, algebra]

144.1 On X minus its exceptional locus define the metric by pullback of the quotient metric. It is exactly the Ricci-flat metric relevant to the allowed source degeneration. No smooth nondegenerate Kähler metric through the exceptional divisor, and no metric-collapse convergence theorem, is asserted. Its length-space completion is the quotient orbifold, with each exceptional P¹ collapsed. The source wall-pullback hypothesis is precisely the use of this quotient metric rather than a newly claimed solution of the compact resolved Monge–Ampère problem. [given, F1, F2, F3, F4, F5, F6, F7, step 143.1, algebra]

145.1 The product fibration is equivariant for $(\iota,j)$ and therefore descends over $B=(S^2\times S^1)/(\iota',j')$. Its composite with the quotient resolution is the continuous compact fibre map $\pi:X\to B$. Use exactly $D,B^\circ,X^\circ$ in the Statement. Above $(S^2\times S^1)\setminus((\Sigma\times S^1)\cup\operatorname{Fix}(\iota',j'))$ the product map is a proper smooth torus submersion, and the base involution is free. The two fibres over any base orbit are exchanged, so their quotient is one connected $T^3$, not a quotient of one torus by a stabilizer. The free finite quotient supplies the smooth structure on $B^\circ$ and local trivializations of $X^\circ\to B^\circ$; properness follows by restricting the compact map $\pi$. Every fixed point in the total space maps to a fixed base point, so $X^\circ$ misses the exceptional locus and the resolution changes none of these fibres. The descended product volume form and phase orient and calibrate them. Thus this restriction is precisely the stated smooth SYZ datum. The full base is a topological three-manifold: near its fixed circles the normal action is $(a,b)\mapsto(-a,-b)$, whose quotient is $\mathbb R^2$ via the complex square. The compact map retains its singular fibres over $D$; it is not asserted to be a smooth torus bundle there. [given, F1, F2, F3, F4, F5, F6, F7, step 144.1, algebra]

146.1 Dualizing the smooth T³ group bundle commutes with pullback to the unramified double base cover and with its descent, since it is the contragredient of its integral local-system representation. The preceding section identifies the dual cover with the product torus bundle carrying (νι,j). Hence a compact K3 mirror model on which ι_m=νι becomes holomorphic supplies, after the same quotient resolution, an actual smooth compactification of the dual torus bundle. This proves the product/quotient/transpose portion without a named Gross–Wilson proposition as a premise. [given, F1, F2, F3, F4, F5, F6, F7, step 145.1, algebra]

147.1 In the actual general D′/T′ regime the conjugate elliptic model has Picard group $P=U(1)$. Keep its unmarked complex surface and its elliptic fibration fixed throughout. Use initially the conjugate marking −φ, so its marked effective fibre is E and its effective section is σ=E′−E. Its only effective root is σ: the roots of U are ±σ, and σ is effective by the already proved elliptic-section argument. The desired marked real (1,1) class is [given, F1, F2, F3, F4, F5, F6, F7, step 146.1, algebra]

148.1 $a=B+E\prime +(ω²−B²)E/2$. [given, F1, F2, F3, F4, F5, F6, F7, step 147.1, algebra]

149.1 Its square is ω²>0 and $a·E=1$, so it belongs to the forward positive component. Source mirror-period exclusion gives a·σ≠0: σ·ω=0, and a·σ=0 would make σ perpendicular to a+iω. If a·σ>0 put $w=1$. If a·σ<0 put $w=s_σ$, the integral root reflection x↦x+(x·σ)σ. It fixes M and checkM pointwise, fixes the conjugate elliptic period line, preserves the forward positive component, and takes a to a′=w(a) with a′·σ>0. The real K3 cone criterion now proves that a′ is an actual marked Kähler class on this fixed model. This proof uses only one reflection; there is no irrational integral-height or unspecified infinite reflection argument. [given, F1, F2, F3, F4, F5, F6, F7, step 148.1, algebra]

150.1 Give the conjugate elliptic surface the Ricci-flat metric in this class $a'$. In its original marking its holomorphic period is proportional to $\omega+i\check\omega$, whose two real parts have the same square $\omega^2$, as does $a'$. A common volume rescaling makes the quaternionic forms have exactly these normalizations. Rotating this metric gives a new complex structure with holomorphic period $a'+i\omega$ and Kähler class $\check\omega$. By F1, the original involution acts as $+1$ on $M$ and $-1$ on $T=P\oplus\check M$; the explicitly constructed fibre-negation involution $\nu$ acts as $+1$ on $P$ and $-1$ on $P^\perp$. Hence $\iota_m=\nu\iota$ acts as $+1$ on $\check M$ and $-1$ on $P\oplus M$. In particular it takes $a'$ to $-a'$ and the previous period $\omega+i\check\omega$ to minus its conjugate. Ricci-flat uniqueness makes it an isometry; the quaternionic identities then make it holomorphic and anti-symplectic after rotation. [given, F1, F2, F3, F4, F5, F6, F7, step 149.1, algebra]

151.1 NOW change the marking of this newly constructed mirror, and only that marking, by w inverse. Since w fixes ω and checkω and is an involution when nontrivial, the resulting marked period and Kähler class are precisely [given, F1, F2, F3, F4, F5, F6, F7, step 150.1, algebra]

152.1 w inverse(a′+iω)=a+iω=checkφ(B+iω),    w inverse(checkω)=checkω. [given, F1, F2, F3, F4, F5, F6, F7, step 151.1, algebra]

153.1 It also preserves the primitive mirror polarization checkM and commutes with the displayed involution action. Thus this is an actual realization of the prescribed mirror period, compatible Kähler class, and mirror involution. There is no appeal to period-map surjectivity or to global Torelli to produce this particular surface. [given, F1, F2, F3, F4, F5, F6, F7, step 152.1, algebra]

154.1 The elliptic fibration used to identify the underlying torus bundles has never been changed: it is still the original unmarked fibration on the common conjugate elliptic surface. If $w=s_σ$, its labelled fibre in the final mirror marking is E′ rather than E. This is why one cannot assert that the reflection preserved the originally selected fibre label. Neither the public Gross–Wilson theorem nor its named topological compactification claims a fixed homology label for that mirror fibration. The target period, mirror polarization and selected Kähler class remain exactly the specified ones; only the auxiliary label used to describe the common elliptic model changes. [given, F1, F2, F3, F4, F5, F6, F7, step 153.1, algebra]

155.1 In particular the integral Poincaré-duality identification of the smooth torus bundles still identifies the dual original involution with νiota, as proved directly in the product/quotient component. It is an identification of the unchanged unmarked bundles and involutions; it does not require w to induce an automorphism preserving the elliptic pencil. Taking its quotient with elliptic negation and resolving the explicitly described A1 curves therefore gives an actual compactification of the dual bundle in the named mirror period/involution family. The calibration and allowed quotient metric on the complement have the same direct product/rotation proofs. This proves the public topological mirror assertion without a subcase restriction on B or on volume. [given, F1, F2, F3, F4, F5, F6, F7, step 154.1, algebra]

156.1 The excluded wall $B=0$, ω²=2 is still excluded. When ω²−B² is below 2 but is not 2, the nontrivial reflection and subsequent mirror re-marking above are necessary, rather than an unproved assertion that positive square already selected the original chamber. The source locator is Gross–Wilson §2, printed pp.10–13; the reconstruction replaces its global-period/Torelli uses by this explicit general-Picard-U realization. [given, F1, F2, F3, F4, F5, F6, F7, step 155.1, algebra] ∎

## Proof references

[[thm-geometric-clifford-module-dirac-index-formula]]

[[thm-hodge-laplacian-kernel-represents-de-rham-and-dolbeault-cohomology]]

[[thm-compact-kahler-hodge-decomposition-via-elliptic-harmonic-forms]]

[[lem-hormander-solver-on-smooth-pseudoconvex-domain]]

[[thm-hahn-banach-dominated-extension]]

[[cor-gts-ricci-flat-metric-in-every-kahler-class-when-c1-0]]

[[def-gts-marked-m-polarized-k3-and-admissible-vector]]

[[def-gts-borcea-voisin-k3-involution-and-quotient-data]]
