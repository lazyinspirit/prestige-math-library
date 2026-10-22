---
id: lem-earring-relative-arc-data-supply-admissible-orbifold-and-determinant-lifts
kind: lemma
title: Earring relative-arc data supply admissible orbifold and determinant lifts
status: draft
origin: session
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - def-singular-instanton-knot-and-sutured-closure-data
  - thm-poincare-lefschetz-duality
  - lem-spin-structures-exist-iff-w2-vanishes-and-form-h1-torsor
  - lem-the-second-homotopy-group-of-so-three-vanishes
  - thm-first-chern-class-classifies-complex-line-bundles
  - lem-finite-good-covers-of-compact-smooth-boundary-manifolds-compute-integral-cohomology
  - lem-order-two-singular-gauge-completions-and-cylindrical-fredholm-operators
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Kronheimer and Mrowka, Khovanov homology is an unknot-detector
      url: https://people.math.harvard.edu/~kronheim/khovanov-unknot.pdf
      locator: complete local singular model §2.2, PDF7–10; §3.1–3.3, PDF27–29; arc and earring construction §4.2–4.3, PDF51–55
---

## Statement

Assume full AC. Use the actual based earring $K\cup L\subset S^3$, its normal radius arc $\omega$, the compact exterior $X$ and a supplied $SO(3)$ bundle $P\to X$ with $w_2(P)=PD_{\mathbb F_2}[\omega]$ in the singular-data definition. Both boundary-torus restrictions of $P$ have nonzero $w_2$. The bundle admits a compatible extension to an order-two orbifold bundle over $(S^3,K\cup L)$ whose local isotropy is rotation by $\pi$, whose axis-orientation cover on each link component is nontrivial, and whose ordinary local singular residue is $\frac14\operatorname{diag}(i,-i)d\theta$ up to conjugation. It therefore supplies the compatible finite local data required by the order-two gauge-completion lemma.

For this completed data every connection has determinant-one stabilizer exactly $\{\pm1\}$. The bundle on the exterior also has an actual $U(2)$ lift with a chosen determinant line and determinant connection, as needed for cylinder holonomy functions. These statements concern the topology and analytic input data, not independence of the resulting choices or construction of Floer homology. The supplied-bundle existence clause of the original definition is retained; this result does not classify all singular extensions up to canonical isomorphism.

## Statement references

[[def-singular-instanton-knot-and-sutured-closure-data]]

