---
id: thm-gts-multivariable-sl2-orbit-approximation
kind: theorem
title: "Several-variable SL(2)-orbit approximation for polarized nilpotent orbits"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 4
domain: mathematics
library: physics
category: string-theory
axiom_strength: "ZF + full AC through the polarized variation and limiting-Hodge suppliers."
deps:
  - def-gts-polarized-variation-of-hodge-structure-and-period-map
  - def-rational-mixed-hodge-structure
  - thm-gts-limit-mixed-hodge-structure-and-nilpotent-orbit
  - def-axiom-of-choice
  - lem-gts-unipotent-hodge-metric-sharp-weight-growth
  - lem-gts-horizontal-period-map-distance-decreasing
  - lem-deligne-splitting-of-a-mixed-hodge-structure
  - lem-morphisms-of-mixed-hodge-structures-are-strict
  - lem-nilpotent-lefschetz-filtration-is-canonical-and-self-dual
dependency_roles:
  def-gts-polarized-variation-of-hodge-structure-and-period-map: mathematical-premise
  def-rational-mixed-hodge-structure: mathematical-premise
  thm-gts-limit-mixed-hodge-structure-and-nilpotent-orbit: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  lem-gts-unipotent-hodge-metric-sharp-weight-growth: mathematical-premise
  lem-gts-horizontal-period-map-distance-decreasing: mathematical-premise
  lem-deligne-splitting-of-a-mixed-hodge-structure: mathematical-premise
  lem-morphisms-of-mixed-hodge-structures-are-strict: mathematical-premise
  lem-nilpotent-lefschetz-filtration-is-canonical-and-self-dual: mathematical-premise
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Eduardo Cattani and Aroldo Kaplan, Degenerating Variations of Hodge Structure, Astérisque 179–180 (1989)"
      url: "https://numdam.org/item/AST_1989__179-180__67_0.pdf"
      locator: "§3, printed pp. 77–81, and §4, printed pp. 81–86, especially (4.2)–(4.8): commuting gradings, comparison representation and ordered-sector normalization; the compact auxiliary-parameter convention is stated at the start of §2, printed p. 72."
    - title: "Patrick Brosnan and Gregory Pearlstein, On the algebraicity of the zero locus of an admissible normal function, arXiv:0910.0628"
      url: "https://arxiv.org/pdf/0910.0628"
      locator: "Appendix §13.1, Theorem 13.1 (printed p. 41), and §13.2, Lemma 13.2 (p. 42): normalized relative grading and Hodge compatibility. §§12–13 were read for context; their universal-splitting and Tannakian statements are not imported here."
    - title: "Kazuya Kato, On SL(2)-orbit theorems, arXiv:1308.0715"
      url: "https://arxiv.org/pdf/1308.0715"
      locator: "§§2.1–2.3 (printed pp. 3–6) and §§3.1–3.3 (pp. 7–12): relative filtration, Deligne-system restriction clauses and normalized commuting gradings. The pure polarized interfaces used here are constructed locally; no general mixed-system theorem is imported."
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Fix a weight $k$, Hodge numbers, a real vector space $V_{\mathbb R}$, and a nondegenerate real bilinear polarization $Q$ of parity $(-1)^k$. Let $\check D$ be the flag variety of decreasing filtrations of the prescribed ranks satisfying the algebraic incidence conditions $Q_{\mathbb C}(F^p,F^{k-p+1})=0$; let $D\subset\check D$ consist of those filtrations whose induced decomposition with the real structure is opposed and polarized. This is the period-domain convention defined by the polarized-VHS supplier cited below. Define $G_{\mathbb R}:=\operatorname{Aut}_{\mathbb R}(V_{\mathbb R},Q)=\{g\in\operatorname{GL}_{\mathbb R}(V_{\mathbb R}):Q(gu,gv)=Q(u,v)\text{ for all }u,v\}$, acting on $D$ by $(gF)^p=g(F^p)$. A **polarized nilpotent orbit** is data $N_1,\ldots,N_r\in\operatorname{End}_{\mathbb R}(V_{\mathbb R})$ and $F\in\check D$ such that the $N_i$ are commuting nilpotent $Q$-skew endomorphisms, $N_iF^p\subseteq F^{p-1}$, and $\Phi(z):=\exp(\sum_i z_iN_i)F$ lies in $D$ whenever $\operatorname{Im}z_i>c_i$ for some fixed $c_i>0$. Here $z\in\mathbb H^r$, $\mathbb H=\{w\in\mathbb C:\operatorname{Im}w>0\}$.

An ordered sector datum consists of $1\le d\le r$, nested subsets $\varnothing=I_0\subseteq I_1\subseteq\cdots\subseteq I_d\subseteq\{1,\ldots,r\}$, linearly independent fixed directions $\theta^1,\ldots,\theta^d\in\mathbb R^r$, and a compact set $B\subset\mathbb R^r$. For $i\in I_j\setminus I_{j-1}$ require $\theta_i^j>0$; require $\theta_i^j=0$ for $i\notin I_j$. Coefficients on $I_{j-1}$ may have either sign. Fix a lower-triangular matrix $C=(c_{ji})_{1\le i,j\le d}$ with $c_{jj}=1$, $c_{ji}=0$ for $i>j$, such that $\widehat\theta^j:=\sum_{i\le j}c_{ji}\theta^i$ has nonnegative coordinates on $I_{j-1}$ and positive coordinates on $I_j\setminus I_{j-1}$. The support conditions imply $\widehat\theta_i^j=0$ for $i\notin I_j$. Such a matrix exists by successively adding sufficiently large positive multiples of earlier directions. Define $\widehat\tau$ by $\widehat\tau^{\mathsf T}C=\tau^{\mathsf T}$, so $\sum_j\tau_j\theta^j=\sum_j\widehat\tau_j\widehat\theta^j$. In a sufficiently ordered sector, every $\widehat\tau_j$ is positive and $\widehat\tau_j/\tau_j\to1$ uniformly as the successive ratios diverge. If the original directions already satisfy the nonnegative cone conditions, take $C=I$. The sector is
$$y=\sum_{j=1}^d\tau_j\theta^j+b,\qquad b\in B,\qquad \tau_j>0,$$
where omitted coordinates $i\notin I_d$ remain in a fixed compact subset of their admissible interior. Choose real linear forms $\widehat\ell_j$ dual to $\widehat\theta^a$ on the coordinate subspace $\mathbb R^{I_d}$ and extend them by zero on omitted coordinates. For a compact set $K\subset\mathbb R^r$ of real parts $x$, the bounded parameter is $\lambda=((x_i)_{i\notin I_d},(b_i)_{i\notin I_d})$; require $b_i>c_i$ for every omitted coordinate, so those fixed complex coordinates stay in the admissible interior. The bounded parts of $x$ and $b$ on the growing face are not included in $\lambda$. For $j<d$ put $t_j=\widehat\tau_j/\widehat\tau_{j+1}$, put $t_d=\widehat\tau_d$, and set
$$\epsilon_{\mathrm{ord}}:=\sum_{j=1}^{d-1}t_j^{-1/2}+t_d^{-1/2}.$$
Set $w_j=\widehat\ell_j(x)+i\widehat\tau_j$.

