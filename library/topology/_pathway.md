---
category: topology
status: published
parts:
  - part: metric-spaces
    title: "Metric spaces"
    pages:
      - metric-spaces
      - completeness-and-uniform-continuity
      - compactness-in-metric-spaces
  - part: topological-spaces
    title: "Topological spaces"
    pages:
      - topological-spaces-and-continuity
      - subspaces-products-and-quotients
      - connectedness
      - compactness
  - part: convergence-and-separation
    title: "Convergence and separation"
    pages:
      - nets-and-filters
      - separation-axioms
      - hausdorff-via-the-diagonal
      - urysohn-lemma-and-tietze
      - hereditary-and-productive-separation
  - part: paracompactness-and-compactification
    title: "Paracompactness, uniformities and compactification"
    pages:
      - partitions-of-unity-and-paracompactness
      - tychonoff-embedding-and-stone-cech
      - uniform-spaces
      - uniform-completeness-and-samuel-compactification
  - part: countability-and-metrization
    title: "Countability and metrization"
    pages:
      - the-topology-of-euclidean-space
      - countability-axioms-and-cardinal-functions
      - metrization-theorems
      - complete-metrizability-and-baire
  - part: function-spaces
    title: "Function spaces"
    pages:
      - function-space-topologies
      - ascoli-arzela
      - stone-weierstrass-general
  - part: homotopy-and-covering-spaces
    title: "Homotopy and covering spaces"
    pages:
      - homotopy-and-homotopy-equivalence
      - the-fundamental-group
      - covering-spaces-and-lifting
      - the-fundamental-group-of-the-circle
      - the-seifert-van-kampen-theorem
      - classification-of-covering-spaces
      - applications-of-the-fundamental-group
---

## metric-spaces

A first course in analysis uses the distance between two points without naming it, and
three axioms are all it needs. Open sets, closure, convergence and continuity are defined
from the metric here, then completeness gives the Cauchy criterion and the completion of a
space, and uniform continuity separates a property of a function from a property at a
point. Compactness in this setting has the three equivalent forms, by covers, by sequences
and by total boundedness with completeness.

## topological-spaces

Dropping the distance and keeping the open sets is what makes a topology, and continuity
becomes preimages of open sets rather than an epsilon and a delta. Subspaces, products,
disjoint unions and quotients are all initial or final topologies, so their characteristic
properties turn continuity into a componentwise test. Connectedness and compactness are
then stated for an arbitrary space, and the theorems they buy are the ones the metric
versions had.

## convergence-and-separation

Sequences do not detect closure outside metric spaces, and nets and filters are the two
repairs; ultrafilter convergence gives compactness a form with no covers in it. The
separation axioms grade how far apart a topology can hold points and closed sets, from T0
to normality, with the Hausdorff condition equivalent to a closed diagonal. Urysohn's lemma
produces the functions a normal space is supposed to have, Tietze extends them, and the
last page asks which of these properties survive subspaces and products.

## paracompactness-and-compactification

A locally finite refinement is what replaces a finite subcover when compactness is absent,
and a partition of unity is what makes it usable for building functions. The Tychonoff
embedding puts a completely regular space inside a cube of intervals, and the Stone-Cech
compactification is the universal way to compactify it. A uniformity carries the
comparison of pairs of points that a metric had and a topology does not, which is what
completeness needs to be stated without numbers.

## countability-and-metrization

The Euclidean topology is where the product, the metric and every finite-dimensional norm
agree, and it is the reference case for everything here. Countability axioms bound a space
by how many open sets it takes to describe it, and the metrization theorems say when those
bounds are enough to recover a metric: Urysohn for the second countable regular case,
Nagata-Smirnov and Bing in general, Smirnov for the locally metrizable one. Complete
metrizability and Cech-completeness carry Baire category to spaces with no metric attached.

## function-spaces

A set of functions carries no single topology, so this part puts four on the continuous
maps between two spaces and says what each one measures, with the exponential law relating
the compact-open topology to continuity of a map of two variables. Ascoli-Arzela describes
the compact families through equicontinuity, and Stone-Weierstrass says when a family that
separates points is uniformly dense.

## homotopy-and-covering-spaces

Homotopy deforms maps; based loops form the fundamental group. Covering maps lift paths and
homotopies uniquely; universal-cover quotients classify connected coverings by conjugacy
classes of subgroups, normal ones the regular coverings and normalizer quotients their deck
groups; for the circle the cover is the line and the subgroups are those of $\mathbb Z$.
Seifert-van Kampen makes an open union's group a pushout, giving simply connected higher
spheres, free groups for wedges of circles, the product formula and $\mathbb Z^2$ for the
torus. Functoriality makes these obstructions: the circle is no retract of the disk, giving
Brouwer's theorem and the fundamental theorem of algebra; Borsuk-Ulam constrains
sphere-to-plane maps; topological-group loops commute; punctured spaces separate the plane
from other $\mathbb R^n$.
