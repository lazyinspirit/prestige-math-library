---
id: thm-qftx-projective-gaga-for-monad-data
kind: theorem
title: "Projective GAGA for framed coherent and monad data"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
page: qftx-adhm-linear-data-and-framed-monads
dependency_level: 7
deps:
  - thm-qftx-gaga-analytic-oka-coherence
  - thm-qftx-gaga-analytic-local-ring-flatness
  - thm-qftx-gaga-analytic-compact-projective-coherent-finiteness
  - thm-qftx-gaga-analytic-projective-dolbeault-scalar-cohomology
  - thm-nakayama-lemma
  - thm-the-complex-numbers-are-algebraically-closed
  - thm-cohomological-dimension-projective-n-space
  - def-axiom-of-choice
  - thm-cohomology-projective-space-twisting-sheaves
  - lem-coherent-sheaf-finite-twisted-locally-free-resolution-projective-space
  - thm-serre-vanishing
  - thm-five-lemma-for-a-morphism-of-long-exact-sequences
  - lem-ringed-space-module-sheaves-enough-injectives
  - lem-injective-modules-flasque-and-ext-of-structure-sheaf
  - thm-flasque-sheaves-acyclic
  - thm-acyclic-resolution-theorem-for-right-derived-functors
  - thm-sheafification-universal-property
  - lem-image-sheaf-is-sheafification-presheaf-image
  - lem-cohomology-functoriality-sheaf-and-space
  - def-higher-direct-image-sheaf
  - thm-choice-implies-dependent-implies-countable-choice
dependency_roles:
  thm-qftx-gaga-analytic-oka-coherence: mathematical-premise
  thm-qftx-gaga-analytic-local-ring-flatness: mathematical-premise
  thm-qftx-gaga-analytic-compact-projective-coherent-finiteness: mathematical-premise
  thm-qftx-gaga-analytic-projective-dolbeault-scalar-cohomology: mathematical-premise
  thm-nakayama-lemma: mathematical-premise
  thm-the-complex-numbers-are-algebraically-closed: mathematical-premise
  thm-cohomological-dimension-projective-n-space: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  thm-cohomology-projective-space-twisting-sheaves: mathematical-premise
  lem-coherent-sheaf-finite-twisted-locally-free-resolution-projective-space: mathematical-premise
  thm-serre-vanishing: mathematical-premise
  thm-five-lemma-for-a-morphism-of-long-exact-sequences: mathematical-premise
  lem-ringed-space-module-sheaves-enough-injectives: mathematical-premise
  lem-injective-modules-flasque-and-ext-of-structure-sheaf: mathematical-premise
  thm-flasque-sheaves-acyclic: mathematical-premise
  thm-acyclic-resolution-theorem-for-right-derived-functors: mathematical-premise
  thm-sheafification-universal-property: mathematical-premise
  lem-image-sheaf-is-sheafification-presheaf-image: mathematical-premise
  lem-cohomology-functoriality-sheaf-and-space: mathematical-premise
  def-higher-direct-image-sheaf: mathematical-premise
  thm-choice-implies-dependent-implies-countable-choice: mathematical-premise
axiom_base: "ZF + full Axiom of Choice through the listed projective-scheme suppliers and the stated analytic comparison package."
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jean-Pierre Serre, Géométrie algébrique et géométrie analytique"
      url: https://www.college-de-france.fr/media/jean-pierre-serre/UPL1698785858825941763_Serre_GAGA.pdf
      locator: "Theorems 1–3 and proofs, §§12–17; local analytic comparison §§5–6; printed pp. 19–27."
verification:
  precheck: pending
---

## Statement

