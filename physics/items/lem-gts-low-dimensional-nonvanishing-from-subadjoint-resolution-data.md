---
id: lem-gts-low-dimensional-nonvanishing-from-subadjoint-resolution-data
kind: lemma
title: "Low-dimensional nonvanishing from exact subadjoint resolution data"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
deps:
  - lem-gts-log-adjoint-vanishing-on-snc-pairs
  - lem-gts-curve-nef-ample-perturbation-by-nakai-construction
  - thm-hodge-index-theorem-for-smooth-projective-surfaces
  - thm-riemann-roch-for-smooth-projective-surfaces
  - thm-riemann-roch-euler-characteristic-curve
  - thm-serre-duality-smooth-projective-variety-locally-free-sheaves
  - thm-serre-vanishing
  - thm-serre-criterion-ampleness
  - thm-leray-spectral-sequence-for-sheaf-cohomology
  - lem-projection-formula-invertible-twist
  - thm-proper-pushforward-coherent
  - lem-normal-noetherian-domain-intersection-of-height-one-localizations
  - def-axiom-of-choice
dependency_roles:
  lem-gts-log-adjoint-vanishing-on-snc-pairs: mathematical-premise
  lem-gts-curve-nef-ample-perturbation-by-nakai-construction: mathematical-premise
  thm-hodge-index-theorem-for-smooth-projective-surfaces: mathematical-premise
  thm-riemann-roch-for-smooth-projective-surfaces: mathematical-premise
  thm-riemann-roch-euler-characteristic-curve: mathematical-premise
  thm-serre-duality-smooth-projective-variety-locally-free-sheaves: mathematical-premise
  thm-serre-vanishing: mathematical-premise
  thm-serre-criterion-ampleness: mathematical-premise
  thm-leray-spectral-sequence-for-sheaf-cohomology: mathematical-premise
  lem-projection-formula-invertible-twist: mathematical-premise
  thm-proper-pushforward-coherent: mathematical-premise
  lem-normal-noetherian-domain-intersection-of-height-one-localizations: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
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
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
  - title: Kawamata, Subadjunction of Log Canonical Divisors for a Subvariety of Codimension 2, v1 Theorems 1 and
      6; exact resolution data only
    url: https://arxiv.org/pdf/alg-geom/9511015v1
    locator: 'arXiv:alg-geom/9511015v1, complete printed pp. 1–7 read: Theorem 1; §1 Lemmas 2–3, Theorems 4 and
      6; proof of Theorem 1 p. 6. The affine klt replacement is not imported projectively.'
  - title: Mella, Existence of good divisors on Mukai varieties, v1 Lemma 2.1 and Theorem 2.2
    url: https://arxiv.org/pdf/alg-geom/9705012v1
    locator: 'arXiv:alg-geom/9705012v1, complete printed pp. 1–10 read, especially §2 pp. 4–8: Lemma 2.1 and Theorems
      2.2–2.5. This is source context; the present proof reconstructs its actual stated interface locally.'
category: string-theory
page: gts-bridgeland-stability-dt-frontiers
reference: items/lem-gts-low-dimensional-nonvanishing-from-subadjoint-resolution-data.md
dependency_level: 2
---

## Statement

Let W be a normal integral projective complex surface, A an ample Cartier divisor, and ν:V→W a projective resolution which is an isomorphism off finitely many points. Assume V is smooth, and the union of its exceptional curves and Supp Δ is simple normal crossing. Suppose Δ is a rational divisor with every coefficient strictly less than one, $D=ν_*Δ$ is effective, M is a curve-nef rational Cartier divisor on V, and a is positive rational, with

    $K_{V}+Δ+M ∼_{Q}$ −a $ν^*A$.

The divisor Δ is allowed negative exceptional coefficients. No effectivity of Δ on V, Q-Cartierness of $K_{W}$ alone, rational singularity theorem, or global klt boundary on W is assumed. The conclusion is

    $H^{i}(W,O_{W}(nA))=0  (i>0,n≥0),
    h⁰(W,A)=χ(W,A)≥1+(1+a)A^{2}/2>0$.

For the target fourfold index-two codimension-two centre, the actual supplied relation has $a=2−γ≥1$ when G≡γA and γ≤1. This is the only surface case used here.


