---
id: lem-semisimple-flag-torsor-zariski-charts
kind: lemma
title: Zariski sections of Borel and minimal-parabolic orbit maps
status: published
origin: pipeline
landmark: false
deps:
  - def-complex-semisimple-algebraic-group-borel-and-flag-variety
  - lem-semisimple-borel-root-factorization
  - lem-affine-algebraic-group-faithful-rational-representation
  - lem-semisimple-minimal-parabolic-root-subgroup
  - lem-semisimple-opposite-borel-big-cell
  - lem-semisimple-rational-pluecker-highest-weight-modules
  - lem-semisimple-projective-orbit-flag-quotients
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  references:
    - title: "J. S. Milne, Algebraic Groups"
      url: https://www.jmilne.org/math/Books/iAG2022.pdf
      locator: "Chapters 7, 17, 20-23, especially 21.68-21.91 and 23.59"
    - title: "Brian Conrad, Reductive Group Schemes"
      url: https://math.stanford.edu/~conrad/papers/luminysga3smf.pdf
      locator: "§§1.2, 1.4, especially Theorems 1.2.7, 1.4.12, Proposition 1.4.7"
    - title: "Michel Brion, Lectures on the Geometry of Flag Varieties"
      url: https://www-fourier.univ-grenoble-alpes.fr/~mbrion/lecturesrev.pdf
      locator: "§§1.2-1.4 and §2.1"
---

## Statement

Assume the Axiom of Choice. Let $G$ be the connected simply connected complex
semisimple affine algebraic group with maximal torus $T$, root system $\Phi$,
positive system $\Phi^+$, Borel subgroup $B=T\ltimes U$, opposite unipotent
subgroup $U^-$ and Weyl group $W=N_G(T)/T$ of
[[def-complex-semisimple-algebraic-group-borel-and-flag-variety]] and
[[lem-semisimple-borel-root-factorization]], fix a simple root
$\alpha\in\Delta$ with minimal parabolic $P_\alpha$ as in
[[lem-semisimple-minimal-parabolic-root-subgroup]], put
$U^-_\alpha=\prod_{\beta\in\Phi^+,\ \beta\neq\alpha}U_{-\beta}$, and let
$X_B=G/B\subseteq\mathbb P(W_B)$ and
$X_\alpha=G/P_\alpha\subseteq\mathbb P(W_\alpha)$ be the closed orbits with
orbit maps $\pi_B:G\to X_B$, $\pi_\alpha:G\to X_\alpha$ of
[[lem-semisimple-projective-orbit-flag-quotients]]. Write
$\Omega=U^-B$ for the open big cell. Then:

(i) the orbit map restricted to $\Omega$ factors through the projection
$\Omega\to\Omega/B\cong U^-$ as an injective morphism
$\sigma_B:U^-\to X_B$ with
$\pi_B^{-1}\bigl(\sigma_B(U^-)\bigr)=\Omega$ and
$\sigma_B(U^-)\times B\cong\Omega$ exhibiting $\pi_B$ as the trivial
$B$-torsor over the chart $\sigma_B(U^-)$; the same holds for $\pi_\alpha$ with
the morphism $\sigma_\alpha:U^-_\alpha\to X_\alpha$, $\sigma_\alpha(u)=u[v_\alpha]$,
the subgroup $P_\alpha$ in place of $B$, and the open subset
$U^-_\alpha P_\alpha\subseteq G$ in place of $\Omega$;

(ii) each chart in (i) is a Zariski-open subscheme of its orbit, and all its single $G$-translates cover that orbit. Every translate has the transported product trivialization. Since the projective orbits are quasi-compact, finite subfamilies of these open translates also cover them;

(iii) consequently $\pi_B$ and $\pi_\alpha$ represent Zariski-locally trivial right $B$- and $P_\alpha$-torsors. Their fppf sheaf quotients are $X_B$ and $X_\alpha$, and each associated bundle, including $G\times^B\mathbb C_{-\lambda}$, is Zariski locally trivial on the translated charts.

## Facts & Assumptions

**Given:** the group $G$ with $T$, $B=T\ltimes U$, $U^\pm$, $\Phi$, $\Phi^+$, $\Delta$ and $W=N_G(T)/T$ with representatives $n_w$, the simple root $\alpha$, the minimal parabolic $P_\alpha$, the orbits $X_B$, $X_\alpha$ with orbit maps $\pi_B$, $\pi_\alpha$, the open big cell $\Omega=U^-B$, and the subgroup $U^-_\alpha=\prod_{\beta\in\Phi^+,\beta\neq\alpha}U_{-\beta}$.

