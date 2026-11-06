---
id: lem-cft-r5-liouville-charged-ward-and-radial-overlaps
kind: lemma
title: Liouville charged Ward identities and radial overlaps
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
dependency_level: 6
proof_strategy: direct
deps:
  - def-cft-r5-liouville-probabilistic-sphere-model
  - def-cft-r5-liouville-radial-hamiltonian-data
  - def-cft-r5-liouville-spherical-conformal-blocks
  - lem-cft-r5-local-disk-gmc-uniform-inverse-moments
  - lem-cft-r5-circle-gmc-positive-and-inverse-moments
  - thm-cft-r5-radial-liouville-poisson-spectral-resolution
dependency_roles:
  def-cft-r5-liouville-probabilistic-sphere-model: mathematical-premise
  def-cft-r5-liouville-radial-hamiltonian-data: mathematical-premise
  def-cft-r5-liouville-spherical-conformal-blocks: mathematical-premise
  lem-cft-r5-local-disk-gmc-uniform-inverse-moments: mathematical-premise
  lem-cft-r5-circle-gmc-positive-and-inverse-moments: mathematical-premise
  thm-cft-r5-radial-liouville-poisson-spectral-resolution: mathematical-premise
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Guillarmou, Kupiainen, Rhodes and Vargas, Conformal Bootstrap in Liouville Theory"
      url: https://arxiv.org/pdf/2005.11530v1
      locator: "Sections 1.2–1.6 and 3–6; explicit local construction below. Actual source-reading limits are recorded in the attached research proofs; no full-paper reading is asserted."
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
---

## Statement

Use $0<\gamma<\sqrt2$, $\mu>0$, $Q=2/\gamma+\gamma/2$, and $\Delta_a=a(Q-a/2)/2$. In the finite chart write $b(z)=\log|z|_+$ for the background gauge appearing in the sphere covariance. The real Seiberg correlations exist with the charged-GMC formula, satisfy primary Möbius covariance, and their regulated stress tensor $T=Q\partial^2\phi-:(\partial\phi)^2:$ has central charge $1+6Q^2$ and the finite descendant Ward identities derived below, including the stated contact/boundary limits. The corrected conditional disk interaction gives exact reflected factorization at every strictly separated seam. The actual initial radial core is a core for the maximal free-plus-potential form and its semigroup has the corresponding Gaussian FK realization. Disk vectors are continuous in distinct positions and Hilbert-valued holomorphic in the charge neighborhoods proved below, with $e^{-B\rho}U_{a,b}\in\mathcal H$ for $a,b<Q$, $a+b>Q$ and $0<B<a+b-Q$. Their finite-descendant Poisson overlaps equal their primary overlap times $z^{|\nu|}\bar z^{|\tilde\nu|}|z|^{2(\Delta_{Q+iP}-\Delta_a-\Delta_b)}v(\Delta_a,\Delta_b,\Delta_{Q+iP},\nu)v(\Delta_a,\Delta_b,\Delta_{Q+iP},\tilde\nu)$ in the target overlap orientation. This fixes the primary incoming normalization to one and asserts no DOZZ value.

## Statement references

[[def-cft-r5-liouville-probabilistic-sphere-model]]

[[def-cft-r5-liouville-radial-hamiltonian-data]]

[[def-cft-r5-liouville-spherical-conformal-blocks]]

[[lem-cft-r5-local-disk-gmc-uniform-inverse-moments]]

[[lem-cft-r5-circle-gmc-positive-and-inverse-moments]]

[[thm-cft-r5-radial-liouville-poisson-spectral-resolution]]

## Facts & Assumptions

**Given:** Exactly the parameters, concrete Gaussian/vertex conventions and weighted-domain conditions in the Statement.

[F1] [[def-cft-r5-liouville-probabilistic-sphere-model]]: the actual dc-normalized sphere correlation, background field, vertices, Seiberg domain and weights.

[F2] [[def-cft-r5-liouville-radial-hamiltonian-data]]: the corrected conditional disk interaction, exact radial core and Fourier coordinates.

[F3] [[def-cft-r5-liouville-spherical-conformal-blocks]]: the partition order and the explicit descendant polynomial $v$.

[F4] [[lem-cft-r5-local-disk-gmc-uniform-inverse-moments]]: actual local GMC, fractional contact bounds and uniform anchored inverse moments.

[F5] [[lem-cft-r5-circle-gmc-positive-and-inverse-moments]]: circle potential moments and its finite-coordinate Gaussian tilt.

[F6] [[thm-cft-r5-radial-liouville-poisson-spectral-resolution]]: the normalized Poisson family and exact connected analytic/semigroup interfaces (S8)–(S9).

## Proof

1.1 **W1. Charged measure and the exact screening measure.** Let $a_i<Q$ be real, let $z_i$ be distinct finite points, and assume $\sum a_i>2Q$. Set $s=(\sum a_i−2Q)/γ>0$. For an open interaction region Ω containing one fixed anchor disk away from the insertions, put [F1, F2, F3, F4, F5, F6, construct, algebra]

2.1 $Z_Ω=\int _Ω \exp(γ\sum _i a_i K(z_i,x)) M_γ(dx), A(a,z)=\prod _i \exp(−4Δ_{a_i}b(z_i)) \exp(\sum _{i<j}a_i a_j K(z_i,z_j))$. [F1, F2, F3, F4, F5, F6, step 1.1, construct, algebra]

3.1 At a singularity interpret the integral as the increasing limit off disks. For negative $a_i$ it is not an increasing limit in the *charge*; charges remain fixed. The correlation is [F1, F2, F3, F4, F5, F6, step 2.1, construct, algebra]

4.1 C_Ω(a,z)= A(a,z) Γ(s)/(γ μ^s) E[Z_Ω^{-s}]. (1) [F1, F2, F3, F4, F5, F6, step 3.1, construct, algebra]

5.1 Indeed finite Gaussian tilting inserts the deterministic weights $\exp(γa_i K_ε(z_i,x))$ into the chaos. Substitution $y=μZ_ε e^{γc}$ in the c integral gives $Γ(s)/(γμ^s)Z_ε^{-s}$. This proves (1) before any limit. [F1, F2, F3, F4, F5, F6, step 4.1, construct, algebra]

6.1 Here is the needed limit argument. In annuli of radius r around $z_i$, the raw fractional moment bound gives, uniformly $ε≤r$, [F1, F2, F3, F4, F5, F6, step 5.1, construct, algebra]

7.1 $E[(\int _{\mathrm{annulus}} (|x−z_i|∨ε)^{-γa_i}M_{γ,ε}(dx))^q] ≤ C r^{ξ(q)−γa_i q}$. [F1, F2, F3, F4, F5, F6, step 6.1, construct, algebra]

