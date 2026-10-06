---
id: "ex-first-order-deformations-of-a-hypersurface"
kind: "example"
title: "First-order deformations of a plane conic and of a quadric surface"
status: published
origin: pipeline
pipeline_run: "frontier-40-geometry-braids-rep-27"
dependency_level: 18
justified_by: []
aliases: []
deps:
  - "def-projective-bundle-scheme"
  - "thm-nakayama-lemma"
  - "thm-hilbert-scheme-represents-projective-flat-families"
  - "thm-cohomology-and-base-change"
  - "lem-finite-variable-polynomial-rings-over-fields-are-ufds"
  - "thm-hilbert-basis-theorem"
  - "thm-choice-implies-dependent-implies-countable-choice"
  - "lem-hypersurface-deformations-classified-by-equation-deformations"
  - "lem-tangent-and-obstruction-spaces-for-hypersurface-deformations"
  - "lem-cohomology-of-hypersurface-twists"
  - "cor-h0-projective-space-o-d-homogeneous-polynomials"
  - "thm-cohomology-projective-space-twisting-sheaves"
  - "def-degree-projective-hypersurface"
  - "def-section-zero-scheme-invertible-sheaf"
  - "thm-jacobian-criterion-smooth-morphism"
  - "def-smooth-morphism-schemes"
  - "def-relative-projective-space-standard-charts"
  - "def-graded-ring-and-graded-module"
  - "def-square-zero-extension-and-small-extension"
  - "def-axiom-of-choice"
proof_strategy: "direct"
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
verification:
  precheck: "pass"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "The Stacks Project, Divisors, Lemma 31.19.9 (tag 062Y)"
      url: "https://stacks.math.columbia.edu/download/divisors.pdf"
      locator: "A flat finitely presented family whose fibres are Cartier divisors is a relative effective Cartier divisor; locally principal families with Cartier fibres also qualify, complete statement and proof (printed pages 40-41)"
    - title: "Nitin Nitsure, Construction of Hilbert and Quot Schemes, Section 1, Examples (4)"
      url: "https://arxiv.org/pdf/math/0504590"
      locator: "Hilbert scheme of hypersurfaces in P^n: exact global identification with P^m over Z and mutually inverse family constructions, printed pages 6-7 (PDF pages 6-7); the source gives an exercise outline, completed by the verification below, read 2026-10-05"
    - title: "Robin Hartshorne, Lectures on Deformation Theory (Berkeley Math 274 draft, 2004/2005)"
      url: "http://math.berkeley.edu/~robin/math274root.pdf"
      locator: "Chapter 1 Theorem 1.1(b),(c) and discussion (printed pages 1-3), Section 2 Proposition 2.3 with proof and Theorem 2.4 (pages 6-8); Chapter 3 Example 21.4, quadric table h^0(N)=9 (pages 112-113). Read 2026-10-06."
    - title: "The Stacks Project, Deformation Theory, complete chapter (Chapter 91)"
      url: "https://stacks.math.columbia.edu/download/defos.pdf"
      locator: "Section 91.8 (tags 0D13-0D14): first-order thickenings and the principal-homogeneous description of first-order deformations (printed pages 30-33, read 2026-10-05)"
---

## Example

Assume the Axiom of Choice, inherited from the projective-space cohomology
suppliers ([[def-axiom-of-choice]]). Let $k$ be a field of characteristic $\ne2$
and let $f=x_0^2-x_1x_2\in S=k[x_0,x_1,x_2]$, so that
$C=Z(f)\subseteq\mathbb P^2_k$ is a smooth conic: the partial derivatives
$2x_0,-x_2,-x_1$ have no common zero because $2\ne0$ and $x_0=x_1=x_2=0$ is not
a point of $\mathbb P^2_k$ ([[thm-jacobian-criterion-smooth-morphism]],
[[def-smooth-morphism-schemes]]). Then:

1. for every $g\in S_2$ the closed subscheme
   $C_\epsilon=Z(f+\epsilon g)\subseteq\mathbb P^2_{k[\epsilon]}$ is flat over
   $k[\epsilon]$, has special fibre $C$, and every first-order embedded
   deformation of $C$ arises this way
   ([[lem-hypersurface-deformations-classified-by-equation-deformations]]);
2. two lifts $f+\epsilon g$ and $f+\epsilon g'$ define the same first-order
   embedded deformation if and only if $g'-g\in k\cdot f$ (normalised
   generators: scaling a generator by a unit changes its $\epsilon$-free part,
   and after restoring that part the two coefficients differ by an element of
   $k\cdot f$); hence the isomorphism classes of first-order embedded
   deformations correspond bijectively to $(S/(f))_2$, with the trivial
   deformation corresponding to $0$, and the tangent space has dimension
   $\dim_kS_2-1=6-1=5$; equivalently
   $H^0(C,\mathcal N_{C/\mathbb P^2})\cong H^0(C,\mathcal O_C(2))$ has
   dimension $5$
   ([[lem-tangent-and-obstruction-spaces-for-hypersurface-deformations]],
   [[lem-cohomology-of-hypersurface-twists]]);
