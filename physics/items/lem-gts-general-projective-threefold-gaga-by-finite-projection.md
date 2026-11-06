---
id: lem-gts-general-projective-threefold-gaga-by-finite-projection
kind: lemma
title: Projective threefold coherent comparison and holomorphic bundle algebraization
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-retained-2026-10-29
page: gts-complex-kahler-hodge
dependency_level: 0
domain: mathematics
library: physics
category: string-theory
proof_strategy: direct
deps:
  - thm-cauchy-integral-formula-circle
  - thm-cauchy-integral-formula-on-a-polydisc
  - thm-holomorphic-implicit-function-theorem
  - def-axiom-of-choice
  - thm-qftx-projective-gaga-for-monad-data
  - thm-qftx-gaga-analytic-local-ring-flatness
  - thm-qftx-gaga-analytic-oka-coherence
  - thm-flatness-of-noetherian-completion
  - thm-nakayama-lemma
  - thm-affine-quasi-coherent-equivalence
  - thm-cech-computes-qc-cohomology-separated-scheme-affine-cover
  - cor-weak-nullstellensatz-algebraically-closed-coordinate-form
dependency_roles:
  thm-cauchy-integral-formula-circle: mathematical-premise
  thm-cauchy-integral-formula-on-a-polydisc: mathematical-premise
  thm-holomorphic-implicit-function-theorem: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  thm-qftx-projective-gaga-for-monad-data: mathematical-premise
  thm-qftx-gaga-analytic-local-ring-flatness: mathematical-premise
  thm-qftx-gaga-analytic-oka-coherence: mathematical-premise
  thm-flatness-of-noetherian-completion: mathematical-premise
  thm-nakayama-lemma: mathematical-premise
  thm-affine-quasi-coherent-equivalence: mathematical-premise
  thm-cech-computes-qc-cohomology-separated-scheme-affine-cover: mathematical-premise
  cor-weak-nullstellensatz-algebraically-closed-coordinate-form: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Jean-Pierre Serre, Géométrie algébrique et géométrie analytique
      url: https://www.college-de-france.fr/media/jean-pierre-serre/UPL1698785858825941763_Serre_GAGA.pdf
      locator: "§12 Theorems 1–3, printed pp.19–20; §20 Proposition 18 and its proof, printed pp.31–32. Local proof below instead reduces dimension-three comparison to the existing P³ supplier by a finite projection."
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
---

## Statement

Assume the Axiom of Choice. Let $X$ be a smooth irreducible projective complex threefold. Analytification is an exact tensor equivalence between coherent algebraic sheaves on $X$ and coherent analytic sheaves on $X^{an}$. The canonical maps
$$
H^q(X,F)\longrightarrow H^q(X^{an},F^{an})
$$
are isomorphisms for every coherent algebraic sheaf $F$ and every $q\ge0$. Every finite-rank holomorphic vector bundle $V$ has an algebraic finite locally free sheaf $E$ and an isomorphism $E^{an}\cong\mathcal O(V)$. The pair is unique up to unique isomorphism compatible with the chosen analytic isomorphism. Duals correspond canonically: $(E^\vee)^{an}\cong(E^{an})^\vee$. No restriction on the dimension of a projective embedding of $X$ is imposed.

## Statement references

[[thm-qftx-projective-gaga-for-monad-data]]