8.1 Choose $q>0$ sufficiently small that $ξ(q)−γa_i q=qγ(Q−a_i)−γ^{2}q^{2}/2>0$ for every i. The innermost ε disk obeys the same estimate by rescaling the regularized covariance. Subadditivity of $t^q$ sums the annuli, with a vanishing bound for all annuli inside radius δ. Off these disks the raw $L^{2}$ convergence applies. Thus $Z_ε→Z$ in probability and all charged masses are finite almost surely. On the anchor disk their weights have a fixed positive lower bound, locally uniformly in positions and charges, hence $Z_ε≥c M_{γ,ε}(\text{anchor})$. Higher anchor inverse moments imply uniform integrability of $Z_ε^{-s}$, even after increasing s by any fixed amount. Equation (1) therefore passes to the limit, locally uniformly on the real Seiberg region. The same proof gives continuity in distinct positions and real charges. At infinity use the second coordinate chart, not a planar compactness assertion. [F1, F2, F3, F4, F5, F6, step 7.1, construct, algebra]

9.1 For m additional screening insertions define the positive measure [F1, F2, F3, F4, F5, F6, step 8.1, construct, algebra]

10.1 $ν_m(dx_{1}…dx_m)= C_Ω(a,z;γ,x_{1};…;γ,x_m) \prod _j d^{2}x_j$. [F1, F2, F3, F4, F5, F6, step 9.1, construct, algebra]

11.1 The Gaussian tilt, first with all cutoffs, identifies it with the expectation of the m-fold product of the charged random measure, multiplied by $Z^{-s-m}$ and the fixed prefactor $Γ(s+m)/(γμ^{s+m})$. In particular [F1, F2, F3, F4, F5, F6, step 10.1, construct, algebra]

12.1 ν_m(Ω^m)=μ^{-m}(s)_m C_Ω(a,z). (2) [F1, F2, F3, F4, F5, F6, step 11.1, construct, algebra]

13.1 This derives the screening/KPZ identity without differentiating a limit. The finite positive measures converge weakly, locally with their total masses, by the charged mass convergence and anchor inverse-moment uniform integrability. [F1, F2, F3, F4, F5, F6, step 12.1, construct, algebra]

14.1 More precisely, if $Z_B$ is charged mass in $B_δ(z_i)$, then for $0<q<1$, [F1, F2, F3, F4, F5, F6, step 13.1, construct, algebra]

15.1 $Z_B Z^{-s-1} ≤ Z_B^q Z^{-s-q} ≤ c^{-s-q}Z_B^q M(\text{anchor})^{-s-q}$. [F1, F2, F3, F4, F5, F6, step 14.1, construct, algebra]

16.1 Choose Hölder exponent $p>1$ and qp small enough for the preceding annular bound. Its expectation is $O(δ^η)$ with $η=[ξ(qp)−γa_i qp]/p>0$. Thus screening contacts at any primary have vanishing mass uniformly in the regulator. For raw GMC, the $L^{2}$ kernel bound gives EΣ $M(square_r)^2=O(r^{2−γ^{2}})$, on every compact grid; hence it is atomless. Multiplication by a finite measurable weight preserves atomlessness; finiteness and the annular tail also exclude an atom at a primary. Consequently $ν_m$ gives no mass to screening diagonals. Singular Cauchy kernels will be combined by exact algebra at the common cutoff *before* these weak limits; we do not assert their absolute integrability separately. [F1, F2, F3, F4, F5, F6, step 15.1, construct, algebra]

17.1 **W2. Gaussian integration by parts and the metric term.** Put φ=c+X−2Qb. Away from coincidence, ∂_uK(u,v)=−1/[2(u−v)]+∂b(u). In a cutoff Gaussian integration by parts the ∂b(u) term is multiplied by [F1, F2, F3, F4, F5, F6, step 16.1, construct, algebra]

18.1 $\sum _i a_i C_ε −$ μγ∫ $C_ε(a,z;γ,x)d^{2}x −$ 2Q $C_ε$. [F1, F2, F3, F4, F5, F6, step 17.1, construct, algebra]

19.1 It is zero after integration over c: it is exactly the integral of $\partial _c$ of the full integrand. The $c→−∞$ boundary vanishes since $\sum a_i>2Q$; the other boundary vanishes by the anchor inverse moments, or directly by $\exp(−μe^{γc}Z_ε)$. The same cancellation holds in the presence of any finite differentiated Gaussian polynomial, with its c derivative included. Hence the effective current contraction in every Ward calculation is −1/[2(u−v)], globally, rather than only in a falsely assumed flat sphere metric. [F1, F2, F3, F4, F5, F6, step 18.1, construct, algebra]

20.1 Write $dA_{\rm rd}(v)=a(v)d^2v$ in the finite chart. The chosen planar radial mollifier is evaluated on the smooth test $\rho_\varepsilon(u,v)=\eta_\varepsilon(u-v)/a(v)$, so the round-area test pairing gives exactly the planar convolution of $K$ and introduces no background-density multiplier. The density $a$ is smooth across the equator. For this radial mollifier and | |u|−1 $|>ε$, harmonic averaging gives Var $X_ε(u)=\log(1/ε)+κ+2b(u)$. Thus the derivative rule $\partial V_{a,ε}=a(\partial φ_ε)V_{a,ε}$ holds with the corresponding fixed Wick constant there. In the ε strip about $|u|=1$, replacing $b_ε$ by b changes its value by O(ε) and its first derivative by O(1). The residual first-derivative terms are bounded screening measures restricted to this strip and tend to zero. Indeed the expected screening measure is an absolutely continuous planar measure by its definition and (2), so it gives the circle zero mass. Insertions used below stay a positive distance from that strip until the final charged-continuity limit. There is no omitted distributional curvature contribution: its background term was canceled by the c identity. [F1, F2, F3, F4, F5, F6, step 19.1, construct, algebra]

21.1 **W3. First Ward identity, including its actual boundary term.** Take Ω outside a small closed disk containing a stress point u but no external insertion; initially keep u and all $z_i$ separated. Let $J=\partial φ$ and [F1, F2, F3, F4, F5, F6, step 20.1, construct, algebra]

22.1 T(u)=Q∂J(u)−:J(u)^2:. [F1, F2, F3, F4, F5, F6, step 21.1, construct, algebra]

23.1 Two finite Gaussian integrations by parts, using part W2, give [F1, F2, F3, F4, F5, F6, step 22.1, construct, algebra]

24.1 $⟨T(u)\prod V_{a_i}(z_i)⟩_Ω = [\sum _i Δ_{a_i}/(u−z_i)^2 −\frac{1}{4}\sum _{i≠j}a_i a_j/((u−z_i)(u−z_j))] C_Ω$ −μ∫ $C_Ω(γ,x)/(u−x)^2 d^{2}x +(μγ/2)\sum _i a_i\int  C_Ω(γ,x)/((u−z_i)(u−x))d^{2}x −(μ^{2}γ^{2}/4)\int \int  C_Ω(γ,x;γ,y)/((u−x)(u−y))d^{2}x d^{2}y$. (3) [F1, F2, F3, F4, F5, F6, step 23.1, construct, algebra]

25.1 The coefficient in the second line is −μΔ_γ=−μ because Δ_γ=1. This is where the value of Q is essential. Differentiation of the regulated primary positions gives [F1, F2, F3, F4, F5, F6, step 24.1, construct, algebra]

