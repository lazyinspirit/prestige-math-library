---
id: lem-qftx-p2-beilinson-diagonal-and-framed-vanishing
kind: lemma
title: "The projective-plane Beilinson monad for a framed torsion-free sheaf"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
page: qftx-adhm-linear-data-and-framed-monads
dependency_level: 1
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
  precheck: pending
---

## Statement

Assume AC. Let $L_\infty=\{z_0=0\}\subset\mathbb P^2_{\mathbb C}$ and let $\mathcal E$ be an algebraic coherent sheaf (a locally finitely presented module over the structure sheaf) of generic rank $N\ge1$. Torsion-free means that no nonzero stalk element is annihilated by a nonzero local function. Suppose it has a framing, namely an isomorphism $\phi:\mathcal E|_{L_\infty}\xrightarrow{\sim}W\otimes\mathcal O_{L_\infty}$ for $W=\mathbb C^N$, and Hilbert polynomial $\chi(\mathcal E(m))=N\binom{m+2}{2}-k$ for $k\ge0$, where $\chi$ is the alternating sum of coherent-sheaf cohomology dimensions. Then $\mathcal E$ is locally free near $L_\infty$ and

$$H^0(\mathcal E(-1))=H^0(\mathcal E(-2))=H^2(\mathcal E(-1))=H^2(\mathcal E(-2))=0.$$

$$\dim H^1(\mathcal E(-1))=\dim H^1(\mathcal E(-2))=k,\qquad H^0(\mathcal E\otimes\Omega^1)=H^2(\mathcal E\otimes\Omega^1)=0,\qquad \dim H^1(\mathcal E\otimes\Omega^1)=2k+N.$$
The diagonal on $\mathbb P^2\times\mathbb P^2$ has its length-two Koszul resolution from the regular rank-two section described in the proof. Its associated finite Beilinson hypercohomology complex, applied to $\mathcal E(-1)$ and twisted by $\mathcal O(1)$, is a monad

$$H^1(\mathcal E(-2))\otimes\mathcal O(-1)\longrightarrow H^1(\mathcal E\otimes\Omega^1)\otimes\mathcal O\longrightarrow H^1(\mathcal E(-1))\otimes\mathcal O(1)$$

whose only cohomology is $\mathcal E$ in the middle. For an algebraic family over a finite-type complex base, the same construction is a family of monads provided the sheaf is flat over the base, the displayed cohomology groups have the stated constant ranks, and the corresponding cohomology-and-base-change maps are isomorphisms.

## Statement references

