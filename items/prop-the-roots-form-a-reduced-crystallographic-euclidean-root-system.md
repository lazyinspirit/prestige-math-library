---
id: prop-the-roots-form-a-reduced-crystallographic-euclidean-root-system
kind: proposition
title: The roots form a reduced crystallographic Euclidean root system
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-root-space-decomposition-of-a-complex-semisimple-lie-algebra, thm-roots-of-a-complex-semisimple-lie-algebra-form-a-reduced-crystallographic-root-system, thm-root-spaces-of-a-complex-semisimple-lie-algebra-are-one-dimensional, prop-the-center-is-the-common-kernel-of-all-roots-inside-the-cartan-subalgebra, prop-killing-form-orthogonality-of-root-spaces, def-killing-form-of-a-finite-dimensional-lie-algebra, def-killing-dual-vector-of-a-root, lem-killing-length-of-a-root-is-nonzero, def-coroot-of-a-lie-algebra-root, cor-cartan-integers-are-integral, thm-root-reflections-preserve-the-root-set, cor-the-only-scalar-multiples-of-a-root-that-are-roots-are-plus-or-minus-the-root, def-root-reflection-from-a-coroot, def-root-and-root-space-relative-to-a-cartan-subalgebra, thm-trace-is-sum-of-eigenvalues, def-toral-and-maximal-toral-subalgebra, def-reduced-crystallographic-euclidean-root-system, def-positive-system-and-base-of-simple-roots, thm-simple-roots-form-a-basis-and-every-root-has-one-sign-of-integral-coordinates, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed."
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter II §§4–5, especially Corollary 2.38 and Theorem 2.42"
    - title: "Alexander Kirillov Jr., An Introduction to Lie Groups and Lie Algebras"
      url: "https://www.math.stonybrook.edu/~kirillov/liegroups/liegroups.pdf"
      locator: "§§6.6–7.4, especially Theorems 6.45, 7.3, and 7.16"
proof_strategy: direct
---

## Statement

Assume the Axiom of Choice. Let $\mathfrak g$ be a finite-dimensional complex
semisimple Lie algebra with Cartan subalgebra $\mathfrak h$, root set
$\Phi=\Phi(\mathfrak g,\mathfrak h)$ and Killing form $B$
([[def-root-and-root-space-relative-to-a-cartan-subalgebra]],
[[def-killing-form-of-a-finite-dimensional-lie-algebra]]). Let
$$E:=\operatorname{span}_{\mathbb R}\Phi\subseteq\mathfrak h^* ,\qquad \mathfrak h_{\mathbb R}:=\operatorname{span}_{\mathbb R}\{h_\alpha:\alpha\in\Phi\}$$
be the real span of the roots and the real span of the coroots
([[def-coroot-of-a-lie-algebra-root]]). Then:

(i) every $\lambda\in E$ is real valued on $\mathfrak h_{\mathbb R}$, and
restriction is a linear isomorphism $E\to\operatorname{Hom}_{\mathbb R}(\mathfrak h_{\mathbb R},\mathbb R)$;

(ii) $\mathfrak h_{\mathbb R}$ is a real form of $\mathfrak h$, that is
$\mathfrak h=\mathfrak h_{\mathbb R}\oplus i\mathfrak h_{\mathbb R}$, and the
Killing form restricted to $\mathfrak h_{\mathbb R}$ is positive definite;

(iii) the formula
$$(\lambda,\mu):=B(H_\lambda,H_\mu)\qquad(\lambda,\mu\in E),$$
where $H_\lambda\in\mathfrak h_{\mathbb R}$ is the vector with
$B(H_\lambda,H)=\lambda(H)$ for all $H\in\mathfrak h_{\mathbb R}$
([[def-killing-dual-vector-of-a-root]]), defines a positive definite inner
product on $E$, and for all roots $\alpha,\beta$
$$\frac{2(\beta,\alpha)}{(\alpha,\alpha)}=\beta(h_\alpha)\in\mathbb Z ;$$

(iv) with this inner product, $(E,\Phi)$ is a reduced crystallographic
Euclidean root system in the sense of
[[def-reduced-crystallographic-euclidean-root-system]], and for every root
$\alpha$ the abstract reflection $x\mapsto x-\frac{2(x,\alpha)}{(\alpha,\alpha)}\alpha$
of that definition agrees with the reflection
$s_\alpha(\lambda)=\lambda-\lambda(h_\alpha)\alpha$ of
[[def-root-reflection-from-a-coroot]];

