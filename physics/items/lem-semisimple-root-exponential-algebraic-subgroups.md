---
id: lem-semisimple-root-exponential-algebraic-subgroups
kind: lemma
title: Algebraic root subgroups from root exponentials
status: published
origin: pipeline
landmark: false
deps:
  - def-complex-semisimple-algebraic-group-borel-and-flag-variety
  - def-root-and-root-space-relative-to-a-cartan-subalgebra
  - lem-affine-algebraic-group-faithful-rational-representation
  - thm-root-sl-two-triple
  - thm-root-spaces-of-a-complex-semisimple-lie-algebra-are-one-dimensional
  - thm-weyls-complete-reducibility-theorem
  - def-axiom-of-choice
  - thm-finite-dimensional-representations-of-sl-two
  - prop-exponential-map-is-natural-for-lie-group-homomorphisms
proof_strategy: constructive
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
    - title: "J. S. Milne, Algebraic Groups (2022)"
      url: https://www.jmilne.org/math/Books/iAG2022.pdf
      locator: "Chapters 7 and 17, especially 7.18 and 17.3"
    - title: "Brian Conrad, Reductive Group Schemes"
      url: https://math.stanford.edu/~conrad/papers/luminysga3smf.pdf
      locator: "§§1.2, 1.4, especially Theorem 1.2.7 and Proposition 1.4.7"
---

## Statement

Assume the Axiom of Choice. Let $G$ be the connected simply connected complex
semisimple affine algebraic group with maximal torus $T$ and root system
$\Phi$ fixed in [[def-complex-semisimple-algebraic-group-borel-and-flag-variety]],
and let $\alpha\in\Phi$ be a root with root space $\mathfrak g_\alpha$
([[def-root-and-root-space-relative-to-a-cartan-subalgebra]]). Since
$\mathfrak g_\alpha$ is stable under $\operatorname{Ad}(T)$, the torus $T$ acts
on it by a character; write $\alpha(t)$ for its value at $t\in T$, so that
$\operatorname{Ad}(t)(x)=\alpha(t)x$ for $x\in\mathfrak g_\alpha$ and the
differential of that character at the identity is the functional
$\alpha\in\mathfrak h^*$.

For every nonzero $e_\alpha\in\mathfrak g_\alpha$ the exponential curve
$z\mapsto\exp_G(ze_\alpha)$ is given by polynomial matrix coefficients, and
there is an isomorphism of algebraic groups
$$u_\alpha:\mathbb G_a\longrightarrow G,\qquad u_\alpha(z)=\exp_G(ze_\alpha),$$
onto a closed connected one-dimensional subgroup
$U_\alpha\subseteq G$ whose differential at $0$ is the isomorphism
$\mathbb C\to\mathfrak g_\alpha$, $1\mapsto e_\alpha$. The subgroup $U_\alpha$
is normalized by $T$, and
$$t\,u_\alpha(z)\,t^{-1}=u_\alpha\bigl(\alpha(t)z\bigr)\qquad\text{for all }t\in T,\ z\in\mathbb C .$$
Replacing $e_\alpha$ by $ce_\alpha$ with $c\in\mathbb C^\times$ replaces
$u_\alpha$ by $z\mapsto u_\alpha(cz)$ and leaves $U_\alpha$ unchanged, so
$U_\alpha$ depends only on the root $\alpha$ and not on the chosen root vector.

If $f_\alpha\in\mathfrak g_{-\alpha}$ and $h_\alpha$ satisfy
$[e_\alpha,f_\alpha]=h_\alpha$, $[h_\alpha,e_\alpha]=2e_\alpha$ and
$[h_\alpha,f_\alpha]=-2f_\alpha$ as in [[thm-root-sl-two-triple]], then the span
of $e_\alpha,f_\alpha,h_\alpha$ is a Lie subalgebra of $\mathfrak g$ isomorphic
to $\mathfrak{sl}_2$; applying the construction to the opposite root $-\alpha$
and the vector $f_\alpha$ gives the opposite closed subgroup $U_{-\alpha}$ with
$\operatorname{Lie}U_{-\alpha}=\mathfrak g_{-\alpha}$.

## Facts & Assumptions

**Given:** the group $G$, its maximal torus $T$, the root system $\Phi$ and its
root spaces as fixed in the standing definition; a root $\alpha\in\Phi$ and a
nonzero root vector $e_\alpha\in\mathfrak g_\alpha$.

[F1] Every finite-type affine algebraic group over $\mathbb C$ admits a
finite-dimensional rational representation whose comorphism is surjective, so
that $G$ is isomorphic to a closed subgroup scheme of some $GL(V)$.
([[lem-affine-algebraic-group-faithful-rational-representation]])