26.1 $\partial _{z_i}C_Ω=−\frac{1}{2}\sum _{j≠i} a_i a_j/(z_i−z_j) C_Ω +(μγa_i/2)\int  C_Ω(γ,x)/(z_i−x)d^{2}x$. (4) [F1, F2, F3, F4, F5, F6, step 25.1, construct, algebra]

27.1 Equation (4) is a distributional identity with its *common regulator*. It does not declare the last uncombined Cauchy integral absolutely convergent for every allowed $a_i$. For a test function in the distinct-position configuration space integrate by parts before removing the cutoff. In each resulting paired term the factor $(z_i−x)$ times the regularized Cauchy contraction is bounded uniformly and tends to −1/2. The remaining contact neighborhoods are bounded by part W1. This proves the limit of these combined expressions as distributions. [F1, F2, F3, F4, F5, F6, step 26.1, construct, algebra]

28.1 Subtract $\sum _i[Δ_{a_i}/(u−z_i)^2+(u−z_i)^{-1}\partial _{z_i}]C_Ω$ from (3). Apply (4) also with the screening point as the differentiated variable. The only two-screening simplification required is the exact identity [F1, F2, F3, F4, F5, F6, step 27.1, construct, algebra]

29.1 ½[1/((u−x)(x−y))+1/((u−y)(y−x))]=1/[2(u−x)(u−y)]. [F1, F2, F3, F4, F5, F6, step 28.1, construct, algebra]

30.1 Symmetrize at the cutoff; part W1 then removes the diagonal and primary contact sets. The difference is exactly [F1, F2, F3, F4, F5, F6, step 29.1, construct, algebra]

31.1 $−μ\int _Ω \partial _x[C_Ω(γ,x)/(u−x)]d^{2}x =$ −iμ/2 $∮_{\partial Ω} C_Ω(γ,x)/(u−x) d\bar x$. (5) [F1, F2, F3, F4, F5, F6, step 30.1, construct, algebra]

32.1 Our $\partial =(\partial _{1}−i\partial _{2})/2$ and $d^{2}x=dx_{1}dx_{2}$ fix the factor 1/2 in Stokes. The inner boundary has clockwise orientation. On an outer circle $R→∞$, Girsanov and a fixed anchor bound give $C_Ω(γ,x)=O(R^{-4})$; thus that boundary vanishes. Equations (3)–(5) prove the first Ward identity with its explicit interaction-boundary correction, in distributions, on every indicated distinct configuration region. [F1, F2, F3, F4, F5, F6, step 31.1, construct, algebra]

33.1 **W4. More stress insertions: no stress/GMC contact is presumed.** Place all stress points inside the excluded disk, on disjoint nested circles. At separated points the current contraction is [F1, F2, F3, F4, F5, F6, step 32.1, construct, algebra]

34.1 J(u)J(v) ∼ −1/[2(u−v)^2]. [F1, F2, F3, F4, F5, F6, step 33.1, construct, algebra]

35.1 Expanding the two Wick squares gives the complete singular stress contraction [F1, F2, F3, F4, F5, F6, step 34.1, construct, algebra]

36.1 T(u)T(v) ∼ $(c_L/2)/(u−v)^4 +2T(v)/(u−v)^2 +$ ∂T(v)/(u−v). (6) [F1, F2, F3, F4, F5, F6, step 35.1, construct, algebra]

37.1 For clarity the double square contraction is 1/[2(u−v)^4]; Q²∂_u∂_v of the current contraction is 3Q²/(u−v)^4. These sum to (1+6Q²)/2. The single-square contractions give −2:J²:/(u−v)^2−∂:J²:/(u−v); the contractions involving one Q∂J give 2Q∂J/(u−v)^2+Q∂²J/(u−v). The cubic poles from these latter contractions cancel. This lists all terms since each T has Gaussian degree at most two. [F1, F2, F3, F4, F5, F6, step 36.1, construct, algebra]

38.1 Repeat the two integrations of part W3 with the other Wick stress factors retained. Pairing either current with those factors gives precisely (6); pairing with a primary gives (3)'s primary differential operator. Terms in which a current differentiates the interaction are still the derivative in (5), now with the remaining stress factors under its expectation: the same Δ_γ=1 and the same symmetric two-screening identity apply. This is an induction on the number of retained stress factors, because contractions lower that number and the preceding displayed list exhausts the at-most-two currents in the new T. Thus its boundary term is explicitly (5) with those remaining factors. All integration points of the interaction stay outside the hole, so this induction uses no unproved stress/screening coincident product. Holomorphic and antiholomorphic contractions have support on their diagonal; take their circle radii distinct, so the two contour operations commute. This defines mixed descendants without a delta-function at a crossing contour. [F1, F2, F3, F4, F5, F6, step 37.1, construct, algebra]

39.1 **W5. Descendant recursion and removal of the hole.** Put a primary a at 0, external primaries at $|z_i|>1$, and $Ω_ρ=ℂ\overline D_ρ$. Stress contours have radii $δ_jρ$ with distinct fixed $0<δ_j<1$ and are nested in the order of the proposed modes. The n-th negative mode is $(2πi)^{-1}∮ u^{1−n}T(u)du, n≥1$. For $n≥2$ the sum of residues at 0 and the inner stress points equals minus the residues at external primaries and at the screening boundary. Equation (6) supplies all residues at the other stress points. There is no residue at infinity since $u^{1−n}$ times each Ward summand decays at least $u^{-2}$. The external differential operator is [F1, F2, F3, F4, F5, F6, step 38.1, construct, algebra]

40.1 $D_n=\sum _i(−z_i^{1−n}\partial _{z_i}+(n−1)Δ_{a_i}z_i^{-n})$. (7) [F1, F2, F3, F4, F5, F6, step 39.1, construct, algebra]

41.1 For $n=1$ the contour gives the translation derivative of the primary at 0 and all smaller stress points. Summing (4) over all primaries, and the corresponding stress derivatives from (6), cancels primary pairs and antisymmetrizes screening pairs; it yields [F1, F2, F3, F4, F5, F6, step 40.1, construct, algebra]

42.1 $(\sum _{\mathrm{primary}}\partial _{z_i}+\sum _{\mathrm{stress}}\partial _{u_j})W_Ω =$ iμ/2 $∮_{\partial Ω} W_Ω(γ,x)d\bar x$. [F1, F2, F3, F4, F5, F6, step 41.1, construct, algebra]

43.1 This proves (7) also for $n=1$, with the same boundary error as the other modes, rather than omitting $L_{−1}$. In all cases that error has integrand $(iμ/2)x^{1−n}W_Ω(γ,x)d\bar x$ after the u contour is evaluated. [F1, F2, F3, F4, F5, F6, step 42.1, construct, algebra]

44.1 Initially choose $a<Q−γ$ so the extra screening near 0 is subcritical after collision, and choose a still more negative so [F1, F2, F3, F4, F5, F6, step 43.1, construct, algebra]

45.1 $γa+N−2<0, N=|ν|+|\tildeν|$. (8) [F1, F2, F3, F4, F5, F6, step 44.1, construct, algebra]

