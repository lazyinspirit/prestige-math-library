---
id: lem-gts-equivariant-q-adic-one-parameter-comparison
kind: lemma
title: "Constructive equivariant q-adic one-parameter comparison"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
category: string-theory
page: gts-hms-landau-ginzburg-categories
axiom_use: ZF + AC
dependency_level: 2
deps:
  - lem-gts-exterior-smash-hochschild-and-equivariant-transfer
  - def-gts-small-dg-categories-perfect-modules-and-morita-deformation
  - def-axiom-of-choice
dependency_roles:
  lem-gts-exterior-smash-hochschild-and-equivariant-transfer: mathematical-premise
  def-gts-small-dg-categories-perfect-modules-and-morita-deformation: mathematical-premise
  def-axiom-of-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Paul Seidel, Homological Mirror Symmetry for the Quartic Surface"
      url: https://arxiv.org/pdf/math/0310414v4
      locator: "§3a–d, printed pp. 12–19 (PDF 16–23), especially Lemmas 3.5, 3.9 and its induction-by-order proof, Corollary 3.6, Remark 3.10 and Lemma 3.12; quartic application §10c, Proposition 10.8, printed p. 84 (PDF 88). The actual invariant dg-Lie comparison, parameter automorphism and finite-free equivariant transfer are reconstructed locally. The current even-coordinate invariant hypothesis is not attributed to Seidel's cyclic-action calculation."
    - title: "Yuichi Nohara and Kazushi Ueda, Homological Mirror Symmetry for the Quintic 3-Fold"
      url: https://arxiv.org/pdf/1103.4956v2
      locator: "§2 Proposition2.4, printed6, formal parameter comparison for actual nontrivial invariant deformations; §3 Proposition3.8, printed12, its named application. The recursive all-arity gauge, q-adic convergence and finite-free-cohomology/minimality distinctions are proved locally; no unrestricted source cyclic-dimension claim is imported. Complete paper1–29 read."
verification:
  precheck: pending
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
proof_strategy: direct
---

## Statement

Assume AC. Let $R=\mathbb C[\![q]\!]$ and let a finite group act on a complete normalized uncurved deformation dg Lie algebra, trivially on $q$. Suppose its invariant first deformation cohomology is one-dimensional. Two actual invariant Maurer–Cartan deformations of the same central structure, both with nonzero first-order class, are related by an actual invariant q-adic gauge and a continuous parameter automorphism $\psi(q)=c_1q+\cdots$, $c_1\ne0$. This applies to the finite object-graded minimal models of the named Fermat hypersurfaces. The comparison preserves all higher operations, strict units and object labels, extends through finite-free homological transfer, and base extends through a chosen lift to the source Puiseux field. It does not identify $\psi$ with a Picard–Fuchs mirror map.

## Statement references

[[lem-gts-exterior-smash-hochschild-and-equivariant-transfer]]

[[def-gts-small-dg-categories-perfect-modules-and-morita-deformation]]

[[def-axiom-of-choice]]

## Facts & Assumptions

**Given:** The objects, coefficient conventions, finite symmetry and hypotheses of the Statement; work in ZF+AC.

[F1] The exact supplier [[lem-gts-exterior-smash-hochschild-and-equivariant-transfer]] is used at its declared scope. Its role is mathematical, not an assertion of a source theorem by citation.

[F2] The exact supplier [[def-gts-small-dg-categories-perfect-modules-and-morita-deformation]] is used at its declared scope. Its role is mathematical, not an assertion of a source theorem by citation.

[F3] The exact supplier [[def-axiom-of-choice]] is used at its declared scope. Its role is mathematical, not an assertion of a source theorem by citation.

## Proof

**Given:** The Statement and the preceding local suppliers. The following complete constructions are included here; research provenance is not a logical premise.

1.1 **Complete dg Lie version with an explicit gauge algorithm** Let g be a C-linear dg Lie algebra, complete in any auxiliary arity filtration used to define its brackets. Work q-adically in q g［［q］］. Assume $H¹(g)=C·[a_{1}]$. Let $a(q)=q a_{1}+q²a_{2}+$... be an actual Maurer–Cartan element with $[a_{1}]$ nonzero. For ANY other Maurer–Cartan element b(q), we construct a formal map psi(q)∈qC\llbracket q\rrbracket and a q-adic gauge F such that
F·b(q)=a(psi(q)).
At stage d assume $b^{(d)}$ is gauge-equivalent to b and agrees with a(psi_d(q)) modulo $q^{d}$. Their difference is $q^{d} e_{d}+O(q^{d+1})$. Subtracting their Maurer–Cartan equations gives $\delta e_{d}=0$, since all bracket differences have order at least d+1. Choose $c_{d}∈C$ and $h_{d}∈g⁰$ with
$e_{d}=c_{d} a_{1}+\delta h_{d}$.
Set $\psi_{d+1}=\psi_{d}+c_{d} q^{d}$ and gauge $b^{(d)}$ by $exp(-q^{d} h_{d})$, with the gauge convention whose linear action is delta gamma. The parameter change removes $c_{d} a_{1}$ and the gauge removes $\delta h_{d}$; thus the new difference is $O(q^{d+1})$. This starts at $d=1$ with psi_1=0.
The successive parameter corrections and gauges are identities modulo $q^{d}$. Every coefficient is changed only finitely many times, so both limits exist. The gauge product is a well-defined q-adic coalgebra/gauge automorphism; its inverse is the reverse-order q-adic product. The limit satisfies the exact desired equation. This is a construction, not just a dimension count of the tangent space.
If the first-order class of b is nonzero, then $c_{1}$ is nonzero. Hence psi'(0)≠0, and the usual recursive coefficient equation constructs the compositional inverse of psi. This is the FORMAL AUTOMORPHISM required by the quartic and quintic claims. If b starts in higher order one obtains only a formal endomorphism; it must not be silently called invertible.
No H²-vanishing is needed. Both a and b already satisfy the full Maurer–Cartan equation; the induction compares existing deformations and never attempts to integrate an arbitrary infinitesimal class. [F1, F2, F3, construct, algebra]

