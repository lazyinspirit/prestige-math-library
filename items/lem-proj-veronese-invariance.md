---
id: lem-proj-veronese-invariance
kind: lemma
title: "Proj is invariant under Veronese regrading"
status: draft
origin: pipeline
deps:
  - thm-proj-structure-sheaf-scheme
  - def-twisting-sheaf-proj
  - lem-proj-associated-sheaf-basic-sections
  - def-axiom-of-choice
  - def-standard-open-proj
  - def-proj-graded-ring-points
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "The Stacks Project, Constructions of Schemes, Sections 27.8-27.21"
      url: https://stacks.math.columbia.edu/download/constructions.pdf
    - title: "Ravi Vakil, The Rising Sea, 29 August 2022, Sections 4.5, 7.4, 9.3, 10.6, 17.4, 17.6, 18.2"
      url: https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf
    - title: "Gao-Zhang, Lectures on Algebraic Geometry, Chapter 5"
      url: https://web.math.princeton.edu/~shouwu/publications/LAG2.pdf
---

## Statement

Assume the Axiom of Choice as inherited from the Proj sheaf construction
([[def-axiom-of-choice]]). Let $S=\bigoplus_{e\ge0}S_e$ be a commutative
nonnegatively graded ring and let $d\ge1$; write
$$S^{(d)}=\bigoplus_{n\ge0}S_{dn}$$
for the Veronese regrading of $S$, graded so that the elements of $S_{dn}$ have
degree $n$. Then there is a canonical isomorphism of schemes
$$\operatorname{Proj}S\;\cong\;\operatorname{Proj}S^{(d)}$$
which maps the chart $D_+(f)$ of $\operatorname{Proj}S$, for homogeneous
$f\in S_+$ of positive degree, to the chart $D_+(f^d)$ of
$\operatorname{Proj}S^{(d)}$ with the same coordinate ring
$S_{(f)}=S^{(d)}_{(f^d)}$, and under which the twist
$\mathcal O_{\operatorname{Proj}S^{(d)}}(1)$ corresponds to
$\mathcal O_{\operatorname{Proj}S}(d)$; no invertibility of either twist in
arbitrary grading is claimed or needed. For $d=1$ the isomorphism is the
identity, and if $\operatorname{Proj}S=\varnothing$ then
$\operatorname{Proj}S^{(d)}=\varnothing$.

## Facts & Assumptions

**Given:** A commutative nonnegatively graded ring $S$, an integer $d\ge1$, the Veronese subring $S^{(d)}=\bigoplus_{n\ge0}S_{dn}$, and the Axiom of Choice as inherited from the Proj construction.

[A1] The Axiom of Choice states that every family of nonempty sets has a choice function. ([[def-axiom-of-choice]])

[F1] $\operatorname{Proj}S$ is the set of homogeneous prime ideals $\mathfrak p$ of $S$ with $S_+\not\subseteq\mathfrak p$; for homogeneous $f$ of positive degree, $D_+(f)=\{\mathfrak p\in\operatorname{Proj}S:f\notin\mathfrak p\}$ and these opens form a basis. ([[def-proj-graded-ring-points]], [[def-standard-open-proj]])

[F2] For homogeneous $f$ of positive degree the chart $D_+(f)$ of $\operatorname{Proj}S$ is $\operatorname{Spec}S_{(f)}$ with $S_{(f)}=(S[f^{-1}])_0$, and the scheme structure on $\operatorname{Proj}S$ is obtained by gluing these affine charts along the canonical localisation identifications on overlaps. ([[thm-proj-structure-sheaf-scheme]])

[F3] $\mathcal O_{\operatorname{Proj}S}(n)=\widetilde{S(n)}$, where $S(n)$ is the shifted graded module, and on the chart $D_+(f)$ its sections are $S(n)_{(f)}=(S(n)[f^{-1}])_0$; on overlaps the restrictions are the canonical localisations. ([[def-twisting-sheaf-proj]], [[lem-proj-associated-sheaf-basic-sections]])

## Proof

**Proof technique:** direct: compare the standard affine chart rings and their overlap maps, then identify the twists as matching degree components of graded localizations.

