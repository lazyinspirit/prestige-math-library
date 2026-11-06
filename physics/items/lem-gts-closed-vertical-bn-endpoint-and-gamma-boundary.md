---
id: lem-gts-closed-vertical-bn-endpoint-and-gamma-boundary
kind: lemma
title: "The closed vertical Brill--Noether interval and its Gamma boundary"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
deps:
  - thm-gts-ordinary-sheaf-bogomolov-gieseker-inequality
  - lem-gts-rational-slope-tilt-heart-noetherianity
  - lem-gts-bg-zero-denominator-gives-tilt-hn-duality-and-second-heart
  - lem-gts-rational-tilt-discriminant-and-numerical-support
  - lem-gts-exact-numerical-wall-line-transport
  - def-chern-character-and-todd-class
  - def-axiom-of-choice
  - lem-gts-tilt-derived-dual-truncation-and-finite-saturation
  - thm-grothendieck-riemann-roch-for-projective-morphisms
  - thm-serre-duality-smooth-projective-variety-locally-free-sheaves
dependency_roles:
  thm-gts-ordinary-sheaf-bogomolov-gieseker-inequality: mathematical-premise
  lem-gts-rational-slope-tilt-heart-noetherianity: mathematical-premise
  lem-gts-bg-zero-denominator-gives-tilt-hn-duality-and-second-heart: mathematical-premise
  lem-gts-rational-tilt-discriminant-and-numerical-support: mathematical-premise
  lem-gts-exact-numerical-wall-line-transport: mathematical-premise
  def-chern-character-and-todd-class: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  lem-gts-tilt-derived-dual-truncation-and-finite-saturation: mathematical-premise
  thm-grothendieck-riemann-roch-for-projective-morphisms: mathematical-premise
  thm-serre-duality-smooth-projective-variety-locally-free-sheaves: mathematical-premise
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
    - title: "Bayer, Macrì and Stellari, The space of stability conditions on abelian threefolds, and on some Calabi–Yau threefolds"
      url: https://arxiv.org/pdf/1410.1585v2
      locator: "§§2–3 in full, printed pp.7–13, especially the rational discriminant induction and Lemma 3.9/Corollary 3.10. The closed vertical and Gamma propagation arguments are reconstructed locally."
category: string-theory
page: gts-bridgeland-stability-dt-frontiers
reference: items/lem-gts-closed-vertical-bn-endpoint-and-gamma-boundary.md
dependency_level: 4
---

## Statement

Let $X$ be a smooth integral projective complex threefold, $H$ an ample Cartier divisor, $v=H^3$, and suppose $K_X$ is numerically trivial. Assume the Axiom of Choice, as used in the coherent-heart suppliers. Put $C_0=v\operatorname{rk}$, $C_1=H^2\operatorname{ch}_1$, $C_2=H\operatorname{ch}_2$, and $\Delta=C_1^2-2C_0C_2$. Let $\mathcal B_b$ be the first slope heart and use the source slope $\nu_{b,w}=(C_2-wC_0)/(C_1-bC_0)$, with slope $+\infty$ on zero denominators. Ordinary sheaf BG is supplied by [[thm-gts-ordinary-sheaf-bogomolov-gieseker-inequality]]. Assume the additional strict ordinary condition $\mathrm{BG}_3(\epsilon)$ for some $\epsilon>0$: every $\mu_H$-stable torsion-free coherent sheaf $F$ with $0<\mu_H(F)=C_1(F)/C_0(F)\le\epsilon$ satisfies $C_2(F)<-C_1(F)/2$. This strict condition is a hypothesis here and is not asserted for arbitrary threefolds.

Call $E$ vertically BN-semistable if $E\in\mathcal B_0$, $D=C_1(E)>0$, and there is $w_0>0$ such that the same $E$ is $\nu_{0,w}$-semistable for every $0<w<w_0$. For every such object with $-1/2\le\nu_{BN}(E)=C_2(E)/D\le1/2$, including the positive endpoint $+1/2$,

$$h^0(E)\le\operatorname{rk}(E)+\frac{D}{v\epsilon},\qquad h^2(E)\le-\operatorname{rk}(E)+\frac{D}{v\epsilon},\qquad \chi(E)\le\frac{2D}{v\epsilon}.$$

Here $h^j(E)=\dim_\mathbb C\operatorname{Hom}(\mathcal O_X,E[j])$ denotes hypercohomology, not a cohomology sheaf.

