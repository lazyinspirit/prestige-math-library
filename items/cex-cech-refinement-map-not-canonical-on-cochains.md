---
id: "cex-cech-refinement-map-not-canonical-on-cochains"
kind: "counterexample"
title: "Refinement choices differ on cochains but not on cohomology"
status: draft
origin: pipeline
deps: [def-refinement-open-cover, thm-refinement-map-independent-on-cohomology, def-cech-cohomology-open-cover, def-cech-cochain-complex-open-cover, def-compact-space, def-topological-space, lem-constant-sheaf-is-the-sheaf-of-locally-constant-functions, def-section-restriction-and-global-section, lem-increasing-cech-complex-extends-to-alternating-tuples]
generation:
  role: counterexample
provenance:
  statement: ai-generated
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "The Stacks Project, Cohomology of Sheaves"
      url: https://stacks.math.columbia.edu/download/cohomology.pdf
    - title: "J. Munkres, Topology, 2nd ed., §26 (open covers)"
      url: https://en.wikipedia.org/wiki/James_Munkres
---

## Statement refuted

Let $X$ be a nonempty topological space and let
$\mathcal F:=\underline{\mathbb Z}_X$ be the constant sheaf on $X$ with value
$\mathbb Z$ ([[lem-constant-sheaf-is-the-sheaf-of-locally-constant-functions]]).
The claim refuted is that a pair of covers of $X$ alone determines a
choice-independent refinement map on Čech cochains, that is, that any two
refinement functions $c,c'$ from a cover
$\mathcal V$ to a cover $\mathcal U$ induce the same map
$C^\bullet(\mathcal U,\mathcal F)\to C^\bullet(\mathcal V,\mathcal F)$ on the
cochain complexes. This is false: for the coarse cover
$\mathcal U=(U_0,U_1)$ with $U_0=U_1=X$ indexed by $\{0<1\}$ and the fine cover
$\mathcal V=(V_0)$ with $V_0=X$ indexed by $\{0\}$, the two maps $c(0)=0$ and
$c'(0)=1$ are both refinement functions, and the $0$-cochain
$(s_0,s_1)\in C^0(\mathcal U,\mathcal F)$ built from the two constant sections
$s_0=\theta_X(\eta_X(0))$ and $s_1=\theta_X(\eta_X(1))$ has two different
pullbacks,
$$(c^\sharp(s_0,s_1))_0=s_0\ne s_1=(c'^\sharp(s_0,s_1))_0,$$
so $c^\sharp\ne c'^\sharp$ already in degree $0$. Nevertheless the induced maps
on the fixed-cover Čech cohomology
$\check H^p(\mathcal U,\mathcal F)\to\check H^p(\mathcal V,\mathcal F)$ agree for
every $p$: the refinement maps on cohomology do not depend on the choice of the
refinement function ([[thm-refinement-map-independent-on-cohomology]]), and in
this instance both are the isomorphism $\{(a,a):a\in\mathcal F(X)\}\to
\mathcal F(X)$, $(a,a)\mapsto a$ in degree $0$ and the zero map in positive
degrees. Thus the cohomology-level refinement map is canonical while the
cochain-level refinement map is not.

## Facts & Assumptions

[F1] A refinement function from a cover $\mathcal V=(V_j)_{j\in J}$ to a cover $\mathcal U=(U_i)_{i\in I}$ is a map $c:J\to I$ of the index sets with $V_j\subseteq U_{c(j)}$ for every $j\in J$ ([[def-refinement-open-cover]]).

[F2] The Čech cochain map of a refinement function $c$ is $(c^\sharp s)_{j_0\cdots j_p}:=s_{c(j_0)\cdots c(j_p)}|_{V_{j_0}\cap\cdots\cap V_{j_p}}$, evaluated in the alternating model of both complexes ([[def-refinement-open-cover]]).

[F3] The refinement maps on cohomology do not depend on the choice of the refinement function: two refinement functions are chain homotopic and induce the same homomorphism $\check H^p(\mathcal U,\mathcal F)\to\check H^p(\mathcal V,\mathcal F)$ for every $p$ ([[thm-refinement-map-independent-on-cohomology]]).

[F4] The Čech cohomology of a fixed cover is $\check H^p(\mathcal U,\mathcal F)=\ker\delta^p/\operatorname{im}\delta^{p-1}$ ([[def-cech-cohomology-open-cover]]).

[F5] When the index set of a cover has no increasing $(p+1)$-tuple the product is empty and $C^p(\mathcal U,\mathcal F)=0$ ([[def-cech-cochain-complex-open-cover]]).

[F6] The Čech differential is $(\delta^ps)_{i_0\cdots i_{p+1}}=\sum_{j=0}^{p+1}(-1)^js_{i_0\cdots\widehat{i_j}\cdots i_{p+1}}|_{U_{i_0}\cap\cdots\cap U_{i_{p+1}}}$ ([[def-cech-cochain-complex-open-cover]]).

[F7] An open cover of $(X,\mathcal T)$ is a family $\mathcal U\subseteq\mathcal T$ of open sets with $X=\bigcup\mathcal U$ ([[def-compact-space]]).

[F8] For the constant sheaf $A_X$ with value $A$ and every open $U$, the section $\theta_U(\eta_U(a))$ is the constant function with value $a$ ([[lem-constant-sheaf-is-the-sheaf-of-locally-constant-functions]]).

[F9] For an abelian group $A$ the group structures transported along the bijections $\theta_U$ make $A_X$ a sheaf of abelian groups for which every $\eta_U$ and every $\theta_U$ is a group homomorphism ([[lem-constant-sheaf-is-the-sheaf-of-locally-constant-functions]]).

[F10] The presheaf identities give $s|_U=s$ for $s\in\mathcal F(U)$ ([[def-section-restriction-and-global-section]]).

[F11] Restriction to increasing tuples is an isomorphism $\rho^p$ of abelian groups for every $p$, so a cochain may be evaluated at an arbitrary tuple of indices and its degree zero part is unchanged ([[lem-increasing-cech-complex-extends-to-alternating-tuples]]).

[F12] In a topological space both $\varnothing$ and $X$ are open, being clopen ([[def-topological-space]]).

## Counterexample

**Given:** A nonempty topological space $X$, the constant sheaf $\mathcal F=\underline{\mathbb Z}_X$, the coarse cover $\mathcal U=(U_0,U_1)=(X,X)$ indexed by $\{0<1\}$, the fine cover $\mathcal V=(V_0)=(X)$ indexed by $\{0\}$, and the two refinement functions $c,c':\{0\}\to\{0,1\}$ with $c(0)=0$, $c'(0)=1$.

**Proof technique:** direct.

1.1 $X$ is open in $X$ [F12], so the two members of $\mathcal U=(U_0,U_1)$ are open subsets with $U_0=U_1=X$ and $\bigcup\{U_0,U_1\}=X$, and the single member of $\mathcal V=(V_0)$ is an open subset with $V_0=X$; by the definition of an open cover [F7] both $\mathcal U$ and $\mathcal V$ are covers of $X$ by open subsets, and they are indexed by the linearly ordered sets $\{0<1\}$ and $\{0\}$ respectively, so their ordered Čech cochain complexes are defined [F5, F6]. The members of $\mathcal U$ are equal, which is permitted for an indexed cover: the condition is only that every $U_i$ be open and that the union of the family be $X$, and no injectivity of the index map is required. [F5, F6, F7, F12]

1.2 The coarse cover $\mathcal U$ has $U_0\cap U_1=X$ and $U_0=U_1=X$, so $C^0(\mathcal U,\mathcal F)=\mathcal F(X)\oplus\mathcal F(X)$ and $C^1(\mathcal U,\mathcal F)=\mathcal F(X)$, while $C^p(\mathcal U,\mathcal F)=0$ for $p\ge2$ because the two-element index set $\{0<1\}$ has no increasing triple [F5]. By the differential formula [F6] with $p=0$ and the increasing pair $(0,1)$, $$(\delta^0(a,b))_{01}=(-1)^0b\big|_{U_0\cap U_1}+(-1)^1a\big|_{U_0\cap U_1}=b-a,$$ the restrictions being identities by [F10] since $U_0\cap U_1=X$; hence by [F4] $$\check H^0(\mathcal U,\mathcal F)=\ker\delta^0=\{(a,a):a\in\mathcal F(X)\}\cong\mathcal F(X),$$ the diagonal, and $\check H^1(\mathcal U,\mathcal F)=\mathcal F(X)/\operatorname{im}\delta^0=\mathcal F(X)/\mathcal F(X)=0$ because $\delta^0$ is surjective: $\delta^0(0,e)=e-0=e$ for every $e\in\mathcal F(X)$. In degrees $p\ge2$ both $C^p$ and $C^{p+1}$ vanish, so $\check H^p(\mathcal U,\mathcal F)=0$ there as well [F4, F5]. [F4, F5, F6, F10]

1.3 The fine cover $\mathcal V$ has one member $V_0=X$, so $C^0(\mathcal V,\mathcal F)=\mathcal F(X)$ and $C^p(\mathcal V,\mathcal F)=0$ for every $p\ge1$, the index set $\{0\}$ having no increasing pair and no longer tuple [F5]; the differentials of the complex of $\mathcal V$ are therefore the zero maps. By [F4], $$\check H^0(\mathcal V,\mathcal F)=\ker(\delta^0:C^0\to C^1)=\mathcal F(X),\qquad \check H^p(\mathcal V,\mathcal F)=0\ \ (p\ge1).$$ [F4, F5]

2.1 Define $c,c':\{0\}\to\{0,1\}$ by $c(0)=0$ and $c'(0)=1$. For $c$ the requirement of [F1] reads $V_0=X\subseteq U_{c(0)}=U_0=X$, and for $c'$ it reads $V_0=X\subseteq U_{c'(0)}=U_1=X$; both hold because $U_0=U_1=X$ [step 1.1]. Hence both $c$ and $c'$ are refinement functions from $\mathcal V$ to $\mathcal U$, and they are different functions since $c(0)=0\ne1=c'(0)$. [F1, step 1.1]

