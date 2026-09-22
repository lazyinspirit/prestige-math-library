---
id: thm-cayley-transforms-connect-theta-stable-cartans-in-the-classification
kind: theorem
title: Cayley transforms connect theta-stable Cartans in the classification
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-theta-stable-cartan-subalgebra-and-compact-split-parts, def-cayley-transform-of-a-theta-stable-cartan-subalgebra, def-axiom-of-choice, prop-bracket-relations-and-killing-signs-in-a-cartan-decomposition, prop-trace-forms-are-symmetric-and-invariant, def-cartan-involution-of-a-real-semisimple-lie-algebra, prop-complexification-preserves-semisimplicity, thm-root-space-decomposition-of-a-complex-semisimple-lie-algebra, thm-root-spaces-of-a-complex-semisimple-lie-algebra-are-one-dimensional, prop-killing-form-orthogonality-of-root-spaces, def-killing-dual-vector-of-a-root, def-coroot-of-a-lie-algebra-root, prop-bracket-of-opposite-root-spaces-is-the-root-line-in-the-cartan-subalgebra, def-cartan-subalgebra-of-a-lie-algebra, def-normalizer-of-a-lie-subalgebra, def-lower-central-series-and-nilpotent-lie-algebra, cor-real-spectral-theorem-for-self-adjoint-endomorphisms, thm-complex-spectral-theorem-for-normal-endomorphisms, thm-simultaneous-diagonalisation-of-commuting-diagonalisable-endomorphisms, lem-finite-dimensional-space-over-an-infinite-field-is-not-a-finite-union-of-proper-subspaces, thm-conjugacy-of-maximal-tori, def-torus-and-maximal-torus-in-a-compact-lie-group, thm-cartans-closed-subgroup-theorem, prop-commuting-lie-algebra-elements-have-multiplicative-exponentials, cor-the-exponential-map-is-a-local-diffeomorphism-at-zero, cor-the-lie-algebra-of-the-automorphism-group-of-a-semisimple-lie-algebra, cor-semisimple-lie-algebras-are-centerless-and-perfect]
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

**Given:** AC; the real semisimple algebra, involution and theta-stable Cartan of the statement. Write $B$ for the complex Killing form, $\sigma$ for real conjugation, and $\langle Z,W\rangle=-B(Z,\theta\sigma W)$. Roots transported by an automorphism $u$ mean $u(\alpha)=\alpha\circ u^{-1}$ on $u(\mathfrak h)$.

[A1] AC is [[def-axiom-of-choice]], covering the choice assumptions of the Lie-group and complex Cartan interfaces below.

[L1] The Cartan decomposition has $B$ negative on $\mathfrak k_0$, positive on $\mathfrak p_0$, with orthogonal summands and the usual three bracket inclusions. The Killing form is invariant and symmetric ([[prop-bracket-relations-and-killing-signs-in-a-cartan-decomposition]], [[prop-trace-forms-are-symmetric-and-invariant]], [[def-cartan-involution-of-a-real-semisimple-lie-algebra]]).

[L2] The complexification is semisimple. For a complex Cartan there is the direct root-space decomposition with zero space the Cartan; nonzero root spaces have dimension one, and $B$ pairs only opposite weights and is nondegenerate on the Cartan ([[prop-complexification-preserves-semisimplicity]], [[thm-root-space-decomposition-of-a-complex-semisimple-lie-algebra]], [[thm-root-spaces-of-a-complex-semisimple-lie-algebra-are-one-dimensional]], [[prop-killing-form-orthogonality-of-root-spaces]]).

[L3] Killing-dual vectors and coroots satisfy $B(H_\gamma,H)=\gamma(H)$ and $h_\gamma=2H_\gamma/B(H_\gamma,H_\gamma)$. Opposite root spaces bracket into $\mathbb CH_\gamma$ ([[def-killing-dual-vector-of-a-root]], [[def-coroot-of-a-lie-algebra-root]], [[prop-bracket-of-opposite-root-spaces-is-the-root-line-in-the-cartan-subalgebra]]).

