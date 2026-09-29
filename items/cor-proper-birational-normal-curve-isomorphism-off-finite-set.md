---
id: cor-proper-birational-normal-curve-isomorphism-off-finite-set
kind: corollary
title: "Proper birational normal curves agree off finitely many points"
status: published
origin: pipeline
deps:
  - def-proper-morphism
  - def-locally-finite-type-and-finite-type-morphism
  - thm-proper-morphism-closed-image
  - def-birational-morphism-schemes
  - lem-birational-morphism-principal-open-isomorphism
  - lem-curve-closed-subsets-finite
  - def-dimension-noetherian-topological-space
  - def-integral-scheme
  - def-generic-point-irreducible-closed-subset
  - def-principal-distinguished-subset-of-spectrum
  - def-open-immersion-schemes
  - def-normal-noetherian-ring
  - def-integral-closure-and-integrally-closed-domain
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  references:
    - title: "The Stacks Project, Morphisms of Schemes, Lemma 29.51.5 (tag 0BAC) and Definition 29.51.1 (tag 01RO)"
      url: https://stacks.math.columbia.edu/tag/0BAC
    - title: "The Stacks Project, Varieties, Section 33.43 (tag 0A22)"
      url: https://stacks.math.columbia.edu/tag/0A22
    - title: "Ravi Vakil, The Rising Sea, 2011 public draft, §17.4 on curves"
      url: https://math.stanford.edu/~vakil/216blog/FOAGoct2111public.pdf
---

## Statement

Assume the Axiom of Choice. Let $k$ be a field and let
$$f:X\longrightarrow Y$$
be a proper birational morphism of integral $k$-schemes of finite type whose
underlying spaces have chain dimension $1$
([[def-dimension-noetherian-topological-space]]), with $Y$ normal, meaning
that every local ring $\mathcal O_{Y,y}$ is an integrally closed domain
([[def-normal-noetherian-ring]], [[def-integral-closure-and-integrally-closed-domain]]).
Then there is a finite set $F$ of closed points of $Y$ such that the
restriction of $f$ to the open subscheme $f^{-1}(Y\setminus F)\subseteq X$ is
an isomorphism onto $Y\setminus F$.

## Facts & Assumptions

**Given:** A field $k$, integral finite-type $k$-schemes $X,Y$ of chain dimension $1$ with generic points $\eta_X,\eta_Y$ ([[def-generic-point-irreducible-closed-subset]]), a proper birational morphism $f:X\to Y$ with $Y$ normal, and the Axiom of Choice.

[F1] A morphism is proper when it is separated, of finite type and universally closed. ([[def-proper-morphism]])

[F2] Finite type means locally of finite type together with quasi-compactness; locally of finite type requires compatible affine charts with a finite-type ring map. ([[def-locally-finite-type-and-finite-type-morphism]])

[F3] A proper morphism is closed, and the same holds after arbitrary base change; in particular the image of every closed subset of the source is closed in the target. ([[thm-proper-morphism-closed-image]])

[F4] A morphism $f:X\to Y$ of integral finite-type $k$-schemes is birational when $f(\eta_X)=\eta_Y$ and the stalk map $\mathcal O_{Y,\eta_Y}\to\mathcal O_{X,\eta_X}$ is an isomorphism. ([[def-birational-morphism-schemes]])

[F5] A birational morphism of integral finite-type $k$-schemes that is locally of finite type admits nonempty affine charts $U=\operatorname{Spec}A\subseteq X$ and $V=\operatorname{Spec}B\subseteq Y$ with $f(U)\subseteq V$ and an element $\sigma\in B\setminus\{0\}$ such that $f^{-1}(D(\sigma))\cap U=D(\varphi(\sigma))\to D(\sigma)$ is an isomorphism. ([[lem-birational-morphism-principal-open-isomorphism]])

[F6] Assume AC. Let $X$ be an integral finite-type $k$-scheme of chain dimension $1$. Then every proper closed subset of $X$ is a finite set of closed points of $X$, and every point other than the generic point is closed. ([[lem-curve-closed-subsets-finite]])

[F7] An integral scheme is nonempty, reduced and irreducible; every nonempty affine open is the spectrum of a domain. ([[def-integral-scheme]])

[F8] For $g$ in a commutative ring $R$, the principal distinguished subset is $D(g)=\{\mathfrak p\in\operatorname{Spec}(R):g\notin\mathfrak p\}$, the complement of $V((g))$. ([[def-principal-distinguished-subset-of-spectrum]])

