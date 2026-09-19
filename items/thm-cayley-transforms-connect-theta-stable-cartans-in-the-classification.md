---
id: thm-cayley-transforms-connect-theta-stable-cartans-in-the-classification
kind: theorem
title: Cayley transforms connect theta-stable Cartans in the classification
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-every-real-cartan-subalgebra-is-conjugate-to-a-theta-stable-one, def-cayley-transform-of-a-theta-stable-cartan-subalgebra, def-axiom-of-choice, def-theta-stable-cartan-subalgebra-and-compact-split-parts, def-cartan-decomposition-of-a-real-semisimple-lie-algebra, def-cartan-involution-of-a-real-semisimple-lie-algebra, def-complexification-of-a-real-lie-algebra, def-killing-form-of-a-finite-dimensional-lie-algebra, def-killing-dual-vector-of-a-root, def-coroot-of-a-lie-algebra-root, def-root-and-root-space-relative-to-a-cartan-subalgebra, prop-trace-forms-are-symmetric-and-invariant, prop-bracket-relations-and-killing-signs-in-a-cartan-decomposition, def-cartan-subalgebra-of-a-lie-algebra, def-normalizer-of-a-lie-subalgebra, def-lower-central-series-and-nilpotent-lie-algebra, def-maximal-split-abelian-subspace-and-real-rank, thm-maximal-abelian-subspaces-of-p-are-conjugate-by-k, thm-global-cartan-decomposition-for-a-connected-finite-center-semisimple-lie-group, thm-conjugacy-of-maximal-tori, def-torus-and-maximal-torus-in-a-compact-lie-group, def-self-adjoint-and-normal-endomorphism, def-special-linear-lie-algebra-sl-two]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter VI"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter VI, §7, Propositions 6.61, 6.69 and 6.70 with their proofs, printed pp. 387-394"
    - title: "Pavel Etingof, Lie Groups and Lie Algebras"
      url: "https://math.mit.edu/~etingof/lnlg.pdf"
      locator: "Lecture 40, Propositions 40.3 and 40.4 with their proofs, printed pp. 186-188"
landmark: false
proof_strategy: direct
---

## Statement

Assume the Axiom of Choice. Let $\mathfrak g_0$ be a finite-dimensional real
semisimple Lie algebra with Cartan involution $\theta$, and let $\mathfrak h_0$
be a $\theta$-stable Cartan subalgebra with compact part $\mathfrak t_0$ and
split part $\mathfrak a_0$
([[def-theta-stable-cartan-subalgebra-and-compact-split-parts]],
[[def-cayley-transform-of-a-theta-stable-cartan-subalgebra]]). Then:

1. if $\mathfrak h_0$ has a real root $\alpha$, the real-root Cayley transform
   attached to a normalized root vector $E_\alpha$ gives a $\theta$-stable
   Cartan subalgebra
   $\mathfrak g_0\cap d_\alpha(\mathfrak h)=\ker(\alpha|_{\mathfrak h_0})\oplus\mathbb R(E_\alpha+\theta E_\alpha)$
   whose compact dimension is $\dim\mathfrak t_0+1$ and whose noncompact
   dimension is $\dim\mathfrak a_0-1$;
2. if $\mathfrak h_0$ has a noncompact imaginary root $\beta$, the
   noncompact-imaginary Cayley transform attached to a normalized root vector
   $E_\beta$ gives a $\theta$-stable Cartan subalgebra
   $\mathfrak g_0\cap c_\beta(\mathfrak h)=\ker(\beta|_{\mathfrak h_0})\oplus\mathbb R(E_\beta+\sigma E_\beta)$
   whose noncompact dimension is $\dim\mathfrak a_0+1$ and whose compact
   dimension is $\dim\mathfrak t_0-1$;