For a normal integral projective curve W with ample Cartier A, assume $K_{W}+D+M≡−aA$, with D effective, M curve-nef and rational a satisfying $a\cdot\deg A>-2$. Then $h⁰(W,A)>0$, including $a=0$. A reduced point satisfies $h⁰(A|W)=1$.

Assume the Axiom of Choice as inherited through the coherent-cohomology suppliers. The conclusion is nonvanishing on W; ambient restriction-surjectivity is a separate obligation.

## Statement references

[[lem-gts-log-adjoint-vanishing-on-snc-pairs]]

[[lem-gts-curve-nef-ample-perturbation-by-nakai-construction]]

[[thm-hodge-index-theorem-for-smooth-projective-surfaces]]

[[thm-riemann-roch-for-smooth-projective-surfaces]]

[[thm-riemann-roch-euler-characteristic-curve]]

[[thm-serre-vanishing]]

[[thm-leray-spectral-sequence-for-sheaf-cohomology]]

[[lem-projection-formula-invertible-twist]]

[[thm-proper-pushforward-coherent]]

[[lem-normal-noetherian-domain-intersection-of-height-one-localizations]]

[[def-axiom-of-choice]]

## Facts & Assumptions

[A1] All subadjoint resolution data are explicit hypotheses. This lemma constructs no lc centre, subadjunction formula or ambient restriction-surjectivity. It assumes the Axiom of Choice through the supplied coherent-cohomology interfaces.

[F1] [[thm-serre-criterion-ampleness]] supplies eventual global generation of coherent ample twists, including the nonzero ideal $I^{N}(kA)$ in step 3.1. The other precise suppliers are [[lem-gts-log-adjoint-vanishing-on-snc-pairs]], [[lem-gts-curve-nef-ample-perturbation-by-nakai-construction]], [[thm-hodge-index-theorem-for-smooth-projective-surfaces]], [[thm-riemann-roch-for-smooth-projective-surfaces]], [[thm-riemann-roch-euler-characteristic-curve]], [[thm-serre-vanishing]], [[thm-leray-spectral-sequence-for-sheaf-cohomology]], [[lem-projection-formula-invertible-twist]], [[thm-proper-pushforward-coherent]], [[lem-normal-noetherian-domain-intersection-of-height-one-localizations]], [[def-axiom-of-choice]]. Vanishing is applied only on smooth V to an effective SNC boundary with coefficients below one and ample adjoint difference. Hodge index and the exact public numerical criterion proved by [[lem-gts-curve-nef-ample-perturbation-by-nakai-construction]] construct the exceptional ample perturbation; no separate root draft Nakai item is imported. Smooth RR and the actual coherent Leray/projection interfaces give the Cartier Euler-difference calculation, without invoking a singular RR or rational-singularity theorem.

[F2] [[thm-serre-duality-smooth-projective-variety-locally-free-sheaves]] gives, for smooth projective $W/\mathbb C$ of dimension one and $E=\mathcal O_W$, perfect pairings $H^q(W,\mathcal O_W)\times H^{1-q}(W,\omega_W)\to\mathbb C$, $q=0,1$, with $\omega_W=\Omega^1_{W/\mathbb C}$. We use this only for the curve case, together with the Euler-characteristic curve Riemann–Roch supplier.

## Proof

**Given:** Exactly the explicit resolution data or curve data of the Statement.

1.1 Let $E_{1},...,E_{r}$ be the exceptional curves. Their intersection matrix Q is negative definite. Here is the needed construction from Hodge index, rather than an unmentioned contraction theorem. The pullback $B=ν^*A$ has $B^{2}=A^{2}>0$ and $B E_{i}=0$. Hodge index (equivalently its signature on numerical divisor classes) makes the quadratic form nonpositive on combinations of the $E_{i}$. Off-diagonal entries of Q are nonnegative, since distinct curves on the smooth surface have nonnegative local intersection multiplicities. If a nonzero coefficient vector z had $z^{T}Qz=0$, replacing z by |z| could only increase this quadratic form. It would remain zero by nonpositivity. Hodge index would then make the effective nonzero divisor $\sum |z_{i}|E_{i}$ numerically zero, impossible since it has positive intersection with an ample divisor on V. Thus Q is negative definite even as a matrix on the exceptional coefficient vectors. [given, A1, F1, algebra]

