---
id: lem-qftx-p2-beilinson-diagonal-and-framed-vanishing
kind: lemma
title: "The projective-plane Beilinson monad for a framed torsion-free sheaf"
status: "published"
origin: pipeline
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
page: qftx-adhm-linear-data-and-framed-monads
dependency_level: 8
deps:
  - thm-qftx-projective-gaga-for-monad-data
  - lem-koszul-resolution-and-flat-fibre-restriction
  - lem-relative-projective-bundle-k-theory-generators
  - thm-first-hypercohomology-spectral-sequence
  - thm-second-hypercohomology-spectral-sequence
  - thm-serre-duality-projective-space-coherent-sheaves
  - thm-cohomology-projective-space-twisting-sheaves
  - lem-coherent-sheaf-finite-twisted-locally-free-resolution-projective-space
  - thm-cech-computes-qc-cohomology-separated-scheme-affine-cover
  - thm-nakayama-lemma
  - cor-finitely-generated-torsion-free-modules-over-a-pid-are-free
  - lem-regular-surface-reflexive-modules-and-codimension-one-lattices
  - def-axiom-of-choice
  - def-dependent-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - lem-noetherian-local-flatness-criterion-finite-over-target
dependency_roles:
  thm-qftx-projective-gaga-for-monad-data: mathematical-premise
  lem-koszul-resolution-and-flat-fibre-restriction: mathematical-premise
  lem-relative-projective-bundle-k-theory-generators: mathematical-premise
  thm-first-hypercohomology-spectral-sequence: mathematical-premise
  thm-second-hypercohomology-spectral-sequence: mathematical-premise
  thm-serre-duality-projective-space-coherent-sheaves: mathematical-premise
  thm-cohomology-projective-space-twisting-sheaves: mathematical-premise
  lem-coherent-sheaf-finite-twisted-locally-free-resolution-projective-space: mathematical-premise
  thm-cech-computes-qc-cohomology-separated-scheme-affine-cover: mathematical-premise
  thm-nakayama-lemma: mathematical-premise
  cor-finitely-generated-torsion-free-modules-over-a-pid-are-free: mathematical-premise
  lem-regular-surface-reflexive-modules-and-codimension-one-lattices: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-dependent-choice: mathematical-premise
  thm-choice-implies-dependent-implies-countable-choice: mathematical-premise
  lem-noetherian-local-flatness-criterion-finite-over-target: mathematical-premise
axiom_base: "ZF + full Axiom of Choice through the listed cohomology, duality, finite-resolution and local-flatness suppliers."
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Hiraku Nakajima and Kota Yoshioka, Lectures on Instanton Counting"
      url: https://arxiv.org/pdf/math/0311058
      locator: "§3.1, PDF pp. 17–19: framed torsion-free sheaves on P² and the locally-free ASD locus; dictionary proof is not supplied there."
    - title: "F. Henni, Monads for framed torsion-free sheaves on multi-blow-ups of the projective plane"
      url: https://arxiv.org/pdf/0903.3190
      locator: "§§2–3: monad constructions and ADHM-type data on blow-ups; P² diagonal, framed vanishing, and the family argument below are proved locally here."
    - title: "Jean-Pierre Serre, Géométrie algébrique et géométrie analytique"
      url: https://www.college-de-france.fr/media/jean-pierre-serre/UPL1698785858825941763_Serre_GAGA.pdf
      locator: "Theorems 1–3 and proofs, §§12–17, for the conditional algebraic/analytic comparison used in the family clause."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
---

## Statement

