---
id: def-gts-derived-artin-stack-and-cotangent-complex
kind: definition
title: Derived Artin stack and cotangent complex
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 0
domain: mathematics
library: physics
deps:
- def-derived-scheme-and-cotangent-complex
- def-axiom-of-choice
- def-model-category-and-quillen-adjunction
- def-category-fibred-in-groupoids
dependency_roles:
  def-derived-scheme-and-cotangent-complex: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-model-category-and-quillen-adjunction: mathematical-premise
  def-category-fibred-in-groupoids: mathematical-premise
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
  - title: 'Bertrand Toën and Gabriele Vezzosi, Homotopical Algebraic Geometry II: Geometric Stacks and Applications'
    url: https://arxiv.org/pdf/math/0404373
    locator: Lemma 1.3.2.3 and Corollary 1.3.2.4 (PDF pp. 74–75), finite-coproduct descent including the empty family; Definition 1.3.2.13, Definition 1.3.3.1 and Proposition 1.3.3.3 (PDF pp. 83–85); Theorem 2.2.2.6 and Corollary 2.2.2.11, Definition 2.2.2.12, Lemmas 2.2.2.13 and 2.2.3.1 (PDF pp. 150–159); Definitions 1.4.1.4–1.4.1.7 and 1.4.1.14–1.4.1.15, Lemma 1.4.1.16 (PDF pp. 105–112).
  - title: 'Bertrand Toën and Gabriele Vezzosi, Homotopical Algebraic Geometry II: Geometric Stacks and Applications'
    url: https://arxiv.org/pdf/math/0404373
    locator: Proposition 1.2.1.2 and Lemma 1.2.1.3 with proofs (PDF pp. 33–34); Proposition 1.2.11.3 with proof (pp. 59–60); Definition 1.2.12.4 and Proposition 1.2.12.5 with proof (pp. 63–64); Theorem 1.3.7.7 (statement and reduction to stable descent, p. 100). Only these named stable-descent results are invoked.
  - title: Prestige Math Library, Derived schemes and cotangent complex
    url: repository:items/def-derived-scheme-and-cotangent-complex.md
    locator: Definition and Source applications
verification:
  precheck: n/a
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Definition

Fix a characteristic-zero field $k$. The **derived affine site** used here is
the opposite of the infinity-localization of simplicial commutative $k$-algebras
at maps inducing isomorphisms on all homotopy groups. Its representable object
associated to $A$ is denoted $\operatorname{Spec}A$; the affine-derived-scheme
and cotangent constructions are those of
[[def-derived-scheme-and-cotangent-complex]]. For each use below of its
cotangent constructions, assume the Axiom of Choice (AC) as stipulated there;
this premise governs the cotangent and tangent-complex assertions, not the
HAG geometricity conventions. For a discrete ring map
$A\to B$, **finite presentation** means that
$B\simeq A[x_1,\ldots,x_r]/(f_1,\ldots,f_s)$ for finite $r,s$. It is
**formally smooth** when, for every $A$-algebra $C$, nilpotent ideal
$J\subset C$ (so $J^N=0$ for some $N$), and $A$-algebra map $B\to C/J$, at
least one $A$-algebra lift $B\to C$ exists. It is **formally étale** when
that lift is unique. In this item, a discrete map is **smooth** if it is of
finite presentation and formally smooth, and **étale** if it is of finite
presentation and formally étale. A finite family of affine-scheme maps is
jointly surjective when the union of its images is the target scheme. For a
map $A\to B$ in the simplicial model, call
$\operatorname{Spec}B\to\operatorname{Spec}A$ **derived-étale** when
$\pi_0A\to\pi_0B$ is étale and, for every $i>0$,
the canonical map
$$\pi_iA\otimes_{\pi_0A}\pi_0B\longrightarrow\pi_iB$$
is an isomorphism. A family $\{\operatorname{Spec}B_\alpha\to
\operatorname{Spec}A\}$ is a derived-étale cover when all its maps are
derived-étale and a finite subfamily of the ordinary étale maps
$\{\operatorname{Spec}\pi_0B_\alpha\to\operatorname{Spec}\pi_0A\}$ is
jointly surjective. A **derived-étale hypercover** $U_\bullet\to U$ is an
augmented simplicial derived affine for which, in each simplicial degree, the
map to the corresponding matching object is a derived-étale cover. A
**derived stack** is a functor $F$ from the opposite derived-affine infinity
category to spaces that sends equivalences to equivalences, takes finite
homotopy coproducts of derived affines to products of spaces, and satisfies
$F(U)\simeq\operatorname*{holim}_{[m]\in\Delta}F(U_m)$ for every such
hypercover. Explicitly, for every finite family $(U_i)_{i\in I}$, require
the canonical map
$$F\!\left(\coprod_{i\in I}^{h}U_i\right)\longrightarrow\prod_{i\in I}F(U_i)$$
to be an equivalence. The coproduct is the derived affine associated to the
homotopy product of the corresponding algebras. The empty family is included:
its coproduct is $\varnothing=\operatorname{Spec}0$, and
$F(\varnothing)\simeq *$, the one-point space. Effective epimorphy for a family of derived stacks means that its
Čech nerve has colimit the target in this derived-stack infinity-category.

