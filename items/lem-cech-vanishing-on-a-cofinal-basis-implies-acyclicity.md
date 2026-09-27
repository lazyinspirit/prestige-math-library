---
id: "lem-cech-vanishing-on-a-cofinal-basis-implies-acyclicity"
kind: "lemma"
title: "Cofinal Čech vanishing implies derived acyclicity"
status: published
origin: pipeline
deps: [thm-abelian-sheaves-have-enough-injectives, thm-long-exact-sequence-sheaf-cohomology, thm-long-exact-sequence-in-cohomology, def-cech-cohomology-open-cover, def-axiom-of-choice, lem-injective-sheaves-flasque, thm-flasque-sheaves-acyclic, thm-leray-acyclic-cover-theorem, def-sheaf-cohomology-derived-global-sections, thm-exactness-of-sheaves-stalkwise, def-kernel-cokernel-image-sheaves, def-cech-cochain-complex-open-cover, thm-zero-sheaf-cohomology-global-sections, lem-cech-h0-global-sections, thm-choice-implies-dependent-implies-countable-choice, def-flasque-sheaf, def-injective-object, lem-cech-differential-squares-zero]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "The Stacks Project, Cohomology of Sheaves"
      url: https://stacks.math.columbia.edu/download/cohomology.pdf
verification:
  audited: 2026-09-27
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $X$ be a
topological space, let $\mathcal B$ be a basis of the topology of $X$ which
contains $X$ and is closed under finite intersections, and let $\mathrm{Cov}$ be
an assignment to every $U\in\mathcal B$ of a nonempty family
$\mathrm{Cov}(U)$ of finite open covers of $U$ which is **cofinal**, in the sense
that every open cover of $U$ has a refinement in $\mathrm{Cov}(U)$, and such
that for every $\mathcal U\in\mathrm{Cov}(U)$ every finite intersection of
members of $\mathcal U$ belongs to $\mathcal B$. Let $\mathcal F$ be a sheaf of
abelian groups on $X$ whose positive Čech cohomology vanishes for these covers:
	$$\check H^p(\mathcal U,\mathcal F)=0\qquad\text{for every }U\in\mathcal B,\ \mathcal U\in\mathrm{Cov}(U)\text{ and }p>0$$
([[def-cech-cohomology-open-cover]]). Then
$$H^q(U,\mathcal F|_U)=0\qquad\text{for every }U\in\mathcal B\text{ and every }q>0,$$
where $H^q(U,-)$ is sheaf cohomology on the space $U$
([[def-sheaf-cohomology-derived-global-sections]]).

## Facts & Assumptions

[F1] The Čech cohomology of a fixed cover is $\check H^p(\mathcal U,\mathcal G)=\ker\delta^p/\operatorname{im}\delta^{p-1}$ ([[def-cech-cohomology-open-cover]]).

[F2] The Čech construction is functorial in the sheaf: a morphism $\varphi:\mathcal G\to\mathcal H$ induces componentwise cochain maps $C^p(\mathcal U,\varphi)$ commuting with the differentials ([[def-cech-cochain-complex-open-cover]]).

[F3] Assuming AC, $\mathrm{Ab}(X)$ has enough injectives and every abelian sheaf on $X$ admits an injective resolution, indeed one supplied functorially with no further selection ([[thm-abelian-sheaves-have-enough-injectives]]).

[F4] $\check H^p(\mathcal U,\mathcal G)$ is the cohomology of a cochain complex, so $\check H^1(\mathcal U,\mathcal G)=\ker\delta^1/\operatorname{im}\delta^0$ and a $1$-cocycle is a coboundary exactly when it is a Čech coboundary ([[def-cech-cohomology-open-cover]], [[lem-cech-differential-squares-zero]]).

[F5] If $\varphi:\mathcal G\to\mathcal H$ is an epimorphism of sheaves, then the induced maps on stalks are surjective, so every section of $\mathcal H$ over an open set is locally in the image of $\varphi$ ([[thm-exactness-of-sheaves-stalkwise]]).

[F6] The kernel of a morphism of sheaves is computed objectwise: $\ker(\varphi)(U)=\ker(\varphi_U)$, and the cokernel sheaf is the sheafification of the objectwise cokernel, so the quotient $\mathcal Q=\mathcal I/\mathcal F$ is characterised by the exactness of $0\to\mathcal F\to\mathcal I\to\mathcal Q\to0$ ([[def-kernel-cokernel-image-sheaves]]).

[F7] An injective object of $\mathrm{Ab}(X)$ is flasque ([[lem-injective-sheaves-flasque]]), and a flasque sheaf has $H^q(W,\mathcal I|_W)=0$ for every open $W$ and every $q>0$ ([[thm-flasque-sheaves-acyclic]]).

