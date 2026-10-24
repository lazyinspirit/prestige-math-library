---
id: thm-proj-structure-sheaf-scheme
kind: theorem
title: "Proj carries a scheme structure"
status: published
origin: pipeline
deps:
  - lem-proj-prime-localization-correspondence
  - thm-gluing-affine-schemes
  - def-axiom-of-choice
  - def-proj-graded-ring-points
  - def-standard-open-proj
  - def-affine-scheme-spectrum
  - def-principal-localisation
  - prop-localisation-zero-equality-and-kernel-criteria
  - thm-universal-property-of-localisation
  - thm-affine-scheme-ring-anti-equivalence
  - cor-prime-containing-an-ideal-avoiding-an-element
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  references:
    - title: "The Stacks Project, Constructions of Schemes, Section 27.8 (Tag 01M3)"
      url: https://stacks.math.columbia.edu/tag/01M3
    - title: "Ravi Vakil, The Rising Sea, August 2022 draft, Section 4.5"
      url: https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf
---

## Statement

Assume the Axiom of Choice, inherited from the affine-scheme construction and
from prime existence in nonzero rings. Let $S=\bigoplus_{e\ge0}S_e$ be a
commutative nonnegatively graded ring. Then there is a scheme $X$, written
$\operatorname{Proj}S$ as a scheme, together with open subscheme
identifications
$$\varphi_f:\ D_+(f)\xrightarrow{\ \cong\ }\operatorname{Spec}S_{(f)}$$
for every homogeneous $f\in S_+$ of positive degree, such that:

1. The open subschemes $D_+(f)\subseteq X$, $f\in S_+$ homogeneous, form an
   affine open cover of $X$, and $\mathcal O_X(D_+(f))=S_{(f)}$ for each of
   them, in the sense that $\varphi_f$ identifies the two structure sheaves.
2. The identifications agree on overlaps: for homogeneous $f,g\in S_+$ of
   degrees $d,e$, writing $\tau_{fg}=g^d/f^e\in S_{(f)}$ and
   $\tau_{gf}=f^e/g^d\in S_{(g)}$, the set $D_+(fg)=D_+(f)\cap D_+(g)$ is
   carried by $\varphi_f$ onto $D(\tau_{fg})\subseteq\operatorname{Spec}S_{(f)}$
   and by $\varphi_g$ onto $D(\tau_{gf})\subseteq\operatorname{Spec}S_{(g)}$,
   and the transition $\varphi_g\circ\varphi_f^{-1}$ is the canonical
   isomorphism induced by the localisation isomorphisms
   $S_{(f)}[\tau_{fg}^{-1}]\cong S_{(fg)}\cong S_{(g)}[\tau_{gf}^{-1}]$.
3. The underlying topological space of $X$ is $\operatorname{Proj}S$ with the
   topology of [[def-proj-graded-ring-points]], compatibly over each
   $D_+(f)$, and the inclusion of systems
   $\{D_+(f)\}_f$ is the standard-open basis of
   [[def-standard-open-proj]].
4. The scheme is unique up to a unique isomorphism compatible with all the
   identifications $\varphi_f$: any other scheme $X'$ with these properties
   carries a unique isomorphism $X\to X'$ identifying the charts.

The empty cases are included: if $S=0$ then $X=\varnothing$, and if $f$ is
nilpotent then $D_+(f)=\varnothing$ and $S_{(f)}=0$.

## Facts & Assumptions

**Given:** The Axiom of Choice; a commutative nonnegatively graded ring $S$; homogeneous elements $f,g,h\in S_+$ of positive degrees $d,e,m$; the localisations $S_f$, $S_f\to S_{fg}$ and the degree-zero rings $S_{(f)}\subseteq S_f$.

[A1] The Axiom of Choice states that every family of nonempty sets has a choice function. ([[def-axiom-of-choice]])

[F1] $\operatorname{Proj}S$ is the set of homogeneous primes $\mathfrak p$ with $S_+\not\subseteq\mathfrak p$, with closed sets $V_+(I)$; for $S=0$ it is empty. ([[def-proj-graded-ring-points]])

[F2] $D_+(f)=\{\mathfrak p:f\notin\mathfrak p\}$ is open, $D_+(f)\cap D_+(g)=D_+(fg)$, and the family of all $D_+(f)$, $f\in S_+$ homogeneous, is a basis of the topology. ([[def-standard-open-proj]])

