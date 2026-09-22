---
id: prop-uniqueness-and-change-of-positive-system-in-iwasawa-decomposition
kind: proposition
title: Uniqueness and change of positive system in iwasawa decomposition
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [prop-bracket-relations-and-killing-signs-in-a-cartan-decomposition, thm-restricted-weyl-group-is-the-reflection-group-of-the-restricted-root-system, thm-global-iwasawa-decomposition, thm-global-cartan-decomposition-for-a-connected-finite-center-semisimple-lie-group, def-restricted-root-and-restricted-root-space, def-positive-restricted-roots-and-nilpotent-n-algebra, thm-restricted-root-space-decomposition, prop-restricted-root-systems-may-be-nonreduced, def-restricted-weyl-group, thm-the-weyl-group-acts-simply-transitively-on-weyl-chambers, def-open-and-closed-weyl-chambers, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter VI"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter VI, §5, Corollary 6.55 and the discussion preceding it, together with Theorem 6.51 and Theorem 6.57, printed pp. 377-384"
landmark: false
proof_strategy: direct
---

## Statement

Assume the Axiom of Choice. Let $G$ be a connected real semisimple Lie group
with finite center and Lie algebra $\mathfrak g_0$, let $\Theta$ be a global
Cartan involution of $G$ fixing its center pointwise, with $d\Theta_e=\theta$, put $K=G^\Theta$, and let
$\mathfrak g_0=\mathfrak k_0\oplus\mathfrak p_0$ be the Cartan decomposition
attached to $\theta$, so that $K\times\mathfrak p_0\to G$,
$(k,X)\mapsto k\exp X$, is a diffeomorphism and $K$ is a closed compact
subgroup with Lie algebra $\mathfrak k_0$
([[thm-global-cartan-decomposition-for-a-connected-finite-center-semisimple-lie-group]]).
Let $\mathfrak a\subseteq\mathfrak p_0$ be a maximal abelian subspace with
restricted-root system $\Sigma=\Sigma(\mathfrak g_0,\mathfrak a)$
([[def-restricted-root-and-restricted-root-space]]), let $\Sigma^+$ be a
positive system of $\Sigma$ with associated subalgebra
$\mathfrak n=\mathfrak n(\Sigma^+)=\bigoplus_{\lambda\in\Sigma^+}\mathfrak g_0^\lambda$
([[def-positive-restricted-roots-and-nilpotent-n-algebra]]), and put
$A=\exp(\mathfrak a)$ and $N=\exp(\mathfrak n)$, so that the multiplication map
$$K\times A\times N\longrightarrow G,\qquad (k,a,n)\longmapsto kan ,$$
is a diffeomorphism onto $G$ ([[thm-global-iwasawa-decomposition]]). For
another maximal abelian subspace $\mathfrak a'\subseteq\mathfrak p_0$ and an
element $k\in K$ with $\operatorname{Ad}(k)\mathfrak a=\mathfrak a'$ write
$\operatorname{Ad}(k)\lambda=\lambda\circ\operatorname{Ad}(k)^{-1}$ for
$\lambda\in\mathfrak a^*$, so that
$\operatorname{Ad}(k)\lambda\in(\mathfrak a')^*$, and put
$\operatorname{Ad}(k)\Sigma^+=\{\operatorname{Ad}(k)\lambda:\lambda\in\Sigma^+\}$.
Then:

(a) **Uniqueness for fixed data.** If $k_1a_1n_1=k_2a_2n_2$ with $k_i\in K$,
$a_i\in A$ and $n_i\in N$, then $k_1=k_2$, $a_1=a_2$ and $n_1=n_2$; that is,
the decomposition of an element of $G$ as a product $kan$ with $k\in K$,
$a\in A$, $n\in N$ is unique.

(b) **Dependence on the choices.** $A=\exp(\mathfrak a)$ determines and is
determined by $\mathfrak a$, and $N=\exp(\mathfrak n(\Sigma^+))$ depends on the
positive system: for the opposite positive system $-\Sigma^+$ one has
$\mathfrak n(-\Sigma^+)=\theta\mathfrak n(\Sigma^+)$ and
$N(-\Sigma^+)=\Theta(N(\Sigma^+))$, and $N(-\Sigma^+)\ne N(\Sigma^+)$ whenever
$\mathfrak n(\Sigma^+)\ne0$, that is, whenever $\mathfrak a\ne0$. In
particular different choices of $(\mathfrak a,\Sigma^+)$ do in general give
different pairs $(A,N)$.

(c) **Change of maximal abelian subspace.** If $\mathfrak a,\mathfrak a'\subseteq\mathfrak p_0$
are maximal abelian, then there is $k\in K$ with
$\operatorname{Ad}(k)\mathfrak a=\mathfrak a'$
; for every positive
system $\Sigma^+$ of $\Sigma(\mathfrak g_0,\mathfrak a)$ the set
$\operatorname{Ad}(k)\Sigma^+$ is a positive system of
$\Sigma(\mathfrak g_0,\mathfrak a')=\operatorname{Ad}(k)\Sigma(\mathfrak g_0,\mathfrak a)$,
one has $\operatorname{Ad}(k)\mathfrak n(\Sigma^+)=\mathfrak n(\operatorname{Ad}(k)\Sigma^+)$
computed with respect to $\mathfrak a'$, and conjugation by $k$ carries
$A=\exp(\mathfrak a)$ and $N=\exp(\mathfrak n(\Sigma^+))$ onto
$\exp(\mathfrak a')$ and $\exp(\mathfrak n(\operatorname{Ad}(k)\Sigma^+))$.

(d) **Change of positive system.** For fixed $\mathfrak a$, and for any two
positive systems $\Sigma^+,\Sigma^{+'}$ of $\Sigma$, there is
$k\in N_K(\mathfrak a)$ with
$\operatorname{Ad}(k)\mathfrak n(\Sigma^+)=\mathfrak n(\Sigma^{+'})$; the
element $w=\operatorname{Ad}(k)|_{\mathfrak a}$ lies in
$W(\mathfrak g_0,\mathfrak a)=W(\Sigma)$ and satisfies
$w(\Sigma^+)=\Sigma^{+'}$. Moreover, for a fixed positive system $\Sigma^+$
the assignment
$$W(\Sigma)\longrightarrow\{\text{positive systems of }\Sigma\},\qquad w\longmapsto w(\Sigma^+) ,$$
is a bijection, so the restricted Weyl group permutes the positive systems
simply transitively; the element $k$ realising a given $w$ is unique up to
multiplication by an element of $Z_K(\mathfrak a)$.

(e) **Simultaneous change.** For any two pairs $(\mathfrak a,\Sigma^+)$ and
$(\mathfrak a',\Sigma^{+'})$ as above there is $k\in K$ with
$\operatorname{Ad}(k)\mathfrak a=\mathfrak a'$,
$\operatorname{Ad}(k)\Sigma^+=\Sigma^{+'}$ and
$\operatorname{Ad}(k)\mathfrak n(\Sigma^+)=\mathfrak n(\Sigma^{+'})$; in this
sense all Iwasawa data are conjugate by $K$.

## Facts & Assumptions

**Given:** The Axiom of Choice; a connected semisimple Lie group $G$ with finite center and Lie algebra $\mathfrak g_0$, a global Cartan involution $\Theta$ fixing the center pointwise, with $d\Theta_e=\theta$, the subgroup $K=G^\Theta$, the Cartan decomposition $\mathfrak g_0=\mathfrak k_0\oplus\mathfrak p_0$, a maximal abelian subspace $\mathfrak a\subseteq\mathfrak p_0$, the restricted-root system $\Sigma=\Sigma(\mathfrak g_0,\mathfrak a)$, a positive system $\Sigma^+$ of $\Sigma$, the subalgebra $\mathfrak n=\bigoplus_{\lambda\in\Sigma^+}\mathfrak g_0^\lambda$, and the subgroups $A=\exp(\mathfrak a)$ and $N=\exp(\mathfrak n)$.

[A1] The Axiom of Choice is [[def-axiom-of-choice]], inherited through the Lie and root decomposition interfaces below. Only finitely many individual selections occur in this proof.

[L1] $K$ is compact with Lie algebra $\mathfrak k_0$; the maps $K\times\mathfrak p_0\to G$ and $K\times A\times N\to G$ in the statement are diffeomorphisms. The groups $A,N$ are closed simply connected Lie subgroups with Lie algebras $\mathfrak a,\mathfrak n$ ([[thm-global-cartan-decomposition-for-a-connected-finite-center-semisimple-lie-group]], [[thm-global-iwasawa-decomposition]]).

[L2] The Killing form $B$ is negative definite on $\mathfrak k_0$ and positive definite on $\mathfrak p_0$, and $[\mathfrak p_0,\mathfrak p_0]\subseteq\mathfrak k_0$ ([[prop-bracket-relations-and-killing-signs-in-a-cartan-decomposition]]).

[L3] $\Sigma$ is finite, spans $\mathfrak a^*$, satisfies $s_\lambda(\Sigma)=\Sigma$ and $2\langle\mu,\lambda\rangle|\lambda|^{-2}\in\mathbb Z$ for all $\mu,\lambda\in\Sigma$ ([[prop-restricted-root-systems-may-be-nonreduced]]).

[L4] $W(\mathfrak g_0,\mathfrak a)=N_K(\mathfrak a)/Z_K(\mathfrak a)=W(\Sigma)$ as groups of linear transformations of $\mathfrak a$ and of $\mathfrak a^*$, and $W(\Sigma)$ is finite; the quotient map $N_K(\mathfrak a)\to W(\mathfrak g_0,\mathfrak a)$ is surjective with kernel $Z_K(\mathfrak a)$ ([[def-restricted-weyl-group]], [[thm-restricted-weyl-group-is-the-reflection-group-of-the-restricted-root-system]]).

[L5] The Weyl group of a reduced crystallographic root system acts simply transitively on the open chambers of the arrangement of its root hyperplanes, and every chamber is the set of solutions of a system of strict homogeneous linear inequalities ([[thm-the-weyl-group-acts-simply-transitively-on-weyl-chambers]], [[def-open-and-closed-weyl-chambers]]).

[L6] $\mathfrak g_0=\mathfrak g_0^0\oplus\bigoplus_{\lambda\in\Sigma}\mathfrak g_0^\lambda$ is a direct sum, $[\mathfrak g_0^\lambda,\mathfrak g_0^\mu]\subseteq\mathfrak g_0^{\lambda+\mu}$ and $\theta\mathfrak g_0^\lambda=\mathfrak g_0^{-\lambda}$ for all $\lambda,\mu\in\mathfrak a^*$; for regular $H\in\mathfrak a$, $Z_{\mathfrak p_0}(H)=\mathfrak a$ ([[thm-restricted-root-space-decomposition]]).

## Proof

**Proof technique:** direct.

1.1 Action on restricted-root spaces: let $k\in K$, put $\mathfrak a'=\operatorname{Ad}(k)\mathfrak a$ and $H'=\operatorname{Ad}(k)H$ for $H\in\mathfrak a$; for $X\in\mathfrak g_0^\lambda$ one has $[H',\operatorname{Ad}(k)X]=\operatorname{Ad}(k)[H,X]=\lambda(H)\operatorname{Ad}(k)X=(\operatorname{Ad}(k)\lambda)(H')\operatorname{Ad}(k)X$, so $\operatorname{Ad}(k)\mathfrak g_0^\lambda\subseteq(\mathfrak g_0')^{\operatorname{Ad}(k)\lambda}$, where $(\mathfrak g_0')^\nu=\{Y\in\mathfrak g_0:[H',Y]=\nu(H')Y\text{ for every }H'\in\mathfrak a'\}$; applying the same inclusion to $k^{-1}$ and $\operatorname{Ad}(k)\lambda$ gives equality, and consequently $\lambda\in\Sigma(\mathfrak g_0,\mathfrak a)$ if and only if $\operatorname{Ad}(k)\lambda\in\Sigma(\mathfrak g_0,\mathfrak a')$, that is, $\Sigma(\mathfrak g_0,\mathfrak a')=\operatorname{Ad}(k)\Sigma(\mathfrak g_0,\mathfrak a)$. [L6, algebra]

1.2 Chambers and positive systems: for a positive system $\Sigma^+$ of $\Sigma$, cut out by a regular $H_0\in\mathfrak a$, put $C(\Sigma^+)=\{H\in\mathfrak a:\lambda(H)>0\text{ for every }\lambda\in\Sigma^+\}$; then $C(\Sigma^+)$ is a nonempty open convex cone contained in the complement of $\bigcup_{\lambda\in\Sigma}\lambda^{\perp}$, and it is a full connected component of that complement, because on the finite set $\Sigma$ the signs $\operatorname{sign}\lambda(H)$ are constant on $C(\Sigma^+)$ and determine the component of $H$; hence $C(\Sigma^+)$ is a chamber, it does not depend on the choice of the regular element $H_0$ cutting out $\Sigma^+$, and the assignment $\Sigma^+\mapsto C(\Sigma^+)$ is a bijection from the positive systems of $\Sigma$ onto the chambers, with inverse $C\mapsto\{\lambda\in\Sigma:\lambda>0\text{ on }C\}$. [L3, L5, algebra]

1.3 Uniqueness of the factorization: if $k_1a_1n_1=k_2a_2n_2$ with $k_i\in K$, $a_i\in A$, $n_i\in N$, then injectivity of the multiplication map $K\times A\times N\to G$ forces $(k_1,a_1,n_1)=(k_2,a_2,n_2)$; this proves (a). [L1]

1.4 Dependence on $\mathfrak a$: the exponential map is injective on $\mathfrak p_0$ by [L1]; distinct maximal abelian subspaces cannot contain one another, so if $\mathfrak a\ne\mathfrak a'$ we may choose $X\in\mathfrak a$ with $X\notin\mathfrak a'$; then $\exp X\in A=\exp(\mathfrak a)$ while $\exp X\notin\exp(\mathfrak a')$, because $\exp X=\exp Y$ with $Y\in\mathfrak a'$ would force $X=Y\in\mathfrak a'$; hence $A\ne\exp(\mathfrak a')$ and $A$ determines $\mathfrak a$ and is determined by it. [L1, algebra]

1.5 Dependence on the positive system: by [L6] one has $\theta\mathfrak n(\Sigma^+)=\bigoplus_{\lambda\in\Sigma^+}\mathfrak g_0^{-\lambda}=\mathfrak n(-\Sigma^+)$, and $\Theta(\exp X)=\exp(\theta X)$ for all $X\in\mathfrak g_0$, so $\Theta(N(\Sigma^+))=N(-\Sigma^+)$; if $N(\Sigma^+)=N(-\Sigma^+)$, equality of these Lie subgroups forces equality of their Lie algebras, $\mathfrak n(\Sigma^+)=\mathfrak n(-\Sigma^+)$, by [L1]. But these two sums of restricted-root spaces have zero intersection because $\bigoplus_{\lambda\in\Sigma}\mathfrak g_0^\lambda$ is direct and $\Sigma^+\cap(-\Sigma^+)=\emptyset$; hence both would be zero. Thus $N(\Sigma^+)\ne N(-\Sigma^+)$ whenever $\mathfrak n(\Sigma^+)\ne0$. Finally $\mathfrak n(\Sigma^+)\ne0$ when $\mathfrak a\ne0$, because then $\Sigma\ne\emptyset$ since $\Sigma$ spans $\mathfrak a^*$ by [L3], and $\Sigma=\Sigma^+\sqcup(-\Sigma^+)$ forces $\Sigma^+\ne\emptyset$; this proves (b). [L1, L3, L6, algebra]

1.6 Put $\Sigma_s=\{\alpha\in\Sigma:\alpha/2\notin\Sigma\}$. If $\alpha,c\alpha\in\Sigma$ with $c>0$, integrality in both orders gives $2c,2/c\in\mathbb Z$, whose product is four; hence $c\in\{1/2,1,2\}$. On each root line the shortest positive root is therefore indivisible and the only possible longer root is its double. Thus $\Sigma_s$ has precisely two opposite roots on each root line and spans $\mathfrak a^*$. Reflections permute $\Sigma$ and preserve the condition that half a root is absent, so preserve $\Sigma_s$. Integrality is inherited, proving that $\Sigma_s$ is a reduced crystallographic root system. Since $s_{2\alpha}=s_\alpha$, it has the same Weyl group and hyperplanes as $\Sigma$. Identify $\mathfrak a^*$ with $\mathfrak a$ by the positive Killing form on $\mathfrak a$ to apply the chamber theorem [L5]. [L2, L3, L5, algebra]

1.7 We prove conjugacy of maximal abelian subspaces for the full stated group, allowing compact factors. Choose regular $H\in\mathfrak a$ and $H'\in\mathfrak a'$; such points exist outside finitely many proper hyperplanes (and zero is regular in dimension zero). Since $K$ is compact, $k\mapsto B(\operatorname{Ad}(k)H,H')$ has a maximum at $k_0$. Put $X=\operatorname{Ad}(k_0)H$. The adjoint action of $K$ preserves $\mathfrak p_0$ because it commutes with $\theta$. Differentiating along $\exp(tY)k_0$, for $Y\in\mathfrak k_0$, and using invariance of the Killing form gives $0=B([Y,X],H')=B(Y,[X,H'])$. Since $[X,H']\in\mathfrak k_0$, negative definiteness implies $[X,H']=0$, hence $X\in\mathfrak a'$ by [L6]. Thus $\mathfrak a'\subseteq Z_{\mathfrak p_0}(X)=\operatorname{Ad}(k_0)\mathfrak a$. Maximality of the abelian subspace $\mathfrak a'$ gives equality. [L1, L2, L6, algebra]

2.1 The restricted Weyl group acts simply transitively on positive systems: an element $k\in N_K(\mathfrak a)$ preserves $\mathfrak a$ and acts on $\mathfrak a$ by $w=\operatorname{Ad}(k)|_{\mathfrak a}$ and on its dual by $w\lambda=\lambda\circ w^{-1}$; by step 1.1 with $\mathfrak a'=\mathfrak a$ it permutes $\Sigma$, hence permutes the hyperplanes $\lambda^{\perp}$ and the chambers; the hyperplanes are those of the reduced crystallographic root system $\Sigma_s$ by step 1.6, whose Weyl group is $W(\Sigma)$, so by [L4] and [L5] the induced action of $W(\Sigma)=W(\mathfrak g_0,\mathfrak a)$ on the chambers of $\Sigma$ is simply transitive, and by step 1.2 this is exactly the simply transitive action $w\cdot\Sigma^+=w(\Sigma^+)$ on the positive systems. [L3, L4, L5, step 1.1, step 1.2, step 1.6]

2.2 Change of $\mathfrak a$: let $\mathfrak a,\mathfrak a'\subseteq\mathfrak p_0$ be maximal abelian and choose $k\in K$ with $\operatorname{Ad}(k)\mathfrak a=\mathfrak a'$ by step 1.7; if the positive system $\Sigma^+$ is cut out by the regular element $H_0\in\mathfrak a$, then $\operatorname{Ad}(k)\Sigma^+=\{\nu\in\Sigma(\mathfrak g_0,\mathfrak a'):\nu(\operatorname{Ad}(k)H_0)>0\}$, and $\operatorname{Ad}(k)H_0$ is regular for $\Sigma(\mathfrak g_0,\mathfrak a')$ because $\nu(\operatorname{Ad}(k)H_0)=(\operatorname{Ad}(k)^{-1}\nu)(H_0)\ne0$ for every root $\nu\in\Sigma(\mathfrak g_0,\mathfrak a')$; hence $\operatorname{Ad}(k)\Sigma^+$ is a positive system of $\Sigma(\mathfrak g_0,\mathfrak a')=\operatorname{Ad}(k)\Sigma(\mathfrak g_0,\mathfrak a)$ by step 1.1. Moreover $\operatorname{Ad}(k)\mathfrak n(\Sigma^+)=\bigoplus_{\lambda\in\Sigma^+}\operatorname{Ad}(k)\mathfrak g_0^\lambda=\bigoplus_{\lambda\in\Sigma^+}(\mathfrak g_0')^{\operatorname{Ad}(k)\lambda}=\mathfrak n(\operatorname{Ad}(k)\Sigma^+)$ computed with respect to $\mathfrak a'$, and $k\exp(X)k^{-1}=\exp(\operatorname{Ad}(k)X)$ for all $X\in\mathfrak g_0$, so conjugation by $k$ carries $A=\exp(\mathfrak a)$ onto $\exp(\mathfrak a')$ and $N=\exp(\mathfrak n(\Sigma^+))$ onto $\exp(\mathfrak n(\operatorname{Ad}(k)\Sigma^+))$; this proves (c). [L6, step 1.1, step 1.7, algebra]

3.1 Change of positive system: let $\Sigma^+,\Sigma^{+'}$ be positive systems of $\Sigma$; by steps 1.2 and 2.1 there is a unique $w\in W(\Sigma)$ with $w(\Sigma^+)=\Sigma^{+'}$, and by [L4] there is $k\in N_K(\mathfrak a)$ representing $w$; then step 1.1 gives $\operatorname{Ad}(k)\mathfrak g_0^\lambda=\mathfrak g_0^{w\lambda}$ for every $\lambda\in\Sigma$, hence $\operatorname{Ad}(k)\mathfrak n(\Sigma^+)=\bigoplus_{\lambda\in\Sigma^+}\mathfrak g_0^{w\lambda}=\mathfrak n(w\Sigma^+)=\mathfrak n(\Sigma^{+'})$. Conversely, if $k'\in N_K(\mathfrak a)$ satisfies $\operatorname{Ad}(k')\mathfrak n(\Sigma^+)=\mathfrak n(\Sigma^{+'})$, then $\bigoplus_{\lambda\in\Sigma^+}\mathfrak g_0^{w'\lambda}=\bigoplus_{\nu\in\Sigma^{+'}}\mathfrak g_0^\nu$ for the class $w'$ of $k'$, and comparing the two direct sums of restricted-root spaces inside the direct sum over $\Sigma$ gives $\{w'\lambda:\lambda\in\Sigma^+\}=\Sigma^{+'}$, so $w'(\Sigma^+)=\Sigma^{+'}$ and hence $w'=w$ by uniqueness; therefore $k'\in kZ_K(\mathfrak a)$, by [L4]. With $w\mapsto w(\Sigma^+)$ for the fixed $\Sigma^+$ this is a bijection by step 2.1, so the restricted Weyl group permutes the positive systems simply transitively; this proves (d). [L4, step 1.1, step 1.2, step 2.1, algebra]

4.1 Simultaneous change: given $(\mathfrak a,\Sigma^+)$ and $(\mathfrak a',\Sigma^{+'})$, choose $k_1\in K$ with $\operatorname{Ad}(k_1)\mathfrak a=\mathfrak a'$ by step 1.7; by step 2.2 the set $\operatorname{Ad}(k_1)\Sigma^+$ is a positive system of $\Sigma(\mathfrak g_0,\mathfrak a')$, and $\operatorname{Ad}(k_1)\mathfrak n(\Sigma^+)=\mathfrak n(\operatorname{Ad}(k_1)\Sigma^+)$ with respect to $\mathfrak a'$; by step 3.1 applied to $\mathfrak a'$ there is $k_2\in N_K(\mathfrak a')$ with $\operatorname{Ad}(k_2)\mathfrak n(\operatorname{Ad}(k_1)\Sigma^+)=\mathfrak n(\Sigma^{+'})$, equivalently $\operatorname{Ad}(k_2)(\operatorname{Ad}(k_1)\Sigma^+)=\Sigma^{+'}$; then $k=k_2k_1\in K$ satisfies $\operatorname{Ad}(k)\mathfrak a=\mathfrak a'$, $\operatorname{Ad}(k)\Sigma^+=\Sigma^{+'}$ and $\operatorname{Ad}(k)\mathfrak n(\Sigma^+)=\mathfrak n(\Sigma^{+'})$, and conjugation by $k$ carries $A$ and $N$ accordingly by step 2.2; this proves (e). [step 2.2, step 3.1, algebra]

5.1 Assertions (a)–(e) are now established by steps 1.3, 1.4 and 1.5, 2.2, 3.1 and 4.1, so all Iwasawa data attached to a maximal abelian $\mathfrak a\subseteq\mathfrak p_0$ and a positive system are unique for fixed data and conjugate by $K$ in general, with the positive systems permuted simply transitively by the restricted Weyl group. The Axiom of Choice was declared in [A1] and is inherited through [L1] and [L6]; only finitely many individual selections occur. If $\mathfrak a=0$, the root system is empty, $A=N=\{e\}$ and $W=1$; the single chamber is $\{0\}$ and its positive system is empty, so every assertion includes this case. [A1, L1, L2, step 1.3, step 2.2, step 3.1, step 4.1, step 1.4, step 1.5] ∎