[Serre, §12 Theorems 1–3 and §20 Proposition 18](https://www.college-de-france.fr/media/jean-pierre-serre/UPL1698785858825941763_Serre_GAGA.pdf)

## Facts & Assumptions

**Given:** Full AC and the smooth irreducible projective complex threefold $X$. Here projective means admitting a closed algebraic embedding into some finite-dimensional complex projective space; smooth means nonsingular, and a threefold has complex dimension three. Write $\eta:X^{an}\to X$ for the canonical ringed-space map and $F^{an}=\eta^{-1}F\otimes_{\eta^{-1}\mathcal O_X}\mathcal O_{X^{an}}$. A coherent sheaf is locally finitely generated with locally finitely generated relation kernels for maps from finite free sheaves; on these Noetherian/coherent structure sheaves this is equivalent to a local finite presentation. A finite locally free sheaf is one locally isomorphic to $\mathcal O^r$ for a finite integer $r\ge0$; $E^\vee=\mathcal H om(E,\mathcal O)$. A tensor equivalence is a fully faithful, essentially surjective functor preserving tensor products and the unit up to the canonical coefficient-extension isomorphisms. These are the conventions of [F1]–[F3].

[A1] Full AC is the assertion that every family of nonempty sets has a choice function; it supplies the projective comparison and sheaf-resolution inputs of [F1]. [[def-axiom-of-choice]]

[F1] On $P=\mathbb P^3_{\mathbb C}$, exact tensor-compatible coherent analytification is an equivalence, and canonical coherent cohomology comparison is an isomorphism in every degree. Only this absolute P³ clause is used. [[thm-qftx-projective-gaga-for-monad-data]]

[F2] At every closed complex point of a finite-type scheme, algebraic-to-analytic local rings are faithfully flat Noetherian local rings with the same completion. Completion of a Noetherian local ring is flat. It detects zero finite modules: if a finite module has zero completed tensor product, its quotient by the maximal ideal is zero (the completion has the same residue field), and Nakayama gives zero. This suffices for every completion test below. [[thm-qftx-gaga-analytic-local-ring-flatness]], [[thm-flatness-of-noetherian-completion]]

[F3] Coherent analytic modules have local finite presentations; their finite sums, kernels and cokernels are coherent. [[thm-qftx-gaga-analytic-oka-coherence]]

[F4] A finite module over a local ring whose quotient by the maximal ideal vanishes is zero. [[thm-nakayama-lemma]]

[F5] The holomorphic implicit-function theorem solves the finite coefficient-factorization equations when the coprime-factor Jacobian is invertible; the Cauchy formulas on discs and polydiscs justify the convergent remainder integrals used in step 2.1. [[thm-holomorphic-implicit-function-theorem]], [[thm-cauchy-integral-formula-circle]], [[thm-cauchy-integral-formula-on-a-polydisc]]

[F6] On an affine scheme $\operatorname{Spec}A$, quasi-coherent sheaves correspond to $A$-modules. For a finite map $\operatorname{Spec}B\to\operatorname{Spec}A$, direct image corresponds to restriction of scalars; because $B$ is finite over $A$, it preserves finite modules and is exact. [[thm-affine-quasi-coherent-equivalence]]

[F7] On a quasi-compact separated scheme, the ordered Čech complex of a finite affine open cover computes quasi-coherent sheaf cohomology, and all finite intersections in the cover are affine. [[thm-cech-computes-qc-cohomology-separated-scheme-affine-cover]]

[F8] Every maximal ideal of a polynomial ring over $\mathbb C$ is evaluation at a point. Consequently every closed point of a finite-type $\mathbb C$-scheme has residue field $\mathbb C$, and every nonempty closed subset contains a closed $\mathbb C$-point: on an affine chart, lift its proper defining ideal to a polynomial ring, choose a maximal ideal containing it, and apply the weak Nullstellensatz. [[cor-weak-nullstellensatz-algebraically-closed-coordinate-form]]

## Proof

**Given:** The Statement and [F1]–[F8]. We first construct a finite projection, then prove finite direct-image comparison, and finally transport the finite-algebra module action through [F1].

1.1 Choose a projective embedding $X\subset\mathbb P^N$. Four general linear forms $l_0,\ldots,l_3$ have no common zero on $X$: successive hyperplane sections reduce dimension unless already empty, and a fourth general hyperplane avoids the remaining finite third intersection. Equivalently the incidence of centers meeting $X$ has smaller dimension in the Grassmannian of codimension-four centers. Put $R=\mathbb C[z_0,\ldots,z_N]/I_X$. Since $\operatorname{Proj}(R/(l_0,\ldots,l_3))$ is empty, a power of the irrelevant ideal lies in $(l_0,\ldots,l_3)$; thus $R/(l_0,\ldots,l_3)$ is finite-dimensional. Choose homogeneous lifts of a vector-space basis. Recursively reducing a homogeneous element modulo $(l_0,\ldots,l_3)$ expresses it as a combination of those finitely many lifts with coefficients in $S=\mathbb C[l_0,\ldots,l_3]$: each residual coefficient has smaller degree. Consequently $R$ is finite over $S$. The $l_i$ are algebraically independent, since otherwise the finite extension would give $\dim R\le3$, whereas $\dim R=\dim X+1=4$. On the charts $l_i\ne0$, degree-zero localization preserves module finiteness: a homogeneous generator $e$ of degree $d$ becomes the degree-zero generator $e/l_i^d$. Hence these four forms define an actual finite morphism $f:X\to P$, with $f^*\mathcal O_P(1)=\mathcal O_X(1)$. This construction uses no GAGA in $\mathbb P^N$. [given, construct, algebra]

2.1 Here are the finite analytic algebra facts used below, including their local justification. If $A\to B$ is a finite complex affine algebra map, choose finitely many algebra generators $z_j$ integral over $A$ and their monic equations. First extend the finite algebra itself to the base analytic ring: $D=B\otimes_A\mathcal O_{P^{an},y}$ is finite, by its finite module presentation. In a small analytic neighborhood of a base point, the finite fiber splits into disjoint neighborhoods of its points. The splitting is obtained by factoring a monic equation for a generic linear combination of the $z_j$ into factors with disjoint root sets: division with remainder and the coprimality of the factors solve the coefficient equations by the holomorphic implicit-function theorem. The resulting idempotents split $D$ (Bezout identities for the coprime polynomial factors supply the orthogonal projectors), before identifying it with any analytic direct image. In each factor, translate $z_j$ by its value at the relevant fiber point. Its monic equation can be chosen with all non-leading coefficients vanishing at the base point, as follows. In the corresponding factor of $D$, the residue of the translated generator is nilpotent, so some power lies in $\mathfrak m_yD$. Write multiplication by that power on a finite generating set using a matrix with entries in $\mathfrak m_y$. The adjugate determinant identity gives a monic annihilating polynomial whose lower coefficients lie in $\mathfrak m_y$; substituting that power gives the required equation for the generator. The roots therefore lie in an arbitrarily small fixed circle after shrinking the base. Division of a convergent germ $h(t,z_j)$ by this monic equation leaves a polynomial remainder of bounded degree in $z_j$ with coefficients holomorphic in $t$. For a monic polynomial $p(t,z)$ of degree $d$, that remainder is $R(t,z)=(2\pi i)^{-1}\int_{|\zeta|=\epsilon}h(t,\zeta)(p(t,\zeta)-p(t,z))/((\zeta-z)p(t,\zeta))\,d\zeta$. The divided difference is polynomial in $z$ of degree less than $d$; the circle contains every root and no root lies on it after shrinking. Cauchy's formula gives $h-R=pQ$, where $Q=(2\pi i)^{-1}\int_{|\zeta|=\epsilon}h(t,\zeta)/((\zeta-z)p(t,\zeta))\,d\zeta$ is holomorphic for $|z|<\epsilon$. Repeating for the finitely many $z_j$ gives bounded-degree monomials as generators over the base analytic local ring. The Cauchy integrals converge uniformly on a smaller polydisc, so this reduction applies to convergent series, not only formal series. Thus each analytic source local ring over the finite fiber is finite over the analytic base local ring. Its finite relations are coherent by [F3]. [F3, F5, step 1.1, construct, algebra]

3.1 Write $g=f^{an}$. This map is proper, because $X^{an}$ is a closed subset of compact complex projective space and its target is Hausdorff. For every abelian sheaf $M$, $(g_*M)_y=\prod_{x\mid y}M_x$: representatives on disjoint neighborhoods of the finite fiber extend to a section on an inverse-image neighborhood, since properness excludes the closed complement after shrinking the base. The same shrinking proves that a section with zero fiber germs vanishes near that fiber. This proves both surjectivity and injectivity of the stalk map. More explicitly, for $y\in P^{an}$, the analytic algebra supplied by a finite presentation of $B$ over $A$ has a natural map to $\prod_{x\in f^{-1}(y)}\mathcal O_{X^{an},x}$. Both sides are finite over $\mathcal O_{P^{an},y}$ by step 2.1. After completion this is the canonical isomorphism
$$
B\otimes_A\widehat A_y\;\cong\;\prod_{x\mid y}\widehat{\mathcal O}_{X,x}.
$$
To verify the product decomposition, the finite semilocal algebra $B\otimes_A A_y$ has pairwise comaximal maximal ideals over $y$; sufficiently high powers of their intersection and of $\mathfrak m_yB$ are cofinal, since their radicals agree. The Chinese remainder theorem at every order followed by inverse limit gives the displayed product. [F2] identifies each algebraic completion with its analytic completion. Flat completion and its finite-module detection property in [F2] detect the kernel and cokernel of the finite-module comparison, so the uncompleted analytic algebra map is an isomorphism. The same argument applied to a finite $B$-module presentation gives
$$
(f_*F)^{an}\cong f^{an}_*(F^{an})
$$
for every algebraic coherent $F$. All maps are the canonical coefficient-extension maps, so they respect multiplication, tensor action and morphisms. [F2, F3, step 2.1, algebra]

4.1 Put $g=f^{an}$ and $C=g_*\mathcal O_{X^{an}}$, identified by step 3.1 with $(f_*\mathcal O_X)^{an}$ and hence coherent on $P^{an}$. The finite-fiber stalk formula of step 3.1 applies to every abelian sheaf. Consequently $g_*$ is exact, since finite products of exact stalk sequences are exact. Now let $M$ be coherent analytic. Choose finite free presentations of $M$ on disjoint neighborhoods of the fiber points. Their finite ranks may be padded by zero generators to common bounds; proper shrinking puts the whole inverse image of a base neighborhood inside their union. Thus on that inverse image there is a presentation $\mathcal O^a\to\mathcal O^b\to M\to0$. Exact pushforward gives $C^a\to C^b\to g_*M\to0$, so [F3] proves coherence of $g_*M$. Its $C$-action remembers the full finite algebra. Conversely a coherent $C$-module $N$ defines $g^{-1}N\otimes_{g^{-1}C}\mathcal O_{X^{an}}$. At $y$, step 3.1 identifies $C_y=\prod_{x\mid y}\mathcal O_{X^{an},x}$; its idempotents split $N_y$ into the corresponding factors, and the displayed tensor takes exactly the $x$ factor at $x$. Finite $C$-module presentations pull back to finite analytic presentations, so the inverse sheaf is coherent by [F3]. The canonical unit and counit maps are isomorphisms on these stalk factors and hence on sheaves. This proves the finite-algebra module equivalence, including ramified and nonreduced fibers. [F2, F3, step 2.1, step 3.1, construct, algebra]

5.1 Finite analytic pushforward is exact even as a functor on underlying abelian sheaves. For any sheaf $M$, its pushforward stalk at $y$ is $\prod_{x\mid y}M_x$: disjoint neighborhoods of the finitely many fiber points and the proper shrinking argument of step 4.1 are cofinal among inverse-image neighborhoods. Finite products of exact stalk sequences are exact. Pushforward preserves flasque sheaves, since its restriction maps are those on inverse-image opens. Pushing a flasque resolution therefore gives canonically
$$
H^q(X^{an},M)=H^q(P^{an},f^{an}_*M).
$$
For algebraic coherent $F$, on an affine base chart $U=\operatorname{Spec}A$ the finite morphism has $f^{-1}U=\operatorname{Spec}B$ with $B$ finite over $A$. By [F6], $F|_{f^{-1}U}$ is a finite $B$-module and $(f_*F)|_U$ is that module restricted to $A$; restriction of scalars is exact, and the module is finite over $A$. Thus $f_*F$ is coherent and finite pushforward is exact on coherent modules. Take the standard finite affine cover of $P=\mathbb P^3$; its finite intersections and their inverse images under $f$ are affine. The Čech complexes of $F$ on the inverse-image cover and of $f_*F$ on the base cover identify term by term. By [F7] they compute the respective cohomology, so $H^q(X,F)=H^q(P,f_*F)$. Combining these identities with step 3.1 and the P³ comparison [F1] proves the claimed canonical cohomology comparison on $X$ for all $q$. Naturality follows because each comparison is induced by the same analytification map on sheaves and resolutions. [A1, F1, F6, F7, step 3.1, step 4.1, algebra]

5.2 Set $\mathcal B=f_*\mathcal O_X$; this is a coherent algebraic $\mathcal O_P$-algebra by [F6], and step 3.1 identifies $\mathcal B^{an}=f^{an}_*\mathcal O_{X^{an}}$. For an arbitrary coherent analytic $M$ on $X^{an}$, put $N=f^{an}_*M$, coherent by step 4.1. Algebraize $N$ to $N_0$ by [F1]. Its analytic action $\mathcal B^{an}\otimes N\to N$ uniquely algebraizes to $\mu:\mathcal B\otimes N_0\to N_0$, since [F1] is tensor compatible and fully faithful. The unit and associativity equalities for $\mu$ hold algebraically because their analytifications hold and [F1] is faithful. Thus $N_0$ is a coherent $\mathcal B$-module. On every base chart $\operatorname{Spec}A$, [F6] identifies this module with a finite module over $B=\Gamma(f^{-1}\operatorname{Spec}A,\mathcal O_X)$; its associated sheaf on $f^{-1}\operatorname{Spec}A=\operatorname{Spec}B$ localizes compatibly on overlaps, so these sheaves glue to a coherent algebraic $E$ on $X$. The analytic finite-algebra equivalence of step 4.1 identifies $E^{an}$ with $M$. This is essential surjectivity for all coherent analytic $M$, rather than an argument requiring $M$ already algebraic. [F1, F6, step 3.1, step 4.1, construct, algebra]

6.1 A morphism between two analytic sheaves on $X^{an}$ is exactly a morphism between their finite pushforwards commuting with the $\mathcal B^{an}$-actions, by the same local finite-algebra construction. [F1] uniquely algebraizes the underlying morphism, and faithfulness algebraizes the commuting equality. This proves full faithfulness on $X$. [F2] proves exactness stalkwise at complex closed points; by [F8], any nonzero algebraic coherent kernel or cokernel has a closed point in its support, so these stalk tests detect exactness globally. Associativity of tensor product proves its tensor compatibility. [F1, F2, F8, step 5.2, algebra]

6.2 Now let $M=\mathcal O(V)$ be analytically locally free of rank $r$, and take the coherent algebraization $E$ of step 5.2. At a closed point $x$, [F8] gives residue field $\mathbb C$; write $A=\mathcal O_{X,x}$, $B=\mathcal O_{X^{an},x}$ and $L=E_x$. Then $L\otimes_A B\cong B^r$ and $B$ is faithfully flat over $A$ by [F2]. The residue fields are both $\mathbb C$, so $L/\mathfrak m_AL$ has dimension $r$. Lift a residue basis to obtain $A^r\to L$, surjective by [F4]. After tensoring with $B$, this is a surjection $B^r\to B^r$ whose residue matrix is invertible, hence whose determinant is a unit and whose kernel is zero. Flatness and faithfulness give that the original kernel is zero. Thus $L\cong A^r$. A presentation of the coherent $E$ extends this isomorphism to an algebraic neighborhood of $x$; the nonfree locus, detected by its finite presentation minors, is closed. By [F8], if it were nonempty it would contain a closed point, contrary to freeness at every closed point. Hence $E$ is finite locally free everywhere. [F2, F4, F8, step 5.2, algebra]

7.1 For finite locally free $E$, local bases identify its dual with the dual free module. Coefficient extension then gives the canonical isomorphism $(E^\vee)^{an}\cong(E^{an})^\vee$, compatible with evaluation and changes of basis. Full faithfulness of step 6.1 uniquely algebraizes any isomorphism between two algebraizations and its inverse; the identity composites follow by faithfulness. Together with steps 5.1 and 6.2 this proves the complete Statement. Smoothness, the canonical bundle and any Calabi–Yau assumptions have not been used to restrict the holomorphic input. [step 5.1, step 6.1, step 6.2, algebra] ∎
