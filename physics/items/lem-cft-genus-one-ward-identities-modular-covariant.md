---
id: lem-cft-genus-one-ward-identities-modular-covariant
kind: lemma
title: Modular covariance of the three genus-one one-point Ward identities
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
deps:
  - def-conformal-vertex-algebra
  - def-grading-restricted-generalized-vertex-module
  - lem-cft-locality-to-jacobi-residue-calculus
dependency_roles:
  def-conformal-vertex-algebra: mathematical-premise
  def-grading-restricted-generalized-vertex-module: mathematical-premise
  lem-cft-locality-to-jacobi-residue-calculus: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
    - title: Yi-Zhi Huang, Modular invariance of (logarithmic) intertwining operators
      url: https://arxiv.org/pdf/2305.15152v3
      locator: Definition 5.1 and Proposition 5.2, PDF pages 60–63; only modular covariance of the defining identities is proved here, not pseudo-trace completeness.
dependency_level: 1
---

## Statement

Let W be a grading-restricted generalized module for a conformal vertex algebra V. For τ in the upper half-plane, put Λ_τ=Z+τZ and define, for k≥2,

$$G_{2k}(τ)=\sum_{λ∈Λ_τ\setminus\{0\}}λ^{-2k}.$$

Let $ζ_τ(z)=1/z+\sum _{λ≠0}(1/(z−λ)+1/λ+z/λ²)$, with the locally normally convergent lattice sum, and define $G_2(τ)=ζ_τ(z+1)−ζ_τ(z)$, independent of z. For w∈W and homogeneous u∈V, define finite vector-valued sums

$$D_τw=L(-2)w-G_2(τ)L(0)w-\sum_{k≥1}G_{2k+2}(τ)L(2k)w,$$
$$Q_{u,τ}w=u_{(-2)}w+\sum_{k≥1}(2k+1)G_{2k+2}(τ)u_{(2k)}w.$$

Suppose F:W→Hol(H) is linear and satisfies $F(u_{(0)}w;τ)=0$, $F(Q_{u,τ}w;τ)=0$ and $2πi∂_τF(w;τ)=F(D_τw;τ)$, for every u,w. If $g=((a,b),(c,d))∈SL_2(Z)$, $s=cτ+d$ and τ'=(aτ+b)/s, then

