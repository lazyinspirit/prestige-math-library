---
page: punctured-disks-mapping-classes-and-point-pushing
title: "Punctured Disks, Mapping Classes, and Point Pushing"
status: published
requires: [braids-as-fundamental-groups-of-configuration-spaces,
           fibrations-fiber-bundles-and-homotopy-exact-sequences,
           partitions-of-unity-and-paracompactness,
           vector-fields-flows-and-lie-derivatives,
           ascoli-arzela]
items: [def-boundary-fixed-mapping-class-group-of-a-punctured-disk,
        def-pure-mapping-class-group-of-a-punctured-disk,
        thm-alexander-contractibility-of-the-boundary-fixed-disk-homeomorphism-group,
        lem-boundary-fixed-disk-evaluation-has-continuous-local-point-motion-sections,
        lem-a-smooth-finite-disk-arc-system-isotopy-extends-relative-boundary-and-marked-points,
        lem-evaluation-on-an-unordered-marked-set-is-a-numerable-bundle-and-fibration,
        def-boundary-map-from-point-motions-to-punctured-disk-mapping-classes,
        lem-the-point-motion-boundary-map-is-a-well-defined-homomorphism,
        thm-the-evaluation-bundle-boundary-map-is-an-isomorphism-for-the-disk,
        lem-configuration-loops-admit-smooth-separated-point-motion-representatives,
        lem-smooth-finite-point-motions-extend-to-boundary-fixed-disk-isotopies,
        thm-braid-group-is-the-boundary-fixed-mapping-class-group-of-the-punctured-disk,
        cor-pure-braids-are-pure-punctured-disk-mapping-classes,
        def-point-pushing-homomorphism-for-a-puncture]
examples: []
---

This page identifies the braid group on $n$ strands with the mapping class
group of the disk with $n$ marked points, and defines point pushing as the map
that drags a puncture along a loop of the punctured surface. The disk is
$D^2=\{z\in\mathbb C:|z|\le1\}$ with the base configuration
$Q_n=(q_1,\dots,q_n)$, $q_j=((2j-n-1)h,0)$ and $h=\frac{1}{4(n+1)}$, exactly
as on the geometric-braids pages. The group
$\operatorname{Mod}(D^2,Q_n;\partial D^2)$ is $\pi_0$ of the group
$\operatorname{Homeo}^+(D^2,\partial D^2)$ of orientation-preserving
homeomorphisms that fix $\partial D^2$ pointwise, restricted to those
preserving $Q_n$ setwise, with the compact-open topology — on the compact
metric domain $D^2$ this is uniform convergence, and composition and inversion
are continuous. Isotopies are paths through such homeomorphisms and are
boundary-fixed throughout, and multiplication of classes is ordinary
composition; the pure subgroup $\operatorname{PMod}(D^2,Q_n;\partial D^2)$
consists of the classes with representatives fixing every $q_i$, the setwise
and pointwise isotopy conventions coinciding there because the permutation of
the marked set is locally constant along a setwise-preserving path.

The topological input is Alexander's contraction: the explicit radial formula
$H_s(h)(x)=s\,h(x/s)$ for $|x|\le s$ and $H_s(h)(x)=x$ for $|x|\ge s$,
$H_0(h)=\operatorname{id}$, deforms $\operatorname{Homeo}^+(D^2,\partial D^2)$
to the identity through boundary-fixed homeomorphisms, jointly continuously in
the compact-open topology; no choice principle is used. The evaluation map
$\operatorname{ev}\colon\operatorname{Homeo}^+(D^2,\partial D^2)\to
C_n(\operatorname{int}D^2)$, $h\mapsto h(Q_n)$, into the unordered
configuration space is next shown to be onto and to admit continuous local
sections: inside disjoint small disks one uses Lipschitz cut-off functions
$\chi_i$ equal to one near the marked points, so that
$x\mapsto x+\chi_i(x)v_i$ has displacement-Lipschitz constant below $1$ for a
small vector $v_i$ and is globally invertible by the Banach fixed point
theorem, and a finite partition of a path in $C_n$ then moves the base
configuration to any target. These sections make evaluation a locally trivial
bundle with fibre $\operatorname{Homeo}^+(D^2,\partial D^2;Q_n)$; metrizability
of the finite-permutation quotient supplies a subordinate partition of unity,
so the bundle is numerable and hence a Hurewicz fibration. Here Choice selects
one section chart for each base configuration; Choice also implies dependent
choice for the subordinate partition, and the published numerable-bundle
theorem uses Choice to well-order finite chart words.

