---
id: thm-cech-dolbeault-comparison-for-line-bundles-on-compact-surfaces
kind: theorem
title: Cech--Dolbeault comparison for holomorphic line bundles on a compact Riemann surface
status: draft
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
dependency_level: 3
deps:
  - def-cech-cohomology-holomorphic-line-bundle-sections
  - def-holomorphic-line-bundle-and-meromorphic-section-riemann-surface
  - thm-dolbeault-lemma-polydisc
  - thm-dolbeault-cohomology-polydisc-vanishes-positive-q
  - thm-smooth-function-module-sheaves-are-acyclic
  - thm-long-exact-sequence-sheaf-cohomology
  - thm-leray-acyclic-cover-theorem
  - thm-cech-to-sheaf-cohomology-comparison
  - thm-acyclic-resolution-theorem-for-right-derived-functors
  - def-direct-sum-total-complex-on-finite-diagonals
  - def-acyclic-cover-for-sheaf
  - def-restriction-sheaf-open-subspace
  - def-exact-sequence-sheaves
  - thm-exactness-of-sheaves-stalkwise
  - def-sheaf-cohomology-derived-global-sections
  - def-bigraded-complex-differential-forms
  - def-maximal-dbar-operator-and-hilbert-adjoint-on-a-compact-riemann-surface
  - def-axiom-of-choice
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
    - title: Karl Otto Forster, Lectures on Riemann Surfaces (GTM 81, Springer 1981), translated by Bruce Gilligan
      url: http://ronan.terpereau.perso.math.cnrs.fr/Master_Class_2023_Dijon/FORSTER_Lectures%20on%20Riemann%20Surfaces.pdf
      locator: "Ch. 2 §§13.1–13.4, printed pp. 104–107: solving the scalar d-bar equation on a disc, including an exhaustion proof for arbitrary smooth data, and H^1(D,O)=0; §15.9(a), §15.14(a), printed pp. 121, 125: the exact Dolbeault sheaf sequence and H^1(X,O) as the smooth d-bar quotient. These source statements are scalar; the proof here passes to E by local holomorphic frames."
    - title: Karl Otto Forster, Lectures on Riemann Surfaces (GTM 81, Springer 1981), translated by Bruce Gilligan
      url: http://ronan.terpereau.perso.math.cnrs.fr/Master_Class_2023_Dijon/FORSTER_Lectures%20on%20Riemann%20Surfaces.pdf
      locator: "Ch. 2 §12.8, printed pp. 101–102: Leray's acyclic-cover comparison in Forster's direct-limit Cech cohomology convention; the derived-cohomology comparison used here is the library's Leray theorem"
    - title: Curtis T. McMullen, Riemann Surfaces, Harvard Math 213b course notes (2026)
      url: https://people.math.harvard.edu/~ctm/papers/home/text/class/harvard/213b/course/course.pdf
      locator: "Ch. 8, Theorems 8.4–8.5, printed pp. 79–80: the exact scalar Dolbeault sequence, H^1(X,O) as the global smooth Dolbeault quotient, and H^1 of the unit disc vanishing; the proof here extends these scalar claims to a line bundle through local frames"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $X$ be a compact
Riemann surface, let $E$ be a holomorphic line bundle, and supply compatible
metrics $g,h$ as in the maximal Dolbeault-operator datum
([[def-maximal-dbar-operator-and-hilbert-adjoint-on-a-compact-riemann-surface]]).
Write $\bar\partial_E$ for the smooth bundle Dolbeault operator defined by
[[def-holomorphic-line-bundle-and-meromorphic-section-riemann-surface]]; the
maximal operator $\bar D$ restricts to it on smooth sections. Set
$$\Omega^{0,q}(X,E):=C^\infty(X,\Lambda^{0,q}T^*X\otimes E),\qquad q=0,1.$$
Then the sheaf sequence
$$0\longrightarrow\mathcal O_X(E)\longrightarrow\mathcal E^0(E) \xrightarrow{\ \bar\partial_E\ }\mathcal E^{0,1}(E)\longrightarrow0$$
is exact, where $\mathcal E^q(E)$ is the sheaf of smooth $E$-valued $(0,q)$
forms. Moreover,
$$H^1(X,\mathcal O_X(E))\cong \frac{\Omega^{0,1}(X,E)}{\bar\partial_E\Omega^{0,0}(X,E)},\qquad H^0(X,\mathcal O_X(E))=H^0(X,E),\qquad H^q(X,\mathcal O_X(E))=0\quad(q\ge2).$$
The global identifications are natural in holomorphic bundle maps.
For the fixed-cover comparison, additionally let $\mathfrak U$ be a supplied
finite good cover of $X$ subordinate to holomorphic frame domains for $E$
([[def-cech-cohomology-holomorphic-line-bundle-sections]]). For every
$p\ge0$, its canonical Leray comparison map is an isomorphism
$$\varphi^p_{\mathfrak U}:\check H^p(\mathfrak U,\mathcal O_X(E)) \xrightarrow{\ \sim\ }H^p(X,\mathcal O_X(E)).$$
These identifications are canonical and compatible with refinement; any two
such frame-subordinate finite good covers identify canonically through
$H^p(X,\mathcal O_X(E))$. We normalize the degree-one Dolbeault identification by Forster's convention: if a holomorphic Čech cocycle has a smooth splitting $c_{ij}=b_j-b_i$, its sheaf comparison class corresponds to $[\bar\partial_E b_i]$. This is the negative of the identification obtained directly from the Čech–Dolbeault total differential $\delta+(-1)^p\bar\partial_E$; the sign is fixed here for the residue pairing. The displayed quotient is a quotient of smooth
forms; it does not assert that the Hilbert-space cokernel of the full maximal
operator has already been identified with it.