Set $t_0=\operatorname{td}_2(X)H/v$, choose rational $\gamma\ge4/(v\epsilon)+|t_0|$, and put $\Gamma=\gamma H^2-\operatorname{td}_2(X)$ and $g=\Gamma H/v=\gamma-t_0\ge0$. For any parameter put $s=C_1-bC_0$, $t=C_2-bC_1+b^2C_0/2$, $u=\operatorname{ch}_3^b-\Gamma\operatorname{ch}_1^b$, and

$$Q^\Gamma_{b,w}=(2w-b^2)(\Delta+3gC_0^2)+2t(2t-3gC_0)-6su.$$

Then $Q^\Gamma_{0,0}(E)\ge0$. No semistability in a full neighborhood of $(0,0)$ is assumed.

## Statement references

[[thm-gts-ordinary-sheaf-bogomolov-gieseker-inequality]]

[[lem-gts-rational-slope-tilt-heart-noetherianity]]

[[lem-gts-bg-zero-denominator-gives-tilt-hn-duality-and-second-heart]]

[[lem-gts-rational-tilt-discriminant-and-numerical-support]]

[[lem-gts-exact-numerical-wall-line-transport]]

[[def-chern-character-and-todd-class]]

[[def-axiom-of-choice]]

[[lem-gts-tilt-derived-dual-truncation-and-finite-saturation]]

[[thm-grothendieck-riemann-roch-for-projective-morphisms]]

[[thm-serre-duality-smooth-projective-variety-locally-free-sheaves]]

## Facts & Assumptions

[A1] The strict ordinary $\mathrm{BG}_3(\epsilon)$ condition is an explicit mathematical hypothesis. The Axiom of Choice is inherited through the actual coherent-heart, HN and duality suppliers. All new statements remain research candidates; this file supplies no acceptance or native gate coverage.

[F1] The precise dependencies are [[thm-gts-ordinary-sheaf-bogomolov-gieseker-inequality]], [[lem-gts-rational-slope-tilt-heart-noetherianity]], [[lem-gts-bg-zero-denominator-gives-tilt-hn-duality-and-second-heart]], [[lem-gts-rational-tilt-discriminant-and-numerical-support]], [[lem-gts-exact-numerical-wall-line-transport]], [[def-chern-character-and-todd-class]], [[def-axiom-of-choice]], [[lem-gts-tilt-derived-dual-truncation-and-finite-saturation]], [[thm-grothendieck-riemann-roch-for-projective-morphisms]], [[thm-serre-duality-smooth-projective-variety-locally-free-sheaves]]. The heart, rational-parameter HN, finite-part duality, tilt-discriminant/support and exact same-object numerical-line transport interfaces are used as stated. At fixed rational $b$, the finite-numerical-class argument is the support-plus-discrete-lattice argument of the discriminant supplier; no two-parameter deformation theorem is presumed.

## Proof

**Given:** Exactly the Statement hypotheses and conventions.

