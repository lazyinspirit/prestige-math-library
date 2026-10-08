---
id: lem-cg-affine-reflection-identities-and-local-finiteness
kind: lemma
title: "Affine reflections: translation form, involutivity, local finiteness, and $W_a=Q^\\vee\\rtimes W$"
status: draft
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 1
deps:
  - def-cg-affine-root-hyperplane-reflection-and-alcove
  - def-reduced-crystallographic-euclidean-root-system
  - def-coroot-and-dual-root-system
  - def-weyl-group-of-a-root-system
  - def-positive-system-and-base-of-simple-roots
  - thm-simple-roots-form-a-basis-and-every-root-has-one-sign-of-integral-coordinates
  - def-root-lattice-coroot-lattice-weight-lattice-and-coweight-lattice
  - def-isometry-and-metric-embedding
  - def-compact-space
  - def-inner-product-space
  - def-real-and-complex-inner-product-space
  - cor-inner-product-induces-a-norm
  - def-linear-basis
  - def-external-semidirect-product
  - thm-external-semidirect-product-is-a-group
  - def-group-homomorphism
  - thm-cauchy-schwarz-in-an-inner-product-space
  - lem-finite-set-has-max
  - thm-of-archimedean
  - def-integers
  - def-natural-numbers
  - lem-nat-embeds-int
  - lem-nat-discrete
  - thm-int-ordered-ring
  - lem-of-abs-value
  - def-metric-topology
  - def-metric-ball
  - thm-metric-open-set-algebra
  - def-connected-component-and-quasicomponent
  - def-path-connected
  - thm-path-connected-implies-connected
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
    - title: "J. Morgan, Lie Groups Fall 2025, Lecture XII: The Affine Weyl Group (Columbia course notes)"
      url: "https://www.math.columbia.edu/~jmorgan/LieGroups2025/2025LGLecture12.pdf"
      locator: "Complete 7-page lecture; §1.1 Definition 1.1 and Claim 2.3 give the affine walls and reflection formula; §2.1–2.2 discuss local finiteness and chambers. Corollary 2.2's proof, PDF p. 3, bounds the chambers for r walls by 2^r. The superscript is lost in plain-text extraction; the local 2^N sign-pattern argument here proves the same bound."
    - title: "P. Magyar, Notes on Schubert classes of a loop group (arXiv:0705.3826)"
      url: "https://arxiv.org/pdf/0705.3826"
      locator: "§1.4, type-A affine Weyl group and affine reflections; its affine-root parameter has the opposite sign from H_{α,k}={x:B(x,α)=k}. Used as a convention comparison only."
    - title: "J. B. Lewis, J. McCammond, T. K. Petersen, P. Schwer, Computing reflection length in an affine Coxeter group, Trans. AMS 371 (2019)"
      url: "https://web.math.ucsb.edu/~jon.mccammond/papers/McCammond-item-47.pdf"
      locator: "§1.3, Definitions 1.9–1.11 and Remark 1.12: affine Euclidean spaces, walls H_{α,j}, the reflection-generated affine group, its translation subgroup and the semidirect-product description. Used for terminology and comparison; the proofs here are local."
    - title: "M. W. Davis, The Geometry and Topology of Coxeter Groups (author manuscript)"
      url: "https://people.math.osu.edu/davis.12/davisbook.pdf"
      locator: "§6.8, especially Theorem 6.8.12, gives Euclidean reflection-group context under Coxeter-matrix hypotheses. Cited for context only, not as a supplier for this root-system proof."
    - title: "N. Perrin, Introduction to Kac-Moody Groups and Lie Algebras"
      url: "https://lmv.math.cnrs.fr/wp-content/uploads/2019/09/km-suite.pdf"
      locator: "§12.2.3, Definition 12.2.17, printed/PDF p. 107, names the untwisted Kac–Moody Weyl group as a semidirect product by the coroot lattice. Cited for terminology only; this item does not use the Lie-theoretic proof."
---

## Statement