[F2] For a root $\alpha$ there are $e_\alpha\in\mathfrak g_\alpha$ and
$f_\alpha\in\mathfrak g_{-\alpha}$ with $[e_\alpha,f_\alpha]=h_\alpha$,
$[h_\alpha,e_\alpha]=2e_\alpha$ and $[h_\alpha,f_\alpha]=-2f_\alpha$, where
$h_\alpha$ is the coroot element; the span of the three is a copy of
$\mathfrak{sl}_2$ inside $\mathfrak g$. ([[thm-root-sl-two-triple]])

[F3] Every root space of a finite-dimensional complex semisimple Lie algebra
with respect to a Cartan subalgebra is one-dimensional.
([[thm-root-spaces-of-a-complex-semisimple-lie-algebra-are-one-dimensional]])

[F4] Every finite-dimensional representation of a finite-dimensional
semisimple Lie algebra over a characteristic-zero field is completely
reducible. ([[thm-weyls-complete-reducibility-theorem]])

[F5] For a finite-dimensional $\mathfrak{sl}_2$-module $V\ne0$ the operator
$h$ acts diagonalisably with integer eigenvalues; on an irreducible $V\ne0$
these eigenvalues are $m,m-2,\dots,-m$ for some integer $m\ge0$, each on a
one-dimensional eigenspace. ([[thm-finite-dimensional-representations-of-sl-two]])

[F6] If $F:G\to H$ is a homomorphism of finite-dimensional real Lie groups,
then $F(\exp_G X)=\exp_H(dF_eX)$ for every $X\in\operatorname{Lie}G$.
([[prop-exponential-map-is-natural-for-lie-group-homomorphisms]])

[F8] For $\lambda\in\mathfrak h^*$ the root space $\mathfrak g_\lambda$
consists of the $x\in\mathfrak g$ with $[H,x]=\lambda(H)x$ for all
$H\in\mathfrak h$. ([[def-root-and-root-space-relative-to-a-cartan-subalgebra]])

## Proof

1.1 By [F1] fix a faithful finite-dimensional rational representation $\rho:G\to GL(V)$ whose comorphism is surjective and identify $G$ with the closed subgroup scheme $\rho(G)\subseteq GL(V)$; then $\mathfrak g$ is a Lie subalgebra of $\mathfrak{gl}(V)$ and $d\rho_e$ is the inclusion $\mathfrak g\hookrightarrow\mathfrak{gl}(V)$, so we may regard $e_\alpha\in\mathfrak g\subseteq\mathfrak{gl}(V)$ as an endomorphism of the finite-dimensional space $V$. [F1, given]

1.2 The subalgebra of $\mathfrak g$ spanned by $e_\alpha,f_\alpha,h_\alpha$ is isomorphic to $\mathfrak{sl}_2$ with standard basis $(e,f,h)$ by [F2], so restriction makes $V$ a finite-dimensional $\mathfrak{sl}_2$-module; by [F4] it is a direct sum of irreducible submodules, and by [F5] the operator $h_\alpha$ acts diagonalisably with integer eigenvalues on $V$ and $e_\alpha$ raises each eigenvalue by $2$, while on an irreducible submodule the eigenvalue set is $m,m-2,\dots,-m$. Since $V$ is a finite direct sum of such modules and the eigenvalues occurring are therefore bounded above and below, some positive power of $e_\alpha$ annihilates $V$, that is $e_\alpha$ is a nilpotent endomorphism of $V$. [F2, F4, F5, algebra]

2.1 Because $e_\alpha$ is nilpotent, say $e_\alpha^N=0$, the series $\exp(ze_\alpha)=\sum_{k\ge0}z^ke_\alpha^k/k!$ is a finite sum, so each matrix entry of $\exp(ze_\alpha)$ is a polynomial in $z$: the map $z\mapsto\exp(ze_\alpha)$ is a morphism of varieties $\mathbb A^1\to GL(V)$, and $\exp(ze_\alpha)$ is a unipotent matrix for every $z\in\mathbb C$. [step 1.2, construct]

2.2 The closed-immersion representation $\rho:G\to GL(V)$ of step 1.1 is a homomorphism of finite-dimensional real Lie groups with $d\rho_e$ the inclusion $\mathfrak g\hookrightarrow\mathfrak{gl}(V)$, so [F6] applied to $X=ze_\alpha\in\mathfrak g$ gives $\rho(\exp_G(ze_\alpha))=\exp(ze_\alpha)$ for every real $z$; identifying $G$ with its image in $GL(V)$, this says that $\exp(ze_\alpha)\in G$ for every real $z$. [F1, F6, step 1.1]

3.1 Choose polynomial functions $f_1,\dots,f_m$ generating the vanishing ideal of the closed subvariety $G\subseteq GL(V)$. Each composite $z\mapsto f_i(\exp(ze_\alpha))$ is a polynomial in $z$ by step 2.1 and vanishes for every real $z$ by step 2.2, hence is the zero polynomial; so $\exp(ze_\alpha)\in G$ for every $z\in\mathbb C$, and $u_\alpha:\mathbb A^1\to G$, $u_\alpha(z)=\exp(ze_\alpha)$, is a well-defined morphism of varieties. [step 2.1, step 2.2, given]

