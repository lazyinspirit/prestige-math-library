---
id: prop-first-variation-of-volume-for-a-normal-variation
kind: proposition
title: First variation of volume for a normal variation
status: published
origin: pipeline
deps: ["def-mean-curvature-vector", "def-riemannian-volume-density", "def-riemannian-volume-of-a-compactly-supported-smooth-density", "thm-density-integration-is-defined-without-an-orientation", "def-smooth-map-between-manifolds-with-boundary", "prop-pullback-of-a-riemannian-metric-is-riemannian-exactly-for-immersions", "thm-determinant-differential-and-jacobis-formula", "thm-differentiation-under-the-integral-sign", "def-levi-civita-connection", "prop-torsion-free-is-equivalent-to-symmetric-christoffel-symbols-in-coordinate-frames", "thm-weingarten-equation-and-adjointness-of-the-shape-operator", "cor-every-immersion-is-locally-an-embedding", "thm-compactly-supported-vector-fields-are-complete", "prop-time-t-flow-maps-are-diffeomorphisms-between-open-domains", "def-countable-choice"]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Danny Calegari, Minimal Surfaces
      url: https://web.archive.org/web/20190618171523if_/http://math.uchicago.edu/~dannyc/courses/minimal_surfaces_2014/minimal_surfaces_notes.pdf
      locator: Chapter 3, Section 2.2, complete density calculation and Proposition 2.1, with normalization Warning 2.4, printed pages 12–13
    - title: Chuu-Lian Terng, Lecture Notes on Curves and Surfaces in R^3 and Riemannian Geometry
      url: https://www.math.uci.edu/~cterng/LectureNotes1353.pdf
      locator: Section 2.1, unnormalized mean-curvature trace and first-variation formula (2.1.22), printed pages 30–31
verification:
  precheck: pass
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
proof_strategy: direct
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $M^m$ be a smooth manifold of dimension
$m\geq1$, let $(\overline M,\overline g)$ be Riemannian, and let

$$F:(-\varepsilon,\varepsilon)\times M\longrightarrow\overline M$$

be smooth with every $F_t:=F(t,\mathord\cdot)$ an immersion. Put
$f=F_0$, $g_t=F_t^*\overline g$, and
$V(p)=dF_{(0,p)}(\partial_t)$. Suppose that $V$ is normal to $df(TM)$ and
has compact support. If $K\subseteq M$ is a compact smooth domain satisfying
$\operatorname{supp}V\subseteq\operatorname{int}_M K$, define

$$A_K(t):=\operatorname{Vol}_{g_t}(K)=\int_K\mu_{g_t}.$$

Then, for the averaged mean-curvature vector $\mathbf H_f$,

$$A_K'(0)=-m\int_K\overline g(V,\mathbf H_f)\,\mu_g=-m\int_M\overline g(V,\mathbf H_f)\,\mu_g.$$

The derivative is independent of the eligible domain $K$. If $M$ is compact,
one may take $K=M$, obtaining the first variation of total volume. The choice
hypothesis is inherited exactly through the normal projections and density
integration.

If $M$ is boundaryless, the same integral formula holds without the
normality hypothesis on $V$: since $\mathbf H_f$ is normal, the integrand
automatically sees only $V^\perp$. Thus in the boundaryless case vanishing
mean curvature implies stationarity under every compactly supported
variation, not merely the normal ones.

## Facts & Assumptions

**Given:** Countable choice, the stated smooth family of immersions, normal compactly supported variation field $V$, and eligible compact domain $K$.

[F1] The immersion normal bundle and second fundamental form are well defined, and $m\mathbf H_f=\operatorname{tr}_g\mathrm{II}_f$. [[def-mean-curvature-vector]].

[F2] Each pullback $g_t=F_t^*\overline g$ is a smooth positive-definite metric because $F_t$ is an immersion. [[prop-pullback-of-a-riemannian-metric-is-riemannian-exactly-for-immersions]].

[F3] In coordinates the Riemannian density is $\sqrt{\det G(t)}\lvert dx^1\cdots dx^m\rvert$. [[def-riemannian-volume-density]].

[F4] On the invertible locus, Jacobi's formula is $D\det(G)[\dot G]=\det(G)\operatorname{tr}(G^{-1}\dot G)$. [[thm-determinant-differential-and-jacobis-formula]].

[F5] The ambient Levi–Civita connection is metric compatible and torsion free; in coordinate frames the latter is symmetry of the Christoffel symbols. [[def-levi-civita-connection]], [[prop-torsion-free-is-equivalent-to-symmetric-christoffel-symbols-in-coordinate-frames]].

[F6] Every immersion is locally an embedding, and on each such neighbourhood the Weingarten identity gives $\overline g(\overline\nabla_XV,df(Y)) =-\overline g(V,\mathrm{II}_f(X,Y))$ for normal $V$. [[cor-every-immersion-is-locally-an-embedding]], [[thm-weingarten-equation-and-adjointness-of-the-shape-operator]].

[F7] A parameter derivative dominated by one integrable function may pass through an integral. [[thm-differentiation-under-the-integral-sign]].

[F8] Under countable choice, compactly supported smooth Riemannian densities have intrinsic, orientation-free integrals, including on manifolds with boundary. [[def-riemannian-volume-of-a-compactly-supported-smooth-density]].

