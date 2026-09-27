---
id: "thm-mayer-vietoris-sheaf-cohomology"
kind: "theorem"
title: "Mayer–Vietoris sequence for sheaf cohomology"
status: draft
origin: pipeline
deps: [lem-two-open-cover-cech-complex, lem-injective-sheaves-flasque, thm-flasque-sheaves-acyclic, thm-long-exact-sequence-in-cohomology, def-sheaf-cohomology-derived-global-sections, def-axiom-of-choice, thm-abelian-sheaves-have-enough-injectives, thm-acyclic-resolution-theorem-for-right-derived-functors, thm-choice-implies-dependent-implies-countable-choice, thm-zero-sheaf-cohomology-global-sections, def-global-sections-functor-sheaves, lem-global-sections-left-exact, def-sheaf-on-topological-space, def-injective-object, lem-cohomology-functoriality-sheaf-and-space, def-restriction-sheaf-open-subspace, thm-extension-by-zero-adjunction-exactness]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "The Stacks Project, Cohomology of Sheaves"
      url: https://stacks.math.columbia.edu/download/cohomology.pdf
    - title: "The Stacks Project, Section 6.31 (Tag 009Z), extension by zero adjunction"
      url: https://stacks.math.columbia.edu/tag/009Z
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $X$ be a
topological space, let $\mathcal F$ be a sheaf of abelian groups on $X$ and let
$U,V\subseteq X$ be open subsets with $X=U\cup V$. Let $I^\bullet$ be the
supplied functorial injective resolution of $\mathcal F$
([[thm-abelian-sheaves-have-enough-injectives]],
[[def-sheaf-cohomology-derived-global-sections]]), so that
$H^q(X,\mathcal F)=H^q\bigl(\Gamma(X,I^\bullet)\bigr)$, and likewise for the
restrictions of $\mathcal F$ to the open subspaces $U$, $V$ and $U\cap V$
([[def-restriction-sheaf-open-subspace]]). Then the restriction maps
$$\Gamma(X,I^q)\longrightarrow\Gamma(U,I^q)\oplus\Gamma(V,I^q),\qquad \Gamma(U,I^q)\oplus\Gamma(V,I^q)\longrightarrow\Gamma(U\cap V,I^q)$$
given by $s\mapsto(s|_U,s|_V)$ and $(s_U,s_V)\mapsto s_V|_{U\cap V}-s_U|_{U\cap V}$
are the maps of a short exact sequence of cochain complexes, and the resulting
long exact sequence of cohomology, read through the identification of
$H^\bullet(U,\mathcal F|_U)$, $H^\bullet(V,\mathcal F|_V)$ and
$H^\bullet(U\cap V,\mathcal F|_{U\cap V})$ with the cohomology of the
restricted resolutions, is the natural **Mayer–Vietoris sequence**
$$0\to H^0(X,\mathcal F)\to H^0(U,\mathcal F|_U)\oplus H^0(V,\mathcal F|_V)\to H^0(U\cap V,\mathcal F|_{U\cap V})\xrightarrow{\ \partial\ }H^1(X,\mathcal F)\to\cdots,$$
that is, the full sequence
$\cdots\to H^q(X,\mathcal F)\to H^q(U,\mathcal F|_U)\oplus H^q(V,\mathcal F|_V)\to H^q(U\cap V,\mathcal F|_{U\cap V})\xrightarrow{\partial}H^{q+1}(X,\mathcal F)\to\cdots$
is exact and natural in $\mathcal F$; the second displayed map in degree $0$ is
the difference of restrictions appearing as the differential
$\delta^0(s_U,s_V)=s_V|_{U\cap V}-s_U|_{U\cap V}$ of the two-open Čech complex
([[lem-two-open-cover-cech-complex]]), and the maps
$H^q(X,\mathcal F)\to H^q(U,\mathcal F|_U)\oplus H^q(V,\mathcal F|_V)$ are the
restriction maps of [[lem-cohomology-functoriality-sheaf-and-space]].

## Facts & Assumptions

[F1] If sections $s_i\in\mathcal F(U_i)$ of a sheaf satisfy $s_i|_{U_i\cap U_j}=s_j|_{U_i\cap U_j}$ for all $i,j$, then they glue to a section on the union, uniquely ([[def-sheaf-on-topological-space]]).

[F2] Restrictions of a global section determine it: if $s,t\in\mathcal F(U)$ satisfy $s|_{U_i}=t|_{U_i}$ for all members of a cover of $U$, then $s=t$ ([[def-sheaf-on-topological-space]]).

[F3] An injective object of $\mathrm{Ab}(X)$ is flasque: for all open $U\subseteq V\subseteq X$ the restriction map $\mathcal I(V)\to\mathcal I(U)$ is surjective ([[lem-injective-sheaves-flasque]]).

[F4] A flasque sheaf satisfies $H^q(W,\mathcal I|_W)=0$ for every open $W$ and every $q>0$, so a flasque sheaf is acyclic on every open subspace ([[thm-flasque-sheaves-acyclic]]).

[F5] A short exact sequence of cochain complexes gives a natural long exact sequence in cohomology ([[thm-long-exact-sequence-in-cohomology]]).

[F6] The acyclic resolution theorem identifies $R_I^nF(A)$ with $H^n(F(J^\bullet_{\mathrm{del}}))$ for an $F$-acyclic resolution $J^\bullet$, under the Axiom of Dependent Choice, provided the resolved object and every cycle belong to the domain of the supplied injective datum ([[thm-acyclic-resolution-theorem-for-right-derived-functors]]).

