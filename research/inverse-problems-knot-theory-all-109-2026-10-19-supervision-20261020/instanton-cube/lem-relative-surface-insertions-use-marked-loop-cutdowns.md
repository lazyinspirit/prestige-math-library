---
id: lem-relative-surface-insertions-use-marked-loop-cutdowns
kind: lemma
title: Relative surface insertions use marked-loop cutdowns
status: draft
origin: session
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - thm-odd-admissible-ordinary-cobordisms-support-insertion-counts
  - lem-adjoint-incidence-insertions-have-rational-cutdown-counts
  - lem-kahler-orientation-and-signed-product-quotient-gluing
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Vicente Munoz, Gluing formulae for Donaldson invariants for connected sums along surfaces, Proposition18
      url: https://arxiv.org/abs/dg-ga/9702002
---

## Statement

Assume full AC and the actual ordinary odd-admissible all-class count and rational universal-adjoint incidence constructions. Let $\gamma\subset Y$ be an oriented embedded loop and let $D\subset X$ be a properly embedded oriented relative surface, cylindrical over $\gamma$ on a cylindrical end. For each finite $N$, actual marked-height incidence counts construct a completed boundary complex modulo $t^{N+1}$ and a relative cycle
$$\partial_t=\sum_{k=0}^N\frac{t^k}{k!}\partial_k,\qquad \Phi(X,e^{tD})=\sum_{k=0}^N\frac{t^k}{k!}\Phi_k,\qquad \partial_t^2=0,\quad\partial_t\Phi=0\pmod {t^{N+1}}.$$
Its constant term is the ordinary theory. The systems are compatible as $N$ increases, by continuation. They have an actual geometric pairing under reversal $(Y,\gamma)\mapsto(-Y,-\gamma)$. Gluing two relative surfaces with opposite boundary gives the closed exponential insertion series through this pairing, with the signed determinant-extension convention of the ordinary quotient.

No identification of this completed homology with ordinary $HF(Y)[[t]]$ is asserted. In particular its individual coefficients $\Phi_k$ need not be ordinary Floer cycles, and its deformed product or pairing constants are not determined by their values at $t=0$.

## Facts & Assumptions

**Given:** Fixed finite energy/index bounds in each coefficient, generic compatible ordinary perturbations, rational coefficients, and the ordinary determinant-line orientation convention.

[F1] The actual ordinary all-class moduli, regularization, compactness, broken collars and gluing are [[thm-odd-admissible-ordinary-cobordisms-support-insertion-counts]]. Full AC is inherited from their analytic construction. [[def-axiom-of-choice]]

[F2] The geometric representative of $-p_1(\operatorname{ad}\mathbb E)/4$, its point and surface incidence resolutions, low-dimensional compactness, and oriented insertion homotopies are [[lem-adjoint-incidence-insertions-have-rational-cutdown-counts]].

[F3] The projective lift quotient, its orientation character, and closed sum over the two determinant-extension parities are [[lem-kahler-orientation-and-signed-product-quotient-gluing]].

## Proof

1.1 **The marked-loop incidence has codimension three.** Apply [F2]'s resolved universal degree-four incidence to $\gamma$ times a local ordinary configuration slice and project to that slice. Oriented fibre integration over the one-dimensional loop gives a rational oriented codimension-three pseudocycle representing $\mu(\gamma)$. This is the actual universal-adjoint construction, not a formal generator. Retain its resolution and the lower-dimensional singular strata. On a neighborhood of each nondegenerate endpoint critical point the slice is contractible and the degree-three representative is exact. A cutoff primitive changes it by a cobordant representative which vanishes on a smaller critical neighborhood. There are finitely many endpoint criticals in the ordinary construction, so these choices can be made simultaneously, with their prescribed gauge and quotient equivariance. The cutoff primitive is part of the representative; ignoring it would discard endpoint terms. [F1, F2, given, construct]

2.1 **A finite coefficient is an actual marked-height count.** On a parametrized ordinary trajectory $A(s)$ introduce $k$ labelled real heights $s_1,\ldots,s_k$ and impose the step 1.1 incidence on its restriction to $\gamma\times\{s_i\}$. Use distinct small parallel copies of the loop and generic resolved representatives for repeated labels. Divide by simultaneous translation of trajectory and heights. If the ordinary parametrized index is $q$, the resolved expected dimension is
$$q+k-1-3k=q-1-2k.$$
Define $\partial_k$ from the zero-dimensional spaces, so it lowers the ordinary grading by $1+2k$. Give $t$ homological degree two. Then $t^k\partial_k$ has differential degree minus one. Heights are allowed to coincide: the domain is all of $\mathbb R^k$, not a chamber of ordered heights. Consequently coincidence diagonals produce no artificial boundary; independent parallel representatives supply transversality there. Averaging over labellings accounts for the factor $1/k!$. For each fixed $N$ and each coefficient the relevant parametrized linearization is the ordinary surjective linearization enlarged by finitely many height and incidence variables. Generic incidence sections give transverse cuts; compatible extensions on compact boundary strata give the parameterized versions. [F1, F2, step 1.1, construct, algebra]

