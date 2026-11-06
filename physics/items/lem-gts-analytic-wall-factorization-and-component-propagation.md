---
id: lem-gts-analytic-wall-factorization-and-component-propagation
kind: lemma
title: Analytic sector factorization and component propagation
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
category: string-theory
axiom_use: ZF + AC
deps:
  - def-triangulated-grothendieck-group
  - def-gts-bridgeland-stability-condition-with-support-property
  - def-axiom-of-choice
dependency_roles:
  def-triangulated-grothendieck-group: mathematical-premise
  def-gts-bridgeland-stability-condition-with-support-property: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Kontsevich and Soibelman, Analyticity and resurgence in wall-crossing formulas
      url: https://arxiv.org/pdf/2005.10651v3
      locator: "Sections 3.1–3.5, 3.8 and 3.11; analytic factorization is reconstructed by explicit Wiener/Newton estimates."
verification:
  precheck: pending
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
dependency_level: 1
---

## Statement

Assume the Axiom of Choice. Let Γ be a finite-rank lattice and let a continuous formal stability datum on the Γ-graded Lie algebra of torus vector fields be specified by strict-cone sector elements, their factorization, support quadratic forms and Hausdorff cyclic-cover central-charge charts. Call such a datum analytic when one cyclic representative consists of convergent holomorphic torus germs. Rational strict-sector factors of an analytic sector element are analytic. The analytic locus in this formal stability-data space is open and closed. Consequently, if a connected component contains one datum whose active charges lie in finitely many integer-linear families with bounded DT coefficients and the support property, every datum in that component defines an analytic wall-crossing structure: transitions for sufficiently close decorated rational points are convergent holomorphic torus transformations. Here the DT clause uses a specified Hamiltonian realization: an integral skew bilinear form $b:\Gamma\times\Gamma\to\mathbb Z$, the derivations $D_\eta(x^\beta)=b(\beta,\eta)x^\beta$, and ray logarithms $\log A_\ell=-\sum_{Z(\eta)\in\ell}\sum_{k\ge1}\Omega(\eta)x^{k\eta}D_\eta/k$. Thus the scalar DT coefficients specify actual vector fields; the factorization and open-and-closed assertions themselves apply to all torus vector fields. No existence of a DT integration map, nor a coefficient-growth assertion at every other point, is part of this conclusion.

## Facts & Assumptions

**Given:** The actual formal datum and cyclic-cover topology in the Statement. A charge cone is closed and strictly convex and has an integral positive height with finitely many lattice points below each height. Its completed group consists of formal maps $x^β\mapsto x^β(1+\text{positive-cone terms})$, equivalently z↦z+u(exp z) in logarithmic coordinates. Formal sector factorization and support are given data; analytic factorization is proved below.

[F1] [[def-triangulated-grothendieck-group]] defines the abelian group obtained from object classes by the distinguished-triangle relations. A finite-rank free charge lattice and a homomorphism to it are separate specified data in [[def-gts-bridgeland-stability-condition-with-support-property]], which also fixes the support inequality and stability topology on the consuming category. The finite-rank lattice in this lemma is an explicit hypothesis, not a consequence of the Grothendieck-group definition. The formal datum here has the explicitly stated cyclic-cover charts, not a presumed analytic structure.

[F2] [[def-axiom-of-choice]] is the ambient foundational base; the Newton iteration below is explicit and uses no extra nonconstructive convergence assumption.

## Proof

1.1 An explicit analytic two-cone factorization. Let Γ be a finite-rank lattice, C a closed strictly convex charge cone with an integral linear height h strictly positive on $C\setminus\{0\}$. Choose c so ||γ||≤c h(γ) on C. Suppose C is partitioned into two additive submonoids $C_+,C_-$ by a rational hyperplane, assigning the common boundary to one side. The two corresponding completed vector-field Lie algebras are subalgebras and are a direct sum as vector spaces. Formal factorization $G_C=G_{C+}G_{C-}$ is unique: order by the positive integer height, split the first nonzero homogeneous term into the two supports, and iterate; only finitely many lattice degrees occur below each height. [F1, F2, given, algebra]

