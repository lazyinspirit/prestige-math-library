---
id: thm-benard-florens-rodau-logarithmic-gauss-formula
kind: theorem
title: Bénard–Florens–Rodau logarithmic Gauss formula and ideal-point slope
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 13
deps:
  - thm-adjoint-logarithmic-gauss-slope-and-ideal-point
  - lem-adjoint-twisted-slope-is-rational-on-a-character-component
  - def-character-variety-logarithmic-slope-invariant
  - def-knot-a-polynomial
  - def-boundary-slope-of-an-incompressible-surface
  - lem-absolutely-irreducible-sl2-representations-have-quadratic-trace-field-models
  - lem-irreducible-sl2-character-components-have-specializing-quadratic-models
  - lem-generic-adjoint-peripheral-kernel-is-the-logarithmic-conormal-line
  - thm-hilbert-basis-theorem
  - lem-classical-affine-algebraic-set-finite-irreducible-components
  - thm-classical-affine-nullstellensatz-correspondence
  - thm-affine-domain-dimension-transcendence-degree
justified_by: []
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "Bénard, Florens and Rodau, A slope invariant and the A-polynomial of knots, published NYJM30 (2024),561–582"
      url: "https://nyjm.albany.edu/j/2024/30-25p.pdf"
      locator: "Actual Lemma3.10 PDF10–11, Lemma3.17 and proof3.15 PDF14–15, Theorem4.1/Remark4.2 PDF18. Their generic conormal step is not imported as an exceptional-point proof."
    - title: "Côté and Manolescu, A sheaf-theoretic SL(2,C) Floer homology for knots"
      url: "https://web.stanford.edu/~cm5/sl2c_knots.pdf"
      locator: "Actual Sections5.2 PDF20–21 and6.1 PDF27; knot character-scheme reducedness is recorded as a Le–Tran conjecture, NOT assumed below."
    - title: Léo Bénard, François Florens, and Adrien Rodau, A slope invariant and the
        A-polynomial of knots, Theorems 1.3 and 1.5
      url: https://arxiv.org/pdf/2103.14151
    - title: Allen Hatcher, Boundary slopes of incompressible surfaces
      url: https://www.math.unl.edu/~mbrittenham2/classwk/990s08/public/hatcher.bdyslopes.pdf
---

## Statement

Assume full AC. Let $K\subset S^3$ be a smooth oriented knot, and let $X$ be a one-dimensional irreducible component of its $SL_2(\mathbb C)$ character variety whose peripheral image is a curve in $(\mathbb C^*)^2$. With Bénard–Florens–Rodau's variable order $A_K(L,M)$ and their slope convention, on the admissible smooth locus where the displayed derivatives are nonzero,
$$s_K(\rho)=-\frac{M}{L}\frac{\partial_M A_K}{\partial_L A_K}.$$
At an ideal point of the curve, if the associated Culler-Shalen surface has boundary slope $r$ measured by $a[\lambda]+b[\mu]$ with $r=b/a$, the limiting Bénard–Florens–Rodau slope is $-r$.

## Statement references