3.1 **Compactification includes the escaping marks.** In a sequence of these zero- or one-dimensional cutdowns, use ordinary Uhlenbeck convergence with the heights retained. Each cluster of heights stays on one broken trajectory level. A height escaping down a constant end contributes nothing because the representative was made empty there in step 1.1. Clusters separating from one another are retained on successive broken levels; they cannot be discarded as a compact-support argument. These are precisely the marked broken configurations. A bubble away from the loop loses the ordinary index eight and gains its four location parameters, hence has codimension four. A bubble on a fixed-height loop also loses that incidence's three conditions and gains the requirement that its center lie on that one-dimensional loop, of codimension three in the four-manifold; the same deficit four remains. Allowing its height to vary changes both the full and ideal configuration by the same one parameter. Distinct parallel loop cylinders keep a single atom from absorbing several such conditions. The analogous relative surface count uses the surface insertion bound of [F2], including two meeting surface incidences. Thus no ideal atom or incidence-resolution singular stratum is a boundary in cut dimension zero or one. Ordinary all-index bounds from [F1] apply coefficient by coefficient; no convergence of a numerical infinite series is used. [F1, F2, step 1.1, step 2.1, construct, algebra]

4.1 **The differential identity is the boundary of these spaces.** Orient each cut by the ordinary determinant line, then the height factors and the resolved incidence normal lines, using the displayed order. An incidence normal has odd degree three and its height has odd degree one; their combined contribution is even, so permutations of complete marked pairs have no sign. The oriented one-dimensional boundary for $k$ labelled marks is the disjoint union over ordinary broken trajectories and all ways of distributing those labels between their two levels. The determinant-line broken collar gives the usual differential sign. Hence
$$\sum_{a+b=k}\binom{k}{a}\partial_a\partial_b=0.$$
With the divided-power coefficients this is exactly $\partial_t^2=0$. The same construction with one varying representative or perturbation yields continuation and its chain homotopies. At order $N$ choose the finitely many coefficient data extending the earlier boundary data; at order $N+1$ retain them. Taking the inverse system defines the formal completed object, rather than asserting analytic convergence. The projective lift acts on universal adjoint incidence, so [F3]'s signed quotient acts on these spaces as well. [F1, F3, step 2.1, step 3.1, construct, algebra]

5.1 **A relative surface requires transgression, not an ordinary cycle coefficient.** The universal Chern--Weil representative $\omega=-p_1/4$ is closed. Fibre integration on the oriented relative surface satisfies the Stokes identity
$$d\!\int_D\omega=\int_{\partial D}\omega.$$
Choose the incidence resolution of this relative cocycle, with its collar boundary given by step 1.1's loop representative and the same cutoff primitive. Thus a surface insertion escaping the end carries a marked boundary-loop incidence, instead of disappearing. Resolve $k$ relative surface insertions with labels and count their zero-dimensional cuts on $X$. The cutdown bubbling bounds are those of step 3.1. The oriented one-dimensional boundary consists of an exterior relative count followed by a marked trajectory count, with all labelled distributions. Stokes fixes their relative sign, and yields
$$\sum_{a+b=k}\binom{k}{a}\partial_a\Phi_b=0.$$
This is exactly $\partial_t\Phi=0$. In particular at first order $\partial_0\Phi_1=-\partial_1\Phi_0$; it is generally false that $\Phi_1$ alone defines ordinary Floer homology. Compactly supported additional point or closed-surface constraints can be carried along, with all of their exterior dimensions retained. [F1, F2, step 1.1, step 3.1, step 4.1, construct, algebra]

6.1 **Actual gluing retains the formal deformation.** Glue two cylindrical relative surfaces whose boundary loops have opposite orientations, and stretch their common neck. Keep every marked incidence and its resolution in the ordinary gluing construction. The compactified parametrized cutdown is exhausted by the broken levels of step 3.1 and the relative pieces of step 5.1. On each regular broken configuration the ordinary right inverse, augmented by the finite-dimensional transverse incidence variables, gives the actual marked gluing collar. Its determinant orientation is the orientation in step 4.1. Reversing both $Y$ and $\gamma$ gives the dual boundary construction; these collars therefore define a pairing on the completed homologies. The $r$ labels distribute over the two exteriors and any marked neck levels, with the multinomial counts. Dividing by $r!$ gives exactly the coefficient of the exponential series in the geometric pairing. Its constant term is the ordinary pairing, and its quotient determinant sectors are still counted once each by [F3]. Moving neck representatives into either exterior is a marked continuation homotopy, so the result is independent of that placement. This proves the closed insertion gluing identity to every fixed finite order, hence formally. It does not remove possible higher differential or pairing terms. In particular applying this construction to iterated genus-two cuts supplies the legitimate boundary-surface interface, but obtaining the requisite deformed extreme block and its dependence on $t$ is a further geometric calculation. [F1, F2, F3, step 3.1, step 4.1, step 5.1, construct, algebra]
