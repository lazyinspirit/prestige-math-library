---
id: rem-homological-simple-connectivity-conventions
kind: remark
title: "Conventions for chains, cycles and the homological adjective on this page"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-complex-chain-and-cycle, def-null-homologous-and-homologous-complex-cycles, def-homologically-simply-connected-complex-domain, cor-cycle-integral-of-a-derivative-vanishes, def-winding-number-closed-complex-contour, def-complex-contours-reversal-concatenation-and-closedness, def-integration-and-index-of-complex-chain]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "L. V. Ahlfors, Complex Analysis, 3rd ed., Ch. 4 §4.4"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
    - title: "J. Lebl, Complex Analysis, Ch. 4 §4.3"
      url: "https://www.jirka.org/ca/ca.pdf"
pipeline_run: null
---

## Remark

Four choices are made in the definitions above, and each is made for a reason
that can be stated.

**A chain is a finite list, not an element of a group.**
[[def-complex-chain-and-cycle]] presents a chain as a list of pairs
$(m_k,\gamma_k)$, with sum given by concatenation and negation by negating the
coefficients. Presenting chains as elements of a free abelian group on the set of
contours would require saying when two chains are equal, and every such
identification would then have to be checked against the integral and the index.
The list presentation avoids that obligation entirely: equality of chains is
equality of lists, and no result above asserts that two differently presented
chains coincide. What the results do assert is equality of the *numbers*
$\int_\Gamma f\,dz$ and $n(\Gamma,p)$, which is all any of them uses.

**A cycle is a chain whose boundary function vanishes, and that is weaker than
requiring every piece to be closed.** In
[[cor-cycle-integral-of-a-derivative-vanishes]], summing the endpoint increments
of a primitive with the coefficients $m_k$ leaves the coefficient of $F(q)$
equal to the boundary value at $q$. The same boundary cancellation is also used
in [[thm-winding-number-of-a-cycle-is-integer]] to make the logarithm increments
sum to an integer index. Both arguments need the endpoint counts to cancel and
nothing more, so imposing closedness on each $\gamma_k$ would strengthen the
hypothesis without strengthening either conclusion. Two contours running
between the same pair of distinct points, weighted $+1$ and $-1$, satisfy the
condition and neither is closed.

**The adjective is "homologically simply connected", written out every time.**
[[def-homologically-simply-connected-complex-domain]] defines a condition on
indices: every cycle in the domain is null-homologous in it
([[def-null-homologous-and-homologous-complex-cycles]]). Nothing above defines
or uses a notion of simple connectivity phrased with loops or homotopies, and no
statement above asserts a relation between the two. Keeping the qualifier is what
makes that scope visible to a reader who arrives with the other notion in mind.

**The winding number belongs to the parametrised contour, not to its trace.**
[[def-winding-number-closed-complex-contour]] is stated for a map
$\gamma:[a,b]\to\mathbb C$, because the integral it is built from depends on that
map: a complex contour is a rectifiable path together with its domain and its
parametrisation ([[def-complex-contours-reversal-concatenation-and-closedness]]),
and the trace is only the image set. Two closed contours can share a trace and
have different indices at a point, since the parametrisation records how many
times and in which direction the trace is traversed; the chain-level index of
[[def-integration-and-index-of-complex-chain]] inherits the same dependence
through its terms.