Assume AC. Let $L_\infty=\{[Z_0:Z_1:Z_2]\in\mathbb P^2_{\mathbb C}:Z_0=0\}$ and let $\mathcal E$ be a torsion-free coherent algebraic sheaf (a locally finitely presented $\mathcal O_{\mathbb P^2}$-module) of generic rank $N\ge1$, meaning $N=\dim_{\mathbb C(\mathbb P^2)}\mathcal E_\eta$ at the generic point $\eta$ of the integral scheme $\mathbb P^2$, where $\mathbb C(\mathbb P^2)$ is its field of rational functions. Torsion-free means that no nonzero stalk element is annihilated by a nonzero local function. Suppose it has a framing, namely an isomorphism $\phi:\mathcal E|_{L_\infty}\xrightarrow{\sim}W\otimes\mathcal O_{L_\infty}$ for $W=\mathbb C^N$, and Hilbert polynomial $\chi(\mathcal E(m))=N\binom{m+2}{2}-k$ for $k\ge0$, where $\chi$ is the alternating sum of coherent-sheaf cohomology dimensions. Let $\Omega^1=\Omega^1_{\mathbb P^2/\mathbb C}$ be the locally free sheaf of Kähler differentials on $\mathbb P^2$, and let $T_{\mathbb P^2}:=\mathcal Hom_{\mathcal O_{\mathbb P^2}}(\Omega^1,\mathcal O_{\mathbb P^2})$ be its tangent sheaf. Then $\mathcal E$ is locally free near $L_\infty$ and

$$H^0(\mathcal E(-1))=H^0(\mathcal E(-2))=H^2(\mathcal E(-1))=H^2(\mathcal E(-2))=0.$$

$$\dim H^1(\mathcal E(-1))=\dim H^1(\mathcal E(-2))=k,\qquad H^0(\mathcal E\otimes\Omega^1)=H^2(\mathcal E\otimes\Omega^1)=0,\qquad \dim H^1(\mathcal E\otimes\Omega^1)=2k+N.$$
By a monad $A\to B\to C$ on $\mathbb P^2$ we mean a complex in degrees $-1,0,1$ that is exact at $A$ and $C$; its middle cohomology is $\ker(B\to C)/\operatorname{im}(A\to B)$. The diagonal on $\mathbb P^2\times\mathbb P^2$ has its length-two Koszul resolution from the regular rank-two section described in the proof. Its associated finite Beilinson hypercohomology complex, applied to $\mathcal E(-1)$ and twisted by $\mathcal O(1)$, is a monad

$$H^1(\mathcal E(-2))\otimes\mathcal O(-1)\longrightarrow H^1(\mathcal E\otimes\Omega^1)\otimes\mathcal O\longrightarrow H^1(\mathcal E(-1))\otimes\mathcal O(1)$$

whose only cohomology is $\mathcal E$ in the middle. For the family version, let $S$ be a finite-type complex scheme, $p:\mathbb P^2\times S\to S$ the projection and $\operatorname{pr}_1:\mathbb P^2\times S\to\mathbb P^2$ the first projection, and let $\mathcal E$ be a coherent sheaf on $\mathbb P^2\times S$ flat over $S$ (each stalk is flat over the local ring of $S$ at its image). For a sheaf $\mathcal F$ on $\mathbb P^2\times S$, $R^qp_*\mathcal F$ denotes the $q$th cohomology sheaf of the right-derived direct image; it is the sheafification of the presheaf $V\mapsto H^q(p^{-1}V,\mathcal F)$. Require a relative framing $\Phi:\mathcal E|_{L_\infty\times S}\xrightarrow{\sim}W\otimes\mathcal O_{L_\infty\times S}$, and require every closed complex fiber $\mathcal E_s$ to be torsion-free of rank $N$ with Hilbert polynomial $N\binom{m+2}{2}-k$. For $\mathcal G_1=\mathcal E\otimes\operatorname{pr}_1^*\mathcal O(-2)$, $\mathcal G_2=\mathcal E\otimes\operatorname{pr}_1^*\Omega^1$, and $\mathcal G_3=\mathcal E\otimes\operatorname{pr}_1^*\mathcal O(-1)$, require $R^qp_*\mathcal G_i$ to be locally free of finite rank $h_i^q$, where $(h_1^0,h_1^1,h_1^2)=(0,k,0)$, $(h_2^0,h_2^1,h_2^2)=(0,2k+N,0)$, and $(h_3^0,h_3^1,h_3^2)=(0,k,0)$. For each closed point $s\in S$ (so $\kappa(s)=\mathbb C$), let $j_s:\operatorname{Spec}\kappa(s)\to S$ be the inclusion, let $i_s:\mathbb P^2_{\kappa(s)}\hookrightarrow\mathbb P^2\times S$ be the fiber inclusion, let $p_s:\mathbb P^2_{\kappa(s)}\to\operatorname{Spec}\kappa(s)$ be the projection, and put $(\mathcal G_i)_s=i_s^*\mathcal G_i$. Require the canonical maps $\beta^q_{i,s}:(R^qp_*\mathcal G_i)\otimes_{\mathcal O_S}\kappa(s)\to H^q(\mathbb P^2_{\kappa(s)},(\mathcal G_i)_s)$ to be isomorphisms for every $i$, every closed $s$, and $q=0,1,2$. Here $\beta^q_{i,s}$ is induced by the derived base-change morphism $Lj_s^*Rp_*\mathcal G_i\to R(p_s)_*Li_s^*\mathcal G_i$ and the canonical cohomology-and-base-change edge map; local freeness identifies the degree-$q$ source with $(R^qp_*\mathcal G_i)\otimes\kappa(s)$. Then the relative diagonal construction gives a monad of vector bundles on $\mathbb P^2\times S$ with terms $p^*R^1p_*\mathcal G_1\otimes\operatorname{pr}_1^*\mathcal O(-1)\to p^*R^1p_*\mathcal G_2\to p^*R^1p_*\mathcal G_3\otimes\operatorname{pr}_1^*\mathcal O(1)$ and only middle cohomology $\mathcal E$; every closed fiber is the monad above and the relative framing is retained.