## Facts & Assumptions

**Given:** Full AC, a compact Riemann surface $X$, a holomorphic line bundle $E$ with supplied compatible metrics. For the fixed-cover Leray claim, additionally supply a finite good cover subordinate to holomorphic frame domains of $E$.

[F1] In holomorphic frames the smooth bundle Dolbeault operator is $\bar\partial_E(fe)=(\bar\partial f)e$, and its kernel on smooth sections is the sheaf of holomorphic sections ([[def-holomorphic-line-bundle-and-meromorphic-section-riemann-surface]]).

[F2] The maximal $L^2$ operator extends the smooth bundle Dolbeault operator ([[def-maximal-dbar-operator-and-hilbert-adjoint-on-a-compact-riemann-surface]]).

[F3] A sequence of sheaves is exact if and only if its sequence of stalks is exact ([[def-exact-sequence-sheaves]], [[thm-exactness-of-sheaves-stalkwise]]).

[F4] A smooth $\bar\partial$-closed form on a polydisc has a primitive after restriction to a coordinate polydisc compactly contained in it ([[thm-dolbeault-lemma-polydisc]]).

[F5] Under full AC the positive-degree Dolbeault cohomology of a one-dimensional disc vanishes: every smooth $\bar\partial$-closed $(0,1)$-form on the disc is $\bar\partial$ of a smooth function ([[thm-dolbeault-cohomology-polydisc-vanishes-positive-q]]).

[F6] Any sheaf of modules over $\mathcal C_U^\infty$ has vanishing higher derived global sections on every open $U$ of a smooth manifold; this theorem uses AC for resolutions and its consequences $\mathrm{AC}_\omega$ and DC for partitions and acyclic-resolution comparison ([[thm-smooth-function-module-sheaves-are-acyclic]]).

[F7] A finite good cover has disc-like members and every nonempty finite intersection is biholomorphic to a disc; subordination to a holomorphic frame cover makes $E$ trivial on each such intersection ([[def-cech-cohomology-holomorphic-line-bundle-sections]], [[def-holomorphic-line-bundle-and-meromorphic-section-riemann-surface]]).

[F8] A cover is $\mathcal F$-acyclic when every nonempty finite intersection has zero higher sheaf cohomology; sheaf restriction to an open subspace is the inverse-image sheaf ([[def-acyclic-cover-for-sheaf]], [[def-restriction-sheaf-open-subspace]]).

[F9] The canonical comparison map for an acyclic cover is an isomorphism in every degree, natural in the sheaf and compatible with refinement ([[thm-leray-acyclic-cover-theorem]], [[thm-cech-to-sheaf-cohomology-comparison]]).

[F10] Full AC is the axiom used by the sheaf-cohomology definition ([[def-axiom-of-choice]], [[def-sheaf-cohomology-derived-global-sections]]).

[F11] Smooth forms decompose into bidegrees, and $\bar\partial$ raises the antiholomorphic degree ([[def-bigraded-complex-differential-forms]]).

[F12] A short exact sequence of abelian sheaves induces a natural long exact sequence of their sheaf-cohomology groups ([[thm-long-exact-sequence-sheaf-cohomology]]).

[F13] On a supplied finite good cover, $\check H^p(\mathfrak U,\mathcal O_X(E))$ denotes fixed-cover Čech cohomology, the cocycles modulo coboundaries ([[def-cech-cohomology-holomorphic-line-bundle-sections]]).

[F14] An acyclic resolution computes derived global sections canonically; Čech comparison is computed by its augmented resolution double complex. The total differential of a commuting cochain bicomplex is $\delta+(-1)^p d$ in horizontal degree $p$ ([[thm-acyclic-resolution-theorem-for-right-derived-functors]], [[thm-cech-to-sheaf-cohomology-comparison]], [[def-direct-sum-total-complex-on-finite-diagonals]]).

## Proof

