---
id: lem-nagata-blowup-preserves-coherent-projectivity
kind: lemma
title: Blowups preserve projectivity via a coherent projective bundle
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - lem-nagata-coherent-submodule-extension-and-integral-algebra-approximation
  - lem-nagata-finite-affine-blowup-chart-gluing
  - def-relative-projective-space-standard-charts
  - def-separated-morphism-schemes
  - cor-localisation-commutes-with-kernels-images-and-cokernels
proof_strategy: direct
axiom_use: No choice principle is assumed. Finite local section extensions, finite overlap annihilator exponents and coherent submodule extension give a global projective-bundle embedding.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Brian Conrad, Deligne's notes on Nagata compactifications, August 10, 2007 preprint
      url: https://math.stanford.edu/~conrad/papers/nagatafinal.pdf
      locator: Section1 blowup projectivity discussion, internal p.5, and Corollary2.6 proof, internal p.21, read in full. The coherent twisting and global bundle embedding are reconstructed below.
    - title: Pierre Deligne, Le théorème de plongement de Nagata, Kyoto Journal of Mathematics 50 (2010)
      url: https://publications.ias.edu/sites/default/files/Le%20th%C3%A9or%C3%A8me%20de%20plongement%20de%20Nagata.pdf
      locator: Corollary1.4, printed p.666, read in full; projectivity is in the coherent projective-bundle convention, not an assertion of an arbitrary global trivial bundle embedding.
---

## Statement

