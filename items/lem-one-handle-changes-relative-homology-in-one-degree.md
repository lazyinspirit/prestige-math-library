---
id: lem-one-handle-changes-relative-homology-in-one-degree
kind: lemma
title: "One handle changes relative homology in one degree only"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [thm-one-critical-point-handle-attachment, prop-simultaneous-attachment-at-a-morse-critical-value, cor-relative-homology-of-a-single-handle-pair, lem-relative-homology-of-the-standard-handle-pair, cor-homology-of-good-pairs-is-reduced-homology-of-the-quotient, thm-excision-for-singular-homology, prop-singular-homology-of-a-disjoint-union-is-the-direct-sum, thm-long-exact-sequence-of-a-pair-in-singular-homology, thm-naturality-of-the-long-exact-sequence-of-a-pair, def-relative-homology-connecting-homomorphism-on-cycles, def-relative-singular-homology, def-k-handle-core-cocore-attaching-region-and-belt-sphere, def-attaching-a-smooth-handle-with-corner-rounding, def-closed-sublevel-and-level-set-of-a-smooth-function, def-field, def-countable-choice, thm-regular-interval-diffeomorphism, thm-singular-chain-homotopy-formula]
justified_by: []
aliases: []
landmark: false
proof_strategy: excision-and-good-pairs
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  scraped: []
  references:
    - title: "Liviu Nicolaescu, An Invitation to Morse Theory (2nd ed.), Chapter 2 Section 2.3, printed pp. 46-53 (PDF pp. 56-63)"
      url: "https://www3.nd.edu/~lnicolae/Morse2nd.pdf"
    - title: "Michele Audin and Mihai Damian, Morse Theory and Floer Homology, Part I Chapter 4 Section 4.4, printed pp. 88-91 (PDF pp. 98-100)"
      url: "https://audin.pages.math.unistra.fr/livres/audin-damian-en.pdf"
dependency_level: 0
---

## Statement

Assume $\mathrm{AC}_\omega$ and let $F$ be a field.

