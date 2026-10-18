---
id: ex-matrix-amplification-basic-construction
kind: example
title: A matrix amplification gives an explicit finite-index II1 inclusion
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 6
deps:
- def-extremal-finite-index-ii1-subfactor-data
- lem-finite-right-n-module-frame-from-projection-model
- thm-finite-index-ii1-basic-construction-jones-tower
- def-axiom-of-choice
justified_by: []
aliases: []
verification:
  precheck: pass
proof_strategy: direct
axiom_use: The II1 factor and normalized trace are the supplied data; the finite matrix-unit frame is explicit and uses no choice.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: Vaughan F. R. Jones, Planar Algebras, I
    url: https://arxiv.org/pdf/math/9909027
    locator: '§4.1, printed pp. 81–92: finite-index module frames, basic construction and trace normalization.'
  - title: David Penneys, Exercises in Quantum Algebra
    url: https://people.math.osu.edu/penneys.2/archive/QuantumAlgebra.pdf
    locator: '§§3.2.1–3.2.2, PDF pp. 20–22: right-module inner product, finite projection model and basic-construction trace.'
---

## Statement

Assume AC as inherited from the II1 factor and finite-index suppliers. Let $(P,\tau_P)$ be a II1 factor with faithful normal normalized trace and let $k\ge2$. The inclusion $N=P\otimes1\subseteq M=P\bar\otimes M_k(\mathbb C)$ with trace $\tau_P\otimes\operatorname{tr}_k$ has expectation $E_N=\mathrm{id}_P\otimes\operatorname{tr}_k$, is extremal, has frame $u_{ab}=\sqrt{k}(1\otimes e_{ab})$ for $1\le a,b\le k$, and has index $[M:N]=k^2$. Its first basic construction has trace $\tau_1(xe_Ny)=k^{-2}\tau(yx)$.

## Facts & Assumptions

**Given:** A II1 factor $(P,\tau_P)$, an integer $k\ge2$, the local frame and basic-construction results, and matrix units $e_{ab}$ in $M_k(\mathbb C)$.

[F1] A finite-index subfactor data package defines the right-module inner product by $\langle x,y\rangle_N=E_N(x^*y)$ and index as the module-frame trace. ([[def-extremal-finite-index-ii1-subfactor-data]])

[F2] A coordinate Parseval frame has index equal to the sum of the normalized traces of its inner products. ([[lem-finite-right-n-module-frame-from-projection-model]])

[F3] The first basic-construction trace satisfies $\tau_1(xe_Ny)=[M:N]^{-1}\tau(yx)$. ([[thm-finite-index-ii1-basic-construction-jones-tower]])

[F4] In the specified coordinate model, the unnormalized module trace of $T$ is $\sum_j\tau_N(\langle u_j,T(u_j)\rangle_N)$. ([[thm-finite-index-ii1-basic-construction-jones-tower]])

[A1] AC is inherited from the tracial, finite-index module and full Jones-tower suppliers. ([[def-axiom-of-choice]])

## Proof

**Given:** $N=P\otimes1$, $M=P\bar\otimes M_k$, and the normalized matrix trace $\operatorname{tr}_k(e_{ab})=\delta_{ab}/k$.

1.1 For $x=[x_{ab}]\in M_k(P)$, $E_N(x)=k^{-1}\sum_a x_{aa}\otimes1$. If $x\ge0$, each diagonal compression $x_{aa}$ is positive, so this sum is positive. The formula makes $E_N$ unital, fixes $N$, is $N$-bimodular, and preserves the product trace; its finite sum of normal diagonal maps is normal. If $E_N(x)=0$ for $x\ge0$, then $\tau_M(x)=\tau_N(E_N(x))=0$, so faithfulness of $\tau_M$ gives $x=0$; hence $E_N$ is faithful. An element $\sum_{c,d}p_{cd}\otimes e_{cd}$ commuting with every $1\otimes e_{ab}$ must be $p\otimes1$, and commuting also with $P\otimes1$ forces $p\in Z(P)=\mathbb C1$; thus $M$ is a factor. It has no minimal projection: if $q\in M$ were minimal, some diagonal corner $r=(1\otimes e_{ii})q(1\otimes e_{ii})$ would be nonzero. Its support projection $s$ in the diffuse factor $P\otimes e_{ii}$ is nonzero. The polar decomposition of $q(1\otimes e_{ii})$ gives a partial isometry from $s$ onto a nonzero subprojection of $q$. Since $P$ has no minimal projections, choose $0<t<s$; its image under that partial isometry is a nonzero proper subprojection of $q$, a contradiction. Thus $M$ is a II1 factor; $N\cong P$ is one as well. [A1, F1, given, construct]

1.2 For matrix units, $u_{ab}^*u_{cd}=k\,1\otimes e_{ba}e_{cd}=k\delta_{ac}(1\otimes e_{bd})$, so $E_N(u_{ab}^*u_{cd})=\delta_{ac}\delta_{bd}1$. Thus the $k^2$ vectors are orthonormal as a right $N$-module frame. More generally, for $x=\sum_{c,d}x_{cd}\otimes e_{cd}$, $E_N(u_{ab}^*x)=k^{-1/2}x_{ab}\otimes1$, and hence $\sum_{a,b}u_{ab}E_N(u_{ab}^*x)=x$. These coordinates identify $\mathcal X$ isometrically with $N^{k^2}$, so it is complete with projection model $p=1_{k^2}$; the inner-product traces sum to $k^2$, and [F2] gives index $k^2$. [A1, F1, F2, given, algebra]

2.1 An element $\sum_{c,d}p_{cd}\otimes e_{cd}$ commutes with every $p\otimes1$ exactly when each $p_{cd}$ is central in the factor $P$, hence when it lies in $1\otimes M_k$. On the right action of this relative commutant, [F4] gives unnormalized module trace $\sum_{a,b}\tau_N(E_N(u_{ab}^*u_{ab}(1\otimes e_{cd})))=k\,\mathbf1_{c=d}$. Indeed $e_{ba}e_{ab}e_{cd}=\mathbf1_{b=c}e_{bd}$, whose normalized matrix trace is $\mathbf1_{b=c=d}/k$, the scalar factor $k$ in $u_{ab}$ cancels the normalized matrix trace $1/k$, and the sum over $a$ has $k$ terms. Dividing by $\lambda=k^2$ gives $\mathbf1_{c=d}/k=\operatorname{tr}_k(e_{cd})$, so the right-action module trace and $\tau$ agree on $N'\cap M$; the inclusion is extremal. [A1, F1, F2, F4, step 1.2, algebra]

3.1 Applying [F3] with $\lambda=k^2$ gives $\tau_1(xe_Ny)=k^{-2}(\tau_P\otimes\operatorname{tr}_k)(yx)$ for every $x,y\in M$. This is the claimed trace normalization. [A1, F3, step 1.2, step 2.1, algebra] ∎