## Statement references

[Nakajima–Yoshioka, §3.1](https://arxiv.org/pdf/math/0311058)

[Henni, §§2–3](https://arxiv.org/pdf/0903.3190)

## Facts & Assumptions

**Given:** The sheaf, framing, Hilbert polynomial and AC in the Statement. For the proof's algebraic/analytic family comparison, use the exact conditional GAGA interface of [F1].

For a coherent torsion-free sheaf $\mathcal F$ of generic rank $r>0$, write $\mathcal F^\vee=\mathcal Hom(\mathcal F,\mathcal O_{\mathbb P^2})$, $\mathcal F^{\vee\vee}=(\mathcal F^\vee)^\vee$, and $\det(\mathcal F)=(\bigwedge^r\mathcal F)^{\vee\vee}$, which is a line bundle on the regular surface $\mathbb P^2$. Define $\deg(\mathcal F)=\deg(\det(\mathcal F)|_{L_\infty})$, where $\deg(\mathcal O_{\mathbb P^1}(d))=d$, and define its slope by $\mu(\mathcal F)=\deg(\mathcal F)/r$. Slope semistability means $\mu(\mathcal F')\le\mu(\mathcal E)$ for every coherent subsheaf $\mathcal F'\subset\mathcal E$ with $0<\operatorname{rk}(\mathcal F')<N$. For a subsheaf $\mathcal F'\subset\mathcal E$, its saturation $\mathcal F'^{\mathrm{sat}}\subseteq\mathcal E$ is the inverse image of the torsion subsheaf of $\mathcal E/\mathcal F'$; it is coherent and $\mathcal E/\mathcal F'^{\mathrm{sat}}$ is torsion-free. At every codimension-one point the local ring is a discrete valuation ring, and the determinant of the inclusion $\mathcal F'\subseteq\mathcal F'^{\mathrm{sat}}$ has nonnegative vanishing order. As verified in step 2.1, the resulting effective divisor has nonnegative degree on $L_\infty$, so $\deg(\mathcal F')\le\deg(\mathcal F'^{\mathrm{sat}})$. For a short exact sequence of torsion-free sheaves with torsion-free quotient, determinant degrees add: the sequence splits over every codimension-one discrete valuation ring, and the induced determinant isomorphism extends across codimension two by [F9]. The proof below verifies the determinant and restriction arguments used here. In the Statement, $\Omega^1$ is the cotangent sheaf of Kähler differentials and $T_{\mathbb P^2}=\mathcal Hom(\Omega^1,\mathcal O_{\mathbb P^2})$ is the tangent sheaf.

[F1] Conditional GAGA on projective spaces: analytification is exact, preserves cohomology and Ext, and commutes with restriction to $L_\infty$; its use here is limited to algebraic-family fiber comparison under the base-change hypotheses in the Statement. [[thm-qftx-projective-gaga-for-monad-data]]

[F2] The Koszul complex of a section whose zero scheme is a regular codimension-two subscheme resolves its structure sheaf, and exactness persists under the stated flat fiber restriction. [[lem-koszul-resolution-and-flat-fibre-restriction]]

[F3] The hypercohomology spectral sequences for the bounded filtered complexes converge to their total hypercohomology with the stated edge and filtration maps; their comparisons are available under DC, which follows from AC. [[thm-first-hypercohomology-spectral-sequence]], [[thm-second-hypercohomology-spectral-sequence]], [[def-dependent-choice]], [[thm-choice-implies-dependent-implies-countable-choice]]

[F4] For coherent $\mathcal F$ on $\mathbb P^2$, $H^2(\mathcal F)^*\cong\operatorname{Hom}(\mathcal F,\mathcal O(-3))$, with the coherent-sheaf Ext interpretation. [[thm-serre-duality-projective-space-coherent-sheaves]]

[F5] The twisting-sheaf cohomology, finite twisted locally-free resolutions and projective-bundle $K$-theory generators have the stated projective hypotheses. [[thm-cohomology-projective-space-twisting-sheaves]], [[lem-coherent-sheaf-finite-twisted-locally-free-resolution-projective-space]], [[lem-relative-projective-bundle-k-theory-generators]]

[F6] If a finite module over a Noetherian local algebra has flat residue fiber and the maximal-ideal multiplication map is injective, it is flat over the base local ring. [[lem-noetherian-local-flatness-criterion-finite-over-target]]

[F7] Every finitely generated torsion-free module over a principal ideal domain is free. [[cor-finitely-generated-torsion-free-modules-over-a-pid-are-free]]

[F8] Nakayama's lemma: a finite module over a local ring is zero if its maximal-ideal multiple equals the module. [[thm-nakayama-lemma]]

[F9] On a regular Noetherian surface, the double dual of a rank-one exterior power is a line bundle and determinant maps extend across codimension two. [[lem-regular-surface-reflexive-modules-and-codimension-one-lattices]]

[F10] Assume AC. For a quasi-compact separated scheme with a finite ordered affine open cover, the ordered Čech complex of a quasi-coherent sheaf computes derived sheaf cohomology. For every affine scheme $U=\operatorname{Spec}A$, the three standard charts of $\mathbb P^2_U$ and all their finite intersections are affine, so quasi-coherent cohomology vanishes above degree two. For a general base $S$, apply this computation on affine open subsets of $S$ and on affine target opens for the relative diagonal pushforward. The restriction-compatible complexes give the relative constructions by sheaf gluing. [[thm-cech-computes-qc-cohomology-separated-scheme-affine-cover]]

[A1] The family clause assumes the locally free cohomology and base-change maps specified in the Statement. It does not assert base change when those maps fail to be isomorphisms.

## Proof

**Given:** The hypotheses in the Statement; all sheaf cohomology below is algebraic unless explicitly analytified.

1.1 Near a point of $L_\infty$, let $R$ be the regular local surface ring, $t$ a local equation of $L_\infty$, and $M$ the torsion-free stalk of $\mathcal E$. Multiplication by $t$ is injective on $M$. Lift a basis of $M/tM\cong(R/(t))^N$ to obtain a surjection $R^N\twoheadrightarrow M$ by Nakayama [F8]. If $K$ is its kernel, tensoring with $R/(t)$ is exact on the left because $t$ is injective on $M$; the lifted basis makes $(R/(t))^N\to M/tM$ an isomorphism, so $K/tK=0$. Nakayama [F8] gives $K=0$, proving local freeness of rank $N$ near the framed line. [F8, given, algebra]

1.2 Let $Q$ be the universal rank-two quotient bundle on the first factor. The section of $\mathcal O(1)$ on the second factor tensored with $Q$ on the first, induced by the second tautological line modulo the first, vanishes exactly on the diagonal. In affine coordinates transverse to the diagonal its two components are a regular parameter pair; hence its Koszul complex is exact and resolves $\mathcal O_\Delta$. Since $\det Q=\mathcal O(1)$ and $Q^*=\Omega^1(1)$, the resolution is $0\to\mathcal O(-1)\boxtimes\mathcal O(-2)\to\Omega^1(1)\boxtimes\mathcal O(-1)\to\mathcal O\boxtimes\mathcal O\to\mathcal O_\Delta\to0$. The regularity check is local along the diagonal, and outside it one component is a unit; this verifies exactness at every point. This exactness also persists after tensoring by the pullback from the first factor of any coherent sheaf, including over a base scheme $S$. Indeed, near the relative diagonal choose the same affine chart on both factors over an affine base: if $M$ is its module on the first chart, its pullback is $M[y_1,y_2]$, and the diagonal components are $y_1-x_1,y_2-x_2$. Multiplication by $y_1-x_1$ is injective by its leading coefficient, and its quotient is $M[y_2]$; multiplication by $y_2-x_2$ is likewise injective, with quotient $M$. For these two commuting operators $a,b$, a relation $au+bv=0$ gives $v=aw$ after reduction modulo $a$, and then $u=-bw$ by injectivity of $a$; also $a$ injective makes the left Koszul map injective. This proves exactness of the tensored length-two complex. Away from the diagonal a section component is a unit, giving a contracting homotopy after every tensor operation. Thus no local freeness of the sheaf being tensored is required. [F2, F5, algebra]

2.1 The framing and local freeness from step 1.1 give $\det(\mathcal E)|_{L_\infty}\cong\mathcal O_{L_\infty}$, so $\deg(\mathcal E)=\mu(\mathcal E)=0$. Let $\mathcal F\subset\mathcal E$ have positive rank and replace it by its saturation $\mathcal F^{\mathrm{sat}}$. The induced nonzero morphism of determinant line bundles $\det(\mathcal F)\to\det(\mathcal F^{\mathrm{sat}})$ has an effective zero divisor: at every codimension-one point, the local ring is a discrete valuation ring, both modules are finite free of the same rank, and the determinant of their inclusion has nonnegative valuation. For an effective divisor $D$, write $D=mL_\infty+D'$ with $m\ge0$ and $D'$ effective without $L_\infty$ as a component. The canonical section of $\mathcal O(D')$ restricts nontrivially to $L_\infty$, so its restriction has nonnegative degree: by [F5], $H^0(\mathbb P^1,\mathcal O(d))=0$ for $d<0$. The hyperplane transition functions give $\mathcal O(L_\infty)|_{L_\infty}=\mathcal O_{\mathbb P^1}(1)$, of degree one. Tensor products add line-bundle degrees, hence $\deg(\mathcal O(D)|_{L_\infty})=m+\deg(\mathcal O(D')|_{L_\infty})\ge0$. Applying this to the determinant zero divisor gives $\deg(\mathcal F)\le\deg(\mathcal F^{\mathrm{sat}})$. At the generic point of $L_\infty$, use the chart $Z_1\ne0$ with coordinates $x=Z_0/Z_1$, $y=Z_2/Z_1$; the local ring $R=\mathbb C[x,y]_{(x)}$ is a discrete valuation ring with uniformizer $x$. The modules $\mathcal E_R$ and $\mathcal F^{\mathrm{sat}}_R$ are free, and $\mathcal E_R/\mathcal F^{\mathrm{sat}}_R$ is torsion-free by saturation, hence free by [F7]. Therefore the inclusion splits over $R$, and its reduction modulo $x$ is injective. Writing $r=\operatorname{rk}(\mathcal F)$, the $r$th exterior power gives a generically nonzero map $\det(\mathcal F^{\mathrm{sat}})|_{L_\infty}\to\bigwedge^r(\mathcal E|_{L_\infty})\cong\mathcal O_{L_\infty}^{\binom Nr}$. At least one component is a nonzero map to $\mathcal O_{L_\infty}$. The determinant map is defined across the finite non-locally-free set by taking double duals; [F9] gives the codimension-one extension. Since a nonzero map $\mathcal O_{L_\infty}(d)\to\mathcal O_{L_\infty}$ requires $d\le0$, we have $\deg(\mathcal F^{\mathrm{sat}})\le0$ and thus $\deg(\mathcal F)\le0$. This proves the slope inequality for every positive-rank subsheaf, hence slope-semistability of $\mathcal E$ with slope zero. For any torsion-free inclusion $\mathcal Q\subseteq\mathcal V$ of equal positive rank, the determinant inclusion has an effective zero divisor by the same discrete-valuation calculation, so $\deg(\mathcal Q)\le\deg(\mathcal V)$. No such bound for unequal ranks and an arbitrary target is asserted. [F5, F7, F9, given, step 1.1, algebra]

3.1 A nonzero section of $\mathcal E(-d)$ for $d=1,2$ is injective as a map $\mathcal O(d)\to\mathcal E$, because $\mathcal E$ is torsion-free on the integral surface. Its rank-one image has determinant degree at least $d>0$ by the saturation inequality in step 2.1, a contradiction. Hence $H^0(\mathcal E(-1))=H^0(\mathcal E(-2))=0$. A nonzero map $\mathcal E\to\mathcal O(-d)$ for $d=1,2$ has torsion-free rank-one image $Q$. If $N>1$, its kernel has rank $N-1$ and degree at most zero by step 2.1, so determinant additivity in the exact sequence with torsion-free quotient gives $\deg Q\ge\deg\mathcal E=0$; if $N=1$, torsion-freeness forces the kernel to vanish and $\deg Q=0$. But $Q\subseteq\mathcal O(-d)$ has degree at most $-d$ by the same saturation inequality, a contradiction. By coherent Serre duality [F4], these Hom vanishings give $H^2(\mathcal E(-1))=H^2(\mathcal E(-2))=0$. [F4, step 2.1, algebra]

4.1 The Hilbert polynomial gives $\chi(\mathcal E(-1))=\chi(\mathcal E(-2))=-k$. With the vanishings of step 3.1, $h^1(\mathcal E(-1))=h^1(\mathcal E(-2))=k$. The Euler sequence is locally split, so tensoring it by $\mathcal E$ remains exact; its first map therefore injects $H^0(\mathcal E\otimes\Omega^1)$ into $H^0(\mathcal E(-1))^3$, which is zero by step 3.1. [F5, step 3.1, algebra]

5.1 Serre duality identifies $H^2(\mathcal E\otimes\Omega^1)^*$ with $\operatorname{Hom}(\mathcal E,T_{\mathbb P^2}(-3))$. The twisted Euler sequence is $0\to\mathcal O(-3-d)\to\mathcal O(-2-d)^3\to T_{\mathbb P^2}(-3-d)\to0$. For $d\ge-1$, both $H^0$ terms on the left vanish and $H^1(\mathcal O(-3-d))=0$ by [F5], hence $H^0(T_{\mathbb P^2}(-3-d))=0$. Any rank-one torsion-free subsheaf of $T_{\mathbb P^2}(-3)$ of degree at least $-1$ would extend by double dual to a nonzero map $\mathcal O(d)\to T_{\mathbb P^2}(-3)$ for some $d\ge-1$, a contradiction. Taking determinants in the Euler sequence gives $\deg T_{\mathbb P^2}(-3)=3(-2)-(-3)=-3$; its rank is two and slope is $-3/2$. Integrality of degree makes each rank-one subsheaf have degree at most $-2$, hence smaller slope; this proves stability, meaning strict slope inequality for every proper positive-rank subsheaf. If a nonzero map $\mathcal E\to T_{\mathbb P^2}(-3)$ has image $Q$ of rank $r=1$ or $2$, its kernel is torsion-free, has degree at most zero by step 2.1 when nonzero, and has degree zero when zero. Determinant additivity gives $\deg Q\ge0$. For $r=1$ the preceding rank-one bound gives $\deg Q\le-2$; for $r=2$ the equal-rank determinant bound in step 2.1 gives $\deg Q\le-3$. Both contradict $\deg Q\ge0$. Consequently $H^2(\mathcal E\otimes\Omega^1)=0$. From the Euler sequence and the Hilbert polynomial, $\chi(\mathcal E\otimes\Omega^1)=3\chi(\mathcal E(-1))-\chi(\mathcal E)=-(2k+N)$, so $h^1(\mathcal E\otimes\Omega^1)=2k+N$. [F4, F5, step 2.1, step 3.1, step 4.1, algebra]

6.1 Using the tensor exactness proved in step 1.2, tensor this resolution on its first factor by $\mathcal E(-1)$ and take derived pushforward to the second factor. By [F10], the ordered Čech complex of the three standard affine charts computes the coherent-sheaf cohomology here: $\mathbb P^2$ is quasi-compact and separated, the charts and all their intersections are affine, and the sheaves are quasi-coherent. Choose a Cartan–Eilenberg resolution of the resulting bounded complex. DC, obtained from AC by [F3], supplies compatible resolution comparisons. Filtering this one total complex in the two orders gives the first and second spectral sequences [F3]; the identity comparison of the total complex identifies their abutment and canonical edge maps. Thus no arbitrary splitting is used. By steps 3.1 and 5.1, all rows except $q=1$ vanish. The surviving row is $H^1(\mathcal E(-2))\mathcal O(-2)\to H^1(\mathcal E\otimes\Omega^1)\mathcal O(-1)\to H^1(\mathcal E(-1))\mathcal O$. Its only cohomology is $\mathcal E(-1)$ in the middle because the diagonal resolution transforms $\mathcal E(-1)$ to itself. Twisting by $\mathcal O(1)$ gives the displayed monad. The dimensions are exactly those from steps 4.1 and 5.1. [F2, F3, F10, step 3.1, step 4.1, step 5.1, step 1.2, algebra]

7.1 Let $S,\mathcal E,\Phi,\mathcal G_i$ satisfy the family hypotheses in the Statement. Work locally on affine open subsets of $S$ and, for the diagonal pushforward, on affine opens of its target. On each such open, [F10] supplies the standard three-chart Čech computation. Restrictions commute with its differentials and the diagonal maps, so these local constructions agree on overlaps and glue. Tensor the relative diagonal Koszul resolution with this $S$-flat framed family; step 1.2 proves exactness even for non-locally-free fibers and nonreduced bases. For each closed point $s$, the specified maps $\beta^q_{i,s}$ identify the fibers of the direct-image terms with the cohomology groups of the framed fiber $\mathcal E_s$; no base-change outside those maps is used [A1]. The direct-image terms are vector bundles of ranks $k,2k+N,k$, and the finite filtered complex commutes with residue-field restriction. On every closed fiber, step 6.1 gives the monad with framing $\Phi_s$. The right end map is surjective on every fiber, hence surjective by Nakayama [F8], and its kernel $K$ is locally free. Locally on $S$, write the remaining exact sequence as $0\to P^{-1}\to K\to\mathcal E\to0$, with $P^{-1}$ and $K$ flat over the base. Tensoring by any residue field $k(s)$ stays injective at the left because the fiber complex is a monad on the whole projective plane. Thus for every $y\in\mathbb P^2\times\{s\}$, $\operatorname{Tor}_1^{\mathcal O_{S,s}}(\kappa(s),\mathcal E_y)=0$, equivalently the maximal-ideal multiplication map on the finite local module $\mathcal E_y$ is injective. Since $\mathcal E$ is finite over the local ring of $\mathbb P^2\times S$, [F6] proves flatness over $S$. The same base-change maps identify the relative middle cohomology with the given family. This is precisely the family range stated and does not assert base change outside it. [A1, F1, F3, F6, F8, step 1.1, step 1.2, step 6.1, algebra, F10] ∎
