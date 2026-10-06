---
id: lem-handle-trading-concentrates-an-acyclic-simply-connected-presentation-in-two-adjacent-middle-indices
kind: lemma
title: Trading concentrates a simply connected h-cobordism in two adjacent middle indices
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 12
deps:
- def-h-cobordism
- lem-relative-homology-of-an-h-cobordism-vanishes-at-both-ends
- prop-h-cobordisms-admit-adapted-ordered-handle-decompositions
- lem-zero-and-one-handles-can-be-eliminated-in-a-simply-connected-h-cobordism
- lem-duality-eliminates-top-and-cotop-handles
- lem-handle-elimination-by-trading-a-pair
- lem-homology-lemma-realizes-handle-bases-by-isotopy
- lem-modification-lemma-for-embedded-spheres-in-a-handle-presentation
- prop-relative-handle-chain-complex-of-a-cobordism
- def-dual-handle-decomposition
- thm-handle-duality-from-negating-a-morse-function
- def-simply-connected
- def-countable-choice
- lem-belt-sphere-complements-in-low-handle-levels-preserve-the-fundamental-group
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: Wolfgang Lück, A Basic Introduction to Surgery Theory (ICTP lecture notes, 27 October 2004; complete author text)
    url: https://him-lueck.uni-bonn.de/data/ictp.pdf
    locator: Chapter 1, printed pp. 1--22 (§§1.1--1.5); Normal Form Lemma 1.24, printed pp. 16--17
  - title: Andrew Ranicki, Algebraic and Geometric Surgery (Oxford Mathematical Monographs, Oxford University Press 2002; complete electronic copy)
    url: https://math.uchicago.edu/~shmuel/tom-readings/ranicki-intro
    locator: Chapter 8 §§8.1--8.2, printed pp. 147--163 (electronic pp. 154--170); Proposition 8.31
  - title: John Milnor, Lectures on the h-Cobordism Theorem (notes by L. Siebenmann and J. Sondow, Princeton University Press 1965; scanned edition with searchable text layer)
    url: https://www.maths.ed.ac.uk/~v1ranick/surgery/hcobord.pdf
    locator: Introduction and §§1--9, printed pp. 1--113; §8, printed pp. 93--104
verification:
  precheck: pass
---
## Statement

Assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]). Let $(W;M_0,M_1)$ be an
h-cobordism with $\dim W=n+1$, $n\ge5$, $W$ connected and $M_0,M_1$ closed
simply connected ([[def-h-cobordism]], [[def-simply-connected]]). Then for every
integer $k$ with $2\le k\le n-2$ there is a handle decomposition of $W$
relative to $M_0$ whose handles all have index $k$ or $k+1$, with the same
number $r$ of each; the relative handle chain complex of that presentation is
$0\to\mathbb Z^r\xrightarrow{\partial_{k+1}}\mathbb Z^r\to0$, and since
$H_*(W,M_0;\mathbb Z)=0$ the differential $\partial_{k+1}$ is an isomorphism.
No other handles survive, and the presentation can be chosen index-ordered with
all $k$-handles attached at one level and all $(k+1)$-handles at the next
([[prop-relative-handle-chain-complex-of-a-cobordism]]).

## Facts & Assumptions

**Given:** An h-cobordism $(W;M_0,M_1)$ with $\dim W=n+1$, $n\ge5$, $W$ connected, closed simply connected faces, and an integer $k$ with $2\le k\le n-2$; $\mathrm{AC}_\omega$.

[F1] $W$ admits a self-indexed presentation relative to $M_0$ with all $k$-handles at one level before all $(k+1)$-handles ([[prop-h-cobordisms-admit-adapted-ordered-handle-decompositions]]), and admits presentations relative to $M_0$ with no handles of index $0,1$ ([[lem-zero-and-one-handles-can-be-eliminated-in-a-simply-connected-h-cobordism]]) and no handles of index $n,n+1$ ([[lem-duality-eliminates-top-and-cotop-handles]]).

[F2] The relative handle chain complex has $C_j=H_j(W_j,W_{j-1};\mathbb Z)$ free on the $j$-handle cores, differential the triple boundary, and homology $H_j(W,M_0;\mathbb Z)$, which vanishes identically because $(W;M_0,M_1)$ is an h-cobordism ([[prop-relative-handle-chain-complex-of-a-cobordism]], [[lem-relative-homology-of-an-h-cobordism-vanishes-at-both-ends]]).

