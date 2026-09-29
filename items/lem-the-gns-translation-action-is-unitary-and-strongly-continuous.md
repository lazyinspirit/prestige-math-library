---
id: lem-the-gns-translation-action-is-unitary-and-strongly-continuous
kind: lemma
title: The GNS translation action is unitary and strongly continuous
status: draft
origin: pipeline
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - cor-inner-product-induces-a-norm
  - def-axiom-of-choice
  - def-banach-space
  - def-complex-metric-convergence-and-continuity
  - def-completion-of-a-normed-space
  - def-continuous-function-of-positive-type
  - def-countable-choice
  - def-hilbert-space
  - def-linear-map
  - def-real-and-complex-inner-product-space
  - def-strongly-continuous-unitary-representation
  - def-topological-group
  - lem-complex-conjugation-and-modulus-laws
  - lem-of-square-monotone
  - lem-positive-type-functions-define-a-pre-hilbert-form
  - lem-the-gns-null-space-is-translation-invariant
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-completion-of-an-inner-product-space-is-hilbert
  - thm-completion-universal-property-for-bounded-linear-maps
landmark: false
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  references:
    - title: "Bekka, de la Harpe and Valette, Kazhdan's Property (T), Theorem C.4.10, Appendix C §C.4, printed pp. 376–377"
      url: "https://ncatlab.org/nlab/files/BekkaHarpeValetteOnKashdanPropertyT.pdf"
---

## Statement

Let $G$ be a topological group, let $\varphi:G\to\mathbb C$ be a continuous
function of positive type, let $N_\varphi$ be the null space of the GNS form,
and let $H_\varphi$ be the Hilbert completion of the inner-product quotient
$Q_\varphi=\mathbb C^{(G)}/N_\varphi$. Assume the Axiom of Choice. For
$g\in G$, define left translation on finitely supported functions by
$$L_gf(x)=f(g^{-1}x).$$
The induced maps on $Q_\varphi$ extend uniquely to operators
$\pi_\varphi(g)\in U(H_\varphi)$, and
$\pi_\varphi(g)\pi_\varphi(h)=\pi_\varphi(gh),\qquad \pi_\varphi(e)=I_{H_\varphi}.$
For every $v\in H_\varphi$, the orbit map
$g\mapsto\pi_\varphi(g)v$ is norm-continuous.

## Facts & Assumptions

[A1] The GNS form is positive semidefinite, linear in its first argument, and has the formula $$B_\varphi(f,h)=\sum_{x,y\in G}f(x)\overline{h(y)}\varphi(y^{-1}x),\qquad B_\varphi(\delta_x,\delta_y)=\varphi(y^{-1}x).$$ Its null space is orthogonal to all finitely supported functions and the quotient carries the induced inner product ([[lem-positive-type-functions-define-a-pre-hilbert-form]]).

[A2] Left translations preserve the null space and induce invertible maps on $Q_\varphi$ ([[lem-the-gns-null-space-is-translation-invariant]]).

[A3] Multiplication and inversion on $G$ are continuous ([[def-topological-group]]).

[A4] The quotient pairing is linear in its first argument, conjugate-symmetric, positive definite, and has induced length $\|q\|=\sqrt{\langle q,q\rangle}$ ([[def-real-and-complex-inner-product-space]]).

[A5] This induced length is a norm: it is nonnegative, absolutely homogeneous, and satisfies the triangle inequality ([[cor-inner-product-induces-a-norm]]).

[A6] In a norm completion, the canonical map is a dense linear isometry and the completion is Banach ([[def-completion-of-a-normed-space]]).

[A7] Assuming Countable Choice, the norm completion of an inner-product space has its extended inner product and is a Hilbert space ([[thm-completion-of-an-inner-product-space-is-hilbert]]).

[A8] A complex Hilbert space is a Banach space for its induced norm ([[def-hilbert-space]], [[def-banach-space]]).