Let $n\in\{2,3\}$, $X=\mathbb P^n_{\mathbb C}$, $X^{an}$ its complex analytic space, and $\eta:X^{an}\to X$ the canonical morphism of ringed spaces. Let $\operatorname{Mod}(\mathcal O_Y)$ denote the abelian category of all sheaves of $\mathcal O_Y$-modules on a ringed space $Y$, and let $D^+(\operatorname{Mod}(\mathcal O_Y))$ be the category of bounded-below cochain complexes in it with quasi-isomorphisms inverted; use the cochain shift convention $K[q]^m=K^{m+q}$ with differential $(-1)^q d_K$. For coherent $\mathcal O_Y$-modules $\mathcal F,\mathcal G$ placed in degree zero, define the global derived morphism groups

$$\operatorname{Ext}^q_Y(\mathcal F,\mathcal G):=\operatorname{Hom}_{D^+(\operatorname{Mod}(\mathcal O_Y))}(\mathcal F,\mathcal G[q]),\qquad q\ge0.$$

On $X$, these groups can be computed from a bounded cochain complex $P^\bullet$ of finite-rank locally free sheaves together with a quasi-isomorphism $P^\bullet\to\mathcal F$, by $H^q(R\Gamma(X,\mathcal H om^\bullet(P^\bullet,\mathcal G)))$; the analogous computation applies to the analytified resolution on $X^{an}$.

Define analytification by $\operatorname{An}_X(\mathcal F)=\mathcal F^{an}:=\eta^{-1}\mathcal F\otimes_{\eta^{-1}\mathcal O_X}\mathcal O_{X^{an}}$. It is an exact tensor-compatible equivalence from coherent algebraic $\mathcal O_X$-modules (locally finitely presented modules) to coherent analytic $\mathcal O_{X^{an}}$-modules (locally finitely presented modules). For every coherent $\mathcal F$, the canonical cohomology comparison

$$\gamma^q_{\mathcal F}:H^q(X,\mathcal F)=R^q\Gamma(X,\mathcal F)\longrightarrow H^q(X^{an},\mathcal F^{an})=R^q\Gamma(X^{an},\mathcal F^{an})$$

is an isomorphism for all $q\ge0$. For coherent $\mathcal F,\mathcal G$, the map

$$\epsilon^q_{\mathcal F,\mathcal G}:\operatorname{Ext}^q_X(\mathcal F,\mathcal G)\longrightarrow\operatorname{Ext}^q_{X^{an}}(\mathcal F^{an},\mathcal G^{an})$$

is the map obtained by analytifying a finite locally free resolution of $\mathcal F$ and applying the cohomology comparisons term by term; independence of the chosen resolution makes it canonical. It is an isomorphism for all $q\ge0$, and for $q=0$ it is the usual comparison of algebraic and holomorphic morphisms. Here $H^q$ is sheaf cohomology computed by right-derived global sections using a supplied functorial injective-resolution datum.

Let $i:L_\infty\hookrightarrow X$ be the fixed hyperplane inclusion, where $L_\infty=\{z_0=0\}$, and let $i^{an}:L_\infty^{an}\hookrightarrow X^{an}$ be its analytification. For an $\mathcal O_X$-module, $i^*\mathcal F:=\mathcal O_{L_\infty}\otimes_{i^{-1}\mathcal O_X}i^{-1}\mathcal F$. There is a canonical natural isomorphism $(i^*\mathcal F)^{an}\cong(i^{an})^*(\mathcal F^{an})$, so restriction to the fixed hyperplane commutes with analytification.