(v) if $\Delta=\{\alpha_1,\dots,\alpha_r\}$ is the base of a positive system
of $(E,\Phi)$ ([[def-positive-system-and-base-of-simple-roots]]), then
$\Delta$ is a basis of $E$ and $\{h_{\alpha_1},\dots,h_{\alpha_r}\}$ is a basis
of $\mathfrak h_{\mathbb R}$, hence also a basis of $\mathfrak h$ over
$\mathbb C$.

## Facts & Assumptions

**Given:** The Axiom of Choice, such $\mathfrak g,\mathfrak h,\Phi$ and the Killing form $B$ of [[def-killing-form-of-a-finite-dimensional-lie-algebra]].

[A1] The Axiom of Choice is assumed; it enters only through the root-space suppliers [L1], [L2] and [L6], whose contracts carry the assumption ([[def-axiom-of-choice]]).

[L1] $\Phi$ is finite and $\mathfrak g=\mathfrak h\oplus\bigoplus_{\alpha\in\Phi}\mathfrak g_\alpha$; the root spaces are the eigenspaces of the $\operatorname{ad}_H$ with $H\in\mathfrak h$, and $\mathfrak h=\mathfrak g_0$, the zero eigenspace ([[thm-root-space-decomposition-of-a-complex-semisimple-lie-algebra]], [[def-root-and-root-space-relative-to-a-cartan-subalgebra]]).

[L2] Every root space is one-dimensional, and $\{H\in\mathfrak h:\alpha(H)=0\text{ for all }\alpha\in\Phi\}=0$, so the roots span $\mathfrak h^*$; in particular $\Phi$ contains a basis of $\mathfrak h^*$ ([[thm-root-spaces-of-a-complex-semisimple-lie-algebra-are-one-dimensional]], [[prop-the-center-is-the-common-kernel-of-all-roots-inside-the-cartan-subalgebra]]).

[L3] $B|_{\mathfrak h}$ is nondegenerate, the map $\mathfrak h\to\mathfrak h^*$, $H\mapsto B(H,\cdot)$, is an isomorphism, and for a root $\alpha$ the Killing-dual vector $H_\alpha$ satisfies $\alpha(H_\alpha)=B(H_\alpha,H_\alpha)\ne0$; the coroot $h_\alpha=2H_\alpha/\alpha(H_\alpha)$ satisfies $\alpha(h_\alpha)=2$ ([[prop-killing-form-orthogonality-of-root-spaces]], [[def-killing-dual-vector-of-a-root]], [[lem-killing-length-of-a-root-is-nonzero]], [[def-coroot-of-a-lie-algebra-root]]).

[L4] For the coroots, $\alpha(h_\beta)=\langle\alpha,\beta^\vee\rangle$ is an integer for all roots $\alpha,\beta$ ([[cor-cartan-integers-are-integral]]).

[L5] $B(x,y)=\operatorname{tr}(\operatorname{ad}_x\operatorname{ad}_y)$ on $\mathfrak g$, every $\operatorname{ad}_H$ with $H\in\mathfrak h$ is diagonalisable, and the trace of an endomorphism whose characteristic polynomial factors as $\prod_i(x-\lambda_i)$ equals $\sum_i\lambda_i$ ([[def-killing-form-of-a-finite-dimensional-lie-algebra]], [[def-toral-and-maximal-toral-subalgebra]], [[thm-trace-is-sum-of-eigenvalues]]).

[L6] For roots $\alpha,\beta$ the reflected functional $s_\alpha(\beta)=\beta-\beta(h_\alpha)\alpha$ is again a root, $-\alpha\in\Phi$, and the only scalar multiples of $\alpha$ that are roots are $\alpha$ and $-\alpha$ ([[thm-root-reflections-preserve-the-root-set]], [[def-root-reflection-from-a-coroot]], [[thm-roots-of-a-complex-semisimple-lie-algebra-form-a-reduced-crystallographic-root-system]], [[cor-the-only-scalar-multiples-of-a-root-that-are-roots-are-plus-or-minus-the-root]]).