46.1 Also require $a+\sum a_i>2Q$. This region is nonempty if sufficiently many external insertions are allowed; it is generally empty for just two external insertions, a point addressed by analytic continuation below. The anchor argument in part W1 gives $C_{Ω_ρ}(a,0;γ,x;\text{external})≤Cρ^{-γa}$ for $|x|=ρ$. In the repeated Ward expressions every derivative of a Cauchy kernel costs at most its prescribed power of ρ. Each remaining stress has scaling cost $ρ^{-2}$; its contour factor/integration contributes $ρ^{2−n_j}$. The final boundary $x^{1−n}d\bar x$ contributes $ρ^{2−n}$. Extra integrated screening variables are bounded by (2); all stress/screening separations are $≥(1−δ_{\operatorname{max}})ρ$. Consequently, after smearing external positions in a fixed compact configuration set, every boundary remainder is bounded by [F1, F2, F3, F4, F5, F6, step 45.1, construct, algebra]

47.1 C ρ^{2−γa−N} (9) [F1, F2, F3, F4, F5, F6, step 46.1, construct, algebra]

48.1 times finitely many test-function seminorms. Terms differentiating external positions are transposed onto that test function. The induction in part W4 makes the number of terms finite at each fixed level; their denominators are bounded by fixed powers of (1−δ_max)^{-1} and the distinct contour-radius gaps. Equation (8) makes (9) tend to zero. Charged mass convergence removes the interaction hole. Therefore [F1, F2, F3, F4, F5, F6, step 47.1, construct, algebra]

49.1 $⟨(L_{−ν}\bar L_{−\tildeν}V_a)(0)\prod _i V_{a_i}(z_i)⟩ = D_{ν_k}⋯D_{ν_1}\bar D_{\tildeν_ℓ}⋯\bar D_{\tildeν_1} C(a,0;a_i,z_i)$ (10) [F1, F2, F3, F4, F5, F6, step 48.1, construct, algebra]

50.1 as distributions on the external configuration space in this real negative-a region. Distinct contour radii define the ordered product $L_{−ν}=L_{−ν_k}⋯L_{−ν_1}$. Equation (9) is the contact/boundary estimate; it is not an appeal to a formal CFT Ward axiom. [F1, F2, F3, F4, F5, F6, step 49.1, construct, algebra]

51.1 **W6. Möbius covariance and the numerical descendant factor.** For a Möbius map ψ let $h(z)=b(ψz)−b(z)−\frac{1}{2}\log|ψ'(z)|$. Then $K(ψz,ψw)=K(z,w)+h(z)+h(w)$. Average X∘ψ on the unit circle, call that average S, and subtract it to get Y. The zero-circle-mean normalization of K gives $\operatorname{Cov}(Y(z),S)=h(z)−\bar h$, Var $S=2\bar h$ and $\operatorname{Cov}(Y)=K$. Substitution $c'=c+S$ and Gaussian tilt $e^{2QS}$ shift Y by $2Q(h−\bar h)$; the resulting factor $e^{4Q^{2}\bar h}$ is canceled by $c''=c'−2Q\bar h$. Hence the background Liouville law is invariant under $φ↦φ∘ψ+Q\log|ψ'|$. The Wick local scaling and planar Jacobian give the primary factor $|ψ'|^{−2Δ_a}$; for the interaction $Δ_γ=1$ cancels the Jacobian. Carry this out at finite cutoffs off the pole and use part W1 in the two coordinate charts to pass to the limit. This proves covariance and the insertion-at-infinity limit without using DOZZ. [F1, F2, F3, F4, F5, F6, step 50.1, construct, algebra]

52.1 Let the two external weights be $a_{0}$ and $b_{0}$, with $a_{0}$ at infinity and $b_{0}$ at w. The chiral primary dependence is $w^{a_{0}−h−b_{0}}$, up to its constant. If the already applied chiral modes have total level S, applying (7) gives [F1, F2, F3, F4, F5, F6, step 51.1, construct, algebra]

53.1 $(n b_{0}−a_{0}+h+S) w^{-n}$. [F1, F2, F3, F4, F5, F6, step 52.1, construct, algebra]

54.1 Induction therefore gives exactly [F1, F2, F3, F4, F5, F6, step 53.1, construct, algebra]

55.1 $v(a_{0},b_{0},h,ν)=\prod _{j=1}^{k}(ν_j b_{0}−a_{0}+h+\sum _{r<j}ν_r)$. (11) [F1, F2, F3, F4, F5, F6, step 54.1, construct, algebra]

56.1 The empty product is one. This fixes the full numerical normalization of the descendant Ward rule. It is independent of the value of the primary three-point constant. Analytic passage from (10)'s negative-a region to the physical line and identification with the actual radial Poisson vectors require the attached FK/holomorphic bridge; they are not a consequence merely of the displayed formal factor (11). [F1, F2, F3, F4, F5, F6, step 55.1, construct, algebra]

57.1 **B1. Why the conditional interaction is the corrected one.** On the disk the sphere covariance splits as $K(z,w)=G_D(z,w)−\log|1−z\bar w|$. The second summand is the covariance of the harmonic extension Pϕ, independent of the Dirichlet field. In particular $\operatorname{Var}(Pϕ)(z)=−\log(1−|z|^{2})$. Therefore conditional on ϕ, the Wick-normalized *sphere* chaos on D is [F1, F2, F3, F4, F5, F6, step 56.1, construct, algebra]

58.1 $\exp(γPϕ(x)−γ^{2} \operatorname{Var}(Pϕ)(x)/2)$ $M_{γ,D}(dx) = \exp(γPϕ(x))(1−|x|^{2})^{γ^{2}/2}M_{γ,D}(dx)$. (12) [F1, F2, F3, F4, F5, F6, step 57.1, construct, algebra]

59.1 Conditional tilting by the insertions a at 0 and b at z adds exp(γaG_D(x,0)+γbG_D(x,z)). The outside prefactor is exp((a+b−Q)c+bPϕ(z)+abG_D(0,z))(1−|z|²)^{b²/2}. This is exactly the corrected U, not an alternative chaos convention. The factors in (12) cannot be dropped with Dirichlet-variance Wick normalization. [F1, F2, F3, F4, F5, F6, step 58.1, construct, algebra]

60.1 **The actual Markov decomposition, including the equator.** Write $\theta(z)=1/\operatorname{conjugate}(z)$. On D, the covariance is $G_D(z,w)-\log|1-z\operatorname{\operatorname{conjugate}}(w)|$. The second kernel is exactly Cov(Pvarphi(z),Pvarphi(w)), by the convergent Fourier series on compact subdisks. For one point in D and one outside, the whole covariance is the harmonic cross-covariance; for two exterior points it is the reflected interior covariance. Thus one may realize the given Gaussian law as two independent Dirichlet fields $X_D^{1}, X_D^{2}$ and a shared boundary field varphi, with $X=X_D^{1}+P\varphi$ in D and X composed with $\theta=X_D^{2}+P\varphi$ in D. Equality of all smeared covariances proves equality of these Gaussian laws. Use their compatible conditional regularizations first. Their GMC agrees with the actual chosen regularization limit on compact interiors by the joint covariance/convergence result already established, not by changing the GFF convention. The GMC mean measure is dA0, so its mass on the equator is zero almost surely. Exhausting the two open hemispheres therefore splits its entire mass with no seam term. The exterior change of variables $x=\theta(y)$ cancels the factor $|x|^{-4}$ in dA0 exactly against its Jacobian $|y|^{-4}$. [F1, F2, F4, step 58.1, step 59.1, construct, algebra]

