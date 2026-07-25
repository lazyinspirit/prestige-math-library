---
id: rem-dugundji-extension-linear
kind: remark
title: "Dugundji's extension theorem in its linear form"
status: draft
origin: session
proved_here: false
deps: []
justified_by: []
forward_refs: []
aliases: []
landmark: false
short: "linear extenders into locally convex spaces"
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "J. Dugundji, An extension of Tietze's theorem, Pacific J. Math. 1 (1951) 353-367"
      url: "https://doi.org/10.2140/pjm.1951.1.353"
    - title: "J. Dugundji, An extension of Tietze's theorem (MSP)"
      url: "https://msp.org/pjm/1951/1-3/p04.xhtml"
    - title: "Locally convex topological vector space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Locally_convex_topological_vector_space"
    - title: "Tietze extension theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Tietze_extension_theorem"
pipeline_run: null
---

## Statement

Let $X$ be a metric space, $A \subseteq X$ a nonempty closed subset and $L$ a locally convex
topological vector space. Then every continuous $f \colon A \to L$ extends to a continuous
$F \colon X \to L$ whose image lies in the convex hull of $f(A)$.

Moreover the extension can be produced by an **extension operator**: a single map
$u \colon C(A, L) \to C(X, L)$ with $u(f)|_{A} = f$ which is linear in $f$ and continuous for the
topology of uniform convergence on compact sets. The values of $L$ are not restricted to an
interval, and the extension respects convexity of the target.

## Remarks

**Not proved in this library.** The scalar and metric Tietze theorem is in scope and will be proved;
the vector-valued statement with a **linear** extender is what is deferred.

**What would prove it.** A canonical locally finite open cover of $X \setminus A$ by sets whose
diameters shrink as they approach $A$, a partition of unity subordinate to it, and an averaging
formula $F(x) = \sum_i \varphi_i(x) f(a_i)$ with $a_i \in A$ chosen near the $i$-th cover element.
Linearity in $f$ is visible in that formula, which is why the extender is linear. The construction
needs paracompactness of metric spaces, A. H. Stone's theorem, which is itself choice-sensitive: it
is not provable in ZF + DC (Good, Tree and Watson, 1998) and is not implied by the Boolean prime
ideal theorem (Corson, 2020).

**Why it matters here.** The linearity of the extension operator, not the extension itself, is what
makes the theorem a tool: it lets one extend a whole family of maps coherently, which is what
retract theory and the theory of absolute neighbourhood retracts require. It is also the reason that
Tietze in the scalar case looks elementary while the general case sits behind both a covering
theorem and a choice principle.