[F8] If every nonempty finite intersection of the members of an ordered cover of $U$ is $\mathcal G$-acyclic, then the canonical map $\check H^p(\mathcal U,\mathcal G)\to H^p(U,\mathcal G|_U)$ is an isomorphism for every $p$ ([[thm-leray-acyclic-cover-theorem]]).

[F9] A short exact sequence of abelian sheaves on a topological space $Y$ induces a natural long exact sequence $H^q(Y,\mathcal F')\to H^q(Y,\mathcal F)\to H^q(Y,\mathcal F'')\xrightarrow{\partial^q}H^{q+1}(Y,\mathcal F')$, natural in the short exact sequence ([[thm-long-exact-sequence-sheaf-cohomology]]).

[F10] $\check H^0(\mathcal U,\mathcal G)\cong\Gamma(X,\mathcal G)$ for any order-$0$ Čech cohomology of a cover, and $H^0(U,\mathcal G|_U)\cong\Gamma(U,\mathcal G|_U)$ ([[lem-cech-h0-global-sections]], [[thm-zero-sheaf-cohomology-global-sections]]).

[F12] A short exact sequence of cochain complexes induces a long exact sequence of their cohomology groups ([[thm-long-exact-sequence-in-cohomology]]).

[F11] The Axiom of Choice implies the Axiom of Dependent Choice, $\mathrm{AC}\Longrightarrow\mathrm{DC}$ ([[thm-choice-implies-dependent-implies-countable-choice]]), so the resolution and long exact sequence machinery resting on choice is available.

## Proof

**Given:** A topological space $X$, a basis $\mathcal B$ with its cofinal families $\mathrm{Cov}(U)$ of finite covers, and an abelian sheaf $\mathcal F$ with $\check H^p(\mathcal U,\mathcal F)=0$ for all $p>0$, all $U\in\mathcal B$ and all $\mathcal U\in\mathrm{Cov}(U)$.

1.1 By [F3] the sheaf $\mathcal F$ embeds into an injective sheaf $\mathcal I$, the transfinite construction behind [F3] using the Axiom of Dependent Choice, which is available by [F11]; put $\mathcal Q:=\mathcal I/\mathcal F$, so that $0\to\mathcal F\to\mathcal I\to\mathcal Q\to0$ is exact, with $\mathcal F$ the kernel of $\mathcal I\to\mathcal Q$ and $\mathcal Q$ the cokernel by [F6]. The morphism $\mathcal I\to\mathcal Q$ is an epimorphism of sheaves, so by [F5] its stalk maps are surjective and every section of $\mathcal Q$ over an open set is locally in its image. [F3, F5, F6, F11]

2.1 Let $U\in\mathcal B$ and $s\in\mathcal Q(U)$. Since $\mathcal I\to\mathcal Q$ is an epimorphism, for every $x\in U$ the germ $s_x$ lies in the image of $\mathcal I_x\to\mathcal Q_x$ by [F5], and because equality of germs of sections of a sheaf is a local condition there is an open neighbourhood $W_x\subseteq U$ of $x$ and $t_x\in\mathcal I(W_x)$ with image $s|_{W_x}$; the family $(W_x)_{x\in U}$ is an open cover of $U$ and each $s|_{W_x}$ is the image of a section of $\mathcal I$ over $W_x$. By cofinality of $\mathrm{Cov}(U)$ this cover has a refinement $\mathcal U=(U_i)_{i\in I}\in\mathrm{Cov}(U)$: for every $i$ the member $U_i$ is contained in some $W_x$, and restricting the corresponding $t_x$ yields $t_i\in\mathcal I(U_i)$ with image $s|_{U_i}$. The cover $\mathcal U$ is finite and every finite intersection of its members lies in $\mathcal B$ by hypothesis, and $\check H^1(\mathcal U,\mathcal F)=0$. [F5, step 1.1]

3.1 With the data of [step 2.1], the sections $s_{ij}:=t_j|_{U_i\cap U_j}-t_i|_{U_i\cap U_j}$ for $i<j$ take values in $\mathcal F(U_i\cap U_j)$, because both $t_j$ and $t_i$ map to $s$ on the overlap and $\mathcal F$ is the kernel of $\mathcal I\to\mathcal Q$ by [F6]; the alternating family $s_\bullet$ indexed by increasing pairs is a Čech $1$-cocycle, since it is the Čech differential of the $0$-cochain $t_\bullet$ with values in $\mathcal I$, so its Čech differential vanishes by [F4]. Because $\check H^1(\mathcal U,\mathcal F)=\ker\delta^1/\operatorname{im}\delta^0$ is zero by hypothesis and by [F1], it is a Čech coboundary: there are $\tau_i\in\mathcal F(U_i)$ with $s_{ij}=\tau_j|_{U_i\cap U_j}-\tau_i|_{U_i\cap U_j}$ by [F4]. The sections $t_i-\tau_i\in\mathcal I(U_i)$ then satisfy $(t_j-\tau_j)|=t_j|-\tau_j|=t_i|-\tau_i|=(t_i-\tau_i)|$ on each overlap, so they glue to a section $t\in\mathcal I(U)$; since each $\tau_i$ lies in $\mathcal F$ and hence maps to $0$ in $\mathcal Q$, the image of $t$ is the family $(s|_{U_i})_i$, that is, $t$ is a lift of $s$ to $\mathcal I(U)$. Therefore $\mathcal I(U)\to\mathcal Q(U)$ is surjective for every $U\in\mathcal B$. [F1, F4, F6, step 2.1]