For the family clause, let $S$ be a finite-type complex scheme, put $Y=X\times S$, and let $p:Y\to S$ be projection. Write $\eta_S:S^{an}\to S$ and $\eta_Y:Y^{an}\to Y$ for analytification; then $Y^{an}\cong X^{an}\times S^{an}$, with analytic projection $p^{an}:Y^{an}\to S^{an}$. Let $\mathcal E$ be a coherent $\mathcal O_Y$-module flat over $S$, meaning that for every $y\in Y$ the stalk $\mathcal E_y$ is flat over $\mathcal O_{S,p(y)}$. For each closed point $s\in S$ with residue field $\kappa(s)=\mathbb C$, let $j_s:\operatorname{Spec}\kappa(s)\to S$ be its inclusion, $X_s:=Y\times_S\operatorname{Spec}\kappa(s)$, $i_s:X_s\hookrightarrow Y$, $p_s:X_s\to\operatorname{Spec}\kappa(s)$ the projection, and $\mathcal E_s:=i_s^*\mathcal E$. Let $t\in S^{an}$ be the corresponding analytic point, with inclusion $j_t:\{t\}\to S^{an}$, fiber $X_t^{an}:=Y^{an}\times_{S^{an}}\{t\}$, inclusion $i_t^{an}:X_t^{an}\hookrightarrow Y^{an}$, projection $p_t^{an}:X_t^{an}\to\{t\}$, and $\mathcal E_t^{an}:=(i_t^{an})^*\mathcal E^{an}$. For a morphism $f$ of ringed spaces, write $R^qf_*$ for the $q$th cohomology sheaf of the derived direct image computed from a supplied functorial injective resolution; on an open $V$ of the target, $(f_*I)(V)=I(f^{-1}V)$. The canonical algebraic base-change map

$$\beta^{alg}_{q,s}:(R^qp_*\mathcal E)\otimes_{\mathcal O_S}\kappa(s)\longrightarrow H^q(X_s,\mathcal E_s)$$

is the cohomology-and-base-change map induced by the derived base-change morphism $Lj_s^*Rp_*\mathcal E\to R(p_s)_*Li_s^*\mathcal E$, where $L(-)^*$ is the left-derived pullback functor, after the canonical edge identification $(R^qp_*\mathcal E)\otimes\kappa(s)\cong H^q(Lj_s^*Rp_*\mathcal E)$ when the direct-image cohomology sheaves in the relevant degrees are locally free. Define $\beta^{an}_{q,t}:(R^qp^{an}_*\mathcal E^{an})\otimes_{\mathcal O_{S^{an}}}\kappa(t)\to H^q(X_t^{an},\mathcal E_t^{an})$ by the analogous analytic derived base-change morphism and edge identification. Define the canonical comparison

$$c_q:(R^qp_*\mathcal E)^{an}\longrightarrow R^qp^{an}_*\mathcal E^{an}$$

by the following construction. For every algebraic open $V\subseteq S$, the morphism $\eta_Y^{-1}\mathcal E\to\mathcal E^{an}$ and the natural pullback map on sheaf cohomology give a map $H^q(p^{-1}V,\mathcal E)\to H^q((p^{an})^{-1}(\eta_S^{-1}V),\mathcal E^{an})$. These maps are compatible with restriction, so they induce a morphism from the sheafification of the first cohomology presheaf, identified with $R^qp_*\mathcal E$, to $\eta_{S*}R^qp^{an}_*\mathcal E^{an}$. The adjoint of this morphism under $\eta_S^{-1}(-)\otimes_{\eta_S^{-1}\mathcal O_S}\mathcal O_{S^{an}}\dashv\eta_{S*}$ is $c_q$. Whenever the direct-image cohomology sheaves are locally free of finite rank and both base-change maps $\beta^{alg}_{q,s}$ and $\beta^{an}_{q,t}$ are isomorphisms for every such $s$ and its corresponding $t$, $c_q$ is an isomorphism; on each fiber its induced map commutes with the two base-change maps and the absolute cohomology comparison $\gamma^q_{\mathcal E_s}$. No assertion is made that an arbitrary holomorphic family over a nonproper algebraic base algebraizes.

## Statement references