2.1 For a vector series $u=\sum_{γ\in Γ∩C\setminus 0}u_γ$ $x^γ$ put $||u||_R=\sum_γ$ $||u_γ||$ $e^{-R h(γ)}$. [F1, F2, step 1.1, algebra]

3.1 These are complete weighted ℓ1 spaces, and their scalar norms are submultiplicative. Finite norm gives normal convergence in a slightly smaller logarithmic polydisc about $x_j=\exp (-R h(e_j))$; use h(γ)≥||γ||/c to bound every monomial on that polydisc. Conversely an analytic Laurent germ supported in C has finite norm for all sufficiently large R. Coefficientwise support projections $P_±$ have norm≤1. [F1, F2, step 2.1, algebra]

4.1 Use logarithmic coordinates $z_j=\log$ $x_j$ near these torus points. A group element has the form z↦z+u(x) with support C. Direct coefficient estimates give, for $δ>0$, $||Du||_{R+δ}\le (c/δ)||u||_R$. [F1, F2, step 3.1, algebra]

5.1 Indeed each derivative multiplies its γ coefficient by a coordinate of γ, and $\sup _{a\ge 0}$ a $e^{-δ a}\le 1/δ$. Also [F1, F2, step 4.1, algebra]

6.1 $u(z+v)=\sum_γ$ $u_γ$ $x^γ$ $\exp (<γ,v>)$. [F1, F2, step 5.1, algebra]

7.1 The weighted-algebra estimate for the exponential shows that if $c||v||_{R+δ}\le δ/2$ then $||u(z+v)-u(z)||_{R+δ}\le K$ $δ^{-1}||u||_R$ $||v||_{R+δ}$, [F1, F2, step 6.1, algebra]

8.1 with K depending only on the chosen coordinate norm and c. Increasing R by an additional δ where needed leaves the same estimate with a uniform K. Inverse maps exist with explicit bounds: solve $w=-u(z+w)$ by contraction on $||w||_{R+δ}\le 2||u||_R$; the derivative estimate makes this a contraction when $K||u||_R/δ$ is small. This proves an analytic inverse with the same cone support, not merely a formal inverse. [F1, F2, step 7.1, algebra]

9.1 Take $g=id+u$ with $||u||_R=ε$ small compared with δ. Put $k_±=id+P_±u$. Their product differs from g only by the composition cross term, bounded by Kε²/δ on the smaller domain. The middle residual [F1, F2, step 8.1, algebra]

10.1 $e_{\mathrm{new}}=k_+^{-1}$ g $k_-^{-1}$ [F1, F2, step 9.1, algebra]

11.1 therefore has norm≤K′ε²/δ after increasing R by4δ. This follows from the inverse estimate and the displayed composition estimate; the linear term cancels exactly. Each $k_±$ lies in its own cone group, since its formal inverse and analytic inverse coincide. [F1, F2, step 10.1, algebra]

12.1 Iterate with $δ_j=δ0\cdot 2^{-j}$, $R_{j+1}=R_j+4δ_j$. If $ε_j$ is the middle-residual norm then $ε_{j+1}\le K'$ $ε_j^{2}/δ_j$. [F1, F2, step 11.1, algebra]

13.1 Thus $a_j=ε_j/δ_j$ satisfies $a_{j+1}\le 2K'a_j^{2}$. Choosing $a_0<\min (\text{the contraction threshold},1/(4K'))$ makes $a_j$ decrease doubly exponentially. The sum of the R increments is8δ0 and Σ $ε_j$ is as small as desired compared with δ0. [F1, F2, step 12.1, algebra]

14.1 If $g=h_+$ $e_j$ $h_-$ at stage j, update $h_+\to h_+k_+$, $h_-\to k_-h_-$. The products and their inverses converge normally on the FIXED final smaller domain $R*=R0+9δ0$. The extra fixed δ0 margin is important: it absorbs the total displacement of either product, including the reversed-order $h_-$ product; one must not use only the vanishing tail margin $R_\infty -R_j$. The total displacement is bounded by a constant times Σ $ε_j<δ0/2$, and each factor's derivative is bounded on that domain by the preceding estimates. Hence the products are Cauchy there with summable increments. The residual tends to the identity, proving $g=h_+h_-$ with both factors analytic. Their formal uniqueness identifies them with the desired sector factors. [F1, F2, step 13.1, algebra]

