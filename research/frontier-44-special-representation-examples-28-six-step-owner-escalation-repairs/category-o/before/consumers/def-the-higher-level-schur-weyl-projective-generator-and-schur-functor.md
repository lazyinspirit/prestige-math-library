---
id: def-the-higher-level-schur-weyl-projective-generator-and-schur-functor
kind: definition
title: "The higher-level Schur-Weyl projective generator and Schur functor"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 33
deps: [thm-the-whittaker-functor-is-exact-and-fully-faithful-on-the-required-projectives,
       def-the-whittaker-functor-from-the-relevant-parabolic-o-summand,
       thm-skryabins-equivalence-for-the-type-a-whittaker-pair,
       def-integral-parabolic-category-o-block-for-higher-level-schur-weyl-duality,
       thm-indecomposable-tiltings-exist-and-are-classified-in-parabolic-category-o,
       def-grothendieck-group-and-character-of-category-o,
       def-axiom-of-choice,
       def-standard-costandard-filtered-and-tilting-objects-in-a-highest-weight-category,
       def-deformed-tensor-space-for-the-type-a-finite-w-algebra]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jonathan Brundan and Alexander Kleshchev, The degenerate analogue of Ariki's categorification theorem, Math. Z. 266 (2010) 877-919 (complete 44-page arXiv article)"
      url: "https://arxiv.org/pdf/0901.0057"
      locator: "Section 3.5, (3.27)-(3.31) and Theorem 3.6, printed pp. 29-31: the projective generator T^Lambda as the sum of the residue-induction images of the ground object, the endomorphism algebra and the Schur functor."
    - title: "Jonathan Brundan and Alexander Kleshchev, Schur-Weyl duality for higher levels, Selecta Math. (N.S.) 14 (2008) 1-57 (complete 50-page arXiv article)"
      url: "https://arxiv.org/pdf/math/0605217"
      locator: "Sections 5.3-5.5, printed pp. 32-36: the projector construction, the Schur functor on a single block, the right-exact left adjoint, and the rank-one witness showing that neither exactness nor all-projective recovery may be asserted."
verification:
  precheck: pass
---

## Definition

Keep the pyramid and admissible origins $c$ of
[[def-the-whittaker-functor-from-the-relevant-parabolic-o-summand]], the
ground object $P_c$, the tensor object $T=P_c\otimes V^{\otimes d}$ and its
central decomposition. For a charge $\alpha\in Q^+$ with $\mathrm{ht}(\alpha)=d$
let $I_\alpha$ be the finite set of residue sequences of content $\alpha$, and
let $T_\alpha$ be the corresponding central component of $T$; in the integral
model
$$T_\alpha=\sum_{i\in I_\alpha}f_{i_d}\cdots f_{i_1}P_c,$$
the sum of the residue-induction images of the ground object. Put
$$B_\alpha:=\operatorname{End}_{\mathfrak g}(T_\alpha)^{\mathrm{op}},$$
the corresponding central component of the Hecke image algebra (the opposite
convention is fixed here), and define the **Schur functor** of the block by
$$\pi_\alpha:=\operatorname{Hom}_{\mathfrak g}(T_\alpha,-)\colon\mathcal O_\alpha^d\to B_\alpha\text{-mod}.$$
Its left adjoint is $\pi^*_\alpha:=T_\alpha\otimes_{B_\alpha}-$.

For the whole polynomial $\mathrm{Col}_c^d$ summand, use the distinct finite projective generator
$$G_d=\bigoplus_{A\in\mathrm{Tab}^d}Z(A,c),$$
with actual prefix symmetric modules $Z(A,c)$ as constructed independently from the raw inducing modules in steps 1.2, 2.2, 3.2 and 4.1 of
[[thm-the-whittaker-functor-is-exact-and-fully-faithful-on-the-required-projectives]]. Every category-O
projective cover is a summand of $G_d$; every $Z(A,c)$ embeds in $T_d$ with a
standard-filtered quotient. Exact projection gives $G_\alpha$ on the entire
central block. The tensor detector $T_\alpha$ remains the object defining
$\pi_\alpha$; $G_\alpha$ generates all Col labels, while $T_\alpha$ contains
the standard-labelled projective-injective covers. These roles are distinct.

The verification below records the properties used on this page and marks the
boundaries explicitly: $\pi_\alpha$ is exact, being Hom from a projective
object; its left adjoint is right exact but not exact in general; it sends
$B_\alpha$-projectives to projective objects and $\pi^*_\alpha\pi_\alpha$
recovers $\operatorname{add}(T_\alpha)$, including every standard-labelled
prinjective; neither exactness of $\pi^*_\alpha$ nor recovery of every
category-$\mathcal O$ projective is asserted, both failing in the two-equal-charge
rank-one computation in step 3.1 below. The components assemble as a locally
unital sum over the charges, and all ambient labels, including those killed by
$\pi$, remain in the category $\mathcal O$.

## Facts & Assumptions

**Given:** The ground object $P_c$, the tensor object $T$ with its central decomposition, a charge $\alpha$, and the objects $T_\alpha$, $B_\alpha$, $\pi_\alpha$.

[F1] $T$ is a self-dual prinjective detector: it contains all standard-labelled projective-injective covers, need not be a full generator, and the Whittaker functor is exact and fully faithful on the required projectives ([[thm-the-whittaker-functor-is-exact-and-fully-faithful-on-the-required-projectives]], [[def-the-whittaker-functor-from-the-relevant-parabolic-o-summand]]).