[Serre, Theorems 1–3 and proofs in §§12–17](https://www.college-de-france.fr/media/jean-pierre-serre/UPL1698785858825941763_Serre_GAGA.pdf)

## Facts & Assumptions

**Given:** $n\in\{2,3\}$, the algebraic projective space $X=\mathbb P^n_{\mathbb C}$, and its analytic space $X^{an}$.

[A1] The exact local algebraic-to-analytic ring comparison is the faithfully flat, nilpotent-preserving finite-type comparison, with common completions and flat-pair purity, supplied by the new local-ring theorem. It gives exact analytification; it is not a relative direct-image theorem. [[thm-qftx-gaga-analytic-local-ring-flatness]]

[A3] The holomorphic structure sheaf is coherent; coherent analytic modules are closed under kernels, cokernels and finite extensions, with the stated local finite partial free resolutions. [[thm-qftx-gaga-analytic-oka-coherence]]

[A4] On $\mathbb P^r(\mathbb C)$, $0\le r\le3$, coherent analytic cohomology is finite-dimensional in every degree, with the supplier's precise section and quotient topology assertions. [[thm-qftx-gaga-analytic-compact-projective-coherent-finiteness]]

[A5] The only analytic scalar cohomology fact used here is $H^0(\mathbb P^r,\mathcal O)=\mathbb C$ and $H^q(\mathbb P^r,\mathcal O)=0$ for $q>0$ when $0\le r\le3$. The local proof of [[thm-qftx-gaga-analytic-projective-dolbeault-scalar-cohomology]] supplies these values through its scalar clause and the locally proved Laurent–Čech computation cited there. That computation includes acyclic analytic intersections, normal convergence of the coefficient homotopy, and the degree-zero singleton-negative-set boundary; it does not use GAGA. The supplier's broader vector-bundle Dolbeault comparison is not needed here. Serre's §13, Lemma 4 is historical source attribution, not an external proof premise. Arbitrary coherent positive-twist vanishing and generation are derived below, not assumed in this scalar input.

[L2] The family clause retains exactly its stated locally-free and fiber-base-change hypotheses. Its comparison morphism and compatibility are constructed below rather than assumed as an additional relative-GAGA package.

[F1] Full AC is available through the finite-resolution and projective-cohomology suppliers. [[def-axiom-of-choice]]

[F2] Every coherent algebraic sheaf on projective space has a finite resolution by finite sums of twisting line bundles. [[lem-coherent-sheaf-finite-twisted-locally-free-resolution-projective-space]]

[F3] The algebraic cohomology of each twisting sheaf on $\mathbb P^n$ is finite-dimensional and has the standard projective-space values; sufficiently positive twists of a coherent sheaf have no higher cohomology. [[thm-cohomology-projective-space-twisting-sheaves]], [[thm-serre-vanishing]]

[F4] In a morphism of long exact sequences, if the four neighboring vertical maps are isomorphisms, then the middle vertical map is an isomorphism. [[thm-five-lemma-for-a-morphism-of-long-exact-sequences]]

[F5] Under AC, ringed-space module sheaves have supplied functorial injective resolutions. Clause 1 of [[lem-injective-modules-flasque-and-ext-of-structure-sheaf]] says that every injective module is flasque as an abelian sheaf: all its restriction maps between open sets are surjective. Flasque restrictions are cohomologically acyclic, and the acyclic-resolution theorem applies under DC, which follows from AC. Cohomology sheaves are sheafifications of presheaf cohomology. [[lem-ringed-space-module-sheaves-enough-injectives]], [[thm-flasque-sheaves-acyclic]], [[thm-acyclic-resolution-theorem-for-right-derived-functors]], [[lem-image-sheaf-is-sheafification-presheaf-image]], [[thm-sheafification-universal-property]], [[def-higher-direct-image-sheaf]], [[thm-choice-implies-dependent-implies-countable-choice]]

[F6] Pullback of sheaf cohomology classes along a continuous map and a compatible sheaf morphism is natural and respects compositions. [[lem-cohomology-functoriality-sheaf-and-space]]

[F7] Local Nakayama applies to finite modules over a local ring, and a nonzero finite-dimensional complex vector space endomorphism has an eigenvalue. Algebraic coherent cohomology on $\mathbb P^r$ is zero above degree $r$. [[thm-nakayama-lemma]], [[thm-the-complex-numbers-are-algebraically-closed]], [[thm-cohomological-dimension-projective-n-space]]

[L1] The four analytic declarations [A1], [A3]–[A5] are exact prerequisite interfaces. Local coherent polydisc acyclicity is consumed through the compact-finiteness supplier, rather than asserted here for arbitrary affine-cover intersections. No external citation or planned dependency name certifies these inputs.

## Proof

**Given:** The Statement, full AC, and the locally proved analytic supplier Statements [A1], [A3]–[A5], with the precise interfaces in [L1]. We prove the absolute assertion by induction through dimensions $0,1,2,3$, then prove the stated family comparison.

1.1 At a complex point, coherent algebraic and analytic modules are finite-dimensional complex vector spaces, so the absolute assertions hold in dimension zero. Flatness in [A1] makes analytification exact stalkwise, including for nonreduced finite-type schemes. Tensor associativity gives tensor compatibility and compatibility with quotient restriction to a hyperplane. A finite algebraic presentation analytifies to a finite analytic presentation, so [A3] ensures its cokernel is coherent. For a closed analytic embedding, direct image is exact on stalks and preserves flabby sheaves: its sections over an open are the original sections over the intersection with the closed subspace. Pushing forward a flabby resolution therefore identifies cohomology on the closed subspace and its direct image. These facts apply to the hyperplane sequences below. [A1, A3, F5, algebra]

2.1 Suppose the absolute theorem has been proved in dimensions below $r$, where $1\le r\le3$. For $\mathcal O_{\mathbb P^r}$ the natural comparison is an isomorphism by [A5] and [F3]. The exact hyperplane sequences $0\to\mathcal O(m-1)\xrightarrow{x_0}\mathcal O(m)\to i_*\mathcal O_H(m)\to0$ exist on both sides by step 1.1, and their cohomology maps commute with analytification. For $m\ge1$, assume comparison at $m-1$. The lower-dimensional comparison and [F3] give $H^q(H,\mathcal O_H(m))=0$ for $q>0$; the sequence therefore gives analytic higher vanishing at $m$ and an exact sequence on global sections. Every homogeneous degree-$m$ polynomial on $H$ extends by the same polynomial in $x_1,\ldots,x_r$ on $\mathbb P^r$; the kernel of restriction is $x_0$ times the degree-$m-1$ polynomials. The natural map of these exact section sequences is an isomorphism at its outer terms, hence also at its middle term by [F4]. This proves the natural comparison for all $m\ge0$ without using GAGA in dimension $r$. [A1, A5, F3, F4, step 1.1, induction]

3.1 For the negative twists, the sequence $0\to\mathcal O(-1)\to\mathcal O\to i_*\mathcal O_H\to0$ has restriction $\mathbb C\to\mathbb C$ equal to the identity in degree zero and no positive cohomology in the two right terms by [A5] and lower-dimensional comparison. Thus analytic $\mathcal O(-1)$ is acyclic, as is its algebraic counterpart by [F3]. For every $m<-1$, multiplication by a power of $x_0$ injects the line bundle $\mathcal O(m)$ into $\mathcal O(-1)$: in each analytic chart its local equation is a nonzero holomorphic function in the integral holomorphic germ ring, so multiplication is injective. Hence $H^0(\mathcal O(m))=0$. Descend using $0\to\mathcal O(m)\to\mathcal O(m+1)\to i_*\mathcal O_H(m+1)\to0$. Comparison is already known at $m+1$ and on the hyperplane at every twist. For $q\ge1$, the four neighbors in $H^{q-1}(\mathcal O(m+1))\to H^{q-1}(\mathcal O_H(m+1))\to H^q(\mathcal O(m))\to H^q(\mathcal O(m+1))\to H^q(\mathcal O_H(m+1))$ are therefore naturally compared isomorphically, so [F4] gives the middle comparison. This also handles $r=1$, where the point hyperplane's negative twists still have a one-dimensional section space; they were not incorrectly set to zero. Thus all integer twists have canonical cohomology comparison, without analytic Serre duality or an affine finite-pole assertion. [A1, A5, F3, F4, step 1.1, step 2.1, induction]

4.1 Resolve an algebraic coherent $\mathcal F$ by [F2]. Its finite twisting-sheaf resolution stays exact analytically by step 1.1. Starting at its leftmost term, the long exact sequences and steps 2.1 and 3.1 prove cohomology comparison for each successive cokernel and hence for $\mathcal F$ in every degree. This uses the actual finite resolution, not an unproved global analytic free resolution. [A1, F1, F2, F4, step 1.1, step 2.1, step 3.1, induction]

4.2 Let $\mathcal M$ now be any coherent analytic sheaf on $\mathbb P^r$. For every nonzero linear section $s$, retain both $K_s=\ker(\mathcal M(-1)\xrightarrow{s}\mathcal M)$ and $Q_s=\operatorname{coker}(s)$, and write $I_s=\operatorname{im}(s)$. Locally $s$ is a hyperplane equation, so it annihilates $K_s$ and $Q_s$; [A3] makes them coherent sheaves on $H_s\cong\mathbb P^{r-1}$. The inductive equivalence algebraizes them. By [F3], their positive cohomology vanishes after sufficiently positive twists. The two exact sequences $0\to K_s(n)\to\mathcal M(n-1)\to I_s(n)\to0$ and $0\to I_s(n)\to\mathcal M(n)\to Q_s(n)\to0$ then show that multiplication by $s$ on $H^q(\mathcal M(n-1))$ is eventually an isomorphism for $q\ge2$, and eventually surjective for $q=1$. The $H^0(Q_s(n))$ term prevents an initial claim of injectivity in degree one. This argument includes hyperplane torsion; $s$ was not assumed injective on $\mathcal M$. [A3, F3, step 1.1, step 2.1, step 3.1, induction]

5.1 For finitely presented algebraic $\mathcal F$, a finite presentation computes the sheaf $\mathcal H om(\mathcal F,\mathcal G)$ as a kernel between finite powers of $\mathcal G$. Exact analytification and [A3] therefore identify its analytification with analytic $\mathcal H om(\mathcal F^{an},\mathcal G^{an})$. Step 4.1 in degree zero identifies morphisms. A finite locally free resolution of $\mathcal F$ computes global $\operatorname{Ext}^q$ by the hypercohomology of its Hom complex: locally free Hom is exact, and an injective resolution gives the resulting double-complex comparison. Termwise cohomology comparison and finiteness of the resolution identify algebraic and analytic Ext in every degree. Thus full faithfulness and cohomology/Ext comparison in dimension $r$ are proved before essential surjectivity. [A1, A3, F2, F5, step 4.1, algebra]

5.2 Fix $q>0$ and a nonzero $s_0$. For $q=1$, the eventual surjections in step 4.2 make the finite dimensions in [A4] nonincreasing integers, hence eventually constant; thereafter multiplication by $s_0$ is an isomorphism. For $q\ge2$ it is already eventually an isomorphism. Choose $N$ beyond this range, put $V=H^q(\mathcal M(N))$, and identify each $H^q(\mathcal M(n))$, $n\ge N$, with $V$ by successive multiplication by $s_0$. A second independent section $s_1$ induces an endomorphism $T_n$ on $V$ between successive degrees. The commuting multiplication square gives $T_{n+1}=T_n=T$. If $V\ne0$, choose an eigenvalue $\lambda$ by [F7]. Multiplication by the nonzero section $s_1-\lambda s_0$ then induces $T-\lambda I$, singular at every such degree. But step 4.2 applied to this fixed section is eventually an isomorphism for $q\ge2$; for $q=1$ it is eventually surjective between spaces of the same stabilized dimension and hence an isomorphism too. This contradiction proves eventual vanishing. The eigenvalue is chosen before its section's threshold; no bound uniform over an infinite pencil is used. [A4, F7, step 4.2, algebra]

6.1 A simultaneous bound is available. For $1\le q\le r$ take the maximum of the finitely many bounds from step 5.2. If $q>r$, the inductive algebraic dimension bound [F7] makes all relevant cohomology groups of $K_s,Q_s$ in step 4.2 zero at every twist. Multiplication by every nonzero $s$ is then an isomorphism on $H^q(\mathcal M(n))$ at every integer $n$. The same two-section contradiction starting at any degree forces these groups to be zero at every twist. Thus one integer bounds vanishing for all $q>0$. [F7, step 4.2, step 5.2, algebra]

7.1 Fix a point $p$ and choose a hyperplane $H_s$ through it. By the inductive equivalence, $Q_s$ is algebraic. Its finite resolution [F2] begins with a surjection from a finite sum of twisting sheaves. After a sufficiently positive twist each summand is generated by its finite homogeneous monomials, so $Q_s(n)$ has finitely many global generators, analytically as well by inductive comparison. Also choose $n$ so $H^1(\mathcal M(n-1))=0$ by step 6.1 and $H^2(K_s(n))=0$ by induction and [F3]. The first exact sequence in step 4.2 gives $H^1(I_s(n))=0$; the second then lifts those finitely many generators to global sections of $\mathcal M(n)$. The cokernel $C$ of these lifts satisfies $C_p/sC_p=0$, so local Nakayama [F7] gives $C_p=0$. Finite local generation of the coherent cokernel gives an open neighborhood of $p$ on which the lifts generate. [A3, F2, F3, F7, step 4.2, step 6.1, construct]

8.1 Shrink each such neighborhood into a coordinate nonvanishing set $\{\ell_p\ne0\}$, with generating sections of some twist $n_p$. Compactness gives finitely many neighborhoods $U_j$ covering projective space, with integers $n_j$. For every $n\ge\max_j n_j$, multiply the $j$th generating set by $\ell_j^{n-n_j}$. These are global sections of $\mathcal M(n)$ and still generate on $U_j$, since $\ell_j$ is a unit there. Their finite union generates everywhere. This proves analytic positive-twist generation from the exact earlier suppliers. No assertion about finite pole order of arbitrary entire functions on an affine chart is used. [step 7.1, construct]

9.1 Apply step 8.1 to $\mathcal M$ to obtain a surjection $\mathcal O(-a)^u\to\mathcal M$. Its kernel is coherent by [A3]. Choose the second generator twist $b\ge a$ large enough for step 8.1 to give a surjection $\mathcal O(-b)^v$ onto that kernel. This gives a finite presentation $\mathcal O(-b)^v\to\mathcal O(-a)^u\to\mathcal M\to0$. Every matrix entry is a holomorphic section of $\mathcal O(b-a)$, with $b-a\ge0$, so step 2.1 identifies it with an algebraic section. More generally step 3.1 supplies the same comparison at every negative twist. Take its algebraic cokernel; step 1.1 identifies its analytification with $\mathcal M$. Step 5.1 algebraizes each isomorphism and its inverse and preserves their identity composites. This proves essential surjectivity and completes the absolute induction through dimensions $0,1,2,3$, including the claimed dimensions two and three. [A1, A3, step 1.1, step 2.1, step 3.1, step 5.1, step 8.1, construct]

10.1 To complete the family comparison after the absolute equivalence of step 9.1, first establish the local-section formula: for any morphism of ringed spaces $f:Y\to B$ and module sheaf $M$, take the module-injective resolution $M\to I^\bullet$ from [F5]. The injective-module lemma in [F5] makes every $I^m$ flasque as an abelian sheaf, and its restriction to $f^{-1}U$ is flasque for every open $U\subset B$. Restriction preserves exactness on stalks, so the restricted underlying abelian complex is a resolution of $M|_{f^{-1}U}$ by global-sections-acyclic sheaves. Its cycles lie in the category of all abelian sheaves on $f^{-1}U$, where [F5] supplies the injective-resolution datum. The acyclic-resolution theorem therefore identifies $H^q(\Gamma(f^{-1}U,I^\bullet))$ with $H^q(f^{-1}U,M)$, naturally under open restriction. The cohomology sheaf of $f_*I^\bullet$ is the sheafification of its presheaf cohomology: kernels are computed on opens, image sheaves are the sheafifications of presheaf images, and the assertion follows on stalks by exactness of filtered colimits. Thus $R^qf_*M=(U\mapsto H^q(f^{-1}U,M))^\#$, compatibly with restrictions and scalar multiplication. This argument covers analytic ringed spaces as well as schemes. [F1, F5, step 9.1, construct]

11.1 Write $Y=X\times S$ and let $\eta_Y:Y^{an}\to Y$, $\eta_S:S^{an}\to S$ be analytification maps. For every algebraic open $U\subset S$, [F6] gives $H^q(p^{-1}U,\mathcal E)\to H^q((p^{an})^{-1}\eta_S^{-1}U,\mathcal E^{an})$. Composing with the presheaf-to-sheaf map of step 10.1, then sheafifying on $S$, gives the $\mathcal O_S$-linear map $R^qp_*\mathcal E\to\eta_{S*}R^qp^{an}_*\mathcal E^{an}$. Pull back and tensor with $\mathcal O_{S^{an}}$ to obtain $c_q:(R^qp_*\mathcal E)^{an}\to R^qp^{an}_*\mathcal E^{an}$; explicitly $a\otimes[\xi]$ maps to $a$ times the analytically pulled-back germ of $\xi$. Tensor balancing proves well-definedness. This constructs an actual comparison morphism without assuming its invertibility or a relative-GAGA theorem. [F5, F6, step 10.1, construct]

12.1 At $t\in S^{an}$ over the closed complex point $s\in S$, tensor associativity gives $(M^{an})(t)=M(s)$ for every algebraic module sheaf $M$, and $\mathcal E^{an}|_{X^{an}\times\{t\}}=(\mathcal E_s)^{an}$. These are underived restrictions, valid also for singular or nonreduced bases. The square with top map $c_q(t)$, vertical maps the assumed algebraic and analytic fiber-base-change maps, and bottom map $H^q(X,\mathcal E_s)\to H^q(X^{an},(\mathcal E_s)^{an})$ commutes: represent a stalk by a class on $p^{-1}U$ using step 10.1; both paths pull back that class along the same map from the analytic fiber, with identical tensor restriction of coefficients, so [F6] identifies them. The bottom map is an isomorphism by step 4.1, and both vertical maps are isomorphisms by the Statement's explicit hypotheses. Hence $c_q(t)$ is an isomorphism. Both sheaves compared by $c_q$ are finite locally free by those same hypotheses. Locally their ranks agree, and its matrix has determinant with nonzero residue at every $t$, hence a unit; the adjugate gives a local inverse. Therefore $c_q$ is an isomorphism. [A1, F6, step 4.1, step 10.1, step 11.1, algebra]

13.1 For an algebraic finite-type base map $S'\to S$, apply the same class-pullback construction to the pulled-back family. Tensor associativity identifies its analytification with the analytic pullback family. The square of the two comparison morphisms and the algebraic and analytic base-change maps commutes, since all maps pull back the same local cohomology classes and [F6] respects compositions. Whenever both families satisfy the Statement's locally-free and fiber-base-change hypotheses, step 12.1 makes their comparison morphisms invertible, so it identifies their base-change maps. This proves the complete stated family range, including the closed-fiber maps, without asserting arbitrary analytic-family algebraization. Full AC is inherited through [F1] and the resolution construction [F5]. The analytic inputs [A1], [A3]–[A5] are supplied by their local proof carriers; the hyperplane and pencil argument above uses precisely those interfaces. Their draft status and workflow verification remain separate from this mathematical derivation. [A1, F1, F5, F6, step 4.1, step 11.1, step 12.1, algebra] ∎