For each fixed sector datum and each $\lambda$ in its compact admissible parameter set, locally in $\lambda$ there are commuting real $\mathfrak{sl}_2$ triples integrating to a $Q$-preserving representation $\rho_\lambda:\mathrm{SL}(2,\mathbb R)^d\to\operatorname{Aut}(V_{\mathbb R},Q)$, a filtration $F_{0,\lambda}\in D$, and a polarized equivariant map
$$\Phi_{\mathrm{SL},\lambda}(w_1,\ldots,w_d)=\rho_\lambda(g_{w_1},\ldots,g_{w_d})F_{0,\lambda},\qquad g_{a+ib}:=\begin{pmatrix}\sqrt b&a/\sqrt b\\0&1/\sqrt b\end{pmatrix},$$
such that the following estimates hold whenever $x\in K$, $b\in B$, the omitted-coordinate parameter is $\lambda$, and $t_j\ge R$ for every $j$. The choices are locally defined in $\lambda$, and the constants are uniform on the fixed compact parameter set by a finite cover. Put $\widehat M_j=\sum_i\widehat\theta_i^jN_i$ and let $W_j=W(\sum_{a\le j}\widehat M_a)$ be the zero-centred weight filtration of the cumulative face generator. The commuting real gradings $H_j(\lambda)$ grade these $W_j$, are $Q$-skew, and define the real $Q$-isometry $\beta_\lambda(\widehat\tau)=\prod_j t_j^{H_j(\lambda)/2}$. Put $Y_j=H_j-H_{j-1}$, with $H_0=0$; with the displayed upper-triangular convention, $d\rho_\lambda(\operatorname{diag}(1,-1)_j)=-Y_j$. The normalized actual and comparison filtrations remain in fixed compact-dual charts around $F_{0,\lambda}$, and
$$d_D\bigl(\Phi(x+iy),\Phi_{\mathrm{SL},\lambda}(w_1,\ldots,w_d)\bigr)\le C\epsilon_{\mathrm{ord}},$$
$$\bigl|h_{\Phi(x+iy)}(v,w)-h_{\Phi_{\mathrm{SL},\lambda}(w_1,\ldots,w_d)}(v,w)\bigr|\le C\epsilon_{\mathrm{ord}}\,h_{\Phi_{\mathrm{SL},\lambda}}(v,v)^{1/2}h_{\Phi_{\mathrm{SL},\lambda}}(w,w)^{1/2}$$
for all flat complexified vectors $v,w\in V_{\mathbb C}$. Here $d_D$ is the distance of any fixed $G_{\mathbb R}$-invariant Riemannian metric on $D$, and $h$ is the positive Hodge metric. For fixed bounded $x,b$ with omitted-coordinate parameter $\lambda$, the normalized comparison means the ordered pair of filtration maps
$$R_{x,b,\lambda}(u):=\beta_\lambda(\widehat\tau)\Phi(x+iy),\qquad S_{x,\lambda}(u):=\beta_\lambda(\widehat\tau)\Phi_{\mathrm{SL},\lambda}(w),$$
initially for positive real $u_j=t_j^{-1/2}$, where $\widehat\tau_j=\prod_{a=j}^d u_a^{-2}$ and $y=\sum_j\widehat\tau_j\widehat\theta^j+b$. Both maps extend holomorphically to a complex polydisk about $u=0$ with values in $\check D$, and both take the value $F_{0,\lambda}$ at zero. In local holomorphic flag charts about these values, every fixed-order derivative in $u$ is bounded on a smaller closed polydisk, uniformly for the stipulated compact $x,b$ sets and on a finite cover of the compact $\lambda$-set. Since $\widehat\tau_j/\tau_j\to1$ uniformly in the sector, $\epsilon_{\mathrm{ord}}$ is comparable to $\sum_{j<d}(\tau_{j+1}/\tau_j)^{1/2}+\tau_d^{-1/2}$. The constants may depend on the fixed nilpotent orbit, sector directions and normalization matrix, compact parameter sets, and metric normalization, but are uniform in the divergent ratios. This makes the several-variable output and its ordered-sector estimates explicit; no one-variable estimate is substituted for them.

## Statement references

[[def-gts-polarized-variation-of-hodge-structure-and-period-map]]

[[def-rational-mixed-hodge-structure]]

[[thm-gts-limit-mixed-hodge-structure-and-nilpotent-orbit]]

