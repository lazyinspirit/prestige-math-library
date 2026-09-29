---
id: lem-flag-line-bundle-degree-on-minimal-parabolic-fibre
kind: lemma
title: Flag line-bundle degree on a minimal-parabolic fiber
status: draft
origin: pipeline
landmark: false
deps:
  - def-complex-semisimple-algebraic-group-borel-and-flag-variety
  - def-borel-character-equivariant-line-bundle
  - thm-minimal-parabolic-flag-projection-is-p1-bundle
  - lem-semisimple-flag-torsor-zariski-charts
  - lem-semisimple-minimal-parabolic-root-subgroup
  - lem-semisimple-rank-one-sl2-root-homomorphism
  - lem-semisimple-borel-root-factorization
  - def-coroot-and-dual-root-system
  - thm-root-sl-two-triple
  - def-root-and-root-space-relative-to-a-cartan-subalgebra
  - def-projective-line-two-affine-cover-and-twisting-sheaf
  - lem-uniqueness-of-twists-on-the-projective-line
  - thm-gluing-sheaves
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  references:
    - title: "J. S. Milne, Algebraic Groups"
      url: https://www.jmilne.org/math/Books/iAG2022.pdf
      locator: "Chapters 7, 17, 20-23, especially 7.18, 17.3, 20.32, 21.68-21.91, 22.17-22.27, 23.59"
    - title: "Brian Conrad, Reductive Group Schemes"
      url: https://math.stanford.edu/~conrad/papers/luminysga3smf.pdf
      locator: "§§1.2, 1.4, especially Theorems 1.2.7, 1.4.12, Proposition 1.4.7 and Corollary 1.4.13"
    - title: "Michel Brion, Lectures on the Geometry of Flag Varieties"
      url: https://www-fourier.univ-grenoble-alpes.fr/~mbrion/lecturesrev.pdf
      locator: "§§1.2-1.4 and §2.1; general-linear comparison only"
    - title: "Jacob Lurie, A Proof of the Borel-Weil-Bott Theorem"
      url: https://people.math.harvard.edu/~lurie/papers/bwb.pdf
      locator: "Complete three-page note, especially Theorems 1 and 3 and Lemma 4"
---

## Statement

Assume the Axiom of Choice. Let $G$ be the connected simply connected complex
semisimple affine algebraic group with Borel $B=T\ltimes U$ and flag variety
$X_B=G/B$ of [[def-complex-semisimple-algebraic-group-borel-and-flag-variety]]
and [[lem-semisimple-borel-root-factorization]], let $\alpha$ be a simple root
with minimal parabolic $P_\alpha=B\sqcup Bn_\alpha B$ and Weyl representative
$n_\alpha$ of [[lem-semisimple-minimal-parabolic-root-subgroup]], and let
$$\mathcal L_\lambda=G\times^B\mathbb C_{-\lambda}$$
be the equivariant line bundle of
[[def-borel-character-equivariant-line-bundle]] attached to the character
$\lambda\in X^*(T)$.

Let $F=P_\alpha[v_B]\subseteq X_B$ be the fibre of the flag projection
$X_B\to X_\alpha$ over $[v_\alpha]$, described by the two charts
$$\Phi_0:\mathbb A^1\longrightarrow F,\ z\mapsto u_{-\alpha}(z)[v_B],\qquad \Phi_\infty:\mathbb A^1\longrightarrow F,\ s\mapsto u_\alpha(s)n_\alpha[v_B],$$
glued on the overlap by $s=z^{-1}$, as in
[[thm-minimal-parabolic-flag-projection-is-p1-bundle]]. Fix once and for all
the identification of $F$ with the two-affine projective line
$\mathbb P^1_{\mathbb C}$ of
[[def-projective-line-two-affine-cover-and-twisting-sheaf]], whose charts
$U_0=\operatorname{Spec}\mathbb C[t]$ and
$U_\infty=\operatorname{Spec}\mathbb C[u]$ are glued by $tu=1$ and whose
twists $\mathcal O(n)$ are glued by $e_\infty=t^ne_0$, by sending the
$z$-chart to $U_0$ with $t=z$ and the $s$-chart to $U_\infty$ with $u=s$.

Then the restriction $\mathcal L_\lambda|_F$ is isomorphic to
$\mathcal O_{\mathbb P^1}(\langle\lambda,\alpha^\vee\rangle)$ under this
identification; its degree is $\langle\lambda,\alpha^\vee\rangle$. In
particular $\mathcal L_\alpha|_F$ has degree $2$ and
$\mathcal L_{-\alpha}|_F$ has degree $-2$.

## Facts & Assumptions