[F1] $U=\prod_{\beta\in\Phi^+}U_\beta$ and $U^-=\prod_{\beta\in\Phi^+}U_{-\beta}$ in height-compatible orders are closed connected unipotent subgroups with $\operatorname{Lie}U=\mathfrak n^+$, $\operatorname{Lie}U^-=\mathfrak n^-$; $T$ normalizes $U$ and $U^-$, $T\cap U=T\cap U^-=1$, and $U^-\cap B=1$. The negative-root product has polynomial height-compatible coordinates. ([[lem-semisimple-borel-root-factorization]])

[F2] The multiplication $m:U^-\times T\times U\to G$ is an isomorphism onto a nonempty open subscheme $\Omega\subseteq G$ with $\Omega=U^-B=B^-U$, dense in $G$; the multiplication $U^-\times B\to\Omega$, $(u,b)\mapsto ub$, is an isomorphism, so the quotient $\Omega/B$ of $\Omega$ by right translation by $B$ exists and is isomorphic to $U^-$. ([[lem-semisimple-opposite-borel-big-cell]])

[F3] The finite-type affine algebraic group $G$ admits a faithful finite-dimensional rational representation, hence a closed embedding into $GL(V)$ in which the elements of the unipotent subgroup $U^-_\alpha$ are unipotent matrices. ([[lem-affine-algebraic-group-faithful-rational-representation]])

[F4] $P_\alpha$ is a closed connected subgroup containing $B$ and $U_{-\alpha}$ with $P_\alpha=B\sqcup Bn_\alpha B$ and $\operatorname{Lie}P_\alpha=\mathfrak b\oplus\mathfrak g_{-\alpha}$. ([[lem-semisimple-minimal-parabolic-root-subgroup]])

[F5] $W_B=L(2\rho)$ and $W_\alpha=L(2\rho-\alpha)$ are finite-dimensional rational representations of $G$ whose lines $\mathbb C v_B$, $\mathbb C v_\alpha$ are $B$-stable; the orbit maps $\pi_B(g)=g[v_B]$, $\pi_\alpha(g)=g[v_\alpha]$ have fibres exactly the right $B$-cosets, respectively the right $P_\alpha$-cosets, of $G$, and their images are the closed orbits $X_B=G/B$, $X_\alpha=G/P_\alpha$. ([[lem-semisimple-rational-pluecker-highest-weight-modules]], [[lem-semisimple-projective-orbit-flag-quotients]])

[F6] $G$ acts on $X_B$ and $X_\alpha$ by automorphisms of varieties, transitively on their point sets, and the root spaces $\mathfrak g_\gamma$ are one-dimensional with $\mathfrak n^-=\bigoplus_{\beta\in\Phi^+}\mathfrak g_{-\beta}$ and $\dim X_B=|\Phi^+|$, $\dim X_\alpha=|\Phi^+|-1$. ([[lem-semisimple-projective-orbit-flag-quotients]], [[def-complex-semisimple-algebraic-group-borel-and-flag-variety]])

[F7] The Axiom of Choice is [[def-axiom-of-choice]]; it is inherited through the suppliers of [F1]-[F6].

## Proof

**Proof technique:** direct.

1.1 Define $\sigma_B(u)=u[v_B]$ for $u\in U^-$. By [F2] the multiplication $U^-\times B\to\Omega$ is an isomorphism, and $\pi_B(ub)=u[v_B]$ by [F5]. On complex points $\pi_B^{-1}(\sigma_B(U^-))=U^-B=\Omega$, since equality $g[v_B]=u[v_B]$ is equivalent to $u^{-1}g\in B$. Likewise $\sigma_B$ is injective on complex points because $U^-\cap B=1$ by [F1]. [F1, F2, F5]

