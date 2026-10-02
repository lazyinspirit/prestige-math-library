---
page: pure-braids-fadell-neuwirth-and-asphericity
title: "Pure Braids, Fadell–Neuwirth, and Asphericity"
status: published
requires: [ordered-and-unordered-configuration-spaces, braids-as-fundamental-groups-of-configuration-spaces, punctured-disks-mapping-classes-and-point-pushing, free-groups-and-presentations, semidirect-products-and-automorphism-groups, fibrations-fiber-bundles-and-homotopy-exact-sequences, group-extensions-complements-and-schur-zassenhaus, asymptotic-cones-and-the-sublinear-triangle-criterion]
items: [lem-a-finitely-punctured-disk-retracts-to-a-wedge-of-circles,
        lem-planar-configuration-spaces-have-vanishing-pi-two-by-simultaneous-induction,
        thm-pure-braid-forgetting-a-strand-short-exact-sequence,
        thm-point-pushing-is-the-kernel-of-forgetting-a-puncture,
        lem-the-planar-forgetful-map-has-a-continuous-section,
        cor-the-pure-braid-extension-splits,
        thm-ordered-planar-configuration-spaces-are-aspherical,
        cor-unordered-planar-configuration-spaces-are-aspherical,
        def-standard-pure-braid-generators,
        lem-standard-pure-braids-generate-each-free-kernel,
        thm-standard-pure-braids-generate-the-pure-braid-group,
        thm-pure-braid-groups-are-torsion-free]
examples: []
---

This page develops the Fadell–Neuwirth account of the pure braid group: the
coordinate-forgetting maps of the ordered planar configuration spaces are
fibrations whose exact sequences, together with the asphericity of those
spaces, produce the short exact sequence
$1\to F_{n-1}\to PB_n\to PB_{n-1}\to1$, its splitting as a semidirect
product, a torsion-freeness theorem for $PB_n$, and finally the standard
generators $A_{ij}$. Everything is stated on the ordered configuration spaces
$F_m(X)=\{(x_1,\dots,x_m):x_i\ne x_j\ (i\ne j)\}$ of the open disc, the plane
and the closed disc, with the base configuration $Q=(q_1,\dots,q_n)$ and
$h=\frac{1}{4(n+1)}$ fixed as on the geometric-braids pages.

The first ingredient is the homotopy type of a punctured disk. For a finite
set $Q$ of $k$ distinct interior points, $\operatorname{int}D^2\setminus Q$ is
homotopy equivalent to a wedge of $k$ circles, with one positively oriented
meridian loop per puncture as a free basis of $\pi_1$, and its higher homotopy
groups vanish; for $k=0$ the wedge is a point and the disk is contractible. The
proof is explicit: a rotation and a piecewise-linear shear place the punctures
on the real axis; radial homotopies push small punctured disks onto their
boundary circles, and a vertical homotopy retracts the complement onto those
circles joined by intervals. Contracting the two exterior rays gives a finite
spine, and collapsing its interval tree gives the wedge;
the published wedge theorem
identifies the fundamental group and its meridian basis, and the universal
cover of the wedge, built as the tree of reduced words, contracts so that
based spheres of dimension at least two can be lifted and nullhomotoped
upstairs. The radial homeomorphism $h(w)=w/(1+|w|)$ transports all of this
from $\mathbb C$ to the open disc, and no choice principle is used.

The vanishing of $\pi_2$ is then proved by simultaneous induction on the
number of points, along the Fadell–Neuwirth fibration supplied by the
published local-triviality theorem for the coordinate-forgetting maps: the
long exact sequence of the fibration
$F_1(\operatorname{int}D^2\setminus\{q_1,\dots,q_{n-1}\})\to
F_n(\operatorname{int}D^2)\to F_{n-1}(\operatorname{int}D^2)$ sandwiches $\pi_2(F_n)$ between
$\pi_2$ of the fibre (a punctured disk, hence trivial) and
$\pi_2(F_{n-1})$ (trivial by the induction hypothesis), with
$F_1(\operatorname{int}D^2)\cong\operatorname{int}D^2$ contractible as the
base case. Because the fibration is only asserted under the Axiom of Choice
through dependent choice and the numerable-bundle theorem, the lemma declares
that assumption; the same conclusion is carried to the plane coordinates and
to the closed disk through the published homeomorphism and homotopy
equivalence.

With $\pi_2$ in hand the forgetful map $\varphi:PB_n\to PB_{n-1}$, forgetting
the last strand, has an injective connecting fibre group: the low-degree part
of the fibration sequence gives $1\to F_{n-1}\xrightarrow{\kappa}PB_n
\xrightarrow{\varphi}PB_{n-1}\to1$, where
$F_{n-1}=\pi_1(\operatorname{int}D^2\setminus\{q_1,\dots,q_{n-1}\},q_n)$ is
free on the $n-1$ positively oriented meridians and $\kappa$ is the fibre
inclusion. The base case $PB_1=1$ is included, so at $n=2$ the sequence reads
$1\to F_1\to PB_2\to1\to1$. Iterating the same exact sequence in higher
degrees, the ordered configuration spaces are aspherical: every
$\pi_k(F_n(\operatorname{int}D^2))$ with $k\ge2$ vanishes, the separate
$k=2$ induction being the step that does not use point pushing; the statement
transfers to the plane and closed-disk models, so the ordered configuration
spaces are $\mathrm K(PB_n,1)$ in the higher-homotopy sense.