**Given:** the group $G$, its Borel $B=T\ltimes U$, the simple root $\alpha$, the minimal parabolic $P_\alpha=B\sqcup Bn_\alpha B$, the fibre $F=P_\alpha[v_B]$ of the flag projection, the equivariant line bundles $\mathcal L_\lambda=G\times^B\mathbb C_{-\lambda}$, and the Axiom of Choice.

[A1] The Axiom of Choice states that every family of nonempty sets has a choice function. ([[def-axiom-of-choice]])

[F1] The induced map $f:X_B\to X_\alpha$, $g[v_B]\mapsto g[v_\alpha]$, is a surjective morphism of varieties whose fibre over $g[v_\alpha]$ is canonically the coset space $P_\alpha/B$, which is $\mathbb P^1$ in the two-chart description $z\mapsto u_{-\alpha}(z)B$, $s\mapsto u_\alpha(s)n_\alpha B$ with $s=z^{-1}$. ([[thm-minimal-parabolic-flag-projection-is-p1-bundle]])

[F2] $P_\alpha=B\sqcup Bn_\alpha B$ is a closed connected subgroup of $G$ with $\operatorname{Lie}P_\alpha=\mathfrak b\oplus\mathfrak g_{-\alpha}$, and its algebraic quotient $P_\alpha/B$ is covered by the two affine charts $z\mapsto u_{-\alpha}(z)B$ and $s\mapsto u_\alpha(s)n_\alpha B$, each isomorphic to $\mathbb A^1$ and glued by $s=z^{-1}$, the first chart hitting $B$ and every point of $Bn_\alpha B/B$ except $n_\alpha B$, the second hitting $n_\alpha B$ and every point of $Bn_\alpha B/B$ except $B$. ([[lem-semisimple-minimal-parabolic-root-subgroup]])

[F3] $\varphi_\alpha:SL_2(\mathbb C)\to G$ is a morphism of algebraic groups that maps the standard unipotent subgroups isomorphically onto the root subgroups, $\varphi_\alpha\begin{pmatrix}1&z\\0&1\end{pmatrix}=u_\alpha(z)$ and $\varphi_\alpha\begin{pmatrix}1&0\\z&1\end{pmatrix}=u_{-\alpha}(z)$ for all $z$, with $\varphi_\alpha(w)=n_\alpha$ for $w=\begin{pmatrix}0&-1\\1&0\end{pmatrix}$; it maps the diagonal torus onto the coroot image via $\varphi_\alpha(\operatorname{diag}(u,u^{-1}))=\alpha^\vee(u)\in T$, and for every $\lambda\in X^*(T)$ and $u\in\mathbb C^\times$ one has $\lambda(\alpha^\vee(u))=u^{\langle\lambda,\alpha^\vee\rangle}$ with $\langle\lambda,\alpha^\vee\rangle:=\lambda(h_\alpha)$ the coroot pairing. ([[lem-semisimple-rank-one-sl2-root-homomorphism]])

[F4] $B=T\ltimes U$ is a closed connected solvable subgroup with unipotent radical $U$, the root subgroups $U_\beta$ for $\beta\in\Phi^+$ multiply isomorphically onto $U$, and the restriction of characters is an isomorphism $X^*(B)\to X^*(T)$, so every character of $B$ is trivial on $U$. ([[lem-semisimple-borel-root-factorization]])

[F5] For a reduced crystallographic root system the coroot of $\alpha$ is $\alpha^\vee=2\alpha/(\alpha,\alpha)$. ([[def-coroot-and-dual-root-system]])

[F6] For the root $\alpha$ there are $e_\alpha\in\mathfrak g_\alpha$ and $f_\alpha$ with $[e_\alpha,f_\alpha]=h_\alpha$, $[h_\alpha,e_\alpha]=2e_\alpha$ and $[h_\alpha,f_\alpha]=-2f_\alpha$; the root space $\mathfrak g_\alpha$ consists of the $x\in\mathfrak g$ with $[H,x]=\alpha(H)x$ for all $H\in\mathfrak h$. ([[thm-root-sl-two-triple]], [[def-root-and-root-space-relative-to-a-cartan-subalgebra]])

[F7] The two-affine projective line $\mathbb P^1_{\mathbb C}$ is glued from $U_0=\operatorname{Spec}\mathbb C[t]$ and $U_\infty=\operatorname{Spec}\mathbb C[u]$ along $D(t)\cong D(u)$ with $tu=1$, and for $n\in\mathbb Z$ the sheaf $\mathcal O(n)$ is glued from the structure sheaves with frames $e_0=1$ on $U_0$ and $e_\infty=1$ on $U_\infty$, related on the overlap by $e_\infty=t^ne_0$; each $\mathcal O(n)$ is invertible. ([[def-projective-line-two-affine-cover-and-twisting-sheaf]])