2.2 Put $A:=\mathbb Z$ and let $\eta:A_{\mathrm{pt}}\to A_X$ and $\theta:A_X\to\underline A_{\mathrm{loc}}$ be the sheafification map and the identification with locally constant functions of [F8, F9]. Then $s_0:=\theta_X(\eta_X(0))$ and $s_1:=\theta_X(\eta_X(1))$ are elements of $\mathcal F(X)$, namely the constant functions with value $0$ and with value $1$ on $X$ [F8]. Since $X$ is nonempty, choose a point $x\in X$; the two functions take the different values $0\ne1$ at $x$, so they are different functions and $s_0\ne s_1$ in $\mathcal F(X)$; both $\eta_X$ and $\theta_X$ are group homomorphisms [F9], but only their values at $0$ and $1$ are needed here. Thus $(s_0,s_1)$ is a $0$-cochain of $\mathcal U$ with $s_0\ne s_1$. [F8, F9, step 1.1]

3.1 The group of $0$-cochains of $\mathcal U$ is $C^0(\mathcal U,\mathcal F)=\mathcal F(U_0)\times\mathcal F(U_1)=\mathcal F(X)\times\mathcal F(X)$ and that of $\mathcal V$ is $C^0(\mathcal V,\mathcal F)=\mathcal F(V_0)=\mathcal F(X)$, products over the single indices $0$ and $0,1$ respectively, in which the ordered and alternating models coincide [F5, F11]. Applying the formula of [F2] for the fine index $j_0=0$ to the cochain $(s_0,s_1)$ gives $$(c^\sharp(s_0,s_1))_0=s_{c(0)}\big|_{V_0}=s_0\big|_{X}=s_0,\qquad (c'^\sharp(s_0,s_1))_0=s_{c'(0)}\big|_{V_0}=s_1\big|_{X}=s_1,$$ the restrictions being identities by [F10] because $V_0=X=U_0=U_1$. Since $s_0\ne s_1$ [step 2.2], the two cochain maps differ in degree $0$: $c^\sharp(s_0,s_1)=(s_0)\ne(s_1)=c'^\sharp(s_0,s_1)$ as elements of $C^0(\mathcal V,\mathcal F)=\mathcal F(X)$. [F2, F5, F10, F11, step 2.2]

