---
id: thm-residue-pairing-for-line-bundle-cohomology
kind: theorem
title: The residue pairing for line-bundle cohomology
status: draft
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
dependency_level: 10
deps:
  - cor-integral-of-an-exact-compactly-supported-top-form-on-a-boundaryless-manifold-is-zero
  - def-axiom-of-choice
  - def-bigraded-complex-differential-forms
  - def-cech-cochain-complex-open-cover
  - def-cech-cohomology-holomorphic-line-bundle-sections
  - def-countable-choice
  - def-holomorphic-line-bundle-and-meromorphic-section-riemann-surface
  - def-hermitian-metric-and-ltwo-pairing-on-a-compact-riemann-surface
  - def-line-bundle-associated-to-a-divisor
  - def-meromorphic-differential-on-a-riemann-surface
  - def-principal-part-at-an-isolated-point
  - def-smooth-partition-of-unity-subordinate-to-an-open-cover
  - thm-cech-dolbeault-comparison-for-line-bundles-on-compact-surfaces
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-finiteness-cohomology-compact-riemann-surface
  - thm-general-stokes-theorem
  - thm-smooth-partitions-of-unity-exist-on-manifolds
sources:
  references:
    - title: Karl Otto Forster, Lectures on Riemann Surfaces (GTM 81, Springer 1981), translated by Bruce Gilligan
      url: http://ronan.terpereau.perso.math.cnrs.fr/Master_Class_2023_Dijon/FORSTER_Lectures%20on%20Riemann%20Surfaces.pdf
      locator: "Ch. 2 §17.1–17.3, printed pp. 132–134: the trace Res on H^1(X,Ω) as (2πi)^{-1} times the integral of a Dolbeault representative; Mittag-Leffler distributions of differentials with differences ω_j−ω_i; and Theorem 17.3, Res(μ)=Res([δμ])."
    - title: Eduard Looijenga, Riemann Surfaces (2007 author lecture notes)
      url: https://webspace.science.uu.nl/~looij101/riemannsurfaces.pdf
      locator: "Ch. 6 §2, Definition 6.2 and Proposition 6.3, printed pp. 54–55: the local residue of a meromorphic differential and the global residue theorem; §4, Theorem 6.7, printed pp. 56–57: the residue map from L^1(−D) to H^1(D)^*."
    - title: Curtis T. McMullen, Riemann Surfaces, Harvard Math 213b course notes (2026)
      url: https://people.math.harvard.edu/~ctm/papers/home/text/class/harvard/213b/course/course.pdf
      locator: "Ch. 11, Pairings, printed pp. 95–96: the product map O_{−D}⊗Ω_D→Ω, the trace Res on H^1(X,Ω), and the induced functional φ(ξ)=Res(ξω)."
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $X$ be a compact Riemann surface, $D$ a divisor, and $E=\mathcal O_X(D)$ ([[def-line-bundle-associated-to-a-divisor]]). Fix compatible metrics on $X$ and $E$ as required by the comparison theorem, and a supplied finite good cover $\mathfrak U$ subordinate to holomorphic frame domains of $E$ ([[def-hermitian-metric-and-ltwo-pairing-on-a-compact-riemann-surface]], [[thm-cech-dolbeault-comparison-for-line-bundles-on-compact-surfaces]]). Let $K=\Lambda^{1,0}T^*X$ be the canonical holomorphic line bundle, and write $E^*$ for the dual line bundle ([[def-holomorphic-line-bundle-and-meromorphic-section-riemann-surface]]). The space $H^1(X,\mathcal O_X(D))$ is finite-dimensional ([[thm-finiteness-cohomology-compact-riemann-surface]]).

1. For $\xi\in H^1(X,\mathcal O_X(D))$ and $\omega\in H^0(X,K\otimes E^*)$, choose a smooth $E$-valued $(0,1)$-form $\theta$ representing $\xi$ under the Čech–Dolbeault comparison. Evaluation of the $E$ and $E^*$ factors and wedge product define
$$B(\xi,\omega):=\frac{1}{2\pi i}\int_X\theta\wedge\omega.$$

