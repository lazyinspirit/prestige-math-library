---
id: "lem-flat-deformations-form-a-zariski-sheaf-of-groupoids"
kind: "lemma"
title: "Flat deformations form a Zariski sheaf of groupoids"
status: published
origin: pipeline
pipeline_run: "frontier-40-geometry-braids-rep-27"
dependency_level: 2
justified_by: []
aliases: []
deps:
  - "def-infinitesimal-deformation-functor-over-square-zero-extension"
  - "def-square-zero-extension-and-small-extension"
  - "thm-gluing-ringed-and-locally-ringed-spaces"
  - "def-scheme"
  - "def-morphism-of-schemes"
  - "thm-gluing-sheaves"
  - "thm-prime-spectrum-of-a-quotient-bijection"
  - "thm-affine-fibre-product-tensor-ring"
  - "def-fibre-product-schemes-universal-property"
  - "def-flat-morphism-schemes"
  - "def-locally-finite-presentation-morphism"
  - "def-axiom-of-choice"
proof_strategy: "direct"
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
verification:
  precheck: "pass"
sources:
  references:
    - title: "The Stacks Project, Schemes, open gluing"
      url: "https://stacks.math.columbia.edu/download/schemes.pdf"
      locator: "Lemma 26.14.1 (tag 01JB) and Lemma 26.14.2 (tag 01JC) with their proofs: compatible open pieces of locally ringed spaces glue, and the glued space is a scheme because affine neighbourhoods persist (printed pages 25-26, read 2026-10-05)"
    - title: "The Stacks Project, Deformation Problems, complete chapter (Chapter 93)"
      url: "https://stacks.math.columbia.edu/download/examples-defos.pdf"
      locator: "Section 93.9, Example 9.1 (tag 0DY7): the deformation category of a scheme, with flat deformations over the base category and their isomorphisms (printed pages 17-19, read 2026-10-05)"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $A'\to A$ be a
square-zero extension of rings ([[def-square-zero-extension-and-small-extension]]),
let $X$ be a flat $A$-scheme ([[def-flat-morphism-schemes]]) and let
$\{U_i\hookrightarrow X\}$ be a Zariski open cover. Here a **flat deformation**
is a flat $A'$-scheme $X'$ with a specified identification
$X'\times_{\operatorname{Spec}A'}\operatorname{Spec}A\cong X$, and its
**isomorphisms** are isomorphisms over $A'$ inducing the identity on $X$ (the
deformation convention of
[[def-infinitesimal-deformation-functor-over-square-zero-extension]], extended
here to arbitrary square-zero base extensions). The closed fibre inclusion
identifies the underlying spaces of $X$ and $X'$; for an open $V\subset X$
write $X'|_V$ for the open subscheme of $X'$ corresponding to $V$ under this
identification. Then the groupoid of flat deformations of $X$ over $A'$ is
equivalent to the groupoid of descent data consisting of flat deformations
$U_i'$ of $U_i$ over $A'$ and isomorphisms
$$U_i'|_{U_i\cap U_j}\cong U_j'|_{U_i\cap U_j}$$
over $A'$ inducing the identity on $U_i\cap U_j$, satisfying the identity and
cocycle conditions on triple overlaps, with compatible isomorphisms as
morphisms of descent data. Thus flat deformations and their isomorphisms
satisfy effective Zariski descent (a sheaf of groupoids in this sense), and
affine local deformation data compute the global deformation groupoid by Cech
descent. The same statement holds for a first-order thickening
$S\hookrightarrow S'$ and a flat $S$-scheme $X$, where a deformation means a
flat $S'$-scheme $X'$ together with an identification
$X'\times_{S'}S\cong X$; no retraction $S'\to S$ is required. If the
deformation convention also requires local finite presentation
([[def-locally-finite-presentation-morphism]]), the equivalence restricts to
those objects. No separatedness or quasi-finiteness hypothesis is required.

## Facts & Assumptions

**Given:** a square-zero extension of rings $A'\to A$ with kernel $I$, a flat $A$-scheme $X$, a Zariski open cover $\{U_i\hookrightarrow X\}$, and the Axiom of Choice.

[F1] If $i:S\hookrightarrow S'$ is a closed immersion whose ideal sheaf $J$ satisfies $J^2=0$, then every prime of a local ring of $S'$ contains the stalk of $J$, so $i$ is a homeomorphism on underlying spaces. If $f':X'\to S'$ is flat and $X=X'\times_{S'}S$, flatness makes pullback of $0\to J\to\mathcal O_{S'}\to i_*\mathcal O_S\to0$ exact, giving $0\to f'^*J\to\mathcal O_{X'}\to\mathcal O_X\to0$; hence the ideal of this specified reduction is $f'^*J$ and is square-zero. This assertion concerns a flat lift $X'$ over $S'$ and its reduction; it does not assert a fibre product $X\times_S S'$ for an arbitrary flat $X\to S$. ([[def-square-zero-extension-and-small-extension]])