With the notation of [[def-cg-affine-root-hyperplane-reflection-and-alcove]]:

**(1) Translation form and reflections.** For all $\alpha\in\Phi$, $k\in\mathbb Z$ and $x\in E$,
$$r_{\alpha,k}(x)=t_{k\alpha^\vee}\bigl(s_\alpha(x)\bigr)=x+k\alpha^\vee-B(x,\alpha)\alpha^\vee,$$
so $r_{\alpha,k}=t_{k\alpha^\vee}\circ s_\alpha$. Moreover $r_{\alpha,k}^2=\mathrm{id}_E$, $r_{\alpha,k}$ fixes $H_{\alpha,k}$ pointwise, and $r_{\alpha,k}$ is the unique Euclidean isometry whose fixed set is $H_{\alpha,k}$ and whose differential acts as $-1$ on the normal line $\mathbb R\alpha$.

**(2) Preservation of the arrangement.** For all $\beta\in\Phi$ and $l\in\mathbb Z$,
$$r_{\alpha,k}(H_{\beta,l})=H_{s_\alpha\beta,\ l-k\,B(\alpha^\vee,\beta)}.$$
Consequently $W_a$ permutes the walls and the alcoves, and $W\le W_a$ (each $s_\alpha=r_{\alpha,0}$) permutes the walls through the origin.

**(3) Local finiteness.** For every compact set $K\subseteq E$, only finitely many walls meet $K$. The union of all walls is closed, its complement is open, every alcove is open and convex, and every point of $E$ has a neighbourhood meeting only finitely many alcoves.

**(4) Simple coroot translations and the semidirect product.** For every simple root $\alpha_s$,
$$t_{\alpha_s^\vee}=r_{\alpha_s,1}\circ r_{\alpha_s,0}\in W_a.$$
The map $\psi:Q^\vee\rtimes W\to\mathrm{Isom}(E)$, $\psi(\lambda,w)=t_\lambda\circ w$, is an injective group homomorphism with image $W_a$. Equivalently,
$$W_a=Q^\vee\rtimes W,$$
and every $g\in W_a$ has a unique decomposition $g=t_\lambda w$ with $\lambda\in Q^\vee$ and $w\in W$, its **Euclidean decomposition**. No choice principle is used.

## Facts & Assumptions

**Given:** A finite-dimensional real inner-product space $(E,B)$, a reduced crystallographic root system $\Phi\subseteq E$, its coroots, Weyl group $W$, positive system with simple roots $\Delta=\{\alpha_s:s\in S\}$, root and coroot lattices $Q,Q^\vee$, Euclidean metric $d_B$ and all affine notation from [[def-cg-affine-root-hyperplane-reflection-and-alcove]].

[F1] $s_\alpha(x)=x-B(x,\alpha)\alpha^\vee$ is an orthogonal reflection, $\alpha^\vee=2\alpha/B(\alpha,\alpha)$, $B(\alpha^\vee,\alpha)=2$, $\alpha\ne0$, and $B(\alpha^\vee,\beta)\in\mathbb Z$ for roots $\alpha,\beta$ ([[def-reduced-crystallographic-euclidean-root-system]], [[def-coroot-and-dual-root-system]], [[def-weyl-group-of-a-root-system]]).

[F2] $\Phi$ is finite and every $s_\alpha$ permutes $\Phi$ ([[def-reduced-crystallographic-euclidean-root-system]], [[def-weyl-group-of-a-root-system]]).

[F3] The chosen regular vector $v$ defines positive roots by $B(v,\alpha)>0$; the simple roots form a real basis and every positive root has nonnegative integral coordinates in it; $Q^\vee$ is the integer span of all coroots, and each $\alpha_s^\vee$ is a positive multiple of $\alpha_s$ ([[def-positive-system-and-base-of-simple-roots]], [[thm-simple-roots-form-a-basis-and-every-root-has-one-sign-of-integral-coordinates]], [[def-root-lattice-coroot-lattice-weight-lattice-and-coweight-lattice]], [[def-coroot-and-dual-root-system]]).