2. The pairing $B$ is $\mathbb C$-bilinear, independent of the representative $\theta$, the supplied cover, and the local frames. It is $\mathbb C$-linear in each variable.

3. Let $s_D$ be the canonical meromorphic section of $E$ with divisor $D$, and set $\widetilde\omega:=\operatorname{ev}(s_D\otimes\omega)$, an ordinary meromorphic differential ([[def-line-bundle-associated-to-a-divisor]], [[def-meromorphic-differential-on-a-riemann-surface]]). Suppose a Čech cocycle $c=(c_{ij})\in Z^1(\mathfrak U,\mathcal O_X(D))$ representing $\xi$ has meromorphic-function representatives $g_{ij}$ under $c_{ij}=g_{ij}s_D$, and there are meromorphic functions $\eta_i$ on $U_i$ such that
$$g_{ij}=\eta_j-\eta_i\qquad(i<j).$$
Then the meromorphic differentials $\eta_i\widetilde\omega$ have the same principal parts on overlaps, only finitely many nonzero residues occur, and
$$B(\xi,\omega)=\sum_{p\in X}\operatorname{Res}_p(\eta_i\widetilde\omega),$$
where $i$ is any index with $p\in U_i$.

## Facts & Assumptions

**Given:** Full AC, a compact Riemann surface $X$, a divisor $D$, the line bundle $E=\mathcal O_X(D)$, compatible metrics as required by the comparison input, a supplied finite good cover $\mathfrak U$ subordinate to holomorphic frame domains of $E$, $\xi\in H^1(X,\mathcal O_X(D))$, and $\omega\in H^0(X,K\otimes E^*)$.

[F1] Full AC is assumed by the sheaf-cohomology, comparison, and finiteness inputs. Its consequence $\mathrm{AC}_\omega$ supplies the smooth partition of unity and the Stokes hypotheses used below ([[def-axiom-of-choice]], [[def-countable-choice]], [[thm-choice-implies-dependent-implies-countable-choice]]).

[F2] For any supplied finite good cover subordinate to holomorphic frame domains, the comparison theorem identifies $H^0(X,\mathcal O_X(E))$ with the holomorphic-section space, $H^1(X,\mathcal O_X(E))$ with the smooth Dolbeault quotient, and fixed-cover Čech cohomology with sheaf cohomology; the identifications are canonical and compatible with refinement. The A4 theorem file exists, but its current item decision is stale/owner-held; its uses here are provisional ([[thm-cech-dolbeault-comparison-for-line-bundles-on-compact-surfaces]]).

[F3] The cohomology spaces $H^0(X,\mathcal O_X(D))$ and $H^1(X,\mathcal O_X(D))$ are finite-dimensional, and $\chi(\mathcal O_X(D))=\ell(D)-i(D)$. A8's item file is authored but remains escalated on its unfinished Hodge finite-dimensionality input; the finite-dimensionality of $H^1$ is used provisionally in statement 1 and step 1.1 ([[thm-finiteness-cohomology-compact-riemann-surface]]).

[F4] For an ordered cover, the Čech coboundary of a zero-cochain $a=(a_i)$ is $(\delta^0a)_{ij}=a_j-a_i$ for $i<j$ ([[def-cech-cochain-complex-open-cover]]). The in-pair Čech line-bundle definition fixes the finite-good-cover cochain and cocycle conventions; its item decision is still open, and the convention is used provisionally at steps 2.2 and 3.1 ([[def-cech-cohomology-holomorphic-line-bundle-sections]]).

[F5] The divisor bundle has a canonical meromorphic section $s_D$ with divisor $D$; its holomorphic section sheaf is represented by meromorphic functions $h$ satisfying $(h)+D\ge0$, via $h\mapsto h s_D$. The A3 item is authored but remains escalated; these facts are used provisionally in statement 3 and step 2.2 ([[def-line-bundle-associated-to-a-divisor]]).

[F6] The canonical bundle is $K=\Lambda^{1,0}T^*X$; holomorphic sections of a holomorphic line bundle and its dual have the stated local holomorphic-frame descriptions. The batch-9 bundle-definition file exists but its gates remain open; its bundle and section conventions are used provisionally in the statement and steps 1.1 and 2.2 ([[def-holomorphic-line-bundle-and-meromorphic-section-riemann-surface]]).

