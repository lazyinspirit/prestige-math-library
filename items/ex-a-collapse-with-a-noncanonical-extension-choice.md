---
id: "ex-a-collapse-with-a-noncanonical-extension-choice"
kind: "example"
title: "A collapse with a noncanonical extension choice"
deps: ["prop-collapse-of-uct-or-kunneth-still-leaves-the-recorded-extension-problem", "prop-a-collapsed-first-quadrant-spectral-sequence-with-field-vector-space-abutment-splits-noncanonically", "def-axiom-of-choice"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: "Weibel, Section 5.2"
      url: "https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf"
status: "draft"
origin: "pipeline"
pipeline_run: "phase-2-next-17"
proof_strategy: "direct"
---

## Example

The finite filtration $0\subset2\mathbb Z/4\subset\mathbb Z/4$ has two graded pieces $\mathbb Z/2$, but its target is not $(\mathbb Z/2)^2$. Over a field, a finite vector-space filtration splits under AC, yet its complements need not be natural; already $0\subset ke_1\subset k^2$ has complements moved by automorphisms. Both filtrations can occur in collapsed first-quadrant sequences.

## Facts & Assumptions

**Given:** The two displayed filtered modules.

[F1] Collapse retains the extension between its graded quotients ([[prop-collapse-of-uct-or-kunneth-still-leaves-the-recorded-extension-problem]]).

[F2] Under AC finite vector-space filtrations split; finite-dimensional individual filtrations need only finite choice, and a shear can prevent naturality ([[prop-a-collapsed-first-quadrant-spectral-sequence-with-field-vector-space-abutment-splits-noncanonically]]).

## Verification

1.1 Put $H=\mathbb Z/4$ in cochain degree one, with zero differential, $F^0H=H$, $F^1H=2\mathbb Z/4$ and $F^2H=0$. The associated graded is $\mathbb Z/2$ at $(0,1)$ and $(1,0)$, zero elsewhere. Every differential is zero, so all pages equal this graded object, and actual cohomology is $H$ with exactly the displayed finite filtration. A section of $H\to H/(2\mathbb Z/4)$ would send the element of order two to an element killed by two lifting the odd coset. Its only lifts are $1$ and $3$, both of order four. Thus no section exists; equivalently $H$ has order-four elements while $(\mathbb Z/2)^2$ does not. This is F1's extension obstruction with no choice assumption. [F1, construct]

2.1 Similarly place $k^2$ in degree one, $F^1=ke_1$, with zero differential. Its stationary entries are $k$ at the same two positions, and its finite image filtration gives the actual abutment. Each line $L_a=k(ae_1+e_2)$ is a complement, since its intersection with $ke_1$ is zero and every vector is the sum of elements in those two lines. Conversely every complement has this form by normalizing the second coordinate of a nonzero vector in it. The shear $e_1\mapsto e_1$, $e_2\mapsto e_2+e_1$ sends $L_a$ to $L_{a+1}$ and fixes no complement, while inducing identity on both graded pieces. Hence existence and even an explicit choice $L_0$ do not give naturality. [F2, step 1.1]

3.1 In arbitrary dimension F2 uses AC for bases and complements, followed by only finitely many filtration splittings. In the displayed two-dimensional example the formula already supplies complements in ZF. In both cases the full target has zero/full filtration endpoints $F^2=0,F^0=H$, so convergence has no hidden issue; the unresolved question from page data alone is the extension or its choice of section. With just one nonzero quotient this particular extension obstruction disappears. [F1, F2, step 1.1, step 2.1] ∎