1.1 We prove the precise strict-BG consequence used below. Suppose a positive-rank first-heart object E is semistable at (0,w), $w>0$, and $0<μ(E)=D/r≤ε$ but C₂(E)≥−D/2. Choose such a counterexample with lexicographically least (Δ,D), where Δ≥0 is an integer by the actual tilt-discriminant supplier and $D>0$ is an integer. At an equal-finite-phase split $E=A+B$, both denominators $D_{i}$ are positive and add to D. The weighted identity $r/D=\sum (D_{i}/D)(r_{i}/D_{i})$ selects a factor with $r_{i}/D_{i}≥r/D>0$, so $0<μ_{i}≤μ$. Its numerical line is $C_{2,i}=νD_{i}+w r_{i}$. Since $w>0$ and $μ_{i}≤μ, C_{2,i}/D_{i}=ν+w/μ_{i}≥ν+w/μ=C_2/D≥−1/2$. It is another counterexample. At this fixed ray put $a=2w$ and $ℓ=ν$. The identity $Δ=(1+ℓ^{2}/a)D^{2}−a(r+ℓD/a)^{2}$ identifies the $Δ≥0,D>0$ cone with a forward two-dimensional Lorentz cone. Its bilinear polarization satisfies ⟨x,y⟩≥sqrt(Δ(x)Δ(y)), with equality only for proportional nonzero vectors unless one is null; a timelike vector pairs strictly positively with every nonzero future vector. Therefore each nonzero factor has strictly smaller Δ than a positive-Δ sum. If the total Δ is zero, both factors are proportional null vectors, and the selected factor has smaller positive D. Either contradicts the minimum, so this minimum has no proper equal-finite-phase split. Its semistable parameter set in $w>0$ is closed by its fixed first-heart subobject inequalities. It is also open: the uniform tilt-discriminant support bound on each compact positive w interval and the old/new slope inequalities bound the numerical triples of possible nearby first destabilizing HN factors, exactly as in the discriminant supplier. There are finitely many such triples; loss of semistability would force an equal-finite-phase split at one of their equality parameters. Null subobjects are absent independently of w; equal-denominator subobjects have null quotients and cannot destabilize at any w. Thus the minimum is semistable for every $w>0$. The actual large-parameter classification makes this positive-rank object an ordinary μ-semistable torsion-free sheaf. Take its finite ordinary stable-factor filtration, all of slope μ, and choose a factor J with C₂(J)/r(J) at least the rank-weighted average C₂(E)/r(E). Then C₂(J)≥−D(J)/2 and Δ(J)≤(r(J)/r(E))²Δ(E). A proper rank fraction lowers Δ when $Δ(E)>0$, or lowers D when $Δ(E)=0$. If there is just one factor, E itself is stable. In every case minimality yields an ordinary μ-stable counterexample with $0<μ≤ε$, contradicting the stated strict BG₃(ε) hypothesis. Consequently every positive-rank tilt-semistable object at (0,w) in that small slope interval satisfies $C_2<−D/2$. This establishes the implication with all rank selection and strict descent inequalities, without a full BMT or flatness input. [given, A1, F1, algebra]

2.1 Consequently a NEGATIVE-rank G semistable at (0,w), with $C₁(G)>0$ and $ν_{\mathrm{BN}}(G)≤1/2$, has $μ(G)<−ε$. Indeed if $−ε≤μ(G)<0$, its actual truncated finite-part dual has positive slope −μ(G)≤ε, first coordinates (−C₀,C₁,−C₂), and is semistable at the same parameter. The preceding strict inequality gives $ν_{\mathrm{BN}}(G)>1/2$, contradiction. Hence rk(G)≥−C₁(G)/(vε); for nonnegative rank the same bound is automatic. [given, A1, F1, step 1.1, algebra]

3.1 For rational $b>0, O_{X}[1]$ is weak-tilt-stable at every $w>b^{2}/2$. One direct proof avoids any classification of flat bundles. If unstable, its last HN quotient is $Q=G[1]$, with a coherent sequence $0→F→O_{X}→G→T→0, G$ torsion-free in $F_{b}$ and $T∈T_{b}$. The map $O_{X}→G$ is nonzero (otherwise $G=T$ would lie in both parts of the torsion pair), hence injective. Positive rank or divisorial degree of T makes $μ(G)>0$; if $μ(G)=0$ then T has codimension≥2 and rank $G=1$, so reflexivity of $O_{X}$ gives $O_{X}⊂G⊂G**=O_{X}$ and Q is not proper. A proper finite-phase quotient thus has $0<μ(G)<b$. Put $a=2w−b^{2}$ and $y=C_{0}(G)/d_{b}(Q)>1/b$. Tilt Δ(Q)≥0 gives $λ_{a}(Q)≥−1/(2y)+ay/2>−b/2+a/(2b)=λ_{a}(O_{X}[1])$, contradicting a smaller-slope last quotient. The same inequality excludes proper equal-finite-phase quotients, proving strict weak stability; null quotients have infinite slope and do not obstruct it. [given, A1, F1, step 2.1, algebra]

4.1 At such a point write $S=O_{X}[1]$. A same-finite-phase semistable subobject $A⊂S^{h}$ is $S^{k}$. For a nonzero coordinate projection A→S, its image has phase at least that of A and at most that of S, hence the same phase. Stability of S makes its cokernel zero or numerically zero; the latter is zero-dimensional and impossible because $\operatorname{Hom}(S,T)=\operatorname{Ext}⁻¹(O_{X},T)=0$ for a coherent zero-dimensional T. Thus the projection is onto S. Its kernel is a same-phase subobject of $S^{h−1}$; induct. The extension splits because its pushout along the kernel's embedding in $S^{h−1}$ is the split ambient extension, and that embedding is a constant matrix with a constant left inverse (End $S=H⁰(O_{X})=C$). Hence $A=S^{k}$. No assertion that every numerically flat bundle is trivial is used. [given, A1, F1, step 3.1, algebra]