[L7] For a reduced crystallographic root system the base of a positive system is a basis of the ambient space ([[def-reduced-crystallographic-euclidean-root-system]], [[def-positive-system-and-base-of-simple-roots]], [[thm-simple-roots-form-a-basis-and-every-root-has-one-sign-of-integral-coordinates]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] and [L2], $\Phi$ is finite, $\dim\mathfrak g_\alpha=1$ for every $\alpha\in\Phi$, and $\mathfrak g=\mathfrak h\oplus\bigoplus_{\alpha\in\Phi}\mathfrak g_\alpha$ with $\mathfrak h=\mathfrak g_0$ the zero eigenspace; hence for $H\in\mathfrak h$ the operator $\operatorname{ad}_H$ is diagonalisable on $\mathfrak g$ with eigenvalues $\alpha(H)$, each occurring on the one-dimensional space $\mathfrak g_\alpha$, together with the eigenvalue $0$ on $\mathfrak h$. [A1, L1, L2, L5]

1.2 The roots span $\mathfrak h^*$ over $\mathbb C$: a proper subspace of $\mathfrak h^*$ has nonzero annihilator in $\mathfrak h$, so if $\Phi$ did not span $\mathfrak h^*$ there would be $0\ne H\in\mathfrak h$ with $\alpha(H)=0$ for every $\alpha$, contradicting [L2]. [A1, L2]

2.1 Fix $\alpha\in\Phi$ and put $c=\alpha(H_\alpha)=B(H_\alpha,H_\alpha)\ne0$. Since $H_\alpha=(c/2)h_\alpha$, [L4] gives $\beta(H_\alpha)=(c/2)\beta(h_\alpha)$ for every root $\beta$. Applying the trace formula of [L5] to $H_\alpha$ and using step 1.1 yields $$c=B(H_\alpha,H_\alpha)=\sum_{\beta\in\Phi}\beta(H_\alpha)^2 =\frac{c^2}{4}\sum_{\beta\in\Phi}\beta(h_\alpha)^2.$$ The final sum is a positive integer because it contains the term $\alpha(h_\alpha)^2=4$; division by $c\ne0$ therefore gives $$c=\frac{4}{\sum_{\beta\in\Phi}\beta(h_\alpha)^2}>0.$$ Thus $h_\alpha=(2/c)H_\alpha$ is a nonzero real multiple of $H_\alpha$. [L3, L4, L5, step 1.1]

3.1 By [L3] the map $\varphi:\mathfrak h^*\to\mathfrak h$, $\varphi(\lambda)=H_\lambda$ with $B(H_\lambda,H)=\lambda(H)$ for all $H\in\mathfrak h$, is a $\mathbb C$-linear isomorphism; since the $H_\alpha$ are the images of the roots, step 1.2 shows that $\{H_\alpha:\alpha\in\Phi\}$ spans $\mathfrak h$ over $\mathbb C$, and step 2.1 shows that the coroots $h_\alpha$ have the same complex span. Hence $\mathfrak h_{\mathbb R}$ spans $\mathfrak h$ over $\mathbb C$. [A1, L3, step 1.2, step 2.1]

4.1 Every $\alpha\in\Phi$ is real valued on $\mathfrak h_{\mathbb R}$, because a real linear combination $H=\sum_\beta c_\beta h_\beta$ of coroots satisfies $\alpha(H)=\sum_\beta c_\beta\,\alpha(h_\beta)\in\mathbb R$ by [L4]; consequently, for $H\in\mathfrak h_{\mathbb R}$, [L5] and step 1.1 give $B(H,H)=\operatorname{tr}(\operatorname{ad}_H^2)=\sum_{\alpha\in\Phi}\alpha(H)^2\ge0$, and if $B(H,H)=0$ then $\alpha(H)=0$ for all $\alpha$, so $H=0$ by [L2]; thus $B|_{\mathfrak h_{\mathbb R}}$ is positive definite. [A1, L2, L4, L5, step 1.1, step 3.1]

5.1 The form $B|_{\mathfrak h_{\mathbb R}}$ is positive definite by step 4.1; in particular $\mathfrak h_{\mathbb R}\cap i\mathfrak h_{\mathbb R}=0$, because a vector in the intersection has $\alpha(H)\in\mathbb R\cap i\mathbb R=\{0\}$ for every root by step 4.1 and then $H=0$ by [L2]; moreover $\mathfrak h_{\mathbb R}+i\mathfrak h_{\mathbb R}$ is a $\mathbb C$-subspace of $\mathfrak h$ containing the spanning set $\mathfrak h_{\mathbb R}$ of step 3.1, hence equals $\mathfrak h$, so $\mathfrak h=\mathfrak h_{\mathbb R}\oplus i\mathfrak h_{\mathbb R}$ and $\dim_{\mathbb R}\mathfrak h_{\mathbb R}=\dim_{\mathbb C}\mathfrak h$. [A1, step 3.1, step 4.1]

6.1 Let $\lambda\in E=\operatorname{span}_{\mathbb R}\Phi$, say $\lambda=\sum_\alpha c_\alpha\alpha$ with real $c_\alpha$; then $\lambda(H)\in\mathbb R$ for every $H\in\mathfrak h_{\mathbb R}$ by step 4.1, so restriction is a real linear map $E\to\operatorname{Hom}_{\mathbb R}(\mathfrak h_{\mathbb R},\mathbb R)$, and it is injective because a functional vanishing on $\mathfrak h_{\mathbb R}$ vanishes on the $\mathbb C$-span of $\mathfrak h_{\mathbb R}$, which is $\mathfrak h$ by step 5.1; since $\dim_{\mathbb R}E\ge\dim_{\mathbb C}\mathfrak h^*=\dim_{\mathbb C}\mathfrak h=\dim_{\mathbb R}\mathfrak h_{\mathbb R}=\dim_{\mathbb R}\operatorname{Hom}_{\mathbb R}(\mathfrak h_{\mathbb R},\mathbb R)$ by [L2] and step 5.1, the injection is an isomorphism, and $\Phi$ spans the real space $E$. This proves (i). [A1, L2, step 5.1]

7.1 For $\lambda,\mu\in E$ define $(\lambda,\mu):=B(H_\lambda,H_\mu)$, where $H_\lambda\in\mathfrak h_{\mathbb R}$ is characterised by $B(H_\lambda,H)=\lambda(H)$ for all $H\in\mathfrak h_{\mathbb R}$; this is bilinear, symmetric and positive definite by step 4.1, so it is an inner product on $E$. This proves the first assertion of (iii). [A1, step 4.1, step 6.1]

8.1 For roots $\alpha,\beta$ we have $H_\alpha\in\mathfrak h_{\mathbb R}$ and $\frac{2(\beta,\alpha)}{(\alpha,\alpha)}=\frac{2B(H_\beta,H_\alpha)}{B(H_\alpha,H_\alpha)}=\frac{2\beta(H_\alpha)}{\alpha(H_\alpha)}=\beta(\frac{2H_\alpha}{\alpha(H_\alpha)})=\beta(h_\alpha)\in\mathbb Z$ by [L3], [L4] and step 7.1; this is the crystallographic identity in (iii), and it identifies the abstract reflection $x\mapsto x-\frac{2(x,\alpha)}{(\alpha,\alpha)}\alpha$ with $s_\alpha(x)=x-x(h_\alpha)\alpha$ of [L6]. [A1, L3, L4, step 7.1]

9.1 The set $\Phi\subseteq E$ is finite, consists of nonzero vectors and spans $E$ by step 6.1; the reflection identity of step 8.1 shows that $s_\alpha(\Phi)\subseteq\Phi$ for every $\alpha$, because $s_\alpha(\beta)$ is a root for all roots $\beta$ by [L6] and $s_\alpha$ is involutive, so $s_\alpha(\Phi)=\Phi$; the crystallographic integrality condition is step 8.1; and reducedness holds because the only scalar multiples of a root that are roots are $\alpha$ and $-\alpha$, both of which lie in $\Phi$, by [L6]; hence $(E,\Phi)$ is a reduced crystallographic Euclidean root system whose reflections are exactly the reflections $s_\alpha$ of [L6]. This proves (iv). [A1, L6, step 6.1, step 8.1]

10.1 Let $\Delta=\{\alpha_1,\dots,\alpha_r\}$ be the base of a positive system of $(E,\Phi)$; by [L7] it is a basis of $E$, so under the isomorphism $E\to\mathfrak h_{\mathbb R}$, $\lambda\mapsto H_\lambda$, of step 6.1 the vectors $H_{\alpha_1},\dots,H_{\alpha_r}$ form a basis of $\mathfrak h_{\mathbb R}$, and since $h_{\alpha_i}$ is a nonzero real multiple of $H_{\alpha_i}$ by [L3], the coroots $h_{\alpha_1},\dots,h_{\alpha_r}$ also form a basis of $\mathfrak h_{\mathbb R}$; because $\mathfrak h=\mathfrak h_{\mathbb R}\oplus i\mathfrak h_{\mathbb R}$ by step 5.1, that basis is a $\mathbb C$-basis of $\mathfrak h$ as well, which proves (v) and completes the proof. [L3, L7, step 5.1, step 6.1] ∎
