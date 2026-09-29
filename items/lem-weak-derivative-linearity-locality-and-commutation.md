---
id: lem-weak-derivative-linearity-locality-and-commutation
kind: lemma
title: Linearity, locality, and commutation of weak derivatives
status: draft
origin: pipeline
deps: [def-locally-integrable-function-as-a-regular-distribution, def-weak-derivative-of-a-locally-integrable-function, lem-weak-derivative-is-independent-of-lp-representatives, lem-weak-derivatives-are-unique-almost-everywhere, thm-distributional-differentiation-is-continuous-and-commutes, def-countable-choice]
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  scraped: []
  references:
    - title: Juha Kinnunen, Sobolev Spaces (Aalto University, 2026), Lemma 1.14
      url: https://math.aalto.fi/~jkkinnun/files/sobolev_spaces.pdf
      locator: Chapter 1 §1.3, printed pp. 9–10
    - title: John K. Hunter, Notes on Partial Differential Equations (2014), Proposition 3.17
      url: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf
      locator: Chapter 3 §3.4, printed pp. 54–55
---

## Statement

Assume Countable Choice. Let $\Omega\subseteq\mathbb R^n$ be open, with
$n\ge1$, and let all functions below be real- or complex-valued classes in
$L^1_{\mathrm{loc}}(\Omega)$. Weak differentiation is complex-linear wherever
the derivatives exist: if $v_j=D^\alpha u_j$ weakly for $j=1,2$ and
$a,b\in\mathbb C$, then
$$av_1+bv_2=D^\alpha(au_1+bu_2)\quad\text{weakly}.$$
If $v=D^\alpha u$ weakly on $\Omega$ and $V\subseteq\Omega$ is open, then
$$v|_V=D^\alpha(u|_V)\quad\text{weakly on }V.$$

For the commutation assertion, let $u\in L^1_{\mathrm{loc}}(\Omega)$ and
$\alpha,\beta\in\mathbb N_0^n$. Suppose that the weak derivatives
$$v=D^\alpha u,\qquad w=D^\beta u$$
exist in $L^1_{\mathrm{loc}}(\Omega)$. Then the following three existence
conditions are equivalent: $D^\beta v$ exists in $L^1_{\mathrm{loc}}(\Omega)$;
$D^\alpha w$ exists in $L^1_{\mathrm{loc}}(\Omega)$; and
$D^{\alpha+\beta}u$ exists in $L^1_{\mathrm{loc}}(\Omega)$. Whenever they
exist, their value classes are equal almost everywhere on $\Omega$.

If $\Omega=\varnothing$, every class is zero, so all these statements hold.

## Facts & Assumptions

**Given:** Countable Choice, an open $\Omega\subseteq\mathbb R^n$, locally integrable functions, and multi-indices $\alpha,\beta\in\mathbb N_0^n$.

[F1] Weak derivatives are defined by the signed test identity, equivalently by equality of the corresponding regular and differentiated distributions ([[def-weak-derivative-of-a-locally-integrable-function]]).

[F2] The regular-distribution pairing is complex bilinear and depends only on the almost-everywhere class ([[def-locally-integrable-function-as-a-regular-distribution]]).

[F3] Weak differentiation is independent of almost-everywhere changes to the locally integrable representatives under Countable Choice ([[lem-weak-derivative-is-independent-of-lp-representatives]]).

[F4] Distributional differentiation is complex-linear and commutes: $$\partial^\alpha\partial^\beta T=\partial^{\alpha+\beta}T$$ for every distribution $T$; this part holds in ZF ([[thm-distributional-differentiation-is-continuous-and-commutes]]).

[F5] Under Countable Choice, a locally integrable value of a weak derivative is unique as an almost-everywhere class ([[lem-weak-derivatives-are-unique-almost-everywhere]]).

## Proof

**Proof technique:** direct.

1.1 Let $v_j=D^\alpha u_j$ weakly, and fix $a,b\in\mathbb C$ and a test $\varphi\in C_c^\infty(\Omega)$. By the weak identities in [F1] and linearity of the integral, $$\int_\Omega(au_1+bu_2)D^\alpha\varphi\,dx =(-1)^{|\alpha|}\int_\Omega(av_1+bv_2)\varphi\,dx.$$ Finite sums of locally integrable functions remain locally integrable. By [F2] and [F3], the pairings and derivative classes do not depend on the chosen representatives. Since the test was arbitrary, this proves the stated complex-linearity. [F1, F2, F3, given]

1.2 Let $\varphi\in C_c^\infty(V)$. Its extension by zero to $\Omega$ is a smooth compactly supported test on $\Omega$: its support is compactly contained in $V$, so it vanishes in a neighborhood of $\Omega\setminus V$. Apply the weak identity for $D^\alpha u=v$ on $\Omega$ to this extension. The test and its derivatives vanish outside $V$, so the resulting integrals are exactly the weak identity on $V$ for $u|_V$ and $v|_V$. Thus $v|_V=D^\alpha(u|_V)$ weakly. [F1, given]

1.3 Write $T_f$ for the regular distribution of a locally integrable class $f$. By [F1], the assumptions $D^\alpha u=v$ and $D^\beta u=w$ give $$\partial^\alpha T_u=T_v,\qquad \partial^\beta T_u=T_w.$$ By [F4], $$\partial^\beta\partial^\alpha T_u =\partial^{\alpha+\beta}T_u =\partial^\alpha\partial^\beta T_u.$$ All equalities here are distributional; they assert no locally integrable representative until one of the three weak derivatives in the Statement is assumed to exist. [F1, F4, given]

2.1 Suppose first that $g=D^\beta v$ exists in $L^1_{\mathrm{loc}}(\Omega)$. Then [F1] and step 1.3 give $$T_g=\partial^\beta T_v =\partial^\beta\partial^\alpha T_u =\partial^{\alpha+\beta}T_u =\partial^\alpha T_w.$$ The regular-distribution/weak-derivative equivalence in [F1] says that this same locally integrable $g$ is both $D^{\alpha+\beta}u$ and $D^\alpha w$. If instead $h=D^\alpha w$ exists, then $$T_h=\partial^\alpha T_w =\partial^\alpha\partial^\beta T_u =\partial^{\alpha+\beta}T_u =\partial^\beta T_v,$$ so $h$ represents both $D^{\alpha+\beta}u$ and $D^\beta v$. Finally, if $r=D^{\alpha+\beta}u$ exists, then $$T_r=\partial^{\alpha+\beta}T_u =\partial^\beta T_v =\partial^\alpha T_w,$$ so $r$ represents both iterated weak derivatives. These three implications prove equivalence of the existence conditions, with no assumption that an unrepresented distributional derivative is a function. [F1, F4, step 1.3, given]

3.1 In each of the three cases, the named representatives satisfy the same weak derivative identities for the same base function and multi-index. By [F5] their locally integrable value classes are equal almost everywhere. This identifies all three values whenever any one existence condition holds. Countable Choice is used only through the representative and uniqueness interfaces [F3] and [F5]; the test-identity calculations, restriction, and distributional commutation use no choice. If $\alpha=0$ or $\beta=0$, the order-zero test identity in [F1] and uniqueness [F5] identify that derivative with the original class, so the same argument includes these cases. If both multi-indices are zero, all three derivatives are simply $u$. [F1, F3, F5, step 2.1, given] ∎
