---
id: lem-hodge-riemann-for-large-positive-deformation
kind: lemma
title: "Hodge-Riemann relations hold for large positive deformation, and the deformation principle"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 8
deps: [def-the-deformed-lefschetz-operator-on-b-x-b-s, def-invariant-intersection-form-on-a-bott-samelson-bimodule, def-primitive-subspaces-hard-lefschetz-and-hodge-riemann-signs, lem-hard-lefschetz-implies-primitive-decomposition, lem-family-signature-constancy-and-the-weak-lefschetz-substitute]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Elias-Williamson, The Hodge theory of Soergel bimodules (arXiv:1212.0791v2, final version; Ann. of Math. 180 (2014) 1089-1136)"
      url: "https://arxiv.org/pdf/1212.0791v2"
      locator: "Theorem 5.1, Lemma 5.2 and Corollary 5.3 with their proofs; formulas (5.1) and (5.2)"
    - title: "Riche, La theorie de Hodge des bimodules de Soergel (d'apres Soergel et Elias-Williamson), Seminaire Bourbaki no. 1139 (arXiv:1711.02464, Octobre 2017)"
      url: "https://arxiv.org/pdf/1711.02464"
      locator: "Section 0.3 and Section 2.4"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
---

## Facts & Assumptions

**Given:** A finite right-free real Soergel bimodule $B$ with a non-degenerate symmetric invariant form whose reduction $W=\overline B$ is even or odd and satisfies hL and standard HR for $A=\rho\cdot(-)$, and the induced form on $BB_s$.