[F4] Compactness means every open cover has a finite subcover; every nonempty finite set of reals has a maximum; and the natural numbers are cofinal in $\mathbb R$ ([[def-compact-space]], [[lem-finite-set-has-max]], [[thm-of-archimedean]]).

[F5] The external product has multiplication $(\lambda,w)(\mu,v)=(\lambda+w\mu,wv)$ for the action of $W$ on $Q^\vee$ by automorphisms, and this multiplication makes it a group ([[def-external-semidirect-product]], [[thm-external-semidirect-product-is-a-group]]).

[F6] In a real inner-product space, $|B(u,v)|\le\|u\|_B\|v\|_B$ ([[def-real-and-complex-inner-product-space]], [[thm-cauchy-schwarz-in-an-inner-product-space]]).

[F7] Every nonnegative integer is the image of a unique natural under the order-preserving embedding $\mathbb N\hookrightarrow\mathbb Z$; a natural $N$ is its finite set of predecessors; and distinct integers differ in absolute value by at least $1$ ([[def-integers]], [[def-natural-numbers]], [[lem-nat-embeds-int]], [[lem-nat-discrete]], [[thm-int-ordered-ring]], [[lem-of-abs-value]]).

[F8] A group homomorphism preserves products ([[def-group-homomorphism]]).

[F9] The induced inner-product norm is homogeneous and satisfies the triangle inequality: $\|\lambda u\|_B=|\lambda|\,\|u\|_B$ and $\|u+v\|_B\le\|u\|_B+\|v\|_B$ ([[cor-inner-product-induces-a-norm]]).

[F10] In a metric topology, each open set contains a ball about each of its points, every open ball is open, and every finite intersection of open sets is open ([[def-metric-topology]], [[def-metric-ball]], [[thm-metric-open-set-algebra]]).

[F11] A path-connected subset is connected, and each connected component is the largest connected subset containing each of its points ([[thm-path-connected-implies-connected]], [[def-connected-component-and-quasicomponent]]).

[F12] The root system spans $E$; therefore $\Phi=\varnothing$ implies $E=\{0\}$ ([[def-reduced-crystallographic-euclidean-root-system]]).

[F13] An isometry of metric spaces is a bijective distance-preserving map ([[def-isometry-and-metric-embedding]]).

## Proof

**Proof technique:** direct.

**Given:** $\alpha,\beta\in\Phi$, $k,l\in\mathbb Z$, $x\in E$, a compact set $K\subseteq E$, and the notation of the statement.

1.1 Substituting the reflection formula from [F1] gives $t_{k\alpha^\vee}(s_\alpha(x))=x-B(x,\alpha)\alpha^\vee+k\alpha^\vee=x-(B(x,\alpha)-k)\alpha^\vee=r_{\alpha,k}(x)$, proving the translation form. [F1, algebra]

1.2 If $K=\varnothing$ there are no walls meeting it. Otherwise fix $\alpha\in\Phi$ and for each real $c>0$ put $U_c=\{x\in E:|B(x,\alpha)|<c\}$. For $x\in U_c$, Cauchy–Schwarz from [F6] shows that every $y$ with $d_B(x,y)<(c-|B(x,\alpha)|)/\|\alpha\|_B$ also lies in $U_c$, so $U_c$ is open. Its traces $U_c\cap K$ form an open cover of the subspace $K$, since $x\in U_{|B(x,\alpha)|+1}$; compactness gives finitely many parameters $c_0,\dots,c_n$ with $K\subseteq\bigcup_i U_{c_i}$. Set $C_\alpha=\max_i c_i$, which exists by [F4]; then $|B(x,\alpha)|<C_\alpha$ for all $x\in K$. By Archimedeanness choose a natural $N>C_\alpha$. If $H_{\alpha,k}$ meets $K$, then $|k|<N$; [F7] identifies $|k|$ with a natural $j<N$, so the possible integers are on the finite list $0,\pm1,\dots,\pm(N-1)$. Thus only finitely many $k$ occur for this root, and finiteness of $\Phi$ gives finitely many walls in total. [F1, F2, F4, F6, F7]