[F9] On a boundaryless smooth manifold, a compactly supported smooth tangent field is complete, and its time maps are diffeomorphisms with inverse time maps. [[thm-compactly-supported-vector-fields-are-complete]], [[prop-time-t-flow-maps-are-diffeomorphisms-between-open-domains]].

[F10] Intrinsic density integration is invariant under diffeomorphisms. [[thm-density-integration-is-defined-without-an-orientation]].

## Proof

**Proof technique:** direct.

1.1 Fix $p\in M$ and extend a $g$-orthonormal basis $(e_1,\ldots,e_m)$ of $T_pM$ to local fields on $M$, lifted independently of $t$ to the product. Write $E_i(t)=dF_t(e_i)$ and $G_{ij}(t)=\overline g(E_i(t),E_j(t))$. In ambient coordinates, equality of mixed partials and the symmetric Christoffel symbols in [F5] give $$D_tE_i\big|_{t=0}=D_{e_i}(dF(\partial_t))\big|_{t=0}=\overline\nabla_{e_i}V.$$ [F2, F5, given, algebra]

2.1 Metric compatibility and step 1.1 give $$\dot G_{ij}(0)=\overline g(\overline\nabla_{e_i}V,e_j)+\overline g(e_i,\overline\nabla_{e_j}V).$$ At $p$, $G(0)=I$. Applying [F3]–[F4] therefore yields the pointwise density derivative $$\left.\frac d{dt}\right|_0\mu_{g_t}=\frac12\operatorname{tr}(\dot G(0))\mu_g=\sum_{i=1}^m\overline g(\overline\nabla_{e_i}V,e_i)\mu_g.$$ [F3, F4, F5, step 1.1, algebra]

3.1 Because $V$ is normal, [F6] converts each summand in step 2.1 to $-\overline g(V,\mathrm{II}_f(e_i,e_i))$. The trace formula [F1] now gives the global density identity $$\left.\frac d{dt}\right|_0\mu_{g_t}=-\overline g\!\left(V,\sum_i\mathrm{II}_f(e_i,e_i)\right)\mu_g=-m\overline g(V,\mathbf H_f)\mu_g.$$ Both sides are intrinsic, so the pointwise calculation in an arbitrary orthonormal basis patches over $M$. [F1, F6, step 2.1, algebra]

4.1 Write $\mu_{g_t}=J(t,p)\mu_g$ on $K$. By [F2]–[F3], $J$ is smooth and positive near $\{0\}\times K$. Compactness supplies a closed parameter interval on which $\lvert\partial_tJ\rvert$ is bounded; the constant bound is integrable because [F8] gives $K$ finite volume. Thus [F7] passes the derivative through the fixed-domain integral, and step 3.1 gives $$A_K'(0)=\int_K\partial_tJ(0,p)\,\mu_g=-m\int_K\overline g(V,\mathbf H_f)\,\mu_g.$$ [F2, F3, F7, F8, step 3.1]

5.1 The last integrand in step 4.1 vanishes outside $\operatorname{supp}V$, which lies in $\operatorname{int}_M K$. Its extension by zero is therefore a smooth compactly supported density on $M$, and locality of the intrinsic integral in [F8] gives $$\int_K\overline g(V,\mathbf H_f)\mu_g=\int_M\overline g(V,\mathbf H_f)\mu_g.$$ The same equality holds for every eligible $K$, proving domain independence. [F8, step 4.1, given]

6.1 Now assume $M$ is boundaryless and drop the normality hypothesis. Decompose $V=V^\top+V^\perp$. The tangent field corresponding to $V^\top$ is compactly supported inside $\operatorname{int}_M K$, so [F9] supplies its flow $\phi_t$, with $\phi_t$ equal to the identity near $\partial K$. Put $\widetilde F_t=F_t\circ\phi_t^{-1}$. Its variation field is $V-df(V^\top)=V^\perp$, while $\phi_t(K)=K$ and [F10] gives $\operatorname{Vol}_{\widetilde F_t^*\overline g}(K)=\operatorname{Vol}_{F_t^*\overline g}(K)$. Applying steps 3.1–5.1 to $\widetilde F$ proves the same formula for the original variation, since $\overline g(V^\perp,\mathbf H_f)=\overline g(V,\mathbf H_f)$. [F1, F9, F10, step 3.1, step 4.1, step 5.1, algebra]

6.2 If $M$ is compact, it is itself an eligible compact domain (its interior relative to itself is $M$), so step 5.1 gives the total-volume formula. [step 5.1, given]

7.1 For empty $M$ (of fixed positive dimension), both integrals and the derivative are zero. Dimension zero is excluded because the averaged vector contains $1/m$; in dimension one the proof is the single diagonal Gram calculation. A zero variation field gives zero pointwise. Immersivity in [F2] excludes a degenerate pullback metric. The parameter value $0$ is interior to $(-\varepsilon,\varepsilon)$, and the density argument applies to the boundary of $K$ without orientation or integration by parts. The all-variation clause is restricted to boundaryless $M$ because [F9]'s two-sided reparametrizing flow need not exist for a field transverse to a manifold boundary. The stated $\mathrm{AC}_\omega$ is inherited through [F1], [F6], and [F8]; [F9]–[F10], the pointwise finite-basis calculation, and one compactness bound add no choice. [F1, F2, F6, F8, F9, F10, step 1.1, step 3.1, step 4.1, step 5.1, step 6.1, step 6.2] ∎