[L4] A Cartan is nilpotent and self-normalizing; theta-stability gives $\mathfrak h_0=\mathfrak t_0\oplus\mathfrak a_0$. The real and imaginary root conventions are vanishing on $\mathfrak t_0$ and $\mathfrak a_0$, respectively ([[def-cartan-subalgebra-of-a-lie-algebra]], [[def-normalizer-of-a-lie-subalgebra]], [[def-lower-central-series-and-nilpotent-lie-algebra]], [[def-theta-stable-cartan-subalgebra-and-compact-split-parts]], [[def-cayley-transform-of-a-theta-stable-cartan-subalgebra]]).

[L5] Finite-dimensional self-adjoint real operators and normal complex operators are diagonalizable; commuting diagonalizable families are simultaneously diagonalizable. Finitely many proper linear subspaces cannot cover a finite-dimensional space over an infinite field ([[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]], [[thm-complex-spectral-theorem-for-normal-endomorphisms]], [[thm-simultaneous-diagonalisation-of-commuting-diagonalisable-endomorphisms]], [[lem-finite-dimensional-space-over-an-infinite-field-is-not-a-finite-union-of-proper-subspaces]]).

[L6] Maximal tori in a compact connected group are conjugate. A torus means a compact connected abelian closed embedded subgroup. Closed subgroups are Lie subgroups; commuting elements have multiplicative exponentials, and the exponential is a local diffeomorphism at zero ([[thm-conjugacy-of-maximal-tori]], [[def-torus-and-maximal-torus-in-a-compact-lie-group]], [[thm-cartans-closed-subgroup-theorem]], [[prop-commuting-lie-algebra-elements-have-multiplicative-exponentials]], [[cor-the-exponential-map-is-a-local-diffeomorphism-at-zero]]).

[L7] We use the normalizations and explicit complex automorphisms from [[def-cayley-transform-of-a-theta-stable-cartan-subalgebra]]: for a real root, $E\in\mathfrak g_\alpha\cap\mathfrak g_0$, $B(E,\theta E)=-2/|\alpha|^2$, and $d=\exp(i\pi\operatorname{ad}(\theta E-E)/4)$; for a noncompact imaginary root, $E\in\mathfrak g_\beta$, $B(E,\sigma E)=2/|\beta|^2$, and $c=\exp(\pi\operatorname{ad}(\sigma E-E)/4)$. The norm is $|\gamma|^2=\langle H_\gamma,H_\gamma\rangle$. The signs and normalization existence are also checked below.

[L8] The automorphism group of a real semisimple algebra is a closed Lie subgroup of its general linear group, with Lie algebra $\operatorname{Der}(\mathfrak g_0)=\operatorname{ad}(\mathfrak g_0)$; the center of the algebra is zero ([[cor-the-lie-algebra-of-the-automorphism-group-of-a-semisimple-lie-algebra]], [[cor-semisimple-lie-algebras-are-centerless-and-perfect]]).

## Proof

**Proof technique:** direct.

1.1 Invariance gives $(\operatorname{ad}X)^*=-\operatorname{ad}(\theta X)$ for $X\in\mathfrak g_0$ and the inner product $-B(\cdot,\theta\cdot)$. On a theta-stable Cartan, each $\operatorname{ad}T$ for $T\in\mathfrak t_0$ is skew-adjoint and each $\operatorname{ad}A$ for $A\in\mathfrak a_0$ is self-adjoint. Their restrictions to that invariant subspace are nilpotent by nilpotence of the Cartan. They are diagonalizable by [L5], so those restrictions vanish. Thus the entire Cartan is abelian. Its complexification is nilpotent and self-normalizing: if $X+iY$ normalizes it, comparison of real and imaginary parts against $\mathfrak h_0$ shows that $X,Y$ normalize $\mathfrak h_0$ and belong to it. Hence it is a complex Cartan and [L2] applies. The same adjoint identities on the ambient algebra imply that roots are imaginary on $\mathfrak t_0$ and real on $\mathfrak a_0$. [L1, L2, L4, L5, algebra]