**Proof technique:** the Dolbeault sheaf resolution has smooth-module terms; their acyclicity gives the global quotient and the local Leray condition.

1.1 Let $\mathcal E^0(E)$ and $\mathcal E^{0,1}(E)$ denote the sheaves of smooth sections and smooth $E$-valued $(0,1)$-forms. In a holomorphic frame, $\bar\partial_E(fe)=(\bar\partial f)e$, so the kernel sheaf is $\mathcal O_X(E)$ by [F1]. For any point $x$, choose a holomorphic coordinate disc and frame near $x$, then a smaller disc compactly contained in that chart. Every germ of a smooth $E$-valued $(0,1)$-form is represented there by $a(z)\,d\bar z\otimes e$; it is $\bar\partial$-closed because there are no $(0,2)$-forms on a curve. By [F4] it has a local primitive after shrinking, so the last map is surjective on stalks. Exactness follows from [F3]. [F1, F3, F4, F11, given]

2.1 Both $\mathcal E^0(E)$ and $\mathcal E^{0,1}(E)$ are sheaves of modules over the real smooth-function sheaf. Apply [F6] on $X$: their positive sheaf cohomology vanishes. The long exact sequence from step 1.1 therefore identifies $H^1(X,\mathcal O_X(E))$ canonically with the cokernel of the global smooth operator, namely the displayed quotient, by [F12]. Its degree-zero kernel is $H^0(X,\mathcal O_X(E))=H^0(X,E)$, the holomorphic sections, by [F1]. For a holomorphic bundle map $j:E\to E'$, its local frame coefficient $a$ is holomorphic, so $\bar\partial_{E'}(j(fe))=\bar\partial(af)e'=a\bar\partial f\,e'=j(\bar\partial_E(fe))$. Thus $j$ gives a map of the two Dolbeault resolutions, and naturality of the long exact sequence in [F12] proves naturality of the global identifications. The same long exact sequence gives $H^2(X,\mathcal O_X(E))=0$ because both degree-one cohomology groups of the smooth terms vanish; in degrees $q>2$ the adjacent higher smooth-term groups vanish as well. By [F2], the smooth operator in the quotient is the restriction of the maximal $L^2$ operator, but no Hilbert-space cokernel identification is used. [F1, F2, F6, F10, F12, step 1.1, given]

2.2 Let $W=U_{i_0}\cap\cdots\cap U_{i_r}$ be a nonempty finite intersection. By [F7], $W$ is biholomorphic to a disc, and because it lies in the frame-trivializing member $U_{i_0}$, $E|_W$ has a holomorphic frame. In that frame and a disc coordinate, the local Dolbeault quotient is the scalar disc quotient; [F5] makes it zero. Applying the long exact sequence [F12] of the restricted resolution from step 1.1 and the smooth-module acyclicity [F6] shows $H^1(W,\mathcal O_X(E)|_W)=0$. The same exact sequence and vanishing of the higher smooth-term cohomology give $H^q(W,\mathcal O_X(E)|_W)=0$ for every $q\ge2$. Thus every nonempty finite intersection is $\mathcal O_X(E)$-acyclic in the sense of [F8]. [F5, F6, F7, F8, F10, F12, step 1.1, given]

3.1 The source of $\varphi^p_{\mathfrak U}$ is the fixed-cover group of [F13]. By step 2.2 and the acyclic-cover condition [F8], the cover $\mathfrak U$ is Leray; [F9] makes its canonical comparison map an isomorphism in every degree $p\ge0$ and compatible with refinement. For two allowed covers, compose the first comparison with the inverse of the second; this gives their canonical identification through the same sheaf cohomology group, without requiring a common refinement. Full AC is the choice hypothesis for sheaf cohomology by [F10]; its consequences $\mathrm{AC}_\omega$ and DC are used by the smooth-module theorem [F6]. [F6, F8, F9, F10, F13, step 2.2, algebra]

4.1 To fix the sign, use the Čech double complex of the acyclic Dolbeault resolution, with the total convention in [F14]. For a smooth splitting $\delta b=c$, holomorphy of $c$ makes $\bar\partial_Eb_i$ agree on overlaps, defining a global $\theta$. In total degree one, $D b=c+\theta$, so $[c]=-[\theta]$. Thus the unnormalized augmented-resolution identification sends the sheaf comparison class of $c$ to $-[\theta]$. Multiply that degree-one identification by $-1$ to obtain the normalization stated above; it remains an isomorphism natural in bundle maps. If $b'$ is another splitting, $b'_i-b_i$ glue to a global smooth section, so $[\bar\partial_Eb'_i]=[\theta]$; refinement compatibility follows from [F9]. This proves the representative rule needed for the residue formula, with no change to the fixed-cover Čech-to-sheaf map. [F1, F9, F14, step 1.1, step 2.1, step 3.1, algebra] ∎