5.1 Let E have positive C₁ and be vertically BN-semistable: E∈B₀ and semistable for every $0<w<w_{0}$. Then $\operatorname{Hom}(S,E)=0$ because S∈C₀ and E has finite slope there. For $W=\operatorname{Hom}(O_{X},E)$, the evaluation cone C fits 0→E→C→S⊗W→0 in B₀ and, whenever E belongs to $B_{b}$, also in $B_{b}$. Applying Hom(S,−) to the evaluation triangle shows $\operatorname{Hom}(S,C)=0$: its preceding term Hom(S,E) is zero and its next map is the injective evaluation inclusion $W→\operatorname{Hom}(O_{X},E)$. [given, A1, F1, step 4.1, algebra]

6.1 At a $B_b$ point where E is semistable with slope $ν_{E}<ν_{S}=s$, the cone's finite HN factors have slopes in $[ν_{E},s]$. Its upper endpoint is STRICT. If a highest semistable factor A has slope s, take its image I in $S^{h}$. Semistability gives ν(I)≥s from its quotient of A and ν(I)≤s from its subobject of $S^{h}$; I cannot be null, since $S^{h}$ is finite-slope semistable. Thus I has phase s. The kernel K is zero or a same-phase semistable positive-denominator object: a null kernel is excluded by finite-slope semistability, and charge additivity handles the positive case. Its inclusion into E is impossible by strict phase orthogonality. Therefore A embeds into $S^{h}$ and is $S^{k}$ by the preceding paragraph, contradicting $\operatorname{Hom}(S,C)=0$. This supplies the actual kernel argument behind the strict upper slope, not the invalid inference that $\operatorname{Hom}(A,E)=0$ alone makes $A→S^{h}$ injective. [given, A1, F1, step 5.1, algebra]

7.1 Put $D=C₁(E)>0, r=C_{0}(E), ν=C_2(E)/D∈[−1/2,1/2]$. Choose a positive rational $η<\operatorname{min}(1/4,1/(8D))$ and set $s=\operatorname{max}(ν,0)+η$. Choose rational $b>0$ sufficiently small and $w=bs$. The line of E through (b,w) crosses $b=0$ at $c_{E}=bD(s−ν)/(D−br)>0$, [given, A1, F1, step 6.1, algebra]

8.1 which is less than w₀ for small b. Its two endpoints $(0,c_{E})$ and (b,bs) are above the parabola and belong to the same open line segment. Exact numerical-line transport therefore makes the SAME E semistable at (b,bs), without assuming full-neighborhood BN semistability. Its slope is $ν_{E}=(νD−bsr)/(D−br)$, and $s−ν_{E}=D(s−ν)/(D−br)>0$. [given, A1, F1, step 7.1, algebra]

9.1 Take the cone HN filtration there. Each factor $G_{i}$ has $ν_{E}≤ν_{i}<s$ and positive $d_{b}$. Its numerical line has strictly positive intercept $c_{i}=b(s−ν_{i})$, bounded by bD(s−ν)/(D−br), which tends to zero as b does. Both 0 and b are in this line's upper-parabola interval, so exact line transport makes $G_{i}$ an actual semistable object in B₀ at $w_{i}=c_{i}>0$, with $D_{i}=C₁(G_{i})>0$. All original HN triangles become triangles of B₀ objects by extension closure, hence a finite filtration of the SAME cone there. Its positive integers $D_{i}$ sum to D. [given, A1, F1, step 8.1, algebra]

10.1 Write $q_{i}=C_2(G_{i})/D_{i}$ and $x_{i}=C_{0}(G_{i})/D_{i}$. The line equation gives $q_{i}=ν_{i}+c_{i} x_{i}$. If $x_{i}≤0, q_{i}<s$. If $x_{i}>0$ and $q_{i}>0, Δ(G_{i})≥0$ gives $2x_{i}q_{i}≤1$ and therefore $q_{i}≤[ν_{i}+\sqrt{ν_{i}^{2}+2c_{i}}]/2$
        ≤[s+sqrt(s²+2 max $c_{i})]/2<s+η$ [given, A1, F1, step 9.1, algebra]