4.1 The morphism $u_\alpha$ is a group homomorphism: since $[e_\alpha,e_\alpha]=0$ the commuting elements $ze_\alpha$ and $we_\alpha$ satisfy $\exp((z+w)e_\alpha)=\exp(ze_\alpha)\exp(we_\alpha)$, that is $u_\alpha(z+w)=u_\alpha(z)u_\alpha(w)$, and $u_\alpha(0)=1$. Its differential at $0$, computed through the closed embedding of step 1.1, sends the generator $1$ of $\operatorname{Lie}\mathbb A^1=\mathbb C$ to $e_\alpha\ne0$, so $du_\alpha$ is injective. [step 3.1, given]

4.2 For $t\in T$ the conjugation map $c_t:G\to G$, $c_t(g)=tgt^{-1}$, is an automorphism of algebraic groups with $dc_t=\operatorname{Ad}(t)$; by [F8] and the definition of the character $\alpha$ in the statement, $\operatorname{Ad}(t)$ acts on $\mathfrak g_\alpha$ as $\alpha(t)$, so [F6] applied to $c_t$ and $X=ze_\alpha$ gives $t\,u_\alpha(z)\,t^{-1}=c_t(\exp(ze_\alpha))=\exp(\operatorname{Ad}(t)(ze_\alpha))=\exp(\alpha(t)ze_\alpha)=u_\alpha(\alpha(t)z)$ for all $t\in T$ and $z\in\mathbb C$. Hence $T$ normalizes and stabilizes $U_\alpha$. [F6, F8, step 3.1, algebra]

4.3 Write $E=d\rho_e(e_\alpha)$, so $E^N=0$ for some $N\ge2$ by step 1.2 and $E\ne0$ by faithfulness in step 1.1. Choose a linear functional $\ell:\operatorname{End}(V)\to\mathbb C$ with $\ell(E)=1$. On all of $G$ define the regular function $$r(g)=\ell\left(\sum_{j=1}^{N-1}\frac{(-1)^{j+1}}{j}(\rho(g)-I)^j\right).$$ This is a polynomial in the regular matrix entries of $\rho(g)$. In the nilpotent algebra $\mathbb C[E]/(E^N)$ the finite formal identities $\log(\exp(zE))=zE$ hold, so $r(u_\alpha(z))=\ell(zE)=z$ for every $z$ and, as a polynomial identity, for every test $\mathbb C$-algebra. Thus $r\circ u_\alpha=\operatorname{id}_{\mathbb A^1}$ as morphisms of schemes. [F1, step 1.1, step 1.2, step 3.1, construct]

5.1 Since $G$ is affine, the morphism $r:G\to\mathbb A^1$ is separated. Its section $u_\alpha$, established in step 4.3, is therefore a closed immersion: the graph of the section is the inverse image of the diagonal of the separated scheme $G$ under $(\operatorname{id}_G,u_\alpha\circ r)$, and its image is exactly the equalizer of these two morphisms. Put $U_\alpha=u_\alpha(\mathbb A^1)$ with this closed subscheme structure. The restriction $r|_{U_\alpha}$ is a regular inverse to $u_\alpha$, so $u_\alpha:\mathbb G_a\xrightarrow{\sim}U_\alpha$ is an isomorphism of algebraic group schemes, not merely a bijection on complex points. By step 4.1 its differential takes $1$ to $e_\alpha$, hence $\operatorname{Lie}U_\alpha=\mathbb C e_\alpha=\mathfrak g_\alpha$ by [F3]. [F1, F3, step 4.1, step 4.3, algebra]

6.1 If $e_\alpha$ is replaced by $ce_\alpha$ with $c\in\mathbb C^\times$, then $\exp(zce_\alpha)=u_\alpha(cz)$ by the same exponential series, so the image subgroup $U_\alpha$ is unchanged; applying the construction of step 1.1 to the root $-\alpha$ and the vector $f_\alpha\in\mathfrak g_{-\alpha}$ of [F2] produces the opposite closed subgroup $U_{-\alpha}$ with $\operatorname{Lie}U_{-\alpha}=\mathfrak g_{-\alpha}$, and [F2] also gives that $e_\alpha,f_\alpha,h_\alpha$ span a copy of $\mathfrak{sl}_2$. The Axiom of Choice is assumed in the statement and supplies the countable-choice hypothesis for exponential naturality [F6] at steps 2.2 and 4.2; the finitely many choices of $\rho$, $\ell$, $f_1,\dots,f_m$ and $f_\alpha$ add no choice principle. [F2, F6, step 5.1, discharge-construct] ∎