61.1 **Reflection positivity of this sphere measure, not of a postulated package.** Put $I_j=\exp(-\mu e^{\gamma c}M_j(D))$, where $M_j$ is the actual conditional chaos of $X_D^{j}+P\varphi$, including the factor $(1-|x|^2)^{\gamma^2/2}$ from (12). The Liouville density is exactly $e^{-2Qc}I_1 I_2$. For a disk-measurable complex functional F of c+X, define $(UF)(c,\varphi)=e^{-Qc}E_D[F(c+X_D+P\varphi)I_D]$. Start with the domain U|F| in H. For F,G in this domain define the reflection form, linear in F, by the absolutely convergent integral of $F(c+X^{1}) \operatorname{conjugate}(G(c+X^{2}))$ against this density. Conditional independence and Tonelli first for absolute values give exactly $(F,G)_{\mathrm{ref}}=\int$ UF conjugate(UG) dc $dP_T$. Cauchy-Schwarz makes the mixed integral finite. In particular $(F,F)_{\mathrm{ref}}=||UF||_H^2\ge 0$. This proves the sphere reflection-positivity identity on its specified domain; it does not infer positivity from the formal Shapovalov matrices or from a declaration of full-local CFT data. [F1, F2, F4, step 60.1, construct, algebra]

61.2 **B2. The declared initial core equals the maximal form domain.** Let $q_{0}$ be the closed free form of $−\frac{1}{2}\partial _c^{2}+Q^{2}/2+P$ on $H=L^{2}(dc⊗P_T)$, and let $W=μe^{γc}V$, with V the actual circle GMC. Its first moment is finite; $V>0$ a.s. Define [F1, F2, F3, F4, F5, F6, step 60.1, construct, algebra]

62.1 **Its Hilbert realization is the actual H.** The null space of this form is ker U, so U is an isometry from its quotient into H and extends to the completion. Its range is dense. To see this, first set the interaction to zero and call the resulting map U0. Take a radial smooth test $g_{\epsilon}$ of total mass one in an annulus tending to the equator, and $f_{\epsilon}$ with zero angular mean approximating a fixed smooth zero-mean boundary test h. The explicit Dirichlet kernel implies $\operatorname{Var}(X_D(g_{\epsilon}))$ tends to zero, while $P\varphi(f_{\epsilon})$ tends to varphi(h); the radial Dirichlet average and the zero-angular-mean Dirichlet average have zero covariance, hence are independent. Conditional Gaussian integration of a compact smooth function rho of the first average and the Wick exponential of the second therefore gives $U0F_{\epsilon}$ tending in H to $e^{-Qc}\rho(c)$ exp(varphi(h)). The convergence follows from the Gaussian exponential identity, the vanishing radial variance and dominated convergence on the compact c support enlarged by the Gaussian radial fluctuation. These exponentials span a dense subspace of Gaussian L2: their finite-dimensional exponential generating functions contain every Hermite polynomial by difference quotients, and finite-coordinate Hermite polynomials are dense. The compact c functions are dense in L2(dc). Hence U0 has dense range. Finally $I_D$ is strictly positive and finite almost surely. For every such free-domain functional F0 take $F=I_D^{-1}F0$. It is disk-measurable and $U|F|=U0|F0|, UF=U0F0$. Thus U has dense range as well, and the completed reflection Hilbert space is isometric onto the concrete $H=L2(dc \otimes P_T)$. This is the OS Hilbert realization of the measure, not a construction of every axiom in the separate full-local CFT Definition. [F1, F2, step 61.1, construct, algebra]

62.2 **Charged vectors belong to this domain and have the declared formula.** For two distinct insertions in a compact subdisk, first use finite-cutoff vertices and a compact c cutoff, and then remove the c cutoff. Their reflected norm is the four-point positive correlation with reflected distinct insertions. For real $a,b<Q$ and $a+b>Q$ it is finite: all four individual charges are $<Q$ and their sum is $2(a+b)>2Q$, so the charged convergence/anchor argument of steps 5.1–8.1 applies. Its mixed-cutoff version also applies, because the joint regularized Gaussian covariances obey the same logarithmic bound. The polarization identity expresses $||UF_{\epsilon}-UF_{eta}||^2$ as the sum of four such mixed correlations, whose limits agree. Thus these are H-Cauchy, not merely weak conditional expectations. Their limit is precisely the conditional Gaussian-tilt expression of steps 58.1–59.1, with every harmonic Wick and Dirichlet Green factor retained. The resulting $U_{a,b}(0,z)$ is the actual vector of F2, and the same construction applies to two arbitrary distinct interior points. More generally, for every real $t<a+b-Q$, the same construction gives $e^{-tc}U_{a,b}$ in H, even when $a+b\le Q$. Insert $e^{-2tc}$ into each reflected mixed-cutoff integral. Gaussian tilting leaves every local charge and singularity exponent unchanged; the zero-mode substitution in step 5.1 now gives the positive exponent $s_t=2(a+b-Q-t)/\gamma$. The anchor inverse moments of step 8.1 hold for every positive exponent, so give the same uniform integrability and mixed-cutoff convergence. Polarization therefore proves convergence in this weighted H norm. The four mixed correlations also prove continuity in distinct interior positions, since their charged masses converge locally uniformly by step 8.1 with the same $s_t>0$. This is a weighted integral of the sphere density, not a new vertex charge, and adds no local singularity. No circle-boundary vector or r increasing to 1 is asserted. [F1, F2, F4, step 8.1, step 59.1, step 61.1, construct, algebra]

62.3 $D_{\operatorname{max}}=\{u∈D(q_{0}): \int W|u|^{2}<∞\}, q_{\operatorname{max}}=q_{0}+\int W|u|^{2}$. [F1, F2, F3, F4, F5, F6, step 61.2, construct, algebra]