1.2 The set of negative roots other than $-\alpha$ is closed under root addition, so its root-space sum is a nilpotent Lie subalgebra. The finite polynomial exponential/logarithm and height-recursive BCH coordinates of [F1] make its image $U^-_\alpha$ a closed connected subgroup of $U^-$; they also give a polynomial product isomorphism $U^-_\alpha\times U_{-\alpha}\to U^-$, since at each height the $-\alpha$ coordinate and the remaining coordinates are solved separately. The product $U^-_\alpha\times P_\alpha\to G$ is injective on complex points. Indeed the Lie algebra of $U^-_\alpha\cap P_\alpha$ is contained in $\bigoplus_{\beta>0,\beta\ne\alpha}\mathfrak g_{-\beta}\cap(\mathfrak b\oplus\mathfrak g_{-\alpha})=0$ by [F1], [F4] and [F6]. The local dimension is at most its tangent-space dimension, so this finite-type intersection has dimension zero and finitely many complex points. Every element of $U^-_\alpha$ acts as a unipotent matrix in the faithful representation of [F3], and a finite-order unipotent matrix in characteristic zero is the identity: its minimal polynomial divides both $(t-1)^N$ and $t^m-1$, whose gcd is $t-1$. Hence $U^-_\alpha\cap P_\alpha=1$. Every element of $U^-$ factors as $u'u_{-\alpha}$ with $u'\in U^-_\alpha$ by [F1] and $u_{-\alpha}\in P_\alpha$ by [F4]. Therefore $\sigma_\alpha(u')=u'[v_\alpha]$ is injective on complex points, and $\pi_\alpha^{-1}(\sigma_\alpha(U^-_\alpha))=U^-_\alpha P_\alpha$ on complex points, by the stabilizer equality in [F5]. [F1, F3, F4, F5, F6]

2.1 Both chart maps are open immersions. The closed-point stabilizer equalities of [F5] are equalities of finite-type subgroup schemes: those stabilizers and $B,P_\alpha$ are smooth over $\mathbb C$, hence reduced, and reduced finite-type closed subschemes with the same complex points coincide. Thus the differential of each orbit map $G\to X_H$ at the identity has kernel $\operatorname{Lie}H$ for $H=B,P_\alpha$. The tangent complements $\operatorname{Lie}U^-\oplus\mathfrak b=\mathfrak g$ and $\operatorname{Lie}U^-_\alpha\oplus\operatorname{Lie}P_\alpha=\mathfrak g$ follow from [F1], [F4] and [F6]. Since both orbit spaces are smooth of dimensions $\dim U^-$ and $\dim U^-_\alpha$ by [F6], the differentials of $\sigma_B$ and $\sigma_\alpha$ are isomorphisms at the identity, and equivariance under the left $U^-$ or $U^-_\alpha$ action gives the same at every closed point. The smooth finite-type Jacobian criterion makes the maps étale at every closed point, hence everywhere because the non-étale locus is closed in these Jacobson source schemes. By steps 1.1 and 1.2 each is injective on complex points. An étale map has open diagonal, while these maps between separated $\mathbb C$-schemes have closed diagonal. Thus the complement of the diagonal in the finite-type fibre product is an open subscheme. If nonempty, it has a complex point, contradicting pointwise injectivity. Each chart map is therefore an étale monomorphism and thus an open immersion. [F1, F4, F5, F6, step 1.1, step 1.2, construct]

3.1 The product maps $U^-\times B\to G$ and $U^-_\alpha\times P_\alpha\to G$ are étale at the identity because their differential is the direct-sum isomorphism of step 2.1; equivariance by left and right translations makes them étale everywhere. They are injective on complex points by [F1] and step 1.2, so the diagonal argument of step 2.1 makes them open immersions. Their images are precisely the point preimages of the open chart images under the corresponding orbit maps by steps 1.1 and 1.2. Since both sides are open reduced finite-type subschemes of $G$ with the same complex points, they coincide as schemes. Each product is right $H$-equivariant, with right $H$ acting only on its second factor. Hence over each chart $V_H$ the orbit map is the product projection $V_H\times H\to V_H$, a Zariski-locally trivial $H$-torsor. [F1, F2, F4, F5, step 1.1, step 1.2, step 2.1, construct]

4.1 For each $x\in X_H$, transitivity of the $G$-action in [F5] gives $x=g[eH]$ for some $g\in G$; since the identity coset lies in $V_H$, the open translate $gV_H$ contains $x$. Thus all single $G$-translates of $V_H$ cover $X_H$; quasi-compactness of the projective $X_H$ gives a finite subcover when needed. Translation transports the product torsor of step 3.1 to each $gV_H$. For any test scheme $S$, fppf locally a map $S\to X_H$ factors through these charts, where its lifts form an $H$-torsor and two lifts differ by a unique $H$-section. Consequently the sheafification of $G(S)/H(S)$ is represented by $X_H$; the product charts also trivialize every associated bundle. This proves (i)–(iii). The Axiom of Choice enters through [F7] and its cited suppliers. [F5, F6, F7, step 2.1, step 3.1, discharge-construct] ∎
