
## Your cluster — `polyrings`: ring hypotheses on the polynomial page

Page: `polynomial-rings-and-roots` + `-examples`.

The independent reader for this batch reported no fatal defect and 21 nonfatal
repairs. Your job is to disagree if the mathematics warrants it. Every item below
is `critical` or `high` on `risk-report.mjs`.

### The failure mode this page invites

**Every theorem here has a hypothesis on the coefficient ring, and the whole page
is one long opportunity to use the wrong one.** Commutative ring, commutative
ring with 1, integral domain, UFD, field — these are five different hypotheses
and results are true over some and false over others. For **every** item, read
the Statement's ring hypothesis, then check the proof uses only what that
hypothesis gives, and check every cited dependency's own ring hypothesis is
implied by it.

The specific traps:

- **Degree additivity** $\deg(fg)=\deg f+\deg g$ requires a **domain** (or at
  least a non-zero-divisor leading coefficient). It is false over
  $\mathbb Z/4$: $(2x)(2x)=0$. Any proof using degree additivity over a general
  commutative ring is fatal. Check `cor-units-in-a-polynomial-ring-over-a-domain`,
  `thm-root-bound-for-polynomials-over-a-domain`, and every degree argument.
- **Division algorithm.** `thm-polynomial-division-algorithm-over-a-field` is
  stated over a field. Over a general commutative ring, division works only by a
  **monic** divisor (or one with unit leading coefficient). Check
  `cor-factor-theorem-over-a-commutative-ring` — its divisor is $x-a$, which is
  monic, so it is legitimately available over any commutative ring; verify the
  proof really uses only monic division and does not route through the field
  version.
- **Root bound.** "A nonzero polynomial of degree $n$ has at most $n$ roots"
  needs a **domain**. Over $\mathbb Z/8$, $x^2-1$ has four roots. Check the
  hypothesis is present and used.
- **Gauss's lemma and content.** `lem-content-divisibility-characterisation`,
  `thm-gauss-lemma-for-integer-polynomials` — check whether primitivity is
  defined for the zero polynomial and whether the statements exclude it, and that
  the product-of-primitives argument is the prime-by-prime one rather than an
  appeal to a UFD fact not yet available.
- **`thm-polynomial-ring-over-a-field-is-a-ufd`** — check both existence of a
  factorisation and its uniqueness up to units and order, and that irreducibility
  of the constants/units case is handled. `lem-polynomial-factorisation-into-irreducibles`
  is the existence half: check its induction is on degree and terminates.
- **`thm-polynomial-quotient-is-a-field-iff-irreducible`** — a biconditional, and
  the reverse direction needs the ring to be a **field** (over a general domain,
  $F[x]/(f)$ with $f$ irreducible need not be a field — check what is actually
  claimed and whether the hypothesis matches).
- **`cor-finite-subgroups-of-units-in-a-domain-are-cyclic`** — this is the result
  whose earlier decline was overturned at step 3. It needs the root bound, hence
  a domain, and the standard proof needs either the structure theorem for finite
  abelian groups or an Euler-phi counting argument. Check which route is used and
  that the cited dependency actually supplies it — this is a **cross-batch edge**
  to `the-structure-of-finite-abelian-groups` if it goes that way.
- **`thm-polynomial-is-separable-iff-coprime-to-its-derivative`** — the formal
  derivative behaves differently in positive characteristic. Check whether the
  statement is over a field of characteristic zero, a perfect field, or general,
  and whether the proof's use of $\gcd(f,f')$ is licensed. The B-page item
  `ex-formal-derivative-detects-a-repeated-root-in-characteristic-two` suggests
  characteristic 2 is in scope — make sure the theorem and the example are
  consistent.
- **`thm-reduction-mod-prime-irreducibility-test`** — the test requires the
  leading coefficient **not** to be divisible by $p$. A missing that hypothesis
  is a classic and makes the statement false. Check it is there.
- **`thm-rational-root-theorem`** and **`thm-quadratic-and-cubic-irreducibility-test`**
  — the latter is true only for degrees 2 and 3 and only over a field; check the
  degree restriction is in the Statement and the title.
- **`thm-universal-property-of-a-polynomial-ring`** — evaluation is a ring
  homomorphism only into a **commutative** target (or at an element central in
  the target). Check the commutativity hypothesis is present; without it the
  universal property is false.
- **`cex-distinct-polynomials-can-induce-the-same-finite-field-function`** and
  **`cex-the-ideal-x-y-in-a-bivariate-polynomial-ring-is-not-principal`** — verify
  the witnesses concretely.

**Boundary cases to test throughout:** the zero polynomial (degree convention —
check what the page says $\deg 0$ is and that every statement respects it);
constant polynomials; degree 0 versus the zero polynomial; the zero ring; $n=0$
and $n=1$ in every counting or degree claim.

Read every one of these in full:

- `thm-universal-property-of-a-polynomial-ring`
- `cor-units-in-a-polynomial-ring-over-a-domain`
- `cor-factor-theorem-over-a-commutative-ring`
- `thm-polynomial-division-algorithm-over-a-field`
- `lem-polynomial-factorisation-into-irreducibles`
- `thm-polynomial-ring-over-a-field-is-a-ufd`
- `thm-polynomial-quotient-is-a-field-iff-irreducible`
- `thm-root-bound-for-polynomials-over-a-domain`
- `cor-finite-subgroups-of-units-in-a-domain-are-cyclic`
- `thm-quadratic-and-cubic-irreducibility-test`
- `thm-polynomial-is-separable-iff-coprime-to-its-derivative`
- `lem-content-divisibility-characterisation`
- `thm-gauss-lemma-for-integer-polynomials`
- `thm-rational-root-theorem`
- `thm-reduction-mod-prime-irreducibility-test`
- `cex-distinct-polynomials-can-induce-the-same-finite-field-function`
- `ex-reduction-mod-two-proves-a-cubic-irreducible`
- `ex-formal-derivative-detects-a-repeated-root-in-characteristic-two`
- `cex-the-ideal-x-y-in-a-bivariate-polynomial-ring-is-not-principal`
