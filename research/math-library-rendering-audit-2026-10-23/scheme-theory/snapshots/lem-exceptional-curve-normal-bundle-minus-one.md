---
id: lem-exceptional-curve-normal-bundle-minus-one
kind: lemma
title: "The normal bundle of the exceptional curve is O(-1)"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - cor-exceptional-divisor-smooth-center-normal-bundle
  - thm-affine-blowup-standard-charts
  - lem-affine-blowup-algebra-properties
  - thm-blowup-base-change-flat
  - thm-regular-local-rings-are-domains-and-cohen-macaulay
  - def-projective-bundle-scheme
  - lem-uniqueness-of-twists-on-the-projective-line
  - def-twisting-sheaf-proj
  - thm-pullback-center-ideal-invertible
  - def-axiom-of-choice
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ravi Vakil, Foundations of Algebraic Geometry, June 27, 2011 draft (author-hosted 'Early (out-of-date) version of The Rising Sea')"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGjun2711publicnoindex.pdf"
      locator: "19.3.5 normal bundles to exceptional divisors, p. 387, and Exercise 19.3.A, p. 388"
    - title: "The Stacks Project, Divisors, Sections 31.33-31.36 (Blowing up; Strict transform; Admissible blowups; Blowing up and flatness)"
      url: "https://stacks.math.columbia.edu/tag/01OF"
      locator: "Lemma 31.33.4(3) O_{X'}(-1)=O_{X'}(E)"
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    scope: "Whole authored item, including statement or definition, every proof or verification step, and used direct supplier interfaces; completed prior Step5 reader/adjudicator evidence reconciled to the current mathematics. Transitive supplier proofs were not audited in full."
    delegated_by: "owner via tools/autopilot (frontier-38-owner-30)"
    evidence:
      - "research/frontier-38-owner-30-reader-2.md"
      - "research/frontier-38-owner-30-alpha-batch-2-5a.md"
      - "research/frontier-38-owner-30-step5-hash-2-post.json"
    reviewed_raw_sha256: "5a31a4e5f90fa2c242972ccc855e49f83ad74bccfe5d32070540a1d396a342df"
    content_sha256: "b5cf47d89b4118e88900d7e2e6e141134acc50bf358c443db31fb93a3db12853"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
---

## Statement