[Bénard, Florens, and Rodau, Theorems 1.3 and 1.5](https://arxiv.org/pdf/2103.14151)

[Hatcher, *Boundary Slopes of Incompressible Surfaces*](https://www.math.unl.edu/~mbrittenham2/classwk/990s08/public/hatcher.bdyslopes.pdf)

## Facts & Assumptions

**Given:** Full AC, the exact ordered adjoint-homology basis and slope convention, a one-dimensional peripheral curve, a smooth admissible locus, and the ideal-point surface specified in the statement.

[F1] The affine logarithmic formula and ideal-point statement are the local theorem with explicit boundary-slope conventions ([[thm-adjoint-logarithmic-gauss-slope-and-ideal-point]]).

[F2] Boundary slope $r=b/a$ is defined using the preferred longitude and positive meridian ([[def-boundary-slope-of-an-incompressible-surface]]).

[F3] The explicit quadratic trace-field recovery formulas use only the two-word semisimple/irreducibility denominators and word traces; the actual generic family satisfies all generator and relator identities. [[lem-absolutely-irreducible-sl2-representations-have-quadratic-trace-field-models]] [[lem-irreducible-sl2-character-components-have-specializing-quadratic-models]]

[F4] The actual boundary-inclusion kernel and the logarithmic differential kernel coincide generically, by the differentiated representation cocycle and local-coefficient duality. [[lem-generic-adjoint-peripheral-kernel-is-the-logarithmic-conormal-line]]

[F5] Finite-variable polynomial algebras are Noetherian, and hence have finitely generated ideals. Quotients and localizations retain that property by lifting ideals and clearing denominators. [[thm-hilbert-basis-theorem]]

[F6] Reduced finite-type affine algebras are separated by their complex points and inject into the product of their finitely many minimal-prime quotient domains. The finite irreducible decomposition and strong Nullstellensatz give these assertions, also after a finite-type principal localization. [[lem-classical-affine-algebraic-set-finite-irreducible-components]] [[thm-classical-affine-nullstellensatz-correspondence]]

[F7] The dimension of a finite-type domain is the transcendence degree of its fraction field. [[thm-affine-domain-dimension-transcendence-degree]]

## Proof obligation

The rational-function and conditional ideal-point assertions are now assembled in the actual proof donor of [F1], with the original Statement unchanged. The remaining issue here is equality with the actual homology-defined value $s_K(\rho)$ at every exceptional admissible smooth point, rather than only with the rational extension. The following pointwise argument proves the equality whenever the actual peripheral restriction is unramified at the given smooth character, and also proves that unramified condition whenever the actual adjoint first cohomology has dimension one. Neither condition is inserted into this Statement as an extra hypothesis.

The displayed nonzero-gradient hypotheses exclude reducible representatives here. Indeed, a reducible representation is triangular, and its diagonal characters factor through the knot abelianization, so its longitude eigenvalue is $L=1$. The ordinary A-polynomial includes the factor $L-1$. If the stated peripheral-image curve is this abelian factor, its $M$-derivative vanishes along it. If it is a different factor, their intersection at $L=1$ makes both derivatives of the full square-free product vanish. Both alternatives contradict the stated derivative hypotheses.

Fix an irreducible representative $\rho_0$ at a smooth point $\chi_0$ of $X$. Choose the two words $a,b$ of [F3] for this representative: $a$ has distinct eigenvalues and the normalized $b$ has both off-diagonal entries nonzero. Their trace discriminant $D$ and off-diagonal product $q$ are nonzero at $\chi_0$, so the exact recovery equations of [F3] have unit denominators in the local ring. Write its completion as $\mathbb C[\![t]\!]$, with $t$ a smooth local parameter. A root $\xi(t)$ of the semisimple word's characteristic polynomial with prescribed root $\xi(0)$ exists formally: after its first coefficient, every successive coefficient is uniquely solved by division by the nonzero constant $2\xi(0)-\operatorname{tr}\rho_0(a)$. Substituting all word-trace series into the recovery equations therefore gives generator matrices in $SL_2(\mathbb C[\![t]\!])$. They satisfy every relator: the same equations are the actual generic conjugated representation on a dense open of this curve, and their only local denominators are the units already named, so those rational identities remain formal identities here. At $t=0$ the recovered matrices are conjugate to $\rho_0$, by the same unique four-trace recovery, and they can be conjugated once to equal it. Thus this is an actual formal family through the specified representative, without presuming that an arbitrary quotient map admits a local section.

Differentiate that formal family at zero. Its right logarithmic derivative $Z(g)=\dot\rho(g)\rho_0(g)^{-1}$ is an actual crossed cocycle, because differentiating each relator gives zero. The finite word-chain calculation in [F4] consequently gives an actual functional on $H_1(E_K;\operatorname{Ad}\rho_0)$. Pairing with the two peripheral cycles gives the two coefficients of $\mathrm dL/L$ and $\mathrm dM/M$ at $t=0$, up to their common nonzero invariant-vector scale. If the restriction is unramified these are not both zero, so this functional's boundary kernel is a line. It contains the actual inclusion kernel, which is a line by admissibility. The two lines are therefore equal. Since the smooth peripheral curve's tangent satisfies $L(A_K)_L\,\mathrm dL/L+M(A_K)_M\,\mathrm dM/M=0$, its slope is precisely the displayed formula, including its sign. This proves genuine pointwise equality in this branch, not merely continuation of a rational map.

If instead one knows $\dim H^1(E_K;\operatorname{Ad}\rho_0)=1$, the same family's tangent cocycle is nonzero in cohomology: a smooth local coordinate of $X$ has a nonzero differential and is a regular function of finitely many word traces, whereas a coboundary differentiates every word trace to zero. By trace self-duality and the actual rank-one boundary inclusion, the cohomological restriction of this one-dimensional space has rank one and is injective. Its nonzero tangent cocycle therefore has nonzero peripheral restriction, proving the unramified condition and hence the preceding pointwise formula. The invariant-vector basis in the admissibility definition excludes boundary-unipotent degeneration: for a nonscalar unipotent commuting pair the invariant line is spanned by its nilpotent matrix, and the torus two-cell boundary gives a nonzero relation between the two invariant-vector edge cycles; they cannot form the stated two-element basis. For a scalar pair the adjoint action is trivial and the boundary first homology has dimension six, also excluded. Thus the explicit semisimple torus model used in [F4] applies. A meridian cannot be scalar unless the whole knot representation is scalar, since its conjugates generate the knot group.

The following additional pointwise argument covers reduced local representation rings, without any cohomological-dimension or unramifiedness hypothesis. What remains after that argument is stated explicitly below.

### The reduced local representation-ring branch

Fix a finite presentation of the actual knot group and let R be its actual representation algebra: the polynomial algebra on the generator matrix entries, modulo determinant-one equations and all entries of the stated relator equations. This is the unreduced algebra, not its radical quotient. Suppose in this branch that R localized at the specified representation rho0 is reduced. This condition is not added to the theorem Statement. The actual boundary basis and kernel assumptions are the original ones. As explained above, rho0 is irreducible and its meridian is noncentral semisimple. Choose one of its distinct eigenvalues M0.

Using [F5] and [F6], first shrink to a finite-type principal neighborhood B of rho0 on which the representation algebra is reduced, the meridian discriminant is invertible and every representation is irreducible. This shrinking is legitimate: the nilradical of the finite-type Noetherian R is finitely generated, and its localization being zero means that finitely many elements nonzero at rho0 kill those generators; multiply them. Irreducibility has the existing finite word determinant certificate. Adjoin a root M of the monic meridian characteristic polynomial. The resulting algebra Bprime is finite free of rank two. It is reduced: B injects into the finite product of the fraction fields of its minimal-prime quotients; tensoring that injection with the free quadratic algebra remains injective, and over each of those fields the quadratic is separable since its discriminant is a unit. Each resulting quadratic field algebra is reduced, so the injected algebra is reduced as well. The selected eigenvalue gives a point over rho0. Define the corresponding longitude eigenvalue in this algebra by

$$L=\frac{\operatorname{tr}(\rho(\mu)\rho(\lambda))-M^{-1}\operatorname{tr}(\rho(\lambda))}{M-M^{-1}}.$$

The projector onto the chosen meridian eigenline is (rho(mu)-M^{-1}I)/(M-M^{-1}); its trace pairing with the commuting longitude proves this formula, and the opposite projector gives its inverse. In particular L is a unit.

Every irreducible component of this eigenvalue-cover neighborhood has peripheral image of dimension at most one. Here is the argument for the actual knot exterior, not an assumed presentation-spine claim. Pass to a component fraction field F and use its actual generator matrices. Trace self-duality, local-coefficient Lefschetz duality and the pair exact sequence give rank one for the actual boundary inclusion over F, by the complete argument of F4 step2.2: the boundary dimension is two, restriction is the transpose of inclusion, and its boundary cap image is the inclusion kernel. Every derivation of F over C differentiates the actual generator and relator matrices and hence gives an actual cocycle. The word-chain pairing of F4 steps3.1–4.1 shows that its two peripheral values are the two logarithmic eigenvalue derivatives, up to one common nonzero factor. All these pairs therefore lie in the same one-dimensional annihilator of the actual homology kernel. If M and L were algebraically independent, include them in a finite transcendence basis of F and take its two coordinate derivations. Extend each through the finite algebraic extension by the explicit minimal-polynomial derivative formula in F4 step2.1; separability in characteristic zero makes every required denominator nonzero. The resulting peripheral derivative pairs are independent, a contradiction. Thus M and L are algebraically dependent and their image has dimension at most one by [F7]. The same reasoning rules out a two-dimensional peripheral image component anywhere in the actual knot eigenvalue locus: such a component would have generic meridian eigenvalue different from its inverse. Its generic representation is either irreducible, when this duality argument applies, or reducible, when its longitude eigenvalue is one by knot abelianization. The latter image also has dimension at most one. Thus no omitted higher-dimensional image component can contain the curve under consideration.

Remove the finitely many eigenvalue-cover components that do not contain the selected point, using one function nonzero at that point from each such component ideal and multiplying those functions. Each remaining positive-dimensional peripheral image is one of the actual one-dimensional components in the ordinary A-polynomial locus: the preceding dimension bound applies to every irreducible representation component meeting this open, and its eigenvalue image closure is a curve. The corresponding generic image is consequently contained in the union V_K in the original Definition. A component with constant peripheral image takes the value (M0,L0), since it contains the selected point. That point is on the curve supplied by the original X, so A_K also vanishes there. Hence A_K(L,M) vanishes at every complex point of this remaining finite-type neighborhood. Its algebra is reduced; [F6] therefore gives the literal identity A_K(L,M)=0 in that algebra, not merely an identity modulo its nilradical. No constant-image character component was suppressed.

Now let Z be ANY actual adjoint crossed cocycle at rho0. The formulas rho_epsilon(g)=(I+epsilon Z(g))rho0(g), epsilon^2=0, satisfy every determinant and relator equation: the crossed product rule proves the word identities and trace(Z)=0 proves determinant one. They define a homomorphism from the actual representation algebra to C[epsilon]/(epsilon^2), and every localization above remains defined because its inverted functions have nonzero value at the selected point. The simple eigenvalue M0 lifts uniquely: differentiating its characteristic polynomial solves its epsilon coefficient by the nonzero derivative 2M0-tr(rho0(mu)). The projector formula similarly defines L_epsilon. Differentiate the literal A identity. In logarithmic coordinates alpha=dL/L and beta=dM/M this yields

$$L_0(A_K)_L(L_0,M_0)\,\alpha+M_0(A_K)_M(L_0,M_0)\,\beta=0.$$

The finite word-chain pairing gives these alpha,beta for every adjoint cocycle, with their same common invariant-vector scale. The dual of actual exterior H1 is actual H1 cohomology, so the image of all these peripheral pairs is the annihilator of the original inclusion kernel. That image has dimension one by admissibility, and is nonzero. The displayed nonzero-gradient equation defines another line, so those two lines agree. Taking annihilators back in the prescribed ordered homology basis gives the actual kernel and precisely the stated BFR ratio at rho0. No regularity of the reduced curve-to-peripheral map, no equality between a reduced tangent space and all cocycles, and no constancy of neighboring exterior homology ranks was used.

### Remaining pointwise obligation

What is still missing is a proof that the full original admissible smooth locus always satisfies the required pointwise conclusion at a point where the actual local representation ring is nonreduced, the actual adjoint cohomology is larger than one and the reduced character-to-peripheral map could be ramified. Smoothness of the reduced character curve alone has not here been identified with smoothness of its possibly nonreduced representation scheme. Linear chain-level Poincare–Lefschetz duality and constant classical boundary-kernel dimension alone permit a jumping specialization; they cannot replace this missing nonlinear knot argument. No restriction of the original Statement and no complete proof claim for this wrapper is made.


## Source inspection and proof limit

The new reduced-local-ring argument above is a pointwise algebra argument, not a quoted theorem from the following sources. The published BFR cache `/tmp/knot99-benard-florens-rodau-published-2024.pdf` has22pages and SHA256 `21496e2f40eba264a2118bb1ac3336fe763d82a37e8e7afe8fdc5b724bfadaf2`. The actual complete passages read are PDF10–11,14–15,18 as specified in its source locator, plus introductory PDF3; no entire-paper reading is claimed. The Côté–Manolescu cache `/tmp/knot99-sheaf-sl2c-knots.pdf` has47pages and SHA256 `fce92f9c9a35821edcbffdb8be540c126654cbc7040a39cf291bfe4a9f69a815`; actual complete PDF20–21 and27 were read for the reducedness status, with PDF5,19,26,28–29 read as context. Neither that conjecture nor a theorem about a generic relative slice is a premise for the full original Statement.

The four newly named commutative-algebra supplier bodies F5–F7 were actually read in full. The previously accepted field-derivation, actual presentation-chain, invariant-vector and Lefschetz-duality constructions are used only in their explicit proved scopes. All original Statements remain byte-identical; this working donor retains `proof: not-supplied` and the remaining nonreduced exceptional-point obligation. It supplies no full proof-acceptance, native readiness or gate assertion.