[F7] The bundle Dolbeault operator satisfies the graded Leibniz rule, and it vanishes on holomorphic sections; hence $\bar\partial\omega=0$ for a holomorphic $E^*$-valued $(1,0)$-form ([[def-holomorphic-line-bundle-and-meromorphic-section-riemann-surface]]).

[F8] Smooth complex forms decompose into bidegrees, $d=\partial+\bar\partial$; on a curve a $(1,0)$-form has no $(2,0)$ derivative component, so its exterior derivative equals its $\bar\partial$ component ([[def-bigraded-complex-differential-forms]]).

[F9] Compatible Riemannian and Hermitian metrics exist on the compact Riemann surface and its holomorphic line bundle under $\mathrm{AC}_\omega$. The batch-9 metric-definition file exists but its gates remain open; the metrics here are supplied only to instantiate the A4 comparison theorem ([[def-hermitian-metric-and-ltwo-pairing-on-a-compact-riemann-surface]]).

[F10] Under $\mathrm{AC}_\omega$, every open cover of a smooth manifold admits a smooth partition of unity subordinate to it ([[def-smooth-partition-of-unity-subordinate-to-an-open-cover]], [[thm-smooth-partitions-of-unity-exist-on-manifolds]]).

[F11] Under $\mathrm{AC}_\omega$, Stokes' theorem holds for compactly supported forms on an oriented manifold with boundary ([[thm-general-stokes-theorem]]).

[F12] On a compact oriented boundaryless manifold, Stokes gives zero integral for an exact smooth top form ([[cor-integral-of-an-exact-compactly-supported-top-form-on-a-boundaryless-manifold-is-zero]]).

[F13] The residue of a meromorphic differential at $p$ is the Laurent coefficient of $z^{-1}dz$ in a centred coordinate, is independent of the coordinate, and vanishes when the differential is holomorphic at $p$; its pole set is discrete ([[def-meromorphic-differential-on-a-riemann-surface]]).

[F14] A principal part is the finite negative-power part of a Laurent expansion at an isolated point ([[def-principal-part-at-an-isolated-point]]).

[F15] The direct A4/A8/A3 and batch-9 bundle/metric item states used above are authored or represented by current manifest rows, but their decisions or gates are open; no argument here replaces those supplier proofs. The missing Hodge finite-dimensionality input in A8 is cor-dolbeault-cohomology-of-a-compact-riemann-surface-is-finite-dimensional at A8 step 1.1; it reaches this consumer through A8's finite-dimensionality conclusion at step 1.1.

## Proof

The proof first defines the pairing in the Dolbeault model, then identifies its value for a presented Mittag-Leffler representative. The residue formula uses the ordered Čech convention $\delta^0\eta_{ij}=\eta_j-\eta_i$.

1.1 By [F2], the supplied cover identifies the fixed-cover Čech and sheaf cohomology groups and identifies $H^1(X,\mathcal O_X(D))$ with the quotient of smooth $E$-valued $(0,1)$-forms by $\bar\partial_E$ of smooth sections. By [F3], the first variable is finite-dimensional. For $\xi$ and $\omega$, choose any representative $\theta$ of $\xi$ in this quotient and define $B$ by the displayed integral. Evaluation $E\otimes E^*\to\mathbb C$ makes the integrand a smooth top-degree form, and the integral is complex-bilinear in $\theta$ and $\omega$. Thus it defines a bilinear expression on representatives. [F1, F2, F3, F6, F9, given]

2.1 If $\theta'=\theta+\bar\partial_E f$ for a smooth section $f$ of $E$, then [F7] and holomorphy of $\omega$ give $(\theta'-\theta)\wedge\omega=\bar\partial(f\omega)$. On a curve the $(2,0)$ component of $d(f\omega)$ vanishes, so $\bar\partial(f\omega)=d(f\omega)$. The exact-form integral is zero by [F12]. Thus the integral is independent of $\theta$. The comparison in [F2] is canonical and compatible with refinement, so the same form is independent of the supplied cover and local frames. [F1, F2, F7, F12, step 1.1, given]