1.2 We construct the compact group needed for conjugacy without any assumption on a chosen global cover. Let $K$ be the identity component of $\operatorname{Aut}(\mathfrak g_0)\cap O(B_\theta)$. This intersection is a closed subgroup of the compact orthogonal group by [L8], so $K$ is a compact connected Lie group by [L6]. An automorphism preserves $B$ by invariance of trace under change of basis; therefore it preserves $B_\theta$ exactly when it commutes with $\theta$. Its tangent algebra consists of $\operatorname{ad}X$ commuting with $\theta$, equivalently $\operatorname{ad}(X-\theta X)=0$, so it is $\operatorname{ad}\mathfrak k_0$ by centerlessness. Conversely the exponentials of these derivations lie in the intersection. A connected Lie group is generated by an exponential identity neighborhood: the subgroup so generated is open, and its other cosets are open, so connectedness makes it the whole group. Thus all members of $K$ are products of $\exp(\operatorname{ad}X)$, $X\in\mathfrak k_0$, and are real inner automorphisms. They preserve both $\mathfrak k_0$ and $\mathfrak p_0$. [A1, L1, L6, L8, algebra]

2.1 Put $\mathfrak h_{\mathbb R}=i\mathfrak t_0\oplus\mathfrak a_0$. The form $B$ is real positive definite there, and every root is real on it by step 1.1. Thus its Killing-dual vector belongs to this real subspace. For a real root $H_\alpha\in\mathfrak a_0$, while for an imaginary root $H_\beta\in i\mathfrak t_0$, by orthogonality and the respective vanishing conditions. In both cases $\theta\sigma H_\gamma=-H_\gamma$, so $|\gamma|^2=B(H_\gamma,H_\gamma)>0$ and $h_\gamma=2H_\gamma/|\gamma|^2$. In particular $B(iT,iT)=-B(T,T)>0$ for nonzero $T\in\mathfrak t_0$; imaginary roots do not introduce a negative coroot sign. Bracketing root vectors shows $\theta\mathfrak g_\gamma=\mathfrak g_{\theta\gamma}$ and $\sigma\mathfrak g_\gamma=\mathfrak g_{-\theta\gamma}$. An imaginary root space is a one-dimensional theta eigenspace. [L1, L2, L3, L4, step 1.1, algebra]

2.2 In any compact connected Lie group $C$, a maximal abelian Lie subalgebra $\mathfrak b$ is the Lie algebra of a maximal torus. Indeed the closure of $\exp\mathfrak b$ is connected, compact and abelian, with Lie algebra containing $\mathfrak b$; abelianness and maximality give equality. Any larger torus has larger abelian Lie algebra, unless it has the same algebra, in which case the exponential neighborhood makes the original torus open and hence equal to the connected larger one. Conversely a maximal torus has maximal abelian Lie algebra by the same closure argument applied to an abelian enlargement. Here closure preserves connectedness, and continuity of the commutator extends commutativity to the closure. It follows from [L6] that maximal abelian Lie subalgebras of $C$ are conjugate. Apply this to $K$ of step 1.2, identifying its Lie algebra with $\mathfrak k_0$ by the injective map $\operatorname{ad}$; conjugation on $\operatorname{ad}\mathfrak k_0$ corresponds to the natural $K$-action on $\mathfrak k_0$. [L6, L8, step 1.2, algebra]