[Cattani–Kaplan, §§3–4](https://numdam.org/item/AST_1989__179-180__67_0.pdf)


## Facts & Assumptions

**Given:** The polarized nilpotent orbit and its ordered sector in the Statement. A face means a subset of its commuting generators; its positive cone consists of positive real combinations of those generators. Every monodromy filtration below is zero-centred; Hodge weights are shifted by k separately.

For an increasing filtration W and a nilpotent endomorphism S preserving W, a relative monodromy filtration M means an increasing filtration with S $M_m⊆M_{m−2}$ and, for every integer w and $r≥0$, an isomorphism $S^r:Gr^M_{w+r}Gr^W_w V→Gr^M_{w−r}Gr^W_w$ V. Existence is proved where used below.

[F1] The one-variable extension, nilpotent-orbit and polarized limiting-MHS result is [[thm-gts-limit-mixed-hodge-structure-and-nilpotent-orbit]].

[F2] The sharp flat-vector Hodge-metric growth statement, also for real monodromy without a lattice, is [[lem-gts-unipotent-hodge-metric-sharp-weight-growth]].

[F3] Deligne's explicit functorial splitting, strictness and the MHS structures on kernels/images are [[lem-deligne-splitting-of-a-mixed-hodge-structure]] and [[lem-morphisms-of-mixed-hodge-structures-are-strict]]. Their finite proofs apply over R as well as Q; no integrality is used in those linear-algebra identities.

[F4] The zero-centred nilpotent filtration, self-duality and finite primitive string decomposition are [[lem-nilpotent-lefschetz-filtration-is-canonical-and-self-dual]]. The horizontal Schwarz bound is [[lem-gts-horizontal-period-map-distance-decreasing]].

## Proof

**Proof technique:** direct.

1.1 The one-variable argument needed below also applies to a polarized real variation: its logarithmic frame, curvature/cylinder extension, real nilpotent weight grading, explicit norm models and finite-dimensional polarization recognition use only the real flat bundle and Q, never lattice integrality. Repeating those displayed constructions over R proves exactly the same extension/LMHS assertion for the real monodromy combinations used here; rationality is used only to label a resulting MHS rational when a rational local system is present. Put $N(c)=\sum c_iN_i$ for positive $c_i$. It defines the one-variable orbit z↦exp(zN(c))F on a sufficiently high half-plane. The same construction on a face fixes the complementary coordinates in its admissible interior. (Uniform comparison of positive rays.) Fix positive c,d and y large. Join iyc to iyd by changing coordinates one at a time, keeping each imaginary coordinate between y $min(c_i,d_i)$ and y $max(c_i,d_i)$. For the i-th coordinate, with all others held fixed, this is a horizontal one-variable period map on a translated upper half-plane. The Schwarz constant depends only on the Hodge numbers, not on the held parameters. After increasing the common lower bound Y, its Higgs operator satisfies $||A_i||≤C/(\operatorname{Im} z_i)$. A fixed translation of the half-plane changes this bound by at most a factor two here. [F1, F2, F3, F4, given, construct]

2.1 Along a path varying only $z_i$, write $\nabla=D+\sum_i(A_i\,dz_i+A_i^\dagger d\bar z_i)$ in the Hodge splitting; $D$ is metric-compatible. For a flat vector $v$, the identity $D_{z_i}v=-A_iv$ and its conjugate give $\partial_{z_i}\log h(v,v)=-2h(A_iv,v)/h(v,v)$. Cauchy–Schwarz therefore yields $|d\log h(v,v)|\le4\|A_i\|\,|dz_i|$. [F1, F2, step 1.1, given, algebra]

3.1 By step 1.1 and the horizontal Schwarz estimate, $\|A_i\|\le C/(\operatorname{Im}z_i)$ once all fixed coordinates lie above a common sufficiently large bound. Join $iyc$ to $iyd$, for positive vectors $c,d$, by changing the imaginary coordinates one at a time. Integration of step 2.1 along the $i$th segment gives [F1, F2, F3, F4, step 2.1, given, algebra]

4.1 $\left|\log\frac{h_{iyc}(v,v)}{h_{iyd}(v,v)}\right|\le C_0\sum_i\left|\log(c_i/d_i)\right|$. [F1, F2, F3, F4, step 3.1, algebra]

5.1 Exponentiating step 4.1 yields [F1, F2, F3, F4, step 4.1, algebra]

6.1 $e^{-C_0\sum_i|\log(c_i/d_i)|}h_{iyc}(v,v)\le h_{iyd}(v,v)\le e^{C_0\sum_i|\log(c_i/d_i)|}h_{iyc}(v,v)$. These constants are independent of $y$ and $v$, and uniform when $c,d$ range over a fixed compact subset of the positive orthant. This compares the actual flat-vector metrics, not only the compact-dual period points. [step 5.1, algebra]

7.1 The one-variable sharp growth theorem, applied to z↦exp(zN(c))F, says that the exponent of $h_{iyc}(v,v)$ is exactly the least l with $v∈W_l(N(c))$. Its proof uses only a nilpotent real marking action, the polarized Hodge data and the Schwarz estimate; no integrality of $c_i$ is needed. The two-sided comparison therefore implies [F1, F2, F3, F4, step 6.1, given, algebra]

8.1 W(N(c))=W(N(d)) [F1, F2, F3, F4, step 7.1, given, algebra]

9.1 for every positive c,d. Denote this common zero-centred filtration by W(C). The same conclusion on any face uses its own positive coefficients. No limit $c_i→0$ is asserted to retain the interior filtration. [F1, F2, F3, F4, step 8.1, given, algebra]

10.1 (A nilpotent horizontal generator has no uncontrolled compact part.) At a polarized Hodge filtration, decompose a real Q-skew endomorphism B satisfying $BF^p⊂F^{p−1}$ by its Hodge degree. It has only degrees −1,0,1: transversality excludes degrees $≤−2$ and reality gives the opposite exclusion. Write [F1, F2, F3, F4, step 9.1, given, algebra]

11.1 $B=A+K+A*$, [F1, F2, F3, F4, step 10.1, given, algebra]

12.1 where A has degree −1, K degree zero and K* =−K; the upper-degree component is A* for the positive Hodge metric. These adjoint signs follow by applying Q-skewness in each pair of Hodge blocks and using the alternating signs of the flat Hermitian polarization. [F1, F2, F3, F4, step 11.1, given, algebra]

13.1 If B is nilpotent, tr(B²)=0. Degree considerations and the adjoint identities give [F1, F2, F3, F4, step 12.1, given, algebra]

14.1 0=tr(K²)+2tr(AA*)=−||K||²_HS+2||A||²_HS. [F1, F2, F3, F4, step 13.1, given, algebra]

15.1 Thus $\|K\|_{\mathrm{HS}}=\sqrt2\|A\|_{\mathrm{HS}}$ and $\|B\|_{\mathrm{HS}}\le(2+\sqrt2)\|A\|_{\mathrm{HS}}$. In particular nilpotency rules out a large unitary degree-zero part invisible to the horizontal differential. For $B=N_i$ at Φ(z), A is precisely the horizontal Higgs coefficient in the i-th direction. Consequently [F1, F2, F3, F4, step 14.1, given, algebra]

16.1 $||N_i||_{h_z}≤C/(\operatorname{Im} z_i)$. [F1, F2, F3, F4, step 15.1, given, algebra]

17.1 This is the needed bound on the whole constant endomorphism $N_i$, not merely on its period-map tangent class. [F1, F2, F3, F4, step 16.1, given, algebra]

18.1 (Every generator lowers the common interior weight by two.) Choose a real Q-skew grading H of W(C) with $[H,N(c)]=−2N(c)$, as constructed in the one-variable proof. Along the c-ray, that proof gives uniform equivalence of $h_{iyc}$ with the explicit weight metric $y^H$. Decompose the fixed operator $N_i$ into ad H eigencomponents $(N_i)_a$. the whole-generator trace estimate above implies [F1, F2, F3, F4, step 17.1, given, algebra]

19.1 $||y^{H/2}N_i y^{−H/2}||₀≤C/y$. [F1, F2, F3, F4, step 18.1, given, algebra]

20.1 Projection to the finite eigenspaces gives $y^{a/2}||(N_i)_a||₀≤C_a/y$. Let $y→∞$. Every component with $a>−2$ vanishes. Therefore [F1, F2, F3, F4, step 19.1, given, algebra]

21.1 $N_iW_l(C)⊂W_{l−2}(C)$. [F1, F2, F3, F4, step 20.1, given, algebra]

22.1 The one-variable theorem for each c shows that (W(C)[−k],F) is an LMHS polarized by N(c). The given transversality and the displayed weight lowering show that each $N_i$ is a morphism from this MHS to its Tate twist by −1, hence has type (−1,−1). Every positive combination polarizes the same MHS, with its own primitive Lefschetz forms. [F1, F2, F3, F4, step 21.1, given, algebra]

23.1 (Relative face goal and simultaneous real split replacement.) Fix nonempty faces I⊂J, let T be a positive combination in I and S a positive combination in J\I, and put $U=T+S$. Write $W=W(I)$, $M=W(J)$. We prove $M=M(S,W)$: S lowers M by two and $S^a$ identifies M-degrees w+a,w−a on $Gr^W_w$. Fix the interior face J and first work with no other variables. By the cone root, (M[−k],F), $M=W(J)$, is polarized by every positive combination U of the $N_i$ in J, and every $N_i$ is a (−1,−1) morphism of that MHS. The finite intrinsic formula for W(I) uses only sums, intersections, kernels and images of powers of T. These are MHS subobjects: view $T^b$ as a morphism $H(b)→H$ for its image, and $H→H(−b)$ for its kernel. The strictness/abelian-category theorem for MHS therefore shows that each $W(I)_w$ is a sub-MHS of (M[−k],F). [F1, F2, F3, F4, step 22.1, given, algebra]

24.1 Let Z₀ act by p+q−k on the Deligne summand $I^{p,q}$ of this MHS. It is a complex grading of M, preserves F, and $[Z₀,N_i]=−2N_i$. The last identity is functoriality of the explicit Deligne splitting applied to $N_i:H→H(−1)$; the shift of the splitting under a Tate twist follows immediately from its displayed filtration formula. [F1, F2, F3, F4, step 23.1, given, algebra]

25.1 We may make Z₀ Q-skew while preserving all these properties. Its negative Q-adjoint −Z₀† is another grading of M, since M is Q-self-dual. It preserves F by Q-isotropy, and has the same commutators with the $N_i$. The finite negative-weight conjugation construction from the one-variable proof gives a unique exp B carrying Z₀ to −Z₀†, where B strictly lowers M and commutes with every $N_i$. Its weight-by-weight construction also preserves F, because both gradings preserve F and the ad Z₀ weight projections preserve F. Adjoint uniqueness gives $B^{\dagger}=B$. Replacing Z₀ by exp(B/2)Z₀exp(−B/2) therefore gives a complex Q-skew grading Z with the same F and $N_i$ properties. [F1, F2, F3, F4, step 24.1, given, algebra]

26.1 Now compare Z with its complex conjugate. The same unique negative-weight conjugation gives $\bar Z=\exp C\,Z\exp(-C)$, with C strictly lowering M and commuting with every $N_i$. Since both gradings are Q-skew, uniqueness gives $C^{\dagger}=−C$; conjugating the equation and using uniqueness gives $\bar C=-C$. Put [F1, F2, F3, F4, step 25.1, given, algebra]

27.1 $H=\exp(C/2)Z\exp(-C/2)$,    $F_s=\operatorname{exp}(C/2)F$. [F1, F2, F3, F4, step 26.1, given, algebra]

28.1 Then H is real and Q-skew, grades M, preserves $F_s$, and $[H,N_i]=−2N_i$. The pair $(M[−k],F_s)$ is R-split: on every H eigenspace its filtration is the pure real Hodge filtration on the corresponding $Gr^M$, unchanged because exp(C/2) acts trivially there. Q and all primitive forms are unchanged on these graded pieces. Consequently every positive U still polarizes this R-split MHS. [F1, F2, F3, F4, step 27.1, given, algebra]

29.1 All face weight filtrations are preserved in this construction. Initially they are preserved by Z₀ as MHS subobjects. Alternatively, once a grading has $[Z,N_i]=−2N_i$, it preserves the intrinsic kernel/image formula for each face weight filtration. The correcting B,C commute with every $N_i$ and thus preserve those same filtrations. Hence each face filtration remains a sub-MHS after the split replacement: it is H-stable, and on $Gr^M$ its induced pure substructures are unchanged. [F1, F2, F3, F4, step 28.1, given, algebra]

30.1 For completeness, a split polarized MHS gives $\operatorname{exp}(iU)F_s∈D$ for every positive polarizing U. To see this directly, its real grading H and U form an sl₂ representation by the primitive string formulas. The primitive spaces carry the polarized pure Hodge structures specified by the primitive forms; on each string exp(iU) is the explicit rank-two symmetric-power model of the completed one-variable proof. Tensoring with the primitive pure structure gives a polarized pure structure, and taking their finite orthogonal direct sum proves membership. Thus $\operatorname{exp}(zT+wU)F_s$ lies in D whenever Im z,Im $w>0$ and $U=T+S$: its imaginary generator is (Im z+Im w)T+(Im w)S, an interior positive combination. [F1, F2, F3, F4, step 29.1, given, algebra]

31.1 (A polarized one-variable variation on every face-graded piece.) For each fixed w in the upper half-plane apply the completed one-variable theorem to [F1, F2, F3, F4, step 30.1, given, algebra]

32.1 $z↦\operatorname{exp}(zT+wU)F_s$. [F1, F2, F3, F4, step 31.1, given, algebra]

33.1 Its untwisted limiting filtration is exactly $\operatorname{exp}(wU)F_s$, and its weight filtration is $W=W(I)$. Thus $(W[−k],\operatorname{exp}(wU)F_s)$ is polarized by T. U preserves W since it commutes with T. On every W-graded piece, and on its T-primitive subspaces, $\operatorname{exp}(wU)F_s$ is therefore a polarized pure Hodge filtration. It is holomorphic in w and U-transverse. The polarization is the fixed real form $Q_l(u,v)=Q(u,T^l v)$ on a highest primitive piece $P_l⊂Gr^W_l$. U preserves that primitive piece, commutes with T and is $Q_l$-skew. [F1, F2, F3, F4, step 32.1, given, algebra]

34.1 H preserves W, hence acts on all these graded spaces. It preserves their induced $F_s$, preserves $P_l$, and satisfies $[H,U]=−2U$. On $P_l$ the operator $H_l=H−l·1$ is $Q_l$-skew. Indeed [F1, F2, F3, F4, step 33.1, given, algebra]

35.1 $Q_l(Hu,v)+Q_l(u,Hv)=2l Q_l(u,v)$, [F1, F2, F3, F4, step 34.1, given, algebra]

36.1 by Q-skewness of H and $[H,T^l]=−2lT^l$. Subtracting l on each side gives the assertion. $H_l$ is real and semisimple with integral eigenvalues. [F1, F2, F3, F4, step 35.1, given, algebra]

37.1 Because $H_l$ preserves the induced $F_s$ and rescales U, the real $Q_l$-isometry $y^{H_l/2}$ carries $\operatorname{exp}(iyU)F_s$ to $\operatorname{exp}(iU)F_s$. Hence the actual Hodge metric on $P_l$ satisfies the exact formula [F1, F2, F3, F4, step 36.1, given, algebra]

38.1 $h_y(v,v)=h_1(y^{H_l/2}v,y^{H_l/2}v)$. [F1, F2, F3, F4, step 37.1, given, algebra]

39.1 In a fixed eigenbasis this is uniformly equivalent to $\sum _a y^a||v_a||²$. The completed sharp one-variable growth theorem, applied to this pure variation on $P_l$, says that the same growth exponent identifies $W(U|P_l)$. Therefore that monodromy filtration is exactly the filtration by $H_l$ eigenvalues. In particular $U^a$ identifies $H_l$ eigenvalue a and −a spaces. This conclusion is proved from the metric formula; a relative hard-Lefschetz statement was not assumed. [F1, F2, F3, F4, step 38.1, given, algebra]

40.1 The primitive decomposition of $Gr^W$ V is a direct sum of strings $T^jP_l$, at W-degree l−2j. U preserves $P_l$ and commutes with T. H has eigenvalues shifted down by 2j on $T^jP_l$. Thus the corresponding H−(l−2j) eigenvalues and U-string structures are the same as on $P_l$. We have proved on every W-degree w that $U^a$ identifies H-eigenvalue w+a and w−a. Since H splits M, these are precisely the required M-graded isomorphisms on $Gr^W_w$. [F1, F2, F3, F4, step 39.1, given, algebra]

41.1 On the whole space U lowers M by two. Thus M is the relative monodromy filtration of U with respect to W. On a fixed $Gr^W_w$ the induced action of T is zero, because T lowers W by two; hence U and $S=U−T$ induce the same action there. S also lowers M by two. Consequently the same M is the relative monodromy filtration of S with respect to W, proving the stated identity. [F1, F2, F3, F4, step 40.1, given, algebra]

42.1 (Restriction to earlier face steps.) For K⊂I, every $N_i$ with $i∈I$ is a (−1,−1) morphism of the T-limiting MHS just constructed, by the simultaneous-lowering cone root applied to face I. In particular the intrinsic kernel/image construction of $W(K)_b$ gives sub-MHSs of $(W(I)[−k],\operatorname{exp}(wU)F_s)$ for every w in the upper half-plane. Thus $Gr^{W(I)}_a(W(K)_b)$ is a pure Hodge subvariation of $Gr^{W(I)}_a(V)$, stable under U and H. [F1, F2, F3, F4, step 41.1, given, algebra]

43.1 The entire graded space $Gr^{W(I)}_a(V)$ has a fixed polarization preserved by U and by H−a. Use its primitive string decomposition at degree $a=l−2j$ and transfer $Q_l$ from $P_l$ to $T^jP_l$ by the isomorphism $T^j$, then take the orthogonal direct sum. This is a polarization in the repository convention $h(u,v)=Q(Cu,\bar v)$: shifting both Hodge indices down by j leaves the Weil operator C unchanged, and the new weight k+a differs from k+l by the even integer 2j, so its parity also agrees. Both U and H preserve each primitive string summand. Under $T^j$ the operator H−a pulls back to $H−a−2j=H−l$; the displayed adjoint calculation thus gives skewness for this transferred $Q_l$. Hence the constructed whole-graded polarization has the asserted invariances. [F1, F2, F3, F4, step 42.1, given, algebra]

44.1 Restrict its positive Hodge metric to the pure Hodge subvariation $Gr^{W(I)}_a(W(K)_b)$. The exact rescaling identity and the sharp one-variable growth theorem apply there as well. They prove the same relative-Lefschetz isomorphisms on that subspace. Therefore $W(J)|_{W(K)_b}$ is the relative monodromy filtration of $S|_{W(K)_b}$ with respect to $W(I)|_{W(K)_b}$. This supplies the earlier-face restriction clause used by a Deligne system; it is not inferred merely from existence on V. [F1, F2, F3, F4, step 43.1, given, algebra]

45.1 For J smaller than the full original index set, fix the remaining imaginary coordinates sufficiently far inside the original period domain and apply the same construction to the J-variable nilpotent orbit with that fixed limiting filtration. The monodromy filtrations and their relative identities are properties of the operators alone. This proves the assertion for every nested pair of nonempty faces. For the initial pure filtration, the first relative identity is the definition of W(I)[−k]. [F1, F2, F3, F4, step 44.1, given, algebra]

46.1 For the next finite construction, let M be the relative monodromy filtration of N with respect to W, and let Z grade M, preserve W and satisfy [Z,N]=−2N. We construct the unique grading Y of W commuting with Z for which the negative Y-degree components of N are highest-primitive under the leading sl₂ triple. The preceding face argument supplies this exact hypothesis when the construction is applied below. [F1, F2, F3, F4, step 45.1, given, algebra]

47.1 (Initial grading and the leading sl₂ representation.) Since Z preserves W and is semisimple, split W separately inside its finitely many Z eigenspaces; this gives some grading Y₀ of W commuting with Z. Put $H₀=Z−Y₀$. On the Y₀-weight-w summand, the degree-zero component $L=N₀$ of N is the operator induced on $Gr^W_w$. The relative-monodromy isomorphisms say that $L^r$ identifies the H₀-weight-r and H₀-weight-(-r) summands. The finite primitive/string construction therefore gives the unique raising operator R with $[H₀,R]=2R$ and $[R,L]=H₀$. On a highest string e,L $e,…,L^m$ e it is R $L^a e=a(m−a+1)L^{a−1}e$. Thus (L,H₀,R) is an actual sl₂ representation, not an assumed relative splitting theorem. [F1, F2, F3, F4, step 46.1, given, algebra]

48.1 Use the adjoint representation on End(V). If End(V)_s denotes H₀-weight s, its elementary string decomposition gives, for j≥1, [F1, F2, F3, F4, step 47.1, given, algebra]

49.1 End(V)_{j−2} = [L,End(V)_j] ⊕ (ker ad R ∩End(V)_{j−2}). [F1, F2, F3, F4, step 48.1, given, algebra]

50.1 Moreover ad L is injective on $End(V)_j$. To verify both assertions, check each irreducible string: at positive weight j the lowering map is injective; its target at j−2 is missed exactly by a highest vector of weight j−2. When $j=1$ the target has negative weight −1 and no highest vector occurs, so the lowering map is bijective. This proves the decomposition without a semisimple-group theorem. [F1, F2, F3, F4, step 49.1, given, algebra]

51.1 The same decomposition holds inside every ad Y₀ eigenspace, since L,H₀,R commute with Y₀. In particular, inside ad Y₀ weight −j it identifies the ad Z weight −2 target with the image under ad L of the ad Z weight zero source, plus its highest-primitive complement. [F1, F2, F3, F4, step 50.1, given, algebra]

52.1 (Eliminate successively, with no infinite series.) Hold Y₀,Z fixed as coordinate gradings and conjugate N only. Since N preserves W, its ad Y₀ weights are nonpositive. Its weight-zero term is L. Every negative term $N_{−j}$ has ad Z weight −2, hence ad H₀ weight j−2. [F1, F2, F3, F4, step 51.1, given, algebra]

53.1 Suppose weights −1,…,−j+1 have already been normalized to lie in ker ad R. Decompose the weight −j term uniquely as [F1, F2, F3, F4, step 52.1, given, algebra]

54.1 $N_{−j}=[L,U_{−j}]+P_{−j}$, [F1, F2, F3, F4, step 53.1, given, algebra]

55.1 where $U_{−j}$ has ad Y₀ weight −j and ad Z weight zero, and $P_{−j}$ lies in ker ad R. Conjugate the current N by $\operatorname{exp}(U_{−j})$. Its term of weight −j changes by $[U_{−j},L]=−[L,U_{−j}]$, leaving exactly $P_{−j}$; all other new commutators have more negative W degree. The previously normalized terms stay fixed. The conjugation commutes with Z because $[Z,U_{−j}]=0$. [F1, F2, F3, F4, step 54.1, given, algebra]

56.1 Continue through the finitely many possible negative ad Y₀ weights. All $U_{−j}$ strictly lower W, so their exponentials and products are finite nilpotent polynomials. Let u be the product, so $uNu^{-1}$ is normalized relative to Y₀. Set $Y=u^{-1}Y₀u$. It splits W, commutes with Z, and transporting the leading triple and the primitive conditions gives exactly the claimed normalization of N relative to Y. This is an actual finite algorithm, requiring no convergence estimate. [F1, F2, F3, F4, step 55.1, given, algebra]

57.1 (Uniqueness and naturality.) Any two gradings of W commuting with Z differ by a unique unipotent conjugation lowering W and commuting with Z. Indeed, on each Z eigenspace send the first splitting's lift of every $Gr^W_w$ vector to the second splitting's lift; this determines the unipotent map, and its finite logarithm strictly lowers W. [F1, F2, F3, F4, step 56.1, given, algebra]

58.1 Suppose two normalized gradings differ. In coordinates for the first, let $U_{−j}$ be the highest nonzero W-degree component of the logarithm of the conjugation. Its change to the $N_{−j}$ term lies in im ad L, whereas both normalized terms lie in ker ad R. The direct-sum highest-primitive direct-sum decomposition above forces $[L,U_{−j}]=0$. Injectivity of ad L on the positive H₀ weight j then forces $U_{−j}=0$, a contradiction. This proves uniqueness, and hence independence of the initial splitting Y₀. [F1, F2, F3, F4, step 57.1, given, algebra]

59.1 Replacing N by λN replaces L by λL and R by λ^{-1}R and leaves the normalization condition unchanged; uniqueness gives the same Y. Direct sums of the unique gradings satisfy the same normalization and are therefore the unique grading of the direct sum. [F1, F2, F3, F4, step 58.1, given, algebra]

60.1 For a map f:V→V′ preserving W and commuting with N and Z, consider the shear (v,v′)↦(v,v′+f(v)) on V⊕V′. It is an automorphism preserving W,N,Z. Uniqueness makes it commute with the canonical direct-sum grading, which says exactly fY=Y′f. Thus naturality holds even when f is not invertible. [F1, F2, F3, F4, step 59.1, given, algebra]

61.1 Duality follows from the same uniqueness: the negative transpose of Y grades the dual W, the negative transpose of Z grades the dual M, and transposing the triple and primitive normalization gives the corresponding dual construction. Consequently a preserved perfect pairing identifies Y with its negative adjoint whenever W,M are self-dual in the zero-centred convention; in a shifted convention subtract the common central scalar first. [F1, F2, F3, F4, step 60.1, given, algebra]

62.1 (Construct the commuting gradings.) Order the generators as $N_1,…,N_d$. Set $W_j=W(N_1+⋯+N_j)$, and let $W_0$ be the pure filtration concentrated in degree zero. The preceding steps establish all successive relative identities and earlier-face restriction clauses. Use the simultaneous split replacement of the relative-face proof for the full cone. It gives a real Q-skew grading $H_d$ of $W_d$ and an R-split filtration $F_s$, with $H_dF_s=F_s$, $[H_d,N_i]=−2N_i$, and every $W_j$ a sub-MHS. Moreover [F1, F2, F3, F4, step 61.1, given, algebra]

63.1 $F=\operatorname{exp}(η)F_s$, [F1, F2, F3, F4, step 62.1, given, algebra]

64.1 where η is complex Q-skew, commutes with every $N_i$, preserves every $W_j$, and strictly lowers $W_d$. Explicitly $η=−C/2$ in that construction; its first Q-skew correction preserved F. [F1, F2, F3, F4, step 63.1, given, algebra]

65.1 Recursively define [F1, F2, F3, F4, step 64.1, given, algebra]

66.1 $H_{j−1}=Y(N_j,H_j;W_{j−1},W_j)$, [F1, F2, F3, F4, step 65.1, given, algebra]

67.1 using the actual finite normalized relative-grading algorithm. Its hypotheses hold by the preceding relative-face proof. We prove, downwards in j, the properties needed to continue and the resulting commutations. [F1, F2, F3, F4, step 66.1, given, algebra]

68.1 (a) $H_{j−1}$ preserves each earlier filtration $W_a$. Write $W_{a,b}:=(W_a)_b$ for its b-th subspace, where $W_a=W(N_1+⋯+N_a)$. For each $W_{a,b}$ with $a<j−1$, the relative-filtration identity restricts to that subspace, $H_j$ preserves it, and $N_j$ preserves it. Apply naturality of the normalized grading to the inclusion of this restricted relative system. It gives preservation of $W_{a,b}$, hence of $W_a$. Later $W_a$ are also preserved, since $H_{j−1}$ commutes with their grading operators, as shown in (c). [F1, F2, F3, F4, step 67.1, given, algebra]

69.1 (b) For $i≤j−1$, $[H_{j−1},N_i]=−2N_i$. Regard $N_i$ as a map from this relative system to its shift by two: it lowers both $W_{j−1}$ and $W_j$ by two, commutes with $N_j$, and has $H_j$-degree −2. The shifted target has filtrations $W\prime _a=W_{a−2}$ and grading $H_j+2$, so the normalized construction on that target is $H_{j−1}+2$. Naturality therefore gives $N_iH_{j−1}=(H_{j−1}+2)N_i$, equivalently $[H_{j−1},N_i]=−2N_i$. This is a use of the actual shifted filtrations, not a claim that $N_i$ preserves a grading automatically. [F1, F2, F3, F4, step 68.1, given, algebra]

70.1 (c) $H_{j−1}$ commutes with every later $H_a$, $a≥j$. The case $a=j$ is part of the relative-grading construction. For $a>j$, conjugation by $\operatorname{exp}(sH_a)$ preserves $W_{j−1}$, fixes $H_j$ by induction, and rescales $N_j$ by exp(−2s). The normalized relative grading is invariant under this nonzero rescaling, so uniqueness forces conjugation to fix $H_{j−1}$. This proves commutation. In particular all $H_j$ commute, and $H_0=0$ because it grades the pure zero-centred $W_0$. [F1, F2, F3, F4, step 69.1, given, algebra]

71.1 (d) Each $H_j$ is real and Q-skew. Reality follows from uniqueness under conjugation. All $W_j$ are self-dual, and duality of the relative-grading algorithm gives Q-skewness. To see preservation of $F_s$, let the two Hodge tori of its split bigrading act after complexification. They preserve every $W_j$ and commute with $H_d$, and rescale every $N_i$ by the same nonzero scalar. Uniqueness and rescaling invariance, down the recursion, make their actions commute with every $H_j$. Therefore all $H_j$ preserve the full split bigrading and $F_s$. [F1, F2, F3, F4, step 70.1, given, algebra]

72.1 (Construct the actual commuting triples.) Let $L_i$ be the component of $N_i$ of $H_{i−1}$-weight zero. All other $H_{i−1}$ weights are negative, since $N_i$ preserves $W_{i−1}$. The relative-grading construction gives an sl₂ triple [F1, F2, F3, F4, step 71.1, given, algebra]

73.1 $(L_i,Y_i=H_i−H_{i−1},X_i)$. [F1, F2, F3, F4, step 72.1, given, algebra]

74.1 We must prove that $L_i$ has weight zero for every earlier $H_a$, not merely $H_{i−1}$. For $a<i$, $N_a$ has $H_{i−1}$-weight −2. Projecting $[N_a,N_i]=0$ to $H_{i−1}$-weight −2 shows $[N_a,L_i]=0$. The projection defining $L_i$ preserves every earlier $W_a$ because all their gradings commute. Thus $L_i$ preserves each $W_a$ and commutes with $H_{i−1}$ and $N_{i−1}$. Naturality of $H_{i−2}=Y(N_{i−1},H_{i−1})$ makes it commute with $H_{i−2}$. Repeat this argument through the earlier recursion: $L_i$ commutes with every $H_a$ for $a<i$. [F1, F2, F3, F4, step 73.1, given, algebra]

75.1 For $a≥i$, $N_i$ has $H_a$-weight −2; the commuting projections show that $L_i$ has the same weight. Consequently [F1, F2, F3, F4, step 74.1, given, algebra]

76.1 $[Y_a,L_i]=−2L_i$ if $a=i$, and $[Y_a,L_i]=0$ otherwise. [F1, F2, F3, F4, step 75.1, given, algebra]

77.1 For $i<j$, projecting $[N_i,N_j]=0$ to $H_{j−1}$-weight −2 gives $[N_i,L_j]=0$. Since $L_j$ commutes with $H_{i−1}$, its commutator also commutes with the projection defining $L_i$; hence $[L_i,L_j]=0$. Each other $L_j,Y_j$ therefore commutes with $L_i,Y_i$. The raising operator $X_i$ is uniquely determined by its lowering operator and grading, so conjugating by $\operatorname{exp}(sL_j)$ or $\operatorname{exp}(sY_j)$ fixes $X_i$. Repeating the uniqueness argument for $X_j$ gives mutual commutation of the full triples. [F1, F2, F3, F4, step 76.1, given, algebra]

78.1 All triples are real and Q-skew, by their construction and uniqueness of the raising operator. Integrate using $d\rho(E_i)=L_i$, $d\rho(H_{\mathrm{std},i})=-Y_i$, $d\rho(F_{\mathrm{std},i})=X_i$. These assignments preserve $[H_{\mathrm{std}},E]=2E$, $[H_{\mathrm{std}},F_{\mathrm{std}}]=-2F_{\mathrm{std}}$ and $[E,F_{\mathrm{std}}]=H_{\mathrm{std}}$ because $[Y_i,L_i]=-2L_i$ and $[X_i,L_i]=Y_i$. The finite string decomposition therefore integrates them to a genuine representation [F1, F2, F3, F4, step 77.1, given, algebra]

79.1 $ρ:\operatorname{SL}(2,R)^d→\operatorname{Aut}(V_R,Q)$. [F1, F2, F3, F4, step 78.1, given, algebra]

80.1 No covering-group issue is hidden: on each irreducible factor it is the ordinary integral symmetric-power representation, whose matrix entries are polynomials in the entries of an SL₂ matrix. Their commuting direct sum/tensor decomposition gives the displayed group representation. [F1, F2, F3, F4, step 79.1, given, algebra]

81.1 The diagonal triple $(\sum L_i,\sum Y_i=H_d,\sum X_i)$ shows that $L=\sum L_i$ is Lefschetz for $W_d$. The filtration $F_s$ is preserved by every $Y_i$ and each $L_i$ has split Hodge type (−1,−1). [F1, F2, F3, F4, step 80.1, given, algebra]

82.1 (The limiting comparison point lies in D.) Set $t_j=y_j/y_{j+1}$ for $j<d$, $t_d=y_d$, and $u_j=t_j^{-1/2}$. Define the real Q-isometry [F1, F2, F3, F4, step 81.1, given, algebra]

83.1 $β(t)=\prod _{j=1}^d t_j^{H_j/2}=\prod _{i=1}^d y_i^{Y_i/2}$. [F1, F2, F3, F4, step 82.1, given, algebra]

84.1 All factors commute. Since $N_i$ preserves $W_j$ for $j<i$ and has $H_j$-weight −2 for $j≥i$, every joint H-weight component of [F1, F2, F3, F4, step 83.1, given, algebra]

85.1 $A_i(u)=Ad(β(t))(y_iN_i)$ [F1, F2, F3, F4, step 84.1, given, algebra]

86.1 is a monomial in the nonnegative integral powers of $u_1,…,u_{i−1}$. Its constant term is $L_i$; the equality follows from the earlier-zero-weight property proved above. Thus $A_i$ is a finite matrix polynomial, $A_i(0)=L_i$, and $A=\sum A_i$ tends to L. [F1, F2, F3, F4, step 85.1, given, algebra]

87.1 For positive u near zero, $A=Ad(β)(\sum y_iN_i)$ polarizes $(W_d[−k],F_s)$, because the interior generator does and β preserves Q, $W_d$ and $F_s$. Since the limiting L is Lefschetz, its primitive kernels have their expected dimensions and vary continuously near zero; this follows directly by inverting the nonzero Lefschetz minors and writing the primitive kernel as a graph. Their primitive Hermitian forms are positive for positive u, hence nonnegative in the limit. They are nondegenerate at L by Lefschetz and the perfect Q pairing between opposite $W_d$ weights. Nonnegative plus nondegenerate implies positive definite. Therefore L polarizes the split MHS. [F1, F2, F3, F4, step 86.1, given, algebra]

88.1 The elementary split-string argument in the relative-face proof now gives [F1, F2, F3, F4, step 87.1, given, algebra]

89.1 $F₀=\operatorname{exp}(iL)F_s∈D$. [F1, F2, F3, F4, step 88.1, given, algebra]

90.1 Together with the commuting triples and their Hodge bigrading, this defines a polarized SL₂^d orbit: its map on the product of upper half-planes is [F1, F2, F3, F4, step 89.1, given, algebra]

91.1 $Φ_{\mathrm{\operatorname{SL}}}(w)=ρ(g_w)F₀$, [F1, F2, F3, F4, step 90.1, given, algebra]

92.1 where $g_w$ sends $(i,\ldots,i)$ to $w$ by the stated upper-triangular matrices. With the integration convention of step 78.1, $\rho(g_{a+ib})=\exp(aL)b^{-Y/2}$ on each factor; since $YF_s=F_s$ and $\operatorname{Ad}(b^{-Y/2})L=bL$, it follows that $\rho(g_{a+ib})\exp(iL)F_s=\exp((a+ib)L)F_s$. Here the required polarized pure multiplicity spaces can also be identified directly. Decompose the commuting representations into tensor strings $\otimes \operatorname{Sym}^{m_i}(R²)\otimes P_m$. The joint highest space $P_m$ is Hodge-stable because all the raising operators have split Hodge degree (1,1), by their uniqueness under the split Hodge-torus action. Its highest total $H_d$ degree is $\sum m_i$, and it lies in the primitive kernel of $L^{1+\sum m_i}$. The form $Q(−,L^{\sum m_i}−)$ there is a positive multinomial/factorial multiple of the product standard-string pairing times the multiplicity pairing. Its already-proved primitive polarization therefore gives the pure polarized multiplicity structure, of weight $k−\sum m_i$ after removing the highest tensor-string types $(\sum m_i,\sum m_i)$. This also proves that the representation and filtration are the tensor products used below. [F1, F2, F3, F4, step 91.1, given, algebra]

93.1 The stabilizers SO(2)^d fix F₀. This last assertion can be checked on each elementary rank-two factor: exp(iL_i) sends its split (1,1)/(0,0) filtration to the standard polarized weight-one filtration, fixed by the rotations. On tensor products with the polarized pure multiplicity spaces the same check gives invariance and horizontality. Equivalently, [F1, F2, F3, F4, step 92.1, given, algebra]

94.1 $Φ_{\mathrm{\operatorname{SL}}}(w)=\operatorname{exp}(\sum w_iL_i)F_s$, [F1, F2, F3, F4, step 93.1, given, algebra]

95.1 and its membership for all $\operatorname{Im} w_i>0$ follows by the commuting real scalings $\prod (\operatorname{Im} w_i)^{-Y_i/2}$ and real translations. The representation and map are thus genuinely $\operatorname{SL}₂^d$-equivariant, including trivial factors when $L_i=0$. [F1, F2, F3, F4, step 94.1, given, algebra]

96.1 (Convergent normalized expansion and uniform estimates.) Since η preserves every $W_j$ and strictly lowers $W_d$, every joint H-weight of η is nonpositive in each index and strictly negative in its last index. Consequently [F1, F2, F3, F4, step 95.1, given, algebra]

97.1 B(u)=Ad(β(t))η [F1, F2, F3, F4, step 96.1, given, algebra]

98.1 is a finite matrix polynomial in u, with $B(0)=0$. β fixes $F_s$, so the exact normalized original filtration is [F1, F2, F3, F4, step 97.1, given, algebra]

99.1 $\beta(t)\exp(i\sum y_iN_i)F=\exp(iA(u))\exp(B(u))F_s=:R(u)$. [F1, F2, F3, F4, step 98.1, given, algebra]

100.1 The right side is a holomorphic map of u in a complex neighborhood of the origin into the compact dual, $R(0)=F₀$. Because $F₀∈D$, the real u values near zero lie in D. Choose a real analytic local section of $G_R→D$ at F₀: select a vector-space complement to its compact stabilizer Lie algebra and apply the ordinary finite-dimensional real analytic inverse-function theorem to its exponential map. It gives a real analytic $g(u)∈G_R$ with [F1, F2, F3, F4, step 99.1, given, algebra]

101.1 g(0)=1,    R(u)=g(u)F₀. [F1, F2, F3, F4, step 100.1, given, algebra]

102.1 This construction proves a convergent Taylor expansion in the $u_j$, with real Lie-group values on real u. On a fixed smaller closed polydisc, it and its inverse satisfy [F1, F2, F3, F4, step 101.1, given, algebra]

103.1 $||g(u)−1||+||g(u)^{-1}−1||≤C\sum _j|u_j|$, [F1, F2, F3, F4, step 102.1, given, algebra]

104.1 and every fixed partial derivative has a uniform bound. Cauchy's inequalities give explicit derivative bounds C_α on any still smaller polydisc; these constants depend on the fixed orbit and sector and are independent of the ratios within that polydisc. This is an actual convergent local comparison, not an asymptotic formal series. [F1, F2, F3, F4, step 103.1, given, algebra]

105.1 For bounded real parts $x_i$, normalizing the translation gives $\operatorname{exp}(\sum x_iA_i(u)/y_i)$. Its exponent is $O(\sum |x_i|/y_i)$, with all $A_i$ bounded. The analogous normalized SL₂ translation is $\operatorname{exp}(\sum x_iL_i/y_i)$. Both extend analytically in u because $1/y_i=\prod _{j≥i}u_j²$. Hence the same comparison holds uniformly for bounded x. In particular, with $ε=\sum _j t_j^{-1/2}$, [F1, F2, F3, F4, step 104.1, given, algebra]

106.1 $d_D(Φ(x+iy),Φ_{\mathrm{\operatorname{SL}}}(x+iy))≤Cε$, [F1, F2, F3, F4, step 105.1, given, algebra]

107.1 for any fixed $G_R$-invariant Riemannian metric $d_D$ on the period domain, and [F1, F2, F3, F4, step 106.1, given, algebra]

108.1 $|h_Φ(v,w)−h_{\mathrm{\operatorname{SL}}}(v,w)|≤Cε·h_{\mathrm{\operatorname{SL}}}(v,v)^{1/2}h_{\mathrm{\operatorname{SL}}}(w,w)^{1/2}$ [F1, F2, F3, F4, step 107.1, given, algebra]

109.1 for all flat vectors v,w. To check these inequalities, apply β to both filtrations. They lie in one fixed compact neighborhood of F₀ and differ by O(ε); both the invariant domain metric and the Hodge metric are real analytic there. The derivative bound and Cauchy–Schwarz give the inequalities in that neighborhood. β is a $G_R$ isometry and transports the Hodge metric, so undoing it preserves the asserted intrinsic-distance and relative-metric inequalities. In particular $(1−Cε)h_{\mathrm{\operatorname{SL}}}≤h_Φ≤(1+Cε)h_{\mathrm{\operatorname{SL}}}$. These bounds hold simultaneously throughout $t_j≥T$ for one sufficiently large T. [F1, F2, F3, F4, step 108.1, given, algebra]

110.1 All normalized derivatives are controlled by the convergent u expansion. Differentiation in y or in its ratios is obtained by the explicit chain rule $u_j=(y_{j+1}/y_j)^{1/2}$, $u_d=y_d^{-1/2}$; no unproved sector-uniform derivative estimate is being assumed. [F1, F2, F3, F4, step 109.1, given, algebra]

111.1 (Fixed-direction sectors and bounded remainder.) For the Statement's sector $y=\sum_j\tau_j\theta^j+b$, put $M_j=\sum_i\theta_i^jN_i$ and use its fixed normalization matrix $C$ to set $\widehat M_j=\sum_{i\le j}c_{ji}M_i$. Then $\sum_i y_iN_i=\sum_j\widehat\tau_j\widehat M_j+\sum_i b_iN_i$, with $\widehat\tau^{\mathsf T}C=\tau^{\mathsf T}$. Each $\widehat M_j$ has nonnegative coefficients on its face and positive coefficients on newly entering coordinates; each cumulative sum $\sum_{a\le j}\widehat M_a$ lies in the open positive cone of $I_j$. In a sufficiently ordered sector the transformed parameters are positive, $\widehat\tau_j/\tau_j=1+O(\tau_{j+1}/\tau_j)$ uniformly, and their successive ratios are comparable to the original ones. Apply the preceding construction to $\widehat M_j,\widehat\tau_j$. Repeated faces allow trivial $\mathfrak{sl}_2$ factors. Its output parameters are exactly $w_j=\widehat\ell_j(x)+i\widehat\tau_j$ from the Statement, and $\epsilon_{\mathrm{ord}}$ is comparable to the original ordered-sector error. The common face filtrations and every relative identity used above are those already proved for this chain. [F1, F2, F3, F4, step 110.1, given, algebra]

112.1 Split the bounded complex coordinates into active indices $i\in I_d$ and omitted indices $i\notin I_d$. On the full active-face limiting mixed Hodge structure, every active $N_i$ has type $(-1,-1)$ by step 22.1, and the final grading satisfies $[H_d,N_i]=-2N_i$. Therefore the bounded active operator
$$D_{\mathrm{act}}=\sum_{i\in I_d}\left(x_i-\sum_j\widehat\ell_j(x)\widehat\theta_i^j+ib_i\right)N_i$$
has strictly negative $H_d$-degree; after conjugation by $\beta$, its exponential is a finite polynomial in $u$ with identity constant term. It contributes $O(\epsilon_{\mathrm{ord}})$ uniformly on the fixed compact active-coordinate set. For the omitted coordinates set $F_\lambda=\exp(\sum_{i\notin I_d}(x_i+ib_i)N_i)F$. The admissible-interior condition keeps these parameters in the nilpotent-orbit domain, and commutativity preserves the active generators and transversality. Run the construction with this parameter-dependent base filtration. It yields $F_{0,\lambda}$ and the local comparison models in the Statement. To verify parameter regularity explicitly, all flags $F_\lambda$ vary holomorphically in the omitted complex coordinates. For every fixed admissible $\lambda$, the active-face orbit is a polarized real one-variable orbit along any fixed positive active direction, so step 1.1 and the one-variable theorem give $(W_d[-k],F_\lambda)$ as an MHS. The relative-face proof makes each fixed earlier $W_{j,a}$ a sub-MHS of this object. Here is the local rank argument, explicitly restricted to this MHS family. Fix $\lambda_0$, one of these fixed subspaces $A$ (or $A=V$), and its fixed filtration $M_l=A\cap W_{d,l}$. Upper semicontinuity gives $\dim(M_l\cap F_\lambda^p)\le\dim(M_l\cap F_{\lambda_0}^p)$ near $\lambda_0$, simultaneously for the finitely many relevant $l,p$. Induct on $l$. Once equality holds at $l-1$, it implies the same inequality for the induced ranks $d_p(\lambda)=\dim F_\lambda^p\operatorname{Gr}^M_l A$. Purity of weight $k+l$ in each of the two actual MHSs gives $d_p(\lambda)+d_{k+l-p+1}(\lambda)=\dim\operatorname{Gr}^M_l A$, and the same equality at $\lambda_0$. The two upper bounds must consequently both be equalities. Starting at $M_l=0$ proves every needed intersection rank constant. This does not assert a rank statement for arbitrary nearby flags. Since $F_\lambda$ is holomorphic in the omitted complex coordinates, these constant-rank intersections are holomorphic subbundles; locally choose their frames and the finite primitive complements by nonzero matrix minors. The split grading and the $Q$-adjoint corrections in steps 24.1–29.1 are finite rational matrix expressions and nilpotent exponentials in those frames and their conjugates, and thus are real analytic in $\lambda$. The relative-grading algorithm uses only the same fixed-rank projections and inverses on finite strings; shrinking the neighborhood retains all its nonzero minors. Consequently $F_s(\lambda)$, $H_j(\lambda)$, $A_i(u,\lambda)$ and $B(u,\lambda)$ depend real analytically on $\lambda$, with the latter two polynomial in $u$. The local flag chart and the Lie-group section used in steps 100.1–104.1 can be chosen on that neighborhood. Their derivatives of every fixed order in $u$ are bounded on a smaller closed polydisk times a compact parameter neighborhood. A finite cover of the stipulated compact admissible $\lambda$-set proves the asserted uniform constants and derivative bounds. This is a local matrix construction of the parameter extension, not an invocation of an external compact-parameter theorem. [F1, F2, F3, F4, step 111.1, given, algebra]

113.1 No uniformity is asserted as an omitted coordinate approaches the boundary of its admissible interior. For any fixed compact admissible set the local parameter models and their estimates are uniform by step 112.1. [F1, F2, F3, F4, step 112.1, given, algebra]

114.1 This supplies the polarized equivariant comparison orbit, its exact normalized convergent expansion, and uniform Hodge-filtration, intrinsic-distance and Hodge-metric estimates in the full ordered sector. It supplies neither CDK bounded-norm finiteness nor global K3 theory; those remain the next independent obligations. [F1, F2, F3, F4, step 113.1, given, algebra]

115.1 The constructed equivariant orbit, convergent normalized expansion and uniform derivative and metric estimates prove all ordered-sector assertions of the Statement. [F1, F2, F3, F4, step 114.1, given, algebra] ∎

## Source-reading limits

Cattani–Kaplan §§2–4 (printed pp. 72–86), Kato §§2–3 (printed pp. 3–12), and Brosnan–Pearlstein Appendix §§12–13 (printed pp. 38–46) were read. The relative-filtration, normalized-grading and commuting-triple interfaces actually used are reconstructed in steps 23.1–95.1. The comparison, convergent normalized expansion and compact-parameter bounds are proved in steps 96.1–113.1. The sources' general mixed-system, universal Lie-polynomial and Tannakian classification assertions are not premises or claims of this item.