2.1 **Finite group symmetry** Let a finite group G act on g, trivially on q, and suppose a,b are G-invariant. Rational averaging makes $H¹(g^{G})=H¹(g)^{G}$: average any closed representative or primitive. Thus if this invariant cohomology is one-dimensional and $[a_{1}]$ spans it, all $h_{d}$ can be chosen invariant by averaging. Every gauge and every limit is then G-equivariant. This proves the equivariant versality statement actually needed when unrestricted HH² has several dimensions.
The symmetry condition is substantial. In the named hypersurface applications unrestricted truncated HH² is NOT assumed one-dimensional; one must first prove the cyclic-permutation-invariant computation. This lemma does not manufacture that computation. [F1, F2, F3, step 1.1, construct, algebra]

3.1 **The uncurved minimal Hochschild model** Let A be a finite-dimensional graded A-infinity algebra with semisimple object ring $R=C^{r}$, strict units, m1=0 and m0=0. Use R-multilinear normalized Hochschild cochains, completed in arity. A cochain of arity s and internal degree t has shifted total degree s+t-1. Restrict to $t\le 0$. The differential [m,-] and the Gerstenhaber bracket preserve this truncation because every operation $m_{s}, s\ge 2$, has degree $2-s\le 0$.
Its degree-one Maurer–Cartan elements are exactly formal deformations with curvature and differential still zero: an arity-zero operation would have internal degree two and an arity-one differential internal degree one, both excluded. Degree-zero gauge cochains have $\text{arity}\ge 1$ and internal degree 1-s. Thus their coalgebra automorphisms preserve the object decomposition and do not introduce a zeroth functor component. Strict units are preserved by normalized cochains.
The cohomology H¹ of this dg Lie algebra is the actual truncated HH². A formal A-infinity structure m(q) is a Maurer–Cartan perturbation of m, since (m+alpha)^2=0 is precisely delta alpha+one-half[alpha,alpha]=0. Therefore §§1–2 give an explicit R-linear, strictly unital A-infinity isomorphism between two such minimal deformations after the constructed parameter change whenever their invariant truncated HH² is one-dimensional and their first-order classes are nonzero.
The inverse functor exists q-adically and in bar length. This preserves ALL higher operations; it is not an isomorphism of binary cohomology algebras substituted for an A-infinity comparison. [F1, F2, F3, step 2.1, construct, algebra]

4.1 **Passing an actual flat deformation to this minimal model** The transfer extension in the Statement means the actual finite-free minimal transfer of [F1], whose input includes finite-free cohomology and an equivariant contraction. It does not assert that free chain groups alone imply a minimal relative model. More generally the following perturbation first produces a possibly nonminimal model; the additional cohomology or degree condition is what places it in the minimal deformation problem. Let B be a dg/A-infinity algebra whose underlying graded vector space has finite-dimensional bounded cohomology, and let $B_{q}$ deform it over C\llbracket q\rrbracket. Choose over C a contraction onto H(B). Perturbing its differential and operations gives a $minimal-at-q=0$ deformation on H(B)［［q］］; the tree formulas and the geometric-series inverses converge q-adically because every perturbation has a positive q-factor. Their bar identities follow by cancellation along internal tree edges, as in the explicit transfer used in the elliptic packet. This yields actual q-adic A-infinity quasi-isomorphisms, not merely a central-fibre one.
Assume $H(B_{q})$ is q-torsion-free. The transferred differential must then vanish. It is a matrix differential on a finite bounded free C\llbracket q\rrbracket module, zero modulo q. If nonzero, a Smith-normal-form basis splits off a two-term summand
C\llbracket q\rrbracket $--q^{k}-\to $ C\llbracket q\rrbracket,  $k\ge 1$.
Adjacent differentials have zero components on this summand by $d²=0$ and the nonzerodivisor $q^{k}$. Its cohomology includes $C\llbracket q\rrbracket/(q^{k})$, contradicting torsion-freeness. Thus the transferred deformation lies in the uncurved minimal truncation of §3. The central minimal structure and invariant Hochschild line are the hypotheses used in this comparison.
This use requires the actual torsion-free cohomology assertion. It is automatic if degree considerations force the transferred differential to be zero; otherwise it must be proved in the named example. [F1, F2, F3, step 3.1, construct, algebra]

