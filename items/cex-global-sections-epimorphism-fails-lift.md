---
id: "cex-global-sections-epimorphism-fails-lift"
kind: "counterexample"
title: "A global section of the quotient that does not lift, and its nonzero connecting class"
status: draft
origin: pipeline
deps: [thm-long-exact-sequence-sheaf-cohomology, thm-zero-sheaf-cohomology-global-sections, def-sheaf-cohomology-derived-global-sections, thm-abelian-sheaves-have-enough-injectives, def-axiom-of-choice, thm-choice-implies-dependent-implies-countable-choice, def-sheafification, thm-sheafification-preserves-stalks, thm-exactness-of-sheaves-stalkwise, def-exact-sequence-sheaves, lem-filtered-colimits-of-abelian-groups-are-exact, lem-constant-sheaf-is-the-sheaf-of-locally-constant-functions, def-circle-as-real-line-mod-integers, def-quotient-topology, def-connected-space, cor-connected-subsets-of-the-line, def-sheaf-on-topological-space, def-continuous-map-top, def-stalk-of-presheaf, def-subspace-topology-top, def-germ-of-section, thm-abelian-sheaves-form-abelian-category, def-kernel-cokernel-image-sheaves, thm-continuous-image-of-a-connected-space]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
sources:
  references:
    - title: "Ravi Vakil, The Rising Sea, Exercise 2.6.F"
      url: https://math.stanford.edu/~vakil/216blog/FOAGnov1817public.pdf
    - title: "The Stacks Project, Cohomology of Sheaves"
      url: https://stacks.math.columbia.edu/download/cohomology.pdf
---

## Statement refuted

Assume the Axiom of Choice ([[def-axiom-of-choice]]).

Let $S^1=\mathbb R/\mathbb Z$ be the circle with quotient map $p$
([[def-circle-as-real-line-mod-integers]]), let $\mathcal C$ be the sheaf of
continuous real-valued functions on $S^1$, let $\underline{\mathbb Z}$ be the
subsheaf of locally constant integer-valued functions, that is the constant
sheaf with value $\mathbb Z$
([[lem-constant-sheaf-is-the-sheaf-of-locally-constant-functions]]), and let
$\mathcal Q$ be the sheafification of the presheaf quotient
$V\mapsto\mathcal C(V)/\underline{\mathbb Z}(V)$, so that the induced map of
sheaves $\mathcal C\to\mathcal Q$ is an epimorphism. The claim that the induced
map on global sections
$$\Gamma(S^1,\mathcal C)\longrightarrow\Gamma(S^1,\mathcal Q)$$
is surjective is refuted. The refutation exhibits a global section
$q\in\Gamma(S^1,\mathcal Q)$ with no preimage, glued from the two angle branches
over the arcs $U_0=p\bigl((-1/2,1/2)\bigr)$ and $U_1=p\bigl((0,1)\bigr)$, and
shows that its connecting class
$\partial(q)\in H^1(S^1,\underline{\mathbb Z})$ in the long exact sequence of
the short exact sequence $0\to\underline{\mathbb Z}\to\mathcal C\to\mathcal
Q\to0$ is nonzero; in particular $H^1(S^1,\underline{\mathbb Z})\ne0$, so the
degree one cohomology of the constant sheaf $\mathbb Z$ on the circle does not
vanish.

## Facts & Assumptions

[F2] A short exact sequence of abelian sheaves on $X$ gives a natural long exact sequence $\cdots\to H^q(X,\mathcal F')\to H^q(X,\mathcal F)\to H^q(X,\mathcal F'')\xrightarrow{\partial^q}H^{q+1}(X,\mathcal F')\to\cdots$ ([[thm-long-exact-sequence-sheaf-cohomology]]).

[F3] $H^0(X,\mathcal F)$ is canonically isomorphic to the global sections $\Gamma(X,\mathcal F)$, naturally in $\mathcal F$ ([[thm-zero-sheaf-cohomology-global-sections]]).

[F4] A sequence of sheaves is exact at a term when the image sheaf of the incoming morphism equals the kernel sheaf of the outgoing one ([[def-exact-sequence-sheaves]]).

[F5] A sequence of sheaves of abelian groups is exact if and only if all of its stalk sequences are exact ([[thm-exactness-of-sheaves-stalkwise]]).

[F6] Sheafification induces a bijection on every stalk, $\eta_{\mathcal F,x}:\mathcal F_x\to(a\mathcal F)_x$ ([[thm-sheafification-preserves-stalks]], [[def-sheafification]]).