[F3] The modification construction changes an embedded sphere's class by $\sum_jx_j\partial_{q+1}[\varphi_j]$ and gives an isotopy to the starting sphere one level higher. In particular a modification starting at a trivial embedding remains trivial there; vanishing of a homology class alone is not an embedding-triviality assertion. [[lem-modification-lemma-for-embedded-spheres-in-a-handle-presentation]].

[F4] The corrected homology lemma puts a unit basis class into single-belt-intersection position for $2\le q\le n-3$. At $q=2$ its incoming injection holds here since the incoming face is simply connected. The belt-complement helper constructs the required disk while avoiding every other belt. [[lem-homology-lemma-realizes-handle-bases-by-isotopy]], [[lem-belt-sphere-complements-in-low-handle-levels-preserve-the-fundamental-group]].

[F5] Elimination lemma with $q\le n-2$: a $q$-handle whose belt sphere is met once by a trivial-in-$\partial_1W_{q+1}$ framed sphere can be traded for a $(q+2)$-handle, all other handles unchanged ([[lem-handle-elimination-by-trading-a-pair]]).

[F6] Handle duality: negating the adapted Morse function interchanges the roles of the two faces and converts a $j$-handle of a presentation relative to $M_1$ into an $(n+1-j)$-handle of a presentation relative to $M_0$ ([[thm-handle-duality-from-negating-a-morse-function]], [[def-dual-handle-decomposition]]).

## Proof

1.1 By [F1] take an ordered presentation with indices at least two and at most $n-1$. Each incoming inclusion is a homotopy equivalence and the relative homology vanishes by [F2]. [F1, F2, given]

2.1 Eliminate the indices $q=2,\ldots,k-1$, not the desired surviving index $k$. At each stage $N_q=\partial_1W_q$ is simply connected: the later handles have index at least $q+1\ge3$, so $\pi_1(W_q)\cong\pi_1(W)=1$, and the reversed trace from $N_q$ has only index $n+1-q\ge4$ handles, so $\pi_1(N_q)\cong\pi_1(W_q)$. These are the handle fundamental-group comparisons of the belt-complement helper in [F4]. With no indices below $q$, one has $C_{q-1}=0$ and $\partial_{q+1}$ is onto $C_q$. For a fixed $q$-handle $e$, choose coefficients $y_j$ with $\sum_jy_j\partial_{q+1}[\varphi_j]=[e]$. Start with a trivial framed $q$-sphere of class zero and apply [F3] to obtain $\beta$ of class $[e]$, isotopic to that trivial sphere one level higher. Use the framed version of [F3], starting with the standard trivial frame, so $\beta$ is framed-isotopic to that trivial sphere in the next level. [F2, F3, F4, step 1.1]

3.1 Since $q\le k-1\le n-3$, [F4] applies to $\beta$. Its $q=2$ incoming condition follows from simple connectivity of $M_0$, or equivalently from the h-cobordism fundamental-group isomorphism. Carry the higher attaching embeddings along the resulting ambient isotopy; its induced diffeomorphism of the next level preserves standard framed triviality. A diffeomorphism maps a standard framed disk embedding to another such embedding. By [F5] trade $e$ for one $(q+2)$-handle. Finite repetition eliminates all original indices below $k$. [F3, F4, F5, step 2.1]

4.1 Reverse the triad and perform the same low-index eliminations through dual index $n-k-1$. Every such index is at most $n-3$; the opposite incoming face is simply connected, so the same $q=2$ condition holds. Trading a dual $r$-handle for a dual $(r+2)$-handle introduces original index $n-r-1\ge k$, and thus never recreates an original handle below $k$. This removes all original indices at least $k+2$ while preserving the prior low elimination. The surviving original indices are exactly $k,k+1$, for the full stated $2\le k\le n-2$ range. [F4, F5, F6, step 3.1]

5.1 The surviving relative chain complex is concentrated in degrees $k,k+1$ and has zero homology by [F2]. Its differential is injective and surjective, giving equal finite handle numbers and the stated two-term isomorphism. The normal form retains every advertised index without invoking the unproved arbitrary-sphere flipped endpoint. [F2, step 4.1] ∎