1.3 If $\Phi=\varnothing$, the arrangement is empty. Otherwise, for any $p\in E$ the finite intersection $U=\bigcap_{\alpha\in\Phi}B\bigl(p,1/(2\|\alpha\|_B)\bigr)$ is an open neighbourhood of $p$ by [F10]. By Cauchy–Schwarz, any wall $H_{\alpha,k}$ meeting $U$ has $|k-B(p,\alpha)|<1/2$; by [F7] at most one integer $k$ occurs for each root, so $U$ meets only finitely many walls. Each wall is closed: if $p\notin H_{\alpha,k}$ then the ball of radius $|B(p,\alpha)-k|/(2\|\alpha\|_B)$ about $p$ misses it by the same inequality. Since only finitely many walls meet $U$, their union is closed; around any point outside the full union, remove this finite closed union from $U$ to obtain a neighbourhood avoiding every wall. Hence the full union is closed and its complement is open. [F1, F2, F6, F7, F10, algebra]

1.4 The formula $\psi(\lambda,w)(x)=\lambda+w(x)$ and the multiplication in [F5] give $\psi(\lambda,w)\circ\psi(\mu,v)(x)=\lambda+w\mu+wv(x)=\psi(\lambda+w\mu,wv)(x)$, so $\psi$ is a group homomorphism. If $\psi(\lambda,w)=\mathrm{id}_E$, evaluating at $0$ gives $\lambda=0$, after which $w(x)=x$ for all $x$ and $w=1$; thus $\psi$ is injective. [F5, algebra]

1.5 The coroot set $\Phi^\vee$ is a reduced crystallographic root system: it is finite, nonzero and spanning because each coroot is a nonzero multiple of its root; reducedness follows from [F1] and the involution $(\alpha^\vee)^\vee=\alpha$. Its root reflection is $s_{\alpha^\vee}=s_\alpha$, and orthogonality gives $s_\alpha(\beta^\vee)=(s_\alpha\beta)^\vee$, so it preserves $\Phi^\vee$. Its Cartan numbers are $B((\alpha^\vee)^\vee,\beta^\vee)=B(\alpha,\beta^\vee)\in\mathbb Z$ by [F1]. Use the same regular vector that defines the given positive roots; coroots have the same signs as their roots. If $\beta=\sum_s n_s\alpha_s$ is positive, then $\beta^\vee=\sum_s n_s B(\alpha_s,\alpha_s)/B(\beta,\beta)\,\alpha_s^\vee$ has nonnegative real coordinates. Thus an equality $\alpha_s^\vee=\beta^\vee+\gamma^\vee$ for positive coroots forces both $\beta,\gamma$ onto the line of $\alpha_s$ by coordinatewise nonnegativity. Reducedness then forces both to equal $\alpha_s$, contradicting the equality. Hence every $\alpha_s^\vee$ is dual-simple. In applying [F3] to this dual system, the sign split used in its linear-independence argument is justified as follows: for any finite family of positive roots $\beta_j$, if $\sum_j c_j\beta_j^\vee=0$ with $c_j\ge0$ and some $c_j>0$, then
$$B\!\left(v,\sum_j c_j\beta_j^\vee\right)=\sum_j c_j\frac{2B(v,\beta_j)}{B(\beta_j,\beta_j)}>0,$$
contradiction; negating rules out a nonzero relation with all $c_s\le0$. Thus every nontrivial relation among the dual simple roots has both positive and negative coefficients, even before identifying the complete dual simple set; this is the case treated in the remainder of that signed-integral basis proof. Apply the signed integral basis theorem in [F3] to the now-verified dual root system: its simple set is a basis with exactly $\dim E=|S|$ elements, so it equals $\{\alpha_s^\vee:s\in S\}$. Every coroot is therefore an integral combination of the simple coroots, proving $Q^\vee=\bigoplus_s\mathbb Z\alpha_s^\vee$. This includes the empty system and all orthogonal components. [F1, F2, F3, algebra]