11.1 for sufficiently small fixed b. Nonpositive $q_{i}$ also satisfy this upper bound. Hence every factor has $q_{i}<\operatorname{max}(ν,0)+2η≤1/2+2η$. But $2C_2(G_{i})$ is integral, and $1≤D_{i}≤D$. If $q_{i}>1/2$, then $q_{i}−1/2≥1/(2D_{i})≥1/(2D)$, contradicting $2η<1/(4D)$. Thus EVERY factor satisfies $q_{i}≤1/2$, including when $ν(E)=1/2$. This is a finite argument at one chosen b; there is no limiting HN filtration or exchange of a limit and a sum. [given, A1, F1, step 10.1, algebra]

12.1 Section 1 bounds every factor's rank by $−D_{i}/(vε)$. Summing the actual finite filtration gives h⁰(E)≤rk(E)+D/(vε). [given, A1, F1, step 11.1, algebra]

13.1 The argument applies to vertically BN-semistable E of EITHER sign ν, throughout the closed interval [−1/2,1/2]. The intercept construction, not an asserted BN-stability of the cone, supplies the needed positive-parameter factors. [given, A1, F1, step 12.1, algebra]

14.1 Assume $K_{X}$ is numerically trivial. Apply the same result to $G=τ≤0 \operatorname{RHom}(E,K_{X})[1]$. The actual finite-part duality gives $C_{0}(G)=−C_{0}(E), C₁(G)=D, C_2(G)=−C_2(E)$ and vertical semistability at all sufficiently small w. Tensor by the numerical canonical line preserves the heart and numerical slope. Its zero-dimensional defect triangle $G→\operatorname{RHom}(E,K_{X})[1]→T[−1]$ makes $\operatorname{Hom}(O_{X},G)=\operatorname{Hom}(O_{X},\operatorname{RHom}(E,K_{X})[1])$, because the two relevant negative Hom groups of T vanish. The locally-free smooth Serre-duality supplier extends here to the required bounded coherent complex without an extra theorem premise: on smooth projective X take a bounded locally-free resolution, apply the supplied trace pairings termwise, and totalize their finite cohomology complexes. Naturality with respect to the differentials gives the perfect pairing of the two total complexes; its cohomology pairs degree 1 of $\operatorname{RHom}(E,K_{X})$, equivalently degree zero of $\operatorname{RHom}(E,K_{X})[1]$, with degree 2 of RΓ(E), since dim $X=3$. Thus it identifies this Hom space with $\operatorname{Ext}^{2}(O_{X},E)*$. Hence h²(E)≤−rk(E)+D/(vε). [given, A1, F1, step 13.1, algebra]

15.1 Explicitly, hypercohomology $h⁻¹(E)=\operatorname{dim} \operatorname{Hom}(O_{X}[1],E)=0$ and $H³(E)*=\operatorname{Hom}(E,K_{X})=0$ by negative heart Hom to $K_{X}[1]∈B_{0}$; all other cohomology outside degrees0,1,2 vanishes. Thus χ(E)≤h⁰(E)+h²(E)≤2D/(vε). This use of BOTH rank bounds is why full-neighborhood BN stability and its below-O-line Ext² vanishing are unnecessary. [given, A1, F1, step 14.1, algebra]

16.1 Let $t=td₂(X)H/v$, choose rational γ≥4/(vε)+|t|, and put $Γ=γH^{2}−td₂(X), g=ΓH/v=γ−t≥0$. RR gives $χ(E)=ch₃(E)+td₂(X)ch₁(E)$, so $U=ch₃(E)−Γch₁(E)≤(2/(vε)−γ)D$. The CORRECT boundary quadratic form includes its Γ-rank term: $Q^Γ_{0,0}/2=2C_2^{2}−3g$ C₀C₂−3DU. [given, A1, F1, step 15.1, algebra]

17.1 Tilt Δ≥0 gives C₀C₂≤D²/2 for either sign. Consequently $Q^Γ_{0,0}/2≥2C_2^{2}+(3/2)(γ+t−4/(vε))D^{2}≥0$. [given, A1, F1, step 16.1, algebra]

18.1 This proves the boundary for ALL vertically BN-semistable E with positive D and $|ν_{\mathrm{BN}}|≤1/2$. It supersedes the weaker full-neighborhood and zero-only boundaries for the global propagation. No projectively-flat equality theorem is needed.
 [given, A1, F1, step 17.1, algebra] ∎