Use the connective derived HAG context of Toën--Vezzosi, *Homotopical Algebraic
Geometry II*, §§2.2.2--2.2.3. Its affine class $\mathcal P$ consists of
**derived-smooth** maps $\operatorname{Spec}B\to\operatorname{Spec}A$ for
which $\pi_0B$ is smooth and finitely presented over $\pi_0A$ and the maps
$\pi_iA\otimes_{\pi_0A}\pi_0B\to\pi_iB$ above are isomorphisms for all
$i>0$. The derived-étale topology is quasi-compact; finite coproduct
inclusions form a cover; and descent holds for its hypercovers. The pair
$(\tau,\mathcal P)$ is the HAG context of HAG II Definition 1.3.2.13:
covering maps lie in $\mathcal P$; $\mathcal P$ is closed under equivalences,
composition, and homotopy base change; membership in $\mathcal P$ descends
along derived-étale covers of the source; and the canonical maps from either
summand to a homotopy coproduct over a common target lie in $\mathcal P$.
HAG II Lemma 2.2.2.13 and Lemma 2.2.3.1 verify these conditions for the
specified derived-étale site and smooth class. Corollary 2.2.2.11 identifies
the affine smooth class with the stated $\pi_0$ and higher-homotopy condition.

Define a stack to be $(-1)$-geometric when it is representable by a derived
affine. A morphism $f:X\to Y$ is $(-1)$-representable when for every derived
affine $T\to Y$, $X\times_Y T$ is representable by a derived affine; it is
$(-1)$-$\mathcal P$ when these affine base changes are affine derived-smooth
over $T$. For $n\ge0$, $f$ is $n$-representable when every such base change is
$n$-geometric, and it is $n$-$\mathcal P$ when it is $n$-representable and
each affine base change has an $n$-atlas whose affine charts map to $T$ by
derived-smooth maps in $\mathcal P$. An **$n$-atlas** of $F$ is a family of
derived affines $U_\alpha\to F$ such that each map is $(n-1)$-$\mathcal P$
and the family is an effective epimorphism. For $n\ge0$, $F$ is
$n$-geometric when its diagonal is $(n-1)$-representable and it has an
$n$-atlas. A **derived Artin stack** is an $n$-geometric derived stack for
some finite $n$. “Locally of finite presentation over $k$” means that the
truncation is locally of finite presentation and the cotangent complex below
is perfect. These are the n-geometric and smooth-atlas conventions used
throughout this item.

For an atlas $U_\bullet\to F$, define $\mathrm{QCoh}(F)$ as the
descent-compatible limit of the categories $\mathrm{QCoh}(U_i)$ with the
pullback functors and their Cech coherences; compatible data from two atlases
are identified by their common refinement. The required descent is the
quasi-coherent descent theorem for derived affines described in the source
references below. For stable modules use HAG II Definition 1.2.12.4 and
Proposition 1.2.12.5, and its stack formulation, Theorem 1.3.7.7.
Their hypotheses hold here: suspension of simplicial $k$-modules is fully
faithful by the connective chain-complex model; derived-étale maps are
strong and flat on $\pi_0$, hence flat in the module sense of HAG II
Lemma 2.2.2.2. Homotopy Cartesian stable descent data mean precisely that
all transition maps after derived extension of scalars are equivalences.

Let $f:F\to G$ be a morphism of derived stacks in this site, and let
$x:\operatorname{Spec}A\to F$ be an affine test point. A coefficient module
$N$ is **connective** when its homotopy groups in negative degrees vanish
(equivalently, its cochain model has no positive cohomology). The **split
square-zero algebra** $A\oplus N$ has the given $A$-module structure on $N$,
product of two elements of $N$ equal to zero, and its canonical augmentation
to $A$. Both the projection $A\oplus N\to A$ and its zero section
$A\to A\oplus N$ are retained. Define the space of **relative derivations
at $x$** by
$$\mathrm{Der}_{F/G}(x,N)=\operatorname{hofib}_{(x,0_{f(x)})}\left(F(A\oplus N)\longrightarrow F(A)\times^h_{G(A)}G(A\oplus N)\right).$$
Here $0_{f(x)}$ is the lift of $f(x)$ induced by $A\to A\oplus N$;
the homotopy fiber includes the specified identifications with $x$ and
this zero lift, and all their higher homotopies. Equivalently it is the
mapping space from $\operatorname{Spec}(A\oplus N)$ to $F$ under
$\operatorname{Spec}A$ and over $G$, with those structure maps. For
$G=\operatorname{Spec}k$, write $\mathrm{Der}_F(x,N)$; the relative space
is the homotopy fiber over zero of
$\mathrm{Der}_F(x,N)\to\mathrm{Der}_G(f(x),N)$.