2.1 By [F1], $B(r_{\alpha,k}(x),\alpha)=B(x,\alpha)-(B(x,\alpha)-k)B(\alpha^\vee,\alpha)=2k-B(x,\alpha)$. Thus $B(r_{\alpha,k}(x),\alpha)-k=k-B(x,\alpha)$, and substituting this into the formula for a second application gives $r_{\alpha,k}^2(x)=x$. Also $r_{\alpha,k}(x)=x$ exactly when $(B(x,\alpha)-k)\alpha^\vee=0$, which by $\alpha^\vee\ne0$ is equivalent to $x\in H_{\alpha,k}$. [F1, step 1.1, algebra]

2.2 Let $C$ be an alcove and $x\in C$. Since the complement of the wall union is open by step 1.3, a ball around $x$ lies in it; the ball is path-connected by straight segments and hence connected by [F11], so it lies in the connected component $C$. Thus $C$ is open. For any wall $H_{\beta,l}$, both strict halfspaces are open by the Cauchy–Schwarz estimate in step 1.2 and [F10], so $C\cap\{y:B(y,\beta)<l\}$ and $C\cap\{y:B(y,\beta)>l\}$ are relatively open and partition $C$; connectedness forces one to be empty. Therefore any $x,y\in C$ lie on the same strict side of every wall, and linearity of $B(-,\beta)$ shows their segment avoids every wall. That segment is connected, meets $C$, and lies in the complement, so it lies in $C$; hence $C$ is convex. [F10, F11, step 1.2, step 1.3]

2.3 If $\Phi=\varnothing$, then $E=\{0\}$ by [F12]; the arrangement is empty and $E$ itself is the unique alcove, so the local-finiteness claim is immediate. Otherwise fix $p\in E$ and take the neighbourhood $U$ from step 1.3. It is convex: if $x,y\in U$, $t\in[0,1]$, and $\alpha\in\Phi$, then membership in $B(p,1/(2\|\alpha\|_B))$ and [F9] give $\|(1-t)x+ty-p\|_B\le(1-t)\|x-p\|_B+t\|y-p\|_B<1/(2\|\alpha\|_B)$, so $(1-t)x+ty\in U$. List the finitely many walls meeting $U$ as $H_1,\dots,H_N$. A point of an alcove meeting $U$ determines a sign for each listed wall. If two alcoves meeting $U$ have the same sign vector, take one point from each; every wall outside the list misses $U$, and a segment in the convex set $U$ cannot join opposite sides of a wall without meeting it. The segment between the two points therefore stays in the same strict halfspace for each listed wall and misses every wall outside the list, so it lies in the complement and connects the points. They belong to the same connected component. There are at most $2^N$ sign vectors, hence only finitely many alcoves meet $U$. [F9, F11, F12, step 1.3, algebra]

3.1 The identity, composition and inverses of bijective distance-preserving maps are again bijective and distance-preserving: for a composition this follows by applying the two distance equalities in succession, and for an inverse it follows by writing $x=f^{-1}(u)$ and $y=f^{-1}(v)$ in $d_B(f(x),f(y))=d_B(x,y)$. Thus $\mathrm{Isom}(E)$ is a group under composition by [F13]. For all $x,y\in E$, $d_B(t_{k\alpha^\vee}x,t_{k\alpha^\vee}y)=\|x-y\|_B=d_B(x,y)$, and $d_B(s_\alpha x,s_\alpha y)=\|s_\alpha(x-y)\|_B=\|x-y\|_B$ because $s_\alpha$ is orthogonal by [F1]. By step 2.1, $r_{\alpha,k}$ is bijective; by step 1.1 it is the composition of those two distance-preserving maps, so it belongs to $\mathrm{Isom}(E)$. Its linear part fixes $H_{\alpha,0}$ pointwise and sends $\mathbb R\alpha$ to its negative, so its differential acts as $-1$ on the normal line. [F1, F13, step 1.1, step 2.1, algebra]