63.1 **Reflected factorization with all exterior powers and its full-domain pairing.** Let $a_i<Q$ and $\sum_i a_i>2Q$, with $|z_1|,|z_2|<1<|z_3|,|z_4|$. Put $A_c=a_1+a_2$, $B_c=a_3+a_4$ and choose a real $t$ with $Q-B_c<t<A_c-Q$; this interval is nonempty precisely because $A_c+B_c>2Q$. Step 62.2 gives $e^{-tc}U_{a_1,a_2}$ and $e^{tc}U_{a_4,a_3}$ in H. Define $\mathcal D(u,v)=\langle e^{-tc}u,e^{tc}v\rangle_H=\int u\overline v\,dc\,dP_T$. Cauchy–Schwarz proves absolute convergence, and cancellation of the real weights proves independence of t. Conditional independence in step 60.1 first at compact c and vertex cutoffs gives this integral exactly; the weighted mixed-cutoff convergence in step 62.2 and Cauchy–Schwarz pass its two factors to the limit. The sphere side converges by steps 5.1–8.1. Reflection pulls an exterior primary at $z_j$ to $\theta(z_j)$ and contributes exactly $|z_j|^{-4\Delta_{a_j}}$, by the covariance/background change in step 60.1 with Wick subtraction retained, or the primary coordinate law in step 51.1. Consequently $C(z_1,z_2,z_3,z_4)=|z_3|^{-4\Delta_{a_3}}|z_4|^{-4\Delta_{a_4}}\mathcal D(U_{a_1,a_2}(z_1,z_2),U_{a_4,a_3}(\theta(z_4),\theta(z_3)))$. The conditional vectors are real and positive for real charges. If both pair sums exceed Q, $t=0$ is allowed and this is the ordinary H inner product; otherwise only the displayed weighted dual pairing is asserted. After multiplication by $|z_4|^{4\Delta_{a_4}}$, the reflected argument tends to the distinct interior point 0. Weighted H continuity from step 62.2 and the same Cauchy–Schwarz estimate prove convergence of this pairing. Thus the infinity limit is a proved correlation limit, without asserting H convergence of an unweighted non-H vector or a point-valued vertex at infinity. [F1, F2, F4, step 8.1, step 51.1, step 60.1, step 62.2, construct, algebra]

63.2 The sum is closed: a $q_{\operatorname{max}}$-Cauchy sequence converges in the free form norm and in $L^{2}(W dc dP)$, and their a.e. subsequential limits agree. We prove that $C_c^∞(ℝ)⊗$ finite Hermite polynomials is a form core; thus this is precisely the *initial-core closure* used in the actual Definition and spectral supplier. [F1, F2, F3, F4, F5, F6, step 62.3, construct, algebra]

64.1 **The seam is strictly separated for the whole stated four-point domain.** Given $0<|z|<1$, choose $|z|<R<1$. Scale by R and then use step 63.1 with exterior point 1/R and infinity. If $A=\Delta_{a_1}+\Delta_{a_2}$ and $B=\Delta_{a_3}+\Delta_{a_4}$, the scaling factor is $R^{-2(A+\Delta_{a_3}-\Delta_{a_4})}$ and the exterior inversion factor is $R^{4 \Delta_{a_3}}$. Their product is exactly $R^{2(B-A)}$. Therefore $C(0,z,1,\infty)=R^{2(B-A)}\mathcal D(U_{a_1,a_2}(0,z/R),U_{a_4,a_3}(0,R))$. Both arguments are strictly interior and distinct, so the absolutely convergent weighted factorization of step 63.1 is available on the full Seiberg domain without a boundary-seam limit. On the two-pair-sum subdomain it is the ordinary H factorization used in the bootstrap theorem. This derivation uses conditional Gaussian independence, the actual sphere weight and charged convergence; it does not assume bootstrap, DOZZ, positive conformal blocks or a full-local CFT realization. [F1, F2, F4, step 63.1, construct, algebra]

64.2 The free form is the sum of the c-gradient and Gaussian gradients (n-weighted in the nth coordinate pair). First truncate real and imaginary parts by Lipschitz contractions with bounded derivative, then multiply by compact c cutoffs. Chain and product rules on finite cylinders pass to the closed free form by its definition; derivatives of the cutoffs vanish in the limit and dominated convergence handles W. It suffices to approximate bounded u supported on a compact c interval. Conditional expectations $E_N$ onto the first N Gaussian pairs converge in $q_{0}$ by the orthogonal Hermite expansion and commute with $\partial _c$. They preserve the same uniform bound and c support; the martingale a.e. convergence and $\int _{compact c}E[V]dc<∞$ give convergence also in $L^{2}(W)$. There is no assertion that conditional expectation is a contraction in the W norm. [F1, F2, F3, F4, F5, F6, step 63.2, construct, algebra]

65.1 In these finitely many coordinates apply a positive-time free Mehler semigroup and a smooth compact c convolution, with a harmless larger c cutoff. They preserve a uniform bound, converge in the free form norm and a.e. along a sequence, so dominated convergence again gives the W norm limit. To replace the resulting smooth finite-dimensional functions by finite Hermite sums one needs a weighted argument, not plain L² Hermite convergence. Gaussian tilting of V gives [F1, F2, F3, F4, F5, F6, step 64.2, construct, algebra]

66.1 E[V | $x_{1},y_{1},…,x_N,y_N] = \int _T \exp(γϕ^{(N)}(θ)−γ^{2}\operatorname{Var} ϕ^{(N)}(θ)/2)dθ ≤ C_N \exp(C_N |(x,y)|)$. (13) [F1, F2, F3, F4, F5, F6, step 65.1, construct, algebra]

67.1 For a bounded Gaussian shift a, normalized Hermites satisfy [F1, F2, F3, F4, F5, F6, step 66.1, construct, algebra]

68.1 $E|H_m(Z+a)|^{2}=\sum _{j=0}^m \operatorname{binom}(m,j)|a|^{2j}/j! ≤$ exp(2|a|√m). [F1, F2, F3, F4, F5, F6, step 67.1, construct, algebra]

69.1 The last bound follows by $\operatorname{binom}(m,j)≤m^j/j$! and $\sum  t^{2j}/(j!)^{2}≤e^{2t}$. After tilting each coordinate in (13) and using products, this implies $E[V|H_η|^{2}]≤C_{δ,N}e^{δ|η|}$ for every $δ>0$. Keep a fixed positive Mehler time t: its coefficient of $H_η$ carries $e^{-t E_η}, E_η≥|η|$. Cauchy–Schwarz against $e^{-tE_η}$, followed by summation of $\prod _{j≤N}(1−e^{-tj})^{-2}$, bounds the W-norm of the coefficient tail by a quantity tending to zero; choose $δ<t$. Apply the same estimate to c derivatives and the energy-weighted coefficients to obtain free form convergence. Smooth compact c coefficients can then be approximated in their finite number of Sobolev norms by $C_c^∞$ coefficients. Finally let the Mehler time and the other smoothing parameters decrease to zero. This proves core density and equality of the two form realizations. [F1, F2, F3, F4, F5, F6, step 68.1, construct, algebra]

70.1 **B3. FK is the same Hamiltonian, not a newly selected extension.** The free stationary oscillator process is explicitly [F1, F2, F3, F4, F5, F6, step 69.1, construct, algebra]