[Nakajima–Yoshioka, §3.1](https://arxiv.org/pdf/math/0311058)

[Henni, §§2–3](https://arxiv.org/pdf/0903.3190)

## Facts & Assumptions

**Given:** The sheaf, framing, Hilbert polynomial and AC in the Statement. For the proof's algebraic/analytic family comparison, use the exact conditional GAGA interface of [F1]; that supplier itself remains escalated until its analytic package is locally supplied.

[F1] Conditional GAGA on projective spaces: analytification is exact, preserves cohomology and Ext, and commutes with restriction to $L_\infty$; its use here is limited to algebraic-family fiber comparison under the base-change hypotheses in the Statement. [[thm-qftx-projective-gaga-for-monad-data]]

[F2] The Koszul complex of a section whose zero scheme is a regular codimension-two subscheme resolves its structure sheaf, and exactness persists under the stated flat fiber restriction. [[lem-koszul-resolution-and-flat-fibre-restriction]]

[F3] The hypercohomology spectral sequences for the bounded filtered complexes converge to their total hypercohomology with the stated edge and filtration maps; their comparisons are available under DC, which follows from AC. [[thm-first-hypercohomology-spectral-sequence]], [[thm-second-hypercohomology-spectral-sequence]], [[def-dependent-choice]], [[thm-choice-implies-dependent-implies-countable-choice]]

[F4] For coherent $\mathcal F$ on $\mathbb P^2$, $H^2(\mathcal F)^*\cong\operatorname{Hom}(\mathcal F,\mathcal O(-3))$, with the coherent-sheaf Ext interpretation. [[thm-serre-duality-projective-space-coherent-sheaves]]

[F5] The twisting-sheaf cohomology, finite twisted locally-free resolutions and projective-bundle diagonal $K$-class generator have the stated projective hypotheses. [[thm-cohomology-projective-space-twisting-sheaves]], [[lem-coherent-sheaf-finite-twisted-locally-free-resolution-projective-space]], [[lem-relative-projective-bundle-k-theory-generators]]

[F6] If a finite module over a Noetherian local algebra has flat residue fiber and the maximal-ideal multiplication map is injective, it is flat over the base local ring. [[lem-noetherian-local-flatness-criterion-finite-over-target]]

[F7] Every finitely generated torsion-free module over a principal ideal domain is free. [[cor-finitely-generated-torsion-free-modules-over-a-pid-are-free]]

[F8] Nakayama's lemma: a finite module over a local ring is zero if its maximal-ideal multiple equals the module. [[thm-nakayama-lemma]]

[F9] On a regular Noetherian surface, the double dual of a rank-one exterior power is a line bundle and determinant maps extend across codimension two. [[lem-regular-surface-reflexive-modules-and-codimension-one-lattices]]

[A1] The family clause assumes the locally free cohomology and base-change maps specified in the Statement. It does not assert base change when those maps fail to be isomorphisms.

## Proof

**Given:** The hypotheses in the Statement; all sheaf cohomology below is algebraic unless explicitly analytified.

1.1 Near a point of $L_\infty$, let $R$ be the regular local surface ring, $t$ a local equation of $L_\infty$, and $M$ the torsion-free stalk of $\mathcal E$. Multiplication by $t$ is injective on $M$. Lift a basis of $M/tM\cong(R/(t))^N$ to obtain a surjection $R^N\twoheadrightarrow M$ by Nakayama [F8]. If $K$ is its kernel, tensoring with $R/(t)$ is exact on the left because $t$ is injective on $M$; the lifted basis makes $(R/(t))^N\to M/tM$ an isomorphism, so $K/tK=0$. Nakayama [F8] gives $K=0$, proving local freeness of rank $N$ near the framed line. [F8, given, algebra]

2.1 The framing makes $\det\mathcal E$ trivial on $L_\infty$, so $c_1(\mathcal E)\cdot L_\infty=0$ and $\mu(\mathcal E)=0$. For a positive-rank subsheaf $\mathcal F\subset\mathcal E$, replace it by its saturation. At the generic point of $L_\infty$, use the chart $z_1\ne0$ with coordinates $x=z_0/z_1$, $y=z_2/z_1$; the local ring is $\mathbb C[x,y]_{(x)}$, a discrete valuation ring because every nonzero polynomial is a power of $x$ times a polynomial not divisible by $x$, and the latter is a unit after localization. Saturation makes both $\mathcal F$ and $\mathcal E/\mathcal F$ torsion-free there, hence free by [F7]. Thus reducing the inclusion modulo $x$ remains injective at that generic point. Taking the double dual of its top exterior power gives a morphism from the determinant line of $\mathcal F$ to the corresponding exterior power of $\mathcal E$ near the line; [F9] makes this extension a morphism across the finite non-locally-free set. It is nonzero at the generic point and therefore restricts to a nonzero map $\det(\mathcal F)|_{L_\infty}\to\bigwedge^{\mathrm{rk}\mathcal F}(W\otimes\mathcal O_{L_\infty})$. Some component into a trivial line bundle is a nonzero section of $(\det(\mathcal F)|_{L_\infty})^*$, forcing $\deg(\det(\mathcal F)|_{L_\infty})\le0$. This proves slope-semistability of $\mathcal E$ of slope zero. [F7, F9, given, step 1.1, algebra]

2.2 A nonzero section of $\mathcal E(-d)$ for $d=1,2$ would give a rank-one subsheaf of $\mathcal E$ whose determinant has degree at least $d>0$, contrary to step 2.1. Hence $H^0(\mathcal E(-1))=H^0(\mathcal E(-2))=0$. A nonzero map $\mathcal E\to\mathcal O(-d)$ for $d=1,2$ would have a torsion-free image that is a quotient of $\mathcal E$ of slope at least zero: its kernel is a subsheaf of the slope-zero semistable sheaf, so has degree at most zero, while $\deg\mathcal E=0$. The same image is a subsheaf of $\mathcal O(-d)$ of degree at most $-d$. This is impossible. By coherent Serre duality [F4], these Hom vanishings give $H^2(\mathcal E(-1))=H^2(\mathcal E(-2))=0$. [F4, step 2.1, algebra]

3.1 The Hilbert polynomial gives $\chi(\mathcal E(-1))=\chi(\mathcal E(-2))=-k$. With the vanishings of step 2.2, $h^1(\mathcal E(-1))=h^1(\mathcal E(-2))=k$. The Euler sequence is locally split, so tensoring it by $\mathcal E$ remains exact; its first map therefore injects $H^0(\mathcal E\otimes\Omega^1)$ into $H^0(\mathcal E(-1))^3$, which is zero by step 2.2. [F5, step 2.2, algebra]

3.2 Serre duality identifies $H^2(\mathcal E\otimes\Omega^1)^*$ with $\operatorname{Hom}(\mathcal E,T_{\mathbb P^2}(-3))$. The twisted Euler sequence is $0\to\mathcal O(-3-d)\to\mathcal O(-2-d)^3\to T_{\mathbb P^2}(-3-d)\to0$. For $d\ge-1$, both $H^0$ terms on the left vanish and $H^1(\mathcal O(-3-d))=0$ by [F5], hence $H^0(T_{\mathbb P^2}(-3-d))=0$. Any rank-one torsion-free subsheaf of $T_{\mathbb P^2}(-3)$ of degree at least $-1$ would extend by double dual to a nonzero map $\mathcal O(d)\to T_{\mathbb P^2}(-3)$ for some $d\ge-1$, a contradiction. Thus $T_{\mathbb P^2}(-3)$ is stable of slope $-3/2$. A nonzero map from the slope-zero semistable $\mathcal E$ to this stable sheaf would have image both a quotient of slope at least zero and a subsheaf of negative slope, impossible. Consequently $H^2(\mathcal E\otimes\Omega^1)=0$. From the Euler sequence and the Hilbert polynomial, $\chi(\mathcal E\otimes\Omega^1)=3\chi(\mathcal E(-1))-\chi(\mathcal E)=-(2k+N)$, so $h^1(\mathcal E\otimes\Omega^1)=2k+N$. [F4, F5, step 2.1, step 2.2, step 3.1, algebra]

4.1 Let $Q$ be the universal rank-two quotient bundle on the first factor. The section of $\mathcal O(1)$ on the second factor tensored with $Q$ on the first, induced by the second tautological line modulo the first, vanishes exactly on the diagonal. In affine coordinates transverse to the diagonal its two components are a regular parameter pair; hence its Koszul complex is exact and resolves $\mathcal O_\Delta$. Since $\det Q=\mathcal O(1)$ and $Q^*=\Omega^1(1)$, the resolution is $0\to\mathcal O(-1)\boxtimes\mathcal O(-2)\to\Omega^1(1)\boxtimes\mathcal O(-1)\to\mathcal O\boxtimes\mathcal O\to\mathcal O_\Delta\to0$. The regularity check is local along the diagonal, and outside it one component is a unit; this verifies exactness at every point. Its alternating $K$-class is the diagonal generator from [F5], but here the actual Koszul complex, rather than only its $K$-class, supplies the resolution. [F2, F5, algebra]

5.1 Tensor this resolution on its first factor by $\mathcal E(-1)$ and take derived pushforward to the second factor. The standard finite affine cover computes coherent cohomology by Čech [F5]; choose a Cartan–Eilenberg resolution of the resulting bounded complex. DC, obtained from AC by [F3], supplies compatible resolution comparisons. Filtering this one total complex in the two orders gives the first and second spectral sequences [F3]; the identity comparison of the total complex identifies their abutment and canonical edge maps. Thus no arbitrary splitting is used. By steps 2.2 and 3.2, all rows except $q=1$ vanish. The surviving row is $H^1(\mathcal E(-2))\mathcal O(-2)\to H^1(\mathcal E\otimes\Omega^1)\mathcal O(-1)\to H^1(\mathcal E(-1))\mathcal O$. Its only cohomology is $\mathcal E(-1)$ in the middle because the diagonal resolution transforms $\mathcal E(-1)$ to itself. Twisting by $\mathcal O(1)$ gives the displayed monad. The dimensions are exactly those from steps 3.1–3.2. [F3, F5, step 2.2, step 3.1, step 3.2, step 4.1, algebra]

6.1 For a finite-type algebraic base $S$, tensor the relative diagonal Koszul resolution by the flat family and use the assumed base-change isomorphisms [A1]. The direct-image terms are vector bundles of ranks $k,2k+N,k$, and the finite filtered complex commutes with residue-field restriction. On every fiber, steps 1.1–5.1 give the monad. The right end map is surjective on every fiber, hence surjective by Nakayama [F8], and its kernel $K$ is locally free. Locally on $S$, write the remaining exact sequence as $0\to P^{-1}\to K\to\mathcal E\to0$, with $P^{-1}$ and $K$ flat over the base. Tensoring by any residue field $k(s)$ stays injective at the left because the fiber complex is a monad on the whole projective plane. Thus $\operatorname{Tor}_1^{\mathcal O_{S,s}}(k(s),\mathcal E)=0$, equivalently the maximal-ideal multiplication map is injective. Since $\mathcal E$ is finite over the local ring of $\mathbb P^2\times S$, [F6] proves flatness over $S$. The same base-change maps identify the relative middle cohomology with the given family. This is precisely the family range stated and does not assert base change outside it. [A1, F1, F3, F6, F8, step 1.1, step 4.1, step 5.1, algebra] ∎
