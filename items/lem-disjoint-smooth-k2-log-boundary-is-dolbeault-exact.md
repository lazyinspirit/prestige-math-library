---
id: lem-disjoint-smooth-k2-log-boundary-is-dolbeault-exact
kind: lemma
title: "A disjoint smooth tame-symbol boundary has an exact logarithmic current"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
deps: []
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Gillet and Soulé, Arithmetic intersection theory"
      url: "https://www.numdam.org/article/PMIHES_1990__72__93_0.pdf"
      locator: "Section 3.3.5, printed pp. 129–130; the disjoint smooth-support special case is reconstructed here."
---

## Statement

Let W and X be complex manifolds and h:W->X a proper holomorphic map. Let f and g be nonzero meromorphic functions on W whose divisor supports are smooth hypersurfaces and disjoint from one another; the empty divisor is allowed. Write div(f)=sum_D a_D D and div(g)=sum_E b_E E, with their finite local multiplicities. For each D use the tame symbol g|_D^(-a_D), and for each E use f|_E^(b_E); these restrictions are holomorphic units. With d^c=i/(4pi)(barpartial-partial), the current

    R=h_* (sum_E b_E log|f|² delta_E - sum_D a_D log|g|² delta_D)

is a sum partial U + barpartial V of currents on X. Equivalently, the logarithmic current of this K2-symbol boundary is zero in the quotient by the two Dolbeault boundary images. The assertion concerns these smooth disjoint supports; it does not cover intersecting divisors, singular supports, algebraic K2 moving, or product descent.

## Facts & Assumptions

**Given:** W, X, the proper holomorphic map h, and nonzero meromorphic f and g satisfying the explicit smoothness and disjointness hypotheses.

## Proof

1.1 Put F=log|f|² and G=log|g|². Near a point of the smooth support of div(f), choose a local coordinate z with that support z=0 and write f=z^a u, where u is holomorphic and nowhere zero and a is the local multiplicity. The disjointness hypothesis makes g a holomorphic unit there. Thus F and G are locally integrable, dF has a locally integrable 1/z singularity, and G and dG are smooth; the analogous assertion holds with f and g interchanged near div(g). Away from the two supports all these functions and forms are smooth. Hence the 1-form current T=F d^cG-G d^cF is well defined and locally integrable. [given, choose, construct, algebra]

2.1 The local identity dd^c log|z|²=delta_(z=0) follows by integrating against compactly supported test forms on {|z|>epsilon} and applying Stokes: the circle term tends to the integral over z=0, with the coefficient fixed by d^c=i/(4pi)(barpartial-partial). A holomorphic unit has pluriharmonic logarithm. Applying this in the above coordinates yields dd^cF=sum_D a_D delta_D and dd^cG=sum_E b_E delta_E as currents. The sums are locally finite, and multiplication by G on div(f) and by F on div(g) is legitimate because those functions are smooth near the respective supports. [given, step 1.1, construct, algebra]

3.1 Taking the (1,1)-component of dT gives (dT)^(1,1)=F dd^cG-G dd^cF. Indeed, on the complement of the two divisors this follows from the product rule: the mixed-type part of dF wedge d^cG equals that of dG wedge d^cF. Near a divisor of f, G and dG are smooth and ordinary distributional integration by parts gives the same identity using step 2.1; near a divisor of g interchange the two functions. Thus the identity holds globally as currents. Its right side is exactly the current inside h_* in the Statement. [step 1.1, step 2.1, algebra]

4.1 Write T=T^(1,0)+T^(0,1). Step 3.1 gives the displayed current as partial T^(0,1)+barpartial T^(1,0). Proper holomorphic pushforward of currents is defined by precomposing compactly supported test forms with pullback; it commutes with partial and barpartial because pullback commutes with these operators. Therefore U=h_*T^(0,1) and V=h_*T^(1,0) give R=partial U+barpartial V. On a divisor D of f, ord_D(g)=0 and the tame symbol {f,g}_D=g|_D^(-a_D); on a divisor E of g, ord_E(f)=0 and the tame symbol is f|_E^(b_E). Taking log absolute squares gives exactly the displayed signed sum. [given, step 3.1, construct, algebra] ∎
