---
id: thm-serre-duality-compact-riemann-surfaces
kind: theorem
title: Serre duality on a compact Riemann surface
status: published
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
dependency_level: 12
deps:
  - thm-nondegeneracy-of-the-residue-pairing
  - thm-residue-pairing-for-line-bundle-cohomology
  - thm-finiteness-cohomology-compact-riemann-surface
  - thm-cech-dolbeault-comparison-for-line-bundles-on-compact-surfaces
  - thm-harmonic-star-duality-for-line-bundle-valued-dolbeault-cohomology
  - cor-dolbeault-cohomology-of-a-compact-riemann-surface-is-finite-dimensional
  - def-line-bundle-associated-to-a-divisor
  - def-divisor-principal-and-canonical-divisor-riemann-surface
  - def-dual-and-hom-vector-bundles
  - def-holomorphic-line-bundle-and-meromorphic-section-riemann-surface
  - def-meromorphic-differential-on-a-riemann-surface
  - def-hermitian-metric-and-ltwo-pairing-on-a-compact-riemann-surface
  - def-axiom-of-choice
  - def-riemann-surface-and-holomorphic-atlas
  - cor-holomorphic-functions-are-real-analytic-and-smooth
  - thm-compactness-under-continuous-maps
  - thm-local-maximum-modulus-principle
  - thm-identity-theorem-holomorphic-functions
verification:
  audited: "2026-10-08"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
    - title: Karl Otto Forster, Lectures on Riemann Surfaces (GTM 81, Springer 1981), translated by Bruce Gilligan
      url: https://ronan.terpereau.perso.math.cnrs.fr/Master_Class_2023_Dijon/FORSTER_Lectures%20on%20Riemann%20Surfaces.pdf
      locator: "Ch. 2 §§17.5–17.10, printed pp. 136–139: residue pairing, injectivity, Serre-duality statement (Theorem 17.9), and dimension corollary. Forster's surjectivity proof invokes Riemann–Roch, so it is not used here."
    - title: Eduard Looijenga, Riemann Surfaces (2007 author lecture notes)
      url: https://webspace.science.uu.nl/~looij101/riemannsurfaces.pdf
      locator: "Ch. 6 §4, Theorem 6.7 and proof, printed pp. 56–57: the residue map from meromorphic differentials with the divisor constraint to H¹(D)*. Its surjectivity argument invokes Riemann–Roch; the theorem is statement-level corroboration only."
    - title: Curtis T. McMullen, Riemann Surfaces, Harvard Math 213b course notes (2026)
      url: https://people.math.harvard.edu/~ctm/papers/home/text/class/harvard/213b/course/course.pdf
      locator: "Ch. 11 §§11.1 and 'Pairings', printed pp. 94–97: Serre-duality statement, the product O_{−D}⊗Ω_D→Ω and residue functional, and the dimension-count proof. The proof here instead uses the preceding Hodge-star nondegeneracy theorem."
    - title: Anand Deopurkar, Riemann-Roch (MATH 8320/2017 algebraic curves course notes, University of California Davis)
      url: https://ananddeopurkar.org/teaching/2017_algebraic_curves/RR.pdf
      locator: "§§2.1–2.3, printed pp. 2–5: the residue-pairing statement and injectivity proof; surjectivity uses an ample divisor, Serre vanishing, and a dimension count, so this proof is not used here."
    - title: Jean-Pierre Demailly, Complex Analytic and Differential Geometry (author manuscript, Universite Grenoble Alpes)
      url: https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf
      locator: "Ch. VI §7, (7.3)–(7.4), printed p. 310: the bilinear Serre pairing on Dolbeault groups, Stokes factorization, and harmonic-star identification; this is the analytic route used by the preceding nondegeneracy supplier."
---

## Statement

