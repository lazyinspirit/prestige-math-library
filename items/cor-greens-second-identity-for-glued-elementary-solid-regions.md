---
id: cor-greens-second-identity-for-glued-elementary-solid-regions
kind: corollary
title: "Green's second identity on a glued elementary solid region"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-greens-first-identity-for-glued-elementary-solid-regions, def-laplacian-of-a-c2-function, def-jacobian-matrix-and-gradient, def-euclidean-inner-product, thm-the-divergence-theorem-for-finite-gluings-of-elementary-solid-regions, def-ck-and-multi-index-notation-in-several-variables, thm-multidimensional-integral-properties, thm-continuous-functions-on-compact-jordan-sets-are-integrable, lem-internal-faces-cancel-when-elementary-solid-regions-are-glued]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "J. Feldman, A. Rechnitzer and E. Yeager, CLP-4 Vector Calculus (University of British Columbia), section 4.2"
      url: "https://personal.math.ubc.ca/~CLP/CLP4/clp_4_vc/clp_4_vc.html"
    - title: "M. Corral, Vector Calculus, chapter 4 (LibreTexts)"
      url: "https://math.libretexts.org/Bookshelves/Calculus/Vector_Calculus_(Corral)/04%3A_Line_and_Surface_Integrals"
pipeline_run: null
---

## Statement

Let a finite gluing of elementary solid regions be given, with union $E$ and outer boundary presentation $\Sigma^{\mathrm{out}}$, let $O$ be an open set containing $E$, and let $u,v:O\to\mathbb R$ both be $C^2$. Then

$$\iiint_E(u\Delta v-v\Delta u)=\iint_{\partial E}\bigl(u\langle\nabla v,n\rangle-v\langle\nabla u,n\rangle\bigr).$$

Both functions are required to be $C^2$, which is a stronger hypothesis than the first identity places on either of them.

## Facts & Assumptions

**Given:** The finite gluing with union $E$ and outer presentation $\Sigma^{\mathrm{out}}$, the open $O\supseteq E$, and the $C^2$ functions $u,v$ on $O$.

[F1] For scalar-valued $f$ the gradient is $\nabla f=(\partial_0f,\ldots,\partial_{m-1}f)$ ([[def-jacobian-matrix-and-gradient]]), and $\Delta f=\operatorname{div}\nabla f$ for $C^2$ $f$ ([[def-laplacian-of-a-c2-function]]).

[F2] For $x,y\in\mathbb R^m$, $\langle x,y\rangle=\sum_{i<m}x_iy_i$; in particular $\langle x,y\rangle=\langle y,x\rangle$ ([[def-euclidean-inner-product]]).

[F3] A scalar $f$ is of class $C^k$ on $U$ when every iterated derivative of length at most $k$ exists and is continuous on $U$; in particular a $C^2$ function is $C^1$ ([[def-ck-and-multi-index-notation-in-several-variables]]).

[F4] The flux over a finite patch presentation is a finite sum of parameter integrals of continuous integrands ([[thm-the-divergence-theorem-for-finite-gluings-of-elementary-solid-regions]]).

[L1] Under the hypotheses above with $u$ of class $C^1$ and $v$ of class $C^2$, $\iiint_E(\langle\nabla u,\nabla v\rangle+u\Delta v)=\iint_{\partial E}u\langle\nabla v,n\rangle$ ([[cor-greens-first-identity-for-glued-elementary-solid-regions]]).

[L2] For integrable $f,g$ on a nondegenerate rectangle and scalars $\alpha,\beta$, the function $\alpha f+\beta g$ is integrable with integral $\alpha\int f+\beta\int g$ ([[thm-multidimensional-integral-properties]]).

[L3] Every continuous real function on a compact Jordan measurable set is Riemann integrable over it ([[thm-continuous-functions-on-compact-jordan-sets-are-integrable]]), and for a finite gluing $E$ is compact and Jordan measurable ([[lem-internal-faces-cancel-when-elementary-solid-regions-are-glued]]).

## Proof

**Proof technique:** direct.

1.1 Both $u$ and $v$ are $C^2$ on $O$, hence also $C^1$ there by [F3]. So [L1] applies as it stands and gives $\iiint_E(\langle\nabla u,\nabla v\rangle+u\Delta v)=\iint_{\partial E}u\langle\nabla v,n\rangle$; and it applies again with the roles of the two functions exchanged, which is legitimate exactly because both are $C^2$, giving $\iiint_E(\langle\nabla v,\nabla u\rangle+v\Delta u)=\iint_{\partial E}v\langle\nabla u,n\rangle$. [given, F3, L1]

2.1 All the integrands appearing in step 1.1 are continuous: $\nabla u$ and $\nabla v$ have continuous components by [F1] and [F3], $\Delta u$ and $\Delta v$ are continuous by [F1] and [F3], and each boundary integrand is a continuous function on a compact Jordan parameter region by [F4]. So every one of them is integrable over the relevant set by [L3], and differences of them may be taken inside the integrals by [L2]. [given, F1, F3, F4, L2, L3]

3.1 Subtract the second identity of step 1.1 from the first, using step 2.1 to combine the integrals. By the symmetry of the inner product in [F2] the two terms $\langle\nabla u,\nabla v\rangle$ and $\langle\nabla v,\nabla u\rangle$ are equal and cancel, leaving $\iiint_E(u\Delta v-v\Delta u)$ on the left and $\iint_{\partial E}\bigl(u\langle\nabla v,n\rangle-v\langle\nabla u,n\rangle\bigr)$ on the right. [step 1.1, step 2.1, F2, L2] ∎

## Remarks

- **What the extra hypothesis buys.** The first identity needs only one of the two functions to be $C^2$; using it twice with the roles exchanged needs both. That is the whole difference between the two identities, and it is why the second is stated separately rather than as a rearrangement of the first.

- **The cancellation is the symmetry of the inner product, nothing more.** No integration by parts and no mixed-partials theorem enters here: the term that cancels is literally the same function written two ways.