2.1 Put $B_{0}=−Q$. Its off-diagonal entries are nonpositive and it is positive definite. The unique minimizer of 1/2 $x^T B_0x-\sum x_i$ has no negative coordinate: replacing x by |x| cannot increase the quadratic term and strictly reduces the linear term if a coordinate is negative. Its equation is $B_{0}x=1$; no coordinate can be zero, since that row would have nonpositive left side. Hence $x_{i}>0$ for every i, and x is rational since Q is an integral invertible matrix. Clearing denominators gives a positive integral exceptional divisor E with $E E_{i}<0$ for every i. [given, A1, F1, step 1.1, algebra]

3.1 Here is a direct absolute ampleness construction, avoiding a relative numerical criterion. Choose an integer N larger than all coefficients of E, and let I be the ideal of the finite image of the exceptional locus. For k sufficiently large, the ample global-generation criterion gives a nonzero section of $I^{N}(kA)$, defining an effective F∈|kA|. Every exceptional valuation of the pullback of I is a positive integer, so $ν^*F−E$ is effective. For every nonexceptional curve C not a component of $ν^*F−E$ this implies $E C≤kν^*A C$. For the finitely many nonexceptional curve components of that divisor, the denominators $ν^*A C$ are strictly positive; enlarge k to a real bound $k_{0}$ for all their ratios $E C/(ν^*A C)$ as well. Thus $ν^*A−δE$ has positive intersection with every nonexceptional curve when $δk_{0}<1$, and with each exceptional curve because $E E_{i}<0$. Its square is $A^{2}+δ^{2}E^{2}>0$ for sufficiently small δ. The actual projective Nakai--Moishezon criterion on the smooth surface V makes $ν^*A−δE$ ample. Scaling gives $aν^*A−δE$ ample for sufficiently small δ. If there are no exceptional curves, take $E=0$ and use that ν is an isomorphism. [given, A1, F1, step 2.1, algebra]

4.1 Put $P=\operatorname{ceil}(−Δ)$, with coefficientwise rounding. Because $ν_*Δ≥0$ and all coefficients of Δ are $<1$, $P$ is an effective integral exceptional divisor. The coefficients of Δ+P lie in [0,1). Choose $δ>0$ sufficiently small that $aν^*A−δE$ is ample and $Γ=Δ+P+δE$ has every coefficient $<1$. It is effective and simple normal crossing by the resolution hypothesis. [given, A1, F1, step 3.1, algebra]

5.1 For every integer n≥0, the Cartier divisor $T_{n}=P+nν^*A$ satisfies $T_{n}−K_{V}−Γ ∼_{Q} (n+a)ν^*A+M−δE$. [given, A1, F1, step 4.1, algebra]

6.1 The right side is ample: $aν^*A−δE$ is ample, and $nν^*A+M$ is curve-nef. Apply the actual SNC log-adjoint vanishing supplier on the SMOOTH V to obtain $H^{i}(V,O_{V}(T_{n}))=0$ for every $i>0$. Notice both the sign +δE in Γ and the rounding P; applying smooth vanishing directly to a possibly negative Δ would be invalid. No global klt replacement of M on W is used. [given, A1, F1, step 5.1, algebra]

7.1 Normality gives $ν_*O_{V}(P)=O_{W}$. Indeed a local rational function with divisor at least −P on V has no pole along any codimension-one point of W, because P is exceptional; the codimension-one characterization of regular functions on a normal variety makes it regular on W. Conversely regular functions pull back regularly and P is effective. [given, A1, F1, step 6.1, algebra]

8.1 The coherent sheaf $R¹ν_*O_{V}(P)$ is supported at finitely many points. For sufficiently large n, Serre vanishing gives $H¹(W,O_{W}(nA))=H^{2}(W,O_{W}(nA))=0$. Projection formula and the low-degree Leray sequence then identify $H⁰(W,R¹ν_*O_{V}(P)⊗O_{W}(nA))$ with $H¹(V,O_{V}(P+nν^*A))=0$. A nonzero coherent sheaf of finite support has a nonzero global section after every line-bundle twist. Therefore $R¹ν_*O_{V}(P)=0$. [given, A1, F1, step 7.1, algebra]