Say that $f$ **has a relative cotangent complex** if, at every affine test
point $x$, there is a bounded-above stable $A$-module $L_{F/G,x}$ with natural
corepresenting equivalences, for every connective $A$-module $N$,
$$\operatorname{Map}_{\mathrm{Mod}_A}(L_{F/G,x},N)\simeq\mathrm{Der}_{F/G}(x,N),$$
and these representatives satisfy the following compatibility. For every
derived algebra map $u:A\to B$ and point
$y:\operatorname{Spec}B\to F$ identified with $x\circ\operatorname{Spec}u$,
the canonical comparison
$$L_{F/G,x}\otimes_A^{\mathbf L}B\longrightarrow L_{F/G,y}$$
is an equivalence, compatibly with compositions and all the specified
homotopies. Bounded-above means $H^i(L_{F/G,x})=0$ for all sufficiently
large $i$; no uniform bound over all points is required. These data are
required to form a quasi-coherent descent object. For derived Artin $F$,
their object in $\mathrm{QCoh}(F)$ is denoted $L_{F/G}$, with
$x^*L_{F/G}=L_{F/G,x}$. One descends these relative pointwise
representatives on an atlas and its Čech nerve, not the absolute cotangent
complexes of the atlas affines. In general $x^*L_{F/G}$ is not
$L_{A/k}$.

The **absolute cotangent complex** is
$L_{F/k}=L_{F/\operatorname{Spec}k}$. For a connective derived commutative
$k$-algebra $R$ and a specified structure morphism
$F\to\operatorname{Spec}R$, write
$L_{F/R}=L_{F/\operatorname{Spec}R}$; affine tests and their zero lifts
are then taken over $R$. In particular this defines the relative object
for every discrete commutative $\mathbb C$-algebra $R$ when $k=\mathbb C$.
On an affine morphism $\operatorname{Spec}A\to\operatorname{Spec}R$ it
is the derived algebra cotangent complex $L_{A/R}$, rather than the
ordinary cotangent module unless the latter actually computes it. Existence
of representatives and their descent is part of saying that $f$ has a
cotangent complex; no such existence or perfectness is asserted for an
arbitrary space-valued stack.

The relative convention has two compatibility formulas. If $F$ and $G$
have absolute cotangent complexes, the relative one is
$$L_{F/G}\simeq\operatorname{cofib}(f^*L_{G/k}\longrightarrow L_{F/k}).$$
For a homotopy Cartesian square $F'=F\times_G^h H$, with projection
$p:F'\to F$, the relative complex, whenever $L_{F/G}$ exists, satisfies
$$L_{F'/H}\simeq p^*L_{F/G}.$$
All pullbacks and tensor products in these formulas are derived; no ordinary
flatness assumption is substituted for the homotopy Cartesian hypothesis.
The first formula follows by applying $\operatorname{Map}(-,N)$ to the
cofiber on each affine test: it gives exactly the homotopy fiber of absolute
derivation spaces above. For the second, evaluating the homotopy Cartesian
square on $A\oplus N$ and $A$ identifies the relative derivation spaces on
both sides. Corepresentability identifies the complexes, and the stipulated
compatibilities descend these identifications. Thus, for
$F_{R'}=F\times^h_{\operatorname{Spec}R}\operatorname{Spec}R'$,
$L_{F_{R'}/R'}\simeq L_{F/R}\otimes_R^{\mathbf L}R'$, understood as
pullback to $F_{R'}$.

If $L_{F/G}$ is perfect (dualizable), its **relative tangent complex** is
$T_{F/G}:=R\operatorname{Hom}_{\mathcal O_F}(L_{F/G},\mathcal O_F)$;
use $T_{F/k}$ and $T_{F/R}$ for the corresponding bases. Without this
perfectness hypothesis, no tangent dual is asserted in this item's
interface. The simplicial commutative algebra presentation remains the
all-characteristic model; this item makes no identification with
commutative dg algebras outside the stated characteristic-zero setting.

## Definition references

[[def-derived-scheme-and-cotangent-complex]]

[[def-model-category-and-quillen-adjunction]]

[[def-category-fibred-in-groupoids]]