4.1 The two cochain maps of [step 3.1] induce maps on cohomology in every degree by [F3]. In degree $0$ let $(a,a)\in\check H^0(\mathcal U,\mathcal F)$ be a diagonal class [step 1.2]; applying [F2] to the cochain $(a,a)$ gives $(c^\sharp(a,a))_0=(a,a)_{c(0)}=a$ and $(c'^\sharp(a,a))_0=(a,a)_{c'(0)}=a$, since both components of the cochain are $a$; both values are cocycles of the complex of $\mathcal V$, whose degree one group is zero [step 1.3], so both induced maps send the class of $(a,a)$ to the class of $a$ under the isomorphism $\check H^0(\mathcal U,\mathcal F)\to\check H^0(\mathcal V,\mathcal F)=\mathcal F(X)$ which is $(a,a)\mapsto a$. In positive degrees $\check H^p(\mathcal U,\mathcal F)=0$ for $p\ge1$ [step 1.2], so both induced maps are the zero map out of the zero group. Hence the induced maps on cohomology agree in every degree, as the refinement-homotopy theorem [F3] predicts, while the cochain maps themselves differ in degree $0$ [step 3.1]. [F2, F3, step 1.2, step 1.3, step 3.1]

5.1 Collected: $\mathcal U=(X,X)$ and $\mathcal V=(X)$ are open covers of the nonempty space $X$ [step 1.1]; the maps $c(0)=0$ and $c'(0)=1$ are both refinement functions from $\mathcal V$ to $\mathcal U$ [step 2.1]; the two induced cochain maps send the single $0$-cochain $(s_0,s_1)$ of [step 2.2] to the different elements $s_0$ and $s_1$ of $C^0(\mathcal V,\mathcal F)$ [step 3.1]; and yet the two induced maps on $\check H^p$ agree for every $p$, in degree $0$ as the isomorphism $(a,a)\mapsto a$ and in positive degrees as the zero map [step 4.1], in accordance with [F3]. Therefore the pair of covers alone does not determine a choice-independent map on Čech cochains: a chosen refinement function does determine a map, but changing $c$ can change that map, even though the induced map on cohomology is independent of it. No choice principle is used anywhere: the covers, the refinement functions and the sections $s_0,s_1$ are exhibited explicitly, the cochain maps are given by the restriction formula [F2], and the cohomology groups are computed from [F4] and [F5]. ∎ [F2, F3, F4, F5, step 4.1, step 3.1, step 2.1, step 2.2, step 1.1]