[A9] Assuming Countable Choice, every bounded linear map from a normed space to a Banach space extends uniquely across its completion, with the same bound ([[thm-completion-universal-property-for-bounded-linear-maps]]).

[A10] For vector spaces $V,W$ over the same field, a map $T:V\to W$ is linear when $T(au+bv)=aT(u)+bT(v)$ for all scalars $a,b$ and vectors $u,v$ ([[def-linear-map]]).

[A11] A strongly continuous unitary representation is a homomorphism into the bijective complex-linear isometries $U(H)$ for which each vector orbit is norm-continuous ([[def-strongly-continuous-unitary-representation]]).

[A12] The Axiom of Choice says every family of nonempty sets has a choice
function ([[def-axiom-of-choice]]).

[A13] In ZF, AC implies DC and hence Countable Choice
([[thm-choice-implies-dependent-implies-countable-choice]]).

[A14] Countable Choice selects one element from every countable family of
nonempty sets ([[def-countable-choice]]).

[A15] The input function $\varphi$ is continuous and the complex metric is
$d_{\mathbb C}(z,w)=|z-w|$
([[def-continuous-function-of-positive-type]],
[[def-complex-metric-convergence-and-continuity]]).

[A16] The complex modulus is definite and obeys the triangle inequality
([[lem-complex-conjugation-and-modulus-laws]]).

[A17] For nonnegative reals $a,b$, $a<b$ if and only if $a^2<b^2$
([[lem-of-square-monotone]]).

## Proof

**Given:** A topological group $G$, a continuous positive-type function $\varphi$, its GNS form and null quotient, and the Axiom of Choice.

**Proof technique:** direct.

1.1 By [A13] and [A14], AC supplies Countable Choice. Hence [A7] gives the Hilbert completion $H_\varphi$ of $Q_\varphi$ with a dense linear isometry $\kappa:Q_\varphi\to H_\varphi$. By [A8], this completion is Banach. The quotient norm used here is the norm induced by its inner product, as in [A4]–[A5]. [A4, A5, A6, A7, A8, A12, A13, A14]

1.2 For $g\in G$, set $T_g[f]=[L_gf]$ on $Q_\varphi$. It is well-defined by [A2] and complex-linear by the pointwise formula for $L_g$ and [A10]. For finitely supported $f,h$, reindex the finite sum in [A1] by $a=gx$ and $b=gy$; since $(gy)^{-1}(gx)=y^{-1}x$, this gives $$B_\varphi(L_gf,L_gh)=B_\varphi(f,h).$$ Thus $T_g$ preserves the quotient inner product and norm. The group laws for left translation give $T_e=I$, $T_gT_h=T_{gh}$, and $T_{g^{-1}}=T_g^{-1}$. [A1, A2, A3, A4, A5, A10, algebra]

2.1 Each $T_g$ is bounded with bound $1$. Apply [A9] to extend it uniquely to a bounded linear operator $\pi_\varphi(g):H_\varphi\to H_\varphi$ with $\|\pi_\varphi(g)v\|\le\|v\|$. The extension of $T_{g^{-1}}$ is an inverse: both compositions extend the identity on the dense subspace $\kappa(Q_\varphi)$, so uniqueness in [A9] makes them the identity on $H_\varphi$. The same dense-set uniqueness applied to $T_gT_h=T_{gh}$ gives $\pi_\varphi(g)\pi_\varphi(h)=\pi_\varphi(gh)$ and $\pi_\varphi(e)=I$. Applying the contraction bound also to the inverse shows $\|\pi_\varphi(g)v\|=\|v\|$. Thus every $\pi_\varphi(g)$ is bijective, complex-linear, and isometric, so belongs to $U(H_\varphi)$ by [A11]. [A6, A8, A9, A11, step 1.2]