2.2 Let $c=(c_{ij})$ and $(\eta_i)$ be as in statement 3 and put $\mu_i:=\eta_i\widetilde\omega$. By [F4], the scalar representative satisfies $g_{ij}=\eta_j-\eta_i$ with the ordered Čech sign. The meromorphic sections $\eta_i s_D$ of $E$ satisfy $(\eta_j s_D)-(\eta_i s_D)=g_{ij}s_D=c_{ij}$, which is holomorphic by [F5]. Evaluating against the holomorphic $E^*$-valued form $\omega$ shows $\mu_j-\mu_i=g_{ij}\widetilde\omega$ is a holomorphic differential. Therefore the $\mu_i$ have identical principal parts and residues wherever their domains overlap. Define $P$ to be the set of points at which one (equivalently every) local $\mu_i$, with $p\in U_i$, has a pole; the equivalence follows from the holomorphic differences. Given $p\in X$, choose $i$ with $p\in U_i$ and a coordinate disk $V$ about $p$ with compact closure contained in $U_i$. The meromorphic differential $\mu_i$ has finitely many poles in $\overline V$, and the pole sets agree on overlaps, so $P\cap V$ is finite. Thus $P$ is locally finite; compactness of $X$ makes $P$ finite, and the residue sum in statement 3 is well defined. [F4, F5, F6, F13, F14, step 1.1, given]

3.1 Choose a smooth partition of unity $(\rho_i)$ subordinate to $\mathfrak U$ by [F10] and set $\mu=\sum_i\rho_i\mu_i$ on $X\setminus P$, where $P$ is the finite pole set from step 2.2. For $x\in U_i$, define $u_i:=\sum_j\rho_j(\mu_i-\mu_j)$, with each summand taken on $U_i\cap U_j$ and extended by zero off $U_j$. This extension is smooth because $\operatorname{supp}(\rho_j)\subseteq U_j$, while the difference $\mu_i-\mu_j$ is holomorphic on the overlap by step 2.2. Hence $u_i$ is smooth across $P$; on $U_i\setminus P$, using $\sum_j\rho_j=1$ gives $u_i=\mu_i-\mu$. Also $u_j-u_i=\mu_j-\mu_i$, so the forms $\bar\partial u_i$ glue to a smooth $K$-valued $(0,1)$-form on $X$ representing the Dolbeault class of the product Čech cocycle $(g_{ij}\widetilde\omega)$ in $H^1(X,K)$. By naturality of [F2], this product class is the image of $\xi$ multiplied by $\omega$, so $B(\xi,\omega)=(2\pi i)^{-1}\int_X\bar\partial u_i$. On $X\setminus P$, $\bar\partial u_i=-\bar\partial\mu$ and $d\mu=\bar\partial\mu$, since $\mu$ has type $(1,0)$ on a curve. Remove disjoint coordinate disks $B_\epsilon(p)$ around $P$ and apply [F11] to get $\int_{X\setminus\bigcup_p\operatorname{int}B_\epsilon(p)}\bar\partial\mu=\int_{\partial(X\setminus\bigcup_p\operatorname{int}B_\epsilon(p))}\mu=-\sum_{p\in P}\int_{\partial B_\epsilon(p)}\mu$. If $P=\varnothing$, this is Stokes on all of $X$ with empty boundary and gives zero, matching the empty residue sum. Near each $p$, $\mu-\mu_i$ is smooth and bounded, so its integral around $\partial B_\epsilon(p)$ tends to zero, while the integral of $\mu_i$ tends to $2\pi i\,\operatorname{Res}_p(\mu_i)$. The smooth form $\bar\partial u_i$ extends across $P$, so its integral over the removed disks tends to zero as well. Taking $\epsilon\downarrow0$ yields $(2\pi i)^{-1}\int_X\bar\partial u_i=\sum_{p\in P}\operatorname{Res}_p(\mu_i)$, which is the residue formula in statement 3. This also derives the sign from the positive boundary orientation of each deleted disk and the ordered Čech differential in [F4]. [F1, F2, F4, F8, F10, F11, F13, step 1.1, step 2.2, algebra] ∎