1.1 The matching chart covers. Contraction sends a homogeneous prime $\mathfrak p\subseteq S$ avoiding $S_+$ to a homogeneous prime $\mathfrak q=\mathfrak p\cap S^{(d)}$ avoiding $S^{(d)}_+$: choose homogeneous $f\in S_+\setminus\mathfrak p$, and then $f^d\in S^{(d)}_+\setminus\mathfrak q$. This defines a map $c:\operatorname{Proj}S\to\operatorname{Proj}S^{(d)}$ with $c^{-1}(D_+(f^d))=D_+(f)$, since $f^d\in\mathfrak p$ if and only if $f\in\mathfrak p$. The opens $D_+(f)$ cover $\operatorname{Proj}S$. Their matches $D_+(f^d)$ cover $\operatorname{Proj}S^{(d)}$: if $\mathfrak q$ avoids the Veronese irrelevant ideal, choose homogeneous $h\in S^{(d)}_+\setminus\mathfrak q$ and take $f=h$ viewed as an element of $S_+$; then $f^d=h^d\notin\mathfrak q$. The chart-ring comparison below proves that $c$ is a bijection and an isomorphism of schemes. [F1, algebra]
2.1 Same chart rings. For homogeneous $f\in S_+$ of positive ordinary degree $d_0$ we compare the two chart rings inside the common localisation $S[f^{-1}]$. The chart ring of $\operatorname{Proj}S$ is $S_{(f)}=\{a/f^k:a\in S_{kd_0},\ k\ge0\}$; the chart ring of $\operatorname{Proj}S^{(d)}$ at $f^d$ is $S^{(d)}_{(f^d)}=\{b/(f^d)^k:b\in S^{(d)}_{kd_0}=S_{dkd_0},\ k\ge0\}$. Every $b/(f^d)^k=b/f^{dk}$ with $b\in S_{dkd_0}$ lies in $S_{(f)}$. Conversely, given $a/f^k$ with $a\in S_{kd_0}$, choose an integer $s\ge0$ with $ds\ge k$ and rewrite $a/f^k=(af^{ds-k})/(f^d)^s$, where $af^{ds-k}\in S_{kd_0+(ds-k)d_0}=S_{dsd_0}=S^{(d)}_{sd_0}$; hence $a/f^k\in S^{(d)}_{(f^d)}$. Therefore $S_{(f)}=S^{(d)}_{(f^d)}$ as subrings of $S[f^{-1}]$, in agreement with the identification $D_+(f)=D_+(f^d)$ of step 1.1. [F1, F2, algebra]
3.1 The scheme isomorphism. By steps 1.1 and 2.1 the standard affine charts of the two schemes have identical coordinate rings inside the corresponding graded localizations. The overlap $D_+(f)\cap D_+(g)=D_+(fg)$ corresponds to $D_+(f^d)\cap D_+(g^d)=D_+((fg)^d)$, both with coordinate ring $S_{(fg)}=S^{(d)}_{((fg)^d)}$. The transition maps of [F2] are the same canonical localization maps under these ring identities. Thus the identity maps on matching charts glue to an isomorphism of schemes $\operatorname{Proj}S\to\operatorname{Proj}S^{(d)}$. To identify its point map, let $\mathfrak p\in D_+(f)$ and put $\mathfrak q=\mathfrak p\cap S^{(d)}$. For $a/f^\ell\in S_{(f)}$, choose $k$ with $dk\ge\ell$ and rewrite it as $(af^{dk-\ell})/(f^d)^k$ as in step 2.1. Its chart-prime membership for $\mathfrak p$ is $a\in\mathfrak p$; on the Veronese side it is $af^{dk-\ell}\in\mathfrak q$, equivalent to $a\in\mathfrak p$ because $f\notin\mathfrak p$. Thus the glued map on points is the contraction map $c$ of step 1.1, and $c$ is bijective. The construction is canonical, and for $d=1$ it is the identity. [F1, F2, step 1.1, step 2.1]
3.2 The twists on a chart. Fix homogeneous $f\in S_+$ of ordinary degree $e>0$ and let $V=D_+(f)$ correspond to $D_+(f^d)$. The degree-zero part of the shifted localization is $S(d)_{(f)}=\{a/f^\ell:\ell\ge0,\ a\in S_{\ell e+d}\}$, viewed as the degree-$d$ component of $S[f^{-1}]$. On the Veronese chart, the shift has $S^{(d)}(1)_{(f^d)}=\{b/f^{dk}:k\ge0,\ b\in S_{d(ke+1)}\}$, a submodule of that same degree-$d$ component. Conversely, given $a/f^\ell$ in the first set, choose $k$ with $dk\ge\ell$ and rewrite it as $(af^{dk-\ell})/f^{dk}$; the numerator has degree $d(ke+1)$, so the fraction lies in the second set. The reverse inclusion is immediate. Hence the two local modules are canonically equal inside $(S[f^{-1}])_d$, with the common scalar ring $S_{(f)}=S^{(d)}_{(f^d)}$ of step 2.1. This gives the desired local isomorphism without asserting either twist is free. [F3, step 2.1, algebra]
4.1 The twists glue. For homogeneous $f,g\in S_+$ of positive degree, the identifications of step 3.2 on $D_+(f)$ and $D_+(g)$ restrict to the same identification over $D_+(fg)$: each is the identity on the degree-$d$ component after the canonical graded localization into $S[(fg)^{-1}]$. Hence these local isomorphisms glue along the chart cover of [F2] to an isomorphism of $\mathcal O_{\operatorname{Proj}S^{(d)}}$-modules $\mathcal O_{\operatorname{Proj}S^{(d)}}(1)\cong\mathcal O_{\operatorname{Proj}S}(d)$ under the scheme isomorphism of step 3.1. [F2, F3, step 3.1, step 3.2]
5.1 Conclusion. Step 3.1 gives the canonical scheme isomorphism $\operatorname{Proj}S\cong\operatorname{Proj}S^{(d)}$ with matching charts, and step 4.1 identifies $\mathcal O(1)$ with $\mathcal O(d)$. For $d=1$ the map is the identity; if either Proj is empty, the isomorphism makes the other empty. No invertibility of $\mathcal O_{S^{(d)}}(1)$ or $\mathcal O_S(d)$ is used or asserted. The Axiom of Choice [A1] is inherited from the Proj sheaf construction [F2]; no further choice is made. [A1, F2, step 3.1, step 4.1, cases: d=1 and empty Proj]
\qed