[F3] The maps of [[lem-proj-prime-localization-correspondence]] give bijections $\operatorname{Spec}S_{(f)}\cong D_+(f)$ and $\operatorname{Spec}S_{(fg)}\cong D_+(fg)$, and for homogeneous $g\in S_+$ of degree $e$ the subset $D_+(fg)\subseteq D_+(f)$ corresponds to the distinguished open $D(g^d/f^e)\subseteq\operatorname{Spec}S_{(f)}$; if $f$ is nilpotent, $S_{(f)}=0$ and $D_+(f)=\varnothing$. ([[lem-proj-prime-localization-correspondence]])

[F4] Affine schemes with open overlap subschemes and isomorphisms satisfying the identity and cocycle conditions glue to a scheme, uniquely up to unique isomorphism, and the given affine schemes become an open affine cover. ([[thm-gluing-affine-schemes]])

[F5] $\operatorname{Spec}$ is a contravariant equivalence from commutative rings to affine schemes with quasi-inverse global sections; in particular $\Gamma(\operatorname{Spec}A,\mathcal O_{\operatorname{Spec}A})=A$ and an isomorphism of rings induces an isomorphism of affine schemes. ([[thm-affine-scheme-ring-anti-equivalence]], [[def-affine-scheme-spectrum]])

[F6] Assume AC. If $R$ is a nonzero commutative ring, then $R$ has a prime ideal: apply the criterion with $I=0$ and $f=1$, where $1^n\notin 0$ for all $n\ge1$. ([[cor-prime-containing-an-ideal-avoiding-an-element]])

[F7] If $S\subseteq R$ is multiplicative and every $s\in S$ maps to a unit under $R\to A$, there is a unique ring homomorphism $S^{-1}R\to A$ compatible with the localisation map. ([[thm-universal-property-of-localisation]], [[def-principal-localisation]])

[F8] In a localisation, $r/s=0$ if and only if $ur=0$ for some $u$ in the multiplicative subset. ([[prop-localisation-zero-equality-and-kernel-criteria]])

## Proof

**Proof technique:** direct: build the charts $\operatorname{Spec}S_{(f)}$ of $D_+(f)$, prove that the two double localisations of a pair of charts are canonically isomorphic to $S_{(fg)}$, glue, then compare the glued space with $\operatorname{Proj}S$ through the prime correspondence.

1.1 The localisation map $\psi=\psi_{f,g}:S_f\to S_{fg}$ exists and is unique, because $f$ becomes a unit in $S_{fg}$ (its inverse is $g/(fg)$); it is graded, hence restricts to a ring homomorphism $S_{(f)}\to S_{(fg)}$ mapping $a/f^i$ to $a g^i/(fg)^i$, and the element $\tau_{fg}=g^d/f^e\in S_{(f)}$ maps to $g^d/f^e\in S_{(fg)}$, which is a unit there with inverse $f^e/g^d$; symmetrically $\psi_{g,f}(\tau_{gf})$ is a unit with inverse $g^d/f^e$. [F7, algebra]

2.1 The induced map $\widetilde\psi:S_{(f)}[\tau_{fg}^{-1}]\to S_{(fg)}$ of step 1.1 is surjective: an element of $S_{(fg)}$ has the form $y=c/(fg)^k$ with $c\in S$ homogeneous of degree $k(d+e)$, and putting $i=k(e+1)$ and $a=c g^{k(d-1)}\in S$, which is homogeneous of degree $k(d+e)+k(d-1)e=kd(e+1)=id$, the element $x=a/f^i$ lies in $S_{(f)}$ and $\widetilde\psi(x/\tau_{fg}^k)=\bigl(c g^{k(d-1)}/f^{k(e+1)}\bigr)\bigl(f^{ek}/g^{dk}\bigr)=c/(fg)^k=y$. [F7, step 1.1, algebra]

2.2 The map $\widetilde\psi$ of step 1.1 is injective: if $\widetilde\psi(x/\tau_{fg}^j)=0$, then multiplying by $\tau_{fg}^j$ gives $\psi(x)=0$, so for $x=a/f^i$ one has $a/f^i=0$ in $S_{fg}$ and hence $(fg)^N a=0$ in $S$ for some $N$; choosing $M$ with $dM\ge N$ gives $f^N g^{dM}a=g^{dM-N}(fg)^N a=0$, so $\tau_{fg}^M x=g^{dM}a/(f^{eM}f^i)=0$ in $S_{(f)}$, whence $x/\tau_{fg}^j=0$ in the localisation. [F8, step 1.1]