71.1 $(x_n(t),y_n(t))=e^{-nt}(x_n(0),y_n(0))+\sqrt{1−e^{-2nt}}(Z_n,Z'_n)$, [F1, F2, F3, F4, F5, F6, step 70.1, construct, algebra]

72.1 with its usual joint Markov Gaussian increments; its transition generator is −P. Adjoin independent one-dimensional Brownian motion for c. For bounded nonnegative cylinder $W_{N,L}$, products of alternating free transitions and multiplication $\exp(−tW_{N,L}/m)$ converge to the expectation of $\exp(−\int _{0}^t W_{N,L}(c_s,ϕ_s)ds)$. This follows on bounded continuous cylinders by Riemann sums and dominated convergence; their $L^{2}$ density and contractions extend it to H. Its weak generator form is $q_{0}+\int W_{N,L}|u|^{2}$, as seen by differentiation at zero on the free core. Boundedness yields the resolvent through its Laplace integral; the weak resolvent equation uniquely identifies this FK semigroup with that form operator. [F1, F2, F3, F4, F5, F6, step 71.1, construct, algebra]

73.1 For general W first use min(W,L); monotone convergence of the positive FK integrands and the variational resolvent equations gives the maximal sum form. Finite cylinder approximations of V can be used along an a.e. subsequence converging in $L^{1}$; stationarity and Fubini give convergence of $\int _{0}^t|V_N−V|(ϕ_s)ds$ in mean, while Brownian c can first be confined to a compact interval and then released. Thus their FK expectations have the same limit. The core equality in part B2 identifies it with the actual declared H, removing an otherwise genuine extension ambiguity. [F1, F2, F3, F4, F5, F6, step 72.1, construct, algebra]

74.1 For the radial field, write $z=e^{-s+iθ}$. The covariance of $B_s+ϕ_s$ is [F1, F2, F3, F4, F5, F6, step 73.1, construct, algebra]

75.1 $\operatorname{min}(s,t)+\sum _{n≥1} e^{-n|s−t|}\cos(n(θ−θ'))/n$, [F1, F2, F3, F4, F5, F6, step 74.1, construct, algebra]

76.1 the sphere covariance restricted to a disk, conditional on the initial circle field. The planar Jacobian and the Brownian Wick variance give the factor $e^{-(2+γ^{2}/2)s}=e^{-γQs}$ in its chaos. Consequently the raw radial zero-mode path has drift −Q. Conjugating its drifted generator by multiplication $e^{-Qc}$ gives $−\frac{1}{2}\partial _c^{2}+Q^{2}/2$, exactly the scalar in H. Conditional Gaussian decomposition on an annulus gives (12) and the insertion prefactors. This checks all factors in the FK/disk identification; setting the potential to zero checks the remaining scalar normalization. Passing annular cutoffs uses the charged convergence proof, and passing bounded potential cutoffs uses the positive FK convergence just proved. [F1, F2, F3, F4, F5, F6, step 75.1, construct, algebra]

77.1 **B4. Holomorphic charged disk vectors are obtained by a convergent cutoff sequence.** Fix finitely many disk insertions at a compact distinct configuration, with real parts $a_j<Q$. Let $B_j(k)$ be disjoint disks of radius $2^{-k}$ about them. Define $U_k$ by circle-averaging each vertex at that radius and omitting the interaction inside their union, using the original unshifted Dirichlet interaction before any charged Gaussian tilt. In particular the interaction is real and nonnegative even when the vertex charges are complex; no exponential of a complex tilted chaos mass is used. At fixed k, the charges enter only the finite Gaussian vertex exponentials and deterministic Wick factors; $U_k$ is entire in each charge, in every weighted H space on compact charge subsets for which the zero-mode tail is integrable. The complex Wick normalization is $α^{2}\operatorname{Var}/2$, not $|α|^{2}\operatorname{Var}/2$. [F1, F2, F3, F4, F5, F6, step 76.1, construct, algebra]

78.1 The increment of the centered Dirichlet circle average between radii $2^{-k}$ and $2^{-k-1}$ is independent of the field outside $B_j(k)$, has variance log2, and is independent for the disjoint disks. This follows directly by averaging $G_D$ and using harmonic mean value on the exterior. Its complex Wick exponential has conditional expectation one. Therefore $U_{k+1}−U_k$ contains only the change of interaction in the annuli; the old exterior interaction cancels exactly by this conditional expectation. [F1, F2, F3, F4, F5, F6, step 77.1, construct, algebra]

79.1 Here is a summable bound, including complex charges. Real tilting by $a_j$ and taking the modulus of the imaginary Wick factors cost at most $C2^{k\sum (\operatorname{Im} α_j)^{2}/2}$ times fixed exponential Gaussian factors. For annular added interaction $Y_k$ choose a small $η>0$. The companion annular estimate gives [F1, F2, F3, F4, F5, F6, step 78.1, construct, algebra]

80.1 $E[Y_k^η$ |ϕ] $≤ C e^{C \operatorname{sup}_K|Pϕ|} 2^{-k \operatorname{min}_j[ξ(η)−γa_jη]}$. [F1, F2, F3, F4, F5, F6, step 79.1, construct, algebra]

81.1 Choose the real-part neighborhood first, then η, then imaginary widths so that the positive exponent dominates $Σ(Im α_j)^{2}/2$. The elementary inequality $|e^{-t(Y+Z)}−e^{-tZ}|≤\operatorname{min}(1,tY)e^{-tZ}≤(1+t)Y^ηe^{-tZ}$ handles $t=μe^{γc}$. All charges in this estimate are bounded real tilts; the residual imaginary factors have modulus one after their stated deterministic Gaussian cost. [F1, F2, F3, F4, F5, F6, step 80.1, construct, algebra]

82.1 To retain the $c→+∞$ bound rather than dropping the exterior interaction, use positivity of $G_D$. For bounded increasing F and bounded decreasing G of finite Gaussian samples with nonnegative covariance, differentiating the interpolation from independent copies to identical copies gives $\operatorname{Cov}(F,G)≤0$: each term is a nonnegative covariance entry times one nonnegative and one nonpositive partial derivative. Truncation and discretization prove this for $Y_k^η$ and $e^{-t Z_{\mathrm{out}}}$. Thus their joint expectation is $≤E[Y_k^η]E[e^{-t Z_{\mathrm{out}}}]$. A fixed anchor disk in the exterior gives all inverse moments of $Z_{\mathrm{out}}$, with its conditional harmonic factors bounded below by $e^{-C \operatorname{sup}_K|Pϕ|}$. Gaussian Fourier convergence on compact $K⊂D$ gives E $\exp(C \operatorname{sup}_K|Pϕ|)<∞$ for every fixed C. For example Cauchy–Schwarz with the geometric weights $r^n$ bounds the supremum by a weighted $ℓ^{2}$ norm of the independent Gaussian coordinates, whose squared exponential has a finite product moment for a sufficiently small coefficient; Young's inequality then gives every linear exponential moment. [F1, F2, F3, F4, F5, F6, step 81.1, construct, algebra]

83.1 Consequently on a sufficiently small complex charge polydisk, [F1, F2, F3, F4, F5, F6, step 82.1, construct, algebra]

84.1 $||e^{-bc}(U_{k+1}−U_k)||_H ≤ C 2^{-κk}, κ>0$, (14) [F1, F2, F3, F4, F5, F6, step 83.1, construct, algebra]

85.1 whenever $b<\operatorname{Re}\sum α_j−Q$, locally uniformly with a strict margin. At $c→−∞$ this is the direct exponential $e^{(\operatorname{Re}\sum α_j−Q−b)c}$; at +∞ use arbitrarily high anchor inverse moments to dominate any chosen exponential. This also proves the required bound for $U_k$ itself. The uniformly summable entire sequence defines a Hilbert-valued holomorphic U, and at real charges it is the corrected conditional disk vector by charged convergence. Overlapping polydisks give holomorphy along every compact path in the real subcritical charge region. The argument avoids assuming that a random complex charged chaos mass has a nonvanishing complex power. [F1, F2, F3, F4, F5, F6, step 84.1, construct, algebra]

86.1 **B5. Exact free incoming seed and transfer to Poisson descendants.** At an inner circle with the primary a at zero, conditional Gaussian integration shifts the holomorphic current mean to [F1, F2, F3, F4, F5, F6, step 85.1, construct, algebra]

87.1 $J(u)=\sum _{n>0}nϕ_n u^{n−1}−a/(2u)$. [F1, F2, F3, F4, F5, F6, step 86.1, construct, algebra]

88.1 Thus the coefficient of $u^{n−2}$ in $Q\partial J−J^{2}$, acting on the conditional vacuum, is [F1, F2, F3, F4, F5, F6, step 87.1, construct, algebra]

89.1 $n(a+(n−1)Q)ϕ_n − \sum _{r+s=n}rsϕ_rϕ_s$. (15) [F1, F2, F3, F4, F5, F6, step 88.1, construct, algebra]

90.1 With $A_n=(i/2)\partial _n, A_{−n}=(i/2)(\partial _{−n}−2nϕ_n)$, the right side is exactly $L_{−n}^a 1$ for [F1, F2, F3, F4, F5, F6, step 89.1, construct, algebra]

91.1 $L_n^a=i(a−(n+1)Q)A_n+\sum _{m≠0,n}:A_{n−m}A_m$:. [F1, F2, F3, F4, F5, F6, step 90.1, construct, algebra]

92.1 Gaussian integration by parts for a second inner stress acts on this polynomial as well as on the shifted exponential. Its contraction is exactly (6) in the charged Ward construction above, so induction identifies the ordered contour polynomial with $Q_{a,ν,\tildeν}=L_{−ν}^a\tilde L_{−\tildeν}^a 1$, not just its leading monomial. Both empty polynomial and primary have normalization one. Complex conjugation reverses the chiral labels in a bra; it does not add a scalar. [F1, F2, F3, F4, F5, F6, step 91.1, construct, algebra]

93.1 Apply the exact annular FK identity of part B3 with this polynomial on the inner boundary at radius $e^{-t}$. The change of radial coordinates supplies $e^{t(2Δ_a+N)}$ and the inner wave $e^{(a−Q)c}$. Thus, tested against an outer disk vector, the real-charge contour state is precisely the limit of [F1, F2, F3, F4, F5, F6, step 92.1, construct, algebra]

94.1 $e^{t(2Δ_a+N)}e^{-tH}[Q_{a,ν,\tildeν}e^{(a−Q)c}], N=|ν|+|\tildeν|$. (16) [F1, F2, F3, F4, F5, F6, step 93.1, construct, algebra]

95.1 The expression in brackets is an uncut incoming seed and need not lie in H. Initially interpret (16) using left cutoffs and weighted duality. In the sufficiently negative real-a region the Poisson supplier's exact (S9) identifies its uncut limit with the normalized Poisson seed; no bare H-convergence of that growing seed is asserted here. [F1, F2, F3, F4, F5, F6, step 94.1, construct, algebra]

96.1 More precisely that supplied region is $κ=Q−a>γ/2, \sqrt{κ^{2}−2N}>κ−γ/2$. Its analytic continuation uses $k=−i(a−Q), p=\sqrt{k^{2}+2N}$ on $\operatorname{Im} p>0$ and [F1, F2, F3, F4, F5, F6, step 95.1, construct, algebra]

97.1 Im p>max(0,Im k−γ/2). (17) [F1, F2, F3, F4, F5, F6, step 96.1, construct, algebra]

98.1 For the correction resolvent choose $0≤β<\operatorname{Im} p$; the incoming seed itself is allowed a larger growth weight. The spectral supplier states that the connected unbounded component in (17) joins the deep negative real region to the physical boundary $a=Q+iP$. Only these exact assertions are used. No uniform-in-level continuation strip is needed: the argument is made at each fixed pair of partitions. [F1, F2, F3, F4, F5, F6, step 97.1, construct, algebra]

99.1 Pairing that analytic family with part B4's holomorphic U and the Ward distribution (10) extends the negative-a equality by holomorphic uniqueness. To ensure a nonempty initial Seiberg region use sufficiently many external insertions: each is $<Q$ but their number can be arbitrarily large. For each fixed compact continuation path their sum can be chosen large enough for the required dual exponential weight. Thereafter hold the physical $a=Q+iP$ fixed and continue spectator charges to zero in overlapping subcritical neighborhoods, retaining two external charges whose sum is $>Q$. Along this second real path the sum never falls below that final $>Q$ value, so part B4 permits a fixed small positive dual weight. $V_0=1$ exactly at finite cutoffs and in their limits, so the spectators disappear. This is the dummy-insertion argument; it does not incorrectly postulate a negative-a two-external Seiberg region. Finally the Möbius covariance established in the charged Ward construction above puts one external insertion at infinity. [F1, F2, F3, F4, F5, F6, step 98.1, construct, algebra]

100.1 Together with (11), this proves, with the target's inner-product orientation, [F1, F2, F3, F4, F5, F6, step 99.1, construct, algebra]

101.1 $⟨U_{a,b}(0,z),Ψ_{Q+iP,ν,\tildeν}⟩ = p_{a,b}(P) z^{|ν|}\bar z^{|\tildeν|}|z|^{2(Δ_{Q+iP}−Δ_a−Δ_b)} v(Δ_a,Δ_b,Δ_{Q+iP},ν)v(Δ_a,Δ_b,Δ_{Q+iP},\tildeν)$. (18) [F1, F2, F3, F4, F5, F6, step 100.1, construct, algebra]

102.1 The initial distributional equality is pointwise at every distinct configuration in this domain. Indeed conditional factorization expresses the weighted Hilbert norm squared of U(z)−U(z') as the difference of its four reflected mixed correlations. The charged convergence/anchor argument is locally uniform when these reflected configurations stay distinct, so these four terms are continuous and their combination tends to zero as $z'→z$. For the weight $e^{-bc}$, the same zero-mode integration merely changes the exponent by −2b/γ; the strict margin $b<\sum a_j−Q$ is exactly its integrability condition, and all local singularity exponents remain unchanged. Hence U is continuous in the required weighted Hilbert topology. Pairing with the locally bounded Poisson family is continuous; the rational primary powers and descendant factors on the other side are continuous as well. A distributional equality of these continuous functions is equality everywhere. [F1, F2, F3, F4, F5, F6, step 101.1, construct, algebra]

103.1 Here p is the actual primary overlap after factoring its coordinate power. No assertion p=DOZZ/2 is made by this argument; that is the separate DOZZ construction. The normalization of Ψ is incoming amplitude one from (15)–(16), so no extra 1/√(2π) is introduced. The factor 1/(2π) belongs to the separate spectral resolution. Statements on invertibility of Gram matrices, infinite descendant summation, boundary r→1, and the final P integral also remain separate from this finite-descendant Ward identity. [F1, F2, F3, F4, F5, F6, step 102.1, construct, algebra] ∎