3.2 For uniqueness, let $g$ be a Euclidean isometry with fixed set $H_{\alpha,k}$. Put $h=x-\frac{B(x,\alpha)-k}{B(\alpha,\alpha)}\alpha\in H_{\alpha,k}$. For every $u$ with $B(u,\alpha)=0$, both $h$ and $h+u$ are fixed by $g$; equality of squared distances from $g(x)$ and $x$ to these two points gives $B(g(x)-h,u)=0$ and $\|g(x)-h\|_B=\|x-h\|_B$. Write $g(x)-h=c\alpha+u_0$ with $c=B(g(x)-h,\alpha)/B(\alpha,\alpha)$ and $u_0\in\{u:B(u,\alpha)=0\}$. Since $\alpha$ is orthogonal to that subspace, $u_0$ is orthogonal to it too; in particular $B(u_0,u_0)=0$, so $u_0=0$. Also write $x-h=t\alpha$. The norm equality gives $c=\pm t$. If $t=0$, then $x=h$ and $g(x)=x$; if $t\ne0$, the condition $\operatorname{Fix}(g)=H_{\alpha,k}$ excludes $c=t$, so $c=-t$. Hence $g(x)=h-t\alpha=r_{\alpha,k}(x)$ for every $x$, proving uniqueness. [F1, step 2.1, algebra]

3.3 If $y\in H_{\beta,l}$, then orthogonality of $s_\alpha$ and $s_\alpha(\alpha^\vee)=-\alpha^\vee$ give $B(r_{\alpha,k}(y),s_\alpha\beta)=B(s_\alpha y,s_\alpha\beta)+kB(\alpha^\vee,s_\alpha\beta)=l-kB(\alpha^\vee,\beta)$. The level on the right is an integer by [F1], and $s_\alpha\beta\in\Phi$ by [F2]; since $r_{\alpha,k}$ is an involution, this proves the wall-image equality. [F1, F2, step 2.1, algebra]


4.1 Each generator $r_{\alpha,k}$ therefore permutes the wall arrangement. It is a homeomorphism, so it preserves the complement and maps connected components to connected components; hence $W_a$ permutes the alcoves. For $k=0$, step 1.1 gives $r_{\alpha,0}=s_\alpha$, so the generators of $W$ lie in $W_a$ and permute the walls through the origin. [F1, step 1.1, step 3.3]

5.1 By step 1.1, $r_{\alpha_s,1}\circ r_{\alpha_s,0}=t_{\alpha_s^\vee}$ for each simple root. The simple coroots form a basis of $E$ and generate $Q^\vee$ by step 1.5, so the translations $t_\lambda$ for all $\lambda\in Q^\vee$ lie in $W_a$; also $W\le W_a$ by step 4.1. Therefore every value $\psi(\lambda,w)=t_\lambda\circ w$ lies in $W_a$. [F1, step 1.1, step 4.1, step 1.5]

6.1 Every generator $r_{\alpha,k}$ equals $\psi(k\alpha^\vee,s_\alpha)$ by step 1.1, and each inverse is the same generator by step 2.1. By [F8], every finite word in these images is the image under $\psi$ of the corresponding product in $Q^\vee\rtimes W$. Since such words form $W_a$, this proves $W_a\subseteq\operatorname{im}\psi$. Together with step 5.1 we get $\operatorname{im}\psi=W_a$; injectivity from step 1.4 then gives the claimed unique Euclidean decomposition. All arguments use only finite subcovers, finite lists and finite sums; no choice principle is used. [F8, step 1.1, step 1.4, step 2.1, step 5.1] ∎

## Remark

The coroot set $\Phi^\vee$ is a reduced crystallographic root system with $s_{\alpha^\vee}=s_\alpha$. Its simple roots are the simple coroots $\alpha_s^\vee$, which form a real basis of $E$ and integrally generate every coroot; hence $Q^\vee=\bigoplus_{s\in S}\mathbb Z\alpha_s^\vee$.