2.2 Fix $x\in G$ and put $t=x^{-1}gx$. Since $T_g[\delta_x]=[\delta_{gx}]$, [A1] and sesquilinearity give $$\|\pi_\varphi(g)\kappa[\delta_x]-\kappa[\delta_x]\|^2 =2\varphi(e)-\varphi(t)-\varphi(t^{-1}).$$ The left side is a nonnegative real. By [A3], both maps $g\mapsto x^{-1}gx$ and $g\mapsto(x^{-1}gx)^{-1}$ are continuous at $e$ and take $e$ to $e$. Continuity of $\varphi$ and the metric description in [A15] therefore let us choose a neighborhood of $e$ on which each of $|\varphi(t)-\varphi(e)|$ and $|\varphi(t^{-1})-\varphi(e)|$ is less than $\varepsilon^2/2$. On this neighborhood, [A16] and the nonnegativity above give $$0\le\|\pi_\varphi(g)\kappa[\delta_x]-\kappa[\delta_x]\|^2 \le |\varphi(e)-\varphi(t)|+|\varphi(e)-\varphi(t^{-1})|<\varepsilon^2.$$ Since $\varepsilon>0$ and the norm is nonnegative, [A17] yields $\|\pi_\varphi(g)\kappa[\delta_x]-\kappa[\delta_x]\|<\varepsilon$. Thus this orbit is continuous at $e$. [A1, A3, A4, A15, A16, A17, step 1.2]

3.1 Every element of $Q_\varphi$ is a finite linear combination of the $[\delta_x]$. Write $w=\sum_{j=1}^m a_j\kappa[\delta_{x_j}]$. For $m=0$, $w=0$ and its orbit is constant. For $m>0$, put $C=\sum_{j=1}^m|a_j|$. If $C=0$, again $w=0$. If $C>0$, then for any $\varepsilon>0$, step 2.2 gives a neighborhood for each $j$ on which the corresponding generator displacement is less than $\varepsilon/C$. Their finite intersection is a neighborhood of $e$, and on it linearity and [A5] give $\|\pi_\varphi(g)w-w\| \le\sum_{j=1}^m|a_j| \|\pi_\varphi(g)\kappa[\delta_{x_j}]-\kappa[\delta_{x_j}]\|<\varepsilon.$ [A5, A16, step 2.2]

4.1 Let $v\in H_\varphi$ and $\varepsilon>0$. By density choose $w\in\kappa(Q_\varphi)$ with $\|v-w\|<\varepsilon/4$. Step 3.1 supplies a neighborhood of $e$ where $\|\pi_\varphi(g)w-w\|<\varepsilon/2$. Since $\pi_\varphi(g)$ is an isometry by step 2.1, the triangle inequality gives $$\|\pi_\varphi(g)v-v\| \le 2\|v-w\|+\|\pi_\varphi(g)w-w\|<\varepsilon.$$ Every orbit map is therefore continuous at $e$, including when $H_\varphi=\{0\}$. [A5, A6, step 2.1, step 3.1]

5.1 For any $g_0\in G$ and $g\to g_0$, unitarity and the homomorphism law give $$\|\pi_\varphi(g)v-\pi_\varphi(g_0)v\| =\|\pi_\varphi(g_0^{-1}g)v-v\|.$$ The map $g\mapsto g_0^{-1}g$ is continuous by [A3] and sends $g_0$ to $e$; step 4.1 thus proves continuity of the orbit map at $g_0$. This holds for every $g_0$ and $v$, so the representation is strongly continuous. [A3, A11, step 2.1, step 4.1]

6.1 The zero function has $B_\varphi=0$, hence $Q_\varphi=H_\varphi=\{0\};$ the unique operator on this space is the identity and all orbit maps are constant. In all cases, AC is used only to obtain Countable Choice for the published Hilbert-completion theorem [A7] and extension theorem [A9]. The extensions are unique, so assembling them as $g$ varies requires no further choice; the finite sums and continuity arguments above are choice-free. [A1, A6, A7, A9, A12, A13, A14, step 2.1, step 4.1] ∎