2.3 Any two maximal abelian subspaces $\mathfrak a,\mathfrak a'$ of $\mathfrak p_0$ are conjugate under $K$. The commuting self-adjoint maps $\operatorname{ad}A$, $A\in\mathfrak a$, have finitely many simultaneous real weights by [L5]. Choose $H\in\mathfrak a$ off the kernels of their nonzero weights; then $Z_{\mathfrak p_0}(H)=Z_{\mathfrak p_0}(\mathfrak a)=\mathfrak a$, the last equality by maximal abelianness. Similarly choose $H'\in\mathfrak a'$. The function $k\mapsto B(kH',H)$ has an extremum on compact $K$. Differentiating there along $\exp(t\operatorname{ad}Z)$, for $Z\in\mathfrak k_0$, gives $B(Z,[kH',H])=0$. Since the bracket lies in $\mathfrak k_0$ and $B$ is nondegenerate there, it vanishes. Hence $kH'\in\mathfrak a$ and $\mathfrak a\subseteq Z_{\mathfrak p_0}(kH')=k\mathfrak a'$. Maximality makes this equality. Empty families of nonzero weights cause no difficulty: choose $H=0$, in which case the same centralizer assertion holds. [L1, L5, step 1.2, algebra]

3.1 For opposite root vectors, invariance and [L3] give $[E,F]=B(E,F)H_\gamma$: pair with an arbitrary $H\in\mathfrak h$ to get $B([E,F],H)=\gamma(H)B(E,F)$ and use nondegeneracy in [L2]. If $\beta$ is noncompact imaginary, then $\sigma E\in\mathfrak g_{-\beta}$ and $B(E,\sigma E)=\langle E,E\rangle>0$. If $\alpha$ is real, its sigma-stable root line has a nonzero real vector $E$ (take $v+\sigma v$ or $i(v-\sigma v)$), and $-B(E,\theta E)=\langle E,E\rangle>0$. Positive real rescaling gives [L7]. Consequently $(E_\beta,\sigma E_\beta,h_\beta)$ and $(E_\alpha,-\theta E_\alpha,h_\alpha)$ satisfy $[h,e]=2e$, $[h,f]=-2f$, $[e,f]=h$. [L1, L2, L3, L7, step 2.1, algebra]

3.2 The root decomposition gives the centralizer of a subspace of $\mathfrak h$ by retaining precisely its vanishing roots. Thus if there is no real root, $Z_{\mathfrak g_0}(\mathfrak t_0)=\mathfrak h_0$ and $Z_{\mathfrak k_0}(\mathfrak t_0)=\mathfrak t_0$. This makes $\mathfrak t_0$ maximal abelian in $\mathfrak k_0$, and by step 2.2 its dimension bounds the compact part of every theta-stable Cartan. If there is no noncompact imaginary root, the root spaces in $Z_{\mathfrak g}(\mathfrak a_0)$ other than $\mathfrak h$ are compact imaginary and lie in $\mathfrak k$. Hence $Z_{\mathfrak p_0}(\mathfrak a_0)=\mathfrak a_0$, so $\mathfrak a_0$ is maximal abelian in $\mathfrak p_0$ and step 2.3 makes its dimension maximal among split parts. Abelian subspaces can always be enlarged to maximal ones by maximizing their bounded integer dimension. [L2, L4, step 1.1, step 2.1, step 2.2, step 2.3, algebra]

4.1 For an imaginary root write $e=E_\beta$, $f=\sigma e$, $h=h_\beta$. The operator $D=(\pi/4)\operatorname{ad}(f-e)$ sends $h$ to $(\pi/2)(e+f)$ and $e+f$ to $-(\pi/2)h$, and kills $e-f$. Therefore its exponential satisfies $c(h)=e+f$, $c(e+f)=-h$, $c(e-f)=e-f$. For a real root write $e=E_\alpha$, $f=-\theta e$, $h=h_\alpha$. The operator $D=-(i\pi/4)\operatorname{ad}(e+f)$ sends $h$ to $(i\pi/2)(e-f)$ and $e-f$ to $(i\pi/2)h$, and kills $e+f$. Thus $d(h)=i(e-f)$, $d(e-f)=ih$, $d(e+f)=e+f$. In each two-dimensional plane the square of $D$ is $-(\pi/2)^2$, so these formulas follow directly from the exponential series. Both transforms fix the relevant root kernel in $\mathfrak h$, since both root vectors commute with it. [L7, step 3.1, algebra]

5.1 Decompose $\mathfrak h=\ker\gamma\oplus\mathbb Ch_\gamma$. In the imaginary case, $\ker\beta$ is the complexification of its kernel on $\mathfrak h_0$, and $e+\sigma e$ is nonzero, real and in $\mathfrak p_0$. Step 4.1 therefore gives $\mathfrak g_0\cap c(\mathfrak h)=\ker(\beta|_{\mathfrak h_0})\oplus\mathbb R(e+\sigma e)$. Its compact dimension decreases by one and its split dimension increases by one. In the real case the line $\mathbb C i(e+\theta e)=\mathbb C(e+\theta e)$ has real part $\mathbb R(e+\theta e)\subseteq\mathfrak k_0$, giving the stated kernel formula for $d$ and the opposite dimension changes. The new lines are independent of the kernels because the root decomposition separates them from $\mathfrak h$. These subspaces are theta-stable and their complexifications are exactly the transformed complex Cartans; they are abelian, and any real normalizer complexifies into that Cartan, so they are real Cartan subalgebras. [L2, L4, step 1.1, step 2.1, step 4.1, algebra]

6.1 For a real root retain $e,f,h$ from step 4.1, so $f=-\theta e$ and all three are real. Put $\beta=d(\alpha)$ and $E'=-id(e)=(h-i(e+f))/2$. This is a vector in the transported root line. Both $h$ and $e+f$ are in $\mathfrak p_0$, so $\theta E'=-E'$. The root $\beta$ vanishes on the new split part $\ker(\alpha|_{\mathfrak a_0})$ and on the old compact kernel; on the new compact generator $e-f$ it has value $-2i$, because $d^{-1}(e-f)=-ih$. Thus it is noncompact imaginary. Its Killing-dual vector is $dH_\alpha$, whence $|\beta|^2=B(dH_\alpha,dH_\alpha)=|\alpha|^2$ by step 2.1 and preservation of $B$. Root orthogonality gives $B(h,e+f)=0$, $B(e+f,e+f)=2B(e,f)=4/|\alpha|^2=B(h,h)$. Consequently $E'+\sigma E'=h$, $B(E',\sigma E')=2/|\alpha|^2$ and $\sigma E'-E'=i(e+f)$. Hence $c_\beta=\exp(i\pi\operatorname{ad}(e+f)/4)=d^{-1}$. The inverse operation on real Cartans is $\mathfrak g_0\cap c_\beta((\mathfrak g_0\cap d\mathfrak h)_{\mathbb C})=\mathfrak g_0\cap\mathfrak h=\mathfrak h_0$, using the complexification equality in step 5.1. No assertion that the complex automorphism $d$ preserves $\mathfrak g_0$ is needed. [L2, L3, L7, step 2.1, step 4.1, step 5.1, algebra]

6.2 Step 5.1 shows that a real root prevents maximal compactness and a noncompact imaginary root prevents maximal split dimension. Together with step 3.2 this proves both criteria: maximal compactness is equivalent to absence of real roots, and maximal split dimension to absence of noncompact imaginary roots. Repeated real-root transforms increase the integer compact dimension by one, bounded by $\dim\mathfrak k_0$; therefore they stop at a maximally compact Cartan. Independently, repeated noncompact-imaginary transforms increase split dimension by one, bounded by $\dim\mathfrak p_0$, and stop at a maximally noncompact Cartan. [step 3.2, step 5.1, algebra]

7.1 For two maximally compact Cartans, step 6.2 and step 3.2 make their compact parts maximal abelian in $\mathfrak k_0$ and make each Cartan the centralizer of its compact part. Step 2.2 conjugates the compact parts by $K$, and thus conjugates those centralizers. For two maximally noncompact Cartans, step 6.2 and step 3.2 make their split parts maximal abelian in $\mathfrak p_0$; step 2.3 first conjugates these to a common $\mathfrak a$. Write the Cartans as $\mathfrak t\oplus\mathfrak a$ and $\mathfrak t'\oplus\mathfrak a$. Put $\mathfrak m=Z_{\mathfrak k_0}(\mathfrak a)$. Each compact part is maximal abelian in $\mathfrak m$: a vector there commuting with $\mathfrak t$ also centralizes the whole Cartan and hence belongs to it by self-normalization, and its compact component belongs to $\mathfrak t$. The pointwise stabilizer $M=\{k\in K:kA=A\text{ for all }A\in\mathfrak a\}$ is closed and compact. Differentiating and exponentiating its defining equations shows $\operatorname{Lie}M=\operatorname{ad}\mathfrak m$. Apply step 2.2 to the compact connected group $M^0$: it conjugates $\mathfrak t$ to $\mathfrak t'$ while fixing $\mathfrak a$ pointwise. Thus it conjugates the full Cartans. All conjugations lie in $K$ and are real inner by step 1.2. [L4, L6, L8, step 1.2, step 2.2, step 2.3, step 3.2, step 6.2, algebra]

8.1 The kernel and dimension formulas of step 5.1 prove assertions 1 and 2; step 6.1 proves the compatible inverse assertion 3; steps 6.2 and 7.1 prove assertion 4. In the zero algebra there are no roots, both maximal dimensions are zero, and the empty sequence suffices. Compact factors and zero split part cause no exception to the compact-group constructions or bounded-dimension arguments. [A1, step 5.1, step 6.1, step 6.2, step 7.1] ∎