[Kronheimer–Mrowka, §§2.2, 3.1–3.3 and4.2–4.3](https://people.math.harvard.edu/~kronheim/khovanov-unknot.pdf)

## Facts & Assumptions

[F1] The earring arc has exactly one endpoint on each boundary torus and is normal there. Integral and mod-two Poincare–Lefschetz cap duality have coefficient-compatible chain formulas. [[def-singular-instanton-knot-and-sutured-closure-data]] [[thm-poincare-lefschetz-duality]]

[F2] The actual Spin lifting proof identifies the local triple-sign cocycle of lifts through $SU(2)\to SO(3)$ with the defined characteristic class $w_2$, for every oriented rank-three bundle. Its cell-boundary comparison also identifies the obstruction on an oriented two-cell with the parity of its quaternionic lifted clutching loop. [[lem-spin-structures-exist-iff-w2-vanishes-and-form-h1-torsor]]

[F3] The quaternionic cover has kernel $\{\pm1\}$ and $\pi_2(SO(3))=0$. Finite good covers of this compact exterior compute integral and mod-two cohomology compatibly and have smooth subordinate partitions. [[lem-the-second-homotopy-group-of-so-three-vanishes]] [[lem-finite-good-covers-of-compact-smooth-boundary-manifolds-compute-integral-cohomology]]

[F4] Integral degree-two classes are first Chern classes of actual line bundles. The finite invariant analytic completion and gauge regularity are constructed in the preceding analytic supplier. Full AC is inherited through these suppliers. [[thm-first-chern-class-classifies-complex-line-bundles]] [[lem-order-two-singular-gauge-completions-and-cylindrical-fredholm-operators]] [[def-axiom-of-choice]]



## Proof

**Given:** Full AC and the supplied exterior bundle in the Statement, without assuming an already constructed singular extension.

1.1 **The exact two boundary obstructions.** Push either boundary torus slightly into $X$. It intersects the truncated radius arc once modulo two, because that arc has one endpoint on that torus and its product boundary collar is normal. The cap formula of [F1] therefore gives $\langle w_2(P),[T_K]\rangle=\langle w_2(P),[T_L]\rangle=1$. Orient the arc from its endpoint on $K$ to its endpoint on $L$. Its integral relative class gives $c=PD_{\mathbb Z}[\omega]\in H^2(X;\mathbb Z)$, whose reduction is $w_2(P)$ by the same coefficient-compatible cap formula. No integral lift is inferred merely from an evenness or torsion-free assertion. [F1, given, construct, algebra]

1.2 **An explicit orbifold solid torus with this obstruction.** Write its lifted local coordinates as $(t,z)\in\mathbb R\times D^2$. On the trivial adjoint bundle impose the two actions $(t,z,v)\mapsto(t,-z,ivi^{-1})$ and $(t,z,v)\mapsto(t+2\pi,z,jvj^{-1})$. Their base actions commute and their adjoint fiber actions commute, since $ij=-ji$ and central signs act trivially. They therefore define a smooth order-two orbifold $SO(3)$ bundle over the solid torus, with the product connection. On its boundary its meridional and longitudinal holonomies are $\operatorname{Ad}i$ and $\operatorname{Ad}j$. The lifted commutator $iji^{-1}j^{-1}=-1$ makes its $w_2$ evaluate to one by [F2]. The meridional fixed axis is $\mathbb Ri$, and its longitudinal transport reverses this axis, so the axis cover of the core circle is nontrivial. In a meridional double angular cover $\theta=2\phi$, the gauge $u(\phi)=\exp(-\phi\operatorname{diag}(i,-i)/2)$ is single-valued in $SO(3)$; it changes under the deck involution by the adjoint of $\operatorname{diag}(i,-i)$. Transforming between its smooth lifted product frame and an ordinary punctured-tube frame gives exactly residue $\frac14\operatorname{diag}(i,-i)d\theta$, with the opposite sign conjugate by $j$. Thus this is the prescribed local singular model, not a smooth ordinary filling of the original exterior bundle. [F2, F3, F4, construct, algebra]

2.1 **Actual boundary identifications and global gluing.** Oriented rank-three bundles on the two-torus with the same $w_2$ are isomorphic. For a direct verification, use its one-vertex, two-edge, one-face cell structure. A bundle is trivial on the one-skeleton since $SO(3)$ is connected. Compare its boundary frame around the face with a frame on that face's disk. Its parity in $\pi_1SO(3)=\mathbb Z/2$ is exactly $w_2$ by [F2]. For two equal parities, an isomorphism over the one-skeleton has a boundary discrepancy loop of parity zero, hence a closed lift to $S^3$, which contracts; extending this contraction across the face supplies an actual isomorphism. Approximate it smoothly in bundle homomorphism charts and polar-normalize; compactness preserves invertibility and positive determinant. Apply this to each boundary restriction in step 1.1 and the model in step 1.2. Glue the two model solid tori to $P$ along collars using these actual isomorphisms. Their overlaps are free orbifold regions, so the lifted local transition maps give ordinary smooth compatible maps there. Finite normal and exterior charts now supply the finite compatible orbifold chart/bundle atlas. Average lifted local positive metrics and model connections with a finite invariant partition, agreeing with the displayed model in smaller core neighborhoods. This gives an actual metric and smooth model connection for the completion lemma, with the required residue and nontrivial axis covers. [F1, F2, F3, F4, step 1.1, step 1.2, construct, algebra]

3.1 **No determinant-one stabilizers have been hidden.** Let $u$ preserve any connection of this completion. The equation $d_Au=0$ implies it is a parallel unit-quaternion section; Sobolev gauge regularity in [F4] and the first-order equation make its lifted representatives continuous at the core and as regular as the connection. At a core point its invariance under the isotropy $i$ puts its value in the circle $\{a+bi:a^2+b^2=1\}$. Along the core the tangent connection form lies in the invariant axis algebra $\mathbb Ri$, so continuous parallel transport preserves that circle and acts trivially on it. But going once around the core includes the prescribed longitudinal transition $j$, which sends $a+bi$ to $a-bi$. Thus parallel invariance forces $b=0$ and $u=\pm1$. A parallel section is determined everywhere on the connected regular locus by its value at a point; using a radial path off the core gives the same conclusion on the whole bundle. Both central signs really are gauge stabilizers. This proves the all-connections hypothesis required by the critical-set supplier, not just absence of reducible flat connections. [F3, F4, step 1.2, step 2.1, construct, algebra]

4.1 **The actual exterior determinant lift.** Choose the finite good cover from [F3] refining bundle trivializations, and lift its $SO(3)$ transitions $g_{ij}$ to smooth unit quaternions $s_{ij}$ on the contractible overlaps. Write $s_{ij}s_{jk}s_{ki}=(-1)^{e_{ijk}}$; [F2] says $[e]=w_2(P)$. Represent the integral lift $c$ of step 1.1 by an integer nerve cocycle. Its reduction and $e$ differ by a mod-two coboundary, so changing the signs of $s_{ij}$ makes $e=c\bmod2$ as cochains. With a subordinate partition $\phi_k$ put $r_{ij}=\sum_k\phi_k c_{kij}$, extending summands by zero outside their supports. The cocycle identity gives $r_{ij}+r_{jk}-r_{ik}=c_{ijk}$. Set $z_{ij}=e^{\pi i r_{ij}}$ and $h_{ij}=z_{ij}s_{ij}\in U(2)$. Their triple products are $(-1)^{c_{ijk}}(-1)^{e_{ijk}}=1$, so they glue an actual $U(2)$ bundle whose projectivization is $P$. Its determinant transitions are $z_{ij}^2$ and have integral class $c$, by the same integer logarithm formula. Choose a smooth determinant connection by a finite partition and fix it. Every projective connection has a unique lifted connection with that determinant: in these local trivializations its trace-free part is the prescribed projective form and its scalar trace part is half the fixed determinant form; the transformation identities match because the determinant forms transform by $z_{ij}^2$. The determinant-one gauge group acts by its actual lifted gauges on this bundle. This supplies precisely the exterior lift used by cylinder functions, without asserting an honest $SU(2)$ lift of the nonzero-$w_2$ bundle or a $U(2)$ orbifold lift with trivial determinant isotropy. [F1, F2, F3, F4, step 1.1, construct, algebra] ∎

## Source notes

Own full reading for these data consists of the actual singular model §2.2, PDF7–10; the topology/irreducibility passage §§3.1–3.3, PDF27–29; and the arc/earring construction §§4.2–4.3, PDF51–55, in the authenticated 124-page primary. The full Spin and Spin-c cocycle proofs were read; the rank-three determinant lift is explicitly reconstructed here rather than applying a rank-four tangent-bundle statement to a different bundle. Boundary-torus classification is proved on its actual two-dimensional cells. The prescribed exterior bundle is an input of the existing original definition; no unproved classification of all non-Hausdorff singular data or canonical-independence claim is substituted for this construction.