[F8] $\mathcal O_{\mathbb P^1_{\mathbb C}}(n)\cong\mathcal O_{\mathbb P^1_{\mathbb C}}(m)$ if and only if $n=m$; consequently the twist index of an invertible sheaf on $\mathbb P^1_{\mathbb C}$ isomorphic to a twist is well defined. ([[lem-uniqueness-of-twists-on-the-projective-line]])

[F9] Compatible local sheaves with overlap identifications glue to a sheaf unique up to unique isomorphism, and the same objectwise construction gives the analogous gluing result for sheaves of abelian groups, commutative rings, and modules on a fixed ringed space. ([[thm-gluing-sheaves]])

[F10] $\mathcal L_\lambda=G\times^B\mathbb C_{-\lambda}=(G\times\mathbb C)/{\sim}$ with $(gb,v)\sim(g,b\cdot v)$ and $b\cdot v=\lambda(b)^{-1}v$ is a $G$-equivariant line bundle over $X_B$ with projection $[g,v]\mapsto gB$, and its fibre over a point $gB$ is the one-dimensional space $\{[g,v]:v\in\mathbb C\}\cong\mathbb C$; the construction uses the local sections of $G\to X_B$ from [[lem-semisimple-flag-torsor-zariski-charts]]. ([[def-borel-character-equivariant-line-bundle]])

**Proof technique:** direct: trivialize the restriction of $\mathcal L_\lambda$ on the two charts of the minimal-parabolic fibre by explicit frames, compute the change of frame from the $SL_2$ matrix identity $u_+(s)w=u_-(z)\operatorname{diag}(z^{-1},z)u_+(-z)$ at $s=z^{-1}$ transported along $\varphi_\alpha$, read off its character value $z^{\langle\lambda,\alpha^\vee\rangle}$, and match the result with the gluing definition of $\mathcal O(n)$.

## Proof

1.1 The fibre and its two frames. By [F1] the fibre of $f$ over $[v_\alpha]$ is $F=P_\alpha[v_B]=P_\alpha B/B$, and by [F2] it is covered by the two chart maps $z\mapsto u_{-\alpha}(z)[v_B]$ and $s\mapsto u_\alpha(s)n_\alpha[v_B]$; these are injective, agree exactly at $s=z^{-1}$ with $z\ne0$, and their images are complementary in the sense that the first contains $B$ but not $n_\alpha B$ and the second contains $n_\alpha B$ but not $B$, so together they cover $F$. For a point $x$ of the first chart define $e_0(x)=[u_{-\alpha}(z(x)),1]$, where $z(x)$ is the unique preimage of $x$, and for a point $x$ of the second chart define $e_\infty(x)=[u_\alpha(s(x))n_\alpha,1]$. Since $u_{-\alpha}(z)\in P_\alpha$ and $u_\alpha(s)n_\alpha\in P_\alpha$ the classes lie in the fibre of $\mathcal L_\lambda$ at $x$, and by [F10] that fibre is $\{[g,v]:v\in\mathbb C\}\cong\mathbb C$ with the second coordinate $v=1\ne0$, so $e_0$ and $e_\infty$ are nowhere-vanishing sections and therefore frames trivializing $\mathcal L_\lambda|_F$ over the two charts. [F1, F2, F10]

1.2 Matrix identity and change of lift. For $z\in\mathbb C^\times$ put $s=z^{-1}$. Direct multiplication in $SL_2(\mathbb C)$ gives $$u_+(s)w=\begin{pmatrix}s&-1\\1&0\end{pmatrix}=\begin{pmatrix}1&0\\z&1\end{pmatrix}\begin{pmatrix}z^{-1}&-1\\0&z\end{pmatrix}=u_-(z)\operatorname{diag}(z^{-1},z)u_+(-z),$$ where the middle factorisation uses $\operatorname{diag}(z^{-1},z)u_+(-z)=\begin{pmatrix}z^{-1}&-1\\0&z\end{pmatrix}$. Applying the morphism $\varphi_\alpha$ of [F3] to this product identity and using its values on the standard unipotent subgroups, on $w$ and on the diagonal torus gives, in $G$, $$u_\alpha(s)n_\alpha=u_{-\alpha}(z)\,\alpha^\vee(z^{-1})\,u_\alpha(-z)\qquad(s=z^{-1}).$$ The right-hand factor $b_z:=\alpha^\vee(z^{-1})u_\alpha(-z)$ lies in $B$, because $\alpha^\vee(z^{-1})\in T$, $u_\alpha(-z)\in U$ and $B=T\ltimes U$ by [F4]. [F3, F4, algebra]