[F2] The residue-induction construction produces the central components $T_\alpha$ as images of the ground object, and the Hecke action endomorphisms give $B_\alpha=\operatorname{End}_{\mathfrak g}(T_\alpha)^{\mathrm{op}}$ on the admissible block ([[def-integral-parabolic-category-o-block-for-higher-level-schur-weyl-duality]], [[thm-skryabins-equivalence-for-the-type-a-whittaker-pair]], [[def-deformed-tensor-space-for-the-type-a-finite-w-algebra]]).

[F3] Projective covers, tiltings and the standard/costandard filtrations exist and are classified; Grothendieck-group adjunction is available for the rigid-block arguments ([[thm-indecomposable-tiltings-exist-and-are-classified-in-parabolic-category-o]], [[def-standard-costandard-filtered-and-tilting-objects-in-a-highest-weight-category]], [[def-grothendieck-group-and-character-of-category-o]]).



[F4] The actual prefix modules are projective in the whole finite Col summand, contain each projective cover as a direct summand, and embed in $T_d$ with standard-filtered quotients ([[thm-the-whittaker-functor-is-exact-and-fully-faithful-on-the-required-projectives]]). The local construction in its steps 1.2, 2.2, 3.2 and 4.1 uses top-to-bottom ordinary readings and arbitrary admissible origins; its mixed-coset category-O basics transport through the proved separated-coset exact equivalence.

## Proof

**Proof technique:** direct.

**Given:** The component $T_\alpha$ and the functor $\pi_\alpha$.

1.1 Exactness of $\pi_\alpha$. $T_\alpha$ is a direct summand of the projective object $T=P_c\otimes V^{\otimes d}$ by [F1]; $\operatorname{Hom}_{\mathfrak g}(P,-)$ is exact for projective $P$, and passing to a direct summand preserves exactness, so $\pi_\alpha$ is exact. [F1, algebra]

1.2 The left adjoint. The tensor-Hom adjunction gives $\pi^*_\alpha=T_\alpha\otimes_{B_\alpha}-$ as left adjoint of $\pi_\alpha$; tensoring with a right module is right exact but not left exact in general, and the rank-one witness exhibits the failure of exactness. Free $B_\alpha$-modules map to direct sums of copies of $T_\alpha$, which are projective, and direct summands of projective objects are projective, so $\pi^*_\alpha$ sends $B_\alpha$-projectives to projectives. [F2, F3, algebra]

1.3 The whole-summand generator. By [F4], the finite sum $G_d$ is projective and contains every Col-labelled cover; exact central projection gives the projective generator $G_\alpha$ of the whole block. The same supplier gives actual inclusions of each prefix summand in $T_d$ with standard-filtered quotients, providing the projective-copresentation prerequisite without identifying $G_\alpha$ with the detector $T_\alpha$. [F4, algebra]

2.1 Recovery on $\operatorname{add}(T_\alpha)$. The evaluation $\pi^*_\alpha\pi_\alpha(T_\alpha)=T_\alpha\otimes_{B_\alpha}\operatorname{End}_{\mathfrak g}(T_\alpha)\to T_\alpha$ is an isomorphism by the endomorphism-algebra description [F2] (the standard evaluation of a free rank-one module), and for direct summands it follows by restriction of idempotents; hence $\pi^*_\alpha\pi_\alpha$ recovers every object of $\operatorname{add}(T_\alpha)$, in particular every standard-labelled prinjective contained in $T_\alpha$. [F2, step 1.2, algebra]

3.1 **The rank-one boundary.** Take $q=(1,1)$, $c=(0,0)$ and $d=1$. The ground $\mathfrak{sl}_2$ highest weight is $-1$, and its natural tensor gives the regular-block detector $T=P(-2)$. The rank-one Verma formula $ef^kv=k(\lambda-k+1)f^{k-1}v$ gives the nonsplit sequence $0\to L(-2)\to\Delta(0)\to L(0)\to0$ and $\Delta(-2)=L(-2)$. BGG reciprocity in [F1] gives $P(0)=\Delta(0)$ and the nonsplit flag $0\to\Delta(0)\to T\to L(-2)\to0$; the flag cannot have $\Delta(0)$ on top because the cover has head $L(-2)$. Thus $T$ has head and socle $L(-2)$ and middle factor $L(0)$. Let $x$ be its head-to-socle endomorphism. Then $x^2=0$, and the level-two $d=1$ endomorphism algebra is $R=\mathbb C[x]/x^2$ by the supplied Hecke identification. Any map $T\to P(0)$ has image in $\operatorname{soc}P(0)=L(-2)$: its composite to $L(0)$ is zero. Hence $\pi P(0)=R/(x)$, and $\pi^*\pi P(0)=T/xT$ has head $L(-2)$, whereas $P(0)$ has head $L(0)$, so recovery fails. Moreover tensoring the injection $(x)\hookrightarrow R$ with $T$ gives $T/xT\xrightarrow{x}T$, with nonzero kernel $\ker x/xT\cong L(0)$. Thus $\pi^*$ is not exact. All modules lie in this fixed regular block and retain its scalar $\mathfrak{gl}_2$ centre. [F1, F2, F3, step 1.2, step 2.1, construct, algebra]

4.1 Assembly. Since the charges decompose $T$ into finitely many central components in each degree and the categories are locally unital in the infinite case, the functors $\pi_\alpha$ assemble to the locally unital sum; the ambient category retains all labels, including those killed by the functors. [F2, step 1.1, algebra] ∎

## Remarks

- The opposite convention in $B_\alpha=\operatorname{End}(T_\alpha)^{\mathrm{op}}$ is fixed so that the Schur functor lands in left modules and the composition of endomorphisms is read left-to-right; this convention is used by every later item of the pair.

- The two-term copresentations of the exactness theorem show that every projective has a copresentation by objects of $\operatorname{add}(T)$, but a copresentation does not imply recovery by the left adjoint: the left adjoint is only right exact.