4.1 Fix $U\in\mathcal B$ and $\mathcal U\in\mathrm{Cov}(U)$. Every finite intersection $W$ of members of $\mathcal U$ lies in $\mathcal B$ by hypothesis, so $\mathcal I(W)\to\mathcal Q(W)$ is surjective by [step 3.1]; taking products over the finitely many tuples of the finite cover, the induced map of Čech complexes $C^\bullet(\mathcal U,\mathcal I)\to C^\bullet(\mathcal U,\mathcal Q)$ is surjective in each degree, and by functoriality [F2] the sequence $0\to C^\bullet(\mathcal U,\mathcal F)\to C^\bullet(\mathcal U,\mathcal I)\to C^\bullet(\mathcal U,\mathcal Q)\to0$ of cochain complexes is exact. Next, $\check H^p(\mathcal U,\mathcal I)=0$ for $p>0$: an injective sheaf is flasque by [F7] and hence $\Gamma$-acyclic on every open subspace by [F7], so every nonempty finite intersection of members of $\mathcal U$ is $\mathcal I$-acyclic and the Leray theorem [F8] identifies $\check H^p(\mathcal U,\mathcal I)$ with $H^p(U,\mathcal I|_U)=0$. From the long exact sequence of the short exact sequence of complexes [F4, F12] we get $\check H^1(\mathcal U,\mathcal Q)\hookrightarrow\check H^2(\mathcal U,\mathcal F)=0$ and isomorphisms $\check H^p(\mathcal U,\mathcal Q)\cong\check H^{p+1}(\mathcal U,\mathcal F)$ for $p\ge1$, so $\check H^p(\mathcal U,\mathcal Q)=0$ for every $p>0$. Thus $\mathcal Q$ satisfies the same Čech vanishing hypothesis as $\mathcal F$, for the same basis and the same cofinal families. [F2, F7, F8, F12, step 3.1]

4.2 Let $U\in\mathcal B$. The short exact sequence $0\to\mathcal F\to\mathcal I\to\mathcal Q\to0$ restricted to $U$ gives by [F9] the exact sequence $H^0(U,\mathcal I|_U)\to H^0(U,\mathcal Q|_U)\to H^1(U,\mathcal F|_U)\to H^1(U,\mathcal I|_U)$; here $H^0(U,\mathcal I|_U)=\mathcal I(U)$ and $H^0(U,\mathcal Q|_U)=\mathcal Q(U)$ by [F10], so the first map is the surjection of [step 3.1], and $H^1(U,\mathcal I|_U)=0$ because $\mathcal I$ is injective, hence flasque, hence acyclic on the open subspace $U$ by [F7]. Exactness therefore forces $H^1(U,\mathcal F|_U)=0$. [F7, F9, F10, step 3.1]

5.1 We prove by induction on $n\ge1$ the statement $P(n)$: for every abelian sheaf $\mathcal G$ satisfying the Čech vanishing hypothesis of the lemma, $H^q(U,\mathcal G|_U)=0$ for all $U\in\mathcal B$ and all $1\le q\le n$. The case $n=1$ is [step 4.2], whose proof used only that hypothesis, the basis and the cofinal families. For the induction step let $\mathcal G$ satisfy the hypothesis; the argument of [step 1.1], [step 2.1] and [step 4.1] applied to $\mathcal G$ in place of $\mathcal F$ produces an injective $\mathcal I_{\mathcal G}$ with quotient $\mathcal G'=\mathcal I_{\mathcal G}/\mathcal G$ that again satisfies the Čech vanishing hypothesis, and the long exact sequence gives $H^{n+1}(U,\mathcal G|_U)\cong H^n(U,\mathcal G'|_U)$ for every $U\in\mathcal B$, because the neighbouring term $H^{n+1}(U,\mathcal I_{\mathcal G}|_U)$ vanishes by acyclicity of injectives [F7]. By $P(n)$ applied to $\mathcal G'$ the group on the right is $0$, so $H^{n+1}(U,\mathcal G|_U)=0$ and $P(n+1)$ holds. Induction gives $H^q(U,\mathcal F|_U)=0$ for every $q\ge1$ and every $U\in\mathcal B$. ∎ [step 4.1, step 4.2]
