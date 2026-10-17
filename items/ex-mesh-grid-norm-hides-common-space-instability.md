---
id: ex-mesh-grid-norm-hides-common-space-instability
kind: example
title: "A mesh-dependent grid norm hides common-space instability"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps: [def-common-space-linear-scheme-interface, def-finite-grid-common-space-lift, lem-grid-stability-transfers-under-uniform-norm-comparison, def-c-zero-and-ell-infinity, lem-real-and-complex-c-zero-are-banach, lem-finite-truncations-are-dense-in-c0-and-ell-one, def-operator-norm, thm-induction-principle]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
generation:
  role: example
sources:
  references:
    - title: "Lloyd N. Trefethen, Finite Difference and Spectral Methods, Chapter 4, §4.2"
      url: "https://people.maths.ox.ac.uk/trefethen/4all.pdf"
    - title: "R. J. LeVeque, AMath 585–6 Notes, Chapter 12, §§12.1–12.5.1"
      url: "https://usermanual.wiki/Document/LeVequeFiniteDiff.545303893.pdf"
---

## Example

Let $X=c_0(\mathbb R)$ with the identity semigroup $U(t)=I_X$. For each
$\nu\in\mathbb N$, put $m=\nu+2$ and let
$G_m=\operatorname{span}\{e_0,\ldots,e_{m-1}\}$, where $e_j$ is the sequence
with value $1$ at coordinate $j$ and $0$ elsewhere. Reconstruct by inclusion,
restrict by coordinate truncation, and equip $G_m$ with the
mesh-dependent norm
$$\|g\|_{G_m}:=\max\bigl(|g_0|,\ldots,|g_{m-2}|,m|g_{m-1}|\bigr).$$
Define the grid update by $Q_me_j=e_j$ for $j<m-1$ and
$Q_me_{m-1}=m e_0$. Use time step $\tau_m=m^{-1}$ and the common-space lift
from [[def-finite-grid-common-space-lift]].

## Facts & Assumptions

**Given:** The common-space identity IVP, finite-grid maps and mesh norms in the example above.

[F1] The common-space interface requires a Banach space, a strongly continuous semigroup, and defines stability in the common norm ([[def-common-space-linear-scheme-interface]]).

[F2] The finite-grid lift uses bounded restriction/reconstruction maps with $P_mR_m=I$ and invariant kernel ([[def-finite-grid-common-space-lift]]).

[F3] Under uniform reconstruction-norm comparison and a uniform restriction bound, grid-power stability transfers to the common-space lift ([[lem-grid-stability-transfers-under-uniform-norm-comparison]]).

[F4] Real $c_0$ with its supremum norm is Banach ([[def-c-zero-and-ell-infinity]], [[lem-real-and-complex-c-zero-are-banach]]).

[F5] Finite-support sequences are dense in $c_0$ ([[lem-finite-truncations-are-dense-in-c0-and-ell-one]]).

[F6] The operator norm is the supremum over the unit ball; consequently $\|Tx\|\le C\|x\|$ for all $x$ implies $\|T\|_{\mathrm{op}}\le C$ ([[def-operator-norm]]).

[F7] A property true at $0$ and preserved by successor holds for every $n\in\mathbb N$ ([[thm-induction-principle]]).

## Verification

1.1 Let $D$ be the finite-support sequences. By [F4], $X$ is Banach; the identity maps $U(t)=I_X$ form a strongly continuous semigroup with finite-time bound $M_T=1$. By [F5], $D$ is dense and it is invariant under $U$. The positive steps $\tau_m=1/m$ tend to zero, so this is common-space scheme data. [F1, F4, F5, construct]

2.1 The positive coordinate weights make the displayed maximum a norm: homogeneity and definiteness hold coordinatewise, and the triangle inequality follows by applying the scalar triangle inequality in every coordinate before taking the maximum. The truncation satisfies $\|P_mx\|_{G_m}\le m\|x\|_\infty$, and inclusion satisfies $\|R_mg\|_\infty\le\|g\|_{G_m}$, so both are bounded. Also $P_mR_m=I_{G_m}$ and $\ker P_m$ is invariant under $U=I$. For $g=\sum_{j<m}g_je_j$, the zeroth output coordinate is $g_0+mg_{m-1}$, coordinates $1$ through $m-2$ if present remain $g_j$, and coordinate $m-1$ becomes $0$. Since $|g_0|\le\|g\|_{G_m}$, $m|g_{m-1}|\le\|g\|_{G_m}$, and $|g_j|\le\|g\|_{G_m}$ for $1\le j\le m-2$, it follows that $\|Q_mg\|_{G_m}\le2\|g\|_{G_m}$, including $m=2$. Thus $Q_m$ is bounded and the grid lift [F2] is defined. Also $Q_m^2=Q_m$: it fixes each $e_j$ for $j<m-1$, and $Q_m^2e_{m-1}=Q_m(me_0)=me_0=Q_me_{m-1}$. By induction [F7], $Q_m^n=Q_m$ for every $n\ge1$: the base $n=1$ is immediate, and $Q_m^n=Q_m$ implies $Q_m^{n+1}=Q_mQ_m=Q_m^2=Q_m$. Meanwhile $Q_m^0=I$. By [F6], $\|Q_m^n\|_{G_m\to G_m}\le2$ for every $n\ge0$, so the grid updates are stable in their mesh norms. [F2, F6, F7, step 1.1, algebra]

3.1 Fix $v\in D$ and choose $N\in\mathbb N$ such that $v_j=0$ for every $j>N$ (take $N=0$ for the zero sequence). For $m\ge N+2$, one has $P_mv=v$, the high coordinate $v_{m-1}=0$ since $m-1>N$, and $Q_mv=v$. Since $U=I$, the lift gives $S_mv=v$. Thus the local defect is zero on every $v\in D$ for all sufficiently large $m$, which proves consistency. [F1, step 2.1, algebra]

3.2 For $e_{m-1}$, the lift gives $S_me_{m-1}=m e_0$. Its common-space norm is therefore $m$, while $\|e_{m-1}\|_\infty=1$. Testing this unit vector in [F6] gives $\|S_m\|_{X\to X}\ge m$. For every $T>0$, all sufficiently large $m$ have $\tau_m\le T$, so the common-space family is not stable. [F1, F2, F6, step 2.1, algebra]

4.1 The same vector satisfies $\|e_{m-1}\|_{G_m}=m$ but $\|R_me_{m-1}\|_\infty=1$; thus no positive uniform lower comparison constant $a$ exists. Also $\|P_m\|_{X\to G_m}\ge m$ by testing the unit vector $e_{m-1}$ in [F6]. The hypotheses needed in [F3] fail, exactly where the grid norm ceases to control the reconstructed common-space norm and the restriction norm. The grid stability calculation therefore cannot certify common-space stability. [F3, F6, step 2.1, step 3.2] ∎