[F9] A morphism $j:U\to X$ is an open immersion when it identifies $U$ isomorphically with an open subscheme of $X$. ([[def-open-immersion-schemes]])

[F10] A Noetherian ring $R$ is normal when every prime localisation $R_{\mathfrak p}$ is an integrally closed domain. ([[def-normal-noetherian-ring]])

[F11] An integrally closed domain is a domain integrally closed in its fraction field. ([[def-integral-closure-and-integrally-closed-domain]])

[F12] The Axiom of Choice states that every family of nonempty sets has a choice function. ([[def-axiom-of-choice]])



## Proof

**Proof technique:** direct: shrink a birational morphism to an isomorphism over a principal open, and absorb the two finite complements plus the image of the closed complement into a finite set of closed points.

1.1 By [F1] the morphism $f$ is of finite type, hence locally of finite type by [F2]; since $f$ is birational in the sense of [F4] and $X,Y$ are integral finite-type $k$-schemes of dimension $1$, the principal-open result [F5] applies. It provides nonempty affine open subschemes $U=\operatorname{Spec}A\subseteq X$ and $V=\operatorname{Spec}B\subseteq Y$ with $f(U)\subseteq V$, the induced ring map $\varphi:B\to A$, an element $\sigma\in B\setminus\{0\}$, and the conclusion that, with $$U_0:=D(\varphi(\sigma))=f^{-1}(D(\sigma))\cap U,\qquad V_0:=D(\sigma),$$ the restriction $f|_{U_0}:U_0\to V_0$ is an isomorphism. [F1, F2, F4, F5]

1.2 By [F7] the rings $A$ and $B$ are domains, so $\varphi(\sigma)\ne0$ in $A$ and $\sigma\ne0$ in $B$; hence $(0)\in D(\varphi(\sigma))$ and $(0)\in D(\sigma)$ by [F8], which means that $U_0$ contains the generic point $\eta_X$ of $X$ and $V_0$ contains the generic point $\eta_Y$ of $Y$. Consequently $X\setminus U_0$ and $Y\setminus V_0$ are proper closed subsets of the curves $X$ and $Y$, so by [F6] both are finite sets of closed points of $X$, respectively $Y$. [F6, F7, F8]

2.1 Put $F:=f(X\setminus U_0)\cup(Y\setminus V_0)\subseteq Y$. This is a finite set: it is the union of the finite set $Y\setminus V_0$ with the image of the finite set $X\setminus U_0$. Every point of $F$ is a closed point of $Y$: points of $Y\setminus V_0$ are closed by step 1.2, and for $z\in X\setminus U_0$ the singleton $\{z\}$ is closed in $X$ by step 1.2, so its image under the closed map $f$ of [F3] is closed in $Y$; that image is $\{f(z)\}$, so $f(z)$ is a closed point of $Y$. [F3, step 1.2]

3.1 Let $y\in Y\setminus F$. Then $y\in V_0$, because $F$ contains the complement $Y\setminus V_0$, and $y\notin f(X\setminus U_0)$. If $x\in X$ satisfies $f(x)=y$, then $x\notin X\setminus U_0$ and therefore $x\in U_0$; hence $$f^{-1}(Y\setminus F)\subseteq U_0.$$ Since $f(U_0)=V_0$ and $Y\setminus F\subseteq V_0$, the scheme $f^{-1}(Y\setminus F)$ is the inverse image under the isomorphism $f|_{U_0}:U_0\to V_0$ of the open subscheme $Y\setminus F$ of $V_0$ ([[def-open-immersion-schemes]] [F9]), so the restriction of $f|_{U_0}$ to it is an isomorphism $f^{-1}(Y\setminus F)\to Y\setminus F$. [F9, step 1.1, step 2.1]

4.1 Steps 2.1 and 3.1 exhibit the finite set $F$ of closed points of $Y$ whose removal makes $f$ an isomorphism, which is the claim. The normality hypothesis of [F10] and [F11] is not used in the argument: the chart computation of [F5] only needs $Y$ reduced, which integrality provides, and normality is a stronger hypothesis than the statement requires. The Axiom of Choice [F12] is used exactly through the curve lemma [F6] at step 1.2, whose proof assumes it; the remaining steps select nothing from an infinite family. If $F=\varnothing$ the conclusion says that $f$ is already an isomorphism, and the argument still applies because the displayed sets may be empty. ∎ [F6, F10, F11, F12, step 2.1, step 3.1]