[F7] The filtered colimit functor on abelian groups is exact, so the colimit of a filtered diagram of short exact sequences of abelian groups is short exact ([[lem-filtered-colimits-of-abelian-groups-are-exact]]).

[F8] The constant sheaf with value $\mathbb Z$ is the sheaf of locally constant $\mathbb Z$-valued functions, $\underline{\mathbb Z}(U)=\{f:U\to\mathbb Z\text{ locally constant}\}$ ([[lem-constant-sheaf-is-the-sheaf-of-locally-constant-functions]]).

[F9] The circle is $S^1=\mathbb R/\mathbb Z$ with the quotient topology induced by $p(x)=[x]$ ([[def-circle-as-real-line-mod-integers]]), so a subset of $S^1$ is open exactly when its preimage under $p$ is open in $\mathbb R$ ([[def-quotient-topology]]).

[F10] Each interval form is a connected subset of the real line ([[cor-connected-subsets-of-the-line]]), and a continuous image of a connected set is connected ([[thm-continuous-image-of-a-connected-space]]).

[F11] $X$ is connected exactly when it admits no separation, that is, no pair of open, nonempty, disjoint subsets with union $X$ ([[def-connected-space]]).

[F12] For a sheaf of abelian groups on $X$ the sequence of sheaves $0\to\mathcal F'\to\mathcal F\to\mathcal F''\to0$ is exact exactly when every stalk sequence $0\to\mathcal F'_x\to\mathcal F_x\to\mathcal F''_x\to0$ is exact, since exactness of a sequence of sheaves is tested stalkwise [F5]; the last map is an epimorphism when it is stalkwise surjective, the cokernel sheaf being the sheafification of the presheaf cokernel ([[def-kernel-cokernel-image-sheaves]]).

[F13] In ZF the Axiom of Choice implies the Axiom of Dependent Choice ([[thm-choice-implies-dependent-implies-countable-choice]]).

## Counterexample

**Given:** The circle $S^1=\mathbb R/\mathbb Z$ with quotient map $p$, the sheaves $\mathcal C$, $\underline{\mathbb Z}$ and $\mathcal Q$ of the statement, the two arcs $U_0=p((-1/2,1/2))$ and $U_1=p((0,1))$, and the sections $\theta_i$ inverse to $p$ over the corresponding intervals.

1.1 The sequence $$0\to\underline{\mathbb Z}\to\mathcal C\to\mathcal Q\to0$$ is short exact, where the first map is the inclusion of locally constant integer-valued functions and the second is induced by the presheaf quotient maps $\mathcal C(V)\to\mathcal C(V)/\underline{\mathbb Z}(V)$ followed by sheafification. The kernel of the second map is $\underline{\mathbb Z}$: its stalk at $x$ is computed from the stalk of $\mathcal Q$, which is the colimit of the groups $\mathcal C(V)/\underline{\mathbb Z}(V)$ over the filtered neighbourhood system of $x$ by [F6], and this colimit is $\mathcal C_x/\underline{\mathbb Z}_x$ because filtered colimits of abelian groups are exact [F7]; hence the stalk of the kernel is $\underline{\mathbb Z}_x$ for every $x$, and kernels of sheaf morphisms are computed stalkwise [F12]. The second map is an epimorphism with the same stalkwise computation, its stalk at $x$ being the surjection $\mathcal C_x\to\mathcal C_x/\underline{\mathbb Z}_x$; by [F5] and [F4] the displayed sequence is short exact. [F4, F5, F6, F7, F12]

1.2 Put $A:=(-1/2,1/2)$ and $B:=(0,1)$ and $U_0:=p(A)$, $U_1:=p(B)$. Both are open in $S^1$, because $p^{-1}(U_0)=A+\mathbb Z$ and $p^{-1}(U_1)=B+\mathbb Z$ are unions of open intervals, hence open in $\mathbb R$ [F9]. Both are connected, being continuous images under $p$ of the intervals $A$ and $B$ [F10]. Their union is $S^1$: every real number is congruent modulo $\mathbb Z$ to a point of $A\cup B=(-1/2,1)$, so every class in $S^1$ lies in $U_0\cup U_1$. Their intersection is $p(A\cap(B+\mathbb Z))=p\bigl((-1/2,0)\cup(0,1/2)\bigr)=p((1/2,1))\cup p((0,1/2))$, a union of two disjoint nonempty open connected subsets, so $U_0\cap U_1$ has exactly these two connected components; neither of them meets the other since they are disjoint and open, so every connected subset of the intersection lies in one of them [F11]. [F9, F10, F11]

