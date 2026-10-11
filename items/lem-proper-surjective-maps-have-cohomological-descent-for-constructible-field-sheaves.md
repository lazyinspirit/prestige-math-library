---
id: lem-proper-surjective-maps-have-cohomological-descent-for-constructible-field-sheaves
kind: lemma
title: "Proper surjections have cohomological descent for constructible field sheaves"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 19
deps: [def-axiom-of-choice, thm-analytic-sheaf-six-operations-have-coherent-base-change-projection-and-trace, lem-analytic-constructible-sheaves-admit-coherent-six-operations, lem-locally-split-cech-nerves-give-derived-cartesian-sheaf-descent, thm-bounded-filtered-complex-spectral-sequence-abuts-to-filtered-homology, def-algebraically-constructible-complex-of-analytic-field-sheaves, def-analytic-topology-and-finite-smooth-algebraic-stratifications]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "D. Dugger, S. Hollander, D. C. Isaksen, Hypercovers and simplicial presheaves, Mathematical Proceedings of the Cambridge Philosophical Society 136 (2004), complete arXiv full text; Appendix A read at the cited pages."
      url: "https://arxiv.org/pdf/math/0205027"
    - title: "The Stacks Project, Hypercoverings (Chapter 0DEG), complete PDF; the homological-descent lemmas are read at the cited tags and pages."
      url: "https://stacks.math.columbia.edu/download/hypercovering.pdf"
---


## Statement

Assume the Axiom of Choice inherited from the supplied injective-resolution six-functor construction. Let $f:Y\to X$ be a proper surjective morphism of finite-type complex algebraic varieties, and let $F\in D^b_c(X;k)$ for a field $k$. Write $Y_p=Y\times_X\cdots\times_XY$ with $p+1$ factors, $f_p:Y_p\to X$, and $F_p=f_p^*F$. In the analytic topology of [[def-analytic-topology-and-finite-smooth-algebraic-stratifications]] the natural augmented derived Cech map is a quasi-isomorphism:
$$F\xrightarrow{\sim}\operatorname{Tot}_{p\geq0}Rf_{p*}F_p.$$
Here totalization is the normalized or unnormalized alternating-face total supplied by the simplicial-derived construction. There is one fixed lower cochain bound; consequently its diagonals are finite in every degree. The claim commutes with arbitrary algebraic base change and coefficient morphisms. In particular $R\Gamma(X,F)\simeq\operatorname{Tot}_pR\Gamma(Y_p,F_p)$. Individual fibers of $f$ need not be cohomologically acyclic, connected, or smooth.

## Facts & Assumptions

**Given:** $f$, $F$, $k$ and the supplied construction inputs of the Statement; $F$ lies in the bounded algebraically constructible category of [[def-algebraically-constructible-complex-of-analytic-field-sheaves]]; the Axiom of Choice [[def-axiom-of-choice]] is assumed exactly as inherited from the supplied injective-resolution constructions.

[F1] [[thm-analytic-sheaf-six-operations-have-coherent-base-change-projection-and-trace]] supplies the ordinary analytic proper base-change map, its naturality for all Cech faces and degeneracies, exact inverse image, composition of derived right adjoints, and the identification of $f_p^*F$ restricted to a geometric fiber with the constant pullback of $F_x$. [[lem-analytic-constructible-sheaves-admit-coherent-six-operations]] supplies restriction of these operations to bounded algebraically constructible complexes over an arbitrary field, with each pulled coefficient again bounded below.

[F2] [[lem-locally-split-cech-nerves-give-derived-cartesian-sheaf-descent]] supplies the general functorial simplicial-derived total model, its finite-diagonal spectral sequence and uniform internal lower bound; its local-section descent conclusion is not used as proper descent.

[F3] [[thm-bounded-filtered-complex-spectral-sequence-abuts-to-filtered-homology]] supplies convergence of the spectral sequence for a filtration that is finite in each degree, with cohomological reindexing.

[A1] [[def-axiom-of-choice]] is inherited only by the supplied resolution construction; selecting one point for the stalk argument requires only a single nonempty-set selection, not a simultaneously chosen family of sections.

## Proof

**Proof technique:** direct.