Let $S$ be Noetherian, let $\mathcal E_0$ be coherent on $S$, and let $q:X\to S$ have a closed immersion $X\hookrightarrow\mathbb P_S(\mathcal E_0)$. Projective bundles here mean the projective schemes of invertible quotients, constructed by the finite affine symmetric-algebra charts; this is coherent-projective-bundle projectivity. Let $\mathcal J$ be a coherent ideal on $X$. Then $\operatorname{Bl}_{\mathcal J}(X)\to S$ again has a global closed immersion into $\mathbb P_S(\mathcal E')$ for some coherent $\mathcal E'$ on $S$.

More generally, writing $L=\mathcal O_X(1)$, for every coherent $\mathcal F$ on $X$ there exist $N\geq0$, coherent $\mathcal E$ on $S$ and a surjection $q^*\mathcal E\twoheadrightarrow\mathcal F\otimes L^N$. No global free generating family on $S$, separatedness of $S$, or choice hypothesis is required. Empty schemes and zero and unit center ideals are included.

## Statement references

[Conrad, Corollary2.6 proof, internal p.21](https://math.stanford.edu/~conrad/papers/nagatafinal.pdf)

## Facts & Assumptions

**Given:** The Noetherian base, coherent sheaf, closed projective-bundle embedding, coherent ideal and coherent module in the Statement.

[F1] Coherent submodules of a given quasi-coherent sheaf extend from an open of a Noetherian scheme with exact restriction. [[lem-nagata-coherent-submodule-extension-and-integral-algebra-approximation]]

[F2] Finite symmetric-algebra and Rees-algebra affine charts glue by their degree-zero double localizations; on Noetherian affine bases all these finite-type charts are Noetherian. [[lem-nagata-finite-affine-blowup-chart-gluing]] [[def-relative-projective-space-standard-charts]]

[F3] Projectivity in this Statement uses a closed immersion into the projective bundle of a coherent sheaf. Separatedness means a closed diagonal. Exact localization commutes with finite equalizers and quotient modules. [[def-separated-morphism-schemes]] [[cor-localisation-commutes-with-kernels-images-and-cokernels]]

## Proof

1.1 First make the projective-bundle construction explicit. On an affine open $\operatorname{Spec}A\subseteq S$, choose finite generators of $\mathcal E_0$, giving a surjection $A^r\to M$. The symmetric algebra of $M$ is the quotient of $A[T_1,\ldots,T_r]$ by the homogeneous linear relations of this presentation. On $T_i\ne0$ take its degree-zero localization. These are finite $A$-algebra charts and glue by the fraction-overlap maps in [F2] to a closed subscheme of $\mathbb P^{r-1}_A$. It represents invertible quotients of the pulled-back $M$: a chart records a quotient in which the image of its $i$th generator is a basis, and the linear relations are precisely those needed to factor through $M$. This description proves independence of the finite presentation and agreement on base overlaps, so the charts glue over $S$. It also supplies the tautological invertible quotient $L$ and shows that $X$ is Noetherian and separated over $S$. The same construction applies to every coherent sheaf on $S$ or $X$ used below; no separate relative-Proj existence theorem is assumed. [F2, F3, given, construct, algebra]

2.1 Work first over one affine base open, so $X$ is closed in a finite projective space there. Let $t_i$ be its restricted homogeneous coordinate sections of $L$ and $X_i=D(t_i)$ the finite affine cover of $X$. We prove that a section $g\in\mathcal F(X_i)$ extends after multiplication by a power of $t_i$. On $X_j$, the intersection is $D(t_i/t_j)$, so express $g$ there as a module fraction $m_j/(t_i/t_j)^{a_j}$. Choose a common $n\geq a_j$ and define the local section $v_j=(t_i/t_j)^{n-a_j}m_j\otimes t_j^n$ of $\mathcal F\otimes L^n$ on $X_j$. On $X_i\cap X_j$ it equals $g\otimes t_i^n$. On $X_j\cap X_k$ the difference $v_j-v_k$ consequently becomes zero after inverting $t_i$. These overlaps are affine principal opens in $X_j$, so [F3] gives a power of $t_i/t_j$ killing that difference. A common power $b$ works for the finitely many overlaps. Multiplying every $v_j$ by $t_i^b$ therefore gives agreeing local sections of $\mathcal F\otimes L^{n+b}$, which glue globally and restrict to $g\otimes t_i^{n+b}$. All transitions are those of $L$, so this multiplication is the same global section operation in every frame. [F2, F3, step 1.1, construct, algebra]

3.1 Choose finite module generators of $\mathcal F$ on the finitely many $X_i$ and apply step 2.1 to each. Increase their finitely many powers to one common $N$ by multiplying the section attached to $X_i$ by a further power of its global $t_i$. Their restrictions still generate on $X_i$, since $t_i$ is a frame there. Thus $\mathcal F\otimes L^N$ is generated by finitely many global sections over this affine base open. Every larger twist is likewise generated, because $L$ is generated by the $t_i$ and their finite monomials generate its powers. Now take a finite affine cover $S_\alpha$ of $S$ and choose one common $N$ for these finitely many local constructions. The sheaf $\mathcal Q=q_*(\mathcal F\otimes L^N)$ is quasi-coherent: over each affine base, a finite affine cover of $X$ and its affine pairwise intersections express sections as a finite equalizer; base principal localization localizes those rings and modules, so [F3] gives the required localization identities. On $S_\alpha$, the finitely many generating global sections span a coherent submodule $\mathcal G_\alpha\subseteq\mathcal Q|_{S_\alpha}$. Extend each by [F1] and let $\mathcal E$ be the sum of their finitely many coherent extensions. The evaluation map $q^*\mathcal E\to\mathcal F\otimes L^N$ is surjective on every $q^{-1}(S_\alpha)$ by construction, hence globally. This proves the more general assertion. [F1, F3, step 1.1, step 2.1, construct, algebra]

4.1 Apply step 3.1 to $\mathcal F=\mathcal J$. The surjection $q^*\mathcal E\to\mathcal J\otimes L^N$ induces a surjection of graded algebras $\operatorname{Sym}(q^*\mathcal E)\to\bigoplus_{k\geq0}\mathcal J^k\otimes L^{Nk}$. On affine standard charts it gives a quotient map after degree-zero localization, hence a closed immersion of the corresponding projective schemes. The projective scheme of this twisted Rees algebra is the blowup: locally trivialize $L$, when its graded algebra becomes the ordinary Rees algebra; on overlaps the change multiplies each degree-$k$ term by a unit to its $k$th power, leaving every degree-zero fraction and overlap map unchanged. Consequently there is a global closed immersion $\operatorname{Bl}_{\mathcal J}X\hookrightarrow\mathbb P_X(q^*\mathcal E)=X\times_S\mathbb P_S(\mathcal E)$. Composing with the given embedding of $X$ makes this a closed subscheme of $\mathbb P_S(\mathcal E_0)\times_S\mathbb P_S(\mathcal E)$. [F2, step 1.1, step 3.1, construct, algebra]

5.1 This product has a canonical closed Segre immersion into $\mathbb P_S(\mathcal E_0\otimes\mathcal E)$. Locally choose finite generators of the two modules. For free generators the map is $z_{ij}=x_i y_j$ and its image is cut out by the $2\times2$ minors $z_{ij}z_{kl}-z_{il}z_{kj}$. On the chart $z_{i_0j_0}\ne0$, those equations give $z_{ij}/z_{i_0j_0}=(z_{ij_0}/z_{i_0j_0})(z_{i_0j}/z_{i_0j_0})$, identifying it with the product chart. For modules with relations, quotient by their linear relations as well; in this chart the relations tensored with the unit generators of the opposite factor are exactly the relations for the two separate quotient lines. This identifies the product with a closed subscheme of the projective scheme of the tensor product. The construction glues independently of generators because it sends two quotient lines to their tensor quotient line. The composite embedding from step 4.1 proves the first assertion with $\mathcal E'=\mathcal E_0\otimes\mathcal E$, coherent over the Noetherian $S$. Zero modules give empty projective schemes where required; a zero center has empty blowup, and a unit center has identity blowup. Empty base or empty $X$ gives the same conclusions. All covers, generating lists, overlap exponents and twists used above were finite. [F2, F3, step 1.1, step 4.1, construct, algebra] ∎
