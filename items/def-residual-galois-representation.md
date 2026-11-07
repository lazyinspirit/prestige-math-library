---
id: def-residual-galois-representation
title: "Residual representation attached to a stable lattice"
kind: definition
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
deps:
  - def-continuous-l-adic-galois-representation
  - lem-continuous-l-adic-representation-admits-stable-lattice
  - lem-finite-dimensional-galois-representation-has-composition-series
  - def-group-ring
  - thm-group-ring-is-a-unital-algebra-with-basis-g
  - def-composition-series-and-length-of-a-module
  - def-semisimple-module
  - thm-jordan-holder-theorem-for-modules
  - def-axiom-of-choice
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Jean-Pierre Serre, Abelian ℓ-adic Representations and Elliptic Curves, Chapter I, §§1.1 and 2.3"
      url: "https://www.math.mcgill.ca/darmon/courses/18-19/gs/serre-mcgill.pdf"
    - title: "Barry Mazur, Deforming Galois Representations, Chapter I, §1.1"
      url: "https://bpb-us-e1.wpmucdn.com/sites/harvard.edu/dist/a/189/files/2023/01/Deforming-Galois-Representations.pdf"
    - title: "Arvind Nair, Algebra I, Lecture 5, Composition series and the Jordan–Hölder theorem"
      url: "https://mathweb.tifr.res.in/~arvind/algebra/Lectures_algebra.pdf"
verification:
  precheck: n/a
---

## Definition

Assume AC. Let $\rho:G_F\to\operatorname{GL}_{\mathbb Q_\ell}(V)$ be a
continuous finite-dimensional $\ell$-adic Galois representation and let
$\Lambda\subseteq V$ be a $\rho$-stable full $\mathbb Z_\ell$-lattice. The
quotient $W_\Lambda=\Lambda/\ell\Lambda$ is finite because $\Lambda$ is
compact and $\ell\Lambda$ is open: multiplication by $\ell$ is a homeomorphism
of $V$. The quotient is compact and discrete, hence finite, so it is a finite-dimensional
vector space over $\mathbb F_\ell=\mathbb Z_\ell/\ell\mathbb Z_\ell$. The action
induces a continuous representation
$\bar\rho_\Lambda:G_F\to\operatorname{GL}_{\mathbb F_\ell}(W_\Lambda)$.
A finite set of $\mathbb Z_\ell$-generators of $\Lambda$ shows continuity:
congruence modulo the open submodule $\ell\Lambda$ on each generator is an
open condition on the original matrix action.
A **composition series** of $W_\Lambda$ is a finite chain of invariant
subspaces $0=W_0\subsetneq\cdots\subsetneq W_r=W_\Lambda$ whose successive
quotients are **simple**, meaning nonzero with no proper nonzero invariant
subspace. The **semisimplification** is the direct sum
$$\bar\rho_\Lambda^{\mathrm{ss}}=\bigoplus_{i=1}^r W_i/W_{i-1}.$$
The finite-dimensional composition-series lemma guarantees existence, and
Jordan–Hölder makes this isomorphism class independent of the chosen series.
The resulting representation is the **residual representation relative to
$\Lambda$**. No independence from the choice of stable lattice is asserted.

## Definition references

[[def-continuous-l-adic-galois-representation]]

[[lem-continuous-l-adic-representation-admits-stable-lattice]]

[[lem-finite-dimensional-galois-representation-has-composition-series]]

[[def-group-ring]]

[[thm-group-ring-is-a-unital-algebra-with-basis-g]]

[[def-composition-series-and-length-of-a-module]]

[[def-semisimple-module]]

[[thm-jordan-holder-theorem-for-modules]]

[Jean-Pierre Serre, *Abelian ℓ-adic Representations and Elliptic Curves*, Chapter I, §§1.1 and 2.3](https://www.math.mcgill.ca/darmon/courses/18-19/gs/serre-mcgill.pdf)

[Barry Mazur, *Deforming Galois Representations*, Chapter I, §1.1](https://bpb-us-e1.wpmucdn.com/sites/harvard.edu/dist/a/189/files/2023/01/Deforming-Galois-Representations.pdf)

[Arvind Nair, *Algebra I*, Lecture 5, “Composition series and the Jordan–Hölder theorem”](https://mathweb.tifr.res.in/~arvind/algebra/Lectures_algebra.pdf)

## Facts & Assumptions

**Given:** AC, a global field $F$, a prime $\ell$, a continuous
$\ell$-adic representation $\rho$ of $G_F$, and a chosen stable lattice
$\Lambda$.

[A1] [[def-axiom-of-choice]]: AC is assumed for the compactness step in the
stable-lattice construction; the finite-dimensional composition-series
argument is choice-free.

[F1] [[def-continuous-l-adic-galois-representation]]: $\rho$ is a continuous
homomorphism from $G_F$ to the automorphism group of a finite-dimensional
$\mathbb Q_\ell$-vector space.

[F2] [[lem-continuous-l-adic-representation-admits-stable-lattice]]: under AC,
such a representation admits a compact-open stable $\mathbb Z_\ell$-lattice.

[F3] [[lem-finite-dimensional-galois-representation-has-composition-series]]:
every finite-dimensional group representation over a field has a finite
invariant-subspace filtration with simple successive quotients.

[F4] [[thm-jordan-holder-theorem-for-modules]]: any two composition series of
a module have the same simple factors up to permutation and isomorphism.

[F5] [[def-semisimple-module]]: a module is semisimple when it is a direct sum
of simple submodules; the displayed semisimplification has that form.

[F6] [[def-group-ring]] and
[[thm-group-ring-is-a-unital-algebra-with-basis-g]]: the group ring
$\mathbb F_\ell[G_F]$ is a unital $\mathbb F_\ell$-algebra whose basis consists
of the elements of $G_F$; its module action is the same as the stated group
action.

[F7] [[def-composition-series-and-length-of-a-module]]: a composition series
is a finite chain of submodules with simple successive quotients; this matches
the invariant-subspace definition in the statement.