Assume the full Axiom of Choice ([[def-axiom-of-choice]]). Let $X$ be a compact Riemann surface, $D$ a divisor, $E:=\mathcal O_X(D)$, and $K_X:=\Lambda^{1,0}T^*X$ the canonical holomorphic line bundle. Put $F_D:=K_X\otimes E^*\cong K_X\otimes\mathcal O_X(-D)$ ([[def-line-bundle-associated-to-a-divisor]], [[def-dual-and-hom-vector-bundles]], [[def-holomorphic-line-bundle-and-meromorphic-section-riemann-surface]]). Let $B_D$ be the canonical residue pairing of [[thm-residue-pairing-for-line-bundle-cohomology]] on $H^1(X,E)\times H^0(X,F_D)$.

Write $h^q(X,G):=\dim_{\mathbb C}H^q(X,G)$ whenever the group is finite-dimensional.

1. **Duality.** The pairing $B_D$ is perfect. The induced complex-linear maps
$$H^1(X,E)\xrightarrow{\ \sim\ }H^0(X,F_D)^*,\qquad H^0(X,F_D)\xrightarrow{\ \sim\ }H^1(X,E)^*$$
are isomorphisms ([[thm-nondegeneracy-of-the-residue-pairing]]).

2. **Dimension form.** Both spaces are finite-dimensional and
$$i(D):=\dim H^1(X,E)=\dim H^0(X,F_D).$$
For any supplied nonzero meromorphic differential $\eta$ on $X$ ([[def-meromorphic-differential-on-a-riemann-surface]]), let $K_\eta:=(\eta)$ be its canonical divisor. The isomorphism $\mathcal O_X(K_\eta)\cong K_X$ identifies $H^0(X,F_D)$ with $L(K_\eta-D)$, so $i(D)=\ell(K_\eta-D)$ ([[def-line-bundle-associated-to-a-divisor]], [[def-divisor-principal-and-canonical-divisor-riemann-surface]], [[thm-finiteness-cohomology-compact-riemann-surface]]). If $\deg(K_\eta-D)<0$, then both dimensions are zero.

