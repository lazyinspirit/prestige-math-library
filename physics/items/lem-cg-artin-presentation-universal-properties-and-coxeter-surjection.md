---
id: lem-cg-artin-presentation-universal-properties-and-coxeter-surjection
kind: lemma
title: "Universal properties of the Artin monoid and group, the projection onto the Coxeter group, and the quotient by the squares"
status: published
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 2
deps: [def-cg-artin-monoid-and-group-presentations, def-hh-coxeter-matrix-word-group-and-length, def-group-homomorphism, def-group, def-generated-subgroup, thm-quotient-group-universal-property, thm-von-dyck, def-group-presentation, def-relators-relations-and-finite-presentations, def-normal-closure, def-quotient-group, thm-third-isomorphism-theorem-groups, lem-nested-normal-subgroups-and-quotients, thm-correspondence-theorem-groups, thm-first-isomorphism-theorem-groups, def-group-isomorphism-and-automorphism, def-free-group, thm-reduced-words-form-the-free-group, def-semigroup-and-monoid, def-braid-group-by-the-artin-presentation, thm-the-artin-presentation-is-complete-for-geometric-braids, thm-image-subgroup-and-kernel-normal, def-axiom-of-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Michael W. Davis, The Geometry and Topology of Coxeter Groups (Princeton University Press 2008; author's complete PDF)"
      url: "https://people.math.osu.edu/davis.12/davisbook.pdf"
    - title: "Rachael Boyd, Homology of Coxeter and Artin groups (PhD thesis, University of Aberdeen 2018, corrected version)"
      url: "https://www.maths.gla.ac.uk/~rboyd/Boyd%20Thesis%20with%20corrections.pdf"
    - title: "Jon McCammond, The mysterious geometry of Artin groups (Winter Braids Lecture Notes Vol. 4 (2017), Course no I, pp. 1-30)"
      url: "https://proceedings.centre-mersenne.org/item/10.5802/wbln.17.pdf"
verification:
  audited: "2026-10-08"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Statement

Let $(S,m)$ be a finite Coxeter matrix, $W$ the presented Coxeter group with its
universal property and length function $\ell$
([[def-hh-coxeter-matrix-word-group-and-length]]), and let $S^{*}$, $A^{+}$, $A$,
the classes $[u]$, the elements $\sigma_s$ and $\gamma:A^{+}\to A$ be as in
[[def-cg-artin-monoid-and-group-presentations]].

**(1) Universal property of the Artin monoid.** Let $M$ be a monoid
([[def-semigroup-and-monoid]]; every group is a monoid, [[def-group]]) and let
$f:S\to M$ be a map such that $f(u)=f(v)$ in $M$ for every braid pair $\{u,v\}$,
where $f(s_1\cdots s_k):=f(s_1)\cdots f(s_k)$. Then there is a unique monoid
homomorphism $\bar f:A^{+}\to M$ with $\bar f(\sigma_s)=f(s)$ for all $s\in S$.

**(2) Universal property of the Artin group.** Let $G$ be a group and let
$f:S\to G$ satisfy $f(u)=f(v)$ for every braid pair. Then there is a unique group
homomorphism $\bar f:A\to G$ with $\bar f(\sigma_s)=f(s)$ for all $s\in S$
([[def-group-homomorphism]]). Consequently $(A,(\sigma_s)_{s\in S})$ is the group
presented by the Artin presentation
$\langle S\mid u=v\ (\text{braid pairs})\rangle$ in the sense of
[[def-group-presentation]] and [[def-relators-relations-and-finite-presentations]].

**(3) The projection onto $W$.** The map $s\mapsto s$ from $S$ to $W$ sends every
braid pair to an equality in $W$, so (2) gives a homomorphism

$$\pi:A\longrightarrow W,\qquad \pi(\sigma_s)=s,$$

which is **surjective** because the images $\pi(\sigma_s)=s$ generate $W$.
Moreover (1) with $M=W$ gives $\pi^{+}:A^{+}\to W$ with $\pi^{+}(\sigma_s)=s$,
and $\pi\circ\gamma=\pi^{+}$.

**(4) Quotient by the squares.** Let
$D:=\langle\!\langle\{\sigma_s^{2}:s\in S\}\rangle\!\rangle_{A}$ be the normal
closure in $A$ of the squares of the generators. Then the relators $u v^{-1}$ of
$A$ are trivial in $A/D$ and $\sigma_s^{2}D=D$ for all $s$, so the assignment
$s\mapsto\sigma_s D$ induces a homomorphism $\varphi:W\to A/D$ with
$\varphi(s)=\sigma_sD$; the induced map $\bar\pi:A/D\to W$ is an isomorphism with
inverse $\varphi$. Equivalently, imposing the relations $\sigma_s^{2}=1$ on the
Artin presentation returns the Coxeter presentation, and $\ker\pi=D$.

**(5) Type-A application (conditional on the independent presentation theorem).**
Suppose $(S,m)$ is the standard Coxeter system of type $A_{n-1}$ for some $n\ge2$,
with generators $s_1,\ldots,s_{n-1}$, adjacent labels $3$ and all other
off-diagonal labels $2$. Under AC, the Artin group $A(S,m)$ is identified with the
published geometric braid group on $n$ strands by the generator correspondence
$\sigma_{s_i}\mapsto$ the standard geometric half twist. The presentation-defined
group agrees with $B_n^{\mathrm{Artin}}$ by
[[def-braid-group-by-the-artin-presentation]], and its isomorphism with the
geometric braid group is supplied by the independently proved
[[thm-the-artin-presentation-is-complete-for-geometric-braids]] (whose AC
hypothesis is part of this application). This is an application of that published
theorem, not a topological proof here; the universal properties in (1)--(4) alone
do not establish injectivity of the type-A comparison.

**(6) Scope.** No injectivity of $\gamma$ or $\pi^{+}$, no torsion-freeness of
$A$, no solvability of the word problem, no Ore localisation, no monoid-to-group
embedding and no general $K(\pi,1)$ statement is made. The type-A identification
is only the conditional application in (5).

## Facts & Assumptions

**Given:** A finite Coxeter matrix $(S,m)$, the presented group $W$ of
[[def-hh-coxeter-matrix-word-group-and-length]] with its universal property, the
constructions $S^{*},A^{+},A,[u],\sigma_s,\gamma$ of
[[def-cg-artin-monoid-and-group-presentations]], and, in (1) and (2), a monoid
$M$ or a group $G$ with a map $f:S\to M$ or $f:S\to G$ whose two values on the
words of every braid pair agree.

[F1] A monoid is a set with an associative product and a two-sided identity, and
a group is such a monoid in which every element is invertible.
([[def-semigroup-and-monoid]])

[F2] On $S^{*}$ there is a smallest congruence $\equiv^{+}$ containing every
braid pair, the classes satisfy $[u][v]=[uv]$, and $A^{+}=S^{*}/\!\equiv^{+}$ has
the elements $\sigma_s=[s]$. ([[def-cg-artin-monoid-and-group-presentations]])

[F3] In $A=F(S)/N$ the subgroup $N$ is the normal closure of the elements
$\rho_{s,t}=uv^{-1}$ for $s\ne t$ with $m(s,t)<\infty$.
([[def-cg-artin-monoid-and-group-presentations]])

[F4] Every map from a set $X$ into a group extends uniquely to a group
homomorphism on the free group $F(X)$. ([[def-free-group]])

[F5] The normal closure of a subset $R$ of a group is the smallest normal
subgroup containing $R$. ([[def-normal-closure]])

[F6] The kernel of every group homomorphism is a normal subgroup.
([[thm-image-subgroup-and-kernel-normal]])

[F7] A homomorphism killing a normal subgroup factors uniquely through the
quotient. ([[thm-quotient-group-universal-property]])

[F8] The subgroup generated by a set is the smallest subgroup containing it.
([[def-generated-subgroup]])

[F9] An isomorphism is a bijective group homomorphism.
([[def-group-isomorphism-and-automorphism]])

[F10] A map on the generators of a presentation that sends every relator to the
identity induces a unique homomorphism on the presented group, and that
homomorphism is surjective exactly when the images of the generators generate
the target. ([[thm-von-dyck]])

[F11] $B_n^{\mathrm{Artin}}$ is the group with generators
$\sigma_1,\dots,\sigma_{n-1}$ and the braid relations
$\sigma_i\sigma_{i+1}\sigma_i=\sigma_{i+1}\sigma_i\sigma_{i+1}$ and the commuting
relations $\sigma_i\sigma_j=\sigma_j\sigma_i$ for $|i-j|>1$.
([[def-braid-group-by-the-artin-presentation]])

[F12] Assume AC: the Artin presentation of
[[def-braid-group-by-the-artin-presentation]] is a presentation of the geometric
braid group $B_n^{\mathrm{geom}}$, the published surjection
$\varphi_n:B_n^{\mathrm{Artin}}\to B_n^{\mathrm{geom}}$ being an isomorphism.
([[thm-the-artin-presentation-is-complete-for-geometric-braids]])

[F13] AC: every family of nonempty sets has a choice function.
([[def-axiom-of-choice]])

[F14] The group $W$ is presented by the generators $S$ and the relators
$s^{2}$ ($s\in S$) and $(st)^{m(s,t)}$ ($s\ne t$, $m(s,t)<\infty$); in
particular $s^{2}=1$ and $(st)^{m(s,t)}=1$ in $W$ for those $s,t$.
([[def-hh-coxeter-matrix-word-group-and-length]])

## Proof

1.1 For (1), define $f(s_1\cdots s_k):=f(s_1)\cdots f(s_k)$ and $f(\varepsilon):=e_M$ on $S^{*}$, and let $\sim$ be the relation $u\sim v:\Leftrightarrow f(u)=f(v)$. Then $\sim$ is an equivalence relation, and it is compatible with concatenation: if $f(u)=f(v)$ then $f(xuy)=f(x)f(u)f(y)=f(x)f(v)f(y)=f(xvy)$ for all $x,y\in S^{*}$. By hypothesis $\sim$ contains every braid pair, so minimality of $\equiv^{+}$ gives $\equiv^{+}\subseteq\sim$; hence $\bar f([u]):=f(u)$ is well defined, and $\bar f([u][v])=\bar f([uv])=f(u)f(v)=\bar f([u])\bar f([v])$ together with $\bar f([\varepsilon])=e_M$ makes $\bar f$ a monoid homomorphism with $\bar f(\sigma_s)=f(s)$. Conversely every element of $A^{+}$ is a class of a word, hence a product of the elements $\sigma_s=[s]$, so a monoid homomorphism out of $A^{+}$ is determined by its values on the $\sigma_s$ and $\bar f$ is the unique homomorphism with $\bar f(\sigma_s)=f(s)$. [F1, F2]

1.2 The two words of a braid pair have equal images in $W$. Let $m=m(s,t)<\infty$, $u=s\,t\,s\cdots$ and $v=t\,s\,t\cdots$ be the alternating words of length $m$. In $W$ one has $s^{2}=t^{2}=1$ and $(st)^{m}=1$ by [F14]. If $m=2k$ is even, then $u=(st)^{k}$ and $v=(ts)^{k}$; from $(st)(ts)=s t^{2} s=s^{2}=1$ one gets $ts=(st)^{-1}$, hence $(ts)^{k}=(st)^{-k}=(st)^{2k-k}=(st)^{k}=u$ because $(st)^{2k}=(st)^{m}=1$. If $m=2k+1$ is odd, then $u=(st)^{k}s$ and $v=(ts)^{k}t=(st)^{-k}t=(st)^{m-k}t=(st)^{k+1}t=(st)^{k}s=u$, using $(st)t=s$ and again $ts=(st)^{-1}$. [F14, algebra]

1.3 For (2), regard $S$ as a subset of the free group $F(S)$. By [F4] the map $f:S\to G$ extends uniquely to a homomorphism $\widehat f:F(S)\to G$ with $\widehat f(s)=f(s)$; on words this gives $\widehat f(u)=f(u)$ for the two words of any braid pair. For every braid pair, with $\rho_{s,t}=uv^{-1}$ as in [F3], one has $\widehat f(\rho_{s,t})=\widehat f(u)\widehat f(v)^{-1}=f(u)f(v)^{-1}=1$, so $\widehat f$ kills the set $\{\rho_{s,t}\}$; its kernel is a normal subgroup by [F6] and hence contains the normal closure $N=\langle\!\langle\{\rho_{s,t}\}\rangle\!\rangle_{F(S)}$ by [F5]. Thus [F7] gives a homomorphism $\bar f:A\to G$ with $\bar f(gN)=\widehat f(g)$, and in particular $\bar f(\sigma_s)=f(s)$; it is unique with this property because the elements $\sigma_s$ are the images of $S$ and generate $A$ in the sense of [F8]. Writing the relators as the equations $u=v$ exhibits $(A,(\sigma_s))$ as the presented group $\langle S\mid u=v\ (\text{braid pairs})\rangle$: a homomorphism out of this presentation is exactly a map $S\to G$ whose two values on each braid pair agree, and it is unique, which is the universal property just proved. [F3, F4, F5, F6, F7, F8, F10]

2.1 For (3), step 1.2 says that the map $s\mapsto s$ sends every braid pair to an equality in $W$, so (2) of step 1.3 yields $\pi:A\to W$ with $\pi(\sigma_s)=s$, and (1) with $M=W$ applied to the same map yields $\pi^{+}:A^{+}\to W$ with $\pi^{+}(\sigma_s)=s$. The homomorphism $\pi$ is surjective: every element of $W$ is a product of the images of elements of $S$, and these are the images under $\pi$ of the generators $\sigma_s$ of $A$, so $\pi$ satisfies the surjectivity criterion of [F10]; equivalently the images $\pi(\sigma_s)=s$ generate $W$ by [F8]. Finally $\pi\circ\gamma=\pi^{+}$, because both sides are monoid homomorphisms $A^{+}\to W$ agreeing on the $\sigma_s$, and these generate $A^{+}$ by the uniqueness clause of step 1.1. [F8, F10, step 1.1, step 1.2, step 1.3]

2.2 For (5), let $n\ge2$ and let $m$ be the type-$A_{n-1}$ matrix on $S=\{s_1,\dots,s_{n-1}\}$, so $m(s_i,s_j)=3$ for $|i-j|=1$ and $m(s_i,s_j)=2$ for $|i-j|>1$. Its braid pairs are then exactly the pairs of alternating words of length $3$, $\{s_is_js_i,\,s_js_is_j\}$ for $|i-j|=1$, and the commuting pairs $\{s_is_j,\,s_js_i\}$ for $|i-j|>1$; these are precisely the two relation families of [F11], so the identity correspondence $s_i\leftrightarrow\sigma_i$ matches the defining relations of $A(S,m)$ with those of $B_n^{\mathrm{Artin}}$. By (2) of step 1.3 there is a homomorphism $A(S,m)\to B_n^{\mathrm{Artin}}$ with $\sigma_{s_i}\mapsto\sigma_i$, and by [F10] applied to the presentation of [F11] there is a homomorphism $B_n^{\mathrm{Artin}}\to A(S,m)$ with $\sigma_i\mapsto\sigma_{s_i}$; the two are inverse on the generators, hence mutually inverse and so isomorphisms by [F9]. [F9, F10, F11, step 1.3]

3.1 Under AC, [F12] identifies $B_n^{\mathrm{Artin}}$ with $B_n^{\mathrm{geom}}$ by the published isomorphism $\varphi_n$ carrying $\sigma_i$ to the standard geometric half twist. Composing with the isomorphism of step 2.2 identifies $A(S,m)$ with $B_n^{\mathrm{geom}}$ under the stated generator correspondence. This is the only place where choice is used: the applied completeness theorem is an AC-conditional statement [F13], while the constructions and arguments of (1)--(4) and step 2.2 are explicit on finite relator sets and use no choice. [F12, F13, step 2.2]

3.2 For (4), let $D_{0}:=\{\sigma_s^{2}:s\in S\}$, so $D=\langle\!\langle D_{0}\rangle\!\rangle_{A}$. Since $\pi(\sigma_s^{2})=\pi(\sigma_s)^{2}=s^{2}=1$, each $\sigma_s^{2}$ lies in $\ker\pi$, which is normal by [F6]; hence $D\subseteq\ker\pi$ by [F5], and [F7] gives the induced homomorphism $\bar\pi:A/D\to W$ with $\bar\pi(\sigma_sD)=s$. For the inverse direction, put $f(s):=\sigma_sD$; then $f(s)^{2}=\sigma_s^{2}D=D$, and for $s\ne t$ with $m=m(s,t)<\infty$ the defining braid relation of $A$ and the relations $\sigma_s^{2}D=\sigma_t^{2}D=D$ give $(f(s)f(t))^{m}=D$: writing $k:=\lfloor m/2\rfloor$, the braid relation reads $(\sigma_s\sigma_t)^{k}=(\sigma_t\sigma_s)^{k}$ when $m=2k$, so that $(\sigma_s\sigma_t)^{2k}=(\sigma_s\sigma_t)^{k}(\sigma_s\sigma_t)^{k}=(\sigma_s\sigma_t)^{k}(\sigma_t\sigma_s)^{k}=(\sigma_s\sigma_t)^{k-1}\sigma_s\sigma_t\sigma_t\sigma_s(\sigma_t\sigma_s)^{k-1}=\cdots=1$ in $A/D$ by $\sigma_s^{2}=\sigma_t^{2}=1$, while for $m=2k+1$ it reads $(\sigma_s\sigma_t)^{k}\sigma_s=(\sigma_t\sigma_s)^{k}\sigma_t$, so that $(\sigma_s\sigma_t)^{2k+1}=(\sigma_s\sigma_t)^{k}\sigma_s\sigma_t(\sigma_s\sigma_t)^{k}=(\sigma_t\sigma_s)^{k}\sigma_t^{2}(\sigma_s\sigma_t)^{k}=(\sigma_t\sigma_s)^{k}(\sigma_s\sigma_t)^{k}=D$. The universal property of $W$ ([[def-hh-coxeter-matrix-word-group-and-length]]) therefore gives a homomorphism $\varphi:W\to A/D$ with $\varphi(s)=\sigma_sD$. [F5, F6, F7, construct, algebra, step 2.1]

4.1 The homomorphisms $\bar\pi$ and $\varphi$ of step 3.2 are mutually inverse: $\bar\pi(\varphi(s))=\bar\pi(\sigma_sD)=s$ for all $s$, and $\varphi(\bar\pi(\sigma_sD))=\varphi(s)=\sigma_sD$ for all $s$; two homomorphisms out of a group generated by a set are equal when they agree on that set, while $W$ is generated by the images of $S$ and $A/D$ is generated by the $\sigma_sD$ by [F8]. Hence $\bar\pi$ is bijective, i.e. an isomorphism by [F9]. Since $\pi$ is the composite of the quotient map $A\to A/D$ with $\bar\pi$ and $\bar\pi$ is injective, an element $g\in A$ lies in $\ker\pi$ exactly when $gD=D$, that is, exactly when $g\in D$; thus $\ker\pi=D$, and imposing the relations $\sigma_s^{2}=1$ on the Artin presentation returns the Coxeter presentation in the sense of [F7] and [F10]. [F8, F9, F10, step 3.2]

5.1 Scope: nothing in the proof establishes injectivity of $\gamma$ or of $\pi^{+}$, torsion-freeness of $A$, solvability of the word problem, an Ore localisation, an embedding of $A^{+}$ into $A$, or a general $K(\pi,1)$ statement, and the only identification with geometric braids is the conditional application of step 3.1. [given] ∎