The boundary map is defined on point motions. For a based configuration loop
$\alpha$ of $C_n(\operatorname{int}D^2)$ at $[Q_n]$, lift $\alpha$ under
evaluation from the identity and let $h$ be the endpoint of the lift, then set
$\delta([\alpha])=[h^{-1}]\in\operatorname{Mod}(D^2,Q_n;\partial D^2)$: the
*inverse* endpoint, chosen so that the map is the connecting map of the
library's first-loop-then-second fibration exact sequence. The map $\delta$ is
shown to be independent of the loop representative and of the chosen lift —
homotopic loops are compared by square homotopy lifting, and two lifts of the
same loop are compared by a path in the basepoint fibre — and to be a
homomorphism:
for loops $\alpha$ then $\beta$ with lifts ending at $a_1$ and $b_1$, the
concatenated lift ends at $b_1a_1$, and the inverse-endpoint convention turns
that reversal into multiplicativity.

The low-degree part of the fibration exact sequence,
$\pi_1(E)\to\pi_1(C_n(\operatorname{int}D^2))\xrightarrow{\delta}\pi_0(F)\to
\pi_0(E)$, has $E=\operatorname{Homeo}^+(D^2,\partial D^2)$ contractible, so
$\pi_1(E)=1$ and $\pi_0(E)$ is a point; exactness makes $\delta$ injective with
image the kernel of the constant map, hence bijective. This proves the
evaluation boundary isomorphism $\delta\colon
\pi_1(C_n(\operatorname{int}D^2),[Q_n])\xrightarrow{\ \cong\ }
\operatorname{Mod}(D^2,Q_n;\partial D^2)$ for every $n\ge0$, a statement
spelled out under the Axiom of Choice. Composing $\delta$ with the inverse of
the published inverse-slicing isomorphism $\Phi$ and with the published
isomorphism between the open- and closed-disk unordered configuration spaces
then gives the canonical identification of the geometric braid group $G_n$ at
$Q_n$ with $\operatorname{Mod}(D^2,Q_n;\partial D^2)$: the two loop and
endpoint inversions cancel on geometric braids, and the standard positive half
twist $\sigma_i$ goes to the class of the explicit boundary-fixed half
rotation $H_i$ supported in the disk $U_i$ around $q_i,q_{i+1}$. Smooth
representatives are available: every based configuration loop is homotopic
rel endpoints to a smooth collision-free motion that is constant near the time
endpoints, and integrating disjoint smooth bumps around the moving points
produces a compactly supported time-dependent field whose flow is a
boundary-fixed smooth isotopy carrying the initial marked set to the terminal
one, so every mapping class has a boundary-fixed smooth representative. The
same identification sends the pure geometric braid subgroup onto
$\operatorname{PMod}(D^2,Q_n;\partial D^2)$: both sides are the kernels of the
endpoint-permutation homomorphism to $S_n$, compared through the covering
monodromy convention. The page also carries a local supplier for later Artin
action consumers, the smooth relative isotopy extension lemma for a finite
system of disk arcs, which is stationary on collars of fixed endpoints and
disjoint from prescribed marked points.

Point pushing is defined for $n\ge1$ by holding $q_1,\dots,q_{n-1}$ fixed and
letting $q_n$ travel along a based loop of the punctured surface
$Y_n=\operatorname{int}D^2\setminus\{q_1,\dots,q_{n-1}\}$: the tuple with those
fixed coordinates and the moving point is an ordered configuration loop, and
its image under $\delta$ is the point-push class
$\operatorname{Push}_n([\gamma])\in
\operatorname{PMod}(D^2,Q_n;\partial D^2)$, a group homomorphism inherited from
$\delta$. The fixed coordinates force the permutation of $Q_n$ to be trivial,
so the values are pure; the definition deliberately makes *no* injectivity
claim. Injectivity and the Birman exact sequence are deferred to the next pair
of the track, `pure-braids-fadell-neuwirth-and-asphericity`.

Choice is tracked throughout. Alexander's contraction, the local Lipschitz
sections and the smooth configuration representatives are choice-free; the
evaluation bundle and every statement consuming $\delta$, the braid
identification and point pushing assume the Axiom of Choice; the two smooth
motion and arc-extension lemmas assume only countable choice, matching their
published vector-field interfaces. The companion examples page computes a
supported half twist as an explicit puncture-exchanging homeomorphism, works
out the winding of pushing one puncture around another, and records the two
convention counterexamples explaining why the isotopy condition on the
boundary is pointwise rather than setwise and why setwise puncture
preservation is not enough to define the pure subgroup.