[F7] $H^q(X,\mathcal F)=R_I^q\Gamma(X,\mathcal F)=H^q\bigl(\Gamma(X,I^\bullet(\mathcal F)_{\mathrm{del}})\bigr)$ for the supplied functorial injective resolution ([[def-sheaf-cohomology-derived-global-sections]]).

[F8] The Axiom of Choice is available and implies the Axiom of Dependent Choice, $\mathrm{AC}\Longrightarrow\mathrm{DC}$ ([[thm-choice-implies-dependent-implies-countable-choice]]), so the acyclic resolution theorem can be applied ([[thm-acyclic-resolution-theorem-for-right-derived-functors]]).

[F9] The two-open Čech complex has $\delta^0(s_U,s_V)=s_V|_{U\cap V}-s_U|_{U\cap V}$ as its only possibly nonzero differential ([[lem-two-open-cover-cech-complex]]).

[F10] $H^0(X,\mathcal F)\cong\Gamma(X,\mathcal F)$ canonically and naturally in $\mathcal F$ ([[thm-zero-sheaf-cohomology-global-sections]]).

[F11] For an open inclusion $j:W\hookrightarrow X$, extension by zero $j_!$ on abelian sheaves is exact and left adjoint to restriction $j^{-1}$ ([[thm-extension-by-zero-adjunction-exactness]]). Thus restriction preserves injectives: for a monomorphism $A\hookrightarrow B$ on $W$, exactness gives $j_!A\hookrightarrow j_!B$, and injectivity of $I$ extends any map $j_!A\to I$ to $j_!B\to I$; adjunction gives the extension $A\to I|_W$ to $B\to I|_W$.

## Proof

**Given:** A topological space $X$, a sheaf of abelian groups $\mathcal F$ on $X$, open subsets $U,V\subseteq X$ with $X=U\cup V$, and the supplied functorial injective resolution $I^\bullet$ of $\mathcal F$.

1.1 Fix $q\ge0$ and consider the sequence of abelian groups $0\to\Gamma(X,I^q)\xrightarrow{\ \alpha\ }\Gamma(U,I^q)\oplus\Gamma(V,I^q)\xrightarrow{\ \beta\ }\Gamma(U\cap V,I^q)\to0$ with $\alpha(s):=(s|_U,s|_V)$ and $\beta(s_U,s_V):=s_V|_{U\cap V}-s_U|_{U\cap V}$. It is exact: $\alpha$ is injective because the restrictions to $U$ and to $V$ determine a section of the sheaf $I^q$ by [F2] and $U\cup V=X$; the kernel of $\beta$ consists of the pairs $(s_U,s_V)$ with equal restrictions, which glue to a section of $I^q$ over $X=U\cup V$ by [F1], so it equals the image of $\alpha$; and $\beta$ is surjective because $I^q$ is injective, hence flasque by [F3], so the restriction $\Gamma(U,I^q)\to\Gamma(U\cap V,I^q)$ is onto and a preimage $s_U$ of a given $t$ gives $\beta(-s_U,0)=0-(-t)=t$. [F1, F2, F3]

2.1 The maps $\alpha$ and $\beta$ commute with the differentials $d^q$ of $I^\bullet$, which are morphisms of sheaves, so degreewise they form a short exact sequence $0\to\Gamma(X,I^\bullet)\to\Gamma(U,I^\bullet)\oplus\Gamma(V,I^\bullet)\to\Gamma(U\cap V,I^\bullet)\to0$ of cochain complexes; moreover the whole construction is natural in the sheaf, since the supplied resolutions are functorial. Applying [F5] gives the natural long exact sequence $\cdots\to H^q(\Gamma(X,I^\bullet))\to H^q(\Gamma(U,I^\bullet))\oplus H^q(\Gamma(V,I^\bullet))\to H^q(\Gamma(U\cap V,I^\bullet))\xrightarrow{\ \partial\ }H^{q+1}(\Gamma(X,I^\bullet))\to\cdots$ of the cohomology of these three complexes. [F5, step 1.1]

3.1 The middle and right complexes compute sheaf cohomology on the open subspaces: the restriction $I^\bullet|_W$ of the injective resolution to an open $W\subseteq X$ is a resolution of $\mathcal F|_W$ (restriction is exact) by objects which are injective by [F11], hence flasque by [F3] and acyclic on every open by [F4], and it is even acyclic for the functor $\Gamma(W,-)$ there. The supplied datum on $\mathrm{Ab}(W)$ covers every abelian sheaf, including $\mathcal F|_W$ and all cycles of this restricted resolution. Hence by the acyclic resolution theorem [F6], whose choice hypothesis is available through [F8], $H^q(\Gamma(W,I^\bullet))\cong H^q(W,\mathcal F|_W)$ for $W\in\{U,V,U\cap V\}$ and every $q\ge0$; on the left $H^q(\Gamma(X,I^\bullet))=H^q(X,\mathcal F)$ by definition [F7]. Substituting these identifications into the sequence of [step 2.1] yields the exact sequence of the statement, whose degree-zero middle map is by construction the difference of restrictions displayed in [F9]; the identification in degree zero with global sections is [F10]. [F4, F6, F7, F8, F9, F10, F11, step 2.1]

4.1 Collecting: [step 1.1] provides the degreewise short exact sequence, [step 2.1] the long exact cohomology sequence and its naturality, and [step 3.1] the identification of its terms with sheaf cohomology on $X$, $U$, $V$ and $U\cap V$; the left end $0\to H^0(X,\mathcal F)$ is the injectivity statement inside [step 1.1] read in degree zero. This proves the theorem. ∎ [step 3.1]