3. $H^1(C,\mathcal O_C(2))=0$, so the embedded deformation functor is formally
   smooth and unobstructed: every first-order deformation extends to every
   small extension; the degree-two component of the Hilbert scheme is the
   projective space $\mathbb P(S_2^\vee)=\mathbb P^5$ parametrising conics, smooth of
   dimension $5$ at $[C]$;
4. the same computation for a smooth quadric surface
   $Q=Z(f)\subseteq\mathbb P^3_k$ with $f\in k[x_0,\dots,x_3]_2$ gives tangent
   space of dimension $\dim_kS_2-1=10-1=9$, matching
   $\dim_kH^0(Q,\mathcal O_Q(2))=9$ and the classical table
   $h^0(\mathcal N_Q)=9$
   ([[lem-tangent-and-obstruction-spaces-for-hypersurface-deformations]]).

For a general smooth hypersurface of degree $d$ in $\mathbb P^n_k$ the same
formula gives $\dim_k(S/(f))_d=\binom{n+d}{n}-1$.

## Facts & Assumptions

**Given:** a field $k$ of characteristic $\ne2$, the conic $C=Z(f)\subseteq\mathbb P^2_k$ for $f=x_0^2-x_1x_2$, a quadratic form $g\in S_2$, and the Axiom of Choice.

[F1] The embedded deformation functor of a smooth hypersurface $X=Z(f)$ of degree $d\ge1$ in $\mathbb P^n_k$ ($n\ge2$) is isomorphic to the equation functor $R\mapsto\{F\in(S\otimes_kR)_d:F\equiv f\bmod\mathfrak m_R\}/(R^\times)$, and it is formally smooth and unobstructed with tangent space $(S/(f))_d\cong H^0(X,\mathcal O_X(d))$ of dimension $\binom{n+d}{n}-1$. ([[lem-hypersurface-deformations-classified-by-equation-deformations]])

[F2] $\mathcal N_{X/\mathbb P^n}\cong\mathcal O_X(d)$ and $H^q(X,\mathcal O_X(d))=0$ for $q>0$, while $H^0(X,\mathcal O_X(d))\cong(S/(f))_d$ of dimension $\binom{n+d}{n}-1$. ([[lem-cohomology-of-hypersurface-twists]], [[lem-tangent-and-obstruction-spaces-for-hypersurface-deformations]])

[F3] For every field $K$ and sufficiently large $t$, $\chi(\mathbf P^2_K,\mathcal O(t))=\binom{t+2}{2}$; relative projective-space cohomology gives $\pi_*\mathcal O=\mathcal O$ and $\pi_*\mathcal O(2)=S_2\otimes\mathcal O$ over any base. Also $\dim_kS_2=\binom{2+2}{2}=6$ for $n=2$ and $\dim_kS_2=\binom{3+2}{2}=10$ for $n=3$; the degree-$2$ part of $S$ consists of quadratic forms. ([[def-graded-ring-and-graded-module]], [[cor-h0-projective-space-o-d-homogeneous-polynomials]], [[thm-cohomology-projective-space-twisting-sheaves]])

