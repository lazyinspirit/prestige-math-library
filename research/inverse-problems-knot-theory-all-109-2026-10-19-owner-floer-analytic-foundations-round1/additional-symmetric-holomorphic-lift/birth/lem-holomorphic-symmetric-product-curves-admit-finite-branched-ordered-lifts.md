---
id: lem-holomorphic-symmetric-product-curves-admit-finite-branched-ordered-lifts
kind: lemma
title: "A holomorphic symmetric-product curve has a finite branched ordered lift even inside the diagonal"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps: [def-countable-choice, thm-zero-order-factorization-holomorphic-function, thm-holomorphic-implicit-function-theorem, thm-removable-singularity-characterizations, lem-polynomial-factorisation-into-irreducibles, thm-bezout-identity-for-polynomials, thm-polynomial-division-algorithm-over-a-field]
dependency_level: 1
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Peter Ozsvath and Zoltan Szabo, Holomorphic disks and topological invariants for closed three-manifolds"
      url: "https://arxiv.org/abs/math/0101206"
      locator: "Symmetric-product incidence-curve viewpoint in Section 3; the repeated-root branched lifting argument is supplied below"
---

## Statement

Assume Countable Choice. Let $C$ be a connected closed Riemann surface, $\Sigma$ a closed Riemann surface, and $u:C\to\operatorname{Sym}^m(\Sigma)$ holomorphic for the standard complex symmetric-product structure, $m\ge1$. Let $q:\Sigma^m\to\operatorname{Sym}^m(\Sigma)$ be the quotient. No assumption that the image avoids or is not contained in the repeated-point locus is made.

There are a finite set $B\subset C$, a positive integer $d\le m!$, a compact possibly disconnected Riemann surface $F$, a degree-$d$ holomorphic branched covering $p:F\to C$, and a holomorphic map $\widetilde u:F\to\Sigma^m$ with
$$q\circ\widetilde u=u\circ p.$$
Over $C\setminus B$ the covering is unbranched and its fiber is exactly the finite set of distinct orderings of the tuple $u(z)$, including its repeated entries. Near every point above $B$, in suitable source coordinates the map $p$ is $\zeta\mapsto\zeta^r$ for an integer $r\ge1$, and all coordinate maps of $\widetilde u$ extend holomorphically through $\zeta=0$. In particular this lift exists for a curve lying wholly in the diagonal, including nonreduced tuples with a fixed repeated coordinate.

The proof also gives the following local fact. A monic polynomial with holomorphic one-variable coefficient germs admits, on a sufficiently small punctured disk, a locally holomorphic collection of distinct roots with constant multiplicities. Those roots extend holomorphically after finite monodromy power substitutions, even when the original polynomial has an identically vanishing discriminant.

## Statement references

[[def-countable-choice]]

## Facts & Assumptions

**Given:** The closed source and target Riemann surfaces, standard symmetric-product coefficient charts and actual holomorphic map in the statement.

[F1] [[thm-zero-order-factorization-holomorphic-function]] gives finite zero order for a nonzero holomorphic germ, [[thm-holomorphic-implicit-function-theorem]] gives local holomorphic variation of a simple root, and [[thm-removable-singularity-characterizations]] extends a bounded holomorphic function across a puncture.

[F2] [[lem-polynomial-factorisation-into-irreducibles]] gives finite factorization over any field. [[thm-polynomial-division-algorithm-over-a-field]] and [[thm-bezout-identity-for-polynomials]] give terminating division and the actual Bezout identity. They involve finite algebra and no algebraic-closure or stronger-choice assumption.

## Proof

1.1 Work first with a monic holomorphic-coefficient polynomial germ $P(z,T)$ of positive degree at $z=0$. The meromorphic germs at zero form a characteristic-zero field $K$: a nonzero holomorphic germ is $z^r a(z)$ with $a(0)\ne0$ by [F1], so a ratio of such germs has at most a finite pole and its reciprocal is again such a ratio. Addition and multiplication preserve these ratios, and a product of nonzero germs is nonzero by the same zero-order formula. Factor $P$ over $K$ by [F2], normalize each factor to be monic, and group equal factors to write $$P=\prod_{j=1}^a Q_j^{r_j}$$ with distinct monic irreducibles and positive integer $r_j$. Only finitely many choices are needed. Each $Q_j'$ is nonzero and has lower degree in $T$ in characteristic zero, so it is coprime to $Q_j$. Distinct $Q_j,Q_l$ are coprime as well. Indeed a nonconstant gcd with an irreducible factor must be that factor, by irreducibility and monic normalization; this is impossible for the lower derivative or a distinct irreducible. Bezout [F2] supplies polynomial identities $U_jQ_j+V_jQ_j'=1$ and $U_{jl}Q_j+V_{jl}Q_l=1$ with meromorphic-germ coefficients. [F1, F2, construct, algebra]