(a) Let $N$ be a smooth $n$-manifold with boundary and let
$N'=N\cup_\varphi h^k$ be obtained by attaching a rounded $k$-handle along an
embedding $\varphi:S^{k-1}\times D^{n-k}\to\partial N$
([[def-attaching-a-smooth-handle-with-corner-rounding]],
[[def-k-handle-core-cocore-attaching-region-and-belt-sphere]]). Then
$H_i(N',N;F)=0$ for $i\ne k$ and $H_k(N',N;F)\cong F$; the relative class of
the core disk $D^k\times\{0\}$ is a generator, and the connecting homomorphism
$\delta:H_k(N',N;F)\to H_{k-1}(N;F)$ of the pair carries it to the class of the
attaching sphere $\varphi(S^{k-1}\times\{0\})$ (up to the fixed sign of the
boundary operator).

(b) Let $f$ be smooth on a boundaryless manifold and let $a<b$ be regular
values with $f^{-1}([a,b])$ compact
([[def-closed-sublevel-and-level-set-of-a-smooth-function]]). If every critical
point in $f^{-1}([a,b])$ is nondegenerate and all of them have one common value
$c\in(a,b)$, then for every $i$
$$\dim_F H_i(M^b,M^a;F)=\#\{p\in f^{-1}([a,b]):\operatorname{ind}(p)=i\},$$
and the relative classes of the core disks of the attached handles form a
basis.

## Facts & Assumptions

**Given:** A field $F$, an ambient smooth situation as in (a) or (b), and the coefficients $F$ in singular homology.

[F1] Attaching a $k$-handle to a smooth $n$-manifold $X$ with boundary means gluing $D^k\times D^{n-k}$ along the attaching region $S^{k-1}\times D^{n-k}$ by a smooth embedding that extends over a neighbourhood of the disk factor, with the framing part of the data; the result $N'=N\cup_\varphi h^k$ is a smooth manifold with boundary ([[def-attaching-a-smooth-handle-with-corner-rounding]], [[def-k-handle-core-cocore-attaching-region-and-belt-sphere]]).

[F2] If $A$ is a nonempty closed subspace of $X$ that is a deformation retract of an open neighbourhood, then the quotient map gives $H_n(X,A;G)\cong\widetilde H_n(X/A;G)$ for every $n$ ([[cor-homology-of-good-pairs-is-reduced-homology-of-the-quotient]]).

[F3] The standard handle pair has $H_i(D^k\times D^{n-k},S^{k-1}\times D^{n-k};G)\cong G$ for $i=k$ and zero otherwise, and the pair contracts the second disk factor by $(u,v)\mapsto(u,(1-t)v)$ with projection to and inclusion of $(D^k,S^{k-1})$ as inverse maps up to homotopy of pairs ([[lem-relative-homology-of-the-standard-handle-pair]]).

[F6] Under the hypotheses of (b) with critical points $p_1,\dots,p_m$ at one value, $M^b$ is obtained from $M^a$, up to diffeomorphism and corner rounding, by attaching disjoint handles of indices $\operatorname{ind}(p_j)$; if $m=0$ no handles are attached and the regular band conclusion applies ([[prop-simultaneous-attachment-at-a-morse-critical-value]]).

[F7] For a disjoint union $X=\bigsqcup_\alpha X_\alpha$, $H_n(X;G)\cong\bigoplus_\alpha H_n(X_\alpha;G)$ for every $n$; the proof reads the singular chain complex of the disjoint union as the direct sum of the complexes of the pieces ([[prop-singular-homology-of-a-disjoint-union-is-the-direct-sum]]).

[F8] Excision applies when the closure of the excised set lies in the interior of the relative subspace ([[thm-excision-for-singular-homology]]). Homotopies of pairs induce equal homology maps: the prism operator preserves subspace chains and therefore descends to quotient chains ([[thm-singular-chain-homotopy-formula]]). Regular compact bands are normalized-flow products ([[thm-regular-interval-diffeomorphism]]).

[L1] The connector of a pair sequence is fixed on cycles by $\delta[c]=[\partial c]$ for a relative cycle $c$ with $\partial c\in C_{n-1}(A;G)$ ([[def-relative-homology-connecting-homomorphism-on-cycles]], [[def-relative-singular-homology]]).

## Proof

**Proof technique:** excision-and-good-pairs.

1.1 Work first with the collared gluing model $Y=N\cup_A H$, $H=D^k\times D^{n-k}$, $A=S^{k-1}\times D^{n-k}$; smoothing transports this model and its core. If $k=0$, then $A=\varnothing$ and $Y=N\sqcup D^n$. The relative chains are exactly those of the disk by the simplex-by-component splitting [F7], so [F3] gives one copy of $F$ in degree zero, represented by its centre, and zero otherwise. Its connector has zero target in degree $-1$. [F1, F3, F7, given]

2.1 For $k>0$, $N$ and $A$ are nonempty. The open set $V=N\cup_A\{(x,y)\in H:|x|>1/2\}$ contains all of $N$ and strongly deformation retracts onto it: fix $N$ and send $x$ to $((1-s)+s/|x|)x$ in the handle collar. This agrees with the identity at $|x|=1$ and remains in $V$. Thus $(Y,N)$ is a good pair. The same radial homotopy makes $(H,A)$ a good pair. [F1, F2, step 1.1, construct]

3.1 By the pushout quotient topology, collapsing $N$ in $Y=N\cup_A H$ gives $Y/N\cong H/A$: in either quotient all of $N$ and $A$ become one point and the rest of the handle is unchanged. This is a quotient-topology identification, not merely a bijection on complements. The inclusion of pairs $(H,A)\to(Y,N)$ induces this homeomorphism on quotients. By the natural quotient isomorphisms [F2], it therefore induces isomorphisms $H_i(H,A;F)\to H_i(Y,N;F)$. [F2, step 2.1]

4.1 The standard-pair result [F3] computes these groups and identifies the core pair $(D^k,S^{k-1})$ with $(H,A)$ by projection and inclusion. Orient the core disk and represent its relative orientation class by a finite singular fundamental chain (for example map a triangulated disk into the core). It maps to a generator of $H_k(Y,N;F)$. Reversing that orientation reverses the generator; no ambient orientation is required. [F3, step 1.1, step 3.1]

4.2 For (b), use [F6] to obtain the disjoint handles. To compare pairs, retain a pushed-in lower sublevel below the support of the handle construction: all changes take place in boundary collars and the disjoint critical charts; collar compression retracts both compared lower spaces to this common copy, as in the lower-collar comparison of [[thm-one-critical-point-handle-attachment]]. The same compression works simultaneously for the finitely many disjoint charts, and [F8] makes the resulting pair homotopies induce homology isomorphisms. Split off the zero-handles, which are disjoint disks, by [F7]. For the remaining positive-index handles the open collars of step 2.1 make both pairs $(Y,N)$ and $(\bigsqcup H_j,\bigsqcup A_j)$ good; their quotients are homeomorphic by the pushout description of step 3.1. Their relative homology is therefore the same by [F2], while the latter relative chain complex splits by component as in [F7]. Hence $H_i(M^b,M^a;F)\cong\bigoplus_j H_i(H_j,A_j;F)$, including the zero-handle summands. If there are no positive handles the direct disk splitting alone suffices. [F2, F6, F7, F8, step 1.1, step 2.1, step 3.1]

5.1 The boundary of the oriented core fundamental chain is its oriented boundary sphere in $N$; for $k=1$ this means the terminal point minus the initial point. It is a relative cycle, and the connector formula [L1] sends its relative class to this boundary class. For $k=0$ the boundary is empty and the connector is zero, as already checked. [L1, step 4.1, algebra]

6.1 Each handle summand is $F$ in its index and zero elsewhere, so the direct sum of step 4.2 has dimension equal to the number of critical points of that index, with their oriented core classes as a basis. If there are no critical points, [F8] identifies the band with a product; compressing that product onto the lower face and fixing the lower sublevel gives a deformation retraction, hence zero relative homology. Inclusion of the lower sublevel is a homotopy equivalence, rather than a diffeomorphism onto the upper space. [F3, F8, step 4.1, step 4.2, algebra] ∎

## Remarks

- **No orientation.** The computation uses only the good-pair quotient and the standard handle pair, so it holds for arbitrary coefficients and requires no orientation of $N$ or of the attaching spheres; this is the form used in the handle chain complex of the Morse inequalities and in the cellular comparison.
- **The choice assumption.** $\mathrm{AC}_\omega$ enters only through the handle-attachment and corner-rounding suppliers [F1], [F6], [F8]; the homology computation itself is choice free.
- **Why the pairing with the belt sphere is not asserted here.** The identification of the connecting map with an intersection number requires the intersection theory of the middle level and is proved separately.