1.3 Character value of the change of lift. Every character of $B$ is trivial on the unipotent radical by [F4], so $\lambda(u_\alpha(-z))=1$, while [F5] identifies the symbol $\alpha^\vee$ with the coroot of $\alpha$ and [F3] gives $\lambda(\alpha^\vee(z^{-1}))=(z^{-1})^{\langle\lambda,\alpha^\vee\rangle}$. Hence with $m:=\langle\lambda,\alpha^\vee\rangle$ one has $$(-\lambda)(b_z)=\lambda(b_z)^{-1}=\bigl((z^{-1})^m\bigr)^{-1}=z^m .$$ [F3, F4, F5]

2.1 Change of frame. On the overlap, step 1.2 exhibits the same point of $F$ with the two lifts $u_\alpha(s)n_\alpha$ and $u_{-\alpha}(z)$, and the equivalence relation of [F10] applied to $b_z$ gives $$e_\infty(x)=[u_\alpha(s)n_\alpha,1]=[u_{-\alpha}(z)b_z,1]=[u_{-\alpha}(z),b_z\cdot1]=(-\lambda)(b_z)\,[u_{-\alpha}(z),1]=z^m e_0(x).$$ [F10, step 1.2, step 1.3]

3.1 The identification with the standard projective line. Identify $F$ with $\mathbb P^1_{\mathbb C}$ as fixed in the statement by sending the $z$-chart to $U_0$ with $t=z$ and the $s$-chart to $U_\infty$ with $u=s$; the gluing relation $s=z^{-1}$ of the fibre's overlap matches $tu=1$, and by step 1.1 the two charts cover both sides, so this is an isomorphism of varieties using the quotient variety structure supplied by [F2]. Under this identification step 2.1 says that the frames $e_0,e_\infty$ of $\mathcal L_\lambda|_F$ are related by $e_\infty=t^me_0$ on the overlap, which is exactly the prescription by which [F7] glues the invertible sheaf $\mathcal O(m)$ from its two chart trivializations. Both $\mathcal L_\lambda|_F$ and $\mathcal O(m)$ therefore admit trivializations on $U_0$ and $U_\infty$ whose induced overlap identifications agree (both are multiplication by $t^{-m}$), and the uniqueness part of the gluing theorem [F9] gives an isomorphism $\mathcal L_\lambda|_F\cong\mathcal O(m)$ compatible with these trivializations. [F2, F7, F9, step 1.1, step 2.1]

4.1 Degree. By [F8] the twist index of an invertible sheaf on $\mathbb P^1$ that is isomorphic to a twist is well defined, so step 3.1 computes the degree of $\mathcal L_\lambda|_F$ under the fixed identification to be $m=\langle\lambda,\alpha^\vee\rangle$. The computation covers positive, zero and negative $m$: for every $m\in\mathbb Z$ the transition $z^m$ is a unit on the overlap $z\ne0$. [F8, step 3.1]

5.1 The root cases. By [F3] and [F6], $\langle\alpha,\alpha^\vee\rangle=\alpha(h_\alpha)=2$, because $[h_\alpha,e_\alpha]=2e_\alpha$ with $e_\alpha\in\mathfrak g_\alpha$ and $\mathfrak g_\alpha$ consists of the vectors with $[H,x]=\alpha(H)x$; substituting $\lambda=\alpha$ and $\lambda=-\alpha$ in step 4.1 gives $\mathcal L_\alpha|_F\cong\mathcal O(2)$ of degree $2$ and $\mathcal L_{-\alpha}|_F\cong\mathcal O(-2)$ of degree $-2$. For $\lambda=0$ the same computation gives $m=0$ and $\mathcal L_0|_F\cong\mathcal O(0)$, consistent with $\mathcal L_0=\mathcal O_{X_B}$; and a nonzero character with $\langle\lambda,\alpha^\vee\rangle=0$ has degree $0$, so the degree records exactly the restriction of $\lambda$ to the coroot torus $\alpha^\vee(\mathbb C^\times)$. [F3, F6, step 4.1]

6.1 Conclusion. Steps 1.1-2.1 trivialize the restriction and compute the change of frame, step 3.1 identifies it with the standard twist $\mathcal O(m)$, and steps 4.1-5.1 extract the degree $m=\langle\lambda,\alpha^\vee\rangle$ with the special cases $\lambda=\pm\alpha$. The Axiom of Choice [A1] is assumed in the statement and is inherited through the orbit-quotient, minimal-parabolic and flag-torsor suppliers behind [F1], [F2] and [F10]; the argument itself makes no further choice, the only data fixed being the two chart coordinates and the single matrix identity of step 1.2. The quotient, two-chart fibre and associated bundle used here are supplied by [F1], [F2] and [F10]. [A1, F1, F2, F10, step 1.1, step 2.1, step 3.1, step 4.1, step 5.1] ∎