Assume the Axiom of Choice. Let $p$ be a closed point of a regular surface $S$
over a field $k$, assume $\dim\mathcal O_{S,p}=2$, and let $\pi\colon S'\to S$ be the blowup of $p$ and $E$ its
exceptional curve. Then $E$ is isomorphic to the projective line over
$\kappa(p)$, and the restriction to $E$ of the invertible sheaf
$\mathcal O_{S'}(E)$ is the dual tautological bundle
$\mathcal O_{\mathbb P^1_{\kappa(p)}}(-1)$; equivalently
$\mathcal O_E(E)$ has degree $-1$ and $\mathcal O_E(-E)=\mathcal O(1)$ has
degree $1$. For $p$ $k$-rational,
$\mathcal O_E(E)=\mathcal O_{\mathbb P^1_k}(-1)$ and this twist index is an
isomorphism invariant of $E$.

## Facts & Assumptions

**Given:** A regular surface $S$ over $k$, a closed point $p\in S$ with two-dimensional local ring, the blowup $\pi\colon S'\to S$ of $p$ with exceptional curve $E$ and $A=\mathcal O_{S,p}$.

[A1] **Choice.** The Axiom of Choice is assumed, as in the statement; the cited suppliers used below are stated under it ([[def-axiom-of-choice]]).

[F1] [[cor-exceptional-divisor-smooth-center-normal-bundle]]: For a closed point $p$ of a regular surface $S$ over a field $k$ with two-dimensional local ring, the conormal sheaf $\mathcal I/\mathcal I^2=\mathfrak m_p/\mathfrak m_p^2$ is free of rank two over $\kappa(p)$ and the exceptional divisor is isomorphic to the projective line $\mathbb P^1_{\kappa(p)}$ over $\kappa(p)$; the corollary identifies it with the projective bundle $\mathbb P_Z(\mathcal I/\mathcal I^2)$ in the quotient convention.

[F3] [[thm-affine-blowup-standard-charts]], [[lem-affine-blowup-algebra-properties]], [[thm-blowup-base-change-flat]] and [[thm-regular-local-rings-are-domains-and-cohen-macaulay]]: The localized point blowup has charts $A[(x,y)/x]$ and $A[(x,y)/y]$ with inverse ratio overlap, where $x,y$ are regular parameters and form a regular sequence in the domain $A$.

[F4] [[def-projective-bundle-scheme]]: The projective bundle of a finite locally free module $E$ of rank $r$ over $S$ is the relative Proj $\mathbb P_S(E)=\operatorname{Proj}_S\operatorname{Sym}(E)\to S$, in the quotient convention in which an $S$-morphism $T\to\mathbb P_S(E)$ amounts to an isomorphism class of surjections $g^*E\to L$ with $L$ invertible on $T$.

[F5] [[lem-uniqueness-of-twists-on-the-projective-line]]: For the twists of the relative projective line over a field, $\mathcal O_{\mathbb P^1_k}(n)\cong\mathcal O_{\mathbb P^1_k}(m)$ if and only if $n=m$; hence the twist index attached to an invertible sheaf on $\mathbb P^1_k$ is an isomorphism invariant.

[F6] [[def-twisting-sheaf-proj]]: For a commutative nonnegatively graded ring $S$, the twisting sheaf on $\operatorname{Proj}S$ is $\mathcal O_X(n)=\widetilde{S(n)}$, the associated sheaf of the shifted graded module, with $\Gamma(D_+(f),\mathcal O_X(n))=S(n)_{(f)}$ on standard opens.

[F7] [[thm-pullback-center-ideal-invertible]]: For the blowup of a quasi-coherent ideal sheaf $\mathcal I$ of finite type with exceptional subscheme $E=V(\mathcal I\mathcal O_{\operatorname{Bl}})$: $\mathcal O(1)$ is invertible, the inverse-image ideal $\mathcal I\mathcal O_{\operatorname{Bl}}$ is invertible and equals $\mathcal O(1)$, and the exceptional divisor is effective Cartier with $\mathcal O_{\operatorname{Bl}}(-E)=\mathcal I\mathcal O_{\operatorname{Bl}}=\mathcal O(1)$ and $\mathcal O_{\operatorname{Bl}}(E)=\mathcal O(-1)$.

## Proof

1.1 The inverse-image center ideal $\mathcal I\mathcal O_{S'}$ is the invertible sheaf $\mathcal O_{S'}(-E)\cong\mathcal O(1)$, and its dual is $\mathcal O_{S'}(E)\cong\mathcal O(-1)$. The exceptional curve is the projective bundle of the rank-two cotangent space, hence becomes $\mathbb P^1_{\kappa(p)}$ on choosing a basis. [A1, F1, F4, F7]

2.1 Use regular parameters $x,y$. If $xg=(xT-y)h$, reduction modulo $x$ forces $h=xh_1$, and cancellation gives $g=(xT-y)h_1$; hence the incidence quotient has no $x$-power torsion and is the $x$-chart. Symmetrically this proves the $y$-chart presentation. Thus use the charts $A[T]/(xT-y)$ and $A[U]/(yU-x)$, with $U=T^{-1}$. The exceptional ideal has frames $x$ and $y$ on them. On restriction to $E$, these give frames $e_0=[x]$ and $e_1=[y]$ of $\mathcal I_E/\mathcal I_E^2=\mathcal O_E(-E)$; they are not functions $x|_E$ or $y|_E$, which are zero. Their transition is $e_1=Te_0$, exactly the transition of the positive twist on $\mathbb P^1_{\kappa(p)}$. Thus $\mathcal O_E(-E)\cong\mathcal O(1)$ and dualizing gives $\mathcal O_E(E)\cong\mathcal O(-1)$. [F3, F6, F7, step 1.1]

3.1 These twists have degrees $1$ and $-1$ over $\kappa(p)$, respectively. The uniqueness-of-twists lemma makes their indices isomorphism invariants. If $p$ is rational, $\kappa(p)=k$ and the same statements specialize to the asserted twists over $k$; no smoothness assumption on $S$ is needed for this specialization. [F5, step 2.1] ∎

## Remarks

The local-dimension assumption is automatic for closed points of finite-type pure two-dimensional surfaces. At a closed point with one-dimensional local ring the blowup is the identity and the exceptional fiber is a point; there is no exceptional-curve degree assertion in that case.
