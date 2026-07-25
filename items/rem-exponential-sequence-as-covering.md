---
id: rem-exponential-sequence-as-covering
kind: remark
title: "The exact sequence $0 \\to \\mathbb{Z} \\to \\mathbb{R} \\to \\mathbb{T} \\to 0$ read as a covering"
status: draft
origin: session
proved_here: false
deps: [rem-covering-spaces-and-universal-cover, rem-pi1-circle-is-z]
justified_by: []
forward_refs: []
aliases: []
landmark: false
short: "The sequence is in scope on the Euler's-formula page; only the covering-space reading is deferred"
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Circle group (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Circle_group"
    - title: "Covering space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Covering_space"
    - title: "A. Hatcher, Algebraic Topology, Section 1.1 (free official edition)"
      url: "https://pi.math.cornell.edu/~hatcher/AT/ATpage.html"
pipeline_run: null
---

## Statement

Write $\mathbb{T} = \{ z \in \mathbb{C} : |z| = 1 \}$ for the circle group under
multiplication. The sequence of abelian groups

$$0 \to \mathbb{Z} \xrightarrow{\ \iota\ } \mathbb{R} \xrightarrow{\ e\ } \mathbb{T} \to 0, \qquad \iota(n) = n, \quad e(t) = e^{2\pi i t}$$

is exact: $\iota$ is injective, $e$ is a surjective homomorphism from the additive
reals onto $\mathbb{T}$, and $\ker e = \mathbb{Z}$. Equivalently
$\mathbb{T} \cong \mathbb{R}/\mathbb{Z}$ as topological groups.

The reading that is **deferred** is the topological one: $e$ is a covering map,
$\mathbb{R}$ is simply connected, so $e \colon \mathbb{R} \to \mathbb{T}$ is the
**universal covering** of the circle; the kernel $\mathbb{Z}$ is exactly the group
of deck transformations, acting by $t \mapsto t + n$; and the resulting
isomorphism $\mathbb{Z} \cong \pi_1(\mathbb{T})$ is the instance for $\mathbb{T}$
of the general identification of the deck group of a universal cover with the
fundamental group of the base.

## Remarks

**What is in scope, and is not deferred.** The exact sequence itself is
elementary analysis and belongs to the library's Euler's-formula page, not here.
That $e$ is a homomorphism is the addition formula for the exponential; that it
is surjective onto $\mathbb{T}$ is the intermediate value theorem applied to
$\cos$ and $\sin$; and the computation of the kernel, in the equivalent complex
form

$$\ker(\exp \colon \mathbb{C} \to \mathbb{C} \setminus \{0\}) = 2\pi i \mathbb{Z},$$

is proved there from the analytic definition of $\exp$ and the definition of
$\pi$ as twice the first positive zero of $\cos$. None of that needs topology
beyond connectedness of $\mathbb{R}$.

**Not proved in this library.** Only the covering-space reading above: that $e$ is
a covering map in the technical sense, that the kernel is the deck group, and
that this computes $\pi_1(\mathbb{T})$.

**What would prove it.** Even covering of the circle by two open arcs is
immediate; everything after that is the lifting machinery of
[[rem-covering-spaces-and-universal-cover]] together with
[[rem-pi1-circle-is-z]].

**Why it matters here.** This sequence is the meeting point of the algebra, the
analysis and the topology of the circle, and it is where a reader is most likely
to assume the library has proved more than it has. The algebraic and analytic
halves are proved; the sentence "and therefore $\mathbb{R}$ is the universal cover
of the circle" is quoted, not proved.