1.1 Bounded strict model and finite diagonals. Choose a cochain lower bound $a$ with $F$ represented by a strict complex vanishing in degrees $q<a$, possible because $F$ is cohomologically bounded; by [F1] exact inverse image preserves vanishing there, so the same $a$ bounds every $F_p$, and right-derived pushforward produces a functorial double model in degrees $p\geq0$, $q\geq a$. In total degree $m$ only $0\leq p\leq m-a$ occurs, so every diagonal is finite and [F2]'s strict total model may be used with either totalization. Take the cone of the augmented map $F\to\operatorname{Tot}_pRf_{p*}F_p$, place the augmentation in column $p=-1$, and filter by $p$; each total degree of the cone involves only finitely many columns. At a point $x\in X$ the stalk of the cone is the cone of the stalk map, and because the stalk functor is exact and commutes with the finite column sums, this stalk carries the induced finite filtration, whose first page in internal degree $q$ is the augmented horizontal row of $H^q$ of the stalk complexes. [F1, F2, given]

1.2 The stalk row and one chosen point. Fix $x\in X$ and put $K=F_x$, a complex of $k$-vector spaces with $H^q(K)=H^q(F)_x$; surjectivity of $f$ makes the fiber $S=Y_x$ nonempty. By the proper base change and fiber-pullback clauses of [F1], the stalk at $x$ of $Rf_{p*}F_p$ is $R\Gamma(S^{p+1},K)$ with $K$ the constant derived pullback, and these identifications are natural for all face and degeneracy maps, so the first page of the stalk row in internal degree $q$ is
$$H^q(K)\xrightarrow{\delta_{-1}}H^q(S,K)\xrightarrow{\delta_0}H^q(S^2,K)\xrightarrow{\delta_1}\cdots,$$
where $\delta_p$ is the alternating sum of the pullbacks along the $(p+2)$ coordinate-deletion maps $d_i:S^{p+2}\to S^{p+1}$. Choose one point $y\in S$; no assertion that any positive cohomology group of $S$ vanishes, or that $S$ is connected or smooth, is made or used. [F1, A1, step 1.1]

2.1 Explicit contraction of every augmented row. For $r\geq0$ let $\mathrm{ins}_r:S^r\to S^{r+1}$ insert $y$ as first coordinate, with $S^0=\mathrm{pt}$; so $\mathrm{ins}_0$ is the point $y$ itself. The deletion and insertion maps satisfy $d_0\,\mathrm{ins}_{r+1}=\mathrm{id}$ and $d_i\,\mathrm{ins}_{r+1}=\mathrm{ins}_r\,d_{i-1}$ for $i>0$. Put $h_{p+1}:=\mathrm{ins}_{p+1}^*:H^q(S^{p+2},K)\to H^q(S^{p+1},K)$ and $h_0:=\mathrm{ins}_0^*:H^q(S,K)\to H^q(K)$, with $\delta_{-1}$ the constant pullback of the projection $S\to\mathrm{pt}$. Applying the two identities termwise gives $h_{p+1}\delta_p+\delta_{p-1}h_p=\mathrm{id}$ for every $p\geq0$: the $i=0$ term of $h_{p+1}\delta_p$ is the identity, and the terms $i>0$ are the negatives of $\delta_{p-1}h_p$; moreover $h_0\delta_{-1}=\mathrm{id}$, because the projection followed by the chosen point is the identity of $\mathrm{pt}$. Hence every augmented horizontal row is contractible, in particular exact, in every internal degree $q$, using only functorial pullback on cohomology. [step 1.2, algebra]

3.1 Conclusion and naturality. By step 2.1 the next page of the spectral sequence of the stalk cone vanishes at every stalk, and by step 1.1 its filtration is finite in each total degree, so [F3] identifies the associated graded of the stalk cohomology with zero in every degree; the stalk of the cone at $x$ is therefore acyclic, for every $x\in X$. A complex of sheaves whose stalks are all acyclic has zero cohomology sheaves, hence is acyclic; this proves the asserted quasi-isomorphism $F\xrightarrow{\sim}\operatorname{Tot}_{p\geq0}Rf_{p*}F_p$. All algebraic base changes of $f$ remain proper surjective, and the identifications of steps 1.2-3.1 are pullbacks of one another by the Cartesian-pasting naturality of [F1], so the pulled-back assertion follows without choosing compatible points; coefficient morphisms act componentwise by the same naturality. For the global statement use [F2]’s simplicial injective model: its levelwise injectives push forward to injectives, since inverse image is exact and left adjoint to direct image. The total is a bounded-below complex of injectives, because each total degree is a finite sum. Thus global sections compute its derived global sections termwise; derived composition in [F1] identifies the columns with $R\Gamma(Y_p,F_p)$, giving $R\Gamma(X,F)\simeq\operatorname{Tot}_pR\Gamma(Y_p,F_p)$. The Axiom of Choice is inherited exactly through [A1]. [F1, F3, A1, step 1.1, step 2.1] ∎