[F2] For ring maps $A'\to B'$ and $A'\to A$ the affine fibre product is $\operatorname{Spec}(B'\otimes_{A'}A)$, and for the quotient $A=A'/I$ one has $B'\otimes_{A'}A=B'/IB'$. ([[thm-affine-fibre-product-tensor-ring]])

[F3] For a commutative ring $R$ and ideal $J\subseteq R$, contraction along $R\to R/J$ is a bijection $\operatorname{Spec}(R/J)\to V(J)=\{\mathfrak p:\mathfrak p\supseteq J\}$. ([[thm-prime-spectrum-of-a-quotient-bijection]])

[F4] Ringed or locally ringed spaces with compatible open pieces and isomorphisms satisfying the identity and cocycle conditions glue to a ringed, respectively locally ringed, space covered by open pieces identified with the given ones. ([[thm-gluing-ringed-and-locally-ringed-spaces]])

[F5] A locally ringed space is a scheme when every point has an open neighbourhood which, with the restricted structure sheaf, is an affine scheme. ([[def-scheme]])

[F6] A morphism of schemes is a morphism of the underlying locally ringed spaces, so its maps on stalks are local homomorphisms. Compatible morphisms on an open cover glue: their continuous maps glue on the cover and their structure-sheaf maps glue by the sheaf property. ([[def-morphism-of-schemes]], [[thm-gluing-sheaves]])

[F7] A morphism $f:X\to S$ is flat if and only if $\mathcal O_{X,x}$ is a flat $\mathcal O_{S,f(x)}$-module at every $x\in X$; flatness is thus a condition on local rings, checked on any open cover of the source, and restriction to an open subscheme preserves it. ([[def-flat-morphism-schemes]])

[F8] A fibre product is characterized by its universal property, and morphisms into it are determined by their two components. ([[def-fibre-product-schemes-universal-property]])

[F9] A morphism $f:X'\to S'$ is locally of finite presentation if it admits affine charts $A\to B$ that are finitely presented algebras; the condition is local on the source and the target. ([[def-locally-finite-presentation-morphism]])

## Proof

**Proof technique:** identify $X$ with the closed fibre of $X'$ homeomorphically, construct a restriction functor to the cover, glue local data with the locally-ringed-space gluing theorem, and prove full faithfulness and essential surjectivity.

1.1 Let $X'$ be a flat deformation of $X$ over $A'$ with base-change isomorphism $X'\times_{\operatorname{Spec}A'}\operatorname{Spec}A\cong X$. The projection $\operatorname{Spec}A\to\operatorname{Spec}A'$ is a closed immersion with ideal $I$ satisfying $I^2=0$, so its base change $\iota:X\to X'$ is a closed immersion with square-zero ideal sheaf; by [F1] the map $\iota$ is a homeomorphism, and by [F3], applied on affine charts, $V(J)=S'$ for the square-zero ideal, so $|X|\cong|X'|$ as topological spaces. For an open $V\subseteq X$ let $X'|_V$ be the open subscheme of $X'$ whose underlying space is the image of $V$; it is a flat deformation of $V$ over $A'$ because flatness is checked on local rings ([F7]) and the base change of the open piece is $V$ by [F8]; the affine identification of the reduction is the computation $B'\otimes_{A'}A=B'/IB'$ of [F2]. This makes **restriction to opens** a well-defined operation on deformations. [F1, F2, F3, F7, F8, given]

2.1 The restriction operation of step 1.1 is functorial: an isomorphism $u:X'_1\to X'_2$ of deformations of $X$ over $A'$ restricts to isomorphisms $X'_1|_V\to X'_2|_V$ of deformations of $V$ over $A'$, and composition and identities restrict to composition and identities. Hence any deformation $X'$ yields descent data $\Phi(X')$ on the cover $\{U_i\}$: the objects are the deformations $X'|_{U_i}$ of $U_i$, and on overlaps the canonical isomorphisms $X'|_{U_i}|_{U_i\cap U_j}\to X'|_{U_i\cap U_j}\leftarrow X'|_{U_j}|_{U_i\cap U_j}$ coming from the identification of both sides with $X'|_{U_i\cap U_j}$ have the same source and target, are isomorphisms over $A'$ inducing the identity on $U_i\cap U_j$, and satisfy the identity and cocycle conditions because they are induced by a single global object. Moreover an isomorphism $u$ of deformations restricts to a compatible family of isomorphisms, so $\Phi$ is a functor from the groupoid of flat deformations of $X$ over $A'$ to the groupoid of descent data. [F7, step 1.1, algebra]

