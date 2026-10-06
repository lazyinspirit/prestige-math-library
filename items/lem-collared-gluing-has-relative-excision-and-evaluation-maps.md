---
id: lem-collared-gluing-has-relative-excision-and-evaluation-maps
kind: lemma
title: "Collared gluing has relative excision and evaluation maps"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-collar-neighborhood-theorem, lem-collar-gluing-and-corner-smoothing-give-transitivity, thm-excision-for-singular-cohomology, thm-excision-for-singular-homology, thm-singular-chain-homotopy-formula, thm-homotopic-maps-induce-equal-maps-in-singular-cohomology, def-relative-singular-cochain-complex, def-relative-singular-homology, def-relative-fundamental-class-and-boundary-orientation, lem-a-collar-identifies-boundary-local-homology-with-the-pair-fundamental-class, lem-relative-kronecker-evaluation-is-well-defined-and-natural, def-relative-cup-product, prop-relative-cup-products-are-natural-and-compatible-with-connectors, def-countable-choice]
justified_by: []
aliases: []
landmark: false
dependency_level: 1
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  scraped: []
  references:
    - title: "John Milnor, Lectures on the h-Cobordism Theorem, section 9, printed pp. 109-110"
      url: "https://www.maths.ed.ac.uk/~v1ranick/surgery/hcobord.pdf"
      locator: "collar neighbourhoods of a boundary and gluing along a boundary"
    - title: "Allen Hatcher, Algebraic Topology, Cambridge University Press 2002 (complete book)"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
      locator: "Section 2.2, excision for singular theory, printed pp. 118-124; Section 3.3, evaluation and relative products"
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $W$ and $W'$ be compact oriented smooth
eight-manifolds glued along an orientation-preserving identification of their
common boundary $M$, and let $N=W\cup_M(-W')$ be the resulting closed oriented
eight-manifold. Then there are natural excision isomorphisms
$$r_W:H^*(N,V;R)\xrightarrow{\ \sim\ }H^*(W,M;R),\qquad r_{W'}:H^*(N,U;R)\xrightarrow{\ \sim\ }H^*(W',M;R)$$
for the collar neighbourhoods $U,V$ displayed below, together with the
corresponding isomorphisms in relative homology; and under these maps the
fundamental class $[N]$ restricts to $[W,M]$ on the first side and to
$-[W',M]$ on the second, compatibly with Kronecker evaluation and with the
relative cup products.

## Facts & Assumptions

**Given:** Compact oriented smooth eight-manifolds $W,W'$ with a common oriented boundary $M$, the orientation-preserving boundary identification, and $N=W\cup_M(-W')$.

[A1] Countable choice $\mathrm{AC}_\omega$ is assumed ([[def-countable-choice]]).

[L1] A compact smooth manifold with boundary has a collar neighbourhood of its boundary, and the identification of the two boundary collars glues the two smooth structures into a smooth structure on $N$ whose seam is interior ([[thm-collar-neighborhood-theorem]], [[lem-collar-gluing-and-corner-smoothing-give-transitivity]]).

[L2] Excision: if $\overline Z\subseteq\operatorname{int}_X A$, then $H^n(X,A;G)\cong H^n(X\setminus Z,A\setminus Z;G)$ and $H_n(X\setminus Z,A\setminus Z;G)\cong H_n(X,A;G)$ ([[thm-excision-for-singular-cohomology]], [[thm-excision-for-singular-homology]]).

[L3] Homotopic maps induce equal maps in singular cohomology, via the singular chain homotopy formula ([[thm-homotopic-maps-induce-equal-maps-in-singular-cohomology]], [[thm-singular-chain-homotopy-formula]]).

[L4] Relative chains and cochains, their boundary and coboundary, are those of [[def-relative-singular-homology]] and [[def-relative-singular-cochain-complex]].

[L5] The relative fundamental class $[M_0,A]$ of a compact oriented manifold with boundary is characterized by its local restrictions and is compatible with boundary orientations ([[def-relative-fundamental-class-and-boundary-orientation]], [[lem-a-collar-identifies-boundary-local-homology-with-the-pair-fundamental-class]]).

[L6] Relative Kronecker evaluation and the relative cup products are well defined and natural ([[lem-relative-kronecker-evaluation-is-well-defined-and-natural]], [[def-relative-cup-product]], [[prop-relative-cup-products-are-natural-and-compatible-with-connectors]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] choose a bicollar $M\times(-2a,2a)$ of the seam, with $W$ on the negative side and $W'$ on the positive side, and set $U=\operatorname{int}W\cup M\times(-2a,a)$ and $V=\operatorname{int}W'\cup M\times(-a,2a)$; then $U,V$ are open in $N$, they cover $N$, and $U\cap V=M\times(-a,a)$. [L1, A1, given]

2.1 The collar-height map that sends $t\ge-a$ to zero and fixes $t\le-2a$, with monotone interpolation and the identity outside the collar, defines maps of pairs $(U,U\cap V)\to(W,M)$ and $(W,M)\to(U,U\cap V)$ that are inverse up to homotopy of pairs, by [L3] applied to the linear interpolation with the identity; hence the inclusion $(W,M)\to(U,U\cap V)$ is an equivalence of pairs, and the same construction on the other side gives $(W',M)\to(V,U\cap V)$. [step 1.1, L1, L3]

3.1 Excision applies with $X=N$, $A=V$ and $Z=N\setminus U$: the set $Z$ is closed and contained in the open $V$, so by [L2] restriction gives isomorphisms $H^*(N,V;R)\to H^*(U,U\cap V;R)$ and, with the other cover, $H^*(N,U;R)\to H^*(V,U\cap V;R)$; composing with step 2.1 yields the isomorphisms $r_W:H^*(N,V;R)\to H^*(W,M;R)$ and $r_{W'}:H^*(N,U;R)\to H^*(W',M;R)$, and the same argument with [L2]'s homology clause gives the corresponding relative homology isomorphisms. [step 2.1, L2, L4]

4.1 Naturality of the relative product under the maps of step 3.1 gives, for relative classes $a,b$ on $(W,M)$ represented through the inverse $E_W=r_W^{-1}$, the identity $r_W(E_W(a)\smile E_W(b))=a\smile b$, because the restriction maps preserve the quotient-cochain front/back products by [L6]. [step 3.1, L6]

5.1 The image of $[N]$ under $H_8(N)\to H_8(N,V)$ is $[W,M]$: at every interior point of $W$ its local restriction is the prescribed orientation generator of $W$, and excision together with the collar homotopies of step 2.1 preserves that generator, so [L5]'s uniqueness identifies the class; on the second side the ambient orientation of $N$ is the reverse of that of $W'$, hence the image is $-[W',M]$. [step 3.1, step 4.1, L5]

6.1 Consequently, for $\eta\in H^8(N,V;R)$, naturality of Kronecker evaluation [L6] gives $\langle\eta,[N]\rangle=\langle r_W\eta,[W,M]\rangle$, and with the other cover the analogous identity holds with the negative sign on $-[W',M]$. [step 5.1, L6]

7.1 Components of the fillings that are closed or lie entirely on one side are treated by the same argument with the pair equal to the absolute pair; the comparison is componentwise and adds over the finitely many components. [step 6.1, L5]

8.1 Therefore the stated excision isomorphisms exist, the fundamental class restricts as asserted on the two sides, and the comparisons are compatible with relative products and Kronecker evaluation. [step 7.1] ∎