9.1 For every n≥0, the same Leray sequence injects $H¹(W,O_{W}(nA))$ into $H¹(V,O_{V}(T_{n}))$, and, since R¹ has vanished, injects $H^{2}(W,O_{W}(nA))$ into $H^{2}(V,O_{V}(T_{n}))$. Both targets vanish by Section 2. This proves all the claimed cohomology vanishings. Since W is integral proper over $C$, $H^0(W,O_W)=C$, and therefore $χ(O_{W})=1$. This deduction proves exactly what is needed and does not label W rational or assert an unproved local rational-singularity theorem. [given, A1, F1, step 8.1, algebra]

10.1 Use the ordinary smooth-surface Riemann–Roch formula on V for $ν^*A$. The higher direct images $R^{j}ν_*O_{V}$ are supported at finitely many points for every $j>0$. By projection formula, twisting by A does not change their lengths. The Leray Euler formula therefore cancels these finite-support corrections in the difference and gives $χ(W,A)−χ(W,O_{W})
      =χ(V,ν^*A)−χ(V,O_{V})
      =1/2 ν^*A(ν^*A−K_{V})$. [given, A1, F1, step 9.1, algebra]

11.1 This difference formula requires only that A be Cartier; it does not assume $K_{W}$ Q-Cartier or use a singular Riemann–Roch theorem. From the exact subadjoint relation, $K_{V} ν^*A=−aA^{2}−Δν^*A−Mν^*A≤−aA^{2}$. [given, A1, F1, step 10.1, algebra]

12.1 Indeed $Δν^*A=D$ A≥0 because D is effective, while $Mν^*A≥0$ because both are nef (or approximate $ν^*A$ by ample divisors). Thus χ(W,A)≥1+(1+a)A²/2. Section 3 gives $h⁰(W,A)=χ(W,A)$, proving the positive section count and the desired nonvanishing. [given, A1, F1, step 11.1, algebra]

13.1 Let W instead be a normal integral projective curve and A an ample Cartier divisor on W. A normal curve over C is smooth: its one-dimensional normal local rings are discrete valuation rings, hence regular, and C has characteristic zero. Put $g=h^1(W,\mathcal O_W)$ and choose a canonical divisor $K_W$ with $\mathcal O_W(K_W)=\omega_W$. Since $W$ is integral projective, $h^0(\mathcal O_W)=1$. F2 gives $h^0(\omega_W)=g$ and $h^1(\omega_W)=1$. Applying curve Euler-characteristic Riemann–Roch to $K_W$ yields $g-1=\chi(\omega_W)=\deg K_W+1-g$, so $\deg K_W=2g-2$. Suppose the actual subadjoint relation is $K_{W}+D+M≡−aA$ with D effective, M nef, and rational a satisfying $a\cdot\deg A>-2$. Taking degrees gives 2g(W)−2≤−$a\cdot\deg A<2$, hence g(W)≤1 because 2g(W)−2 is an even integer. Curve Riemann–Roch gives h⁰(W,A)≥deg $A+1−g(W)>0$ because deg A is a positive integer. This includes the index-one threefold endpoint $γ=1$, for which $a=1−γ=0$; strict log-Fano positivity must not be falsely claimed there. It also covers curve centres in the fourfold case and the slight negative-a perturbation allowed by $(γ_{1}−1)\operatorname{deg} A<2$. A reduced point has $h⁰(A|W)=1$ directly. [given, A1, F1, F2, step 12.1, algebra] ∎

## Remarks

Actual source reading is the retained extracted Kawamata Theorems 1 and 6 and proof of Theorem 1, and Mella Lemma 2.1 and Theorem 2.2; no full-document reading or extraction-completeness claim is made. Kawamata's klt replacement in Theorem 1 is affine; no projective global klt replacement is asserted here. The resolution-level rounding and vanishing argument is constructed in this proof. Actual centre existence/normality, the exact resolution data, lc tie-breaking and ambient restriction-surjectivity remain separately owned inputs.
