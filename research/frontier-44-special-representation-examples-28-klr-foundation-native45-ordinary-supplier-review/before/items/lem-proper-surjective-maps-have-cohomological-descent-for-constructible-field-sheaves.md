---
id: lem-proper-surjective-maps-have-cohomological-descent-for-constructible-field-sheaves
kind: lemma
title: "Proper surjections have cohomological descent for constructible field sheaves"
status: draft
origin: session
deps: [def-axiom-of-choice, thm-analytic-sheaf-six-operations-have-coherent-base-change-projection-and-trace, thm-constructible-six-functors-proper-base-change-and-verdier-duality, lem-locally-split-cech-nerves-give-derived-cartesian-sheaf-descent, thm-bounded-filtered-complex-spectral-sequence-abuts-to-filtered-homology]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Dugger, Hollander and Isaksen, Hypercovers and simplicial presheaves"
      url: "https://arxiv.org/abs/math/0205027"
    - title: "The Stacks Project, Hypercoverings"
      url: "https://stacks.math.columbia.edu/download/hypercovering.pdf"
---

## Statement

Assume the Axiom of Choice inherited from the supplied injective-resolution six-functor construction. Let $f:Y\to X$ be a proper surjective morphism of finite-type complex algebraic varieties, and let $F\in D^b_c(X;k)$ for a field $k$. Write $Y_p=Y\times_X\cdots\times_XY$ with $p+1$ factors, $f_p:Y_p\to X$, and $F_p=f_p^*F$. In the analytic topology the natural augmented derived Čech map is a quasi-isomorphism:
$$F\xrightarrow{\sim}\operatorname{Tot}_{p\geq0}Rf_{p*}F_p.$$
Here totalization is the normalized or unnormalized alternating-face total supplied by the simplicial-derived construction. There is one fixed lower cochain bound; consequently its diagonals are finite in every degree. The claim commutes with arbitrary algebraic base change and coefficient morphisms. In particular $R\Gamma(X,F)\simeq\operatorname{Tot}_pR\Gamma(Y_p,F_p)$. Individual fibers of $f$ need not be cohomologically acyclic, connected, or smooth.

## Facts & Assumptions

**Given:** $f,F,k$ and the supplied construction inputs in the Statement.

[F1] [[thm-analytic-sheaf-six-operations-have-coherent-base-change-projection-and-trace]] and [[thm-constructible-six-functors-proper-base-change-and-verdier-duality]] supply proper base change, its naturality for all Čech faces/degeneracies, exact inverse image, and restriction of $f_p^*F$ to the geometric fiber as the constant pullback of $F_x$.

[F2] [[lem-locally-split-cech-nerves-give-derived-cartesian-sheaf-descent]] supplies the general functorial simplicial-derived total model and its finite-diagonal spectral sequence; its local-section descent conclusion is not used as proper descent.

[F3] [[thm-bounded-filtered-complex-spectral-sequence-abuts-to-filtered-homology]] supplies convergence for degreewise finite filtrations, with cohomological reindexing.

[A1] [[def-axiom-of-choice]] is inherited only by the supplied resolution construction; selecting one point for the stalk argument requires only a single nonempty-set selection, not a simultaneously chosen family of sections.

## Proof

1.1 Choose a lower bound $a$ for the cochain model of $F$. Exact pullback preserves it, and right-derived pushforward produces a functorial double model in degrees $p\geq0,q\geq a$. In total degree $m$ there are only $0\leq p\leq m-a$ terms. Take the cone of the augmented map and filter by $p$; it is still bounded below after placing the augmentation in column $p=-1$. Stalks commute with its finite pieces. Thus to prove its acyclicity it suffices, by the finite-filtration spectral sequence of [F3], to prove exactness of every augmented horizontal stalk row after taking internal cohomology. [F1, F2, F3, given]

2.1 Fix $x\in X$ and put $K=F_x$. Surjectivity gives a nonempty proper fiber $S=Y_x$. Proper base change identifies the augmented horizontal row in internal degree $q$ with $H^q(K)\to H^q(S,K)\to H^q(S^2,K)\to\cdots$, where $K$ on each $S^{p+1}$ means its constant derived pullback from the point. These identifications intertwine all deletion and repetition maps by [F1]. Pick one point $y\in S$. For $p\geq1$ let $j_p:S^p\to S^{p+1}$ insert $y$ as first coordinate, and let $j_0:\mathrm{pt}\to S$ be this point. Pullback gives maps $h_p=j_p^*:H^q(S^{p+1},K)\to H^q(S^p,K)$, with $h_0$ landing in $H^q(K)$. No assertion that any positive cohomology group of $S$ vanishes has been made. [F1, A1, step 1.1]

3.1 If $d_i:S^{p+2}\to S^{p+1}$ deletes coordinate $i$, the insertion identities are $d_0j_{p+1}=\operatorname{id}$ and $d_ij_{p+1}=j_pd_{i-1}$ for $i>0$. On the augmented row put $\delta_p=\sum_{i=0}^{p+1}(-1)^id_i^*$ and let $\delta_{-1}:H^q(K)\to H^q(S,K)$ be constant pullback. The displayed identities give $h_{p+1}\delta_p+\delta_{p-1}h_p=\operatorname{id}$ for every $p\geq0$, and $h_0\delta_{-1}=\operatorname{id}$. Indeed the $i=0$ term is the identity and the terms $i>0$ are precisely the negatives of $\delta_{p-1}h_p$. Thus every horizontal stalk row is actually contracted, including its augmentation and every internal degree $q$. This uses functorial pullback on cohomology, not an unsupported acyclicity assumption about individual fibers or a global section of $f$. [F1, step 2.1, algebra]

4.1 The horizontal spectral sequence of the augmented cone now has zero next page at every stalk by step 3.1. Its filtration is finite in each total degree by step 1.1, so [F3] gives zero stalk cohomology of the cone. A complex of sheaves with all cohomology stalks zero is acyclic, proving the asserted quasi-isomorphism. All algebraic base changes of $f$ remain proper surjective; the same base-change identifications prove the pulled-back assertion without choosing compatible points. Naturality of the augmentation follows from its units and face maps; the selected point is used only to demonstrate stalk exactness. Applying derived global sections to the supplied finite-diagonal total model gives the global statement. AC is inherited exactly through [A1]. [F1, F2, F3, A1, step 1.1, step 3.1] ∎