[F1] Put $\alpha(b)=b c_{\mathrm{id}}$ and $\beta(b)=b c_s$. The induced form satisfies $\langle\alpha(b),\alpha(b')\rangle=\partial_s\langle b,b'\rangle_B$, $\langle\alpha(b),\beta(b')\rangle=\langle b,b'\rangle_B$, and $\langle\beta(b),\beta(b')\rangle=\langle b,b'\rangle_B\alpha_s$. It is non-degenerate when the form on $B$ is; homogeneous right bases give $\dim\overline{BB_s}=(v+v^{-1})\dim W$ ([[def-invariant-intersection-form-on-a-bott-samelson-bimodule]]).

[F2] $L_\zeta=A+\zeta T$, where $T$ is middle multiplication by $\rho$; these operators commute and are symmetric. The rank-one relation is $r c_{\mathrm{id}}=c_{\mathrm{id}}s(r)+\partial_s(r)c_s$, while $r c_s=c_s r$. Thus after right reduction $T\beta(b)=0$, but $T\alpha(b)$ need not vanish ([[def-the-deformed-lefschetz-operator-on-b-x-b-s]], [[def-invariant-intersection-form-on-a-bott-samelson-bimodule]]).

[F3] Primitive decomposition, non-degeneracy of Lefschetz forms iff hL, and the signature criterion for standard HR hold. Signatures are constant in continuous non-degenerate families ([[lem-hard-lefschetz-implies-primitive-decomposition]], [[lem-family-signature-constancy-and-the-weak-lefschetz-substitute]], [[def-primitive-subspaces-hard-lefschetz-and-hodge-riemann-signs]]).

## Statement

Let $B$ be a Soergel bimodule satisfying hL and HR with the standard sign. Then for $\zeta\gg0$ the induced operator $L_\zeta$ on $BB_s$ satisfies hL and HR with the standard sign (Theorem 5.1).

The proof contains the following **signature comparison** (Lemma 5.2): if $V,W$ are finite-dimensional graded spaces with graded non-degenerate forms and Lefschetz operators satisfying hL, $W$ is even or odd, $\dim V=(v+v^{-1})\dim W$, and $W$ satisfies HR with the standard sign, then $V$ satisfies HR with the standard sign if and only if for all $i\ge0$ the signature of the Lefschetz form on the primitive subspace $P_W^{-i+1}$ equals the signature of the Lefschetz form on all of $V^{-i}$.

Consequently (Corollary 5.3): if $\mathrm{HR}(x)$ holds and $\mathrm{hL}(x,s)_\zeta$ holds for every $\zeta\ge0$, then $\mathrm{HR}(x,s)_\zeta$ holds for every $\zeta\ge0$; more generally, if $\mathrm{hL}(x,s)_\zeta$ holds for all $\zeta\ge0$ and $\mathrm{HR}(x,s)_\zeta$ holds for a single $\zeta_0\ge0$, then $\mathrm{HR}(x,s)_\zeta$ holds for all $\zeta\ge0$. In the signature comparison use the convention $P_W^1=0$; no positive-degree primitive space is introduced.

## Proof

**Proof technique:** direct; a hyperbolic-block calculation and telescoping primitive signatures.

1.1 **The basis and cross blocks.** Assume $W\ne0$; the zero case has zero tensor product and is vacuous. For $i\ge0$, choose lifts $e_a\in B^{-i-1}$ of a basis of $W^{-i-1}$ orthogonal for its Lefschetz form, and lifts $p_b\in B^{-i+1}$ of a basis of $P_W^{-i+1}$; for $i=0$ the latter space is zero. Primitive decomposition (and $A:W^{-1}\to W^1$ when $i=0$) gives a basis $Ae_a,p_b$ of $W^{-i+1}$. These lifts can be included in a homogeneous right basis of $B$, so $\alpha(Ae_a),\beta(e_a),\alpha(p_b)$ reduce to a basis of $V^{-i}$, where $V=\overline{BB_s}$. By [F1]–[F2], $L_\zeta\beta(y)=\beta(Ay)$ after reduction, the $\beta$–$\beta$ Lefschetz block is zero, and $\langle\alpha(x),L_\zeta^i\beta(y)\rangle=\langle x,A^iy\rangle_W$. Consequently the $\alpha(Ae)$–$\beta(e)$ block is the invertible diagonal matrix $J=(\langle e_a,A^{i+1}e_b\rangle_W)$, while the $\alpha(p)$–$\beta(e)$ block is zero, since $A^ip=0$ for primitives in degree $-i+1$. [given, F1, F2, F3]

1.2 **The signature comparison.** For nonzero $W$, let its lowest degree be $-d$ and put $b_i=\dim W^{-i}$ for integer $i$, so $b_{-i}=b_i$. For any $V$ as in the comparison statement put $v_i=\dim V^{-i}=b_{i-1}+b_{i+1}$. Under hL, its primitive dimensions are $p_i^V=v_i-v_{i+2}=b_{i-1}-b_{i+3}$, and $p_i^W=b_i-b_{i+2}$ for $i\ge0$. The standard-HR signature required on $V^{-i}$ is the finite sum $\sum_{k\ge0}(-1)^{(d+1-i-2k)/2}p_{i+2k}^V$, in the occurring parity. Substitution and cancellation give $(-1)^{(d+1-i)/2}(b_{i-1}-b_{i+1})$ for $i\ge1$, exactly the signature of the primitive form on $P_W^{-i+1}$. For $i=0$ it is zero, since $b_{-1}=b_1$, matching $P_W^1=0$. By [F3] these signatures, together with hL, are equivalent to standard HR on $V$, proving both directions of the comparison. If $W=0$, the dimension identity forces $V=0$ and both sides are vacuous. [F3, algebra]

2.1 **The hyperbolic blocks.** The Lefschetz matrix on $V^{-i}$ therefore has form $\begin{pmatrix}C&J&E\\J&0&0\\E^{\mathsf T}&0&Q_\zeta\end{pmatrix}$. Subtracting suitable vectors from the $\beta$ block from the $\alpha(p)$ block kills $E$ without changing $Q_\zeta$; replacing the first block by itself minus one half of the corresponding $J^{-1}C$ combination of the second kills $C$. This gives a congruence to $\begin{pmatrix}0&J&0\\J&0&0\\0&0&Q_\zeta\end{pmatrix}$. The first two blocks are non-degenerate with equal positive and negative inertia. Thus the full matrix is non-degenerate exactly when $Q_\zeta$ is, and its signature is that of $Q_\zeta$. For $i=0$, $Q_\zeta$ is empty, so the matrix is already non-degenerate of signature zero for every parameter. [step 1.1, F3, algebra]

3.1 **The primitive block for $i>0$.** For the chosen lifts $p,q$ of degree $-i+1$, binomial expansion and [F1] give $\langle\alpha(p),L_\zeta^i\alpha(q)\rangle=\sum_{j=0}^i\binom{i}{j}\zeta^j\partial_s(\langle p,A^{i-j}q\rangle_B\rho^j)$ before reduction. The polynomial $\langle p,A^{i-j}q\rangle_B$ has degree $2-2j$: it vanishes for $j\ge2$, and for $j=1$ it is constant. Since $\partial_s\rho=\rho(\alpha_s^\vee)>0$, reduction yields $Q_\zeta=Q_0+\zeta i\rho(\alpha_s^\vee)Q$, where $Q$ is the definite primitive Lefschetz matrix on $P_W^{-i+1}$. If this space is zero the block is empty. Otherwise $i>0$ and $\zeta^{-1}Q_\zeta$ tends to the definite matrix $i\rho(\alpha_s^\vee)Q$; symmetric elimination near that matrix preserves the pivot signs by [F3]. Hence for sufficiently large $\zeta$, $Q_\zeta$ is definite with the signature of $Q$. There are only finitely many nonzero graded pieces, so one bound on $\zeta$ works for all of them. [step 2.1, F1, F2, F3, algebra]

4.1 **Large parameters.** Steps 2.1–3.1 make every Lefschetz form on $V^{-i}$ non-degenerate for all sufficiently large parameters, so [F3] gives hL. Their signatures are precisely the primitive signatures of $W$; step 1.2 gives HR with the standard sign on $V$. This proves the large-parameter assertion, including the empty primitive blocks and $i=0$. [step 2.1, step 3.1, step 1.2, F3]

5.1 **Deformation principle.** On any compact interval joining $\zeta_0$ to another nonnegative parameter, the polynomial family $L_\zeta$ is continuous. If hL holds throughout, [F3] transfers HR from $\zeta_0$ to that parameter. When HR$(x)$ holds, step 4.1 supplies a large positive $\zeta_0$; otherwise the more general corollary assumes one such parameter. This proves both corollaries and completes the argument without choice. [step 4.1, F3] ∎

## Remarks

The large-parameter primitive-block argument uses $i>0$. At $i=0$ the primitive block is empty and the Lefschetz matrix is hyperbolic; its signature is zero. All calculations use the invariant form on $B$, so no multiplication of elements inside an arbitrary bimodule $B$ is assumed.
