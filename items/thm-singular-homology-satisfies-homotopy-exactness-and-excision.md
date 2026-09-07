---
id: "thm-singular-homology-satisfies-homotopy-exactness-and-excision"
kind: "theorem"
title: "Singular homology satisfies homotopy exactness and excision"
deps: ["def-unreduced-homology-theory-on-cw-pairs", "cor-homotopic-maps-induce-the-same-map-on-singular-homology", "thm-long-exact-sequence-of-a-pair-in-singular-homology", "thm-naturality-of-the-long-exact-sequence-of-a-pair", "thm-excision-for-singular-homology", "prop-relative-cw-inclusions-are-cofibrations"]
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Miller, Algebraic Topology I lecture notes, Definition 11.1 and ensuing verification, pp.25–26"
      url: "https://ocw.mit.edu/courses/18-905-algebraic-topology-i-fall-2016/64c56d8bcc2967c1d289a61c959f3095_MIT18_905F16_lec11.pdf"
      locator: "Definition 11.1 and ensuing verification, pp.25–26"
    - title: "Hatcher, Algebraic Topology, Axioms for Homology, pp.160–162"
      url: "https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf"
      locator: "Axioms for Homology, pp.160–162"
status: published
origin: "pipeline"
proof_strategy: "Package published proofs; obtain subcomplex excision by CW collars/mapping cylinders and the open excision theorem, spelling out the neighbourhood replacement. Pair homotopy invariance also follows from absolute invariance and the natural pair LES."
---

## Statement

For every fixed abelian group $G$, singular homology $H_n(-,-;G)$, extended by zero in negative degrees, satisfies homotopy invariance, pair exactness, naturality of the connecting maps, and CW excision in [[def-unreduced-homology-theory-on-cw-pairs]].

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement above.

[F1] A **CW pair** is $(X,A)$ with $A$ a CW subcomplex of $X$, as in def-skeleta-cw-subcomplex-and-relative-cw-complex. Morphisms are all continuous maps of pairs, not just cellular maps. An **ordinary unreduced homology theory** assigns covariant functors $h_n$ from CW pairs to abelian groups, for every $n\in\mathbb Z$, and natural homomorphisms $\partial:h_n(X,A)\to h_{n-1}(A)$, where $h_n(X)=h_n(X,\varnothing)$, satisfying: - Homotopic maps of pairs induce equal homomorphisms. - The inclusion maps and $\partial$ form an exact sequence $\cdots\to h_n(A)\to h_n(X)\to h_n(X,A)\to h_{n-1}(A)\to\cdots$. - For CW subcomplexes $U,V$ of $X=U\cup V$, inclusion induces $h_n(U,U\cap V)\cong h_n(X,V)$. - For a point $*$, $h_n(*)=0$ when $n\ne0$; write $G=h_0(*)$. - For every set-indexed family of CW pairs, including the empty family, the inclusions induce $\bigoplus_\alpha h_n(X_\alpha,A_\alpha)\cong h_n(\bigsqcup_\alpha X_\alpha,\bigsqcup_\alpha A_\alpha)$. Thus $h_n(\varnothing)=0$. No finite-dimensionality or finite-cell restriction is implicit. ([[def-unreduced-homology-theory-on-cw-pairs]])

[F2] If $f,g:X\to Y$ are homotopic continuous maps, then for every $n\geq 0$ and every abelian group $G$ the induced homomorphisms on singular homology agree: $$H_n(f_\#)=H_n(g_\#):H_n^{\mathrm{sing}}(X;G)\to H_n^{\mathrm{sing}}(Y;G).$$ ([[cor-homotopic-maps-induce-the-same-map-on-singular-homology]])

[F3] For $A\subseteq X$ there is an exact sequence $$\cdots\to H_n(A;G)\to H_n(X;G)\to H_n(X,A;G)\xrightarrow{\delta}H_{n-1}(A;G)\to H_{n-1}(X;G)\to\cdots.$$ ([[thm-long-exact-sequence-of-a-pair-in-singular-homology]])

[F4] A map of pairs $f:(X,A)\to(Y,B)$ induces a commuting morphism from the long exact sequence of $(X,A)$ to that of $(Y,B)$, including the connecting maps. ([[thm-naturality-of-the-long-exact-sequence-of-a-pair]])

[F5] If $Z\subseteq X$ and $\overline Z\subseteq\operatorname{int}_X(A)$, then inclusion $(X-Z,A-Z)\to(X,A)$ induces isomorphisms $H_n(X-Z,A-Z;G)\cong H_n(X,A;G)$ for every $n$. ([[thm-excision-for-singular-homology]])

[F6] If $(X,A)$ is a relative CW complex, then $A\hookrightarrow X$ has the homotopy extension property; in particular it is a cofibration. ([[prop-relative-cw-inclusions-are-cofibrations]])

## Proof

1.1 The singular pair sequence is exact and its connecting maps commute with every map of pairs, by F3 and F4. These assertions hold for arbitrary subspaces and hence for CW pairs. [F3, F4]

1.2 For a homotopy of pairs, the prism chain homotopy on $C_*(X;G)$ preserves $C_*(A;G)$: every prism simplex over a simplex in $A$ stays in the target subspace. It therefore descends to relative chain quotients. The identity $f_\#-g_\#=\partial P+P\partial$ gives relative homotopy invariance, with the same absolute conclusion as F2. Negative degrees are zero. [F2, given]

1.3 Put $W=U\cap V$ and form $D=U\cup_W(W\times[0,1])\cup_W V$, attaching $W\times\{0\}$ to $U$ and $W\times\{1\}$ to $V$. Its collapse $c:D\to U\cup V$ is a homotopy equivalence relative to $V$. Here is the cofibration argument: write $D=(U\cup_W W\times[0,1])\cup_W V$. The mapping cylinder of the inclusion $W\hookrightarrow U$ retracts onto $U$, and the HEP for $(U,W)$ extends the path of $W$ from the zero end to the one end to a map $U\times[0,1]\to U\cup_W W\times[0,1]$. The resulting end map fixes the attaching copy of $W$ at the one end. The cylinder collapse and this end map are inverse up to homotopies fixed on that attaching copy, by contracting the traversed interval followed by its reverse. The HEP for the cylinder pair extends this contraction. Gluing $V$ by its identity gives the claimed relative equivalence. This uses F6 for the two CW inclusions. [F6]

2.1 In $D$ set $O=U\cup (W\times[0,2/3))$ and $N=V\cup(W\times(1/3,1])$. They are open and cover $D$. The closure of $D\setminus O$ is contained in $N$. Excision therefore identifies $H_n(O,O\cap N;G)$ with $H_n(D,N;G)$. Retraction of $N$ to $V$ and the pair exact sequence identify the latter with $H_n(D,V;G)$. The collapse $O\to U$ restricts on $O\cap N=W\times(1/3,2/3)$ to projection onto $W$. Both absolute maps are homotopy equivalences, so their commuting pair exact sequences give an isomorphism $H_n(O,O\cap N;G)\to H_n(U,W;G)$ by the exact-sequence injectivity and surjectivity chase. No inverse map of these pairs is needed. All maps commute with collapse to $(U\cup V,V)$, so the resulting isomorphism is the homomorphism of the original inclusion. [F5, F3, F4, step 1.2, step 1.3]

3.1 These are exactly the four structural requirements in F1. If either subcomplex or their intersection is empty the cylinder construction has the corresponding empty pieces; excision and the relative chain quotients still give the same conclusion. [F1, step 1.1, step 1.2, step 2.1] ∎