3.1 The symmetric map $\widetilde\psi_{g,f}:S_{(g)}[\tau_{gf}^{-1}]\to S_{(fg)}$, $\tau_{gf}=f^e/g^d$, is likewise an isomorphism, by the same two arguments with the roles of $f$ and $g$ exchanged, so the two isomorphisms are the canonical transition isomorphisms between the charts $D(\tau_{fg})\subseteq\operatorname{Spec}S_{(f)}$ and $D(\tau_{gf})\subseteq\operatorname{Spec}S_{(g)}$ required in clause (2) of the Statement. [step 2.1, step 2.2]

4.1 The transition isomorphisms of step 3.1 satisfy the identity and cocycle conditions: for a triple $f,g,h$ every one of the pairwise transitions, transported to $S_{(fgh)}$, is the canonical map of the localisation $S_{fgh}$ induced by $S\to S_{fgh}$, which is unique by [F7]; hence the composite around each triangle of charts is the identity on the triple overlap, and the transition of a pair with itself is the identity. By [F3] the overlap identifications fit the intersections $D_+(fg)=D_+(f)\cap D_+(g)$ and $D_+(fgh)=D_+(f)\cap D_+(g)\cap D_+(h)$. [F3, F7, step 3.1]

5.1 By step 4.1 the affine schemes $\operatorname{Spec}S_{(f)}$, indexed by homogeneous $f\in S_+$, with the overlap isomorphisms of step 3.1 are gluing data satisfying the identity and cocycle conditions; the gluing theorem produces a scheme $X$ with an open affine cover by the images of the $\operatorname{Spec}S_{(f)}$, identified with the charts, uniquely up to a unique chart-compatible isomorphism. For $f$ nilpotent the chart is $\operatorname{Spec}0=\varnothing$ by [F3], so the corresponding open subscheme is empty. [F3, F4, step 4.1]

5.2 The underlying topological space of $X$ is $\operatorname{Proj}S$: by [F3] each chart is in bijection with $D_+(f)\subseteq\operatorname{Proj}S$, and step 4.1 says the bijections agree on overlaps, so the chartwise bijections glue to a well-defined bijection $|X|\to\operatorname{Proj}S$. The bijection is a homeomorphism: distinguished opens form a basis inside each affine chart of $X$, and each is a member of the family in [F3]. Indeed, for $u=a/f^k\in S_{(f)}$ with $k>0$, $D(u)=D(u^d)=D(a^d/f^{kd})$, which is the chart open corresponding to $D_+(fa)$; for $k=0$, $a\in S_0$ and $D(a)=D(a^d)=D((af)^d/f^d)$ corresponds to $D_+(af^2)$. Thus the chart opens $D_+(fg)$ form a basis for $X$. On $\operatorname{Proj}S$ the same family is a basis by [F2], and the chart prime correspondences of [F3] match both bases. In the empty cases both sides are empty: if $S=0$ then $\operatorname{Proj}S=\varnothing$ by [F1] and every chart is $\operatorname{Spec}0$; if $\operatorname{Proj}S=\varnothing$ then each $D_+(f)=\varnothing$ and $S_{(f)}=0$ by [F3] together with [F6], since a nonzero $S_{(f)}$ has a prime, contradicting the bijection with the empty set $D_+(f)$. [F1, F2, F3, F6, step 4.1]

6.1 Sections: on the chart $D_+(f)$ the identification $\varphi_f$ exhibits the structure sheaf of $X$ as that of $\operatorname{Spec}S_{(f)}$, so $\mathcal O_X(D_+(f))=\Gamma(\operatorname{Spec}S_{(f)},\mathcal O)=S_{(f)}$ by [F5]; in particular the identifications are isomorphisms of locally ringed spaces respecting the structure sheaves, and clause (1) of the Statement holds. [F5, step 5.1]

7.1 Clauses (1)-(4) of the Statement are exactly steps 5.1 (existence, cover, uniqueness), 6.1 (sections), 4.1 (overlap agreement) and 5.2 (underlying space). The Axiom of Choice [A1] is inherited through the affine-scheme and prime-existence interfaces [F5, F6] and is used only in step 5.2, to know that a nonzero $S_{(f)}$ has a prime and hence a nonempty chart; the gluing and the transition isomorphisms are choice-free. [A1, F5, F6, step 4.1, step 5.1, step 5.2] ∎