15.1 Finally there is no smallness restriction on an ANALYTIC g: replace R0 by a sufficiently large value. Its zero-constant-term norm tends to zero by dominated convergence of its absolutely convergent coefficient series. This proves analytic factorization for the rational sector cuts needed below, in every finite lattice rank, without a toric compactification or an analytic formal-neighborhood algebraization assertion. [F1, F2, step 14.1, algebra]

16.1 For the DT clause use the Hamiltonian realization specified in the Statement. A torus vector field of degree $\eta$ has the form $x^\eta v$ with $v\in\operatorname{Hom}(\Gamma,\mathbb C)$, acting by $(x^\eta v)(x^\beta)=v(\beta)x^{\eta+\beta}$. Skewness gives $D_\eta(x^\eta)=0$, so $\exp(\Omega(\eta)\log(1-x^\eta)D_\eta)$ is the usual individual DT transformation. Several charges on a central-charge ray need not commute; the given ray map is instead the exponential of the full ray logarithm stated above. This avoids any generic-central-charge hypothesis. [given, step 15.1, algebra]

17.1 Fix a strict support cone and its positive height $h$. Since $b$ is bilinear on a finite-dimensional space, $\|D_\eta\|\le B\|\eta\|$ for a constant $B$. If $V_\ell$ denotes the logarithmic-coordinate vector field $\log A_\ell$, the triangle inequality and $\sum_{k\ge1}q^k/k\le q/(1-q)$ give the summable majorant below; collecting equal monomials can only decrease its norm. [given, step 16.1, algebra]

18.1 In the weighted norm of step 2.1, $\sum_\ell\|V_\ell\|_R\le B\sum_{\eta\ {active}}|\Omega(\eta)|\|\eta\|e^{-Rh(\eta)}/(1-e^{-Rh(\eta)})=:M_R$. Bounded coefficients and the height inequality make $M_R$ finite for all sufficiently large $R$ and $M_R\to0$. Indeed the number of lattice points of height at most $m$ in the cone is $O(m^{\operatorname{rank}\Gamma})$, so even the larger sum over all lattice points is dominated by a polynomial times a convergent geometric series. In particular the asserted finite-family spectrum satisfies this bound. [given, step 2.1, step 17.1, algebra]

19.1 Choose a fixed positive domain margin $\delta$ and then $R$ with $M_R$ small compared with $\delta$. On the inner tube the integral equation $u(t)=\int_0^t V_\ell(z+u(s))\,ds$ is a contraction on a displacement ball, by the composition and derivative estimates of steps 4.1–8.1. It gives the time-one flow $A_\ell$ with displacement at most $2\|V_\ell\|_R$ and derivative bounded by $\exp(K\|V_\ell\|_R/\delta)$ after allocating the fixed margin. All finite clockwise products stay inside the larger tube since their total displacement is at most $2M_R$; their derivatives are bounded uniformly by $\exp(KM_R/\delta)$. Inserting omitted ray factors changes a product by at most this uniform bound times twice their tail norm. The net of finite clockwise products and its inverse net therefore converge normally on a fixed smaller tube. This uses finite subsets ordered by inclusion, so accumulating rays require no first ray. In each bounded height the formal coefficients stabilize; hence the limit is the given formal sector element. Its inverse is the inverse limit, making it a holomorphic torus germ. A finite cyclic sector cover supplies an analytic representative at the initial datum. [given, step 4.1, step 8.1, step 18.1, algebra]