[F4] A nonzero homogeneous form $F$ of degree $d$ in $S\otimes_kR$ defines a flat closed subscheme $Z(F)$ over the local Artin base $R$ reducing to $Z(f)$ when $F\equiv f$ modulo the maximal ideal; and $Z(F)=Z(F')$ for two such lifts if and only if $F'=uF$ with $u\in R^\times$. ([[lem-hypersurface-deformations-classified-by-equation-deformations]], [[def-section-zero-scheme-invertible-sheaf]], [[def-degree-projective-hypersurface]], [[def-square-zero-extension-and-small-extension]])

[F5] The Hilbert functor of flat finitely presented closed subschemes of $\mathbf P^2_k$ with polynomial $2t+1$ is represented on all $k$-schemes by a proper finitely presented $k$-scheme $H$ with universal family. Since $k$ is Noetherian, $H$ is Noetherian. The Axiom of Choice supplies the Dependent Choice required by this supplier. ([[thm-hilbert-scheme-represents-projective-flat-families]], [[thm-choice-implies-dependent-implies-countable-choice]])

[F6] Over any field, finite-variable polynomial rings are Noetherian UFDs and their height-one primes are principal. ([[thm-hilbert-basis-theorem]], [[lem-finite-variable-polynomial-rings-over-fields-are-ufds]])

[F7] Proper flat coherent families satisfy the cohomology-and-base-change theorem, including the locally free and arbitrary-base-change conclusions when the relevant fibre map is surjective. Nakayama detects zero coherent modules from their zero fibres. ([[thm-cohomology-and-base-change]], [[thm-nakayama-lemma]])

[F8] If a closed finitely presented flat family in a flat finitely presented ambient family has Cartier-divisor fibres, it is a relative effective Cartier divisor. The same conclusion holds for a locally principal family with Cartier-divisor fibres. This is the exact source lemma Stacks *Divisors*, tag 062Y, read with its proof.

[F9] The projective bundle $\mathbf P(E)$ represents invertible quotients of $E$; for a finite free module $V$, dualizing a split line subbundle of $V\otimes\mathcal O$ gives an invertible quotient of $V^\vee\otimes\mathcal O$. ([[def-projective-bundle-scheme]])

## Verification

**Proof technique:** specialise the equation functor to the dual numbers, compute the unit orbit explicitly, and read off the dimension and unobstructedness; then repeat with $n=3$ and record the general formula.

1.1 Flatness and completeness of the equation description. By [F4] every $g\in S_2$ gives a flat $k[\epsilon]$-subscheme $Z(f+\epsilon g)\subseteq\mathbb P^2_{k[\epsilon]}$ with special fibre $C$, and by [F1] every first-order embedded deformation of $C$ is of this form. This is claim (1). [F1, F4]

1.2 Every fibre with Hilbert polynomial $2t+1$ is a conic. Over a field $K$, let $J\subset K[x_0,x_1,x_2]$ be the homogeneous ideal of such a subscheme $Y$. It is nonzero, since otherwise $Y=\mathbf P^2_K$ would have a quadratic Hilbert polynomial. Choose finite homogeneous generators by [F6], and let $h$ be their greatest common divisor, homogeneous of degree $e$. At every height-one prime the localization of $J$ equals $(h)$, because the exponent in the gcd is the minimum exponent in the generators. Thus $\mathcal Q=\widetilde{(h)}/\widetilde J$ is supported on finitely many points of $\mathbf P^2_K$: after dividing the generators by $h$ their ideal lies in no height-one prime by [F6]. The exact sequence $0\to\mathcal Q\to\mathcal O_Y\to\mathcal O_{Z(h)}\to0$ gives $P_Y(t)=et+e(3-e)/2+\ell$, where the divisor polynomial follows from $0\to\mathcal O(-e)\to\mathcal O\to\mathcal O_{Z(h)}\to0$ and [F3], and $\ell=\dim_K H^0(\mathcal Q)$ is nonnegative. Indeed a coherent sheaf with finite support is a finite module on a finite Artinian scheme, its twists are locally isomorphic to itself, and its positive cohomology vanishes; hence its polynomial is that nonnegative dimension. The coefficient of $t$ forces $e=2$, and then the constant term forces $\ell=0$. Therefore $\mathcal Q=0$ and $Y=Z(h)$ scheme theoretically. This includes double lines, reducible conics and arbitrary residue fields. [F3, F6, algebra]

2.1 The unit orbit and the coefficient relation. Let $F=f+\epsilon g$ and $F'=f+\epsilon g'$ be two lifts of $f$. By [F4] they define the same deformation exactly when $F'=uF$ for a unit $u=\lambda+\epsilon\mu\in k[\epsilon]^\times$, $\lambda\ne0$. Comparing $\epsilon$-free parts gives $1=\lambda$, so $\lambda=1$ and comparing $\epsilon$-parts gives $g'=g+\mu f$, i.e. $g'-g\in k\cdot f$; conversely if $g'=g+\mu f$ then $F'=(1+\epsilon\mu)F$ with $1+\epsilon\mu$ a unit (inverse $1-\epsilon\mu$), so the deformations agree. Hence the classes of first-order embedded deformations are in bijection with $S_2/k\cdot f$, i.e. with $(S/(f))_2$, the trivial deformation corresponding to $g=0$; the dimension is $\dim_kS_2-1=5$ by [F3], and by [F2] this equals the dimension of $H^0(C,\mathcal N_{C/\mathbb P^2})\cong H^0(C,\mathcal O_C(2))$. This proves claim (2). [F2, F3, F4, step 1.1, algebra]

2.2 Recover the universal equation line. Let $\pi:\mathbf P^2_H\to H$ and let $\mathcal I$ be the ideal of the universal family of [F5]. All fibres are conics by step 1.2, so [F8] makes this family a relative effective Cartier divisor; consequently $\mathcal I$ is invertible with fibre $\mathcal O(-2)$. Set $\mathcal L=\mathcal I(2)$. It is coherent and flat over $H$, and every fibre is $\mathcal O_{\mathbf P^2}$, with $h^0=1$ and $h^1=0$ by [F3]. Apply [F7] in degree one: the fibre map is surjective since its target is zero, so $R^1\pi_*\mathcal L$ commutes with base change and has zero fibres, hence is zero by Nakayama. It is therefore locally free of rank zero, and the degree-one locally free criterion in [F7] gives surjectivity of the degree-zero fibre map. The degree-zero conclusions of [F7] now show that $E=\pi_*\mathcal L$ is an invertible sheaf, commutes with arbitrary base change, and has evaluation $\pi^*E\to\mathcal L$ an isomorphism: on every fibre this is the evaluation of the one-dimensional space of sections of $\mathcal O$, and a map of line bundles that is nonzero at every point is invertible. Pushing the inclusion $\mathcal L\subset\mathcal O(2)$ down gives $E\hookrightarrow S_2\otimes_k\mathcal O_H$. This is a line subbundle: at each point a coefficient of the fibre equation is nonzero, and locally that coefficient is a unit and splits the inclusion. By the rank-one quotient convention of [[def-projective-bundle-scheme]], dualizing this line subbundle gives a rank-one quotient of $S_2^\vee\otimes_k\mathcal O_H$, hence a morphism $q:H\to\mathbf P(S_2^\vee)$. [F3, F5, F7, F8, F9, step 1.2, algebra]

3.1 Unobstructedness. By [F2] and [F1], $H^1(C,\mathcal O_C(2))=0$ and the equation functor is formally smooth and unobstructed, so every first-order embedded deformation of $C$ extends over a small extension. We now prove the separate global Hilbert-scheme assertion, following the inverse coefficient-family constructions in Nitsure Section 1, Examples (4). [F1, F2, step 2.1]

3.2 Construct the inverse family. The tautological coefficient line on $P=\mathbf P(S_2^\vee)$ defines a map $\mathcal O_P(-1)\boxtimes\mathcal O_{\mathbf P^2}(-2)\to\mathcal O_{\mathbf P^2_P}$ and its zero scheme $\mathcal Z_P$. This family is locally principal, and at every fibre its equation is a nonzero quadratic, hence a nonzerodivisor in the polynomial ring over that residue field. The locally principal clause of [F8] therefore makes it a relative effective Cartier divisor, in particular flat over $P$. It is finitely presented, and every fibre has Hilbert polynomial $2t+1$ by the divisor calculation in step 1.2. The representing property [F5] supplies a morphism $u:P\to H$. Recovering the equation line of this tautological family by step 2.2 gives exactly $\mathcal O_P(-1)\subset S_2\otimes\mathcal O_P$: its ideal twisted by $2$ is the pullback of that line, and $\pi_*\mathcal O_{\mathbf P^2_P}=\mathcal O_P$ by [F3]. Therefore $q\circ u=\mathrm{id}_P$. Conversely, the evaluation isomorphism of step 2.2 identifies the ideal of the universal family with $\pi^*E\otimes\mathcal O(-2)$ and its inclusion with the coefficient line defining $q$. Pulling $\mathcal Z_P$ back by $q$ consequently recovers the universal ideal exactly. The Hilbert representing property gives $u\circ q=\mathrm{id}_H$. [F3, F5, F8, step 1.2, step 2.2, construct]

4.1 Thus $H\cong\mathbf P(S_2^\vee)=\mathbf P^5_k$ as schemes carrying their universal families. Because [F5] represents the Hilbert functor on all test schemes, the inverse scheme maps in step 3.2 prove the global functor identification on arbitrary $k$-schemes, including non-Noetherian bases. Projective space is smooth of dimension five at $[C]$ by its affine-space charts. This proves the global part of claim (3), without restricting the Hilbert scheme to smooth conics or inferring its scheme structure from a tangent calculation. [F3, F5, step 2.2, step 3.2]

5.1 The quadric surface and the general formula. For a smooth quadric surface $Q=Z(f)\subseteq\mathbb P^3_k$ the same computation with $n=3$ gives tangent space $(S/(f))_2$ of dimension $\dim_kS_2-1=10-1=9$ by [F3], matching $\dim_kH^0(Q,\mathcal O_Q(2))=9$ and the classical table $h^0(\mathcal N_Q)=9$ of Hartshorne Chapter 3; for a general smooth hypersurface of degree $d$ in $\mathbb P^n_k$ the formula is $\dim_k(S/(f))_d=\binom{n+d}{n}-1$ by [F1] and [F2]. The Axiom of Choice is inherited from the cohomology, Hilbert-representability, base-change and Nakayama suppliers. [F1, F2, F3, step 2.1] ∎

**Global coefficient-family proof.** The Cartier-fibre, coefficient-line and inverse-family steps prove the conic case of Nitsure Section 1, Examples (4), by explicit inverse universal-family and equation-line maps. The Hilbert representative and cohomology/base-change results are the declared earlier suppliers; the fibrewise Cartier criterion is the exact cited Stacks tag 062Y.