5.1 **An elementary nontrivial first-order certificate** Suppose a minimal category has three objects $Y_{0},Y_{1},Y_{2}$ with one-dimensional degree-zero Hom spaces for $i\le j$ and ordinary composition $Hom⁰(Y_{1},Y_{2})⊗Hom⁰(Y_{0},Y_{1})→Hom⁰(Y_{0},Y_{2})$ zero. If a flat minimal deformation has that composition NONZERO modulo q², then its first-order Hochschild class is nonzero.
Indeed a first-order gauge with no zeroth component changes the binary operation by the Hochschild coboundary of its unary component. On these one-dimensional Hom spaces that unary component acts by scalars; its contribution to the zero product is therefore zero. Higher gauge components cannot change arity two because the central differential and curvature vanish. Thus a nonzero first-order product cannot be gauged away. This supplies a rigorous small polygon certificate when the named geometry actually produces one; the polygon itself is not supplied by this abstract lemma. [F1, F2, F3, step 4.1, construct, algebra]

6.1 **q-adic completion: exact algebraic statement** Let $R=C\llbracket q\rrbracket$, and let V be a finite graded free R-module with semisimple finite object ring and strict units. Suppose each uncurved A∞ operation $m_{s}, s≥1$, is an R-multilinear continuous map of degree 2−s. An operation is determined by a formal power series in q for each matrix coefficient. The bar relations are interpreted for every fixed input length r and modulo $q^{N}$. For uncurved operations, each composite in the r-th A∞ identity has inner and outer arities ≥1 with their sum r+1. There are finitely many such pairs and insertion positions. Every coefficient of a composite is a finite convolution modulo $q^{N}$. Thus the identities at all finite quotients imply the completed identity exactly, because $\bigcap q^N R=0$. No convergence in the complex analytic sense is asserted or needed.
For normalized Hochschild cochains with no arity-zero component, a $q^{d}$-order gauge $\exp(q^d h), d≥1$, is defined modulo $q^{N}$ by finitely many exponential terms. For fixed bar length each contributing operation has arity at most that length. Products of successive gauges of orders $d=1,2,…$ stabilize modulo $q^{N}$. Their inverses stabilize as well, so the inverse limit is an actual strictly unital q-adic A∞ isomorphism. The same reasoning makes a parameter series $ψ(q)=c_{1}q+c_{2}q²+⋯$ with $c_{1}≠0$ a continuous R-automorphism: solve recursively for its compositional inverse, whose coefficient of degree j has the nonzero linear coefficient $c_{1}$ times the unknown inverse coefficient. Substitution is defined modulo every $q^{N}$ by finitely many terms.
For homological perturbation start with a contraction over C of the central differential, tensor it with R, and let the differential perturbation δ be divisible by q. Then (1−hδ)^(-1)=∑_(j≥0)(hδ)^j converges q-adically. For transfer of uncurved higher operations at fixed input length r, trees with no unary vertices have at most r−1 branching vertices. Unary perturbation vertices each contribute at least one q, so fewer than N occur modulo $q^{N}$. The tree sum is therefore finite at every (r,N), even when central binary/higher operations have q-order zero. The argument requires zero curvature: arity-zero vertices would invalidate this leaf-count bound and require separate filtration positivity. It also requires the actual contraction, not an assertion that every deformation is minimal. Minimality over R needs the additional torsion-free/cohomological-degree argument already stated in `equivariant-formal-comparison.md`.
Base change to K=⋃_(d≥1)C((q^(1/d))) is a tensor extension of the finite-free morphism modules and their operations. For $ψ(q)=c_{1}q(1+O(q))$, choose compatible roots of $c_{1}$ and use the binomial series (1+O(q))^(1/d) to define compatible roots of ψ(q). This gives a valuation-preserving lift to the Puiseux coefficient field and its inverse; it is the same formal-parameter freedom retained in the source statements. A different coherent choice of roots changes the chosen lift. This supplies no identification with a Picard–Fuchs mirror map. [F1, F2, F3, step 5.1, construct, algebra]

7.1 The explicit recursive gauges, parameter inverse, normalized bar identities and coefficientwise convergence give the claimed all-arity comparison and its stated scalar extension. [F1, F2, F3, step 6.1, algebra] ∎

## Remarks

All mathematical constructions used above are included in the Proof or supplied by the declared earlier items. The source URLs identify the established scope; they are not imported logical inputs. Actual source-reading limits and exact before/source hashes are retained in the owner adoption receipt. Draft status and pending owner/native acceptance are preserved.