3.1 Conversely, let $(\{U_i'\},\{\varphi_{ij}\})$ be descent data. Glue the locally ringed spaces $U_i'$ along their open subschemes $U_i'|_{U_i\cap U_j}\cong U_j'|_{U_i\cap U_j}$ using the isomorphisms $\varphi_{ij}$; by [F4] this produces a locally ringed space $X'$ covered by open pieces isomorphic to the $U_i'$, with the cocycle condition ensuring the gluing is well defined on triple overlaps. Every point of $X'$ lies in some piece $U_i'$, which is a scheme, so it has an affine open neighbourhood inside that piece; by [F5] the glued locally ringed space $X'$ is a scheme. [F4, F5, step 2.1]

4.1 Each structural morphism $U_i'\to\operatorname{Spec}A'$ is a morphism of schemes; on an overlap the two restrictions agree because the isomorphisms $\varphi_{ij}$ are over $\operatorname{Spec}A'$ and agree with the identification of the pieces in the glued space. Therefore, by [F6], the continuous maps and the structure-sheaf maps glue to a morphism $X'\to\operatorname{Spec}A'$ which restricts to $U_i'\to\operatorname{Spec}A'$ on each piece; its stalk maps are the stalk maps of the pieces and hence local, so the glued locally ringed space is a scheme over $A'$. At every point the local ring of $X'$ equals the local ring of the piece containing it and the local ring map equals that of $U_i'\to\operatorname{Spec}A'$, which is flat; by [F7] the morphism $X'\to\operatorname{Spec}A'$ is flat. If the pieces are locally of finite presentation over $\operatorname{Spec}A'$, then so is $X'\to\operatorname{Spec}A'$ by [F9], the affine charts being taken inside the pieces; this proves the last claim. [F6, F7, F9, step 3.1]

5.1 The special fibre of $X'$ over $A$ is covered by the pieces $U_i'\times_{\operatorname{Spec}A'}\operatorname{Spec}A\cong U_i$, with transition isomorphisms between the identifications on the pieces; the descent data prescribe that these identifications agree on overlaps, so the canonical morphisms $U_i\to X'\times_{\operatorname{Spec}A'}\operatorname{Spec}A$ glue by [F6] to a morphism $X\to X'\times_{\operatorname{Spec}A'}\operatorname{Spec}A$, and the same gluing of the identity maps in the other direction produces an inverse. Hence $X'\times_{\operatorname{Spec}A'}\operatorname{Spec}A\cong X$ over $\operatorname{Spec}A$, so the glued object $X'$ is a flat deformation of $X$ over $A'$; its restrictions to the pieces are the given $U_i'$. This shows that $\Phi$ is essentially surjective. [F6, F8, step 4.1, algebra]

6.1 To prove that $\Phi$ is fully faithful, let $X'_1,X'_2$ be flat deformations of $X$ over $A'$ and let $v_1,v_2:X'_1\to X'_2$ be isomorphisms of deformations with $\Phi(v_1)=\Phi(v_2)$; by step 2.1 this means that $v_1$ and $v_2$ agree on every piece $X'_1|_{U_i}$, and since the pieces cover $X'_1$ the two morphisms agree as continuous maps and as structure-sheaf maps, so $v_1=v_2$. Conversely, given a morphism of descent data $(u_i)$ from $\Phi(X'_1)$ to $\Phi(X'_2)$, the morphisms $u_i:X'_1|_{U_i}\to X'_2$ agree on overlaps because the descent data morphism is compatible with the gluing isomorphisms, so by [F6] they glue to a morphism $u:X'_1\to X'_2$ over $A'$; its restriction to each piece is $u_i$, hence its base change to $\operatorname{Spec}A$ is the identity on $X$, so $u$ is an isomorphism of deformations and $\Phi(u)=(u_i)$. Thus $\Phi$ is fully faithful. [F6, step 2.1, step 5.1]

7.1 By steps 5.1 and 6.1 the functor $\Phi$ is an equivalence of groupoids, which is the asserted effective Zariski descent. The same argument applies to a first-order thickening $S\hookrightarrow S'$ and a flat $S$-scheme $X$ by considering flat $S'$-schemes $X'$ equipped with $X'\times_{S'}S\cong X$; [F1] applies to this specified flat lift, without choosing or asserting a retraction $S'\to S$. The proof never uses separatedness, quasi-finiteness, or the local finite presentation convention. The Axiom of Choice is used only through the cited gluing and fibre-product suppliers. [F1, step 4.1, step 5.1, step 6.1] ∎