20.1 The open-and-closed propagation argument. Use the precise cyclic-cover topology on formal stability data: a local chart fixes a finite representative collection $g_i$ supported in strict cones $C_i$ while varying Z sufficiently little that $Z(C_i\setminus 0)$ remains inside the chosen open sectors. This is the source topology, not a claim that EACH individual ray invariant is locally constant. Degreewise wall-crossing/HN gives the equivalent adic description. The support property supplies locally a common quadratic form Q, negative on ker Z and nonnegative on the support. [F1, F2, step 19.1, algebra]

21.1 Analyticity is open: fix one analytic representative collection and retain that SAME finite collection in the local Z-chart. [F1, F2, step 20.1, algebra]

22.1 For closedness, take $\sigma$ in the closure and choose rational analytic $\sigma_n\to\sigma$ in one central-charge chart, using openness and rational density. Fix a common support form $Q$ negative on $\ker Z$ and nonnegative on the active charges of these data. If $\{Q\ge0\}\cap\{\|v\|=1\}$ is empty, the active support is empty and all sector elements are identities, so $\sigma$ is analytic. Otherwise compactness gives $m>0$ such that $|Z(v)|\ge m\|v\|$ whenever $Q(v)\ge0$. Choose $n$ with $e=\|Z_n-Z\|<m/(4\sqrt2)$. Decompose the $Z_n$ plane into four rational semiclosed quadrants $V_i$; finite rational refinement and the factorization of steps 1.1–15.1 make their sector elements analytic. Let $\ell_i:\mathbb C\to\mathbb R$ be the norm-one real linear functional along the bisector of the closed quadrant $\overline V_i$, so $\ell_i(w)\ge|w|/\sqrt2$ there. Put $S_i=\{v:Q(v)\ge0,\ Z_n(v)\in\overline V_i\}$ and let $C_i$ be its closed convex conical hull. For $v\in S_i$ one has $|Z_n(v)|\ge(m-e)\|v\|\ge(m/2)\|v\|$. Thus, for every $Z_t=(1-t)Z_n+tZ$, $0\le t\le1$, one has $\ell_i(Z_t(v))\ge(m/(2\sqrt2)-e)\|v\|\ge m\|v\|/(4\sqrt2)$. For a finite sum of vectors in $S_i$, linearity and the triangle inequality preserve this lower bound; continuity extends it to $C_i$. Consequently $C_i$ is pointed and $Z_t(C_i\setminus\{0\})$ lies in the fixed open half-plane $\ell_i>0$ uniformly in $t$. The sector series are supported in $C_i$, since all their degrees are sums of active charges in $S_i$. A rational linear functional sufficiently close to $\ell_i\circ Z_n$, scaled to be integral, is a positive height on $C_i$, so these are admissible charge cones. There is no assertion that $C_i\subseteq\{Q\ge0\}$; the required half-plane bound survives convexification even when that inclusion fails. [F1, F2, step 15.1, step 21.1, algebra]

23.1 The four analytic quadrant elements give a fixed representative collection along the entire straight central-charge path from $Z_n$ to Z, because the same cone-to-half-plane margin holds at every point of that path. Choose $Z_n$ inside one local central-charge chart of σ with a convex central-charge image; the path also has its lift in that chart, ending at σ. The quadrant representatives give a second continuous lift starting at the SAME rational datum $σ_n$. These two lifts agree: their equality set is open by the local central-charge homeomorphism and closed by the Hausdorff property, hence is the whole interval. Thus the endpoint of the analytic-representative lift is σ. This proves closedness. This argument does NOT assert that every representative of an analytic datum is analytic; arbitrary overlap-gauge changes could introduce divergent representatives. It uses the canonical rational quadrant elements and unique path lifting instead. Every connected component containing one analytic datum consists entirely of analytic data. [F1, F2, step 22.1, algebra]

24.1 For the source analytic-WCS convention, decorated nearby rational points define transitions by the same finite sector-factorization/refinement operations. Section1 shows those factors analytic; products and inverses preserve analyticity after restricting domains. Hence their transitions are convergent holomorphic torus germs, exactly Definition3.11.1. Conversely these transitions recover a cyclic analytic representative collection. This is the required analytic-data/analytic-WCS join, not merely convergence of an isolated formal generating function. [F1, F2, step 23.1, algebra] ∎