3. the two kinds of transforms are inverse to one another on the Cartan
   subalgebras: for a real root $\alpha$ the Cartan subalgebra produced in 1
   has the noncompact imaginary root $\alpha'=d_\alpha(\alpha)$, and with the
   compatible choice $E_{\alpha'}=-i\,d_\alpha(E_\alpha)$ of normalized root
   vector the noncompact-imaginary transform returns $\mathfrak h_0$;
4. consequently every $\theta$-stable Cartan subalgebra is carried by a finite
   sequence of real-root Cayley transforms to a maximally compact one and by a
   finite sequence of noncompact-imaginary Cayley transforms to a maximally
   noncompact one, and the maximally compact representatives, as well as the
   maximally noncompact ones, are mutually conjugate by real inner
   automorphisms.

## Facts & Assumptions

**Given:** The Axiom of Choice; a real semisimple Lie algebra $\mathfrak g_0$ with Killing form $B_0$ and Cartan involution $\theta$; the complexification $\mathfrak g$ with Killing form $B$, conjugation $\sigma$ and $\mathbb C$-linear extension of $\theta$; a $\theta$-stable Cartan subalgebra $\mathfrak h_0=\mathfrak t_0\oplus\mathfrak a_0$ with complexification $\mathfrak h$ and root system $\Phi$; and the positive definite form $B_\theta(Z,W)=-B(Z,\theta\sigma W)$ with Killing-dual vectors $H_\alpha$ and coroots $h_\alpha$.

[A1] The Axiom of Choice is [[def-axiom-of-choice]]; it enters through the global Cartan decomposition and the conjugacy of maximal tori in part 4.

[L1] The Cartan decomposition $\mathfrak g_0=\mathfrak k_0\oplus\mathfrak p_0$ satisfies $[\mathfrak k_0,\mathfrak k_0]\subseteq\mathfrak k_0$, $[\mathfrak k_0,\mathfrak p_0]\subseteq\mathfrak p_0$, $[\mathfrak p_0,\mathfrak p_0]\subseteq\mathfrak k_0$, and $B_0$ is negative definite on $\mathfrak k_0$, positive definite on $\mathfrak p_0$, the summands being orthogonal; for $X\in\mathfrak k_0$ the operator $\operatorname{ad}_X$ is skew-adjoint and for $X\in\mathfrak p_0$ it is self-adjoint for $B_\theta$ ([[prop-bracket-relations-and-killing-signs-in-a-cartan-decomposition]], [[def-cartan-decomposition-of-a-real-semisimple-lie-algebra]], [[def-self-adjoint-and-normal-endomorphism]]).

[L2] $B$ is symmetric, invariant and nondegenerate, $B|_{\mathfrak h}$ is nondegenerate, $H_\alpha$ is characterized by $B(H_\alpha,H)=\alpha(H)$ and satisfies $\alpha(H_\alpha)=B(H_\alpha,H_\alpha)$, and $h_\alpha=2H_\alpha/\alpha(H_\alpha)$ satisfies $\alpha(h_\alpha)=2$ and $B(h_\alpha,h_\alpha)=4/|H_\alpha|^2$ with $|H_\alpha|^2=B(H_\alpha,H_\alpha)$; for a real root $H_\alpha\in\mathfrak a_0$ and for an imaginary root $H_\alpha\in i\mathfrak t_0$ ([[def-killing-dual-vector-of-a-root]], [[def-coroot-of-a-lie-algebra-root]], [[prop-trace-forms-are-symmetric-and-invariant]], [[def-killing-form-of-a-finite-dimensional-lie-algebra]]).

[L3] The roots of $(\mathfrak g,\mathfrak h)$ are the nonzero weights of the adjoint action of $\mathfrak h$, one has $\mathfrak g=\mathfrak h\oplus\bigoplus_{\alpha\in\Phi}\mathfrak g_\alpha$ with $\theta(\mathfrak g_\alpha)=\mathfrak g_{\theta\alpha}$, and the centralizer of a subspace of $\mathfrak h$ in $\mathfrak g$ is the sum of $\mathfrak h$ and the root spaces whose roots vanish on it ([[def-root-and-root-space-relative-to-a-cartan-subalgebra]]).

[L4] A Cartan subalgebra is nilpotent and equal to its own normalizer, and for a nilpotent Lie algebra $\mathfrak n$ one has $\operatorname{ad}_X^k(\mathfrak n)\subseteq\gamma_k(\mathfrak n)$, so that $\operatorname{ad}_X$ is nilpotent on $\mathfrak n$ for every $X\in\mathfrak n$; a real subspace of $\mathfrak g_0$ whose complexification is a Cartan subalgebra of $\mathfrak g$ and which is nilpotent is a Cartan subalgebra of $\mathfrak g_0$, because a normalizer in $\mathfrak g_0$ normalizes the complexification ([[def-cartan-subalgebra-of-a-lie-algebra]], [[def-normalizer-of-a-lie-subalgebra]], [[def-lower-central-series-and-nilpotent-lie-algebra]]).

[L5] The real rank is the common dimension of the maximal abelian subspaces of $\mathfrak p_0$, every abelian subspace of $\mathfrak p_0$ is contained in a maximal one, and any two maximal abelian subspaces of $\mathfrak p_0$ are conjugate by $\operatorname{Ad}(K)$ for the compact group $K$ of [L6] ([[def-maximal-split-abelian-subspace-and-real-rank]], [[thm-maximal-abelian-subspaces-of-p-are-conjugate-by-k]]).

[L6] Let $G$ be a connected real semisimple Lie group with finite center and global Cartan involution $\Theta$ with $d\Theta_e=\theta$, and let $K=G^\Theta$. Then $K$ is a compact subgroup with Lie algebra $\mathfrak k_0$, $\operatorname{Ad}(K)\subseteq\operatorname{Int}(\mathfrak g_0)$, a maximal abelian subspace of $\mathfrak k_0$ is the Lie algebra of a maximal torus of $K$, and any two maximal tori of $K$ are conjugate; consequently any two maximal abelian subspaces of $\mathfrak k_0$ have the same dimension ([[thm-global-cartan-decomposition-for-a-connected-finite-center-semisimple-lie-group]], [[thm-conjugacy-of-maximal-tori]], [[def-torus-and-maximal-torus-in-a-compact-lie-group]]).

[L7] The real-root and noncompact-imaginary Cayley transforms $d_\alpha$ and $c_\beta$ are the automorphisms of $\mathfrak g$ defined in [[def-cayley-transform-of-a-theta-stable-cartan-subalgebra]], for normalized root vectors $E_\alpha\in\mathfrak g_\alpha\cap\mathfrak g_0$ and $E_\beta\in\mathfrak g_\beta$; here $\mathfrak g_\alpha$ is $\sigma$-stable for a real root, $\sigma(\mathfrak g_\beta)=\mathfrak g_{-\beta}$ and $\theta\sigma=\sigma\theta$ for an imaginary root ([[def-cayley-transform-of-a-theta-stable-cartan-subalgebra]], [[def-complexification-of-a-real-lie-algebra]]).

[L8] $\mathfrak g_0$ is a finite-dimensional real semisimple Lie algebra, so a connected Lie group $G$ with Lie algebra $\mathfrak g_0$ and a global Cartan involution $\Theta$ with $d\Theta_e=\theta$ exist; the roots of $(\mathfrak g,\mathfrak h)$ are related to $\theta$ by $\theta\alpha=\alpha\circ\theta^{-1}$, an imaginary root is compact or noncompact according to whether $\mathfrak g_\alpha\subseteq\mathfrak k$ or $\mathfrak g_\alpha\subseteq\mathfrak p$, and every root vanishing on $\mathfrak t_0$ is real ([[def-theta-stable-cartan-subalgebra-and-compact-split-parts]], [[def-cayley-transform-of-a-theta-stable-cartan-subalgebra]], [[thm-every-real-cartan-subalgebra-is-conjugate-to-a-theta-stable-one]]).
## Proof
**Proof technique:** direct.

1.1 For $X\in\mathfrak g_\alpha$, $Y\in\mathfrak g_{-\alpha}$ and $H\in\mathfrak h$ invariance of $B$ and $[H,Y]=-\alpha(H)Y$ give $B([X,Y],H)=-B(Y,[X,H])=\alpha(H)B(X,Y)=B(X,Y)B(H_\alpha,H)$, hence $[X,Y]=B(X,Y)H_\alpha$ by nondegeneracy of $B|_{\mathfrak h}$. In particular the normalized choices of [L7] give $[E_\beta,\sigma E_\beta]=(2/|\beta|^2)H_\beta=h_\beta$ for a noncompact imaginary root and $[E_\alpha,-\theta E_\alpha]=-B(E_\alpha,\theta E_\alpha)H_\alpha=(2/|\alpha|^2)H_\alpha=h_\alpha$ for a real root, since $|H_\alpha|^2=B(H_\alpha,H_\alpha)=\alpha(H_\alpha)=|\alpha|^2$ in that case. [L2, L7]

1.2 The compact and split parts of any $\theta$-stable Cartan subalgebra $\mathfrak h_0''$ of $\mathfrak g_0$ are abelian: for $X\in\mathfrak h_0''\cap\mathfrak k_0$ the operator $\operatorname{ad}_X|_{\mathfrak h_0''}$ is nilpotent by [L4] and skew-adjoint for the inner product $B_\theta$ by [L1], hence zero, and for $X\in\mathfrak h_0''\cap\mathfrak p_0$ the same argument with self-adjointness applies; in particular $[\mathfrak t_0,\mathfrak t_0]=[\mathfrak a_0,\mathfrak a_0]=0$. [L1, L4]

2.1 The elements in step 1.1 span copies of $\mathfrak{sl}_2$: $[h_\beta,E_\beta]=2E_\beta$, $[h_\beta,\sigma E_\beta]=-2\sigma E_\beta$ and $[h_\alpha,E_\alpha]=2E_\alpha$, $[h_\alpha,-\theta E_\alpha]=-2\theta E_\alpha$, that is the relations of [[def-special-linear-lie-algebra-sl-two]]; consequently, for $W_\beta=\tfrac\pi4(\sigma E_\beta-E_\beta)$ and $W_\alpha=i\tfrac\pi4(\theta E_\alpha-E_\alpha)$ one computes $[W_\beta,h_\beta]=\tfrac\pi2(E_\beta+\sigma E_\beta)$, $[W_\beta,E_\beta+\sigma E_\beta]=-\tfrac\pi2h_\beta$, $[W_\beta,E_\beta-\sigma E_\beta]=0$, and $[W_\alpha,h_\alpha]=i\tfrac\pi2(E_\alpha+\theta E_\alpha)$, $[W_\alpha,E_\alpha+\theta E_\alpha]=i\tfrac\pi2h_\alpha$, $[W_\alpha,E_\alpha-\theta E_\alpha]=0$. [step 1.1, algebra]

2.2 Suppose that $\mathfrak h_0$ has no real roots. Then $Z_{\mathfrak g}(\mathfrak t_0)=\mathfrak h\oplus\bigoplus_{\alpha\in\Phi,\alpha|_{\mathfrak t_0}=0}\mathfrak g_\alpha=\mathfrak h$ by [L8], hence $Z_{\mathfrak g_0}(\mathfrak t_0)=\mathfrak h\cap\mathfrak g_0=\mathfrak h_0$ and $\mathfrak k_0\cap Z_{\mathfrak g_0}(\mathfrak t_0)=\mathfrak t_0$, so any abelian subspace of $\mathfrak k_0$ containing $\mathfrak t_0$ lies in $\mathfrak t_0$; since by step 1.2 the compact part of every $\theta$-stable Cartan subalgebra is abelian and $\dim\mathfrak t_0$ is the dimension of a maximal abelian subspace of $\mathfrak k_0$ by [L6], the compact dimension $\dim\mathfrak t_0$ is maximal and $\mathfrak h_0$ is maximally compact. Likewise, if $\mathfrak h_0$ has no noncompact imaginary root then $Z_{\mathfrak g}(\mathfrak a_0)=\mathfrak h\oplus\bigoplus_{\alpha\text{ compact imaginary}}\mathfrak g_\alpha$ lies in $\mathfrak h+\mathfrak k$, so $\mathfrak p_0\cap Z_{\mathfrak g_0}(\mathfrak a_0)=\mathfrak a_0$, any abelian subspace of $\mathfrak p_0$ containing $\mathfrak a_0$ lies in $\mathfrak a_0$, and by [L5] the split part $\mathfrak a_0$ has maximal dimension: $\mathfrak h_0$ is maximally noncompact. [L3, L5, L6, step 1.2, algebra]

2.3 A $\theta$-stable Cartan subalgebra $\mathfrak h_0''$ with no real roots is determined by its compact part: $\mathfrak h_0''=Z_{\mathfrak g_0}(\mathfrak h_0''\cap\mathfrak k_0)$. Indeed every $X\in\mathfrak h_0''\cap\mathfrak k_0$ centralizes $\mathfrak h_0''$ by step 1.2, so $\mathfrak h_0''\subseteq Z_{\mathfrak g_0}(\mathfrak h_0''\cap\mathfrak k_0)$; conversely, if $\alpha$ is a root of $(\mathfrak g,\mathfrak h_0'')$ vanishing on $\mathfrak h_0''\cap\mathfrak k_0$ then $\alpha$ is real, so no root space of $(\mathfrak g,\mathfrak h_0'')$ lies in the centralizer of $\mathfrak h_0''\cap\mathfrak k_0$ except through $\mathfrak h_0''$ itself, and $Z_{\mathfrak g_0}(\mathfrak h_0''\cap\mathfrak k_0)=\mathfrak h_0''$. [L3, L4, step 1.2, algebra]

3.1 The operators of step 2.1 act on $\mathbb Ch_\beta\oplus\mathbb C(E_\beta+\sigma E_\beta)$ and on $\mathbb Ch_\alpha\oplus\mathbb C(E_\alpha+\theta E_\alpha)$ as scaled rotations with square $-(\pi/2)^2\mathrm{id}$, so $c_\beta(h_\beta)=E_\beta+\sigma E_\beta$, $c_\beta(E_\beta+\sigma E_\beta)=-h_\beta$, $c_\beta(E_\beta-\sigma E_\beta)=E_\beta-\sigma E_\beta$, and $d_\alpha(h_\alpha)=i(E_\alpha+\theta E_\alpha)$, $d_\alpha(E_\alpha-\theta E_\alpha)=E_\alpha-\theta E_\alpha$, $d_\alpha(E_\alpha+\theta E_\alpha)=ih_\alpha$. Moreover $c_\beta$ fixes every element of $\ker(\beta|_{\mathfrak h_0})$ and $d_\alpha$ fixes every element of $\ker(\alpha|_{\mathfrak h_0})$, because $[E_\beta,X]=[\sigma E_\beta,X]=0=[E_\alpha,Y]=[\theta E_\alpha,Y]$ for $X\in\ker(\beta|_{\mathfrak h_0})$, $Y\in\ker(\alpha|_{\mathfrak h_0})$. [step 2.1, algebra]

4.1 Since $\beta(h_\beta)=2$ and $\alpha(h_\alpha)=2$, one has $\mathfrak h=\ker\beta\oplus\mathbb Ch_\beta=\ker\alpha\oplus\mathbb Ch_\alpha$. The brackets of $W_\beta$ and $W_\alpha$ with the corresponding kernels vanish, so the transforms fix those kernels pointwise; step 3.1 gives $c_\beta(h_\beta)=E_\beta+\sigma E_\beta$ and $d_\alpha(h_\alpha)=i(E_\alpha+\theta E_\alpha)$. Therefore $c_\beta(\mathfrak h)=(\ker\beta|_{\mathfrak h_0})_{\mathbb C}\oplus\mathbb C(E_\beta+\sigma E_\beta)$ and $d_\alpha(\mathfrak h)=(\ker\alpha|_{\mathfrak h_0})_{\mathbb C}\oplus\mathbb C\,i(E_\alpha+\theta E_\alpha)$, so that $\mathfrak h_0':=\mathfrak g_0\cap c_\beta(\mathfrak h)=\ker(\beta|_{\mathfrak h_0})\oplus\mathbb R(E_\beta+\sigma E_\beta)$ and $\mathfrak h_0'':=\mathfrak g_0\cap d_\alpha(\mathfrak h)=\ker(\alpha|_{\mathfrak h_0})\oplus\mathbb R(E_\alpha+\theta E_\alpha)$. [L2, step 3.1, algebra]

5.1 The subspaces $\mathfrak h_0'$ and $\mathfrak h_0''$ of step 4.1 are $\theta$-stable: $\theta$ preserves $\ker(\beta|_{\mathfrak h_0})$ and $\ker(\alpha|_{\mathfrak h_0})$ because $\theta\beta=\beta$ and $\theta\alpha=-\alpha$, it reverses $E_\beta+\sigma E_\beta$ since $E_\beta,\sigma E_\beta\in\mathfrak p$, and fixes $E_\alpha+\theta E_\alpha$. Both are Cartan subalgebras of $\mathfrak g_0$ by [L4], because their complexifications $c_\beta(\mathfrak h)$ and $d_\alpha(\mathfrak h)$ are Cartan subalgebras of $\mathfrak g$ as images of $\mathfrak h$ under automorphisms, and both are nilpotent: $[\mathfrak h_0',\mathfrak h_0']\subseteq[\ker\beta,\ker\beta]\subseteq\ker\beta$ with $[E_\beta+\sigma E_\beta,\ker\beta]=0$ and $\ker\beta$ nilpotent, and likewise for $\mathfrak h_0''$. [L4, step 4.1, algebra]

6.1 The dimension counts are $\dim(\mathfrak h_0'\cap\mathfrak p_0)=\dim\mathfrak a_0+1$, $\dim(\mathfrak h_0'\cap\mathfrak k_0)=\dim\mathfrak t_0-1$, $\dim(\mathfrak h_0''\cap\mathfrak k_0)=\dim\mathfrak t_0+1$ and $\dim(\mathfrak h_0''\cap\mathfrak p_0)=\dim\mathfrak a_0-1$: intersecting the two descriptions of step 4.1 with $\mathfrak p_0$ respectively $\mathfrak k_0$ gives $\mathfrak h_0'\cap\mathfrak p_0=\mathfrak a_0\oplus\mathbb R(E_\beta+\sigma E_\beta)$ and $\mathfrak h_0'\cap\mathfrak k_0=\ker(\beta|_{\mathfrak t_0})$ since $\mathfrak g_\beta\subseteq\mathfrak p$, while $\mathfrak h_0''\cap\mathfrak k_0=\mathfrak t_0\oplus\mathbb R(E_\alpha+\theta E_\alpha)$ and $\mathfrak h_0''\cap\mathfrak p_0=\ker(\alpha|_{\mathfrak a_0})$. [step 5.1, algebra]

7.1 By steps 5.1 and 6.1, a $\theta$-stable Cartan subalgebra with a real root is never maximally compact and one with a noncompact imaginary root is never maximally noncompact, while by step 2.2 a $\theta$-stable Cartan subalgebra with no real roots is maximally compact and one with no noncompact imaginary roots is maximally noncompact; hence a $\theta$-stable Cartan subalgebra is maximally compact if and only if it has no real roots, and maximally noncompact if and only if it has no noncompact imaginary roots. [step 2.2, step 6.1]

7.2 Let $\alpha$ be a real root, let $\mathfrak h_0''=\mathfrak g_0\cap d_\alpha(\mathfrak h)$ be the Cartan subalgebra of step 4.1 and put $\alpha'':=d_\alpha(\alpha)$ and $E_{\alpha''}:=-i\,d_\alpha(E_\alpha)$. Then $\alpha''$ is a noncompact imaginary root of $(\mathfrak g,\mathfrak h_0'')$ with $|\alpha''|^2=|\alpha|^2$: the space $\mathfrak g_{\alpha''}=d_\alpha(\mathfrak g_\alpha)$ is complex one-dimensional with root vector $E_{\alpha''}$ satisfying $\theta E_{\alpha''}=-E_{\alpha''}$ because $\theta d_\alpha\theta^{-1}=d_\alpha^{-1}$ gives $\theta d_\alpha(E_\alpha)=d_\alpha^{-1}(\theta E_\alpha)$ and $\theta E_\alpha$ spans $\mathfrak g_{-\alpha}$, while $\alpha''$ vanishes on $\mathfrak h_0''\cap\mathfrak p_0=\ker(\alpha|_{\mathfrak a_0})$ and equals $2i$ on $E_\alpha+\theta E_\alpha\in\mathfrak h_0''\cap\mathfrak k_0$; finally $H_{\alpha''}=d_\alpha(H_\alpha)$ and, since $\sigma d_\alpha\sigma^{-1}=d_\alpha^{-1}$ and $\theta d_\alpha^{-1}=d_\alpha\theta$, one has $|\alpha''|^2=-B(d_\alpha H_\alpha,\theta d_\alpha^{-1}H_\alpha)=-B(H_\alpha,\theta H_\alpha)=|\alpha|^2$. [step 3.1, step 6.1, algebra]

8.1 Let $\mathfrak h_0,\mathfrak h_0'$ be maximally compact $\theta$-stable Cartan subalgebras, so that $\mathfrak t_0,\mathfrak t_0'$ are maximal abelian subspaces of $\mathfrak k_0$ with $\dim\mathfrak t_0=\dim\mathfrak t_0'$ by step 7.1 and [L6]; then $\exp\mathfrak t_0,\exp\mathfrak t_0'$ are maximal tori of $K$ by [L6], so conjugacy of maximal tori gives $k\in K$ with $\operatorname{Ad}_k\mathfrak t_0=\mathfrak t_0'$. [L6, step 7.1]

8.2 Iterating step 6.1: if $\mathfrak h_0$ is not maximally compact, then by step 7.1 it has a real root $\alpha$ and the Cayley transform produces a $\theta$-stable Cartan subalgebra with compact dimension $\dim\mathfrak t_0+1$; iterating, the compact dimension strictly increases and is bounded by $\dim\mathfrak k_0$, so after finitely many steps one reaches a $\theta$-stable Cartan subalgebra with no real roots, which is maximally compact by step 7.1. [step 6.1, step 7.1, induction, algebra]

9.1 With the choices of step 7.2 one has $E_{\alpha''}+\sigma E_{\alpha''}=h_\alpha$ and $B(E_{\alpha''},\sigma E_{\alpha''})=\tfrac12B(h_\alpha,h_\alpha)=2/|\alpha|^2=2/|\alpha''|^2$ by [L2] and step 7.2, so $E_{\alpha''}$ is a normalized root vector for the noncompact imaginary root $\alpha''$; moreover $\sigma E_{\alpha''}-E_{\alpha''}=i\,d_\alpha^{-1}(E_\alpha)+i\,d_\alpha(E_\alpha)=i(E_\alpha-\theta E_\alpha)$, so $c_{\alpha''}=e^{i\tfrac\pi4\operatorname{ad}(E_\alpha-\theta E_\alpha)}=d_\alpha^{-1}$ and therefore $c_{\alpha''}(\mathfrak h_0'')=d_\alpha^{-1}(\mathfrak g_0\cap d_\alpha(\mathfrak h))=\mathfrak g_0\cap\mathfrak h=\mathfrak h_0$: the noncompact-imaginary transform for $\alpha''$ reverses the real-root transform for $\alpha$. [L2, step 7.2, step 8.1, algebra]

9.2 The maximally compact $\theta$-stable Cartan subalgebras are mutually conjugate: by step 2.3 a $\theta$-stable Cartan subalgebra with no real roots equals $Z_{\mathfrak g_0}(\mathfrak t_0'')$ for its compact part $\mathfrak t_0''$, so if $k\in K$ satisfies $\operatorname{Ad}_k\mathfrak t_0=\mathfrak t_0'$ by step 8.1, then $\operatorname{Ad}_k\mathfrak h_0$ and $\mathfrak h_0'$ are both $\theta$-stable Cartan subalgebras with no real roots and compact part $\mathfrak t_0'$, and by step 2.3 they coincide: $\operatorname{Ad}_k\mathfrak h_0=\mathfrak h_0'$ with $\operatorname{Ad}_k\in\operatorname{Int}(\mathfrak g_0)$. [step 2.3, step 8.1]

10.1 By step 8.2 every $\theta$-stable Cartan subalgebra is carried by a finite sequence of real-root Cayley transforms to a maximally compact one, and by step 9.1 each step of that sequence is reversed by a noncompact-imaginary transform; combined with the conjugacy statements of step 9.2 (and the same argument with $\mathfrak p_0$ in place of $\mathfrak k_0$, using [L5]) this gives the assertions 1-4 of the Statement. [A1, step 8.2, step 9.1, step 9.2] ∎
