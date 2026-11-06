---
id: lem-gts-simplicial-module-shuffle-and-symmetric-power-comparison
kind: lemma
title: Shuffle comparison and symmetric powers of simplicial modules
status: published
origin: session
pipeline_run: conformal-field-theory-string-theory-step3-fresh-2026-11-04
domain: mathematics
library: physics
deps:
  - def-axiom-of-choice
  - thm-dold-kan-equivalence-for-simplicial-modules
  - thm-alexander-whitney-and-eilenberg-zilber-are-chain-homotopy-inverses
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  thm-dold-kan-equivalence-for-simplicial-modules: mathematical-premise
  thm-alexander-whitney-and-eilenberg-zilber-are-chain-homotopy-inverses: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Toën and Vezzosi, Homotopical Algebraic Geometry II
      url: https://arxiv.org/pdf/math/0404373
      locator: §2.3.5.1, characteristic-zero normalization and shuffle multiplication; the proof below supplies the module homotopies locally.
verification:
  precheck: pending
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
dependency_level: 0
---

## Statement

Let $k$ be a characteristic-zero field and assume AC. For arbitrary simplicial $k$-modules $X,Y$, the shuffle and Alexander–Whitney maps give natural chain-homotopy equivalences
$$NX\otimes_k NY\simeq N(X\otimes_k Y).$$
The iterated shuffle is associative, unital and symmetric with the Koszul sign. For every simplicial $k$-module $X$ and every $r\ge0$, its $\Sigma_r$-equivariant iteration induces a quasi-isomorphism
$$\operatorname{Sym}^r(NX)\longrightarrow N\operatorname{Sym}^r(X).$$
Normalization is homological in this statement; reindexing gives the nonpositive cohomological version.

## Statement references

[[def-axiom-of-choice]]

[[thm-dold-kan-equivalence-for-simplicial-modules]]

[[thm-alexander-whitney-and-eilenberg-zilber-are-chain-homotopy-inverses]]

## Facts & Assumptions

**Given:** The field and arbitrary simplicial modules.

[F1] [[thm-dold-kan-equivalence-for-simplicial-modules]] supplies the exact normalization functor, its natural splitting into normalized and degenerate chains, and its inverse.

[F2] [[thm-alexander-whitney-and-eilenberg-zilber-are-chain-homotopy-inverses]] fixes the front/back and signed-shuffle conventions on singular chains; the extension to arbitrary simplicial modules is proved below.

[F3] [[def-axiom-of-choice]] permits homogeneous basis and splitting choices over $k$.

## Proof

1.1 On unnormalized chains use the front/back formula $\operatorname{AW}(x\otimes y)=\sum_{p+q=n}d_{p+1}\cdots d_nx\otimes d_0^py$ and the shuffle formula obtained by inserting the complementary degeneracies into $x\in X_p$ and $y\in Y_q$, with the shuffle permutation sign. Every summand is separately linear in $x,y$. The simplicial identities show these are chain maps: internal faces cancel in pairs differing by transposition of adjacent shuffle labels, and the uncancelled endpoint faces are exactly the two tensor differentials. Degenerate inputs go to sums with at least one degenerate factor. The maps therefore induce the asserted normalized maps. [F1, F2, construct]

2.1 Here is an acyclic-model construction of the homotopies, including its linear descent. In degree $n$, unnormalized diagonal chains are represented bilinearly by $k\Delta[n],k\Delta[n]$; tensor chains of bidegree $(p,q)$ are represented by $k\Delta[p],k\Delta[q]$. The target on a diagonal model is the chain complex of $\Delta[p]\times\Delta[q]$, contracted to $(0,0)$ by prepending $(0,0)$ to its two vertex lists. On a tensor model use $c=h_p\otimes1+\iota_p\epsilon_p\otimes h_q$, where $h_p$ prepends vertex $0$, $\epsilon_p$ is augmentation and $\iota_p$ includes vertex $0$; tensor signs are the ordinary chain-complex signs. In either target $\partial c+c\partial=1-\iota\epsilon$. This identity follows by separating the first face of the prepended list from the remaining faces. It applies to zero-augmented cycles also in degree zero. [F1, F2, step 1.1, construct]

3.1 For either pair $u,v$ of composites and identity, start $H_{-1}=0$. On a universal generator $t$ in degree $n$, having defined lower degrees, set $z=(u-v)t-H_{n-1}(\partial t)$ and $\widetilde H_n(t)=c(z)$. Its boundary is $z$: indeed $\partial z=0$ by the lower-degree homotopy identity and $\partial^2=0$, while $\epsilon z=0$ since $u,v$ induce the same augmentation. Extend this formula by evaluating the universal simplices at the actual $x,y$. All evaluated expressions are finite sums of tensors of faces and degeneracies, separately linear in $x,y$, so this defines a natural transformation on arbitrary modules, including their linear relations. This construction does not require the chosen contractions of the models to commute with simplicial maps. Naturality follows from the evaluation prescription on the representable models. [F1, F2, step 2.1, construct]

4.1 The same recursion works on normalized chains using their natural projector $P$ supplied by [F1]. More explicitly, at each degree extend the model formula to unnormalized generators and precompose it with $P$; on the tensor source use $P\otimes P$. The residual $z$ already factors through that projector, since lower homotopies do and the normalized differential commutes with it. Projection in the target then gives $\partial H_n+H_{n-1}\partial=u-v$ on the normalized direct summand. This proves both normalized chain-homotopy identities without assuming the universal contraction descends to the degenerate quotient. [F1, F2, step 3.1, construct]

5.1 Composing shuffles of two blocks indexes both associative composites by the same ordered three-block shuffles with the same signs. Interchanging two blocks multiplies by the graded interchange sign; the zero-degree unit is fixed. Thus the $r$-fold shuffle is $\Sigma_r$-equivariant and a quasi-isomorphism by iteration. For $r=0$ it is the identity on $k$. Tensor products preserve quasi-isomorphisms over a field. Averaging by $1/r!$ makes coinvariants exact, so taking $\Sigma_r$-coinvariants preserves this quasi-isomorphism. Exact normalization commutes with coinvariants and direct sums. This gives the displayed symmetric-power comparison for every $r$, with no boundedness or finite-dimensionality assumption on $X$. [F1, F3, step 4.1, algebra] ∎