1.2 Choose representatives of the finitely many factors and identities on a small disk. Shrink it so every coefficient is holomorphic except possibly for a pole at zero and every displayed factorization and Bezout identity holds on the punctured disk. This is possible because a nonzero holomorphic-germ denominator has no other zero sufficiently close to zero, by [F1]. At each nonzero parameter all factors $Q_j$ have simple roots and no two factors share a root, by these identities. Their roots are roots of $P$. In the symmetric-product application all roots of $P$ stay in a fixed bounded coordinate disk; more generally that boundedness follows directly for any monic holomorphic-coefficient $P$: if its coefficients are bounded by $M$ and $|T|>1+mM$, its leading term has modulus greater than the sum of the remaining term moduli, so it cannot vanish. Every monic divisor of a complex polynomial with known linear factors is the product of a submultiset of those factors: divide by one linear factor when it divides the divisor, and otherwise use Bezout to cancel it and induct on degree. Applying this finite argument at a parameter, or the same elementary complex root factorization, shows that the coefficients of $Q_j$ are elementary symmetric sums of its subset of roots. They are bounded uniformly on the punctured disk. The removable-singularity result [F1] therefore extends each coefficient holomorphically through zero. Thus $P=\prod Q_j^{r_j}$ is an actual holomorphic factorization there, with all support roots simple and mutually distinct away from zero. At such a parameter [F1] gives local holomorphic root functions with multiplicity precisely $r_j$. No nonzero original discriminant was assumed. [F1, F2, step 1.1, construct, algebra]

2.1 Apply this to the standard coefficient charts of the symmetric product near any tuple $u(z_0)$. Choose disjoint bounded complex coordinate disks about its distinct support points. On a small source neighborhood, the tuple has the same total number of entries in each disk, counted with multiplicity, and each cluster is described by its monic polynomial with holomorphic elementary-symmetric coefficients. For each polynomial step 1.2 shows that on a punctured neighborhood of $z_0$ its distinct support roots are locally holomorphic with constant multiplicities. Let $B$ be the points where the number of distinct support points of $u(z)$ is not locally constant. Its complement is open by definition. The just proved local description shows that near each source point there is no member of $B$ except possibly that point itself, so $B$ is closed and discrete; compactness of $C$ makes it finite. On $C\setminus B$, separated coordinate disks around the support roots contain one distinct support point each. Its multiplicity is constant locally, by continuity of the unordered tuple. Its value is holomorphic, since it is minus the first polynomial coefficient divided by that multiplicity. Consequently the finite set of distinct orderings of the full tuple, with repeated entries retained, varies as an actual unbranched holomorphic covering $F^\circ\to C\setminus B$. Its fiber size $d$ is constant and at most $m!$. For this constancy, a connected surface remains connected after removing finitely many points: connect points by a finite chain of coordinate disks and polygonal segments, then detour around the finitely many excluded points in small coordinate disks. Each local covering degree therefore agrees throughout. The ordered tuple itself supplies a holomorphic map $\widetilde u:F^\circ\to\Sigma^m$. [F1, step 1.2, construct, algebra]

3.1 Complete the covering at each exceptional point by an explicit finite construction. Cut a small punctured source disk along a radius. Its finite covering is the disjoint union of sheet copies there: lift radial segments from one chosen interior fiber, and use uniqueness of local covering lifts on overlapping subrectangles. Crossing the cut permutes their finite labels; split this permutation into cycles. A cycle of length $r$ is filled by a disk with map $p(\zeta)=\zeta^r$. Equivalently the successive angular sectors of the root coordinate $\zeta$ represent its successive sheets, giving the original covering on the punctured disk. The coordinate maps of the ordered tuple are holomorphic there and lie in the bounded target disks used in step 2.1. By [F1] they extend holomorphically to $\zeta=0$. The equality $q\widetilde u=up$ persists by continuity. This also proves the local monodromy power-substitution assertion for the polynomial roots from step 1.2. Different root coordinates on overlapping sheet descriptions agree by their ordered values and analytic continuation off the center, so these fillings define a smooth Riemann surface and holomorphic maps, rather than just a formal multiset of functions. [F1, step 2.1, construct, algebra]

4.1 There are finitely many exceptional points and finitely many sheets, so this completion gives a finite branched covering of degree $d$. It is compact: over each exceptional closed coordinate disk the construction gives finitely many closed covering disks, while the remaining compact source part has a finite covering by relatively compact evenly covered charts and hence compact inverse image. These finitely many pieces cover the completed source. Its possible connected components are finite in number, each mapping onto $C$ with positive degree. The resulting holomorphic lift has every asserted property. Constant tuple maps and repeated generic roots cause no exception to the proof: the covering may then have degree strictly less than $m!$, but every repeated coordinate is still present in its ordered map. The argument used only local meromorphic germs, finite algebra and monodromy, bounded holomorphic removal and finite coverings; it did not invoke normalization or Puiseux theorems as unproved suppliers. [step 1.2, step 2.1, step 3.1, construct, algebra] ∎