The unordered configuration spaces are then obtained from the regular
$n!$-sheeted cover $F_n\to C_n$: every based map of a sphere $S^k$, $k\ge2$,
lifts through the covering because its domain is simply connected, the
vanished ordered class nullhomotopes, and the nullhomotopy projects since the
covering has the homotopy lifting property. Hence the unordered configuration
spaces of the open disc, the plane and the closed disc have vanishing higher
homotopy groups and fundamental group $B_n^{\mathrm{conf}}$, that is, they are
$\mathrm K(B_n^{\mathrm{conf}},1)$.

The sequence splits. The planar forgetful map
$p:F_n(\mathbb C)\to F_{n-1}(\mathbb C)$ carries the explicit continuous
section $s(z_1,\dots,z_{n-1})=(z_1,\dots,z_{n-1},1+\sum_{i<n}|z_i|)$, whose
last coordinate is a positive real number strictly larger than every modulus
$|z_i|$ and hence collides with nothing; transporting $s$ through the
coordinatewise radial homeomorphism gives a section of the open-disc forgetful
map, choice-free and with no selection over an infinite family, and the single
path needed to move its value to the chosen basepoint in the fibre is chosen
once. Applying $\pi_1$ to a section yields a homomorphism
$s:PB_{n-1}\to PB_n$ with $\varphi\circ s=\operatorname{id}$, so the
extension splits as $PB_n\cong F_{n-1}\rtimes PB_{n-1}$, the action being
conjugation by the chosen section, $g\cdot x=s(g)\,xs(g)^{-1}$. The action
depends on the section and the basepoint path, and no direct-product
decomposition is asserted.

Point pushing closes the loop between this page and
`punctured-disks-mapping-classes-and-point-pushing`, where the homomorphism
$\operatorname{Push}_n$ was defined from based loops of the punctured disk but
deliberately not proved injective. That page's braid–mapping-class
identifications combine into an isomorphism
$\Theta_n=\Psi^{\mathrm{mc}}_n\circ(\Psi^{\mathrm{conf}}_n)^{-1}$ from $PB_n$
to the boundary-fixed pure mapping class group
$\operatorname{PMod}(D^2,Q_n;\partial D^2)$, and a naturality square with the
homomorphism $\psi$ forgetting the last marked point identifies
$\operatorname{Push}_n=\Theta_n\circ\kappa$: point pushing is injective with
image exactly the kernel of $\psi$, so with $F_{n-1}$ the free meridian group
the Birman sequence $1\to F_{n-1}\xrightarrow{\operatorname{Push}_n}
\operatorname{PMod}(D^2,Q_n;\partial D^2)\xrightarrow{\psi}
\operatorname{PMod}(D^2,Q'_n;\partial D^2)\to1$ is short exact, where $Q'_n=(q_1,\dots,q_{n-1})$ is the actual truncation of $Q_n$. It differs from the canonical configuration at rank $n-1$; the proof transports that rank's identification through a boundary-fixed homeomorphism. The
argument transports the Fadell–Neuwirth sequence through the two published
braid-to-mapping-class isomorphisms and uses smooth configuration
representatives and their extension to boundary-fixed isotopies; the two
inversions in $\Psi^{\mathrm{conf}}$ and in the inverse-endpoint boundary map
of point pushing cancel, so the point push of a fibre meridian corresponds to
the image of the fibre class in $PB_n$ rather than to its inverse. This is the
one place in the page where the Axiom of Choice is spent twice: for the
numerable Fadell–Neuwirth fibration and, through countable choice, for the
smooth motion extension.

The last group of results descends to the generators. The standard pure braid
generators are the geometric classes
$A_{ij}=[W_{ij}]$ of the words
$W_{ij}=\sigma_{j-1}\cdots\sigma_{i+1}\sigma_i^2\sigma_{i+1}^{-1}\cdots
\sigma_{j-1}^{-1}$ in the elementary half twists, read with the library's
first-under-second stacking convention; each is pure because its endpoint
permutation is the identity, the definition is choice-free and invokes the
Artin-to-geometric surjection only to fix the letters. Under the isomorphism
$\Psi$ from pure geometric braids to $PB_n$ — which inverts the raw slicing —
the classes $\Psi(A_{in})$, $1\le i\le n-1$, form a free basis of the kernel
of the forgetful map, the $i$-th being the clockwise meridian of the $i$-th
puncture, that is, $(\kappa_*[\gamma_i])^{-1}$ for the counterclockwise
spine-basis class $\gamma_i$. Since these free kernels form the tower of the
split extension, an induction through the tower shows that the whole family
$\{A_{ij}\}_{i<j}$ generates $PB_n$; no presentation, no completeness of
relations and no injectivity of the Artin presentation is claimed. Finally,
$PB_n$ is torsion-free for every $n$: in the short exact sequence a torsion
element of $PB_n$ has image of finite order in the torsion-free group
$PB_{n-1}$, hence lies in the free kernel, which is torsion-free. The
counterexample on the companion page shows that this argument genuinely needs
the specific group, not merely the shape of the extension.

Choice is tracked throughout: the punctured-disk spine lemma, the standard
generator definition and the continuous section are choice-free, while the vanishing-$\pi_2$ lemma, the short exact sequence, the
splitting, the asphericity statements, the point-pushing theorem, the
generation theorem, torsion theorem and the two- and three-strand examples assume the Axiom of Choice, every
use flowing through the numerable Fadell–Neuwirth fibration or through
countable choice for smooth motion representatives. The companion page
`pure-braids-fadell-neuwirth-and-asphericity-examples` works out the
two-strand and three-strand groups explicitly, matches the standard generators
with point pushes, and records the extension counterexample.