2.1 On a connected open subset of $S^1$ every locally constant $\mathbb Z$-valued function is constant: its fibres are open, pairwise disjoint and cover the set, and two nonempty fibres would exhibit a separation [F11]; so by [F8] the sections of $\underline{\mathbb Z}$ over $U_0$ and over $U_1$ are the constant integer functions, $\underline{\mathbb Z}(U_0)\cong\mathbb Z$ and $\underline{\mathbb Z}(U_1)\cong\mathbb Z$, while over the two-component intersection $\underline{\mathbb Z}(U_0\cap U_1)\cong\mathbb Z\times\mathbb Z$, a locally constant function on the intersection being determined by, and arbitrary on, the two components of [step 1.2]. [F8, F11, step 1.2]

2.2 Let $\theta_0:U_0\to A$ and $\theta_1:U_1\to B$ be the inverses of the bijections induced by $p$ on $A$ and $B$; they are continuous because $p$ is a quotient map and these are homeomorphisms onto their images [F9]. On $U_0\cap U_1$ the difference $\theta_1-\theta_0$ is a continuous integer-valued function: the two lifts of a point of the intersection differ by an integer, and on $p((0,1/2))$ both lifts lie in $(0,1/2)$, giving the value $0$, while on $p((1/2,1))$ the lift in $B$ is the lift in $A$ shifted by $1$, giving the value $1$. Hence $\theta_0$ and $\theta_1$ have the same image in $\mathcal Q(U_0\cap U_1)$, since their difference lies in $\underline{\mathbb Z}(U_0\cap U_1)$, and the sheaf axiom for $\mathcal Q$ over the cover $S^1=U_0\cup U_1$ glues them to a global section $$q\in\Gamma(S^1,\mathcal Q),\qquad q|_{U_0}=[\theta_0],\quad q|_{U_1}=[\theta_1].$$ [F9, step 1.2]

3.1 There is no $g\in\Gamma(S^1,\mathcal C)$ with image $q$. Suppose there were. Then on each $U_i$ the difference $g|_{U_i}-\theta_i$ has zero image in $\mathcal Q(U_i)$, hence has locally constant integer values; being continuous with values in the discrete set $\mathbb Z$, it is locally constant and therefore constant on the connected set $U_i$ [step 1.2], say $g|_{U_i}-\theta_i=n_i$ with $n_i\in\mathbb Z$ by [step 2.1]. On the first component $p((0,1/2))$ of the intersection the difference $\theta_1-\theta_0$ vanishes, so $n_1-n_0=(\theta_0-\theta_1)|=0$; on the second component $p((1/2,1))$ the same difference equals $1$, so $n_1-n_0=-1$. This is impossible, so $q$ is not in the image of $\Gamma(S^1,\mathcal C)\to\Gamma(S^1,\mathcal Q)$. [step 1.2, step 2.1, step 2.2]

4.1 By [F2] applied to the short exact sequence of [step 1.1] the sequence $$\Gamma(S^1,\mathcal C)\longrightarrow\Gamma(S^1,\mathcal Q)\xrightarrow{\ \partial\ }H^1(S^1,\underline{\mathbb Z})$$ is exact, the first group being $H^0(S^1,\mathcal C)$ and the middle one $H^0(S^1,\mathcal Q)$ by [F3]; exactness at the middle group [F4] says that the image of the first map is the kernel of $\partial$. By [step 3.1] the element $q$ is not in that image, so $\partial(q)\ne0$ and $H^1(S^1,\underline{\mathbb Z})\ne0$; the section $q$ is thus an explicit witness for the failure of surjectivity asserted in the statement, and its obstruction is detected by the degree one connecting class. The Axiom of Choice enters exactly through the long exact sequence [F2], whose construction uses the supplied injective resolution datum and the Dependent Choice it requires [F13]; the computations of [step 1.2], [step 2.1], [step 2.2] and [step 3.1] use no choice principle. ∎ [F2, F3, F4, F13, step 3.1, step 1.1]

## Remarks

The failure of right exactness of the global-sections functor that the published counterexample [[cex-global-sections-not-right-exact]] records is reproved here on the circle, together with the additional positive information that the connecting class of the non-liftable section is a nonzero class in $H^1(S^1,\underline{\mathbb Z})$.