3. **Naturality.** If $D'\le D$, the inclusion $\mathcal O_X(D')\hookrightarrow\mathcal O_X(D)$ and its dual-induced map $H^0(X,F_D)\to H^0(X,F_{D'})$ satisfy
$$B_D(i_*\xi,\omega)=B_{D'}(\xi,i^*\omega)$$
for every $\xi\in H^1(X,\mathcal O_X(D'))$ and $\omega\in H^0(X,F_D)$. The pairing is compatible with the canonical line-bundle isomorphisms when $D$ is replaced by a linearly equivalent divisor or when the supplied $K_\eta$ is replaced by another linearly equivalent canonical divisor ([[def-line-bundle-associated-to-a-divisor]], [[def-divisor-principal-and-canonical-divisor-riemann-surface]]).

4. **Structure-sheaf case.** There is a canonical isomorphism $H^1(X,K_X)^*\cong H^0(X,\mathcal O_X)$ and
$$h^1(X,K_X)=h^0(X,\mathcal O_X)=1.$$

## Facts & Assumptions

**Given:** Full AC, a compact Riemann surface $X$, a divisor $D$, the divisor line bundle $E=\mathcal O_X(D)$, the canonical bundle $K_X$, and the pairings and cohomology groups in the statement. Choose compatible metrics as supplied by the preceding metric result, and use the canonical global Dolbeault comparison when applying Hodge duality.

[F1] The nondegeneracy theorem proves the intrinsic canonical pairing $B_D$ is perfect, with twist $K_X\otimes E^*$; both induced complex-linear maps are isomorphisms ([[thm-nondegeneracy-of-the-residue-pairing]]).

[F2] The residue-pairing theorem gives $B_D(\xi,\omega)=(2\pi i)^{-1}\int_X\theta\wedge\omega$ for any smooth Dolbeault representative $\theta$ of $\xi$ ([[thm-residue-pairing-for-line-bundle-cohomology]]).

[F3] The divisor construction gives $E^*\cong\mathcal O_X(-D)$ and, for a nonzero meromorphic differential $\eta$ with $K_\eta=(\eta)$, gives $\mathcal O_X(K_\eta)\cong K_X$ by $h\mapsto h\eta$. Hence $H^0(X,F_D)\cong L(K_\eta-D)$. Negative-degree divisors have zero $L$-space, and the dual in $F_D$ is the fibrewise complex-linear dual ([[def-meromorphic-differential-on-a-riemann-surface]], [[def-line-bundle-associated-to-a-divisor]], [[def-divisor-principal-and-canonical-divisor-riemann-surface]], [[def-dual-and-hom-vector-bundles]]).

[F4] The degree-one divisor cohomology is finite-dimensional with notation $i(D)=\dim H^1(X,\mathcal O_X(D))$ ([[thm-finiteness-cohomology-compact-riemann-surface]]).

[F5] For any Hermitian holomorphic line bundle $G$ with supplied compatible metrics, the bundle Hodge star maps $\mathcal H^{0,1}(X,G)$ conjugate-linearly onto $H^0(X,K_X\otimes G^*)$, and its integral pairing gives perfect complex-bilinear Dolbeault duality ([[thm-harmonic-star-duality-for-line-bundle-valued-dolbeault-cohomology]]).

[F6] Dolbeault cohomology of such $G$ is finite-dimensional and each degree-one class has a unique smooth harmonic representative ([[cor-dolbeault-cohomology-of-a-compact-riemann-surface-is-finite-dimensional]]).

[F7] The canonical global comparison identifies $H^1(X,\mathcal O_X(G))$ with smooth Dolbeault cohomology naturally in bundle maps, without requiring a finite good cover ([[thm-cech-dolbeault-comparison-for-line-bundles-on-compact-surfaces]]).

[F8] Full AC is assumed by the comparison, finiteness and Hodge suppliers, including the supplied metric and harmonic-space constructions; no additional selection is made in this proof ([[def-axiom-of-choice]]).

[F9] A holomorphic function is continuous ([[cor-holomorphic-functions-are-real-analytic-and-smooth]]), and its modulus is a continuous real-valued function. A continuous real-valued function on a nonempty compact space attains a maximum ([[thm-compactness-under-continuous-maps]]).

[F10] A holomorphic function attaining a local interior maximum of its modulus is constant on a connected complex domain ([[thm-local-maximum-modulus-principle]]). If two holomorphic functions on a connected complex domain agree on a nonempty open subset, they agree throughout ([[thm-identity-theorem-holomorphic-functions]]).

[F11] A Riemann surface is nonempty and connected; each point has a holomorphic chart ([[def-riemann-surface-and-holomorphic-atlas]]).

[F12] The domains of a holomorphic atlas cover $X$, so every point lies in a chart where the local maximum-modulus and identity theorems apply ([[def-riemann-surface-and-holomorphic-atlas]]).

[F13] The canonical bundle $K_X$ is holomorphic, and supplied compatible Hermitian and Riemannian metrics define the harmonic Hodge-star pairing used for $G=K_X$ ([[def-holomorphic-line-bundle-and-meromorphic-section-riemann-surface]], [[def-hermitian-metric-and-ltwo-pairing-on-a-compact-riemann-surface]]).

## Proof

The first three claims are the preceding residue-pairing theorem with its canonical-bundle twist, and naturality follows from the evaluation pairing. The structure-sheaf case uses the same Hodge-star theorem for the canonical line bundle and the maximum-modulus principle.

1.1 Set $E=\mathcal O_X(D)$ and $F_D=K_X\otimes E^*$. By [F1], the pairing $B_D$ is perfect and its two induced maps are complex-linear isomorphisms. The identification $E^*\cong\mathcal O_X(-D)$ in [F3] gives the displayed canonical twist. If a nonzero meromorphic differential $\eta$ is supplied, the local section map $h\mapsto h\eta$ gives $\mathcal O_X(K_\eta)\cong K_X$; tensoring with $\mathcal O_X(-D)$ identifies $\mathcal O_X(K_\eta-D)$ with $F_D$. Hence its holomorphic sections correspond exactly to zero and the nonzero meromorphic functions $h$ satisfying $(h)+K_\eta-D\ge0$, namely $L(K_\eta-D)$. [F1, F3, F8, given]

1.2 If $D'\le D$, the sheaf inclusion $j:\mathcal O_X(D')\hookrightarrow\mathcal O_X(D)$ induces the cohomology map $j_*$. Its dual bundle map $j^*:\mathcal O_X(D)^*\to\mathcal O_X(D')^*$ induces $H^0(X,F_D)\to H^0(X,F_{D'})$. For a Dolbeault representative $\theta$ of $\xi\in H^1(X,\mathcal O_X(D'))$, the representative of $j_*\xi$ is $j\theta$. Evaluation satisfies $(j\theta)\wedge\omega=\theta\wedge(j^*\omega)$ pointwise, so the integral formula [F2] gives $B_D(j_*\xi,\omega)=B_{D'}(\xi,j^*\omega)$. Thus the stated square commutes. [F2, F7, algebra]

2.1 By [F4], $H^1(X,E)$ is finite-dimensional; by [F1] its perfect dual is $H^0(X,F_D)$, which is therefore finite-dimensional of the same dimension. Under the identification of step 1.1, this gives $i(D)=\ell(K_\eta-D)$ for every supplied $\eta$. If $\deg(K_\eta-D)<0$, [F3] gives $L(K_\eta-D)=0$; the isomorphism in [F1] then forces $H^1(X,E)=0$ as well. [F1, F3, F4, step 1.1, algebra]

2.2 If $(g)=D'-D$, [F3] gives the isomorphism $\Phi:\mathcal O_X(D)\to\mathcal O_X(D')$ represented on meromorphic coefficients by $h\mapsto h/g$. Its dual induces $K_X\otimes\mathcal O_X(-D')\to K_X\otimes\mathcal O_X(-D)$. Since evaluation of a section and a dual section is unchanged when they are transported by $\Phi$ and its dual, the same pointwise integral calculation as in step 1.2 proves compatibility of the pairing with these isomorphisms. If $\eta'=g\eta$, then $K_{\eta'}=K_\eta+(g)$ and the map $h\mapsto h/g$ sends $h\eta$ to $(h/g)\eta'=h\eta$; hence changing the supplied canonical divisor preserves the differential and the pairing. [F2, F3, step 1.2, algebra]

3.1 Apply [F5] and [F6] to the holomorphic line bundle $G=K_X$. The comparison [F7] identifies $H^1(X,K_X)$ with its Dolbeault group, and the harmonic-star pairing identifies its complex-linear dual with $H^0(X,K_X\otimes K_X^*)=H^0(X,\mathcal O_X)$. To compute the latter space, let $f\in H^0(X,\mathcal O_X)$. By [F9], $|f|$ attains a maximum at some point of the nonempty compact space $X$. Choose a chart about that point and a smaller coordinate disk on which the maximum is local; [F10] makes $f$ constant on that disk. The set of points having a neighborhood on which $f$ equals this constant is nonempty and open. It is closed: if $p$ is in its closure, [F12] supplies a chart at $p$; choose a connected coordinate disk inside that chart meeting the set. The identity theorem in [F10] makes $f$ equal to the same constant on the disk. Connectedness in [F11] now makes the set all of $X$. Thus every holomorphic function on $X$ is constant, and constants give $H^0(X,\mathcal O_X)\cong\mathbb C$, of dimension one. The duality already proved in this step then gives $h^1(X,K_X)=1$. [F5, F6, F7, F8, F9, F10, F11, F12, F13, given] ∎