$$F_g(w;τ)=F(s^{-L(0)}w;τ')$$

satisfies exactly the same three identities. Any holomorphic logarithm of s on H is allowed, fixed once in the exponential defining $s^{-L(0)}$. The conclusion concerns the Ward-identity solution space; it does not assert that its elements are sums of pseudo-traces.

## Facts & Assumptions

**Given:** The objects and three analytic identities are as in the Statement. The lattice formulas are part of the explicit conventions here.

[F1] [[lem-cft-locality-to-jacobi-residue-calculus]] and [[def-grading-restricted-generalized-vertex-module]] give $[L(0),u_{(m)}]=(wt(u)−m−1)u_{(m)}$, [L(0),L(m)]=−mL(m), and vectorwise truncation of the displayed sums.

[F2] [[def-conformal-vertex-algebra]] gives integral homogeneous state weights and the Virasoro mode conventions.

## Proof

1.1 The summands defining ζ after 1/z are $O(|λ|^{-3})$ locally uniformly away from the lattice: expanding 1/(z−λ) cancels its constant and linear terms in z. The sum of $|λ|^{-3}$ converges in a two-dimensional lattice, so ζ and its derivatives are meromorphic and locally normally convergent. Its negative derivative is $$\wp_τ(z)=z^{-2}+\sum_{λ≠0}((z−λ)^{-2}−λ^{-2}).$$ The derivative of this function is the absolutely convergent periodic lattice sum $−2\sum _{λ∈Λ}(z−λ)^{-3}$. Hence the difference $\wp(z+μ)−\wp(z)$ is constant for μ∈Λ. The function $\wp$ is even. Replacing z by −z−μ reverses the sign of that difference, forcing the constant to be zero. Thus $\wp$ is periodic and $ζ(z+μ)−ζ(z)=η_μ$ is constant, additive in μ. In particular $η_1=G_2$ and $η_τ=ζ(z+τ)−ζ(z)$. Integrating ζ counterclockwise around a translated fundamental parallelogram containing one lattice point gives 2πi by its single residue 1. The opposite-edge integrals, using the two quasi-periods, give $τη_1−η_τ$. Therefore $η_τ=τG_2−2πi$. [given, algebra]

1.2 Set $A=s^{-L(0)}$ on W and $A_V=s^{-L(0)}$ on V. These are defined vectorwise by a scalar exponential times a finite nilpotent polynomial on each generalized weight space. F1 gives $$A u_{(m)}A^{-1}=s^{m+1-r}u_{(m)},\qquad A L(m)A^{-1}=s^mL(m),\qquad A'=-\frac cs A L(0),$$ where $r=wt(u)$. These follow by exponentiating the scalar commutator on each generalized weight space; they do not require semisimple L(0). Since $A_V u=s^{-r}u$, the first formula gives $$ (A_Vu)_{(0)}Aw=s^{-1}A u_{(0)}w.$$ The first Ward identity for F at τ', applied to $A_V u$ and Aw, consequently proves $F_g(u_{(0)}w;τ)=0$. [F1, F2, algebra]

2.1 Absolute convergence permits reindexing the lattice series under scaling: $ζ_{tΛ}(tz)=t^{-1}ζ_Λ(z)$. Since $Λ_{τ'}=s^{-1}Λ_τ$, one obtains $ζ_{τ'}(z/s)=sζ_τ(z)$. The period 1 on the left corresponds to the period $s=d+cτ$ on the right. Additivity of the quasi-periods and step 1.1 therefore yield $$G_2(τ')=s(dη_1+cη_τ)=s^2G_2(τ)-2πics.$$ For k≥2 the absolutely convergent lattice definition directly gives $G_{2k}(τ')=s^{2k}G_{2k}(τ)$. Holomorphy follows locally from normal convergence; the period difference defining $G_2$ is likewise holomorphic. These formulas establish the anomalous $G_2$ term with its exact sign and normalization. [step 1.1, algebra]

3.1 For the second identity, use step 2.1 and the same conjugation formula. The $m=−2$ term has the factor s, while each $m=2k$ term has the factor $s^{-2k-1}s^{2k+2}=s$. Thus the exact vector identity is $$Q_{A_Vu,τ'}Aw=sA Q_{u,τ}w.$$ Every sum is finite on w, so this calculation involves no interchange of an infinite series of vectors. Applying F at τ' proves $F_g(Q_{u,τ}w;τ)=0$. [F1, step 2.1, step 1.2, algebra]

4.1 The Virasoro conjugation formula and the anomalous $G_2$ formula give the exact identity $$D_{τ'}Aw=s^2 A D_τw+2πics A L(0)w.$$ Indeed the L(-2) term has factor s²; the k≥1 terms have $G_{2k+2}(τ')s^{-2k}=s²G_{2k+2}(τ)$; and the remaining $G_2$ anomaly is precisely the displayed extra L(0) term. Since $dτ'/dτ=s^{-2}$, the chain rule and the third Ward identity for F imply $$\begin{aligned} 2πi\partial_τ F_g(w;τ) &=-\frac{2πic}{s}F(A L(0)w;τ')+s^{-2}F(D_{τ'}Aw;τ')\\ &=F(A D_τw;τ')=F_g(D_τw;τ). \end{aligned}$$ The two anomalous terms cancel exactly. This proves the third identity and completes the modular-covariance assertion, including generalized L(0) and all choices of a fixed branch. [F1, step 2.1, step 1.2, algebra] ∎
